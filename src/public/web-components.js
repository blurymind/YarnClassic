class WebComp extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement("template")
    template.innerHTML = ``
    const shadow = this.attachShadow({ mode: "open" })
    shadow.append(template.content.cloneNode(true))
    const shadowRoot = document.querySelector('web-component').shadowRoot;
  }
  // cannot pass funcs as args. Use events 
  //https://medium.com/@sudheer.gowrigari/state-management-in-web-components-crafting-cohesive-and-scalable-solutions-f4bbeb6c74d2
  method(args) {}
  // notifyParent = () => {
  //   this.dispatchEvent(new CustomEvent('stateChange', { detail: { message: 'State changed in child!' } }));
  // }
}
customElements.define('web-component', WebComp);

///////////////////// Toast web component //////////////////////
class Toast extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template")
        template.innerHTML = `
        <style>
        #simpleToast {
          visibility: hidden; /* Hidden by default. Visible on click */
          min-width: 250px; /* Set a default minimum width */
          word-break: break-word;
          background-color: MediumVioletRed; /* Background color */
          color: #fff; /* White text color */
          text-align: center; /* Centered text */
          border-radius: 2px; /* Rounded borders */
          padding: 16px; /* Padding */
          position: fixed; /* Sit on top of the screen */
          z-index: 999999; /* Add a z-index if needed */
          left: 10vw; /* Center the snackbar */
          max-width: 80vw;
          opacity: 0.9;
          bottom: 30px; /* 30px from the bottom */
          font-family: monospace;
          display: inline-flex;
          line-hight: 12px;
          border-radius: 0.4rem;
        }
        #simpleToast span {
          margin-left: 12px;
          margin-top: 2px;
        }

        #simpleToast[data-type="info"] {
          background-color: #216aa9;
        }
        #simpleToast[data-type="warning"] {
          color: black;
          background-color: yellow;
        }
        #simpleToast[data-type="danger"] {
          background-color: #de5454;
        }
        #simpleToast[data-type="success"] {
            background-color: #5cb85c;
        }

        #simpleToast.show {
          visibility: visible;
          animation: fadein 0.5s;
        }
        #simpleToast:not(.show) {
          visibility: hidden;
          animation: fadeout 0.5s 2.5s;
        }

        @-webkit-keyframes fadein {
          from {bottom: 0; opacity: 0;}
          to {bottom: 30px; opacity: 1;}
        }

        @keyframes fadein {
          from {bottom: 0; opacity: 0;}
          to {bottom: 30px; opacity: 1;}
        }

        @-webkit-keyframes fadeout {
          from {bottom: 30px; opacity: 1;}
          to {bottom: 0; opacity: 0;}
        }

        @keyframes fadeout {
          from {bottom: 30px; opacity: 1;}
          to {bottom: 0; opacity: 0;}
        }
        </style>
        <div id="simpleToast">
          <div id="toastBody">The notification message...</span>
        </div>
        `
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
        const shadowRoot = document.querySelector('toast-component').shadowRoot;
    }
    openToast({ content, type, time, onClick }) {
        const shadowRoot = document.querySelector('toast-component').shadowRoot;
        this.toast = shadowRoot.querySelector("#simpleToast");
        this.toast.className = "show";
        this.toast.setAttribute('data-type', type || '')
        this.toastBody = shadowRoot.querySelector("#toastBody");
        this.toastBody.innerHTML = content;
        const onClose = (event) => {
          this.toast.className = this.toast.className.replace("show", "");
          if(event && onClick) {onClick()}
        }
        clearTimeout(this.countdown)
        this.countdown = setTimeout(() => {
            onClose();
            clearTimeout(this.countdown)
        }, time || 3000);
        this.toast.removeEventListener('click', onClose);
        this.toast.addEventListener('click', onClose);
    }
}
customElements.define('toast-component', Toast);
window.ToastWc = {
    show: ({ content, type, time, onClick }) => {
        return new Promise(resolve => {
          document.querySelector('toast-component').openToast({ content, type, time, onClick });
          setTimeout(()=> resolve(), time + 100)
        })
    }
}

////// Spinner /////
class Spinner extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement("template")
    template.innerHTML = `
      <style>
        .spinner {
          display: inline-block;
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255,255,255,.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
          -webkit-animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { -webkit-transform: rotate(360deg); }
        }
        @-webkit-keyframes spin {
          to { -webkit-transform: rotate(360deg); }
        }
      </style>
        <div id="resourcesLoaderIsBusy" style="position:absolute;right:50%;bottom:20%">
          <div class="spinner"></div>
          <div id="resourcesLoaderIsBusyMessage">Loading</div>
      </div>
    `
    const shadow = this.attachShadow({ mode: "open" })
    shadow.append(template.content.cloneNode(true))
    const shadowRoot = document.querySelector('spinner-component').shadowRoot;
  }
  isBusy (message){
    const shadowRoot = document.querySelector('spinner-component').shadowRoot;
    this.spinner = shadowRoot.querySelector("#resourcesLoaderIsBusy");
    this.spinner.style.display = message ? 'block' : 'none';
    this.text = shadowRoot.querySelector("#resourcesLoaderIsBusyMessage");
    this.text.innerText = message || '';
  }
}
customElements.define('spinner-component', Spinner);

