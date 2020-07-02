module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./chunks/" + ({"components-block-block":"components-block-block","components-footer-footer":"components-footer-footer","components-image-background-image-background":"components-image-background-image-background","components-image-image":"components-image-image","components-list-list":"components-list-list"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/server/core.server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/app/entrypoint.tsx":
/*!***************************************!*\
  !*** ./src/common/app/entrypoint.tsx ***!
  \***************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_customization_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/customization.context */ "./src/common/utils/customization.context.ts");



const List = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},

  chunkName() {
    return "components-list-list";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] === false) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | components-list-list */ "components-list-list").then(__webpack_require__.bind(null, /*! ../components/list/list */ "./src/common/components/list/list.tsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/list/list */ "./src/common/components/list/list.tsx");
    }

    return eval('require.resolve')("../components/list/list");
  }

});
const Block = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},

  chunkName() {
    return "components-block-block";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] === false) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | components-block-block */ "components-block-block").then(__webpack_require__.bind(null, /*! ../components/block/block */ "./src/common/components/block/block.tsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/block/block */ "./src/common/components/block/block.tsx");
    }

    return eval('require.resolve')("../components/block/block");
  }

});
const Footer = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},

  chunkName() {
    return "components-footer-footer";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] === false) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | components-footer-footer */ "components-footer-footer").then(__webpack_require__.bind(null, /*! ../components/footer/footer */ "./src/common/components/footer/footer.tsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/footer/footer */ "./src/common/components/footer/footer.tsx");
    }

    return eval('require.resolve')("../components/footer/footer");
  }

});
const Image = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},

  chunkName() {
    return "components-image-image";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] === false) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | components-image-image */ "components-image-image").then(__webpack_require__.bind(null, /*! ../components/image/image */ "./src/common/components/image/image.tsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/image/image */ "./src/common/components/image/image.tsx");
    }

    return eval('require.resolve')("../components/image/image");
  }

});
const ImageBackground = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},

  chunkName() {
    return "components-image-background-image-background";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] === false) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | components-image-background-image-background */ "components-image-background-image-background").then(__webpack_require__.bind(null, /*! ../components/image-background/image-background */ "./src/common/components/image-background/image-background.tsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/image-background/image-background */ "./src/common/components/image-background/image-background.tsx");
    }

    return eval('require.resolve')("../components/image-background/image-background");
  }

});
const App = () => {
  const {
    name,
    haveBlock,
    components
  } = Object(utils_customization_context__WEBPACK_IMPORTED_MODULE_2__["useCustomization"])();
  const CustomHeader = components === null || components === void 0 ? void 0 : components.header;
  const CustomFooter = components === null || components === void 0 ? void 0 : components.footer;
  const CustomImage = components === null || components === void 0 ? void 0 : components.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, CustomHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CustomHeader, null), name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](List, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...")
  }), haveBlock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Block, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Image, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...")
  }), CustomImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CustomImage, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageBackground, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...")
  }), CustomFooter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CustomFooter, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Footer, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...")
  }));
};

/***/ }),

/***/ "./src/common/utils/customization.context.ts":
/*!***************************************************!*\
  !*** ./src/common/utils/customization.context.ts ***!
  \***************************************************/
/*! exports provided: CustomizationContext, useCustomization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizationContext", function() { return CustomizationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCustomization", function() { return useCustomization; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const defaultCustomization = {
  name: "default",
  components: {},
  haveBlock: false
};
const CustomizationContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](defaultCustomization);
const useCustomization = () => react__WEBPACK_IMPORTED_MODULE_0__["useContext"](CustomizationContext);

/***/ }),

/***/ "./src/core/server/core.server.tsx":
/*!*****************************************!*\
  !*** ./src/core/server/core.server.tsx ***!
  \*****************************************/
/*! exports provided: server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_entrypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/entrypoint */ "./src/common/app/entrypoint.tsx");
/* harmony import */ var utils_customization_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/customization.context */ "./src/common/utils/customization.context.ts");



const server = customization => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](utils_customization_context__WEBPACK_IMPORTED_MODULE_2__["CustomizationContext"].Provider, {
    value: customization
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](app_entrypoint__WEBPACK_IMPORTED_MODULE_1__["App"], null));
};

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });