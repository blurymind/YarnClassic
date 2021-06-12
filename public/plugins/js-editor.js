import { genPreview } from './kaboom/genGame';

const helloKaboom = `
kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
});

scene("main", () => {
  add([ text("hello from kaboom ;)"), pos(100, 100),]);
});

start("main");
`;

export var JsEditor = function({
  app,
  createButton,
  setPluginStore,
  getPluginStore,
  onLoad,
}) {
  const self = this;
  this.name = 'JsEditor';

  this.k = null;

  //  console.log(k);
  this.onOpenDialog = async () => {
    let editor = null;
    require('./kaboom/style.css');
    const { value: formValues } = await Swal.fire({
      title: '💥Kaboomjs',
      customClass: 'swal-wide',
      html:
        '<div id="kbEditor"><div id="jsEditor" style="min-height:70vh"/></div>',
      focusConfirm: false,
      onOpen: () => {
        // create the editor with autocompletions
        editor = ace.edit('jsEditor', {
          theme: 'ace/theme/monokai',
          mode: 'ace/mode/javascript',
          value: 'console.log("yahoo");',
          autoScrollEditorIntoView: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          behavioursEnabled: true,
        });
        // const kaboomCanvas = document.createElement('canvas');
        // kaboomCanvas.id = 'kaboomCanvas';
        // document.getElementById('kbEditor').appendChild(kaboomCanvas);
        // self.k = kaboom.default({
        //   canvas: document.getElementById('kaboomCanvas'),
        //   global: true,
        // });
        // const langTools = ace.require('ace/ext/language_tools');
        // const nodeAutocompleter = app.utils.createAutocompleter(
        //   false,
        //   app.getOtherNodeTitles(),
        //   'Node Link'
        // );
        // const kaboomAutoCompleter = app.utils.createAutocompleter(
        //   false,
        //   Object.getOwnPropertyNames(self.k),
        //   'Kaboomjs'
        // );
        // langTools.setCompleters([
        //   nodeAutocompleter,
        //   kaboomAutoCompleter,
        //   ...editor.completers,
        //   langTools.keyWordCompleter,
        //   langTools.textCompleter,
        //   langTools.snippetCompleter,
        // ]);
        // editor.completers = [
        //   nodeAutocompleter,
        //   kaboomAutoCompleter,
        //   ...editor.completers,
        // ];
        const kaboomIframe = document.createElement('iframe');
        kaboomIframe.id = 'kaboomCanvas';
        document.getElementById('kbEditor').appendChild(kaboomIframe);
        kaboomIframe.onload = () => {
          editor.focus();
        };
        const localVariables = getPluginStore(self.name);
        editor.setValue(localVariables.kaboomjs || helloKaboom);

        const reRun = () => {
          kaboomIframe.srcdoc = genPreview(editor.getValue());
        };
        reRun();
        editor.getSession().on('change', ev => {
          reRun();
        });
      },
      // preConfirm: () => {
      //   return editor.getValue();
      // },
      showConfirmButton: false,
      onClose: () => {
        setPluginStore(self.name, 'kaboomjs', editor.getValue());
      },
    });

    // console.log(formValues);
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
