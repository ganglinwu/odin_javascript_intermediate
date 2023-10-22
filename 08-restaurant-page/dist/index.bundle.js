"use strict";
(self["webpackChunk_08_restaurant_page"] = self["webpackChunk_08_restaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Avenir-Next-LT-W04-Thin.ttf */ "./src/fonts/Avenir-Next-LT-W04-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/meticula-bold.ttf */ "./src/fonts/meticula-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'cafeFont0';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
    font-family: 'cafeFont1';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
    --orange1: #ff5311;
    --orange2: #ff7844;
    --orange3: #ff9d77;
    --black: #111;
    --grey: #e6e6e6;
    --white: #fff;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    background-color: var(--black);

    font-family: 'cafeFont1';

    font-size: calc(100vw/30); /* 1rem calculated dynamically */
}

/* ------------------------------ */
/* ------- header section ------- */
/* ------------------------------ */

#header {
    width: 100vw;

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logo,
#home,
#menu,
#contact {
    font-size: 1.5rem;
    transition: all 0.2s ease-in;

    color: var(--orange2);
}

#home:hover,
#menu:hover,
#contact:hover {
    font-size: 1.8rem;
    text-decoration: underline;
}

/* ------------------------------- */
/* ------- content section ------- */
/* ------------------------------- */

#content {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: fit-content;
    margin-bottom: 3rem;
}

#splash {
    width: 100vw;
    position: relative;
}

#splash img {
    width: inherit; /* image does not command viewport */
    filter: brightness(50%); 
    height: calc(100vw - 20px);
    max-height: 748px;
    
    object-fit: cover;
    object-position: 0% 60%;
    
    position: relative;
}

.splashText1 {
    position: absolute;
    top: 0;
    
    text-align: center;
    
    
    padding: 2rem;
    
    background-color: transparent;
    
    font-family: 'cafeFont0';
    font-size: 2rem;
    
    color: var(--orange3);
}

.splashText2 {
    position: absolute;
    bottom: 0;
    left: 2rem;
    
    text-align: center;
    
    
    padding: 1rem;
    
    background-color: transparent;
    
    font-family: 'cafeFont0';
    font-size: 2rem;
    
    color: var(--orange3);
}

/* styles for menu tab */

#menuMain {
    width: 100vw;
}

#menuMain *:not(.description){
    width: inherit;
}

#foodMenu {
    display: grid;

    grid-auto-flow: row;
    grid-auto-rows: 15rem;

    gap: 3rem;

    margin-bottom: 3rem;
}

#foodMenu *img {
    object-fit: cover;
    width: 100%;
    height: inherit;

}

#foodMenu>div {
    height: inherit;

    overflow: hidden;
}

#drinkMenu {
    display: grid;

    grid-auto-flow: row;
    grid-auto-rows: 15rem;

    gap: 3rem;
}

#drinkMenu *img {
    object-fit: cover;
    width: 100%;
    height: inherit;
}

#drinkMenu>div {
    height: inherit;

    overflow: hidden;
}

.menuItemContainer,
.drinkItemContainer {
    position: relative;
}

.description {
    position: absolute;

    width: 33vw;
    max-width: 256px;

    top: 1rem;
    right: -10rem;
    background-color: transparent;
    
    color: transparent;
    font-family: 'cafeFont0';

    font-size: 1rem;
}

.menuItemContainer:hover .description{
    transition: all 0.5s ease-in;
    right: 0.5rem;
    color: #e6e6e6;
}

.menuItemContainer:hover img {
    transition: all 0.5s ease-in;
    filter: brightness(0.5);
    transform: scale(1.2);
}

.drinkItemContainer:hover .description{
    transition: all 0.5s ease-in;
    right: 0.5rem;
    color: #e6e6e6;
}

.drinkItemContainer:hover img {
    transition: all 0.5s ease-in;
    filter: brightness(0.5);
    transform: scale(1.2);
}

.title {
    color: #e6e6e6;

    font-size: 1.5rem;

    margin-top: 1rem;
}

.text {
    color: #e6e6e6;

    font-size: 0.8rem;
}

#gmapsIframe {
    width: 80vw;
    max-width: 614px;

    height: 60vw;
    max-height: 460px;

    border: none;
}

form {
    display: grid;
    grid-column: 1fr 1fr;
    grid-row: 1fr 1fr;
    gap: 1rem;
}

.partySize {
    grid-column:1/ span 2;
    grid-row: 1/ span 1;
}

.dateInput {
    grid-column: 1/ span 1;
    grid-row: 2/ span 1;
}

.timeInput {
    grid-column: 2/ span 1;
    grid-row: 2/ span 1;
}

form label {
    color: #e6e6e6;

    font-size: 0.8rem;
}

form select {
    display: flex;
    flex-direction: column;
    background-color: #e6e6e6;

    font-size: 0.8rem;
}

form option {
    background-color: #e6e6e6;

    font-size: 0.8rem;
}

button {
    background-color: var(--orange1);
    color: var(--grey);
    
    font-size: 1rem;
}

/* ------------------------------ */
/* ------- footer section ------- */
/* ------------------------------ */

#footer {
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items:center;
}

.socialMediaContainerDiv {
    
        display: flex;
        justify-content: space-evenly;
        
        width: inherit;

        padding-bottom: 2rem;
}

.socialMediaContainerDiv  img {
    height: 2rem;
    width: 2rem;
    
    background-color: var(--grey);
}

.footerText {
    color: var(--white);

    font-size: 0.8rem;
}

