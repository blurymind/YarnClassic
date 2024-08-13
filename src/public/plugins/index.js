import { Runner } from './runner';
import { PluginEditor } from './plugin-editor';

const PLUGINS = [Runner, PluginEditor];

async function importModuleWeb(
  script,
  modulePath,
  { forceUpdate } = { forceUpdate: false }
) {
  if (!script.startsWith("module.exports")) return Promise.reject(`${modulePath} Not a module`);
  if(!app.settings.developmentModeEnabled()) return Promise.reject(`${modulePath} Not allowed to load. App is not in dev mode`);

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
  const registerPlugin = plugin => {
    app.plugins[plugin.name] = plugin;
    // app.log('attaching plugin', plugin, app.plugins);
  };

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
      className,
      title,
      onPointerDown,
      onDoubleClick,
      id,
    }
  ) => {
    if (document.getElementById(id) !== null) return;

    const button = document.createElement('span');
    button.id = id || name || title || iconName;
    button.innerHTML = `
      <span class="item ${className || ''}" title="${title || ''}" ${onClick ? `onclick="click: app.plugins.${pluginName}.${onClick}"` : ''
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
        <span class="hide-when-narrow">&nbsp;</span>
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
    }
  ) => {
    if (document.getElementById(id) !== null) return;
    const toggleButton = document.createElement('span');
    toggleButton.id = id;
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
    console.log({key, value: value.content.toString()})
    return getVloatilePlugins().then(prev => {
      prev = prev || {};
      console.log({key, prev})
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

  const getGistPluginFiles = () => {
    return new Promise((resolve) => {
      // if (!app.settings.gistPluginsFile()) reject("No");
      const gistId = gistPluginsId || app.settings.gistPluginsFile();
      console.log({gistId})
      app.data.storage
        .getGist(gistId)
        .then(({ filesInGist }) => {
          const promises = Object.values(filesInGist)
            .filter(gistFile => gistFile.language === 'JavaScript' || gistFile.filename.endsWith(".js"))
            .map(gistFile => {
              return app.data.storage
                .getContentOrRaw(gistFile.content, gistFile.raw_url)
                .then(content => ({ ...gistFile, content }));
            });
          resolve(Promise.all(promises));
        });
    });
  };

  const saveGistPlugin = (fileName, contents) => {
    console.log({gistId: app.settings.gistPluginsFile(), fileName, contents})
    return app.data.storage.editGist(app.settings.gistPluginsFile(), fileName, contents)
  }
  const getPluginsList = () => {
    return new Promise(resolve=> {
      return getVloatilePlugins().then(volatilePlugins => {
        return getGistPluginFiles().then(gistPlugins => {
          console.log({volatilePlugins, gistPlugins})
          // if(!gistPlugins && volatilePlugins) resolve(volatilePlugins || {});
          
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
    //todo doesnt work
    return app.data.storage.deleteGistFile(gistPluginsId || app.settings.gistPluginsFile(), fileName);
  }
 

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
    saveGistPlugin,
    isGistTokenInvalid,
    urlParams,
    gistPluginsFileUrl,
    pluginModeUrl,
    getPluginsList,
    deleteGistPlugin,
    deleteVolatilePlugin
  };

  // built in plugin initiation
  PLUGINS.forEach(plugin => {
    const initializedPlugin = new plugin(pluginApiMethods);
    window.addEventListener('DOMContentLoaded', e => {
      registerPlugin(initializedPlugin);
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
        console.log({ builtInPlugin });

        builtInPlugins[plugin.name] = builtInPlugin;
        if (volatilePlugins && plugin.name in volatilePlugins) {
          return; // use the mutated volatile plugin when available
        }

        builtInVolatilePlugins[plugin.name] = builtInPlugin;
      });
      dbStorage.save('builtinVolatilePlugins', builtInVolatilePlugins);
    };

    const loadPluginWithDependencies = (content, filename) => {
      importModuleWeb(content, filename).then(importedPlugin => {
        const newPlugin = new importedPlugin(pluginApiMethods);
        console.log({ importedPlugin, newPlugin });
        newPlugin.name = newPlugin.name || filename;

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
        window.addEventListener('DOMContentLoaded', e => {
          registerPlugin(newPlugin);
        });
      });
    };

    const loadPluginsFromCacheOrGist = () => {
      getPluginsList().then(pluginsList=>{
        console.log("----->",{pluginsList})

        setVloatilePlugins(pluginsList);
        Object.values(pluginsList).forEach(pluginFile => {
          loadPluginWithDependencies(pluginFile.content, pluginFile.filename);

          importModuleWeb(pluginFile.content, pluginFile.filename).then(
            importedPlugin => {
              const initializedPlugin = new importedPlugin(pluginApiMethods);
              console.log({ importedPlugin, initializedPlugin });
              window.addEventListener('DOMContentLoaded', e => {
                registerPlugin(initializedPlugin);
              });
            }
          );
        })
      })
    };

    loadPluginsFromCacheOrGist();
    onLoadBuiltInPlugins();
    // onLoadPluginsFromVolatile();
  });
};
