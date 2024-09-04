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
  this.isBusy = (message) => {
    document.querySelector('spinner-component').isBusy(message);
    document.getElementById('resource-file-buttons').className = message ? 'disabled' : '';
  };
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

  this.onSelectResource = evt => {
    const selectedItem = evt.target.value;
    this.selectedResources = Object.values(evt.target.selectedOptions).map(
      item => item.id
    );
    if (selectedItem.startsWith('data:image')) {
      document.getElementById('selected-resource-preview').innerHTML = `
        <img src="${selectedItem}" style="pointer-events:none;max-width:60vw;object-fit: contain; border: 0;"></img>
      `;
    } else {
      document.getElementById('selected-resource-preview').innerHTML = ``;
    }
  };
  this.onRemoveResource = () => {
    const fileData = JSON.parse(this.resourcesFileContent);
    this.selectedResources.forEach(selectedResource => {
      if (selectedResource in fileData) delete fileData[selectedResource];
    });

    const newContent = JSON.stringify(fileData, null, 2);
    this.onCommitResourceFiles(newContent);
  };
  const toBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve({ src: reader.result, name: file.name });
      reader.onerror = error => reject(error);
    });
  };
  this.onAddResource = evt => {
    const newResFiles = Object.values(evt.target.files);
    const filePathsPromises = [];
    newResFiles.forEach(file => {
      filePathsPromises.push(toBase64(file));
    });
    Promise.all(filePathsPromises).then(filePaths => {
      const fileData = JSON.parse(this.resourcesFileContent);
      filePaths.forEach(file => {
        fileData[file.name] = { src: file.src, added: new Date() };
      });
      const newContent = JSON.stringify(fileData, null, 2);
    this.onCommitResourceFiles(newContent);
    });
  };
  this.onSelectScroll = () => {
    const target = document.getElementById('resources-editor-select');
    const slackSpace = window.innerHeight / 2;
    const startPos = target.scrollTop - slackSpace;
    const scrollHeight = target.clientHeight;
    const endPos = startPos + scrollHeight + slackSpace + slackSpace;
    for (let i = 0; i < target.length; i++) {
      const item = target[i];
      const itemPos = item.offsetTop;
      if (itemPos > startPos && itemPos < endPos) {
        item.style['background-image'] = `url(${item.value})`;
      } else {
        item.style['background-image'] = '';
      }
    }
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
      title: `
        <div class="flex-wrap" style="flex:1;gap: 10px; font-size: 0.9rem">
        <a id="resourcesFileLink" href="${this.resourcesFileUrl}" target="_blank" rel="noopener noreferrer">resources.json</a>
        <label for="resources-editor-select" id="resource-list-label">...</label> 
        from <a href="${this.gistId}" target="_blank" rel="noopener noreferrer">Gist</a>
        </div>
        `.replaceAll('\n', ''),
      html: `
        <div id="resources-editor" style="display:flex;height: ${HEIGHT}; width: 100%; overflow: hidden;">
          <div style="display:flex;flex:1;gap:3px;" class="row-when-narrow">
            <div style="width: 300px;display:flex;flex-direction:column;gap:3px;" class="flex-when-narrow">
              <select id="resources-editor-select" name="resources-editor-select" size="4" multiple="true">
                <option value="23432423434">...</option>
              </select>
              <div id="resource-file-buttons" style="display:flex;justify-content:space-around;">
                <input type="file" accept="image/*" multiple="true"
                  id="file-input-res"
                  style="display:none"
                />
                <label class="button" style="padding:3px;" for="file-input-res">
                  Add Files
                </label>
                <button onclick="${domPath}.onRemoveResource()">Remove</button>
              </div>
            </div>
            <spinner-component id="resourcesLoaderIsBusy" style="position:absolute;right:50%;bottom:20%"></spinner-component> 
            <div id="selected-resource-preview" style="overflow:auto;align-content:center;flex:1;border:1px solid;border-radius:0.7rem;"></div>
          </div>
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
        document
          .getElementById('file-input-res')
          .addEventListener('change', this.onAddResource);
        document
          .getElementById('resources-editor-select')
          .addEventListener('change', this.onSelectResource);
        const onUpdateScrollVis = app.utils.debounce(this.onSelectScroll, 70);
        document
          .getElementById('resources-editor-select')
          .removeEventListener('scroll', onUpdateScrollVis);
        document
          .getElementById('resources-editor-select')
          .addEventListener('scroll', onUpdateScrollVis);
        setPluginStore(self.name, 'resourcesEditorOpen', true);

        this.isBusy('Loading files from gist...');
        this.initResourcesFile().then((file) => {
            ToastWc.show({
                type: 'success',
                content: `Editing resources.json at\n${file.raw_url}`,
                time: 2000,
                onClick: ()=> window.open(file.raw_url, "_blank")
            });
            console.log({file})
            this.resourcesFileContent = file.content || '{}';
            document.getElementById('resourcesFileLink').href = file.raw_url;
            updateUrlParams('selectedResource', 'none')
            this.updateResourcesList(this.resourcesFileContent);
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
