/* eslint-disable jquery/no-hide */
/* eslint-disable jquery/no-ajax */
/* eslint-disable jquery/no-show */
import {
  enable_spellcheck,
  disable_spellcheck,
  suggest_word_for_misspelled,
  load_dictionary,
} from '../libs/spellcheck_ace.js';
import { Node } from './node';
import { Workspace } from './workspace';
import { data } from './data';
import { yarnRender } from './renderer';
import { Utils, FILETYPE } from './utils';

// TODO: refactoring proposals
//
// Create Settings class: manages user settings using window.localStorage
// Create UI class: manages menus, buttons, search, settings dialog...
// Create:
//   RichTextFormater interface
//   RichTextFormaterBbcode implementation
//   RichTextFormaterXml implementation
// Rename yarnRender to YarnPlayer

export var App = function(name, version) {
  const self = this;

  // Ideally this dependencies should be injected by index.js
  this.workspace = new Workspace(self);
  this.previewStory = new yarnRender();

  this.instance = this;
  this.data = data;
  this.name = ko.observable(name);
  this.version = ko.observable(version);
  this.editing = ko.observable(null);
  this.deleting = ko.observable(null);
  this.nodes = ko.observableArray([]);
  this.tags = ko.observableArray([]);
  this.cachedScale = 1;
  this.nodeHistory = [];
  this.nodeFuture = [];
  this.editingHistory = [];
  this.editingSaveHistoryTimeout = null;
  this.dirty = false;
  this.focusedNodeIdx = -1;
  this.zoomSpeed = 0.005;
  this.zoomLimitMin = 0.05;
  this.zoomLimitMax = 1;
  this.transformOrigin = [0, 0];
  this.shifted = false;
  this.isElectron = false;
  this.editor = null;
  this.nodeVisitHistory = [];
  this.mouseX = 0;
  this.mouseY = 0;
  this.clipboard = '';
  this.nodeClipboard = [];
  this.speachInstance = null;
  this.selectedLanguageIndex = 6;
  this.language = null;
  this.hasTouchScreen = false;

  this.configFilePath = null;
  this.config = {
    nightModeEnabled: false,
    spellcheckEnabled: true,
    transcribeEnabled: false,
    showCounter: false,
    autocompleteWordsEnabled: true,
    autocompleteEnabled: true,
    overwrites: {
      makeNewNodesFromLinks: true,
    },
    settings: {
      autoSave: -1,
    },
  };

  this.editingPath = ko.observable(null);
  this.$searchField = $('.search-field');

  this.run = function() {
    var osName = 'Unknown OS';
    if (navigator.platform.indexOf('Win') != -1) osName = 'Windows';
    if (navigator.platform.indexOf('Mac') != -1) osName = 'MacOS';
    if (navigator.platform.indexOf('X11') != -1) osName = 'UNIX';
    if (navigator.platform.indexOf('Linux') != -1) osName = 'Linux';
    if (navigator.platform.indexOf('Linux') != -1) osName = 'Linux';
    self.isElectron = navigator.userAgent.toLowerCase().includes('electron');
    window.addEventListener('touchstart', function() {
      self.hasTouchScreen = true;
    });

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (
      /android|iPad|iPhone|iPod/.test(userAgent.toLowerCase()) &&
      !window.MSStream
    ) {
      osName = 'mobile';
    }

    if (osName == 'Windows') self.zoomSpeed = 0.1;

    $('#app').show();
    ko.applyBindings(self, $('#app')[0]);

    self.newNode().title('Start');

    // search field enter
    self.$searchField.on('keyup', function(e) {
      // escape
      if (e.keyCode == 27) self.clearSearch();
      else self.searchWarp();
    });

    // Load json app settings from home folder
    // data.tryLoadConfigFile()

    // set default zoom level for mobile users
    if (osName === 'mobile') self.zoom(3);

    if (!self.isElectron) {
      // Add dropbox chooser
      Utils.createDropboxChooser(
        document.getElementById('dropbox-container'),
        file => data.tryLoadFromDropbox(file)
      );
    } else {
      document.getElementById('dropboxIO').style.display = 'none';
    }

    // prevent click bubbling
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

    // drag node holder around
    (function() {
      var dragging = false;
      var offset = { x: 0, y: 0 };
      var MarqueeOn = false;
      var MarqueeSelection = [];
      var MarqRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
      var MarqueeOffset = [0, 0];
      var midClickHeld = false;

      $('.nodes').on('pointerdown', function(e) {
        if (e.button == 1) {
          midClickHeld = true;
        }
        $('#marquee').css({ x: 0, y: 0, width: 0, height: 0 });
        dragging = true;
        offset.x = e.pageX;
        offset.y = e.pageY;
        MarqueeSelection = [];
        MarqRect = { x1: 0, y1: 0, x2: 0, y2: 0 };

        var scale = self.cachedScale;

        MarqueeOffset[0] = 0;
        MarqueeOffset[1] = 0;

        if (!e.altKey && !e.shiftKey) {
          self.workspace.deselectAll();
        }
      });

      $('.nodes').on('mousemove touchmove', function(e) {
        if (dragging) {
          const pageX =
            self.hasTouchScreen && e.changedTouches
              ? e.changedTouches[0].pageX
              : e.pageX;
          const pageY =
            self.hasTouchScreen && e.changedTouches
              ? e.changedTouches[0].pageY
              : e.pageY;

          if (e.altKey || midClickHeld || self.hasTouchScreen) {
            //prevents jumping straight back to standard dragging
            if (MarqueeOn) {
              MarqueeSelection = [];
              MarqRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
              $('#marquee').css({ x: 0, y: 0, width: 0, height: 0 });
            } else {
              var nodes = self.nodes();
              for (var i in nodes) {
                nodes[i].x(
                  nodes[i].x() + (pageX - offset.x) / self.cachedScale
                );
                nodes[i].y(
                  nodes[i].y() + (pageY - offset.y) / self.cachedScale
                );
              }
              offset.x = pageX;
              offset.y = pageY;

              self.workspace.updateArrows();
            }
          } else {
            MarqueeOn = true;

            var scale = self.cachedScale;

            if (pageX > offset.x && pageY < offset.y) {
              MarqRect.x1 = offset.x;
              MarqRect.y1 = pageY;
              MarqRect.x2 = pageX;
              MarqRect.y2 = offset.y;
            } else if (pageX > offset.x && pageY > offset.y) {
              MarqRect.x1 = offset.x;
              MarqRect.y1 = offset.y;
              MarqRect.x2 = pageX;
              MarqRect.y2 = pageY;
            } else if (pageX < offset.x && pageY < offset.y) {
              MarqRect.x1 = pageX;
              MarqRect.y1 = pageY;
              MarqRect.x2 = offset.x;
              MarqRect.y2 = offset.y;
            } else {
              MarqRect.x1 = pageX;
              MarqRect.y1 = offset.y;
              MarqRect.x2 = offset.x;
              MarqRect.y2 = pageY;
            }

            $('#marquee').css({
              x: MarqRect.x1,
              y: MarqRect.y1,
              width: Math.abs(MarqRect.x1 - MarqRect.x2),
              height: Math.abs(MarqRect.y1 - MarqRect.y2),
            });

            //Select nodes which are within the marquee
            // MarqueeSelection is used to prevent it from deselecting already
            // selected nodes and deselecting onces which have been selected
            // by the marquee
            var nodes = self.nodes();
            for (var i in nodes) {
              var index = MarqueeSelection.indexOf(nodes[i]);
              var inMarqueeSelection = index >= 0;

              //test the Marque scaled to the nodes x,y values
              var holder = $('.nodes-holder').offset();
              var marqueeOverNode =
                (MarqRect.x2 - holder.left) / scale > nodes[i].x() &&
                (MarqRect.x1 - holder.left) / scale <
                  nodes[i].x() + nodes[i].tempWidth &&
                (MarqRect.y2 - holder.top) / scale > nodes[i].y() &&
                (MarqRect.y1 - holder.top) / scale <
                  nodes[i].y() + nodes[i].tempHeight;

              if (marqueeOverNode) {
                if (!inMarqueeSelection) {
                  self.workspace.addNodesToSelection(nodes[i]);
                  MarqueeSelection.push(nodes[i]);
                }
              } else {
                if (inMarqueeSelection) {
                  self.workspace.removeNodesFromSelection(nodes[i]);
                  MarqueeSelection.splice(index, 1);
                }
              }
            }
          }
        }
      });

      $('.nodes').on('pointerup', function(e) {
        if (e.button == 1) {
          midClickHeld = false;
        }
        dragging = false;

        if (MarqueeOn && MarqueeSelection.length == 0) {
          self.workspace.deselectAll();
        }

        MarqueeSelection = [];
        MarqRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
        $('#marquee').css({ x: 0, y: 0, width: 0, height: 0 });
        MarqueeOn = false;
      });
    })();

    // search field
    self.$searchField.on('input', self.updateSearch);
    $('.search-title input').click(self.updateSearch);
    $('.search-body input').click(self.updateSearch);
    $('.search-tags input').click(self.updateSearch);

    // using the event helper
    $('.nodes').mousewheel(function(event) {
      // https://github.com/InfiniteAmmoInc/Yarn/issues/40
      if (event.altKey) {
        return;
      } else {
        event.preventDefault();
      }

      var lastZoom = self.cachedScale,
        scaleChange = event.deltaY * self.zoomSpeed * self.cachedScale;

      if (self.cachedScale + scaleChange > self.zoomLimitMax) {
        self.cachedScale = self.zoomLimitMax;
      } else if (self.cachedScale + scaleChange < self.zoomLimitMin) {
        self.cachedScale = self.zoomLimitMin;
      } else {
        self.cachedScale += scaleChange;
      }

      var mouseX = event.pageX - self.transformOrigin[0],
        mouseY = event.pageY - self.transformOrigin[1],
        newX = mouseX * (self.cachedScale / lastZoom),
        newY = mouseY * (self.cachedScale / lastZoom),
        deltaX = mouseX - newX,
        deltaY = mouseY - newY;

      self.transformOrigin[0] += deltaX;
      self.transformOrigin[1] += deltaY;

      self.translate();
    });

    $(document).on('keyup keydown', function(e) {
      self.shifted = e.shiftKey;
    });

    $(document).contextmenu(function(e) {
      var isAllowedEl =
        $(e.target).hasClass('nodes') || $(e.target).parents('.nodes').length;

      if (e.button == 2 && isAllowedEl) {
        var x = (self.transformOrigin[0] * -1) / self.cachedScale,
          y = (self.transformOrigin[1] * -1) / self.cachedScale;

        x += e.pageX / self.cachedScale;
        y += e.pageY / self.cachedScale;

        self.newNodeAt(x, y);
      }

      return !isAllowedEl;
    });

    $(document).on('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && !self.editing()) {
        switch (e.keyCode) {
          case 90: // ctrl+z
            self.historyDirection('undo');
            break;
          case 89: // ctrl+y
            self.historyDirection('redo');
            break;
          case 68: // ctrl+d
            self.workspace.deselectAll();
        }
      }
    });

    $(document).on('keydown', function(e) {
      if (e.ctrlKey || e.metaKey) {
        if (e.shiftKey) {
          switch (e.keyCode) {
            case 83: // ctrl+shift+s
              data.trySave(FILETYPE.JSON);
              self.fileKeyPressed = true;
              break;
            case 65: // ctrl+shift+a
              data.tryAppend();
              self.fileKeyPressed = true;
              break;
          }
        } else if (e.altKey) {
          switch (e.keyCode) {
            case 83: //alt+s
              data.trySave(FILETYPE.YARN);
              self.fileKeyPressed = true;
              break;
          }
        } else {
          switch (e.keyCode) {
            case 83: // ctrl+s
              if (data.editingPath() != null) {
                data.trySaveCurrent();
              } else {
                data.trySave(FILETYPE.JSON);
              }
              self.fileKeyPressed = true;
              break;
            case 79: // ctrl+o
              data.tryOpenFile();
              self.fileKeyPressed = true;
              break;
          }
        }
      }
    });

    $(document).on('keydown', function(e) {
      // clipboard manual saving to get around browser security bs
      if (self.editing()) {
        // ctrl + c
        if ((e.metaKey || e.ctrlKey) && e.keyCode == 67) {
          self.clipboard = self.editor.getSelectedText();
        }
        // ctrl + x
        else if ((e.metaKey || e.ctrlKey) && e.keyCode == 88) {
          document.execCommand('copy');
          self.clipboard = self.editor.getSelectedText();
          self.insertTextAtCursor('');
        } // escape
        else if (e.keyCode == 27) {
          self.saveNode();
        }

        // If previewing the story, speed up scrolling when holding z
        if (!self.previewStory.finished)
          switch (e.key) {
            case 'z': {
              self.previewStory.changeTextScrollSpeed(20);
              return;
            }
          }
      } else {
        // ctrl + c NODES
        if ((e.metaKey || e.ctrlKey) && e.keyCode == 67) {
          self.nodeClipboard = app.cloneNodeArray(self.workspace.getSelectedNodes());
        }
        // ctrl + x NODES
        else if ((e.metaKey || e.ctrlKey) && e.keyCode == 88) {
          self.nodeClipboard = app.cloneNodeArray(self.workspace.getSelectedNodes());
          self.deleteSelectedNodes();
        }
      }
    });
    $(document).on('keydown', function(e) {
      if (
        self.editing() ||
        self.$searchField.is(':focus') ||
        e.ctrlKey ||
        e.metaKey
      )
        return;
      var scale = self.cachedScale || 1,
        movement = scale * 500;

      if (e.shiftKey) {
        movement = scale * 100;
      }

      if (e.keyCode === 65 || e.keyCode === 37) {
        // a or left arrow
        self.transformOrigin[0] += movement;
      } else if (e.keyCode === 68 || e.keyCode === 39) {
        // d or right arrow
        self.transformOrigin[0] -= movement;
      } else if (e.keyCode === 87 || e.keyCode === 38) {
        // w or up arrow
        self.transformOrigin[1] += movement;
      } else if (e.keyCode === 83 || e.keyCode === 40) {
        // w or down arrow
        self.transformOrigin[1] -= movement;
      }

      self.translate(100);
    });

    $(document).on('keyup', function(e) {
      // console.log(e.keyCode);
      if (!self.editing()) {
        // ctrl + a
        if ((e.metaKey || e.ctrlKey) && e.keyCode == 65) {
          self.workspace.selectAll();
        }
        // ctrl + v NODES
        if ((e.metaKey || e.ctrlKey) && e.keyCode == 86) {
          self.pasteNodes();
        }
        // console.log(e.keyCode+"-"+e.key)
        if (e.keyCode === 46 || e.key === 'Delete') {
          // Delete selected
          self.deleteSelectedNodes();
        }
      } else {
        // Input event listeners for story preview
        if (!self.previewStory.finished)
          switch (e.key) {
            case 'z': {
              self.previewStory.changeTextScrollSpeed(200);
              if (self.previewStory.vnSelectedChoice != -1) {
                self.previewStory.vnSelectChoice();
              }
              return;
            }
            case 'ArrowUp': {
              if (self.previewStory.vnSelectedChoice != -1) {
                self.previewStory.vnUpdateChoice(-1);
              }
              return;
            }
            case 'ArrowDown': {
              if (self.previewStory.vnSelectedChoice != -1) {
                self.previewStory.vnUpdateChoice(1);
              }
              return;
            }
          }
      }

      if (e.keyCode === 31 || e.key === 'Enter') {
        // Open active node, if already active, close it
        if (self.editing() === null) {
          var activeNode = self.nodes()[self.focusedNodeIdx];
          if (activeNode !== undefined) {
            self.editNode(activeNode);
          } else {
            self.editNode(self.nodes()[0]);
          }
        } else if (e.ctrlKey && e.altKey) {
          //ctrl+alt+ enter closes/saves an open node
          self.saveNode();
        }
      }

      // Spacebar toggle between nodes
      if (e.keyCode === 32) {
        if (self.editing() !== null && !e.altKey) {
          return; // alt+spacebar to toggle between open nodes
        }
        var selectedNodes = self.workspace.getSelectedNodes();
        var nodes = selectedNodes.length > 0 ? selectedNodes : self.nodes();
        var isNodeSelected = selectedNodes.length > 0;
        if (
          self.focusedNodeIdx > -1 &&
          nodes.length > self.focusedNodeIdx &&
          (self.transformOrigin[0] !=
            -nodes[self.focusedNodeIdx].x() +
              $(window).width() / 2 -
              $(nodes[self.focusedNodeIdx].element).width() / 2 ||
            self.transformOrigin[1] !=
              -nodes[self.focusedNodeIdx].y() +
                $(window).height() / 2 -
                $(nodes[self.focusedNodeIdx].element).height() / 2)
        ) {
          self.focusedNodeIdx = -1;
        }

        if (++self.focusedNodeIdx >= nodes.length) {
          self.focusedNodeIdx = 0;
        }
        self.cachedScale = 1;
        if (isNodeSelected) {
          self.workspace.warpToSelectedNodeByIdx(self.focusedNodeIdx);
        } else {
          self.workspace.warpToNodeByIdx(self.focusedNodeIdx);
        }

        if (self.editing() !== null) {
          self.editNode(self.nodes()[self.focusedNodeIdx]);
        }
      }
    });

    $(window).on('resize', self.workspace.updateArrows);

    $(document).on('keyup keydown pointerdown pointerup', function(e) {
      if (self.editing() != null) {
        self.updateEditorStats();
      }
    });

    this.guessPopUpHelper = function() {
      if (/^\[color=#([a-zA-Z0-9]{3,6})$/.test(self.getTagBeforeCursor())) {
        self.insertColorCode();
        // return
      } else if (self.getTagBeforeCursor().match(/\[img\]/)) {
        // console.log("IMAGE");
      }
    };

    this.insertBBcodeTags = function(tag) {
      var tagClose = '[/' + tag.replace(/[\"#=]/gi, '') + ']';
      if (tag === 'cmd') {
        tag = '<<';
        tagClose = '>>';
      } else if (tag === 'opt') {
        tag = '[[';
        tagClose = '|]]';
      } else {
        tag = '[' + tag + ']';
      }

      var selectRange = JSON.parse(
        JSON.stringify(self.editor.selection.getRange())
      );
      self.editor.session.insert(selectRange.start, tag);
      self.editor.session.insert(
        {
          column: selectRange.end.column + tag.length,
          row: selectRange.end.row,
        },
        tagClose
      );

      if (tag === '[color=#]') {
        if (self.editor.getSelectedText().length === 0) {
          self.moveEditCursor(-9);
          self.insertColorCode();
          return;
        }
        self.editor.selection.setRange({
          start: {
            row: self.editor.selection.getRange().start.row,
            column: self.editor.selection.getRange().start.column - 1,
          },
          end: {
            row: self.editor.selection.getRange().start.row,
            column: self.editor.selection.getRange().start.column - 1,
          },
        });
        self.insertColorCode();
      } else if (self.editor.getSelectedText().length === 0) {
        self.moveEditCursor(-tagClose.length);
      } else {
        self.editor.selection.setRange({
          start: self.editor.selection.getRange().start,
          end: {
            row: self.editor.selection.getRange().end.row,
            column:
              self.editor.selection.getRange().end.column - tagClose.length,
          },
        });
      }
      self.editor.focus();
    };

    this.insertEmoji = function() {
      this.emPicker.toggle();
      self.togglePreviewMode(true);
      $('#emojiPicker-container').css({
        top: self.mouseY - 125,
        left: self.mouseX - 200,
      });
      $('#emojiPicker-container').show();
    };

    this.updateCountry = function() {
      var select_language = document.getElementById('select_language');
      self.selectedLanguageIndex = select_language.selectedIndex;

      self.language = Utils.langs[select_language.selectedIndex][1][0];
      spoken.recognition.lang = self.language;
      load_dictionary(self.language.split('-')[0]);
    };

    this.speakText = function() {
      const selectedText = self.editor.getSelectedText();
      const say = selectedText
        ? selectedText
        : self.editor.getSession().getValue();

      spoken.voices().then(countries => {
        const lookUp = self.language.split('-')[0];
        const voices = countries.filter(v => !v.lang.indexOf(lookUp));

        if (voices.length) {
          console.log('Loaded voice', voices[0]);
          spoken.say(say, voices[0]);
        } else {
          spoken.say(say);
        }
      });
    };

    this.startCapture = function() {
      spoken
        .listen({ continuous: true })
        .then(transcript => {
          console.log(transcript);
          if (self.editing()) {
            self.insertTextAtCursor(transcript + '. ');
            document.getElementById('speakTextBtnBubble').title = 'Transcribe';
          } else {
            if (transcript === 'open') {
              console.log('try open...');
              var firstFoundTitle = self
                .getFirstFoundNode(self.$searchField.val().toLowerCase())
                .title();
              console.log('try open:', firstFoundTitle);
              self.openNodeByTitle(firstFoundTitle);
            } else if (transcript === 'clear') {
              self.$searchField.val('');
              self.updateSearch();
            } else {
              self.$searchField.val(transcript);
              self.updateSearch();
            }
          }

          spoken.listen.stop().then(() => {
            if (self.editing()) {
              document.getElementById('speakTextBtnBubble').style.visibility =
                'hidden';
            }

            this.continueCapture();
          });
        })
        .catch(e => spoken.listen.stop().then(() => this.continueCapture()));
    };

    this.continueCapture = function() {
      spoken.delay(500).then(() => {
        if (spoken.recognition.continuous) self.startCapture();
      });
    };

    this.toglTranscribing = function() {
      const available = spoken.listen.available();
      var transcribeButton = document.getElementById('toglTranscribing');
      var speakBubble = document.getElementById('speakTextBtnBubble');
      self.config.transcribeEnabled = transcribeButton.checked;
      if (transcribeButton.checked && available) {
        spoken.listen.on.partial(ts => {
          if (self.editing()) {
            speakBubble.style.visibility = 'visible';
            speakBubble.title = `🗣️ ${ts} 🦜`;
          } else {
            self.$searchField.val(`🗣️ ${ts} 🦜`);
          }
        });
        self.startCapture();
      } else {
        speakBubble.style.visibility = 'hidden';
        transcribeButton.checked = false;
        spoken.recognition.continuous = false;
        spoken.listen.stop();
      }
    };

    this.hearText = function() {
      const available = spoken.listen.available();
      if (!available) {
        alert('Speech recognition not avaiilable!');
        return;
      }

      // spoken.listen.on.partial(ts => ($("#speakTextBtn").title = ts));
      spoken.listen.on.partial(ts => {
        console.log(ts);
        document.getElementById('speakTextBtnBubble').title = `🗣️ ${ts} 🦜`;
      });

      spoken
        .listen()
        .then(transcript => {
          self.insertTextAtCursor(transcript + ' ');
          document.getElementById('speakTextBtnBubble').title = 'Transcribe';
        })
        .catch(error => console.warn(error.message));
    };

    $(document).on('pointermove', function(e) {
      self.mouseX = e.pageX;
      self.mouseY = e.pageY;
    });

    this.insertColorCode = function() {
      if ($('#colorPicker-container').is(':visible')) {
        return;
      }
      // http://bgrins.github.io/spectrum/
      $('#colorPicker').spectrum('set', self.editor.getSelectedText());
      $('#colorPicker').spectrum('toggle');
      $('#colorPicker-container').css({
        top: self.mouseY - 50,
        left: self.mouseX - 70,
      });
      $('#colorPicker-container').show();
      $('#colorPicker').on('dragstop.spectrum', function(e, color) {
        self.applyPickerColorEditor(color);
      });

      self.togglePreviewMode(true);
    };

    this.applyPickerColorEditor = function(color) {
      var selectRange = JSON.parse(
        JSON.stringify(self.editor.selection.getRange())
      );
      self.editor.selection.setRange(selectRange);
      var colorCode = color.toHexString().replace('#', '');
      self.editor.session.replace(selectRange, colorCode);
      self.editor.selection.setRange({
        start: self.editor.getCursorPosition(),
        end: {
          row: self.editor.getCursorPosition().row,
          column: self.editor.getCursorPosition().column - colorCode.length,
        },
      });
      self.togglePreviewMode(true);
    };

    document.addEventListener(
      'contextmenu',
      function(evt) {
        if (self.editing()) evt.preventDefault();
      },
      false
    );
    $(document).on('pointerup', function(e) {
      if (self.editing() && e.button === 2) {
        self.guessPopUpHelper();
      }
    });

    // apple command key
    //$(window).on('keydown', function(e) { if (e.keyCode == 91 || e.keyCode == 93) { self.appleCmdKey = true; } });
    //$(window).on('keyup', function(e) { if (e.keyCode == 91 || e.keyCode == 93) { self.appleCmdKey = false; } });

    // Handle file dropping
    document.ondragover = document.ondrop = e => {
      e.preventDefault();
    };
    document.body.ondrop = e => {
      e.preventDefault();
      var i;
      for (i = 0; i < e.dataTransfer.files.length; i++) {
        data.appendFile(
          e.dataTransfer.files[i],
          e.dataTransfer.files[i].name,
          false
        );
      }
    };
    // Callback for embedding in other webapps
    var event = new CustomEvent('yarnReady');
    event.document = document;
    event.data = data;
    event.app = this;
    window.parent.dispatchEvent(event);
  };

  this.getNodesConnectedTo = function(toNode) {
    var connectedNodes = [];
    var nodes = self.nodes();
    for (var i in nodes) {
      if (nodes[i] != toNode && nodes[i].isConnectedTo(toNode, true)) {
        var hasNode = false;
        for (var j in connectedNodes) {
          if (connectedNodes[j] == nodes[i]) {
            hasNode = true;
            break;
          }
        }
        if (!hasNode) connectedNodes.push(nodes[i]);
      }
    }
    return connectedNodes;
  };

  this.mouseUpOnNodeNotMoved = function() {
    self.workspace.deselectAll();
  };

  this.matchConnectedColorID = function(fromNode) {
    var nodes = self.getNodesConnectedTo(fromNode);
    for (var i in nodes) nodes[i].colorID(fromNode.colorID());
  };

  this.quit = function() {
    if (self.isElectron) {
      // remote.app.quit();
    }
  };

  this.validateTitle = function() {
    var enteredValue = document.getElementById('editorTitle').value;
    if (
      self.getOtherNodeTitles().includes(enteredValue) ||
      self.titleExistsTwice(enteredValue)
    ) {
      $('#editorTitle').css({ color: 'red' });
      $('#editorTitle').attr('title', 'Another node has the same title');
    } else {
      $('#editorTitle').css({ color: '#666' });
      $('#editorTitle').attr('title', '');
    }
  };

  this.refreshWindowTitle = function(editingPath) {
    let title = 'Yarn - [' + editingPath + '] ';
    if (!self.isElectron) {
      document.title = title;
    } else {
      // self.gui.setTitle(title);
    }
  };

  this.recordNodeAction = function(action, node) {
    //we can't go forward in 'time' when
    //new actions have been made
    if (self.nodeFuture.length > 0) {
      for (var i = 0; i < self.nodeFuture.length; i++) {
        var future = self.nodeFuture.pop();
        delete future.node;
      }

      delete self.nodeFuture;
      self.nodeFuture = [];
    }

    var historyItem = {
      action: action,
      node: node,
      lastX: node.x(),
      lastY: node.y(),
    };

    if (action == 'removed') {
      historyItem.lastY += 80;
    }

    self.nodeHistory.push(historyItem);
  };

  this.historyDirection = function(direction) {
    function removeNode(node) {
      var index = self.nodes.indexOf(node);
      if (index >= 0) {
        self.nodes.splice(index, 1);
      }
      self.updateNodeLinks();
    }

    var historyItem = null;

    if (direction == 'undo') historyItem = self.nodeHistory.pop();
    else historyItem = self.nodeFuture.pop();

    if (!historyItem) return;

    var action = historyItem.action;
    var node = historyItem.node;

    if (direction == 'undo') {
      //undo actions
      if (action == 'created') {
        historyItem.lastX = node.x();
        historyItem.lastY = node.y();
        removeNode(node);
      } else if (action == 'removed') {
        self.recreateNode(node, historyItem.lastX, historyItem.lastY);
      }

      self.nodeFuture.push(historyItem);
    } //redo undone actions
    else {
      if (action == 'created') {
        self.recreateNode(node, historyItem.lastX, historyItem.lastY);
      } else if (action == 'removed') {
        removeNode(node);
      }

      self.nodeHistory.push(historyItem);
    }
  };

  this.recreateNode = function(node, x, y) {
    self.nodes.push(node);
    node.moveTo(x, y);
    self.updateNodeLinks();
  };

  this.setSelectedColors = function(node) {
    var nodes = self.workspace.getSelectedNodes();
    nodes.splice(nodes.indexOf(node), 1);

    for (var i in nodes) nodes[i].colorID(node.colorID());
  };

  this.pasteNodes = function() {
    if (!self.nodeClipboard.length) {
      return;
    }

    self.workspace.deselectAll();

    self.nodeClipboard.forEach(function(copiedNode) {
      var node = new Node({
        title: self.getUniqueTitle(copiedNode.title()),
        body: copiedNode.body(),
        tags: copiedNode.tags(),
        colorID: copiedNode.colorID(),
        x: copiedNode.createX,
        y: copiedNode.createY,
      });

      self.nodes.push(node);
      self.workspace.addNodesToSelection(node);
      self.recordNodeAction('created', node);
    });

    self.updateNodeLinks();
  };

  this.deleteSelectedNodes = function() {
    var nodes = self.workspace.getSelectedNodes();
    for (var i in nodes) {
      self.workspace.removeNodesFromSelection(nodes[i]);
      nodes[i].remove();
    }
  };

  this.cloneNodeArray = function(nodeArray) {
    return nodeArray.map(function(oldNode) {
      return new Node({
        title: oldNode.title(),
        body: oldNode.body(),
        tags: oldNode.tags(),
        colorID: oldNode.colorID(),
        x: oldNode.x() + 10,
        y: oldNode.y() + 10,
      });
    });
  };

  this.newNode = function(updateLinks=true) {
    var node = new Node();
    self.nodes.push(node);

    if (updateLinks)
      self.updateNodeLinks();

    self.recordNodeAction('created', node);

    return node;
  };

  this.newNodeAt = function(x, y) {
    var node = new Node();

    self.nodes.push(node);

    node.x(x - 100);
    node.y(y - 100);
    self.updateNodeLinks();
    self.recordNodeAction('created', node);

    return node;
  };

  this.removeNode = function(node) {
    if (node.selected) {
      self.deleteSelectedNodes();
    }
    var index = self.nodes.indexOf(node);
    if (index >= 0) {
      self.recordNodeAction('removed', node);
      self.nodes.splice(index, 1);
    }
    self.updateNodeLinks();
  };

  this.searchTextInEditor = function(show = true) {
    if (show) {
      self.editor.execCommand('find');
    } else if (self.editor.searchBox) {
      self.editor.searchBox.hide();
    }
  };

  this.showRandomQuote = function() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/?',
      dataType: 'jsonp',
      data: 'method=getQuote&format=jsonp&lang=en&jsonp=?',
      success: function(response) {
        alert(response.quoteText + '\n\n-' + response.quoteAuthor);
      },
    });
  };

  this.editNode = function(node) {
    if (!node.active()) {
      return;
    }

    // Make sure we save the currently node being edited before editing a new
    // one using the context menu
    if (self.editing() && self.editing() !== node)
      self.saveNode(false);

    node.oldTitle = node.title(); // To check later if "title" changed

    self.editing(node);

    $('.node-editor')
      .css({ opacity: 0 })
      .transition({ opacity: 1 }, 250);
    $('.node-editor .form')
      .css({ y: '-100' })
      .transition({ y: '0' }, 250);
    self.editor = ace.edit('editor');
    self.editor.navigateFileEnd();

    var autoCompleteButton = document.getElementById('toglAutocomplete');
    autoCompleteButton.checked = self.config.autocompleteEnabled;
    var autoCompleteWordsButton = document.getElementById(
      'toglAutocompleteWords'
    );
    autoCompleteWordsButton.checked = self.config.autocompleteWordsEnabled;
    var spellCheckButton = document.getElementById('toglSpellCheck');
    spellCheckButton.checked = self.config.spellcheckEnabled;
    var transcribeButton = document.getElementById('toglTranscribing');
    transcribeButton.checked = self.config.transcribeEnabled;
    self.toglTranscribing();
    var nightModeButton = document.getElementById('toglNightMode');
    nightModeButton.checked = self.config.nightModeEnabled;
    self.toggleNightMode();
    var showCounterButton = document.getElementById('toglShowCounter');
    showCounterButton.checked = self.config.showCounter;
    self.toggleShowCounter();
    self.toggleWordCompletion();

    //// warn if titlealready exists
    self.validateTitle();
    /// set color picker
    $('#colorPicker').spectrum({
      flat: true,
      showButtons: false,
      showInput: true,
      showPalette: true,
      preferredFormat: 'hex',
      palette: [
        ['#000', '#444', '#666', '#999', '#ccc', '#eee', '#f3f3f3', '#fff'],
        ['#f00', '#f90', '#ff0', '#0f0', '#0ff', '#00f', '#90f', '#f0f'],
        [
          '#f4cccc',
          '#fce5cd',
          '#fff2cc',
          '#d9ead3',
          '#d0e0e3',
          '#cfe2f3',
          '#d9d2e9',
          '#ead1dc',
        ],
      ],
      change: function(color) {
        if ($('#colorPicker-container').is(':visible')) {
          app.applyPickerColorEditor(color);
          $('#colorPicker').spectrum.set(color.toHexString());
        }
      },
      clickoutFiresChange: true,
    });

    /// Enable autocompletion for node links (borked atm)
    var langTools = ace.require('ace/ext/language_tools');
    var nodeLinksCompleter = Utils.createAutocompleter(
      ['string.llink', 'string.rlink'],
      self.getOtherNodeTitles(),
      'Node Link'
    );
    langTools.setCompleters([nodeLinksCompleter]);

    // close tag autocompletion
    self.editor.getSession().on('change', function(evt) {
      if (evt.action === 'insert') {
        var autoCompleteButton = document.getElementById('toglAutocomplete');
        if (autoCompleteButton.checked) {
          setTimeout(() => {
            switch (self.getTagBeforeCursor()) {
              case '[[':
                self.insertTextAtCursor(' answer: | ]] ');
                self.moveEditCursor(-4);
                break;
              case '<<':
                self.insertTextAtCursor(' >> ');
                self.moveEditCursor(-3);
                break;
              case '[colo':
                self.insertTextAtCursor('r=#][/color] ');
                self.moveEditCursor(-10);
                self.insertColorCode();
                break;
              case '[b':
                self.insertTextAtCursor('][/b] ');
                self.moveEditCursor(-5);
                break;
              case '[i':
                self.insertTextAtCursor('][/i] ');
                self.moveEditCursor(-5);
                break;
              case '[img':
                self.insertTextAtCursor('][/img] ');
                self.moveEditCursor(-7);
                break;
              case '[u':
                self.insertTextAtCursor('][/u] ');
                self.moveEditCursor(-5);
                break;
            }
          }, 200);
          return;
        }
      }
    });

    /// init emoji picker
    this.emPicker = new EmojiPicker(
      document.getElementById('emojiPickerDom'),
      emoji => {
        self.insertTextAtCursor(emoji.char);
        this.emPicker.toggle();
        self.togglePreviewMode(false);
      }
    );

    /// init language selector
    var select_language = document.getElementById('select_language');
    for (var i = 0; i < Utils.langs.length; i++) {
      var option = document.createElement('option');
      option.text = Utils.langs[i][0];
      select_language.add(option);
    }

    select_language.selectedIndex = self.selectedLanguageIndex;
    if (!self.language) {
      self.language = 'en-US';
      self.updateCountry();
    }

    self.toggleSpellCheck();
    self.updateEditorStats();
  };

  this.chooseRelativePathImage = function(imagePath) {
    self.insertTextAtCursor(imagePath);
  };

  this.openNodeByTitle = function(nodeTitle) {
    self.makeNodeWithName(nodeTitle);
    app.nodes().forEach(node => {
      if (
        node
          .title()
          .trim()
          .toLowerCase() === nodeTitle.trim().toLowerCase()
      ) {
        self.editNode(node);
      }
    });
  };

  this.openLastEditedNode = function() {
    if (self.nodeVisitHistory.length === 0) {
      self.saveNode();
    } else {
      const title = self.nodeVisitHistory.pop()
      self.propagateUpdateFromNode(self.editing());
      self.openNodeByTitle(title);
    }
  };

  this.getSpellCheckSuggestionItems = function() {
    var wordSuggestions = suggest_word_for_misspelled(
      self.editor.getSelectedText()
    );
    if (wordSuggestions) {
      var suggestionObject = {};
      wordSuggestions.forEach(suggestion => {
        suggestionObject[suggestion] = {
          name: suggestion,
          icon: 'edit',
          callback: key => {
            self.insertTextAtCursor(key);
          },
        };
      });
      return suggestionObject;
    } else {
      return false;
    }
  };

  this.getThesaurusItems = function() {
    var synonyms = require('synonyms');
    var words = synonyms(self.editor.getSelectedText());
    if (!words) return false;
    var wordSuggestions = [];
    Object.keys(words).forEach(function(type) {
      words[type].forEach(function(word) {
        if (!wordSuggestions.includes(word) && word !== type) {
          wordSuggestions.push(word);
        }
      });
    });
    if (wordSuggestions.length > 0) {
      var suggestionObject = {};
      wordSuggestions.forEach(suggestion => {
        suggestionObject[suggestion] = {
          name: suggestion,
          icon: 'edit',
          callback: key => {
            self.insertTextAtCursor(key);
          },
        };
      });
      return suggestionObject;
    } else {
      return false;
    }
  };

  this.toggleSpellCheck = function() {
    var spellCheckButton = document.getElementById('toglSpellCheck');
    self.config.spellcheckEnabled = spellCheckButton.checked;
    if (spellCheckButton.checked) {
      enable_spellcheck();
    } else {
      disable_spellcheck();
    }
  };

  this.toggleNightMode = function() {
    var nightModeButton = document.getElementById('toglNightMode');
    self.config.nightModeEnabled = nightModeButton.checked;
    var cssOverwrite = {};
    if (self.config.nightModeEnabled) {
      cssOverwrite = { filter: 'invert(100%)' };
    } else {
      cssOverwrite = { filter: 'invert(0%)' };
    }
    $('#app').css(cssOverwrite);
    $('#app-bg').css(cssOverwrite);
    $('.tooltip').css(cssOverwrite);
    $('.node .body').css(cssOverwrite);
    $('.node-editor .form .editor-container .editor-preview').css(cssOverwrite);
  };

  this.toggleShowCounter = function() {
    var showCounterButton = document.getElementById('toglShowCounter');
    self.config.showCounter = showCounterButton.checked;
    if (self.config.showCounter) {
      $('.node-editor .form .bbcode-toolbar .editor-counter').css({
        display: 'initial',
      });
    } else {
      $('.node-editor .form .bbcode-toolbar .editor-counter').css({
        display: 'none',
      });
    }
  };

  this.toggleWordCompletion = function() {
    var wordCompletionButton = document.getElementById('toglAutocompleteWords');
    self.config.autocompleteWordsEnabled = wordCompletionButton.checked;
    self.editor.setOptions({
      enableBasicAutocompletion: self.config.autocompleteWordsEnabled,
      enableLiveAutocompletion: self.config.autocompleteWordsEnabled,
    });
  };

  this.advanceStoryPlayMode = function(speed = 5) {
    if (!self.previewStory.finished)
      self.previewStory.changeTextScrollSpeed(speed);
  };

  this.togglePlayMode = function(playModeOverwrite = false) {
    if (!playModeOverwrite && self.previewStory.finished) return;
    var editor = $('.editor')[0];
    var storyPreviewPlayButton = document.getElementById('storyPlayButton');
    var editorPlayPreviewer = document.getElementById('editor-play');
    if (playModeOverwrite) {
      self.togglePreviewMode(false);
      //preview play mode
      editor.style.display = 'none';
      editorPlayPreviewer.style.display = 'flex';
      storyPreviewPlayButton.className = 'bbcode-button disabled';
      self.previewStory.emiter.on('finished', function() {
        self.togglePlayMode(false);
      });
      self.previewStory.initYarn(
        JSON.parse(data.getSaveData(FILETYPE.JSON)),
        self
          .editing()
          .title()
          .trim(),
        'NVrichTextLabel',
        false,
        'commandDebugLabel'
      );
    } else {
      //edit mode
      self.editor.session.setScrollTop(editorPlayPreviewer.scrollTop);
      editorPlayPreviewer.style.display = 'none';
      editor.style.display = 'flex';
      storyPreviewPlayButton.className = 'bbcode-button';
      self.previewStory.terminate();
      setTimeout(() => {
        if (self.editing().title() !== self.previewStory.node.title)
          self.openNodeByTitle(self.previewStory.node.title);
        self.editor.focus();
      }, 1000);
    }
  };

  this.togglePreviewMode = function(previewModeOverwrite) {
    var editor = $('.editor')[0];
    var editorPreviewer = document.getElementById('editor-preview');
    if (previewModeOverwrite) {
      self.togglePlayMode(false);
      //preview mode
      editor.style.display = 'none';
      editorPreviewer.style.display = 'block';
      editorPreviewer.innerHTML = self
        .editing()
        .textToHtml(self.editing().body(), true);
      editorPreviewer.scrollTop = self.editor.renderer.scrollTop;
    } else {
      //edit mode
      self.editor.session.setScrollTop(editorPreviewer.scrollTop);
      editorPreviewer.innerHTML = '';
      editorPreviewer.style.display = 'none';
      editor.style.display = 'flex';
      self.editor.focus();
      //close any pop up helpers tooltip class
      if ($('#colorPicker-container').is(':visible')) {
        $('#colorPicker-container').hide();
      }
      if ($('#emojiPicker-container').is(':visible')) {
        $('#emojiPicker-container').hide();
      }
    }
  };

  this.trim = function(x) {
    return x.replace(/^\s+|\s+$/gm, '');
  };

  this.appendText = function(textToAppend) {
    self.editing().body(self.editing().body() + textToAppend);
    // scroll to end of line
    var row = self.editor.session.getLength() - 1;
    var column = self.editor.session.getLine(row).length;
    self.editor.gotoLine(row + 1, column);
  };

  this.moveEditCursor = function(offset) {
    var position = self.editor.getCursorPosition();
    self.editor.gotoLine(position.row + 1, position.column + offset);
    self.editor.focus();
  };

  this.insertTextAtCursor = function(textToInsert) {
    self.editor.session.replace(self.editor.selection.getRange(), '');
    self.editor.session.insert(self.editor.getCursorPosition(), textToInsert);
    self.editor.focus();
  };

  this.getTagBeforeCursor = function() {
    var selectionRange = self.editor.getSelectionRange();
    var currline = selectionRange.start.row;
    var cursorPosition = selectionRange.end.column;
    var curLineText = self.editor.session.getLine(currline);

    var textBeforeCursor = curLineText.substring(0, cursorPosition);
    if (!textBeforeCursor) {
      return;
    }
    var tagBeforeCursor =
      textBeforeCursor.lastIndexOf('[') !== -1
        ? textBeforeCursor.substring(
            textBeforeCursor.lastIndexOf('['),
            textBeforeCursor.length
          )
        : '';

    if (
      textBeforeCursor.substring(
        textBeforeCursor.length - 2,
        textBeforeCursor.length
      ) === '[['
    ) {
      tagBeforeCursor = '[[';
    }
    if (
      textBeforeCursor.substring(
        textBeforeCursor.length - 2,
        textBeforeCursor.length
      ) === '<<'
    ) {
      tagBeforeCursor = '<<';
    }

    return tagBeforeCursor;
  };

  this.testRunFrom = function(startTestNode) {
    ipc.send(
      'testYarnStoryFrom',
      JSON.parse(data.getSaveData(FILETYPE.JSON)),
      startTestNode,
      data.editingFileFolder()
    );
  };

  this.openNodeListMenu = function(action) {
    var helperLinkSearch = document.getElementById(action + 'HelperMenuFilter')
      .value;
    var rootMenu = document.getElementById(action + 'HelperMenu');
    rootMenu.innerHTML = '';

    app.nodes().forEach((node, i) => {
      if (
        node
          .title()
          .toLowerCase()
          .indexOf(helperLinkSearch) >= 0 ||
        helperLinkSearch.length == 0
      ) {
        var p = document.createElement('span');
        p.innerHTML = node.title();
        $(p).addClass('item ' + app.nodes()[i].titleStyles[app.nodes()[i].colorID()]);

        if (action == 'link') {
          if (node.title() !== self.editing().title()) {
            p.setAttribute(
              'onclick',
              "app.insertTextAtCursor(' [[Answer:" +
                node.title() +
                '|' +
                node.title() +
                "]]')"
            );
            rootMenu.appendChild(p);
          }
        } else if (action == 'open') {
          if (
            node
              .title()
              .toLowerCase()
              .indexOf(helperLinkSearch) >= 0 ||
            helperLinkSearch.length == 0
          ) {
            p.setAttribute('onclick', `app.openNodeByTitle("${node.title()}")`);
            p.setAttribute(
              'onmouseover',
              `app.workspace.warpToNodeByIdx(${self.nodes.indexOf(node)})`
            );
            rootMenu.appendChild(p);
          }
        }
      }
    });
  };

  this.saveNode = function(closeEditor = true) {
    const node = self.editing();
    if (node) {
      const editorTitleElement = $('#editorTitle')[0];
      self.previewStory.terminate();

      // Ensure the title is unique
      const title = self.getFutureEditedNodeTitle();

      // Update the title in the UI
      editorTitleElement.value = title;
      node.title(title);

      // Remove leading and trailing spaces from the body links
      node.body(self.trimBodyLinks(node.body().trim()));

      self.makeNewNodesFromLinks();
      self.propagateUpdateFromNode(node);
      self.updateTagsRepository();
      self.workspace.updateArrows();

      // Save user settings
      const autoCompleteButton = document.getElementById('toglAutocomplete');
      self.config.autocompleteEnabled = autoCompleteButton.checked;

      const autoCompleteWordsButton = document.getElementById(
        'toglAutocompleteWords'
      );
      self.config.autocompleteWordsEnabled = autoCompleteWordsButton.checked;

      setTimeout(self.updateSearch, 600);

      // Close editor. SaveNode and CloseEditor should be different functions
      if (closeEditor) {
        $('.node-editor').transition({ opacity: 0 }, 250);
        $('.node-editor .form').transition({ y: '-100' }, 250, function(e) {
          self.editing(null);
        });
      }
    }
  };

  this.updateSearch = function() {
    var search = self.$searchField.val().toLowerCase();
    var title = $('.search-title input').is(':checked');
    var body = $('.search-body input').is(':checked');
    var tags = $('.search-tags input').is(':checked');

    var on = 1;
    var off = 0.25;

    for (var i = 0; i < app.nodes().length; i++) {
      var node = app.nodes()[i];
      var element = $(node.element);

      if (search.length > 0 && (title || body || tags)) {
        var matchTitle =
          title &&
          node
            .title()
            .toLowerCase()
            .indexOf(search) >= 0;
        var matchBody =
          body &&
          node
            .body()
            .toLowerCase()
            .indexOf(search) >= 0;
        var matchTags =
          tags &&
          node
            .tags()
            .toLowerCase()
            .indexOf(search) >= 0;

        if (matchTitle || matchBody || matchTags) {
          node.active(true);
          element.clearQueue();
          element.transition({ opacity: on }, 500);
        } else {
          node.active(false);
          element.clearQueue();
          element.transition({ opacity: off }, 500);
        }
      } else {
        node.active(true);
        element.clearQueue();
        element.transition({ opacity: on }, 500);
      }
    }
  };

  this.trimBodyLinks = function(body) {
    var re = /\[\[(.+?)\|\s*(.+?)\s*\]\]/g;
    return body.replace(re, '[[$1|$2]]');
  };

  this.updateNodeLinks = function() {
    for (let node of self.nodes()) {
      node.updateLinks();
    }
  };

  // TODO: probably 'propagateUpdateFromNode' can be used as a
  // replacement for 'updateNodeLinks'. I'll check it in next iterations.
  this.propagateUpdateFromNode = function(node) {
    var toUpdate = [];
    var updated = [];

    toUpdate.push(node);

    while ((node = toUpdate.pop())) {
      if (updated.includes(node)) {
        continue;
      }

      updated.push(node);

      node.updateLinks();

      node.linkedTo().forEach(child => {
        if (!updated.includes(child)) {
          toUpdate.push(child);
        }
      });

      node.linkedFrom().forEach(parent => {
        if (!updated.includes(parent)) toUpdate.push(parent);
      });
    }
  };

  this.updateTagsRepository = function() {
    const findFirstFreeId = () => {
      const usedIds = self.tags().map( tag => tag.id );
      for (let id = 1; ;++id)
        if (!usedIds.includes(id))
          return id;
    };

    // Reset count
    self.tags().forEach(tag => tag.count = 0);

    // Recount tags and add new
    self.nodes().forEach(node => {
      Utils.uniqueSplit(node.tags(), ' ').forEach(tag => {
        const found = self.tags().find(e => e.text == tag);
        if (found) {
          ++found.count;
        }
        else {
          const id = findFirstFreeId();
          self.tags.push({
            id: id,
            style: 'tag-style-' + id,
            text: tag,
            count: 1
          });
        }
      });
    });

    // Remove unused tags
    let i = app.tags().length;
    while (i--) {
      if(app.tags()[i].count === 0)
        app.tags().splice(i, 1);
    }
  };

  this.makeNewNodesFromLinks = function() {
    if (
      this.config &&
      this.config.overwrites &&
      !this.config.overwrites.makeNewNodesFromLinks
    ) {
      console.info(
        'Autocreation of new nodes from links is disabled in:\n' +
          this.configFilePath
      );
      return;
    }
    var nodeLinks = self.editing().getLinksInNode();
    if (nodeLinks == undefined) {
      return;
    }
    for (var i = 0; i < nodeLinks.length; i++) {
      // Create new Nodes from Node Links
      const newNodeName = nodeLinks[i].trim();
      var newNodeOffset = 220 * (i + 1);
      self.makeNodeWithName(newNodeName, newNodeOffset);
    }
  };

  this.makeNodeWithName = function(newNodeName, newNodeOffset = 220) {
    const otherNodeTitles = self.getOtherNodeTitles();
    if (
      newNodeName &&
      newNodeName.length > 0 &&
      !otherNodeTitles.includes(newNodeName) &&
      newNodeName != self.editing().title()
    ) {
      self
        .newNodeAt(self.editing().x() + newNodeOffset, self.editing().y() - 120)
        .title(newNodeName);
    }
  };

  this.titleExistsTwice = function(title) {
    return (
      app.nodes().filter(node => node.title().trim() === title.trim()).length >
      1
    );
  };

  this.getFutureEditedNodeTitle = function(){
    // Ensure the title is unique
    const editorTitleElement = $('#editorTitle')[0];
    // Return the title that will be used when changes are applied
    return self.getUniqueTitle(editorTitleElement.value.trim());
  };

  this.getOtherNodeTitles = function() {
    var result = [];
    app.nodes().forEach(node => {
      if (!self.editing() || node.title() !== self.editing().title()) {
        result.push(node.title().trim());
      }
    });
    return result;
  };

  this.getHighlightedText = function(text) {
    text = text.replace(/\</g, '&lt;');
    text = text.replace(/\>/g, '&gt;');
    text = text.replace(
      /\&lt;\&lt;(.*?)\&gt;\&gt;/g,
      '<p class="conditionbounds">&lt;&lt;</p><p class="condition">$1</p><p class="conditionbounds">&gt;&gt;</p>'
    );
    text = text.replace(
      /\[\[([^\|]*?)\]\]/g,
      '<p class="linkbounds">[[</p><p class="linkname">$1</p><p class="linkbounds">]]</p>'
    );
    text = text.replace(
      /\[\[([^\[\]]*?)\|([^\[\]]*?)\]\]/g,
      '<p class="linkbounds">[[</p>$1<p style="color:red"><p class="linkbounds">|</p><p class="linkname">$2</p><p class="linkbounds">]]</p>'
    );
    text = text.replace(
      /[^:]\/\/(.*)?($|\n)/g,
      '<span class="comment">//$1</span>\n'
    );
    text = text.replace(
      /\/\*((.|[\r\n])*)?\*\//gm,
      '<span class="comment">/*$1*/</span>'
    );
    text = text.replace(
      /\/\%((.|[\r\n])*)?\%\//gm,
      '<span class="comment">/%$1%/</span>'
    );

    // create a temporary document and remove all styles inside comments
    var div = $('<div>');
    div[0].innerHTML = text;
    div.find('.comment').each(function() {
      $(this)
        .find('p')
        .each(function() {
          $(this).removeClass();
        });
    });

    // unhighlight links that don't exist
    div.find('.linkname').each(function() {
      var name = $(this).text();
      var found = false;
      for (var i in self.nodes()) {
        if (
          self
            .nodes()
            [i].title()
            .toLowerCase() == name.toLowerCase()
        ) {
          found = true;
          break;
        }
      }
      if (!found) $(this).removeClass('linkname');
    });

    text = div[0].innerHTML;
    return text;
  };

  this.updateLineNumbers = function(text) {
    // update line numbers
    var lines = text.split('\n');
    var lineNumbers = '';
    for (var i = 0; i < Math.max(1, lines.length); i++) {
      if (i == 0 || i < lines.length - 1 || lines[i].length > 0)
        lineNumbers += i + 1 + '<br />';
    }
    $('.editor-container .lines').html(lineNumbers);
  };

  this.updateHighlights = function(e) {
    if (e.keyCode == 17 || (e.keyCode >= 37 && e.keyCode <= 40)) return;

    // get the text
    var editor = $('.editor');
    var text = editor[0].innerText;
    var startOffset, endOffset;

    // ctrl + z
    if ((e.metaKey || e.ctrlKey) && e.keyCode == 90) {
      if (self.editingHistory.length > 0) {
        var last = self.editingHistory.pop();
        text = last.text;
        startOffset = last.start;
        endOffset = last.end;
      } else {
        return;
      }
    } else {
      // get the current start offset
      var range = window.getSelection().getRangeAt(0);
      var preCaretStartRange = range.cloneRange();
      preCaretStartRange.selectNodeContents(editor[0]);
      preCaretStartRange.setEnd(range.startContainer, range.startOffset);
      startOffset = preCaretStartRange.toString().length;

      // get the current end offset
      var preCaretEndRange = range.cloneRange();
      preCaretEndRange.selectNodeContents(editor[0]);
      preCaretEndRange.setEnd(range.endContainer, range.endOffset);
      endOffset = preCaretEndRange.toString().length;

      // ctrl + c
      if ((e.metaKey || e.ctrlKey) && e.keyCode == 67) {
        if (self.gui != undefined) {
          var clipboard = self.gui.Clipboard.get();
          clipboard.set(
            text.substr(startOffset, endOffset - startOffset),
            'text'
          );
        }
      } else {
        // ctrl + v
        if ((e.metaKey || e.ctrlKey) && e.keyCode == 86) {
          var clipboard = self.gui.Clipboard.get();
          text =
            text.substr(0, startOffset) +
            clipboard.get('text') +
            text.substr(endOffset);
          startOffset = endOffset = startOffset + clipboard.get('text').length;
        }
        // ctrl + x
        else if ((e.metaKey || e.ctrlKey) && e.keyCode == 88) {
          if (self.gui != undefined) {
            var clipboard = self.gui.Clipboard.get();
            clipboard.set(
              text.substr(startOffset, endOffset - startOffset),
              'text'
            );
            text = text.substr(0, startOffset) + text.substr(endOffset);
            endOffset = startOffset;
          }
        }
        // increment if we just hit enter
        else if (e.keyCode == 13) {
          startOffset++;
          endOffset++;
          if (startOffset > text.length) startOffset = text.length;
          if (endOffset > text.length) endOffset = text.length;
        }
        // take into account tab character
        else if (e.keyCode == 9) {
          text = text.substr(0, startOffset) + '\t' + text.substr(endOffset);
          startOffset++;
          endOffset = startOffset;
          e.preventDefault();
        }

        // save history (in chunks)
        if (
          self.editingHistory.length == 0 ||
          text != self.editingHistory[self.editingHistory.length - 1].text
        ) {
          if (self.editingSaveHistoryTimeout == null)
            self.editingHistory.push({
              text: text,
              start: startOffset,
              end: endOffset,
            });
          clearTimeout(self.editingSaveHistoryTimeout);
          self.editingSaveHistoryTimeout = setTimeout(function() {
            self.editingSaveHistoryTimeout = null;
          }, 500);
        }
      }
    }

    // update text
    //editor[0].innerHTML = self.getHighlightedText(text);

    self.updateLineNumbers(text);

    // reset offsets
    if (document.createRange && window.getSelection) {
      function getTextNodesIn(node) {
        var textNodes = [];
        if (node.nodeType == 3) textNodes.push(node);
        else {
          var children = node.childNodes;
          for (var i = 0, len = children.length; i < len; ++i)
            textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
        }
        return textNodes;
      }

      var range = document.createRange();
      range.selectNodeContents(editor[0]);
      var textNodes = getTextNodesIn(editor[0]);
      var charCount = 0,
        endCharCount;
      var foundStart = false;
      var foundEnd = false;

      for (var i = 0, textNode; (textNode = textNodes[i++]); ) {
        endCharCount = charCount + textNode.length;
        if (
          !foundStart &&
          startOffset >= charCount &&
          (startOffset <= endCharCount ||
            (startOffset == endCharCount && i < textNodes.length))
        ) {
          range.setStart(textNode, startOffset - charCount);
          foundStart = true;
        }
        if (
          !foundEnd &&
          endOffset >= charCount &&
          (endOffset <= endCharCount ||
            (endOffset == endCharCount && i < textNodes.length))
        ) {
          range.setEnd(textNode, endOffset - charCount);
          foundEnd = true;
        }
        if (foundStart && foundEnd) break;
        charCount = endCharCount;
      }

      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  this.zoom = function(zoomLevel) {
    self.cachedScale = zoomLevel / 4;
    self.translate(200);
  };

  this.translate = function(speed) {
    if (speed)
      self.workspace.startUpdatingArrows();

    $('.nodes-holder').transition(
      {
        transform:
          'matrix(' +
          self.cachedScale +
          ',0,0,' +
          self.cachedScale +
          ',' +
          self.transformOrigin[0] +
          ',' +
          self.transformOrigin[1] +
          ')',
      },
      speed || 0,
      'easeInQuad',
      function() {
        if (speed) {
          self.workspace.stopUpdatingArrows();
        }
        self.workspace.updateArrows();
      }
    );
  };

  this.moveNodes = function(offX, offY) {
    for (var i in self.nodes()) {
      var node = self.nodes()[i];
      node.moveTo(node.x() + offX, node.y() + offY);
    }
  };

  this.getFirstFoundNode = function(search) {
    return self.nodes().find(node =>
      node
        .title()
        .toLowerCase()
        .includes(search)
    );
  };

  this.searchWarp = function() {
    // if search field is empty
    var search = self.$searchField
      .val()
      .toLowerCase()
      .trim();

    if (search === '') {
      // warp to the first node
      self.workspace.warpToNodeByIdx(0);
    } else {
      const foundNode = self.getFirstFoundNode(search);
      self.workspace.warpToNodeByIdx(self.nodes.indexOf(foundNode));
    }
  };

  this.clearSearch = function() {
    self.$searchField.val('');
    self.updateSearch();
  };

  this.updateEditorStats = function() {
    var text = self.editor.getSession().getValue();
    var cursor = self.editor.getCursorPosition();

    var lines = text.split('\n');
    $('.editor-counter .character-count').html(text.length);
    $('.editor-counter .line-count').html(lines.length);
    $('.editor-counter .row-index').html(cursor.row);
    $('.editor-counter .column-index').html(cursor.column);
  };

  this.getUniqueTitle = function(desiredTitle) {
    var currentlyUsedTitles = self.getOtherNodeTitles();
    if (desiredTitle && !currentlyUsedTitles.includes(desiredTitle)) {
      return desiredTitle;
    }

    var baseTitle = desiredTitle || 'Node';
    var counter = 2;

    // If the title ends with "_[number]" use the same prefix with next number
    const re = /^(.*)(_([0-9]+))$/;
    const matches = baseTitle.match(re);
    if (matches && matches.length === 4) {
      baseTitle = matches[1];
      counter = Number(matches[3]);
    }

    if (!currentlyUsedTitles.includes(baseTitle)) {
      return baseTitle;
    }

    for (; ; ++counter) {
      var newTitle = baseTitle + '_' + counter;
      if (!currentlyUsedTitles.includes(newTitle)) {
        return newTitle;
      }
    }
  };
};
