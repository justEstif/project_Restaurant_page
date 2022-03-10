/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! home.jpg */ "./src/home.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;1,500&family=Ubuntu+Mono&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style-type: none;\n}\nbody {\n  background-color: #313131;\n}\n#content {\n  min-height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: auto 100%;\n  background-position: center;\n  text-align: center;\n}\n\n/* nav bar styling */\n.nav-bar {\n  background-color: #313131;\n  display: flex;\n  align-items: center;\n  height: 8vh;\n  justify-content: center;\n}\n\nbutton {\n  font-family: \"Ubuntu Mono\", monospace;\n  font-size: 2.5em;\n  margin: 5% 10%;\n  color: #fff;\n  cursor: pointer;\n  background-color: #313131;\n  text-decoration: underline 0.15em rgba(0, 0, 0, 0);\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n  border: 0;\n  padding: 10px 10px;\n}\nbutton:hover {\n  background-color: #6e6e6e;\n}\n.section-1,\n.section-2,\n.section-3 {\n  margin: 0 10rem;\n}\n.section-1 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  color: #4c81e2;\n  margin: 5rem;\n}\n.title {\n  font-family: \"Playfair Display\", serif;\n  font-size: 4rem;\n}\n.subtitle {\n  font-family: \"Dancing Script\", cursive;\n  color: aqua;\n  font-size: 3rem;\n  margin: 2rem 10rem;\n}\n.section-2,\n.section-3 {\n  font-family: \"Ubuntu Mono\", monospace;\n  font-size: 22px;\n  color: aliceblue;\n}\n\nfooter {\n  font-family: \"Ubuntu Mono\", monospace;\n  position: fixed;\n  bottom: 0;\n  right: -50;\n  color: #fff;\n  font-size: 20px;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n/* form */\nform {\n  max-width: 420px;\n  margin: 50px auto;\n}\nfieldset {\n  border: none;\n  text-align: center;\n  padding: 15px;\n}\n.feedback-input {\n  color: rgb(0, 0, 0);\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  border-radius: 5px;\n  line-height: 22px;\n  border: 0;\n  padding: 13px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.feedback-input:focus {\n  border: 0.5px solid #cc4949;\n}\n\ntextarea {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n\n[type=\"submit\"] {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #4bc5eb;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: white;\n  font-size: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n}\n[type=\"submit\"]:hover {\n  background: #2d7f97;\n}\n.label {\n  margin-bottom: 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,yDAAiC;EACjC,0BAA0B;EAC1B,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA,oBAAoB;AACpB;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,qCAAqC;EACrC,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,eAAe;EACf,yBAAyB;EACzB,kDAAkD;EAClD,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;;;EAGE,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,eAAe;AACjB;AACA;EACE,sCAAsC;EACtC,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;AACA;;EAEE,qCAAqC;EACrC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,eAAe;AACjB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA,SAAS;AACT;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,uDAAuD;EACvD,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;1,500&family=Ubuntu+Mono&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style-type: none;\n}\nbody {\n  background-color: #313131;\n}\n#content {\n  min-height: 100vh;\n  background-image: url(\"home.jpg\");\n  background-size: auto 100%;\n  background-position: center;\n  text-align: center;\n}\n\n/* nav bar styling */\n.nav-bar {\n  background-color: #313131;\n  display: flex;\n  align-items: center;\n  height: 8vh;\n  justify-content: center;\n}\n\nbutton {\n  font-family: \"Ubuntu Mono\", monospace;\n  font-size: 2.5em;\n  margin: 5% 10%;\n  color: #fff;\n  cursor: pointer;\n  background-color: #313131;\n  text-decoration: underline 0.15em rgba(0, 0, 0, 0);\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n  border: 0;\n  padding: 10px 10px;\n}\nbutton:hover {\n  background-color: #6e6e6e;\n}\n.section-1,\n.section-2,\n.section-3 {\n  margin: 0 10rem;\n}\n.section-1 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  color: #4c81e2;\n  margin: 5rem;\n}\n.title {\n  font-family: \"Playfair Display\", serif;\n  font-size: 4rem;\n}\n.subtitle {\n  font-family: \"Dancing Script\", cursive;\n  color: aqua;\n  font-size: 3rem;\n  margin: 2rem 10rem;\n}\n.section-2,\n.section-3 {\n  font-family: \"Ubuntu Mono\", monospace;\n  font-size: 22px;\n  color: aliceblue;\n}\n\nfooter {\n  font-family: \"Ubuntu Mono\", monospace;\n  position: fixed;\n  bottom: 0;\n  right: -50;\n  color: #fff;\n  font-size: 20px;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n/* form */\nform {\n  max-width: 420px;\n  margin: 50px auto;\n}\nfieldset {\n  border: none;\n  text-align: center;\n  padding: 15px;\n}\n.feedback-input {\n  color: rgb(0, 0, 0);\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  border-radius: 5px;\n  line-height: 22px;\n  border: 0;\n  padding: 13px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.feedback-input:focus {\n  border: 0.5px solid #cc4949;\n}\n\ntextarea {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n\n[type=\"submit\"] {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #4bc5eb;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: white;\n  font-size: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n}\n[type=\"submit\"]:hover {\n  background: #2d7f97;\n}\n.label {\n  margin-bottom: 30px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/* harmony export */   "addContactText": () => (/* binding */ addContactText)
/* harmony export */ });
// function to add text to elements
function addContactText(elements) {
  const { title, subtitle1, subtitle2, subtitle1Content, subtitle2Content } =
    elements;

  // contactBtn.onClick = addContactText();
  // adding text to title and subtitle
  title.innerText = "Thank You";
  subtitle1.innerHTML = "The Team";
  subtitle2.innerText = "";

  // adding text to content
  subtitle1Content.innerHTML = `<ul>
  <li>Keshar Jarga</li>
  <li>Tuk Gurung</li>
</ul>`;

  subtitle2Content.innerHTML = `<form>
  <fieldset>
    <label class="label">Contact Us</label>
    <input
      name="name"
      type="text"
      class="feedback-input"
      placeholder="Name"
    />
    <input
      name="email"
      type="text"
      class="feedback-input"
      placeholder="Email"
    />
    <textarea
      name="text"
      class="feedback-input"
      placeholder="Comment"
    ></textarea>
    <input type="submit" value="SUBMIT" />
  </fieldset>
</form>`;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuText": () => (/* binding */ addMenuText)
/* harmony export */ });
// function to add text to elements
function addMenuText(elements) {
  const { title, subtitle1, subtitle2, subtitle1Content, subtitle2Content } =
    elements;

  // contactBtn.onClick = addContactText();
  // adding text to title and subtitle
  title.innerText = "Menu";
  subtitle1.innerText = "Lunch";
  subtitle2.innerText = "Dinner";

  // adding text to content
  subtitle1Content.innerHTML = `
  <ul>
  <li>Nepali Set Meal</li>
  <li>Yak Stew</li>
  <li>Butter Chicken</li>
  <li>Lamb Korma</li>
  <li>Tandoori Chicken</li>
</ul>`;

  subtitle2Content.innerHTML = `
  <ul>
  <li>Crispy Kale</li>
  <li>Veg Manchurion</li>
  <li>Samosa Chat</li>
  <li>Chicken Chili</li>
  <li>Buff Choila</li>
</ul>`;
}


