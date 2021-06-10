import { VarStore } from './var-store';
import { Runner } from './runner';

export var Plugins = function(app) {
  const self = this;
  app.plugins = {};
  const registerPlugin = plugin => {
    app.plugins[plugin.constructor.name] = plugin;
  };

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

  // plugin local storage (see data class)
  this.pluginStorage = ko.observable({});
  const getPluginStore = plugin => {
    if (!this.pluginStorage()[plugin.constructor.name]) {
      this.pluginStorage({
        ...this.pluginStorage(),
        [plugin.constructor.name]: {},
      });
    }
    return this.pluginStorage()[plugin.constructor.name];
  };
  const setPluginStore = (plugin, key, val) => {
    const storeVals = { ...getPluginStore(plugin), [key]: val };
    this.pluginStorage({
      ...self.pluginStorage(),
      [plugin.constructor.name]: storeVals,
    });
  };

  const createButton = (
    plugin,
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
      onClick
        ? `onclick="click: app.plugins.${plugin.constructor.name}.${onClick}"`
        : ''
    }
       ${
         onPointerDown
           ? ` onpointerdown="app.plugins.${plugin.constructor.name}.${onPointerDown}"`
           : ''
       }
              ${
                onDoubleClick
                  ? `ondblclick="app.plugins.${plugin.constructor.name}.${onDoubleClick}"`
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

  // plugin initiation
  [VarStore, Runner].forEach(plugin => {
    const initializedPlugin = new plugin({
      app,
      createButton,
      getPluginStore,
      setPluginStore,
      addSettingsItem,
    });

    window.addEventListener('DOMContentLoaded', e => {
      registerPlugin(initializedPlugin);
      initializedPlugin.onload();
    });
    window.addEventListener('yarnLoadedData', e => {
      initializedPlugin.onYarnLoadedData(e);
    });
    window.addEventListener('yarnEditorOpen', e => {
      initializedPlugin.onYarnEditorOpen(e);
    });
  });
};
