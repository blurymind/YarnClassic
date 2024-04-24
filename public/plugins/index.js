import { Runner } from './runner';
// import { Transcribe } from './transcribe';

const PLUGINS = [Runner];

async function importModuleWeb(
  script,
  modulePath,
  { forceUpdate } = { forceUpdate: false }
) {
  const { AsyncFunction, cache } = globalThis.__import__ || {
    AsyncFunction: Object.getPrototypeOf(async function() {}).constructor,
    cache: new Map(),
  };
  // Build new AsyncFunction and evaluate it
  const fn = new AsyncFunction('module', 'importModuleWeb', script);
  const module = { exports: {}, filename: modulePath }; // module-API

  // Execute user code
  await fn(module, importModuleWeb);
  return module.exports;
}

export var Plugins = function(app) {
  const self = this;
  const registerPlugin = plugin => {
    app.plugins[plugin.name] = plugin;
    // console.log('attaching plugin', plugin, app.plugins);
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
    app[setterKey] = function(value, e) {
      const newValue = e ? e.target.value : value;
      app.settings[valueKey](newValue);
    };

    // Dom rendering helper methods
    window.addEventListener('settingsOpened', () => {
      const options = app.ui[optionsKey]
        .map(
          option =>
            `<option value="${option.id}" ${
              option.id === app.settings[valueKey]() ? 'selected="true"' : ''
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
      <span class="item ${className || ''}" title="${title || ''}" ${
      onClick ? `onclick="click: app.plugins.${pluginName}.${onClick}"` : ''
    }
       ${
         onPointerDown
           ? ` onpointerdown="app.plugins.${pluginName}.${onPointerDown}"`
           : ''
       }
              ${
                onDoubleClick
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
  };
  // Todo these are not being cached by the PWA - needs fixing
  // Todo these should also be optional when building - exclude for build-tiny
  // plugin initiation
  PLUGINS.forEach(plugin => {
    const initializedPlugin = new plugin(pluginApiMethods);
    window.addEventListener('DOMContentLoaded', e => {
      registerPlugin(initializedPlugin);
    });
  });

  // register plugins stored on a gist - todo cache all this
  if (app.settings.gistPluginsFile() !== null) {
    app.data.storage.getGist(app.settings.gistPluginsFile()).then(({fileList}) => {
      console.log({ fileList });
      fileList.forEach(gistFile => {
        if (gistFile.language === 'JavaScript') {
          console.log({ gistFile });
          try {
            app.storage
              .getContentOrRaw(gistFile.content, gistFile.raw_url)
              .then(content => {
                importModuleWeb(content, gistFile.filename).then(
                  importedPlugin => {
                    const newPlugin = importedPlugin(pluginApiMethods);
                    newPlugin.name = newPlugin.name || gistFile.filename;
                    console.log(
                      { newPlugin },
                      'loaded from ',
                      gistFile.raw_url
                    );
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
                    registerPlugin(newPlugin);
                  }
                  );
                });
            } catch (e) {
              console.error(gistFile.filename, 'Plugin failed to load', e);
            }
          }
        });
      });
    }
};
