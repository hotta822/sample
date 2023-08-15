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


/***/ }),

/***/ "./ts/Task.ts":
/*!********************!*\
  !*** ./ts/Task.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   statusMap: () => (/* binding */ statusMap)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

const statusMap = {
    todo: "TODO",
    doing: "DOING",
    done: "DONE",
};
class Task {
    constructor(properties) {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.title = properties.title;
        this.status = statusMap.todo;
    }
}


/***/ }),

/***/ "./ts/TaskCollection.ts":
/*!******************************!*\
  !*** ./ts/TaskCollection.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskCollection: () => (/* binding */ TaskCollection)
/* harmony export */ });
class TaskCollection {
    constructor() {
        this.tasks = [];
    }
    add(task) {
        this.tasks.push(task); //importしてきたTaskで作成したtaskをtasksの配列に入れる
    }
    delete(task) {
        this.tasks = this.tasks.filter(({ id }) => id !== task.id); //filter(){}条件に当てはまる要素だけで配列を作る
    }
}


/***/ }),

/***/ "./ts/TaskRenderer.ts":
/*!****************************!*\
  !*** ./ts/TaskRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskRenderer: () => (/* binding */ TaskRenderer)
/* harmony export */ });
class TaskRenderer {
    constructor(todoList, doingList, doneList) {
        this.todoList = todoList;
        this.doingList = doingList;
        this.doneList = doneList;
    }
    append(task) {
        const { taskEl, deleteButtonEl } = this.render(task);
        this.todoList.append(taskEl);
        return { deleteButtonEl };
    }
    render(task) {
        //<div class = "taskItem">
        //  <span>タイトル</タイトル>
        //  <button>削除</button>
        //</div>
        const taskEl = document.createElement("div");
        const spanEl = document.createElement("span");
        const deleteButtonEl = document.createElement("button");
        taskEl.id = task.id;
        taskEl.classList.add("task-item");
        deleteButtonEl.textContent = "削除";
        taskEl.append(spanEl, deleteButtonEl);
        return { taskEl, deleteButtonEl };
    }
    remove(task) {
        const taskEl = document.getElementById(task.id);
        if (!taskEl)
            return;
        this.todoList.removeChild(taskEl);
    }
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./ts/Task.ts");
/* harmony import */ var _TaskCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskCollection */ "./ts/TaskCollection.ts");
/* harmony import */ var _TaskRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskRenderer */ "./ts/TaskRenderer.ts");




