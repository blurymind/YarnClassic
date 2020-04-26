
export class Settings {
  constructor (app) {
    this.app = app;
    this.storage = window.localStorage;
    const storage = window.localStorage;

    ko.extenders.persist = function (target, option) {
      target.subscribe(function (newValue) {
        storage.setItem(option, newValue);
      });
      return target;
    };

    // Spellcheck enabled
    this.spellcheckEnabled = ko
      .observable(storage.getItem('spellcheckEnabled')==='true')
      .extend({ persist:'spellcheckEnabled' });
  }

  // apply
  //
  // Applies the current settings
  apply() {
    this.app.setTheme(this.theme);
    this.app.setLanguage(this.language);
    this.app.workspace.setThrottle(this.redrawThrottle);
  }

  // Theme
  get theme () { return this.storage.getItem('theme') || 'classic'; };
  set theme (value) { this.storage.setItem('theme', value); }

  // Language
  get language () { return this.storage.getItem('language') || 'en-GB'; };
  set language (value) { this.storage.setItem('language', value); }

  // Redraw throttle
  get redrawThrottle () { return this.storage.getItem('redrawThrottle') || '50'; };
  set redrawThrottle (value) { this.storage.setItem('redrawThrottle', value); }
};
