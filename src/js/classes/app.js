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
import { Input } from './input';
import { Settings } from './settings';
import { UI } from './ui';
import { data } from './data';
import { yarnRender } from './renderer';
import { Utils, FILETYPE } from './utils';
import { RichTextFormatter } from './richTextFormatter';

// TODO: refactoring proposals
//
// Create Platform class: provides platform specific info and abstractions
// Create History class: handles command history navigation (undo/redo)
// Create Editor class: handles editor setup and events
// Rename yarnRender to YarnPlayer

export var App = function(name, version) {
  const self = this;

  this.setTheme = function(name, e) {
    let themeName = e ? e.target.value : name;
    setTimeout(self.initGrid, 50);
    setTimeout(self.workspace.updateArrows, 50);
    $('#theme-stylesheet').attr('href', Utils.getPublicPath(`themes/${themeName}.css`));
  };

  this.setLanguage = function(language, e) {
    const languageId = e ? e.target.value : language;
    spoken.recognition.lang = languageId;
    load_dictionary(self.settings.language().split('-')[0]);
  };

  this.setMarkupLanguage = function(language, e) {
    const markupLanguage = e ? e.target.value : language;
    self.richTextFormatter = new RichTextFormatter(self);
    self.mustRefreshNodes.notifySubscribers();
  };

  this.setPlaytestStyle = function(style, e) {
    const playtestStyle = e ? e.target.value : style;
    self.playtestStyle = playtestStyle;
  };

  this.setGistCredentials = function(gist, e) {
    const {token, file} = gist;
    const Gists = require('gists');
    const gists = new Gists({ token });
    self.gists = gists;
    self.gists.file = file;
  };

  // Ideally this dependencies should be injected by index.js
  this.input = new Input(self);
  this.settings = new Settings(self);
  this.workspace = new Workspace(self);
  this.ui = new UI(self);
  this.previewStory = new yarnRender();
  this.richTextFormatter = new RichTextFormatter(self);

  this.data = data;
  this.name = ko.observable(name);
  this.version = ko.observable(version);
  this.editing = ko.observable(null);
  this.nodes = ko.observableArray([]);
  this.tags = ko.observableArray([]);
  this.mustRefreshNodes = ko.observable();
  this.mustUpdateTags = true;
  this.nodeHistory = [];
  this.nodeFuture = [];
  this.editingHistory = [];
  this.editingSaveHistoryTimeout = null;
  this.focusedNodeIdx = -1;
  this.isElectron = false;
  this.editor = null;
  this.nodeVisitHistory = [];
  this.clipboard = '';
  this.nodeClipboard = [];
  this.speachInstance = null;
  this.editingPath = ko.observable(null);
  this.$searchField = $('.search-field');
  this.isEditorInPreviewMode = false;
  this.isEditorSplit = false;
  this.isEditorFocused = false;
  this.editorResizeHandleOptions = {
    handleSelector: "#editor-resize-handle",
    resizeHeight: false,
    resizeWidthFrom: 'right',
    onDragStart: function() {
      self.isSplitEditorInFocus = true;
      $('#node-editor').removeClass('split-editor-out-of-focus')
    },
    onDragEnd: function() {
      self.editor.resize();
      self.settings.editorSplitSize($('#editor-form').width());
    }
  }

  // inEditor
  //
  // Indicates if we are in the editor view
  this.inEditor = () =>
    (self.editing() || (self.isEditorSplit && self.isEditorFocused)) && !self.ui.isDialogOpen();

  // inWorkspace
  //
  // Indicates if we are in the workspace view
  this.inWorkspace = () =>
    (!self.editing() || (self.isEditorSplit && self.isEditorFocused === false)) && !self.ui.isDialogOpen();

  // run
  //
  // Initializes the application
  this.run = function() {
    var osName = 'Unknown OS';
    if (navigator.platform.indexOf('Win') != -1) osName = 'Windows';
    if (navigator.platform.indexOf('Mac') != -1) osName = 'MacOS';
    if (navigator.platform.indexOf('X11') != -1) osName = 'UNIX';
    if (navigator.platform.indexOf('Linux') != -1) osName = 'Linux';
    if (navigator.platform.indexOf('Linux') != -1) osName = 'Linux';
    self.isElectron = navigator.userAgent.toLowerCase().includes('electron');

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (
      /android|iPad|iPhone|iPod/.test(userAgent.toLowerCase()) &&
      !window.MSStream
    ) {
      osName = 'mobile';
    }

    if (osName == 'Windows') self.workspace.zoomSpeed = 0.1;

    window.addEventListener('beforeunload', e => {
      this.data.saveAppStateToLocalStorage();
      return null;
    });
    window.addEventListener('DOMContentLoaded', e => {
      this.data.loadAppStateFromLocalStorage();
      
      const parsedUrl = new URL(window.location);
      const sharedText = parsedUrl.searchParams.get('text') || parsedUrl.searchParams.get('url');
      if (sharedText !== null) {
        self.insertTextAtCursor(sharedText);
        // setTimeout(() => self.insertTextAtCursor(sharedText), 100);
      }
      // searchParams.get() will properly handle decoding the values.
      // alert('Title shared: ' + parsedUrl.searchParams.get('title'));
      // if (parsedUrl.searchParams.get('text') !== null) alert('Text shared: ' + parsedUrl.searchParams.get('text'));
      //console.log(self.settings);
    });
    // PWA install promotion banner on start
    // window.addEventListener('beforeinstallprompt', function(event) {
    //   event.prompt();
    // });
    let deferredPrompt;
    const addBtn = $('#addPwa')[0];
    addBtn.style.display = 'none';
    // addBtn.addEventListener('click', (e) => {console.log(e)});
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';

      addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
            addBtn.style.display = 'none';
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
      });
    });

    $('#app').show();
    ko.applyBindings(self, $('#app')[0]);

    // this is set in the VSCode extension YarnEditorPanel
    // this is true when we're opening a file in the VSCode extension;
    // adding that start node here was causing issues with arrows (because of race conditions)
    if (!self.editingVisualStudioCodeFile()) {
      self.newNode().title('Start');
    }

    self.settings.apply();

    // search field enter
    $('.search-title input').click(self.updateSearch);
    $('.search-body input').click(self.updateSearch);
    $('.search-tags input').click(self.updateSearch);
    self.$searchField.on('input', self.updateSearch);
    self.$searchField.on('keyup', function(e) {
      // escape
      if (e.keyCode == 27) self.clearSearch();
      else self.searchWarp();
    });

    if (osName === 'mobile') self.workspace.setZoom(3);

    $(window).on('resize', function() {
      if (self.ui.isScreenNarrow() && self.editing() && self.isEditorSplit) {
        self.toggleEditorView();
      }

      self.workspace.updateArrows();
      self.initGrid();
    });
    setTimeout(self.initGrid, 50);

    this.guessPopUpHelper = function() {
      if (/color=#([a-zA-Z0-9]{3,6})$/.test(self.getTagBeforeCursor())) {
        self.insertColorCode();
      }
    };

    // TODO: move to editor
    this.insertEmoji = function() {
      this.emPicker.toggle();
      self.togglePreviewMode(true);
      $('#emojiPicker-container').css({
        left: self.input.mouse.x - 200,
        top: self.input.mouse.y - 125
      });
      $('#emojiPicker-container').show();
    };

    // TODO: move to editor
    this.insertColorCode = function() {
      if ($('#colorPicker-container').is(':visible')) {
        return;
      }
      // http://bgrins.github.io/spectrum/
      $('#colorPicker').spectrum('set', self.editor.getSelectedText());
      $('#colorPicker').spectrum('toggle');
      $('#colorPicker-container').css({
        left: self.input.mouse.x - 70,
        top: self.input.mouse.y - 50
      });
      $('#colorPicker-container').show();


      self.togglePreviewMode(true);
      setTimeout(() => {
        const currentColor = $('#colorPicker').spectrum('get');
        self.applyPickerColorEditor(currentColor);
      }, 100);
    };

    // TODO: move to editor
    this.applyPickerColorEditor = function(color) {
      const selectRange = JSON.parse(
        JSON.stringify(self.editor.selection.getRange())
      );
      self.editor.selection.setRange(selectRange);
      const colorCode = color.toHexString().replace('#', '');
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

    this.speakText = function() {
      const selectedText = self.editor.getSelectedText();
      const say = selectedText
        ? selectedText
        : self.editor.getSession().getValue();

      spoken.voices().then(countries => {
        const lookUp = self.settings.language().split('-')[0];
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

    this.toggleTranscribing = function() {
      const available = spoken.listen.available();
      var speakBubble = document.getElementById('speakTextBtnBubble');
      if (available && self.settings.transcribeEnabled()) {
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

    // Handle file dropping
    document.ondragover = document.ondrop = e => {
      e.preventDefault();
    };
    document.body.ondrop = e => {
      e.preventDefault();
      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        data.appendFile(
          e.dataTransfer.files[i],
          e.dataTransfer.files[i].name,
          false
        );
      }
    };

    // this is how the VSCode extension sends its messages back to the app
    window.addEventListener('message', (event) => {
      const message = event.data;

      switch (message.type) {
      // sent whenever the temporary file that's open gets changed
      case 'UpdateNode':
        // find the node that was being edited... we check originalNodeTitle here
        // since it's possible that the user changed the node's title in the editor
        self.nodes().forEach(node => {
          if (
            node.title().trim() ===
            message.payload.originalNodeTitle.trim()
          ) {
            node.title(message.payload.title);
            node.tags(message.payload.tags);
            node.body(message.payload.body);

            // re-send the document back to the extension so it updates its underlying text document
            self.setYarnDocumentIsDirty();
          }
        });
        break;
      default:
        break;
      }
    });

    // Callback for embedding in other webapps
    var event = new CustomEvent('yarnReady');
    event.document = document;
    event.data = data;
    event.app = this;
    window.parent.dispatchEvent(event);
  };

  this.limitNodesUpdate = function ( fn ) {
    self.nodes.extend({ rateLimit: { method: 'notifyWhenChangesStop', timeout: 250 } });
    fn();
    self.nodes.limit( callback => () => callback() );
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
    var editorTitle = $('#editorTitle');
    if (
      self.getOtherNodeTitles().includes(enteredValue) ||
      self.titleExistsTwice(enteredValue)
    ) {
      editorTitle.attr('class', 'title title-error');
      editorTitle.attr('title', 'Another node has the same title');
    } else if (!RegExp('^[a-z0-9]+$', 'i').test(enteredValue)) {
      editorTitle.attr('class', 'title title-error');
      editorTitle.attr('title', 'Only upper or lower case letters and numbers are allowed in a node title.');
    } else {
      editorTitle.removeAttr('title');
      editorTitle.removeClass('title-error');
    }
  };

  this.refreshWindowTitle = function() {
    let title = '';
    if (data.lastStorageHost() === 'LOCAL') {
      title = 'Yarn - ' + (data.editingPath() || data.editingName()) + ' ' + (data.isDocumentDirty() ? '*' : '');
    } else if (data.lastStorageHost() === 'GIST'){
      title = 'Gist - ' + (data.editingPath() || data.editingName()) + ' ' + (data.isDocumentDirty() ? '*' : '');
    }
    if (self.electron) {
      self.electron.remote.getCurrentWindow().setTitle(title);
    } else {
      document.title = title;
    }
  };

  // returns `true` is we're in the VSCode extension
  this.usingVisualStudioCodeExtension = function() {
    // this is put on window by the extension
    return !!window.vsCodeApi;
  };

  // returns `true` if we're opening a file in the VSCode extension
  // (as opposed to running the full editor)
  this.editingVisualStudioCodeFile = function() {
    return window.editingVsCodeFile === true;
  };

  // This should be called whenever we want to mark the document as changed.
  this.setYarnDocumentIsDirty = function() {
    // If we're in the VSCode extension, send it an update
    if (self.usingVisualStudioCodeExtension() && self.editingVisualStudioCodeFile()) {
      window.vsCodeApi.postMessage({
        type: 'DocumentEdit',
        
        // we just send the whole doc here every time...
        payload: data.getSaveData(data.editingType())
      });
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

    self.setYarnDocumentIsDirty();
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
      self.setYarnDocumentIsDirty();
    } //redo undone actions
    else {
      if (action == 'created') {
        self.recreateNode(node, historyItem.lastX, historyItem.lastY);
      } else if (action == 'removed') {
        removeNode(node);
      }

      self.nodeHistory.push(historyItem);
      self.setYarnDocumentIsDirty();
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
      self.workspace.selectNodes(node);
      self.recordNodeAction('created', node);
    });

    self.updateNodeLinks();
  };

  this.confirmDeleteNodes = function(toDelete) {
    const node = Array.isArray(toDelete) ? undefined : toDelete;
    const selected = Array.isArray(toDelete) ?
      [...toDelete] :
      node && node.selected ?
        [...self.workspace.getSelectedNodes()] :
        [toDelete];

    if (selected.length) {
      Swal.fire({
        title: 'Are you sure?',
        text: `${selected.length} ${selected.length === 1 ? 'node' : 'nodes'} will be deleted.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          self.deleteNodes(selected);
        }
      });
    }
  };

  this.deleteNodes = function(nodes) {
    const list = Array.isArray(nodes) ? nodes : [nodes];
    const promises = [];

    for (let i = list.length-1; i >= 0; --i)
      promises.push( list[i].remove() );

    Promise.all(promises)
      .then( () => {
        self.limitNodesUpdate( () => {
          for (let i = list.length-1; i >= 0; --i) {
            if (self.inEditor()) {
              if (self.editing() === list[i]) {
                self.closeEditor();
              }
            }
            self.deleteNode(list[i]);
          }

          self.updateNodeLinks();
          self.workspace.deselectNodes(list);
          self.workspace.updateArrows();
        });
      });
  };

  this.deleteNode = function(node) {
    const index = self.nodes.indexOf(node);
    if (index >= 0) {
      self.recordNodeAction('removed', node);
      self.nodes.splice(index, 1);
    }
    self.setYarnDocumentIsDirty();
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

  // TODO: used just once. Fuse with newNodeAt and makeNodeWithName
  this.newNode = function(updateLinks=true) {
    var node = new Node();
    self.nodes.push(node);

    if (updateLinks)
      self.updateNodeLinks();

    self.recordNodeAction('created', node);

    return node;
  };

  this.newNodeAt = function(x, y) {
    var node = new Node({ x: x - 100, y: y - 100});

    self.nodes.push(node);

    self.updateNodeLinks();
    self.recordNodeAction('created', node);

    return node;
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

    // this is a setting that can only be set by the VSCode extension
    // if it's true, when we go to edit a node we actually open it in VSCode's text editor
    if (self.settings.alwaysOpenNodesInVisualStudioCodeEditor()) {
      self.editNodeInVisualStudioCodeEditor(node);
      return;
    }

    // Make sure we save the node being currently edited before editing a new
    // one using the context menu
    if (self.editing() && self.editing() !== node)
      self.saveNode(false);

    node.oldTitle = node.title(); // To check later if "title" changed

    self.editing(node);

    self.mustUpdateTags = true;

    $('#node-editor-background')
      .css({ opacity: 0 })
      .transition({ opacity: 1 }, 250);
    $('#node-editor')
      .css({ y: '-100', opacity: 0 })
      .transition({ y: '0', opacity: 1.0 }, 250);
    self.editor = ace.edit('editor');
    self.editor.setOptions({
      scrollPastEnd: 0.5
    })
    self.editor.navigateFileEnd();

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
      move: function(color) {
        self.applyPickerColorEditor(color);
      },
      clickoutFiresChange: true,
    });

    /// Enable autocompletion for node links (borked atm)
    const langTools = ace.require('ace/ext/language_tools');
    const nodeLinksCompleter = Utils.createAutocompleter(
      ['string.llink', 'string.rlink'],
      self.getOtherNodeTitles(),
      'Node Link'
    );
    // console.log(langTools);
    langTools.setCompleters([nodeLinksCompleter, langTools.keyWordCompleter, langTools.textCompleter, langTools.snippetCompleter]);

    // autocompletion
    let autoCompleteTimeout = undefined;
    self.editor.getSession().on('change', function(evt) {
      const autoComplete = self.settings.autoCloseTags();
      if (evt.action === 'insert' && autoComplete) {
        if (self.richTextFormatter.justInsertedAutoComplete) {
          self.richTextFormatter.justInsertedAutoComplete = false;
          return;
        }
        autoCompleteTimeout && clearTimeout (autoCompleteTimeout);
        autoCompleteTimeout = setTimeout(() => {
          autoCompleteTimeout = undefined;
          self.richTextFormatter.completableTags.forEach( tag => {
            if (self.getTagBeforeCursor() === tag.Start) {
              self.richTextFormatter.justInsertedAutoComplete = true;
              let insertedText = tag.Completion;
              let offset = tag.Offset;
              if (self.settings.autoCloseBrackets()) {
                if (tag.BehaviorCompletion) {
                  insertedText = tag.BehaviorCompletion;
                  offset += 1;
                }
              }
              tag.Completion && self.insertTextAtCursor(insertedText);
              tag.Offset && self.moveEditCursor(offset);
              tag.Func && tag.Func();
            }
          });
        }, 200);
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

    /// init spell check
    enable_spellcheck();

    self.toggleTranscribing();
    self.toggleInvertColors();
    self.toggleShowCounter();
    self.toggleSpellCheck();
    self.validateTitle(); // warn if title already exists
    self.updateEditorStats();
    self.updateEditorOptions();

    if (self.$searchField.val().length > 0 && $('.search-body input').is(':checked')){
      self.editor.findAll(self.$searchField.val());
    }

    if (self.settings.editorSplit()) {
      self.splitEditor();
      self.workspace.warpToNodeByIdx(node.index() - 1);
    }

    if (self.settings.editorSplitDirection() === "right") {
      $('#editor-form').addClass('split-editor-right');
      $('#editor-resize-handle').addClass('float-right');
    } else {
      $('#editor-form').removeClass('split-editor-right');
      $('#editor-resize-handle').removeClass('float-right');
    }

    $('.node-editor').on('pointerdown', '> *', function(e) {
      if (self.isEditorSplit) {
        self.focusEditor(true);
        e.stopPropagation();
      }
    })

    // Remove app-info while editor is open, can't see it anyway
    $('.app-info').hide();

    self.editor.resize();
  };

  this.splitEditor = function() {
    self.isEditorSplit = true;
    self.focusEditor(true);
    self.settings.editorSplit(true);

    self.editorResizeHandleOptions.resizeWidthFrom = (self.settings.editorSplitDirection() === 'right') ? 'left' : 'right';

    // Editor Classes
    $('#editor-form')
    .width(self.settings.editorSplitSize())
    .addClass('split-editor')
    .toggleClass('split-editor-right', self.settings.editorSplitDirection() === 'right')
    .resizable(self.editorResizeHandleOptions);

    // Hide editor background
    $('#node-editor-background').addClass('hidden');

    // Lower z-index
    $('#node-editor').css({'z-index': 10002});

    // Show resize handle
    $('#editor-resize-handle').removeClass('hidden').toggleClass('float-right', self.settings.editorSplitDirection() === 'right');

    // Reveal/hide buttons
    $('#split-editor-button').addClass('hidden');
    $('#snap-editor-button').removeClass('hidden');
    $('#exit-editor').removeClass('hidden');
    $('#full-size-editor-button').removeClass('hidden');
    $('#split-button-separator').removeClass('hidden');

    self.ui.checkAndMoveAppButtons();
  };

  this.toggleEditorView = function() {
    self.settings.editorSplit(!self.settings.editorSplit());

    self.reopenEditor();
  };

  this.reopenEditor = function() {
    self.saveNode();
    let editingNode = self.editing();
    self.closeEditor();
    setTimeout(() => {
      self.editNode(editingNode);
    }, 250);
  }

  this.editorSnapToggle = function() {
    self.settings.editorSplitDirection((self.settings.editorSplitDirection() === 'right') ? 'left' : 'right')

    self.reopenEditor();
  };

  this.focusEditor = function(value) {
    if (value === true) {
      $('#node-editor').removeClass('split-editor-unfocused');
      self.isEditorFocused = true;
    } else {
      $('#node-editor').addClass('split-editor-unfocused');
      self.isEditorFocused = false;
    }
  };

  this.getSplitEditorXOffset = function() {
    let splitEditorXOffset = 0;

    if (self.inEditor() && self.settings.editorSplit()) {
      splitEditorXOffset = ($('#editor-form').width() / 2);
      
      if (self.settings.editorSplitDirection() === 'right') { splitEditorXOffset *= -1; }
    }

    return splitEditorXOffset;
  }

  // called by the "Edit in Visual Studio Code Text Editor" button
  // this sends a message to the extension telling it to open the node in a text editor
  this.editNodeInVisualStudioCodeEditor = function(node) {
    if (self.usingVisualStudioCodeExtension()) {
      // updating the document is actually a trick to force VSCode to think the open document is
      // dirty so that if it's not "pinned" it won't close when the editor swaps
      self.setYarnDocumentIsDirty();

      // tell VSCode extension to open our node in a new editor
      window.vsCodeApi.postMessage({
        type: 'OpenNode',
        payload: {
          title: node.title().trim(),
          tags: node.tags().trim(),
          body: self.trimBodyLinks(node.body().trim())
        }
      });
    } else {
      console.error('Tried to open node in Visual Studio Code text editor but we\'re not in the Visual Studio Code extension');
    }
  };

  this.chooseRelativePathImage = function(imagePath) {
    self.insertTextAtCursor(imagePath);
  };

  this.openNodeByTitle = function(nodeTitle) {
    self.makeNodeWithName(nodeTitle);
    self.nodes().forEach(node => {
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
      self.closeEditor();
    } else {
      const title = self.nodeVisitHistory.pop();
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
    // Timeout so spellcheck can toggle after the spelling check settings are updated
    setTimeout(function() {
      if (self.settings.spellcheckEnabled())
      enable_spellcheck();
    else
      disable_spellcheck();
    }, 50);
  };

  this.toggleInvertColors = function() {
    const cssOverwrite = self.settings.invertColorsEnabled() ?
      { filter: 'invert(100%)' } :
      { filter: 'invert(0%)' };

    $('#app').css(cssOverwrite);
    $('#app-bg').css(cssOverwrite);
    $('.tooltip').css(cssOverwrite);
    $('.node .body').css(cssOverwrite);
    $('.node-editor .form .editor-container .editor-preview').css(cssOverwrite);
  };

  this.initGrid = function() {
    if (self.settings.snapGridEnabled()) {
      var width = $(window).width();
      var height = $(window).height();
      $('#grid-canvas').attr('width', width);
      $('#grid-canvas').attr('height', height);
      $('#gridSize').attr('disabled', false);
      self.workspace.gridContext.strokeStyle = self.workspace.gridContext.fillStyle = $('.grid-canvas').css('color');
    } else {
      $('#gridSize').attr('disabled', true);
    }

    app.workspace.updateGrid();
  }

  this.toggleShowCounter = function() {
    if (self.settings.editorStatsEnabled()) {
      $('.node-editor .form .editor-counter').css({
        display: 'initial',
      });
    } else {
      $('.node-editor .form .editor-counter').css({
        display: 'none',
      });
    }
  };

  this.toggleAutocompleteSuggestions = function() {
    self.settings.autocompleteSuggestionsEnabled(!self.settings.autocompleteSuggestionsEnabled());
    self.updateEditorOptions();
  };

  this.toggleAutoCloseBrackets = function() {
    self.settings.autoCloseBrackets(!self.settings.autoCloseBrackets());
    self.updateEditorOptions();
  };

  this.updateEditorOptions = function() {
    self.editor.setOptions({
      enableBasicAutocompletion: app.settings.autocompleteSuggestionsEnabled(),
      enableLiveAutocompletion: app.settings.autocompleteSuggestionsEnabled(),
      behavioursEnabled: app.settings.autoCloseBrackets(),
    });
  }

  this.advanceStoryPlayMode = function(speed = 5) {
    if (!self.previewStory.finished) {
      self.previewStory.changeTextScrollSpeed(speed);
      if (self.previewStory.vnSelectedChoice != -1 && speed === 5) {
        self.previewStory.vnSelectChoice();
      }
    }
    else self.togglePlayMode(false);
  };

  this.togglePlayMode = function(playModeOverwrite = false) {
    var editor = $('.editor')[0];
    var storyPreviewPlayButton = document.getElementById('storyPlayButton');
    var editorPlayPreviewer = document.getElementById('editor-play');
    if (playModeOverwrite) {
      self.togglePreviewMode(false);
      //preview play mode
      editor.style.display = 'none';
      editorPlayPreviewer.style.display = 'flex';
      $(storyPreviewPlayButton).addClass('disabled');
      $('.toggle-toolbar').addClass('hidden');
      $('.editor-counter').addClass('hidden');
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
        'commandDebugLabel',
        self.playtestStyle
      );
    } else {
      //edit mode
      self.editor.session.setScrollTop(editorPlayPreviewer.scrollTop);
      editorPlayPreviewer.style.display = 'none';
      editor.style.display = 'flex';
      $(storyPreviewPlayButton).removeClass('disabled');
      $('.toggle-toolbar').removeClass('hidden');
      $('.editor-counter').removeClass('hidden');
      self.previewStory.terminate();
      setTimeout(() => {
        if (
          self.editing() &&
          self.editing().title() !== self.previewStory.node.title
        ) {
          self.openNodeByTitle(self.previewStory.node.title);
        }
        self.editor.focus();
      }, 1000);
    }
  };

  // TODO: move to UI?
  this.togglePreviewMode = function(previewModeOverwrite) {
    const editor = $('.editor')[0];
    const editorPreviewer = $('#editor-preview')[0];

    self.isEditorInPreviewMode = previewModeOverwrite;
    if (previewModeOverwrite) {
      self.togglePlayMode(false);
      $('.bbcode-toolbar').addClass('hidden');
      //preview mode
      editor.style.display = 'none';
      editorPreviewer.style.display = 'block';
      editorPreviewer.innerHTML = self.richTextFormatter.richTextToHtml(self.editing().body(), true);
      editorPreviewer.scrollTop = self.editor.renderer.scrollTop;
    } else {
      //edit mode
      $('.bbcode-toolbar').removeClass('hidden');
      self.editor.session.setScrollTop(editorPreviewer.scrollTop);
      editorPreviewer.innerHTML = '';
      editorPreviewer.style.display = 'none';
      editor.style.display = 'flex';
      self.editor.focus();
      self.editor.resize();
      //close any pop up helpers tooltip class
      if ($('#colorPicker-container').is(':visible')) {
        $('#colorPicker-container').hide();
      }
      if ($('#emojiPicker-container').is(':visible')) {
        $('#emojiPicker-container').hide();
      }
    }
  };

  // TODO: move to editor class
  this.appendText = function(textToAppend) {
    self.editing().body(self.editing().body() + textToAppend);
    // scroll to end of line
    var row = self.editor.session.getLength() - 1;
    var column = self.editor.session.getLine(row).length;
    self.editor.gotoLine(row + 1, column);
  };

  // TODO: move to editor class
  this.moveEditCursor = function(offset) {
    var position = self.editor.getCursorPosition();
    self.editor.gotoLine(position.row + 1, position.column + offset);
    self.editor.focus();
  };

  // TODO: move to editor class
  this.insertTextAtCursor = function(textToInsert) {
    if (!self.editing()) return;
    self.editor.session.replace(self.editor.selection.getRange(), '');
    self.editor.session.insert(self.editor.getCursorPosition(), textToInsert);
    self.editor.focus();
  };

  // TODO: move to editor class
  this.getTagBeforeCursor = function() {
    const selectionRange = self.editor.getSelectionRange();
    const curPosition = selectionRange.end.column;
    const curLine = selectionRange.start.row;
    const curLineText = self.editor.session.getLine(curLine);

    const textBeforeCursor = curLineText.substring(0, curPosition);
    if (!textBeforeCursor) {
      return '';
    }

    return self.richTextFormatter.identifyTag(textBeforeCursor);
  };

  this.saveNode = function() {
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
      self.workspace.updateArrows();

      setTimeout(self.updateSearch, 600);

      self.setYarnDocumentIsDirty();
    }
  };

  this.closeEditor = function() {
    $('#node-editor-background').transition({ opacity: 0 }, 250);
    $('#node-editor').transition({ y: '-100', opacity: 0 }, 250, function(e) {
      self.editing(null);
    });

    self.isEditorSplit = false;
    self.isEditorFocused = false;

    $('.app-info').show();

    app.ui.resetAppButtonsLocation();
  };

  this.convertMarkup = function() {
    self.nodes().forEach( node => {
      node.body(self.richTextFormatter.convert(node.body()));
    });
  };

  this.updateSearch = function() {
    var search = self.$searchField.val().toLowerCase();
    var title = $('.search-title input').is(':checked');
    var body = $('.search-body input').is(':checked');
    var tags = $('.search-tags input').is(':checked');

    var on = 1;
    var off = 0.25;

    for (var i = 0; i < self.nodes().length; i++) {
      var node = self.nodes()[i];
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
          node.active({ title: matchTitle, body: matchBody, tags: matchTags});
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
        if (!updated.includes(parent)) {
          toUpdate.push(parent);
        }
      });
    }
  };

  this.updateTagsRepository = function() {
    if (!self.mustUpdateTags)
      return;

    self.mustUpdateTags = false;

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
    let i = self.tags().length;
    while (i--) {
      if(self.tags()[i].count === 0)
        self.tags().splice(i, 1);
    }
  };

  this.makeNewNodesFromLinks = function() {
    if (!self.settings.createNodesEnabled())
      return console.info('Autocreate new nodes disabled');

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
      self.nodes().filter(node => node.title().trim() === title.trim()).length >
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
    self.nodes().forEach(node => {
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
    data.saveAppStateToLocalStorage();
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
