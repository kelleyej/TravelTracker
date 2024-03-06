/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_balloon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_balloon_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-family: \"Nunito\", sans-serif;\n  background-size: cover;\n  height: 100vh;\n  margin: 0;\n}\n\n.login-page {\n  display: flex;\n  justify-content: column;\n}\n\nh3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: center;\n  width: 15%;\n  margin-left: 3%;\n  font-size: 1.6em;\n}\n\n.today-date {\n  position: absolute;\n  background-color: rgba(135, 169, 108, 0.8);\n  border: solid darkolivegreen 2px;\n  margin-left: 2%;\n  border-radius: 30px;\n  width: 12%;\n  height: 3%;\n  padding-top: 0.3%;\n}\n\n.login-button {\n  margin-top: 6%;\n  width: 90%;\n  height: 14%;\n  border-radius: 30px;\n  text-align: center;\n  background-color: #87A96B;\n  border: solid darkolivegreen 3px;\n  opacity: 0.8;\n}\n\n.login-header {\n  color: #452c63;\n  margin-top: 0;\n}\n\n.all-buttons {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  margin-right: 3%;\n  width: 18%;\n  margin-top: 3%;\n}\n\n.home-header {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  width: 100%;\n}\n\n.login-container {\n  background-color: rgba(216, 191, 216, 0.7);\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 30px;\n  flex-direction: column;\n  margin-top: 5%;\n}\n\n.timer {\n  display: flex;\n  flex-direction: row;\n  width: 58%;\n  justify-content: space-around;\n}\n\n#hours,\n#minutes,\n#seconds {\n  color: darkolivegreen;\n  font-weight: bold;\n  font-size: 1em;\n}\n\n.quote-header {\n  display: flex;\n  flex-direction: column;\n  font-size: 85%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.welcome-name {\n  font-style: italic;\n  margin-bottom: 0;\n  margin-top: 1%;\n}\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  height: 10vh;\n  margin-bottom: 0;\n}\n\nh1 {\n  text-align: center;\n}\n\n.book {\n  width: 100%;\n}\n\np {\n  text-align: center;\n  color: black;\n  margin-top: 1%;\n}\n\n.quote {\n  text-align: center;\n  font-style: italic;\n  color: #452c63;\n  margin-top: 1%;\n}\n\n.submit-button,\n.show-estimate {\n  background-color: antiquewhite;\n  border: none;\n  border-radius: 20px;\n}\n\n.show-cost {\n  font-weight: bold;\n  color: black;\n}\n\n.show-estimate {\n  margin-top: 3%;\n  margin-bottom: 1%;\n  height: 6%;\n  width: 60%;\n}\n\n.submit-button {\n  height: 15%;\n  margin-top: 6%;\n}\n\n.home-icon,\n.main-icon {\n  width: 45%;\n  height: 45%;\n}\n\nbutton {\n  cursor: pointer;\n}\nbutton:hover {\n  transform: scale(1.2);\n}\n\nh2 {\n  color: #452c63;\n  margin-bottom: 0;\n  margin-top: 1.6%;\n}\n\n.star,\n.fav-star {\n  width: 5%;\n  margin-right: 2%;\n  cursor: pointer;\n}\n\nlabel {\n  margin-right: 70%;\n  margin-top: 0;\n}\n\n.date {\n  height: 80px;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.date-label,\n.travelers-label,\n.destination-label,\n.duration-label {\n  text-align: left;\n  width: 100%;\n  font-weight: bold;\n  margin-top: 2%;\n}\n\n.date,\n.duration,\n.travelers,\nselect {\n  background-color: rgba(135, 169, 108, 0.8);\n  border: none;\n  height: 18%;\n}\n\n.book-trip-form {\n  margin-top: 1%;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  height: 68%;\n}\n\n.login-form {\n  margin-top: 2%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 60%;\n  height: 60%;\n}\n\n#username,\n#password,\n.clear-form {\n  width: 90%;\n  height: 12%;\n  border-radius: 30px;\n  border: none;\n  text-align: center;\n  background-color: rgba(135, 169, 107, 0.6);\n  margin-top: 0.5%;\n}\n\n::placeholder {\n  color: black;\n}\n\n.clear-booking-form {\n  border-radius: 30px;\n  border: none;\n  text-align: center;\n  background-color: rgba(135, 169, 107, 0.6);\n  width: 16%;\n  height: 5%;\n  margin-top: 36%;\n  border: solid darkolivegreen 2px;\n  position: fixed;\n}\n\n.clear-form {\n  margin-top: 5%;\n  width: 40%;\n  border: solid darkolivegreen 2px;\n}\n\n.airplane {\n  height: 12vh;\n  margin-bottom: 1%;\n  margin-left: 10%;\n}\n\n.upcoming-trip {\n  font-style: normal;\n  font-size: 1em;\n  width: 85%;\n  color: black;\n}\n\n.past-trip,\n.post-trips {\n  width: 90%;\n  background-color: antiquewhite;\n  height: 90%;\n  overflow-y: auto;\n}\n\n.current-weather {\n  width: 90%;\n}\n\n.display-image {\n  width: 85%;\n  border-radius: 50%;\n  margin-top: 3%;\n}\n\n.weath-descrip {\n  margin-bottom: 5%;\n  font-size: 0.9em;\n}\n\n.image-container,\n.money-spent {\n  position: fixed;\n  height: 15vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 2%;\n}\n\n.money-spent {\n  width: 8%;\n}\n\n.header-text-container,\n.error-display {\n  width: 100%;\n}\n\nmain {\n  display: flex;\n  height: 70vh;\n  justify-content: space-around;\n}\n\nsection {\n  width: 30%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 5px;\n  background-color: antiquewhite;\n}\n\n.login-feedback {\n  margin-top: 3%;\n  font-weight: bold;\n}\n\n.book-button,\n.logout {\n  background-color: #72A0C1;\n  border: none;\n  border-radius: 30px;\n  width: 78%;\n  height: 8%;\n}\n\n.back-to-main,\n.back-to-login {\n  background-color: #72A0C1;\n  border: none;\n  margin-bottom: 8%;\n  border-radius: 30px;\n  height: 30px;\n}\n\n.logout {\n  width: 10%;\n  position: absolute;\n  margin-top: 1%;\n  margin-right: 2%;\n  height: 4%;\n}\n\n.home-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.book-trip {\n  background-color: rgba(216, 191, 216, 0.7);\n  border-radius: 12px;\n  height: 100%;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 0;\n}\n\n.book-display {\n  display: flex;\n  height: 90vh;\n  flex-direction: column;\n  align-items: center;\n}\n\n.agent-message {\n  width: 78%;\n  font-weight: bold;\n  font-size: 90%;\n  margin-bottom: 5%;\n  margin-top: 2%;\n}\n\n.money-dashboard {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 48%;\n  height: 80%;\n  font-weight: bold;\n  margin-right: 10%;\n}\n\n.plane,\n.money,\n.home {\n  width: 20%;\n  height: 22%;\n  margin-bottom: 5%;\n}\n\n.money {\n  height: 21%;\n}\n\n.icon-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #bb8fa9;\n  border-radius: 50%;\n  width: 17%;\n}\n\np {\n  margin-bottom: 0;\n  font-size: 85%;\n}\n\nfooter {\n  background-color: rgba(216, 191, 216, 0.8);\n  height: 18%;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.rating {\n  display: flex;\n  width: 25%;\n  justify-content: space-between;\n}\n\n.star {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.active {\n  color: rgb(69, 44, 99);\n}\n\n.past-trip-img,\n.pend-trip-img {\n  height: 130px;\n  width: 215px;\n  margin-top: 2%;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-image: url('/src/images/balloon.jpg');\n  font-family: \"Nunito\", sans-serif;\n  background-size: cover; \n  height: 100vh; \n  margin: 0; \n}\n\n.login-page {\n  display: flex; \n  justify-content: column;\n}\n\nh3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: center;\n  width: 15%;\n  margin-left: 3%;\n  font-size: 1.6em; \n}\n\n.today-date {\n  position: absolute; \n  background-color: rgb(135, 169, 108, .8);\n  border: solid darkolivegreen 2px; \n  margin-left: 2%; \n  border-radius: 30px;\n  width: 12%; \n  height: 3%;\n  padding-top: .3%; \n}\n\n.login-button {\n  margin-top: 6%; \n  width: 90%;\n  height: 14%; \n  border-radius: 30px;\n  text-align: center; \n  background-color: #87A96B;\n  border: solid darkolivegreen 3px; \n  opacity: .8; \n}\n\n.login-header {\n  color: #452c63;\n  margin-top: 0; \n}\n\n.all-buttons {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  margin-right: 3%;\n  width: 18%;\n  margin-top: 3%;\n}\n\n.home-header {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  width: 100%;\n}\n\n.login-container {\n  background-color: rgb(216, 191, 216, .7);\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 30px;\n  flex-direction: column; \n  margin-top: 5%;\n}\n\n.timer {\n  display: flex; \n  flex-direction: row;\n  width: 58%; \n  justify-content: space-around; \n}\n\n#hours, \n#minutes, \n#seconds {\n  color: darkolivegreen;\n  font-weight: bold;\n  font-size: 1em; \n}\n\n.quote-header {\n  display: flex; \n  flex-direction: column;\n  font-size: 85%;  \n  padding-left: 5%; \n  padding-right: 5%;\n}\n\n.welcome-name {\n  font-style: italic;\n  margin-bottom: 0; \n  margin-top: 1%;\n}\n\n.main-header {\n  display: flex; \n  justify-content: space-between;\n  flex-direction: row-reverse;\n  height: 10vh; \n  margin-bottom: 0; \n}\n\nh1 {\n  text-align: center;\n}\n\n.book {\n  width: 100%;\n}\n  \np {\n  text-align: center; \n  color: black; \n  margin-top: 1%;\n}\n\n.quote {\n  text-align: center;\n  font-style: italic; \n  color: #452c63;\n  margin-top: 1%;\n}\n\n.submit-button, \n.show-estimate {\n  background-color: antiquewhite;\n  border: none; \n  border-radius: 20px; \n}\n\n.show-cost {\n  font-weight: bold; \n  color: black; \n}\n\n.show-estimate {\n  margin-top: 3%;\n  margin-bottom: 1%;\n  height: 6%;\n  width: 60%;\n}\n\n.submit-button {\n  height: 15%;\n  margin-top: 6%;\n}\n\n.home-icon,\n.main-icon {\n  width: 45%;\n  height: 45%; \n}\n\nbutton {\n  cursor: pointer;\n    &:hover {\n      transform: scale(1.2);\n    }\n}\n\nh2 {\n  color: #452c63;\n  margin-bottom: 0; \n  margin-top: 1.6%;\n}\n\n.star, \n.fav-star {\n  width: 5%; \n  margin-right: 2%;\n  cursor: pointer;\n}\n\nlabel {\n  margin-right: 70%;\n  margin-top: 0;\n}\n\n.date {\n  height: 80px; \n  font-family: \"Nunito\", sans-serif;\n}\n\n.date-label, \n.travelers-label, \n.destination-label, \n.duration-label {\n  text-align: left; \n  width: 100%;\n  font-weight: bold; \n  margin-top: 2%; \n}\n\n.date, \n.duration, \n.travelers, \nselect {\n  background-color: rgb(135, 169, 108, .8);\n  border: none; \n  height: 18%;\n}\n\n.book-trip-form {\n  margin-top: 1%;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  height: 68%;\n}\n\n.login-form {\n  margin-top: 2%;\n  display: flex;\n  align-items: center; \n  flex-direction: column;\n  width: 60%;\n  height: 60%;\n}\n\n#username, \n#password, \n.clear-form {\n  width: 90%;\n  height: 12%; \n  border-radius: 30px;\n  border: none; \n  text-align: center; \n  background-color: rgb(135, 169, 107, .6);\n  margin-top: .5%;\n}\n\n::placeholder {\n  color: black;  \n}\n\n.clear-booking-form {\n  border-radius: 30px;\n  border: none; \n  text-align: center; \n  background-color: rgb(135, 169, 107, .6);\n  width: 16%; \n  height: 5%;\n  margin-top: 36%;\n  border: solid darkolivegreen 2px; \n  position: fixed; \n}\n\n.clear-form {\n  margin-top: 5%;\n  width: 40%;\n  border: solid darkolivegreen 2px; \n}\n\n.airplane {\n  height: 12vh; \n  margin-bottom: 1%; \n  margin-left: 10%;\n}\n\n.upcoming-trip {\n  font-style: normal; \n  font-size: 1em; \n  width: 85%; \n  color: black; \n}\n\n.past-trip, \n.post-trips {\n  width: 90%;\n  background-color: antiquewhite;\n  height: 90%; \n  overflow-y: auto;\n}\n\n.current-weather {\n  width: 90%; \n}\n\n.display-image {\n  width: 85%;\n  border-radius: 50%;\n  margin-top: 3%; \n}\n\n.weath-descrip {\n  margin-bottom: 5%;\n  font-size: .9em; \n}\n\n.image-container, \n.money-spent {\n  position: fixed; \n  height: 15vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 2%;\n}\n\n.money-spent {\n  width: 8%; \n}\n\n.header-text-container, \n.error-display {\n  width: 100%;\n}\n\nmain {\n  display: flex; \n  height: 70vh; \n  justify-content: space-around; \n}\n\nsection {\n  width: 30%; \n  text-align: center;\n  display: flex; \n  flex-direction: column; \n  align-items: center;\n  border-radius: 5px; \n  background-color: antiquewhite;\n}\n\n.login-feedback {\n  margin-top: 3%;\n  font-weight: bold; \n}\n\n.book-button,\n.logout {\n  background-color: #72A0C1;\n  border: none; \n  border-radius: 30px;\n  width: 78%;\n  height: 8%;\n}\n\n.back-to-main, \n.back-to-login {\n  background-color: #72A0C1;\n  border: none; \n  margin-bottom: 8%;\n  border-radius: 30px; \n  height: 30px; \n}\n\n.logout {\n  width: 10%;\n  position: absolute; \n  margin-top: 1%;\n  margin-right: 2%;\n  height: 4%;\n}\n\n.home-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.book-trip {\n  background-color: rgb(216, 191, 216, .7);\n  border-radius: 12px;  \n  height: 100%;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 0; \n}\n\n.book-display {\n  display: flex;\n  height: 90vh;\n  flex-direction: column;\n  align-items: center\n}\n\n.agent-message {\n  width: 78%;\n  font-weight: bold; \n  font-size: 90%; \n  margin-bottom: 5%;\n  margin-top: 2%;\n}\n\n.money-dashboard {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 48%;\n  height: 80%;\n  font-weight: bold;\n  margin-right: 10%;\n}\n\n.plane, \n.money, \n.home {\n  width: 20%;\n  height: 22%;\n  margin-bottom: 5%;\n}\n\n.money {\n  height: 21%; \n}\n\n.icon-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #bb8fa9;\n  border-radius: 50%;\n  width: 17%; \n}\n\np {\n  margin-bottom: 0; \n  font-size: 85%;\n}\n\nfooter {\n  background-color: rgb(216, 191, 216, .8);\n  height: 18%;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly\n}\n\n.rating {\n  display: flex;\n  width: 25%;\n  justify-content: space-between;\n}\n\n.star {\n  color: rgb(0, 0, 0, .3) \n}\n\n.active {\n  color: rgb(69, 44, 99, 100);\n}\n\n.past-trip-img, \n.pend-trip-img {\n  height: 130px;\n  width: 215px; \n  margin-top: 2%; \n}\n\n.hidden {\n  display: none; \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/balloon.jpg");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/airplane.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/plane-icon.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/money-icon.png");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/home.png");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _past_trips_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _pending_trips_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _src_data_travel_quotes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _src_data_coordinates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _dates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _data_codes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _expenses_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26);










