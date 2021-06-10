import { VarStore } from './var-store';
import { Runner } from './runner';

export var Plugins = function(app) {
  const self = this;
  app.plugins = {};
  const registerPlugin = plugin => {
    app.plugins[plugin.constructor.name] = plugin;
  };

  //TODO
  const addSettingsItem = () => {
    return `
                <div class="settings-item">
              <label class="settings-label" for="theme">Playtesting Style</label>
              <div class="settings-value markup">
                <select id="theme" data-bind="
                  options: app.ui.availablePlaytestStyles,
                  optionsText: 'name',
                  optionsValue: 'id',
                  value: app.settings.playtestStyle,
                  event: { change: app.setPlaytestStyle }">
                </select>
              </div>
            </div>
    `;
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

  // plugin helper methods
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
    // app.plugins[plugin.constructor.name] = plugin;
    console.log(
      plugin.constructor.name,
      'button',
      `onclick="click: app.plugins.${plugin.constructor.name}.${onClick}"`,
      app
    );
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
      // addScriptToBody,
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