class Application {
    constructor() {
        this.eventListener = new _EventListener__WEBPACK_IMPORTED_MODULE_0__.EventListener();
        this.taskCollection = new _TaskCollection__WEBPACK_IMPORTED_MODULE_2__.TaskCollection();
        this.taskRenderer = new _TaskRenderer__WEBPACK_IMPORTED_MODULE_3__.TaskRenderer(document.getElementById("todoList"), document.getElementById("doingList"), document.getElementById("doneList"));
        this.handleSubmit = (e) => {
            e.preventDefault(); //submitのデフォルトに設定されているform送信先が指定されていない場合、現在のURLに対してフォームの送信を行う処理を防ぐ(prevent)ようにする
            const titleInput = document.getElementById("title");
            if (!titleInput.value)
                return;
            const task = new _Task__WEBPACK_IMPORTED_MODULE_1__.Task({ title: titleInput.value });
            this.taskCollection.add(task);
            const { deleteButtonEl } = this.taskRenderer.append(task);
            this.eventListener.add(task.id, "click", deleteButtonEl, () => this.handleClickDeleteTask(task));
            titleInput.value = "";
        };
        this.handleClickDeleteTask = (task) => {
            if (!window.confirm(`「${task.title}」を削除してよろしいですか？`))
                return;
            this.eventListener.remove(task.id);
            this.taskCollection.delete(task);
            this.taskRenderer.remove(task);
        };
    }
    start() {
        const createForm = document.getElementById("createForm"); //タスクを作成するためにHTMLのidがcreateFormの要素を取得する
        this.eventListener.add("submit-handler", "submit", createForm, this.handleSubmit); //id名,フォームを送信するイベント,要素の指定,行う処理
    }
}
window.addEventListener("load", () => {
    const app = new Application();
    app.start();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi90cy9FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvVGFzay50cyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC8uL3RzL1Rhc2tDb2xsZWN0aW9uLnRzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvVGFza1JlbmRlcmVyLnRzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Jyb3dzZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jyb3dzZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jyb3dzZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+ODj+ODs+ODieODqSDnibnlrprjga7lh6bnkIbjgYzooYzjgo/jgozjgZ/jgajjgY3jgavlj5fli5XnmoTjgavotbfli5XjgZnjgovjg5fjg63jgrDjg6njg6AgXHJcbi8vQVBJIGFkZEV2ZW50TGlzdGVuZXIscmVtb3ZlRXZlbnRMaXN0ZW5lclxyXG4vL+OCpOODmeODs+ODiOOBq+eZu+mMsuOBl+OBn+ODj+ODs+ODieODqeOCkuWJiumZpOOBmeOCi+OBn+OCgeOBq+OBr2FkZEV2ZW50TGlzdGVuZXLjgafnmbvpjLLjgZfjgZ8gXCLjgqTjg5njg7Pjg4jlkI1cIixcIuimgee0oFwiLFwi44OP44Oz44OJ44OpXCLjgpLjgrPjg7zjg4nlhoXjgafkv53mjIHjgZnjgovlv4XopoHjgYzjgYLjgotcclxuLy/jgrPjg7zjg4njgYzopIfpm5Hjgavjgarjgovjga7jgpLpmLLjgZDjgZ/jgoHjgatFdmVudExpc3RlbmVyLnRz44Gr5Yem55CG44KS6KiY6L+w44GZ44KL44GT44Go44Gn5b6M44CF44OP44Oz44OJ44Op44KS5a6f6KOF44GX44KE44GZ44GE44KI44GG44Gr44GZ44KL44Gu44GM55uu55qEXHJcbi8vXHJcblxyXG50eXBlIExpc3RlbmVycyA9IHtcclxuICAgIFtpZDogc3RyaW5nXTp7XHJcbiAgICAgICAgZXZlbnQ6IHN0cmluZ1xyXG4gICAgICAgIGVsZW1lbnQ6SFRNTEVsZW1lbnRcclxuICAgICAgICBoYW5kbGVyOihlOkV2ZW50KT0+dm9pZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lcntcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzIDogTGlzdGVuZXJzPXt9XHJcblxyXG4gICAgYWRkKGxpc3RlbmVySWQ6c3RyaW5nLGV2ZW50OnN0cmluZyxlbGVtZW50OkhUTUxFbGVtZW50LGhhbmRsZXI6KGU6RXZlbnQpPT52b2lkKXtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tsaXN0ZW5lcklkXSA9IHtcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgIGhhbmRsZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LGhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGxpc3RlbmVySWQ6c3RyaW5nKXtcclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2xpc3RlbmVySWRdXHJcbiAgICAgICAgaWYoIWxpc3RlbmVyKXJldHVyblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpc3RlbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lci5ldmVudCxsaXN0ZW5lci5oYW5kbGVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tsaXN0ZW5lcklkXVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhdHVzTWFwID0geyBcclxuICAgIHRvZG8gOiBcIlRPRE9cIixcclxuICAgIGRvaW5nIDogXCJET0lOR1wiLFxyXG4gICAgZG9uZSA6IFwiRE9ORVwiLFxyXG59IGFzIGNvbnN0XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0dXMgPSB0eXBlb2Ygc3RhdHVzTWFwW2tleW9mIHR5cGVvZiBzdGF0dXNNYXBdIFxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2t7XHJcbiAgICByZWFkb25seSBpZFxyXG4gICAgdGl0bGVcclxuICAgIHN0YXR1c1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6eyB0aXRsZTpzdHJpbmd9KXtcclxuICAgICAgICB0aGlzLmlkID0gdXVpZCgpXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHByb3BlcnRpZXMudGl0bGVcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c01hcC50b2RvXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1Rhc2t9IGZyb20gXCIuL1Rhc2tcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2tDb2xsZWN0aW9ue1xyXG4gICAgcHJpdmF0ZSB0YXNrcyA6IFRhc2tbXSA9IFtdXHJcblxyXG4gICAgYWRkKHRhc2s6VGFzayl7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spIC8vaW1wb3J044GX44Gm44GN44GfVGFza+OBp+S9nOaIkOOBl+OBn3Rhc2vjgpJ0YXNrc+OBrumFjeWIl+OBq+WFpeOCjOOCi1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlKHRhc2s6VGFzayl7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh7aWR9KSA9PiBpZCAhPT0gdGFzay5pZCkgLy9maWx0ZXIoKXt95p2h5Lu244Gr5b2T44Gm44Gv44G+44KL6KaB57Sg44Gg44GR44Gn6YWN5YiX44KS5L2c44KLXHJcbiAgICB9XHJcbn0iLCJpbXBvcnR7VGFza30gZnJvbSBcIi4vVGFza1wiXHJcblxyXG5leHBvcnQgY2xhc3MgVGFza1JlbmRlcmVye1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0b2RvTGlzdDpIVE1MRWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGRvaW5nTGlzdDpIVE1MRWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGRvbmVMaXN0OkhUTUxFbGVtZW50XHJcbiAgICAgICAgXHJcbiAgICAgICAgKXt9XHJcblxyXG4gICAgYXBwZW5kKHRhc2s6VGFzayl7XHJcbiAgICAgICAgY29uc3Qge3Rhc2tFbCxkZWxldGVCdXR0b25FbH0gPSB0aGlzLnJlbmRlcih0YXNrKVxyXG5cclxuICAgICAgICB0aGlzLnRvZG9MaXN0LmFwcGVuZCh0YXNrRWwpXHJcblxyXG4gICAgICAgIHJldHVybntkZWxldGVCdXR0b25FbH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSAgcmVuZGVyKHRhc2s6IFRhc2spIHtcclxuICAgICAgICAvLzxkaXYgY2xhc3MgPSBcInRhc2tJdGVtXCI+XHJcbiAgICAgICAgLy8gIDxzcGFuPuOCv+OCpOODiOODqzwv44K/44Kk44OI44OrPlxyXG4gICAgICAgIC8vICA8YnV0dG9uPuWJiumZpDwvYnV0dG9uPlxyXG4gICAgICAgIC8vPC9kaXY+XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb25zdCBzcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkVsID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcblxyXG4gICAgICAgIHRhc2tFbC5pZCA9IHRhc2suaWRcclxuICAgICAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbkVsLnRleHRDb250ZW50ID0gXCLliYrpmaRcIlxyXG5cclxuICAgICAgICB0YXNrRWwuYXBwZW5kKHNwYW5FbCxkZWxldGVCdXR0b25FbClcclxuXHJcbiAgICAgICAgcmV0dXJuIHt0YXNrRWwsZGVsZXRlQnV0dG9uRWx9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKHRhc2s6VGFzayl7XHJcbiAgICAgICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5pZClcclxuXHJcbiAgICAgICAgaWYoIXRhc2tFbCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy50b2RvTGlzdC5yZW1vdmVDaGlsZCh0YXNrRWwpXHJcbiAgICB9XHJcbn0iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7RXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4vRXZlbnRMaXN0ZW5lclwiXHJcbmltcG9ydCB7VGFza30gZnJvbSBcIi4vVGFza1wiXHJcbmltcG9ydCB7VGFza0NvbGxlY3Rpb259IGZyb20gXCIuL1Rhc2tDb2xsZWN0aW9uXCJcclxuaW1wb3J0IHtUYXNrUmVuZGVyZXJ9IGZyb20gXCIuL1Rhc2tSZW5kZXJlclwiXHJcblxyXG5jbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50TGlzdGVuZXIgPSBuZXcgRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhc2tDb2xsZWN0aW9uID0gbmV3IFRhc2tDb2xsZWN0aW9uKClcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFza1JlbmRlcmVyID0gbmV3IFRhc2tSZW5kZXJlcihcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9MaXN0XCIpIGFzIEhUTUxFbGVtZW50LCBcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvaW5nTGlzdFwiKSBhcyBIVE1MRWxlbWVudCxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbmVMaXN0XCIpIGFzIEhUTUxFbGVtZW50ICBcclxuICAgIClcclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUZvcm1cIikgYXMgSFRNTEVsZW1lbnQgLy/jgr/jgrnjgq/jgpLkvZzmiJDjgZnjgovjgZ/jgoHjgatIVE1M44GuaWTjgYxjcmVhdGVGb3Jt44Gu6KaB57Sg44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyLmFkZChcInN1Ym1pdC1oYW5kbGVyXCIsXCJzdWJtaXRcIixjcmVhdGVGb3JtLHRoaXMuaGFuZGxlU3VibWl0KSAvL2lk5ZCNLOODleOCqeODvOODoOOCkumAgeS/oeOBmeOCi+OCpOODmeODs+ODiCzopoHntKDjga7mjIflrpos6KGM44GG5Yem55CGXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlU3VibWl0ID0gKGU6RXZlbnQpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKSAvL3N1Ym1pdOOBruODh+ODleOCqeODq+ODiOOBq+ioreWumuOBleOCjOOBpuOBhOOCi2Zvcm3pgIHkv6HlhYjjgYzmjIflrprjgZXjgozjgabjgYTjgarjgYTloLTlkIjjgIHnj77lnKjjga5VUkzjgavlr77jgZfjgabjg5Xjgqnjg7zjg6Djga7pgIHkv6HjgpLooYzjgYblh6bnkIbjgpLpmLLjgZAocHJldmVudCnjgojjgYbjgavjgZnjgotcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcblxyXG4gICAgICAgIGlmKCF0aXRsZUlucHV0LnZhbHVlKSByZXR1cm5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soe3RpdGxlOnRpdGxlSW5wdXQudmFsdWV9KVxyXG4gICAgICAgIHRoaXMudGFza0NvbGxlY3Rpb24uYWRkKHRhc2spXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge2RlbGV0ZUJ1dHRvbkVsfSA9IHRoaXMudGFza1JlbmRlcmVyLmFwcGVuZCh0YXNrKVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXIuYWRkKFxyXG4gICAgICAgICAgICB0YXNrLmlkLFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbkVsLFxyXG4gICAgICAgICAgICAoKT0+IHRoaXMuaGFuZGxlQ2xpY2tEZWxldGVUYXNrKHRhc2spLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUNsaWNrRGVsZXRlVGFzayA9ICh0YXNrOlRhc2spID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKGDjgIwke3Rhc2sudGl0bGV944CN44KS5YmK6Zmk44GX44Gm44KI44KN44GX44GE44Gn44GZ44GL77yfYCkpIHJldHVyblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5yZW1vdmUodGFzay5pZClcclxuICAgICAgICB0aGlzLnRhc2tDb2xsZWN0aW9uLmRlbGV0ZSh0YXNrKVxyXG4gICAgICAgIHRoaXMudGFza1JlbmRlcmVyLnJlbW92ZSh0YXNrKVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e1xyXG4gICAgY29uc3QgYXBwID0gbmV3IEFwcGxpY2F0aW9uKClcclxuICAgIGFwcC5zdGFydCgpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9