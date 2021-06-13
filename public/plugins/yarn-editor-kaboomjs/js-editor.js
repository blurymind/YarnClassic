import { genPreview } from './genGame';
const { JSONEditor } = require('../jsoneditor/jsoneditor.min');

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

// editor = new JSONEditor(document.getElementById('jsoneditor'), {
//   schema: {
//     type: 'object',
//     title: 'Resources',
//     properties: {
//       // pictures: {
//       //   type: 'array',
//       //   title: 'Pictures',
//       //   items: {
//       //     type: 'object',
//       //     title: 'Image',
//       //     format: 'grid',
//       //     properties: {
//       //       file: {
//       //         type: 'string',
//       //         title: 'file',
//       //         media: {
//       //           binaryEncoding: 'base64',
//       //           type: 'img/png',
//       //         },
//       //         options: {
//       //           grid_columns: 6,
//       //           multiple: true,
//       //         },
//       //       },
//       //       // description: {
//       //       //   type: 'string',
//       //       //   title: 'Description',
//       //       //   options: {
//       //       //     grid_columns: 6,
//       //       //   },
//       //       // },
//       //     },
//       //   },
//       // },
export var JsEditor = function({
  app,
  onYarnLoadedStateFromLocalStorage,
  onYarnSavedStateToLocalStorage,
  createButton,
  setPluginStore,
  getPluginStore,
  onLoad,
}) {
  const self = this;
  this.name = 'JsEditor';

  this.onOpenSpritesManager = async () => {
    let editor = null;
    const { value: formValues } = await Swal.fire({
      title: 'Images',
      html: '<div class="json-editor-wrapper"><div id="spritesEditor"/></div>',
      focusConfirm: false,
      customClass: 'swal-wide',
      onOpen: () => {
        // create the editor
        require('../jsoneditor/size-overrides.css');
        editor = new JSONEditor(document.getElementById('spritesEditor'), {
          schema: {
            type: 'array',
            title: 'Pictures',
            items: {
              type: 'object',
              title: 'Image',
              format: 'grid',
              properties: {
                file: {
                  type: 'string',
                  title: 'file',
                  media: {
                    binaryEncoding: 'base64',
                    type: 'img/png',
                  },
                  options: {
                    grid_columns: 6,
                    multiple: true,
                    // include_filename: true,
                    // includeFilename: true,
                    // getFileBase: true,
                  },
                },
                name: {
                  type: 'string',
                  title: 'Name',
                  options: {
                    grid_columns: 6,
                  },
                },
              },
            },
          },
        });
        const localVariables = getPluginStore(self.name);

        // set json
        // editor.setValue(
        //     typeof localVariables.variables !== 'object'
        //         ? [{ key: 'er', value: 'erd' }]
        //         : localVariables.variables
        // );
      },
      preConfirm: () => {
        console.log(editor.getValue());
        return editor.getValue();
      },
    });

    if (formValues) {
      console.log('Sprites', formValues);
      // setPluginStore(self.name, 'spriteResources', formValues);
    }
  };
  //  console.log(k);
  this.onOpenDialog = () => {
    let editor = null;
    require('./style.css');
    const localVariables = getPluginStore(self.name);
    Swal.fire({
      title:
        '<div class="kaboom-header">' +
        '<div><input type="checkbox" checked id="kbBehindMode" name="kbBehind"><label for="kbBehind" class="hide-when-narrow">behind</label><label for="kbBehind" class="show-when-narrow">b</label></div>' +
        '<div><input type="checkbox" checked id="kbShouldHotReload" name="hotReload"><label for="hotReload" class="hide-when-narrow">hot</label><label for="hotReload" class="show-when-narrow">h</label></div>' +
        '<div>💥Kaboomjs</div>' +
        '</div>',
      customClass: 'swal-wide',
      html:
        '<div id="kbEditor" class="kb-behind-mode"><div id="jsEditor" style="min-height:70vh"/></div>' +
        '<div id="kbSpritesButton" class="kb-sprites-btn">Sprites</div>',
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

        const kaboomIframe = document.createElement('iframe');
        kaboomIframe.id = 'kaboomIframe';
        const iframeWrapper = document.createElement('div');
        iframeWrapper.id = 'kaboomCanvas';
        iframeWrapper.appendChild(kaboomIframe);
        document.getElementById('kbEditor').appendChild(iframeWrapper);
        kaboomIframe.onload = () => {
          editor.focus();
        };

        editor.setValue(localVariables.kaboomjs || helloKaboom);

        const setBehindMode = behind => {
          if (behind) {
            $('#kbEditor').addClass('kb-behind-mode');
          } else {
            $('#kbEditor').removeClass('kb-behind-mode');
          }
        };
        const behindModeToggle = document.getElementById('kbBehindMode');
        behindModeToggle.addEventListener('change', e => {
          setPluginStore(
            self.name,
            'kaboomjsEditorBehindMode',
            e.target.checked
          );
          setBehindMode(e.target.checked);
        });
        behindModeToggle.checked = localVariables.kaboomjsEditorBehindMode;
        setBehindMode(behindModeToggle.checked);

        const shouldReloadToggle = document.getElementById('kbShouldHotReload');
        shouldReloadToggle.addEventListener('change', e => {
          setPluginStore(
            self.name,
            'kaboomjsEditorShouldReload',
            e.target.checked
          );
        });
        shouldReloadToggle.checked = localVariables.kaboomjsEditorShouldReload;
        const reRun = () => {
          kaboomIframe.srcdoc = genPreview(editor.getValue());
        };
        reRun();
        editor.getSession().on('change', ev => {
          if (shouldReloadToggle.checked) reRun();
        });
        iframeWrapper.addEventListener('pointerenter', () => {
          if (!shouldReloadToggle.checked) reRun();
        });

        // Sprites manager
        document
          .getElementById('kbSpritesButton')
          .addEventListener('click', () => {
            self.onOpenSpritesManager();
          });
        // TODO: restore autocompleters
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
        setPluginStore(self.name, 'kaboomjsEditorOpen', true);
      },
      showConfirmButton: false,
      onClose: () => {
        setPluginStore(self.name, 'kaboomjs', editor.getValue());
        setPluginStore(self.name, 'kaboomjsEditorOpen', false);
      },
    });
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
  onYarnLoadedStateFromLocalStorage(() => {
    const localVariables = getPluginStore(self.name);
    if (localVariables.kaboomjsEditorOpen) {
      self.onOpenDialog();
    }
  });
};
