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
    .observable(storage.getItem('spellcheckEnabled')==='true')
    .extend({ persist:'spellcheckEnabled' });

  // Transcribe enabled
  this.transcribeEnabled = ko
    .observable(storage.getItem('transcribeEnabled')==='true')
    .extend({ persist:'transcribeEnabled' });

  // Autocomplete tags
  this.completeTagsEnabled = ko
    .observable(storage.getItem('completeTagsEnabled')==='true')
    .extend({ persist:'completeTagsEnabled' });
};
