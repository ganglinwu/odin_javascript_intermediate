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

img.menu,
img.coffee,
img.tea {
    width: inherit
}

#splash {
    width: 100vw;
}

#splash img {
    width: inherit; /* image does not command viewport */
    filter: brightness(50%); 
    height: calc(100vw - 20px);

    object-fit: cover;
    object-position: 0% 60%;

    position: relative;
}

.splashText1 {
    position: absolute;
    top: calc(25vw);

    text-align: center;
    

    padding: 1rem;

    background-color: transparent;

    font-family: 'cafeFont0';
    font-size: 2rem;

    color: var(--orange3);
}

.splashText2 {
    position: absolute;
    top: calc(100vw);
    right: 0px;

    text-align: center;
    

    padding: 1rem;

    background-color: transparent;

    font-family: 'cafeFont0';
    font-size: 2rem;

    color: var(--orange3);
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
}

/* @media only screen and (max-width: 320px) {
    html {
        font-size: 10px;
    }

    #splash img {
        height: 300px;
    }
} 

@media only screen and (min-width:321px) and (max-width: 375px) {
    #splash img {
        height: 350px;
    }
}

@media only screen and (min-width:376px) and (max-width: 425px) {
    #splash img {
        height: 400px;
    }
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,4CAA6C;AACjD;AACA;IACI,wBAAwB;IACxB,4CAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;IAEtB,8BAA8B;;IAE9B,wBAAwB;;IAExB,yBAAyB,EAAE,gCAAgC;AAC/D;;AAEA,mCAAmC;AACnC,mCAAmC;AACnC,mCAAmC;;AAEnC;IACI,YAAY;;IAEZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;;;;IAII,iBAAiB;IACjB,4BAA4B;;IAE5B,qBAAqB;AACzB;;AAEA;;;IAGI,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA,oCAAoC;AACpC,oCAAoC;AACpC,oCAAoC;;AAEpC;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;;;IAGI;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc,EAAE,oCAAoC;IACpD,uBAAuB;IACvB,0BAA0B;;IAE1B,iBAAiB;IACjB,uBAAuB;;IAEvB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;;IAEf,kBAAkB;;;IAGlB,aAAa;;IAEb,6BAA6B;;IAE7B,wBAAwB;IACxB,eAAe;;IAEf,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;;IAEV,kBAAkB;;;IAGlB,aAAa;;IAEb,6BAA6B;;IAE7B,wBAAwB;IACxB,eAAe;;IAEf,qBAAqB;AACzB;;;AAGA,mCAAmC;AACnC,mCAAmC;AACnC,mCAAmC;;AAEnC;IACI,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;QAEQ,aAAa;QACb,6BAA6B;;QAE7B,cAAc;;QAEd,oBAAoB;AAC5B;;AAEA;IACI,YAAY;IACZ,WAAW;;IAEX,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;;;;;;;;;;;;;;;;;;;GAoBG","sourcesContent":["@font-face {\n    font-family: 'cafeFont0';\n    src: url(./fonts/Avenir-Next-LT-W04-Thin.ttf);\n}\n@font-face {\n    font-family: 'cafeFont1';\n    src: url(./fonts/meticula-bold.ttf);\n}\n\n:root {\n    --orange1: #ff5311;\n    --orange2: #ff7844;\n    --orange3: #ff9d77;\n    --black: #111;\n    --grey: #e6e6e6;\n    --white: #fff;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n    background-color: var(--black);\n\n    font-family: 'cafeFont1';\n\n    font-size: calc(100vw/30); /* 1rem calculated dynamically */\n}\n\n/* ------------------------------ */\n/* ------- header section ------- */\n/* ------------------------------ */\n\n#header {\n    width: 100vw;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.logo,\n#home,\n#menu,\n#contact {\n    font-size: 1.5rem;\n    transition: all 0.2s ease-in;\n\n    color: var(--orange2);\n}\n\n#home:hover,\n#menu:hover,\n#contact:hover {\n    font-size: 1.8rem;\n    text-decoration: underline;\n}\n\n/* ------------------------------- */\n/* ------- content section ------- */\n/* ------------------------------- */\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    height: fit-content;\n    margin-bottom: 3rem;\n}\n\nimg.menu,\nimg.coffee,\nimg.tea {\n    width: inherit\n}\n\n#splash {\n    width: 100vw;\n}\n\n#splash img {\n    width: inherit; /* image does not command viewport */\n    filter: brightness(50%); \n    height: calc(100vw - 20px);\n\n    object-fit: cover;\n    object-position: 0% 60%;\n\n    position: relative;\n}\n\n.splashText1 {\n    position: absolute;\n    top: calc(25vw);\n\n    text-align: center;\n    \n\n    padding: 1rem;\n\n    background-color: transparent;\n\n    font-family: 'cafeFont0';\n    font-size: 2rem;\n\n    color: var(--orange3);\n}\n\n.splashText2 {\n    position: absolute;\n    top: calc(100vw);\n    right: 0px;\n\n    text-align: center;\n    \n\n    padding: 1rem;\n\n    background-color: transparent;\n\n    font-family: 'cafeFont0';\n    font-size: 2rem;\n\n    color: var(--orange3);\n}\n\n\n/* ------------------------------ */\n/* ------- footer section ------- */\n/* ------------------------------ */\n\n#footer {\n    width: 100vw;\n\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n}\n\n.socialMediaContainerDiv {\n    \n        display: flex;\n        justify-content: space-evenly;\n        \n        width: inherit;\n\n        padding-bottom: 2rem;\n}\n\n.socialMediaContainerDiv  img {\n    height: 2rem;\n    width: 2rem;\n    \n    background-color: var(--grey);\n}\n\n.footerText {\n    color: var(--white);\n}\n\n/* @media only screen and (max-width: 320px) {\n    html {\n        font-size: 10px;\n    }\n\n    #splash img {\n        height: 300px;\n    }\n} \n\n@media only screen and (min-width:321px) and (max-width: 375px) {\n    #splash img {\n        height: 350px;\n    }\n}\n\n@media only screen and (min-width:376px) and (max-width: 425px) {\n    #splash img {\n        height: 400px;\n    }\n} */"],"sourceRoot":""}]);
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
function loadContact() {
    return
}

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
            break;
        case 'menu':
            contentDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
            break;
        case 'contact':
            _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"];
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
/* harmony import */ var _img_menu1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu1.jpeg */ "./src/img/menu1.jpeg");
/* harmony import */ var _img_menu2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu2.jpeg */ "./src/img/menu2.jpeg");
/* harmony import */ var _img_menu3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu3.jpeg */ "./src/img/menu3.jpeg");
/* harmony import */ var _img_menu4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu4.jpeg */ "./src/img/menu4.jpeg");
/* harmony import */ var _img_menu5_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu5.jpeg */ "./src/img/menu5.jpeg");
/* harmony import */ var _img_menu6_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu6.jpeg */ "./src/img/menu6.jpeg");
/* harmony import */ var _img_coffee1_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/coffee1.jpeg */ "./src/img/coffee1.jpeg");
/* harmony import */ var _img_coffee2_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/coffee2.jpeg */ "./src/img/coffee2.jpeg");
/* harmony import */ var _img_coffee3_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/coffee3.jpeg */ "./src/img/coffee3.jpeg");
/* harmony import */ var _img_tea1_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/tea1.jpeg */ "./src/img/tea1.jpeg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! . */ "./src/index.js");















