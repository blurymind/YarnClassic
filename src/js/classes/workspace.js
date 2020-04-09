
export const Workspace = function(app) {
  const UPDATE_ARROWS_THROTTLE_MS = 16;
  const self = this;

  this.canvas = $('.arrows')[0];
  this.context = self.canvas.getContext('2d');

  this.updateArrowsInterval = undefined;

  // startUpdatingArrows
  //
  // Keeps updating arrows during transition
  this.startUpdatingArrows = () => {
    self.stopUpdatingArrows();
    self.updateArrowsInterval = setInterval(self.updateArrows, UPDATE_ARROWS_THROTTLE_MS);
  };

  // stopUpdatingArrows
  //
  // Stops updating arrows after transition
  this.stopUpdatingArrows = () => {
    if (self.updateArrowsInterval) {
      window.clearInterval(self.updateArrowsInterval);
      self.updateArrowsInterval = undefined;
    }
  }

  // updateArrows
  //
  // Redraws all the arrows on the workspace
  this.updateArrows = function() {
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
      node.halfHeigth = $(node.element).height() / 2;
    }

    for (let node of nodes) {
      if (node.linkedTo().length) {
        const fromX = (node.x() + node.halfWidth) * scale + offset.left;
        const fromY = (node.y() + node.halfHeigth) * scale + offset.top;

        for (let linked of node.linkedTo()) {
          const toX = (linked.x() + linked.halfWidth) * scale + offset.left;
          const toY = (linked.y() + linked.halfHeigth) * scale + offset.top;

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

          const to = {
            x: toX - normal.x * dist,
            y: toY - normal.y * dist,
          };

          linePoints.push({x1: fromX, y1: fromY, x2: to.x, y2: to.y});
          arrowPoints.push({
            x1: to.x + normal.x * arrowLength,
            y1: to.y + normal.y * arrowLength,
            x2: to.x - normal.x * arrowWidth - normal.y * arrowHeight,
            y2: to.y - normal.y * arrowWidth + normal.x * arrowHeight,
            x3: to.x - normal.x * arrowWidth + normal.y * arrowHeight,
            y3: to.y - normal.y * arrowWidth - normal.x * arrowHeight
          });

          // // draw line
          // self.context.beginPath();
          // self.context.moveTo(from.x, from.y);
          // self.context.lineTo(to.x, to.y);
          // self.context.stroke();

          // // draw arrow
          // self.context.beginPath();
          // self.context.moveTo(to.x + normal.x * 10, to.y + normal.y * 10);
          // self.context.lineTo(
          //   to.x - normal.x * arrowWidth - normal.y * arrowHeight,
          //   to.y - normal.y * arrowWidth + normal.x * arrowHeight
          // );
          // self.context.lineTo(
          //   to.x - normal.x * arrowWidth + normal.y * arrowHeight,
          //   to.y - normal.y * arrowWidth - normal.x * arrowHeight
          // );
          // self.context.fill();
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
  };
};
