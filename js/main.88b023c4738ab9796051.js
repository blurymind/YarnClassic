(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "0PmM":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */ /*!
 * /**
 * * @name JSON Editor
 * * @description JSON Schema Based Editor
 * * This library is the continuation of jdorn's great work (see also https://github.com/jdorn/json-editor/issues/800)
 * * @version "2.5.4"
 * * @author Jeremy Dorn
 * * @see https://github.com/jdorn/json-editor/
 * * @see https://github.com/json-editor/json-editor
 * * @license MIT
 * * @example see README.md and docs/ for requirements, examples and usage info
 * * /
 */!function(t,e){if(true)module.exports=e();else { var r, n; }}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&'object'==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,'default',{enumerable:!0,value:t}),2&e&&'string'!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e];}.bind(null,i));return r;},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,'a',e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p='/dist/',n(n.s=166);}([function(t,e,n){var r=n(35),i=n(94),o=n(70),a=n(63),s=n(121),l=a.set,c=a.getterFor('Array Iterator');t.exports=s(Array,'Array',function(t,e){l(this,{type:'Array Iterator',target:r(t),index:0,kind:e});},function(){var t=c(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):'keys'==n?{value:r,done:!1}:'values'==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1};},'values'),o.Arguments=o.Array,i('keys'),i('values'),i('entries');},function(t,e,n){var r=n(14),i=n(22),o=n(54),a=n(64),s=n(23),l=n(90),c=n(112),u=n(17),h=n(28),p=n(66),d=n(27),f=n(29),y=n(32),m=n(35),b=n(62),v=n(60),g=n(55),_=n(67),w=n(65),k=n(141),x=n(88),j=n(47),O=n(30),C=n(74),E=n(40),S=n(45),P=n(83),R=n(75),L=n(76),T=n(84),A=n(19),I=n(114),D=n(115),N=n(91),B=n(63),F=n(51).forEach,V=R('hidden'),H=A('toPrimitive'),z=B.set,M=B.getterFor('Symbol'),q=Object.prototype,U=i.Symbol,G=o('JSON','stringify'),$=j.f,J=O.f,W=k.f,Z=C.f,Q=P('symbols'),Y=P('op-symbols'),X=P('string-to-symbol-registry'),K=P('symbol-to-string-registry'),tt=P('wks'),et=i.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=s&&u(function(){return 7!=g(J({},'a',{get:function(){return J(this,'a',{value:7}).a;}})).a;})?function(t,e,n){var r=$(q,e);r&&delete q[e],J(t,e,n),r&&t!==q&&J(q,e,r);}:J,it=function(t,e){var n=Q[t]=g(U.prototype);return z(n,{type:'Symbol',tag:t,description:e}),s||(n.description=e),n;},ot=c?function(t){return'symbol'==typeof t;}:function(t){return Object(t)instanceof U;},at=function(t,e,n){t===q&&at(Y,e,n),f(t);var r=b(e,!0);return f(n),h(Q,r)?(n.enumerable?(h(t,V)&&t[V][r]&&(t[V][r]=!1),n=g(n,{enumerable:v(0,!1)})):(h(t,V)||J(t,V,v(1,{})),t[V][r]=!0),rt(t,r,n)):J(t,r,n);},st=function(t,e){f(t);var n=m(e),r=_(n).concat(ht(n));return F(r,function(e){s&&!lt.call(n,e)||at(t,e,n[e]);}),t;},lt=function(t){var e=b(t,!0),n=Z.call(this,e);return!(this===q&&h(Q,e)&&!h(Y,e))&&(!(n||!h(this,e)||!h(Q,e)||h(this,V)&&this[V][e])||n);},ct=function(t,e){var n=m(t),r=b(e,!0);if(n!==q||!h(Q,r)||h(Y,r)){var i=$(n,r);return!i||!h(Q,r)||h(n,V)&&n[V][r]||(i.enumerable=!0),i;}},ut=function(t){var e=W(m(t)),n=[];return F(e,function(t){h(Q,t)||h(L,t)||n.push(t);}),n;},ht=function(t){var e=t===q,n=W(e?Y:m(t)),r=[];return F(n,function(t){!h(Q,t)||e&&!h(q,t)||r.push(Q[t]);}),r;};(l||(S((U=function(){if(this instanceof U)throw TypeError('Symbol is not a constructor');var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===q&&n.call(Y,t),h(this,V)&&h(this[V],e)&&(this[V][e]=!1),rt(this,e,v(1,t));};return s&&nt&&rt(q,e,{configurable:!0,set:n}),it(e,t);}).prototype,'toString',function(){return M(this).tag;}),S(U,'withoutSetter',function(t){return it(T(t),t);}),C.f=lt,O.f=at,j.f=ct,w.f=k.f=ut,x.f=ht,I.f=function(t){return it(A(t),t);},s&&(J(U.prototype,'description',{configurable:!0,get:function(){return M(this).description;}}),a||S(q,'propertyIsEnumerable',lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:U}),F(_(tt),function(t){D(t);}),r({target:'Symbol',stat:!0,forced:!l},{for:function(t){var e=String(t);if(h(X,e))return X[e];var n=U(e);return X[e]=n,K[n]=e,n;},keyFor:function(t){if(!ot(t))throw TypeError(t+' is not a symbol');if(h(K,t))return K[t];},useSetter:function(){nt=!0;},useSimple:function(){nt=!1;}}),r({target:'Object',stat:!0,forced:!l,sham:!s},{create:function(t,e){return void 0===e?g(t):st(g(t),e);},defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:ct}),r({target:'Object',stat:!0,forced:!l},{getOwnPropertyNames:ut,getOwnPropertySymbols:ht}),r({target:'Object',stat:!0,forced:u(function(){x.f(1);})},{getOwnPropertySymbols:function(t){return x.f(y(t));}}),G)&&r({target:'JSON',stat:!0,forced:!l||u(function(){var t=U();return'[null]'!=G([t])||'{}'!=G({a:t})||'{}'!=G(Object(t));})},{stringify:function(t,e,n){for(var r,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(r=e,(d(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if('function'==typeof r&&(e=r.call(this,t,e)),!ot(e))return e;}),i[1]=e,G.apply(null,i);}});U.prototype[H]||E(U.prototype,H,U.prototype.valueOf),N(U,'Symbol'),L[V]=!0;},function(t,e,n){var r=n(14),i=n(23),o=n(22),a=n(28),s=n(27),l=n(30).f,c=n(108),u=o.Symbol;if(i&&'function'==typeof u&&(!('description'in u.prototype)||void 0!==u().description)){var h={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return''===t&&(h[e]=!0),e;};c(p,u);var d=p.prototype=u.prototype;d.constructor=p;var f=d.toString,y='Symbol(test)'==String(u('test')),m=/^Symbol\((.*)\)[^)]+$/;l(d,'description',{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=f.call(t);if(a(h,t))return'';var n=y?e.slice(7,-1):e.replace(m,'$1');return''===n?void 0:n;}}),r({global:!0,forced:!0},{Symbol:p});}},function(t,e,n){n(115)('iterator');},function(t,e,n){var r=n(45),i=Date.prototype,o=i.toString,a=i.getTime;new Date(NaN)+''!='Invalid Date'&&r(i,'toString',function(){var t=a.call(this);return t==t?o.call(this):'Invalid Date';});},function(t,e,n){var r=n(95),i=n(45),o=n(152);r||i(Object.prototype,'toString',o,{unsafe:!0});},function(t,e,n){var r=n(45),i=n(29),o=n(17),a=n(97),s=RegExp.prototype,l=s.toString,c=o(function(){return'/a/b'!=l.call({source:'a',flags:'b'});}),u='toString'!=l.name;(c||u)&&r(RegExp.prototype,'toString',function(){var t=i(this),e=String(t.source),n=t.flags;return'/'+e+'/'+String(void 0===n&&t instanceof RegExp&&!('flags'in s)?a.call(t):n);},{unsafe:!0});},function(t,e,n){var r=n(125).charAt,i=n(63),o=n(121),a=i.set,s=i.getterFor('String Iterator');o(String,'String',function(t){a(this,{type:'String Iterator',string:String(t),index:0});},function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1});});},function(t,e,n){var r=n(22),i=n(126),o=n(0),a=n(40),s=n(19),l=s('iterator'),c=s('toStringTag'),u=o.values;for(var h in i){var p=r[h],d=p&&p.prototype;if(d){if(d[l]!==u)try{a(d,l,u);}catch(t){d[l]=u;}if(d[c]||a(d,c,h),i[h])for(var f in o)if(d[f]!==o[f])try{a(d,f,o[f]);}catch(t){d[f]=o[f];}}}},function(t,e,n){n(14)({target:'Object',stat:!0,sham:!n(23)},{create:n(55)});},function(t,e,n){var r=n(14),i=n(17),o=n(32),a=n(77),s=n(123);r({target:'Object',stat:!0,forced:i(function(){a(1);}),sham:!s},{getPrototypeOf:function(t){return a(o(t));}});},function(t,e,n){n(14)({target:'Object',stat:!0},{setPrototypeOf:n(96)});},function(t,e,n){var r=n(14),i=n(54),o=n(56),a=n(29),s=n(27),l=n(55),c=n(131),u=n(17),h=i('Reflect','construct'),p=u(function(){function t(){}return!(h(function(){},[],t)instanceof t);}),d=!u(function(){h(function(){});}),f=p||d;r({target:'Reflect',stat:!0,forced:f,sham:f},{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(d&&!p)return h(t,e,n);if(t==n){switch(e.length){case 0:return new t();case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);}var r=[null];return r.push.apply(r,e),new(c.apply(t,r))();}var i=n.prototype,u=l(s(i)?i:Object.prototype),f=Function.apply.call(t,u,e);return s(f)?f:u;}});},function(t,e,n){var r=n(14),i=n(23);r({target:'Object',stat:!0,forced:!i,sham:!i},{defineProperty:n(30).f});},function(t,e,n){var r=n(22),i=n(47).f,o=n(40),a=n(45),s=n(82),l=n(108),c=n(89);t.exports=function(t,e){var n,u,h,p,d,f=t.target,y=t.global,m=t.stat;if(n=y?r:m?r[f]||s(f,{}):(r[f]||{}).prototype)for(u in e){if(p=e[u],h=t.noTargetGet?(d=i(n,u))&&d.value:n[u],!c(y?u:f+(m?'.':'#')+u,t.forced)&&void 0!==h){if(typeof p==typeof h)continue;l(p,h);}(t.sham||h&&h.sham)&&o(p,'sham',!0),a(n,u,p,t);}};},function(t,e,n){var r=n(14),i=n(17),o=n(35),a=n(47).f,s=n(23),l=i(function(){a(1);});r({target:'Object',stat:!0,forced:!s||l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e);}});},function(t,e,n){var r=n(14),i=n(27),o=n(29),a=n(28),s=n(47),l=n(77);r({target:'Reflect',stat:!0},{get:function t(e,n){var r,c,u=arguments.length<3?e:arguments[2];return o(e)===u?e[n]:(r=s.f(e,n))?a(r,'value')?r.value:void 0===r.get?void 0:r.get.call(u):i(c=l(e))?t(c,n,u):void 0;}});},function(t,e){t.exports=function(t){try{return!!t();}catch(t){return!0;}};},function(t,e,n){var r=n(14),i=n(17),o=n(66),a=n(27),s=n(32),l=n(36),c=n(68),u=n(92),h=n(69),p=n(19),d=n(117),f=p('isConcatSpreadable'),y=d>=51||!i(function(){var t=[];return t[f]=!1,t.concat()[0]!==t;}),m=h('concat'),b=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:o(t);};r({target:'Array',proto:!0,forced:!y||!m},{concat:function(t){var e,n,r,i,o,a=s(this),h=u(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(b(o=-1===e?a:arguments[e])){if(p+(i=l(o.length))>9007199254740991)throw TypeError('Maximum allowed index exceeded');for(n=0;n<i;n++,p++)n in o&&c(h,p,o[n]);}else{if(p>=9007199254740991)throw TypeError('Maximum allowed index exceeded');c(h,p++,o);}return h.length=p,h;}});},function(t,e,n){var r=n(22),i=n(83),o=n(28),a=n(84),s=n(90),l=n(112),c=i('wks'),u=r.Symbol,h=l?u:u&&u.withoutSetter||a;t.exports=function(t){return o(c,t)||(s&&o(u,t)?c[t]=u[t]:c[t]=h('Symbol.'+t)),c[t];};},function(t,e,n){var r=n(14),i=n(119);r({target:'Array',proto:!0,forced:[].forEach!=i},{forEach:i});},function(t,e,n){var r=n(22),i=n(126),o=n(119),a=n(40);for(var s in i){var l=r[s],c=l&&l.prototype;if(c&&c.forEach!==o)try{a(c,'forEach',o);}catch(t){c.forEach=o;}}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t;};t.exports=n('object'==typeof globalThis&&globalThis)||n('object'==typeof window&&window)||n('object'==typeof self&&self)||n('object'==typeof e&&e)||Function('return this')();}).call(this,n(138));},function(t,e,n){var r=n(17);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7;}})[1];});},function(t,e,n){var r=n(14),i=n(78);r({target:'RegExp',proto:!0,forced:/./.exec!==i},{exec:i});},function(t,e,n){n(14)({target:'Array',stat:!0},{isArray:n(66)});},function(t,e,n){var r=n(14),i=n(85).includes,o=n(94);r({target:'Array',proto:!0,forced:!n(37)('indexOf',{ACCESSORS:!0,1:0})},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0);}}),o('includes');},function(t,e){t.exports=function(t){return'object'==typeof t?null!==t:'function'==typeof t;};},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e);};},function(t,e,n){var r=n(27);t.exports=function(t){if(!r(t))throw TypeError(String(t)+' is not an object');return t;};},function(t,e,n){var r=n(23),i=n(104),o=n(29),a=n(62),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(o(t),e=a(e,!0),o(n),i)try{return s(t,e,n);}catch(t){}if('get'in n||'set'in n)throw TypeError('Accessors not supported');return'value'in n&&(t[e]=n.value),t;};},function(t,e,n){var r=n(14),i=n(27),o=n(66),a=n(86),s=n(36),l=n(35),c=n(68),u=n(19),h=n(69),p=n(37),d=h('slice'),f=p('slice',{ACCESSORS:!0,0:0,1:2}),y=u('species'),m=[].slice,b=Math.max;r({target:'Array',proto:!0,forced:!d||!f},{slice:function(t,e){var n,r,u,h=l(this),p=s(h.length),d=a(t,p),f=a(void 0===e?p:e,p);if(o(h)&&('function'!=typeof(n=h.constructor)||n!==Array&&!o(n.prototype)?i(n)&&null===(n=n[y])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(h,d,f);for(r=new(void 0===n?Array:n)(b(f-d,0)),u=0;d<f;d++,u++)d in h&&c(r,u,h[d]);return r.length=u,r;}});},function(t,e,n){var r=n(39);t.exports=function(t){return Object(r(t));};},function(t,e,n){var r=n(23),i=n(30).f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/;r&&!('name'in o)&&i(o,'name',{configurable:!0,get:function(){try{return a.call(this).match(s)[1];}catch(t){return'';}}});},function(t,e,n){var r=n(14),i=n(129),o=n(39);r({target:'String',proto:!0,forced:!n(130)('includes')},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var r=n(61),i=n(39);t.exports=function(t){return r(i(t));};},function(t,e,n){var r=n(50),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0;};},function(t,e,n){var r=n(23),i=n(17),o=n(28),a=Object.defineProperty,s={},l=function(t){throw t;};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var n=[][t],c=!!o(e,'ACCESSORS')&&e.ACCESSORS,u=o(e,0)?e[0]:l,h=o(e,1)?e[1]:void 0;return s[t]=!!n&&!i(function(){if(c&&!r)return!0;var t={length:-1};c?a(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,u,h);});};},function(t,e,n){var r=n(14),i=n(142);r({target:'Array',stat:!0,forced:!n(146)(function(t){Array.from(t);})},{from:i});},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t;};},function(t,e,n){var r=n(23),i=n(30),o=n(60);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n));}:function(t,e,n){return t[e]=n,t;};},function(t,e,n){var r=n(14),i=n(149).left,o=n(52),a=n(37),s=o('reduce'),l=a('reduce',{1:0});r({target:'Array',proto:!0,forced:!s||!l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var r=n(14),i=n(32),o=n(67);r({target:'Object',stat:!0,forced:n(17)(function(){o(1);})},{keys:function(t){return o(i(t));}});},function(t,e,n){var r=n(99),i=n(29),o=n(32),a=n(36),s=n(50),l=n(39),c=n(100),u=n(101),h=Math.max,p=Math.min,d=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,y=/\$([$&'`]|\d\d?)/g;r('replace',2,function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,v=m?'$':'$0';return[function(n,r){var i=l(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r);},function(t,r){if(!m&&b||'string'==typeof r&&-1===r.indexOf(v)){var o=n(e,t,this,r);if(o.done)return o.value;}var l=i(t),d=String(this),f='function'==typeof r;f||(r=String(r));var y=l.global;if(y){var _=l.unicode;l.lastIndex=0;}for(var w=[];;){var k=u(l,d);if(null===k)break;if(w.push(k),!y)break;''===String(k[0])&&(l.lastIndex=c(d,a(l.lastIndex),_));}for(var x,j='',O=0,C=0;C<w.length;C++){k=w[C];for(var E=String(k[0]),S=h(p(s(k.index),d.length),0),P=[],R=1;R<k.length;R++)P.push(void 0===(x=k[R])?x:String(x));var L=k.groups;if(f){var T=[E].concat(P,S,d);void 0!==L&&T.push(L);var A=String(r.apply(void 0,T));}else A=g(E,d,S,P,L,r);S>=O&&(j+=d.slice(O,S)+A,O=S+E.length);}return j+d.slice(O);}];function g(t,n,r,i,a,s){var l=r+t.length,c=i.length,u=y;return void 0!==a&&(a=o(a),u=f),e.call(s,u,function(e,o){var s;switch(o.charAt(0)){case'$':return'$';case'&':return t;case'`':return n.slice(0,r);case"'":return n.slice(l);case'<':s=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>c){var h=d(u/10);return 0===h?e:h<=c?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):e;}s=i[u-1];}return void 0===s?'':s;});}});},function(t,e,n){var r=n(14),i=n(51).map,o=n(69),a=n(37),s=o('map'),l=a('map');r({target:'Array',proto:!0,forced:!s||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var r=n(22),i=n(40),o=n(28),a=n(82),s=n(106),l=n(63),c=l.get,u=l.enforce,h=String(String).split('String');(t.exports=function(t,e,n,s){var l=!!s&&!!s.unsafe,c=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;'function'==typeof n&&('string'!=typeof e||o(n,'name')||i(n,'name',e),u(n).source=h.join('string'==typeof e?e:'')),t!==r?(l?!p&&t[e]&&(c=!0):delete t[e],c?t[e]=n:i(t,e,n)):c?t[e]=n:a(e,n);})(Function.prototype,'toString',function(){return'function'==typeof this&&c(this).source||s(this);});},function(t,e,n){var r=n(99),i=n(29),o=n(36),a=n(39),s=n(100),l=n(101);r('match',1,function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n));},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),c=String(this);if(!a.global)return l(a,c);var u=a.unicode;a.lastIndex=0;for(var h,p=[],d=0;null!==(h=l(a,c));){var f=String(h[0]);p[d]=f,''===f&&(a.lastIndex=s(c,o(a.lastIndex),u)),d++;}return 0===d?null:p;}];});},function(t,e,n){var r=n(23),i=n(74),o=n(60),a=n(35),s=n(62),l=n(28),c=n(104),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=a(t),e=s(e,!0),c)try{return u(t,e);}catch(t){}if(l(t,e))return o(!i.f.call(t,e),t[e]);};},function(t,e,n){var r=n(14),i=n(61),o=n(35),a=n(52),s=[].join,l=i!=Object,c=a('join',',');r({target:'Array',proto:!0,forced:l||!c},{join:function(t){return s.call(o(this),void 0===t?',':t);}});},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1);};},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t);};},function(t,e,n){var r=n(116),i=n(61),o=n(32),a=n(36),s=n(92),l=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,h=6==t,p=5==t||h;return function(d,f,y,m){for(var b,v,g=o(d),_=i(g),w=r(f,y,3),k=a(_.length),x=0,j=m||s,O=e?j(d,k):n?j(d,0):void 0;k>x;x++)if((p||x in _)&&(v=w(b=_[x],x,g),t))if(e)O[x]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return x;case 2:l.call(O,b);}else if(u)return!1;return h?-1:c||u?u:O;};};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)};},function(t,e,n){var r=n(17);t.exports=function(t,e){var n=[][t];return!!n&&r(function(){n.call(null,e||function(){throw 1;},1);});};},function(t,e,n){var r=n(99),i=n(98),o=n(29),a=n(39),s=n(156),l=n(100),c=n(36),u=n(101),h=n(78),p=n(17),d=[].push,f=Math.min,y=!p(function(){return!RegExp(4294967295,'y');});r('split',2,function(t,e,n){var r;return r='c'=='abbc'.split(/(b)*/)[1]||4!='test'.split(/(?:)/,-1).length||2!='ab'.split(/(?:ab)*/).length||4!='.'.split(/(.?)(.?)/).length||'.'.split(/()()/).length>1||''.split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var s,l,c,u=[],p=(t.ignoreCase?'i':'')+(t.multiline?'m':'')+(t.unicode?'u':'')+(t.sticky?'y':''),f=0,y=new RegExp(t.source,p+'g');(s=h.call(y,r))&&!((l=y.lastIndex)>f&&(u.push(r.slice(f,s.index)),s.length>1&&s.index<r.length&&d.apply(u,s.slice(1)),c=s[0].length,f=l,u.length>=o));)y.lastIndex===s.index&&y.lastIndex++;return f===r.length?!c&&y.test('')||u.push(''):u.push(r.slice(f)),u.length>o?u.slice(0,o):u;}:'0'.split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n);}:e,[function(e,n){var i=a(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n);},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var h=o(t),p=String(this),d=s(h,RegExp),m=h.unicode,b=(h.ignoreCase?'i':'')+(h.multiline?'m':'')+(h.unicode?'u':'')+(y?'y':'g'),v=new d(y?h:'^(?:'+h.source+')',b),g=void 0===i?4294967295:i>>>0;if(0===g)return[];if(0===p.length)return null===u(v,p)?[p]:[];for(var _=0,w=0,k=[];w<p.length;){v.lastIndex=y?w:0;var x,j=u(v,y?p:p.slice(w));if(null===j||(x=f(c(v.lastIndex+(y?0:w)),p.length))===_)w=l(p,w,m);else{if(k.push(p.slice(_,w)),k.length===g)return k;for(var O=1;O<=j.length-1;O++)if(k.push(j[O]),k.length===g)return k;w=_=x;}}return k.push(p.slice(_)),k;}];},!y);},function(t,e,n){var r=n(110),i=n(22),o=function(t){return'function'==typeof t?t:void 0;};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e];};},function(t,e,n){var r,i=n(29),o=n(113),a=n(87),s=n(76),l=n(140),c=n(105),u=n(75),h=u('IE_PROTO'),p=function(){},d=function(t){return'<script>'+t+'</script>';},f=function(){try{r=document.domain&&new ActiveXObject('htmlfile');}catch(t){}var t,e;f=r?function(t){t.write(d('')),t.close();var e=t.parentWindow.Object;return t=null,e;}(r):((e=c('iframe')).style.display='none',l.appendChild(e),e.src=String('javascript:'),(t=e.contentWindow.document).open(),t.write(d('document.F=Object')),t.close(),t.F);for(var n=a.length;n--;)delete f.prototype[a[n]];return f();};s[h]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=i(t),n=new p(),p.prototype=null,n[h]=t):n=f(),void 0===e?n:o(n,e);};},function(t,e){t.exports=function(t){if('function'!=typeof t)throw TypeError(String(t)+' is not a function');return t;};},function(t,e,n){var r=n(14),i=n(124).values;r({target:'Object',stat:!0},{values:function(t){return i(t);}});},function(t,e,n){var r=n(14),i=n(124).entries;r({target:'Object',stat:!0},{entries:function(t){return i(t);}});},function(t,e,n){var r=n(23),i=n(22),o=n(89),a=n(127),s=n(30).f,l=n(65).f,c=n(98),u=n(97),h=n(128),p=n(45),d=n(17),f=n(63).set,y=n(153),m=n(19)('match'),b=i.RegExp,v=b.prototype,g=/a/g,_=/a/g,w=new b(g)!==g,k=h.UNSUPPORTED_Y;if(r&&o('RegExp',!w||k||d(function(){return _[m]=!1,b(g)!=g||b(_)==_||'/a/i'!=b(g,'i');}))){for(var x=function(t,e){var n,r=this instanceof x,i=c(t),o=void 0===e;if(!r&&i&&t.constructor===x&&o)return t;w?i&&!o&&(t=t.source):t instanceof x&&(o&&(e=u.call(t)),t=t.source),k&&(n=!!e&&e.indexOf('y')>-1)&&(e=e.replace(/y/g,''));var s=a(w?new b(t,e):b(t,e),r?this:v,x);return k&&n&&f(s,{sticky:n}),s;},j=function(t){(t in x)||s(x,t,{configurable:!0,get:function(){return b[t];},set:function(e){b[t]=e;}});},O=l(b),C=0;O.length>C;)j(O[C++]);v.constructor=x,x.prototype=v,p(i,'RegExp',x);}y('RegExp');},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e};};},function(t,e,n){var r=n(17),i=n(49),o=''.split;t.exports=r(function(){return!Object('z').propertyIsEnumerable(0);})?function(t){return'String'==i(t)?o.call(t,''):Object(t);}:Object;},function(t,e,n){var r=n(27);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&'function'==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if('function'==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&'function'==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value");};},function(t,e,n){var r,i,o,a=n(139),s=n(22),l=n(27),c=n(40),u=n(28),h=n(75),p=n(76),d=s.WeakMap;if(a){var f=new d(),y=f.get,m=f.has,b=f.set;r=function(t,e){return b.call(f,t,e),e;},i=function(t){return y.call(f,t)||{};},o=function(t){return m.call(f,t);};}else{var v=h('state');p[v]=!0,r=function(t,e){return c(t,v,e),e;},i=function(t){return u(t,v)?t[v]:{};},o=function(t){return u(t,v);};}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{});},getterFor:function(t){return function(e){var n;if(!l(e)||(n=i(e)).type!==t)throw TypeError('Incompatible receiver, '+t+' required');return n;};}};},function(t,e){t.exports=!1;},function(t,e,n){var r=n(111),i=n(87).concat('length','prototype');e.f=Object.getOwnPropertyNames||function(t){return r(t,i);};},function(t,e,n){var r=n(49);t.exports=Array.isArray||function(t){return'Array'==r(t);};},function(t,e,n){var r=n(111),i=n(87);t.exports=Object.keys||function(t){return r(t,i);};},function(t,e,n){var r=n(62),i=n(30),o=n(60);t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n;};},function(t,e,n){var r=n(17),i=n(19),o=n(117),a=i('species');t.exports=function(t){return o>=51||!r(function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1};},1!==e[t](Boolean).foo;});};},function(t,e){t.exports={};},function(t,e,n){var r=n(14),i=n(155);r({global:!0,forced:parseInt!=i},{parseInt:i});},function(t,e,n){var r=n(14),i=n(51).filter,o=n(69),a=n(37),s=o('filter'),l=a('filter');r({target:'Array',proto:!0,forced:!s||!l},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var r=n(14),i=n(85).indexOf,o=n(52),a=n(37),s=[].indexOf,l=!!s&&1/[1].indexOf(1,-0)<0,c=o('indexOf'),u=a('indexOf',{ACCESSORS:!0,1:0});r({target:'Array',proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable;}:r;},function(t,e,n){var r=n(83),i=n(84),o=r('keys');t.exports=function(t){return o[t]||(o[t]=i(t));};},function(t,e){t.exports={};},function(t,e,n){var r=n(28),i=n(32),o=n(75),a=n(123),s=o('IE_PROTO'),l=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=i(t),r(t,s)?t[s]:'function'==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null;};},function(t,e,n){var r,i,o=n(97),a=n(128),s=RegExp.prototype.exec,l=String.prototype.replace,c=s,u=(r=/a/,i=/b*/g,s.call(r,'a'),s.call(i,'a'),0!==r.lastIndex||0!==i.lastIndex),h=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec('')[1];(u||p||h)&&(c=function(t){var e,n,r,i,a=this,c=h&&a.sticky,d=o.call(a),f=a.source,y=0,m=t;return c&&(-1===(d=d.replace('y','')).indexOf('g')&&(d+='g'),m=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&'\n'!==t[a.lastIndex-1])&&(f='(?: '+f+')',m=' '+m,y++),n=new RegExp('^(?:'+f+')',d)),p&&(n=new RegExp('^'+f+'$(?!\\s)',d)),u&&(e=a.lastIndex),r=s.call(c?n:a,m),c?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:u&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),p&&r&&r.length>1&&l.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0);}),r;}),t.exports=c;},function(t,e,n){var r=n(14),i=n(51).some,o=n(52),a=n(37),s=o('some'),l=a('some');r({target:'Array',proto:!0,forced:!s||!l},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var r=n(39),i='['+n(81)+']',o=RegExp('^'+i+i+'*'),a=RegExp(i+i+'*$'),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,'')),2&t&&(n=n.replace(a,'')),n;};};t.exports={start:s(1),end:s(2),trim:s(3)};},function(t,e){t.exports='\t\n\v\f\r                　\u2028\u2029\ufeff';},function(t,e,n){var r=n(22),i=n(40);t.exports=function(t,e){try{i(r,t,e);}catch(n){r[t]=e;}return e;};},function(t,e,n){var r=n(64),i=n(107);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{});})('versions',[]).push({version:'3.6.5',mode:r?'pure':'global',copyright:'© 2020 Denis Pushkarev (zloirock.ru)'});},function(t,e){var n=0,r=Math.random();t.exports=function(t){return'Symbol('+String(void 0===t?'':t)+')_'+(++n+r).toString(36);};},function(t,e,n){var r=n(35),i=n(36),o=n(86),a=function(t){return function(e,n,a){var s,l=r(e),c=i(l.length),u=o(a,c);if(t&&n!=n){for(;c>u;)if((s=l[u++])!=s)return!0;}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1;};};t.exports={includes:a(!0),indexOf:a(!1)};},function(t,e,n){var r=n(50),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e);};},function(t,e){t.exports=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf'];},function(t,e){e.f=Object.getOwnPropertySymbols;},function(t,e,n){var r=n(17),i=/#|\.prototype\./,o=function(t,e){var n=s[a(t)];return n==c||n!=l&&('function'==typeof e?r(e):!!e);},a=o.normalize=function(t){return String(t).replace(i,'.').toLowerCase();},s=o.data={},l=o.NATIVE='N',c=o.POLYFILL='P';t.exports=o;},function(t,e,n){var r=n(17);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol());});},function(t,e,n){var r=n(30).f,i=n(28),o=n(19)('toStringTag');t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e});};},function(t,e,n){var r=n(27),i=n(66),o=n(19)('species');t.exports=function(t,e){var n;return i(t)&&('function'!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e);};},function(t,e,n){var r=n(14),i=n(51).find,o=n(94),a=n(37),s=!0,l=a('find');'find'in[]&&Array(1).find(function(){s=!1;}),r({target:'Array',proto:!0,forced:s||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0);}}),o('find');},function(t,e,n){var r=n(19),i=n(55),o=n(30),a=r('unscopables'),s=Array.prototype;null==s[a]&&o.f(s,a,{configurable:!0,value:i(null)}),t.exports=function(t){s[a][t]=!0;};},function(t,e,n){var r={};r[n(19)('toStringTag')]='z',t.exports='[object z]'===String(r);},function(t,e,n){var r=n(29),i=n(148);t.exports=Object.setPrototypeOf||('__proto__'in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,'__proto__').set).call(n,[]),e=n instanceof Array;}catch(t){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n;};}():void 0);},function(t,e,n){var r=n(29);t.exports=function(){var t=r(this),e='';return t.global&&(e+='g'),t.ignoreCase&&(e+='i'),t.multiline&&(e+='m'),t.dotAll&&(e+='s'),t.unicode&&(e+='u'),t.sticky&&(e+='y'),e;};},function(t,e,n){var r=n(27),i=n(49),o=n(19)('match');t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:'RegExp'==i(t));};},function(t,e,n){n(24);var r=n(45),i=n(17),o=n(19),a=n(78),s=n(40),l=o('species'),c=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:'7'},t;},'7'!==''.replace(t,'$<a>');}),u='$0'==='a'.replace(/./,'$0'),h=o('replace'),p=!!/./[h]&&''===/./[h]('a','$0'),d=!i(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments);};var n='ab'.split(t);return 2!==n.length||'a'!==n[0]||'b'!==n[1];});t.exports=function(t,e,n,h){var f=o(t),y=!i(function(){var e={};return e[f]=function(){return 7;},7!=''[t](e);}),m=y&&!i(function(){var e=!1,n=/a/;return'split'===t&&((n={}).constructor={},n.constructor[l]=function(){return n;},n.flags='',n[f]=/./[f]),n.exec=function(){return e=!0,null;},n[f](''),!e;});if(!y||!m||'replace'===t&&(!c||!u||p)||'split'===t&&!d){var b=/./[f],v=n(f,''[t],function(t,e,n,r,i){return e.exec===a?y&&!i?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1};},{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),g=v[0],_=v[1];r(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e);}:function(t){return _.call(t,this);});}h&&s(RegExp.prototype[f],'sham',!0);};},function(t,e,n){var r=n(125).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1);};},function(t,e,n){var r=n(49),i=n(78);t.exports=function(t,e){var n=t.exec;if('function'==typeof n){var o=n.call(t,e);if('object'!=typeof o)throw TypeError('RegExp exec method returned something other than an Object or null');return o;}if('RegExp'!==r(t))throw TypeError('RegExp#exec called on incompatible receiver');return i.call(t,e);};},function(t,e,n){var r=n(14),i=n(157);r({global:!0,forced:parseFloat!=i},{parseFloat:i});},function(t,e,n){var r,i=n(14),o=n(47).f,a=n(36),s=n(129),l=n(39),c=n(130),u=n(64),h=''.startsWith,p=Math.min,d=c('startsWith');i({target:'String',proto:!0,forced:!!(u||d||(r=o(String.prototype,'startsWith'),!r||r.writable))&&!d},{startsWith:function(t){var e=String(l(this));s(t);var n=a(p(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return h?h.call(e,r,n):e.slice(n,n+r.length)===r;}});},function(t,e,n){var r=n(23),i=n(17),o=n(105);t.exports=!r&&!i(function(){return 7!=Object.defineProperty(o('div'),'a',{get:function(){return 7;}}).a;});},function(t,e,n){var r=n(22),i=n(27),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{};};},function(t,e,n){var r=n(107),i=Function.toString;'function'!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t);}),t.exports=r.inspectSource;},function(t,e,n){var r=n(22),i=n(82),o=r['__core-js_shared__']||i('__core-js_shared__',{});t.exports=o;},function(t,e,n){var r=n(28),i=n(109),o=n(47),a=n(30);t.exports=function(t,e){for(var n=i(e),s=a.f,l=o.f,c=0;c<n.length;c++){var u=n[c];r(t,u)||s(t,u,l(e,u));}};},function(t,e,n){var r=n(54),i=n(65),o=n(88),a=n(29);t.exports=r('Reflect','ownKeys')||function(t){var e=i.f(a(t)),n=o.f;return n?e.concat(n(t)):e;};},function(t,e,n){var r=n(22);t.exports=r;},function(t,e,n){var r=n(28),i=n(35),o=n(85).indexOf,a=n(76);t.exports=function(t,e){var n,s=i(t),l=0,c=[];for(n in s)!r(a,n)&&r(s,n)&&c.push(n);for(;e.length>l;)r(s,n=e[l++])&&(~o(c,n)||c.push(n));return c;};},function(t,e,n){var r=n(90);t.exports=r&&!Symbol.sham&&'symbol'==typeof Symbol.iterator;},function(t,e,n){var r=n(23),i=n(30),o=n(29),a=n(67);t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=a(e),s=r.length,l=0;s>l;)i.f(t,n=r[l++],e[n]);return t;};},function(t,e,n){var r=n(19);e.f=r;},function(t,e,n){var r=n(110),i=n(28),o=n(114),a=n(30).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)});};},function(t,e,n){var r=n(56);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e);};case 1:return function(n){return t.call(e,n);};case 2:return function(n,r){return t.call(e,n,r);};case 3:return function(n,r,i){return t.call(e,n,r,i);};}return function(){return t.apply(e,arguments);};};},function(t,e,n){var r,i,o=n(22),a=n(118),s=o.process,l=s&&s.versions,c=l&&l.v8;c?i=(r=c.split('.'))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),t.exports=i&&+i;},function(t,e,n){var r=n(54);t.exports=r('navigator','userAgent')||'';},function(t,e,n){var r=n(51).forEach,i=n(52),o=n(37),a=i('forEach'),s=o('forEach');t.exports=a&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0);};},function(t,e,n){var r=n(95),i=n(49),o=n(19)('toStringTag'),a='Arguments'==i(function(){return arguments;}());t.exports=r?i:function(t){var e,n,r;return void 0===t?'Undefined':null===t?'Null':'string'==typeof(n=function(t,e){try{return t[e];}catch(t){}}(e=Object(t),o))?n:a?i(e):'Object'==(r=i(e))&&'function'==typeof e.callee?'Arguments':r;};},function(t,e,n){var r=n(14),i=n(147),o=n(77),a=n(96),s=n(91),l=n(40),c=n(45),u=n(19),h=n(64),p=n(70),d=n(122),f=d.IteratorPrototype,y=d.BUGGY_SAFARI_ITERATORS,m=u('iterator'),b=function(){return this;};t.exports=function(t,e,n,u,d,v,g){i(n,e,u);var _,w,k,x=function(t){if(t===d&&S)return S;if(!y&&t in C)return C[t];switch(t){case'keys':case'values':case'entries':return function(){return new n(this,t);};}return function(){return new n(this);};},j=e+' Iterator',O=!1,C=t.prototype,E=C[m]||C['@@iterator']||d&&C[d],S=!y&&E||x(d),P='Array'==e&&C.entries||E;if(P&&(_=o(P.call(new t())),f!==Object.prototype&&_.next&&(h||o(_)===f||(a?a(_,f):'function'!=typeof _[m]&&l(_,m,b)),s(_,j,!0,!0),h&&(p[j]=b))),'values'==d&&E&&'values'!==E.name&&(O=!0,S=function(){return E.call(this);}),h&&!g||C[m]===S||l(C,m,S),p[e]=S,d)if(w={values:x('values'),keys:v?S:x('keys'),entries:x('entries')},g)for(k in w)(y||O||!(k in C))&&c(C,k,w[k]);else r({target:e,proto:!0,forced:y||O},w);return w;};},function(t,e,n){var r,i,o,a=n(77),s=n(40),l=n(28),c=n(19),u=n(64),h=c('iterator'),p=!1;[].keys&&('next'in(o=[].keys())?(i=a(a(o)))!==Object.prototype&&(r=i):p=!0),null==r&&(r={}),u||l(r,h)||s(r,h,function(){return this;}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p};},function(t,e,n){var r=n(17);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t())!==t.prototype;});},function(t,e,n){var r=n(23),i=n(67),o=n(35),a=n(74).f,s=function(t){return function(e){for(var n,s=o(e),l=i(s),c=l.length,u=0,h=[];c>u;)n=l[u++],r&&!a.call(s,n)||h.push(t?[n,s[n]]:s[n]);return h;};};t.exports={entries:s(!0),values:s(!1)};},function(t,e,n){var r=n(50),i=n(39),o=function(t){return function(e,n){var o,a,s=String(i(e)),l=r(n),c=s.length;return l<0||l>=c?t?'':void 0:(o=s.charCodeAt(l))<55296||o>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):o:t?s.slice(l,l+2):a-56320+(o-55296<<10)+65536;};};t.exports={codeAt:o(!1),charAt:o(!0)};},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};},function(t,e,n){var r=n(27),i=n(96);t.exports=function(t,e,n){var o,a;return i&&'function'==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t;};},function(t,e,n){var r=n(17);function i(t,e){return RegExp(t,e);}e.UNSUPPORTED_Y=r(function(){var t=i('a','y');return t.lastIndex=2,null!=t.exec('abcd');}),e.BROKEN_CARET=r(function(){var t=i('^r','gy');return t.lastIndex=2,null!=t.exec('str');});},function(t,e,n){var r=n(98);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t;};},function(t,e,n){var r=n(19)('match');t.exports=function(t){var e=/./;try{'/./'[t](e);}catch(n){try{return e[r]=!1,'/./'[t](e);}catch(t){}}return!1;};},function(t,e,n){var r=n(56),i=n(27),o=[].slice,a={},s=function(t,e,n){if(!(e in a)){for(var r=[],i=0;i<e;i++)r[i]='a['+i+']';a[e]=Function('C,a','return new C('+r.join(',')+')');}return a[e](t,n);};t.exports=Function.bind||function(t){var e=r(this),n=o.call(arguments,1),a=function(){var r=n.concat(o.call(arguments));return this instanceof a?s(e,r.length,r):e.apply(t,r);};return i(e.prototype)&&(a.prototype=e.prototype),a;};},function(t,e,n){n(14)({target:'Function',proto:!0},{bind:n(131)});},function(t,e,n){var r=n(14),i=n(86),o=n(50),a=n(36),s=n(32),l=n(92),c=n(68),u=n(69),h=n(37),p=u('splice'),d=h('splice',{ACCESSORS:!0,0:0,1:2}),f=Math.max,y=Math.min;r({target:'Array',proto:!0,forced:!p||!d},{splice:function(t,e){var n,r,u,h,p,d,m=s(this),b=a(m.length),v=i(t,b),g=arguments.length;if(0===g?n=r=0:1===g?(n=0,r=b-v):(n=g-2,r=y(f(o(e),0),b-v)),b+n-r>9007199254740991)throw TypeError('Maximum allowed length exceeded');for(u=l(m,r),h=0;h<r;h++)(p=v+h)in m&&c(u,h,m[p]);if(u.length=r,n<r){for(h=v;h<b-r;h++)d=h+n,(p=h+r)in m?m[d]=m[p]:delete m[d];for(h=b;h>b-r+n;h--)delete m[h-1];}else if(n>r)for(h=b-r;h>v;h--)d=h+n-1,(p=h+r-1)in m?m[d]=m[p]:delete m[d];for(h=0;h<n;h++)m[h+v]=arguments[h+2];return m.length=b-r+n,u;}});},function(t,e,n){var r=n(14),i=n(56),o=n(32),a=n(17),s=n(52),l=[],c=l.sort,u=a(function(){l.sort(void 0);}),h=a(function(){l.sort(null);}),p=s('sort');r({target:'Array',proto:!0,forced:u||!h||!p},{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t));}});},function(t,e,n){var r=n(14),i=n(50),o=n(161),a=n(162),s=n(17),l=1 .toFixed,c=Math.floor,u=function(t,e,n){return 0===e?n:e%2==1?u(t,e-1,n*t):u(t*t,e/2,n);};r({target:'Number',proto:!0,forced:l&&('0.000'!==8e-5.toFixed(3)||'1'!==0.9.toFixed(0)||'1.25'!==1.255.toFixed(2)||'1000000000000000128'!==0xde0b6b3a7640080.toFixed(0))||!s(function(){l.call({});})},{toFixed:function(t){var e,n,r,s,l=o(this),h=i(t),p=[0,0,0,0,0,0],d='',f='0',y=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*p[n],p[n]=r%1e7,r=c(r/1e7);},m=function(t){for(var e=6,n=0;--e>=0;)n+=p[e],p[e]=c(n/t),n=n%t*1e7;},b=function(){for(var t=6,e='';--t>=0;)if(''!==e||0===t||0!==p[t]){var n=String(p[t]);e=''===e?n:e+a.call('0',7-n.length)+n;}return e;};if(h<0||h>20)throw RangeError('Incorrect fraction digits');if(l!=l)return'NaN';if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(d='-',l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e;}(l*u(2,69,1))-69)<0?l*u(2,-e,1):l/u(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(0,n),r=h;r>=7;)y(1e7,0),r-=7;for(y(u(10,r,1),0),r=e-1;r>=23;)m(1<<23),r-=23;m(1<<r),y(1,1),m(2),f=b();}else y(0,n),y(1<<-e,0),f=b()+a.call('0',h);return f=h>0?d+((s=f.length)<=h?'0.'+a.call('0',h-s)+f:f.slice(0,s-h)+'.'+f.slice(s-h)):d+f;}});},function(t,e,n){var r=n(23),i=n(22),o=n(89),a=n(45),s=n(28),l=n(49),c=n(127),u=n(62),h=n(17),p=n(55),d=n(65).f,f=n(47).f,y=n(30).f,m=n(80).trim,b=i.Number,v=b.prototype,g='Number'==l(p(v)),_=function(t){var e,n,r,i,o,a,s,l,c=u(t,!1);if('string'==typeof c&&c.length>2)if(43===(e=(c=m(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN;}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c;}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((l=o.charCodeAt(s))<48||l>i)return NaN;return parseInt(o,r);}return+c;};if(o('Number',!b(' 0o1')||!b('0b1')||b('+0x1'))){for(var w,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(g?h(function(){v.valueOf.call(n);}):'Number'!=l(n))?c(new b(_(e)),n,k):_(e);},x=r?d(b):'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(','),j=0;x.length>j;j++)s(b,w=x[j])&&!s(k,w)&&y(k,w,f(b,w));k.prototype=v,v.constructor=k,a(i,'Number',k);}},function(t,e){},function(t,e){var n;n=function(){return this;}();try{n=n||new Function('return this')();}catch(t){'object'==typeof window&&(n=window);}t.exports=n;},function(t,e,n){var r=n(22),i=n(106),o=r.WeakMap;t.exports='function'==typeof o&&/native code/.test(i(o));},function(t,e,n){var r=n(54);t.exports=r('document','documentElement');},function(t,e,n){var r=n(35),i=n(65).f,o={}.toString,a='object'==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&'[object Window]'==o.call(t)?function(t){try{return i(t);}catch(t){return a.slice();}}(t):i(r(t));};},function(t,e,n){var r=n(116),i=n(32),o=n(143),a=n(144),s=n(36),l=n(68),c=n(145);t.exports=function(t){var e,n,u,h,p,d,f=i(t),y='function'==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,v=void 0!==b,g=c(f),_=0;if(v&&(b=r(b,m>2?arguments[2]:void 0,2)),null==g||y==Array&&a(g))for(n=new y(e=s(f.length));e>_;_++)d=v?b(f[_],_):f[_],l(n,_,d);else for(p=(h=g.call(f)).next,n=new y();!(u=p.call(h)).done;_++)d=v?o(h,b,[u.value,_],!0):u.value,l(n,_,d);return n.length=_,n;};},function(t,e,n){var r=n(29);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n);}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e;}};},function(t,e,n){var r=n(19),i=n(70),o=r('iterator'),a=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||a[o]===t);};},function(t,e,n){var r=n(120),i=n(70),o=n(19)('iterator');t.exports=function(t){if(null!=t)return t[o]||t['@@iterator']||i[r(t)];};},function(t,e,n){var r=n(19)('iterator'),i=!1;try{var o=0,a={next:function(){return{done:!!o++};},return:function(){i=!0;}};a[r]=function(){return this;},Array.from(a,function(){throw 2;});}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0};}};},t(o);}catch(t){}return n;};},function(t,e,n){var r=n(122).IteratorPrototype,i=n(55),o=n(60),a=n(91),s=n(70),l=function(){return this;};t.exports=function(t,e,n){var c=e+' Iterator';return t.prototype=i(r,{next:o(1,n)}),a(t,c,!1,!0),s[c]=l,t;};},function(t,e,n){var r=n(27);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+' as a prototype');return t;};},function(t,e,n){var r=n(56),i=n(32),o=n(61),a=n(36),s=function(t){return function(e,n,s,l){r(n);var c=i(e),u=o(c),h=a(c.length),p=t?h-1:0,d=t?-1:1;if(s<2)for(;;){if(p in u){l=u[p],p+=d;break;}if(p+=d,t?p<0:h<=p)throw TypeError('Reduce of empty array with no initial value');}for(;t?p>=0:h>p;p+=d)p in u&&(l=n(l,u[p],p,c));return l;};};t.exports={left:s(!1),right:s(!0)};},function(t,e,n){var r=n(14),i=n(151);r({target:'Object',stat:!0,forced:Object.assign!==i},{assign:i});},function(t,e,n){var r=n(23),i=n(17),o=n(67),a=n(88),s=n(74),l=n(32),c=n(61),u=Object.assign,h=Object.defineProperty;t.exports=!u||i(function(){if(r&&1!==u({b:1},u(h({},'a',{enumerable:!0,get:function(){h(this,'b',{value:3,enumerable:!1});}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,'abcdefghijklmnopqrst'.split('').forEach(function(t){e[t]=t;}),7!=u({},t)[n]||'abcdefghijklmnopqrst'!=o(u({},e)).join('');})?function(t,e){for(var n=l(t),i=arguments.length,u=1,h=a.f,p=s.f;i>u;)for(var d,f=c(arguments[u++]),y=h?o(f).concat(h(f)):o(f),m=y.length,b=0;m>b;)d=y[b++],r&&!p.call(f,d)||(n[d]=f[d]);return n;}:u;},function(t,e,n){var r=n(95),i=n(120);t.exports=r?{}.toString:function(){return'[object '+i(this)+']';};},function(t,e,n){var r=n(54),i=n(30),o=n(19),a=n(23),s=o('species');t.exports=function(t){var e=r(t),n=i.f;a&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this;}});};},function(t,e,n){var r=n(14),i=n(51).every,o=n(52),a=n(37),s=o('every'),l=a('every');r({target:'Array',proto:!0,forced:!s||!l},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var r=n(22),i=n(80).trim,o=n(81),a=r.parseInt,s=/^[+-]?0[Xx]/,l=8!==a(o+'08')||22!==a(o+'0x16');t.exports=l?function(t,e){var n=i(String(t));return a(n,e>>>0||(s.test(n)?16:10));}:a;},function(t,e,n){var r=n(29),i=n(56),o=n(19)('species');t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n);};},function(t,e,n){var r=n(22),i=n(80).trim,o=n(81),a=r.parseFloat,s=1/a(o+'-0')!=-1/0;t.exports=s?function(t){var e=i(String(t)),n=a(e);return 0===n&&'-'==e.charAt(0)?-0:n;}:a;},function(t,e,n){var r=n(14),i=n(23);r({target:'Object',stat:!0,forced:!i,sham:!i},{defineProperties:n(113)});},function(t,e,n){var r=n(14),i=n(23),o=n(109),a=n(35),s=n(47),l=n(68);r({target:'Object',stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){for(var e,n,r=a(t),i=s.f,c=o(r),u={},h=0;c.length>h;)void 0!==(n=i(r,e=c[h++]))&&l(u,e,n);return u;}});},function(t,e,n){var r=n(14),i=n(22),o=n(118),a=[].slice,s=function(t){return function(e,n){var r=arguments.length>2,i=r?a.call(arguments,2):void 0;return t(r?function(){('function'==typeof e?e:Function(e)).apply(this,i);}:e,n);};};r({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:s(i.setTimeout),setInterval:s(i.setInterval)});},function(t,e,n){var r=n(49);t.exports=function(t){if('number'!=typeof t&&'Number'!=r(t))throw TypeError('Incorrect invocation');return+t;};},function(t,e,n){var r=n(50),i=n(39);t.exports=''.repeat||function(t){var e=String(i(this)),n='',o=r(t);if(o<0||o==1/0)throw RangeError('Wrong number of repetitions');for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n;};},function(t,e,n){var r=n(14),i=n(80).trim;r({target:'String',proto:!0,forced:n(164)('trim')},{trim:function(){return i(this);}});},function(t,e,n){var r=n(17),i=n(81);t.exports=function(t){return r(function(){return!!i[t]()||'​᠎'!='​᠎'[t]()||i[t].name!==t;});};},function(t,e,n){n(14)({target:'Date',stat:!0},{now:function(){return new Date().getTime();}});},function(t,e,n){n.r(e),n.d(e,'JSONEditor',function(){return cl;});n(1),n(2),n(3),n(18),n(93),n(20),n(38),n(25),n(0),n(41),n(31),n(4),n(33),n(150),n(13),n(42),n(5),n(57),n(6),n(7),n(21),n(8),n(58),n(59),n(24),n(43),n(26);var r=['actionscript','batchfile','c','c++','cpp','coffee','csharp','css','dart','django','ejs','erlang','golang','groovy','handlebars','haskell','haxe','html','ini','jade','java','javascript','json','less','lisp','lua','makefile','matlab','mysql','objectivec','pascal','perl','pgsql','php','python','r','ruby','sass','scala','scss','smarty','sql','sqlserver','stylus','svg','twig','vbscript','xml','yaml'],i=[function(t){return'string'===t.type&&'color'===t.format&&'colorpicker';},function(t){return'string'===t.type&&['ip','ipv4','ipv6','hostname'].includes(t.format)&&'ip';},function(t){return'string'===t.type&&r.includes(t.format)&&'ace';},function(t){return'string'===t.type&&['xhtml','bbcode'].includes(t.format)&&'sceditor';},function(t){return'string'===t.type&&'markdown'===t.format&&'simplemde';},function(t){return'string'===t.type&&'jodit'===t.format&&'jodit';},function(t){return'string'===t.type&&'autocomplete'===t.format&&'autocomplete';},function(t){return'string'===t.type&&'uuid'===t.format&&'uuid';},function(t){return'info'===t.format&&'info';},function(t){return'button'===t.format&&'button';},function(t){if(('integer'===t.type||'number'===t.type)&&'stepper'===t.format)return'stepper';},function(t){if(t.links)for(var e=0;e<t.links.length;e++)if(t.links[e].rel&&'describedby'===t.links[e].rel.toLowerCase())return'describedBy';},function(t){return['string','integer'].includes(t.type)&&['starrating','rating'].includes(t.format)&&'starrating';},function(t){return['string','integer'].includes(t.type)&&['date','time','datetime-local'].includes(t.format)&&'datetime';},function(t){return(t.oneOf||t.anyOf)&&'multiple';},function(t){if('array'===t.type&&t.items&&!Array.isArray(t.items)&&['string','number','integer'].includes(t.items.type)){if('choices'===t.format)return'arrayChoices';if(t.uniqueItems){if('selectize'===t.format)return'arraySelectize';if('select2'===t.format)return'arraySelect2';if(t.items.enum)return'multiselect';}}},function(t){if(t.enum){if('array'===t.type||'object'===t.type)return'enum';if('number'===t.type||'integer'===t.type||'string'===t.type)return'radio'===t.format?'radio':'select2'===t.format?'select2':'selectize'===t.format?'selectize':'choices'===t.format?'choices':'select';}},function(t){if(t.enumSource)return'radio'===t.format?'radio':'select2'===t.format?'select2':'selectize'===t.format?'selectize':'choices'===t.format?'choices':'select';},function(t){return'array'===t.type&&'table'===t.format&&'table';},function(t){return'string'===t.type&&'url'===t.format&&window.FileReader&&t.options&&t.options.upload===Object(t.options.upload)&&'upload';},function(t){return'string'===t.type&&t.media&&'base64'===t.media.binaryEncoding&&'base64';},function(t){return'any'===t.type&&'multiple';},function(t){if('boolean'===t.type)return'checkbox'===t.format||t.options&&t.options.checkbox?'checkbox':'select2'===t.format?'select2':'selectize'===t.format?'selectize':'choices'===t.format?'choices':'select';},function(t){return'string'===t.type&&'signature'===t.format&&'signature';},function(t){return'string'==typeof t.type&&t.type;},function(t){return!t.type&&t.properties&&'object';},function(t){return'string'!=typeof t.type&&'multiple';}];function o(t,e){return function(t){if(Array.isArray(t))return t;}(t)||function(t,e){if('undefined'==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t;}finally{try{r||null==s.return||s.return();}finally{if(i)throw o;}}return n;}(t,e)||function(t,e){if(!t)return;if('string'==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);'Object'===n&&t.constructor&&(n=t.constructor.name);if('Map'===n||'Set'===n)return Array.from(t);if('Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e);}(t,e)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}var s={},l={};l.en={error_notset:'Property must be set',error_notempty:'Value required',error_enum:'Value must be one of the enumerated values',error_const:'Value must be the constant value',error_anyOf:'Value must validate against at least one of the provided schemas',error_oneOf:'Value must validate against exactly one of the provided schemas. It currently validates against {{0}} of the schemas.',error_not:'Value must not validate against the provided schema',error_type_union:'Value must be one of the provided types',error_type:'Value must be of type {{0}}',error_disallow_union:'Value must not be one of the provided disallowed types',error_disallow:'Value must not be of type {{0}}',error_multipleOf:'Value must be a multiple of {{0}}',error_maximum_excl:'Value must be less than {{0}}',error_maximum_incl:'Value must be at most {{0}}',error_minimum_excl:'Value must be greater than {{0}}',error_minimum_incl:'Value must be at least {{0}}',error_maxLength:'Value must be at most {{0}} characters long',error_minLength:'Value must be at least {{0}} characters long',error_pattern:'Value must match the pattern {{0}}',error_additionalItems:'No additional items allowed in this array',error_maxItems:'Value must have at most {{0}} items',error_minItems:'Value must have at least {{0}} items',error_uniqueItems:'Array must have unique items',error_maxProperties:'Object must have at most {{0}} properties',error_minProperties:'Object must have at least {{0}} properties',error_required:"Object is missing the required property '{{0}}'",error_additional_properties:'No additional properties allowed, but property {{0}} is set',error_property_names_exceeds_maxlength:'Property name {{0}} exceeds maxLength',error_property_names_enum_mismatch:'Property name {{0}} does not match any enum values',error_property_names_const_mismatch:'Property name {{0}} does not match the const value',error_property_names_pattern_mismatch:'Property name {{0}} does not match pattern',error_property_names_false:'Property name {{0}} fails when propertyName is false',error_property_names_maxlength:'Property name {{0}} cannot match invalid maxLength',error_property_names_enum:'Property name {{0}} cannot match invalid enum',error_property_names_pattern:'Property name {{0}} cannot match invalid pattern',error_property_names_unsupported:'Unsupported propertyName {{0}}',error_dependency:'Must have property {{0}}',error_date:'Date must be in the format {{0}}',error_time:'Time must be in the format {{0}}',error_datetime_local:'Datetime must be in the format {{0}}',error_invalid_epoch:'Date must be greater than 1 January 1970',error_ipv4:'Value must be a valid IPv4 address in the form of 4 numbers between 0 and 255, separated by dots',error_ipv6:'Value must be a valid IPv6 address',error_hostname:'The hostname has the wrong format',button_save:'Save',button_copy:'Copy',button_cancel:'Cancel',button_add:'Add',button_delete_all:'All',button_delete_all_title:'Delete All',button_delete_last:'Last {{0}}',button_delete_last_title:'Delete Last {{0}}',button_add_row_title:'Add {{0}}',button_move_down_title:'Move down',button_move_up_title:'Move up',button_properties:'Properties',button_object_properties:'Object Properties',button_copy_row_title:'Copy {{0}}',button_delete_row_title:'Delete {{0}}',button_delete_row_title_short:'Delete',button_copy_row_title_short:'Copy',button_collapse:'Collapse',button_expand:'Expand',button_edit_json:'Edit JSON',button_upload:'Upload',flatpickr_toggle_button:'Toggle',flatpickr_clear_button:'Clear',choices_placeholder_text:'Start typing to add value',default_array_item_title:'item',button_delete_node_warning:'Are you sure you want to remove this node?'},Object.entries(s).forEach(function(t){var e=o(t,2),n=e[0],r=e[1];s[n].options=r.options||{};});var c={options:{upload:function(t,e,n){console.log('Upload handler required for upload editor');},prompt_before_delete:!0,use_default_values:!0,max_depth:0},theme:'html',template:'default',themes:{},callbacks:{},templates:{},iconlibs:{},editors:s,languages:l,resolvers:i,custom_validators:[],default_language:'en',language:'en',translate:function(t,e){var n=c.languages[c.language];if(!n)throw new Error('Unknown language '.concat(c.language));var r=n[t]||c.languages.en[t]||t;if(e)for(var i=0;i<e.length;i++)r=r.replace(new RegExp('\\{\\{'.concat(i,'}}'),'g'),e[i]);return r;},translateProperty:function(t,e){return t;}};n(154),n(48),n(44),n(79),n(71),n(46),n(53);function u(t,e,n,r){try{switch(t.format){case'ipv4':!function(t){var e=t.split('.');if(4!==e.length)throw new Error('error_ipv4');e.forEach(function(t){if(isNaN(+t)||+t<0||+t>255)throw new Error('error_ipv4');});}(e);break;case'ipv6':!function(t){if(!t.match('^(?:(?:(?:[a-fA-F0-9]{1,4}:){6}|(?=(?:[a-fA-F0-9]{0,4}:){2,6}(?:[0-9]{1,3}.){3}[0-9]{1,3}$)(([0-9a-fA-F]{1,4}:){1,5}|:)((:[0-9a-fA-F]{1,4}){1,5}:|:)|::(?:[a-fA-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])|(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?=(?:[a-fA-F0-9]{0,4}:){0,7}[a-fA-F0-9]{0,4}$)(([0-9a-fA-F]{1,4}:){1,7}|:)((:[0-9a-fA-F]{1,4}){1,7}|:)|(?:[a-fA-F0-9]{1,4}:){7}:|:(:[a-fA-F0-9]{1,4}){7})$'))throw new Error('error_ipv6');}(e);break;case'hostname':!function(t){if(!t.match('(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9].)+[a-zA-Z]{2,63}$)'))throw new Error('error_hostname');}(e);}return[];}catch(t){return[{path:n,property:'format',message:r(t.message)}];}}n(102);function h(t){return(h='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function p(t){return null!==t&&'object'===h(t)&&!t.nodeType&&t!==t.window&&!(t.constructor&&!b(t.constructor.prototype,'isPrototypeOf'));}function d(t){return p(t)?f({},t):Array.isArray(t)?t.map(d):t;}function f(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.forEach(function(e){e&&Object.keys(e).forEach(function(n){e[n]&&p(e[n])?(b(t,n)||(t[n]={}),f(t[n],e[n])):Array.isArray(e[n])?t[n]=d(e[n]):t[n]=e[n];});}),t;}function y(t,e){var n=document.createEvent('HTMLEvents');n.initEvent(e,!0,!0),t.dispatchEvent(n);}function m(t){return t&&('[object ShadowRoot]'===t.toString()?t:m(t.parentNode));}function b(t,e){return t&&Object.prototype.hasOwnProperty.call(t,e);}var v=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;var g=/^\s*(-|\+)?(\d+)\s*$/;function _(t,e){return function(t){if(Array.isArray(t))return t;}(t)||function(t,e){if('undefined'==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t;}finally{try{r||null==s.return||s.return();}finally{if(i)throw o;}}return n;}(t,e)||k(t,e)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function w(t){return function(t){if(Array.isArray(t))return x(t);}(t)||function(t){if('undefined'!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t);}(t)||k(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function k(t,e){if(t){if('string'==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return'Object'===n&&t.constructor&&(n=t.constructor.name),'Map'===n||'Set'===n?Array.from(t):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0;}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}function j(t){return(j='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}var C=function(){function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,t),this.jsoneditor=e,this.schema=n||this.jsoneditor.schema,this.options=r||{},this.translate=this.jsoneditor.translate||i.translate,this.translateProperty=this.jsoneditor.translateProperty||i.translateProperty,this.defaults=i,this._validateSubSchema={const:function(t,e,n){return JSON.stringify(t.const)===JSON.stringify(e)&&!(Array.isArray(e)||'object'===j(e))?[]:[{path:n,property:'const',message:this.translate('error_const')}];},enum:function(t,e,n){var r=JSON.stringify(e);return t.enum.some(function(t){return r===JSON.stringify(t);})?[]:[{path:n,property:'enum',message:this.translate('error_enum')}];},extends:function(t,e,n){var r=this;return t.extends.reduce(function(t,i){return t.push.apply(t,w(r._validateSchema(i,e,n))),t;},[]);},allOf:function(t,e,n){var r=this;return t.allOf.reduce(function(t,i){return t.push.apply(t,w(r._validateSchema(i,e,n))),t;},[]);},anyOf:function(t,e,n){var r=this;return t.anyOf.some(function(t){return!r._validateSchema(t,e,n).length;})?[]:[{path:n,property:'anyOf',message:this.translate('error_anyOf')}];},oneOf:function(t,e,n){var r=this,i=0,o=[];t.oneOf.forEach(function(t,a){var s=r._validateSchema(t,e,n);s.length||i++,s.forEach(function(t){t.path=''.concat(n,'.oneOf[').concat(a,']').concat(t.path.substr(n.length));}),o.push.apply(o,w(s));});var a=[];return 1!==i&&(a.push({path:n,property:'oneOf',message:this.translate('error_oneOf',[i])}),a.push.apply(a,o)),a;},not:function(t,e,n){return this._validateSchema(t.not,e,n).length?[]:[{path:n,property:'not',message:this.translate('error_not')}];},type:function(t,e,n){var r=this;if(Array.isArray(t.type)){if(!t.type.some(function(t){return r._checkType(t,e);}))return[{path:n,property:'type',message:this.translate('error_type_union')}];}else if(['date','time','datetime-local'].includes(t.format)&&'integer'===t.type){if(!this._checkType('string',''.concat(e)))return[{path:n,property:'type',message:this.translate('error_type',[t.format])}];}else if(!this._checkType(t.type,e))return[{path:n,property:'type',message:this.translate('error_type',[t.type])}];return[];},disallow:function(t,e,n){var r=this;if(Array.isArray(t.disallow)){if(t.disallow.some(function(t){return r._checkType(t,e);}))return[{path:n,property:'disallow',message:this.translate('error_disallow_union')}];}else if(this._checkType(t.disallow,e))return[{path:n,property:'disallow',message:this.translate('error_disallow',[t.disallow])}];return[];}},this._validateNumberSubSchema={multipleOf:function(t,e,n){return this._validateNumberSubSchemaMultipleDivisible(t,e,n);},divisibleBy:function(t,e,n){return this._validateNumberSubSchemaMultipleDivisible(t,e,n);},maximum:function(t,e,n){var r=t.exclusiveMaximum?e<t.maximum:e<=t.maximum;return window.math?r=window.math[t.exclusiveMaximum?'smaller':'smallerEq'](window.math.bignumber(e),window.math.bignumber(t.maximum)):window.Decimal&&(r=new window.Decimal(e)[t.exclusiveMaximum?'lt':'lte'](new window.Decimal(t.maximum))),r?[]:[{path:n,property:'maximum',message:this.translate(t.exclusiveMaximum?'error_maximum_excl':'error_maximum_incl',[t.maximum])}];},minimum:function(t,e,n){var r=t.exclusiveMinimum?e>t.minimum:e>=t.minimum;return window.math?r=window.math[t.exclusiveMinimum?'larger':'largerEq'](window.math.bignumber(e),window.math.bignumber(t.minimum)):window.Decimal&&(r=new window.Decimal(e)[t.exclusiveMinimum?'gt':'gte'](new window.Decimal(t.minimum))),r?[]:[{path:n,property:'minimum',message:this.translate(t.exclusiveMinimum?'error_minimum_excl':'error_minimum_incl',[t.minimum])}];}},this._validateStringSubSchema={maxLength:function(t,e,n){var r=[];return''.concat(e).length>t.maxLength&&r.push({path:n,property:'maxLength',message:this.translate('error_maxLength',[t.maxLength])}),r;},minLength:function(t,e,n){return''.concat(e).length<t.minLength?[{path:n,property:'minLength',message:this.translate(1===t.minLength?'error_notempty':'error_minLength',[t.minLength])}]:[];},pattern:function(t,e,n){return new RegExp(t.pattern).test(e)?[]:[{path:n,property:'pattern',message:t.options&&t.options.patternmessage?t.options.patternmessage:this.translate('error_pattern',[t.pattern])}];}},this._validateArraySubSchema={items:function(t,e,n){var r=this,i=[];if(Array.isArray(t.items)){for(var o=0;o<e.length;o++)if(t.items[o])i.push.apply(i,w(this._validateSchema(t.items[o],e[o],''.concat(n,'.').concat(o))));else{if(!0===t.additionalItems)break;if(!t.additionalItems){if(!1===t.additionalItems){i.push({path:n,property:'additionalItems',message:this.translate('error_additionalItems')});break;}break;}i.push.apply(i,w(this._validateSchema(t.additionalItems,e[o],''.concat(n,'.').concat(o))));}}else e.forEach(function(e,o){i.push.apply(i,w(r._validateSchema(t.items,e,''.concat(n,'.').concat(o))));});return i;},maxItems:function(t,e,n){return e.length>t.maxItems?[{path:n,property:'maxItems',message:this.translate('error_maxItems',[t.maxItems])}]:[];},minItems:function(t,e,n){return e.length<t.minItems?[{path:n,property:'minItems',message:this.translate('error_minItems',[t.minItems])}]:[];},uniqueItems:function(t,e,n){for(var r={},i=0;i<e.length;i++){var o=JSON.stringify(e[i]);if(r[o])return[{path:n,property:'uniqueItems',message:this.translate('error_uniqueItems')}];r[o]=!0;}return[];}},this._validateObjectSubSchema={maxProperties:function(t,e,n){return Object.keys(e).length>t.maxProperties?[{path:n,property:'maxProperties',message:this.translate('error_maxProperties',[t.maxProperties])}]:[];},minProperties:function(t,e,n){return Object.keys(e).length<t.minProperties?[{path:n,property:'minProperties',message:this.translate('error_minProperties',[t.minProperties])}]:[];},required:function(t,e,n){var r=this,i=[];return Array.isArray(t.required)&&t.required.forEach(function(o){if(void 0===e[o]){var a=r.jsoneditor.getEditor(''.concat(n,'.').concat(o));a&&['button','info'].includes(a.schema.format||a.schema.type)||i.push({path:n,property:'required',message:r.translate('error_required',[t&&t.properties&&t.properties[o]&&t.properties[o].title?t.properties[o].title:o])});}}),i;},properties:function(t,e,n,r){var i=this,o=[];return Object.entries(t.properties).forEach(function(t){var a=_(t,2),s=a[0],l=a[1];r[s]=!0,o.push.apply(o,w(i._validateSchema(l,e[s],''.concat(n,'.').concat(s))));}),o;},patternProperties:function(t,e,n,r){var i=this,o=[];return Object.entries(t.patternProperties).forEach(function(t){var a=_(t,2),s=a[0],l=a[1],c=new RegExp(s);Object.entries(e).forEach(function(t){var e=_(t,2),a=e[0],s=e[1];c.test(a)&&(r[a]=!0,o.push.apply(o,w(i._validateSchema(l,s,''.concat(n,'.').concat(a)))));});}),o;}},this._validateObjectSubSchema2={propertyNames:function(t,e,n,r){var i=this,o=[],a=Object.keys(e),s=null,l=function(e){var r='';return s=a[e],'boolean'==typeof t.propertyNames?!0===t.propertyNames?'continue':(o.push({path:n,property:'propertyNames',message:i.translate('error_property_names_false',[s])}),'break'):Object.entries(t.propertyNames).every(function(t){var e=_(t,2),a=e[0],l=e[1],c=!1;switch(a){case'maxLength':if('number'!=typeof l){r='error_property_names_maxlength';break;}if(s.length>l){r='error_property_names_exceeds_maxlength';break;}return!0;case'const':if(l!==s){r='error_property_names_const_mismatch';break;}return!0;case'enum':if(!Array.isArray(l)){r='error_property_names_enum';break;}if(l.forEach(function(t){t===s&&(c=!0);}),!c){r='error_property_names_enum_mismatch';break;}return!0;case'pattern':if('string'!=typeof l){r='error_property_names_pattern';break;}if(!new RegExp(l).test(s)){r='error_property_names_pattern_mismatch';break;}return!0;default:return o.push({path:n,property:'propertyNames',message:i.translate('error_property_names_unsupported',[a])}),!1;}return o.push({path:n,property:'propertyNames',message:i.translate(r,[s])}),!1;})?void 0:'break';};t:for(var c=0;c<a.length;c++){switch(l(c)){case'continue':continue;case'break':break t;}}return o;},additionalProperties:function(t,e,n,r){for(var i=[],o=Object.keys(e),a=0;a<o.length;a++){var s=o[a];if(!r[s]){if(!t.additionalProperties){i.push({path:n,property:'additionalProperties',message:this.translate('error_additional_properties',[s])});break;}if(!0===t.additionalProperties)break;i.push.apply(i,w(this._validateSchema(t.additionalProperties,e[s],''.concat(n,'.').concat(s))));}}return i;},dependencies:function(t,e,n){var r=this,i=[];return Object.entries(t.dependencies).forEach(function(t){var o=_(t,2),a=o[0],s=o[1];void 0!==e[a]&&(Array.isArray(s)?s.forEach(function(t){void 0===e[t]&&i.push({path:n,property:'dependencies',message:r.translate('error_dependency',[t])});}):i.push.apply(i,w(r._validateSchema(s,e,n))));}),i;}};}var e,n,r;return e=t,(n=[{key:'fitTest',value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e7,r={match:0,extra:0};if('object'===j(t)&&null!==t){var i=this._getSchema(e).properties;for(var o in i)if(b(i,o)){if('object'===j(t[o])&&'object'===j(i[o])&&'object'===j(i[o].properties)){var a=this.fitTest(t[o],i[o],n/100);r.match+=a.match,r.extra+=a.extra;}void 0!==t[o]&&(r.match+=n);}else r.extra+=n;}return r;}},{key:'_getSchema',value:function(t){return void 0===t?f({},this.jsoneditor.expandRefs(this.schema)):t;}},{key:'validate',value:function(t){return this._validateSchema(this.schema,t);}},{key:'_validateSchema',value:function(t,e,n){var r=this,i=[];return n=n||this.jsoneditor.root.formname,t=f({},this.jsoneditor.expandRefs(t)),void 0===e?this._validateV3Required(t,e,n):(Object.keys(t).forEach(function(o){r._validateSubSchema[o]&&i.push.apply(i,w(r._validateSubSchema[o].call(r,t,e,n)));}),i.push.apply(i,w(this._validateByValueType(t,e,n))),t.links&&t.links.forEach(function(o,a){o.rel&&'describedby'===o.rel.toLowerCase()&&(t=r._expandSchemaLink(t,a),i.push.apply(i,w(r._validateSchema(t,e,n,r.translate))));}),['date','time','datetime-local'].includes(t.format)&&i.push.apply(i,w(this._validateDateTimeSubSchema(t,e,n))),['uuid'].includes(t.format)&&i.push.apply(i,w(this._validateUUIDSchema(t,e,n))),i.push.apply(i,w(this._validateCustomValidator(t,e,n))),this._removeDuplicateErrors(i));}},{key:'_expandSchemaLink',value:function(t,e){var n=t.links[e].href,r=this.jsoneditor.root.getValue(),i=this.jsoneditor.compileTemplate(n,this.jsoneditor.template),o=document.location.origin+document.location.pathname+i(r);return t.links=t.links.slice(0,e).concat(t.links.slice(e+1)),f({},t,this.jsoneditor.refs[o]);}},{key:'_validateV3Required',value:function(t,e,n){return(void 0!==t.required&&!0===t.required||void 0===t.required&&!0===this.jsoneditor.options.required_by_default)&&'info'!==t.type?[{path:n,property:'required',message:this.translate('error_notset')}]:[];}},{key:'_validateByValueType',value:function(t,e,n){var r=this,i=[];if(null===e)return i;if('number'==typeof e)Object.keys(t).forEach(function(o){r._validateNumberSubSchema[o]&&i.push.apply(i,w(r._validateNumberSubSchema[o].call(r,t,e,n)));});else if('string'==typeof e)Object.keys(t).forEach(function(o){r._validateStringSubSchema[o]&&i.push.apply(i,w(r._validateStringSubSchema[o].call(r,t,e,n)));});else if(Array.isArray(e))Object.keys(t).forEach(function(o){r._validateArraySubSchema[o]&&i.push.apply(i,w(r._validateArraySubSchema[o].call(r,t,e,n)));});else if('object'===j(e)){var o={};Object.keys(t).forEach(function(a){r._validateObjectSubSchema[a]&&i.push.apply(i,w(r._validateObjectSubSchema[a].call(r,t,e,n,o)));}),void 0!==t.additionalProperties||!this.jsoneditor.options.no_additional_properties||t.oneOf||t.anyOf||t.allOf||(t.additionalProperties=!1),Object.keys(t).forEach(function(a){void 0!==r._validateObjectSubSchema2[a]&&i.push.apply(i,w(r._validateObjectSubSchema2[a].call(r,t,e,n,o)));});}return i;}},{key:'_validateUUIDSchema',value:function(t,e,n){return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)?[]:[{path:n,property:'format',message:this.translate('error_pattern',['^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'])}];}},{key:'_validateNumberSubSchemaMultipleDivisible',value:function(t,e,n){var r=t.multipleOf||t.divisibleBy,i=e/r===Math.floor(e/r);return window.math?i=window.math.mod(window.math.bignumber(e),window.math.bignumber(r)).equals(0):window.Decimal&&(i=new window.Decimal(e).mod(new window.Decimal(r)).equals(0)),i?[]:[{path:n,property:t.multipleOf?'multipleOf':'divisibleBy',message:this.translate('error_multipleOf',[r])}];}},{key:'_validateDateTimeSubSchema',value:function(t,e,n){var r=this,i=this.jsoneditor.getEditor(n),o=i&&i.flatpickr?i.flatpickr.config.dateFormat:{date:'"YYYY-MM-DD"',time:'"HH:MM"','datetime-local':'"YYYY-MM-DD HH:MM"'}[t.format];if('integer'===t.type)return function(t,e,n){return 1*e<1?[{path:n,property:'format',message:r.translate('error_invalid_epoch')}]:e!==Math.abs(parseInt(e))?[{path:n,property:'format',message:r.translate('error_'.concat(t.format.replace(/-/g,'_')),[o])}]:[];}(t,e,n);if(i&&i.flatpickr){if(i)return function(t,e,n,i){if(''!==e){var o;if('single'!==i.flatpickr.config.mode){var a='range'===i.flatpickr.config.mode?i.flatpickr.l10n.rangeSeparator:', ';o=i.flatpickr.selectedDates.map(function(t){return i.flatpickr.formatDate(t,i.flatpickr.config.dateFormat);}).join(a);}try{if(o){if(o!==e)throw new Error(''.concat(i.flatpickr.config.mode,' mismatch'));}else if(i.flatpickr.formatDate(i.flatpickr.parseDate(e,i.flatpickr.config.dateFormat),i.flatpickr.config.dateFormat)!==e)throw new Error('mismatch');}catch(t){var s=void 0!==i.flatpickr.config.errorDateFormat?i.flatpickr.config.errorDateFormat:i.flatpickr.config.dateFormat;return[{path:n,property:'format',message:r.translate('error_'.concat(i.format.replace(/-/g,'_')),[s])}];}}return[];}(0,e,n,i);}else if(!{date:/^(\d{4}\D\d{2}\D\d{2})?$/,time:/^(\d{2}:\d{2}(?::\d{2})?)?$/,'datetime-local':/^(\d{4}\D\d{2}\D\d{2}[ T]\d{2}:\d{2}(?::\d{2})?)?$/}[t.format].test(e))return[{path:n,property:'format',message:this.translate('error_'.concat(t.format.replace(/-/g,'_')),[o])}];return[];}},{key:'_validateCustomValidator',value:function(t,e,n){var r=this,i=[];i.push.apply(i,w(u.call(this,t,e,n,this.translate)));var o=function(o){i.push.apply(i,w(o.call(r,t,e,n)));};return this.defaults.custom_validators.forEach(o),this.options.custom_validators&&this.options.custom_validators.forEach(o),i;}},{key:'_removeDuplicateErrors',value:function(t){return t.reduce(function(t,e){var n=!0;return t||(t=[]),t.forEach(function(t){t.message===e.message&&t.path===e.path&&t.property===e.property&&(t.errorcount++,n=!1);}),n&&(e.errorcount=1,t.push(e)),t;},[]);}},{key:'_checkType',value:function(t,e){var n={string:function(t){return'string'==typeof t;},number:function(t){return'number'==typeof t;},integer:function(t){return'number'==typeof t&&t===Math.floor(t);},boolean:function(t){return'boolean'==typeof t;},array:function(t){return Array.isArray(t);},object:function(t){return null!==t&&!Array.isArray(t)&&'object'===j(t);},null:function(t){return null===t;}};return'string'==typeof t?!n[t]||n[t](e):!this._validateSchema(t,e).length;}}])&&O(e.prototype,n),r&&O(e,r),t;}();n(72),n(73),n(34),n(103);function E(t,e){return function(t){if(Array.isArray(t))return t;}(t)||function(t,e){if('undefined'==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t;}finally{try{r||null==s.return||s.return();}finally{if(i)throw o;}}return n;}(t,e)||function(t,e){if(!t)return;if('string'==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);'Object'===n&&t.constructor&&(n=t.constructor.name);if('Map'===n||'Set'===n)return Array.from(t);if('Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e);}(t,e)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}function P(t){return(P='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,t),this.options=e||{},this.refs=this.options.refs||{},this.refs_with_info={},this.refs_prefix='#/counter/',this.refs_counter=1,this._subSchema1={type:function(t){'object'===P(t.type)&&(t.type=this._expandSubSchema(t.type));},disallow:function(t){'object'===P(t.disallow)&&(t.disallow=this._expandSubSchema(t.disallow));},anyOf:function(t){var e=this;Object.entries(t.anyOf).forEach(function(n){var r=E(n,2),i=r[0],o=r[1];t.anyOf[i]=e.expandSchema(o);});},dependencies:function(t){var e=this;Object.entries(t.dependencies).forEach(function(n){var r=E(n,2),i=r[0],o=r[1];'object'!==P(o)||Array.isArray(o)||(t.dependencies[i]=e.expandSchema(o));});},not:function(t){t.not=this.expandSchema(t.not);}},this._subSchema2={allOf:function(t,e){var n=this,r=f({},e);return Object.entries(t.allOf).forEach(function(e){var i=E(e,2),o=i[0],a=i[1];t.allOf[o]=n.expandRefs(a,!0),r=n.extendSchemas(r,n.expandSchema(a));}),delete r.allOf,r;},extends:function(t,e){var n,r=this;return delete(n=Array.isArray(t.extends)?t.extends.reduce(function(t,e,n){return r.extendSchemas(t,r.expandSchema(e));},e):this.extendSchemas(e,this.expandSchema(t.extends))).extends,n;},oneOf:function(t,e){var n=this,r=f({},e);return delete r.oneOf,t.oneOf.reduce(function(t,e,i){return t.oneOf[i]=n.extendSchemas(n.expandSchema(e),r),t;},e),e;}};}var e,n,r;return e=t,(n=[{key:'load',value:function(t,e,n,r){var i=this;this._loadExternalRefs(t,function(){i._getDefinitions(t,''.concat(n,'#/definitions/')),e(i.expandRefs(t));},n,this._getFileBase(r));}},{key:'expandRefs',value:function(t,e){var n=this,r=f({},t);if(!r.$ref)return r;var i=this.refs_with_info[r.$ref];delete r.$ref;var o=i.$ref.startsWith('#')?i.fetchUrl:'',a=this._getRef(o,i);if(this.refs[a]){if(e&&b(this.refs[a],'allOf')){var s=this.refs[a].allOf;Object.keys(s).forEach(function(t){s[t]=n.expandRefs(s[t],!0);});}}else console.warn("reference:'".concat(a,"' not found!"));return this.extendSchemas(r,this.expandSchema(this.refs[a]));}},{key:'expandSchema',value:function(t,e){var n=this;Object.entries(this._subSchema1).forEach(function(e){var r=E(e,2),i=r[0],o=r[1];t[i]&&o.call(n,t);});var r=f({},t);return Object.entries(this._subSchema2).forEach(function(e){var i=E(e,2),o=i[0],a=i[1];t[o]&&(r=a.call(n,t,r));}),this.expandRefs(r);}},{key:'_getRef',value:function(t,e){var n=t+e;return this.refs[n]?n:t+decodeURIComponent(e.$ref);}},{key:'_expandSubSchema',value:function(t){var e=this;return Array.isArray(t)?t.map(function(t){return'object'===('undefined'==typeof value?'undefined':P(value))?e.expandSchema(t):t;}):this.expandSchema(t);}},{key:'_getDefinitions',value:function(t,e){var n=this;t.definitions&&Object.keys(t.definitions).forEach(function(r){n.refs[e+r]=t.definitions[r],t.definitions[r].definitions&&n._getDefinitions(t.definitions[r],''.concat(e+r,'/definitions/'));});}},{key:'_getExternalRefs',value:function(t,e){var n=this,r={},i=function(t){return Object.keys(t).forEach(function(t){r[t]=!0;});};if(t.$ref&&'object'!==P(t.$ref)){var o=this.refs_prefix+this.refs_counter++;'#'===t.$ref.substr(0,1)||this.refs[t.$ref]||(r[t.$ref]=!0),this.refs_with_info[o]={fetchUrl:e,$ref:t.$ref},t.$ref=o;}return Object.values(t).forEach(function(t){t&&'object'===P(t)&&(Array.isArray(t)?Object.values(t).forEach(function(t){t&&'object'===P(t)&&i(n._getExternalRefs(t,e));}):i(n._getExternalRefs(t,e)));}),t.id&&'string'==typeof t.id&&'urn:'===t.id.substr(0,4)?this.refs[t.id]=t:t.$id&&'string'==typeof t.$id&&'urn:'===t.$id.substr(0,4)&&(this.refs[t.$id]=t),r;}},{key:'_getFileBase',value:function(t){if(!t)return'/';var e=this.options.ajaxBase;return void 0===e?this._getFileBaseFromFileLocation(t):e;}},{key:'_getFileBaseFromFileLocation',value:function(t){var e=t.split('/');return e.pop(),''.concat(e.join('/'),'/');}},{key:'_joinUrl',value:function(t,e){var n=t;return'http://'!==t.substr(0,7)&&'https://'!==t.substr(0,8)&&'blob:'!==t.substr(0,5)&&'data:'!==t.substr(0,5)&&'#'!==t.substr(0,1)&&'/'!==t.substr(0,1)&&(n=e+t),n.indexOf('#')>0&&(n=n.substr(0,n.indexOf('#'))),n;}},{key:'_isUniformResourceName',value:function(t){return'urn:'===t.substr(0,4);}},{key:'_loadExternalRefs',value:function(t,e,n,r){var i=this,o=this._getExternalRefs(t,n),a=!1,s=0;Object.keys(o).forEach(function(n){if(!i.refs[n])if(i._isUniformResourceName(n)){i.refs[n]='loading',s++;var o,l=i.options.urn_resolver,c=n;if('function'!=typeof l)throw console.log('No "urn_resolver" callback defined to resolve "'.concat(c,'"')),new Error('Must set urn_resolver option to a callback to resolve '.concat(c));c.indexOf('#')>0&&(c=c.substr(0,c.indexOf('#')));try{o=l(c,function(r){try{t=JSON.parse(r);}catch(t){throw console.log(t),new Error('Failed to parse external ref '.concat(c));}if('boolean'!=typeof t&&'object'!==P(t)||null===t||Array.isArray(t))throw new Error('External ref does not contain a valid schema - '.concat(c));i.refs[n]=t,i._getDefinitions(t,''.concat(c,'#/definitions/')),i._loadExternalRefs(t,function(){s--,a&&!s&&e();},n,'/');});}catch(t){throw console.log(t),new Error('Failed to parse external ref '.concat(c));}if('boolean'!=typeof o)throw new Error('External ref does not contain a valid schema - '.concat(c));if(!0!==o)throw new Error('External ref did not resolve - '.concat(c));}else{if(!i.options.ajax)throw new Error('Must set ajax option to true to load external ref '.concat(n));i.refs[n]='loading',s++;var u=i._joinUrl(n,r),h=new XMLHttpRequest();h.overrideMimeType('application/json'),h.open('GET',u,!0),i.options.ajaxCredentials&&(h.withCredentials=i.options.ajaxCredentials),h.onreadystatechange=function(){if(4===h.readyState){if(200!==h.status)throw console.log(h),new Error('Failed to fetch ref via ajax - '.concat(n));var t;try{t=JSON.parse(h.responseText);}catch(t){throw console.log(t),new Error('Failed to parse external ref '.concat(u));}if('boolean'!=typeof t&&'object'!==P(t)||null===t||Array.isArray(t))throw new Error('External ref does not contain a valid schema - '.concat(u));i.refs[n]=t;var r=i._getFileBaseFromFileLocation(u);if(u!==n){var o=u.split('/');u=('/'===n.substr(0,1)?'/':'')+o.pop();}i._getDefinitions(t,''.concat(u,'#/definitions/')),i._loadExternalRefs(t,function(){s--,a&&!s&&e();},u,r);}},h.send();}}),a=!0,s||e();}},{key:'extendSchemas',value:function(t,e){var n=this;t=f({},t),e=f({},e);var r={},i=function(t,i){!function(t,e){return('required'===t||'defaultProperties'===t)&&'object'===P(e)&&Array.isArray(e);}(t,i)?'type'!==t||'string'!=typeof i&&!Array.isArray(i)?'object'!==P(i)||Array.isArray(i)||null===i?r[t]=i:r[t]=n.extendSchemas(i,e[t]):o(i):r[t]=i.concat(e[t]).reduce(function(t,e){return t.includes(e)||t.push(e),t;},[]);},o=function(t){'string'==typeof t&&(t=[t]),'string'==typeof e.type&&(e.type=[e.type]),e.type&&e.type.length?r.type=t.filter(function(t){return e.type.includes(t);}):r.type=t,1===r.type.length&&'string'==typeof r.type[0]?r.type=r.type[0]:0===r.type.length&&delete r.type;};return Object.entries(t).forEach(function(t){var n=E(t,2),o=n[0],a=n[1];void 0!==e[o]?i(o,a):r[o]=a;}),Object.entries(e).forEach(function(e){var n=E(e,2),i=n[0],o=n[1];void 0===t[i]&&(r[i]=o);}),r;}}])&&R(e.prototype,n),r&&R(e,r),t;}();n(9),n(15),n(10),n(11),n(12),n(16),n(132);function T(t,e){return function(t){if(Array.isArray(t))return t;}(t)||function(t,e){if('undefined'==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t;}finally{try{r||null==s.return||s.return();}finally{if(i)throw o;}}return n;}(t,e)||function(t,e){if(!t)return;if('string'==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);'Object'===n&&t.constructor&&(n=t.constructor.name);if('Map'===n||'Set'===n)return Array.from(t);if('Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e);}(t,e)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}function I(t){return(I='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}var N=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,t),this.defaults=n,this.jsoneditor=e.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=e.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.options=f({},this.options||{},this.schema.options||{},e.schema.options||{},e),this.formname=this.jsoneditor.options.form_name_root||'root',e.path||this.schema.id||(this.schema.id=this.formname),this.path=e.path||this.formname,this.formname=e.formname||this.path.replace(/\.([^.]+)/g,'[$1]'),this.parent=e.parent,this.key=void 0!==this.parent?this.path.split('.').slice(this.parent.path.split('.').length).join('.'):this.path,this.link_watchers=[],this.watchLoop=!1,e.container&&this.setContainer(e.container),this.registerDependencies();}var e,n,r;return e=t,(n=[{key:'onChildEditorChange',value:function(t){this.onChange(!0);}},{key:'notify',value:function(){this.path&&this.jsoneditor.notifyWatchers(this.path);}},{key:'change',value:function(){this.parent?this.parent.onChildEditorChange(this):this.jsoneditor&&this.jsoneditor.onChange();}},{key:'onChange',value:function(t){this.notify(),this.watch_listener&&this.watch_listener(),t&&this.change();}},{key:'register',value:function(){this.jsoneditor.registerEditor(this),this.onChange();}},{key:'unregister',value:function(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this);}},{key:'getNumColumns',value:function(){return 12;}},{key:'isActive',value:function(){return this.active;}},{key:'activate',value:function(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change();}},{key:'deactivate',value:function(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change());}},{key:'registerDependencies',value:function(){var t=this;this.dependenciesFulfilled=!0;var e=this.options.dependencies;e&&Object.keys(e).forEach(function(e){var n=t.path.split('.');n[n.length-1]=e,n=n.join('.'),t.jsoneditor.watch(n,function(){t.evaluateDependencies();});});}},{key:'evaluateDependencies',value:function(){var t=this,e=this.container||this.control;if(e&&null!==this.jsoneditor){var n=this.options.dependencies;if(n){var r=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(n).forEach(function(e){var r=t.path.split('.');r[r.length-1]=e,r=r.join('.');var i=n[e];t.checkDependency(r,i);}),this.dependenciesFulfilled!==r&&this.notify();var i=this.dependenciesFulfilled?'block':'none';this.options.hidden&&(i='none'),'TD'===e.tagName?Object.keys(e.childNodes).forEach(function(t){return e.childNodes[t].style.display=i;}):e.style.display=i;}}}},{key:'checkDependency',value:function(t,e){var n=this;if(this.path!==t&&null!==this.jsoneditor){var r=this.jsoneditor.getEditor(t),i=r?r.getValue():void 0;r&&r.dependenciesFulfilled?Array.isArray(e)?this.dependenciesFulfilled=e.some(function(t){if(i===t)return!0;}):'object'===I(e)?'object'!==I(i)?this.dependenciesFulfilled=e===i:Object.keys(e).some(function(t){return!!b(e,t)&&(b(i,t)&&e[t]===i[t]?void 0:(n.dependenciesFulfilled=!1,!0));}):'string'==typeof e||'number'==typeof e?this.dependenciesFulfilled=this.dependenciesFulfilled&&i===e:'boolean'==typeof e&&(this.dependenciesFulfilled=e?this.dependenciesFulfilled&&(i||i.length>0):this.dependenciesFulfilled&&(!i||0===i.length)):this.dependenciesFulfilled=!1;}}},{key:'setContainer',value:function(t){this.container=t,this.schema.id&&this.container.setAttribute('data-schemaid',this.schema.id),this.schema.type&&'string'==typeof this.schema.type&&this.container.setAttribute('data-schematype',this.schema.type),this.container.setAttribute('data-schemapath',this.path);}},{key:'setOptInCheckbox',value:function(t){var e=this;this.optInCheckbox=document.createElement('input'),this.optInCheckbox.setAttribute('type','checkbox'),this.optInCheckbox.setAttribute('style','margin: 0 10px 0 0;'),this.optInCheckbox.classList.add('json-editor-opt-in'),this.optInCheckbox.addEventListener('click',function(){e.isActive()?e.deactivate():e.activate();}),(this.jsoneditor.options.show_opt_in||this.options.show_opt_in)&&this.parent&&'object'===this.parent.schema.type&&!this.isRequired()&&this.header&&(this.header.appendChild(this.optInCheckbox),this.header.insertBefore(this.optInCheckbox,this.header.firstChild));}},{key:'preBuild',value:function(){}},{key:'build',value:function(){}},{key:'postBuild',value:function(){this.setupWatchListeners(),this.addLinks(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.register(),this.onWatchedFieldChange();}},{key:'setupWatchListeners',value:function(){var t=this;if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=function(){t.refreshWatchedFieldValues()&&t.onWatchedFieldChange();},b(this.schema,'watch')){var e,n,r,i,o,a=this.container.getAttribute('data-schemapath');Object.keys(this.schema.watch).forEach(function(s){if(e=t.schema.watch[s],Array.isArray(e)){if(e.length<2)return;n=[e[0]].concat(e[1].split('.'));}else n=e.split('.'),t.theme.closest(t.container,'[data-schemaid="'.concat(n[0],'"]'))||n.unshift('#');if('#'===(r=n.shift())&&(r=t.jsoneditor.schema.id||t.jsoneditor.root.formname),!(i=t.theme.closest(t.container,'[data-schemaid="'.concat(r,'"]'))))throw new Error('Could not find ancestor node with id '.concat(r));o=''.concat(i.getAttribute('data-schemapath'),'.').concat(n.join('.')),a.startsWith(o)&&(t.watchLoop=!0),t.jsoneditor.watch(o,t.watch_listener),t.watched[s]=o;});}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine));}},{key:'addLinks',value:function(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),void 0!==this.description?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(var t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]));}},{key:'onMove',value:function(){}},{key:'getButton',value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i='json-editor-btn-'.concat(e);e=this.iconlib?this.iconlib.getIcon(e):null,t=this.translate(t,r),n=this.translate(n,r),!e&&n&&(t=n,n=null);var o=this.theme.getButton(t,e,n);return o.classList.add(i),o;}},{key:'setButtonText',value:function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return n=this.iconlib?this.iconlib.getIcon(n):null,e=this.translate(e,i),r=this.translate(r,i),!n&&r&&(e=r,r=null),this.theme.setButtonText(t,e,n,r);}},{key:'addLink',value:function(t){this.link_holder&&this.link_holder.appendChild(t);}},{key:'getLink',value:function(t){var e,n,r=(t.mediaType||'application/javascript').split('/')[0],i=this.jsoneditor.compileTemplate(t.href,this.template_engine),o=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine),a=null;if(t.download&&(a=t.download),a&&!0!==a&&(a=this.jsoneditor.compileTemplate(a,this.template_engine)),'image'===r){e=this.theme.getBlockLinkHolder(),(n=document.createElement('a')).setAttribute('target','_blank');var s=document.createElement('img');this.theme.createImageLink(e,n,s),this.link_watchers.push(function(t){var e=i(t),r=o(t);n.setAttribute('href',e),n.setAttribute('title',r||e),s.setAttribute('src',e);});}else if(['audio','video'].includes(r)){e=this.theme.getBlockLinkHolder(),(n=this.theme.getBlockLink()).setAttribute('target','_blank');var l=document.createElement(r);l.setAttribute('controls','controls'),this.theme.createMediaLink(e,n,l),this.link_watchers.push(function(t){var e=i(t),r=o(t);n.setAttribute('href',e),n.textContent=r||e,l.setAttribute('src',e);});}else n=e=this.theme.getBlockLink(),e.setAttribute('target','_blank'),e.textContent=t.rel,e.style.display='none',this.link_watchers.push(function(t){var n=i(t),r=o(t);n&&(e.style.display=''),e.setAttribute('href',n),e.textContent=r||n;});return a&&n&&(!0===a?n.setAttribute('download',''):this.link_watchers.push(function(t){n.setAttribute('download',a(t));})),t.class&&n.classList.add(t.class),e;}},{key:'refreshWatchedFieldValues',value:function(){var t=this;if(this.watched_values){var e={},n=!1;return this.watched&&Object.keys(this.watched).forEach(function(r){var i=t.jsoneditor.getEditor(t.watched[r]),o=i?i.getValue():null;t.watched_values[r]!==o&&(n=!0),e[r]=o;}),e.self=this.getValue(),this.watched_values.self!==e.self&&(n=!0),this.watched_values=e,n;}}},{key:'getWatchedFieldValues',value:function(){return this.watched_values;}},{key:'updateHeaderText',value:function(){if(this.header){var t=this.getHeaderText();if(this.header.children.length){for(var e=0;e<this.header.childNodes.length;e++)if(3===this.header.childNodes[e].nodeType){this.header.childNodes[e].nodeValue=this.cleanText(t);break;}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t);}}},{key:'getHeaderText',value:function(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle();}},{key:'getPathDepth',value:function(){return this.path.split('.').length;}},{key:'cleanText',value:function(t){var e=document.createElement('div');return e.innerHTML=t,e.textContent||e.innerText;}},{key:'onWatchedFieldChange',value:function(){var t;if(this.header_template){t=f(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:1*this.key,i1:1*this.key+1,title:this.getTitle()});var e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify());}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(var n=0;n<this.link_watchers.length;n++)this.link_watchers[n](t);}}},{key:'setValue',value:function(t){this.value=t;}},{key:'getValue',value:function(){if(this.dependenciesFulfilled)return this.value;}},{key:'refreshValue',value:function(){}},{key:'getChildEditors',value:function(){return!1;}},{key:'destroy',value:function(){var t=this;this.unregister(this),this.watched&&Object.values(this.watched).forEach(function(e){return t.jsoneditor.unwatch(e,t.watch_listener);}),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null;}},{key:'isDefaultRequired',value:function(){return this.isRequired()||!!this.jsoneditor.options.use_default_values;}},{key:'getDefault',value:function(){if(void 0!==this.schema.default)return this.schema.default;if(void 0!==this.schema.enum)return this.schema.enum[0];var t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&'object'===I(t)&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),'string'==typeof t){if('number'===t)return this.isDefaultRequired()?0:void 0;if('boolean'===t)return!this.isDefaultRequired()&&void 0;if('integer'===t)return this.isDefaultRequired()?0:void 0;if('string'===t)return'';if('object'===t)return{};if('array'===t)return[];}return null;}},{key:'getTitle',value:function(){return this.translateProperty(this.schema.title||this.key);}},{key:'enable',value:function(){this.disabled=!1;}},{key:'disable',value:function(){this.disabled=!0;}},{key:'isEnabled',value:function(){return!this.disabled;}},{key:'isRequired',value:function(){return'boolean'==typeof this.schema.required?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default;}},{key:'getDisplayText',value:function(t){var e=[],n={};t.forEach(function(t){t.title&&(n[t.title]=n[t.title]||0,n[t.title]++),t.description&&(n[t.description]=n[t.description]||0,n[t.description]++),t.format&&(n[t.format]=n[t.format]||0,n[t.format]++),t.type&&(n[t.type]=n[t.type]||0,n[t.type]++);}),t.forEach(function(t){var r;r='string'==typeof t?t:t.title&&n[t.title]<=1?t.title:t.format&&n[t.format]<=1?t.format:t.type&&n[t.type]<=1?t.type:t.description&&n[t.description]<=1?t.descripton:t.title?t.title:t.format?t.format:t.type?t.type:t.description?t.description:JSON.stringify(t).length<500?JSON.stringify(t):'type',e.push(r);});var r={};return e.forEach(function(t,i){r[t]=r[t]||0,r[t]++,n[t]>1&&(e[i]=''.concat(t,' ').concat(r[t]));}),e;}},{key:'getValidId',value:function(t){return(t=void 0===t?'':t.toString()).replace(/\s+/g,'-');}},{key:'setInputAttributes',value:function(t){var e=this;if(this.schema.options&&this.schema.options.inputAttributes){var n=this.schema.options.inputAttributes,r=['name','type'].concat(t);Object.keys(n).forEach(function(t){r.includes(t.toLowerCase())||e.input.setAttribute(t,n[t]);});}}},{key:'expandCallbacks',value:function(t,e){var n=this,r=this.defaults.callbacks[t];return Object.entries(e).forEach(function(i){var o=T(i,2),a=o[0],s=o[1];s===Object(s)?e[a]=n.expandCallbacks(t,s):'string'==typeof s&&'object'===I(r)&&'function'==typeof r[s]&&(e[a]=r[s].bind(null,n));}),e;}},{key:'showValidationErrors',value:function(t){}}])&&D(e.prototype,n),r&&D(e,r),t;}();function B(t){return(B='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function F(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function H(t,e,n){return(H='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function M(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=U(t);if(e){var i=U(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return q(this,n);};}function q(t,e){return!e||'object'!==B(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var G=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e);}(o,t);var e,n,r,i=M(o);function o(){return F(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'register',value:function(){H(U(o.prototype),'register',this).call(this),this.input&&this.input.setAttribute('name',this.formname);}},{key:'unregister',value:function(){H(U(o.prototype),'unregister',this).call(this),this.input&&this.input.removeAttribute('name');}},{key:'setValue',value:function(t,e,n){if((!this.template||n)&&(this.shouldBeUnset()||null!=t?'object'===B(t)?t=JSON.stringify(t):this.shouldBeUnset()||'string'==typeof t||(t=''.concat(t)):t='',t!==this.serialized)){var r=this.sanitize(t);if(this.input.value!==r){if(this.setValueToInputField(r),'range'===this.format){var i=this.control.querySelector('output');i&&(i.value=r);}var o=n||this.getValue()!==t;return this.refreshValue(),e?this.is_dirty=!1:'change'===this.jsoneditor.options.show_errors&&(this.is_dirty=!0),this.adjust_height&&this.adjust_height(this.input),this.onChange(o),{changed:o,value:r};}}}},{key:'setValueToInputField',value:function(t){this.input.value=void 0===t?'':t;}},{key:'getNumColumns',value:function(){var t,e=Math.ceil(Math.max(this.getTitle().length,this.schema.maxLength||0,this.schema.minLength||0)/5);return t='textarea'===this.input_type?6:['text','email'].includes(this.input_type)?4:2,Math.min(12,Math.max(e,t));}},{key:'build',value:function(){var t=this;if(this.options.compact||(this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description))),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.format=this.schema.format,!this.format&&this.schema.media&&this.schema.media.type&&(this.format=this.schema.media.type.replace(/(^(application|text)\/(x-)?(script\.)?)|(-source$)/g,'')),!this.format&&this.options.default_format&&(this.format=this.options.default_format),this.options.format&&(this.format=this.options.format),this.format){if('textarea'===this.format)this.input_type='textarea',this.input=this.theme.getTextareaInput();else if('range'===this.format){this.input_type='range';var e=this.schema.minimum||0,n=this.schema.maximum||Math.max(100,e+1),r=1;this.schema.multipleOf&&(e%this.schema.multipleOf&&(e=Math.ceil(e/this.schema.multipleOf)*this.schema.multipleOf),n%this.schema.multipleOf&&(n=Math.floor(n/this.schema.multipleOf)*this.schema.multipleOf),r=this.schema.multipleOf),this.input=this.theme.getRangeInput(e,n,r);}else this.input_type='text',['button','checkbox','color','date','datetime-local','email','file','hidden','image','month','number','password','radio','reset','search','submit','tel','text','time','url','week'].includes(this.format)&&(this.input_type=this.format),this.input=this.theme.getFormInputField(this.input_type);}else this.input_type='text',this.input=this.theme.getFormInputField(this.input_type);void 0!==this.schema.maxLength&&this.input.setAttribute('maxlength',this.schema.maxLength),void 0!==this.schema.pattern?this.input.setAttribute('pattern',this.schema.pattern):void 0!==this.schema.minLength&&this.input.setAttribute('pattern','.{'.concat(this.schema.minLength,',}')),this.options.compact?this.container.classList.add('compact'):this.options.input_width&&(this.input.style.width=this.options.input_width),(this.schema.readOnly||this.schema.readonly||this.schema.template)&&(this.disable(!0),this.input.setAttribute('readonly','true')),this.setInputAttributes(['maxlength','pattern','readonly','min','max','step']),this.input.addEventListener('change',function(e){if(e.preventDefault(),e.stopPropagation(),t.schema.template)e.currentTarget.value=t.value;else{var n=e.currentTarget.value,r=t.sanitize(n);n!==r&&(e.currentTarget.value=r),t.is_dirty=!0,t.refreshValue(),t.onChange(!0);}}),this.options.input_height&&(this.input.style.height=this.options.input_height),this.options.expand_height&&(this.adjust_height=function(t){if(t){var e,n=t.offsetHeight;if(t.offsetHeight<t.scrollHeight)for(e=0;t.offsetHeight<t.scrollHeight+3&&!(e>100);)e++,n++,t.style.height=''.concat(n,'px');else{for(e=0;t.offsetHeight>=t.scrollHeight+3&&!(e>100);)e++,n--,t.style.height=''.concat(n,'px');t.style.height=''.concat(n+1,'px');}}},this.input.addEventListener('keyup',function(e){t.adjust_height(e.currentTarget);}),this.input.addEventListener('change',function(e){t.adjust_height(e.currentTarget);}),this.adjust_height()),this.format&&this.input.setAttribute('data-schemaformat',this.format);var i=this.input;if('range'===this.format&&(i=this.theme.getRangeControl(this.input,this.theme.getRangeOutput(this.input,this.schema.default||Math.max(this.schema.minimum||0,0)))),this.control=this.theme.getFormControl(this.label,i,this.description,this.infoButton),this.container.appendChild(this.control),window.requestAnimationFrame(function(){t.input.parentNode&&t.afterInputReady(),t.adjust_height&&t.adjust_height(t.input);}),this.schema.template){var o=this.expandCallbacks('template',{template:this.schema.template});'function'==typeof o.template?this.template=o.template:this.template=this.jsoneditor.compileTemplate(this.schema.template,this.template_engine),this.refreshValue();}else this.refreshValue();}},{key:'setupCleave',value:function(t){var e=this.expandCallbacks('cleave',f({},this.defaults.options.cleave||{},this.options.cleave||{}));'object'===B(e)&&Object.keys(e).length>0&&(this.cleave_instance=new window.Cleave(t,e));}},{key:'setupImask',value:function(t){var e=this.expandCallbacks('imask',f({},this.defaults.options.imask||{},this.options.imask||{}));'object'===B(e)&&Object.keys(e).length>0&&(this.imask_instance=window.IMask(t,this.ajustIMaskOptions(e)));}},{key:'ajustIMaskOptions',value:function(t){var e=this;return Object.keys(t).forEach(function(n){if(t[n]===Object(t[n]))t[n]=e.ajustIMaskOptions(t[n]);else if('mask'===n)if('regex:'===t[n].substr(0,6)){var r=t[n].match(/^regex:\/(.*)\/([gimsuy]*)$/);if(null!==r)try{t[n]=new RegExp(r[1],r[2]);}catch(t){}}else t[n]=e.getGlobalPropertyFromString(t[n]);}),t;}},{key:'getGlobalPropertyFromString',value:function(t){if(t.includes('.')){var e=t.split('.'),n=e[0],r=e[1];if(void 0!==window[n]&&void 0!==window[n][r])return window[n][r];}else if(void 0!==window[t])return window[t];return t;}},{key:'shouldBeUnset',value:function(){return!this.jsoneditor.options.use_default_values&&!this.is_dirty;}},{key:'getValue',value:function(){var t=!(!this.input||!this.input.value);if(!this.shouldBeUnset()||t)return this.imask_instance&&this.dependenciesFulfilled&&this.options.imask.returnUnmasked?this.imask_instance.unmaskedValue:H(U(o.prototype),'getValue',this).call(this);}},{key:'enable',value:function(){this.always_disabled||(this.input.disabled=!1,H(U(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.input.disabled=!0,H(U(o.prototype),'disable',this).call(this);}},{key:'afterInputReady',value:function(){this.theme.afterInputReady(this.input),window.Cleave&&!this.cleave_instance?this.setupCleave(this.input):window.IMask&&!this.imask_instance&&this.setupImask(this.input);}},{key:'refreshValue',value:function(){this.value=this.input.value,'string'==typeof this.value||this.shouldBeUnset()||(this.value=''),this.serialized=this.value;}},{key:'destroy',value:function(){this.cleave_instance&&this.cleave_instance.destroy(),this.imask_instance&&this.imask_instance.destroy(),this.template=null,this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),H(U(o.prototype),'destroy',this).call(this);}},{key:'sanitize',value:function(t){return t;}},{key:'onWatchedFieldChange',value:function(){var t;this.template&&(t=this.getWatchedFieldValues(),this.setValue(this.template(t),!1,!0)),H(U(o.prototype),'onWatchedFieldChange',this).call(this);}},{key:'showValidationErrors',value:function(t){var e=this;if('always'===this.jsoneditor.options.show_errors);else if(!this.is_dirty&&this.previous_error_setting===this.jsoneditor.options.show_errors)return;this.previous_error_setting=this.jsoneditor.options.show_errors;var n=t.reduce(function(t,n){return n.path===e.path&&t.push(n.message),t;},[]);n.length?this.theme.addInputError(this.input,''.concat(n.join('. '),'.')):this.theme.removeInputError(this.input);}}])&&V(e.prototype,n),r&&V(e,r),o;}(N);function $(t){return($='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function J(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Z(t,e,n){return(Z='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Q(t,e){return(Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Y(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=K(t);if(e){var i=K(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return X(this,n);};}function X(t,e){return!e||'object'!==$(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var tt=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Q(t,e);}(o,t);var e,n,r,i=Y(o);function o(){return J(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e,n){var r=Z(K(o.prototype),'setValue',this).call(this,t,e,n);void 0!==r&&r.changed&&this.ace_editor_instance&&(this.ace_editor_instance.setValue(r.value),this.ace_editor_instance.session.getSelection().clearSelection(),this.ace_editor_instance.resize());}},{key:'build',value:function(){this.options.format='textarea',Z(K(o.prototype),'build',this).call(this),this.input_type=this.schema.format,this.input.setAttribute('data-schemaformat',this.input_type);}},{key:'afterInputReady',value:function(){var t,e=this;if(window.ace){var n=this.input_type;'cpp'!==n&&'c++'!==n&&'c'!==n||(n='c_cpp'),t=this.expandCallbacks('ace',f({},{selectionStyle:'text',minLines:30,maxLines:30},this.defaults.options.ace||{},this.options.ace||{},{mode:'ace/mode/'.concat(n)})),this.ace_container=document.createElement('div'),this.ace_container.style.width='100%',this.ace_container.style.position='relative',this.input.parentNode.insertBefore(this.ace_container,this.input),this.input.style.display='none',this.ace_editor_instance=window.ace.edit(this.ace_container,t),this.ace_editor_instance.setValue(this.getValue()),this.ace_editor_instance.session.getSelection().clearSelection(),this.ace_editor_instance.resize(),(this.schema.readOnly||this.schema.readonly||this.schema.template)&&this.ace_editor_instance.setReadOnly(!0),this.ace_editor_instance.on('change',function(){e.input.value=e.ace_editor_instance.getValue(),e.refreshValue(),e.is_dirty=!0,e.onChange(!0);}),this.theme.afterInputReady(this.input);}else Z(K(o.prototype),'afterInputReady',this).call(this);}},{key:'getNumColumns',value:function(){return 6;}},{key:'enable',value:function(){!this.always_disabled&&this.ace_editor_instance&&this.ace_editor_instance.setReadOnly(!1),Z(K(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.ace_editor_instance&&this.ace_editor_instance.setReadOnly(!0),Z(K(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.ace_editor_instance&&(this.ace_editor_instance.destroy(),this.ace_editor_instance=null),Z(K(o.prototype),'destroy',this).call(this);}}])&&W(e.prototype,n),r&&W(e,r),o;}(G);function et(t){return(et='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function nt(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function it(t,e,n){return(it='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=lt(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function ot(t,e){return(ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function at(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=lt(t);if(e){var i=lt(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return st(this,n);};}function st(t,e){return!e||'object'!==et(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function lt(t){return(lt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var ct=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e);}(o,t);var e,n,r,i=at(o);function o(){return nt(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'askConfirmation',value:function(){return!0!==this.jsoneditor.options.prompt_before_delete||!1!==window.confirm(this.translate('button_delete_node_warning'));}},{key:'getDefault',value:function(){return this.schema.default||[];}},{key:'register',value:function(){it(lt(o.prototype),'register',this).call(this),this.rows&&this.rows.forEach(function(t){return t.register();});}},{key:'unregister',value:function(){it(lt(o.prototype),'unregister',this).call(this),this.rows&&this.rows.forEach(function(t){return t.unregister();});}},{key:'getNumColumns',value:function(){var t=this.getItemInfo(0);return this.tabs_holder&&'tabs-top'!==this.schema.format?Math.max(Math.min(12,t.width+2),4):t.width;}},{key:'enable',value:function(){var t=this;this.always_disabled||(this.setAvailability(this,!1),this.rows&&this.rows.forEach(function(e){e.enable(),t.setAvailability(e,!1);}),it(lt(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){var e=this;t&&(this.always_disabled=!0),this.setAvailability(this,!0),this.rows&&this.rows.forEach(function(n){n.disable(t),e.setAvailability(n,!0);}),it(lt(o.prototype),'disable',this).call(this);}},{key:'setAvailability',value:function(t,e){t.add_row_button&&(t.add_row_button.disabled=e),t.remove_all_rows_button&&(t.remove_all_rows_button.disabled=e),t.delete_last_row_button&&(t.delete_last_row_button.disabled=e),t.copy_button&&(t.copy_button.disabled=e),t.delete_button&&(t.delete_button.disabled=e),t.moveup_button&&(t.moveup_button.disabled=e),t.movedown_button&&(t.movedown_button.disabled=e);}},{key:'preBuild',value:function(){it(lt(o.prototype),'preBuild',this).call(this),this.rows=[],this.row_cache=[],this.hide_delete_buttons=this.options.disable_array_delete||this.jsoneditor.options.disable_array_delete,this.hide_delete_all_rows_buttons=this.hide_delete_buttons||this.options.disable_array_delete_all_rows||this.jsoneditor.options.disable_array_delete_all_rows,this.hide_delete_last_row_buttons=this.hide_delete_buttons||this.options.disable_array_delete_last_row||this.jsoneditor.options.disable_array_delete_last_row,this.hide_move_buttons=this.options.disable_array_reorder||this.jsoneditor.options.disable_array_reorder,this.hide_add_button=this.options.disable_array_add||this.jsoneditor.options.disable_array_add,this.show_copy_button=this.options.enable_array_copy||this.jsoneditor.options.enable_array_copy,this.array_controls_top=this.options.array_controls_top||this.jsoneditor.options.array_controls_top;}},{key:'build',value:function(){this.options.compact?(this.title=this.theme.getHeader('',this.getPathDepth()),this.container.appendChild(this.title),this.panel=this.theme.getIndentedPanel(),this.container.appendChild(this.panel),this.title_controls=this.theme.getHeaderButtonHolder(),this.title.appendChild(this.title_controls),this.controls=this.theme.getHeaderButtonHolder(),this.title.appendChild(this.controls),this.row_holder=document.createElement('div'),this.panel.appendChild(this.row_holder)):(this.header=document.createElement('label'),this.header.textContent=this.getTitle(),this.title=this.theme.getHeader(this.header,this.getPathDepth()),this.container.appendChild(this.title),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText)),this.container.appendChild(this.infoButton)),this.title_controls=this.theme.getHeaderButtonHolder(),this.title.appendChild(this.title_controls),this.schema.description&&(this.description=this.theme.getDescription(this.translateProperty(this.schema.description)),this.container.appendChild(this.description)),this.error_holder=document.createElement('div'),this.container.appendChild(this.error_holder),'tabs-top'===this.schema.format?(this.controls=this.theme.getHeaderButtonHolder(),this.title.appendChild(this.controls),this.tabs_holder=this.theme.getTopTabHolder(this.getValidId(this.getItemTitle())),this.container.appendChild(this.tabs_holder),this.row_holder=this.theme.getTopTabContentHolder(this.tabs_holder),this.active_tab=null):'tabs'===this.schema.format?(this.controls=this.theme.getHeaderButtonHolder(),this.title.appendChild(this.controls),this.tabs_holder=this.theme.getTabHolder(this.getValidId(this.getItemTitle())),this.container.appendChild(this.tabs_holder),this.row_holder=this.theme.getTabContentHolder(this.tabs_holder),this.active_tab=null):(this.panel=this.theme.getIndentedPanel(),this.container.appendChild(this.panel),this.row_holder=document.createElement('div'),this.panel.appendChild(this.row_holder),this.controls=this.theme.getButtonHolder(),this.array_controls_top?this.title.appendChild(this.controls):this.panel.appendChild(this.controls))),this.addControls();}},{key:'onChildEditorChange',value:function(t){this.refreshValue(),this.refreshTabs(!0),it(lt(o.prototype),'onChildEditorChange',this).call(this,t);}},{key:'getItemTitle',value:function(){if(!this.item_title)if(this.schema.items&&!Array.isArray(this.schema.items)){var t=this.jsoneditor.expandRefs(this.schema.items);this.item_title=this.translateProperty(t.title)||this.translate('default_array_item_title');}else this.item_title=this.translate('default_array_item_title');return this.cleanText(this.item_title);}},{key:'getItemSchema',value:function(t){return Array.isArray(this.schema.items)?t>=this.schema.items.length?!0===this.schema.additionalItems?{}:this.schema.additionalItems?f({},this.schema.additionalItems):void 0:f({},this.schema.items[t]):this.schema.items?f({},this.schema.items):{};}},{key:'getItemInfo',value:function(t){var e=this.getItemSchema(t);this.item_info=this.item_info||{};var n=JSON.stringify(e);return void 0!==this.item_info[n]||(e=this.jsoneditor.expandRefs(e),this.item_info[n]={title:this.translateProperty(e.title)||this.translate('default_array_item_title'),default:e.default,width:12,child_editors:e.properties||e.items}),this.item_info[n];}},{key:'getElementEditor',value:function(t){var e=this.getItemInfo(t),n=this.getItemSchema(t);(n=this.jsoneditor.expandRefs(n)).title=''.concat(e.title,' ').concat(t+1);var r,i=this.jsoneditor.getEditorClass(n);this.tabs_holder?(r='tabs-top'===this.schema.format?this.theme.getTopTabContent():this.theme.getTabContent()).id=''.concat(this.path,'.').concat(t):r=e.child_editors?this.theme.getChildEditorHolder():this.theme.getIndentedPanel(),this.row_holder.appendChild(r);var o=this.jsoneditor.createEditor(i,{jsoneditor:this.jsoneditor,schema:n,container:r,path:''.concat(this.path,'.').concat(t),parent:this,required:!0});return o.preBuild(),o.build(),o.postBuild(),o.title_controls||(o.array_controls=this.theme.getButtonHolder(),r.appendChild(o.array_controls)),o;}},{key:'checkParent',value:function(t){return t&&t.parentNode;}},{key:'destroy',value:function(){this.empty(!0),this.checkParent(this.title)&&this.title.parentNode.removeChild(this.title),this.checkParent(this.description)&&this.description.parentNode.removeChild(this.description),this.checkParent(this.row_holder)&&this.row_holder.parentNode.removeChild(this.row_holder),this.checkParent(this.controls)&&this.controls.parentNode.removeChild(this.controls),this.checkParent(this.panel)&&this.panel.parentNode.removeChild(this.panel),this.rows=this.row_cache=this.title=this.description=this.row_holder=this.panel=this.controls=null,it(lt(o.prototype),'destroy',this).call(this);}},{key:'empty',value:function(t){var e=this;this.rows&&(this.rows.forEach(function(n,r){t&&(e.checkParent(n.tab)&&n.tab.parentNode.removeChild(n.tab),e.destroyRow(n,!0),e.row_cache[r]=null),e.rows[r]=null;}),this.rows=[],t&&(this.row_cache=[]));}},{key:'destroyRow',value:function(t,e){var n=t.container;e?(t.destroy(),n.parentNode&&n.parentNode.removeChild(n),this.checkParent(t.tab)&&t.tab.parentNode.removeChild(t.tab)):(t.tab&&(t.tab.style.display='none'),n.style.display='none',t.unregister());}},{key:'getMax',value:function(){return Array.isArray(this.schema.items)&&!1===this.schema.additionalItems?Math.min(this.schema.items.length,this.schema.maxItems||1/0):this.schema.maxItems||1/0;}},{key:'refreshTabs',value:function(t){var e=this;this.rows.forEach(function(n){n.tab&&(t?n.tab_text.textContent=n.getHeaderText():n.tab===e.active_tab?e.theme.markTabActive(n):e.theme.markTabInactive(n));});}},{key:'ensureArraySize',value:function(t){if(Array.isArray(t)||(t=[t]),this.schema.minItems)for(;t.length<this.schema.minItems;)t.push(this.getItemInfo(t.length).default);return this.getMax()&&t.length>this.getMax()&&(t=t.slice(0,this.getMax())),t;}},{key:'setValue',value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;e=this.ensureArraySize(e);var r=JSON.stringify(e);if(r!==this.serialized){e.forEach(function(e,r){if(t.rows[r])t.rows[r].setValue(e,n);else if(t.row_cache[r])t.rows[r]=t.row_cache[r],t.rows[r].setValue(e,n),t.rows[r].container.style.display='',t.rows[r].tab&&(t.rows[r].tab.style.display=''),t.rows[r].register(),t.jsoneditor.trigger('addRow',t.rows[r]);else{var i=t.addRow(e,n);t.jsoneditor.trigger('addRow',i);}});for(var i=e.length;i<this.rows.length;i++)this.destroyRow(this.rows[i]),this.rows[i]=null;this.rows=this.rows.slice(0,e.length);var o=this.rows.find(function(e){return e.tab===t.active_tab;}),a=void 0!==o?o.tab:null;!a&&this.rows.length&&(a=this.rows[0].tab),this.active_tab=a,this.refreshValue(n),this.refreshTabs(!0),this.refreshTabs(),this.onChange();}}},{key:'setVisibility',value:function(t,e){t.style.display=e?'':'none';}},{key:'setupButtons',value:function(t){var e=[];if(this.value.length){if(1===this.value.length){this.remove_all_rows_button.style.display='none';var n=!(t||this.hide_delete_last_row_buttons);this.setVisibility(this.delete_last_row_button,n),e.push(n);}else{var r=!(t||this.hide_delete_last_row_buttons);this.setVisibility(this.delete_last_row_button,r),e.push(r);var i=!(t||this.hide_delete_all_rows_buttons);this.setVisibility(this.remove_all_rows_button,i),e.push(i);}}else this.delete_last_row_button.style.display='none',this.remove_all_rows_button.style.display='none';var o=!(this.getMax()&&this.getMax()<=this.rows.length||this.hide_add_button);return this.setVisibility(this.add_row_button,o),e.push(o),e.some(function(t){return t;});}},{key:'refreshValue',value:function(t){var e=this,n=this.value?this.value.length:0;if(this.value=this.rows.map(function(t){return t.getValue();}),n!==this.value.length||t){var r=this.schema.minItems&&this.schema.minItems>=this.rows.length;this.rows.forEach(function(t,n){if(t.movedown_button){var i=n!==e.rows.length-1;e.setVisibility(t.movedown_button,i);}t.delete_button&&e.setVisibility(t.delete_button,!r),e.value[n]=t.getValue();}),!this.collapsed&&this.setupButtons(r)?this.controls.style.display='inline-block':this.controls.style.display='none';}this.serialized=JSON.stringify(this.value);}},{key:'addRow',value:function(t,e){var n=this,r=this.rows.length;this.rows[r]=this.getElementEditor(r),this.row_cache[r]=this.rows[r],this.tabs_holder&&(this.rows[r].tab_text=document.createElement('span'),this.rows[r].tab_text.textContent=this.rows[r].getHeaderText(),'tabs-top'===this.schema.format?(this.rows[r].tab=this.theme.getTopTab(this.rows[r].tab_text,this.getValidId(this.rows[r].path)),this.theme.addTopTab(this.tabs_holder,this.rows[r].tab)):(this.rows[r].tab=this.theme.getTab(this.rows[r].tab_text,this.getValidId(this.rows[r].path)),this.theme.addTab(this.tabs_holder,this.rows[r].tab)),this.rows[r].tab.addEventListener('click',function(t){n.active_tab=n.rows[r].tab,n.refreshTabs(),t.preventDefault(),t.stopPropagation();}));var i=this.rows[r].title_controls||this.rows[r].array_controls;return this.hide_delete_buttons||(this.rows[r].delete_button=this._createDeleteButton(r,i)),this.show_copy_button&&(this.rows[r].copy_button=this._createCopyButton(r,i)),r&&!this.hide_move_buttons&&(this.rows[r].moveup_button=this._createMoveUpButton(r,i)),this.hide_move_buttons||(this.rows[r].movedown_button=this._createMoveDownButton(r,i)),void 0!==t&&this.rows[r].setValue(t,e),this.refreshTabs(),this.rows[r];}},{key:'_createDeleteButton',value:function(t,e){var n=this,r=this.getButton(this.getItemTitle(),'delete','button_delete_row_title',[this.getItemTitle()]);return r.classList.add('delete','json-editor-btntype-delete'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){if(t.preventDefault(),t.stopPropagation(),!n.askConfirmation())return!1;var e=1*t.currentTarget.getAttribute('data-i'),r=n.getValue().filter(function(t,n){return n!==e;}),i=null,o=n.rows[e];n.setValue(r),n.rows[e]?i=n.rows[e].tab:n.rows[e-1]&&(i=n.rows[e-1].tab),i&&(n.active_tab=i,n.refreshTabs()),n.onChange(!0),n.jsoneditor.trigger('deleteRow',o);}),e&&e.appendChild(r),r;}},{key:'_createCopyButton',value:function(t,e){var n=this,r=this.getButton(this.getItemTitle(),'copy','button_copy_row_title',[this.getItemTitle()]);return r.classList.add('copy','json-editor-btntype-copy'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){var e=n.getValue();t.preventDefault(),t.stopPropagation();var r=1*t.currentTarget.getAttribute('data-i');e.forEach(function(t,n){n===r&&e.push(t);}),n.setValue(e),n.refreshValue(!0),n.onChange(!0);}),e.appendChild(r),r;}},{key:'_createMoveUpButton',value:function(t,e){var n=this,r=this.getButton('','tabs-top'===this.schema.format?'moveleft':'moveup','button_move_up_title');return r.classList.add('moveup','json-editor-btntype-move'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){t.preventDefault(),t.stopPropagation();var e=1*t.currentTarget.getAttribute('data-i');if(!(e<=0)){var r=n.getValue(),i=r[e-1];r[e-1]=r[e],r[e]=i,n.setValue(r),n.active_tab=n.rows[e-1].tab,n.refreshTabs(),n.onChange(!0),n.jsoneditor.trigger('moveRow',n.rows[e-1]);}}),e&&e.appendChild(r),r;}},{key:'_createMoveDownButton',value:function(t,e){var n=this,r=this.getButton('','tabs-top'===this.schema.format?'moveright':'movedown','button_move_down_title');return r.classList.add('movedown','json-editor-btntype-move'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){t.preventDefault(),t.stopPropagation();var e=1*t.currentTarget.getAttribute('data-i'),r=n.getValue();if(!(e>=r.length-1)){var i=r[e+1];r[e+1]=r[e],r[e]=i,n.setValue(r),n.active_tab=n.rows[e+1].tab,n.refreshTabs(),n.onChange(!0),n.jsoneditor.trigger('moveRow',n.rows[e+1]);}}),e&&e.appendChild(r),r;}},{key:'addControls',value:function(){this.collapsed=!1,this.toggle_button=this._createToggleButton(),this.options.collapsed&&y(this.toggle_button,'click'),this.schema.options&&void 0!==this.schema.options.disable_collapse?this.schema.options.disable_collapse&&(this.toggle_button.style.display='none'):this.jsoneditor.options.disable_collapse&&(this.toggle_button.style.display='none'),this.add_row_button=this._createAddRowButton(),this.delete_last_row_button=this._createDeleteLastRowButton(),this.remove_all_rows_button=this._createRemoveAllRowsButton(),this.tabs&&(this.add_row_button.classList.add('je-array-control-btn'),this.delete_last_row_button.classList.add('je-array-control-btn'),this.remove_all_rows_button.classList.add('je-array-control-btn'));}},{key:'_createToggleButton',value:function(){var t=this,e=this.getButton('','collapse','button_collapse');e.classList.add('json-editor-btntype-toggle'),this.title.insertBefore(e,this.title.childNodes[0]);var n=this.row_holder.style.display,r=this.controls.style.display;return e.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.panel&&t.setVisibility(t.panel,t.collapsed),t.tabs_holder&&t.setVisibility(t.tabs_holder,t.collapsed),t.collapsed?(t.collapsed=!1,t.row_holder.style.display=n,t.controls.style.display=r,t.setButtonText(e.currentTarget,'','collapse','button_collapse')):(t.collapsed=!0,t.row_holder.style.display='none',t.controls.style.display='none',t.setButtonText(e.currentTarget,'','expand','button_expand'));}),e;}},{key:'_createAddRowButton',value:function(){var t=this,e=this.getButton(this.getItemTitle(),'add','button_add_row_title',[this.getItemTitle()]);return e.classList.add('json-editor-btntype-add'),e.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation();var n,r=t.rows.length;t.row_cache[r]?(n=t.rows[r]=t.row_cache[r],t.rows[r].setValue(t.rows[r].getDefault(),!0),t.rows[r].container.style.display='',t.rows[r].tab&&(t.rows[r].tab.style.display=''),t.rows[r].register()):n=t.addRow(),t.active_tab=t.rows[r].tab,t.refreshTabs(),t.refreshValue(),t.onChange(!0),t.jsoneditor.trigger('addRow',n);}),this.controls.appendChild(e),e;}},{key:'_createDeleteLastRowButton',value:function(){var t=this,e=this.getButton('button_delete_last','subtract','button_delete_last_title',[this.getItemTitle()]);return e.classList.add('json-editor-btntype-deletelast'),e.addEventListener('click',function(e){if(e.preventDefault(),e.stopPropagation(),!t.askConfirmation())return!1;var n=t.getValue(),r=null,i=n.pop();t.setValue(n),t.rows[t.rows.length-1]&&(r=t.rows[t.rows.length-1].tab),r&&(t.active_tab=r,t.refreshTabs()),t.onChange(!0),t.jsoneditor.trigger('deleteRow',i);}),this.controls.appendChild(e),e;}},{key:'_createRemoveAllRowsButton',value:function(){var t=this,e=this.getButton('button_delete_all','delete','button_delete_all_title');return e.classList.add('json-editor-btntype-deleteall'),e.addEventListener('click',function(e){if(e.preventDefault(),e.stopPropagation(),!t.askConfirmation())return!1;t.empty(!0),t.setValue([]),t.onChange(!0),t.jsoneditor.trigger('deleteAllRows');}),this.controls.appendChild(e),e;}},{key:'showValidationErrors',value:function(t){var e=this,n=[],r=[];t.forEach(function(t){t.path===e.path?n.push(t):r.push(t);}),this.error_holder&&(n.length?(this.error_holder.innerHTML='',this.error_holder.style.display='',n.forEach(function(t){e.error_holder.appendChild(e.theme.getErrorMessage(t.message));})):this.error_holder.style.display='none'),this.rows.forEach(function(t){return t.showValidationErrors(r);});}}])&&rt(e.prototype,n),r&&rt(e,r),o;}(N);function ut(t){return(ut='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function ht(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function dt(t,e,n){return(dt='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=bt(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function ft(t,e){return(ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function yt(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=bt(t);if(e){var i=bt(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return mt(this,n);};}function mt(t,e){return!e||'object'!==ut(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function bt(t){return(bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}ct.rules={'.json-editor-btntype-toggle':'margin:0%2010px%200%200','.je-array-control-btn':'width:100%25;text-align:left;margin-bottom:3px'};var vt=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ft(t,e);}(o,t);var e,n,r,i=yt(o);function o(){return ht(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'onInputChange',value:function(){this.value=this.input.value,this.onChange(!0);}},{key:'register',value:function(){dt(bt(o.prototype),'register',this).call(this),this.input&&this.input.setAttribute('name',this.formname);}},{key:'unregister',value:function(){dt(bt(o.prototype),'unregister',this).call(this),this.input&&this.input.removeAttribute('name');}},{key:'getNumColumns',value:function(){var t=this,e=this.getTitle().length;return Object.keys(this.select_values).forEach(function(n){return e=Math.max(e,''.concat(t.select_values[n]).length+4);}),Math.min(12,Math.max(e/7,2));}},{key:'preBuild',value:function(){var t;dt(bt(o.prototype),'preBuild',this).call(this),this.select_options={},this.select_values={},this.option_keys=[],this.option_titles=[];var e=this.jsoneditor.expandRefs(this.schema.items||{}),n=e.enum||[],r=e.options&&e.options.enum_titles||[];for(t=0;t<n.length;t++)this.sanitize(n[t])===n[t]&&(this.option_keys.push(''.concat(n[t])),this.option_titles.push(''.concat(r[t]||n[t])),this.select_values[''.concat(n[t])]=n[t]);}},{key:'build',value:function(){var t,e=this;if(this.options.compact||(this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description))),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.options.compact&&this.container.classList.add('compact'),!this.schema.format&&this.option_keys.length<8||'checkbox'===this.schema.format){for(this.input_type='checkboxes',this.inputs={},this.controls={},t=0;t<this.option_keys.length;t++){var n=this.formname+t.toString();this.inputs[this.option_keys[t]]=this.theme.getCheckbox(),this.inputs[this.option_keys[t]].id=n,this.select_options[this.option_keys[t]]=this.inputs[this.option_keys[t]];var r=this.theme.getCheckboxLabel(this.option_titles[t]);r.htmlFor=n,this.controls[this.option_keys[t]]=this.theme.getFormControl(r,this.inputs[this.option_keys[t]]);}this.control=this.theme.getMultiCheckboxHolder(this.controls,this.label,this.description,this.infoButton),this.inputs.controlgroup=this.inputs.controls=this.control;}else{for(this.input_type='select',this.input=this.theme.getSelectInput(this.option_keys,!0),this.theme.setSelectOptions(this.input,this.option_keys,this.option_titles),this.input.setAttribute('multiple','multiple'),this.input.size=Math.min(10,this.option_keys.length),t=0;t<this.option_keys.length;t++)this.select_options[this.option_keys[t]]=this.input.children[t];this.control=this.theme.getFormControl(this.label,this.input,this.description,this.infoButton);}(this.schema.readOnly||this.schema.readonly)&&this.disable(!0),this.container.appendChild(this.control),this.multiselectChangeHandler=function(n){var r=[];for(t=0;t<e.option_keys.length;t++)e.select_options[e.option_keys[t]]&&(e.select_options[e.option_keys[t]].selected||e.select_options[e.option_keys[t]].checked)&&r.push(e.select_values[e.option_keys[t]]);e.updateValue(r),e.onChange(!0);},this.control.addEventListener('change',this.multiselectChangeHandler,!1),window.requestAnimationFrame(function(){e.afterInputReady();});}},{key:'postBuild',value:function(){dt(bt(o.prototype),'postBuild',this).call(this);}},{key:'afterInputReady',value:function(){this.theme.afterInputReady(this.input||this.inputs);}},{key:'setValue',value:function(t,e){var n=this;t=t||[],Array.isArray(t)||(t=[t]),t=t.map(function(t){return''.concat(t);}),Object.keys(this.select_options).forEach(function(e){n.select_options[e]['select'===n.input_type?'selected':'checked']=t.includes(e);}),this.updateValue(t),this.onChange(!0);}},{key:'removeValue',value:function(t){t=[].concat(t),this.setValue(this.getValue().filter(function(e){return!t.includes(e);}));}},{key:'addValue',value:function(t){this.setValue(this.getValue().concat(t));}},{key:'updateValue',value:function(t){for(var e=!1,n=[],r=0;r<t.length;r++)if(this.select_options[''.concat(t[r])]){var i=this.sanitize(this.select_values[t[r]]);n.push(i),i!==t[r]&&(e=!0);}else e=!0;return this.value=n,e;}},{key:'sanitize',value:function(t){return'boolean'===this.schema.items.type?!!t:'number'===this.schema.items.type?1*t||0:'integer'===this.schema.items.type?Math.floor(1*t||0):''.concat(t);}},{key:'enable',value:function(){var t=this;this.always_disabled||(this.input?this.input.disabled=!1:this.inputs&&Object.keys(this.inputs).forEach(function(e){return t.inputs[e].disabled=!1;}),dt(bt(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){var e=this;t&&(this.always_disabled=!0),this.input?this.input.disabled=!0:this.inputs&&Object.keys(this.inputs).forEach(function(t){return e.inputs[t].disabled=!0;}),dt(bt(o.prototype),'disable',this).call(this);}},{key:'destroy',value:function(){dt(bt(o.prototype),'destroy',this).call(this);}},{key:'escapeRegExp',value:function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}},{key:'showValidationErrors',value:function(t){var e=new RegExp('^'.concat(this.escapeRegExp(this.path),'(\\.\\d+)?$')),n=t.reduce(function(t,n){return n.path.match(e)&&t.push(n.message),t;},[]);n.length?this.theme.addInputError(this.input||this.inputs,''.concat(n.join('. '),'.')):this.theme.removeInputError(this.input||this.inputs);}}])&&pt(e.prototype,n),r&&pt(e,r),o;}(N);function gt(t){return(gt='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function _t(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function wt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function kt(t,e,n){return(kt='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Ct(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function xt(t,e){return(xt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function jt(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Ct(t);if(e){var i=Ct(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ot(this,n);};}function Ot(t,e){return!e||'object'!==gt(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Ct(t){return(Ct=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Et=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&xt(t,e);}(o,t);var e,n,r,i=jt(o);function o(){return _t(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){this.choices_instance?(t=[].concat(t).map(function(t){return''.concat(t);}),this.updateValue(t),this.choices_instance.removeActiveItems(),this.choices_instance.setChoiceByValue(this.value),this.onChange(!0)):kt(Ct(o.prototype),'setValue',this).call(this,t,e);}},{key:'afterInputReady',value:function(){var t=this;if(window.Choices&&!this.choices_instance){var e=this.expandCallbacks('choices',f({},{removeItems:!0,removeItemButton:!0},this.defaults.options.choices||{},this.options.choices||{},{addItems:!0,editItems:!1,duplicateItemsAllowed:!1}));this.newEnumAllowed=!1,this.choices_instance=new window.Choices(this.input,e),this.control.removeEventListener('change',this.multiselectChangeHandler),this.multiselectChangeHandler=function(e){var n=t.choices_instance.getValue(!0);t.updateValue(n),t.onChange(!0);},this.control.addEventListener('change',this.multiselectChangeHandler,!1);}kt(Ct(o.prototype),'afterInputReady',this).call(this);}},{key:'updateValue',value:function(t){t=[].concat(t);for(var e=!1,n=[],r=0;r<t.length;r++){if(!this.select_values[''.concat(t[r])]){if(e=!0,!this.newEnumAllowed)continue;if(!this.addNewOption(t[r]))continue;}var i=this.sanitize(this.select_values[t[r]]);n.push(i),i!==t[r]&&(e=!0);}return this.value=n,e;}},{key:'addNewOption',value:function(t){return this.option_keys.push(''.concat(t)),this.option_titles.push(''.concat(t)),this.select_values[''.concat(t)]=t,this.schema.items.enum.push(t),this.choices_instance.setChoices([{value:''.concat(t),label:''.concat(t)}],'value','label',!1),!0;}},{key:'enable',value:function(){!this.always_disabled&&this.choices_instance&&this.choices_instance.enable(),kt(Ct(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.choices_instance&&this.choices_instance.disable(),kt(Ct(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.choices_instance&&(this.choices_instance.destroy(),this.choices_instance=null),kt(Ct(o.prototype),'destroy',this).call(this);}}])&&wt(e.prototype,n),r&&wt(e,r),o;}(vt);function St(t){return(St='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Pt(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Lt(t,e,n){return(Lt='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Dt(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Tt(t,e){return(Tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function At(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Dt(t);if(e){var i=Dt(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return It(this,n);};}function It(t,e){return!e||'object'!==St(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Dt(t){return(Dt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Nt=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Tt(t,e);}(o,t);var e,n,r,i=At(o);function o(){return Pt(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){this.select2_instance?(t=[].concat(t).map(function(t){return''.concat(t);}),this.updateValue(t),this.select2v4?this.select2_instance.val(this.value).change():this.select2_instance.select2('val',this.value),this.onChange(!0)):Lt(Dt(o.prototype),'setValue',this).call(this,t,e);}},{key:'afterInputReady',value:function(){var t,e=this;window.jQuery&&window.jQuery.fn&&window.jQuery.fn.select2&&!this.select2_instance&&(t=this.expandCallbacks('select2',f({},{tags:!0,width:'100%'},this.defaults.options.select2||{},this.options.select2||{})),this.newEnumAllowed=t.tags=!!t.tags&&this.schema.items&&'string'===this.schema.items.type,this.select2_instance=window.jQuery(this.input).select2(t),this.select2v4=b(this.select2_instance.select2,'amd'),this.selectChangeHandler=function(){var t=e.select2v4?e.select2_instance.val():e.select2_instance.select2('val');e.updateValue(t),e.onChange(!0);},this.select2_instance.on('select2-blur',this.selectChangeHandler),this.select2_instance.on('change',this.selectChangeHandler)),Lt(Dt(o.prototype),'afterInputReady',this).call(this);}},{key:'updateValue',value:function(t){t=[].concat(t);for(var e=!1,n=[],r=0;r<t.length;r++){if(!this.select_values[''.concat(t[r])]){if(e=!0,!this.newEnumAllowed)continue;if(!this.addNewOption(t[r]))continue;}var i=this.sanitize(this.select_values[t[r]]);n.push(i),i!==t[r]&&(e=!0);}return this.value=n,e;}},{key:'addNewOption',value:function(t){this.option_keys.push(''.concat(t)),this.option_titles.push(''.concat(t)),this.select_values[''.concat(t)]=t,this.schema.items.enum.push(t);var e=this.input.querySelector('option[value="'.concat(t,'"]'));return e?e.removeAttribute('data-select2-tag'):this.input.appendChild(new Option(t,t,!1,!1)).trigger('change'),!0;}},{key:'enable',value:function(){!this.always_disabled&&this.select2_instance&&(this.select2v4?this.select2_instance.prop('disabled',!1):this.select2_instance.select2('enable',!0)),Lt(Dt(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.select2_instance&&(this.select2v4?this.select2_instance.prop('disabled',!0):this.select2_instance.select2('enable',!1)),Lt(Dt(o.prototype),'disable',this).call(this);}},{key:'destroy',value:function(){this.select2_instance&&(this.select2_instance.select2('destroy'),this.select2_instance=null),Lt(Dt(o.prototype),'destroy',this).call(this);}}])&&Rt(e.prototype,n),r&&Rt(e,r),o;}(vt);function Bt(t){return(Bt='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Ft(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Vt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Ht(t,e,n){return(Ht='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Ut(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function zt(t,e){return(zt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Mt(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Ut(t);if(e){var i=Ut(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return qt(this,n);};}function qt(t,e){return!e||'object'!==Bt(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Ut(t){return(Ut=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Gt=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zt(t,e);}(o,t);var e,n,r,i=Mt(o);function o(){return Ft(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){this.selectize_instance?(t=[].concat(t).map(function(t){return''.concat(t);}),this.updateValue(t),this.selectize_instance.setValue(this.value),this.onChange(!0)):Ht(Ut(o.prototype),'setValue',this).call(this,t,e);}},{key:'afterInputReady',value:function(){var t,e=this;window.jQuery&&window.jQuery.fn&&window.jQuery.fn.selectize&&!this.selectize_instance&&(t=this.expandCallbacks('selectize',f({},{plugins:['remove_button'],delimiter:!1,createOnBlur:!0,create:!0},this.defaults.options.selectize||{},this.options.selectize||{})),this.newEnumAllowed=t.create=!!t.create&&this.schema.items&&'string'===this.schema.items.type,this.selectize_instance=window.jQuery(this.input).selectize(t)[0].selectize,this.control.removeEventListener('change',this.multiselectChangeHandler),this.multiselectChangeHandler=function(t){var n=e.selectize_instance.getValue();e.updateValue(n),e.onChange(!0);},this.selectize_instance.on('change',this.multiselectChangeHandler)),Ht(Ut(o.prototype),'afterInputReady',this).call(this);}},{key:'updateValue',value:function(t){t=[].concat(t);for(var e=!1,n=[],r=0;r<t.length;r++){if(!this.select_values[''.concat(t[r])]){if(e=!0,!this.newEnumAllowed)continue;if(!this.addNewOption(t[r]))continue;}var i=this.sanitize(this.select_values[t[r]]);n.push(i),i!==t[r]&&(e=!0);}return this.value=n,e;}},{key:'addNewOption',value:function(t){return this.option_keys.push(''.concat(t)),this.option_titles.push(''.concat(t)),this.select_values[''.concat(t)]=t,this.schema.items.enum.push(t),this.selectize_instance.addOption({text:t,value:t}),!0;}},{key:'enable',value:function(){!this.always_disabled&&this.selectize_instance&&this.selectize_instance.unlock(),Ht(Ut(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.selectize_instance&&this.selectize_instance.lock(),Ht(Ut(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.selectize_instance&&(this.selectize_instance.destroy(),this.selectize_instance=null),Ht(Ut(o.prototype),'destroy',this).call(this);}}])&&Vt(e.prototype,n),r&&Vt(e,r),o;}(vt);function $t(t){return($t='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Jt(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Wt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Zt(t,e,n){return(Zt='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Kt(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Qt(t,e){return(Qt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Yt(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Kt(t);if(e){var i=Kt(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Xt(this,n);};}function Xt(t,e){return!e||'object'!==$t(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Kt(t){return(Kt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var te=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Qt(t,e);}(o,t);var e,n,r,i=Yt(o);function o(){return Jt(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'postBuild',value:function(){window.Autocomplete&&(this.autocomplete_wrapper=document.createElement('div'),this.input.parentNode.insertBefore(this.autocomplete_wrapper,this.input.nextSibling),this.autocomplete_wrapper.appendChild(this.input),this.autocomplete_dropdown=document.createElement('ul'),this.input.parentNode.insertBefore(this.autocomplete_dropdown,this.input.nextSibling)),Zt(Kt(o.prototype),'postBuild',this).call(this);}},{key:'afterInputReady',value:function(){var t;window.Autocomplete&&!this.autocomplete_instance&&(t=this.expandCallbacks('autocomplete',f({},{search:function(t,e){return console.log('No "search" callback defined for autocomplete in property "'.concat(t.key,'"')),[];},baseClass:'autocomplete'},this.defaults.options.autocomplete||{},this.options.autocomplete||{})),this.autocomplete_wrapper.classList.add(t.baseClass),this.autocomplete_dropdown.classList.add(''.concat(t.baseClass,'-result-list')),this.autocomplete_instance=new window.Autocomplete(this.autocomplete_wrapper,t)),Zt(Kt(o.prototype),'afterInputReady',this).call(this);}},{key:'destroy',value:function(){this.autocomplete_instance&&(this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),this.autocomplete_dropdown&&this.autocomplete_dropdown.parentNode&&this.autocomplete_dropdown.parentNode.removeChild(this.autocomplete_dropdown),this.autocomplete_wrapper&&this.autocomplete_wrapper.parentNode&&this.autocomplete_wrapper.parentNode.removeChild(this.autocomplete_wrapper),this.autocomplete_instance=null),Zt(Kt(o.prototype),'destroy',this).call(this);}}])&&Wt(e.prototype,n),r&&Wt(e,r),o;}(G);n(133);function ee(t){return(ee='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function ne(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function re(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function ie(t,e,n){return(ie='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=le(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function oe(t,e){return(oe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function ae(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=le(t);if(e){var i=le(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return se(this,n);};}function se(t,e){return!e||'object'!==ee(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function le(t){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var ce=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&oe(t,e);}(o,t);var e,n,r,i=ae(o);function o(){return ne(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getNumColumns',value:function(){return 4;}},{key:'setFileReaderListener',value:function(t){var e=this;t.addEventListener('load',function(t){if(e.count===e.current_item_index)e.value[e.count][e.key]=t.target.result;else{var n={};for(var r in e.parent.schema.properties)n[r]='';n[e.key]=t.target.result,e.value.splice(e.count,0,n);}e.count+=1,e.count===e.total+e.current_item_index&&e.arrayEditor.setValue(e.value);});}},{key:'build',value:function(){var t=this;if(this.options.compact||(this.title=this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.input=this.theme.getFormInputField('hidden'),this.container.appendChild(this.input),!this.schema.readOnly&&!this.schema.readonly){if(!window.FileReader)throw new Error('FileReader required for base64 editor');this.uploader=this.theme.getFormInputField('file'),this.schema.options&&this.schema.options.multiple&&!0===this.schema.options.multiple&&this.parent&&'object'===this.parent.schema.type&&this.parent.parent&&'array'===this.parent.parent.schema.type&&this.uploader.setAttribute('multiple',''),this.uploader.addEventListener('change',function(e){if(e.preventDefault(),e.stopPropagation(),e.currentTarget.files&&e.currentTarget.files.length)if(e.currentTarget.files.length>1&&t.schema.options&&t.schema.options.multiple&&!0===t.schema.options.multiple&&t.parent&&'object'===t.parent.schema.type&&t.parent.parent&&'array'===t.parent.parent.schema.type){t.arrayEditor=t.jsoneditor.getEditor(t.parent.parent.path),t.value=t.arrayEditor.getValue(),t.total=e.currentTarget.files.length,t.current_item_index=parseInt(t.parent.key),t.count=t.current_item_index;for(var n=0;n<t.total;n++){var r=new FileReader();t.setFileReaderListener(r),r.readAsDataURL(e.currentTarget.files[n]);}}else{var i=new FileReader();i.onload=function(e){t.value=e.target.result,t.refreshPreview(),t.onChange(!0),i=null;},i.readAsDataURL(e.currentTarget.files[0]);}});}this.preview=this.theme.getFormInputDescription(this.translateProperty(this.schema.description)),this.container.appendChild(this.preview),this.control=this.theme.getFormControl(this.label,this.uploader||this.input,this.preview,this.infoButton),this.container.appendChild(this.control);}},{key:'refreshPreview',value:function(){if(this.last_preview!==this.value&&(this.last_preview=this.value,this.preview.innerHTML='',this.value)){var t=this.value.match(/^data:([^;,]+)[;,]/);if(t&&(t=t[1]),t){if(this.preview.innerHTML='<strong>Type:</strong> '.concat(t,', <strong>Size:</strong> ').concat(Math.floor((this.value.length-this.value.split(',')[0].length-1)/1.33333),' bytes'),'image'===t.substr(0,5)){this.preview.innerHTML+='<br>';var e=document.createElement('img');e.style.maxWidth='100%',e.style.maxHeight='100px',e.src=this.value,this.preview.appendChild(e);}}else this.preview.innerHTML='<em>Invalid data URI</em>';}}},{key:'enable',value:function(){this.always_disabled||(this.uploader&&(this.uploader.disabled=!1),ie(le(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.uploader&&(this.uploader.disabled=!0),ie(le(o.prototype),'disable',this).call(this);}},{key:'setValue',value:function(t){this.value!==t&&(this.schema.readOnly&&this.schema.enum&&!this.schema.enum.includes(t)?this.value=this.schema.enum[0]:this.value=t,this.input.value=this.value,this.refreshPreview(),this.onChange());}},{key:'destroy',value:function(){this.preview&&this.preview.parentNode&&this.preview.parentNode.removeChild(this.preview),this.title&&this.title.parentNode&&this.title.parentNode.removeChild(this.title),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),this.uploader&&this.uploader.parentNode&&this.uploader.parentNode.removeChild(this.uploader),ie(le(o.prototype),'destroy',this).call(this);}}])&&re(e.prototype,n),r&&re(e,r),o;}(N);function ue(t){return(ue='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function he(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function pe(t,e,n){return(pe='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=me(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function de(t,e){return(de=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function fe(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=me(t);if(e){var i=me(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return ye(this,n);};}function ye(t,e){return!e||'object'!==ue(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function me(t){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var be=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&de(t,e);}(o,t);var e,n,r,i=fe(o);function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,o),(n=i.call(this,t,e)).active=!1,n.parent&&n.parent.schema&&(Array.isArray(n.parent.schema.required)?n.parent.schema.required.includes(n.key)||n.parent.schema.required.push(n.key):n.parent.schema.required=[n.key]),n;}return e=o,(n=[{key:'build',value:function(){var t=this;this.options.compact=!0;var e=this.translateProperty(this.schema.title)||this.key,n=this.expandCallbacks('button',f({},{icon:'',validated:!1,align:'left',action:function(t,e){window.alert('No button action defined for "'.concat(t.path,'"'));}},this.defaults.options.button||{},this.options.button||{}));this.input=this.theme.getFormButton(e,n.icon,e),this.input.addEventListener('click',n.action,!1),(this.schema.readOnly||this.schema.readonly||this.schema.template)&&(this.disable(!0),this.input.setAttribute('readonly','true')),this.setInputAttributes(['readonly']),this.control=this.theme.getFormButtonHolder(n.align),this.control.appendChild(this.input),this.container.appendChild(this.control),this.changeHandler=function(){t.jsoneditor.validate(t.jsoneditor.getValue()).length>0?t.disable():t.enable();},n.validated&&this.jsoneditor.on('change',this.changeHandler);}},{key:'enable',value:function(){this.always_disabled||(this.input.disabled=!1,pe(me(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.input.disabled=!0,pe(me(o.prototype),'disable',this).call(this);}},{key:'getNumColumns',value:function(){return 2;}},{key:'activate',value:function(){this.active=!1,this.enable();}},{key:'deactivate',value:function(){this.isRequired()||(this.active=!1,this.disable());}},{key:'destroy',value:function(){this.jsoneditor.off('change',this.changeHandler),this.changeHandler=null,pe(me(o.prototype),'destroy',this).call(this);}}])&&he(e.prototype,n),r&&he(e,r),o;}(N);function ve(t){return(ve='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function ge(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function _e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function we(t,e,n){return(we='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Oe(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function ke(t,e){return(ke=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function xe(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Oe(t);if(e){var i=Oe(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return je(this,n);};}function je(t,e){return!e||'object'!==ve(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Oe(t){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Ce=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ke(t,e);}(o,t);var e,n,r,i=xe(o);function o(){return ge(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){t=!!t;var n=this.getValue()!==t;this.value=t,this.input.checked=this.value,this.onChange(n);}},{key:'register',value:function(){we(Oe(o.prototype),'register',this).call(this),this.input&&this.input.setAttribute('name',this.formname);}},{key:'unregister',value:function(){we(Oe(o.prototype),'unregister',this).call(this),this.input&&this.input.removeAttribute('name');}},{key:'getNumColumns',value:function(){return Math.min(12,Math.max(this.getTitle().length/7,2));}},{key:'build',value:function(){var t=this;this.parent.options.table_row||(this.label=this.header=this.theme.getCheckboxLabel(this.getTitle(),this.isRequired()),this.label.htmlFor=this.formname),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description))),this.options.infoText&&!this.options.compact&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.options.compact&&this.container.classList.add('compact'),this.input=this.theme.getCheckbox(),this.input.id=this.formname,this.control=this.theme.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0),this.input.addEventListener('change',function(e){e.preventDefault(),e.stopPropagation(),t.value=e.currentTarget.checked,t.onChange(!0);}),this.container.appendChild(this.control);}},{key:'enable',value:function(){this.always_disabled||(this.input.disabled=!1,we(Oe(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.input.disabled=!0,we(Oe(o.prototype),'disable',this).call(this);}},{key:'destroy',value:function(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),we(Oe(o.prototype),'destroy',this).call(this);}},{key:'showValidationErrors',value:function(t){var e=this;this.previous_error_setting=this.jsoneditor.options.show_errors;var n=t.reduce(function(t,n){return n.path===e.path&&t.push(n.message),t;},[]);this.input.controlgroup=this.control,n.length?this.theme.addInputError(this.input,''.concat(n.join('. '),'.')):this.theme.removeInputError(this.input);}}])&&_e(e.prototype,n),r&&_e(e,r),o;}(N);n(134);function Ee(t){return(Ee='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Se(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Pe(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Re(t,e,n){return(Re='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Ie(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Le(t,e){return(Le=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Te(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Ie(t);if(e){var i=Ie(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ae(this,n);};}function Ae(t,e){return!e||'object'!==Ee(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Ie(t){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var De=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Le(t,e);}(o,t);var e,n,r,i=Te(o);function o(){return Se(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){var n=this.typecast(t),r=!!this.jsoneditor.options.use_default_values||void 0!==this.schema.default;(this.enum_options.length>0&&!this.enum_values.includes(n)||e&&!this.isRequired()&&!r)&&(n=this.enum_values[0]),this.value!==n&&(e?this.is_dirty=!1:'change'===this.jsoneditor.options.show_errors&&(this.is_dirty=!0),this.input.value=this.enum_options[this.enum_values.indexOf(n)],this.value=n,this.onChange(),this.change());}},{key:'register',value:function(){Re(Ie(o.prototype),'register',this).call(this),this.input&&this.input.setAttribute('name',this.formname);}},{key:'unregister',value:function(){Re(Ie(o.prototype),'unregister',this).call(this),this.input&&this.input.removeAttribute('name');}},{key:'getNumColumns',value:function(){if(!this.enum_options)return 3;for(var t=this.getTitle().length,e=0;e<this.enum_options.length;e++)t=Math.max(t,this.enum_options[e].length+4);return Math.min(12,Math.max(t/7,2));}},{key:'typecast',value:function(t){return'boolean'===this.schema.type?'undefined'===t||void 0===t?void 0:!!t:'number'===this.schema.type?1*t||0:'integer'===this.schema.type?Math.floor(1*t||0):this.schema.enum&&void 0===t?void 0:''.concat(t);}},{key:'getValue',value:function(){if(this.dependenciesFulfilled)return this.typecast(this.value);}},{key:'preBuild',value:function(){var t,e,n=this;if(this.input_type='select',this.enum_options=[],this.enum_values=[],this.enum_display=[],this.schema.enum){var r=this.schema.options&&this.schema.options.enum_titles||[];this.schema.enum.forEach(function(t,e){n.enum_options[e]=''.concat(t),n.enum_display[e]=''.concat(n.translateProperty(r[e])||t),n.enum_values[e]=n.typecast(t);}),this.isRequired()||(this.enum_display.unshift(' '),this.enum_options.unshift('undefined'),this.enum_values.unshift(void 0));}else if('boolean'===this.schema.type)this.enum_display=this.schema.options&&this.schema.options.enum_titles||['true','false'],this.enum_options=['1',''],this.enum_values=[!0,!1],this.isRequired()||(this.enum_display.unshift(' '),this.enum_options.unshift('undefined'),this.enum_values.unshift(void 0));else{if(!this.schema.enumSource)throw new Error("'select' editor requires the enum property to be set.");if(this.enumSource=[],this.enum_display=[],this.enum_options=[],this.enum_values=[],Array.isArray(this.schema.enumSource))for(t=0;t<this.schema.enumSource.length;t++)'string'==typeof this.schema.enumSource[t]?this.enumSource[t]={source:this.schema.enumSource[t]}:Array.isArray(this.schema.enumSource[t])?this.enumSource[t]=this.schema.enumSource[t]:this.enumSource[t]=f({},this.schema.enumSource[t]);else this.schema.enumValue?this.enumSource=[{source:this.schema.enumSource,value:this.schema.enumValue}]:this.enumSource=[{source:this.schema.enumSource}];for(t=0;t<this.enumSource.length;t++)this.enumSource[t].value&&('function'==typeof(e=this.expandCallbacks('template',{template:this.enumSource[t].value})).template?this.enumSource[t].value=e.template:this.enumSource[t].value=this.jsoneditor.compileTemplate(this.enumSource[t].value,this.template_engine)),this.enumSource[t].title&&('function'==typeof(e=this.expandCallbacks('template',{template:this.enumSource[t].title})).template?this.enumSource[t].title=e.template:this.enumSource[t].title=this.jsoneditor.compileTemplate(this.enumSource[t].title,this.template_engine)),this.enumSource[t].filter&&this.enumSource[t].value&&('function'==typeof(e=this.expandCallbacks('template',{template:this.enumSource[t].filter})).template?this.enumSource[t].filter=e.template:this.enumSource[t].filter=this.jsoneditor.compileTemplate(this.enumSource[t].filter,this.template_engine));}}},{key:'build',value:function(){var t=this;this.options.compact||(this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description))),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.options.compact&&this.container.classList.add('compact'),this.input=this.theme.getSelectInput(this.enum_options,!1),this.theme.setSelectOptions(this.input,this.enum_options,this.enum_display),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0),this.setInputAttributes([]),this.input.addEventListener('change',function(e){e.preventDefault(),e.stopPropagation(),t.onInputChange();}),this.control=this.theme.getFormControl(this.label,this.input,this.description,this.infoButton),this.container.appendChild(this.control),this.value=this.enum_values[0],window.requestAnimationFrame(function(){t.input.parentNode&&t.afterInputReady();});}},{key:'afterInputReady',value:function(){this.theme.afterInputReady(this.input);}},{key:'onInputChange',value:function(){var t,e=this.typecast(this.input.value);(t=this.enum_values.includes(e)?this.enum_values[this.enum_values.indexOf(e)]:this.enum_values[0])!==this.value&&(this.is_dirty=!0,this.value=t,this.onChange(!0));}},{key:'onWatchedFieldChange',value:function(){var t,e,n=[],r=[];if(this.enumSource){t=this.getWatchedFieldValues();for(var i=0;i<this.enumSource.length;i++)if(Array.isArray(this.enumSource[i]))n=n.concat(this.enumSource[i]),r=r.concat(this.enumSource[i]);else{var a=[];if(a=Array.isArray(this.enumSource[i].source)?this.enumSource[i].source:t[this.enumSource[i].source]){if(this.enumSource[i].slice&&(a=Array.prototype.slice.apply(a,this.enumSource[i].slice)),this.enumSource[i].filter){var s=[];for(e=0;e<a.length;e++)this.enumSource[i].filter({i:e,item:a[e],watched:t})&&s.push(a[e]);a=s;}var l=[],c=[];for(e=0;e<a.length;e++){var u=a[e];this.enumSource[i].value?c[e]=this.typecast(this.enumSource[i].value({i:e,item:u})):c[e]=a[e],this.enumSource[i].title?l[e]=this.enumSource[i].title({i:e,item:u}):l[e]=c[e];}this.enumSource[i].sort&&function(t,e,n){t.map(function(t,n){return{v:t,t:e[n]};}).sort(function(t,e){return t.v<e.v?-n:t.v===e.v?0:n;}).forEach(function(n,r){t[r]=n.v,e[r]=n.t;});}.bind(null,c,l,'desc'===this.enumSource[i].sort?1:-1)(),n=n.concat(c),r=r.concat(l);}}var h=this.value;this.theme.setSelectOptions(this.input,n,r),this.enum_options=n,this.enum_display=r,this.enum_values=n,n.includes(h)||!1!==this.jsoneditor.options.enum_source_value_auto_select?(this.input.value=h,this.value=h):(this.input.value=n[0],this.value=this.typecast(n[0]||''),this.parent&&!this.watchLoop?this.parent.onChildEditorChange(this):this.jsoneditor.onChange(),this.jsoneditor.notifyWatchers(this.path));}Re(Ie(o.prototype),'onWatchedFieldChange',this).call(this);}},{key:'enable',value:function(){this.always_disabled||(this.input.disabled=!1,Re(Ie(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.input.disabled=!0,Re(Ie(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),Re(Ie(o.prototype),'destroy',this).call(this);}},{key:'showValidationErrors',value:function(t){var e=this;this.previous_error_setting=this.jsoneditor.options.show_errors;var n=t.reduce(function(t,n){return n.path===e.path&&t.push(n.message),t;},[]);n.length?this.theme.addInputError(this.input,''.concat(n.join('. '),'.')):this.theme.removeInputError(this.input);}}])&&Pe(e.prototype,n),r&&Pe(e,r),o;}(N);function Ne(t){return(Ne='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Be(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Fe(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Ve(t,e,n){return(Ve='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=qe(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function He(t,e){return(He=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function ze(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=qe(t);if(e){var i=qe(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Me(this,n);};}function Me(t,e){return!e||'object'!==Ne(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function qe(t){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Ue=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&He(t,e);}(o,t);var e,n,r,i=ze(o);function o(){return Be(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){if(this.choices_instance){var n=this.typecast(t||'');if(this.enum_values.includes(n)||(n=this.enum_values[0]),this.value===n)return;e?this.is_dirty=!1:'change'===this.jsoneditor.options.show_errors&&(this.is_dirty=!0),this.input.value=this.enum_options[this.enum_values.indexOf(n)],this.choices_instance.setChoiceByValue(this.input.value),this.value=n,this.onChange();}else Ve(qe(o.prototype),'setValue',this).call(this,t,e);}},{key:'afterInputReady',value:function(){if(window.Choices&&!this.choices_instance){var t=this.expandCallbacks('choices',f({},this.defaults.options.choices||{},this.options.choices||{}));this.choices_instance=new window.Choices(this.input,t);}Ve(qe(o.prototype),'afterInputReady',this).call(this);}},{key:'onWatchedFieldChange',value:function(){var t=this;if(Ve(qe(o.prototype),'onWatchedFieldChange',this).call(this),this.choices_instance){var e=this.enum_options.map(function(e,n){return{value:e,label:t.enum_display[n]};});this.choices_instance.setChoices(e,'value','label',!0),this.choices_instance.setChoiceByValue(''.concat(this.value));}}},{key:'enable',value:function(){!this.always_disabled&&this.choices_instance&&this.choices_instance.enable(),Ve(qe(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.choices_instance&&this.choices_instance.disable(),Ve(qe(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.choices_instance&&(this.choices_instance.destroy(),this.choices_instance=null),Ve(qe(o.prototype),'destroy',this).call(this);}}])&&Fe(e.prototype,n),r&&Fe(e,r),o;}(De);function Ge(t){return(Ge='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function $e(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Je(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function We(t,e,n){return(We='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Xe(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Ze(t,e){return(Ze=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Qe(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Xe(t);if(e){var i=Xe(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ye(this,n);};}function Ye(t,e){return!e||'object'!==Ge(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Xe(t){return(Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}Ue.rules={'.choices > *':'box-sizing:border-box'};var Ke=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ze(t,e);}(o,t);var e,n,r,i=Qe(o);function o(){return $e(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'build',value:function(){if(We(Xe(o.prototype),'build',this).call(this),this.input&&(this.schema.max&&'string'==typeof this.schema.max&&this.input.setAttribute('max',this.schema.max),this.schema.min&&'string'==typeof this.schema.max&&this.input.setAttribute('min',this.schema.min),window.flatpickr&&'object'===Ge(this.options.flatpickr))){this.options.flatpickr.enableTime='date'!==this.schema.format,this.options.flatpickr.noCalendar='time'===this.schema.format,'integer'===this.schema.type&&(this.options.flatpickr.mode='single'),this.input.setAttribute('data-input','');var t=this.input;if(!0===this.options.flatpickr.wrap){var e=[];if(!1!==this.options.flatpickr.showToggleButton){var n=this.getButton('','time'===this.schema.format?'time':'calendar','flatpickr_toggle_button');n.setAttribute('data-toggle',''),e.push(n);}if(!1!==this.options.flatpickr.showClearButton){var r=this.getButton('','clear','flatpickr_clear_button');r.setAttribute('data-clear',''),e.push(r);}var i=this.input.parentNode,a=this.input.nextSibling,s=this.theme.getInputGroup(this.input,e);void 0!==s?(this.options.flatpickr.inline=!1,i.insertBefore(s,a),t=s):this.options.flatpickr.wrap=!1;}this.flatpickr=window.flatpickr(t,this.options.flatpickr),!0===this.options.flatpickr.inline&&!0===this.options.flatpickr.inlineHideInput&&this.input.setAttribute('type','hidden');}}},{key:'getValue',value:function(){if(this.dependenciesFulfilled){if('string'===this.schema.type)return this.value;if(''!==this.value&&void 0!==this.value){var t='time'===this.schema.format?'1970-01-01 '.concat(this.value):this.value;return parseInt(new Date(t).getTime()/1e3);}}}},{key:'setValue',value:function(t,e,n){if('string'===this.schema.type)We(Xe(o.prototype),'setValue',this).call(this,t,e,n),this.flatpickr&&this.flatpickr.setDate(t);else if(t>0){var r=new Date(1e3*t),i=r.getFullYear(),a=this.zeroPad(r.getMonth()+1),s=this.zeroPad(r.getDate()),l=this.zeroPad(r.getHours()),c=this.zeroPad(r.getMinutes()),u=this.zeroPad(r.getSeconds()),h=[i,a,s].join('-'),p=[l,c,u].join(':'),d=''.concat(h,'T').concat(p);'date'===this.schema.format?d=h:'time'===this.schema.format&&(d=p),this.input.value=d,this.refreshValue(),this.flatpickr&&this.flatpickr.setDate(d);}}},{key:'destroy',value:function(){this.flatpickr&&this.flatpickr.destroy(),this.flatpickr=null,We(Xe(o.prototype),'destroy',this).call(this);}},{key:'zeroPad',value:function(t){return'0'.concat(t).slice(-2);}}])&&Je(e.prototype,n),r&&Je(e,r),o;}(G);function tn(t){return(tn='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function en(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function nn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function rn(t,e,n){return(rn='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ln(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function on(t,e){return(on=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function an(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=ln(t);if(e){var i=ln(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return sn(this,n);};}function sn(t,e){return!e||'object'!==tn(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function ln(t){return(ln=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var cn=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&on(t,e);}(o,t);var e,n,r,i=an(o);function o(){return en(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'register',value:function(){if(this.editors){for(var t=0;t<this.editors.length;t++)this.editors[t]&&this.editors[t].unregister();this.editors[this.currentEditor]&&this.editors[this.currentEditor].register();}rn(ln(o.prototype),'register',this).call(this);}},{key:'unregister',value:function(){if(rn(ln(o.prototype),'unregister',this).call(this),this.editors)for(var t=0;t<this.editors.length;t++)this.editors[t]&&this.editors[t].unregister();}},{key:'getNumColumns',value:function(){return this.editors[this.currentEditor]?Math.max(this.editors[this.currentEditor].getNumColumns(),4):4;}},{key:'enable',value:function(){if(this.editors)for(var t=0;t<this.editors.length;t++)this.editors[t]&&this.editors[t].enable();rn(ln(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(){if(this.editors)for(var t=0;t<this.editors.length;t++)this.editors[t]&&this.editors[t].disable();rn(ln(o.prototype),'disable',this).call(this);}},{key:'switchEditor',value:function(){var t=this,e=this.getWatchedFieldValues();if(e){var n=document.location.origin+document.location.pathname+this.template(e);this.editors[this.refs[n]]||this.buildChildEditor(n),this.currentEditor=this.refs[n],this.register(),this.editors.forEach(function(e,n){e&&(t.currentEditor===n?e.container.style.display='':e.container.style.display='none');}),this.refreshValue(),this.onChange(!0);}}},{key:'buildChildEditor',value:function(t){this.refs[t]=this.editors.length;var e=this.theme.getChildEditorHolder();this.editor_holder.appendChild(e);var n=f({},this.schema,this.jsoneditor.refs[t]),r=this.jsoneditor.getEditorClass(n,this.jsoneditor),i=this.jsoneditor.createEditor(r,{jsoneditor:this.jsoneditor,schema:n,container:e,path:this.path,parent:this,required:!0});this.editors.push(i),i.preBuild(),i.build(),i.postBuild();}},{key:'preBuild',value:function(){var t;for(this.refs={},this.editors=[],this.currentEditor='',t=0;t<this.schema.links.length;t++)if('describedby'===this.schema.links[t].rel.toLowerCase()){this.template=this.jsoneditor.compileTemplate(this.schema.links[t].href,this.template_engine);break;}this.schema.links=this.schema.links.slice(0,t).concat(this.schema.links.slice(t+1)),0===this.schema.links.length&&delete this.schema.links,this.baseSchema=f({},this.schema);}},{key:'build',value:function(){this.editor_holder=document.createElement('div'),this.container.appendChild(this.editor_holder),this.switchEditor();}},{key:'onWatchedFieldChange',value:function(){this.switchEditor();}},{key:'onChildEditorChange',value:function(t){this.editors[this.currentEditor]&&this.refreshValue(),rn(ln(o.prototype),'onChildEditorChange',this).call(this,t);}},{key:'refreshValue',value:function(){this.editors[this.currentEditor]&&(this.value=this.editors[this.currentEditor].getValue());}},{key:'setValue',value:function(t,e){this.editors[this.currentEditor]&&(this.editors[this.currentEditor].setValue(t,e),this.refreshValue(),this.onChange());}},{key:'destroy',value:function(){this.editors.forEach(function(t){t&&t.destroy();}),this.editor_holder&&this.editor_holder.parentNode&&this.editor_holder.parentNode.removeChild(this.editor_holder),rn(ln(o.prototype),'destroy',this).call(this);}},{key:'showValidationErrors',value:function(t){this.editors.forEach(function(e){e&&e.showValidationErrors(t);});}}])&&nn(e.prototype,n),r&&nn(e,r),o;}(N);function un(t){return(un='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function hn(t,e){return function(t){if(Array.isArray(t))return t;}(t)||function(t,e){if('undefined'==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t;}finally{try{r||null==s.return||s.return();}finally{if(i)throw o;}}return n;}(t,e)||function(t,e){if(!t)return;if('string'==typeof t)return pn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);'Object'===n&&t.constructor&&(n=t.constructor.name);if('Map'===n||'Set'===n)return Array.from(t);if('Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pn(t,e);}(t,e)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function pn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}function dn(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function fn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function yn(t,e,n){return(yn='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=gn(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function mn(t,e){return(mn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function bn(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=gn(t);if(e){var i=gn(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return vn(this,n);};}function vn(t,e){return!e||'object'!==un(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function gn(t){return(gn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var _n=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&mn(t,e);}(o,t);var e,n,r,i=bn(o);function o(){return dn(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getNumColumns',value:function(){return 4;}},{key:'build',value:function(){var t=this;this.title=this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired()),this.container.appendChild(this.title),this.options.enum_titles=this.options.enum_titles||[],this.enum=this.schema.enum,this.selected=0,this.select_options=[],this.html_values=[];for(var e=0;e<this.enum.length;e++)this.select_options[e]=this.options.enum_titles[e]||'Value '.concat(e+1),this.html_values[e]=this.getHTML(this.enum[e]);this.switcher=this.theme.getSwitcher(this.select_options),this.container.appendChild(this.switcher),this.display_area=this.theme.getIndentedPanel(),this.container.appendChild(this.display_area),this.options.hide_display&&(this.display_area.style.display='none'),this.switcher.addEventListener('change',function(e){t.selected=t.select_options.indexOf(e.currentTarget.value),t.value=t.enum[t.selected],t.refreshValue(),t.onChange(!0);}),this.value=this.enum[0],this.refreshValue(),1===this.enum.length&&(this.switcher.style.display='none');}},{key:'refreshValue',value:function(){var t=this;this.selected=-1;var e=JSON.stringify(this.value);this.enum.forEach(function(n,r){if(e===JSON.stringify(n))return t.selected=r,!1;}),this.selected<0?this.setValue(this.enum[0]):(this.switcher.value=this.select_options[this.selected],this.display_area.innerHTML=this.html_values[this.selected]);}},{key:'enable',value:function(){this.always_disabled||(this.switcher.disabled=!1,yn(gn(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.switcher.disabled=!0,yn(gn(o.prototype),'disable',this).call(this);}},{key:'getHTML',value:function(t){var e=this;if(null===t)return'<em>null</em>';if('object'===un(t)){var n='';return function(t,e){Array.isArray(t)||'number'==typeof t.length&&t.length>0&&t.length-1 in t?Array.from(t).forEach(function(t,n){return e(n,t);}):Object.entries(t).forEach(function(t){var n=hn(t,2),r=n[0],i=n[1];return e(r,i);});}(t,function(r,i){var o=e.getHTML(i);Array.isArray(t)||(o='<div><em>'.concat(r,'</em>: ').concat(o,'</div>')),n+='<li>'.concat(o,'</li>');}),n=Array.isArray(t)?'<ol>'.concat(n,'</ol>'):"<ul style='margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;'>".concat(n,'</ul>');}return'boolean'==typeof t?t?'true':'false':'string'==typeof t?t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):t;}},{key:'setValue',value:function(t){this.value!==t&&(this.value=t,this.refreshValue(),this.onChange());}},{key:'destroy',value:function(){this.display_area&&this.display_area.parentNode&&this.display_area.parentNode.removeChild(this.display_area),this.title&&this.title.parentNode&&this.title.parentNode.removeChild(this.title),this.switcher&&this.switcher.parentNode&&this.switcher.parentNode.removeChild(this.switcher),yn(gn(o.prototype),'destroy',this).call(this);}}])&&fn(e.prototype,n),r&&fn(e,r),o;}(N);function wn(t){return(wn='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function kn(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function xn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function jn(t,e,n){return(jn='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Sn(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function On(t,e){return(On=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Cn(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Sn(t);if(e){var i=Sn(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return En(this,n);};}function En(t,e){return!e||'object'!==wn(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Sn(t){return(Sn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Pn=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&On(t,e);}(o,t);var e,n,r,i=Cn(o);function o(){return kn(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'register',value:function(){jn(Sn(o.prototype),'register',this).call(this),this.input&&this.input.setAttribute('name',this.formname);}},{key:'unregister',value:function(){jn(Sn(o.prototype),'unregister',this).call(this),this.input&&this.input.removeAttribute('name');}},{key:'setValue',value:function(t,e,n){if((!this.template||n)&&(null==t?t='':'object'===wn(t)?t=JSON.stringify(t):'string'!=typeof t&&(t=''.concat(t)),t!==this.serialized)){var r=this.sanitize(t);if(this.input.value!==r){this.input.value=r;var i=n||this.getValue()!==t;this.refreshValue(),e?this.is_dirty=!1:'change'===this.jsoneditor.options.show_errors&&(this.is_dirty=!0),this.adjust_height&&this.adjust_height(this.input),this.onChange(i);}}}},{key:'getNumColumns',value:function(){return 2;}},{key:'enable',value:function(){jn(Sn(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(){jn(Sn(o.prototype),'disable',this).call(this);}},{key:'refreshValue',value:function(){this.value=this.input.value,'string'!=typeof this.value&&(this.value=''),this.serialized=this.value;}},{key:'destroy',value:function(){this.template=null,this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),jn(Sn(o.prototype),'destroy',this).call(this);}},{key:'sanitize',value:function(t){return t;}},{key:'onWatchedFieldChange',value:function(){var t;this.template&&(t=this.getWatchedFieldValues(),this.setValue(this.template(t),!1,!0)),jn(Sn(o.prototype),'onWatchedFieldChange',this).call(this);}},{key:'build',value:function(){if(this.format=this.schema.format,!this.format&&this.options.default_format&&(this.format=this.options.default_format),this.options.format&&(this.format=this.options.format),this.input_type='hidden',this.input=this.theme.getFormInputField(this.input_type),this.format&&this.input.setAttribute('data-schemaformat',this.format),this.container.appendChild(this.input),this.schema.template){var t=this.expandCallbacks('template',{template:this.schema.template});'function'==typeof t.template?this.template=t.template:this.template=this.jsoneditor.compileTemplate(this.schema.template,this.template_engine),this.refreshValue();}else this.refreshValue();}}])&&xn(e.prototype,n),r&&xn(e,r),o;}(N);function Rn(t){return(Rn='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Ln(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Tn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function An(t,e){return(An=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function In(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Nn(t);if(e){var i=Nn(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Dn(this,n);};}function Dn(t,e){return!e||'object'!==Rn(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Nn(t){return(Nn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Bn=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&An(t,e);}(o,t);var e,n,r,i=In(o);function o(){return Ln(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'build',value:function(){this.options.compact=!1,this.header=this.label=this.theme.getFormInputLabel(this.getTitle()),this.description=this.theme.getDescription(this.schema.description||''),this.control=this.theme.getFormControl(this.label,this.description,null),this.container.appendChild(this.control);}},{key:'getTitle',value:function(){return this.translateProperty(this.schema.title);}},{key:'getNumColumns',value:function(){return 12;}}])&&Tn(e.prototype,n),r&&Tn(e,r),o;}(be);function Fn(t){return(Fn='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Vn(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Hn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function zn(t,e,n){return(zn='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Gn(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Mn(t,e){return(Mn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function qn(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Gn(t);if(e){var i=Gn(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Un(this,n);};}function Un(t,e){return!e||'object'!==Fn(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Gn(t){return(Gn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var $n=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Mn(t,e);}(o,t);var e,n,r,i=qn(o);function o(){return Vn(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'build',value:function(){if(zn(Gn(o.prototype),'build',this).call(this),void 0!==this.schema.minimum){var t=this.schema.minimum;void 0!==this.schema.exclusiveMinimum&&(t+=1),this.input.setAttribute('min',t);}if(void 0!==this.schema.maximum){var e=this.schema.maximum;void 0!==this.schema.exclusiveMaximum&&(e-=1),this.input.setAttribute('max',e);}if(void 0!==this.schema.step){var n=this.schema.step||1;this.input.setAttribute('step',n);}this.setInputAttributes(['maxlength','pattern','readonly','min','max','step']);}},{key:'getNumColumns',value:function(){return 2;}},{key:'getValue',value:function(){if(this.dependenciesFulfilled){var t=function(t){if(null==t)return!1;var e=t.match(v),n=parseFloat(t);return null!==e&&!isNaN(n)&&isFinite(n);}(this.value)?parseFloat(this.value):this.value;if(this.jsoneditor.options.use_default_values||''!==t)return t;}}}])&&Hn(e.prototype,n),r&&Hn(e,r),o;}(G);function Jn(t){return(Jn='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Wn(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Zn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Qn(t,e){return(Qn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Yn(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Kn(t);if(e){var i=Kn(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Xn(this,n);};}function Xn(t,e){return!e||'object'!==Jn(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Kn(t){return(Kn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var tr=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Qn(t,e);}(o,t);var e,n,r,i=Yn(o);function o(){return Wn(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getNumColumns',value:function(){return 2;}},{key:'getValue',value:function(){if(this.dependenciesFulfilled){var t=function(t){if(null==t)return!1;var e=t.match(g),n=parseInt(t);return null!==e&&!isNaN(n)&&isFinite(n);}(this.value)?parseInt(this.value):this.value;if(this.jsoneditor.options.use_default_values||''!==t)return t;}}}])&&Zn(e.prototype,n),r&&Zn(e,r),o;}($n);function er(t){return(er='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function nr(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function rr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function ir(t,e,n){return(ir='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=lr(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function or(t,e){return(or=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function ar(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=lr(t);if(e){var i=lr(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return sr(this,n);};}function sr(t,e){return!e||'object'!==er(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function lr(t){return(lr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var cr=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&or(t,e);}(o,t);var e,n,r,i=ar(o);function o(){return nr(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'preBuild',value:function(){if(ir(lr(o.prototype),'preBuild',this).call(this),this.schema.options||(this.schema.options={}),!this.schema.options.cleave)switch(this.format){case'ipv6':this.schema.options.cleave={delimiters:[':'],blocks:[4,4,4,4,4,4,4,4],uppercase:!0};break;case'ipv4':this.schema.options.cleave={delimiters:['.'],blocks:[3,3,3,3],numericOnly:!0};}this.options=f(this.options,this.schema.options||{});}}])&&rr(e.prototype,n),r&&rr(e,r),o;}(G);function ur(t){return(ur='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function hr(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function pr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function dr(t,e,n){return(dr='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=br(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function fr(t,e){return(fr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function yr(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=br(t);if(e){var i=br(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return mr(this,n);};}function mr(t,e){return!e||'object'!==ur(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function br(t){return(br=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var vr=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&fr(t,e);}(o,t);var e,n,r,i=yr(o);function o(){return hr(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e,n){var r=dr(br(o.prototype),'setValue',this).call(this,t,e,n);void 0!==r&&r.changed&&this.jodit_instance&&this.jodit_instance.setEditorValue(r.value);}},{key:'build',value:function(){this.options.format='textarea',dr(br(o.prototype),'build',this).call(this),this.input_type=this.schema.format,this.input.setAttribute('data-schemaformat',this.input_type);}},{key:'afterInputReady',value:function(){var t,e=this;window.Jodit?(t=this.expandCallbacks('jodit',f({},{height:300},this.defaults.options.jodit||{},this.options.jodit||{})),this.jodit_instance=new window.Jodit(this.input,t),(this.schema.readOnly||this.schema.readonly||this.schema.template)&&this.jodit_instance.setReadOnly(!0),this.jodit_instance.events.on('change',function(){e.value=e.jodit_instance.getEditorValue(),e.is_dirty=!0,e.onChange(!0);}),this.theme.afterInputReady(this.input)):dr(br(o.prototype),'afterInputReady',this).call(this);}},{key:'getNumColumns',value:function(){return 6;}},{key:'enable',value:function(){!this.always_disabled&&this.jodit_instance&&this.jodit_instance.setReadOnly(!1),dr(br(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.jodit_instance&&this.jodit_instance.setReadOnly(!0),dr(br(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.jodit_instance&&(this.jodit_instance.destruct(),this.jodit_instance=null),dr(br(o.prototype),'destroy',this).call(this);}}])&&pr(e.prototype,n),r&&pr(e,r),o;}(G);function gr(t){return(gr='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function _r(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function wr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function kr(t,e,n){return(kr='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Cr(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function xr(t,e){return(xr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function jr(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Cr(t);if(e){var i=Cr(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Or(this,n);};}function Or(t,e){return!e||'object'!==gr(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Cr(t){return(Cr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Er=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&xr(t,e);}(o,t);var e,n,r,i=jr(o);function o(){return _r(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'register',value:function(){if(this.editors){for(var t=0;t<this.editors.length;t++)this.editors[t]&&this.editors[t].unregister();this.editors[this.type]&&this.editors[this.type].register();}kr(Cr(o.prototype),'register',this).call(this);}},{key:'unregister',value:function(){if(kr(Cr(o.prototype),'unregister',this).call(this),this.editors)for(var t=0;t<this.editors.length;t++)this.editors[t]&&this.editors[t].unregister();}},{key:'getNumColumns',value:function(){return this.editors[this.type]?Math.max(this.editors[this.type].getNumColumns(),4):4;}},{key:'enable',value:function(){if(!this.always_disabled){if(this.editors)for(var t=0;t<this.editors.length;t++)this.editors[t]&&this.editors[t].enable();this.switcher.disabled=!1,kr(Cr(o.prototype),'enable',this).call(this);}}},{key:'disable',value:function(t){if(t&&(this.always_disabled=!0),this.editors)for(var e=0;e<this.editors.length;e++)this.editors[e]&&this.editors[e].disable(t);this.switcher.disabled=!0,kr(Cr(o.prototype),'disable',this).call(this);}},{key:'switchEditor',value:function(t){var e=this;this.editors[t]||this.buildChildEditor(t);var n=this.getValue();this.type=t,this.register(),this.editors.forEach(function(t,r){t&&(e.type===r?(e.keep_values&&t.setValue(n,!0),t.container.style.display=''):t.container.style.display='none');}),this.refreshValue(),this.refreshHeaderText();}},{key:'buildChildEditor',value:function(t){var e,n=this,r=this.types[t],i=this.theme.getChildEditorHolder();this.editor_holder.appendChild(i),'string'==typeof r?(e=f({},this.schema)).type=r:(e=f({},this.schema,r),e=this.jsoneditor.expandRefs(e),r&&r.required&&Array.isArray(r.required)&&this.schema.required&&Array.isArray(this.schema.required)&&(e.required=this.schema.required.concat(r.required)));var o=this.jsoneditor.getEditorClass(e);this.editors[t]=this.jsoneditor.createEditor(o,{jsoneditor:this.jsoneditor,schema:e,container:i,path:this.path,parent:this,required:!0}),this.editors[t].preBuild(),this.editors[t].build(),this.editors[t].postBuild(),this.editors[t].header&&(this.editors[t].header.style.display='none'),this.editors[t].option=this.switcher_options[t],i.addEventListener('change_header_text',function(){n.refreshHeaderText();}),t!==this.type&&(i.style.display='none');}},{key:'preBuild',value:function(){if(this.types=[],this.type=0,this.editors=[],this.validators=[],this.keep_values=!0,void 0!==this.jsoneditor.options.keep_oneof_values&&(this.keep_values=this.jsoneditor.options.keep_oneof_values),void 0!==this.options.keep_oneof_values&&(this.keep_values=this.options.keep_oneof_values),this.schema.oneOf)this.oneOf=!0,this.types=this.schema.oneOf,delete this.schema.oneOf;else if(this.schema.anyOf)this.anyOf=!0,this.types=this.schema.anyOf,delete this.schema.anyOf;else{if(this.schema.type&&'any'!==this.schema.type)Array.isArray(this.schema.type)?this.types=this.schema.type:this.types=[this.schema.type];else if(this.types=['string','number','integer','boolean','object','array','null'],this.schema.disallow){var t=this.schema.disallow;'object'===gr(t)&&Array.isArray(t)||(t=[t]);var e=[];this.types.forEach(function(n){t.includes(n)||e.push(n);}),this.types=e;}delete this.schema.type;}this.display_text=this.getDisplayText(this.types);}},{key:'build',value:function(){var t=this,e=this.container;this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired()),this.container.appendChild(this.header),this.switcher=this.theme.getSwitcher(this.display_text),e.appendChild(this.switcher),this.switcher.addEventListener('change',function(e){e.preventDefault(),e.stopPropagation(),t.switchEditor(t.display_text.indexOf(e.currentTarget.value)),t.onChange(!0);}),this.editor_holder=document.createElement('div'),e.appendChild(this.editor_holder);var n={};this.jsoneditor.options.custom_validators&&(n.custom_validators=this.jsoneditor.options.custom_validators),this.switcher_options=this.theme.getSwitcherOptions(this.switcher),this.types.forEach(function(e,r){var i;t.editors[r]=!1,'string'==typeof e?(i=f({},t.schema)).type=e:(i=f({},t.schema,e),e.required&&Array.isArray(e.required)&&t.schema.required&&Array.isArray(t.schema.required)&&(i.required=t.schema.required.concat(e.required))),t.validators[r]=new C(t.jsoneditor,i,n,t.defaults);}),this.switchEditor(0);}},{key:'onChildEditorChange',value:function(t){this.editors[this.type]&&(this.refreshValue(),this.refreshHeaderText()),kr(Cr(o.prototype),'onChildEditorChange',this).call(this);}},{key:'refreshHeaderText',value:function(){var t=this.getDisplayText(this.types);Array.from(this.switcher_options).forEach(function(e,n){e.textContent=t[n];});}},{key:'refreshValue',value:function(){this.value=this.editors[this.type].getValue();}},{key:'setValue',value:function(t,e){var n=this,r=this.type,i={match:0,extra:0,i:this.type},o={match:0,i:null};this.validators.forEach(function(e,r){var a=null;void 0!==n.anyOf&&n.anyOf&&(a=e.fitTest(t),(i.match<a.match||i.match===a.match&&i.extra>a.extra)&&((i=a).i=r)),e.validate(t).length||null!==o.i||(o.i=r,null!==a&&(o.match=a.match));});var a=o.i;void 0!==this.anyOf&&this.anyOf&&o.match<i.match&&(a=i.i),null===a&&(a=this.type),this.type=a,this.switcher.value=this.display_text[a];var s=this.type!==r;s&&this.switchEditor(this.type),this.editors[this.type].setValue(t,e),this.refreshValue(),this.onChange(s);}},{key:'destroy',value:function(){this.editors.forEach(function(t){t&&t.destroy();}),this.editor_holder&&this.editor_holder.parentNode&&this.editor_holder.parentNode.removeChild(this.editor_holder),this.switcher&&this.switcher.parentNode&&this.switcher.parentNode.removeChild(this.switcher),kr(Cr(o.prototype),'destroy',this).call(this);}},{key:'showValidationErrors',value:function(t){var e=this;if(this.oneOf||this.anyOf){var n=this.oneOf?'oneOf':'anyOf';this.editors.forEach(function(r,i){if(r){var o=''.concat(e.path,'.').concat(n,'[').concat(i,']');r.showValidationErrors(t.reduce(function(t,n){if(n.path.startsWith(o)||n.path===o.substr(0,n.path.length)){var r=f({},n);n.path.startsWith(o)&&(r.path=e.path+r.path.substr(o.length)),t.push(r);}return t;},[]));}});}else this.editors.forEach(function(e){e&&e.showValidationErrors(t);});}},{key:'addLinks',value:function(){}}])&&wr(e.prototype,n),r&&wr(e,r),o;}(N);function Sr(t){return(Sr='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Pr(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Rr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Lr(t,e){return(Lr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Tr(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Ir(t);if(e){var i=Ir(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ar(this,n);};}function Ar(t,e){return!e||'object'!==Sr(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Ir(t){return(Ir=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Dr=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lr(t,e);}(o,t);var e,n,r,i=Tr(o);function o(){return Pr(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getValue',value:function(){if(this.dependenciesFulfilled)return null;}},{key:'setValue',value:function(){this.onChange();}},{key:'getNumColumns',value:function(){return 2;}}])&&Rr(e.prototype,n),r&&Rr(e,r),o;}(N);n(158),n(159);function Nr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable;})),n.push.apply(n,r);}return n;}function Br(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Nr(Object(n),!0).forEach(function(e){Fr(t,e,n[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nr(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));});}return t;}function Fr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;}function Vr(t,e){return function(t){if(Array.isArray(t))return t;}(t)||function(t,e){if('undefined'==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t;}finally{try{r||null==s.return||s.return();}finally{if(i)throw o;}}return n;}(t,e)||function(t,e){if(!t)return;if('string'==typeof t)return Hr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);'Object'===n&&t.constructor&&(n=t.constructor.name);if('Map'===n||'Set'===n)return Array.from(t);if('Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(t,e);}(t,e)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function Hr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}function zr(t){return(zr='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Mr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function qr(t,e,n){return(qr='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Jr(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Ur(t,e){return(Ur=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Gr(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Jr(t);if(e){var i=Jr(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return $r(this,n);};}function $r(t,e){return!e||'object'!==zr(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Jr(t){return(Jr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Wr=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ur(t,e);}(o,t);var e,n,r,i=Gr(o);function o(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,o),(r=i.call(this,t,e)).currentDepth=n,r;}return e=o,(n=[{key:'getDefault',value:function(){return f({},this.schema.default||{});}},{key:'getChildEditors',value:function(){return this.editors;}},{key:'register',value:function(){qr(Jr(o.prototype),'register',this).call(this),this.editors&&Object.values(this.editors).forEach(function(t){return t.register();});}},{key:'unregister',value:function(){qr(Jr(o.prototype),'unregister',this).call(this),this.editors&&Object.values(this.editors).forEach(function(t){return t.unregister();});}},{key:'getNumColumns',value:function(){return Math.max(Math.min(12,this.maxwidth),3);}},{key:'enable',value:function(){this.always_disabled||(this.editjson_control&&(this.editjson_control.disabled=!1),this.addproperty_button&&(this.addproperty_button.disabled=!1),qr(Jr(o.prototype),'enable',this).call(this),this.editors&&Object.values(this.editors).forEach(function(t){t.isActive()&&t.enable(),t.optInCheckbox.disabled=!1;}));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.editjson_control&&(this.editjson_control.disabled=!0),this.addproperty_button&&(this.addproperty_button.disabled=!0),this.hideEditJSON(),qr(Jr(o.prototype),'disable',this).call(this),this.editors&&Object.values(this.editors).forEach(function(e){e.isActive()&&e.disable(t),e.optInCheckbox.disabled=!0;});}},{key:'layoutEditors',value:function(){var t,e,n=this;if(this.row_container){var r;this.property_order=Object.keys(this.editors),this.property_order=this.property_order.sort(function(t,e){var r=n.editors[t].schema.propertyOrder,i=n.editors[e].schema.propertyOrder;return'number'!=typeof r&&(r=1e3),'number'!=typeof i&&(i=1e3),r-i;});var i,o='categories'===this.format,a=[],s=null,l=null;if('grid-strict'===this.format){var c=0;if(i=[],this.property_order.forEach(function(t){var e=n.editors[t];if(!e.property_removed){var r=e.options.hidden?0:e.options.grid_columns||e.getNumColumns(),o=e.options.hidden?0:e.options.grid_offset||0,s=!e.options.hidden&&(e.options.grid_break||!1),l={key:t,width:r,offset:o,height:e.options.hidden?0:e.container.offsetHeight};i.push(l),a[c]=i,s&&(c++,i=[]);}}),this.layout===JSON.stringify(a))return!1;for(this.layout=JSON.stringify(a),r=document.createElement('div'),t=0;t<a.length;t++)for(i=this.theme.getGridRow(),r.appendChild(i),e=0;e<a[t].length;e++)s=a[t][e].key,(l=this.editors[s]).options.hidden?l.container.style.display='none':this.theme.setGridColumnSize(l.container,a[t][e].width,a[t][e].offset),i.appendChild(l.container);}else if('grid'===this.format){for(this.property_order.forEach(function(t){var e=n.editors[t];if(!e.property_removed){for(var r=!1,i=e.options.hidden?0:e.options.grid_columns||e.getNumColumns(),o=e.options.hidden?0:e.container.offsetHeight,s=0;s<a.length;s++)a[s].width+i<=12&&(!o||0.5*a[s].minh<o&&2*a[s].maxh>o)&&(r=s);!1===r&&(a.push({width:0,minh:999999,maxh:0,editors:[]}),r=a.length-1),a[r].editors.push({key:t,width:i,height:o}),a[r].width+=i,a[r].minh=Math.min(a[r].minh,o),a[r].maxh=Math.max(a[r].maxh,o);}}),t=0;t<a.length;t++)if(a[t].width<12){var u=!1,h=0;for(e=0;e<a[t].editors.length;e++)(!1===u||a[t].editors[e].width>a[t].editors[u].width)&&(u=e),a[t].editors[e].width*=12/a[t].width,a[t].editors[e].width=Math.floor(a[t].editors[e].width),h+=a[t].editors[e].width;h<12&&(a[t].editors[u].width+=12-h),a[t].width=12;}if(this.layout===JSON.stringify(a))return!1;for(this.layout=JSON.stringify(a),r=document.createElement('div'),t=0;t<a.length;t++)for(i=this.theme.getGridRow(),r.appendChild(i),e=0;e<a[t].editors.length;e++)s=a[t].editors[e].key,(l=this.editors[s]).options.hidden?l.container.style.display='none':this.theme.setGridColumnSize(l.container,a[t].editors[e].width),i.appendChild(l.container);}else{if(r=document.createElement('div'),o){var p=document.createElement('div'),d=this.theme.getTopTabHolder(this.translateProperty(this.schema.title)),f=this.theme.getTopTabContentHolder(d);for(this.property_order.forEach(function(t){var e=n.editors[t];if(!e.property_removed){var r=n.theme.getTabContent(),i=e.schema&&('object'===e.schema.type||'array'===e.schema.type);r.isObjOrArray=i;var o=n.theme.getGridRow();e.tab||(void 0===n.basicPane?n.addRow(e,d,r):n.addRow(e,d,n.basicPane)),r.id=n.getValidId(e.tab_text.textContent),i?(r.appendChild(o),f.appendChild(r),n.theme.addTopTab(d,e.tab)):(p.appendChild(o),f.childElementCount>0?f.firstChild.isObjOrArray&&(r.appendChild(p),f.insertBefore(r,f.firstChild),n.theme.insertBasicTopTab(e.tab,d),e.basicPane=r):(r.appendChild(p),f.appendChild(r),n.theme.addTopTab(d,e.tab),e.basicPane=r)),e.options.hidden?e.container.style.display='none':n.theme.setGridColumnSize(e.container,12),o.appendChild(e.container),e.rowPane=r;}});this.tabPanesContainer.firstChild;)this.tabPanesContainer.removeChild(this.tabPanesContainer.firstChild);var m=this.tabs_holder.parentNode;m.removeChild(m.firstChild),m.appendChild(d),this.tabPanesContainer=f,this.tabs_holder=d;var b=this.theme.getFirstTab(this.tabs_holder);return void(b&&y(b,'click'));}this.property_order.forEach(function(t){var e=n.editors[t];e.property_removed||(i=n.theme.getGridRow(),r.appendChild(i),e.options.hidden?e.container.style.display='none':n.theme.setGridColumnSize(e.container,12),i.appendChild(e.container));});}for(;this.row_container.firstChild;)this.row_container.removeChild(this.row_container.firstChild);this.row_container.appendChild(r);}}},{key:'getPropertySchema',value:function(t){var e=this,n=this.schema.properties[t]||{};n=f({},n);var r=!!this.schema.properties[t];return this.schema.patternProperties&&Object.keys(this.schema.patternProperties).forEach(function(i){new RegExp(i).test(t)&&(n.allOf=n.allOf||[],n.allOf.push(e.schema.patternProperties[i]),r=!0);}),!r&&this.schema.additionalProperties&&'object'===zr(this.schema.additionalProperties)&&(n=f({},this.schema.additionalProperties)),n;}},{key:'preBuild',value:function(){var t=this;if(qr(Jr(o.prototype),'preBuild',this).call(this),this.editors={},this.cached_editors={},this.format=this.options.layout||this.options.object_layout||this.schema.format||this.jsoneditor.options.object_layout||'normal',this.schema.properties=this.schema.properties||{},this.minwidth=0,this.maxwidth=0,this.options.table_row)Object.entries(this.schema.properties).forEach(function(e){var n=Vr(e,2),r=n[0],i=n[1],o=t.jsoneditor.getEditorClass(i);t.editors[r]=t.jsoneditor.createEditor(o,{jsoneditor:t.jsoneditor,schema:i,path:''.concat(t.path,'.').concat(r),parent:t,compact:!0,required:!0},t.currentDepth+1),t.editors[r].preBuild();var a=t.editors[r].options.hidden?0:t.editors[r].options.grid_columns||t.editors[r].getNumColumns();t.minwidth+=a,t.maxwidth+=a;}),this.no_link_holder=!0;else{if(this.options.table)throw new Error('Not supported yet');this.schema.defaultProperties||(this.jsoneditor.options.display_required_only||this.options.display_required_only?this.schema.defaultProperties=Object.keys(this.schema.properties).filter(function(e){return t.isRequiredObject({key:e,schema:t.schema.properties[e]});}):this.schema.defaultProperties=Object.keys(this.schema.properties)),this.maxwidth+=1,Array.isArray(this.schema.defaultProperties)&&this.schema.defaultProperties.forEach(function(e){t.addObjectProperty(e,!0),t.editors[e]&&(t.minwidth=Math.max(t.minwidth,t.editors[e].options.grid_columns||t.editors[e].getNumColumns()),t.maxwidth+=t.editors[e].options.grid_columns||t.editors[e].getNumColumns());});}this.property_order=Object.keys(this.editors),this.property_order=this.property_order.sort(function(e,n){var r=t.editors[e].schema.propertyOrder,i=t.editors[n].schema.propertyOrder;return'number'!=typeof r&&(r=1e3),'number'!=typeof i&&(i=1e3),r-i;});}},{key:'addTab',value:function(t){var e=this,n=this.rows[t].schema&&('object'===this.rows[t].schema.type||'array'===this.rows[t].schema.type);this.tabs_holder&&(this.rows[t].tab_text=document.createElement('span'),this.rows[t].tab_text.textContent=n?this.rows[t].getHeaderText():void 0===this.schema.basicCategoryTitle?'Basic':this.schema.basicCategoryTitle,this.rows[t].tab=this.theme.getTopTab(this.rows[t].tab_text,this.getValidId(this.rows[t].tab_text.textContent)),this.rows[t].tab.addEventListener('click',function(n){e.active_tab=e.rows[t].tab,e.refreshTabs(),n.preventDefault(),n.stopPropagation();}));}},{key:'addRow',value:function(t,e,n){var r=this.rows.length,i='object'===t.schema.type||'array'===t.schema.type;this.rows[r]=t,this.rows[r].rowPane=n,i?(this.addTab(r),this.theme.addTopTab(e,this.rows[r].tab)):void 0===this.basicTab?(this.addTab(r),this.basicTab=r,this.basicPane=n,this.theme.addTopTab(e,this.rows[r].tab)):(this.rows[r].tab=this.rows[this.basicTab].tab,this.rows[r].tab_text=this.rows[this.basicTab].tab_text,this.rows[r].rowPane=this.rows[this.basicTab].rowPane);}},{key:'refreshTabs',value:function(t){var e=this,n=void 0!==this.basicTab,r=!1;this.rows.forEach(function(i){i.tab&&i.rowPane&&i.rowPane.parentNode&&(n&&i.tab===e.rows[e.basicTab].tab&&r||(t?i.tab_text.textContent=i.getHeaderText():(n&&i.tab===e.rows[e.basicTab].tab&&(r=!0),i.tab===e.active_tab?e.theme.markTabActive(i):e.theme.markTabInactive(i))));});}},{key:'build',value:function(){var t=this,e='categories'===this.format;if(this.rows=[],this.active_tab=null,this.options.table_row)this.editor_holder=this.container,Object.entries(this.editors).forEach(function(e){var n=Vr(e,2),r=n[0],i=n[1],o=t.theme.getTableCell();t.editor_holder.appendChild(o),i.setContainer(o),i.build(),i.postBuild(),i.setOptInCheckbox(i.header),t.editors[r].options.hidden&&(o.style.display='none'),t.editors[r].options.input_width&&(o.style.width=t.editors[r].options.input_width);});else{if(this.options.table)throw new Error('Not supported yet');this.header='',this.options.compact||(this.header=document.createElement('label'),this.header.textContent=this.getTitle()),this.title=this.theme.getHeader(this.header,this.getPathDepth()),this.title.classList.add('je-object__title'),this.controls=this.theme.getButtonHolder(),this.controls.classList.add('je-object__controls'),this.container.appendChild(this.title),this.container.appendChild(this.controls),this.container.classList.add('je-object__container'),this.editjson_holder=this.theme.getModal(),this.editjson_textarea=this.theme.getTextareaInput(),this.editjson_textarea.classList.add('je-edit-json--textarea'),this.editjson_save=this.getButton('button_save','save','button_save'),this.editjson_save.classList.add('json-editor-btntype-save'),this.editjson_save.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.saveJSON();}),this.editjson_copy=this.getButton('button_copy','copy','button_copy'),this.editjson_copy.classList.add('json-editor-btntype-copy'),this.editjson_copy.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.copyJSON();}),this.editjson_cancel=this.getButton('button_cancel','cancel','button_cancel'),this.editjson_cancel.classList.add('json-editor-btntype-cancel'),this.editjson_cancel.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.hideEditJSON();}),this.editjson_holder.appendChild(this.editjson_textarea),this.editjson_holder.appendChild(this.editjson_save),this.editjson_holder.appendChild(this.editjson_copy),this.editjson_holder.appendChild(this.editjson_cancel),this.addproperty_holder=this.theme.getModal(),this.addproperty_list=document.createElement('div'),this.addproperty_list.classList.add('property-selector'),this.addproperty_add=this.getButton('button_add','add','button_add'),this.addproperty_add.classList.add('json-editor-btntype-add'),this.addproperty_input=this.theme.getFormInputField('text'),this.addproperty_input.setAttribute('placeholder','Property name...'),this.addproperty_input.classList.add('property-selector-input'),this.addproperty_add.addEventListener('click',function(e){if(e.preventDefault(),e.stopPropagation(),t.addproperty_input.value){if(t.editors[t.addproperty_input.value])return void window.alert('there is already a property with that name');t.addObjectProperty(t.addproperty_input.value),t.editors[t.addproperty_input.value]&&t.editors[t.addproperty_input.value].disable(),t.onChange(!0);}}),this.addproperty_input.addEventListener('input',function(t){t.target.previousSibling.childNodes.forEach(function(e){e.innerText.includes(t.target.value)?e.style.display='':e.style.display='none';});}),this.addproperty_holder.appendChild(this.addproperty_list),this.addproperty_holder.appendChild(this.addproperty_input),this.addproperty_holder.appendChild(this.addproperty_add);var n=document.createElement('div');n.style.clear='both',this.addproperty_holder.appendChild(n),document.addEventListener('click',this.onOutsideModalClick),this.schema.description&&(this.description=this.theme.getDescription(this.translateProperty(this.schema.description)),this.container.appendChild(this.description)),this.error_holder=document.createElement('div'),this.container.appendChild(this.error_holder),this.editor_holder=this.theme.getIndentedPanel(),this.container.appendChild(this.editor_holder),this.row_container=this.theme.getGridContainer(),e?(this.tabs_holder=this.theme.getTopTabHolder(this.getValidId(this.translateProperty(this.schema.title))),this.tabPanesContainer=this.theme.getTopTabContentHolder(this.tabs_holder),this.editor_holder.appendChild(this.tabs_holder)):(this.tabs_holder=this.theme.getTabHolder(this.getValidId(this.translateProperty(this.schema.title))),this.tabPanesContainer=this.theme.getTabContentHolder(this.tabs_holder),this.editor_holder.appendChild(this.row_container)),Object.values(this.editors).forEach(function(n){var r=t.theme.getTabContent(),i=t.theme.getGridColumn(),o=!(!n.schema||'object'!==n.schema.type&&'array'!==n.schema.type);if(r.isObjOrArray=o,e){if(o){var a=t.theme.getGridContainer();a.appendChild(i),r.appendChild(a),t.tabPanesContainer.appendChild(r),t.row_container=a;}else void 0===t.row_container_basic&&(t.row_container_basic=t.theme.getGridContainer(),r.appendChild(t.row_container_basic),0===t.tabPanesContainer.childElementCount?t.tabPanesContainer.appendChild(r):t.tabPanesContainer.insertBefore(r,t.tabPanesContainer.childNodes[1])),t.row_container_basic.appendChild(i);t.addRow(n,t.tabs_holder,r),r.id=t.getValidId(n.schema.title);}else t.row_container.appendChild(i);n.setContainer(i),n.build(),n.postBuild(),n.setOptInCheckbox(n.header);}),this.rows[0]&&y(this.rows[0].tab,'click'),this.collapsed=!1,this.collapse_control=this.getButton('','collapse','button_collapse'),this.collapse_control.classList.add('json-editor-btntype-toggle'),this.title.insertBefore(this.collapse_control,this.title.childNodes[0]),this.collapse_control.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.collapsed?(t.editor_holder.style.display='',t.collapsed=!1,t.setButtonText(t.collapse_control,'','collapse','button_collapse')):(t.editor_holder.style.display='none',t.collapsed=!0,t.setButtonText(t.collapse_control,'','expand','button_expand'));}),this.options.collapsed&&y(this.collapse_control,'click'),this.schema.options&&void 0!==this.schema.options.disable_collapse?this.schema.options.disable_collapse&&(this.collapse_control.style.display='none'):this.jsoneditor.options.disable_collapse&&(this.collapse_control.style.display='none'),this.editjson_control=this.getButton('JSON','edit','button_edit_json'),this.editjson_control.classList.add('json-editor-btntype-editjson'),this.editjson_control.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.toggleEditJSON();}),this.controls.appendChild(this.editjson_control),this.controls.insertBefore(this.editjson_holder,this.controls.childNodes[0]),this.schema.options&&void 0!==this.schema.options.disable_edit_json?this.schema.options.disable_edit_json&&(this.editjson_control.style.display='none'):this.jsoneditor.options.disable_edit_json&&(this.editjson_control.style.display='none'),this.addproperty_button=this.getButton('properties','edit_properties','button_object_properties'),this.addproperty_button.classList.add('json-editor-btntype-properties'),this.addproperty_button.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.toggleAddProperty();}),this.controls.appendChild(this.addproperty_button),this.controls.insertBefore(this.addproperty_holder,this.controls.childNodes[1]),this.refreshAddProperties(),this.deactivateNonRequiredProperties();}this.options.table_row?(this.editor_holder=this.container,this.property_order.forEach(function(e){t.editor_holder.appendChild(t.editors[e].container);})):(this.layoutEditors(),this.layoutEditors());}},{key:'deactivateNonRequiredProperties',value:function(){var t=this;(this.jsoneditor.options.show_opt_in||this.options.show_opt_in)&&Object.entries(this.editors).forEach(function(e){var n=Vr(e,2),r=n[0],i=n[1];t.isRequiredObject(i)||t.editors[r].deactivate();});}},{key:'showEditJSON',value:function(){this.editjson_holder&&(this.hideAddProperty(),this.editjson_holder.style.left=''.concat(this.editjson_control.offsetLeft,'px'),this.editjson_holder.style.top=''.concat(this.editjson_control.offsetTop+this.editjson_control.offsetHeight,'px'),this.editjson_textarea.value=JSON.stringify(this.getValue(),null,2),this.disable(),this.editjson_holder.style.display='',this.editjson_control.disabled=!1,this.editing_json=!0);}},{key:'hideEditJSON',value:function(){this.editjson_holder&&this.editing_json&&(this.editjson_holder.style.display='none',this.enable(),this.editing_json=!1);}},{key:'copyJSON',value:function(){if(this.editjson_holder){var t=document.createElement('textarea');t.value=this.editjson_textarea.value,t.setAttribute('readonly',''),t.style.position='absolute',t.style.left='-9999px',document.body.appendChild(t),t.select(),document.execCommand('copy'),document.body.removeChild(t);}}},{key:'saveJSON',value:function(){if(this.editjson_holder)try{var t=JSON.parse(this.editjson_textarea.value);this.setValue(t),this.hideEditJSON(),this.onChange(!0);}catch(t){throw window.alert('invalid JSON'),t;}}},{key:'toggleEditJSON',value:function(){this.editing_json?this.hideEditJSON():this.showEditJSON();}},{key:'insertPropertyControlUsingPropertyOrder',value:function(t,e,n){var r;this.schema.properties[t]&&(r=this.schema.properties[t].propertyOrder),'number'!=typeof r&&(r=1e3),e.propertyOrder=r;for(var i=0;i<n.childNodes.length;i++){var o=n.childNodes[i];if(e.propertyOrder<o.propertyOrder){this.addproperty_list.insertBefore(e,o),e=null;break;}}e&&this.addproperty_list.appendChild(e);}},{key:'addPropertyCheckbox',value:function(t){var e,n=this,r=this.theme.getCheckbox();r.style.width='auto',e=this.schema.properties[t]&&this.schema.properties[t].title?this.schema.properties[t].title:t;var i=this.theme.getCheckboxLabel(e),o=this.theme.getFormControl(i,r);return o.style.paddingBottom=o.style.marginBottom=o.style.paddingTop=o.style.marginTop=0,o.style.height='auto',this.insertPropertyControlUsingPropertyOrder(t,o,this.addproperty_list),r.checked=t in this.editors,r.addEventListener('change',function(){r.checked?n.addObjectProperty(t):n.removeObjectProperty(t),n.onChange(!0);}),this.addproperty_checkboxes[t]=r,r;}},{key:'showAddProperty',value:function(){this.addproperty_holder&&(this.hideEditJSON(),this.addproperty_holder.style.left=''.concat(this.addproperty_button.offsetLeft,'px'),this.addproperty_holder.style.top=''.concat(this.addproperty_button.offsetTop+this.addproperty_button.offsetHeight,'px'),this.disable(),this.adding_property=!0,this.addproperty_button.disabled=!1,this.addproperty_holder.style.display='',this.refreshAddProperties());}},{key:'hideAddProperty',value:function(){this.addproperty_holder&&this.adding_property&&(this.addproperty_holder.style.display='none',this.enable(),this.adding_property=!1);}},{key:'toggleAddProperty',value:function(){this.adding_property?this.hideAddProperty():this.showAddProperty();}},{key:'removeObjectProperty',value:function(t){this.editors[t]&&(this.editors[t].unregister(),delete this.editors[t],this.refreshValue(),this.layoutEditors());}},{key:'getSchemaOnMaxDepth',value:function(t){return Object.keys(t).reduce(function(e,n){switch(n){case'$ref':return e;case'properties':case'items':return Br(Br({},e),{},Fr({},n,{}));case'additionalProperties':case'propertyNames':return Br(Br({},e),{},Fr({},n,!0));default:return Br(Br({},e),{},Fr({},n,t[n]));}},{});}},{key:'addObjectProperty',value:function(t,e){if(!this.editors[t]){if(this.cached_editors[t]){if(this.editors[t]=this.cached_editors[t],e)return;this.editors[t].register();}else{if(!(this.canHaveAdditionalProperties()||this.schema.properties&&this.schema.properties[t]))return;var n=this.getPropertySchema(t);'number'!=typeof n.propertyOrder&&(n.propertyOrder=Object.keys(this.editors).length+1e3);var r=this.jsoneditor.getEditorClass(n),i=this.jsoneditor.options.max_depth;if(this.editors[t]=this.jsoneditor.createEditor(r,{jsoneditor:this.jsoneditor,schema:i&&this.currentDepth>=i?this.getSchemaOnMaxDepth(n):n,path:''.concat(this.path,'.').concat(t),parent:this},this.currentDepth+1),this.editors[t].preBuild(),!e){var o=this.theme.getChildEditorHolder();this.editor_holder.appendChild(o),this.editors[t].setContainer(o),this.editors[t].build(),this.editors[t].postBuild(),this.editors[t].setOptInCheckbox(r.header),this.editors[t].activate();}this.cached_editors[t]=this.editors[t];}e||(this.refreshValue(),this.layoutEditors());}}},{key:'onOutsideModalClick',value:function(t){this.addproperty_holder&&!this.addproperty_holder.contains(t.path[0]||t.composedPath()[0])&&this.adding_property&&(t.preventDefault(),t.stopPropagation(),this.toggleAddProperty());}},{key:'onChildEditorChange',value:function(t){this.refreshValue(),qr(Jr(o.prototype),'onChildEditorChange',this).call(this,t);}},{key:'canHaveAdditionalProperties',value:function(){return'boolean'==typeof this.schema.additionalProperties?this.schema.additionalProperties:!this.jsoneditor.options.no_additional_properties;}},{key:'destroy',value:function(){Object.values(this.cached_editors).forEach(function(t){return t.destroy();}),this.editor_holder&&(this.editor_holder.innerHTML=''),this.title&&this.title.parentNode&&this.title.parentNode.removeChild(this.title),this.error_holder&&this.error_holder.parentNode&&this.error_holder.parentNode.removeChild(this.error_holder),this.editors=null,this.cached_editors=null,this.editor_holder&&this.editor_holder.parentNode&&this.editor_holder.parentNode.removeChild(this.editor_holder),this.editor_holder=null,document.removeEventListener('click',this.onOutsideModalClick),qr(Jr(o.prototype),'destroy',this).call(this);}},{key:'getValue',value:function(){if(this.dependenciesFulfilled){var t=qr(Jr(o.prototype),'getValue',this).call(this);return t&&(this.jsoneditor.options.remove_empty_properties||this.options.remove_empty_properties)&&Object.keys(t).forEach(function(e){var n;(void 0===(n=t[e])||''===n||n===Object(n)&&0===Object.keys(n).length&&n.constructor===Object)&&delete t[e];}),t;}}},{key:'refreshValue',value:function(){var t=this;this.value={},this.editors&&(Object.keys(this.editors).forEach(function(e){t.editors[e].isActive()&&(t.value[e]=t.editors[e].getValue());}),this.adding_property&&this.refreshAddProperties());}},{key:'refreshAddProperties',value:function(){var t=this;if(this.options.disable_properties||!1!==this.options.disable_properties&&this.jsoneditor.options.disable_properties)this.addproperty_button.style.display='none';else{var e,n=0,r=!1;Object.keys(this.editors).forEach(function(t){return n++;}),e=this.canHaveAdditionalProperties()&&!(void 0!==this.schema.maxProperties&&n>=this.schema.maxProperties),this.addproperty_checkboxes&&(this.addproperty_list.innerHTML=''),this.addproperty_checkboxes={},Object.keys(this.cached_editors).forEach(function(i){t.addPropertyCheckbox(i),t.isRequiredObject(t.cached_editors[i])&&i in t.editors&&(t.addproperty_checkboxes[i].disabled=!0),void 0!==t.schema.minProperties&&n<=t.schema.minProperties?(t.addproperty_checkboxes[i].disabled=t.addproperty_checkboxes[i].checked,t.addproperty_checkboxes[i].checked||(r=!0)):i in t.editors?r=!0:e||b(t.schema.properties,i)?(t.addproperty_checkboxes[i].disabled=!1,r=!0):t.addproperty_checkboxes[i].disabled=!0;}),this.canHaveAdditionalProperties()&&(r=!0),Object.keys(this.schema.properties).forEach(function(e){t.cached_editors[e]||(r=!0,t.addPropertyCheckbox(e));}),r?this.canHaveAdditionalProperties()?this.addproperty_add.disabled=!e:(this.addproperty_add.style.display='none',this.addproperty_input.style.display='none'):(this.hideAddProperty(),this.addproperty_button.style.display='none');}}},{key:'isRequiredObject',value:function(t){if(t)return'boolean'==typeof t.schema.required?t.schema.required:Array.isArray(this.schema.required)?this.schema.required.includes(t.key):!!this.jsoneditor.options.required_by_default;}},{key:'setValue',value:function(t,e){var n=this;('object'!==zr(t=t||{})||Array.isArray(t))&&(t={}),Object.entries(this.cached_editors).forEach(function(r){var i=Vr(r,2),o=i[0],a=i[1];void 0!==t[o]?(n.addObjectProperty(o),a.setValue(t[o],e),a.activate()):e||n.isRequiredObject(a)?a.setValue(a.getDefault(),e):n.jsoneditor.options.show_opt_in||n.options.show_opt_in?a.deactivate():n.removeObjectProperty(o);}),Object.entries(t).forEach(function(t){var r=Vr(t,2),i=r[0],o=r[1];n.cached_editors[i]||(n.addObjectProperty(i),n.editors[i]&&n.editors[i].setValue(o,e,!!n.editors[i].template));}),this.refreshValue(),this.layoutEditors(),this.onChange();}},{key:'showValidationErrors',value:function(t){var e=this,n=[],r=[];t.forEach(function(t){t.path===e.path?n.push(t):r.push(t);}),this.error_holder&&(n.length?(this.error_holder.innerHTML='',this.error_holder.style.display='',n.forEach(function(t){t.errorcount&&t.errorcount>1&&(t.message+=' ('.concat(t.errorcount,' errors)')),e.error_holder.appendChild(e.theme.getErrorMessage(t.message));})):this.error_holder.style.display='none'),this.options.table_row&&(n.length?this.theme.addTableRowError(this.container):this.theme.removeTableRowError(this.container)),Object.values(this.editors).forEach(function(t){t.showValidationErrors(r);});}}])&&Mr(e.prototype,n),r&&Mr(e,r),o;}(N);function Zr(t){return(Zr='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Qr(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Yr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Xr(t,e,n){return(Xr='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ni(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Kr(t,e){return(Kr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function ti(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=ni(t);if(e){var i=ni(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return ei(this,n);};}function ei(t,e){return!e||'object'!==Zr(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function ni(t){return(ni=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}Wr.rules={'.je-object__title':'display:inline-block','.je-object__controls':'margin:0%200%200%2010px','.je-object__container':'position:relative','.je-object__property-checkbox':'margin:0;height:auto','.property-selector':'width:295px;max-height:160px;padding:5px%200;overflow-y:auto;overflow-x:hidden;padding-left:5px','.property-selector-input':'width:220px;margin-bottom:0;display:inline-block','.json-editor-btntype-toggle':'margin:0%2010px%200%200','.je-edit-json--textarea':'height:170px%20!important;width:300px%20!important;display:block'};var ri=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Kr(t,e);}(o,t);var e,n,r,i=ti(o);function o(){return Qr(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'preBuild',value:function(){this.schema.required=!0,Xr(ni(o.prototype),'preBuild',this).call(this);}},{key:'build',value:function(){var t=this;this.label='',this.options.compact||(this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description))),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.options.compact&&this.container.classList.add('compact'),this.radioContainer=document.createElement('div'),this.radioGroup=[];for(var e=function(e){t.setValue(e.currentTarget.value),t.onChange(!0);},n=0;n<this.enum_values.length;n++){this.input=this.theme.getFormRadio({name:this.formname,id:''.concat(this.formname,'[').concat(n,']'),value:this.enum_values[n]}),this.setInputAttributes(['id','value','name']),this.input.addEventListener('change',e,!1),this.radioGroup.push(this.input);var r=this.theme.getFormRadioLabel(this.enum_display[n]);r.htmlFor=this.input.id;var i=this.theme.getFormRadioControl(r,this.input,!('horizontal'!==this.options.layout&&!this.options.compact));this.radioContainer.appendChild(i);}if(this.schema.readOnly||this.schema.readonly){this.disable(!0);for(var o=0;o<this.radioGroup.length;o++)this.radioGroup[o].disabled=!0;this.radioContainer.classList.add('readonly');}var a=this.theme.getContainer();a.appendChild(this.radioContainer),a.dataset.containerFor='radio',this.input=a,this.control=this.theme.getFormControl(this.label,a,this.description,this.infoButton),this.container.appendChild(this.control),window.requestAnimationFrame(function(){t.input.parentNode&&t.afterInputReady();});}},{key:'enable',value:function(){if(!this.always_disabled){for(var t=0;t<this.radioGroup.length;t++)this.radioGroup[t].disabled=!1;this.radioContainer.classList.remove('readonly'),Xr(ni(o.prototype),'enable',this).call(this);}}},{key:'disable',value:function(t){t&&(this.always_disabled=!0);for(var e=0;e<this.radioGroup.length;e++)this.radioGroup[e].disabled=!0;this.radioContainer.classList.add('readonly'),Xr(ni(o.prototype),'disable',this).call(this);}},{key:'destroy',value:function(){this.radioContainer.parentNode&&this.radioContainer.parentNode.parentNode&&this.radioContainer.parentNode.parentNode.removeChild(this.radioContainer.parentNode),this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),Xr(ni(o.prototype),'destroy',this).call(this);}},{key:'getNumColumns',value:function(){return 2;}},{key:'setValue',value:function(t){for(var e=0;e<this.radioGroup.length;e++)if(this.radioGroup[e].value===t){this.radioGroup[e].checked=!0,this.value=t,this.onChange();break;}}}])&&Yr(e.prototype,n),r&&Yr(e,r),o;}(De);function ii(t){return(ii='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function oi(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function ai(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function si(t,e,n){return(si='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=hi(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function li(t,e){return(li=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function ci(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=hi(t);if(e){var i=hi(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return ui(this,n);};}function ui(t,e){return!e||'object'!==ii(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function hi(t){return(hi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var pi=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&li(t,e);}(o,t);var e,n,r,i=ci(o);function o(){return oi(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e,n){var r=si(hi(o.prototype),'setValue',this).call(this,t,e,n);void 0!==r&&r.changed&&this.sceditor_instance&&this.sceditor_instance.val(r.value);}},{key:'build',value:function(){this.options.format='textarea',si(hi(o.prototype),'build',this).call(this),this.input_type=this.schema.format,this.input.setAttribute('data-schemaformat',this.input_type);}},{key:'afterInputReady',value:function(){var t=this;if(window.sceditor){var e=this.expandCallbacks('sceditor',f({},{format:this.input_type,emoticonsEnabled:!1,width:'100%',height:300,readOnly:this.schema.readOnly||this.schema.readonly||this.schema.template},this.defaults.options.sceditor||{},this.options.sceditor||{},{element:this.input})),n=window.sceditor.instance(this.input);void 0===n&&window.sceditor.create(this.input,e),this.sceditor_instance=n||window.sceditor.instance(this.input),this.sceditor_instance.blur(function(){t.value=t.sceditor_instance.val(),t.sceditor_instance.updateOriginal(),t.is_dirty=!0,t.onChange(!0);}),this.theme.afterInputReady(this.input);}else si(hi(o.prototype),'afterInputReady',this).call(this);}},{key:'getNumColumns',value:function(){return 6;}},{key:'enable',value:function(){!this.always_disabled&&this.sceditor_instance&&this.sceditor_instance.readOnly(!1),si(hi(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.sceditor_instance&&this.sceditor_instance.readOnly(!0),si(hi(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.sceditor_instance&&(this.sceditor_instance.destroy(),this.sceditor_instance=null),si(hi(o.prototype),'destroy',this).call(this);}}])&&ai(e.prototype,n),r&&ai(e,r),o;}(G);function di(t){return(di='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function fi(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function yi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function mi(t,e,n){return(mi='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_i(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function bi(t,e){return(bi=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function vi(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=_i(t);if(e){var i=_i(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return gi(this,n);};}function gi(t,e){return!e||'object'!==di(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function _i(t){return(_i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var wi=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bi(t,e);}(o,t);var e,n,r,i=vi(o);function o(){return fi(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){if(this.select2_instance){e?this.is_dirty=!1:'change'===this.jsoneditor.options.show_errors&&(this.is_dirty=!0);var n=this.updateValue(t);this.input.value=n,this.select2v4?this.select2_instance.val(n).trigger('change'):this.select2_instance.select2('val',n),this.onChange(!0);}else mi(_i(o.prototype),'setValue',this).call(this,t,e);}},{key:'afterInputReady',value:function(){var t=this;if(window.jQuery&&window.jQuery.fn&&window.jQuery.fn.select2&&!this.select2_instance){var e=this.expandCallbacks('select2',f({},this.defaults.options.select2||{},this.options.select2||{}));this.newEnumAllowed=e.tags=!!e.tags&&'string'===this.schema.type,this.select2_instance=window.jQuery(this.input).select2(e),this.select2v4=b(this.select2_instance.select2,'amd'),this.selectChangeHandler=function(){var e=t.select2v4?t.select2_instance.val():t.select2_instance.select2('val');t.updateValue(e),t.onChange(!0);},this.select2_instance.on('change',this.selectChangeHandler),this.select2_instance.on('select2-blur',this.selectChangeHandler);}mi(_i(o.prototype),'afterInputReady',this).call(this);}},{key:'updateValue',value:function(t){var e=this.enum_values[0];return t=this.typecast(t||''),this.enum_values.includes(t)?e=t:this.newEnumAllowed&&(e=this.addNewOption(t)?t:e),this.value=e,e;}},{key:'addNewOption',value:function(t){var e,n=this.typecast(t),r=!1;return this.enum_values.includes(n)||''===n||(this.enum_options.push(''.concat(n)),this.enum_display.push(''.concat(n)),this.enum_values.push(n),this.schema.enum.push(n),(e=this.input.querySelector('option[value="'.concat(n,'"]')))?e.removeAttribute('data-select2-tag'):this.input.appendChild(new Option(n,n,!1,!1)).trigger('change'),r=!0),r;}},{key:'enable',value:function(){this.always_disabled||this.select2_instance&&(this.select2v4?this.select2_instance.prop('disabled',!1):this.select2_instance.select2('enable',!0)),mi(_i(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.select2_instance&&(this.select2v4?this.select2_instance.prop('disabled',!0):this.select2_instance.select2('enable',!1)),mi(_i(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.select2_instance&&(this.select2_instance.select2('destroy'),this.select2_instance=null),mi(_i(o.prototype),'destroy',this).call(this);}}])&&yi(e.prototype,n),r&&yi(e,r),o;}(De);function ki(t){return(ki='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function xi(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function ji(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Oi(t,e,n){return(Oi='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Pi(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Ci(t,e){return(Ci=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Ei(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Pi(t);if(e){var i=Pi(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Si(this,n);};}function Si(t,e){return!e||'object'!==ki(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Pi(t){return(Pi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Ri=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ci(t,e);}(o,t);var e,n,r,i=Ei(o);function o(){return xi(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e){if(this.selectize_instance){e?this.is_dirty=!1:'change'===this.jsoneditor.options.show_errors&&(this.is_dirty=!0);var n=this.updateValue(t);this.input.value=n,this.selectize_instance.clear(!0),this.selectize_instance.setValue(n),this.onChange(!0);}else Oi(Pi(o.prototype),'setValue',this).call(this,t,e);}},{key:'afterInputReady',value:function(){var t=this;if(window.jQuery&&window.jQuery.fn&&window.jQuery.fn.selectize&&!this.selectize_instance){var e=this.expandCallbacks('selectize',f({},this.defaults.options.selectize||{},this.options.selectize||{}));this.newEnumAllowed=e.create=!!e.create&&'string'===this.schema.type,this.selectize_instance=window.jQuery(this.input).selectize(e)[0].selectize,this.control.removeEventListener('change',this.multiselectChangeHandler),this.multiselectChangeHandler=function(e){t.updateValue(e),t.onChange(!0);},this.selectize_instance.on('change',this.multiselectChangeHandler);}Oi(Pi(o.prototype),'afterInputReady',this).call(this);}},{key:'updateValue',value:function(t){var e=this.enum_values[0];return t=this.typecast(t||''),this.enum_values.includes(t)?e=t:this.newEnumAllowed&&(e=this.addNewOption(t)?t:e),this.value=e,e;}},{key:'addNewOption',value:function(t){var e=this.typecast(t),n=!1;return this.enum_values.includes(e)||''===e||(this.enum_options.push(''.concat(e)),this.enum_display.push(''.concat(e)),this.enum_values.push(e),this.schema.enum.push(e),this.selectize_instance.addItem(e),this.selectize_instance.refreshOptions(!1),n=!0),n;}},{key:'onWatchedFieldChange',value:function(){var t=this;Oi(Pi(o.prototype),'onWatchedFieldChange',this).call(this),this.selectize_instance&&(this.selectize_instance.clear(!0),this.selectize_instance.clearOptions(!0),this.enum_options.forEach(function(e,n){t.selectize_instance.addOption({value:e,text:t.enum_display[n]});}),this.selectize_instance.addItem(''.concat(this.value),!0));}},{key:'enable',value:function(){!this.always_disabled&&this.selectize_instance&&this.selectize_instance.unlock(),Oi(Pi(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.selectize_instance&&this.selectize_instance.lock(),Oi(Pi(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.selectize_instance&&(this.selectize_instance.destroy(),this.selectize_instance=null),Oi(Pi(o.prototype),'destroy',this).call(this);}}])&&ji(e.prototype,n),r&&ji(e,r),o;}(De);function Li(t){return(Li='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Ti(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Ai(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Ii(t,e){return(Ii=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Di(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Bi(t);if(e){var i=Bi(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ni(this,n);};}function Ni(t,e){return!e||'object'!==Li(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Bi(t){return(Bi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Fi=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ii(t,e);}(o,t);var e,n,r,i=Di(o);function o(){return Ti(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'build',value:function(){var t=this;this.options.compact||(this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description)));var e=this.formname.replace(/\W/g,'');if('function'==typeof SignaturePad){this.input=this.theme.getFormInputField('hidden'),this.container.appendChild(this.input);var n=document.createElement('div');n.classList.add('signature-container');var r=document.createElement('canvas');r.setAttribute('name',e),r.classList.add('signature'),n.appendChild(r),this.signaturePad=new window.SignaturePad(r,{onEnd:function(){this.signaturePad.isEmpty()?this.input.value='':this.input.value=this.signaturePad.toDataURL(),this.is_dirty=!0,this.refreshValue(),this.watch_listener(),this.jsoneditor.notifyWatchers(this.path),this.parent?this.parent.onChildEditorChange(this):this.jsoneditor.onChange();}});var i=document.createElement('div'),o=document.createElement('button');o.classList.add('tiny','button'),o.innerHTML='Clear signature',i.appendChild(o),n.appendChild(i),this.options.compact&&this.container.setAttribute('class',''.concat(this.container.getAttribute('class'),' compact')),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),Array.from(this.inputs).forEach(function(t){r.setAttribute('readOnly','readOnly'),t.disabled=!0;})),o.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.signaturePad.clear(),t.signaturePad.strokeEnd();}),this.control=this.theme.getFormControl(this.label,n,this.description),this.container.appendChild(this.control),this.refreshValue(),r.width=n.offsetWidth,this.options&&this.options.canvas_height?r.height=this.options.canvas_height:r.height='300';}else{var a=document.createElement('p');a.innerHTML='Signature pad is not available, please include SignaturePad from https://github.com/szimek/signature_pad',this.container.appendChild(a);}}},{key:'setValue',value:function(t){if('function'==typeof SignaturePad){var e=this.sanitize(t);if(this.value===e)return;return this.value=e,this.input.value=this.value,this.signaturePad.clear(),t&&''!==t&&this.signaturePad.fromDataURL(t),this.watch_listener(),this.jsoneditor.notifyWatchers(this.path),!1;}}},{key:'destroy',value:function(){this.signaturePad.off(),delete this.signaturePad;}}])&&Ai(e.prototype,n),r&&Ai(e,r),o;}(G);n(160);function Vi(t){return(Vi='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Hi(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function zi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Mi(t,e,n){return(Mi='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$i(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function qi(t,e){return(qi=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Ui(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=$i(t);if(e){var i=$i(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Gi(this,n);};}function Gi(t,e){return!e||'object'!==Vi(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function $i(t){return($i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Ji=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qi(t,e);}(o,t);var e,n,r,i=Ui(o);function o(){return Hi(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'setValue',value:function(t,e,n){var r=Mi($i(o.prototype),'setValue',this).call(this,t,e,n);void 0!==r&&r.changed&&this.simplemde_instance&&this.simplemde_instance.value(r.value);}},{key:'build',value:function(){this.options.format='textarea',Mi($i(o.prototype),'build',this).call(this),this.input_type=this.schema.format,this.input.setAttribute('data-schemaformat',this.input_type);}},{key:'afterInputReady',value:function(){var t,e=this;window.SimpleMDE?(t=this.expandCallbacks('simplemde',f({},{height:300},this.defaults.options.simplemde||{},this.options.simplemde||{},{element:this.input})),this.simplemde_instance=new window.SimpleMDE(t),(this.schema.readOnly||this.schema.readonly||this.schema.template)&&(this.simplemde_instance.codemirror.options.readOnly=!0),this.simplemde_instance.codemirror.on('change',function(){e.value=e.simplemde_instance.value(),e.is_dirty=!0,e.onChange(!0);}),t.autorefresh&&this.startListening(this.simplemde_instance.codemirror,this.simplemde_instance.codemirror.state.autoRefresh={delay:250}),this.theme.afterInputReady(this.input)):Mi($i(o.prototype),'afterInputReady',this).call(this);}},{key:'getNumColumns',value:function(){return 6;}},{key:'enable',value:function(){!this.always_disabled&&this.simplemde_instance&&(this.simplemde_instance.codemirror.options.readOnly=!1),Mi($i(o.prototype),'enable',this).call(this);}},{key:'disable',value:function(t){this.simplemde_instance&&(this.simplemde_instance.codemirror.options.readOnly=!0),Mi($i(o.prototype),'disable',this).call(this,t);}},{key:'destroy',value:function(){this.simplemde_instance&&(this.simplemde_instance.toTextArea(),this.simplemde_instance=null),Mi($i(o.prototype),'destroy',this).call(this);}},{key:'startListening',value:function(t,e){function n(){t.display.wrapper.offsetHeight?(this.stopListening(t,e),t.display.lastWrapHeight!==t.display.wrapper.clientHeight&&t.refresh()):e.timeout=window.setTimeout(n,e.delay);}e.timeout=window.setTimeout(n,e.delay),e.hurry=function(){window.clearTimeout(e.timeout),e.timeout=window.setTimeout(n,50);},t.on(window,'mouseup',e.hurry),t.on(window,'keyup',e.hurry);}},{key:'stopListening',value:function(t,e){window.clearTimeout(e.timeout),t.off(window,'mouseup',e.hurry),t.off(window,'keyup',e.hurry);}}])&&zi(e.prototype,n),r&&zi(e,r),o;}(G);function Wi(t){return(Wi='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Zi(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Qi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Yi(t,e,n){return(Yi='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=eo(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Xi(t,e){return(Xi=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Ki(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=eo(t);if(e){var i=eo(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return to(this,n);};}function to(t,e){return!e||'object'!==Wi(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function eo(t){return(eo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var no=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Xi(t,e);}(o,t);var e,n,r,i=Ki(o);function o(){return Zi(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'build',value:function(){var t=this;if(this.options.compact||(this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description))),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.options.compact&&this.container.classList.add('compact'),this.ratingContainer=document.createElement('div'),this.ratingContainer.classList.add('starrating'),void 0===this.schema.enum){var e=this.schema.maximum?this.schema.maximum:5;this.schema.exclusiveMaximum&&e--,this.enum_values=[];for(var n=0;n<e;n++)this.enum_values.push(n+1);}else this.enum_values=this.schema.enum;this.radioGroup=[];for(var r=function(e){e.preventDefault(),e.stopPropagation(),t.setValue(e.currentTarget.value),t.onChange(!0);},i=this.enum_values.length-1;i>-1;i--){var o=this.formname+(i+1),a=this.theme.getFormInputField('radio');a.name=''.concat(this.formname,'[starrating]'),a.value=this.enum_values[i],a.id=o,a.addEventListener('change',r,!1),this.radioGroup.push(a);var s=document.createElement('label');s.htmlFor=o,s.title=this.enum_values[i],this.options.displayValue&&s.classList.add('starrating-display-enabled'),this.ratingContainer.appendChild(a),this.ratingContainer.appendChild(s);}if(this.options.displayValue&&(this.displayRating=document.createElement('div'),this.displayRating.classList.add('starrating-display'),this.displayRating.innerText=this.enum_values[0],this.ratingContainer.appendChild(this.displayRating)),this.schema.readOnly||this.schema.readonly){this.disable(!0);for(var l=0;l<this.radioGroup.length;l++)this.radioGroup[l].disabled=!0;this.ratingContainer.classList.add('readonly');}var c=this.theme.getContainer();c.appendChild(this.ratingContainer),this.input=c,this.control=this.theme.getFormControl(this.label,c,this.description,this.infoButton),this.container.appendChild(this.control),this.refreshValue();}},{key:'enable',value:function(){if(!this.always_disabled){for(var t=0;t<this.radioGroup.length;t++)this.radioGroup[t].disabled=!1;this.ratingContainer.classList.remove('readonly'),this.disabled=!1;}}},{key:'disable',value:function(t){t&&(this.always_disabled=!0);for(var e=0;e<this.radioGroup.length;e++)this.radioGroup[e].disabled=!0;this.ratingContainer.classList.add('readonly'),this.disabled=!0;}},{key:'destroy',value:function(){this.ratingContainer.parentNode&&this.ratingContainer.parentNode.parentNode&&this.ratingContainer.parentNode.parentNode.removeChild(this.ratingContainer.parentNode),this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),Yi(eo(o.prototype),'destroy',this).call(this);}},{key:'getNumColumns',value:function(){return 2;}},{key:'getValue',value:function(){if(this.dependenciesFulfilled)return'integer'===this.schema.type?''===this.value?void 0:1*this.value:this.value;}},{key:'setValue',value:function(t){for(var e=0;e<this.radioGroup.length;e++)if(this.radioGroup[e].value===''.concat(t)){this.radioGroup[e].checked=!0,this.value=t,this.options.displayValue&&(this.displayRating.innerHTML=this.value),this.onChange(!0);break;}}}])&&Qi(e.prototype,n),r&&Qi(e,r),o;}(G);function ro(t){return(ro='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function io(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function oo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function ao(t,e,n){return(ao='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=uo(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function so(t,e){return(so=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function lo(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=uo(t);if(e){var i=uo(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return co(this,n);};}function co(t,e){return!e||'object'!==ro(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function uo(t){return(uo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}no.rules={'.starrating':'direction:rtl;display:inline-block;white-space:nowrap','.starrating > input':'display:none','.starrating > label:before':"content:'%5C2606';margin:1px;font-size:18px;font-style:normal;font-weight:400;line-height:1;font-family:'Arial';display:inline-block",'.starrating > label':'color:%23888;cursor:pointer;margin:8px%200%202px%200','.starrating > label.starrating-display-enabled':'margin:1px%200%200%200','.starrating > input:checked ~ label':'color:%23ffca08','.starrating:not(.readonly) > input:hover ~ label':'color:%23ffca08','.starrating > input:checked ~ label:before':"content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)",'.starrating:not(.readonly) > input:hover ~ label:before':"content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)",'.starrating .starrating-display':'position:relative;direction:rtl;text-align:center;font-size:10px;line-height:0px'};var ho=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&so(t,e);}(o,t);var e,n,r,i=lo(o);function o(){return io(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'build',value:function(){ao(uo(o.prototype),'build',this).call(this),this.input.setAttribute('type','number'),this.input.getAttribute('step')||this.input.setAttribute('step','1');var t=this.theme.getStepperButtons(this.input);this.control.appendChild(t),this.stepperDown=this.control.querySelector('.stepper-down'),this.stepperUp=this.control.querySelector('.stepper-up');}},{key:'enable',value:function(){ao(uo(o.prototype),'enable',this).call(this),this.stepperDown.removeAttribute('disabled'),this.stepperUp.removeAttribute('disabled');}},{key:'disable',value:function(){ao(uo(o.prototype),'disable',this).call(this),this.stepperDown.setAttribute('disabled',!0),this.stepperUp.setAttribute('disabled',!0);}}])&&oo(e.prototype,n),r&&oo(e,r),o;}(tr);function po(t){return(po='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function fo(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function yo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function mo(t,e,n){return(mo='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_o(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function bo(t,e){return(bo=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function vo(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=_o(t);if(e){var i=_o(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return go(this,n);};}function go(t,e){return!e||'object'!==po(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function _o(t){return(_o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var wo=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bo(t,e);}(o,t);var e,n,r,i=vo(o);function o(){return fo(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'register',value:function(){if(mo(_o(o.prototype),'register',this).call(this),this.rows)for(var t=0;t<this.rows.length;t++)this.rows[t].register();}},{key:'unregister',value:function(){if(mo(_o(o.prototype),'unregister',this).call(this),this.rows)for(var t=0;t<this.rows.length;t++)this.rows[t].unregister();}},{key:'getNumColumns',value:function(){return Math.max(Math.min(12,this.width),3);}},{key:'preBuild',value:function(){var t=this.jsoneditor.expandRefs(this.schema.items||{});this.item_title=t.title||'row',this.item_default=t.default||null,this.item_has_child_editors=t.properties||t.items,this.width=12,this.array_controls_top=this.options.array_controls_top||this.jsoneditor.options.array_controls_top,mo(_o(o.prototype),'preBuild',this).call(this);}},{key:'build',value:function(){this.table=this.theme.getTable(),this.container.appendChild(this.table),this.thead=this.theme.getTableHead(),this.table.appendChild(this.thead),this.header_row=this.theme.getTableRow(),this.thead.appendChild(this.header_row),this.row_holder=this.theme.getTableBody(),this.table.appendChild(this.row_holder);var t=this.getElementEditor(0,!0);if(this.item_default=t.getDefault(),this.width=t.getNumColumns()+2,this.options.compact?(this.panel=document.createElement('div'),this.container.appendChild(this.panel)):(this.header=document.createElement('label'),this.header.textContent=this.getTitle(),this.title=this.theme.getHeader(this.header,this.getPathDepth()),this.container.appendChild(this.title),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText)),this.container.appendChild(this.infoButton)),this.title_controls=this.theme.getHeaderButtonHolder(),this.title.appendChild(this.title_controls),this.schema.description&&(this.description=this.theme.getDescription(this.translateProperty(this.schema.description)),this.container.appendChild(this.description)),this.panel=this.theme.getIndentedPanel(),this.container.appendChild(this.panel),this.error_holder=document.createElement('div'),this.panel.appendChild(this.error_holder)),this.panel.appendChild(this.table),this.controls=this.theme.getButtonHolder(),this.array_controls_top?this.title.appendChild(this.controls):this.panel.appendChild(this.controls),this.item_has_child_editors)for(var e=t.getChildEditors(),n=t.property_order||Object.keys(e),r=0;r<n.length;r++){var i=this.theme.getTableHeaderCell(e[n[r]].getTitle());e[n[r]].options.hidden&&(i.style.display='none'),this.header_row.appendChild(i);}else this.header_row.appendChild(this.theme.getTableHeaderCell(this.item_title));t.destroy(),this.row_holder.innerHTML='',this.controls_header_cell=this.theme.getTableHeaderCell(' '),this.header_row.appendChild(this.controls_header_cell),this.addControls();}},{key:'onChildEditorChange',value:function(t){this.refreshValue(),mo(_o(o.prototype),'onChildEditorChange',this).call(this);}},{key:'getItemDefault',value:function(){return f({},{default:this.item_default}).default;}},{key:'getItemTitle',value:function(){return this.item_title;}},{key:'getElementEditor',value:function(t,e){var n=f({},this.schema.items),r=this.jsoneditor.getEditorClass(n,this.jsoneditor),i=this.row_holder.appendChild(this.theme.getTableRow()),o=i;this.item_has_child_editors||(o=this.theme.getTableCell(),i.appendChild(o));var a=this.jsoneditor.createEditor(r,{jsoneditor:this.jsoneditor,schema:n,container:o,path:''.concat(this.path,'.').concat(t),parent:this,compact:!0,table_row:!0});return a.preBuild(),e||(a.build(),a.postBuild(),a.controls_cell=i.appendChild(this.theme.getTableCell()),a.row=i,a.table_controls=this.theme.getButtonHolder(),a.controls_cell.appendChild(a.table_controls),a.table_controls.style.margin=0,a.table_controls.style.padding=0),a;}},{key:'destroy',value:function(){this.innerHTML='',this.checkParent(this.title)&&this.title.parentNode.removeChild(this.title),this.checkParent(this.description)&&this.description.parentNode.removeChild(this.description),this.checkParent(this.row_holder)&&this.row_holder.parentNode.removeChild(this.row_holder),this.checkParent(this.table)&&this.table.parentNode.removeChild(this.table),this.checkParent(this.panel)&&this.panel.parentNode.removeChild(this.panel),this.rows=this.title=this.description=this.row_holder=this.table=this.panel=null,mo(_o(o.prototype),'destroy',this).call(this);}},{key:'ensureArraySize',value:function(t){if(Array.isArray(t)||(t=[t]),this.schema.minItems)for(;t.length<this.schema.minItems;)t.push(this.getItemDefault());return this.schema.maxItems&&t.length>this.schema.maxItems&&(t=t.slice(0,this.schema.maxItems)),t;}},{key:'setValue',value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;e=this.ensureArraySize(e);var r=JSON.stringify(e);if(r!==this.serialized){var i=!1;e.forEach(function(e,n){t.rows[n]?t.rows[n].setValue(e):(t.addRow(e),i=!0);});for(var o=e.length;o<this.rows.length;o++){var a=this.rows[o].container;this.item_has_child_editors||this.rows[o].row.parentNode.removeChild(this.rows[o].row),this.rows[o].destroy(),a.parentNode&&a.parentNode.removeChild(a),this.rows[o]=null,i=!0;}this.rows=this.rows.slice(0,e.length),this.refreshValue(),(i||n)&&this.refreshRowButtons(),this.onChange();}}},{key:'refreshRowButtons',value:function(){var t=this,e=this.schema.minItems&&this.schema.minItems>=this.rows.length,n=this.schema.maxItems&&this.schema.maxItems<=this.rows.length,r=[];this.rows.forEach(function(i,o){if(i.delete_button){var a=!e;t.setVisibility(i.delete_button,a),r.push(a);}if(i.copy_button){var s=!n;t.setVisibility(i.copy_button,s),r.push(s);}if(i.moveup_button){var l=0!==o;t.setVisibility(i.moveup_button,l),r.push(l);}if(i.movedown_button){var c=o!==t.rows.length-1;t.setVisibility(i.movedown_button,c),r.push(c);}});var i=r.some(function(t){return t;});this.rows.forEach(function(e){return t.setVisibility(e.controls_cell,i);}),this.setVisibility(this.controls_header_cell,i),this.setVisibility(this.table,this.value.length);var o=!(n||this.hide_add_button);this.setVisibility(this.add_row_button,o);var a=!(!this.value.length||e||this.hide_delete_last_row_buttons);this.setVisibility(this.delete_last_row_button,a);var s=!(this.value.length<=1||e||this.hide_delete_all_rows_buttons);this.setVisibility(this.remove_all_rows_button,s);var l=o||a||s;this.setVisibility(this.controls,l);}},{key:'refreshValue',value:function(){var t=this;this.value=[],this.rows.forEach(function(e,n){t.value[n]=e.getValue();}),this.serialized=JSON.stringify(this.value);}},{key:'addRow',value:function(t){var e=this.rows.length;this.rows[e]=this.getElementEditor(e);var n=this.rows[e].table_controls;this.hide_delete_buttons||(this.rows[e].delete_button=this._createDeleteButton(e,n)),this.show_copy_button&&(this.rows[e].copy_button=this._createCopyButton(e,n)),this.hide_move_buttons||(this.rows[e].moveup_button=this._createMoveUpButton(e,n)),this.hide_move_buttons||(this.rows[e].movedown_button=this._createMoveDownButton(e,n)),void 0!==t&&this.rows[e].setValue(t);}},{key:'_createDeleteButton',value:function(t,e){var n=this,r=this.getButton('','delete','button_delete_row_title_short');return r.classList.add('delete','json-editor-btntype-delete'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){if(t.preventDefault(),t.stopPropagation(),!n.askConfirmation())return!1;var e=1*t.currentTarget.getAttribute('data-i'),r=n.getValue();r.splice(e,1),n.setValue(r),n.onChange(!0),n.jsoneditor.trigger('deleteRow',n.rows[e]);}),e.appendChild(r),r;}},{key:'_createCopyButton',value:function(t,e){var n=this,r=this.getButton('','copy','button_copy_row_title_short');return r.classList.add('copy','json-editor-btntype-copy'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){t.preventDefault(),t.stopPropagation();var e=1*t.currentTarget.getAttribute('data-i'),r=n.getValue();r.splice(e+1,0,r[e]),n.setValue(r),n.onChange(!0),n.jsoneditor.trigger('copyRow',n.rows[e+1]);}),e.appendChild(r),r;}},{key:'_createMoveUpButton',value:function(t,e){var n=this,r=this.getButton('','moveup','button_move_up_title');return r.classList.add('moveup','json-editor-btntype-move'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){t.preventDefault(),t.stopPropagation();var e=1*t.currentTarget.getAttribute('data-i'),r=n.getValue();r.splice(e-1,0,r.splice(e,1)[0]),n.setValue(r),n.onChange(!0),n.jsoneditor.trigger('moveRow',n.rows[e-1]);}),e.appendChild(r),r;}},{key:'_createMoveDownButton',value:function(t,e){var n=this,r=this.getButton('','movedown','button_move_down_title');return r.classList.add('movedown','json-editor-btntype-move'),r.setAttribute('data-i',t),r.addEventListener('click',function(t){t.preventDefault(),t.stopPropagation();var e=1*t.currentTarget.getAttribute('data-i'),r=n.getValue();r.splice(e+1,0,r.splice(e,1)[0]),n.setValue(r),n.onChange(!0),n.jsoneditor.trigger('moveRow',n.rows[e+1]);}),e.appendChild(r),r;}},{key:'addControls',value:function(){var t=this;this.collapsed=!1,this.toggle_button=this._createToggleButton(),this.title_controls&&(this.title.insertBefore(this.toggle_button,this.title.childNodes[0]),this.toggle_button.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation(),t.setVisibility(t.panel,t.collapsed),t.collapsed?(t.collapsed=!1,t.setButtonText(e.currentTarget,'','collapse','button_collapse')):(t.collapsed=!0,t.setButtonText(e.currentTarget,'','expand','button_expand'));}),this.options.collapsed&&y(this.toggle_button,'click'),this.schema.options&&void 0!==this.schema.options.disable_collapse?this.schema.options.disable_collapse&&(this.toggle_button.style.display='none'):this.jsoneditor.options.disable_collapse&&(this.toggle_button.style.display='none')),this.add_row_button=this._createAddRowButton(),this.delete_last_row_button=this._createDeleteLastRowButton(),this.remove_all_rows_button=this._createRemoveAllRowsButton();}},{key:'_createToggleButton',value:function(){var t=this.getButton('','collapse','button_collapse');return t.classList.add('json-editor-btntype-toggle'),t;}},{key:'_createAddRowButton',value:function(){var t=this,e=this.getButton(this.getItemTitle(),'add','button_add_row_title',[this.getItemTitle()]);return e.classList.add('json-editor-btntype-add'),e.addEventListener('click',function(e){e.preventDefault(),e.stopPropagation();var n=t.addRow();t.refreshValue(),t.refreshRowButtons(),t.onChange(!0),t.jsoneditor.trigger('addRow',n);}),this.controls.appendChild(e),e;}},{key:'_createDeleteLastRowButton',value:function(){var t=this,e=this.getButton('button_delete_last','subtract','button_delete_last_title',[this.getItemTitle()]);return e.classList.add('json-editor-btntype-deletelast'),e.addEventListener('click',function(e){if(e.preventDefault(),e.stopPropagation(),!t.askConfirmation())return!1;var n=t.getValue(),r=n.pop();t.setValue(n),t.onChange(!0),t.jsoneditor.trigger('deleteRow',r);}),this.controls.appendChild(e),e;}},{key:'_createRemoveAllRowsButton',value:function(){var t=this,e=this.getButton('button_delete_all','delete','button_delete_all_title');return e.classList.add('json-editor-btntype-deleteall'),e.addEventListener('click',function(e){if(e.preventDefault(),e.stopPropagation(),!t.askConfirmation())return!1;t.setValue([]),t.onChange(!0),t.jsoneditor.trigger('deleteAllRows');}),this.controls.appendChild(e),e;}}])&&yo(e.prototype,n),r&&yo(e,r),o;}(ct);n(135);function ko(t){return(ko='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function xo(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function jo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Oo(t,e,n){return(Oo='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Po(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Co(t,e){return(Co=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Eo(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Po(t);if(e){var i=Po(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return So(this,n);};}function So(t,e){return!e||'object'!==ko(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Po(t){return(Po=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}function Ro(t){return(Ro='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Lo(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function To(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Ao(t,e,n){return(Ao='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Bo(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Io(t,e){return(Io=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Do(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Bo(t);if(e){var i=Bo(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return No(this,n);};}function No(t,e){return!e||'object'!==Ro(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Bo(t){return(Bo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}function Fo(t){return(Fo='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Vo(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Ho(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function zo(t,e,n){return(zo='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Go(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Mo(t,e){return(Mo=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function qo(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Go(t);if(e){var i=Go(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Uo(this,n);};}function Uo(t,e){return!e||'object'!==Fo(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Go(t){return(Go=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var $o={ace:tt,array:ct,arrayChoices:Et,arraySelect2:Nt,arraySelectize:Gt,autocomplete:te,base64:ce,button:be,checkbox:Ce,choices:Ue,datetime:Ke,describedBy:cn,enum:_n,hidden:Pn,info:Bn,integer:tr,ip:cr,jodit:vr,multiple:Er,multiselect:vt,null:Dr,number:$n,object:Wr,radio:ri,sceditor:pi,select:De,select2:wi,selectize:Ri,signature:Fi,simplemde:Ji,starrating:no,stepper:ho,string:G,table:wo,upload:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Co(t,e);}(o,t);var e,n,r,i=Eo(o);function o(){return xo(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getNumColumns',value:function(){return 4;}},{key:'build',value:function(){var t=this;if(this.options.compact||(this.header=this.label=this.theme.getFormInputLabel(this.getTitle(),this.isRequired())),this.schema.description&&(this.description=this.theme.getFormInputDescription(this.translateProperty(this.schema.description))),this.options.infoText&&(this.infoButton=this.theme.getInfoButton(this.translateProperty(this.options.infoText))),this.options=this.expandCallbacks('upload',f({},{title:'Browse',icon:'',auto_upload:!1,hide_input:!1,enable_drag_drop:!1,drop_zone_text:'Drag & Drop file here',drop_zone_top:!1,alt_drop_zone:'',mime_type:'',max_upload_size:0,upload_handler:function(t,e,n,r){window.alert('No upload_handler defined for "'.concat(t.path,'". You must create your own handler to enable upload to server'));}},this.defaults.options.upload||{},this.options.upload||{})),this.options.mime_type=this.options.mime_type?[].concat(this.options.mime_type):[],this.input=this.theme.getFormInputField('hidden'),this.container.appendChild(this.input),!this.schema.readOnly&&!this.schema.readonly){if('function'!=typeof this.options.upload_handler)throw new Error('Upload handler required for upload editor');if(this.uploader=this.theme.getFormInputField('file'),this.uploader.style.display='none',this.options.mime_type.length&&this.uploader.setAttribute('accept',this.options.mime_type),!0===this.options.enable_drag_drop&&!0===this.options.hide_input||(this.clickHandler=function(e){t.uploader.dispatchEvent(new window.MouseEvent('click',{view:window,bubbles:!0,cancelable:!1}));},this.browseButton=this.getButton(this.options.title,this.options.icon,this.options.title),this.browseButton.addEventListener('click',this.clickHandler),this.fileDisplay=this.theme.getFormInputField('input'),this.fileDisplay.setAttribute('readonly',!0),this.fileDisplay.value='No file selected.',this.fileDisplay.addEventListener('dblclick',this.clickHandler),this.fileUploadGroup=this.theme.getInputGroup(this.fileDisplay,[this.browseButton]),this.fileUploadGroup||(this.fileUploadGroup=document.createElement('div'),this.fileUploadGroup.appendChild(this.fileDisplay),this.fileUploadGroup.appendChild(this.browseButton))),!0===this.options.enable_drag_drop){if(''!==this.options.alt_drop_zone){if(this.altDropZone=document.querySelector(this.options.alt_drop_zone),!this.altDropZone)throw new Error('Error: alt_drop_zone selector "'.concat(this.options.alt_drop_zone,'" not found!'));this.dropZone=this.altDropZone;}else this.dropZone=this.theme.getDropZone(this.options.drop_zone_text);this.dropZone&&(this.dropZone.classList.add('upload-dropzone'),this.dropZone.addEventListener('dblclick',this.clickHandler));}this.uploadHandler=function(e){e.preventDefault(),e.stopPropagation();var n=e.target.files||e.dataTransfer.files;if(n&&n.length)if(0!==t.options.max_upload_size&&n[0].size>t.options.max_upload_size)t.theme.addInputError(t.uploader,'Filesize too large. Max size is '.concat(t.options.max_upload_size));else if(0===t.options.mime_type.length||t.isValidMimeType(n[0].type,t.options.mime_type)){t.fileDisplay&&(t.fileDisplay.value=n[0].name);var r=new window.FileReader();r.onload=function(e){t.preview_value=e.target.result,t.refreshPreview(n),t.onChange(!0),r=null;},r.readAsDataURL(n[0]);}else t.theme.addInputError(t.uploader,'Wrong file format. Allowed format(s): '.concat(t.options.mime_type.toString()));},this.uploader.addEventListener('change',this.uploadHandler),this.dragHandler=function(e){var n=e.dataTransfer.items||e.dataTransfer.files,r=n&&n.length&&(0===t.options.mime_type.length||t.isValidMimeType(n[0].type,t.options.mime_type)),i=e.currentTarget.classList&&e.currentTarget.classList.contains('upload-dropzone')&&r;switch((e.currentTarget===window?'w_':'e_')+e.type){case'w_drop':case'w_dragover':i||(e.dataTransfer.dropEffect='none');break;case'e_dragenter':i?(t.dropZone.classList.add('valid-dropzone'),e.dataTransfer.dropEffect='copy'):t.dropZone.classList.add('invalid-dropzone');break;case'e_dragover':i&&(e.dataTransfer.dropEffect='copy');break;case'e_dragleave':t.dropZone.classList.remove('valid-dropzone','invalid-dropzone');break;case'e_drop':t.dropZone.classList.remove('valid-dropzone','invalid-dropzone'),i&&t.uploadHandler(e);}i||e.preventDefault();},!0===this.options.enable_drag_drop&&(['dragover','drop'].forEach(function(e){window.addEventListener(e,t.dragHandler,!0);}),['dragenter','dragover','dragleave','drop'].forEach(function(e){t.dropZone.addEventListener(e,t.dragHandler,!0);}));}this.preview=document.createElement('div'),this.control=this.input.controlgroup=this.theme.getFormControl(this.label,this.uploader||this.input,this.description,this.infoButton),this.uploader&&(this.uploader.controlgroup=this.control);var e=this.uploader||this.input,n=document.createElement('div');this.dropZone&&!this.altDropZone&&!0===this.options.drop_zone_top&&n.appendChild(this.dropZone),this.fileUploadGroup&&n.appendChild(this.fileUploadGroup),this.dropZone&&!this.altDropZone&&!0!==this.options.drop_zone_top&&n.appendChild(this.dropZone),n.appendChild(this.preview),e.parentNode.insertBefore(n,e.nextSibling),this.container.appendChild(this.control),window.requestAnimationFrame(function(){t.afterInputReady();});}},{key:'afterInputReady',value:function(){var t=this;if(this.value){var e=document.createElement('img');e.style.maxWidth='100%',e.style.maxHeight='100px',e.onload=function(n){t.preview.appendChild(e);},e.onerror=function(t){console.error('upload error',t,t.currentTarget);},e.src=this.container.querySelector('a').href;}this.theme.afterInputReady(this.input);}},{key:'refreshPreview',value:function(t){var e=this;if(this.last_preview!==this.preview_value&&(this.last_preview=this.preview_value,this.preview.innerHTML='',this.preview_value)){var n=t[0],r=this.preview_value.match(/^data:([^;,]+)[;,]/);if(n.mimeType=r?r[1]:'unknown',n.size>0){var i=Math.floor(Math.log(n.size)/Math.log(1024));n.formattedSize=''.concat(parseFloat((n.size/Math.pow(1024,i)).toFixed(2)),' ').concat(['Bytes','KB','MB','GB','TB','PB','EB','ZB','YB'][i]);}else n.formattedSize='0 Bytes';var o=this.getButton('button_upload','upload','button_upload');o.addEventListener('click',function(t){t.preventDefault(),o.setAttribute('disabled','disabled'),e.theme.removeInputError(e.uploader),e.theme.getProgressBar&&(e.progressBar=e.theme.getProgressBar(),e.preview.appendChild(e.progressBar)),e.options.upload_handler(e.path,n,{success:function(t){e.setValue(t),e.parent?e.parent.onChildEditorChange(e):e.jsoneditor.onChange(),e.progressBar&&e.preview.removeChild(e.progressBar),o.removeAttribute('disabled');},failure:function(t){e.theme.addInputError(e.uploader,t),e.progressBar&&e.preview.removeChild(e.progressBar),o.removeAttribute('disabled');},updateProgress:function(t){e.progressBar&&(t?e.theme.updateProgressBar(e.progressBar,t):e.theme.updateProgressBarUnknown(e.progressBar));}});}),this.preview.appendChild(this.theme.getUploadPreview(n,o,this.preview_value)),this.options.auto_upload&&(o.dispatchEvent(new window.MouseEvent('click')),this.preview.removeChild(o));}}},{key:'enable',value:function(){this.always_disabled||(this.uploader&&(this.uploader.disabled=!1),Oo(Po(o.prototype),'enable',this).call(this));}},{key:'disable',value:function(t){t&&(this.always_disabled=!0),this.uploader&&(this.uploader.disabled=!0),Oo(Po(o.prototype),'disable',this).call(this);}},{key:'setValue',value:function(t){this.value!==t&&(this.value=t,this.input.value=this.value,this.onChange());}},{key:'destroy',value:function(){var t=this;!0===this.options.enable_drag_drop&&(['dragover','drop'].forEach(function(e){window.removeEventListener(e,t.dragHandler,!0);}),['dragenter','dragover','dragleave','drop'].forEach(function(e){t.dropZone.removeEventListener(e,t.dragHandler,!0);}),this.dropZone.removeEventListener('dblclick',this.clickHandler),this.dropZone&&this.dropZone.parentNode&&this.dropZone.parentNode.removeChild(this.dropZone)),this.uploader&&this.uploader.parentNode&&(this.uploader.removeEventListener('change',this.uploadHandler),this.uploader.parentNode.removeChild(this.uploader)),this.browseButton&&this.browseButton.parentNode&&(this.browseButton.removeEventListener('click',this.clickHandler),this.browseButton.parentNode.removeChild(this.browseButton)),this.fileDisplay&&this.fileDisplay.parentNode&&(this.fileDisplay.removeEventListener('dblclick',this.clickHandler),this.fileDisplay.parentNode.removeChild(this.fileDisplay)),this.fileUploadGroup&&this.fileUploadGroup.parentNode&&this.fileUploadGroup.parentNode.removeChild(this.fileUploadGroup),this.preview&&this.preview.parentNode&&this.preview.parentNode.removeChild(this.preview),this.header&&this.header.parentNode&&this.header.parentNode.removeChild(this.header),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),Oo(Po(o.prototype),'destroy',this).call(this);}},{key:'isValidMimeType',value:function(t,e){return e.reduce(function(e,n){return e||new RegExp(n.replace(/\*/g,'.*'),'gi').test(t);},!1);}}])&&jo(e.prototype,n),r&&jo(e,r),o;}(N),uuid:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Io(t,e);}(o,t);var e,n,r,i=Do(o);function o(){return Lo(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'preBuild',value:function(){Ao(Bo(o.prototype),'preBuild',this).call(this),this.schema.default=this.uuid=this.getUuid(),this.schema.options||(this.schema.options={}),this.schema.options.cleave||(this.schema.options.cleave={delimiters:['-'],blocks:[8,4,4,4,12]});}},{key:'build',value:function(){Ao(Bo(o.prototype),'build',this).call(this),this.disable(!0),this.input.setAttribute('readonly','true');}},{key:'sanitize',value:function(t){return this.testUuid(t)||(t=this.uuid),t;}},{key:'setValue',value:function(t,e,n){this.testUuid(t)||(t=this.uuid),this.uuid=t,Ao(Bo(o.prototype),'setValue',this).call(this,t,e,n);}},{key:'getUuid',value:function(){var t=new Date().getTime();return'undefined'!=typeof performance&&'function'==typeof performance.now&&(t+=performance.now()),'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),('x'===e?n:3&n|8).toString(16);});}},{key:'testUuid',value:function(t){return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t);}}])&&To(e.prototype,n),r&&To(e,r),o;}(G),colorpicker:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Mo(t,e);}(o,t);var e,n,r,i=qo(o);function o(){return Vo(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'postBuild',value:function(){window.Picker&&(this.input.type='text'),this.input.style.padding='3px';}},{key:'setValue',value:function(t,e,n){var r=zo(Go(o.prototype),'setValue',this).call(this,t,e,n);return this.picker_instance&&this.picker_instance.domElement&&r&&r.changed&&this.picker_instance.setColor(r.value,!0),r;}},{key:'getNumColumns',value:function(){return 2;}},{key:'afterInputReady',value:function(){zo(Go(o.prototype),'afterInputReady',this).call(this),this.createPicker(!0);}},{key:'disable',value:function(){if(zo(Go(o.prototype),'disable',this).call(this),this.picker_instance&&this.picker_instance.domElement){this.picker_instance.domElement.style.pointerEvents='none';for(var t=this.picker_instance.domElement.querySelectorAll('button'),e=0;e<t.length;e++)t[e].disabled=!0;}}},{key:'enable',value:function(){if(zo(Go(o.prototype),'enable',this).call(this),this.picker_instance&&this.picker_instance.domElement){this.picker_instance.domElement.style.pointerEvents='auto';for(var t=this.picker_instance.domElement.querySelectorAll('button'),e=0;e<t.length;e++)t[e].disabled=!1;}}},{key:'destroy',value:function(){this.createPicker(!1),zo(Go(o.prototype),'destroy',this).call(this);}},{key:'createPicker',value:function(t){var e=this;if(t){if(window.Picker&&!this.picker_instance){var n=this.expandCallbacks('colorpicker',f({},{editor:!1,alpha:!1,color:this.value,popup:'bottom'},this.defaults.options.colorpicker||{},this.options.colorpicker||{},{parent:this.container})),r=function(t){var n=e.picker_instance.settings.editorFormat,r=e.picker_instance.settings.alpha;e.setValue('hex'===n?r?t.hex:t.hex.slice(0,7):t[''.concat(n+(r?'a':''),'String')]);};n.popup||'function'==typeof n.onChange?n.popup&&'function'!=typeof n.onDone&&(n.onDone=r):n.onChange=r,this.picker_instance=new window.Picker(n),n.popup||(this.input.style.display='none',this.theme.afterInputReady(this.picker_instance.domElement));}}else this.picker_instance&&(this.picker_instance.destroy(),this.picker_instance=null,this.input.style.display='');}}])&&Ho(e.prototype,n),r&&Ho(e,r),o;}(G)},Jo=(n(163),{default:function(){return{compile:function(t){var e=t.match(/{{\s*([a-zA-Z0-9\-_ .]+)\s*}}/g),n=e&&e.length;if(!n)return function(){return t;};for(var r=[],i=function(t){var n,i,o=e[t].replace(/[{}]+/g,'').trim().split('.'),a=o.length;a>1?n=function(e){for(i=e,t=0;t<a&&(i=i[o[t]]);t++);return i;}:(o=o[0],n=function(t){return t[o];});r.push({s:e[t],r:n});},o=0;o<n;o++)i(o);return function(e){var i,a=''.concat(t);for(o=0;o<n;o++)i=r[o],a=a.replace(i.s,i.r(e));return a;};}};},ejs:function(){return!!window.EJS&&{compile:function(t){var e=new window.EJS({text:t});return function(t){return e.render(t);};}};},handlebars:function(){return window.Handlebars;},hogan:function(){return!!window.Hogan&&{compile:function(t){var e=window.Hogan.compile(t);return function(t){return e.render(t);};}};},lodash:function(){return!!window._&&{compile:function(t){return function(e){return window._.template(t)(e);};}};},markup:function(){return!(!window.Mark||!window.Mark.up)&&{compile:function(t){return function(e){return window.Mark.up(t,e);};}};},mustache:function(){return!!window.Mustache&&{compile:function(t){return function(e){return window.Mustache.render(t,e);};}};},swig:function(){return window.swig;},underscore:function(){return!!window._&&{compile:function(t){return function(e){return window._.template(t)(e);};}};}});function Wo(t){return function(t){if(Array.isArray(t))return Zo(t);}(t)||function(t){if('undefined'!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t);}(t)||function(t,e){if(!t)return;if('string'==typeof t)return Zo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);'Object'===n&&t.constructor&&(n=t.constructor.name);if('Map'===n||'Set'===n)return Array.from(t);if('Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zo(t,e);}(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function Zo(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}function Qo(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Yo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}var Xo={collapse:'',expand:'',delete:'',edit:'',add:'',cancel:'',save:'',moveup:'',movedown:''},Ko=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'',n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Xo;Qo(this,t),this.mapping=n,this.icon_prefix=e;}var e,n,r;return e=t,(n=[{key:'getIconClass',value:function(t){return this.mapping[t]?this.icon_prefix+this.mapping[t]:null;}},{key:'getIcon',value:function(t){var e,n=this.getIconClass(t);if(!n)return null;var r=document.createElement('i');return(e=r.classList).add.apply(e,Wo(n.split(' '))),r;}}])&&Yo(e.prototype,n),r&&Yo(e,r),t;}();function ta(t){return(ta='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function ea(t,e){return(ea=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function na(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=ia(t);if(e){var i=ia(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return ra(this,n);};}function ra(t,e){return!e||'object'!==ta(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function ia(t){return(ia=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var oa={collapse:'chevron-down',expand:'chevron-right',delete:'trash',edit:'pencil',add:'plus',subtract:'minus',cancel:'floppy-remove',save:'floppy-saved',moveup:'arrow-up',moveright:'arrow-right',movedown:'arrow-down',moveleft:'arrow-left',copy:'copy',clear:'remove-circle',time:'time',calendar:'calendar',edit_properties:'list'};function aa(t){return(aa='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function sa(t,e){return(sa=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function la(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=ua(t);if(e){var i=ua(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return ca(this,n);};}function ca(t,e){return!e||'object'!==aa(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function ua(t){return(ua=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var ha={collapse:'chevron-down',expand:'chevron-right',delete:'trash',edit:'pencil',add:'plus',subtract:'minus',cancel:'ban-circle',save:'save',moveup:'arrow-up',moveright:'arrow-right',movedown:'arrow-down',moveleft:'arrow-left',copy:'copy',clear:'remove-circle',time:'time',calendar:'calendar',edit_properties:'list'};function pa(t){return(pa='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function da(t,e){return(da=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function fa(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=ma(t);if(e){var i=ma(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return ya(this,n);};}function ya(t,e){return!e||'object'!==pa(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function ma(t){return(ma=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var ba={collapse:'caret-square-o-down',expand:'caret-square-o-right',delete:'times',edit:'pencil',add:'plus',subtract:'minus',cancel:'ban',save:'save',moveup:'arrow-up',moveright:'arrow-right',movedown:'arrow-down',moveleft:'arrow-left',copy:'files-o',clear:'times-circle-o',time:'clock-o',calendar:'calendar',edit_properties:'list'};function va(t){return(va='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function ga(t,e){return(ga=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function _a(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=ka(t);if(e){var i=ka(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return wa(this,n);};}function wa(t,e){return!e||'object'!==va(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function ka(t){return(ka=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var xa={collapse:'caret-down',expand:'caret-right',delete:'trash',edit:'pen',add:'plus',subtract:'minus',cancel:'ban',save:'save',moveup:'arrow-up',moveright:'arrow-right',movedown:'arrow-down',moveleft:'arrow-left',copy:'copy',clear:'times-circle',time:'clock',calendar:'calendar',edit_properties:'list'};function ja(t){return(ja='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Oa(t,e){return(Oa=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Ca(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Sa(t);if(e){var i=Sa(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ea(this,n);};}function Ea(t,e){return!e||'object'!==ja(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Sa(t){return(Sa=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Pa={collapse:'triangle-1-s',expand:'triangle-1-e',delete:'trash',edit:'pencil',add:'plusthick',subtract:'minusthick',cancel:'closethick',save:'disk',moveup:'arrowthick-1-n',moveright:'arrowthick-1-e',movedown:'arrowthick-1-s',moveleft:'arrowthick-1-w',copy:'copy',clear:'circle-close',time:'time',calendar:'calendar',edit_properties:'note'};function Ra(t){return(Ra='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function La(t,e){return(La=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Ta(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Ia(t);if(e){var i=Ia(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Aa(this,n);};}function Aa(t,e){return!e||'object'!==Ra(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Ia(t){return(Ia=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Da={collapse:'collapse-down',expand:'expand-right',delete:'trash',edit:'pencil',add:'plus',subtract:'minus',cancel:'ban',save:'file',moveup:'arrow-thick-top',moveright:'arrow-thick-right',movedown:'arrow-thick-bottom',moveleft:'arrow-thick-left',copy:'clipboard',clear:'circle-x',time:'clock',calendar:'calendar',edit_properties:'list'};function Na(t){return(Na='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Ba(t,e){return(Ba=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Fa(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Ha(t);if(e){var i=Ha(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Va(this,n);};}function Va(t,e){return!e||'object'!==Na(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Ha(t){return(Ha=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var za={collapse:'arrow-down',expand:'arrow-right',delete:'delete',edit:'edit',add:'plus',subtract:'minus',cancel:'cross',save:'check',moveup:'upward',moveright:'forward',movedown:'downward',moveleft:'back',copy:'copy',clear:'close',time:'time',calendar:'bookmark',edit_properties:'menu'},Ma={bootstrap3:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ea(t,e);}(n,t);var e=na(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,n),e.call(this,'glyphicon glyphicon-',oa);}return n;}(Ko),fontawesome3:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&sa(t,e);}(n,t);var e=la(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,n),e.call(this,'icon-',ha);}return n;}(Ko),fontawesome4:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&da(t,e);}(n,t);var e=fa(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,n),e.call(this,'fa fa-',ba);}return n;}(Ko),fontawesome5:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ga(t,e);}(n,t);var e=_a(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,n),e.call(this,'fas fa-',xa);}return n;}(Ko),jqueryui:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Oa(t,e);}(n,t);var e=Ca(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,n),e.call(this,'ui-icon ui-icon-',Pa);}return n;}(Ko),openiconic:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&La(t,e);}(n,t);var e=Ta(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,n),e.call(this,'oi oi-',Da);}return n;}(Ko),spectre:function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ba(t,e);}(n,t);var e=Fa(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,n),e.call(this,'icon icon-',za);}return n;}(Ko)};n(136);function qa(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Ua(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}var Ga=['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].find(function(t){return t in document.documentElement;}),$a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{disable_theme_rules:!1};qa(this,t),this.jsoneditor=e,Object.keys(n).forEach(function(t){void 0!==e.options[t]&&(n[t]=e.options[t]);}),this.options=n;}var e,n,r;return e=t,(n=[{key:'getContainer',value:function(){return document.createElement('div');}},{key:'getFloatRightLinkHolder',value:function(){var t=document.createElement('div');return t.classList.add('je-float-right-linkholder'),t;}},{key:'getModal',value:function(){var t=document.createElement('div');return t.style.display='none',t.classList.add('je-modal'),t;}},{key:'getGridContainer',value:function(){return document.createElement('div');}},{key:'getGridRow',value:function(){var t=document.createElement('div');return t.classList.add('row'),t;}},{key:'getGridColumn',value:function(){return document.createElement('div');}},{key:'setGridColumnSize',value:function(t,e){}},{key:'getLink',value:function(t){var e=document.createElement('a');return e.setAttribute('href','#'),e.appendChild(document.createTextNode(t)),e;}},{key:'disableHeader',value:function(t){t.style.color='#ccc';}},{key:'disableLabel',value:function(t){t.style.color='#ccc';}},{key:'enableHeader',value:function(t){t.style.color='';}},{key:'enableLabel',value:function(t){t.style.color='';}},{key:'getInfoButton',value:function(t){var e=document.createElement('span');e.innerText='ⓘ',e.classList.add('je-infobutton-icon');var n=document.createElement('span');return n.classList.add('je-infobutton-tooltip'),n.innerText=t,e.onmouseover=function(){n.style.visibility='visible';},e.onmouseleave=function(){n.style.visibility='hidden';},e.appendChild(n),e;}},{key:'getFormInputLabel',value:function(t,e){var n=document.createElement('label');return n.appendChild(document.createTextNode(t)),e&&n.classList.add('required'),n;}},{key:'getHeader',value:function(t,e){var n=document.createElement('h3');return'string'==typeof t?n.textContent=t:n.appendChild(t),n.classList.add('je-header'),n;}},{key:'getCheckbox',value:function(){var t=this.getFormInputField('checkbox');return t.classList.add('je-checkbox'),t;}},{key:'getCheckboxLabel',value:function(t,e){var n=document.createElement('label');return n.appendChild(document.createTextNode(' '.concat(t))),e&&n.classList.add('required'),n;}},{key:'getMultiCheckboxHolder',value:function(t,e,n,r){var i=document.createElement('div');return i.classList.add('control-group'),e&&(e.style.display='block',i.appendChild(e),r&&e.appendChild(r)),Object.values(t).forEach(function(t){t.style.display='inline-block',t.style.marginRight='20px',i.appendChild(t);}),n&&i.appendChild(n),i;}},{key:'getFormCheckboxControl',value:function(t,e,n){var r=document.createElement('div');return r.appendChild(t),e.style.width='auto',t.insertBefore(e,t.firstChild),n&&r.classList.add('je-checkbox-control--compact'),r;}},{key:'getFormRadio',value:function(t){var e=this.getFormInputField('radio');return Object.keys(t).forEach(function(n){return e.setAttribute(n,t[n]);}),e.classList.add('je-radio'),e;}},{key:'getFormRadioLabel',value:function(t,e){var n=document.createElement('label');return n.appendChild(document.createTextNode(' '.concat(t))),e&&n.classList.add('required'),n;}},{key:'getFormRadioControl',value:function(t,e,n){var r=document.createElement('div');return r.appendChild(t),e.style.width='auto',t.insertBefore(e,t.firstChild),n&&r.classList.add('je-radio-control--compact'),r;}},{key:'getSelectInput',value:function(t,e){var n=document.createElement('select');return t&&this.setSelectOptions(n,t),n;}},{key:'getSwitcher',value:function(t){var e=this.getSelectInput(t,!1);return e.classList.add('je-switcher'),e;}},{key:'getSwitcherOptions',value:function(t){return t.getElementsByTagName('option');}},{key:'setSwitcherOptions',value:function(t,e,n){this.setSelectOptions(t,e,n);}},{key:'setSelectOptions',value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.innerHTML='';for(var r=0;r<e.length;r++){var i=document.createElement('option');i.setAttribute('value',e[r]),i.textContent=n[r]||e[r],t.appendChild(i);}}},{key:'getTextareaInput',value:function(){var t=document.createElement('textarea');return t.classList.add('je-textarea'),t;}},{key:'getRangeInput',value:function(t,e,n){var r=this.getFormInputField('range');return r.setAttribute('min',t),r.setAttribute('max',e),r.setAttribute('step',n),r;}},{key:'getStepperButtons',value:function(t){var e=document.createElement('div'),n=document.createElement('button');n.setAttribute('type','button'),n.classList.add('stepper-down');var r=document.createElement('button');r.setAttribute('type','button'),r.classList.add('stepper-up'),t.getAttribute('readonly')&&(n.setAttribute('disabled',!0),r.setAttribute('disabled',!0)),n.textContent='-',r.textContent='+';var i=function(t,e){t.value=Number(e||t.value),t.setAttribute('initialized','1');},o=t.getAttribute('min'),a=t.getAttribute('max');return n.addEventListener('click',function(){t.getAttribute('initialized')?o?Number(t.value)>Number(o)&&t.stepDown():t.stepDown():i(t,o),y(t,'change');}),r.addEventListener('click',function(){t.getAttribute('initialized')?a?Number(t.value)<Number(a)&&t.stepUp():t.stepUp():i(t,o),y(t,'change');}),e.appendChild(n),e.appendChild(r),e;}},{key:'getRangeOutput',value:function(t,e){var n=document.createElement('output');n.value=e||0;var r=function(t){n.value=t.currentTarget.value;};return t.addEventListener('change',r,!1),t.addEventListener('input',r,!1),n;}},{key:'getRangeControl',value:function(t,e){var n=document.createElement('div');return n.classList.add('je-range-control'),e&&n.appendChild(e),n.appendChild(t),n;}},{key:'getFormInputField',value:function(t){var e=document.createElement('input');return e.setAttribute('type',t),e;}},{key:'afterInputReady',value:function(t){}},{key:'getFormControl',value:function(t,e,n,r){var i=document.createElement('div');return i.classList.add('form-control'),t&&i.appendChild(t),'checkbox'!==e.type&&'radio'!==e.type||!t?(r&&t&&t.appendChild(r),i.appendChild(e)):(e.style.width='auto',t.insertBefore(e,t.firstChild),r&&t.appendChild(r)),n&&i.appendChild(n),i;}},{key:'getIndentedPanel',value:function(){var t=document.createElement('div');return t.classList.add('je-indented-panel'),t;}},{key:'getTopIndentedPanel',value:function(){var t=document.createElement('div');return t.classList.add('je-indented-panel--top'),t;}},{key:'getChildEditorHolder',value:function(){return document.createElement('div');}},{key:'getDescription',value:function(t){var e=document.createElement('p');return window.DOMPurify?e.innerHTML=window.DOMPurify.sanitize(t):e.textContent=this.cleanText(t),e;}},{key:'getCheckboxDescription',value:function(t){return this.getDescription(t);}},{key:'getFormInputDescription',value:function(t){return this.getDescription(t);}},{key:'getButtonHolder',value:function(){return document.createElement('span');}},{key:'getHeaderButtonHolder',value:function(){return this.getButtonHolder();}},{key:'getFormButtonHolder',value:function(t){return this.getButtonHolder();}},{key:'getButton',value:function(t,e,n){var r=document.createElement('button');return r.type='button',this.setButtonText(r,t,e,n),r;}},{key:'getFormButton',value:function(t,e,n){return this.getButton(t,e,n);}},{key:'setButtonText',value:function(t,e,n,r){for(;t.firstChild;)t.removeChild(t.firstChild);if(n&&(t.appendChild(n),e=' '.concat(e)),!this.jsoneditor.options.iconlib||!this.jsoneditor.options.remove_button_labels||!n){var i=document.createElement('span');i.appendChild(document.createTextNode(e)),t.appendChild(i);}r&&t.setAttribute('title',r);}},{key:'getTable',value:function(){return document.createElement('table');}},{key:'getTableRow',value:function(){return document.createElement('tr');}},{key:'getTableHead',value:function(){return document.createElement('thead');}},{key:'getTableBody',value:function(){return document.createElement('tbody');}},{key:'getTableHeaderCell',value:function(t){var e=document.createElement('th');return e.textContent=t,e;}},{key:'getTableCell',value:function(){return document.createElement('td');}},{key:'getErrorMessage',value:function(t){var e=document.createElement('p');return e.style=e.style||{},e.style.color='red',e.appendChild(document.createTextNode(t)),e;}},{key:'addInputError',value:function(t,e){}},{key:'removeInputError',value:function(t){}},{key:'addTableRowError',value:function(t){}},{key:'removeTableRowError',value:function(t){}},{key:'getTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.innerHTML="<div class='je-tabholder tabs'></div><div class='content' id='".concat(e,"'></div><div class='je-tabholder--clear'></div>"),n;}},{key:'getTopTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.innerHTML="<div class='tabs je-tabholder--top'></div><div class='je-tabholder--clear'></div><div class='content' id='".concat(e,"'></div>"),n;}},{key:'applyStyles',value:function(t,e){Object.keys(e).forEach(function(n){return t.style[n]=e[n];});}},{key:'closest',value:function(t,e){for(;t&&t!==document;){if(!t[Ga])return!1;if(t[Ga](e))return t;t=t.parentNode;}return!1;}},{key:'insertBasicTopTab',value:function(t,e){e.firstChild.insertBefore(t,e.firstChild.firstChild);}},{key:'getTab',value:function(t,e){var n=document.createElement('div');return n.appendChild(t),n.id=e,n.classList.add('je-tab'),n;}},{key:'getTopTab',value:function(t,e){var n=document.createElement('div');return n.appendChild(t),n.id=e,n.classList.add('je-tab--top'),n;}},{key:'getTabContentHolder',value:function(t){return t.children[1];}},{key:'getTopTabContentHolder',value:function(t){return t.children[1];}},{key:'getTabContent',value:function(){return this.getIndentedPanel();}},{key:'getTopTabContent',value:function(){return this.getTopIndentedPanel();}},{key:'markTabActive',value:function(t){this.applyStyles(t.tab,{opacity:1,background:'white'}),void 0!==t.rowPane?t.rowPane.style.display='':t.container.style.display='';}},{key:'markTabInactive',value:function(t){this.applyStyles(t.tab,{opacity:0.5,background:''}),void 0!==t.rowPane?t.rowPane.style.display='none':t.container.style.display='none';}},{key:'addTab',value:function(t,e){t.children[0].appendChild(e);}},{key:'addTopTab',value:function(t,e){t.children[0].appendChild(e);}},{key:'getBlockLink',value:function(){var t=document.createElement('a');return t.classList.add('je-block-link'),t;}},{key:'getBlockLinkHolder',value:function(){return document.createElement('div');}},{key:'getLinksHolder',value:function(){return document.createElement('div');}},{key:'createMediaLink',value:function(t,e,n){t.appendChild(e),n.classList.add('je-media'),t.appendChild(n);}},{key:'createImageLink',value:function(t,e,n){t.appendChild(e),e.appendChild(n);}},{key:'getFirstTab',value:function(t){return t.firstChild.firstChild;}},{key:'getInputGroup',value:function(t,e){}},{key:'cleanText',value:function(t){var e=document.createElement('div');return e.innerHTML=t,e.textContent||e.innerText;}},{key:'getDropZone',value:function(t){var e=document.createElement('div');return e.setAttribute('data-text',t),e.classList.add('je-dropzone'),e;}},{key:'getUploadPreview',value:function(t,e,n){var r=document.createElement('div');if(r.classList.add('je-upload-preview'),'image'===t.mimeType.substr(0,5)){var i=document.createElement('img');i.src=n,r.appendChild(i);}var o=document.createElement('div');o.innerHTML+='<strong>Name:</strong> '.concat(t.name,'<br><strong>Type:</strong> ').concat(t.type,'<br><strong>Size:</strong> ').concat(t.formattedSize),r.appendChild(o),r.appendChild(e);var a=document.createElement('div');return a.style.clear='left',r.appendChild(a),r;}},{key:'getProgressBar',value:function(){var t=document.createElement('progress');return t.setAttribute('max',100),t.setAttribute('value',0),t;}},{key:'updateProgressBar',value:function(t,e){t&&t.setAttribute('value',e);}},{key:'updateProgressBarUnknown',value:function(t){t&&t.removeAttribute('value');}}])&&Ua(e.prototype,n),r&&Ua(e,r),t;}();function Ja(t){return(Ja='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Wa(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function Za(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Qa(t,e,n){return(Qa='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ts(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Ya(t,e){return(Ya=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Xa(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=ts(t);if(e){var i=ts(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ka(this,n);};}function Ka(t,e){return!e||'object'!==Ja(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function ts(t){return(ts=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var es=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ya(t,e);}(o,t);var e,n,r,i=Xa(o);function o(){return Wa(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getFormInputLabel',value:function(t,e){var n=Qa(ts(o.prototype),'getFormInputLabel',this).call(this,t,e);return n.classList.add('je-form-input-label'),n;}},{key:'getFormInputDescription',value:function(t){var e=Qa(ts(o.prototype),'getFormInputDescription',this).call(this,t);return e.classList.add('je-form-input-label'),e;}},{key:'getIndentedPanel',value:function(){var t=Qa(ts(o.prototype),'getIndentedPanel',this).call(this);return t.classList.add('je-indented-panel'),t;}},{key:'getTopIndentedPanel',value:function(){return this.getIndentedPanel();}},{key:'getChildEditorHolder',value:function(){var t=Qa(ts(o.prototype),'getChildEditorHolder',this).call(this);return t.classList.add('je-child-editor-holder'),t;}},{key:'getHeaderButtonHolder',value:function(){var t=this.getButtonHolder();return t.classList.add('je-header-button-holder'),t;}},{key:'getTable',value:function(){var t=Qa(ts(o.prototype),'getTable',this).call(this);return t.classList.add('je-table'),t;}},{key:'addInputError',value:function(t,e){var n=this.closest(t,'.form-control')||t.controlgroup;t.errmsg?t.errmsg.style.display='block':(t.errmsg=document.createElement('div'),t.errmsg.setAttribute('class','errmsg'),t.errmsg.style=t.errmsg.style||{},t.errmsg.style.color='red',n.appendChild(t.errmsg)),t.errmsg.innerHTML='',t.errmsg.appendChild(document.createTextNode(e));}},{key:'removeInputError',value:function(t){t.style&&(t.style.borderColor=''),t.errmsg&&(t.errmsg.style.display='none');}}])&&Za(e.prototype,n),r&&Za(e,r),o;}($a);es.rules={'.je-form-input-label':'display:block;margin-bottom:3px;font-weight:bold','.je-form-input-description':'display:inline-block;margin:0;font-size:0.8em;font-style:italic','.je-indented-panel':'padding:5px;margin:10px;border-radius:3px;border:1px%20solid%20%23ddd','.je-child-editor-holder':'margin-bottom:8px','.je-header-button-holder':'display:inline-block;margin-left:10px;font-size:0.8em;vertical-align:middle','.je-table':'margin-bottom:5px;border-bottom:1px%20solid%20%23ccc','.je-upload-preview img':'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem','.je-dropzone':'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s','.je-dropzone:before':'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)','.je-dropzone.valid-dropzone':'background:green','.je-dropzone.invalid-dropzone':'background:red'};var ns=n(137),rs=n.n(ns);function is(t){return(is='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function os(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function as(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function ss(t,e,n){return(ss='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=hs(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function ls(t,e){return(ls=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function cs(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=hs(t);if(e){var i=hs(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return us(this,n);};}function us(t,e){return!e||'object'!==is(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function hs(t){return(hs=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var ps=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ls(t,e);}(o,t);var e,n,r,i=cs(o);function o(){return os(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getSelectInput',value:function(t,e){var n=ss(hs(o.prototype),'getSelectInput',this).call(this,t);return n.classList.add('form-control'),n;}},{key:'setGridColumnSize',value:function(t,e,n){t.classList.add('col-md-'.concat(e)),n&&t.classList.add('col-md-offset-'.concat(n));}},{key:'afterInputReady',value:function(t){if(!t.controlgroup&&(t.controlgroup=this.closest(t,'.form-group'),this.closest(t,'.compact')&&(t.controlgroup.style.marginBottom=0),this.queuedInputErrorText)){var e=this.queuedInputErrorText;delete this.queuedInputErrorText,this.addInputError(t,e);}}},{key:'getTextareaInput',value:function(){var t=document.createElement('textarea');return t.classList.add('form-control'),t;}},{key:'getRangeInput',value:function(t,e,n){return ss(hs(o.prototype),'getRangeInput',this).call(this,t,e,n);}},{key:'getFormInputField',value:function(t){var e=ss(hs(o.prototype),'getFormInputField',this).call(this,t);return'checkbox'!==t&&'radio'!==t&&e.classList.add('form-control'),e;}},{key:'getFormControl',value:function(t,e,n,r){var i=document.createElement('div');return!t||'checkbox'!==e.type&&'radio'!==e.type?(i.classList.add('form-group'),t&&(t.classList.add('control-label'),i.appendChild(t),r&&t.appendChild(r)),i.appendChild(e)):(i.classList.add(e.type),t.insertBefore(e,t.firstChild),i.appendChild(t)),n&&i.appendChild(n),i;}},{key:'getIndentedPanel',value:function(){var t=document.createElement('div');return t.classList.add('well','well-sm'),t.style.paddingBottom=0,t;}},{key:'getInfoButton',value:function(t){var e=document.createElement('span');e.classList.add('glyphicon','glyphicon-info-sign','pull-right'),e.style.padding='.25rem',e.style.position='relative',e.style.display='inline-block';var n=document.createElement('span');return n.style['font-family']='sans-serif',n.style.visibility='hidden',n.style['background-color']='rgba(50, 50, 50, .75)',n.style.margin='0 .25rem',n.style.color='#FAFAFA',n.style.padding='.5rem 1rem',n.style['border-radius']='.25rem',n.style.width='25rem',n.style.position='absolute',n.innerText=t,e.onmouseover=function(){n.style.visibility='visible';},e.onmouseleave=function(){n.style.visibility='hidden';},e.appendChild(n),e;}},{key:'getFormInputDescription',value:function(t){var e=document.createElement('p');return e.classList.add('help-block'),window.DOMPurify?e.innerHTML=window.DOMPurify.sanitize(t):e.textContent=this.cleanText(t),e;}},{key:'getHeaderButtonHolder',value:function(){var t=this.getButtonHolder();return t.style.marginLeft='10px',t;}},{key:'getButtonHolder',value:function(){var t=document.createElement('span');return t.classList.add('btn-group'),t;}},{key:'getButton',value:function(t,e,n){var r=ss(hs(o.prototype),'getButton',this).call(this,t,e,n);return r.classList.add('btn','btn-default'),r;}},{key:'getTable',value:function(){var t=document.createElement('table');return t.classList.add('table','table-bordered'),t.style.width='auto',t.style.maxWidth='none',t;}},{key:'addInputError',value:function(t,e){t.controlgroup?(t.controlgroup.classList.add('has-error'),t.errmsg?t.errmsg.style.display='':(t.errmsg=document.createElement('p'),t.errmsg.classList.add('help-block','errormsg'),t.controlgroup.appendChild(t.errmsg)),t.errmsg.textContent=e):this.queuedInputErrorText=e;}},{key:'removeInputError',value:function(t){t.controlgroup||delete this.queuedInputErrorText,t.errmsg&&(t.errmsg.style.display='none',t.controlgroup.classList.remove('has-error'));}},{key:'getTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.innerHTML="<ul class='col-md-2 nav nav-pills nav-stacked' id='".concat(e,"' role='tablist'></ul><div class='col-md-10 tab-content well well-small'  id='").concat(e,"'></div>"),n;}},{key:'getTopTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.innerHTML="<ul class='nav nav-tabs' id='".concat(e,"' role='tablist'></ul><div class='tab-content well well-small'  id='").concat(e,"'></div>"),n;}},{key:'getTab',value:function(t,e){var n=document.createElement('li');n.setAttribute('role','presentation');var r=document.createElement('a');return r.setAttribute('href','#'.concat(e)),r.appendChild(t),r.setAttribute('aria-controls',e),r.setAttribute('role','tab'),r.setAttribute('data-toggle','tab'),n.appendChild(r),n;}},{key:'getTopTab',value:function(t,e){var n=document.createElement('li');n.setAttribute('role','presentation');var r=document.createElement('a');return r.setAttribute('href','#'.concat(e)),r.appendChild(t),r.setAttribute('aria-controls',e),r.setAttribute('role','tab'),r.setAttribute('data-toggle','tab'),n.appendChild(r),n;}},{key:'getTabContent',value:function(){var t=document.createElement('div');return t.classList.add('tab-pane'),t.setAttribute('role','tabpanel'),t;}},{key:'getTopTabContent',value:function(){var t=document.createElement('div');return t.classList.add('tab-pane'),t.setAttribute('role','tabpanel'),t;}},{key:'markTabActive',value:function(t){t.tab.classList.add('active'),void 0!==t.rowPane?t.rowPane.classList.add('active'):t.container.classList.add('active');}},{key:'markTabInactive',value:function(t){t.tab.classList.remove('active'),void 0!==t.rowPane?t.rowPane.classList.remove('active'):t.container.classList.remove('active');}},{key:'getProgressBar',value:function(){var t=document.createElement('div');t.classList.add('progress');var e=document.createElement('div');return e.classList.add('progress-bar'),e.setAttribute('role','progressbar'),e.setAttribute('aria-valuenow',0),e.setAttribute('aria-valuemin',0),e.setAttribute('aria-valuenax',100),e.innerHTML=''.concat(0,'%'),t.appendChild(e),t;}},{key:'updateProgressBar',value:function(t,e){if(t){var n=t.firstChild,r=''.concat(e,'%');n.setAttribute('aria-valuenow',e),n.style.width=r,n.innerHTML=r;}}},{key:'updateProgressBarUnknown',value:function(t){if(t){var e=t.firstChild;t.classList.add('progress','progress-striped','active'),e.removeAttribute('aria-valuenow'),e.style.width='100%',e.innerHTML='';}}},{key:'getInputGroup',value:function(t,e){if(t){var n=document.createElement('div');n.classList.add('input-group'),n.appendChild(t);var r=document.createElement('div');r.classList.add('input-group-btn'),n.appendChild(r);for(var i=0;i<e.length;i++)r.appendChild(e[i]);return n;}}}])&&as(e.prototype,n),r&&as(e,r),o;}($a);ps.rules=rs.a;n(165);function ds(t){return(ds='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function fs(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function ys(t,e,n){return(ys='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=gs(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function ms(t,e){return(ms=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function bs(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=gs(t);if(e){var i=gs(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return vs(this,n);};}function vs(t,e){return!e||'object'!==ds(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function gs(t){return(gs=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var _s={disable_theme_rules:!1,input_size:'normal',custom_forms:!1,object_indent:!0,object_background:'bg-light',object_text:'',table_border:!1,table_zebrastyle:!1,tooltip:'bootstrap'},ws=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ms(t,e);}(o,t);var e,n,r,i=bs(o);function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,o),i.call(this,t,_s);}return e=o,(n=[{key:'getSelectInput',value:function(t,e){var n=ys(gs(o.prototype),'getSelectInput',this).call(this,t);return n.classList.add('form-control'),!1===this.options.custom_forms?('small'===this.options.input_size&&n.classList.add('form-control-sm'),'large'===this.options.input_size&&n.classList.add('form-control-lg')):(n.classList.remove('form-control'),n.classList.add('custom-select'),'small'===this.options.input_size&&n.classList.add('custom-select-sm'),'large'===this.options.input_size&&n.classList.add('custom-select-lg')),n;}},{key:'getContainer',value:function(){var t=document.createElement('div');return this.options.object_indent||t.classList.add('je-noindent'),t;}},{key:'setGridColumnSize',value:function(t,e,n){t.classList.add('col-md-'.concat(e)),n&&t.classList.add('offset-md-'.concat(n));}},{key:'afterInputReady',value:function(t){if(!t.controlgroup){var e=t.name;t.id=e;var n=t.parentNode.parentNode.getElementsByTagName('label')[0];n&&(n.htmlFor=e),t.controlgroup=this.closest(t,'.form-group');}}},{key:'getTextareaInput',value:function(){var t=document.createElement('textarea');return t.classList.add('form-control'),'small'===this.options.input_size&&t.classList.add('form-control-sm'),'large'===this.options.input_size&&t.classList.add('form-control-lg'),t;}},{key:'getRangeInput',value:function(t,e,n){var r=ys(gs(o.prototype),'getRangeInput',this).call(this,t,e,n);return!0===this.options.custom_forms&&(r.classList.remove('form-control'),r.classList.add('custom-range')),r;}},{key:'getStepperButtons',value:function(t){var e=document.createElement('div'),n=document.createElement('div'),r=document.createElement('div'),i=document.createElement('button');i.setAttribute('type','button');var o=document.createElement('button');o.setAttribute('type','button'),e.appendChild(n),e.appendChild(t),e.appendChild(r),n.appendChild(i),r.appendChild(o),e.classList.add('input-group'),n.classList.add('input-group-prepend'),r.classList.add('input-group-append'),i.classList.add('btn'),i.classList.add('btn-secondary'),i.classList.add('stepper-down'),o.classList.add('btn'),o.classList.add('btn-secondary'),o.classList.add('stepper-up'),t.getAttribute('readonly')&&(i.setAttribute('disabled',!0),o.setAttribute('disabled',!0)),i.textContent='-',o.textContent='+';var a=function(t,e){t.value=Number(e||t.value),t.setAttribute('initialized','1');},s=t.getAttribute('min'),l=t.getAttribute('max');return i.addEventListener('click',function(){t.getAttribute('initialized')?s?Number(t.value)>Number(s)&&t.stepDown():t.stepDown():a(t,s),y(t,'change');}),o.addEventListener('click',function(){t.getAttribute('initialized')?l?Number(t.value)<Number(l)&&t.stepUp():t.stepUp():a(t,s),y(t,'change');}),e;}},{key:'getFormInputField',value:function(t){var e=ys(gs(o.prototype),'getFormInputField',this).call(this,t);return'checkbox'!==t&&'radio'!==t&&'file'!==t&&(e.classList.add('form-control'),'small'===this.options.input_size&&e.classList.add('form-control-sm'),'large'===this.options.input_size&&e.classList.add('form-control-lg')),'file'===t&&e.classList.add('form-control-file'),e;}},{key:'getFormControl',value:function(t,e,n,r){var i=document.createElement('div');if(i.classList.add('form-group'),!t||'checkbox'!==e.type&&'radio'!==e.type)t&&(i.appendChild(t),r&&i.appendChild(r)),i.appendChild(e);else{var o=document.createElement('div');!1===this.options.custom_forms?(o.classList.add('form-check'),e.classList.add('form-check-input'),t.classList.add('form-check-label')):(o.classList.add('custom-control'),e.classList.add('custom-control-input'),t.classList.add('custom-control-label'),'checkbox'===e.type?o.classList.add('custom-checkbox'):o.classList.add('custom-radio'));var a=(Date.now()*Math.random()).toFixed(0);e.setAttribute('id',a),t.setAttribute('for',a),o.appendChild(e),o.appendChild(t),r&&o.appendChild(r),i.appendChild(o);}return n&&i.appendChild(n),i;}},{key:'getInfoButton',value:function(t){var e=document.createElement('button');e.type='button',e.classList.add('ml-3','jsoneditor-twbs4-text-button'),e.setAttribute('data-toggle','tooltip'),e.setAttribute('data-placement','auto'),e.title=t;var n=document.createTextNode('ⓘ');return e.appendChild(n),'bootstrap'===this.options.tooltip?window.jQuery&&window.jQuery().tooltip?window.jQuery(e).tooltip():console.warn('Could not find popper jQuery plugin of Bootstrap.'):'css'===this.options.tooltip&&e.classList.add('je-tooltip'),e;}},{key:'getCheckbox',value:function(){return this.getFormInputField('checkbox');}},{key:'getMultiCheckboxHolder',value:function(t,e,n,r){var i=document.createElement('div');i.classList.add('form-group'),e&&(i.appendChild(e),r&&e.appendChild(r));var o=document.createElement('div');return Object.values(t).forEach(function(t){var e=t.firstChild;o.appendChild(e);}),i.appendChild(o),n&&i.appendChild(n),i;}},{key:'getFormRadio',value:function(t){var e=this.getFormInputField('radio');for(var n in t)e.setAttribute(n,t[n]);return!1===this.options.custom_forms?e.classList.add('form-check-input'):e.classList.add('custom-control-input'),e;}},{key:'getFormRadioLabel',value:function(t,e){var n=document.createElement('label');return!1===this.options.custom_forms?n.classList.add('form-check-label'):n.classList.add('custom-control-label'),n.appendChild(document.createTextNode(t)),n;}},{key:'getFormRadioControl',value:function(t,e,n){var r=document.createElement('div');return!1===this.options.custom_forms?r.classList.add('form-check'):r.classList.add('custom-control','custom-radio'),r.appendChild(e),r.appendChild(t),n&&(!1===this.options.custom_forms?r.classList.add('form-check-inline'):r.classList.add('custom-control-inline')),r;}},{key:'getIndentedPanel',value:function(){var t=document.createElement('div');return t.classList.add('card','card-body','mb-3'),this.options.object_background&&t.classList.add(this.options.object_background),this.options.object_text&&t.classList.add(this.options.object_text),t;}},{key:'getFormInputDescription',value:function(t){var e=document.createElement('small');return e.classList.add('form-text'),window.DOMPurify?e.innerHTML=window.DOMPurify.sanitize(t):e.textContent=this.cleanText(t),e;}},{key:'getHeader',value:function(t,e){var n=document.createElement('h3');return n.classList.add('card-title'),'string'==typeof t?n.textContent=t:n.appendChild(t),n.style.display='inline-block',n;}},{key:'getHeaderButtonHolder',value:function(){return this.getButtonHolder();}},{key:'getButtonHolder',value:function(){var t=document.createElement('span');return t.classList.add('btn-group'),t;}},{key:'getFormButtonHolder',value:function(t){var e=this.getButtonHolder();return e.classList.add('d-block'),'center'===t?e.classList.add('text-center'):'right'===t&&e.classList.add('text-right'),e;}},{key:'getButton',value:function(t,e,n){var r=ys(gs(o.prototype),'getButton',this).call(this,t,e,n);return r.classList.add('btn','btn-secondary','btn-sm'),r;}},{key:'getTable',value:function(){var t=document.createElement('table');return t.classList.add('table','table-sm'),this.options.table_border&&t.classList.add('table-bordered'),this.options.table_zebrastyle&&t.classList.add('table-striped'),t;}},{key:'getErrorMessage',value:function(t){var e=document.createElement('div');return e.classList.add('alert','alert-danger'),e.setAttribute('role','alert'),e.appendChild(document.createTextNode(t)),e;}},{key:'addInputError',value:function(t,e){t.controlgroup&&(t.controlgroup.classList.add('is-invalid'),t.errmsg||(t.errmsg=document.createElement('p'),t.errmsg.classList.add('invalid-feedback'),t.controlgroup.appendChild(t.errmsg),t.errmsg.style.display='block'),t.errmsg.style.display='block',t.errmsg.textContent=e);}},{key:'removeInputError',value:function(t){t.errmsg&&(t.errmsg.style.display='none',t.controlgroup.classList.remove('is-invalid'));}},{key:'getTabHolder',value:function(t){var e=document.createElement('div'),n=void 0===t?'':t;return e.innerHTML="<div class='col-md-2' id='".concat(n,"'><ul class='nav flex-column nav-pills'></ul></div><div class='col-md-10'><div class='tab-content' id='").concat(n,"'></div></div>"),e.classList.add('row'),e;}},{key:'addTab',value:function(t,e){t.children[0].children[0].appendChild(e);}},{key:'getTabContentHolder',value:function(t){return t.children[1].children[0];}},{key:'getTopTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.classList.add('card'),n.innerHTML="<div class='card-header'><ul class='nav nav-tabs card-header-tabs' id='".concat(e,"'></ul></div><div class='card-body'><div class='tab-content' id='").concat(e,"'></div></div>"),n;}},{key:'getTab',value:function(t,e){var n=document.createElement('li');n.classList.add('nav-item');var r=document.createElement('a');return r.classList.add('nav-link'),r.setAttribute('href','#'.concat(e)),r.setAttribute('data-toggle','tab'),r.appendChild(t),n.appendChild(r),n;}},{key:'getTopTab',value:function(t,e){var n=document.createElement('li');n.classList.add('nav-item');var r=document.createElement('a');return r.classList.add('nav-link'),r.setAttribute('href','#'.concat(e)),r.setAttribute('data-toggle','tab'),r.appendChild(t),n.appendChild(r),n;}},{key:'getTabContent',value:function(){var t=document.createElement('div');return t.classList.add('tab-pane'),t.setAttribute('role','tabpanel'),t;}},{key:'getTopTabContent',value:function(){var t=document.createElement('div');return t.classList.add('tab-pane'),t.setAttribute('role','tabpanel'),t;}},{key:'markTabActive',value:function(t){t.tab.firstChild.classList.add('active'),void 0!==t.rowPane?t.rowPane.classList.add('active'):t.container.classList.add('active');}},{key:'markTabInactive',value:function(t){t.tab.firstChild.classList.remove('active'),void 0!==t.rowPane?t.rowPane.classList.remove('active'):t.container.classList.remove('active');}},{key:'insertBasicTopTab',value:function(t,e){e.children[0].children[0].insertBefore(t,e.children[0].children[0].firstChild);}},{key:'addTopTab',value:function(t,e){t.children[0].children[0].appendChild(e);}},{key:'getTopTabContentHolder',value:function(t){return t.children[1].children[0];}},{key:'getFirstTab',value:function(t){return t.firstChild.firstChild.firstChild;}},{key:'getProgressBar',value:function(){var t=document.createElement('div');t.classList.add('progress');var e=document.createElement('div');return e.classList.add('progress-bar'),e.setAttribute('role','progressbar'),e.setAttribute('aria-valuenow',0),e.setAttribute('aria-valuemin',0),e.setAttribute('aria-valuenax',100),e.innerHTML=''.concat(0,'%'),t.appendChild(e),t;}},{key:'updateProgressBar',value:function(t,e){if(t){var n=t.firstChild,r=''.concat(e,'%');n.setAttribute('aria-valuenow',e),n.style.width=r,n.innerHTML=r;}}},{key:'updateProgressBarUnknown',value:function(t){if(t){var e=t.firstChild;t.classList.add('progress','progress-striped','active'),e.removeAttribute('aria-valuenow'),e.style.width='100%',e.innerHTML='';}}},{key:'getBlockLink',value:function(){var t=document.createElement('a');return t.classList.add('mb-3','d-inline-block'),t;}},{key:'getLinksHolder',value:function(){return document.createElement('div');}},{key:'getInputGroup',value:function(t,e){if(t){var n=document.createElement('div');n.classList.add('input-group'),n.appendChild(t);var r=document.createElement('div');r.classList.add('input-group-append'),n.appendChild(r);for(var i=0;i<e.length;i++)e[i].classList.remove('mr-2','btn-secondary'),e[i].classList.add('btn-outline-secondary'),r.appendChild(e[i]);return n;}}}])&&fs(e.prototype,n),r&&fs(e,r),o;}($a);function ks(t){return(ks='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function xs(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function js(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Os(t,e,n){return(Os='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Ps(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Cs(t,e){return(Cs=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Es(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Ps(t);if(e){var i=Ps(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ss(this,n);};}function Ss(t,e){return!e||'object'!==ks(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Ps(t){return(Ps=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}ws.rules={'.jsoneditor-twbs4-text-button':'background:none;padding:0;border:0;color:currentColor','td > .form-group':'margin-bottom:0','.json-editor-btn-upload':'margin-top:1rem','.je-noindent .card':'padding:0;border:0','.je-tooltip:hover::before':'display:block;position:absolute;font-size:0.8em;color:%23fff;border-radius:0.2em;content:attr(title);background-color:%23000;margin-top:-2.5em;padding:0.3em','.je-tooltip:hover::after':'display:block;position:absolute;font-size:0.8em;color:%23fff','.select2-container--default .select2-selection--single':'height:calc(1.5em%20%2B%200.75rem%20%2B%202px)','.select2-container--default   .select2-selection--single   .select2-selection__arrow':'height:calc(1.5em%20%2B%200.75rem%20%2B%202px)','.select2-container--default   .select2-selection--single   .select2-selection__rendered':'line-height:calc(1.5em%20%2B%200.75rem%20%2B%202px)','.selectize-control.form-control':'padding:0','.selectize-dropdown.form-control':'padding:0;height:auto','.je-upload-preview img':'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem','.je-dropzone':'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s','.je-dropzone:before':'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)','.je-dropzone.valid-dropzone':'background:green','.je-dropzone.invalid-dropzone':'background:red'};var Rs=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Cs(t,e);}(o,t);var e,n,r,i=Es(o);function o(){return xs(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'getTable',value:function(){var t=Os(Ps(o.prototype),'getTable',this).call(this);return t.setAttribute('cellpadding',5),t.setAttribute('cellspacing',0),t;}},{key:'getTableHeaderCell',value:function(t){var e=Os(Ps(o.prototype),'getTableHeaderCell',this).call(this,t);return e.classList.add('ui-state-active'),e.style.fontWeight='bold',e;}},{key:'getTableCell',value:function(){var t=Os(Ps(o.prototype),'getTableCell',this).call(this);return t.classList.add('ui-widget-content'),t;}},{key:'getHeaderButtonHolder',value:function(){var t=this.getButtonHolder();return t.style.marginLeft='10px',t.style.fontSize='.6em',t.style.display='inline-block',t;}},{key:'getFormInputDescription',value:function(t){var e=this.getDescription(t);return e.style.marginLeft='10px',e.style.display='inline-block',e;}},{key:'getFormControl',value:function(t,e,n,r){var i=Os(Ps(o.prototype),'getFormControl',this).call(this,t,e,n,r);return'checkbox'===e.type?(i.style.lineHeight='25px',i.style.padding='3px 0'):i.style.padding='4px 0 8px 0',i;}},{key:'getDescription',value:function(t){var e=document.createElement('span');return e.style.fontSize='.8em',e.style.fontStyle='italic',window.DOMPurify?e.innerHTML=window.DOMPurify.sanitize(t):e.textContent=this.cleanText(t),e;}},{key:'getButtonHolder',value:function(){var t=document.createElement('div');return t.classList.add('ui-buttonset'),t.style.fontSize='.7em',t;}},{key:'getFormInputLabel',value:function(t,e){var n=document.createElement('label');return n.style.fontWeight='bold',n.style.display='block',n.textContent=t,e&&n.classList.add('required'),n;}},{key:'getButton',value:function(t,e,n){var r=document.createElement('button');r.classList.add('ui-button','ui-widget','ui-state-default','ui-corner-all'),e&&!t?(r.classList.add('ui-button-icon-only'),e.classList.add('ui-button-icon-primary','ui-icon-primary'),r.appendChild(e)):e?(r.classList.add('ui-button-text-icon-primary'),e.classList.add('ui-button-icon-primary','ui-icon-primary'),r.appendChild(e)):r.classList.add('ui-button-text-only');var i=document.createElement('span');return i.classList.add('ui-button-text'),i.textContent=t||n||'.',r.appendChild(i),r.setAttribute('title',n),r;}},{key:'setButtonText',value:function(t,e,n,r){t.innerHTML='',t.classList.add('ui-button','ui-widget','ui-state-default','ui-corner-all'),n&&!e?(t.classList.add('ui-button-icon-only'),n.classList.add('ui-button-icon-primary','ui-icon-primary'),t.appendChild(n)):n?(t.classList.add('ui-button-text-icon-primary'),n.classList.add('ui-button-icon-primary','ui-icon-primary'),t.appendChild(n)):t.classList.add('ui-button-text-only');var i=document.createElement('span');i.classList.add('ui-button-text'),i.textContent=e||r||'.',t.appendChild(i),t.setAttribute('title',r);}},{key:'getIndentedPanel',value:function(){var t=document.createElement('div');return t.classList.add('ui-widget-content','ui-corner-all'),t.style.padding='1em 1.4em',t.style.marginBottom='20px',t;}},{key:'afterInputReady',value:function(t){if(!t.controls&&(t.controls=this.closest(t,'.form-control'),this.queuedInputErrorText)){var e=this.queuedInputErrorText;delete this.queuedInputErrorText,this.addInputError(t,e);}}},{key:'addInputError',value:function(t,e){t.controls?(t.errmsg?t.errmsg.style.display='':(t.errmsg=document.createElement('div'),t.errmsg.classList.add('ui-state-error'),t.controls.appendChild(t.errmsg)),t.errmsg.textContent=e):this.queuedInputErrorText=e;}},{key:'removeInputError',value:function(t){t.controls||delete this.queuedInputErrorText,t.errmsg&&(t.errmsg.style.display='none');}},{key:'markTabActive',value:function(t){t.tab.classList.remove('ui-widget-header'),t.tab.classList.add('ui-state-active'),void 0!==t.rowPane?t.rowPane.style.display='':t.container.style.display='';}},{key:'markTabInactive',value:function(t){t.tab.classList.add('ui-widget-header'),t.tab.classList.remove('ui-state-active'),void 0!==t.rowPane?t.rowPane.style.display='none':t.container.style.display='none';}}])&&js(e.prototype,n),r&&js(e,r),o;}($a);Rs.rules={'div[data-schemaid="root"]:after':'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"'};function Ls(t){return(Ls='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Ts(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function As(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Is(t,e){return(Is=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Ds(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Bs(t);if(e){var i=Bs(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ns(this,n);};}function Ns(t,e){return!e||'object'!==Ls(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Bs(t){return(Bs=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var Fs=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Is(t,e);}(o,t);var e,n,r,i=Ds(o);function o(){return Ts(this,o),i.apply(this,arguments);}return e=o,(n=[{key:'addInputError',value:function(t,e){if(t.errmsg)t.errmsg.style.display='block';else{var n=this.closest(t,'.form-control');t.errmsg=document.createElement('div'),t.errmsg.setAttribute('class','errmsg'),n.appendChild(t.errmsg);}t.errmsg.innerHTML='',t.errmsg.appendChild(document.createTextNode(e));}},{key:'removeInputError',value:function(t){t.style&&(t.style.borderColor=''),t.errmsg&&(t.errmsg.style.display='none');}}])&&As(e.prototype,n),r&&As(e,r),o;}($a);Fs.rules={'.je-upload-preview img':'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem','.je-dropzone':'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s','.je-dropzone:before':'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)','.je-dropzone.valid-dropzone':'background:green','.je-dropzone.invalid-dropzone':'background:red'};function Vs(t){return(Vs='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Hs(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function zs(t,e,n){return(zs='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Gs(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Ms(t,e){return(Ms=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function qs(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=Gs(t);if(e){var i=Gs(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Us(this,n);};}function Us(t,e){return!e||'object'!==Vs(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function Gs(t){return(Gs=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var $s={disable_theme_rules:!1,label_bold:!0,align_bottom:!1,object_indent:!1,object_border:!1,table_border:!1,table_zebrastyle:!1,input_size:'normal'},Js=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ms(t,e);}(o,t);var e,n,r,i=qs(o);function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,o),i.call(this,t,$s);}return e=o,(n=[{key:'setGridColumnSize',value:function(t,e,n){t.classList.add('col-'.concat(e)),n&&t.classList.add('col-mx-auto');}},{key:'getGridContainer',value:function(){var t=document.createElement('div');return t.classList.add('container'),this.options.object_indent||t.classList.add('je-noindent'),t;}},{key:'getGridRow',value:function(){var t=document.createElement('div');return t.classList.add('columns'),t;}},{key:'getGridColumn',value:function(){var t=document.createElement('div');return t.classList.add('column'),this.options.align_bottom&&t.classList.add('je-align-bottom'),t;}},{key:'getIndentedPanel',value:function(){var t=document.createElement('div');return t.classList.add('je-panel'),this.options.object_border&&t.classList.add('je-border'),t;}},{key:'getTopIndentedPanel',value:function(){var t=document.createElement('div');return t.classList.add('je-panel-top'),this.options.object_border&&t.classList.add('je-border'),t;}},{key:'getHeaderButtonHolder',value:function(){return this.getButtonHolder();}},{key:'getButtonHolder',value:function(){var t=zs(Gs(o.prototype),'getButtonHolder',this).call(this);return t.classList.add('btn-group'),t;}},{key:'getFormButtonHolder',value:function(t){var e=zs(Gs(o.prototype),'getFormButtonHolder',this).call(this);return e.classList.remove('btn-group'),e.classList.add('d-block'),'center'===t?e.classList.add('text-center'):'right'===t?e.classList.add('text-right'):e.classList.add('text-left'),e;}},{key:'getFormButton',value:function(t,e,n){var r=zs(Gs(o.prototype),'getFormButton',this).call(this,t,e,n);return r.classList.add('btn','btn-primary','mx-2','my-1'),'small'!==this.options.input_size&&r.classList.remove('btn-sm'),'large'===this.options.input_size&&r.classList.add('btn-lg'),r;}},{key:'getButton',value:function(t,e,n){var r=zs(Gs(o.prototype),'getButton',this).call(this,t,e,n);return r.classList.add('btn','btn-sm','btn-primary','mr-2','my-1'),r;}},{key:'getHeader',value:function(t,e){var n=document.createElement('h4');return'string'==typeof t?n.textContent=t:n.appendChild(t),n.style.display='inline-block',n;}},{key:'getFormInputDescription',value:function(t){var e=zs(Gs(o.prototype),'getFormInputDescription',this).call(this,t);return e.classList.add('je-desc','hide-sm'),e;}},{key:'getFormInputLabel',value:function(t,e){var n=zs(Gs(o.prototype),'getFormInputLabel',this).call(this,t,e);return this.options.label_bold&&n.classList.add('je-label'),n;}},{key:'getCheckbox',value:function(){return this.getFormInputField('checkbox');}},{key:'getCheckboxLabel',value:function(t,e){var n=zs(Gs(o.prototype),'getCheckboxLabel',this).call(this,t,e),r=document.createElement('i');return r.classList.add('form-icon'),n.classList.add('form-checkbox','mr-5'),n.insertBefore(r,n.firstChild),n;}},{key:'getFormCheckboxControl',value:function(t,e,n){return t.insertBefore(e,t.firstChild),n&&t.classList.add('form-inline'),t;}},{key:'getMultiCheckboxHolder',value:function(t,e,n,r){return zs(Gs(o.prototype),'getMultiCheckboxHolder',this).call(this,t,e,n,r);}},{key:'getFormRadio',value:function(t){var e=this.getFormInputField('radio');for(var n in t)e.setAttribute(n,t[n]);return e;}},{key:'getFormRadioLabel',value:function(t,e){var n=zs(Gs(o.prototype),'getFormRadioLabel',this).call(this,t,e),r=document.createElement('i');return r.classList.add('form-icon'),n.classList.add('form-radio'),n.insertBefore(r,n.firstChild),n;}},{key:'getFormRadioControl',value:function(t,e,n){return t.insertBefore(e,t.firstChild),n&&t.classList.add('form-inline'),t;}},{key:'getFormInputField',value:function(t){var e=zs(Gs(o.prototype),'getFormInputField',this).call(this,t);return['checkbox','radio'].includes(t)||e.classList.add('form-input'),e;}},{key:'getRangeInput',value:function(t,e,n){var r=this.getFormInputField('range');return r.classList.add('slider'),r.classList.remove('form-input'),r.setAttribute('oninput','this.setAttribute("value", this.value)'),r.setAttribute('min',t),r.setAttribute('max',e),r.setAttribute('step',n),r;}},{key:'getRangeControl',value:function(t,e){var n=zs(Gs(o.prototype),'getRangeControl',this).call(this,t,e);return n.classList.add('text-center'),n;}},{key:'getSelectInput',value:function(t,e){var n=zs(Gs(o.prototype),'getSelectInput',this).call(this,t);return n.classList.add('form-select'),n;}},{key:'getTextareaInput',value:function(){var t=document.createElement('textarea');return t.classList.add('form-input'),t;}},{key:'getFormControl',value:function(t,e,n,r){var i=document.createElement('div');return i.classList.add('form-group'),!t||'checkbox'!==e.type&&'radio'!==e.type?(t&&(t.classList.add('form-label'),i.appendChild(t),r&&t.appendChild(r)),i.appendChild(e)):(i.classList.add(e.type),t.insertBefore(e,t.firstChild),i.appendChild(t)),'small'===this.options.input_size?e.classList.add('input-sm','select-sm'):'large'===this.options.input_size&&e.classList.add('input-lg','select-lg'),'checkbox'!==e.type&&i.appendChild(e),n&&i.appendChild(n),i;}},{key:'getInputGroup',value:function(t,e){if(t){var n=document.createElement('div');n.classList.add('input-group'),n.appendChild(t);for(var r=0;r<e.length;r++)e[r].classList.add('input-group-btn'),e[r].classList.remove('btn-sm','mr-2','my-1'),n.appendChild(e[r]);return n;}}},{key:'getInfoButton',value:function(t){var e=document.createElement('div');e.classList.add('popover','popover-left','float-right');var n=document.createElement('button');n.classList.add('btn','btn-secondary','btn-info','btn-action','s-circle'),n.setAttribute('tabindex','-1'),e.appendChild(n);var r=document.createTextNode('I');n.appendChild(r);var i=document.createElement('div');i.classList.add('popover-container'),e.appendChild(i);var o=document.createElement('div');o.classList.add('card'),i.appendChild(o);var a=document.createElement('div');return a.classList.add('card-body'),a.innerHTML=t,o.appendChild(a),e;}},{key:'getTable',value:function(){var t=zs(Gs(o.prototype),'getTable',this).call(this);return t.classList.add('table','table-scroll'),this.options.table_border&&t.classList.add('je-table-border'),this.options.table_zebrastyle&&t.classList.add('table-striped'),t;}},{key:'getProgressBar',value:function(){var t=zs(Gs(o.prototype),'getProgressBar',this).call(this);return t.classList.add('progress'),t;}},{key:'getTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.classList.add('columns'),n.innerHTML='<div class="column col-2"></div><div class="column col-10 content" id="'.concat(e,'"></div>'),n;}},{key:'getTopTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.innerHTML='<ul class="tab"></ul><div class="content" id="'.concat(e,'"></div>'),n;}},{key:'getTab',value:function(t,e){var n=document.createElement('a');return n.classList.add('btn','btn-secondary','btn-block'),n.setAttribute('href','#'.concat(e)),n.appendChild(t),n;}},{key:'getTopTab',value:function(t,e){var n=document.createElement('li');n.id=e,n.classList.add('tab-item');var r=document.createElement('a');return r.setAttribute('href','#'.concat(e)),r.appendChild(t),n.appendChild(r),n;}},{key:'markTabActive',value:function(t){t.tab.classList.add('active'),void 0!==t.rowPane?t.rowPane.style.display='':t.container.style.display='';}},{key:'markTabInactive',value:function(t){t.tab.classList.remove('active'),void 0!==t.rowPane?t.rowPane.style.display='none':t.container.style.display='none';}},{key:'afterInputReady',value:function(t){if('select'===t.localName)if(t.classList.contains('selectized')){var e=t.nextSibling;e&&(e.classList.remove('form-select'),Array.from(e.querySelectorAll('.form-select')).forEach(function(t){t.classList.remove('form-select');}));}else if(t.classList.contains('select2-hidden-accessible')){var n=t.nextSibling;n&&n.querySelector('.select2-selection--single')&&n.classList.add('form-select');}t.controlgroup||(t.controlgroup=this.closest(t,'.form-group'),this.closest(t,'.compact')&&(t.controlgroup.style.marginBottom=0));}},{key:'addInputError',value:function(t,e){t.controlgroup&&(t.controlgroup.classList.add('has-error'),t.errmsg||(t.errmsg=document.createElement('p'),t.errmsg.classList.add('form-input-hint'),t.controlgroup.appendChild(t.errmsg)),t.errmsg.classList.remove('d-hide'),t.errmsg.textContent=e);}},{key:'removeInputError',value:function(t){t.errmsg&&(t.errmsg.classList.add('d-hide'),t.controlgroup.classList.remove('has-error'));}}])&&Hs(e.prototype,n),r&&Hs(e,r),o;}($a);Js.rules={'*':'--primary-color:%235755d9;--gray-color:%23bcc3ce;--light-color:%23fff','.slider:focus':'box-shadow:none','h4 > label + .btn-group':'margin-left:1rem','.text-right > button':'margin-right:0%20!important','.text-left > button':'margin-left:0%20!important','.property-selector':'font-size:0.7rem;font-weight:normal;max-height:260px%20!important;width:395px%20!important','.property-selector .form-checkbox':'margin:0',textarea:'width:100%25;min-height:2rem;resize:vertical',table:'border-collapse:collapse','.table td':'padding:0.4rem%200.4rem','.mr-5':'margin-right:1rem%20!important',"div[data-schematype]:not([data-schematype='object'])":'transition:0.5s',"div[data-schematype]:not([data-schematype='object']):hover":'background-color:%23eee','.je-table-border td':'border:0.05rem%20solid%20%23dadee4%20!important','.btn-info':'font-size:0.5rem;font-weight:bold;height:0.8rem;padding:0.15rem%200;line-height:0.8;margin:0.3rem%200%200.3rem%200.1rem','.je-label + select':'min-width:5rem','.je-label':'font-weight:600','.btn-action.btn-info':'width:0.8rem','.je-border':'border:0.05rem%20solid%20%23dadee4','.je-panel':'padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)','.je-panel-top':'padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)','.required:after':'content:%22%20*%22;color:red;font:inherit','.je-align-bottom':'margin-top:auto','.je-desc':'font-size:smaller;margin:0.2rem%200','.je-upload-preview img':'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem;border:3px%20solid%20white;box-shadow:0px%200px%208px%20rgba(0%2C%200%2C%200%2C%200.3);box-sizing:border-box','.je-dropzone':'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s','.je-dropzone:before':'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)','.je-dropzone.valid-dropzone':'background:green','.je-dropzone.invalid-dropzone':'background:red','.columns .container.je-noindent':'padding-left:0;padding-right:0','.selectize-control.multi .item':'background:var(--primary-color)%20!important','.select2-container--default   .select2-selection--single   .select2-selection__arrow':'display:none','.select2-container--default .select2-selection--single':'border:none','.select2-container .select2-selection--single .select2-selection__rendered':'padding:0','.select2-container .select2-search--inline .select2-search__field':'margin-top:0','.select2-container--default.select2-container--focus   .select2-selection--multiple':'border:0.05rem%20solid%20var(--gray-color)','.select2-container--default   .select2-selection--multiple   .select2-selection__choice':'margin:0.4rem%200.2rem%200.2rem%200;padding:2px%205px;background-color:var(--primary-color);color:var(--light-color)','.select2-container--default .select2-search--inline .select2-search__field':'line-height:normal','.choices':'margin-bottom:auto','.choices__list--multiple .choices__item':'border:none;background-color:var(--primary-color);color:var(--light-color)',".choices[data-type*='select-multiple'] .choices__button":'border-left:0.05rem%20solid%20%232826a6','.choices__inner':'font-size:inherit;min-height:20px;padding:4px%207.5px%204px%203.75px',".choices[data-type*='select-one'] .choices__inner":'padding-bottom:4px','.choices__list--dropdown .choices__item':'font-size:inherit'};function Ws(t){return(Ws='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;})(t);}function Zs(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function Qs(t,e,n){return(Qs='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=tl(t)););return t;}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}})(t,e,n||t);}function Ys(t,e){return(Ys=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function Xs(t){var e=function(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}();return function(){var n,r=tl(t);if(e){var i=tl(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return Ks(this,n);};}function Ks(t,e){return!e||'object'!==Ws(e)&&'function'!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function tl(t){return(tl=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}var el={disable_theme_rules:!1,label_bold:!1,object_panel_default:!0,object_indent:!0,object_border:!1,table_border:!1,table_hdiv:!1,table_zebrastyle:!1,input_size:'small',enable_compact:!1},nl=function(t){!function(t,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ys(t,e);}(o,t);var e,n,r,i=Xs(o);function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,o),i.call(this,t,el);}return e=o,(n=[{key:'getGridContainer',value:function(){var t=document.createElement('div');return t.classList.add('flex','flex-col','w-full'),this.options.object_indent||t.classList.add('je-noindent'),t;}},{key:'getGridRow',value:function(){var t=document.createElement('div');return t.classList.add('flex','flex-wrap','w-full'),t;}},{key:'getGridColumn',value:function(){var t=document.createElement('div');return t.classList.add('flex','flex-col'),t;}},{key:'setGridColumnSize',value:function(t,e,n){e>0&&e<12?t.classList.add('w-'.concat(e,'/12'),'px-1'):t.classList.add('w-full','px-1'),n&&(t.style.marginLeft=''.concat(100/12*n,'%'));}},{key:'getIndentedPanel',value:function(){var t=document.createElement('div');return this.options.object_panel_default?t.classList.add('w-full','p-1'):t.classList.add('relative','flex','flex-col','rounded','break-words','border','bg-white','border-0','border-blue-400','p-1','shadow-md'),this.options.object_border&&t.classList.add('je-border'),t;}},{key:'getTopIndentedPanel',value:function(){var t=document.createElement('div');return this.options.object_panel_default?t.classList.add('w-full','m-2'):t.classList.add('relative','flex','flex-col','rounded','break-words','border','bg-white','border-0','border-blue-400','p-1','shadow-md'),this.options.object_border&&t.classList.add('je-border'),t;}},{key:'getTitle',value:function(){return this.translateProperty(this.schema.title);}},{key:'getSelectInput',value:function(t,e){var n=Qs(tl(o.prototype),'getSelectInput',this).call(this,t);return e?n.classList.add('form-multiselect','block','py-0','h-auto','w-full','px-1','text-sm','text-black','leading-normal','bg-white','border','border-grey','rounded'):n.classList.add('form-select','block','py-0','h-6','w-full','px-1','text-sm','text-black','leading-normal','bg-white','border','border-grey','rounded'),this.options.enable_compact&&n.classList.add('compact'),n;}},{key:'afterInputReady',value:function(t){t.controlgroup||(t.controlgroup=this.closest(t,'.form-group'),this.closest(t,'.compact')&&(t.controlgroup.style.marginBottom=0));}},{key:'getTextareaInput',value:function(){var t=Qs(tl(o.prototype),'getTextareaInput',this).call(this);return t.classList.add('block','w-full','px-1','text-sm','leading-normal','bg-white','text-black','border','border-grey','rounded'),this.options.enable_compact&&t.classList.add('compact'),t.style.height=0,t;}},{key:'getRangeInput',value:function(t,e,n){var r=this.getFormInputField('range');return r.classList.add('slider'),this.options.enable_compact&&r.classList.add('compact'),r.setAttribute('oninput','this.setAttribute("value", this.value)'),r.setAttribute('min',t),r.setAttribute('max',e),r.setAttribute('step',n),r;}},{key:'getRangeControl',value:function(t,e){var n=Qs(tl(o.prototype),'getRangeControl',this).call(this,t,e);return n.classList.add('text-center','text-black'),n;}},{key:'getCheckbox',value:function(){var t=this.getFormInputField('checkbox');return t.classList.add('form-checkbox','text-red-600'),t;}},{key:'getCheckboxLabel',value:function(t,e){var n=Qs(tl(o.prototype),'getCheckboxLabel',this).call(this,t,e);return n.classList.add('inline-flex','items-center'),n;}},{key:'getFormCheckboxControl',value:function(t,e,n){return t.insertBefore(e,t.firstChild),n&&t.classList.add('inline-flex flex-row'),t;}},{key:'getMultiCheckboxHolder',value:function(t,e,n,r){var i=Qs(tl(o.prototype),'getMultiCheckboxHolder',this).call(this,t,e,n,r);return i.classList.add('inline-flex','flex-col'),i;}},{key:'getFormRadio',value:function(t){var e=this.getFormInputField('radio');for(var n in e.classList.add('form-radio','text-red-600'),t)e.setAttribute(n,t[n]);return e;}},{key:'getFormRadioLabel',value:function(t,e){var n=Qs(tl(o.prototype),'getFormRadioLabel',this).call(this,t,e);return n.classList.add('inline-flex','items-center','mr-2'),n;}},{key:'getFormRadioControl',value:function(t,e,n){return t.insertBefore(e,t.firstChild),n&&t.classList.add('form-radio'),t;}},{key:'getRadioHolder',value:function(t,e,n,r,i){var a=Qs(tl(o.prototype),'getRadioHolder',this).call(this,e,n,r,i);return'h'===t.options.layout?a.classList.add('inline-flex','flex-row'):a.classList.add('inline-flex','flex-col'),a;}},{key:'getFormInputLabel',value:function(t,e){var n=Qs(tl(o.prototype),'getFormInputLabel',this).call(this,t,e);return this.options.label_bold?n.classList.add('font-bold'):n.classList.add('required'),n;}},{key:'getFormInputField',value:function(t){var e=Qs(tl(o.prototype),'getFormInputField',this).call(this,t);return['checkbox','radio'].includes(t)||e.classList.add('block','w-full','px-1','text-black','text-sm','leading-normal','bg-white','border','border-grey','rounded'),this.options.enable_compact&&e.classList.add('compact'),e;}},{key:'getFormInputDescription',value:function(t){var e=document.createElement('p');return e.classList.add('block','mt-1','text-xs'),window.DOMPurify?e.innerHTML=window.DOMPurify.sanitize(t):e.textContent=this.cleanText(t),e;}},{key:'getFormControl',value:function(t,e,n,r){var i=document.createElement('div');return i.classList.add('form-group','mb-1','w-full'),t&&(t.classList.add('text-xs'),'checkbox'===e.type&&(e.classList.add('form-checkbox','text-xs','text-red-600','mr-1'),t.classList.add('items-center','flex'),t=this.getFormCheckboxControl(t,e,!1,r)),'radio'===e.type&&(e.classList.add('form-radio','text-red-600','mr-1'),t.classList.add('items-center','flex'),t=this.getFormRadioControl(t,e,!1,r)),i.appendChild(t),!['checkbox','radio'].includes(e.type)&&r&&i.appendChild(r)),['checkbox','radio'].includes(e.type)||('small'===this.options.input_size?e.classList.add('text-xs'):'normal'===this.options.input_size?e.classList.add('text-base'):'large'===this.options.input_size&&e.classList.add('text-xl'),i.appendChild(e)),n&&i.appendChild(n),i;}},{key:'getHeaderButtonHolder',value:function(){var t=this.getButtonHolder();return t.classList.add('text-sm'),t;}},{key:'getButtonHolder',value:function(){var t=document.createElement('div');return t.classList.add('flex','relative','inline-flex','align-middle'),t;}},{key:'getButton',value:function(t,e,n){var r=Qs(tl(o.prototype),'getButton',this).call(this,t,e,n);return r.classList.add('inline-block','align-middle','text-center','text-sm','bg-blue-700','text-white','py-1','pr-1','m-2','shadow','select-none','whitespace-no-wrap','rounded'),r;}},{key:'getInfoButton',value:function(t){var e=document.createElement('a');e.classList.add('tooltips','float-right'),e.innerHTML='ⓘ';var n=document.createElement('span');return n.innerHTML=t,e.appendChild(n),e;}},{key:'getTable',value:function(){var t=Qs(tl(o.prototype),'getTable',this).call(this);return this.options.table_border?t.classList.add('je-table-border'):t.classList.add('table','border','p-0'),t;}},{key:'getTableRow',value:function(){var t=Qs(tl(o.prototype),'getTableRow',this).call(this);return this.options.table_border&&t.classList.add('je-table-border'),this.options.table_zebrastyle&&t.classList.add('je-table-zebra'),t;}},{key:'getTableHeaderCell',value:function(t){var e=Qs(tl(o.prototype),'getTableHeaderCell',this).call(this,t);return this.options.table_border?e.classList.add('je-table-border'):this.options.table_hdiv?e.classList.add('je-table-hdiv'):e.classList.add('text-xs','border','p-0','m-0'),e;}},{key:'getTableCell',value:function(){var t=Qs(tl(o.prototype),'getTableCell',this).call(this);return this.options.table_border?t.classList.add('je-table-border'):this.options.table_hdiv?t.classList.add('je-table-hdiv'):t.classList.add('border-0','p-0','m-0'),t;}},{key:'addInputError',value:function(t,e){t.controlgroup&&(t.controlgroup.classList.add('has-error'),t.classList.add('bg-red-600'),t.errmsg?t.errmsg.style.display='':(t.errmsg=document.createElement('p'),t.errmsg.classList.add('block','mt-1','text-xs','text-red'),t.controlgroup.appendChild(t.errmsg)),t.errmsg.textContent=e);}},{key:'removeInputError',value:function(t){t.errmsg&&(t.errmsg.style.display='none',t.classList.remove('bg-red-600'),t.controlgroup.classList.remove('has-error'));}},{key:'getTabHolder',value:function(t){var e=document.createElement('div'),n=void 0===t?'':t;return e.innerHTML="<div class='w-2/12' id='".concat(n,"'><ul class='list-reset pl-0 mb-0'></ul></div><div class='w-10/12' id='").concat(n,"'></div>"),e.classList.add('flex'),e;}},{key:'addTab',value:function(t,e){t.children[0].children[0].appendChild(e);}},{key:'getTopTabHolder',value:function(t){var e=void 0===t?'':t,n=document.createElement('div');return n.innerHTML="<ul class='nav-tabs flex list-reset pl-0 mb-0 border-b border-grey-light' id='".concat(e,"'></ul><div class='p-6 block' id='").concat(e,"'></div>"),n;}},{key:'getTab',value:function(t,e){var n=document.createElement('li');n.classList.add('nav-item','flex-col','text-center','text-white','bg-blue-500','shadow-md','border','p-2','mb-2','mr-2','hover:bg-blue-400','rounded');var r=document.createElement('a');return r.classList.add('nav-link','text-center'),r.setAttribute('href','#'.concat(e)),r.setAttribute('data-toggle','tab'),r.appendChild(t),n.appendChild(r),n;}},{key:'getTopTab',value:function(t,e){var n=document.createElement('li');n.classList.add('nav-item','flex','border-l','border-t','border-r');var r=document.createElement('a');return r.classList.add('nav-link','-mb-px','flex-row','text-center','bg-white','p-2','hover:bg-blue-400','rounded-t'),r.setAttribute('href','#'.concat(e)),r.setAttribute('data-toggle','tab'),r.appendChild(t),n.appendChild(r),n;}},{key:'getTabContent',value:function(){var t=document.createElement('div');return t.setAttribute('role','tabpanel'),t;}},{key:'getTopTabContent',value:function(){var t=document.createElement('div');return t.setAttribute('role','tabpanel'),t;}},{key:'markTabActive',value:function(t){t.tab.firstChild.classList.add('block'),!0===t.tab.firstChild.classList.contains('border-b')?(t.tab.firstChild.classList.add('border-b-0'),t.tab.firstChild.classList.remove('border-b')):t.tab.firstChild.classList.add('border-b-0'),!0===t.container.classList.contains('hidden')?(t.container.classList.remove('hidden'),t.container.classList.add('block')):t.container.classList.add('block');}},{key:'markTabInactive',value:function(t){!0===t.tab.firstChild.classList.contains('border-b-0')?(t.tab.firstChild.classList.add('border-b'),t.tab.firstChild.classList.remove('border-b-0')):t.tab.firstChild.classList.add('border-b'),!0===t.container.classList.contains('block')&&(t.container.classList.remove('block'),t.container.classList.add('hidden'));}},{key:'getProgressBar',value:function(){var t=document.createElement('div');t.classList.add('progress');var e=document.createElement('div');return e.classList.add('bg-blue','leading-none','py-1','text-xs','text-center','text-white'),e.setAttribute('role','progressbar'),e.setAttribute('aria-valuenow',0),e.setAttribute('aria-valuemin',0),e.setAttribute('aria-valuenax',100),e.innerHTML=''.concat(0,'%'),t.appendChild(e),t;}},{key:'updateProgressBar',value:function(t,e){if(t){var n=t.firstChild,r=''.concat(e,'%');n.setAttribute('aria-valuenow',e),n.style.width=r,n.innerHTML=r;}}},{key:'updateProgressBarUnknown',value:function(t){if(t){var e=t.firstChild;t.classList.add('progress','bg-blue','leading-none','py-1','text-xs','text-center','text-white','block'),e.removeAttribute('aria-valuenow'),e.classList.add('w-full'),e.innerHTML='';}}},{key:'getInputGroup',value:function(t,e){if(t){var n=document.createElement('div');n.classList.add('relative','items-stretch','w-full'),n.appendChild(t);var r=document.createElement('div');r.classList.add('-mr-1'),n.appendChild(r);for(var i=0;i<e.length;i++)r.appendChild(e[i]);return n;}}}])&&Zs(e.prototype,n),r&&Zs(e,r),o;}($a);nl.rules={'.slider':'-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;display:block;border:none;height:1.2rem;width:100%25','.slider:focus':'box-shadow:0%200%200%200%20rgba(87%2C%2085%2C%20217%2C%200.2);outline:none','.slider.tooltip:not([data-tooltip])::after':'content:attr(value)','.slider::-webkit-slider-thumb':'-webkit-appearance:none;background:%23f17405;border-radius:100%25;height:0.6rem;margin-top:-0.25rem;transition:transform%200.2s;width:0.6rem','.slider:active::-webkit-slider-thumb':'transform:scale(1.25);outline:none','.slider::-webkit-slider-runnable-track':'background:%23b2b4b6;border-radius:0.1rem;height:0.1rem;width:100%25','a.tooltips':'position:relative;display:inline','a.tooltips span':'position:absolute;white-space:nowrap;width:auto;padding-left:1rem;padding-right:1rem;color:%23ffffff;background:rgba(56%2C%2056%2C%2056%2C%200.85);height:1.5rem;line-height:1.5rem;text-align:center;visibility:hidden;border-radius:3px','a.tooltips span:after':'content:%22%22;position:absolute;top:50%25;left:100%25;margin-top:-5px;width:0;height:0;border-left:5px%20solid%20rgba(56%2C%2056%2C%2056%2C%200.85);border-top:5px%20solid%20transparent;border-bottom:5px%20solid%20transparent','a:hover.tooltips span':'visibility:visible;opacity:0.9;font-size:0.8rem;right:100%25;top:50%25;margin-top:-12px;margin-right:10px;z-index:999','.json-editor-btntype-properties + div':'font-size:0.8rem;font-weight:normal',textarea:'width:100%25;min-height:2rem;resize:vertical',table:'width:100%25;border-collapse:collapse','.table td':'padding:0rem%200rem',"div[data-schematype]:not([data-schematype='object'])":'transition:0.5s',"div[data-schematype]:not([data-schematype='object']):hover":'background-color:%23e6f4fe',"div[data-schemaid='root']":'position:relative;width:inherit;display:inherit;overflow-x:hidden;z-index:10','select[multiple]':'height:auto','select[multiple].from-select':'height:auto','.je-table-zebra:nth-child(even)':'background-color:%23f2f2f2','.je-table-border':'border:0.5px%20solid%20black','.je-table-hdiv':'border-bottom:1px%20solid%20black','.je-border':'border:0.05rem%20solid%20%233182ce','.je-panel':'width:inherit;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)','.je-panel-top':'width:100%25;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)','.required:after':'content:%22%20*%22;color:red;font:inherit;font-weight:bold','.je-desc':'font-size:smaller;margin:0.2rem%200','.container-xl.je-noindent':'padding-left:0;padding-right:0','.json-editor-btntype-add':'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%234299e1;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)','.json-editor-btntype-deletelast':'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23e53e3e;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)','.json-editor-btntype-deleteall':'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23000000;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)','.json-editor-btn-save':'float:right;color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)','.json-editor-btn-back':'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)','.json-editor-btntype-delete':'color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem','.json-editor-btntype-move':'color:%23000000;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem','.json-editor-btn-collapse':'padding:0em%200.8rem;font-size:1.3rem;color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)','.je-upload-preview img':'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem','.je-dropzone':'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s','.je-dropzone:before':'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)','.je-dropzone.valid-dropzone':'background:green','.je-dropzone.invalid-dropzone':'background:red'};var rl={html:es,bootstrap3:ps,bootstrap4:ws,jqueryui:Rs,barebones:Fs,spectre:Js,tailwind:nl},il={'.je-float-right-linkholder':'float:right;margin-left:10px','.je-modal':'background-color:white;border:1px%20solid%20black;box-shadow:3px%203px%20black;position:absolute;z-index:10','.je-infobutton-icon':'font-size:16px;font-weight:bold;padding:0.25rem;position:relative;display:inline-block','.je-infobutton-tooltip':'font-size:12px;font-weight:normal;font-family:sans-serif;visibility:hidden;background-color:rgba(50%2C%2050%2C%2050%2C%200.75);margin:0%200.25rem;color:%23fafafa;padding:0.5rem%201rem;border-radius:0.25rem;width:20rem;position:absolute','.je-header':'display:inline-block','.je-upload-preview img':'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem','.je-checkbox':'display:inline-block;width:auto','.je-checkbox-control--compact':'display:inline-block;margin-right:1rem','.je-radio':'display:inline-block;width:auto','.je-radio-control--compact':'display:inline-block;margin-right:1rem','.je-switcher':'background-color:transparent;display:inline-block;font-style:italic;font-weight:normal;height:auto;width:auto;margin-bottom:0;margin-left:5px;padding:0%200%200%203px','.je-textarea':'width:100%25;height:300px;box-sizing:border-box','.je-range-control':'text-align:center','.je-indented-panel':'padding-left:10px;margin-left:10px;border-left:1px%20solid%20%23ccc','.je-indented-panel--top':'padding-left:10px;margin-left:10px','.je-tabholder':'float:left;width:130px','.je-tabholder .content':'margin-left:120px','.je-tabholder--top':'margin-left:10px','.je-tabholder--clear':'clear:both','.je-tab':'border:1px%20solid%20%23ccc;border-width:1px%200%201px%201px;text-align:center;line-height:30px;border-radius:5px;border-bottom-right-radius:0;border-top-right-radius:0;font-weight:bold;cursor:pointer','.je-tab--top':'float:left;border:1px%20solid%20%23ccc;border-width:1px%201px%200px%201px;text-align:center;line-height:30px;border-radius:5px;padding-left:5px;padding-right:5px;border-bottom-right-radius:0;border-bottom-left-radius:0;font-weight:bold;cursor:pointer','.je-block-link':'display:block','.je-media':'width:100%25'};function ol(t){return function(t){if(Array.isArray(t))return al(t);}(t)||function(t){if('undefined'!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t);}(t)||function(t,e){if(!t)return;if('string'==typeof t)return al(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);'Object'===n&&t.constructor&&(n=t.constructor.name);if('Map'===n||'Set'===n)return Array.from(t);if('Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return al(t,e);}(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');}();}function al(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r;}function sl(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}function ll(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}var cl=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(sl(this,t),!(e instanceof Element))throw new Error('element should be an instance of Element');this.element=e,this.options=f({},t.defaults.options,r),this.ready=!1,this.copyClipboard=null,this.schema=this.options.schema,this.template=this.options.template,this.translate=this.options.translate||t.defaults.translate,this.translateProperty=this.options.translateProperty||t.defaults.translateProperty,this.uuid=0,this.__data={};var i=this.options.theme||t.defaults.theme,o=t.defaults.themes[i];if(!o)throw new Error('Unknown theme '.concat(i));this.element.setAttribute('data-theme',i),this.theme=new o(this);var a=f(il,this.getEditorsRules()),s=function(t,e,r){return r?n.addNewStyleRulesToShadowRoot(t,e,r):n.addNewStyleRules(t,e);};if(!this.theme.options.disable_theme_rules){var l=m(this.element);s('default',a,l),void 0!==o.rules&&s(i,o.rules,l);}var c=t.defaults.iconlibs[this.options.iconlib||t.defaults.iconlib];c&&(this.iconlib=new c()),this.root_container=this.theme.getContainer(),this.element.appendChild(this.root_container);var u=document.location.origin+document.location.pathname.toString(),h=new L(this.options),p=document.location.toString();this.expandSchema=function(t,e){return h.expandSchema(t,e);},this.expandRefs=function(t,e){return h.expandRefs(t,e);},this.refs=h.refs,h.load(this.schema,function(e){var r=n.options.custom_validators?{custom_validators:n.options.custom_validators}:{};n.validator=new C(n,null,r,t.defaults);var i=n.getEditorClass(e);n.root=n.createEditor(i,{jsoneditor:n,schema:e,required:!0,container:n.root_container}),n.root.preBuild(),n.root.build(),n.root.postBuild(),b(n.options,'startval')&&n.root.setValue(n.options.startval),n.validation_results=n.validator.validate(n.root.getValue()),n.root.showValidationErrors(n.validation_results),n.ready=!0,window.requestAnimationFrame(function(){n.ready&&(n.validation_results=n.validator.validate(n.root.getValue()),n.root.showValidationErrors(n.validation_results),n.trigger('ready'),n.trigger('change'));});},u,p);}var e,n,r;return e=t,(n=[{key:'getValue',value:function(){if(!this.ready)throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before getting the value");return this.root.getValue();}},{key:'setValue',value:function(t){if(!this.ready)throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before setting the value");return this.root.setValue(t),this;}},{key:'validate',value:function(t){if(!this.ready)throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before validating");return 1===arguments.length?this.validator.validate(t):this.validation_results;}},{key:'destroy',value:function(){this.destroyed||this.ready&&(this.schema=null,this.options=null,this.root.destroy(),this.root=null,this.root_container=null,this.validator=null,this.validation_results=null,this.theme=null,this.iconlib=null,this.template=null,this.__data=null,this.ready=!1,this.element.innerHTML='',this.element.removeAttribute('data-theme'),this.destroyed=!0);}},{key:'on',value:function(t,e){return this.callbacks=this.callbacks||{},this.callbacks[t]=this.callbacks[t]||[],this.callbacks[t].push(e),this;}},{key:'off',value:function(t,e){if(t&&e){this.callbacks=this.callbacks||{},this.callbacks[t]=this.callbacks[t]||[];for(var n=[],r=0;r<this.callbacks[t].length;r++)this.callbacks[t][r]!==e&&n.push(this.callbacks[t][r]);this.callbacks[t]=n;}else t?(this.callbacks=this.callbacks||{},this.callbacks[t]=[]):this.callbacks={};return this;}},{key:'trigger',value:function(t,e){if(this.callbacks&&this.callbacks[t]&&this.callbacks[t].length)for(var n=0;n<this.callbacks[t].length;n++)this.callbacks[t][n].apply(this,[e]);return this;}},{key:'setOption',value:function(t,e){if('show_errors'!==t)throw new Error('Option '.concat(t,' must be set during instantiation and cannot be changed later'));return this.options.show_errors=e,this.onChange(),this;}},{key:'getEditorsRules',value:function(){return Object.values(t.defaults.editors).reduce(function(t,e){return e.rules?f(t,e.rules):t;},{});}},{key:'getEditorClass',value:function(e){var n;if(e=this.expandSchema(e),t.defaults.resolvers.find(function(r){return(n=r(e))&&t.defaults.editors[n];}),!n)throw new Error('Unknown editor for schema '.concat(JSON.stringify(e)));if(!t.defaults.editors[n])throw new Error('Unknown editor '.concat(n));return t.defaults.editors[n];}},{key:'createEditor',value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new e(n=f({},e.options||{},n),t.defaults,r);}},{key:'onChange',value:function(){var t=this;if(this.ready&&!this.firing_change)return this.firing_change=!0,window.requestAnimationFrame(function(){t.firing_change=!1,t.ready&&(t.validation_results=t.validator.validate(t.root.getValue()),'never'!==t.options.show_errors?t.root.showValidationErrors(t.validation_results):t.root.showValidationErrors([]),t.trigger('change'));}),this;}},{key:'compileTemplate',value:function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.defaults.template;if('string'==typeof r){if(!t.defaults.templates[r])throw new Error('Unknown template engine '.concat(r));if(!(n=t.defaults.templates[r]()))throw new Error('Template engine '.concat(r,' missing required library.'));}else n=r;if(!n)throw new Error('No template engine set');if(!n.compile)throw new Error('Invalid template engine set');return n.compile(e);}},{key:'_data',value:function(t,e,n){if(3!==arguments.length)return t.hasAttribute('data-jsoneditor-'.concat(e))?this.__data[t.getAttribute('data-jsoneditor-'.concat(e))]:null;var r;t.hasAttribute('data-jsoneditor-'.concat(e))?r=t.getAttribute('data-jsoneditor-'.concat(e)):(r=this.uuid++,t.setAttribute('data-jsoneditor-'.concat(e),r)),this.__data[r]=n;}},{key:'registerEditor',value:function(t){return this.editors=this.editors||{},this.editors[t.path]=t,this;}},{key:'unregisterEditor',value:function(t){return this.editors=this.editors||{},this.editors[t.path]=null,this;}},{key:'getEditor',value:function(t){if(this.editors)return this.editors[t];}},{key:'watch',value:function(t,e){return this.watchlist=this.watchlist||{},this.watchlist[t]=this.watchlist[t]||[],this.watchlist[t].push(e),this;}},{key:'unwatch',value:function(t,e){if(!this.watchlist||!this.watchlist[t])return this;if(!e)return this.watchlist[t]=null,this;for(var n=[],r=0;r<this.watchlist[t].length;r++)this.watchlist[t][r]!==e&&n.push(this.watchlist[t][r]);return this.watchlist[t]=n.length?n:null,this;}},{key:'notifyWatchers',value:function(t){if(!this.watchlist||!this.watchlist[t])return this;for(var e=0;e<this.watchlist[t].length;e++)this.watchlist[t][e]();}},{key:'isEnabled',value:function(){return!this.root||this.root.isEnabled();}},{key:'enable',value:function(){this.root.enable();}},{key:'disable',value:function(){this.root.disable();}},{key:'setCopyClipboardContents',value:function(t){this.copyClipboard=t;}},{key:'getCopyClipboardContents',value:function(){return this.copyClipboard;}},{key:'addNewStyleRules',value:function(t,e){var n=document.querySelector('#theme-'.concat(t));n||((n=document.createElement('style')).setAttribute('id','theme-'.concat(t)),n.appendChild(document.createTextNode('')),document.head.appendChild(n));for(var r=n.sheet?n.sheet:n.styleSheet,i=this.element.nodeName.toLowerCase();r.cssRules.length>0;)r.deleteRule(0);Object.keys(e).forEach(function(n){var o='default'===t?n:''.concat(i,'[data-theme="').concat(t,'"] ').concat(n);r.insertRule?r.insertRule(o+' {'+decodeURIComponent(e[n])+'}',0):r.addRule&&r.addRule(o,decodeURIComponent(e[n]),0);});}},{key:'addNewStyleRulesToShadowRoot',value:function(t,e,n){var r=this.element.nodeName.toLowerCase(),i='';Object.keys(e).forEach(function(n){var o='default'===t?n:''.concat(r,'[data-theme="').concat(t,'"] ').concat(n);i+=o+' {'+decodeURIComponent(e[n])+'}\n';});var o=new CSSStyleSheet();o.replaceSync(i),n.adoptedStyleSheets=[].concat(ol(n.adoptedStyleSheets),[o]);}}])&&ll(e.prototype,n),r&&ll(e,r),t;}();cl.defaults=c,cl.AbstractEditor=N,cl.AbstractTheme=$a,cl.AbstractIconLib=Ko,Object.assign(cl.defaults.themes,rl),Object.assign(cl.defaults.editors,$o),Object.assign(cl.defaults.templates,Jo),Object.assign(cl.defaults.iconlibs,Ma);}]);});

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1mrn":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Qx2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ko, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("W2Rx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oj90");
/* eslint-disable jquery/no-ajax */
const path = __webpack_require__("33yf");

const saveAs = __webpack_require__("Iab2");



const data = {
  appInstanceStates: ko.observable([]),
  restoreFromLocalStorage: ko.observable(true),
  // All the bellow go into appInstanceStates, which controls r/w of app states to local storage (for file tabs feature)
  isDocumentDirty: ko.observable(false),
  editingPath: ko.observable(null),
  editingName: ko.observable('NewFile'),
  editingType: ko.observable('json'),
  editingFolder: ko.observable(null),
  documentHeader: ko.observable(null),
  lastStorageHost: ko.observable('LOCAL'),
  // GIST | LOCAL
  lastEditedUnix: ko.observable(new Date()),
  lastSavedUnix: ko.observable(null),
  inkCompiler: null,
  editingFileFolder: function (addSubPath = '') {
    const filePath = data.editingPath() ? data.editingPath() : '';
    return addSubPath.length > 0 ? path.join(path.dirname(filePath), addSubPath) : path.dirname(filePath);
  },
  startNewFile: function (editingName = 'NewFile', editingFormat = 'json') {
    data.editingPath(null);
    data.editingName(editingName);
    data.editingType(editingFormat);
    data.editingFolder(null);
    data.documentHeader(null);
    app.workspace.selectedNodes = [];
    app.editing(null);

    if (editingFormat === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INK) {
      app.settings.documentType('ink');
    }

    app.nodes([app.newNode(true).title(app.settings.documentType() === 'ink' ? data.InkGlobalScopeNodeName : 'Start').body(app.settings.documentType() === 'ink' ? '' : 'Empty text')]);
    app.tags([]);
    app.updateNodeLinks();
    app.workspace.warpToNodeByIdx(0);
    data.lastStorageHost('LOCAL');
    data.isDocumentDirty(true);
    app.refreshWindowTitle();
    data.saveAppStateToLocalStorage();
    app.ui.dispatchEvent('newYarnFileStarted');
  },
  askForFileName: function () {
    Swal.fire({
      title: 'Enter a New File Name',
      input: 'text',
      inputPlaceholder: 'NewFile',
      showCancelButton: true
    }).then(result => {
      if (result.value || result.value === '') {
        data.startNewFile(result.value || 'NewFile');
      }
    });
  },
  setNewFile: function () {
    Swal.fire({
      title: 'Create a New File?',
      text: `Any unsaved progress to ${data.editingName()}.${data.editingType()} will be lost!
      Path: ${data.editingPath()}
      Storage: ${data.lastStorageHost()}
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'New file',
      cancelButtonText: 'No, cancel!'
    }).then(result => {
      if (result.value) {
        data.askForFileName();
      }
    });
  },
  loadDocumentStateTabFromIndex: function (index) {
    console.log('ATTEMPT TO LOAD STATE', index);
    app.settings.selectedFileTab(index);
    data.loadAppStateFromLocalStorage();
  },
  getCurrentAppState: function () {
    return {
      editingPath: data.editingPath(),
      editingName: data.editingName(),
      documentType: app.settings.documentType(),
      editingType: data.editingType(),
      editingFolder: data.editingFolder(),
      editingTitle: app.editing() ? app.editing().title() : null,
      nodes: data.getNodesAsObjects(),
      documentHeader: data.documentHeader(),
      tags: app.tags(),
      editorSelection: app.editor ? app.editor.selection.getRange() : null,
      transform: app.workspace.transform,
      scale: app.workspace.scale,
      lastStorageHost: data.lastStorageHost(),
      lastEditedUnix: data.lastEditedUnix() || '',
      lastSavedUnix: data.lastSavedUnix(),
      pluginStorage: app.plugins.pluginStorage
    };
  },
  deleteDocumentStateTab: function (index) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to close this file? Any unsaved changes to ${data.editingName()}.${data.editingType()} will be lost!
      Path: ${data.editingPath() || ''}
      Storage: ${data.lastStorageHost()}
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes close',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        console.log('DELETE TAB', data.appInstanceStates(), index);
        const mutatedState = data.appInstanceStates().filter((_, i) => i !== index).map(state => ({ ...state
        }));
        data.appInstanceStates([...mutatedState]);
        data.saveAppStateToLocalStorage(false);
        setTimeout(() => {
          const nextIndex = index > data.appInstanceStates().length - 1 ? data.appInstanceStates().length - 1 : index;
          data.loadDocumentStateTabFromIndex(nextIndex);
        }, 500);
        console.log(data.appInstanceStates(), 'resulting mutation', mutatedState); //ok
      }
    });
  },
  addDocumentState: function ({
    editingName,
    editingType,
    yarnData,
    checked
  }) {
    //Mutate states
    data.appInstanceStates([...data.appInstanceStates(), { ...data.getCurrentAppState()
    } //this is pretty slow
    ]);
    console.log('DOCUMENT TAB ADDED', data.appInstanceStates());
    data.saveAppStateToLocalStorage();
    data.loadDocumentStateTabFromIndex(data.appInstanceStates().length - 1);

    if (checked) {
      data.editingName(editingName);
      data.editingType(editingType);
    } else {
      data.startNewFile(editingName, editingType);
    }

    console.log({
      editingName,
      yarnData,
      editingType,
      checked
    });
  },
  addDocumentStateTab: function () {
    data.promptFileNameAndFormat(data.addDocumentState, null, '📜 Name of new file', ` Copy of ${data.editingName()}`);
  },
  saveAppStateToLocalStorage: function (writeCurrent = true) {
    if (!data.restoreFromLocalStorage()) return;
    const storage = app.settings.storage;
    data.isDocumentDirty(true);
    data.lastEditedUnix(new Date());
    app.refreshWindowTitle();
    console.log('Update storage', data.appInstanceStates(), writeCurrent);
    const updatedStates = [...data.appInstanceStates()];
    if (writeCurrent) updatedStates[app.settings.selectedFileTab()] = data.getCurrentAppState();
    data.appInstanceStates(updatedStates);
    storage.setItem('appStates', JSON.stringify(data.appInstanceStates()));
    app.ui.dispatchEvent('yarnSavedStateToLocalStorage');
  },
  loadAppStateFromLocalStorage: function () {
    if (!data.restoreFromLocalStorage()) return; // to ignore sometimes?

    const storage = app.settings.storage; // Just in case clear old state's cache

    if (storage.getItem('appState')) storage.clear(); //TODO remove later

    const appStates = JSON.parse(storage.getItem('appStates')); // appStateS <- new key

    const currentDocState = appStates[app.settings.selectedFileTab()];
    data.appInstanceStates(appStates);
    console.log('APP state', appStates, currentDocState);

    if (currentDocState) {
      const {
        editingPath,
        lastStorageHost,
        editingName,
        editingType,
        documentType,
        editingFolder,
        editingTitle,
        editorSelection,
        nodes,
        documentHeader,
        tags,
        transform,
        scale,
        pluginStorage,
        lastEditedUnix,
        lastSavedUnix
      } = currentDocState;
      data.editingPath(editingPath);
      data.editingName(editingName);
      data.editingType(editingType);
      app.settings.documentType(documentType);
      data.editingFolder(editingFolder);
      data.lastStorageHost(lastStorageHost);
      data.lastEditedUnix(lastEditedUnix);
      data.lastSavedUnix(lastSavedUnix);
      app.nodes([]);
      data.getNodesFromObjects(nodes).forEach(node => app.nodes.push(node));
      app.tags(tags);
      app.updateNodeLinks();
      app.workspace.setTranslation(transform.x, transform.y);
      app.workspace.setZoom(scale * 4);

      if (editingTitle) {
        app.editNode(app.nodes().find(node => node.title() === editingTitle));
        if (editorSelection) app.editor.selection.setRange(editorSelection);
      }

      app.plugins.pluginStorage = pluginStorage;
      data.documentHeader(documentHeader);
      data.isDocumentDirty(true);
      app.refreshWindowTitle();
      app.ui.dispatchEvent('yarnLoadedStateFromLocalStorage');
    }
  },
  readFile: function (file, filename, clearNodes) {
    data.getFileData(file, filename).then(result => {
      data.editingPath(file.path);
      data.editingType(result.type);
      data.loadData(result.data, result.type, clearNodes);
    });
  },
  setNewFileStats: function (fileName, filePath, lastStorageHost = 'LOCAL') {
    console.log('Updated save data', fileName, filePath);
    data.editingName(fileName.replace(/^.*[\\\/]/, ''));
    data.isDocumentDirty(false);
    data.editingPath(filePath);
    data.lastStorageHost(lastStorageHost);
    app.refreshWindowTitle();
  },
  openFile: function (file, filename) {
    const confirmText = data.editingPath() ? 'Any unsaved progress to ' + data.editingName() + ' will be lost.' : 'Any unsaved progress will be lost.';
    Swal.fire({
      title: 'Are you sure you want to open another file?',
      text: confirmText,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    }).then(result => {
      if (result.value === true) {
        data.readFile(file, filename, true);
        data.setNewFileStats(filename, file.path);
        app.refreshWindowTitle();
      }
    });
  },
  openFileFromFilePath: function (filePath) {
    const fileName = app.path.basename(filePath);
    $.ajax({
      url: filePath,
      async: false,
      success: result => {
        const type = data.getFileType(fileName);

        if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].UNKNOWN) {
          Swal.fire({
            title: 'Unknown filetype!',
            icon: 'error'
          });
        } else {
          data.loadData(result, type, true);
          data.setNewFileStats(fileName, filePath);
          data.editingType(type);
        }
      }
    });
  },
  getFileData: function (file, filename) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const type = data.getFileType(filename);

        if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].UNKNOWN) {
          Swal.fire({
            title: 'Unknown filetype!',
            icon: 'error'
          });
          reject();
        } else {
          resolve({
            file,
            type,
            data: reader.result,
            name: file.name
          });
        }
      };

      reader.readAsText(file);
    });
  },
  openFiles: async function (file, filename) {
    const files = document.getElementById('open-file').files;

    for (const file of Object.values(files)) {
      const fileData = await data.getFileData(file, file.name);
      console.log('FILEDATA', fileData);
      const editingName = fileData.name;
      const editingType = fileData.type;
      data.addDocumentState({
        editingName,
        editingType,
        yarnData: fileData.data
      });
      data.loadData(fileData.data, editingType, true);
    }
  },
  openFolder: function (e, foldername) {
    editingFolder = foldername;
    Swal.fire({
      text: 'openFolder not yet implemented e: ' + e + ' foldername: ' + foldername,
      icon: 'error'
    });
  },
  appendFile: function (file, filename) {
    data.readFile(file, filename, false);
  },
  getFileType: function (filename) {
    const lowerFileName = filename.toLowerCase();
    if (lowerFileName.endsWith('.json')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].JSON;else if (lowerFileName.endsWith('.yarn.txt')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].YARN;else if (lowerFileName.endsWith('.ink')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INK;else if (lowerFileName.endsWith('.yarn')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].YARN;else if (lowerFileName.endsWith('.xml')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].XML;else if (lowerFileName.endsWith('.txt')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].TWEE;else if (lowerFileName.endsWith('.tw2')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].TWEE2;else if (lowerFileName.endsWith('.twee')) return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].TWEE2;
    return _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].UNKNOWN;
  },
  dispatchEventDataLoaded: function () {
    var event = new CustomEvent('yarnLoadedData');
    event.document = document;
    event.data = data;
    event.app = app;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event);
  },
  restoreSettingsFromDocumentHeader: function () {
    if (data.documentHeader() !== null) {
      const documentHeader = data.documentHeader();
      console.log('Apply settings from file header:', documentHeader);
      if ('markupLanguage' in documentHeader) app.settings.markupLanguage(documentHeader.markupLanguage);
      if ('language' in documentHeader) app.settings.language(documentHeader.language);
      if ('filetypeVersion' in documentHeader) app.settings.filetypeVersion(documentHeader.filetypeVersion);
      app.settings.apply();
    }
  },
  loadData: function (content, type, clearNodes) {
    const objects = [];

    const pushContent = extractedNodes => {
      for (let i = 0; i < extractedNodes.length; i++) {
        if ('title' in extractedNodes[i]) objects.push(extractedNodes[i]);
      }
    }; // different depending on file


    if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].JSON) {
      content = JSON.parse(content);

      if (!content) {
        return;
      }

      if (Array.isArray(content)) {
        // Old json format
        pushContent(content);
      } else {
        // New Json format
        data.documentHeader(content.header);
        pushContent(content.nodes);
      }

      app.setDocumentType('yarn'); //TODO try to store both ink and yarn in json
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INK) {
      var lines = content.split(/\r?\n/);
      var obj = null;

      const addMetaData = i => {
        try {
          obj.title = lines[i].split('//yarn-editor-metadata:')[0].replace(/===/g, '').trim();
          const {
            x,
            y,
            colorID
          } = JSON.parse(lines[i].split('//yarn-editor-metadata:')[1]);
          obj.position = {
            x: parseInt(x),
            y: parseInt(y)
          };
          obj.colorID = colorID; // console.log('OBJECT', obj);
        } catch (e) {
          console.warn('node metadata failed parse: ', e);
        }
      };

      for (let i = 0; i < lines.length; i++) {
        const nodeTemplate = {
          body: '',
          position: {
            x: objects.length * 160,
            y: objects.length * 160
          },
          // not supported by Ink
          colorID: 0,
          // not supported by Ink
          tags: '' // not supported by Ink

        }; // Put any quirky outside of node ink logic in the START node (declarative stuff)

        if (obj === null && !lines[i].trim().startsWith('===')) {
          obj = { ...nodeTemplate,
            position: {
              x: -400,
              y: 0
            }
          };
          obj.title = data.InkGlobalScopeNodeName; // START node does not support saving metadata
        }

        if (lines[i].trim().startsWith('===')) {
          if (obj !== null) {
            objects.push(obj);
          }

          obj = {
            title: lines[i].trim().replace(/===/g, ''),
            ...nodeTemplate
          };

          if (lines[i].trim().includes('//yarn-editor-metadata:')) {
            addMetaData(i);
          }
        } else if (obj !== null) {
          obj.body += lines[i] + '\n';
        }
      }

      if (obj !== null) {
        objects.push(obj);
      } // auto set mode


      app.setDocumentType('ink');
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].YARN) {
      var lines = content.split(/\r?\n/);
      var obj = null;
      var readingBody = false;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '===') {
          readingBody = false;

          if (obj != null) {
            objects.push(obj);
            obj = null;
          }
        } else if (readingBody) {
          obj.body += lines[i] + '\n';
        } else {
          if (lines[i].indexOf('title:') > -1) {
            if (obj == null) obj = {};
            obj.title = lines[i].substr(7, lines[i].length - 7);
          } else if (lines[i].indexOf('position:') > -1) {
            if (obj == null) obj = {};
            var xy = lines[i].substr(9, lines[i].length - 9).split(',');
            obj.position = {
              x: Number(xy[0].trim()),
              y: Number(xy[1].trim())
            };
          } else if (lines[i].indexOf('colorID:') > -1) {
            if (obj == null) obj = {};
            obj.colorID = Number(lines[i].substr(9, lines[i].length - 9).trim());
          } else if (lines[i].indexOf('tags:') > -1) {
            if (obj == null) obj = {};
            obj.tags = lines[i].substr(6, lines[i].length - 6);
          } else if (lines[i].trim() === '---') {
            readingBody = true;
            obj.body = '';
          }
        }
      }

      if (obj != null) {
        objects.push(obj);
      }

      app.setDocumentType('yarn');
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].TWEE || type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].TWEE2) {
      var lines = content.split('\n');
      var obj = null;
      var index = 0;

      for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim();

        if (lines[i].substr(0, 2) === '::') {
          if (obj != null) objects.push(obj);
          obj = {};
          index++;
          var title = '';
          var tags = '';
          var position = {
            x: index * 80,
            y: index * 80
          }; // check if there are tags

          var openBracket = lines[i].indexOf('[');
          var closeBracket = lines[i].indexOf(']');

          if (openBracket > 0 && closeBracket > 0) {
            tags = lines[i].substr(openBracket + 1, closeBracket - openBracket - 1);
          } // check if there are positions (Twee2)


          var openPosition = lines[i].indexOf('<');
          var closePosition = lines[i].indexOf('>');

          if (openPosition > 0 && closePosition > 0) {
            var coordinates = lines[i].substr(openPosition + 1, closePosition - openPosition - 1).split(',');
            position.x = parseInt(coordinates[0]);
            position.y = parseInt(coordinates[1]);
          }

          var metaStart = 0;

          if (openBracket > 0) {
            metaStart = openBracket;
          } else if (openPosition > 0) {
            // Twee2 dictates that tags must come before position, so we'll only care about this if we don't
            // have any tags for this Passage
            metaStart = openPosition;
          }

          if (metaStart) {
            title = lines[i].substr(3, metaStart - 3);
          } else {
            title = lines[i].substr(3);
          } // fix for issue https://github.com/InfiniteAmmoInc/Yarn/issues/83


          title = title.trim();
          obj.title = title;
          obj.tags = tags;
          obj.body = '';
          obj.position = position;
        } else if (obj != null) {
          if (obj.body.length > 0) lines[i] += '\n';
          obj.body += lines[i];
        }
      }

      if (obj != null) objects.push(obj);
      app.setDocumentType('yarn');
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].XML) {
      app.setDocumentType('yarn');
      var oParser = new DOMParser();
      var xml = oParser.parseFromString(content, 'text/xml');
      content = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].xmlToObject(xml);
      if (content !== undefined) for (let i = 0; i < content.length; i++) objects.push(content[i]);
    }

    app.limitNodesUpdate(() => {
      if (clearNodes) app.nodes.removeAll();
      data.getNodesFromObjects(objects).forEach(node => app.nodes.push(node));
    });
    data.editingType(type); // Set type when loading

    data.restoreSettingsFromDocumentHeader();
    app.updateNodeLinks();
    app.workspace.warpToNodeByIdx(0);
    data.isDocumentDirty(false);
    data.addGlobalScopeToInkDoc(); // Callback for embedding in other webapps

    data.dispatchEventDataLoaded();
  },
  addGlobalScopeToInkDoc: function () {
    if (app.settings.documentType() === 'ink' && !app.nodes().find(node => node.title().trim() === data.InkGlobalScopeNodeName)) {
      app.newNode(true).title(data.InkGlobalScopeNodeName).x(-400);
    }
  },
  getNodeFromObject: function (object) {
    return new _node__WEBPACK_IMPORTED_MODULE_0__[/* Node */ "a"]({
      title: object.title,
      body: object.body,
      tags: object.tags,
      colorID: object.colorID,
      x: parseInt(object.position.x),
      y: parseInt(object.position.y)
    });
  },
  getNodeAsObject: function (node) {
    return {
      title: node.title(),
      tags: node.tags(),
      body: node.body(),
      position: {
        x: node.x(),
        y: node.y()
      },
      colorID: node.colorID()
    };
  },
  getNodesFromObjects: function (objects) {
    const appNodes = [];
    if (!objects) return [];
    objects.forEach(object => {
      appNodes.push(data.getNodeFromObject(object));
    });
    return appNodes;
  },
  getNodesAsObjects: function () {
    const nodesObjects = [];
    const nodes = app.nodes();

    for (var i = 0; i < nodes.length; i++) {
      nodesObjects.push(data.getNodeAsObject(nodes[i]));
    }

    return nodesObjects;
  },
  getSaveData: async function (type, getNodeFromInkLine = null, useInclude = false, content = data.getNodesAsObjects()) {
    var output = '';

    if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].JSON) {
      // store useful values for later use if the file type supports it
      if (app.settings.filetypeVersion() === '2') {
        console.log('Saving as Yarn json v2 type');
        const date = new Date();
        data.documentHeader({ ...data.documentHeader(),
          lastSavedUnix: date,
          language: app.settings.language(),
          documentType: app.settings.documentType(),
          markupLanguage: app.settings.markupLanguage(),
          filetypeVersion: app.settings.filetypeVersion(),
          pluginStorage: app.plugins.pluginStorage
        });
        output = JSON.stringify({
          header: data.documentHeader(),
          nodes: content
        }, null, '\t');
      } else {
        output = JSON.stringify(content, null, '\t');
      }
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INK) {
      const startNode = content.find(node => node.title.trim() === data.InkGlobalScopeNodeName);

      if (startNode) {
        if (useInclude) {
          // we need to also add any INCLUDE lines that may be in the body
          const includeInks = startNode.body.split(/\r\n|\r|\n/).filter(line => line.trim().startsWith('INCLUDE '));
          output += startNode.body.split(/\r\n|\r|\n/).filter(line => !line.trim().startsWith('INCLUDE ')).join('\n');

          for (const includeInk of includeInks) {
            const includeName = includeInk.trim().split('INCLUDE ');

            if (includeName.length > 1) {
              const found = data.appInstanceStates().find(state => state.editingType === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INK && state.editingName === includeName[1]);

              if (found) {
                const moreSaveData = await data.getSaveData(_utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INK, null, useInclude, found.nodes);
                output += moreSaveData + '\n';
              }
            }
          }
        } else {
          output += startNode.body;
        } // Hacky test to discover Node relative to an Ink fileline (for the debugger)


        if (getNodeFromInkLine && output.split(/\r\n|\r|\n/).length > getNodeFromInkLine) {
          return startNode;
        }
      }

      for (let i = 0; i < content.length; i++) {
        // The START node will contain anything that is not going in any knots
        const node = content[i];

        if (node.title.trim() !== data.InkGlobalScopeNodeName) {
          // populate knots
          output += '\n' + `=== ${node.title} ===` + ` //yarn-editor-metadata: ${JSON.stringify({
            x: parseInt(node.position.x),
            y: parseInt(node.position.y),
            colorID: parseInt(node.colorID)
          })}` + '\n';
          output += node.body;
          var body = node.body;

          if (!(body.length > 0 && body[body.length - 1] === '\n')) {
            output += '\n';
          } // Hacky test to discover Node relative to an Ink fileline (for the debugger)


          if (getNodeFromInkLine && output.split(/\r\n|\r|\n/).length > getNodeFromInkLine) {
            return node;
          }
        }
      }
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INKJSON) {
      const inkTextFileData = await data.getSaveData('ink', null, true);
      const InkJsonData = new Promise((resolve, reject) => {
        app.ui.toastMixin.fire({
          title: 'Ink file is compiling',
          icon: 'info',
          timer: 4000,
          text: 'Please wait...'
        });
        data.inkCompiler.init(response => {
          if (response.errors.length > 0) {
            Swal.fire({
              title: 'Failed to parse ink file',
              html: `<div class="title-error">${response.errors.join('<br/>')}</div>`,
              icon: 'error'
            }).then(() => data.goToErrorInkNode(inkTextFileData, response.errors[0]));
            reject();
          } else {
            console.log('Warnings', response.warnings);
            app.ui.toastMixin.fire({
              animation: true,
              title: response.warnings.length > 0 ? 'Ink file compiled with some warnings' : 'Ink file compiled successfully',
              icon: response.warnings.length > 0 ? 'warning' : 'success',
              text: response.warnings.join('\n')
            });
            resolve(JSON.stringify(response.story, null, '\t'));
          }
        }).then(() => data.inkCompiler.submit(inkTextFileData));
      });
      output = await InkJsonData;
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].YARN) {
      for (let i = 0; i < content.length; i++) {
        output += 'title: ' + content[i].title + '\n';
        output += 'tags: ' + content[i].tags + '\n';
        output += 'colorID: ' + content[i].colorID + '\n';
        output += 'position: ' + content[i].position.x + ',' + content[i].position.y + '\n';
        output += '---\n';
        output += content[i].body;
        var body = content[i].body;

        if (!(body.length > 0 && body[body.length - 1] === '\n')) {
          output += '\n';
        }

        output += '===\n';
      }
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].RENPY) {
      for (let i = 0; i < content.length; i++) {
        const nodeType = content[i].tags.includes('screen') ? 'screen' : 'label';
        output += `\n${nodeType} ` + content[i].title.replace(/[ ]/g, '_') + ':\n';
        const body = content[i].body;

        if (!(body.length > 0 && body[body.length - 1] === '\n')) {
          output += '\n';
        }

        let isMenu = false;
        let isIfElse = false;
        let parsedBodyContent = '';
        const isRenpyFormattedBody = content[i].tags.includes('renpy');
        body.split('\n').forEach(line => {
          const trimmedLine = line.trim();
          const tabs = isIfElse ? '\t\t' : '\t';

          if (isRenpyFormattedBody) {
            // if a renpy tag is present, don't try to convert the content, instead use the original
            parsedBodyContent += `${tabs}${line}\n`;
          } else if (trimmedLine.startsWith('[[')) {
            const option = trimmedLine.replace(/[\[\[]|[\]\]]]/g, '').split('|');

            if (option.length > 1) {
              if (!isMenu) {
                parsedBodyContent += `${tabs}menu:\n`;
                isMenu = true;
              }

              parsedBodyContent += `${tabs}\t"${option[0].trim()}":\n${tabs}\t\tjump ${option[1].trim()}\n`;
            } else {
              parsedBodyContent += `${tabs}jump ${option[0].trim()}\n`;
            }
          } else if (trimmedLine.startsWith('<<if')) {
            // TODO make in and else if one check
            const conditional = trimmedLine.replace(/\<\<\|$|\>\>|if/g, '').split(/==|!=|>|</g).filter(Boolean);
            const operator = trimmedLine.substring(2, trimmedLine.length - 2).match(/(>|==|!=|<)/);
            parsedBodyContent += conditional.length > 1 && operator ? `\tif ${conditional[0].trim()} ${operator[0]} ${conditional[1].trim()}:\n` : `\t# ${trimmedLine}\n`;
            isIfElse = true;
          } else if (trimmedLine.startsWith('<<elseif')) {
            const conditional = trimmedLine.replace(/\<\<\|$|\>\>|elseif/g, '').split(/==|!=|>|</g).filter(Boolean);
            const operator = trimmedLine.substring(2, trimmedLine.length - 2).match(/(>|==|!=|<)/);
            parsedBodyContent += conditional.length > 1 && operator ? `\telif ${conditional[0].trim()} ${operator[0]} ${conditional[1].trim()}:\n` : `\t# ${trimmedLine}\n`;
            isIfElse = true;
          } else if (trimmedLine.startsWith('<<else')) {
            parsedBodyContent += '\telse:\n';
            isIfElse = true;
          } else if (trimmedLine.startsWith('<<endif')) {
            parsedBodyContent += '\n';
            isIfElse = false;
          } else if (trimmedLine.startsWith('<<set')) {
            const set = trimmedLine.replace(/[\<\>\$]|set /g, '').split('=');
            console.log({
              set
            });
            parsedBodyContent += set.length > 1 ? `${tabs}$ ${set[0].trim()} = ${set[1].trim()}\n` : `${tabs}#$ ${set[0].trim()} = 0:\n`;
          } else if (trimmedLine.startsWith('<<')) {
            parsedBodyContent += `${tabs}${trimmedLine.replace(/[\<\>]/g, '')}\n`;
          } else if (trimmedLine.startsWith('//')) {
            parsedBodyContent += `${tabs}#${trimmedLine.substring(2)}\n`;
          } else if (trimmedLine.length > 0) {
            // dialogue line in renpy may look like this:
            // e mad "I'm a little upset at you."
            // e "I'm a little upset at you."
            // or "I'm a little upset at you."
            // We infer the author is passing character and/or emotion, because they added quotes, don't add quotes automatically
            if (trimmedLine.endsWith('"')) {
              parsedBodyContent += `${tabs}${trimmedLine}\n`;
            } else {
              parsedBodyContent += `${tabs}"${trimmedLine}"\n`;
            }
          }

          isMenu = false;
        });
        output += parsedBodyContent + '\n';
      }
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].TWEE) {
      for (let i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        output += ':: ' + content[i].title + tags + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].TWEE2) {
      for (let i = 0; i < content.length; i++) {
        var tags = '';
        if (content[i].tags.length > 0) tags = ' [' + content[i].tags + ']';
        var position = ' <' + content[i].position.x + ',' + content[i].position.y + '>';
        output += ':: ' + content[i].title + tags + position + '\n';
        output += content[i].body + '\n\n';
      }
    } else if (type === _utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].XML) {
      output += '<nodes>\n';

      for (let i = 0; i < content.length; i++) {
        output += '\t<node>\n';
        output += '\t\t<title>' + content[i].title + '</title>\n';
        output += '\t\t<tags>' + content[i].tags + '</tags>\n';
        output += '\t\t<body>' + content[i].body + '</body>\n';
        output += '\t\t<position x="' + content[i].position.x + '" y="' + content[i].position.y + '"></position>\n';
        output += '\t\t<colorID>' + content[i].colorID + '</colorID>\n';
        output += '\t</node>\n';
      }

      output += '</nodes>\n';
    }

    console.log("Exporter Output", output);
    data.isDocumentDirty(false);
    app.refreshWindowTitle();
    return output;
  },
  saveTo: function (path, content, callback = null) {
    if (app.fs) {
      app.fs.writeFile(path, content, {
        encoding: 'utf-8'
      }, function (err) {
        data.editingPath(path);
        if (callback) callback();

        if (err) {
          Swal.fire({
            title: 'Error Saving Data to ' + path + ': ' + err,
            icon: 'error'
          });
        } else {
          app.ui.notification.fire({
            title: 'Saved!',
            icon: 'success'
          });
          app.ui.dispatchEvent('yarnSavedData');
          data.setNewFileStats(path, path, 'LOCAL');
        }
      });
    }
  },
  openFileDialog: function (dialog, callback) {
    dialog.bind('change', function (e) {
      // make callback
      callback(e.currentTarget.files[0], dialog.val()); // replace input field with a new identical one, with the value cleared
      // (html can't edit file field values)

      var saveas = '';
      var accept = '';
      if (dialog.attr('nwsaveas') != undefined) saveas = 'nwsaveas="' + dialog.attr('nwsaveas') + '"';
      if (dialog.attr('accept') != undefined) saveas = 'accept="' + dialog.attr('accept') + '"';
      dialog.parent().append('<input type="file" id="' + dialog.attr('id') + '" ' + accept + ' ' + saveas + '>');
      dialog.unbind('change');
      dialog.remove();
    });
    dialog.trigger('click');
  },
  saveFileDialog: function (dialog, type, content) {
    const fileName = (data.editingName() || '').replace(/\.[^/.]+$/, '') + '.' + type;

    if (app.electron) {
      // console.log(app.electron)
      app.electron.remote.dialog.showSaveDialog({
        title: 'Saving ' + fileName,
        filters: [{
          name: type + ' file',
          extensions: [type]
        }],
        defaultPath: fileName
      }).then(result => {
        data.saveTo(result.filePath, content);
      }).catch(err => {
        console.error(err);
      });
    } else {
      var blob = new Blob([content], {
        type: 'text/plain;charset=utf-8'
      });
      saveAs(blob, fileName);
    }
  },
  insertImageFileName: function () {
    data.openFileDialog($('#open-image'), function (e, path) {
      app.insertTextAtCursor(e.path ? e.path : e.name);
    });
  },
  tryOpenFile: function () /// Refactor to send signal to the main process
  {
    data.openFileDialog($('#open-file'), data.openFiles);
  },
  promptFileNameAndFormat: function (cb, suggestions = null, title = '💾 Save file - enter file name', showCheckBox = '') {
    const guessedFileName = data.editingName().replace(/\.[^/.]+$/, '') + '(new).' + data.editingType();
    Swal.fire({
      title,
      html: ` <input id="swal-input1" list="select-file-name" name="select" placeholder="${guessedFileName}">
      <datalist class="form-control" id="select-file-name">    
        ${suggestions && suggestions.map(suggestion => `<option value="${suggestion}" />`).join('')}
      </datalist>
      ${showCheckBox ? `<br/><br/><input type="checkbox" id="swal-checkbox-checked"> ${showCheckBox}</input>` : ''}
        `,
      onOpen: () => {
        if (data.editingName() !== 'NewFile') {
          document.getElementById('swal-input1').value = guessedFileName;
        }
      },
      showCancelButton: true,
      preConfirm: () => ({
        name: document.getElementById('swal-input1').value,
        checked: showCheckBox ? document.getElementById('swal-checkbox-checked').checked : false
      })
    }).then(({
      value
    }) => {
      if (value) {
        const {
          name,
          checked
        } = value;
        const guessedNewFormat = name.split('.').pop();
        const editingType = Object.values(_utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"]).includes(guessedNewFormat) ? guessedNewFormat : data.editingType();
        const editingName = (name || '').replace(/\.[^/.]+$/, '') + '.' + editingType;
        data.getSaveData(editingType).then(yarnData => {
          cb({
            editingName,
            editingType,
            yarnData,
            checked
          });
        });
      }
    });
  },
  tryShareFilePwa: function (format) {
    data.promptFileNameAndFormat(({
      editingName,
      yarnData
    }) => {
      const parts = [new Blob([yarnData], {
        type: 'text/plain'
      })];
      const file = new File(parts, editingName, {});

      if (navigator.canShare && navigator.canShare({
        files: [file]
      })) {
        navigator.share({
          title: editingName,
          text: yarnData,
          file: [file]
        }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing', error));
      } else {
        Swal.fire({
          title: 'Web Share API is not supported in your browser.\nTry using it on your smartphone or tablet...',
          icon: 'error'
        });
      }
    });
  },
  trySaveGist: function (gists) {
    if (gists && gists.file && gists.file.length > 0) {
      gists.get(gists.file).then(gist => {
        const gistFiles = Object.keys(gist.body.files);
        console.log(gistFiles);
        data.promptFileNameAndFormat(({
          editingName,
          yarnData
        }) => {
          data.editingName(editingName);
          gists.edit(gists.file, {
            files: {
              [editingName]: {
                content: yarnData
              }
            }
          });
          Swal.fire('Saved!', `The Yarn has been saved to gist ${gists.file}`, 'success');
          data.lastStorageHost('GIST');
          data.isDocumentDirty(false);
          app.refreshWindowTitle();
        }, gistFiles);
      });
    } else {
      Swal.fire('Not configured', 'Your github settings are not configured', 'warning');
      app.ui.openSettingsDialog();
    }
  },
  openGist: function (content, name) {
    const type = data.getFileType(name);
    data.loadData(content, type, true);
    data.isDocumentDirty(false);
    data.lastStorageHost('GIST');
    data.editingPath(null);
    data.editingName(name);
    app.refreshWindowTitle();
  },
  tryOpenGist: function (gists) {
    if (gists && gists.file && gists.file.length > 0) {
      gists.get(gists.file).then(gist => {
        const gistFiles = gist.body.files;
        const inputOptions = {};
        Object.keys(gistFiles).forEach(key => {
          inputOptions[key] = key;
        });
        Swal.fire({
          title: '🐙 Open file from a gist',
          input: 'select',
          inputOptions,
          inputAttributes: {
            autocomplete: 'off'
          },
          inputPlaceholder: 'Select a file from the gist',
          showCancelButton: true
        }).then(({
          value
        }) => {
          if (value) {
            const content = gistFiles[value].content;
            data.openGist(content, value);
          }
        });
      });
    } else {
      Swal.fire('Not configured', 'Your github settings are not configured', 'warning');
      app.ui.openSettingsDialog();
    }
  },
  tryOpenFolder: function () {
    data.openFileDialog($('#open-folder'), data.openFolder);
  },
  tryAppend: function () {
    data.openFileDialog($('#open-file'), data.appendFile);
  },
  save: function () {
    if (app.editingVisualStudioCodeFile()) {
      // if we're editing a file in the VSCode extension, it handles
      // saving the file on its end so we do nothing here
      return;
    }

    if (data.editingPath()) data.trySaveCurrent();else data.trySave(_utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].JSON);
  },
  trySave: function (type) {
    data.getSaveData(type).then(saveData => data.saveFileDialog($('#save-file'), type, saveData));
  },
  trySaveCurrent: function () {
    if (!data.isDocumentDirty()) return;

    if (data.lastStorageHost() === 'GIST') {
      const gists = app.gists;
      gists.get(gists.file).then(gist => {
        data.getSaveData(data.editingType()).then(yarnData => {
          data.getSaveData(data.editingType());
          gists.edit(gists.file, {
            files: {
              [data.editingName()]: {
                content: yarnData
              }
            }
          });
          data.lastStorageHost('GIST');
          data.isDocumentDirty(false);
          app.refreshWindowTitle();
          app.ui.toastMixin.fire({
            title: 'Saved',
            text: `Saved ${data.editingName()} to Gist`
          });
        });
      });
    } else if (!data.editingPath()) {
      if (app.gists && app.gists.options.token) {
        data.trySaveGist(app.gists);
      } else data.trySave(_utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].JSON);
    } else if (data.editingPath().length > 0 && data.editingType().length > 0) {
      data.getSaveData(data.editingType()).then(saveData => {
        data.saveTo(data.editingPath(), saveData);
      });
    }
  },
  doesFileExist: function (filePath) {
    //todo remove fs from everywhere, use cache to load images instead
    return false;

    if (!fs.existsSync(filePath)) {
      return false;
    }

    return fs.lstatSync(filePath).isFile();
  },
  triggerPasteClipboard: function () {
    if (app.electron) {
      const text = app.electron.clipboard.readText();
      app.clipboard = text;
      document.execCommand('paste');
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.readText().then(text => {
          app.clipboard = text;
        }).catch(err => {
          app.clipboard = app.editor.getSelectedText();
          console.log('No clipboard access', err, 'using local instead');
        });
      } // execCommand("paste") will not work on web browsers, due to security


      setTimeout(() => app.insertTextAtCursor(app.clipboard), 100);
    }
  },
  triggerCopyClipboard: function () {
    if (app.electron) {
      app.electron.clipboard.writeText(app.editor.getSelectedText()); // document.execCommand('copy');

      app.clipboard = app.editor.getSelectedText();
    } else {
      const selectedText = app.editor.getSelectedText();
      app.clipboard = selectedText;

      if (navigator.clipboard && selectedText.length > 0) {
        navigator.clipboard.writeText(selectedText).then(() => {
          /* clipboard successfully set */
          app.clipboard = selectedText;
        });
      }
    }
  },
  InkCompiler: function () {
    this.ready = false;
    this.worker = null;

    this.init = (onComplete = () => {}) => {
      return new Promise((resolve, reject) => {
        this.worker = new Worker('public/inkwasm/ink.worker.js');
        this.ready = false;

        this.worker.onmessage = e => {
          if (e.data === 'ready') {
            this.ready = true;
            resolve();
          } else if (this.ready) {
            onComplete(e.data);
            resolve(e.data);
          }
        };
      });
    };

    this.submit = text => {
      this.worker.postMessage(text);
    };

    this.getInkErrorGotoNode = async (inkTextFileData, inkError) => {
      const inkErrorFind = inkError.substr(inkError.lastIndexOf(':') + 1, inkError.length).trim();

      try {
        const inkLineNum = Number(inkError.match(/line ([0-9]+):/)[1]);
        const inkTextFileErrorNode = await data.getSaveData(_utils__WEBPACK_IMPORTED_MODULE_1__["FILETYPE"].INK, inkLineNum);
        return {
          ln: inkLineNum,
          node: inkTextFileErrorNode.title,
          find: inkErrorFind
        };
      } catch (e) {
        console.error(e);
        return null;
      }
    };
  },
  InkGlobalScopeNodeName: 'INK_GLOBAL_SCOPE',
  goToErrorInkNode: (inkTextFileData, error) => {
    data.inkCompiler.getInkErrorGotoNode(inkTextFileData, error).then(errorData => {
      if (errorData) {
        const {
          node,
          ln,
          find
        } = errorData;
        app.openNodeByTitle(node, find);
      }
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Z1dp"), __webpack_require__("EVdn")))

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3ozf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5aMW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Runner; });
/* harmony import */ var _bondage_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tUqF");
/* harmony import */ var _inkjs_ink_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qVgP");



const {
  JSONEditor
} = __webpack_require__("0PmM");

var Runner = function ({
  app,
  createButton,
  addSettingsItem,
  getPluginStore,
  onYarnEditorOpen,
  onYarnInPreviewMode,
  onYarnSavedNode,
  onYarnSetDocumentType,
  onKeyUp,
  onKeyDown,
  onLoad,
  setPluginStore
}) {
  const self = this;
  this.name = 'Runner'; // Variables editor dialog

  this.onOpenDialog = async () => {
    let editor = null;
    const {
      value: formValues
    } = await Swal.fire({
      title: 'Playtest starting variables',
      html: '<div class="json-editor-wrapper"><div id="jsoneditor"/></div>',
      focusConfirm: false,
      customClass: 'swal-wide',
      onOpen: () => {
        // create the editor
        __webpack_require__("1mrn");

        editor = new JSONEditor(document.getElementById('jsoneditor'), {
          // theme: 'bootstrap2',
          schema: {
            type: 'array',
            format: 'table',
            title: 'Playtest values',
            uniqueItems: true,
            items: {
              type: 'object',
              title: 'Variable',
              format: 'grid',
              properties: {
                key: {
                  type: 'string',
                  default: 'myVar'
                },
                value: {
                  type: 'string',
                  default: 'true'
                }
              }
            }
          }
        });
        const localVariables = getPluginStore(self.name); // set json

        editor.setValue(typeof localVariables.variables !== 'object' ? [{
          key: 'er',
          value: 'erd'
        }] : localVariables.variables);
        setPluginStore(self.name, 'runnerVariablesOpen', true);
      },
      preConfirm: () => {
        setPluginStore(self.name, 'runnerVariablesOpen', false);
        return editor.getValue();
      }
    });

    if (formValues) {
      setPluginStore(self.name, 'variables', formValues);
    }
  };

  onLoad(() => {
    // add actions
    addSettingsItem({
      title: 'Playtesting Style',
      valueKey: 'playtestStyle',
      defaultValue: 'chat',
      optionsKey: 'availablePlaytestStyles',
      options: [{
        id: 'npc',
        name: 'Npc bubble'
      }, {
        id: 'chat',
        name: 'Chat messages'
      }],
      setterKey: 'setPlaytestStyle',
      settingsColumn: 'A'
    }); // create a button in the file menu

    createButton(self.name, {
      name: 'Playtest variables',
      attachTo: 'fileMenuDropdown',
      onClick: 'onOpenDialog()',
      iconName: 'cog'
    });
    const localVariables = getPluginStore(self.name);
    if (localVariables.runnerVariablesOpen) self.onOpenDialog();
  });

  const updateRunnerMode = () => {
    // YARN PLAY MODE
    if (app.settings.documentType() === 'yarn') {
      this.previewStory = new _bondage_renderer__WEBPACK_IMPORTED_MODULE_0__[/* yarnRender */ "a"]();

      this.gotoLastPlayNode = function () {
        if (app.editing() && app.editing().title() !== self.previewStory.node.title) {
          app.openNodeByTitle(self.previewStory.node.title);
        }

        app.editor.focus();
      };

      this.advanceStoryPlayMode = function (speed = 5) {
        if (!self.previewStory.finished) {
          self.previewStory.changeTextScrollSpeed(speed);

          if (self.previewStory.vnSelectedChoice != -1 && speed === 5) {
            self.previewStory.vnSelectChoice();
          }
        } else {
          self.togglePlayMode(false);
          self.gotoLastPlayNode();
        }
      };

      this.togglePlayMode = function (playModeOverwrite = false) {
        const editor = $('.editor')[0];
        const storyPreviewPlayButton = document.getElementById('storyPlayButton');
        const editorPlayPreviewer = document.getElementById('editor-play');
        $('#editor-play').addClass('inYarnMode');
        $('#commandDebugLabel').addClass('inYarnMode');
        app.isEditorInPlayMode(playModeOverwrite);

        if (playModeOverwrite) {
          //preview play mode
          editor.style.display = 'none';
          $('.bbcode-toolbar').addClass('hidden');
          editorPlayPreviewer.style.display = 'flex';
          $(storyPreviewPlayButton).addClass('disabled');
          self.previewStory.emiter.on('finished', function () {
            self.togglePlayMode(false);
            self.gotoLastPlayNode();
          });
          self.previewStory.emiter.on('startedNode', function (e) {
            if (app.isEditorSplit) {
              app.workspace.warpToNode(app.getFirstFoundNode(e.title.toLowerCase().trim()));
            }
          });
          const localVariables = getPluginStore(self.name);
          console.log('variables', localVariables);
          app.data.getSaveData('json').then(saveData => {
            self.previewStory.initYarn(JSON.parse(saveData), app.editing().title().trim(), 'NVrichTextLabel', false, 'commandDebugLabel', app.settings.playtestStyle(), localVariables.variables || []);
          });
        } else {
          //edit mode
          app.editor.session.setScrollTop(editorPlayPreviewer.scrollTop);
          editorPlayPreviewer.style.display = 'none';
          editor.style.display = 'flex';
          $(storyPreviewPlayButton).removeClass('disabled');
          $('.bbcode-toolbar').removeClass('hidden');
          $('.toggle-toolbar').removeClass('hidden');
          $('.editor-counter').removeClass('hidden');
          self.previewStory.terminate();
        }
      };

      onYarnInPreviewMode(() => self.togglePlayMode(false));
      onYarnSavedNode(() => self.togglePlayMode(false));
      onYarnEditorOpen(() => {
        createButton(self.name, {
          iconName: 'play',
          title: 'Preview',
          attachTo: 'bbcodeToolbar',
          onClick: 'togglePlayMode(true)',
          className: 'bbcode-button bbcode-button-right',
          id: 'storyPlayButton'
        });
        const element = document.createElement('div');
        element.innerHTML = `
    <div class="editor-play" id="editor-play" onpointerdown="app.plugins.${self.name}.advanceStoryPlayMode(30)" ondblclick="app.plugins.${self.name}.advanceStoryPlayMode()">
        <p class="story-playtest-answer" id="NVrichTextLabel"></p>
        <div id="commandDebugLabel"></div>
    </div>
  `;
        document.getElementById('editorContainer').appendChild(element);
        onKeyDown(e => {
          if (!app.editing() || self.previewStory.finished) return;

          switch (e.keyCode) {
            case app.input.keys.Z:
              self.previewStory.changeTextScrollSpeed(10);
              if (self.previewStory.vnSelectedChoice != -1) self.previewStory.vnSelectChoice();
              break;

            case app.input.keys.Up:
              if (self.previewStory.vnSelectedChoice != -1) self.previewStory.vnUpdateChoice(-1);
              break;

            case app.input.keys.Down:
              if (self.previewStory.vnSelectedChoice != -1) self.previewStory.vnUpdateChoice(1);
              break;
          }
        });
        onKeyUp(e => {
          if (e.keyCode === app.input.keys.Z) {
            self.previewStory.changeTextScrollSpeed(200);
            if (self.previewStory.vnSelectedChoice != -1) self.previewStory.vnSelectChoice();
          }
        });
      });
    } else {
      // INKJS PLAY MODE //
      this.previewStory = new _inkjs_ink_renderer__WEBPACK_IMPORTED_MODULE_1__[/* inkRender */ "a"]();
      this.prevSession = {
        story: null,
        prevSavePoints: [],
        childNodes: [],
        recompile: false
      };
      const compiler = new app.data.InkCompiler(); ///

      this.togglePlayMode = function (playModeOverwrite = false) {
        const editor = $('.editor')[0];
        const storyPreviewPlayButton = document.getElementById('storyPlayButton');
        const editorPlayPreviewer = document.getElementById('editor-play');
        app.isEditorInPlayMode(playModeOverwrite);
        $('#editor-play').addClass('inInkMode');
        $('#commandDebugLabel').addClass('inInkMode');

        if (playModeOverwrite) {
          //preview play mode
          editorPlayPreviewer.style.display = 'flex';
          $('#editor').addClass('editor-take-half');
          self.previewStory.emiter.on('finished', function () {
            self.togglePlayMode(false);
            self.gotoLastPlayNode();
          });
          self.previewStory.emiter.on('startedNode', function (e) {
            if (app.isEditorSplit) {
              app.workspace.warpToNode(app.getFirstFoundNode(e.title.toLowerCase().trim()));
            }
          });
          const localVariables = getPluginStore(self.name);
          console.log('VARIABLES::::', localVariables);
          app.data.getSaveData('ink', null, true).then(saveData => {
            const onRecompile = () => {
              self.prevSession = { ...self.prevSession,
                recompile: true
              };
              self.togglePlayMode(true);
            };

            self.previewStory.initInk(compiler, onRecompile, self.prevSession, saveData, app.editing().title().trim(), 'NVrichTextLabel', false, 'commandDebugLabel', app.settings.playtestStyle(), localVariables.variables || []);
          });
        } else {
          //edit mode
          app.editor.session.setScrollTop(editorPlayPreviewer.scrollTop);
          editorPlayPreviewer.style.display = 'none';
          editor.style.display = 'flex';
          $('#editor').removeClass('editor-take-half');
          $(storyPreviewPlayButton).removeClass('disabled');
          self.prevSession = {
            prevSavePoints: self.previewStory.prevSavePoints,
            story: self.previewStory.story,
            childNodes: self.previewStory.textAreaEl ? [...self.previewStory.textAreaEl.childNodes] : [],
            recompile: false
          };
          self.previewStory.terminate();
        }

        app.editor.resize();
      };

      onYarnInPreviewMode(() => self.togglePlayMode(false));
      onYarnSavedNode(() => self.togglePlayMode(false));

      this.advanceStoryPlayMode = function (speed = 5) {};

      onYarnEditorOpen(() => {
        createButton(self.name, {
          iconName: 'play',
          title: 'Preview',
          attachTo: 'bbcodeToolbar',
          onClick: 'togglePlayMode(!app.isEditorInPlayMode())',
          className: 'bbcode-button bbcode-button-right',
          id: 'storyPlayButton'
        });
        const element = document.createElement('div');
        element.innerHTML = `
    <div class="editor-play" id="editor-play" onpointerdown="app.plugins.${self.name}.advanceStoryPlayMode(30)" ondblclick="app.plugins.${self.name}.advanceStoryPlayMode()">
        <p class="story-playtest-answer" id="NVrichTextLabel"></p>
        <div id="commandDebugLabel"></div>
    </div>
  `;
        document.getElementById('editorContainer').appendChild(element);
      });
    }
  };

  updateRunnerMode(); //yarnSetDocumentType

  onYarnSetDocumentType(updateRunnerMode); //TODO remove this ugly hack

  app.togglePlayMode = this.togglePlayMode;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("EVdn")))

/***/ }),

/***/ "5dEm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workspace; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oj90");

const Workspace = function (app) {
  const self = this;
  const PAN_SMALL_STEP = 100;
  const PAN_BIG_STEP = 500;
  const PAN_TRANSITION_TIME = 100;
  const swalSortWarning = {
    toast: true,
    position: 'bottom',
    icon: 'error',
    title: 'Alignment requires two or more nodes be selected.',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true
  };
  this.canvas = $('.arrows')[0];
  this.context = self.canvas.getContext('2d');
  this.gridCanvas = $('#grid-canvas')[0];
  this.gridContext = self.gridCanvas.getContext('2d');
  this.gridEnabled = true;
  this.updateArrowsThrottle = 50;
  this.updateArrowsInterval = undefined;
  this.deferredArrowsDrawInterval = undefined;
  this.nextArrowsUpdate = Number.NEGATIVE_INFINITY;
  this.isDrawingArrows = false;
  this.selectedNodes = [];
  this.scale = 1;
  this.offset = {
    x: 0,
    y: 0
  };
  this.transform = {
    x: 0,
    y: 0
  };
  this.isMarqueeEnabled = false;
  this.marqueeSelection = [];
  this.marqueeRect = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  };
  this.marqueeOffset = [0, 0];
  this.zoomSpeed = 0.005;
  this.zoomLimitMin = 0.05;
  this.zoomLimitMax = 1; // setThrottle
  //
  // Sets the redraw throttle

  this.setThrottle = function (value, e) {
    const throttle = e ? e.target.value : value;
    self.updateArrowsThrottle = _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].clamp(throttle, 16, 250);
  }; // setTranslation
  //
  // Sets the translation on the transform matrix


  this.setTranslation = function (x, y, time = 0) {
    self.transform.x = x;
    self.transform.y = y;
    self.translate(time);
  }; // shiftTranslation
  //
  // Applies an offset to the translation on the transform matrix


  this.shiftTranslation = function (x, y, time = 0) {
    self.setTranslation(self.transform.x + x, self.transform.y + y, time);
  }; // translate
  //
  // Applies translation and scale to the workspace


  this.translate = function (speed) {
    if (speed) self.startUpdatingArrows();
    $('.nodes-holder').finish().transition({
      transform: 'matrix(' + self.scale + ',0,0,' + self.scale + ',' + self.transform.x + ',' + self.transform.y + ')'
    }, speed || 0, 'easeInQuad', function () {
      if (speed) {
        self.stopUpdatingArrows();
      }

      self.updateArrows();
      self.updateGrid();
    });
  }; // toWorkspaceCoordinates
  //
  // Converts "page" coordinates to "workspace" coordinates


  this.toWorkspaceCoordinates = (x, y) => {
    if (app.settings.snapGridEnabled()) {
      return {
        x: self.stepify((x - self.transform.x) / self.scale, app.settings.gridSize()),
        y: self.stepify((y - self.transform.y) / self.scale, app.settings.gridSize())
      };
    } else {
      return {
        x: (x - self.transform.x) / self.scale,
        y: (y - self.transform.y) / self.scale
      };
    }
  }; // onPanLeft
  //
  // Moves all nodes to the right.


  this.onPanLeft = function () {
    self.shiftTranslation(self.getPanAmount(), 0, PAN_TRANSITION_TIME);
  }; // onPanRight
  //
  // Moves all nodes to the left.


  this.onPanRight = function () {
    self.shiftTranslation(-self.getPanAmount(), 0, PAN_TRANSITION_TIME);
  }; // onPanUp
  //
  // Moves all nodes down.


  this.onPanUp = function () {
    self.shiftTranslation(0, self.getPanAmount(), PAN_TRANSITION_TIME);
  }; // onPanDown
  //
  // Moves all nodes up.


  this.onPanDown = function () {
    self.shiftTranslation(0, -self.getPanAmount(), PAN_TRANSITION_TIME);
  }; // getPanAmount
  //
  // Get the amount of panning depending on the kind of panning, big or small


  this.getPanAmount = function () {
    return app.input.isShiftDown ? self.scale * PAN_SMALL_STEP : self.scale * PAN_BIG_STEP;
  }; // setZoom
  //
  // Sets the zoom to the specified value


  this.setZoom = function (value) {
    self.scale = value / 4;
    self.translate(200);
  }; // onZoom
  //
  // Zooms in/out interactively applying zoom limits


  this.onZoom = function (x, y, delta) {
    const previousScale = self.scale;
    const scaleChange = delta * self.zoomSpeed * self.scale;
    self.scale = _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].clamp(self.scale + scaleChange, self.zoomLimitMin, self.zoomLimitMax);
    const mouseX = x - self.transform.x;
    const mouseY = y - self.transform.y;
    const newX = mouseX * (self.scale / previousScale);
    const newY = mouseY * (self.scale / previousScale);
    const deltaX = mouseX - newX;
    const deltaY = mouseY - newY;
    self.shiftTranslation(deltaX, deltaY);
  }; // onDragStart
  //
  // Trigger when the mouse starts dragging over the workspace


  this.onDragStart = function (offset) {
    self.offset.x = offset.x;
    self.offset.y = offset.y;
  }; // onDrag
  //
  // Handles the drag event depending on the state


  this.onDragUpdate = function (offset) {
    if (self.isMarqueeEnabled) {
      app.workspace.onMarqueeEnd();
    }

    app.workspace.shiftNodes(offset);
  }; // onDragEnd
  //
  // Trigger when the mouse ends dragging over the workspace


  this.onDragEnd = function () {
    app.data.saveAppStateToLocalStorage();
  }; // onMarqueeStart
  //
  // Starts drawing the selection marquee


  this.onMarqueeStart = function (offset) {
    self.isMarqueeEnabled = true;
    self.offset.x = offset.x;
    self.offset.y = offset.y;
    self.marqueeSelection = [];
    self.marqueeOffset[0] = 0;
    self.marqueeOffset[1] = 0;
    self.marqueeRect = {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0
    };
  }; // onMarqueeUpdate
  //
  // Updates the selection marquee


  this.onMarqueeUpdate = function (position) {
    if (!self.isMarqueeEnabled) return;
    self.updateMarqueeRect(position);
    self.selectNodesInsideMarquee();
  }; // updateMarqueeRect
  //
  // Updates the with and height of the selection marquee


  this.updateMarqueeRect = function (position) {
    if (position.x > self.offset.x && position.y < self.offset.y) {
      self.marqueeRect.x1 = self.offset.x;
      self.marqueeRect.y1 = position.y;
      self.marqueeRect.x2 = position.x;
      self.marqueeRect.y2 = self.offset.y;
    } else if (position.x > self.offset.x && position.y > self.offset.y) {
      self.marqueeRect.x1 = self.offset.x;
      self.marqueeRect.y1 = self.offset.y;
      self.marqueeRect.x2 = position.x;
      self.marqueeRect.y2 = position.y;
    } else if (position.x < self.offset.x && position.y < self.offset.y) {
      self.marqueeRect.x1 = position.x;
      self.marqueeRect.y1 = position.y;
      self.marqueeRect.x2 = self.offset.x;
      self.marqueeRect.y2 = self.offset.y;
    } else {
      self.marqueeRect.x1 = position.x;
      self.marqueeRect.y1 = self.offset.y;
      self.marqueeRect.x2 = self.offset.x;
      self.marqueeRect.y2 = position.y;
    }

    $('#marquee').css({
      display: 'block',
      x: self.marqueeRect.x1,
      y: self.marqueeRect.y1,
      width: Math.abs(self.marqueeRect.x1 - self.marqueeRect.x2),
      height: Math.abs(self.marqueeRect.y1 - self.marqueeRect.y2)
    });
  }; // selectNodesInsideMarquee
  //
  // Select nodes which are within the marquee.
  // MarqueeSelection is used to prevent it from deselecting already
  // selected nodes and deselecting onces which have been selected
  // by the marquee.


  this.selectNodesInsideMarquee = function () {
    const m1 = self.toWorkspaceCoordinates(self.marqueeRect.x1, self.marqueeRect.y1);
    const m2 = self.toWorkspaceCoordinates(self.marqueeRect.x2, self.marqueeRect.y2);
    const marqueeCoords = {
      left: m1.x,
      right: m2.x,
      top: m1.y,
      bottom: m2.y
    };
    app.nodes().forEach(node => {
      const index = self.marqueeSelection.indexOf(node);
      const alreadySelected = index >= 0;
      const nx = node.x();
      const ny = node.y();
      const nodeCoords = {
        left: nx,
        right: nx + node.width,
        top: ny,
        bottom: ny + node.height
      };
      const marqueeOverNode = _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].rectanglesOverlap(marqueeCoords, nodeCoords);

      if (marqueeOverNode && !alreadySelected) {
        self.selectNodes(node);
        self.marqueeSelection.push(node);
      }

      if (!marqueeOverNode && alreadySelected) {
        self.deselectNodes(node);
        self.marqueeSelection.splice(index, 1);
      }
    });
  }; // onMarqueeEnd
  //
  // Triggered when the mouse stops dragging over the workspace


  this.onMarqueeEnd = function () {
    if (!self.isMarqueeEnabled) return;

    if (self.marqueeSelection.length == 0) {
      self.deselectAll();
    }

    self.isMarqueeEnabled = false;
    self.marqueeSelection = [];
    self.marqueeRect = {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0
    };
    $('#marquee').css({
      display: 'none',
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
  }; // shiftNodes
  //
  // Moves all nodes by a relative offset.


  this.shiftNodes = function (offset) {
    const delta = {
      x: offset.x - self.offset.x,
      y: offset.y - self.offset.y
    };
    self.shiftTranslation(delta.x, delta.y);
    self.offset = offset;
  };

  this.updateGrid = function () {
    const offset = $('.nodes-holder').offset();
    const gridSize = app.settings.gridSize();
    self.gridContext.clearRect(0, 0, self.gridCanvas.width, self.gridCanvas.height);

    if (app.settings.snapGridEnabled()) {
      const width = $(window).width();
      const height = $(window).height();
      const xOffset = offset.left % (gridSize * self.scale);
      const yOffset = offset.top % (gridSize * self.scale);
      self.gridContext.beginPath();
      self.gridContext.lineWidth = 0.5;

      for (var x = xOffset; x < width; x += gridSize * self.scale) {
        self.gridContext.moveTo(x, 0);
        self.gridContext.lineTo(x, height);
      }

      for (var y = yOffset; y < height; y += gridSize * self.scale) {
        self.gridContext.moveTo(0, y);
        self.gridContext.lineTo(width, y);
      }

      self.gridContext.stroke();
      self.gridContext.closePath();

      if (app.settings.theme() === 'blueprint') {
        self.gridContext.beginPath();
        self.gridContext.lineWidth = 0.25;
        const maxCrossDivisions = 16;
        const maxGridSize = 200;
        const crossDivisions = Math.round(Math.min(1, gridSize / maxGridSize) * maxCrossDivisions);
        const divisionsScaled = Math.max(1, Math.round(self.scale * crossDivisions));
        const divisionWidth = gridSize * self.scale / divisionsScaled;
        const xCrossOffset = offset.left % divisionWidth;
        const yCrossOffset = offset.top % divisionWidth;

        for (var x = xCrossOffset; x < width; x += divisionWidth) {
          self.gridContext.moveTo(x, 0);
          self.gridContext.lineTo(x, height);
        }

        for (var y = yCrossOffset; y < height; y += divisionWidth) {
          self.gridContext.moveTo(0, y);
          self.gridContext.lineTo(width, y);
        }

        self.gridContext.stroke();
        self.gridContext.closePath();
      }
    }
  }; // startUpdatingArrows
  //
  // Keeps updating arrows during transition


  this.startUpdatingArrows = function () {
    self.stopUpdatingArrows();
    self.updateArrowsInterval = setInterval(self.updateArrows, self.updateArrowsThrottle);
  }; // stopUpdatingArrows
  //
  // Stops updating arrows after transition


  this.stopUpdatingArrows = function () {
    if (self.updateArrowsInterval) {
      window.clearInterval(self.updateArrowsInterval);
      self.updateArrowsInterval = undefined;
    }
  }; // updateArrows
  //
  // Redraws all the arrows on the workspace


  this.updateArrows = function () {
    if (self.isDrawingArrows) return; // Limit the number of calls to updateArrows

    const now = new Date().getTime();

    if (now < self.nextArrowsUpdate) {
      if (!self.deferredArrowsDrawInterval) {
        self.deferredArrowsDrawInterval = window.setTimeout(self.updateArrows, self.nextArrowsUpdate + self.updateArrowsThrottle - now);
      }

      return;
    }

    self.isDrawingArrows = true;
    window.clearInterval(self.deferredArrowsDrawInterval);
    self.deferredArrowsDrawInterval = undefined;
    self.nextArrowsUpdate = now + self.updateArrowsThrottle;
    const nodes = app.nodes();
    const offset = $('.nodes-holder').offset();
    const scale = self.scale;
    const lineWidth = 3 * scale;
    const arrowWidth = 8 * scale;
    const arrowHeight = 8 * scale;
    const arrowLength = 10;
    const linePoints = [];
    const arrowPoints = [];
    self.canvas.width = $(window).width();
    self.canvas.height = $(window).height(); // self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);

    self.context.lineWidth = lineWidth;
    self.context.strokeStyle = self.context.fillStyle = $('.arrows').css('color');

    for (let node of nodes) {
      node.halfWidth = $(node.element).width() / 2;
      node.halfHeight = $(node.element).height() / 2;

      if (node.linkedTo().length) {
        if (app.settings.lineStyle() === 'straight') {
          const fromX = (node.x() + node.halfWidth) * scale + offset.left;
          const fromY = (node.y() + node.halfHeight) * scale + offset.top;

          for (let linked of node.linkedTo()) {
            const toX = (linked.x() + linked.halfWidth) * scale + offset.left;
            const toY = (linked.y() + linked.halfHeight) * scale + offset.top; // Get the normalized direction from -> to

            const distance = Math.sqrt((fromX - toX) * (fromX - toX) + (fromY - toY) * (fromY - toY));
            const normal = {
              x: (toX - fromX) / distance,
              y: (toY - fromY) / distance
            };
            const dist = (110 + 160 * (1 - Math.max(Math.abs(normal.x), Math.abs(normal.y)))) * scale;
            const from = {
              x: fromX + normal.x * dist,
              y: fromY + normal.y * dist
            };
            const to = {
              x: toX - normal.x * dist,
              y: toY - normal.y * dist
            };
            linePoints.push({
              x1: from.x,
              y1: from.y,
              x2: to.x,
              y2: to.y
            });
            arrowPoints.push({
              x1: to.x + normal.x * arrowLength,
              y1: to.y + normal.y * arrowLength,
              x2: to.x - normal.x * arrowWidth - normal.y * arrowHeight,
              y2: to.y - normal.y * arrowWidth + normal.x * arrowHeight,
              x3: to.x - normal.x * arrowWidth + normal.y * arrowHeight,
              y3: to.y - normal.y * arrowWidth - normal.x * arrowHeight
            });
          }
        } else {
          for (let linked of node.linkedTo()) {
            const fromMidX = (node.x() + node.halfWidth) * scale + offset.left;
            const fromMidY = (node.y() + node.halfHeight) * scale + offset.top;
            const toMidX = (linked.x() + linked.halfWidth) * scale + offset.left;
            const toMidY = (linked.y() + linked.halfHeight) * scale + offset.top;
            const direction = (360 - Math.atan2(toMidY - fromMidY, toMidX - fromMidX) * 180 / Math.PI) % 360;
            let fromX, fromY, toX, toY;
            var horizontal = false;

            if (direction <= 45 || direction >= 315) {
              horizontal = true;
              fromX = (node.x() + node.width) * scale + offset.left;
              fromY = (node.y() + node.halfHeight) * scale + offset.top;
              toX = linked.x() * scale + offset.left - arrowWidth;
              toY = (linked.y() + linked.halfHeight) * scale + offset.top;
              arrowPoints.push({
                x1: toX + arrowWidth,
                y1: toY,
                x2: toX - arrowWidth,
                y2: toY - arrowHeight,
                x3: toX - arrowWidth,
                y3: toY + arrowHeight
              });
            } else if (direction > 45 && direction < 135) {
              horizontal = false;
              fromX = (node.x() + node.halfWidth) * scale + offset.left;
              fromY = node.y() * scale + offset.top;
              toX = (linked.x() + linked.halfWidth) * scale + offset.left;
              toY = (linked.y() + node.height) * scale + offset.top + arrowHeight;
              arrowPoints.push({
                x1: toX,
                y1: toY - arrowHeight,
                x2: toX - arrowWidth,
                y2: toY + arrowHeight,
                x3: toX + arrowWidth,
                y3: toY + arrowHeight
              });
            } else if (direction >= 135 && direction <= 225) {
              horizontal = true;
              fromX = node.x() * scale + offset.left;
              fromY = (node.y() + node.halfHeight) * scale + offset.top;
              toX = (linked.x() + linked.width) * scale + offset.left + arrowWidth;
              toY = (linked.y() + linked.halfHeight) * scale + offset.top;
              arrowPoints.push({
                x1: toX - arrowWidth,
                y1: toY,
                x2: toX + arrowWidth,
                y2: toY - arrowHeight,
                x3: toX + arrowWidth,
                y3: toY + arrowHeight
              });
            } else if (direction > 225 && direction < 315) {
              horizontal = false;
              fromX = (node.x() + node.halfWidth) * scale + offset.left;
              fromY = (node.y() + node.height) * scale + offset.top;
              toX = (linked.x() + linked.halfWidth) * scale + offset.left;
              toY = linked.y() * scale + offset.top - arrowHeight;
              arrowPoints.push({
                x1: toX,
                y1: toY + arrowHeight,
                x2: toX - arrowWidth,
                y2: toY - arrowHeight,
                x3: toX + arrowWidth,
                y3: toY - arrowHeight
              });
            }

            linePoints.push({
              x1: fromX,
              y1: fromY,
              x2: toX,
              y2: toY,
              drawHorizontal: horizontal
            });
          }
        }
      }
    } // Batch draw lines


    self.context.beginPath();

    for (let line of linePoints) {
      self.context.moveTo(line.x1, line.y1);

      if (app.settings.lineStyle() === 'straight') {
        self.context.lineTo(line.x2, line.y2);
      } else {
        if (line.drawHorizontal === true) {
          self.context.bezierCurveTo(line.x2, line.y1, line.x1, line.y2, line.x2, line.y2);
        } else {
          self.context.bezierCurveTo(line.x1, line.y2, line.x2, line.y1, line.x2, line.y2);
        }
      }
    }

    self.context.stroke(); // Batch draw arrows

    self.context.beginPath();

    for (let arrow of arrowPoints) {
      self.context.moveTo(arrow.x1, arrow.y1);
      self.context.lineTo(arrow.x2, arrow.y2);
      self.context.lineTo(arrow.x3, arrow.y3);
    }

    self.context.fill();
    self.isDrawingArrows = false;
  }; // bringToFront
  //
  // Brings the specified node to the top of the nodes stack


  this.bringToFront = function (element) {
    const e = $(element);
    const highestZ = _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getHighestZ(e.parent());
    e.css('z-index', highestZ + 1);
  }; // selectAll
  //
  // Select all nodes on the workspace


  this.selectAll = function () {
    self.selectNodes(app.nodes());
  }; // deselectAll
  //
  // Deselect all nodes on the workspace


  this.deselectAll = function () {
    self.deselectNodes(app.nodes());
  }; // selectNodes
  //
  // Adds nodes to the list of selected nodes


  this.selectNodes = function (nodes) {
    const list = Array.isArray(nodes) ? nodes : [nodes];

    for (let node of list) {
      if (!self.selectedNodes.includes(node)) {
        if (app.canEditNodeMeta(node.title())) {
          self.selectedNodes.push(node);
          node.setSelected(true);
        }
      }
    }
  }; // deselectNodes
  //
  // Removes nodes from the list of selected nodes


  this.deselectNodes = function (nodes) {
    const list = Array.isArray(nodes) ? nodes : [nodes];

    for (let node of list) {
      const index = self.selectedNodes.indexOf(node);

      if (index >= 0) {
        self.selectedNodes.splice(index, 1);
        node.setSelected(false);
      }
    }
  }; // getSelectedNodes
  //
  // Returns a copy of the selected nodes array
  // TODO: is it necesssary to always clone the array? Do some research


  this.getSelectedNodes = function () {
    return self.selectedNodes.length === 1 ? [self.selectedNodes[0]] : Array.apply(this, self.selectedNodes);
  }; // warpToNodeByIdx
  //
  // Moves the viewport to focus a node from the general nodes list


  this.warpToNodeByIdx = function (idx) {
    self.warpToNode(app.nodes()[idx]);
    app.focusedNodeIdx = idx;
  }; // warpToSelectedNodeByIdx
  //
  // Moves the viewport to focus a node from the selected nodes list


  this.warpToSelectedNodeByIdx = function (idx) {
    self.warpToNode(self.getSelectedNodes()[idx]);
    app.focusedNodeIdx = idx;
  }; // warpToNode
  //
  // Moves the viewport to focus the specified node


  this.warpToNode = function (node) {
    if (!node) return;
    var element = $(node.element);
    self.warpToXY(node.x() || node.createX, node.y() || node.createY);
    element.clearQueue();
    element.transition({
      outlineColor: 'pink',
      outlineWidth: 2,
      outlineOffset: 0
    }, 500);
    setTimeout(() => {
      element.transition({
        outlineColor: 'transparent',
        outlineWidth: 1,
        outlineOffset: 50
      }, 300);
    }, 700);
  }; // warpToXY
  //
  // Moves the viewport to focus the x,y position


  this.warpToXY = function (x, y) {
    const nodeWidth = 100;
    const nodeHeight = 100;
    const nodeXScaled = -(x * self.scale);
    const nodeYScaled = -(y * self.scale);
    const winXCenter = $(window).width() / 2;
    const winYCenter = $(window).height() / 2;
    const nodeWidthShift = nodeWidth * self.scale / 2;
    const nodeHeightShift = nodeHeight * self.scale / 2;
    self.setTranslation(nodeXScaled + winXCenter - nodeWidthShift + app.getSplitEditorXOffset(), nodeYScaled + winYCenter - nodeHeightShift, 100);
  }; // alignY
  //
  // Align selected nodes relative to a node with the lowest y-value


  this.alignV = function () {
    if (app.input.isCtrlDown) {
      self.reduceAlignV();
      return;
    }

    const selectedNodes = app.nodes().filter(el => {
      return el.selected;
    }).sort((a, b) => {
      if (a.y() > b.y()) return 1;
      if (a.y() < b.y()) return -1;
      return 0;
    });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    const referenceNode = selectedNodes.shift();
    selectedNodes.forEach((node, i) => {
      node.moveTo(referenceNode.x(), node.y());
    });
  };

  this.reduceAlignV = function () {
    const SPACING = 210;
    const gridSize = app.settings.gridSize();
    const selectedNodes = app.nodes().filter(el => {
      return el.selected;
    }).sort((a, b) => {
      if (a.y() > b.y()) return 1;
      if (a.y() < b.y()) return -1;
      return 0;
    });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    const referenceNode = selectedNodes.shift();

    if (app.settings.snapGridEnabled()) {
      referenceNode.moveTo(self.stepify(referenceNode.x(), app.settings.gridSize()), self.stepify(referenceNode.y(), app.settings.gridSize()));
    }

    const nodeEnd = referenceNode.y() + referenceNode.height;
    const betweenSpacing = gridSize - nodeEnd % gridSize + gridSize;
    selectedNodes.forEach((node, i) => {
      const y = app.settings.snapGridEnabled() ? referenceNode.y() + node.height * (i + 1) + betweenSpacing * (i + 1) : referenceNode.y() + SPACING * (i + 1);
      node.moveTo(referenceNode.x(), y);
    });
  }; // alignH
  //
  // Align selected nodes relative to a node with the lowest x-value


  this.alignH = function () {
    if (app.input.isCtrlDown) {
      self.reduceAlignH();
      return;
    }

    const selectedNodes = app.nodes().filter(el => {
      return el.selected;
    }).sort((a, b) => {
      if (a.x() > b.x()) return 1;
      if (a.x() < b.x()) return -1;
      return 0;
    });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    const referenceNode = selectedNodes.shift();
    selectedNodes.forEach((node, i) => {
      node.moveTo(node.x(), referenceNode.y());
    });
  };

  this.reduceAlignH = function () {
    const SPACING = 210;
    const gridSize = app.settings.gridSize();
    const selectedNodes = app.nodes().filter(el => {
      return el.selected;
    }).sort((a, b) => {
      if (a.x() > b.x()) return 1;
      if (a.x() < b.x()) return -1;
      return 0;
    });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    const referenceNode = selectedNodes.shift();

    if (app.settings.snapGridEnabled()) {
      referenceNode.moveTo(self.stepify(referenceNode.x(), gridSize), self.stepify(referenceNode.y(), gridSize));
    }

    const nodeEnd = referenceNode.x() + referenceNode.width;
    const betweenSpacing = gridSize - nodeEnd % gridSize + gridSize;
    selectedNodes.forEach((node, i) => {
      const x = app.settings.snapGridEnabled() ? referenceNode.x() + node.width * (i + 1) + betweenSpacing * (i + 1) : referenceNode.x() + SPACING * (i + 1);
      node.moveTo(x, referenceNode.y());
    });
  }; // arrangeSpiral
  //
  // Arranges selected nodes in an spiral shape


  this.arrangeSpiral = function () {
    const selectedNodes = self.getSelectedNodes();

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    selectedNodes.forEach((node, i) => {
      node.moveTo(app.settings.snapGridEnabled() ? self.stepify(Math.cos(i * 0.5) * (600 + i * 30), app.settings.gridSize()) : Math.cos(i * 0.5) * (600 + i * 30), app.settings.snapGridEnabled() ? self.stepify(Math.sin(i * 0.5) * (600 + i * 30), app.settings.gridSize()) : Math.cos(i * 0.5) * (600 + i * 30));
    });
    self.warpToXY(0, 0);
  }; // sortAlphabetical
  //
  // Sorts selected nodes in alphabetical order


  this.sortAlphabetical = function () {
    const selectedNodes = self.getSelectedNodes().sort((a, b) => {
      return a.title().localeCompare(b.title());
    });

    if (selectedNodes.length < 2) {
      Swal.fire(swalSortWarning);
      return;
    }

    let arrayWidth = Math.round(selectedNodes.length / 2);
    let currentX = 0;
    let currentY = 0;
    const horizontalSpacing = $(selectedNodes[0].element).width() + 30;
    const verticalSpacing = $(selectedNodes[0].element).height() + 30;
    const gridSize = app.settings.gridSize();

    if (app.settings.snapGridEnabled()) {
      selectedNodes[0].moveTo(self.stepify(selectedNodes[0].x(), gridSize), self.stepify(selectedNodes[0], gridSize));
    }

    selectedNodes.forEach((node, i) => {
      if (i % arrayWidth) {
        currentX += 1;
      } else {
        currentY += 1;
        currentX = 0;
      }

      if (i === 1) currentY = 0;
      const nodeEndX = selectedNodes[0].x() + selectedNodes[0].width;
      const betweenSpacingX = gridSize - nodeEndX % gridSize + gridSize;
      const nodeEndY = selectedNodes[0].y() + selectedNodes[0].height;
      const betweenSpacingY = gridSize - nodeEndY % gridSize + gridSize;
      node.moveTo(app.settings.snapGridEnabled() ? selectedNodes[0].x() + currentX * node.width + currentX * betweenSpacingX : selectedNodes[0].x() + currentX * horizontalSpacing, app.settings.snapGridEnabled() ? selectedNodes[0].y() + currentY * node.height + currentY * betweenSpacingY : selectedNodes[0].y() + currentY * verticalSpacing);
    });
    self.warpToNode(selectedNodes[0]);
  };

  this.stepify = function (num, step_value) {
    return Math.round(num / step_value) * step_value;
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("EVdn")))

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "INAQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oj90");

const Input = function (app) {
  const self = this;
  const MouseButton = Object.freeze({
    Left: 0,
    Middle: 1,
    Right: 2
  });
  const Key = Object.freeze({
    Enter: 13,
    Escape: 27,
    Space: 32,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Delete: 46,
    A: 65,
    C: 67,
    D: 68,
    O: 79,
    S: 83,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90
  });
  this.keys = Key;
  this.mouse = {
    x: 0,
    y: 0
  };
  this.isDragging = false;
  this.isScreenTouched = false;
  this.isMiddleButtonDown = false;
  this.isLeftButtonDown = false;
  this.isShiftDown = false;
  this.isCtrlDown = false;
  this.isHoverOverWorkspace = false; // trackMouseEvents
  //
  // Keeps track of mouse/touch events

  this.trackMouseEvents = function () {
    $(document).on('pointerdown', e => {
      self.isDragging = e.target.className === 'nodes';
      self.mouse.x = e.pageX;
      self.mouse.y = e.pageY;
      self.isMiddleButtonDown = e.button === MouseButton.Middle;
      this.isLeftButtonDown = e.button === MouseButton.Left;

      if (app.inWorkspace()) {
        if (self.isDragging) {
          switch (e.button) {
            case MouseButton.Left:
              app.workspace.onMarqueeStart({
                x: e.pageX,
                y: e.pageY
              });
              break;

            case MouseButton.Middle:
              app.workspace.onDragStart({
                x: e.pageX,
                y: e.pageY
              });
              break;
          }
        }
      } else if (app.inEditor() && e.button === MouseButton.Right) {
        app.guessPopUpHelper();
        e.preventDefault();
      }
    });
    window.addEventListener('touchstart', () => {
      self.isScreenTouched = true;
    });
    $(document).on('pointermove', e => {
      self.mouse.x = e.pageX;
      self.mouse.y = e.pageY;
    });
    $(document).on('mousemove touchmove', e => {
      if (self.isDragging) {
        app.focusedNodeIdx = -1;
        const pageX = self.isScreenTouched && e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        const pageY = self.isScreenTouched && e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

        if (app.inWorkspace()) {
          if (e.altKey || self.isMiddleButtonDown || self.isScreenTouched) app.workspace.onDragUpdate({
            x: pageX,
            y: pageY
          });else app.workspace.onMarqueeUpdate({
            x: pageX,
            y: pageY
          });
        }
      }
    });
    $(document).on('pointerup touchend', e => {
      self.isScreenTouched = false;
      self.isDragging = false;
      if (e.button === MouseButton.Left) self.isLeftButtonDown = false;
      if (e.button === MouseButton.Middle) self.isMiddleButtonDown = false;

      if (app.inWorkspace()) {
        app.workspace.onDragEnd();
        app.workspace.onMarqueeEnd();
      }
    });
    $('.nodes').mousewheel(event => {
      // https://github.com/InfiniteAmmoInc/Yarn/issues/40
      if (event.altKey) return;

      if (app.inWorkspace() || self.isHoverOverWorkspace) {
        app.workspace.onZoom(event.pageX, event.pageY, event.deltaY);
        event.preventDefault();
      }
    });
    $('.nodes').hover(() => {
      self.isHoverOverWorkspace = true;
    }, () => {
      self.isHoverOverWorkspace = false;
    });
    $('.nodes').on('pointerdown', () => {
      if (app.isEditorSplit) {
        app.focusEditor(false);
        app.makeNewNodesFromLinks();
        app.propagateUpdateFromNode(app.editing());
        app.mustUpdateTags = true;
        app.updateTagsRepository();
        app.workspace.updateArrows();
      }
    });
    $(document).contextmenu(e => {
      if (!app.inWorkspace()) return;
      const canSpawn = $(e.target).hasClass('nodes') || $(e.target).parents('.nodes').length;

      if (e.button === MouseButton.Right && canSpawn) {
        const {
          x,
          y
        } = app.workspace.toWorkspaceCoordinates(e.pageX, e.pageY);
        app.newNodeAt(x, y);
      }

      return !canSpawn;
    });
  }; // trackKeyboardEvents
  //
  // Keeps track of keyboard events


  this.trackKeyboardEvents = function () {
    $(document).on('keyup keydown', e => {
      self.isShiftDown = e.shiftKey;
      self.isCtrlDown = e.ctrlKey;
    }); // Workspace/Editor keyboard shortcuts

    $(document).on('keyup', function (e) {
      if (e.keyCode === Key.Space) {
        if (app.inWorkspace() && e.altKey || app.inEditor() && !e.altKey) return;
        app.workspace.scale = 1;
        const selectedNodes = app.workspace.getSelectedNodes();
        const isNodeSelected = selectedNodes.length > 0;
        const nodes = isNodeSelected > 0 ? selectedNodes : app.nodes(); // Cycle focused node

        ++app.focusedNodeIdx;
        if (app.focusedNodeIdx < 0 || app.focusedNodeIdx >= nodes.length) app.focusedNodeIdx = 0;

        if (app.inWorkspace()) {
          // Spacebar cycles between all or selected nodes
          if (isNodeSelected) {
            app.workspace.warpToSelectedNodeByIdx(app.focusedNodeIdx);
          } else {
            app.workspace.warpToNodeByIdx(app.focusedNodeIdx);
          }
        } else if (app.inEditor()) {
          // alt+Spacebar cycles between nodes and edits the focused node
          app.editNode(app.nodes()[app.focusedNodeIdx]);
        }
      }
    }); // Workspace keyboard shortcuts (keydown)

    $(document).on('keydown', e => {
      if (!app.inWorkspace()) return;

      if ((e.metaKey || e.ctrlKey) && e.shiftKey) {
        switch (e.keyCode) {
          case Key.S:
            app.data.trySave(_utils__WEBPACK_IMPORTED_MODULE_0__["FILETYPE"].JSON);
            break;
          // ctrl+shift+s

          case Key.A:
            app.data.tryAppend();
            break;
          // ctrl+shift+a
        }
      }

      if ((e.metaKey || e.ctrlKey) && e.altKey) {
        switch (e.keyCode) {
          case Key.S:
            app.data.trySaveCurrent();
            break;
          // ctrl+alt+s
        }
      } else if (e.metaKey || e.ctrlKey) {
        switch (e.keyCode) {
          case Key.C:
            // ctrl+c
            app.nodeClipboard = app.cloneNodeArray(app.workspace.getSelectedNodes());
            break;

          case Key.D:
            app.workspace.deselectAll();
            break;
          // ctrl+d

          case Key.O:
            app.data.tryOpenFile();
            break;
          // ctrl+o

          case Key.S:
            app.data.trySaveCurrent();
            break;
          // ctrl+s

          case Key.X:
            // ctrl+x
            const selected = app.workspace.getSelectedNodes();
            app.nodeClipboard = app.cloneNodeArray(selected);
            app.deleteNodes(selected);
            break;

          case Key.Y:
            app.historyDirection('redo');
            break;
          // ctrl+y

          case Key.Z:
            app.historyDirection('undo');
            break;
          // ctrl+z
        }
      } else {
        // Delete
        if (e.keyCode === Key.Delete || e.key === 'Delete') {
          app.confirmDeleteNodes(app.workspace.getSelectedNodes());
        } // Arrows
        else if (!app.$searchField.is(':focus') && !e.ctrlKey && !e.metaKey) {
            if (e.keyCode === Key.A || e.keyCode === Key.Left) // a or left arrow
              app.workspace.onPanLeft();else if (e.keyCode === Key.D || e.keyCode === Key.Right) // d or right arrow
              app.workspace.onPanRight();else if (e.keyCode === Key.W || e.keyCode === Key.Up) // w or up arrow
              app.workspace.onPanUp();else if (e.keyCode === Key.S || e.keyCode === Key.Down) // s or down arrow
              app.workspace.onPanDown();
          }
      }
    }); // Workspace keyboard shortcuts (keyup)

    $(document).on('keyup', e => {
      if (!app.inWorkspace()) return;

      if (e.metaKey || e.ctrlKey) {
        switch (e.keyCode) {
          case Key.A:
            app.workspace.selectAll();
            break;
          // ctrl+a

          case Key.V:
            app.pasteNodes();
            break;
          // ctrl+v
        }
      } else {
        if (e.keyCode === Key.Enter || e.key === 'Enter') {
          const activeNode = app.nodes()[app.focusedNodeIdx];
          if (activeNode) app.editNode(activeNode);else app.editNode(app.nodes()[0]);
        }
      }
    }); // Editor keyboard shortcuts (keydown)

    $(document).on('keydown', function (e) {
      if (!app.inEditor()) return;

      if (e.metaKey || e.ctrlKey) {
        switch (e.keyCode) {
          case Key.C:
            self.clipboard = app.editor.getSelectedText();
            break;

          case Key.X:
            document.execCommand('copy');
            app.clipboard = app.editor.getSelectedText();
            app.insertTextAtCursor('');
            break;

          case Key.S:
            app.data.trySaveCurrent();
            break;
        }
      } else {
        switch (e.keyCode) {
          case Key.Escape:
            app.saveNode();
            app.closeEditor();
            break;
        }
      }
    }); // Editor keyboard shortcuts (keup)

    $(document).on('keyup', function (e) {
      if (!app.inEditor()) return;

      if ((e.metaKey || e.ctrlKey) && e.altKey) {
        switch (e.keyCode) {
          case Key.Enter:
            app.saveNode();
            app.closeEditor();
            break;
          //ctrl+alt+enter closes/saves an open node
        }
      }
    }); // Settings dialog shortcuts

    $(document).on('keydown', function (e) {
      if (!app.ui.settingsDialogVisible()) return;

      switch (e.keyCode) {
        case Key.Escape:
          app.ui.closeSettingsDialog();
          break;
      }
    });
    $(document).on('keyup keydown pointerdown pointerup', function (e) {
      if (!app.inEditor()) return;
      app.updateEditorStats();
    });
  }; // initKnockoutBindings
  //
  // Enables "preventBubble" and "mousedown" bindings on the .html


  this.initKnockoutBindings = function () {
    ko.bindingHandlers.preventBubble = {
      init: function (element, valueAccessor) {
        var eventName = ko.utils.unwrapObservable(valueAccessor());
        ko.utils.registerEventHandler(element, eventName, function (event) {
          event.cancelBubble = true;
          if (event.stopPropagation) event.stopPropagation();
        });
      }
    };
    ko.bindingHandlers.mousedown = {
      init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());
        $(element).mousedown(function () {
          value();
        });
      }
    };
  }; // init
  //
  // Initializes the input system


  const init = function () {
    self.initKnockoutBindings();
    self.trackMouseEvents();
    self.trackKeyboardEvents();
  };

  init();
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("EVdn"), __webpack_require__("Z1dp")))

/***/ }),

/***/ "P0sH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var _libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("owJe");
/* harmony import */ var _libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("W2Rx");
/* harmony import */ var _workspace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5dEm");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("INAQ");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pYPP");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fkuv");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2Qx2");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oj90");
/* harmony import */ var _richTextFormatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("l8+o");
/* eslint-disable jquery/no-hide */

/* eslint-disable jquery/no-ajax */

/* eslint-disable jquery/no-show */








 // TODO: refactoring proposals
//
// Create Platform class: provides platform specific info and abstractions
// Create History class: handles command history navigation (undo/redo)
// Create Editor class: handles editor setup and events

var App = function (name, version) {
  const self = this;
  this.utils = _utils__WEBPACK_IMPORTED_MODULE_7__["Utils"];

  this.setTheme = function (name, e) {
    let themeName = e ? e.target.value : name;
    setTimeout(self.initGrid, 50);
    setTimeout(self.workspace.updateArrows, 50);
    $('#theme-stylesheet').attr('href', _utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].getPublicPath(`themes/${themeName}.css`));
  };

  this.setLanguage = function (language, e) {
    const languageId = e ? e.target.value : language;
    Object(_libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0__["load_dictionary"])(self.settings.language().split('-')[0]);
    const event = new CustomEvent('yarnSetLanguage');
    event.language = languageId;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event);
  };

  this.setDocumentType = function (documentType, e) {
    const documentTypeId = e ? e.target.value : documentType;
    self.settings.documentType(documentTypeId);
    console.log('Set doc type', documentType, app.data.inkCompiler);

    if (documentTypeId === 'ink') {
      if (app.data.inkCompiler === null) app.data.inkCompiler = new app.data.InkCompiler();
      _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].addGlobalScopeToInkDoc();
      app.setMarkupLanguage('html'); //inkjs is using xml out of the box
    } else {
      app.data.inkCompiler = null;
    }

    app.updateNodeLinks();
    const event = new CustomEvent('yarnSetDocumentType');
    event.language = documentTypeId;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event);
  };

  this.setMarkupLanguage = function (language, e) {
    const markupLanguage = e ? e.target.value : language;
    app.settings.markupLanguage(markupLanguage);
    self.richTextFormatter = new _richTextFormatter__WEBPACK_IMPORTED_MODULE_8__[/* RichTextFormatter */ "a"](self);
    self.mustRefreshNodes.notifySubscribers();
  };

  this.setFiletypeVersion = function (typeVersion, e) {
    const filetypeVersion = e ? e.target.value : typeVersion;
    self.filetypeVersion = filetypeVersion;
  };

  this.setGistCredentials = function (gist, e) {
    const {
      token,
      file
    } = gist;

    const Gists = __webpack_require__("XZLo");

    const gists = new Gists({
      token
    });
    self.gists = gists;
    self.gists.file = file;
  }; // Ideally this dependencies should be injected by index.js


  this.input = new _input__WEBPACK_IMPORTED_MODULE_3__[/* Input */ "a"](self);
  this.settings = new _settings__WEBPACK_IMPORTED_MODULE_4__[/* Settings */ "a"](self);
  this.workspace = new _workspace__WEBPACK_IMPORTED_MODULE_2__[/* Workspace */ "a"](self);
  this.ui = new _ui__WEBPACK_IMPORTED_MODULE_5__[/* UI */ "a"](self);
  this.richTextFormatter = new _richTextFormatter__WEBPACK_IMPORTED_MODULE_8__[/* RichTextFormatter */ "a"](self);
  this.data = _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"];
  this.name = ko.observable(name);
  this.version = ko.observable(version);
  this.editing = ko.observable(null);
  this.nodes = ko.observableArray([]);
  this.tags = ko.observableArray([]);
  this.mustRefreshNodes = ko.observable();
  this.mustUpdateTags = true;
  this.nodeHistory = [];
  this.nodeFuture = [];
  this.editingHistory = [];
  this.editingSaveHistoryTimeout = null;
  this.focusedNodeIdx = -1;
  this.isElectron = false;
  this.editor = null;
  this.nodeVisitHistory = [];
  this.plugins = {
    pluginStorage: {}
  };
  this.clipboard = '';
  this.nodeClipboard = [];
  this.speachInstance = null;
  this.editingPath = ko.observable(null);
  this.$searchField = $('.search-field');
  this.isEditorInPreviewMode = false;
  this.isEditorInPlayMode = ko.observable(false);
  this.isEditorSplit = false;
  this.isEditorFocused = false;
  this.editorResizeHandleOptions = {
    handleSelector: '#editor-resize-handle',
    resizeHeight: false,
    resizeWidthFrom: 'right',
    onDragStart: function () {
      self.isSplitEditorInFocus = true;
      $('#node-editor').removeClass('split-editor-out-of-focus');
    },
    onDragEnd: function () {
      self.editor.resize();
      self.settings.editorSplitSize($('#editor-form').width());
    }
  }; // inEditor
  //
  // Indicates if we are in the editor view

  this.inEditor = () => (self.editing() || self.isEditorSplit && self.isEditorFocused) && !self.ui.isDialogOpen(); // inWorkspace
  //
  // Indicates if we are in the workspace view


  this.inWorkspace = () => (!self.editing() || self.isEditorSplit && self.isEditorFocused === false) && !self.ui.isDialogOpen(); // run
  //
  // Initializes the application


  this.run = function () {
    var osName = 'Unknown OS';
    if (navigator.platform.indexOf('Win') != -1) osName = 'Windows';
    if (navigator.platform.indexOf('Mac') != -1) osName = 'MacOS';
    if (navigator.platform.indexOf('X11') != -1) osName = 'UNIX';
    if (navigator.platform.indexOf('Linux') != -1) osName = 'Linux';
    if (navigator.platform.indexOf('Linux') != -1) osName = 'Linux';
    self.isElectron = navigator.userAgent.toLowerCase().includes('electron');
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|iPad|iPhone|iPod/.test(userAgent.toLowerCase()) && !window.MSStream) {
      osName = 'mobile';
    }

    if (osName == 'Windows') self.workspace.zoomSpeed = 0.1;
    window.addEventListener('beforeunload', e => {
      this.data.saveAppStateToLocalStorage();
      return null;
    });
    window.addEventListener('DOMContentLoaded', e => {
      // Electron is receiving a filepath
      if (self.electron) {
        const filePath = self.electron.remote.process.argv.length > 1 ? self.electron.remote.process.argv[1] : null;

        if (filePath && app.fs.existsSync(filePath)) {
          this.data.openFileFromFilePath(filePath);
          return;
        }
      }

      this.data.loadAppStateFromLocalStorage(); // PWA is receiving shared data

      const parsedUrl = new URL(window.location);
      const sharedText = parsedUrl.searchParams.get('text') || parsedUrl.searchParams.get('url');

      if (sharedText !== null) {
        self.insertTextAtCursor(sharedText + '\n', true); // setTimeout(() => self.insertTextAtCursor(sharedText), 100);
      }
    }); // PWA install promotion banner on start

    let deferredPrompt;
    const addBtn = $('#addPwa')[0];
    addBtn.style.display = 'none'; // addBtn.addEventListener('click', (e) => {console.log(e)});

    window.addEventListener('beforeinstallprompt', e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      deferredPrompt = e; // Update UI to notify the user they can add to home screen

      addBtn.style.display = 'block';
      addBtn.addEventListener('click', e => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        deferredPrompt.prompt(); // Wait for the user to respond to the prompt

        deferredPrompt.userChoice.then(choiceResult => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
            addBtn.style.display = 'none';
          } else {
            console.log('User dismissed the A2HS prompt');
          }

          deferredPrompt = null;
        });
      });
    });
    $('#app').show();
    ko.applyBindings(self, $('#app')[0]); // this is set in the VSCode extension YarnEditorPanel
    // this is true when we're opening a file in the VSCode extension;
    // adding that start node here was causing issues with arrows (because of race conditions)

    if (!self.editingVisualStudioCodeFile()) {
      self.newNode().title('Start');
    }

    self.settings.apply(); // search field enter

    $('.search-title input').click(self.updateSearch);
    $('.search-body input').click(self.updateSearch);
    $('.search-tags input').click(self.updateSearch);
    self.$searchField.on('input', self.updateSearch);
    self.$searchField.on('keyup', function (e) {
      // escape
      if (e.keyCode == 27) self.clearSearch();else self.searchWarp();
    });
    if (osName === 'mobile') self.workspace.setZoom(3);
    $(window).on('resize', function () {
      if (self.ui.isScreenNarrow() && self.editing() && self.isEditorSplit) {
        self.toggleEditorView();
      }

      self.workspace.updateArrows();
      self.initGrid();
    });
    setTimeout(self.initGrid, 50);

    this.guessPopUpHelper = function () {
      if (/color=#([a-zA-Z0-9]{3,6})$/.test(self.getTagBeforeCursor())) {
        self.insertColorCode();
      }
    }; // TODO: move to editor


    this.insertEmoji = function () {
      this.emPicker.toggle();
      self.togglePreviewMode(true);
      $('#emojiPicker-container').css({
        left: self.input.mouse.x - 200,
        top: self.input.mouse.y - 125
      });
      $('#emojiPicker-container').show();
    }; // TODO: move to editor


    this.insertColorCode = function () {
      if ($('#colorPicker-container').is(':visible')) {
        return;
      } // http://bgrins.github.io/spectrum/


      $('#colorPicker').spectrum('set', self.editor.getSelectedText());
      $('#colorPicker').spectrum('toggle');
      $('#colorPicker-container').css({
        left: self.input.mouse.x - 70,
        top: self.input.mouse.y - 50
      });
      $('#colorPicker-container').show();
      self.togglePreviewMode(true);
      setTimeout(() => {
        const currentColor = $('#colorPicker').spectrum('get');
        self.applyPickerColorEditor(currentColor);
      }, 100);
    }; // TODO: move to editor


    this.applyPickerColorEditor = function (color) {
      const selectRange = JSON.parse(JSON.stringify(self.editor.selection.getRange()));
      self.editor.selection.setRange(selectRange);
      const colorCode = color.toHexString().replace('#', '');
      self.editor.session.replace(selectRange, colorCode);
      self.editor.selection.setRange({
        start: self.editor.getCursorPosition(),
        end: {
          row: self.editor.getCursorPosition().row,
          column: self.editor.getCursorPosition().column - colorCode.length
        }
      });
      self.togglePreviewMode(true);
    };

    document.addEventListener('contextmenu', function (evt) {
      if (self.editing()) evt.preventDefault();
    }, false); // Handle file dropping

    document.ondragover = document.ondrop = e => {
      e.preventDefault();
    };

    document.body.ondrop = e => {
      e.preventDefault();

      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].appendFile(e.dataTransfer.files[i], e.dataTransfer.files[i].name, false);
      }
    }; // this is how the VSCode extension sends its messages back to the app


    window.addEventListener('message', event => {
      const message = event.data;

      switch (message.type) {
        // sent whenever the temporary file that's open gets changed
        case 'UpdateNode':
          // find the node that was being edited... we check originalNodeTitle here
          // since it's possible that the user changed the node's title in the editor
          self.nodes().forEach(node => {
            if (node.title().trim() === message.payload.originalNodeTitle.trim()) {
              node.title(message.payload.title);
              node.tags(message.payload.tags);
              node.body(message.payload.body); // re-send the document back to the extension so it updates its underlying text document

              self.setYarnDocumentIsDirty();
            }
          });
          break;

        default:
          break;
      }
    }); // Callback for embedding in other webapps

    var event = new CustomEvent('yarnReady');
    event.document = document;
    event.data = _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"];
    event.app = this;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event); // Attempt loading a public gist file, if it's present in the url params

    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const gistId = urlParams.get('gist');
    const fileName = urlParams.get('fileName');

    if (gistId && fileName) {
      //TODO move to data class fetchFromUrl(url, cb)
      fetch('https://api.github.com/gists/' + gistId).then(data => data.json()).then(content => {
        const gistFileContents = content.files[fileName].content;
        _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].openGist(gistFileContents, fileName);
      });
    }
  };

  this.limitNodesUpdate = function (fn) {
    self.nodes.extend({
      rateLimit: {
        method: 'notifyWhenChangesStop',
        timeout: 250
      }
    });
    fn();
    self.nodes.limit(callback => () => callback());
  };

  this.getNodesConnectedTo = function (toNode) {
    var connectedNodes = [];
    var nodes = self.nodes();

    for (var i in nodes) {
      if (nodes[i] != toNode && nodes[i].isConnectedTo(toNode, true)) {
        var hasNode = false;

        for (var j in connectedNodes) {
          if (connectedNodes[j] == nodes[i]) {
            hasNode = true;
            break;
          }
        }

        if (!hasNode) connectedNodes.push(nodes[i]);
      }
    }

    return connectedNodes;
  };

  this.matchConnectedColorID = function (fromNode) {
    var nodes = self.getNodesConnectedTo(fromNode);

    for (var i in nodes) nodes[i].colorID(fromNode.colorID());
  };

  this.quit = function () {
    if (self.isElectron) {// remote.app.quit();
    }
  };

  this.canEditNodeMeta = function (title) {
    return app.settings.documentType() !== 'ink' || title.trim() !== _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].InkGlobalScopeNodeName;
  };

  this.sanitiseNodeTitle = function () {
    if (app.settings.documentType() === 'ink') {
      if (!app.editing().title().startsWith('function ')) {
        app.editing().title(app.editing().title().replace(/[ ]/g, '_'));
      }
    }
  };

  this.validateTitle = function () {
    var enteredValue = document.getElementById('editorTitle').value;
    var editorTitle = $('#editorTitle');

    if (self.getOtherNodeTitles().includes(enteredValue) || self.titleExistsTwice(enteredValue)) {
      editorTitle.attr('class', 'title title-error');
      editorTitle.attr('title', 'Another node has the same title');
    } else if (app.settings.documentType() === 'yarn' && !RegExp('^[a-z0-9]+$', 'i').test(enteredValue)) {
      editorTitle.attr('class', 'title title-error');
      editorTitle.attr('title', 'Only upper or lower case letters and numbers are allowed in a node title.');
    } else {
      editorTitle.removeAttr('title');
      editorTitle.removeClass('title-error');
    }
  };

  this.refreshWindowTitle = function () {
    let title = '';

    if (_data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].lastStorageHost() === 'LOCAL') {
      title = 'Yarn - ' + (_data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].editingPath() || _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].editingName()) + ' ' + (_data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].isDocumentDirty() ? '*' : '');
    } else if (_data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].lastStorageHost() === 'GIST') {
      title = 'Gist - ' + (_data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].editingPath() || _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].editingName()) + ' ' + (_data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].isDocumentDirty() ? '*' : '');
    }

    if (self.electron) {
      self.electron.remote.getCurrentWindow().setTitle(title);
    } else {
      document.title = title;
    }
  }; // returns `true` is we're in the VSCode extension


  this.usingVisualStudioCodeExtension = function () {
    // this is put on window by the extension
    return !!window.vsCodeApi;
  }; // returns `true` if we're opening a file in the VSCode extension
  // (as opposed to running the full editor)


  this.editingVisualStudioCodeFile = function () {
    return window.editingVsCodeFile === true;
  }; // This should be called whenever we want to mark the document as changed.


  this.setYarnDocumentIsDirty = function () {
    // If we're in the VSCode extension, send it an update
    if (self.usingVisualStudioCodeExtension() && self.editingVisualStudioCodeFile()) {
      _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].getSaveData(_data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].editingType()).then(payload => {
        window.vsCodeApi.postMessage({
          type: 'DocumentEdit',
          // we just send the whole doc here every time...
          payload
        });
      });
    }
  };

  this.recordNodeAction = function (action, node) {
    //we can't go forward in 'time' when
    //new actions have been made
    if (self.nodeFuture.length > 0) {
      for (var i = 0; i < self.nodeFuture.length; i++) {
        var future = self.nodeFuture.pop();
        delete future.node;
      }

      delete self.nodeFuture;
      self.nodeFuture = [];
    }

    var historyItem = {
      action: action,
      node: node,
      lastX: node.x(),
      lastY: node.y()
    };

    if (action == 'removed') {
      historyItem.lastY += 80;
    }

    self.nodeHistory.push(historyItem);
    self.setYarnDocumentIsDirty();
  };

  this.historyDirection = function (direction) {
    function removeNode(node) {
      var index = self.nodes.indexOf(node);

      if (index >= 0) {
        self.nodes.splice(index, 1);
      }

      self.updateNodeLinks();
    }

    var historyItem = null;
    if (direction == 'undo') historyItem = self.nodeHistory.pop();else historyItem = self.nodeFuture.pop();
    if (!historyItem) return;
    var action = historyItem.action;
    var node = historyItem.node;

    if (direction == 'undo') {
      //undo actions
      if (action == 'created') {
        historyItem.lastX = node.x();
        historyItem.lastY = node.y();
        removeNode(node);
      } else if (action == 'removed') {
        self.recreateNode(node, historyItem.lastX, historyItem.lastY);
      }

      self.nodeFuture.push(historyItem);
      self.setYarnDocumentIsDirty();
    } //redo undone actions
    else {
        if (action == 'created') {
          self.recreateNode(node, historyItem.lastX, historyItem.lastY);
        } else if (action == 'removed') {
          removeNode(node);
        }

        self.nodeHistory.push(historyItem);
        self.setYarnDocumentIsDirty();
      }
  };

  this.recreateNode = function (node, x, y) {
    self.nodes.push(node);
    node.moveTo(x, y);
    self.updateNodeLinks();
  };

  this.setSelectedColors = function (node) {
    var nodes = self.workspace.getSelectedNodes();
    nodes.splice(nodes.indexOf(node), 1);

    for (var i in nodes) nodes[i].colorID(node.colorID());
  };

  this.pasteNodes = function () {
    if (!self.nodeClipboard.length) {
      return;
    }

    self.workspace.deselectAll();
    self.nodeClipboard.forEach(function (copiedNode) {
      var node = new _node__WEBPACK_IMPORTED_MODULE_1__[/* Node */ "a"]({
        title: self.getUniqueTitle(copiedNode.title()),
        body: copiedNode.body(),
        tags: copiedNode.tags(),
        colorID: copiedNode.colorID(),
        x: copiedNode.createX,
        y: copiedNode.createY
      });
      self.nodes.push(node);
      self.workspace.selectNodes(node);
      self.recordNodeAction('created', node);
    });
    self.updateNodeLinks();
  };

  this.confirmDeleteNodes = function (toDelete) {
    const node = Array.isArray(toDelete) ? undefined : toDelete;
    const selected = Array.isArray(toDelete) ? [...toDelete] : node && node.selected ? [...self.workspace.getSelectedNodes()] : [toDelete];

    if (selected.length) {
      Swal.fire({
        title: 'Are you sure?',
        text: `${selected.length} ${selected.length === 1 ? 'node' : 'nodes'} will be deleted.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          self.deleteNodes(selected);
        }
      });
    }
  };

  this.deleteNodes = function (nodes) {
    const list = Array.isArray(nodes) ? nodes : [nodes];
    const promises = [];

    for (let i = list.length - 1; i >= 0; --i) promises.push(list[i].remove());

    Promise.all(promises).then(() => {
      self.limitNodesUpdate(() => {
        for (let i = list.length - 1; i >= 0; --i) {
          if (self.inEditor()) {
            if (self.editing() === list[i]) {
              self.closeEditor();
            }
          }

          self.deleteNode(list[i]);
        }

        self.updateNodeLinks();
        self.workspace.deselectNodes(list);
        self.workspace.updateArrows();
      });
    });
  };

  this.deleteNode = function (node) {
    const index = self.nodes.indexOf(node);

    if (index >= 0) {
      self.recordNodeAction('removed', node);
      self.nodes.splice(index, 1);
    }

    self.setYarnDocumentIsDirty();
  };

  this.cloneNodeArray = function (nodeArray) {
    return nodeArray.map(function (oldNode) {
      return new _node__WEBPACK_IMPORTED_MODULE_1__[/* Node */ "a"]({
        title: oldNode.title(),
        body: oldNode.body(),
        tags: oldNode.tags(),
        colorID: oldNode.colorID(),
        x: oldNode.x() + 10,
        y: oldNode.y() + 10
      });
    });
  }; // TODO: used just once. Fuse with newNodeAt and makeNodeWithName


  this.newNode = function (updateLinks = true) {
    var node = new _node__WEBPACK_IMPORTED_MODULE_1__[/* Node */ "a"]();
    self.nodes.push(node);
    if (updateLinks) self.updateNodeLinks();
    self.recordNodeAction('created', node);
    return node;
  };

  this.newNodeAt = function (x, y) {
    var node = new _node__WEBPACK_IMPORTED_MODULE_1__[/* Node */ "a"]({
      x: x - 100,
      y: y - 100
    });
    self.nodes.push(node);
    self.updateNodeLinks();
    self.recordNodeAction('created', node);
    return node;
  };

  this.searchTextInEditor = function (show = true) {
    if (show) {
      self.editor.execCommand('find');
    } else if (self.editor.searchBox) {
      self.editor.searchBox.hide();
    }
  };

  this.showRandomQuote = function () {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/?',
      dataType: 'jsonp',
      data: 'method=getQuote&format=jsonp&lang=en&jsonp=?',
      success: function (response) {
        Swal.fire({
          text: response.quoteText + '\n\n-' + response.quoteAuthor
        });
      }
    });
  };

  this.editNode = function (node, dontOpenInactive = true) {
    if (!dontOpenInactive && !node.active()) {
      return;
    } // this is a setting that can only be set by the VSCode extension
    // if it's true, when we go to edit a node we actually open it in VSCode's text editor


    if (self.settings.alwaysOpenNodesInVisualStudioCodeEditor()) {
      self.editNodeInVisualStudioCodeEditor(node);
      return;
    } // Make sure we save the node being currently edited before editing a new
    // one using the context menu


    if (self.editing() && self.editing() !== node) self.saveNode(false);

    if (self.isEditorInPlayMode()) {
      self.togglePlayMode(false);
    }

    if (self.isEditorInPreviewMode) {
      self.togglePreviewMode(false);
    }

    node.oldTitle = node.title(); // To check later if "title" changed

    self.editing(node);
    self.mustUpdateTags = true;
    $('#node-editor-background').css({
      opacity: 0
    }).transition({
      opacity: 1
    }, 250);
    $('#node-editor').css({
      y: '-100',
      opacity: 0
    }).transition({
      y: '0',
      opacity: 1.0
    }, 250);
    self.editor = ace.edit('editor');
    self.editor.setOptions({
      scrollPastEnd: 0.5
    });
    self.editor.focus();
    self.editor.navigateFileEnd(); /// set color picker

    $('#colorPicker').spectrum({
      flat: true,
      showButtons: false,
      showInput: true,
      showPalette: true,
      preferredFormat: 'hex',
      palette: [['#000', '#444', '#666', '#999', '#ccc', '#eee', '#f3f3f3', '#fff'], ['#f00', '#f90', '#ff0', '#0f0', '#0ff', '#00f', '#90f', '#f0f'], ['#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#cfe2f3', '#d9d2e9', '#ead1dc']],
      move: function (color) {
        self.applyPickerColorEditor(color);
      },
      clickoutFiresChange: true
    }); /// Enable autocompletion for node links

    const langTools = ace.require('ace/ext/language_tools');

    const nodeLinksCompleter = _utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].createAutocompleter(app.settings.documentType() === 'ink' ? ['divert.target'] : ['string.llink', 'string.rlink'], app.getOtherNodeTitles().map(title => {
      const otherNode = self.getNodeByTitle(title);
      return {
        word: title,
        title,
        about: `${otherNode.tags().length > 0 ? `tags: ${otherNode.tags()}<br/>` : ''}Preview:<br/>${otherNode.clippedBody()}`,
        titleStyle: node.titleStyles[otherNode.colorID()]
      };
    }), 'Node Link'); // console.log(langTools);

    langTools.setCompleters([nodeLinksCompleter, langTools.keyWordCompleter, langTools.textCompleter, langTools.snippetCompleter]); // autocompletion

    let autoCompleteTimeout = undefined;
    self.editor.getSession().on('change', function (evt) {
      const autoComplete = self.settings.autoCloseTags();

      if (evt.action === 'insert' && autoComplete) {
        if (self.richTextFormatter.justInsertedAutoComplete) {
          self.richTextFormatter.justInsertedAutoComplete = false;
          return;
        }

        autoCompleteTimeout && clearTimeout(autoCompleteTimeout);
        autoCompleteTimeout = setTimeout(() => {
          autoCompleteTimeout = undefined;
          self.richTextFormatter.completableTags.forEach(tag => {
            if (self.getTagBeforeCursor() === tag.Start) {
              self.richTextFormatter.justInsertedAutoComplete = true;
              let insertedText = tag.Completion;
              let offset = tag.Offset;

              if (self.settings.autoCloseBrackets()) {
                if (tag.BehaviorCompletion) {
                  insertedText = tag.BehaviorCompletion;
                  offset += 1;
                }
              }

              tag.Completion && self.insertTextAtCursor(insertedText);
              tag.Offset && self.moveEditCursor(offset);
              tag.Func && tag.Func();
            }
          });
        }, 200);
      }
    }); /// init emoji picker

    this.emPicker = new EmojiPicker(document.getElementById('emojiPickerDom'), emoji => {
      self.insertTextAtCursor(emoji.char);
      this.emPicker.toggle();
      self.togglePreviewMode(false);
    }); /// init spell check

    Object(_libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0__["enable_spellcheck"])();
    self.toggleInvertColors();
    self.toggleShowCounter();
    self.toggleSpellCheck();
    self.validateTitle(); // warn if title already exists

    self.updateEditorStats();
    self.updateEditorOptions();

    if (self.$searchField.val().length > 0 && $('.search-body input').is(':checked')) {
      self.editor.findAll(self.$searchField.val());
    }

    if (self.settings.editorSplit()) {
      self.splitEditor();
      self.workspace.warpToNodeByIdx(node.index() - 1);
    }

    if (self.settings.editorSplitDirection() === 'right') {
      $('#editor-form').addClass('split-editor-right');
      $('#editor-resize-handle').addClass('float-right');
    } else {
      $('#editor-form').removeClass('split-editor-right');
      $('#editor-resize-handle').removeClass('float-right');
    }

    $('.node-editor').on('pointerdown', '> *', function (e) {
      if (self.isEditorSplit) {
        self.focusEditor(true);
        e.stopPropagation();
      }
    }); // Remove app-info while editor is open, can't see it anyway

    $('.app-info').hide();
    self.editor.resize();

    if (node.undoManager != null) {
      self.editor.session.setUndoManager(node.undoManager);
    }

    var event = new CustomEvent('yarnEditorOpen');
    event.document = document;
    event.data = _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"];
    event.app = app;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event);
  };

  this.splitEditor = function () {
    self.isEditorSplit = true;
    self.focusEditor(true);
    self.settings.editorSplit(true);
    self.editorResizeHandleOptions.resizeWidthFrom = self.settings.editorSplitDirection() === 'right' ? 'left' : 'right'; // Editor Classes

    $('#editor-form').width(self.settings.editorSplitSize()).addClass('split-editor').toggleClass('split-editor-right', self.settings.editorSplitDirection() === 'right').resizable(self.editorResizeHandleOptions); // Hide editor background

    $('#node-editor-background').addClass('hidden'); // Lower z-index

    $('#node-editor').css({
      'z-index': 10002
    }); // Show resize handle

    $('#editor-resize-handle').removeClass('hidden').toggleClass('float-right', self.settings.editorSplitDirection() === 'right'); // Reveal/hide buttons

    $('#split-editor-button').addClass('hidden');
    $('#snap-editor-button').removeClass('hidden');
    $('#exit-editor').removeClass('hidden');
    $('#full-size-editor-button').removeClass('hidden');
    $('#split-button-separator').removeClass('hidden');
    self.ui.checkAndMoveAppButtons();
  };

  this.toggleEditorView = function () {
    self.settings.editorSplit(!self.settings.editorSplit());
    self.reopenEditor();
  };

  this.reopenEditor = function () {
    self.saveNode();
    let editingNode = self.editing();
    self.closeEditor();
    setTimeout(() => {
      self.editNode(editingNode);
    }, 250);
  };

  this.editorSnapToggle = function () {
    self.settings.editorSplitDirection(self.settings.editorSplitDirection() === 'right' ? 'left' : 'right');
    self.reopenEditor();
  };

  this.focusEditor = function (value) {
    if (value === true) {
      $('#node-editor').removeClass('split-editor-unfocused');
      self.isEditorFocused = true;
    } else {
      $('#node-editor').addClass('split-editor-unfocused');
      self.isEditorFocused = false;
    }
  };

  this.getSplitEditorXOffset = function () {
    let splitEditorXOffset = 0;

    if (self.inEditor() && self.settings.editorSplit()) {
      splitEditorXOffset = $('#editor-form').width() / 2;

      if (self.settings.editorSplitDirection() === 'right') {
        splitEditorXOffset *= -1;
      }
    }

    return splitEditorXOffset;
  }; // called by the "Edit in Visual Studio Code Text Editor" button
  // this sends a message to the extension telling it to open the node in a text editor


  this.editNodeInVisualStudioCodeEditor = function (node) {
    if (self.usingVisualStudioCodeExtension()) {
      // updating the document is actually a trick to force VSCode to think the open document is
      // dirty so that if it's not "pinned" it won't close when the editor swaps
      self.setYarnDocumentIsDirty(); // tell VSCode extension to open our node in a new editor

      window.vsCodeApi.postMessage({
        type: 'OpenNode',
        payload: {
          title: node.title().trim(),
          tags: node.tags().trim(),
          body: self.trimBodyLinks(node.body().trim())
        }
      });
    } else {
      console.error("Tried to open node in Visual Studio Code text editor but we're not in the Visual Studio Code extension");
    }
  };

  this.chooseRelativePathImage = function (imagePath) {
    self.insertTextAtCursor(imagePath);
  };

  this.getNodeByTitle = function (nodeTitle) {
    return self.nodes().find(node => node.title().trim().toLowerCase() === nodeTitle.trim().toLowerCase());
  };

  this.openNodeByTitle = function (nodeTitle, findText = '') {
    if (self.isEditorInPlayMode()) self.togglePlayMode();
    self.makeNodeWithName(nodeTitle);
    const nodeWithTitle = self.nodes().find(node => node.title().trim().toLowerCase() === nodeTitle.trim().toLowerCase());

    if (nodeWithTitle) {
      self.editNode(nodeWithTitle, true);
      if (findText) setTimeout(() => self.editor.find(findText), 200);
    }
  };

  this.openLastEditedNode = function () {
    if (self.nodeVisitHistory.length === 0) {
      self.saveNode();
      self.closeEditor();
    } else {
      const title = self.nodeVisitHistory.pop();
      self.propagateUpdateFromNode(self.editing());
      self.openNodeByTitle(title);
    }
  };

  this.getSpellCheckSuggestionItems = function () {
    var wordSuggestions = Object(_libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0__["suggest_word_for_misspelled"])(self.editor.getSelectedText());

    if (wordSuggestions) {
      var suggestionObject = {};
      wordSuggestions.forEach(suggestion => {
        suggestionObject[suggestion] = {
          name: suggestion,
          icon: 'edit',
          callback: key => {
            self.insertTextAtCursor(key);
          }
        };
      });
      return suggestionObject;
    } else {
      return false;
    }
  };

  this.getThesaurusItems = function () {
    var synonyms = __webpack_require__("GLdW");

    var words = synonyms(self.editor.getSelectedText());
    if (!words) return false;
    var wordSuggestions = [];
    Object.keys(words).forEach(function (type) {
      words[type].forEach(function (word) {
        if (!wordSuggestions.includes(word) && word !== type) {
          wordSuggestions.push(word);
        }
      });
    });

    if (wordSuggestions.length > 0) {
      var suggestionObject = {};
      wordSuggestions.forEach(suggestion => {
        suggestionObject[suggestion] = {
          name: suggestion,
          icon: 'edit',
          callback: key => {
            self.insertTextAtCursor(key);
          }
        };
      });
      return suggestionObject;
    } else {
      return false;
    }
  };

  this.toggleSpellCheck = function () {
    // Timeout so spellcheck can toggle after the spelling check settings are updated
    setTimeout(function () {
      if (self.settings.spellcheckEnabled()) Object(_libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0__["enable_spellcheck"])();else Object(_libs_spellcheck_ace_js__WEBPACK_IMPORTED_MODULE_0__["disable_spellcheck"])();
    }, 50);
  };

  this.toggleInvertColors = function () {
    const cssOverwrite = self.settings.invertColorsEnabled() ? {
      filter: 'invert(100%)'
    } : {
      filter: 'invert(0%)'
    };
    $('#app').css(cssOverwrite);
    $('#app-bg').css(cssOverwrite);
    $('.tooltip').css(cssOverwrite);
    $('.node .body').css(cssOverwrite);
    $('.editor-container .editor-preview').css(cssOverwrite);
  };

  this.initGrid = function () {
    if (self.settings.snapGridEnabled()) {
      var width = $(window).width();
      var height = $(window).height();
      $('#grid-canvas').attr('width', width);
      $('#grid-canvas').attr('height', height);
      $('#gridSize').attr('disabled', false);
      self.workspace.gridContext.strokeStyle = self.workspace.gridContext.fillStyle = $('.grid-canvas').css('color');
    } else {
      $('#gridSize').attr('disabled', true);
    }

    app.workspace.updateGrid();
  };

  this.toggleShowCounter = function () {
    if (self.settings.editorStatsEnabled()) {
      $('.node-editor .form .editor-counter').css({
        display: 'initial'
      });
    } else {
      $('.node-editor .form .editor-counter').css({
        display: 'none'
      });
    }
  };

  this.toggleAutocompleteSuggestions = function () {
    self.settings.autocompleteSuggestionsEnabled(!self.settings.autocompleteSuggestionsEnabled());
    self.updateEditorOptions();
  };

  this.toggleAutoCloseBrackets = function () {
    self.settings.autoCloseBrackets(!self.settings.autoCloseBrackets());
    self.updateEditorOptions();
  };

  this.updateEditorOptions = function () {
    self.editor.setOptions({
      enableBasicAutocompletion: app.settings.autocompleteSuggestionsEnabled(),
      enableLiveAutocompletion: app.settings.autocompleteSuggestionsEnabled(),
      behavioursEnabled: app.settings.autoCloseBrackets()
    });
  }; // TODO: move to UI?


  this.togglePreviewMode = function (previewModeOverwrite) {
    const editor = $('.editor')[0];
    const editorPreviewer = $('#editor-preview')[0];
    self.isEditorInPreviewMode = previewModeOverwrite;
    app.ui.dispatchEvent('yarnInPreviewMode');

    if (previewModeOverwrite) {
      $('.bbcode-toolbar').addClass('hidden'); //preview mode

      editor.style.display = 'none';
      editorPreviewer.style.display = 'block';
      editorPreviewer.innerHTML = self.richTextFormatter.richTextToHtml(self.editing().body(), true);
      editorPreviewer.scrollTop = self.editor.renderer.scrollTop;
    } else {
      $('.bbcode-toolbar').removeClass('hidden');
      self.editor.session.setScrollTop(editorPreviewer.scrollTop);
      editorPreviewer.innerHTML = '';
      editorPreviewer.style.display = 'none';
      editor.style.display = 'flex';
      self.editor.focus();
      self.editor.resize(); //close any pop up helpers tooltip class

      if ($('#colorPicker-container').is(':visible')) {
        $('#colorPicker-container').hide();
      }

      if ($('#emojiPicker-container').is(':visible')) {
        $('#emojiPicker-container').hide();
      }
    }
  }; // TODO: move to editor class


  this.appendText = function (textToAppend) {
    self.editing().body(self.editing().body() + textToAppend); // scroll to end of line

    const row = self.editor.session.getLength() - 1;
    const column = self.editor.session.getLine(row).length;
    self.editor.gotoLine(row + 1, column);
  }; // TODO: move to editor class


  this.moveEditCursor = function (offset) {
    const position = self.editor.getCursorPosition();
    self.editor.gotoLine(position.row + 1, position.column + offset);
    self.editor.focus();
  }; // TODO: move to editor class


  this.insertTextAtCursor = function (textToInsert, scrollToLine = false) {
    if (!self.editing()) return;
    self.editor.session.replace(self.editor.selection.getRange(), '');
    const position = self.editor.getCursorPosition();
    self.editor.session.insert(position, textToInsert);

    if (scrollToLine) {
      const newPosition = self.editor.getCursorPosition();
      editor.scrollToLine(newPosition.row, true, true, function () {});
      self.editor.focus();
    }

    self.updateEditorStats();
    self.editor.focus();
  }; // TODO: move to editor class


  this.getTagBeforeCursor = function () {
    const selectionRange = self.editor.getSelectionRange();
    const curLine = selectionRange.start.row;
    const curLineText = self.editor.session.getLine(curLine);
    const textBeforeCursor = curLineText.substring(selectionRange.start.column - 2, selectionRange.start.column + 2);

    if (!textBeforeCursor) {
      return '';
    }

    if (app.settings.documentType() === 'ink') {
      if (['->'].includes(textBeforeCursor.trim())) return textBeforeCursor.trim();
    } else {
      if (['[[', '<<'].includes(textBeforeCursor.trim()) || textBeforeCursor.includes('|')) return textBeforeCursor.trim();
    }

    return self.richTextFormatter.identifyTag(textBeforeCursor);
  };

  this.saveNode = function () {
    const node = self.editing();

    if (node) {
      const editorTitleElement = $('#editorTitle')[0]; // Ensure the title is unique

      const title = self.getFutureEditedNodeTitle(); // Update the title in the UI

      editorTitleElement.value = title;
      node.title(title); // Remove leading and trailing spaces from the body links

      node.body(self.trimBodyLinks(node.body().trim()));
      self.makeNewNodesFromLinks();
      self.propagateUpdateFromNode(node);
      self.workspace.updateArrows();
      setTimeout(self.updateSearch, 600);
      self.setYarnDocumentIsDirty();
      app.ui.dispatchEvent('yarnSavedNode');
    }
  };

  this.closeEditor = function () {
    self.editing().undoManager = self.editor.session.getUndoManager();
    $('#node-editor-background').transition({
      opacity: 0
    }, 250);
    $('#node-editor').transition({
      y: '-100',
      opacity: 0
    }, 250, function (e) {
      self.editing(null);
    });
    self.isEditorSplit = false;
    self.isEditorFocused = false;
    $('.app-info').show();
    app.ui.resetAppButtonsLocation();

    if (self.isEditorInPlayMode()) {
      self.togglePlayMode(false);
    }

    if (self.isEditorInPreviewMode) {
      self.togglePreviewMode(false);
    }
  };

  this.convertMarkup = function () {
    self.nodes().forEach(node => {
      node.body(self.richTextFormatter.convert(node.body()));
    });
  };

  this.updateSearch = function () {
    var on = 1;
    var off = 0.25;

    for (var i = 0; i < self.nodes().length; i++) {
      var node = self.nodes()[i];
      var element = $(node.element);
      var searchText = app.$searchField.val().toLowerCase();
      const {
        matchTitle,
        matchBody,
        matchTags,
        clearSearch
      } = app.ui.nodeSearchMatches(node, searchText);

      if (!clearSearch) {
        if (matchTitle || matchBody || matchTags) {
          node.active({
            title: matchTitle,
            body: matchBody,
            tags: matchTags
          });
          element.clearQueue();
          element.transition({
            opacity: on
          }, 500);
        } else {
          node.active(false);
          element.clearQueue();
          element.transition({
            opacity: off
          }, 500);
        }
      } else {
        node.active(true);
        element.clearQueue();
        element.transition({
          opacity: on
        }, 500);
      }
    }
  };

  this.trimBodyLinks = function (body) {
    var re = /\[\[(.+?)\|\s*(.+?)\s*\]\]/g;
    return body.replace(re, '[[$1|$2]]');
  };

  this.updateNodeLinks = function () {
    for (let node of self.nodes()) {
      node.updateLinks();
    }
  }; // TODO: probably 'propagateUpdateFromNode' can be used as a
  // replacement for 'updateNodeLinks'. I'll check it in next iterations.


  this.propagateUpdateFromNode = function (node) {
    var toUpdate = [];
    var updated = [];
    toUpdate.push(node);

    while (node = toUpdate.pop()) {
      if (updated.includes(node)) {
        continue;
      }

      updated.push(node);
      node.updateLinks();
      node.linkedTo().forEach(child => {
        if (!updated.includes(child)) {
          toUpdate.push(child);
        }
      });
      node.linkedFrom().forEach(parent => {
        if (!updated.includes(parent)) {
          toUpdate.push(parent);
        }
      });
    }
  };

  this.updateTagsRepository = function () {
    if (!app.mustUpdateTags) return;
    app.mustUpdateTags = false;

    const findFirstFreeId = () => {
      const usedIds = self.tags().map(tag => tag.id);

      for (let id = 1;; ++id) if (!usedIds.includes(id)) return id;
    }; // Reset count


    self.tags().forEach(tag => tag.count = 0); // Recount tags and add new

    self.nodes().forEach(node => {
      _utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].uniqueSplit(node.tags(), ' ').forEach(tag => {
        const found = self.tags().find(e => e.text == tag);

        if (found) {
          ++found.count;
        } else {
          const id = findFirstFreeId();
          self.tags.push({
            id: id,
            style: 'tag-style-' + id,
            text: tag,
            count: 1
          });
        }
      });
    }); // Remove unused tags

    let i = self.tags().length;

    while (i--) {
      if (self.tags()[i].count === 0) self.tags().splice(i, 1);
    }
  };

  this.makeNewNodesFromLinks = function () {
    if (!self.settings.createNodesEnabled()) return console.info('Autocreate new nodes disabled');
    var nodeLinks = self.editing().getLinksInNode();

    if (nodeLinks == undefined) {
      return;
    }

    for (var i = 0; i < nodeLinks.length; i++) {
      // Create new Nodes from Node Links
      const newNodeName = nodeLinks[i].trim();
      var newNodeOffset = 220 * (i + 1);
      self.makeNodeWithName(newNodeName, newNodeOffset);
    }
  };

  this.makeNodeWithName = function (newNodeName, newNodeOffset = 220) {
    const otherNodeTitles = self.getOtherNodeTitles();
    if (app.settings.documentType() === 'ink' //   &&
    // ['END', '->'].includes(newNodeName)
    ) return;

    if (newNodeName && newNodeName.length > 0 && !otherNodeTitles.includes(newNodeName) && newNodeName != self.editing().title()) {
      self.newNodeAt(self.editing().x() + newNodeOffset, self.editing().y() - 120).title(newNodeName);
    }
  };

  this.titleExistsTwice = function (title) {
    return self.nodes().filter(node => node.title().trim() === title.trim()).length > 1;
  };

  this.getFutureEditedNodeTitle = function () {
    // Ensure the title is unique
    const editorTitleElement = $('#editorTitle')[0]; // Return the title that will be used when changes are applied

    return self.getUniqueTitle(editorTitleElement.value.trim());
  };

  this.getOtherNodeTitles = function () {
    const result = [];
    self.nodes().forEach(node => {
      if (!self.editing() || node.title() !== self.editing().title()) {
        if (app.settings.documentType() === 'ink' && node.title().trim() === _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].InkGlobalScopeNodeName) return;
        result.push(node.title().trim());
      }
    });
    return result;
  };

  this.getHighlightedText = function (text) {
    text = text.replace(/\</g, '&lt;');
    text = text.replace(/\>/g, '&gt;');
    text = text.replace(/\&lt;\&lt;(.*?)\&gt;\&gt;/g, '<p class="conditionbounds">&lt;&lt;</p><p class="condition">$1</p><p class="conditionbounds">&gt;&gt;</p>');
    text = text.replace(/\[\[([^\|]*?)\]\]/g, '<p class="linkbounds">[[</p><p class="linkname">$1</p><p class="linkbounds">]]</p>');
    text = text.replace(/\[\[([^\[\]]*?)\|([^\[\]]*?)\]\]/g, '<p class="linkbounds">[[</p>$1<p style="color:red"><p class="linkbounds">|</p><p class="linkname">$2</p><p class="linkbounds">]]</p>');
    text = text.replace(/[^:]\/\/(.*)?($|\n)/g, '<span class="comment">//$1</span>\n');
    text = text.replace(/\/\*((.|[\r\n])*)?\*\//gm, '<span class="comment">/*$1*/</span>');
    text = text.replace(/\/\%((.|[\r\n])*)?\%\//gm, '<span class="comment">/%$1%/</span>'); // create a temporary document and remove all styles inside comments

    var div = $('<div>');
    div[0].innerHTML = text;
    div.find('.comment').each(function () {
      $(this).find('p').each(function () {
        $(this).removeClass();
      });
    }); // unhighlight links that don't exist

    div.find('.linkname').each(function () {
      var name = $(this).text();
      var found = false;

      for (var i in self.nodes()) {
        if (self.nodes()[i].title().toLowerCase() == name.toLowerCase()) {
          found = true;
          break;
        }
      }

      if (!found) $(this).removeClass('linkname');
    });
    text = div[0].innerHTML;
    return text;
  };

  this.updateLineNumbers = function (text) {
    // update line numbers
    var lines = text.split('\n');
    var lineNumbers = '';

    for (var i = 0; i < Math.max(1, lines.length); i++) {
      if (i == 0 || i < lines.length - 1 || lines[i].length > 0) lineNumbers += i + 1 + '<br />';
    }

    $('.editor-container .lines').html(lineNumbers);
  };

  this.moveNodes = function (offX, offY) {
    for (var i in self.nodes()) {
      var node = self.nodes()[i];
      node.moveTo(node.x() + offX, node.y() + offY);
    }
  };

  this.getFirstFoundNode = function (search) {
    return self.nodes().find(node => node.title().toLowerCase().trim() === search);
  };

  this.searchWarp = function () {
    // if search field is empty
    var search = self.$searchField.val().toLowerCase().trim();

    if (search === '') {
      // warp to the first node
      self.workspace.warpToNodeByIdx(0);
    } else {
      const foundNode = self.getFirstFoundNode(search);
      self.workspace.warpToNodeByIdx(self.nodes.indexOf(foundNode));
    }
  };

  this.clearSearch = function () {
    self.$searchField.val('');
    self.updateSearch();
  };

  this.updateEditorStats = function () {
    var text = self.editor.getSession().getValue();
    var cursor = self.editor.getCursorPosition();
    var lines = text.split('\n');
    $('.editor-counter .character-count').html(text.length);
    $('.editor-counter .line-count').html(lines.length);
    $('.editor-counter .row-index').html(cursor.row);
    $('.editor-counter .column-index').html(cursor.column);
    _data__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].saveAppStateToLocalStorage();
  };

  this.getUniqueTitle = function (desiredTitle) {
    var currentlyUsedTitles = self.getOtherNodeTitles();

    if (desiredTitle && !currentlyUsedTitles.includes(desiredTitle)) {
      return desiredTitle;
    }

    var baseTitle = desiredTitle || 'Node';
    var counter = 2; // If the title ends with "_[number]" use the same prefix with next number

    const re = /^(.*)(_([0-9]+))$/;
    const matches = baseTitle.match(re);

    if (matches && matches.length === 4) {
      baseTitle = matches[1];
      counter = Number(matches[3]);
    }

    if (!currentlyUsedTitles.includes(baseTitle)) {
      return baseTitle;
    }

    for (;; ++counter) {
      var newTitle = baseTitle + '_' + counter;

      if (!currentlyUsedTitles.includes(newTitle)) {
        return newTitle;
      }
    }
  };

  this.navigateToNodeDuringPlayTest = function (nodeName, find = '') {
    self.openNodeByTitle(nodeName, find);
    self.togglePlayMode(true); // if (app.isEditorSplit) {

    app.workspace.warpToNode(app.getFirstFoundNode(nodeName)); // }
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("EVdn"), __webpack_require__("Z1dp")))

/***/ }),

/***/ "P85/":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "W2Rx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ko, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oj90");

let globalNodeIndex = 0;
const ClipNodeTextLength = 1024;
let Node = function (options = {}) {
  const self = this;
  this.titleStyles = ['title-style-1', 'title-style-2', 'title-style-3', 'title-style-4', 'title-style-5', 'title-style-6', 'title-style-7', 'title-style-8', 'title-style-9']; // primary values

  this.index = ko.observable(globalNodeIndex++);
  this.title = ko.observable(options.title || app.getUniqueTitle());
  this.tags = ko.observable(options.tags || '');
  this.body = ko.observable(options.body || '');
  this.active = ko.observable(options.active || true);
  this.width = 200;
  this.height = 200;
  this.tempOpacity = null;
  this.style = null;
  this.colorID = ko.observable(options.colorID || 0);
  this.checked = false;
  this.selected = false;
  this.createX = options.x || null;
  this.createY = options.y || null;
  this.undoManager = null; // clippedTags
  //
  // Returns an array of tags objects with id, style and count

  this.clippedTags = ko.computed(function () {
    app.updateTagsRepository();
    return _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].uniqueSplit(self.tags(), ' ').map(tag => app.tags().find(e => e.text === tag)).filter(item => item);
  }, this);
  this.clippedBody = ko.computed(function () {
    if (app.ui.isScreenNarrow() && app.editing()) {
      return;
    }

    app.mustRefreshNodes(); // Trick to be able to refresh nodes

    let result = app.getHighlightedText(this.body());
    result = app.richTextFormatter.richTextToHtml(result);
    result = result.substr(0, ClipNodeTextLength);
    return result;
  }, this); // internal cache

  this.linkedTo = ko.observableArray();
  this.linkedFrom = ko.observableArray(); // reference to element containing us

  this.element = null;
  this.canDoubleClick = true;

  this.create = function () {
    self.style = window.getComputedStyle($(self.element).get(0));

    if (self.createX && self.createY) {
      self.x(self.createX);
      self.y(self.createY);
    } else {
      let parent = $(self.element).parent();
      self.x(-parent.offset().left + $(window).width() / 2 - 100);
      self.y(-parent.offset().top + $(window).height() / 2 - 100);
    }

    app.workspace.bringToFront(self.element);
    app.workspace.startUpdatingArrows();
    $(self.element).css({
      opacity: 0,
      scale: 0.8,
      y: '-=80px',
      rotate: '45deg'
    }).transition({
      opacity: 1,
      scale: 1,
      y: '+=80px',
      rotate: '0deg'
    }, 250, 'easeInQuad', function () {
      app.workspace.stopUpdatingArrows();
      app.workspace.updateArrows();
    });
    self.drag(); // OPEN NODE

    $(self.element).on('dblclick', function () {
      if (self.canDoubleClick) app.editNode(self);
    });
    _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].addDoubleTapDetector(self.element, function () {
      if (self.canDoubleClick) app.editNode(self);
    });
    $(self.element).on('click', function (e) {
      if (e.ctrlKey) {
        if (self.selected) app.workspace.deselectNodes(self);else app.workspace.selectNodes(self);
      }
    });
  };

  this.setSelected = function (select) {
    self.selected = select;
    if (self.selected) $(self.element).addClass('selected');else $(self.element).removeClass('selected');
  };

  this.toggleSelected = function () {
    self.setSelected(!self.selected);
  };

  this.x = function (inX) {
    if (inX != undefined) $(self.element).css({
      x: Math.floor(inX)
    }); // if we don't have a style here, it means this node is in the
    // process of being created and self.element doesn't exist yet

    if (!self.style) {
      return;
    } // m41 here corresponds to the fourth row and first column of the matrix transform
    // this is the X value of the transform


    return Math.floor(new WebKitCSSMatrix(self.style.webkitTransform).m41);
  };

  this.y = function (inY) {
    if (inY != undefined) $(self.element).css({
      y: Math.floor(inY)
    }); // if we don't have a style here, it means this node is in the
    // process of being created and self.element doesn't exist yet

    if (!self.style) {
      return;
    } // m42 here corresponds to the fourth row and second column of the matrix transform
    // this is the X value of the transform


    return Math.floor(new WebKitCSSMatrix(self.style.webkitTransform).m42);
  };

  this.resetDoubleClick = function () {
    self.canDoubleClick = true;
  };

  this.cycleColorDown = function () {
    self.doCycleColorDown();
    setTimeout(self.resetDoubleClick, 500);
    self.canDoubleClick = false;
    if (app.input.isShiftDown) app.matchConnectedColorID(self);
    if (self.selected) app.setSelectedColors(self);
    app.setYarnDocumentIsDirty();
  };

  this.cycleColorUp = function () {
    self.doCycleColorUp();
    setTimeout(self.resetDoubleClick, 500);
    self.canDoubleClick = false;
    if (app.input.isShiftDown) app.matchConnectedColorID(self);
    if (self.selected) app.setSelectedColors(self);
    app.setYarnDocumentIsDirty();
  };

  this.doCycleColorDown = function () {
    self.colorID(self.colorID() - 1);
    if (self.colorID() < 0) self.colorID(8);
  };

  this.doCycleColorUp = function () {
    self.colorID(self.colorID() + 1);
    if (self.colorID() > 8) self.colorID(0);
  };

  this.remove = async function () {
    return new Promise((resolve, reject) => {
      $(self.element).transition({
        opacity: 0,
        scale: 0.8,
        y: '-=80px',
        rotate: '-45deg'
      }, 250, 'easeInQuad', resolve);
    });
  };

  this.drag = function () {
    const offset = {
      x: 0,
      y: 0
    }; // Where inside the node did the mouse click

    let dragging = false;
    let groupDragging = false;
    $(document.body).on('mousemove touchmove', function (e) {
      if (dragging) {
        const pageX = app.input.isScreenTouched && e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        const pageY = app.input.isScreenTouched && e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
        let {
          x,
          y
        } = app.workspace.toWorkspaceCoordinates(pageX, pageY);
        x -= offset.x;
        y -= offset.y;
        let movedX = x - self.x();
        let movedY = y - self.y();
        const nodes = app.workspace.getSelectedNodes(); // Prevent yarn from moving a node when you scroll its contents on a touch screen

        if (e.originalEvent.type === 'mousemove' || nodes.includes(self) && e.originalEvent.type === 'touchmove') {
          self.x(x);
          self.y(y);
        }

        if (groupDragging) {
          if (self.selected) {
            nodes.splice(nodes.indexOf(self), 1);
          } else {
            nodes = app.getNodesConnectedTo(self);
          }

          if (nodes.length > 0) {
            for (let i in nodes) {
              if (nodes[i].active()) {
                nodes[i].x(nodes[i].x() + movedX);
                nodes[i].y(nodes[i].y() + movedY);
              }
            }
          }
        }

        app.workspace.updateArrows();
      }
    });
    $(self.element).on('pointerdown', function (e) {
      if (!dragging && self.active() && e.button === 0) {
        dragging = true;

        if (app.input.isShiftDown || self.selected) {
          groupDragging = true;
        }

        const {
          x,
          y
        } = app.workspace.toWorkspaceCoordinates(e.pageX, e.pageY);
        offset.x = app.settings.snapGridEnabled() ? app.workspace.stepify(x - self.x(), app.settings.gridSize()) : x - self.x();
        offset.y = app.settings.snapGridEnabled() ? app.workspace.stepify(y - self.y(), app.settings.gridSize()) : y - self.y();
      }
    });
    $(self.element).on('touchend', function (e) {
      app.workspace.selectNodes(self);
    }); // Make sure dragging stops when cursor is above another element

    $(document).on('pointerup touchend', function () {
      if (dragging || groupDragging) {
        dragging = false;
        groupDragging = false; // this will tell the VSCode extension that we've moved the node

        app.setYarnDocumentIsDirty();
      }
    });
  };

  this.moveTo = function (newX, newY) {
    app.workspace.startUpdatingArrows();
    $(self.element).clearQueue();
    $(self.element).transition({
      x: newX,
      y: newY
    }, app.stopUpdatingArrows, 500);
  };

  this.isConnectedTo = function (otherNode, checkBack) {
    if (checkBack && otherNode.isConnectedTo(self, false)) return true;
    let linkedNodes = self.linkedTo();

    for (let i in linkedNodes) {
      if (linkedNodes[i] == otherNode) return true;
      if (linkedNodes[i].isConnectedTo(otherNode, false)) return true;
      if (otherNode.isConnectedTo(linkedNodes[i], false)) return true;
    }

    return false;
  };

  this.getLinksInNode = function (node) {
    const isYarnDocument = app.settings.documentType() === 'yarn';
    let links = (node || self).body().match(isYarnDocument ? /\[\[(.*?)\]\]/g : /\-\>(.*)/g);

    if (links != undefined) {
      let exists = {};

      for (let i = links.length - 1; i >= 0; i--) {
        if (isYarnDocument) {
          links[i] = links[i].substr(2, links[i].length - 4).trim(); //.toLowerCase();

          if (links[i].indexOf('|') >= 0) {
            links[i] = links[i].split('|')[1];
          }

          if (exists[links[i]] != undefined) {
            links.splice(i, 1);
          }

          exists[links[i]] = true;
        } else {
          links[i] = links[i].substr(2, links[i].length).trim();
        }
      }

      return links;
    } else {
      return undefined;
    }
  };

  this.updateLinks = function () {
    self.resetDoubleClick();
    self.updateLinksFromParents();
    self.updateLinksToChildren();
  };

  this.updateLinksFromParents = function () {
    // If title didn't change there's nothing we need to update on parents
    if (!self.oldTitle || self.oldTitle === self.title()) {
      return;
    }

    self.linkedFrom.removeAll();
    app.nodes().forEach(parent => {
      const parentLinks = self.getLinksInNode(parent);

      if (parentLinks) {
        if (parentLinks.includes(self.oldTitle)) {
          const re1 = RegExp('\\|\\s*' + self.oldTitle + '\\s*\\]\\]', 'g');
          const re2 = RegExp('\\[\\[\\s*' + self.oldTitle + '\\s*\\]\\]', 'g');
          let newBody = parent.body().replace(re1, '|' + self.title() + ']]');
          newBody = newBody.replace(re2, '[[' + self.title() + ']]');
          parent.body(newBody);
          self.linkedFrom.push(parent);
        } else if (parentLinks.includes(self.title())) {
          self.linkedFrom.push(parent);
        }
      }
    });
    self.oldTitle = undefined;
  };

  this.updateLinksToChildren = function () {
    self.linkedTo.removeAll();
    let links = self.getLinksInNode();

    if (!links) {
      return;
    }

    for (let index in app.nodes()) {
      let other = app.nodes()[index];

      for (let i = 0; i < links.length; i++) {
        if (other != self && other.title().trim() === links[i].trim()) {
          self.linkedTo.push(other);
        }
      }
    }
  };
};
ko.bindingHandlers.nodeBind = {
  init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    bindingContext.$rawData.element = element;
    bindingContext.$rawData.create();
  },
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    $(element).on('pointerdown', function () {
      app.workspace.bringToFront(element);
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Z1dp"), __webpack_require__("EVdn")))

/***/ }),

/***/ "bHyH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ko, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugins; });
/* harmony import */ var _runner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5aMW");
/* harmony import */ var _transcribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zn8O");


const PLUGINS = [_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"], _transcribe__WEBPACK_IMPORTED_MODULE_1__[/* Transcribe */ "a"]];
var Plugins = function (app) {
  const self = this;

  const registerPlugin = plugin => {
    app.plugins[plugin.name] = plugin; // console.log('attaching plugin', plugin, app.plugins);
  };

  const getPluginStore = pluginName => {
    if (!self.pluginStorage) self.pluginStorage = {};

    if (!self.pluginStorage[pluginName]) {
      self.pluginStorage = { ...self.pluginStorage,
        [pluginName]: {}
      };
    }

    return this.pluginStorage[pluginName];
  };

  const setPluginStore = (pluginName, key, val) => {
    const storeVals = { ...getPluginStore(pluginName),
      [key]: val
    };
    self.pluginStorage = { ...self.pluginStorage,
      [pluginName]: storeVals
    };
  };

  window.addEventListener('yarnLoadedData', e => {
    if (app.data.documentHeader() !== null) {
      const documentHeader = app.data.documentHeader();
      if ('pluginStorage' in documentHeader) self.pluginStorage = documentHeader.pluginStorage;
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
    settingsColumn
  }) => {
    app.settings[valueKey] = ko.observable(app.settings.storage.getItem(valueKey) || defaultValue).extend({
      persist: valueKey
    });
    app.ui[optionsKey] = options;

    app[setterKey] = function (value, e) {
      const newValue = e ? e.target.value : value;
      app.settings[valueKey](newValue);
    }; // Dom rendering helper methods


    window.addEventListener('settingsOpened', () => {
      const options = app.ui[optionsKey].map(option => `<option value="${option.id}" ${option.id === app.settings[valueKey]() ? 'selected="true"' : ''}>${option.name}</option>`).join('');
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
      document.getElementById(`settingsColumn${settingsColumn || 'A'}`).appendChild(settingsElement);
      document.getElementById('mySelect').addEventListener('change', e => {
        app[setterKey](false, e);
      });
    });
  };

  const createButton = (pluginName, {
    name,
    iconName,
    onClick,
    attachTo,
    className,
    title,
    onPointerDown,
    onDoubleClick,
    id
  }) => {
    if (document.getElementById(id) !== null) return;
    const button = document.createElement('span');
    button.id = id || name || title || iconName;
    button.innerHTML = `
      <span class="item ${className || ''}" title="${title || ''}" ${onClick ? `onclick="click: app.plugins.${pluginName}.${onClick}"` : ''}
       ${onPointerDown ? ` onpointerdown="app.plugins.${pluginName}.${onPointerDown}"` : ''}
              ${onDoubleClick ? `ondblclick="app.plugins.${pluginName}.${onDoubleClick}"` : ''}
       >
        <svg class="icon menu-icon icon-file-${iconName} icon-lg icon-fw" style="color:currentColor;"><use xlink:href="public/icons.svg#icon-${iconName}"></use></svg>
        <span class="hide-when-narrow">&nbsp;</span>
        ${name || ''}
      </span>
    `;
    document.getElementById(attachTo).appendChild(button);
    return button;
  };

  const createToggle = (pluginName, {
    id,
    attachTo,
    className,
    title,
    tooltipId,
    toggleValueKey,
    onToggle,
    enableKey,
    iconName
  }) => {
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
  }; // yarneditor lifecycle events


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
  }; // Todo these are not being cached by the PWA - needs fixing
  // Todo these should also be optional when building - exclude for build-tiny
  // plugin initiation


  PLUGINS.forEach(plugin => {
    const initializedPlugin = new plugin({
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
      onLoad
    });
    window.addEventListener('DOMContentLoaded', e => {
      registerPlugin(initializedPlugin);
    });
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Z1dp"), __webpack_require__("EVdn")))

/***/ }),

/***/ "e6Wu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_jquery_contextMenu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ozf");
/* harmony import */ var _scss_jquery_contextMenu_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_jquery_contextMenu_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("P85/");
/* harmony import */ var _scss_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_spectrum_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uMdg");
/* harmony import */ var _scss_spectrum_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_spectrum_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gugv");
/* harmony import */ var _scss_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oj90");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0h2I");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5uVa");
/* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("si6p");
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_mousewheel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery_resizable_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ghrA");
/* harmony import */ var jquery_resizable_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_resizable_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ace_builds_src_noconflict_ace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bU/s");
/* harmony import */ var ace_builds_src_noconflict_ace__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_ace__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ace_builds_src_min_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("A8C4");
/* harmony import */ var ace_builds_src_min_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ace_builds_src_min_noconflict_ext_searchbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("VEX6");
/* harmony import */ var ace_builds_src_min_noconflict_ext_searchbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_ext_searchbox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_knockout_ace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("jF1P");
/* harmony import */ var _libs_knockout_ace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_libs_knockout_ace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jquery_transit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("YhK8");
/* harmony import */ var jquery_transit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery_transit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var spectrum_colorpicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Ab/9");
/* harmony import */ var spectrum_colorpicker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(spectrum_colorpicker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lightweight_emoji_picker_dist_picker_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("KDOe");
/* harmony import */ var lightweight_emoji_picker_dist_picker_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lightweight_emoji_picker_dist_picker_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var spoken__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("XfCI");
/* harmony import */ var spoken__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(spoken__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _classes_app_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("P0sH");
/* harmony import */ var _public_version_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("pLxK");
var _public_version_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t("pLxK", 1);
/* harmony import */ var _public_plugins__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("bHyH");






window.ko = knockout__WEBPACK_IMPORTED_MODULE_5___default.a;
window.$ = window.jQuery = __webpack_require__("EVdn");




window.ace = ace_builds_src_noconflict_ace__WEBPACK_IMPORTED_MODULE_9___default.a;
ace_builds_src_noconflict_ace__WEBPACK_IMPORTED_MODULE_9___default.a.config.set('basePath', _classes_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].getPublicPath()); //needed to import yarn mode

window.define = ace_builds_src_noconflict_ace__WEBPACK_IMPORTED_MODULE_9___default.a.define;





 // Keep these imports, they are used elsewhere in the app



window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_17___default.a;

 // Register PWA service worker

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(registration => {
      // registration.pushManager.subscribe({userVisibleOnly: true});
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

window.app = new _classes_app_js__WEBPACK_IMPORTED_MODULE_18__[/* App */ "a"]('Yarn', _public_version_json__WEBPACK_IMPORTED_MODULE_19__[/* version */ "a"]);
window.app.run(); // Register plugins from plugin folder


const appPlugins = new _public_plugins__WEBPACK_IMPORTED_MODULE_20__[/* Plugins */ "a"](window.app);
window.app.plugins = appPlugins;

/***/ }),

/***/ "fkuv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ko, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UI; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Qx2");

const UI = function (app) {
  const self = this;
  this.notification = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2500
  });

  this.dispatchEvent = function (eventName, options) {
    const event = new CustomEvent(eventName);
    event.options = options;
    window.dispatchEvent(event);
    window.parent.dispatchEvent(event);
    console.log('Dispatched event', eventName, event);
  };

  this.settingsDialogVisible = ko.observable(false);
  this.narrowScreenThreshold = 600;

  this.isScreenNarrow = function () {
    return $(window).width() <= self.narrowScreenThreshold;
  }; // TODO turn all of these into a generic function
  // Markup selector -----------------------------------------------------------


  this.availableMarkupLanguages = [{
    id: 'bbcode',
    name: 'Bbcode'
  }, {
    id: 'html',
    name: 'Html'
  }]; // Filetype version selector -----------------------------------------------------------

  this.availableFiletypeVersions = [{
    id: '1',
    name: '1'
  }, {
    id: '2',
    name: '2'
  }]; // Theme selector -----------------------------------------------------------

  this.availableThemes = [{
    id: 'classic',
    name: 'Classic'
  }, {
    id: 'blueprint',
    name: 'Blueprint'
  }, {
    id: 'dracula',
    name: 'Dracula'
  }]; // Document type selector ---------------------------------------------------

  this.availableDocumentTypes = [{
    id: 'yarn',
    name: 'Yarn'
  }, {
    id: 'ink',
    name: 'Ink'
  }]; // Language selector --------------------------------------------------------

  this.availableLanguages = [//NOTE: some are disabled due to issues with nspell - see https://github.com/blurymind/YarnClassic/issues/263
  // { name: 'Afrikaans', id: 'af-ZA' },
  // { name: 'Bahasa Indonesia', id: 'id-ID' },
  // { name: 'Bahasa Melayu', id: 'ms-MY' },
  // { name: 'Català', id: 'ca-ES' },
  {
    name: 'Čeština',
    id: 'cs-CZ'
  }, {
    name: 'Deutsch',
    id: 'de-DE'
  }, {
    name: 'English',
    id: 'en-GB'
  }, {
    name: 'Español',
    id: 'es-ES'
  }, // { name: 'Euskara', id: 'eu-ES' },// basque
  {
    name: 'Français',
    id: 'fr-FR'
  }, // { name: 'Galego', id: 'gl-ES' }, // galician
  // { name: 'Hrvatski', id: 'hr_HR' }, //croatian
  // { name: 'IsiZulu', id: 'zu-ZA' }, //zulu?
  {
    name: 'Íslenska',
    id: 'is-IS'
  }, // { name: 'Italiano', id: 'it-IT' },
  // { name: 'Magyar', id: 'hu-HU' }, //hungarian
  {
    name: 'Nederlands',
    id: 'nl-NL'
  }, {
    name: 'Norsk bokmål',
    id: 'nb-NO'
  }, {
    name: 'Polski',
    id: 'pl-PL'
  }, // { name: 'Português', id: 'pt-BR' },
  {
    name: 'Română',
    id: 'ro-RO'
  }, {
    name: 'Slovenčina',
    id: 'sk-SK'
  }, // { name: 'Suomi', id: 'fi-FI' }, //finnish
  {
    name: 'Svenska',
    id: 'sv-SE'
  }, {
    name: 'Türkçe',
    id: 'tr-TR'
  }, {
    name: 'български',
    id: 'bg-BG'
  }, {
    name: 'Pусский',
    id: 'ru-RU'
  }, {
    name: 'Српски',
    id: 'sr-RS'
  }, {
    name: '한국어',
    id: 'ko-KR'
  } // { name: '中文', id: 'cmn-Hans-CN' },
  // { name: '日本語', id: 'ja-JP' },
  // { name: 'Lingua latīna', id: 'la' },
  ]; // Line Style selector -----------------------------------------------------------

  this.availableLineStyles = [{
    id: 'straight',
    name: 'Straight Lines'
  }, {
    id: 'bezier',
    name: 'Bezier Curves'
  }]; // openSettingsDialog

  this.openSettingsDialog = function () {
    self.settingsDialogVisible(true);
    $('.settings-dialog').css({
      opacity: 0
    }).transition({
      opacity: 1
    }, 250);
    $('.settings-dialog .form').css({
      y: '-100'
    }).transition({
      y: '0'
    }, 250);
    var event = new CustomEvent('settingsOpened');
    window.dispatchEvent(event);
  }; // openHelpDialog


  this.openHelpDialog = function () {
    Swal.fire({
      title: 'Help',
      html: `
      <div style="text-align: justify">
        <p>Useful editor shortcuts:</p>
        <small>
          <ul>
            <li>Cmd/Ctrl + Left Click -- Create multiple input carets</li>
            <li>Cmd/Ctrl + Left/Right -- Caret jump word</li>
            <li>Cmd/Ctrl + Up/Down -- Scroll up/down</li>
            <li>Cmd/Ctrl + Left/Right + Shift -- Caret jump word selection</li>
            <li>Cmd/Ctrl + F -- Search</li>
            <li>Cmd/Ctrl + Alt + K -- Find All</li>
            <li>Cmd/Ctrl + H -- Search and Replace</li>
            <li>Cmd/Ctrl + A -- Select all</li>
            <li>Cmd/Ctrl + U -- To Uppercase</li>
            <li>Cmd/Ctrl + Shift + U -- To Lowercase</li>
            <li>Alt + Up/Down -- Move line(s) up/down</li>
            <li><a href="https://ace.c9.io/demo/keyboard_shortcuts.html" target="_blank">...</a></li>   
          </ul>
        </small>
        <div>How to use <a href="https://yarnspinner.dev/docs/syntax/" target="_blank">Yarn Syntax</a></div>
        <div>How to use <a href="https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md" target="_blank">Ink Syntax</a></div>
        <p>Runtimes:</p>
        <a href="https://github.com/YarnSpinnerTool/YarnSpinner" target="_blank">YarnSpinner (Unity3d)</a>
        <a href="https://github.com/hylyh/bondage.js" target="_blank">BondageJs (yarn javascript)</a>
        <a href="https://github.com/inkle/ink-unity-integration" target="_blank">Ink C# (Unity3d)</a>
        <a href="https://github.com/y-lohse/inkjs" target="_blank">InkJs (javascript)</a>
        <a href="https://github.com/bladecoder/blade-ink" target="_blank">BladeInk (java)</a>
        <a href="https://github.com/inkle/ink-library" target="_blank">Many more Ink parsers</a>
      </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'About',
      cancelButtonText: 'Close'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: 'About',
          html: `
          <div style="text-align: justify">
            <div><a href="https://github.com/YarnSpinnerTool" target="_blank">Yarn</a> was created by <a href="https://github.com/AlecHolowka" target="_blank">Alec Holowka</a></div>
            <br>
            <a href="https://github.com/blurymind/YarnClassic/graphs/contributors" target="_blank">Top contributors:</a>
            <small>
              <ul>
                <li><a href="https://github.com/blurymind" target="_blank">Todor Imreorov</a></li>
                <li><a href="https://github.com/daviddq" target="_blank">David Diaz</a></li>
                <li><a href="https://github.com/FaultyFunctions" target="_blank">@FaultyFunctions</a></li>
              </ul>
            </small>
            <a href="https://github.com/blurymind/YarnClassic/issues/new" target="_blank">Report a Bug</a>
          </div>
          `,
          showCancelButton: false,
          confirmButtonText: 'OK'
        });
      }
    });
  }; // closeSettingsDialog


  this.closeSettingsDialog = function () {
    $('.settings-dialog').css({
      opacity: 1
    }).transition({
      opacity: 0
    }, 250, e => {
      self.settingsDialogVisible(false);
    });
    $('.settings-dialog .form').css({
      y: '0'
    }).transition({
      y: '-100'
    }, 250);
    setTimeout(() => app.settings.apply(), 100);
  }; // isDialogOpen


  this.isDialogOpen = function () {
    return self.settingsDialogVisible() || Swal.isVisible() && !Swal.isTimerRunning();
  }; // confirmMarkupConversion


  this.confirmMarkupConversion = function () {
    Swal.fire({
      title: 'Are you sure?',
      text: "Markup on all nodes will be modified. This can rarely result in broken texts. This operation can't be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, convert it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        app.convertMarkup();
        Swal.fire('Converted!', 'The markup on the nodes has been converted.', 'success');
      }
    });
  };

  this.nodeSearchMatches = function (node, search, matchAll = false) {
    var title = matchAll || $('.search-title input').is(':checked');
    var body = matchAll || $('.search-body input').is(':checked');
    var tags = matchAll || $('.search-tags input').is(':checked');

    if (search.length === 0 || !title && !body && !tags) {
      return {
        matchTitle: false,
        matchBody: false,
        matchTags: false,
        clearSearch: true
      };
    } else {
      var matchTitle = title && node.title().toLowerCase().indexOf(search) >= 0;
      var matchBody = body && node.body().toLowerCase().indexOf(search) >= 0;
      var matchTags = tags && node.tags().toLowerCase().indexOf(search) >= 0;
      return {
        matchTitle,
        matchBody,
        matchTags,
        clearSearch: false
      };
    }
  };

  this.findMatchingNodes = function (searchText) {
    const found = {
      matchTitle: [],
      matchBody: [],
      matchTags: [],
      foundNodes: false
    };
    [...app.nodes()].reverse().forEach(node => {
      const {
        matchTitle,
        matchBody,
        matchTags
      } = app.ui.nodeSearchMatches(node, searchText, true);
      if (matchTitle) found.matchTitle.push(node);
      if (matchBody) found.matchBody.push(node);
      if (matchTags) found.matchTags.push(node);
    });
    found.foundNodes = found.matchTitle.length > 0 || found.matchBody.length > 0 || found.matchTags.length > 0;
    return found;
  };

  this.createSearchMenuLine = function (node, action, rootMenu, match = 'title') {
    const p = document.createElement('div');
    p.innerHTML = `${node.title()} ${match ? `(${match})` : ''}`;
    $(p).addClass('item ' + node.titleStyles[node.colorID()]);

    if (action == 'link') {
      if (node.title() !== app.editing().title()) {
        if (app.settings.documentType() === 'ink' && node.title().trim() === _data__WEBPACK_IMPORTED_MODULE_0__[/* data */ "a"].InkGlobalScopeNodeName) return;
        p.setAttribute('onclick', app.settings.documentType() === 'ink' ? "app.insertTextAtCursor('-> " + node.title() + "')" : "app.insertTextAtCursor('[[" + node.title() + "]]')");
        rootMenu.appendChild(p);
      }
    } else if (action == 'open') {
      p.setAttribute('onclick', `app.openNodeByTitle("${node.title()}")`);
      p.setAttribute('onmouseenter', `app.workspace.warpToNodeByIdx(${app.nodes.indexOf(node)})`);
      rootMenu.appendChild(p);
    }
  }; // openNodeListMenu


  this.openNodeListMenu = function (action) {
    const searchText = action === 'link' ? document.getElementById('linkHelperMenuFilter').value.toLowerCase() : document.getElementById('nodeSearchInput').value.toLowerCase();
    const rootMenu = document.getElementById(action + 'HelperMenu');
    rootMenu.innerHTML = '';

    const listAllNodes = () => {
      [...app.nodes()].reverse().forEach(node => {
        this.createSearchMenuLine(node, action, rootMenu, '');
      });
    }; // If there's no search query or nothing is found, simply return all nodes


    if (!searchText) {
      listAllNodes();
      return;
    }

    const found = this.findMatchingNodes(searchText);

    if (!found.foundNodes) {
      listAllNodes();
    } else {
      found.matchTitle.forEach(node => {
        this.createSearchMenuLine(node, action, rootMenu, 'title');
      });
      found.matchTags.forEach(node => {
        this.createSearchMenuLine(node, action, rootMenu, 'tags');
      });
      found.matchBody.forEach(node => {
        this.createSearchMenuLine(node, action, rootMenu, 'body');
      });
    }
  };

  this.checkAndMoveAppButtons = function () {
    // Move app buttons to either side depending on direction
    $('.app-add-node').toggleClass('app-add-node-alt', app.settings.editorSplitDirection() === 'right');
    $('.app-sort').toggleClass('app-sort-alt', app.settings.editorSplitDirection() === 'right');
    $('.app-undo-redo').toggleClass('app-undo-redo-alt', app.settings.editorSplitDirection() === 'right');
    $('.app-zoom').toggleClass('app-zoom-alt', app.settings.editorSplitDirection() === 'right');
  };

  this.resetAppButtonsLocation = function () {
    $('.app-add-node').removeClass('app-add-node-alt');
    $('.app-sort').removeClass('app-sort-alt');
    $('.app-undo-redo').removeClass('app-undo-redo-alt');
    $('.app-zoom').removeClass('app-zoom-alt');
  };

  this.toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'Done!',
    animation: false,
    position: 'bottom',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  this.insertTextAtCursorWithParams = function (template = '', params = []) {
    const html = params.map((param, i) => {
      if (typeof param.default === 'boolean') {
        return `<div class="flex-wrap"><span>${param.name} :</span><input type="checkbox" id="swal-input${i}" class="swal2-input"> </div>`;
      }

      if (typeof param.default === 'number') {
        return `<div class="flex-wrap"><span>${param.name} :</span><input type="number" step=0.01 id="swal-input${i}" class="swal2-input"> </div>`;
      }

      return `<div class="flex-wrap"><span>${param.name} :</span> <input id="swal-input${i}" class="swal2-input" style="flex:1"></div>`;
    }).join('\n');
    Swal.fire({
      title: 'Snippet properties',
      html,
      preConfirm: function () {
        return new Promise(function (resolve) {
          resolve(params.map((param, i) => typeof param.default === 'boolean' ? $(`#swal-input${i}`).is(':checked') : $(`#swal-input${i}`).val()));
        });
      },
      onOpen: function () {
        $('#swal-input0').focus();
        params.forEach((param, i) => {
          if (param.default === undefined) return;

          if (typeof param.default === 'boolean') {
            $(`#swal-input${i}`)[0].checked = param.default;
          } else $(`#swal-input${i}`)[0].value = param.default;

          console.log($(`#swal-input${i}`));
        });
      }
    }).then(function (result) {
      if (!result.value) return;
      let output = template;
      result.value.forEach((value, i) => {
        if (value === undefined) return;
        output = output.replace(`%${i}`, value);
      });
      app.insertTextAtCursor(output);
    });
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Z1dp"), __webpack_require__("EVdn")))

/***/ }),

/***/ "gugv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "jF1P":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(ko) {// custom fork of this library due to the original using brance and being unmaintained atm
(function () {
  var instances_by_id = {},
      // needed for referencing instances during updates.
  init_id = 0; // generated id increment storage

  ko.bindingHandlers.ace = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      var options = allBindingsAccessor().aceOptions || {};
      var value = ko.utils.unwrapObservable(valueAccessor()); // Ace attaches to the element by DOM id, so we need to make one for the element if it doesn't have one already.

      if (!element.id) {
        element.id = 'knockout-ace-' + init_id;
        init_id = init_id + 1;
      }

      var editor = ace.edit(element.id);
      if (options.theme) editor.setTheme('ace/theme/' + options.theme);
      if (options.mode) editor.getSession().setMode('ace/mode/' + options.mode);
      editor.setValue(value);
      editor.gotoLine(0);
      editor.setShowPrintMargin(false);
      editor.getSession().setUseWrapMode(true);
      editor.getSession().on('change', function (delta) {
        if (ko.isWriteableObservable(valueAccessor())) {
          valueAccessor()(editor.getValue());
        }
      });
      instances_by_id[element.id] = editor; // destroy the editor instance when the element is removed

      ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
        try {
          editor.destroy();
        } catch (e) {}

        delete instances_by_id[element.id];
      });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      var value = ko.utils.unwrapObservable(valueAccessor());
      var id = element.id; //handle programmatic updates to the observable
      // also makes sure it doesn't update it if it's the same.
      // otherwise, it will reload the instance, causing the cursor to jump.

      if (id !== undefined && id !== '' && instances_by_id.hasOwnProperty(id)) {
        var editor = instances_by_id[id];
        var content = editor.getValue();

        if (content !== value) {
          editor.setValue(value);
          editor.gotoLine(0);
        }
      }
    }
  };
  ko.aceEditors = {
    resizeAll: function () {
      for (var id in instances_by_id) {
        if (!instances_by_id.hasOwnProperty(id)) continue;
        var editor = instances_by_id[id];
        editor.resize();
      }
    },
    get: function (id) {
      return instances_by_id[id];
    }
  };
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Z1dp")))

/***/ }),

/***/ "l8+o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichTextFormatter; });
/* harmony import */ var _richTextFormatterBbcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mIo7");
/* harmony import */ var _richTextFormatterHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mqgS");


const RichTextFormatter = function (app) {
  const type = app.settings.markupLanguage();

  const addExtraPreviewerEmbeds = result => {
    const twRegex = /(https?:\/\/twitter.com\/[^\s\<]+\/[^\s\<]+\/[^\s\<]+)/gi;
    const instaRegex = /((https:\/\/)?(www.)?instagram.com\/p\/[^\s\<]+)/gi;
    const ytRegex = /(?:http(?:s?):\/\/|)(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?(?:\?t=[0-9]+)?/gi;
    const otherUrlPattern = `^(?!${twRegex.source}|${ytRegex.source}|${instaRegex.source})https?:.*$`;
    const combinedRegex = new RegExp(otherUrlPattern, 'gm');
    result = result.replace(combinedRegex, function (id) {
      return `
       <div style="position: relative">
        <iframe src="${id}" style="position:relative;left:-70px !important;width:90%;height:500px"></iframe>
       </div>
    `;
    }); // add tweet embeds :3

    const tweets = [];
    result = result.replace(twRegex, function (id) {
      const extractedtweetId = id.match(/https:\/\/twitter.com\/.*\/status\/([0-9]+)/i);

      if (extractedtweetId.length > 1) {
        tweets.push(extractedtweetId[1]);
        return `<a class="tweet" id="${extractedtweetId[1]}"></a>`;
      }
    });
    setTimeout(() => {
      const tweetItems = document.querySelectorAll('.tweet');
      tweets.forEach((tweetPost, index) => {
        twttr.widgets.createTweet(tweetPost, tweetItems[index], {
          align: 'center',
          follow: false
        });
      });
    }, 500); // create Youtube previews :)

    result = result.replace(ytRegex, function (id) {
      const extractedId = id.match(/(?:https\:.*|)(?:www.|)youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11}(?:\?t=[0-9]+)?)/i);

      if (extractedId.length > 1) {
        return `
        <iframe height="315" src="https://www.youtube.com/embed/${extractedId[1]}" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe> 
      `;
      }
    }); // create Instagram previews :)

    result = result.replace(instaRegex, function (id) {
      const extractedId = id.match(/((?:https?:\/\/)?(?:www.)?instagram.com\/p\/([^\s\<]+)\/)/i);

      if (extractedId.length > 2) {
        console.log('EXTRACTED', extractedId);
        return `
            <iframe height="540" src="http://instagram.com/p/${extractedId[2]}/embed" frameborder="0"></iframe>
      `;
      }
    });
    return result;
  };

  return type === 'html' ? new _richTextFormatterHtml__WEBPACK_IMPORTED_MODULE_1__[/* HtmlRichTextFormatter */ "a"](app, addExtraPreviewerEmbeds) : new _richTextFormatterBbcode__WEBPACK_IMPORTED_MODULE_0__[/* BbcodeRichTextFormatter */ "a"](app, addExtraPreviewerEmbeds);
};

/***/ }),

/***/ "mIo7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BbcodeRichTextFormatter; });
const bbcode = __webpack_require__("L8pc");

const BbcodeRichTextFormatter = function (app, addExtraPreviewerEmbeds) {
  const self = this;
  this.justInsertedAutoComplete = false;
  this.completableTags = Object.freeze([{
    Start: '<<',
    Completion: '>>',
    Offset: -2
  }, {
    Start: '[colo',
    Completion: 'r=#][/color]',
    Offset: -9,
    BehaviorCompletion: 'r=#][/color',
    Func: () => {
      app.insertColorCode();
    }
  }, {
    Start: '[b',
    Completion: '][/b]',
    BehaviorCompletion: '][/b',
    Offset: -4
  }, {
    Start: '[i',
    Completion: '][/i]',
    BehaviorCompletion: '][/i',
    Offset: -4
  }, {
    Start: '[img',
    Completion: '][/img]',
    BehaviorCompletion: '][/img',
    Offset: -6
  }, {
    Start: '[u',
    Completion: '][/u]',
    BehaviorCompletion: '][/u',
    Offset: -4
  }, {
    Start: '[url',
    Completion: '][/url]',
    BehaviorCompletion: '][/url',
    Offset: -6
  }]);

  this.getTagOpen = function (tag) {
    switch (tag) {
      case 'cmd':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '~ ' : '{ ' : '<<';

      case 'opt':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '-> ' : '* [' : '[[';

      case 'color':
        return '[color=#]';

      default:
        return `[${tag}]`;
    }
  };

  this.getTagClose = function (tag) {
    switch (tag) {
      case 'cmd':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '' : ' }' : '>>';

      case 'opt':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '' : ']' : '|]]';

      default:
        return `[/${tag}]`;
    }
  };

  this.identifyTag = function (text) {
    let tag = text.lastIndexOf('[') !== -1 ? text.substring(text.lastIndexOf('['), text.length) : '';
    return tag;
  };

  this.insertTag = function (tag) {
    const tagOpen = self.getTagOpen(tag);
    const tagClose = self.getTagClose(tag);
    const selectedRange = JSON.parse(JSON.stringify(app.editor.selection.getRange()));
    app.editor.session.insert(selectedRange.start, tagOpen);
    app.editor.session.insert({
      column: selectedRange.end.column + tagOpen.length,
      row: selectedRange.end.row
    }, tagClose);

    if (tag === 'color') {
      if (app.editor.getSelectedText().length === 0) {
        app.moveEditCursor(-9);
      } else {
        app.editor.selection.setRange({
          start: {
            row: app.editor.selection.getRange().start.row,
            column: app.editor.selection.getRange().start.column - 1
          },
          end: {
            row: app.editor.selection.getRange().start.row,
            column: app.editor.selection.getRange().start.column - 1
          }
        });
      }

      app.insertColorCode();
    }

    if (tag === 'img') {
      if (app.editor.getSelectedText().length === 0) {
        app.moveEditCursor(-6);
        app.data.triggerPasteClipboard();
        setTimeout(() => app.moveEditCursor(6), 300);
      }
    } else if (app.editor.getSelectedText().length === 0) {
      if (!app.isEditorInPreviewMode) app.moveEditCursor(-tagClose.length);
    } else {
      app.editor.selection.setRange({
        start: app.editor.selection.getRange().start,
        end: {
          row: app.editor.selection.getRange().end.row,
          column: app.editor.selection.getRange().end.column - tagClose.length
        }
      });
    }

    app.editor.focus();
  };

  this._convertTag = function (inPattern, outPattern, text) {
    const globalRegex = new RegExp(inPattern, 'gi');
    const localRegex = new RegExp(inPattern, 'i');
    return text.replace(globalRegex, m => {
      const match = m.match(localRegex);
      const template = eval('`' + outPattern + '`');
      return match.length ? template : null;
    });
  };

  this.convert = function (text) {
    let result = text;
    result = self._convertTag('<b>(.*?)<\\/b>', '[b]${match[1]}[/b]', result);
    result = self._convertTag('<u>(.*?)<\\/u>', '[u]${match[1]}[/u]', result);
    result = self._convertTag('<i>(.*?)<\\/i>', '[i]${match[1]}[/i]', result);
    result = self._convertTag('<img>(.*?)<\\/img>', '[img]${match[1]}[/img]', result);
    result = self._convertTag('<color=#(.*?)>(.*?)<\\/color>', '[color=#${match[1]}]${match[2]}[/color]', result);
    result = self._convertTag('<url>(.*?)<\\/url>', '[url]${match[1]}[/url]', result);
    return result;
  };

  this.richTextToHtml = function (text, showRowNumbers = false) {
    let rowCounter = 1;
    let result = showRowNumbers ? '<div>' + '<font color="pink">' + rowCounter + '. </font><font>' + text + '</font></div>' // TODO: style this
    : text; /// Commands in preview mode

    result = result.replace(/<</gi, "<font color='violet'>(run:"); // TODO: style this

    result = result.replace(/>>/gi, ')</font>'); /// bbcode color tags in preview mode

    result = result.replace(/\[color=#[A-Za-z0-9]+\]/gi, function (colorCode) {
      const extractedCol = colorCode.match(/\[color=#([A-Za-z0-9]+)\]/i);

      if (extractedCol && extractedCol.length > 1) {
        return '[color=#' + extractedCol[1] + ']<font color=#' + extractedCol[1] + '>&#9751</font>';
      }
    }); /// bbcode local images with path relative to the opened yarn file

    result = result.replace(/\[img\][^\[]+\[\/img\]/gi, function (imgTag) {
      const extractedImgPath = imgTag.match(/\[img\](.*)\[\/img\]/i);

      if (extractedImgPath.length > 1) {
        const fullPathToFile = app.data.editingFileFolder(extractedImgPath[1]);

        if (app.data.doesFileExist(fullPathToFile)) {
          return showRowNumbers ? '<img src="' + fullPathToFile + '"> </img>' : '<img src="' + fullPathToFile + '" width="128" height="auto"> </img>';
        } else {
          // if not a local file, try to load it as a link
          return showRowNumbers ? '<img src="' + extractedImgPath[1] + '"> </img>' : '<img src="' + extractedImgPath[1] + '" width="128" height="auto"> </img>';
        }
      }
    });
    if (showRowNumbers) result = addExtraPreviewerEmbeds(result); /// do this last, as we need the newline characters in previous regex tests

    result = result.replace(/[\n\r]/g, function (row) {
      let rowAppend = '</font><br/>';
      rowCounter += 1;

      if (showRowNumbers) {
        rowAppend += '</div><div><font color="pink">' + rowCounter + '. </font><font>';
      }

      return rowAppend;
    }); /// other bbcode tag parsing in preview mode

    result = bbcode.parse(result);
    return result;
  };
};

/***/ }),

/***/ "mqgS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlRichTextFormatter; });
const HtmlRichTextFormatter = function (app, addExtraPreviewerEmbeds) {
  const self = this;
  this.justInsertedAutoComplete = false;
  this.completableTags = Object.freeze([{
    Start: '<<',
    Completion: '>>',
    Offset: -2
  }, {
    Start: '<colo',
    Completion: 'r=#></color>',
    Offset: -9,
    Func: () => {
      app.insertColorCode();
    }
  }, {
    Start: '<b',
    Completion: '></b>',
    Offset: -4
  }, {
    Start: '<img',
    Completion: '></img>',
    Offset: -6
  }, {
    Start: '<i',
    Completion: '></i>',
    Offset: -4
  }, {
    Start: '<u',
    Completion: '></u>',
    Offset: -4
  }, {
    Start: '<url',
    Completion: '></url>',
    Offset: -6
  }]);

  this.getTagOpen = function (tag) {
    switch (tag) {
      case 'cmd':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '~ ' : '{ ' : '<<';

      case 'opt':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '-> ' : '* [' : '[[';

      case 'color':
        return '<color=#>';

      default:
        return `<${tag}>`;
    }
  };

  this.getTagClose = function (tag) {
    switch (tag) {
      case 'cmd':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '' : ' }' : '>>';

      case 'opt':
        return app.settings.documentType() === 'ink' ? app.editor.getSelectedText().length === 0 ? '' : ']' : '|]]';

      default:
        return `</${tag}>`;
    }
  };

  this.identifyTag = function (text) {
    let tag = text.lastIndexOf('<') !== -1 ? text.substring(text.lastIndexOf('<'), text.length) : '';
    return tag;
  };

  this.insertTag = function (tag) {
    const tagOpen = self.getTagOpen(tag);
    const tagClose = self.getTagClose(tag);
    const selectedRange = JSON.parse(JSON.stringify(app.editor.selection.getRange()));
    app.editor.session.insert(selectedRange.start, tagOpen);
    app.editor.session.insert({
      column: selectedRange.end.column + tagOpen.length,
      row: selectedRange.end.row
    }, tagClose);

    if (tag === 'color') {
      if (app.editor.getSelectedText().length === 0) {
        app.moveEditCursor(-9);
      } else {
        app.editor.selection.setRange({
          start: {
            row: app.editor.selection.getRange().start.row,
            column: app.editor.selection.getRange().start.column - 1
          },
          end: {
            row: app.editor.selection.getRange().start.row,
            column: app.editor.selection.getRange().start.column - 1
          }
        });
      }

      app.insertColorCode();
    }

    if (tag === 'img') {
      navigator.clipboard.readText().then(text => {
        if (app.editor.getSelectedText().length === 0) {
          app.moveEditCursor(-7);
          app.insertTextAtCursor(` src="${text}"`);
        }
      });
    } else if (app.editor.getSelectedText().length === 0) {
      if (!app.isEditorInPreviewMode) app.moveEditCursor(-tagClose.length);
    } else {
      app.editor.selection.setRange({
        start: app.editor.selection.getRange().start,
        end: {
          row: app.editor.selection.getRange().end.row,
          column: app.editor.selection.getRange().end.column - tagClose.length
        }
      });
    }

    app.editor.focus();
  };

  this._convertTag = function (inPattern, outPattern, text) {
    const globalRegex = new RegExp(inPattern, 'gi');
    const localRegex = new RegExp(inPattern, 'i');
    return text.replace(globalRegex, m => {
      const match = m.match(localRegex);
      const template = eval('`' + outPattern + '`');
      return match.length ? template : null;
    });
  };

  this.convert = function (text) {
    let result = text;
    result = self._convertTag('\\[b\\](.*?)\\[\\/b\\]', '<b>${match[1]}</b>', result);
    result = self._convertTag('\\[u\\](.*?)\\[\\/u\\]', '<u>${match[1]}</u>', result);
    result = self._convertTag('\\[i\\](.*?)\\[\\/i\\]', '<i>${match[1]}</i>', result);
    result = self._convertTag('\\[img\\](.*?)\\[\\/img\\]', '<img>${match[1]}</img>', result);
    result = self._convertTag('\\[color=#(.*?)\\](.*?)\\[\\/color\\]', '<color=#${match[1]}>${match[2]}</color>', result);
    result = self._convertTag('\\[url\\](.*?)\\[\\/url\\]', '<url>${match[1]}</url>', result);
    return result;
  };

  this.richTextToHtml = function (text, showRowNumbers = false) {
    let rowCounter = 1;
    let result = showRowNumbers ? '<div>' + '<font color="pink">' + rowCounter + '. </font><font>' + text + '</font></div>' // TODO: style this
    : text; /// <<command>>

    result = result.replace(/<</gi, "<font color='violet'>(run:"); // TODO: style this

    result = result.replace(/>>/gi, ')</font>'); /// <color=#...></color>  and  &lt;color=#...&gt;&lt;/color&gt;

    [/&lt;color=#(.*?)&gt;(.*?)&lt;\/color&gt;/, /<color=#(.*?)>(.*?)<\/color>/].forEach(pattern => {
      const globalRegex = new RegExp(pattern, 'gi');
      const localRegex = new RegExp(pattern, 'i');
      result = result.replace(globalRegex, function (colorCode) {
        const matches = colorCode.match(localRegex);

        if (matches && matches.length > 2) {
          return `<font color=#${matches[1]}>&#9751${matches[2]}</font>`;
        }
      });
    }); // local images with path relative to the opened yarn file

    result = result.replace(/&lt;img&gt;[^\[]+&lt;\/img&gt;/gi, function (imgTag) {
      const extractedImgPath = imgTag.match(/&lt;img&gt;(.*?)&lt;\/img&gt;/i);

      if (extractedImgPath.length > 1) {
        const fullPathToFile = app.data.editingFileFolder(extractedImgPath[1]);

        if (app.data.doesFileExist(fullPathToFile)) {
          return showRowNumbers ? '<img src="' + fullPathToFile + '"> </img>' : '<img src="' + fullPathToFile + '" width="128" height="auto"> </img>';
        } else {
          // if not a local file, try to load it as a link
          return showRowNumbers ? '<img src="' + extractedImgPath[1] + '"> </img>' : '<img src="' + extractedImgPath[1] + '" width="128" height="auto"> </img>';
        }
      }
    }); // <b></b>

    result = result.replace(/&lt;b&gt;.*&lt;\/b&gt;/gi, m => {
      const content = m.match(/&lt;b&gt;(.*)&lt;\/b&gt;/i);

      if (content.length) {
        return `<b>${content[1]}</b>`;
      }
    }); // <u></u>

    result = result.replace(/&lt;u&gt;.*&lt;\/u&gt;/gi, m => {
      const content = m.match(/&lt;u&gt;(.*)&lt;\/u&gt;/i);

      if (content.length) {
        return `<u>${content[1]}</u>`;
      }
    }); // <i></i>

    result = result.replace(/&lt;i&gt;.*&lt;\/i&gt;/gi, m => {
      const content = m.match(/&lt;i&gt;(.*)&lt;\/i&gt;/i);

      if (content.length) {
        return `<i>${content[1]}</i>`;
      }
    });
    if (showRowNumbers) result = addExtraPreviewerEmbeds(result); // newLines. Do this last, as we need the newline characters in previous regex tests

    result = result.replace(/[\n\r]/g, function (row) {
      let rowAppend = '</font><br/>';
      rowCounter += 1;

      if (showRowNumbers) {
        rowAppend += '</div><div><font color="pink">' + rowCounter + '. </font><font>';
      }

      return rowAppend;
    }); /// finaly return the html result

    return result;
  };
};

/***/ }),

/***/ "oj90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILETYPE", function() { return FILETYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var FILETYPE = {
  JSON: 'json',
  XML: 'xml',
  TWEE: 'twee',
  TWEE2: 'tw2',
  UNKNOWN: 'none',
  YARN: 'yarn',
  INK: 'ink',
  INKJSON: 'ink.json',
  RENPY: 'rpy'
};
var Utils = {
  createAutocompleter: function (allowedTokens, wordList, meta, prefixLength = 1) {
    return {
      getCompletions: function (editor, session, pos, prefix, callback) {
        var token = editor.session.getTokenAt(pos.row, pos.column);

        if (prefix.length < prefixLength || allowedTokens && !allowedTokens.includes(token.type)) {
          callback(null, []);
          return;
        }

        callback(null, wordList.map(function (word) {
          if (typeof word === 'object') {
            return {
              caption: word.word,
              value: word.word,
              meta: meta,
              title: word.title,
              about: word.about,
              titleStyle: word.titleStyle
            };
          }

          return {
            caption: word,
            value: word,
            meta: meta
          };
        }));
      },
      getDocTooltip: function (item) {
        if (!item.title && !item.about) return '';
        item.docHTML = [`<div class='${item.titleStyle || 'title-style-1'}' style='
            display: flex;
            flex-direction: column; 
            font-size: 0.8rem;
            padding: 3px;'>`, '<p>', item.title, '</p>', `<div class='node' style='
            position:relative;
            min-width: 100%;
            overflow: hidden;'>`, `<div class='body' style='
             font-size: 0.7rem;
             line-height: 1rem;
             top: 0;
             padding: 3px'>`, item.about, '</div>', '</div>', '</div>'].join('');
      }
    };
  },
  addDoubleTapDetector: function (element, callback) {
    element.lastTap = 0;
    element.tapTimeout = 0;
    element.addEventListener('touchend', function (event) {
      var currentTime = new Date().getTime();
      var tapLength = currentTime - element.lastTap;
      clearTimeout(element.tapTimeout);

      if (tapLength < 500 && tapLength > 0) {
        // console.log("TAPPED twice")
        callback();
        event.preventDefault();
      } else {
        // elm2.innerHTML = 'Single Tap';
        element.tapTimeout = setTimeout(function () {
          // elm2.innerHTML = 'Single Tap (timeout)';
          clearTimeout(element.tapTimeout);
        }, 500);
      }

      element.lastTap = currentTime;
    });
  },
  uniqueSplit: function (str, separator = ' ') {
    return [...new Set(str.split(separator).filter(item => item))];
  },
  getHighestZ: function (container) {
    let highestZ = Number.NEGATIVE_INFINITY;
    $(container).children().each(function () {
      let z = parseInt($(this).css('z-index')) || 0;

      if (z > highestZ) {
        highestZ = z;
      }
    });
    return highestZ;
  },
  clamp: function (value, min, max) {
    return Math.max(Math.min(value, max), min);
  },
  rectanglesOverlap: function (r1, r2) {
    return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
  },
  stripHtml: function (html) {
    while (html.indexOf('<') >= 0) html = html.replace('<', '&lt;');

    while (html.indexOf('>') >= 0) html = html.replace('>', '&gt');

    return html;
  },
  // Changes XML to Object
  // todo: Replace with jQuery parseHTML to find values?
  xmlToObject: function (xml) {
    // Create the return object
    var nodes = [];
    xml = xml.childNodes.item(0);

    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var node = xml.childNodes.item(i);

        if (node.hasChildNodes()) {
          var obj = {};
          var found = false;

          for (var j = 0; j < node.childNodes.length; j++) {
            var subitem = node.childNodes.item(j);

            if (subitem.nodeName != '#text') {
              found = true;
              if (subitem.hasChildNodes()) obj[subitem.nodeName] = subitem.childNodes.item(0).nodeValue;else obj[subitem.nodeName] = '';

              if (subitem.attributes.length > 0) {
                obj[subitem.nodeName] = {};

                for (var k = 0; k < subitem.attributes.length; k++) {
                  var attribute = subitem.attributes.item(k);
                  obj[subitem.nodeName][attribute.nodeName] = attribute.nodeValue;
                }
              }
            }
          }

          if (found) nodes.push(obj);
        }
      }
    }

    return nodes;
  },
  now: Date.now || function () {
    return new Date().getTime();
  },
  // If we're in the context of the VSCode extension webview, we have to use a function
  // that it puts on window to get the path to public assets since it requires that
  // they be loaded with fully-qualified, special scheme.
  //
  // The "path" parameter here should NOT have a leading slash.
  getPublicPath: function (path) {
    if (window.getPublicVsCodeWebviewUri) {
      return window.getPublicVsCodeWebviewUri(path);
    } else {
      return `public${path ? `/${path}` : ''}`;
    }
  },
  // Creates the context menu for ace-editor
  getEditorContextMenu: function (gotoRegex) {
    return {
      selector: '.node-editor .form .editor',
      trigger: 'right',
      build: function ($trigger) {
        var options = {
          items: {} // callback: () => { self.editor.focus() }

        }; // color picker is being called instead

        if (/^\[color=#([a-zA-Z0-9]{3,6})$/.test(app.getTagBeforeCursor())) {
          return;
        } // There is some text selected


        if (app.editor.getSelectedText().length > 1) {
          options.items = {
            cut: {
              name: 'Cut',
              icon: 'cut',
              callback: () => {
                if (app.clipboard.length > 0) {
                  app.data.triggerCopyClipboard();
                  app.insertTextAtCursor('');
                }
              }
            },
            copy: {
              name: 'Copy',
              icon: 'copy',
              callback: () => {
                app.data.triggerCopyClipboard();
              }
            },
            paste: {
              name: 'Paste',
              icon: 'paste',
              callback: () => app.data.triggerPasteClipboard()
            },
            sep1: '---------'
          }; // add menu option to go to selected node if an option is selected

          if (app.getTagBeforeCursor().match(gotoRegex) && !(app.settings.documentType() === 'ink' && app.editor.getSelectedText() === 'END')) {
            options.items['go to node'] = {
              name: 'Edit node: ' + app.editor.getSelectedText(),
              callback: () => {
                const title = app.getFutureEditedNodeTitle(); // We add the node to visited nodes history before navigating to the next node

                if (!app.nodeVisitHistory.includes(title)) {
                  app.nodeVisitHistory.push(title);
                }

                app.openNodeByTitle(app.editor.getSelectedText());
              }
            };
          } // suggest word corrections if the selected word is misspelled


          if (app.settings.spellcheckEnabled()) {
            var suggestedCorrections = app.getSpellCheckSuggestionItems();

            if (suggestedCorrections !== false) {
              options.items.corrections = {
                name: 'Correct word',
                items: suggestedCorrections
              };
            }
          } // suggest similar words - thesaurus.com sysnonyms and anthonyms


          var suggested = app.getThesaurusItems();

          if (suggested !== false) {
            options.items.corrections = {
              name: 'Related words',
              items: suggested
            };
          }
        } else {
          options.items = {
            paste: {
              name: 'Paste',
              icon: 'paste',
              callback: () => app.data.triggerPasteClipboard()
            }
          };

          if (app.settings.documentType() === 'ink') {
            options.items.inkSnips = {
              name: 'Ink snippets',
              items: {
                structure: {
                  name: 'Structure',
                  items: {
                    stitch: {
                      name: 'Stitch',
                      callback: () => {
                        app.insertTextAtCursor(`= stitchName
This is the content of the stitch that should be embedded within a knot.
-> END`);
                      }
                    },
                    end: {
                      name: 'Ending indicator',
                      callback: () => {
                        app.insertTextAtCursor('-> END');
                      }
                    }
                  }
                },
                choices: {
                  name: 'Choices',
                  items: {
                    basicChoice: {
                      name: 'Basic choice',
                      callback: () => {
                        app.insertTextAtCursor('* This is a choice that can only be chosen once');
                      }
                    },
                    stickyChoice: {
                      name: 'Sticky choice',
                      callback: () => {
                        app.insertTextAtCursor('+ This is a sticky choice - the player can choose it more than once');
                      }
                    },
                    choiceWithoutPrinting: {
                      name: 'Choice without printing',
                      callback: () => {
                        app.insertTextAtCursor("* [A choice where the content isn't printed after choosing]");
                      }
                    },
                    choiceWithoutMixedOutput: {
                      name: 'Choice without mixed output',
                      callback: () => {
                        app.insertTextAtCursor('* Try [it] this example!');
                      }
                    }
                  }
                },
                variableText: {
                  name: 'Variable text',
                  items: {
                    shuffle: {
                      name: '~Shuffle (rand) text',
                      callback: () => {
                        app.insertTextAtCursor('I tossed the coin. {~Heads|Tails}.');
                      }
                    },
                    cycle: {
                      name: '&Cycle text',
                      callback: () => {
                        app.insertTextAtCursor('It was {&Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday} today.');
                      }
                    },
                    sequence: {
                      name: 'Sequence text',
                      callback: () => {
                        app.insertTextAtCursor('The radio hissed into life. {"Three!"|"Two!"|"One!"|There was the white noise racket of an explosion.|But it was just static.}\n' + '\n' + "{I bought a coffee with my five-pound note.|I bought a second coffee for my friend.|I didn't have enough money to buy any more coffee.}");
                      }
                    },
                    onceOnly: {
                      name: '!Once only text',
                      callback: () => {
                        app.insertTextAtCursor('He told me a joke. {!I laughed politely.|I smiled.|I grimaced.|I promised myself to not react again.}\n');
                      }
                    }
                  }
                },
                variables: {
                  name: 'Variables',
                  items: {
                    globalVariable: {
                      name: 'Global variable',
                      callback: () => {
                        app.insertTextAtCursor('VAR myNumber = 5');
                      }
                    },
                    temporaryVariable: {
                      name: 'Temporary variable',
                      callback: () => {
                        app.insertTextAtCursor('temp myTemporaryValue = 5');
                      }
                    },
                    modifyVariable: {
                      name: 'Modify variable',
                      callback: () => {
                        app.insertTextAtCursor('~ myNumber = myNumber + 1');
                      }
                    }
                  }
                },
                conditions: {
                  name: 'Conditions',
                  items: {
                    inlineCondition: {
                      name: 'Inline condition',
                      callback: () => {
                        app.insertTextAtCursor('{yourVariable: This is written if yourVariable is true|Otherwise this is written}\n');
                      }
                    },
                    multilineCondition: {
                      name: 'Multiline condition',
                      callback: () => {
                        app.insertTextAtCursor('{yourVariable:\n' + '    This is written if yourVariable is true.\n' + '  - else:\n' + '    Otherwise this is written.\n' + '}');
                      }
                    }
                  }
                }
              }
            };
            options.items.code = {
              name: 'Code',
              items: {
                equal: {
                  name: '== (equal)',
                  callback: () => app.insertTextAtCursor('== ')
                },
                notEqual: {
                  name: '!= (not equal)',
                  callback: () => app.insertTextAtCursor('!= ')
                },
                tag: {
                  name: '# (tag)',
                  callback: () => app.insertTextAtCursor('# ')
                },
                list: {
                  name: 'LIST',
                  callback: () => app.insertTextAtCursor('LIST = ')
                },
                listFunc: {
                  name: 'List functions',
                  items: {
                    count: {
                      name: 'count',
                      callback: () => app.insertTextAtCursor('LIST_COUNT()')
                    },
                    min: {
                      name: 'min',
                      callback: () => app.insertTextAtCursor('LIST_MIN()')
                    },
                    max: {
                      name: 'max',
                      callback: () => app.insertTextAtCursor('LIST_MAX()')
                    },
                    rand: {
                      name: 'random',
                      callback: () => app.insertTextAtCursor('LIST_RANDOM()')
                    }
                  }
                },
                variable: {
                  name: 'VAR',
                  callback: () => app.insertTextAtCursor('VAR = ')
                },
                temp: {
                  name: '~ temp',
                  callback: () => app.insertTextAtCursor('~ temp = ')
                },
                plusEq: {
                  name: '+= (plus equal)',
                  callback: () => app.insertTextAtCursor('+= ')
                },
                else: {
                  name: '- else',
                  callback: () => app.insertTextAtCursor('- else:\n')
                },
                or: {
                  name: '|',
                  callback: () => app.insertTextAtCursor('|')
                },
                rand: {
                  name: '~',
                  callback: () => app.insertTextAtCursor('~')
                }
              }
            };
            options.items.bladeCoder = {
              name: 'BladeCoder',
              items: {
                player: {
                  name: '$PLAYER>',
                  callback: () => app.insertTextAtCursor('$PLAYER> ')
                },
                animation: {
                  name: 'Animation',
                  callback: () => app.ui.insertTextAtCursorWithParams('> Animation: animation=%0.%1, wait=%2, keepDirection=%3, repeat=%4, count=%5', [{
                    name: 'Actor',
                    default: '$PLAYER'
                  }, {
                    name: 'Animation',
                    default: 'stand.right'
                  }, {
                    name: 'Wait',
                    default: false
                  }, {
                    name: 'Keep direction',
                    default: false
                  }, {
                    name: 'Repeat',
                    default: 'SPRITE_DEFINED'
                  }, //TODO make it ['SPRITE_DEFINED', 'YOYO'] }
                  {
                    name: 'Count',
                    default: -1
                  }])
                },
                goto: {
                  name: 'Goto',
                  callback: () => app.ui.insertTextAtCursorWithParams('> Goto: actor=%0, target=%1', [{
                    name: 'Actor',
                    default: '$PLAYER'
                  }, {
                    name: 'target',
                    default: 'target'
                  }])
                },
                wait: {
                  name: 'Wait',
                  callback: () => app.ui.insertTextAtCursorWithParams('> Wait: time=%0', [{
                    name: 'Time',
                    default: 0.8
                  }])
                },
                playSound: {
                  name: 'Play Sound',
                  callback: () => app.ui.insertTextAtCursorWithParams('> PlaySound: sound=%0, stop=%1', [{
                    name: 'Sound',
                    default: 'yawn'
                  }, {
                    name: 'Stop',
                    default: false
                  }])
                },
                setActorAttr: {
                  name: 'Set Actor Attribute',
                  callback: () => app.ui.insertTextAtCursorWithParams('> SetActorAttr: actor=%0, talkAnimation=%1, visible=%2', [{
                    name: 'Actor',
                    default: '$PLAYER'
                  }, {
                    name: 'Talk animation'
                  }, {
                    name: 'Visible',
                    default: true
                  }])
                }
              }
            };
            options.items.end = {
              name: '-> END',
              callback: () => app.insertTextAtCursor('-> END')
            };
            options.items.star = {
              name: '* (choice)',
              callback: () => app.insertTextAtCursor('* ')
            };
            options.items.gather = {
              name: '- (gather)',
              callback: () => app.insertTextAtCursor('-')
            };
            options.items.stitch = {
              name: '= (stitch)',
              callback: () => app.insertTextAtCursor('= ')
            };
            options.items.glue = {
              name: '<> (glue)',
              callback: () => app.insertTextAtCursor('<>')
            };
            options.items.comment = {
              name: '// (comment)',
              callback: () => app.insertTextAtCursor('// ')
            };
            options.items.nested = {
              name: 'Nested',
              items: {
                gather2: {
                  name: '-- (gather)',
                  callback: () => app.insertTextAtCursor('-- ')
                },
                star2: {
                  name: '** (choice)',
                  callback: () => app.insertTextAtCursor('** ')
                }
              }
            };
            options.items.inkDoc = {
              name: 'How to use ink',
              callback: () => window.open('https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md', '_blank').focus()
            };
          }
        } // add option to add path of local image file between img tags


        if (app.getTagBeforeCursor().match(/\[img/g)) {
          options.items['Choose image'] = {
            name: 'Choose image',
            callback: () => {
              app.data.insertImageFileName();
            }
          };
        }

        return options;
      }
    };
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("EVdn")))

/***/ }),

/***/ "owJe":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* eslint-disable jquery/no-ajax */
// You also need to load in nspell.js and jquery.js
// This is a custom made fork that uses nspell instead of typo.js due to major performance issues in the later.
// Please keep this file for now...
var nspell = __webpack_require__("jXEy"); // You should configure these classes.


var editor = 'editor'; // This should be the id of your editor element.

var utils = __webpack_require__("oj90");

var dicPath = utils.Utils.getPublicPath('dictionaries/en/index.dic');
var affPath = utils.Utils.getPublicPath('dictionaries/en/index.aff'); // var dicPath =
//   "https://raw.githubusercontent.com/elastic/hunspell/master/dicts/en_US/en_US.dic";
// var affPath =
//   "https://raw.githubusercontent.com/elastic/hunspell/master/dicts/en_US/en_US.aff";
// Make red underline for gutter and words.

$("<style type='text/css'>.ace_marker-layer .misspelled { position: absolute; z-index: -2; border-bottom: 1px solid red; margin-bottom: -1px; }</style>").appendTo('head');
$("<style type='text/css'>.misspelled { border-bottom: 1px solid red; margin-bottom: -1px; }</style>").appendTo('head'); // Load the dictionary.
// We have to load the dictionary files sequentially to ensure

var dictionary = null;

function load_dictionary(dicLanguage) {
  console.info(`Loading ${dicLanguage} hunspell dictionary locally`);
  dicPath = utils.Utils.getPublicPath(`dictionaries/${dicLanguage}/index.dic`);
  affPath = utils.Utils.getPublicPath(`dictionaries/${dicLanguage}/index.aff`);
  $.get(dicPath, function (data) {
    dicData = data;
  }).fail(function () {
    console.error(`${dicLanguage} not found locally. Loading dictionary from server instead...`);
    dicPath = `https://raw.githubusercontent.com/wooorm/dictionaries/main/dictionaries/${dicLanguage}/index.dic`;
    affPath = `https://raw.githubusercontent.com/wooorm/dictionaries/main/dictionaries/${dicLanguage}/index.aff`;
    $.get(dicPath, function (data) {
      dicData = data;
    }).done(function () {
      $.get(affPath, function (data) {
        affData = data;
      }).done(function () {
        console.log('Dictionary loaded from server');
        dictionary = new nspell(affData, dicData);
        contents_modified = true;
      });
    });
  }).done(function () {
    $.get(affPath, function (data) {
      affData = data;
    }).done(function () {
      console.log('Dictionary loaded locally');
      dictionary = new nspell(affData, dicData);
      contents_modified = true;
    });
  });
}

exports.load_dictionary = load_dictionary; // Check the spelling of a line, and return [start, end]-pairs for misspelled words.

function misspelled(line) {
  var multiLangualNonWords = /\s+|\.|\,|\?|\\|\/|\!|\[|\]|"|'|;|:|`|\+|\-|\&|\$|@|~|#|>|<|_|\)|\(|£|\^|%|\*|„|“|\||[0-9]+/g;
  var words = line.split(multiLangualNonWords); // console.log(words);

  var i = 0;
  var bads = [];

  for (word in words) {
    var checkWord = words[word];

    if (!dictionary.correct(checkWord)) {
      bads[bads.length] = [i, i + words[word].length];
    }

    i += words[word].length + 1;
  }

  return bads;
}

exports.misspelled = misspelled;
var contents_modified = true;
var currently_spellchecking = false;
var markers_present = []; // Spell check the Ace editor contents.

function spell_check() {
  // Wait for the dictionary to be loaded.
  if (dictionary == null) {
    return;
  }

  if (currently_spellchecking) {
    return;
  }

  if (!contents_modified) {
    return;
  }

  currently_spellchecking = true;
  var session = ace.edit(editor).getSession(); // Clear all markers and gutter

  clear_spellcheck_markers(); // Populate with markers and gutter

  try {
    var Range = ace.require('ace/range').Range;

    var lines = session.getDocument().getAllLines();

    for (var i in lines) {
      // Check spelling of this line.
      var misspellings = misspelled(lines[i]); // Add markers and gutter markings.
      // if (misspellings.length > 0) {
      //   session.addGutterDecoration(i, "misspelled");
      // }

      for (var j in misspellings) {
        var range = new Range(i, misspellings[j][0], i, misspellings[j][1]);
        markers_present[markers_present.length] = session.addMarker(range, 'misspelled', 'typo', true);
      }
    }
  } finally {
    currently_spellchecking = false;
    contents_modified = false;
  }
}

exports.spell_check = spell_check;
var spellcheckEnabled = false;

function enable_spellcheck() {
  spellcheckEnabled = true;
  ace.edit(editor).getSession().on('change', function (e) {
    if (spellcheckEnabled) {
      contents_modified = true;
      spell_check();
    }
  }); // needed to trigger update once without input

  contents_modified = true;
  spell_check();
}

exports.enable_spellcheck = enable_spellcheck;

function disable_spellcheck() {
  spellcheckEnabled = false; // Clear the markers

  clear_spellcheck_markers();
}

exports.disable_spellcheck = disable_spellcheck;

function clear_spellcheck_markers() {
  var session = ace.edit(editor).getSession();

  for (var i in markers_present) {
    session.removeMarker(markers_present[i]);
  }

  markers_present = []; // Clear the gutter

  var lines = session.getDocument().getAllLines();

  for (var i in lines) {
    session.removeGutterDecoration(i, 'misspelled');
  }
}

exports.clear_spellcheck_markers = clear_spellcheck_markers;

function suggest_word_for_misspelled(misspelledWord) {
  var array_of_suggestions = dictionary.suggest(misspelledWord);

  if (array_of_suggestions.length === 0) {
    return false;
  }

  return array_of_suggestions;
}

exports.suggest_word_for_misspelled = suggest_word_for_misspelled;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("EVdn")))

/***/ }),

/***/ "pLxK":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"0.4.254\"}");

/***/ }),

/***/ "pYPP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
// Get the mechanism to use for storage.
const getStorage = function () {
  // if `window.vsCodeApi` exists, we're in the context of the VSCode extension
  // which handles all of the settings internally, so we don't need to do anything here
  if (window.vsCodeApi) {
    return {
      getItem: () => {},
      setItem: () => {}
    };
  } else {
    return window.localStorage;
  }
};

const Settings = function (app) {
  const self = this;
  const storage = getStorage();
  this.storage = storage;

  ko.extenders.persist = function (target, option) {
    target.subscribe(function (newValue) {
      storage.setItem(option, newValue);
    });
    return target;
  }; // apply
  //
  // Applies the current settings


  this.apply = function () {
    app.setTheme(self.theme());
    app.setLanguage(self.language());
    app.setDocumentType(self.documentType());
    app.toggleInvertColors();
    app.setMarkupLanguage(self.markupLanguage());
    app.workspace.setThrottle(self.redrawThrottle());
    app.setGistCredentials({
      token: self.gistToken(),
      file: self.gistFile() !== null ? self.gistFile().split('/').pop() : null
    });
  };

  this.validateGridSize = function () {
    if (self.gridSize() < 20) {
      self.gridSize(20);
    }

    if (self.gridSize() > 200) {
      self.gridSize(200);
    }

    self.gridSize(parseInt(self.gridSize()));
    app.initGrid();
  }; // Theme


  this.theme = ko.observable(storage.getItem('theme') || 'dracula').extend({
    persist: 'theme'
  }); // Document type

  this.documentType = ko.observable(storage.getItem('documentType') || 'yarn').extend({
    persist: 'documentType'
  }); // Language

  this.language = ko.observable(storage.getItem('language') || 'en-GB').extend({
    persist: 'language'
  }); // Redraw throttle

  this.redrawThrottle = ko.observable(parseInt(storage.getItem('redrawThrottle') || '50')).extend({
    persist: 'redrawThrottle'
  });
  this.gistToken = ko.observable(storage.getItem('gistToken')).extend({
    persist: 'gistToken'
  });
  this.gistFile = ko.observable(storage.getItem('gistFile')).extend({
    persist: 'gistFile'
  }); // Spellcheck enabled

  this.spellcheckEnabled = ko.observable(storage.getItem('spellcheckEnabled') !== null ? storage.getItem('spellcheckEnabled') === 'true' : true).extend({
    persist: 'spellcheckEnabled'
  }); // Auto Close Tags

  this.autoCloseTags = ko.observable(storage.getItem('autoCloseTags') !== null ? storage.getItem('autoCloseTags') === 'true' : true).extend({
    persist: 'autoCloseTags'
  }); // Autocomplete Suggestions

  this.autocompleteSuggestionsEnabled = ko.observable(storage.getItem('autocompleteSuggestionsEnabled') !== null ? storage.getItem('autocompleteSuggestionsEnabled') === 'true' : true).extend({
    persist: 'autocompleteSuggestionsEnabled'
  }); // Auto Close Brackets

  this.autoCloseBrackets = ko.observable(storage.getItem('autoCloseBrackets') !== null ? storage.getItem('autoCloseBrackets') === 'true' : true).extend({
    persist: 'autoCloseBrackets'
  }); // Night mode

  this.invertColorsEnabled = ko.observable(storage.getItem('invertColorsEnabled') !== null ? storage.getItem('invertColorsEnabled') === 'true' : false).extend({
    persist: 'invertColorsEnabled'
  }); // Snap to grid

  this.snapGridEnabled = ko.observable(storage.getItem('snapGridEnabled') !== null ? storage.getItem('snapGridEnabled') === 'true' : false).extend({
    persist: 'snapGridEnabled'
  }); // Grid size

  this.gridSize = ko.observable(parseInt(storage.getItem('gridSize') || '40')).extend({
    persist: 'gridSize'
  }); // Autocreate nodes

  this.createNodesEnabled = ko.observable(storage.getItem('createNodesEnabled') !== null ? storage.getItem('createNodesEnabled') === 'true' : true).extend({
    persist: 'createNodesEnabled'
  }); // Editor stats

  this.editorStatsEnabled = ko.observable(storage.getItem('editorStatsEnabled') !== null ? storage.getItem('editorStatsEnabled') === 'true' : false).extend({
    persist: 'editorStatsEnabled'
  }); // Markup language

  this.markupLanguage = ko.observable(storage.getItem('markupLanguage') || 'bbcode').extend({
    persist: 'markupLanguage'
  }); // Filetype version

  this.filetypeVersion = ko.observable(storage.getItem('filetypeVersion') || '1').extend({
    persist: 'filetypeVersion'
  }); // Line Style

  this.lineStyle = ko.observable(storage.getItem('lineStyle') || 'straight').extend({
    persist: 'lineStyle'
  });
  this.fileTabsVisible = ko.observable(storage.getItem('fileTabsVisible') !== null ? storage.getItem('fileTabsVisible') === 'true' : true).extend({
    persist: 'fileTabsVisible'
  });
  this.selectedFileTab = ko.observable(storage.getItem('selectedFileTab') || 0).extend({
    persist: 'selectedFileTab'
  }); // Always open nodes in Visual Studio Code Editor
  // We don't actually show this in the settings menu; it can only be set by the VSCode extension's settings

  this.alwaysOpenNodesInVisualStudioCodeEditor = ko.observable(storage.getItem('alwaysOpenNodesInVisualStudioCodeEditor') !== null ? storage.getItem('alwaysOpenNodesInVisualStudioCodeEditor') === 'true' : false).extend({
    persist: 'alwaysOpenNodesInVisualStudioCodeEditor'
  });
  this.editorSplitDirection = ko.observable(storage.getItem('editorSplitDirection') || 'left').extend({
    persist: 'editorSplitDirection'
  });
  this.editorSplit = ko.observable(storage.getItem('editorSplit') !== null ? storage.getItem('editorSplit') === 'true' : false).extend({
    persist: 'editorSplit'
  });
  this.editorSplitSize = ko.observable(storage.getItem('editorSplitSize') || '50%').extend({
    persist: 'editorSplitSize'
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Z1dp")))

/***/ }),

/***/ "qVgP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inkRender; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+qE3");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);


const {
  Story
} = __webpack_require__("7Orj");

var inkRender = function () {
  let emiter = new events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //todo add signals

  this.emiter = emiter;
  this.story = null;
  this.log = [];

  this.onRecompile = () => {};

  this.curStory = {
    messages: [],
    choices: [],
    tags: [],
    paragraphEl: ''
  };

  this.resetStory = () => {
    this.prevSavePoints = [];
    this.choiceHistory = [];
    this.textAreaEl.innerHTML = '';
    this.curStory = {
      messages: [],
      choices: [],
      tags: [],
      paragraphEl: ''
    };
    this.story.ResetState();
  };

  this.terminate = () => {
    if (!this.textAreaEl) return;

    try {
      emiter.removeAllListeners();
      this.finished = true;
    } catch (e) {
      console.warn(e);
    }
  };

  this.setCurStory = ({
    messages,
    choices,
    tags,
    paragraphEl
  }) => {
    this.curStory = {
      messages,
      choices,
      tags,
      paragraphEl
    };
  };

  const getMessage = _story => {
    let message = [];

    while (_story.canContinue) {
      message.push(_story.Continue().replace(/\n/g, ''));
    }

    return message;
  };

  const continueStory = (choiceLabel = '', choicePath = '') => {
    const paragraph = getMessage(this.story);
    const gotoFindQuery = choiceLabel.includes('"') ? choiceLabel : `[${choiceLabel}]`;
    const paragraphEl = document.createElement('p');

    if (choiceLabel) {
      const paragraphElementTitle = document.createElement('p');
      paragraphElementTitle.innerHTML = `<p style="text-align: right;" id="${choicePath}" class="playtestLink" title="Click to open [${choicePath}] Node">${choiceLabel} ( ${choicePath} )</p>`;

      paragraphElementTitle.onclick = () => app.navigateToNodeDuringPlayTest(choicePath, gotoFindQuery);

      paragraphEl.appendChild(paragraphElementTitle);
      paragraph.forEach(p => {
        const message = document.createElement('p');
        message.innerHTML = `${p}<br/>`;
        paragraphEl.appendChild(message);
      });
    } else {
      paragraphEl.innerHTML = paragraph.join('<br/>');
    }

    this.setCurStory({ ...this.curStory,
      messages: this.log ? [...this.curStory.messages, choiceLabel ? `--${choiceLabel}--` : '', paragraph].filter(Boolean) : [paragraph],
      tags: this.story.currentTags,
      choices: this.story.currentChoices,
      paragraphEl
    });
    updateText();
  };

  this.prevSavePoints = [];

  const getChoice = (index, label) => {
    this.prevSavePoints.push(this.story.state.toJson());
    const choicePath = this.story.state.currentChoices[index].sourcePath.split('.')[0];
    this.story.ChooseChoiceIndex(index);
    continueStory(label, choicePath);
  };

  this.rewindStory = () => {
    document.getElementById('choiceButtons').remove();
    this.textAreaEl.removeChild(this.textAreaEl.lastElementChild);
    this.story.state.LoadJson(this.prevSavePoints.pop());
    continueStory();
  };

  this.createAndAddParagraph = child => {
    console.log('made', child);

    if (child.innerHTML) {
      const paragraph = document.createElement('p');
      paragraph.appendChild(child);
      paragraph.className = 'story-playtest-bubble story-playtest-answer answer-post fade-in is-paused';
      this.textAreaEl.appendChild(paragraph);
      $(paragraph).removeClass('is-paused');
    }
  }; // html update stuff


  const updateText = () => {
    this.createAndAddParagraph(this.curStory.paragraphEl);
    this.textAreaEl.querySelectorAll('div').forEach(n => n.remove());
    const btnWrapper = document.createElement('div');
    btnWrapper.id = 'choiceButtons';
    btnWrapper.className = 'flex-wrap'; // Debug tools

    const reloadBtn = document.createElement('button');
    reloadBtn.innerText = '🔄';
    reloadBtn.title = 'Recompile story';
    reloadBtn.onclick = this.onRecompile;
    reloadBtn.className = 'storyPreviewChoiceButton';
    btnWrapper.appendChild(reloadBtn);
    const restartBtn = document.createElement('button');
    restartBtn.innerText = '🎬'; //'🔄';

    restartBtn.title = 'Restart story';

    restartBtn.onclick = () => {
      this.resetStory();
      continueStory();
    };

    restartBtn.className = 'storyPreviewChoiceButton';
    btnWrapper.appendChild(restartBtn);
    const rewindBtn = document.createElement('button');
    rewindBtn.innerText = '⏪';
    rewindBtn.title = 'Go to previous';
    rewindBtn.disabled = this.prevSavePoints.length === 0;

    rewindBtn.onclick = () => {
      this.rewindStory();
      continueStory();
    };

    btnWrapper.appendChild(rewindBtn);
    rewindBtn.className = 'storyPreviewChoiceButton'; // choices

    this.curStory.choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.innerText = choice.text;

      btn.onclick = e => {
        e.stopPropagation();
        getChoice(index, choice.text);
      };

      btn.className = 'storyPreviewChoiceButton';
      btnWrapper.appendChild(btn);
    });
    this.textAreaEl.appendChild(btnWrapper);
    this.textAreaEl.scrollTo({
      top: this.textAreaEl.scrollHeight + 100,
      left: 0,
      behavior: 'smooth'
    });
  };

  this.initInk = (compiler, onRecompile, prevSession, inkTextData, startChapter, htmlIdToAttachTo, resourcesPath, debugLabelId, playtestStyle, playtestVariables //TODO
  ) => {
    this.onRecompile = onRecompile;
    console.log('INIT INK');
    this.finished = false;
    document.getElementById(htmlIdToAttachTo).style.visibility = 'hidden';
    this.textAreaEl = document.getElementById(debugLabelId);
    this.textAreaEl.innerHTML = '<div class="opacity-pulse centered"><h2>Parsing ink</h2> <h2 class="story-animated-dots"><p>.</p><p>.</p><p>.</p></h2></div>';
    this.inkTextData = inkTextData;
    this.compiler = compiler;
    this.compiler.init(response => {
      this.textAreaEl.innerHTML = '';

      if (response.errors.length > 0) {
        this.textAreaEl.innerHTML = `<div class="title-error"><p>Parsing failed:</p>><br/><p>${response.errors.join('</p><p>')}</p><br/><p>${response.warnings.join('</p><p>')}</p></div>`;

        this.textAreaEl.onclick = () => {
          console.log('====>', response);
          app.data.goToErrorInkNode(this.inkTextData, response.errors[0]);
          this.textAreaEl.onclick = null;
        };

        return;
      }

      if (response.warnings.length > 0) {
        const warningsEl = document.createElement('p');
        warningsEl.className = 'title-warning';
        response.warnings.forEach(warning => {
          const warningEl = document.createElement('p');
          warningEl.innerText = warning;

          warningEl.onclick = () => {
            app.data.goToErrorInkNode(this.inkTextData, warning);
          };

          warningsEl.appendChild(warningEl);
        });
        this.createAndAddParagraph(warningsEl);
      }

      this.story = new Story(response.story);
      console.log('STORY', this.story);
      console.warn('Warnings', response.warnings);
      continueStory(); //Try to restart story from specific chapter when there is no start chapter specified in the global scope

      if (this.story.currentText === '' && this.story.currentChoices.length === 0) {
        if (startChapter !== app.data.InkGlobalScopeNodeName) {
          this.compiler.submit(`-> ${startChapter}\n` + inkTextData);
        } else {
          const firstFoundNode = inkTextData.split('\n').find(line => line.includes('==='));
          this.compiler.submit(`-> ${firstFoundNode.split('===')[1]}\n` + inkTextData);
        }
      }
    }).then(() => {
      if (!prevSession.recompile && prevSession.story && prevSession.prevSavePoints.length !== 0) {
        this.story = prevSession.story;
        prevSession.childNodes.forEach(child => this.textAreaEl.appendChild(child));
        this.prevSavePoints = prevSession.prevSavePoints;
        continueStory();
        return;
      }

      if (inkTextData) this.compiler.submit(inkTextData);
    });
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("EVdn")))

/***/ }),

/***/ "tUqF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return yarnRender; });
const bondage = __webpack_require__("Wd8k");

const bbcode = __webpack_require__("L8pc");

const yarnRunner = new bondage.Runner();

const EventEmitter = __webpack_require__("+qE3").EventEmitter;

var yarnRender = function () {
  let visitedNodes = [];
  this.visitedNodes = visitedNodes; // collects titles of ALL visited nodes

  let node = {
    title: ''
  };
  this.node = node; // gets raw data from yarn text nodes

  let emiter = new EventEmitter();
  this.emiter = emiter;
  let commandsPassedLog = [];
  this.commandsPassedLog = commandsPassedLog;
  let commandPassed = '';
  this.commandPassed = commandPassed;
  let finished = true;
  this.finished = finished;
  this.scrollTextStyle = false;
  this.visitedChapters = []; // to keep track of all visited start chapters

  this.self = this;
  this.vnChoiceSelectionCursor = '>';
  this.startTimeWait;
  this.vnSelectedChoice = -1;
  this.vnTextScrollInterval;
  this.storyChapter = ''; // current chapter choices

  this.choices = {}; // all choices from all start chapters

  let vnChoices,
      vnText,
      vnTextResult,
      vnResult,
      VNdata,
      vnTextScroll,
      htmIDtoAttachYarnTo,
      debugLabelIdToAttachTo,
      vnTextScrollIdx = null;

  this.vnSelectChoice = () => {
    let endTimeWait = new Date().getTime();

    if (endTimeWait - this.startTimeWait < 1000) {
      return;
    } // we need to wait for user to see the questions


    this.choices[this.storyChapter].push(vnResult.options[this.vnSelectedChoice]);
    vnResult.select(this.vnSelectedChoice);
    this.emiter.emit('choiceMade', vnResult.options[this.vnSelectedChoice]);
    vnText = '';
    vnChoices = undefined;
    vnResult = self.goToNext();
    this.vnSelectedChoice = -1;
    this.changeTextScrollSpeed(111);
  };

  this.vnUpdateChoice = (direction = 0) => {
    // direction: -1 or 1
    if (this.vnSelectedChoice < 0) {
      return;
    }

    let attemptChoice = this.vnSelectedChoice + direction;

    if (attemptChoice > vnResult.options.length - 1) {
      attemptChoice = 0;
    } else if (attemptChoice < 0) {
      attemptChoice = vnResult.options.length - 1;
    }

    this.vnSelectedChoice = attemptChoice;
    vnChoices = document.createElement('DIV');
    vnResult.options.forEach((choice, i) => {
      const btn = document.createElement('DIV');

      if (i == this.vnSelectedChoice) {
        btn.innerHTML = `${this.vnChoiceSelectionCursor} [${choice}]`;
      } else {
        btn.innerHTML = `${this.vnChoiceSelectionCursor.replace(/.*/gm, '&nbsp;')} [${choice}]`;
      }

      btn.onclick = e => {
        e.stopPropagation();
        this.vnSelectedChoice = i;
        this.vnUpdateChoice();
      };

      btn.ondblclick = e => {
        e.stopPropagation();
        this.vnSelectedChoice = i;
        this.vnSelectChoice();
      };

      btn.className = 'storyPreviewChoiceButton';
      vnChoices.appendChild(btn);
    });
    emiter.emit('choiceUpdated', this.vnSelectedChoice);
    self.updateVNHud();
  }; // this function is triggered on key press/release


  this.changeTextScrollSpeed = (interval = 0) => {
    if (interval === this.vnTextScrollInterval) {
      return;
    } // use this to stop it from triggering on every frame


    this.vnTextScrollInterval = interval;
    clearInterval(vnTextScroll); // this resets the scroll time

    if (vnTextScrollIdx < 0) {
      // when below 0, its on standby for input to continue
      if (this.isFinishedParsing(vnResult)) {
        emiter.emit('finished');
        return;
      }

      if (vnResult.constructor.name === 'TextResult') {
        vnText = vnResult.text;
        vnTextScrollIdx = 0;
        emiter.emit('textResult', vnText);
        this.changeTextScrollSpeed(220);
        return;
      }

      if (vnResult.constructor.name === 'OptionsResult') {
        // Add choices to text
        if (this.vnSelectedChoice === -1) {
          this.vnSelectedChoice = 0;
          this.vnUpdateChoice();
          this.startTimeWait = new Date().getTime();
        }
      }
    }

    if (interval === 0) {
      return;
    }

    vnTextScroll = setInterval(this.scrollUpdateText, interval);
  };

  self.goToNext = () => {
    const nextNode = VNdata.next().value;

    if (!this.isFinishedParsing(nextNode)) {
      if (nextNode.constructor.name === 'TextResult') {
        /// bbcode local images with path relative to the resourcesPath specified on init
        // if (this.resourcesPath.length) {
        // 	const resourcesPath = this.resourcesPath;
        // 	nextNode.text = nextNode.text.replace(/\[img\][^\[]+\[\/img\]/gi, function (imgTag) {
        // 		const extractedImgPath = imgTag.match(/\[img\](.*)\[\/img\]/i)
        // 		if (extractedImgPath.length > 1 )
        // 		{
        // 			fullPathToFile = path.join(resourcesPath, extractedImgPath[1])
        // 			if (fs.existsSync(fullPathToFile)){
        // 				return '[img]' + fullPathToFile + '[/img]'
        // 			} else { // if not a local file, try to load it as a link
        // 				return '[img]' + extractedImgPath[1] + '[/img]'
        // 			}
        // 		}
        // 	})
        // }
        /// emit debug signal
        if (nextNode.data && this.node.title !== nextNode.data.title) {
          vnText = '';
          vnTextScrollIdx = -1;
          this.node = self.jsonCopy(nextNode.data);
          this.visitedNodes.push(nextNode.data.title);
          this.emiter.emit('startedNode', this.node);
        }
      }

      return nextNode;
    }
  };

  this.isFinishedParsing = nextNode => {
    if (nextNode === undefined || vnResult === null) {
      if (!finished) {
        finished = true;
        vnTextScrollIdx = -1;
      }

      finished = true;
      return finished;
    } else {
      return false;
    }
  };

  this.runCommand = () => {
    emiter.emit('commandCall', vnResult.text);
    commandsPassedLog.push(vnResult.text);
    vnResult = self.goToNext();

    if (this.isFinishedParsing(vnResult)) {
      return;
    }

    if (vnResult.constructor.name === 'TextResult') {
      vnText += '\n' + vnResult.text;
      emiter.emit('textResult', vnResult.text); // this.changeTextScrollSpeed(111);
    }

    if (vnResult.constructor.name === 'OptionsResult') {
      vnTextScrollIdx = -1;
    }
  };

  this.scrollUpdateText = () => {
    if (this.isFinishedParsing(vnResult)) {
      return;
    }

    if (vnTextScrollIdx < 0) {
      if (vnResult.constructor.name === 'CommandResult') {
        this.runCommand();
      }
    } else if (vnTextScrollIdx > vnText.length) {
      if (vnResult.constructor.name === 'TextResult') {
        vnResult = self.goToNext();

        if (this.isFinishedParsing(vnResult)) {
          return;
        }

        if (vnResult.constructor.name === 'CommandResult') {
          this.runCommand();
        } else if (vnResult.constructor.name === 'TextResult') {
          vnTextScrollIdx = -1;
        } else if (vnResult.constructor.name === 'OptionsResult') {
          vnTextScrollIdx = -1;
        }
      }
    } else if (vnResult.constructor.name === 'TextResult') {
      // update text
      vnTextScrollIdx += 1;
      vnTextResult = vnText.substring(0, vnTextScrollIdx);
      self.updateVNHud();
    }
  }; // trigger this only on text update


  self.updateVNHud = () => {
    if (vnResult.constructor.name === 'TextResult') {
      while (vnTextResult.lastIndexOf('[img]') > vnTextResult.lastIndexOf('[/img]')) {
        vnTextScrollIdx += 1;
        vnTextResult = vnText.substring(0, vnTextScrollIdx);
      }

      while (vnTextResult.lastIndexOf('[') > vnTextResult.lastIndexOf(']')) {
        vnTextScrollIdx += 1;
        vnTextResult = vnText.substring(0, vnTextScrollIdx);
      }
    }

    if (this.scrollTextStyle) {
      document.getElementById(htmIDtoAttachYarnTo).innerHTML = bbcode.parse(vnTextResult) + '<br>';
    }

    if (vnChoices !== undefined) {
      if (!this.scrollTextStyle) {
        document.getElementById(htmIDtoAttachYarnTo).innerHTML = '';
      }

      document.getElementById(htmIDtoAttachYarnTo).appendChild(vnChoices);
    }
  };

  this.terminate = () => {
    try {
      let element = document.getElementById(htmIDtoAttachYarnTo);
      element && (element.innerHTML = '');
      element = document.getElementById(debugLabelIdToAttachTo);
      element && (element.innerHTML = '');
      vnChoices = undefined;
      emiter.removeAllListeners();
      this.finished = true;
    } catch (e) {
      console.warn(e);
    }
  };

  this.initYarn = (yarnDataObject, startChapter, htmlIdToAttachTo, resourcesPath, debugLabelId, playtestStyle, playtestVariables) => {
    const randomColour = ['#f5ff6f', '#44fe66', '#e00ec0', '#e93ecf', '#0ec0e0', '#3ecfe9', '#e4dbcb', '#978e7e', '#666', '#2f919a', 'deeppink', 'black', '#97E1E9', '#576574', '#6EA5E0', '#9EDE74', '#FFE374', '#F7A666', '#C47862'];
    const randomAscii = ['__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡| ̲▫̲͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡, ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___', '°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸', '(===||:::::::::::::::>', '¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸><(((º>', '=^..^=', '|==|iiii|>-----', ' ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦', '(♥_♥)', '龴ↀ◡ↀ龴', '☁ ▅▒░☼‿☼░▒▅ ☁,', '▓⚗_⚗▓', '<:3 )~~~', '(╯°□°）╯︵ ┻━┻', '●▬▬▬▬๑۩۩๑▬▬▬▬▬●', '(/)(Ö,,,,Ö)(/)', '/)^3^(\\', '( . Y . )', '< )))) ><', '(ノಠ益ಠ)ノ彡', 'd(^o^)b¸¸♬·¯·♩¸¸♪·¯·♫¸¸', "O=('-'Q)", '-`ღ´-', 'ˁ(⦿ᴥ⦿)ˀ', '(╥﹏╥)', '✲´*。.❄¨¯`*✲。❄。*。¨¯`*✲', '▂▃▅▇█▓▒░۩۞۩        ۩۞۩░▒▓█▇▅▃▂', '( •_•)O*¯`·.¸.·´¯`°Q(•_• )', '┻━┻︵  (°□°)/ ︵ ┻━┻', '|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡ ̴̡ı̴̴̡ ̡l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ |', '❤◦.¸¸.  ◦✿', 'ʕʘ̅͜ʘ̅ʔ', '( ๏ Y ๏ )', 'ʕ•̫͡•ʕ*̫͡*ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ*̫͡*ʔ-̫͡-ʔ', '(っ◕‿◕)っ', '❚█══█❚', '─=≡Σ((( つ◕ل͜◕)つ', '^ↀᴥↀ^', '༼ つ ͡◕ Ѿ ͡◕ ༽つ', 'ᕦ(ò_óˇ)ᕤ', '┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴', '[̲̅$̲̅(̲̅5)̲̅$̲̅]', '(ꈍ⌓ꈍ✿)', '(๑•́ ₃ •̀๑) ♡', '( • )( • )ԅ(≖⌣≖ԅ)', '（。々°）', '⊂(´･◡･⊂ )∘˚˳°', '( ㅅ )', '(ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧', '(－‸ლ)', '(‿|‿)', '(㇏(•̀ᵥᵥ•́)ノ)', 'ʚ✟⃛ɞ', '(′ꈍωꈍ‵)', '♚ ♛ ♜ ♝ ♞ ♟ ♔ ♕ ♖ ♗ ♘ ♙', '(´ᴗ`)(´ᴗ`)', '♥(´∀｀)', 'ฅ(˵●ﻌ●˵)ฅ'];
    debugLabelIdToAttachTo = debugLabelId;
    htmIDtoAttachYarnTo = htmlIdToAttachTo;
    this.yarnDataObject = yarnDataObject;
    this.startChapter = startChapter;
    this.resourcesPath = resourcesPath;
    this.finished = false;
    this.scrollTextStyle = playtestStyle === 'npc';
    document.getElementById(debugLabelIdToAttachTo).innerHTML = "<br/><font color='red'>🚥Press/Hold Z or 📱Double-click/Tap to advance</font><br/>";
    emiter.on('startedNode', function (nodeData) {
      document.getElementById(debugLabelIdToAttachTo).innerHTML += "<br/><br/><font color='#581845'>📜 --- Loaded next node ---</font>";
      document.getElementById(debugLabelIdToAttachTo).innerHTML += `<font color='${randomColour[Math.floor(Math.random() * randomColour.length)]}'>  ${randomAscii[Math.floor(Math.random() * randomAscii.length)]}</font>`;
      document.getElementById(debugLabelIdToAttachTo).innerHTML += "<br/><font color='CADETBLUE'>&ensp;&ensp;&ensp;Title: " + nodeData.title + '</font>';
      if (nodeData.tags.length > 0 && nodeData.tags[0].length > 0) document.getElementById(debugLabelIdToAttachTo).innerHTML += "<br/><font color='deeppink'>&ensp;&ensp;&ensp;Tags: " + nodeData.tags + '</font>';
    });
    emiter.on('choiceMade', function (choice) {
      if (this.scrollTextStyle) {
        document.getElementById(debugLabelIdToAttachTo).innerHTML += "<br/><font color='fuchsia'>🐙Player chose: >" + choice + '</font>';
      } else {
        document.getElementById(debugLabelIdToAttachTo).innerHTML += `<p class="story-playtest-bubble story-playtest-answer answer-post">${bbcode.parse(choice)}</p>`;
      }
    });
    emiter.on('commandCall', function (call) {
      document.getElementById(debugLabelIdToAttachTo).innerHTML += `<br/><font color='green'>🐣Command call:</font> <font color='red'>&lt;&lt;${call}&gt;&gt;</font>`;
    });

    if (!this.scrollTextStyle) {
      emiter.on('textResult', function (text) {
        document.getElementById(debugLabelIdToAttachTo).innerHTML += `<p class="story-playtest-bubble">${bbcode.parse(text)}</p>`;
        document.getElementById(htmIDtoAttachYarnTo).innerHTML = '<span class="story-animated-dots"><p>.</p><p>.</p><p>.</p></span>'; //story-playtest-bubble

        document.getElementById(htmIDtoAttachYarnTo).className = 'story-playtest-bubble';
        document.getElementById(debugLabelIdToAttachTo).scrollTo({
          top: document.getElementById(debugLabelIdToAttachTo).scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      });
      emiter.on('choiceUpdated', function (choiceIndex) {
        document.getElementById(htmIDtoAttachYarnTo).className = 'story-playtest-answer';
      });
    }

    emiter.on('finished', function () {
      finished = true;
      emiter.removeAllListeners();
    });

    if (Array.isArray(yarnDataObject)) {
      yarnRunner.load(yarnDataObject);
    } else if ('nodes' in yarnDataObject) {
      yarnRunner.load(yarnDataObject.nodes);
    } else return; // yarnRunner.setVariableStorage(platestVariables);


    this.loadYarnChapter(startChapter);
    yarnRunner.variables.data = {};
    playtestVariables.forEach(function (variable) {
      console.log(variable);
      yarnRunner.variables.set(variable.key, variable.value);
    });
  };

  this.loadYarnChapter = storyChapter => {
    finished = false;
    this.storyChapter = storyChapter;
    this.choices[this.storyChapter] = [];
    this.visitedChapters.push(storyChapter);
    VNdata = yarnRunner.run(storyChapter);
    vnResult = self.goToNext();
    vnText = vnResult.text;
    this.changeTextScrollSpeed(100);
  }; // external function to check if a choice was made


  this.wasChoiceMade = (choiceName, chapterInWhichItWasMade = this.storyChapter) => {
    if (this.choices[chapterInWhichItWasMade].includes(choiceName)) {
      return true;
    } else {
      return false;
    }
  }; // external function to check how many times a node has been visited


  this.timesNodeWasVisited = nodeName => {
    let counted = 0;
    this.visitedNodes.forEach((visitedNode, i) => {
      if (visitedNode === nodeName) {
        counted += 1;
      }
    });
    return counted;
  }; // we need this to make copies instead of references


  self.jsonCopy = src => {
    return JSON.parse(JSON.stringify(src));
  };
};

/***/ }),

/***/ "uMdg":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "wt9v":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "wt9v";

/***/ }),

/***/ "zn8O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transcribe; });
var Transcribe = function ({
  app,
  createButton,
  createToggle,
  onYarnEditorOpen,
  onYarnSetLanguage
}) {
  const self = this;
  this.name = 'Transcribe';
  this.transcribeEnabled = ko.observable(false);
  onYarnSetLanguage(e => {
    console.log(e);
    spoken.recognition.lang = e.language;
  });

  this.speakText = function () {
    const selectedText = app.editor.getSelectedText();
    const say = selectedText ? selectedText : app.editor.getSession().getValue();
    spoken.voices().then(countries => {
      const lookUp = app.settings.language().split('-')[0];
      const voices = countries.filter(v => !v.lang.indexOf(lookUp));
      console.log(lookUp, voices);

      if (voices.length) {
        console.log('Loaded voice', voices[0]);
        spoken.say(say, voices[0]);
      } else {
        spoken.say(say);
      }
    });
  };

  this.startCapture = function () {
    spoken.listen({
      continuous: true
    }).then(transcript => {
      console.log(transcript);

      if (app.editing()) {
        app.insertTextAtCursor(transcript + '. ');
        document.getElementById('speakTextBtnBubble').title = 'Transcribe';
      } else {
        if (transcript === 'open') {
          console.log('try open...');
          var firstFoundTitle = app.getFirstFoundNode(app.$searchField.val().toLowerCase()).title();
          console.log('try open:', firstFoundTitle);
          app.openNodeByTitle(firstFoundTitle);
        } else if (transcript === 'clear') {
          app.$searchField.val('');
          app.updateSearch();
        } else {
          app.$searchField.val(transcript);
          app.updateSearch();
        }
      }

      spoken.listen.stop().then(() => {
        if (app.editing()) {
          document.getElementById('speakTextBtnBubble').style.visibility = 'hidden';
        }

        this.continueCapture();
      });
    }).catch(e => spoken.listen.stop().then(() => this.continueCapture()));
  };

  this.continueCapture = function () {
    spoken.delay(500).then(() => {
      if (spoken.recognition.continuous) app.startCapture();
    });
  };

  this.toggleTranscribing = function () {
    const available = spoken.listen.available();
    const speakBubble = document.getElementById('speakTextBtnBubble');
    if (speakBubble === null) return;
    speakBubble.style.visibility = 'hidden';

    if (available && self.transcribeEnabled()) {
      spoken.listen.on.partial(ts => {
        if (app.editing()) {
          speakBubble.style.visibility = 'visible';
          speakBubble.title = `🗣️ ${ts} 🦜`;
        } else {
          app.$searchField.val(`🗣️ ${ts} 🦜`);
        }
      });
      app.startCapture();
    } else {
      speakBubble.style.visibility = 'hidden';
      spoken.recognition.continuous = false;
      spoken.listen.stop();
    }
  }; // TODO move to transcribe plugin


  this.hearText = function () {
    const available = spoken.listen.available();

    if (!available) {
      Swal.fire({
        title: 'Speech recognition not available!',
        icon: 'error'
      });
      return;
    } // spoken.listen.on.partial(ts => ($("#speakTextBtn").title = ts));


    spoken.listen.on.partial(ts => {
      console.log(ts);
      document.getElementById('speakTextBtnBubble').title = `🗣️ ${ts} 🦜`;
    });
    spoken.listen().then(transcript => {
      app.insertTextAtCursor(transcript + ' ');
      document.getElementById('speakTextBtnBubble').title = 'Transcribe';
    }).catch(error => console.warn(error.message));
  }; // Add editor buttons


  onYarnEditorOpen(() => {
    createButton(self.name, {
      id: 'hearTextBtnId',
      title: 'Hear text',
      attachTo: 'bbcodeToolbar',
      onClick: 'hearText()',
      iconName: 'voice',
      className: 'bbcode-button bbcode-button-right hide-when-narrow'
    });
    createToggle(self.name, {
      id: 'transcribeToggleBtnId',
      iconName: 'microphone',
      attachTo: 'editorFooter',
      className: 'transcribe-button',
      title: 'Transcribe',
      tooltipId: 'speakTextBtnBubble',
      toggleValueKey: 'toggleTranscribing',
      onToggle: 'toggleTranscribing',
      enableKey: 'transcribeEnabled'
    });
    self.toggleTranscribing();
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Z1dp")))

/***/ })

},[["e6Wu",1,2]]]);
//# sourceMappingURL=main.88b023c4738ab9796051.js.map