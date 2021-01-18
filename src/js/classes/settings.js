// Get the mechanism to use for storage.
const getStorage = function() {
  // if `window.vsCodeApi` exists, we're in the context of the VSCode extension
  // which handles all of the settings internally, so we don't need to do anything here
  if (window.vsCodeApi) {
    return {
      getItem: () => {},
      setItem: () => {}
    };
  } else {
    return window.localStorage;
  }
};

export const Settings = function(app) {
  const self = this;
  const storage = getStorage();
  this.storage = storage;

  ko.extenders.persist = function (target, option) {
    target.subscribe(function (newValue) {
      storage.setItem(option, newValue);
    });
    return target;
  };

  // apply
  //
  // Applies the current settings
  this.apply = function () {
    app.setTheme(self.theme());
    app.setLanguage(self.language());
    app.toggleInvertColors();
    app.setMarkupLanguage(self.markupLanguage());
    app.workspace.setThrottle(self.redrawThrottle());
    app.setGistCredentials({token:self.gistToken(), file: self.gistFile() !== null ? self.gistFile().split('/').pop() : null});
  };

  this.validateGridSize = function() {
    if (self.gridSize() < 20) {
      self.gridSize(20);
    }

    if (self.gridSize() > 200) {
      self.gridSize(200);
    }
    self.gridSize(parseInt(self.gridSize()))
    app.initGrid();
  }

  // Theme
  this.theme = ko
    .observable(storage.getItem('theme') || 'classic')
    .extend({ persist:'theme' });

  // Language
  this.language = ko
    .observable(storage.getItem('language') || 'en-GB')
    .extend({ persist:'language' });

  // Redraw throttle
  this.redrawThrottle = ko
    .observable(parseInt(storage.getItem('redrawThrottle') || '50'))
    .extend({ persist:'redrawThrottle' });

  this.gistToken= ko
    .observable(storage.getItem('gistToken'))
    .extend({ persist:'gistToken' });

  this.gistFile = ko
    .observable(storage.getItem('gistFile'))
    .extend({ persist:'gistFile' });

  // Spellcheck enabled
  this.spellcheckEnabled = ko
    .observable(storage.getItem('spellcheckEnabled') !== null ?
      storage.getItem('spellcheckEnabled') === 'true' :
      true
    ).extend({ persist:'spellcheckEnabled' });

  // Transcribe enabled
  this.transcribeEnabled = ko
    .observable(false);

  // Auto Close Tags
  this.autoCloseTags = ko
    .observable(storage.getItem('autoCloseTags') !== null ?
      storage.getItem('autoCloseTags') === 'true' :
      true
    ).extend({ persist:'autoCloseTags' });

  // Autocomplete Suggestions
  this.autocompleteSuggestionsEnabled = ko
    .observable(storage.getItem('autocompleteSuggestionsEnabled') !== null ?
      storage.getItem('autocompleteSuggestionsEnabled') === 'true' :
      true
    ).extend({ persist:'autocompleteSuggestionsEnabled' });

  // Auto Close Brackets
  this.autoCloseBrackets = ko
    .observable(storage.getItem('autoCloseBrackets') !== null ?
      storage.getItem('autoCloseBrackets') === 'true' :
      true
    ).extend({ persist:'autoCloseBrackets' });

  // Night mode
  this.invertColorsEnabled = ko
    .observable(storage.getItem('invertColorsEnabled') !== null ?
      storage.getItem('invertColorsEnabled') === 'true' :
      false
    ).extend({ persist:'invertColorsEnabled' });

  // Snap to grid
  this.snapGridEnabled = ko
  .observable(storage.getItem('snapGridEnabled') !== null ?
    storage.getItem('snapGridEnabled') === 'true' :
    false
  ).extend({ persist:'snapGridEnabled' });

  // Grid size
  this.gridSize = ko
  .observable(parseInt(storage.getItem('gridSize') || '40')
  ).extend({ persist:'gridSize' });

  // Autocreate nodes
  this.createNodesEnabled = ko
    .observable(storage.getItem('createNodesEnabled') !== null ?
      storage.getItem('createNodesEnabled') === 'true' :
      true
    ).extend({ persist:'createNodesEnabled' });

  // Editor stats
  this.editorStatsEnabled = ko
    .observable(storage.getItem('editorStatsEnabled') !== null ?
      storage.getItem('editorStatsEnabled') === 'true' :
      false
    ).extend({ persist:'editorStatsEnabled' });

  // Markup language
  this.markupLanguage = ko
    .observable(storage.getItem('markupLanguage') || 'bbcode')
    .extend({ persist:'markupLanguage' });

  // Playtest style
  this.playtestStyle = ko
    .observable(storage.getItem('playtestStyle') || 'chat')
    .extend({ persist:'playtestStyle' });

  // Line Style
  this.lineStyle = ko
  .observable(storage.getItem('lineStyle') || 'straight')
  .extend({ persist:'lineStyle' });

  // Always open nodes in Visual Studio Code Editor
  // We don't actually show this in the settings menu; it can only be set by the VSCode extension's settings
  this.alwaysOpenNodesInVisualStudioCodeEditor = ko
    .observable(storage.getItem('alwaysOpenNodesInVisualStudioCodeEditor') !== null ?
      storage.getItem('alwaysOpenNodesInVisualStudioCodeEditor') === 'true' :
      false
    ).extend({ persist:'alwaysOpenNodesInVisualStudioCodeEditor' });
  
  
  this.editorSplitDirection = ko
  .observable(storage.getItem('editorSplitDirection') || 'left')
  .extend({ persist:'editorSplitDirection' });

  this.editorSplit = ko
  .observable(storage.getItem('editorSplit') !== null ?
  storage.getItem('editorSplit') === 'true' :
  false
  ).extend({ persist:'editorSplit' });

  this.editorSplitSize = ko
  .observable(storage.getItem('editorSplitSize') || '50%')
  .extend({ persist:'editorSplitSize' });
};
