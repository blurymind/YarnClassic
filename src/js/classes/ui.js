export const UI = function(app) {
  const self = this;

  this.settingsDialogVisible = ko.observable(false);
  this.narrowScreenThreshold = 600;
  this.isScreenNarrow = function() {
    return ($(window).width() <= self.narrowScreenThreshold);
  };

  // Markup selector -----------------------------------------------------------
  this.availableMarkupLanguages = [
    { id: 'bbcode', name: 'Bbcode' },
    { id: 'html', name: 'Html' }
  ];

  // Theme selector -----------------------------------------------------------
  this.availableThemes = [
    { id: 'classic', name: 'Classic' },
    { id: 'blueprint', name: 'Blueprint' },
    { id: 'dracula', name: 'Dracula' }
  ];

  // Playtest selector -----------------------------------------------------------
  this.availablePlaytestStyles = [
    { id: 'npc', name: 'Npc bubble' },
    { id: 'chat', name: 'Chat messages' }
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

    // Line Style selector -----------------------------------------------------------
    this.availableLineStyles = [
      { id: 'straight', name: 'Straight Lines' },
      { id: 'bezier', name: 'Bezier Curves' }
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
    
    setTimeout(() => app.settings.apply(), 100);
  };

  // isDialogOpen
  this.isDialogOpen = function () {
    return self.settingsDialogVisible() || (Swal.isVisible() && !Swal.isTimerRunning());
  };

  // confirmMarkupConversion
  this.confirmMarkupConversion = function () {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Markup on all nodes will be modified. This can rarely result in broken texts. This operation can\'t be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, convert it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        app.convertMarkup();
        Swal.fire(
          'Converted!',
          'The markup on the nodes has been converted.',
          'success'
        );
      }
    });
  };

  // openNodeListMenu
  this.openNodeListMenu = function(action) {
    const searchText = action === 'link' ?
      document.getElementById('linkHelperMenuFilter').value.toLowerCase() :
      document.getElementById('nodeSearchInput').value.toLowerCase();

    const rootMenu = document.getElementById(action + 'HelperMenu');
    rootMenu.innerHTML = '';

    app.nodes().forEach((node, i) => {
      if (
        node
          .title()
          .toLowerCase()
          .indexOf(searchText) >= 0 ||
        searchText.length == 0
      ) {
        const p = document.createElement('span');
        p.innerHTML = node.title();
        $(p).addClass('item ' + app.nodes()[i].titleStyles[app.nodes()[i].colorID()]);

        if (action == 'link') {
          if (node.title() !== app.editing().title()) {
            p.setAttribute(
              'onclick',
              'app.insertTextAtCursor(\'[[' +
                node.title() +
                ']]\')'
            );
            rootMenu.appendChild(p);
          }
        } else if (action == 'open') {
          if (
            node
              .title()
              .toLowerCase()
              .indexOf(searchText) >= 0 ||
            searchText.length == 0
          ) {
            p.setAttribute('onclick', `app.openNodeByTitle("${node.title()}")`);
            p.setAttribute(
              'onmouseenter',
              `app.workspace.warpToNodeByIdx(${app.nodes.indexOf(node)})`
            );
            rootMenu.appendChild(p);
          }
        }
      }
    });
  };

  this.checkAndMoveAppButtons = function() {
    // Move app buttons to either side depending on direction
    $('.app-add-node').toggleClass('app-add-node-alt', app.settings.editorSplitDirection() === 'right');
    $('.app-sort').toggleClass('app-sort-alt', app.settings.editorSplitDirection() === 'right');
    $('.app-undo-redo').toggleClass('app-undo-redo-alt', app.settings.editorSplitDirection() === 'right');
    $('.app-zoom').toggleClass('app-zoom-alt', app.settings.editorSplitDirection() === 'right');
  }

  this.resetAppButtonsLocation = function() {
    $('.app-add-node').removeClass('app-add-node-alt');
    $('.app-sort').removeClass('app-sort-alt');
    $('.app-undo-redo').removeClass('app-undo-redo-alt');
    $('.app-zoom').removeClass('app-zoom-alt');
  }
};