function loadMenu() {
    const menuMainDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)();
    menuMainDiv.setAttribute('id', 'menuMain');

    /* --------------------------------- */
    /* ----------- food menu ----------- */
    /* --------------------------------- */

    const foodMenuDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)();
    foodMenuDiv.setAttribute('id', 'foodMenu');

    for (let i = 0; i< 6; i++) {
        const menuItem = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)('menuItemContainer');
        const imgElement = (0,___WEBPACK_IMPORTED_MODULE_10__.createIMG)([`menu${i+1}`], 'menu');
        const descriptionDiv = (0,___WEBPACK_IMPORTED_MODULE_10__.createDiv)('description');

        menuItem.appendChild(imgElement);
        menuItem.appendChild(descriptionDiv);

        foodMenuDiv.appendChild(menuItem);
    }

    menuMainDiv.appendChild(foodMenuDiv);

    /* ----------------------------------- */
    /* ----------- drinks menu ----------- */
    /* ----------------------------------- */
    
    


    return menuMainDiv
}

// Image by serhii_bobyk on Freepik
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

/***/ "./src/img/coffee1.jpeg":
/*!******************************!*\
  !*** ./src/img/coffee1.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbaeec97fe0db0be2f58.jpeg";

/***/ }),

/***/ "./src/img/coffee2.jpeg":
/*!******************************!*\
  !*** ./src/img/coffee2.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f7d3d7f7b69d093969e.jpeg";

/***/ }),

