import { Utils } from './utils';

export const Workspace = function(app) {
  const UPDATE_ARROWS_THROTTLE_MS = 16;
  const self = this;

  this.canvas = $('.arrows')[0];
  this.context = self.canvas.getContext('2d');

  this.updateArrowsInterval = undefined;
  this.isDrawingArrows = false;
  this.selectedNodes = [];

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
  }

  // updateArrows
  //
  // Redraws all the arrows on the workspace
  this.updateArrows = function() {
    if (self.isDrawingArrows)
      return;

    self.isDrawingArrows = true;

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
    }

    for (let node of nodes) {
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
  }

  // warpToNode
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
};