@media only screen and (min-width: 768px) {
    html {
        font-size: 25px;
    }
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    
    body * {
        max-width: 768px;

    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'cafeFont0';\n    src: url(./fonts/Avenir-Next-LT-W04-Thin.ttf);\n}\n@font-face {\n    font-family: 'cafeFont1';\n    src: url(./fonts/meticula-bold.ttf);\n}\n\n:root {\n    --orange1: #ff5311;\n    --orange2: #ff7844;\n    --orange3: #ff9d77;\n    --black: #111;\n    --grey: #e6e6e6;\n    --white: #fff;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n    background-color: var(--black);\n\n    font-family: 'cafeFont1';\n\n    font-size: calc(100vw/30); /* 1rem calculated dynamically */\n}\n\n/* ------------------------------ */\n/* ------- header section ------- */\n/* ------------------------------ */\n\n#header {\n    width: 100vw;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.logo,\n#home,\n#menu,\n#contact {\n    font-size: 1.5rem;\n    transition: all 0.2s ease-in;\n\n    color: var(--orange2);\n}\n\n#home:hover,\n#menu:hover,\n#contact:hover {\n    font-size: 1.8rem;\n    text-decoration: underline;\n}\n\n/* ------------------------------- */\n/* ------- content section ------- */\n/* ------------------------------- */\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    height: fit-content;\n    margin-bottom: 3rem;\n}\n\n#splash {\n    width: 100vw;\n    position: relative;\n}\n\n#splash img {\n    width: inherit; /* image does not command viewport */\n    filter: brightness(50%); \n    height: calc(100vw - 20px);\n    max-height: 748px;\n    \n    object-fit: cover;\n    object-position: 0% 60%;\n    \n    position: relative;\n}\n\n.splashText1 {\n    position: absolute;\n    top: 0;\n    \n    text-align: center;\n    \n    \n    padding: 2rem;\n    \n    background-color: transparent;\n    \n    font-family: 'cafeFont0';\n    font-size: 2rem;\n    \n    color: var(--orange3);\n}\n\n.splashText2 {\n    position: absolute;\n    bottom: 0;\n    left: 2rem;\n    \n    text-align: center;\n    \n    \n    padding: 1rem;\n    \n    background-color: transparent;\n    \n    font-family: 'cafeFont0';\n    font-size: 2rem;\n    \n    color: var(--orange3);\n}\n\n/* styles for menu tab */\n\n#menuMain {\n    width: 100vw;\n}\n\n#menuMain *:not(.description){\n    width: inherit;\n}\n\n#foodMenu {\n    display: grid;\n\n    grid-auto-flow: row;\n    grid-auto-rows: 15rem;\n\n    gap: 3rem;\n\n    margin-bottom: 3rem;\n}\n\n#foodMenu *img {\n    object-fit: cover;\n    width: 100%;\n    height: inherit;\n\n}\n\n#foodMenu>div {\n    height: inherit;\n\n    overflow: hidden;\n}\n\n#drinkMenu {\n    display: grid;\n\n    grid-auto-flow: row;\n    grid-auto-rows: 15rem;\n\n    gap: 3rem;\n}\n\n#drinkMenu *img {\n    object-fit: cover;\n    width: 100%;\n    height: inherit;\n}\n\n#drinkMenu>div {\n    height: inherit;\n\n    overflow: hidden;\n}\n\n.menuItemContainer,\n.drinkItemContainer {\n    position: relative;\n}\n\n.description {\n    position: absolute;\n\n    width: 33vw;\n    max-width: 256px;\n\n    top: 1rem;\n    right: -10rem;\n    background-color: transparent;\n    \n    color: transparent;\n    font-family: 'cafeFont0';\n\n    font-size: 1rem;\n}\n\n.menuItemContainer:hover .description{\n    transition: all 0.5s ease-in;\n    right: 0.5rem;\n    color: #e6e6e6;\n}\n\n.menuItemContainer:hover img {\n    transition: all 0.5s ease-in;\n    filter: brightness(0.5);\n    transform: scale(1.2);\n}\n\n.drinkItemContainer:hover .description{\n    transition: all 0.5s ease-in;\n    right: 0.5rem;\n    color: #e6e6e6;\n}\n\n.drinkItemContainer:hover img {\n    transition: all 0.5s ease-in;\n    filter: brightness(0.5);\n    transform: scale(1.2);\n}\n\n.title {\n    color: #e6e6e6;\n\n    font-size: 1.5rem;\n\n    margin-top: 1rem;\n}\n\n.text {\n    color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\n#gmapsIframe {\n    width: 80vw;\n    max-width: 614px;\n\n    height: 60vw;\n    max-height: 460px;\n\n    border: none;\n}\n\nform {\n    display: grid;\n    grid-column: 1fr 1fr;\n    grid-row: 1fr 1fr;\n    gap: 1rem;\n}\n\n.partySize {\n    grid-column:1/ span 2;\n    grid-row: 1/ span 1;\n}\n\n.dateInput {\n    grid-column: 1/ span 1;\n    grid-row: 2/ span 1;\n}\n\n.timeInput {\n    grid-column: 2/ span 1;\n    grid-row: 2/ span 1;\n}\n\nform label {\n    color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\nform select {\n    display: flex;\n    flex-direction: column;\n    background-color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\nform option {\n    background-color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\nbutton {\n    background-color: var(--orange1);\n    color: var(--grey);\n    \n    font-size: 1rem;\n}\n\n/* ------------------------------ */\n/* ------- footer section ------- */\n/* ------------------------------ */\n\n#footer {\n    width: 100vw;\n\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n}\n\n.socialMediaContainerDiv {\n    \n        display: flex;\n        justify-content: space-evenly;\n        \n        width: inherit;\n\n        padding-bottom: 2rem;\n}\n\n.socialMediaContainerDiv  img {\n    height: 2rem;\n    width: 2rem;\n    \n    background-color: var(--grey);\n}\n\n.footerText {\n    color: var(--white);\n\n    font-size: 0.8rem;\n}\n\n@media only screen and (min-width: 768px) {\n    html {\n        font-size: 25px;\n    }\n    body {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        \n    }\n    \n    body * {\n        max-width: 768px;\n\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function loadContact(openingHours) {
    const contactMainDiv = (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    contactMainDiv.setAttribute('id', 'contactMainDiv');

    /* ------------------------------------ */
    /* --------- where to find us --------- */
    /* ------------------------------------ */
    const contactTitle = (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)('title');
    contactTitle.innerText = 'Where to Find us!'
    const gmapsIframe = document.createElement('iframe');
    gmapsIframe.setAttribute('id', 'gmapsIframe')
  
    gmapsIframe.allowFullscreen='';
    gmapsIframe.loading='lazy';
    gmapsIframe.referrerPolicy='no-referrer-when-downgrade';

    gmapsIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6912681612303!2d103.88319307584166!3d1.3618939986252117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17b48481c657%3A0xa51fa321551b358e!2sPentagon%20Learning%20%7C%20Sec%203%204%20A%20Math%20Tuition%20JC%20H2%20Math%20Tuition!5e0!3m2!1sen!2ssg!4v1697636299324!5m2!1sen!2ssg"
    
    contactMainDiv.appendChild(contactTitle);
    contactMainDiv.appendChild(gmapsIframe);

    /* --------------------------------- */
    /* --------- opening hours --------- */
    /* ---------------------------------- */
    const openingHoursTitle = (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)('title');
    openingHoursTitle.innerText = 'Opening Hours'
    const openingHoursText = (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)('text');
    openingHoursText.innerText = `Weekdays ${openingHours.wkdayOpen}am - ${openingHours.wkdayClose%12}pm \n Weekends ${openingHours.wkendOpen}am - ${openingHours.wkendClose%12}pm \n Closed on Tuesdays`


    contactMainDiv.appendChild(openingHoursTitle);
    contactMainDiv.appendChild(openingHoursText);


    
    /* ------------------------------------ */
    /* --------- reservation form --------- */
    /* ------------------------------------ */
   
    // create title and append
    const reserveTitle = (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)('title')
    reserveTitle.innerText = 'Make a reservation'

    contactMainDiv.appendChild(reserveTitle);

    // create form
    const form = document.createElement('form');
    form.action = '';
    form.method = 'post'

    // form will have 3 dropdown inputs
    // 1) party size
    // 2) date
    // 3) time

    let dateTimeArr = [];
    let dateToday = new Date();
    
    while (dateTimeArr.length < 3) {
        dateTimeArr.push(openingHours.nextAvailableTime(dateToday));
        dateToday.setDate(dateToday.getDate() + 1);
        if (dateToday.getDay() === 0 || dateToday.getDay() === 6) {
            dateToday.setHours(openingHours.wkendOpen-1, 59);
        } else {
            dateToday.setHours(openingHours.wkdayOpen-1, 59);
        }
    }

    let dateArr = []
    dateTimeArr.forEach((element)=> {
        dateArr.push(element[0]);
    })

    let timeArr = [...dateTimeArr[0][1]];

    const partySizeInput = createDropdown('partySize', 'Party Size', 'partySize', 1, [1,2,3,4,5,6],'partySize');

    const dateInput = createDropdown('dateInput', 'Date', 'date', 1, dateArr , 'dateInput');

    const timeInput = createDropdown('timeInput', 'Time', 'time', 1, timeArr ,'timeInput');

    // create button
    const btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.innerText = 'Reserve a table'
    
    form.appendChild(partySizeInput);
    form.appendChild(dateInput);
    form.appendChild(timeInput);
    form.appendChild(btn);

    contactMainDiv.appendChild(form);

    return contactMainDiv
}


// helper function to create dropdown and label, returns both elements under a div
function createDropdown(id, labelName, inputName, dropdownSize, optionsArr, className) {
    const inputWrapper = (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)(className)

    // create label for dropdown
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', id);
    labelElement.innerText = labelName

    // create select input
    const dropdownElement = document.createElement('select');
    dropdownElement.setAttribute('id', id);
    dropdownElement.setAttribute('name', inputName);
    dropdownElement.setAttribute('size', dropdownSize);
    dropdownElement.setAttribute('required', '');

    // create options
    optionsArr.forEach((element) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', element);
        optionElement.innerText = element

        dropdownElement.appendChild(optionElement)
    })


    inputWrapper.appendChild(labelElement);
    inputWrapper.appendChild(dropdownElement);


    return inputWrapper
}



/***/ }),

/***/ "./src/dateTimeGenerator.js":
/*!**********************************!*\
  !*** ./src/dateTimeGenerator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpeningHours)
/* harmony export */ });
// IIFE to extend Date object prototype

(function () {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };

    Date.prototype.getMonthName = function () {
        return months[this.getMonth()];
    };
})();


// date time generator class

class OpeningHours {
    constructor(wkdayOpen, wkdayClose, wkendOpen, wkendClose) {
        this.wkdayOpen = wkdayOpen;
        this.wkdayClose = wkdayClose;
        this.wkendOpen = wkendOpen;
        this.wkendClose = wkendClose;
        this.wkdaySlots = this._generateTimeSlots(wkdayOpen, wkdayClose);
        this.wkendSlots = this._generateTimeSlots(wkendOpen, wkendClose);
    }

    _isWkend(dateObj) {
        if (dateObj.getDay()===0 || dateObj.getDay() === 6) {
            return true
        } else return false
    }

    _cafeIsClosed(dateObj) {
        if (this._isWkend) {
            if (dateObj.getHours()< this.wkendClose) {
                return false
            } else return true
        } else {
            if (dateObj.getHours() < this.wkdayClose) {
                return false
            } else return true
        }
    }

    nextAvailableTime(dateObj) {
        if (dateObj.getDay() === 2) {
            // check because cafe is closed tuesdays

            // note: there's no need to clone! we SHOULD change the dateObj directly
            dateObj.setDate(dateObj.getDate() + 1);
            dateObj.setHours(this.wkdayOpen - 1);


            return this.nextAvailableTime(dateObj);
        } else if (this._cafeIsClosed(dateObj)) {
            // check if cafe is closed (after 6pm)
     
            // note: there's no need to clone! we SHOULD change the dateObj directly
            dateObj.setDate(dateObj.getDate() + 1);
            if (this._isWkend(dateObj)) {
                dateObj.setHours(this.wkendOpen - 1);
            } else {
                dateObj.setHours(this.wkdayOpen - 1);
            }
            return this.nextAvailableTime(dateObj);           
        } else {
            // else return current date in str form
            // also return the remainingOpeningHours in an Array
            

            const dateStr = `(${dateObj.getDayName()}) ${dateObj.getMonthName()} ${dateObj.getDate()}, ${dateObj.getFullYear()}`
            // e.g. (Fri) Oct 20, 2023
            let remainingOpenHoursArr= this.getRemainingTimeSlotsToday(dateObj)
            
            return [dateStr, remainingOpenHoursArr]
        }
    }

    // generate datestr of next 3 days cafe is open(inclusive of today)


    // generate remaining timeslots based on time now
    getRemainingTimeSlotsToday(dateObj) {
        let remainingOpenHoursArr = [];
        if (this._isWkend(dateObj)) {
            remainingOpenHoursArr = [...this.wkendSlots];
            while (dateObj.getHours() > Number(remainingOpenHoursArr[0].substring(0,2))) {
                remainingOpenHoursArr.shift();
                }
            if (dateObj.getHours() == Number(remainingOpenHoursArr[0].substring(0,2)) && dateObj.getMinutes()>Number(remainingOpenHoursArr[0].slice(-2,))) {
                remainingOpenHoursArr.shift();
                }
            } else {
            remainingOpenHoursArr = [...this.wkdaySlots];
            while (dateObj.getHours() > Number(remainingOpenHoursArr[0].substring(0,2))) {
                remainingOpenHoursArr.shift();
            } 
            if (dateObj.getHours() == Number(remainingOpenHoursArr[0].substring(0,2)) &&dateObj.getMinutes()>30) {
                remainingOpenHoursArr.shift();
            }   
        }
        return remainingOpenHoursArr;
    }

