(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Log.js */ "./src/Log.js");
/* harmony import */ var _src_OidcClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/OidcClient.js */ "./src/OidcClient.js");
/* harmony import */ var _src_OidcClientSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/OidcClientSettings.js */ "./src/OidcClientSettings.js");
/* harmony import */ var _src_WebStorageStateStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/WebStorageStateStore.js */ "./src/WebStorageStateStore.js");
/* harmony import */ var _src_InMemoryWebStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/InMemoryWebStorage.js */ "./src/InMemoryWebStorage.js");
/* harmony import */ var _src_UserManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/UserManager.js */ "./src/UserManager.js");
/* harmony import */ var _src_AccessTokenEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/AccessTokenEvents.js */ "./src/AccessTokenEvents.js");
/* harmony import */ var _src_MetadataService_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/MetadataService.js */ "./src/MetadataService.js");
/* harmony import */ var _src_CordovaPopupNavigator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/CordovaPopupNavigator.js */ "./src/CordovaPopupNavigator.js");
/* harmony import */ var _src_CordovaIFrameNavigator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/CordovaIFrameNavigator.js */ "./src/CordovaIFrameNavigator.js");
/* harmony import */ var _src_CheckSessionIFrame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");
/* harmony import */ var _src_TokenRevocationClient_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/TokenRevocationClient.js */ "./src/TokenRevocationClient.js");
/* harmony import */ var _src_SessionMonitor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/SessionMonitor.js */ "./src/SessionMonitor.js");
/* harmony import */ var _src_Global_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/Global.js */ "./src/Global.js");
/* harmony import */ var _src_User_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/User.js */ "./src/User.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./version.js */ "./version.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
















/* harmony default export */ __webpack_exports__["default"] = ({
  Version: _version_js__WEBPACK_IMPORTED_MODULE_15__["Version"],
  Log: _src_Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"],
  OidcClient: _src_OidcClient_js__WEBPACK_IMPORTED_MODULE_1__["OidcClient"],
  OidcClientSettings: _src_OidcClientSettings_js__WEBPACK_IMPORTED_MODULE_2__["OidcClientSettings"],
  WebStorageStateStore: _src_WebStorageStateStore_js__WEBPACK_IMPORTED_MODULE_3__["WebStorageStateStore"],
  InMemoryWebStorage: _src_InMemoryWebStorage_js__WEBPACK_IMPORTED_MODULE_4__["InMemoryWebStorage"],
  UserManager: _src_UserManager_js__WEBPACK_IMPORTED_MODULE_5__["UserManager"],
  AccessTokenEvents: _src_AccessTokenEvents_js__WEBPACK_IMPORTED_MODULE_6__["AccessTokenEvents"],
  MetadataService: _src_MetadataService_js__WEBPACK_IMPORTED_MODULE_7__["MetadataService"],
  CordovaPopupNavigator: _src_CordovaPopupNavigator_js__WEBPACK_IMPORTED_MODULE_8__["CordovaPopupNavigator"],
  CordovaIFrameNavigator: _src_CordovaIFrameNavigator_js__WEBPACK_IMPORTED_MODULE_9__["CordovaIFrameNavigator"],
  CheckSessionIFrame: _src_CheckSessionIFrame_js__WEBPACK_IMPORTED_MODULE_10__["CheckSessionIFrame"],
  TokenRevocationClient: _src_TokenRevocationClient_js__WEBPACK_IMPORTED_MODULE_11__["TokenRevocationClient"],
  SessionMonitor: _src_SessionMonitor_js__WEBPACK_IMPORTED_MODULE_12__["SessionMonitor"],
  Global: _src_Global_js__WEBPACK_IMPORTED_MODULE_13__["Global"],
  User: _src_User_js__WEBPACK_IMPORTED_MODULE_14__["User"]
});

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/jsbn/index.js":
/*!************************************!*\
  !*** ./node_modules/jsbn/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (true) {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/AccessTokenEvents.js":
/*!**********************************!*\
  !*** ./src/AccessTokenEvents.js ***!
  \**********************************/
/*! exports provided: AccessTokenEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTokenEvents", function() { return AccessTokenEvents; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _Timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var DefaultAccessTokenExpiringNotificationTime = 60; // seconds

var AccessTokenEvents = /*#__PURE__*/function () {
  function AccessTokenEvents(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
        accessTokenExpiringNotificationTime = _ref$accessTokenExpir === void 0 ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
        _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
        accessTokenExpiringTimer = _ref$accessTokenExpir2 === void 0 ? new _Timer_js__WEBPACK_IMPORTED_MODULE_1__["Timer"]("Access token expiring") : _ref$accessTokenExpir2,
        _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
        accessTokenExpiredTimer = _ref$accessTokenExpir3 === void 0 ? new _Timer_js__WEBPACK_IMPORTED_MODULE_1__["Timer"]("Access token expired") : _ref$accessTokenExpir3;

    this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;
    this._accessTokenExpiring = accessTokenExpiringTimer;
    this._accessTokenExpired = accessTokenExpiredTimer;
  }

  var _proto = AccessTokenEvents.prototype;

  _proto.load = function load(container) {
    // only register events if there's an access token and it has an expiration
    if (container.access_token && container.expires_in !== undefined) {
      var duration = container.expires_in;
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("AccessTokenEvents.load: access token present, remaining duration:", duration);

      if (duration > 0) {
        // only register expiring if we still have time
        var expiring = duration - this._accessTokenExpiringNotificationTime;

        if (expiring <= 0) {
          expiring = 1;
        }

        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("AccessTokenEvents.load: registering expiring timer in:", expiring);

        this._accessTokenExpiring.init(expiring);
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.");

        this._accessTokenExpiring.cancel();
      } // if it's negative, it will still fire


      var expired = duration + 1;
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("AccessTokenEvents.load: registering expired timer in:", expired);

      this._accessTokenExpired.init(expired);
    } else {
      this._accessTokenExpiring.cancel();

      this._accessTokenExpired.cancel();
    }
  };

  _proto.unload = function unload() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("AccessTokenEvents.unload: canceling existing access token timers");

    this._accessTokenExpiring.cancel();

    this._accessTokenExpired.cancel();
  };

  _proto.addAccessTokenExpiring = function addAccessTokenExpiring(cb) {
    this._accessTokenExpiring.addHandler(cb);
  };

  _proto.removeAccessTokenExpiring = function removeAccessTokenExpiring(cb) {
    this._accessTokenExpiring.removeHandler(cb);
  };

  _proto.addAccessTokenExpired = function addAccessTokenExpired(cb) {
    this._accessTokenExpired.addHandler(cb);
  };

  _proto.removeAccessTokenExpired = function removeAccessTokenExpired(cb) {
    this._accessTokenExpired.removeHandler(cb);
  };

  return AccessTokenEvents;
}();

/***/ }),

/***/ "./src/CheckSessionIFrame.js":
/*!***********************************!*\
  !*** ./src/CheckSessionIFrame.js ***!
  \***********************************/
/*! exports provided: CheckSessionIFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSessionIFrame", function() { return CheckSessionIFrame; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultInterval = 2000;
var CheckSessionIFrame = /*#__PURE__*/function () {
  function CheckSessionIFrame(callback, client_id, url, interval, stopOnError) {
    if (stopOnError === void 0) {
      stopOnError = true;
    }

    this._callback = callback;
    this._client_id = client_id;
    this._url = url;
    this._interval = interval || DefaultInterval;
    this._stopOnError = stopOnError;
    var idx = url.indexOf("/", url.indexOf("//") + 2);
    this._frame_origin = url.substr(0, idx);
    this._frame = window.document.createElement("iframe"); // shotgun approach

    this._frame.style.visibility = "hidden";
    this._frame.style.position = "absolute";
    this._frame.style.display = "none";
    this._frame.style.width = 0;
    this._frame.style.height = 0;
    this._frame.src = url;
  }

  var _proto = CheckSessionIFrame.prototype;

  _proto.load = function load() {
    var _this = this;

    return new Promise(function (resolve) {
      _this._frame.onload = function () {
        resolve();
      };

      window.document.body.appendChild(_this._frame);
      _this._boundMessageEvent = _this._message.bind(_this);
      window.addEventListener("message", _this._boundMessageEvent, false);
    });
  };

  _proto._message = function _message(e) {
    if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
      if (e.data === "error") {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("CheckSessionIFrame: error message from check session op iframe");

        if (this._stopOnError) {
          this.stop();
        }
      } else if (e.data === "changed") {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CheckSessionIFrame: changed message from check session op iframe");
        this.stop();

        this._callback();
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CheckSessionIFrame: " + e.data + " message from check session op iframe");
      }
    }
  };

  _proto.start = function start(session_state) {
    var _this2 = this;

    if (this._session_state !== session_state) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CheckSessionIFrame.start");
      this.stop();
      this._session_state = session_state;

      var send = function send() {
        _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
      }; // trigger now


      send(); // and setup timer

      this._timer = window.setInterval(send, this._interval);
    }
  };

  _proto.stop = function stop() {
    this._session_state = null;

    if (this._timer) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CheckSessionIFrame.stop");
      window.clearInterval(this._timer);
      this._timer = null;
    }
  };

  return CheckSessionIFrame;
}();

/***/ }),

/***/ "./src/CordovaIFrameNavigator.js":
/*!***************************************!*\
  !*** ./src/CordovaIFrameNavigator.js ***!
  \***************************************/
/*! exports provided: CordovaIFrameNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordovaIFrameNavigator", function() { return CordovaIFrameNavigator; });
/* harmony import */ var _CordovaPopupWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaIFrameNavigator = /*#__PURE__*/function () {
  function CordovaIFrameNavigator() {}

  var _proto = CordovaIFrameNavigator.prototype;

  _proto.prepare = function prepare(params) {
    params.popupWindowFeatures = 'hidden=yes';
    var popup = new _CordovaPopupWindow_js__WEBPACK_IMPORTED_MODULE_0__["CordovaPopupWindow"](params);
    return Promise.resolve(popup);
  };

  return CordovaIFrameNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupNavigator.js":
/*!**************************************!*\
  !*** ./src/CordovaPopupNavigator.js ***!
  \**************************************/
/*! exports provided: CordovaPopupNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordovaPopupNavigator", function() { return CordovaPopupNavigator; });
/* harmony import */ var _CordovaPopupWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaPopupNavigator = /*#__PURE__*/function () {
  function CordovaPopupNavigator() {}

  var _proto = CordovaPopupNavigator.prototype;

  _proto.prepare = function prepare(params) {
    var popup = new _CordovaPopupWindow_js__WEBPACK_IMPORTED_MODULE_0__["CordovaPopupWindow"](params);
    return Promise.resolve(popup);
  };

  return CordovaPopupNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupWindow.js":
/*!***********************************!*\
  !*** ./src/CordovaPopupWindow.js ***!
  \***********************************/
/*! exports provided: CordovaPopupWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordovaPopupWindow", function() { return CordovaPopupWindow; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultPopupFeatures = 'location=no,toolbar=no,zoom=no';
var DefaultPopupTarget = "_blank";
var CordovaPopupWindow = /*#__PURE__*/function () {
  function CordovaPopupWindow(params) {
    var _this = this;

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
    this.features = params.popupWindowFeatures || DefaultPopupFeatures;
    this.target = params.popupWindowTarget || DefaultPopupTarget;
    this.redirect_uri = params.startUrl;
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
  }

  var _proto = CordovaPopupWindow.prototype;

  _proto._isInAppBrowserInstalled = function _isInAppBrowserInstalled(cordovaMetadata) {
    return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function (name) {
      return cordovaMetadata.hasOwnProperty(name);
    });
  };

  _proto.navigate = function navigate(params) {
    if (!params || !params.url) {
      this._error("No url provided");
    } else {
      if (!window.cordova) {
        return this._error("cordova is undefined");
      }

      var cordovaMetadata = window.cordova.require("cordova/plugin_list").metadata;

      if (this._isInAppBrowserInstalled(cordovaMetadata) === false) {
        return this._error("InAppBrowser plugin not found");
      }

      this._popup = cordova.InAppBrowser.open(params.url, this.target, this.features);

      if (this._popup) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CordovaPopupWindow.navigate: popup successfully created");
        this._exitCallbackEvent = this._exitCallback.bind(this);
        this._loadStartCallbackEvent = this._loadStartCallback.bind(this);

        this._popup.addEventListener("exit", this._exitCallbackEvent, false);

        this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false);
      } else {
        this._error("Error opening popup window");
      }
    }

    return this.promise;
  };

  _proto._loadStartCallback = function _loadStartCallback(event) {
    if (event.url.indexOf(this.redirect_uri) === 0) {
      this._success({
        url: event.url
      });
    }
  };

  _proto._exitCallback = function _exitCallback(message) {
    this._error(message);
  };

  _proto._success = function _success(data) {
    this._cleanup();

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CordovaPopupWindow: Successful response from cordova popup window");

    this._resolve(data);
  };

  _proto._error = function _error(message) {
    this._cleanup();

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error(message);

    this._reject(new Error(message));
  };

  _proto.close = function close() {
    this._cleanup();
  };

  _proto._cleanup = function _cleanup() {
    if (this._popup) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("CordovaPopupWindow: cleaning up popup");

      this._popup.removeEventListener("exit", this._exitCallbackEvent, false);

      this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false);

      this._popup.close();
    }

    this._popup = null;
  };

  _createClass(CordovaPopupWindow, [{
    key: "promise",
    get: function get() {
      return this._promise;
    }
  }]);

  return CordovaPopupWindow;
}();

/***/ }),

/***/ "./src/ErrorResponse.js":
/*!******************************!*\
  !*** ./src/ErrorResponse.js ***!
  \******************************/
/*! exports provided: ErrorResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResponse", function() { return ErrorResponse; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ErrorResponse = /*#__PURE__*/function (_Error) {
  _inheritsLoose(ErrorResponse, _Error);

  function ErrorResponse(_temp) {
    var _this;

    var _ref = _temp === void 0 ? {} : _temp,
        error = _ref.error,
        error_description = _ref.error_description,
        error_uri = _ref.error_uri,
        state = _ref.state,
        session_state = _ref.session_state;

    if (!error) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("No error passed to ErrorResponse");
      throw new Error("error");
    }

    _this = _Error.call(this, error_description || error) || this;
    _this.name = "ErrorResponse";
    _this.error = error;
    _this.error_description = error_description;
    _this.error_uri = error_uri;
    _this.state = state;
    _this.session_state = session_state;
    return _this;
  }

  return ErrorResponse;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var Event = /*#__PURE__*/function () {
  function Event(name) {
    this._name = name;
    this._callbacks = [];
  }

  var _proto = Event.prototype;

  _proto.addHandler = function addHandler(cb) {
    this._callbacks.push(cb);
  };

  _proto.removeHandler = function removeHandler(cb) {
    var idx = this._callbacks.findIndex(function (item) {
      return item === cb;
    });

    if (idx >= 0) {
      this._callbacks.splice(idx, 1);
    }
  };

  _proto.raise = function raise() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("Event: Raising event: " + this._name);

    for (var i = 0; i < this._callbacks.length; i++) {
      var _this$_callbacks;

      (_this$_callbacks = this._callbacks)[i].apply(_this$_callbacks, arguments);
    }
  };

  return Event;
}();

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var timer = {
  setInterval: function (_setInterval) {
    function setInterval(_x, _x2) {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (cb, duration) {
    return setInterval(cb, duration);
  }),
  clearInterval: function (_clearInterval) {
    function clearInterval(_x3) {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function (handle) {
    return clearInterval(handle);
  })
};
var testing = false;
var request = null;
var Global = /*#__PURE__*/function () {
  function Global() {}

  Global._testing = function _testing() {
    testing = true;
  };

  Global.setXMLHttpRequest = function setXMLHttpRequest(newRequest) {
    request = newRequest;
  };

  _createClass(Global, null, [{
    key: "location",
    get: function get() {
      if (!testing) {
        return location;
      }
    }
  }, {
    key: "localStorage",
    get: function get() {
      if (!testing && typeof window !== 'undefined') {
        return localStorage;
      }
    }
  }, {
    key: "sessionStorage",
    get: function get() {
      if (!testing && typeof window !== 'undefined') {
        return sessionStorage;
      }
    }
  }, {
    key: "XMLHttpRequest",
    get: function get() {
      if (!testing && typeof window !== 'undefined') {
        return request || XMLHttpRequest;
      }
    }
  }, {
    key: "timer",
    get: function get() {
      if (!testing) {
        return timer;
      }
    }
  }]);

  return Global;
}();

/***/ }),

/***/ "./src/IFrameNavigator.js":
/*!********************************!*\
  !*** ./src/IFrameNavigator.js ***!
  \********************************/
/*! exports provided: IFrameNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrameNavigator", function() { return IFrameNavigator; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _IFrameWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IFrameWindow.js */ "./src/IFrameWindow.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var IFrameNavigator = /*#__PURE__*/function () {
  function IFrameNavigator() {}

  var _proto = IFrameNavigator.prototype;

  _proto.prepare = function prepare(params) {
    var frame = new _IFrameWindow_js__WEBPACK_IMPORTED_MODULE_1__["IFrameWindow"](params);
    return Promise.resolve(frame);
  };

  _proto.callback = function callback(url) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameNavigator.callback");

    try {
      _IFrameWindow_js__WEBPACK_IMPORTED_MODULE_1__["IFrameWindow"].notifyParent(url);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return IFrameNavigator;
}();

/***/ }),

/***/ "./src/IFrameWindow.js":
/*!*****************************!*\
  !*** ./src/IFrameWindow.js ***!
  \*****************************/
/*! exports provided: IFrameWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrameWindow", function() { return IFrameWindow; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultTimeout = 10000;
var IFrameWindow = /*#__PURE__*/function () {
  function IFrameWindow(params) {
    var _this = this;

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
    this._boundMessageEvent = this._message.bind(this);
    window.addEventListener("message", this._boundMessageEvent, false);
    this._frame = window.document.createElement("iframe"); // shotgun approach

    this._frame.style.visibility = "hidden";
    this._frame.style.position = "absolute";
    this._frame.style.display = "none";
    this._frame.style.width = 0;
    this._frame.style.height = 0;
    window.document.body.appendChild(this._frame);
  }

  var _proto = IFrameWindow.prototype;

  _proto.navigate = function navigate(params) {
    if (!params || !params.url) {
      this._error("No url provided");
    } else {
      var timeout = params.silentRequestTimeout || DefaultTimeout;
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameWindow.navigate: Using timeout of:", timeout);
      this._timer = window.setTimeout(this._timeout.bind(this), timeout);
      this._frame.src = params.url;
    }

    return this.promise;
  };

  _proto._success = function _success(data) {
    this._cleanup();

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameWindow: Successful response from frame window");

    this._resolve(data);
  };

  _proto._error = function _error(message) {
    this._cleanup();

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error(message);

    this._reject(new Error(message));
  };

  _proto.close = function close() {
    this._cleanup();
  };

  _proto._cleanup = function _cleanup() {
    if (this._frame) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameWindow: cleanup");
      window.removeEventListener("message", this._boundMessageEvent, false);
      window.clearTimeout(this._timer);
      window.document.body.removeChild(this._frame);
      this._timer = null;
      this._frame = null;
      this._boundMessageEvent = null;
    }
  };

  _proto._timeout = function _timeout() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameWindow.timeout");

    this._error("Frame window timed out");
  };

  _proto._message = function _message(e) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameWindow.message");

    if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
      var url = e.data;

      if (url) {
        this._success({
          url: url
        });
      } else {
        this._error("Invalid response from frame");
      }
    }
  };

  IFrameWindow.notifyParent = function notifyParent(url) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameWindow.notifyParent");

    if (window.frameElement) {
      url = url || window.location.href;

      if (url) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("IFrameWindow.notifyParent: posting url message to parent");
        window.parent.postMessage(url, location.protocol + "//" + location.host);
      }
    }
  };

  _createClass(IFrameWindow, [{
    key: "promise",
    get: function get() {
      return this._promise;
    }
  }, {
    key: "_origin",
    get: function get() {
      return location.protocol + "//" + location.host;
    }
  }]);

  return IFrameWindow;
}();

/***/ }),

/***/ "./src/InMemoryWebStorage.js":
/*!***********************************!*\
  !*** ./src/InMemoryWebStorage.js ***!
  \***********************************/
/*! exports provided: InMemoryWebStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryWebStorage", function() { return InMemoryWebStorage; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var InMemoryWebStorage = /*#__PURE__*/function () {
  function InMemoryWebStorage() {
    this._data = {};
  }

  var _proto = InMemoryWebStorage.prototype;

  _proto.getItem = function getItem(key) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("InMemoryWebStorage.getItem", key);
    return this._data[key];
  };

  _proto.setItem = function setItem(key, value) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("InMemoryWebStorage.setItem", key);
    this._data[key] = value;
  };

  _proto.removeItem = function removeItem(key) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("InMemoryWebStorage.removeItem", key);
    delete this._data[key];
  };

  _proto.key = function key(index) {
    return Object.getOwnPropertyNames(this._data)[index];
  };

  _createClass(InMemoryWebStorage, [{
    key: "length",
    get: function get() {
      return Object.getOwnPropertyNames(this._data).length;
    }
  }]);

  return InMemoryWebStorage;
}();

/***/ }),

/***/ "./src/JoseUtilImpl.js":
/*!*****************************!*\
  !*** ./src/JoseUtilImpl.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getJoseUtil; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

function getJoseUtil(_ref) {
  var jws = _ref.jws,
      KeyUtil = _ref.KeyUtil,
      X509 = _ref.X509,
      crypto = _ref.crypto,
      hextob64u = _ref.hextob64u,
      b64tohex = _ref.b64tohex,
      AllowedSigningAlgs = _ref.AllowedSigningAlgs;
  return /*#__PURE__*/function () {
    function JoseUtil() {}

    JoseUtil.parseJwt = function parseJwt(jwt) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("JoseUtil.parseJwt");

      try {
        var token = jws.JWS.parse(jwt);
        return {
          header: token.headerObj,
          payload: token.payloadObj
        };
      } catch (e) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error(e);
      }
    };

    JoseUtil.validateJwt = function validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("JoseUtil.validateJwt");

      try {
        if (key.kty === "RSA") {
          if (key.e && key.n) {
            key = KeyUtil.getKey(key);
          } else if (key.x5c && key.x5c.length) {
            var hex = b64tohex(key.x5c[0]);
            key = X509.getPublicKeyFromCertHex(hex);
          } else {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil.validateJwt: RSA key missing key material", key);
            return Promise.reject(new Error("RSA key missing key material"));
          }
        } else if (key.kty === "EC") {
          if (key.crv && key.x && key.y) {
            key = KeyUtil.getKey(key);
          } else {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil.validateJwt: EC key missing key material", key);
            return Promise.reject(new Error("EC key missing key material"));
          }
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil.validateJwt: Unsupported key type", key && key.kty);
          return Promise.reject(new Error( true && key.kty));
        }

        return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive);
      } catch (e) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error(e && e.message || e);
        return Promise.reject("JWT validation failed");
      }
    };

    JoseUtil.validateJwtAttributes = function validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive) {
      if (!clockSkew) {
        clockSkew = 0;
      }

      if (!now) {
        now = parseInt(Date.now() / 1000);
      }

      var payload = JoseUtil.parseJwt(jwt).payload;

      if (!payload.iss) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: issuer was not provided");
        return Promise.reject(new Error("issuer was not provided"));
      }

      if (payload.iss !== issuer) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: Invalid issuer in token", payload.iss);
        return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
      }

      if (!payload.aud) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: aud was not provided");
        return Promise.reject(new Error("aud was not provided"));
      }

      var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;

      if (!validAudience) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: Invalid audience in token", payload.aud);
        return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
      }

      if (payload.azp && payload.azp !== audience) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: Invalid azp in token", payload.azp);
        return Promise.reject(new Error("Invalid azp in token: " + payload.azp));
      }

      if (!timeInsensitive) {
        var lowerNow = now + clockSkew;
        var upperNow = now - clockSkew;

        if (!payload.iat) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: iat was not provided");
          return Promise.reject(new Error("iat was not provided"));
        }

        if (lowerNow < payload.iat) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: iat is in the future", payload.iat);
          return Promise.reject(new Error("iat is in the future: " + payload.iat));
        }

        if (payload.nbf && lowerNow < payload.nbf) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: nbf is in the future", payload.nbf);
          return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
        }

        if (!payload.exp) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: exp was not provided");
          return Promise.reject(new Error("exp was not provided"));
        }

        if (payload.exp < upperNow) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: exp is in the past", payload.exp);
          return Promise.reject(new Error("exp is in the past:" + payload.exp));
        }
      }

      return Promise.resolve(payload);
    };

    JoseUtil._validateJwt = function _validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
      return JoseUtil.validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive).then(function (payload) {
        try {
          if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JoseUtil._validateJwt: signature validation failed");
            return Promise.reject(new Error("signature validation failed"));
          }

          return payload;
        } catch (e) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error(e && e.message || e);
          return Promise.reject(new Error("signature validation failed"));
        }
      });
    };

    JoseUtil.hashString = function hashString(value, alg) {
      try {
        return crypto.Util.hashString(value, alg);
      } catch (e) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error(e);
      }
    };

    JoseUtil.hexToBase64Url = function hexToBase64Url(value) {
      try {
        return hextob64u(value);
      } catch (e) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error(e);
      }
    };

    return JoseUtil;
  }();
}

/***/ }),

/***/ "./src/JoseUtilRsa.js":
/*!****************************!*\
  !*** ./src/JoseUtilRsa.js ***!
  \****************************/
/*! exports provided: JoseUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoseUtil", function() { return JoseUtil; });
/* harmony import */ var _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto/rsa */ "./src/crypto/rsa.js");
/* harmony import */ var _JoseUtilImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JoseUtilImpl */ "./src/JoseUtilImpl.js");


var JoseUtil = Object(_JoseUtilImpl__WEBPACK_IMPORTED_MODULE_1__["default"])({
  jws: _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__["jws"],
  KeyUtil: _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__["KeyUtil"],
  X509: _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__["X509"],
  crypto: _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__["crypto"],
  hextob64u: _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__["hextob64u"],
  b64tohex: _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__["b64tohex"],
  AllowedSigningAlgs: _crypto_rsa__WEBPACK_IMPORTED_MODULE_0__["AllowedSigningAlgs"]
});

/***/ }),

/***/ "./src/JsonService.js":
/*!****************************!*\
  !*** ./src/JsonService.js ***!
  \****************************/
/*! exports provided: JsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonService", function() { return JsonService; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global.js */ "./src/Global.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var JsonService = /*#__PURE__*/function () {
  function JsonService(additionalContentTypes, XMLHttpRequestCtor, jwtHandler) {
    if (additionalContentTypes === void 0) {
      additionalContentTypes = null;
    }

    if (XMLHttpRequestCtor === void 0) {
      XMLHttpRequestCtor = _Global_js__WEBPACK_IMPORTED_MODULE_1__["Global"].XMLHttpRequest;
    }

    if (jwtHandler === void 0) {
      jwtHandler = null;
    }

    if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
      this._contentTypes = additionalContentTypes.slice();
    } else {
      this._contentTypes = [];
    }

    this._contentTypes.push('application/json');

    if (jwtHandler) {
      this._contentTypes.push('application/jwt');
    }

    this._XMLHttpRequest = XMLHttpRequestCtor;
    this._jwtHandler = jwtHandler;
  }

  var _proto = JsonService.prototype;

  _proto.getJson = function getJson(url, token) {
    var _this = this;

    if (!url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.getJson: No url passed");
      throw new Error("url");
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("JsonService.getJson, url: ", url);
    return new Promise(function (resolve, reject) {
      var req = new _this._XMLHttpRequest();
      req.open('GET', url);
      var allowedContentTypes = _this._contentTypes;
      var jwtHandler = _this._jwtHandler;

      req.onload = function () {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("JsonService.getJson: HTTP response received, status", req.status);

        if (req.status === 200) {
          var contentType = req.getResponseHeader("Content-Type");

          if (contentType) {
            var found = allowedContentTypes.find(function (item) {
              if (contentType.startsWith(item)) {
                return true;
              }
            });

            if (found == "application/jwt") {
              jwtHandler(req).then(resolve, reject);
              return;
            }

            if (found) {
              try {
                resolve(JSON.parse(req.responseText));
                return;
              } catch (e) {
                _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.getJson: Error parsing JSON response", e.message);
                reject(e);
                return;
              }
            }
          }

          reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
        } else {
          reject(Error(req.statusText + " (" + req.status + ")"));
        }
      };

      req.onerror = function () {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.getJson: network error");
        reject(Error("Network Error"));
      };

      if (token) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("JsonService.getJson: token passed, setting Authorization header");
        req.setRequestHeader("Authorization", "Bearer " + token);
      }

      req.send();
    });
  };

  _proto.postForm = function postForm(url, payload) {
    var _this2 = this;

    if (!url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.postForm: No url passed");
      throw new Error("url");
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("JsonService.postForm, url: ", url);
    return new Promise(function (resolve, reject) {
      var req = new _this2._XMLHttpRequest();
      req.open('POST', url);
      var allowedContentTypes = _this2._contentTypes;

      req.onload = function () {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("JsonService.postForm: HTTP response received, status", req.status);

        if (req.status === 200) {
          var contentType = req.getResponseHeader("Content-Type");

          if (contentType) {
            var found = allowedContentTypes.find(function (item) {
              if (contentType.startsWith(item)) {
                return true;
              }
            });

            if (found) {
              try {
                resolve(JSON.parse(req.responseText));
                return;
              } catch (e) {
                _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.postForm: Error parsing JSON response", e.message);
                reject(e);
                return;
              }
            }
          }

          reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
          return;
        }

        if (req.status === 400) {
          var contentType = req.getResponseHeader("Content-Type");

          if (contentType) {
            var found = allowedContentTypes.find(function (item) {
              if (contentType.startsWith(item)) {
                return true;
              }
            });

            if (found) {
              try {
                var payload = JSON.parse(req.responseText);

                if (payload && payload.error) {
                  _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.postForm: Error from server: ", payload.error);
                  reject(new Error(payload.error));
                  return;
                }
              } catch (e) {
                _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.postForm: Error parsing JSON response", e.message);
                reject(e);
                return;
              }
            }
          }
        }

        reject(Error(req.statusText + " (" + req.status + ")"));
      };

      req.onerror = function () {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("JsonService.postForm: network error");
        reject(Error("Network Error"));
      };

      var body = "";

      for (var key in payload) {
        var value = payload[key];

        if (value) {
          if (body.length > 0) {
            body += "&";
          }

          body += encodeURIComponent(key);
          body += "=";
          body += encodeURIComponent(value);
        }
      }

      req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      req.send(body);
    });
  };

  return JsonService;
}();

/***/ }),

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var nopLogger = {
  debug: function debug() {},
  info: function info() {},
  warn: function warn() {},
  error: function error() {}
};
var NONE = 0;
var ERROR = 1;
var WARN = 2;
var INFO = 3;
var DEBUG = 4;
var logger;
var level;
var Log = /*#__PURE__*/function () {
  function Log() {}

  Log.reset = function reset() {
    level = INFO;
    logger = nopLogger;
  };

  Log.debug = function debug() {
    if (level >= DEBUG) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      logger.debug.apply(logger, Array.from(args));
    }
  };

  Log.info = function info() {
    if (level >= INFO) {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      logger.info.apply(logger, Array.from(args));
    }
  };

  Log.warn = function warn() {
    if (level >= WARN) {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      logger.warn.apply(logger, Array.from(args));
    }
  };

  Log.error = function error() {
    if (level >= ERROR) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      logger.error.apply(logger, Array.from(args));
    }
  };

  _createClass(Log, null, [{
    key: "NONE",
    get: function get() {
      return NONE;
    }
  }, {
    key: "ERROR",
    get: function get() {
      return ERROR;
    }
  }, {
    key: "WARN",
    get: function get() {
      return WARN;
    }
  }, {
    key: "INFO",
    get: function get() {
      return INFO;
    }
  }, {
    key: "DEBUG",
    get: function get() {
      return DEBUG;
    }
  }, {
    key: "level",
    get: function get() {
      return level;
    },
    set: function set(value) {
      if (NONE <= value && value <= DEBUG) {
        level = value;
      } else {
        throw new Error("Invalid log level");
      }
    }
  }, {
    key: "logger",
    get: function get() {
      return logger;
    },
    set: function set(value) {
      if (!value.debug && value.info) {
        // just to stay backwards compat. can remove in 2.0
        value.debug = value.info;
      }

      if (value.debug && value.info && value.warn && value.error) {
        logger = value;
      } else {
        throw new Error("Invalid logger");
      }
    }
  }]);

  return Log;
}();
Log.reset();

/***/ }),

/***/ "./src/MetadataService.js":
/*!********************************!*\
  !*** ./src/MetadataService.js ***!
  \********************************/
/*! exports provided: MetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataService", function() { return MetadataService; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _JsonService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var OidcMetadataUrlPath = '.well-known/openid-configuration';
var MetadataService = /*#__PURE__*/function () {
  function MetadataService(settings, JsonServiceCtor) {
    if (JsonServiceCtor === void 0) {
      JsonServiceCtor = _JsonService_js__WEBPACK_IMPORTED_MODULE_1__["JsonService"];
    }

    if (!settings) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("MetadataService: No settings passed to MetadataService");
      throw new Error("settings");
    }

    this._settings = settings;
    this._jsonService = new JsonServiceCtor(['application/jwk-set+json']);
  }

  var _proto = MetadataService.prototype;

  _proto.getMetadata = function getMetadata() {
    var _this = this;

    if (this._settings.metadata) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getMetadata: Returning metadata from settings");
      return Promise.resolve(this._settings.metadata);
    }

    if (!this.metadataUrl) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("MetadataService.getMetadata: No authority or metadataUrl configured on settings");
      return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl);
    return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getMetadata: json received");
      _this._settings.metadata = metadata;
      return metadata;
    });
  };

  _proto.getIssuer = function getIssuer() {
    return this._getMetadataProperty("issuer");
  };

  _proto.getAuthorizationEndpoint = function getAuthorizationEndpoint() {
    return this._getMetadataProperty("authorization_endpoint");
  };

  _proto.getUserInfoEndpoint = function getUserInfoEndpoint() {
    return this._getMetadataProperty("userinfo_endpoint");
  };

  _proto.getTokenEndpoint = function getTokenEndpoint(optional) {
    if (optional === void 0) {
      optional = true;
    }

    return this._getMetadataProperty("token_endpoint", optional);
  };

  _proto.getCheckSessionIframe = function getCheckSessionIframe() {
    return this._getMetadataProperty("check_session_iframe", true);
  };

  _proto.getEndSessionEndpoint = function getEndSessionEndpoint() {
    return this._getMetadataProperty("end_session_endpoint", true);
  };

  _proto.getRevocationEndpoint = function getRevocationEndpoint() {
    return this._getMetadataProperty("revocation_endpoint", true);
  };

  _proto.getKeysEndpoint = function getKeysEndpoint() {
    return this._getMetadataProperty("jwks_uri", true);
  };

  _proto._getMetadataProperty = function _getMetadataProperty(name, optional) {
    if (optional === void 0) {
      optional = false;
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getMetadataProperty for: " + name);
    return this.getMetadata().then(function (metadata) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getMetadataProperty: metadata recieved");

      if (metadata[name] === undefined) {
        if (optional === true) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + name);
          return undefined;
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("MetadataService.getMetadataProperty: Metadata does not contain property " + name);
          throw new Error("Metadata does not contain property " + name);
        }
      }

      return metadata[name];
    });
  };

  _proto.getSigningKeys = function getSigningKeys() {
    var _this2 = this;

    if (this._settings.signingKeys) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getSigningKeys: Returning signingKeys from settings");
      return Promise.resolve(this._settings.signingKeys);
    }

    return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getSigningKeys: jwks_uri received", jwks_uri);
      return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("MetadataService.getSigningKeys: key set received", keySet);

        if (!keySet.keys) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("MetadataService.getSigningKeys: Missing keys on keyset");
          throw new Error("Missing keys on keyset");
        }

        _this2._settings.signingKeys = keySet.keys;
        return _this2._settings.signingKeys;
      });
    });
  };

  _createClass(MetadataService, [{
    key: "metadataUrl",
    get: function get() {
      if (!this._metadataUrl) {
        if (this._settings.metadataUrl) {
          this._metadataUrl = this._settings.metadataUrl;
        } else {
          this._metadataUrl = this._settings.authority;

          if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
            if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
              this._metadataUrl += '/';
            }

            this._metadataUrl += OidcMetadataUrlPath;
          }
        }
      }

      return this._metadataUrl;
    }
  }]);

  return MetadataService;
}();

/***/ }),

/***/ "./src/OidcClient.js":
/*!***************************!*\
  !*** ./src/OidcClient.js ***!
  \***************************/
/*! exports provided: OidcClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OidcClient", function() { return OidcClient; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _OidcClientSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");
/* harmony import */ var _ErrorResponse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");
/* harmony import */ var _SigninRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");
/* harmony import */ var _SigninResponse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SigninResponse.js */ "./src/SigninResponse.js");
/* harmony import */ var _SignoutRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignoutRequest.js */ "./src/SignoutRequest.js");
/* harmony import */ var _SignoutResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignoutResponse.js */ "./src/SignoutResponse.js");
/* harmony import */ var _SigninState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./State.js */ "./src/State.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.









var OidcClient = /*#__PURE__*/function () {
  function OidcClient(settings) {
    if (settings === void 0) {
      settings = {};
    }

    if (settings instanceof _OidcClientSettings_js__WEBPACK_IMPORTED_MODULE_1__["OidcClientSettings"]) {
      this._settings = settings;
    } else {
      this._settings = new _OidcClientSettings_js__WEBPACK_IMPORTED_MODULE_1__["OidcClientSettings"](settings);
    }
  }

  var _proto = OidcClient.prototype;

  _proto.createSigninRequest = function createSigninRequest(_temp, stateStore) {
    var _this = this;

    var _ref = _temp === void 0 ? {} : _temp,
        response_type = _ref.response_type,
        scope = _ref.scope,
        redirect_uri = _ref.redirect_uri,
        data = _ref.data,
        state = _ref.state,
        prompt = _ref.prompt,
        display = _ref.display,
        max_age = _ref.max_age,
        ui_locales = _ref.ui_locales,
        id_token_hint = _ref.id_token_hint,
        login_hint = _ref.login_hint,
        acr_values = _ref.acr_values,
        resource = _ref.resource,
        request = _ref.request,
        request_uri = _ref.request_uri,
        response_mode = _ref.response_mode,
        extraQueryParams = _ref.extraQueryParams,
        extraTokenParams = _ref.extraTokenParams,
        request_type = _ref.request_type,
        skipUserInfo = _ref.skipUserInfo;

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.createSigninRequest");
    var client_id = this._settings.client_id;
    response_type = response_type || this._settings.response_type;
    scope = scope || this._settings.scope;
    redirect_uri = redirect_uri || this._settings.redirect_uri; // id_token_hint, login_hint aren't allowed on _settings

    prompt = prompt || this._settings.prompt;
    display = display || this._settings.display;
    max_age = max_age || this._settings.max_age;
    ui_locales = ui_locales || this._settings.ui_locales;
    acr_values = acr_values || this._settings.acr_values;
    resource = resource || this._settings.resource;
    response_mode = response_mode || this._settings.response_mode;
    extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
    extraTokenParams = extraTokenParams || this._settings.extraTokenParams;
    var authority = this._settings.authority;

    if (_SigninRequest_js__WEBPACK_IMPORTED_MODULE_3__["SigninRequest"].isCode(response_type) && response_type !== "code") {
      return Promise.reject(new Error("OpenID Connect hybrid flow is not supported"));
    }

    return this._metadataService.getAuthorizationEndpoint().then(function (url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.createSigninRequest: Received authorization endpoint", url);
      var signinRequest = new _SigninRequest_js__WEBPACK_IMPORTED_MODULE_3__["SigninRequest"]({
        url: url,
        client_id: client_id,
        redirect_uri: redirect_uri,
        response_type: response_type,
        scope: scope,
        data: data || state,
        authority: authority,
        prompt: prompt,
        display: display,
        max_age: max_age,
        ui_locales: ui_locales,
        id_token_hint: id_token_hint,
        login_hint: login_hint,
        acr_values: acr_values,
        resource: resource,
        request: request,
        request_uri: request_uri,
        extraQueryParams: extraQueryParams,
        extraTokenParams: extraTokenParams,
        request_type: request_type,
        response_mode: response_mode,
        client_secret: _this._settings.client_secret,
        skipUserInfo: skipUserInfo
      });
      var signinState = signinRequest.state;
      stateStore = stateStore || _this._stateStore;
      return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
        return signinRequest;
      });
    });
  };

  _proto.readSigninResponseState = function readSigninResponseState(url, stateStore, removeState) {
    if (removeState === void 0) {
      removeState = false;
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.readSigninResponseState");
    var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest_js__WEBPACK_IMPORTED_MODULE_3__["SigninRequest"].isCode(this._settings.response_type);
    var delimiter = useQuery ? "?" : "#";
    var response = new _SigninResponse_js__WEBPACK_IMPORTED_MODULE_4__["SigninResponse"](url, delimiter);

    if (!response.state) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("OidcClient.readSigninResponseState: No state in response");
      return Promise.reject(new Error("No state in response"));
    }

    stateStore = stateStore || this._stateStore;
    var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
    return stateApi(response.state).then(function (storedStateString) {
      if (!storedStateString) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("OidcClient.readSigninResponseState: No matching state found in storage");
        throw new Error("No matching state found in storage");
      }

      var state = _SigninState_js__WEBPACK_IMPORTED_MODULE_7__["SigninState"].fromStorageString(storedStateString);
      return {
        state: state,
        response: response
      };
    });
  };

  _proto.processSigninResponse = function processSigninResponse(url, stateStore) {
    var _this2 = this;

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.processSigninResponse");
    return this.readSigninResponseState(url, stateStore, true).then(function (_ref2) {
      var state = _ref2.state,
          response = _ref2.response;
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.processSigninResponse: Received state from storage; validating response");
      return _this2._validator.validateSigninResponse(state, response);
    });
  };

  _proto.createSignoutRequest = function createSignoutRequest(_temp2, stateStore) {
    var _this3 = this;

    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        id_token_hint = _ref3.id_token_hint,
        data = _ref3.data,
        state = _ref3.state,
        post_logout_redirect_uri = _ref3.post_logout_redirect_uri,
        extraQueryParams = _ref3.extraQueryParams,
        request_type = _ref3.request_type;

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.createSignoutRequest");
    post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
    extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
    return this._metadataService.getEndSessionEndpoint().then(function (url) {
      if (!url) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("OidcClient.createSignoutRequest: No end session endpoint url returned");
        throw new Error("no end session endpoint");
      }

      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.createSignoutRequest: Received end session endpoint", url);
      var request = new _SignoutRequest_js__WEBPACK_IMPORTED_MODULE_5__["SignoutRequest"]({
        url: url,
        id_token_hint: id_token_hint,
        post_logout_redirect_uri: post_logout_redirect_uri,
        data: data || state,
        extraQueryParams: extraQueryParams,
        request_type: request_type
      });
      var signoutState = request.state;

      if (signoutState) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.createSignoutRequest: Signout request has state to persist");
        stateStore = stateStore || _this3._stateStore;
        stateStore.set(signoutState.id, signoutState.toStorageString());
      }

      return request;
    });
  };

  _proto.readSignoutResponseState = function readSignoutResponseState(url, stateStore, removeState) {
    if (removeState === void 0) {
      removeState = false;
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.readSignoutResponseState");
    var response = new _SignoutResponse_js__WEBPACK_IMPORTED_MODULE_6__["SignoutResponse"](url);

    if (!response.state) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.readSignoutResponseState: No state in response");

      if (response.error) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("OidcClient.readSignoutResponseState: Response was error: ", response.error);
        return Promise.reject(new _ErrorResponse_js__WEBPACK_IMPORTED_MODULE_2__["ErrorResponse"](response));
      }

      return Promise.resolve({
        undefined: undefined,
        response: response
      });
    }

    var stateKey = response.state;
    stateStore = stateStore || this._stateStore;
    var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
    return stateApi(stateKey).then(function (storedStateString) {
      if (!storedStateString) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("OidcClient.readSignoutResponseState: No matching state found in storage");
        throw new Error("No matching state found in storage");
      }

      var state = _State_js__WEBPACK_IMPORTED_MODULE_8__["State"].fromStorageString(storedStateString);
      return {
        state: state,
        response: response
      };
    });
  };

  _proto.processSignoutResponse = function processSignoutResponse(url, stateStore) {
    var _this4 = this;

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.processSignoutResponse");
    return this.readSignoutResponseState(url, stateStore, true).then(function (_ref4) {
      var state = _ref4.state,
          response = _ref4.response;

      if (state) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.processSignoutResponse: Received state from storage; validating response");
        return _this4._validator.validateSignoutResponse(state, response);
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response");
        return response;
      }
    });
  };

  _proto.clearStaleState = function clearStaleState(stateStore) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("OidcClient.clearStaleState");
    stateStore = stateStore || this._stateStore;
    return _State_js__WEBPACK_IMPORTED_MODULE_8__["State"].clearStaleState(stateStore, this.settings.staleStateAge);
  };

  _createClass(OidcClient, [{
    key: "_stateStore",
    get: function get() {
      return this.settings.stateStore;
    }
  }, {
    key: "_validator",
    get: function get() {
      return this.settings.validator;
    }
  }, {
    key: "_metadataService",
    get: function get() {
      return this.settings.metadataService;
    }
  }, {
    key: "settings",
    get: function get() {
      return this._settings;
    }
  }, {
    key: "metadataService",
    get: function get() {
      return this._metadataService;
    }
  }]);

  return OidcClient;
}();

/***/ }),

/***/ "./src/OidcClientSettings.js":
/*!***********************************!*\
  !*** ./src/OidcClientSettings.js ***!
  \***********************************/
/*! exports provided: OidcClientSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OidcClientSettings", function() { return OidcClientSettings; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _WebStorageStateStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");
/* harmony import */ var _ResponseValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponseValidator.js */ "./src/ResponseValidator.js");
/* harmony import */ var _MetadataService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.




var OidcMetadataUrlPath = '.well-known/openid-configuration';
var DefaultResponseType = "id_token";
var DefaultScope = "openid";
var DefaultStaleStateAge = 60 * 15; // seconds

var DefaultClockSkewInSeconds = 60 * 5;
var OidcClientSettings = /*#__PURE__*/function () {
  function OidcClientSettings(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        authority = _ref.authority,
        metadataUrl = _ref.metadataUrl,
        metadata = _ref.metadata,
        signingKeys = _ref.signingKeys,
        client_id = _ref.client_id,
        client_secret = _ref.client_secret,
        _ref$response_type = _ref.response_type,
        response_type = _ref$response_type === void 0 ? DefaultResponseType : _ref$response_type,
        _ref$scope = _ref.scope,
        scope = _ref$scope === void 0 ? DefaultScope : _ref$scope,
        redirect_uri = _ref.redirect_uri,
        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
        prompt = _ref.prompt,
        display = _ref.display,
        max_age = _ref.max_age,
        ui_locales = _ref.ui_locales,
        acr_values = _ref.acr_values,
        resource = _ref.resource,
        response_mode = _ref.response_mode,
        _ref$filterProtocolCl = _ref.filterProtocolClaims,
        filterProtocolClaims = _ref$filterProtocolCl === void 0 ? true : _ref$filterProtocolCl,
        _ref$loadUserInfo = _ref.loadUserInfo,
        loadUserInfo = _ref$loadUserInfo === void 0 ? true : _ref$loadUserInfo,
        _ref$staleStateAge = _ref.staleStateAge,
        staleStateAge = _ref$staleStateAge === void 0 ? DefaultStaleStateAge : _ref$staleStateAge,
        _ref$clockSkew = _ref.clockSkew,
        clockSkew = _ref$clockSkew === void 0 ? DefaultClockSkewInSeconds : _ref$clockSkew,
        _ref$userInfoJwtIssue = _ref.userInfoJwtIssuer,
        userInfoJwtIssuer = _ref$userInfoJwtIssue === void 0 ? 'OP' : _ref$userInfoJwtIssue,
        _ref$stateStore = _ref.stateStore,
        stateStore = _ref$stateStore === void 0 ? new _WebStorageStateStore_js__WEBPACK_IMPORTED_MODULE_1__["WebStorageStateStore"]() : _ref$stateStore,
        _ref$ResponseValidato = _ref.ResponseValidatorCtor,
        ResponseValidatorCtor = _ref$ResponseValidato === void 0 ? _ResponseValidator_js__WEBPACK_IMPORTED_MODULE_2__["ResponseValidator"] : _ref$ResponseValidato,
        _ref$MetadataServiceC = _ref.MetadataServiceCtor,
        MetadataServiceCtor = _ref$MetadataServiceC === void 0 ? _MetadataService_js__WEBPACK_IMPORTED_MODULE_3__["MetadataService"] : _ref$MetadataServiceC,
        _ref$extraQueryParams = _ref.extraQueryParams,
        extraQueryParams = _ref$extraQueryParams === void 0 ? {} : _ref$extraQueryParams,
        _ref$extraTokenParams = _ref.extraTokenParams,
        extraTokenParams = _ref$extraTokenParams === void 0 ? {} : _ref$extraTokenParams;

    this._authority = authority;
    this._metadataUrl = metadataUrl;
    this._metadata = metadata;
    this._signingKeys = signingKeys;
    this._client_id = client_id;
    this._client_secret = client_secret;
    this._response_type = response_type;
    this._scope = scope;
    this._redirect_uri = redirect_uri;
    this._post_logout_redirect_uri = post_logout_redirect_uri;
    this._prompt = prompt;
    this._display = display;
    this._max_age = max_age;
    this._ui_locales = ui_locales;
    this._acr_values = acr_values;
    this._resource = resource;
    this._response_mode = response_mode;
    this._filterProtocolClaims = !!filterProtocolClaims;
    this._loadUserInfo = !!loadUserInfo;
    this._staleStateAge = staleStateAge;
    this._clockSkew = clockSkew;
    this._userInfoJwtIssuer = userInfoJwtIssuer;
    this._stateStore = stateStore;
    this._validator = new ResponseValidatorCtor(this);
    this._metadataService = new MetadataServiceCtor(this);
    this._extraQueryParams = typeof extraQueryParams === 'object' ? extraQueryParams : {};
    this._extraTokenParams = typeof extraTokenParams === 'object' ? extraTokenParams : {};
  } // client config


  _createClass(OidcClientSettings, [{
    key: "client_id",
    get: function get() {
      return this._client_id;
    },
    set: function set(value) {
      if (!this._client_id) {
        // one-time set only
        this._client_id = value;
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("OidcClientSettings.set_client_id: client_id has already been assigned.");
        throw new Error("client_id has already been assigned.");
      }
    }
  }, {
    key: "client_secret",
    get: function get() {
      return this._client_secret;
    }
  }, {
    key: "response_type",
    get: function get() {
      return this._response_type;
    }
  }, {
    key: "scope",
    get: function get() {
      return this._scope;
    }
  }, {
    key: "redirect_uri",
    get: function get() {
      return this._redirect_uri;
    }
  }, {
    key: "post_logout_redirect_uri",
    get: function get() {
      return this._post_logout_redirect_uri;
    } // optional protocol params

  }, {
    key: "prompt",
    get: function get() {
      return this._prompt;
    }
  }, {
    key: "display",
    get: function get() {
      return this._display;
    }
  }, {
    key: "max_age",
    get: function get() {
      return this._max_age;
    }
  }, {
    key: "ui_locales",
    get: function get() {
      return this._ui_locales;
    }
  }, {
    key: "acr_values",
    get: function get() {
      return this._acr_values;
    }
  }, {
    key: "resource",
    get: function get() {
      return this._resource;
    }
  }, {
    key: "response_mode",
    get: function get() {
      return this._response_mode;
    } // metadata

  }, {
    key: "authority",
    get: function get() {
      return this._authority;
    },
    set: function set(value) {
      if (!this._authority) {
        // one-time set only
        this._authority = value;
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("OidcClientSettings.set_authority: authority has already been assigned.");
        throw new Error("authority has already been assigned.");
      }
    }
  }, {
    key: "metadataUrl",
    get: function get() {
      if (!this._metadataUrl) {
        this._metadataUrl = this.authority;

        if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
          if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
            this._metadataUrl += '/';
          }

          this._metadataUrl += OidcMetadataUrlPath;
        }
      }

      return this._metadataUrl;
    } // settable/cachable metadata values

  }, {
    key: "metadata",
    get: function get() {
      return this._metadata;
    },
    set: function set(value) {
      this._metadata = value;
    }
  }, {
    key: "signingKeys",
    get: function get() {
      return this._signingKeys;
    },
    set: function set(value) {
      this._signingKeys = value;
    } // behavior flags

  }, {
    key: "filterProtocolClaims",
    get: function get() {
      return this._filterProtocolClaims;
    }
  }, {
    key: "loadUserInfo",
    get: function get() {
      return this._loadUserInfo;
    }
  }, {
    key: "staleStateAge",
    get: function get() {
      return this._staleStateAge;
    }
  }, {
    key: "clockSkew",
    get: function get() {
      return this._clockSkew;
    }
  }, {
    key: "userInfoJwtIssuer",
    get: function get() {
      return this._userInfoJwtIssuer;
    }
  }, {
    key: "stateStore",
    get: function get() {
      return this._stateStore;
    }
  }, {
    key: "validator",
    get: function get() {
      return this._validator;
    }
  }, {
    key: "metadataService",
    get: function get() {
      return this._metadataService;
    } // extra query params

  }, {
    key: "extraQueryParams",
    get: function get() {
      return this._extraQueryParams;
    },
    set: function set(value) {
      if (typeof value === 'object') {
        this._extraQueryParams = value;
      } else {
        this._extraQueryParams = {};
      }
    } // extra token params

  }, {
    key: "extraTokenParams",
    get: function get() {
      return this._extraTokenParams;
    },
    set: function set(value) {
      if (typeof value === 'object') {
        this._extraTokenParams = value;
      } else {
        this._extraTokenParams = {};
      }
    }
  }]);

  return OidcClientSettings;
}();

/***/ }),

/***/ "./src/PopupNavigator.js":
/*!*******************************!*\
  !*** ./src/PopupNavigator.js ***!
  \*******************************/
/*! exports provided: PopupNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupNavigator", function() { return PopupNavigator; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _PopupWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupWindow.js */ "./src/PopupWindow.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var PopupNavigator = /*#__PURE__*/function () {
  function PopupNavigator() {}

  var _proto = PopupNavigator.prototype;

  _proto.prepare = function prepare(params) {
    var popup = new _PopupWindow_js__WEBPACK_IMPORTED_MODULE_1__["PopupWindow"](params);
    return Promise.resolve(popup);
  };

  _proto.callback = function callback(url, keepOpen, delimiter) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupNavigator.callback");

    try {
      _PopupWindow_js__WEBPACK_IMPORTED_MODULE_1__["PopupWindow"].notifyOpener(url, keepOpen, delimiter);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return PopupNavigator;
}();

/***/ }),

/***/ "./src/PopupWindow.js":
/*!****************************!*\
  !*** ./src/PopupWindow.js ***!
  \****************************/
/*! exports provided: PopupWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupWindow", function() { return PopupWindow; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var CheckForPopupClosedInterval = 500;
var DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;'; //const DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;resizable=yes';

var DefaultPopupTarget = "_blank";
var PopupWindow = /*#__PURE__*/function () {
  function PopupWindow(params) {
    var _this = this;

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
    var target = params.popupWindowTarget || DefaultPopupTarget;
    var features = params.popupWindowFeatures || DefaultPopupFeatures;
    this._popup = window.open('', target, features);

    if (this._popup) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupWindow.ctor: popup successfully created");
      this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), CheckForPopupClosedInterval);
    }
  }

  var _proto = PopupWindow.prototype;

  _proto.navigate = function navigate(params) {
    if (!this._popup) {
      this._error("PopupWindow.navigate: Error opening popup window");
    } else if (!params || !params.url) {
      this._error("PopupWindow.navigate: no url provided");

      this._error("No url provided");
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupWindow.navigate: Setting URL in popup");
      this._id = params.id;

      if (this._id) {
        window["popupCallback_" + params.id] = this._callback.bind(this);
      }

      this._popup.focus();

      this._popup.window.location = params.url;
    }

    return this.promise;
  };

  _proto._success = function _success(data) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupWindow.callback: Successful response from popup window");

    this._cleanup();

    this._resolve(data);
  };

  _proto._error = function _error(message) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("PopupWindow.error: ", message);

    this._cleanup();

    this._reject(new Error(message));
  };

  _proto.close = function close() {
    this._cleanup(false);
  };

  _proto._cleanup = function _cleanup(keepOpen) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupWindow.cleanup");
    window.clearInterval(this._checkForPopupClosedTimer);
    this._checkForPopupClosedTimer = null;
    delete window["popupCallback_" + this._id];

    if (this._popup && !keepOpen) {
      this._popup.close();
    }

    this._popup = null;
  };

  _proto._checkForPopupClosed = function _checkForPopupClosed() {
    if (!this._popup || this._popup.closed) {
      this._error("Popup window closed");
    }
  };

  _proto._callback = function _callback(url, keepOpen) {
    this._cleanup(keepOpen);

    if (url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupWindow.callback success");

      this._success({
        url: url
      });
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupWindow.callback: Invalid response from popup");

      this._error("Invalid response from popup");
    }
  };

  PopupWindow.notifyOpener = function notifyOpener(url, keepOpen, delimiter) {
    if (window.opener) {
      url = url || window.location.href;

      if (url) {
        var data = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].parseUrlFragment(url, delimiter);

        if (data.state) {
          var name = "popupCallback_" + data.state;
          var callback = window.opener[name];

          if (callback) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("PopupWindow.notifyOpener: passing url message to opener");
            callback(url, keepOpen);
          } else {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("PopupWindow.notifyOpener: no matching callback found on opener");
          }
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("PopupWindow.notifyOpener: no state found in response url");
        }
      }
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
    }
  };

  _createClass(PopupWindow, [{
    key: "promise",
    get: function get() {
      return this._promise;
    }
  }]);

  return PopupWindow;
}();

/***/ }),

/***/ "./src/RedirectNavigator.js":
/*!**********************************!*\
  !*** ./src/RedirectNavigator.js ***!
  \**********************************/
/*! exports provided: RedirectNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectNavigator", function() { return RedirectNavigator; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var RedirectNavigator = /*#__PURE__*/function () {
  function RedirectNavigator() {}

  var _proto = RedirectNavigator.prototype;

  _proto.prepare = function prepare() {
    return Promise.resolve(this);
  };

  _proto.navigate = function navigate(params) {
    if (!params || !params.url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("RedirectNavigator.navigate: No url provided");
      return Promise.reject(new Error("No url provided"));
    }

    if (params.useReplaceToNavigate) {
      window.location.replace(params.url);
    } else {
      window.location = params.url;
    }

    return Promise.resolve();
  };

  _createClass(RedirectNavigator, [{
    key: "url",
    get: function get() {
      return window.location.href;
    }
  }]);

  return RedirectNavigator;
}();

/***/ }),

/***/ "./src/ResponseValidator.js":
/*!**********************************!*\
  !*** ./src/ResponseValidator.js ***!
  \**********************************/
/*! exports provided: ResponseValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseValidator", function() { return ResponseValidator; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");
/* harmony import */ var _UserInfoService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserInfoService.js */ "./src/UserInfoService.js");
/* harmony import */ var _TokenClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");
/* harmony import */ var _ErrorResponse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");
/* harmony import */ var _JoseUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.






var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];
var ResponseValidator = /*#__PURE__*/function () {
  function ResponseValidator(settings, MetadataServiceCtor, UserInfoServiceCtor, joseUtil, TokenClientCtor) {
    if (MetadataServiceCtor === void 0) {
      MetadataServiceCtor = _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__["MetadataService"];
    }

    if (UserInfoServiceCtor === void 0) {
      UserInfoServiceCtor = _UserInfoService_js__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"];
    }

    if (joseUtil === void 0) {
      joseUtil = _JoseUtil_js__WEBPACK_IMPORTED_MODULE_5__["JoseUtil"];
    }

    if (TokenClientCtor === void 0) {
      TokenClientCtor = _TokenClient_js__WEBPACK_IMPORTED_MODULE_3__["TokenClient"];
    }

    if (!settings) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator.ctor: No settings passed to ResponseValidator");
      throw new Error("settings");
    }

    this._settings = settings;
    this._metadataService = new MetadataServiceCtor(this._settings);
    this._userInfoService = new UserInfoServiceCtor(this._settings);
    this._joseUtil = joseUtil;
    this._tokenClient = new TokenClientCtor(this._settings);
  }

  var _proto = ResponseValidator.prototype;

  _proto.validateSigninResponse = function validateSigninResponse(state, response) {
    var _this = this;

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator.validateSigninResponse");
    return this._processSigninParams(state, response).then(function (response) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator.validateSigninResponse: state processed");
      return _this._validateTokens(state, response).then(function (response) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator.validateSigninResponse: tokens validated");
        return _this._processClaims(state, response).then(function (response) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator.validateSigninResponse: claims processed");
          return response;
        });
      });
    });
  };

  _proto.validateSignoutResponse = function validateSignoutResponse(state, response) {
    if (state.id !== response.state) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator.validateSignoutResponse: State does not match");
      return Promise.reject(new Error("State does not match"));
    } // now that we know the state matches, take the stored data
    // and set it into the response so callers can get their state
    // this is important for both success & error outcomes


    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator.validateSignoutResponse: state validated");
    response.state = state.data;

    if (response.error) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("ResponseValidator.validateSignoutResponse: Response was error", response.error);
      return Promise.reject(new _ErrorResponse_js__WEBPACK_IMPORTED_MODULE_4__["ErrorResponse"](response));
    }

    return Promise.resolve(response);
  };

  _proto._processSigninParams = function _processSigninParams(state, response) {
    if (state.id !== response.state) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: State does not match");
      return Promise.reject(new Error("State does not match"));
    }

    if (!state.client_id) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: No client_id on state");
      return Promise.reject(new Error("No client_id on state"));
    }

    if (!state.authority) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: No authority on state");
      return Promise.reject(new Error("No authority on state"));
    } // this allows the authority to be loaded from the signin state


    if (!this._settings.authority) {
      this._settings.authority = state.authority;
    } // ensure we're using the correct authority if the authority is not loaded from signin state
    else if (this._settings.authority && this._settings.authority !== state.authority) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state");
        return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
      } // this allows the client_id to be loaded from the signin state


    if (!this._settings.client_id) {
      this._settings.client_id = state.client_id;
    } // ensure we're using the correct client_id if the client_id is not loaded from signin state
    else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state");
        return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
      } // now that we know the state matches, take the stored data
    // and set it into the response so callers can get their state
    // this is important for both success & error outcomes


    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processSigninParams: state validated");
    response.state = state.data;

    if (response.error) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("ResponseValidator._processSigninParams: Response was error", response.error);
      return Promise.reject(new _ErrorResponse_js__WEBPACK_IMPORTED_MODULE_4__["ErrorResponse"](response));
    }

    if (state.nonce && !response.id_token) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: Expecting id_token in response");
      return Promise.reject(new Error("No id_token in response"));
    }

    if (!state.nonce && response.id_token) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: Not expecting id_token in response");
      return Promise.reject(new Error("Unexpected id_token in response"));
    }

    if (state.code_verifier && !response.code) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: Expecting code in response");
      return Promise.reject(new Error("No code in response"));
    }

    if (!state.code_verifier && response.code) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processSigninParams: Not expecting code in response");
      return Promise.reject(new Error("Unexpected code in response"));
    }

    if (!response.scope) {
      // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
      response.scope = state.scope;
    }

    return Promise.resolve(response);
  };

  _proto._processClaims = function _processClaims(state, response) {
    var _this2 = this;

    if (response.isOpenIdConnect) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processClaims: response is OIDC, processing claims");
      response.profile = this._filterProtocolClaims(response.profile);

      if (state.skipUserInfo !== true && this._settings.loadUserInfo && response.access_token) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processClaims: loading user info");
        return this._userInfoService.getClaims(response.access_token).then(function (claims) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processClaims: user info claims received from user info endpoint");

          if (claims.sub !== response.profile.sub) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in access_token");
            return Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"));
          }

          response.profile = _this2._mergeClaims(response.profile, claims);
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processClaims: user info claims received, updated profile:", response.profile);
          return response;
        });
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processClaims: not loading user info");
      }
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
    }

    return Promise.resolve(response);
  };

  _proto._mergeClaims = function _mergeClaims(claims1, claims2) {
    var result = Object.assign({}, claims1);

    for (var name in claims2) {
      var values = claims2[name];

      if (!Array.isArray(values)) {
        values = [values];
      }

      for (var i = 0; i < values.length; i++) {
        var value = values[i];

        if (!result[name]) {
          result[name] = value;
        } else if (Array.isArray(result[name])) {
          if (result[name].indexOf(value) < 0) {
            result[name].push(value);
          }
        } else if (result[name] !== value) {
          if (typeof value === 'object') {
            result[name] = this._mergeClaims(result[name], value);
          } else {
            result[name] = [result[name], value];
          }
        }
      }
    }

    return result;
  };

  _proto._filterProtocolClaims = function _filterProtocolClaims(claims) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);
    var result = Object.assign({}, claims);

    if (this._settings._filterProtocolClaims) {
      ProtocolClaims.forEach(function (type) {
        delete result[type];
      });
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", result);
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered");
    }

    return result;
  };

  _proto._validateTokens = function _validateTokens(state, response) {
    if (response.code) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateTokens: Validating code");
      return this._processCode(state, response);
    }

    if (response.id_token) {
      if (response.access_token) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateTokens: Validating id_token and access_token");
        return this._validateIdTokenAndAccessToken(state, response);
      }

      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateTokens: Validating id_token");
      return this._validateIdToken(state, response);
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateTokens: No code to process or id_token to validate");
    return Promise.resolve(response);
  };

  _proto._processCode = function _processCode(state, response) {
    var _this3 = this;

    var request = {
      client_id: state.client_id,
      client_secret: state.client_secret,
      code: response.code,
      redirect_uri: state.redirect_uri,
      code_verifier: state.code_verifier
    };

    if (state.extraTokenParams && typeof state.extraTokenParams === 'object') {
      Object.assign(request, state.extraTokenParams);
    }

    return this._tokenClient.exchangeCode(request).then(function (tokenResponse) {
      for (var key in tokenResponse) {
        response[key] = tokenResponse[key];
      }

      if (response.id_token) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processCode: token response successful, processing id_token");
        return _this3._validateIdTokenAttributes(state, response);
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._processCode: token response successful, returning response");
      }

      return response;
    });
  };

  _proto._validateIdTokenAttributes = function _validateIdTokenAttributes(state, response) {
    var _this4 = this;

    return this._metadataService.getIssuer().then(function (issuer) {
      var audience = state.client_id;
      var clockSkewInSeconds = _this4._settings.clockSkew;
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", clockSkewInSeconds);
      return _this4._joseUtil.validateJwtAttributes(response.id_token, issuer, audience, clockSkewInSeconds).then(function (payload) {
        if (state.nonce && state.nonce !== payload.nonce) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token");
          return Promise.reject(new Error("Invalid nonce in id_token"));
        }

        if (!payload.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token");
          return Promise.reject(new Error("No sub present in id_token"));
        }

        response.profile = payload;
        return response;
      });
    });
  };

  _proto._validateIdTokenAndAccessToken = function _validateIdTokenAndAccessToken(state, response) {
    var _this5 = this;

    return this._validateIdToken(state, response).then(function (response) {
      return _this5._validateAccessToken(response);
    });
  };

  _proto._validateIdToken = function _validateIdToken(state, response) {
    var _this6 = this;

    if (!state.nonce) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdToken: No nonce on state");
      return Promise.reject(new Error("No nonce on state"));
    }

    var jwt = this._joseUtil.parseJwt(response.id_token);

    if (!jwt || !jwt.header || !jwt.payload) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdToken: Failed to parse id_token", jwt);
      return Promise.reject(new Error("Failed to parse id_token"));
    }

    if (state.nonce !== jwt.payload.nonce) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdToken: Invalid nonce in id_token");
      return Promise.reject(new Error("Invalid nonce in id_token"));
    }

    var kid = jwt.header.kid;
    return this._metadataService.getIssuer().then(function (issuer) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateIdToken: Received issuer");
      return _this6._metadataService.getSigningKeys().then(function (keys) {
        if (!keys) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdToken: No signing keys from metadata");
          return Promise.reject(new Error("No signing keys from metadata"));
        }

        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateIdToken: Received signing keys");
        var key;

        if (!kid) {
          keys = _this6._filterByAlg(keys, jwt.header.alg);

          if (keys.length > 1) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata");
            return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
          } else {
            // kid is mandatory only when there are multiple keys in the referenced JWK Set document
            // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
            key = keys[0];
          }
        } else {
          key = keys.filter(function (key) {
            return key.kid === kid;
          })[0];
        }

        if (!key) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys");
          return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
        }

        var audience = state.client_id;
        var clockSkewInSeconds = _this6._settings.clockSkew;
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);
        return _this6._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateIdToken: JWT validation successful");

          if (!jwt.payload.sub) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateIdToken: No sub present in id_token");
            return Promise.reject(new Error("No sub present in id_token"));
          }

          response.profile = jwt.payload;
          return response;
        });
      });
    });
  };

  _proto._filterByAlg = function _filterByAlg(keys, alg) {
    var kty = null;

    if (alg.startsWith("RS")) {
      kty = "RSA";
    } else if (alg.startsWith("PS")) {
      kty = "PS";
    } else if (alg.startsWith("ES")) {
      kty = "EC";
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._filterByAlg: alg not supported: ", alg);
      return [];
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", kty);
    keys = keys.filter(function (key) {
      return key.kty === kty;
    });
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", kty, keys.length);
    return keys;
  };

  _proto._validateAccessToken = function _validateAccessToken(response) {
    if (!response.profile) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: No profile loaded from id_token");
      return Promise.reject(new Error("No profile loaded from id_token"));
    }

    if (!response.profile.at_hash) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: No at_hash in id_token");
      return Promise.reject(new Error("No at_hash in id_token"));
    }

    if (!response.id_token) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: No id_token");
      return Promise.reject(new Error("No id_token"));
    }

    var jwt = this._joseUtil.parseJwt(response.id_token);

    if (!jwt || !jwt.header) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: Failed to parse id_token", jwt);
      return Promise.reject(new Error("Failed to parse id_token"));
    }

    var hashAlg = jwt.header.alg;

    if (!hashAlg || hashAlg.length !== 5) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg);
      return Promise.reject(new Error("Unsupported alg: " + hashAlg));
    }

    var hashBits = hashAlg.substr(2, 3);

    if (!hashBits) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
      return Promise.reject(new Error("Unsupported alg: " + hashAlg));
    }

    hashBits = parseInt(hashBits);

    if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
      return Promise.reject(new Error("Unsupported alg: " + hashAlg));
    }

    var sha = "sha" + hashBits;

    var hash = this._joseUtil.hashString(response.access_token, sha);

    if (!hash) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: access_token hash failed:", sha);
      return Promise.reject(new Error("Failed to validate at_hash"));
    }

    var left = hash.substr(0, hash.length / 2);

    var left_b64u = this._joseUtil.hexToBase64Url(left);

    if (left_b64u !== response.profile.at_hash) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("ResponseValidator._validateAccessToken: Failed to validate at_hash", left_b64u, response.profile.at_hash);
      return Promise.reject(new Error("Failed to validate at_hash"));
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("ResponseValidator._validateAccessToken: success");
    return Promise.resolve(response);
  };

  return ResponseValidator;
}();

/***/ }),

/***/ "./src/SessionMonitor.js":
/*!*******************************!*\
  !*** ./src/SessionMonitor.js ***!
  \*******************************/
/*! exports provided: SessionMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMonitor", function() { return SessionMonitor; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _CheckSessionIFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Global.js */ "./src/Global.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



var SessionMonitor = /*#__PURE__*/function () {
  function SessionMonitor(userManager, CheckSessionIFrameCtor, timer) {
    var _this = this;

    if (CheckSessionIFrameCtor === void 0) {
      CheckSessionIFrameCtor = _CheckSessionIFrame_js__WEBPACK_IMPORTED_MODULE_1__["CheckSessionIFrame"];
    }

    if (timer === void 0) {
      timer = _Global_js__WEBPACK_IMPORTED_MODULE_2__["Global"].timer;
    }

    if (!userManager) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SessionMonitor.ctor: No user manager passed to SessionMonitor");
      throw new Error("userManager");
    }

    this._userManager = userManager;
    this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;
    this._timer = timer;

    this._userManager.events.addUserLoaded(this._start.bind(this));

    this._userManager.events.addUserUnloaded(this._stop.bind(this));

    this._userManager.getUser().then(function (user) {
      // doing this manually here since calling getUser 
      // doesn't trigger load event.
      if (user) {
        _this._start(user);
      } else if (_this._settings.monitorAnonymousSession) {
        _this._userManager.querySessionStatus().then(function (session) {
          var tmpUser = {
            session_state: session.session_state
          };

          if (session.sub && session.sid) {
            tmpUser.profile = {
              sub: session.sub,
              sid: session.sid
            };
          }

          _this._start(tmpUser);
        })["catch"](function (err) {
          // catch to suppress errors since we're in a ctor
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SessionMonitor ctor: error from querySessionStatus:", err.message);
        });
      }
    })["catch"](function (err) {
      // catch to suppress errors since we're in a ctor
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SessionMonitor ctor: error from getUser:", err.message);
    });
  }

  var _proto = SessionMonitor.prototype;

  _proto._start = function _start(user) {
    var _this2 = this;

    var session_state = user.session_state;

    if (session_state) {
      if (user.profile) {
        this._sub = user.profile.sub;
        this._sid = user.profile.sid;
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._start: session_state:", session_state, ", sub:", this._sub);
      } else {
        this._sub = undefined;
        this._sid = undefined;
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._start: session_state:", session_state, ", anonymous user");
      }

      if (!this._checkSessionIFrame) {
        this._metadataService.getCheckSessionIframe().then(function (url) {
          if (url) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._start: Initializing check session iframe");
            var client_id = _this2._client_id;
            var interval = _this2._checkSessionInterval;
            var stopOnError = _this2._stopCheckSessionOnError;
            _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval, stopOnError);

            _this2._checkSessionIFrame.load().then(function () {
              _this2._checkSessionIFrame.start(session_state);
            });
          } else {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].warn("SessionMonitor._start: No check session iframe found in the metadata");
          }
        })["catch"](function (err) {
          // catch to suppress errors since we're in non-promise callback
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SessionMonitor._start: Error from getCheckSessionIframe:", err.message);
        });
      } else {
        this._checkSessionIFrame.start(session_state);
      }
    }
  };

  _proto._stop = function _stop() {
    var _this3 = this;

    this._sub = undefined;
    this._sid = undefined;

    if (this._checkSessionIFrame) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._stop");

      this._checkSessionIFrame.stop();
    }

    if (this._settings.monitorAnonymousSession) {
      // using a timer to delay re-initialization to avoid race conditions during signout
      var timerHandle = this._timer.setInterval(function () {
        _this3._timer.clearInterval(timerHandle);

        _this3._userManager.querySessionStatus().then(function (session) {
          var tmpUser = {
            session_state: session.session_state
          };

          if (session.sub && session.sid) {
            tmpUser.profile = {
              sub: session.sub,
              sid: session.sid
            };
          }

          _this3._start(tmpUser);
        })["catch"](function (err) {
          // catch to suppress errors since we're in a callback
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SessionMonitor: error from querySessionStatus:", err.message);
        });
      }, 1000);
    }
  };

  _proto._callback = function _callback() {
    var _this4 = this;

    this._userManager.querySessionStatus().then(function (session) {
      var raiseEvent = true;

      if (session) {
        if (session.sub === _this4._sub) {
          raiseEvent = false;

          _this4._checkSessionIFrame.start(session.session_state);

          if (session.sid === _this4._sid) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
          } else {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);

            _this4._userManager.events._raiseUserSessionChanged();
          }
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._callback: Different subject signed into OP:", session.sub);
        }
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._callback: Subject no longer signed into OP");
      }

      if (raiseEvent) {
        if (_this4._sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event");

          _this4._userManager.events._raiseUserSignedOut();
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event");

          _this4._userManager.events._raiseUserSignedIn();
        }
      }
    })["catch"](function (err) {
      if (_this4._sub) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", err.message);

        _this4._userManager.events._raiseUserSignedOut();
      }
    });
  };

  _createClass(SessionMonitor, [{
    key: "_settings",
    get: function get() {
      return this._userManager.settings;
    }
  }, {
    key: "_metadataService",
    get: function get() {
      return this._userManager.metadataService;
    }
  }, {
    key: "_client_id",
    get: function get() {
      return this._settings.client_id;
    }
  }, {
    key: "_checkSessionInterval",
    get: function get() {
      return this._settings.checkSessionInterval;
    }
  }, {
    key: "_stopCheckSessionOnError",
    get: function get() {
      return this._settings.stopCheckSessionOnError;
    }
  }]);

  return SessionMonitor;
}();

/***/ }),

/***/ "./src/SigninRequest.js":
/*!******************************!*\
  !*** ./src/SigninRequest.js ***!
  \******************************/
/*! exports provided: SigninRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninRequest", function() { return SigninRequest; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");
/* harmony import */ var _SigninState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



var SigninRequest = /*#__PURE__*/function () {
  function SigninRequest(_ref) {
    var url = _ref.url,
        client_id = _ref.client_id,
        redirect_uri = _ref.redirect_uri,
        response_type = _ref.response_type,
        scope = _ref.scope,
        authority = _ref.authority,
        data = _ref.data,
        prompt = _ref.prompt,
        display = _ref.display,
        max_age = _ref.max_age,
        ui_locales = _ref.ui_locales,
        id_token_hint = _ref.id_token_hint,
        login_hint = _ref.login_hint,
        acr_values = _ref.acr_values,
        resource = _ref.resource,
        response_mode = _ref.response_mode,
        request = _ref.request,
        request_uri = _ref.request_uri,
        extraQueryParams = _ref.extraQueryParams,
        request_type = _ref.request_type,
        client_secret = _ref.client_secret,
        extraTokenParams = _ref.extraTokenParams,
        skipUserInfo = _ref.skipUserInfo;

    if (!url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SigninRequest.ctor: No url passed");
      throw new Error("url");
    }

    if (!client_id) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SigninRequest.ctor: No client_id passed");
      throw new Error("client_id");
    }

    if (!redirect_uri) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SigninRequest.ctor: No redirect_uri passed");
      throw new Error("redirect_uri");
    }

    if (!response_type) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SigninRequest.ctor: No response_type passed");
      throw new Error("response_type");
    }

    if (!scope) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SigninRequest.ctor: No scope passed");
      throw new Error("scope");
    }

    if (!authority) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SigninRequest.ctor: No authority passed");
      throw new Error("authority");
    }

    var oidc = SigninRequest.isOidc(response_type);
    var code = SigninRequest.isCode(response_type);

    if (!response_mode) {
      response_mode = SigninRequest.isCode(response_type) ? "query" : null;
    }

    this.state = new _SigninState_js__WEBPACK_IMPORTED_MODULE_2__["SigninState"]({
      nonce: oidc,
      data: data,
      client_id: client_id,
      authority: authority,
      redirect_uri: redirect_uri,
      code_verifier: code,
      request_type: request_type,
      response_mode: response_mode,
      client_secret: client_secret,
      scope: scope,
      extraTokenParams: extraTokenParams,
      skipUserInfo: skipUserInfo
    });
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "client_id", client_id);
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "redirect_uri", redirect_uri);
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "response_type", response_type);
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "scope", scope);
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "state", this.state.id);

    if (oidc) {
      url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "nonce", this.state.nonce);
    }

    if (code) {
      url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "code_challenge", this.state.code_challenge);
      url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "code_challenge_method", "S256");
    }

    var optional = {
      prompt: prompt,
      display: display,
      max_age: max_age,
      ui_locales: ui_locales,
      id_token_hint: id_token_hint,
      login_hint: login_hint,
      acr_values: acr_values,
      resource: resource,
      request: request,
      request_uri: request_uri,
      response_mode: response_mode
    };

    for (var key in optional) {
      if (optional[key]) {
        url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, key, optional[key]);
      }
    }

    for (var _key in extraQueryParams) {
      url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, _key, extraQueryParams[_key]);
    }

    this.url = url;
  }

  SigninRequest.isOidc = function isOidc(response_type) {
    var result = response_type.split(/\s+/g).filter(function (item) {
      return item === "id_token";
    });
    return !!result[0];
  };

  SigninRequest.isOAuth = function isOAuth(response_type) {
    var result = response_type.split(/\s+/g).filter(function (item) {
      return item === "token";
    });
    return !!result[0];
  };

  SigninRequest.isCode = function isCode(response_type) {
    var result = response_type.split(/\s+/g).filter(function (item) {
      return item === "code";
    });
    return !!result[0];
  };

  return SigninRequest;
}();

/***/ }),

/***/ "./src/SigninResponse.js":
/*!*******************************!*\
  !*** ./src/SigninResponse.js ***!
  \*******************************/
/*! exports provided: SigninResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninResponse", function() { return SigninResponse; });
/* harmony import */ var _UrlUtility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var OidcScope = "openid";
var SigninResponse = /*#__PURE__*/function () {
  function SigninResponse(url, delimiter) {
    if (delimiter === void 0) {
      delimiter = "#";
    }

    var values = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_0__["UrlUtility"].parseUrlFragment(url, delimiter);
    this.error = values.error;
    this.error_description = values.error_description;
    this.error_uri = values.error_uri;
    this.code = values.code;
    this.state = values.state;
    this.id_token = values.id_token;
    this.session_state = values.session_state;
    this.access_token = values.access_token;
    this.token_type = values.token_type;
    this.scope = values.scope;
    this.profile = undefined; // will be set from ResponseValidator

    this.expires_in = values.expires_in;
  }

  _createClass(SigninResponse, [{
    key: "expires_in",
    get: function get() {
      if (this.expires_at) {
        var now = parseInt(Date.now() / 1000);
        return this.expires_at - now;
      }

      return undefined;
    },
    set: function set(value) {
      var expires_in = parseInt(value);

      if (typeof expires_in === 'number' && expires_in > 0) {
        var now = parseInt(Date.now() / 1000);
        this.expires_at = now + expires_in;
      }
    }
  }, {
    key: "expired",
    get: function get() {
      var expires_in = this.expires_in;

      if (expires_in !== undefined) {
        return expires_in <= 0;
      }

      return undefined;
    }
  }, {
    key: "scopes",
    get: function get() {
      return (this.scope || "").split(" ");
    }
  }, {
    key: "isOpenIdConnect",
    get: function get() {
      return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
    }
  }]);

  return SigninResponse;
}();

/***/ }),

/***/ "./src/SigninState.js":
/*!****************************!*\
  !*** ./src/SigninState.js ***!
  \****************************/
/*! exports provided: SigninState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninState", function() { return SigninState; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State.js */ "./src/State.js");
/* harmony import */ var _JoseUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random.js */ "./src/random.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.




var SigninState = /*#__PURE__*/function (_State) {
  _inheritsLoose(SigninState, _State);

  function SigninState(_temp) {
    var _this;

    var _ref = _temp === void 0 ? {} : _temp,
        nonce = _ref.nonce,
        authority = _ref.authority,
        client_id = _ref.client_id,
        redirect_uri = _ref.redirect_uri,
        code_verifier = _ref.code_verifier,
        response_mode = _ref.response_mode,
        client_secret = _ref.client_secret,
        scope = _ref.scope,
        extraTokenParams = _ref.extraTokenParams,
        skipUserInfo = _ref.skipUserInfo;

    _this = _State.call(this, arguments[0]) || this;

    if (nonce === true) {
      _this._nonce = Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else if (nonce) {
      _this._nonce = nonce;
    }

    if (code_verifier === true) {
      // random() produces 32 length
      _this._code_verifier = Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])() + Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])() + Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else if (code_verifier) {
      _this._code_verifier = code_verifier;
    }

    if (_this.code_verifier) {
      var hash = _JoseUtil_js__WEBPACK_IMPORTED_MODULE_2__["JoseUtil"].hashString(_this.code_verifier, "SHA256");
      _this._code_challenge = _JoseUtil_js__WEBPACK_IMPORTED_MODULE_2__["JoseUtil"].hexToBase64Url(hash);
    }

    _this._redirect_uri = redirect_uri;
    _this._authority = authority;
    _this._client_id = client_id;
    _this._response_mode = response_mode;
    _this._client_secret = client_secret;
    _this._scope = scope;
    _this._extraTokenParams = extraTokenParams;
    _this._skipUserInfo = skipUserInfo;
    return _this;
  }

  var _proto = SigninState.prototype;

  _proto.toStorageString = function toStorageString() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SigninState.toStorageString");
    return JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      nonce: this.nonce,
      code_verifier: this.code_verifier,
      redirect_uri: this.redirect_uri,
      authority: this.authority,
      client_id: this.client_id,
      response_mode: this.response_mode,
      client_secret: this.client_secret,
      scope: this.scope,
      extraTokenParams: this.extraTokenParams,
      skipUserInfo: this.skipUserInfo
    });
  };

  SigninState.fromStorageString = function fromStorageString(storageString) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SigninState.fromStorageString");
    var data = JSON.parse(storageString);
    return new SigninState(data);
  };

  _createClass(SigninState, [{
    key: "nonce",
    get: function get() {
      return this._nonce;
    }
  }, {
    key: "authority",
    get: function get() {
      return this._authority;
    }
  }, {
    key: "client_id",
    get: function get() {
      return this._client_id;
    }
  }, {
    key: "redirect_uri",
    get: function get() {
      return this._redirect_uri;
    }
  }, {
    key: "code_verifier",
    get: function get() {
      return this._code_verifier;
    }
  }, {
    key: "code_challenge",
    get: function get() {
      return this._code_challenge;
    }
  }, {
    key: "response_mode",
    get: function get() {
      return this._response_mode;
    }
  }, {
    key: "client_secret",
    get: function get() {
      return this._client_secret;
    }
  }, {
    key: "scope",
    get: function get() {
      return this._scope;
    }
  }, {
    key: "extraTokenParams",
    get: function get() {
      return this._extraTokenParams;
    }
  }, {
    key: "skipUserInfo",
    get: function get() {
      return this._skipUserInfo;
    }
  }]);

  return SigninState;
}(_State_js__WEBPACK_IMPORTED_MODULE_1__["State"]);

/***/ }),

/***/ "./src/SignoutRequest.js":
/*!*******************************!*\
  !*** ./src/SignoutRequest.js ***!
  \*******************************/
/*! exports provided: SignoutRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutRequest", function() { return SignoutRequest; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State.js */ "./src/State.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



var SignoutRequest = function SignoutRequest(_ref) {
  var url = _ref.url,
      id_token_hint = _ref.id_token_hint,
      post_logout_redirect_uri = _ref.post_logout_redirect_uri,
      data = _ref.data,
      extraQueryParams = _ref.extraQueryParams,
      request_type = _ref.request_type;

  if (!url) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SignoutRequest.ctor: No url passed");
    throw new Error("url");
  }

  if (id_token_hint) {
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "id_token_hint", id_token_hint);
  }

  if (post_logout_redirect_uri) {
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);

    if (data) {
      this.state = new _State_js__WEBPACK_IMPORTED_MODULE_2__["State"]({
        data: data,
        request_type: request_type
      });
      url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, "state", this.state.id);
    }
  }

  for (var key in extraQueryParams) {
    url = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_1__["UrlUtility"].addQueryParam(url, key, extraQueryParams[key]);
  }

  this.url = url;
};

/***/ }),

/***/ "./src/SignoutResponse.js":
/*!********************************!*\
  !*** ./src/SignoutResponse.js ***!
  \********************************/
/*! exports provided: SignoutResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutResponse", function() { return SignoutResponse; });
/* harmony import */ var _UrlUtility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutResponse = function SignoutResponse(url) {
  var values = _UrlUtility_js__WEBPACK_IMPORTED_MODULE_0__["UrlUtility"].parseUrlFragment(url, "?");
  this.error = values.error;
  this.error_description = values.error_description;
  this.error_uri = values.error_uri;
  this.state = values.state;
};

/***/ }),

/***/ "./src/SilentRenewService.js":
/*!***********************************!*\
  !*** ./src/SilentRenewService.js ***!
  \***********************************/
/*! exports provided: SilentRenewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilentRenewService", function() { return SilentRenewService; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SilentRenewService = /*#__PURE__*/function () {
  function SilentRenewService(userManager) {
    this._userManager = userManager;
  }

  var _proto = SilentRenewService.prototype;

  _proto.start = function start() {
    if (!this._callback) {
      this._callback = this._tokenExpiring.bind(this);

      this._userManager.events.addAccessTokenExpiring(this._callback); // this will trigger loading of the user so the expiring events can be initialized


      this._userManager.getUser().then(function (user) {// deliberate nop
      })["catch"](function (err) {
        // catch to suppress errors since we're in a ctor
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SilentRenewService.start: Error from getUser:", err.message);
      });
    }
  };

  _proto.stop = function stop() {
    if (this._callback) {
      this._userManager.events.removeAccessTokenExpiring(this._callback);

      delete this._callback;
    }
  };

  _proto._tokenExpiring = function _tokenExpiring() {
    var _this = this;

    this._userManager.signinSilent().then(function (user) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
    }, function (err) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("SilentRenewService._tokenExpiring: Error from signinSilent:", err.message);

      _this._userManager.events._raiseSilentRenewError(err);
    });
  };

  return SilentRenewService;
}();

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random.js */ "./src/random.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var State = /*#__PURE__*/function () {
  function State(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        id = _ref.id,
        data = _ref.data,
        created = _ref.created,
        request_type = _ref.request_type;

    this._id = id || Object(_random_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this._data = data;

    if (typeof created === 'number' && created > 0) {
      this._created = created;
    } else {
      this._created = parseInt(Date.now() / 1000);
    }

    this._request_type = request_type;
  }

  var _proto = State.prototype;

  _proto.toStorageString = function toStorageString() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("State.toStorageString");
    return JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type
    });
  };

  State.fromStorageString = function fromStorageString(storageString) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("State.fromStorageString");
    return new State(JSON.parse(storageString));
  };

  State.clearStaleState = function clearStaleState(storage, age) {
    var cutoff = Date.now() / 1000 - age;
    return storage.getAllKeys().then(function (keys) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("State.clearStaleState: got keys", keys);
      var promises = [];

      var _loop = function _loop(i) {
        var key = keys[i];
        p = storage.get(key).then(function (item) {
          var remove = false;

          if (item) {
            try {
              var state = State.fromStorageString(item);
              _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("State.clearStaleState: got item from key: ", key, state.created);

              if (state.created <= cutoff) {
                remove = true;
              }
            } catch (e) {
              _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("State.clearStaleState: Error parsing state for key", key, e.message);
              remove = true;
            }
          } else {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("State.clearStaleState: no item in storage for key: ", key);
            remove = true;
          }

          if (remove) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("State.clearStaleState: removed item for key: ", key);
            return storage.remove(key);
          }
        });
        promises.push(p);
      };

      for (var i = 0; i < keys.length; i++) {
        var p;

        _loop(i);
      }

      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("State.clearStaleState: waiting on promise count:", promises.length);
      return Promise.all(promises);
    });
  };

  _createClass(State, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    }
  }, {
    key: "created",
    get: function get() {
      return this._created;
    }
  }, {
    key: "request_type",
    get: function get() {
      return this._request_type;
    }
  }]);

  return State;
}();

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global.js */ "./src/Global.js");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event.js */ "./src/Event.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



var TimerDuration = 5; // seconds

var Timer = /*#__PURE__*/function (_Event) {
  _inheritsLoose(Timer, _Event);

  function Timer(name, timer, nowFunc) {
    var _this;

    if (timer === void 0) {
      timer = _Global_js__WEBPACK_IMPORTED_MODULE_1__["Global"].timer;
    }

    if (nowFunc === void 0) {
      nowFunc = undefined;
    }

    _this = _Event.call(this, name) || this;
    _this._timer = timer;

    if (nowFunc) {
      _this._nowFunc = nowFunc;
    } else {
      _this._nowFunc = function () {
        return Date.now() / 1000;
      };
    }

    return _this;
  }

  var _proto = Timer.prototype;

  _proto.init = function init(duration) {
    if (duration <= 0) {
      duration = 1;
    }

    duration = parseInt(duration);
    var expiration = this.now + duration;

    if (this.expiration === expiration && this._timerHandle) {
      // no need to reinitialize to same expiration, so bail out
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
      return;
    }

    this.cancel();
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("Timer.init timer " + this._name + " for duration:", duration);
    this._expiration = expiration; // we're using a fairly short timer and then checking the expiration in the
    // callback to handle scenarios where the browser device sleeps, and then
    // the timers end up getting delayed.

    var timerDuration = TimerDuration;

    if (duration < timerDuration) {
      timerDuration = duration;
    }

    this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
  };

  _proto.cancel = function cancel() {
    if (this._timerHandle) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("Timer.cancel: ", this._name);

      this._timer.clearInterval(this._timerHandle);

      this._timerHandle = null;
    }
  };

  _proto._callback = function _callback() {
    var diff = this._expiration - this.now;
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("Timer.callback; " + this._name + " timer expires in:", diff);

    if (this._expiration <= this.now) {
      this.cancel();

      _Event.prototype.raise.call(this);
    }
  };

  _createClass(Timer, [{
    key: "now",
    get: function get() {
      return parseInt(this._nowFunc());
    }
  }, {
    key: "expiration",
    get: function get() {
      return this._expiration;
    }
  }]);

  return Timer;
}(_Event_js__WEBPACK_IMPORTED_MODULE_2__["Event"]);

/***/ }),

/***/ "./src/TokenClient.js":
/*!****************************!*\
  !*** ./src/TokenClient.js ***!
  \****************************/
/*! exports provided: TokenClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenClient", function() { return TokenClient; });
/* harmony import */ var _JsonService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");
/* harmony import */ var _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



var TokenClient = /*#__PURE__*/function () {
  function TokenClient(settings, JsonServiceCtor, MetadataServiceCtor) {
    if (JsonServiceCtor === void 0) {
      JsonServiceCtor = _JsonService_js__WEBPACK_IMPORTED_MODULE_0__["JsonService"];
    }

    if (MetadataServiceCtor === void 0) {
      MetadataServiceCtor = _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__["MetadataService"];
    }

    if (!settings) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("TokenClient.ctor: No settings passed");
      throw new Error("settings");
    }

    this._settings = settings;
    this._jsonService = new JsonServiceCtor();
    this._metadataService = new MetadataServiceCtor(this._settings);
  }

  var _proto = TokenClient.prototype;

  _proto.exchangeCode = function exchangeCode(args) {
    var _this = this;

    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.grant_type = args.grant_type || "authorization_code";
    args.client_id = args.client_id || this._settings.client_id;
    args.redirect_uri = args.redirect_uri || this._settings.redirect_uri;

    if (!args.code) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("TokenClient.exchangeCode: No code passed");
      return Promise.reject(new Error("A code is required"));
    }

    if (!args.redirect_uri) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("TokenClient.exchangeCode: No redirect_uri passed");
      return Promise.reject(new Error("A redirect_uri is required"));
    }

    if (!args.code_verifier) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("TokenClient.exchangeCode: No code_verifier passed");
      return Promise.reject(new Error("A code_verifier is required"));
    }

    if (!args.client_id) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("TokenClient.exchangeCode: No client_id passed");
      return Promise.reject(new Error("A client_id is required"));
    }

    return this._metadataService.getTokenEndpoint(false).then(function (url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("TokenClient.exchangeCode: Received token endpoint");
      return _this._jsonService.postForm(url, args).then(function (response) {
        _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("TokenClient.exchangeCode: response received");
        return response;
      });
    });
  };

  _proto.exchangeRefreshToken = function exchangeRefreshToken(args) {
    var _this2 = this;

    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.grant_type = args.grant_type || "refresh_token";
    args.client_id = args.client_id || this._settings.client_id;
    args.client_secret = args.client_secret || this._settings.client_secret;

    if (!args.refresh_token) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("TokenClient.exchangeRefreshToken: No refresh_token passed");
      return Promise.reject(new Error("A refresh_token is required"));
    }

    if (!args.client_id) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("TokenClient.exchangeRefreshToken: No client_id passed");
      return Promise.reject(new Error("A client_id is required"));
    }

    return this._metadataService.getTokenEndpoint(false).then(function (url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("TokenClient.exchangeRefreshToken: Received token endpoint");
      return _this2._jsonService.postForm(url, args).then(function (response) {
        _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("TokenClient.exchangeRefreshToken: response received");
        return response;
      });
    });
  };

  return TokenClient;
}();

/***/ }),

/***/ "./src/TokenRevocationClient.js":
/*!**************************************!*\
  !*** ./src/TokenRevocationClient.js ***!
  \**************************************/
/*! exports provided: TokenRevocationClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenRevocationClient", function() { return TokenRevocationClient; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Global.js */ "./src/Global.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



var AccessTokenTypeHint = "access_token";
var RefreshTokenTypeHint = "refresh_token";
var TokenRevocationClient = /*#__PURE__*/function () {
  function TokenRevocationClient(settings, XMLHttpRequestCtor, MetadataServiceCtor) {
    if (XMLHttpRequestCtor === void 0) {
      XMLHttpRequestCtor = _Global_js__WEBPACK_IMPORTED_MODULE_2__["Global"].XMLHttpRequest;
    }

    if (MetadataServiceCtor === void 0) {
      MetadataServiceCtor = _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__["MetadataService"];
    }

    if (!settings) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("TokenRevocationClient.ctor: No settings provided");
      throw new Error("No settings provided.");
    }

    this._settings = settings;
    this._XMLHttpRequestCtor = XMLHttpRequestCtor;
    this._metadataService = new MetadataServiceCtor(this._settings);
  }

  var _proto = TokenRevocationClient.prototype;

  _proto.revoke = function revoke(token, required, type) {
    var _this = this;

    if (type === void 0) {
      type = "access_token";
    }

    if (!token) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("TokenRevocationClient.revoke: No token provided");
      throw new Error("No token provided.");
    }

    if (type !== AccessTokenTypeHint && type != RefreshTokenTypeHint) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("TokenRevocationClient.revoke: Invalid token type");
      throw new Error("Invalid token type.");
    }

    return this._metadataService.getRevocationEndpoint().then(function (url) {
      if (!url) {
        if (required) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("TokenRevocationClient.revoke: Revocation not supported");
          throw new Error("Revocation not supported");
        } // not required, so don't error and just return


        return;
      }

      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("TokenRevocationClient.revoke: Revoking " + type);
      var client_id = _this._settings.client_id;
      var client_secret = _this._settings.client_secret;
      return _this._revoke(url, client_id, client_secret, token, type);
    });
  };

  _proto._revoke = function _revoke(url, client_id, client_secret, token, type) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var xhr = new _this2._XMLHttpRequestCtor();
      xhr.open("POST", url);

      xhr.onload = function () {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("TokenRevocationClient.revoke: HTTP response received, status", xhr.status);

        if (xhr.status === 200) {
          resolve();
        } else {
          reject(Error(xhr.statusText + " (" + xhr.status + ")"));
        }
      };

      xhr.onerror = function () {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("TokenRevocationClient.revoke: Network Error.");
        reject("Network Error");
      };

      var body = "client_id=" + encodeURIComponent(client_id);

      if (client_secret) {
        body += "&client_secret=" + encodeURIComponent(client_secret);
      }

      body += "&token_type_hint=" + encodeURIComponent(type);
      body += "&token=" + encodeURIComponent(token);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(body);
    });
  };

  return TokenRevocationClient;
}();

/***/ }),

/***/ "./src/UrlUtility.js":
/*!***************************!*\
  !*** ./src/UrlUtility.js ***!
  \***************************/
/*! exports provided: UrlUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlUtility", function() { return UrlUtility; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global.js */ "./src/Global.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var UrlUtility = /*#__PURE__*/function () {
  function UrlUtility() {}

  UrlUtility.addQueryParam = function addQueryParam(url, name, value) {
    if (url.indexOf('?') < 0) {
      url += "?";
    }

    if (url[url.length - 1] !== "?") {
      url += "&";
    }

    url += encodeURIComponent(name);
    url += "=";
    url += encodeURIComponent(value);
    return url;
  };

  UrlUtility.parseUrlFragment = function parseUrlFragment(value, delimiter, global) {
    if (delimiter === void 0) {
      delimiter = "#";
    }

    if (global === void 0) {
      global = _Global_js__WEBPACK_IMPORTED_MODULE_1__["Global"];
    }

    if (typeof value !== 'string') {
      value = global.location.href;
    }

    var idx = value.lastIndexOf(delimiter);

    if (idx >= 0) {
      value = value.substr(idx + 1);
    }

    if (delimiter === "?") {
      // if we're doing query, then strip off hash fragment before we parse
      idx = value.indexOf('#');

      if (idx >= 0) {
        value = value.substr(0, idx);
      }
    }

    var params = {},
        regex = /([^&=]+)=([^&]*)/g,
        m;
    var counter = 0;

    while (m = regex.exec(value)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);

      if (counter++ > 50) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", value);
        return {
          error: "Response exceeded expected number of parameters"
        };
      }
    }

    for (var prop in params) {
      return params;
    }

    return {};
  };

  return UrlUtility;
}();

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var User = /*#__PURE__*/function () {
  function User(_ref) {
    var id_token = _ref.id_token,
        session_state = _ref.session_state,
        access_token = _ref.access_token,
        refresh_token = _ref.refresh_token,
        token_type = _ref.token_type,
        scope = _ref.scope,
        profile = _ref.profile,
        expires_at = _ref.expires_at,
        state = _ref.state;
    this.id_token = id_token;
    this.session_state = session_state;
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.token_type = token_type;
    this.scope = scope;
    this.profile = profile;
    this.expires_at = expires_at;
    this.state = state;
  }

  var _proto = User.prototype;

  _proto.toStorageString = function toStorageString() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("User.toStorageString");
    return JSON.stringify({
      id_token: this.id_token,
      session_state: this.session_state,
      access_token: this.access_token,
      refresh_token: this.refresh_token,
      token_type: this.token_type,
      scope: this.scope,
      profile: this.profile,
      expires_at: this.expires_at
    });
  };

  User.fromStorageString = function fromStorageString(storageString) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("User.fromStorageString");
    return new User(JSON.parse(storageString));
  };

  _createClass(User, [{
    key: "expires_in",
    get: function get() {
      if (this.expires_at) {
        var now = parseInt(Date.now() / 1000);
        return this.expires_at - now;
      }

      return undefined;
    },
    set: function set(value) {
      var expires_in = parseInt(value);

      if (typeof expires_in === 'number' && expires_in > 0) {
        var now = parseInt(Date.now() / 1000);
        this.expires_at = now + expires_in;
      }
    }
  }, {
    key: "expired",
    get: function get() {
      var expires_in = this.expires_in;

      if (expires_in !== undefined) {
        return expires_in <= 0;
      }

      return undefined;
    }
  }, {
    key: "scopes",
    get: function get() {
      return (this.scope || "").split(" ");
    }
  }]);

  return User;
}();

/***/ }),

/***/ "./src/UserInfoService.js":
/*!********************************!*\
  !*** ./src/UserInfoService.js ***!
  \********************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var _JsonService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");
/* harmony import */ var _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _JoseUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.




var UserInfoService = /*#__PURE__*/function () {
  function UserInfoService(settings, JsonServiceCtor, MetadataServiceCtor, joseUtil) {
    if (JsonServiceCtor === void 0) {
      JsonServiceCtor = _JsonService_js__WEBPACK_IMPORTED_MODULE_0__["JsonService"];
    }

    if (MetadataServiceCtor === void 0) {
      MetadataServiceCtor = _MetadataService_js__WEBPACK_IMPORTED_MODULE_1__["MetadataService"];
    }

    if (joseUtil === void 0) {
      joseUtil = _JoseUtil_js__WEBPACK_IMPORTED_MODULE_3__["JoseUtil"];
    }

    if (!settings) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("UserInfoService.ctor: No settings passed");
      throw new Error("settings");
    }

    this._settings = settings;
    this._jsonService = new JsonServiceCtor(undefined, undefined, this._getClaimsFromJwt.bind(this));
    this._metadataService = new MetadataServiceCtor(this._settings);
    this._joseUtil = joseUtil;
  }

  var _proto = UserInfoService.prototype;

  _proto.getClaims = function getClaims(token) {
    var _this = this;

    if (!token) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("UserInfoService.getClaims: No token passed");
      return Promise.reject(new Error("A token is required"));
    }

    return this._metadataService.getUserInfoEndpoint().then(function (url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService.getClaims: received userinfo url", url);
      return _this._jsonService.getJson(url, token).then(function (claims) {
        _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService.getClaims: claims received", claims);
        return claims;
      });
    });
  };

  _proto._getClaimsFromJwt = function _getClaimsFromJwt(req) {
    var _this2 = this;

    try {
      var jwt = this._joseUtil.parseJwt(req.responseText);

      if (!jwt || !jwt.header || !jwt.payload) {
        _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", jwt);
        return Promise.reject(new Error("Failed to parse id_token"));
      }

      var kid = jwt.header.kid;
      var issuerPromise;

      switch (this._settings.userInfoJwtIssuer) {
        case 'OP':
          issuerPromise = this._metadataService.getIssuer();
          break;

        case 'ANY':
          issuerPromise = Promise.resolve(jwt.payload.iss);
          break;

        default:
          issuerPromise = Promise.resolve(this._settings.userInfoJwtIssuer);
          break;
      }

      return issuerPromise.then(function (issuer) {
        _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService._getClaimsFromJwt: Received issuer:" + issuer);
        return _this2._metadataService.getSigningKeys().then(function (keys) {
          if (!keys) {
            _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("UserInfoService._getClaimsFromJwt: No signing keys from metadata");
            return Promise.reject(new Error("No signing keys from metadata"));
          }

          _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService._getClaimsFromJwt: Received signing keys");
          var key;

          if (!kid) {
            keys = _this2._filterByAlg(keys, jwt.header.alg);

            if (keys.length > 1) {
              _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata");
              return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
            } else {
              // kid is mandatory only when there are multiple keys in the referenced JWK Set document
              // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
              key = keys[0];
            }
          } else {
            key = keys.filter(function (key) {
              return key.kid === kid;
            })[0];
          }

          if (!key) {
            _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys");
            return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
          }

          var audience = _this2._settings.client_id;
          var clockSkewInSeconds = _this2._settings.clockSkew;
          _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);
          return _this2._joseUtil.validateJwt(req.responseText, key, issuer, audience, clockSkewInSeconds, undefined, true).then(function () {
            _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService._getClaimsFromJwt: JWT validation successful");
            return jwt.payload;
          });
        });
      });
      return;
    } catch (e) {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message);
      reject(e);
      return;
    }
  };

  _proto._filterByAlg = function _filterByAlg(keys, alg) {
    var kty = null;

    if (alg.startsWith("RS")) {
      kty = "RSA";
    } else if (alg.startsWith("PS")) {
      kty = "PS";
    } else if (alg.startsWith("ES")) {
      kty = "EC";
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService._filterByAlg: alg not supported: ", alg);
      return [];
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", kty);
    keys = keys.filter(function (key) {
      return key.kty === kty;
    });
    _Log_js__WEBPACK_IMPORTED_MODULE_2__["Log"].debug("UserInfoService._filterByAlg: Number of keys that match kty: ", kty, keys.length);
    return keys;
  };

  return UserInfoService;
}();

/***/ }),

/***/ "./src/UserManager.js":
/*!****************************!*\
  !*** ./src/UserManager.js ***!
  \****************************/
/*! exports provided: UserManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManager", function() { return UserManager; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _OidcClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OidcClient.js */ "./src/OidcClient.js");
/* harmony import */ var _UserManagerSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserManagerSettings.js */ "./src/UserManagerSettings.js");
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User.js */ "./src/User.js");
/* harmony import */ var _UserManagerEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserManagerEvents.js */ "./src/UserManagerEvents.js");
/* harmony import */ var _SilentRenewService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SilentRenewService.js */ "./src/SilentRenewService.js");
/* harmony import */ var _SessionMonitor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SessionMonitor.js */ "./src/SessionMonitor.js");
/* harmony import */ var _TokenRevocationClient_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TokenRevocationClient.js */ "./src/TokenRevocationClient.js");
/* harmony import */ var _TokenClient_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");
/* harmony import */ var _JoseUtil_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.










var UserManager = /*#__PURE__*/function (_OidcClient) {
  _inheritsLoose(UserManager, _OidcClient);

  function UserManager(settings, SilentRenewServiceCtor, SessionMonitorCtor, TokenRevocationClientCtor, TokenClientCtor, joseUtil) {
    var _this;

    if (settings === void 0) {
      settings = {};
    }

    if (SilentRenewServiceCtor === void 0) {
      SilentRenewServiceCtor = _SilentRenewService_js__WEBPACK_IMPORTED_MODULE_5__["SilentRenewService"];
    }

    if (SessionMonitorCtor === void 0) {
      SessionMonitorCtor = _SessionMonitor_js__WEBPACK_IMPORTED_MODULE_6__["SessionMonitor"];
    }

    if (TokenRevocationClientCtor === void 0) {
      TokenRevocationClientCtor = _TokenRevocationClient_js__WEBPACK_IMPORTED_MODULE_7__["TokenRevocationClient"];
    }

    if (TokenClientCtor === void 0) {
      TokenClientCtor = _TokenClient_js__WEBPACK_IMPORTED_MODULE_8__["TokenClient"];
    }

    if (joseUtil === void 0) {
      joseUtil = _JoseUtil_js__WEBPACK_IMPORTED_MODULE_9__["JoseUtil"];
    }

    if (!(settings instanceof _UserManagerSettings_js__WEBPACK_IMPORTED_MODULE_2__["UserManagerSettings"])) {
      settings = new _UserManagerSettings_js__WEBPACK_IMPORTED_MODULE_2__["UserManagerSettings"](settings);
    }

    _this = _OidcClient.call(this, settings) || this;
    _this._events = new _UserManagerEvents_js__WEBPACK_IMPORTED_MODULE_4__["UserManagerEvents"](settings);
    _this._silentRenewService = new SilentRenewServiceCtor(_assertThisInitialized(_this)); // order is important for the following properties; these services depend upon the events.

    if (_this.settings.automaticSilentRenew) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew");

      _this.startSilentRenew();
    }

    if (_this.settings.monitorSession) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.ctor: monitorSession is configured, setting up session monitor");
      _this._sessionMonitor = new SessionMonitorCtor(_assertThisInitialized(_this));
    }

    _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
    _this._tokenClient = new TokenClientCtor(_this._settings);
    _this._joseUtil = joseUtil;
    return _this;
  }

  var _proto = UserManager.prototype;

  _proto.getUser = function getUser() {
    var _this2 = this;

    return this._loadUser().then(function (user) {
      if (user) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.getUser: user loaded");

        _this2._events.load(user, false);

        return user;
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.getUser: user not found in storage");
        return null;
      }
    });
  };

  _proto.removeUser = function removeUser() {
    var _this3 = this;

    return this.storeUser(null).then(function () {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.removeUser: user removed from storage");

      _this3._events.unload();
    });
  };

  _proto.signinRedirect = function signinRedirect(args) {
    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.request_type = "si:r";
    var navParams = {
      useReplaceToNavigate: args.useReplaceToNavigate
    };
    return this._signinStart(args, this._redirectNavigator, navParams).then(function () {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinRedirect: successful");
    });
  };

  _proto.signinRedirectCallback = function signinRedirectCallback(url) {
    return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
      if (user.profile && user.profile.sub) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
      } else {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinRedirectCallback: no sub");
      }

      return user;
    });
  };

  _proto.signinPopup = function signinPopup(args) {
    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.request_type = "si:p";
    var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;

    if (!url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured");
      return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
    }

    args.redirect_uri = url;
    args.display = "popup";
    return this._signin(args, this._popupNavigator, {
      startUrl: url,
      popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
      popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
    }).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinPopup: no sub");
        }
      }

      return user;
    });
  };

  _proto.signinPopupCallback = function signinPopupCallback(url) {
    return this._signinCallback(url, this._popupNavigator).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinPopupCallback: successful, signed in sub: ", user.profile.sub);
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinPopupCallback: no sub");
        }
      }

      return user;
    })["catch"](function (err) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error( true && err.message);
    });
  };

  _proto.signinSilent = function signinSilent(args) {
    var _this4 = this;

    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.request_type = "si:s"; // first determine if we have a refresh token, or need to use iframe

    return this._loadUser().then(function (user) {
      if (user && user.refresh_token) {
        args.refresh_token = user.refresh_token;
        return _this4._useRefreshToken(args);
      } else {
        args.id_token_hint = args.id_token_hint || _this4.settings.includeIdTokenInSilentRenew && user && user.id_token;

        if (user && _this4._settings.validateSubOnSilentRenew) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.signinSilent, subject prior to silent renew: ", user.profile.sub);
          args.current_sub = user.profile.sub;
        }

        return _this4._signinSilentIframe(args);
      }
    });
  };

  _proto._useRefreshToken = function _useRefreshToken(args) {
    var _this5 = this;

    if (args === void 0) {
      args = {};
    }

    return this._tokenClient.exchangeRefreshToken(args).then(function (result) {
      if (!result) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager._useRefreshToken: No response returned from token endpoint");
        return Promise.reject("No response returned from token endpoint");
      }

      if (!result.access_token) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager._useRefreshToken: No access token returned from token endpoint");
        return Promise.reject("No access token returned from token endpoint");
      }

      return _this5._loadUser().then(function (user) {
        if (user) {
          var idTokenValidation = Promise.resolve();

          if (result.id_token) {
            idTokenValidation = _this5._validateIdTokenFromTokenRefreshToken(user.profile, result.id_token);
          }

          return idTokenValidation.then(function () {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._useRefreshToken: refresh token response success");
            user.id_token = result.id_token;
            user.access_token = result.access_token;
            user.refresh_token = result.refresh_token || user.refresh_token;
            user.expires_in = result.expires_in;
            return _this5.storeUser(user).then(function () {
              _this5._events.load(user);

              return user;
            });
          });
        } else {
          return null;
        }
      });
    });
  };

  _proto._validateIdTokenFromTokenRefreshToken = function _validateIdTokenFromTokenRefreshToken(profile, id_token) {
    var _this6 = this;

    return this._metadataService.getIssuer().then(function (issuer) {
      return _this6._joseUtil.validateJwtAttributes(id_token, issuer, _this6._settings.client_id, _this6._settings.clockSkew).then(function (payload) {
        if (!payload) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token");
          return Promise.reject(new Error("Failed to validate id_token"));
        }

        if (payload.sub !== profile.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
          return Promise.reject(new Error("sub in id_token does not match current sub"));
        }

        if (payload.auth_time && payload.auth_time !== profile.auth_time) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
          return Promise.reject(new Error("auth_time in id_token does not match original auth_time"));
        }

        if (payload.azp && payload.azp !== profile.azp) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
          return Promise.reject(new Error("azp in id_token does not match original azp"));
        }

        if (!payload.azp && profile.azp) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
          return Promise.reject(new Error("azp not in id_token, but present in original id_token"));
        }
      });
    });
  };

  _proto._signinSilentIframe = function _signinSilentIframe(args) {
    if (args === void 0) {
      args = {};
    }

    var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;

    if (!url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager.signinSilent: No silent_redirect_uri configured");
      return Promise.reject(new Error("No silent_redirect_uri configured"));
    }

    args.redirect_uri = url;
    args.prompt = args.prompt || "none";
    return this._signin(args, this._iframeNavigator, {
      startUrl: url,
      silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
    }).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinSilent: successful, signed in sub: ", user.profile.sub);
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinSilent: no sub");
        }
      }

      return user;
    });
  };

  _proto.signinSilentCallback = function signinSilentCallback(url) {
    return this._signinCallback(url, this._iframeNavigator).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinSilentCallback: successful, signed in sub: ", user.profile.sub);
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signinSilentCallback: no sub");
        }
      }

      return user;
    });
  };

  _proto.signinCallback = function signinCallback(url) {
    var _this7 = this;

    return this.readSigninResponseState(url).then(function (_ref) {
      var state = _ref.state,
          response = _ref.response;

      if (state.request_type === "si:r") {
        return _this7.signinRedirectCallback(url);
      }

      if (state.request_type === "si:p") {
        return _this7.signinPopupCallback(url);
      }

      if (state.request_type === "si:s") {
        return _this7.signinSilentCallback(url);
      }

      return Promise.reject(new Error("invalid response_type in state"));
    });
  };

  _proto.signoutCallback = function signoutCallback(url, keepOpen) {
    var _this8 = this;

    return this.readSignoutResponseState(url).then(function (_ref2) {
      var state = _ref2.state,
          response = _ref2.response;

      if (state) {
        if (state.request_type === "so:r") {
          return _this8.signoutRedirectCallback(url);
        }

        if (state.request_type === "so:p") {
          return _this8.signoutPopupCallback(url, keepOpen);
        }

        return Promise.reject(new Error("invalid response_type in state"));
      }

      return response;
    });
  };

  _proto.querySessionStatus = function querySessionStatus(args) {
    var _this9 = this;

    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.request_type = "si:s"; // this acts like a signin silent

    var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;

    if (!url) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].error("UserManager.querySessionStatus: No silent_redirect_uri configured");
      return Promise.reject(new Error("No silent_redirect_uri configured"));
    }

    args.redirect_uri = url;
    args.prompt = "none";
    args.response_type = args.response_type || this.settings.query_status_response_type;
    args.scope = args.scope || "openid";
    args.skipUserInfo = true;
    return this._signinStart(args, this._iframeNavigator, {
      startUrl: url,
      silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
    }).then(function (navResponse) {
      return _this9.processSigninResponse(navResponse.url).then(function (signinResponse) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.querySessionStatus: got signin response");

        if (signinResponse.session_state && signinResponse.profile.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
          return {
            session_state: signinResponse.session_state,
            sub: signinResponse.profile.sub,
            sid: signinResponse.profile.sid
          };
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("querySessionStatus successful, user not authenticated");
        }
      })["catch"](function (err) {
        if (err.session_state && _this9.settings.monitorAnonymousSession) {
          if (err.message == "login_required" || err.message == "consent_required" || err.message == "interaction_required" || err.message == "account_selection_required") {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.querySessionStatus: querySessionStatus success for anonymous user");
            return {
              session_state: err.session_state
            };
          }
        }

        throw err;
      });
    });
  };

  _proto._signin = function _signin(args, navigator, navigatorParams) {
    var _this10 = this;

    if (navigatorParams === void 0) {
      navigatorParams = {};
    }

    return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
      return _this10._signinEnd(navResponse.url, args);
    });
  };

  _proto._signinStart = function _signinStart(args, navigator, navigatorParams) {
    var _this11 = this;

    if (navigatorParams === void 0) {
      navigatorParams = {};
    }

    return navigator.prepare(navigatorParams).then(function (handle) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinStart: got navigator window handle");
      return _this11.createSigninRequest(args).then(function (signinRequest) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinStart: got signin request");
        navigatorParams.url = signinRequest.url;
        navigatorParams.id = signinRequest.state.id;
        return handle.navigate(navigatorParams);
      })["catch"](function (err) {
        if (handle.close) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinStart: Error after preparing navigator, closing navigator window");
          handle.close();
        }

        throw err;
      });
    });
  };

  _proto._signinEnd = function _signinEnd(url, args) {
    var _this12 = this;

    if (args === void 0) {
      args = {};
    }

    return this.processSigninResponse(url).then(function (signinResponse) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinEnd: got signin response");
      var user = new _User_js__WEBPACK_IMPORTED_MODULE_3__["User"](signinResponse);

      if (args.current_sub) {
        if (args.current_sub !== user.profile.sub) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", user.profile.sub);
          return Promise.reject(new Error("login_required"));
        } else {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinEnd: current user matches user returned from signin");
        }
      }

      return _this12.storeUser(user).then(function () {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinEnd: user stored");

        _this12._events.load(user);

        return user;
      });
    });
  };

  _proto._signinCallback = function _signinCallback(url, navigator) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signinCallback");
    return navigator.callback(url);
  };

  _proto.signoutRedirect = function signoutRedirect(args) {
    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.request_type = "so:r";
    var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;

    if (postLogoutRedirectUri) {
      args.post_logout_redirect_uri = postLogoutRedirectUri;
    }

    var navParams = {
      useReplaceToNavigate: args.useReplaceToNavigate
    };
    return this._signoutStart(args, this._redirectNavigator, navParams).then(function () {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signoutRedirect: successful");
    });
  };

  _proto.signoutRedirectCallback = function signoutRedirectCallback(url) {
    return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signoutRedirectCallback: successful");
      return response;
    });
  };

  _proto.signoutPopup = function signoutPopup(args) {
    if (args === void 0) {
      args = {};
    }

    args = Object.assign({}, args);
    args.request_type = "so:p";
    var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
    args.post_logout_redirect_uri = url;
    args.display = "popup";

    if (args.post_logout_redirect_uri) {
      // we're putting a dummy entry in here because we
      // need a unique id from the state for notification
      // to the parent window, which is necessary if we
      // plan to return back to the client after signout
      // and so we can close the popup after signout
      args.state = args.state || {};
    }

    return this._signout(args, this._popupNavigator, {
      startUrl: url,
      popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
      popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
    }).then(function () {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signoutPopup: successful");
    });
  };

  _proto.signoutPopupCallback = function signoutPopupCallback(url, keepOpen) {
    if (typeof keepOpen === 'undefined' && typeof url === 'boolean') {
      keepOpen = url;
      url = null;
    }

    var delimiter = '?';
    return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.signoutPopupCallback: successful");
    });
  };

  _proto._signout = function _signout(args, navigator, navigatorParams) {
    var _this13 = this;

    if (navigatorParams === void 0) {
      navigatorParams = {};
    }

    return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
      return _this13._signoutEnd(navResponse.url);
    });
  };

  _proto._signoutStart = function _signoutStart(args, navigator, navigatorParams) {
    var _this14 = this;

    if (args === void 0) {
      args = {};
    }

    if (navigatorParams === void 0) {
      navigatorParams = {};
    }

    return navigator.prepare(navigatorParams).then(function (handle) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signoutStart: got navigator window handle");
      return _this14._loadUser().then(function (user) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signoutStart: loaded current user from storage");
        var revokePromise = _this14._settings.revokeAccessTokenOnSignout ? _this14._revokeInternal(user) : Promise.resolve();
        return revokePromise.then(function () {
          var id_token = args.id_token_hint || user && user.id_token;

          if (id_token) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signoutStart: Setting id_token into signout request");
            args.id_token_hint = id_token;
          }

          return _this14.removeUser().then(function () {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signoutStart: user removed, creating signout request");
            return _this14.createSignoutRequest(args).then(function (signoutRequest) {
              _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signoutStart: got signout request");
              navigatorParams.url = signoutRequest.url;

              if (signoutRequest.state) {
                navigatorParams.id = signoutRequest.state.id;
              }

              return handle.navigate(navigatorParams);
            });
          });
        });
      })["catch"](function (err) {
        if (handle.close) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window");
          handle.close();
        }

        throw err;
      });
    });
  };

  _proto._signoutEnd = function _signoutEnd(url) {
    return this.processSignoutResponse(url).then(function (signoutResponse) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._signoutEnd: got signout response");
      return signoutResponse;
    });
  };

  _proto.revokeAccessToken = function revokeAccessToken() {
    var _this15 = this;

    return this._loadUser().then(function (user) {
      return _this15._revokeInternal(user, true).then(function (success) {
        if (success) {
          _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.revokeAccessToken: removing token properties from user and re-storing");
          user.access_token = null;
          user.refresh_token = null;
          user.expires_at = null;
          user.token_type = null;
          return _this15.storeUser(user).then(function () {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.revokeAccessToken: user stored");

            _this15._events.load(user);
          });
        }
      });
    }).then(function () {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].info("UserManager.revokeAccessToken: access token revoked successfully");
    });
  };

  _proto._revokeInternal = function _revokeInternal(user, required) {
    var _this16 = this;

    if (user) {
      var access_token = user.access_token;
      var refresh_token = user.refresh_token;
      return this._revokeAccessTokenInternal(access_token, required).then(function (atSuccess) {
        return _this16._revokeRefreshTokenInternal(refresh_token, required).then(function (rtSuccess) {
          if (!atSuccess && !rtSuccess) {
            _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format");
          }

          return atSuccess || rtSuccess;
        });
      });
    }

    return Promise.resolve(false);
  };

  _proto._revokeAccessTokenInternal = function _revokeAccessTokenInternal(access_token, required) {
    // check for JWT vs. reference token
    if (!access_token || access_token.indexOf('.') >= 0) {
      return Promise.resolve(false);
    }

    return this._tokenRevocationClient.revoke(access_token, required).then(function () {
      return true;
    });
  };

  _proto._revokeRefreshTokenInternal = function _revokeRefreshTokenInternal(refresh_token, required) {
    if (!refresh_token) {
      return Promise.resolve(false);
    }

    return this._tokenRevocationClient.revoke(refresh_token, required, "refresh_token").then(function () {
      return true;
    });
  };

  _proto.startSilentRenew = function startSilentRenew() {
    this._silentRenewService.start();
  };

  _proto.stopSilentRenew = function stopSilentRenew() {
    this._silentRenewService.stop();
  };

  _proto._loadUser = function _loadUser() {
    return this._userStore.get(this._userStoreKey).then(function (storageString) {
      if (storageString) {
        _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._loadUser: user storageString loaded");
        return _User_js__WEBPACK_IMPORTED_MODULE_3__["User"].fromStorageString(storageString);
      }

      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager._loadUser: no user storageString");
      return null;
    });
  };

  _proto.storeUser = function storeUser(user) {
    if (user) {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManager.storeUser: storing user");
      var storageString = user.toStorageString();
      return this._userStore.set(this._userStoreKey, storageString);
    } else {
      _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("storeUser.storeUser: removing user");
      return this._userStore.remove(this._userStoreKey);
    }
  };

  _createClass(UserManager, [{
    key: "_redirectNavigator",
    get: function get() {
      return this.settings.redirectNavigator;
    }
  }, {
    key: "_popupNavigator",
    get: function get() {
      return this.settings.popupNavigator;
    }
  }, {
    key: "_iframeNavigator",
    get: function get() {
      return this.settings.iframeNavigator;
    }
  }, {
    key: "_userStore",
    get: function get() {
      return this.settings.userStore;
    }
  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
  }, {
    key: "_userStoreKey",
    get: function get() {
      return "user:" + this.settings.authority + ":" + this.settings.client_id;
    }
  }]);

  return UserManager;
}(_OidcClient_js__WEBPACK_IMPORTED_MODULE_1__["OidcClient"]);

/***/ }),

/***/ "./src/UserManagerEvents.js":
/*!**********************************!*\
  !*** ./src/UserManagerEvents.js ***!
  \**********************************/
/*! exports provided: UserManagerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerEvents", function() { return UserManagerEvents; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _AccessTokenEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessTokenEvents.js */ "./src/AccessTokenEvents.js");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event.js */ "./src/Event.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



var UserManagerEvents = /*#__PURE__*/function (_AccessTokenEvents) {
  _inheritsLoose(UserManagerEvents, _AccessTokenEvents);

  function UserManagerEvents(settings) {
    var _this;

    _this = _AccessTokenEvents.call(this, settings) || this;
    _this._userLoaded = new _Event_js__WEBPACK_IMPORTED_MODULE_2__["Event"]("User loaded");
    _this._userUnloaded = new _Event_js__WEBPACK_IMPORTED_MODULE_2__["Event"]("User unloaded");
    _this._silentRenewError = new _Event_js__WEBPACK_IMPORTED_MODULE_2__["Event"]("Silent renew error");
    _this._userSignedIn = new _Event_js__WEBPACK_IMPORTED_MODULE_2__["Event"]("User signed in");
    _this._userSignedOut = new _Event_js__WEBPACK_IMPORTED_MODULE_2__["Event"]("User signed out");
    _this._userSessionChanged = new _Event_js__WEBPACK_IMPORTED_MODULE_2__["Event"]("User session changed");
    return _this;
  }

  var _proto = UserManagerEvents.prototype;

  _proto.load = function load(user, raiseEvent) {
    if (raiseEvent === void 0) {
      raiseEvent = true;
    }

    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManagerEvents.load");

    _AccessTokenEvents.prototype.load.call(this, user);

    if (raiseEvent) {
      this._userLoaded.raise(user);
    }
  };

  _proto.unload = function unload() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManagerEvents.unload");

    _AccessTokenEvents.prototype.unload.call(this);

    this._userUnloaded.raise();
  };

  _proto.addUserLoaded = function addUserLoaded(cb) {
    this._userLoaded.addHandler(cb);
  };

  _proto.removeUserLoaded = function removeUserLoaded(cb) {
    this._userLoaded.removeHandler(cb);
  };

  _proto.addUserUnloaded = function addUserUnloaded(cb) {
    this._userUnloaded.addHandler(cb);
  };

  _proto.removeUserUnloaded = function removeUserUnloaded(cb) {
    this._userUnloaded.removeHandler(cb);
  };

  _proto.addSilentRenewError = function addSilentRenewError(cb) {
    this._silentRenewError.addHandler(cb);
  };

  _proto.removeSilentRenewError = function removeSilentRenewError(cb) {
    this._silentRenewError.removeHandler(cb);
  };

  _proto._raiseSilentRenewError = function _raiseSilentRenewError(e) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManagerEvents._raiseSilentRenewError", e.message);

    this._silentRenewError.raise(e);
  };

  _proto.addUserSignedIn = function addUserSignedIn(cb) {
    this._userSignedIn.addHandler(cb);
  };

  _proto.removeUserSignedIn = function removeUserSignedIn(cb) {
    this._userSignedIn.removeHandler(cb);
  };

  _proto._raiseUserSignedIn = function _raiseUserSignedIn() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManagerEvents._raiseUserSignedIn");

    this._userSignedIn.raise();
  };

  _proto.addUserSignedOut = function addUserSignedOut(cb) {
    this._userSignedOut.addHandler(cb);
  };

  _proto.removeUserSignedOut = function removeUserSignedOut(cb) {
    this._userSignedOut.removeHandler(cb);
  };

  _proto._raiseUserSignedOut = function _raiseUserSignedOut() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManagerEvents._raiseUserSignedOut");

    this._userSignedOut.raise();
  };

  _proto.addUserSessionChanged = function addUserSessionChanged(cb) {
    this._userSessionChanged.addHandler(cb);
  };

  _proto.removeUserSessionChanged = function removeUserSessionChanged(cb) {
    this._userSessionChanged.removeHandler(cb);
  };

  _proto._raiseUserSessionChanged = function _raiseUserSessionChanged() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("UserManagerEvents._raiseUserSessionChanged");

    this._userSessionChanged.raise();
  };

  return UserManagerEvents;
}(_AccessTokenEvents_js__WEBPACK_IMPORTED_MODULE_1__["AccessTokenEvents"]);

/***/ }),

/***/ "./src/UserManagerSettings.js":
/*!************************************!*\
  !*** ./src/UserManagerSettings.js ***!
  \************************************/
/*! exports provided: UserManagerSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerSettings", function() { return UserManagerSettings; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _OidcClientSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");
/* harmony import */ var _RedirectNavigator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedirectNavigator.js */ "./src/RedirectNavigator.js");
/* harmony import */ var _PopupNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopupNavigator.js */ "./src/PopupNavigator.js");
/* harmony import */ var _IFrameNavigator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IFrameNavigator.js */ "./src/IFrameNavigator.js");
/* harmony import */ var _WebStorageStateStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Global.js */ "./src/Global.js");
/* harmony import */ var _SigninRequest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.








var DefaultAccessTokenExpiringNotificationTime = 60;
var DefaultCheckSessionInterval = 2000;
var UserManagerSettings = /*#__PURE__*/function (_OidcClientSettings) {
  _inheritsLoose(UserManagerSettings, _OidcClientSettings);

  function UserManagerSettings(_temp) {
    var _this;

    var _ref = _temp === void 0 ? {} : _temp,
        popup_redirect_uri = _ref.popup_redirect_uri,
        popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
        popupWindowFeatures = _ref.popupWindowFeatures,
        popupWindowTarget = _ref.popupWindowTarget,
        silent_redirect_uri = _ref.silent_redirect_uri,
        silentRequestTimeout = _ref.silentRequestTimeout,
        _ref$automaticSilentR = _ref.automaticSilentRenew,
        automaticSilentRenew = _ref$automaticSilentR === void 0 ? false : _ref$automaticSilentR,
        _ref$validateSubOnSil = _ref.validateSubOnSilentRenew,
        validateSubOnSilentRenew = _ref$validateSubOnSil === void 0 ? false : _ref$validateSubOnSil,
        _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
        includeIdTokenInSilentRenew = _ref$includeIdTokenIn === void 0 ? true : _ref$includeIdTokenIn,
        _ref$monitorSession = _ref.monitorSession,
        monitorSession = _ref$monitorSession === void 0 ? true : _ref$monitorSession,
        _ref$monitorAnonymous = _ref.monitorAnonymousSession,
        monitorAnonymousSession = _ref$monitorAnonymous === void 0 ? false : _ref$monitorAnonymous,
        _ref$checkSessionInte = _ref.checkSessionInterval,
        checkSessionInterval = _ref$checkSessionInte === void 0 ? DefaultCheckSessionInterval : _ref$checkSessionInte,
        _ref$stopCheckSession = _ref.stopCheckSessionOnError,
        stopCheckSessionOnError = _ref$stopCheckSession === void 0 ? true : _ref$stopCheckSession,
        query_status_response_type = _ref.query_status_response_type,
        _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
        revokeAccessTokenOnSignout = _ref$revokeAccessToke === void 0 ? false : _ref$revokeAccessToke,
        _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
        accessTokenExpiringNotificationTime = _ref$accessTokenExpir === void 0 ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
        _ref$redirectNavigato = _ref.redirectNavigator,
        redirectNavigator = _ref$redirectNavigato === void 0 ? new _RedirectNavigator_js__WEBPACK_IMPORTED_MODULE_2__["RedirectNavigator"]() : _ref$redirectNavigato,
        _ref$popupNavigator = _ref.popupNavigator,
        popupNavigator = _ref$popupNavigator === void 0 ? new _PopupNavigator_js__WEBPACK_IMPORTED_MODULE_3__["PopupNavigator"]() : _ref$popupNavigator,
        _ref$iframeNavigator = _ref.iframeNavigator,
        iframeNavigator = _ref$iframeNavigator === void 0 ? new _IFrameNavigator_js__WEBPACK_IMPORTED_MODULE_4__["IFrameNavigator"]() : _ref$iframeNavigator,
        _ref$userStore = _ref.userStore,
        userStore = _ref$userStore === void 0 ? new _WebStorageStateStore_js__WEBPACK_IMPORTED_MODULE_5__["WebStorageStateStore"]({
      store: _Global_js__WEBPACK_IMPORTED_MODULE_6__["Global"].sessionStorage
    }) : _ref$userStore;

    _this = _OidcClientSettings.call(this, arguments[0]) || this;
    _this._popup_redirect_uri = popup_redirect_uri;
    _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
    _this._popupWindowFeatures = popupWindowFeatures;
    _this._popupWindowTarget = popupWindowTarget;
    _this._silent_redirect_uri = silent_redirect_uri;
    _this._silentRequestTimeout = silentRequestTimeout;
    _this._automaticSilentRenew = automaticSilentRenew;
    _this._validateSubOnSilentRenew = validateSubOnSilentRenew;
    _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
    _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;
    _this._monitorSession = monitorSession;
    _this._monitorAnonymousSession = monitorAnonymousSession;
    _this._checkSessionInterval = checkSessionInterval;
    _this._stopCheckSessionOnError = stopCheckSessionOnError;

    if (query_status_response_type) {
      _this._query_status_response_type = query_status_response_type;
    } else if (arguments[0] && arguments[0].response_type) {
      _this._query_status_response_type = _SigninRequest_js__WEBPACK_IMPORTED_MODULE_7__["SigninRequest"].isOidc(arguments[0].response_type) ? "id_token" : "code";
    } else {
      _this._query_status_response_type = "id_token";
    }

    _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;
    _this._redirectNavigator = redirectNavigator;
    _this._popupNavigator = popupNavigator;
    _this._iframeNavigator = iframeNavigator;
    _this._userStore = userStore;
    return _this;
  }

  _createClass(UserManagerSettings, [{
    key: "popup_redirect_uri",
    get: function get() {
      return this._popup_redirect_uri;
    }
  }, {
    key: "popup_post_logout_redirect_uri",
    get: function get() {
      return this._popup_post_logout_redirect_uri;
    }
  }, {
    key: "popupWindowFeatures",
    get: function get() {
      return this._popupWindowFeatures;
    }
  }, {
    key: "popupWindowTarget",
    get: function get() {
      return this._popupWindowTarget;
    }
  }, {
    key: "silent_redirect_uri",
    get: function get() {
      return this._silent_redirect_uri;
    }
  }, {
    key: "silentRequestTimeout",
    get: function get() {
      return this._silentRequestTimeout;
    }
  }, {
    key: "automaticSilentRenew",
    get: function get() {
      return this._automaticSilentRenew;
    }
  }, {
    key: "validateSubOnSilentRenew",
    get: function get() {
      return this._validateSubOnSilentRenew;
    }
  }, {
    key: "includeIdTokenInSilentRenew",
    get: function get() {
      return this._includeIdTokenInSilentRenew;
    }
  }, {
    key: "accessTokenExpiringNotificationTime",
    get: function get() {
      return this._accessTokenExpiringNotificationTime;
    }
  }, {
    key: "monitorSession",
    get: function get() {
      return this._monitorSession;
    }
  }, {
    key: "monitorAnonymousSession",
    get: function get() {
      return this._monitorAnonymousSession;
    }
  }, {
    key: "checkSessionInterval",
    get: function get() {
      return this._checkSessionInterval;
    }
  }, {
    key: "stopCheckSessionOnError",
    get: function get() {
      return this._stopCheckSessionOnError;
    }
  }, {
    key: "query_status_response_type",
    get: function get() {
      return this._query_status_response_type;
    }
  }, {
    key: "revokeAccessTokenOnSignout",
    get: function get() {
      return this._revokeAccessTokenOnSignout;
    }
  }, {
    key: "redirectNavigator",
    get: function get() {
      return this._redirectNavigator;
    }
  }, {
    key: "popupNavigator",
    get: function get() {
      return this._popupNavigator;
    }
  }, {
    key: "iframeNavigator",
    get: function get() {
      return this._iframeNavigator;
    }
  }, {
    key: "userStore",
    get: function get() {
      return this._userStore;
    }
  }]);

  return UserManagerSettings;
}(_OidcClientSettings_js__WEBPACK_IMPORTED_MODULE_1__["OidcClientSettings"]);

/***/ }),

/***/ "./src/WebStorageStateStore.js":
/*!*************************************!*\
  !*** ./src/WebStorageStateStore.js ***!
  \*************************************/
/*! exports provided: WebStorageStateStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageStateStore", function() { return WebStorageStateStore; });
/* harmony import */ var _Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.js */ "./src/Log.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global.js */ "./src/Global.js");
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


var WebStorageStateStore = /*#__PURE__*/function () {
  function WebStorageStateStore(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === void 0 ? "oidc." : _ref$prefix,
        _ref$store = _ref.store,
        store = _ref$store === void 0 ? _Global_js__WEBPACK_IMPORTED_MODULE_1__["Global"].localStorage : _ref$store;

    this._store = store;
    this._prefix = prefix;
  }

  var _proto = WebStorageStateStore.prototype;

  _proto.set = function set(key, value) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("WebStorageStateStore.set", key);
    key = this._prefix + key;

    this._store.setItem(key, value);

    return Promise.resolve();
  };

  _proto.get = function get(key) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("WebStorageStateStore.get", key);
    key = this._prefix + key;

    var item = this._store.getItem(key);

    return Promise.resolve(item);
  };

  _proto.remove = function remove(key) {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("WebStorageStateStore.remove", key);
    key = this._prefix + key;

    var item = this._store.getItem(key);

    this._store.removeItem(key);

    return Promise.resolve(item);
  };

  _proto.getAllKeys = function getAllKeys() {
    _Log_js__WEBPACK_IMPORTED_MODULE_0__["Log"].debug("WebStorageStateStore.getAllKeys");
    var keys = [];

    for (var index = 0; index < this._store.length; index++) {
      var key = this._store.key(index);

      if (key.indexOf(this._prefix) === 0) {
        keys.push(key.substr(this._prefix.length));
      }
    }

    return Promise.resolve(keys);
  };

  return WebStorageStateStore;
}();

/***/ }),

/***/ "./src/crypto/rsa.js":
/*!***************************!*\
  !*** ./src/crypto/rsa.js ***!
  \***************************/
/*! exports provided: jws, KeyUtil, X509, crypto, hextob64u, b64tohex, AllowedSigningAlgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jws", function() { return jws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyUtil", function() { return KeyUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X509", function() { return X509; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crypto", function() { return crypto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hextob64u", function() { return hextob64u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64tohex", function() { return b64tohex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowedSigningAlgs", function() { return AllowedSigningAlgs; });
/* harmony import */ var jsbn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbn */ "./node_modules/jsbn/index.js");
/* harmony import */ var jsbn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_2__);
/*
Based on the work of Auth0
https://github.com/auth0/idtoken-verifier
https://github.com/auth0/idtoken-verifier/blob/master/LICENSE
Which is based on the work of Tom Wu
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/

/*
 * To support most basic OpenId use cases (using RSA256), we can get away without
 * requiring the full jrsasign feature set (and resulting massive bundle).
 *
 * - Support RSA 256 algorithm (optionally could support RSA* family)
 * - Parse JWT tokens using the (n) parameter.
 * - Verify signature of id_tokens
 * - Verify at_hash of access_tokens
 * - Perform common base64 encoding/decoding tasks.
 */



var BigInteger = jsbn__WEBPACK_IMPORTED_MODULE_0___default.a.BigInteger;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";
var Base64 = {
  b64tohex: function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3

    var slop;

    for (i = 0; i < s.length; ++i) {
      if (s.charAt(i) === b64pad) break;
      var v = b64map.indexOf(s.charAt(i));
      if (v < 0) continue;

      if (k === 0) {
        ret += String.fromCharCode(v >> 2);
        slop = v & 3;
        k = 1;
      } else if (k === 1) {
        ret += String.fromCharCode(slop << 2 | v >> 4);
        slop = v & 0xf;
        k = 2;
      } else if (k === 2) {
        ret += String.fromCharCode(slop);
        ret += String.fromCharCode(v >> 2);
        slop = v & 3;
        k = 3;
      } else {
        ret += String.fromCharCode(slop << 2 | v >> 4);
        ret += String.fromCharCode(v & 0xf);
        k = 0;
      }
    }

    if (k === 1) ret += String.fromCharCode(slop << 2);
    return ret;
  },
  hexToBase64: function hexToBase64(h) {
    var i;
    var c;
    var ret = "";

    for (i = 0; i + 3 <= h.length; i += 3) {
      c = parseInt(h.substring(i, i + 3), 16);
      ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }

    if (i + 1 === h.length) {
      c = parseInt(h.substring(i, i + 1), 16);
      ret += b64map.charAt(c << 2);
    } else if (i + 2 === h.length) {
      c = parseInt(h.substring(i, i + 2), 16);
      ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }

    if (b64pad) while ((ret.length & 3) > 0) {
      ret += b64pad;
    }
    return ret;
  },
  padding: function padding(str) {
    var mod = str.length % 4;
    var pad = 4 - mod;

    if (mod === 0) {
      return str;
    }

    return str + new Array(1 + pad).join('=');
  },
  byteArrayToHex: function byteArrayToHex(raw) {
    var HEX = '';

    for (var i = 0; i < raw.length; i++) {
      var _hex = raw[i].toString(16);

      HEX += _hex.length === 2 ? _hex : '0' + _hex;
    }

    return HEX;
  },
  decodeToHEX: function decodeToHEX(str) {
    return Base64.byteArrayToHex(base64_js__WEBPACK_IMPORTED_MODULE_2___default.a.toByteArray(Base64.padding(str)));
  },
  base64ToBase64Url: function base64ToBase64Url(s) {
    s = s.replace(/=/g, "");
    s = s.replace(/\+/g, "-");
    s = s.replace(/\//g, "_");
    return s;
  },
  urlDecode: function urlDecode(str) {
    str = str.replace(/-/g, '+') // Convert '-' to '+'
    .replace(/_/g, '/') // Convert '_' to '/'
    .replace(/\s/g, ' '); // Convert '\s' to ' '

    return atob(str);
  }
};
var DigestInfoHead = {
  sha1: '3021300906052b0e03021a05000414',
  sha224: '302d300d06096086480165030402040500041c',
  sha256: '3031300d060960864801650304020105000420',
  sha384: '3041300d060960864801650304020205000430',
  sha512: '3051300d060960864801650304020305000440',
  md2: '3020300c06082a864886f70d020205000410',
  md5: '3020300c06082a864886f70d020505000410',
  ripemd160: '3021300906052b2403020105000414'
};
var DigestAlgs = {
  sha256: crypto_js_sha256__WEBPACK_IMPORTED_MODULE_1___default.a,
  SHA256: crypto_js_sha256__WEBPACK_IMPORTED_MODULE_1___default.a
};

function RSAVerifier(modulus, exp) {
  this.n = null;
  this.e = 0;

  if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
    this.n = new BigInteger(modulus, 16);
    this.e = parseInt(exp, 16);
  } else {
    throw new Error('Invalid key data');
  }
}

function getAlgorithmFromDigest(hDigestInfo) {
  for (var algName in DigestInfoHead) {
    var head = DigestInfoHead[algName];
    var len = head.length;

    if (hDigestInfo.substring(0, len) === head) {
      return {
        alg: algName,
        hash: hDigestInfo.substring(len)
      };
    }
  }

  return [];
}

RSAVerifier.prototype.verify = function (msg, encsig) {
  encsig = Base64.decodeToHEX(encsig);
  encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/ig, '');
  var sig = new BigInteger(encsig, 16);

  if (sig.bitLength() > this.n.bitLength()) {
    throw new Error('Signature does not match with the key modulus.');
  }

  var decryptedSig = sig.modPowInt(this.e, this.n);
  var digest = decryptedSig.toString(16).replace(/^1f+00/, '');
  var digestInfo = getAlgorithmFromDigest(digest);

  if (digestInfo.length === 0) {
    return false;
  }

  if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
    throw new Error('Hashing algorithm is not supported.');
  }

  var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
  return digestInfo.hash === msgHash;
};

var AllowedSigningAlgs = ['RS256'];
var jws = {
  JWS: {
    parse: function parse(token) {
      var parts = token.split('.');
      var header;
      var payload; // This diverges from Auth0's implementation, which throws rather than
      // returning undefined

      if (parts.length !== 3) {
        return undefined;
      }

      try {
        header = JSON.parse(Base64.urlDecode(parts[0]));
        payload = JSON.parse(Base64.urlDecode(parts[1]));
      } catch (e) {
        return new Error('Token header or payload is not valid JSON');
      }

      return {
        headerObj: header,
        payloadObj: payload
      };
    },
    verify: function verify(jwt, key, allowedSigningAlgs) {
      if (allowedSigningAlgs === void 0) {
        allowedSigningAlgs = [];
      }

      allowedSigningAlgs.forEach(function (alg) {
        if (AllowedSigningAlgs.indexOf(alg) === -1) {
          throw new Error('Invalid signing algorithm: ' + alg);
        }
      });
      var verify = new RSAVerifier(key.n, key.e);
      var parts = jwt.split('.');
      var headerAndPayload = [parts[0], parts[1]].join('.');
      return verify.verify(headerAndPayload, parts[2]);
    }
  }
};
var KeyUtil = {
  /**
   * Returns decoded keys in Hex format for use in crypto functions.
   * Supports modulus/exponent-style keys.
   *
   * @param {object} key the security key
   * @returns
   */
  getKey: function getKey(key) {
    if (key.kty === 'RSA') {
      return {
        e: Base64.decodeToHEX(key.e),
        n: Base64.decodeToHEX(key.n)
      };
    }

    return null;
  }
};
var X509 = {
  getPublicKeyFromCertPEM: function getPublicKeyFromCertPEM() {
    throw new Error('Not implemented. Use the full oidc-client library if you need support for X509.');
  }
};
var crypto = {
  Util: {
    hashString: function hashString(value, alg) {
      var hashFunc = DigestAlgs[alg];
      return hashFunc(value).toString();
    }
  }
};

function hextob64u(s) {
  if (s.length % 2 === 1) {
    s = '0' + s;
  }

  return Base64.base64ToBase64Url(Base64.hexToBase64(s));
}

var b64tohex = Base64.b64tohex;


/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return random; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Generates RFC4122 version 4 guid ()
 */

function random() {
  return uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()().replace(/-/g, '');
}

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! exports provided: Version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
var Version = "1.10.1";


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovLy8uL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tTZXNzaW9uSUZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9JRnJhbWVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxJbXBsLmpzIiwid2VicGFjazovLy8uL3NyYy9Kb3NlVXRpbFJzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSnNvblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkaXJlY3ROYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9uTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWdub3V0UmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWxlbnRSZW5ld1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9rZW5DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXJsVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlckluZm9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXJFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jcnlwdG8vcnNhLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vdmVyc2lvbi5qcyJdLCJuYW1lcyI6WyJWZXJzaW9uIiwiTG9nIiwiT2lkY0NsaWVudCIsIk9pZGNDbGllbnRTZXR0aW5ncyIsIldlYlN0b3JhZ2VTdGF0ZVN0b3JlIiwiSW5NZW1vcnlXZWJTdG9yYWdlIiwiVXNlck1hbmFnZXIiLCJBY2Nlc3NUb2tlbkV2ZW50cyIsIk1ldGFkYXRhU2VydmljZSIsIkNvcmRvdmFQb3B1cE5hdmlnYXRvciIsIkNvcmRvdmFJRnJhbWVOYXZpZ2F0b3IiLCJDaGVja1Nlc3Npb25JRnJhbWUiLCJUb2tlblJldm9jYXRpb25DbGllbnQiLCJTZXNzaW9uTW9uaXRvciIsIkdsb2JhbCIsIlVzZXIiLCJEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSIsImFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciIsIlRpbWVyIiwiYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIiLCJfYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJfYWNjZXNzVG9rZW5FeHBpcmluZyIsIl9hY2Nlc3NUb2tlbkV4cGlyZWQiLCJsb2FkIiwiY29udGFpbmVyIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc19pbiIsInVuZGVmaW5lZCIsImR1cmF0aW9uIiwiZGVidWciLCJleHBpcmluZyIsImluaXQiLCJjYW5jZWwiLCJleHBpcmVkIiwidW5sb2FkIiwiYWRkQWNjZXNzVG9rZW5FeHBpcmluZyIsImNiIiwiYWRkSGFuZGxlciIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmciLCJyZW1vdmVIYW5kbGVyIiwiYWRkQWNjZXNzVG9rZW5FeHBpcmVkIiwicmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkIiwiRGVmYXVsdEludGVydmFsIiwiY2FsbGJhY2siLCJjbGllbnRfaWQiLCJ1cmwiLCJpbnRlcnZhbCIsInN0b3BPbkVycm9yIiwiX2NhbGxiYWNrIiwiX2NsaWVudF9pZCIsIl91cmwiLCJfaW50ZXJ2YWwiLCJfc3RvcE9uRXJyb3IiLCJpZHgiLCJpbmRleE9mIiwiX2ZyYW1lX29yaWdpbiIsInN1YnN0ciIsIl9mcmFtZSIsIndpbmRvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJfYm91bmRNZXNzYWdlRXZlbnQiLCJfbWVzc2FnZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9yaWdpbiIsInNvdXJjZSIsImNvbnRlbnRXaW5kb3ciLCJkYXRhIiwiZXJyb3IiLCJzdG9wIiwic3RhcnQiLCJzZXNzaW9uX3N0YXRlIiwiX3Nlc3Npb25fc3RhdGUiLCJzZW5kIiwicG9zdE1lc3NhZ2UiLCJfdGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwcmVwYXJlIiwicGFyYW1zIiwicG9wdXBXaW5kb3dGZWF0dXJlcyIsInBvcHVwIiwiQ29yZG92YVBvcHVwV2luZG93IiwiRGVmYXVsdFBvcHVwRmVhdHVyZXMiLCJEZWZhdWx0UG9wdXBUYXJnZXQiLCJfcHJvbWlzZSIsInJlamVjdCIsIl9yZXNvbHZlIiwiX3JlamVjdCIsImZlYXR1cmVzIiwidGFyZ2V0IiwicG9wdXBXaW5kb3dUYXJnZXQiLCJyZWRpcmVjdF91cmkiLCJzdGFydFVybCIsIl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZCIsImNvcmRvdmFNZXRhZGF0YSIsInNvbWUiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJuYXZpZ2F0ZSIsIl9lcnJvciIsImNvcmRvdmEiLCJyZXF1aXJlIiwibWV0YWRhdGEiLCJfcG9wdXAiLCJJbkFwcEJyb3dzZXIiLCJvcGVuIiwiX2V4aXRDYWxsYmFja0V2ZW50IiwiX2V4aXRDYWxsYmFjayIsIl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50IiwiX2xvYWRTdGFydENhbGxiYWNrIiwicHJvbWlzZSIsImV2ZW50IiwiX3N1Y2Nlc3MiLCJtZXNzYWdlIiwiX2NsZWFudXAiLCJFcnJvciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVycm9yUmVzcG9uc2UiLCJlcnJvcl9kZXNjcmlwdGlvbiIsImVycm9yX3VyaSIsInN0YXRlIiwiRXZlbnQiLCJfbmFtZSIsIl9jYWxsYmFja3MiLCJwdXNoIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInJhaXNlIiwiaSIsImxlbmd0aCIsInRpbWVyIiwiaGFuZGxlIiwidGVzdGluZyIsInJlcXVlc3QiLCJfdGVzdGluZyIsInNldFhNTEh0dHBSZXF1ZXN0IiwibmV3UmVxdWVzdCIsImxvY2F0aW9uIiwibG9jYWxTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJYTUxIdHRwUmVxdWVzdCIsIklGcmFtZU5hdmlnYXRvciIsImZyYW1lIiwiSUZyYW1lV2luZG93Iiwibm90aWZ5UGFyZW50IiwiRGVmYXVsdFRpbWVvdXQiLCJ0aW1lb3V0Iiwic2lsZW50UmVxdWVzdFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIl9vcmlnaW4iLCJmcmFtZUVsZW1lbnQiLCJocmVmIiwicGFyZW50IiwicHJvdG9jb2wiLCJob3N0IiwiX2RhdGEiLCJnZXRJdGVtIiwia2V5Iiwic2V0SXRlbSIsInZhbHVlIiwicmVtb3ZlSXRlbSIsImluZGV4IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldEpvc2VVdGlsIiwiandzIiwiS2V5VXRpbCIsIlg1MDkiLCJjcnlwdG8iLCJoZXh0b2I2NHUiLCJiNjR0b2hleCIsIkFsbG93ZWRTaWduaW5nQWxncyIsInBhcnNlSnd0Iiwiand0IiwidG9rZW4iLCJKV1MiLCJwYXJzZSIsImhlYWRlciIsImhlYWRlck9iaiIsInBheWxvYWQiLCJwYXlsb2FkT2JqIiwidmFsaWRhdGVKd3QiLCJpc3N1ZXIiLCJhdWRpZW5jZSIsImNsb2NrU2tldyIsIm5vdyIsInRpbWVJbnNlbnNpdGl2ZSIsImt0eSIsIm4iLCJnZXRLZXkiLCJ4NWMiLCJoZXgiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydEhleCIsImNydiIsIngiLCJ5IiwiSm9zZVV0aWwiLCJfdmFsaWRhdGVKd3QiLCJ2YWxpZGF0ZUp3dEF0dHJpYnV0ZXMiLCJwYXJzZUludCIsIkRhdGUiLCJpc3MiLCJhdWQiLCJ2YWxpZEF1ZGllbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiYXpwIiwibG93ZXJOb3ciLCJ1cHBlck5vdyIsImlhdCIsIm5iZiIsImV4cCIsInRoZW4iLCJ2ZXJpZnkiLCJoYXNoU3RyaW5nIiwiYWxnIiwiVXRpbCIsImhleFRvQmFzZTY0VXJsIiwiSnNvblNlcnZpY2UiLCJhZGRpdGlvbmFsQ29udGVudFR5cGVzIiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiand0SGFuZGxlciIsIl9jb250ZW50VHlwZXMiLCJzbGljZSIsIl9YTUxIdHRwUmVxdWVzdCIsIl9qd3RIYW5kbGVyIiwiZ2V0SnNvbiIsInJlcSIsImFsbG93ZWRDb250ZW50VHlwZXMiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiZm91bmQiLCJmaW5kIiwic3RhcnRzV2l0aCIsIkpTT04iLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJwb3N0Rm9ybSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5vcExvZ2dlciIsImluZm8iLCJ3YXJuIiwiTk9ORSIsIkVSUk9SIiwiV0FSTiIsIklORk8iLCJERUJVRyIsImxvZ2dlciIsImxldmVsIiwicmVzZXQiLCJhcmdzIiwiYXBwbHkiLCJmcm9tIiwiT2lkY01ldGFkYXRhVXJsUGF0aCIsInNldHRpbmdzIiwiSnNvblNlcnZpY2VDdG9yIiwiX3NldHRpbmdzIiwiX2pzb25TZXJ2aWNlIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YVVybCIsImdldElzc3VlciIsIl9nZXRNZXRhZGF0YVByb3BlcnR5IiwiZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50IiwiZ2V0VXNlckluZm9FbmRwb2ludCIsImdldFRva2VuRW5kcG9pbnQiLCJvcHRpb25hbCIsImdldENoZWNrU2Vzc2lvbklmcmFtZSIsImdldEVuZFNlc3Npb25FbmRwb2ludCIsImdldFJldm9jYXRpb25FbmRwb2ludCIsImdldEtleXNFbmRwb2ludCIsImdldFNpZ25pbmdLZXlzIiwic2lnbmluZ0tleXMiLCJqd2tzX3VyaSIsImtleVNldCIsImtleXMiLCJfbWV0YWRhdGFVcmwiLCJhdXRob3JpdHkiLCJjcmVhdGVTaWduaW5SZXF1ZXN0Iiwic3RhdGVTdG9yZSIsInJlc3BvbnNlX3R5cGUiLCJzY29wZSIsInByb21wdCIsIm1heF9hZ2UiLCJ1aV9sb2NhbGVzIiwiaWRfdG9rZW5faGludCIsImxvZ2luX2hpbnQiLCJhY3JfdmFsdWVzIiwicmVzb3VyY2UiLCJyZXF1ZXN0X3VyaSIsInJlc3BvbnNlX21vZGUiLCJleHRyYVF1ZXJ5UGFyYW1zIiwiZXh0cmFUb2tlblBhcmFtcyIsInJlcXVlc3RfdHlwZSIsInNraXBVc2VySW5mbyIsIlNpZ25pblJlcXVlc3QiLCJpc0NvZGUiLCJfbWV0YWRhdGFTZXJ2aWNlIiwic2lnbmluUmVxdWVzdCIsImNsaWVudF9zZWNyZXQiLCJzaWduaW5TdGF0ZSIsIl9zdGF0ZVN0b3JlIiwic2V0IiwiaWQiLCJ0b1N0b3JhZ2VTdHJpbmciLCJyZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSIsInJlbW92ZVN0YXRlIiwidXNlUXVlcnkiLCJkZWxpbWl0ZXIiLCJyZXNwb25zZSIsIlNpZ25pblJlc3BvbnNlIiwic3RhdGVBcGkiLCJyZW1vdmUiLCJnZXQiLCJzdG9yZWRTdGF0ZVN0cmluZyIsIlNpZ25pblN0YXRlIiwiZnJvbVN0b3JhZ2VTdHJpbmciLCJwcm9jZXNzU2lnbmluUmVzcG9uc2UiLCJfdmFsaWRhdG9yIiwidmFsaWRhdGVTaWduaW5SZXNwb25zZSIsImNyZWF0ZVNpZ25vdXRSZXF1ZXN0IiwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiU2lnbm91dFJlcXVlc3QiLCJzaWdub3V0U3RhdGUiLCJyZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUiLCJTaWdub3V0UmVzcG9uc2UiLCJzdGF0ZUtleSIsIlN0YXRlIiwicHJvY2Vzc1NpZ25vdXRSZXNwb25zZSIsInZhbGlkYXRlU2lnbm91dFJlc3BvbnNlIiwiY2xlYXJTdGFsZVN0YXRlIiwic3RhbGVTdGF0ZUFnZSIsInZhbGlkYXRvciIsIm1ldGFkYXRhU2VydmljZSIsIkRlZmF1bHRSZXNwb25zZVR5cGUiLCJEZWZhdWx0U2NvcGUiLCJEZWZhdWx0U3RhbGVTdGF0ZUFnZSIsIkRlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMiLCJmaWx0ZXJQcm90b2NvbENsYWltcyIsImxvYWRVc2VySW5mbyIsInVzZXJJbmZvSnd0SXNzdWVyIiwiUmVzcG9uc2VWYWxpZGF0b3JDdG9yIiwiUmVzcG9uc2VWYWxpZGF0b3IiLCJNZXRhZGF0YVNlcnZpY2VDdG9yIiwiX2F1dGhvcml0eSIsIl9tZXRhZGF0YSIsIl9zaWduaW5nS2V5cyIsIl9jbGllbnRfc2VjcmV0IiwiX3Jlc3BvbnNlX3R5cGUiLCJfc2NvcGUiLCJfcmVkaXJlY3RfdXJpIiwiX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9wcm9tcHQiLCJfZGlzcGxheSIsIl9tYXhfYWdlIiwiX3VpX2xvY2FsZXMiLCJfYWNyX3ZhbHVlcyIsIl9yZXNvdXJjZSIsIl9yZXNwb25zZV9tb2RlIiwiX2ZpbHRlclByb3RvY29sQ2xhaW1zIiwiX2xvYWRVc2VySW5mbyIsIl9zdGFsZVN0YXRlQWdlIiwiX2Nsb2NrU2tldyIsIl91c2VySW5mb0p3dElzc3VlciIsIl9leHRyYVF1ZXJ5UGFyYW1zIiwiX2V4dHJhVG9rZW5QYXJhbXMiLCJQb3B1cE5hdmlnYXRvciIsIlBvcHVwV2luZG93Iiwia2VlcE9wZW4iLCJub3RpZnlPcGVuZXIiLCJDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwiLCJfY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyIiwiX2NoZWNrRm9yUG9wdXBDbG9zZWQiLCJfaWQiLCJmb2N1cyIsImNsb3NlZCIsIm9wZW5lciIsIlVybFV0aWxpdHkiLCJwYXJzZVVybEZyYWdtZW50IiwiUmVkaXJlY3ROYXZpZ2F0b3IiLCJ1c2VSZXBsYWNlVG9OYXZpZ2F0ZSIsInJlcGxhY2UiLCJQcm90b2NvbENsYWltcyIsIlVzZXJJbmZvU2VydmljZUN0b3IiLCJqb3NlVXRpbCIsIlRva2VuQ2xpZW50Q3RvciIsIlVzZXJJbmZvU2VydmljZSIsIlRva2VuQ2xpZW50IiwiX3VzZXJJbmZvU2VydmljZSIsIl9qb3NlVXRpbCIsIl90b2tlbkNsaWVudCIsIl9wcm9jZXNzU2lnbmluUGFyYW1zIiwiX3ZhbGlkYXRlVG9rZW5zIiwiX3Byb2Nlc3NDbGFpbXMiLCJub25jZSIsImlkX3Rva2VuIiwiY29kZV92ZXJpZmllciIsImNvZGUiLCJpc09wZW5JZENvbm5lY3QiLCJwcm9maWxlIiwiZ2V0Q2xhaW1zIiwiY2xhaW1zIiwic3ViIiwiX21lcmdlQ2xhaW1zIiwiY2xhaW1zMSIsImNsYWltczIiLCJyZXN1bHQiLCJhc3NpZ24iLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidHlwZSIsIl9wcm9jZXNzQ29kZSIsIl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbiIsIl92YWxpZGF0ZUlkVG9rZW4iLCJleGNoYW5nZUNvZGUiLCJ0b2tlblJlc3BvbnNlIiwiX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMiLCJjbG9ja1NrZXdJblNlY29uZHMiLCJfdmFsaWRhdGVBY2Nlc3NUb2tlbiIsImtpZCIsIl9maWx0ZXJCeUFsZyIsImZpbHRlciIsImF0X2hhc2giLCJoYXNoQWxnIiwiaGFzaEJpdHMiLCJzaGEiLCJoYXNoIiwibGVmdCIsImxlZnRfYjY0dSIsInVzZXJNYW5hZ2VyIiwiQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciIsIl91c2VyTWFuYWdlciIsIl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiZXZlbnRzIiwiYWRkVXNlckxvYWRlZCIsIl9zdGFydCIsImFkZFVzZXJVbmxvYWRlZCIsIl9zdG9wIiwiZ2V0VXNlciIsInVzZXIiLCJtb25pdG9yQW5vbnltb3VzU2Vzc2lvbiIsInF1ZXJ5U2Vzc2lvblN0YXR1cyIsInNlc3Npb24iLCJ0bXBVc2VyIiwic2lkIiwiZXJyIiwiX3N1YiIsIl9zaWQiLCJfY2hlY2tTZXNzaW9uSUZyYW1lIiwiX2NoZWNrU2Vzc2lvbkludGVydmFsIiwiX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwidGltZXJIYW5kbGUiLCJyYWlzZUV2ZW50IiwiX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkIiwiX3JhaXNlVXNlclNpZ25lZE91dCIsIl9yYWlzZVVzZXJTaWduZWRJbiIsImNoZWNrU2Vzc2lvbkludGVydmFsIiwic3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IiLCJvaWRjIiwiaXNPaWRjIiwiYWRkUXVlcnlQYXJhbSIsImNvZGVfY2hhbGxlbmdlIiwic3BsaXQiLCJpc09BdXRoIiwiT2lkY1Njb3BlIiwidG9rZW5fdHlwZSIsImV4cGlyZXNfYXQiLCJzY29wZXMiLCJhcmd1bWVudHMiLCJfbm9uY2UiLCJyYW5kb20iLCJfY29kZV92ZXJpZmllciIsIl9jb2RlX2NoYWxsZW5nZSIsIl9za2lwVXNlckluZm8iLCJzdHJpbmdpZnkiLCJjcmVhdGVkIiwic3RvcmFnZVN0cmluZyIsIlNpbGVudFJlbmV3U2VydmljZSIsIl90b2tlbkV4cGlyaW5nIiwic2lnbmluU2lsZW50IiwiX3JhaXNlU2lsZW50UmVuZXdFcnJvciIsIl9jcmVhdGVkIiwiX3JlcXVlc3RfdHlwZSIsInN0b3JhZ2UiLCJhZ2UiLCJjdXRvZmYiLCJnZXRBbGxLZXlzIiwicHJvbWlzZXMiLCJwIiwiYWxsIiwiVGltZXJEdXJhdGlvbiIsIm5vd0Z1bmMiLCJfbm93RnVuYyIsImV4cGlyYXRpb24iLCJfdGltZXJIYW5kbGUiLCJfZXhwaXJhdGlvbiIsInRpbWVyRHVyYXRpb24iLCJkaWZmIiwiZ3JhbnRfdHlwZSIsImV4Y2hhbmdlUmVmcmVzaFRva2VuIiwicmVmcmVzaF90b2tlbiIsIkFjY2Vzc1Rva2VuVHlwZUhpbnQiLCJSZWZyZXNoVG9rZW5UeXBlSGludCIsIl9YTUxIdHRwUmVxdWVzdEN0b3IiLCJyZXZva2UiLCJyZXF1aXJlZCIsIl9yZXZva2UiLCJ4aHIiLCJnbG9iYWwiLCJsYXN0SW5kZXhPZiIsInJlZ2V4IiwibSIsImNvdW50ZXIiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJvcCIsIl9nZXRDbGFpbXNGcm9tSnd0IiwiaXNzdWVyUHJvbWlzZSIsIlNpbGVudFJlbmV3U2VydmljZUN0b3IiLCJTZXNzaW9uTW9uaXRvckN0b3IiLCJUb2tlblJldm9jYXRpb25DbGllbnRDdG9yIiwiVXNlck1hbmFnZXJTZXR0aW5ncyIsIl9ldmVudHMiLCJVc2VyTWFuYWdlckV2ZW50cyIsIl9zaWxlbnRSZW5ld1NlcnZpY2UiLCJhdXRvbWF0aWNTaWxlbnRSZW5ldyIsInN0YXJ0U2lsZW50UmVuZXciLCJtb25pdG9yU2Vzc2lvbiIsIl9zZXNzaW9uTW9uaXRvciIsIl90b2tlblJldm9jYXRpb25DbGllbnQiLCJfbG9hZFVzZXIiLCJyZW1vdmVVc2VyIiwic3RvcmVVc2VyIiwic2lnbmluUmVkaXJlY3QiLCJuYXZQYXJhbXMiLCJfc2lnbmluU3RhcnQiLCJfcmVkaXJlY3ROYXZpZ2F0b3IiLCJzaWduaW5SZWRpcmVjdENhbGxiYWNrIiwiX3NpZ25pbkVuZCIsInNpZ25pblBvcHVwIiwicG9wdXBfcmVkaXJlY3RfdXJpIiwiX3NpZ25pbiIsIl9wb3B1cE5hdmlnYXRvciIsInNpZ25pblBvcHVwQ2FsbGJhY2siLCJfc2lnbmluQ2FsbGJhY2siLCJfdXNlUmVmcmVzaFRva2VuIiwiaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3IiwidmFsaWRhdGVTdWJPblNpbGVudFJlbmV3IiwiY3VycmVudF9zdWIiLCJfc2lnbmluU2lsZW50SWZyYW1lIiwiaWRUb2tlblZhbGlkYXRpb24iLCJfdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuIiwiYXV0aF90aW1lIiwic2lsZW50X3JlZGlyZWN0X3VyaSIsIl9pZnJhbWVOYXZpZ2F0b3IiLCJzaWduaW5TaWxlbnRDYWxsYmFjayIsInNpZ25pbkNhbGxiYWNrIiwic2lnbm91dENhbGxiYWNrIiwic2lnbm91dFJlZGlyZWN0Q2FsbGJhY2siLCJzaWdub3V0UG9wdXBDYWxsYmFjayIsInF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlIiwibmF2UmVzcG9uc2UiLCJzaWduaW5SZXNwb25zZSIsIm5hdmlnYXRvciIsIm5hdmlnYXRvclBhcmFtcyIsInNpZ25vdXRSZWRpcmVjdCIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsIl9zaWdub3V0U3RhcnQiLCJfc2lnbm91dEVuZCIsInNpZ25vdXRQb3B1cCIsInBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9zaWdub3V0IiwicmV2b2tlUHJvbWlzZSIsInJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0IiwiX3Jldm9rZUludGVybmFsIiwic2lnbm91dFJlcXVlc3QiLCJzaWdub3V0UmVzcG9uc2UiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInN1Y2Nlc3MiLCJfcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbCIsImF0U3VjY2VzcyIsIl9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbCIsInJ0U3VjY2VzcyIsInN0b3BTaWxlbnRSZW5ldyIsIl91c2VyU3RvcmUiLCJfdXNlclN0b3JlS2V5IiwicmVkaXJlY3ROYXZpZ2F0b3IiLCJwb3B1cE5hdmlnYXRvciIsImlmcmFtZU5hdmlnYXRvciIsInVzZXJTdG9yZSIsIl91c2VyTG9hZGVkIiwiX3VzZXJVbmxvYWRlZCIsIl9zaWxlbnRSZW5ld0Vycm9yIiwiX3VzZXJTaWduZWRJbiIsIl91c2VyU2lnbmVkT3V0IiwiX3VzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJMb2FkZWQiLCJyZW1vdmVVc2VyVW5sb2FkZWQiLCJhZGRTaWxlbnRSZW5ld0Vycm9yIiwicmVtb3ZlU2lsZW50UmVuZXdFcnJvciIsImFkZFVzZXJTaWduZWRJbiIsInJlbW92ZVVzZXJTaWduZWRJbiIsImFkZFVzZXJTaWduZWRPdXQiLCJyZW1vdmVVc2VyU2lnbmVkT3V0IiwiYWRkVXNlclNlc3Npb25DaGFuZ2VkIiwicmVtb3ZlVXNlclNlc3Npb25DaGFuZ2VkIiwiRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsIiwic3RvcmUiLCJfcG9wdXBfcmVkaXJlY3RfdXJpIiwiX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9wb3B1cFdpbmRvd0ZlYXR1cmVzIiwiX3BvcHVwV2luZG93VGFyZ2V0IiwiX3NpbGVudF9yZWRpcmVjdF91cmkiLCJfc2lsZW50UmVxdWVzdFRpbWVvdXQiLCJfYXV0b21hdGljU2lsZW50UmVuZXciLCJfdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3IiwiX2luY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsIl9tb25pdG9yU2Vzc2lvbiIsIl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbiIsIl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsInByZWZpeCIsIl9zdG9yZSIsIl9wcmVmaXgiLCJCaWdJbnRlZ2VyIiwiSlNCTiIsImI2NG1hcCIsImI2NHBhZCIsIkJhc2U2NCIsInMiLCJyZXQiLCJrIiwic2xvcCIsImNoYXJBdCIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJoZXhUb0Jhc2U2NCIsImgiLCJjIiwic3Vic3RyaW5nIiwicGFkZGluZyIsInN0ciIsIm1vZCIsInBhZCIsImpvaW4iLCJieXRlQXJyYXlUb0hleCIsInJhdyIsIkhFWCIsIl9oZXgiLCJ0b1N0cmluZyIsImRlY29kZVRvSEVYIiwiYmFzZTY0SnMiLCJ0b0J5dGVBcnJheSIsImJhc2U2NFRvQmFzZTY0VXJsIiwidXJsRGVjb2RlIiwiYXRvYiIsIkRpZ2VzdEluZm9IZWFkIiwic2hhMSIsInNoYTIyNCIsInNoYTI1NiIsInNoYTM4NCIsInNoYTUxMiIsIm1kMiIsIm1kNSIsInJpcGVtZDE2MCIsIkRpZ2VzdEFsZ3MiLCJTSEEyNTYiLCJSU0FWZXJpZmllciIsIm1vZHVsdXMiLCJnZXRBbGdvcml0aG1Gcm9tRGlnZXN0IiwiaERpZ2VzdEluZm8iLCJhbGdOYW1lIiwiaGVhZCIsImxlbiIsInByb3RvdHlwZSIsIm1zZyIsImVuY3NpZyIsInNpZyIsImJpdExlbmd0aCIsImRlY3J5cHRlZFNpZyIsIm1vZFBvd0ludCIsImRpZ2VzdCIsImRpZ2VzdEluZm8iLCJtc2dIYXNoIiwicGFydHMiLCJhbGxvd2VkU2lnbmluZ0FsZ3MiLCJoZWFkZXJBbmRQYXlsb2FkIiwiZ2V0UHVibGljS2V5RnJvbUNlcnRQRU0iLCJoYXNoRnVuYyIsInV1aWQ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJB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cFosT0FBTyxHQUFHLFFBQWhCIiwiZmlsZSI6Im9pZGMtY2xpZW50LnJzYTI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9zcmMvTG9nLmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50LmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzJztcbmltcG9ydCB7IEluTWVtb3J5V2ViU3RvcmFnZSB9IGZyb20gJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciB9IGZyb20gJy4vc3JjL1VzZXJNYW5hZ2VyLmpzJztcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IENvcmRvdmFQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSAnLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9zcmMvR2xvYmFsLmpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NyYy9Vc2VyLmpzJztcblxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBWZXJzaW9uLFxuICAgIExvZyxcbiAgICBPaWRjQ2xpZW50LFxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcbiAgICBJbk1lbW9yeVdlYlN0b3JhZ2UsXG4gICAgVXNlck1hbmFnZXIsXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxuICAgIENvcmRvdmFQb3B1cE5hdmlnYXRvcixcbiAgICBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLFxuICAgIENoZWNrU2Vzc2lvbklGcmFtZSxcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXG4gICAgU2Vzc2lvbk1vbml0b3IsXG4gICAgR2xvYmFsLFxuICAgIFVzZXJcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKipcblx0ICogQ3J5cHRvSlMgY29yZSBjb21wb25lbnRzLlxuXHQgKi9cblx0dmFyIENyeXB0b0pTID0gQ3J5cHRvSlMgfHwgKGZ1bmN0aW9uIChNYXRoLCB1bmRlZmluZWQpIHtcblx0ICAgIC8qXG5cdCAgICAgKiBMb2NhbCBwb2x5ZmlsIG9mIE9iamVjdC5jcmVhdGVcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBGKCkge307XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSlcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDcnlwdG9KUyBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGlicmFyeSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2xpYiA9IEMubGliID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZSBvYmplY3QgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZSA9IChmdW5jdGlvbiAoKSB7XG5cblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvdmVycmlkZXMgUHJvcGVydGllcyB0byBjb3B5IGludG8gdGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTcGF3blxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YnR5cGUgPSBjcmVhdGUodGhpcyk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEF1Z21lbnRcblx0ICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLm1peEluKG92ZXJyaWRlcyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGluaXRpYWxpemVyXG5cdCAgICAgICAgICAgICAgICBpZiAoIXN1YnR5cGUuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCB0aGlzLmluaXQgPT09IHN1YnR5cGUuaW5pdCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemVyJ3MgcHJvdG90eXBlIGlzIHRoZSBzdWJ0eXBlIG9iamVjdFxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0LnByb3RvdHlwZSA9IHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSBzdXBlcnR5cGVcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyID0gdGhpcztcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxuXHQgICAgICAgICAgICAgKiBBcmd1bWVudHMgdG8gY3JlYXRlKCkgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZXh0ZW5kKCk7XG5cdCAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBvYmplY3QuXG5cdCAgICAgICAgICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCBzb21lIGxvZ2ljIHdoZW4geW91ciBvYmplY3RzIGFyZSBjcmVhdGVkLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgICAgICAvLyAuLi5cblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ29waWVzIHByb3BlcnRpZXMgaW50byB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgTXlUeXBlLm1peEluKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJ1xuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBtaXhJbjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJRSB3b24ndCBjb3B5IHRvU3RyaW5nIHVzaW5nIHRoZSBsb29wIGFib3ZlXG5cdCAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudG9TdHJpbmcgPSBwcm9wZXJ0aWVzLnRvU3RyaW5nO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBpbnN0YW5jZS5jbG9uZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXQucHJvdG90eXBlLmV4dGVuZCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICovXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSwgNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xuXHQgICAgICAgICAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcblxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogNDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0VuY29kZXJ9IGVuY29kZXIgKE9wdGlvbmFsKSBUaGUgZW5jb2Rpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBDcnlwdG9KUy5lbmMuSGV4XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5ICsgJyc7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChlbmNvZGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoZW5jb2RlciB8fCBIZXgpLnN0cmluZ2lmeSh0aGlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uY2F0ZW5hdGVzIGEgd29yZCBhcnJheSB0byB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5IHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkxLmNvbmNhdCh3b3JkQXJyYXkyKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB0aGlzV29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhpc1NpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRTaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB0aGlzLmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29uY2F0XG5cdCAgICAgICAgICAgIGlmICh0aGlzU2lnQnl0ZXMgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0Qnl0ZSA9ICh0aGF0V29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdIHw9IHRoYXRCeXRlIDw8ICgyNCAtICgodGhpc1NpZ0J5dGVzICsgaSkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSA9IHRoYXRXb3Jkc1tpID4+PiAyXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzICs9IHRoYXRTaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbGFtcDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcFxuXHQgICAgICAgICAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB3b3Jkcy5sZW5ndGggPSBNYXRoLmNlaWwoc2lnQnl0ZXMgLyA0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IHdvcmRBcnJheS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlcyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHJhbmRvbSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG5CeXRlcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblxuXHQgICAgICAgICAgICB2YXIgciA9IChmdW5jdGlvbiAobV93KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV93ID0gbV93O1xuXHQgICAgICAgICAgICAgICAgdmFyIG1feiA9IDB4M2FkZTY4YjE7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFzayA9IDB4ZmZmZmZmZmY7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbV96ID0gKDB4OTA2OSAqIChtX3ogJiAweEZGRkYpICsgKG1feiA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIG1fdyA9ICgweDQ2NTAgKiAobV93ICYgMHhGRkZGKSArIChtX3cgPj4gMHgxMCkpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gKChtX3ogPDwgMHgxMCkgKyBtX3cpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgLz0gMHgxMDAwMDAwMDA7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IDAuNTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICogKE1hdGgucmFuZG9tKCkgPiAuNSA/IDEgOiAtMSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCByY2FjaGU7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIF9yID0gcigocmNhY2hlIHx8IE1hdGgucmFuZG9tKCkpICogMHgxMDAwMDAwMDApO1xuXG5cdCAgICAgICAgICAgICAgICByY2FjaGUgPSBfcigpICogMHgzYWRlNjdiNztcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goKF9yKCkgKiAweDEwMDAwMDAwMCkgfCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIG5CeXRlcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRW5jb2RlciBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogSGV4IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgSGV4ID0gQ19lbmMuSGV4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBoZXhDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlICYgMHgwZikudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBoZXhDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBoZXggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHIgVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoaGV4U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoZXhTdHJMZW5ndGggPSBoZXhTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGV4U3RyTGVuZ3RoOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDNdIHw9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwgMiksIDE2KSA8PCAoMjQgLSAoaSAlIDgpICogNCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExhdGluMSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIExhdGluMSA9IENfZW5jLkxhdGluMSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBsYXRpbjFTdHJpbmcgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xQ2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIExhdGluMSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKGxhdGluMVN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChsYXRpbjFTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRpbjFTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gKGxhdGluMVN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZikgPDwgKDI0IC0gKGkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbGF0aW4xU3RyTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi04IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0ZjggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtOCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjhTdHIgVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjhTdHIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJ1ZmZlcmVkIGJsb2NrIGFsZ29yaXRobSB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBUaGUgcHJvcGVydHkgYmxvY2tTaXplIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcblx0ICAgICAqL1xuXHQgICAgdmFyIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBDX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGRhdGEgYnVmZmVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkuaW5pdCgpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBuZXcgZGF0YSB0byB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGJ1ZmZlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBhcHBlbmQuIFN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byBhIFdvcmRBcnJheSB1c2luZyBVVEYtOC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9hcHBlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICBkYXRhID0gVXRmOC5wYXJzZShkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyArPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRhdGEgYmxvY2tzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogVGhpcyBtZXRob2QgaW52b2tlcyBfZG9Qcm9jZXNzQmxvY2sob2Zmc2V0KSwgd2hpY2ggbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcHJvY2Vzc2VkIGRhdGEuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfcHJvY2VzczogZnVuY3Rpb24gKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XG5cdCAgICAgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5CeXRlc1JlYWR5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHByb2Nlc3NlZFdvcmRzLCBuQnl0ZXNSZWFkeSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9kYXRhID0gdGhpcy5fZGF0YS5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21pbkJ1ZmZlclNpemU6IDBcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGhhc2hlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXG5cdCAgICAgKi9cblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2hlciA9IENyeXB0b0pTLmFsZ28uU0hBMjU2LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgaGFzaGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBSZXNldCBkYXRhIGJ1ZmZlclxuXHQgICAgICAgICAgICBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdGhpcy5fZG9SZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGRhdGVzIHRoaXMgaGFzaGVyIHdpdGggYSBtZXNzYWdlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGhhc2hcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gRmluYWwgbWVzc2FnZSB1cGRhdGVcblx0ICAgICAgICAgICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDUxMi8zMixcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byBhIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaGFzaGVyLmluaXQoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byB1c2UgaW4gdGhpcyBITUFDIGhlbHBlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBIbWFjU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhtYWNIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBrZXkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ19hbGdvLkhNQUMuaW5pdChoYXNoZXIsIGtleSkuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWxnb3JpdGhtIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbyA9IHt9O1xuXG5cdCAgICByZXR1cm4gQztcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIEluaXRpYWxpemF0aW9uIGFuZCByb3VuZCBjb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgSCA9IFtdO1xuXHQgICAgdmFyIEsgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gaXNQcmltZShuKSB7XG5cdCAgICAgICAgICAgIHZhciBzcXJ0TiA9IE1hdGguc3FydChuKTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKCEobiAlIGZhY3RvcikpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmdW5jdGlvbiBnZXRGcmFjdGlvbmFsQml0cyhuKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoKG4gLSAobiB8IDApKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIG4gPSAyO1xuXHQgICAgICAgIHZhciBuUHJpbWUgPSAwO1xuXHQgICAgICAgIHdoaWxlIChuUHJpbWUgPCA2NCkge1xuXHQgICAgICAgICAgICBpZiAoaXNQcmltZShuKSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKG5QcmltZSA8IDgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgS1tuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDMpKTtcblxuXHQgICAgICAgICAgICAgICAgblByaW1lKys7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBuKys7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0XG5cdCAgICB2YXIgVyA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChILnNsaWNlKDApKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblx0ICAgICAgICAgICAgdmFyIGYgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgZyA9IEhbNl07XG5cdCAgICAgICAgICAgIHZhciBoID0gSFs3XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTAgID0gKChnYW1tYTB4IDw8IDI1KSB8IChnYW1tYTB4ID4+PiA3KSkgIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWEweCA8PCAxNCkgfCAoZ2FtbWEweCA+Pj4gMTgpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMHggPj4+IDMpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExICA9ICgoZ2FtbWExeCA8PCAxNSkgfCAoZ2FtbWExeCA+Pj4gMTcpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMXggPDwgMTMpIHwgKGdhbW1hMXggPj4+IDE5KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTF4ID4+PiAxMCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciBjaCAgPSAoZSAmIGYpIF4gKH5lICYgZyk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqID0gKGEgJiBiKSBeIChhICYgYykgXiAoYiAmIGMpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwID0gKChhIDw8IDMwKSB8IChhID4+PiAyKSkgXiAoKGEgPDwgMTkpIHwgKGEgPj4+IDEzKSkgXiAoKGEgPDwgMTApIHwgKGEgPj4+IDIyKSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExID0gKChlIDw8IDI2KSB8IChlID4+PiA2KSkgXiAoKGUgPDwgMjEpIHwgKGUgPj4+IDExKSkgXiAoKGUgPDwgNykgIHwgKGUgPj4+IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gc2lnbWEwICsgbWFqO1xuXG5cdCAgICAgICAgICAgICAgICBoID0gZztcblx0ICAgICAgICAgICAgICAgIGcgPSBmO1xuXHQgICAgICAgICAgICAgICAgZiA9IGU7XG5cdCAgICAgICAgICAgICAgICBlID0gKGQgKyB0MSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gYjtcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xuXHQgICAgICAgICAgICAgICAgYSA9ICh0MSArIHQyKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcblx0ICAgICAgICAgICAgSFs1XSA9IChIWzVdICsgZikgfCAwO1xuXHQgICAgICAgICAgICBIWzZdID0gKEhbNl0gKyBnKSB8IDA7XG5cdCAgICAgICAgICAgIEhbN10gPSAoSFs3XSArIGgpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTYpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2KTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjU2O1xuXG59KSk7IiwiKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUgIFRvbSBXdVxuICAgIC8vIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgLy8gU2VlIFwiTElDRU5TRVwiIGZvciBkZXRhaWxzLlxuXG4gICAgLy8gQmFzaWMgSmF2YVNjcmlwdCBCTiBsaWJyYXJ5IC0gc3Vic2V0IHVzZWZ1bCBmb3IgUlNBIGVuY3J5cHRpb24uXG5cbiAgICAvLyBCaXRzIHBlciBkaWdpdFxuICAgIHZhciBkYml0cztcblxuICAgIC8vIEphdmFTY3JpcHQgZW5naW5lIGFuYWx5c2lzXG4gICAgdmFyIGNhbmFyeSA9IDB4ZGVhZGJlZWZjYWZlO1xuICAgIHZhciBqX2xtID0gKChjYW5hcnkmMHhmZmZmZmYpPT0weGVmY2FmZSk7XG5cbiAgICAvLyAocHVibGljKSBDb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIEJpZ0ludGVnZXIoYSxiLGMpIHtcbiAgICAgIGlmKGEgIT0gbnVsbClcbiAgICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYSkgdGhpcy5mcm9tTnVtYmVyKGEsYixjKTtcbiAgICAgICAgZWxzZSBpZihiID09IG51bGwgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSkgdGhpcy5mcm9tU3RyaW5nKGEsMjU2KTtcbiAgICAgICAgZWxzZSB0aGlzLmZyb21TdHJpbmcoYSxiKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbmV3LCB1bnNldCBCaWdJbnRlZ2VyXG4gICAgZnVuY3Rpb24gbmJpKCkgeyByZXR1cm4gbmV3IEJpZ0ludGVnZXIobnVsbCk7IH1cblxuICAgIC8vIGFtOiBDb21wdXRlIHdfaiArPSAoeCp0aGlzX2kpLCBwcm9wYWdhdGUgY2FycmllcyxcbiAgICAvLyBjIGlzIGluaXRpYWwgY2FycnksIHJldHVybnMgZmluYWwgY2FycnkuXG4gICAgLy8gYyA8IDMqZHZhbHVlLCB4IDwgMipkdmFsdWUsIHRoaXNfaSA8IGR2YWx1ZVxuICAgIC8vIFdlIG5lZWQgdG8gc2VsZWN0IHRoZSBmYXN0ZXN0IG9uZSB0aGF0IHdvcmtzIGluIHRoaXMgZW52aXJvbm1lbnQuXG5cbiAgICAvLyBhbTE6IHVzZSBhIHNpbmdsZSBtdWx0IGFuZCBkaXZpZGUgdG8gZ2V0IHRoZSBoaWdoIGJpdHMsXG4gICAgLy8gbWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDI2IGJlY2F1c2VcbiAgICAvLyBtYXggaW50ZXJuYWwgdmFsdWUgPSAyKmR2YWx1ZV4yLTIqZHZhbHVlICg8IDJeNTMpXG4gICAgZnVuY3Rpb24gYW0xKGkseCx3LGosYyxuKSB7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgdiA9IHgqdGhpc1tpKytdK3dbal0rYztcbiAgICAgICAgYyA9IE1hdGguZmxvb3Iodi8weDQwMDAwMDApO1xuICAgICAgICB3W2orK10gPSB2JjB4M2ZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvLyBhbTIgYXZvaWRzIGEgYmlnIG11bHQtYW5kLWV4dHJhY3QgY29tcGxldGVseS5cbiAgICAvLyBNYXggZGlnaXQgYml0cyBzaG91bGQgYmUgPD0gMzAgYmVjYXVzZSB3ZSBkbyBiaXR3aXNlIG9wc1xuICAgIC8vIG9uIHZhbHVlcyB1cCB0byAyKmhkdmFsdWVeMi1oZHZhbHVlLTEgKDwgMl4zMSlcbiAgICBmdW5jdGlvbiBhbTIoaSx4LHcsaixjLG4pIHtcbiAgICAgIHZhciB4bCA9IHgmMHg3ZmZmLCB4aCA9IHg+PjE1O1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzW2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIGggPSB0aGlzW2krK10+PjE1O1xuICAgICAgICB2YXIgbSA9IHhoKmwraCp4bDtcbiAgICAgICAgbCA9IHhsKmwrKChtJjB4N2ZmZik8PDE1KSt3W2pdKyhjJjB4M2ZmZmZmZmYpO1xuICAgICAgICBjID0gKGw+Pj4zMCkrKG0+Pj4xNSkreGgqaCsoYz4+PjMwKTtcbiAgICAgICAgd1tqKytdID0gbCYweDNmZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIEFsdGVybmF0ZWx5LCBzZXQgbWF4IGRpZ2l0IGJpdHMgdG8gMjggc2luY2Ugc29tZVxuICAgIC8vIGJyb3dzZXJzIHNsb3cgZG93biB3aGVuIGRlYWxpbmcgd2l0aCAzMi1iaXQgbnVtYmVycy5cbiAgICBmdW5jdGlvbiBhbTMoaSx4LHcsaixjLG4pIHtcbiAgICAgIHZhciB4bCA9IHgmMHgzZmZmLCB4aCA9IHg+PjE0O1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzW2ldJjB4M2ZmZjtcbiAgICAgICAgdmFyIGggPSB0aGlzW2krK10+PjE0O1xuICAgICAgICB2YXIgbSA9IHhoKmwraCp4bDtcbiAgICAgICAgbCA9IHhsKmwrKChtJjB4M2ZmZik8PDE0KSt3W2pdK2M7XG4gICAgICAgIGMgPSAobD4+MjgpKyhtPj4xNCkreGgqaDtcbiAgICAgICAgd1tqKytdID0gbCYweGZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGluQnJvd3NlciA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgaWYoaW5Ccm93c2VyICYmIGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIpKSB7XG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMjtcbiAgICAgIGRiaXRzID0gMzA7XG4gICAgfVxuICAgIGVsc2UgaWYoaW5Ccm93c2VyICYmIGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lICE9IFwiTmV0c2NhcGVcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0xO1xuICAgICAgZGJpdHMgPSAyNjtcbiAgICB9XG4gICAgZWxzZSB7IC8vIE1vemlsbGEvTmV0c2NhcGUgc2VlbXMgdG8gcHJlZmVyIGFtM1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTM7XG4gICAgICBkYml0cyA9IDI4O1xuICAgIH1cblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRCID0gZGJpdHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRE0gPSAoKDE8PGRiaXRzKS0xKTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5EViA9ICgxPDxkYml0cyk7XG5cbiAgICB2YXIgQklfRlAgPSA1MjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GViA9IE1hdGgucG93KDIsQklfRlApO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkYxID0gQklfRlAtZGJpdHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjIgPSAyKmRiaXRzLUJJX0ZQO1xuXG4gICAgLy8gRGlnaXQgY29udmVyc2lvbnNcbiAgICB2YXIgQklfUk0gPSBcIjAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiO1xuICAgIHZhciBCSV9SQyA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBycix2djtcbiAgICByciA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMDsgdnYgPD0gOTsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiYVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG4gICAgcnIgPSBcIkFcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDEwOyB2diA8IDM2OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuXG4gICAgZnVuY3Rpb24gaW50MmNoYXIobikgeyByZXR1cm4gQklfUk0uY2hhckF0KG4pOyB9XG4gICAgZnVuY3Rpb24gaW50QXQocyxpKSB7XG4gICAgICB2YXIgYyA9IEJJX1JDW3MuY2hhckNvZGVBdChpKV07XG4gICAgICByZXR1cm4gKGM9PW51bGwpPy0xOmM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29weSB0aGlzIHRvIHJcbiAgICBmdW5jdGlvbiBibnBDb3B5VG8ocikge1xuICAgICAgZm9yKHZhciBpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByW2ldID0gdGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBpbnRlZ2VyIHZhbHVlIHgsIC1EViA8PSB4IDwgRFZcbiAgICBmdW5jdGlvbiBibnBGcm9tSW50KHgpIHtcbiAgICAgIHRoaXMudCA9IDE7XG4gICAgICB0aGlzLnMgPSAoeDwwKT8tMTowO1xuICAgICAgaWYoeCA+IDApIHRoaXNbMF0gPSB4O1xuICAgICAgZWxzZSBpZih4IDwgLTEpIHRoaXNbMF0gPSB4K3RoaXMuRFY7XG4gICAgICBlbHNlIHRoaXMudCA9IDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGJpZ2ludCBpbml0aWFsaXplZCB0byB2YWx1ZVxuICAgIGZ1bmN0aW9uIG5idihpKSB7IHZhciByID0gbmJpKCk7IHIuZnJvbUludChpKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIHN0cmluZyBhbmQgcmFkaXhcbiAgICBmdW5jdGlvbiBibnBGcm9tU3RyaW5nKHMsYikge1xuICAgICAgdmFyIGs7XG4gICAgICBpZihiID09IDE2KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoYiA9PSA4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoYiA9PSAyNTYpIGsgPSA4OyAvLyBieXRlIGFycmF5XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSB7IHRoaXMuZnJvbVJhZGl4KHMsYik7IHJldHVybjsgfVxuICAgICAgdGhpcy50ID0gMDtcbiAgICAgIHRoaXMucyA9IDA7XG4gICAgICB2YXIgaSA9IHMubGVuZ3RoLCBtaSA9IGZhbHNlLCBzaCA9IDA7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkge1xuICAgICAgICB2YXIgeCA9IChrPT04KT9zW2ldJjB4ZmY6aW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIikgbWkgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG1pID0gZmFsc2U7XG4gICAgICAgIGlmKHNoID09IDApXG4gICAgICAgICAgdGhpc1t0aGlzLnQrK10gPSB4O1xuICAgICAgICBlbHNlIGlmKHNoK2sgPiB0aGlzLkRCKSB7XG4gICAgICAgICAgdGhpc1t0aGlzLnQtMV0gfD0gKHgmKCgxPDwodGhpcy5EQi1zaCkpLTEpKTw8c2g7XG4gICAgICAgICAgdGhpc1t0aGlzLnQrK10gPSAoeD4+KHRoaXMuREItc2gpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpc1t0aGlzLnQtMV0gfD0geDw8c2g7XG4gICAgICAgIHNoICs9IGs7XG4gICAgICAgIGlmKHNoID49IHRoaXMuREIpIHNoIC09IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihrID09IDggJiYgKHNbMF0mMHg4MCkgIT0gMCkge1xuICAgICAgICB0aGlzLnMgPSAtMTtcbiAgICAgICAgaWYoc2ggPiAwKSB0aGlzW3RoaXMudC0xXSB8PSAoKDE8PCh0aGlzLkRCLXNoKSktMSk8PHNoO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGFtcCgpO1xuICAgICAgaWYobWkpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHRoaXMpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNsYW1wIG9mZiBleGNlc3MgaGlnaCB3b3Jkc1xuICAgIGZ1bmN0aW9uIGJucENsYW1wKCkge1xuICAgICAgdmFyIGMgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgIHdoaWxlKHRoaXMudCA+IDAgJiYgdGhpc1t0aGlzLnQtMV0gPT0gYykgLS10aGlzLnQ7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBpbiBnaXZlbiByYWRpeFxuICAgIGZ1bmN0aW9uIGJuVG9TdHJpbmcoYikge1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIFwiLVwiK3RoaXMubmVnYXRlKCkudG9TdHJpbmcoYik7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDIpIGsgPSAxO1xuICAgICAgZWxzZSBpZihiID09IDMyKSBrID0gNTtcbiAgICAgIGVsc2UgaWYoYiA9PSA0KSBrID0gMjtcbiAgICAgIGVsc2UgcmV0dXJuIHRoaXMudG9SYWRpeChiKTtcbiAgICAgIHZhciBrbSA9ICgxPDxrKS0xLCBkLCBtID0gZmFsc2UsIHIgPSBcIlwiLCBpID0gdGhpcy50O1xuICAgICAgdmFyIHAgPSB0aGlzLkRCLShpKnRoaXMuREIpJWs7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgPiAwKSB7IG0gPSB0cnVlOyByID0gaW50MmNoYXIoZCk7IH1cbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IGspIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KGstcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItayk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09aykpJmttO1xuICAgICAgICAgICAgaWYocCA8PSAwKSB7IHAgKz0gdGhpcy5EQjsgLS1pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGQgPiAwKSBtID0gdHJ1ZTtcbiAgICAgICAgICBpZihtKSByICs9IGludDJjaGFyKGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbT9yOlwiMFwiO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIC10aGlzXG4gICAgZnVuY3Rpb24gYm5OZWdhdGUoKSB7IHZhciByID0gbmJpKCk7IEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgfHRoaXN8XG4gICAgZnVuY3Rpb24gYm5BYnMoKSB7IHJldHVybiAodGhpcy5zPDApP3RoaXMubmVnYXRlKCk6dGhpczsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuICsgaWYgdGhpcyA+IGEsIC0gaWYgdGhpcyA8IGEsIDAgaWYgZXF1YWxcbiAgICBmdW5jdGlvbiBibkNvbXBhcmVUbyhhKSB7XG4gICAgICB2YXIgciA9IHRoaXMucy1hLnM7XG4gICAgICBpZihyICE9IDApIHJldHVybiByO1xuICAgICAgdmFyIGkgPSB0aGlzLnQ7XG4gICAgICByID0gaS1hLnQ7XG4gICAgICBpZihyICE9IDApIHJldHVybiAodGhpcy5zPDApPy1yOnI7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgaWYoKHI9dGhpc1tpXS1hW2ldKSAhPSAwKSByZXR1cm4gcjtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgYml0IGxlbmd0aCBvZiB0aGUgaW50ZWdlciB4XG4gICAgZnVuY3Rpb24gbmJpdHMoeCkge1xuICAgICAgdmFyIHIgPSAxLCB0O1xuICAgICAgaWYoKHQ9eD4+PjE2KSAhPSAwKSB7IHggPSB0OyByICs9IDE2OyB9XG4gICAgICBpZigodD14Pj44KSAhPSAwKSB7IHggPSB0OyByICs9IDg7IH1cbiAgICAgIGlmKCh0PXg+PjQpICE9IDApIHsgeCA9IHQ7IHIgKz0gNDsgfVxuICAgICAgaWYoKHQ9eD4+MikgIT0gMCkgeyB4ID0gdDsgciArPSAyOyB9XG4gICAgICBpZigodD14Pj4xKSAhPSAwKSB7IHggPSB0OyByICs9IDE7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB0aGUgbnVtYmVyIG9mIGJpdHMgaW4gXCJ0aGlzXCJcbiAgICBmdW5jdGlvbiBibkJpdExlbmd0aCgpIHtcbiAgICAgIGlmKHRoaXMudCA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLkRCKih0aGlzLnQtMSkrbmJpdHModGhpc1t0aGlzLnQtMV1eKHRoaXMucyZ0aGlzLkRNKSk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgbipEQlxuICAgIGZ1bmN0aW9uIGJucERMU2hpZnRUbyhuLHIpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yKGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaStuXSA9IHRoaXNbaV07XG4gICAgICBmb3IoaSA9IG4tMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgci50ID0gdGhpcy50K247XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gbipEQlxuICAgIGZ1bmN0aW9uIGJucERSU2hpZnRUbyhuLHIpIHtcbiAgICAgIGZvcih2YXIgaSA9IG47IGkgPCB0aGlzLnQ7ICsraSkgcltpLW5dID0gdGhpc1tpXTtcbiAgICAgIHIudCA9IE1hdGgubWF4KHRoaXMudC1uLDApO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBibnBMU2hpZnRUbyhuLHIpIHtcbiAgICAgIHZhciBicyA9IG4ldGhpcy5EQjtcbiAgICAgIHZhciBjYnMgPSB0aGlzLkRCLWJzO1xuICAgICAgdmFyIGJtID0gKDE8PGNicyktMTtcbiAgICAgIHZhciBkcyA9IE1hdGguZmxvb3Iobi90aGlzLkRCKSwgYyA9ICh0aGlzLnM8PGJzKSZ0aGlzLkRNLCBpO1xuICAgICAgZm9yKGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgcltpK2RzKzFdID0gKHRoaXNbaV0+PmNicyl8YztcbiAgICAgICAgYyA9ICh0aGlzW2ldJmJtKTw8YnM7XG4gICAgICB9XG4gICAgICBmb3IoaSA9IGRzLTE7IGkgPj0gMDsgLS1pKSByW2ldID0gMDtcbiAgICAgIHJbZHNdID0gYztcbiAgICAgIHIudCA9IHRoaXMudCtkcysxO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzID4+IG5cbiAgICBmdW5jdGlvbiBibnBSU2hpZnRUbyhuLHIpIHtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICAgIHZhciBkcyA9IE1hdGguZmxvb3Iobi90aGlzLkRCKTtcbiAgICAgIGlmKGRzID49IHRoaXMudCkgeyByLnQgPSAwOyByZXR1cm47IH1cbiAgICAgIHZhciBicyA9IG4ldGhpcy5EQjtcbiAgICAgIHZhciBjYnMgPSB0aGlzLkRCLWJzO1xuICAgICAgdmFyIGJtID0gKDE8PGJzKS0xO1xuICAgICAgclswXSA9IHRoaXNbZHNdPj5icztcbiAgICAgIGZvcih2YXIgaSA9IGRzKzE7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICByW2ktZHMtMV0gfD0gKHRoaXNbaV0mYm0pPDxjYnM7XG4gICAgICAgIHJbaS1kc10gPSB0aGlzW2ldPj5icztcbiAgICAgIH1cbiAgICAgIGlmKGJzID4gMCkgclt0aGlzLnQtZHMtMV0gfD0gKHRoaXMucyZibSk8PGNicztcbiAgICAgIHIudCA9IHRoaXMudC1kcztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAtIGFcbiAgICBmdW5jdGlvbiBibnBTdWJUbyhhLHIpIHtcbiAgICAgIHZhciBpID0gMCwgYyA9IDAsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIHdoaWxlKGkgPCBtKSB7XG4gICAgICAgIGMgKz0gdGhpc1tpXS1hW2ldO1xuICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgYyAtPSBhLnM7XG4gICAgICAgIHdoaWxlKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIHdoaWxlKGkgPCBhLnQpIHtcbiAgICAgICAgICBjIC09IGFbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyAtPSBhLnM7XG4gICAgICB9XG4gICAgICByLnMgPSAoYzwwKT8tMTowO1xuICAgICAgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICBlbHNlIGlmKGMgPiAwKSByW2krK10gPSBjO1xuICAgICAgci50ID0gaTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAqIGEsIHIgIT0gdGhpcyxhIChIQUMgMTQuMTIpXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5VG8oYSxyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCksIHkgPSBhLmFicygpO1xuICAgICAgdmFyIGkgPSB4LnQ7XG4gICAgICByLnQgPSBpK3kudDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IHkudDsgKytpKSByW2kreC50XSA9IHguYW0oMCx5W2ldLHIsaSwwLHgudCk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgaWYodGhpcy5zICE9IGEucykgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHIscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXNeMiwgciAhPSB0aGlzIChIQUMgMTQuMTYpXG4gICAgZnVuY3Rpb24gYm5wU3F1YXJlVG8ocikge1xuICAgICAgdmFyIHggPSB0aGlzLmFicygpO1xuICAgICAgdmFyIGkgPSByLnQgPSAyKngudDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IHgudC0xOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSB4LmFtKGkseFtpXSxyLDIqaSwwLDEpO1xuICAgICAgICBpZigocltpK3gudF0rPXguYW0oaSsxLDIqeFtpXSxyLDIqaSsxLGMseC50LWktMSkpID49IHguRFYpIHtcbiAgICAgICAgICByW2kreC50XSAtPSB4LkRWO1xuICAgICAgICAgIHJbaSt4LnQrMV0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihyLnQgPiAwKSByW3IudC0xXSArPSB4LmFtKGkseFtpXSxyLDIqaSwwLDEpO1xuICAgICAgci5zID0gMDtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBkaXZpZGUgdGhpcyBieSBtLCBxdW90aWVudCBhbmQgcmVtYWluZGVyIHRvIHEsIHIgKEhBQyAxNC4yMClcbiAgICAvLyByICE9IHEsIHRoaXMgIT0gbS4gIHEgb3IgciBtYXkgYmUgbnVsbC5cbiAgICBmdW5jdGlvbiBibnBEaXZSZW1UbyhtLHEscikge1xuICAgICAgdmFyIHBtID0gbS5hYnMoKTtcbiAgICAgIGlmKHBtLnQgPD0gMCkgcmV0dXJuO1xuICAgICAgdmFyIHB0ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHB0LnQgPCBwbS50KSB7XG4gICAgICAgIGlmKHEgIT0gbnVsbCkgcS5mcm9tSW50KDApO1xuICAgICAgICBpZihyICE9IG51bGwpIHRoaXMuY29weVRvKHIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZihyID09IG51bGwpIHIgPSBuYmkoKTtcbiAgICAgIHZhciB5ID0gbmJpKCksIHRzID0gdGhpcy5zLCBtcyA9IG0ucztcbiAgICAgIHZhciBuc2ggPSB0aGlzLkRCLW5iaXRzKHBtW3BtLnQtMV0pOyAgIC8vIG5vcm1hbGl6ZSBtb2R1bHVzXG4gICAgICBpZihuc2ggPiAwKSB7IHBtLmxTaGlmdFRvKG5zaCx5KTsgcHQubFNoaWZ0VG8obnNoLHIpOyB9XG4gICAgICBlbHNlIHsgcG0uY29weVRvKHkpOyBwdC5jb3B5VG8ocik7IH1cbiAgICAgIHZhciB5cyA9IHkudDtcbiAgICAgIHZhciB5MCA9IHlbeXMtMV07XG4gICAgICBpZih5MCA9PSAwKSByZXR1cm47XG4gICAgICB2YXIgeXQgPSB5MCooMTw8dGhpcy5GMSkrKCh5cz4xKT95W3lzLTJdPj50aGlzLkYyOjApO1xuICAgICAgdmFyIGQxID0gdGhpcy5GVi95dCwgZDIgPSAoMTw8dGhpcy5GMSkveXQsIGUgPSAxPDx0aGlzLkYyO1xuICAgICAgdmFyIGkgPSByLnQsIGogPSBpLXlzLCB0ID0gKHE9PW51bGwpP25iaSgpOnE7XG4gICAgICB5LmRsU2hpZnRUbyhqLHQpO1xuICAgICAgaWYoci5jb21wYXJlVG8odCkgPj0gMCkge1xuICAgICAgICByW3IudCsrXSA9IDE7XG4gICAgICAgIHIuc3ViVG8odCxyKTtcbiAgICAgIH1cbiAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbyh5cyx0KTtcbiAgICAgIHQuc3ViVG8oeSx5KTsgIC8vIFwibmVnYXRpdmVcIiB5IHNvIHdlIGNhbiByZXBsYWNlIHN1YiB3aXRoIGFtIGxhdGVyXG4gICAgICB3aGlsZSh5LnQgPCB5cykgeVt5LnQrK10gPSAwO1xuICAgICAgd2hpbGUoLS1qID49IDApIHtcbiAgICAgICAgLy8gRXN0aW1hdGUgcXVvdGllbnQgZGlnaXRcbiAgICAgICAgdmFyIHFkID0gKHJbLS1pXT09eTApP3RoaXMuRE06TWF0aC5mbG9vcihyW2ldKmQxKyhyW2ktMV0rZSkqZDIpO1xuICAgICAgICBpZigocltpXSs9eS5hbSgwLHFkLHIsaiwwLHlzKSkgPCBxZCkgeyAgIC8vIFRyeSBpdCBvdXRcbiAgICAgICAgICB5LmRsU2hpZnRUbyhqLHQpO1xuICAgICAgICAgIHIuc3ViVG8odCxyKTtcbiAgICAgICAgICB3aGlsZShyW2ldIDwgLS1xZCkgci5zdWJUbyh0LHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihxICE9IG51bGwpIHtcbiAgICAgICAgci5kclNoaWZ0VG8oeXMscSk7XG4gICAgICAgIGlmKHRzICE9IG1zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocSxxKTtcbiAgICAgIH1cbiAgICAgIHIudCA9IHlzO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgaWYobnNoID4gMCkgci5yU2hpZnRUbyhuc2gscik7IC8vIERlbm9ybWFsaXplIHJlbWFpbmRlclxuICAgICAgaWYodHMgPCAwKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIG1vZCBhXG4gICAgZnVuY3Rpb24gYm5Nb2QoYSkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHRoaXMuYWJzKCkuZGl2UmVtVG8oYSxudWxsLHIpO1xuICAgICAgaWYodGhpcy5zIDwgMCAmJiByLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pID4gMCkgYS5zdWJUbyhyLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gTW9kdWxhciByZWR1Y3Rpb24gdXNpbmcgXCJjbGFzc2ljXCIgYWxnb3JpdGhtXG4gICAgZnVuY3Rpb24gQ2xhc3NpYyhtKSB7IHRoaXMubSA9IG07IH1cbiAgICBmdW5jdGlvbiBjQ29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgcmV0dXJuIHgubW9kKHRoaXMubSk7XG4gICAgICBlbHNlIHJldHVybiB4O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjUmV2ZXJ0KHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBjUmVkdWNlKHgpIHsgeC5kaXZSZW1Ubyh0aGlzLm0sbnVsbCx4KTsgfVxuICAgIGZ1bmN0aW9uIGNNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cbiAgICBmdW5jdGlvbiBjU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBDbGFzc2ljLnByb3RvdHlwZS5jb252ZXJ0ID0gY0NvbnZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmV2ZXJ0ID0gY1JldmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZWR1Y2UgPSBjUmVkdWNlO1xuICAgIENsYXNzaWMucHJvdG90eXBlLm11bFRvID0gY011bFRvO1xuICAgIENsYXNzaWMucHJvdG90eXBlLnNxclRvID0gY1NxclRvO1xuXG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIFwiLTEvdGhpcyAlIDJeREJcIjsgdXNlZnVsIGZvciBNb250LiByZWR1Y3Rpb25cbiAgICAvLyBqdXN0aWZpY2F0aW9uOlxuICAgIC8vICAgICAgICAgeHkgPT0gMSAobW9kIG0pXG4gICAgLy8gICAgICAgICB4eSA9ICAxK2ttXG4gICAgLy8gICB4eSgyLXh5KSA9ICgxK2ttKSgxLWttKVxuICAgIC8vIHhbeSgyLXh5KV0gPSAxLWteMm1eMlxuICAgIC8vIHhbeSgyLXh5KV0gPT0gMSAobW9kIG1eMilcbiAgICAvLyBpZiB5IGlzIDEveCBtb2QgbSwgdGhlbiB5KDIteHkpIGlzIDEveCBtb2QgbV4yXG4gICAgLy8gc2hvdWxkIHJlZHVjZSB4IGFuZCB5KDIteHkpIGJ5IG1eMiBhdCBlYWNoIHN0ZXAgdG8ga2VlcCBzaXplIGJvdW5kZWQuXG4gICAgLy8gSlMgbXVsdGlwbHkgXCJvdmVyZmxvd3NcIiBkaWZmZXJlbnRseSBmcm9tIEMvQysrLCBzbyBjYXJlIGlzIG5lZWRlZCBoZXJlLlxuICAgIGZ1bmN0aW9uIGJucEludkRpZ2l0KCkge1xuICAgICAgaWYodGhpcy50IDwgMSkgcmV0dXJuIDA7XG4gICAgICB2YXIgeCA9IHRoaXNbMF07XG4gICAgICBpZigoeCYxKSA9PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciB5ID0geCYzOyAgICAgICAvLyB5ID09IDEveCBtb2QgMl4yXG4gICAgICB5ID0gKHkqKDItKHgmMHhmKSp5KSkmMHhmOyAvLyB5ID09IDEveCBtb2QgMl40XG4gICAgICB5ID0gKHkqKDItKHgmMHhmZikqeSkpJjB4ZmY7ICAgLy8geSA9PSAxL3ggbW9kIDJeOFxuICAgICAgeSA9ICh5KigyLSgoKHgmMHhmZmZmKSp5KSYweGZmZmYpKSkmMHhmZmZmOyAgICAvLyB5ID09IDEveCBtb2QgMl4xNlxuICAgICAgLy8gbGFzdCBzdGVwIC0gY2FsY3VsYXRlIGludmVyc2UgbW9kIERWIGRpcmVjdGx5O1xuICAgICAgLy8gYXNzdW1lcyAxNiA8IERCIDw9IDMyIGFuZCBhc3N1bWVzIGFiaWxpdHkgdG8gaGFuZGxlIDQ4LWJpdCBpbnRzXG4gICAgICB5ID0gKHkqKDIteCp5JXRoaXMuRFYpKSV0aGlzLkRWOyAgICAgICAvLyB5ID09IDEveCBtb2QgMl5kYml0c1xuICAgICAgLy8gd2UgcmVhbGx5IHdhbnQgdGhlIG5lZ2F0aXZlIGludmVyc2UsIGFuZCAtRFYgPCB5IDwgRFZcbiAgICAgIHJldHVybiAoeT4wKT90aGlzLkRWLXk6LXk7XG4gICAgfVxuXG4gICAgLy8gTW9udGdvbWVyeSByZWR1Y3Rpb25cbiAgICBmdW5jdGlvbiBNb250Z29tZXJ5KG0pIHtcbiAgICAgIHRoaXMubSA9IG07XG4gICAgICB0aGlzLm1wID0gbS5pbnZEaWdpdCgpO1xuICAgICAgdGhpcy5tcGwgPSB0aGlzLm1wJjB4N2ZmZjtcbiAgICAgIHRoaXMubXBoID0gdGhpcy5tcD4+MTU7XG4gICAgICB0aGlzLnVtID0gKDE8PChtLkRCLTE1KSktMTtcbiAgICAgIHRoaXMubXQyID0gMiptLnQ7XG4gICAgfVxuXG4gICAgLy8geFIgbW9kIG1cbiAgICBmdW5jdGlvbiBtb250Q29udmVydCh4KSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgeC5hYnMoKS5kbFNoaWZ0VG8odGhpcy5tLnQscik7XG4gICAgICByLmRpdlJlbVRvKHRoaXMubSxudWxsLHIpO1xuICAgICAgaWYoeC5zIDwgMCAmJiByLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pID4gMCkgdGhpcy5tLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4L1IgbW9kIG1cbiAgICBmdW5jdGlvbiBtb250UmV2ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmNvcHlUbyhyKTtcbiAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8geCA9IHgvUiBtb2QgbSAoSEFDIDE0LjMyKVxuICAgIGZ1bmN0aW9uIG1vbnRSZWR1Y2UoeCkge1xuICAgICAgd2hpbGUoeC50IDw9IHRoaXMubXQyKSAvLyBwYWQgeCBzbyBhbSBoYXMgZW5vdWdoIHJvb20gbGF0ZXJcbiAgICAgICAgeFt4LnQrK10gPSAwO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMubS50OyArK2kpIHtcbiAgICAgICAgLy8gZmFzdGVyIHdheSBvZiBjYWxjdWxhdGluZyB1MCA9IHhbaV0qbXAgbW9kIERWXG4gICAgICAgIHZhciBqID0geFtpXSYweDdmZmY7XG4gICAgICAgIHZhciB1MCA9IChqKnRoaXMubXBsKygoKGoqdGhpcy5tcGgrKHhbaV0+PjE1KSp0aGlzLm1wbCkmdGhpcy51bSk8PDE1KSkmeC5ETTtcbiAgICAgICAgLy8gdXNlIGFtIHRvIGNvbWJpbmUgdGhlIG11bHRpcGx5LXNoaWZ0LWFkZCBpbnRvIG9uZSBjYWxsXG4gICAgICAgIGogPSBpK3RoaXMubS50O1xuICAgICAgICB4W2pdICs9IHRoaXMubS5hbSgwLHUwLHgsaSwwLHRoaXMubS50KTtcbiAgICAgICAgLy8gcHJvcGFnYXRlIGNhcnJ5XG4gICAgICAgIHdoaWxlKHhbal0gPj0geC5EVikgeyB4W2pdIC09IHguRFY7IHhbKytqXSsrOyB9XG4gICAgICB9XG4gICAgICB4LmNsYW1wKCk7XG4gICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udCx4KTtcbiAgICAgIGlmKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgeC5zdWJUbyh0aGlzLm0seCk7XG4gICAgfVxuXG4gICAgLy8gciA9IFwieF4yL1IgbW9kIG1cIjsgeCAhPSByXG4gICAgZnVuY3Rpb24gbW9udFNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgLy8gciA9IFwieHkvUiBtb2QgbVwiOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIG1vbnRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLmNvbnZlcnQgPSBtb250Q29udmVydDtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5yZXZlcnQgPSBtb250UmV2ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJlZHVjZSA9IG1vbnRSZWR1Y2U7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUubXVsVG8gPSBtb250TXVsVG87XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuc3FyVG8gPSBtb250U3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmZiB0aGlzIGlzIGV2ZW5cbiAgICBmdW5jdGlvbiBibnBJc0V2ZW4oKSB7IHJldHVybiAoKHRoaXMudD4wKT8odGhpc1swXSYxKTp0aGlzLnMpID09IDA7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXNeZSwgZSA8IDJeMzIsIGRvaW5nIHNxciBhbmQgbXVsIHdpdGggXCJyXCIgKEhBQyAxNC43OSlcbiAgICBmdW5jdGlvbiBibnBFeHAoZSx6KSB7XG4gICAgICBpZihlID4gMHhmZmZmZmZmZiB8fCBlIDwgMSkgcmV0dXJuIEJpZ0ludGVnZXIuT05FO1xuICAgICAgdmFyIHIgPSBuYmkoKSwgcjIgPSBuYmkoKSwgZyA9IHouY29udmVydCh0aGlzKSwgaSA9IG5iaXRzKGUpLTE7XG4gICAgICBnLmNvcHlUbyhyKTtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHouc3FyVG8ocixyMik7XG4gICAgICAgIGlmKChlJigxPDxpKSkgPiAwKSB6Lm11bFRvKHIyLGcscik7XG4gICAgICAgIGVsc2UgeyB2YXIgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lICUgbSwgMCA8PSBlIDwgMl4zMlxuICAgIGZ1bmN0aW9uIGJuTW9kUG93SW50KGUsbSkge1xuICAgICAgdmFyIHo7XG4gICAgICBpZihlIDwgMjU2IHx8IG0uaXNFdmVuKCkpIHogPSBuZXcgQ2xhc3NpYyhtKTsgZWxzZSB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG4gICAgICByZXR1cm4gdGhpcy5leHAoZSx6KTtcbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG8gPSBibnBDb3B5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbUludCA9IGJucEZyb21JbnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVN0cmluZyA9IGJucEZyb21TdHJpbmc7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xhbXAgPSBibnBDbGFtcDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kbFNoaWZ0VG8gPSBibnBETFNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZHJTaGlmdFRvID0gYm5wRFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmxTaGlmdFRvID0gYm5wTFNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG8gPSBibnBSU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJUbyA9IGJucFN1YlRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VG8gPSBibnBNdWx0aXBseVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZVRvID0gYm5wU3F1YXJlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2UmVtVG8gPSBibnBEaXZSZW1UbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnZEaWdpdCA9IGJucEludkRpZ2l0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGJucElzRXZlbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5leHAgPSBibnBFeHA7XG5cbiAgICAvLyBwdWJsaWNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGJuVG9TdHJpbmc7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gYm5OZWdhdGU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWJzID0gYm5BYnM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gYm5Db21wYXJlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoID0gYm5CaXRMZW5ndGg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kID0gYm5Nb2Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93SW50ID0gYm5Nb2RQb3dJbnQ7XG5cbiAgICAvLyBcImNvbnN0YW50c1wiXG4gICAgQmlnSW50ZWdlci5aRVJPID0gbmJ2KDApO1xuICAgIEJpZ0ludGVnZXIuT05FID0gbmJ2KDEpO1xuXG4gICAgLy8gQ29weXJpZ2h0IChjKSAyMDA1LTIwMDkgIFRvbSBXdVxuICAgIC8vIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgLy8gU2VlIFwiTElDRU5TRVwiIGZvciBkZXRhaWxzLlxuXG4gICAgLy8gRXh0ZW5kZWQgSmF2YVNjcmlwdCBCTiBmdW5jdGlvbnMsIHJlcXVpcmVkIGZvciBSU0EgcHJpdmF0ZSBvcHMuXG5cbiAgICAvLyBWZXJzaW9uIDEuMTogbmV3IEJpZ0ludGVnZXIoXCIwXCIsIDEwKSByZXR1cm5zIFwicHJvcGVyXCIgemVyb1xuICAgIC8vIFZlcnNpb24gMS4yOiBzcXVhcmUoKSBBUEksIGlzUHJvYmFibGVQcmltZSBmaXhcblxuICAgIC8vIChwdWJsaWMpXG4gICAgZnVuY3Rpb24gYm5DbG9uZSgpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5jb3B5VG8ocik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgaW50ZWdlclxuICAgIGZ1bmN0aW9uIGJuSW50VmFsdWUoKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSB7XG4gICAgICAgIGlmKHRoaXMudCA9PSAxKSByZXR1cm4gdGhpc1swXS10aGlzLkRWO1xuICAgICAgICBlbHNlIGlmKHRoaXMudCA9PSAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMudCA9PSAxKSByZXR1cm4gdGhpc1swXTtcbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAwO1xuICAgICAgLy8gYXNzdW1lcyAxNiA8IERCIDwgMzJcbiAgICAgIHJldHVybiAoKHRoaXNbMV0mKCgxPDwoMzItdGhpcy5EQikpLTEpKTw8dGhpcy5EQil8dGhpc1swXTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgYnl0ZVxuICAgIGZ1bmN0aW9uIGJuQnl0ZVZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwyNCk+PjI0OyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgc2hvcnQgKGFzc3VtZXMgREI+PTE2KVxuICAgIGZ1bmN0aW9uIGJuU2hvcnRWYWx1ZSgpIHsgcmV0dXJuICh0aGlzLnQ9PTApP3RoaXMuczoodGhpc1swXTw8MTYpPj4xNjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIHggcy50LiByXnggPCBEVlxuICAgIGZ1bmN0aW9uIGJucENodW5rU2l6ZShyKSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGguTE4yKnRoaXMuREIvTWF0aC5sb2cocikpOyB9XG5cbiAgICAvLyAocHVibGljKSAwIGlmIHRoaXMgPT0gMCwgMSBpZiB0aGlzID4gMFxuICAgIGZ1bmN0aW9uIGJuU2lnTnVtKCkge1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIC0xO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPD0gMCB8fCAodGhpcy50ID09IDEgJiYgdGhpc1swXSA8PSAwKSkgcmV0dXJuIDA7XG4gICAgICBlbHNlIHJldHVybiAxO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgdG8gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wVG9SYWRpeChiKSB7XG4gICAgICBpZihiID09IG51bGwpIGIgPSAxMDtcbiAgICAgIGlmKHRoaXMuc2lnbnVtKCkgPT0gMCB8fCBiIDwgMiB8fCBiID4gMzYpIHJldHVybiBcIjBcIjtcbiAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgdmFyIGEgPSBNYXRoLnBvdyhiLGNzKTtcbiAgICAgIHZhciBkID0gbmJ2KGEpLCB5ID0gbmJpKCksIHogPSBuYmkoKSwgciA9IFwiXCI7XG4gICAgICB0aGlzLmRpdlJlbVRvKGQseSx6KTtcbiAgICAgIHdoaWxlKHkuc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIHIgPSAoYSt6LmludFZhbHVlKCkpLnRvU3RyaW5nKGIpLnN1YnN0cigxKSArIHI7XG4gICAgICAgIHkuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHouaW50VmFsdWUoKS50b1N0cmluZyhiKSArIHI7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCBmcm9tIHJhZGl4IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGJucEZyb21SYWRpeChzLGIpIHtcbiAgICAgIHRoaXMuZnJvbUludCgwKTtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgZCA9IE1hdGgucG93KGIsY3MpLCBtaSA9IGZhbHNlLCBqID0gMCwgdyA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgeCA9IGludEF0KHMsaSk7XG4gICAgICAgIGlmKHggPCAwKSB7XG4gICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT0gXCItXCIgJiYgdGhpcy5zaWdudW0oKSA9PSAwKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdyA9IGIqdyt4O1xuICAgICAgICBpZigrK2ogPj0gY3MpIHtcbiAgICAgICAgICB0aGlzLmRNdWx0aXBseShkKTtcbiAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywwKTtcbiAgICAgICAgICBqID0gMDtcbiAgICAgICAgICB3ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoaiA+IDApIHtcbiAgICAgICAgdGhpcy5kTXVsdGlwbHkoTWF0aC5wb3coYixqKSk7XG4gICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgfVxuICAgICAgaWYobWkpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHRoaXMpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGFsdGVybmF0ZSBjb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIGJucEZyb21OdW1iZXIoYSxiLGMpIHtcbiAgICAgIGlmKFwibnVtYmVyXCIgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgLy8gbmV3IEJpZ0ludGVnZXIoaW50LGludCxSTkcpXG4gICAgICAgIGlmKGEgPCAyKSB0aGlzLmZyb21JbnQoMSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJvbU51bWJlcihhLGMpO1xuICAgICAgICAgIGlmKCF0aGlzLnRlc3RCaXQoYS0xKSkgICAgLy8gZm9yY2UgTVNCIHNldFxuICAgICAgICAgICAgdGhpcy5iaXR3aXNlVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksb3Bfb3IsdGhpcyk7XG4gICAgICAgICAgaWYodGhpcy5pc0V2ZW4oKSkgdGhpcy5kQWRkT2Zmc2V0KDEsMCk7IC8vIGZvcmNlIG9kZFxuICAgICAgICAgIHdoaWxlKCF0aGlzLmlzUHJvYmFibGVQcmltZShiKSkge1xuICAgICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KDIsMCk7XG4gICAgICAgICAgICBpZih0aGlzLmJpdExlbmd0aCgpID4gYSkgdGhpcy5zdWJUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSx0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsUk5HKVxuICAgICAgICB2YXIgeCA9IG5ldyBBcnJheSgpLCB0ID0gYSY3O1xuICAgICAgICB4Lmxlbmd0aCA9IChhPj4zKSsxO1xuICAgICAgICBiLm5leHRCeXRlcyh4KTtcbiAgICAgICAgaWYodCA+IDApIHhbMF0gJj0gKCgxPDx0KS0xKTsgZWxzZSB4WzBdID0gMDtcbiAgICAgICAgdGhpcy5mcm9tU3RyaW5nKHgsMjU2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAocHVibGljKSBjb252ZXJ0IHRvIGJpZ2VuZGlhbiBieXRlIGFycmF5XG4gICAgZnVuY3Rpb24gYm5Ub0J5dGVBcnJheSgpIHtcbiAgICAgIHZhciBpID0gdGhpcy50LCByID0gbmV3IEFycmF5KCk7XG4gICAgICByWzBdID0gdGhpcy5zO1xuICAgICAgdmFyIHAgPSB0aGlzLkRCLShpKnRoaXMuREIpJTgsIGQsIGsgPSAwO1xuICAgICAgaWYoaS0tID4gMCkge1xuICAgICAgICBpZihwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0+PnApICE9ICh0aGlzLnMmdGhpcy5ETSk+PnApXG4gICAgICAgICAgcltrKytdID0gZHwodGhpcy5zPDwodGhpcy5EQi1wKSk7XG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgIGlmKHAgPCA4KSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0mKCgxPDxwKS0xKSk8PCg4LXApO1xuICAgICAgICAgICAgZCB8PSB0aGlzWy0taV0+PihwKz10aGlzLkRCLTgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXT4+KHAtPTgpKSYweGZmO1xuICAgICAgICAgICAgaWYocCA8PSAwKSB7IHAgKz0gdGhpcy5EQjsgLS1pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKChkJjB4ODApICE9IDApIGQgfD0gLTI1NjtcbiAgICAgICAgICBpZihrID09IDAgJiYgKHRoaXMucyYweDgwKSAhPSAoZCYweDgwKSkgKytrO1xuICAgICAgICAgIGlmKGsgPiAwIHx8IGQgIT0gdGhpcy5zKSByW2srK10gPSBkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBibkVxdWFscyhhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT09MCk7IH1cbiAgICBmdW5jdGlvbiBibk1pbihhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKTwwKT90aGlzOmE7IH1cbiAgICBmdW5jdGlvbiBibk1heChhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT4wKT90aGlzOmE7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIG9wIGEgKGJpdHdpc2UpXG4gICAgZnVuY3Rpb24gYm5wQml0d2lzZVRvKGEsb3Ascikge1xuICAgICAgdmFyIGksIGYsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIGZvcihpID0gMDsgaSA8IG07ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sYVtpXSk7XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgZiA9IGEucyZ0aGlzLkRNO1xuICAgICAgICBmb3IoaSA9IG07IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sZik7XG4gICAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IGEudDsgKytpKSByW2ldID0gb3AoZixhW2ldKTtcbiAgICAgICAgci50ID0gYS50O1xuICAgICAgfVxuICAgICAgci5zID0gb3AodGhpcy5zLGEucyk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIGFcbiAgICBmdW5jdGlvbiBvcF9hbmQoeCx5KSB7IHJldHVybiB4Jnk7IH1cbiAgICBmdW5jdGlvbiBibkFuZChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfYW5kLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyB8IGFcbiAgICBmdW5jdGlvbiBvcF9vcih4LHkpIHsgcmV0dXJuIHh8eTsgfVxuICAgIGZ1bmN0aW9uIGJuT3IoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX29yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeIGFcbiAgICBmdW5jdGlvbiBvcF94b3IoeCx5KSB7IHJldHVybiB4Xnk7IH1cbiAgICBmdW5jdGlvbiBiblhvcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfeG9yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH5hXG4gICAgZnVuY3Rpb24gb3BfYW5kbm90KHgseSkgeyByZXR1cm4geCZ+eTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kTm90KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmRub3Qscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB+dGhpc1xuICAgIGZ1bmN0aW9uIGJuTm90KCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IHRoaXMuRE0mfnRoaXNbaV07XG4gICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICByLnMgPSB+dGhpcy5zO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA8PCBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdExlZnQobikge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGlmKG4gPCAwKSB0aGlzLnJTaGlmdFRvKC1uLHIpOyBlbHNlIHRoaXMubFNoaWZ0VG8obixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJuU2hpZnRSaWdodChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMubFNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5yU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGluZGV4IG9mIGxvd2VzdCAxLWJpdCBpbiB4LCB4IDwgMl4zMVxuICAgIGZ1bmN0aW9uIGxiaXQoeCkge1xuICAgICAgaWYoeCA9PSAwKSByZXR1cm4gLTE7XG4gICAgICB2YXIgciA9IDA7XG4gICAgICBpZigoeCYweGZmZmYpID09IDApIHsgeCA+Pj0gMTY7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh4JjB4ZmYpID09IDApIHsgeCA+Pj0gODsgciArPSA4OyB9XG4gICAgICBpZigoeCYweGYpID09IDApIHsgeCA+Pj0gNDsgciArPSA0OyB9XG4gICAgICBpZigoeCYzKSA9PSAwKSB7IHggPj49IDI7IHIgKz0gMjsgfVxuICAgICAgaWYoKHgmMSkgPT0gMCkgKytyO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJucyBpbmRleCBvZiBsb3dlc3QgMS1iaXQgKG9yIC0xIGlmIG5vbmUpXG4gICAgZnVuY3Rpb24gYm5HZXRMb3dlc3RTZXRCaXQoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpXG4gICAgICAgIGlmKHRoaXNbaV0gIT0gMCkgcmV0dXJuIGkqdGhpcy5EQitsYml0KHRoaXNbaV0pO1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIHRoaXMudCp0aGlzLkRCO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBudW1iZXIgb2YgMSBiaXRzIGluIHhcbiAgICBmdW5jdGlvbiBjYml0KHgpIHtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIHdoaWxlKHggIT0gMCkgeyB4ICY9IHgtMTsgKytyOyB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gbnVtYmVyIG9mIHNldCBiaXRzXG4gICAgZnVuY3Rpb24gYm5CaXRDb3VudCgpIHtcbiAgICAgIHZhciByID0gMCwgeCA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByICs9IGNiaXQodGhpc1tpXV54KTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRydWUgaWZmIG50aCBiaXQgaXMgc2V0XG4gICAgZnVuY3Rpb24gYm5UZXN0Qml0KG4pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoaiA+PSB0aGlzLnQpIHJldHVybih0aGlzLnMhPTApO1xuICAgICAgcmV0dXJuKCh0aGlzW2pdJigxPDwobiV0aGlzLkRCKSkpIT0wKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzIG9wICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJucENoYW5nZUJpdChuLG9wKSB7XG4gICAgICB2YXIgciA9IEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChuKTtcbiAgICAgIHRoaXMuYml0d2lzZVRvKHIsb3Ascik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5TZXRCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9vcik7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiB+KDE8PG4pXG4gICAgZnVuY3Rpb24gYm5DbGVhckJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX2FuZG5vdCk7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgXiAoMTw8bilcbiAgICBmdW5jdGlvbiBibkZsaXBCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF94b3IpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyArIGFcbiAgICBmdW5jdGlvbiBibnBBZGRUbyhhLHIpIHtcbiAgICAgIHZhciBpID0gMCwgYyA9IDAsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIHdoaWxlKGkgPCBtKSB7XG4gICAgICAgIGMgKz0gdGhpc1tpXSthW2ldO1xuICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgYyArPSBhLnM7XG4gICAgICAgIHdoaWxlKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIHdoaWxlKGkgPCBhLnQpIHtcbiAgICAgICAgICBjICs9IGFbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSBhLnM7XG4gICAgICB9XG4gICAgICByLnMgPSAoYzwwKT8tMTowO1xuICAgICAgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICBlbHNlIGlmKGMgPCAtMSkgcltpKytdID0gdGhpcy5EVitjO1xuICAgICAgci50ID0gaTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJuQWRkKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5hZGRUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAtIGFcbiAgICBmdW5jdGlvbiBiblN1YnRyYWN0KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zdWJUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAqIGFcbiAgICBmdW5jdGlvbiBibk11bHRpcGx5KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5tdWx0aXBseVRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXjJcbiAgICBmdW5jdGlvbiBiblNxdWFyZSgpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zcXVhcmVUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgLyBhXG4gICAgZnVuY3Rpb24gYm5EaXZpZGUoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEscixudWxsKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJSBhXG4gICAgZnVuY3Rpb24gYm5SZW1haW5kZXIoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEsbnVsbCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIFt0aGlzL2EsdGhpcyVhXVxuICAgIGZ1bmN0aW9uIGJuRGl2aWRlQW5kUmVtYWluZGVyKGEpIHtcbiAgICAgIHZhciBxID0gbmJpKCksIHIgPSBuYmkoKTtcbiAgICAgIHRoaXMuZGl2UmVtVG8oYSxxLHIpO1xuICAgICAgcmV0dXJuIG5ldyBBcnJheShxLHIpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKj0gbiwgdGhpcyA+PSAwLCAxIDwgbiA8IERWXG4gICAgZnVuY3Rpb24gYm5wRE11bHRpcGx5KG4pIHtcbiAgICAgIHRoaXNbdGhpcy50XSA9IHRoaXMuYW0oMCxuLTEsdGhpcywwLDAsdGhpcy50KTtcbiAgICAgICsrdGhpcy50O1xuICAgICAgdGhpcy5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKz0gbiA8PCB3IHdvcmRzLCB0aGlzID49IDBcbiAgICBmdW5jdGlvbiBibnBEQWRkT2Zmc2V0KG4sdykge1xuICAgICAgaWYobiA9PSAwKSByZXR1cm47XG4gICAgICB3aGlsZSh0aGlzLnQgPD0gdykgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgdGhpc1t3XSArPSBuO1xuICAgICAgd2hpbGUodGhpc1t3XSA+PSB0aGlzLkRWKSB7XG4gICAgICAgIHRoaXNbd10gLT0gdGhpcy5EVjtcbiAgICAgICAgaWYoKyt3ID49IHRoaXMudCkgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgICArK3RoaXNbd107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQSBcIm51bGxcIiByZWR1Y2VyXG4gICAgZnVuY3Rpb24gTnVsbEV4cCgpIHt9XG4gICAgZnVuY3Rpb24gbk5vcCh4KSB7IHJldHVybiB4OyB9XG4gICAgZnVuY3Rpb24gbk11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB9XG4gICAgZnVuY3Rpb24gblNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB9XG5cbiAgICBOdWxsRXhwLnByb3RvdHlwZS5jb252ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5yZXZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLm11bFRvID0gbk11bFRvO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnNxclRvID0gblNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lXG4gICAgZnVuY3Rpb24gYm5Qb3coZSkgeyByZXR1cm4gdGhpcy5leHAoZSxuZXcgTnVsbEV4cCgpKTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IGxvd2VyIG4gd29yZHMgb2YgXCJ0aGlzICogYVwiLCBhLnQgPD0gblxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseUxvd2VyVG8oYSxuLHIpIHtcbiAgICAgIHZhciBpID0gTWF0aC5taW4odGhpcy50K2EudCxuKTtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHIudCA9IGk7XG4gICAgICB3aGlsZShpID4gMCkgclstLWldID0gMDtcbiAgICAgIHZhciBqO1xuICAgICAgZm9yKGogPSByLnQtdGhpcy50OyBpIDwgajsgKytpKSByW2krdGhpcy50XSA9IHRoaXMuYW0oMCxhW2ldLHIsaSwwLHRoaXMudCk7XG4gICAgICBmb3IoaiA9IE1hdGgubWluKGEudCxuKTsgaSA8IGo7ICsraSkgdGhpcy5hbSgwLGFbaV0scixpLDAsbi1pKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gXCJ0aGlzICogYVwiIHdpdGhvdXQgbG93ZXIgbiB3b3JkcywgbiA+IDBcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlVcHBlclRvKGEsbixyKSB7XG4gICAgICAtLW47XG4gICAgICB2YXIgaSA9IHIudCA9IHRoaXMudCthLnQtbjtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gTWF0aC5tYXgobi10aGlzLnQsMCk7IGkgPCBhLnQ7ICsraSlcbiAgICAgICAgclt0aGlzLnQraS1uXSA9IHRoaXMuYW0obi1pLGFbaV0sciwwLDAsdGhpcy50K2ktbik7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICByLmRyU2hpZnRUbygxLHIpO1xuICAgIH1cblxuICAgIC8vIEJhcnJldHQgbW9kdWxhciByZWR1Y3Rpb25cbiAgICBmdW5jdGlvbiBCYXJyZXR0KG0pIHtcbiAgICAgIC8vIHNldHVwIEJhcnJldHRcbiAgICAgIHRoaXMucjIgPSBuYmkoKTtcbiAgICAgIHRoaXMucTMgPSBuYmkoKTtcbiAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbygyKm0udCx0aGlzLnIyKTtcbiAgICAgIHRoaXMubXUgPSB0aGlzLnIyLmRpdmlkZShtKTtcbiAgICAgIHRoaXMubSA9IG07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFycmV0dENvbnZlcnQoeCkge1xuICAgICAgaWYoeC5zIDwgMCB8fCB4LnQgPiAyKnRoaXMubS50KSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA8IDApIHJldHVybiB4O1xuICAgICAgZWxzZSB7IHZhciByID0gbmJpKCk7IHguY29weVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgcmV0dXJuIHI7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0UmV2ZXJ0KHgpIHsgcmV0dXJuIHg7IH1cblxuICAgIC8vIHggPSB4IG1vZCBtIChIQUMgMTQuNDIpXG4gICAgZnVuY3Rpb24gYmFycmV0dFJlZHVjZSh4KSB7XG4gICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udC0xLHRoaXMucjIpO1xuICAgICAgaWYoeC50ID4gdGhpcy5tLnQrMSkgeyB4LnQgPSB0aGlzLm0udCsxOyB4LmNsYW1wKCk7IH1cbiAgICAgIHRoaXMubXUubXVsdGlwbHlVcHBlclRvKHRoaXMucjIsdGhpcy5tLnQrMSx0aGlzLnEzKTtcbiAgICAgIHRoaXMubS5tdWx0aXBseUxvd2VyVG8odGhpcy5xMyx0aGlzLm0udCsxLHRoaXMucjIpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5yMikgPCAwKSB4LmRBZGRPZmZzZXQoMSx0aGlzLm0udCsxKTtcbiAgICAgIHguc3ViVG8odGhpcy5yMix4KTtcbiAgICAgIHdoaWxlKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgeC5zdWJUbyh0aGlzLm0seCk7XG4gICAgfVxuXG4gICAgLy8gciA9IHheMiBtb2QgbTsgeCAhPSByXG4gICAgZnVuY3Rpb24gYmFycmV0dFNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgLy8gciA9IHgqeSBtb2QgbTsgeCx5ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0TXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBCYXJyZXR0LnByb3RvdHlwZS5jb252ZXJ0ID0gYmFycmV0dENvbnZlcnQ7XG4gICAgQmFycmV0dC5wcm90b3R5cGUucmV2ZXJ0ID0gYmFycmV0dFJldmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZWR1Y2UgPSBiYXJyZXR0UmVkdWNlO1xuICAgIEJhcnJldHQucHJvdG90eXBlLm11bFRvID0gYmFycmV0dE11bFRvO1xuICAgIEJhcnJldHQucHJvdG90eXBlLnNxclRvID0gYmFycmV0dFNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lICUgbSAoSEFDIDE0Ljg1KVxuICAgIGZ1bmN0aW9uIGJuTW9kUG93KGUsbSkge1xuICAgICAgdmFyIGkgPSBlLmJpdExlbmd0aCgpLCBrLCByID0gbmJ2KDEpLCB6O1xuICAgICAgaWYoaSA8PSAwKSByZXR1cm4gcjtcbiAgICAgIGVsc2UgaWYoaSA8IDE4KSBrID0gMTtcbiAgICAgIGVsc2UgaWYoaSA8IDQ4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoaSA8IDE0NCkgayA9IDQ7XG4gICAgICBlbHNlIGlmKGkgPCA3NjgpIGsgPSA1O1xuICAgICAgZWxzZSBrID0gNjtcbiAgICAgIGlmKGkgPCA4KVxuICAgICAgICB6ID0gbmV3IENsYXNzaWMobSk7XG4gICAgICBlbHNlIGlmKG0uaXNFdmVuKCkpXG4gICAgICAgIHogPSBuZXcgQmFycmV0dChtKTtcbiAgICAgIGVsc2VcbiAgICAgICAgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuXG4gICAgICAvLyBwcmVjb21wdXRhdGlvblxuICAgICAgdmFyIGcgPSBuZXcgQXJyYXkoKSwgbiA9IDMsIGsxID0gay0xLCBrbSA9ICgxPDxrKS0xO1xuICAgICAgZ1sxXSA9IHouY29udmVydCh0aGlzKTtcbiAgICAgIGlmKGsgPiAxKSB7XG4gICAgICAgIHZhciBnMiA9IG5iaSgpO1xuICAgICAgICB6LnNxclRvKGdbMV0sZzIpO1xuICAgICAgICB3aGlsZShuIDw9IGttKSB7XG4gICAgICAgICAgZ1tuXSA9IG5iaSgpO1xuICAgICAgICAgIHoubXVsVG8oZzIsZ1tuLTJdLGdbbl0pO1xuICAgICAgICAgIG4gKz0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaiA9IGUudC0xLCB3LCBpczEgPSB0cnVlLCByMiA9IG5iaSgpLCB0O1xuICAgICAgaSA9IG5iaXRzKGVbal0pLTE7XG4gICAgICB3aGlsZShqID49IDApIHtcbiAgICAgICAgaWYoaSA+PSBrMSkgdyA9IChlW2pdPj4oaS1rMSkpJmttO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3ID0gKGVbal0mKCgxPDwoaSsxKSktMSkpPDwoazEtaSk7XG4gICAgICAgICAgaWYoaiA+IDApIHcgfD0gZVtqLTFdPj4odGhpcy5EQitpLWsxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG4gPSBrO1xuICAgICAgICB3aGlsZSgodyYxKSA9PSAwKSB7IHcgPj49IDE7IC0tbjsgfVxuICAgICAgICBpZigoaSAtPSBuKSA8IDApIHsgaSArPSB0aGlzLkRCOyAtLWo7IH1cbiAgICAgICAgaWYoaXMxKSB7ICAgIC8vIHJldCA9PSAxLCBkb24ndCBib3RoZXIgc3F1YXJpbmcgb3IgbXVsdGlwbHlpbmcgaXRcbiAgICAgICAgICBnW3ddLmNvcHlUbyhyKTtcbiAgICAgICAgICBpczEgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3aGlsZShuID4gMSkgeyB6LnNxclRvKHIscjIpOyB6LnNxclRvKHIyLHIpOyBuIC09IDI7IH1cbiAgICAgICAgICBpZihuID4gMCkgei5zcXJUbyhyLHIyKTsgZWxzZSB7IHQgPSByOyByID0gcjI7IHIyID0gdDsgfVxuICAgICAgICAgIHoubXVsVG8ocjIsZ1t3XSxyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlKGogPj0gMCAmJiAoZVtqXSYoMTw8aSkpID09IDApIHtcbiAgICAgICAgICB6LnNxclRvKHIscjIpOyB0ID0gcjsgciA9IHIyOyByMiA9IHQ7XG4gICAgICAgICAgaWYoLS1pIDwgMCkgeyBpID0gdGhpcy5EQi0xOyAtLWo7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHoucmV2ZXJ0KHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGdjZCh0aGlzLGEpIChIQUMgMTQuNTQpXG4gICAgZnVuY3Rpb24gYm5HQ0QoYSkge1xuICAgICAgdmFyIHggPSAodGhpcy5zPDApP3RoaXMubmVnYXRlKCk6dGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIHkgPSAoYS5zPDApP2EubmVnYXRlKCk6YS5jbG9uZSgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8oeSkgPCAwKSB7IHZhciB0ID0geDsgeCA9IHk7IHkgPSB0OyB9XG4gICAgICB2YXIgaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCksIGcgPSB5LmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoZyA8IDApIHJldHVybiB4O1xuICAgICAgaWYoaSA8IGcpIGcgPSBpO1xuICAgICAgaWYoZyA+IDApIHtcbiAgICAgICAgeC5yU2hpZnRUbyhnLHgpO1xuICAgICAgICB5LnJTaGlmdFRvKGcseSk7XG4gICAgICB9XG4gICAgICB3aGlsZSh4LnNpZ251bSgpID4gMCkge1xuICAgICAgICBpZigoaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeC5yU2hpZnRUbyhpLHgpO1xuICAgICAgICBpZigoaSA9IHkuZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeS5yU2hpZnRUbyhpLHkpO1xuICAgICAgICBpZih4LmNvbXBhcmVUbyh5KSA+PSAwKSB7XG4gICAgICAgICAgeC5zdWJUbyh5LHgpO1xuICAgICAgICAgIHguclNoaWZ0VG8oMSx4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB5LnN1YlRvKHgseSk7XG4gICAgICAgICAgeS5yU2hpZnRUbygxLHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihnID4gMCkgeS5sU2hpZnRUbyhnLHkpO1xuICAgICAgcmV0dXJuIHk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAlIG4sIG4gPCAyXjI2XG4gICAgZnVuY3Rpb24gYm5wTW9kSW50KG4pIHtcbiAgICAgIGlmKG4gPD0gMCkgcmV0dXJuIDA7XG4gICAgICB2YXIgZCA9IHRoaXMuRFYlbiwgciA9ICh0aGlzLnM8MCk/bi0xOjA7XG4gICAgICBpZih0aGlzLnQgPiAwKVxuICAgICAgICBpZihkID09IDApIHIgPSB0aGlzWzBdJW47XG4gICAgICAgIGVsc2UgZm9yKHZhciBpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByID0gKGQqcit0aGlzW2ldKSVuO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgMS90aGlzICUgbSAoSEFDIDE0LjYxKVxuICAgIGZ1bmN0aW9uIGJuTW9kSW52ZXJzZShtKSB7XG4gICAgICB2YXIgYWMgPSBtLmlzRXZlbigpO1xuICAgICAgaWYoKHRoaXMuaXNFdmVuKCkgJiYgYWMpIHx8IG0uc2lnbnVtKCkgPT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIHZhciB1ID0gbS5jbG9uZSgpLCB2ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIGEgPSBuYnYoMSksIGIgPSBuYnYoMCksIGMgPSBuYnYoMCksIGQgPSBuYnYoMSk7XG4gICAgICB3aGlsZSh1LnNpZ251bSgpICE9IDApIHtcbiAgICAgICAgd2hpbGUodS5pc0V2ZW4oKSkge1xuICAgICAgICAgIHUuclNoaWZ0VG8oMSx1KTtcbiAgICAgICAgICBpZihhYykge1xuICAgICAgICAgICAgaWYoIWEuaXNFdmVuKCkgfHwgIWIuaXNFdmVuKCkpIHsgYS5hZGRUbyh0aGlzLGEpOyBiLnN1YlRvKG0sYik7IH1cbiAgICAgICAgICAgIGEuclNoaWZ0VG8oMSxhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighYi5pc0V2ZW4oKSkgYi5zdWJUbyhtLGIpO1xuICAgICAgICAgIGIuclNoaWZ0VG8oMSxiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh2LmlzRXZlbigpKSB7XG4gICAgICAgICAgdi5yU2hpZnRUbygxLHYpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYy5pc0V2ZW4oKSB8fCAhZC5pc0V2ZW4oKSkgeyBjLmFkZFRvKHRoaXMsYyk7IGQuc3ViVG8obSxkKTsgfVxuICAgICAgICAgICAgYy5yU2hpZnRUbygxLGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFkLmlzRXZlbigpKSBkLnN1YlRvKG0sZCk7XG4gICAgICAgICAgZC5yU2hpZnRUbygxLGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHUuY29tcGFyZVRvKHYpID49IDApIHtcbiAgICAgICAgICB1LnN1YlRvKHYsdSk7XG4gICAgICAgICAgaWYoYWMpIGEuc3ViVG8oYyxhKTtcbiAgICAgICAgICBiLnN1YlRvKGQsYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdi5zdWJUbyh1LHYpO1xuICAgICAgICAgIGlmKGFjKSBjLnN1YlRvKGEsYyk7XG4gICAgICAgICAgZC5zdWJUbyhiLGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih2LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIGlmKGQuY29tcGFyZVRvKG0pID49IDApIHJldHVybiBkLnN1YnRyYWN0KG0pO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIGQuYWRkVG8obSxkKTsgZWxzZSByZXR1cm4gZDtcbiAgICAgIGlmKGQuc2lnbnVtKCkgPCAwKSByZXR1cm4gZC5hZGQobSk7IGVsc2UgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgdmFyIGxvd3ByaW1lcyA9IFsyLDMsNSw3LDExLDEzLDE3LDE5LDIzLDI5LDMxLDM3LDQxLDQzLDQ3LDUzLDU5LDYxLDY3LDcxLDczLDc5LDgzLDg5LDk3LDEwMSwxMDMsMTA3LDEwOSwxMTMsMTI3LDEzMSwxMzcsMTM5LDE0OSwxNTEsMTU3LDE2MywxNjcsMTczLDE3OSwxODEsMTkxLDE5MywxOTcsMTk5LDIxMSwyMjMsMjI3LDIyOSwyMzMsMjM5LDI0MSwyNTEsMjU3LDI2MywyNjksMjcxLDI3NywyODEsMjgzLDI5MywzMDcsMzExLDMxMywzMTcsMzMxLDMzNywzNDcsMzQ5LDM1MywzNTksMzY3LDM3MywzNzksMzgzLDM4OSwzOTcsNDAxLDQwOSw0MTksNDIxLDQzMSw0MzMsNDM5LDQ0Myw0NDksNDU3LDQ2MSw0NjMsNDY3LDQ3OSw0ODcsNDkxLDQ5OSw1MDMsNTA5LDUyMSw1MjMsNTQxLDU0Nyw1NTcsNTYzLDU2OSw1NzEsNTc3LDU4Nyw1OTMsNTk5LDYwMSw2MDcsNjEzLDYxNyw2MTksNjMxLDY0MSw2NDMsNjQ3LDY1Myw2NTksNjYxLDY3Myw2NzcsNjgzLDY5MSw3MDEsNzA5LDcxOSw3MjcsNzMzLDczOSw3NDMsNzUxLDc1Nyw3NjEsNzY5LDc3Myw3ODcsNzk3LDgwOSw4MTEsODIxLDgyMyw4MjcsODI5LDgzOSw4NTMsODU3LDg1OSw4NjMsODc3LDg4MSw4ODMsODg3LDkwNyw5MTEsOTE5LDkyOSw5MzcsOTQxLDk0Nyw5NTMsOTY3LDk3MSw5NzcsOTgzLDk5MSw5OTddO1xuICAgIHZhciBscGxpbSA9ICgxPDwyNikvbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV07XG5cbiAgICAvLyAocHVibGljKSB0ZXN0IHByaW1hbGl0eSB3aXRoIGNlcnRhaW50eSA+PSAxLS41XnRcbiAgICBmdW5jdGlvbiBibklzUHJvYmFibGVQcmltZSh0KSB7XG4gICAgICB2YXIgaSwgeCA9IHRoaXMuYWJzKCk7XG4gICAgICBpZih4LnQgPT0gMSAmJiB4WzBdIDw9IGxvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdKSB7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IGxvd3ByaW1lcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICBpZih4WzBdID09IGxvd3ByaW1lc1tpXSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKHguaXNFdmVuKCkpIHJldHVybiBmYWxzZTtcbiAgICAgIGkgPSAxO1xuICAgICAgd2hpbGUoaSA8IGxvd3ByaW1lcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG0gPSBsb3dwcmltZXNbaV0sIGogPSBpKzE7XG4gICAgICAgIHdoaWxlKGogPCBsb3dwcmltZXMubGVuZ3RoICYmIG0gPCBscGxpbSkgbSAqPSBsb3dwcmltZXNbaisrXTtcbiAgICAgICAgbSA9IHgubW9kSW50KG0pO1xuICAgICAgICB3aGlsZShpIDwgaikgaWYobSVsb3dwcmltZXNbaSsrXSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4geC5taWxsZXJSYWJpbih0KTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmIHByb2JhYmx5IHByaW1lIChIQUMgNC4yNCwgTWlsbGVyLVJhYmluKVxuICAgIGZ1bmN0aW9uIGJucE1pbGxlclJhYmluKHQpIHtcbiAgICAgIHZhciBuMSA9IHRoaXMuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpO1xuICAgICAgdmFyIGsgPSBuMS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgIGlmKGsgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHIgPSBuMS5zaGlmdFJpZ2h0KGspO1xuICAgICAgdCA9ICh0KzEpPj4xO1xuICAgICAgaWYodCA+IGxvd3ByaW1lcy5sZW5ndGgpIHQgPSBsb3dwcmltZXMubGVuZ3RoO1xuICAgICAgdmFyIGEgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0OyArK2kpIHtcbiAgICAgICAgLy9QaWNrIGJhc2VzIGF0IHJhbmRvbSwgaW5zdGVhZCBvZiBzdGFydGluZyBhdCAyXG4gICAgICAgIGEuZnJvbUludChsb3dwcmltZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxvd3ByaW1lcy5sZW5ndGgpXSk7XG4gICAgICAgIHZhciB5ID0gYS5tb2RQb3cocix0aGlzKTtcbiAgICAgICAgaWYoeS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpICE9IDAgJiYgeS5jb21wYXJlVG8objEpICE9IDApIHtcbiAgICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgICAgd2hpbGUoaisrIDwgayAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgICAgeSA9IHkubW9kUG93SW50KDIsdGhpcyk7XG4gICAgICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZih5LmNvbXBhcmVUbyhuMSkgIT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaHVua1NpemUgPSBibnBDaHVua1NpemU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9SYWRpeCA9IGJucFRvUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVJhZGl4ID0gYm5wRnJvbVJhZGl4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21OdW1iZXIgPSBibnBGcm9tTnVtYmVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdHdpc2VUbyA9IGJucEJpdHdpc2VUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaGFuZ2VCaXQgPSBibnBDaGFuZ2VCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkVG8gPSBibnBBZGRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kTXVsdGlwbHkgPSBibnBETXVsdGlwbHk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZEFkZE9mZnNldCA9IGJucERBZGRPZmZzZXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlMb3dlclRvID0gYm5wTXVsdGlwbHlMb3dlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VXBwZXJUbyA9IGJucE11bHRpcGx5VXBwZXJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnQgPSBibnBNb2RJbnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWlsbGVyUmFiaW4gPSBibnBNaWxsZXJSYWJpbjtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsb25lID0gYm5DbG9uZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnRWYWx1ZSA9IGJuSW50VmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYnl0ZVZhbHVlID0gYm5CeXRlVmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hvcnRWYWx1ZSA9IGJuU2hvcnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaWdudW0gPSBiblNpZ051bTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0J5dGVBcnJheSA9IGJuVG9CeXRlQXJyYXk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gYm5FcXVhbHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWluID0gYm5NaW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWF4ID0gYm5NYXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kID0gYm5BbmQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUub3IgPSBibk9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGJuWG9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZE5vdCA9IGJuQW5kTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdCA9IGJuTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGJuU2hpZnRMZWZ0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBiblNoaWZ0UmlnaHQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2V0TG93ZXN0U2V0Qml0ID0gYm5HZXRMb3dlc3RTZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0Q291bnQgPSBibkJpdENvdW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRlc3RCaXQgPSBiblRlc3RCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2V0Qml0ID0gYm5TZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xlYXJCaXQgPSBibkNsZWFyQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZsaXBCaXQgPSBibkZsaXBCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkID0gYm5BZGQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBiblN1YnRyYWN0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gYm5NdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBibkRpdmlkZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBiblJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGVBbmRSZW1haW5kZXIgPSBibkRpdmlkZUFuZFJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBibk1vZFBvdztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gYm5Nb2RJbnZlcnNlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdyA9IGJuUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdjZCA9IGJuR0NEO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IGJuSXNQcm9iYWJsZVByaW1lO1xuXG4gICAgLy8gSlNCTi1zcGVjaWZpYyBleHRlbnNpb25cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBiblNxdWFyZTtcblxuICAgIC8vIEV4cG9zZSB0aGUgQmFycmV0dCBmdW5jdGlvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkJhcnJldHQgPSBCYXJyZXR0XG5cbiAgICAvLyBCaWdJbnRlZ2VyIGludGVyZmFjZXMgbm90IGltcGxlbWVudGVkIGluIGpzYm46XG5cbiAgICAvLyBCaWdJbnRlZ2VyKGludCBzaWdudW0sIGJ5dGVbXSBtYWduaXR1ZGUpXG4gICAgLy8gZG91YmxlIGRvdWJsZVZhbHVlKClcbiAgICAvLyBmbG9hdCBmbG9hdFZhbHVlKClcbiAgICAvLyBpbnQgaGFzaENvZGUoKVxuICAgIC8vIGxvbmcgbG9uZ1ZhbHVlKClcbiAgICAvLyBzdGF0aWMgQmlnSW50ZWdlciB2YWx1ZU9mKGxvbmcgdmFsKVxuXG4gICAgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgLSByZXF1aXJlcyBhIFBSTkcgYmFja2VuZCwgZS5nLiBwcm5nNC5qc1xuXG4gICAgLy8gRm9yIGJlc3QgcmVzdWx0cywgcHV0IGNvZGUgbGlrZVxuICAgIC8vIDxib2R5IG9uQ2xpY2s9J3JuZ19zZWVkX3RpbWUoKTsnIG9uS2V5UHJlc3M9J3JuZ19zZWVkX3RpbWUoKTsnPlxuICAgIC8vIGluIHlvdXIgbWFpbiBIVE1MIGRvY3VtZW50LlxuXG4gICAgdmFyIHJuZ19zdGF0ZTtcbiAgICB2YXIgcm5nX3Bvb2w7XG4gICAgdmFyIHJuZ19wcHRyO1xuXG4gICAgLy8gTWl4IGluIGEgMzItYml0IGludGVnZXIgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX2ludCh4KSB7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSB4ICYgMjU1O1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gOCkgJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiAxNikgJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiAyNCkgJiAyNTU7XG4gICAgICBpZihybmdfcHB0ciA+PSBybmdfcHNpemUpIHJuZ19wcHRyIC09IHJuZ19wc2l6ZTtcbiAgICB9XG5cbiAgICAvLyBNaXggaW4gdGhlIGN1cnJlbnQgdGltZSAody9taWxsaXNlY29uZHMpIGludG8gdGhlIHBvb2xcbiAgICBmdW5jdGlvbiBybmdfc2VlZF90aW1lKCkge1xuICAgICAgcm5nX3NlZWRfaW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBwb29sIHdpdGgganVuayBpZiBuZWVkZWQuXG4gICAgaWYocm5nX3Bvb2wgPT0gbnVsbCkge1xuICAgICAgcm5nX3Bvb2wgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgIHZhciB0O1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY3J5cHRvKSB7XG4gICAgICAgIGlmICh3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgIC8vIFVzZSB3ZWJjcnlwdG8gaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHVhID0gbmV3IFVpbnQ4QXJyYXkoMzIpO1xuICAgICAgICAgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHVhKTtcbiAgICAgICAgICBmb3IodCA9IDA7IHQgPCAzMjsgKyt0KVxuICAgICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB1YVt0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTmV0c2NhcGVcIiAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiA8IFwiNVwiKSB7XG4gICAgICAgICAgLy8gRXh0cmFjdCBlbnRyb3B5ICgyNTYgYml0cykgZnJvbSBOUzQgUk5HIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHZhciB6ID0gd2luZG93LmNyeXB0by5yYW5kb20oMzIpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IHoubGVuZ3RoOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHouY2hhckNvZGVBdCh0KSAmIDI1NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUocm5nX3BwdHIgPCBybmdfcHNpemUpIHsgIC8vIGV4dHJhY3Qgc29tZSByYW5kb21uZXNzIGZyb20gTWF0aC5yYW5kb20oKVxuICAgICAgICB0ID0gTWF0aC5mbG9vcig2NTUzNiAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHQgPj4+IDg7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCAmIDI1NTtcbiAgICAgIH1cbiAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5YKTtcbiAgICAgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5ZKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBybmdfZ2V0X2J5dGUoKSB7XG4gICAgICBpZihybmdfc3RhdGUgPT0gbnVsbCkge1xuICAgICAgICBybmdfc2VlZF90aW1lKCk7XG4gICAgICAgIHJuZ19zdGF0ZSA9IHBybmdfbmV3c3RhdGUoKTtcbiAgICAgICAgcm5nX3N0YXRlLmluaXQocm5nX3Bvb2wpO1xuICAgICAgICBmb3Iocm5nX3BwdHIgPSAwOyBybmdfcHB0ciA8IHJuZ19wb29sLmxlbmd0aDsgKytybmdfcHB0cilcbiAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cl0gPSAwO1xuICAgICAgICBybmdfcHB0ciA9IDA7XG4gICAgICAgIC8vcm5nX3Bvb2wgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogYWxsb3cgcmVzZWVkaW5nIGFmdGVyIGZpcnN0IHJlcXVlc3RcbiAgICAgIHJldHVybiBybmdfc3RhdGUubmV4dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZXMoYmEpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgYmEubGVuZ3RoOyArK2kpIGJhW2ldID0gcm5nX2dldF9ieXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2VjdXJlUmFuZG9tKCkge31cblxuICAgIFNlY3VyZVJhbmRvbS5wcm90b3R5cGUubmV4dEJ5dGVzID0gcm5nX2dldF9ieXRlcztcblxuICAgIC8vIHBybmc0LmpzIC0gdXNlcyBBcmNmb3VyIGFzIGEgUFJOR1xuXG4gICAgZnVuY3Rpb24gQXJjZm91cigpIHtcbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICB0aGlzLmogPSAwO1xuICAgICAgdGhpcy5TID0gbmV3IEFycmF5KCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhcmNmb3VyIGNvbnRleHQgZnJvbSBrZXksIGFuIGFycmF5IG9mIGludHMsIGVhY2ggZnJvbSBbMC4uMjU1XVxuICAgIGZ1bmN0aW9uIEFSQzRpbml0KGtleSkge1xuICAgICAgdmFyIGksIGosIHQ7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSlcbiAgICAgICAgdGhpcy5TW2ldID0gaTtcbiAgICAgIGogPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgaiA9IChqICsgdGhpcy5TW2ldICsga2V5W2kgJSBrZXkubGVuZ3RoXSkgJiAyNTU7XG4gICAgICAgIHQgPSB0aGlzLlNbaV07XG4gICAgICAgIHRoaXMuU1tpXSA9IHRoaXMuU1tqXTtcbiAgICAgICAgdGhpcy5TW2pdID0gdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICB0aGlzLmogPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEFSQzRuZXh0KCkge1xuICAgICAgdmFyIHQ7XG4gICAgICB0aGlzLmkgPSAodGhpcy5pICsgMSkgJiAyNTU7XG4gICAgICB0aGlzLmogPSAodGhpcy5qICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1O1xuICAgICAgdCA9IHRoaXMuU1t0aGlzLmldO1xuICAgICAgdGhpcy5TW3RoaXMuaV0gPSB0aGlzLlNbdGhpcy5qXTtcbiAgICAgIHRoaXMuU1t0aGlzLmpdID0gdDtcbiAgICAgIHJldHVybiB0aGlzLlNbKHQgKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTVdO1xuICAgIH1cblxuICAgIEFyY2ZvdXIucHJvdG90eXBlLmluaXQgPSBBUkM0aW5pdDtcbiAgICBBcmNmb3VyLnByb3RvdHlwZS5uZXh0ID0gQVJDNG5leHQ7XG5cbiAgICAvLyBQbHVnIGluIHlvdXIgUk5HIGNvbnN0cnVjdG9yIGhlcmVcbiAgICBmdW5jdGlvbiBwcm5nX25ld3N0YXRlKCkge1xuICAgICAgcmV0dXJuIG5ldyBBcmNmb3VyKCk7XG4gICAgfVxuXG4gICAgLy8gUG9vbCBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0IGFuZCBncmVhdGVyIHRoYW4gMzIuXG4gICAgLy8gQW4gYXJyYXkgb2YgYnl0ZXMgdGhlIHNpemUgb2YgdGhlIHBvb2wgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpXG4gICAgdmFyIHJuZ19wc2l6ZSA9IDI1NjtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICAgICAgZGVmYXVsdDogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIEJpZ0ludGVnZXI6IEJpZ0ludGVnZXIsXG4gICAgICAgICAgICBTZWN1cmVSYW5kb206IFNlY3VyZVJhbmRvbSxcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmpzYm4gPSB7XG4gICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICBTZWN1cmVSYW5kb206IFNlY3VyZVJhbmRvbVxuICAgICAgICB9O1xuICAgIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSAnLi9UaW1lci5qcyc7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwOyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lLFxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJpbmdcIiksXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyID0gbmV3IFRpbWVyKFwiQWNjZXNzIHRva2VuIGV4cGlyZWRcIilcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcblxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nID0gYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyO1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQgPSBhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lcjtcbiAgICB9XG5cbiAgICBsb2FkKGNvbnRhaW5lcikge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiBhbmQgaXQgaGFzIGFuIGV4cGlyYXRpb25cbiAgICAgICAgaWYgKGNvbnRhaW5lci5hY2Nlc3NfdG9rZW4gJiYgY29udGFpbmVyLmV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gY29udGFpbmVyLmV4cGlyZXNfaW47XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBhY2Nlc3MgdG9rZW4gcHJlc2VudCwgcmVtYWluaW5nIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV4cGlyaW5nIGlmIHdlIHN0aWxsIGhhdmUgdGltZVxuICAgICAgICAgICAgICAgIGxldCBleHBpcmluZyA9IGR1cmF0aW9uIC0gdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XG4gICAgICAgICAgICAgICAgaWYgKGV4cGlyaW5nIDw9IDApe1xuICAgICAgICAgICAgICAgICAgICBleHBpcmluZyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyaW5nIHRpbWVyIGluOlwiLCBleHBpcmluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5pbml0KGV4cGlyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBleHBpcmluZyB0aW1lciBiZWNhc2Ugd2UncmUgcGFzdCBleHBpcmF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBpdCdzIG5lZ2F0aXZlLCBpdCB3aWxsIHN0aWxsIGZpcmVcbiAgICAgICAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogcmVnaXN0ZXJpbmcgZXhwaXJlZCB0aW1lciBpbjpcIiwgZXhwaXJlZCk7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuaW5pdChleHBpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLnVubG9hZDogY2FuY2VsaW5nIGV4aXN0aW5nIGFjY2VzcyB0b2tlbiB0aW1lcnNcIik7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICBhZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKGNiKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG5cbiAgICBhZGRBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuY29uc3QgRGVmYXVsdEludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGNsYXNzIENoZWNrU2Vzc2lvbklGcmFtZSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIGNsaWVudF9pZCwgdXJsLCBpbnRlcnZhbCwgc3RvcE9uRXJyb3IgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5fc3RvcE9uRXJyb3IgPSBzdG9wT25FcnJvcjtcblxuICAgICAgICB2YXIgaWR4ID0gdXJsLmluZGV4T2YoXCIvXCIsIHVybC5pbmRleE9mKFwiLy9cIikgKyAyKTtcbiAgICAgICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICAgICAgLy8gc2hvdGd1biBhcHByb2FjaFxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHVybDtcbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX21lc3NhZ2UoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09IHRoaXMuX2ZyYW1lX29yaWdpbiAmJlxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJDaGVja1Nlc3Npb25JRnJhbWU6IGVycm9yIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RvcE9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5kYXRhID09PSBcImNoYW5nZWRcIikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZTogY2hhbmdlZCBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZTogXCIgKyBlLmRhdGEgKyBcIiBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbl9zdGF0ZSAhPT0gc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0XCIpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XG5cbiAgICAgICAgICAgIGxldCBzZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UodGhpcy5fY2xpZW50X2lkICsgXCIgXCIgKyB0aGlzLl9zZXNzaW9uX3N0YXRlLCB0aGlzLl9mcmFtZV9vcmlnaW4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdHJpZ2dlciBub3dcbiAgICAgICAgICAgIHNlbmQoKTtcblxuICAgICAgICAgICAgLy8gYW5kIHNldHVwIHRpbWVyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChzZW5kLCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdG9wXCIpO1xuXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBXaW5kb3cgfSBmcm9tICcuL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIHtcblxuICAgIHByZXBhcmUocGFyYW1zKSB7XG4gICAgICAgIHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzID0gJ2hpZGRlbj15ZXMnO1xuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gJy4vQ29yZG92YVBvcHVwV2luZG93LmpzJztcblxuZXhwb3J0IGNsYXNzIENvcmRvdmFQb3B1cE5hdmlnYXRvciB7XG5cbiAgICBwcmVwYXJlKHBhcmFtcykge1xuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuY29uc3QgRGVmYXVsdFBvcHVwRmVhdHVyZXMgPSAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vJztcbmNvbnN0IERlZmF1bHRQb3B1cFRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUG9wdXBXaW5kb3cge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSA9IHBhcmFtcy5zdGFydFVybDtcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93LmN0b3I6IHJlZGlyZWN0X3VyaTogXCIgKyB0aGlzLnJlZGlyZWN0X3VyaSk7XG4gICAgfVxuXG4gICAgX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gW1wiY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyXCIsIFwiY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyLmluYXBwYnJvd3NlclwiLCBcIm9yZy5hcGFjaGUuY29yZG92YS5pbmFwcGJyb3dzZXJcIl0uc29tZShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvcmRvdmFNZXRhZGF0YS5oYXNPd25Qcm9wZXJ0eShuYW1lKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcihcImNvcmRvdmEgaXMgdW5kZWZpbmVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb3Jkb3ZhTWV0YWRhdGEgPSB3aW5kb3cuY29yZG92YS5yZXF1aXJlKFwiY29yZG92YS9wbHVnaW5fbGlzdFwiKS5tZXRhZGF0YTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcihcIkluQXBwQnJvd3NlciBwbHVnaW4gbm90IGZvdW5kXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3B1cCA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4ocGFyYW1zLnVybCwgdGhpcy50YXJnZXQsIHRoaXMuZmVhdHVyZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BvcHVwKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93Lm5hdmlnYXRlOiBwb3B1cCBzdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2V4aXRDYWxsYmFjay5iaW5kKHRoaXMpOyBcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50ID0gdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2Fkc3RhcnRcIiwgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0IHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH1cblxuICAgIF9sb2FkU3RhcnRDYWxsYmFjayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YodGhpcy5yZWRpcmVjdF91cmkpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiBldmVudC51cmwgfSk7XG4gICAgICAgIH0gICAgXG4gICAgfVxuICAgIF9leGl0Q2FsbGJhY2sobWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9lcnJvcihtZXNzYWdlKTsgICAgXG4gICAgfVxuICAgIFxuICAgIF9zdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGNvcmRvdmEgcG9wdXAgd2luZG93XCIpO1xuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xuICAgIH1cbiAgICBfZXJyb3IobWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIH1cblxuICAgIF9jbGVhbnVwKCkge1xuICAgICAgICBpZiAodGhpcy5fcG9wdXApe1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93OiBjbGVhbmluZyB1cCBwb3B1cFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJleGl0XCIsIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcG9wdXAgPSBudWxsO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIEVycm9yUmVzcG9uc2UgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3Ioe2Vycm9yLCBlcnJvcl9kZXNjcmlwdGlvbiwgZXJyb3JfdXJpLCBzdGF0ZSwgc2Vzc2lvbl9zdGF0ZX09e31cbiAgICApIHtcbiAgICAgICAgIGlmICghZXJyb3Ipe1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gZXJyb3IgcGFzc2VkIHRvIEVycm9yUmVzcG9uc2VcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlcnJvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uIHx8IGVycm9yKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBcIkVycm9yUmVzcG9uc2VcIjtcblxuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSBlcnJvcl91cmk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEhhbmRsZXIoY2IpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnB1c2goY2IpO1xuICAgIH1cblxuICAgIHJlbW92ZUhhbmRsZXIoY2IpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2NhbGxiYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBjYik7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFpc2UoLi4ucGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkV2ZW50OiBSYWlzaW5nIGV2ZW50OiBcIiArIHRoaXMuX25hbWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW2ldKC4uLnBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5jb25zdCB0aW1lciA9IHtcbiAgICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGNiLCBkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoY2IsIGR1cmF0aW9uKTtcbiAgICB9LFxuICAgIGNsZWFySW50ZXJ2YWw6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9XG59O1xuXG5sZXQgdGVzdGluZyA9IGZhbHNlO1xubGV0IHJlcXVlc3QgPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgR2xvYmFsIHtcblxuICAgIHN0YXRpYyBfdGVzdGluZygpIHtcbiAgICAgICAgdGVzdGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBsb2NhdGlvbigpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBzZXNzaW9uU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0WE1MSHR0cFJlcXVlc3QobmV3UmVxdWVzdCkge1xuICAgICAgICByZXF1ZXN0ID0gbmV3UmVxdWVzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFhNTEh0dHBSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCB0aW1lcigpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBJRnJhbWVXaW5kb3cgfSBmcm9tICcuL0lGcmFtZVdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVOYXZpZ2F0b3Ige1xuXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcbiAgICAgICAgbGV0IGZyYW1lID0gbmV3IElGcmFtZVdpbmRvdyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZyYW1lKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayh1cmwpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lTmF2aWdhdG9yLmNhbGxiYWNrXCIpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50KHVybCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuY29uc3QgRGVmYXVsdFRpbWVvdXQgPSAxMDAwMDtcblxuZXhwb3J0IGNsYXNzIElGcmFtZVdpbmRvdyB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XG5cbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKHBhcmFtcykge1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IHBhcmFtcy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCBEZWZhdWx0VGltZW91dDtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5uYXZpZ2F0ZTogVXNpbmcgdGltZW91dCBvZjpcIiwgdGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX3RpbWVvdXQuYmluZCh0aGlzKSwgdGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5zcmMgPSBwYXJhbXMudXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93OiBTdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gZnJhbWUgd2luZG93XCIpO1xuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xuICAgIH1cbiAgICBfZXJyb3IobWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIH1cblxuICAgIF9jbGVhbnVwKCkge1xuICAgICAgICBpZiAodGhpcy5fZnJhbWUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogY2xlYW51cFwiKTtcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuX2ZyYW1lKTtcblxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RpbWVvdXQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy50aW1lb3V0XCIpO1xuICAgICAgICB0aGlzLl9lcnJvcihcIkZyYW1lIHdpbmRvdyB0aW1lZCBvdXRcIik7XG4gICAgfVxuXG4gICAgX21lc3NhZ2UoZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubWVzc2FnZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdGltZXIgJiZcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcbiAgICAgICAgICAgIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93XG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiB1cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZnJvbSBmcmFtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBfb3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgIH1cblxuICAgIHN0YXRpYyBub3RpZnlQYXJlbnQodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XG4gICAgICAgIGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudDogcG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh1cmwsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVdlYlN0b3JhZ2V7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGdldEl0ZW0oa2V5KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkluTWVtb3J5V2ViU3RvcmFnZS5nZXRJdGVtXCIsIGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV07XG4gICAgfVxuXG4gICAgc2V0SXRlbShrZXksIHZhbHVlKXtcbiAgICAgICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnNldEl0ZW1cIiwga2V5KTtcbiAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbShrZXkpe1xuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UucmVtb3ZlSXRlbVwiLCBrZXkpO1xuICAgICAgICBkZWxldGUgdGhpcy5fZGF0YVtrZXldO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKS5sZW5ndGg7XG4gICAgfVxuXG4gICAga2V5KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKVtpbmRleF07XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKb3NlVXRpbCh7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSkge1xuICAgIHJldHVybiBjbGFzcyBKb3NlVXRpbCB7XG5cbiAgICAgICAgc3RhdGljIHBhcnNlSnd0KGp3dCkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwucGFyc2VKd3RcIik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IGp3cy5KV1MucGFyc2Uoand0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHRva2VuLmhlYWRlck9iaixcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdG9rZW4ucGF5bG9hZE9ialxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpvc2VVdGlsLnZhbGlkYXRlSnd0XCIpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkua3R5ID09PSBcIlJTQVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuZSAmJiBrZXkubikge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkueDVjICYmIGtleS54NWMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGV4ID0gYjY0dG9oZXgoa2V5Lng1Y1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBYNTA5LmdldFB1YmxpY0tleUZyb21DZXJ0SGV4KGhleCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogUlNBIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkua3R5ID09PSBcIkVDXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5jcnYgJiYga2V5LnggJiYga2V5LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IEtleVV0aWwuZ2V0S2V5KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogRUMga2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRUMga2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBVbnN1cHBvcnRlZCBrZXkgdHlwZVwiLCBrZXkgJiYga2V5Lmt0eSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBrZXkgdHlwZTogXCIgKyBrZXkgJiYga2V5Lmt0eSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBKb3NlVXRpbC5fdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlICYmIGUubWVzc2FnZSB8fCBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJKV1QgdmFsaWRhdGlvbiBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkge1xuICAgICAgICAgICAgaWYgKCFjbG9ja1NrZXcpIHtcbiAgICAgICAgICAgICAgICBjbG9ja1NrZXcgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW5vdykge1xuICAgICAgICAgICAgICAgIG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKb3NlVXRpbC5wYXJzZUp3dChqd3QpLnBheWxvYWQ7XG5cbiAgICAgICAgICAgIGlmICghcGF5bG9hZC5pc3MpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpc3N1ZXIgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW5cIiwgcGF5bG9hZC5pc3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGlzc3VlciBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmlzcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuYXVkKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBhdWQgd2FzIG5vdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXVkIHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbGlkQXVkaWVuY2UgPSBwYXlsb2FkLmF1ZCA9PT0gYXVkaWVuY2UgfHwgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5hdWQpICYmIHBheWxvYWQuYXVkLmluZGV4T2YoYXVkaWVuY2UpID49IDApO1xuICAgICAgICAgICAgaWYgKCF2YWxpZEF1ZGllbmNlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuXCIsIHBheWxvYWQuYXVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF1ZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBheWxvYWQuYXpwICYmIHBheWxvYWQuYXpwICE9PSBhdWRpZW5jZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGF6cCBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF6cCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRpbWVJbnNlbnNpdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsb3dlck5vdyA9IG5vdyArIGNsb2NrU2tldztcbiAgICAgICAgICAgICAgICB2YXIgdXBwZXJOb3cgPSBub3cgLSBjbG9ja1NrZXc7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuaWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpYXQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb3dlck5vdyA8IHBheWxvYWQuaWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IGlzIGluIHRoZSBmdXR1cmVcIiwgcGF5bG9hZC5pYXQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaWF0IGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5pYXQpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5uYmYgJiYgbG93ZXJOb3cgPCBwYXlsb2FkLm5iZikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIm5iZiBpcyBpbiB0aGUgZnV0dXJlOiBcIiArIHBheWxvYWQubmJmKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmV4cCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5leHAgPCB1cHBlck5vdykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCBpcyBpbiB0aGUgcGFzdFwiLCBwYXlsb2FkLmV4cCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJleHAgaXMgaW4gdGhlIHBhc3Q6XCIgKyBwYXlsb2FkLmV4cCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYXlsb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBfdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcblxuICAgICAgICAgICAgcmV0dXJuIEpvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhqd3QsIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpLnRoZW4ocGF5bG9hZCA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3MuSldTLnZlcmlmeShqd3QsIGtleSwgQWxsb3dlZFNpZ25pbmdBbGdzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBzaWduYXR1cmUgdmFsaWRhdGlvbiBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBoYXNoU3RyaW5nKHZhbHVlLCBhbGcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5VdGlsLmhhc2hTdHJpbmcodmFsdWUsIGFsZyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoZXh0b2I2NHUodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSBmcm9tICcuL2NyeXB0by9yc2EnO1xuaW1wb3J0IGdldEpvc2VVdGlsIGZyb20gJy4vSm9zZVV0aWxJbXBsJztcblxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xuXG5leHBvcnQgY2xhc3MgSnNvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCwgXG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCwgXG4gICAgICAgIGp3dEhhbmRsZXIgPSBudWxsXG4gICAgKSB7XG4gICAgICAgIGlmIChhZGRpdGlvbmFsQ29udGVudFR5cGVzICYmIEFycmF5LmlzQXJyYXkoYWRkaXRpb25hbENvbnRlbnRUeXBlcykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IGFkZGl0aW9uYWxDb250ZW50VHlwZXMuc2xpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIGlmIChqd3RIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50VHlwZXMucHVzaCgnYXBwbGljYXRpb24vand0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0Q3RvcjtcbiAgICAgICAgdGhpcy5fand0SGFuZGxlciA9IGp3dEhhbmRsZXI7XG4gICAgfVxuXG4gICAgZ2V0SnNvbih1cmwsIHRva2VuKSB7XG4gICAgICAgIGlmICghdXJsKXtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IE5vIHVybCBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uLCB1cmw6IFwiLCB1cmwpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xuXG4gICAgICAgICAgICB2YXIgYWxsb3dlZENvbnRlbnRUeXBlcyA9IHRoaXMuX2NvbnRlbnRUeXBlcztcbiAgICAgICAgICAgIHZhciBqd3RIYW5kbGVyID0gdGhpcy5fand0SGFuZGxlcjtcblxuICAgICAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb246IEhUVFAgcmVzcG9uc2UgcmVjZWl2ZWQsIHN0YXR1c1wiLCByZXEuc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZS5zdGFydHNXaXRoKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQgPT0gXCJhcHBsaWNhdGlvbi9qd3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp3dEhhbmRsZXIocmVxKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogbmV0d29yayBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb246IHRva2VuIHBhc3NlZCwgc2V0dGluZyBBdXRob3JpemF0aW9uIGhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvc3RGb3JtKHVybCwgcGF5bG9hZCkge1xuICAgICAgICBpZiAoIXVybCl7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtLCB1cmw6IFwiLCB1cmwpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdQT1NUJywgdXJsKTtcblxuICAgICAgICAgICAgdmFyIGFsbG93ZWRDb250ZW50VHlwZXMgPSB0aGlzLl9jb250ZW50VHlwZXM7XG5cbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogSFRUUCByZXNwb25zZSByZWNlaXZlZCwgc3RhdHVzXCIsIHJlcS5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGFsbG93ZWRDb250ZW50VHlwZXMuZmluZChpdGVtPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSA0MDApIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZS5zdGFydHNXaXRoKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBmcm9tIHNlcnZlcjogXCIsIHBheWxvYWQuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihwYXlsb2FkLmVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQgKyBcIiAoXCIgKyByZXEuc3RhdHVzICsgXCIpXCIpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IG5ldHdvcmsgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgYm9keSA9IFwiXCI7XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBwYXlsb2FkKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXlsb2FkW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IFwiJlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBcIj1cIjtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgICAgICByZXEuc2VuZChib2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxubGV0IG5vcExvZ2dlciA9IHtcbiAgICBkZWJ1Zygpe30sXG4gICAgaW5mbygpe30sXG4gICAgd2Fybigpe30sXG4gICAgZXJyb3IoKXt9XG59O1xuXG5jb25zdCBOT05FID0gMDtcbmNvbnN0IEVSUk9SID0gMTtcbmNvbnN0IFdBUk4gPSAyO1xuY29uc3QgSU5GTyA9IDM7XG5jb25zdCBERUJVRyA9IDQ7XG5cbmxldCBsb2dnZXI7XG5sZXQgbGV2ZWw7XG5cbmV4cG9ydCBjbGFzcyBMb2cge1xuICAgIHN0YXRpYyBnZXQgTk9ORSgpIHtyZXR1cm4gTk9ORX07XG4gICAgc3RhdGljIGdldCBFUlJPUigpIHtyZXR1cm4gRVJST1J9O1xuICAgIHN0YXRpYyBnZXQgV0FSTigpIHtyZXR1cm4gV0FSTn07XG4gICAgc3RhdGljIGdldCBJTkZPKCkge3JldHVybiBJTkZPfTtcbiAgICBzdGF0aWMgZ2V0IERFQlVHKCkge3JldHVybiBERUJVR307XG4gICAgXG4gICAgc3RhdGljIHJlc2V0KCl7XG4gICAgICAgIGxldmVsID0gSU5GTztcbiAgICAgICAgbG9nZ2VyID0gbm9wTG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IGxldmVsKCl7XG4gICAgICAgIHJldHVybiBsZXZlbDtcbiAgICB9XG4gICAgc3RhdGljIHNldCBsZXZlbCh2YWx1ZSl7XG4gICAgICAgIGlmIChOT05FIDw9IHZhbHVlICYmIHZhbHVlIDw9IERFQlVHKXtcbiAgICAgICAgICAgIGxldmVsID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZyBsZXZlbFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IGxvZ2dlcigpe1xuICAgICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IGxvZ2dlcih2YWx1ZSl7XG4gICAgICAgIGlmICghdmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbykge1xuICAgICAgICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXG4gICAgICAgICAgICB2YWx1ZS5kZWJ1ZyA9IHZhbHVlLmluZm87XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbyAmJiB2YWx1ZS53YXJuICYmIHZhbHVlLmVycm9yKXtcbiAgICAgICAgICAgIGxvZ2dlciA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2dnZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGRlYnVnKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gREVCVUcpe1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGluZm8oLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBJTkZPKXtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHdhcm4oLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBXQVJOKXtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gRVJST1Ipe1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkxvZy5yZXNldCgpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcblxuY29uc3QgT2lkY01ldGFkYXRhVXJsUGF0aCA9ICcud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJNZXRhZGF0YVNlcnZpY2U6IE5vIHNldHRpbmdzIHBhc3NlZCB0byBNZXRhZGF0YVNlcnZpY2VcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihbJ2FwcGxpY2F0aW9uL2p3ay1zZXQranNvbiddKTtcbiAgICB9XG5cbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xuICAgIH1cblxuICAgIGdldE1ldGFkYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogUmV0dXJuaW5nIG1ldGFkYXRhIGZyb20gc2V0dGluZ3NcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGdldHRpbmcgbWV0YWRhdGEgZnJvbVwiLCB0aGlzLm1ldGFkYXRhVXJsKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih0aGlzLm1ldGFkYXRhVXJsKVxuICAgICAgICAgICAgLnRoZW4obWV0YWRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YToganNvbiByZWNlaXZlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldElzc3VlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJpc3N1ZXJcIik7XG4gICAgfVxuXG4gICAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImF1dGhvcml6YXRpb25fZW5kcG9pbnRcIik7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm9FbmRwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ1c2VyaW5mb19lbmRwb2ludFwiKTtcbiAgICB9XG5cbiAgICBnZXRUb2tlbkVuZHBvaW50KG9wdGlvbmFsPXRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ0b2tlbl9lbmRwb2ludFwiLCBvcHRpb25hbCk7XG4gICAgfVxuXG4gICAgZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImNoZWNrX3Nlc3Npb25faWZyYW1lXCIsIHRydWUpO1xuICAgIH1cblxuICAgIGdldEVuZFNlc3Npb25FbmRwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJlbmRfc2Vzc2lvbl9lbmRwb2ludFwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXRSZXZvY2F0aW9uRW5kcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwicmV2b2NhdGlvbl9lbmRwb2ludFwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXRLZXlzRW5kcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiandrc191cmlcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgX2dldE1ldGFkYXRhUHJvcGVydHkobmFtZSwgb3B0aW9uYWw9ZmFsc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHkgZm9yOiBcIiArIG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKCkudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogbWV0YWRhdGEgcmVjaWV2ZWRcIik7XG5cbiAgICAgICAgICAgIGlmIChtZXRhZGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBvcHRpb25hbCBwcm9wZXJ0eSBcIiArIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IE1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhW25hbWVdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTaWduaW5nS2V5cygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IFJldHVybmluZyBzaWduaW5nS2V5cyBmcm9tIHNldHRpbmdzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIpLnRoZW4oandrc191cmkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBqd2tzX3VyaSByZWNlaXZlZFwiLCBqd2tzX3VyaSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKGp3a3NfdXJpKS50aGVuKGtleVNldCA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBrZXkgc2V0IHJlY2VpdmVkXCIsIGtleVNldCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWtleVNldC5rZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyA9IGtleVNldC5rZXlzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tICcuL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcbmltcG9ydCB7IFNpZ25pblJlcXVlc3QgfSBmcm9tICcuL1NpZ25pblJlcXVlc3QuanMnO1xuaW1wb3J0IHsgU2lnbmluUmVzcG9uc2UgfSBmcm9tICcuL1NpZ25pblJlc3BvbnNlLmpzJztcbmltcG9ydCB7IFNpZ25vdXRSZXF1ZXN0IH0gZnJvbSAnLi9TaWdub3V0UmVxdWVzdC5qcyc7XG5pbXBvcnQgeyBTaWdub3V0UmVzcG9uc2UgfSBmcm9tICcuL1NpZ25vdXRSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBTaWduaW5TdGF0ZSB9IGZyb20gJy4vU2lnbmluU3RhdGUuanMnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30pIHtcbiAgICAgICAgaWYgKHNldHRpbmdzIGluc3RhbmNlb2YgT2lkY0NsaWVudFNldHRpbmdzKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBuZXcgT2lkY0NsaWVudFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBfc3RhdGVTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Muc3RhdGVTdG9yZTtcbiAgICB9XG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnZhbGlkYXRvcjtcbiAgICB9XG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1ldGFkYXRhU2VydmljZTtcbiAgICB9XG5cbiAgICBnZXQgc2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncztcbiAgICB9XG4gICAgZ2V0IG1ldGFkYXRhU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZTtcbiAgICB9XG5cbiAgICBjcmVhdGVTaWduaW5SZXF1ZXN0KHtcbiAgICAgICAgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIHJlZGlyZWN0X3VyaSxcbiAgICAgICAgLy8gZGF0YSB3YXMgbWVhbnQgdG8gYmUgdGhlIHBsYWNlIGEgY2FsbGVyIGNvdWxkIGluZGljYXRlIHRoZSBkYXRhIHRvXG4gICAgICAgIC8vIGhhdmUgcm91bmQgdHJpcHBlZCwgYnV0IHBlb3BsZSB3ZXJlIGdldHRpbmcgY29uZnVzZWQsIHNvIGkgYWRkZWQgc3RhdGUgKHNpbmNlIHRoYXQgbWF0Y2hlcyB0aGUgc3BlYylcbiAgICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxuICAgICAgICBkYXRhLCBzdGF0ZSwgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLFxuICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIHJlc3BvbnNlX21vZGUsIGV4dHJhUXVlcnlQYXJhbXMsIGV4dHJhVG9rZW5QYXJhbXMsIHJlcXVlc3RfdHlwZSwgc2tpcFVzZXJJbmZvIH0gPSB7fSxcbiAgICAgICAgc3RhdGVTdG9yZVxuICAgICkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25pblJlcXVlc3RcIik7XG5cbiAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgcmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGUgfHwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZTtcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcbiAgICAgICAgcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnJlZGlyZWN0X3VyaTtcblxuICAgICAgICAvLyBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50IGFyZW4ndCBhbGxvd2VkIG9uIF9zZXR0aW5nc1xuICAgICAgICBwcm9tcHQgPSBwcm9tcHQgfHwgdGhpcy5fc2V0dGluZ3MucHJvbXB0O1xuICAgICAgICBkaXNwbGF5ID0gZGlzcGxheSB8fCB0aGlzLl9zZXR0aW5ncy5kaXNwbGF5O1xuICAgICAgICBtYXhfYWdlID0gbWF4X2FnZSB8fCB0aGlzLl9zZXR0aW5ncy5tYXhfYWdlO1xuICAgICAgICB1aV9sb2NhbGVzID0gdWlfbG9jYWxlcyB8fCB0aGlzLl9zZXR0aW5ncy51aV9sb2NhbGVzO1xuICAgICAgICBhY3JfdmFsdWVzID0gYWNyX3ZhbHVlcyB8fCB0aGlzLl9zZXR0aW5ncy5hY3JfdmFsdWVzO1xuICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlIHx8IHRoaXMuX3NldHRpbmdzLnJlc291cmNlO1xuICAgICAgICByZXNwb25zZV9tb2RlID0gcmVzcG9uc2VfbW9kZSB8fCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlO1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0gZXh0cmFRdWVyeVBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVF1ZXJ5UGFyYW1zO1xuICAgICAgICBleHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVRva2VuUGFyYW1zO1xuXG4gICAgICAgIGxldCBhdXRob3JpdHkgPSB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHk7XG5cbiAgICAgICAgaWYgKFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpICYmIHJlc3BvbnNlX3R5cGUgIT09IFwiY29kZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiT3BlbklEIENvbm5lY3QgaHlicmlkIGZsb3cgaXMgbm90IHN1cHBvcnRlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdDogUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLCB1cmwpO1xuXG4gICAgICAgICAgICBsZXQgc2lnbmluUmVxdWVzdCA9IG5ldyBTaWduaW5SZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkLFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VyaSxcbiAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlLFxuICAgICAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgfHwgc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5LFxuICAgICAgICAgICAgICAgIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcyxcbiAgICAgICAgICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIGV4dHJhVG9rZW5QYXJhbXMsIHJlcXVlc3RfdHlwZSwgcmVzcG9uc2VfbW9kZSxcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0LFxuICAgICAgICAgICAgICAgIHNraXBVc2VySW5mb1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBzaWduaW5TdGF0ZSA9IHNpZ25pblJlcXVlc3Quc3RhdGU7XG4gICAgICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVTdG9yZS5zZXQoc2lnbmluU3RhdGUuaWQsIHNpZ25pblN0YXRlLnRvU3RvcmFnZVN0cmluZygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbmluUmVxdWVzdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHJlbW92ZVN0YXRlID0gZmFsc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZVwiKTtcblxuICAgICAgICBsZXQgdXNlUXVlcnkgPSB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlID09PSBcInF1ZXJ5XCIgfHwgXG4gICAgICAgICAgICAoIXRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgJiYgU2lnbmluUmVxdWVzdC5pc0NvZGUodGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZSkpO1xuICAgICAgICBsZXQgZGVsaW1pdGVyID0gdXNlUXVlcnkgPyBcIj9cIiA6IFwiI1wiO1xuXG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWduaW5SZXNwb25zZSh1cmwsIGRlbGltaXRlcik7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gc3RhdGUgaW4gcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgICAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZSA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSkgOiBzdGF0ZVN0b3JlLmdldC5iaW5kKHN0YXRlU3RvcmUpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShyZXNwb25zZS5zdGF0ZSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XG4gICAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBTaWduaW5TdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhzdG9yZWRTdGF0ZVN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4ge3N0YXRlLCByZXNwb25zZX07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbmluUmVzcG9uc2VcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbmluUmVzcG9uc2U6IFJlY2VpdmVkIHN0YXRlIGZyb20gc3RvcmFnZTsgdmFsaWRhdGluZyByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVTaWdub3V0UmVxdWVzdCh7aWRfdG9rZW5faGludCwgZGF0YSwgc3RhdGUsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlIH0gPSB7fSxcbiAgICAgICAgc3RhdGVTdG9yZVxuICAgICkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0XCIpO1xuXG4gICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRFbmRTZXNzaW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IE5vIGVuZCBzZXNzaW9uIGVuZHBvaW50IHVybCByZXR1cm5lZFwiKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBlbmQgc2Vzc2lvbiBlbmRwb2ludFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogUmVjZWl2ZWQgZW5kIHNlc3Npb24gZW5kcG9pbnRcIiwgdXJsKTtcblxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgU2lnbm91dFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBpZF90b2tlbl9oaW50LFxuICAgICAgICAgICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxuICAgICAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgcmVxdWVzdF90eXBlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIHNpZ25vdXRTdGF0ZSA9IHJlcXVlc3Quc3RhdGU7XG4gICAgICAgICAgICBpZiAoc2lnbm91dFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogU2lnbm91dCByZXF1ZXN0IGhhcyBzdGF0ZSB0byBwZXJzaXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcbiAgICAgICAgICAgICAgICBzdGF0ZVN0b3JlLnNldChzaWdub3V0U3RhdGUuaWQsIHNpZ25vdXRTdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCByZW1vdmVTdGF0ZSA9IGZhbHNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlXCIpO1xuXG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWdub3V0UmVzcG9uc2UodXJsKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBMb2cud2FybihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBSZXNwb25zZSB3YXMgZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe3VuZGVmaW5lZCwgcmVzcG9uc2V9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZUtleSA9IHJlc3BvbnNlLnN0YXRlO1xuXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICAgICAgdmFyIHN0YXRlQXBpID0gcmVtb3ZlU3RhdGUgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlQXBpKHN0YXRlS2V5KS50aGVuKHN0b3JlZFN0YXRlU3RyaW5nID0+IHtcbiAgICAgICAgICAgIGlmICghc3RvcmVkU3RhdGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhzdG9yZWRTdGF0ZVN0cmluZyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7c3RhdGUsIHJlc3BvbnNlfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc1NpZ25vdXRSZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHRydWUpLnRoZW4oKHtzdGF0ZSwgcmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWdub3V0UmVzcG9uc2U6IFJlY2VpdmVkIHN0YXRlIGZyb20gc3RvcmFnZTsgdmFsaWRhdGluZyByZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWdub3V0UmVzcG9uc2U6IE5vIHN0YXRlIGZyb20gc3RvcmFnZTsgc2tpcHBpbmcgdmFsaWRhdGluZyByZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyU3RhbGVTdGF0ZShzdGF0ZVN0b3JlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY2xlYXJTdGFsZVN0YXRlXCIpO1xuXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICAgICAgcmV0dXJuIFN0YXRlLmNsZWFyU3RhbGVTdGF0ZShzdGF0ZVN0b3JlLCB0aGlzLnNldHRpbmdzLnN0YWxlU3RhdGVBZ2UpO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XG5pbXBvcnQgeyBSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vUmVzcG9uc2VWYWxpZGF0b3IuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UuanMnO1xuXG5jb25zdCBPaWRjTWV0YWRhdGFVcmxQYXRoID0gJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcblxuY29uc3QgRGVmYXVsdFJlc3BvbnNlVHlwZSA9IFwiaWRfdG9rZW5cIjtcbmNvbnN0IERlZmF1bHRTY29wZSA9IFwib3BlbmlkXCI7XG5jb25zdCBEZWZhdWx0U3RhbGVTdGF0ZUFnZSA9IDYwICogMTU7IC8vIHNlY29uZHNcbmNvbnN0IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMgPSA2MCAqIDU7XG5cbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50U2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgLy8gbWV0YWRhdGEgcmVsYXRlZFxuICAgICAgICBhdXRob3JpdHksIG1ldGFkYXRhVXJsLCBtZXRhZGF0YSwgc2lnbmluZ0tleXMsXG4gICAgICAgIC8vIGNsaWVudCByZWxhdGVkXG4gICAgICAgIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVzcG9uc2VfdHlwZSA9IERlZmF1bHRSZXNwb25zZVR5cGUsIHNjb3BlID0gRGVmYXVsdFNjb3BlLFxuICAgICAgICByZWRpcmVjdF91cmksIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgICAgLy8gb3B0aW9uYWwgcHJvdG9jb2xcbiAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVzcG9uc2VfbW9kZSxcbiAgICAgICAgLy8gYmVoYXZpb3IgZmxhZ3NcbiAgICAgICAgZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSB0cnVlLCBsb2FkVXNlckluZm8gPSB0cnVlLFxuICAgICAgICBzdGFsZVN0YXRlQWdlID0gRGVmYXVsdFN0YWxlU3RhdGVBZ2UsIGNsb2NrU2tldyA9IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMsXG4gICAgICAgIHVzZXJJbmZvSnd0SXNzdWVyID0gJ09QJyxcbiAgICAgICAgLy8gb3RoZXIgYmVoYXZpb3JcbiAgICAgICAgc3RhdGVTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSgpLFxuICAgICAgICBSZXNwb25zZVZhbGlkYXRvckN0b3IgPSBSZXNwb25zZVZhbGlkYXRvcixcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcbiAgICAgICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSB7fSxcbiAgICAgICAgZXh0cmFUb2tlblBhcmFtcyA9IHt9XG4gICAgfSA9IHt9KSB7XG5cbiAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IG1ldGFkYXRhVXJsO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHNpZ25pbmdLZXlzO1xuXG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xuICAgICAgICB0aGlzLl9zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLl9yZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcblxuICAgICAgICB0aGlzLl9wcm9tcHQgPSBwcm9tcHQ7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xuICAgICAgICB0aGlzLl9tYXhfYWdlID0gbWF4X2FnZTtcbiAgICAgICAgdGhpcy5fdWlfbG9jYWxlcyA9IHVpX2xvY2FsZXM7XG4gICAgICAgIHRoaXMuX2Fjcl92YWx1ZXMgPSBhY3JfdmFsdWVzO1xuICAgICAgICB0aGlzLl9yZXNvdXJjZSA9IHJlc291cmNlO1xuICAgICAgICB0aGlzLl9yZXNwb25zZV9tb2RlID0gcmVzcG9uc2VfbW9kZTtcblxuICAgICAgICB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcyA9ICEhZmlsdGVyUHJvdG9jb2xDbGFpbXM7XG4gICAgICAgIHRoaXMuX2xvYWRVc2VySW5mbyA9ICEhbG9hZFVzZXJJbmZvO1xuICAgICAgICB0aGlzLl9zdGFsZVN0YXRlQWdlID0gc3RhbGVTdGF0ZUFnZTtcbiAgICAgICAgdGhpcy5fY2xvY2tTa2V3ID0gY2xvY2tTa2V3O1xuICAgICAgICB0aGlzLl91c2VySW5mb0p3dElzc3VlciA9IHVzZXJJbmZvSnd0SXNzdWVyO1xuXG4gICAgICAgIHRoaXMuX3N0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlO1xuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBuZXcgUmVzcG9uc2VWYWxpZGF0b3JDdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzKTtcblxuICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdHlwZW9mIGV4dHJhUXVlcnlQYXJhbXMgPT09ICdvYmplY3QnID8gZXh0cmFRdWVyeVBhcmFtcyA6IHt9O1xuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdHlwZW9mIGV4dHJhVG9rZW5QYXJhbXMgPT09ICdvYmplY3QnID8gZXh0cmFUb2tlblBhcmFtcyA6IHt9O1xuICAgIH1cblxuICAgIC8vIGNsaWVudCBjb25maWdcbiAgICBnZXQgY2xpZW50X2lkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50X2lkO1xuICAgIH1cbiAgICBzZXQgY2xpZW50X2lkKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2xpZW50X2lkKSB7XG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxuICAgICAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2NsaWVudF9pZDogY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY2xpZW50X3NlY3JldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XG4gICAgfVxuICAgIGdldCByZXNwb25zZV90eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VfdHlwZTtcbiAgICB9XG4gICAgZ2V0IHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gICAgfVxuICAgIGdldCByZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgfVxuXG5cbiAgICAvLyBvcHRpb25hbCBwcm90b2NvbCBwYXJhbXNcbiAgICBnZXQgcHJvbXB0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xuICAgIH1cbiAgICBnZXQgZGlzcGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXk7XG4gICAgfVxuICAgIGdldCBtYXhfYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4X2FnZTtcbiAgICB9XG4gICAgZ2V0IHVpX2xvY2FsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aV9sb2NhbGVzO1xuICAgIH1cbiAgICBnZXQgYWNyX3ZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fjcl92YWx1ZXM7XG4gICAgfVxuICAgIGdldCByZXNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlO1xuICAgIH1cbiAgICBnZXQgcmVzcG9uc2VfbW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XG4gICAgfVxuXG5cbiAgICAvLyBtZXRhZGF0YVxuICAgIGdldCBhdXRob3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRob3JpdHk7XG4gICAgfVxuICAgIHNldCBhdXRob3JpdHkodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hdXRob3JpdHkpIHtcbiAgICAgICAgICAgIC8vIG9uZS10aW1lIHNldCBvbmx5XG4gICAgICAgICAgICB0aGlzLl9hdXRob3JpdHkgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnRTZXR0aW5ncy5zZXRfYXV0aG9yaXR5OiBhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtZXRhZGF0YVVybCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSB0aGlzLmF1dGhvcml0eTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsICYmIHRoaXMuX21ldGFkYXRhVXJsLmluZGV4T2YoT2lkY01ldGFkYXRhVXJsUGF0aCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsW3RoaXMuX21ldGFkYXRhVXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSBPaWRjTWV0YWRhdGFVcmxQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xuICAgIH1cblxuICAgIC8vIHNldHRhYmxlL2NhY2hhYmxlIG1ldGFkYXRhIHZhbHVlc1xuICAgIGdldCBtZXRhZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhO1xuICAgIH1cbiAgICBzZXQgbWV0YWRhdGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2lnbmluZ0tleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5nS2V5cztcbiAgICB9XG4gICAgc2V0IHNpZ25pbmdLZXlzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3IgZmxhZ3NcbiAgICBnZXQgZmlsdGVyUHJvdG9jb2xDbGFpbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcztcbiAgICB9XG4gICAgZ2V0IGxvYWRVc2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VySW5mbztcbiAgICB9XG4gICAgZ2V0IHN0YWxlU3RhdGVBZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFsZVN0YXRlQWdlO1xuICAgIH1cbiAgICBnZXQgY2xvY2tTa2V3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvY2tTa2V3O1xuICAgIH1cbiAgICBnZXQgdXNlckluZm9Kd3RJc3N1ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb0p3dElzc3VlcjtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGVTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RvcmU7XG4gICAgfVxuICAgIGdldCB2YWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XG4gICAgfVxuICAgIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuXG4gICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXG4gICAgZ2V0IGV4dHJhUXVlcnlQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zO1xuICAgIH1cbiAgICBzZXQgZXh0cmFRdWVyeVBhcmFtcyh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBleHRyYSB0b2tlbiBwYXJhbXNcbiAgICBnZXQgZXh0cmFUb2tlblBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XG4gICAgfVxuICAgIHNldCBleHRyYVRva2VuUGFyYW1zKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFBvcHVwV2luZG93IH0gZnJvbSAnLi9Qb3B1cFdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cE5hdmlnYXRvciB7XG5cbiAgICBwcmVwYXJlKHBhcmFtcykge1xuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgUG9wdXBXaW5kb3cocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwTmF2aWdhdG9yLmNhbGxiYWNrXCIpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXIodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XG5cbmNvbnN0IENoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbCA9IDUwMDtcbmNvbnN0IERlZmF1bHRQb3B1cEZlYXR1cmVzID0gJ2xvY2F0aW9uPW5vLHRvb2xiYXI9bm8sd2lkdGg9NTAwLGhlaWdodD01MDAsbGVmdD0xMDAsdG9wPTEwMDsnO1xuLy9jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7cmVzaXphYmxlPXllcyc7XG5cbmNvbnN0IERlZmF1bHRQb3B1cFRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cFdpbmRvdyB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gcGFyYW1zLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgRGVmYXVsdFBvcHVwRmVhdHVyZXM7XG5cbiAgICAgICAgdGhpcy5fcG9wdXAgPSB3aW5kb3cub3BlbignJywgdGFyZ2V0LCBmZWF0dXJlcyk7XG4gICAgICAgIGlmICh0aGlzLl9wb3B1cCkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY3RvcjogcG9wdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZC5iaW5kKHRoaXMpLCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKHBhcmFtcykge1xuICAgICAgICBpZiAoIXRoaXMuX3BvcHVwKSB7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIlBvcHVwV2luZG93Lm5hdmlnYXRlOiBFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIlBvcHVwV2luZG93Lm5hdmlnYXRlOiBubyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93Lm5hdmlnYXRlOiBTZXR0aW5nIFVSTCBpbiBwb3B1cFwiKTtcblxuICAgICAgICAgICAgdGhpcy5faWQgPSBwYXJhbXMuaWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5faWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgcGFyYW1zLmlkXSA9IHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLl9wb3B1cC53aW5kb3cubG9jYXRpb24gPSBwYXJhbXMudXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICB9XG5cbiAgICBfc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBTdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gcG9wdXAgd2luZG93XCIpO1xuXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcbiAgICB9XG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgTG9nLmVycm9yKFwiUG9wdXBXaW5kb3cuZXJyb3I6IFwiLCBtZXNzYWdlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoZmFsc2UpO1xuICAgIH1cblxuICAgIF9jbGVhbnVwKGtlZXBPcGVuKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNsZWFudXBcIik7XG5cbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyKTtcbiAgICAgICAgdGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyID0gbnVsbDtcblxuICAgICAgICBkZWxldGUgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHRoaXMuX2lkXTtcblxuICAgICAgICBpZiAodGhpcy5fcG9wdXAgJiYgIWtlZXBPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BvcHVwID0gbnVsbDtcbiAgICB9XG5cbiAgICBfY2hlY2tGb3JQb3B1cENsb3NlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cCB8fCB0aGlzLl9wb3B1cC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXAgd2luZG93IGNsb3NlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoa2VlcE9wZW4pO1xuXG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiB1cmwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjazogSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gcG9wdXBcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xuICAgICAgICBpZiAod2luZG93Lm9wZW5lcikge1xuICAgICAgICAgICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgZGVsaW1pdGVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gXCJwb3B1cENhbGxiYWNrX1wiICsgZGF0YS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gd2luZG93Lm9wZW5lcltuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IHBhc3NpbmcgdXJsIG1lc3NhZ2UgdG8gb3BlbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodXJsLCBrZWVwT3Blbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gbWF0Y2hpbmcgY2FsbGJhY2sgZm91bmQgb24gb3BlbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gc3RhdGUgZm91bmQgaW4gcmVzcG9uc2UgdXJsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy53YXJuKFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBubyB3aW5kb3cub3BlbmVyLiBDYW4ndCBjb21wbGV0ZSBub3RpZmljYXRpb24uXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuXG5leHBvcnQgY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3Ige1xuXG4gICAgcHJlcGFyZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlZGlyZWN0TmF2aWdhdG9yLm5hdmlnYXRlOiBObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMudXNlUmVwbGFjZVRvTmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhcmFtcy51cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBnZXQgdXJsKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UuanMnO1xuaW1wb3J0IHsgVXNlckluZm9TZXJ2aWNlIH0gZnJvbSAnLi9Vc2VySW5mb1NlcnZpY2UuanMnO1xuaW1wb3J0IHsgVG9rZW5DbGllbnQgfSBmcm9tICcuL1Rva2VuQ2xpZW50LmpzJztcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuL0Vycm9yUmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcblxuY29uc3QgUHJvdG9jb2xDbGFpbXMgPSBbXCJub25jZVwiLCBcImF0X2hhc2hcIiwgXCJpYXRcIiwgXCJuYmZcIiwgXCJleHBcIiwgXCJhdWRcIiwgXCJpc3NcIiwgXCJjX2hhc2hcIl07XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVZhbGlkYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXG4gICAgICAgIFVzZXJJbmZvU2VydmljZUN0b3IgPSBVc2VySW5mb1NlcnZpY2UsIFxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsLFxuICAgICAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWQgdG8gUmVzcG9uc2VWYWxpZGF0b3JcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fdXNlckluZm9TZXJ2aWNlID0gbmV3IFVzZXJJbmZvU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9qb3NlVXRpbCA9IGpvc2VVdGlsO1xuICAgICAgICB0aGlzLl90b2tlbkNsaWVudCA9IG5ldyBUb2tlbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2VcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHN0YXRlIHByb2Nlc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVRva2VucyhzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHRva2VucyB2YWxpZGF0ZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZTogY2xhaW1zIHByb2Nlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlU2lnbm91dFJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcbiAgICAgICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcbiAgICAgICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgZm9yIGJvdGggc3VjY2VzcyAmIGVycm9yIG91dGNvbWVzXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBzdGF0ZSB2YWxpZGF0ZWRcIik7XG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIF9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5jbGllbnRfaWQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBjbGllbnRfaWQgb24gc3RhdGVcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gYXV0aG9yaXR5IG9uIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIGFsbG93cyB0aGUgYXV0aG9yaXR5IHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBzaWduaW4gc3RhdGVcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSA9IHN0YXRlLmF1dGhvcml0eTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbnN1cmUgd2UncmUgdXNpbmcgdGhlIGNvcnJlY3QgYXV0aG9yaXR5IGlmIHRoZSBhdXRob3JpdHkgaXMgbm90IGxvYWRlZCBmcm9tIHNpZ25pbiBzdGF0ZVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgJiYgdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ICE9PSBzdGF0ZS5hdXRob3JpdHkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGNsaWVudF9pZCB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgPSBzdGF0ZS5jbGllbnRfaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGNsaWVudF9pZCBpZiB0aGUgY2xpZW50X2lkIGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkICYmIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCAhPT0gc3RhdGUuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcbiAgICAgICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcbiAgICAgICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgZm9yIGJvdGggc3VjY2VzcyAmIGVycm9yIG91dGNvbWVzXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBzdGF0ZSB2YWxpZGF0ZWRcIik7XG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IFJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAmJiAhcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaWRfdG9rZW4gaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5ub25jZSAmJiByZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vdCBleHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUuY29kZV92ZXJpZmllciAmJiAhcmVzcG9uc2UuY29kZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IEV4cGVjdGluZyBjb2RlIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGNvZGUgaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5jb2RlX3ZlcmlmaWVyICYmIHJlc3BvbnNlLmNvZGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBjb2RlIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc2NvcGUpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2NvcGUgb24gdGhlIHJlc3BvbnNlLCB0aGVuIGFzc3VtZSBhbGwgc2NvcGVzIGdyYW50ZWQgKHBlci1zcGVjKSBhbmQgY29weSBvdmVyIHNjb3BlcyBmcm9tIG9yaWdpbmFsIHJlcXVlc3RcbiAgICAgICAgICAgIHJlc3BvbnNlLnNjb3BlID0gc3RhdGUuc2NvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc0NsYWltcyhzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmlzT3BlbklkQ29ubmVjdCkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHJlc3BvbnNlIGlzIE9JREMsIHByb2Nlc3NpbmcgY2xhaW1zXCIpO1xuXG4gICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMocmVzcG9uc2UucHJvZmlsZSk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZS5za2lwVXNlckluZm8gIT09IHRydWUgJiYgdGhpcy5fc2V0dGluZ3MubG9hZFVzZXJJbmZvICYmIHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiBsb2FkaW5nIHVzZXIgaW5mb1wiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zKHJlc3BvbnNlLmFjY2Vzc190b2tlbikudGhlbihjbGFpbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogdXNlciBpbmZvIGNsYWltcyByZWNlaXZlZCBmcm9tIHVzZXIgaW5mbyBlbmRwb2ludFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhaW1zLnN1YiAhPT0gcmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiBzdWIgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnQgZG9lcyBub3QgbWF0Y2ggc3ViIGluIGFjY2Vzc190b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJzdWIgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnQgZG9lcyBub3QgbWF0Y2ggc3ViIGluIGFjY2Vzc190b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gdGhpcy5fbWVyZ2VDbGFpbXMocmVzcG9uc2UucHJvZmlsZSwgY2xhaW1zKTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQsIHVwZGF0ZWQgcHJvZmlsZTpcIiwgcmVzcG9uc2UucHJvZmlsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IG5vdCBsb2FkaW5nIHVzZXIgaW5mb1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBub3QgT0lEQywgbm90IHByb2Nlc3NpbmcgY2xhaW1zXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgX21lcmdlQ2xhaW1zKGNsYWltczEsIGNsYWltczIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltczEpO1xuXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gY2xhaW1zMikge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGNsYWltczJbbmFtZV07XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbbmFtZV0uaW5kZXhPZih2YWx1ZSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0W25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gdGhpcy5fbWVyZ2VDbGFpbXMocmVzdWx0W25hbWVdLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gW3Jlc3VsdFtuYW1lXSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfZmlsdGVyUHJvdG9jb2xDbGFpbXMoY2xhaW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltcywgaW5jb21pbmcgY2xhaW1zOlwiLCBjbGFpbXMpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMpIHtcbiAgICAgICAgICAgIFByb3RvY29sQ2xhaW1zLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFt0eXBlXTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXM6IHByb3RvY29sIGNsYWltcyBmaWx0ZXJlZFwiLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgbm90IGZpbHRlcmVkXCIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF92YWxpZGF0ZVRva2VucyhzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBjb2RlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IFZhbGlkYXRpbmcgaWRfdG9rZW4gYW5kIGFjY2Vzc190b2tlblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuQW5kQWNjZXNzVG9rZW4oc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBObyBjb2RlIHRvIHByb2Nlc3Mgb3IgaWRfdG9rZW4gdG8gdmFsaWRhdGVcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIF9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IHN0YXRlLmNsaWVudF9pZCxcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHN0YXRlLmNsaWVudF9zZWNyZXQsXG4gICAgICAgICAgICBjb2RlIDogcmVzcG9uc2UuY29kZSxcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogc3RhdGUucmVkaXJlY3RfdXJpLFxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogc3RhdGUuY29kZV92ZXJpZmllclxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzdGF0ZS5leHRyYVRva2VuUGFyYW1zICYmIHR5cGVvZihzdGF0ZS5leHRyYVRva2VuUGFyYW1zKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVxdWVzdCwgc3RhdGUuZXh0cmFUb2tlblBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbkNsaWVudC5leGNoYW5nZUNvZGUocmVxdWVzdCkudGhlbih0b2tlblJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gdG9rZW5SZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlW2tleV0gPSB0b2tlblJlc3BvbnNlW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcHJvY2Vzc2luZyBpZF90b2tlblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlcyhzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDb2RlOiB0b2tlbiByZXNwb25zZSBzdWNjZXNzZnVsLCByZXR1cm5pbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xuXG4gICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XG4gICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IFZhbGlkYWluZyBKV1QgYXR0cmlidXRlczsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLCBjbG9ja1NrZXdJblNlY29uZHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKHJlc3BvbnNlLmlkX3Rva2VuLCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXdJblNlY29uZHMpLnRoZW4ocGF5bG9hZCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgc3RhdGUubm9uY2UgIT09IHBheWxvYWQubm9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gcGF5bG9hZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVBY2Nlc3NUb2tlbihyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghc3RhdGUubm9uY2UpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIG5vbmNlIG9uIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG5vbmNlIG9uIHN0YXRlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XG4gICAgICAgIGlmICghand0IHx8ICFqd3QuaGVhZGVyIHx8ICFqd3QucGF5bG9hZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIsIGp3dCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAhPT0gand0LnBheWxvYWQubm9uY2UpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKS50aGVuKGlzc3VlciA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBSZWNlaXZlZCBpc3N1ZXJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXMoKS50aGVuKGtleXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgha2V5cykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBSZWNlaXZlZCBzaWduaW5nIGtleXNcIik7XG4gICAgICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzID0gdGhpcy5fZmlsdGVyQnlBbGcoa2V5cywgand0LmhlYWRlci5hbGcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBraWQgaXMgbWFuZGF0b3J5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUga2V5cyBpbiB0aGUgcmVmZXJlbmNlZCBKV0sgU2V0IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcbiAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbC52YWxpZGF0ZUp3dChyZXNwb25zZS5pZF90b2tlbiwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXdJblNlY29uZHMpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWp3dC5wYXlsb2FkLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IGp3dC5wYXlsb2FkO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKXtcbiAgICAgICAgdmFyIGt0eSA9IG51bGw7XG4gICAgICAgIGlmIChhbGcuc3RhcnRzV2l0aChcIlJTXCIpKSB7XG4gICAgICAgICAgICBrdHkgPSBcIlJTQVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiUFNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiUFNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIkVTXCIpKSB7XG4gICAgICAgICAgICBrdHkgPSBcIkVDXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJCeUFsZzogTG9va2luZyBmb3Iga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSk7XG5cbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ga2V5Lmt0eSA9PT0ga3R5O1xuICAgICAgICB9KTtcblxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IE51bWJlciBvZiBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5LCBrZXlzLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5wcm9maWxlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogTm8gcHJvZmlsZSBsb2FkZWQgZnJvbSBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwcm9maWxlIGxvYWRlZCBmcm9tIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgand0ID0gdGhpcy5fam9zZVV0aWwucGFyc2VKd3QocmVzcG9uc2UuaWRfdG9rZW4pO1xuICAgICAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlcikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFzaEFsZyA9IGp3dC5oZWFkZXIuYWxnO1xuICAgICAgICBpZiAoIWhhc2hBbGcgfHwgaGFzaEFsZy5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFzaEJpdHMgPSBoYXNoQWxnLnN1YnN0cigyLCAzKTtcbiAgICAgICAgaWYgKCFoYXNoQml0cykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBoYXNoQml0cyA9IHBhcnNlSW50KGhhc2hCaXRzKTtcbiAgICAgICAgaWYgKGhhc2hCaXRzICE9PSAyNTYgJiYgaGFzaEJpdHMgIT09IDM4NCAmJiBoYXNoQml0cyAhPT0gNTEyKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGEgPSBcInNoYVwiICsgaGFzaEJpdHM7XG4gICAgICAgIHZhciBoYXNoID0gdGhpcy5fam9zZVV0aWwuaGFzaFN0cmluZyhyZXNwb25zZS5hY2Nlc3NfdG9rZW4sIHNoYSk7XG4gICAgICAgIGlmICghaGFzaCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IGFjY2Vzc190b2tlbiBoYXNoIGZhaWxlZDpcIiwgc2hhKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVmdCA9IGhhc2guc3Vic3RyKDAsIGhhc2gubGVuZ3RoIC8gMik7XG4gICAgICAgIHZhciBsZWZ0X2I2NHUgPSB0aGlzLl9qb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChsZWZ0KTtcbiAgICAgICAgaWYgKGxlZnRfYjY0dSAhPT0gcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIiwgbGVmdF9iNjR1LCByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBzdWNjZXNzXCIpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IENoZWNrU2Vzc2lvbklGcmFtZSB9IGZyb20gJy4vQ2hlY2tTZXNzaW9uSUZyYW1lLmpzJztcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25Nb25pdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHVzZXJNYW5hZ2VyLCBDaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lLCB0aW1lciA9IEdsb2JhbC50aW1lcikge1xuICAgICAgICBpZiAoIXVzZXJNYW5hZ2VyKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvci5jdG9yOiBObyB1c2VyIG1hbmFnZXIgcGFzc2VkIHRvIFNlc3Npb25Nb25pdG9yXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlck1hbmFnZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlciA9IHVzZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvcjtcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcblxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlckxvYWRlZCh0aGlzLl9zdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZFVzZXJVbmxvYWRlZCh0aGlzLl9zdG9wLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgLy8gZG9pbmcgdGhpcyBtYW51YWxseSBoZXJlIHNpbmNlIGNhbGxpbmcgZ2V0VXNlciBcbiAgICAgICAgICAgIC8vIGRvZXNuJ3QgdHJpZ2dlciBsb2FkIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzKCkudGhlbihzZXNzaW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlIDogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2Vzc2lvbi5zdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yIGN0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvciBjdG9yOiBlcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IF9zZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNYW5hZ2VyLnNldHRpbmdzO1xuICAgIH1cbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNYW5hZ2VyLm1ldGFkYXRhU2VydmljZTtcbiAgICB9XG4gICAgZ2V0IF9jbGllbnRfaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgfVxuICAgIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICB9XG4gICAgZ2V0IF9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnN0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuICAgIH1cblxuICAgIF9zdGFydCh1c2VyKSB7XG4gICAgICAgIGxldCBzZXNzaW9uX3N0YXRlID0gdXNlci5zZXNzaW9uX3N0YXRlO1xuXG4gICAgICAgIGlmIChzZXNzaW9uX3N0YXRlKSB7XG4gICAgICAgICAgICBpZiAodXNlci5wcm9maWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWQgPSB1c2VyLnByb2ZpbGUuc2lkO1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbl9zdGF0ZSwgXCIsIHN1YjpcIiwgdGhpcy5fc3ViKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBzZXNzaW9uX3N0YXRlOlwiLCBzZXNzaW9uX3N0YXRlLCBcIiwgYW5vbnltb3VzIHVzZXJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldENoZWNrU2Vzc2lvbklmcmFtZSgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBJbml0aWFsaXppbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWVcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX2NsaWVudF9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3BPbkVycm9yID0gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSA9IG5ldyB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yKHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyksIGNsaWVudF9pZCwgdXJsLCBpbnRlcnZhbCwgc3RvcE9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy53YXJuKFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBObyBjaGVjayBzZXNzaW9uIGlmcmFtZSBmb3VuZCBpbiB0aGUgbWV0YWRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gbm9uLXByb21pc2UgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBFcnJvciBmcm9tIGdldENoZWNrU2Vzc2lvbklmcmFtZTpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N0b3AoKSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fc2lkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdG9wXCIpO1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgICAgICAgLy8gdXNpbmcgYSB0aW1lciB0byBkZWxheSByZS1pbml0aWFsaXphdGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIHNpZ25vdXRcbiAgICAgICAgICAgIGxldCB0aW1lckhhbmRsZSA9IHRoaXMuX3RpbWVyLnNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5fdGltZXIuY2xlYXJJbnRlcnZhbCh0aW1lckhhbmRsZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXMoKS50aGVuKHNlc3Npb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG1wVXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGUgOiBzZXNzaW9uLnNlc3Npb25fc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc3ViICYmIHNlc3Npb24uc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBzZXNzaW9uLnN1YixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWQ6IHNlc3Npb24uc2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHRtcFVzZXIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzKCkudGhlbihzZXNzaW9uID0+IHtcbiAgICAgICAgICAgIHZhciByYWlzZUV2ZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgPT09IHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgICAgICAgICByYWlzZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uLnNlc3Npb25fc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnNpZCA9PT0gdGhpcy5fc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU2FtZSBzdWIgc3RpbGwgbG9nZ2VkIGluIGF0IE9QLCBzZXNzaW9uIHN0YXRlIGhhcyBjaGFuZ2VkLCByZXN0YXJ0aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lOyBzZXNzaW9uX3N0YXRlOlwiLCBzZXNzaW9uLnNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IERpZmZlcmVudCBzdWJqZWN0IHNpZ25lZCBpbnRvIE9QOlwiLCBzZXNzaW9uLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTdWJqZWN0IG5vIGxvbmdlciBzaWduZWQgaW50byBPUFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJhaXNlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgaW4gZXZlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkSW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3ViKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBFcnJvciBjYWxsaW5nIHF1ZXJ5Q3VycmVudFNpZ25pblNlc3Npb247IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XG5pbXBvcnQgeyBTaWduaW5TdGF0ZSB9IGZyb20gJy4vU2lnbmluU3RhdGUuanMnO1xuXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICAvLyBtYW5kYXRvcnlcbiAgICAgICAgdXJsLCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIGF1dGhvcml0eSxcbiAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgZGF0YSwgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVzcG9uc2VfbW9kZSxcbiAgICAgICAgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIHJlcXVlc3RfdHlwZSwgY2xpZW50X3NlY3JldCwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvXG4gICAgfSkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGNsaWVudF9pZCBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWRpcmVjdF91cmkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVkaXJlY3RfdXJpIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZGlyZWN0X3VyaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVzcG9uc2VfdHlwZSBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXNwb25zZV90eXBlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2NvcGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gc2NvcGUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2NvcGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdXRob3JpdHkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gYXV0aG9yaXR5IHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvaWRjID0gU2lnbmluUmVxdWVzdC5pc09pZGMocmVzcG9uc2VfdHlwZSk7XG4gICAgICAgIGxldCBjb2RlID0gU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZV9tb2RlKSB7XG4gICAgICAgICAgICByZXNwb25zZV9tb2RlID0gU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSkgPyBcInF1ZXJ5XCIgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBTaWduaW5TdGF0ZSh7IG5vbmNlOiBvaWRjLCBcbiAgICAgICAgICAgIGRhdGEsIGNsaWVudF9pZCwgYXV0aG9yaXR5LCByZWRpcmVjdF91cmksIFxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogY29kZSwgXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGUsIHJlc3BvbnNlX21vZGUsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0LCBzY29wZSwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvIH0pO1xuXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiY2xpZW50X2lkXCIsIGNsaWVudF9pZCk7XG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVkaXJlY3RfdXJpXCIsIHJlZGlyZWN0X3VyaSk7XG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVzcG9uc2VfdHlwZVwiLCByZXNwb25zZV90eXBlKTtcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzY29wZVwiLCBzY29wZSk7XG5cbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcbiAgICAgICAgaWYgKG9pZGMpIHtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwibm9uY2VcIiwgdGhpcy5zdGF0ZS5ub25jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiY29kZV9jaGFsbGVuZ2VcIiwgdGhpcy5zdGF0ZS5jb2RlX2NoYWxsZW5nZSk7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlX21ldGhvZFwiLCBcIlMyNTZcIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9uYWwgPSB7IHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlIH07XG4gICAgICAgIGZvcihsZXQga2V5IGluIG9wdGlvbmFsKXtcbiAgICAgICAgICAgIGlmIChvcHRpb25hbFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBvcHRpb25hbFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQga2V5IGluIGV4dHJhUXVlcnlQYXJhbXMpe1xuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBleHRyYVF1ZXJ5UGFyYW1zW2tleV0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNPaWRjKHJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09PSBcImlkX3Rva2VuXCI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNPQXV0aChyZXNwb25zZV90eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZV90eXBlLnNwbGl0KC9cXHMrL2cpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJ0b2tlblwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEhKHJlc3VsdFswXSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBpc0NvZGUocmVzcG9uc2VfdHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiY29kZVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEhKHJlc3VsdFswXSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XG5cbmNvbnN0IE9pZGNTY29wZSA9IFwib3BlbmlkXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWduaW5SZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IodXJsLCBkZWxpbWl0ZXIgPSBcIiNcIikge1xuXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xuXG4gICAgICAgIHRoaXMuZXJyb3IgPSB2YWx1ZXMuZXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gdmFsdWVzLmVycm9yX3VyaTtcblxuICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZXMuY29kZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhbHVlcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5pZF90b2tlbiA9IHZhbHVlcy5pZF90b2tlbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gdmFsdWVzLnNlc3Npb25fc3RhdGU7XG4gICAgICAgIHRoaXMuYWNjZXNzX3Rva2VuID0gdmFsdWVzLmFjY2Vzc190b2tlbjtcbiAgICAgICAgdGhpcy50b2tlbl90eXBlID0gdmFsdWVzLnRva2VuX3R5cGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZXMuc2NvcGU7XG4gICAgICAgIHRoaXMucHJvZmlsZSA9IHVuZGVmaW5lZDsgLy8gd2lsbCBiZSBzZXQgZnJvbSBSZXNwb25zZVZhbGlkYXRvclxuXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHZhbHVlcy5leHBpcmVzX2luO1xuICAgIH1cblxuICAgIGdldCBleHBpcmVzX2luKCkge1xuICAgICAgICBpZiAodGhpcy5leHBpcmVzX2F0KSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQgZXhwaXJlc19pbih2YWx1ZSl7XG4gICAgICAgIGxldCBleHBpcmVzX2luID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09ICdudW1iZXInICYmIGV4cGlyZXNfaW4gPiAwKSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gbm93ICsgZXhwaXJlc19pbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcbiAgICAgICAgaWYgKGV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldCBzY29wZXMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XG4gICAgfVxuXG4gICAgZ2V0IGlzT3BlbklkQ29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVzLmluZGV4T2YoT2lkY1Njb3BlKSA+PSAwIHx8ICEhdGhpcy5pZF90b2tlbjtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vU3RhdGUuanMnO1xuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcbmltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20uanMnO1xuXG5leHBvcnQgY2xhc3MgU2lnbmluU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG4gICAgY29uc3RydWN0b3Ioe25vbmNlLCBhdXRob3JpdHksIGNsaWVudF9pZCwgcmVkaXJlY3RfdXJpLCBjb2RlX3ZlcmlmaWVyLCByZXNwb25zZV9tb2RlLCBjbGllbnRfc2VjcmV0LCBzY29wZSwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGFyZ3VtZW50c1swXSk7XG5cbiAgICAgICAgaWYgKG5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9ub25jZSA9IHJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGVfdmVyaWZpZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIHJhbmRvbSgpIHByb2R1Y2VzIDMyIGxlbmd0aFxuICAgICAgICAgICAgdGhpcy5fY29kZV92ZXJpZmllciA9IHJhbmRvbSgpICsgcmFuZG9tKCkgKyByYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlX3ZlcmlmaWVyKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2RlX3ZlcmlmaWVyID0gY29kZV92ZXJpZmllcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuY29kZV92ZXJpZmllcikge1xuICAgICAgICAgICAgbGV0IGhhc2ggPSBKb3NlVXRpbC5oYXNoU3RyaW5nKHRoaXMuY29kZV92ZXJpZmllciwgXCJTSEEyNTZcIik7XG4gICAgICAgICAgICB0aGlzLl9jb2RlX2NoYWxsZW5nZSA9IEpvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGhhc2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xuICAgICAgICB0aGlzLl9hdXRob3JpdHkgPSBhdXRob3JpdHk7XG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XG4gICAgICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xuICAgICAgICB0aGlzLl9zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcztcbiAgICAgICAgdGhpcy5fc2tpcFVzZXJJbmZvID0gc2tpcFVzZXJJbmZvO1xuICAgIH1cblxuICAgIGdldCBub25jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vbmNlO1xuICAgIH1cbiAgICBnZXQgYXV0aG9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXR5O1xuICAgIH1cbiAgICBnZXQgY2xpZW50X2lkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50X2lkO1xuICAgIH1cbiAgICBnZXQgcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICBnZXQgY29kZV92ZXJpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGVfdmVyaWZpZXI7XG4gICAgfVxuICAgIGdldCBjb2RlX2NoYWxsZW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGVfY2hhbGxlbmdlO1xuICAgIH1cbiAgICBnZXQgcmVzcG9uc2VfbW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XG4gICAgfVxuICAgIGdldCBjbGllbnRfc2VjcmV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50X3NlY3JldDtcbiAgICB9XG4gICAgZ2V0IHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gICAgfVxuICAgIGdldCBleHRyYVRva2VuUGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFUb2tlblBhcmFtcztcbiAgICB9XG4gICAgZ2V0IHNraXBVc2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NraXBVc2VySW5mbztcbiAgICB9XG4gICAgXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJTaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZTogdGhpcy5yZXF1ZXN0X3R5cGUsXG4gICAgICAgICAgICBub25jZTogdGhpcy5ub25jZSxcbiAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IHRoaXMuY29kZV92ZXJpZmllcixcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdF91cmksXG4gICAgICAgICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxuICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgICAgIHJlc3BvbnNlX21vZGU6IHRoaXMucmVzcG9uc2VfbW9kZSxcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgZXh0cmFUb2tlblBhcmFtcyA6IHRoaXMuZXh0cmFUb2tlblBhcmFtcyxcbiAgICAgICAgICAgIHNraXBVc2VySW5mbzogdGhpcy5za2lwVXNlckluZm9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTaWduaW5TdGF0ZShkYXRhKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBVcmxVdGlsaXR5IH0gZnJvbSAnLi9VcmxVdGlsaXR5LmpzJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBTaWdub3V0UmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3Ioe3VybCwgaWRfdG9rZW5faGludCwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLCBkYXRhLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGV9KSB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWdub3V0UmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlkX3Rva2VuX2hpbnQpIHtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiaWRfdG9rZW5faGludFwiLCBpZF90b2tlbl9oaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpIHtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpXCIsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZSh7IGRhdGEsIHJlcXVlc3RfdHlwZSB9KTtcblxuICAgICAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGtleSBpbiBleHRyYVF1ZXJ5UGFyYW1zKXtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBTaWdub3V0UmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBcIj9cIik7XG5cbiAgICAgICAgdGhpcy5lcnJvciA9IHZhbHVlcy5lcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IHZhbHVlcy5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuXG5leHBvcnQgY2xhc3MgU2lsZW50UmVuZXdTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHVzZXJNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyID0gdXNlck1hbmFnZXI7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrID0gdGhpcy5fdG9rZW5FeHBpcmluZy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZEFjY2Vzc1Rva2VuRXhwaXJpbmcodGhpcy5fY2FsbGJhY2spO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgdHJpZ2dlciBsb2FkaW5nIG9mIHRoZSB1c2VyIHNvIHRoZSBleHBpcmluZyBldmVudHMgY2FuIGJlIGluaXRpYWxpemVkXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5nZXRVc2VyKCkudGhlbih1c2VyPT57XG4gICAgICAgICAgICAgICAgLy8gZGVsaWJlcmF0ZSBub3BcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWxlbnRSZW5ld1NlcnZpY2Uuc3RhcnQ6IEVycm9yIGZyb20gZ2V0VXNlcjpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5yZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2tlbkV4cGlyaW5nKCkge1xuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5zaWduaW5TaWxlbnQoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2lsZW50UmVuZXdTZXJ2aWNlLl90b2tlbkV4cGlyaW5nOiBTaWxlbnQgdG9rZW4gcmVuZXdhbCBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLl90b2tlbkV4cGlyaW5nOiBFcnJvciBmcm9tIHNpZ25pblNpbGVudDpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVNpbGVudFJlbmV3RXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gICAgY29uc3RydWN0b3Ioe2lkLCBkYXRhLCBjcmVhdGVkLCByZXF1ZXN0X3R5cGV9ID0ge30pIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZCB8fCByYW5kb20oKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjcmVhdGVkID09PSAnbnVtYmVyJyAmJiBjcmVhdGVkID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IGNyZWF0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlcXVlc3RfdHlwZSA9ICByZXF1ZXN0X3R5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCBkYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gICAgZ2V0IGNyZWF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVkO1xuICAgIH1cbiAgICBnZXQgcmVxdWVzdF90eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdF90eXBlO1xuICAgIH1cblxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gbmV3IFN0YXRlKEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclN0YWxlU3RhdGUoc3RvcmFnZSwgYWdlKSB7XG5cbiAgICAgICAgdmFyIGN1dG9mZiA9IERhdGUubm93KCkgLyAxMDAwIC0gYWdlO1xuXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldEFsbEtleXMoKS50aGVuKGtleXMgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBnb3Qga2V5c1wiLCBrZXlzKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHN0b3JhZ2UuZ2V0KGtleSkudGhlbihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IFN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKGl0ZW0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IGdvdCBpdGVtIGZyb20ga2V5OiBcIiwga2V5LCBzdGF0ZS5jcmVhdGVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jcmVhdGVkIDw9IGN1dG9mZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBFcnJvciBwYXJzaW5nIHN0YXRlIGZvciBrZXlcIiwga2V5LCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IG5vIGl0ZW0gaW4gc3RvcmFnZSBmb3Iga2V5OiBcIiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHJlbW92ZWQgaXRlbSBmb3Iga2V5OiBcIiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlLnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHdhaXRpbmcgb24gcHJvbWlzZSBjb3VudDpcIiwgcHJvbWlzZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XG5cbmNvbnN0IFRpbWVyRHVyYXRpb24gPSA1OyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBjbGFzcyBUaW1lciBleHRlbmRzIEV2ZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRpbWVyID0gR2xvYmFsLnRpbWVyLCBub3dGdW5jID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xuXG4gICAgICAgIGlmIChub3dGdW5jKSB7XG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gbm93RnVuYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX25vd0Z1bmMgPSAoKSA9PiBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBub3coKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl9ub3dGdW5jKCkpO1xuICAgIH1cblxuICAgIGluaXQoZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMTtcbiAgICAgICAgfVxuICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KGR1cmF0aW9uKTtcblxuICAgICAgICB2YXIgZXhwaXJhdGlvbiA9IHRoaXMubm93ICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0aGlzLmV4cGlyYXRpb24gPT09IGV4cGlyYXRpb24gJiYgdGhpcy5fdGltZXJIYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gcmVpbml0aWFsaXplIHRvIHNhbWUgZXhwaXJhdGlvbiwgc28gYmFpbCBvdXRcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmluaXQgdGltZXIgXCIgKyB0aGlzLl9uYW1lICsgXCIgc2tpcHBpbmcgaW5pdGlhbGl6YXRpb24gc2luY2UgYWxyZWFkeSBpbml0aWFsaXplZCBmb3IgZXhwaXJhdGlvbjpcIiwgdGhpcy5leHBpcmF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuaW5pdCB0aW1lciBcIiArIHRoaXMuX25hbWUgKyBcIiBmb3IgZHVyYXRpb246XCIsIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5fZXhwaXJhdGlvbiA9IGV4cGlyYXRpb247XG5cbiAgICAgICAgLy8gd2UncmUgdXNpbmcgYSBmYWlybHkgc2hvcnQgdGltZXIgYW5kIHRoZW4gY2hlY2tpbmcgdGhlIGV4cGlyYXRpb24gaW4gdGhlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIGhhbmRsZSBzY2VuYXJpb3Mgd2hlcmUgdGhlIGJyb3dzZXIgZGV2aWNlIHNsZWVwcywgYW5kIHRoZW5cbiAgICAgICAgLy8gdGhlIHRpbWVycyBlbmQgdXAgZ2V0dGluZyBkZWxheWVkLlxuICAgICAgICB2YXIgdGltZXJEdXJhdGlvbiA9IFRpbWVyRHVyYXRpb247XG4gICAgICAgIGlmIChkdXJhdGlvbiA8IHRpbWVyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IHRoaXMuX3RpbWVyLnNldEludGVydmFsKHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyksIHRpbWVyRHVyYXRpb24gKiAxMDAwKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGV4cGlyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHBpcmF0aW9uO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVySGFuZGxlKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5jYW5jZWw6IFwiLCB0aGlzLl9uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXJIYW5kbGUpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXJIYW5kbGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NhbGxiYWNrKCkge1xuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuX2V4cGlyYXRpb24gLSB0aGlzLm5vdztcbiAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FsbGJhY2s7IFwiICsgdGhpcy5fbmFtZSArIFwiIHRpbWVyIGV4cGlyZXMgaW46XCIsIGRpZmYpO1xuXG4gICAgICAgIGlmICh0aGlzLl9leHBpcmF0aW9uIDw9IHRoaXMubm93KSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgICAgc3VwZXIucmFpc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSAnLi9Kc29uU2VydmljZS5qcyc7XG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbkNsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlKSB7XG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmN0b3I6IE5vIHNldHRpbmdzIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKCk7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG5cbiAgICBleGNoYW5nZUNvZGUoYXJncyA9IHt9KSB7XG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgICAgICBhcmdzLmdyYW50X3R5cGUgPSBhcmdzLmdyYW50X3R5cGUgfHwgXCJhdXRob3JpemF0aW9uX2NvZGVcIjtcbiAgICAgICAgYXJncy5jbGllbnRfaWQgPSBhcmdzLmNsaWVudF9pZCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuXG4gICAgICAgIGlmICghYXJncy5jb2RlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNvZGUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY29kZSBpcyByZXF1aXJlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcmdzLnJlZGlyZWN0X3VyaSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyByZWRpcmVjdF91cmkgcGFzc2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgcmVkaXJlY3RfdXJpIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3MuY29kZV92ZXJpZmllcikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyBjb2RlX3ZlcmlmaWVyIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGVfdmVyaWZpZXIgaXMgcmVxdWlyZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXJncy5jbGllbnRfaWQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNsaWVudF9pZCBpcyByZXF1aXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoZmFsc2UpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogUmVjZWl2ZWQgdG9rZW4gZW5kcG9pbnRcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5wb3N0Rm9ybSh1cmwsIGFyZ3MpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogcmVzcG9uc2UgcmVjZWl2ZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4Y2hhbmdlUmVmcmVzaFRva2VuKGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5ncmFudF90eXBlID0gYXJncy5ncmFudF90eXBlIHx8IFwicmVmcmVzaF90b2tlblwiO1xuICAgICAgICBhcmdzLmNsaWVudF9pZCA9IGFyZ3MuY2xpZW50X2lkIHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgYXJncy5jbGllbnRfc2VjcmV0ID0gYXJncy5jbGllbnRfc2VjcmV0IHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9zZWNyZXQ7XG5cbiAgICAgICAgaWYgKCFhcmdzLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBObyByZWZyZXNoX3Rva2VuIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZnJlc2hfdG9rZW4gaXMgcmVxdWlyZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXJncy5jbGllbnRfaWQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogcmVzcG9uc2UgcmVjZWl2ZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcblxuY29uc3QgQWNjZXNzVG9rZW5UeXBlSGludCA9IFwiYWNjZXNzX3Rva2VuXCI7XG5jb25zdCBSZWZyZXNoVG9rZW5UeXBlSGludCA9IFwicmVmcmVzaF90b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlKSB7XG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5jdG9yOiBObyBzZXR0aW5ncyBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNldHRpbmdzIHByb3ZpZGVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX1hNTEh0dHBSZXF1ZXN0Q3RvciA9IFhNTEh0dHBSZXF1ZXN0Q3RvcjtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHJldm9rZSh0b2tlbiwgcmVxdWlyZWQsIHR5cGUgPSBcImFjY2Vzc190b2tlblwiKSB7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IE5vIHRva2VuIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdG9rZW4gcHJvdmlkZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IEFjY2Vzc1Rva2VuVHlwZUhpbnQgJiYgdHlwZSAhPSBSZWZyZXNoVG9rZW5UeXBlSGludCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSW52YWxpZCB0b2tlbiB0eXBlXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2tlbiB0eXBlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbm90IHJlcXVpcmVkLCBzbyBkb24ndCBlcnJvciBhbmQganVzdCByZXR1cm5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9raW5nIFwiICsgdHlwZSk7XG4gICAgICAgICAgICB2YXIgY2xpZW50X2lkID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgICAgICAgICAgdmFyIGNsaWVudF9zZWNyZXQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmV2b2tlKHVybCwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCB0b2tlbiwgdHlwZSkge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yKCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcblxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgeGhyLnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcih4aHIuc3RhdHVzVGV4dCArIFwiIChcIiArIHhoci5zdGF0dXMgKyBcIilcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHsgXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogTmV0d29yayBFcnJvci5cIilcbiAgICAgICAgICAgICAgICByZWplY3QoXCJOZXR3b3JrIEVycm9yXCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGJvZHkgPSBcImNsaWVudF9pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfaWQpO1xuICAgICAgICAgICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcbiAgICAgICAgICAgICAgICBib2R5ICs9IFwiJmNsaWVudF9zZWNyZXQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X3NlY3JldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuX3R5cGVfaGludD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0eXBlKTtcbiAgICAgICAgICAgIGJvZHkgKz0gXCImdG9rZW49XCIgKyBlbmNvZGVVUklDb21wb25lbnQodG9rZW4pO1xuXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgICAgIHhoci5zZW5kKGJvZHkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBVcmxVdGlsaXR5IHtcbiAgICBzdGF0aWMgYWRkUXVlcnlQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZignPycpIDwgMCkge1xuICAgICAgICAgICAgdXJsICs9IFwiP1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICB1cmwgKz0gXCImXCI7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuICAgICAgICB1cmwgKz0gXCI9XCI7XG4gICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhcnNlVXJsRnJhZ21lbnQodmFsdWUsIGRlbGltaXRlciA9IFwiI1wiLCBnbG9iYWwgPSBHbG9iYWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgdmFsdWUgPSBnbG9iYWwubG9jYXRpb24uaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZHggPSB2YWx1ZS5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKGlkeCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlbGltaXRlciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGRvaW5nIHF1ZXJ5LCB0aGVuIHN0cmlwIG9mZiBoYXNoIGZyYWdtZW50IGJlZm9yZSB3ZSBwYXJzZVxuICAgICAgICAgICAgaWR4ID0gdmFsdWUuaW5kZXhPZignIycpO1xuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgaWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJhbXMgPSB7fSxcbiAgICAgICAgICAgIHJlZ2V4ID0gLyhbXiY9XSspPShbXiZdKikvZyxcbiAgICAgICAgICAgIG07XG5cbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWModmFsdWUpKSB7XG4gICAgICAgICAgICBwYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChtWzJdKTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyKysgPiA1MCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudDogcmVzcG9uc2UgZXhjZWVkZWQgZXhwZWN0ZWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcIiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIlJlc3BvbnNlIGV4Y2VlZGVkIGV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3Ioe2lkX3Rva2VuLCBzZXNzaW9uX3N0YXRlLCBhY2Nlc3NfdG9rZW4sIHJlZnJlc2hfdG9rZW4sIHRva2VuX3R5cGUsIHNjb3BlLCBwcm9maWxlLCBleHBpcmVzX2F0LCBzdGF0ZX0pIHtcbiAgICAgICAgdGhpcy5pZF90b2tlbiA9IGlkX3Rva2VuO1xuICAgICAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gcmVmcmVzaF90b2tlbjtcbiAgICAgICAgdGhpcy50b2tlbl90eXBlID0gdG9rZW5fdHlwZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xuICAgICAgICB0aGlzLmV4cGlyZXNfYXQgPSBleHBpcmVzX2F0O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGV4cGlyZXNfaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBpcmVzX2F0IC0gbm93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKSB7XG4gICAgICAgIGxldCBleHBpcmVzX2luID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09ICdudW1iZXInICYmIGV4cGlyZXNfaW4gPiAwKSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gbm93ICsgZXhwaXJlc19pbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcbiAgICAgICAgaWYgKGV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldCBzY29wZXMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XG4gICAgfVxuXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkX3Rva2VuOiB0aGlzLmlkX3Rva2VuLFxuICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogdGhpcy5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiB0aGlzLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHRoaXMucmVmcmVzaF90b2tlbixcbiAgICAgICAgICAgIHRva2VuX3R5cGU6IHRoaXMudG9rZW5fdHlwZSxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgcHJvZmlsZTogdGhpcy5wcm9maWxlLFxuICAgICAgICAgICAgZXhwaXJlc19hdDogdGhpcy5leHBpcmVzX2F0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXIuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcihKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UuanMnO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcblxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHNldHRpbmdzLCBcbiAgICAgICAgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UsIFxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLCBcbiAgICAgICAgam9zZVV0aWwgPSBKb3NlVXRpbFxuICAgICkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuX2dldENsYWltc0Zyb21Kd3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcbiAgICB9XG5cbiAgICBnZXRDbGFpbXModG9rZW4pIHtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogTm8gdG9rZW4gcGFzc2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgdG9rZW4gaXMgcmVxdWlyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRVc2VySW5mb0VuZHBvaW50KCkudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogcmVjZWl2ZWQgdXNlcmluZm8gdXJsXCIsIHVybCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKHVybCwgdG9rZW4pLnRoZW4oY2xhaW1zID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBjbGFpbXMgcmVjZWl2ZWRcIiwgY2xhaW1zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhaW1zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRDbGFpbXNGcm9tSnd0KHJlcSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBGYWlsZWQgdG8gcGFyc2UgSldUXCIsIGp3dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBraWQgPSBqd3QuaGVhZGVyLmtpZDtcblxuICAgICAgICAgICAgbGV0IGlzc3VlclByb21pc2U7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3NldHRpbmdzLnVzZXJJbmZvSnd0SXNzdWVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnT1AnOlxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXJQcm9taXNlID0gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBTlknOlxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGp3dC5wYXlsb2FkLmlzcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3MudXNlckluZm9Kd3RJc3N1ZXIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGlzc3VlclByb21pc2UudGhlbihpc3N1ZXIgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgaXNzdWVyOlwiICsgaXNzdWVyKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXMoKS50aGVuKGtleXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBSZWNlaXZlZCBzaWduaW5nIGtleXNcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgha2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0gdGhpcy5fZmlsdGVyQnlBbGcoa2V5cywgand0LmhlYWRlci5hbGcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpZCBpcyBtYW5kYXRvcnkgb25seSB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBrZXlzIGluIHRoZSByZWZlcmVuY2VkIEpXSyBTZXQgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXMuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBWYWxpZGFpbmcgSldUOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0KHJlcS5yZXNwb25zZVRleHQsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzLCB1bmRlZmluZWQsIHRydWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBKV1QgdmFsaWRhdGlvbiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGp3dC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEVycm9yIHBhcnNpbmcgSldUIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKSB7XG4gICAgICAgIHZhciBrdHkgPSBudWxsO1xuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJSU0FcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XG4gICAgICAgICAgICBrdHkgPSBcIlBTXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJFQ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogYWxnIG5vdCBzdXBwb3J0ZWQ6IFwiLCBhbGcpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogTG9va2luZyBmb3Iga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSk7XG5cbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ga2V5Lmt0eSA9PT0ga3R5O1xuICAgICAgICB9KTtcblxuICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBOdW1iZXIgb2Yga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSwga2V5cy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL09pZGNDbGllbnQuanMnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXJTZXR0aW5ncyB9IGZyb20gJy4vVXNlck1hbmFnZXJTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyLmpzJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyRXZlbnRzIH0gZnJvbSAnLi9Vc2VyTWFuYWdlckV2ZW50cy5qcyc7XG5pbXBvcnQgeyBTaWxlbnRSZW5ld1NlcnZpY2UgfSBmcm9tICcuL1NpbGVudFJlbmV3U2VydmljZS5qcyc7XG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gJy4vU2Vzc2lvbk1vbml0b3IuanMnO1xuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9Ub2tlblJldm9jYXRpb25DbGllbnQuanMnO1xuaW1wb3J0IHsgVG9rZW5DbGllbnQgfSBmcm9tICcuL1Rva2VuQ2xpZW50LmpzJztcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XG5cblxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgT2lkY0NsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7fSxcbiAgICAgICAgU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciA9IFNpbGVudFJlbmV3U2VydmljZSxcbiAgICAgICAgU2Vzc2lvbk1vbml0b3JDdG9yID0gU2Vzc2lvbk1vbml0b3IsXG4gICAgICAgIFRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IgPSBUb2tlblJldm9jYXRpb25DbGllbnQsXG4gICAgICAgIFRva2VuQ2xpZW50Q3RvciA9IFRva2VuQ2xpZW50LFxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXG4gICAgKSB7XG5cbiAgICAgICAgaWYgKCEoc2V0dGluZ3MgaW5zdGFuY2VvZiBVc2VyTWFuYWdlclNldHRpbmdzKSkge1xuICAgICAgICAgICAgc2V0dGluZ3MgPSBuZXcgVXNlck1hbmFnZXJTZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoc2V0dGluZ3MpO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBVc2VyTWFuYWdlckV2ZW50cyhzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZSA9IG5ldyBTaWxlbnRSZW5ld1NlcnZpY2VDdG9yKHRoaXMpO1xuXG4gICAgICAgIC8vIG9yZGVyIGlzIGltcG9ydGFudCBmb3IgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOyB0aGVzZSBzZXJ2aWNlcyBkZXBlbmQgdXBvbiB0aGUgZXZlbnRzLlxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvbWF0aWNTaWxlbnRSZW5ldykge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuY3RvcjogYXV0b21hdGljU2lsZW50UmVuZXcgaXMgY29uZmlndXJlZCwgc2V0dGluZyB1cCBzaWxlbnQgcmVuZXdcIik7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2lsZW50UmVuZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLm1vbml0b3JTZXNzaW9uKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBtb25pdG9yU2Vzc2lvbiBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNlc3Npb24gbW9uaXRvclwiKTtcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25Nb25pdG9yID0gbmV3IFNlc3Npb25Nb25pdG9yQ3Rvcih0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudCA9IG5ldyBUb2tlblJldm9jYXRpb25DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcbiAgICB9XG5cbiAgICBnZXQgX3JlZGlyZWN0TmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5yZWRpcmVjdE5hdmlnYXRvcjtcbiAgICB9XG4gICAgZ2V0IF9wb3B1cE5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucG9wdXBOYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBfaWZyYW1lTmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5pZnJhbWVOYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBfdXNlclN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy51c2VyU3RvcmU7XG4gICAgfVxuXG4gICAgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbG9hZGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbm90IGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZVVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcihudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIucmVtb3ZlVXNlcjogdXNlciByZW1vdmVkIGZyb20gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy51bmxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2lnbmluUmVkaXJlY3QoYXJncyA9IHt9KSB7XG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6clwiO1xuICAgICAgICBsZXQgbmF2UGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlUmVwbGFjZVRvTmF2aWdhdGUgOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciwgbmF2UGFyYW1zKS50aGVuKCgpPT57XG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkVuZCh1cmwgfHwgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IudXJsKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2s6IG5vIHN1YlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pblBvcHVwKGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnBcIjtcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IE5vIHBvcHVwX3JlZGlyZWN0X3VyaSBvciByZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwb3B1cF9yZWRpcmVjdF91cmkgb3IgcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX3BvcHVwTmF2aWdhdG9yLCB7XG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxuICAgICAgICAgICAgcG9wdXBXaW5kb3dGZWF0dXJlczogYXJncy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyxcbiAgICAgICAgICAgIHBvcHVwV2luZG93VGFyZ2V0OiBhcmdzLnBvcHVwV2luZG93VGFyZ2V0IHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dUYXJnZXRcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IHNpZ25pblBvcHVwIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IG5vIHN1YlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkNhbGxiYWNrKHVybCwgdGhpcy5fcG9wdXBOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXBDYWxsYmFjazogbm8gc3ViXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXBDYWxsYmFjayBlcnJvcjogXCIgKyBlcnIgJiYgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduaW5TaWxlbnQoYXJncyA9IHt9KSB7XG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6c1wiO1xuICAgICAgICAvLyBmaXJzdCBkZXRlcm1pbmUgaWYgd2UgaGF2ZSBhIHJlZnJlc2ggdG9rZW4sIG9yIG5lZWQgdG8gdXNlIGlmcmFtZVxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgYXJncy5yZWZyZXNoX3Rva2VuID0gdXNlci5yZWZyZXNoX3Rva2VuO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VSZWZyZXNoVG9rZW4oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzLmlkX3Rva2VuX2hpbnQgPSBhcmdzLmlkX3Rva2VuX2hpbnQgfHwgKHRoaXMuc2V0dGluZ3MuaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ICYmIHVzZXIgJiYgdXNlci5pZF90b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgJiYgdGhpcy5fc2V0dGluZ3MudmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudCwgc3ViamVjdCBwcmlvciB0byBzaWxlbnQgcmVuZXc6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5jdXJyZW50X3N1YiA9IHVzZXIucHJvZmlsZS5zdWI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF91c2VSZWZyZXNoVG9rZW4oYXJncyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTm8gcmVzcG9uc2UgcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0LmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIGFjY2VzcyB0b2tlbiByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIGFjY2VzcyB0b2tlbiByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZFRva2VuVmFsaWRhdGlvbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlkX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuVmFsaWRhdGlvbiA9IHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbih1c2VyLnByb2ZpbGUsIHJlc3VsdC5pZF90b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRUb2tlblZhbGlkYXRpb24udGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiByZWZyZXNoIHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmlkX3Rva2VuID0gcmVzdWx0LmlkX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSByZXN1bHQuYWNjZXNzX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5yZWZyZXNoX3Rva2VuID0gcmVzdWx0LnJlZnJlc2hfdG9rZW4gfHwgdXNlci5yZWZyZXNoX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2luID0gcmVzdWx0LmV4cGlyZXNfaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbihwcm9maWxlLCBpZF90b2tlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbC52YWxpZGF0ZUp3dEF0dHJpYnV0ZXMoaWRfdG9rZW4sIGlzc3VlciwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkLCB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXcpLnRoZW4ocGF5bG9hZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBpZF90b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnN1YiAhPT0gcHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogc3ViIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIGN1cnJlbnQgc3ViXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIGN1cnJlbnQgc3ViXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuYXV0aF90aW1lICYmIHBheWxvYWQuYXV0aF90aW1lICE9PSBwcm9maWxlLmF1dGhfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhdXRoX3RpbWUgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXV0aF90aW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gcHJvZmlsZS5henApIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF6cCBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhenBcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuYXpwICYmIHByb2ZpbGUuYXpwKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IGF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXpwIG5vdCBpbiBpZF90b2tlbiwgYnV0IHByZXNlbnQgaW4gb3JpZ2luYWwgaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgX3NpZ25pblNpbGVudElmcmFtZShhcmdzID0ge30pIHtcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcbiAgICAgICAgYXJncy5wcm9tcHQgPSBhcmdzLnByb21wdCB8fCBcIm5vbmVcIjtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xuICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OiBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXRcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50OiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogbm8gc3ViXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pblNpbGVudENhbGxiYWNrKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBubyBzdWJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2lnbmluQ2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6clwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpwXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5Qb3B1cENhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnNcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblNpbGVudENhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaW52YWxpZCByZXNwb25zZV90eXBlIGluIHN0YXRlXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2lnbm91dENhbGxiYWNrKHVybCwga2VlcE9wZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic286clwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic286cFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRQb3B1cENhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaW52YWxpZCByZXNwb25zZV90eXBlIGluIHN0YXRlXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcXVlcnlTZXNzaW9uU3RhdHVzKGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnNcIjsgLy8gdGhpcyBhY3RzIGxpa2UgYSBzaWduaW4gc2lsZW50XG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MucHJvbXB0ID0gXCJub25lXCI7XG4gICAgICAgIGFyZ3MucmVzcG9uc2VfdHlwZSA9IGFyZ3MucmVzcG9uc2VfdHlwZSB8fCB0aGlzLnNldHRpbmdzLnF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xuICAgICAgICBhcmdzLnNjb3BlID0gYXJncy5zY29wZSB8fCBcIm9wZW5pZFwiO1xuICAgICAgICBhcmdzLnNraXBVc2VySW5mbyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xuICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OiBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXRcbiAgICAgICAgfSkudGhlbihuYXZSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2lnbmluUmVzcG9uc2UobmF2UmVzcG9uc2UudXJsKS50aGVuKHNpZ25pblJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IGdvdCBzaWduaW4gcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2lnbmluUmVzcG9uc2Uuc2Vzc2lvbl9zdGF0ZSAmJiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIHN1YjogXCIsICBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBzaWduaW5SZXNwb25zZS5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1YixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zaWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwicXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3NmdWwsIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuc2Vzc2lvbl9zdGF0ZSAmJiB0aGlzLnNldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSA9PSBcImxvZ2luX3JlcXVpcmVkXCIgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImNvbnNlbnRfcmVxdWlyZWRcIiB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIiB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2VzcyBmb3IgYW5vbnltb3VzIHVzZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IGVyci5zZXNzaW9uX3N0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zaWduaW4oYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkVuZChuYXZSZXNwb25zZS51cmwsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25pblN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcblxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKGhhbmRsZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluU3RhcnQ6IGdvdCBuYXZpZ2F0b3Igd2luZG93IGhhbmRsZVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbmluUmVxdWVzdChhcmdzKS50aGVuKHNpZ25pblJlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogZ290IHNpZ25pbiByZXF1ZXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25pblJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy5pZCA9IHNpZ25pblJlcXVlc3Quc3RhdGUuaWQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuY2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduaW5FbmQodXJsLCBhcmdzID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25pblJlc3BvbnNlKHVybCkudGhlbihzaWduaW5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xuXG4gICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHNpZ25pblJlc3BvbnNlKTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MuY3VycmVudF9zdWIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5jdXJyZW50X3N1YiAhPT0gdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgZG9lcyBub3QgbWF0Y2ggdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pbi4gc3ViIGZyb20gc2lnbmluOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJsb2dpbl9yZXF1aXJlZFwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgbWF0Y2hlcyB1c2VyIHJldHVybmVkIGZyb20gc2lnbmluXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKHVzZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IHVzZXIgc3RvcmVkXCIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25pbkNhbGxiYWNrKHVybCwgbmF2aWdhdG9yKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5DYWxsYmFja1wiKTtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5jYWxsYmFjayh1cmwpO1xuICAgIH1cblxuICAgIHNpZ25vdXRSZWRpcmVjdChhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpyXCI7XG4gICAgICAgIGxldCBwb3N0TG9nb3V0UmVkaXJlY3RVcmkgPSBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgaWYgKHBvc3RMb2dvdXRSZWRpcmVjdFVyaSl7XG4gICAgICAgICAgICBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmF2UGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlUmVwbGFjZVRvTmF2aWdhdGUgOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3Q6IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWdub3V0UmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRFbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2lnbm91dFBvcHVwKGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnBcIjtcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgICAgICBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHVybDtcbiAgICAgICAgYXJncy5kaXNwbGF5ID0gXCJwb3B1cFwiO1xuICAgICAgICBpZiAoYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpe1xuICAgICAgICAgICAgLy8gd2UncmUgcHV0dGluZyBhIGR1bW15IGVudHJ5IGluIGhlcmUgYmVjYXVzZSB3ZVxuICAgICAgICAgICAgLy8gbmVlZCBhIHVuaXF1ZSBpZCBmcm9tIHRoZSBzdGF0ZSBmb3Igbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAvLyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2ggaXMgbmVjZXNzYXJ5IGlmIHdlXG4gICAgICAgICAgICAvLyBwbGFuIHRvIHJldHVybiBiYWNrIHRvIHRoZSBjbGllbnQgYWZ0ZXIgc2lnbm91dFxuICAgICAgICAgICAgLy8gYW5kIHNvIHdlIGNhbiBjbG9zZSB0aGUgcG9wdXAgYWZ0ZXIgc2lnbm91dFxuICAgICAgICAgICAgYXJncy5zdGF0ZSA9IGFyZ3Muc3RhdGUgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dChhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xuICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6IGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXA6IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWdub3V0UG9wdXBDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XG4gICAgICAgIGlmICh0eXBlb2Yoa2VlcE9wZW4pID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YodXJsKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBrZWVwT3BlbiA9IHVybDtcbiAgICAgICAgICAgIHVybCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVsaW1pdGVyID0gJz8nO1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3IuY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwQ2FsbGJhY2s6IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zaWdub3V0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dEVuZChuYXZSZXNwb25zZS51cmwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25vdXRTdGFydChhcmdzID0ge30sIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5wcmVwYXJlKG5hdmlnYXRvclBhcmFtcykudGhlbihoYW5kbGUgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGxvYWRlZCBjdXJyZW50IHVzZXIgZnJvbSBzdG9yYWdlXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJldm9rZVByb21pc2UgPSB0aGlzLl9zZXR0aW5ncy5yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA/IHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldm9rZVByb21pc2UudGhlbigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkX3Rva2VuID0gYXJncy5pZF90b2tlbl9oaW50IHx8IHVzZXIgJiYgdXNlci5pZF90b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBTZXR0aW5nIGlkX3Rva2VuIGludG8gc2lnbm91dCByZXF1ZXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gaWRfdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVVc2VyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiB1c2VyIHJlbW92ZWQsIGNyZWF0aW5nIHNpZ25vdXQgcmVxdWVzdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbm91dFJlcXVlc3QoYXJncykudGhlbihzaWdub3V0UmVxdWVzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IHNpZ25vdXQgcmVxdWVzdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy51cmwgPSBzaWdub3V0UmVxdWVzdC51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25vdXRSZXF1ZXN0LnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy5pZCA9IHNpZ25vdXRSZXF1ZXN0LnN0YXRlLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuY2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2lnbm91dEVuZCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25vdXRSZXNwb25zZSh1cmwpLnRoZW4oc2lnbm91dFJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0RW5kOiBnb3Qgc2lnbm91dCByZXNwb25zZVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNpZ25vdXRSZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2b2tlQWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlSW50ZXJuYWwodXNlciwgdHJ1ZSkudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogcmVtb3ZpbmcgdG9rZW4gcHJvcGVydGllcyBmcm9tIHVzZXIgYW5kIHJlLXN0b3JpbmdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLnJlZnJlc2hfdG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLmV4cGlyZXNfYXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLnRva2VuX3R5cGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiB1c2VyIHN0b3JlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogYWNjZXNzIHRva2VuIHJldm9rZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmV2b2tlSW50ZXJuYWwodXNlciwgcmVxdWlyZWQpIHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB1c2VyLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgIHZhciByZWZyZXNoX3Rva2VuID0gdXNlci5yZWZyZXNoX3Rva2VuO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKVxuICAgICAgICAgICAgICAgIC50aGVuKGF0U3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbChyZWZyZXNoX3Rva2VuLCByZXF1aXJlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJ0U3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhdFN1Y2Nlc3MgJiYgIXJ0U3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogbm8gbmVlZCB0byByZXZva2UgZHVlIHRvIG5vIHRva2VuKHMpLCBvciBKV1QgZm9ybWF0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXRTdWNjZXNzIHx8IHJ0U3VjY2VzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwoYWNjZXNzX3Rva2VuLCByZXF1aXJlZCkge1xuICAgICAgICAvLyBjaGVjayBmb3IgSldUIHZzLiByZWZlcmVuY2UgdG9rZW5cbiAgICAgICAgaWYgKCFhY2Nlc3NfdG9rZW4gfHwgYWNjZXNzX3Rva2VuLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpLnRoZW4oKCkgPT4gdHJ1ZSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZVJlZnJlc2hUb2tlbkludGVybmFsKHJlZnJlc2hfdG9rZW4sIHJlcXVpcmVkKSB7XG4gICAgICAgIGlmICghcmVmcmVzaF90b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCwgXCJyZWZyZXNoX3Rva2VuXCIpLnRoZW4oKCkgPT4gdHJ1ZSk7XG4gICAgfVxuXG4gICAgc3RhcnRTaWxlbnRSZW5ldygpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RvcFNpbGVudFJlbmV3KCkge1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2Uuc3RvcCgpO1xuICAgIH1cblxuICAgIGdldCBfdXNlclN0b3JlS2V5KCkge1xuICAgICAgICByZXR1cm4gYHVzZXI6JHt0aGlzLnNldHRpbmdzLmF1dGhvcml0eX06JHt0aGlzLnNldHRpbmdzLmNsaWVudF9pZH1gO1xuICAgIH1cblxuICAgIF9sb2FkVXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5nZXQodGhpcy5fdXNlclN0b3JlS2V5KS50aGVuKHN0b3JhZ2VTdHJpbmcgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2VTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IHVzZXIgc3RvcmFnZVN0cmluZyBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVzZXIuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9sb2FkVXNlcjogbm8gdXNlciBzdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0b3JlVXNlcih1c2VyKSB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zdG9yZVVzZXI6IHN0b3JpbmcgdXNlclwiKTtcblxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VTdHJpbmcgPSB1c2VyLnRvU3RvcmFnZVN0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5zZXQodGhpcy5fdXNlclN0b3JlS2V5LCBzdG9yYWdlU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcInN0b3JlVXNlci5zdG9yZVVzZXI6IHJlbW92aW5nIHVzZXJcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnJlbW92ZSh0aGlzLl91c2VyU3RvcmVLZXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5FdmVudHMgfSBmcm9tICcuL0FjY2Vzc1Rva2VuRXZlbnRzLmpzJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlckV2ZW50cyBleHRlbmRzIEFjY2Vzc1Rva2VuRXZlbnRzIHtcblxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgbG9hZGVkXCIpO1xuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQgPSBuZXcgRXZlbnQoXCJVc2VyIHVubG9hZGVkXCIpO1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yID0gbmV3IEV2ZW50KFwiU2lsZW50IHJlbmV3IGVycm9yXCIpO1xuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4gPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBpblwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dCA9IG5ldyBFdmVudChcIlVzZXIgc2lnbmVkIG91dFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkID0gbmV3IEV2ZW50KFwiVXNlciBzZXNzaW9uIGNoYW5nZWRcIik7XG4gICAgfVxuXG4gICAgbG9hZCh1c2VyLCByYWlzZUV2ZW50PXRydWUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMubG9hZFwiKTtcbiAgICAgICAgc3VwZXIubG9hZCh1c2VyKTtcbiAgICAgICAgaWYgKHJhaXNlRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5sb2FkKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy51bmxvYWRcIik7XG4gICAgICAgIHN1cGVyLnVubG9hZCgpO1xuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyTG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyVW5sb2FkZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyVW5sb2FkZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cblxuICAgIGFkZFNpbGVudFJlbmV3RXJyb3IoY2IpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlU2lsZW50UmVuZXdFcnJvcihjYikge1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICBfcmFpc2VTaWxlbnRSZW5ld0Vycm9yKGUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvclwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJhaXNlKGUpO1xuICAgIH1cblxuICAgIGFkZFVzZXJTaWduZWRJbihjYikge1xuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4uYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJTaWduZWRJbihjYikge1xuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxuICAgIF9yYWlzZVVzZXJTaWduZWRJbigpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNpZ25lZEluXCIpO1xuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmFpc2UoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyU2lnbmVkT3V0KGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlVXNlclNpZ25lZE91dCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNpZ25lZE91dFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5yYWlzZSgpO1xuICAgIH1cblxuICAgIGFkZFVzZXJTZXNzaW9uQ2hhbmdlZChjYikge1xuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZChjYikge1xuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxuICAgIF9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkXCIpO1xuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmFpc2UoKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tICcuL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBSZWRpcmVjdE5hdmlnYXRvciB9IGZyb20gJy4vUmVkaXJlY3ROYXZpZ2F0b3IuanMnO1xuaW1wb3J0IHsgUG9wdXBOYXZpZ2F0b3IgfSBmcm9tICcuL1BvcHVwTmF2aWdhdG9yLmpzJztcbmltcG9ydCB7IElGcmFtZU5hdmlnYXRvciB9IGZyb20gJy4vSUZyYW1lTmF2aWdhdG9yLmpzJztcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5pbXBvcnQgeyBTaWduaW5SZXF1ZXN0IH0gZnJvbSAnLi9TaWduaW5SZXF1ZXN0LmpzJztcblxuY29uc3QgRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gNjA7XG5jb25zdCBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSAyMDAwO1xuXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJTZXR0aW5ncyBleHRlbmRzIE9pZGNDbGllbnRTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBwb3B1cF9yZWRpcmVjdF91cmksXG4gICAgICAgIHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgICAgcG9wdXBXaW5kb3dGZWF0dXJlcyxcbiAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQsXG4gICAgICAgIHNpbGVudF9yZWRpcmVjdF91cmksXG4gICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0LFxuICAgICAgICBhdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcgPSBmYWxzZSxcbiAgICAgICAgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gdHJ1ZSxcbiAgICAgICAgbW9uaXRvclNlc3Npb24gPSB0cnVlLFxuICAgICAgICBtb25pdG9yQW5vbnltb3VzU2Vzc2lvbiA9IGZhbHNlLFxuICAgICAgICBjaGVja1Nlc3Npb25JbnRlcnZhbCA9IERlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCxcbiAgICAgICAgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSB0cnVlLFxuICAgICAgICBxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSxcbiAgICAgICAgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPSBmYWxzZSxcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXG4gICAgICAgIHJlZGlyZWN0TmF2aWdhdG9yID0gbmV3IFJlZGlyZWN0TmF2aWdhdG9yKCksXG4gICAgICAgIHBvcHVwTmF2aWdhdG9yID0gbmV3IFBvcHVwTmF2aWdhdG9yKCksXG4gICAgICAgIGlmcmFtZU5hdmlnYXRvciA9IG5ldyBJRnJhbWVOYXZpZ2F0b3IoKSxcbiAgICAgICAgdXNlclN0b3JlID0gbmV3IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlKHsgc3RvcmU6IEdsb2JhbC5zZXNzaW9uU3RvcmFnZSB9KVxuICAgIH0gPSB7fSkge1xuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xuXG4gICAgICAgIHRoaXMuX3BvcHVwX3JlZGlyZWN0X3VyaSA9IHBvcHVwX3JlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgICAgICB0aGlzLl9wb3B1cFdpbmRvd0ZlYXR1cmVzID0gcG9wdXBXaW5kb3dGZWF0dXJlcztcbiAgICAgICAgdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQgPSBwb3B1cFdpbmRvd1RhcmdldDtcblxuICAgICAgICB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpID0gc2lsZW50X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQgPSBzaWxlbnRSZXF1ZXN0VGltZW91dDtcbiAgICAgICAgdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXcgPSBhdXRvbWF0aWNTaWxlbnRSZW5ldztcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3ID0gdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xuICAgICAgICB0aGlzLl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcgPSBpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXc7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XG5cbiAgICAgICAgdGhpcy5fbW9uaXRvclNlc3Npb24gPSBtb25pdG9yU2Vzc2lvbjtcbiAgICAgICAgdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBtb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcbiAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBjaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICAgICAgdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSBzdG9wQ2hlY2tTZXNzaW9uT25FcnJvcjtcbiAgICAgICAgaWYgKHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHNbMF0gJiYgYXJndW1lbnRzWzBdLnJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gU2lnbmluUmVxdWVzdC5pc09pZGMoYXJndW1lbnRzWzBdLnJlc3BvbnNlX3R5cGUpID8gXCJpZF90b2tlblwiIDogXCJjb2RlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IFwiaWRfdG9rZW5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA9IHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xuXG4gICAgICAgIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yID0gcmVkaXJlY3ROYXZpZ2F0b3I7XG4gICAgICAgIHRoaXMuX3BvcHVwTmF2aWdhdG9yID0gcG9wdXBOYXZpZ2F0b3I7XG4gICAgICAgIHRoaXMuX2lmcmFtZU5hdmlnYXRvciA9IGlmcmFtZU5hdmlnYXRvcjtcblxuICAgICAgICB0aGlzLl91c2VyU3RvcmUgPSB1c2VyU3RvcmU7XG4gICAgfVxuXG4gICAgZ2V0IHBvcHVwX3JlZGlyZWN0X3VyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwX3JlZGlyZWN0X3VyaTtcbiAgICB9XG4gICAgZ2V0IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICB9XG4gICAgZ2V0IHBvcHVwV2luZG93RmVhdHVyZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cFdpbmRvd0ZlYXR1cmVzO1xuICAgIH1cbiAgICBnZXQgcG9wdXBXaW5kb3dUYXJnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cFdpbmRvd1RhcmdldDtcbiAgICB9XG5cbiAgICBnZXQgc2lsZW50X3JlZGlyZWN0X3VyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgICBnZXQgc2lsZW50UmVxdWVzdFRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRSZXF1ZXN0VGltZW91dDtcbiAgICB9XG4gICAgZ2V0IGF1dG9tYXRpY1NpbGVudFJlbmV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXc7XG4gICAgfVxuICAgIGdldCB2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXc7XG4gICAgfVxuICAgIGdldCBpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXc7XG4gICAgfVxuICAgIGdldCBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICAgIH1cblxuICAgIGdldCBtb25pdG9yU2Vzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbml0b3JTZXNzaW9uO1xuICAgIH1cbiAgICBnZXQgbW9uaXRvckFub255bW91c1Nlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcbiAgICB9XG4gICAgZ2V0IGNoZWNrU2Vzc2lvbkludGVydmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgfVxuICAgIGdldCBzdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG4gICAgfVxuICAgIGdldCBxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XG4gICAgfVxuICAgIGdldCByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xuICAgIH1cblxuICAgIGdldCByZWRpcmVjdE5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgcG9wdXBOYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cE5hdmlnYXRvcjtcbiAgICB9XG4gICAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lmcmFtZU5hdmlnYXRvcjtcbiAgICB9XG5cbiAgICBnZXQgdXNlclN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcblxuZXhwb3J0IGNsYXNzIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcih7cHJlZml4ID0gXCJvaWRjLlwiLCBzdG9yZSA9IEdsb2JhbC5sb2NhbFN0b3JhZ2V9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgICAgICAgdGhpcy5fcHJlZml4ID0gcHJlZml4O1xuICAgIH1cblxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnNldFwiLCBrZXkpO1xuXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcblxuICAgICAgICB0aGlzLl9zdG9yZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldFwiLCBrZXkpO1xuXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcblxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX3N0b3JlLmdldEl0ZW0oa2V5KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUucmVtb3ZlXCIsIGtleSk7XG5cbiAgICAgICAga2V5ID0gdGhpcy5fcHJlZml4ICsga2V5O1xuXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5fc3RvcmUuZ2V0SXRlbShrZXkpO1xuICAgICAgICB0aGlzLl9zdG9yZS5yZW1vdmVJdGVtKGtleSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcbiAgICB9XG5cbiAgICBnZXRBbGxLZXlzKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5nZXRBbGxLZXlzXCIpO1xuXG4gICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3N0b3JlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuX3N0b3JlLmtleShpbmRleCk7XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZih0aGlzLl9wcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIodGhpcy5fcHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShrZXlzKTtcbiAgICB9XG59XG4iLCIvKlxuQmFzZWQgb24gdGhlIHdvcmsgb2YgQXV0aDBcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyXG5odHRwczovL2dpdGh1Yi5jb20vYXV0aDAvaWR0b2tlbi12ZXJpZmllci9ibG9iL21hc3Rlci9MSUNFTlNFXG5XaGljaCBpcyBiYXNlZCBvbiB0aGUgd29yayBvZiBUb20gV3Vcbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9MSUNFTlNFXG4qL1xuXG4vKlxuICogVG8gc3VwcG9ydCBtb3N0IGJhc2ljIE9wZW5JZCB1c2UgY2FzZXMgKHVzaW5nIFJTQTI1NiksIHdlIGNhbiBnZXQgYXdheSB3aXRob3V0XG4gKiByZXF1aXJpbmcgdGhlIGZ1bGwganJzYXNpZ24gZmVhdHVyZSBzZXQgKGFuZCByZXN1bHRpbmcgbWFzc2l2ZSBidW5kbGUpLlxuICpcbiAqIC0gU3VwcG9ydCBSU0EgMjU2IGFsZ29yaXRobSAob3B0aW9uYWxseSBjb3VsZCBzdXBwb3J0IFJTQSogZmFtaWx5KVxuICogLSBQYXJzZSBKV1QgdG9rZW5zIHVzaW5nIHRoZSAobikgcGFyYW1ldGVyLlxuICogLSBWZXJpZnkgc2lnbmF0dXJlIG9mIGlkX3Rva2Vuc1xuICogLSBWZXJpZnkgYXRfaGFzaCBvZiBhY2Nlc3NfdG9rZW5zXG4gKiAtIFBlcmZvcm0gY29tbW9uIGJhc2U2NCBlbmNvZGluZy9kZWNvZGluZyB0YXNrcy5cbiAqL1xuXG5pbXBvcnQgSlNCTiBmcm9tICdqc2JuJztcbmltcG9ydCBTSEEyNTYgZnJvbSAnY3J5cHRvLWpzL3NoYTI1Nic7XG5pbXBvcnQgYmFzZTY0SnMgZnJvbSAnYmFzZTY0LWpzJztcblxudmFyIEJpZ0ludGVnZXIgPSBKU0JOLkJpZ0ludGVnZXI7XG5cbi8qISAoYykgVG9tIFd1IHwgaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xuICovXG52YXIgYjY0bWFwID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG52YXIgYjY0cGFkID0gXCI9XCI7XG5cbmNvbnN0IEJhc2U2NCA9IHtcbiAgICBiNjR0b2hleChzKSB7XG4gICAgICAgIHZhciByZXQgPSBcIlwiO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGsgPSAwOyAvLyBiNjQgc3RhdGUsIDAtM1xuICAgICAgICB2YXIgc2xvcDtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT09IGI2NHBhZCkgYnJlYWs7XG4gICAgICAgICAgICB2YXIgdiA9IGI2NG1hcC5pbmRleE9mKHMuY2hhckF0KGkpKTtcbiAgICAgICAgICAgIGlmKHYgPCAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmKGsgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ID4+IDIpO1xuICAgICAgICAgICAgICAgIHNsb3AgPSB2ICYgMztcbiAgICAgICAgICAgICAgICBrID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoayA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xuICAgICAgICAgICAgICAgIHNsb3AgPSB2ICYgMHhmO1xuICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihrID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2xvcCk7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDM7XG4gICAgICAgICAgICAgICAgayA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoc2xvcCA8PCAyKSB8ICh2ID4+IDQpKTtcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhmKTtcbiAgICAgICAgICAgICAgICBrID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihrID09PSAxKVxuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2xvcCA8PCAyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGhleFRvQmFzZTY0KGgpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBjO1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgZm9yKGkgPSAwOyBpKzMgPD0gaC5sZW5ndGg7IGkrPTMpIHtcbiAgICAgICAgICAgIGMgPSBwYXJzZUludChoLnN1YnN0cmluZyhpLGkrMyksMTYpO1xuICAgICAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiA2KSArIGI2NG1hcC5jaGFyQXQoYyAmIDYzKTtcbiAgICAgICAgfVxuICAgICAgICBpZihpKzEgPT09IGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzEpLDE2KTtcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPDwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpKzIgPT09IGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzIpLDE2KTtcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPj4gMikgKyBiNjRtYXAuY2hhckF0KChjICYgMykgPDwgNCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGI2NHBhZCkgd2hpbGUoKHJldC5sZW5ndGggJiAzKSA+IDApIHJldCArPSBiNjRwYWQ7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHBhZGRpbmcoc3RyKSB7XG4gICAgICAgIHZhciBtb2QgPSAoc3RyLmxlbmd0aCAlIDQpO1xuICAgICAgICB2YXIgcGFkID0gNCAtIG1vZDtcblxuICAgICAgICBpZiAobW9kID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ciArIChuZXcgQXJyYXkoMSArIHBhZCkpLmpvaW4oJz0nKTtcbiAgICB9LFxuXG4gICAgYnl0ZUFycmF5VG9IZXgocmF3KSB7XG4gICAgICAgIHZhciBIRVggPSAnJztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIF9oZXggPSByYXdbaV0udG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgSEVYICs9IChfaGV4Lmxlbmd0aCA9PT0gMiA/IF9oZXggOiAnMCcgKyBfaGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIRVg7XG4gICAgfSxcblxuICAgIGRlY29kZVRvSEVYKHN0cikge1xuICAgICAgICByZXR1cm4gQmFzZTY0LmJ5dGVBcnJheVRvSGV4KGJhc2U2NEpzLnRvQnl0ZUFycmF5KEJhc2U2NC5wYWRkaW5nKHN0cikpKTtcbiAgICB9LFxuXG4gICAgYmFzZTY0VG9CYXNlNjRVcmwocykge1xuICAgICAgICBzID0gcy5yZXBsYWNlKC89L2csIFwiXCIpO1xuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXCsvZywgXCItXCIpO1xuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9LFxuXG4gICAgdXJsRGVjb2RlKHN0cikge1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpIC8vIENvbnZlcnQgJy0nIHRvICcrJ1xuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJy8nKSAvLyBDb252ZXJ0ICdfJyB0byAnLydcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJyAnKTsgLy8gQ29udmVydCAnXFxzJyB0byAnICdcblxuICAgICAgICByZXR1cm4gYXRvYihzdHIpO1xuICAgIH1cbn07XG5cblxudmFyIERpZ2VzdEluZm9IZWFkID0ge1xuICAgIHNoYTE6ICczMDIxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDA0MTQnLFxuICAgIHNoYTIyNDogJzMwMmQzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwNDA1MDAwNDFjJyxcbiAgICBzaGEyNTY6ICczMDMxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDEwNTAwMDQyMCcsXG4gICAgc2hhMzg0OiAnMzA0MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAyMDUwMDA0MzAnLFxuICAgIHNoYTUxMjogJzMwNTEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMzA1MDAwNDQwJyxcbiAgICBtZDI6ICczMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjAyMDUwMDA0MTAnLFxuICAgIG1kNTogJzMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDUwNTAwMDQxMCcsXG4gICAgcmlwZW1kMTYwOiAnMzAyMTMwMDkwNjA1MmIyNDAzMDIwMTA1MDAwNDE0J1xufTtcblxudmFyIERpZ2VzdEFsZ3MgPSB7XG4gICAgc2hhMjU2OiBTSEEyNTYsXG4gICAgU0hBMjU2OlNIQTI1NlxufTtcblxuZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cywgZXhwKSB7XG4gICAgdGhpcy5uID0gbnVsbDtcbiAgICB0aGlzLmUgPSAwO1xuXG4gICAgaWYgKG1vZHVsdXMgIT0gbnVsbCAmJiBleHAgIT0gbnVsbCAmJiBtb2R1bHVzLmxlbmd0aCA+IDAgJiYgZXhwLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5uID0gbmV3IEJpZ0ludGVnZXIobW9kdWx1cywgMTYpO1xuICAgICAgICB0aGlzLmUgPSBwYXJzZUludChleHAsIDE2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQga2V5IGRhdGEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsZ29yaXRobUZyb21EaWdlc3QoaERpZ2VzdEluZm8pIHtcbiAgICBmb3IgKHZhciBhbGdOYW1lIGluIERpZ2VzdEluZm9IZWFkKSB7XG4gICAgICAgIHZhciBoZWFkID0gRGlnZXN0SW5mb0hlYWRbYWxnTmFtZV07XG4gICAgICAgIHZhciBsZW4gPSBoZWFkLmxlbmd0aDtcblxuICAgICAgICBpZiAoaERpZ2VzdEluZm8uc3Vic3RyaW5nKDAsIGxlbikgPT09IGhlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxnOiBhbGdOYW1lLFxuICAgICAgICAgICAgICAgIGhhc2g6IGhEaWdlc3RJbmZvLnN1YnN0cmluZyhsZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn1cblxuXG5SU0FWZXJpZmllci5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24gKG1zZywgZW5jc2lnKSB7XG4gICAgZW5jc2lnID0gQmFzZTY0LmRlY29kZVRvSEVYKGVuY3NpZyk7XG4gICAgZW5jc2lnID0gZW5jc2lnLnJlcGxhY2UoL1teMC05YS1mXXxbXFxzXFxuXV0vaWcsICcnKTtcblxuICAgIHZhciBzaWcgPSBuZXcgQmlnSW50ZWdlcihlbmNzaWcsIDE2KTtcblxuICAgIGlmIChzaWcuYml0TGVuZ3RoKCkgPiB0aGlzLm4uYml0TGVuZ3RoKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaWduYXR1cmUgZG9lcyBub3QgbWF0Y2ggd2l0aCB0aGUga2V5IG1vZHVsdXMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGRlY3J5cHRlZFNpZyA9IHNpZy5tb2RQb3dJbnQodGhpcy5lLCB0aGlzLm4pO1xuICAgIHZhciBkaWdlc3QgPSBkZWNyeXB0ZWRTaWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sICcnKTtcbiAgICB2YXIgZGlnZXN0SW5mbyA9IGdldEFsZ29yaXRobUZyb21EaWdlc3QoZGlnZXN0KTtcblxuICAgIGlmIChkaWdlc3RJbmZvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFEaWdlc3RBbGdzLmhhc093blByb3BlcnR5KGRpZ2VzdEluZm8uYWxnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhc2hpbmcgYWxnb3JpdGhtIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIG1zZ0hhc2ggPSBEaWdlc3RBbGdzW2RpZ2VzdEluZm8uYWxnXShtc2cpLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIChkaWdlc3RJbmZvLmhhc2ggPT09IG1zZ0hhc2gpO1xufTtcblxuY29uc3QgQWxsb3dlZFNpZ25pbmdBbGdzID0gWydSUzI1NiddO1xuXG5jb25zdCBqd3MgPSB7XG4gICAgSldTOiB7XG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXI7XG4gICAgICAgICAgICB2YXIgcGF5bG9hZDtcblxuICAgICAgICAgICAgLy8gVGhpcyBkaXZlcmdlcyBmcm9tIEF1dGgwJ3MgaW1wbGVtZW50YXRpb24sIHdoaWNoIHRocm93cyByYXRoZXIgdGhhblxuICAgICAgICAgICAgLy8gcmV0dXJuaW5nIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyID0gSlNPTi5wYXJzZShCYXNlNjQudXJsRGVjb2RlKHBhcnRzWzBdKSk7XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoQmFzZTY0LnVybERlY29kZShwYXJ0c1sxXSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1Rva2VuIGhlYWRlciBvciBwYXlsb2FkIGlzIG5vdCB2YWxpZCBKU09OJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyT2JqOiBoZWFkZXIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZE9iajogcGF5bG9hZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHZlcmlmeTogZnVuY3Rpb24oand0LCBrZXksIGFsbG93ZWRTaWduaW5nQWxncyA9IFtdKSB7XG4gICAgICAgICAgICBhbGxvd2VkU2lnbmluZ0FsZ3MuZm9yRWFjaCgoYWxnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFsbG93ZWRTaWduaW5nQWxncy5pbmRleE9mKGFsZykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaWduaW5nIGFsZ29yaXRobTogJyArIGFsZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdmVyaWZ5ID0gbmV3IFJTQVZlcmlmaWVyKGtleS5uLCBrZXkuZSk7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBqd3Quc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgdmFyIGhlYWRlckFuZFBheWxvYWQgPSBbcGFydHNbMF0sIHBhcnRzWzFdXS5qb2luKCcuJyk7XG4gICAgICAgICAgICByZXR1cm4gdmVyaWZ5LnZlcmlmeShoZWFkZXJBbmRQYXlsb2FkLCBwYXJ0c1syXSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmNvbnN0IEtleVV0aWwgPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBkZWNvZGVkIGtleXMgaW4gSGV4IGZvcm1hdCBmb3IgdXNlIGluIGNyeXB0byBmdW5jdGlvbnMuXG4gICAgICogU3VwcG9ydHMgbW9kdWx1cy9leHBvbmVudC1zdHlsZSBrZXlzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGtleSB0aGUgc2VjdXJpdHkga2V5XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRLZXkoa2V5KSB7XG4gICAgICAgIGlmIChrZXkua3R5ID09PSAnUlNBJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlOiBCYXNlNjQuZGVjb2RlVG9IRVgoa2V5LmUpLFxuICAgICAgICAgICAgICAgIG46IEJhc2U2NC5kZWNvZGVUb0hFWChrZXkubiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbn07XG5cbmNvbnN0IFg1MDkgPSB7XG4gICAgZ2V0UHVibGljS2V5RnJvbUNlcnRQRU06IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4gVXNlIHRoZSBmdWxsIG9pZGMtY2xpZW50IGxpYnJhcnkgaWYgeW91IG5lZWQgc3VwcG9ydCBmb3IgWDUwOS4nKTtcbiAgICB9LFxufTtcblxuY29uc3QgY3J5cHRvID0ge1xuICAgIFV0aWw6IHtcbiAgICAgICAgaGFzaFN0cmluZzogZnVuY3Rpb24odmFsdWUsIGFsZykge1xuICAgICAgICAgICAgdmFyIGhhc2hGdW5jID0gRGlnZXN0QWxnc1thbGddO1xuICAgICAgICAgICAgcmV0dXJuIGhhc2hGdW5jKHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGhleHRvYjY0dShzKSB7XG4gICAgaWYgKHMubGVuZ3RoICUgMiA9PT0gMSkge1xuICAgICAgICBzID0gJzAnICsgcztcbiAgICB9XG4gICAgcmV0dXJuIEJhc2U2NC5iYXNlNjRUb0Jhc2U2NFVybChCYXNlNjQuaGV4VG9CYXNlNjQocykpO1xufVxuXG5jb25zdCB7YjY0dG9oZXh9ID0gQmFzZTY0O1xuXG5leHBvcnQge1xuICAgIGp3cyxcbiAgICBLZXlVdGlsLFxuICAgIFg1MDksXG4gICAgY3J5cHRvLFxuICAgIGhleHRvYjY0dSxcbiAgICBiNjR0b2hleCxcbiAgICBBbGxvd2VkU2lnbmluZ0FsZ3Ncbn07XG4iLCJpbXBvcnQgdXVpZDQgZnJvbSAndXVpZC92NCc7XG5cbi8qKlxuICogR2VuZXJhdGVzIFJGQzQxMjIgdmVyc2lvbiA0IGd1aWQgKClcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XG4gIHJldHVybiB1dWlkNCgpLnJlcGxhY2UoLy0vZywgJycpO1xufVxuIiwiY29uc3QgVmVyc2lvbiA9IFwiMS4xMC4xXCI7IGV4cG9ydCB7VmVyc2lvbn07Il0sInNvdXJjZVJvb3QiOiIifQ==