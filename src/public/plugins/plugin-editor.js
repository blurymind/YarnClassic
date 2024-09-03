import AceDiff from './ace-diff/ace-diff.min.js';
import 'ace-builds/webpack-resolver'; // needed for the webworker to work  (syntax highlighting)

const addEsVersionToEditor = editor => {
  editor.session.$worker.send("setOptions", [{
    "esversion": 11,
    "esnext": false,
    "asi": true // disable "Missing semicolon." warning in editor for JavaScript
  }]);
}
const HEIGHT = '80vh';
const addStyleSheet = (path, root = document.head) => {
  const styleEl = document.createElement("link")
  styleEl.setAttribute("rel", "stylesheet")
  styleEl.setAttribute("href", path)
  styleEl.setAttribute("id", path)
  root.appendChild(styleEl)
}
const removeStyleSheet = (path, root = document) => {
  const el = root.getElementById(path);
  if (el) root.getElementById(path).remove()
}

const EXAMPLE = `
() => {
  return {
    modules: [
      // if a module is a web address, it can be included this way
      "https://unpkg.com/kaplay@3001.0.0-alpha.21/dist/kaplay.js",
      // you can host a module on the same gist
      // "test-local-module.js",
    ],
    script: () => {
      const k = kaplay();
      k.loadSprite("bean", "public/icon.png")
      k.scene("main", () => {
        k.add([
          k.pos(200, 100),
          k.sprite("bean"),
        ]);
        k.add([
          k.text("yarr"),
        ])
      });
      k.go("main");
    }
  }
}
`
const INTERNAL_EXAMPLE = `
() => {
  return {
    name: 'ExamplePlugin',
    Constructor: function( {
      app,
      createButton,
      createToggle,
      getPluginStore,
      setPluginStore,
      addSettingsItem,
      onYarnLoadedData,
      onYarnEditorOpen,
      onYarnInPreviewMode,
      onYarnSavedNode,
      onYarnSetLanguage,
      onYarnLoadedStateFromLocalStorage,
      onYarnSavedStateToLocalStorage,
      onYarnSetDocumentType,
      onKeyUp,
      onKeyDown,
      onLoad,
    }) {
      const self = this;
      this.name = 'ExamplePlugin';
      this.onOpenPluginEditor = ()=> {
        alert("YAY!")
      }
      createButton(self.name, {
        name: 'ExamplePlugin',
        attachTo: app.settings.developmentModeEnabled() ? 'appHeader': 'fileMenuDropdown',
        onClick: 'onOpenPluginEditor()',
        iconName: 'cog',
      });
    }
  }
}
`

const getExampleOutputFunction = (error = "") => `
<head>
<style>
  body,
  head {
    width: 100%;
    height: 100%;
  }
</style>
</head>
<body>
<textarea style="height: 100vh; width: 100%;">
${error}

// To render output here, the script needs to be a function that returns modules, body and script
// Example:
${EXAMPLE}

// If you want to instead create a plugin that modifies yarn editor itself, you will need to reload yarn for changes to take effect
// Example:
${INTERNAL_EXAMPLE}
</textarea>
<body>
`