/////////// Resources editor /////////
class ResourcesComponent extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement("template")
    template.innerHTML = `
      <style>
      :host {
          --font-color: rgb(0 0 0 / 65%);
          --border-color: rgb(0 0 0 / 22%);
          --link-color:#1C75B9;
          --bg-color: rgb(243,243,243);
          --scroll-color: rgb(0 0 0 / 49%);
          --scroll-bg: rgb(255 255 255 / 0%);
      }
      [data-theme="dark"] {
          --font-color: #c1bfbd;
          --border-color: #c1bfbd;
          --link-color:#0a86da;
          --bg-color: #333;
          --scroll-color: #ffffff47;
          --scroll-bg: #00000024;
      }
      a {
        color: var(--link-color);
      }
      #resources-editor {
          color:var(--font-color);
      }
      div {
        scrollbar-color: var(--scroll-color) var(--scroll-bg);
      }
      div, button {
        font-size: 0.9rem;
      }
      .row-when-narrow {
        flex-direction: column;
      }
      @media only screen and (min-width: 600px) {
        .row-when-narrow {
          flex-direction: row;
        }
      }
      .flex-when-narrow {
        flex: 1;
      }
      @media only screen and (min-width: 600px) {
        .flex-when-narrow {
          flex: none;
        }
      }  
      .flex-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        align-items: center;
      }
      button,
      select,
      #selected-resource-preview,
      .button {
        outline: none;
        background: transparent;
        color: var(--font-color);
        border: 1px solid var(--border-color);
        border-radius: 2px;
      }
      :is(.add-files, button):hover {
        background-color: var(--bg-color);
      }
      </style>
      <div id="resources-editor" style="display:flex;flex-direction:column;width: 100%;height:100%; overflow: hidden;">
        <div class="flex-wrap" style="gap: 10px;padding-bottom:2px;">
          <slot name="header-area"></slot>
          <a id="resourcesFileLink" href="${this.resourcesFileUrl}" target="_blank" rel="noopener noreferrer">resources.json</a><span id="isNewFile"></span>
          <label for="resources-editor-select" id="resource-list-label">...</label> 
          from <a href="${this.gistId}" id="gistIdFileLink" target="_blank" rel="noopener noreferrer">Gist</a>
          <div id="header-buttons" class="flex-wrap" style="flex:1;gap: 10px;justify-content: end;"></div>
        </div>
        

        <div style="display:flex;flex:1;gap:3px;overflow:auto;" class="row-when-narrow">
          <div style="width: 300px;display:flex;flex-direction:column;gap:3px;" class="flex-when-narrow">
            <select id="resources-editor-select" name="resources-editor-select" size="4" multiple="true" style="flex:1;background:transparent;">
              <option value="23432423434">...</option>
            </select>
            <div id="resource-file-buttons" style="display:flex;justify-content:space-around;">
              <input type="file" accept="image/*" multiple="true"
                id="file-input-res"
                style="display:none"
              />
              <label class="button add-files" style="padding:3px;" for="file-input-res">
                Add Files
              </label>
              <button id="onRemoveButton">Remove</button>
            </div>
          </div>
          <div id="selected-resource-preview" style="overflow:auto;align-content:center;flex:1;border-radius:0.7rem;"></div>
        </div>
      </div>
  `
    const shadow = this.attachShadow({ mode: "open" })
    shadow.append(template.content.cloneNode(true))
    const shadowRoot = document.querySelector('resources-component').shadowRoot;
    /// internal Methods
    this.utils = {
      debounce: function(fun, mil) {
        var timer;    
        return function() {
          clearTimeout(timer);
          timer = setTimeout(function() {
            fun();
          }, mil);
        };
      },
    }
    this.isBusy = (message) => {
      this.notifyParent('isBusy', {message})
    }
    this.selectedResources = [];
    this.resourcesFileUrl = '';
    this.resourcesFileContent = '';
    this.gistId = '';
    this.onSelectResource = evt => {
      this.selectedResources = Object.values(evt.target.selectedOptions).map(
        (item, index) => ({id:item.id, index, src: item.dataset.src})
      );
      shadowRoot.getElementById('selected-resource-preview').innerHTML = this.selectedResources.map((resource, index) => {
        if(index > 100) return;// we need some hard limit from preventing potential crash

        const selectedItem = resource.src;
        if (selectedItem.startsWith('data:image')) {
          return `
            <img src="${selectedItem}" style="pointer-events:none;max-width:60vw;object-fit: contain; border: 0;"></img>
          `;
        } else {
          return ``;
        }
      }).join('');
    };
    this.onRemoveResource = () => {
      this.isBusy('Removing files...');
      const fileData = JSON.parse(this.resourcesFileContent);
      this.selectedResources.forEach(selectedResource => {
        if (selectedResource.id in fileData) delete fileData[selectedResource.id];
      });
  
      const newContent = JSON.stringify(fileData, null, 2);
      this.onCommitResourceFiles(newContent);
      this.isBusy('');
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
      this.isBusy('Updating file list with files...');
      Promise.all(filePathsPromises).then(filePaths => {
        const fileData = JSON.parse(this.resourcesFileContent);
        filePaths.forEach(file => {
          fileData[file.name] = { src: file.src, added: new Date() };
        });
        this.isBusy('');
        const newContent = JSON.stringify(fileData, null, 2);
        this.onCommitResourceFiles(newContent);
      });
    };
    this.onSelectScroll = () => {
      const target = shadowRoot.getElementById('resources-editor-select');
      const slackSpace = window.innerHeight / 2;
      const startPos = target.scrollTop - slackSpace;
      const scrollHeight = target.clientHeight;
      const endPos = startPos + scrollHeight + slackSpace + slackSpace;
      for (let i = 0; i < target.length; i++) {
        const item = target[i];
        const itemPos = item.offsetTop;
        if (itemPos > startPos && itemPos < endPos) {
          item.style['background-image'] = `url(${item.dataset.src})`;
        } else {
          item.style['background-image'] = '';
        }
      }
    };
    this.onCommitResourceFiles = newContent => {
      this.resourcesFileContent = newContent;
      this.notifyParent('commitNewContent', newContent)
      this.updateResourcesList(newContent, true);
    };
    this.updateResourcesList = (fileContents, isNew = false) => {
      const resourcesData = JSON.parse(fileContents);
      const objectKeys = Object.keys(JSON.parse(fileContents));
      const options = objectKeys.map(fileKey => {
        const fileData = resourcesData[fileKey];
        const isCommitted = 'committed' in fileData; //add this field when saving
        return `<option value="${fileKey}" id="${fileKey}" data-src="${fileData.src}" title="${fileKey}" style="${!isCommitted &&
          'border-left:3px solid'}content-visibility:auto;background-size: 25px;background-repeat: no-repeat;background-position-x: right;background-clip: padding-box;">
           ${fileKey} 
        </option>`;
      });
      shadowRoot.getElementById('resource-list-label').innerHTML = `${objectKeys.length} files`;
      shadowRoot.getElementById('resources-editor-select').innerHTML = options.join('');
      this.onSelectScroll({
        target: shadowRoot.getElementById('resources-editor-select'),
      });
      this.isBusy(false);
      this.setIsNew(isNew);
    };
    this.setIsNew = isNew => shadowRoot.getElementById('isNewFile').innerText = isNew ? '*' : '';
    ////methods end
    shadowRoot
      .getElementById('file-input-res')
      .addEventListener('change', this.onAddResource);
    shadowRoot
      .getElementById('resources-editor-select')
      .addEventListener('change', this.onSelectResource);
    const onUpdateScrollVis = this.utils.debounce(this.onSelectScroll, 70);
    shadowRoot
      .getElementById('resources-editor-select')
      .removeEventListener('scroll', onUpdateScrollVis);
    shadowRoot
      .getElementById('resources-editor-select')
      .addEventListener('scroll', onUpdateScrollVis);
    shadowRoot
      .getElementById('onRemoveButton')
      .addEventListener('click', this.onRemoveResource);
    this.updateRawUrl = (newUrl) => {
      shadowRoot.getElementById('resourcesFileLink').href = newUrl || 'unknown';
    }
  }

  init({ file, darkMode, headerButtons, gistId }) {//todo you cannot pass functions to web components, but can use events?
    console.log({ file, darkMode, headerButtons, gistId })
    this.resourcesFileContent = file.content || '{}';
    const shadowRoot = document.querySelector('resources-component').shadowRoot;
    this.updateRawUrl(file.raw_url);
    shadowRoot.getElementById('gistIdFileLink').href = gistId || '';
    if (darkMode) shadowRoot.getElementById('resources-editor').setAttribute("data-theme", "dark");
    this.updateResourcesList(this.resourcesFileContent, !file.raw_url);
    if(headerButtons) {
      headerButtons.forEach(button => {
        const el = document.createElement('button', {id: button.action});
        el.innerText = button.title;
        el.addEventListener('click', () => this.notifyParent('headerButtonClicked', button.action));
        shadowRoot.getElementById('header-buttons').appendChild(el);
      })
    };
  }
  notifyParent(eventKey, detail) {
    this.dispatchEvent(new CustomEvent(eventKey, { detail, composed: true }));
  }
  
}
customElements.define('resources-component', ResourcesComponent);
