/* eslint-disable jquery/no-ajax */
const path = require('path');
const saveAs = require('file-saver');
import { Node } from './node';
import { Utils, FILETYPE } from './utils';

export const data = {
  editingPath: ko.observable(null),
  editingName: ko.observable('NewFile'),
  editingType: ko.observable('json'),
  editingFolder: ko.observable(null),
  isDocumentDirty: ko.observable(false),
  restoreFromLocalStorage: ko.observable(true),
  lastStorageHost: ko.observable('LOCAL'), // GIST | LOCAL
  editingFileFolder: function(addSubPath = '') {
    const filePath = data.editingPath() ? data.editingPath() : '';
    return addSubPath.length > 0
      ? path.join(path.dirname(filePath), addSubPath)
      : path.dirname(filePath);
  },
  startNewFile: function(editingName = 'NewFile', editingFormat = 'json') {
    data.editingPath(null);
    data.editingName(editingName);
    data.editingType(editingFormat);
    data.editingFolder(null);
    app.workspace.selectedNodes = [];
    app.editing(null);
    app.nodes([app.newNode(true).title('Start')]);
    app.tags([]);
    app.updateNodeLinks();
    app.workspace.warpToNodeByIdx(0);
    data.lastStorageHost('LOCAL');
    data.isDocumentDirty(true);
    app.refreshWindowTitle();
  },
  askForFileName: function() {
    Swal.fire({
      title: 'Enter a New File Name',
      input: 'text',
      inputPlaceholder: 'NewFile',
      showCancelButton: true,
    }).then((result) => {
      if (result.value || result.value === "") {
        data.startNewFile((result.value || 'NewFile'));
      }
    })
  },
  setNewFile: function() {
    Swal.fire({
      title: 'Create a New File?',
      text: `Any unsaved progress to ${data.editingName()}.${data.editingType()} will be lost!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'New file',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.value) {
        data.askForFileName();
      }
    });
  },
  saveAppStateToLocalStorage: function() {
    if (!data.restoreFromLocalStorage()) return;

    const storage = app.settings.storage;
    data.isDocumentDirty(true);
    app.refreshWindowTitle();
    storage.setItem(
      'appState',
      JSON.stringify({
        editingPath: data.editingPath(),
        editingName: data.editingName(),
        editingType: data.editingType(),
        editingFolder: data.editingFolder(),
        editingTitle: app.editing() ? app.editing().title() : null,
        nodes: data.getNodesAsObjects(),
        tags: app.tags(),
        editorSelection: app.editor ? app.editor.selection.getRange() : null,
        transform: app.workspace.transform,
        scale: app.workspace.scale,
        lastStorageHost: data.lastStorageHost(),
      }),
    );
  },
  loadAppStateFromLocalStorage: function() {
    if (!data.restoreFromLocalStorage()) return;

    const storage = app.settings.storage;
    const appState = JSON.parse(storage.getItem('appState'));
    if (appState) {
      const {
        editingPath,
        lastStorageHost,
        editingName,
        editingType,
        editingFolder,
        editingTitle,
        editorSelection,
        nodes,
        tags,
        transform,
        scale,
      } = appState;
      data.editingPath(editingPath);
      data.editingName(editingName);
      data.editingType(editingType);
      data.editingFolder(editingFolder);
      data.lastStorageHost(lastStorageHost);
      app.nodes([]);
      data.getNodesFromObjects(nodes).forEach((node) => app.nodes.push(node));
      app.tags(tags);
      app.updateNodeLinks();
      app.workspace.setTranslation(transform.x, transform.y);
      app.workspace.setZoom(scale * 4);
      if (editingTitle) {
        app.editNode(app.nodes().find((node) => node.title() === editingTitle));
        if (editorSelection) app.editor.selection.setRange(editorSelection);
      }
      data.isDocumentDirty(true);
      app.refreshWindowTitle();
    }
  },
  readFile: function(file, filename, clearNodes) {
    // Read approach that works for webapps
    var reader = new FileReader();
    reader.onload = function(e) {
      // fileDisplayArea.innerText = reader.result;
      var type = data.getFileType(filename);
      if (type == FILETYPE.UNKNOWN) alert('Unknown filetype!');
      else {
        data.editingPath(file.path);
        data.editingType(type);
        data.loadData(reader.result, type, clearNodes);
      }
    };
    reader.readAsText(file);
  },

  openFile: function(file, filename) {
    if (data.editingPath()) {
      if (
        !confirm(
          'Are you sure you want to close \n' +
            data.editingPath() +
            '\nAny unsaved progress will be lost...',
        )
      ) {
        return;
      }
    }
    data.editingName(filename.replace(/^.*[\\\/]/, ''));
    data.readFile(file, filename, true);
    data.isDocumentDirty(false);
    data.editingPath(file.path);
    data.lastStorageHost('LOCAL');
    app.refreshWindowTitle();
  },
  openFiles: function(file, filename) {
    const files = document.getElementById('open-file').files;
    Object.entries(files).forEach(([key, value]) => {
      if (key === '0') data.openFile(value, value.name);
      else data.appendFile(value, value.name);
    });
  },
  openFolder: function(e, foldername) {
    editingFolder = foldername;
    alert(
      'openFolder not yet implemented e: ' + e + ' foldername: ' + foldername,
    );
  },

  appendFile: function(file, filename) {
    data.readFile(file, filename, false);
  },

  getFileType: function(filename) {
    const lowerFileName = filename.toLowerCase();

    if (lowerFileName.endsWith('.json')) return FILETYPE.JSON;
    else if (lowerFileName.endsWith('.yarn.txt')) return FILETYPE.YARN;
    else if (lowerFileName.endsWith('.yarn')) return FILETYPE.YARN;
    else if (lowerFileName.endsWith('.xml')) return FILETYPE.XML;
    else if (lowerFileName.endsWith('.txt')) return FILETYPE.TWEE;
    else if (lowerFileName.endsWith('.tw2')) return FILETYPE.TWEE2;
    else if (lowerFileName.endsWith('.twee')) return FILETYPE.TWEE2;

    return FILETYPE.UNKNOWN;
  },

  loadData: function(content, type, clearNodes) {
    const objects = [];

    if (type == FILETYPE.JSON) {
      content = JSON.parse(content);
      if (!content) {
        return;
      }
      for (let i = 0; i < content.length; i++) {
        objects.push(content[i]);
      }
    } else if (type == FILETYPE.YARN) {
      var lines = content.split(/\r?\n/);
      var obj = null;
      var index = 0;
      var readingBody = false;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '===') {
          readingBody = false;
          if (obj != null) {
            objects.push(obj);
            obj = null;
          }
        } else if (readingBody) {
          obj.body += lines[i] + '\n';
        } else {
          if (lines[i].indexOf('title:') > -1) {
            if (obj == null) obj = {};
            obj.title = lines[i].substr(7, lines[i].length - 7);
          } else if (lines[i].indexOf('position:') > -1) {
            if (obj == null) obj = {};
            var xy = lines[i].substr(9, lines[i].length - 9).split(',');
            obj.position = { x: Number(xy[0].trim()), y: Number(xy[1].trim()) };
          } else if (lines[i].indexOf('colorID:') > -1) {
            if (obj == null) obj = {};
            obj.colorID = Number(
              lines[i].substr(9, lines[i].length - 9).trim(),
            );
          } else if (lines[i].indexOf('tags:') > -1) {
            if (obj == null) obj = {};
            obj.tags = lines[i].substr(6, lines[i].length - 6);
          } else if (lines[i].trim() == '---') {
            readingBody = true;
            obj.body = '';
          }
        }
      }
      if (obj != null) {
        objects.push(obj);
      }
    } else if (type == FILETYPE.TWEE || type == FILETYPE.TWEE2) {
      var lines = content.split('\n');
      var obj = null;
      var index = 0;
      for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim();
        if (lines[i].substr(0, 2) == '::') {
          if (obj != null) objects.push(obj);

          obj = {};
          index++;

          var title = '';
          var tags = '';
          var position = { x: index * 80, y: index * 80 };

          // check if there are tags
          var openBracket = lines[i].indexOf('[');
          var closeBracket = lines[i].indexOf(']');
          if (openBracket > 0 && closeBracket > 0) {
            tags = lines[i].substr(
              openBracket + 1,
              closeBracket - openBracket - 1,
            );
          }

          // check if there are positions (Twee2)
          var openPosition = lines[i].indexOf('<');
          var closePosition = lines[i].indexOf('>');

          if (openPosition > 0 && closePosition > 0) {
            var coordinates = lines[i]
              .substr(openPosition + 1, closePosition - openPosition - 1)
              .split(',');
            position.x = parseInt(coordinates[0]);
            position.y = parseInt(coordinates[1]);
          }

          var metaStart = 0;
          if (openBracket > 0) {
            metaStart = openBracket;
          } else if (openPosition > 0) {
            // Twee2 dictates that tags must come before position, so we'll only care about this if we don't
            // have any tags for this Passage
            metaStart = openPosition;
          }

          if (metaStart) {
            title = lines[i].substr(3, metaStart - 3);
          } else {
            title = lines[i].substr(3);
          }

          // fix for issue https://github.com/InfiniteAmmoInc/Yarn/issues/83
          title = title.trim();

          obj.title = title;
          obj.tags = tags;
          obj.body = '';
          obj.position = position;
        } else if (obj != null) {
          if (obj.body.length > 0) lines[i] += '\n';
          obj.body += lines[i];
        }
      }

      if (obj != null) objects.push(obj);
    } else if (type == FILETYPE.XML) {
      var oParser = new DOMParser();
      var xml = oParser.parseFromString(content, 'text/xml');
      content = Utils.xmlToObject(xml);

      if (content != undefined)
        for (let i = 0; i < content.length; i++) objects.push(content[i]);
    }

    app.limitNodesUpdate(() => {
      if (clearNodes) app.nodes.removeAll();

      data.getNodesFromObjects(objects).forEach((node) => app.nodes.push(node));
    });

    app.updateNodeLinks();
    app.workspace.warpToNodeByIdx(0);

    // Callback for embedding in other webapps
    var event = new CustomEvent('yarnLoadedData');
    event.document = document;
    event.data = data;
    event.app = app;
    window.parent.dispatchEvent(event);
  },
  getNodeFromObject: function(object) {
    return new Node({
      title: object.title,
      body: object.body,
      tags: object.tags,
      colorID: object.colorID,
      x: parseInt(object.position.x),
      y: parseInt(object.position.y),
    });
  },
  getNodeAsObject: function(node) {
    return {
      title: node.title(),
      tags: node.tags(),
      body: node.body(),
      position: { x: node.x(), y: node.y() },
      colorID: node.colorID(),
    };
  },
  getNodesFromObjects: function(objects) {
    const appNodes = [];
    if (!objects) return [];
    objects.forEach((object) => {
      appNodes.push(data.getNodeFromObject(object));
    });
    return appNodes;
  },

  getNodesAsObjects: function() {
    const nodesObjects = [];
    const nodes = app.nodes();

    for (var i = 0; i < nodes.length; i++) {
      nodesObjects.push(data.getNodeAsObject(nodes[i]));
    }
    return nodesObjects;
  },
  getSaveData: function(type) {
    var output = '';
    var content = data.getNodesAsObjects();

    if (type == FILETYPE.JSON) {
      output = JSON.stringify(content, null, '\t');
    } else if (type == FILETYPE.YARN) {
      for (let i = 0; i < content.length; i++) {
        output += 'title: ' + content[i].title + '\n';
        output += 'tags: ' + content[i].tags + '\n';
        output += 'colorID: ' + content[i].colorID + '\n';
        output +=
          'position: ' +
          content[i].position.x +
          ',' +
          content[i].position.y +
          '\n';
        output += '---\n';
        output += content[i].body;
        var body = content[i].body;
        if (!(body.length > 0 && body[body.length - 1] == '\n')) {
          output += '\n';
        }
        output += '===\n';
      }
    } else if (type == FILETYPE.TWEE) {
      for (let i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        output += ':: ' + content[i].title + tags + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type == FILETYPE.TWEE2) {
      for (let i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        var position =
          ' <' + content[i].position.x + ',' + content[i].position.y + '>';
        output += ':: ' + content[i].title + tags + position + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type == FILETYPE.XML) {
      output += '<nodes>\n';
      for (let i = 0; i < content.length; i++) {
        output += '\t<node>\n';
        output += '\t\t<title>' + content[i].title + '</title>\n';
        output += '\t\t<tags>' + content[i].tags + '</tags>\n';
        output += '\t\t<body>' + content[i].body + '</body>\n';
        output +=
          '\t\t<position x="' +
          content[i].position.x +
          '" y="' +
          content[i].position.y +
          '"></position>\n';
        output += '\t\t<colorID>' + content[i].colorID + '</colorID>\n';
        output += '\t</node>\n';
      }
      output += '</nodes>\n';
    }

    data.isDocumentDirty(false);
    app.refreshWindowTitle();
    return output;
  },

  saveTo: function(path, content, callback = null) {
    if (app.fs != undefined) {
      app.fs.writeFile(path, content, { encoding: 'utf-8' }, function(err) {
        data.editingPath(path);
        if (callback) callback();
        if (err) alert('Error Saving Data to ' + path + ': ' + err);
      });
    }
  },

  openFileDialog: function(dialog, callback) {
    dialog.bind('change', function(e) {
      // make callback
      callback(e.currentTarget.files[0], dialog.val());

      // replace input field with a new identical one, with the value cleared
      // (html can't edit file field values)
      var saveas = '';
      var accept = '';
      if (dialog.attr('nwsaveas') != undefined)
        saveas = 'nwsaveas="' + dialog.attr('nwsaveas') + '"';
      if (dialog.attr('accept') != undefined)
        saveas = 'accept="' + dialog.attr('accept') + '"';

      dialog
        .parent()
        .append(
          '<input type="file" id="' +
            dialog.attr('id') +
            '" ' +
            accept +
            ' ' +
            saveas +
            '>',
        );
      dialog.unbind('change');
      dialog.remove();
    });

    dialog.trigger('click');
  },

  saveFileDialog: function(dialog, type, content) {
    var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(
      blob,
      (data.editingName() || '').replace(/\.[^/.]+$/, '') + '.' + type,
    );
  },

  insertImageFileName: function() {
    data.openFileDialog($('#open-image'), function(e, path) {
      app.insertTextAtCursor(e.path ? e.path : e.name);
    });
  },

  tryOpenFile: function() /// Refactor to send signal to the main process
  {
    data.openFileDialog($('#open-file'), data.openFiles);
  },

  promptFileNameAndFormat: function(cb, suggestions = null) {
    Swal.fire({
      title: '💾 Save file - enter file name',
      html: `<input id="swal-input1" list="select-file-name" name="select" placeholder="${data.editingName()}">
      <datalist class="form-control" id="select-file-name">    
        ${suggestions &&
          suggestions
            .map((suggestion) => `<option value="${suggestion}" />`)
            .join('')}
      </datalist>`,
      onOpen: () => {
        if (data.editingName() !== 'NewFile')
          document.getElementById('swal-input1').value = data.editingName();
      },
      showCancelButton: true,
      preConfirm: () => document.getElementById('swal-input1').value,
    }).then(({ value }) => {
      if (value && value !== '') {
        data.editingName(value);
        const editingType = data.editingType();
        const editingName =
          (data.editingName() || '').replace(/\.[^/.]+$/, '') +
          '.' +
          editingType;
        const yarnData = data.getSaveData(editingType);
        cb({
          editingName,
          yarnData,
        });
      }
    });
  },

  tryShareFilePwa: function(format) {
    data.promptFileNameAndFormat(({ editingName, yarnData }) => {
      const parts = [new Blob([yarnData], { type: 'text/plain' })];
      const file = new File(parts, editingName, {});

      if (
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        navigator
          .share({
            title: editingName,
            text: yarnData,
            file: [file],
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        alert(
          'Web Share API is not supported in your browser.\nTry using it on your smartphone or tablet...',
        );
      }
    });
  },

  trySaveGist: function(gists) {
    if (gists && gists.file && gists.file.length > 0) {
      gists.get(gists.file).then((gist) => {
        const gistFiles = Object.keys(gist.body.files);
        console.log(gistFiles);
        data.promptFileNameAndFormat(({ editingName, yarnData }) => {
          gists.edit(gists.file, {
            files: { [editingName]: { content: yarnData } },
          });
          Swal.fire(
            'Saved!',
            `The Yarn has been saved to gist ${gists.file}`,
            'success',
          );
          data.lastStorageHost('GIST');
          data.isDocumentDirty(false);
          app.refreshWindowTitle();
        }, gistFiles);
      });
    } else {
      Swal.fire(
        'Not configured',
        'Your github settings are not configured',
        'warning',
      );
      app.ui.openSettingsDialog();
    }
  },

  tryOpenGist: function(gists) {
    if (gists && gists.file && gists.file.length > 0) {
      gists.get(gists.file).then((gist) => {
        const gistFiles = gist.body.files;
        const inputOptions = {};
        Object.keys(gistFiles).forEach((key) => {
          inputOptions[key] = key;
        });
        Swal.fire({
          title: '🐙 Open file from a gist',
          input: 'select',
          inputOptions,
          inputAttributes: {
            autocomplete: 'off',
          },
          inputPlaceholder: 'Select a file from the gist',
          showCancelButton: true,
        }).then(({ value }) => {
          if (value) {
            const content = gistFiles[value].content;
            const type = data.getFileType(value);
            data.loadData(content, type, true);
            data.isDocumentDirty(false);
            data.lastStorageHost('GIST');
            data.editingPath(null);
            data.editingName(value);
            app.refreshWindowTitle();
          }
        });
      });
    } else {
      Swal.fire(
        'Not configured',
        'Your github settings are not configured',
        'warning',
      );
      app.ui.openSettingsDialog();
    }
  },

  tryOpenFolder: function() {
    data.openFileDialog($('#open-folder'), data.openFolder);
  },

  tryAppend: function() {
    data.openFileDialog($('#open-file'), data.appendFile);
  },

  save: function() {
    if (app.editingVisualStudioCodeFile()) {
      // if we're editing a file in the VSCode extension, it handles
      // saving the file on its end so we do nothing here
      return;
    }

    if (data.editingPath()) data.trySaveCurrent();
    else data.trySave(FILETYPE.JSON);
  },

  trySave: function(type) {
    data.editingType(type);
    data.saveFileDialog($('#save-file'), type, data.getSaveData(type));
  },

  trySaveCurrent: function() {
    if (data.lastStorageHost() === 'GIST') {
      const gists = app.gists;
      gists.get(gists.file).then((gist) => {
        const yarnData = data.getSaveData(data.editingType());
        console.log(data.editingName());
        gists.edit(gists.file, {
          files: { [data.editingName()]: { content: yarnData } },
        });
        data.lastStorageHost('GIST');
        data.isDocumentDirty(false);
        app.refreshWindowTitle();
      });
    } else if (data.editingPath().length > 0 && data.editingType().length > 0) {
      data.saveTo(data.editingPath(), data.getSaveData(data.editingType()));
    }
  },

  doesFileExist: function(filePath) {
    //todo remove fs from everywhere, use cache to load images instead
    return false;
    if (!fs.existsSync(filePath)) {
      return false;
    }
    return fs.lstatSync(filePath).isFile();
  },
  triggerPasteClipboard: function() {
    if (app.electron) {
      const text = app.electron.clipboard.readText();
      app.clipboard = text;
      document.execCommand('paste');
    } else {
      if (navigator.clipboard) {
        navigator.clipboard
          .readText()
          .then((text) => {
            app.clipboard = text;
          })
          .catch((err) => {
            app.clipboard = app.editor.getSelectedText();
            console.log('No clipboard access', err, 'using local instead');
          });
      }
      // execCommand("paste") will not work on web browsers, due to security
      setTimeout(() => app.insertTextAtCursor(app.clipboard), 100);
    }
  },
  triggerCopyClipboard: function() {
    if (app.electron) {
      app.electron.clipboard.writeText(app.editor.getSelectedText());
      // document.execCommand('copy');
      app.clipboard = app.editor.getSelectedText();
    } else {
      const selectedText = app.editor.getSelectedText();
      app.clipboard = selectedText;
      if (navigator.clipboard && selectedText.length > 0) {
        navigator.clipboard.writeText(selectedText).then(() => {
          /* clipboard successfully set */
          app.clipboard = selectedText;
        });
      }
    }
  },
};
