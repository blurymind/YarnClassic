import AceDiff from './ace-diff/ace-diff.min.js';

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
    modules: ["https://unpkg.com/kaboom@0.5.1/dist/kaboom.js"],
    body: "<canvas id='kaboom'></canvas>",
    script: () => {
      const k = kaboom({
        canvas: document.querySelector("#kaboom"),
      })
      k.loadSprite("bean", "public/icon.png")
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
<textarea style="height: 70vh; width: 100%;">
${error}

// To render here, the script needs to be a function that returns modules, body and script
// Example:
${EXAMPLE}
</textarea>
<body>
`
const getPreviewHtml = (modules = [], html = "<div>...</div>", script = "", yarnData = {}) => `
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
    ${html}
    ${modules.map(item => `<script src="${item}"></script>`)}
    <script>
      const yarnData = ${yarnData};
    </script>
    <script type="module">
     (${script})()
    </script>
  </body>
`
const editorOptions = {
  mode: 'ace/mode/javascript',
  tabSize: 2,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
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
  setVloatilePlugins,
  getGistPluginFiles,
  saveGistPlugin,
  isGistTokenInvalid,
  gistPluginsFileUrl,
  pluginModeUrl,
  getPluginsList
}) {
  const self = this;
  this.name = 'PluginEditor';
  this.editor = null;
  this.differ = null;
  this.editingFile = '';
  this.volatilePlugins = {};
  this.mode = pluginModeUrl || 'edit';
  this.theme = app.settings.theme() === 'dracula' ? 'ace/theme/monokai' : undefined;

  this.onUpdatePluginsList = (gistPluginsFileOnMount ='') => {
    // initialize file menu 
    getPluginsList().then(fileList=>{
      this.volatilePlugins = fileList;
      console.log({fileList: Object.values(fileList)})
      document.getElementById("edited-plugin-file").innerHTML = Object.keys(fileList || {}).map(
        key => `<option value="${key}">${key}</option>`
      );
      if(gistPluginsFileOnMount && gistPluginsFileOnMount in fileList) {
        document.getElementById("edited-plugin-file").value = gistPluginsFileOnMount;
      }
    })
  }
  this.onCommitChanges = () => {
    const contents = this.differ.getEditors().right.getValue();
    saveGistPlugin(this.editingFile, contents).then(data=>{
      this.differ.getEditors().left.setValue(contents)
    });
  }
  this.onDownloadPreview = () => {
    app.data.storage.downloadContent(document.getElementById('plugin-output-previewer').srcdoc, 'output.html');
  }
  this.onSetPluginEditMode = mode => {
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
    document.getElementById('diff-editor').style.display =
      mode === 'commit' ? 'block' : 'none';
    document.getElementById('plugin-differ-commit').style.display =
      mode === 'commit' ? 'block' : 'none';
    document.getElementById('plugin-output-previewer').style.display =
      mode === 'test' ? 'block' : 'none';
    document.getElementById('plugin-output-downloader').style.display = 'none';

    this.onSetEditingFile();
  };
  // ace-editor
  require('ace-builds/src-min-noconflict/ext-beautify');
  require('ace-builds/src-min-noconflict/mode-javascript');
  require('ace-builds/src-min-noconflict/theme-monokai')
  // ace-diff
  if (app.settings.theme() === 'dracula') {
    addStyleSheet('public/plugins/ace-diff/ace-diff-dark.min.css');
  } else {
    addStyleSheet('public/plugins/ace-diff/ace-diff.min.css');
  }
  this.onOpenPluginEditor = async () => {
    
    const beautify = ace.require('ace/ext/beautify');

    this.onSetEditingFile = (fileNameOnMount = '') => {
      const fileName = document.getElementById('edited-plugin-file').value;
      getPluginsList().then(volatilePlugins => {
        console.log({ volatilePlugins })
        this.volatilePlugins = volatilePlugins || {};
        this.editingFile = fileNameOnMount || fileName;
        let fileContents = this.volatilePlugins[this.editingFile].content;
        this.editor.setValue(fileContents);
        this.editor.clearSelection();
        beautify.beautify(this.editor.session);

        if (this.mode === 'commit') {
          fileContents = this.editor.getValue();
          this.differ
            .getEditors()
            .left.getSession()
            .setValue(fileContents);
          getGistPluginFiles().then(gistPluginFiles => {
            const gistPluginFile = gistPluginFiles.find(
              item => item.filename == fileName
            );

            const isTokenInvalid = isGistTokenInvalid()
            const gistAccesError = isTokenInvalid? `//Access to gist writing failed\n\n//Do you have a valid token.\n// It needs to have permission to edit the gist file.`: `//${fileName}\n\n//Gist with this filename is missing.\n// Have you deleted/renamed it?`
            this.differ
              .getEditors()
              .right.getSession()
              .setValue(gistPluginFile && !isTokenInvalid ? gistPluginFile.content : gistAccesError);
            
              this.differ.getEditors().right.setReadOnly(isTokenInvalid);
              document.getElementById('plugin-differ-commit').className = isTokenInvalid ? "disabled" : ""
          })
          .catch(error=>{
            this.differ.getEditors().right.setReadOnly(true);
            document.getElementById('plugin-differ-commit').className = "disabled";
            this.differ
              .getEditors()
              .right.getSession()
              .setValue(error.toString())
          });
        }
        if (this.mode === 'test') {
          app.data.getSaveData(app.settings.documentType() === 'ink' ? "ink" : "json").then(yarnData => {
            try {
              const extension = new Function("parameters", `return ${fileContents}`)();
              console.log({ fileContents, yarnData })
              if (typeof extension === 'function') {
                try {
                  const data = extension();
                  if (!data) {
                    document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction("The function needs to return an object..");
                    return;
                  }
                  document.getElementById('plugin-output-previewer').srcdoc = getPreviewHtml(data.modules || [], data.body, data.script, yarnData);
                  document.getElementById('plugin-output-downloader').style.display = 'block';
                } catch (e) {
                  document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction(`${e.toString()}
                  SEE CONSOLE LOGS`);
                  console.error(e)
                }
                return
              }
              document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction();
            } catch (e) {
              document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction(`${e.toString()}
              SEE CONSOLE LOGS`);
              console.error(e)
            }
          });
        }
      });
    };

    const { value: formValues } = await Swal.fire({
      showCloseButton: false,
      showCancelButton: false,
      title: `
        <div class="flex-wrap" style="flex:1;justify-content:space-between;gap: 4px; font-size: 1.4rem">
          <div>
            <select id="edited-plugin-file" class="settings-value" onchange="app.plugins.${self.name
        }.onSetEditingFile()">
              ${Object.keys(this.volatilePlugins || {}).map(
          key => `<option value="${key}">${key}</option>`
        )}
            </select>
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
        <div id="js-editor-wrapper">
          <div id="js-editor" style="height: 70vh; width: 100%;"></div>        
        </div>

        <div style="position: relative;">
            <div id="diff-editor" class="diff-editor" style="height: 70vh; width: 100%;"></div>
            <button id="plugin-differ-commit" style="position: absolute;
            right: 9px;
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
        </div>
        
        <div>
          <button id="plugin-output-downloader" style="position: absolute;
            right: 123px;
            top: 51px;
            padding-left: 9px;
            padding-right: 9px;
            border-radius: 0.9rem;"
            onclick="app.plugins.${self.name
        }.onDownloadPreview()"
          >
            Download
          </button>
          <iframe id="plugin-output-previewer" style="height: 70vh; width: 100%; border: none;">
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
        // removeStyleSheet('public/plugins/ace-diff/ace-diff-dark.min.css');
        // removeStyleSheet('public/plugins/ace-diff/ace-diff.min.css');
      },
      onOpen: () => {
        // EDITOR
        this.editor = ace.edit('js-editor');
        this.editor.setOptions({ ...editorOptions, theme: this.theme });
        const onChangeDebounced = app.utils.debounce(() => {
          setVloatilePlugin(this.editingFile, {
            content: this.editor.getValue(),
          });
        }, 600);
        this.editor.getSession().on('change', function () {
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
          const localVariables = getPluginStore(self.name);
          this.onSetPluginEditMode(localVariables.pluginEditMode || this.mode);
        // initialize data on both editor and differ
        setTimeout(()=>{
          // ?gistPlugins=2ff124dc94f936e8f7d96632f559aecb&pluginFile=yarn-output-pixi-bunnies.js&mode=test
          this.onUpdatePluginsList(gistPluginsFileUrl);
          this.onSetEditingFile(gistPluginsFileUrl);
        }, 400)
      },
      preConfirm: () => {
        setPluginStore(self.name, 'pluginEditorOpen', false);
        return this.editor.getValue();
      },
    });
  };
  onLoad(() => {
    console.log({ isInDevMode: app.settings.developmentModeEnabled() });
    if (!app.settings.developmentModeEnabled()) return;
    getPluginsList().then(volatilePlugins => {
      this.volatilePlugins = volatilePlugins;
      console.log({ gotVolatilePlugins: volatilePlugins });

      if(gistPluginsFileUrl) {
        this.onOpenPluginEditor()
      }
    });

    // create a button in the file menu if in dev mode
    createButton(self.name, {
      name: 'Edit plugins',
      attachTo: 'fileMenuDropdown',
      onClick: 'onOpenPluginEditor()',
      iconName: 'cog',
    });
  });
};
