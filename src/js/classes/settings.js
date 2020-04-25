
export class Settings {
  constructor (app) {
    this.app = app;
    this.storage = window.localStorage;
  }

  // apply
  //
  // Applies the current settings
  apply() {
    this.app.setTheme(this.theme);
    this.app.setLanguage(this.language);
  }

  // Theme
  get theme () { return this.storage.getItem('theme') || 'classic'; };
  set theme (value) { this.storage.setItem('theme', value); }

  // Language
  get language () { return this.storage.getItem('language') || 'en-GB'; };
  set language (value) { this.storage.setItem('language', value); }
};