// Query Selectors
const upcomingTripSection = document.querySelector('.upcoming-trip');
const pastTripSection = document.querySelector('.past-trip');
const bookTrip = document.querySelector('.book-button');
const mainDisplay = document.querySelector('.main-display');
const bookDisplay = document.querySelector('.book-display');
const bookTripForm = document.querySelector('.book-trip-form');
const date = document.querySelector('.date');
const travelers = document.querySelector('.travelers');
const duration = document.querySelector('.duration');
const destinationSelection = document.querySelector('select');
const postTripSection = document.querySelector('.post-trips');
const showEstimateButton = document.querySelector('.show-estimate');
const showCost = document.querySelector('.show-cost');
const loginForm = document.querySelector('.login-form');
const username = document.querySelector('.enter-username');
const password = document.querySelector('.enter-password');
const headerTextContainer = document.querySelector('.header-text-container');
const loginPage = document.querySelector('.login-page');
const quote = document.querySelector('.quote');
const loginFeedback = document.querySelector('.login-feedback');
const agentMessage = document.querySelector('.agent-message');
const footer = document.querySelector('footer');
const displayLodgingCost = document.querySelector('.lodging-cost');
const displayTotalCost = document.querySelector('.total-cost');
const displayFlightCost = document.querySelector('.flight-cost');
const quoteHeader = document.querySelector('.quote-header');
const mainHeader = document.querySelector('.main-header');
const welcomeName = document.querySelector('.welcome-name');
const logoutButton = document.querySelector('.logout')
const backToMainButton = document.querySelector('.back-to-main');
const lastLogoutButton = document.querySelector('.back-to-login');
const weather = document.querySelector('.current-weather');
const yearExpense = document.querySelector('h3');
const errorDisplay = document.querySelector('.error-display');
const clearLoginButton = document.querySelector('.clear-form');
const clearBookingFormButton = document.querySelector('.clear-booking-form');
const minutesIndex = document.getElementById('minutes');
const hoursIndex = document.getElementById('hours');
const secondsIndex = document.getElementById('seconds');
const todayDate = document.querySelector('.today-date');


