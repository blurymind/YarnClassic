import { Utils } from './utils';

export const Workspace = function(app) {
  const self = this;

  const PAN_SMALL_STEP = 100;
  const PAN_BIG_STEP = 500;
  const PAN_TRANSITION_TIME = 100;
  const swalSortWarning = {
      toast: true,
      position: 'bottom',
      icon: 'error',
      title: 'Alignment requires two or more nodes be selected.',
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
  }

  this.canvas = $('.arrows')[0];
  this.context = self.canvas.getContext('2d');
  this.gridCanvas = $('#grid-canvas')[0];
  this.gridContext = self.gridCanvas.getContext('2d');

  this.gridEnabled = true;

  this.updateArrowsThrottle = 50;
  this.updateArrowsInterval = undefined;
  this.deferredArrowsDrawInterval = undefined;
  this.nextArrowsUpdate = Number.NEGATIVE_INFINITY;
  this.isDrawingArrows = false;

  this.selectedNodes = [];

  this.scale = 1;
  this.offset = { x: 0, y: 0 };
  this.transform = { x:0, y:0 };

  this.isMarqueeEnabled = false;
  this.marqueeSelection = [];
  this.marqueeRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
  this.marqueeOffset = [0, 0];

  this.zoomSpeed = 0.005;
  this.zoomLimitMin = 0.05;
  this.zoomLimitMax = 1;

  // setThrottle
  //
  // Sets the redraw throttle
  this.setThrottle = function(value, e) {
    const throttle = e ? e.target.value : value;
    self.updateArrowsThrottle = Utils.clamp(throttle, 16, 250);
  };

  // setTranslation
  //
  // Sets the translation on the transform matrix
  this.setTranslation = function(x, y, time=0) {
    self.transform.x = x;
    self.transform.y = y;
    self.translate(time);
  };

  // shiftTranslation
  //
  // Applies an offset to the translation on the transform matrix
  this.shiftTranslation = function(x, y, time=0) {
    self.setTranslation(
      self.transform.x + x,
      self.transform.y + y,
      time
    );
  };

  // translate
  //
  // Applies translation and scale to the workspace
  this.translate = function(speed) {
    if (speed)
      self.startUpdatingArrows();

    $('.nodes-holder')
      .finish()
      .transition(
        {
          transform:
            'matrix(' +
            self.scale +
            ',0,0,' +
            self.scale +
            ',' +
            self.transform.x +
            ',' +
            self.transform.y +
            ')',
        },
        speed || 0,
        'easeInQuad',
        function() {
          if (speed) {
            self.stopUpdatingArrows();
          }
          self.updateArrows();
          self.updateGrid();
        }
      );
  };

  // toWorkspaceCoordinates
  //
  // Converts "page" coordinates to "workspace" coordinates
  this.toWorkspaceCoordinates = (x, y) => {
    if (app.settings.snapGridEnabled()) {
      return {
        x: self.stepify((x - self.transform.x) / self.scale, app.settings.gridSize()),
        y: self.stepify((y - self.transform.y) / self.scale, app.settings.gridSize())
      };
    } else {
      return {
        x: (x - self.transform.x) / self.scale,
        y: (y - self.transform.y) / self.scale
      }
    };
  };

  // onPanLeft
  //
  // Moves all nodes to the right.
  this.onPanLeft = function() {
    self.shiftTranslation(self.getPanAmount(), 0, PAN_TRANSITION_TIME);
  };

  // onPanRight
  //
  // Moves all nodes to the left.
  this.onPanRight = function() {
    self.shiftTranslation(-self.getPanAmount(), 0, PAN_TRANSITION_TIME);
  };

  // onPanUp
  //
  // Moves all nodes down.
  this.onPanUp = function() {
    self.shiftTranslation(0, self.getPanAmount(), PAN_TRANSITION_TIME);
  };

  // onPanDown
  //
  // Moves all nodes up.
  this.onPanDown = function() {
    self.shiftTranslation(0, -self.getPanAmount(), PAN_TRANSITION_TIME);
  };

  // getPanAmount
  //
  // Get the amount of panning depending on the kind of panning, big or small
  this.getPanAmount = function() {
    return app.input.isShiftDown ?
      self.scale * PAN_SMALL_STEP :
      self.scale * PAN_BIG_STEP;
  };

  // setZoom
  //
  // Sets the zoom to the specified value
  this.setZoom = function(value) {
    self.scale = value / 4;
    self.translate(200);
  };

  // onZoom
  //
  // Zooms in/out interactively applying zoom limits
  this.onZoom = function(x, y, delta) {
    const previousScale = self.scale;
    const scaleChange = delta * self.zoomSpeed * self.scale;

    self.scale = Utils.clamp(
      self.scale + scaleChange,
      self.zoomLimitMin,
      self.zoomLimitMax
    );

    const mouseX = x - self.transform.x;
    const mouseY = y - self.transform.y;
    const newX = mouseX * (self.scale / previousScale);
    const newY = mouseY * (self.scale / previousScale);

    const deltaX = mouseX - newX;
    const deltaY = mouseY - newY;

    self.shiftTranslation(deltaX, deltaY);
  };

  // onDragStart
  //
  // Trigger when the mouse starts dragging over the workspace
  this.onDragStart = function(offset) {
    self.offset.x = offset.x;
    self.offset.y = offset.y;
  };

  // onDrag
  //
  // Handles the drag event depending on the state
  this.onDragUpdate = function(offset) {
    if (self.isMarqueeEnabled) {
      app.workspace.onMarqueeEnd();
    }

    app.workspace.shiftNodes(offset);
  };

  // onDragEnd
  //
  // Trigger when the mouse ends dragging over the workspace
  this.onDragEnd = function() {
    app.data.saveAppStateToLocalStorage();
  };


  // onMarqueeStart
  //
  // Starts drawing the selection marquee
  this.onMarqueeStart = function(offset) {
    self.isMarqueeEnabled = true;

    self.offset.x = offset.x;
    self.offset.y = offset.y;

    self.marqueeSelection = [];
    self.marqueeOffset[0] = 0;
    self.marqueeOffset[1] = 0;
    self.marqueeRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
  };

  // onMarqueeUpdate
  //
  // Updates the selection marquee
  this.onMarqueeUpdate = function(position) {
    if (!self.isMarqueeEnabled)
      return;

    self.updateMarqueeRect(position);
    self.selectNodesInsideMarquee();
  };

  // updateMarqueeRect
  //
  // Updates the with and height of the selection marquee
  this.updateMarqueeRect = function(position) {
    if (position.x > self.offset.x && position.y < self.offset.y) {
      self.marqueeRect.x1 = self.offset.x;
      self.marqueeRect.y1 = position.y;
      self.marqueeRect.x2 = position.x;
      self.marqueeRect.y2 = self.offset.y;
    } else if (position.x > self.offset.x && position.y > self.offset.y) {
      self.marqueeRect.x1 = self.offset.x;
      self.marqueeRect.y1 = self.offset.y;
      self.marqueeRect.x2 = position.x;
      self.marqueeRect.y2 = position.y;
    } else if (position.x < self.offset.x && position.y < self.offset.y) {
      self.marqueeRect.x1 = position.x;
      self.marqueeRect.y1 = position.y;
      self.marqueeRect.x2 = self.offset.x;
      self.marqueeRect.y2 = self.offset.y;
    } else {
      self.marqueeRect.x1 = position.x;
      self.marqueeRect.y1 = self.offset.y;
      self.marqueeRect.x2 = self.offset.x;
      self.marqueeRect.y2 = position.y;
    }

    $('#marquee').css({
      display: 'block',
      x: self.marqueeRect.x1,
      y: self.marqueeRect.y1,
      width: Math.abs(self.marqueeRect.x1 - self.marqueeRect.x2),
      height: Math.abs(self.marqueeRect.y1 - self.marqueeRect.y2)
    });
  };

  // selectNodesInsideMarquee
  //
  // Select nodes which are within the marquee.
  // MarqueeSelection is used to prevent it from deselecting already
  // selected nodes and deselecting onces which have been selected
  // by the marquee.
  this.selectNodesInsideMarquee = function () {
    const m1 = self.toWorkspaceCoordinates(self.marqueeRect.x1, self.marqueeRect.y1);
    const m2 = self.toWorkspaceCoordinates(self.marqueeRect.x2, self.marqueeRect.y2);
    const marqueeCoords = { left: m1.x, right: m2.x, top: m1.y, bottom: m2.y };

    app.nodes().forEach(node => {
      const index = self.marqueeSelection.indexOf(node);
      const alreadySelected = index >= 0;

      const nx = node.x();
      const ny = node.y();
      const nodeCoords = { left: nx, right: nx + node.width, top: ny, bottom: ny + node.height };
      const marqueeOverNode = Utils.rectanglesOverlap(marqueeCoords, nodeCoords);

      if (marqueeOverNode && !alreadySelected) {
        self.selectNodes(node);
        self.marqueeSelection.push(node);
      }

      if (!marqueeOverNode && alreadySelected) {
        self.deselectNodes(node);
        self.marqueeSelection.splice(index, 1);
      }
    });
  };

  // onMarqueeEnd
  //
  // Triggered when the mouse stops dragging over the workspace
  this.onMarqueeEnd = function() {
    if (!self.isMarqueeEnabled)
      return;

    if (self.marqueeSelection.length == 0) {
      self.deselectAll();
    }

    self.isMarqueeEnabled = false;
    self.marqueeSelection = [];
    self.marqueeRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
    $('#marquee').css({ display: 'none', x: 0, y: 0, width: 0, height: 0 });
  };

  // shiftNodes
  //
  // Moves all nodes by a relative offset.
  this.shiftNodes = function(offset) {
    const delta = { x: offset.x - self.offset.x, y: offset.y - self.offset.y };

    self.shiftTranslation (delta.x, delta.y);

    self.offset = offset;
  };

  this.updateGrid = function() {
    const offset = $('.nodes-holder').offset();
    const gridSize = app.settings.gridSize();
    self.gridContext.clearRect(0, 0, self.gridCanvas.width, self.gridCanvas.height);
    if (app.settings.snapGridEnabled()) {
      const width = $(window).width();
      const height = $(window).height();

      const xOffset = (offset.left) % (gridSize * self.scale);
      const yOffset = (offset.top) % (gridSize * self.scale);

      self.gridContext.beginPath();
      self.gridContext.lineWidth = 0.5;
      for (var x = xOffset; x < width; x += gridSize * self.scale) {
        self.gridContext.moveTo(x, 0);
        self.gridContext.lineTo(x, height);
      }

      for (var y = yOffset; y < height; y += gridSize * self.scale) {
        self.gridContext.moveTo(0, y);
        self.gridContext.lineTo(width, y);
      }

      self.gridContext.stroke();
      self.gridContext.closePath();

      if (app.settings.theme() === "blueprint") {
        self.gridContext.beginPath();
        self.gridContext.lineWidth = 0.25;

        const maxCrossDivisions = 16;
        const maxGridSize = 200;
        const crossDivisions = Math.round(Math.min(1, gridSize / maxGridSize) * maxCrossDivisions);
        const divisionsScaled = Math.max(1, Math.round(self.scale * crossDivisions));
        const divisionWidth = ((gridSize * self.scale) / divisionsScaled);

        const xCrossOffset = (offset.left) % (divisionWidth);
        const yCrossOffset = (offset.top) % (divisionWidth);

        for (var x = xCrossOffset; x < width; x += divisionWidth) {
          self.gridContext.moveTo(x, 0);
          self.gridContext.lineTo(x, height);
        }
  
        for (var y = yCrossOffset; y < height; y += divisionWidth) {
          self.gridContext.moveTo(0, y);
          self.gridContext.lineTo(width, y);
        }
  
        self.gridContext.stroke();
        self.gridContext.closePath();
      }
    }
  }

  // startUpdatingArrows
  //
  // Keeps updating arrows during transition
  this.startUpdatingArrows = function() {
    self.stopUpdatingArrows();
    self.updateArrowsInterval = setInterval(self.updateArrows, self.updateArrowsThrottle);
  };

  // stopUpdatingArrows
  //
  // Stops updating arrows after transition
  this.stopUpdatingArrows = function() {
    if (self.updateArrowsInterval) {
      window.clearInterval(self.updateArrowsInterval);
      self.updateArrowsInterval = undefined;
    }
  };

  // updateArrows
  //
  // Redraws all the arrows on the workspace
  this.updateArrows = function() {
    if (self.isDrawingArrows)
      return;

    // Limit the number of calls to updateArrows
    const now = (new Date()).getTime();
    if (now < self.nextArrowsUpdate) {
      if (!self.deferredArrowsDrawInterval) {
        self.deferredArrowsDrawInterval =
          window.setTimeout(self.updateArrows, (self.nextArrowsUpdate + self.updateArrowsThrottle) - now);
      }
      return;
    }

    self.isDrawingArrows = true;
    window.clearInterval(self.deferredArrowsDrawInterval);
    self.deferredArrowsDrawInterval = undefined;
    self.nextArrowsUpdate = (now + self.updateArrowsThrottle);

    const nodes = app.nodes();
    const offset = $('.nodes-holder').offset();
    const scale = self.scale;
    const lineWidth = 3 * scale;
    const arrowWidth = 8 * scale;
    const arrowHeight = 8 * scale;
    const arrowLength = 10;

    const linePoints = [];
    const arrowPoints = [];

    self.canvas.width = $(window).width();
    self.canvas.height = $(window).height();

    // self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.context.lineWidth = lineWidth;
    self.context.strokeStyle = self.context.fillStyle = $('.arrows').css('color');

    for (let node of nodes) {
      node.halfWidth = $(node.element).width() / 2;
      node.halfHeight = $(node.element).height() / 2;

      if (node.linkedTo().length) {
        if (app.settings.lineStyle() === "straight") {
          const fromX = (node.x() + node.halfWidth) * scale + offset.left;
          const fromY = (node.y() + node.halfHeight) * scale + offset.top;
  
          for (let linked of node.linkedTo()) {
            const toX = (linked.x() + linked.halfWidth) * scale + offset.left;
            const toY = (linked.y() + linked.halfHeight) * scale + offset.top;
  
            // Get the normalized direction from -> to
            const distance = Math.sqrt(
              (fromX - toX) * (fromX - toX) + (fromY - toY) * (fromY - toY)
            );
  
            const normal = {
              x: (toX - fromX) / distance,
              y: (toY - fromY) / distance,
            };
  
            const dist = (
              110 + (
                160 * (
                  1 - Math.max(Math.abs(normal.x), Math.abs(normal.y))
                )
              )
            ) * scale;
  
            const from = {
              x: fromX + normal.x * dist,
              y: fromY + normal.y * dist,
            };
  
            const to = {
              x: toX - normal.x * dist,
              y: toY - normal.y * dist,
            };
  
            linePoints.push({x1: from.x, y1: from.y, x2: to.x, y2: to.y});
            arrowPoints.push({
              x1: to.x + normal.x * arrowLength,
              y1: to.y + normal.y * arrowLength,
              x2: to.x - normal.x * arrowWidth - normal.y * arrowHeight,
              y2: to.y - normal.y * arrowWidth + normal.x * arrowHeight,
              x3: to.x - normal.x * arrowWidth + normal.y * arrowHeight,
              y3: to.y - normal.y * arrowWidth - normal.x * arrowHeight
            });
          }
        } else {
          for (let linked of node.linkedTo()) {
            const fromMidX = (node.x() + node.halfWidth) * scale + offset.left;
            const fromMidY = (node.y() + node.halfHeight) * scale + offset.top;
            const toMidX = (linked.x() + linked.halfWidth) * scale + offset.left;
            const toMidY = (linked.y() + linked.halfHeight) * scale + offset.top;

            const direction = (360 - (Math.atan2(toMidY - fromMidY, toMidX - fromMidX) * 180 / Math.PI)) % 360;

            let fromX, fromY, toX, toY;

            var horizontal = false;

            if (direction <= 45 || direction >= 315) {
              horizontal = true;
              fromX = (node.x() + node.width) * scale + offset.left;
              fromY = (node.y() + node.halfHeight) * scale + offset.top;
              toX = (linked.x()) * scale + offset.left - arrowWidth;
              toY = (linked.y() + linked.halfHeight) * scale + offset.top;

              arrowPoints.push({
                x1: toX + arrowWidth,
                y1: toY,
                x2: toX - arrowWidth,
                y2: toY - arrowHeight,
                x3: toX - arrowWidth,
                y3: toY + arrowHeight
              });
            } else if (direction > 45 && direction < 135) {
              horizontal = false;
              fromX = (node.x() + node.halfWidth) * scale + offset.left;
              fromY = (node.y()) * scale + offset.top;
              toX = (linked.x() + linked.halfWidth) * scale + offset.left;
              toY = (linked.y() + node.height) * scale + offset.top + arrowHeight;

              arrowPoints.push({
                x1: toX,
                y1: toY - arrowHeight,
                x2: toX - arrowWidth,
                y2: toY + arrowHeight,
                x3: toX + arrowWidth,
                y3: toY + arrowHeight
              });
            } else if (direction >= 135 && direction <= 225) {
              horizontal = true;
              fromX = (node.x()) * scale + offset.left;
              fromY = (node.y() + node.halfHeight) * scale + offset.top;
              toX = (linked.x() + linked.width) * scale + offset.left + arrowWidth;
              toY = (linked.y() + linked.halfHeight) * scale + offset.top;

              arrowPoints.push({
                x1: toX - arrowWidth,
                y1: toY,
                x2: toX + arrowWidth,
                y2: toY - arrowHeight,
                x3: toX + arrowWidth,
                y3: toY + arrowHeight
              });
            } else if (direction > 225 && direction < 315) {
              horizontal = false;
              fromX = (node.x() + node.halfWidth) * scale + offset.left;
              fromY = (node.y() + node.height) * scale + offset.top;
              toX = (linked.x() + linked.halfWidth) * scale + offset.left;
              toY = (linked.y()) * scale + offset.top - arrowHeight;

              arrowPoints.push({
                x1: toX,
                y1: toY + arrowHeight,
                x2: toX - arrowWidth,
                y2: toY - arrowHeight,
                x3: toX + arrowWidth,
                y3: toY - arrowHeight
              });
            }

            linePoints.push({x1: fromX, y1: fromY, x2: toX, y2: toY, drawHorizontal: horizontal});
          }
        }
      }
    }

    // Batch draw lines
    self.context.beginPath();
    for (let line of linePoints) {
      self.context.moveTo(line.x1, line.y1);
      if (app.settings.lineStyle() === "straight") {
        self.context.lineTo(line.x2, line.y2);
      } else {
        if (line.drawHorizontal === true) {
          self.context.bezierCurveTo(line.x2, line.y1, line.x1, line.y2, line.x2, line.y2);
        } else {
          self.context.bezierCurveTo(line.x1, line.y2, line.x2, line.y1, line.x2, line.y2);
        }
      }
    }
    self.context.stroke();

    // Batch draw arrows
    self.context.beginPath();
    for (let arrow of arrowPoints) {
      self.context.moveTo(arrow.x1, arrow.y1);
      self.context.lineTo(arrow.x2, arrow.y2);
      self.context.lineTo(arrow.x3, arrow.y3);
    }
    self.context.fill();

    self.isDrawingArrows = false;
  };

  // bringToFront
  //
  // Brings the specified node to the top of the nodes stack
  this.bringToFront = function(element) {
    const e = $(element);
    const highestZ = Utils.getHighestZ(e.parent());
    e.css('z-index', highestZ + 1);
  };

  // selectAll
  //
  // Select all nodes on the workspace
  this.selectAll = function() {
    self.selectNodes(app.nodes());
  };

  // deselectAll
  //
  // Deselect all nodes on the workspace
  this.deselectAll = function() {
    self.deselectNodes(app.nodes());
  };

  // selectNodes
  //
  // Adds nodes to the list of selected nodes
  this.selectNodes = function(nodes) {
    const list = Array.isArray(nodes) ? nodes : [nodes];
    for(let node of list) {
      if (!self.selectedNodes.includes(node)){
        self.selectedNodes.push(node);
        node.setSelected(true);
      }
    }
  };

  // deselectNodes
  //
  // Removes nodes from the list of selected nodes
  this.deselectNodes = function(nodes) {
    const list = Array.isArray(nodes) ? nodes : [nodes];
    for(let node of list) {
      const index = self.selectedNodes.indexOf(node);
      if (index >= 0) {
        self.selectedNodes.splice(index, 1);
        node.setSelected(false);
      }
    }
  };

  // getSelectedNodes
  //
  // Returns a copy of the selected nodes array
  // TODO: is it necesssary to always clone the array? Do some research
  this.getSelectedNodes = function() {
    return self.selectedNodes.length === 1 ?
      [self.selectedNodes[0]] :
      Array.apply(this, self.selectedNodes);
  };

  // warpToNodeByIdx
  //
  // Moves the viewport to focus a node from the general nodes list
  this.warpToNodeByIdx = function(idx) {
    self.warpToNode(app.nodes()[idx]);
    app.focusedNodeIdx = idx;
  };

  // warpToSelectedNodeByIdx
  //
  // Moves the viewport to focus a node from the selected nodes list
  this.warpToSelectedNodeByIdx = function(idx) {
    self.warpToNode(self.getSelectedNodes()[idx]);
    app.focusedNodeIdx = idx;
  };

  // warpToNode
  //
  // Moves the viewport to focus the specified node
  this.warpToNode = function(node) {
    node && self.warpToXY(
      node.x() || node.createX,
      node.y() || node.createY
    );
  };

  // warpToXY
  //
  // Moves the viewport to focus the x,y position
  this.warpToXY = function(x, y) {
    const nodeWidth = 100;
    const nodeHeight = 100;
    const nodeXScaled = -(x * self.scale);
    const nodeYScaled = -(y * self.scale);
    const winXCenter = ($(window).width() / 2);
    const winYCenter = $(window).height() / 2;
    const nodeWidthShift = (nodeWidth * self.scale) / 2;
    const nodeHeightShift = (nodeHeight * self.scale) / 2;

    self.setTranslation(
      nodeXScaled + winXCenter - nodeWidthShift + app.getSplitEditorXOffset(),
      nodeYScaled + winYCenter - nodeHeightShift,
      100
    );
  };

  // alignY
  //
  // Align selected nodes relative to a node with the lowest y-value
  this.alignV = function() {
    if (app.input.isCtrlDown) {
      self.reduceAlignV();
      return;
    }

    const selectedNodes = app
      .nodes()
      .filter((el) => {
        return el.selected;
      })
      .sort((a, b) => {
        if (a.y() > b.y()) return 1;
        if (a.y() < b.y()) return -1;
        return 0;
      });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    const referenceNode = selectedNodes.shift();

    selectedNodes.forEach((node, i) => {
      node.moveTo(referenceNode.x(), node.y());
    });
  };

  this.reduceAlignV = function() {
    const SPACING = 210;
    const gridSize = app.settings.gridSize();

    const selectedNodes = app
      .nodes()
      .filter((el) => {
        return el.selected;
      })
      .sort((a, b) => {
        if (a.y() > b.y()) return 1;
        if (a.y() < b.y()) return -1;
        return 0;
      });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    const referenceNode = selectedNodes.shift();
    if (app.settings.snapGridEnabled()) { referenceNode.moveTo(self.stepify(referenceNode.x(), app.settings.gridSize()), self.stepify(referenceNode.y(), app.settings.gridSize())) }

    const nodeEnd = referenceNode.y() + referenceNode.height;
    const betweenSpacing = (gridSize - (nodeEnd % gridSize)) + gridSize;

    selectedNodes.forEach((node, i) => {
      const y = (app.settings.snapGridEnabled()) ? referenceNode.y() + (node.height * (i + 1)) + (betweenSpacing * (i + 1)) : referenceNode.y() + SPACING * (i + 1);
      node.moveTo(referenceNode.x(), y);
    });
  };

  // alignH
  //
  // Align selected nodes relative to a node with the lowest x-value
  this.alignH = function() {
    if (app.input.isCtrlDown) {
      self.reduceAlignH();
      return;
    }

    const selectedNodes = app
      .nodes()
      .filter((el) => {
        return el.selected;
      })
      .sort((a, b) => {
        if (a.x() > b.x()) return 1;
        if (a.x() < b.x()) return -1;
        return 0;
      });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }
    
    const referenceNode = selectedNodes.shift();

    selectedNodes.forEach((node, i) => {
      node.moveTo(node.x(), referenceNode.y());
    });
  };

  this.reduceAlignH = function() {
    const SPACING = 210;
    const gridSize = app.settings.gridSize();

    const selectedNodes = app
      .nodes()
      .filter((el) => {
        return el.selected;
      })
      .sort((a, b) => {
        if (a.x() > b.x()) return 1;
        if (a.x() < b.x()) return -1;
        return 0;
      });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }
    
    const referenceNode = selectedNodes.shift();
    if (app.settings.snapGridEnabled()) { referenceNode.moveTo(self.stepify(referenceNode.x(), gridSize), self.stepify(referenceNode.y(), gridSize)) }

    const nodeEnd = referenceNode.x() + referenceNode.width;
    const betweenSpacing = (gridSize - (nodeEnd % gridSize)) + gridSize;

    selectedNodes.forEach((node, i) => {
      const x = (app.settings.snapGridEnabled()) ? referenceNode.x() + (node.width * (i + 1)) + (betweenSpacing * (i + 1)) : referenceNode.x() + SPACING * (i + 1);
      node.moveTo(x, referenceNode.y());
    });
  };

  // arrangeSpiral
  //
  // Arranges selected nodes in an spiral shape
  this.arrangeSpiral = function() {
    const selectedNodes = self.getSelectedNodes();

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    selectedNodes.forEach( (node, i) => {
      node.moveTo(
        (app.settings.snapGridEnabled()) ? self.stepify(Math.cos(i * 0.5) * (600 + i * 30), app.settings.gridSize()) : Math.cos(i * 0.5) * (600 + i * 30),
        (app.settings.snapGridEnabled()) ? self.stepify(Math.sin(i * 0.5) * (600 + i * 30), app.settings.gridSize()) : Math.cos(i * 0.5) * (600 + i * 30)
      );
    });

    self.warpToXY(0, 0);
  };

  // sortAlphabetical
  //
  // Sorts selected nodes in alphabetical order
  this.sortAlphabetical = function() {
    const selectedNodes = self.getSelectedNodes().sort((a, b) => {
      return a.title().localeCompare(b.title());
    });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    let arrayWidth = Math.round(selectedNodes.length / 2);
    let currentX = 0;
    let currentY = 0;

    const horizontalSpacing = $(selectedNodes[0].element).width() + 30;
    const verticalSpacing = $(selectedNodes[0].element).height() + 30;

    const gridSize = app.settings.gridSize();

    if (app.settings.snapGridEnabled()) { selectedNodes[0].moveTo(self.stepify(selectedNodes[0].x(), gridSize), self.stepify(selectedNodes[0], gridSize)) }

    selectedNodes.forEach((node, i) => {
      if (i % arrayWidth) {
        currentX += 1;
      } else {
        currentY += 1;
        currentX = 0;
      }

      if (i === 1)
        currentY = 0;

      const nodeEndX = selectedNodes[0].x() + selectedNodes[0].width;
      const betweenSpacingX = (gridSize - (nodeEndX % gridSize)) + gridSize;
      const nodeEndY = selectedNodes[0].y() + selectedNodes[0].height;
      const betweenSpacingY = (gridSize - (nodeEndY % gridSize)) + gridSize;

      node.moveTo(
        (app.settings.snapGridEnabled()) ? selectedNodes[0].x() + (currentX * node.width) + (currentX * betweenSpacingX) : selectedNodes[0].x() + currentX * horizontalSpacing,
        (app.settings.snapGridEnabled()) ? selectedNodes[0].y() + (currentY * node.height) + (currentY * betweenSpacingY) : selectedNodes[0].y() + currentY * verticalSpacing
      );
    });

    self.warpToNode(selectedNodes[0]);
  };

  this.stepify = function(num, step_value) {
    return Math.round(num / step_value) * step_value;
  }
};
