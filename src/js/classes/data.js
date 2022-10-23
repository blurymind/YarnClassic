/* eslint-disable jquery/no-ajax */
const path = require('path');
const saveAs = require('file-saver');
import { Node } from './node';
import { Utils, FILETYPE } from './utils';

export const data = {
  appInstanceStates: ko.observable([]),
  restoreFromLocalStorage: ko.observable(true),
  // All the bellow go into appInstanceStates, which controls r/w of app states to local storage (for file tabs feature)
  isDocumentDirty: ko.observable(false),
  editingPath: ko.observable(null),
  editingName: ko.observable('NewFile'),
  editingType: ko.observable('json'),
  editingFolder: ko.observable(null),
  documentHeader: ko.observable(null),
  lastStorageHost: ko.observable('LOCAL'), // GIST | LOCAL
  lastEditedUnix: ko.observable(new Date()),
  lastSavedUnix: ko.observable(null),
  inkCompiler: null,
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
    data.documentHeader(null);
    app.workspace.selectedNodes = [];
    app.editing(null);
    if (editingFormat === FILETYPE.INK) {
      app.settings.documentType('ink');
    }
    app.nodes([
      app
        .newNode(true)
        .title(
          app.settings.documentType() === 'ink'
            ? data.InkGlobalScopeNodeName
            : 'Start'
        )
        .body(app.settings.documentType() === 'ink' ? '' : 'Empty text'),
    ]);
    app.tags([]);
    app.updateNodeLinks();
    app.workspace.warpToNodeByIdx(0);
    data.lastStorageHost('LOCAL');
    data.isDocumentDirty(true);
    app.refreshWindowTitle();
    data.saveAppStateToLocalStorage();
    app.ui.dispatchEvent('newYarnFileStarted');
  },
  askForFileName: function() {
    Swal.fire({
      title: 'Enter a New File Name',
      input: 'text',
      inputPlaceholder: 'NewFile',
      showCancelButton: true,
    }).then(result => {
      if (result.value || result.value === '') {
        data.startNewFile(result.value || 'NewFile');
      }
    });
  },
  setNewFile: function() {
    Swal.fire({
      title: 'Create a New File?',
      text: `Any unsaved progress to ${data.editingName()}.${data.editingType()} will be lost!
      Path: ${data.editingPath()}
      Storage: ${data.lastStorageHost()}
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'New file',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        data.askForFileName();
      }
    });
  },
  loadDocumentStateTabFromIndex: function(index) {
    console.log('ATTEMPT TO LOAD STATE', index);
    app.settings.selectedFileTab(index);
    data.loadAppStateFromLocalStorage();
  },
  getCurrentAppState: function() {
    return {
      editingPath: data.editingPath(),
      editingName: data.editingName(),
      documentType: app.settings.documentType(),
      editingType: data.editingType(),
      editingFolder: data.editingFolder(),
      editingTitle: app.editing() ? app.editing().title() : null,
      nodes: data.getNodesAsObjects(),
      documentHeader: data.documentHeader(),
      tags: app.tags(),
      editorSelection: app.editor ? app.editor.selection.getRange() : null,
      transform: app.workspace.transform,
      scale: app.workspace.scale,
      lastStorageHost: data.lastStorageHost(),
      lastEditedUnix: data.lastEditedUnix() || '',
      lastSavedUnix: data.lastSavedUnix(),
      pluginStorage: app.plugins.pluginStorage,
    };
  },
  deleteDocumentStateTab: function(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to close this file? Any unsaved changes to ${data.editingName()}.${data.editingType()} will be lost!
      Path: ${data.editingPath() || ''}
      Storage: ${data.lastStorageHost()}
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes close',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then(result => {
      if (result.value) {
        console.log('DELETE TAB', data.appInstanceStates(), index);
        const mutatedState = data
          .appInstanceStates()
          .filter((_, i) => i !== index)
          .map(state => ({ ...state }));
        data.appInstanceStates([...mutatedState]);
        data.saveAppStateToLocalStorage(false);

        setTimeout(() => {
          const nextIndex =
            index > data.appInstanceStates().length - 1
              ? data.appInstanceStates().length - 1
              : index;
          data.loadDocumentStateTabFromIndex(nextIndex);
        }, 500);
        console.log(
          data.appInstanceStates(),
          'resulting mutation',
          mutatedState
        ); //ok
      }
    });
  },
  addDocumentState: function({ editingName, editingType, yarnData, checked }) {
    //Mutate states
    data.appInstanceStates([
      ...data.appInstanceStates(),
      { ...data.getCurrentAppState() }, //this is pretty slow
    ]);
    console.log('DOCUMENT TAB ADDED', data.appInstanceStates());
    data.saveAppStateToLocalStorage();
    data.loadDocumentStateTabFromIndex(data.appInstanceStates().length - 1);
    if (checked) {
      data.editingName(editingName);
      data.editingType(editingType);
    } else {
      data.startNewFile(editingName, editingType);
    }

    console.log({ editingName, yarnData, editingType, checked });
  },
  addDocumentStateTab: function() {
    data.promptFileNameAndFormat(
      data.addDocumentState,
      null,
      '📜 Name of new file',
      ` Copy of ${data.editingName()}`
    );
  },
  saveAppStateToLocalStorage: function(writeCurrent = true) {
    if (!data.restoreFromLocalStorage()) return;

    const storage = app.settings.storage;
    data.isDocumentDirty(true);
    data.lastEditedUnix(new Date());
    app.refreshWindowTitle();
    console.log('Update storage', data.appInstanceStates(), writeCurrent);
    const updatedStates = [...data.appInstanceStates()];
    if (writeCurrent)
      updatedStates[app.settings.selectedFileTab()] = data.getCurrentAppState();
    data.appInstanceStates(updatedStates);
    storage.setItem('appStates', JSON.stringify(data.appInstanceStates()));
    app.ui.dispatchEvent('yarnSavedStateToLocalStorage');
  },
  loadAppStateFromLocalStorage: function() {
    if (!data.restoreFromLocalStorage()) return; // to ignore sometimes?

    const storage = app.settings.storage;
    // Just in case clear old state's cache
    if (storage.getItem('appState')) storage.clear(); //TODO remove later
    const appStates = JSON.parse(storage.getItem('appStates')); // appStateS <- new key
    const currentDocState = appStates[app.settings.selectedFileTab()];
    data.appInstanceStates(appStates);
    console.log('AAPP state', appStates, currentDocState);
    if (currentDocState) {
      const {
        editingPath,
        lastStorageHost,
        editingName,
        editingType,
        documentType,
        editingFolder,
        editingTitle,
        editorSelection,
        nodes,
        documentHeader,
        tags,
        transform,
        scale,
        pluginStorage,
        lastEditedUnix,
        lastSavedUnix,
      } = currentDocState;
      data.editingPath(editingPath);
      data.editingName(editingName);
      data.editingType(editingType);
      app.settings.documentType(documentType);
      data.editingFolder(editingFolder);
      data.lastStorageHost(lastStorageHost);
      data.lastEditedUnix(lastEditedUnix);
      data.lastSavedUnix(lastSavedUnix);
      app.nodes([]);
      data.getNodesFromObjects(nodes).forEach(node => app.nodes.push(node));
      app.tags(tags);
      app.updateNodeLinks();
      app.workspace.setTranslation(transform.x, transform.y);
      app.workspace.setZoom(scale * 4);
      if (editingTitle) {
        app.editNode(app.nodes().find(node => node.title() === editingTitle));
        if (editorSelection) app.editor.selection.setRange(editorSelection);
      }
      app.plugins.pluginStorage = pluginStorage;
      data.documentHeader(documentHeader);
      data.isDocumentDirty(true);
      app.refreshWindowTitle();
      app.ui.dispatchEvent('yarnLoadedStateFromLocalStorage');
    }
  },
  readFile: function(file, filename, clearNodes) {
    data.getFileData(file, filename).then(result => {
      data.editingPath(file.path);
      data.editingType(result.type);
      data.loadData(result.data, result.type, clearNodes);
    });
  },

  setNewFileStats: function(fileName, filePath, lastStorageHost = 'LOCAL') {
    console.log('Updated save data', fileName, filePath);
    data.editingName(fileName.replace(/^.*[\\\/]/, ''));
    data.isDocumentDirty(false);
    data.editingPath(filePath);
    data.lastStorageHost(lastStorageHost);
    app.refreshWindowTitle();
  },
  openFile: function(file, filename) {
    const confirmText = data.editingPath()
      ? 'Any unsaved progress to ' + data.editingName() + ' will be lost.'
      : 'Any unsaved progress will be lost.';

    Swal.fire({
      title: 'Are you sure you want to open another file?',
      text: confirmText,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(result => {
      if (result.value === true) {
        data.readFile(file, filename, true);
        data.setNewFileStats(filename, file.path);
        app.refreshWindowTitle();
      }
    });
  },
  openFileFromFilePath: function(filePath) {
    const fileName = app.path.basename(filePath);
    $.ajax({
      url: filePath,
      async: false,
      success: result => {
        const type = data.getFileType(fileName);
        if (type === FILETYPE.UNKNOWN) {
          Swal.fire({
            title: 'Unknown filetype!',
            icon: 'error',
          });
        } else {
          data.loadData(result, type, true);
          data.setNewFileStats(fileName, filePath);
          data.editingType(type);
        }
      },
    });
  },
  getFileData: function(file, filename) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        const type = data.getFileType(filename);
        if (type === FILETYPE.UNKNOWN) {
          Swal.fire({
            title: 'Unknown filetype!',
            icon: 'error',
          });
          reject();
        } else {
          resolve({
            file,
            type,
            data: reader.result,
            name: file.name,
          });
        }
      };
      reader.readAsText(file);
    });
  },
  openFiles: async function(file, filename) {
    const files = document.getElementById('open-file').files;

    for (const file of Object.values(files)) {
      const fileData = await data.getFileData(file, file.name);
      console.log('FILEDATA', fileData);
      const editingName = fileData.name;
      const editingType = fileData.type;
      data.addDocumentState({
        editingName,
        editingType,
        yarnData: fileData.data,
      });
      data.loadData(fileData.data, editingType, true);
    }
  },
  openFolder: function(e, foldername) {
    editingFolder = foldername;
    Swal.fire({
      text:
        'openFolder not yet implemented e: ' + e + ' foldername: ' + foldername,
      icon: 'error',
    });
  },

  appendFile: function(file, filename) {
    data.readFile(file, filename, false);
  },

  getFileType: function(filename) {
    const lowerFileName = filename.toLowerCase();

    if (lowerFileName.endsWith('.json')) return FILETYPE.JSON;
    else if (lowerFileName.endsWith('.yarn.txt')) return FILETYPE.YARN;
    else if (lowerFileName.endsWith('.ink')) return FILETYPE.INK;
    else if (lowerFileName.endsWith('.yarn')) return FILETYPE.YARN;
    else if (lowerFileName.endsWith('.xml')) return FILETYPE.XML;
    else if (lowerFileName.endsWith('.txt')) return FILETYPE.TWEE;
    else if (lowerFileName.endsWith('.tw2')) return FILETYPE.TWEE2;
    else if (lowerFileName.endsWith('.twee')) return FILETYPE.TWEE2;

    return FILETYPE.UNKNOWN;
  },

  dispatchEventDataLoaded: function() {
    var event = new CustomEvent('yarnLoadedData');
    event.document = document;
    event.data = data;
    event.app = app;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event);
  },
  restoreSettingsFromDocumentHeader: function() {
    if (data.documentHeader() !== null) {
      const documentHeader = data.documentHeader();
      console.log('Apply settings from file header:', documentHeader);
      if ('markupLanguage' in documentHeader)
        app.settings.markupLanguage(documentHeader.markupLanguage);
      if ('language' in documentHeader)
        app.settings.language(documentHeader.language);
      if ('filetypeVersion' in documentHeader)
        app.settings.filetypeVersion(documentHeader.filetypeVersion);
      app.settings.apply();
    }
  },
  loadData: function(content, type, clearNodes) {
    const objects = [];
    const pushContent = extractedNodes => {
      for (let i = 0; i < extractedNodes.length; i++) {
        if ('title' in extractedNodes[i]) objects.push(extractedNodes[i]);
      }
    };

    // different depending on file
    if (type === FILETYPE.JSON) {
      content = JSON.parse(content);
      if (!content) {
        return;
      }
      if (Array.isArray(content)) {
        // Old json format
        pushContent(content);
      } else {
        // New Json format
        data.documentHeader(content.header);
        pushContent(content.nodes);
      }
      app.setDocumentType('yarn'); //TODO try to store both ink and yarn in json
    } else if (type === FILETYPE.INK) {
      var lines = content.split(/\r?\n/);
      var obj = null;
      const addMetaData = i => {
        try {
          obj.title = lines[i]
            .split('//yarn-editor-metadata:')[0]
            .replace(/===/g, '')
            .trim();
          const { x, y, colorID } = JSON.parse(
            lines[i].split('//yarn-editor-metadata:')[1]
          );
          obj.position = { x: parseInt(x), y: parseInt(y) };
          obj.colorID = colorID;
          // console.log('OBJECT', obj);
        } catch (e) {
          console.warn('node metadata failed parse: ', e);
        }
      };
      for (let i = 0; i < lines.length; i++) {
        const nodeTemplate = {
          body: '',
          position: { x: objects.length * 160, y: objects.length * 160 }, // not supported by Ink
          colorID: 0, // not supported by Ink
          tags: '', // not supported by Ink
        };
        // Put any quirky outside of node ink logic in the START node (declarative stuff)
        if (obj === null && !lines[i].trim().startsWith('===')) {
          obj = {
            ...nodeTemplate,
            position: {
              x: -400,
              y: 0,
            },
          };
          obj.title = data.InkGlobalScopeNodeName; // START node does not support saving metadata
        }

        if (lines[i].trim().startsWith('===')) {
          if (obj !== null) {
            objects.push(obj);
          }
          obj = {
            title: lines[i].trim().replace(/===/g, ''),
            ...nodeTemplate,
          };
          if (lines[i].trim().includes('//yarn-editor-metadata:')) {
            addMetaData(i);
          }
        } else if (obj !== null) {
          obj.body += lines[i] + '\n';
        }
      }
      if (obj !== null) {
        objects.push(obj);
      }
      // auto set mode
      app.setDocumentType('ink');
    } else if (type === FILETYPE.YARN) {
      var lines = content.split(/\r?\n/);
      var obj = null;
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
          } else if (lines[i].trim() === '---') {
            readingBody = true;
            obj.body = '';
          }
        }
      }
      if (obj != null) {
        objects.push(obj);
      }
      app.setDocumentType('yarn');
    } else if (type === FILETYPE.TWEE || type === FILETYPE.TWEE2) {
      var lines = content.split('\n');
      var obj = null;
      var index = 0;
      for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim();
        if (lines[i].substr(0, 2) === '::') {
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
      app.setDocumentType('yarn');
    } else if (type === FILETYPE.XML) {
      app.setDocumentType('yarn');
      var oParser = new DOMParser();
      var xml = oParser.parseFromString(content, 'text/xml');
      content = Utils.xmlToObject(xml);

      if (content !== undefined)
        for (let i = 0; i < content.length; i++) objects.push(content[i]);
    }

    app.limitNodesUpdate(() => {
      if (clearNodes) app.nodes.removeAll();

      data.getNodesFromObjects(objects).forEach(node => app.nodes.push(node));
    });

    data.editingType(type); // Set type when loading
    data.restoreSettingsFromDocumentHeader();
    app.updateNodeLinks();
    app.workspace.warpToNodeByIdx(0);
    data.isDocumentDirty(false);

    data.addGlobalScopeToInkDoc();
    // Callback for embedding in other webapps
    data.dispatchEventDataLoaded();
  },
  addGlobalScopeToInkDoc: function() {
    if (
      app.settings.documentType() === 'ink' &&
      !app
        .nodes()
        .find(node => node.title().trim() === data.InkGlobalScopeNodeName)
    ) {
      app
        .newNode(true)
        .title(data.InkGlobalScopeNodeName)
        .x(-400);
    }
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
    objects.forEach(object => {
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

  getSaveData: async function(
    type,
    getNodeFromInkLine = null,
    useInclude = false,
    content = data.getNodesAsObjects()
  ) {
    var output = '';

    if (type === FILETYPE.JSON) {
      // store useful values for later use if the file type supports it
      if (app.settings.filetypeVersion() === '2') {
        console.log('Saving as Yarn json v2 type');
        const date = new Date();
        data.documentHeader({
          ...data.documentHeader(),
          lastSavedUnix: date,
          language: app.settings.language(),
          documentType: app.settings.documentType(),
          markupLanguage: app.settings.markupLanguage(),
          filetypeVersion: app.settings.filetypeVersion(),
          pluginStorage: app.plugins.pluginStorage,
        });
        output = JSON.stringify(
          { header: data.documentHeader(), nodes: content },
          null,
          '\t'
        );
      } else {
        output = JSON.stringify(content, null, '\t');
      }
    } else if (type === FILETYPE.INK) {
      const startNode = content.find(
        node => node.title.trim() === data.InkGlobalScopeNodeName
      );
      if (startNode) {
        if (useInclude) {
          // we need to also add any INCLUDE lines that may be in the body
          const includeInks = startNode.body
            .split(/\r\n|\r|\n/)
            .filter(line => line.trim().startsWith('INCLUDE '));
          output += startNode.body
            .split(/\r\n|\r|\n/)
            .filter(line => !line.trim().startsWith('INCLUDE '))
            .join('\n');

          for (const includeInk of includeInks) {
            const includeName = includeInk.trim().split('INCLUDE ');
            if (includeName.length > 1) {
              const found = data
                .appInstanceStates()
                .find(
                  state =>
                    state.editingType === FILETYPE.INK &&
                    state.editingName === includeName[1]
                );

              if (found) {
                const moreSaveData = await data.getSaveData(
                  FILETYPE.INK,
                  null,
                  useInclude,
                  found.nodes
                );
                output += moreSaveData + '\n';
              }
            }
          }
        } else {
          output += startNode.body;
        }

        // Hacky test to discover Node relative to an Ink fileline (for the debugger)
        if (
          getNodeFromInkLine &&
          output.split(/\r\n|\r|\n/).length > getNodeFromInkLine
        ) {
          return startNode;
        }
      }
      for (let i = 0; i < content.length; i++) {
        // The START node will contain anything that is not going in any knots
        const node = content[i];
        if (node.title.trim() !== data.InkGlobalScopeNodeName) {
          // populate knots
          output +=
            '\n' +
            `=== ${node.title} ===` +
            ` //yarn-editor-metadata: ${JSON.stringify({
              x: parseInt(node.position.x),
              y: parseInt(node.position.y),
              colorID: parseInt(node.colorID),
            })}` +
            '\n';
          output += node.body;
          var body = node.body;
          if (!(body.length > 0 && body[body.length - 1] === '\n')) {
            output += '\n';
          }
          // Hacky test to discover Node relative to an Ink fileline (for the debugger)
          if (
            getNodeFromInkLine &&
            output.split(/\r\n|\r|\n/).length > getNodeFromInkLine
          ) {
            return node;
          }
        }
      }
    } else if (type === FILETYPE.INKJSON) {
      const inkTextFileData = await data.getSaveData('ink', null, true);

      const InkJsonData = new Promise((resolve, reject) => {
        app.ui.toastMixin.fire({
          title: 'Ink file is compiling',
          icon: 'info',
          timer: 4000,
          text: 'Please wait...',
        });
        data.inkCompiler
          .init(response => {
            if (response.errors.length > 0) {
              Swal.fire({
                title: 'Failed to parse ink file',
                html: `<div class="title-error">${response.errors.join(
                  '<br/>'
                )}</div>`,
                icon: 'error',
              }).then(() =>
                data.goToErrorInkNode(inkTextFileData, response.errors[0])
              );
              reject();
            } else {
              console.log('Warnings', response.warnings);

              app.ui.toastMixin.fire({
                animation: true,
                title:
                  response.warnings.length > 0
                    ? 'Ink file compiled with some warnings'
                    : 'Ink file compiled successfully',
                icon: response.warnings.length > 0 ? 'warning' : 'success',
                text: response.warnings.join('\n'),
              });
              resolve(JSON.stringify(response.story, null, '\t'));
            }
          })
          .then(() => data.inkCompiler.submit(inkTextFileData));
      });
      output = await InkJsonData;
    } else if (type === FILETYPE.YARN) {
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
        if (!(body.length > 0 && body[body.length - 1] === '\n')) {
          output += '\n';
        }
        output += '===\n';
      }
    } else if (type === FILETYPE.RENPY) {
      for (let i = 0; i < content.length; i++) {
        output += '\nlabel ' + content[i].title + ':\n';
        const body = content[i].body;
        if (!(body.length > 0 && body[body.length - 1] === '\n')) {
          output += '\n';
        }
        let isMenu = false;
        let isIfElse = false;
        let parsedBodyContent = '';
        body.split('\n').forEach(line => {
          const trimmedLine = line.trim();
          const tabs = isIfElse ? '\t\t':'\t';
          if(trimmedLine.startsWith('[[')) {
            const option = trimmedLine.replace(/[\[\[]|[\]\]]]/g,'').split('|');
            if(option.length > 1){
              if(!isMenu){
                parsedBodyContent += `${tabs}menu:\n`;
                isMenu = true;
              }
              parsedBodyContent += `${tabs}\t"${option[0].trim()}":\n${tabs}\t\tjump ${option[1].trim()}\n`;
            } else {
              parsedBodyContent += `${tabs}jump ${option[0].trim()}\n`;
            }
          } else if(trimmedLine.startsWith('<<if')){ // TODO make in and else if one check
            const conditional = trimmedLine.replace(/\<\<\|$|\>\>|if/g, '').split(/==|!=|>|</g).filter(Boolean);
            const operator = trimmedLine.substring(2, trimmedLine.length - 2).match(/(>|==|!=|<)/);
            parsedBodyContent += conditional.length > 1 && operator ? `\tif ${conditional[0].trim()} ${operator[0]} ${conditional[1].trim()}:\n` : `\t# ${trimmedLine}\n`;
            isIfElse = true;
          } else if(trimmedLine.startsWith('<<elseif')){
            const conditional = trimmedLine.replace(/\<\<\|$|\>\>|elseif/g, '').split(/==|!=|>|</g).filter(Boolean);
            const operator = trimmedLine.substring(2, trimmedLine.length - 2).match(/(>|==|!=|<)/);
            parsedBodyContent += conditional.length > 1 && operator ? `\telif ${conditional[0].trim()} ${operator[0]} ${conditional[1].trim()}:\n` : `\t# ${trimmedLine}\n`;
            isIfElse = true;
          } else if(trimmedLine.startsWith('<<else')){
            parsedBodyContent +=  '\telse:\n';
            isIfElse = true;
          }  else if(trimmedLine.startsWith('<<endif')){
            parsedBodyContent +=  '\n';
            isIfElse = false;
          } else if(trimmedLine.startsWith('<<set')){
            const set = trimmedLine.replace(/[\<\>\$]|set /g, '').split('=');
            console.log({set});
            parsedBodyContent += set.length > 1 ? `${tabs}$ ${set[0].trim()} = ${set[1].trim()}\n` : `${tabs}#$ ${set[0].trim()} = 0:\n`;
          } else if(trimmedLine.startsWith('<<')){
            parsedBodyContent += `${tabs} ${trimmedLine.replace(/[\<\>]/g, '')}\n`;
          } else if(trimmedLine.startsWith('\\')){
            parsedBodyContent += `${tabs}"${trimmedLine}"\n`;
          } else if(trimmedLine.length > 0){
            // dialogue line in renpy may look like this:
            // e mad "I'm a little upset at you."
            // e "I'm a little upset at you."
            // or "I'm a little upset at you."
            // We infer the author is passing character and/or emotion, because they added quotes, don't add quotes automatically
            parsedBodyContent += trimmedLine.endsWith('"')? `${tabs}${trimmedLine}\n`: `${tabs}"${trimmedLine}"\n`;
          }
          isMenu = false;
        });
        output += parsedBodyContent + '\n';
      }
    } else if (type === FILETYPE.TWEE) {
      for (let i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        output += ':: ' + content[i].title + tags + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type === FILETYPE.TWEE2) {
      for (let i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        var position =
          ' <' + content[i].position.x + ',' + content[i].position.y + '>';
        output += ':: ' + content[i].title + tags + position + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type === FILETYPE.XML) {
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

    console.log("Exporter Output", output);

    data.isDocumentDirty(false);
    app.refreshWindowTitle();
    return output;
  },

  saveTo: function(path, content, callback = null) {
    if (app.fs) {
      app.fs.writeFile(path, content, { encoding: 'utf-8' }, function(err) {
        data.editingPath(path);
        if (callback) callback();
        if (err) {
          Swal.fire({
            title: 'Error Saving Data to ' + path + ': ' + err,
            icon: 'error',
          });
        } else {
          app.ui.notification.fire({
            title: 'Saved!',
            icon: 'success',
          });
          app.ui.dispatchEvent('yarnSavedData');
          data.setNewFileStats(path, path, 'LOCAL');
        }
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
    const fileName =
      (data.editingName() || '').replace(/\.[^/.]+$/, '') + '.' + type;
    if (app.electron) {
      // console.log(app.electron)
      app.electron.remote.dialog
        .showSaveDialog({
          title: 'Saving ' + fileName,
          filters: [
            {
              name: type + ' file',
              extensions: [type],
            },
          ],
          defaultPath: fileName,
        })
        .then(result => {
          data.saveTo(result.filePath, content);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, fileName);
    }
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

  promptFileNameAndFormat: function(
    cb,
    suggestions = null,
    title = '💾 Save file - enter file name',
    showCheckBox = ''
  ) {
    const guessedFileName =
      data.editingName().replace(/\.[^/.]+$/, '') +
      '(new).' +
      data.editingType();
    Swal.fire({
      title,
      html: ` <input id="swal-input1" list="select-file-name" name="select" placeholder="${guessedFileName}">
      <datalist class="form-control" id="select-file-name">    
        ${suggestions &&
          suggestions
            .map(suggestion => `<option value="${suggestion}" />`)
            .join('')}
      </datalist>
      ${
        showCheckBox
          ? `<br/><br/><input type="checkbox" id="swal-checkbox-checked"> ${showCheckBox}</input>`
          : ''
      }
        `,
      onOpen: () => {
        if (data.editingName() !== 'NewFile') {
          document.getElementById('swal-input1').value = guessedFileName;
        }
      },
      showCancelButton: true,
      preConfirm: () => ({
        name: document.getElementById('swal-input1').value,
        checked: showCheckBox
          ? document.getElementById('swal-checkbox-checked').checked
          : false,
      }),
    }).then(({ value }) => {
      if (value) {
        const { name, checked } = value;
        const guessedNewFormat = name.split('.').pop();
        const editingType = Object.values(FILETYPE).includes(guessedNewFormat)
          ? guessedNewFormat
          : data.editingType();
        const editingName =
          (name || '').replace(/\.[^/.]+$/, '') + '.' + editingType;
        data.getSaveData(editingType).then(yarnData => {
          cb({
            editingName,
            editingType,
            yarnData,
            checked,
          });
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
          .catch(error => console.log('Error sharing', error));
      } else {
        Swal.fire({
          title:
            'Web Share API is not supported in your browser.\nTry using it on your smartphone or tablet...',
          icon: 'error',
        });
      }
    });
  },

  trySaveGist: function(gists) {
    if (gists && gists.file && gists.file.length > 0) {
      gists.get(gists.file).then(gist => {
        const gistFiles = Object.keys(gist.body.files);
        console.log(gistFiles);
        data.promptFileNameAndFormat(({ editingName, yarnData }) => {
          data.editingName(editingName);
          gists.edit(gists.file, {
            files: { [editingName]: { content: yarnData } },
          });
          Swal.fire(
            'Saved!',
            `The Yarn has been saved to gist ${gists.file}`,
            'success'
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
        'warning'
      );
      app.ui.openSettingsDialog();
    }
  },

  tryOpenGist: function(gists) {
    if (gists && gists.file && gists.file.length > 0) {
      gists.get(gists.file).then(gist => {
        const gistFiles = gist.body.files;
        const inputOptions = {};
        Object.keys(gistFiles).forEach(key => {
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
        'warning'
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
    data
      .getSaveData(type)
      .then(saveData => data.saveFileDialog($('#save-file'), type, saveData));
  },

  trySaveCurrent: function() {
    if (!data.isDocumentDirty()) return;

    if (data.lastStorageHost() === 'GIST') {
      const gists = app.gists;
      gists.get(gists.file).then(gist => {
        data.getSaveData(data.editingType()).then(yarnData => {
          data.getSaveData(data.editingType());
          gists.edit(gists.file, {
            files: { [data.editingName()]: { content: yarnData } },
          });
          data.lastStorageHost('GIST');
          data.isDocumentDirty(false);
          app.refreshWindowTitle();
          app.ui.toastMixin.fire({
            title: 'Saved',
            text: `Saved ${data.editingName()} to Gist`,
          });
        });
      });
    } else if (!data.editingPath()) {
      if (app.gists && app.gists.options.token) {
        data.trySaveGist(app.gists);
      } else data.trySave(FILETYPE.JSON);
    } else if (data.editingPath().length > 0 && data.editingType().length > 0) {
      data.getSaveData(data.editingType()).then(saveData => {
        data.saveTo(data.editingPath(), saveData);
      });
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
          .then(text => {
            app.clipboard = text;
          })
          .catch(err => {
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
  InkCompiler: function() {
    this.ready = false;
    this.worker = null;
    this.init = (onComplete = () => {}) => {
      return new Promise((resolve, reject) => {
        this.worker = new Worker('public/inkwasm/ink.worker.js');
        this.ready = false;
        this.worker.onmessage = e => {
          if (e.data === 'ready') {
            this.ready = true;
            resolve();
          } else if (this.ready) {
            onComplete(e.data);
            resolve(e.data);
          }
        };
      });
    };
    this.submit = text => {
      this.worker.postMessage(text);
    };
    this.getInkErrorGotoNode = async (inkTextFileData, inkError) => {
      const inkErrorFind = inkError
        .substr(inkError.lastIndexOf(':') + 1, inkError.length)
        .trim();
      try {
        const inkLineNum = Number(inkError.match(/line ([0-9]+):/)[1]);
        const inkTextFileErrorNode = await data.getSaveData(
          FILETYPE.INK,
          inkLineNum
        );
        return {
          ln: inkLineNum,
          node: inkTextFileErrorNode.title,
          find: inkErrorFind,
        };
      } catch (e) {
        console.error(e);
        return null;
      }
    };
  },
  InkGlobalScopeNodeName: 'INK_GLOBAL_SCOPE',
  goToErrorInkNode: (inkTextFileData, error) => {
    data.inkCompiler
      .getInkErrorGotoNode(inkTextFileData, error)
      .then(errorData => {
        if (errorData) {
          const { node, ln, find } = errorData;
          app.openNodeByTitle(node, find);
        }
      });
  },
};
