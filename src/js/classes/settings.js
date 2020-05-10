export const Settings = function(app) {
  const self = this;
  const storage = window.localStorage;

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
    app.toggleNightMode();
    app.workspace.setThrottle(self.redrawThrottle());
  };

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

  // Spellcheck enabled
  this.spellcheckEnabled = ko
    .observable(storage.getItem('spellcheckEnabled') !== null ?
      storage.getItem('spellcheckEnabled') === 'true' :
      true
    ).extend({ persist:'spellcheckEnabled' });

  // Transcribe enabled
  this.transcribeEnabled = ko
    .observable(false);

  // Autocomplete tags
  this.completeTagsEnabled = ko
    .observable(storage.getItem('completeTagsEnabled') !== null ?
      storage.getItem('completeTagsEnabled') === 'true' :
      true
    ).extend({ persist:'completeTagsEnabled' });

  // Autocomplete words
  this.completeWordsEnabled = ko
    .observable(storage.getItem('completeWordsEnabled') !== null ?
      storage.getItem('completeWordsEnabled') === 'true' :
      true
    ).extend({ persist:'completeWordsEnabled' });

  // Night mode
  this.nightModeEnabled = ko
    .observable(storage.getItem('nightModeEnabled') !== null ?
      storage.getItem('nightModeEnabled') === 'true' :
      false
    ).extend({ persist:'nightModeEnabled' });

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
};
