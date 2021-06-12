import { yarnRender } from './bondage/renderer';

export var Runner = function({
  app,
  createButton,
  addSettingsItem,
  getPluginStore,
  onYarnEditorOpen,
  onYarnInPreviewMode,
  onYarnSavedNode,
  onKeyUp,
  onKeyDown,
  onLoad,
}) {
  const self = this;
  this.name = 'Runner';

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
    const storyPreviewPlayButton = document.getElementById('storyPlayButton');
    const editorPlayPreviewer = document.getElementById('editor-play');
    self.isEditorInPlayMode = playModeOverwrite;
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
      const localVariables = getPluginStore('VarStore');
      self.previewStory.initYarn(
        JSON.parse(app.data.getSaveData('json')),
        app
          .editing()
          .title()
          .trim(),
        'NVrichTextLabel',
        false,
        'commandDebugLabel',
        app.settings.playtestStyle(),
        localVariables.variables || {}
      );
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
  });

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
};
