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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ({

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n(function() {\r\n  function buildHiddenInput(name, value) {\r\n    var input = document.createElement(\"input\");\r\n    input.type = \"hidden\";\r\n    input.name = name;\r\n    input.value = value;\r\n    return input;\r\n  }\r\n\r\n  function handleLinkClick(link) {\r\n    var message = link.getAttribute(\"data-confirm\");\r\n    if(message && !window.confirm(message)) {\r\n        return;\r\n    }\r\n\r\n    var to = link.getAttribute(\"data-to\"),\r\n        method = buildHiddenInput(\"_method\", link.getAttribute(\"data-method\")),\r\n        csrf = buildHiddenInput(\"_csrf_token\", link.getAttribute(\"data-csrf\")),\r\n        form = document.createElement(\"form\");\r\n\r\n    form.method = (link.getAttribute(\"data-method\") === \"get\") ? \"get\" : \"post\";\r\n    form.action = to;\r\n    form.style.display = \"hidden\";\r\n\r\n    form.appendChild(csrf);\r\n    form.appendChild(method);\r\n    document.body.appendChild(form);\r\n    form.submit();\r\n  }\r\n\r\n  window.addEventListener(\"click\", function(e) {\r\n    var element = e.target;\r\n\r\n    while (element && element.getAttribute) {\r\n      if(element.getAttribute(\"data-method\")) {\r\n        handleLinkClick(element);\r\n        e.preventDefault();\r\n        return false;\r\n      } else {\r\n        element = element.parentNode;\r\n      }\r\n    }\r\n  }, false);\r\n})();\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/phoenix_html/priv/static/phoenix_html.js\n// module id = 81\n// module chunks = 1\n\n//# sourceURL=webpack:///./~/phoenix_html/priv/static/phoenix_html.js?");

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phoenix_html__ = __webpack_require__(81);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phoenix_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phoenix_html__);\n// Brunch automatically concatenates all files in your\n// watched paths. Those paths can be configured at\n// config.paths.watched in \"brunch-config.js\".\n//\n// However, those files will only be executed if\n// explicitly imported. The only exception are files\n// in vendor, which are never wrapped in imports and\n// therefore are always executed.\n\n// Import dependencies\n//\n// If you no longer want to use a dependency, remember\n// to also remove its path from \"config.paths.watched\".\n// import \"phoenix_html\";\n// var axios = require('axios');\n//\n// axios.defaults.xsrfCookieName = 'csrftoken';\n// axios.defaults.xsrfHeaderName = 'x-csrf-token';\n// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';\n//\n// function axiosCatcher(error) {\n//  if (error != null) {\n//    if (error.hasOwnProperty('response')) {\n//      // The request was made, but the server responded with a status code\n//      // that falls out of the range of 2xx\n//      console.log(error.response.data);\n//      console.log(error.response.status);\n//      console.log(error.response.headers);\n//    } else {\n//      // Something happened in setting up the request that triggered an Error\n//      console.log('Error', error.hasOwnProperty('message') ? error.message : ' Unknown');\n//      console.log('Config', error.hasOwnProperty('config') ? error.config : ' Unknown');\n//    }\n//  }\n// }\n\n\n// import { Socket } from \"phoenix\";\n\n// Import local files\n//\n// Local files can be imported directly using relative\n// paths \"./socket\" or full ones \"web/static/js/socket\".\n\n// import socket from \"./socket\"\n\n// import { loadView } from './loader';\n//\n// function handleDOMContentLoaded() {\n//   const viewName = document.getElementsByTagName('body')[0].dataset.jsViewPath;\n//   loadView(viewName);\n// }\n//\n// window.addEventListener('DOMContentLoaded', handleDOMContentLoaded, false);\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/nibble_web/static/js/app.js\n// module id = 84\n// module chunks = 1\n\n//# sourceURL=webpack:///./lib/nibble_web/static/js/app.js?");

/***/ })

/******/ });