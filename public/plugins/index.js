import { VarStore } from './var-store';
import { Runner } from './runner';

const PLUGINS = [VarStore, Runner];

export var Plugins = function(app) {
  const self = this;
  app.plugins = {};
  const registerPlugin = plugin => {
    app.plugins[plugin.constructor.name] = plugin;
  };
  this.pluginStorage = ko.observable({});
  const getPluginStore = pluginName => {
    if (!self.pluginStorage()[pluginName]) {
      self.pluginStorage({
        ...self.pluginStorage(),
        [pluginName]: {},
      });
    }
    return this.pluginStorage()[pluginName];
  };
  const setPluginStore = (pluginName, key, val) => {
    const storeVals = { ...getPluginStore(pluginName), [key]: val };
    self.pluginStorage({
      ...self.pluginStorage(),
      [pluginName]: storeVals,
    });
  };

  window.addEventListener('yarnLoadedData', e => {
    if (app.data.documentHeader() !== null) {
      const documentHeader = app.data.documentHeader();
      if ('pluginStorage' in documentHeader)
        self.pluginStorage(documentHeader.pluginStorage);
    }
  });
  window.addEventListener('newYarnFileStarted', e => {
    self.pluginStorage({});
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
      icon,
      onClick,
      attachTo,
      className,
      title,
      onPointerDown,
      onDoubleClick,
    }
  ) => {
    const button = document.createElement('span');
    const iconName = icon || 'cog';
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

  // yarneditor lifecycle events
  const onYarnLoadedData = cb => {
    window.addEventListener('yarnLoadedData', e => {
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
  // plugin initiation
  PLUGINS.forEach(plugin => {
    const initializedPlugin = new plugin({
      app,
      createButton,
      getPluginStore,
      setPluginStore,
      addSettingsItem,
      onYarnLoadedData,
      onYarnEditorOpen,
      onLoad,
    });

    window.addEventListener('DOMContentLoaded', e => {
      registerPlugin(initializedPlugin);
    });
  });
};
