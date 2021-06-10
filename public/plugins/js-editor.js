const kaboom = require('./kaboom/kaboom.mjs');

export var JsEditor = function({
  app,
  createButton,
  setPluginStore,
  getPluginStore,
}) {
  const self = this;
  this.editor = ko.observable(null);
  this.k = null;

  //  console.log(k);
  this.onOpenDialog = async () => {
    Swal.fire({
      title: '💥Kaboomjs',
      html:
        '<div id="jsEditor" style="min-height:70vh"/><canvas id="kaboomCanvas"></canvas>',
      focusConfirm: false,
      showConfirmButton: false,
      onOpen: () => {
        // create the editor

        // ace.require('ace/ext/language_tools');
        self.editor = ace.edit('jsEditor', {
          theme: 'ace/theme/monokai',
          mode: 'ace/mode/javascript',
          value: 'console.log("yahoo");',
          autoScrollEditorIntoView: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          behavioursEnabled: true,
        });
        self.k = kaboom.default({
          canvas: document.getElementById('kaboomCanvas'),
        });
        console.log(self.k, Object.getOwnPropertyNames(self.k));
        // Object.getOwnPropertyNames(self.k).forEach(method => {
        //   console.log(method, self.k[method].arguments());
        // });
        // self.editor.setOptions({
        //   mode: 'javascript',
        //   value: 'console.log("yahoo")',
        //   autoScrollEditorIntoView: true,
        // });
        console.log(self.editor);
      },
      preConfirm: () => {
        // return editor.get();
        self.k = null;
        return null;
      },
    });

    // if (formValues) {
    //     setPluginStore(self, 'fields', formValues);
    //     app.data.playtestVariables(formValues);
    // }
  };

  this.onload = () => {
    createButton(self, {
      title: 'kaboomjs',
      attachTo: 'appHeader',
      onClick: 'onOpenDialog()',
      name: '💥Kaboomjs',
      className: 'menu dropdown',
    });
  };
  this.onYarnLoadedData = () => {
    const localVariables = getPluginStore(self);
    // app.data.playtestVariables(localVariables.fields || {});
  };
  this.onYarnEditorOpen = () => {
    // create a button in the file menu
    // createButton(self, {
    //   icon: 'play',
    //   title: 'Preview',
    //   attachTo: 'bbcodeToolbar',
    //   onClick: 'onOpenDialog()',
    //   className: 'bbcode-button bbcode-button-right',
    // });
  };
};
