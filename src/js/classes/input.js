export const Input = function(app) {
  const self = this;

  const MouseButton = Object.freeze({
    'Left': 0,
    'Middle': 1,
    'Right': 2
  });

  const Key = Object.freeze({
    'Escape': 27,
    'Enter': 31,
    'Space': 32,
    'Left': 37,
    'Up': 38,
    'Right': 39,
    'Down': 40,
    'Delete': 46,
    'A': 65,
    'C': 67,
    'D': 68,
    'O': 79,
    'S': 83,
    'V': 86,
    'W': 87,
    'X': 88,
    'Y': 89,
    'Z': 90
  });

  this.mouse = { x: 0, y:0 };
  this.isDragging = false;
  this.isScreenTouched = false;
  this.isMiddleButtonDown = false;
  this.isShiftDown = false;

  // trackMouseEvents
  //
  // Keeps track of mouse/touch events
  this.trackMouseEvents = function() {
    $('.nodes').on('pointerdown', e => {
      self.isDragging = true;
      self.mouse.x = e.pageX;
      self.mouse.y = e.pageY;

      self.isMiddleButtonDown = (e.button === MouseButton.Middle);

      if (app.inWorkspace()) {
        if (!e.altKey && !e.shiftKey)
          app.workspace.deselectAll();

        switch (e.button) {
        case MouseButton.Left:
          app.workspace.onMarqueeStart({ x: e.pageX, y: e.pageY });
          break;

        case MouseButton.Middle:
          app.workspace.onDragStart({ x: e.pageX, y: e.pageY });
          break;
        }
      }
    });

    window.addEventListener('touchstart', () => {
      self.isScreenTouched = true;
    });

    $(document).on('pointermove', e => {
      self.mouse.x = e.pageX;
      self.mouse.y = e.pageY;
    });

    $(document).on('mousemove touchmove', e => {
      if (self.isDragging) {
        app.focusedNodeIdx = -1;

        const pageX = self.isScreenTouched && e.changedTouches ?
          e.changedTouches[0].pageX :
          e.pageX;

        const pageY = self.isScreenTouched && e.changedTouches ?
          e.changedTouches[0].pageY :
          e.pageY;

        if (app.inWorkspace()) {
          if (e.altKey || self.isMiddleButtonDown || self.isScreenTouched)
            app.workspace.onDragUpdate({x: pageX, y: pageY});
          else
            app.workspace.onMarqueeUpdate({x: pageX, y: pageY});
        }
      }
    });

    $(document).on('pointerup', e => {
      if (e.button === MouseButton.Middle)
        self.isMiddleButtonDown = false;

      self.isDragging = false;

      if (app.inWorkspace()) {
        app.workspace.onDragEnd();
        app.workspace.onMarqueeEnd();
      }
    });

    $('.nodes').mousewheel(event => {
      // https://github.com/InfiniteAmmoInc/Yarn/issues/40
      if (event.altKey)
        return;

      event.preventDefault();

      if (app.inWorkspace())
        app.workspace.onZoom(event.pageX, event.pageY, event.deltaY);
    });

    $(document).contextmenu(e => {
      const isAllowedEl =
        $(e.target).hasClass('nodes') || $(e.target).parents('.nodes').length;

      if (e.button == MouseButton.Right && isAllowedEl) {
        let x = (app.transformOrigin[0] * -1) / app.cachedScale;
        let y = (app.transformOrigin[1] * -1) / app.cachedScale;

        x += e.pageX / app.cachedScale;
        y += e.pageY / app.cachedScale;

        app.newNodeAt(x, y);
      }

      return !isAllowedEl;
    });
  };

  // trackKeyboardEvents
  //
  // Keeps track of keyboard events
  this.trackKeyboardEvents = function() {
    $(document).on('keyup keydown', e => {
      self.isShiftDown = e.shiftKey;
    });

    // Workspace/Editor keyboard shortcuts
    $(document).on('keyup', function(e) {
      if (e.keyCode === Key.Space) {
        if ((app.inWorkspace() && e.altKey) || (app.inEditor() && ! e.altKey))
          return;

        app.cachedScale = 1;

        const selectedNodes = app.workspace.getSelectedNodes();
        const isNodeSelected = selectedNodes.length > 0;
        const nodes = isNodeSelected > 0 ? selectedNodes : app.nodes();

        // Cycle focused node
        ++app.focusedNodeIdx;
        if (app.focusedNodeIdx < 0 || app.focusedNodeIdx >= nodes.length)
          app.focusedNodeIdx = 0 ;

        if (app.inWorkspace()) {
          // Spacebar cycles between all or selected nodes
          if (isNodeSelected) {
            app.workspace.warpToSelectedNodeByIdx(app.focusedNodeIdx);
          } else {
            app.workspace.warpToNodeByIdx(app.focusedNodeIdx);
          }
        }
        else if (app.inEditor()) {
          // alt+Spacebar cycles between nodes and edits the focused node
          app.editNode(app.nodes()[app.focusedNodeIdx]);
        }
      }
    });

    // Workspace keyboard shortcuts (keydown)
    $(document).on('keydown', e => {
      if (!app.inWorkspace())
        return;

      if ((e.metaKey || e.ctrlKey) && e.shiftKey) {
        switch (e.keyCode) {
        case Key.S: app.data.trySave(FILETYPE.JSON); break; // ctrl+shift+s
        case Key.A: app.data.tryAppend(); break; // ctrl+shift+a
        }
      }
      if ((e.metaKey || e.ctrlKey) && e.altKey) {
        switch (e.keyCode) {
        case Key.S: app.data.trySave(FILETYPE.YARN); break;  // ctrl+alt+s
        }
      }
      else if (e.metaKey || e.ctrlKey) {
        switch (e.keyCode) {
        case Key.C: // ctrl+c
          app.nodeClipboard = app.cloneNodeArray(app.workspace.getSelectedNodes());
          break;
        case Key.D: app.workspace.deselectAll(); break; // ctrl+d
        case Key.O: app.data.tryOpenFile(); break; // ctrl+o
        case Key.S: app.data.save(); break; // ctrl+s
        case Key.X: // ctrl+x
          app.nodeClipboard = app.cloneNodeArray(app.workspace.getSelectedNodes());
          app.deleteSelectedNodes();
          break;
        case Key.Y: app.historyDirection('redo'); break; // ctrl+y
        case Key.Z: app.historyDirection('undo'); break; // ctrl+z
        }
      }
      else {
        if (e.keyCode === Key.Delete || e.key === 'Delete')
          app.deleteSelectedNodes();

        // Arrows
        if (!app.$searchField.is(':focus') && !e.ctrlKey && !e.metaKey) {
          if (e.keyCode === Key.A || e.keyCode === Key.Left) // a or left arrow
            app.workspace.onPanLeft();
          else if (e.keyCode === Key.D || e.keyCode === Key.Right) // d or right arrow
            app.workspace.onPanRight();
          else if (e.keyCode === Key.W || e.keyCode === Key.Up) // w or up arrow
            app.workspace.onPanUp();
          else if (e.keyCode === Key.S || e.keyCode === Key.Down) // s or down arrow
            app.workspace.onPanDown();
        }
      }
    });

    // Workspace keyboard shortcuts (keyup)
    $(document).on('keyup', e => {
      if (!app.inWorkspace())
        return;

      if (e.metaKey || e.ctrlKey) {
        switch (e.keyCode) {
        case Key.A: app.workspace.selectAll(); break; // ctrl+a
        case Key.V: app.pasteNodes(); break; // ctrl+v
        }
      }
      else {
        if (e.keyCode === Key.Enter || e.key === 'Enter') {
          const activeNode = app.nodes()[app.focusedNodeIdx];
          if (activeNode)
            app.editNode(activeNode);
          else
            app.editNode(app.nodes()[0]);
        }
      }
    });

    // Editor keyboard shortcuts (keydown)
    $(document).on('keydown', function(e) {
      if (!app.inEditor())
        return;

      if (e.metaKey || e.ctrlKey) {
        switch (e.keyCode) {
        case Key.Escape: app.saveNode(); break;
        case Key.C: self.clipboard = app.editor.getSelectedText(); break;
        case Key.X:
          document.execCommand('copy');
          app.clipboard = app.editor.getSelectedText();
          sapp.insertTextAtCursor('');
          break;
        }
      }
      else {
        switch (e.keyCode) {
        case Key.Escape: app.saveNode(); break;
        }
      }
    });

    // Editor keyboard shortcuts (keup)
    $(document).on('keyup', function(e) {
      if (!app.inEditor())
        return;

      if (e.ctrlKey && e.altKey)
        app.saveNode(); //ctrl+alt+enter closes/saves an open node
    });

    $(document).on('keyup keydown pointerdown pointerup', function(e) {
      if (!app.inEditor())
        return;

      app.updateEditorStats();
    });

    // Preview keyboard shortcuts
    $(document).on('keydown', e => {
      if (!app.editing() || app.previewStory.finished)
        return;

      switch (e.keyCode) {
      case Key.Z:
        app.previewStory.changeTextScrollSpeed(200);
        if (app.previewStory.vnSelectedChoice != -1)
          app.previewStory.vnSelectChoice();
        break;

      case Key.Up:
        if (app.previewStory.vnSelectedChoice != -1)
          app.previewStory.vnUpdateChoice(-1);
        break;

      case Key.Down:
        if (app.previewStory.vnSelectedChoice != -1)
          app.previewStory.vnUpdateChoice(1);
        break;
      }
    });
  };

  // initKnockoutBindings
  //
  // Enables "preventBubble" and "mousedown" bindings on the .html
  this.initKnockoutBindings = function() {
    ko.bindingHandlers.preventBubble = {
      init: function(element, valueAccessor) {
        var eventName = ko.utils.unwrapObservable(valueAccessor());
        ko.utils.registerEventHandler(element, eventName, function(event) {
          event.cancelBubble = true;
          if (event.stopPropagation) event.stopPropagation();
        });
      },
    };

    ko.bindingHandlers.mousedown = {
      init: function(
        element,
        valueAccessor,
        allBindings,
        viewModel,
        bindingContext
      ) {
        var value = ko.unwrap(valueAccessor());
        $(element).mousedown(function() {
          value();
        });
      },
    };
  };

  // init
  //
  // Initializes the input system
  const init = function() {
    self.initKnockoutBindings();
    self.trackMouseEvents();
    self.trackKeyboardEvents();
  };

  init();
};