const editorOptions = {
  mode: 'ace/mode/javascript',
  tabSize: 2,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  useWorker: true
};
export var PluginEditor = function ({
  app,
  createButton,
  addSettingsItem,
  getPluginStore,
  onYarnEditorOpen,
  onYarnInPreviewMode,
  onYarnSavedNode,
  onYarnSetDocumentType,
  onKeyUp,
  onKeyDown,
  onLoad,
  setPluginStore,
  // getVloatilePlugins,
  setVloatilePlugin,
  getGistPluginFiles,
  setVloatilePlugins,
  getGistPluginFile,
  saveGistPlugin,
  isGistTokenInvalid,
  getGistPluginsFileUrl,
  urlParams,
  pluginModeUrl,
  getGistPluginsId,
  updateUrlParams,
  getPluginsList,
  deleteGistPlugin,
  deleteVolatilePlugin,
  getExtensionScriptData,
  getPreviewHtml
}) {
  const self = this;
  this.name = 'PluginEditor';
  this.onSetEditingFile = () => { };
  this.editor = null;
  this.differ = null;
  this.editingFile = '';
  this.volatilePlugins = {};
  this.mode = pluginModeUrl || 'edit';
  this.theme = app.settings.theme() === 'dracula' ? 'ace/theme/monokai' : undefined;
  this.yarnData = null;
  this.hasTestedOnce = false;

  this.onAddNewFile = () => {
    // ask for filename - (adds js at the end)
    let newFileName = prompt("Create a new plugin file?", 'my-new-plugin-js');
    if (newFileName) {
      newFileName = newFileName.replace(/\s+/g, '').replace(/\//g, '').trim();
      newFileName = newFileName.endsWith('.js') ? newFileName : `${newFileName}.js`
      if (newFileName in this.volatilePlugins) {
        alert(`${newFileName} already exists as a plugin.\nPlease choose another name..`)
        return;
      }
      const newFileData = { content: EXAMPLE, filename: newFileName, language: 'JavaScript' }
      setVloatilePlugin(newFileName, newFileData).then(() => {
        this.onUpdatePluginsList(newFileName);
        this.onSetPluginEditMode('edit');
        this.onSetEditingFile(newFileName);
      })
    }
  }
  this.onRemoveSelectedFile = () => {
    const willDelete = confirm(`Are you sure you want to delete this file:\n${this.editingFile}`)
    if (willDelete) {
      if (this.editingFile in this.volatilePlugins) delete this.volatilePlugins[this.editingFile];

      const fileNames = Object.keys(this.volatilePlugins)
      const nextFile = fileNames.length > 0 ? fileNames[0] : '';
      deleteVolatilePlugin(this.editingFile).then(() => {
        deleteGistPlugin(this.editingFile).then(() => {
          this.onUpdatePluginsList(nextFile).then(() => {
            this.onSetEditingFile(nextFile)
          })
        })
      })
    }
  }
  this.onUpdatePluginsList = (gistPluginsFileOnMount = '') => {
    // initialize file menu or update it. Refetch gist files if updating it
    return getPluginsList(!!gistPluginsFileOnMount).then(fileList => {
      this.volatilePlugins = fileList;
      document.getElementById("edited-plugin-file").innerHTML = Object.keys(fileList || {}).map(
        key => `<option value="${key}">${key}</option>`
      );
      if (gistPluginsFileOnMount && gistPluginsFileOnMount in fileList) {
        document.getElementById("edited-plugin-file").value = gistPluginsFileOnMount;
        this.editingFile = gistPluginsFileOnMount;
      }
    })
  }
  this.onCommitChanges = () => {
    const contents = this.differ.getEditors().right.getValue();
    saveGistPlugin(this.editingFile, contents).then(response => {
      console.log({ response })
      this.differ.getEditors().left.setValue(contents);
      ToastWc.show({ type: 'success', content: `Saved ${this.editingFile}\nto gist: ${response.response.id}`, time: 3000 })
    });
  }
  this.onDownloadPreviewOrReload = () => {
    if( document.getElementById('plugin-output-downloader').innerText.includes('Download')) {
      app.data.storage.downloadContent(document.getElementById('plugin-output-previewer').srcdoc, 'output.html');
      return
    }
    window.location.reload();
  }
  this.onCopyLink = () => {
    window.navigator.clipboard.writeText(window.location.href);
    ToastWc.show({ type: 'success', content: `Copied ${window.location.href} to clipboard!`, time: 3000 })
  }
  this.onOpenGistLink = () => {
    window.open(`https://gist.github.com/${getGistPluginsId()}`, "_blank");
  }
  this.onSetPluginEditMode = (mode) => {
    this.mode = mode;
    setPluginStore(self.name, 'pluginEditMode', mode);
    document
      .querySelectorAll('#edit-plugin-mode > button')
      .forEach(item => item.classList.remove('active'));
    document.getElementById(`edit-plugin-mode-${mode}`).classList.add('active');
    console.log({ mode });
    // edit/commit/test
    document.getElementById('js-editor').style.display =
      mode === 'edit' ? 'block' : 'none';
    document.getElementById('edit-plugin-code-buttons').style.display =
      mode === 'edit' ? 'flex' : 'none';
    document.getElementById('add-remove-plugin-file').style.display =
      mode === 'edit' || mode === 'commit' ? 'flex' : 'none';
    document.getElementById('diff-editor').style.display =
      mode === 'commit' ? 'block' : 'none';
    document.getElementById('plugin-differ-commit').style.display =
      mode === 'commit' ? 'block' : 'none';
    document.getElementById('plugin-differ-link').style.display =
      mode === 'commit' ? 'block' : 'none';
    document.getElementById('plugin-output-previewer').style.height =
      mode === 'test' ? HEIGHT : '0vh';
    document.getElementById('plugin-test-area').style.display =
      mode === 'test' ? 'block' : 'none';
    document.getElementById('plugin-yarn-reloader').style.display = 'none';
    document.getElementById('plugin-output-previewer').style.position = mode === 'test' ? 'relative' : 'absolute';
    //allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-top-navigation
    document.getElementById('plugin-output-previewer').sandbox = mode === 'test' ? `allow-scripts allow-modals allow-same-origin`: `allow-scripts allow-same-origin`;

    document.getElementById('plugin-output-downloader').style.display =  mode === 'test' ? 'block' : 'none';
    document.getElementById('plugin-output-linker').style.display =  mode === 'test' ? 'block' : 'none';
    document.getElementById('js-editor-errors').style.display = mode === 'commit' ? 'none' : 'block';

    updateUrlParams('mode', mode);
    this.onSetEditingFile();
    // if(this.hasTestedOnce && mode === 'edit') {
    //   ToastWc.show({ type: 'info', content: 'The code editor is now listening for compiling errors', time: 3000 })
    // }
  };
  // ace-editor
  require('ace-builds/src-min-noconflict/ext-beautify');
  require('ace-builds/src-min-noconflict/mode-javascript');
  require('ace-builds/src-min-noconflict/theme-monokai');
  // ace-diff
  if (app.settings.theme() === 'dracula') {
    addStyleSheet('public/plugins/ace-diff/ace-diff-dark.min.css');
  } else {
    addStyleSheet('public/plugins/ace-diff/ace-diff.min.css');
  }

  this.updatePreviewOutput = (fileContents = '', onLoad = ()=> {}) => {
    const fileData = fileContents || this.volatilePlugins[this.editingFile].content; 
    document.querySelector('#js-editor-errors').style.display = 'none';
    try {
      const [data, _, errorEvent] = getExtensionScriptData(fileData);

      const isAnEditorPlugin = this.mode === 'test' && data && 'Constructor' in data;
      document.getElementById('plugin-output-previewer').style.display =
        !isAnEditorPlugin ? 'block' : 'none';
      document.getElementById('plugin-yarn-reloader').style.display =
        isAnEditorPlugin ? 'flex' : 'none';
      document.getElementById('plugin-output-downloader').innerText = isAnEditorPlugin ? 'Reload' : 'Download'

      if (!data || !data.script) {
        document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction("The function needs to return an object..");
        if(errorEvent) this.onErrorsInPreview({detail: {errorText: errorEvent.message, errorEvent}});
        return;
      }
      console.log({ outputData: data })
      // just in case to prevent getting stuck with bad code
      if(!this.hasTestedOnce) return;
      document.getElementById('plugin-output-previewer').srcdoc = getPreviewHtml(data, this.volatilePlugins, this.yarnData);
      document.getElementById('plugin-output-previewer').onload = () => {
        console.log("LOADED")
        onLoad();
      }
    } catch (e) {
      document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction(`${e.toString()}
      SEE CONSOLE LOGS`);
      console.error(e)
      this.onErrorsInPreview({detail: {errorText: e.message, e}})
    }
  }
  this.onErrorsInPreview = (errorsInPreview) => {
    // alert('ef')
    console.log({errorsInPreview})
    const errorText = errorsInPreview.detail.errorText;
    document.querySelector('#js-editor-errors').innerHTML = errorText;
    document.querySelector('#js-editor-errors').style.display =  errorText && this.mode !== 'commit' ? 'block' : 'none';
    this.editor.find(errorText);
  },
  this.onOpenPluginEditor = async () => {
    this.beautify = ace.require('ace/ext/beautify');

    this.onFormatCode = () => {
      this.beautify.beautify(this.editor.session);
    }
    this.onSetEditingFile = (fileNameOnMount = '') => {
      const fileName = document.getElementById('edited-plugin-file').value;
      getPluginsList(false).then(volatilePlugins => {
        this.volatilePlugins = volatilePlugins || {};
        this.editingFile = fileNameOnMount || fileName;
        let fileContents = this.volatilePlugins[this.editingFile].content;
        this.editor.setValue(fileContents);
        this.editor.clearSelection();
        console.log("update plugins file::" ,  this.editingFile)
        updateUrlParams('pluginFile', this.editingFile);

        if (this.mode === 'commit') {
          fileContents = this.editor.getValue();
          this.differ
            .getEditors()
            .left.getSession()
            .setValue(fileContents);

          getGistPluginFile(this.editingFile).then(gistPluginFile => {
            const isTokenInvalid = isGistTokenInvalid()
            const gistAccesError = isTokenInvalid ? `//Access to gist writing failed\n\n//Do you have a valid token.\n// It needs to have permission to edit the gist file.` : `//${fileName}\n\n// Failed to fetch plugin`
            this.differ
              .getEditors()
              .right.getSession()
              .setValue(gistPluginFile && !isTokenInvalid ? gistPluginFile : gistAccesError);

            this.differ.getEditors().right.setReadOnly(isTokenInvalid);
            document.getElementById('plugin-differ-commit').className = isTokenInvalid ? "disabled" : ""
          })
            .catch(error => {
              this.differ.getEditors().right.setReadOnly(true);
              document.getElementById('plugin-differ-commit').className = "disabled";
              this.differ
                .getEditors()
                .right.getSession()
                .setValue(error.toString())
            });
        }
        if (this.mode === 'test' && this.hasTestedOnce === false) {
          this.hasTestedOnce = true;
          // ToastWc.show({ type: 'warning', content: 'The code editor will now recompile when typing and listen for compiling errors', time: 3000 })
          document.querySelector('#edit-plugin-mode-test').style['border-bottom'] = '1px solid';
        }
      });
    };
    
    const { value: formValues } = await Swal.fire({
      showCloseButton: false,
      showCancelButton: false,
      title: `
        <div class="flex-wrap" style="flex:1;justify-content:space-between;gap: 4px; font-size: 1.4rem">
          <div class="flex-wrap" style="gap: 12px;">
            <select id="edited-plugin-file" class="settings-value" onchange="app.plugins.${self.name
        }.onSetEditingFile()" style="max-width: calc(90vw - 60px)">
              ${Object.keys(this.volatilePlugins || {}).map(
          key => `<option value="${key}">${key}</option>`
        )}
            </select>
            <div class="button-group-rounded" id="add-remove-plugin-file">
              <button id="add-plugin-file" onclick="app.plugins.${self.name
        }.onAddNewFile()" title="Add">+</button>
              <button id="remove-plugin-file" onclick="app.plugins.${self.name
        }.onRemoveSelectedFile()" title="remove">─</button>
            </div>
          </div>
          <div id="edit-plugin-mode" class="button-group-rounded">
            <button onclick="app.plugins.${self.name
        }.onSetPluginEditMode('edit')" id="edit-plugin-mode-edit" style="width:90px;border-right: 1px solid #f0f8ff14;">Edit</button>

            <button onclick="app.plugins.${self.name
        }.onSetPluginEditMode('test')" id="edit-plugin-mode-test" style="width:90px;border-right: 1px solid #f0f8ff14">Test</button>

        <button onclick="app.plugins.${self.name
        }.onSetPluginEditMode('commit')" id="edit-plugin-mode-commit" style="width:107px">Commit</button> 
          </div>
        </div>
        `.replaceAll('\n', ''),
      html: `
      <div style="overflow:hidden;">
        <div id="js-editor-wrapper" style="position:relative">
          <div id="js-editor" style="height: ${HEIGHT}; width: 100%;"></div>  
        </div>
        <div id="js-editor-errors" style="
          position: absolute;
          bottom: 28px;
          right: 20px;
          display: none;
          color: red;
          background: rgba(0, 0, 0, 0.75);
          padding: 6px;
          border-radius: 0.2rem;
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          text-align: start;
          max-height: 60%;
          max-width: 45%;
          overflow: auto;
          z-index: 9999;
        ">
        </div> 

        <div style="position: relative;">
            <div id="diff-editor" class="diff-editor" style="height: ${HEIGHT}; width: 100%;"></div>
            <button id="plugin-differ-commit" style="position: absolute;
            right: 17px;
            bottom: 17px;
            padding-left: 9px;
            padding-right: 9px;
            border-radius: 0.9rem;
            display: block;"
            onclick="app.plugins.${self.name
        }.onCommitChanges()"
          >
            Save to Gist
          </button>
          <button id="plugin-differ-link" style="position: absolute;
            right: 170px;
            bottom: 17px;
            padding-left: 9px;
            padding-right: 9px;
            border-radius: 0.9rem;
            display: block;"
            onclick="app.plugins.${self.name
        }.onOpenGistLink()"
          >
            Open target gist
          </button>
        </div>

        <div>
          <div style="position: absolute;
              right: calc(50vw - 65px);
              bottom: 3px;
              z-index: 999;
              padding-left: 9px;
              padding-right: 9px;
              border-radius: 0.9rem;">
            <button id="plugin-output-downloader"
              onclick="app.plugins.${self.name
        }.onDownloadPreviewOrReload()"
            >
              Download
            </button>

            <button title="format" onclick="app.plugins.${self.name
        }.onFormatCode()" id="edit-plugin-code-buttons">format</button>
          </div>

          <div style="position: absolute;
              right: calc(50vw + 80px);
              bottom: 3px;
              z-index: 999;
              padding-left: 9px;
              padding-right: 9px;
              border-radius: 0.9rem;">
            <button id="plugin-output-linker"
              onclick="app.plugins.${self.name
            }.onCopyLink()"
            >
              Copy link
            </button>
          </div>
          <div id="plugin-test-area" style="height: ${HEIGHT}; width: 100%;">
            <div id="plugin-yarn-reloader" style="display: none; flex-direction: column; gap: 7px">
              <div style="margin: 2rem">
                Your code has a Constructor field.
                This appears to be a yarn editor plugin.
                You need to reload Yarn for any changes to take effect.
              </div>
              <div style="flex:1;align-content:center;">
                <img  width="170px" src="./public/icon.png" alt="Yarn Icon" style="margin:0; padding:0;filter: drop-shadow(1px 1px 1px white) drop-shadow(-1px -1px 1px white);" />
              </div>
            </div>
            <iframe id="plugin-output-previewer" style="height: ${HEIGHT}; width: 100%;border: none;"> 
          </div>
        </div>
      </div>
        `,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: 'swal-wide',
      width: `${window.innerWidth - 20}px`,
      onBeforeOpen: () => {
        this.theme = app.settings.theme() === 'dracula' ? 'ace/theme/monokai' : undefined;
        // ace-diff
        if (app.settings.theme() === 'dracula') {
          removeStyleSheet('public/plugins/ace-diff/ace-diff.min.css');
          addStyleSheet('public/plugins/ace-diff/ace-diff-dark.min.css');
        } else {
          removeStyleSheet('public/plugins/ace-diff/ace-diff-dark.min.css');
          addStyleSheet('public/plugins/ace-diff/ace-diff.min.css');
        }
      },
      onAfterClose: () => {
        window.removeEventListener("previewErrors",this.onErrorsInPreview);
        this.hasTestedOnce = false;
      },
      onOpen: () => {
        app.data.getSaveData(app.settings.documentType() === 'ink' ? "ink.json" : "json").then(yarnData => {
          this.yarnData = yarnData;
        })
        window.addEventListener("previewErrors",this.onErrorsInPreview, false);
        // EDITOR
        this.editor = ace.edit('js-editor');
        this.editor.setOptions({ ...editorOptions, theme: this.theme });
        // required to enable better syntax highlighting
        addEsVersionToEditor(this.editor);
        const onChangeDebounced = app.utils.debounce(() => {
          setVloatilePlugin(this.editingFile, {
            content: this.editor.getValue(),
          }).then(()=> {
            this.updatePreviewOutput(this.editor.getValue(), () => this.editor.focus());
          });
        }, 600);
        this.editor.getSession().on('change', () => {
          onChangeDebounced();
        });

        setPluginStore(self.name, 'pluginEditorOpen', true);

        // DIFFER
        this.differ = new AceDiff({
          // ace: window.ace, // You Ace Editor instance
          element: document.querySelector('.diff-editor'),
          left: {
            ...editorOptions,
            theme: this.theme,
            content: '',
          },
          theme: 'ace/theme/monokai',
          right: {
            ...editorOptions,
            theme: this.theme,
            content: '... no connection with gist',
          },
        });
        addEsVersionToEditor(this.differ.getEditors().left);
        addEsVersionToEditor(this.differ.getEditors().right);

        const onChangeFromDiffDebounced = app.utils.debounce(() => {
          setVloatilePlugin(this.editingFile, {
            content: this.differ.getEditors().left.getValue(),
          });
        }, 600);
        this.differ
          .getEditors()
          .left.getSession()
          .on('change', function () {
            onChangeFromDiffDebounced();
          });
        //plugin-differ-commit button
        this.differ
          .getEditors()
          .right.getSession()
          .on('change', () => {
            // const contentChanged = this.differ.getEditors().left.getValue() !== this.differ.getEditors().right.getValue()
            // document.getElementById('plugin-differ-commit').className = contentChanged ? "" : "disabled"
          });
        setTimeout(() => {
          const localVariables = getPluginStore(self.name);
          console.log("Open plugins file  "+ getGistPluginsFileUrl())
          if(getGistPluginsFileUrl()) {
            // ?gistPlugins=2ff124dc94f936e8f7d96632f559aecb&pluginFile=yarn-output-pixi-bunnies.js&mode=test
            this.onUpdatePluginsList(getGistPluginsFileUrl()).then(()=> {
              this.onSetPluginEditMode(localVariables.pluginEditMode || this.mode, getGistPluginsFileUrl());
              updateUrlParams('gistPlugins', getGistPluginsId());
            });
          } else {
            this.onSetPluginEditMode(localVariables.pluginEditMode || this.mode, getGistPluginsFileUrl());
          }
        }, 400)
      },
      preConfirm: () => {
        setPluginStore(self.name, 'pluginEditorOpen', false);
        return this.editor.getValue();
      },
    });
  };
  onLoad(() => {
    getPluginsList(false).then(volatilePlugins => {
      this.volatilePlugins = volatilePlugins;
      if(getGistPluginsFileUrl()) {
        this.onOpenPluginEditor();
      }
    });

    // create a button in the file menu if in dev mode
    createButton(self.name, {
      name: 'Playground',
      attachTo: app.settings.developmentModeEnabled() ? 'appHeader' : 'fileMenuDropdown',
      onClick: 'onOpenPluginEditor()',
      className: 'item',
      id: 'pluginEditorButton',
      iconName: 'javascript',
      ...(app.settings.developmentModeEnabled() ? {
        className: 'bbcode-button',
        style: 'padding: 0 10px; margin-top: 3px',
        as: 'div',
      } : {})
    });
  });
};
