import { edit } from 'ace-builds';

const kaboom = require('./kaboom/kaboom.mjs');

export var JsEditor = function({
  app,
  createButton,
  setPluginStore,
  getPluginStore,
  onLoad,
}) {
  const self = this;
  this.name = self.constructor.name;

  this.k = null;

  //  console.log(k);
  this.onOpenDialog = async () => {
    let editor = null;
    const { value: formValues } = await Swal.fire({
      title: '💥Kaboomjs',
      html:
        '<div id="jsEditor" style="min-height:70vh"/><canvas id="kaboomCanvas"></canvas>',
      focusConfirm: false,
      showConfirmButton: true,
      onOpen: () => {
        // create the editor

        // ace.require('ace/ext/language_tools');
        editor = ace.edit('jsEditor', {
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
        const langTools = ace.require('ace/ext/language_tools');

        console.log(app.getOtherNodeTitles());
        const nodeAutocompleter = app.utils.createAutocompleter(
          false,
          app.getOtherNodeTitles(),
          'Node Link'
        );
        const kaboomAutocompleter = app.utils.createAutocompleter(
          false,
          Object.getOwnPropertyNames(self.k),
          'Kaboomjs'
        );
        langTools.setCompleters([
          nodeAutocompleter,
          kaboomAutocompleter,
          ...editor.completers,
          langTools.keyWordCompleter,
          langTools.textCompleter,
          langTools.snippetCompleter,
        ]);
        editor.completers = [
          nodeAutocompleter,
          kaboomAutocompleter,
          ...editor.completers,
        ];

        const localVariables = getPluginStore(self.name);
        console.log(editor, localVariables);
        editor.setValue(localVariables.kaboomjs || '');
      },
      preConfirm: () => {
        return editor.getValue();
      },
    });

    console.log(formValues);
    if (formValues) {
      setPluginStore(self.name, 'kaboomjs', formValues);
    }
  };

  onLoad(() => {
    createButton(self.name, {
      title: 'kaboomjs',
      attachTo: 'appHeader',
      onClick: 'onOpenDialog()',
      name: '💥Kaboomjs',
      className: 'menu dropdown',
    });
  });
};
