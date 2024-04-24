const idb = require('idb');
/////////// Persist via DB api ////////////////
export const DBStorage = function(
  dbName = 'my-db',
  objectStoreName = 'preferences'
) {
  // requires https://unpkg.com/idb@5/build/iife/index-min.js
  return {
    dbName,
    objectStoreName,
    db: undefined,
    save: async function(key, value) {
      const tx = this.db.transaction(this.objectStoreName, 'readwrite');
      const store = tx.objectStore(this.objectStoreName);
      store.put({ key, value });
      return tx.complete;
    },
    load: async function(valueKey) {
      const tx = this.db.transaction(this.objectStoreName, 'readonly');
      const store = tx.objectStore(this.objectStoreName);
      const data = await store.get(valueKey);
      return data && data.value;
    },
    openDatabase: function() {
      return idb.openDB(dbName, 1, {
        upgrade: db => {
          db.createObjectStore(this.objectStoreName, { keyPath: 'key' });
        },
      });
    },
    getDbValue: function(key = this.dbName) {
      return this.openDatabase().then(_db => {
        this.db = _db;
        return this.load(key);
      });
    },
  };
};

export const FILETYPE = {
  JSON: 'json',
  XML: 'xml',
  TWEE: 'twee',
  TWEE2: 'tw2',
  UNKNOWN: 'none',
  YARN: 'yarn',
  INK: 'ink',
  INKJSON: 'ink.json',
  RENPY: 'rpy',
};
export const getFileType = filename => {
  if (!filename) return FILETYPE.UNKNOWN;

  const lowerFileName = filename.toLowerCase();
  if (lowerFileName.endsWith('.json')) return FILETYPE.JSON;
  else if (lowerFileName.endsWith('.yarn.txt')) return FILETYPE.YARN;
  else if (lowerFileName.endsWith('.ink')) return FILETYPE.INK;
  else if (lowerFileName.endsWith('.yarn')) return FILETYPE.YARN;
  else if (lowerFileName.endsWith('.xml')) return FILETYPE.XML;
  else if (lowerFileName.endsWith('.txt')) return FILETYPE.TWEE;
  else if (lowerFileName.endsWith('.tw2')) return FILETYPE.TWEE2;
  else if (lowerFileName.endsWith('.twee')) return FILETYPE.TWEE2;

  return FILETYPE.UNKNOWN;
};

