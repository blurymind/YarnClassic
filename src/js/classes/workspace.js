import memoizeOne from 'memoize-one';
import { Utils } from './utils';

export const Workspace = function(app) {
  const UPDATE_ARROWS_THROTTLE_MS = 5;
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
  };

  this.getNodeHalfSize = memoizeOne(function(size) {
    return size / 2;
  });

  this.getNormal = memoizeOne(function(fromX, toX, fromY, toY){
    const distance = Math.sqrt(
      (fromX - toX) * (fromX - toX) + (fromY - toY) * (fromY - toY)
    );
    return {
      x: (toX - fromX) / distance,
      y: (toY - fromY) / distance,
    }
  });

  this.getDist = memoizeOne(function(normal, scale){
    return (
      110 + (
        160 * (
          1 - Math.max(Math.abs(normal.x), Math.abs(normal.y))
        )
      )
    ) * scale;
  });

  this.getFrom = memoizeOne(function(fromX, fromY, dist, normal){
    return {
      x: fromX + normal.x * dist,
      y: fromY + normal.y * dist,
    };
  });

  this.getTo = memoizeOne(function(toX, toY, dist, normal){
    return {
      x: toX - normal.x * dist,
      y: toY - normal.y * dist,
    };
  });

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
      node.halfWidth = self.getNodeHalfSize($(node.element).width());
      node.halfHeight = self.getNodeHalfSize($(node.element).width());

      if (node.linkedTo().length) {
        const fromX = (node.x() + node.halfWidth) * scale + offset.left;
        const fromY = (node.y() + node.halfHeight) * scale + offset.top;

        for (let linked of node.linkedTo()) {
          const toX = (linked.x() + linked.halfWidth) * scale + offset.left;
          const toY = (linked.y() + linked.halfHeight) * scale + offset.top;

          // Get the normalized direction from -> to
          const normal = self.getNormal(fromX, toX, fromY, toY);
          const dist = self.getDist(normal, scale);
          const from = self.getFrom(fromX, fromY, dist, normal);
          const to = self.getTo(toX, toY, dist, normal);

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

  // // alignY
  // //
  // // Align selected nodes relative to a node with the lowest y-value
  // this.alignY = function() {
  //   const minY = self.selectedNodes.reduce(
  //     (minY, node) => Math.min(minY, node.y()),
  //     Number.POSITIVE_INFINITY
  //   );

  //   self.selectedNodes.forEach( (node) => {
  //     node.moveTo(node.x(), minY);
  //   });
  // };

  // // alignX
  // //
  // // Align selected nodes relative to a node with the lowest x-value
  // this.alignX = function() {
  //   const minX = self.selectedNodes.reduce(
  //     (minX, node) => Math.min(minX, node.x()),
  //     Number.POSITIVE_INFINITY
  //   );

  //   self.selectedNodes.forEach( (node) => {
  //     node.moveTo(minX, node.y());
  //   });
  // };

  // alignHorizontally
  //
  // Align selected nodes relative to a node with the lowest y-value
  // and equaly distributes the space between left most and right most nodes
  this.distributeHorizontally = function() {
    const minX = self.selectedNodes.reduce(
      (minX, node) => Math.min(minX, node.x()),
      Number.POSITIVE_INFINITY
    );

    const maxX = self.selectedNodes.reduce(
      (maxX, node) => Math.max(maxX, node.x()),
      Number.NEGATIVE_INFINITY
    );

    const minY = self.selectedNodes.reduce(
      (minY, node) => Math.min(minY, node.y()),
      Number.POSITIVE_INFINITY
    );

    const deltaX = (maxX - minX) / (self.selectedNodes.length - 1);
    let currentX = minX;

    self.selectedNodes.forEach( (node) => {
      node.moveTo(currentX, minY);
      currentX += deltaX;
    });
  };

  // distributeVertically
  //
  // Align selected nodes relative to a node with the lowest x-value
  // and equaly distributes the space between top most and bottom most nodes
  this.distributeVertically = function() {
    const minY = self.selectedNodes.reduce(
      (minY, node) => Math.min(minY, node.y()),
      Number.POSITIVE_INFINITY
    );

    const maxY = self.selectedNodes.reduce(
      (maxY, node) => Math.max(maxY, node.y()),
      Number.NEGATIVE_INFINITY
    );

    const minX = self.selectedNodes.reduce(
      (minX, node) => Math.min(minX, node.x()),
      Number.POSITIVE_INFINITY
    );

    const deltaY = (maxY - minY) / (self.selectedNodes.length - 1);
    let currentY = minY;

    self.selectedNodes.forEach( (node) => {
      node.moveTo(minX, currentY);
      currentY += deltaY;
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
