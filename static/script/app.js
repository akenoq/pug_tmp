/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


// mixin
let elementPresenter = {
    getElementByClass(className) {
        return document.getElementsByClassName(className.toString())[0];
    }
};

/* harmony default export */ __webpack_exports__["a"] = (elementPresenter);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class CorrectLoginPassword {

    constructor() {
        this.validData = 'abcdefghijklmnopqrstuvwxyz';
        this.validData += this.validData.toUpperCase() + '1234567890';
        // alert(this.validData);
    }

    correctLog(login) {
        if (login==="") {
            return "empty";
        }

        for (let i = 0; i < login.length; i++) {
            if (this.validData.indexOf(login[i]) === -1) {
                return "incorrect";
            }
        }

        return "ok";
    }

    correctPas(password) {
        if (password === "") {
            return "empty";
        }

        for (let i = 0; i < password.length; i++) {
            if (this.validData.indexOf(password[i]) === -1) {
                return "incorrect";
            }
        }

        return "ok";
    }

    correctEmail(email) {
        if (email === "") {
            return "empty";
        }

        if (email.indexOf("@") === -1)  {
            return "is not email";
        }

        for (let i = 0; i < email.length; i++) {
            if (((this.validData + ".").indexOf(email[i]) === -1) && (email[i] !== "@")) {
                return "incorrect";
            }
        }

        return "ok";
    }

    correctLogForm(logValue, pasValue, errorBox)
    {
        let log = this.correctLog(logValue);
        let pas = this.correctPas(pasValue);

        if (log === "empty" || pas === "empty") {
            errorBox.innerHTML = "Заполнены не все поля";
            return false;
        }

        if (log === "incorrect" || pas === "incorrect") {
            errorBox.innerHTML = "Использованы недопустимые символы";
            return false;
        }

        errorBox.innerHTML = "";
        return true;
    }

    correctRegForm(logValue, pasValue, emailValue, errorBox)
    {
        let log = this.correctLog(logValue);
        let pas = this.correctPas(pasValue);
        let email = this.correctEmail(emailValue);

        if (log === "empty" || pas === "empty") {
            errorBox.innerHTML = "Заполнены не все поля";
            return false;
        }

        if (log === "incorrect" || pas === "incorrect") {
            errorBox.innerHTML = "Использованы недопустимые символы1";
            return false;
        }

       if (email === "is not email") {
            errorBox.innerHTML = "Использованы недопустимые символы2";
            return false;
        }

        errorBox.innerHTML = "";
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CorrectLoginPassword;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elementPresenter_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PagePresenter_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CorrectLoginPassword_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_pug__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__hello_pug__);







class MainClass {
    constructor () {
        Object.assign(__WEBPACK_IMPORTED_MODULE_1__PagePresenter_js__["a" /* default */].prototype, __WEBPACK_IMPORTED_MODULE_0__elementPresenter_js__["a" /* default */]);
        let pagePresenter = new __WEBPACK_IMPORTED_MODULE_1__PagePresenter_js__["a" /* default */]();
    }
}

window.addEventListener("load", function () {
    const objMain = new MainClass();
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elementPresenter_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CorrectLoginPassword_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RequestToHost_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Debugger_js__ = __webpack_require__(5);







class PagePresenter {
    constructor() {
        this.addEventToMainPageButtons();
        this.addEventToLoginPageButtons();
        this.addEventToRegisterPageButtons();
        this.addEventToRecordsPageButtons();
        this.addEventToPlayPageButtons();
        this.addEventToInfoPageButtons();
        this.showOnlyOnePage("main-page");
        this.clearInputFields();
        this.clearBoxFields();
    }

    static hideAllPages() {
        let pages = document.getElementsByClassName("page");
        for (let i = 0; i < pages.length; i++) {
            pages[i].hidden = true;
        }
    }

    showOnlyOnePage(pageName) {
        this.constructor.hideAllPages();
        this.getElementByClass(pageName.toString()).hidden = false;
    }

    addEventToMainPageButtons() {
        const t = this;

        const objReqUser = new __WEBPACK_IMPORTED_MODULE_2__RequestToHost_js__["a" /* default */]();
        objReqUser.whoami(function (err, resp) {
            const logBox = t.getElementByClass("main-page__user");
            if (err) {
                return logBox.innerHTML = "Привет, Гость!";
            }

            logBox.innerHTML = "Привет, " + resp.login + "!";
        });

        this.getElementByClass("main-menu__button-play").addEventListener("click", function(){
            t.showOnlyOnePage("play-page");
        });

        this.getElementByClass("main-menu__button-login").addEventListener("click", function(){
            t.showOnlyOnePage("login-page");
        });

        this.getElementByClass("main-menu__button-records").addEventListener("click", function(){
            t.showOnlyOnePage("records-page");
        });

        this.getElementByClass("main-menu__button-info").addEventListener("click", function(){
            t.showOnlyOnePage("info-page");
        });
    }

    addEventToLoginPageButtons() {
        const t = this;

        this.getElementByClass("login-form__button").addEventListener("click", function(){
            const objCorrectLogPas = new __WEBPACK_IMPORTED_MODULE_1__CorrectLoginPassword_js__["a" /* default */]();
            let logValue = t.getElementByClass("login-form__input-login").value;
            let pasValue = t.getElementByClass("login-form__input-password").value;
            let errBox = t.getElementByClass("login-form__error-box");

            const valid = objCorrectLogPas.correctLogForm(logValue, pasValue, errBox);

            if (valid) {
                const objReqUser = new __WEBPACK_IMPORTED_MODULE_2__RequestToHost_js__["a" /* default */]();
                objReqUser.auth(logValue,pasValue,function (err, resp) {
                    if (err) {
                        return errBox.innerHTML = "Некорректный ввод или логин не существует";
                    }

                    alert("Вы вошли на сайт!");

                    t.clearInputFields("login-form__input-login", "login-form__input-password");
                    t.clearBoxFields("login-form__error-box");

                    window.location.reload();
                })
            }
        });

        this.getElementByClass("login-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("main-page");

            t.clearInputFields("login-form__input-login", "login-form__input-password");
            t.clearBoxFields("login-form__error-box");
        });

        this.getElementByClass("login-page__link-to-register").addEventListener("click", function () {
            t.showOnlyOnePage("register-page");

            t.clearInputFields("login-form__input-login", "login-form__input-password");
            t.clearBoxFields("login-form__error-box");
        });
    }

    addEventToRegisterPageButtons() {
        const t = this;

        this.getElementByClass("register-form__button").addEventListener("click", function(){
            const objCorrectLogPas = new __WEBPACK_IMPORTED_MODULE_1__CorrectLoginPassword_js__["a" /* default */]();
            let emailValue = t.getElementByClass("register-form__input-email").value;
            let logValue = t.getElementByClass("register-form__input-login").value;
            let pasValue = t.getElementByClass("register-form__input-password").value;
            let errBox = t.getElementByClass("register-form__error-box");

            const valid = objCorrectLogPas.correctRegForm(logValue, pasValue, emailValue, errBox);

            if (valid) {
                const objReqUser = new __WEBPACK_IMPORTED_MODULE_2__RequestToHost_js__["a" /* default */]();
                objReqUser.reg(logValue, pasValue, emailValue, function (err, resp) {
                    if (err) {
                        return errBox.innerHTML = "Некорректный ввод или логин уже существует";
                    }

                    alert("Вы успешно зарегистрировались!");

                    t.clearInputFields("register-form__input-email", "register-form__input-login", "register-form__input-password");
                    t.clearBoxFields("register-form__error-box");

                    t.getElementByClass("register-page__button-back").click();
                })
            }
        });

        this.getElementByClass("register-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("login-page");

            t.clearInputFields("register-form__input-login", "register-form__input-password");
            t.clearBoxFields("register-form__error-box");
        });

        this.getElementByClass("register-page__link-to-login").addEventListener("click", function () {
            t.showOnlyOnePage("login-page");

            t.clearInputFields("register-form__input-login", "register-form__input-password");
            t.clearBoxFields("register-form__error-box");
        });
    }

    addEventToRecordsPageButtons() {
        const t = this;

        this.getElementByClass("records-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("main-page");
        });
    }

    addEventToPlayPageButtons() {
        const t = this;

        this.getElementByClass("play-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("main-page");
        });
    }

    addEventToInfoPageButtons() {
        const t = this;

        this.getElementByClass("info-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("main-page");
        });
    }

    clearInputFields(...fields) {
        const t = this;
        for (let i = 0; i < fields.length; i++) {
            t.getElementByClass(fields[i].toString()).value = "";
        }
    }

    clearBoxFields(...fields) {
        const t = this;
        for (let i = 0; i < fields.length; i++) {
            t.getElementByClass(fields[i].toString()).innerHTML = "";
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PagePresenter;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class RequestToHost {
    auth(login, password, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://bubblerise-backend.herokuapp.com/api/users/signin', true);
        xhr.withCredentials = true; //for cookies

        const user = {login, password};
        const body = JSON.stringify(user);

        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (+xhr.status !== 200) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };

        xhr.send(body);
    }

    reg(login, password, email, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', 'https://bubblerise-backend.herokuapp.com/api/users/signup', true);
        xhr.withCredentials = true; //for cookies

        const user = {login, password, email};
        const body = JSON.stringify(user);

        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (+xhr.status !== 200) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };

        xhr.send(body);
    }

    whoami(callback) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://bubblerise-backend.herokuapp.com/api/users/me', true);
            xhr.withCredentials = true;

            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) return;
                if (+xhr.status !== 200) {
                    return callback(xhr, null);
                }

                const response = JSON.parse(xhr.responseText);
                callback(null, response);
            };

            xhr.send();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestToHost;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Debugger {
    constructor() {
        const debugMode = false;
    }

    static print(logString) {
        console.log(logString);
    }
}
/* unused harmony export default */


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(7);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"profile-field\"\u003E\u003Cspan\u003EМой логин\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"profile-field\"\u003E\u003Cspan\u003EМой возраст\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"profile-field\"\u003E\u003Cspan\u003EМои очки\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(8).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);