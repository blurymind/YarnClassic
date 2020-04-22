import { Utils } from './utils';

export const Workspace = function(app) {
  const self = this;

  const UPDATE_ARROWS_THROTTLE_MS = 50;
  const PAN_SMALL_STEP = 100;
  const PAN_BIG_STEP = 500;
  const PAN_TRANSITION_TIME = 100;

  this.canvas = $('.arrows')[0];
  this.context = self.canvas.getContext('2d');

  this.updateArrowsInterval = undefined;
  this.deferredArrowsDrawInterval = undefined;
  this.nextArrowsUpdate = Number.NEGATIVE_INFINITY;
  this.isDrawingArrows = false;

  this.selectedNodes = [];

  this.offset = { x: 0, y: 0 };

  this.isMarqueeEnabled = false;
  this.marqueeSelection = [];
  this.marqueeRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
  this.marqueeOffset = [0, 0];

  // onPanLeft
  //
  // Moves all nodes to the right.
  // TODO: in the future this should move the viewport to the left, maybe
  // moving the ".nodes-holder"
  this.onPanLeft = function() {
    app.transformOrigin[0] += self.getPanAmount();
    app.translate(PAN_TRANSITION_TIME);
  };

  // onPanRight
  //
  // Moves all nodes to the left.
  // TODO: in the future this should move the viewport to the right, maybe
  // moving the ".nodes-holder"
  this.onPanRight = function() {
    app.transformOrigin[0] -= self.getPanAmount();
    app.translate(PAN_TRANSITION_TIME);
  };

  // onPanUp
  //
  // Moves all nodes down.
  // TODO: in the future this should move the viewport up, maybe
  // moving the ".nodes-holder"
  this.onPanUp = function() {
    app.transformOrigin[1] += self.getPanAmount();
    app.translate(PAN_TRANSITION_TIME);
  };

  // onPanDown
  //
  // Moves all nodes up.
  // TODO: in the future this should move the viewport down, maybe
  // moving the ".nodes-holder"
  this.onPanDown = function() {
    app.transformOrigin[1] -= self.getPanAmount();
    app.translate(PAN_TRANSITION_TIME);
  };

  // getPanAmount
  //
  // Get the amount of panning depending on the kind of panning, big or small
  this.getPanAmount = function() {
    const scale = app.cachedScale || 1;
    return app.input.isShiftDown ?
      scale * PAN_SMALL_STEP :
      scale * PAN_BIG_STEP;
  };

  // onZoom
  //
  // Zooms in/out applying zoom limits
  this.onZoom = function(x, y, delta) {
    const previousScale = app.cachedScale;
    const scaleChange = delta * app.zoomSpeed * app.cachedScale;

    app.cachedScale = Utils.clamp(
      app.cachedScale + scaleChange,
      app.zoomLimitMin,
      app.zoomLimitMax
    );

    const mouseX = x - app.transformOrigin[0];
    const mouseY = y - app.transformOrigin[1];
    const newX = mouseX * (app.cachedScale / previousScale);
    const newY = mouseY * (app.cachedScale / previousScale);
    const deltaX = mouseX - newX;
    const deltaY = mouseY - newY;

    app.transformOrigin[0] += deltaX;
    app.transformOrigin[1] += deltaY;

    app.translate();
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
  this.onDragUpdate = function(position) {
    if (self.isMarqueeEnabled) {
      app.workspace.onMarqueeEnd();
    }

    app.workspace.shiftNodes(position);
  };

  // onDragEnd
  //
  // Trigger when the mouse ends dragging over the workspace
  this.onDragEnd = function() {
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
    const scale = app.cachedScale;
    app.nodes().forEach(node => {
      const index = self.marqueeSelection.indexOf(node);
      const inMarqueeSelection = index >= 0;

      const holder = $('.nodes-holder').offset();
      const marqueeOverNode =
        (self.marqueeRect.x2 - holder.left) / scale > node.x() &&
        (self.marqueeRect.x1 - holder.left) / scale < node.x() + node.tempWidth &&
        (self.marqueeRect.y2 - holder.top)  / scale > node.y() &&
        (self.marqueeRect.y1 - holder.top)  / scale < node.y() + node.tempHeight;

      if (marqueeOverNode) {
        if (!inMarqueeSelection) {
          self.addNodesToSelection(node);
          self.marqueeSelection.push(node);
        }
      } else {
        if (inMarqueeSelection) {
          self.removeNodesFromSelection(node);
          self.marqueeSelection.splice(index, 1);
        }
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
  // TODO: move the nodes' holder instead of moving all nodes
  this.shiftNodes = function(position) {
    app.nodes().forEach( node => {
      node.x(node.x() + (position.x - self.offset.x) / app.cachedScale);
      node.y(node.y() + (position.y - self.offset.y) / app.cachedScale);
    });

    self.offset.x = position.x;
    self.offset.y = position.y;

    self.updateArrows();
  };

  // startUpdatingArrows
  //
  // Keeps updating arrows during transition
  this.startUpdatingArrows = function() {
    self.stopUpdatingArrows();
    self.updateArrowsInterval = setInterval(self.updateArrows, UPDATE_ARROWS_THROTTLE_MS);
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
          window.setTimeout(self.updateArrows, (self.nextArrowsUpdate + UPDATE_ARROWS_THROTTLE_MS) - now);
      }
      return;
    }

    self.isDrawingArrows = true;
    self.nextArrowsUpdate = (now + UPDATE_ARROWS_THROTTLE_MS);
    window.clearInterval(self.deferredArrowsDrawInterval);
    self.deferredArrowsDrawInterval = undefined;

    const nodes = app.nodes();
    const offset = $('.nodes-holder').offset();
    const scale = app.cachedScale;
    const lineWidth = 3 * scale;
    const arrowWidth = 8 * scale;
    const arrowHeight = 6 * scale;
    const arrowLength = 10;

    const linePoints = [];
    const arrowPoints = [];

    self.canvas.width = $(window).width();
    self.canvas.height = $(window).height();

    // self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.context.lineWidth = lineWidth;
    self.context.strokeStyle = self.context.fillStyle = 'rgba(0, 0, 0, 1)';

    for (let node of nodes) {
      node.halfWidth = $(node.element).width() / 2;
      node.halfHeight = $(node.element).height() / 2;

      if (node.linkedTo().length) {
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
      }
    }

    // Batch draw lines
    self.context.beginPath();
    for (let line of linePoints) {
      self.context.moveTo(line.x1, line.y1);
      self.context.lineTo(line.x2, line.y2);
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
    self.addNodesToSelection(app.nodes());
  };

  // deselectAll
  //
  // Deselect all nodes on the workspace
  this.deselectAll = function() {
    self.removeNodesFromSelection(app.nodes());
  };

  // addNodesToSelection
  //
  // Adds nodes to the list of selected nodes
  this.addNodesToSelection = function(nodes) {
    const list = Array.isArray(nodes) ? nodes : [nodes];
    for(let node of list) {
      if (!self.selectedNodes.includes(node)){
        self.selectedNodes.push(node);
        node.setSelected(true);
      }
    }
  };

  // removeNodesFromSelection
  //
  // Removes nodes from the list of selected nodes
  this.removeNodesFromSelection = function(nodes) {
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
    node && self.warpToXY(node.x(), node.y());
  };

  // warpToXY
  //
  // Moves the viewport to focus the x,y position
  this.warpToXY = function(x, y) {
    const nodeWidth = 100;
    const nodeHeight = 100;
    const nodeXScaled = -(x * app.cachedScale);
    const nodeYScaled = -(y * app.cachedScale);
    const winXCenter = $(window).width() / 2;
    const winYCenter = $(window).height() / 2;
    const nodeWidthShift = (nodeWidth * app.cachedScale) / 2;
    const nodeHeightShift = (nodeHeight * app.cachedScale) / 2;

    app.transformOrigin[0] = nodeXScaled + winXCenter - nodeWidthShift;
    app.transformOrigin[1] = nodeYScaled + winYCenter - nodeHeightShift;

    app.translate(100);
  };

  // alignY
  //
  // Align selected nodes relative to a node with the lowest y-value
  this.alignY = function() {
    const SPACING = 210;

    const selectedNodes = app
        .nodes()
        .filter((el) => {
          return el.selected;
        })
        .sort((a, b) => {
          if (a.y() > b.y()) return 1;
          if (a.y() < b.y()) return -1;
          return 0;
        }),

      referenceNode = selectedNodes.shift();

    if (!selectedNodes.length) {
      alert('Select nodes to align');
      return;
    }

    selectedNodes.forEach((node, i) => {
      const y = referenceNode.y() + SPACING * (i + 1);
      node.moveTo(referenceNode.x(), y);
    });
  };

  // alignX
  //
  // Align selected nodes relative to a node with the lowest x-value
  this.alignX = function() {
    const SPACING = 210;

    const selectedNodes = app
        .nodes()
        .filter((el) => {
          return el.selected;
        })
        .sort((a, b) => {
          if (a.x() > b.x()) return 1;
          if (a.x() < b.x()) return -1;
          return 0;
        }),

      referenceNode = selectedNodes.shift();

    if (!selectedNodes.length) {
      alert('Select nodes to align');
      return;
    }

    selectedNodes.forEach((node, i) => {
      const x = referenceNode.x() + SPACING * (i + 1);
      node.moveTo(x, referenceNode.y());
    });
  };

  // arrangeSpiral
  //
  // Arranges selected nodes in an spiral shape
  this.arrangeSpiral = function() {
    self.getSelectedNodes().forEach( (node, i) => {
      node.moveTo(
        Math.cos(i * 0.5) * (600 + i * 30),
        Math.sin(i * 0.5) * (600 + i * 30)
      );
    });
  };

  // sortAlphabetical
  //
  // Sorts selected nodes in alphabetical order
  this.sortAlphabetical = function() {
    const selectedNodes = self.getSelectedNodes().sort((a, b) => {
      return a.title().localeCompare(b.title());
    });

    if (!selectedNodes.length)
      return;

    let arrayWidth = Math.round(selectedNodes.length / 2);
    let currentX = 0;
    let currentY = 0;

    const horizontalSpacing = $(selectedNodes[0].element).width() + 30;
    const verticalSpacing = $(selectedNodes[0].element).height() + 30;

    selectedNodes.forEach((node, i) => {
      if (i % arrayWidth) {
        currentX += 1;
      } else {
        currentY += 1;
        currentX = 0;
      }

      if (i === 1)
        currentY = 0;

      node.moveTo(
        selectedNodes[0].x() + currentX * horizontalSpacing,
        selectedNodes[0].y() + currentY * verticalSpacing
      );
    });

    self.warpToNode(selectedNodes[0]);
  };
};
