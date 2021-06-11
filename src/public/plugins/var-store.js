const JSONEditor = require('./jsoneditor/dist/jsoneditor-minimalist.min');

export var VarStore = function({
  app,
  createButton,
  setPluginStore,
  getPluginStore,
}) {
  const self = this;
  this.name = self.constructor.name;

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
        require('./jsoneditor/dist/jsoneditor.min.css');
        require('./jsoneditor/size-overrides.css');

        if (app.settings.theme() === 'dracula') {
          require('./jsoneditor/json-editor-darktheme.css');
        }

        const localVariables = getPluginStore(self.name);
        // set json
        editor.set(
          typeof localVariables.variables !== 'object'
            ? {}
            : localVariables.variables
        );
      },
      preConfirm: () => {
        return editor.get();
      },
    });

    if (formValues) {
      setPluginStore(self.name, 'variables', formValues);
    }
  };

  this.onload = () => {
    // create a button in the file menu
    createButton(self.name, {
      name: 'Variables',
      attachTo: 'fileMenuDropdown',
      onClick: 'onOpenDialog()',
    });
  };
  this.onYarnLoadedData = () => {};
  this.onYarnEditorOpen = () => {};
};
