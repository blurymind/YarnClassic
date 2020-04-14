export const Input = function(app) {
  const self = this;

  this.mouse = { x: 0, y:0 };
  this.mouseY = 0;

  (function Init() {
    // Update mouse x and y on mouse move
    $(document).on('pointermove', function(e) {
      self.mouse.x = e.pageX;
      self.mouse.y = e.pageY;
    });
  })();
};
