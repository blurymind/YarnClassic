const JSONEditor = require('./jsoneditor/dist/jsoneditor-minimalist.min');

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
      html: `<div id="jsoneditor">
              </div>`,
      focusConfirm: false,
      onOpen: () => {
        // create the editor
        const container = document.getElementById('jsoneditor');
        const options = {};
        editor = new JSONEditor(container, options);
        require('./jsoneditor/dist/jsoneditor.min.css');
        require('./jsoneditor/size-overrides.css');
        console.log(app.settings.theme());
        if (app.settings.theme() === 'dracula') {
          require('./jsoneditor/json-editor-darktheme.css');
        }

        const localVariables = getPluginStore(self);
        // set json
        editor.set(localVariables.fields);
      },
      preConfirm: () => {
        return editor.get();
      },
    });

    if (formValues) {
      setPluginStore(self, 'fields', formValues);
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
};
