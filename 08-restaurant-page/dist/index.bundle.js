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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'cafeFont0';\n    src: url(./fonts/Avenir-Next-LT-W04-Thin.ttf);\n}\n@font-face {\n    font-family: 'cafeFont1';\n    src: url(./fonts/meticula-bold.ttf);\n}\n\n:root {\n    --orange1: #ff5311;\n    --orange2: #ff7844;\n    --orange3: #ff9d77;\n    --black: #111;\n    --grey: #e6e6e6;\n    --white: #fff;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n    background-color: var(--black);\n\n    font-family: 'cafeFont1';\n\n    font-size: calc(100vw/30); /* 1rem calculated dynamically */\n}\n\n/* ------------------------------ */\n/* ------- header section ------- */\n/* ------------------------------ */\n\n#header {\n    width: 100vw;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.logo,\n#home,\n#menu,\n#contact {\n    font-size: 1.5rem;\n    transition: all 0.2s ease-in;\n\n    color: var(--orange2);\n}\n\n#home:hover,\n#menu:hover,\n#contact:hover {\n    font-size: 1.8rem;\n    text-decoration: underline;\n}\n\n/* ------------------------------- */\n/* ------- content section ------- */\n/* ------------------------------- */\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    height: fit-content;\n    margin-bottom: 3rem;\n}\n\n#splash {\n    width: 100vw;\n    position: relative;\n}\n\n#splash img {\n    width: inherit; /* image does not command viewport */\n    filter: brightness(50%); \n    height: calc(100vw - 20px);\n    max-height: 748px;\n    \n    object-fit: cover;\n    object-position: 0% 60%;\n    \n    position: relative;\n}\n\n.splashText1 {\n    position: absolute;\n    top: 0;\n    \n    text-align: center;\n    \n    \n    padding: 2rem;\n    \n    background-color: transparent;\n    \n    font-family: 'cafeFont0';\n    font-size: 2rem;\n    \n    color: var(--orange3);\n}\n\n.splashText2 {\n    position: absolute;\n    bottom: 0;\n    left: 2rem;\n    \n    text-align: center;\n    \n    \n    padding: 1rem;\n    \n    background-color: transparent;\n    \n    font-family: 'cafeFont0';\n    font-size: 2rem;\n    \n    color: var(--orange3);\n}\n\n/* styles for menu tab */\n\n#menuMain {\n    width: 100vw;\n}\n\n#menuMain *:not(.description){\n    width: inherit;\n}\n\n#foodMenu {\n    display: grid;\n\n    grid-auto-flow: row;\n    grid-auto-rows: 15rem;\n\n    gap: 3rem;\n\n    margin-bottom: 3rem;\n}\n\n#foodMenu *img {\n    object-fit: cover;\n    width: 100%;\n    height: inherit;\n\n}\n\n#foodMenu>div {\n    height: inherit;\n\n    overflow: hidden;\n}\n\n#drinkMenu {\n    display: grid;\n\n    grid-auto-flow: row;\n    grid-auto-rows: 15rem;\n\n    gap: 3rem;\n}\n\n#drinkMenu *img {\n    object-fit: cover;\n    width: 100%;\n    height: inherit;\n}\n\n#drinkMenu>div {\n    height: inherit;\n\n    overflow: hidden;\n}\n\n.menuItemContainer,\n.drinkItemContainer {\n    position: relative;\n}\n\n.description {\n    position: absolute;\n\n    width: 33vw;\n    max-width: 256px;\n\n    top: 1rem;\n    right: -10rem;\n    background-color: transparent;\n    \n    color: transparent;\n    font-family: 'cafeFont0';\n\n    font-size: 1rem;\n}\n\n.menuItemContainer:hover .description{\n    transition: all 0.5s ease-in;\n    right: 0.5rem;\n    color: #e6e6e6;\n}\n\n.menuItemContainer:hover img {\n    transition: all 0.5s ease-in;\n    filter: brightness(0.5);\n    transform: scale(1.2);\n}\n\n.drinkItemContainer:hover .description{\n    transition: all 0.5s ease-in;\n    right: 0.5rem;\n    color: #e6e6e6;\n}\n\n.drinkItemContainer:hover img {\n    transition: all 0.5s ease-in;\n    filter: brightness(0.5);\n    transform: scale(1.2);\n}\n\n.title {\n    color: #e6e6e6;\n\n    font-size: 1.5rem;\n\n    margin-top: 1rem;\n}\n\n.text {\n    color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\n#gmapsIframe {\n    width: 80vw;\n    max-width: 614px;\n\n    height: 60vw;\n    max-height: 460px;\n\n    border: none;\n}\n\nform {\n    display: grid;\n    grid-column: 1fr 1fr;\n    grid-row: 1fr 1fr;\n    gap: 1rem;\n}\n\n.partySize {\n    grid-column:1/ span 2;\n    grid-row: 1/ span 1;\n}\n\n.dateInput {\n    grid-column: 1/ span 1;\n    grid-row: 2/ span 1;\n}\n\n.timeInput {\n    grid-column: 2/ span 1;\n    grid-row: 2/ span 1;\n}\n\nform label {\n    color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\nform select {\n    display: flex;\n    flex-direction: column;\n    background-color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\nform option {\n    background-color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\n/* ------------------------------ */\n/* ------- footer section ------- */\n/* ------------------------------ */\n\n#footer {\n    width: 100vw;\n\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n}\n\n.socialMediaContainerDiv {\n    \n        display: flex;\n        justify-content: space-evenly;\n        \n        width: inherit;\n\n        padding-bottom: 2rem;\n}\n\n.socialMediaContainerDiv  img {\n    height: 2rem;\n    width: 2rem;\n    \n    background-color: var(--grey);\n}\n\n.footerText {\n    color: var(--white);\n\n    font-size: 0.8rem;\n}\n\n@media only screen and (min-width: 768px) {\n    html {\n        font-size: 25px;\n    }\n    body {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        \n    }\n    \n    body * {\n        max-width: 768px;\n\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _dateTimeGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateTimeGenerator.js */ "./src/dateTimeGenerator.js");




function loadContact() {
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
    openingHoursText.innerText = 'Weekdays 11am - 6pm \n Weekends 9am - 6pm \n Closed on Tuesdays'


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

    let openingHours = new _dateTimeGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"](11, 18, 9, 18);

    let dateTimeArr = [];
    let dateToday = new Date();
    
    while (dateTimeArr.length < 3) {
        dateTimeArr.push(openingHours.nextAvailableTime(dateToday));
        dateToday.setDate(dateToday.getDate() + 1);
        if (dateToday.getDay() === 0 || dateToday.getDay() === 6) {
            dateToday.setHours(8, 59);
        } else {
            dateToday.setHours(10, 59);
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

    // event listener to update time slots when choosing dates
    const timeDropdownMenu = document.getElementById('timeInput');
    const dateDropdownMenu = document.getElementById('dateInput');
    dateDropdownMenu.addEventListener('change', (evt)=> {
        (0,___WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(timeDropdownMenu)
        const chosenDate = new Date(evt.value);
        if (chosenDate.getDay()===6 || chosenDate.getDay()===0) {
            _dateTimeGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"].wkendSlots.forEach((element)=> {
                const optionElement = document.createElement('option');
                optionElement.setAttribute('value', element);
                optionElement.innerText = element

                timeDropdownMenu.appendChild(optionElement)
            })
        } else {
            _dateTimeGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"].wkdaySlots.forEach((element)=> {
                const optionElement = document.createElement('option');
                optionElement.setAttribute('value', element);
                optionElement.innerText = element

                timeDropdownMenu.appendChild(optionElement)
        })
    }
})

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
        this.wkdaySlots = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
        this.wkendSlots = ['09:00','09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
    }

    _isWkend(dateObj) {
        if (dateObj.getDay()===0 || dateObj.getDay() === 6) {
            return true
        } else return false
    }

    _cafeIsClosed(dateObj) {
        if (dateObj.getHours()>=18) {
            // check if after 6pm, cafe is closed
            return true
        } 
        return false
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
            let remainingOpenHoursArr=[]
            if (this._isWkend) {
                remainingOpenHoursArr = [...this.wkendSlots];
                while (dateObj.getHours() > Number(remainingOpenHoursArr[0].substring(0,2))) {
                    remainingOpenHoursArr.shift();
                    }
                if (dateObj.getHours() == Number(remainingOpenHoursArr[0].substring(0,2)) && dateObj.getMinutes()>30) {
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
            
            return [dateStr, remainingOpenHoursArr]
        }
}
}

// Questions
// 1) if i called OpeningHours.nextAvailableTime() from another file, would it have access to the IIFE?
// 2) need to implement something of while (availableDatesArr.length < 3) {generate more dates}
//    (will probably need to keep a counter to increment by 1)

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
            contentDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
            photoCredits.innerText = ''
            break;
    }
}

