/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _game = __webpack_require__(4);

var _store = __webpack_require__(5);

var _store2 = _interopRequireDefault(_store);

var _reducer = __webpack_require__(6);

var _reducer2 = _interopRequireDefault(_reducer);

var _button = __webpack_require__(7);

var _button2 = _interopRequireDefault(_button);

var _counter = __webpack_require__(8);

var _counter2 = _interopRequireDefault(_counter);

var _example = __webpack_require__(9);

var _example2 = _interopRequireDefault(_example);

var _generator = __webpack_require__(10);

var _generator2 = _interopRequireDefault(_generator);

var _storyBook = __webpack_require__(11);

var _storyBook2 = _interopRequireDefault(_storyBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Data flow diagram
 +----------------------------------------------------+
 | +------------------+          +------------------+ |
 | |                  |          |                  | |
++-|       Loop       |<---------|    Generator     | |
|| |                  |          |                  | |
|| +------------------+          +------------------+ |
||G          ^                                        |
||a          +-----------------------------+          |
||m                                        |          |
||e                                        |          |
||                               +------------------+ |
||                               |                  | |
||                               |     Stories      | |
||                               |                  | |
||                               +------------------+ |
|+----------------------------------------------------+
+------------------------------------------------------------+
|                                                            |
|                                                            |
|                                                            |
|                                                            |
|                                                            |
|                                                            |
|                                                            |
|                                                            |
|       +----------------------------------------------------+----------+
|       | +------------------+                     +------------------+ |
|       | |                  |        Mutates      |                  | |
|       | |     Reducer      |-------------------->|      State       | |
|       | |                  |                     |                  | |
|       | +------------------+                     +------------------+ |
|       |S          ^                                        |          |
|       |t          |                                        |          |
|       |o          |                                        |          |
|       |r          | Triggers                     Notifies  |          |
|       |e          |                                        |          |
|       |           |                                        v          |
|       | +------------------+                     +------------------+ |
|       | |                  |                     |                  | |
+-------+>|      Action      |                     |    Listeners     | |
        | |                  |                     |                  | |
        | +------------------+                     +------------------+ |
        +-----------^----------------------------------------+----------+
                    |                                        |
                    |                                        |
                    |                                        |
                    |                                        |
                    | Dispatches                             |
                    |                                        |
                    |                                        |
          +------------------+                               |
          |                  |                               |
          |      Views       |              Notifies changes |
          |    Components    |<------------------------------+
          |                  |
          +------------------+
 */
main();

// main function wraps everything at top level
function main() {
	// TODO: fill the blank based on the theme you have choosen
	const initialState = {
		example: 'Hello custom element',
		counter: 0,
		generators: [],
		story: []
	};

	// initialize store
	const store = new _store2.default(_reducer2.default, initialState);
	console.log((0, _example2.default)(store));

	// define web components
	window.customElements.define('component-example', (0, _example2.default)(store));
	// no longer used
	window.customElements.define('game-button', (0, _button2.default)(store));
	window.customElements.define('game-counter', (0, _counter2.default)(store));
	// lab 3
	window.customElements.define('game-generator', (0, _generator2.default)(store));
	// homework 1
	window.customElements.define('game-story-book', (0, _storyBook2.default)(store));

	// For ease of debugging purpose, we will expose the critical store under window
	// ps: window is global
	window.store = store;

	// start game loop
	(0, _game.loop)(store);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var p,q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ea(){ea=function(){};q.Symbol||(q.Symbol=fa)}var fa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ha(){ea();var a=q.Symbol.iterator;a||(a=q.Symbol.iterator=q.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&da(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(this)}});ha=function(){}}function ia(a){var b=0;return ja(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ja(a){ha();a={next:a};a[q.Symbol.iterator]=function(){return this};return a}function ka(a){ha();var b=a[Symbol.iterator];return b?b.call(a):ia(a)}
function la(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");
c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c)for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=function(a,
b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype}Array.from||(Array.from=function(a){return[].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
a,m=e,n=Object.getOwnPropertyNames(m),w=0;w<n.length;w++)e=n[w],f[e]=m[e];return a})})(window.WebComponents);(function(){function a(){}function b(a,b){if(!a.childNodes.length)return[];switch(a.nodeType){case Node.DOCUMENT_NODE:return w.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return I.call(a,b);default:return n.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,h=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):h.call(this,b,c);return c};Document.prototype.createDocumentFragment=
function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var g=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=g.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b}}();var f=Node.prototype.cloneNode,h=Document.prototype.createElement,g=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,m=Node.prototype.replaceChild,n=Element.prototype.querySelectorAll,
w=Document.prototype.querySelectorAll,I=DocumentFragment.prototype.querySelectorAll,cb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var t=document.implementation.createHTMLDocument("template"),pa=!0,Z=document.createElement("style");Z.textContent="template{display:none;}";
var aa=document.head;aa.insertBefore(Z,aa.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var ba=!document.createElement("div").hasOwnProperty("innerHTML");a.D=function(b){if(!b.content){b.content=t.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(ba)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.ca(this,b)},pa)try{R(b),ca(b)}catch(Lg){pa=!1}a.J(b.content)}};var R=function(b){Object.defineProperty(b,"innerHTML",{get:function(){for(var a=
"",b=this.content.firstChild;b;b=b.nextSibling)a+=b.outerHTML||b.data.replace(Ee,qa);return a},set:function(b){t.body.innerHTML=b;for(a.J(t);this.content.firstChild;)k.call(this.content,this.content.firstChild);for(;t.body.firstChild;)l.call(this.content,t.body.firstChild)},configurable:!0})},ca=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){t.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();t.body.firstChild;)l.call(a,
t.body.firstChild);m.call(this.parentNode,a,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};R(a.prototype);ca(a.prototype);a.J=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.D(f)};document.addEventListener("DOMContentLoaded",function(){a.J(document)});Document.prototype.createElement=function(){var b=h.apply(this,arguments);"template"===b.localName&&a.D(b);return b};var Ee=/[&\u00A0<>]/g,
qa=function(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case "\u00a0":return"&nbsp;"}}}if(c||cb){a.ca=function(a,b){var c=f.call(a,!1);this.D&&this.D(c);b&&(l.call(c.content,f.call(a.content,!0)),Ca(c.content,a.content));return c};var Ca=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,h,g;e<f;e++)g=d[e],h=c[e],a&&a.D&&a.D(g),m.call(h.parentNode,Fe.call(g,!0),h)}},Fe=Node.prototype.cloneNode=function(b){if(!e&&
d&&this instanceof DocumentFragment)if(b)var c=Ge.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else c=this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName?a.ca(this,b):f.call(this,b);b&&Ca(c,this);return c},Ge=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.ca(c,d);var e=g.call(this,c,d);if(d){Ca(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var f,
k=0;k<c.length;k++){f=c[k];d=h.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,ca=0,qa;ca<l.length;ca++)qa=l[ca],d.setAttribute(qa.name,qa.value);m.call(f.parentNode,d,f)}}return e}}c&&(window.HTMLTemplateElement=a)})();var ma=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var na=0,oa,ra="undefined"!==typeof window?window:void 0,sa=ra||{},ta=sa.MutationObserver||sa.WebKitMutationObserver,ua="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel;function va(){return"undefined"!==typeof oa?function(){oa(wa)}:xa()}function ya(){var a=0,b=new ta(wa),c=document.createTextNode("");b.observe(c,{characterData:!0});return function(){c.data=a=++a%2}}
function za(){var a=new MessageChannel;a.port1.onmessage=wa;return function(){return a.port2.postMessage(0)}}function xa(){var a=setTimeout;return function(){return a(wa,1)}}var Aa=Array(1E3);function wa(){for(var a=0;a<na;a+=2)(0,Aa[a])(Aa[a+1]),Aa[a]=void 0,Aa[a+1]=void 0;na=0}var Ba,Da;
if("undefined"===typeof self&&"undefined"!==typeof process&&"[object process]"==={}.toString.call(process))Da=function(){return process.ib(wa)};else{var Ea;if(ta)Ea=ya();else{var Fa;if(ua)Fa=za();else{var Ga;if(void 0===ra&&"function"==="function")try{var Ha=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vertx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));oa=Ha.kb||Ha.jb;Ga=va()}catch(a){Ga=xa()}else Ga=xa();Fa=Ga}Ea=Fa}Da=Ea}Ba=Da;function Ia(a,b){Aa[na]=a;Aa[na+1]=b;na+=2;2===na&&Ba()};function Ja(a,b){var c=this,d=new this.constructor(Ka);void 0===d[La]&&Ma(d);var e=c.g;if(e){var f=arguments[e-1];Ia(function(){return Na(e,d,f,c.f)})}else Oa(c,d,a,b);return d};function Pa(a){if(a&&"object"===typeof a&&a.constructor===this)return a;var b=new this(Ka);Qa(b,a);return b};var La=Math.random().toString(36).substring(16);function Ka(){}var Sa=new Ra;function Ta(a){try{return a.then}catch(b){return Sa.error=b,Sa}}function Ua(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function Va(a,b,c){Ia(function(a){var d=!1,f=Ua(c,b,function(c){d||(d=!0,b!==c?Qa(a,c):r(a,c))},function(b){d||(d=!0,u(a,b))});!d&&f&&(d=!0,u(a,f))},a)}function Wa(a,b){1===b.g?r(a,b.f):2===b.g?u(a,b.f):Oa(b,void 0,function(b){return Qa(a,b)},function(b){return u(a,b)})}
function Xa(a,b,c){b.constructor===a.constructor&&c===Ja&&b.constructor.resolve===Pa?Wa(a,b):c===Sa?(u(a,Sa.error),Sa.error=null):void 0===c?r(a,b):"function"===typeof c?Va(a,b,c):r(a,b)}function Qa(a,b){if(a===b)u(a,new TypeError("You cannot resolve a promise with itself"));else{var c=typeof b;null===b||"object"!==c&&"function"!==c?r(a,b):Xa(a,b,Ta(b))}}function Ya(a){a.na&&a.na(a.f);Za(a)}function r(a,b){void 0===a.g&&(a.f=b,a.g=1,0!==a.I.length&&Ia(Za,a))}
function u(a,b){void 0===a.g&&(a.g=2,a.f=b,Ia(Ya,a))}function Oa(a,b,c,d){var e=a.I,f=e.length;a.na=null;e[f]=b;e[f+1]=c;e[f+2]=d;0===f&&a.g&&Ia(Za,a)}function Za(a){var b=a.I,c=a.g;if(0!==b.length){for(var d,e,f=a.f,h=0;h<b.length;h+=3)d=b[h],e=b[h+c],d?Na(c,d,e,f):e(f);a.I.length=0}}function Ra(){this.error=null}var $a=new Ra;
function Na(a,b,c,d){var e="function"===typeof c;if(e){try{var f=c(d)}catch(l){$a.error=l,f=$a}if(f===$a){var h=!0;var g=f.error;f.error=null}else var k=!0;if(b===f){u(b,new TypeError("A promises callback cannot return that same promise."));return}}else f=d,k=!0;void 0===b.g&&(e&&k?Qa(b,f):h?u(b,g):1===a?r(b,f):2===a&&u(b,f))}function ab(a,b){try{b(function(b){Qa(a,b)},function(b){u(a,b)})}catch(c){u(a,c)}}var bb=0;function Ma(a){a[La]=bb++;a.g=void 0;a.f=void 0;a.I=[]};function db(a,b){this.Ea=a;this.A=new a(Ka);this.A[La]||Ma(this.A);if(ma(b))if(this.S=this.length=b.length,this.f=Array(this.length),0===this.length)r(this.A,this.f);else{this.length=this.length||0;for(a=0;void 0===this.g&&a<b.length;a++)eb(this,b[a],a);0===this.S&&r(this.A,this.f)}else u(this.A,Error("Array Methods must be provided an Array"))}
function eb(a,b,c){var d=a.Ea,e=d.resolve;e===Pa?(e=Ta(b),e===Ja&&void 0!==b.g?fb(a,b.g,c,b.f):"function"!==typeof e?(a.S--,a.f[c]=b):d===v?(d=new d(Ka),Xa(d,b,e),gb(a,d,c)):gb(a,new d(function(a){return a(b)}),c)):gb(a,e(b),c)}function fb(a,b,c,d){var e=a.A;void 0===e.g&&(a.S--,2===b?u(e,d):a.f[c]=d);0===a.S&&r(e,a.f)}function gb(a,b,c){Oa(b,void 0,function(b){return fb(a,1,c,b)},function(b){return fb(a,2,c,b)})};function hb(a){return(new db(this,a)).A};function ib(a){var b=this;return ma(a)?new b(function(c,d){for(var e=a.length,f=0;f<e;f++)b.resolve(a[f]).then(c,d)}):new b(function(a,b){return b(new TypeError("You must pass an array to race."))})};function jb(a){var b=new this(Ka);u(b,a);return b};function v(a){this[La]=bb++;this.f=this.g=void 0;this.I=[];if(Ka!==a){if("function"!==typeof a)throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(this instanceof v)ab(this,a);else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");}}v.prototype={constructor:v,then:Ja,a:function(a){return this.then(null,a)}};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.Promise||(window.Promise=v,v.prototype["catch"]=v.prototype.a,v.prototype.then=v.prototype.then,v.all=hb,v.race=ib,v.resolve=Pa,v.reject=jb);(function(a){function b(a,b){if("function"===typeof window.CustomEvent)return new CustomEvent(a,b);var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c}function c(a){if(m)return a.ownerDocument!==document?a.ownerDocument:null;var b=a.__importDoc;if(!b&&a.parentNode){b=a.parentNode;if("function"===typeof b.closest)b=b.closest("link[rel=import]");else for(;!g(b)&&(b=b.parentNode););a.__importDoc=b}return b}function d(a){var b=document.querySelectorAll("link[rel=import]:not([import-dependency])"),
c=b.length;c?l(b,function(b){return h(b,function(){0===--c&&a()})}):a()}function e(a){function b(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",b),a())}document.addEventListener("readystatechange",b);b()}function f(a){e(function(){return d(function(){return a&&a()})})}function h(a,b){if(a.__loaded)b&&b();else if("script"===a.localName&&!a.src||"style"===a.localName&&!a.firstChild)a.__loaded=!0,b&&b();else{var c=function(d){a.removeEventListener(d.type,
c);a.__loaded=!0;b&&b()};a.addEventListener("load",c);Z&&"style"===a.localName||a.addEventListener("error",c)}}function g(a){return a.nodeType===Node.ELEMENT_NODE&&"link"===a.localName&&"import"===a.rel}function k(){var a=this;this.a={};this.b=0;this.c=new MutationObserver(function(b){return a.Ra(b)});this.c.observe(document.head,{childList:!0,subtree:!0});this.loadImports(document)}function l(a,b,c){var d=a?a.length:0,e=c?-1:1;for(c=c?d-1:0;c<d&&0<=c;c+=e)b(a[c],c)}var m="import"in document.createElement("link"),
n=null;!1==="currentScript"in document&&Object.defineProperty(document,"currentScript",{get:function(){return n||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null)},configurable:!0});var w=/(url\()([^)]*)(\))/g,I=/(@import[\s]+(?!url\())([^;]*)(;)/g,cb=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,t={La:function(a,b){a.href&&a.setAttribute("href",t.Y(a.getAttribute("href"),b));a.src&&a.setAttribute("src",t.Y(a.getAttribute("src"),b));if("style"===a.localName){var c=
t.ta(a.textContent,b,w);a.textContent=t.ta(c,b,I)}},ta:function(a,b,c){return a.replace(c,function(a,c,d,e){a=d.replace(/["']/g,"");b&&(a=t.Y(a,b));return c+"'"+a+"'"+e})},Y:function(a,b){if(void 0===t.ba){t.ba=!1;try{var c=new URL("b","http://a");c.pathname="c%20d";t.ba="http://a/c%20d"===c.href}catch(Ca){}}if(t.ba)return(new URL(a,b)).href;c=t.Ba;c||(c=document.implementation.createHTMLDocument("temp"),t.Ba=c,c.ma=c.createElement("base"),c.head.appendChild(c.ma),c.la=c.createElement("a"));c.ma.href=
b;c.la.href=a;return c.la.href||a}},pa={async:!0,load:function(a,b,c){if(a)if(a.match(/^data:/)){a=a.split(",");var d=a[1];d=-1<a[0].indexOf(";base64")?atob(d):decodeURIComponent(d);b(d)}else{var e=new XMLHttpRequest;e.open("GET",a,pa.async);e.onload=function(){var a=e.responseURL||e.getResponseHeader("Location");a&&0===a.indexOf("/")&&(a=(location.origin||location.protocol+"//"+location.host)+a);var d=e.response||e.responseText;304===e.status||0===e.status||200<=e.status&&300>e.status?b(d,a):c(d)};
e.send()}else c("error: href must be specified")}},Z=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent);k.prototype.loadImports=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){return b.s(a)})};k.prototype.s=function(a){var b=this,c=a.href;if(void 0!==this.a[c]){var d=this.a[c];d&&d.__loaded&&(a.__import=d,this.h(a))}else this.b++,this.a[c]="pending",pa.load(c,function(a,d){a=b.Sa(a,d||c);b.a[c]=a;b.b--;b.loadImports(a);b.L()},function(){b.a[c]=
null;b.b--;b.L()})};k.prototype.Sa=function(a,b){if(!a)return document.createDocumentFragment();Z&&(a=a.replace(cb,function(a,b,c){return-1===a.indexOf("type=")?b+" type=import-disable "+c:a}));var c=document.createElement("template");c.innerHTML=a;if(c.content){a=c.content;var d=function(a){l(a.querySelectorAll("template"),function(a){l(a.content.querySelectorAll('script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'),function(a){var b=document.createElement("script");
l(a.attributes,function(a){return b.setAttribute(a.name,a.value)});b.textContent=a.textContent;a.parentNode.insertBefore(b,a);a.parentNode.removeChild(a)});d(a.content)})};d(a)}else for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);if(c=a.querySelector("base"))b=t.Y(c.getAttribute("href"),b),c.removeAttribute("href");c=a.querySelectorAll('link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
var e=0;l(c,function(a){h(a);t.La(a,b);a.setAttribute("import-dependency","");"script"===a.localName&&!a.src&&a.textContent&&(a.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(a.textContent+("\n//# sourceURL="+b+(e?"-"+e:"")+".js\n"))),a.textContent="",e++)});return a};k.prototype.L=function(){var a=this;if(!this.b){this.c.disconnect();this.flatten(document);var b=!1,c=!1,d=function(){c&&b&&(a.loadImports(document),a.b||(a.c.observe(document.head,{childList:!0,subtree:!0}),
a.Pa()))};this.Ua(function(){c=!0;d()});this.Ta(function(){b=!0;d()})}};k.prototype.flatten=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){var c=b.a[a.href];(a.__import=c)&&c.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(b.a[a.href]=a,a.readyState="loading",a.__import=a,b.flatten(c),a.appendChild(c))})};k.prototype.Ta=function(a){function b(e){if(e<d){var f=c[e],g=document.createElement("script");f.removeAttribute("import-dependency");l(f.attributes,function(a){return g.setAttribute(a.name,
a.value)});n=g;f.parentNode.replaceChild(g,f);h(g,function(){n=null;b(e+1)})}else a()}var c=document.querySelectorAll("script[import-dependency]"),d=c.length;b(0)};k.prototype.Ua=function(a){var b=document.querySelectorAll("style[import-dependency],link[rel=stylesheet][import-dependency]"),d=b.length;if(d){var e=Z&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]");l(b,function(b){h(b,function(){b.removeAttribute("import-dependency");0===--d&&a()});if(e&&b.parentNode!==document.head){var f=
document.createElement(b.localName);f.__appliedElement=b;f.setAttribute("type","import-placeholder");b.parentNode.insertBefore(f,b.nextSibling);for(f=c(b);f&&c(f);)f=c(f);f.parentNode!==document.head&&(f=null);document.head.insertBefore(b,f);b.removeAttribute("type")}})}else a()};k.prototype.Pa=function(){var a=this,b=document.querySelectorAll("link[rel=import]");l(b,function(b){return a.h(b)},!0)};k.prototype.h=function(a){a.__loaded||(a.__loaded=!0,a.import&&(a.import.readyState="complete"),a.dispatchEvent(b(a.import?
"load":"error",{bubbles:!1,cancelable:!1,detail:void 0})))};k.prototype.Ra=function(a){var b=this;l(a,function(a){return l(a.addedNodes,function(a){a&&a.nodeType===Node.ELEMENT_NODE&&(g(a)?b.s(a):b.loadImports(a))})})};var aa=null;if(m){var ba=document.querySelectorAll("link[rel=import]");l(ba,function(a){a.import&&"loading"===a.import.readyState||(a.__loaded=!0)});ba=function(a){a=a.target;g(a)&&(a.__loaded=!0)};document.addEventListener("load",ba,!0);document.addEventListener("error",ba,!0)}else{var R=
Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!R||R.configurable?Node:Element).prototype,"baseURI",{get:function(){var a=g(this)?this:c(this);return a?a.href:R&&R.get?R.get.call(this):(document.querySelector("base")||window.location).href},configurable:!0,enumerable:!0});Object.defineProperty(HTMLLinkElement.prototype,"import",{get:function(){return this.__import||null},configurable:!0,enumerable:!0});e(function(){aa=new k})}f(function(){return document.dispatchEvent(b("HTMLImportsLoaded",
{cancelable:!0,bubbles:!0,detail:void 0}))});a.useNative=m;a.whenReady=f;a.importForElement=c;a.loadImports=function(a){aa&&aa.loadImports(a)}})(window.HTMLImports=window.HTMLImports||{});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var kb=document.querySelector('script[src*="webcomponents-lite.js"]'),lb=/wc-(.+)/,x={};if(!x.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(lb))&&(x[b[1]]=a[1]||!0)});if(kb)for(var mb=0,nb;nb=kb.attributes[mb];mb++)"src"!==nb.name&&(x[nb.name]=nb.value||!0);if(x.log&&x.log.split){var ob=x.log.split(",");x.log={};ob.forEach(function(a){x.log[a]=!0})}else x.log={}}
window.WebComponents.flags=x;var pb=x.shadydom;pb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=pb);var qb=x.register||x.ce;qb&&window.customElements&&(window.customElements.forcePolyfill=qb);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var y=window.ShadyDOM||{};y.Na=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var rb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");y.M=!!(rb&&rb.configurable&&rb.get);y.sa=y.force||!y.Na;function sb(a){return a.__shady&&void 0!==a.__shady.firstChild}function z(a){return"ShadyRoot"===a.ya}function tb(a){a=a.getRootNode();if(z(a))return a}var ub=Element.prototype,vb=ub.matches||ub.matchesSelector||ub.mozMatchesSelector||ub.msMatchesSelector||ub.oMatchesSelector||ub.webkitMatchesSelector;
function wb(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}}function xb(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)wb(a,c[d]);return a}function yb(a,b){for(var c in b)a[c]=b[c]}var zb=document.createTextNode(""),Ab=0,Bb=[];(new MutationObserver(function(){for(;Bb.length;)try{Bb.shift()()}catch(a){throw zb.textContent=Ab++,a;}})).observe(zb,{characterData:!0});
function Cb(a){Bb.push(a);zb.textContent=Ab++}var Db=!!document.contains;function Eb(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1};var Fb=[],Gb;function Hb(a){Gb||(Gb=!0,Cb(Ib));Fb.push(a)}function Ib(){Gb=!1;for(var a=!!Fb.length;Fb.length;)Fb.shift()();return a}Ib.list=Fb;function Jb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.V=new Set}function Kb(a){a.a||(a.a=!0,Cb(function(){Lb(a)}))}function Lb(a){if(a.a){a.a=!1;var b=a.takeRecords();b.length&&a.V.forEach(function(a){a(b)})}}Jb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Mb(a,b){a.__shady=a.__shady||{};a.__shady.N||(a.__shady.N=new Jb);a.__shady.N.V.add(b);var c=a.__shady.N;return{Ca:b,C:c,Ga:a,takeRecords:function(){return c.takeRecords()}}}function Nb(a){var b=a&&a.C;b&&(b.V.delete(a.Ca),b.V.size||(a.Ga.__shady.N=null))}
function Ob(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var A={},Pb=Element.prototype.insertBefore,Qb=Element.prototype.removeChild,Rb=Element.prototype.setAttribute,Sb=Element.prototype.removeAttribute,Tb=Element.prototype.cloneNode,Ub=Document.prototype.importNode,Vb=Element.prototype.addEventListener,Wb=Element.prototype.removeEventListener,Xb=Window.prototype.addEventListener,Yb=Window.prototype.removeEventListener,Zb=Element.prototype.dispatchEvent,$b=Element.prototype.querySelector,ac=Element.prototype.querySelectorAll,bc=Node.prototype.contains||
HTMLElement.prototype.contains;A.appendChild=Element.prototype.appendChild;A.insertBefore=Pb;A.removeChild=Qb;A.setAttribute=Rb;A.removeAttribute=Sb;A.cloneNode=Tb;A.importNode=Ub;A.addEventListener=Vb;A.removeEventListener=Wb;A.ab=Xb;A.bb=Yb;A.dispatchEvent=Zb;A.querySelector=$b;A.querySelectorAll=ac;A.contains=bc;var cc=/[&\u00A0"]/g,dc=/[&\u00A0<>]/g;function ec(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function fc(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var gc=fc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),hc=fc("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function ic(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,h;e<f&&(h=d[e]);e++){a:{var g=h;var k=a;var l=b;switch(g.nodeType){case Node.ELEMENT_NODE:for(var m=g.localName,n="<"+m,w=g.attributes,I=0;k=w[I];I++)n+=" "+k.name+'="'+k.value.replace(cc,ec)+'"';n+=">";g=gc[m]?n:n+ic(g,l)+"</"+m+">";break a;case Node.TEXT_NODE:g=g.data;g=k&&hc[k.localName]?g:g.replace(dc,ec);break a;case Node.COMMENT_NODE:g="\x3c!--"+g.data+"--\x3e";break a;default:throw window.console.error(g),
Error("not implemented");}}c+=g}return c};var B={},C=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),D=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function jc(a){var b=[];C.currentNode=a;for(a=C.firstChild();a;)b.push(a),a=C.nextSibling();return b}B.parentNode=function(a){C.currentNode=a;return C.parentNode()};B.firstChild=function(a){C.currentNode=a;return C.firstChild()};B.lastChild=function(a){C.currentNode=a;return C.lastChild()};B.previousSibling=function(a){C.currentNode=a;return C.previousSibling()};
B.nextSibling=function(a){C.currentNode=a;return C.nextSibling()};B.childNodes=jc;B.parentElement=function(a){D.currentNode=a;return D.parentNode()};B.firstElementChild=function(a){D.currentNode=a;return D.firstChild()};B.lastElementChild=function(a){D.currentNode=a;return D.lastChild()};B.previousElementSibling=function(a){D.currentNode=a;return D.previousSibling()};B.nextElementSibling=function(a){D.currentNode=a;return D.nextSibling()};
B.children=function(a){var b=[];D.currentNode=a;for(a=D.firstChild();a;)b.push(a),a=D.nextSibling();return b};B.innerHTML=function(a){return ic(a,function(a){return jc(a)})};B.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var kc=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),lc=document.implementation.createHTMLDocument("inert"),mc=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),nc={parentElement:{get:function(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:B.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=this.__shady&&this.__shady.parentNode;
return void 0!==a?a:B.parentNode(this)},configurable:!0},nextSibling:{get:function(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:B.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=this.__shady&&this.__shady.previousSibling;return void 0!==a?a:B.previousSibling(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&
void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return B.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return B.previousElementSibling(this)},configurable:!0}},oc={childNodes:{get:function(){if(sb(this)){if(!this.__shady.childNodes){this.__shady.childNodes=
[];for(var a=this.firstChild;a;a=a.nextSibling)this.__shady.childNodes.push(a)}var b=this.__shady.childNodes}else b=B.childNodes(this);b.item=function(a){return b[a]};return b},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=this.__shady&&this.__shady.firstChild;return void 0!==a?a:B.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:B.lastChild(this)},
configurable:!0},textContent:{get:function(){if(sb(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}return B.textContent(this)},set:function(a){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(;this.firstChild;)this.removeChild(this.firstChild);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){if(this.__shady&&
void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return B.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return B.lastElementChild(this)},configurable:!0},children:{get:function(){var a=sb(this)?Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===
Node.ELEMENT_NODE}):B.children(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){var a="template"===this.localName?this.content:this;return sb(this)?ic(a):B.innerHTML(a)},set:function(a){for(var b="template"===this.localName?this.content:this;b.firstChild;)b.removeChild(b.firstChild);var c=this.localName;c&&"template"!==c||(c="div");c=lc.createElement(c);for(kc&&kc.set?kc.set.call(c,a):c.innerHTML=a;c.firstChild;)b.appendChild(c.firstChild)},configurable:!0}},
pc={shadowRoot:{get:function(){return this.__shady&&this.__shady.Va||null},configurable:!0}},qc={activeElement:{get:function(){var a=mc&&mc.get?mc.get.call(document):y.M?void 0:document.activeElement;if(a&&a.nodeType){var b=!!z(this);if(this===document||b&&this.host!==a&&A.contains.call(this.host,a)){for(b=tb(a);b&&b!==this;)a=b.host,b=tb(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function E(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function F(a){E(a,nc);E(a,oc);E(a,qc)}var rc=y.M?function(){}:function(a){a.__shady&&a.__shady.za||(a.__shady=a.__shady||{},a.__shady.za=!0,E(a,nc,!0))},sc=y.M?function(){}:function(a){a.__shady&&a.__shady.xa||(a.__shady=a.__shady||{},a.__shady.xa=!0,E(a,oc,!0),E(a,pc,!0))};function tc(a,b,c){rc(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null}
function uc(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=B.firstChild(a);a.__shady.lastChild=B.lastChild(a);sc(a);for(var b=a.__shady.childNodes=B.childNodes(a),c=0,d;c<b.length&&(d=b[c]);c++)d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,rc(d)}};function vc(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&d!==a||void 0===d&&B.parentNode(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.parentNode&&wc(b.parentNode,b);d=tb(a);var e;if(e=d)a:{if(!b.__noInsertionPoint){var f;"slot"===b.localName?f=[b]:
b.querySelectorAll&&(f=b.querySelectorAll("slot"));if(f&&f.length){e=f;break a}}e=void 0}(f=e)&&d.H.push.apply(d.H,[].concat(f instanceof Array?f:la(ka(f))));d&&("slot"===a.localName||f)&&xc(d);if(sb(a)){d=c;sc(a);a.__shady=a.__shady||{};void 0!==a.__shady.firstChild&&(a.__shady.childNodes=null);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=b.childNodes;for(e=0;e<f.length;e++)tc(f[e],a,d);b.__shady=b.__shady||{};d=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=
d;b.__shady.childNodes=d}else tc(b,a,d);if(yc(a)){xc(a.__shady.root);var h=!0}else a.__shady.root&&(h=!0)}h||(h=z(a)?a.host:a,c?(c=zc(c),A.insertBefore.call(h,b,c)):A.appendChild.call(h,b));Ac(a,b);return b}
function wc(a,b){if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var c=tb(b);if(sb(a)){b.__shady=b.__shady||{};a.__shady=a.__shady||{};b===a.__shady.firstChild&&(a.__shady.firstChild=b.__shady.nextSibling);b===a.__shady.lastChild&&(a.__shady.lastChild=b.__shady.previousSibling);var d=b.__shady.previousSibling,e=b.__shady.nextSibling;d&&(d.__shady=d.__shady||{},d.__shady.nextSibling=e);e&&(e.__shady=e.__shady||{},e.__shady.previousSibling=d);b.__shady.parentNode=
b.__shady.previousSibling=b.__shady.nextSibling=void 0;void 0!==a.__shady.childNodes&&(a.__shady.childNodes=null);if(yc(a)){xc(a.__shady.root);var f=!0}}Bc(b);if(c){(d=a&&"slot"===a.localName)&&(f=!0);Cc(c);e=c.l;for(var h in e)for(var g=e[h],k=0;k<g.length;k++){var l=g[k];if(Eb(b,l)){g.splice(k,1);var m=c.o.indexOf(l);0<=m&&c.o.splice(m,1);k--;if(m=l.__shady.K)for(l=0;l<m.length;l++){var n=m[l],w=B.parentNode(n);w&&A.removeChild.call(w,n)}m=!0}}(m||d)&&xc(c)}f||(f=z(a)?a.host:a,(!a.__shady.root&&
"slot"!==b.localName||f===B.parentNode(b))&&A.removeChild.call(f,b));Ac(a,null,b);return b}function Bc(a){if(a.__shady&&void 0!==a.__shady.ka)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++)Bc(e);a.__shady&&(a.__shady.ka=void 0)}function zc(a){var b=a;a&&"slot"===a.localName&&(b=(b=a.__shady&&a.__shady.K)&&b.length?b[0]:zc(a.nextSibling));return b}function yc(a){return(a=a&&a.__shady&&a.__shady.root)&&Dc(a)}
function Ec(a,b){if("slot"===b)a=a.parentNode,yc(a)&&xc(a.__shady.root);else if("slot"===a.localName&&"name"===b&&(b=tb(a))){var c=a.Aa,d=Fc(a);if(d!==c){c=b.l[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.l[d]||(b.l[d]=[]);c.push(a);1<c.length&&(b.l[d]=Gc(c))}xc(b)}}function Ac(a,b,c){if(a=a.__shady&&a.__shady.N)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Kb(a)}
function Hc(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.ka;void 0===b&&(b=z(a)?a:(b=a.parentNode)?Hc(b):a,A.contains.call(document.documentElement,a)&&(a.__shady.ka=b));return b}}function Ic(a,b,c){var d=[];Jc(a.childNodes,b,c,d);return d}function Jc(a,b,c,d){for(var e=0,f=a.length,h;e<f&&(h=a[e]);e++){var g;if(g=h.nodeType===Node.ELEMENT_NODE){g=h;var k=b,l=c,m=d,n=k(g);n&&m.push(g);l&&l(n)?g=n:(Jc(g.childNodes,k,l,m),g=void 0)}if(g)break}}var Kc=null;
function Lc(a,b,c){Kc||(Kc=window.ShadyCSS&&window.ShadyCSS.ScopingShim);Kc&&"class"===b?Kc.setElementClass(a,c):(A.setAttribute.call(a,b,c),Ec(a,b))}function Mc(a,b){if(a.ownerDocument!==document)return A.importNode.call(document,a,b);var c=A.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=Mc(a[b],!0),c.appendChild(d)}return c};var Nc="__eventWrappers"+Date.now(),Oc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,
dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0};function Pc(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}
function Qc(a,b){if(!z)return a;a=Pc(a,!0);for(var c=0,d,e,f,h;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(h=a.indexOf(f),e=f),!z(f)||-1<h)return d}
var Rc={get composed(){!1!==this.isTrusted&&void 0===this.Z&&(this.Z=Oc[this.type]);return this.Z||!1},composedPath:function(){this.b||(this.b=Pc(this.__target,this.composed));return this.b},get target(){return Qc(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.$)return null;this.c||(this.c=Pc(this.$,!0));return Qc(this.currentTarget,this.c)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.a=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);
this.a=this.h=!0}};function Sc(a){function b(b,d){b=new a(b,d);b.Z=d&&!!d.composed;return b}yb(b,a);b.prototype=a.prototype;return b}var Tc={focus:!0,blur:!0};function Uc(a){return a.__target!==a.target||a.$!==a.relatedTarget}function Vc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!Uc(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.h);d++);}
function Wc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];Vc(a,d,"capture");if(a.a)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=d.__shady&&d.__shady.root;if(0===c||f&&f===e)if(Vc(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.a)break}}
function Xc(a,b,c,d,e,f){for(var h=0;h<a.length;h++){var g=a[h],k=g.type,l=g.capture,m=g.once,n=g.passive;if(b===g.node&&c===k&&d===l&&e===m&&f===n)return h}return-1}
function Yc(a,b,c){if(b){var d=typeof b;if("function"===d||"object"===d)if("object"!==d||b.handleEvent&&"function"===typeof b.handleEvent){if(c&&"object"===typeof c){var e=!!c.capture;var f=!!c.once;var h=!!c.passive}else e=!!c,h=f=!1;var g=c&&c.aa||this,k=b[Nc];if(k){if(-1<Xc(k,g,a,e,f,h))return}else b[Nc]=[];k=function(e){f&&this.removeEventListener(a,b,c);e.__target||Zc(e);if(g!==this){var h=Object.getOwnPropertyDescriptor(e,"currentTarget");Object.defineProperty(e,"currentTarget",{get:function(){return g},
configurable:!0})}if(e.composed||-1<e.composedPath().indexOf(g))if(Uc(e)&&e.target===e.relatedTarget)e.eventPhase===Event.BUBBLING_PHASE&&e.stopImmediatePropagation();else if(e.eventPhase===Event.CAPTURING_PHASE||e.bubbles||e.target===g||g instanceof Window){var k="function"===d?b.call(g,e):b.handleEvent&&b.handleEvent(e);g!==this&&(h?(Object.defineProperty(e,"currentTarget",h),h=null):delete e.currentTarget);return k}};b[Nc].push({node:this,type:a,capture:e,once:f,passive:h,cb:k});Tc[a]?(this.__handlers=
this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(k)):(this instanceof Window?A.ab:A.addEventListener).call(this,a,k,c)}}}
function $c(a,b,c){if(b){if(c&&"object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var h=c&&c.aa||this,g=void 0;var k=null;try{k=b[Nc]}catch(l){}k&&(e=Xc(k,h,a,d,e,f),-1<e&&(g=k.splice(e,1)[0].cb,k.length||(b[Nc]=void 0)));(this instanceof Window?A.bb:A.removeEventListener).call(this,a,g||b,c);g&&Tc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],g=a.indexOf(g),-1<g&&a.splice(g,1))}}
function ad(){for(var a in Tc)window.addEventListener(a,function(a){a.__target||(Zc(a),Wc(a))},!0)}function Zc(a){a.__target=a.target;a.$=a.relatedTarget;if(y.M){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.fb=b;wb(c,Rc);b.__patchProto=c}a.__proto__=b.__patchProto}else wb(a,Rc)}var bd=Sc(window.Event),cd=Sc(window.CustomEvent),dd=Sc(window.MouseEvent);function ed(a,b){return{index:a,O:[],U:b}}
function fd(a,b,c,d){var e=0,f=0,h=0,g=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(h=0;h<k;h++)if(a[h]!==c[h])break a;h=k}if(b==a.length&&d==c.length){g=a.length;for(var l=c.length,m=0;m<k-h&&gd(a[--g],c[--l]);)m++;g=m}e+=h;f+=h;b-=g;d-=g;if(0==b-e&&0==d-f)return[];if(e==b){for(b=ed(e,0);f<d;)b.O.push(c[f++]);return[b]}if(f==d)return[ed(e,b-e)];k=e;h=f;d=d-h+1;g=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(g),b[l][0]=l;for(l=0;l<g;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<g;m++)if(a[k+m-1]===c[h+l-1])b[l][m]=
b[l-1][m-1];else{var n=b[l-1][m]+1,w=b[l][m-1]+1;b[l][m]=n<w?n:w}k=b.length-1;h=b[0].length-1;d=b[k][h];for(a=[];0<k||0<h;)0==k?(a.push(2),h--):0==h?(a.push(3),k--):(g=b[k-1][h-1],l=b[k-1][h],m=b[k][h-1],n=l<m?l<g?l:g:m<g?m:g,n==g?(g==d?a.push(0):(a.push(1),d=g),k--,h--):n==l?(a.push(3),k--,d=l):(a.push(2),h--,d=m));a.reverse();b=void 0;k=[];for(h=0;h<a.length;h++)switch(a[h]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=ed(e,0));b.U++;e++;b.O.push(c[f]);f++;break;case 2:b||(b=ed(e,0));
b.U++;e++;break;case 3:b||(b=ed(e,0)),b.O.push(c[f]),f++}b&&k.push(b);return k}function gd(a,b){return a===b};var hd={};function G(a,b,c){if(a!==hd)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=G.prototype;a.ya="ShadyRoot";uc(b);uc(a);a.host=b;a.Fa=c&&c.mode;b.__shady=b.__shady||{};b.__shady.root=a;b.__shady.Va="closed"!==a.Fa?a:null;a.T=!1;a.o=[];a.l={};a.H=[];c=B.childNodes(b);for(var d=0,e=c.length;d<e;d++)A.removeChild.call(b,c[d]);return a}G.prototype=Object.create(DocumentFragment.prototype);function xc(a){a.T||(a.T=!0,Hb(function(){return id(a)}))}
function id(a){for(var b;a;){a.T&&(b=a);a:{var c=a;a=c.host.getRootNode();if(z(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
G.prototype._renderRoot=function(){this.T=!1;Cc(this);for(var a=0,b;a<this.o.length;a++){b=this.o[a];var c=b.__shady.assignedNodes;b.__shady.assignedNodes=[];b.__shady.K=[];if(b.__shady.oa=c)for(var d=0;d<c.length;d++){var e=c[d];e.__shady.ga=e.__shady.assignedSlot;e.__shady.assignedSlot===b&&(e.__shady.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)jd(this,b);for(a=0;a<this.o.length;a++){b=this.o[a];if(!b.__shady.assignedNodes.length)for(c=b.firstChild;c;c=c.nextSibling)jd(this,
c,b);c=b.parentNode;(c=c.__shady&&c.__shady.root)&&Dc(c)&&c._renderRoot();kd(this,b.__shady.K,b.__shady.assignedNodes);if(c=b.__shady.oa){for(d=0;d<c.length;d++)c[d].__shady.ga=null;b.__shady.oa=null;c.length>b.__shady.assignedNodes.length&&(b.__shady.ia=!0)}b.__shady.ia&&(b.__shady.ia=!1,ld(this,b))}a=this.o;b=[];for(c=0;c<a.length;c++)d=a[c].parentNode,d.__shady&&d.__shady.root||!(0>b.indexOf(d))||b.push(d);for(a=0;a<b.length;a++){c=b[a];d=c===this?this.host:c;e=[];c=c.childNodes;for(var f=0;f<
c.length;f++){var h=c[f];if("slot"==h.localName){h=h.__shady.K;for(var g=0;g<h.length;g++)e.push(h[g])}else e.push(h)}c=void 0;f=B.childNodes(d);h=fd(e,e.length,f,f.length);for(var k=g=0;g<h.length&&(c=h[g]);g++){for(var l=0,m;l<c.O.length&&(m=c.O[l]);l++)B.parentNode(m)===d&&A.removeChild.call(d,m),f.splice(c.index+k,1);k-=c.U}for(k=0;k<h.length&&(c=h[k]);k++)for(g=f[c.index],l=c.index;l<c.index+c.U;l++)m=e[l],A.insertBefore.call(d,m,g),f.splice(l,0,m)}};
function jd(a,b,c){b.__shady=b.__shady||{};var d=b.__shady.ga;b.__shady.ga=null;c||(c=(a=a.l[b.slot||"__catchall"])&&a[0]);c?(c.__shady.assignedNodes.push(b),b.__shady.assignedSlot=c):b.__shady.assignedSlot=void 0;d!==b.__shady.assignedSlot&&b.__shady.assignedSlot&&(b.__shady.assignedSlot.__shady.ia=!0)}function kd(a,b,c){for(var d=0,e;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=e.__shady.assignedNodes;f&&f.length&&kd(a,b,f)}else b.push(c[d])}
function ld(a,b){A.dispatchEvent.call(b,new Event("slotchange"));b.__shady.assignedSlot&&ld(a,b.__shady.assignedSlot)}function Cc(a){if(a.H.length){for(var b=a.H,c,d=0;d<b.length;d++){var e=b[d];e.__shady=e.__shady||{};uc(e);uc(e.parentNode);var f=Fc(e);a.l[f]?(c=c||{},c[f]=!0,a.l[f].push(e)):a.l[f]=[e];a.o.push(e)}if(c)for(var h in c)a.l[h]=Gc(a.l[h]);a.H=[]}}function Fc(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Aa=b}
function Gc(a){return a.sort(function(a,c){a=md(a);for(var b=md(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function md(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}function Dc(a){Cc(a);return!!a.o.length}G.prototype.addEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.aa=this;this.host.addEventListener(a,b,c)};
G.prototype.removeEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.aa=this;this.host.removeEventListener(a,b,c)};G.prototype.getElementById=function(a){return Ic(this,function(b){return b.id==a},function(a){return!!a})[0]||null};var nd=G.prototype;E(nd,oc,!0);E(nd,qc,!0);function od(a){var b=a.getRootNode();z(b)&&id(b);return a.__shady&&a.__shady.assignedSlot||null}
var pd={addEventListener:Yc.bind(window),removeEventListener:$c.bind(window)},qd={addEventListener:Yc,removeEventListener:$c,appendChild:function(a){return vc(this,a)},insertBefore:function(a,b){return vc(this,a,b)},removeChild:function(a){return wc(this,a)},replaceChild:function(a,b){vc(this,a,b);wc(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=A.cloneNode.call(this,a);else if(b=A.cloneNode.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=a[c].cloneNode(!0),
b.appendChild(d)}return b},getRootNode:function(){return Hc(this)},contains:function(a){return Eb(this,a)},get isConnected(){var a=this.ownerDocument;if(Db&&A.contains.call(a,this)||a.documentElement&&A.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(a instanceof G?a.host:void 0);return!!(a&&a instanceof Document)},dispatchEvent:function(a){Ib();return A.dispatchEvent.call(this,a)}},rd={get assignedSlot(){return od(this)}},sd={querySelector:function(a){return Ic(this,
function(b){return vb.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a){return Ic(this,function(b){return vb.call(b,a)})}},td={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();z(b)&&id(b);return this.__shady?(a&&a.flatten?this.__shady.K:this.__shady.assignedNodes)||[]:[]}}},ud=xb({setAttribute:function(a,b){Lc(this,a,b)},removeAttribute:function(a){A.removeAttribute.call(this,a);Ec(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";
if(!a)throw"Not enough arguments.";return new G(hd,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){Lc(this,"slot",a)},get assignedSlot(){return od(this)}},sd,td);Object.defineProperties(ud,pc);var vd=xb({importNode:function(a,b){return Mc(a,b)},getElementById:function(a){return Ic(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},sd);Object.defineProperties(vd,{_activeElement:qc.activeElement});
var wd=HTMLElement.prototype.blur,xd=xb({blur:function(){var a=this.__shady&&this.__shady.root;(a=a&&a.activeElement)?a.blur():wd.call(this)}});function H(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(y.sa){var ShadyDOM={inUse:y.sa,patch:function(a){return a},isShadyRoot:z,enqueue:Hb,flush:Ib,settings:y,filterMutations:Ob,observeChildren:Mb,unobserveChildren:Nb,nativeMethods:A,nativeTree:B};window.ShadyDOM=ShadyDOM;window.Event=bd;window.CustomEvent=cd;window.MouseEvent=dd;ad();var yd=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;H(window.Node.prototype,qd);H(window.Window.prototype,pd);H(window.Text.prototype,rd);H(window.DocumentFragment.prototype,sd);H(window.Element.prototype,
ud);H(window.Document.prototype,vd);window.HTMLSlotElement&&H(window.HTMLSlotElement.prototype,td);H(yd.prototype,xd);y.M&&(F(window.Node.prototype),F(window.Text.prototype),F(window.DocumentFragment.prototype),F(window.Element.prototype),F(yd.prototype),F(window.Document.prototype),window.HTMLSlotElement&&F(window.HTMLSlotElement.prototype));window.ShadowRoot=G};var zd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function Ad(a){var b=zd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function J(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function Bd(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function K(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)K(d,b,c);d=Bd(a,e);continue}else if("template"===f){d=Bd(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)K(e,b,c)}d=d.firstChild?d.firstChild:Bd(a,d)}}function L(a,b,c){a[b]=c};function Cd(){this.a=new Map;this.s=new Map;this.h=[];this.c=!1}function Dd(a,b,c){a.a.set(b,c);a.s.set(c.constructor,c)}function Ed(a,b){a.c=!0;a.h.push(b)}function Fd(a,b){a.c&&K(b,function(b){return a.b(b)})}Cd.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.h.length;b++)this.h[b](a)}};function M(a,b){var c=[];K(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):Gd(a,d)}}
function N(a,b){var c=[];K(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function O(a,b,c){c=void 0===c?{}:c;var d=c.$a||new Set,e=c.va||function(b){return Gd(a,b)},f=[];K(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);O(a,c,{$a:f,va:e})}})}else f.push(b)},d);if(a.c)for(b=
0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b])}
function Gd(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(h){throw b.__CE_state=2,h;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}J(b)&&a.connectedCallback(b)}}}Cd.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};Cd.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
Cd.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function Hd(a){var b=document;this.j=a;this.a=b;this.C=void 0;O(this.j,this.a);"loading"===this.a.readyState&&(this.C=new MutationObserver(this.b.bind(this)),this.C.observe(this.a,{childList:!0,subtree:!0}))}Hd.prototype.disconnect=function(){this.C&&this.C.disconnect()};Hd.prototype.b=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||this.disconnect();for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)O(this.j,c[d])};function Id(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a)})}Id.prototype.resolve=function(a){if(this.a)throw Error("Already resolved.");this.a=a;this.b&&this.b(a)};function P(a){this.da=!1;this.j=a;this.ha=new Map;this.ea=function(a){return a()};this.R=!1;this.fa=[];this.Da=new Hd(a)}
P.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!Ad(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.j.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.da)throw Error("A custom element is already being defined.");this.da=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var h=d("disconnectedCallback");var g=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(m){return}finally{this.da=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:h,adoptedCallback:g,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};Dd(this.j,a,b);this.fa.push(b);
this.R||(this.R=!0,this.ea(function(){return Jd(c)}))};function Jd(a){if(!1!==a.R){a.R=!1;for(var b=a.fa,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);O(a.j,document,{va:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.j.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)Gd(a.j,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var h=0;h<f.length;h++)Gd(a.j,f[h]);(e=a.ha.get(e))&&e.resolve(void 0)}}}
P.prototype.get=function(a){if(a=this.j.a.get(a))return a.constructor};P.prototype.a=function(a){if(!Ad(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.ha.get(a);if(b)return b.c;b=new Id;this.ha.set(a,b);this.j.a.get(a)&&!this.fa.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.c};P.prototype.b=function(a){this.Da.disconnect();var b=this.ea;this.ea=function(c){return a(function(){return b(c)})}};
window.CustomElementRegistry=P;P.prototype.define=P.prototype.define;P.prototype.get=P.prototype.get;P.prototype.whenDefined=P.prototype.a;P.prototype.polyfillWrapFlushCallback=P.prototype.b;var Kd=window.Document.prototype.createElement,Ld=window.Document.prototype.createElementNS,Md=window.Document.prototype.importNode,Nd=window.Document.prototype.prepend,Od=window.Document.prototype.append,Pd=window.DocumentFragment.prototype.prepend,Qd=window.DocumentFragment.prototype.append,Rd=window.Node.prototype.cloneNode,Sd=window.Node.prototype.appendChild,Td=window.Node.prototype.insertBefore,Ud=window.Node.prototype.removeChild,Vd=window.Node.prototype.replaceChild,Wd=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Xd=window.Element.prototype.attachShadow,Yd=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Zd=window.Element.prototype.getAttribute,$d=window.Element.prototype.setAttribute,ae=window.Element.prototype.removeAttribute,be=window.Element.prototype.getAttributeNS,ce=window.Element.prototype.setAttributeNS,de=window.Element.prototype.removeAttributeNS,ee=window.Element.prototype.insertAdjacentElement,fe=window.Element.prototype.prepend,ge=window.Element.prototype.append,
he=window.Element.prototype.before,ie=window.Element.prototype.after,je=window.Element.prototype.replaceWith,ke=window.Element.prototype.remove,le=window.HTMLElement,me=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ne=window.HTMLElement.prototype.insertAdjacentElement;var oe=new function(){};function pe(){var a=qe;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.s.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=Kd.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===oe)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=oe;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=le.prototype;return b}()};function re(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var m=d[l];m instanceof Element&&J(m)&&f.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)e.push(m);else e.push(m)}b.apply(this,d);for(d=0;d<f.length;d++)N(a,f[d]);if(J(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&M(a,f)}}void 0!==c.X&&(b.prepend=d(c.X));void 0!==c.append&&(b.append=d(c.append))};function se(){var a=qe;L(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=Kd.call(this,b);a.b(b);return b});L(Document.prototype,"importNode",function(b,c){b=Md.call(this,b,c);this.__CE_hasRegistry?O(a,b):Fd(a,b);return b});L(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=Ld.call(this,b,c);a.b(b);return b});
re(a,Document.prototype,{X:Nd,append:Od})};function te(){var a=qe;function b(b,d){Object.defineProperty(b,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,b);else{var c=void 0;if(this.firstChild){var e=this.childNodes,g=e.length;if(0<g&&J(this)){c=Array(g);for(var k=0;k<g;k++)c[k]=e[k]}}d.set.call(this,b);if(c)for(b=0;b<c.length;b++)N(a,c[b])}}})}L(Node.prototype,"insertBefore",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);
b=Td.call(this,b,d);if(J(this))for(d=0;d<c.length;d++)M(a,c[d]);return b}c=J(b);d=Td.call(this,b,d);c&&N(a,b);J(this)&&M(a,b);return d});L(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Sd.call(this,b);if(J(this))for(var e=0;e<c.length;e++)M(a,c[e]);return b}c=J(b);e=Sd.call(this,b);c&&N(a,b);J(this)&&M(a,b);return e});L(Node.prototype,"cloneNode",function(b){b=Rd.call(this,b);this.ownerDocument.__CE_hasRegistry?O(a,b):
Fd(a,b);return b});L(Node.prototype,"removeChild",function(b){var c=J(b),e=Ud.call(this,b);c&&N(a,b);return e});L(Node.prototype,"replaceChild",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Vd.call(this,b,d);if(J(this))for(N(a,d),d=0;d<c.length;d++)M(a,c[d]);return b}c=J(b);var f=Vd.call(this,b,d),h=J(this);h&&N(a,d);c&&N(a,b);h&&M(a,b);return f});Wd&&Wd.get?b(Node.prototype,Wd):Ed(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Ud.call(this,this.firstChild);Sd.call(this,document.createTextNode(a))}})})};function ue(a){var b=Element.prototype;function c(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var g=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&J(l)&&g.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<g.length;d++)N(a,g[d]);if(J(this))for(d=0;d<e.length;d++)g=e[d],g instanceof Element&&M(a,g)}}void 0!==he&&(b.before=c(he));void 0!==he&&(b.after=c(ie));void 0!==
je&&L(b,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=[];for(var h=[],g=0;g<c.length;g++){var k=c[g];k instanceof Element&&J(k)&&h.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}g=J(this);je.apply(this,c);for(c=0;c<h.length;c++)N(a,h[c]);if(g)for(N(a,this),c=0;c<d.length;c++)h=d[c],h instanceof Element&&M(a,h)});void 0!==ke&&L(b,"remove",function(){var b=J(this);ke.call(this);b&&N(a,this)})};function ve(){var a=qe;function b(b,c){Object.defineProperty(b,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){var d=this,e=void 0;J(this)&&(e=[],K(this,function(a){a!==d&&e.push(a)}));c.set.call(this,b);if(e)for(var f=0;f<e.length;f++){var l=e[f];1===l.__CE_state&&a.disconnectedCallback(l)}this.ownerDocument.__CE_hasRegistry?O(a,this):Fd(a,this);return b}})}function c(b,c){L(b,"insertAdjacentElement",function(b,d){var e=J(d);b=c.call(this,b,d);e&&N(a,d);J(b)&&M(a,d);
return b})}Xd&&L(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=Xd.call(this,a)});Yd&&Yd.get?b(Element.prototype,Yd):me&&me.get?b(HTMLElement.prototype,me):Ed(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return Rd.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=Kd.call(document,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)Ud.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)Sd.call(c,
a.childNodes[0])}})});L(Element.prototype,"setAttribute",function(b,c){if(1!==this.__CE_state)return $d.call(this,b,c);var d=Zd.call(this,b);$d.call(this,b,c);c=Zd.call(this,b);a.attributeChangedCallback(this,b,d,c,null)});L(Element.prototype,"setAttributeNS",function(b,c,f){if(1!==this.__CE_state)return ce.call(this,b,c,f);var d=be.call(this,b,c);ce.call(this,b,c,f);f=be.call(this,b,c);a.attributeChangedCallback(this,c,d,f,b)});L(Element.prototype,"removeAttribute",function(b){if(1!==this.__CE_state)return ae.call(this,
b);var c=Zd.call(this,b);ae.call(this,b);null!==c&&a.attributeChangedCallback(this,b,c,null,null)});L(Element.prototype,"removeAttributeNS",function(b,c){if(1!==this.__CE_state)return de.call(this,b,c);var d=be.call(this,b,c);de.call(this,b,c);var e=be.call(this,b,c);d!==e&&a.attributeChangedCallback(this,c,d,e,b)});ne?c(HTMLElement.prototype,ne):ee?c(Element.prototype,ee):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");re(a,Element.prototype,{X:fe,append:ge});ue(a)}
;var we=window.customElements;if(!we||we.forcePolyfill||"function"!=typeof we.define||"function"!=typeof we.get){var qe=new Cd;pe();se();re(qe,DocumentFragment.prototype,{X:Pd,append:Qd});te();ve();document.__CE_hasRegistry=!0;var customElements=new P(qe);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};function xe(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function ye(a){a=a.replace(ze,"").replace(Ae,"");var b=Be,c=a,d=new xe;d.start=0;d.end=c.length;for(var e=d,f=0,h=c.length;f<h;f++)if("{"===c[f]){e.rules||(e.rules=[]);var g=e,k=g.rules[g.rules.length-1]||null;e=new xe;e.start=f+1;e.parent=g;e.previous=k;g.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function Be(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=Ce(c),c=c.replace(De," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=He:c.match(Ie)&&(a.type=Je,a.keyframesName=a.selector.split(De).pop()):a.type=0===c.indexOf("--")?Ke:Le);if(c=a.rules)for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)Be(f,
b);return a}function Ce(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function Me(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var h=e.length,g;f<h&&(g=e[f]);f++)d=Me(g,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Ne,"").replace(Oe,""),b=b.replace(Pe,"").replace(Qe,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Le=1,Je=7,He=4,Ke=1E3,ze=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,Ae=/@import[^;]*;/gim,Ne=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Oe=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Pe=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Qe=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Ie=/^@[^\s]*keyframes/,De=/\s+/g;var Q=!(window.ShadyDOM&&window.ShadyDOM.inUse),Re;function Se(a){Re=a&&a.shimcssproperties?!1:Q||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Re=window.ShadyCSS.nativeCss:window.ShadyCSS?(Se(window.ShadyCSS),window.ShadyCSS=void 0):Se(window.WebComponents&&window.WebComponents.flags);var S=Re;var Te=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ue=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Ve=/(--[\w-]+)\s*([:,;)]|$)/gi,We=/(animation\s*:)|(animation-name\s*:)/,Xe=/@media\s(.*)/,Ye=/\{[^}]*\}/g;var Ze=new Set;function $e(a,b){if(!a)return"";"string"===typeof a&&(a=ye(a));b&&af(a,b);return Me(a,S)}function bf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=ye(a.textContent));return a.__cssRules||null}function cf(a){return!!a.parent&&a.parent.type===Je}function af(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===He){var h=a.selector.match(Xe);h&&(window.matchMedia(h[1]).matches||(e=!0))}f===Le?b(a):c&&f===Je?c(a):f===Ke&&(e=!0);if((a=a.rules)&&!e){e=0;f=a.length;for(var g;e<f&&(g=a[e]);e++)af(g,b,c,d)}}}
function df(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;ef(e,c,d);return e}var T=null;function ef(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);T?a.compareDocumentPosition(T)===Node.DOCUMENT_POSITION_PRECEDING&&(T=a):T=a}
function ff(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");a:{var d=0;var e=c+3;for(var f=a.length;e<f;e++)if("("===a[e])d++;else if(")"===a[e]&&0===--d)break a;e=-1}d=a.substring(c+4,e);c=a.substring(0,c);a=ff(a.substring(e+1),b);e=d.indexOf(",");return-1===e?b(c,d.trim(),"",a):b(c,d.substring(0,e).trim(),d.substring(e+1).trim(),a)}function gf(a,b){Q?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function U(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,P:c}};function hf(){}function jf(a,b,c){var d=V;a.__styleScoped?a.__styleScoped=null:kf(d,a,b||"",c)}function kf(a,b,c,d){b.nodeType===Node.ELEMENT_NODE&&lf(b,c,d);if(b="template"===b.localName?(b.content||b.gb).childNodes:b.children||b.childNodes)for(var e=0;e<b.length;e++)kf(a,b[e],c,d)}
function lf(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(mf);c?d&&(b=d.replace("style-scope","").replace(b,""),gf(a,b)):gf(a,(d?d+" ":"")+"style-scope "+b)}}function nf(a,b,c){var d=V,e=a.__cssBuild;Q||"shady"===e?b=$e(b,c):(a=U(a),b=of(d,b,a.is,a.P,c)+"\n\n");return b.trim()}
function of(a,b,c,d,e){var f=pf(c,d);c=c?qf+c:"";return $e(b,function(b){b.c||(b.selector=b.m=rf(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function pf(a,b){return b?"[is="+a+"]":a}function rf(a,b,c,d,e){var f=b.selector.split(sf);if(!cf(b)){b=0;for(var h=f.length,g;b<h&&(g=f[b]);b++)f[b]=c.call(a,g,d,e)}return f.join(sf)}function tf(a){return a.replace(uf,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
hf.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=uf.test(a);e&&(a=a.replace(uf,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=tf(a));a=a.replace(vf,wf+" $1");a=a.replace(xf,function(a,e,g){d||(a=yf(g,e,b,c),d=d||a.stop,e=a.Ka,g=a.value);return e+g});e&&(a=tf(a));return a};
function yf(a,b,c,d){var e=a.indexOf(zf);0<=a.indexOf(wf)?a=Af(a,d):0!==e&&(a=c?Bf(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Cf,function(a,b){return" > "+b}))}a=a.replace(Df,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Ka:b,stop:f}}function Bf(a,b){a=a.split(Ef);a[0]+=b;return a.join(Ef)}
function Af(a,b){var c=a.match(Ff);return(c=c&&c[2].trim()||"")?c[0].match(Gf)?a.replace(Ff,function(a,c,f){return b+f}):c.split(Gf)[0]===b?c:Hf:a.replace(wf,b)}function If(a){a.selector===Jf&&(a.selector="html")}hf.prototype.c=function(a){return a.match(zf)?this.b(a,Kf):Bf(a.trim(),Kf)};q.Object.defineProperties(hf.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var uf=/:(nth[-\w]+)\(([^)]+)\)/,Kf=":not(.style-scope)",sf=",",xf=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Gf=/[[.:#*]/,wf=":host",Jf=":root",zf="::slotted",vf=new RegExp("^("+zf+")"),Ff=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Cf=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Df=/(.*):dir\((?:(ltr|rtl))\)/,qf=".",Ef=":",mf="class",Hf="should_not_match",V=new hf;function Lf(a,b,c,d){this.w=a||null;this.b=b||null;this.ja=c||[];this.G=null;this.P=d||"";this.a=this.u=this.B=null}function W(a){return a?a.__styleInfo:null}function Mf(a,b){return a.__styleInfo=b}Lf.prototype.c=function(){return this.w};Lf.prototype._getStyleRules=Lf.prototype.c;var Nf,Of=window.Element.prototype;Nf=Of.matches||Of.matchesSelector||Of.mozMatchesSelector||Of.msMatchesSelector||Of.oMatchesSelector||Of.webkitMatchesSelector;var Pf=navigator.userAgent.match("Trident");function Qf(){}function Rf(a){var b={},c=[],d=0;af(a,function(a){Sf(a);a.index=d++;a=a.i.cssText;for(var c;c=Ve.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Sf(a){if(!a.i){var b={},c={};Tf(a,c)&&(b.v=c,a.rules=null);b.cssText=a.parsedCssText.replace(Ye,"").replace(Te,"");a.i=b}}function Tf(a,b){var c=a.i;if(c){if(c.v)return Object.assign(b,c.v),!0}else{c=a.parsedCssText;for(var d;a=Te.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Uf(a,b,c){b&&(b=0<=b.indexOf(";")?Vf(a,b,c):ff(b,function(b,e,f,h){if(!e)return b+h;(e=Uf(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Uf(a,c[f]||f,c)||f;return b+(e||"")+h}));return b&&b.trim()||""}
function Vf(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Ue.lastIndex=0;if(f=Ue.exec(e))e=Uf(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var h=e.substring(f);h=h.trim();h=Uf(a,h,c)||h;e=e.substring(0,f)+h}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Wf(a,b){var c={},d=[];af(a,function(a){a.i||Sf(a);var e=a.m||a.parsedSelector;b&&a.i.v&&e&&Nf.call(b,e)&&(Tf(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{v:c,key:d}}
function Xf(a,b,c,d){b.i||Sf(b);if(b.i.v){var e=U(a);a=e.is;e=e.P;e=a?pf(a,e):"html";var f=b.parsedSelector,h=":host > *"===f||"html"===f,g=0===f.indexOf(":host")&&!h;"shady"===c&&(h=f===e+" > *."+e||-1!==f.indexOf("html"),g=!h&&0===f.indexOf(e));"shadow"===c&&(h=":host > *"===f||"html"===f,g=g&&!h);if(h||g)c=e,g&&(Q&&!b.m&&(b.m=rf(V,b,V.b,a?qf+a:"",e)),c=b.m||e),d({Xa:c,Qa:g,hb:h})}}
function Yf(a,b){var c={},d={},e=b&&b.__cssBuild;af(b,function(b){Xf(a,b,e,function(e){Nf.call(a.b||a,e.Xa)&&(e.Qa?Tf(b,c):Tf(b,d))})},null,!0);return{Wa:d,Oa:c}}
function Zf(a,b,c,d){var e=U(b),f=pf(e.is,e.P),h=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])");e=W(b).w;var g=$f(e,d);return nf(b,e,function(b){var e="";b.i||Sf(b);b.i.cssText&&(e=Vf(a,b.i.cssText,c));b.cssText=e;if(!Q&&!cf(b)&&b.cssText){var k=e=b.cssText;null==b.ra&&(b.ra=We.test(e));if(b.ra)if(null==b.W){b.W=[];for(var n in g)k=g[n],k=k(e),e!==k&&(e=k,b.W.push(n))}else{for(n=0;n<b.W.length;++n)k=g[b.W[n]],e=k(e);k=e}b.cssText=k;b.m=b.m||b.selector;e="."+d;
n=b.m.split(",");k=0;for(var w=n.length,I;k<w&&(I=n[k]);k++)n[k]=I.match(h)?I.replace(f,e):e+" "+I;b.selector=n.join(",")}})}function $f(a,b){a=a.b;var c={};if(!Q&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,h=b;f.h=new RegExp(f.keyframesName,"g");f.a=f.keyframesName+"-"+h;f.m=f.m||f.selector;f.selector=f.m.replace(f.keyframesName,f.a);c[e.keyframesName]=ag(e)}return c}function ag(a){return function(b){return b.replace(a.h,a.a)}}
function bg(a,b){var c=cg,d=bf(a);a.textContent=$e(d,function(a){var d=a.cssText=a.parsedCssText;a.i&&a.i.cssText&&(d=d.replace(Ne,"").replace(Oe,""),a.cssText=Vf(c,d,b))})}q.Object.defineProperties(Qf.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var cg=new Qf;var dg={},eg=window.customElements;if(eg&&!Q){var fg=eg.define;eg.define=function(a,b,c){var d=document.createComment(" Shady DOM styles for "+a+" "),e=document.head;e.insertBefore(d,(T?T.nextSibling:null)||e.firstChild);T=d;dg[a]=d;return fg.call(eg,a,b,c)}};function gg(){this.cache={}}gg.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({v:b,styleElement:c,u:d});100<e.length&&e.shift();this.cache[a]=e};gg.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d],f;a:{for(f=0;f<c.length;f++){var h=c[f];if(e.v[h]!==b[h]){f=!1;break a}}f=!0}if(f)return e}};function hg(){}
function ig(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode();var h=e;var g=[];h.classList?g=Array.from(h.classList):h instanceof window.SVGElement&&h.hasAttribute("class")&&(g=h.getAttribute("class").split(/\s+/));h=g;g=h.indexOf(V.a);if((h=-1<g?h[g+1]:"")&&f===e.ownerDocument)jf(e,h,!0);else if(f.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&
(f=f.host))if(f=U(f).is,h===f)for(e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+V.a+")"),f=0;f<e.length;f++)lf(e[f],h);else h&&jf(e,h,!0),jf(e,f)}}}}
if(!Q){var jg=new MutationObserver(ig),kg=function(a){jg.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)kg(document);else{var lg=function(){kg(document.body)};window.HTMLImports?window.HTMLImports.whenReady(lg):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){lg();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",a)}else lg()})}hg=function(){ig(jg.takeRecords())}}
var mg=hg;var ng={};var og=Promise.resolve();function pg(a){if(a=ng[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function qg(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function rg(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.qa||(a.qa=!0,og.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.qa=!1}))};var sg=null,tg=window.HTMLImports&&window.HTMLImports.whenReady||null,ug;function vg(a){requestAnimationFrame(function(){tg?tg(a):(sg||(sg=new Promise(function(a){ug=a}),"complete"===document.readyState?ug():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&ug()})),sg.then(function(){a&&a()}))})};var wg=new gg;function X(){var a=this;this.L={};this.c=document.documentElement;var b=new xe;b.rules=[];this.h=Mf(this.c,new Lf(b));this.s=!1;this.b=this.a=null;vg(function(){xg(a)})}p=X.prototype;p.wa=function(){mg()};p.Ma=function(a){return bf(a)};p.Za=function(a){return $e(a)};
p.prepareTemplate=function(a,b,c){if(!a.Ia){a.Ia=!0;a.name=b;a.extends=c;ng[b]=a;var d=(d=a.content.querySelector("style"))?d.getAttribute("css-build")||"":"";var e=[];for(var f=a.content.querySelectorAll("style"),h=0;h<f.length;h++){var g=f[h];if(g.hasAttribute("shady-unscoped")){if(!Q){var k=g.textContent;Ze.has(k)||(Ze.add(k),k=g.cloneNode(!0),document.head.appendChild(k));g.parentNode.removeChild(g)}}else e.push(g.textContent),g.parentNode.removeChild(g)}e=e.join("").trim();c={is:b,extends:c,
eb:d};Q||jf(a.content,b);xg(this);f=Ue.test(e)||Te.test(e);Ue.lastIndex=0;Te.lastIndex=0;e=ye(e);f&&S&&this.a&&this.a.transformRules(e,b);a._styleAst=e;a.a=d;d=[];S||(d=Rf(a._styleAst));if(!d.length||S)e=Q?a.content:null,b=dg[b],f=nf(c,a._styleAst),b=f.length?df(f,c.is,e,b):void 0,a.pa=b;a.Ha=d}};
function yg(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.ua(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.s)&&a.F()})})}function xg(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=pg);yg(a)}
p.F=function(){xg(this);if(this.b){var a=this.b.processStyles();if(this.b.enqueued){if(S)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&S&&this.a){var d=bf(c);xg(this);this.a.transformRules(d);c.textContent=$e(d)}}else for(zg(this,this.c,this.h),b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&bg(c,this.h.B);this.b.enqueued=!1;this.s&&!S&&this.styleDocument()}}};
p.styleElement=function(a,b){var c=U(a).is,d=W(a);if(!d){var e=U(a);d=e.is;e=e.P;var f=dg[d];d=ng[d];if(d){var h=d._styleAst;var g=d.Ha}d=Mf(a,new Lf(h,f,g,e))}a!==this.c&&(this.s=!0);b&&(d.G=d.G||{},Object.assign(d.G,b));if(S){if(d.G){b=d.G;for(var k in b)null===k?a.style.removeProperty(k):a.style.setProperty(k,b[k])}if(((k=ng[c])||a===this.c)&&k&&k.pa&&!qg(k)){if(qg(k)||k._applyShimValidatingVersion!==k._applyShimNextVersion)xg(this),this.a&&this.a.transformRules(k._styleAst,c),k.pa.textContent=
nf(a,d.w),rg(k);Q&&(c=a.shadowRoot)&&(c.querySelector("style").textContent=nf(a,d.w));d.w=k._styleAst}}else if(zg(this,a,d),d.ja&&d.ja.length){c=d;k=U(a).is;d=(b=wg.fetch(k,c.B,c.ja))?b.styleElement:null;h=c.u;(g=b&&b.u)||(g=this.L[k]=(this.L[k]||0)+1,g=k+"-"+g);c.u=g;g=c.u;e=cg;e=d?d.textContent||"":Zf(e,a,c.B,g);f=W(a);var l=f.a;l&&!Q&&l!==d&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));Q?f.a?(f.a.textContent=e,d=f.a):e&&(d=df(e,g,a.shadowRoot,f.b)):d?d.parentNode||
(Pf&&-1<e.indexOf("@media")&&(d.textContent=e),ef(d,null,f.b)):e&&(d=df(e,g,null,f.b));d&&(d._useCount=d._useCount||0,f.a!=d&&d._useCount++,f.a=d);g=d;Q||(d=c.u,f=e=a.getAttribute("class")||"",h&&(f=e.replace(new RegExp("\\s*x-scope\\s*"+h+"\\s*","g")," ")),f+=(f?" ":"")+"x-scope "+d,e!==f&&gf(a,f));b||wg.store(k,c.B,g,c.u)}};function Ag(a,b){return(b=b.getRootNode().host)?W(b)?b:Ag(a,b):a.c}
function zg(a,b,c){a=Ag(a,b);var d=W(a);a=Object.create(d.B||null);var e=Yf(b,c.w);b=Wf(d.w,b).v;Object.assign(a,e.Oa,b,e.Wa);b=c.G;for(var f in b)if((e=b[f])||0===e)a[f]=e;f=cg;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Uf(f,a[d],a);c.B=a}p.styleDocument=function(a){this.styleSubtree(this.c,a)};
p.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};p.ua=function(a){var b=this,c=bf(a);af(c,function(a){if(Q)If(a);else{var c=V;a.selector=a.parsedSelector;If(a);a.selector=a.m=rf(c,a,c.c,void 0,void 0)}S&&(xg(b),b.a&&b.a.transformRule(a))});S?a.textContent=$e(c):this.h.w.rules.push(c)};
p.getComputedStyleValue=function(a,b){var c;S||(c=(W(a)||W(Ag(this,a))).B[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};p.Ya=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===V.a){c=d[e+1];break}}}c&&b.push(V.a,c);S||(c=W(a))&&c.u&&b.push(cg.a,c.u);gf(a,b.join(" "))};p.Ja=function(a){return W(a)};X.prototype.flush=X.prototype.wa;
X.prototype.prepareTemplate=X.prototype.prepareTemplate;X.prototype.styleElement=X.prototype.styleElement;X.prototype.styleDocument=X.prototype.styleDocument;X.prototype.styleSubtree=X.prototype.styleSubtree;X.prototype.getComputedStyleValue=X.prototype.getComputedStyleValue;X.prototype.setElementClass=X.prototype.Ya;X.prototype._styleInfoForNode=X.prototype.Ja;X.prototype.transformCustomStyleForDocument=X.prototype.ua;X.prototype.getStyleAst=X.prototype.Ma;X.prototype.styleAstToString=X.prototype.Za;
X.prototype.flushCustomStyles=X.prototype.F;Object.defineProperties(X.prototype,{nativeShadow:{get:function(){return Q}},nativeCss:{get:function(){return S}}});var Y=new X,Bg,Cg;window.ShadyCSS&&(Bg=window.ShadyCSS.ApplyShim,Cg=window.ShadyCSS.CustomStyleInterface);window.ShadyCSS={ScopingShim:Y,prepareTemplate:function(a,b,c){Y.F();Y.prepareTemplate(a,b,c)},styleSubtree:function(a,b){Y.F();Y.styleSubtree(a,b)},styleElement:function(a){Y.F();Y.styleElement(a)},styleDocument:function(a){Y.F();Y.styleDocument(a)},getComputedStyleValue:function(a,b){return Y.getComputedStyleValue(a,b)},nativeCss:S,nativeShadow:Q};Bg&&(window.ShadyCSS.ApplyShim=Bg);
Cg&&(window.ShadyCSS.CustomStyleInterface=Cg);var Dg=window.customElements,Eg=window.HTMLImports,Fg=window.HTMLTemplateElement;window.WebComponents=window.WebComponents||{};if(Dg&&Dg.polyfillWrapFlushCallback){var Gg,Hg=function(){if(Gg){Fg.J&&Fg.J(window.document);var a=Gg;Gg=null;a();return!0}},Ig=Eg.whenReady;Dg.polyfillWrapFlushCallback(function(a){Gg=a;Ig(Hg)});Eg.whenReady=function(a){Ig(function(){Hg()?Eg.whenReady(a):a()})}}
Eg.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})});var Jg=document.createElement("style");Jg.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Kg=document.querySelector("head");Kg.insertBefore(Jg,Kg.firstChild);}).call(this);