// EventListeners
window.addEventListener('load', function(){
    renderRandomQuote(_src_data_travel_quotes_js__WEBPACK_IMPORTED_MODULE_3__.quotes)
});
clearBookingFormButton.addEventListener('click', clearBookingForm)
logoutButton.addEventListener('click', logOut);
backToMainButton.addEventListener('click', backToMain);
lastLogoutButton.addEventListener('click', backToLogin);
clearLoginButton.addEventListener('click', clearLoginForm)
loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    authenticateLogin()
    displayLoginFeedback()
    changeToMainDisplay()
    findCurrentTraveler(travelerUsername)
    startCountdown();
    setInterval(startCountdown, 1000);
});
showEstimateButton.addEventListener('click', function() {
    displayPendingTripCost(destinationSelection, duration, allDestinations, travelers)
});
bookTrip.addEventListener('click', bookNextTrip)

bookTripForm.addEventListener('submit', function(event) {
    event.preventDefault()
    return (0,_apiCalls_js__WEBPACK_IMPORTED_MODULE_0__.runPost)(allTrips, traveler, destinationSelection, travelers, date, duration)
    .then(response => {
        if(!response.ok){
            let responseText = response.statusText
            let responseCode = response.status
            throw new Error(`Failed to Post ${responseCode} - ${responseText}`)
        } else {
            return response; 
        }
    })
    .then(data => {
        clearBookingForm()
        backToMain()
        renderTravelerData()
    })
    .catch(error => {
        renderErrorMessage(error)
     });
});

