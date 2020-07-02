(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-image-image"],{

/***/ "./src/common/components/image/image.tsx":
/*!***********************************************!*\
  !*** ./src/common/components/image/image.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _red_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./red.jpg */ "./src/common/components/image/red.jpg");
/* harmony import */ var utils_customization_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/customization.context */ "./src/common/utils/customization.context.ts");




var Image = function Image() {
  var _useCustomization = Object(utils_customization_context__WEBPACK_IMPORTED_MODULE_2__["useCustomization"])(),
      imageUrl = _useCustomization.imageUrl;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, imageUrl ? "CUSTOM" : "DEFAULT", " URL IMAGE", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    style: {
      display: "block",
      width: "100px",
      height: "100px"
    },
    src: imageUrl || _red_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/common/components/image/red.jpg":
/*!*********************************************!*\
  !*** ./src/common/components/image/red.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/red.jpg");

/***/ })

}]);