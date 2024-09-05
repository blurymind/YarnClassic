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
  this.selectedResourcesJson = 'resources.json';
  this.resourcesFileUrl = '';
  this.resourcesFileContent = '';
  const dbStorage = app.data.db;
  this.getVloatileResource = () => dbStorage.getDbValue(`volatileResources-${this.selectedResourcesJson}`);
  this.setVolatileResource = value => dbStorage.save(`volatileResources-${this.selectedResourcesJson}`, value);
  
  this.getFromGist = () => {
    return new Promise(resolve => {
      // todo copypasta
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
            this.setVolatileResource(file);
            resolve(file);
          });
        } else {
            this.resourcesFileUrl = fileFound.raw_url;
            return app.data.storage
              .getContentOrRaw(fileFound.content, fileFound.raw_url)
              .then(content => {
                const fileWithContent = { ...fileFound, content };
                this.setVolatileResource(fileWithContent);
                resolve(fileWithContent)
            });
        }
      });
    })
  }
  // resource in local or at gist
  this.initResourcesFile = () => {
    return new Promise(resolve => {
      this.getVloatileResource().then(volatile => {
        if(volatile && volatile.content) {
          ToastWc.show({
            type: 'success',
            content: `LOADED resources.json file`,
            time: 2000,
          });
          console.log({volatile})
          resolve(volatile);
        }
      })
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
            this.setVolatileResource(file);
            resolve(file);
          });
        } else {
            this.resourcesFileUrl = fileFound.raw_url;
            return app.data.storage
              .getContentOrRaw(fileFound.content, fileFound.raw_url)
              .then(content => {
                const fileWithContent = { ...fileFound, content };
                this.setVolatileResource(fileWithContent);
                resolve(fileWithContent)
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
      this.isBusy('')
    });
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
            this.setVolatileResource(newContent);
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
        document.querySelector('resources-component').addEventListener('headerButtonClicked', ({detail: action}) => {
           console.log({action})
           if(action === 'pull') {
            this.isBusy('Downloading changes to gist...');
            this.getFromGist().then(resolve => {
              ToastWc.show({
                type: 'success',
                content: `Re-Downloaded resources.json file`,
                time: 3000,
              });
              this.isBusy('');
            })
           }
           if(action === 'push'){
            this.getVloatileResource().then(this.onCommitResourceFiles)
           }
        });
        this.initResourcesFile().then((file) => {
            ToastWc.show({
                type: 'success',
                content: `Editing resources.json at\n${file.raw_url}`,
                time: 2000,
                onClick: ()=> window.open(file.raw_url, "_blank")
            });
            updateUrlParams('selectedResource', 'none');
            document.querySelector('resources-component').init({
              file,
              darkMode: app.settings.theme() === 'dracula',
              headerButtons: [{title: 'Load from gist', action: 'pull'}, {title: 'Save to gist', action: 'push'}]
            })
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