//Global Variables
let currentTraveler; 
let allTrips;
let allDestinations; 
let travelerUsername; 
let traveler; 
let currentDate; 
let weatherDisplay; 
let authorizePassword = false;
let authorizeUsername = false;
let countdownDate = new Date().setHours(new Date().getHours() + 24);

// Functions
function renderTravelerData(){
    (0,_apiCalls_js__WEBPACK_IMPORTED_MODULE_0__.getData)()
    .then(([travelers, trips, destinations]) => {
        traveler = travelers.travelers[currentTraveler - 1]
        allTrips = trips.trips
        allDestinations = destinations.destinations
        welcomeTraveler(traveler, allTrips, allDestinations);
        displayUpcomingTrip(traveler.id, allTrips, allDestinations);
        displayPastTrips(traveler.id, allTrips, allDestinations)
        listDestinations(allDestinations)
        displayPendingTrips(traveler.id, allTrips, allDestinations)
        displayMoneySpent(traveler.id, allTrips, allDestinations)
        date.min = (0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.setMinDate)(currentDate); 
        getCurrentWeather(_src_data_coordinates_js__WEBPACK_IMPORTED_MODULE_4__.coordinates, allDestinations)
        displayTodayDate(currentDate)
        displayStarRating()
    })
    .catch(error => {
        renderErrorMessage(error)
    });
};

