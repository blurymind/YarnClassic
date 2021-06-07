import { VarStore } from './var-store';

export var Plugins = function(app) {
  console.log('APP', app);
  const self = this;

  // plugin local storage (see data class)
  this.pluginStorage = ko.observable({});
  const getPluginStore = plugin => {
    if (!self.pluginStorage) self.pluginStorage = ko.observable({});
    if (!this.pluginStorage()[plugin.constructor.name]) {
      this.pluginStorage({ [plugin.constructor.name]: {} });
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
  const createButton = (plugin, { name, icon, onClick, attachTo }) => {
    app.plugins[plugin.constructor.name] = plugin;
    console.log('command', app.plugins[plugin.constructor.name]);
    const button = document.createElement('span');
    const iconName = icon || 'cog';
    button.innerHTML = `
      <span class="item" onclick="click: app.plugins.${plugin.constructor.name}.${onClick}()">
        <svg class="icon menu-icon icon-file-${iconName} icon-lg icon-fw"><use xlink:href="public/icons.svg#icon-${iconName}"></use></svg>
        <span class="hide-when-narrow">&nbsp;</span>
        ${name}
      </span>
    `;
    document.getElementById(attachTo).appendChild(button);

    return button;
  };

  // plugin initiation
  [VarStore].forEach(plugin => {
    const initializedPlugin = new plugin({
      app,
      createButton,
      getPluginStore,
      setPluginStore,
    });
    window.addEventListener('DOMContentLoaded', e => {
      initializedPlugin.onload();
    });
    window.addEventListener('yarnLoadedData', e => {
      // yarnWindow.setTitle(e.data.editingPath());
      initializedPlugin.onYarnLoadedData(e);
      console.log(
        'loading plugins data in yarn file (if found)',
        e.data,
        app.nodes()
      );
    });
  });
};