//# sourceMappingURL=webcomponents-lite.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loop = loop;
exports.increment = increment;
// default interval as 1 second
const interval = 1000;

/**
 * loop is main loop of the game, which will be executed once every second (
 * based on the interval variable configuration)
 */
function loop(store) {
	// TODO: increment counter based on the generators in the state
	// hint: read how many "generators" in store and iterate through them to
	//       count how many value to increment to "resource"


	// TODO: triggers stories from story to display state if they are passed
	//       the `triggeredAt` points
	setTimeout(loop.bind(this, store), interval);
}

function increment(state, modifier = 1) {
	return state.counter + 1 * modifier;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Store is heavily inspired by Redux from React pattern to handle state management
class Store {
	/**
  * Create a new store with specific reducer and optionally initial state
  * @constructor
  * @param {function} reducer - the reducer to mutate state
  * @param {initialState} object - the initial state
  */
	constructor(reducer, initialState = {}) {
		this.reducer = reducer;
		// listeners are internal state to keep track of which reducers to call in this
		// order
		this.listeners = [];
		// initial internal state
		this.__state = initialState;
	}

	/**
  * Overwrites getter for `state` variable to be READ-ONLY state through
  * deepCopy method
  */
	get state() {
		return deepCopy(this.__state);
	}

	/**
  * `dispatch` controls state changes. One should use only dispatch to show
  * intent to change state and go through reducer to change so
  * @param {object} action - action should contain both `type` and `payload`
  */
	dispatch(action) {
		this.__state = this.reducer(this.state, action);
		this.listeners.forEach(l => l(this.state, action));
	}

	/**
  * subscribe allows consumer to listen for state changes
  * @param {function} listener - function contains state and action as its arguments
  */
	subscribe(listener) {
		this.listeners.push(listener);
	}

	/**
  * unsubscribe allows consumer to stop listening to state changes
  * @param {function} listener - the function consumer subscribed earlier
  */
	unsubscribe(listener) {
		this.listeners = this.listeners.filter(l => l != listener);
	}
}

exports.default = Store; /**
                          * deepCopy is helper method to create deep copy of certain object
                          * @param {object} obj - the object to copy from
                          */

function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj));
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = reducer;
function reducer(state, action) {
	switch (action.type) {
		case 'EXAMPLE_MUTATION':
			state.example = action.payload;
			return state;
		case 'MINE_BUTTON':
			state.counter += action.payload;
			return state;
		case 'BUY_GENERATOR':
			state.counter -= action.payload;
			return state;
		default:
			return state;
	}
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	return class ButtonComponent extends window.HTMLElement {
		constructor() {
			super();
			this.store = store;

			this.innerHTML = `<button>Mine Ore</button>`;

			// TODO: add click event to increment counter
			// hint: use "store.dispatch" method (see example component)
			this.querySelector('button').addEventListener('click', () => {
				this.store.dispatch({
					type: 'MINE_BUTTON',
					payload: 1
				});
				console.log('lolworks');
			});
		}
	};
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	return class CounterComponent extends window.HTMLElement {
		constructor() {
			super();
			this.store = store;
			console.log('CounterComponent Created');
			// TODO: render counter inner HTML based on the store state
			this.textContent = this.store.state.counter;
			this.onStateChange = this.handleStateChange.bind(this);
		}

		handleStateChange(newState) {
			console.log('CounterComponent#stateChange', this, newState);
			// TODO: update inner HTML based on the new state
			this.innerHTML = store.state.counter;
		}

		connectedCallback() {
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback() {
			this.store.unsubscribe(this.onStateChange);
		}
	};
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	return class ExampleComponent extends window.HTMLElement {
		constructor() {
			super();
			this.store = store;
			console.log('ExampleComponent#Got store', this.store);
			// initial DOM rendering
			this.textContent = this.store.state.example;

			this.onStateChange = this.handleStateChange.bind(this);

			// add click event
			this.addEventListener('click', () => {
				this.store.dispatch({
					type: 'EXAMPLE_MUTATION',
					payload: 'You clicked this element lol'
				});
			});
		}

		handleStateChange(newState) {
			console.log('ExampleComponent#stateChange', this);
			this.textContent = newState.example;
		}

		connectedCallback() {
			console.log('ExampleComponent#onConnectedCallback');
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback() {
			console.log('ExampleComponent#onDisconnectedCallback');
			this.store.unsubscribe(this.onStateChange);
		}
	};
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	return class GeneratorComponent extends window.HTMLElement {
		constructor() {
			super();
			this.store = store;

			// TODO: render generator initial view
			this.innerHTML = `
				<h3>Slave</h3>
				<p class="count">0</p>
				<p>A run of the mill slave it generates one ore per minute</p>
				<div class="gen-con-bottom-row-info">
					<p>1/60</p>
					<button type="button" name="buy-slave" class="buy_button">10 Ores</button>
				<div>`;
			console.log("lol");
			// TODO: subscribe to store on change event

			// TODO: add click event
		}
	};
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	return class StoryBookComponent extends window.HTMLElement {
		constructor() {
			super();
			this.store = store;

			this.onStateChange = this.handleStateChange.bind(this);
		}

		handleStateChange(newState) {
			// TODO: display story based on the state "resource" and "stories"
		}

		connectedCallback() {
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback() {
			this.store.unsubscribe(this.onStateChange);
		}
	};
};

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map