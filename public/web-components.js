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
          background: inherit;
          background-clip: text;
          color: transparent;
          filter: invert(0.5) grayscale(1) contrast(9);
        }
        #resourcesLoaderIsBusyMessage {
          background: rgb(0 0 0 / 30%);
          padding: 3px;
          border-radius: 3px;
          backdrop-filter: blur(1px);
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
          --bg-active-color: rgb(100 255 255 / 70%);
      }
      [data-theme="dark"] {
          --font-color: #c1bfbd;
          --border-color: #c1bfbd;
          --link-color:#0a86da;
          --bg-color: #333;
          --scroll-color: #ffffff47;
          --scroll-bg: #00000024;
          --bg-active-color: rgb(100 255 255 / 20%);
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
        .left-area {
          width: 300px;
        }
      }
      .left-area {
        height: 100%;
        overflow: hidden; 
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
      [data-selected]{
        background-color: var(--bg-active-color);
      }
      #resources-editor-select {
        overflow: auto;
      }
      button,
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
      #selected-resource-preview {
        overflow:auto;
        align-content:center;
        text-align: -webkit-center;
        flex: 1;
        border-radius:0.7rem;
      }
      #selected-resource-preview:hover {
        flex: 8;
      }
      .preview-image {
        position: relative;
        width: fit-content;
      }
      .delete-previewed-image {
        color: rgb(255 255 255 / 48%);
        background-color: rgb(0 0 0 / 57%);
        border: 1px solid transparent;
        display: none;
        position: absolute;
        top: 1px;
        left: 1px;
      }
      .delete-previewed-image:hover {
        color: rgb(255 255 255 / 60%);
        background-color: rgb(0 0 0 / 80%);
        border: 1px solid red;
      }
      .preview-image:hover .delete-previewed-image {
        display: block;
      }
      .image-view {
        pointer-events: none;
        max-width:60vw;
        object-fit: contain;
        border: 0;
      }
      .preview-image:hover .image-view {
        max-width: 100%;
        object-fit: fill;
      }
      .preview-image:hover .video-view {
        max-width: 100%;
        object-fit: contain;
      }
      @media only screen and (max-width: 600px) {
        .preview-image:hover .image-view {
          max-width: 100%;
          object-fit: fill;
        }
        .preview-image:hover .video-view {
          max-width: 100%;
          object-fit: contain;
        }
      }
      .preview-font {
        width: 500px;
        height: 290px;
        overflow: auto;
        color: var(--font-color);
        align-content: center;
        text-align-last: start;
      }
      .video-view {
        pointer-events: auto;
        object-fit: contain;
      }
      .preview-image:hover::after {
        position: absolute;
        top: 4px;
        left: 30%;
        padding: 3px;
        display: block;
        content: ' ☆ ' attr(title) ' ☆ ';
        color: black;
        background-color: #ffffff4a;
        border-radius: 3px;
        backdrop-filter: blur(1px);
      }
      .select-option{
        text-align: left;
        content-visibility:auto;
        background-size: 25px;
        background-repeat: no-repeat;
        background-position-x: right;
        background-clip: padding-box;
      }
      .total-size-estimate-selected {
        position: absolute;
        bottom: 3px;
        right: 3px;
        color: white;
        background-color: #00000085;
        backdrop-filter: blur(1px);
        padding: 0 3px;
      }
      </style>
      <div id="resources-editor" style="display:flex;flex-direction:column;width: 100%;height:100%; overflow: hidden;">
        <div class="flex-wrap" style="gap: 10px;padding-bottom:2px;">
          <slot name="header-area"></slot>
          <a id="resourcesFileLink" href="${this.resourcesFileUrl}" target="_blank" rel="noopener noreferrer">raw url</a><span id="isNewFile"></span>
          <label for="resources-editor-select" id="resource-list-label">...</label> 
          from <a href="${this.gistId}" id="gistIdFileLink" target="_blank" rel="noopener noreferrer">Gist</a>
          <div id="header-buttons" class="flex-wrap" style="flex:1;gap: 10px;justify-content: end;"></div>
        </div>
        
        <div style="display:flex;flex:1;gap:3px;overflow:auto;" class="row-when-narrow">
          <div style="display:flex;flex-direction:column;gap:3px;" class="left-area flex-when-narrow">
            <div id="resources-editor-select" tabindex="0" style="flex:1;background:transparent;">
              <div value="23432423434" class="select-option">...</div>
            </div>
            <div id="resource-file-buttons" style="display:flex;justify-content:space-around;">
              <button id="onSelectAllButton">Select all</button>
              <input type="file" accept=".ttf,audio/*,video/*,image/*" multiple="true"
                id="file-input-res"
                style="display:none"
              />
              <label class="button add-files" style="padding:3px;" for="file-input-res">
                Add Files
              </label>
              <button id="onRemoveButton">Remove</button>
            </div>
          </div>
          <span id="selected-resource-preview"></span>
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
    this.bytesToSize = bytes => {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return 'n/a'
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
      if (i === 0) return `${bytes} ${sizes[i]})`
      return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }
    this.getBase64StringSizeInbites = string => {
      string = string.substring(string.indexOf(',') + 1, string.length)
      const bites = ((string.length * 6) / 8); // / 1000 is kb
      return bites
    }
    this.onDelete
    this.selectedResources = [];
    this.resourcesFileUrl = '';
    this.resourcesFileContent = '';
    this.gistId = '';
    const kbLimitPreview = 30000000;// 30mb for now - its not virtualized
    this.updateSelected = () => {
      const allSelected = shadowRoot.getElementById('resources-editor-select').querySelectorAll('[data-selected]')
      this.selectedResources = Object.values(allSelected).map(
        (item, index) => ({id:item.id, index, src: item.dataset.src})
      );
      let totalSize = 0//bytes = (string_length(encoded_string) - 814) / 1.37
      shadowRoot.getElementById('selected-resource-preview').innerHTML = '';
      this.selectedResources.forEach((resource, index) => {
        if(totalSize > kbLimitPreview) return;// we need some hard limit from preventing potential crash
        const selectedItem = resource.src;
        const byteSize = this.getBase64StringSizeInbites(selectedItem);
        totalSize += byteSize;
        const wrapEl = document.createElement('div');
        wrapEl.title = `${resource.id}  size: ${this.bytesToSize(byteSize)}`;

        if (selectedItem.startsWith('data:image')) {
          wrapEl.className = 'preview-image';
          const imgEl = document.createElement('img');
          imgEl.src = selectedItem;
          imgEl.className = 'image-view';
          wrapEl.appendChild(imgEl);
        }
        if (selectedItem.startsWith('data:video') || selectedItem.startsWith('data:audio')) {
          wrapEl.className = 'preview-image';
          const vidEl = document.createElement('video');
          vidEl.loop = true;
          vidEl.addEventListener('pointerenter', () => {
            vidEl.play();
          });
          vidEl.addEventListener('fullscreenchange', () => {
            vidEl.play();
          });
          vidEl.addEventListener('pointerleave', () => {
            vidEl.pause();
          });
          vidEl.controls = true;
          vidEl.src = selectedItem;
          vidEl.className = 'image-view video-view';
          wrapEl.appendChild(vidEl);
        }
        if (selectedItem.startsWith('data:font')) {
          console.log({selectedItem, resource})
          const fontFamily = resource.id.split('.')[0];
          const newFont = new FontFace(fontFamily, `url(${selectedItem})`);
          newFont.load().then(loaded_face => {
            document.fonts.add(loaded_face)
            const spanEl = document.createElement('span');
            spanEl.className = 'preview-font';
            spanEl.style.fontFamily = fontFamily;
            const innerText = 'The quick brown fox jumps over the lazy dog';
            spanEl.innerHTML = `
              font-style: normal ----
              <div style="font-weight: normal">font-weight: normal -- ${innerText}</div>
              <div style="font-weight: bold">bold -- ${innerText}</div>
              <div style="font-weight: bolder">bolder -- ${innerText}</div>
              <div style="font-weight: lighter">lighter -- ${innerText}</div>
              font-style: italic ----
              <div style="font-weight: normal;font-style: italic;">font-weight:normal -- ${innerText}</div>
              <div style="font-weight: bold;font-style: italic;">bold -- ${innerText}</div>
              <div style="font-weight: bolder;font-style: italic;">bolder -- ${innerText}</div>
              <div style="font-weight: lighter;font-style: italic;">lighter -- ${innerText}</div>
              font-style: oblique ----
              <div style="font-weight: normal;font-style: oblique;">font-weight:normal -- ${innerText}</div>
              <div style="font-weight: bold;font-style: oblique;">bold -- ${innerText}</div>
              <div style="font-weight: bolder;font-style: oblique;">bolder -- ${innerText}</div>
              <div style="font-weight: lighter;font-style: oblique;">lighter -- ${innerText}</div>
            `;
            spanEl.style.fontFamily = resource.id;
            wrapEl.appendChild(spanEl); 
        
          }).catch(function(error) {
            console.error(error)
          });
          wrapEl.className = 'preview-font preview-image';//todo rename preview-image class to something generic
        }
        const deleteEl = document.createElement('button');
        deleteEl.innerText = 'delete';
        deleteEl.className = 'delete-previewed-image';
        deleteEl.addEventListener('click', () => this.onRemoveResource(resource.id))
        wrapEl.appendChild(deleteEl);
        shadowRoot.getElementById('selected-resource-preview').appendChild(wrapEl);
      });
      const totalEstEl = document.createElement('div');
      totalEstEl.className = 'total-size-estimate-selected';
      totalEstEl.id = 'totalSizeEstimate';
      totalEstEl.innerText = `Previewing: ${this.selectedResources.length} Total size: ${this.bytesToSize(totalSize)}`
      shadowRoot.getElementById('selected-resource-preview').appendChild(totalEstEl);
    }
    this.isPointerDown = false;
    this.onPointerUp = () => {
      this.isPointerDown = false;
      this.updateSelected();
    }
    this.onPointerEnter = (evt) => {
      if(evt.target.className !== 'select-option' || !this.isPointerDown) return;
      toggleItemSelected(evt.target);
    }
    const toggleItemSelected = item => {
      item.hasAttribute('data-selected') ? item.removeAttribute('data-selected') : item.setAttribute('data-selected', true);
    }
    this.onSelectOneResource  = evt => {
      this.isPointerDown = true;
      shadowRoot.getElementById('resources-editor-select').focus();
      if(evt.target.className !== 'select-option') return;
      if(!this.isControlDown) shadowRoot.getElementById('resources-editor-select').childNodes.forEach(item => item.removeAttribute('data-selected'));
      // evt.target.setAttribute('data-selected', true)
      toggleItemSelected(evt.target);
      this.updateSelected();
    }
    this.selectAndScrollIntoView = el => {
      const scrollOpt = {
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      }
      if(!el) return;
      el.setAttribute('data-selected', true);
      setTimeout(()=> {
        el.scrollIntoView(scrollOpt);
        this.updateSelected();
        shadowRoot.getElementById('resources-editor-select').focus();
      }, 300) 
    }
    this.onKeyDown = evt => {
      evt.preventDefault();
      evt.stopPropagation()
      const key = evt.key;
      
      if(key === 'Control' || key === 'Shift') {
        console.log('->',{key})
        this.isControlDown = true;
      }
    }
    this.onKeyUp = evt => {
      evt.preventDefault();
      const key = evt.key;
      const fakeSelect = shadowRoot.getElementById('resources-editor-select');
      const allSelected = fakeSelect.querySelectorAll('[data-selected]');
      if(!this.isControlDown)fakeSelect.childNodes.forEach(item => item.removeAttribute('data-selected'));
      const selected = allSelected.length > 0 ? allSelected[allSelected.length - 1] : fakeSelect.firstChild;

      if(key === 'Control' || key === 'Shift') {
        this.isControlDown = false;
      }
      if(key === 'ArrowUp' || key === 'ArrowLeft') {
        this.selectAndScrollIntoView(selected.previousSibling || fakeSelect.lastChild);
        this.updateSelected();
      }
      if(key === 'ArrowDown' || key === 'ArrowRight') {
        this.selectAndScrollIntoView(selected.nextSibling || fakeSelect.firstChild);
        this.updateSelected();
      }
      if (key === 'Delete') {
        this.onRemoveResource();
      }
      if(key === 'a' && this.isControlDown) {
        this.onSelectAll();
      }
    }
    this.onSelectAll = () => {
      const hasSelected = !!shadowRoot.getElementById('resources-editor-select').querySelector('[data-selected]');
      shadowRoot.getElementById('resources-editor-select').childNodes.forEach(item => hasSelected ? item.removeAttribute('data-selected') : item.setAttribute('data-selected', true))
      this.updateSelected();
    }
    this.selectAfterUpdate = null;
    this.onRemoveResource = (specificFileId = null) => {
      const fakeSelect = shadowRoot.getElementById('resources-editor-select');
      const allSelected = fakeSelect.querySelectorAll('[data-selected]');
      console.log({fakeSelect, allSelected, specificFileId})
      this.isBusy('Removing files...');
      const fileData = JSON.parse(this.resourcesFileContent);
      if(specificFileId && typeof specificFileId === 'string') {
        console.log({allSelected, specificFileId})
        this.selectAfterUpdate = Object.values(allSelected).filter(item => item.id !== specificFileId);
        delete fileData[specificFileId];
        // this.selectAfterUpdate = null;
        // this.updateSelected();
      } else {
        if(allSelected.length !== this.selectedResources.length) {
          this.selectAfterUpdate = allSelected.length > 0 ? [allSelected[allSelected.length - 1].nextSibling.id ]: [fakeSelect.firstChild.id]
        }
        this.selectedResources.forEach(selectedResource => {
          if (selectedResource.id in fileData) delete fileData[selectedResource.id];
        });
      }
  
      const newContent = JSON.stringify(fileData, null, 2);
      this.onCommitResourceFiles(newContent);
      this.updateSelected();
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
      for (let i = 0; i < target.children.length; i++) {
        const item = target.children[i];
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
        const isCommitted = true;//'committed' in fileData; //add this field when saving
        return `<div value="${fileKey}" id="${fileKey}" class="select-option" data-src="${fileData.src}" title="${fileKey}" style="${!isCommitted &&
          'border-left:3px solid'}">
           ${fileKey} -- ${this.bytesToSize(this.getBase64StringSizeInbites(fileData.src))}
        </div>`;
      });
      shadowRoot.getElementById('resource-list-label').innerHTML = `${objectKeys.length} files`;
      const lastScrollTop = shadowRoot.getElementById('resources-editor-select').scrollTop;
      shadowRoot.getElementById('resources-editor-select').innerHTML = options.join('');
      shadowRoot.getElementById('resources-editor-select').scrollTop = lastScrollTop;
      this.onSelectScroll();
      this.isBusy(false);
      this.setIsNew(isNew);
      if(this.selectAfterUpdate && this.selectAfterUpdate.length > 0) {
        if(this.selectAfterUpdate.length === 1){
          this.selectAndScrollIntoView(shadowRoot.getElementById(this.selectAfterUpdate[0]));
        } else {
          this.selectAfterUpdate.forEach(el => {
            shadowRoot.getElementById(el.id).setAttribute('data-selected', true);
          })
        }
        this.selectAfterUpdate = null;
      }
    };
    this.setIsNew = isNew => shadowRoot.getElementById('isNewFile').innerText = isNew ? '*' : '';
    ////methods end
    shadowRoot
      .getElementById('file-input-res')
      .addEventListener('change', this.onAddResource);
    const onUpdateScrollVis = this.utils.debounce(this.onSelectScroll, 70);
    shadowRoot
      .getElementById('resources-editor-select')
      .removeEventListener('scroll', onUpdateScrollVis);
    shadowRoot
      .getElementById('resources-editor-select')
      .addEventListener('scroll', onUpdateScrollVis);
    shadowRoot
      .getElementById('resources-editor-select')
      .removeEventListener('pointerdown', this.onSelectOneResource);
    shadowRoot
      .getElementById('resources-editor-select')
      .addEventListener('pointerdown', this.onSelectOneResource);
    shadowRoot
      .getElementById('resources-editor-select')
      .removeEventListener('pointerover', this.onPointerEnter);
    shadowRoot
      .getElementById('resources-editor-select')
      .addEventListener('pointerover', this.onPointerEnter);
    shadowRoot
      .getElementById('resources-editor-select')
      .removeEventListener('pointerup',this.onPointerUp);
    shadowRoot
      .getElementById('resources-editor-select')
      .addEventListener('pointerup',this.onPointerUp);
    this.isControlDown = false;
    shadowRoot.addEventListener('keydown', this.onKeyDown);
    shadowRoot.addEventListener('keyup', this.onKeyUp);
    shadowRoot
      .getElementById('onRemoveButton')
      .removeEventListener('click', this.onRemoveResource);
    shadowRoot
      .getElementById('onRemoveButton')
      .addEventListener('click', this.onRemoveResource);
    shadowRoot
      .getElementById('onSelectAllButton')
      .removeEventListener('click', this.onSelectAll);
    shadowRoot
      .getElementById('onSelectAllButton')
      .addEventListener('click', this.onSelectAll);
    this.updateRawUrl = (newUrl) => {
      shadowRoot.getElementById('resourcesFileLink').href = newUrl || 'unknown';
    }
    this.setIsLocked = isLocked => {//todo make it a class
      shadowRoot.getElementById('header-buttons').style.pointerEvents = isLocked ? 'none' : 'auto';
      shadowRoot.getElementById('header-buttons').style.opacity = isLocked ? '0.8' : '1';
      shadowRoot.getElementById('resource-file-buttons').style.pointerEvents = isLocked ? 'none' : 'auto';
      shadowRoot.getElementById('resource-file-buttons').style.opacity = isLocked ? '0.8' : '1';
    }
    this.setFileContent = (file) => {
      this.updateRawUrl(file.raw_url);
      this.resourcesFileContent = file.content || '{}';
      this.updateResourcesList(file.content, !file.raw_url);
      this.updateSelected();
    }
  }

  init({ file, darkMode, headerButtons, gistId }) {//todo you cannot pass functions to web components, but can use events?
    console.log({ file, darkMode, headerButtons, gistId })
    const shadowRoot = document.querySelector('resources-component').shadowRoot;
    this.setFileContent(file);
    shadowRoot.getElementById('gistIdFileLink').href = gistId || '';
    if(!gistId) shadowRoot.getElementById('gistIdFileLink').innerText = 'Gist is missing' 
    if (darkMode) shadowRoot.getElementById('resources-editor').setAttribute("data-theme", "dark");
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
