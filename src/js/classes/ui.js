export const UI = function(app) {
  const self = this;

  this.settingsDialogVisible = ko.observable(false);

  // Theme selector -----------------------------------------------------------
  this.availableThemes = [
    { id: 'classic', name: 'Classic' },
    // { id: 'blueprint', name: 'Blueprint' },
    // { id: 'dracula', name: 'Dracula' }
  ];

  // Language selector --------------------------------------------------------
  this.availableLanguages = [
    { name: 'Afrikaans', id: 'af-ZA' },
    { name: 'Bahasa Indonesia', id: 'id-ID' },
    { name: 'Bahasa Melayu', id: 'ms-MY' },
    { name: 'Català', id: 'ca-ES' },
    { name: 'Čeština', id: 'cs-CZ' },
    { name: 'Deutsch', id: 'de-DE' },
    { name: 'English', id: 'en-GB' },
    { name: 'Español', id: 'es-ES' },
    { name: 'Euskara', id: 'eu-ES' },
    { name: 'Français', id: 'fr-FR' },
    { name: 'Galego', id: 'gl-ES' },
    { name: 'Hrvatski', id: 'hr_HR' },
    { name: 'IsiZulu', id: 'zu-ZA' },
    { name: 'Íslenska', id: 'is-IS' },
    { name: 'Italiano', id: 'it-IT' },
    { name: 'Magyar', id: 'hu-HU' },
    { name: 'Nederlands', id: 'nl-NL' },
    { name: 'Norsk bokmål', id: 'nb-NO' },
    { name: 'Polski', id: 'pl-PL' },
    { name: 'Português', id: 'pt-BR' },
    { name: 'Română', id: 'ro-RO' },
    { name: 'Slovenčina', id: 'sk-SK' },
    { name: 'Suomi', id: 'fi-FI' },
    { name: 'Svenska', id: 'sv-SE' },
    { name: 'Türkçe', id: 'tr-TR' },
    { name: 'български', id: 'bg-BG' },
    { name: 'Pусский', id: 'ru-RU' },
    { name: 'Српски', id: 'sr-RS' },
    { name: '한국어', id: 'ko-KR' },
    { name: '中文', id: 'cmn-Hans-CN' },
    { name: '日本語', id: 'ja-JP' },
    { name: 'Lingua latīna', id: 'la' }
  ];

  // openSettingsDialog
  this.openSettingsDialog = function() {
    self.settingsDialogVisible(true);

    $('.settings-dialog')
      .css({ opacity: 0 })
      .transition({ opacity: 1 }, 250);

    $('.settings-dialog .form')
      .css({ y: '-100' })
      .transition({ y: '0' }, 250);
  };

  // closeSettingsDialog
  this.closeSettingsDialog = function () {
    $('.settings-dialog')
      .css({ opacity: 1 })
      .transition({ opacity: 0 }, 250, e => {
        self.settingsDialogVisible(false);
      });

    $('.settings-dialog .form')
      .css({ y: '0' })
      .transition({ y: '-100' }, 250);
  };
};
