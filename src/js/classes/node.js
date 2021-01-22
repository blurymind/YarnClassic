import { Utils } from './utils';

let globalNodeIndex = 0;
const ClipNodeTextLength = 1024;

export let Node = function(options = {}) {
  const self = this;

  this.titleStyles = [
    'title-style-1',
    'title-style-2',
    'title-style-3',
    'title-style-4',
    'title-style-5',
    'title-style-6',
    'title-style-7',
    'title-style-8',
    'title-style-9',
  ];

  // primary values
  this.index = ko.observable(globalNodeIndex++);
  this.title = ko.observable(options.title || app.getUniqueTitle());
  this.tags = ko.observable(options.tags || '');
  this.body = ko.observable(options.body || 'Empty Text');
  this.active = ko.observable(options.active || true);
  this.width = 200;
  this.height = 200;
  this.tempOpacity = null;
  this.style = null;
  this.colorID = ko.observable(options.colorID || 0);
  this.checked = false;
  this.selected = false;
  this.createX = options.x || null;
  this.createY = options.y || null;
  this.undoManager = null;

  // clippedTags
  //
  // Returns an array of tags objects with id, style and count
  this.clippedTags = ko.computed(function() {
    app.updateTagsRepository();

    return Utils
      .uniqueSplit(self.tags(), ' ')
      .map (
        tag => app.tags().find (e => e.text === tag)
      )
      .filter (item => item);
  }, this);

  this.clippedBody = ko.computed(function() {
    if (app.ui.isScreenNarrow() && app.editing()) {
      return;
    }

    app.mustRefreshNodes(); // Trick to be able to refresh nodes

    let result = app.getHighlightedText(this.body());
    result = app.richTextFormatter.richTextToHtml(result);
    result = result.substr(0, ClipNodeTextLength);
    return result;
  }, this);

  // internal cache
  this.linkedTo = ko.observableArray();
  this.linkedFrom = ko.observableArray();

  // reference to element containing us
  this.element = null;

  this.canDoubleClick = true;

  this.create = function() {
    self.style = window.getComputedStyle($(self.element).get(0));

    if (self.createX && self.createY) {
      self.x(self.createX);
      self.y(self.createY);
    } else {
      let parent = $(self.element).parent();
      self.x(-parent.offset().left + $(window).width() / 2 - 100);
      self.y(-parent.offset().top + $(window).height() / 2 - 100);
    }

    app.workspace.bringToFront(self.element);
    app.workspace.startUpdatingArrows();

    $(self.element)
      .css({ opacity: 0, scale: 0.8, y: '-=80px', rotate: '45deg' })
      .transition(
        {
          opacity: 1,
          scale: 1,
          y: '+=80px',
          rotate: '0deg',
        },
        250,
        'easeInQuad',
        function() {
          app.workspace.stopUpdatingArrows();
          app.workspace.updateArrows();
        }
      );
    self.drag();

    // OPEN NODE
    $(self.element).on('dblclick', function() {
      if (self.canDoubleClick) app.editNode(self);
    });
    Utils.addDoubleTapDetector(self.element, function() {
      if (self.canDoubleClick) app.editNode(self);
    });

    $(self.element).on('click', function(e) {
      if (e.ctrlKey) {
        if (self.selected) app.workspace.deselectNodes(self);
        else app.workspace.selectNodes(self);
      }
    });
  };

  this.setSelected = function(select) {
    self.selected = select;

    if (self.selected) $(self.element).addClass('selected');
    else $(self.element).removeClass('selected');
  };

  this.toggleSelected = function() {
    self.setSelected(!self.selected);
  };

  this.x = function(inX) {
    if (inX != undefined) $(self.element).css({ x: Math.floor(inX) });

    // if we don't have a style here, it means this node is in the
    // process of being created and self.element doesn't exist yet
    if (!self.style) {
      return;
    }

    // m41 here corresponds to the fourth row and first column of the matrix transform
    // this is the X value of the transform
    return Math.floor(new WebKitCSSMatrix(self.style.webkitTransform).m41);
  };

  this.y = function(inY) {
    if (inY != undefined) $(self.element).css({ y: Math.floor(inY) });

    // if we don't have a style here, it means this node is in the
    // process of being created and self.element doesn't exist yet
    if (!self.style) {
      return;
    }

    // m42 here corresponds to the fourth row and second column of the matrix transform
    // this is the X value of the transform
    return Math.floor(new WebKitCSSMatrix(self.style.webkitTransform).m42);
  };

  this.resetDoubleClick = function() {
    self.canDoubleClick = true;
  };

  this.cycleColorDown = function() {
    self.doCycleColorDown();

    setTimeout(self.resetDoubleClick, 500);
    self.canDoubleClick = false;

    if (app.input.isShiftDown) app.matchConnectedColorID(self);

    if (self.selected) app.setSelectedColors(self);

    app.setYarnDocumentIsDirty();
  };

  this.cycleColorUp = function() {
    self.doCycleColorUp();

    setTimeout(self.resetDoubleClick, 500);
    self.canDoubleClick = false;

    if (app.input.isShiftDown) app.matchConnectedColorID(self);

    if (self.selected) app.setSelectedColors(self);

    app.setYarnDocumentIsDirty();
  };

  this.doCycleColorDown = function() {
    self.colorID(self.colorID() - 1);
    if (self.colorID() < 0) self.colorID(8);
  };

  this.doCycleColorUp = function() {
    self.colorID(self.colorID() + 1);
    if (self.colorID() > 8) self.colorID(0);
  };

  this.remove = async function() {
    return new Promise( (resolve, reject) => {
      $(self.element).transition(
        { opacity: 0, scale: 0.8, y: '-=80px', rotate: '-45deg' },
        250,
        'easeInQuad',
        resolve
      );
    });
  };

  this.drag = function() {
    const offset = { x:0, y:0 }; // Where inside the node did the mouse click
    let dragging = false;
    let groupDragging = false;

    $(document.body).on('mousemove touchmove', function(e) {
      if (dragging) {
        const pageX =
          app.input.isScreenTouched && e.changedTouches
            ? e.changedTouches[0].pageX
            : e.pageX;
        const pageY =
          app.input.isScreenTouched && e.changedTouches
            ? e.changedTouches[0].pageY
            : e.pageY;

        let {x, y} = app.workspace.toWorkspaceCoordinates(pageX, pageY);

        x -= offset.x;
        y -= offset.y;

        let movedX = x - self.x();
        let movedY = y - self.y();


        const nodes = app.workspace.getSelectedNodes();
        // Prevent yarn from moving a node when you scroll its contents on a touch screen
        if(e.originalEvent.type === 'mousemove' || (nodes.includes(self) && e.originalEvent.type === 'touchmove')){
          self.x(x);
          self.y(y);
        }

        if (groupDragging) {
          if (self.selected) {
            nodes.splice(nodes.indexOf(self), 1);
          } else {
            nodes = app.getNodesConnectedTo(self);
          }

          if (nodes.length > 0) {
            for (let i in nodes) {
              if (nodes[i].active()) {
                nodes[i].x(nodes[i].x() + movedX);
                nodes[i].y(nodes[i].y() + movedY);
              }
            }
          }
        }

        app.workspace.updateArrows();
      }
    });

    $(self.element).on('pointerdown', function(e) {
      if (!dragging && self.active() && e.button === 0 ) {
        dragging = true;

        if (app.input.isShiftDown || self.selected) {
          groupDragging = true;
        }

        const {x, y} = app.workspace.toWorkspaceCoordinates(e.pageX, e.pageY);

        offset.x = (app.settings.snapGridEnabled()) ? app.workspace.stepify(x - self.x(), app.settings.gridSize()) : x - self.x();
        offset.y = (app.settings.snapGridEnabled()) ? app.workspace.stepify(y - self.y(), app.settings.gridSize()) : y - self.y();
      }
    });

    $(self.element).on('touchend', function(e) {
      app.workspace.selectNodes(self);
    });
    // Make sure dragging stops when cursor is above another element
    $(document).on('pointerup touchend', function() {
      if (dragging || groupDragging) {
        dragging = false;
        groupDragging = false;

        // this will tell the VSCode extension that we've moved the node
        app.setYarnDocumentIsDirty();
      }
    })
  };

  this.moveTo = function(newX, newY) {
    app.workspace.startUpdatingArrows();

    $(self.element).clearQueue();
    $(self.element).transition(
      {
        x: newX,
        y: newY,
      },
      app.stopUpdatingArrows,
      500
    );
  };

  this.isConnectedTo = function(otherNode, checkBack) {
    if (checkBack && otherNode.isConnectedTo(self, false)) return true;

    let linkedNodes = self.linkedTo();
    for (let i in linkedNodes) {
      if (linkedNodes[i] == otherNode) return true;
      if (linkedNodes[i].isConnectedTo(otherNode, false)) return true;
      if (otherNode.isConnectedTo(linkedNodes[i], false)) return true;
    }

    return false;
  };

  this.getLinksInNode = function(node) {
    let links = (node || self).body().match(/\[\[(.*?)\]\]/g);

    if (links != undefined) {
      let exists = {};
      for (let i = links.length - 1; i >= 0; i--) {
        links[i] = links[i].substr(2, links[i].length - 4).trim(); //.toLowerCase();

        if (links[i].indexOf('|') >= 0) {
          links[i] = links[i].split('|')[1];
        }

        if (exists[links[i]] != undefined) {
          links.splice(i, 1);
        }
        exists[links[i]] = true;
      }
      return links;
    } else {
      return undefined;
    }
  };

  this.updateLinks = function() {
    self.resetDoubleClick();
    self.updateLinksFromParents();
    self.updateLinksToChildren();
  };

  this.updateLinksFromParents = function() {
    // If title didn't change there's nothing we need to update on parents
    if (!self.oldTitle || self.oldTitle === self.title()) {
      return;
    }

    self.linkedFrom.removeAll();

    app.nodes().forEach(parent => {
      const parentLinks = self.getLinksInNode(parent);
      if (parentLinks) {
        if (parentLinks.includes(self.oldTitle)) {
          const re = RegExp('\\|\\s*' + self.oldTitle + '\\s*\\]\\]', 'g');
          const newBody = parent.body().replace(re, '|' + self.title() + ']]');
          parent.body(newBody);
          self.linkedFrom.push(parent);
        }
        else if (parentLinks.includes(self.title())) {
          self.linkedFrom.push(parent);
        }
      }
    });

    self.oldTitle = undefined;
  };

  this.updateLinksToChildren = function() {
    self.linkedTo.removeAll();

    let links = self.getLinksInNode();

    if (!links) {
      return;
    }

    for (let index in app.nodes()) {
      let other = app.nodes()[index];
      for (let i = 0; i < links.length; i++) {
        if (other != self && other.title().trim() === links[i].trim()) {
          self.linkedTo.push(other);
        }
      }
    }
  };
};

ko.bindingHandlers.nodeBind = {
  init: function(
    element,
    valueAccessor,
    allBindings,
    viewModel,
    bindingContext
  ) {
    bindingContext.$rawData.element = element;
    bindingContext.$rawData.create();
  },

  update: function(
    element,
    valueAccessor,
    allBindings,
    viewModel,
    bindingContext
  ) {
    $(element).on('pointerdown', function() {
      app.workspace.bringToFront(element);
    });
  },
};
