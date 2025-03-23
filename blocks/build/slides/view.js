import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/slides/view.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const {
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('sim', {
  actions: {
    next: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.index = context.index < context.slidesLength - 1 ? context.index + 1 : 0;
      actions.transition();
    },
    prev: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.index = context.index > 0 ? context.index - 1 : context.slidesLength - 1;
      actions.transition();
    },
    transition: () => {
      const {
        index
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const element = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)().ref;
      const parent = element.closest('.wp-block-sim-slides');
      const slides = parent.querySelectorAll('.sim-slides__content > .sim-slide');
      const rido = parent.querySelector('.sim-slides__rido');
      rido.classList.add('sim-slides__rido--fadein');
      setTimeout(() => {
        slides.forEach(slide => {
          slide.classList.remove('sim-slide--active');
          slide.classList.add('sim-slide--inactive');
        });
        slides[index].classList.add('sim-slide--active');
        slides[index].classList.remove('sim-slide--inactive');
        rido.classList.add('sim-slides__rido--fadeout');
        rido.classList.remove('sim-slides__rido--fadein');
        setTimeout(() => {
          rido.classList.remove('sim-slides__rido--fadeout');
        }, 1250);
      }, 1750);
    }
  },
  callbacks: {
    init: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const element = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      context.slidesLength = element.ref.querySelectorAll(':scope > .sim-slides__content > .sim-slide').length;
      const firstSlide = element.ref.querySelector(':scope > .sim-slides__content > .sim-slide');
      firstSlide.classList.add('sim-slide--active');
      firstSlide.classList.remove('sim-slide--inactive');
    }
  }
});
})();


//# sourceMappingURL=view.js.map