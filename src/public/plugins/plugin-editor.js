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
      k.loadSprite("bean", "public/images/pixel.png")
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
const getPreviewHtml = (modules = [], html = "<div>...</div>", script = "") => `
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
    <script type="module">
    const run = ${script};
    run();
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
  getVloatilePlugins,
  setVloatilePlugin,
  setVloatilePlugins,
  getGistPluginFiles,
}) {
  const self = this;
  this.name = 'PluginEditor';
  this.editor = null;
  this.differ = null;
  this.editingFile = '';
  this.volatilePlugins = {};
  this.gistPluginFiles = {};
  this.mode = 'edit';
  this.theme = app.settings.theme() === 'dracula' ? 'ace/theme/monokai' : undefined;
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
    document.getElementById('plugin-output-previewer').style.display =
      mode === 'test' ? 'block' : 'none';

    this.onSetEditingFile();
  };
  this.onOpenPluginEditor = async () => {
    // ace-editor
    require('ace-builds/src-min-noconflict/ext-beautify');
    require('ace-builds/src-min-noconflict/mode-javascript');
    require('ace-builds/src-min-noconflict/theme-monokai')
    const beautify = ace.require('ace/ext/beautify');

    this.onSetEditingFile = () => {
      const fileName = document.getElementById('edited-plugin-file').value;
      getVloatilePlugins().then(volatilePlugins => {
        console.log({ volatilePlugins })
        this.volatilePlugins = volatilePlugins;
        let fileContents = this.volatilePlugins[fileName].content;
        this.editingFile = fileName;
        this.editor.setValue(fileContents);
        this.editor.clearSelection();
        beautify.beautify(this.editor.session);

        if (this.mode === 'commit') {
          getGistPluginFiles().then(gistPluginFiles => {
            const gistPluginFile = gistPluginFiles.find(
              item => item.filename == fileName
            );
            console.log({ gistPluginFile }, this.differ.getEditors());
            fileContents = this.editor.getValue();
            this.differ
              .getEditors()
              .left.getSession()
              .setValue(fileContents);

            this.differ
              .getEditors()
              .right.getSession()
              .setValue(gistPluginFile ? gistPluginFile.content : `//${fileName}\n\n//Gist with this filename is missing.\n// Have you deleted/renamed it?`);
            this.differ.getEditors().right.setReadOnly(this.mode === 'commit');
          });
        }
        if (this.mode === 'test') {
          try {
            const extension = new Function("parameters", `return ${fileContents}`)();
            console.log({ extensionData: extension(), fileContents })
            if (typeof extension === 'function') {
              try {
                const data = extension();
                if (!data) {

                  document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction("The function needs to return an object..");
                  return;
                }
                document.getElementById('plugin-output-previewer').srcdoc = getPreviewHtml(data.modules || [], data.body, data.script)
              } catch (e) {
                document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction(`${e.toString()}
                SEE CONSOLE LOGS`)
                  ;
              }
              return
            }
            document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction();
          } catch (e) {
            document.getElementById('plugin-output-previewer').srcdoc = getExampleOutputFunction(`${e.toString()}
            SEE CONSOLE LOGS`);
            console.error(e)
          }
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
              ${Object.keys(this.volatilePlugins).map(
          key => `<option value="${key}">${key}</option>`
        )}
            </select>
          </div>
          <div id="edit-plugin-mode" class="button-group-rounded">
            <button onclick="app.plugins.${self.name
        }.onSetPluginEditMode('edit')" id="edit-plugin-mode-edit">Edit</button>

            <button onclick="app.plugins.${self.name
        }.onSetPluginEditMode('test')" id="edit-plugin-mode-test">Test</button>

        <button onclick="app.plugins.${self.name
        }.onSetPluginEditMode('commit')" id="edit-plugin-mode-commit">Commit</button> 
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
        </div>
        
        <div>
          <iframe id="plugin-output-previewer" style="height: 70vh; width: 100%;">
            Write to previewer
          </textarea>
        </div>
      </div>

        `,
      focusConfirm: false,
      customClass: 'swal-wide',
      width: `${window.innerWidth - 20}px`,
      onBeforeOpen: () => {
        this.theme = app.settings.theme() === 'dracula' ? 'ace/theme/monokai' : undefined;
        // ace-diff
        if (app.settings.theme() === 'dracula') {
          addStyleSheet('public/plugins/ace-diff/ace-diff-dark.min.css');
        } else {
          addStyleSheet('public/plugins/ace-diff/ace-diff.min.css');
        }
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
        const localVariables = getPluginStore(self.name);
        this.onSetPluginEditMode(localVariables.pluginEditMode || 'edit');

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

        // initialize data on both editor and differ
        this.onSetEditingFile();
      },
      onAfterClose: () => {
        removeStyleSheet('public/plugins/ace-diff/ace-diff-dark.min.css');
        removeStyleSheet('public/plugins/ace-diff/ace-diff.min.css');
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
    getVloatilePlugins().then(volatilePlugins => {
      this.volatilePlugins = volatilePlugins;
      console.log({ gotVolatilePlugins: volatilePlugins });
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

// example output
const exampleOutput = `
  <head>
  ..modules and css here
  <body>
    <div>
  </body>
  <script>
    // stringified from script
    const run = ({resources, onLoad, modules}) => {
      const {kaboom} = modules;// stuff imported from head
      const myFunc=()=> {
        //err
      }
  
      const myImage = resources["imagekey"] //this returns the base64 - keep flat to save size
      onLoad()
    }


    // <=== added by renderer 
    import kaboom from "blahblah"
    run({
       modules: {
          kaboom
       },
       resources: {
        imagekey: "base64Strjhkdfhkdfgh"
       },
       onLoad: document.body.onload

    }) // <=== added by renderer 
  <script>

`