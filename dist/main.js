/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  /* font sizes */\\r\\n  --fs-1: 1rem;\\r\\n  --fs-2: 1.6rem;\\r\\n  --fs-3: 2rem;\\r\\n  --fs-4: 2.5rem;\\r\\n  --fs-5: 3rem;\\r\\n  --fs-6: 4rem;\\r\\n\\r\\n  /* Colors */\\r\\n  --bg-1: #e4e4e4;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 62.5%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  border: 1px solid #000;\\r\\n  font-size: var(--fs-2);\\r\\n  display: block;\\r\\n  padding: var(--fs-2);\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  cursor: pointer;\\r\\n  border-radius: var(--fs-1);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: var(--bg-1);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 80%;\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\ni {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ni:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\ni:active {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n/* ---------------------------*\\\\\\r\\n        Header\\r\\n\\\\*--------------------------- */\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  height: 72px;\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n.nav__logo {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.nav__logo img {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.nav-container {\\r\\n  height: 100%;\\r\\n  width: 80%;\\r\\n  max-width: 1200px;\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-size: var(--fs-3);\\r\\n}\\r\\n\\r\\n.nav-items {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  justify-content: space-between;\\r\\n  height: 100%;\\r\\n  align-items: center;\\r\\n  flex: 2;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.f-container {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 3rem;\\r\\n}\\r\\n\\r\\n/* ---------------------------*\\\\\\r\\n        Main list\\r\\n\\\\*--------------------------- */\\r\\n.cards {\\r\\n  font-size: var(--fs-4);\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: var(--fs-6);\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  flex-basis: 300px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: var(--fs-2);\\r\\n  padding: var(--fs-2);\\r\\n  background-color: #eee;\\r\\n  border-radius: var(--fs-2);\\r\\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.7);\\r\\n}\\r\\n\\r\\n.card__img {\\r\\n  width: 100%;\\r\\n  height: 200px;\\r\\n  object-fit: cover;\\r\\n  cursor: pointer;\\r\\n  border-radius: var(--fs-2);\\r\\n  transition: all 0.5s;\\r\\n}\\r\\n\\r\\n.card__img:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.card__desc {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  font-size: var(--fs-3);\\r\\n}\\r\\n\\r\\n.card__likes {\\r\\n  display: inline-block;\\r\\n  width: 100%;\\r\\n  text-align: end;\\r\\n  font-size: var(--fs-2);\\r\\n}\\r\\n\\r\\n.card__likes.success {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.display__none {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.left-arrow {\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 50%;\\r\\n  font-size: var(--fs-5);\\r\\n}\\r\\n\\r\\n.right-arrow {\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  top: 50%;\\r\\n  font-size: var(--fs-5);\\r\\n}\\r\\n\\r\\n/* ---------------------------*\\\\\\r\\n        Comment Popup\\r\\n\\\\*--------------------------- */\\r\\n\\r\\n.pop-up-container {\\r\\n  /* height: 100vh; */\\r\\n  padding: 2rem;\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n.card-popup {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.card-popup__img {\\r\\n  width: 100%;\\r\\n  object-fit: cover;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card-popup__img:hover {\\r\\n  /* transform: scale(1.1); */\\r\\n}\\r\\n\\r\\n.card-popup__desc {\\r\\n  margin-top: 1rem;\\r\\n  font-size: var(--fs-4);\\r\\n}\\r\\n\\r\\n.pop-up-details {\\r\\n  /* margin-top: 1rem; */\\r\\n  font-size: var(--fs-2);\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  grid-template-rows: auto auto;\\r\\n  font-style: italic;\\r\\n  gap: 1.5rem;\\r\\n}\\r\\n\\r\\n.details-obj {\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.comment-container {\\r\\n  margin-top: 1rem;\\r\\n  font-size: var(--fs-2);\\r\\n}\\r\\n\\r\\n.title-comments {\\r\\n  font-style: italic;\\r\\n  font-size: var(--fs-3);\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.comment-counter {\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.comment-list li:nth-child(even) {\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n/* ---------------------------*\\\\\\r\\n        Form Popup\\r\\n\\\\*--------------------------- */\\r\\n\\r\\n.form-popup {\\r\\n  margin-top: 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: var(--fs-2);\\r\\n  padding: var(--fs-2);\\r\\n\\r\\n  /* width: 40%; */\\r\\n}\\r\\n\\r\\n.add-comment-title {\\r\\n  font-size: var(--fs-3);\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\ninput[type='submit'] {\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.fa-times {\\r\\n  font-size: var(--fs-6);\\r\\n}\\r\\n\\r\\n.comment-item {\\r\\n  list-style: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/components/card.js":
/*!****************************************!*\
  !*** ./src/modules/components/card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * HTML code for single card\n */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((\n  cardObj,\n) => `<div class=\"card\" id=\"card_${cardObj.id}\" value=\"${cardObj.id}\">\n  <img src=\"${cardObj.thumbnail}\" alt=\"\" class=\"card__img\">\n  <div class=\"card__desc\">\n      <p>${cardObj.title}</p>\n      <i class=\"fa-regular fa-heart card__btn\"></i>\n  </div>\n  <span class=\"card__likes\">${cardObj.likes} likes</span>\n  <button class=\"card__comments comments\">Comments</button>\n  <button class=\"card__reservations\">Reservations</button>\n</div>`);\n\n\n//# sourceURL=webpack://webpack/./src/modules/components/card.js?");

