import AceDiff from './ace-diff/ace-diff.min.js';
import './ace-diff/ace-diff-dark.min.css';

const editorOptions = {
  theme: 'ace/theme/monokai',
  mode: 'ace/mode/javascript',
  tabSize: 2,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
};
export var PluginEditor = function({
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
    require('ace-builds/src-min-noconflict/theme-monokai');
    const beautify = ace.require('ace/ext/beautify');

    // ace-diff
    require('ace-builds/src-min-noconflict/theme-twilight');

    this.onSetEditingFile = () => {
      const fileName = document.getElementById('edited-plugin-file').value;
      getVloatilePlugins().then(volatilePlugins => {
        console.log({volatilePlugins})
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
              .setValue(gistPluginFile.content);
            this.differ.getEditors().right.setReadOnly(this.mode === 'commit');
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
            <select id="edited-plugin-file" class="settings-value" onchange="app.plugins.${
              self.name
            }.onSetEditingFile()">
              ${Object.keys(this.volatilePlugins).map(
                key => `<option value="${key}">${key}</option>`
              )}
            </select>
          </div>
          <div id="edit-plugin-mode" class="button-group-rounded">
            <button onclick="app.plugins.${
              self.name
            }.onSetPluginEditMode('edit')" id="edit-plugin-mode-edit">Edit</button>
            <button onclick="app.plugins.${
              self.name
            }.onSetPluginEditMode('commit')" id="edit-plugin-mode-commit">Commit</button> 
            <button onclick="app.plugins.${
              self.name
            }.onSetPluginEditMode('test')" id="edit-plugin-mode-test">Test</button>
          </div>
        </div>
        `.replaceAll('\n', ''),
      html: `
      <div id="js-editor-wrapper">
        <div id="js-editor" style="height: 70vh; width: 100%;">function greet(name) {
            return "Hello!" + name;
        }
        </div>        
      </div>

      <div style="position: relative;">
          <div id="diff-editor" class="diff-editor" style="height: 70vh; width: 100%;"></div>
      </div>
      
      <div>
        <div id="plugin-output-previewer" style="height: 70vh; width: 100%;">
          Write to previewer
        </div>
      </div>
        `,
      focusConfirm: false,
      customClass: 'swal-wide',
      width: `${window.innerWidth - 20}px`,
      onOpen: () => {
        // EDITOR
        this.editor = ace.edit('js-editor');
        this.editor.setOptions(editorOptions);
        const onChangeDebounced = app.utils.debounce(() => {
          setVloatilePlugin(this.editingFile, {
            content: this.editor.getValue(),
          });
        }, 600);
        this.editor.getSession().on('change', function() {
          onChangeDebounced();
        });
        const localVariables = getPluginStore(self.name);
        this.onSetPluginEditMode(localVariables.pluginEditMode || 'commit');

        setPluginStore(self.name, 'pluginEditorOpen', true);

        // DIFFER
        this.differ = new AceDiff({
          // ace: window.ace, // You Ace Editor instance
          element: document.querySelector('.diff-editor'),
          left: {
            ...editorOptions,
            content: '',
          },
          theme: 'ace/theme/monokai',
          right: {
            ...editorOptions,
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
          .on('change', function() {
            onChangeFromDiffDebounced();
          });

        // initialize data on both editor and differ
        this.onSetEditingFile();
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

const example =({resources}) => ({// straight to output
  head: [],//goes in head - as src/style = detected by file type
  body: `<div></div>`,// can have css tags,etc
  resources, // passed from editor to output
  script: ({resources, onLoad, modules}) => { // then to script
    const {kaboom} = modules;// stuff imported from head
    const myFunc=()=> {
      //err
    }

    const myImage = resources["imagekey"] //this returns the base64 - keep flat to save size
    onLoad()
  }
})
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