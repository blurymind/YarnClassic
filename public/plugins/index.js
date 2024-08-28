import { Runner } from './runner';
import { PluginEditor } from './plugin-editor';

const PLUGINS = [Runner, PluginEditor];

const PublicLibs = {}
Promise.all(["public/libs/ink-full.js", "public/libs/bondage.min.js"].map(u=>fetch(u))).then(responses =>
  Promise.all(responses.map(res => res.text()))
).then(texts => {
  PublicLibs.ink = texts[0];
  PublicLibs.yarn = texts[1];
})

async function importModuleWeb(
  script,
  modulePath,
  { forceUpdate } = { forceUpdate: false }
) {
  const { AsyncFunction, cache } = globalThis.__import__ || {
    AsyncFunction: Object.getPrototypeOf(async function () { }).constructor,
    cache: new Map(),
  };
  // Build new AsyncFunction and evaluate it
  const fn = new AsyncFunction('module', 'importModuleWeb', script);
  const module = { exports: {}, filename: modulePath }; // module-API

  // Execute user code
  await fn(module, importModuleWeb);
  return module.exports;
}

export var Plugins = function (app) {
  const self = this;

  const getPluginStore = pluginName => {
    if (!self.pluginStorage) self.pluginStorage = {};
    if (!self.pluginStorage[pluginName]) {
      self.pluginStorage = {
        ...self.pluginStorage,
        [pluginName]: {},
      };
    }
    return this.pluginStorage[pluginName];
  };
  const setPluginStore = (pluginName, key, val) => {
    const storeVals = { ...getPluginStore(pluginName), [key]: val };
    self.pluginStorage = {
      ...self.pluginStorage,
      [pluginName]: storeVals,
    };
  };

  window.addEventListener('yarnLoadedData', e => {
    if (app.data.documentHeader() !== null) {
      const documentHeader = app.data.documentHeader();
      if ('pluginStorage' in documentHeader)
        self.pluginStorage = documentHeader.pluginStorage;
    }
  });
  window.addEventListener('newYarnFileStarted', e => {
    self.pluginStorage = {};
  });

  const addSettingsItem = ({
    title,
    valueKey,
    defaultValue,
    optionsKey,
    options,
    setterKey,
    settingsColumn,
  }) => {
    app.settings[valueKey] = ko
      .observable(app.settings.storage.getItem(valueKey) || defaultValue)
      .extend({ persist: valueKey });

    app.ui[optionsKey] = options;
    app[setterKey] = function (value, e) {
      const newValue = e ? e.target.value : value;
      app.settings[valueKey](newValue);
    };

    // Dom rendering helper methods
    window.addEventListener('settingsOpened', () => {
      const options = app.ui[optionsKey]
        .map(
          option =>
            `<option value="${option.id}" ${option.id === app.settings[valueKey]() ? 'selected="true"' : ''
            }>${option.name}</option>`
        )
        .join('');
      const settingsHtml = `
              <label class="settings-label" for="theme">${title}</label>
              <div class="settings-value markup">
                <select id="mySelect">
                   ${options}
                </select>
              </div>
    `;
      const settingsElement = document.createElement('div');
      settingsElement.className = 'settings-item';
      settingsElement.innerHTML = settingsHtml;
      document
        .getElementById(`settingsColumn${settingsColumn || 'A'}`)
        .appendChild(settingsElement);
      document.getElementById('mySelect').addEventListener('change', e => {
        app[setterKey](false, e);
      });
    });
  };

  const createButton = (
    pluginName,
    {
      name,
      iconName,
      onClick,
      attachTo,
      className = 'item bbcode-button',
      title,
      onPointerDown,
      onDoubleClick,
      id,
      as ='span',
      style = ''
    }
  ) => {
    const autoId = id || name || title || iconName;
    if (document.getElementById(autoId) !== null) {
      console.error(`Plugin button creation: Button with the id ${autoId} already exists. Skip creating it.`)
      return;
    }

    const button = document.createElement(as);
    button.id = autoId;
    button.innerHTML = `
      <span class="item ${className || ''}" style="${style}" title="${title || ''}" ${onClick ? `onclick="click: app.plugins.${pluginName}.${onClick}"` : ''
      }
       ${onPointerDown
        ? ` onpointerdown="app.plugins.${pluginName}.${onPointerDown}"`
        : ''
      }
              ${onDoubleClick
        ? `ondblclick="app.plugins.${pluginName}.${onDoubleClick}"`
        : ''
      }
       >
        <svg class="icon menu-icon icon-file-${iconName} icon-lg icon-fw" style="color:currentColor;"><use xlink:href="public/icons.svg#icon-${iconName}"></use></svg>
        ${name || ''}
      </span>
    `;
    document.getElementById(attachTo).appendChild(button);

    return button;
  };

  const createToggle = (
    pluginName,
    {
      id,
      attachTo,
      className,
      title,
      tooltipId,
      toggleValueKey,
      onToggle,
      enableKey,
      iconName,
      name
    }
  ) => {
    const autoId = id || name || title || iconName;
    if (document.getElementById(autoId) !== null) {
      console.error(`Plugin button creation: Button with the id ${autoId} already exists. Skip creating it.`)
      return;
    }

    const toggleButton = document.createElement('span');
    toggleButton.id = autoId;
    toggleButton.className = 'styled-checkbox';
    toggleButton.innerHTML = `
            <input class="styled-checkbox" type="checkbox" id="${toggleValueKey}" data-bind="checked: app.plugins.${pluginName}.${enableKey}, event: { change: app.plugins.${pluginName}.${onToggle} }"></input>
            <label for="${toggleValueKey}" title="${title}" class="${className}"><span title="${title}" class="button-bubble" id="${tooltipId}"></span>
              <svg class="icon icon-${iconName} icon-fw icon-lg"><use xlink:href="public/icons.svg#icon-${iconName}"></use></svg>
            </label>
    `;
    document.getElementById(attachTo).appendChild(toggleButton);

    return toggleButton;
  };

  // yarneditor lifecycle events
  const onYarnInPreviewMode = cb => {
    window.addEventListener('yarnSavedNode', e => {
      cb(e);
    });
  };
  const onYarnSavedNode = cb => {
    window.addEventListener('yarnInPreviewMode', e => {
      cb(e);
    });
  };
  const onYarnLoadedData = cb => {
    window.addEventListener('yarnLoadedData', e => {
      cb(e);
    });
  };
  const onYarnSetDocumentType = cb => {
    window.addEventListener('yarnSetDocumentType', e => {
      cb(e);
    });
  };
  const onYarnEditorOpen = cb => {
    window.addEventListener('yarnEditorOpen', e => {
      cb(e);
    });
  };
  const onLoad = cb => {
    window.addEventListener('DOMContentLoaded', e => {
      cb(e);
    });
  };
  const onYarnSetLanguage = cb => {
    window.addEventListener('yarnSetLanguage', e => {
      cb(e);
    });
  };
  const onYarnLoadedStateFromLocalStorage = cb => {
    window.addEventListener('yarnLoadedStateFromLocalStorage', e => {
      cb(e);
    });
  };
  const onYarnSavedStateToLocalStorage = cb => {
    window.addEventListener('yarnSavedStateToLocalStorage', e => {
      cb(e);
    });
  };
  const onKeyUp = cb => {
    $(document).on('keyup', e => {
      cb(e);
    });
  };
  const onKeyDown = cb => {
    $(document).on('keydown', e => {
      cb(e);
    });
  };

  const dbStorage = app.data.db;
  const getVloatilePlugins = () => dbStorage.getDbValue('volatilePlugins');
  const setVloatilePlugins = value => dbStorage.save('volatilePlugins', value);
  const setVloatilePlugin = (key, value) => {
    return getVloatilePlugins().then(prev => {
      prev = prev || {};
      return dbStorage.save('volatilePlugins', {
        ...prev,
        [key]: { ...prev[key], ...value },
      });
    });
  };
  const deleteVolatilePlugin = (key) => {
    return getVloatilePlugins().then(prev => {
      if (key in prev) delete prev[key];
      return dbStorage.save('volatilePlugins', {
        ...prev,
      });
    });
  }

  const isGistTokenInvalid = () => {
    return app.data.storage.getIsTokenInvalid();
  }
  const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
  const gistPluginsId = urlParams.get('gistPlugins');
  const gistPluginsFileUrl = urlParams.get('pluginFile');
  const pluginModeUrl = urlParams.get('mode');

  const updateUrlParams = (key, value) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    window.history.replaceState(null, null, url); // or pushState
  }
  this.rawUrls = {};
  const getGistPluginFiles = () => {
    return new Promise((resolve) => {
      const gistId = gistPluginsId || app.settings.gistPluginsFile();
      app.data.storage
        .getGist(gistId)
        .then(({ filesInGist }) => {
          const promises = Object.values(filesInGist)
            .filter(gistFile => gistFile.language === 'JavaScript' || gistFile.filename.endsWith(".js"))
            .map(gistFile => {
              this.rawUrls[gistFile.filename] = gistFile.raw_url;
              return app.data.storage
                .getContentOrRaw(gistFile.content, gistFile.raw_url)
                .then(content => ({ ...gistFile, content }));
            });
          resolve(Promise.all(promises));
        });
    });
  };
  
  const getGistPluginFile = (fileName) => {
    const gistId = gistPluginsId || app.settings.gistPluginsFile();
    const rawUrl = this.rawUrls[fileName]
    if(!rawUrl) return Promise.resolve('');
    return app.data.storage.getGistFileFromRawUrl(rawUrl);
  }

  const saveGistPlugin = (fileName, contents) => {
    console.log({gistId: app.settings.gistPluginsFile(), fileName, contents})
    return app.data.storage.editGist(app.settings.gistPluginsFile(), fileName, contents).then(response=> {
      this.rawUrls[fileName] = response.file.raw_url;
      return response;
    })
  }
  const getPluginsList = (includeGistFiles = false) => {
    return new Promise(resolve=> {
      return getVloatilePlugins().then(volatilePlugins => {
        if(!includeGistFiles) return resolve(volatilePlugins);

        // we want to minimize doing this since github will start thinking its being spammed and time out
        console.log("---- fetching from gist files ----");
        return getGistPluginFiles().then(gistPlugins => {          
          const result = {}
          gistPlugins.forEach(item=> {
            result[item.filename] = item
          })
          // if gist plugins are fetched, load them, but spread the volatile ones ontop as more recent
          resolve({...result,...volatilePlugins})
        })
        // if no gist plugins are fetched, load the local volatile ones still
        .catch(()=> resolve(volatilePlugins) )
      })
    })
  }

  const deleteGistPlugin = (fileName) => {
    return app.data.storage.deleteGistFile(gistPluginsId || app.settings.gistPluginsFile(), fileName);
  }
 
  const getExtensionScriptData = (fileContents) => {
    try {
      const extension = new Function("parameters", `return ${fileContents}`);//();
      //console.log({isFunction: typeof extension === 'function', fileContents})
      if(typeof extension === 'function') {
        const data = extension();
        if(data) {
          const StartIndex = fileContents.indexOf('script:');// todo this is a bit fragile
          const result = data() || {};
          const scriptStartLn = fileContents.substring(0, StartIndex).split('\n').length
          //console.log({fileContents, StartIndex, scriptStartLn})
          return [{ console: false, ...result, scriptStartLn }, fileContents];
        }
      }
    } catch (e){
      console.log({e, fileContents});
      return [null, fileContents];
    }
    return [null, fileContents]
  }

