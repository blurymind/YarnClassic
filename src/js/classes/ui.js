export const UI = function(app) {
  const self = this;

  this.settingsDialogVisible = ko.observable(false);
  this.helpDialogVisible = ko.observable(false);

  // Markup selector -----------------------------------------------------------
  this.availableMarkupLanguages = [
    { id: 'bbcode', name: 'Bbcode' },
    { id: 'html', name: 'Html' }
  ];

  // Theme selector -----------------------------------------------------------
  this.availableThemes = [
    { id: 'classic', name: 'Classic' },
    { id: 'blueprint', name: 'Blueprint' }
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

  // openDialog
  this.openDialog = function(dialogId) {
    switch (dialogId) {
    case 'settings-dialog': self.settingsDialogVisible(true); break;
    case 'help-dialog': self.helpDialogVisible(true); break;
    }

    $(`#${dialogId}`)
      .css({ opacity: 0 })
      .transition({ opacity: 1 }, 250);

    $(`#${dialogId} .form`)
      .css({ y: '-100' })
      .transition({ y: '0' }, 250);
  };

  // closeDialog
  this.closeDialog = function(dialogId) {
    let observable;
    switch (dialogId) {
    case 'settings-dialog': observable = self.settingsDialogVisible; break;
    case 'help-dialog': observable = self.helpDialogVisible; break;
    }

    $(`#${dialogId}`)
      .css({ opacity: 1 })
      .transition({ opacity: 0 }, 250, e => {
        observable(false);
      });

    $(`#${dialogId} .form`)
      .css({ y: '0' })
      .transition({ y: '-100' }, 250);
  };

  // showHelpTab
  this.showHelpTab = function(evt, tab) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    Array.prototype.forEach.call(tabcontent, content => {
      content.style.display = 'none';
    });

    const tablinks = document.getElementsByClassName('tablinks');
    Array.prototype.forEach.call(tablinks, link => {
      link.className = link.className.replace(' active', '');
    });

    document.getElementById(tab).style.display = 'block';
    evt.currentTarget.className += ' active';
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
              'app.insertTextAtCursor(\' [[Answer:' +
                node.title() +
                '|' +
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
};