function getCurrentWeather(coordinates, allDestinations){
    let location = coordinates.find(place => {
        return place.destination === weatherDisplay; 
    })
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1`)
    .then(res => {
        if(!res.ok) {
            let responseText = response.statusText
            let responseCode = response.status
            throw new Error(`${responseCode} - ${responseText}`)
        } else {
            return res.json()
        }  
    })  
    .then(data => {
        return displayTripWeather(data, allDestinations)
    })
    .catch(error => {
        renderErrorMessage(error)
    });
};

function displayTripWeather(data, allDestinations){
    let locationImage = allDestinations.find(place => {
        return place.destination === weatherDisplay; 
    })
    weather.innerHTML = '';
    weather.innerHTML += 
    `<img alt="${locationImage.alt}" class="display-image" src=${locationImage.image}>
    <h2>current weather: ${(0,_weather_js__WEBPACK_IMPORTED_MODULE_6__.findWeatherCode)(data.current.weather_code, _data_codes_js__WEBPACK_IMPORTED_MODULE_7__.weatherCodes)}</h2>
    <p class="weath-descrip">In ${weatherDisplay}, the temperature is currently ${data.current.temperature_2m}℉ with ${data.current.relative_humidity_2m}% humidity. Wind speeds are ${data.current.wind_speed_10m} mph.</p>`
};

function startCountdown(){
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();
    const difference = (countdown - now)/1000

    let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((difference % (60 * 60)) / 60);
    let seconds = Math.floor(difference % 60);

    hoursIndex.innerHTML = formatTime(hours, "hours");
    minutesIndex.innerHTML = formatTime(minutes, "minutes");
    secondsIndex.innerHTML = formatTime(seconds, "seconds");
};

function formatTime(time, interval) {
    return `${time} ${interval} `
  };

function clearBookingForm(){
    date.value = '';
    duration.value = '';
    travelers.value = '';
    showCost.innerText = '';
};

function clearLoginForm(){
    username.value = '';
    password.value = '';
    loginFeedback.innerText = '';
    authorizeUsername = false; 
    authorizePassword = false; 
    username.disabled = false; 
    password.disabled = false;
};

function renderRandomQuote(quotes){
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
   quote.innerText = `${randomQuote}`
};
  
function changeToMainDisplay(){
    if(authorizePassword === true && authorizeUsername === true){
        mainDisplay.classList.remove("hidden");
        headerTextContainer.classList.remove("hidden");
        loginPage.classList.add("hidden");
        footer.classList.remove("hidden");
        quoteHeader.classList.add("hidden");
        mainHeader.classList.remove("hidden");
        renderTravelerData();
    };
};

function displayTodayDate(currentDate){
    let newDate = (0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.findYesterday)(currentDate)
    todayDate.innerHTML = `TODAY: ${newDate}`
};

function authenticateLogin(){
   let array = [...Array(51).keys()]
   let modifiedArray = array.shift()
   let numberArray = array.map(element => {
    return Number(element)
   })
   numberArray.forEach(number => {
    if(username.value === `traveler${number}`){
        authorizeUsername = true; 
        username.disabled = true; 
    } if(password.value === "travel"){
        authorizePassword = true; 
        password.disabled = true; 
    }
    });
    travelerUsername = username.value; 
    travelerUsername = travelerUsername.split('')
};

function displayLoginFeedback(){
    if(!authorizePassword){
        loginFeedback.innerText = "Your password is incorrect."
        password.value = '';
    } if(!authorizeUsername){
        loginFeedback.innerText = "Your username is incorrect."
         username.value = '';
    } if(!authorizeUsername && !authorizePassword){
    loginFeedback.innerText = `Both your username and password are incorrect.`
    }
};

function findCurrentTraveler(travelerUsername){
    let password; 
    let newPassword;
 
    if(travelerUsername.length === 9){
      password = travelerUsername.splice(-1)
      newPassword = password.join('')
    } else if (travelerUsername.length === 10){
     password = travelerUsername.splice(-2)
     newPassword = password.join('')
    }
    currentTraveler = newPassword; 
  };

function renderErrorMessage(error) {
    mainDisplay.classList.add("hidden");
    bookDisplay.classList.add("hidden")
    mainHeader.classList.add("hidden");
    footer.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
    errorDisplay.innerHTML += error; 
};

function backToMain(){
    mainDisplay.classList.remove("hidden");
    mainHeader.classList.remove("hidden");
    bookDisplay.classList.add("hidden");
    footer.classList.remove("hidden");
};

function welcomeTraveler({name}){
    welcomeName.innerText = `Welcome back, ${name}!`
};

function backToLogin(){
    bookDisplay.classList.add("hidden");
    quoteHeader.classList.remove("hidden");
    loginPage.classList.remove("hidden");
    clearLoginForm();
    localStorage.clear();
};

function logOut(){
    clearLoginForm();
    localStorage.clear();
    mainDisplay.classList.add("hidden");
    headerTextContainer.classList.add("hidden");
    footer.classList.add("hidden");
    quoteHeader.classList.remove("hidden");
    mainHeader.classList.add("hidden");
    loginPage.classList.remove("hidden");
};

function displayMoneySpent(id, allTrips, allDestinations){
    let totalCost = (0,_expenses_js__WEBPACK_IMPORTED_MODULE_8__.calculateAnnualTripCost)(id, allTrips, allDestinations)
    let flightCost = (0,_expenses_js__WEBPACK_IMPORTED_MODULE_8__.calculateAnnualFlightCost)(id, allTrips, allDestinations)
    let lodgingCost = (0,_expenses_js__WEBPACK_IMPORTED_MODULE_8__.calculateAnnualLodgingCost)(id, allTrips, allDestinations)
    yearExpense.innerText = `Travel Expenses in ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.findCurrentYear)(currentDate)}`
    displayTotalCost.innerText = `$${totalCost}`
    displayFlightCost.innerText = `$${flightCost}`
    displayLodgingCost.innerText = `$${lodgingCost}`
};

function displayUpcomingTrip(id, allTrips, allDestinations){
    let upcomingTrip = (0,_past_trips_js__WEBPACK_IMPORTED_MODULE_1__.viewUpcomingTrip)(id, allTrips, allDestinations)
    upcomingTripSection.innerText = `On ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(upcomingTrip[0].date)}, you will be leaving for ${upcomingTrip[0].destination} for ${upcomingTrip[0].duration} days!`
    currentDate = upcomingTrip[0].date; 
    weatherDisplay = upcomingTrip[0].destination;
};

function displayPastTrips(id, allTrips, allDestinations){
    let trips = (0,_past_trips_js__WEBPACK_IMPORTED_MODULE_1__.viewPastTrips)(id, allTrips, allDestinations)
        if(trips.length === 0){
            pastTripSection.innerHTML = 'You have not documented any past travel.'
        } else {
            pastTripSection.innerHTML = '';
        trips.forEach(({date, destination, duration, travelers, image, alt}) => {
            if(travelers === 1){
                pastTripSection.innerHTML += `On ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(date)}, you went on a solo adventure to ${destination} for ${duration} days.<div tabindex=0 aria-label="star rating out of 4 stars" class="rating"><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p></div><img class="past-trip-img" src="${image}" alt="${alt}"><br>`
            } else if(travelers === 2) {
                pastTripSection.innerHTML += `On ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(date)}, you visited ${destination} with ${travelers - 1} other traveler for ${duration} days.<div tabindex=0 aria-label="star rating out of 4 stars" class="rating"><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p></div><img class="past-trip-img" src="${image}" alt="${alt}"><br>`
            } else {
                pastTripSection.innerHTML += `On ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(date)}, you visited ${destination} with ${travelers - 1} other travelers for ${duration} days.<div tabindex=0 aria-label="star rating out of 4 stars" class="rating"><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p><p tabindex=0 aria-label="inactive star" class="star">★<p></div><img class="past-trip-img" src="${image}" alt="${alt}"><br>`
            }    
        });
    };
};

function displayStarRating(){
    let allStars = document.querySelectorAll('.star')
    allStars.forEach((star, index) => {
        star.id = index; 
        star.addEventListener('click', function(event){
        if(star.id === event.target.id && star.classList.contains('star')){
            star.classList.toggle('active')
            localStorage.setItem(`star${star.id}`, star.classList.contains('active'));
            }
        });   
        star.addEventListener('keydown', function(event) {
        if(event.key === "Enter" || event.code === "Space") {
        if(star.id === event.target.id && star.classList.contains('star')){
            star.classList.toggle('active')
            localStorage.setItem(`star${star.id}`, star.classList.contains('active'));
            }
            if(star.classList.contains('active')){
            star.ariaLabel = "active star"
            }
        }
    });
    if(currentTraveler){
        let savedState = localStorage.getItem(`star${index}`);
            if (savedState === 'true') {
                star.classList.add('active');
            };
        }
    });
};
    
function bookNextTrip(){
    mainDisplay.classList.add("hidden");
    mainHeader.classList.add("hidden")
    bookDisplay.classList.remove("hidden")
    footer.classList.add("hidden");
};

function listDestinations(allDestinations){
    allDestinations.forEach(({id, destination}) => {
        destinationSelection.innerHTML += 
        `<option value=${id}>${destination}</option>`
    });
};

function displayPendingTrips(id, allTrips, allDestinations){
    let pendingTrips = (0,_pending_trips_js__WEBPACK_IMPORTED_MODULE_2__.findPendingTrips)(id, allTrips, allDestinations)
    if(pendingTrips.length === 0){
        postTripSection.innerHTML = 'You do not currently have any pending trips.'
    } else {
        postTripSection.innerHTML = '';
        pendingTrips.forEach(({travelers, destination, date, duration, image, alt}) => {
            if(travelers === 1){
                postTripSection.innerHTML += `Currently waiting approval for a solo trip to ${destination} on ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(date)} for ${duration} day(s).<img class="pend-trip-img" src="${image}" alt="${alt}"><br>`
            } else if(travelers === 2) {
                postTripSection.innerHTML += `Currently waiting approval for a trip to ${destination} on ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(date)} with ${travelers - 1} other traveler for ${duration} day(s).<img class="pend-trip-img" src="${image}" alt="${alt}"><br>`
            } else {
            postTripSection.innerHTML += `Currently waiting approval for a trip to ${destination} on ${(0,_dates_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(date)} with ${travelers - 1} other travelers for ${duration} day(s).<img class="pend-trip-img" src="${image}" alt="${alt}"><br>`
            }    
        });
    };
    disableBookTrip(id, allTrips, allDestinations)
};

function disableBookTrip(id, allTrips, allDestinations){
    let pendingTrips = (0,_pending_trips_js__WEBPACK_IMPORTED_MODULE_2__.findPendingTrips)(id, allTrips, allDestinations)
    if(pendingTrips.length >= 4){
        agentMessage.innerText = `You cannot book more trips at this time. The maximum allowed is four bookings. Please wait for agent approval.`
        bookTrip.disabled = true; 
    } else {
        agentMessage.innerText = '';
        bookTrip.disabled = false; 
    };
};

function displayPendingTripCost(destinationSelection, duration, allDestinations) {
    let cost = (0,_expenses_js__WEBPACK_IMPORTED_MODULE_8__.calculatePendingTripCost)(Number(destinationSelection.value), Number(duration.value), allDestinations)
    if(travelers.value !== '' && duration.value !== ''){
      showCost.innerText = `This trip is estimated to cost approximately $${cost} per person.`  
    } else {
        showCost.innerText = `Please fill out all fields to estimate total trip cost.`
    };
};



/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   runPost: () => (/* binding */ runPost)
/* harmony export */ });
/* harmony import */ var _dates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


function runGet(){
    let allData = [
        fetch('http://localhost:3001/api/v1/travelers'),
        fetch('http://localhost:3001/api/v1/trips'),
        fetch('http://localhost:3001/api/v1/destinations')
    ]
    return allData; 
}

function runPost(allTrips, traveler, destinationSelection, travelers, date, duration){
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST', 
        body: JSON.stringify({
           id: allTrips.length + 1, 
           userID: traveler.id,
           destinationID: Number(destinationSelection.value), 
           travelers: Number(travelers.value), 
           date: (0,_dates_js__WEBPACK_IMPORTED_MODULE_0__.modifyDate)(date.value), 
           duration: Number(duration.value),
           status: "pending", 
           suggestedActivities: []
           }), 
        headers: {
           'Content-type': 'application/json'
        }
    });
};  

function getData(){
    return Promise.all(runGet())
    .then(responses => {
        if(responses.every(response => response.ok)) {
            return Promise.all(responses.map(res => {
            return res.json()
        }))
        } else {
            let responseText = responses.find(response => !response.ok).statusText
            let responseCode = responses.find(response => !response.ok).status
            throw new Error(`${responseCode} - ${responseText}`)
        }
    })
    .catch(error => {
        let errorText = error.message
        throw new Error (`${errorText}`)
    });
};



/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findCurrentYear: () => (/* binding */ findCurrentYear),
/* harmony export */   findYesterday: () => (/* binding */ findYesterday),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   modifyDate: () => (/* binding */ modifyDate),
/* harmony export */   setMinDate: () => (/* binding */ setMinDate)
/* harmony export */ });
function formatDate(newDate){
    let dateModified = newDate.split('/')
    let [year, month, day] = dateModified
    let array = [month, day, year]
    let newArray = array.join('/')

    return newArray; 
};

function setMinDate(dateValue){
    let newDate = dateValue.split('/')
    let modifiedDate = newDate.join('-')

    return modifiedDate
};

function modifyDate(dateValue) {
  let newDate = dateValue.split('-')
  let modifiedDate = newDate.join('/')

  return modifiedDate;
};

function findCurrentYear(currentDate){
    let newDate = currentDate.split('/')
    let [year,,,] = newDate; 

    return year; 
};

function findYesterday(currentDate){
  let today = new Date(currentDate)
  let yesterday = new Date(today.getTime())
  yesterday.setDate(today.getDate() - 1)
  let newDate = yesterday.toDateString()
  let dateArray = newDate.split(' ') 
  dateArray.shift()
  let [month, day, year] = dateArray; 
  return `${month} ${day}, ${year}`
};



/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewPastTrips: () => (/* binding */ viewPastTrips),
/* harmony export */   viewUpcomingTrip: () => (/* binding */ viewUpcomingTrip)
/* harmony export */ });
function viewPastTrips(id, allTrips, allDestinations) {
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    allPastTrips.pop()
   
        let pastTrips = allPastTrips.map(trip => {
        return trip = {
            destination: allDestinations.find(place => place.id === trip.destinationID).destination, 
            image: allDestinations.find(place => place.id === trip.destinationID).image, 
            alt: allDestinations.find(place => place.id === trip.destinationID).alt,
            travelers: trip.travelers, 
            date: trip.date, 
            duration: trip.duration
        };
    });
    return pastTrips;
};

function viewUpcomingTrip(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    let pastTripDestination = allPastTrips.map(trip => {
        return trip = {
            destination: allDestinations.find(place => place.id === trip.destinationID).destination, 
            image: allDestinations.find(place => place.id === trip.destinationID).image, 
            alt: allDestinations.find(place => place.id === trip.destinationID).alt,
            date: trip.date, 
            duration: trip.duration
        };
    });

    return pastTripDestination.slice(-1);
};





/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findPendingTrips: () => (/* binding */ findPendingTrips)
/* harmony export */ });
function findPendingTrips(id, allTrips, allDestinations) {
    let pendingTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "pending"
    });
    let tripInfo = pendingTrips.map(info => {
        return {
            duration: info.duration, 
            travelers: info.travelers, 
            date: info.date, 
            destination: allDestinations.find(place => place.id === info.destinationID).destination,
            image: allDestinations.find(place => place.id === info.destinationID).image,
            alt: allDestinations.find(place => place.id === info.destinationID).alt, 
        }
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

   return tripInfo;
};
      



/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotes: () => (/* binding */ quotes)
/* harmony export */ });
const quotes = [
    `"Adventure is worthwhile." – Aesop`, 
    `"Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta`,
    `“We travel, some of us forever, to seek other places, other lives, other souls." – Anais Nin`,
    `“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton`,
    `“I am not the same, having seen the moon shine on the other side of the world.” – Mary Anne Radmacher`,
    `“Travel makes one modest. You see what a tiny place you occupy in the world.” – Gustave Flaubert`,
    `“The man who goes alone can start today; but he who travels with another must wait till that other is ready.” – Henry David Thoreau`,
    `“To awaken alone in a strange town is one of the pleasantest sensations in the world.” – Freya Stark`,
    `“Man cannot discover new oceans unless he has the courage to lose sight of the shore.” – Andre Gide`,
    `“The world is a book, and those who do not travel read only one page.” – Saint Augustine`,
    `“Travel and change of place impart new vigor to the mind.” – Seneca`,
    `“With age, comes wisdom. With travel, comes understanding.” – Sandra Lake`
]



