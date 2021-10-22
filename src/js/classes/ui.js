export const UI = function(app) {
  const self = this;
  this.notification = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2500,
  });

  this.dispatchEvent = function (eventName, options){
    const event = new CustomEvent(eventName);
    event.options = options;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event);
    console.log('Dispatched event', eventName, event);
  };

  this.settingsDialogVisible = ko.observable(false);
  this.narrowScreenThreshold = 600;
  this.isScreenNarrow = function() {
    return $(window).width() <= self.narrowScreenThreshold;
  };

  // TODO turn all of these into a generic function
  // Markup selector -----------------------------------------------------------
  this.availableMarkupLanguages = [
    { id: 'bbcode', name: 'Bbcode' },
    { id: 'html', name: 'Html' },
  ];

  // Filetype version selector -----------------------------------------------------------
  this.availableFiletypeVersions = [
    { id: '1', name: '1' },
    { id: '2', name: '2' },
  ];

  // Theme selector -----------------------------------------------------------
  this.availableThemes = [
    { id: 'classic', name: 'Classic' },
    { id: 'blueprint', name: 'Blueprint' },
    { id: 'dracula', name: 'Dracula' },
  ];

  // Language selector --------------------------------------------------------
  this.availableLanguages = [
    //NOTE: some are disabled due to issues with nspell - see https://github.com/YarnSpinnerTool/YarnEditor/issues/263
    // { name: 'Afrikaans', id: 'af-ZA' },
    // { name: 'Bahasa Indonesia', id: 'id-ID' },
    // { name: 'Bahasa Melayu', id: 'ms-MY' },
    // { name: 'Català', id: 'ca-ES' },
    { name: 'Čeština', id: 'cs-CZ' },
    { name: 'Deutsch', id: 'de-DE' },
    { name: 'English', id: 'en-GB' },
    { name: 'Español', id: 'es-ES' },
    // { name: 'Euskara', id: 'eu-ES' },// basque
    { name: 'Français', id: 'fr-FR' },
    // { name: 'Galego', id: 'gl-ES' }, // galician
    // { name: 'Hrvatski', id: 'hr_HR' }, //croatian
    // { name: 'IsiZulu', id: 'zu-ZA' }, //zulu?
    { name: 'Íslenska', id: 'is-IS' },
    // { name: 'Italiano', id: 'it-IT' },
    // { name: 'Magyar', id: 'hu-HU' }, //hungarian
    { name: 'Nederlands', id: 'nl-NL' },
    { name: 'Norsk bokmål', id: 'nb-NO' },
    { name: 'Polski', id: 'pl-PL' },
    // { name: 'Português', id: 'pt-BR' },
    { name: 'Română', id: 'ro-RO' },
    { name: 'Slovenčina', id: 'sk-SK' },
    // { name: 'Suomi', id: 'fi-FI' }, //finnish
    { name: 'Svenska', id: 'sv-SE' },
    { name: 'Türkçe', id: 'tr-TR' },
    { name: 'български', id: 'bg-BG' },
    { name: 'Pусский', id: 'ru-RU' },
    { name: 'Српски', id: 'sr-RS' },
    { name: '한국어', id: 'ko-KR' },
    // { name: '中文', id: 'cmn-Hans-CN' },
    // { name: '日本語', id: 'ja-JP' },
    // { name: 'Lingua latīna', id: 'la' },
  ];

  // Line Style selector -----------------------------------------------------------
  this.availableLineStyles = [
    { id: 'straight', name: 'Straight Lines' },
    { id: 'bezier', name: 'Bezier Curves' },
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

    var event = new CustomEvent('settingsOpened');
    window.dispatchEvent(event);
  };

  // openHelpDialog
  this.openHelpDialog = function() {
    Swal.fire({
      title: 'Help',
      html: `
      <div style="text-align: justify">
        <p>Useful editor shortcuts:</p>
        <small>
          <ul>
            <li>Cmd/Ctrl + Left Click -- Create multiple input carets</li>
            <li>Cmd/Ctrl + Left/Right -- Caret jump word</li>
            <li>Cmd/Ctrl + Up/Down -- Scroll up/down</li>
            <li>Cmd/Ctrl + Left/Right + Shift -- Caret jump word selection</li>
            <li>Cmd/Ctrl + F -- Search</li>
            <li>Cmd/Ctrl + Alt + K -- Find All</li>
            <li>Cmd/Ctrl + H -- Search and Replace</li>
            <li>Cmd/Ctrl + A -- Select all</li>
            <li>Cmd/Ctrl + U -- To Uppercase</li>
            <li>Cmd/Ctrl + Shift + U -- To Lowercase</li>
            <li>Alt + Up/Down -- Move line(s) up/down</li>
            <li><a href="https://ace.c9.io/demo/keyboard_shortcuts.html" target="_blank">...</a></li>   
          </ul>
        </small>
        <div>How to use <a href="https://yarnspinner.dev/docs/syntax/" target="_blank">Yarn Syntax</a></div>
        <p>Runtimes:</p>
        <a href="https://github.com/YarnSpinnerTool/YarnSpinner" target="_blank">YarnSpinner (Unity3d)</a>
        <a href="https://github.com/hylyh/bondage.js" target="_blank">BondageJs (javascript)</a>
      </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'About',
      cancelButtonText: 'Close',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: 'About',
          html: `
          <div style="text-align: justify">
            <div><a href="https://github.com/YarnSpinnerTool" target="_blank">Yarn</a> was created by <a href="https://github.com/AlecHolowka" target="_blank">Alec Holowka</a></div>
            <br>
            <a href="https://github.com/YarnSpinnerTool/YarnEditor/graphs/contributors" target="_blank">Top contributors:</a>
            <small>
              <ul>
                <li><a href="https://github.com/blurymind" target="_blank">Todor Imreorov</a></li>
                <li><a href="https://github.com/daviddq" target="_blank">David Diaz</a></li>
                <li><a href="https://github.com/FaultyFunctions" target="_blank">@FaultyFunctions</a></li>
              </ul>
            </small>
            <a href="https://github.com/YarnSpinnerTool/YarnEditor/issues/new" target="_blank">Report a Bug</a>
          </div>
          `,
          showCancelButton: false,
          confirmButtonText: 'OK',
        });
      }
    });
  };

  // closeSettingsDialog
  this.closeSettingsDialog = function() {
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
  this.isDialogOpen = function() {
    return (
      self.settingsDialogVisible() ||
      (Swal.isVisible() && !Swal.isTimerRunning())
    );
  };

  // confirmMarkupConversion
  this.confirmMarkupConversion = function() {
    Swal.fire({
      title: 'Are you sure?',
      text:
        "Markup on all nodes will be modified. This can rarely result in broken texts. This operation can't be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, convert it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then(result => {
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
    const searchText =
      action === 'link'
        ? document.getElementById('linkHelperMenuFilter').value.toLowerCase()
        : document.getElementById('nodeSearchInput').value.toLowerCase();

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
        $(p).addClass(
          'item ' + app.nodes()[i].titleStyles[app.nodes()[i].colorID()]
        );

        if (action == 'link') {
          if (node.title() !== app.editing().title()) {
            p.setAttribute(
              'onclick',
              "app.insertTextAtCursor('[[" + node.title() + "]]')"
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
    $('.app-add-node').toggleClass(
      'app-add-node-alt',
      app.settings.editorSplitDirection() === 'right'
    );
    $('.app-sort').toggleClass(
      'app-sort-alt',
      app.settings.editorSplitDirection() === 'right'
    );
    $('.app-undo-redo').toggleClass(
      'app-undo-redo-alt',
      app.settings.editorSplitDirection() === 'right'
    );
    $('.app-zoom').toggleClass(
      'app-zoom-alt',
      app.settings.editorSplitDirection() === 'right'
    );
  };

  this.resetAppButtonsLocation = function() {
    $('.app-add-node').removeClass('app-add-node-alt');
    $('.app-sort').removeClass('app-sort-alt');
    $('.app-undo-redo').removeClass('app-undo-redo-alt');
    $('.app-zoom').removeClass('app-zoom-alt');
  };
};
