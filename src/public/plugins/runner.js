import { yarnRender } from './bondage/renderer';
import { inkRender } from './inkjs/ink-renderer';
const { JSONEditor } = require('./jsoneditor/jsoneditor');

export var Runner = function({
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
  this.name = 'Runner';

  // Variables editor dialog
  this.onOpenDialog = async () => {
    let editor = null;
    const { value: formValues } = await Swal.fire({
      title: 'Playtest starting variables',
      html: '<div class="json-editor-wrapper"><div id="jsoneditor"/></div>',
      focusConfirm: false,
      customClass: 'swal-wide',
      onOpen: () => {
        // create the editor
        require('./jsoneditor/size-overrides.css');
        editor = new JSONEditor({ id: 'jsoneditor' });
        const localVariables = getPluginStore(self.name);
        console.log({ editor });
        // set json
        editor.setValue(
          typeof localVariables.variables !== 'object'
            ? [{ key: 'er', value: 'erd' }]
            : localVariables.variables
        );
        setPluginStore(self.name, 'runnerVariablesOpen', true);
      },
      preConfirm: () => {
        setPluginStore(self.name, 'runnerVariablesOpen', false);
        return editor.getValue();
      },
    });

    if (formValues) {
      setPluginStore(self.name, 'variables', formValues);
    }
  };

  onLoad(() => {
    // add actions
    addSettingsItem({
      title: 'Playtesting Style',
      valueKey: 'playtestStyle',
      defaultValue: 'chat',
      optionsKey: 'availablePlaytestStyles',
      options: [
        { id: 'npc', name: 'Npc bubble' },
        { id: 'chat', name: 'Chat messages' },
      ],
      setterKey: 'setPlaytestStyle',
      settingsColumn: 'A',
    });
    // create a button in the file menu
    createButton(self.name, {
      name: 'Playtest variables',
      attachTo: 'fileMenuDropdown',
      onClick: 'onOpenDialog()',
      iconName: 'cog',
    });
    const localVariables = getPluginStore(self.name);
    if (localVariables.runnerVariablesOpen) self.onOpenDialog();
  });

  const updateRunnerMode = () => {
    // YARN PLAY MODE
    if (app.settings.documentType() === 'yarn') {
      this.previewStory = new yarnRender();

      this.gotoLastPlayNode = function() {
        if (
          app.editing() &&
          app.editing().title() !== self.previewStory.node.title
        ) {
          app.openNodeByTitle(self.previewStory.node.title);
        }
        app.editor.focus();
      };

      this.advanceStoryPlayMode = function(speed = 5) {
        if (!self.previewStory.finished) {
          self.previewStory.changeTextScrollSpeed(speed);
          if (self.previewStory.vnSelectedChoice != -1 && speed === 5) {
            self.previewStory.vnSelectChoice();
          }
        } else {
          self.togglePlayMode(false);
          self.gotoLastPlayNode();
        }
      };

      this.togglePlayMode = function(playModeOverwrite = false) {
        const editor = $('.editor')[0];
        const storyPreviewPlayButton = document.getElementById(
          'storyPlayButton'
        );
        const editorPlayPreviewer = document.getElementById('editor-play');
        $('#editor-play').addClass('inYarnMode');
        $('#commandDebugLabel').addClass('inYarnMode');
        app.isEditorInPlayMode(playModeOverwrite);
        if (playModeOverwrite) {
          //preview play mode
          editor.style.display = 'none';
          $('.bbcode-toolbar').addClass('hidden');
          editorPlayPreviewer.style.display = 'flex';
          $(storyPreviewPlayButton).addClass('disabled');
          self.previewStory.emiter.on('finished', function() {
            self.togglePlayMode(false);
            self.gotoLastPlayNode();
          });
          self.previewStory.emiter.on('startedNode', function(e) {
            if (app.isEditorSplit) {
              app.workspace.warpToNode(
                app.getFirstFoundNode(e.title.toLowerCase().trim())
              );
            }
          });
          const localVariables = getPluginStore(self.name);
          console.log('variables', localVariables);
          app.data.getSaveData('json').then(saveData => {
            self.previewStory.initYarn(
              JSON.parse(saveData),
              app
                .editing()
                .title()
                .trim(),
              'NVrichTextLabel',
              false,
              'commandDebugLabel',
              app.settings.playtestStyle(),
              localVariables.variables || []
            );
          });
        } else {
          //edit mode
          app.editor.session.setScrollTop(editorPlayPreviewer.scrollTop);
          editorPlayPreviewer.style.display = 'none';
          editor.style.display = 'flex';
          $(storyPreviewPlayButton).removeClass('disabled');
          $('.bbcode-toolbar').removeClass('hidden');
          $('.toggle-toolbar').removeClass('hidden');
          $('.editor-counter').removeClass('hidden');
          self.previewStory.terminate();
        }
      };

      onYarnInPreviewMode(() => self.togglePlayMode(false));
      onYarnSavedNode(() => self.togglePlayMode(false));

      onYarnEditorOpen(() => {
        createButton(self.name, {
          iconName: 'play',
          title: 'Preview',
          attachTo: 'bbcodeToolbar',
          onClick: 'togglePlayMode(true)',
          className: 'bbcode-button bbcode-button-right',
          id: 'storyPlayButton',
        });

        const element = document.createElement('div');
        element.innerHTML = `
    <div class="editor-play" id="editor-play" onpointerdown="app.plugins.${self.name}.advanceStoryPlayMode(30)" ondblclick="app.plugins.${self.name}.advanceStoryPlayMode()">
        <p class="story-playtest-answer" id="NVrichTextLabel"></p>
        <div id="commandDebugLabel"></div>
    </div>
  `;
        document.getElementById('editorContainer').appendChild(element);

        onKeyDown(e => {
          if (!app.editing() || self.previewStory.finished) return;
          switch (e.keyCode) {
            case app.input.keys.Z:
              self.previewStory.changeTextScrollSpeed(10);
              if (self.previewStory.vnSelectedChoice != -1)
                self.previewStory.vnSelectChoice();
              break;

            case app.input.keys.Up:
              if (self.previewStory.vnSelectedChoice != -1)
                self.previewStory.vnUpdateChoice(-1);
              break;

            case app.input.keys.Down:
              if (self.previewStory.vnSelectedChoice != -1)
                self.previewStory.vnUpdateChoice(1);
              break;
          }
        });
        onKeyUp(e => {
          if (e.keyCode === app.input.keys.Z) {
            self.previewStory.changeTextScrollSpeed(200);
            if (self.previewStory.vnSelectedChoice != -1)
              self.previewStory.vnSelectChoice();
          }
        });
      });
    } else {
      // INKJS PLAY MODE //
      this.previewStory = new inkRender();
      this.prevSession = {
        story: null,
        prevSavePoints: [],
        childNodes: [],
        recompile: false,
      };
      const compiler = new app.data.InkCompiler(); ///
      this.togglePlayMode = function(playModeOverwrite = false) {
        const editor = $('.editor')[0];
        const storyPreviewPlayButton = document.getElementById(
          'storyPlayButton'
        );
        const editorPlayPreviewer = document.getElementById('editor-play');
        app.isEditorInPlayMode(playModeOverwrite);
        $('#editor-play').addClass('inInkMode');
        $('#commandDebugLabel').addClass('inInkMode');

        if (playModeOverwrite) {
          //preview play mode
          editorPlayPreviewer.style.display = 'flex';
          $('#editor').addClass('editor-take-half');

          self.previewStory.emiter.on('finished', function() {
            self.togglePlayMode(false);
            self.gotoLastPlayNode();
          });
          self.previewStory.emiter.on('startedNode', function(e) {
            if (app.isEditorSplit) {
              app.workspace.warpToNode(
                app.getFirstFoundNode(e.title.toLowerCase().trim())
              );
            }
          });
          const localVariables = getPluginStore(self.name);
          console.log('VARIABLES::::', localVariables);

          app.data.getSaveData('ink', null, true).then(saveData => {
            const onRecompile = () => {
              self.prevSession = { ...self.prevSession, recompile: true };
              self.togglePlayMode(true);
            };
            self.previewStory.initInk(
              compiler,
              onRecompile,
              self.prevSession,
              saveData,
              app
                .editing()
                .title()
                .trim(),
              'NVrichTextLabel',
              false,
              'commandDebugLabel',
              app.settings.playtestStyle(),
              localVariables.variables || []
            );
          });
        } else {
          //edit mode
          app.editor.session.setScrollTop(editorPlayPreviewer.scrollTop);
          editorPlayPreviewer.style.display = 'none';
          editor.style.display = 'flex';
          $('#editor').removeClass('editor-take-half');
          $(storyPreviewPlayButton).removeClass('disabled');

          self.prevSession = {
            prevSavePoints: self.previewStory.prevSavePoints,
            story: self.previewStory.story,
            childNodes: self.previewStory.textAreaEl
              ? [...self.previewStory.textAreaEl.childNodes]
              : [],
            recompile: false,
          };
          self.previewStory.terminate();
        }
        app.editor.resize();
      };
      onYarnInPreviewMode(() => self.togglePlayMode(false));
      onYarnSavedNode(() => self.togglePlayMode(false));
      this.advanceStoryPlayMode = function(speed = 5) {};

      onYarnEditorOpen(() => {
        createButton(self.name, {
          iconName: 'play',
          title: 'Preview',
          attachTo: 'bbcodeToolbar',
          onClick: 'togglePlayMode(!app.isEditorInPlayMode())',
          className: 'bbcode-button bbcode-button-right',
          id: 'storyPlayButton',
        });

        const element = document.createElement('div');
        element.innerHTML = `
    <div class="editor-play" id="editor-play" onpointerdown="app.plugins.${self.name}.advanceStoryPlayMode(30)" ondblclick="app.plugins.${self.name}.advanceStoryPlayMode()">
        <p class="story-playtest-answer" id="NVrichTextLabel"></p>
        <div id="commandDebugLabel"></div>
    </div>
  `;
        document.getElementById('editorContainer').appendChild(element);
      });
    }
  };
  updateRunnerMode();
  //yarnSetDocumentType
  onYarnSetDocumentType(updateRunnerMode);
  //TODO remove this ugly hack
  app.togglePlayMode = this.togglePlayMode;
};
