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
  this.selectedResourcesJson = 'resources.res.json';
  this.resourcesFileUrl = '';// todo this should be written in the file itself instead. It doesnt persist between reloads atm
  this.resourcesFileContent = '';
  const dbStorage = app.data.db;
  this.getVloatileResource = (name = '') => dbStorage.getDbValue(`volatileResources-${name || this.selectedResourcesJson}`);
  this.setVolatileResource = (value, name = '') => dbStorage.save(`volatileResources-${name || this.selectedResourcesJson}`, value);
  this.deleteVolatileResource = (name = '') => dbStorage.save(`volatileResources-${name || this.selectedResourcesJson}`, undefined);
  this.getVolatileResourcesList = () => dbStorage.getDbValue(`volatileResources`);
  this.setVolatileResourcesList = (key, add = true) => {
    return this.getVolatileResourcesList().then(data => {
        if(!data) data = new Set([]);
        if(add) {
          data.add(key)
        } else {
          data.delete(key)
        }
        return dbStorage.save(`volatileResources`, data);
      })
  };

  this.getNewresourceFileContent = () => '{}';
  this.createOrEditGistFile = (resolve, reject) => {
    app.data.storage.getGistFiles(reject).then(({ filesInGist }) => {
      const fileFound = Object.values(filesInGist).find(
        item => item.filename === this.selectedResourcesJson
      );
      if (!fileFound) {
        app.data.storage.editGistFile(this.selectedResourcesJson, this.getNewresourceFileContent()).then(({file, response})=>{
          if(response.ok) {
            ToastWc.show({
              type: 'success',
              content: `Created a ${this.selectedResourcesJson} file..`,
              time: 3000,
            });
            this.resourcesFileUrl = file.raw_url;
            this.setVolatileResource(file);
            resolve(file);
          } else {
            const newFile = {filename: this.selectedResourcesJson, content: ''};
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
      const getOrCreateVolatile = () => {
        return this.getVloatileResource().then(volatile => {
          if(volatile && volatile.content) {
            console.log({volatile})
            this.onUpdateResourcesList();
            resolve(volatile);
            return
          }
          if(createVolatile) {
            const newFile = {
              filename: this.selectedResourcesJson,
              content: this.getNewresourceFileContent(),
            }
            this.setVolatileResource(newFile);
            resolve(newFile);
            return
          }
          return this.createOrEditGistFile(resolve, reject);
        })
      }
      this.getVolatileResourcesList().then(volatileResourcesList => {
        console.log({volatileResourcesList})
        if(!volatileResourcesList) {
          this.setVolatileResourcesList(this.selectedResourcesJson).then(()=> {
            return getOrCreateVolatile()
          })
        }
        return getOrCreateVolatile();
      })
    });
  };

  this.onCommitResourceFiles = newContent => {
    this.isBusy('Uploading changes to gist...');
    document.querySelector('resources-component').setIsLocked(true);
    app.data.storage.editGistFile(this.selectedResourcesJson, newContent).then(({ok, gistId, file}) => {
      if(!gistId) {
        ToastWc.show({
          type: 'error',
          content: 'No Gist id provided to save to. Configure it in the settings dialog.',
          time: 3000,
        });
      } else if(ok){
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
          content: `Could not save changes to Gist id: ${gistId}!`,
          time: 3000,
        });      
      }
      document.querySelector('resources-component').setIsLocked(false);
      this.isBusy('')
    });
  };

  this.onGetFromGist = () => {
    // todo make this less hideous
    this.getVolatileResourcesList().then(volatileResourcesList => {
      app.data.storage.getGistFiles().then(({ filesInGist }) => {
        // try to detect json resource map files in the gist
        const filesFromGist = [];
        const promises = [];
        Object.values(filesInGist).forEach(
          item => {
            if(item.filename.endsWith('.res.json') && !volatileResourcesList.has(item.filename)) {
              filesFromGist.push(item);
              promises.push(app.data.storage.getContentOrRaw(item.content, item.raw_url, console.error));
            }
          }
        );
        Promise.all(promises).then((files) => {
          files.forEach((content, index) => {
            const file = {...filesFromGist[index], content}
            const newFileName = file.filename;
            console.log({file, newFileName, filesFromGist})
            if(!newFileName) return;
            this.setVolatileResource(file, newFileName).then(() => {
              if(index === files.length -1) {
                this.setVolatileResourcesList(newFileName).then(()=> {
                  this.onUpdateResourcesList(newFileName);
                  this.onSetEditingFile(newFileName);
                  ToastWc.show({
                    type: 'success',
                    content: `Added ${files.length} files..\n${filesFromGist.map(item=>item.filename).join('\n')}`,
                    time: 3000,
                  });
                })
              }
            })
          })
        })
      })
    })
  }
  this.onUpdateResourcesList = () => {
    this.getVolatileResourcesList().then(resourcesList => {
      document.getElementById("edited-resources").innerHTML = Array.from(resourcesList).map(key => `<option value="${key}">${key}</option>`).join('')
    })
  }
  this.onSetEditingFile = (newFileName = '') => {
    const fileName = newFileName || document.getElementById('edited-resources').value;
    this.selectedResourcesJson = fileName;
    this.getVloatileResource(fileName).then(file => {
      console.log('Set', {fileName, file})
      document.querySelector('resources-component').updateResourcesList(file.content);
      document.getElementById("edited-resources").value = this.selectedResourcesJson;
      document.querySelector('resources-component').updateRawUrl(file.raw_url);
    });
  }
  this.onAddNewFile = () => {
    // ask for filename - (adds js at the end)
    let newFileName = prompt("Create a new resource file?\nAllowed formats: .res.json\nReserved names: resources.res.json", 'images.res.json');
    if (newFileName) {
      newFileName = newFileName.replace(/\s+/g, '').replace(/\//g, '').trim();
      newFileName = newFileName.endsWith('.res.json') ? newFileName : `${newFileName}.res.json`;
      this.getVolatileResourcesList().then(volatileResources => {
        if (volatileResources.has(newFileName)) {
          alert(`${newFileName} already exists.\nPlease choose another name..`)
          return;
        }
        const newFileData = { content: this.getNewresourceFileContent(), filename: newFileName }
        this.setVolatileResource(newFileData, newFileName).then(() => {
          this.setVolatileResourcesList(newFileName).then(()=> {
            this.onUpdateResourcesList(newFileName);
            this.onSetEditingFile(newFileName);
          })
        })
      })
    }
  }
  this.onRemoveSelectedFile = () => {
    const fileName = document.getElementById('edited-resources').value;
    if(fileName === 'resources.res.json') {
      alert(`Not allowed to delete resources.res.json placeholder`);
      return;
    }
    const willDelete = confirm(`Are you sure you want to delete this resources file:\n${fileName}?`)
    if (willDelete) {
      this.getVolatileResourcesList().then(oldList =>{
        const resourcesList = Array.from(oldList);
        let nextFileIndex = resourcesList.indexOf(fileName) - 1;
        if(nextFileIndex < 0) nextFileIndex = 0;
        this.setVolatileResourcesList(fileName, false).then(() => {
          this.onUpdateResourcesList();
          this.deleteVolatileResource(fileName);
          this.onSetEditingFile(resourcesList[nextFileIndex]);
          // todo also ask if they wish to delete if from gist
          const willDeleteFromGist = confirm(`Would you also like to delete this resource file from the Gist?\n${fileName}?`);
          if(willDeleteFromGist) {
            alert('TODO')
          }
        })
      })
    }
  }
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
              <div slot="header-area" style="display:flex;gap: 12px;flex:1;max-width: 320px;">
                <select id="edited-resources" onchange="${domPath}.onSetEditingFile()">
                  <option value="resources.res.json">resources.res.json</option>
                </select>
                <div class="button-group-rounded" id="add-remove-resource-file" style="flex-wrap:nowrap">
                  <button id="add-resource-file" onclick="${domPath}.onAddNewFile()" title="Add">+</button>
                  <button id="remove-resource-file" onclick="${domPath}.onRemoveSelectedFile()" title="remove">─</button>
                  <button id="remove-resource-file" onclick="${domPath}.onGetFromGist()" title="search for new in gist"> ⟳ </button>
                </div>
              </span>
            </div>
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
              filename: this.selectedResourcesJson,
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
                content: `Re-Downloaded ${this.selectedResourcesJson} file`,
                time: 3000,
              });
              this.isBusy('');
              document.querySelector('resources-component').setFileContent(file);
              this.setVolatileResource(file);
            }).catch(error => {
              ToastWc.show({
                type: 'error',
                content: `Could not Load changed from Gist file!\n${error}..`,
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
            headerButtons: [{title: 'Pull from gist', action: 'pull'}, {title: 'Commit to gist', action: 'push'}]
          })
        }
        this.initResourcesFile().then(file => {
            this.resourcesFileUrl = file.raw_url;
            ToastWc.show({
                type: 'success',
                content: `Editing ${this.selectedResourcesJson} at\n${file.raw_url || '---'}`,
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
