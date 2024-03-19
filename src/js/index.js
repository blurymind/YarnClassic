import '../scss/jquery.contextMenu.css';
import '../scss/normalize.css';
import '../scss/spectrum.css';
import '../scss/style.css';

import { Utils } from './classes/utils';

import ko from 'knockout';
window.ko = ko;

window.$ = window.jQuery = require('jquery');
import 'jquery-contextmenu';
import 'jquery-mousewheel';
import 'jquery-resizable-dom';

import ace from 'ace-builds/src-noconflict/ace';
window.ace = ace;
ace.config.set('basePath', Utils.getPublicPath()); //needed to import yarn mode
window.define = ace.define;

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import './libs/knockout.ace.js';
import 'jquery.transit';

import 'spectrum-colorpicker';
import 'lightweight-emoji-picker/dist/picker.js';

// Keep these imports, they are used elsewhere in the app
import Swal from 'sweetalert2';
window.Swal = Swal;

import { App } from './classes/app.js';
import { version } from '../public/version.json';

// Register PWA service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(registration => {
        // registration.pushManager.subscribe({userVisibleOnly: true});
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

window.app = new App('Yarn', version);
window.app.run();

// Register plugins from plugin folder
import { Plugins } from '../public/plugins';
const appPlugins = new Plugins(window.app);
window.app.plugins = appPlugins;
