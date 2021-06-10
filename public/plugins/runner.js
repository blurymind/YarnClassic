import { yarnRender } from './bondage/renderer';

export var Runner = function({ app, createButton, addSettingsItem }) {
  const self = this;
  app.plugins.runner = self;
  const pluginAppPath = 'app.plugins.Runner';

  this.previewStory = new yarnRender();

  this.togglePreviewMode = function(previewModeOverwrite) {
    const editor = $('.editor')[0];
    const editorPreviewer = $('#editor-preview')[0];

    app.isEditorInPreviewMode = previewModeOverwrite;
    if (previewModeOverwrite) {
      if (self.isEditorInPlayMode) {
        self.togglePlayMode(false);
        self.gotoLastPlayNode();
      }
      $('.bbcode-toolbar').addClass('hidden');
      //preview mode
      editor.style.display = 'none';
      editorPreviewer.style.display = 'block';
      editorPreviewer.innerHTML = self.richTextFormatter.richTextToHtml(
        self.editing().body(),
        true
      );
      editorPreviewer.scrollTop = self.editor.renderer.scrollTop;
    } else {
      //edit mode
      $('.bbcode-toolbar').removeClass('hidden');
      app.editor.session.setScrollTop(editorPreviewer.scrollTop);
      editorPreviewer.innerHTML = '';
      editorPreviewer.style.display = 'none';
      editor.style.display = 'flex';
      app.editor.focus();
      app.editor.resize();
      //close any pop up helpers tooltip class
      if ($('#colorPicker-container').is(':visible')) {
        $('#colorPicker-container').hide();
      }
      if ($('#emojiPicker-container').is(':visible')) {
        $('#emojiPicker-container').hide();
      }
    }
  };

  this.gotoLastPlayNode = function() {
    if (
      app.editing() &&
      app.editing().title() !== self.previewStory.node.title
    ) {
      app.openNodeByTitle(self.previewStory.node.title);
    }
    app.editor.focus();
  };

  // todo move to plugins
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

  // Todo: move to plugins
  this.togglePlayMode = function(playModeOverwrite = false) {
    var editor = $('.editor')[0];
    var storyPreviewPlayButton = document.getElementById('storyPlayButton');
    var editorPlayPreviewer = document.getElementById('editor-play');
    self.isEditorInPlayMode = playModeOverwrite;
    if (playModeOverwrite) {
      self.togglePreviewMode(false);
      //preview play mode
      editor.style.display = 'none';
      editorPlayPreviewer.style.display = 'flex';
      $(storyPreviewPlayButton).addClass('disabled');
      $('.toggle-toolbar').addClass('hidden');
      $('.editor-counter').addClass('hidden');
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
        app.data.playtestVariables()
      );
    } else {
      //edit mode
      app.editor.session.setScrollTop(editorPlayPreviewer.scrollTop);
      editorPlayPreviewer.style.display = 'none';
      editor.style.display = 'flex';
      $(storyPreviewPlayButton).removeClass('disabled');
      $('.toggle-toolbar').removeClass('hidden');
      $('.editor-counter').removeClass('hidden');
      app.previewStory.terminate();
    }
  };

  this.onload = () => {
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
  };
  this.onYarnLoadedData = () => {};

  document.addEventListener('yarnSavedNode', () => {
    self.previewStory.terminate();
  });
  this.onYarnEditorOpen = () => {
    createButton(self, {
      icon: 'play',
      title: 'Preview',
      attachTo: 'bbcodeToolbar',
      onClick: 'togglePlayMode(true)',
      className: 'bbcode-button bbcode-button-right',
    });

    const element = document.createElement('div');
    element.innerHTML = `
      <div class="editor-play" id="editor-play" onpointerdown="${pluginAppPath}.advanceStoryPlayMode(30)" ondblclick="${pluginAppPath}.advanceStoryPlayMode()">
          <p class="story-playtest-answer" id="NVrichTextLabel"></p>
          <div id="commandDebugLabel"></div>
      </div>
    `;
    document.getElementById('editorContainer').appendChild(element);
  };
};