/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coordinates: () => (/* binding */ coordinates)
/* harmony export */ });
let coordinates = [
    {
        destination: "Lima, Peru",
        latitude: -12.0464,
        longitude: -77.0428
    },
    {
        destination: "Stockholm, Sweden",
        latitude: 59.3293,
        longitude:18.0686
    },
    {
        destination: "Sydney, Austrailia",
        latitude: -33.8688,
        longitude: 151.2093
    },
    {
        destination: "Cartagena, Colombia",
        latitude: 10.3932,
        longitude: -75.4832
    },
    {
        destination: "Madrid, Spain",
        latitude: 40.4168,
        longitude: -3.7038
    },
    {
        destination: "Jakarta, Indonesia",
        latitude: -6.1944,
        longitude: 106.8229
    },
    {
        destination: "Paris, France",
        latitude: 48.8566,
        longitude: 2.3522
    },
    {
        destination: "Tokyo, Japan",
        latitude: 35.6764,
        longitude: 139.6500
    },
    {
        destination: "Amsterdam, Netherlands",
        latitude: 52.3676,
        longitude: 4.9041
    },
    {
        destination: "Toronto, Canada",
        latitude: 43.6532,
        longitude: -79.3832
    },
    {
        destination: "Mikonos, Greece",
        latitude: 37.4415,
        longitude: 25.3667
    },
    {
        destination: "Wellington, New Zealand",
        latitude: -41.2924,
        longitude: 174.7787
    },
    {
        destination: "St. Petersburg, Russia",
        latitude: 59.9311,
        longitude: 30.3609
    },
    {
        destination: "Marrakesh, Morocco",
        latitude: 31.6225,
        longitude: -7.9898
    },
    {
        destination: "Manila, Philippines",
        latitude: 14.5995,
        longitude: 120.9842
    },
    {
        destination: "Bangkok, Thailand",
        latitude: 13.7563,
        longitude: 100.5018
    },
    {
        destination: "Jaipur, India",
        latitude: 26.9124,
        longitude: 75.7873
    },
    {
        destination: "Cape Town, South Africa",
        latitude: -33.9249,
        longitude: 18.4241
    },
    {
        destination: "Quito, Ecuador",
        latitude: -0.1807,
        longitude: -78.4678
    },
    {
        destination: "Miami, Florida",
        latitude: 25.7617,
        longitude: -80.1918
    },
    {
        destination: "Tulum, Mexico",
        latitude: 20.2114,
        longitude: -87.4654
    },
    {
        destination: "Rome, Italy",
        latitude: 41.9028,
        longitude: 12.4964
    },
    {
        destination: "Copenhagen, Denmark",
        latitude: 55.6761,
        longitude: 12.5683
    },
    {
        destination: "Vilnius, Lithuania",
        latitude: 54.6872,
        longitude: 25.2797
    },
    {
        destination: "New York, New York",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        destination: "London, England",
        latitude: 51.5072,
        longitude: -0.1276
    },
    {
        destination: "San Francisco, California",
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        destination: "San Juan, Puerto Rico",
        latitude: 18.4671,
        longitude: -66.1185
    },
    {
        destination: "Willemstad, Curaçao",
        latitude: 12.1039,
        longitude: -68.9324
    },
    {
        destination: "Antananarivo, Madagascar",
        latitude: -18.9185,
        longitude: 47.5211
    }, 
    {
        destination: "Colombo, Sri Lanka",
        latitude: 6.9271,
        longitude: 79.8612
    },
    {
        destination: "Kathmandu, Nepal",
        latitude: 27.7172,
        longitude: 85.3240
    },
    {
        destination: "Brussels, Belgium",
        latitude: 50.8476,
        longitude: 4.3572
    },
    {
        destination: "Seoul, South Korea",
        latitude: 37.5519,
        longitude: 126.9918
    },
    {
        destination: "Anchorage, Alaska",
        latitude: 61.2176,
        longitude: -149.8997
    },
    {
        destination: "Reykjavík, Iceland",
        latitude: 64.1470,
        longitude: -21.9408
    },
    {
        destination: "Frankfurt, Germany",
        latitude: 50.1109,
        longitude: 8.6821
    },
    {
        destination: "Helsinki, Finland",
        latitude: 60.1699,
        longitude: 24.9384
    },
    {
        destination: "Porto, Portugal",
        latitude: 41.1579,
        longitude: -8.6291
    },
    {
        destination: "La Isla Tortuga, Costa Rica",
        latitude: 20.0549,
        longitude: -72.7925
    },
    {
        destination: "Montego Bay, Jamaica",
        latitude: 18.4714,
        longitude: -77.94
    },
    {
        destination: "Santo Domingo, Dominican Republic",
        latitude: 18.4626,
        longitude: -69.929611
    },
    {
        destination: "Nassau, The Bahamas",
        latitude: 25.0443,
        longitude: -77.3504
    },
    {
        destination: "Caye Caulker, Belize",
        latitude: 17.7612,
        longitude: -88.0277
    },
    {
        destination: "Calgary, Canada",
        latitude: 51.0447,
        longitude: -114.0719
    },
    {
        destination: "Victoria, Seychelles",
        latitude: -4.6211,
        longitude: 55.4522
    },
    {
        destination: "Zürich, Switzerland",
        latitude: 47.3769,
        longitude: 8.5417
    },
    {
        destination: "Dar es Salaam, Tanzania",
        latitude: -6.8165,
        longitude: 39.2894
    },
    {
        destination: "Castries, St Lucia",
        latitude: 14.0110,
        longitude: -60.9897
    },
    {
        destination: "Hobart, Tasmania",
        latitude: -42.8826,
        longitude: 147.3257
    }
]