/***/ "./src/img/coffee3.jpeg":
/*!******************************!*\
  !*** ./src/img/coffee3.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bba890185135795de7a3.jpeg";

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

/***/ "./src/img/menu1.jpeg":
/*!****************************!*\
  !*** ./src/img/menu1.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "693de3f0a5714e9cb2e3.jpeg";

/***/ }),

/***/ "./src/img/menu2.jpeg":
/*!****************************!*\
  !*** ./src/img/menu2.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f52ed7856cb55c44a5d.jpeg";

/***/ }),

/***/ "./src/img/menu3.jpeg":
/*!****************************!*\
  !*** ./src/img/menu3.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9573e384c9c91fea06cf.jpeg";

/***/ }),

/***/ "./src/img/menu4.jpeg":
/*!****************************!*\
  !*** ./src/img/menu4.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09358d8a6d3c481e1ef3.jpeg";

/***/ }),

/***/ "./src/img/menu5.jpeg":
/*!****************************!*\
  !*** ./src/img/menu5.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9f947b3f275f698576b.jpeg";

/***/ }),

/***/ "./src/img/menu6.jpeg":
/*!****************************!*\
  !*** ./src/img/menu6.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a20b4c10ca04be210ad2.jpeg";

/***/ }),

/***/ "./src/img/tea1.jpeg":
/*!***************************!*\
  !*** ./src/img/tea1.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bb31faacec5205688ba.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvREFBUTtBQUMzQztBQUNBO0FBQ0EsbUNBQW1DLG9EQUFRO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLG1EQUFXO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxvREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJO0FBQ0E7QUFDQTs7QUFFTjs7QUFFTTs7QUFFMUI7QUFDZix3QkFBd0IsNkNBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw2Q0FBUztBQUNqQzs7QUFFQSxvQkFBb0IsTUFBTTtBQUMxQix5QkFBeUIsNkNBQVM7QUFDbEMsMkJBQTJCLDZDQUFTLFNBQVMsSUFBSTtBQUNqRCwrQkFBK0IsNkNBQVM7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8wOC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vMDgtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzA4LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0F2ZW5pci1OZXh0LUxULVcwNC1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvbWV0aWN1bGEtYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbjpyb290IHtcbiAgICAtLW9yYW5nZTE6ICNmZjUzMTE7XG4gICAgLS1vcmFuZ2UyOiAjZmY3ODQ0O1xuICAgIC0tb3JhbmdlMzogI2ZmOWQ3NztcbiAgICAtLWJsYWNrOiAjMTExO1xuICAgIC0tZ3JleTogI2U2ZTZlNjtcbiAgICAtLXdoaXRlOiAjZmZmO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDEnO1xuXG4gICAgZm9udC1zaXplOiBjYWxjKDEwMHZ3LzMwKTsgLyogMXJlbSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLSBoZWFkZXIgc2VjdGlvbiAtLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ28sXG4jaG9tZSxcbiNtZW51LFxuI2NvbnRhY3Qge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMik7XG59XG5cbiNob21lOmhvdmVyLFxuI21lbnU6aG92ZXIsXG4jY29udGFjdDpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0gY29udGVudCBzZWN0aW9uIC0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG5pbWcubWVudSxcbmltZy5jb2ZmZWUsXG5pbWcudGVhIHtcbiAgICB3aWR0aDogaW5oZXJpdFxufVxuXG4jc3BsYXNoIHtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbiNzcGxhc2ggaW1nIHtcbiAgICB3aWR0aDogaW5oZXJpdDsgLyogaW1hZ2UgZG9lcyBub3QgY29tbWFuZCB2aWV3cG9ydCAqL1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpOyBcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyMHB4KTtcblxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNjAlO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3BsYXNoVGV4dDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoMjV2dyk7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG5cbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTMpO1xufVxuXG4uc3BsYXNoVGV4dDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoMTAwdncpO1xuICAgIHJpZ2h0OiAwcHg7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG5cbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MCc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTMpO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLSBmb290ZXIgc2VjdGlvbiAtLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2Zvb3RlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuLnNvY2lhbE1lZGlhQ29udGFpbmVyRGl2IHtcbiAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcblxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnNvY2lhbE1lZGlhQ29udGFpbmVyRGl2ICBpbWcge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLmZvb3RlclRleHQge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICBodG1sIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgICNzcGxhc2ggaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG59IFxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzIxcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICNzcGxhc2ggaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozNzZweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgI3NwbGFzaCBpbWcge1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQTZDO0FBQ2pEO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNENBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7O0lBRXRCLDhCQUE4Qjs7SUFFOUIsd0JBQXdCOztJQUV4Qix5QkFBeUIsRUFBRSxnQ0FBZ0M7QUFDL0Q7O0FBRUEsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7O0FBRW5DO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBOzs7O0lBSUksaUJBQWlCO0lBQ2pCLDRCQUE0Qjs7SUFFNUIscUJBQXFCO0FBQ3pCOztBQUVBOzs7SUFHSSxpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsb0NBQW9DOztBQUVwQztJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWMsRUFBRSxvQ0FBb0M7SUFDcEQsdUJBQXVCO0lBQ3ZCLDBCQUEwQjs7SUFFMUIsaUJBQWlCO0lBQ2pCLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsa0JBQWtCOzs7SUFHbEIsYUFBYTs7SUFFYiw2QkFBNkI7O0lBRTdCLHdCQUF3QjtJQUN4QixlQUFlOztJQUVmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTs7SUFFVixrQkFBa0I7OztJQUdsQixhQUFhOztJQUViLDZCQUE2Qjs7SUFFN0Isd0JBQXdCO0lBQ3hCLGVBQWU7O0lBRWYscUJBQXFCO0FBQ3pCOzs7QUFHQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQzs7QUFFbkM7SUFDSSxZQUFZOztJQUVaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztRQUVRLGFBQWE7UUFDYiw2QkFBNkI7O1FBRTdCLGNBQWM7O1FBRWQsb0JBQW9CO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0lBRVgsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdjYWZlRm9udDAnO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0F2ZW5pci1OZXh0LUxULVcwNC1UaGluLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvbWV0aWN1bGEtYm9sZC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tb3JhbmdlMTogI2ZmNTMxMTtcXG4gICAgLS1vcmFuZ2UyOiAjZmY3ODQ0O1xcbiAgICAtLW9yYW5nZTM6ICNmZjlkNzc7XFxuICAgIC0tYmxhY2s6ICMxMTE7XFxuICAgIC0tZ3JleTogI2U2ZTZlNjtcXG4gICAgLS13aGl0ZTogI2ZmZjtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcbiAgICBmb250LWZhbWlseTogJ2NhZmVGb250MSc7XFxuXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMDB2dy8zMCk7IC8qIDFyZW0gY2FsY3VsYXRlZCBkeW5hbWljYWxseSAqL1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGhlYWRlciBzZWN0aW9uIC0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxvZ28sXFxuI2hvbWUsXFxuI21lbnUsXFxuI2NvbnRhY3Qge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG5cXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZTIpO1xcbn1cXG5cXG4jaG9tZTpob3ZlcixcXG4jbWVudTpob3ZlcixcXG4jY29udGFjdDpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gY29udGVudCBzZWN0aW9uIC0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG5pbWcubWVudSxcXG5pbWcuY29mZmVlLFxcbmltZy50ZWEge1xcbiAgICB3aWR0aDogaW5oZXJpdFxcbn1cXG5cXG4jc3BsYXNoIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jc3BsYXNoIGltZyB7XFxuICAgIHdpZHRoOiBpbmhlcml0OyAvKiBpbWFnZSBkb2VzIG5vdCBjb21tYW5kIHZpZXdwb3J0ICovXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpOyBcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDYwJTtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3BsYXNoVGV4dDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygyNXZ3KTtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG5cXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XFxufVxcblxcbi5zcGxhc2hUZXh0MiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDEwMHZ3KTtcXG4gICAgcmlnaHQ6IDBweDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG5cXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnY2FmZUZvbnQwJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlMyk7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gZm9vdGVyIHNlY3Rpb24gLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLnNvY2lhbE1lZGlhQ29udGFpbmVyRGl2IHtcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcblxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbi5zb2NpYWxNZWRpYUNvbnRhaW5lckRpdiAgaW1nIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZm9vdGVyVGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI3NwbGFzaCBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbn0gXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMXB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gICAgI3NwbGFzaCBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6Mzc2cHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgICAjc3BsYXNoIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgcmV0dXJuXG59IiwiaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVJTUcgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNwbGFzaElNR0ZpbGUgZnJvbSAnLi9pbWcvbGF0dGUtYXJ0LmpwZWcnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgLy9jcmVhdGUgc3BsYXNoIGNvbnRhaW5lclxuICAgIGNvbnN0IHNwbGFzaCA9IGNyZWF0ZURpdignc3BsYXNoJyk7XG4gICAgc3BsYXNoLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BsYXNoJylcblxuICAgIC8vY3JlYXRlIGltZyBcbiAgICBjb25zdCBzcGxhc2hJbWdFbGVtZW50ID0gY3JlYXRlSU1HKHNwbGFzaElNR0ZpbGUpXG5cbiAgICAvL2NyZWF0ZSB0ZXh0IGRpdiB3aXRoIGNsYXNzICdzcGxhc2hUZXh0MSdcbiAgICBjb25zdCBzcGxhc2hUZXh0MSA9IGNyZWF0ZURpdignc3BsYXNoVGV4dDEnKTtcbiAgICBzcGxhc2hUZXh0MS5pbm5lclRleHQgPSAnQ09NRSBUTyBPRElOXFwnUydcbiAgICBcbiAgICAvL2NyZWF0ZSB0ZXh0IGRpdiB3aXRoIGNsYXNzICdzcGxhc2hUZXh0MidcbiAgICBjb25zdCBzcGxhc2hUZXh0MiA9IGNyZWF0ZURpdignc3BsYXNoVGV4dDInKTtcbiAgICBzcGxhc2hUZXh0Mi5pbm5lclRleHQgPSAnRk9SIEEgV0FSTSBDVVBQQSBKT1khJ1xuICAgIFxuICAgIC8vYXBwZW5kIGltZyB0byBzcGxhc2hcbiAgICBzcGxhc2guYXBwZW5kQ2hpbGQoc3BsYXNoSW1nRWxlbWVudCk7XG4gICAgc3BsYXNoLmFwcGVuZENoaWxkKHNwbGFzaFRleHQxKTtcbiAgICBzcGxhc2guYXBwZW5kQ2hpbGQoc3BsYXNoVGV4dDIpO1xuICAgIFxuICAgIC8vcmV0dXJuIChhbmQgYXBwZW5kIHRvIGNvbnRlbnQgZGl2KVxuICAgIHJldHVybiBzcGxhc2hcbn1cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBmYlNWRyBmcm9tICcuL2ltZy9mYi5zdmcnO1xuaW1wb3J0IGluc3RhU1ZHIGZyb20gJy4vaW1nL2luc3RhLnN2Zyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltZy9sb2dvLWJsYWNrLWNvbG91cmVkLnBuZyc7XG5cblxuLy8gY3JlYXRlIGhlYWRlclxuY29uc3QgaGVhZGVyID0gY3JlYXRlRGl2KCk7XG5oZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2hlYWRlcicpO1xuXG5jb25zdCBsb2dvRWxlbWVudCA9IGNyZWF0ZUlNRyhsb2dvLCAnbG9nbycpO1xubG9nb0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzZyZW0nO1xubG9nb0VsZW1lbnQuc3R5bGUud2lkdGggPSAnNnJlbSc7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0VsZW1lbnQpO1xuXG4vLyBjcmVhdGUgY2xpY2thYmxlIHRhYnNcblsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuICAgIGRpdi5pbm5lclRleHQ9aXRlbTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn0pXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4vLyBjcmVhdGUgY29udGVudCBhcmVhXG5jb25zdCBjb250ZW50RGl2ID0gY3JlYXRlRGl2KCk7XG5jb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTsgXG5cbi8vIGNyZWF0ZSBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZURpdigpO1xuZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbi8vIGNyZWF0ZSBzb2NpYWwgbWVkaWEgY29udGFpbmVyIGRpdlxuY29uc3Qgc29jaWFsTWVkaWFDb250YWluZXJEaXYgPSBjcmVhdGVEaXYoJ3NvY2lhbE1lZGlhQ29udGFpbmVyRGl2Jyk7XG5cblxuW2ZiU1ZHLCBpbnN0YVNWR10uZm9yRWFjaCgoaW1nRmlsZSk9PiB7XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IGNyZWF0ZUlNRyhpbWdGaWxlKTtcbiAgICBzb2NpYWxNZWRpYUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbn0pO1xuZm9vdGVyLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhQ29udGFpbmVyRGl2KTtcblxuLy8gcGhvdG8gY3JlZGl0cyAtIGRvIG5vdCByZW1vdmVcbmNvbnN0IHBob3RvQ3JlZGl0cyA9IGNyZWF0ZURpdigpXG5waG90b0NyZWRpdHMuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVGV4dCcpO1xucGhvdG9DcmVkaXRzLmlubmVyVGV4dCA9ICdQaG90byBieSBQcmFmdWwgRGFzIHd3dy5wZXhlbHMuY29tJ1xuXG5mb290ZXIuYXBwZW5kQ2hpbGQocGhvdG9DcmVkaXRzKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5cbi8vIGV2ZW50bGlzdGVuZXIgZm9yIGhvbWUsIG1lbnUsIGNvbnRhY3QgdGFic1xuXG5bJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0udG9Mb3dlckNhc2UoKSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVGFiKTtcbn0pXG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgZGl2c1xuZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgLy8gaWYgY2xhc3NOYW1lIGVtcHR5IGRvbid0IGFkZCBjbGFzcyB0byBkaXZcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdlxufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGltZyBlbGVtZW50c1xuZnVuY3Rpb24gY3JlYXRlSU1HKGltZ3NyYywgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ0VsZW1lbnQuc3JjID0gaW1nc3JjO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgaW1nRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBpbWdFbGVtZW50O1xufVxuXG5leHBvcnQge2NyZWF0ZURpdiwgY3JlYXRlSU1HfVxuLy8gZXhwb3J0IGNyZWF0ZURpdiBhbmQgY3JlYXRlSU1HXG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byByZW12b2UgYWxsIGNoaWxkIG5vZGVzXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gbG9hZCB0YWIgYmFzZWQgb24gY2xpY2sgZXZlbnRcblxuZnVuY3Rpb24gbG9hZFRhYihldnQpIHtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnREaXYpO1xuICAgIHN3aXRjaCAoZXZ0LnRhcmdldC5pZCkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgbG9hZENvbnRhY3Q7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8vIGxvYWQgaG9tZSBwYWdlIGJ5IGRlZmF1bHRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKSk7IiwiaW1wb3J0IG1lbnUxIGZyb20gJy4vaW1nL21lbnUxLmpwZWcnO1xuaW1wb3J0IG1lbnUyIGZyb20gJy4vaW1nL21lbnUyLmpwZWcnO1xuaW1wb3J0IG1lbnUzIGZyb20gJy4vaW1nL21lbnUzLmpwZWcnO1xuaW1wb3J0IG1lbnU0IGZyb20gJy4vaW1nL21lbnU0LmpwZWcnO1xuaW1wb3J0IG1lbnU1IGZyb20gJy4vaW1nL21lbnU1LmpwZWcnO1xuaW1wb3J0IG1lbnU2IGZyb20gJy4vaW1nL21lbnU2LmpwZWcnO1xuXG5pbXBvcnQgY29mZmVlMSBmcm9tICcuL2ltZy9jb2ZmZWUxLmpwZWcnO1xuaW1wb3J0IGNvZmZlZTIgZnJvbSAnLi9pbWcvY29mZmVlMi5qcGVnJztcbmltcG9ydCBjb2ZmZWUzIGZyb20gJy4vaW1nL2NvZmZlZTMuanBlZyc7XG5cbmltcG9ydCB0ZWExIGZyb20gJy4vaW1nL3RlYTEuanBlZyc7XG5cbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlSU1HIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnVNYWluRGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgbWVudU1haW5EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51TWFpbicpO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0gZm9vZCBtZW51IC0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdCBmb29kTWVudURpdiA9IGNyZWF0ZURpdigpO1xuICAgIGZvb2RNZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vZE1lbnUnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpPCA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVEaXYoJ21lbnVJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBjcmVhdGVJTUcoW2BtZW51JHtpKzF9YF0sICdtZW51Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRGl2KCdkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgICAgICAgZm9vZE1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH1cblxuICAgIG1lbnVNYWluRGl2LmFwcGVuZENoaWxkKGZvb2RNZW51RGl2KTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogLS0tLS0tLS0tLS0gZHJpbmtzIG1lbnUgLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIFxuICAgIFxuXG5cbiAgICByZXR1cm4gbWVudU1haW5EaXZcbn1cblxuLy8gSW1hZ2UgYnkgc2VyaGlpX2JvYnlrIG9uIEZyZWVwaWtcbi8vIFBob3RvIGJ5IEFyeWEgQmFqcmEgd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IER6ZW5pbmEgTHVrYWMgd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IFBpeGFiYXkgd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IE5hdGFuIE1hY2hhZG8gRm90b2dyYWZpYSBHYXN0cm9uw7RtaWNhIHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBLcmlzdGluYSBQYXVrc2h0aXRlIHd3dy5wZXhlbHMuY29tXG5cblxuLy8gUGhvdG8gYnkgVmljdG9yIEZyZWl0YXMgd3d3LnBleGVscy5jb21cbi8vIFBob3RvIGJ5IENoZXZhbm9uIFBob3RvZ3JhcGh5IHd3dy5wZXhlbHMuY29tXG4vLyBQaG90byBieSBDYXNhIE5vcnRlIHd3dy5wZXhlbHMuY29tXG5cbi8vIFBob3RvIGJ5IENoYXJsb3R0ZSBNYXkgd3d3LnBleGVscy5jb20iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=