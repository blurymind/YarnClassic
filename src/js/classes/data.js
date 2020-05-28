/* eslint-disable jquery/no-ajax */
const path = require('path');
const saveAs = require('file-saver');
import { Node } from './node';
import { Utils, FILETYPE } from './utils';

export var data = {
  editingPath: ko.observable(null),
  editingName: ko.observable('NewFile'),
  editingType: ko.observable('json'),
  editingFolder: ko.observable(null),
  editingFileFolder: function(addSubPath = '') {
    const filePath = data.editingPath() ? data.editingPath() : '';
    return addSubPath.length > 0
      ? path.join(path.dirname(filePath), addSubPath)
      : path.dirname(filePath);
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
            '\nAny unsaved progress will be lost...'
        )
      ) {
        return;
      }
    }
    data.editingName(filename.replace(/^.*[\\\/]/, ''));
    document.title = file.path ? file.path : data.editingName();
    data.readFile(file, filename, true);
    app.refreshWindowTitle(filename);
  },

  openFolder: function(e, foldername) {
    editingFolder = foldername;
    alert(
      'openFolder not yet implemented e: ' + e + ' foldername: ' + foldername
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
              lines[i].substr(9, lines[i].length - 9).trim()
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
              closeBracket - openBracket - 1
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
        for (i = 0; i < content.length; i++) objects.push(content[i]);
    }

    app.nodes.extend({ rateLimit: { method: 'notifyWhenChangesStop', timeout: 250 } });
    {
      if (clearNodes)
        app.nodes.removeAll();

      objects.forEach( (object, i) => {
        let node = new Node({
          title: object.title,
          body: object.body,
          tags: object.tags,
          colorID: object.colorID,
          x: parseInt(object.position.x),
          y: parseInt(object.position.y),
        });

        app.nodes.push(node);
      });
    }

    // HACK to fix a KnockOut bug removing extenders
    // app.nodes.extend({ rateLimit: false });
    app.nodes['notifySubscribers'] = app.nodes._origNotifySubscribers;

    // Callback for embedding in other webapps
    var event = new CustomEvent('yarnLoadedData');
    event.document = document;
    event.data = data;
    event.app = app;
    window.parent.dispatchEvent(event);
  },

  getSaveData: function(type) {
    var output = '';
    var content = [];
    var nodes = app.nodes();

    for (var i = 0; i < nodes.length; i++) {
      content.push({
        title: nodes[i].title(),
        tags: nodes[i].tags(),
        body: nodes[i].body(),
        position: { x: nodes[i].x(), y: nodes[i].y() },
        colorID: nodes[i].colorID(),
      });
    }

    if (type == FILETYPE.JSON) {
      output = JSON.stringify(content, null, '\t');
    } else if (type == FILETYPE.YARN) {
      for (i = 0; i < content.length; i++) {
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
      for (i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        output += ':: ' + content[i].title + tags + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type == FILETYPE.TWEE2) {
      for (i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        var position =
          ' <' + content[i].position.x + ',' + content[i].position.y + '>';
        output += ':: ' + content[i].title + tags + position + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type == FILETYPE.XML) {
      output += '<nodes>\n';
      for (i = 0; i < content.length; i++) {
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
            '>'
        );
      dialog.unbind('change');
      dialog.remove();
    });

    dialog.trigger('click');
  },

  saveFileDialog: function(dialog, type, content) {
    var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, data.editingName().replace(/\.[^/.]+$/, '') + '.' + type);
  },

  insertImageFileName: function() {
    data.openFileDialog($('#open-image'), function(e, path) {
      app.insertTextAtCursor(e.path ? e.path : e.name);
    });
  },

  tryOpenFile: function() /// Refactor to send signal to the main process
  {
    data.openFileDialog($('#open-file'), data.openFile);
  },

  tryShareFilePwa: function (format) {
    const editingType = data.editingType();
    if (data.editingName() === 'NewFile') {
      var fileNameAsk = prompt('Please enter your name:', 'NewFile');
      if (fileNameAsk !== null || fileNameAsk !== '') {
        data.editingName(fileNameAsk);
      }
    }
    const editingName =
      data.editingName().replace(/\.[^/.]+$/, '') + '.' + editingType;
    const yarnData = data.getSaveData(editingType);

    const parts = [
      new Blob([yarnData], {type: 'text/plain'}),
    ];
    const file = new File(parts, editingName, {});

    if (navigator.canShare && navigator.canShare({
      files: [file]
    })) {
      navigator.share({
        title: editingName,
        text: yarnData,
        file: [file],
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Web Share API is not supported in your browser.\nTry using it on your smartphone or tablet...');
    }
  },

  tryOpenFolder: function() {
    data.openFileDialog($('#open-folder'), data.openFolder);
  },

  tryAppend: function() {
    data.openFileDialog($('#open-file'), data.appendFile);
  },

  save: function() {
    if (self.editingPath())
      self.trySaveCurrent();
    else
      self.trySave(FILETYPE.JSON);
  },

  trySave: function(type) {
    data.editingType(type);
    data.saveFileDialog($('#save-file'), type, data.getSaveData(type));
  },

  trySaveCurrent: function() {
    if (data.editingPath().length > 0 && data.editingType().length > 0) {
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
};
