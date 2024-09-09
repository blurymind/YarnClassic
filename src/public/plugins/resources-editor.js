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
  this.resourcesFileUrl = '';// todo this should be written in the file itself instead. It doesnt persist between reloads atm
  this.resourcesFileContent = '';
  const dbStorage = app.data.db;
  this.getVloatileResource = () => dbStorage.getDbValue(`volatileResources-${this.selectedResourcesJson}`);
  this.setVolatileResource = value => dbStorage.save(`volatileResources-${this.selectedResourcesJson}`, value);
  
  this.createOrEditGistFile = (resolve, reject) => {
    app.data.storage.getGistFiles(reject).then(({ filesInGist }) => {
      const fileFound = Object.values(filesInGist).find(
        item => item.filename === 'resources.json'
      );
      if (!fileFound) {
        app.data.storage.editGistFile('resources.json', '{}').then(({file, response})=>{
          if(response.ok) {
            ToastWc.show({
              type: 'success',
              content: `Created a resources.json file`,
              time: 3000,
            });
            this.resourcesFileUrl = file.raw_url;
            this.setVolatileResource(file);
            resolve(file);
          } else {
            const newFile = {filename: 'resources.json', content: ''};
            this.setVolatileResource(newFile);
            resolve(newFile)
          }
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
  }
  this.getFromGist = () => {
    return new Promise((resolve, reject) => {
      return this.createOrEditGistFile(resolve, reject);
    })
  }
  // resource in local or at gist
  this.initResourcesFile = (createVolatile = false) => {
    return new Promise((resolve, reject) => {
      this.getVloatileResource().then(volatile => {
        if(volatile && volatile.content) {
          console.log({volatile})
          resolve(volatile);
          return
        }
        if(createVolatile) {
          const newFile = {
            filename:'resources.json',
            content: '{}',
          }
          this.setVolatileResource(newFile);
          resolve(newFile);
          return
        }
        return this.createOrEditGistFile(resolve, reject);
      })
    });
  };

  this.onCommitResourceFiles = newContent => {
    this.isBusy('Uploading changes to gist...');
    document.querySelector('resources-component').setIsLocked(true);
    app.data.storage.editGistFile('resources.json', newContent).then(({ok, gistId, file}) => {
      if(ok){
        ToastWc.show({
          type: 'info',
          content: 'Saved resources on gist',
          time: 1000,
        });
        this.resourcesFileUrl = file.raw_url;
        document.querySelector('resources-component').setIsNew(false);
        document.querySelector('resources-component').updateRawUrl(file.raw_url);
      } else {
        ToastWc.show({
          type: 'error',
          content: `Could not save changes to ${gistId}!`,
          time: 3000,
        });      
      }
      document.querySelector('resources-component').setIsLocked(false);
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
            <spinner-component style="
              position: absolute;
              top: 50%;
              left: 50%;
              z-index: 999;
            "></spinner-component>
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
        document.querySelector('resources-component').addEventListener('commitNewContent', event => {//raw
            const newContent = event.detail;
            this.setVolatileResource({
              filename:'resources.json',
              content: newContent, // todo not having raw_url can be used to detect if new file
            });
        });
        document.querySelector('resources-component').addEventListener('headerButtonClicked', ({detail: action}) => {
           if(action === 'pull') {
            this.isBusy('Downloading changes to gist...');
            this.getFromGist().then(file => {
              document.querySelector('resources-component').updateResourcesList(file.content);
              ToastWc.show({
                type: 'success',
                content: `Re-Downloaded resources.json file`,
                time: 3000,
              });
              this.isBusy('');
              document.querySelector('resources-component').setFileContent(file);
              this.setVolatileResource(file);
            }).catch(() => {
              ToastWc.show({
                type: 'error',
                content: `Could not Load changed from Gist file!`,
                time: 3000,
              });
              this.isBusy('');
            })
           }
           if(action === 'push'){
            this.getVloatileResource().then(result=> this.onCommitResourceFiles(result.content))
           }
        });
        this.initResourcesComponent = (file) => {
          updateUrlParams('selectedResource', 'none');
          document.querySelector('resources-component').init({
            file,
            gistId: this.gistId ,
            darkMode: app.settings.theme() === 'dracula',
            headerButtons: [{title: 'Load from gist', action: 'pull'}, {title: 'Save to gist', action: 'push'}]
          })
        }
        this.initResourcesFile().then(file => {
            this.resourcesFileUrl = file.raw_url;
            ToastWc.show({
                type: 'success',
                content: `Editing resources.json at\n${file.raw_url || '---'}`,
                time: 2000,
                onClick: ()=> window.open(file.raw_url, "_blank")
            });
            this.initResourcesComponent(file);
        }). catch(error=> {
          ToastWc.show({
            type: 'error',
            content: error,
            time: 2000
          }).then(()=> {
            ToastWc.show({
              type: 'info',
              content: 'Yarn will store resources in cache for now',
              time: 2000
            })
          });
          this.isBusy('');
          this.initResourcesFile(true).then(this.initResourcesComponent);
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