/***/ }),

/***/ "./src/home.jpg":
/*!**********************!*\
  !*** ./src/home.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cd801728e9629d187b9.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
// function to create the home page on load and button click
/**
 * document.addEventListener('DOMContentLoaded', function() {
    alert("Ready!");
}, false);

 */



const preparePage = function () {
  // function to create elements and add classes to elements
  function createElements() {
    // capture container
    const content = document.querySelector("#content");

    // make main sections
    const navbar = document.createElement("nav");
    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const section3 = document.createElement("section");
    const footer = document.createElement("footer");

    // create nav-bar subsections: buttons
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    // create section1 subsections: title
    const title = document.createElement("div");

    // create section2 subsections: subtitle and sub-content
    const subtitle1 = document.createElement("div");
    const subtitle1Content = document.createElement("div");

    // create section3 subsections: subtitle and sub-content
    const subtitle2 = document.createElement("div");
    const subtitle2Content = document.createElement("div");

    return {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    };
  }
  // function to add class and ID to elements
  function addClassID(elements) {
    const {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    } = elements;
    // adding class to main sections
    navbar.classList.add("nav-bar");
    section1.classList.add("section-1");
    section2.classList.add("section-2");
    section3.classList.add("section-3");
    footer.classList.add("footer");

    // adding class to nav-bar components
    homeBtn.classList.add("home-btn");
    menuBtn.classList.add("menu-btn");
    contactBtn.classList.add("contact-btn");
    title.classList.add("title");

    // adding class and ID to sub-section
    subtitle1.classList.add("subtitle");
    subtitle1.setAttribute("id", "subtitle1");
    subtitle1Content.classList.add("subtitle-content");
    subtitle1Content.setAttribute("id", "subtitle1-content");
    subtitle2.classList.add("subtitle");
    subtitle2.setAttribute("id", "subtitle2");
    subtitle2Content.classList.add("subtitle-content");
    subtitle2Content.setAttribute("id", "subtitle2-content");

    // return everything
    return {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    };
  }
  // function to append elements to page
  function appendToPage(elements) {
    const {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    } = elements;

    // adding text to buttons
    homeBtn.innerText = "Home";
    // homeBtn.onClick = addIndexText();
    menuBtn.innerText = "Menu";
    // menuBtn.onClick = addMenuText();
    contactBtn.innerText = "Contact";
    // adding event listeners to each button
    homeBtn.addEventListener("click", (e) => loadPage(e.target.innerText));
    menuBtn.addEventListener("click", (e) => loadPage(e.target.innerText));
    contactBtn.addEventListener("click", (e) => loadPage(e.target.innerText));

    // footer
    footer.innerHTML = `Made by<a href = "https://github.com/justEstif/"> me</a>`;
    // appending to navbar
    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);

    // appending to section1
    section1.appendChild(title);

    // appending to section2
    section2.appendChild(subtitle1);
    section2.appendChild(subtitle1Content);

    // appending to section3
    section3.appendChild(subtitle2);
    section3.appendChild(subtitle2Content);

    // appending to content
    content.appendChild(navbar);
    content.appendChild(section1);
    content.appendChild(section2);
    content.appendChild(section3);
    content.appendChild(footer);
    // return everything
    return {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    };
  }

  return appendToPage(addClassID(createElements()));
};