    // helper function to generate time slots based on opening closing time
    _generateTimeSlots(open,close) {
        let timeSlotArr = []
        while (open < close) {
            if (open<10) {
                timeSlotArr.push('0'+open+':00');
                timeSlotArr.push('0'+open+':30');
                open+=1;
            } else {
                timeSlotArr.push(''+open+':00');
                timeSlotArr.push(''+open+':30');
                open+=1;
            }
        }
        return timeSlotArr;
    }
}

// Questions
// 1) if i called OpeningHours.nextAvailableTime() from another file, would it have access to the IIFE?
// 2) need to implement something of while (availableDatesArr.length < 3) {generate more dates}
//    (will probably need to keep a counter to increment by 1)
//
// Answers
// 1) Yes

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _img_latte_art_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/latte-art.jpeg */ "./src/img/latte-art.jpeg");




function loadHome() {
    //create splash container
    const splash = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('splash');
    splash.setAttribute('id', 'splash')

    //create img 
    const splashImgElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createIMG)(_img_latte_art_jpeg__WEBPACK_IMPORTED_MODULE_1__)

    //create text div with class 'splashText1'
    const splashText1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('splashText1');
    splashText1.innerText = 'COME TO ODIN\'S'
    
    //create text div with class 'splashText2'
    const splashText2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('splashText2');
    splashText2.innerText = 'FOR A WARM CUPPA JOY!'
    
    //append img to splash
    splash.appendChild(splashImgElement);
    splash.appendChild(splashText1);
    splash.appendChild(splashText2);
    
    //return (and append to content div)
    return splash
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createIMG: () => (/* binding */ createIMG)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_fb_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/fb.svg */ "./src/img/fb.svg");
/* harmony import */ var _img_insta_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/insta.svg */ "./src/img/insta.svg");
/* harmony import */ var _img_logo_black_coloured_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/logo-black-coloured.png */ "./src/img/logo-black-coloured.png");
/* harmony import */ var _dateTimeGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dateTimeGenerator.js */ "./src/dateTimeGenerator.js");













// create header
const header = createDiv();
header.setAttribute('id','header');

const logoElement = createIMG(_img_logo_black_coloured_png__WEBPACK_IMPORTED_MODULE_6__, 'logo');
logoElement.style.height = '6rem';
logoElement.style.width = '6rem';
header.appendChild(logoElement);

// create clickable tabs
['Home', 'Menu', 'Contact'].forEach((item) => {
    const div = createDiv();
    div.setAttribute('id', item.toLowerCase());
    div.innerText=item;
    header.appendChild(div);
})

document.body.appendChild(header)

// create content area
const contentDiv = createDiv();
contentDiv.setAttribute('id', 'content');
document.body.appendChild(contentDiv); 

// create footer
const footer = createDiv();
footer.setAttribute('id', 'footer');

// create social media container div
const socialMediaContainerDiv = createDiv('socialMediaContainerDiv');


[_img_fb_svg__WEBPACK_IMPORTED_MODULE_4__, _img_insta_svg__WEBPACK_IMPORTED_MODULE_5__].forEach((imgFile)=> {
    const imgElement = createIMG(imgFile);
    socialMediaContainerDiv.appendChild(imgElement);
});
footer.appendChild(socialMediaContainerDiv);

// photo credits - do not remove
const photoCredits = createDiv()
photoCredits.classList.add('footerText');
photoCredits.innerText = 'Photo by Praful Das www.pexels.com'

footer.appendChild(photoCredits);

document.body.appendChild(footer);


// eventlistener for home, menu, contact tabs

['Home', 'Menu', 'Contact'].forEach((item) => {
    document.getElementById(item.toLowerCase()).addEventListener('click', loadTab);
})

// helper function to create divs
function createDiv(className) {
    const div = document.createElement('div');
    if (className) {
        // if className empty don't add class to div
        div.classList.add(className);
    }
    return div
}

// helper function to create img elements
function createIMG(imgsrc, className) {
    const imgElement = new Image();
    imgElement.src = imgsrc;
    if (className) {
        imgElement.classList.add(className);
    }
    return imgElement;
}


// export createDiv and createIMG

// helper function to remvoe all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function to load tab based on click event

function loadTab(evt) {
    removeAllChildNodes(contentDiv);
    let openingHours = new _dateTimeGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"](11, 18, 9, 18);
    switch (evt.target.id) {
        case 'home':
            contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
            photoCredits.innerText = 'Photo by Praful Das www.pexels.com'
            break;
        case 'menu':
            contentDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
            photoCredits.innerText = 'Photo by serhii_bobyk on Freepik \n Photo by Arya Bajra www.pexels.com \n Photo by Dzenina Lukac www.pexels.com \n Photo by Pixabay www.pexels.com \n Photo by Natan Machado Fotografia Gastronômica www.pexels.com \n Photo by Kristina Paukshtite www.pexels.com \n Photo by Victor Freitas www.pexels.com \n Photo by Chevanon Photography www.pexels.com \n Photo by Casa Norte www.pexels.com \n Photo by Charlotte May www.pexels.com'
            break;
        case 'contact':
            contentDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])(openingHours));
            photoCredits.innerText = ''
            addEvtListener(openingHours)
            break;
    }
}

// load home page by default
window.addEventListener('DOMContentLoaded', contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()));

// function to add event listener to update time slots when choosing dates
function addEvtListener(OpeningHours) {
    const timeDropdownMenu = document.getElementById('timeInput');
    const dateDropdownMenu = document.getElementById('dateInput');
    dateDropdownMenu.addEventListener('change', (evt)=> {
        removeAllChildNodes(timeDropdownMenu)
        console.log(evt);
        console.log(evt.target[0].selected);
        const chosenDate = new Date(evt.target.value);
        if (evt.target[0].selected) {
            const timeSlotToday = OpeningHours.getRemainingTimeSlotsToday(new Date());
            timeSlotToday.forEach((element) => {
                const optionElement = document.createElement('option');
                    optionElement.setAttribute('value', element);
                    optionElement.innerText = element
        
                    timeDropdownMenu.appendChild(optionElement)
            })
        } else {
            if (chosenDate.getDay()===6 || chosenDate.getDay()===0) {
                OpeningHours.wkendSlots.forEach((element)=> {
                    const optionElement = document.createElement('option');
                    optionElement.setAttribute('value', element);
                    optionElement.innerText = element
        
                    timeDropdownMenu.appendChild(optionElement)
                })
            } else {
                OpeningHours.wkdaySlots.forEach((element)=> {
                    const optionElement = document.createElement('option');
                    optionElement.setAttribute('value', element);
                    optionElement.innerText = element
        
                    timeDropdownMenu.appendChild(optionElement)
            })
        }
        }
    })
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _img_menu1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu1.png */ "./src/img/menu1.png");
/* harmony import */ var _img_menu2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu2.png */ "./src/img/menu2.png");
/* harmony import */ var _img_menu3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu3.png */ "./src/img/menu3.png");
/* harmony import */ var _img_menu4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu4.png */ "./src/img/menu4.png");
/* harmony import */ var _img_menu5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu5.png */ "./src/img/menu5.png");
/* harmony import */ var _img_menu6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu6.png */ "./src/img/menu6.png");
/* harmony import */ var _img_coffee1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/coffee1.png */ "./src/img/coffee1.png");
/* harmony import */ var _img_coffee2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/coffee2.png */ "./src/img/coffee2.png");
/* harmony import */ var _img_coffee3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/coffee3.png */ "./src/img/coffee3.png");
/* harmony import */ var _img_tea1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/tea1.png */ "./src/img/tea1.png");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! . */ "./src/index.js");













const foodImgArray = [[_img_menu1_png__WEBPACK_IMPORTED_MODULE_0__,'TIROKROKETES \n fried cheese balls, greek feta, soft gouda, cheddar, eggplant, fresh basil leaves '], 
                        [_img_menu2_png__WEBPACK_IMPORTED_MODULE_1__, 'ONION RINGS \n breaded onion rings, mayo-sriracha sauce'],
                         [_img_menu3_png__WEBPACK_IMPORTED_MODULE_2__, 'TRUFFLE FRIES \n belgium potato, white truffle oil, grated parmesan'],
                          [_img_menu4_png__WEBPACK_IMPORTED_MODULE_3__, 'PAPRIKA CRISPY WINGS \n hand breaded, lightly tossed in paprika powder'],
                           [_img_menu5_png__WEBPACK_IMPORTED_MODULE_4__, 'MEAT LOVER BURGER \n double cheese, onion rings, bacon, 100g grain fed beef patty, potato bun'],
                            [_img_menu6_png__WEBPACK_IMPORTED_MODULE_5__, 'CLASSIC MAGHERITA \n fresh tomato sauce, mozzarella, fresh basil leaves, olive oil']]
const drinkImgArray = [[_img_coffee1_png__WEBPACK_IMPORTED_MODULE_6__, 'DRIP COFFEE \n ethiopia, notes: berries, elderflower'],
                        [_img_coffee2_png__WEBPACK_IMPORTED_MODULE_7__, 'ESPRESSO \n single/double shot'],
                         [_img_coffee3_png__WEBPACK_IMPORTED_MODULE_8__, 'ICED AMERICANO \n single shot espresso, filtered water'],
                          [_img_tea1_png__WEBPACK_IMPORTED_MODULE_9__, 'MATCHA LATTE \n uji matcha espresso, soy/oat milk ']]

;


