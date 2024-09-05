const HEIGHT = '80vh';

export var ResourcesEditor = function({
  app,
  createButton,
  onLoad,
  setPluginStore,
  getGistFileUrl,
  getSelectedResourceUrl,
  updateUrlParams,
}) {
  const self = this;
  this.name = 'ResourcesEditor';
  this.resourcesFileUrl = '';
  this.resourcesFileContent = '';
  this.initResourcesFile = () => {
    return new Promise(resolve => {
      app.data.storage.getGistFiles(app.ui.openSettingsDialog).then(({ filesInGist }) => {
        const fileFound = Object.values(filesInGist).find(
          item => item.filename === 'resources.json'
        );
        if (!fileFound) {
          app.data.storage.editGistFile('resources.json', '{}').then(({file})=>{
            console.log({result})
            ToastWc.show({
                type: 'success',
                content: `Created a resources.json file`,
                time: 3000,
            });
            this.resourcesFileUrl = file.raw_url;
            resolve(file);
          });
        } else {
            this.resourcesFileUrl = fileFound.raw_url;
            return app.data.storage
              .getContentOrRaw(fileFound.content, fileFound.raw_url)
              .then(content => {
                resolve({ ...fileFound, content })
            });
        }
      });
    });
  };

  this.onCommitResourceFiles = newContent => {
    this.isBusy('Uploading changes to gist...');
    app.data.storage.editGistFile('resources.json', newContent).then(response => {
      ToastWc.show({
        type: 'info',
        content: 'Saved resources on gist',
        time: 1000,
      });
      this.isBusy('Updating list...');
      this.updateResourcesList(newContent);
    });
  };
  this.updateResourcesList = fileContents => {
    const resourcesData = JSON.parse(fileContents);
    const objectKeys = Object.keys(JSON.parse(fileContents));
    // const showThumbnails = true;//objectKeys.length < 600;
    //todo use a for loop here
    const options = objectKeys.map(fileKey => {
      const fileData = resourcesData[fileKey];
      const isCommitted = 'committed' in fileData; //add this field when saving
      return `<option value="${
        fileData.src
      }" id="${fileKey}" title="${fileKey}" style="${!isCommitted &&
        'border-left:3px solid'}content-visibility:auto;background-size: 25px;background-repeat: no-repeat;background-position-x: right;background-clip: padding-box;">
         ${fileKey} 
      </option>`;
    });
    document.getElementById(
      'resource-list-label'
    ).innerHTML = `${objectKeys.length} files`;
    document.getElementById('resources-editor-select').innerHTML = options.join(
      ''
    );
    this.onSelectScroll({
      target: document.getElementById('resources-editor-select'),
    });
    this.isBusy('');
  };
  this.onOpenResourcesEditor = async () => {
    const domPath = `app.plugins.${self.name}`;
    const { value: formValues } = await Swal.fire({
      showCloseButton: false,
      showCancelButton: false,
      title: '',
      html:`
        <div id="resourcesEditorWrapper" style="height:${HEIGHT}">
            <spinner-component></spinner-component>
            <resources-component>
              <span slot="header-area">Files in</span>
            </resources-component>
        </div>
        `,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: 'swal-wide',
      width: `${window.innerWidth - 20}px`,
      onBeforeOpen: () => {},
      onAfterClose: () => {
        updateUrlParams('selectedResource', '')
      },
      onOpen: () => {
        this.isBusy = (message) => {
          document.querySelector('spinner-component').isBusy(message);
        };
        this.isBusy('Loading files from gist...');
        document.querySelector('resources-component').addEventListener('isBusy', event => {
            this.isBusy(event.detail.message)
        });
        document.querySelector('resources-component').addEventListener('commitNewContent', event => {
            const newContent = event.detail;
            app.data.storage.editGistFile('resources.json', newContent).then(response => {
                ToastWc.show({
                type: 'info',
                content: 'Saved resources on gist',
                time: 1000,
                });
                this.isBusy('Updating list...');
                document.querySelector('resources-component').updateResourcesList(newContent);
            });
        });
        this.initResourcesFile().then((file) => {
            ToastWc.show({
                type: 'success',
                content: `Editing resources.json at\n${file.raw_url}`,
                time: 2000,
                onClick: ()=> window.open(file.raw_url, "_blank")
            });
            updateUrlParams('selectedResource', 'none');
            document.querySelector('resources-component').init({file, darkMode: app.settings.theme() === 'dracula'})
        });
      },
      preConfirm: () => {
        setPluginStore(self.name, 'resourcesEditorOpen', false);
        return '';
      },
    });
  };
  onLoad(() => {
    this.gistId = getGistFileUrl();
    if (getGistFileUrl() && getSelectedResourceUrl()) {
        this.onOpenResourcesEditor(this.resourcesFileContent);
    }

    // create a button in the file menu if in dev mode
    createButton(self.name, {
      name: 'Resources',
      attachTo: app.settings.developmentModeEnabled()
        ? 'appHeader'
        : 'fileMenuDropdown',
      onClick: 'onOpenResourcesEditor()',
      className: 'item',
      id: 'resourcesEditorButton',
      iconName: 'image',
      ...(app.settings.developmentModeEnabled()
        ? {
            className: 'bbcode-button',
            style: 'padding: 0 10px; margin-top: 3px; font-size: small',
            as: 'span',
          }
        : {}),
    });
  });
};