/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findWeatherCode: () => (/* binding */ findWeatherCode)
/* harmony export */ });
function findWeatherCode(num, weatherCodes){
    let weatherDescription = weatherCodes.find(weather => {
        return weather.code === num
    });

    return weatherDescription ? weatherDescription.description : 'Error: no weather description found.'
    
};



/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherCodes: () => (/* binding */ weatherCodes)
/* harmony export */ });
const weatherCodes = [
    {
        code: 0,
        description: "clear sky"
    },
    {
        code: 1,
        description: "mainly clear"
    },
    {
        code: 2,
        description: "partly cloudy"
    },
    {
        code: 3,
        description: "overcast"
    },
    {
        code: 45,
        description: "fog"
    },
    {
        code: 48,
        description: "despoiting rime fog"
    },
    {
        code: 51,
        description: "light drizzle"
    },
    {
        code: 53,
        description: "moderate drizzle"
    },
    {
        code: 55,
        description: "dense drizzle"
    },
    {
        code: 56,
        description: "light freezing drizzle"
    },
    {
        code: 57,
        description: "dense freezing drizzle"
    },
    {
        code: 61,
        description: "slight rain"
    },
    {
        code: 63,
        description: "moderate rain"
    },
    {
        code: 65,
        description: "heavy rain"
    },
    {
        code: 66,
        description: "light freezing rain"
    },
    {
        code: 67,
        description: "heavy freezing rain"
    },
    {
        code: 71,
        description: "slight snowfall"
    },
    {
        code: 73,
        description: "moderate snowfall"
    },
    {
        code: 75,
        description: "heavy snowfall"
    },
    {
        code: 77,
        description: "snow grains"
    },
    {
        code: 80,
        description: "slight rain showers"
    },
    {
        code: 81,
        description: "moderate rain showers"
    },
    {
        code: 82,
        description: "violent rain showers"
    },
    {
        code: 85,
        description: "slight snow showers"
    },
    {
        code: 86,
        description: "heavy snow showers"
    },
    {
        code: 95,
        description: "slight thunderstorm"
    },
    {
        code: 96,
        description: "thunderstorm with slight hail"
    },
    {
        code: 99,
        description: "thunderstorm with heavy hail"
    }
]



