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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'cafeFont0';\n    src: url(./fonts/Avenir-Next-LT-W04-Thin.ttf);\n}\n@font-face {\n    font-family: 'cafeFont1';\n    src: url(./fonts/meticula-bold.ttf);\n}\n\n:root {\n    --orange1: #ff5311;\n    --orange2: #ff7844;\n    --orange3: #ff9d77;\n    --black: #111;\n    --grey: #e6e6e6;\n    --white: #fff;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n    background-color: var(--black);\n\n    font-family: 'cafeFont1';\n\n    font-size: calc(100vw/30); /* 1rem calculated dynamically */\n}\n\n/* ------------------------------ */\n/* ------- header section ------- */\n/* ------------------------------ */\n\n#header {\n    width: 100vw;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.logo,\n#home,\n#menu,\n#contact {\n    font-size: 1.5rem;\n    transition: all 0.2s ease-in;\n\n    color: var(--orange2);\n}\n\n#home:hover,\n#menu:hover,\n#contact:hover {\n    font-size: 1.8rem;\n    text-decoration: underline;\n}\n\n/* ------------------------------- */\n/* ------- content section ------- */\n/* ------------------------------- */\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    height: fit-content;\n    margin-bottom: 3rem;\n}\n\n#splash {\n    width: 100vw;\n    position: relative;\n}\n\n#splash img {\n    width: inherit; /* image does not command viewport */\n    filter: brightness(50%); \n    height: calc(100vw - 20px);\n    max-height: 748px;\n    \n    object-fit: cover;\n    object-position: 0% 60%;\n    \n    position: relative;\n}\n\n.splashText1 {\n    position: absolute;\n    top: 0;\n    \n    text-align: center;\n    \n    \n    padding: 2rem;\n    \n    background-color: transparent;\n    \n    font-family: 'cafeFont0';\n    font-size: 2rem;\n    \n    color: var(--orange3);\n}\n\n.splashText2 {\n    position: absolute;\n    bottom: 0;\n    left: 2rem;\n    \n    text-align: center;\n    \n    \n    padding: 1rem;\n    \n    background-color: transparent;\n    \n    font-family: 'cafeFont0';\n    font-size: 2rem;\n    \n    color: var(--orange3);\n}\n\n/* styles for menu tab */\n\n#menuMain {\n    width: 100vw;\n}\n\n#menuMain *:not(.description){\n    width: inherit;\n}\n\n#foodMenu {\n    display: grid;\n\n    grid-auto-flow: row;\n    grid-auto-rows: 15rem;\n\n    gap: 3rem;\n\n    margin-bottom: 3rem;\n}\n\n#foodMenu *img {\n    object-fit: cover;\n    width: 100%;\n    height: inherit;\n\n}\n\n#foodMenu>div {\n    height: inherit;\n\n    overflow: hidden;\n}\n\n#drinkMenu {\n    display: grid;\n\n    grid-auto-flow: row;\n    grid-auto-rows: 15rem;\n\n    gap: 3rem;\n}\n\n#drinkMenu *img {\n    object-fit: cover;\n    width: 100%;\n    height: inherit;\n}\n\n#drinkMenu>div {\n    height: inherit;\n\n    overflow: hidden;\n}\n\n.menuItemContainer,\n.drinkItemContainer {\n    position: relative;\n}\n\n.description {\n    position: absolute;\n\n    width: 33vw;\n    max-width: 256px;\n\n    top: 1rem;\n    right: -10rem;\n    background-color: transparent;\n    \n    color: transparent;\n    font-family: 'cafeFont0';\n\n    font-size: 1rem;\n}\n\n.menuItemContainer:hover .description{\n    transition: all 0.5s ease-in;\n    right: 0.5rem;\n    color: #e6e6e6;\n}\n\n.menuItemContainer:hover img {\n    transition: all 0.5s ease-in;\n    filter: brightness(0.5);\n    transform: scale(1.2);\n}\n\n.drinkItemContainer:hover .description{\n    transition: all 0.5s ease-in;\n    right: 0.5rem;\n    color: #e6e6e6;\n}\n\n.drinkItemContainer:hover img {\n    transition: all 0.5s ease-in;\n    filter: brightness(0.5);\n    transform: scale(1.2);\n}\n\n.title {\n    color: #e6e6e6;\n\n    font-size: 1.5rem;\n}\n\n.text {\n    color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\n#gmapsIframe {\n    width: 80vw;\n    max-width: 614px;\n\n    height: 60vw;\n    max-height: 460px;\n\n    border: none;\n}\n\nform {\n    display: grid;\n    grid-column: 1fr 1fr;\n    grid-row: 1fr 1fr;\n    gap: 1rem;\n}\n\n.partySize {\n    grid-column:1/ span 2;\n    grid-row: 1/ span 1;\n}\n\n.dateInput {\n    grid-column: 1/ span 1;\n    grid-row: 2/ span 1;\n}\n\n.timeInput {\n    grid-column: 2/ span 1;\n    grid-row: 2/ span 1;\n}\n\nform label {\n    color: #e6e6e6;\n\n    font-size: 0.8rem;\n}\n\nform select {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ------------------------------ */\n/* ------- footer section ------- */\n/* ------------------------------ */\n\n#footer {\n    width: 100vw;\n\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n}\n\n.socialMediaContainerDiv {\n    \n        display: flex;\n        justify-content: space-evenly;\n        \n        width: inherit;\n\n        padding-bottom: 2rem;\n}\n\n.socialMediaContainerDiv  img {\n    height: 2rem;\n    width: 2rem;\n    \n    background-color: var(--grey);\n}\n\n.footerText {\n    color: var(--white);\n\n    font-size: 0.8rem;\n}\n\n@media only screen and (min-width: 768px) {\n    html {\n        font-size: 25px;\n    }\n    body {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        \n    }\n    \n    body * {\n        max-width: 768px;\n\n    }\n}\n"],"sourceRoot":""}]);
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

    form.appendChild(partySizeInput);
    form.appendChild(dateInput);
    form.appendChild(timeInput);

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
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxjQUFjLGNBQWMseUJBQXlCLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sUUFBUSxZQUFZLGNBQWMsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssc0JBQXNCLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksY0FBYyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLGNBQWMsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLGFBQWEsYUFBYSxjQUFjLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxhQUFh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Q0FBSTs7QUFFL0IsQ0FBeUM7OztBQUcxQjtBQUNmLHdCQUF3Qiw2Q0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDZDQUFTO0FBQ2pDOztBQUVBO0FBQ0Esd0JBQXdCLDZDQUFTO0FBQ2pDLDBCQUEwQiw2Q0FBUztBQUNuQyw4QkFBOEIsNkNBQVM7QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFTO0FBQ2xDOztBQUVBO0FBQ0EseUJBQXlCLDZDQUFTO0FBQ2xDLDJCQUEyQiw2Q0FBUztBQUNwQywrQkFBK0IsNkNBQVM7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9kYXRlVGltZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQXZlbmlyLU5leHQtTFQtVzA0LVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9tZXRpY3VsYS1ib2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQxJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tb3JhbmdlMTogI2ZmNTMxMTtcbiAgICAtLW9yYW5nZTI6ICNmZjc4NDQ7XG4gICAgLS1vcmFuZ2UzOiAjZmY5ZDc3O1xuICAgIC0tYmxhY2s6ICMxMTE7XG4gICAgLS1ncmV5OiAjZTZlNmU2O1xuICAgIC0td2hpdGU6ICNmZmY7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5cbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XG5cbiAgICBmb250LXNpemU6IGNhbGMoMTAwdncvMzApOyAvKiAxcmVtIGNhbGN1bGF0ZWQgZHluYW1pY2FsbHkgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tIGhlYWRlciBzZWN0aW9uIC0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9nbyxcbiNob21lLFxuI21lbnUsXG4jY29udGFjdCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcbn1cblxuI2hvbWU6aG92ZXIsXG4jbWVudTpob3ZlcixcbiNjb250YWN0OmhvdmVyIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLSBjb250ZW50IHNlY3Rpb24gLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbiNzcGxhc2gge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNzcGxhc2ggaW1nIHtcbiAgICB3aWR0aDogaW5oZXJpdDsgLyogaW1hZ2UgZG9lcyBub3QgY29tbWFuZCB2aWV3cG9ydCAqL1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpOyBcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyMHB4KTtcbiAgICBtYXgtaGVpZ2h0OiA3NDhweDtcbiAgICBcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDYwJTtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcGxhc2hUZXh0MSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UzKTtcbn1cblxuLnNwbGFzaFRleHQyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDJyZW07XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIFxuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XG59XG5cbi8qIHN0eWxlcyBmb3IgbWVudSB0YWIgKi9cblxuI21lbnVNYWluIHtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbiNtZW51TWFpbiAqOm5vdCguZGVzY3JpcHRpb24pe1xuICAgIHdpZHRoOiBpbmhlcml0O1xufVxuXG4jZm9vZE1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGdyaWQtYXV0by1yb3dzOiAxNXJlbTtcblxuICAgIGdhcDogM3JlbTtcblxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbiNmb29kTWVudSAqaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG5cbn1cblxuI2Zvb2RNZW51PmRpdiB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2RyaW5rTWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE1cmVtO1xuXG4gICAgZ2FwOiAzcmVtO1xufVxuXG4jZHJpbmtNZW51ICppbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxuI2RyaW5rTWVudT5kaXYge1xuICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZW51SXRlbUNvbnRhaW5lcixcbi5kcmlua0l0ZW1Db250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICB3aWR0aDogMzN2dztcbiAgICBtYXgtd2lkdGg6IDI1NnB4O1xuXG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAtMTByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcblxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1lbnVJdGVtQ29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbntcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5tZW51SXRlbUNvbnRhaW5lcjpob3ZlciBpbWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uZHJpbmtJdGVtQ29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbntcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5kcmlua0l0ZW1Db250YWluZXI6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogI2U2ZTZlNjtcblxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGV4dCB7XG4gICAgY29sb3I6ICNlNmU2ZTY7XG5cbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuI2dtYXBzSWZyYW1lIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXgtd2lkdGg6IDYxNHB4O1xuXG4gICAgaGVpZ2h0OiA2MHZ3O1xuICAgIG1heC1oZWlnaHQ6IDQ2MHB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xuICAgIGdyaWQtcm93OiAxZnIgMWZyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnBhcnR5U2l6ZSB7XG4gICAgZ3JpZC1jb2x1bW46MS8gc3BhbiAyO1xuICAgIGdyaWQtcm93OiAxLyBzcGFuIDE7XG59XG5cbi5kYXRlSW5wdXQge1xuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDE7XG4gICAgZ3JpZC1yb3c6IDIvIHNwYW4gMTtcbn1cblxuLnRpbWVJbnB1dCB7XG4gICAgZ3JpZC1jb2x1bW46IDIvIHNwYW4gMTtcbiAgICBncmlkLXJvdzogMi8gc3BhbiAxO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBjb2xvcjogI2U2ZTZlNjtcblxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5mb3JtIHNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0gZm9vdGVyIHNlY3Rpb24gLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNmb290ZXIge1xuICAgIHdpZHRoOiAxMDB2dztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5zb2NpYWxNZWRpYUNvbnRhaW5lckRpdiB7XG4gICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG5cbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5zb2NpYWxNZWRpYUNvbnRhaW5lckRpdiAgaW1nIHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbi5mb290ZXJUZXh0IHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBodG1sIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICBib2R5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGJvZHkgKiB7XG4gICAgICAgIG1heC13aWR0aDogNzY4cHg7XG5cbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQTZDO0FBQ2pEO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNENBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7O0lBRXRCLDhCQUE4Qjs7SUFFOUIsd0JBQXdCOztJQUV4Qix5QkFBeUIsRUFBRSxnQ0FBZ0M7QUFDL0Q7O0FBRUEsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7O0FBRW5DO0lB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O0FBRUE7O1FBRVEsYUFBYTtRQUNiLDZCQUE2Qjs7UUFFN0IsY0FBYzs7UUFFZCxvQkFBb0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7O0lBRXZCOztJQUVBO1FBQ0ksZ0JBQWdCOztJQUVwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvQXZlbmlyLU5leHQtTFQtVzA0LVRoaW4udHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQxJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9tZXRpY3VsYS1ib2xkLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1vcmFuZ2UxOiAjZmY1MzExO1xcbiAgICAtLW9yYW5nZTI6ICNmZjc4NDQ7XFxuICAgIC0tb3JhbmdlMzogI2ZmOWQ3NztcXG4gICAgLS1ibGFjazogIzExMTtcXG4gICAgLS1ncmV5OiAjZTZlNmU2O1xcbiAgICAtLXdoaXRlOiAjZmZmO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQxJztcXG5cXG4gICAgZm9udC1zaXplOiBjYWxjKDEwMHZ3LzMwKTsgLyogMXJlbSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5ICovXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gaGVhZGVyIHNlY3Rpb24gLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNoZWFkZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubG9nbyxcXG4jaG9tZSxcXG4jbWVudSxcXG4jY29udGFjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcblxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMik7XFxufVxcblxcbiNob21lOmhvdmVyLFxcbiNtZW51OmhvdmVyLFxcbiNjb250YWN0OmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLSBjb250ZW50IHNlY3Rpb24gLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbiNzcGxhc2gge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3NwbGFzaCBpbWcge1xcbiAgICB3aWR0aDogaW5oZXJpdDsgLyogaW1hZ2UgZG9lcyBub3QgY29tbWFuZCB2aWV3cG9ydCAqL1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTsgXFxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgICBtYXgtaGVpZ2h0OiA3NDhweDtcXG4gICAgXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDYwJTtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNwbGFzaFRleHQxIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XFxufVxcblxcbi5zcGxhc2hUZXh0MiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAycmVtO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTMpO1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIG1lbnUgdGFiICovXFxuXFxuI21lbnVNYWluIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jbWVudU1haW4gKjpub3QoLmRlc2NyaXB0aW9uKXtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbiNmb29kTWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxNXJlbTtcXG5cXG4gICAgZ2FwOiAzcmVtO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4jZm9vZE1lbnUgKmltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcblxcbn1cXG5cXG4jZm9vZE1lbnU+ZGl2IHtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jZHJpbmtNZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE1cmVtO1xcblxcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbiNkcmlua01lbnUgKmltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4jZHJpbmtNZW51PmRpdiB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyLFxcbi5kcmlua0l0ZW1Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgd2lkdGg6IDMzdnc7XFxuICAgIG1heC13aWR0aDogMjU2cHg7XFxuXFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIFxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudUl0ZW1Db250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9ue1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICByaWdodDogMC41cmVtO1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyOmhvdmVyIGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5kcmlua0l0ZW1Db250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9ue1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICByaWdodDogMC41cmVtO1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLmRyaW5rSXRlbUNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBjb2xvcjogI2U2ZTZlNjtcXG5cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXh0IHtcXG4gICAgY29sb3I6ICNlNmU2ZTY7XFxuXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jZ21hcHNJZnJhbWUge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgbWF4LXdpZHRoOiA2MTRweDtcXG5cXG4gICAgaGVpZ2h0OiA2MHZ3O1xcbiAgICBtYXgtaGVpZ2h0OiA0NjBweDtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDFmciAxZnI7XFxuICAgIGdyaWQtcm93OiAxZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wYXJ0eVNpemUge1xcbiAgICBncmlkLWNvbHVtbjoxLyBzcGFuIDI7XFxuICAgIGdyaWQtcm93OiAxLyBzcGFuIDE7XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMS8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMi8gc3BhbiAxO1xcbn1cXG5cXG4udGltZUlucHV0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDIvIHNwYW4gMTtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGNvbG9yOiAjZTZlNmU2O1xcblxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuZm9ybSBzZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGZvb3RlciBzZWN0aW9uIC0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi5zb2NpYWxNZWRpYUNvbnRhaW5lckRpdiB7XFxuICAgIFxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgXFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcXG5cXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uc29jaWFsTWVkaWFDb250YWluZXJEaXYgIGltZyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmZvb3RlclRleHQge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcbiAgICBib2R5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICBib2R5ICoge1xcbiAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcXG5cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlSU1HIH0gZnJvbSBcIi5cIlxuXG5pbXBvcnQgT3BlbmluZ0hvdXJzIGZyb20gXCIuL2RhdGVUaW1lR2VuZXJhdG9yLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdE1haW5EaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBjb250YWN0TWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RNYWluRGl2Jyk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0gd2hlcmUgdG8gZmluZCB1cyAtLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBjcmVhdGVEaXYoJ3RpdGxlJyk7XG4gICAgY29udGFjdFRpdGxlLmlubmVyVGV4dCA9ICdXaGVyZSB0byBGaW5kIHVzISdcbiAgICBjb25zdCBnbWFwc0lmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGdtYXBzSWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ21hcHNJZnJhbWUnKVxuICBcbiAgICBnbWFwc0lmcmFtZS5hbGxvd0Z1bGxzY3JlZW49Jyc7XG4gICAgZ21hcHNJZnJhbWUubG9hZGluZz0nbGF6eSc7XG4gICAgZ21hcHNJZnJhbWUucmVmZXJyZXJQb2xpY3k9J25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJztcblxuICAgIGdtYXBzSWZyYW1lLnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzk4OC42OTEyNjgxNjEyMzAzITJkMTAzLjg4MzE5MzA3NTg0MTY2ITNkMS4zNjE4OTM5OTg2MjUyMTE3ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgzMWRhMTdiNDg0ODFjNjU3JTNBMHhhNTFmYTMyMTU1MWIzNThlITJzUGVudGFnb24lMjBMZWFybmluZyUyMCU3QyUyMFNlYyUyMDMlMjA0JTIwQSUyME1hdGglMjBUdWl0aW9uJTIwSkMlMjBIMiUyME1hdGglMjBUdWl0aW9uITVlMCEzbTIhMXNlbiEyc3NnITR2MTY5NzYzNjI5OTMyNCE1bTIhMXNlbiEyc3NnXCJcbiAgICBcbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGNvbnRhY3RNYWluRGl2LmFwcGVuZENoaWxkKGdtYXBzSWZyYW1lKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLSBvcGVuaW5nIGhvdXJzIC0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBjb25zdCBvcGVuaW5nSG91cnNUaXRsZSA9IGNyZWF0ZURpdigndGl0bGUnKTtcbiAgICBvcGVuaW5nSG91cnNUaXRsZS5pbm5lclRleHQgPSAnT3BlbmluZyBIb3VycydcbiAgICBjb25zdCBvcGVuaW5nSG91cnNUZXh0ID0gY3JlYXRlRGl2KCd0ZXh0Jyk7XG4gICAgb3BlbmluZ0hvdXJzVGV4dC5pbm5lclRleHQgPSAnV2Vla2RheXMgMTFhbSAtIDZwbSBcXG4gV2Vla2VuZHMgOWFtIC0gNnBtIFxcbiBDbG9zZWQgb24gVHVlc2RheXMnXG5cblxuICAgIGNvbnRhY3RNYWluRGl2LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc1RpdGxlKTtcbiAgICBjb250YWN0TWFpbkRpdi5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNUZXh0KTtcblxuXG4gICAgXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tIHJlc2VydmF0aW9uIGZvcm0gLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICBcbiAgICAvLyBjcmVhdGUgdGl0bGUgYW5kIGFwcGVuZFxuICAgIGNvbnN0IHJlc2VydmVUaXRsZSA9IGNyZWF0ZURpdigndGl0bGUnKVxuICAgIHJlc2VydmVUaXRsZS5pbm5lclRleHQgPSAnTWFrZSBhIHJlc2VydmF0aW9uJ1xuXG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2ZVRpdGxlKTtcblxuICAgIC8vIGNyZWF0ZSBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmFjdGlvbiA9ICcnO1xuICAgIGZvcm0ubWV0aG9kID0gJ3Bvc3QnXG5cbiAgICAvLyBmb3JtIHdpbGwgaGF2ZSAzIGRyb3Bkb3duIGlucHV0c1xuICAgIC8vIDEpIHBhcnR5IHNpemVcbiAgICAvLyAyKSBkYXRlXG4gICAgLy8gMykgdGltZVxuXG4gICAgbGV0IG9wZW5pbmdIb3VycyA9IG5ldyBPcGVuaW5nSG91cnMoMTEsIDE4LCA5LCAxOCk7XG5cbiAgICBsZXQgZGF0ZVRpbWVBcnIgPSBbXTtcbiAgICBsZXQgZGF0ZVRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBcbiAgICB3aGlsZSAoZGF0ZVRpbWVBcnIubGVuZ3RoIDwgMykge1xuICAgICAgICBkYXRlVGltZUFyci5wdXNoKG9wZW5pbmdIb3Vycy5uZXh0QXZhaWxhYmxlVGltZShkYXRlVG9kYXkpKTtcbiAgICAgICAgZGF0ZVRvZGF5LnNldERhdGUoZGF0ZVRvZGF5LmdldERhdGUoKSArIDEpO1xuICAgICAgICBpZiAoZGF0ZVRvZGF5LmdldERheSgpID09PSAwIHx8IGRhdGVUb2RheS5nZXREYXkoKSA9PT0gNikge1xuICAgICAgICAgICAgZGF0ZVRvZGF5LnNldEhvdXJzKDgsIDU5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUb2RheS5zZXRIb3VycygxMCwgNTkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGRhdGVBcnIgPSBbXVxuICAgIGRhdGVUaW1lQXJyLmZvckVhY2goKGVsZW1lbnQpPT4ge1xuICAgICAgICBkYXRlQXJyLnB1c2goZWxlbWVudFswXSk7XG4gICAgfSlcblxuICAgIGxldCB0aW1lQXJyID0gWy4uLmRhdGVUaW1lQXJyWzBdWzFdXTtcblxuICAgIGNvbnN0IHBhcnR5U2l6ZUlucHV0ID0gY3JlYXRlRHJvcGRvd24oJ3BhcnR5U2l6ZScsICdQYXJ0eSBTaXplJywgJ3BhcnR5U2l6ZScsIDEsIFsxLDIsMyw0LDUsNl0sJ3BhcnR5U2l6ZScpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRHJvcGRvd24oJ2RhdGVJbnB1dCcsICdEYXRlJywgJ2RhdGUnLCAxLCBkYXRlQXJyICwgJ2RhdGVJbnB1dCcpO1xuXG4gICAgY29uc3QgdGltZUlucHV0ID0gY3JlYXRlRHJvcGRvd24oJ3RpbWVJbnB1dCcsICdUaW1lJywgJ3RpbWUnLCAxLCB0aW1lQXJyICwndGltZUlucHV0Jyk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHBhcnR5U2l6ZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuXG4gICAgY29udGFjdE1haW5EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gY29udGFjdE1haW5EaXZcbn1cblxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGRyb3Bkb3duIGFuZCBsYWJlbCwgcmV0dXJucyBib3RoIGVsZW1lbnRzIHVuZGVyIGEgZGl2XG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bihpZCwgbGFiZWxOYW1lLCBpbnB1dE5hbWUsIGRyb3Bkb3duU2l6ZSwgb3B0aW9uc0FyciwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW5wdXRXcmFwcGVyID0gY3JlYXRlRGl2KGNsYXNzTmFtZSlcblxuICAgIC8vIGNyZWF0ZSBsYWJlbCBmb3IgZHJvcGRvd25cbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgICBsYWJlbEVsZW1lbnQuaW5uZXJUZXh0ID0gbGFiZWxOYW1lXG5cbiAgICAvLyBjcmVhdGUgc2VsZWN0IGlucHV0XG4gICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRyb3Bkb3duU2l6ZSk7XG4gICAgZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAvLyBjcmVhdGUgb3B0aW9uc1xuICAgIG9wdGlvbnNBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQpO1xuICAgICAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IGVsZW1lbnRcblxuICAgICAgICBkcm9wZG93bkVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbiAgICB9KVxuXG5cbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbGVtZW50KTtcblxuICAgIHJldHVybiBpbnB1dFdyYXBwZXJcbn1cblxuIiwiLy8gSUlGRSB0byBleHRlbmQgRGF0ZSBvYmplY3QgcHJvdG90eXBlXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddO1xuXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbiAgICBEYXRlLnByb3RvdHlwZS5nZXREYXlOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZGF5c1t0aGlzLmdldERheSgpXTtcbiAgICB9O1xuXG4gICAgRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGhOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbW9udGhzW3RoaXMuZ2V0TW9udGgoKV07XG4gICAgfTtcbn0pKCk7XG5cblxuLy8gZGF0ZSB0aW1lIGdlbmVyYXRvciBjbGFzc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuaW5nSG91cnMge1xuICAgIGNvbnN0cnVjdG9yKHdrZGF5T3Blbiwgd2tkYXlDbG9zZSwgd2tlbmRPcGVuLCB3a2VuZENsb3NlKSB7XG4gICAgICAgIHRoaXMud2tkYXlPcGVuID0gd2tkYXlPcGVuO1xuICAgICAgICB0aGlzLndrZGF5Q2xvc2UgPSB3a2RheUNsb3NlO1xuICAgICAgICB0aGlzLndrZW5kT3BlbiA9IHdrZW5kT3BlbjtcbiAgICAgICAgdGhpcy53a2VuZENsb3NlID0gd2tlbmRDbG9zZTtcbiAgICAgICAgdGhpcy53a2RheVNsb3RzID0gWycxMTowMCcsICcxMTozMCcsICcxMjowMCcsICcxMjozMCcsICcxMzowMCcsICcxMzozMCcsICcxNDowMCcsICcxNDozMCcsICcxNTowMCcsICcxNTozMCcsICcxNjowMCcsICcxNjozMCcsICcxNzowMCcsICcxNzozMCddO1xuICAgICAgICB0aGlzLndrZW5kU2xvdHMgPSBbJzA5OjAwJywnMDk6MzAnLCAnMTA6MDAnLCAnMTA6MzAnLCAnMTE6MDAnLCAnMTE6MzAnLCAnMTI6MDAnLCAnMTI6MzAnLCAnMTM6MDAnLCAnMTM6MzAnLCAnMTQ6MDAnLCAnMTQ6MzAnLCAnMTU6MDAnLCAnMTU6MzAnLCAnMTY6MDAnLCAnMTY6MzAnLCAnMTc6MDAnLCAnMTc6MzAnXTtcbiAgICB9XG5cbiAgICBfaXNXa2VuZChkYXRlT2JqKSB7XG4gICAgICAgIGlmIChkYXRlT2JqLmdldERheSgpPT09MCB8fCBkYXRlT2JqLmdldERheSgpID09PSA2KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgX2NhZmVJc0Nsb3NlZChkYXRlT2JqKSB7XG4gICAgICAgIGlmIChkYXRlT2JqLmdldEhvdXJzKCk+PTE4KSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBhZnRlciA2cG0sIGNhZmUgaXMgY2xvc2VkXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBuZXh0QXZhaWxhYmxlVGltZShkYXRlT2JqKSB7XG4gICAgICAgIGlmIChkYXRlT2JqLmdldERheSgpID09PSAyKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBiZWNhdXNlIGNhZmUgaXMgY2xvc2VkIHR1ZXNkYXlzXG5cbiAgICAgICAgICAgIC8vIG5vdGU6IHRoZXJlJ3Mgbm8gbmVlZCB0byBjbG9uZSEgd2UgU0hPVUxEIGNoYW5nZSB0aGUgZGF0ZU9iaiBkaXJlY3RseVxuICAgICAgICAgICAgZGF0ZU9iai5zZXREYXRlKGRhdGVPYmouZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHRoaXMud2tkYXlPcGVuIC0gMSk7XG5cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dEF2YWlsYWJsZVRpbWUoZGF0ZU9iaik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY2FmZUlzQ2xvc2VkKGRhdGVPYmopKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBjYWZlIGlzIGNsb3NlZCAoYWZ0ZXIgNnBtKVxuICAgICBcbiAgICAgICAgICAgIC8vIG5vdGU6IHRoZXJlJ3Mgbm8gbmVlZCB0byBjbG9uZSEgd2UgU0hPVUxEIGNoYW5nZSB0aGUgZGF0ZU9iaiBkaXJlY3RseVxuICAgICAgICAgICAgZGF0ZU9iai5zZXREYXRlKGRhdGVPYmouZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNXa2VuZChkYXRlT2JqKSkge1xuICAgICAgICAgICAgICAgIGRhdGVPYmouc2V0SG91cnModGhpcy53a2VuZE9wZW4gLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZU9iai5zZXRIb3Vycyh0aGlzLndrZGF5T3BlbiAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dEF2YWlsYWJsZVRpbWUoZGF0ZU9iaik7ICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVsc2UgcmV0dXJuIGN1cnJlbnQgZGF0ZSBpbiBzdHIgZm9ybVxuICAgICAgICAgICAgLy8gYWxzbyByZXR1cm4gdGhlIHJlbWFpbmluZ09wZW5pbmdIb3VycyBpbiBhbiBBcnJheVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBgKCR7ZGF0ZU9iai5nZXREYXlOYW1lKCl9KSAke2RhdGVPYmouZ2V0TW9udGhOYW1lKCl9ICR7ZGF0ZU9iai5nZXREYXRlKCl9LCAke2RhdGVPYmouZ2V0RnVsbFllYXIoKX1gXG4gICAgICAgICAgICAvLyBlLmcuIChGcmkpIE9jdCAyMCwgMjAyM1xuICAgICAgICAgICAgbGV0IHJlbWFpbmluZ09wZW5Ib3Vyc0Fycj1bXVxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzV2tlbmQpIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIgPSBbLi4udGhpcy53a2VuZFNsb3RzXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZGF0ZU9iai5nZXRIb3VycygpID4gTnVtYmVyKHJlbWFpbmluZ09wZW5Ib3Vyc0FyclswXS5zdWJzdHJpbmcoMCwyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nT3BlbkhvdXJzQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iai5nZXRIb3VycygpID09IE51bWJlcihyZW1haW5pbmdPcGVuSG91cnNBcnJbMF0uc3Vic3RyaW5nKDAsMikpICYmIGRhdGVPYmouZ2V0TWludXRlcygpPjMwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ09wZW5Ib3Vyc0Fyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdPcGVuSG91cnNBcnIgPSBbLi4udGhpcy53a2RheVNsb3RzXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZGF0ZU9iai5nZXRIb3VycygpID4gTnVtYmVyKHJlbWFpbmluZ09wZW5Ib3Vyc0FyclswXS5zdWJzdHJpbmcoMCwyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nT3BlbkhvdXJzQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iai5nZXRIb3VycygpID09IE51bWJlcihyZW1haW5pbmdPcGVuSG91cnNBcnJbMF0uc3Vic3RyaW5nKDAsMikpICYmZGF0ZU9iai5nZXRNaW51dGVzKCk+MzApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nT3BlbkhvdXJzQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIFtkYXRlU3RyLCByZW1haW5pbmdPcGVuSG91cnNBcnJdXG4gICAgICAgIH1cbn1cbn1cblxuLy8gUXVlc3Rpb25zXG4vLyAxKSBpZiBpIGNhbGxlZCBPcGVuaW5nSG91cnMubmV4dEF2YWlsYWJsZVRpbWUoKSBmcm9tIGFub3RoZXIgZmlsZSwgd291bGQgaXQgaGF2ZSBhY2Nlc3MgdG8gdGhlIElJRkU/XG4vLyAyKSBuZWVkIHRvIGltcGxlbWVudCBzb21ldGhpbmcgb2Ygd2hpbGUgKGF2YWlsYWJsZURhdGVzQXJyLmxlbmd0aCA8IDMpIHtnZW5lcmF0ZSBtb3JlIGRhdGVzfVxuLy8gICAgKHdpbGwgcHJvYmFibHkgbmVlZCB0byBrZWVwIGEgY291bnRlciB0byBpbmNyZW1lbnQgYnkgMSkiLCJpbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZUlNRyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc3BsYXNoSU1HRmlsZSBmcm9tICcuL2ltZy9sYXR0ZS1hcnQuanBlZydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICAvL2NyZWF0ZSBzcGxhc2ggY29udGFpbmVyXG4gICAgY29uc3Qgc3BsYXNoID0gY3JlYXRlRGl2KCdzcGxhc2gnKTtcbiAgICBzcGxhc2guc2V0QXR0cmlidXRlKCdpZCcsICdzcGxhc2gnKVxuXG4gICAgLy9jcmVhdGUgaW1nIFxuICAgIGNvbnN0IHNwbGFzaEltZ0VsZW1lbnQgPSBjcmVhdGVJTUcoc3BsYXNoSU1HRmlsZSlcblxuICAgIC8vY3JlYXRlIHRleHQgZGl2IHdpdGggY2xhc3MgJ3NwbGFzaFRleHQxJ1xuICAgIGNvbnN0IHNwbGFzaFRleHQxID0gY3JlYXRlRGl2KCdzcGxhc2hUZXh0MScpO1xuICAgIHNwbGFzaFRleHQxLmlubmVyVGV4dCA9ICdDT01FIFRPIE9ESU5cXCdTJ1xuICAgIFxuICAgIC8vY3JlYXRlIHRleHQgZGl2IHdpdGggY2xhc3MgJ3NwbGFzaFRleHQyJ1xuICAgIGNvbnN0IHNwbGFzaFRleHQyID0gY3JlYXRlRGl2KCdzcGxhc2hUZXh0MicpO1xuICAgIHNwbGFzaFRleHQyLmlubmVyVGV4dCA9ICdGT1IgQSBXQVJNIENVUFBBIEpPWSEnXG4gICAgXG4gICAgLy9hcHBlbmQgaW1nIHRvIHNwbGFzaFxuICAgIHNwbGFzaC5hcHBlbmRDaGlsZChzcGxhc2hJbWdFbGVtZW50KTtcbiAgICBzcGxhc2guYXBwZW5kQ2hpbGQoc3BsYXNoVGV4dDEpO1xuICAgIHNwbGFzaC5hcHBlbmRDaGlsZChzcGxhc2hUZXh0Mik7XG4gICAgXG4gICAgLy9yZXR1cm4gKGFuZCBhcHBlbmQgdG8gY29udGVudCBkaXYpXG4gICAgcmV0dXJuIHNwbGFzaFxufVxuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IGZiU1ZHIGZyb20gJy4vaW1nL2ZiLnN2Zyc7XG5pbXBvcnQgaW5zdGFTVkcgZnJvbSAnLi9pbWcvaW5zdGEuc3ZnJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL2xvZ28tYmxhY2stY29sb3VyZWQucG5nJztcblxuXG4vLyBjcmVhdGUgaGVhZGVyXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVEaXYoKTtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGVyJyk7XG5cbmNvbnN0IGxvZ29FbGVtZW50ID0gY3JlYXRlSU1HKGxvZ28sICdsb2dvJyk7XG5sb2dvRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnNnJlbSc7XG5sb2dvRWxlbWVudC5zdHlsZS53aWR0aCA9ICc2cmVtJztcbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvRWxlbWVudCk7XG5cbi8vIGNyZWF0ZSBjbGlja2FibGUgdGFic1xuWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gICAgZGl2LmlubmVyVGV4dD1pdGVtO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXYpO1xufSlcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbi8vIGNyZWF0ZSBjb250ZW50IGFyZWFcbmNvbnN0IGNvbnRlbnREaXYgPSBjcmVhdGVEaXYoKTtcbmNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpOyBcblxuLy8gY3JlYXRlIGZvb3RlclxuY29uc3QgZm9vdGVyID0gY3JlYXRlRGl2KCk7XG5mb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuLy8gY3JlYXRlIHNvY2lhbCBtZWRpYSBjb250YWluZXIgZGl2XG5jb25zdCBzb2NpYWxNZWRpYUNvbnRhaW5lckRpdiA9IGNyZWF0ZURpdignc29jaWFsTWVkaWFDb250YWluZXJEaXYnKTtcblxuXG5bZmJTVkcsIGluc3RhU1ZHXS5mb3JFYWNoKChpbWdGaWxlKT0+IHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlSU1HKGltZ0ZpbGUpO1xuICAgIHNvY2lhbE1lZGlhQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xufSk7XG5mb290ZXIuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFDb250YWluZXJEaXYpO1xuXG4vLyBwaG90byBjcmVkaXRzIC0gZG8gbm90IHJlbW92ZVxuY29uc3QgcGhvdG9DcmVkaXRzID0gY3JlYXRlRGl2KClcbnBob3RvQ3JlZGl0cy5jbGFzc0xpc3QuYWRkKCdmb290ZXJUZXh0Jyk7XG5waG90b0NyZWRpdHMuaW5uZXJUZXh0ID0gJ1Bob3RvIGJ5IFByYWZ1bCBEYXMgd3d3LnBleGVscy5jb20nXG5cbmZvb3Rlci5hcHBlbmRDaGlsZChwaG90b0NyZWRpdHMpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cblxuLy8gZXZlbnRsaXN0ZW5lciBmb3IgaG9tZSwgbWVudSwgY29udGFjdCB0YWJzXG5cblsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS50b0xvd2VyQ2FzZSgpKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUYWIpO1xufSlcblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBkaXZzXG5mdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAvLyBpZiBjbGFzc05hbWUgZW1wdHkgZG9uJ3QgYWRkIGNsYXNzIHRvIGRpdlxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZGl2XG59XG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgaW1nIGVsZW1lbnRzXG5mdW5jdGlvbiBjcmVhdGVJTUcoaW1nc3JjLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgaW1nRWxlbWVudC5zcmMgPSBpbWdzcmM7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGltZ0VsZW1lbnQ7XG59XG5cbmV4cG9ydCB7Y3JlYXRlRGl2LCBjcmVhdGVJTUd9XG4vLyBleHBvcnQgY3JlYXRlRGl2IGFuZCBjcmVhdGVJTUdcblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIHJlbXZvZSBhbGwgY2hpbGQgbm9kZXNcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBsb2FkIHRhYiBiYXNlZCBvbiBjbGljayBldmVudFxuXG5mdW5jdGlvbiBsb2FkVGFiKGV2dCkge1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudERpdik7XG4gICAgc3dpdGNoIChldnQudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcbiAgICAgICAgICAgIHBob3RvQ3JlZGl0cy5pbm5lclRleHQgPSAnUGhvdG8gYnkgUHJhZnVsIERhcyB3d3cucGV4ZWxzLmNvbSdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZE1lbnUoKSk7XG4gICAgICAgICAgICBwaG90b0NyZWRpdHMuaW5uZXJUZXh0ID0gJ1Bob3RvIGJ5IHNlcmhpaV9ib2J5ayBvbiBGcmVlcGlrIFxcbiBQaG90byBieSBBcnlhIEJhanJhIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBEemVuaW5hIEx1a2FjIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBQaXhhYmF5IHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBOYXRhbiBNYWNoYWRvIEZvdG9ncmFmaWEgR2FzdHJvbsO0bWljYSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgS3Jpc3RpbmEgUGF1a3NodGl0ZSB3d3cucGV4ZWxzLmNvbSBcXG4gUGhvdG8gYnkgVmljdG9yIEZyZWl0YXMgd3d3LnBleGVscy5jb20gXFxuIFBob3RvIGJ5IENoZXZhbm9uIFBob3RvZ3JhcGh5IHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBDYXNhIE5vcnRlIHd3dy5wZXhlbHMuY29tIFxcbiBQaG90byBieSBDaGFybG90dGUgTWF5IHd3dy5wZXhlbHMuY29tJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkQ29udGFjdCgpKTtcbiAgICAgICAgICAgIHBob3RvQ3JlZGl0cy5pbm5lclRleHQgPSAnJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG4vLyBsb2FkIGhvbWUgcGFnZSBieSBkZWZhdWx0XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSkpOyIsImltcG9ydCBtZW51MSBmcm9tICcuL2ltZy9tZW51MS5wbmcnO1xuaW1wb3J0IG1lbnUyIGZyb20gJy4vaW1nL21lbnUyLnBuZyc7XG5pbXBvcnQgbWVudTMgZnJvbSAnLi9pbWcvbWVudTMucG5nJztcbmltcG9ydCBtZW51NCBmcm9tICcuL2ltZy9tZW51NC5wbmcnO1xuaW1wb3J0IG1lbnU1IGZyb20gJy4vaW1nL21lbnU1LnBuZyc7XG5pbXBvcnQgbWVudTYgZnJvbSAnLi9pbWcvbWVudTYucG5nJztcblxuaW1wb3J0IGNvZmZlZTEgZnJvbSAnLi9pbWcvY29mZmVlMS5wbmcnO1xuaW1wb3J0IGNvZmZlZTIgZnJvbSAnLi9pbWcvY29mZmVlMi5wbmcnO1xuaW1wb3J0IGNvZmZlZTMgZnJvbSAnLi9pbWcvY29mZmVlMy5wbmcnO1xuXG5pbXBvcnQgdGVhMSBmcm9tICcuL2ltZy90ZWExLnBuZyc7XG5cbmNvbnN0IGZvb2RJbWdBcnJheSA9IFtbbWVudTEsJ1RJUk9LUk9LRVRFUyBcXG4gZnJpZWQgY2hlZXNlIGJhbGxzLCBncmVlayBmZXRhLCBzb2Z0IGdvdWRhLCBjaGVkZGFyLCBlZ2dwbGFudCwgZnJlc2ggYmFzaWwgbGVhdmVzICddLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFttZW51MiwgJ09OSU9OIFJJTkdTIFxcbiBicmVhZGVkIG9uaW9uIHJpbmdzLCBtYXlvLXNyaXJhY2hhIHNhdWNlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21lbnUzLCAnVFJVRkZMRSBGUklFUyBcXG4gYmVsZ2l1bSBwb3RhdG8sIHdoaXRlIHRydWZmbGUgb2lsLCBncmF0ZWQgcGFybWVzYW4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW21lbnU0LCAnUEFQUklLQSBDUklTUFkgV0lOR1MgXFxuIGhhbmQgYnJlYWRlZCwgbGlnaHRseSB0b3NzZWQgaW4gcGFwcmlrYSBwb3dkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51NSwgJ01FQVQgTE9WRVIgQlVSR0VSIFxcbiBkb3VibGUgY2hlZXNlLCBvbmlvbiByaW5ncywgYmFjb24sIDEwMGcgZ3JhaW4gZmVkIGJlZWYgcGF0dHksIHBvdGF0byBidW4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudTYsICdDTEFTU0lDIE1BR0hFUklUQSBcXG4gZnJlc2ggdG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBmcmVzaCBiYXNpbCBsZWF2ZXMsIG9saXZlIG9pbCddXVxuY29uc3QgZHJpbmtJbWdBcnJheSA9IFtbY29mZmVlMSwgJ0RSSVAgQ09GRkVFIFxcbiBldGhpb3BpYSwgbm90ZXM6IGJlcnJpZXMsIGVsZGVyZmxvd2VyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29mZmVlMiwgJ0VTUFJFU1NPIFxcbiBzaW5nbGUvZG91YmxlIHNob3QnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY29mZmVlMywgJ0lDRUQgQU1FUklDQU5PIFxcbiBzaW5nbGUgc2hvdCBlc3ByZXNzbywgZmlsdGVyZWQgd2F0ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlYTEsICdNQVRDSEEgTEFUVEUgXFxuIHVqaSBtYXRjaGEgZXNwcmVzc28sIHNveS9vYXQgbWlsayAnXV1cblxuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVJTUcgfSBmcm9tICcuJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtZW51TWFpbkRpdiA9IGNyZWF0ZURpdigpO1xuICAgIG1lbnVNYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudU1haW4nKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tIGZvb2QgbWVudSAtLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3QgZm9vZE1lbnVEaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBmb29kTWVudURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb2RNZW51Jyk7XG5cbiAgICBmb29kSW1nQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlRGl2KCdtZW51SXRlbUNvbnRhaW5lcicpO1xuICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBjcmVhdGVJTUcoZWxlbWVudFswXSwgJ21lbnUnKTtcbiAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGNyZWF0ZURpdignZGVzY3JpcHRpb24nKTtcbiAgICAgICBkZXNjcmlwdGlvbkRpdi5pbm5lclRleHQgPSBlbGVtZW50WzFdO1xuXG4gICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICAgZm9vZE1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgfSlcblxuICAgIG1lbnVNYWluRGl2LmFwcGVuZENoaWxkKGZvb2RNZW51RGl2KTtcbiAgICBcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIC0tLS0tLS0tLS0tIGRyaW5rcyBtZW51IC0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBcbiAgICBjb25zdCBkcmlua01lbnVEaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBkcmlua01lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkcmlua01lbnUnKTtcblxuICAgIGRyaW5rSW1nQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZURpdignZHJpbmtJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBjcmVhdGVJTUcoZWxlbWVudFswXSwgJ2RyaW5rJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRGl2KCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5pbm5lclRleHQgPSBlbGVtZW50WzFdXG5cbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICBkcmlua01lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH0pXG5cbiAgICBtZW51TWFpbkRpdi5hcHBlbmRDaGlsZChkcmlua01lbnVEaXYpO1xuXG4gICAgcmV0dXJuIG1lbnVNYWluRGl2XG59XG5cbi8vIFBob3RvIGJ5IHNlcmhpaV9ib2J5ayBvbiBGcmVlcGlrXG4vLyBQaG90byBieSBBcnlhIEJhanJhIHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBEemVuaW5hIEx1a2FjIHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBQaXhhYmF5IHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBOYXRhbiBNYWNoYWRvIEZvdG9ncmFmaWEgR2FzdHJvbsO0bWljYSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgS3Jpc3RpbmEgUGF1a3NodGl0ZSB3d3cucGV4ZWxzLmNvbVxuXG5cbi8vIFBob3RvIGJ5IFZpY3RvciBGcmVpdGFzIHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBDaGV2YW5vbiBQaG90b2dyYXBoeSB3d3cucGV4ZWxzLmNvbVxuLy8gUGhvdG8gYnkgQ2FzYSBOb3J0ZSB3d3cucGV4ZWxzLmNvbVxuXG4vLyBQaG90byBieSBDaGFybG90dGUgTWF5IHd3dy5wZXhlbHMuY29tIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9