/***/ }),

/***/ "./src/modules/components/comment.js":
/*!*******************************************!*\
  !*** ./src/modules/components/comment.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * HTML code for the popup\n */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((\n  popUpObj,\n) => `<div class=\"card-popup\" id=\"card_${popUpObj.id}\" value=\"${popUpObj.id}\">\n  <div class=\"close-btn\">\n    <i class=\"fa fa-times\"></i>\n  </div>\n  <img src=\"${popUpObj.image}\" alt=\"\" class=\"card-popup__img\">\n  <div class=\"card-popup__desc\">\n    <h3>${popUpObj.title}</h3>\n  </div>\n  <div class=\"pop-up-details\">\n    <span class=\"details\">Platforms: <span class=\"details-obj\">${popUpObj.platforms}</span></span>\n    <span class=\"details\">Type: <span class=\"details-obj\">${popUpObj.type}</span></span>\n    <span class=\"details\">Users: <span class=\"details-obj\">${popUpObj.users}</span></span>\n    <span class=\"details\">Worth: <span class=\"details-obj\">${popUpObj.worth}</span></span>\n  </div>\n  <div class=\"comment-container\">\n    <h3 class=\"title-comments\">Comments (<span class=\"comment-counter\"></span>)</h3>\n      <ul class=\"comment-list\">\n      </ul>\n  </div>\n  <form class=\"form-popup\">\n    <h3 class=\"add-comment-title\">Add a comment</h3>\n    <label for=\"add-name\">\n      <input type=\"text\" name=\"name\" id=\"add-name\" placeholder=\"Your name\">\n    </label>\n    <label for=\"add-insight\">\n      <textarea type=\"text\" name=\"insight\" id=\"add-insight\" placeholder=\"Your insights\"></textarea>\n    </label>\n    <label for=\"\">\n      <input type=\"submit\" class=\"submit-comment\" value=\"Comment\"></input>\n    </label>\n</form>\n</div>`);\n\n\n//# sourceURL=webpack://webpack/./src/modules/components/comment.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameAPI.js */ \"./src/modules/gameAPI.js\");\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ \"./src/modules/components/card.js\");\n/* harmony import */ var _components_comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/comment.js */ \"./src/modules/components/comment.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/modules/itemCounter.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities.js */ \"./src/modules/utilities.js\");\n\n\n\n\n\n\n\nlet previous = 0;\nlet next = 6;\nlet totalItems = 0;\n\nconst generateAPI = async (previous = 0, next = -1) => {\n  const result = await _gameAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchGames();\n  totalItems = result.length;\n  const likes = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLikes();\n  const sliceOfGames = result.slice(previous, next).map((game, index) => {\n    const like = likes.find((like) => like.item_id === index + previous + 1);\n    return {\n      id: index + 1,\n      title: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(game.title, 40),\n      thumbnail: game.thumbnail,\n      image: game.image,\n      likes: like ? like.likes : 0,\n      platforms: game.platforms,\n      type: game.type,\n      users: game.users,\n      worth: game.worth,\n    };\n  });\n  return sliceOfGames;\n};\n\n/**\n * Returns an array of generated cards\n */\n\nconst generateListOfGames = async (previous, next) => {\n  const generatedCards = [];\n  const sliceOfGames = await generateAPI(previous, next);\n  sliceOfGames.forEach((game) => {\n    generatedCards.push((0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game));\n  });\n  return generatedCards;\n};\n\n/**\n * Shows the homepage\n */\n\nconst renderHomePage = async (previous, next) => {\n  // Showing the list of cards\n\n  const cards = document.querySelector('.cards');\n  const listOfCards = await generateListOfGames(previous, next);\n  cards.innerHTML = listOfCards.join('');\n\n  // Showing the number of items in Navbar\n\n  const navGame = document.querySelector('.nav-games');\n  const numberOfDisplayedGames = (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(cards);\n  navGame.textContent = `Games (${numberOfDisplayedGames})`;\n\n  // Render comments\n  // eslint-disable-next-line no-use-before-define\n  renderComment(previous, next);\n\n  // Event listener for like buttons\n\n  const cardBtns = document.querySelectorAll('.card__btn');\n  cardBtns.forEach((cardButton, index) => {\n    cardButton.addEventListener('click', async () => {\n      await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendLike(index + previous + 1);\n      document.querySelectorAll('.card__likes')[index].classList.add('success');\n      await renderHomePage(previous, next);\n    });\n  });\n};\n\n/**\n * Generate a list of comments <li>\n */\nconst generateComments = (obj) => {\n  const arrayOfComments = obj.map(\n    (comment) => `\n    <li class=\"comment-item\">\n      <p> ${comment.creation_date} ${comment.username}: ${comment.comment}</p>\n    </li>\n    `,\n  );\n  return arrayOfComments;\n};\n\nconst renderListOfCommentsForEachCard = async (index) => {\n  const result = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getComments(index);\n  if (result.length) {\n    const liComments = generateComments(result);\n    const commentList = document.querySelector('.comment-list');\n    commentList.innerHTML = liComments.join('');\n    const commentDiv = document.querySelector('.comment-counter');\n    const numberOfDisplayedComments = (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commentList);\n    commentDiv.innerHTML = numberOfDisplayedComments;\n  }\n};\n\nconst showOrHideArrowButton = (leftArrow, rightArrow) => {\n  // Hide left Arrow if previous is equal to 0\n  if (previous === 0) {\n    leftArrow.classList.add('display__none');\n  } else {\n    leftArrow.classList.remove('display__none');\n  }\n  // Hide right Arrow if next is greater or equal to totalItems\n  if (next >= totalItems) {\n    rightArrow.classList.add('display__none');\n  } else {\n    rightArrow.classList.remove('display__none');\n  }\n};\n\nconst renderComment = async (previous, next) => {\n  // Event listener for comment buttons\n\n  const comments = document.querySelectorAll('.comments');\n  comments.forEach((commentBtn, index) => {\n    commentBtn.addEventListener('click', async () => {\n      const popUpComment = document.querySelector('.pop-up-container');\n      const cards = document.querySelector('.cards');\n      const leftArrow = document.querySelector('.left-arrow');\n      const rightArrow = document.querySelector('.right-arrow');\n      // Hide the cards from UI and show the popup\n\n      cards.classList.toggle('display__none');\n      leftArrow.classList.add('display__none');\n      rightArrow.classList.add('display__none');\n      popUpComment.classList.toggle('display__none');\n\n      // Generate the pop up object and then populate it\n      const popUpObj = await generateAPI(previous, next);\n\n      popUpComment.innerHTML = (0,_components_comment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(popUpObj[index]);\n\n      // Close Button event listener\n      const closeBtn = document.querySelector('.fa-times');\n      closeBtn.addEventListener('click', () => {\n        cards.classList.toggle('display__none');\n        popUpComment.classList.toggle('display__none');\n        showOrHideArrowButton(leftArrow, rightArrow);\n      });\n\n      // Show how many number of comments in the card\n      const commentDiv = document.querySelector('.comment-counter');\n      const numberOfDisplayedComments = (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commentDiv);\n      commentDiv.innerHTML = numberOfDisplayedComments;\n\n      // render lists of comment\n      await renderListOfCommentsForEachCard(index + previous);\n\n      // Event listener for adding a new comment\n      const form = document.querySelector('form');\n      form.addEventListener('submit', async (e) => {\n        e.preventDefault();\n        const name = e.target[0].value;\n        const comment = e.target[1].value;\n        if ((0,_utilities_js__WEBPACK_IMPORTED_MODULE_5__.checkInput)(name) && (0,_utilities_js__WEBPACK_IMPORTED_MODULE_5__.checkInput)(comment)) {\n          const response = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendComment(\n            index + previous,\n            name,\n            comment,\n          );\n          if (response === 'Created') {\n            await renderListOfCommentsForEachCard(index + previous);\n          }\n          form.reset();\n        }\n      });\n    });\n  });\n};\n\nconst updateDOM = async (previous, next) => {\n  await renderHomePage(previous, next);\n  const rightArrow = document.querySelector('.right-arrow');\n  const leftArrow = document.querySelector('.left-arrow');\n  showOrHideArrowButton(leftArrow, rightArrow);\n};\n\nconst btnsEventListener = () => {\n  const rightArrow = document.querySelector('.right-arrow');\n  const leftArrow = document.querySelector('.left-arrow');\n\n  // Event Listener on Arrow buttons\n  rightArrow.addEventListener('click', () => {\n    previous = next;\n    next += 6;\n    updateDOM(previous, next);\n  });\n  // Event Listener on Arrow buttons\n  leftArrow.addEventListener('click', () => {\n    next = previous;\n    previous -= 6;\n    updateDOM(previous, next);\n  });\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  updateDOM(previous, next);\n  btnsEventListener();\n});\n\n\n//# sourceURL=webpack://webpack/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/gameAPI.js":
