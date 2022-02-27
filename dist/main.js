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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sliderSwiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderSwiper */ \"./modules/sliderSwiper.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cart */ \"./modules/cart.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./modules/search.js\");\n\r\n\r\n\r\n\r\n//sliderSwiper();\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_1__.cart)();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__.search)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/cart.js":
/*!*************************!*\
  !*** ./modules/cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cart\": () => (/* binding */ cart)\n/* harmony export */ });\nfunction cart () {\r\n    const cartBtn = document.querySelector('.button-cart')\r\n    const cart = document.querySelector('#modal-cart') \r\n    const closeBtn = cart.querySelector('.modal-close')\r\n    cartBtn.addEventListener('click', () => {\r\n        cart.style.display = 'flex'\r\n    })\r\n    closeBtn.addEventListener('click', () => {\r\n        cart.style.display = ''\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/cart.js?");

/***/ }),

/***/ "./modules/search.js":
/*!***************************!*\
  !*** ./modules/search.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\nfunction search () {\r\n    const input = document.querySelector('.search-block > input')\r\n    const btn = document.querySelector('.search-block > button')\r\n\r\n    btn.addEventListener('click', () => {\r\n        console.log(input.value);\r\n        input.value = ''\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/search.js?");

/***/ }),

/***/ "./modules/sliderSwiper.js":
/*!*********************************!*\
  !*** ./modules/sliderSwiper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderSwiper\": () => (/* binding */ sliderSwiper)\n/* harmony export */ });\nconst sliderSwiper = () => {\r\n    /* подключаем свайпер через CDN в конце разметки */\r\n    const swiper = new Swiper('.swiper', {\r\n        direction: 'horizontal',\r\n        loop: true,\r\n        autoplay: {\r\n        delay: 7500,\r\n        disableOnInteraction: false,\r\n        },\r\n        navigation: {\r\n          nextEl: '.slider-button-next',\r\n          prevEl: '.slider-button-prev',\r\n        },\r\n      });\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/sliderSwiper.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;