// function to add text to elements
function addHomeText(elements) {
  const { title, subtitle1, subtitle2, subtitle1Content, subtitle2Content } =
    elements;

  // contactBtn.onClick = addContactText();
  // adding text to title and subtitle
  title.innerText = "Himalayan Wild Yak";
  subtitle1.innerText = "What is Yak?";
  subtitle2.innerText = "Why Yak?";

  // adding text to content
  subtitle1Content.innerText = `Yak is a very hairy animal similar to bison or buffalo, but it's known as mountain cow. You can find Yak in Himalayan countries such as Nepal, Tibet and Mongolia. Yak is the healthiest meat on the planet which has more Omega-3 than Salmon. Usually, Yak prefers the higher elevation and colder climate. However, Yak can grow anywhere in the world. So, Canada started bringing Yak from Tibet and Nepal and then moved to North America, especially Colorado, Utah, Alaska. Now, they have in Pennsylvania and Virginia as well. Yak is not gamy meat but leaves a sweeter test in pallet.`;

  subtitle2Content.innerText = `Yak is a hundred percent Grass-Fed animal. Yak has three times a lower diet than the COW. It takes at least three years to grow. Yak has the lowest cholesterol than any other animal. We are only one who will be serving Yak meat dishes.`;
}

function loadPage(button) {
  switch (button) {
    case "Home":
      document.getElementById("content").innerHTML = "";
      addHomeText(preparePage());
      break;
    case "Menu":
      document.getElementById("content").innerHTML = "";
      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.addMenuText)(preparePage());
      break;
    case "Contact":
      document.getElementById("content").innerHTML = "";
      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.addContactText)(preparePage());
      break;
    default:
      document.getElementById("content").innerHTML = "";
      addHomeText(preparePage());
      break;
  }
}

