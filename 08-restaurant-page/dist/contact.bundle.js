"use strict";
(self["webpackChunk_08_restaurant_page"] = self["webpackChunk_08_restaurant_page"] || []).push([["contact"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsY0FBYyxjQUFjLHlCQUF5QixPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLFFBQVEsWUFBWSxjQUFjLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLHNCQUFzQixhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLGNBQWMsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxjQUFjLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFlBQVksY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxhQUFhLFdBQVcsVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFL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QTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFTO0FBQ2xDOztBQUVBO0FBQ0EseUJBQXlCLDZDQUFTO0FBQ2xDLDJCQUEyQiw2Q0FBUztBQUNwQywrQkFBK0IsNkNBQVM7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9kYXRlVGltZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQXZlbmlyLU5leHQtTFQtVzA0LVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9tZXRpY3VsYS1ib2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQxJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tb3JhbmdlMTogI2ZmNTMxMTtcbiAgICAtLW9yYW5nZTI6ICNmZjc4NDQ7XG4gICAgLS1vcmFuZ2UzOiAjZmY5ZDc3O1xuICAgIC0tYmxhY2s6ICMxMTE7XG4gICAgLS1ncmV5OiAjZTZlNmU2O1xuICAgIC0td2hpdGU6ICNmZmY7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5cbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XG5cbiAgICBmb250LXNpemU6IGNhbGMoMTAwdncvMzApOyAvKiAxcmVtIGNhbGN1bGF0ZWQgZHluYW1pY2FsbHkgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tIGhlYWRlciBzZWN0aW9uIC0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9nbyxcbiNob21lLFxuI21lbnUsXG4jY29udGFjdCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcbn1cblxuI2hvbWU6aG92ZXIsXG4jbWVudTpob3ZlcixcbiNjb250YWN0OmhvdmVyIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLSBjb250ZW50IHNlY3Rpb24gLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbiNzcGxhc2gge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNzcGxhc2ggaW1nIHtcbiAgICB3aWR0aDogaW5oZXJpdDsgLyogaW1hZ2UgZG9lcyBub3QgY29tbWFuZCB2aWV3cG9ydCAqL1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpOyBcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyMHB4KTtcbiAgICBtYXgtaGVpZ2h0OiA3NDhweDtcbiAgICBcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDYwJTtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcGxhc2hUZXh0MSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UzKTtcbn1cblxuLnNwbGFzaFRleHQyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDJyZW07XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIFxuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XG59XG5cbi8qIHN0eWxlcyBmb3IgbWVudSB0YWIgKi9cblxuI21lbnVNYWluIHtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbiNtZW51TWFpbiAqOm5vdCguZGVzY3JpcHRpb24pe1xuICAgIHdpZHRoOiBpbmhlcml0O1xufVxuXG4jZm9vZE1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGdyaWQtYXV0by1yb3dzOiAxNXJlbTtcblxuICAgIGdhcDogM3JlbTtcblxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbiNmb29kTWVudSAqaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG5cbn1cblxuI2Zvb2RNZW51PmRpdiB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2RyaW5rTWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE1cmVtO1xuXG4gICAgZ2FwOiAzcmVtO1xufVxuXG4jZHJpbmtNZW51ICppbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxuI2RyaW5rTWVudT5kaXYge1xuICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZW51SXRlbUNvbnRhaW5lcixcbi5kcmlua0l0ZW1Db250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICB3aWR0aDogMzN2dztcbiAgICBtYXgtd2lkdGg6IDI1NnB4O1xuXG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAtMTByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcblxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1lbnVJdGVtQ29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbntcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5tZW51SXRlbUNvbnRhaW5lcjpob3ZlciBpbWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uZHJpbmtJdGVtQ29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbntcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5kcmlua0l0ZW1Db250YWluZXI6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogI2U2ZTZlNjtcblxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnRleHQge1xuICAgIGNvbG9yOiAjZTZlNmU2O1xuXG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbiNnbWFwc0lmcmFtZSB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgbWF4LXdpZHRoOiA2MTRweDtcblxuICAgIGhlaWdodDogNjB2dztcbiAgICBtYXgtaGVpZ2h0OiA0NjBweDtcblxuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWNvbHVtbjogMWZyIDFmcjtcbiAgICBncmlkLXJvdzogMWZyIDFmcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5wYXJ0eVNpemUge1xuICAgIGdyaWQtY29sdW1uOjEvIHNwYW4gMjtcbiAgICBncmlkLXJvdzogMS8gc3BhbiAxO1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgICBncmlkLWNvbHVtbjogMS8gc3BhbiAxO1xuICAgIGdyaWQtcm93OiAyLyBzcGFuIDE7XG59XG5cbi50aW1lSW5wdXQge1xuICAgIGdyaWQtY29sdW1uOiAyLyBzcGFuIDE7XG4gICAgZ3JpZC1yb3c6IDIvIHNwYW4gMTtcbn1cblxuZm9ybSBsYWJlbCB7XG4gICAgY29sb3I6ICNlNmU2ZTY7XG5cbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuZm9ybSBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuXG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmZvcm0gb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuXG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSk7XG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tIGZvb3RlciBzZWN0aW9uIC0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuXG4uc29jaWFsTWVkaWFDb250YWluZXJEaXYge1xuICAgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uc29jaWFsTWVkaWFDb250YWluZXJEaXYgIGltZyB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG4uZm9vdGVyVGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gICAgYm9keSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBib2R5ICoge1xuICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuXG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUE2QztBQUNqRDtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCOztJQUV0Qiw4QkFBOEI7O0lBRTlCLHdCQUF3Qjs7SUFFeEIseUJBQXlCLEVBQUUsZ0NB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OztBQUVBO0lBQ0kseUJBQXlCOztJQUV6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCOztJQUVsQixlQUFlO0FBQ25COztBQUVBLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DOztBQUVuQztJQUNJLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O1FBRVEsYUFBYTtRQUNiLDZCQUE2Qjs7UUFFN0IsY0FBYzs7UUFFZCxvQkFBb0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7O0lBRXZCOztJQUVBO1FBQ0ksZ0JBQWdCOztJQUVwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvQXZlbmlyLU5leHQtTFQtVzA0LVRoaW4udHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQxJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9tZXRpY3VsYS1ib2xkLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1vcmFuZ2UxOiAjZmY1MzExO1xcbiAgICAtLW9yYW5nZTI6ICNmZjc4NDQ7XFxuICAgIC0tb3JhbmdlMzogI2ZmOWQ3NztcXG4gICAgLS1ibGFjazogIzExMTtcXG4gICAgLS1ncmV5OiAjZTZlNmU2O1xcbiAgICAtLXdoaXRlOiAjZmZmO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQxJztcXG5cXG4gICAgZm9udC1zaXplOiBjYWxjKDEwMHZ3LzMwKTsgLyogMXJlbSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5ICovXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gaGVhZGVyIHNlY3Rpb24gLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNoZWFkZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubG9nbyxcXG4jaG9tZSxcXG4jbWVudSxcXG4jY29udGFjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcblxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMik7XFxufVxcblxcbiNob21lOmhvdmVyLFxcbiNtZW51OmhvdmVyLFxcbiNjb250YWN0OmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLSBjb250ZW50IHNlY3Rpb24gLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbiNzcGxhc2gge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3NwbGFzaCBpbWcge1xcbiAgICB3aWR0aDogaW5oZXJpdDsgLyogaW1hZ2UgZG9lcyBub3QgY29tbWFuZCB2aWV3cG9ydCAqL1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTsgXFxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgICBtYXgtaGVpZ2h0OiA3NDhweDtcXG4gICAgXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDYwJTtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNwbGFzaFRleHQxIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XFxufVxcblxcbi5zcGxhc2hUZXh0MiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAycmVtO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTMpO1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIG1lbnUgdGFiICovXFxuXFxuI21lbnVNYWluIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jbWVudU1haW4gKjpub3QoLmRlc2NyaXB0aW9uKXtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbiNmb29kTWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxNXJlbTtcXG5cXG4gICAgZ2FwOiAzcmVtO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4jZm9vZE1lbnUgKmltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcblxcbn1cXG5cXG4jZm9vZE1lbnU+ZGl2IHtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jZHJpbmtNZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE1cmVtO1xcblxcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbiNkcmlua01lbnUgKmltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4jZHJpbmtNZW51PmRpdiB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyLFxcbi5kcmlua0l0ZW1Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgd2lkdGg6IDMzdnc7XFxuICAgIG1heC13aWR0aDogMjU2cHg7XFxuXFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIFxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudUl0ZW1Db250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9ue1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICByaWdodDogMC41cmVtO1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyOmhvdmVyIGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5kcmlua0l0ZW1Db250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9ue1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICByaWdodDogMC41cmVtO1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLmRyaW5rSXRlbUNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG5cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50ZXh0IHtcXG4gICAgY29sb3I6ICNlNmU2ZTY7XFxuXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jZ21hcHNJZnJhbWUge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgbWF4LXdpZHRoOiA2MTRweDtcXG5cXG4gICAgaGVpZ2h0OiA2MHZ3O1xcbiAgICBtYXgtaGVpZ2h0OiA0NjBweDtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDFmciAxZnI7XFxuICAgIGdyaWQtcm93OiAxZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wYXJ0eVNpemUge1xcbiAgICBncmlkLWNvbHVtbjoxLyBzcGFuIDI7XFxuICAgIGdyaWQtcm93OiAxLyBzcGFuIDE7XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMS8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMi8gc3BhbiAxO1xcbn1cXG5cXG4udGltZUlucHV0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDIvIHNwYW4gMTtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGNvbG9yOiAjZTZlNmU2O1xcblxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuZm9ybSBzZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcblxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuZm9ybSBvcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcblxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLSBmb290ZXIgc2VjdGlvbiAtLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2Zvb3RlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4uc29jaWFsTWVkaWFDb250YWluZXJEaXYge1xcbiAgICBcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIFxcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XFxuXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnNvY2lhbE1lZGlhQ29udGFpbmVyRGl2ICBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5mb290ZXJUZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG4gICAgYm9keSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICBcXG4gICAgYm9keSAqIHtcXG4gICAgICAgIG1heC13aWR0aDogNzY4cHg7XFxuXFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVEaXYsIHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tIFwiLlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KG9wZW5pbmdIb3Vycykge1xuICAgIGNvbnN0IGNvbnRhY3RNYWluRGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgY29udGFjdE1haW5EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0TWFpbkRpdicpO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tIHdoZXJlIHRvIGZpbmQgdXMgLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gY3JlYXRlRGl2KCd0aXRsZScpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lclRleHQgPSAnV2hlcmUgdG8gRmluZCB1cyEnXG4gICAgY29uc3QgZ21hcHNJZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBnbWFwc0lmcmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dtYXBzSWZyYW1lJylcbiAgXG4gICAgZ21hcHNJZnJhbWUuYWxsb3dGdWxsc2NyZWVuPScnO1xuICAgIGdtYXBzSWZyYW1lLmxvYWRpbmc9J2xhenknO1xuICAgIGdtYXBzSWZyYW1lLnJlZmVycmVyUG9saWN5PSduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSc7XG5cbiAgICBnbWFwc0lmcmFtZS5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM5ODguNjkxMjY4MTYxMjMwMyEyZDEwMy44ODMxOTMwNzU4NDE2NiEzZDEuMzYxODkzOTk4NjI1MjExNyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MzFkYTE3YjQ4NDgxYzY1NyUzQTB4YTUxZmEzMjE1NTFiMzU4ZSEyc1BlbnRhZ29uJTIwTGVhcm5pbmclMjAlN0MlMjBTZWMlMjAzJTIwNCUyMEElMjBNYXRoJTIwVHVpdGlvbiUyMEpDJTIwSDIlMjBNYXRoJTIwVHVpdGlvbiE1ZTAhM20yITFzZW4hMnNzZyE0djE2OTc2MzYyOTkzMjQhNW0yITFzZW4hMnNzZ1wiXG4gICAgXG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChnbWFwc0lmcmFtZSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0gb3BlbmluZyBob3VycyAtLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzVGl0bGUgPSBjcmVhdGVEaXYoJ3RpdGxlJyk7XG4gICAgb3BlbmluZ0hvdXJzVGl0bGUuaW5uZXJUZXh0ID0gJ09wZW5pbmcgSG91cnMnXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzVGV4dCA9IGNyZWF0ZURpdigndGV4dCcpO1xuICAgIG9wZW5pbmdIb3Vyc1RleHQuaW5uZXJUZXh0ID0gYFdlZWtkYXlzICR7b3BlbmluZ0hvdXJzLndrZGF5T3Blbn1hbSAtICR7b3BlbmluZ0hvdXJzLndrZGF5Q2xvc2UlMTJ9cG0gXFxuIFdlZWtlbmRzICR7b3BlbmluZ0hvdXJzLndrZW5kT3Blbn1hbSAtICR7b3BlbmluZ0hvdXJzLndrZW5kQ2xvc2UlMTJ9cG0gXFxuIENsb3NlZCBvbiBUdWVzZGF5c2BcblxuXG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzVGl0bGUpO1xuICAgIGNvbnRhY3RNYWluRGl2LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc1RleHQpO1xuXG5cbiAgICBcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0gcmVzZXJ2YXRpb24gZm9ybSAtLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgIFxuICAgIC8vIGNyZWF0ZSB0aXRsZSBhbmQgYXBwZW5kXG4gICAgY29uc3QgcmVzZXJ2ZVRpdGxlID0gY3JlYXRlRGl2KCd0aXRsZScpXG4gICAgcmVzZXJ2ZVRpdGxlLmlubmVyVGV4dCA9ICdNYWtlIGEgcmVzZXJ2YXRpb24nXG5cbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChyZXNlcnZlVGl0bGUpO1xuXG4gICAgLy8gY3JlYXRlIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uYWN0aW9uID0gJyc7XG4gICAgZm9ybS5tZXRob2QgPSAncG9zdCdcblxuICAgIC8vIGZvcm0gd2lsbCBoYXZlIDMgZHJvcGRvd24gaW5wdXRzXG4gICAgLy8gMSkgcGFydHkgc2l6ZVxuICAgIC8vIDIpIGRhdGVcbiAgICAvLyAzKSB0aW1lXG5cbiAgICBsZXQgZGF0ZVRpbWVBcnIgPSBbXTtcbiAgICBsZXQgZGF0ZVRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBcbiAgICB3aGlsZSAoZGF0ZVRpbWVBcnIubGVuZ3RoIDwgMykge1xuICAgICAgICBkYXRlVGltZUFyci5wdXNoKG9wZW5pbmdIb3Vycy5uZXh0QXZhaWxhYmxlVGltZShkYXRlVG9kYXkpKTtcbiAgICAgICAgZGF0ZVRvZGF5LnNldERhdGUoZGF0ZVRvZGF5LmdldERhdGUoKSArIDEpO1xuICAgICAgICBpZiAoZGF0ZVRvZGF5LmdldERheSgpID09PSAwIHx8IGRhdGVUb2RheS5nZXREYXkoKSA9PT0gNikge1xuICAgICAgICAgICAgZGF0ZVRvZGF5LnNldEhvdXJzKG9wZW5pbmdIb3Vycy53a2VuZE9wZW4tMSwgNTkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRvZGF5LnNldEhvdXJzKG9wZW5pbmdIb3Vycy53a2RheU9wZW4tMSwgNTkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGRhdGVBcnIgPSBbXVxuICAgIGRhdGVUaW1lQXJyLmZvckVhY2goKGVsZW1lbnQpPT4ge1xuICAgICAgICBkYXRlQXJyLnB1c2goZWxlbWVudFswXSk7XG4gICAgfSlcblxuICAgIGxldCB0aW1lQXJyID0gWy4uLmRhdGVUaW1lQXJyWzBdWzFdXTtcblxuICAgIGNvbnN0IHBhcnR5U2l6ZUlucHV0ID0gY3JlYXRlRHJvcGRvd24oJ3BhcnR5U2l6ZScsICdQYXJ0eSBTaXplJywgJ3BhcnR5U2l6ZScsIDEsIFsxLDIsMyw0LDUsNl0sJ3BhcnR5U2l6ZScpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRHJvcGRvd24oJ2RhdGVJbnB1dCcsICdEYXRlJywgJ2RhdGUnLCAxLCBkYXRlQXJyICwgJ2RhdGVJbnB1dCcpO1xuXG4gICAgY29uc3QgdGltZUlucHV0ID0gY3JlYXRlRHJvcGRvd24oJ3RpbWVJbnB1dCcsICdUaW1lJywgJ3RpbWUnLCAxLCB0aW1lQXJyICwndGltZUlucHV0Jyk7XG5cbiAgICAvLyBjcmVhdGUgYnV0dG9uXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gJ1Jlc2VydmUgYSB0YWJsZSdcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBhcnR5U2l6ZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGNvbnRhY3RNYWluRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RNYWluRGl2XG59XG5cblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBkcm9wZG93biBhbmQgbGFiZWwsIHJldHVybnMgYm90aCBlbGVtZW50cyB1bmRlciBhIGRpdlxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oaWQsIGxhYmVsTmFtZSwgaW5wdXROYW1lLCBkcm9wZG93blNpemUsIG9wdGlvbnNBcnIsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IGNyZWF0ZURpdihjbGFzc05hbWUpXG5cbiAgICAvLyBjcmVhdGUgbGFiZWwgZm9yIGRyb3Bkb3duXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG4gICAgbGFiZWxFbGVtZW50LmlubmVyVGV4dCA9IGxhYmVsTmFtZVxuXG4gICAgLy8gY3JlYXRlIHNlbGVjdCBpbnB1dFxuICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGRyb3Bkb3duRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGRyb3Bkb3duRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpbnB1dE5hbWUpO1xuICAgIGRyb3Bkb3duRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkcm9wZG93blNpemUpO1xuICAgIGRyb3Bkb3duRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgLy8gY3JlYXRlIG9wdGlvbnNcbiAgICBvcHRpb25zQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50KTtcbiAgICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50XG5cbiAgICAgICAgZHJvcGRvd25FbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG4gICAgfSlcblxuXG4gICAgaW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gICAgaW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKGRyb3Bkb3duRWxlbWVudCk7XG5cblxuICAgIHJldHVybiBpbnB1dFdyYXBwZXJcbn1cblxuIiwiLy8gSUlGRSB0byBleHRlbmQgRGF0ZSBvYmplY3QgcHJvdG90eXBlXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG5cbiAgICBjb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bHknLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuICAgIERhdGUucHJvdG90eXBlLmdldERheU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkYXlzW3RoaXMuZ2V0RGF5KCldO1xuICAgIH07XG5cbiAgICBEYXRlLnByb3RvdHlwZS5nZXRNb250aE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtb250aHNbdGhpcy5nZXRNb250aCgpXTtcbiAgICB9O1xufSkoKTtcblxuXG4vLyBkYXRlIHRpbWUgZ2VuZXJhdG9yIGNsYXNzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5pbmdIb3VycyB7XG4gICAgY29uc3RydWN0b3Iod2tkYXlPcGVuLCB3a2RheUNsb3NlLCB3a2VuZE9wZW4sIHdrZW5kQ2xvc2UpIHtcbiAgICAgICAgdGhpcy53a2RheU9wZW4gPSB3a2RheU9wZW47XG4gICAgICAgIHRoaXMud2tkYXlDbG9zZSA9IHdrZGF5Q2xvc2U7XG4gICAgICAgIHRoaXMud2tlbmRPcGVuID0gd2tlbmRPcGVuO1xuICAgICAgICB0aGlzLndrZW5kQ2xvc2UgPSB3a2VuZENsb3NlO1xuICAgICAgICB0aGlzLndrZGF5U2xvdHMgPSB0aGlzLl9nZW5lcmF0ZVRpbWVTbG90cyh3a2RheU9wZW4sIHdrZGF5Q2xvc2UpO1xuICAgICAgICB0aGlzLndrZW5kU2xvdHMgPSB0aGlzLl9nZW5lcmF0ZVRpbWVTbG90cyh3a2VuZE9wZW4sIHdrZW5kQ2xvc2UpO1xuICAgIH1cblxuICAgIF9pc1drZW5kKGRhdGVPYmopIHtcbiAgICAgICAgaWYgKGRhdGVPYmouZ2V0RGF5KCk9PT0wIHx8IGRhdGVPYmouZ2V0RGF5KCkgPT09IDYpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBfY2FmZUlzQ2xvc2VkKGRhdGVPYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzV2tlbmQpIHtcbiAgICAgICAgICAgIGlmIChkYXRlT2JqLmdldEhvdXJzKCk8IHRoaXMud2tlbmRDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0ZU9iai5nZXRIb3VycygpIDwgdGhpcy53a2RheUNsb3NlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHRBdmFpbGFibGVUaW1lKGRhdGVPYmopIHtcbiAgICAgICAgaWYgKGRhdGVPYmouZ2V0RGF5KCkgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGJlY2F1c2UgY2FmZSBpcyBjbG9zZWQgdHVlc2RheXNcblxuICAgICAgICAgICAgLy8gbm90ZTogdGhlcmUncyBubyBuZWVkIHRvIGNsb25lISB3ZSBTSE9VTEQgY2hhbmdlIHRoZSBkYXRlT2JqIGRpcmVjdGx5XG4gICAgICAgICAgICBkYXRlT2JqLnNldERhdGUoZGF0ZU9iai5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0SG91cnModGhpcy53a2RheU9wZW4gLSAxKTtcblxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0QXZhaWxhYmxlVGltZShkYXRlT2JqKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jYWZlSXNDbG9zZWQoZGF0ZU9iaikpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGNhZmUgaXMgY2xvc2VkIChhZnRlciA2cG0pXG4gICAgIFxuICAgICAgICAgICAgLy8gbm90ZTogdGhlcmUncyBubyBuZWVkIHRvIGNsb25lISB3ZSBTSE9VTEQgY2hhbmdlIHRoZSBkYXRlT2JqIGRpcmVjdGx5XG4gICAgICAgICAgICBkYXRlT2JqLnNldERhdGUoZGF0ZU9iai5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1drZW5kKGRhdGVPYmopKSB7XG4gICAgICAgICAgICAgICAgZGF0ZU9iai5zZXRIb3Vycyh0aGlzLndrZW5kT3BlbiAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHRoaXMud2tkYXlPcGVuIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0QXZhaWxhYmxlVGltZShkYXRlT2JqKTsgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZWxzZSByZXR1cm4gY3VycmVudCBkYXRlIGluIHN0ciBmb3JtXG4gICAgICAgICAgICAvLyBhbHNvIHJldHVybiB0aGUgcmVtYWluaW5nT3BlbmluZ0hvdXJzIGluIGFuIEFycmF5XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGAoJHtkYXRlT2JqLmdldERheU5hbWUoKX0pICR7ZGF0ZU9iai5nZXRNb250aE5hbWUoKX0gJHtkYXRlT2JqLmdldERhdGUoKX0sICR7ZGF0ZU9iai5nZXRGdWxsWWVhcigpfWBcbiAgICAgICAgICAgIC8vIGUuZy4gKEZyaSkgT2N0IDIwLCAyMDIzXG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nT3BlbkhvdXJzQXJyPSB0aGlzLmdldFJlbWFpbmluZ1RpbWVTbG90c1RvZGF5KGRhdGVPYmopXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBbZGF0ZVN0ciwgcmVtYWluaW5nT3BlbkhvdXJzQXJyXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGUgZGF0ZXN0ciBvZiBuZXh0IDMgZGF5cyBjYWZlIGlzIG9wZW4oaW5jbHVzaXZlIG9mIHRvZGF5KVxuXG5cbiAgICAvLyBnZW5lcmF0ZSByZW1haW5pbmcgdGltZXNsb3RzIGJhc2VkIG9uIHRpbWUgbm93XG4gICAgZ2V0UmVtYWluaW5nVGltZVNsb3RzVG9kYXkoZGF0ZU9iaikge1xuICAgICAgICBsZXQgcmVtYWluaW5nT3BlbkhvdXJzQXJyID0gW107XG4gICAgICAgIGlmICh0aGlzLl9pc1drZW5kKGRhdGVPYmopKSB7XG4gICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIgPSBbLi4udGhpcy53a2VuZFNsb3RzXTtcbiAgICAgICAgICAgIHdoaWxlIChkYXRlT2JqLmdldEhvdXJzKCkgPiBOdW1iZXIocmVtYWluaW5nT3BlbkhvdXJzQXJyWzBdLnN1YnN0cmluZygwLDIpKSkge1xuICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlT2JqLmdldEhvdXJzKCkgPT0gTnVtYmVyKHJlbWFpbmluZ09wZW5Ib3Vyc0FyclswXS5zdWJzdHJpbmcoMCwyKSkgJiYgZGF0ZU9iai5nZXRNaW51dGVzKCk+TnVtYmVyKHJlbWFpbmluZ09wZW5Ib3Vyc0FyclswXS5zbGljZSgtMiwpKSkge1xuICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIgPSBbLi4udGhpcy53a2RheVNsb3RzXTtcbiAgICAgICAgICAgIHdoaWxlIChkYXRlT2JqLmdldEhvdXJzKCkgPiBOdW1iZXIocmVtYWluaW5nT3BlbkhvdXJzQXJyWzBdLnN1YnN0cmluZygwLDIpKSkge1xuICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChkYXRlT2JqLmdldEhvdXJzKCkgPT0gTnVtYmVyKHJlbWFpbmluZ09wZW5Ib3Vyc0FyclswXS5zdWJzdHJpbmcoMCwyKSkgJiZkYXRlT2JqLmdldE1pbnV0ZXMoKT4zMCkge1xuICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW1haW5pbmdPcGVuSG91cnNBcnI7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRpbWUgc2xvdHMgYmFzZWQgb24gb3BlbmluZyBjbG9zaW5nIHRpbWVcbiAgICBfZ2VuZXJhdGVUaW1lU2xvdHMob3BlbixjbG9zZSkge1xuICAgICAgICBsZXQgdGltZVNsb3RBcnIgPSBbXVxuICAgICAgICB3aGlsZSAob3BlbiA8IGNsb3NlKSB7XG4gICAgICAgICAgICBpZiAob3BlbjwxMCkge1xuICAgICAgICAgICAgICAgIHRpbWVTbG90QXJyLnB1c2goJzAnK29wZW4rJzowMCcpO1xuICAgICAgICAgICAgICAgIHRpbWVTbG90QXJyLnB1c2goJzAnK29wZW4rJzozMCcpO1xuICAgICAgICAgICAgICAgIG9wZW4rPTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWVTbG90QXJyLnB1c2goJycrb3BlbisnOjAwJyk7XG4gICAgICAgICAgICAgICAgdGltZVNsb3RBcnIucHVzaCgnJytvcGVuKyc6MzAnKTtcbiAgICAgICAgICAgICAgICBvcGVuKz0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lU2xvdEFycjtcbiAgICB9XG59XG5cbi8vIFF1ZXN0aW9uc1xuLy8gMSkgaWYgaSBjYWxsZWQgT3BlbmluZ0hvdXJzLm5leHRBdmFpbGFibGVUaW1lKCkgZnJvbSBhbm90aGVyIGZpbGUsIHdvdWxkIGl0IGhhdmUgYWNjZXNzIHRvIHRoZSBJSUZFP1xuLy8gMikgbmVlZCB0byBpbXBsZW1lbnQgc29tZXRoaW5nIG9mIHdoaWxlIChhdmFpbGFibGVEYXRlc0Fyci5sZW5ndGggPCAzKSB7Z2VuZXJhdGUgbW9yZSBkYXRlc31cbi8vICAgICh3aWxsIHByb2JhYmx5IG5lZWQgdG8ga2VlcCBhIGNvdW50ZXIgdG8gaW5jcmVtZW50IGJ5IDEpXG4vL1xuLy8gQW5zd2Vyc1xuLy8gMSkgWWVzIiwiaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVJTUcgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNwbGFzaElNR0ZpbGUgZnJvbSAnLi9pbWcvbGF0dGUtYXJ0LmpwZWcnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgLy9jcmVhdGUgc3BsYXNoIGNvbnRhaW5lclxuICAgIGNvbnN0IHNwbGFzaCA9IGNyZWF0ZURpdignc3BsYXNoJyk7XG4gICAgc3BsYXNoLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BsYXNoJylcblxuICAgIC8vY3JlYXRlIGltZyBcbiAgICBjb25zdCBzcGxhc2hJbWdFbGVtZW50ID0gY3JlYXRlSU1HKHNwbGFzaElNR0ZpbGUpXG5cbiAgICAvL2NyZWF0ZSB0ZXh0IGRpdiB3aXRoIGNsYXNzICdzcGxhc2hUZXh0MSdcbiAgICBjb25zdCBzcGxhc2hUZXh0MSA9IGNyZWF0ZURpdignc3BsYXNoVGV4dDEnKTtcbiAgICBzcGxhc2hUZXh0MS5pbm5lclRleHQgPSAnQ09NRSBUTyBPRElOXFwnUydcbiAgICBcbiAgICAvL2NyZWF0ZSB0ZXh0IGRpdiB3aXRoIGNsYXNzICdzcGxhc2hUZXh0MidcbiAgICBjb25zdCBzcGxhc2hUZXh0MiA9IGNyZWF0ZURpdignc3BsYXNoVGV4dDInKTtcbiAgICBzcGxhc2hUZXh0Mi5pbm5lclRleHQgPSAnRk9SIEEgV0FSTSBDVVBQQSBKT1khJ1xuICAgIFxuICAgIC8vYXBwZW5kIGltZyB0byBzcGxhc2hcbiAgICBzcGxhc2guYXBwZW5kQ2hpbGQoc3BsYXNoSW1nRWxlbWVudCk7XG4gICAgc3BsYXNoLmFwcGVuZENoaWxkKHNwbGFzaFRleHQxKTtcbiAgICBzcGxhc2guYXBwZW5kQ2hpbGQoc3BsYXNoVGV4dDIpO1xuICAgIFxuICAgIC8vcmV0dXJuIChhbmQgYXBwZW5kIHRvIGNvbnRlbnQgZGl2KVxuICAgIHJldHVybiBzcGxhc2hcbn1cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBmYlNWRyBmcm9tICcuL2ltZy9mYi5zdmcnO1xuaW1wb3J0IGluc3RhU1ZHIGZyb20gJy4vaW1nL2luc3RhLnN2Zyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltZy9sb2dvLWJsYWNrLWNvbG91cmVkLnBuZyc7XG5cbmltcG9ydCBPcGVuaW5nSG91cnMgZnJvbSBcIi4vZGF0ZVRpbWVHZW5lcmF0b3IuanNcIlxuXG5cbi8vIGNyZWF0ZSBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZURpdigpO1xuaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdoZWFkZXInKTtcblxuY29uc3QgbG9nb0VsZW1lbnQgPSBjcmVhdGVJTUcobG9nbywgJ2xvZ28nKTtcbmxvZ29FbGVtZW50LnN0eWxlLmhlaWdodCA9ICc2cmVtJztcbmxvZ29FbGVtZW50LnN0eWxlLndpZHRoID0gJzZyZW0nO1xuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29FbGVtZW50KTtcblxuLy8gY3JlYXRlIGNsaWNrYWJsZSB0YWJzXG5bJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGNyZWF0ZURpdigpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS50b0xvd2VyQ2FzZSgpKTtcbiAgICBkaXYuaW5uZXJUZXh0PWl0ZW07XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XG59KVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcblxuLy8gY3JlYXRlIGNvbnRlbnQgYXJlYVxuY29uc3QgY29udGVudERpdiA9IGNyZWF0ZURpdigpO1xuY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7IFxuXG4vLyBjcmVhdGUgZm9vdGVyXG5jb25zdCBmb290ZXIgPSBjcmVhdGVEaXYoKTtcbmZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4vLyBjcmVhdGUgc29jaWFsIG1lZGlhIGNvbnRhaW5lciBkaXZcbmNvbnN0IHNvY2lhbE1lZGlhQ29udGFpbmVyRGl2ID0gY3JlYXRlRGl2KCdzb2NpYWxNZWRpYUNvbnRhaW5lckRpdicpO1xuXG5cbltmYlNWRywgaW5zdGFTVkddLmZvckVhY2goKGltZ0ZpbGUpPT4ge1xuICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBjcmVhdGVJTUcoaW1nRmlsZSk7XG4gICAgc29jaWFsTWVkaWFDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG59KTtcbmZvb3Rlci5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUNvbnRhaW5lckRpdik7XG5cbi8vIHBob3RvIGNyZWRpdHMgLSBkbyBub3QgcmVtb3ZlXG5jb25zdCBwaG90b0NyZWRpdHMgPSBjcmVhdGVEaXYoKVxucGhvdG9DcmVkaXRzLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclRleHQnKTtcbnBob3RvQ3JlZGl0cy5pbm5lclRleHQgPSAnUGhvdG8gYnkgUHJhZnVsIERhcyB3d3cucGV4ZWxzLmNvbSdcblxuZm9vdGVyLmFwcGVuZENoaWxkKHBob3RvQ3JlZGl0cyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuXG4vLyBldmVudGxpc3RlbmVyIGZvciBob21lLCBtZW51LCBjb250YWN0IHRhYnNcblxuWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLnRvTG93ZXJDYXNlKCkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFRhYik7XG59KVxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGRpdnNcbmZ1bmN0aW9uIGNyZWF0ZURpdihjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIC8vIGlmIGNsYXNzTmFtZSBlbXB0eSBkb24ndCBhZGQgY2xhc3MgdG8gZGl2XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBkaXZcbn1cblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBpbWcgZWxlbWVudHNcbmZ1bmN0aW9uIGNyZWF0ZUlNRyhpbWdzcmMsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdFbGVtZW50LnNyYyA9IGltZ3NyYztcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGltZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gaW1nRWxlbWVudDtcbn1cblxuZXhwb3J0IHtjcmVhdGVEaXYsIGNyZWF0ZUlNR31cbi8vIGV4cG9ydCBjcmVhdGVEaXYgYW5kIGNyZWF0ZUlNR1xuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gcmVtdm9lIGFsbCBjaGlsZCBub2Rlc1xuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGxvYWQgdGFiIGJhc2VkIG9uIGNsaWNrIGV2ZW50XG5cbmZ1bmN0aW9uIGxvYWRUYWIoZXZ0KSB7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50RGl2KTtcbiAgICBsZXQgb3BlbmluZ0hvdXJzID0gbmV3IE9wZW5pbmdIb3VycygxMSwgMTgsIDksIDE4KTtcbiAgICBzd2l0Y2ggKGV2dC50YXJnZXQuaWQpIHtcbiAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuICAgICAgICAgICAgcGhvdG9DcmVkaXRzLmlubmVyVGV4dCA9ICdQaG90byBieSBQcmFmdWwgRGFzIHd3dy5wZXhlbHMuY29tJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkTWVudSgpKTtcbiAgICAgICAgICAgIHBob3RvQ3JlZGl0cy5pbm5lclRleHQgPSAnUGhvdG8gYnkgc2VyaGlpX2JvYnlrIG9uIEZyZWVwaWsgXFxuIFBob3RvIGJ5IEFyeWEgQmFqcmEgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IER6ZW5pbmEgTHVrYWMgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IFBpeGFiYXkgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IE5hdGFuIE1hY2hhZG8gRm90b2dyYWZpYSBHYXN0cm9uw7RtaWNhIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBLcmlzdGluYSBQYXVrc2h0aXRlIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBWaWN0b3IgRnJlaXRhcyB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgQ2hldmFub24gUGhvdG9ncmFwaHkgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IENhc2EgTm9ydGUgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IENoYXJsb3R0ZSBNYXkgd3d3LnBleGVscy5jb20nXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRDb250YWN0KG9wZW5pbmdIb3VycykpO1xuICAgICAgICAgICAgcGhvdG9DcmVkaXRzLmlubmVyVGV4dCA9ICcnXG4gICAgICAgICAgICBhZGRFdnRMaXN0ZW5lcihvcGVuaW5nSG91cnMpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8vIGxvYWQgaG9tZSBwYWdlIGJ5IGRlZmF1bHRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKSk7XG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCBldmVudCBsaXN0ZW5lciB0byB1cGRhdGUgdGltZSBzbG90cyB3aGVuIGNob29zaW5nIGRhdGVzXG5mdW5jdGlvbiBhZGRFdnRMaXN0ZW5lcihPcGVuaW5nSG91cnMpIHtcbiAgICBjb25zdCB0aW1lRHJvcGRvd25NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVJbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVEcm9wZG93bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZUlucHV0Jyk7XG4gICAgZGF0ZURyb3Bkb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZ0KT0+IHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh0aW1lRHJvcGRvd25NZW51KVxuICAgICAgICBjb25zb2xlLmxvZyhldnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhldnQudGFyZ2V0WzBdLnNlbGVjdGVkKTtcbiAgICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IG5ldyBEYXRlKGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAoZXZ0LnRhcmdldFswXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgdGltZVNsb3RUb2RheSA9IE9wZW5pbmdIb3Vycy5nZXRSZW1haW5pbmdUaW1lU2xvdHNUb2RheShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIHRpbWVTbG90VG9kYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGltZURyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjaG9zZW5EYXRlLmdldERheSgpPT09NiB8fCBjaG9zZW5EYXRlLmdldERheSgpPT09MCkge1xuICAgICAgICAgICAgICAgIE9wZW5pbmdIb3Vycy53a2VuZFNsb3RzLmZvckVhY2goKGVsZW1lbnQpPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IGVsZW1lbnRcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRpbWVEcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPcGVuaW5nSG91cnMud2tkYXlTbG90cy5mb3JFYWNoKChlbGVtZW50KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aW1lRHJvcGRvd25NZW51LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufSIsImltcG9ydCBtZW51MSBmcm9tICcuL2ltZy9tZW51MS5wbmcnO1xuaW1wb3J0IG1lbnUyIGZyb20gJy4vaW1nL21lbnUyLnBuZyc7XG5pbXBvcnQgbWVudTMgZnJvbSAnLi9pbWcvbWVudTMucG5nJztcbmltcG9ydCBtZW51NCBmcm9tICcuL2ltZy9tZW51NC5wbmcnO1xuaW1wb3J0IG1lbnU1IGZyb20gJy4vaW1nL21lbnU1LnBuZyc7XG5pbXBvcnQgbWVudTYgZnJvbSAnLi9pbWcvbWVudTYucG5nJztcblxuaW1wb3J0IGNvZmZlZTEgZnJvbSAnLi9pbWcvY29mZmVlMS5wbmcnO1xuaW1wb3J0IGNvZmZlZTIgZnJvbSAnLi9pbWcvY29mZmVlMi5wbmcnO1xuaW1wb3J0IGNvZmZlZTMgZnJvbSAnLi9pbWcvY29mZmVlMy5wbmcnO1xuXG5pbXBvcnQgdGVhMSBmcm9tICcuL2ltZy90ZWExLnBuZyc7XG5cbmNvbnN0IGZvb2RJbWdBcnJheSA9IFtbbWVudTEsJ1RJUk9LUk9LRVRFUyBcXG4gZnJpZWQgY2hlZXNlIGJhbGxzLCBncmVlayBmZXRhLCBzb2Z0IGdvdWRhLCBjaGVkZGFyLCBlZ2dwbGFudCwgZnJlc2ggYmFzaWwgbGVhdmVzICddLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFttZW51MiwgJ09OSU9OIFJJTkdTIFxcbiBicmVhZGVkIG9uaW9uIHJpbmdzLCBtYXlvLXNyaXJhY2hhIHNhdWNlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21lbnUzLCAnVFJVRkZMRSBGUklFUyBcXG4gYmVsZ2l1bSBwb3RhdG8sIHdoaXRlIHRydWZmbGUgb2lsLCBncmF0ZWQgcGFybWVzYW4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW21lbnU0LCAnUEFQUklLQSBDUklTUFkgV0lOR1MgXFxuIGhhbmQgYnJlYWRlZCwgbGlnaHRseSB0b3NzZWQgaW4gcGFwcmlrYSBwb3dkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51NSwgJ01FQVQgTE9WRVIgQlVSR0VSIFxcbiBkb3VibGUgY2hlZXNlLCBvbmlvbiByaW5ncywgYmFjb24sIDEwMGcgZ3JhaW4gZmVkIGJlZWYgcGF0dHksIHBvdGF0byBidW4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudTYsICdDTEFTU0lDIE1BR0hFUklUQSBcXG4gZnJlc2ggdG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBmcmVzaCBiYXNpbCBsZWF2ZXMsIG9saXZlIG9pbCddXVxuY29uc3QgZHJpbmtJbWdBcnJheSA9IFtbY29mZmVlMSwgJ0RSSVAgQ09GRkVFIFxcbiBldGhpb3BpYSwgbm90ZXM6IGJlcnJpZXMsIGVsZGVyZmxvd2VyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29mZmVlMiwgJ0VTUFJFU1NPIFxcbiBzaW5nbGUvZG91YmxlIHNob3QnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY29mZmVlMywgJ0lDRUQgQU1FUklDQU5PIFxcbiBzaW5nbGUgc2hvdCBlc3ByZXNzbywgZmlsdGVyZWQgd2F0ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlYTEsICdNQVRDSEEgTEFUVEUgXFxuIHVqaSBtYXRjaGEgZXNwcmVzc28sIHNveS9vYXQgbWlsayAnXV1cblxuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVJTUcgfSBmcm9tICcuJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtZW51TWFpbkRpdiA9IGNyZWF0ZURpdigpO1xuICAgIG1lbnVNYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudU1haW4nKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tIGZvb2QgbWVudSAtLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3QgZm9vZE1lbnVEaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBmb29kTWVudURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb2RNZW51Jyk7XG5cbiAgICBmb29kSW1nQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlRGl2KCdtZW51SXRlbUNvbnRhaW5lcicpO1xuICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBjcmVhdGVJTUcoZWxlbWVudFswXSwgJ21lbnUnKTtcbiAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGNyZWF0ZURpdignZGVzY3JpcHRpb24nKTtcbiAgICAgICBkZXNjcmlwdGlvbkRpdi5pbm5lclRleHQgPSBlbGVtZW50WzFdO1xuXG4gICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICAgZm9vZE1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgfSlcblxuICAgIG1lbnVNYWluRGl2LmFwcGVuZENoaWxkKGZvb2RNZW51RGl2KTtcbiAgICBcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tIGRyaW5rcyBtZW51IC0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBcbiAgICBjb25zdCBkcmlua01lbnVEaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBkcmlua01lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkcmlua01lbnUnKTtcblxuICAgIGRyaW5rSW1nQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZURpdignZHJpbmtJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBjcmVhdGVJTUcoZWxlbWVudFswXSwgJ2RyaW5rJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRGl2KCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5pbm5lclRleHQgPSBlbGVtZW50WzFdXG5cbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICBkcmlua01lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH0pXG5cbiAgICBtZW51TWFpbkRpdi5hcHBlbmRDaGlsZChkcmlua01lbnVEaXYpO1xuXG4gICAgcmV0dXJuIG1lbnVNYWluRGl2XG59XG5cbi8vIFBob3RvIGJ5IHNlcmhpaV9ib2J5ayBvbiBGcmVlcGlrXG4vLyBQaG90byBieSBBcnlhIEJhanJhIHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBEemVuaW5hIEx1a2FjIHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBQaXhhYmF5IHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBOYXRhbiBNYWNoYWRvIEZvdG9ncmFmaWEgR2FzdHJvbsO0bWljYSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgS3Jpc3RpbmEgUGF1a3NodGl0ZSB3d3cucGV4ZWxzLmNvbVxuXG5cbi8vIFBob3RvIGJ5IFZpY3RvciBGcmVpdGFzIHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBDaGV2YW5vbiBQaG90b2dyYXBoeSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgQ2FzYSBOb3J0ZSB3d3cucGV4ZWxzLmNvbVxuXG4vLyBQaG90byBieSBDaGFybG90dGUgTWF5IHd3dy5wZXhlbHMuY29tIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9