const getStoryParserModuleCode = (parser) => {
  if (parser === 'ink') return `<script id="inkParserInclude">${PublicLibs.ink}</script>`
  if (parser === 'yarn') return `<script id="yarnParserInclude">${PublicLibs.yarn}</script>`
  return '';
}
const getFunctionBody = (func = ()=>{}) => {
  const entire = func.toString(); 
  const body = func.toString().slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
  return body;
}
  const getPreviewHtml = (data, otherFiles, yarnData = {}) => {
    // includes: ['some-other-file.js'] - with moduleName (can be used to create an instance) or no moduleName (just dump script body)
    const localModules = (data.modules || []).filter(item => !item.includes('/') && item in otherFiles &&  otherFiles[item].content).map(item => {
      try {
        const [includeData, textConent] = getExtensionScriptData(otherFiles[item].content);
        console.log(item, "---->",{includeData})
        if(includeData && 'script' in includeData) {
          const functionContents = includeData.script.toString()
          const body = functionContents.startsWith('function ') ? `${functionContents}` : getFunctionBody(includeData.script);
          return {id:item ,body};
        } else if (textConent) {
          return {id: item, body: textConent}
        }

      } catch(e){
        return false
      }
    }).filter(Boolean)
  
    // modules: ['https://repo.com/some-other-module.js'] - type="module" only when its hosted somewhere btw
    const remoteModules =(data.modules || []).filter(item=>item.includes('/'))
    console.log({data, otherFiles, localModules,remoteModules})
    return `
    <head>
      <style>
        body,
        head {
          width: 100%;
          height: 100%;
        }
      </style>
    </head>
    <body>
      <script id="yarnDataJson">
        const yarnData = ${yarnData};
      </script>
      ${data.html || data.body || ''}
      ${getStoryParserModuleCode(data.parser)}
      ${remoteModules.map(item => `<script src="${item}" id="${item}"></script>`).join("")}
      ${localModules.map(item => `<script id="${item.id}">${item.body}</script>`).join("")}
      <script type="module">
       (${data.script || ''})()
      </script>
      <script id="handle-fallback-message">
        const logOfConsole = [];
        const logOfErrors = [];
        const onUpdateConsoleLogsInternal = () => {
          ${data.console === false && 'if(logOfErrors.length === 0)return;'}
          const logMessage = document.querySelector('#logMessage');
          logMessage.style.display = 'block'
          const colors = {string: '#00ff00', number: 'red', boolean: '#00fff3', warning: '#ffff008a', log: '#33ff0054', error: 'red', info: '#002bff8a'}
          logMessage.innerHTML = '<p>-- console logs --</p>' + logOfConsole.map(
            log => Object.values(log.arguments).map(
              arg => {
                let message = '';
                try {
                  message = typeof arg == 'object' ? JSON.stringify(arg) : arg;
                } catch(e){};
                if(!message) return '';
                return typeof arg == 'object' ? '<pre style="color:white">' + message +  '</pre>' : '<p style="color:'+ colors[typeof arg] + ';border-right:6px solid ' + colors[log.type] + '">' + message + '</p>'
              }).join('') // join args
            ).join('')//join logs
        }
        window.addEventListener("error", (e) => {
          const errorMessage = document.querySelector('#errorMessage');
          errorMessage.innerHTML = e.message + "<br>Line: " + (e.lineno - 60 + 1 + ${data.scriptStartLn}) + "<br>Col: " + (e.colno - 4) + "<br> Please see console for more details..";
          errorMessage.style.display = 'block';

          logOfConsole.push({type: 'error', arguments: [e.message]});
          logOfErrors.push({type: 'error', arguments: [e.message]});
          onUpdateConsoleLogsInternal();
        });
        
        const _log = console.log,
            _warn = console.warn,
            _info = console.info,
            _error = console.error;
        console.log = function() {
            logOfConsole.push({type: 'log', arguments: arguments});
            onUpdateConsoleLogsInternal();
            return _log.apply(console, arguments);
        };
        console.warn = function() {
            logOfConsole.push({type: 'warning', arguments: arguments});
            onUpdateConsoleLogsInternal();
            return _warn.apply(console, arguments);
        };
        console.error = function() {
            logOfConsole.push({type: 'error', arguments: arguments});
            onUpdateConsoleLogsInternal();
            return _error.apply(console, arguments);
        };
        console.info = function() {
          logOfConsole.push({type: 'info', arguments: arguments});
          onUpdateConsoleLogsInternal();
          return _info.apply(console, arguments);
        };
      
      </script>
      <div style="display:flex">
      <div id="errorMessage" style="
        position: absolute;
        bottom: 3px;
        right: 3px;
        display: none;
        color: yellow;
        background: rgb(0 0 0 / 76%);
        padding: 12px;
        border-radius: 0.2rem;
        font-family: 'Courier New', monospace;
        max-height: 70%;
        max-width: 40%;
        overflow: auto;
        flex: 1;
      "></div>
      <div id="logMessage" style="
        position: absolute;
        bottom: 3px;
        left: 3px;
        display: none;
        color: white;
        background: rgb(0 0 0 / 56%);
        padding: 6px;
        border-radius: 0.2rem;
        font-family: 'Courier New', monospace;
        word-wrap: break-word;
        max-height: 70%;
        max-width: 40%;
        overflow: auto;
        line-height: 1rem;
        flex: 1;
      ">
      </div>
      </div>
    </body>
  `}

  const pluginApiMethods = {
    app,
    createButton,
    createToggle,
    getPluginStore,
    setPluginStore,
    addSettingsItem,
    onYarnLoadedData,
    onYarnEditorOpen,
    onYarnInPreviewMode,
    onYarnSavedNode,
    onYarnSetLanguage,
    onYarnLoadedStateFromLocalStorage,
    onYarnSavedStateToLocalStorage,
    onYarnSetDocumentType,
    onKeyUp,
    onKeyDown,
    onLoad,
    getVloatilePlugins,
    setVloatilePlugin,
    setVloatilePlugins,
    getGistPluginFiles,
    getGistPluginFile,
    saveGistPlugin,
    isGistTokenInvalid,
    urlParams,
    updateUrlParams,
    gistPluginsFileUrl,
    pluginModeUrl,
    getPluginsList,
    deleteGistPlugin,
    deleteVolatilePlugin,
    getExtensionScriptData,
    getPreviewHtml
  };

  // built in plugin initiation
  PLUGINS.forEach(plugin => {
    const initializedPlugin = new plugin(pluginApiMethods);
    window.addEventListener('DOMContentLoaded', e => {
      app.plugins[initializedPlugin.name] = initializedPlugin;
    });
  });

  getVloatilePlugins().then(volatilePlugins => {
    volatilePlugins = volatilePlugins || {};
    // load builtin plugins
    const builtInVolatilePlugins = {};
    const builtInPlugins = {}; // so we can revert the volatile one to the built in one as fallback
    const onLoadBuiltInPlugins = () => {
      PLUGINS.forEach(plugin => {
        const builtInPlugin = {
          filename: `${plugin.name}.js`,
          content: `
        module.exports = ${plugin.toString()}`,
          type: 'builtin',
          language: 'JavaScript',
        };

        builtInPlugins[plugin.name] = builtInPlugin;
        if (volatilePlugins && plugin.name in volatilePlugins) {
          return; // use the mutated volatile plugin when available
        }

        builtInVolatilePlugins[plugin.name] = builtInPlugin;
      });
      dbStorage.save('builtinVolatilePlugins', builtInVolatilePlugins);
    };

    const addDependencyScripts = (newPlugin) => {
      if ('dependencies' in newPlugin) {
        newPlugin.dependencies.forEach(dependency => {
          const scriptEle = document.createElement('script');
          scriptEle.setAttribute('src', dependency);
          document.body.appendChild(scriptEle);
          scriptEle.addEventListener('load', () => {
            console.log('File loaded', dependency);
          });
  
          scriptEle.addEventListener('error', ev => {
            console.log('Error on loading file', ev);
          });
        });
      }
    }

    const loadPluginsFromCacheOrGist = () => {
      getPluginsList(true).then(pluginsList=>{
        setVloatilePlugins(pluginsList);
        Object.values(pluginsList).forEach(pluginFile => {
          // const funCode = `return ${pluginFile.content}`
          // const plugin = new Function("data",funCode)();
          const [pluginData] = getExtensionScriptData(pluginFile.content)
          if(pluginData && "Constructor" in pluginData && "name" in pluginData) {
            const FunInstance = new pluginData.Constructor(pluginApiMethods);
            app.plugins[pluginData.name] = FunInstance;
            addDependencyScripts(pluginData)
          }
        })
      })
    };

    loadPluginsFromCacheOrGist();
    onLoadBuiltInPlugins();
  });
};
