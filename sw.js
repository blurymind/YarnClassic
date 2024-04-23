!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s="jlOC")}({"5tLK":function(e,t,s){"use strict";try{self["workbox:routing:5.1.3"]&&_()}catch(e){}},Bxln:function(e,t,s){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},aqiC:function(e,t,s){"use strict";try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}},jlOC:function(e,t,s){"use strict";s.r(t);s("xwD5");const n=[],r={get:()=>n,add(e){n.push(...e)}};s("Bxln");const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},c=e=>[o.prefix,e,o.suffix].filter(e=>e&&e.length>0).join("-"),i=e=>e||c(o.precache),a=e=>e||c(o.runtime),h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),u=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class l extends Error{constructor(e,t){super(u(e,t)),this.name=e,this.details=t}}const f=new Set;const d=(e,t)=>e.filter(e=>t in e),p=async({request:e,mode:t,plugins:s=[]})=>{const n=d(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},g=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const o=await self.caches.open(e),c=await p({plugins:r,request:t,mode:"read"});let i=await o.match(c,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;i=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:i,request:c})}return i},w=async({cacheName:e,request:t,response:s,event:n,plugins:r=[],matchOptions:o})=>{const c=await p({plugins:r,request:t,mode:"write"});if(!s)throw new l("cache-put-with-no-response",{url:h(c.url)});const i=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,o=!1;for(const t of n)if("cacheWillUpdate"in t){o=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return o||(r=r&&200===r.status?r:void 0),r||null})({event:n,plugins:r,response:s,request:c});if(!i)return void 0;const a=await self.caches.open(e),u=d(r,"cacheDidUpdate"),w=u.length>0?await g({cacheName:e,matchOptions:o,request:c}):null;try{await a.put(c,i)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of f)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:w,newResponse:i,request:c})},y=g,m=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=d(n,"fetchDidFail"),o=r.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,r=e.clone();e=await n.call(t,{request:r,event:s})}}catch(e){throw new l("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:s,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:o.clone(),request:c.clone()});throw e}};let _;async function v(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=t?t(n):n,o=function(){if(void 0===_){const e=new Response("");if("body"in e)try{new Response(e.body),_=!0}catch(e){_=!1}_=!1}return _}()?s.body:await s.blob();return new Response(o,r)}function R(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class q{constructor(e){this._cacheName=i(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=R(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],r=await self.caches.open(this._cacheName),o=await r.keys(),c=new Set(o.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?n.push(e):s.push({cacheKey:t,url:e});const i=s.map(({cacheKey:s,url:n})=>{const r=this._cacheKeysToIntegrities.get(s),o=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:o,event:e,integrity:r,plugins:t,url:n})});return await Promise.all(i),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:r,integrity:o}){const c=new Request(t,{integrity:o,cache:s,credentials:"same-origin"});let i,a=await m({event:n,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:n,request:c,response:a}):a.status<400))throw new l("bad-precaching-response",{url:t,status:a.status});a.redirected&&(a=await v(a)),await w({event:n,plugins:r,response:a,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new l("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new l("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let U;const L=()=>(U||(U=new q),U);const T=(e,t)=>{const s=L().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:r}={}){const o=new URL(e,location.href);o.hash="",yield o.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(o,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:o});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let C=!1;function x(e){C||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const r=i();self.addEventListener("fetch",o=>{const c=T(o.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!c)return void 0;let i=self.caches.open(r).then(e=>e.match(c)).then(e=>e||fetch(c));o.respondWith(i)})})(e),C=!0)}const b=e=>{const t=L(),s=r.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},K=e=>{const t=L();e.waitUntil(t.activate())};s("aqiC");const O={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s("5tLK");const N=e=>e&&"object"==typeof e?e:{handle:e};class M{constructor(e,t,s="GET"){this.handler=N(t),this.match=e,this.method=s}}class P extends M{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class k{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let o=r&&r.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),!o)return void 0;let c;try{c=o.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this._catchHandler&&(c=c.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),c}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const o=r.match({url:e,request:t,event:s});if(o)return n=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=N(e)}setCatchHandler(e){this._catchHandler=N(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let S;const W=()=>(S||(S=new k,S.addFetchListener(),S.addCacheListener()),S);var E;console.log("Yarn's service worker is caching files"),function(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0,n=new M(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)n=new P(e,t,s);else if("function"==typeof e)n=new M(e,t,s);else{if(!(e instanceof M))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}W().registerRoute(n)}(/\.\/YarnClassic\//,new class{constructor(e={}){if(this._cacheName=a(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[O,...e.plugins]}else this._plugins=[O];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let r;if(this._networkTimeoutSeconds){const{id:o,promise:c}=this._getTimeoutPromise({request:t,event:e,logs:s});r=o,n.push(c)}const o=this._getNetworkPromise({timeoutId:r,request:t,event:e,logs:s});n.push(o);let c=await Promise.race(n);if(c||(c=await o),!c)throw new l("no-response",{url:t.url});return c}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let r,o;try{o=await m({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){r=e}if(e&&clearTimeout(e),r||!o)o=await this._respondFromCache({request:t,event:n});else{const e=o.clone(),s=w({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){0}}return o}_respondFromCache({event:e,request:t}){return y({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}),function(e){L().addToCacheList(e),e.length>0&&(self.addEventListener("install",b),self.addEventListener("activate",K))}([{'revision':'de12959b58ff0874786de6f59d2dd4ba','url':'css/0.css'},{'revision':'cc26e986ac53238679cef6af5cbc5104','url':'fonts/context-menu-icons.eot'},{'revision':'66fe7d78e602880e529daf66c8cb85d3','url':'fonts/context-menu-icons.ttf'},{'revision':'4568f559933f6b3db786835cf61387b1','url':'fonts/context-menu-icons.woff'},{'revision':'3124260e1569c74431e23dd130111455','url':'fonts/context-menu-icons.woff2'},{'revision':'a267c0b23e4794a4d9f2092027ab0fc7','url':'fonts/droid-sans-mono.ttf'},{'revision':'0158a98eda5da93408305a8f817bd61e','url':'icon.ico'},{'revision':'54a04953b96717b70ace1f2bcae537c1','url':'icon_128x128.png'},{'revision':'bd585463236696d22e72c822e9e2c36e','url':'icon_192x192.png'},{'revision':'0158a98eda5da93408305a8f817bd61e','url':'icon_32x32.ico'},{'revision':'41a610c236dfc4ca3db11af9f1d1efd1','url':'icon_512x512.png'},{'revision':'4f50d85588e2e334596e0bcc71892e42','url':'icon_96x96.png'},{'revision':'565d258ede48f6b92ed2729d06cd3a37','url':'index.html'},{'revision':'6d96ea4e0235fe57f66af59ee183f88f','url':'js/main.fed7932e362e4e295295.js'},{'revision':'bac88d544bdbbe5a66ee018b2815af84','url':'js/runtime.fed7932e362e4e295295.js'},{'revision':'b9038b5e20d64a47cf6e8843150f3856','url':'manifest.json'},{'revision':'a267c0b23e4794a4d9f2092027ab0fc7','url':'public/droid-sans-mono.ttf'},{'revision':'0158a98eda5da93408305a8f817bd61e','url':'public/icon.ico'},{'revision':'73d45685f29fa05223dbb6cf7fb57097','url':'public/icon.png'},{'revision':'a6b5dbbf657b6b6bac1067ae1d3d4342','url':'public/icons.svg'},{'revision':'51e2de798b41db26b6a0ec187959d394','url':'public/images/dropbox.ico'},{'revision':'6c62f589f84498c29d24fb22633146a0','url':'public/images/inky-icon.png'},{'revision':'85f678b520893f6007833e0ae0a1f106','url':'public/images/pixel.png'},{'revision':'167ec6047e43038e9209db69a24ba97b','url':'public/images/renpy-128.png'},{'revision':'83e847f2aeb1d4f8f7f05cbb6be593c8','url':'public/images/twine-favicon-152.png'},{'revision':'80ef50c5d35ad4208def42493ef88153','url':'public/mode-ink.js'},{'revision':'7b22b65964ff8eb66dda7e1ee0f2c09e','url':'public/mode-yarn.js'},{'revision':'c9f414bca468fcb950fec09ccfaf2cf4','url':'public/plugins/bondage/renderer.js'},{'revision':'23d644868a65a7c2007b4b0fb3d3d3de','url':'public/plugins/index.js'},{'revision':'ac463da67318e812aa482c83d97e0f71','url':'public/plugins/inkjs/ink-renderer.js'},{'revision':'9cd28d275cb98a86a6f9ddf3e8f1c953','url':'public/plugins/jsoneditor/jsoneditor.js'},{'revision':'31583e2c2d32d27701df21fee914c6a3','url':'public/plugins/jsoneditor/size-overrides.css'},{'revision':'18033eb62fc812190e81ad3a6a3c4410','url':'public/plugins/runner.js'},{'revision':'df3a64e933f73f88115992eedc6c80a6','url':'public/templates/node.html'},{'revision':'7174b16ad3a29e6059f0a0cd448f70df','url':'public/theme-ink.js'},{'revision':'2fe43fbb7c796eddba021471ef0262ea','url':'public/theme-yarn.js'},{'revision':'29861db0837e9e12ca7f8bc4c817fc19','url':'public/themes/blueprint.css'},{'revision':'5d979276428e7e5bf92a2f6699feb32e','url':'public/themes/classic.css'},{'revision':'c663316992808bbc41b57346d2d7bcf0','url':'public/themes/dracula.css'},{'revision':'9e3b56f310fda4ec5f78bd4b4bd1136b','url':'public/version.json'}]),x(E)},xwD5:function(e,t,s){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}}});