// load home page by default
window.addEventListener('DOMContentLoaded', contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsNENBQTRDLCtIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsY0FBYyxjQUFjLHlCQUF5QixPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLFFBQVEsWUFBWSxjQUFjLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLHNCQUFzQixhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLGNBQWMsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxjQUFjLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFlBQVksY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxhQUFhLFdBQVcsVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLGFB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QUFtQyx1REFBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxvREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJO0FBQ0E7QUFDQTs7QUFFTjs7QUFFbEMsdUJBQXVCLDJDQUFLO0FBQzVCLHlCQUF5QiwyQ0FBSztBQUM5QiwwQkFBMEIsMkNBQUs7QUFDL0IsMkJBQTJCLDJDQUFLO0FBQ2hDLDRCQUE0QiwyQ0FBSztBQUNqQyw2QkFBNkIsMkNBQUs7QUFDbEMsd0JBQXdCLDZDQUFPO0FBQy9CLHlCQUF5Qiw2Q0FBTztBQUNoQywwQkFBMEIsNkNBQU87QUFDakMsMkJBQTJCLDBDQUFJOztBQUUvQixDQUF5Qzs7O0FBRzFCO0FBQ2Ysd0JBQXdCLDZDQUFTO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsNkNBQVM7QUFDakM7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQVM7QUFDakMsMEJBQTBCLDZDQUFTO0FBQ25DLDhCQUE4Qiw2Q0FBUztBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVM7QUFDbEM7O0FBRUE7QUFDQSx5QkFBeUIsNkNBQVM7QUFDbEMsMkJBQTJCLDZDQUFTO0FBQ3BDLCtCQUErQiw2Q0FBUztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RhdGVUaW1lR2VuZXJhdG9yLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BdmVuaXItTmV4dC1MVC1XMDQtVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL21ldGljdWxhLWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDEnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG46cm9vdCB7XG4gICAgLS1vcmFuZ2UxOiAjZmY1MzExO1xuICAgIC0tb3JhbmdlMjogI2ZmNzg0NDtcbiAgICAtLW9yYW5nZTM6ICNmZjlkNzc7XG4gICAgLS1ibGFjazogIzExMTtcbiAgICAtLWdyZXk6ICNlNmU2ZTY7XG4gICAgLS13aGl0ZTogI2ZmZjtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcblxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQxJztcblxuICAgIGZvbnQtc2l6ZTogY2FsYygxMDB2dy8zMCk7IC8qIDFyZW0gY2FsY3VsYXRlZCBkeW5hbWljYWxseSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0gaGVhZGVyIHNlY3Rpb24gLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNoZWFkZXIge1xuICAgIHdpZHRoOiAxMDB2dztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dvLFxuI2hvbWUsXG4jbWVudSxcbiNjb250YWN0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTIpO1xufVxuXG4jaG9tZTpob3ZlcixcbiNtZW51OmhvdmVyLFxuI2NvbnRhY3Q6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tIGNvbnRlbnQgc2VjdGlvbiAtLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuI3NwbGFzaCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3NwbGFzaCBpbWcge1xuICAgIHdpZHRoOiBpbmhlcml0OyAvKiBpbWFnZSBkb2VzIG5vdCBjb21tYW5kIHZpZXdwb3J0ICovXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7IFxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDIwcHgpO1xuICAgIG1heC1oZWlnaHQ6IDc0OHB4O1xuICAgIFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNjAlO1xuICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNwbGFzaFRleHQxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTMpO1xufVxuXG4uc3BsYXNoVGV4dDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMnJlbTtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UzKTtcbn1cblxuLyogc3R5bGVzIGZvciBtZW51IHRhYiAqL1xuXG4jbWVudU1haW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuI21lbnVNYWluICo6bm90KC5kZXNjcmlwdGlvbil7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbiNmb29kTWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE1cmVtO1xuXG4gICAgZ2FwOiAzcmVtO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuI2Zvb2RNZW51ICppbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogaW5oZXJpdDtcblxufVxuXG4jZm9vZE1lbnU+ZGl2IHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jZHJpbmtNZW51IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBncmlkLWF1dG8tcm93czogMTVyZW07XG5cbiAgICBnYXA6IDNyZW07XG59XG5cbiNkcmlua01lbnUgKmltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4jZHJpbmtNZW51PmRpdiB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1lbnVJdGVtQ29udGFpbmVyLFxuLmRyaW5rSXRlbUNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHdpZHRoOiAzM3Z3O1xuICAgIG1heC13aWR0aDogMjU2cHg7XG5cbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IC0xMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xuXG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubWVudUl0ZW1Db250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9ue1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgcmlnaHQ6IDAuNXJlbTtcbiAgICBjb2xvcjogI2U2ZTZlNjtcbn1cblxuLm1lbnVJdGVtQ29udGFpbmVyOmhvdmVyIGltZyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5kcmlua0l0ZW1Db250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9ue1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgcmlnaHQ6IDAuNXJlbTtcbiAgICBjb2xvcjogI2U2ZTZlNjtcbn1cblxuLmRyaW5rSXRlbUNvbnRhaW5lcjpob3ZlciBpbWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4udGl0bGUge1xuICAgIGNvbG9yOiAjZTZlNmU2O1xuXG4gICAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4udGV4dCB7XG4gICAgY29sb3I6ICNlNmU2ZTY7XG5cbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuI2dtYXBzSWZyYW1lIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXgtd2lkdGg6IDYxNHB4O1xuXG4gICAgaGVpZ2h0OiA2MHZ3O1xuICAgIG1heC1oZWlnaHQ6IDQ2MHB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xuICAgIGdyaWQtcm93OiAxZnIgMWZyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnBhcnR5U2l6ZSB7XG4gICAgZ3JpZC1jb2x1bW46MS8gc3BhbiAyO1xuICAgIGdyaWQtcm93OiAxLyBzcGFuIDE7XG59XG5cbi5kYXRlSW5wdXQge1xuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDE7XG4gICAgZ3JpZC1yb3c6IDIvIHNwYW4gMTtcbn1cblxuLnRpbWVJbnB1dCB7XG4gICAgZ3JpZC1jb2x1bW46IDIvIHNwYW4gMTtcbiAgICBncmlkLXJvdzogMi8gc3BhbiAxO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBjb2xvcjogI2U2ZTZlNjtcblxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5mb3JtIHNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG5cbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuZm9ybSBvcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG5cbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tIGZvb3RlciBzZWN0aW9uIC0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuXG4uc29jaWFsTWVkaWFDb250YWluZXJEaXYge1xuICAgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uc29jaWFsTWVkaWFDb250YWluZXJEaXYgIGltZyB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG4uZm9vdGVyVGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gICAgYm9keSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBib2R5ICoge1xuICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuXG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUE2QztBQUNqRDtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCOztJQUV0Qiw4QkFBOEI7O0lBRTlCLHdCQUF3Qjs7SUFFeEIseUJBQXlCLEVBQUUsZ0NBQWdDO0FBQy9EOztBQUVBLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DOztBQUVuQztJQUNJLFlBQVk7O0lBRVosYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTs7OztJQUlJLGlCQUFpQjtJQUNqQiw0QkFBNEI7O0lBRTVCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7O0lBR0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQSxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLG9DQUFvQzs7QUFFcEM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjLEVBQUUsb0NBQW9DO0lBQ3BELHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUJBQWlCOztJQUVqQixpQkFBaUI7SUFDakIsdUJBQXVCOztJQUV2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTs7SUFFTixrQkFBa0I7OztJQUdsQixhQUFhOztJQUViLDZCQUE2Qjs7SUFFN0Isd0JBQXdCO0lBQ3hCLGVBQWU7O0lBRWYscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVOztJQUVWLGtCQUFrQjs7O0lBR2xCLGFBQWE7O0lBRWIsNkJBQTZCOztJQUU3Qix3QkFBd0I7SUFDeEIsZUFBZTs7SUFFZixxQkFBcUI7QUFDekI7O0FBRUEsd0JBQXdCOztBQUV4QjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixtQkFBbUI7SUFDbkIscUJBQXFCOztJQUVyQixTQUFTOztJQUVULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsbUJBQW1CO0lBQ25CLHFCQUFxQjs7SUFFckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTs7SUFFZixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLDZCQUE2Qjs7SUFFN0Isa0JBQWtCO0lBQ2xCLHdCQUF3Qjs7SUFFeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLGlCQUFpQjs7SUFFakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYzs7SUFFZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQixZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYzs7SUFFZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5Qjs7SUFFekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCOztJQUV6QixpQkFBaUI7QUFDckI7O0FBRUEsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7O0FBRW5DO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7UUFFUSxhQUFhO1FBQ2IsNkJBQTZCOztRQUU3QixjQUFjOztRQUVkLG9CQUFvQjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXOztJQUVYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSxnQkFBZ0I7O0lBRXBCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9BdmVuaXItTmV4dC1MVC1XMDQtVGhpbi50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDEnO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL21ldGljdWxhLWJvbGQudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW9yYW5nZTE6ICNmZjUzMTE7XFxuICAgIC0tb3JhbmdlMjogI2ZmNzg0NDtcXG4gICAgLS1vcmFuZ2UzOiAjZmY5ZDc3O1xcbiAgICAtLWJsYWNrOiAjMTExO1xcbiAgICAtLWdyZXk6ICNlNmU2ZTY7XFxuICAgIC0td2hpdGU6ICNmZmY7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDEnO1xcblxcbiAgICBmb250LXNpemU6IGNhbGMoMTAwdncvMzApOyAvKiAxcmVtIGNhbGN1bGF0ZWQgZHluYW1pY2FsbHkgKi9cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLSBoZWFkZXIgc2VjdGlvbiAtLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2hlYWRlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sb2dvLFxcbiNob21lLFxcbiNtZW51LFxcbiNjb250YWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcXG59XFxuXFxuI2hvbWU6aG92ZXIsXFxuI21lbnU6aG92ZXIsXFxuI2NvbnRhY3Q6aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGNvbnRlbnQgc2VjdGlvbiAtLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuI3NwbGFzaCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc3BsYXNoIGltZyB7XFxuICAgIHdpZHRoOiBpbmhlcml0OyAvKiBpbWFnZSBkb2VzIG5vdCBjb21tYW5kIHZpZXdwb3J0ICovXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpOyBcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICAgIG1heC1oZWlnaHQ6IDc0OHB4O1xcbiAgICBcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNjAlO1xcbiAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3BsYXNoVGV4dDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UzKTtcXG59XFxuXFxuLnNwbGFzaFRleHQyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDJyZW07XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgbWVudSB0YWIgKi9cXG5cXG4jbWVudU1haW4ge1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNtZW51TWFpbiAqOm5vdCguZGVzY3JpcHRpb24pe1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuI2Zvb2RNZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE1cmVtO1xcblxcbiAgICBnYXA6IDNyZW07XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbiNmb29kTWVudSAqaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuXFxufVxcblxcbiNmb29kTWVudT5kaXYge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNkcmlua01lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBncmlkLWF1dG8tcm93czogMTVyZW07XFxuXFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuI2RyaW5rTWVudSAqaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbiNkcmlua01lbnU+ZGl2IHtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWVudUl0ZW1Db250YWluZXIsXFxuLmRyaW5rSXRlbUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICB3aWR0aDogMzN2dztcXG4gICAgbWF4LXdpZHRoOiAyNTZweDtcXG5cXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogLTEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5tZW51SXRlbUNvbnRhaW5lcjpob3ZlciAuZGVzY3JpcHRpb257XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XFxuICAgIHJpZ2h0OiAwLjVyZW07XFxuICAgIGNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4ubWVudUl0ZW1Db250YWluZXI6aG92ZXIgaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmRyaW5rSXRlbUNvbnRhaW5lcjpob3ZlciAuZGVzY3JpcHRpb257XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XFxuICAgIHJpZ2h0OiAwLjVyZW07XFxuICAgIGNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4uZHJpbmtJdGVtQ29udGFpbmVyOmhvdmVyIGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiAjZTZlNmU2O1xcblxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG5cXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiNnbWFwc0lmcmFtZSB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDYxNHB4O1xcblxcbiAgICBoZWlnaHQ6IDYwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDQ2MHB4O1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDFmciAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBhcnR5U2l6ZSB7XFxuICAgIGdyaWQtY29sdW1uOjEvIHNwYW4gMjtcXG4gICAgZ3JpZC1yb3c6IDEvIHNwYW4gMTtcXG59XFxuXFxuLmRhdGVJbnB1dCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAyLyBzcGFuIDE7XFxufVxcblxcbi50aW1lSW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMi8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMi8gc3BhbiAxO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgY29sb3I6ICNlNmU2ZTY7XFxuXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5mb3JtIHNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5mb3JtIG9wdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGZvb3RlciBzZWN0aW9uIC0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi5zb2NpYWxNZWRpYUNvbnRhaW5lckRpdiB7XFxuICAgIFxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgXFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcXG5cXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uc29jaWFsTWVkaWFDb250YWluZXJEaXYgIGltZyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmZvb3RlclRleHQge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcbiAgICBib2R5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICBib2R5ICoge1xcbiAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcXG5cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZURpdiwgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuXCJcblxuaW1wb3J0IE9wZW5pbmdIb3VycyBmcm9tIFwiLi9kYXRlVGltZUdlbmVyYXRvci5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3RNYWluRGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgY29udGFjdE1haW5EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0TWFpbkRpdicpO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tIHdoZXJlIHRvIGZpbmQgdXMgLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gY3JlYXRlRGl2KCd0aXRsZScpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lclRleHQgPSAnV2hlcmUgdG8gRmluZCB1cyEnXG4gICAgY29uc3QgZ21hcHNJZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBnbWFwc0lmcmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dtYXBzSWZyYW1lJylcbiAgXG4gICAgZ21hcHNJZnJhbWUuYWxsb3dGdWxsc2NyZWVuPScnO1xuICAgIGdtYXBzSWZyYW1lLmxvYWRpbmc9J2xhenknO1xuICAgIGdtYXBzSWZyYW1lLnJlZmVycmVyUG9saWN5PSduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSc7XG5cbiAgICBnbWFwc0lmcmFtZS5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM5ODguNjkxMjY4MTYxMjMwMyEyZDEwMy44ODMxOTMwNzU4NDE2NiEzZDEuMzYxODkzOTk4NjI1MjExNyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MzFkYTE3YjQ4NDgxYzY1NyUzQTB4YTUxZmEzMjE1NTFiMzU4ZSEyc1BlbnRhZ29uJTIwTGVhcm5pbmclMjAlN0MlMjBTZWMlMjAzJTIwNCUyMEElMjBNYXRoJTIwVHVpdGlvbiUyMEpDJTIwSDIlMjBNYXRoJTIwVHVpdGlvbiE1ZTAhM20yITFzZW4hMnNzZyE0djE2OTc2MzYyOTkzMjQhNW0yITFzZW4hMnNzZ1wiXG4gICAgXG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChnbWFwc0lmcmFtZSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0gb3BlbmluZyBob3VycyAtLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzVGl0bGUgPSBjcmVhdGVEaXYoJ3RpdGxlJyk7XG4gICAgb3BlbmluZ0hvdXJzVGl0bGUuaW5uZXJUZXh0ID0gJ09wZW5pbmcgSG91cnMnXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzVGV4dCA9IGNyZWF0ZURpdigndGV4dCcpO1xuICAgIG9wZW5pbmdIb3Vyc1RleHQuaW5uZXJUZXh0ID0gJ1dlZWtkYXlzIDExYW0gLSA2cG0gXFxuIFdlZWtlbmRzIDlhbSAtIDZwbSBcXG4gQ2xvc2VkIG9uIFR1ZXNkYXlzJ1xuXG5cbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNUaXRsZSk7XG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzVGV4dCk7XG5cblxuICAgIFxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLSByZXNlcnZhdGlvbiBmb3JtIC0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgXG4gICAgLy8gY3JlYXRlIHRpdGxlIGFuZCBhcHBlbmRcbiAgICBjb25zdCByZXNlcnZlVGl0bGUgPSBjcmVhdGVEaXYoJ3RpdGxlJylcbiAgICByZXNlcnZlVGl0bGUuaW5uZXJUZXh0ID0gJ01ha2UgYSByZXNlcnZhdGlvbidcblxuICAgIGNvbnRhY3RNYWluRGl2LmFwcGVuZENoaWxkKHJlc2VydmVUaXRsZSk7XG5cbiAgICAvLyBjcmVhdGUgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5hY3Rpb24gPSAnJztcbiAgICBmb3JtLm1ldGhvZCA9ICdwb3N0J1xuXG4gICAgLy8gZm9ybSB3aWxsIGhhdmUgMyBkcm9wZG93biBpbnB1dHNcbiAgICAvLyAxKSBwYXJ0eSBzaXplXG4gICAgLy8gMikgZGF0ZVxuICAgIC8vIDMpIHRpbWVcblxuICAgIGxldCBvcGVuaW5nSG91cnMgPSBuZXcgT3BlbmluZ0hvdXJzKDExLCAxOCwgOSwgMTgpO1xuXG4gICAgbGV0IGRhdGVUaW1lQXJyID0gW107XG4gICAgbGV0IGRhdGVUb2RheSA9IG5ldyBEYXRlKCk7XG4gICAgXG4gICAgd2hpbGUgKGRhdGVUaW1lQXJyLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgZGF0ZVRpbWVBcnIucHVzaChvcGVuaW5nSG91cnMubmV4dEF2YWlsYWJsZVRpbWUoZGF0ZVRvZGF5KSk7XG4gICAgICAgIGRhdGVUb2RheS5zZXREYXRlKGRhdGVUb2RheS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgaWYgKGRhdGVUb2RheS5nZXREYXkoKSA9PT0gMCB8fCBkYXRlVG9kYXkuZ2V0RGF5KCkgPT09IDYpIHtcbiAgICAgICAgICAgIGRhdGVUb2RheS5zZXRIb3Vycyg4LCA1OSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlVG9kYXkuc2V0SG91cnMoMTAsIDU5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkYXRlQXJyID0gW11cbiAgICBkYXRlVGltZUFyci5mb3JFYWNoKChlbGVtZW50KT0+IHtcbiAgICAgICAgZGF0ZUFyci5wdXNoKGVsZW1lbnRbMF0pO1xuICAgIH0pXG5cbiAgICBsZXQgdGltZUFyciA9IFsuLi5kYXRlVGltZUFyclswXVsxXV07XG5cbiAgICBjb25zdCBwYXJ0eVNpemVJbnB1dCA9IGNyZWF0ZURyb3Bkb3duKCdwYXJ0eVNpemUnLCAnUGFydHkgU2l6ZScsICdwYXJ0eVNpemUnLCAxLCBbMSwyLDMsNCw1LDZdLCdwYXJ0eVNpemUnKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZURyb3Bkb3duKCdkYXRlSW5wdXQnLCAnRGF0ZScsICdkYXRlJywgMSwgZGF0ZUFyciAsICdkYXRlSW5wdXQnKTtcblxuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGNyZWF0ZURyb3Bkb3duKCd0aW1lSW5wdXQnLCAnVGltZScsICd0aW1lJywgMSwgdGltZUFyciAsJ3RpbWVJbnB1dCcpO1xuXG4gICAgLy8gY3JlYXRlIGJ1dHRvblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYnRuLmlubmVyVGV4dCA9ICdSZXNlcnZlIGEgdGFibGUnXG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwYXJ0eVNpemVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIHRvIHVwZGF0ZSB0aW1lIHNsb3RzIHdoZW4gY2hvb3NpbmcgZGF0ZXNcbiAgICBjb25zdCB0aW1lRHJvcGRvd25NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVJbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVEcm9wZG93bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZUlucHV0Jyk7XG4gICAgZGF0ZURyb3Bkb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZ0KT0+IHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh0aW1lRHJvcGRvd25NZW51KVxuICAgICAgICBjb25zdCBjaG9zZW5EYXRlID0gbmV3IERhdGUoZXZ0LnZhbHVlKTtcbiAgICAgICAgaWYgKGNob3NlbkRhdGUuZ2V0RGF5KCk9PT02IHx8IGNob3NlbkRhdGUuZ2V0RGF5KCk9PT0wKSB7XG4gICAgICAgICAgICBPcGVuaW5nSG91cnMud2tlbmRTbG90cy5mb3JFYWNoKChlbGVtZW50KT0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50XG5cbiAgICAgICAgICAgICAgICB0aW1lRHJvcGRvd25NZW51LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT3BlbmluZ0hvdXJzLndrZGF5U2xvdHMuZm9yRWFjaCgoZWxlbWVudCk9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudFxuXG4gICAgICAgICAgICAgICAgdGltZURyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxuICAgICAgICB9KVxuICAgIH1cbn0pXG5cbiAgICByZXR1cm4gY29udGFjdE1haW5EaXZcbn1cblxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGRyb3Bkb3duIGFuZCBsYWJlbCwgcmV0dXJucyBib3RoIGVsZW1lbnRzIHVuZGVyIGEgZGl2XG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bihpZCwgbGFiZWxOYW1lLCBpbnB1dE5hbWUsIGRyb3Bkb3duU2l6ZSwgb3B0aW9uc0FyciwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW5wdXRXcmFwcGVyID0gY3JlYXRlRGl2KGNsYXNzTmFtZSlcblxuICAgIC8vIGNyZWF0ZSBsYWJlbCBmb3IgZHJvcGRvd25cbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgICBsYWJlbEVsZW1lbnQuaW5uZXJUZXh0ID0gbGFiZWxOYW1lXG5cbiAgICAvLyBjcmVhdGUgc2VsZWN0IGlucHV0XG4gICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRyb3Bkb3duU2l6ZSk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAvLyBjcmVhdGUgb3B0aW9uc1xuICAgIG9wdGlvbnNBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQpO1xuICAgICAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IGVsZW1lbnRcblxuICAgICAgICBkcm9wZG93bkVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbiAgICB9KVxuXG5cbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbGVtZW50KTtcblxuXG4gICAgcmV0dXJuIGlucHV0V3JhcHBlclxufVxuXG4iLCIvLyBJSUZFIHRvIGV4dGVuZCBEYXRlIG9iamVjdCBwcm90b3R5cGVcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcblxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVseScsICdBdWcnLCAnU2VwdCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4gICAgRGF0ZS5wcm90b3R5cGUuZ2V0RGF5TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRheXNbdGhpcy5nZXREYXkoKV07XG4gICAgfTtcblxuICAgIERhdGUucHJvdG90eXBlLmdldE1vbnRoTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuICAgIH07XG59KSgpO1xuXG5cbi8vIGRhdGUgdGltZSBnZW5lcmF0b3IgY2xhc3NcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbmluZ0hvdXJzIHtcbiAgICBjb25zdHJ1Y3Rvcih3a2RheU9wZW4sIHdrZGF5Q2xvc2UsIHdrZW5kT3Blbiwgd2tlbmRDbG9zZSkge1xuICAgICAgICB0aGlzLndrZGF5T3BlbiA9IHdrZGF5T3BlbjtcbiAgICAgICAgdGhpcy53a2RheUNsb3NlID0gd2tkYXlDbG9zZTtcbiAgICAgICAgdGhpcy53a2VuZE9wZW4gPSB3a2VuZE9wZW47XG4gICAgICAgIHRoaXMud2tlbmRDbG9zZSA9IHdrZW5kQ2xvc2U7XG4gICAgICAgIHRoaXMud2tkYXlTbG90cyA9IFsnMTE6MDAnLCAnMTE6MzAnLCAnMTI6MDAnLCAnMTI6MzAnLCAnMTM6MDAnLCAnMTM6MzAnLCAnMTQ6MDAnLCAnMTQ6MzAnLCAnMTU6MDAnLCAnMTU6MzAnLCAnMTY6MDAnLCAnMTY6MzAnLCAnMTc6MDAnLCAnMTc6MzAnXTtcbiAgICAgICAgdGhpcy53a2VuZFNsb3RzID0gWycwOTowMCcsJzA5OjMwJywgJzEwOjAwJywgJzEwOjMwJywgJzExOjAwJywgJzExOjMwJywgJzEyOjAwJywgJzEyOjMwJywgJzEzOjAwJywgJzEzOjMwJywgJzE0OjAwJywgJzE0OjMwJywgJzE1OjAwJywgJzE1OjMwJywgJzE2OjAwJywgJzE2OjMwJywgJzE3OjAwJywgJzE3OjMwJ107XG4gICAgfVxuXG4gICAgX2lzV2tlbmQoZGF0ZU9iaikge1xuICAgICAgICBpZiAoZGF0ZU9iai5nZXREYXkoKT09PTAgfHwgZGF0ZU9iai5nZXREYXkoKSA9PT0gNikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIF9jYWZlSXNDbG9zZWQoZGF0ZU9iaikge1xuICAgICAgICBpZiAoZGF0ZU9iai5nZXRIb3VycygpPj0xOCkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYWZ0ZXIgNnBtLCBjYWZlIGlzIGNsb3NlZFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbmV4dEF2YWlsYWJsZVRpbWUoZGF0ZU9iaikge1xuICAgICAgICBpZiAoZGF0ZU9iai5nZXREYXkoKSA9PT0gMikge1xuICAgICAgICAgICAgLy8gY2hlY2sgYmVjYXVzZSBjYWZlIGlzIGNsb3NlZCB0dWVzZGF5c1xuXG4gICAgICAgICAgICAvLyBub3RlOiB0aGVyZSdzIG5vIG5lZWQgdG8gY2xvbmUhIHdlIFNIT1VMRCBjaGFuZ2UgdGhlIGRhdGVPYmogZGlyZWN0bHlcbiAgICAgICAgICAgIGRhdGVPYmouc2V0RGF0ZShkYXRlT2JqLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgZGF0ZU9iai5zZXRIb3Vycyh0aGlzLndrZGF5T3BlbiAtIDEpO1xuXG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHRBdmFpbGFibGVUaW1lKGRhdGVPYmopO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NhZmVJc0Nsb3NlZChkYXRlT2JqKSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgY2FmZSBpcyBjbG9zZWQgKGFmdGVyIDZwbSlcbiAgICAgXG4gICAgICAgICAgICAvLyBub3RlOiB0aGVyZSdzIG5vIG5lZWQgdG8gY2xvbmUhIHdlIFNIT1VMRCBjaGFuZ2UgdGhlIGRhdGVPYmogZGlyZWN0bHlcbiAgICAgICAgICAgIGRhdGVPYmouc2V0RGF0ZShkYXRlT2JqLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzV2tlbmQoZGF0ZU9iaikpIHtcbiAgICAgICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHRoaXMud2tlbmRPcGVuIC0gMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVPYmouc2V0SG91cnModGhpcy53a2RheU9wZW4gLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHRBdmFpbGFibGVUaW1lKGRhdGVPYmopOyAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbHNlIHJldHVybiBjdXJyZW50IGRhdGUgaW4gc3RyIGZvcm1cbiAgICAgICAgICAgIC8vIGFsc28gcmV0dXJuIHRoZSByZW1haW5pbmdPcGVuaW5nSG91cnMgaW4gYW4gQXJyYXlcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gYCgke2RhdGVPYmouZ2V0RGF5TmFtZSgpfSkgJHtkYXRlT2JqLmdldE1vbnRoTmFtZSgpfSAke2RhdGVPYmouZ2V0RGF0ZSgpfSwgJHtkYXRlT2JqLmdldEZ1bGxZZWFyKCl9YFxuICAgICAgICAgICAgLy8gZS5nLiAoRnJpKSBPY3QgMjAsIDIwMjNcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdPcGVuSG91cnNBcnI9W11cbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1drZW5kKSB7XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nT3BlbkhvdXJzQXJyID0gWy4uLnRoaXMud2tlbmRTbG90c107XG4gICAgICAgICAgICAgICAgd2hpbGUgKGRhdGVPYmouZ2V0SG91cnMoKSA+IE51bWJlcihyZW1haW5pbmdPcGVuSG91cnNBcnJbMF0uc3Vic3RyaW5nKDAsMikpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPYmouZ2V0SG91cnMoKSA9PSBOdW1iZXIocmVtYWluaW5nT3BlbkhvdXJzQXJyWzBdLnN1YnN0cmluZygwLDIpKSAmJiBkYXRlT2JqLmdldE1pbnV0ZXMoKT4zMCkge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nT3BlbkhvdXJzQXJyID0gWy4uLnRoaXMud2tkYXlTbG90c107XG4gICAgICAgICAgICAgICAgd2hpbGUgKGRhdGVPYmouZ2V0SG91cnMoKSA+IE51bWJlcihyZW1haW5pbmdPcGVuSG91cnNBcnJbMF0uc3Vic3RyaW5nKDAsMikpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPYmouZ2V0SG91cnMoKSA9PSBOdW1iZXIocmVtYWluaW5nT3BlbkhvdXJzQXJyWzBdLnN1YnN0cmluZygwLDIpKSAmJmRhdGVPYmouZ2V0TWludXRlcygpPjMwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBbZGF0ZVN0ciwgcmVtYWluaW5nT3BlbkhvdXJzQXJyXVxuICAgICAgICB9XG59XG59XG5cbi8vIFF1ZXN0aW9uc1xuLy8gMSkgaWYgaSBjYWxsZWQgT3BlbmluZ0hvdXJzLm5leHRBdmFpbGFibGVUaW1lKCkgZnJvbSBhbm90aGVyIGZpbGUsIHdvdWxkIGl0IGhhdmUgYWNjZXNzIHRvIHRoZSBJSUZFP1xuLy8gMikgbmVlZCB0byBpbXBsZW1lbnQgc29tZXRoaW5nIG9mIHdoaWxlIChhdmFpbGFibGVEYXRlc0Fyci5sZW5ndGggPCAzKSB7Z2VuZXJhdGUgbW9yZSBkYXRlc31cbi8vICAgICh3aWxsIHByb2JhYmx5IG5lZWQgdG8ga2VlcCBhIGNvdW50ZXIgdG8gaW5jcmVtZW50IGJ5IDEpIiwiaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVJTUcgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNwbGFzaElNR0ZpbGUgZnJvbSAnLi9pbWcvbGF0dGUtYXJ0LmpwZWcnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgLy9jcmVhdGUgc3BsYXNoIGNvbnRhaW5lclxuICAgIGNvbnN0IHNwbGFzaCA9IGNyZWF0ZURpdignc3BsYXNoJyk7XG4gICAgc3BsYXNoLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BsYXNoJylcblxuICAgIC8vY3JlYXRlIGltZyBcbiAgICBjb25zdCBzcGxhc2hJbWdFbGVtZW50ID0gY3JlYXRlSU1HKHNwbGFzaElNR0ZpbGUpXG5cbiAgICAvL2NyZWF0ZSB0ZXh0IGRpdiB3aXRoIGNsYXNzICdzcGxhc2hUZXh0MSdcbiAgICBjb25zdCBzcGxhc2hUZXh0MSA9IGNyZWF0ZURpdignc3BsYXNoVGV4dDEnKTtcbiAgICBzcGxhc2hUZXh0MS5pbm5lclRleHQgPSAnQ09NRSBUTyBPRElOXFwnUydcbiAgICBcbiAgICAvL2NyZWF0ZSB0ZXh0IGRpdiB3aXRoIGNsYXNzICdzcGxhc2hUZXh0MidcbiAgICBjb25zdCBzcGxhc2hUZXh0MiA9IGNyZWF0ZURpdignc3BsYXNoVGV4dDInKTtcbiAgICBzcGxhc2hUZXh0Mi5pbm5lclRleHQgPSAnRk9SIEEgV0FSTSBDVVBQQSBKT1khJ1xuICAgIFxuICAgIC8vYXBwZW5kIGltZyB0byBzcGxhc2hcbiAgICBzcGxhc2guYXBwZW5kQ2hpbGQoc3BsYXNoSW1nRWxlbWVudCk7XG4gICAgc3BsYXNoLmFwcGVuZENoaWxkKHNwbGFzaFRleHQxKTtcbiAgICBzcGxhc2guYXBwZW5kQ2hpbGQoc3BsYXNoVGV4dDIpO1xuICAgIFxuICAgIC8vcmV0dXJuIChhbmQgYXBwZW5kIHRvIGNvbnRlbnQgZGl2KVxuICAgIHJldHVybiBzcGxhc2hcbn1cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBmYlNWRyBmcm9tICcuL2ltZy9mYi5zdmcnO1xuaW1wb3J0IGluc3RhU1ZHIGZyb20gJy4vaW1nL2luc3RhLnN2Zyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltZy9sb2dvLWJsYWNrLWNvbG91cmVkLnBuZyc7XG5cblxuLy8gY3JlYXRlIGhlYWRlclxuY29uc3QgaGVhZGVyID0gY3JlYXRlRGl2KCk7XG5oZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2hlYWRlcicpO1xuXG5jb25zdCBsb2dvRWxlbWVudCA9IGNyZWF0ZUlNRyhsb2dvLCAnbG9nbycpO1xubG9nb0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzZyZW0nO1xubG9nb0VsZW1lbnQuc3R5bGUud2lkdGggPSAnNnJlbSc7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0VsZW1lbnQpO1xuXG4vLyBjcmVhdGUgY2xpY2thYmxlIHRhYnNcblsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuICAgIGRpdi5pbm5lclRleHQ9aXRlbTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn0pXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4vLyBjcmVhdGUgY29udGVudCBhcmVhXG5jb25zdCBjb250ZW50RGl2ID0gY3JlYXRlRGl2KCk7XG5jb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTsgXG5cbi8vIGNyZWF0ZSBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZURpdigpO1xuZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbi8vIGNyZWF0ZSBzb2NpYWwgbWVkaWEgY29udGFpbmVyIGRpdlxuY29uc3Qgc29jaWFsTWVkaWFDb250YWluZXJEaXYgPSBjcmVhdGVEaXYoJ3NvY2lhbE1lZGlhQ29udGFpbmVyRGl2Jyk7XG5cblxuW2ZiU1ZHLCBpbnN0YVNWR10uZm9yRWFjaCgoaW1nRmlsZSk9PiB7XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IGNyZWF0ZUlNRyhpbWdGaWxlKTtcbiAgICBzb2NpYWxNZWRpYUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbn0pO1xuZm9vdGVyLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhQ29udGFpbmVyRGl2KTtcblxuLy8gcGhvdG8gY3JlZGl0cyAtIGRvIG5vdCByZW1vdmVcbmNvbnN0IHBob3RvQ3JlZGl0cyA9IGNyZWF0ZURpdigpXG5waG90b0NyZWRpdHMuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVGV4dCcpO1xucGhvdG9DcmVkaXRzLmlubmVyVGV4dCA9ICdQaG90byBieSBQcmFmdWwgRGFzIHd3dy5wZXhlbHMuY29tJ1xuXG5mb290ZXIuYXBwZW5kQ2hpbGQocGhvdG9DcmVkaXRzKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5cbi8vIGV2ZW50bGlzdGVuZXIgZm9yIGhvbWUsIG1lbnUsIGNvbnRhY3QgdGFic1xuXG5bJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0udG9Mb3dlckNhc2UoKSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVGFiKTtcbn0pXG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgZGl2c1xuZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgLy8gaWYgY2xhc3NOYW1lIGVtcHR5IGRvbid0IGFkZCBjbGFzcyB0byBkaXZcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdlxufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGltZyBlbGVtZW50c1xuZnVuY3Rpb24gY3JlYXRlSU1HKGltZ3NyYywgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ0VsZW1lbnQuc3JjID0gaW1nc3JjO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgaW1nRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBpbWdFbGVtZW50O1xufVxuXG5leHBvcnQge2NyZWF0ZURpdiwgY3JlYXRlSU1HfVxuLy8gZXhwb3J0IGNyZWF0ZURpdiBhbmQgY3JlYXRlSU1HXG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byByZW12b2UgYWxsIGNoaWxkIG5vZGVzXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gbG9hZCB0YWIgYmFzZWQgb24gY2xpY2sgZXZlbnRcblxuZnVuY3Rpb24gbG9hZFRhYihldnQpIHtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnREaXYpO1xuICAgIHN3aXRjaCAoZXZ0LnRhcmdldC5pZCkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG4gICAgICAgICAgICBwaG90b0NyZWRpdHMuaW5uZXJUZXh0ID0gJ1Bob3RvIGJ5IFByYWZ1bCBEYXMgd3d3LnBleGVscy5jb20nXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xuICAgICAgICAgICAgcGhvdG9DcmVkaXRzLmlubmVyVGV4dCA9ICdQaG90byBieSBzZXJoaWlfYm9ieWsgb24gRnJlZXBpayBcXG4gUGhvdG8gYnkgQXJ5YSBCYWpyYSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgRHplbmluYSBMdWthYyB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgUGl4YWJheSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgTmF0YW4gTWFjaGFkbyBGb3RvZ3JhZmlhIEdhc3Ryb27DtG1pY2Egd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IEtyaXN0aW5hIFBhdWtzaHRpdGUgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IFZpY3RvciBGcmVpdGFzIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBDaGV2YW5vbiBQaG90b2dyYXBoeSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgQ2FzYSBOb3J0ZSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgQ2hhcmxvdHRlIE1heSB3d3cucGV4ZWxzLmNvbSdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZENvbnRhY3QoKSk7XG4gICAgICAgICAgICBwaG90b0NyZWRpdHMuaW5uZXJUZXh0ID0gJydcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLy8gbG9hZCBob21lIHBhZ2UgYnkgZGVmYXVsdFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRIb21lKCkpKTsiLCJpbXBvcnQgbWVudTEgZnJvbSAnLi9pbWcvbWVudTEucG5nJztcbmltcG9ydCBtZW51MiBmcm9tICcuL2ltZy9tZW51Mi5wbmcnO1xuaW1wb3J0IG1lbnUzIGZyb20gJy4vaW1nL21lbnUzLnBuZyc7XG5pbXBvcnQgbWVudTQgZnJvbSAnLi9pbWcvbWVudTQucG5nJztcbmltcG9ydCBtZW51NSBmcm9tICcuL2ltZy9tZW51NS5wbmcnO1xuaW1wb3J0IG1lbnU2IGZyb20gJy4vaW1nL21lbnU2LnBuZyc7XG5cbmltcG9ydCBjb2ZmZWUxIGZyb20gJy4vaW1nL2NvZmZlZTEucG5nJztcbmltcG9ydCBjb2ZmZWUyIGZyb20gJy4vaW1nL2NvZmZlZTIucG5nJztcbmltcG9ydCBjb2ZmZWUzIGZyb20gJy4vaW1nL2NvZmZlZTMucG5nJztcblxuaW1wb3J0IHRlYTEgZnJvbSAnLi9pbWcvdGVhMS5wbmcnO1xuXG5jb25zdCBmb29kSW1nQXJyYXkgPSBbW21lbnUxLCdUSVJPS1JPS0VURVMgXFxuIGZyaWVkIGNoZWVzZSBiYWxscywgZ3JlZWsgZmV0YSwgc29mdCBnb3VkYSwgY2hlZGRhciwgZWdncGxhbnQsIGZyZXNoIGJhc2lsIGxlYXZlcyAnXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbWVudTIsICdPTklPTiBSSU5HUyBcXG4gYnJlYWRlZCBvbmlvbiByaW5ncywgbWF5by1zcmlyYWNoYSBzYXVjZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51MywgJ1RSVUZGTEUgRlJJRVMgXFxuIGJlbGdpdW0gcG90YXRvLCB3aGl0ZSB0cnVmZmxlIG9pbCwgZ3JhdGVkIHBhcm1lc2FuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51NCwgJ1BBUFJJS0EgQ1JJU1BZIFdJTkdTIFxcbiBoYW5kIGJyZWFkZWQsIGxpZ2h0bHkgdG9zc2VkIGluIHBhcHJpa2EgcG93ZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudTUsICdNRUFUIExPVkVSIEJVUkdFUiBcXG4gZG91YmxlIGNoZWVzZSwgb25pb24gcmluZ3MsIGJhY29uLCAxMDBnIGdyYWluIGZlZCBiZWVmIHBhdHR5LCBwb3RhdG8gYnVuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lbnU2LCAnQ0xBU1NJQyBNQUdIRVJJVEEgXFxuIGZyZXNoIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgZnJlc2ggYmFzaWwgbGVhdmVzLCBvbGl2ZSBvaWwnXV1cbmNvbnN0IGRyaW5rSW1nQXJyYXkgPSBbW2NvZmZlZTEsICdEUklQIENPRkZFRSBcXG4gZXRoaW9waWEsIG5vdGVzOiBiZXJyaWVzLCBlbGRlcmZsb3dlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvZmZlZTIsICdFU1BSRVNTTyBcXG4gc2luZ2xlL2RvdWJsZSBzaG90J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NvZmZlZTMsICdJQ0VEIEFNRVJJQ0FOTyBcXG4gc2luZ2xlIHNob3QgZXNwcmVzc28sIGZpbHRlcmVkIHdhdGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZWExLCAnTUFUQ0hBIExBVFRFIFxcbiB1amkgbWF0Y2hhIGVzcHJlc3NvLCBzb3kvb2F0IG1pbGsgJ11dXG5cbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlSU1HIH0gZnJvbSAnLic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudU1haW5EaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBtZW51TWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVNYWluJyk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLSBmb29kIG1lbnUgLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0IGZvb2RNZW51RGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZm9vZE1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmb29kTWVudScpO1xuXG4gICAgZm9vZEltZ0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZURpdignbWVudUl0ZW1Db250YWluZXInKTtcbiAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlSU1HKGVsZW1lbnRbMF0sICdtZW51Jyk7XG4gICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBjcmVhdGVEaXYoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgZGVzY3JpcHRpb25EaXYuaW5uZXJUZXh0ID0gZWxlbWVudFsxXTtcblxuICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgIGZvb2RNZW51RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgIH0pXG5cbiAgICBtZW51TWFpbkRpdi5hcHBlbmRDaGlsZChmb29kTWVudURpdik7XG4gICAgXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLSBkcmlua3MgbWVudSAtLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgXG4gICAgY29uc3QgZHJpbmtNZW51RGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZHJpbmtNZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZHJpbmtNZW51Jyk7XG5cbiAgICBkcmlua0ltZ0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVEaXYoJ2RyaW5rSXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlSU1HKGVsZW1lbnRbMF0sICdkcmluaycpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGNyZWF0ZURpdignZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuaW5uZXJUZXh0ID0gZWxlbWVudFsxXVxuXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgICAgICAgZHJpbmtNZW51RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9KVxuXG4gICAgbWVudU1haW5EaXYuYXBwZW5kQ2hpbGQoZHJpbmtNZW51RGl2KTtcblxuICAgIHJldHVybiBtZW51TWFpbkRpdlxufVxuXG4vLyBQaG90byBieSBzZXJoaWlfYm9ieWsgb24gRnJlZXBpa1xuLy8gUGhvdG8gYnkgQXJ5YSBCYWpyYSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgRHplbmluYSBMdWthYyB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgUGl4YWJheSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgTmF0YW4gTWFjaGFkbyBGb3RvZ3JhZmlhIEdhc3Ryb27DtG1pY2Egd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IEtyaXN0aW5hIFBhdWtzaHRpdGUgd3d3LnBleGVscy5jb21cblxuXG4vLyBQaG90byBieSBWaWN0b3IgRnJlaXRhcyB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgQ2hldmFub24gUGhvdG9ncmFwaHkgd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IENhc2EgTm9ydGUgd3d3LnBleGVscy5jb21cblxuLy8gUGhvdG8gYnkgQ2hhcmxvdHRlIE1heSB3d3cucGV4ZWxzLmNvbSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==