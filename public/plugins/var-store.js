const JSONEditor = require('../plugins/jsoneditor/dist/jsoneditor-minimalist.min');
// import 'jsoneditor/dist/jsoneditor.min.css';
// require('./public/plugins/jsoneditor/size-overrides.css');
const cssElement = document.createElement('link');
cssElement.rel = 'stylesheet';
cssElement.href = './public/plugins/jsoneditor/dist/jsoneditor.min.css';
document.body.appendChild(cssElement);

export var VarStore = function({
  app,
  createButton,
  setPluginStore,
  getPluginStore,
}) {
  const self = this;

  this.onOpenDialog = async () => {
    let editor = null;
    const { value: formValues } = await Swal.fire({
      title: 'Playtest starting variables',
      html: '<div id="jsoneditor"/>',
      focusConfirm: false,
      onOpen: () => {
        // create the editor
        const container = document.getElementById('jsoneditor');
        const options = {
          mode: 'tree',
          onEditable: ({ path, field, value }) => {
            return !(field === undefined && value === '');
          },
        };
        editor = new JSONEditor(container, options);
        editor.setSchema({ type: 'object' });
        // require('../plugins/jsoneditor/dist/jsoneditor.min.css');
        // require('../plugins/jsoneditor/size-overrides.css');

        if (app.settings.theme() === 'dracula') {
          // require('../plugins/jsoneditor/json-editor-darktheme.css');
        }

        const localVariables = getPluginStore(self);
        // set json
        editor.set(
          typeof localVariables.fields !== 'object' ? {} : localVariables.fields
        );
      },
      preConfirm: () => {
        return editor.get();
      },
    });

    if (formValues) {
      setPluginStore(self, 'fields', formValues);
      app.data.playtestVariables(formValues);
    }
  };

  this.onload = () => {
    // create a button in the file menu
    createButton(self, {
      name: 'Variables',
      attachTo: 'fileMenuDropdown',
      onClick: 'onOpenDialog',
    });
  };
  this.onYarnLoadedData = () => {
    const localVariables = getPluginStore(self);
    app.data.playtestVariables(localVariables.fields || {});
  };
  this.onYarnEditorOpen = () => {};
};
