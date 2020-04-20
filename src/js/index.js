import '../scss/index.scss';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import ko from 'knockout';
window.ko = ko;

window.$ = window.jQuery = require('jquery');
import 'jquery-contextmenu';
import 'jquery-mousewheel';

import ace from 'ace-builds/src-noconflict/ace';
window.ace = ace;
ace.config.set('basePath', 'public'); //needed to import yarn mode
window.define = ace.define;

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import './libs/knockout.ace.js';
import 'jquery.transit';

import 'spectrum-colorpicker';
import 'lightweight-emoji-picker/dist/picker.js';

// Keep these imports, they are used elsewhere in the app
import spoken from 'spoken';

import { App } from './classes/app.js';
import { version } from '../public/version.json';

window.app = new App('Yarn', version);
window.app.run();