export const StorageJs = (type = 'gist') => {
  if (type === 'gist') {
    return {
      getFileType,
      FILETYPE,
      lastStorageHost: 'GIST', // or LOCAL
      fileType: FILETYPE.UNKNOWN, // same as editingFormat?
      fileHandle: undefined,
      writable: undefined,
      saveAsFile: async function(suggestedName, getContent) {
        return new Promise(async (resolve, reject) => {
          const fileHandle = await window.showSaveFilePicker({
            suggestedName,
            types: [
              {
                description: 'Yarn editor files',
                accept: {
                  'text/plain': Object.values(FILETYPE).map(item => `.${item}`),
                },
              },
            ],
          });
          this.fileHandle = fileHandle;
          const chosenFileName = fileHandle.name;
          const type = getFileType(chosenFileName);
          this.fileType = type;
          const content = await getContent(type);
          const writable = await fileHandle.createWritable();
          this.writable = writable;
          await writable.write(content);
          await writable.close();

          console.log({ fileHandle, writable });
          resolve({ type, content, chosenFileName, fileHandle, writable });
        });
      },
      downloadContent: function(content, fileName) {
        const file = new File([content], fileName, {
          type: 'text/plain',
        });
        const link = document.createElement('a');
        const url = URL.createObjectURL(file);

        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      saveToCurrentFile: async function(content, fileName) {
        console.log({ writable: this.writable, handle: this.fileHandle });
        if (this.fileHandle) {
          const writable = await this.fileHandle.createWritable();
          await writable.write(content);
          await writable.close();
        } else {
          this.downloadContent(content, fileName);
        }
      },
      openFileOrFiles: async function(multiple = false) {
        // https://developer.chrome.com/docs/capabilities/web-apis/file-system-access
        // Feature detection. The API needs to be supported
        // and the app not run in an iframe.
        const supportsFileSystemAccess = 'showOpenFilePicker' in window; // &&
        // (() => {
        //   try {
        //     return window.self === window.top;
        //   } catch {
        //     return false;
        //   }
        // })();

        let fileOrFiles;
        console.log({ supportsFileSystemAccess });
        // If the File System Access API is supported…
        if (supportsFileSystemAccess) {
          try {
            // Show the file picker, optionally allowing multiple files.
            const files = await showOpenFilePicker({ multiple });
            if (!multiple) {
              // Only one file is requested.
              this.fileHandle = files[0];
              fileOrFiles = files[0];
              console.log({ fileOrFiles });
            }
          } catch (err) {
            // Fail silently if the user has simply canceled the dialog.
            if (err.name !== 'AbortError') {
              console.error(err.name, err.message);
            }
          }
          return await fileOrFiles.getFile();
          // return [fileOrFiles, fileHandle];
        }
        // Fallback if the File System Access API is not supported.
        return new Promise(resolve => {
          // Append a new `` and hide it.
          const input = document.createElement('input');
          input.style.display = 'none';
          input.type = 'file';
          document.body.append(input);
          if (multiple) {
            input.multiple = true;
          }
          // The `change` event fires when the user interacts with the dialog.
          input.addEventListener('change', () => {
            // Remove the `` again from the DOM.
            input.remove();
            // If no files were selected, return.
            if (!input.files) {
              return;
            }
            // Return all files or just one file.
            resolve(multiple ? input.files : input.files[0]);
          });
          // Show the picker.
          if ('showPicker' in HTMLInputElement.prototype) {
            input.showPicker();
          } else {
            input.click();
          }
        });
      },
      fileName: '',
      openLocalFile: function() {
        return this.openFileOrFiles().then(file => {
          this.fileType = getFileType(file.name);
          this.fileName = file.name;
          this.lastStorageHost = 'LOCAL';
          return file.text();
        });
      },
      setLastStorageHost: function(newHost) {
        this.lastStorageHost = newHost;
      },
      token: undefined,
      gistId: undefined,
      setCredentials: function(token, gistId){
        //console.log("using gist credentials", {token, gistId})
        this.token = token
        this.gistId = gistId
      },
      filesInGist: {},
      getFilesInGist: function(fileKey) {
        if (!fileKey) return this.filesInGist;
        if (fileKey in this.filesInGist) return this.filesInGist[fileKey];
        console.error(`${fileKey} not found in gist`, this.filesInGist);
      },
      getGist: function(gistId) {
        return fetch('https://api.github.com/gists/' + gistId, {
          method: 'GET',
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${this.token}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })
          .then(data => {
            console.log('GOT -- ', { data });
            return data.json();
          })
          .then(content => {
            console.log('NEW from get::', { content });
            this.filesInGist = content.files;
            const inputOptions = {};
            Object.keys(this.filesInGist).forEach(key => {
              inputOptions[key] = key;
            });
            this.setLastStorageHost('GIST');
            return {
              body: content,
              filesInGist: this.filesInGist,
              inputOptions,
              fileList: Object.keys(this.filesInGist),
            };
          });
      },
      hasGistSettings: function() {
        return this.gistId && this.gistId.length > 0;
      },
      getGistFile: function() {
        return this.getGist(this.gistId);
      },
      getContentOrRaw: function(content, rawUrl) {
        // sometimes github comes back empty handed for content, but has raw_url
        return new Promise((resolve, reject) => {
          if (!content && rawUrl) {
            fetch(rawUrl)
              .then(file => {
                this.fileType = getFileType(file.name);
                this.fileName = file.name;
                this.fileHandle = file;
                this.lastStorageHost = 'GIST';
                return file.text();
              })
              .then(rawContent => {
                resolve(rawContent);
              });
          } else {
            resolve(content);
          }
        });
      },
      editGist: function(gistId, fileName, content) {
        console.log({ gistId, fileName, content });
        return fetch('https://api.github.com/gists/' + gistId, {
          method: 'POST',
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${this.token}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
          body: JSON.stringify({
            description: 'upload data from api',
            public: false,
            files: { [fileName]: { content } },
          }),
        }).then(res => {
          this.setLastStorageHost('GIST');
          return res.json();
        });
      },
      editGistFile: function(fileName, content) {
        return this.editGist(this.gistId, fileName, content);
      },
      FILETYPE,
    };
  } else if (type === 'github') {
    // todo implement
    // const getFile = function(data) {
    //   return fetch(
    //     `https://api.github.com/repos/${data.owner}/${data.repo}/contents/${data.name}`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/vnd.github+json',
    //         Authorization: `Bearer ${data.token}`,
    //       },
    //     }
    //   ).then(res => res.json());
    // };
    // const setFile = function(data) {
    //   //todo this wont work unless adding sha or deleting the file first
    //   console.log({ setToFile: data.content, data });
    //   return fetch(
    //     `https://api.github.com/repos/${data.owner}/${data.repo}/contents/${data.name}`,
    //     {
    //       method: 'PUT',
    //       headers: {
    //         Accept: 'application/vnd.github+json',
    //         Authorization: `Bearer ${data.token}`,
    //       },
    //       body: JSON.stringify({
    //         message: 'upload data from api',
    //         content: data.content,
    //         sha: data.sha,
    //       }),
    //     }
    //   ).then(res => res.json());
    // };
    // return { getFile, setFile, credentials, setCredentials };
  }
  return { getFile: () => {}, setFile: () => {}, credentials, setCredentials };
};