function loadMenu() {
    const menuMainDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)();
    menuMainDiv.setAttribute('id', 'menuMain');

    /* --------------------------------- */
    /* ----------- food menu ----------- */
    /* --------------------------------- */

    const foodMenuDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)();
    foodMenuDiv.setAttribute('id', 'foodMenu');

    foodImgArray.forEach((element) => {
       const menuItem = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)('menuItemContainer');
       const imgElement = (0,___WEBPACK_IMPORTED_MODULE_10__.createIMG)(element[0], 'menu');
       const descriptionDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)('description');
       descriptionDiv.innerText = element[1];

       menuItem.appendChild(imgElement);
       menuItem.appendChild(descriptionDiv);

       foodMenuDiv.appendChild(menuItem);
   })

    menuMainDiv.appendChild(foodMenuDiv);
    
    /* ----------------------------------- */
    /* ----------- drinks menu ----------- */
    /* ----------------------------------- */
    
    const drinkMenuDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)();
    drinkMenuDiv.setAttribute('id', 'drinkMenu');

    drinkImgArray.forEach((element) => {
        const menuItem = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)('drinkItemContainer');
        const imgElement = (0,___WEBPACK_IMPORTED_MODULE_10__.createIMG)(element[0], 'drink');
        const descriptionDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)('description');
        descriptionDiv.innerText = element[1]

        menuItem.appendChild(imgElement);
        menuItem.appendChild(descriptionDiv);

        drinkMenuDiv.appendChild(menuItem);
    })

    menuMainDiv.appendChild(drinkMenuDiv);

    return menuMainDiv
}

// Photo by serhii_bobyk on Freepik
// Photo by Arya Bajra www.pexels.com
// Photo by Dzenina Lukac www.pexels.com
// Photo by Pixabay www.pexels.com
// Photo by Natan Machado Fotografia Gastronômica www.pexels.com
// Photo by Kristina Paukshtite www.pexels.com


// Photo by Victor Freitas www.pexels.com
// Photo by Chevanon Photography www.pexels.com
// Photo by Casa Norte www.pexels.com

// Photo by Charlotte May www.pexels.com

/***/ }),

/***/ "./src/fonts/Avenir-Next-LT-W04-Thin.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/Avenir-Next-LT-W04-Thin.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba707bed3259772e7d24.ttf";

/***/ }),

/***/ "./src/fonts/meticula-bold.ttf":
/*!*************************************!*\
  !*** ./src/fonts/meticula-bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25b58f539b49cec14ea4.ttf";

/***/ }),

/***/ "./src/img/coffee1.png":
/*!*****************************!*\
  !*** ./src/img/coffee1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9719aec5e58d7d2048ee.png";

/***/ }),

/***/ "./src/img/coffee2.png":
/*!*****************************!*\
  !*** ./src/img/coffee2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3a11d7489067198c32b.png";

/***/ }),

/***/ "./src/img/coffee3.png":
/*!*****************************!*\
  !*** ./src/img/coffee3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15e2db794b3a018eacf5.png";

/***/ }),

/***/ "./src/img/fb.svg":
/*!************************!*\
  !*** ./src/img/fb.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caeb0adc042294372ec3.svg";

/***/ }),

/***/ "./src/img/insta.svg":
/*!***************************!*\
  !*** ./src/img/insta.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaa957f02fe3257f3533.svg";

/***/ }),

/***/ "./src/img/latte-art.jpeg":
/*!********************************!*\
  !*** ./src/img/latte-art.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "352dd759984558e3d91f.jpeg";

/***/ }),

/***/ "./src/img/logo-black-coloured.png":
/*!*****************************************!*\
  !*** ./src/img/logo-black-coloured.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc6ae95cb0f5dc55a6b4.png";

/***/ }),

/***/ "./src/img/menu1.png":
/*!***************************!*\
  !*** ./src/img/menu1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d2a285f99dc80c16c99.png";

/***/ }),

/***/ "./src/img/menu2.png":
/*!***************************!*\
  !*** ./src/img/menu2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2880ba7d00d149c8906.png";

/***/ }),

/***/ "./src/img/menu3.png":
/*!***************************!*\
  !*** ./src/img/menu3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e75b0684f6c4397a31a.png";

/***/ }),

/***/ "./src/img/menu4.png":
/*!***************************!*\
  !*** ./src/img/menu4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f6f7d13545d0cb60f73.png";

/***/ }),

/***/ "./src/img/menu5.png":
/*!***************************!*\
  !*** ./src/img/menu5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1824dcbaf79a1572999f.png";

/***/ }),

/***/ "./src/img/menu6.png":
/*!***************************!*\
  !*** ./src/img/menu6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c96fdbf4ea162885e99.png";

/***/ }),

