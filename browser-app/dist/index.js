/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/EventListener.ts":
/*!*****************************!*\
  !*** ./ts/EventListener.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListener: () => (/* binding */ EventListener)
/* harmony export */ });
//ハンドラ 特定の処理が行われたときに受動的に起動するプログラム 
//API addEventListener,removeEventListener
//イベントに登録したハンドラを削除するためにはaddEventListenerで登録した "イベント名","要素","ハンドラ"をコード内で保持する必要がある
//コードが複雑になるのを防ぐためにEventListener.tsに処理を記述することで後々ハンドラを実装しやすいようにするのが目的
//
class EventListener {
    constructor() {
        this.listeners = {};
    }
    add(listenerId, event, element, handler) {
        this.listeners[listenerId] = {
            event,
            element,
            handler
        };
        element.addEventListener(event, handler);
    }
    remove(listenerId) {
        const listener = this.listeners[listenerId];
        if (!listener)
            return;
        listener.element.removeEventListener(listener.event, listener.handler);
        delete this.listeners[listenerId];
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListener */ "./ts/EventListener.ts");

class Application {
    start() {
        const eventlistener = new _EventListener__WEBPACK_IMPORTED_MODULE_0__.EventListener;
        const button = document.getElementById("deleteAllDoneTask");
        if (!button)
            return;
        eventlistener.add("sample", "click", button, () => alert("clicked"));
        eventlistener.remove("sample");
    }
}
window.addEventListener("load", () => {
    const app = new Application();
    app.start();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBa0M7QUFDbEMsMENBQTBDO0FBQzFDLGdGQUFnRjtBQUNoRixtRUFBbUU7QUFDbkUsRUFBRTtBQVVLLE1BQU0sYUFBYTtJQUExQjtRQUNxQixjQUFTLEdBQWEsRUFBRTtJQW1CN0MsQ0FBQztJQWpCRyxHQUFHLENBQUMsVUFBaUIsRUFBQyxLQUFZLEVBQUMsT0FBbUIsRUFBQyxPQUF1QjtRQUMxRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQ3pCLEtBQUs7WUFDTCxPQUFPO1lBQ1AsT0FBTztTQUNWO1FBQ0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFpQjtRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUMzQyxJQUFHLENBQUMsUUFBUTtZQUFDLE9BQU07UUFFbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFFckUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0NBQ0o7Ozs7Ozs7VUNsQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042QztBQUU3QyxNQUFNLFdBQVc7SUFDYixLQUFLO1FBQ0QsTUFBTSxhQUFhLEdBQUcsSUFBSSx5REFBYTtRQUN2QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBRTNELElBQUcsQ0FBQyxNQUFNO1lBQUMsT0FBTTtRQUVqQixhQUFhLENBQUMsR0FBRyxDQUNiLFFBQVEsRUFDUixPQUFPLEVBQ1AsTUFBTSxFQUNOLEdBQUUsRUFBRSxNQUFLLENBQUMsU0FBUyxDQUFDLENBQ3ZCO1FBRUQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBQyxHQUFFLEVBQUU7SUFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLEVBQUU7SUFDN0IsR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy/jg4/jg7Pjg4njg6kg54m55a6a44Gu5Yem55CG44GM6KGM44KP44KM44Gf44Go44GN44Gr5Y+X5YuV55qE44Gr6LW35YuV44GZ44KL44OX44Ot44Kw44Op44OgIFxyXG4vL0FQSSBhZGRFdmVudExpc3RlbmVyLHJlbW92ZUV2ZW50TGlzdGVuZXJcclxuLy/jgqTjg5njg7Pjg4jjgavnmbvpjLLjgZfjgZ/jg4/jg7Pjg4njg6njgpLliYrpmaTjgZnjgovjgZ/jgoHjgavjga9hZGRFdmVudExpc3RlbmVy44Gn55m76Yyy44GX44GfIFwi44Kk44OZ44Oz44OI5ZCNXCIsXCLopoHntKBcIixcIuODj+ODs+ODieODqVwi44KS44Kz44O844OJ5YaF44Gn5L+d5oyB44GZ44KL5b+F6KaB44GM44GC44KLXHJcbi8v44Kz44O844OJ44GM6KSH6ZuR44Gr44Gq44KL44Gu44KS6Ziy44GQ44Gf44KB44GrRXZlbnRMaXN0ZW5lci50c+OBq+WHpueQhuOCkuiomOi/sOOBmeOCi+OBk+OBqOOBp+W+jOOAheODj+ODs+ODieODqeOCkuWun+ijheOBl+OChOOBmeOBhOOCiOOBhuOBq+OBmeOCi+OBruOBjOebrueahFxyXG4vL1xyXG5cclxudHlwZSBMaXN0ZW5lcnMgPSB7XHJcbiAgICBbaWQ6IHN0cmluZ106e1xyXG4gICAgICAgIGV2ZW50OiBzdHJpbmdcclxuICAgICAgICBlbGVtZW50OkhUTUxFbGVtZW50XHJcbiAgICAgICAgaGFuZGxlcjooZTpFdmVudCk9PnZvaWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXJ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVycyA6IExpc3RlbmVycz17fVxyXG5cclxuICAgIGFkZChsaXN0ZW5lcklkOnN0cmluZyxldmVudDpzdHJpbmcsZWxlbWVudDpIVE1MRWxlbWVudCxoYW5kbGVyOihlOkV2ZW50KT0+dm9pZCl7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbbGlzdGVuZXJJZF0gPSB7XHJcbiAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICBoYW5kbGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCxoYW5kbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShsaXN0ZW5lcklkOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tsaXN0ZW5lcklkXVxyXG4gICAgICAgIGlmKCFsaXN0ZW5lcilyZXR1cm5cclxuICAgICAgICBcclxuICAgICAgICBsaXN0ZW5lci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIuZXZlbnQsbGlzdGVuZXIuaGFuZGxlcilcclxuICAgICAgICBcclxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbbGlzdGVuZXJJZF1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtFdmVudExpc3RlbmVyfSBmcm9tIFwiLi9FdmVudExpc3RlbmVyXCJcclxuXHJcbmNsYXNzIEFwcGxpY2F0aW9uIHtcclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgY29uc3QgZXZlbnRsaXN0ZW5lciA9IG5ldyBFdmVudExpc3RlbmVyXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVBbGxEb25lVGFza1wiKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFidXR0b24pcmV0dXJuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZXZlbnRsaXN0ZW5lci5hZGQoXHJcbiAgICAgICAgICAgIFwic2FtcGxlXCIsXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgICAgICAoKT0+YWxlcnQoXCJjbGlja2VkXCIpLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgZXZlbnRsaXN0ZW5lci5yZW1vdmUoXCJzYW1wbGVcIilcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbigpXHJcbiAgICBhcHAuc3RhcnQoKVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==