addHomeText(preparePage());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsa0VBQWtFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaG9tZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANDAwOzcwMCZmYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDA7MSw1MDAmZmFtaWx5PVVidW50dStNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMzE7XFxufVxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBuYXYgYmFyIHN0eWxpbmcgKi9cXG4ubmF2LWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTMxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBtYXJnaW46IDUlIDEwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzEzMTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDAuMTVlbSByZ2JhKDAsIDAsIDAsIDApO1xcbiAgb3V0bGluZTogMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZTtcXG59XFxuLnNlY3Rpb24tMSxcXG4uc2VjdGlvbi0yLFxcbi5zZWN0aW9uLTMge1xcbiAgbWFyZ2luOiAwIDEwcmVtO1xcbn1cXG4uc2VjdGlvbi0xIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBjb2xvcjogIzRjODFlMjtcXG4gIG1hcmdpbjogNXJlbTtcXG59XFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4uc3VidGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEYW5jaW5nIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxuICBjb2xvcjogYXF1YTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogMnJlbSAxMHJlbTtcXG59XFxuLnNlY3Rpb24tMixcXG4uc2VjdGlvbi0zIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAtNTA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogZm9ybSAqL1xcbmZvcm0ge1xcbiAgbWF4LXdpZHRoOiA0MjBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbn1cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uZmVlZGJhY2staW5wdXQge1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mZWVkYmFjay1pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYzQ5NDk7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjNGJjNWViO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgbWFyZ2luLXRvcDogLTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMmQ3Zjk3O1xcbn1cXG4ubGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIseURBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrREFBa0Q7RUFDbEQsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOzs7RUFHRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANDAwOzcwMCZmYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDA7MSw1MDAmZmFtaWx5PVVidW50dStNb25vJmRpc3BsYXk9c3dhcFxcXCIpO1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzEzMTtcXG59XFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImhvbWUuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogbmF2IGJhciBzdHlsaW5nICovXFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzEzMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAgbWFyZ2luOiA1JSAxMCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMzE7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAwLjE1ZW0gcmdiYSgwLCAwLCAwLCAwKTtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTZlNmU7XFxufVxcbi5zZWN0aW9uLTEsXFxuLnNlY3Rpb24tMixcXG4uc2VjdGlvbi0zIHtcXG4gIG1hcmdpbjogMCAxMHJlbTtcXG59XFxuLnNlY3Rpb24tMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgY29sb3I6ICM0YzgxZTI7XFxuICBtYXJnaW46IDVyZW07XFxufVxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLnN1YnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGFuY2luZyBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbiAgY29sb3I6IGFxdWE7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW46IDJyZW0gMTByZW07XFxufVxcbi5zZWN0aW9uLTIsXFxuLnNlY3Rpb24tMyB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogLTUwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIGZvcm0gKi9cXG5mb3JtIHtcXG4gIG1heC13aWR0aDogNDIwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG59XFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmZlZWRiYWNrLWlucHV0IHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZmVlZGJhY2staW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjY2M0OTQ5O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzRiYzVlYjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzJkN2Y5NztcXG59XFxuLmxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBmdW5jdGlvbiB0byBhZGQgdGV4dCB0byBlbGVtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbnRhY3RUZXh0KGVsZW1lbnRzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlMSwgc3VidGl0bGUyLCBzdWJ0aXRsZTFDb250ZW50LCBzdWJ0aXRsZTJDb250ZW50IH0gPVxuICAgIGVsZW1lbnRzO1xuXG4gIC8vIGNvbnRhY3RCdG4ub25DbGljayA9IGFkZENvbnRhY3RUZXh0KCk7XG4gIC8vIGFkZGluZyB0ZXh0IHRvIHRpdGxlIGFuZCBzdWJ0aXRsZVxuICB0aXRsZS5pbm5lclRleHQgPSBcIlRoYW5rIFlvdVwiO1xuICBzdWJ0aXRsZTEuaW5uZXJIVE1MID0gXCJUaGUgVGVhbVwiO1xuICBzdWJ0aXRsZTIuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAvLyBhZGRpbmcgdGV4dCB0byBjb250ZW50XG4gIHN1YnRpdGxlMUNvbnRlbnQuaW5uZXJIVE1MID0gYDx1bD5cbiAgPGxpPktlc2hhciBKYXJnYTwvbGk+XG4gIDxsaT5UdWsgR3VydW5nPC9saT5cbjwvdWw+YDtcblxuICBzdWJ0aXRsZTJDb250ZW50LmlubmVySFRNTCA9IGA8Zm9ybT5cbiAgPGZpZWxkc2V0PlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+Q29udGFjdCBVczwvbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICBuYW1lPVwibmFtZVwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBjbGFzcz1cImZlZWRiYWNrLWlucHV0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgLz5cbiAgICA8aW5wdXRcbiAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBjbGFzcz1cImZlZWRiYWNrLWlucHV0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgIC8+XG4gICAgPHRleHRhcmVhXG4gICAgICBuYW1lPVwidGV4dFwiXG4gICAgICBjbGFzcz1cImZlZWRiYWNrLWlucHV0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiQ29tbWVudFwiXG4gICAgPjwvdGV4dGFyZWE+XG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNVQk1JVFwiIC8+XG4gIDwvZmllbGRzZXQ+XG48L2Zvcm0+YDtcbn1cbiIsIi8vIGZ1bmN0aW9uIHRvIGFkZCB0ZXh0IHRvIGVsZW1lbnRzXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVudVRleHQoZWxlbWVudHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgc3VidGl0bGUxLCBzdWJ0aXRsZTIsIHN1YnRpdGxlMUNvbnRlbnQsIHN1YnRpdGxlMkNvbnRlbnQgfSA9XG4gICAgZWxlbWVudHM7XG5cbiAgLy8gY29udGFjdEJ0bi5vbkNsaWNrID0gYWRkQ29udGFjdFRleHQoKTtcbiAgLy8gYWRkaW5nIHRleHQgdG8gdGl0bGUgYW5kIHN1YnRpdGxlXG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICBzdWJ0aXRsZTEuaW5uZXJUZXh0ID0gXCJMdW5jaFwiO1xuICBzdWJ0aXRsZTIuaW5uZXJUZXh0ID0gXCJEaW5uZXJcIjtcblxuICAvLyBhZGRpbmcgdGV4dCB0byBjb250ZW50XG4gIHN1YnRpdGxlMUNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICA8dWw+XG4gIDxsaT5OZXBhbGkgU2V0IE1lYWw8L2xpPlxuICA8bGk+WWFrIFN0ZXc8L2xpPlxuICA8bGk+QnV0dGVyIENoaWNrZW48L2xpPlxuICA8bGk+TGFtYiBLb3JtYTwvbGk+XG4gIDxsaT5UYW5kb29yaSBDaGlja2VuPC9saT5cbjwvdWw+YDtcblxuICBzdWJ0aXRsZTJDb250ZW50LmlubmVySFRNTCA9IGBcbiAgPHVsPlxuICA8bGk+Q3Jpc3B5IEthbGU8L2xpPlxuICA8bGk+VmVnIE1hbmNodXJpb248L2xpPlxuICA8bGk+U2Ftb3NhIENoYXQ8L2xpPlxuICA8bGk+Q2hpY2tlbiBDaGlsaTwvbGk+XG4gIDxsaT5CdWZmIENob2lsYTwvbGk+XG48L3VsPmA7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgaG9tZSBwYWdlIG9uIGxvYWQgYW5kIGJ1dHRvbiBjbGlja1xuLyoqXG4gKiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoXCJSZWFkeSFcIik7XG59LCBmYWxzZSk7XG5cbiAqL1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFkZE1lbnVUZXh0IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgYWRkQ29udGFjdFRleHQgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5jb25zdCBwcmVwYXJlUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGVsZW1lbnRzIGFuZCBhZGQgY2xhc3NlcyB0byBlbGVtZW50c1xuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50cygpIHtcbiAgICAvLyBjYXB0dXJlIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBtYWtlIG1haW4gc2VjdGlvbnNcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgICAvLyBjcmVhdGUgbmF2LWJhciBzdWJzZWN0aW9uczogYnV0dG9uc1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgLy8gY3JlYXRlIHNlY3Rpb24xIHN1YnNlY3Rpb25zOiB0aXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIGNyZWF0ZSBzZWN0aW9uMiBzdWJzZWN0aW9uczogc3VidGl0bGUgYW5kIHN1Yi1jb250ZW50XG4gICAgY29uc3Qgc3VidGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdWJ0aXRsZTFDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIGNyZWF0ZSBzZWN0aW9uMyBzdWJzZWN0aW9uczogc3VidGl0bGUgYW5kIHN1Yi1jb250ZW50XG4gICAgY29uc3Qgc3VidGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdWJ0aXRsZTJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50LFxuICAgICAgbmF2YmFyLFxuICAgICAgc2VjdGlvbjEsXG4gICAgICBzZWN0aW9uMixcbiAgICAgIHNlY3Rpb24zLFxuICAgICAgZm9vdGVyLFxuICAgICAgaG9tZUJ0bixcbiAgICAgIG1lbnVCdG4sXG4gICAgICBjb250YWN0QnRuLFxuICAgICAgdGl0bGUsXG4gICAgICBzdWJ0aXRsZTEsXG4gICAgICBzdWJ0aXRsZTIsXG4gICAgICBzdWJ0aXRsZTFDb250ZW50LFxuICAgICAgc3VidGl0bGUyQ29udGVudCxcbiAgICB9O1xuICB9XG4gIC8vIGZ1bmN0aW9uIHRvIGFkZCBjbGFzcyBhbmQgSUQgdG8gZWxlbWVudHNcbiAgZnVuY3Rpb24gYWRkQ2xhc3NJRChlbGVtZW50cykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBuYXZiYXIsXG4gICAgICBzZWN0aW9uMSxcbiAgICAgIHNlY3Rpb24yLFxuICAgICAgc2VjdGlvbjMsXG4gICAgICBmb290ZXIsXG4gICAgICBob21lQnRuLFxuICAgICAgbWVudUJ0bixcbiAgICAgIGNvbnRhY3RCdG4sXG4gICAgICB0aXRsZSxcbiAgICAgIHN1YnRpdGxlMSxcbiAgICAgIHN1YnRpdGxlMixcbiAgICAgIHN1YnRpdGxlMUNvbnRlbnQsXG4gICAgICBzdWJ0aXRsZTJDb250ZW50LFxuICAgIH0gPSBlbGVtZW50cztcbiAgICAvLyBhZGRpbmcgY2xhc3MgdG8gbWFpbiBzZWN0aW9uc1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi0xXCIpO1xuICAgIHNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLTJcIik7XG4gICAgc2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tM1wiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICAgIC8vIGFkZGluZyBjbGFzcyB0byBuYXYtYmFyIGNvbXBvbmVudHNcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJob21lLWJ0blwiKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ0blwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgICAvLyBhZGRpbmcgY2xhc3MgYW5kIElEIHRvIHN1Yi1zZWN0aW9uXG4gICAgc3VidGl0bGUxLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcbiAgICBzdWJ0aXRsZTEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJ0aXRsZTFcIik7XG4gICAgc3VidGl0bGUxQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic3VidGl0bGUtY29udGVudFwiKTtcbiAgICBzdWJ0aXRsZTFDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VidGl0bGUxLWNvbnRlbnRcIik7XG4gICAgc3VidGl0bGUyLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcbiAgICBzdWJ0aXRsZTIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJ0aXRsZTJcIik7XG4gICAgc3VidGl0bGUyQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic3VidGl0bGUtY29udGVudFwiKTtcbiAgICBzdWJ0aXRsZTJDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VidGl0bGUyLWNvbnRlbnRcIik7XG5cbiAgICAvLyByZXR1cm4gZXZlcnl0aGluZ1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50LFxuICAgICAgbmF2YmFyLFxuICAgICAgc2VjdGlvbjEsXG4gICAgICBzZWN0aW9uMixcbiAgICAgIHNlY3Rpb24zLFxuICAgICAgZm9vdGVyLFxuICAgICAgaG9tZUJ0bixcbiAgICAgIG1lbnVCdG4sXG4gICAgICBjb250YWN0QnRuLFxuICAgICAgdGl0bGUsXG4gICAgICBzdWJ0aXRsZTEsXG4gICAgICBzdWJ0aXRsZTIsXG4gICAgICBzdWJ0aXRsZTFDb250ZW50LFxuICAgICAgc3VidGl0bGUyQ29udGVudCxcbiAgICB9O1xuICB9XG4gIC8vIGZ1bmN0aW9uIHRvIGFwcGVuZCBlbGVtZW50cyB0byBwYWdlXG4gIGZ1bmN0aW9uIGFwcGVuZFRvUGFnZShlbGVtZW50cykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBuYXZiYXIsXG4gICAgICBzZWN0aW9uMSxcbiAgICAgIHNlY3Rpb24yLFxuICAgICAgc2VjdGlvbjMsXG4gICAgICBmb290ZXIsXG4gICAgICBob21lQnRuLFxuICAgICAgbWVudUJ0bixcbiAgICAgIGNvbnRhY3RCdG4sXG4gICAgICB0aXRsZSxcbiAgICAgIHN1YnRpdGxlMSxcbiAgICAgIHN1YnRpdGxlMixcbiAgICAgIHN1YnRpdGxlMUNvbnRlbnQsXG4gICAgICBzdWJ0aXRsZTJDb250ZW50LFxuICAgIH0gPSBlbGVtZW50cztcblxuICAgIC8vIGFkZGluZyB0ZXh0IHRvIGJ1dHRvbnNcbiAgICBob21lQnRuLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIC8vIGhvbWVCdG4ub25DbGljayA9IGFkZEluZGV4VGV4dCgpO1xuICAgIG1lbnVCdG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgLy8gbWVudUJ0bi5vbkNsaWNrID0gYWRkTWVudVRleHQoKTtcbiAgICBjb250YWN0QnRuLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIC8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCBidXR0b25cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gbG9hZFBhZ2UoZS50YXJnZXQuaW5uZXJUZXh0KSk7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGxvYWRQYWdlKGUudGFyZ2V0LmlubmVyVGV4dCkpO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBsb2FkUGFnZShlLnRhcmdldC5pbm5lclRleHQpKTtcblxuICAgIC8vIGZvb3RlclxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgTWFkZSBieTxhIGhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qdXN0RXN0aWYvXCI+IG1lPC9hPmA7XG4gICAgLy8gYXBwZW5kaW5nIHRvIG5hdmJhclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgLy8gYXBwZW5kaW5nIHRvIHNlY3Rpb24xXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gYXBwZW5kaW5nIHRvIHNlY3Rpb24yXG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoc3VidGl0bGUxKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChzdWJ0aXRsZTFDb250ZW50KTtcblxuICAgIC8vIGFwcGVuZGluZyB0byBzZWN0aW9uM1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKHN1YnRpdGxlMik7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoc3VidGl0bGUyQ29udGVudCk7XG5cbiAgICAvLyBhcHBlbmRpbmcgdG8gY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24zKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgLy8gcmV0dXJuIGV2ZXJ5dGhpbmdcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudCxcbiAgICAgIG5hdmJhcixcbiAgICAgIHNlY3Rpb24xLFxuICAgICAgc2VjdGlvbjIsXG4gICAgICBzZWN0aW9uMyxcbiAgICAgIGZvb3RlcixcbiAgICAgIGhvbWVCdG4sXG4gICAgICBtZW51QnRuLFxuICAgICAgY29udGFjdEJ0bixcbiAgICAgIHRpdGxlLFxuICAgICAgc3VidGl0bGUxLFxuICAgICAgc3VidGl0bGUyLFxuICAgICAgc3VidGl0bGUxQ29udGVudCxcbiAgICAgIHN1YnRpdGxlMkNvbnRlbnQsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBhcHBlbmRUb1BhZ2UoYWRkQ2xhc3NJRChjcmVhdGVFbGVtZW50cygpKSk7XG59O1xuXG4vLyBmdW5jdGlvbiB0byBhZGQgdGV4dCB0byBlbGVtZW50c1xuZnVuY3Rpb24gYWRkSG9tZVRleHQoZWxlbWVudHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgc3VidGl0bGUxLCBzdWJ0aXRsZTIsIHN1YnRpdGxlMUNvbnRlbnQsIHN1YnRpdGxlMkNvbnRlbnQgfSA9XG4gICAgZWxlbWVudHM7XG5cbiAgLy8gY29udGFjdEJ0bi5vbkNsaWNrID0gYWRkQ29udGFjdFRleHQoKTtcbiAgLy8gYWRkaW5nIHRleHQgdG8gdGl0bGUgYW5kIHN1YnRpdGxlXG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiSGltYWxheWFuIFdpbGQgWWFrXCI7XG4gIHN1YnRpdGxlMS5pbm5lclRleHQgPSBcIldoYXQgaXMgWWFrP1wiO1xuICBzdWJ0aXRsZTIuaW5uZXJUZXh0ID0gXCJXaHkgWWFrP1wiO1xuXG4gIC8vIGFkZGluZyB0ZXh0IHRvIGNvbnRlbnRcbiAgc3VidGl0bGUxQ29udGVudC5pbm5lclRleHQgPSBgWWFrIGlzIGEgdmVyeSBoYWlyeSBhbmltYWwgc2ltaWxhciB0byBiaXNvbiBvciBidWZmYWxvLCBidXQgaXQncyBrbm93biBhcyBtb3VudGFpbiBjb3cuIFlvdSBjYW4gZmluZCBZYWsgaW4gSGltYWxheWFuIGNvdW50cmllcyBzdWNoIGFzIE5lcGFsLCBUaWJldCBhbmQgTW9uZ29saWEuIFlhayBpcyB0aGUgaGVhbHRoaWVzdCBtZWF0IG9uIHRoZSBwbGFuZXQgd2hpY2ggaGFzIG1vcmUgT21lZ2EtMyB0aGFuIFNhbG1vbi4gVXN1YWxseSwgWWFrIHByZWZlcnMgdGhlIGhpZ2hlciBlbGV2YXRpb24gYW5kIGNvbGRlciBjbGltYXRlLiBIb3dldmVyLCBZYWsgY2FuIGdyb3cgYW55d2hlcmUgaW4gdGhlIHdvcmxkLiBTbywgQ2FuYWRhIHN0YXJ0ZWQgYnJpbmdpbmcgWWFrIGZyb20gVGliZXQgYW5kIE5lcGFsIGFuZCB0aGVuIG1vdmVkIHRvIE5vcnRoIEFtZXJpY2EsIGVzcGVjaWFsbHkgQ29sb3JhZG8sIFV0YWgsIEFsYXNrYS4gTm93LCB0aGV5IGhhdmUgaW4gUGVubnN5bHZhbmlhIGFuZCBWaXJnaW5pYSBhcyB3ZWxsLiBZYWsgaXMgbm90IGdhbXkgbWVhdCBidXQgbGVhdmVzIGEgc3dlZXRlciB0ZXN0IGluIHBhbGxldC5gO1xuXG4gIHN1YnRpdGxlMkNvbnRlbnQuaW5uZXJUZXh0ID0gYFlhayBpcyBhIGh1bmRyZWQgcGVyY2VudCBHcmFzcy1GZWQgYW5pbWFsLiBZYWsgaGFzIHRocmVlIHRpbWVzIGEgbG93ZXIgZGlldCB0aGFuIHRoZSBDT1cuIEl0IHRha2VzIGF0IGxlYXN0IHRocmVlIHllYXJzIHRvIGdyb3cuIFlhayBoYXMgdGhlIGxvd2VzdCBjaG9sZXN0ZXJvbCB0aGFuIGFueSBvdGhlciBhbmltYWwuIFdlIGFyZSBvbmx5IG9uZSB3aG8gd2lsbCBiZSBzZXJ2aW5nIFlhayBtZWF0IGRpc2hlcy5gO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZShidXR0b24pIHtcbiAgc3dpdGNoIChidXR0b24pIHtcbiAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBhZGRIb21lVGV4dChwcmVwYXJlUGFnZSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFkZE1lbnVUZXh0KHByZXBhcmVQYWdlKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgYWRkQ29udGFjdFRleHQocHJlcGFyZVBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBhZGRIb21lVGV4dChwcmVwYXJlUGFnZSgpKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmFkZEhvbWVUZXh0KHByZXBhcmVQYWdlKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9