/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateAnnualFlightCost: () => (/* binding */ calculateAnnualFlightCost),
/* harmony export */   calculateAnnualLodgingCost: () => (/* binding */ calculateAnnualLodgingCost),
/* harmony export */   calculateAnnualTripCost: () => (/* binding */ calculateAnnualTripCost),
/* harmony export */   calculatePendingTripCost: () => (/* binding */ calculatePendingTripCost)
/* harmony export */ });
function calculateAnnualTripCost(id, allTrips, allDestinations) {
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
    if(allPastTrips.length > 0){
        let year = allPastTrips[0].date.split('/')[0]
        let annualTrips = allPastTrips.filter(trip => {
        return trip.date.split('/')[0] === year; 
    });
    let totalTripCost = annualTrips.reduce((total, trip) => {
        return total += ((trip.duration * (allDestinations.find(destination => {
        return destination.id === trip.destinationID
       })).estimatedLodgingCostPerDay) + allDestinations.find(destination =>{
        return destination.id === trip.destinationID
       }).estimatedFlightCostPerPerson) 
    }, 0);

    return (totalTripCost + (totalTripCost * .10)).toFixed(2); 
    } else {
        return "0.00"
    }
};

function calculateAnnualFlightCost(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
    if (allPastTrips.length > 0) {
        let year = allPastTrips[0].date.split('/')[0]
        let annualTrips = allPastTrips.filter(trip => {
        return trip.date.split('/')[0] === year; 
    });
    let totalFlightCost = annualTrips.reduce((total, trip) => {
        return total += allDestinations.find(destination => {
        return destination.id === trip.destinationID
       }).estimatedFlightCostPerPerson
    }, 0);

    return totalFlightCost.toFixed(2) 
    } else {
        return "0.00"
    }
};

function calculateAnnualLodgingCost(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
    if(allPastTrips.length > 0){
        let year = allPastTrips[0].date.split('/')[0]
        let annualTrips = allPastTrips.filter(trip => {
        return trip.date.split('/')[0] === year; 
    });
    let totalLodgingCost = annualTrips.reduce((total, trip) => {
        return total += trip.duration * (allDestinations.find(destination => {
        return destination.id === trip.destinationID
       })).estimatedLodgingCostPerDay
    }, 0);
    
    return totalLodgingCost.toFixed(2); 
    } else {
        return "0.00"
    }
};

function calculatePendingTripCost(destination, duration, allDestinations){
    let findLocation = allDestinations.find(location => {
        return location.id === destination
    })
    let tripCost = (duration * findLocation.estimatedLodgingCostPerDay) + findLocation.estimatedFlightCostPerPerson
    let agentFee = tripCost * .10
    let totalCost = (tripCost + agentFee).toFixed(2)

    return totalCost; 
};



/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_airplane_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _images_plane_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _images_money_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _images_balloon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********













})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map