/*!********************************!*\
  !*** ./src/modules/gameAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameAPI)\n/* harmony export */ });\nclass GameAPI {\n  static BASE_URL = 'https://gamerpower.p.rapidapi.com/api/giveaways';\n\n  static options = {\n    method: 'GET',\n    headers: {\n      'X-RapidAPI-Key': `${\"2574feeadcmsh18d9f29386d8dcdp1968cajsn8f2518750c4f\"}`,\n      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',\n    },\n  };\n\n  static fetchGames = async () => {\n    const data = await fetch(this.BASE_URL, this.options);\n    const response = await data.json();\n    return response;\n  };\n}\n\n//# sourceURL=webpack://webpack/./src/modules/gameAPI.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InvolvementAPI)\n/* harmony export */ });\nclass InvolvementAPI {\n  static BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"naW0t9hxXyzjpZ3Wtzsd\"}`;\n\n  static likeEndpoint = '/likes';\n\n  static commentEndPoint = '/comments';\n\n  static getLikes = async () => {\n    const data = await fetch(this.BASE_URL + this.likeEndpoint);\n    const result = await data.json();\n    return result;\n  };\n\n  static sendLike = async (id) => {\n    const data = await fetch(this.BASE_URL + this.likeEndpoint, {\n      method: 'POST',\n      body: JSON.stringify({ item_id: id }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const response = await data.text();\n    return response;\n  };\n\n  static getComments = async (index) => {\n    const URL = `${this.BASE_URL + this.commentEndPoint}?item_id=${index}`;\n    const data = await fetch(URL);\n    const result = await data.json();\n    return result;\n  };\n\n  static sendComment = async (id, name, comments) => {\n    const data = await fetch(this.BASE_URL + this.commentEndPoint, {\n      method: 'POST',\n      body: JSON.stringify({ item_id: id, username: name, comment: comments }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const response = await data.text();\n    return response;\n  };\n}\n\n\n//# sourceURL=webpack://webpack/./src/modules/involvementAPI.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((domElement) => domElement.childElementCount);\n\n\n//# sourceURL=webpack://webpack/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkInput\": () => (/* binding */ checkInput),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((str, numOfCharacters) => (str.length < numOfCharacters ? str : `${str.slice(0, numOfCharacters)}...`));\nconst checkInput = (str) => str.trim().length > 0;\n\n//# sourceURL=webpack://webpack/./src/modules/utilities.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;