/***/ "./src/img/tea1.png":
/*!**************************!*\
  !*** ./src/img/tea1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "059a90eac8558a844030.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsNENBQTRDLCtIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsY0FBYyx5QkFBeUIsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxRQUFRLFlBQVksY0FBYyxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxjQUFjLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsY0FBYyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsYUFBYSxXQUFXLFVBQVUsYUFBYSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxV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QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBUztBQUNsQzs7QUFFQTtBQUNBLHlCQUF5Qiw2Q0FBUztBQUNsQywyQkFBMkIsNkNBQVM7QUFDcEMsK0JBQStCLDZDQUFTO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGF0ZVRpbWVHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0F2ZW5pci1OZXh0LUxULVcwNC1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvbWV0aWN1bGEtYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbjpyb290IHtcbiAgICAtLW9yYW5nZTE6ICNmZjUzMTE7XG4gICAgLS1vcmFuZ2UyOiAjZmY3ODQ0O1xuICAgIC0tb3JhbmdlMzogI2ZmOWQ3NztcbiAgICAtLWJsYWNrOiAjMTExO1xuICAgIC0tZ3JleTogI2U2ZTZlNjtcbiAgICAtLXdoaXRlOiAjZmZmO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDEnO1xuXG4gICAgZm9udC1zaXplOiBjYWxjKDEwMHZ3LzMwKTsgLyogMXJlbSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLSBoZWFkZXIgc2VjdGlvbiAtLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ28sXG4jaG9tZSxcbiNtZW51LFxuI2NvbnRhY3Qge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMik7XG59XG5cbiNob21lOmhvdmVyLFxuI21lbnU6aG92ZXIsXG4jY29udGFjdDpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0gY29udGVudCBzZWN0aW9uIC0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4jc3BsYXNoIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jc3BsYXNoIGltZyB7XG4gICAgd2lkdGg6IGluaGVyaXQ7IC8qIGltYWdlIGRvZXMgbm90IGNvbW1hbmQgdmlld3BvcnQgKi9cbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTsgXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMjBweCk7XG4gICAgbWF4LWhlaWdodDogNzQ4cHg7XG4gICAgXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA2MCU7XG4gICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3BsYXNoVGV4dDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIFxuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XG59XG5cbi5zcGxhc2hUZXh0MiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAycmVtO1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTMpO1xufVxuXG4vKiBzdHlsZXMgZm9yIG1lbnUgdGFiICovXG5cbiNtZW51TWFpbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4jbWVudU1haW4gKjpub3QoLmRlc2NyaXB0aW9uKXtcbiAgICB3aWR0aDogaW5oZXJpdDtcbn1cblxuI2Zvb2RNZW51IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBncmlkLWF1dG8tcm93czogMTVyZW07XG5cbiAgICBnYXA6IDNyZW07XG5cbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4jZm9vZE1lbnUgKmltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuXG59XG5cbiNmb29kTWVudT5kaXYge1xuICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNkcmlua01lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGdyaWQtYXV0by1yb3dzOiAxNXJlbTtcblxuICAgIGdhcDogM3JlbTtcbn1cblxuI2RyaW5rTWVudSAqaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbiNkcmlua01lbnU+ZGl2IHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVudUl0ZW1Db250YWluZXIsXG4uZHJpbmtJdGVtQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgd2lkdGg6IDMzdnc7XG4gICAgbWF4LXdpZHRoOiAyNTZweDtcblxuICAgIHRvcDogMXJlbTtcbiAgICByaWdodDogLTEwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG5cbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5tZW51SXRlbUNvbnRhaW5lcjpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICByaWdodDogMC41cmVtO1xuICAgIGNvbG9yOiAjZTZlNmU2O1xufVxuXG4ubWVudUl0ZW1Db250YWluZXI6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLmRyaW5rSXRlbUNvbnRhaW5lcjpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICByaWdodDogMC41cmVtO1xuICAgIGNvbG9yOiAjZTZlNmU2O1xufVxuXG4uZHJpbmtJdGVtQ29udGFpbmVyOmhvdmVyIGltZyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6ICNlNmU2ZTY7XG5cbiAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogI2U2ZTZlNjtcblxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4jZ21hcHNJZnJhbWUge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIG1heC13aWR0aDogNjE0cHg7XG5cbiAgICBoZWlnaHQ6IDYwdnc7XG4gICAgbWF4LWhlaWdodDogNDYwcHg7XG5cbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDFmciAxZnI7XG4gICAgZ3JpZC1yb3c6IDFmciAxZnI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucGFydHlTaXplIHtcbiAgICBncmlkLWNvbHVtbjoxLyBzcGFuIDI7XG4gICAgZ3JpZC1yb3c6IDEvIHNwYW4gMTtcbn1cblxuLmRhdGVJbnB1dCB7XG4gICAgZ3JpZC1jb2x1bW46IDEvIHNwYW4gMTtcbiAgICBncmlkLXJvdzogMi8gc3BhbiAxO1xufVxuXG4udGltZUlucHV0IHtcbiAgICBncmlkLWNvbHVtbjogMi8gc3BhbiAxO1xuICAgIGdyaWQtcm93OiAyLyBzcGFuIDE7XG59XG5cbmZvcm0gbGFiZWwge1xuICAgIGNvbG9yOiAjZTZlNmU2O1xuXG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmZvcm0gc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcblxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5mb3JtIG9wdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcblxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTEpO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLSBmb290ZXIgc2VjdGlvbiAtLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2Zvb3RlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuLnNvY2lhbE1lZGlhQ29udGFpbmVyRGl2IHtcbiAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcblxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnNvY2lhbE1lZGlhQ29udGFpbmVyRGl2ICBpbWcge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLmZvb3RlclRleHQge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICAgIGJvZHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgYm9keSAqIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcblxuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBNkM7QUFDakQ7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjs7SUFFdEIsOEJBQThCOztJQUU5Qix3QkFBd0I7O0lBRXhCLHlCQUF5QixFQUFFLGdDQUFn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QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjs7SUFFbEIsZUFBZTtBQUNuQjs7QUFFQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQzs7QUFFbkM7SUFDSSxZQUFZOztJQUVaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztRQUVRLGFBQWE7UUFDYiw2QkFBNkI7O1FBRTdCLGNBQWM7O1FBRWQsb0JBQW9CO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0lBRVgsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1COztJQUVuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1COztJQUV2Qjs7SUFFQTtRQUNJLGdCQUFnQjs7SUFFcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0F2ZW5pci1OZXh0LUxULVcwNC1UaGluLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvbWV0aWN1bGEtYm9sZC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tb3JhbmdlMTogI2ZmNTMxMTtcXG4gICAgLS1vcmFuZ2UyOiAjZmY3ODQ0O1xcbiAgICAtLW9yYW5nZTM6ICNmZjlkNzc7XFxuICAgIC0tYmxhY2s6ICMxMTE7XFxuICAgIC0tZ3JleTogI2U2ZTZlNjtcXG4gICAgLS13aGl0ZTogI2ZmZjtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XFxuXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMDB2dy8zMCk7IC8qIDFyZW0gY2FsY3VsYXRlZCBkeW5hbWljYWxseSAqL1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGhlYWRlciBzZWN0aW9uIC0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxvZ28sXFxuI2hvbWUsXFxuI21lbnUsXFxuI2NvbnRhY3Qge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG5cXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTIpO1xcbn1cXG5cXG4jaG9tZTpob3ZlcixcXG4jbWVudTpob3ZlcixcXG4jY29udGFjdDpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gY29udGVudCBzZWN0aW9uIC0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4jc3BsYXNoIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNzcGxhc2ggaW1nIHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7IC8qIGltYWdlIGRvZXMgbm90IGNvbW1hbmQgdmlld3BvcnQgKi9cXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7IFxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgbWF4LWhlaWdodDogNzQ4cHg7XFxuICAgIFxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA2MCU7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zcGxhc2hUZXh0MSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTMpO1xcbn1cXG5cXG4uc3BsYXNoVGV4dDIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMnJlbTtcXG4gICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UzKTtcXG59XFxuXFxuLyogc3R5bGVzIGZvciBtZW51IHRhYiAqL1xcblxcbiNtZW51TWFpbiB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuI21lbnVNYWluICo6bm90KC5kZXNjcmlwdGlvbil7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbn1cXG5cXG4jZm9vZE1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBncmlkLWF1dG8tcm93czogMTVyZW07XFxuXFxuICAgIGdhcDogM3JlbTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuI2Zvb2RNZW51ICppbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG5cXG59XFxuXFxuI2Zvb2RNZW51PmRpdiB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2RyaW5rTWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxNXJlbTtcXG5cXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4jZHJpbmtNZW51ICppbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuI2RyaW5rTWVudT5kaXYge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51SXRlbUNvbnRhaW5lcixcXG4uZHJpbmtJdGVtQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIHdpZHRoOiAzM3Z3O1xcbiAgICBtYXgtd2lkdGg6IDI1NnB4O1xcblxcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAtMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbntcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcXG4gICAgcmlnaHQ6IDAuNXJlbTtcXG4gICAgY29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi5tZW51SXRlbUNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uZHJpbmtJdGVtQ29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbntcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcXG4gICAgcmlnaHQ6IDAuNXJlbTtcXG4gICAgY29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi5kcmlua0l0ZW1Db250YWluZXI6aG92ZXIgaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6ICNlNmU2ZTY7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiAjZTZlNmU2O1xcblxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2dtYXBzSWZyYW1lIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIG1heC13aWR0aDogNjE0cHg7XFxuXFxuICAgIGhlaWdodDogNjB2dztcXG4gICAgbWF4LWhlaWdodDogNDYwcHg7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xcbiAgICBncmlkLXJvdzogMWZyIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGFydHlTaXplIHtcXG4gICAgZ3JpZC1jb2x1bW46MS8gc3BhbiAyO1xcbiAgICBncmlkLXJvdzogMS8gc3BhbiAxO1xcbn1cXG5cXG4uZGF0ZUlucHV0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDIvIHNwYW4gMTtcXG59XFxuXFxuLnRpbWVJbnB1dCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAyLyBzcGFuIDE7XFxufVxcblxcbmZvcm0gbGFiZWwge1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG5cXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmZvcm0gc2VsZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG5cXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmZvcm0gb3B0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG5cXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTEpO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gZm9vdGVyIHNlY3Rpb24gLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLnNvY2lhbE1lZGlhQ29udGFpbmVyRGl2IHtcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcblxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbi5zb2NpYWxNZWRpYUNvbnRhaW5lckRpdiAgaW1nIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZm9vdGVyVGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgIGJvZHkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIGJvZHkgKiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xcblxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRGl2LCByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSBcIi5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdChvcGVuaW5nSG91cnMpIHtcbiAgICBjb25zdCBjb250YWN0TWFpbkRpdiA9IGNyZWF0ZURpdigpO1xuICAgIGNvbnRhY3RNYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdE1haW5EaXYnKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLSB3aGVyZSB0byBmaW5kIHVzIC0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZURpdigndGl0bGUnKTtcbiAgICBjb250YWN0VGl0bGUuaW5uZXJUZXh0ID0gJ1doZXJlIHRvIEZpbmQgdXMhJ1xuICAgIGNvbnN0IGdtYXBzSWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgZ21hcHNJZnJhbWUuc2V0QXR0cmlidXRlKCdpZCcsICdnbWFwc0lmcmFtZScpXG4gIFxuICAgIGdtYXBzSWZyYW1lLmFsbG93RnVsbHNjcmVlbj0nJztcbiAgICBnbWFwc0lmcmFtZS5sb2FkaW5nPSdsYXp5JztcbiAgICBnbWFwc0lmcmFtZS5yZWZlcnJlclBvbGljeT0nbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnO1xuXG4gICAgZ21hcHNJZnJhbWUuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzOTg4LjY5MTI2ODE2MTIzMDMhMmQxMDMuODgzMTkzMDc1ODQxNjYhM2QxLjM2MTg5Mzk5ODYyNTIxMTchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDMxZGExN2I0ODQ4MWM2NTclM0EweGE1MWZhMzIxNTUxYjM1OGUhMnNQZW50YWdvbiUyMExlYXJuaW5nJTIwJTdDJTIwU2VjJTIwMyUyMDQlMjBBJTIwTWF0aCUyMFR1aXRpb24lMjBKQyUyMEgyJTIwTWF0aCUyMFR1aXRpb24hNWUwITNtMiExc2VuITJzc2chNHYxNjk3NjM2Mjk5MzI0ITVtMiExc2VuITJzc2dcIlxuICAgIFxuICAgIGNvbnRhY3RNYWluRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQoZ21hcHNJZnJhbWUpO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tIG9wZW5pbmcgaG91cnMgLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc1RpdGxlID0gY3JlYXRlRGl2KCd0aXRsZScpO1xuICAgIG9wZW5pbmdIb3Vyc1RpdGxlLmlubmVyVGV4dCA9ICdPcGVuaW5nIEhvdXJzJ1xuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc1RleHQgPSBjcmVhdGVEaXYoJ3RleHQnKTtcbiAgICBvcGVuaW5nSG91cnNUZXh0LmlubmVyVGV4dCA9IGBXZWVrZGF5cyAke29wZW5pbmdIb3Vycy53a2RheU9wZW59YW0gLSAke29wZW5pbmdIb3Vycy53a2RheUNsb3NlJTEyfXBtIFxcbiBXZWVrZW5kcyAke29wZW5pbmdIb3Vycy53a2VuZE9wZW59YW0gLSAke29wZW5pbmdIb3Vycy53a2VuZENsb3NlJTEyfXBtIFxcbiBDbG9zZWQgb24gVHVlc2RheXNgXG5cblxuICAgIGNvbnRhY3RNYWluRGl2LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc1RpdGxlKTtcbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNUZXh0KTtcblxuXG4gICAgXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tIHJlc2VydmF0aW9uIGZvcm0gLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICBcbiAgICAvLyBjcmVhdGUgdGl0bGUgYW5kIGFwcGVuZFxuICAgIGNvbnN0IHJlc2VydmVUaXRsZSA9IGNyZWF0ZURpdigndGl0bGUnKVxuICAgIHJlc2VydmVUaXRsZS5pbm5lclRleHQgPSAnTWFrZSBhIHJlc2VydmF0aW9uJ1xuXG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2ZVRpdGxlKTtcblxuICAgIC8vIGNyZWF0ZSBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmFjdGlvbiA9ICcnO1xuICAgIGZvcm0ubWV0aG9kID0gJ3Bvc3QnXG5cbiAgICAvLyBmb3JtIHdpbGwgaGF2ZSAzIGRyb3Bkb3duIGlucHV0c1xuICAgIC8vIDEpIHBhcnR5IHNpemVcbiAgICAvLyAyKSBkYXRlXG4gICAgLy8gMykgdGltZVxuXG4gICAgbGV0IGRhdGVUaW1lQXJyID0gW107XG4gICAgbGV0IGRhdGVUb2RheSA9IG5ldyBEYXRlKCk7XG4gICAgXG4gICAgd2hpbGUgKGRhdGVUaW1lQXJyLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgZGF0ZVRpbWVBcnIucHVzaChvcGVuaW5nSG91cnMubmV4dEF2YWlsYWJsZVRpbWUoZGF0ZVRvZGF5KSk7XG4gICAgICAgIGRhdGVUb2RheS5zZXREYXRlKGRhdGVUb2RheS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgaWYgKGRhdGVUb2RheS5nZXREYXkoKSA9PT0gMCB8fCBkYXRlVG9kYXkuZ2V0RGF5KCkgPT09IDYpIHtcbiAgICAgICAgICAgIGRhdGVUb2RheS5zZXRIb3VycyhvcGVuaW5nSG91cnMud2tlbmRPcGVuLTEsIDU5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUb2RheS5zZXRIb3VycyhvcGVuaW5nSG91cnMud2tkYXlPcGVuLTEsIDU5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkYXRlQXJyID0gW11cbiAgICBkYXRlVGltZUFyci5mb3JFYWNoKChlbGVtZW50KT0+IHtcbiAgICAgICAgZGF0ZUFyci5wdXNoKGVsZW1lbnRbMF0pO1xuICAgIH0pXG5cbiAgICBsZXQgdGltZUFyciA9IFsuLi5kYXRlVGltZUFyclswXVsxXV07XG5cbiAgICBjb25zdCBwYXJ0eVNpemVJbnB1dCA9IGNyZWF0ZURyb3Bkb3duKCdwYXJ0eVNpemUnLCAnUGFydHkgU2l6ZScsICdwYXJ0eVNpemUnLCAxLCBbMSwyLDMsNCw1LDZdLCdwYXJ0eVNpemUnKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZURyb3Bkb3duKCdkYXRlSW5wdXQnLCAnRGF0ZScsICdkYXRlJywgMSwgZGF0ZUFyciAsICdkYXRlSW5wdXQnKTtcblxuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGNyZWF0ZURyb3Bkb3duKCd0aW1lSW5wdXQnLCAnVGltZScsICd0aW1lJywgMSwgdGltZUFyciAsJ3RpbWVJbnB1dCcpO1xuXG4gICAgLy8gY3JlYXRlIGJ1dHRvblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYnRuLmlubmVyVGV4dCA9ICdSZXNlcnZlIGEgdGFibGUnXG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwYXJ0eVNpemVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBjb250YWN0TWFpbkRpdlxufVxuXG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgZHJvcGRvd24gYW5kIGxhYmVsLCByZXR1cm5zIGJvdGggZWxlbWVudHMgdW5kZXIgYSBkaXZcbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKGlkLCBsYWJlbE5hbWUsIGlucHV0TmFtZSwgZHJvcGRvd25TaXplLCBvcHRpb25zQXJyLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBjcmVhdGVEaXYoY2xhc3NOYW1lKVxuXG4gICAgLy8gY3JlYXRlIGxhYmVsIGZvciBkcm9wZG93blxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIGxhYmVsRWxlbWVudC5pbm5lclRleHQgPSBsYWJlbE5hbWVcblxuICAgIC8vIGNyZWF0ZSBzZWxlY3QgaW5wdXRcbiAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBkcm9wZG93bkVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBkcm9wZG93bkVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICBkcm9wZG93bkVsZW1lbnQuc2V0QXR0cmlidXRlKCdzaXplJywgZHJvcGRvd25TaXplKTtcbiAgICBkcm9wZG93bkVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIC8vIGNyZWF0ZSBvcHRpb25zXG4gICAgb3B0aW9uc0Fyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudCk7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudFxuXG4gICAgICAgIGRyb3Bkb3duRWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxuICAgIH0pXG5cblxuICAgIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChkcm9wZG93bkVsZW1lbnQpO1xuXG5cbiAgICByZXR1cm4gaW5wdXRXcmFwcGVyXG59XG5cbiIsIi8vIElJRkUgdG8gZXh0ZW5kIERhdGUgb2JqZWN0IHByb3RvdHlwZVxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbiAgICBEYXRlLnByb3RvdHlwZS5nZXREYXlOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZGF5c1t0aGlzLmdldERheSgpXTtcbiAgICB9O1xuXG4gICAgRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGhOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbW9udGhzW3RoaXMuZ2V0TW9udGgoKV07XG4gICAgfTtcbn0pKCk7XG5cblxuLy8gZGF0ZSB0aW1lIGdlbmVyYXRvciBjbGFzc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuaW5nSG91cnMge1xuICAgIGNvbnN0cnVjdG9yKHdrZGF5T3Blbiwgd2tkYXlDbG9zZSwgd2tlbmRPcGVuLCB3a2VuZENsb3NlKSB7XG4gICAgICAgIHRoaXMud2tkYXlPcGVuID0gd2tkYXlPcGVuO1xuICAgICAgICB0aGlzLndrZGF5Q2xvc2UgPSB3a2RheUNsb3NlO1xuICAgICAgICB0aGlzLndrZW5kT3BlbiA9IHdrZW5kT3BlbjtcbiAgICAgICAgdGhpcy53a2VuZENsb3NlID0gd2tlbmRDbG9zZTtcbiAgICAgICAgdGhpcy53a2RheVNsb3RzID0gdGhpcy5fZ2VuZXJhdGVUaW1lU2xvdHMod2tkYXlPcGVuLCB3a2RheUNsb3NlKTtcbiAgICAgICAgdGhpcy53a2VuZFNsb3RzID0gdGhpcy5fZ2VuZXJhdGVUaW1lU2xvdHMod2tlbmRPcGVuLCB3a2VuZENsb3NlKTtcbiAgICB9XG5cbiAgICBfaXNXa2VuZChkYXRlT2JqKSB7XG4gICAgICAgIGlmIChkYXRlT2JqLmdldERheSgpPT09MCB8fCBkYXRlT2JqLmdldERheSgpID09PSA2KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgX2NhZmVJc0Nsb3NlZChkYXRlT2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1drZW5kKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZU9iai5nZXRIb3VycygpPCB0aGlzLndrZW5kQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRhdGVPYmouZ2V0SG91cnMoKSA8IHRoaXMud2tkYXlDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0QXZhaWxhYmxlVGltZShkYXRlT2JqKSB7XG4gICAgICAgIGlmIChkYXRlT2JqLmdldERheSgpID09PSAyKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBiZWNhdXNlIGNhZmUgaXMgY2xvc2VkIHR1ZXNkYXlzXG5cbiAgICAgICAgICAgIC8vIG5vdGU6IHRoZXJlJ3Mgbm8gbmVlZCB0byBjbG9uZSEgd2UgU0hPVUxEIGNoYW5nZSB0aGUgZGF0ZU9iaiBkaXJlY3RseVxuICAgICAgICAgICAgZGF0ZU9iai5zZXREYXRlKGRhdGVPYmouZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHRoaXMud2tkYXlPcGVuIC0gMSk7XG5cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dEF2YWlsYWJsZVRpbWUoZGF0ZU9iaik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY2FmZUlzQ2xvc2VkKGRhdGVPYmopKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBjYWZlIGlzIGNsb3NlZCAoYWZ0ZXIgNnBtKVxuICAgICBcbiAgICAgICAgICAgIC8vIG5vdGU6IHRoZXJlJ3Mgbm8gbmVlZCB0byBjbG9uZSEgd2UgU0hPVUxEIGNoYW5nZSB0aGUgZGF0ZU9iaiBkaXJlY3RseVxuICAgICAgICAgICAgZGF0ZU9iai5zZXREYXRlKGRhdGVPYmouZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNXa2VuZChkYXRlT2JqKSkge1xuICAgICAgICAgICAgICAgIGRhdGVPYmouc2V0SG91cnModGhpcy53a2VuZE9wZW4gLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZU9iai5zZXRIb3Vycyh0aGlzLndrZGF5T3BlbiAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dEF2YWlsYWJsZVRpbWUoZGF0ZU9iaik7ICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVsc2UgcmV0dXJuIGN1cnJlbnQgZGF0ZSBpbiBzdHIgZm9ybVxuICAgICAgICAgICAgLy8gYWxzbyByZXR1cm4gdGhlIHJlbWFpbmluZ09wZW5pbmdIb3VycyBpbiBhbiBBcnJheVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBgKCR7ZGF0ZU9iai5nZXREYXlOYW1lKCl9KSAke2RhdGVPYmouZ2V0TW9udGhOYW1lKCl9ICR7ZGF0ZU9iai5nZXREYXRlKCl9LCAke2RhdGVPYmouZ2V0RnVsbFllYXIoKX1gXG4gICAgICAgICAgICAvLyBlLmcuIChGcmkpIE9jdCAyMCwgMjAyM1xuICAgICAgICAgICAgbGV0IHJlbWFpbmluZ09wZW5Ib3Vyc0Fycj0gdGhpcy5nZXRSZW1haW5pbmdUaW1lU2xvdHNUb2RheShkYXRlT2JqKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gW2RhdGVTdHIsIHJlbWFpbmluZ09wZW5Ib3Vyc0Fycl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdlbmVyYXRlIGRhdGVzdHIgb2YgbmV4dCAzIGRheXMgY2FmZSBpcyBvcGVuKGluY2x1c2l2ZSBvZiB0b2RheSlcblxuXG4gICAgLy8gZ2VuZXJhdGUgcmVtYWluaW5nIHRpbWVzbG90cyBiYXNlZCBvbiB0aW1lIG5vd1xuICAgIGdldFJlbWFpbmluZ1RpbWVTbG90c1RvZGF5KGRhdGVPYmopIHtcbiAgICAgICAgbGV0IHJlbWFpbmluZ09wZW5Ib3Vyc0FyciA9IFtdO1xuICAgICAgICBpZiAodGhpcy5faXNXa2VuZChkYXRlT2JqKSkge1xuICAgICAgICAgICAgcmVtYWluaW5nT3BlbkhvdXJzQXJyID0gWy4uLnRoaXMud2tlbmRTbG90c107XG4gICAgICAgICAgICB3aGlsZSAoZGF0ZU9iai5nZXRIb3VycygpID4gTnVtYmVyKHJlbWFpbmluZ09wZW5Ib3Vyc0FyclswXS5zdWJzdHJpbmcoMCwyKSkpIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZU9iai5nZXRIb3VycygpID09IE51bWJlcihyZW1haW5pbmdPcGVuSG91cnNBcnJbMF0uc3Vic3RyaW5nKDAsMikpICYmIGRhdGVPYmouZ2V0TWludXRlcygpPk51bWJlcihyZW1haW5pbmdPcGVuSG91cnNBcnJbMF0uc2xpY2UoLTIsKSkpIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtYWluaW5nT3BlbkhvdXJzQXJyID0gWy4uLnRoaXMud2tkYXlTbG90c107XG4gICAgICAgICAgICB3aGlsZSAoZGF0ZU9iai5nZXRIb3VycygpID4gTnVtYmVyKHJlbWFpbmluZ09wZW5Ib3Vyc0FyclswXS5zdWJzdHJpbmcoMCwyKSkpIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAoZGF0ZU9iai5nZXRIb3VycygpID09IE51bWJlcihyZW1haW5pbmdPcGVuSG91cnNBcnJbMF0uc3Vic3RyaW5nKDAsMikpICYmZGF0ZU9iai5nZXRNaW51dGVzKCk+MzApIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtYWluaW5nT3BlbkhvdXJzQXJyO1xuICAgIH1cblxuICAgIC8vIGhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aW1lIHNsb3RzIGJhc2VkIG9uIG9wZW5pbmcgY2xvc2luZyB0aW1lXG4gICAgX2dlbmVyYXRlVGltZVNsb3RzKG9wZW4sY2xvc2UpIHtcbiAgICAgICAgbGV0IHRpbWVTbG90QXJyID0gW11cbiAgICAgICAgd2hpbGUgKG9wZW4gPCBjbG9zZSkge1xuICAgICAgICAgICAgaWYgKG9wZW48MTApIHtcbiAgICAgICAgICAgICAgICB0aW1lU2xvdEFyci5wdXNoKCcwJytvcGVuKyc6MDAnKTtcbiAgICAgICAgICAgICAgICB0aW1lU2xvdEFyci5wdXNoKCcwJytvcGVuKyc6MzAnKTtcbiAgICAgICAgICAgICAgICBvcGVuKz0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aW1lU2xvdEFyci5wdXNoKCcnK29wZW4rJzowMCcpO1xuICAgICAgICAgICAgICAgIHRpbWVTbG90QXJyLnB1c2goJycrb3BlbisnOjMwJyk7XG4gICAgICAgICAgICAgICAgb3Blbis9MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZVNsb3RBcnI7XG4gICAgfVxufVxuXG4vLyBRdWVzdGlvbnNcbi8vIDEpIGlmIGkgY2FsbGVkIE9wZW5pbmdIb3Vycy5uZXh0QXZhaWxhYmxlVGltZSgpIGZyb20gYW5vdGhlciBmaWxlLCB3b3VsZCBpdCBoYXZlIGFjY2VzcyB0byB0aGUgSUlGRT9cbi8vIDIpIG5lZWQgdG8gaW1wbGVtZW50IHNvbWV0aGluZyBvZiB3aGlsZSAoYXZhaWxhYmxlRGF0ZXNBcnIubGVuZ3RoIDwgMykge2dlbmVyYXRlIG1vcmUgZGF0ZXN9XG4vLyAgICAod2lsbCBwcm9iYWJseSBuZWVkIHRvIGtlZXAgYSBjb3VudGVyIHRvIGluY3JlbWVudCBieSAxKVxuLy9cbi8vIEFuc3dlcnNcbi8vIDEpIFllcyIsImltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlSU1HIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzcGxhc2hJTUdGaWxlIGZyb20gJy4vaW1nL2xhdHRlLWFydC5qcGVnJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIC8vY3JlYXRlIHNwbGFzaCBjb250YWluZXJcbiAgICBjb25zdCBzcGxhc2ggPSBjcmVhdGVEaXYoJ3NwbGFzaCcpO1xuICAgIHNwbGFzaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NwbGFzaCcpXG5cbiAgICAvL2NyZWF0ZSBpbWcgXG4gICAgY29uc3Qgc3BsYXNoSW1nRWxlbWVudCA9IGNyZWF0ZUlNRyhzcGxhc2hJTUdGaWxlKVxuXG4gICAgLy9jcmVhdGUgdGV4dCBkaXYgd2l0aCBjbGFzcyAnc3BsYXNoVGV4dDEnXG4gICAgY29uc3Qgc3BsYXNoVGV4dDEgPSBjcmVhdGVEaXYoJ3NwbGFzaFRleHQxJyk7XG4gICAgc3BsYXNoVGV4dDEuaW5uZXJUZXh0ID0gJ0NPTUUgVE8gT0RJTlxcJ1MnXG4gICAgXG4gICAgLy9jcmVhdGUgdGV4dCBkaXYgd2l0aCBjbGFzcyAnc3BsYXNoVGV4dDInXG4gICAgY29uc3Qgc3BsYXNoVGV4dDIgPSBjcmVhdGVEaXYoJ3NwbGFzaFRleHQyJyk7XG4gICAgc3BsYXNoVGV4dDIuaW5uZXJUZXh0ID0gJ0ZPUiBBIFdBUk0gQ1VQUEEgSk9ZISdcbiAgICBcbiAgICAvL2FwcGVuZCBpbWcgdG8gc3BsYXNoXG4gICAgc3BsYXNoLmFwcGVuZENoaWxkKHNwbGFzaEltZ0VsZW1lbnQpO1xuICAgIHNwbGFzaC5hcHBlbmRDaGlsZChzcGxhc2hUZXh0MSk7XG4gICAgc3BsYXNoLmFwcGVuZENoaWxkKHNwbGFzaFRleHQyKTtcbiAgICBcbiAgICAvL3JldHVybiAoYW5kIGFwcGVuZCB0byBjb250ZW50IGRpdilcbiAgICByZXR1cm4gc3BsYXNoXG59XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgZmJTVkcgZnJvbSAnLi9pbWcvZmIuc3ZnJztcbmltcG9ydCBpbnN0YVNWRyBmcm9tICcuL2ltZy9pbnN0YS5zdmcnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWcvbG9nby1ibGFjay1jb2xvdXJlZC5wbmcnO1xuXG5pbXBvcnQgT3BlbmluZ0hvdXJzIGZyb20gXCIuL2RhdGVUaW1lR2VuZXJhdG9yLmpzXCJcblxuXG4vLyBjcmVhdGUgaGVhZGVyXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVEaXYoKTtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGVyJyk7XG5cbmNvbnN0IGxvZ29FbGVtZW50ID0gY3JlYXRlSU1HKGxvZ28sICdsb2dvJyk7XG5sb2dvRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnNnJlbSc7XG5sb2dvRWxlbWVudC5zdHlsZS53aWR0aCA9ICc2cmVtJztcbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvRWxlbWVudCk7XG5cbi8vIGNyZWF0ZSBjbGlja2FibGUgdGFic1xuWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gICAgZGl2LmlubmVyVGV4dD1pdGVtO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXYpO1xufSlcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbi8vIGNyZWF0ZSBjb250ZW50IGFyZWFcbmNvbnN0IGNvbnRlbnREaXYgPSBjcmVhdGVEaXYoKTtcbmNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpOyBcblxuLy8gY3JlYXRlIGZvb3RlclxuY29uc3QgZm9vdGVyID0gY3JlYXRlRGl2KCk7XG5mb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuLy8gY3JlYXRlIHNvY2lhbCBtZWRpYSBjb250YWluZXIgZGl2XG5jb25zdCBzb2NpYWxNZWRpYUNvbnRhaW5lckRpdiA9IGNyZWF0ZURpdignc29jaWFsTWVkaWFDb250YWluZXJEaXYnKTtcblxuXG5bZmJTVkcsIGluc3RhU1ZHXS5mb3JFYWNoKChpbWdGaWxlKT0+IHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlSU1HKGltZ0ZpbGUpO1xuICAgIHNvY2lhbE1lZGlhQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xufSk7XG5mb290ZXIuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFDb250YWluZXJEaXYpO1xuXG4vLyBwaG90byBjcmVkaXRzIC0gZG8gbm90IHJlbW92ZVxuY29uc3QgcGhvdG9DcmVkaXRzID0gY3JlYXRlRGl2KClcbnBob3RvQ3JlZGl0cy5jbGFzc0xpc3QuYWRkKCdmb290ZXJUZXh0Jyk7XG5waG90b0NyZWRpdHMuaW5uZXJUZXh0ID0gJ1Bob3RvIGJ5IFByYWZ1bCBEYXMgd3d3LnBleGVscy5jb20nXG5cbmZvb3Rlci5hcHBlbmRDaGlsZChwaG90b0NyZWRpdHMpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cblxuLy8gZXZlbnRsaXN0ZW5lciBmb3IgaG9tZSwgbWVudSwgY29udGFjdCB0YWJzXG5cblsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS50b0xvd2VyQ2FzZSgpKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUYWIpO1xufSlcblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBkaXZzXG5mdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAvLyBpZiBjbGFzc05hbWUgZW1wdHkgZG9uJ3QgYWRkIGNsYXNzIHRvIGRpdlxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZGl2XG59XG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgaW1nIGVsZW1lbnRzXG5mdW5jdGlvbiBjcmVhdGVJTUcoaW1nc3JjLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgaW1nRWxlbWVudC5zcmMgPSBpbWdzcmM7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGltZ0VsZW1lbnQ7XG59XG5cbmV4cG9ydCB7Y3JlYXRlRGl2LCBjcmVhdGVJTUd9XG4vLyBleHBvcnQgY3JlYXRlRGl2IGFuZCBjcmVhdGVJTUdcblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIHJlbXZvZSBhbGwgY2hpbGQgbm9kZXNcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBsb2FkIHRhYiBiYXNlZCBvbiBjbGljayBldmVudFxuXG5mdW5jdGlvbiBsb2FkVGFiKGV2dCkge1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudERpdik7XG4gICAgbGV0IG9wZW5pbmdIb3VycyA9IG5ldyBPcGVuaW5nSG91cnMoMTEsIDE4LCA5LCAxOCk7XG4gICAgc3dpdGNoIChldnQudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcbiAgICAgICAgICAgIHBob3RvQ3JlZGl0cy5pbm5lclRleHQgPSAnUGhvdG8gYnkgUHJhZnVsIERhcyB3d3cucGV4ZWxzLmNvbSdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZE1lbnUoKSk7XG4gICAgICAgICAgICBwaG90b0NyZWRpdHMuaW5uZXJUZXh0ID0gJ1Bob3RvIGJ5IHNlcmhpaV9ib2J5ayBvbiBGcmVlcGlrIFxcbiBQaG90byBieSBBcnlhIEJhanJhIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBEemVuaW5hIEx1a2FjIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBQaXhhYmF5IHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBOYXRhbiBNYWNoYWRvIEZvdG9ncmFmaWEgR2FzdHJvbsO0bWljYSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgS3Jpc3RpbmEgUGF1a3NodGl0ZSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgVmljdG9yIEZyZWl0YXMgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IENoZXZhbm9uIFBob3RvZ3JhcGh5IHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBDYXNhIE5vcnRlIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBDaGFybG90dGUgTWF5IHd3dy5wZXhlbHMuY29tJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkQ29udGFjdChvcGVuaW5nSG91cnMpKTtcbiAgICAgICAgICAgIHBob3RvQ3JlZGl0cy5pbm5lclRleHQgPSAnJ1xuICAgICAgICAgICAgYWRkRXZ0TGlzdGVuZXIob3BlbmluZ0hvdXJzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG4vLyBsb2FkIGhvbWUgcGFnZSBieSBkZWZhdWx0XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSkpO1xuXG4vLyBmdW5jdGlvbiB0byBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdXBkYXRlIHRpbWUgc2xvdHMgd2hlbiBjaG9vc2luZyBkYXRlc1xuZnVuY3Rpb24gYWRkRXZ0TGlzdGVuZXIoT3BlbmluZ0hvdXJzKSB7XG4gICAgY29uc3QgdGltZURyb3Bkb3duTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lSW5wdXQnKTtcbiAgICBjb25zdCBkYXRlRHJvcGRvd25NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dCcpO1xuICAgIGRhdGVEcm9wZG93bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2dCk9PiB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXModGltZURyb3Bkb3duTWVudSlcbiAgICAgICAgY29uc29sZS5sb2coZXZ0KTtcbiAgICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldFswXS5zZWxlY3RlZCk7XG4gICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZShldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKGV2dC50YXJnZXRbMF0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTbG90VG9kYXkgPSBPcGVuaW5nSG91cnMuZ2V0UmVtYWluaW5nVGltZVNsb3RzVG9kYXkobmV3IERhdGUoKSk7XG4gICAgICAgICAgICB0aW1lU2xvdFRvZGF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IGVsZW1lbnRcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRpbWVEcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2hvc2VuRGF0ZS5nZXREYXkoKT09PTYgfHwgY2hvc2VuRGF0ZS5nZXREYXkoKT09PTApIHtcbiAgICAgICAgICAgICAgICBPcGVuaW5nSG91cnMud2tlbmRTbG90cy5mb3JFYWNoKChlbGVtZW50KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aW1lRHJvcGRvd25NZW51LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT3BlbmluZ0hvdXJzLndrZGF5U2xvdHMuZm9yRWFjaCgoZWxlbWVudCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGltZURyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn0iLCJpbXBvcnQgbWVudTEgZnJvbSAnLi9pbWcvbWVudTEucG5nJztcbmltcG9ydCBtZW51MiBmcm9tICcuL2ltZy9tZW51Mi5wbmcnO1xuaW1wb3J0IG1lbnUzIGZyb20gJy4vaW1nL21lbnUzLnBuZyc7XG5pbXBvcnQgbWVudTQgZnJvbSAnLi9pbWcvbWVudTQucG5nJztcbmltcG9ydCBtZW51NSBmcm9tICcuL2ltZy9tZW51NS5wbmcnO1xuaW1wb3J0IG1lbnU2IGZyb20gJy4vaW1nL21lbnU2LnBuZyc7XG5cbmltcG9ydCBjb2ZmZWUxIGZyb20gJy4vaW1nL2NvZmZlZTEucG5nJztcbmltcG9ydCBjb2ZmZWUyIGZyb20gJy4vaW1nL2NvZmZlZTIucG5nJztcbmltcG9ydCBjb2ZmZWUzIGZyb20gJy4vaW1nL2NvZmZlZTMucG5nJztcblxuaW1wb3J0IHRlYTEgZnJvbSAnLi9pbWcvdGVhMS5wbmcnO1xuXG5jb25zdCBmb29kSW1nQXJyYXkgPSBbW21lbnUxLCdUSVJPS1JPS0VURVMgXFxuIGZyaWVkIGNoZWVzZSBiYWxscywgZ3JlZWsgZmV0YSwgc29mdCBnb3VkYSwgY2hlZGRhciwgZWdncGxhbnQsIGZyZXNoIGJhc2lsIGxlYXZlcyAnXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbWVudTIsICdPTklPTiBSSU5HUyBcXG4gYnJlYWRlZCBvbmlvbiByaW5ncywgbWF5by1zcmlyYWNoYSBzYXVjZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51MywgJ1RSVUZGTEUgRlJJRVMgXFxuIGJlbGdpdW0gcG90YXRvLCB3aGl0ZSB0cnVmZmxlIG9pbCwgZ3JhdGVkIHBhcm1lc2FuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51NCwgJ1BBUFJJS0EgQ1JJU1BZIFdJTkdTIFxcbiBoYW5kIGJyZWFkZWQsIGxpZ2h0bHkgdG9zc2VkIGluIHBhcHJpa2EgcG93ZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudTUsICdNRUFUIExPVkVSIEJVUkdFUiBcXG4gZG91YmxlIGNoZWVzZSwgb25pb24gcmluZ3MsIGJhY29uLCAxMDBnIGdyYWluIGZlZCBiZWVmIHBhdHR5LCBwb3RhdG8gYnVuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lbnU2LCAnQ0xBU1NJQyBNQUdIRVJJVEEgXFxuIGZyZXNoIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgZnJlc2ggYmFzaWwgbGVhdmVzLCBvbGl2ZSBvaWwnXV1cbmNvbnN0IGRyaW5rSW1nQXJyYXkgPSBbW2NvZmZlZTEsICdEUklQIENPRkZFRSBcXG4gZXRoaW9waWEsIG5vdGVzOiBiZXJyaWVzLCBlbGRlcmZsb3dlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvZmZlZTIsICdFU1BSRVNTTyBcXG4gc2luZ2xlL2RvdWJsZSBzaG90J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NvZmZlZTMsICdJQ0VEIEFNRVJJQ0FOTyBcXG4gc2luZ2xlIHNob3QgZXNwcmVzc28sIGZpbHRlcmVkIHdhdGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZWExLCAnTUFUQ0hBIExBVFRFIFxcbiB1amkgbWF0Y2hhIGVzcHJlc3NvLCBzb3kvb2F0IG1pbGsgJ11dXG5cbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlSU1HIH0gZnJvbSAnLic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudU1haW5EaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBtZW51TWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVNYWluJyk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLSBmb29kIG1lbnUgLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0IGZvb2RNZW51RGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZm9vZE1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmb29kTWVudScpO1xuXG4gICAgZm9vZEltZ0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZURpdignbWVudUl0ZW1Db250YWluZXInKTtcbiAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlSU1HKGVsZW1lbnRbMF0sICdtZW51Jyk7XG4gICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBjcmVhdGVEaXYoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgZGVzY3JpcHRpb25EaXYuaW5uZXJUZXh0ID0gZWxlbWVudFsxXTtcblxuICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgIGZvb2RNZW51RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgIH0pXG5cbiAgICBtZW51TWFpbkRpdi5hcHBlbmRDaGlsZChmb29kTWVudURpdik7XG4gICAgXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLSBkcmlua3MgbWVudSAtLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgXG4gICAgY29uc3QgZHJpbmtNZW51RGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZHJpbmtNZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZHJpbmtNZW51Jyk7XG5cbiAgICBkcmlua0ltZ0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVEaXYoJ2RyaW5rSXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlSU1HKGVsZW1lbnRbMF0sICdkcmluaycpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGNyZWF0ZURpdignZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuaW5uZXJUZXh0ID0gZWxlbWVudFsxXVxuXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgICAgICAgZHJpbmtNZW51RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9KVxuXG4gICAgbWVudU1haW5EaXYuYXBwZW5kQ2hpbGQoZHJpbmtNZW51RGl2KTtcblxuICAgIHJldHVybiBtZW51TWFpbkRpdlxufVxuXG4vLyBQaG90byBieSBzZXJoaWlfYm9ieWsgb24gRnJlZXBpa1xuLy8gUGhvdG8gYnkgQXJ5YSBCYWpyYSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgRHplbmluYSBMdWthYyB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgUGl4YWJheSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgTmF0YW4gTWFjaGFkbyBGb3RvZ3JhZmlhIEdhc3Ryb27DtG1pY2Egd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IEtyaXN0aW5hIFBhdWtzaHRpdGUgd3d3LnBleGVscy5jb21cblxuXG4vLyBQaG90byBieSBWaWN0b3IgRnJlaXRhcyB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgQ2hldmFub24gUGhvdG9ncmFwaHkgd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IENhc2EgTm9ydGUgd3d3LnBleGVscy5jb21cblxuLy8gUGhvdG8gYnkgQ2hhcmxvdHRlIE1heSB3d3cucGV4ZWxzLmNvbSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==