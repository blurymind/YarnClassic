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
  }) {
    const self = this;
    this.name = 'PluginEditor';
    this.onOpenPluginEditor = async () => {
      require ('ace-builds/src-min-noconflict/ext-beautify');
      require ('ace-builds/src-min-noconflict/mode-javascript');
      require ('ace-builds/src-min-noconflict/theme-monokai');
      const beautify = ace.require("ace/ext/beautify");

      let editor = null;
      const { value: formValues } = await Swal.fire({
        title: `
        <div class="flex-wrap" style="flex:1;justify-content:space-between;">
          <div>Edit plugins:</div>
          <button>Reload</button>   
        </div>
        `.replaceAll("\n", ""),
        html: `
        <div id="js-editor" style="height: 400px; width: 100%;" data-bind="
          aceOptions: { 
          showPrintMargin: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          behavioursEnabled: true,
        ">function greet(name) {
            return "Hello!" + name;
        }
        </div>
        `,
        focusConfirm: false,
        customClass: 'swal-wide',
        width: `${window.innerWidth - 20}px`,
        onOpen: () => {
          // create the editor
          var editor = ace.edit("js-editor");
          console.log({editor})
          editor.setTheme("ace/theme/monokai");
          editor.getSession().setMode("ace/mode/javascript");
          // Disable minimap
          // editor.setOption("minimap", false);
          editor.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
          })
          beautify.beautify(editor.session);

          const onChangeDebounced = app.utils.debounce(function(){
            //beautify.beautify(editor.session);//todo moves cursor position, needs to restore it
            
          }, 600)
          editor.getSession().on('change', () => {
            
            onChangeDebounced()
            console.log(editor.getValue())
            // beautify.beautify(editor.session);
          });

          // editor = new JSONEditor({ id: 'jsoneditor' });
          // const localVariables = getPluginStore(self.name);
          // app.log({ editor });
          // // set json
          // editor.setValue(
          //   typeof localVariables.variables !== 'object'
          //     ? [{ key: 'er', value: 'erd' }]
          //     : localVariables.variables
          // );
          setPluginStore(self.name, 'pluginEditorOpen', true);
        },
        preConfirm: () => {
          setPluginStore(self.name, 'pluginEditorOpen', false);
          return editor.getValue();
        },
      });
    }
    onLoad(() => {
      console.log({isInDevMode:app.settings.developmentModeEnabled()})
      if(!app.settings.developmentModeEnabled()) return;
        // add actions
        // addSettingsItem({
        //   title: 'Playtesting Style',
        //   valueKey: 'playtestStyle',
        //   defaultValue: 'chat',
        //   optionsKey: 'availablePlaytestStyles',
        //   options: [
        //     { id: 'npc', name: 'Npc bubble' },
        //     { id: 'chat', name: 'Chat messages' },
        //   ],
        //   setterKey: 'setPlaytestStyle',
        //   settingsColumn: 'A',
        // });


        // create a button in the file menu if in dev mode
        createButton(self.name, {
          name: 'Edit plugins',
          attachTo: 'fileMenuDropdown',
          onClick: 'onOpenPluginEditor()',
          iconName: 'cog',
        });
        const localVariables = getPluginStore(self.name);
        // if (localVariables.runnerVariablesOpen) self.onOpenDialog();
      });
  }