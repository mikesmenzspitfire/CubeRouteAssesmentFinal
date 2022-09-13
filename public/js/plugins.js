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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		// trim whitespace for custom property (issue gh-4926)
		if ( isCustomProp ) {

			// rtrim treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" );
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__factory, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_4__factory, __WEBPACK_LOCAL_MODULE_4__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_10__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_11__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_12__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_13__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _excluded=["premium","referrerPolicy"];function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e196){throw _e196;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e197){didErr=true;err=_e197;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function _construct(Parent,args,Class){if(_isNativeReflectConstruct()){_construct=Reflect.construct.bind();}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _get(){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get.bind();}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(arguments.length<3?target:receiver);}return desc.value;};}return _get.apply(this,arguments);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}!function(e,t){"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){"use strict";var o=1e3,a="transitionend",i=function i(t){var i=t.getAttribute("data-bs-target");if(!i||"#"===i){var _e2=t.getAttribute("href");if(!_e2||!_e2.includes("#")&&!_e2.startsWith("."))return null;_e2.includes("#")&&!_e2.startsWith("#")&&(_e2="#"+_e2.split("#")[1]),i=_e2&&"#"!==_e2?_e2.trim():null;}return i;},l=function l(e){e=i(e);return e&&document.querySelector(e)?e:null;},c=function c(e){e=i(e);return e?document.querySelector(e):null;},d=function d(e){e.dispatchEvent(new Event(a));},h=function h(e){return!(!e||"object"!=_typeof(e))&&void 0!==(e=void 0!==e.jquery?e[0]:e).nodeType;},n=function n(e){return h(e)?e.jquery?e[0]:e:"string"==typeof e&&0<e.length?document.querySelector(e):null;},p=function p(s,n,r){Object.keys(r).forEach(function(e){var t=r[e],i=n[e],i=i&&h(i)?"element":null==(i=i)?""+i:{}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(t).test(i))throw new TypeError(s.toUpperCase()+": Option \"".concat(e,"\" provided type \"").concat(i,"\" but expected type \"").concat(t,"\"."));});},m=function m(e){return!(!h(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility");},f=function f(e){return!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"));},g=function g(e){return document.documentElement.attachShadow?"function"==typeof e.getRootNode?(t=e.getRootNode())instanceof ShadowRoot?t:null:e instanceof ShadowRoot?e:e.parentNode?g(e.parentNode):null:null;var t;},y=function y(){},b=function b(e){e.offsetHeight;},w=function w(){var e=window["jQuery"];return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null;},x=[],s=function s(){return"rtl"===document.documentElement.dir;};var T=function T(s){var e;e=function e(){var e=w();if(e){var _t2=s.NAME,_i2=e.fn[_t2];e.fn[_t2]=s.jQueryInterface,e.fn[_t2].Constructor=s,e.fn[_t2].noConflict=function(){return e.fn[_t2]=_i2,s.jQueryInterface;};}},"loading"===document.readyState?(x.length||document.addEventListener("DOMContentLoaded",function(){x.forEach(function(e){return e();});}),x.push(e)):e();};var E=function E(e){"function"==typeof e&&e();},_=function _(i,s){var e=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;if(e){e=function(e){if(!e)return 0;var _window$getComputedSt=window.getComputedStyle(e),t=_window$getComputedSt.transitionDuration,i=_window$getComputedSt.transitionDelay;var e=Number.parseFloat(t),s=Number.parseFloat(i);return e||s?(t=t.split(",")[0],i=i.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(i))*o):0;}(s)+5;var _t3=!1;var _n=function _n(_ref){var e=_ref.target;e===s&&(_t3=!0,s.removeEventListener(a,_n),E(i));};s.addEventListener(a,_n),setTimeout(function(){_t3||d(s);},e);}else E(i);},S=function S(e,t,i,s){var n=e.indexOf(t);if(-1===n)return e[!i&&s?e.length-1:0];t=e.length;return n+=i?1:-1,s&&(n=(n+t)%t),e[Math.max(0,Math.min(n,t-1))];},C=/[^.]*(?=\..*)\.|.*/,O=/\..*/,I=/::\d+$/,L={};var $=1;var z={mouseenter:"mouseover",mouseleave:"mouseout"},N=/^(mouseenter|mouseleave)/i,D=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function j(e,t){return t&&t+"::"+$++||e.uidEvent||$++;}function F(e){var t=j(e);return e.uidEvent=t,L[t]=L[t]||{},L[t];}function H(i,s){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var r=Object.keys(i);for(var _e3=0,_t4=r.length;_e3<_t4;_e3++){var o=i[r[_e3]];if(o.originalHandler===s&&o.delegationSelector===n)return o;}return null;}function q(e,t,i){var s="string"==typeof t,i=s?i:t;var n=W(e);return D.has(n)||(n=e),[s,i,n];}function B(e,t,i,s,d){if("string"==typeof t&&e){i||(i=s,s=null),N.test(t)&&(n=function n(t){return function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e);};},s?s=n(s):i=n(i));var _q=q(t,i,s),_q2=_slicedToArray(_q,3),n=_q2[0],r=_q2[1],o=_q2[2];var _f=F(e),_g=_f[o]||(_f[o]={}),_l=H(_g,r,n?i:null);if(_l)_l.oneOff=_l.oneOff&&d;else{var a,u,h,p,m,t=j(r,t.replace(C,""));var _c=n?(h=e,p=i,m=s,function i(s){var n=h.querySelectorAll(p);for(var _t5=s["target"];_t5&&_t5!==this;_t5=_t5.parentNode){for(var _e4=n.length;_e4--;){if(n[_e4]===_t5)return s.delegateTarget=_t5,i.oneOff&&v.off(h,s.type,p,m),m.apply(_t5,[s]);}}return null;}):(a=e,u=i,function e(t){return t.delegateTarget=a,e.oneOff&&v.off(a,t.type,u),u.apply(a,[t]);});_c.delegationSelector=n?i:null,_c.originalHandler=r,_c.oneOff=d,_c.uidEvent=t,_g[t]=_c,e.addEventListener(o,_c,n);}}}function R(e,t,i,s,n){s=H(t[i],s,n);s&&(e.removeEventListener(i,s,Boolean(n)),delete t[i][s.uidEvent]);}function W(e){return e=e.replace(O,""),z[e]||e;}var v={on:function on(e,t,i,s){B(e,t,i,s,!1);},one:function one(e,t,i,s){B(e,t,i,s,!0);},off:function off(o,a,e,t){if("string"==typeof a&&o){var _q3=q(a,e,t),_q4=_slicedToArray(_q3,3),_i3=_q4[0],_s2=_q4[1],_n2=_q4[2],_r=_n2!==a,_l2=F(o);t=a.startsWith(".");if(void 0!==_s2)return _l2&&_l2[_n2]?void R(o,_l2,_n2,_s2,_i3?e:null):void 0;t&&Object.keys(_l2).forEach(function(e){{var t=o,i=_l2,s=e,n=a.slice(1);var _r2=i[s]||{};return void Object.keys(_r2).forEach(function(e){e.includes(n)&&(e=_r2[e],R(t,i,s,e.originalHandler,e.delegationSelector));});}});var _c2=_l2[_n2]||{};Object.keys(_c2).forEach(function(e){var t=e.replace(I,"");_r&&!a.includes(t)||(t=_c2[e],R(o,_l2,_n2,t.originalHandler,t.delegationSelector));});}},trigger:function trigger(e,t,i){if("string"!=typeof t||!e)return null;var s=w();var n=W(t),d=t!==n,u=D.has(n);var r,o=!0,a=!0,l=!1,c=null;return d&&s&&(r=s.Event(t,i),s(e).trigger(r),o=!r.isPropagationStopped(),a=!r.isImmediatePropagationStopped(),l=r.isDefaultPrevented()),u?(c=document.createEvent("HTMLEvents"),c.initEvent(n,o,!0)):c=new CustomEvent(t,{bubbles:o,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(function(e){Object.defineProperty(c,e,{get:function get(){return i[e];}});}),l&&c.preventDefault(),a&&e.dispatchEvent(c),c.defaultPrevented&&void 0!==r&&r.preventDefault(),c;}},Y=new Map(),X={set:function set(e,t,i){Y.has(e)||Y.set(e,new Map());var s=Y.get(e);s.has(t)||0===s.size?s.set(t,i):console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0],"."));},get:function get(e,t){return Y.has(e)&&Y.get(e).get(t)||null;},remove:function remove(e,t){if(Y.has(e)){var _i4=Y.get(e);_i4["delete"](t),0===_i4.size&&Y["delete"](e);}}};var V=/*#__PURE__*/function(){function V(e){_classCallCheck(this,V);(e=n(e))&&(this._element=e,X.set(this._element,this.constructor.DATA_KEY,this));}_createClass(V,[{key:"dispose",value:function dispose(){var _this=this;X.remove(this._element,this.constructor.DATA_KEY),v.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(function(e){_this[e]=null;});}},{key:"_queueCallback",value:function _queueCallback(e,t){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;_(e,t,i);}}],[{key:"getInstance",value:function getInstance(e){return X.get(n(e),this.DATA_KEY);}},{key:"getOrCreateInstance",value:function getOrCreateInstance(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return this.getInstance(e)||new this(e,"object"==_typeof(t)?t:null);}},{key:"VERSION",get:function get(){return"5.1.3";}},{key:"NAME",get:function get(){throw new Error('You have to implement the static method "NAME", for each component!');}},{key:"DATA_KEY",get:function get(){return"bs."+this.NAME;}},{key:"EVENT_KEY",get:function get(){return"."+this.DATA_KEY;}}]);return V;}();var G=function G(i){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"hide";var e="click.dismiss"+i.EVENT_KEY;var n=i.NAME;v.on(document,e,"[data-bs-dismiss=\"".concat(n,"\"]"),function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),!f(this)){e=c(this)||this.closest("."+n);var _t6=i.getOrCreateInstance(e);_t6[s]();}});};var U=/*#__PURE__*/function(_V){_inherits(U,_V);var _super=_createSuper(U);function U(){_classCallCheck(this,U);return _super.apply(this,arguments);}_createClass(U,[{key:"close",value:function close(){var _this2=this;var e;v.trigger(this._element,"close.bs.alert").defaultPrevented||(this._element.classList.remove("show"),e=this._element.classList.contains("fade"),this._queueCallback(function(){return _this2._destroyElement();},this._element,e));}},{key:"_destroyElement",value:function _destroyElement(){this._element.remove(),v.trigger(this._element,"closed.bs.alert"),this.dispose();}}],[{key:"NAME",get:function get(){return"alert";}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=U.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError("No method named \"".concat(t,"\""));e[t](this);}});}}]);return U;}(V);G(U,"close"),T(U);var Q='[data-bs-toggle="button"]';var K=/*#__PURE__*/function(_V2){_inherits(K,_V2);var _super2=_createSuper(K);function K(){_classCallCheck(this,K);return _super2.apply(this,arguments);}_createClass(K,[{key:"toggle",value:function toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"));}}],[{key:"NAME",get:function get(){return"button";}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=K.getOrCreateInstance(this);"toggle"===t&&e[t]();});}}]);return K;}(V);function Z(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e);}function J(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase();});}v.on(document,"click.bs.button.data-api",Q,function(e){e.preventDefault();e=e.target.closest(Q);var t=K.getOrCreateInstance(e);t.toggle();}),T(K);var r={setDataAttribute:function setDataAttribute(e,t,i){e.setAttribute("data-bs-"+J(t),i);},removeDataAttribute:function removeDataAttribute(e,t){e.removeAttribute("data-bs-"+J(t));},getDataAttributes:function getDataAttributes(i){if(!i)return{};var s={};return Object.keys(i.dataset).filter(function(e){return e.startsWith("bs");}).forEach(function(e){var t=e.replace(/^bs/,"");t=t.charAt(0).toLowerCase()+t.slice(1,t.length),s[t]=Z(i.dataset[e]);}),s;},getDataAttribute:function getDataAttribute(e,t){return Z(e.getAttribute("data-bs-"+J(t)));},offset:function offset(e){e=e.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset};},position:function position(e){return{top:e.offsetTop,left:e.offsetLeft};}},u={find:function find(e){var _ref2;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document.documentElement;return(_ref2=[]).concat.apply(_ref2,_toConsumableArray(Element.prototype.querySelectorAll.call(t,e)));},findOne:function findOne(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document.documentElement;return Element.prototype.querySelector.call(t,e);},children:function children(e,t){var _ref3;return(_ref3=[]).concat.apply(_ref3,_toConsumableArray(e.children)).filter(function(e){return e.matches(t);});},parents:function parents(e,t){var i=[];var s=e.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&3!==s.nodeType;){s.matches(t)&&i.push(s),s=s.parentNode;}return i;},prev:function prev(e,t){var i=e.previousElementSibling;for(;i;){if(i.matches(t))return[i];i=i.previousElementSibling;}return[];},next:function next(e,t){var i=e.nextElementSibling;for(;i;){if(i.matches(t))return[i];i=i.nextElementSibling;}return[];},focusableChildren:function focusableChildren(e){var t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(function(e){return e+':not([tabindex^="-"])';}).join(", ");return this.find(t,e).filter(function(e){return!f(e)&&m(e);});}},ee="carousel";var te=".bs.carousel";var ie={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},se={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},ne="next",re="prev",oe="left",ae="right",le={ArrowLeft:ae,ArrowRight:oe},ce="slid"+te;var de="active",ue=".active.carousel-item";var he=/*#__PURE__*/function(_V3){_inherits(he,_V3);var _super3=_createSuper(he);function he(e,t){var _this3;_classCallCheck(this,he);_this3=_super3.call(this,e),_this3._items=null,_this3._interval=null,_this3._activeElement=null,_this3._isPaused=!1,_this3._isSliding=!1,_this3.touchTimeout=null,_this3.touchStartX=0,_this3.touchDeltaX=0,_this3._config=_this3._getConfig(t),_this3._indicatorsElement=u.findOne(".carousel-indicators",_this3._element),_this3._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,_this3._pointerEvent=Boolean(window.PointerEvent),_this3._addEventListeners();return _this3;}_createClass(he,[{key:"next",value:function next(){this._slide(ne);}},{key:"nextWhenVisible",value:function nextWhenVisible(){!document.hidden&&m(this._element)&&this.next();}},{key:"prev",value:function prev(){this._slide(re);}},{key:"pause",value:function pause(e){e||(this._isPaused=!0),u.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(d(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null;}},{key:"cycle",value:function cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval));}},{key:"to",value:function to(e){var _this4=this;this._activeElement=u.findOne(ue,this._element);var t=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)v.one(this._element,ce,function(){return _this4.to(e);});else{if(t===e)return this.pause(),void this.cycle();t=t<e?ne:re;this._slide(t,this._items[e]);}}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},ie),r.getDataAttributes(this._element)),"object"==_typeof(e)?e:{}),p(ee,e,se),e;}},{key:"_handleSwipe",value:function _handleSwipe(){var e=Math.abs(this.touchDeltaX);e<=40||(e=e/this.touchDeltaX,this.touchDeltaX=0,e&&this._slide(0<e?ae:oe));}},{key:"_addEventListeners",value:function _addEventListeners(){var _this5=this;this._config.keyboard&&v.on(this._element,"keydown.bs.carousel",function(e){return _this5._keydown(e);}),"hover"===this._config.pause&&(v.on(this._element,"mouseenter.bs.carousel",function(e){return _this5.pause(e);}),v.on(this._element,"mouseleave.bs.carousel",function(e){return _this5.cycle(e);})),this._config.touch&&this._touchSupported&&this._addTouchEventListeners();}},{key:"_addTouchEventListeners",value:function _addTouchEventListeners(){var _this6=this;var t=function t(e){return _this6._pointerEvent&&("pen"===e.pointerType||"touch"===e.pointerType);},i=function i(e){t(e)?_this6.touchStartX=e.clientX:_this6._pointerEvent||(_this6.touchStartX=e.touches[0].clientX);},s=function s(e){_this6.touchDeltaX=e.touches&&1<e.touches.length?0:e.touches[0].clientX-_this6.touchStartX;},n=function n(e){t(e)&&(_this6.touchDeltaX=e.clientX-_this6.touchStartX),_this6._handleSwipe(),"hover"===_this6._config.pause&&(_this6.pause(),_this6.touchTimeout&&clearTimeout(_this6.touchTimeout),_this6.touchTimeout=setTimeout(function(e){return _this6.cycle(e);},500+_this6._config.interval));};u.find(".carousel-item img",this._element).forEach(function(e){v.on(e,"dragstart.bs.carousel",function(e){return e.preventDefault();});}),this._pointerEvent?(v.on(this._element,"pointerdown.bs.carousel",function(e){return i(e);}),v.on(this._element,"pointerup.bs.carousel",function(e){return n(e);}),this._element.classList.add("pointer-event")):(v.on(this._element,"touchstart.bs.carousel",function(e){return i(e);}),v.on(this._element,"touchmove.bs.carousel",function(e){return s(e);}),v.on(this._element,"touchend.bs.carousel",function(e){return n(e);}));}},{key:"_keydown",value:function _keydown(e){var t;/input|textarea/i.test(e.target.tagName)||(t=le[e.key])&&(e.preventDefault(),this._slide(t));}},{key:"_getItemIndex",value:function _getItemIndex(e){return this._items=e&&e.parentNode?u.find(".carousel-item",e.parentNode):[],this._items.indexOf(e);}},{key:"_getItemByOrder",value:function _getItemByOrder(e,t){e=e===ne;return S(this._items,t,e,this._config.wrap);}},{key:"_triggerSlideEvent",value:function _triggerSlideEvent(e,t){var i=this._getItemIndex(e),s=this._getItemIndex(u.findOne(ue,this._element));return v.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:t,from:s,to:i});}},{key:"_setActiveIndicatorElement",value:function _setActiveIndicatorElement(t){if(this._indicatorsElement){var _e5=u.findOne(".active",this._indicatorsElement),_i5=(_e5.classList.remove(de),_e5.removeAttribute("aria-current"),u.find("[data-bs-target]",this._indicatorsElement));for(var _e6=0;_e6<_i5.length;_e6++){if(Number.parseInt(_i5[_e6].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){_i5[_e6].classList.add(de),_i5[_e6].setAttribute("aria-current","true");break;}}}}},{key:"_updateInterval",value:function _updateInterval(){var e=this._activeElement||u.findOne(ue,this._element);var t;e&&((t=Number.parseInt(e.getAttribute("data-bs-interval"),10))?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval);}},{key:"_slide",value:function _slide(e,t){var _this7=this;e=this._directionToOrder(e);var i=u.findOne(ue,this._element),s=this._getItemIndex(i),n=t||this._getItemByOrder(e,i),d=this._getItemIndex(n);var t=Boolean(this._interval),r=e===ne;var o=r?"carousel-item-start":"carousel-item-end",a=r?"carousel-item-next":"carousel-item-prev",l=this._orderToDirection(e);if(n&&n.classList.contains(de))this._isSliding=!1;else if(!this._isSliding){r=this._triggerSlideEvent(n,l);if(!r.defaultPrevented&&i&&n){this._isSliding=!0,t&&this.pause(),this._setActiveIndicatorElement(n),this._activeElement=n;var _c3=function _c3(){v.trigger(_this7._element,ce,{relatedTarget:n,direction:l,from:s,to:d});};this._element.classList.contains("slide")?(n.classList.add(a),b(n),i.classList.add(o),n.classList.add(o),this._queueCallback(function(){n.classList.remove(o,a),n.classList.add(de),i.classList.remove(de,a,o),_this7._isSliding=!1,setTimeout(_c3,0);},i,!0)):(i.classList.remove(de),n.classList.add(de),this._isSliding=!1,_c3()),t&&this.cycle();}}}},{key:"_directionToOrder",value:function _directionToOrder(e){return[ae,oe].includes(e)?s()?e===oe?re:ne:e===oe?ne:re:e;}},{key:"_orderToDirection",value:function _orderToDirection(e){return[ne,re].includes(e)?s()?e===re?oe:ae:e===re?ae:oe:e;}}],[{key:"Default",get:function get(){return ie;}},{key:"NAME",get:function get(){return ee;}},{key:"carouselInterface",value:function carouselInterface(e,t){var i=he.getOrCreateInstance(e,t);var s=i["_config"];"object"==_typeof(t)&&(s=_objectSpread(_objectSpread({},s),t));e="string"==typeof t?t:s.slide;if("number"==typeof t)i.to(t);else if("string"==typeof e){if(void 0===i[e])throw new TypeError("No method named \"".concat(e,"\""));i[e]();}else s.interval&&s.ride&&(i.pause(),i.cycle());}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){he.carouselInterface(this,e);});}},{key:"dataApiClickHandler",value:function dataApiClickHandler(e){var t=c(this);if(t&&t.classList.contains("carousel")){var _s3=_objectSpread(_objectSpread({},r.getDataAttributes(t)),r.getDataAttributes(this));var i=this.getAttribute("data-bs-slide-to");i&&(_s3.interval=!1),he.carouselInterface(t,_s3),i&&he.getInstance(t).to(i),e.preventDefault();}}}]);return he;}(V);v.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",he.dataApiClickHandler),v.on(window,"load.bs.carousel.data-api",function(){var i=u.find('[data-bs-ride="carousel"]');for(var _e7=0,_t7=i.length;_e7<_t7;_e7++){he.carouselInterface(i[_e7],he.getInstance(i[_e7]));}}),T(he);var pe="collapse",me="bs.collapse";me;var fe={toggle:!0,parent:null},ge={toggle:"boolean",parent:"(null|element)"};var ve="show",ye="collapse",be="collapsing",we="collapsed",xe=":scope .".concat(ye," .")+ye,Te='[data-bs-toggle="collapse"]';var Ee=/*#__PURE__*/function(_V4){_inherits(Ee,_V4);var _super4=_createSuper(Ee);function Ee(e,t){var _this8;_classCallCheck(this,Ee);_this8=_super4.call(this,e),_this8._isTransitioning=!1,_this8._config=_this8._getConfig(t),_this8._triggerArray=[];var i=u.find(Te);for(var _e8=0,_t8=i.length;_e8<_t8;_e8++){var s=i[_e8],n=l(s),r=u.find(n).filter(function(e){return e===_this8._element;});null!==n&&r.length&&(_this8._selector=n,_this8._triggerArray.push(s));}_this8._initializeChildren(),_this8._config.parent||_this8._addAriaAndCollapsedClass(_this8._triggerArray,_this8._isShown()),_this8._config.toggle&&_this8.toggle();return _this8;}_createClass(Ee,[{key:"toggle",value:function toggle(){this._isShown()?this.hide():this.show();}},{key:"show",value:function show(){var _this9=this;if(!this._isTransitioning&&!this._isShown()){var _e9=[],_t9;if(this._config.parent){var _n3=u.find(xe,this._config.parent);_e9=u.find(".collapse.show, .collapse.collapsing",this._config.parent).filter(function(e){return!_n3.includes(e);});}var _s4=u.findOne(this._selector);if(_e9.length){var i=_e9.find(function(e){return _s4!==e;});if(_t9=i?Ee.getInstance(i):null,_t9&&_t9._isTransitioning)return;}if(!v.trigger(this._element,"show.bs.collapse").defaultPrevented){_e9.forEach(function(e){_s4!==e&&Ee.getOrCreateInstance(e,{toggle:!1}).hide(),_t9||X.set(e,me,null);});var _r3=this._getDimension();this._element.classList.remove(ye),this._element.classList.add(be),this._element.style[_r3]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;i="scroll"+(_r3[0].toUpperCase()+_r3.slice(1));this._queueCallback(function(){_this9._isTransitioning=!1,_this9._element.classList.remove(be),_this9._element.classList.add(ye,ve),_this9._element.style[_r3]="",v.trigger(_this9._element,"shown.bs.collapse");},this._element,!0),this._element.style[_r3]=this._element[i]+"px";}}}},{key:"hide",value:function hide(){var _this10=this;if(!this._isTransitioning&&this._isShown()&&!v.trigger(this._element,"hide.bs.collapse").defaultPrevented){var e=this._getDimension(),t=(this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",b(this._element),this._element.classList.add(be),this._element.classList.remove(ye,ve),this._triggerArray.length);for(var _e10=0;_e10<t;_e10++){var i=this._triggerArray[_e10],s=c(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1);}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback(function(){_this10._isTransitioning=!1,_this10._element.classList.remove(be),_this10._element.classList.add(ye),v.trigger(_this10._element,"hidden.bs.collapse");},this._element,!0);}}},{key:"_isShown",value:function _isShown(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._element;return e.classList.contains(ve);}},{key:"_getConfig",value:function _getConfig(e){return(e=_objectSpread(_objectSpread(_objectSpread({},fe),r.getDataAttributes(this._element)),e)).toggle=Boolean(e.toggle),e.parent=n(e.parent),p(pe,e,ge),e;}},{key:"_getDimension",value:function _getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height";}},{key:"_initializeChildren",value:function _initializeChildren(){var _this11=this;if(this._config.parent){var _t10=u.find(xe,this._config.parent);u.find(Te,this._config.parent).filter(function(e){return!_t10.includes(e);}).forEach(function(e){var t=c(e);t&&_this11._addAriaAndCollapsedClass([e],_this11._isShown(t));});}}},{key:"_addAriaAndCollapsedClass",value:function _addAriaAndCollapsedClass(e,t){e.length&&e.forEach(function(e){t?e.classList.remove(we):e.classList.add(we),e.setAttribute("aria-expanded",t);});}}],[{key:"Default",get:function get(){return fe;}},{key:"NAME",get:function get(){return pe;}},{key:"jQueryInterface",value:function jQueryInterface(i){return this.each(function(){var e={},t=("string"==typeof i&&/show|hide/.test(i)&&(e.toggle=!1),Ee.getOrCreateInstance(this,e));if("string"==typeof i){if(void 0===t[i])throw new TypeError("No method named \"".concat(i,"\""));t[i]();}});}}]);return Ee;}(V);v.on(document,"click.bs.collapse.data-api",Te,function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();e=l(this);var t=u.find(e);t.forEach(function(e){Ee.getOrCreateInstance(e,{toggle:!1}).toggle();});}),T(Ee);var k="top",A="bottom",M="right",P="left",_e="auto",Se=[k,A,M,P],Ce="start",ke="end",Ae="clippingParents",Me="viewport",Pe="popper",Oe="reference",Ie=Se.reduce(function(e,t){return e.concat([t+"-"+Ce,t+"-"+ke]);},[]),Le=[].concat(Se,[_e]).reduce(function(e,t){return e.concat([t,t+"-"+Ce,t+"-"+ke]);},[]),te="beforeRead",$e="afterRead",ze="beforeMain",Ne="afterMain",De="beforeWrite",je="afterWrite",Fe=[te,"read",$e,ze,"main",Ne,De,"write",je];function He(e){return e?(e.nodeName||"").toLowerCase():null;}function qe(e){return null==e?window:"[object Window]"!==e.toString()?(t=e.ownerDocument)&&t.defaultView||window:e;var t;}function Be(e){return e instanceof qe(e).Element||e instanceof Element;}function Re(e){return e instanceof qe(e).HTMLElement||e instanceof HTMLElement;}function We(e){return"undefined"!=typeof ShadowRoot&&(e instanceof qe(e).ShadowRoot||e instanceof ShadowRoot);}var e={name:"applyStyles",enabled:!0,phase:"write",fn:function fn(e){var n=e.state;Object.keys(n.elements).forEach(function(e){var t=n.styles[e]||{},i=n.attributes[e]||{},s=n.elements[e];Re(s)&&He(s)&&(Object.assign(s.style,t),Object.keys(i).forEach(function(e){var t=i[e];!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t);}));});},effect:function effect(e){var s=e.state,n={popper:{position:s.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(s.elements.popper.style,n.popper),s.styles=n,s.elements.arrow&&Object.assign(s.elements.arrow.style,n.arrow),function(){Object.keys(s.elements).forEach(function(e){var t=s.elements[e],i=s.attributes[e]||{},e=Object.keys((s.styles.hasOwnProperty(e)?s.styles:n)[e]).reduce(function(e,t){return e[t]="",e;},{});Re(t)&&He(t)&&(Object.assign(t.style,e),Object.keys(i).forEach(function(e){t.removeAttribute(e);}));});};},requires:["computeStyles"]};function Ye(e){return e.split("-")[0];}function Xe(e){e=e.getBoundingClientRect();return{width:+e.width,height:+e.height,top:+e.top,right:+e.right,bottom:+e.bottom,left:+e.left,x:+e.left,y:+e.top};}function Ve(e){var t=Xe(e),i=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-i)<=1&&(i=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:i,height:s};}function Ge(e,t){var i=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(i&&We(i)){var s=t;do{if(s&&e.isSameNode(s))return!0;}while(s=s.parentNode||s.host);}return!1;}function Ue(e){return qe(e).getComputedStyle(e);}function Qe(e){return((Be(e)?e.ownerDocument:e.document)||window.document).documentElement;}function Ke(e){return"html"===He(e)?e:e.assignedSlot||e.parentNode||(We(e)?e.host:null)||Qe(e);}function Ze(e){return Re(e)&&"fixed"!==Ue(e).position?e.offsetParent:null;}function Je(e){for(var t,i=qe(e),s=Ze(e);s&&(t=s,0<=["table","td","th"].indexOf(He(t)))&&"static"===Ue(s).position;){s=Ze(s);}return(!s||"html"!==He(s)&&("body"!==He(s)||"static"!==Ue(s).position))&&(s||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),i=-1!==navigator.userAgent.indexOf("Trident");if(i&&Re(e)&&"fixed"===Ue(e).position)return null;for(var s=Ke(e);Re(s)&&["html","body"].indexOf(He(s))<0;){var n=Ue(s);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return s;s=s.parentNode;}return null;}(e))||i;}function et(e){return 0<=["top","bottom"].indexOf(e)?"x":"y";}var tt=Math.max,it=Math.min,st=Math.round;function nt(e,t,i){return tt(e,it(t,i));}function rt(){return{top:0,right:0,bottom:0,left:0};}function ot(e){return Object.assign({},rt(),e);}function at(i,e){return e.reduce(function(e,t){return e[t]=i,e;},{});}var t={name:"arrow",enabled:!0,phase:"main",fn:function fn(e){var t,i,s,n,r=e.state,d=e.name,e=e.options,o=r.elements.arrow,a=r.modifiersData.popperOffsets,l=et(c=Ye(r.placement)),c=0<=[P,M].indexOf(c)?"height":"width";o&&a&&(e=e.padding,i=r,i=ot("number"!=typeof(e="function"==typeof e?e(Object.assign({},i.rects,{placement:i.placement})):e)?e:at(e,Se)),e=Ve(o),n="y"===l?k:P,s="y"===l?A:M,t=r.rects.reference[c]+r.rects.reference[l]-a[l]-r.rects.popper[c],a=a[l]-r.rects.reference[l],o=(o=Je(o))?"y"===l?o.clientHeight||0:o.clientWidth||0:0,n=i[n],i=o-e[c]-i[s],n=nt(n,s=o/2-e[c]/2+(t/2-a/2),i),r.modifiersData[d]=((o={})[l]=n,o.centerOffset=n-s,o));},effect:function effect(e){var t=e.state;null!=(e=void 0===(e=e.options.element)?"[data-popper-arrow]":e)&&("string"!=typeof e||(e=t.elements.popper.querySelector(e)))&&Ge(t.elements.popper,e)&&(t.elements.arrow=e);},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function lt(e){return e.split("-")[1];}var ct={top:"auto",right:"auto",bottom:"auto",left:"auto"};function dt(e){var t,i,s,n=e.popper,d=e.popperRect,r=e.placement,u=e.variation,o=e.offsets,h=e.position,p=e.gpuAcceleration,m=e.adaptive,e=e.roundOffsets,a=!0===e?(a=(l=o).x,l=o.y,c=window.devicePixelRatio||1,{x:st(st(a*c)/c)||0,y:st(st(l*c)/c)||0}):"function"==typeof e?e(o):o,l=a.x,c=void 0===l?0:l,e=a.y,e=void 0===e?0:e,f=o.hasOwnProperty("x"),o=o.hasOwnProperty("y"),g=P,v=k,y=window,n=(m&&(s="clientHeight",i="clientWidth",(t=Je(n))===qe(n)&&"static"!==Ue(t=Qe(n)).position&&"absolute"===h&&(s="scrollHeight",i="scrollWidth"),r!==k&&(r!==P&&r!==M||u!==ke)||(v=A,e=(e-(t[s]-d.height))*(p?1:-1)),r!==P&&(r!==k&&r!==A||u!==ke)||(g=M,c=(c-(t[i]-d.width))*(p?1:-1))),Object.assign({position:h},m&&ct));return p?Object.assign({},n,((s={})[v]=o?"0":"",s[g]=f?"0":"",s.transform=(y.devicePixelRatio||1)<=1?"translate("+c+"px, "+e+"px)":"translate3d("+c+"px, "+e+"px, 0)",s)):Object.assign({},n,((r={})[v]=o?e+"px":"",r[g]=f?c+"px":"",r.transform="",r));}var ut={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function fn(e){var t=e.state,e=e.options,i=void 0===(i=e.gpuAcceleration)||i,s=void 0===(s=e.adaptive)||s,e=void 0===(e=e.roundOffsets)||e,i={placement:Ye(t.placement),variation:lt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,dt(Object.assign({},i,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:e})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,dt(Object.assign({},i,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:e})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement});},data:{}},ht={passive:!0};var pt={name:"eventListeners",enabled:!0,phase:"write",fn:function fn(){},effect:function effect(e){var t=e.state,i=e.instance,s=(e=e.options).scroll,n=void 0===s||s,r=void 0===(s=e.resize)||s,o=qe(t.elements.popper),a=[].concat(t.scrollParents.reference,t.scrollParents.popper);return n&&a.forEach(function(e){e.addEventListener("scroll",i.update,ht);}),r&&o.addEventListener("resize",i.update,ht),function(){n&&a.forEach(function(e){e.removeEventListener("scroll",i.update,ht);}),r&&o.removeEventListener("resize",i.update,ht);};},data:{}},mt={left:"right",right:"left",bottom:"top",top:"bottom"};function ft(e){return e.replace(/left|right|bottom|top/g,function(e){return mt[e];});}var gt={start:"end",end:"start"};function vt(e){return e.replace(/start|end/g,function(e){return gt[e];});}function yt(e){e=qe(e);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset};}function bt(e){return Xe(Qe(e)).left+yt(e).scrollLeft;}function wt(e){var e=Ue(e),t=e.overflow,i=e.overflowX,e=e.overflowY;return /auto|scroll|overlay|hidden/.test(t+e+i);}function xt(e,t){void 0===t&&(t=[]);var i=function e(t){return 0<=["html","body","#document"].indexOf(He(t))?t.ownerDocument.body:Re(t)&&wt(t)?t:e(Ke(t));}(e),e=i===(null==(e=e.ownerDocument)?void 0:e.body),s=qe(i),s=e?[s].concat(s.visualViewport||[],wt(i)?i:[]):i,i=t.concat(s);return e?i:i.concat(xt(Ke(s)));}function Tt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height});}function Et(e,t){return t===Me?Tt((s=qe(i=e),n=Qe(i),s=s.visualViewport,r=n.clientWidth,n=n.clientHeight,a=o=0,s&&(r=s.width,n=s.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=s.offsetLeft,a=s.offsetTop)),{width:r,height:n,x:o+bt(i),y:a})):Re(t)?((r=Xe(s=t)).top=r.top+s.clientTop,r.left=r.left+s.clientLeft,r.bottom=r.top+s.clientHeight,r.right=r.left+s.clientWidth,r.width=s.clientWidth,r.height=s.clientHeight,r.x=r.left,r.y=r.top,r):Tt((n=Qe(e),o=Qe(n),i=yt(n),a=null==(a=n.ownerDocument)?void 0:a.body,t=tt(o.scrollWidth,o.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),e=tt(o.scrollHeight,o.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),n=-i.scrollLeft+bt(n),i=-i.scrollTop,"rtl"===Ue(a||o).direction&&(n+=tt(o.clientWidth,a?a.clientWidth:0)-t),{width:t,height:e,x:n,y:i}));var i,s,n,r,o,a;}function _t(i,e,t){var s,n="clippingParents"===e?(r=xt(Ke(n=i)),Be(s=0<=["absolute","fixed"].indexOf(Ue(n).position)&&Re(n)?Je(n):n)?r.filter(function(e){return Be(e)&&Ge(e,s)&&"body"!==He(e);}):[]):[].concat(e),r=[].concat(n,[t]),e=r[0],t=r.reduce(function(e,t){t=Et(i,t);return e.top=tt(t.top,e.top),e.right=it(t.right,e.right),e.bottom=it(t.bottom,e.bottom),e.left=tt(t.left,e.left),e;},Et(i,e));return t.width=t.right-t.left,t.height=t.bottom-t.top,t.x=t.left,t.y=t.top,t;}function St(e){var t,i=e.reference,s=e.element,e=e.placement,n=e?Ye(e):null,e=e?lt(e):null,r=i.x+i.width/2-s.width/2,o=i.y+i.height/2-s.height/2;switch(n){case k:t={x:r,y:i.y-s.height};break;case A:t={x:r,y:i.y+i.height};break;case M:t={x:i.x+i.width,y:o};break;case P:t={x:i.x-s.width,y:o};break;default:t={x:i.x,y:i.y};}var a=n?et(n):null;if(null!=a){var l="y"===a?"height":"width";switch(e){case Ce:t[a]=t[a]-(i[l]/2-s[l]/2);break;case ke:t[a]=t[a]+(i[l]/2-s[l]/2);}}return t;}function Ct(e,t){var s,t=t=void 0===t?{}:t,i=t.placement,i=void 0===i?e.placement:i,n=t.boundary,n=void 0===n?Ae:n,r=t.rootBoundary,r=void 0===r?Me:r,o=t.elementContext,o=void 0===o?Pe:o,a=t.altBoundary,a=void 0!==a&&a,t=t.padding,t=void 0===t?0:t,t=ot("number"!=typeof t?t:at(t,Se)),l=e.rects.popper,a=e.elements[a?o===Pe?Oe:Pe:o],a=_t(Be(a)?a:a.contextElement||Qe(e.elements.popper),n,r),n=Xe(e.elements.reference),r=St({reference:n,element:l,strategy:"absolute",placement:i}),l=Tt(Object.assign({},l,r)),r=o===Pe?l:n,c={top:a.top-r.top+t.top,bottom:r.bottom-a.bottom+t.bottom,left:a.left-r.left+t.left,right:r.right-a.right+t.right},l=e.modifiersData.offset;return o===Pe&&l&&(s=l[i],Object.keys(c).forEach(function(e){var t=0<=[M,A].indexOf(e)?1:-1,i=0<=[k,A].indexOf(e)?"y":"x";c[e]+=s[i]*t;})),c;}var kt={name:"flip",enabled:!0,phase:"main",fn:function fn(e){var u=e.state,t=e.options,e=e.name;if(!u.modifiersData[e]._skip){for(var i=t.mainAxis,c=void 0===i||i,i=t.altAxis,d=void 0===i||i,i=t.fallbackPlacements,h=t.padding,p=t.boundary,m=t.rootBoundary,f=t.altBoundary,s=t.flipVariations,g=void 0===s||s,v=t.allowedAutoPlacements,s=u.options.placement,t=Ye(s),i=i||(t===s||!g?[ft(s)]:function(e){if(Ye(e)===_e)return[];var t=ft(e);return[vt(e),t,vt(t)];}(s)),n=[s].concat(i).reduce(function(e,t){return e.concat(Ye(t)===_e?(i=u,s=(e=e=void 0===(e={placement:t,boundary:p,rootBoundary:m,padding:h,flipVariations:g,allowedAutoPlacements:v})?{}:e).placement,n=e.boundary,r=e.rootBoundary,o=e.padding,a=e.flipVariations,d=void 0===(e=e.allowedAutoPlacements)?Le:e,l=lt(s),e=l?a?Ie:Ie.filter(function(e){return lt(e)===l;}):Se,c=(s=0===(s=e.filter(function(e){return 0<=d.indexOf(e);})).length?e:s).reduce(function(e,t){return e[t]=Ct(i,{placement:t,boundary:n,rootBoundary:r,padding:o})[Ye(t)],e;},{}),Object.keys(c).sort(function(e,t){return c[e]-c[t];})):t);var i,s,n,r,o,a,d,l,c;},[]),y=u.rects.reference,b=u.rects.popper,w=new Map(),x=!0,r=n[0],T=0;T<n.length;T++){var o=n[T],E=Ye(o),_=lt(o)===Ce,a=0<=[k,A].indexOf(E),l=a?"width":"height",S=Ct(u,{placement:o,boundary:p,rootBoundary:m,altBoundary:f,padding:h}),a=a?_?M:P:_?A:k,_=(y[l]>b[l]&&(a=ft(a)),ft(a)),l=[];if(c&&l.push(S[E]<=0),d&&l.push(S[a]<=0,S[_]<=0),l.every(function(e){return e;})){r=o,x=!1;break;}w.set(o,l);}if(x)for(var C=g?3:1;0<C;C--){if("break"===function(t){var e=n.find(function(e){e=w.get(e);if(e)return e.slice(0,t).every(function(e){return e;});});if(e)return r=e,"break";}(C))break;}u.placement!==r&&(u.modifiersData[e]._skip=!0,u.placement=r,u.reset=!0);}},requiresIfExists:["offset"],data:{_skip:!1}};function At(e,t,i){return{top:e.top-t.height-(i=void 0===i?{x:0,y:0}:i).y,right:e.right-t.width+i.x,bottom:e.bottom-t.height+i.y,left:e.left-t.width-i.x};}function Mt(t){return[k,M,A,P].some(function(e){return 0<=t[e];});}var Pt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function fn(e){var t=e.state,e=e.name,i=t.rects.reference,s=t.rects.popper,n=t.modifiersData.preventOverflow,r=Ct(t,{elementContext:"reference"}),o=Ct(t,{altBoundary:!0}),r=At(r,i),i=At(o,s,n),o=Mt(r),s=Mt(i);t.modifiersData[e]={referenceClippingOffsets:r,popperEscapeOffsets:i,isReferenceHidden:o,hasPopperEscaped:s},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":s});}};var Ot={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function fn(e){var o=e.state,t=e.options,e=e.name,a=void 0===(t=t.offset)?[0,0]:t,t=Le.reduce(function(e,t){var i,s,n,r;return e[t]=(t=t,i=o.rects,s=a,n=Ye(t),r=0<=[P,k].indexOf(n)?-1:1,t=(i="function"==typeof s?s(Object.assign({},i,{placement:t})):s)[0]||0,s=(i[1]||0)*r,0<=[P,M].indexOf(n)?{x:s,y:t}:{x:t,y:s}),e;},{}),i=(s=t[o.placement]).x,s=s.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=i,o.modifiersData.popperOffsets.y+=s),o.modifiersData[e]=t;}};var It={name:"popperOffsets",enabled:!0,phase:"read",fn:function fn(e){var t=e.state,e=e.name;t.modifiersData[e]=St({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement});},data:{}};var Lt={name:"preventOverflow",enabled:!0,phase:"main",fn:function fn(d){var u,h,p,m,e,f,t,i,s,n=d.state,r=d.options,d=d.name,g=void 0===(g=r.mainAxis)||g,v=void 0!==(v=r.altAxis)&&v,y=r.boundary,o=r.rootBoundary,b=r.altBoundary,a=r.padding,w=void 0===(w=r.tether)||w,r=void 0===(r=r.tetherOffset)?0:r,y=Ct(n,{boundary:y,rootBoundary:o,padding:a,altBoundary:b}),o=Ye(n.placement),b=!(a=lt(n.placement)),x="x"===(o=et(o))?"y":"x",l=n.modifiersData.popperOffsets,T=n.rects.reference,c=n.rects.popper,r="function"==typeof r?r(Object.assign({},n.rects,{placement:n.placement})):r,E={x:0,y:0};l&&((g||v)&&(e="y"===o?"height":"width",u=l[o],h=l[o]+y[s="y"===o?k:P],p=l[o]-y[t="y"===o?A:M],f=w?-c[e]/2:0,m=(a===Ce?T:c)[e],a=a===Ce?-c[e]:-T[e],c=n.elements.arrow,c=w&&c?Ve(c):{width:0,height:0},s=(i=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:rt())[s],i=i[t],t=nt(0,T[e],c[e]),c=b?T[e]/2-f-t-s-r:m-t-s-r,m=b?-T[e]/2+f+t+i+r:a+t+i+r,b=(s=n.elements.arrow&&Je(n.elements.arrow))?"y"===o?s.clientTop||0:s.clientLeft||0:0,T=n.modifiersData.offset?n.modifiersData.offset[n.placement][o]:0,e=l[o]+c-T-b,f=l[o]+m-T,g&&(a=nt(w?it(h,e):h,u,w?tt(p,f):p),l[o]=a,E[o]=a-u),v&&(i=(t=l[x])+y["x"===o?k:P],r=t-y["x"===o?A:M],s=nt(w?it(i,e):i,t,w?tt(r,f):r),l[x]=s,E[x]=s-t)),n.modifiersData[d]=E);},requiresIfExists:["offset"]};function $t(e,t,i){void 0===i&&(i=!1);var s=Re(t),n=(Re(t)&&((r=(n=t).getBoundingClientRect()).width,n.offsetWidth,r=r.height/n.offsetHeight||1),Qe(t)),r=Xe(e),e={scrollLeft:0,scrollTop:0},o={x:0,y:0};return!s&&i||("body"===He(t)&&!wt(n)||(e=(s=t)!==qe(s)&&Re(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:yt(s)),Re(t)?((o=Xe(t)).x+=t.clientLeft,o.y+=t.clientTop):n&&(o.x=bt(n))),{x:r.left+e.scrollLeft-o.x,y:r.top+e.scrollTop-o.y,width:r.width,height:r.height};}function zt(e){var i=new Map(),s=new Set(),n=[];return e.forEach(function(e){i.set(e.name,e);}),e.forEach(function(e){s.has(e.name)||!function t(e){s.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){s.has(e)||(e=i.get(e))&&t(e);}),n.push(e);}(e);}),n;}var Nt={placement:"bottom",modifiers:[],strategy:"absolute"};function Dt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++){t[i]=arguments[i];}return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect);});}function jt(e){var e=e=void 0===e?{}:e,t=e.defaultModifiers,u=void 0===t?[]:t,t=e.defaultOptions,h=void 0===t?Nt:t;return function(s,n,t){void 0===t&&(t=h);var i,r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Nt,h),modifiersData:{},elements:{reference:s,popper:n},attributes:{},styles:{}},a=[],l=!1,c={state:o,setOptions:function setOptions(e){var i,t,e="function"==typeof e?e(o.options):e,e=(d(),o.options=Object.assign({},h,o.options,e),o.scrollParents={reference:Be(s)?xt(s):s.contextElement?xt(s.contextElement):[],popper:xt(n)},e=[].concat(u,o.options.modifiers),t=e.reduce(function(e,t){var i=e[t.name];return e[t.name]=i?Object.assign({},i,t,{options:Object.assign({},i.options,t.options),data:Object.assign({},i.data,t.data)}):t,e;},{}),e=Object.keys(t).map(function(e){return t[e];}),i=zt(e),Fe.reduce(function(e,t){return e.concat(i.filter(function(e){return e.phase===t;}));},[]));return o.orderedModifiers=e.filter(function(e){return e.enabled;}),o.orderedModifiers.forEach(function(e){var t=e.name,i=e.options,e=e.effect;"function"==typeof e&&(e=e({state:o,name:t,instance:c,options:void 0===i?{}:i}),a.push(e||function(){}));}),c.update();},forceUpdate:function forceUpdate(){if(!l){var e=o.elements,t=e.reference,e=e.popper;if(Dt(t,e)){o.rects={reference:$t(t,Je(e),"fixed"===o.options.strategy),popper:Ve(e)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data);});for(var i,s,n,r=0;r<o.orderedModifiers.length;r++){!0!==o.reset?(i=(n=o.orderedModifiers[r]).fn,s=n.options,n=n.name,"function"==typeof i&&(o=i({state:o,options:void 0===s?{}:s,name:n,instance:c})||o)):(o.reset=!1,r=-1);}}}},update:(i=function i(){return new Promise(function(e){c.forceUpdate(),e(o);});},function(){return r=r||new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(i());});});}),destroy:function destroy(){d(),l=!0;}};return Dt(s,n)&&c.setOptions(t).then(function(e){!l&&t.onFirstUpdate&&t.onFirstUpdate(e);}),c;function d(){a.forEach(function(e){return e();}),a=[];}};}var Ft=jt({defaultModifiers:[pt,It,ut,e,Ot,kt,Lt,t,Pt]});var Ht=Object.freeze({__proto__:null,popperGenerator:jt,detectOverflow:Ct,createPopperBase:jt(),createPopper:Ft,createPopperLite:jt({defaultModifiers:[pt,It,ut,e]}),top:k,bottom:A,right:M,left:P,auto:_e,basePlacements:Se,start:Ce,end:ke,clippingParents:Ae,viewport:Me,popper:Pe,reference:Oe,variationPlacements:Ie,placements:Le,beforeRead:te,read:"read",afterRead:$e,beforeMain:ze,main:"main",afterMain:Ne,beforeWrite:De,write:"write",afterWrite:je,modifierPhases:Fe,applyStyles:e,arrow:t,computeStyles:ut,eventListeners:pt,flip:kt,hide:Pt,offset:Ot,popperOffsets:It,preventOverflow:Lt}),qt="dropdown";te=".bs.dropdown",$e=".data-api";var Bt="Escape",Rt="ArrowUp",Wt="ArrowDown",Yt=new RegExp(Rt+"|".concat(Wt,"|")+Bt);ze="click"+te+$e,Ne="keydown"+te+$e;var Xt="show",Vt='[data-bs-toggle="dropdown"]',Gt=".dropdown-menu",Ut=s()?"top-end":"top-start",Qt=s()?"top-start":"top-end",Kt=s()?"bottom-end":"bottom-start",Zt=s()?"bottom-start":"bottom-end",Jt=s()?"left-start":"right-start",ei=s()?"right-start":"left-start",ti={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},ii={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};var si=/*#__PURE__*/function(_V5){_inherits(si,_V5);var _super5=_createSuper(si);function si(e,t){var _this12;_classCallCheck(this,si);_this12=_super5.call(this,e),_this12._popper=null,_this12._config=_this12._getConfig(t),_this12._menu=_this12._getMenuElement(),_this12._inNavbar=_this12._detectNavbar();return _this12;}_createClass(si,[{key:"toggle",value:function toggle(){return this._isShown()?this.hide():this.show();}},{key:"show",value:function show(){if(!f(this._element)&&!this._isShown(this._menu)){var e={relatedTarget:this._element};if(!v.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){var _ref4;var _t11=si.getParentFromElement(this._element);this._inNavbar?r.setDataAttribute(this._menu,"popper","none"):this._createPopper(_t11),"ontouchstart"in document.documentElement&&!_t11.closest(".navbar-nav")&&(_ref4=[]).concat.apply(_ref4,_toConsumableArray(document.body.children)).forEach(function(e){return v.on(e,"mouseover",y);}),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Xt),this._element.classList.add(Xt),v.trigger(this._element,"shown.bs.dropdown",e);}}}},{key:"hide",value:function hide(){var e;!f(this._element)&&this._isShown(this._menu)&&(e={relatedTarget:this._element},this._completeHide(e));}},{key:"dispose",value:function dispose(){this._popper&&this._popper.destroy(),_get(_getPrototypeOf(si.prototype),"dispose",this).call(this);}},{key:"update",value:function update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update();}},{key:"_completeHide",value:function _completeHide(e){var _ref5;v.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&(_ref5=[]).concat.apply(_ref5,_toConsumableArray(document.body.children)).forEach(function(e){return v.off(e,"mouseover",y);}),this._popper&&this._popper.destroy(),this._menu.classList.remove(Xt),this._element.classList.remove(Xt),this._element.setAttribute("aria-expanded","false"),r.removeDataAttribute(this._menu,"popper"),v.trigger(this._element,"hidden.bs.dropdown",e));}},{key:"_getConfig",value:function _getConfig(e){if(e=_objectSpread(_objectSpread(_objectSpread({},this.constructor.Default),r.getDataAttributes(this._element)),e),p(qt,e,this.constructor.DefaultType),"object"==_typeof(e.reference)&&!h(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(qt.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e;}},{key:"_createPopper",value:function _createPopper(e){if(void 0===Ht)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var t=this._element;"parent"===this._config.reference?t=e:h(this._config.reference)?t=n(this._config.reference):"object"==_typeof(this._config.reference)&&(t=this._config.reference);var i=this._getPopperConfig();e=i.modifiers.find(function(e){return"applyStyles"===e.name&&!1===e.enabled;});this._popper=Ft(t,this._menu,i),e&&r.setDataAttribute(this._menu,"popper","static");}},{key:"_isShown",value:function _isShown(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._element;return e.classList.contains(Xt);}},{key:"_getMenuElement",value:function _getMenuElement(){return u.next(this._element,Gt)[0];}},{key:"_getPlacement",value:function _getPlacement(){var e=this._element.parentNode;if(e.classList.contains("dropend"))return Jt;if(e.classList.contains("dropstart"))return ei;var t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?Qt:Ut:t?Zt:Kt;}},{key:"_detectNavbar",value:function _detectNavbar(){return null!==this._element.closest(".navbar");}},{key:"_getOffset",value:function _getOffset(){var _this13=this;var t=this._config["offset"];return"string"==typeof t?t.split(",").map(function(e){return Number.parseInt(e,10);}):"function"==typeof t?function(e){return t(e,_this13._element);}:t;}},{key:"_getPopperConfig",value:function _getPopperConfig(){var e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),_objectSpread(_objectSpread({},e),"function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig);}},{key:"_selectMenuItem",value:function _selectMenuItem(_ref6){var e=_ref6.key,t=_ref6.target;var i=u.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(m);i.length&&S(i,t,e===Wt,!i.includes(t)).focus();}}],[{key:"Default",get:function get(){return ti;}},{key:"DefaultType",get:function get(){return ii;}},{key:"NAME",get:function get(){return qt;}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=si.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError("No method named \"".concat(t,"\""));e[t]();}});}},{key:"clearMenus",value:function clearMenus(i){if(!i||2!==i.button&&("keyup"!==i.type||"Tab"===i.key)){var s=u.find(Vt);for(var _e11=0,_t12=s.length;_e11<_t12;_e11++){var _r4=si.getInstance(s[_e11]);if(_r4&&!1!==_r4._config.autoClose&&_r4._isShown()){var _o={relatedTarget:_r4._element};if(i){var _a=i.composedPath();var n=_a.includes(_r4._menu);if(_a.includes(_r4._element)||"inside"===_r4._config.autoClose&&!n||"outside"===_r4._config.autoClose&&n)continue;if(_r4._menu.contains(i.target)&&("keyup"===i.type&&"Tab"===i.key||/input|select|option|textarea|form/i.test(i.target.tagName)))continue;"click"===i.type&&(_o.clickEvent=i);}_r4._completeHide(_o);}}}}},{key:"getParentFromElement",value:function getParentFromElement(e){return c(e)||e.parentNode;}},{key:"dataApiKeydownHandler",value:function dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?!("Space"===e.key||e.key!==Bt&&(e.key!==Wt&&e.key!==Rt||e.target.closest(Gt))):Yt.test(e.key)){var t=this.classList.contains(Xt);if((t||e.key!==Bt)&&(e.preventDefault(),e.stopPropagation(),!f(this))){var i=this.matches(Vt)?this:u.prev(this,Vt)[0];var _s5=si.getOrCreateInstance(i);if(e.key!==Bt)return e.key===Rt||e.key===Wt?(t||_s5.show(),void _s5._selectMenuItem(e)):void(t&&"Space"!==e.key||si.clearMenus());_s5.hide();}}}}]);return si;}(V);v.on(document,Ne,Vt,si.dataApiKeydownHandler),v.on(document,Ne,Gt,si.dataApiKeydownHandler),v.on(document,ze,si.clearMenus),v.on(document,"keyup.bs.dropdown.data-api",si.clearMenus),v.on(document,ze,Vt,function(e){e.preventDefault(),si.getOrCreateInstance(this).toggle();}),T(si);var ni=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ri=".sticky-top";var oi=/*#__PURE__*/function(){function oi(){_classCallCheck(this,oi);this._element=document.body;}_createClass(oi,[{key:"getWidth",value:function getWidth(){var e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e);}},{key:"hide",value:function hide(){var t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",function(e){return e+t;}),this._setElementAttributes(ni,"paddingRight",function(e){return e+t;}),this._setElementAttributes(ri,"marginRight",function(e){return e-t;});}},{key:"_disableOverFlow",value:function _disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden";}},{key:"_setElementAttributes",value:function _setElementAttributes(e,i,s){var _this14=this;var n=this.getWidth();this._applyManipulationCallback(e,function(e){var t;e!==_this14._element&&window.innerWidth>e.clientWidth+n||(_this14._saveInitialAttribute(e,i),t=window.getComputedStyle(e)[i],e.style[i]=s(Number.parseFloat(t))+"px");});}},{key:"reset",value:function reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(ni,"paddingRight"),this._resetElementAttributes(ri,"marginRight");}},{key:"_saveInitialAttribute",value:function _saveInitialAttribute(e,t){var i=e.style[t];i&&r.setDataAttribute(e,t,i);}},{key:"_resetElementAttributes",value:function _resetElementAttributes(e,i){this._applyManipulationCallback(e,function(e){var t=r.getDataAttribute(e,i);void 0===t?e.style.removeProperty(i):(r.removeDataAttribute(e,i),e.style[i]=t);});}},{key:"_applyManipulationCallback",value:function _applyManipulationCallback(e,t){h(e)?t(e):u.find(e,this._element).forEach(t);}},{key:"isOverflowing",value:function isOverflowing(){return 0<this.getWidth();}}]);return oi;}();var ai={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},li={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},ci="backdrop",di="mousedown.bs."+ci;var ui=/*#__PURE__*/function(){function ui(e){_classCallCheck(this,ui);this._config=this._getConfig(e),this._isAppended=!1,this._element=null;}_createClass(ui,[{key:"show",value:function show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&b(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(function(){E(e);})):E(e);}},{key:"hide",value:function hide(e){var _this15=this;this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(function(){_this15.dispose(),E(e);})):E(e);}},{key:"_getElement",value:function _getElement(){if(!this._element){var _e12=document.createElement("div");_e12.className=this._config.className,this._config.isAnimated&&_e12.classList.add("fade"),this._element=_e12;}return this._element;}},{key:"_getConfig",value:function _getConfig(e){return(e=_objectSpread(_objectSpread({},ai),"object"==_typeof(e)?e:{})).rootElement=n(e.rootElement),p(ci,e,li),e;}},{key:"_append",value:function _append(){var _this16=this;this._isAppended||(this._config.rootElement.append(this._getElement()),v.on(this._getElement(),di,function(){E(_this16._config.clickCallback);}),this._isAppended=!0);}},{key:"dispose",value:function dispose(){this._isAppended&&(v.off(this._element,di),this._element.remove(),this._isAppended=!1);}},{key:"_emulateAnimation",value:function _emulateAnimation(e){_(e,this._getElement(),this._config.isAnimated);}}]);return ui;}();var hi={trapElement:null,autofocus:!0},pi={trapElement:"element",autofocus:"boolean"};var mi=".bs.focustrap",fi=(mi,mi,"backward");var gi=/*#__PURE__*/function(){function gi(e){_classCallCheck(this,gi);this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null;}_createClass(gi,[{key:"activate",value:function activate(){var _this17=this;var _this$_config=this._config,e=_this$_config.trapElement,t=_this$_config.autofocus;this._isActive||(t&&e.focus(),v.off(document,mi),v.on(document,"focusin.bs.focustrap",function(e){return _this17._handleFocusin(e);}),v.on(document,"keydown.tab.bs.focustrap",function(e){return _this17._handleKeydown(e);}),this._isActive=!0);}},{key:"deactivate",value:function deactivate(){this._isActive&&(this._isActive=!1,v.off(document,mi));}},{key:"_handleFocusin",value:function _handleFocusin(e){e=e.target;var t=this._config["trapElement"];if(e!==document&&e!==t&&!t.contains(e)){var _i6=u.focusableChildren(t);(0===_i6.length?t:this._lastTabNavDirection===fi?_i6[_i6.length-1]:_i6[0]).focus();}}},{key:"_handleKeydown",value:function _handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?fi:"forward");}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread({},hi),"object"==_typeof(e)?e:{}),p("focustrap",e,pi),e;}}]);return gi;}();var vi=".bs.modal";var yi={backdrop:!0,keyboard:!0,focus:!0},bi={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},wi=(vi,vi,"hidden"+vi),xi="show"+vi,Ti=(vi,"resize"+vi),Ei="click.dismiss"+vi,_i="keydown.dismiss"+vi,Si=(vi,"mousedown.dismiss"+vi);vi;var Ci="modal-open",ki="modal-static";var Ai=/*#__PURE__*/function(_V6){_inherits(Ai,_V6);var _super6=_createSuper(Ai);function Ai(e,t){var _this18;_classCallCheck(this,Ai);_this18=_super6.call(this,e),_this18._config=_this18._getConfig(t),_this18._dialog=u.findOne(".modal-dialog",_this18._element),_this18._backdrop=_this18._initializeBackDrop(),_this18._focustrap=_this18._initializeFocusTrap(),_this18._isShown=!1,_this18._ignoreBackdropClick=!1,_this18._isTransitioning=!1,_this18._scrollBar=new oi();return _this18;}_createClass(Ai,[{key:"toggle",value:function toggle(e){return this._isShown?this.hide():this.show(e);}},{key:"show",value:function show(e){var _this19=this;this._isShown||this._isTransitioning||v.trigger(this._element,xi,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Ci),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),v.on(this._dialog,Si,function(){v.one(_this19._element,"mouseup.dismiss.bs.modal",function(e){e.target===_this19._element&&(_this19._ignoreBackdropClick=!0);});}),this._showBackdrop(function(){return _this19._showElement(e);}));}},{key:"hide",value:function hide(){var _this20=this;var e;this._isShown&&!this._isTransitioning&&(v.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,(e=this._isAnimated())&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove("show"),v.off(this._element,Ei),v.off(this._dialog,Si),this._queueCallback(function(){return _this20._hideModal();},this._element,e)));}},{key:"dispose",value:function dispose(){[window,this._dialog].forEach(function(e){return v.off(e,vi);}),this._backdrop.dispose(),this._focustrap.deactivate(),_get(_getPrototypeOf(Ai.prototype),"dispose",this).call(this);}},{key:"handleUpdate",value:function handleUpdate(){this._adjustDialog();}},{key:"_initializeBackDrop",value:function _initializeBackDrop(){return new ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()});}},{key:"_initializeFocusTrap",value:function _initializeFocusTrap(){return new gi({trapElement:this._element});}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},yi),r.getDataAttributes(this._element)),"object"==_typeof(e)?e:{}),p("modal",e,bi),e;}},{key:"_showElement",value:function _showElement(e){var _this21=this;var t=this._isAnimated();var i=u.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),t&&b(this._element),this._element.classList.add("show");this._queueCallback(function(){_this21._config.focus&&_this21._focustrap.activate(),_this21._isTransitioning=!1,v.trigger(_this21._element,"shown.bs.modal",{relatedTarget:e});},this._dialog,t);}},{key:"_setEscapeEvent",value:function _setEscapeEvent(){var _this22=this;this._isShown?v.on(this._element,_i,function(e){_this22._config.keyboard&&"Escape"===e.key?(e.preventDefault(),_this22.hide()):_this22._config.keyboard||"Escape"!==e.key||_this22._triggerBackdropTransition();}):v.off(this._element,_i);}},{key:"_setResizeEvent",value:function _setResizeEvent(){var _this23=this;this._isShown?v.on(window,Ti,function(){return _this23._adjustDialog();}):v.off(window,Ti);}},{key:"_hideModal",value:function _hideModal(){var _this24=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(function(){document.body.classList.remove(Ci),_this24._resetAdjustments(),_this24._scrollBar.reset(),v.trigger(_this24._element,wi);});}},{key:"_showBackdrop",value:function _showBackdrop(e){var _this25=this;v.on(this._element,Ei,function(e){_this25._ignoreBackdropClick?_this25._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===_this25._config.backdrop?_this25.hide():"static"===_this25._config.backdrop&&_this25._triggerBackdropTransition());}),this._backdrop.show(e);}},{key:"_isAnimated",value:function _isAnimated(){return this._element.classList.contains("fade");}},{key:"_triggerBackdropTransition",value:function _triggerBackdropTransition(){var _this26=this;if(!v.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented){var _this$_element=this._element,_e13=_this$_element.classList,_t13=_this$_element.scrollHeight,_i7=_this$_element.style,_s6=_t13>document.documentElement.clientHeight;!_s6&&"hidden"===_i7.overflowY||_e13.contains(ki)||(_s6||(_i7.overflowY="hidden"),_e13.add(ki),this._queueCallback(function(){_e13.remove(ki),_s6||_this26._queueCallback(function(){_i7.overflowY="";},_this26._dialog);},this._dialog),this._element.focus());}}},{key:"_adjustDialog",value:function _adjustDialog(){var e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),i=0<t;(!i&&e&&!s()||i&&!e&&s())&&(this._element.style.paddingLeft=t+"px"),(i&&!e&&!s()||!i&&e&&s())&&(this._element.style.paddingRight=t+"px");}},{key:"_resetAdjustments",value:function _resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight="";}}],[{key:"Default",get:function get(){return yi;}},{key:"NAME",get:function get(){return"modal";}},{key:"jQueryInterface",value:function jQueryInterface(t,i){return this.each(function(){var e=Ai.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError("No method named \"".concat(t,"\""));e[t](i);}});}}]);return Ai;}(V);v.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(e){var _this27=this;var t=c(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),v.one(t,xi,function(e){e.defaultPrevented||v.one(t,wi,function(){m(_this27)&&_this27.focus();});});e=u.findOne(".modal.show");e&&Ai.getInstance(e).hide();var i=Ai.getOrCreateInstance(t);i.toggle(this);}),G(Ai),T(Ai);var Mi="offcanvas";De=".bs.offcanvas";var Pi={backdrop:!0,keyboard:!0,scroll:!1},Oi={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Ii=".offcanvas.show",Li="hidden"+De;var $i=/*#__PURE__*/function(_V7){_inherits($i,_V7);var _super7=_createSuper($i);function $i(e,t){var _this28;_classCallCheck(this,$i);_this28=_super7.call(this,e),_this28._config=_this28._getConfig(t),_this28._isShown=!1,_this28._backdrop=_this28._initializeBackDrop(),_this28._focustrap=_this28._initializeFocusTrap(),_this28._addEventListeners();return _this28;}_createClass($i,[{key:"toggle",value:function toggle(e){return this._isShown?this.hide():this.show(e);}},{key:"show",value:function show(e){var _this29=this;this._isShown||v.trigger(this._element,"show.bs.offcanvas",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||new oi().hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(function(){_this29._config.scroll||_this29._focustrap.activate(),v.trigger(_this29._element,"shown.bs.offcanvas",{relatedTarget:e});},this._element,!0));}},{key:"hide",value:function hide(){var _this30=this;this._isShown&&(v.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(function(){_this30._element.setAttribute("aria-hidden",!0),_this30._element.removeAttribute("aria-modal"),_this30._element.removeAttribute("role"),_this30._element.style.visibility="hidden",_this30._config.scroll||new oi().reset(),v.trigger(_this30._element,Li);},this._element,!0)));}},{key:"dispose",value:function dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),_get(_getPrototypeOf($i.prototype),"dispose",this).call(this);}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},Pi),r.getDataAttributes(this._element)),"object"==_typeof(e)?e:{}),p(Mi,e,Oi),e;}},{key:"_initializeBackDrop",value:function _initializeBackDrop(){var _this31=this;return new ui({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:function clickCallback(){return _this31.hide();}});}},{key:"_initializeFocusTrap",value:function _initializeFocusTrap(){return new gi({trapElement:this._element});}},{key:"_addEventListeners",value:function _addEventListeners(){var _this32=this;v.on(this._element,"keydown.dismiss.bs.offcanvas",function(e){_this32._config.keyboard&&"Escape"===e.key&&_this32.hide();});}}],[{key:"NAME",get:function get(){return Mi;}},{key:"Default",get:function get(){return Pi;}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=$i.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError("No method named \"".concat(t,"\""));e[t](this);}});}}]);return $i;}(V);v.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(e){var _this33=this;var t=c(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),!f(this)){v.one(t,Li,function(){m(_this33)&&_this33.focus();});e=u.findOne(Ii);e&&e!==t&&$i.getInstance(e).hide();var _i8=$i.getOrCreateInstance(t);_i8.toggle(this);}}),v.on(window,"load.bs.offcanvas.data-api",function(){return u.find(Ii).forEach(function(e){return $i.getOrCreateInstance(e).show();});}),G($i),T($i);var zi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]);var Ni=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Di=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;je={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function ji(e,i,t){var _ref7;if(!e.length)return e;if(t&&"function"==typeof t)return t(e);var s=new window.DOMParser(),n=s.parseFromString(e,"text/html");var r=(_ref7=[]).concat.apply(_ref7,_toConsumableArray(n.body.querySelectorAll("*")));var _loop=function _loop(_e14,_t14){var a=r[_e14];o=a.nodeName.toLowerCase();if(Object.keys(i).includes(o)){var _ref8;var _l3=(_ref8=[]).concat.apply(_ref8,_toConsumableArray(a.attributes)),_c4=[].concat(i["*"]||[],i[o]||[]);_l3.forEach(function(e){(function(e,t){var i=e.nodeName.toLowerCase();if(t.includes(i))return!zi.has(i)||Boolean(Ni.test(e.nodeValue)||Di.test(e.nodeValue));var s=t.filter(function(e){return e instanceof RegExp;});for(var _e15=0,_t15=s.length;_e15<_t15;_e15++){if(s[_e15].test(i))return!0;}return!1;})(e,_c4)||a.removeAttribute(e.nodeName);});}else a.remove();};for(var _e14=0,_t14=r.length;_e14<_t14;_e14++){var o;_loop(_e14,_t14);}return n.body.innerHTML;}var Fi="tooltip";e=".bs.tooltip";var Hi=new Set(["sanitize","allowList","sanitizeFn"]),qi={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Bi={AUTO:"auto",TOP:"top",RIGHT:s()?"left":"right",BOTTOM:"bottom",LEFT:s()?"right":"left"},Ri={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:je,popperConfig:null},Wi={HIDE:"hide"+e,HIDDEN:"hidden"+e,SHOW:"show"+e,SHOWN:"shown"+e,INSERTED:"inserted"+e,CLICK:"click"+e,FOCUSIN:"focusin"+e,FOCUSOUT:"focusout"+e,MOUSEENTER:"mouseenter"+e,MOUSELEAVE:"mouseleave"+e},Yi="fade";var Xi="show",Vi="show",Gi=".tooltip-inner",Ui="hide.bs.modal",Qi="hover",Ki="focus";var Zi=/*#__PURE__*/function(_V8){_inherits(Zi,_V8);var _super8=_createSuper(Zi);function Zi(e,t){var _this34;_classCallCheck(this,Zi);if(void 0===Ht)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");_this34=_super8.call(this,e),_this34._isEnabled=!0,_this34._timeout=0,_this34._hoverState="",_this34._activeTrigger={},_this34._popper=null,_this34._config=_this34._getConfig(t),_this34.tip=null,_this34._setListeners();return _this34;}_createClass(Zi,[{key:"enable",value:function enable(){this._isEnabled=!0;}},{key:"disable",value:function disable(){this._isEnabled=!1;}},{key:"toggleEnabled",value:function toggleEnabled(){this._isEnabled=!this._isEnabled;}},{key:"toggle",value:function toggle(e){if(this._isEnabled)if(e){var _t16=this._initializeOnDelegatedTarget(e);_t16._activeTrigger.click=!_t16._activeTrigger.click,_t16._isWithActiveTrigger()?_t16._enter(null,_t16):_t16._leave(null,_t16);}else this.getTipElement().classList.contains(Xi)?this._leave(null,this):this._enter(null,this);}},{key:"dispose",value:function dispose(){clearTimeout(this._timeout),v.off(this._element.closest(".modal"),Ui,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),_get(_getPrototypeOf(Zi.prototype),"dispose",this).call(this);}},{key:"show",value:function show(){var _this35=this;if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(this.isWithContent()&&this._isEnabled){var e=v.trigger(this._element,this.constructor.Event.SHOW);var _i9=g(this._element);var t=(null===_i9?this._element.ownerDocument.documentElement:_i9).contains(this._element);if(!e.defaultPrevented&&t){var _s7$classList,_ref9;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(Gi).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);var _s7=this.getTipElement();e=function(e){for(;e+=Math.floor(1e6*Math.random()),document.getElementById(e);){;}return e;}(this.constructor.NAME),t=(_s7.setAttribute("id",e),this._element.setAttribute("aria-describedby",e),this._config.animation&&_s7.classList.add(Yi),"function"==typeof this._config.placement?this._config.placement.call(this,_s7,this._element):this._config.placement),e=this._getAttachment(t);this._addAttachmentClass(e);var _n4=this._config["container"],_r5=(X.set(_s7,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(_n4.append(_s7),v.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=Ft(this._element,_s7,this._getPopperConfig(e)),_s7.classList.add(Xi),this._resolvePossibleFunction(this._config.customClass));_r5&&(_s7$classList=_s7.classList).add.apply(_s7$classList,_toConsumableArray(_r5.split(" "))),"ontouchstart"in document.documentElement&&(_ref9=[]).concat.apply(_ref9,_toConsumableArray(document.body.children)).forEach(function(e){v.on(e,"mouseover",y);});t=this.tip.classList.contains(Yi);this._queueCallback(function(){var e=_this35._hoverState;_this35._hoverState=null,v.trigger(_this35._element,_this35.constructor.Event.SHOWN),"out"===e&&_this35._leave(null,_this35);},this.tip,t);}}}},{key:"hide",value:function hide(){var _this36=this;if(this._popper){var _ref10;var _t17=this.getTipElement();var e;v.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented||(_t17.classList.remove(Xi),"ontouchstart"in document.documentElement&&(_ref10=[]).concat.apply(_ref10,_toConsumableArray(document.body.children)).forEach(function(e){return v.off(e,"mouseover",y);}),this._activeTrigger.click=!1,this._activeTrigger[Ki]=!1,this._activeTrigger[Qi]=!1,e=this.tip.classList.contains(Yi),this._queueCallback(function(){_this36._isWithActiveTrigger()||(_this36._hoverState!==Vi&&_t17.remove(),_this36._cleanTipClass(),_this36._element.removeAttribute("aria-describedby"),v.trigger(_this36._element,_this36.constructor.Event.HIDDEN),_this36._disposePopper());},this.tip,e),this._hoverState="");}}},{key:"update",value:function update(){null!==this._popper&&this._popper.update();}},{key:"isWithContent",value:function isWithContent(){return Boolean(this.getTitle());}},{key:"getTipElement",value:function getTipElement(){if(this.tip)return this.tip;var e=document.createElement("div"),t=(e.innerHTML=this._config.template,e.children[0]);return this.setContent(t),t.classList.remove(Yi,Xi),this.tip=t,this.tip;}},{key:"setContent",value:function setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Gi);}},{key:"_sanitizeAndSetContent",value:function _sanitizeAndSetContent(e,t,i){var s=u.findOne(i,e);t||!s?this.setElementContent(s,t):s.remove();}},{key:"setElementContent",value:function setElementContent(e,t){if(null!==e)return h(t)?(t=n(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=ji(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t);}},{key:"getTitle",value:function getTitle(){var e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e);}},{key:"updateAttachment",value:function updateAttachment(e){return"right"===e?"end":"left"===e?"start":e;}},{key:"_initializeOnDelegatedTarget",value:function _initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig());}},{key:"_getOffset",value:function _getOffset(){var _this37=this;var t=this._config["offset"];return"string"==typeof t?t.split(",").map(function(e){return Number.parseInt(e,10);}):"function"==typeof t?function(e){return t(e,_this37._element);}:t;}},{key:"_resolvePossibleFunction",value:function _resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e;}},{key:"_getPopperConfig",value:function _getPopperConfig(e){var _this38=this;e={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:".".concat(this.constructor.NAME,"-arrow")}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:function fn(e){return _this38._handlePopperPlacementChange(e);}}],onFirstUpdate:function onFirstUpdate(e){e.options.placement!==e.placement&&_this38._handlePopperPlacementChange(e);}};return _objectSpread(_objectSpread({},e),"function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig);}},{key:"_addAttachmentClass",value:function _addAttachmentClass(e){this.getTipElement().classList.add(this._getBasicClassPrefix()+"-"+this.updateAttachment(e));}},{key:"_getAttachment",value:function _getAttachment(e){return Bi[e.toUpperCase()];}},{key:"_setListeners",value:function _setListeners(){var _this39=this;var e=this._config.trigger.split(" ");e.forEach(function(e){var t;"click"===e?v.on(_this39._element,_this39.constructor.Event.CLICK,_this39._config.selector,function(e){return _this39.toggle(e);}):"manual"!==e&&(t=e===Qi?_this39.constructor.Event.MOUSEENTER:_this39.constructor.Event.FOCUSIN,e=e===Qi?_this39.constructor.Event.MOUSELEAVE:_this39.constructor.Event.FOCUSOUT,v.on(_this39._element,t,_this39._config.selector,function(e){return _this39._enter(e);}),v.on(_this39._element,e,_this39._config.selector,function(e){return _this39._leave(e);}));}),this._hideModalHandler=function(){_this39._element&&_this39.hide();},v.on(this._element.closest(".modal"),Ui,this._hideModalHandler),this._config.selector?this._config=_objectSpread(_objectSpread({},this._config),{},{trigger:"manual",selector:""}):this._fixTitle();}},{key:"_fixTitle",value:function _fixTitle(){var e=this._element.getAttribute("title"),t=_typeof(this._element.getAttribute("data-bs-original-title"));!e&&"string"==t||(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""));}},{key:"_enter",value:function _enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?Ki:Qi]=!0),t.getTipElement().classList.contains(Xi)||t._hoverState===Vi?t._hoverState=Vi:(clearTimeout(t._timeout),t._hoverState=Vi,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(function(){t._hoverState===Vi&&t.show();},t._config.delay.show):t.show());}},{key:"_leave",value:function _leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?Ki:Qi]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState="out",t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(function(){"out"===t._hoverState&&t.hide();},t._config.delay.hide):t.hide());}},{key:"_isWithActiveTrigger",value:function _isWithActiveTrigger(){for(var _e16 in this._activeTrigger){if(this._activeTrigger[_e16])return!0;}return!1;}},{key:"_getConfig",value:function _getConfig(e){var t=r.getDataAttributes(this._element);return Object.keys(t).forEach(function(e){Hi.has(e)&&delete t[e];}),(e=_objectSpread(_objectSpread(_objectSpread({},this.constructor.Default),t),"object"==_typeof(e)&&e?e:{})).container=!1===e.container?document.body:n(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),p(Fi,e,this.constructor.DefaultType),e.sanitize&&(e.template=ji(e.template,e.allowList,e.sanitizeFn)),e;}},{key:"_getDelegateConfig",value:function _getDelegateConfig(){var e={};for(var _t18 in this._config){this.constructor.Default[_t18]!==this._config[_t18]&&(e[_t18]=this._config[_t18]);}return e;}},{key:"_cleanTipClass",value:function _cleanTipClass(){var t=this.getTipElement();var e=new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(),"\\S+"),"g");var i=t.getAttribute("class").match(e);null!==i&&0<i.length&&i.map(function(e){return e.trim();}).forEach(function(e){return t.classList.remove(e);});}},{key:"_getBasicClassPrefix",value:function _getBasicClassPrefix(){return"bs-tooltip";}},{key:"_handlePopperPlacementChange",value:function _handlePopperPlacementChange(e){e=e.state;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)));}},{key:"_disposePopper",value:function _disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null);}}],[{key:"Default",get:function get(){return Ri;}},{key:"NAME",get:function get(){return Fi;}},{key:"Event",get:function get(){return Wi;}},{key:"DefaultType",get:function get(){return qi;}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=Zi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError("No method named \"".concat(t,"\""));e[t]();}});}}]);return Zi;}(V);T(Zi);t=".bs.popover";var Ji=_objectSpread(_objectSpread({},Zi.Default),{},{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),es=_objectSpread(_objectSpread({},Zi.DefaultType),{},{content:"(string|element|function)"}),ts={HIDE:"hide"+t,HIDDEN:"hidden"+t,SHOW:"show"+t,SHOWN:"shown"+t,INSERTED:"inserted"+t,CLICK:"click"+t,FOCUSIN:"focusin"+t,FOCUSOUT:"focusout"+t,MOUSEENTER:"mouseenter"+t,MOUSELEAVE:"mouseleave"+t};var is=/*#__PURE__*/function(_Zi){_inherits(is,_Zi);var _super9=_createSuper(is);function is(){_classCallCheck(this,is);return _super9.apply(this,arguments);}_createClass(is,[{key:"isWithContent",value:function isWithContent(){return this.getTitle()||this._getContent();}},{key:"setContent",value:function setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(e,this._getContent(),".popover-body");}},{key:"_getContent",value:function _getContent(){return this._resolvePossibleFunction(this._config.content);}},{key:"_getBasicClassPrefix",value:function _getBasicClassPrefix(){return"bs-popover";}}],[{key:"Default",get:function get(){return Ji;}},{key:"NAME",get:function get(){return"popover";}},{key:"Event",get:function get(){return ts;}},{key:"DefaultType",get:function get(){return es;}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=is.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError("No method named \"".concat(t,"\""));e[t]();}});}}]);return is;}(Zi);T(is);var ss="scrollspy";var ns=".bs.scrollspy";var rs={offset:10,method:"auto",target:""},os={offset:"number",method:"string",target:"(string|element)"};ns,ns;ns;var as="dropdown-item",ls="active",cs=".nav-link",ds=".list-group-item",us=cs+", ".concat(ds,", .")+as,hs="position";var ps=/*#__PURE__*/function(_V9){_inherits(ps,_V9);var _super10=_createSuper(ps);function ps(e,t){var _this40;_classCallCheck(this,ps);_this40=_super10.call(this,e),_this40._scrollElement="BODY"===_this40._element.tagName?window:_this40._element,_this40._config=_this40._getConfig(t),_this40._offsets=[],_this40._targets=[],_this40._activeTarget=null,_this40._scrollHeight=0,v.on(_this40._scrollElement,"scroll.bs.scrollspy",function(){return _this40._process();}),_this40.refresh(),_this40._process();return _this40;}_createClass(ps,[{key:"refresh",value:function refresh(){var _this41=this;var e=this._scrollElement===this._scrollElement.window?"offset":hs;var s="auto"===this._config.method?e:this._config.method,n=s===hs?this._getScrollTop():0,t=(this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),u.find(us,this._config.target));t.map(function(e){e=l(e);var t=e?u.findOne(e):null;if(t){var i=t.getBoundingClientRect();if(i.width||i.height)return[r[s](t).top+n,e];}return null;}).filter(function(e){return e;}).sort(function(e,t){return e[0]-t[0];}).forEach(function(e){_this41._offsets.push(e[0]),_this41._targets.push(e[1]);});}},{key:"dispose",value:function dispose(){v.off(this._scrollElement,ns),_get(_getPrototypeOf(ps.prototype),"dispose",this).call(this);}},{key:"_getConfig",value:function _getConfig(e){return(e=_objectSpread(_objectSpread(_objectSpread({},rs),r.getDataAttributes(this._element)),"object"==_typeof(e)&&e?e:{})).target=n(e.target)||document.documentElement,p(ss,e,os),e;}},{key:"_getScrollTop",value:function _getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;}},{key:"_getScrollHeight",value:function _getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);}},{key:"_getOffsetHeight",value:function _getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height;}},{key:"_process",value:function _process(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),i<=t)return e=this._targets[this._targets.length-1],void(this._activeTarget!==e&&this._activate(e));if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var _e17=this._offsets.length;_e17--;){this._activeTarget!==this._targets[_e17]&&t>=this._offsets[_e17]&&(void 0===this._offsets[_e17+1]||t<this._offsets[_e17+1])&&this._activate(this._targets[_e17]);}}},{key:"_activate",value:function _activate(t){this._activeTarget=t,this._clear();var e=us.split(",").map(function(e){return e+"[data-bs-target=\"".concat(t,"\"],").concat(e,"[href=\"").concat(t,"\"]");}),i=u.findOne(e.join(","),this._config.target);i.classList.add(ls),i.classList.contains(as)?u.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(ls):u.parents(i,".nav, .list-group").forEach(function(e){u.prev(e,cs+", "+ds).forEach(function(e){return e.classList.add(ls);}),u.prev(e,".nav-item").forEach(function(e){u.children(e,cs).forEach(function(e){return e.classList.add(ls);});});}),v.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t});}},{key:"_clear",value:function _clear(){u.find(us,this._config.target).filter(function(e){return e.classList.contains(ls);}).forEach(function(e){return e.classList.remove(ls);});}}],[{key:"Default",get:function get(){return rs;}},{key:"NAME",get:function get(){return ss;}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=ps.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError("No method named \"".concat(t,"\""));e[t]();}});}}]);return ps;}(V);v.on(window,"load.bs.scrollspy.data-api",function(){u.find('[data-bs-spy="scroll"]').forEach(function(e){return new ps(e);});}),T(ps);var ms="active",fs=".active",gs=":scope > li > .active";var vs=/*#__PURE__*/function(_V10){_inherits(vs,_V10);var _super11=_createSuper(vs);function vs(){_classCallCheck(this,vs);return _super11.apply(this,arguments);}_createClass(vs,[{key:"show",value:function show(){var _this42=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!this._element.classList.contains(ms)){var _e18;var t=c(this._element),i=this._element.closest(".nav, .list-group"),s=(i&&(s="UL"===i.nodeName||"OL"===i.nodeName?gs:fs,_e18=u.find(s,i),_e18=_e18[_e18.length-1]),_e18?v.trigger(_e18,"hide.bs.tab",{relatedTarget:this._element}):null);v.trigger(this._element,"show.bs.tab",{relatedTarget:_e18}).defaultPrevented||null!==s&&s.defaultPrevented||(this._activate(this._element,i),s=function s(){v.trigger(_e18,"hidden.bs.tab",{relatedTarget:_this42._element}),v.trigger(_this42._element,"shown.bs.tab",{relatedTarget:_e18});},t?this._activate(t,t.parentNode,s):s());}}},{key:"_activate",value:function _activate(e,t,i){var _this43=this;var s=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?u.children(t,fs):u.find(gs,t))[0];var t=i&&s&&s.classList.contains("fade"),n=function n(){return _this43._transitionComplete(e,s,i);};s&&t?(s.classList.remove("show"),this._queueCallback(n,e,!0)):n();}},{key:"_transitionComplete",value:function _transitionComplete(e,t,i){if(t){t.classList.remove(ms);var _n5=u.findOne(":scope > .dropdown-menu .active",t.parentNode);_n5&&_n5.classList.remove(ms),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1);}e.classList.add(ms),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),b(e),e.classList.contains("fade")&&e.classList.add("show");var s=e.parentNode;s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains("dropdown-menu")&&((t=e.closest(".dropdown"))&&u.find(".dropdown-toggle",t).forEach(function(e){return e.classList.add(ms);}),e.setAttribute("aria-expanded",!0)),i&&i();}}],[{key:"NAME",get:function get(){return"tab";}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=vs.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError("No method named \"".concat(t,"\""));e[t]();}});}}]);return vs;}(V);v.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),!f(this)){var _t19=vs.getOrCreateInstance(this);_t19.show();}}),T(vs);var ys="show",bs="showing",ws={animation:"boolean",autohide:"boolean",delay:"number"},xs={animation:!0,autohide:!0,delay:5e3};var Ts=/*#__PURE__*/function(_V11){_inherits(Ts,_V11);var _super12=_createSuper(Ts);function Ts(e,t){var _this44;_classCallCheck(this,Ts);_this44=_super12.call(this,e),_this44._config=_this44._getConfig(t),_this44._timeout=null,_this44._hasMouseInteraction=!1,_this44._hasKeyboardInteraction=!1,_this44._setListeners();return _this44;}_createClass(Ts,[{key:"show",value:function show(){var _this45=this;v.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),b(this._element),this._element.classList.add(ys),this._element.classList.add(bs),this._queueCallback(function(){_this45._element.classList.remove(bs),v.trigger(_this45._element,"shown.bs.toast"),_this45._maybeScheduleHide();},this._element,this._config.animation));}},{key:"hide",value:function hide(){var _this46=this;this._element.classList.contains(ys)&&(v.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(bs),this._queueCallback(function(){_this46._element.classList.add("hide"),_this46._element.classList.remove(bs),_this46._element.classList.remove(ys),v.trigger(_this46._element,"hidden.bs.toast");},this._element,this._config.animation)));}},{key:"dispose",value:function dispose(){this._clearTimeout(),this._element.classList.contains(ys)&&this._element.classList.remove(ys),_get(_getPrototypeOf(Ts.prototype),"dispose",this).call(this);}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},xs),r.getDataAttributes(this._element)),"object"==_typeof(e)&&e?e:{}),p("toast",e,this.constructor.DefaultType),e;}},{key:"_maybeScheduleHide",value:function _maybeScheduleHide(){var _this47=this;this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(function(){_this47.hide();},this._config.delay)));}},{key:"_onInteraction",value:function _onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;}t?this._clearTimeout():(e=e.relatedTarget,this._element===e||this._element.contains(e)||this._maybeScheduleHide());}},{key:"_setListeners",value:function _setListeners(){var _this48=this;v.on(this._element,"mouseover.bs.toast",function(e){return _this48._onInteraction(e,!0);}),v.on(this._element,"mouseout.bs.toast",function(e){return _this48._onInteraction(e,!1);}),v.on(this._element,"focusin.bs.toast",function(e){return _this48._onInteraction(e,!0);}),v.on(this._element,"focusout.bs.toast",function(e){return _this48._onInteraction(e,!1);});}},{key:"_clearTimeout",value:function _clearTimeout(){clearTimeout(this._timeout),this._timeout=null;}}],[{key:"DefaultType",get:function get(){return ws;}},{key:"Default",get:function get(){return xs;}},{key:"NAME",get:function get(){return"toast";}},{key:"jQueryInterface",value:function jQueryInterface(t){return this.each(function(){var e=Ts.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError("No method named \"".concat(t,"\""));e[t](this);}});}}]);return Ts;}(V);return G(Ts),T(Ts),{Alert:U,Button:K,Carousel:he,Collapse:Ee,Dropdown:si,Modal:Ai,Offcanvas:$i,Popover:is,ScrollSpy:ps,Tab:vs,Toast:Ts,Tooltip:Zi};}),function(e,t){"object"==( false?undefined:_typeof(exports))&&"object"==( false?undefined:_typeof(module))?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){return i={686:function _(i,e,t){"use strict";t.d(e,{"default":function _default(){return s;}});var e=t(279),m=t.n(e),e=t(370),f=t.n(e),e=t(817),o=t.n(e);function a(e){try{return document.execCommand(e);}catch(e){return;}}function l(e){return e=o()(e),a("cut"),e;}function c(e){var t,i,s,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},r="";return"string"==typeof e?(t=e,i="rtl"===document.documentElement.getAttribute("dir"),(s=document.createElement("textarea")).style.fontSize="12pt",s.style.border="0",s.style.padding="0",s.style.margin="0",s.style.position="absolute",s.style[i?"right":"left"]="-9999px",i=window.pageYOffset||document.documentElement.scrollTop,s.style.top="".concat(i,"px"),s.setAttribute("readonly",""),s.value=t,n.container.appendChild(s),r=o()(s),a("copy"),s.remove()):(r=o()(e),a("copy")),r;}function d(e){return(d="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e);})(e);}function u(e){return(u="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e);})(e);}function g(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s);}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e;})(e,t);}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e);})(e);}function p(e,t){if(e="data-clipboard-".concat(e),t.hasAttribute(e))return t.getAttribute(e);}var s=function(){var e=r,t=m();if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t);i=r,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(e){return!1;}}();var i,s,n=function n(){var e=h(i),t=s?(t=h(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this;if(!t||"object"!==u(t)&&"function"!=typeof t){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return t;};function r(e,t){var i=this;if(!(i instanceof r))throw new TypeError("Cannot call a class as a function");return(i=n.call(this)).resolveOptions(t),i.listenClick(e),i;}return e=[{key:"copy",value:function value(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return c(e,t);}},{key:"cut",value:l},{key:"isSupported",value:function value(){var e="string"==typeof(e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"])?[e]:e,t=!!document.queryCommandSupported;return e.forEach(function(e){t=t&&!!document.queryCommandSupported(e);}),t;}}],g((t=r).prototype,[{key:"resolveOptions",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===u(e.container)?e.container:document.body;}},{key:"listenClick",value:function value(e){var t=this;this.listener=f()(e,"click",function(e){return t.onClick(e);});}},{key:"onClick",value:function value(e){var t=e.delegateTarget||e.currentTarget,e=function(){var e=void 0===(i=(s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).action)?"copy":i,t=s.container,i=s.target,s=s.text;if("copy"!==e&&"cut"!==e)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==i){if(!i||"object"!==d(i)||1!==i.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===e&&i.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===e&&(i.hasAttribute("readonly")||i.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');}return s?c(s,{container:t}):i?"cut"===e?l(i):c(i,{container:t}):void 0;}({action:this.action(t),container:this.container,target:this.target(t),text:this.text(t)});this.emit(e?"success":"error",{action:this.action,text:e,trigger:t,clearSelection:function clearSelection(){t&&t.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges();}});}},{key:"defaultAction",value:function value(e){return p("action",e);}},{key:"defaultTarget",value:function value(e){if(e=p("target",e))return document.querySelector(e);}},{key:"defaultText",value:function value(e){return p("text",e);}},{key:"destroy",value:function value(){this.listener.destroy();}}]),g(t,e),r;}();},828:function _(e){var t;"undefined"==typeof Element||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode;}};},438:function _(e,t,i){var o=i(828);function r(e,t,i,s,n){var r=function(t,i,e,s){return function(e){e.delegateTarget=o(e.target,i),e.delegateTarget&&s.call(t,e);};}.apply(this,arguments);return e.addEventListener(i,r,n),{destroy:function destroy(){e.removeEventListener(i,r,n);}};}e.exports=function(e,t,i,s,n){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof i?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return r(e,t,i,s,n);}));};},879:function _(e,i){i.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType;},i.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||i.node(e[0]));},i.string=function(e){return"string"==typeof e||e instanceof String;},i.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e);};},370:function _(e,t,i){var c=i(879),d=i(438);e.exports=function(e,t,i){if(!e&&!t&&!i)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(i))throw new TypeError("Third argument must be a Function");if(c.node(e))return(o=e).addEventListener(a=t,l=i),{destroy:function destroy(){o.removeEventListener(a,l);}};if(c.nodeList(e))return s=e,n=t,r=i,Array.prototype.forEach.call(s,function(e){e.addEventListener(n,r);}),{destroy:function destroy(){Array.prototype.forEach.call(s,function(e){e.removeEventListener(n,r);});}};if(c.string(e))return d(document.body,e,t,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var s,n,r,o,a,l;};},817:function _(e){e.exports=function(e){var t,i="SELECT"===e.nodeName?(e.focus(),e.value):"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName?((t=e.hasAttribute("readonly"))||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),t||e.removeAttribute("readonly"),e.value):(e.hasAttribute("contenteditable")&&e.focus(),i=window.getSelection(),(t=document.createRange()).selectNodeContents(e),i.removeAllRanges(),i.addRange(t),i.toString());return i;};},279:function _(e){function t(){}t.prototype={on:function on(e,t,i){var s=this.e||(this.e={});return(s[e]||(s[e]=[])).push({fn:t,ctx:i}),this;},once:function once(e,t,i){var s=this;function n(){s.off(e,n),t.apply(i,arguments);}return n._=t,this.on(e,n,i);},emit:function emit(e){for(var t=[].slice.call(arguments,1),i=((this.e||(this.e={}))[e]||[]).slice(),s=0,n=i.length;s<n;s++){i[s].fn.apply(i[s].ctx,t);}return this;},off:function off(e,t){var i=this.e||(this.e={}),s=i[e],n=[];if(s&&t)for(var r=0,o=s.length;r<o;r++){s[r].fn!==t&&s[r].fn._!==t&&n.push(s[r]);}return n.length?i[e]=n:delete i[e],this;}},e.exports=t,e.exports.TinyEmitter=t;}},n={},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return s.d(t,{a:t}),t;},s.d=function(e,t){for(var i in t){s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},s(686)["default"];function s(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return i[e](t,t.exports,s),t.exports;}var i,n;}),function(e,t){"object"==( false?undefined:_typeof(exports))&&"object"==( false?undefined:_typeof(module))?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(self,function(){return function(){"use strict";var s={d:function d(e,t){for(var i in t){s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}},o:function o(e,t){return Object.prototype.hasOwnProperty.call(e,t);},r:function r(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});}},e={};s.r(e),s.d(e,{"default":function _default(){return t;},divideNumbers:function divideNumbers(){return l;}});var t=function t(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _t$action=t.action,i=_t$action===void 0?"start":_t$action,_t$duration=t.duration,s=_t$duration===void 0?1e3:_t$duration,_t$delay=t.delay,n=_t$delay===void 0?16:_t$delay;if("stop"!==i){if(a(e),/[0-9]/.test(e.innerHTML)){var r=l(e.innerHTML,{duration:s||e.getAttribute("data-duration"),delay:n||e.getAttribute("data-delay")}),o=(e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=r[0]||"&nbsp;",e.style.visibility="visible",function(){e.innerHTML=r.shift()||"&nbsp;",r.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(o,n)):e._countUpOrigInnerHTML=void 0;});e.countUpTimeout=setTimeout(o,n);}}else a(e);},a=function a(e){clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility="";},l=function l(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _t$duration2=t.duration,n=_t$duration2===void 0?1e3:_t$duration2,_t$delay2=t.delay,i=_t$delay2===void 0?16:_t$delay2,r=n/i,o=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),a=[];for(var _e19=0;_e19<r;_e19++){a.push("");}for(var _t20=0;_t20<o.length;_t20++){if(/([0-9.][,.0-9]*[0-9]*)/.test(o[_t20])&&!/<[^>]+>/.test(o[_t20])){(function(){var i=o[_t20];var n=_toConsumableArray(i.matchAll(/[.,]/g)).map(function(e){return{"char":e[0],i:i.length-e.index-1};}).sort(function(e,t){return e.i-t.i;});i=i.replace(/[.,]/g,"");var s=a.length-1;for(var _t21=r;1<=_t21;_t21--){var _e20=parseInt(i/r*_t21,10);_e20=n.reduce(function(e,_ref11){var t=_ref11["char"],i=_ref11.i;return e.length<=i?e:e.slice(0,-i)+t+e.slice(-i);},_e20.toString()),a[s--]+=_e20;}})();}else for(var _e21=0;_e21<r;_e21++){a[_e21]+=o[_t20];}}return a[a.length]=e.toString(),a;};return e;}();}),function(e,t){"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e);})(e);}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s);}}function e(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e;}var a=Date.now();function c(e){var t={},i=!0,s=0,n=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(e)&&(i=e,s++);s<n;s++){r=void 0;var r,o=arguments[s];for(r in o){Object.prototype.hasOwnProperty.call(o,r)&&(i&&"[object Object]"===Object.prototype.toString.call(o[r])?t[r]=c(!0,t[r],o[r]):t[r]=o[r]);}}return t;}function h(e,t){if(0!=f(e=!r(e=B(e)||e===window||e===document?[e]:e)&&!m(e)?[e]:e))if(r(e)&&!m(e))for(var i=e.length,s=0;s<i&&!1!==t.call(e[s],e[s],s,e);s++){;}else if(m(e))for(var n in e){if(v(e,n)&&!1===t.call(e[n],e[n],n,e))break;}}function p(e,t,i){var s=1<arguments.length&&void 0!==t?t:null,n=2<arguments.length&&void 0!==i?i:null,t=e[a]=e[a]||[],r={all:t,evt:null,found:null};return s&&n&&0<f(t)&&h(t,function(e,t){if(e.eventName==s&&e.fn.toString()==n.toString())return r.found=!0,r.evt=t,!1;}),r;}function I(i,e,t){var e=1<arguments.length&&void 0!==e?e:{},c=e.onElement,s=e.withCallback,n=e.avoidDuplicate,r=void 0===n||n,n=e.once,d=void 0!==n&&n,n=e.useCapture,o=void 0!==n&&n,u=2<arguments.length?t:void 0,a=c||[];function l(e){D(s)&&s.call(u,e,this),d&&l.destroy();}return w(a)&&(a=document.querySelectorAll(a)),l.destroy=function(){h(a,function(e){var t=p(e,i,l);t.found&&t.all.splice(t.evt,1),e.removeEventListener&&e.removeEventListener(i,l,o);});},h(a,function(e){var t=p(e,i,l);(e.addEventListener&&r&&!t.found||!r)&&(e.addEventListener(i,l,o),t.all.push({eventName:i,fn:l}));}),l;}function L(t,e){h(e.split(" "),function(e){return t.classList.add(e);});}function $(t,e){h(e.split(" "),function(e){return t.classList.remove(e);});}function z(e,t){return e.classList.contains(t);}function N(e,t){for(;e!==document.body;){if(!(e=e.parentElement))return!1;if("function"==typeof e.matches?e.matches(t):e.msMatchesSelector(t))return e;}}function F(t,e,i){var s,e=1<arguments.length&&void 0!==e?e:"",n=2<arguments.length&&void 0!==i&&i;t&&""!==e&&("none"!=e?(i=function(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i){if(void 0!==t.style[e])return i[e];}}(),h(s=e.split(" "),function(e){L(t,"g"+e);}),I(i,{onElement:t,avoidDuplicate:!1,once:!0,withCallback:function withCallback(e,t){h(s,function(e){$(t,"g"+e);}),D(n)&&n();}})):D(n)&&n());}function H(e,t){t=1<arguments.length&&void 0!==t?t:"";if(""==t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t;}function l(e){e.style.display="block";}function d(e){e.style.display="none";}function y(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;){t.appendChild(i.firstChild);}return t;}function q(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight};}function b(e,t,i,s){var n,r;e()?t():(i=i||100,r=setInterval(function(){e()&&(clearInterval(r),n&&clearTimeout(n),t());},i),s&&(n=setTimeout(function(){clearInterval(r);},s)));}function i(e,t,i){if(j(e))console.error("Inject assets error");else if(D(t)&&(i=t,t=!1),w(t)&&t in window)D(i)&&i();else{var s;if(-1!==e.indexOf(".css")){if((s=document.querySelectorAll('link[href="'+e+'"]'))&&0<s.length)return void(D(i)&&i());var n=document.getElementsByTagName("head")[0],r=n.querySelectorAll('link[rel="stylesheet"]'),o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.href=e,o.media="all",r?n.insertBefore(o,r[0]):n.appendChild(o),void(D(i)&&i());}if((s=document.querySelectorAll('script[src="'+e+'"]'))&&0<s.length){if(D(i)){if(w(t))return void b(function(){return void 0!==window[t];},function(){i();});i();}}else{r=document.createElement("script");r.type="text/javascript",r.src=e,r.onload=function(){if(D(i)){if(w(t))return b(function(){return void 0!==window[t];},function(){i();}),!1;i();}},document.body.appendChild(r);}}}function g(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);}function D(e){return"function"==typeof e;}function w(e){return"string"==typeof e;}function B(e){return e&&e.nodeType&&1==e.nodeType;}function u(e){return Array.isArray(e);}function r(e){return e&&e.length&&isFinite(e.length);}function m(e){return"object"===t(e)&&null!=e&&!D(e)&&!u(e);}function j(e){return null==e;}function v(e,t){return null!==e&&hasOwnProperty.call(e,t);}function f(e){if(m(e)){if(e.keys)return e.keys().length;var t,i=0;for(t in e){v(e,t)&&i++;}return i;}return e.length;}function R(e){return!isNaN(parseFloat(e))&&isFinite(e);}function W(e){var e=0<arguments.length&&void 0!==e?e:-1,t=document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");if(!t.length)return!1;if(1==t.length)return t[0];var i=(e="string"==typeof e?parseInt(e):e)<0?1:e+1,s=(i>t.length&&(i="1"),[]);h(t,function(e){s.push(e.getAttribute("data-taborder"));});e=s.filter(function(e){return e>=parseInt(i);}).sort()[0];return document.querySelector('.gbtn[data-taborder="'.concat(e,'"]'));}function x(e){return Math.sqrt(e.x*e.x+e.y*e.y);}function T(e,t){n=t;var i,s,n=0==(s=x(i=e)*x(n))?0:(1<(i=(i.x*n.x+i.y*n.y)/s)&&(i=1),Math.acos(i));return 0<e.x*t.y-t.x*e.y&&(n*=-1),180*n/Math.PI;}e(_,[{key:"add",value:function value(e){this.handlers.push(e);}},{key:"del",value:function value(e){e||(this.handlers=[]);for(var t=this.handlers.length;0<=t;t--){this.handlers[t]===e&&this.handlers.splice(t,1);}}},{key:"dispatch",value:function value(){for(var e=0,t=this.handlers.length;e<t;e++){var i=this.handlers[e];"function"==typeof i&&i.apply(this.el,arguments);}}}]);var E=_;function _(e){o(this,_),this.handlers=[],this.el=e;}function s(e,t){e=new E(e);return e.add(t),e;}e(S,[{key:"start",value:function value(e){var t,i;e.touches&&(e.target&&e.target.nodeName&&0<=["a","button","input"].indexOf(e.target.nodeName.toLowerCase())?console.log("ignore drag for this touched element",e.target.nodeName.toLowerCase()):(this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=0<this.delta&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now,t=this.preV,1<e.touches.length&&(this._cancelLongTap(),this._cancelSingleTap(),i={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1},t.x=i.x,t.y=i.y,this.pinchStartLen=x(t),this.multipointStart.dispatch(e,this.element)),this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0;}.bind(this),750)));}},{key:"move",value:function value(e){var t,i,s,n,r,o,a;e.touches&&(o=this.preV,t=e.touches.length,i=e.touches[0].pageX,s=e.touches[0].pageY,this.isDoubleTap=!1,1<t?(n=e.touches[1].pageX,r=e.touches[1].pageY,a={x:e.touches[1].pageX-i,y:e.touches[1].pageY-s},null!==o.x&&(0<this.pinchStartLen&&(e.zoom=x(a)/this.pinchStartLen,this.pinch.dispatch(e,this.element)),e.angle=T(a,o),this.rotate.dispatch(e,this.element)),o.x=a.x,o.y=a.y,null!==this.x2&&null!==this.sx2?(e.deltaX=(i-this.x2+n-this.sx2)/2,e.deltaY=(s-this.y2+r-this.sy2)/2):(e.deltaX=0,e.deltaY=0),this.twoFingerPressMove.dispatch(e,this.element),this.sx2=n,this.sy2=r):(null!==this.x2?(e.deltaX=i-this.x2,e.deltaY=s-this.y2,o=Math.abs(this.x1-this.x2),a=Math.abs(this.y1-this.y2),(10<o||10<a)&&(this._preventTap=!0)):(e.deltaX=0,e.deltaY=0),this.pressMove.dispatch(e,this.element)),this.touchMove.dispatch(e,this.element),this._cancelLongTap(),this.x2=i,this.y2=s,1<t&&e.preventDefault());}},{key:"end",value:function value(e){var t;e.changedTouches&&(this._cancelLongTap(),t=this,e.touches.length<2&&(this.multipointEnd.dispatch(e,this.element),this.sx2=this.sy2=null),this.x2&&30<Math.abs(this.x1-this.x2)||this.y2&&30<Math.abs(this.y1-this.y2)?(e.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){t.swipe.dispatch(e,t.element);},0)):(this.tapTimeout=setTimeout(function(){t._preventTap||t.tap.dispatch(e,t.element),t.isDoubleTap&&(t.doubleTap.dispatch(e,t.element),t.isDoubleTap=!1);},0),t.isDoubleTap||(t.singleTapTimeout=setTimeout(function(){t.singleTap.dispatch(e,t.element);},250))),this.touchEnd.dispatch(e,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null);}},{key:"cancelAll",value:function value(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout);}},{key:"cancel",value:function value(e){this.cancelAll(),this.touchCancel.dispatch(e,this.element);}},{key:"_cancelLongTap",value:function value(){clearTimeout(this.longTapTimeout);}},{key:"_cancelSingleTap",value:function value(){clearTimeout(this.singleTapTimeout);}},{key:"_swipeDirection",value:function value(e,t,i,s){return Math.abs(e-t)>=Math.abs(i-s)?0<e-t?"Left":"Right":0<i-s?"Up":"Down";}},{key:"on",value:function value(e,t){this[e]&&this[e].add(t);}},{key:"off",value:function value(e,t){this[e]&&this[e].del(t);}},{key:"destroy",value:function value(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null;}}]);var Y=S;function S(e,t){o(this,S),this.element="string"==typeof e?document.querySelector(e):e,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;function i(){}this.rotate=s(this.element,t.rotate||i),this.touchStart=s(this.element,t.touchStart||i),this.multipointStart=s(this.element,t.multipointStart||i),this.multipointEnd=s(this.element,t.multipointEnd||i),this.pinch=s(this.element,t.pinch||i),this.swipe=s(this.element,t.swipe||i),this.tap=s(this.element,t.tap||i),this.doubleTap=s(this.element,t.doubleTap||i),this.longTap=s(this.element,t.longTap||i),this.singleTap=s(this.element,t.singleTap||i),this.pressMove=s(this.element,t.pressMove||i),this.twoFingerPressMove=s(this.element,t.twoFingerPressMove||i),this.touchMove=s(this.element,t.touchMove||i),this.touchEnd=s(this.element,t.touchEnd||i),this.touchCancel=s(this.element,t.touchCancel||i),this.translateContainer=this.element,this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null};}function X(e){var t=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i){if(void 0!==t.style[e])return i[e];}}(),i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=z(e,"gslide-media")?e:e.querySelector(".gslide-media"),n=N(s,".ginner-container"),e=e.querySelector(".gslide-description");L(s=769<i?n:s,"greset"),H(s,"translate3d(0, 0, 0)"),I(t,{onElement:s,once:!0,withCallback:function withCallback(e,t){$(s,"greset");}}),s.style.opacity="",e&&(e.style.opacity="");}e(k,[{key:"zoomIn",value:function value(){var e,t=this.widowWidth();this.zoomedIn||t<=768||((e=this.img).setAttribute("data-style",e.getAttribute("style")),e.style.maxWidth=e.naturalWidth+"px",e.style.maxHeight=e.naturalHeight+"px",e.naturalWidth>t&&(t=t/2-e.naturalWidth/2,this.setTranslate(this.img.parentNode,t,0)),this.slide.classList.add("zoomed"),this.zoomedIn=!0);}},{key:"zoomOut",value:function value(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose();}},{key:"dragStart",value:function value(e){e.preventDefault(),this.zoomedIn?("touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset),e.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1;}},{key:"dragEnd",value:function value(e){var t=this;e.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout(function(){t.dragging=!1,t.img.isDragging=!1,t.img.classList.remove("dragging");},100);}},{key:"drag",value:function value(e){this.active&&(e.preventDefault(),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY));}},{key:"onMove",value:function value(e){var t;this.zoomedIn&&(t=e.clientX-this.img.naturalWidth/2,e=e.clientY-this.img.naturalHeight/2,this.setTranslate(this.img,t,e));}},{key:"setTranslate",value:function value(e,t,i){e.style.transform="translate3d("+t+"px, "+i+"px, 0)";}},{key:"widowWidth",value:function value(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;}}]);var C=k;function k(e,t){var i=this,s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(o(this,k),this.img=e,this.slide=t,this.onclose=s,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",function(e){return i.dragStart(e);},!1),this.img.addEventListener("mouseup",function(e){return i.dragEnd(e);},!1),this.img.addEventListener("mousemove",function(e){return i.drag(e);},!1),this.img.addEventListener("click",function(e){return i.slide.classList.contains("dragging-nav")?(i.zoomOut(),!1):i.zoomedIn?void(i.zoomedIn&&!i.dragging&&i.zoomOut()):i.zoomIn();},!1),this.img.setZoomEvents=!0;}e(M,[{key:"dragStart",value:function value(e){var t;this.slide.classList.contains("zoomed")?this.active=!1:("touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset),t=e.target.nodeName.toLowerCase(),e.target.classList.contains("nodrag")||N(e.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(t)?this.active=!1:(e.preventDefault(),(e.target===this.el||"img"!==t&&N(e.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=N(e.target,".ginner-container"))));}},{key:"dragEnd",value:function value(e){var t=this;e&&e.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout(function(){t.instance.preventOutsideClick=!1,t.toleranceReached=!1,t.lastDirection=null,t.dragging=!1,t.el.isDragging=!1,t.el.classList.remove("dragging"),t.slide.classList.remove("dragging-nav"),t.dragContainer.style.transform="",t.dragContainer.style.transition="";},100);}},{key:"drag",value:function value(e){if(this.active){e.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var e=Math.abs(this.currentX),t=Math.abs(this.currentY);if(0<e&&e>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var i=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&i&&(this.doSlideChange=i),this.instance.settings.dragAutoSnap&&i)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==i&&this.instance.prevSlide(),void("left"==i&&this.instance.nextSlide());}0<this.toleranceY&&0<t&&e<=t&&(!this.lastDirection||"y"==this.lastDirection)&&(this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY),i=this.shouldClose(),!this.instance.settings.dragAutoSnap&&i&&(this.doSlideClose=!0),this.instance.settings.dragAutoSnap&&i&&this.instance.close());}}},{key:"shouldChange",value:function value(){var e,t=!1;return Math.abs(this.currentX)>=this.toleranceX&&("left"==(e=0<this.currentX?"right":"left")&&this.slide!==this.slide.parentNode.lastChild||"right"==e&&this.slide!==this.slide.parentNode.firstChild)&&(t=e),t;}},{key:"shouldClose",value:function value(){var e=!1;return e=Math.abs(this.currentY)>=this.toleranceY?!0:e;}},{key:"setTranslate",value:function value(e,t,i){e.style.transition=3<arguments.length&&void 0!==arguments[3]&&arguments[3]?"all .2s ease":"",e.style.transform="translate3d(".concat(t,"px, ").concat(i,"px, 0)");}}]);var A=M;function M(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=(o(this,M),e.dragEl),s=e.toleranceX,s=void 0===s?40:s,n=e.toleranceY,n=void 0===n?65:n,r=e.slide,r=void 0===r?null:r,e=e.instance,e=void 0===e?null:e;this.el=i,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=s,this.toleranceY=n,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=r,this.instance=e,this.el.addEventListener("mousedown",function(e){return t.dragStart(e);},!1),this.el.addEventListener("mouseup",function(e){return t.dragEnd(e);},!1),this.el.addEventListener("mousemove",function(e){return t.drag(e);},!1);}function P(r,o,a,m){var l=this,t=r.querySelector(".ginner-container"),c="gvideo"+a,e=r.querySelector(".gslide-media"),f=this.getAllPlayers(),d=(L(t,"gvideo-container"),e.insertBefore(y('<div class="gvideo-wrapper"></div>'),e.firstChild),r.querySelector(".gvideo-wrapper")),u=(i(this.settings.plyr.css,"Plyr"),o.href),h=(location.protocol.replace(":",""),""),p="",g=!1;e.style.maxWidth=o.width,i(this.settings.plyr.js,"Plyr",function(){if(u.match(/vimeo\.com\/([0-9]*)/)&&(s=/vimeo.*\/(\d+)/i.exec(u),h="vimeo",p=s[1]),(u.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||u.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||u.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))&&(s=function(e){var t="";t=void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(t=e[2].split(/[^0-9a-z_\-]/i))[0]:e;return t;}(u),h="youtube",p=s),null!==u.match(/\.(mp4|ogg|webm|mov)$/)){h="local";var e,t,i='<video id="'+c+'" ',s=(i=(i=(i=(i+='style="background:#000; max-width: '.concat(o.width,';" '))+'preload="metadata" '+('poster="'+o.poster+'" '))+'x-webkit-airplay="allow" '+"playsinline ")+"controls "+'class="gvideo-local">',u.toLowerCase().split(".").pop()),n={mp4:"",ogg:"",webm:""};for(e in n[s="mov"==s?"mp4":s]=u,n){n.hasOwnProperty(e)&&(t=n[e],""!==(t=o.hasOwnProperty(e)?o[e]:t)&&(i+='<source src="'.concat(t,'" type="video/').concat(e,'">')));}g=y(i+="</video>");}s=g||y('<div id="'.concat(c,'" data-plyr-provider="').concat(h,'" data-plyr-embed-id="').concat(p,'"></div>')),L(d,"".concat(h,"-video gvideo")),d.appendChild(s),d.setAttribute("data-id",c),d.setAttribute("data-index",a),s=v(l.settings.plyr,"config")?l.settings.plyr.config:{},s=new Plyr("#"+c,s);s.on("ready",function(e){e=e.detail.plyr;f[c]=e,D(m)&&m();}),b(function(){return r.querySelector("iframe")&&"true"==r.querySelector("iframe").dataset.ready;},function(){l.resize(r);}),s.on("enterfullscreen",O),s.on("exitfullscreen",O);});}function O(e){var t=N(e.target,".gslide-media");"enterfullscreen"==e.type&&L(t,"fullscreen"),"exitfullscreen"==e.type&&$(t,"fullscreen");}function V(e,t,i,s){var n,r,o,e=e.querySelector(".gslide-media"),a=(s={url:t.href,callback:s},a=s.url,n=s.allow,r=s.callback,s=s.appendTo,(o=document.createElement("iframe")).className="vimeo-video gvideo",o.src=a,o.style.width="100%",o.style.height="100%",n&&o.setAttribute("allow",n),o.onload=function(){L(o,"node-ready"),D(r)&&r();},s&&s.appendChild(o),o);e.parentNode.style.maxWidth=t.width,e.parentNode.style.height=t.height,e.appendChild(a);}e(U,[{key:"sourceType",value:function value(e){var t=e;if(null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/))return"image";if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))return"video";if(e.match(/vimeo\.com\/([0-9]*)/))return"video";if(null!==e.match(/\.(mp4|ogg|webm|mov)/))return"video";if(null!==e.match(/\.(mp3|wav|wma|aac|ogg)/))return"audio";if(-1<e.indexOf("#")&&""!==t.split("#").pop().trim())return"inline";return-1<e.indexOf("goajax=true")?"ajax":"external";}},{key:"parseConfig",value:function value(s,n){var r=this,o=c({descPosition:n.descPosition},this.defaults);if(m(s)&&!B(s))return v(s,"type")||(v(s,"content")&&s.content?s.type="inline":v(s,"href")&&(s.type=this.sourceType(s.href))),t=c(o,s),this.setSize(t,n),t;var a,e,t="",l=s.getAttribute("data-glightbox"),i=s.nodeName.toLowerCase();if("a"===i&&(t=s.href),"img"===i&&(t=s.src,o.alt=s.alt),o.href=t,h(o,function(e,t){v(n,t)&&"width"!==t&&(o[t]=n[t]);var i=s.dataset[t];j(i)||(o[t]=r.sanitizeValue(i));}),o.content&&(o.type="inline"),!o.type&&t&&(o.type=this.sourceType(t)),j(l)?(o.title||"a"!=i||j(t=s.title)||""===t||(o.title=t),o.title||"img"!=i||j(t=s.alt)||""===t||(o.title=t)):(a=[],h(o,function(e,t){a.push(";\\s?"+t);}),a=a.join("\\s?:|"),""!==l.trim()&&h(o,function(e,t){var i=l,s=new RegExp("s?"+t+"s?:s?(.*?)("+a+"s?:|$)"),i=i.match(s);i&&i.length&&i[1]&&(s=i[1].trim().replace(/;\s*$/,""),o[t]=r.sanitizeValue(s));})),o.description&&"."===o.description.substring(0,1)){try{e=document.querySelector(o.description).innerHTML;}catch(e){if(!(e instanceof DOMException))throw e;}e&&(o.description=e);}return o.description||(i=s.querySelector(".glightbox-desc"))&&(o.description=i.innerHTML),this.setSize(o,n,s),this.slideConfig=o;}},{key:"setSize",value:function value(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,s="video"==e.type?this.checkSize(t.videosWidth):this.checkSize(t.width),t=this.checkSize(t.height);return e.width=v(e,"width")&&""!==e.width?this.checkSize(e.width):s,e.height=v(e,"height")&&""!==e.height?this.checkSize(e.height):t,i&&"image"==e.type&&(e._hasCustomWidth=!!i.dataset.width,e._hasCustomHeight=!!i.dataset.height),e;}},{key:"checkSize",value:function value(e){return R(e)?"".concat(e,"px"):e;}},{key:"sanitizeValue",value:function value(e){return"true"!==e&&"false"!==e?e:"true"===e;}}]);var G=U;function U(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};o(this,U),this.defaults={href:"",sizes:"",srcset:"",title:"",type:"",description:"",alt:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},m(e)&&(this.defaults=c(this.defaults,e));}e(K,[{key:"setContent",value:function value(){var t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,c=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(z(i,"loaded"))return!1;var d,s=this.instance.settings,n=this.slideConfig,e=g(),u=(D(s.beforeSlideLoad)&&s.beforeSlideLoad({index:this.index,slide:i,player:!1}),n.type),h=n.descPosition,p=i.querySelector(".gslide-media"),r=i.querySelector(".gslide-title"),o=i.querySelector(".gslide-desc"),m=i.querySelector(".gdesc-inner"),a=c,f="gSlideTitle_"+this.index,l="gSlideDesc_"+this.index;if(D(s.afterSlideLoad)&&(a=function a(){D(c)&&c(),s.afterSlideLoad({index:t.index,slide:i,player:t.instance.getSlidePlayerInstance(t.index)});}),""==n.title&&""==n.description?m&&m.parentNode.parentNode.removeChild(m.parentNode):(r&&""!==n.title?(r.id=f,r.innerHTML=n.title):r.parentNode.removeChild(r),o&&""!==n.description?(o.id=l,e&&0<s.moreLength?(n.smallDescription=this.slideShortDesc(n.description,s.moreLength,s.moreText),o.innerHTML=n.smallDescription,this.descriptionEvents(o,n)):o.innerHTML=n.description):o.parentNode.removeChild(o),L(p.parentNode,"desc-".concat(h)),L(m.parentNode,"description-".concat(h))),L(p,"gslide-".concat(u)),L(i,"loaded"),"video"!==u){if("external"!==u)return"inline"===u?(function(e,t,i,s){var n,r=this,e=e.querySelector(".gslide-media"),o=!(!v(t,"href")||!t.href)&&t.href.split("#").pop().trim(),a=!(!v(t,"content")||!t.content)&&t.content;if(a&&(w(a)&&(n=y('<div class="ginlined-content">'.concat(a,"</div>"))),B(a)&&("none"==a.style.display&&(a.style.display="block"),(l=document.createElement("div")).className="ginlined-content",l.appendChild(a),n=l)),o){a=document.getElementById(o);if(!a)return!1;var l=a.cloneNode(!0);l.style.height=t.height,l.style.maxWidth=t.width,L(l,"ginlined-content"),n=l;}if(!n)return console.error("Unable to append inline slide content",t),!1;e.style.height=t.height,e.style.width=t.width,e.appendChild(n),this.events["inlineclose"+o]=I("click",{onElement:e.querySelectorAll(".gtrigger-close"),withCallback:function withCallback(e){e.preventDefault(),r.close();}}),D(s)&&s();}.apply(this.instance,[i,n,this.index,a]),void(n.draggable&&new A({dragEl:i.querySelector(".gslide-inline"),toleranceX:s.dragToleranceX,toleranceY:s.dragToleranceY,slide:i,instance:this.instance}))):"image"===u?(r=n,l=this.index,d=function d(){var e=i.querySelector("img");n.draggable&&new A({dragEl:e,toleranceX:s.dragToleranceX,toleranceY:s.dragToleranceY,slide:i,instance:t.instance}),n.zoomable&&e.naturalWidth>e.offsetWidth&&(L(e,"zoomable"),new C(e,i,function(){t.instance.resize();})),D(a)&&a();},f=(f=i).querySelector(".gslide-media"),e=new Image(),o="gSlideTitle_"+l,l="gSlideDesc_"+l,e.addEventListener("load",function(){D(d)&&d();},!1),e.src=r.href,""!=r.sizes&&""!=r.srcset&&(e.sizes=r.sizes,e.srcset=r.srcset),e.alt="",j(r.alt)||""===r.alt||(e.alt=r.alt),""!==r.title&&e.setAttribute("aria-labelledby",o),""!==r.description&&e.setAttribute("aria-describedby",l),r.hasOwnProperty("_hasCustomWidth")&&r._hasCustomWidth&&(e.style.width=r.width),r.hasOwnProperty("_hasCustomHeight")&&r._hasCustomHeight&&(e.style.height=r.height),void f.insertBefore(e,f.firstChild)):void(D(a)&&a());V.apply(this,[i,n,this.index,a]);}else P.apply(this.instance,[i,n,this.index,a]);}},{key:"slideShortDesc",value:function value(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],s=document.createElement("div");s.innerHTML=e;var n=i;if((e=s.innerText.trim()).length<=t)return e;e=e.substr(0,t-1);return n?(s=null,e+'... <a href="#" class="desc-more">'+i+"</a>"):e;}},{key:"descriptionEvents",value:function value(e,r){var o=this,e=e.querySelector(".desc-more");if(!e)return!1;I("click",{onElement:e,withCallback:function withCallback(e,t){e.preventDefault();var i=document.body,s=N(t,".gslide-desc");if(!s)return!1;s.innerHTML=r.description,L(i,"gdesc-open");var n=I("click",{onElement:[i,N(s,".gslide-description")],withCallback:function withCallback(e,t){"a"!==e.target.nodeName.toLowerCase()&&($(i,"gdesc-open"),L(i,"gdesc-closed"),s.innerHTML=r.smallDescription,o.descriptionEvents(s,r),setTimeout(function(){$(i,"gdesc-closed");},400),n.destroy());}});}});}},{key:"create",value:function value(){return y(this.instance.settings.slideHTML);}},{key:"getConfig",value:function value(){B(this.element)||this.element.hasOwnProperty("draggable")||(this.element.draggable=this.instance.settings.draggable);var e=new G(this.instance.settings.slideExtraAttributes);return this.slideConfig=e.parseConfig(this.element,this.instance.settings),this.slideConfig;}}]);var Q=K;function K(e,t,i){o(this,K),this.element=e,this.instance=t,this.index=i;}var Z=g(),J=null!==g()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,ee=document.getElementsByTagName("html")[0],te={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.8/plyr.css",js:"https://cdn.plyr.io/3.6.8/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{"in":"fadeIn",out:"fadeOut"},zoom:{"in":"zoomIn",out:"zoomOut"},slide:{"in":"slideInRight",out:"slideOutLeft"},slideBack:{"in":"slideInLeft",out:"slideOutRight"},none:{"in":"none",out:"none"}},svg:{close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',lightboxHTML:'<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'},ie=(e(se,[{key:"init",value:function value(){var i=this,e=this.getSelector();e&&(this.baseEvents=I("click",{onElement:e,withCallback:function withCallback(e,t){e.preventDefault(),i.open(t);}})),this.elements=this.getElements();}},{key:"open",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var s,u,h,n,i,r,o,p,m,f,a,l,g,v,y,b,w,x,T,E,_,S,c,d,C,k,A,M,P,t=R(t)?t:this.settings.startAt,O=(B(e)&&((O=e.getAttribute("data-gallery"))&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,O)),j(t)&&(t=this.getElementIndex(e))<0&&(t=0)),R(t)||(t=0),this.build(),F(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade["in"]),document.body);0<window.innerWidth-document.documentElement.clientWidth&&((e=document.createElement("style")).type="text/css",e.className="gcss-styles",document.head.appendChild(e),L(O,"gscrollbar-fixer")),L(O,"glightbox-open"),L(ee,"glightbox-open"),Z&&(L(document.body,"glightbox-mobile"),this.settings.slideEffect="slide",this.settings.autoplayVideos=!1),this.showSlide(t,!0),1==this.elements.length?(L(this.prevButton,"glightbox-button-hidden"),L(this.nextButton,"glightbox-button-hidden")):($(this.prevButton,"glightbox-button-hidden"),$(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),D(this.settings.onOpen)&&this.settings.onOpen(),J&&this.settings.touchNavigation&&((s=this).events.hasOwnProperty("touch")||(e=q(),u=e.width,h=e.height,p=n=!1,b=y=v=g=o=r=i=null,S=_=l=a=!(f=m=1),c={},d={},k=C=E=T=0,e=document.getElementById("glightbox-slider"),M=document.querySelector(".goverlay"),e=new Y(e,{touchStart:function touchStart(e){n=!0,(z(e.targetTouches[0].target,"ginner-container")||N(e.targetTouches[0].target,".gslide-desc")||"a"==e.targetTouches[0].target.nodeName.toLowerCase())&&(n=!1),(n=N(e.targetTouches[0].target,".gslide-inline")&&!z(e.targetTouches[0].target.parentNode,"gslide-inline")?!1:n)&&(d=e.targetTouches[0],c.pageX=e.targetTouches[0].pageX,c.pageY=e.targetTouches[0].pageY,C=e.targetTouches[0].clientX,k=e.targetTouches[0].clientY,i=s.activeSlide,r=i.querySelector(".gslide-media"),A=i.querySelector(".gslide-inline"),o=null,z(r,"gslide-image")&&(o=r.querySelector("img")),769<(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)&&(r=i.querySelector(".ginner-container")),$(M,"greset"),20<e.pageX&&e.pageX<window.innerWidth-20||e.preventDefault());},touchMove:function touchMove(e){if(n&&(d=e.targetTouches[0],!a&&!l)){if(A&&A.offsetHeight>h){var t=c.pageX-d.pageX;if(Math.abs(t)<=13)return!1;}p=!0;var i,t=e.targetTouches[0].clientX,e=e.targetTouches[0].clientY,t=C-t,e=k-e;if(Math.abs(t)>Math.abs(e)?S=!(_=!1):_=!(S=!1),w=d.pageX-c.pageX,T=100*w/u,x=d.pageY-c.pageY,E=100*x/h,_&&o&&(i=1-Math.abs(x)/h,M.style.opacity=i,s.settings.touchFollowAxis&&(T=0)),S&&(i=1-Math.abs(w)/u,r.style.opacity=i,s.settings.touchFollowAxis&&(E=0)),!o)return H(r,"translate3d(".concat(T,"%, 0, 0)"));H(r,"translate3d(".concat(T,"%, ").concat(E,"%, 0)"));}},touchEnd:function touchEnd(){if(n){if(p=!1,l||a)return y=g,void(b=v);var e=Math.abs(parseInt(E)),t=Math.abs(parseInt(T));if(!(29<e&&o))return e<29&&t<25?(L(M,"greset"),M.style.opacity=1,X(r)):void 0;s.close();}},multipointEnd:function multipointEnd(){setTimeout(function(){a=!1;},50);},multipointStart:function multipointStart(){a=!0,m=f||1;},pinch:function pinch(e){if(!o||p)return!1;a=!0,o.scaleX=o.scaleY=m*e.zoom;e=m*e.zoom;if(l=!0,e<=1)return l=!1,e=1,v=g=y=b=null,void o.setAttribute("style","");o.style.transform="scale3d(".concat(e=4.5<e?4.5:e,", ").concat(e,", 1)"),f=e;},pressMove:function pressMove(e){var t,i;l&&!a&&(i=d.pageX-c.pageX,t=d.pageY-c.pageY,y&&(i+=y),b&&(t+=b),g=i,v=t,i="translate3d(".concat(i,"px, ").concat(t,"px, 0)"),f&&(i+=" scale3d(".concat(f,", ").concat(f,", 1)")),H(o,i));},swipe:function swipe(e){if(!l)if(a)a=!1;else{if("Left"==e.direction){if(s.index==s.elements.length-1)return X(r);s.nextSlide();}if("Right"==e.direction){if(0==s.index)return X(r);s.prevSlide();}}}}),s.events.touch=e)),this.settings.keyboardNavigation&&((P=this).events.hasOwnProperty("keyboard")||(P.events.keyboard=I("keydown",{onElement:window,withCallback:function withCallback(e,t){var i=(e=e||window.event).keyCode;if(9==i){var s=document.querySelector(".gbtn.focused");if(!s){var n=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==n||"textarea"==n||"button"==n)return;}e.preventDefault();n=document.querySelectorAll(".gbtn[data-taborder]");if(!n||n.length<=0)return;if(!s)return void((e=W())&&(e.focus(),L(e,"focused")));n=W(s.getAttribute("data-taborder"));$(s,"focused"),n&&(n.focus(),L(n,"focused"));}39==i&&P.nextSlide(),37==i&&P.prevSlide(),27==i&&P.close();}})));}},{key:"openAt",value:function value(){this.open(null,0<arguments.length&&void 0!==arguments[0]?arguments[0]:0);}},{key:"showSlide",value:function value(){var e,t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,s=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=(l(this.loader),this.index=parseInt(i),this.slidesContainer.querySelector(".current")),r=(n&&$(n,"current"),this.slideAnimateOut(),this.slidesContainer.querySelectorAll(".gslide")[i]);z(r,"loaded")?(this.slideAnimateIn(r,s),d(this.loader)):(l(this.loader),n=this.elements[i],e={index:this.index,slide:r,slideNode:r,slideConfig:n.slideConfig,slideIndex:this.index,trigger:n.node,player:null},this.trigger("slide_before_load",e),n.instance.setContent(r,function(){d(t.loader),t.resize(),t.slideAnimateIn(r,s),t.trigger("slide_after_load",e);})),this.slideDescription=r.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&z(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(i+1),this.preloadSlide(i-1)),this.updateNavigationClasses(),this.activeSlide=r;}},{key:"preloadSlide",value:function value(e){var t=this;if(e<0||e>this.elements.length-1)return!1;if(j(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(z(i,"loaded"))return!1;var s=this.elements[e],n=s.type,r={index:e,slide:i,slideNode:i,slideConfig:s.slideConfig,slideIndex:e,trigger:s.node,player:null};this.trigger("slide_before_load",r),"video"==n||"external"==n?setTimeout(function(){s.instance.setContent(i,function(){t.trigger("slide_after_load",r);});},200):s.instance.setContent(i,function(){t.trigger("slide_after_load",r);});}},{key:"prevSlide",value:function value(){this.goToSlide(this.index-1);}},{key:"nextSlide",value:function value(){this.goToSlide(this.index+1);}},{key:"goToSlide",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(e<0||e>this.elements.length-1))return!1;e<0?e=this.elements.length-1:e>=this.elements.length&&(e=0),this.showSlide(e);}},{key:"insertSlide",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,e=(t<0&&(t=this.elements.length),new Q(e,this,t)),i=e.getConfig(),s=c({},i),n=e.create(),r=this.elements.length-1,e=(s.index=t,s.node=!1,s.instance=e,s.slideConfig=i,this.elements.splice(t,0,s),null),o=null;this.slidesContainer&&(r<t?this.slidesContainer.appendChild(n):(r=this.slidesContainer.querySelectorAll(".gslide")[t],this.slidesContainer.insertBefore(n,r)),(this.settings.preload&&0==this.index&&0==t||this.index-1==t||this.index+1==t)&&this.preloadSlide(t),0==this.index&&0==t&&(this.index=1),this.updateNavigationClasses(),e=this.slidesContainer.querySelectorAll(".gslide")[t],o=this.getSlidePlayerInstance(t),s.slideNode=e),this.trigger("slide_inserted",{index:t,slide:e,slideNode:e,slideConfig:i,slideIndex:t,trigger:null,player:o}),D(this.settings.slideInserted)&&this.settings.slideInserted({index:t,slide:e,player:o});}},{key:"removeSlide",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1;if(e<0||e>this.elements.length-1)return!1;var t=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[e];t&&(this.getActiveSlideIndex()==e&&(e==this.elements.length-1?this.prevSlide():this.nextSlide()),t.parentNode.removeChild(t)),this.elements.splice(e,1),this.trigger("slide_removed",e),D(this.settings.slideRemoved)&&this.settings.slideRemoved(e);}},{key:"slideAnimateIn",value:function value(e,t){var i=this,s=e.querySelector(".gslide-media"),n=e.querySelector(".gslide-description"),r={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:j(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:j(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},o={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};0<s.offsetWidth&&n&&(d(n),n.style.display=""),$(e,this.effectsClasses),t?F(e,this.settings.cssEfects[this.settings.openEffect]["in"],function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:r,current:o}),D(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[r,o]);}):(n="none"!==(s=this.settings.slideEffect)?this.settings.cssEfects[s]["in"]:s,this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(n=this.settings.cssEfects.slideBack["in"]),F(e,n,function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:r,current:o}),D(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[r,o]);})),setTimeout(function(){i.resize(e);},100),L(e,"current");}},{key:"slideAnimateOut",value:function value(){if(!this.prevActiveSlide)return!1;var s=this.prevActiveSlide,e=($(s,this.effectsClasses),L(s,"prev"),this.settings.slideEffect),e="none"!==e?this.settings.cssEfects[e].out:e;this.slidePlayerPause(s),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:j(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:j(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),D(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(e=this.settings.cssEfects.slideBack.out),F(s,e,function(){var e=s.querySelector(".ginner-container"),t=s.querySelector(".gslide-media"),i=s.querySelector(".gslide-description");e.style.transform="",t.style.transform="",$(t,"greset"),t.style.opacity="",i&&(i.style.opacity=""),$(s,"prev");});}},{key:"getAllPlayers",value:function value(){return this.videoPlayers;}},{key:"getSlidePlayerInstance",value:function value(e){var e="gvideo"+e,t=this.getAllPlayers();return!(!v(t,e)||!t[e])&&t[e];}},{key:"stopSlideVideo",value:function value(e){!B(e)||(t=e.querySelector(".gvideo-wrapper"))&&(e=t.getAttribute("data-index")),console.log("stopSlideVideo is deprecated, use slidePlayerPause");var t=this.getSlidePlayerInstance(e);t&&t.playing&&t.pause();}},{key:"slidePlayerPause",value:function value(e){!B(e)||(t=e.querySelector(".gvideo-wrapper"))&&(e=t.getAttribute("data-index"));var t=this.getSlidePlayerInstance(e);t&&t.playing&&t.pause();}},{key:"playSlideVideo",value:function value(e){!B(e)||(t=e.querySelector(".gvideo-wrapper"))&&(e=t.getAttribute("data-index")),console.log("playSlideVideo is deprecated, use slidePlayerPlay");var t=this.getSlidePlayerInstance(e);t&&!t.playing&&t.play();}},{key:"slidePlayerPlay",value:function value(e){!B(e)||(t=e.querySelector(".gvideo-wrapper"))&&(e=t.getAttribute("data-index"));var t=this.getSlidePlayerInstance(e);t&&!t.playing&&(t.play(),this.settings.autofocusVideos&&t.elements.container.focus());}},{key:"setElements",value:function value(e){var n=this,r=(this.settings.elements=!1,[]);e&&e.length&&h(e,function(e,t){var e=new Q(e,n,t),i=e.getConfig(),s=c({},i);s.slideConfig=i,s.instance=e,s.index=t,r.push(s);}),this.elements=r,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(h(this.elements,function(){var e=y(n.settings.slideHTML);n.slidesContainer.appendChild(e);}),this.showSlide(0,!0)));}},{key:"getElementIndex",value:function value(i){var s=!1;return h(this.elements,function(e,t){if(v(e,"node")&&e.node==i)return s=t,!0;}),s;}},{key:"getElements",value:function value(){var r=this,o=[],e=(this.elements=this.elements||[],!j(this.settings.elements)&&u(this.settings.elements)&&this.settings.elements.length&&h(this.settings.elements,function(e,t){var e=new Q(e,r,t),i=e.getConfig(),s=c({},i);s.node=!1,s.index=t,s.instance=e,s.slideConfig=i,o.push(s);}),!1);return(e=this.getSelector()?document.querySelectorAll(this.getSelector()):e)&&h(e,function(e,t){var i=new Q(e,r,t),s=i.getConfig(),n=c({},s);n.node=e,n.index=t,n.instance=i,n.slideConfig=s,n.gallery=e.getAttribute("data-gallery"),o.push(n);}),o;}},{key:"getGalleryElements",value:function value(e,t){return e.filter(function(e){return e.gallery==t;});}},{key:"getSelector",value:function value(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector);}},{key:"getActiveSlide",value:function value(){return this.slidesContainer.querySelectorAll(".gslide")[this.index];}},{key:"getActiveSlideIndex",value:function value(){return this.index;}},{key:"getAnimationClasses",value:function value(){var e,t,i=[];for(e in this.settings.cssEfects){this.settings.cssEfects.hasOwnProperty(e)&&(t=this.settings.cssEfects[e],i.push("g".concat(t["in"])),i.push("g".concat(t.out)));}return i.join(" ");}},{key:"build",value:function value(){var i=this;if(this.built)return!1;var e=document.body.childNodes,t=[],e=(h(e,function(e){e.parentNode==document.body&&"#"!==e.nodeName.charAt(0)&&e.hasAttribute&&!e.hasAttribute("aria-hidden")&&(t.push(e),e.setAttribute("aria-hidden","true"));}),v(this.settings.svg,"next")?this.settings.svg.next:""),s=v(this.settings.svg,"prev")?this.settings.svg.prev:"",n=v(this.settings.svg,"close")?this.settings.svg.close:"",r=this.settings.lightboxHTML,e=(r=y(r=(r=(r=r.replace(/{nextSVG}/g,e)).replace(/{prevSVG}/g,s)).replace(/{closeSVG}/g,n)),document.body.appendChild(r),document.getElementById("glightbox-body")),s=(this.modal=e).querySelector(".gclose");this.prevButton=e.querySelector(".gprev"),this.nextButton=e.querySelector(".gnext"),this.overlay=e.querySelector(".goverlay"),this.loader=e.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.bodyHiddenChildElms=t,this.events={},L(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&s&&(this.events.close=I("click",{onElement:s,withCallback:function withCallback(e,t){e.preventDefault(),i.close();}})),s&&!this.settings.closeButton&&s.parentNode.removeChild(s),this.nextButton&&(this.events.next=I("click",{onElement:this.nextButton,withCallback:function withCallback(e,t){e.preventDefault(),i.nextSlide();}})),this.prevButton&&(this.events.prev=I("click",{onElement:this.prevButton,withCallback:function withCallback(e,t){e.preventDefault(),i.prevSlide();}})),this.settings.closeOnOutsideClick&&(this.events.outClose=I("click",{onElement:e,withCallback:function withCallback(e,t){i.preventOutsideClick||z(document.body,"glightbox-mobile")||N(e.target,".ginner-container")||N(e.target,".gbtn")||z(e.target,"gnext")||z(e.target,"gprev")||i.close();}})),h(this.elements,function(e,t){i.slidesContainer.appendChild(e.instance.create()),e.slideNode=i.slidesContainer.querySelectorAll(".gslide")[t];}),J&&(L(document.body,"glightbox-touch"),this.settings.autoplayVideos=!1),this.events.resize=I("resize",{onElement:window,withCallback:function withCallback(){i.resize();}}),this.built=!0;}},{key:"resize",value:function value(){var e,t,i,s,n,r,o,a=(a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null)||this.activeSlide;a&&!z(a,"zoomed")&&(i=q(),e=a.querySelector(".gvideo-wrapper"),a=a.querySelector(".gslide-image"),t=this.slideDescription,r=i.width,i=i.height,(r<=768?L:$)(document.body,"glightbox-mobile"),(e||a)&&(s=!1,t&&(z(t,"description-bottom")||z(t,"description-top"))&&!z(t,"gabsolute")&&(s=!0),a&&(r<=768?a.querySelector("img"):s&&(n=t.offsetHeight,(a=a.querySelector("img")).setAttribute("style","max-height: calc(100vh - ".concat(n,"px)")),t.setAttribute("style","max-width: ".concat(a.offsetWidth,"px;")))),e&&((n=v(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"")||(a=e.clientWidth,o=e.clientHeight,n="".concat(a/(a=a/o),":").concat(o/a)),o=n.split(":"),a=this.settings.videosWidth,n=this.settings.videosWidth,o=(n=R(a)||-1!==a.indexOf("px")?parseInt(a):-1!==a.indexOf("vw")?r*parseInt(a)/100:-1!==a.indexOf("vh")?i*parseInt(a)/100:-1!==a.indexOf("%")?r*parseInt(a)/100:parseInt(e.clientWidth))/(parseInt(o[0])/parseInt(o[1])),o=Math.floor(o),s&&(i-=t.offsetHeight),r<n||i<o||i<o&&n<r?(o=e.offsetWidth,n=e.offsetHeight,e.parentNode.setAttribute("style","max-width: ".concat((o={width:o*(r=i/n),height:n*r}).width,"px")),s&&t.setAttribute("style","max-width: ".concat(o.width,"px;"))):(e.parentNode.style.maxWidth="".concat(a),s&&t.setAttribute("style","max-width: ".concat(a,";"))))));}},{key:"reload",value:function value(){this.init();}},{key:"updateNavigationClasses",value:function value(){var e=this.loop();$(this.nextButton,"disabled"),$(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(L(this.prevButton,"disabled"),L(this.nextButton,"disabled")):0!==this.index||e?this.index!==this.elements.length-1||e||L(this.nextButton,"disabled"):L(this.prevButton,"disabled");}},{key:"loop",value:function value(){var e=v(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return e=v(this.settings,"loop")?this.settings.loop:e;}},{key:"close",value:function value(){var i=this;if(!this.lightboxOpen){if(this.events){for(var e in this.events){this.events.hasOwnProperty(e)&&this.events[e].destroy();}this.events=null;}return!1;}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),this.bodyHiddenChildElms.length&&h(this.bodyHiddenChildElms,function(e){e.removeAttribute("aria-hidden");}),L(this.modal,"glightbox-closing"),F(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),F(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,function(){if(i.activeSlide=null,i.prevActiveSlideIndex=null,i.prevActiveSlide=null,i.built=!1,i.events){for(var e in i.events){i.events.hasOwnProperty(e)&&i.events[e].destroy();}i.events=null;}var t=document.body,t=($(ee,"glightbox-open"),$(t,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),i.modal.parentNode.removeChild(i.modal),i.trigger("close"),D(i.settings.onClose)&&i.settings.onClose(),document.querySelector(".gcss-styles"));t&&t.parentNode.removeChild(t),i.lightboxOpen=!1,i.closing=null;});}},{key:"destroy",value:function value(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy();}},{key:"on",value:function value(e,t){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(!e||!D(t))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:e,once:i,callback:t});}},{key:"once",value:function value(e,t){this.on(e,t,!0);}},{key:"trigger",value:function value(n){var t=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,o=[];h(this.apiEvents,function(e,t){var i=e.evt,s=e.once,e=e.callback;i==n&&(e(r),s&&o.push(t));}),o.length&&h(o,function(e){return t.apiEvents.splice(e,1);});}},{key:"clearAllEvents",value:function value(){this.apiEvents.splice(0,this.apiEvents.length);}},{key:"version",value:function value(){return"3.1.1";}}]),se);function se(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};o(this,se),this.customOptions=e,this.settings=c(te,e),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1;}return function(){var e=new ie(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{});return e.init(),e;};}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){"use strict";function e(i,s){function n(){d=l(),c=null,a=i.apply(r,o),r=o=null;}var r,o,a,l=Date.now||function(){return new Date().getTime();},c=null,d=0;return function(){var e=l(),t=s-(e-d);return r=this,o=arguments,t<=0?(clearTimeout(c),c=null,d=e,a=i.apply(r,o),r=o=null):c=c||setTimeout(n,t),a;};}function t(e,t){"querySelector"in document&&"addEventListener"in window&&(this.visible=!1,this.options={offset:300,offsetSide:"top",classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function onInit(){},onStick:function onStick(){},onUnstick:function onUnstick(){},onDestroy:function onDestroy(){}},this.elem="string"==typeof e?document.querySelector(e):e,this.options=s(this.options,t),this.init());}var s=function s(e,t){for(var i in t){t.hasOwnProperty(i)&&(e[i]="object"==_typeof(t[i])?s(e[i],t[i]):t[i]);}return e;};return t.prototype={constructor:t,init:function init(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,document.body.insertBefore(this.clonedElem,document.body.firstChild),"number"==typeof this.options.offset)this.scrollOffset=this.options.offset;else{if("string"!=typeof this.options.offset)throw new Error("Invalid offset: "+this.options.offset);this._setScrollOffset();}this._throttleUpdate=e(this.update.bind(this),this.options.throttle),this._throttleScrollOffset=e(this._setScrollOffset.bind(this),this.options.throttle),window.addEventListener("scroll",this._throttleUpdate,!1),window.addEventListener("resize",this._throttleScrollOffset,!1),this.options.onInit.call(this);},_setScrollOffset:function _setScrollOffset(){"string"==typeof this.options.offset&&(this.scrollOffset=function(e,t){for(var i=0,s=e.offsetHeight;e;){i+=e.offsetTop,e=e.offsetParent;}return"bottom"===t&&(i+=s),i;}(document.querySelector(this.options.offset),this.options.offsetSide));},destroy:function destroy(){document.body.removeChild(this.clonedElem),window.removeEventListener("scroll",this._throttleUpdate),window.removeEventListener("resize",this._throttleScrollOffset),this.options.onDestroy.call(this);},stick:function stick(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this));},unstick:function unstick(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this));},update:function update(){(void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)>this.scrollOffset?this.stick():this.unstick();}},t;}),function(e,t){ true?!(__WEBPACK_LOCAL_MODULE_0__factory = (t), (__WEBPACK_LOCAL_MODULE_0__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_LOCAL_MODULE_0__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_0__factory.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module)) : __WEBPACK_LOCAL_MODULE_0__factory), (__WEBPACK_LOCAL_MODULE_0__module.loaded = true), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports)):undefined;}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){var i;if(e&&t)return-1==(i=(i=this._events=this._events||{})[e]=i[e]||[]).indexOf(t)&&i.push(t),this;},t.once=function(e,t){var i;if(e&&t)return this.on(e,t),((i=this._onceEvents=this._onceEvents||{})[e]=i[e]||{})[t]=!0,this;},t.off=function(e,t){e=this._events&&this._events[e];if(e&&e.length)return-1!=(t=e.indexOf(t))&&e.splice(t,1),this;},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var s=this._onceEvents&&this._onceEvents[e],n=0;n<i.length;n++){var r=i[n];s&&s[r]&&(this.off(e,r),delete s[r]),r.apply(this,t);}return this;}},t.allOff=function(){delete this._events,delete this._onceEvents;},e;}),function(t,i){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){return i(t,e);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}("undefined"!=typeof window?window:this,function(t,e){function r(e,t){for(var i in t){e[i]=t[i];}return e;}function o(e,t,i){if(!(this instanceof o))return new o(e,t,i);var s,n=e;return(n="string"==typeof e?document.querySelectorAll(e):n)?(this.elements=(s=n,Array.isArray(s)?s:"object"==_typeof(s)&&"number"==typeof s.length?c.call(s):[s]),this.options=r({},this.options),"function"==typeof t?i=t:r(this.options,t),i&&this.on("always",i),this.getImages(),a&&(this.jqDeferred=new a.Deferred()),void setTimeout(this.check.bind(this))):void l.error("Bad element for imagesLoaded "+(n||e));}function i(e){this.img=e;}function s(e,t){this.url=e,this.element=t,this.img=new Image();}var a=t.jQuery,l=t.console,c=Array.prototype.slice,d=((o.prototype=Object.create(e.prototype)).options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this);},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),s=0;s<i.length;s++){var n=i[s];this.addImage(n);}if("string"==typeof this.options.background)for(var r=e.querySelectorAll(this.options.background),s=0;s<r.length;s++){var o=r[s];this.addElementBackgroundImages(o);}}},{1:!0,9:!0,11:!0});return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,s=i.exec(t.backgroundImage);null!==s;){var n=s&&s[2];n&&this.addBackground(n,e),s=i.exec(t.backgroundImage);}},o.prototype.addImage=function(e){e=new i(e);this.images.push(e);},o.prototype.addBackground=function(e,t){e=new s(e,t);this.images.push(e);},o.prototype.check=function(){function t(e,t,i){setTimeout(function(){s.progress(e,t,i);});}var s=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check();}):void this.complete();},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&l&&l.log("progress: "+i,e,t);},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred&&(e=this.hasAnyBroken?"reject":"resolve",this.jqDeferred[e](this));},(i.prototype=Object.create(e.prototype)).check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image(),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src));},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth;},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t]);},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e);},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents();},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents();},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);},(s.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents());},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t]);},(o.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((a=e).fn.imagesLoaded=function(e,t){return new o(this,e,t).jqDeferred.promise(a(this));});})(),o;}),function(t,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){return i(t,e);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(window,function(e,t){"use strict";function i(l,c,d){(d=d||t||e.jQuery)&&(c.prototype.option||(c.prototype.option=function(e){d.isPlainObject(e)&&(this.options=d.extend(!0,this.options,e));}),d.fn[l]=function(e){var t,s,n,r,o,a;return"string"==typeof e?(t=u.call(arguments,1),n=t,o="$()."+l+'("'+(s=e)+'")',(t=this).each(function(e,t){var i,t=d.data(t,l);t?(i=t[s])&&"_"!=s.charAt(0)?(i=i.apply(t,n),r=void 0===r?i:r):h(o+" is not a valid method"):h(l+" not initialized. Cannot call methods, i.e. "+o);}),void 0!==r?r:t):(a=e,this.each(function(e,t){var i=d.data(t,l);i?(i.option(a),i._init()):(i=new c(t,a),d.data(t,l,i));}),this);},s(d));}function s(e){!e||e.bridget||(e.bridget=i);}var u=Array.prototype.slice,n=e.console,h=void 0===n?function(){}:function(e){n.error(e);};return s(t||e.jQuery),i;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){var i;if(e&&t)return-1==(i=(i=this._events=this._events||{})[e]=i[e]||[]).indexOf(t)&&i.push(t),this;},t.once=function(e,t){var i;if(e&&t)return this.on(e,t),((i=this._onceEvents=this._onceEvents||{})[e]=i[e]||{})[t]=!0,this;},t.off=function(e,t){e=this._events&&this._events[e];if(e&&e.length)return-1!=(t=e.indexOf(t))&&e.splice(t,1),this;},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var s=this._onceEvents&&this._onceEvents[e],n=0;n<i.length;n++){var r=i[n];s&&s[r]&&(this.off(e,r),delete s[r]),r.apply(this,t);}return this;}},t.allOff=function(){delete this._events,delete this._onceEvents;},e;}),function(e,t){ true?!(__WEBPACK_LOCAL_MODULE_3__factory = (t), (__WEBPACK_LOCAL_MODULE_3__module = { id: "get-size/get-size", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_3__ = (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)) : __WEBPACK_LOCAL_MODULE_3__factory), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports)):undefined;}(window,function(){"use strict";function g(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t;}function v(e){e=getComputedStyle(e);return e||t("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e;}function y(e){if(T||(T=!0,(a=document.createElement("div")).style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style.boxSizing="border-box",(o=document.body||document.documentElement).appendChild(a),s=v(a),b=200==Math.round(g(s.width)),y.isBoxSizeOuter=b,o.removeChild(a)),(e="string"==typeof e?document.querySelector(e):e)&&"object"==_typeof(e)&&e.nodeType){var t=v(e);if("none"!=t.display){var i={};i.width=e.offsetWidth,i.height=e.offsetHeight;for(var s=i.isBorderBox="border-box"==t.boxSizing,n=0;n<x;n++){var d=w[n],r=t[d],r=parseFloat(r);i[d]=isNaN(r)?0:r;}var o=i.paddingLeft+i.paddingRight,a=i.paddingTop+i.paddingBottom,e=i.marginLeft+i.marginRight,u=i.marginTop+i.marginBottom,h=i.borderLeftWidth+i.borderRightWidth,p=i.borderTopWidth+i.borderBottomWidth,m=s&&b,l=g(t.width),l=(!1!==l&&(i.width=l+(m?0:o+h)),g(t.height));return!1!==l&&(i.height=l+(m?0:a+p)),i.innerWidth=i.width-(o+h),i.innerHeight=i.height-(a+p),i.outerWidth=i.width+e,i.outerHeight=i.height+u,i;}for(var f={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},c=0;c<x;c++){f[w[c]]=0;}return f;}var a,o,s;}var b,t="undefined"==typeof console?function(){}:function(e){console.error(e);},w=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],x=w.length,T=!1;return y;}),function(e,t){"use strict"; true?!(__WEBPACK_LOCAL_MODULE_4__factory = (t), (__WEBPACK_LOCAL_MODULE_4__module = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_4__ = (typeof __WEBPACK_LOCAL_MODULE_4__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_4__factory.call(__WEBPACK_LOCAL_MODULE_4__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_4__module.exports, __WEBPACK_LOCAL_MODULE_4__module)) : __WEBPACK_LOCAL_MODULE_4__factory), (__WEBPACK_LOCAL_MODULE_4__module.loaded = true), __WEBPACK_LOCAL_MODULE_4__ === undefined && (__WEBPACK_LOCAL_MODULE_4__ = __WEBPACK_LOCAL_MODULE_4__module.exports)):undefined;}(window,function(){"use strict";var i=function(){var e=window.Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0;i<t.length;i++){var s=t[i]+"MatchesSelector";if(e[s])return s;}}();return function(e,t){return e[i](t);};}),function(t,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_5__ = ((function(e){return i(t,e);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined;}(window,function(i,r){var l={extend:function extend(e,t){for(var i in t){e[i]=t[i];}return e;},modulo:function modulo(e,t){return(e%t+t)%t;}},t=Array.prototype.slice,c=(l.makeArray=function(e){return Array.isArray(e)?e:null==e?[]:"object"==_typeof(e)&&"number"==typeof e.length?t.call(e):[e];},l.removeFrom=function(e,t){t=e.indexOf(t);-1!=t&&e.splice(t,1);},l.getParent=function(e,t){for(;e.parentNode&&e!=document.body;){if(e=e.parentNode,r(e,t))return e;}},l.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e;},l.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e);},l.filterFindElements=function(e,s){e=l.makeArray(e);var n=[];return e.forEach(function(e){if(e instanceof HTMLElement)if(s){r(e,s)&&n.push(e);for(var t=e.querySelectorAll(s),i=0;i<t.length;i++){n.push(t[i]);}}else n.push(e);}),n;},l.debounceMethod=function(e,t,s){s=s||100;var n=e.prototype[t],r=t+"Timeout";e.prototype[t]=function(){var e=this[r],t=(clearTimeout(e),arguments),i=this;this[r]=setTimeout(function(){n.apply(i,t),delete i[r];},s);};},l.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?setTimeout(e):document.addEventListener("DOMContentLoaded",e);},l.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,i){return t+"-"+i;}).toLowerCase();},i.console);return l.htmlInit=function(o,a){l.docReady(function(){var e=l.toDashed(a),s="data-"+e,t=document.querySelectorAll("["+s+"]"),e=document.querySelectorAll(".js-"+e),t=l.makeArray(t).concat(l.makeArray(e)),n=s+"-options",r=i.jQuery;t.forEach(function(t){var e,i=t.getAttribute(s)||t.getAttribute(n);try{e=i&&JSON.parse(i);}catch(e){return void(c&&c.error("Error parsing "+s+" on "+t.className+": "+e));}i=new o(t,e);r&&r.data(t,a,i);});});},l;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__,__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_6__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined;}(window,function(e,t){"use strict";function i(e,t){e&&(this.element=e,this.layout=t,this.position={x:0,y:0},this._create());}var s=document.documentElement.style,n="string"==typeof s.transition?"transition":"WebkitTransition",s="string"==typeof s.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],o={transform:s,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"},e=i.prototype=Object.create(e.prototype),a=(e.constructor=i,e._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"});},e.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e);},e.getSize=function(){this.size=t(this.element);},e.css=function(e){var t,i=this.element.style;for(t in e){i[o[t]||t]=e[t];}},e.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),s=e[t?"left":"right"],e=e[i?"top":"bottom"],n=parseFloat(s),r=parseFloat(e),o=this.layout.size;-1!=s.indexOf("%")&&(n=n/100*o.width),-1!=e.indexOf("%")&&(r=r/100*o.height),n=isNaN(n)?0:n,r=isNaN(r)?0:r,n-=t?o.paddingLeft:o.paddingRight,r-=i?o.paddingTop:o.paddingBottom,this.position.x=n,this.position.y=r;},e.layoutPosition=function(){var e=this.layout.size,t={},i=this.layout._getOption("originLeft"),s=this.layout._getOption("originTop"),n=i?"right":"left",r=this.position.x+e[i?"paddingLeft":"paddingRight"],i=(t[i?"left":"right"]=this.getXValue(r),t[n]="",s?"paddingTop":"paddingBottom"),r=s?"bottom":"top",n=this.position.y+e[i];t[s?"top":"bottom"]=this.getYValue(n),t[r]="",this.css(t),this.emitEvent("layout",[this]);},e.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px";},e.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px";},e._transitionTo=function(e,t){this.getPosition();var i=this.position.x,s=this.position.y,n=e==this.position.x&&t==this.position.y;this.setPosition(e,t),!n||this.isTransitioning?((n={}).transform=this.getTranslate(e-i,t-s),this.transition({to:n,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})):this.layoutPosition();},e.getTranslate=function(e,t){return"translate3d("+(e=this.layout._getOption("originLeft")?e:-e)+"px, "+(t=this.layout._getOption("originTop")?t:-t)+"px, 0)";},e.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition();},e.moveTo=e._transitionTo,e.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t);},e._nonTransition=function(e){for(var t in this.css(e.to),e.isCleaning&&this._removeStyles(e.to),e.onTransitionEnd){e.onTransitionEnd[t].call(this);}},e.transition=function(e){if(parseFloat(this.layout.options.transitionDuration)){var t,i=this._transn;for(t in e.onTransitionEnd){i.onEnd[t]=e.onTransitionEnd[t];}for(t in e.to){i.ingProperties[t]=!0,e.isCleaning&&(i.clean[t]=!0);}e.from&&(this.css(e.from),this.element.offsetHeight,0),this.enableTransition(e.to),this.css(e.to),this.isTransitioning=!0;}else this._nonTransition(e);},"opacity,"+s.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase();})),l=(e.enableTransition=function(){var e;this.isTransitioning||(e="number"==typeof(e=this.layout.options.transitionDuration)?e+"ms":e,this.css({transitionProperty:a,transitionDuration:e,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1));},e.onwebkitTransitionEnd=function(e){this.ontransitionend(e);},e.onotransitionend=function(e){this.ontransitionend(e);},{"-webkit-transform":"transform"}),c=(e.ontransitionend=function(e){var t,i;e.target===this.element&&(t=this._transn,i=l[e.propertyName]||e.propertyName,delete t.ingProperties[i],function(e){for(var t in e){return;}return 1;}(t.ingProperties)&&this.disableTransition(),i in t.clean&&(this.element.style[e.propertyName]="",delete t.clean[i]),i in t.onEnd&&(t.onEnd[i].call(this),delete t.onEnd[i]),this.emitEvent("transitionEnd",[this]));},e.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1;},e._removeStyles=function(e){var t,i={};for(t in e){i[t]="";}this.css(i);},{transitionProperty:"",transitionDuration:"",transitionDelay:""});return e.removeTransitionStyles=function(){this.css(c);},e.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms";},e.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this]);},e.remove=function(){return n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem();}),void this.hide()):void this.removeElem();},e.reveal=function(){delete this.isHidden,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t});},e.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal");},e.getHideRevealTransitionEndProperty=function(e){var t,e=this.layout.options[e];if(e.opacity)return"opacity";for(t in e){return t;}},e.hide=function(){this.isHidden=!0,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:t});},e.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"));},e.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""});},i;}),function(n,r){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__,__WEBPACK_LOCAL_MODULE_3__,__WEBPACK_LOCAL_MODULE_5__,__WEBPACK_LOCAL_MODULE_6__], __WEBPACK_LOCAL_MODULE_7__ = ((function(e,t,i,s){return r(n,e,t,i,s);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined;}(window,function(e,d,n,s,r){"use strict";function o(e,t){var i=s.getQueryElement(e);i?(this.element=i,l&&(this.$element=l(this.element)),this.options=s.extend({},this.constructor.defaults),this.option(t),t=++h,this.element.outlayerGUID=t,(c[t]=this)._create(),this._getOption("initLayout")&&this.layout()):u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||e));}function a(e){function t(){e.apply(this,arguments);}return(t.prototype=Object.create(e.prototype)).constructor=t;}function t(){}var u=e.console,l=e.jQuery,h=0,c={},i=(o.namespace="outlayer",o.Item=r,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},o.prototype),p=(s.extend(i,d.prototype),i.option=function(e){s.extend(this.options,e);},i._getOption=function(e){var t=this.constructor.compatOptions[e];return t&&void 0!==this.options[t]?this.options[t]:this.options[e];},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},i._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),s.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize();},i.reloadItems=function(){this.items=this._itemize(this.element.children);},i._itemize=function(e){for(var t=this._filterFindItemElements(e),i=this.constructor.Item,s=[],n=0;n<t.length;n++){var r=new i(t[n],this);s.push(r);}return s;},i._filterFindItemElements=function(e){return s.filterFindElements(e,this.options.itemSelector);},i.getItemElements=function(){return this.items.map(function(e){return e.element;});},i.layout=function(){this._resetLayout(),this._manageStamps();var e=this._getOption("layoutInstant"),e=void 0!==e?e:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0;},i._init=i.layout,i._resetLayout=function(){this.getSize();},i.getSize=function(){this.size=n(this.element);},i._getMeasurement=function(e,t){var i,s=this.options[e];s?("string"==typeof s?i=this.element.querySelector(s):s instanceof HTMLElement&&(i=s),this[e]=i?n(i)[t]:s):this[e]=0;},i.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout();},i._getItemsForLayout=function(e){return e.filter(function(e){return!e.isIgnored;});},i._layoutItems=function(e,i){var s;this._emitCompleteOnItems("layout",e),e&&e.length&&(s=[],e.forEach(function(e){var t=this._getItemLayoutPosition(e);t.item=e,t.isInstant=i||e.isLayoutInstant,s.push(t);},this),this._processLayoutQueue(s));},i._getItemLayoutPosition=function(){return{x:0,y:0};},i._processLayoutQueue=function(e){this.updateStagger(),e.forEach(function(e,t){this._positionItem(e.item,e.x,e.y,e.isInstant,t);},this);},i.updateStagger=function(){var e=this.options.stagger;return null==e?void(this.stagger=0):(this.stagger=function(e){if("number"==typeof e)return e;var t=(e=e.match(/(^\d*\.?\d*)(\w*)/))&&e[1],e=e&&e[2];return t.length?parseFloat(t)*(p[e]||1):0;}(e),this.stagger);},i._positionItem=function(e,t,i,s,n){s?e.goTo(t,i):(e.stagger(n*this.stagger),e.moveTo(t,i));},i._postLayout=function(){this.resizeContainer();},i.resizeContainer=function(){var e;!this._getOption("resizeContainer")||(e=this._getContainerSize())&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1));},i._getContainerSize=t,i._setContainerMeasure=function(e,t){var i;void 0!==e&&((i=this.size).isBorderBox&&(e+=t?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px");},i._emitCompleteOnItems=function(t,e){function i(){r.dispatchEvent(t+"Complete",null,[e]);}function s(){++n==o&&i();}var n,r=this,o=e.length;e&&o?(n=0,e.forEach(function(e){e.once(t,s);})):i();},i.dispatchEvent=function(e,t,i){var s=t?[t].concat(i):i;this.emitEvent(e,s),l&&(this.$element=this.$element||l(this.element),t?((s=l.Event(t)).type=e,this.$element.trigger(s,i)):this.$element.trigger(e,i));},i.ignore=function(e){e=this.getItem(e);e&&(e.isIgnored=!0);},i.unignore=function(e){e=this.getItem(e);e&&delete e.isIgnored;},i.stamp=function(e){(e=this._find(e))&&(this.stamps=this.stamps.concat(e),e.forEach(this.ignore,this));},i.unstamp=function(e){(e=this._find(e))&&e.forEach(function(e){s.removeFrom(this.stamps,e),this.unignore(e);},this);},i._find=function(e){if(e)return"string"==typeof e&&(e=this.element.querySelectorAll(e)),s.makeArray(e);},i._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this));},i._getBoundingRect=function(){var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)};},i._manageStamp=t,i._getElementOffset=function(e){var t=e.getBoundingClientRect(),i=this._boundingRect,e=n(e);return{left:t.left-i.left-e.marginLeft,top:t.top-i.top-e.marginTop,right:i.right-t.right-e.marginRight,bottom:i.bottom-t.bottom-e.marginBottom};},i.handleEvent=s.handleEvent,i.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0;},i.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1;},i.onresize=function(){this.resize();},s.debounceMethod(o,"onresize",100),i.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout();},i.needsResizeLayout=function(){var e=n(this.element);return this.size&&e&&e.innerWidth!==this.size.innerWidth;},i.addItems=function(e){e=this._itemize(e);return e.length&&(this.items=this.items.concat(e)),e;},i.appended=function(e){e=this.addItems(e);e.length&&(this.layoutItems(e,!0),this.reveal(e));},i.prepended=function(e){var t,e=this._itemize(e);e.length&&(t=this.items.slice(0),this.items=e.concat(t),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(t));},i.reveal=function(e){var i;this._emitCompleteOnItems("reveal",e),e&&e.length&&(i=this.updateStagger(),e.forEach(function(e,t){e.stagger(t*i),e.reveal();}));},i.hide=function(e){var i;this._emitCompleteOnItems("hide",e),e&&e.length&&(i=this.updateStagger(),e.forEach(function(e,t){e.stagger(t*i),e.hide();}));},i.revealItemElements=function(e){e=this.getItems(e);this.reveal(e);},i.hideItemElements=function(e){e=this.getItems(e);this.hide(e);},i.getItem=function(e){for(var t=0;t<this.items.length;t++){var i=this.items[t];if(i.element==e)return i;}},i.getItems=function(e){e=s.makeArray(e);var t=[];return e.forEach(function(e){e=this.getItem(e);e&&t.push(e);},this),t;},i.remove=function(e){e=this.getItems(e);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(e){e.remove(),s.removeFrom(this.items,e);},this);},i.destroy=function(){var e=this.element.style,e=(e.height="",e.position="",e.width="",this.items.forEach(function(e){e.destroy();}),this.unbindResize(),this.element.outlayerGUID);delete c[e],delete this.element.outlayerGUID,l&&l.removeData(this.element,this.constructor.namespace);},o.data=function(e){e=(e=s.getQueryElement(e))&&e.outlayerGUID;return e&&c[e];},o.create=function(e,t){var i=a(o);return i.defaults=s.extend({},o.defaults),s.extend(i.defaults,t),i.compatOptions=s.extend({},o.compatOptions),i.namespace=e,i.data=o.data,i.Item=a(r),s.htmlInit(i,e),l&&l.bridget&&l.bridget(e,i),i;},{ms:1,s:1e3});return o.Item=r,o;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_7__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_8__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined;}(window,function(e){"use strict";function t(){e.Item.apply(this,arguments);}var i=t.prototype=Object.create(e.Item.prototype),s=i._create,n=(i._create=function(){this.id=this.layout.itemGUID++,s.call(this),this.sortData={};},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var e,t=this.layout.options.getSortData,i=this.layout._sorters;for(e in t){var s=i[e];this.sortData[e]=s(this.element,this);}}},i.destroy);return i.destroy=function(){n.apply(this,arguments),this.css({display:""});},t;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__,__WEBPACK_LOCAL_MODULE_7__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_9__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined;}(window,function(t,i){"use strict";function s(e){(this.isotope=e)&&(this.options=e.options[this.namespace],this.element=e.element,this.items=e.filteredItems,this.size=e.size);}var n=s.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(e){n[e]=function(){return i.prototype[e].apply(this.isotope,arguments);};}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element);return this.isotope.size&&e&&e.innerHeight!=this.isotope.size.innerHeight;},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments);},n.getColumnWidth=function(){this.getSegmentSize("column","Width");},n.getRowHeight=function(){this.getSegmentSize("row","Height");},n.getSegmentSize=function(e,t){var i,e=e+t,s="outer"+t;this._getMeasurement(e,s),this[e]||(i=this.getFirstItemSize(),this[e]=i&&i[s]||this.isotope.size["inner"+t]);},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element);},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments);},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size;},s.modes={},s.create=function(e,t){function i(){s.apply(this,arguments);}return(i.prototype=Object.create(n)).constructor=i,t&&(i.options=t),s.modes[i.prototype.namespace=e]=i;},s;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_7__,__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_10__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined;}(window,function(e,a){var e=e.create("masonry"),t=(e.compatOptions.fitWidth="isFitWidth",e.prototype);return t._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var e=0;e<this.cols;e++){this.colYs.push(0);}this.maxY=0,this.horizontalColIndex=0;},t.measureColumns=function(){this.getContainerWidth(),this.columnWidth||(e=(e=this.items[0])&&e.element,this.columnWidth=e&&a(e).outerWidth||this.containerWidth);var e=this.columnWidth+=this.gutter,t=this.containerWidth+this.gutter,i=t/e,t=e-t%e,i=Math[t&&t<1?"round":"floor"](i);this.cols=Math.max(i,1);},t.getContainerWidth=function(){var e=this._getOption("fitWidth")?this.element.parentNode:this.element,e=a(e);this.containerWidth=e&&e.innerWidth;},t._getItemLayoutPosition=function(e){e.getSize();for(var t=e.size.outerWidth%this.columnWidth,t=Math[t&&t<1?"round":"ceil"](e.size.outerWidth/this.columnWidth),t=Math.min(t,this.cols),i=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](t,e),s={x:this.columnWidth*i.col,y:i.y},n=i.y+e.size.outerHeight,r=t+i.col,o=i.col;o<r;o++){this.colYs[o]=n;}return s;},t._getTopColPosition=function(e){var e=this._getTopColGroup(e),t=Math.min.apply(Math,e);return{col:e.indexOf(t),y:t};},t._getTopColGroup=function(e){if(e<2)return this.colYs;for(var t=[],i=this.cols+1-e,s=0;s<i;s++){t[s]=this._getColGroupY(s,e);}return t;},t._getColGroupY=function(e,t){if(t<2)return this.colYs[e];e=this.colYs.slice(e,e+t);return Math.max.apply(Math,e);},t._getHorizontalColPosition=function(e,t){var i=this.horizontalColIndex%this.cols,i=1<e&&i+e>this.cols?0:i,t=t.size.outerWidth&&t.size.outerHeight;return this.horizontalColIndex=t?i+e:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,e)};},t._manageStamp=function(e){var t=a(e),e=this._getElementOffset(e),i=this._getOption("originLeft")?e.left:e.right,s=i+t.outerWidth,i=Math.floor(i/this.columnWidth),i=Math.max(0,i),n=Math.floor(s/this.columnWidth);n-=s%this.columnWidth?0:1;for(var n=Math.min(this.cols-1,n),r=(this._getOption("originTop")?e.top:e.bottom)+t.outerHeight,o=i;o<=n;o++){this.colYs[o]=Math.max(r,this.colYs[o]);}},t._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this._getOption("fitWidth")&&(e.width=this._getContainerFitWidth()),e;},t._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];){e++;}return(this.cols-e)*this.columnWidth-this.gutter;},t.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!=this.containerWidth;},e;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_9__,__WEBPACK_LOCAL_MODULE_10__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_11__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined;}(window,function(e,t){"use strict";var i,e=e.create("masonry"),s=e.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(i in t.prototype){n[i]||(s[i]=t.prototype[i]);}var r=s.measureColumns,o=(s.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this);},s._getOption);return s._getOption=function(e){return"fitWidth"==e?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:o.apply(this.isotope,arguments);},e;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_9__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_12__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined;}(window,function(e){"use strict";var e=e.create("fitRows"),t=e.prototype;return t._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth");},t._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter,i=(0!==this.x&&t+this.x>i&&(this.x=0,this.y=this.maxY),{x:this.x,y:this.y});return this.maxY=Math.max(this.maxY,this.y+e.size.outerHeight),this.x+=t,i;},t._getContainerSize=function(){return{height:this.maxY};},e;}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_9__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_13__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined;}(window,function(e){"use strict";var e=e.create("vertical",{horizontalAlignment:0}),t=e.prototype;return t._resetLayout=function(){this.y=0;},t._getItemLayoutPosition=function(e){e.getSize();var t=(this.isotope.size.innerWidth-e.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=e.size.outerHeight,{x:t,y:i};},t._getContainerSize=function(){return{height:this.y};},e;}),function(o,a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_7__,__WEBPACK_LOCAL_MODULE_3__,__WEBPACK_LOCAL_MODULE_4__,__WEBPACK_LOCAL_MODULE_5__,__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_9__,__WEBPACK_LOCAL_MODULE_11__,__WEBPACK_LOCAL_MODULE_12__,__WEBPACK_LOCAL_MODULE_13__], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,s,n,r){return a(o,e,0,i,s,n,r);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(window,function(e,i,d,s,r,t,n){var o=e.jQuery,a=String.prototype.trim?function(e){return e.trim();}:function(e){return e.replace(/^\s+|\s+$/g,"");},l=i.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0}),e=(l.Item=t,l.LayoutMode=n,l.prototype),c=(e._create=function(){for(var e in this.itemGUID=0,this._sorters={},this._getSorters(),i.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],n.modes){this._initLayoutMode(e);}},e.reloadItems=function(){this.itemGUID=0,i.prototype.reloadItems.call(this);},e._itemize=function(){for(var e=i.prototype._itemize.apply(this,arguments),t=0;t<e.length;t++){e[t].id=this.itemGUID++;}return this._updateItemsSortData(e),e;},e._initLayoutMode=function(e){var t=n.modes[e],i=this.options[e]||{};this.options[e]=t.options?r.extend(t.options,i):i,this.modes[e]=new t(this);},e.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout();},e._layout=function(){var e=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,e),this._isLayoutInited=!0;},e.arrange=function(e){this.option(e),this._getIsInstant();e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout();},e._init=e.arrange,e._hideReveal=function(e){this.reveal(e.needReveal),this.hide(e.needHide);},e._getIsInstant=function(){var e=this._getOption("layoutInstant"),e=void 0!==e?e:!this._isLayoutInited;return this._isInstant=e;},e._bindArrangeComplete=function(){function e(){t&&i&&s&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems]);}var t,i,s,n=this;this.once("layoutComplete",function(){t=!0,e();}),this.once("hideComplete",function(){i=!0,e();}),this.once("revealComplete",function(){s=!0,e();});},e._filter=function(e){for(var t=this.options.filter,i=[],s=[],n=[],r=this._getFilterTest(t||"*"),o=0;o<e.length;o++){var a,l=e[o];l.isIgnored||((a=r(l))&&i.push(l),a&&l.isHidden?s.push(l):a||l.isHidden||n.push(l));}return{matches:i,needReveal:s,needHide:n};},e._getFilterTest=function(t){return o&&this.options.isJQueryFiltering?function(e){return o(e.element).is(t);}:"function"==typeof t?function(e){return t(e.element);}:function(e){return s(e.element,t);};},e.updateSortData=function(e){e=e?(e=r.makeArray(e),this.getItems(e)):this.items;this._getSorters(),this._updateItemsSortData(e);},e._getSorters=function(){var e,t=this.options.getSortData;for(e in t){var i=t[e];this._sorters[e]=c(i);}},e._updateItemsSortData=function(e){for(var t=e&&e.length,i=0;t&&i<t;i++){e[i].updateSortData();}},function(e){if("string"!=typeof e)return e;var t,i,s=(e=a(e).split(" "))[0],n=(n=s.match(/^\[(.+)\]$/))&&n[1],r=(i=s,(t=n)?function(e){return e.getAttribute(t);}:function(e){e=e.querySelector(i);return e&&e.textContent;}),o=l.sortDataParsers[e[1]];return o?function(e){return e&&o(r(e));}:function(e){return e&&r(e);};}),u=(l.sortDataParsers={parseInt:function(_parseInt){function parseInt(_x){return _parseInt.apply(this,arguments);}parseInt.toString=function(){return _parseInt.toString();};return parseInt;}(function(e){return parseInt(e,10);}),parseFloat:function(_parseFloat){function parseFloat(_x2){return _parseFloat.apply(this,arguments);}parseFloat.toString=function(){return _parseFloat.toString();};return parseFloat;}(function(e){return parseFloat(e);})},e._sort=function(){var e,o,a;this.options.sortBy&&(e=r.makeArray(this.options.sortBy),this._getIsSameSortBy(e)||(this.sortHistory=e.concat(this.sortHistory)),o=this.sortHistory,a=this.options.sortAscending,this.filteredItems.sort(function(e,t){for(var i=0;i<o.length;i++){var s=o[i],n=e.sortData[s],r=t.sortData[s];if(r<n||n<r)return(r<n?1:-1)*((void 0!==a[s]?a[s]:a)?1:-1);}return 0;}));},e._getIsSameSortBy=function(e){for(var t=0;t<e.length;t++){if(e[t]!=this.sortHistory[t])return!1;}return!0;},e._mode=function(){var e=this.options.layoutMode,t=this.modes[e];if(!t)throw new Error("No layout mode: "+e);return t.options=this.options[e],t;},e._resetLayout=function(){i.prototype._resetLayout.call(this),this._mode()._resetLayout();},e._getItemLayoutPosition=function(e){return this._mode()._getItemLayoutPosition(e);},e._manageStamp=function(e){this._mode()._manageStamp(e);},e._getContainerSize=function(){return this._mode()._getContainerSize();},e.needsResizeLayout=function(){return this._mode().needsResizeLayout();},e.appended=function(e){var e=this.addItems(e);e.length&&(e=this._filterRevealAdded(e),this.filteredItems=this.filteredItems.concat(e));},e.prepended=function(e){var t,e=this._itemize(e);e.length&&(this._resetLayout(),this._manageStamps(),t=this._filterRevealAdded(e),this.layoutItems(this.filteredItems),this.filteredItems=t.concat(this.filteredItems),this.items=e.concat(this.items));},e._filterRevealAdded=function(e){e=this._filter(e);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches;},e.insert=function(e){var t=this.addItems(e);if(t.length){for(var i,s=t.length,n=0;n<s;n++){i=t[n],this.element.appendChild(i.element);}e=this._filter(t).matches;for(n=0;n<s;n++){t[n].isLayoutInstant=!0;}for(this.arrange(),n=0;n<s;n++){delete t[n].isLayoutInstant;}this.reveal(e);}},e.remove);return e.remove=function(e){e=r.makeArray(e);var t=this.getItems(e);u.call(this,e);for(var i=t&&t.length,s=0;i&&s<i;s++){var n=t[s];r.removeFrom(this.filteredItems,n);}},e.shuffle=function(){for(var e=0;e<this.items.length;e++){this.items[e].sortData.random=Math.random();}this.options.sortBy="random",this._sort(),this._layout();},e._noTransition=function(e,t){var i=this.options.transitionDuration,e=(this.options.transitionDuration=0,e.apply(this,t));return this.options.transitionDuration=i,e;},e.getFilteredItemElements=function(){return this.filteredItems.map(function(e){return e.element;});},l;});var DoubleCenterException=/*#__PURE__*/_createClass(function DoubleCenterException(){_classCallCheck(this,DoubleCenterException);window.console.error('iTooltip Error: positionX and positionY properties cannot be "center" at the same time.');});var iTooltip=/*#__PURE__*/function(){function iTooltip(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"*";_classCallCheck(this,iTooltip);this.objects=document.querySelectorAll("*"!==e?e:"*[title]");}_createClass(iTooltip,[{key:"init",value:function init(){var _this49=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(this.settings=Object.assign({className:"tooltip",indentX:10,indentY:15,positionX:"right",positionY:"bottom"},e),"center"===this.settings.positionX&&"center"===this.settings.positionY)throw new DoubleCenterException();this.objects.forEach(function(e){e.getAttribute("title")&&(e.addEventListener("mouseenter",function(e){return _this49.createTooltip(e);}),e.addEventListener("mouseleave",function(e){return _this49.removeTooltip(e);}));});}},{key:"createTooltip",value:function createTooltip(e){var _this50=this;var t=e.target;this.tooltip=document.createElement("div"),this.tooltip.classList.add(this.settings.className),this.tooltip.innerHTML=t.getAttribute("title");var i=e.target.className.split(" ").find(function(e){return e.startsWith("itooltip-");});i&&this.tooltip.classList.add(i),this.tooltip.style.position="absolute",this.changePosition(e),t.removeAttribute("title"),document.body.appendChild(this.tooltip),t.addEventListener("mousemove",function(e){return _this50.changePosition(e);});}},{key:"removeTooltip",value:function removeTooltip(e){e.target.setAttribute("title",this.tooltip.innerHTML),this.tooltip.remove();}},{key:"changePosition",value:function changePosition(e){var _this$getSizeTooltip=this.getSizeTooltip(),_this$getSizeTooltip2=_slicedToArray(_this$getSizeTooltip,2),t=_this$getSizeTooltip2[0],i=_this$getSizeTooltip2[1],s=this.getEdges(e),n=window.pageYOffset||document.documentElement.scrollTop;var r=e.pageY,o=void e.pageX;if(o="right"===this.settings.positionX?s.right<=t?e.clientX-t-this.settings.indentX:e.clientX+this.settings.indentX:"left"===this.settings.positionX?s.left<=t?s.left+this.settings.indentX:e.clientX-t-this.settings.indentX:s.left<=Math.round(t/2)?e.clientX-s.left:e.clientX-Math.round(t/2),"top"===this.settings.positionY)r=s.top<=i?n+e.clientY+this.settings.indentY:e.pageY-i-this.settings.indentY;else if("bottom"===this.settings.positionY)r=s.bottom<i&&s.top>i+this.settings.indentY?e.pageY-i-this.settings.indentY:n+e.clientY+this.settings.indentY;else{var _e22=Math.round(i/2);s.bottom<=_e22&&(_e22=Math.round(i-s.bottom)),s.top<=_e22&&(_e22=s.top),r-=_e22;}this.tooltip.style.top=r+"px",this.tooltip.style.left=o+"px";}},{key:"getSizeTooltip",value:function getSizeTooltip(){var e=this.tooltip.getBoundingClientRect();return[e.right-e.left,e.bottom-e.top];}},{key:"getEdges",value:function getEdges(e){var t=document.documentElement;return{left:e.clientX,right:t.clientWidth-e.clientX,top:e.clientY,bottom:t.clientHeight-e.clientY};}}]);return iTooltip;}();!function(){"use strict";function t(e){if(!e)throw new Error("No options passed to Waypoint constructor");if(!e.element)throw new Error("No element option passed to Waypoint constructor");if(!e.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+i,this.options=t.Adapter.extend({},t.defaults,e),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=e.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,i+=1;}var i=0,r={};t.prototype.queueTrigger=function(e){this.group.queueTrigger(this,e);},t.prototype.trigger=function(e){this.enabled&&this.callback&&this.callback.apply(this,e);},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key];},t.prototype.disable=function(){return this.enabled=!1,this;},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this;},t.prototype.next=function(){return this.group.next(this);},t.prototype.previous=function(){return this.group.previous(this);},t.invokeAll=function(e){var t,i=[];for(t in r){i.push(r[t]);}for(var s=0,n=i.length;s<n;s++){i[s][e]();}},t.destroyAll=function(){t.invokeAll("destroy");},t.disableAll=function(){t.invokeAll("disable");},t.enableAll=function(){for(var e in t.Context.refreshAll(),r){r[e].enabled=!0;}return this;},t.refreshAll=function(){t.Context.refreshAll();},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight;},t.viewportWidth=function(){return document.documentElement.clientWidth;},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function bottomInView(){return this.context.innerHeight()-this.adapter.outerHeight();},"right-in-view":function rightInView(){return this.context.innerWidth()-this.adapter.outerWidth();}},window.Waypoint=t;}(),function(){"use strict";function t(e){window.setTimeout(e,1e3/60);}function i(e){this.element=e,this.Adapter=p.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+s,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,n[e.waypointContextKey]=this,s+=1,p.windowContext||(p.windowContext=!0,p.windowContext=new i(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler();}var s=0,n={},p=window.Waypoint,e=window.onload;i.prototype.add=function(e){var t=e.options.horizontal?"horizontal":"vertical";this.waypoints[t][e.key]=e,this.refresh();},i.prototype.checkEmpty=function(){var e=this.Adapter.isEmptyObject(this.waypoints.horizontal),t=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;e&&t&&!i&&(this.adapter.off(".waypoints"),delete n[this.key]);},i.prototype.createThrottledResizeHandler=function(){function e(){t.handleResize(),t.didResize=!1;}var t=this;this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,p.requestAnimationFrame(e));});},i.prototype.createThrottledScrollHandler=function(){function e(){t.handleScroll(),t.didScroll=!1;}var t=this;this.adapter.on("scroll.waypoints",function(){t.didScroll&&!p.isTouch||(t.didScroll=!0,p.requestAnimationFrame(e));});},i.prototype.handleResize=function(){p.Context.refreshAll();},i.prototype.handleScroll=function(){var e,t,i={},s={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(e in s){var n,r=s[e],o=r.newScroll>r.oldScroll?r.forward:r.backward;for(n in this.waypoints[e]){var a,l,c=this.waypoints[e][n];null!==c.triggerPoint&&(a=r.oldScroll<c.triggerPoint,l=r.newScroll>=c.triggerPoint,(a&&l||!a&&!l)&&(c.queueTrigger(o),i[c.group.id]=c.group));}}for(t in i){i[t].flushTriggers();}this.oldScroll={x:s.horizontal.newScroll,y:s.vertical.newScroll};},i.prototype.innerHeight=function(){return this.element==this.element.window?p.viewportHeight():this.adapter.innerHeight();},i.prototype.remove=function(e){delete this.waypoints[e.axis][e.key],this.checkEmpty();},i.prototype.innerWidth=function(){return this.element==this.element.window?p.viewportWidth():this.adapter.innerWidth();},i.prototype.destroy=function(){var e,t=[];for(e in this.waypoints){for(var i in this.waypoints[e]){t.push(this.waypoints[e][i]);}}for(var s=0,n=t.length;s<n;s++){t[s].destroy();}},i.prototype.refresh=function(){var e,t,i=this.element==this.element.window,d=i?void 0:this.adapter.offset(),s={};for(t in this.handleScroll(),e={horizontal:{contextOffset:i?0:d.left,contextScroll:i?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:i?0:d.top,contextScroll:i?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var u,n=e[t];for(u in this.waypoints[t]){var r,o=this.waypoints[t][u],a=o.options.offset,h=o.triggerPoint,l=0,c=null==h;o.element!==o.element.window&&(l=o.adapter.offset()[n.offsetProp]),"function"==typeof a?a=a.apply(o):"string"==typeof a&&(a=parseFloat(a),-1<o.options.offset.indexOf("%")&&(a=Math.ceil(n.contextDimension*a/100))),r=n.contextScroll-n.contextOffset,o.triggerPoint=Math.floor(l+r-a),l=h<n.oldScroll,r=o.triggerPoint>=n.oldScroll,a=!l&&!r,!c&&l&&r?(o.queueTrigger(n.backward),s[o.group.id]=o.group):(!c&&a||c&&n.oldScroll>=o.triggerPoint)&&(o.queueTrigger(n.forward),s[o.group.id]=o.group);}}return p.requestAnimationFrame(function(){for(var e in s){s[e].flushTriggers();}}),this;},i.findOrCreateByElement=function(e){return i.findByElement(e)||new i(e);},i.refreshAll=function(){for(var e in n){n[e].refresh();}},i.findByElement=function(e){return n[e.waypointContextKey];},window.onload=function(){e&&e(),i.refreshAll();},p.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e);},p.Context=i;}(),function(){"use strict";function r(e,t){return e.triggerPoint-t.triggerPoint;}function o(e,t){return t.triggerPoint-e.triggerPoint;}function t(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this;}var i={vertical:{},horizontal:{}},s=window.Waypoint;t.prototype.add=function(e){this.waypoints.push(e);},t.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]};},t.prototype.flushTriggers=function(){for(var e in this.triggerQueues){var t=this.triggerQueues[e];t.sort("up"===e||"left"===e?o:r);for(var i=0,s=t.length;i<s;i+=1){var n=t[i];!n.options.continuous&&i!==t.length-1||n.trigger([e]);}}this.clearTriggerQueues();},t.prototype.next=function(e){this.waypoints.sort(r);e=s.Adapter.inArray(e,this.waypoints);return e===this.waypoints.length-1?null:this.waypoints[e+1];},t.prototype.previous=function(e){this.waypoints.sort(r);e=s.Adapter.inArray(e,this.waypoints);return e?this.waypoints[e-1]:null;},t.prototype.queueTrigger=function(e,t){this.triggerQueues[t].push(e);},t.prototype.remove=function(e){e=s.Adapter.inArray(e,this.waypoints);-1<e&&this.waypoints.splice(e,1);},t.prototype.first=function(){return this.waypoints[0];},t.prototype.last=function(){return this.waypoints[this.waypoints.length-1];},t.findOrCreate=function(e){return i[e.axis][e.name]||new t(e);},s.Group=t;}(),function(){"use strict";function i(e){return e===e.window;}function s(e){return i(e)?e:e.defaultView;}function e(e){this.element=e,this.handlers={};}var t=window.Waypoint;e.prototype.innerHeight=function(){return i(this.element)?this.element.innerHeight:this.element.clientHeight;},e.prototype.innerWidth=function(){return i(this.element)?this.element.innerWidth:this.element.clientWidth;},e.prototype.off=function(e,t){function i(e,t,i){for(var s=0,n=t.length-1;s<n;s++){var r=t[s];i&&i!==r||e.removeEventListener(r);}}var e=e.split("."),s=e[0],n=e[1],r=this.element;if(n&&this.handlers[n]&&s)i(r,this.handlers[n][s],t),this.handlers[n][s]=[];else if(s)for(var o in this.handlers){i(r,this.handlers[o][s]||[],t),this.handlers[o][s]=[];}else if(n&&this.handlers[n]){for(var a in this.handlers[n]){i(r,this.handlers[n][a],t);}this.handlers[n]={};}},e.prototype.offset=function(){if(!this.element.ownerDocument)return null;var e=this.element.ownerDocument.documentElement,t=s(this.element.ownerDocument),i={top:0,left:0};return{top:(i=this.element.getBoundingClientRect?this.element.getBoundingClientRect():i).top+t.pageYOffset-e.clientTop,left:i.left+t.pageXOffset-e.clientLeft};},e.prototype.on=function(e,t){var e=e.split("."),i=e[0],e=e[1]||"__default",e=this.handlers[e]=this.handlers[e]||{};(e[i]=e[i]||[]).push(t),this.element.addEventListener(i,t);},e.prototype.outerHeight=function(e){var t=this.innerHeight();return e&&!i(this.element)&&(e=window.getComputedStyle(this.element),t=(t+=parseInt(e.marginTop,10))+parseInt(e.marginBottom,10)),t;},e.prototype.outerWidth=function(e){var t=this.innerWidth();return e&&!i(this.element)&&(e=window.getComputedStyle(this.element),t=(t+=parseInt(e.marginLeft,10))+parseInt(e.marginRight,10)),t;},e.prototype.scrollLeft=function(){var e=s(this.element);return e?e.pageXOffset:this.element.scrollLeft;},e.prototype.scrollTop=function(){var e=s(this.element);return e?e.pageYOffset:this.element.scrollTop;},e.extend=function(){for(var e=Array.prototype.slice.call(arguments),t=1,i=e.length;t<i;t++){s=void 0;n=void 0;r=void 0;var s=e[0];var n=e[t];if("object"==_typeof(s)&&"object"==_typeof(n))for(var r in n){n.hasOwnProperty(r)&&(s[r]=n[r]);}}return e[0];},e.inArray=function(e,t,i){return null==t?-1:t.indexOf(e,i);},e.isEmptyObject=function(e){for(var t in e){return!1;}return!0;},t.adapters.push({name:"noframework",Adapter:e}),t.Adapter=e;}(),function(e){var t,n,i,s,r=navigator.userAgent;function o(){clearTimeout(t),t=setTimeout(i,99);}function a(){o(),s&&s.addListener&&s.addListener(o);}e.HTMLPictureElement&&/ecko/.test(r)&&r.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),i=function i(){for(var e=document.querySelectorAll("picture > img, img[srcset][sizes]"),t=0;t<e.length;t++){!function(e){var t,i,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t);})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=i;}));}(e[t]);}},s=e.matchMedia&&matchMedia("(orientation: landscape)"),n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),o));}(window),function(e,r){"use strict";function m(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e;}function x(e,t){return e.res-t.res;}function T(e,t){var i,s,n;if(e&&t)for(n=w.parseSet(t),e=w.makeUrl(e),i=0;i<n.length;i++){if(e===w.makeUrl(n[i].url)){s=n[i];break;}}return s;}function c(t,d){function e(e){var e=e.exec(t.substring(o));return e?(e=e[0],o+=e.length,e):void 0;}function i(){for(var e,t,i,s,n,r,o,a=!1,l={},c=0;c<h.length;c++){s=(n=h[c])[n.length-1],n=n.substring(0,n.length-1),r=parseInt(n,10),o=parseFloat(n),se.test(n)&&"w"===s?((e||t)&&(a=!0),0===r?a=!0:e=r):ne.test(n)&&"x"===s?((e||t||i)&&(a=!0),o<0?a=!0:t=o):se.test(n)&&"h"===s?((i||t)&&(a=!0),0===r?a=!0:i=r):a=!0;}a||(l.url=u,e&&(l.w=e),t&&(l.d=t),i&&(l.h=i),i||t||e||(l.d=1),1===l.d&&(d.has1x=!0),l.set=d,p.push(l));}for(var u,h,s,n,r,a=t.length,o=0,p=[];;){if(e(ee),a<=o)return p;u=e(te),h=[],","===u.slice(-1)?(u=u.replace(ie,""),i()):function(){for(e(J),s="",n="in descriptor";;){if(r=t.charAt(o),"in descriptor"===n){if(m(r))s&&(h.push(s),s="",n="after descriptor");else{if(","===r)return o+=1,s&&h.push(s),i();if("("===r)s+=r,n="in parens";else{if(""===r)return s&&h.push(s),i();s+=r;}}}else if("in parens"===n){if(")"===r)s+=r,n="in descriptor";else{if(""===r)return h.push(s),i();s+=r;}}else if("after descriptor"===n&&!m(r)){if(""===r)return i();n="in descriptor",--o;}o+=1;}}();}}function d(e){for(var t,i,s,n=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,r=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i,o=function(e){function t(){n&&(r.push(n),n="");}function i(){r[0]&&(o.push(r),r=[]);}for(var s,n="",r=[],o=[],a=0,l=0,c=!1;;){if(""===(s=e.charAt(l)))return t(),i(),o;if(c)"*"!==s||"/"!==e[l+1]?l+=1:(c=!1,l+=2,t());else{if(m(s)){if(e.charAt(l-1)&&m(e.charAt(l-1))||!n){l+=1;continue;}if(0===a){t(),l+=1;continue;}s=" ";}else if("("===s)a+=1;else if(")"===s)--a;else{if(","===s){t(),i(),l+=1;continue;}if("/"===s&&"*"===e.charAt(l+1)){c=!0,l+=2;continue;}}n+=s,l+=1;}}}(e),a=o.length,l=0;l<a;l++){if(i=(t=o[l])[t.length-1],s=i,n.test(s)&&0<=parseFloat(s)||r.test(s)||"0"===s||"-0"===s||"+0"===s){if(s=i,t.pop(),0===t.length)return s;if(t=t.join(" "),w.matchesMedia(t))return s;}}return"100vw";}r.createElement("picture");function u(){}function h(e,t,i,s){e.addEventListener?e.addEventListener(t,i,s||!1):e.attachEvent&&e.attachEvent("on"+t,i);}function p(t){var i={};return function(e){return e in i||(i[e]=t(e)),i[e];};}function E(e,t){return e.w?(e.cWidth=w.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e;}var f,g,v,y,b,_,S,C,k,A,M,P,O,t,I,L,w={},$=!1,i=r.createElement("img"),z=i.getAttribute,N=i.setAttribute,D=i.removeAttribute,n=r.documentElement,s={},j={algorithm:""},F="data-pfsrc",H=F+"set",o=navigator.userAgent,q=/rident/.test(o)||/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&35<RegExp.$1,B="currentSrc",R=/\s+\+?\d+(e\d+)?w/,W=/(\([^)]+\))?\s*(.+)/,Y=e.picturefillCFG,X="font-size:100%!important;",V=!0,G={},U={},Q=e.devicePixelRatio,a={px:1,"in":96},K=r.createElement("a"),Z=!1,J=/^[ \t\n\r\u000c]+/,ee=/^[, \t\n\r\u000c]+/,te=/^[^ \t\n\r\u000c]+/,ie=/[,]+$/,se=/^\d+$/,ne=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,re=(y=/^([\d\.]+)(em|vw|px)$/,b=p(function(e){return"return "+function(){for(var e=arguments,t=0,i=e[0];(++t in e);){i=i.replace(e[t],e[++t]);}return i;}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";";}),function(e,t){var i;if(!(e in G))if(G[e]=!1,t&&(i=e.match(y)))G[e]=i[1]*a[i[2]];else try{G[e]=new Function("e",b(e))(a);}catch(e){}return G[e];}),l=function l(e){if($){var t,i,s,n=e||{};if(n.elements&&1===n.elements.nodeType&&("IMG"===n.elements.nodeName.toUpperCase()?n.elements=[n.elements]:(n.context=n.elements,n.elements=null)),s=(t=n.elements||w.qsa(n.context||r,n.reevaluate||n.reselect?w.sel:w.selShort)).length){for(w.setupRun(n),Z=!0,i=0;i<s;i++){w.fillImg(t[i],n);}w.teardownRun(n);}}};function oe(){var e=r.readyState||"";P=setTimeout(oe,"loading"===e?200:999),r.body&&(w.fillImgs(),(_=_||M.test(e))&&clearTimeout(P));}function ae(){var e=new Date()-A;e<C?k=setTimeout(ae,C-e):(k=null,S());}function le(){2===t.width&&(w.supSizes=!0),g=w.supSrcset&&!w.supSizes,$=!0,setTimeout(l);}e.console&&console.warn,B in i||(B="src"),s["image/jpeg"]=!0,s["image/gif"]=!0,s["image/png"]=!0,s["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),w.ns=("pf"+new Date().getTime()).substr(0,9),w.supSrcset="srcset"in i,w.supSizes="sizes"in i,w.supPicture=!!e.HTMLPictureElement,w.supSrcset&&w.supPicture&&!w.supSizes&&(o=r.createElement("img"),i.srcset="data:,a",o.src="data:,a",w.supSrcset=i.complete===o.complete,w.supPicture=w.supSrcset&&w.supPicture),w.supSrcset&&!w.supSizes?(i="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",(t=r.createElement("img")).onload=le,t.onerror=le,t.setAttribute("sizes","9px"),t.srcset=i+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=i):$=!0,w.selShort="picture>img,img[srcset]",w.sel=w.selShort,w.cfg=j,w.DPR=Q||1,w.u=a,w.types=s,w.setSize=u,w.makeUrl=p(function(e){return K.href=e,K.href;}),w.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[];},w.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?w.matchesMedia=function(e){return!e||matchMedia(e).matches;}:w.matchesMedia=w.mMQ,w.matchesMedia.apply(this,arguments);},w.mMQ=function(e){return!e||re(e);},w.calcLength=function(e){e=re(e,!0)||!1;return e=e<0?!1:e;},w.supportsType=function(e){return!e||s[e];},w.parseSize=p(function(e){e=(e||"").match(W);return{media:e&&e[1],length:e&&e[2]};}),w.parseSet=function(e){return e.cands||(e.cands=c(e.srcset,e)),e.cands;},w.getEmValue=function(){var e,t,i,s;return!f&&(e=r.body)&&(t=r.createElement("div"),i=n.style.cssText,s=e.style.cssText,t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",n.style.cssText=X,e.style.cssText=X,e.appendChild(t),f=t.offsetWidth,e.removeChild(t),f=parseFloat(f,10),n.style.cssText=i,e.style.cssText=s),f||16;},w.calcListLength=function(e){var t;return e in U&&!j.uT||(t=w.calcLength(d(e)),U[e]=t||a.width),U[e];},w.setRes=function(e){if(e)for(var t,i=0,s=(t=w.parseSet(e)).length;i<s;i++){E(t[i],e.sizes);}return t;},w.setRes.res=E,w.applySetCandidate=function(e,t){if(e.length){var i,s,d,u,n,h,p=t[w.ns],m=w.DPR,f=p.curSrc||t[B],r=p.curCan||(l=t,r=f,c=e[0].set,(c=T(r,c=!c&&r?(c=l[w.ns].sets)&&c[c.length-1]:c))&&(r=w.makeUrl(r),l[w.ns].curSrc=r,(l[w.ns].curCan=c).res||E(c,c.set.sizes)),c);if(r&&r.set===e[0].set&&((h=q&&!t.complete&&r.res-.1>m)||(r.cached=!0,r.res>=m&&(n=r))),!n)for(e.sort(x),n=e[(u=e.length)-1],s=0;s<u;s++){if((i=e[s]).res>=m){n=e[d=s-1]&&(h||f!==w.makeUrl(i.url))&&(o=e[d].res,g=i.res,a=m,v=e[d].cached,b=y=void 0,v="saveData"===j.algorithm?2.7<o?a+1:(b=(g-a)*(y=Math.pow(o-.6,1.5)),v&&(b+=.1*y),o+b):1<a?Math.sqrt(o*g):o,a<v)?e[d]:i;break;}}n&&(l=w.makeUrl(n.url),p.curSrc=l,p.curCan=n,l!==f&&w.setSrc(t,n),w.setSize(t));}var o,g,a,v,y,b,l,r,c;},w.setSrc=function(e,t){e.src=t.url,"image/svg+xml"===t.set.type&&(t=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=t));},w.getSet=function(e){for(var t,i,s=!1,n=e[w.ns].sets,r=0;r<n.length&&!s;r++){if((t=n[r]).srcset&&w.matchesMedia(t.media)&&(i=w.supportsType(t.type))){s=t="pending"===i?i:t;break;}}return s;},w.parseSets=function(e,t,i){var s,n,r,o,d=t&&"PICTURE"===t.nodeName.toUpperCase(),a=e[w.ns];if(void 0!==a.src&&!i.src||(a.src=z.call(e,"src"),a.src?N.call(e,F,a.src):D.call(e,F)),void 0!==a.srcset&&!i.srcset&&w.supSrcset&&!e.srcset||(s=z.call(e,"srcset"),a.srcset=s,o=!0),a.sets=[],d){a.pic=!0;for(var u=a.sets,l,h,p=(i=t).getElementsByTagName("source"),c=0,m=p.length;c<m;c++){(l=p[c])[w.ns]=!0,(h=l.getAttribute("srcset"))&&u.push({srcset:h,media:l.getAttribute("media"),type:l.getAttribute("type"),sizes:l.getAttribute("sizes")});}}a.srcset?(n={srcset:a.srcset,sizes:z.call(e,"sizes")},a.sets.push(n),(r=(g||a.src)&&R.test(a.srcset||""))||!a.src||T(a.src,n)||n.has1x||(n.srcset+=", "+a.src,n.cands.push({url:a.src,d:1,set:n}))):a.src&&a.sets.push({srcset:a.src,sizes:null}),a.curCan=null,a.curSrc=void 0,a.supported=!(d||n&&!w.supSrcset||r&&!w.supSizes),o&&w.supSrcset&&!a.supported&&(s?(N.call(e,H,s),e.srcset=""):D.call(e,H)),a.supported&&!a.srcset&&(!a.src&&e.src||e.src!==w.makeUrl(a.src))&&(null===a.src?e.removeAttribute("src"):e.src=a.src),a.parsed=!0;},w.fillImg=function(e,t){var i,s=t.reselect||t.reevaluate;e[w.ns]||(e[w.ns]={}),i=e[w.ns],!s&&i.evaled===v||(i.parsed&&!t.reevaluate||w.parseSets(e,e.parentNode,t),i.supported?i.evaled=v:(s=e,t=w.getSet(s),i=!1,"pending"!==t&&(i=v,t&&(t=w.setRes(t),w.applySetCandidate(t,s))),s[w.ns].evaled=i));},w.setupRun=function(){Z&&!V&&Q===e.devicePixelRatio||(V=!1,Q=e.devicePixelRatio,G={},U={},w.DPR=Q||1,a.width=Math.max(e.innerWidth||0,n.clientWidth),a.height=Math.max(e.innerHeight||0,n.clientHeight),a.vw=a.width/100,a.vh=a.height/100,v=[a.height,a.width,Q].join("-"),a.em=w.getEmValue(),a.rem=a.em);},w.supPicture?(l=u,w.fillImg=u):(M=e.attachEvent?/d$|^c/:/d$|^c|^i/,P=setTimeout(oe,r.body?9:99),O=n.clientHeight,h(e,"resize",(S=function S(){V=Math.max(e.innerWidth||0,n.clientWidth)!==a.width||n.clientHeight!==O,O=n.clientHeight,V&&w.fillImgs();},C=99,function(){A=new Date(),k=k||setTimeout(ae,C);})),h(r,"readystatechange",oe)),w.picturefill=l,w.fillImgs=l,w.teardownRun=u,l._=w,e.picturefillCFG={pf:w,push:function push(e){var t=e.shift();"function"==typeof w[t]?w[t].apply(w,e):(j[t]=e[0],Z&&w.fillImgs({reselect:!0}));}};for(;Y&&Y.length;){e.picturefillCFG.push(Y.shift());}e.picturefill=l,"object"==( false?undefined:_typeof(module))&&"object"==_typeof(module.exports)?module.exports=l: true&&!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return l;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),w.supPicture||(s["image/webp"]=(I="image/webp",o="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(L=new e.Image()).onerror=function(){s[I]=!1,l();},L.onload=function(){s[I]=1===L.width,l();},L.src=o,"pending"));}(window,document),"object"==(typeof navigator==="undefined"?"undefined":_typeof(navigator))&&function(e,t){"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e;}function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s);}}function t(t,e){var i,s=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable;})),s.push.apply(s,i)),s;}function n(s){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach(function(e){var t,i;t=s,i=n[e=e],e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i;}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(n,e));});}return s;}var o={addCSS:!0,thumbWidth:15,watch:!0};function i(e){return null!=e?e.constructor:null;}function l(e){return s(e,Element);}function c(e){return s(e,Event);}function d(e){return h(e)||(m(e)||f(e)||E(e))&&!e.length||p(e)&&!Object.keys(e).length;}var s=function s(e,t){return!!(e&&t&&e instanceof t);},h=function h(e){return null==e;},p=function p(e){return i(e)===Object;},m=function m(e){return i(e)===String;},f=function f(e){return Array.isArray(e);},E=function E(e){return s(e,NodeList);},_=m,S=f,C=E;k=[{key:"setup",value:function value(i){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=null;if(d(i)||_(i)?e=Array.from(document.querySelectorAll(_(i)?i:'input[type="range"]')):l(i)?e=[i]:C(i)?e=Array.from(i):S(i)&&(e=i.filter(l)),d(e))return null;var s=n({},o,{},t);return _(i)&&s.watch&&new MutationObserver(function(e){Array.from(e).forEach(function(e){Array.from(e.addedNodes).forEach(function(e){var t;l(e)&&function(){return Array.from(document.querySelectorAll(t)).includes(this);}.call(e,t=i)&&new M(e,s);});});}).observe(document.body,{childList:!0,subtree:!0}),e.map(function(e){return new M(e,t);});}},{key:"enabled",get:function get(){return"ontouchstart"in document.documentElement;}}],e((Je=M).prototype,[{key:"init",value:function value(){M.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this);}},{key:"destroy",value:function value(){M.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null);}},{key:"listeners",value:function value(e){var t=this,i=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[i](e,function(e){return t.set(e);},!1);});}},{key:"get",value:function value(e){if(!M.enabled||!c(e))return null;var t=e.target,e=e.changedTouches[0],i=parseFloat(t.getAttribute("min"))||0,s=parseFloat(t.getAttribute("max"))||100,n=parseFloat(t.getAttribute("step"))||1,t=t.getBoundingClientRect(),r=100/t.width*(this.config.thumbWidth/2)/100;return(e=100/t.width*(e.clientX-t.left))<0?e=0:100<e&&(e=100),e<50?e-=(100-2*e)*r:50<e&&(e+=2*(e-50)*r),i+(t=e/100*(s-i),(r=n)<1?(e=(e="".concat(r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0,parseFloat(t.toFixed(e))):Math.round(t/r)*r);}},{key:"set",value:function value(e){var t;M.enabled&&c(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),t=e.target,e="touchend"===e.type?"change":"input",t&&e&&(e=new Event(e,{bubbles:!0}),t.dispatchEvent(e)));}}]),e(Je,k);var k,A=M;function M(e,t){var i=this;if(!(i instanceof M))throw new TypeError("Cannot call a class as a function");l(e)?this.element=e:_(e)&&(this.element=document.querySelector(e)),l(this.element)&&d(this.element.rangeTouch)&&(this.config=n({},o,{},t),this.init());}var P=function P(e){return null!=e?e.constructor:null;},O=function O(e,t){return Boolean(e&&t&&e instanceof t);},I=function I(e){return null==e;},L=function L(e){return P(e)===Object;},$=function $(e){return P(e)===String;},z=function z(e){return P(e)===Function;},N=function N(e){return Array.isArray(e);},D=function D(e){return O(e,NodeList);},j=function j(e){return I(e)||($(e)||N(e)||D(e))&&!e.length||L(e)&&!Object.keys(e).length;};var F=I,H=L,q=function q(e){return P(e)===Number&&!Number.isNaN(e);},B=$,R=function R(e){return P(e)===Boolean;},W=z,Y=N,X=D,g=function g(e){return null!==e&&"object"==_typeof(e)&&1===e.nodeType&&"object"==_typeof(e.style)&&"object"==_typeof(e.ownerDocument);},V=function V(e){return O(e,Event);},G=function G(e){return O(e,KeyboardEvent);},U=function U(e){return O(e,TextTrack)||!I(e)&&$(e.kind);},Q=function Q(e){if(O(e,window.URL))return!0;if(!$(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://"+e);try{return!j(new URL(t).hostname);}catch(e){return!1;}},v=j;var K=function(){var t=document.createElement("span"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i=Object.keys(e).find(function(e){return void 0!==t.style[e];});return!!B(i)&&e[i];}();function Z(e,t){setTimeout(function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1;}catch(e){}},t);}var J={isIE:Boolean(window.document.documentMode),isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints||/(iPad|iPhone|iPod)/gi.test(navigator.platform)};function ee(e,t){return t.split(".").reduce(function(e,t){return e&&e[t];},e);}function te(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};for(var _len=arguments.length,e=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){e[_key-1]=arguments[_key];}if(!e.length)return t;var i=e.shift();return H(i)?(Object.keys(i).forEach(function(e){H(i[e])?(Object.keys(t).includes(e)||Object.assign(t,_defineProperty({},e,{})),te(t[e],i[e])):Object.assign(t,_defineProperty({},e,i[e]));}),te.apply(void 0,[t].concat(e))):t;}function ie(e,r){e=e.length?e:[e];Array.from(e).reverse().forEach(function(e,t){var i=0<t?r.cloneNode(!0):r,s=e.parentNode,n=e.nextSibling;i.appendChild(e),n?s.insertBefore(i,n):s.appendChild(i);});}function se(i,e){g(i)&&!v(e)&&Object.entries(e).filter(function(_ref12){var _ref13=_slicedToArray(_ref12,2),e=_ref13[1];return!F(e);}).forEach(function(_ref14){var _ref15=_slicedToArray(_ref14,2),e=_ref15[0],t=_ref15[1];return i.setAttribute(e,t);});}function y(e,t,i){var s=document.createElement(e);return H(t)&&se(s,t),B(i)&&(s.innerText=i),s;}function ne(e,t,i,s){g(t)&&t.appendChild(y(e,i,s));}function re(e){X(e)||Y(e)?Array.from(e).forEach(re):g(e)&&g(e.parentNode)&&e.parentNode.removeChild(e);}function oe(t){if(g(t)){var _e23=t.childNodes["length"];for(;0<_e23;){t.removeChild(t.lastChild),--_e23;}}}function ae(e,t){return g(t)&&g(t.parentNode)&&g(e)?(t.parentNode.replaceChild(e,t),e):null;}function le(e,t){if(!B(e)||v(e))return{};var o={},a=te({},t);return e.split(",").forEach(function(e){var t=e.trim(),i=t.replace(".",""),s=t.replace(/[[\]]/g,"").split("="),_s8=_slicedToArray(s,1),n=_s8[0],r=1<s.length?s[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":B(a["class"])?o["class"]=a["class"]+" "+i:o["class"]=i;break;case"#":o.id=t.replace("#","");break;case"[":o[n]=r;}}),te(a,o);}function ce(t,i){if(g(t)){var _e24=i;R(_e24)||(_e24=!t.hidden),t.hidden=_e24;}}function a(t,i,s){if(X(t))return Array.from(t).map(function(e){return a(e,i,s);});if(g(t)){var _e25=void 0!==s?s?"add":"remove":"toggle";return t.classList[_e25](i),t.classList.contains(i);}return!1;}function de(e,t){return g(e)&&e.classList.contains(t);}function ue(e,t){var i=Element["prototype"];return(i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(){return Array.from(document.querySelectorAll(t)).includes(this);}).call(e,t);}function he(e){return this.elements.container.querySelectorAll(e);}function pe(e){return this.elements.container.querySelector(e);}function me(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;g(e)&&(e.focus({preventScroll:!0}),t&&a(e,this.config.classNames.tabFocus));}var fe={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},ge={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function check(e,t,i){i=J.isIPhone&&i&&ge.playsinline,t=ge[e]||"html5"!==t;return{api:t,ui:t&&ge.rangeInput&&("video"!==e||!J.isIPhone||i)};},pip:!(J.isIPhone||!W(y("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||y("video").disablePictureInPicture)),airplay:W(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function mime(e){if(v(e))return!1;var _e$split=e.split("/"),_e$split2=_slicedToArray(_e$split,1),t=_e$split2[0];var i=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(fe).includes(i)&&(i+="; codecs=\"".concat(fe[e],"\""));try{return Boolean(i&&this.media.canPlayType(i).replace(/no/,""));}catch(e){return!1;}},textTracks:"textTracks"in document.createElement("video"),rangeInput:function(){var e=document.createElement("input");return(e.type="range")===e.type;}(),touch:"ontouchstart"in document.documentElement,transitions:!1!==K,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},ve=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function get(){return e=!0,null;}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t);}catch(e){}return e;}();function ye(i,e,s){var _this51=this;var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!1;var r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!0;var o=arguments.length>5&&arguments[5]!==undefined?arguments[5]:!1;if(i&&"addEventListener"in i&&!v(e)&&W(s)){var _a2=e.split(" ");var _t22=o;ve&&(_t22={passive:r,capture:o}),_a2.forEach(function(e){_this51&&_this51.eventListeners&&n&&_this51.eventListeners.push({element:i,type:e,callback:s,options:_t22}),i[n?"addEventListener":"removeEventListener"](e,s,_t22);});}}function u(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var i=arguments.length>2?arguments[2]:undefined;var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!0;var n=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;ye.call(this,e,t,i,!0,s,n);}function be(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var i=arguments.length>2?arguments[2]:undefined;var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!0;var n=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;ye.call(this,e,t,i,!1,s,n);}function we(t){var _this52=this;var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var s=arguments.length>2?arguments[2]:undefined;var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!0;var r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;var o=function o(){for(var _len2=arguments.length,e=new Array(_len2),_key2=0;_key2<_len2;_key2++){e[_key2]=arguments[_key2];}be(t,i,o,n,r),s.apply(_this52,e);};ye.call(this,t,i,o,!0,n,r);}function b(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};g(e)&&!v(t)&&(t=new CustomEvent(t,{bubbles:i,detail:_objectSpread(_objectSpread({},s),{},{plyr:this})}),e.dispatchEvent(t));}function xe(e){var t;t=e,O(t,Promise)&&z(t.then)&&e.then(null,function(){});}function Te(i){return Y(i)?i.filter(function(e,t){return i.indexOf(e)===t;}):i;}function Ee(e,i){return Y(e)&&e.length?e.reduce(function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e;}):null;}function _e(e){return!(!window||!window.CSS)&&window.CSS.supports(e);}var Se=[[1,1],[4,3],[3,4],[5,4],[4,5],[3,2],[2,3],[16,10],[10,16],[16,9],[9,16],[21,9],[9,21],[32,9],[9,32]].reduce(function(e,_ref16){var _ref17=_slicedToArray(_ref16,2),t=_ref17[0],i=_ref17[1];return _objectSpread(_objectSpread({},e),{},_defineProperty({},t/i,[t,i]));},{});function Ce(e){return(Y(e)||B(e)&&e.includes(":"))&&(Y(e)?e:e.split(":")).map(Number).every(q);}function ke(e){if(!Y(e)||!e.every(q))return null;var _e26=_slicedToArray(e,2),t=_e26[0],i=_e26[1],s=function s(e,t){return 0===t?e:s(t,e%t);},n=s(t,i);return[t/n,i/n];}function Ae(e){var _this$embed;var t=function t(e){return Ce(e)?e.split(":").map(Number):null;};var i=t(e);if(null===i&&(i=t(this.config.ratio)),null===i&&!v(this.embed)&&Y(this.embed.ratio)&&(_this$embed=this.embed,i=_this$embed.ratio,_this$embed),null===i&&this.isHTML5){var _this$media=this.media,_e27=_this$media.videoWidth,_t23=_this$media.videoHeight;i=[_e27,_t23];}return ke(i);}function Me(e){if(!this.isVideo)return{};var t=this.elements["wrapper"],i=Ae.call(this,e);if(!Y(i))return{};var _ke=ke(i),_ke2=_slicedToArray(_ke,2),e=_ke2[0],s=_ke2[1],n=100/e*s;if(_e("aspect-ratio: ".concat(e,"/")+s)?t.style.aspectRatio=e+"/"+s:t.style.paddingBottom=n+"%",this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){var _e28=100/this.media.offsetWidth*parseInt(window.getComputedStyle(this.media).paddingBottom,10),_i10=(_e28-n)/(_e28/50);this.fullscreen.active?t.style.paddingBottom=null:this.media.style.transform="translateY(-".concat(_i10,"%)");}else this.isHTML5&&t.classList.add(this.config.classNames.videoFixedRatio);return{padding:n,ratio:i};}function Pe(e,t){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:.05;var s=e/t,n=Ee(Object.keys(Se),s);return Math.abs(n-s)<=i?Se[n]:[e,t];}var Oe={getSources:function getSources(){var _this53=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(function(e){e=e.getAttribute("type");return!!v(e)||ge.mime.call(_this53,e);}):[];},getQualityOptions:function getQualityOptions(){return this.config.quality.forced?this.config.quality.options:Oe.getSources.call(this).map(function(e){return Number(e.getAttribute("size"));}).filter(Boolean);},setup:function setup(){if(this.isHTML5){var _a3=this;_a3.options.speed=_a3.config.speed.options,v(this.config.ratio)||Me.call(_a3),Object.defineProperty(_a3.media,"quality",{get:function get(){var e=Oe.getSources.call(_a3).find(function(e){return e.getAttribute("src")===_a3.source;});return e&&Number(e.getAttribute("size"));},set:function set(t){if(_a3.quality!==t){if(_a3.config.quality.forced&&W(_a3.config.quality.onChange))_a3.config.quality.onChange(t);else{var _e29=Oe.getSources.call(_a3).find(function(e){return Number(e.getAttribute("size"))===t;});if(!_e29)return;var _a3$media=_a3.media,_i11=_a3$media.currentTime,_s9=_a3$media.paused,_n6=_a3$media.preload,_r6=_a3$media.readyState,_o2=_a3$media.playbackRate;_a3.media.src=_e29.getAttribute("src"),"none"===_n6&&!_r6||(_a3.once("loadedmetadata",function(){_a3.speed=_o2,_a3.currentTime=_i11,_s9||xe(_a3.play());}),_a3.media.load());}b.call(_a3,_a3.media,"qualitychange",!1,{quality:t});}}});}},cancelRequests:function cancelRequests(){this.isHTML5&&(re(Oe.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"));}};function Ie(e){for(var _len3=arguments.length,i=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){i[_key3-1]=arguments[_key3];}return v(e)?e:e.toString().replace(/{(\d+)}/g,function(e,t){return i[t].toString();});}var Le=function Le(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),i.toString());},$e=function $e(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return e.toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();});};function ze(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML;}var Ne={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},De={get:function get(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(v(e)||v(t))return"";var i=ee(t.i18n,e);if(v(i))return Object.keys(Ne).includes(e)?Ne[e]:"";e={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(e).forEach(function(_ref18){var _ref19=_slicedToArray(_ref18,2),e=_ref19[0],t=_ref19[1];i=Le(i,e,t);}),i;}};var je=/*#__PURE__*/function(){function je(e){var _this54=this;_classCallCheck(this,je);r(this,"get",function(e){if(!je.supported||!_this54.enabled)return null;var t=window.localStorage.getItem(_this54.key);if(v(t))return null;t=JSON.parse(t);return B(e)&&e.length?t[e]:t;}),r(this,"set",function(t){if(je.supported&&_this54.enabled&&H(t)){var _e30=_this54.get();v(_e30)&&(_e30={}),te(_e30,t),window.localStorage.setItem(_this54.key,JSON.stringify(_e30));}}),this.enabled=e.config.storage.enabled,this.key=e.config.storage.key;}_createClass(je,null,[{key:"supported",get:function get(){try{if(!("localStorage"in window))return!1;var e="___test";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0;}catch(e){return!1;}}}]);return je;}();function Fe(e){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"text";return new Promise(function(t,i){try{var _i12=new XMLHttpRequest();if(!("withCredentials"in _i12))return;_i12.addEventListener("load",function(){if("text"===s)try{t(JSON.parse(_i12.responseText));}catch(e){t(_i12.responseText);}else t(_i12.response);}),_i12.addEventListener("error",function(){throw new Error(_i12.status);}),_i12.open("GET",e,!0),_i12.responseType=s,_i12.send();}catch(e){i(e);}});}function He(e,t){if(B(e)){var _i13=B(t);var _s10=function _s10(){return null!==document.getElementById(t);},_n7=function _n7(e,t){e.innerHTML=t,_i13&&_s10()||document.body.insertAdjacentElement("afterbegin",e);};if(!_i13||!_s10()){var _s11=je.supported,_r7=document.createElement("div");if(_r7.setAttribute("hidden",""),_i13&&_r7.setAttribute("id",t),_s11){var _e31=window.localStorage.getItem("cache-"+t);if(null!==_e31){var _t24=JSON.parse(_e31);_n7(_r7,_t24.content);}}Fe(e).then(function(e){v(e)||(_s11&&window.localStorage.setItem("cache-"+t,JSON.stringify({content:e})),_n7(_r7,e));})["catch"](function(){});}}}var qe=function qe(e){return Math.trunc(e/60/60%60,10);};function Be(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;if(!q(e))return Be(void 0,t,i);var s=function s(e){return("0"+e).slice(-2);};var n=qe(e);var r=Math.trunc(e/60%60,10),o=Math.trunc(e%60,10);return n=t||0<n?n+":":"",(i&&0<e?"-":"")+n+s(r)+":"+s(o);}var w={getIconUrl:function getIconUrl(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||J.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e};},findElements:function findElements(){try{return this.elements.controls=pe.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:he.call(this,this.config.selectors.buttons.play),pause:pe.call(this,this.config.selectors.buttons.pause),restart:pe.call(this,this.config.selectors.buttons.restart),rewind:pe.call(this,this.config.selectors.buttons.rewind),fastForward:pe.call(this,this.config.selectors.buttons.fastForward),mute:pe.call(this,this.config.selectors.buttons.mute),pip:pe.call(this,this.config.selectors.buttons.pip),airplay:pe.call(this,this.config.selectors.buttons.airplay),settings:pe.call(this,this.config.selectors.buttons.settings),captions:pe.call(this,this.config.selectors.buttons.captions),fullscreen:pe.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=pe.call(this,this.config.selectors.progress),this.elements.inputs={seek:pe.call(this,this.config.selectors.inputs.seek),volume:pe.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:pe.call(this,this.config.selectors.display.buffer),currentTime:pe.call(this,this.config.selectors.display.currentTime),duration:pe.call(this,this.config.selectors.display.duration)},g(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector("."+this.config.classNames.tooltip)),!0;}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1;}},createIcon:function createIcon(e,t){var i="http://www.w3.org/2000/svg",s=w.getIconUrl.call(this),n="".concat(s.cors?"":s.url,"#")+this.config.iconPrefix,r=document.createElementNS(i,"svg"),o=(se(r,te(t,{"aria-hidden":"true",focusable:"false"})),document.createElementNS(i,"use")),a=n+"-"+e;return"href"in o&&o.setAttributeNS("http://www.w3.org/1999/xlink","href",a),o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),r.appendChild(o),r;},createLabel:function createLabel(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};e=De.get(e,this.config);return y("span",_objectSpread(_objectSpread({},t),{},{"class":[t["class"],this.config.classNames.hidden].filter(Boolean).join(" ")}),e);},createBadge:function createBadge(e){if(v(e))return null;var t=y("span",{"class":this.config.classNames.menu.value});return t.appendChild(y("span",{"class":this.config.classNames.menu.badge},e)),t;},createButton:function createButton(e,t){var _this55=this;var i=te({},t);var s=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=e.toString();return t=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";e=e.toString(),e=Le(e,"-"," ");return e=Le(e,"_"," "),e=$e(e),Le(e," ","");}(t),t.charAt(0).toLowerCase()+t.slice(1);}(e);var n={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(function(e){Object.keys(i).includes(e)&&(n[e]=i[e],delete i[e]);}),"button"!==n.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i["class"].split(" ").some(function(e){return e===_this55.config.classNames.control;})||te(i,{"class":i["class"]+" "+this.config.classNames.control}):i["class"]=this.config.classNames.control,e){case"play":n.toggle=!0,n.label="play",n.labelPressed="pause",n.icon="play",n.iconPressed="pause";break;case"mute":n.toggle=!0,n.label="mute",n.labelPressed="unmute",n.icon="volume",n.iconPressed="muted";break;case"captions":n.toggle=!0,n.label="enableCaptions",n.labelPressed="disableCaptions",n.icon="captions-off",n.iconPressed="captions-on";break;case"fullscreen":n.toggle=!0,n.label="enterFullscreen",n.labelPressed="exitFullscreen",n.icon="enter-fullscreen",n.iconPressed="exit-fullscreen";break;case"play-large":i["class"]+=" ".concat(this.config.classNames.control,"--overlaid"),s="play",n.label="play",n.icon="play";break;default:v(n.label)&&(n.label=s),v(n.icon)&&(n.icon=e);}var r=y(n.element);return n.toggle?(r.appendChild(w.createIcon.call(this,n.iconPressed,{"class":"icon--pressed"})),r.appendChild(w.createIcon.call(this,n.icon,{"class":"icon--not-pressed"})),r.appendChild(w.createLabel.call(this,n.labelPressed,{"class":"label--pressed"})),r.appendChild(w.createLabel.call(this,n.label,{"class":"label--not-pressed"}))):(r.appendChild(w.createIcon.call(this,n.icon)),r.appendChild(w.createLabel.call(this,n.label))),te(i,le(this.config.selectors.buttons[s],i)),se(r,i),"play"===s?(Y(this.elements.buttons[s])||(this.elements.buttons[s]=[]),this.elements.buttons[s].push(r)):this.elements.buttons[s]=r,r;},createRange:function createRange(e,t){t=y("input",te(le(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":De.get(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=t,w.updateRangeFill.call(this,t),A.setup(t),t;},createProgress:function createProgress(e,t){var i=y("progress",te(le(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){i.appendChild(y("span",null,"0"));var _t25={played:"played",buffer:"buffered"}[e],_s12=_t25?De.get(_t25,this.config):"";i.innerText="% "+_s12.toLowerCase();}return this.elements.display[e]=i,i;},createTime:function createTime(e,t){t=le(this.config.selectors.display[e],t),t=y("div",te(t,{"class":"".concat(t["class"]||""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":De.get(e,this.config)}),"00:00");return this.elements.display[e]=t;},bindMenuItemShortcuts:function bindMenuItemShortcuts(s,e){var _this56=this;u.call(this,s,"keydown keyup",function(t){if([32,38,39,40].includes(t.which)&&(t.preventDefault(),t.stopPropagation(),"keydown"!==t.type)){var i=ue(s,'[role="menuitemradio"]');if(!i&&[32,39].includes(t.which))w.showMenuPanel.call(_this56,e,!0);else{var _e32;32!==t.which&&(40===t.which||i&&39===t.which?(_e32=s.nextElementSibling,g(_e32)||(_e32=s.parentNode.firstElementChild)):(_e32=s.previousElementSibling,g(_e32)||(_e32=s.parentNode.lastElementChild)),me.call(_this56,_e32,!0));}}},!1),u.call(this,s,"keyup",function(e){13===e.which&&w.focusFirstMenuItem.call(_this56,null,!0);});},createMenuItem:function createMenuItem(_ref20){var _this57=this;var t=_ref20.value,e=_ref20.list,i=_ref20.type,s=_ref20.title,_ref20$badge=_ref20.badge,n=_ref20$badge===void 0?null:_ref20$badge,_ref20$checked=_ref20.checked,r=_ref20$checked===void 0?!1:_ref20$checked;var o=le(this.config.selectors.inputs[i]),a=y("button",te(o,{type:"button",role:"menuitemradio","class":(this.config.classNames.control+" "+(o["class"]||"")).trim(),"aria-checked":r,value:t})),l=y("span");l.innerHTML=s,g(n)&&l.appendChild(n),a.appendChild(l),Object.defineProperty(a,"checked",{enumerable:!0,get:function get(){return"true"===a.getAttribute("aria-checked");},set:function set(e){e&&Array.from(a.parentNode.children).filter(function(e){return ue(e,'[role="menuitemradio"]');}).forEach(function(e){return e.setAttribute("aria-checked","false");}),a.setAttribute("aria-checked",e?"true":"false");}}),this.listeners.bind(a,"click keyup",function(e){if(!G(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),a.checked=!0,i){case"language":_this57.currentTrack=Number(t);break;case"quality":_this57.quality=t;break;case"speed":_this57.speed=parseFloat(t);}w.showMenuPanel.call(_this57,"home",G(e));}},i,!1),w.bindMenuItemShortcuts.call(this,a,i),e.appendChild(a);},formatTime:function formatTime(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;return q(e)?Be(e,0<qe(this.duration),t):e;},updateTimeDisplay:function updateTimeDisplay(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;g(e)&&q(t)&&(e.innerText=w.formatTime(t,i));},updateVolume:function updateVolume(){this.supported.ui&&(g(this.elements.inputs.volume)&&w.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),g(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume));},setRange:function setRange(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;g(e)&&(e.value=t,w.updateRangeFill.call(this,e));},updateProgress:function updateProgress(e){var _this58=this;if(this.supported.ui&&V(e)){var t,i,s=function s(e,t){var i=q(t)?t:0,s=g(e)?e:_this58.elements.display.buffer;if(g(s)){s.value=i;var _e33=s.getElementsByTagName("span")[0];g(_e33)&&(_e33.childNodes[0].nodeValue=i);}};if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":t=this.currentTime,i=this.duration,t=0===t||0===i||Number.isNaN(t)||Number.isNaN(i)?0:(t/i*100).toFixed(2),"timeupdate"===e.type&&w.setRange.call(this,this.elements.inputs.seek,t);break;case"playing":case"progress":s(this.elements.display.buffer,100*this.buffered);}}},updateRangeFill:function updateRangeFill(e){var t=V(e)?e.target:e;if(g(t)&&"range"===t.getAttribute("type")){if(ue(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var _e34=w.formatTime(this.currentTime),_i14=w.formatTime(this.duration),_s13=De.get("seekLabel",this.config);t.setAttribute("aria-valuetext",_s13.replace("{currentTime}",_e34).replace("{duration}",_i14));}else if(ue(t,this.config.selectors.inputs.volume)){var _e35=100*t.value;t.setAttribute("aria-valuenow",_e35),t.setAttribute("aria-valuetext",_e35.toFixed(1)+"%");}else t.setAttribute("aria-valuenow",t.value);J.isWebkit&&t.style.setProperty("--value",t.value/t.max*100+"%");}},updateSeekTooltip:function updateSeekTooltip(t){var _this59=this;if(this.config.tooltips.seek&&g(this.elements.inputs.seek)&&g(this.elements.display.seekTooltip)&&0!==this.duration){var _s14=this.config.classNames.tooltip+"--visible",_n8=function _n8(e){return a(_this59.elements.display.seekTooltip,_s14,e);};if(this.touch)_n8(!1);else{var _e36=0;var i=this.elements.progress.getBoundingClientRect();if(V(t))_e36=100/i.width*(t.pageX-i.left);else{if(!de(this.elements.display.seekTooltip,_s14))return;_e36=parseFloat(this.elements.display.seekTooltip.style.left,10);}_e36<0?_e36=0:100<_e36&&(_e36=100),w.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*_e36),this.elements.display.seekTooltip.style.left=_e36+"%",V(t)&&["mouseenter","mouseleave"].includes(t.type)&&_n8("mouseenter"===t.type);}}},timeUpdate:function timeUpdate(e){var t=!g(this.elements.display.duration)&&this.config.invertTime;w.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||w.updateProgress.call(this,e);},durationUpdate:function durationUpdate(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return ce(this.elements.display.currentTime,!0),void ce(this.elements.progress,!0);g(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=g(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&w.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&w.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),w.updateSeekTooltip.call(this);}},toggleMenuButton:function toggleMenuButton(e,t){ce(this.elements.settings.buttons[e],!t);},updateSetting:function updateSetting(e,t,i){var s=this.elements.settings.panels[e];var n=null,r=t;if("captions"===e)n=this.currentTrack;else{if(n=v(i)?this[e]:i,v(n)&&(n=this.config[e]["default"]),!v(this.options[e])&&!this.options[e].includes(n))return void this.debug.warn("Unsupported value of '".concat(n,"' for ")+e);if(!this.config[e].options.includes(n))return void this.debug.warn("Disabled value of '".concat(n,"' for ")+e);}if(g(r)||(r=s&&s.querySelector('[role="menu"]')),g(r)){this.elements.settings.buttons[e].querySelector("."+this.config.classNames.menu.value).innerHTML=w.getLabel.call(this,e,n);var _o3=r&&r.querySelector("[value=\"".concat(n,"\"]"));g(_o3)&&(_o3.checked=!0);}},getLabel:function getLabel(e,t){switch(e){case"speed":return 1===t?De.get("normal",this.config):t+"&times;";case"quality":if(q(t)){var _e37=De.get("qualityLabel."+t,this.config);return _e37.length?_e37:t+"p";}return $e(t);case"captions":return x.getLabel.call(this);default:return null;}},setQualityMenu:function setQualityMenu(e){var _this60=this;if(g(this.elements.settings.panels.quality)){var _t26="quality",_i15=this.elements.settings.panels.quality.querySelector('[role="menu"]');Y(e)&&(this.options.quality=Te(e).filter(function(e){return _this60.config.quality.options.includes(e);}));e=!v(this.options.quality)&&1<this.options.quality.length;if(w.toggleMenuButton.call(this,_t26,e),oe(_i15),w.checkMenu.call(this),e){var _s15=function _s15(e){e=De.get("qualityBadge."+e,_this60.config);return e.length?w.createBadge.call(_this60,e):null;};this.options.quality.sort(function(e,t){var i=_this60.config.quality.options;return i.indexOf(e)>i.indexOf(t)?1:-1;}).forEach(function(e){w.createMenuItem.call(_this60,{value:e,list:_i15,type:_t26,title:w.getLabel.call(_this60,"quality",e),badge:_s15(e)});}),w.updateSetting.call(this,_t26,_i15);}}},setCaptionsMenu:function setCaptionsMenu(){var _this61=this;if(g(this.elements.settings.panels.captions)){var _i16=this.elements.settings.panels.captions.querySelector('[role="menu"]'),_e38=x.getTracks.call(this),_t27=Boolean(_e38.length);if(w.toggleMenuButton.call(this,"captions",_t27),oe(_i16),w.checkMenu.call(this),_t27){var _s16=_e38.map(function(e,t){return{value:t,checked:_this61.captions.toggled&&_this61.currentTrack===t,title:x.getLabel.call(_this61,e),badge:e.language&&w.createBadge.call(_this61,e.language.toUpperCase()),list:_i16,type:"language"};});_s16.unshift({value:-1,checked:!this.captions.toggled,title:De.get("disabled",this.config),list:_i16,type:"language"}),_s16.forEach(w.createMenuItem.bind(this)),w.updateSetting.call(this,"captions",_i16);}}},setSpeedMenu:function setSpeedMenu(){var _this62=this;if(g(this.elements.settings.panels.speed)){var _t28=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter(function(e){return e>=_this62.minimumSpeed&&e<=_this62.maximumSpeed;});var e=!v(this.options.speed)&&1<this.options.speed.length;w.toggleMenuButton.call(this,"speed",e),oe(_t28),w.checkMenu.call(this),e&&(this.options.speed.forEach(function(e){w.createMenuItem.call(_this62,{value:e,list:_t28,type:"speed",title:w.getLabel.call(_this62,"speed",e)});}),w.updateSetting.call(this,"speed",_t28));}},checkMenu:function checkMenu(){var e=this.elements.settings["buttons"],e=!v(e)&&Object.values(e).some(function(e){return!e.hidden;});ce(this.elements.settings.menu,!e);},focusFirstMenuItem:function focusFirstMenuItem(t){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;if(!this.elements.settings.popup.hidden){var _e39=t;g(_e39)||(_e39=Object.values(this.elements.settings.panels).find(function(e){return!e.hidden;}));t=_e39.querySelector('[role^="menuitem"]');me.call(this,t,i);}},toggleMenu:function toggleMenu(t){var i=this.elements.settings["popup"],s=this.elements.buttons.settings;if(g(i)&&g(s)){var _n9=i["hidden"];var _e40=_n9;if(R(t))_e40=t;else if(G(t)&&27===t.which)_e40=!1;else if(V(t)){var _n10=W(t.composedPath)?t.composedPath()[0]:t.target,_r8=i.contains(_n10);if(_r8||!_r8&&t.target!==s&&_e40)return;}s.setAttribute("aria-expanded",_e40),ce(i,!_e40),a(this.elements.container,this.config.classNames.menu.open,_e40),_e40&&G(t)?w.focusFirstMenuItem.call(this,null,!0):_e40||_n9||me.call(this,s,G(t));}},getMenuSize:function getMenuSize(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var e=t.scrollWidth,i=t.scrollHeight;return re(t),{width:e,height:i};},showMenuPanel:function showMenuPanel(){var _this63=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-")+e);if(g(i)){var _s17=i.parentNode,_n11=Array.from(_s17.children).find(function(e){return!e.hidden;});if(ge.transitions&&!ge.reducedMotion){_s17.style.width=_n11.scrollWidth+"px",_s17.style.height=_n11.scrollHeight+"px";var _e41=w.getMenuSize.call(this,i),_t29=function _t29(e){e.target===_s17&&["width","height"].includes(e.propertyName)&&(_s17.style.width="",_s17.style.height="",be.call(_this63,_s17,K,_t29));};u.call(this,_s17,K,_t29),_s17.style.width=_e41.width+"px",_s17.style.height=_e41.height+"px";}ce(_n11,!0),ce(i,!1),w.focusFirstMenuItem.call(this,i,t);}},setDownloadUrl:function setDownloadUrl(){var e=this.elements.buttons.download;g(e)&&e.setAttribute("href",this.download);},create:function create(a){var _this64=this;var l=w.bindMenuItemShortcuts,i=w.createButton,e=w.createProgress,s=w.createRange,c=w.createTime,t=w.setQualityMenu,o=w.setSpeedMenu,d=w.showMenuPanel,n=(this.elements.controls=null,Y(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large")),y("div",le(this.config.selectors.controls.wrapper))),r=(this.elements.controls=n,{"class":"plyr__controls__item"});return Te(Y(this.config.controls)?this.config.controls:[]).forEach(function(t){if("restart"===t&&n.appendChild(i.call(_this64,"restart",r)),"rewind"===t&&n.appendChild(i.call(_this64,"rewind",r)),"play"===t&&n.appendChild(i.call(_this64,"play",r)),"fast-forward"===t&&n.appendChild(i.call(_this64,"fast-forward",r)),"progress"===t){var _l4=y("div",{"class":r["class"]+" plyr__progress__container"}),_i17=y("div",le(_this64.config.selectors.progress));if(_i17.appendChild(s.call(_this64,"seek",{id:"plyr-seek-"+a.id})),_i17.appendChild(e.call(_this64,"buffer")),_this64.config.tooltips.seek){var _a4=y("span",{"class":_this64.config.classNames.tooltip},"00:00");_i17.appendChild(_a4),_this64.elements.display.seekTooltip=_a4;}_this64.elements.progress=_i17,_l4.appendChild(_this64.elements.progress),n.appendChild(_l4);}if("current-time"===t&&n.appendChild(c.call(_this64,"currentTime",r)),"duration"===t&&n.appendChild(c.call(_this64,"duration",r)),"mute"===t||"volume"===t){var _e42=_this64.elements["volume"];if(g(_e42)&&n.contains(_e42)||(_e42=y("div",te({},r,{"class":(r["class"]+" plyr__volume").trim()})),_this64.elements.volume=_e42,n.appendChild(_e42)),"mute"===t&&_e42.appendChild(i.call(_this64,"mute")),"volume"===t&&!J.isIos){var _i18={max:1,step:.05,value:_this64.config.volume};_e42.appendChild(s.call(_this64,"volume",te(_i18,{id:"plyr-volume-"+a.id})));}}if("captions"===t&&n.appendChild(i.call(_this64,"captions",r)),"settings"===t&&!v(_this64.config.settings)){var _e43=y("div",te({},r,{"class":(r["class"]+" plyr__menu").trim(),hidden:""})),_s18=(_e43.appendChild(i.call(_this64,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-"+a.id,"aria-expanded":!1})),y("div",{"class":"plyr__menu__container",id:"plyr-settings-"+a.id,hidden:""})),_c5=y("div"),_t30=y("div",{id:"plyr-settings-".concat(a.id,"-home")}),_o4=y("div",{role:"menu"});_t30.appendChild(_o4),_c5.appendChild(_t30),_this64.elements.settings.panels.home=_t30,_this64.config.settings.forEach(function(e){var t=y("button",te(le(_this64.config.selectors.buttons.settings),{type:"button","class":"".concat(_this64.config.classNames.control," ").concat(_this64.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""})),i=(l.call(_this64,t,e),u.call(_this64,t,"click",function(){d.call(_this64,e,!1);}),y("span",null,De.get(e,_this64.config))),s=y("span",{"class":_this64.config.classNames.menu.value}),n=(s.innerHTML=a[e],i.appendChild(s),t.appendChild(i),_o4.appendChild(t),y("div",{id:"plyr-settings-".concat(a.id,"-")+e,hidden:""})),r=y("button",{type:"button","class":"".concat(_this64.config.classNames.control," ").concat(_this64.config.classNames.control,"--back")});r.appendChild(y("span",{"aria-hidden":!0},De.get(e,_this64.config))),r.appendChild(y("span",{"class":_this64.config.classNames.hidden},De.get("menuBack",_this64.config))),u.call(_this64,n,"keydown",function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),d.call(_this64,"home",!0));},!1),u.call(_this64,r,"click",function(){d.call(_this64,"home",!1);}),n.appendChild(r),n.appendChild(y("div",{role:"menu"})),_c5.appendChild(n),_this64.elements.settings.buttons[e]=t,_this64.elements.settings.panels[e]=n;}),_s18.appendChild(_c5),_e43.appendChild(_s18),n.appendChild(_e43),_this64.elements.settings.popup=_s18,_this64.elements.settings.menu=_e43;}if("pip"===t&&ge.pip&&n.appendChild(i.call(_this64,"pip",r)),"airplay"===t&&ge.airplay&&n.appendChild(i.call(_this64,"airplay",r)),"download"===t){var _a5=te({},r,{element:"a",href:_this64.download,target:"_blank"}),_l5=(_this64.isHTML5&&(_a5.download=""),_this64.config.urls)["download"];!Q(_l5)&&_this64.isEmbed&&te(_a5,{icon:"logo-"+_this64.provider,label:_this64.provider}),n.appendChild(i.call(_this64,"download",_a5));}"fullscreen"===t&&n.appendChild(i.call(_this64,"fullscreen",r));}),this.isHTML5&&t.call(this,Oe.getQualityOptions.call(this)),o.call(this),n;},inject:function inject(){var _this65=this;if(this.config.loadSprite){var _t31=w.getIconUrl.call(this);_t31.cors&&He(_t31.url,"sprite-plyr");}this.id=Math.floor(1e4*Math.random());var t=null;this.elements.controls=null;var e={id:this.id,seektime:this.config.seekTime,title:this.config.title};var i=!0;W(this.config.controls)&&(this.config.controls=this.config.controls.call(this,e)),this.config.controls||(this.config.controls=[]),g(this.config.controls)||B(this.config.controls)?t=this.config.controls:(t=w.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:x.getLabel.call(this)}),i=!1);var s;if(i&&B(this.config.controls)&&(t=function(){var i=t;return Object.entries(e).forEach(function(_ref21){var _ref22=_slicedToArray(_ref21,2),e=_ref22[0],t=_ref22[1];i=Le(i,"{".concat(e,"}"),t);}),i;}()),B(this.config.selectors.controls.container)&&(s=document.querySelector(this.config.selectors.controls.container)),g(s)||(s=this.elements.container),s[g(t)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",t),g(this.elements.controls)||w.findElements.call(this),!v(this.elements.buttons)){var _t32=function _t32(t){var i=_this65.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function get(){return de(t,i);},set:function set(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;a(t,i,e);}});};Object.values(this.elements.buttons).filter(Boolean).forEach(function(e){Y(e)||X(e)?Array.from(e).filter(Boolean).forEach(_t32):_t32(e);});}if(J.isEdge&&Z(s),this.config.tooltips.controls){var _this$config=this.config,_t33=_this$config.classNames,_e44=_this$config.selectors,_i19="".concat(_e44.controls.wrapper," ").concat(_e44.labels," .")+_t33.hidden,_s19=he.call(this,_i19);Array.from(_s19).forEach(function(e){a(e,_this65.config.classNames.hidden,!1),a(e,_this65.config.classNames.tooltip,!0);});}}};function Re(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i=e;if(t){var _e45=document.createElement("a");_e45.href=i,i=_e45.href;}try{return new URL(i);}catch(e){return null;}}function We(e){var i=new URLSearchParams();return H(e)&&Object.entries(e).forEach(function(_ref23){var _ref24=_slicedToArray(_ref23,2),e=_ref24[0],t=_ref24[1];i.set(e,t);}),i;}var x={setup:function setup(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!ge.textTracks)Y(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&w.setCaptionsMenu.call(this);else{var _s21,_s22,_this$config$captions;var i;if(g(this.elements.captions)||(this.elements.captions=y("div",le(this.config.selectors.captions)),s=this.elements.captions,i=this.elements.wrapper,g(s)&&g(i)&&i.parentNode.insertBefore(s,i.nextSibling)),J.isIE&&window.URL){var _s20=this.media.querySelectorAll("track");Array.from(_s20).forEach(function(t){var e=t.getAttribute("src"),i=Re(e);null!==i&&i.hostname!==window.location.href.hostname&&["http:","https:"].includes(i.protocol)&&Fe(e,"blob").then(function(e){t.setAttribute("src",window.URL.createObjectURL(e));})["catch"](function(){re(t);});});}var s=Te((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(function(e){return e.split("-")[0];}));var _e46=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase(),_t34=("auto"===_e46&&(_s21=s,_s22=_slicedToArray(_s21,1),_e46=_s22[0],_s21),this.storage.get("captions"));if(R(_t34)||(_this$config$captions=this.config.captions,_t34=_this$config$captions.active,_this$config$captions),Object.assign(this.captions,{toggled:!1,active:_t34,language:_e46,languages:s}),this.isHTML5){var _s23=this.config.captions.update?"addtrack removetrack":"removetrack";u.call(this,this.media.textTracks,_s23,x.update.bind(this));}setTimeout(x.update.bind(this),0);}},update:function update(){var _this66=this;var e=x.getTracks.call(this,!0),_this$captions=this.captions,t=_this$captions.active,i=_this$captions.language,s=_this$captions.meta,n=_this$captions.currentTrackNode,r=Boolean(e.find(function(e){return e.language===i;}));this.isHTML5&&this.isVideo&&e.filter(function(e){return!s.get(e);}).forEach(function(e){_this66.debug.log("Track added",e),s.set(e,{"default":"showing"===e.mode}),"showing"===e.mode&&(e.mode="hidden"),u.call(_this66,e,"cuechange",function(){return x.updateCues.call(_this66);});}),(r&&this.language!==i||!e.includes(n))&&(x.setLanguage.call(this,i),x.toggle.call(this,t&&r)),a(this.elements.container,this.config.classNames.captions.enabled,!v(e)),Y(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&w.setCaptionsMenu.call(this);},toggle:function toggle(e){var _this67=this;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;if(this.supported.ui){var _i20=this.captions["toggled"],_s24=this.config.classNames.captions.active,_n12=F(e)?!_i20:e;if(_n12!==_i20){if(t||(this.captions.active=_n12,this.storage.set({captions:_n12})),!this.language&&_n12&&!t){var _e47=x.getTracks.call(this),_t35=x.findTrack.call(this,[this.captions.language].concat(_toConsumableArray(this.captions.languages)),!0);return this.captions.language=_t35.language,void x.set.call(this,_e47.indexOf(_t35));}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=_n12),a(this.elements.container,_s24,_n12),this.captions.toggled=_n12,w.updateSetting.call(this,"captions"),b.call(this,this.media,_n12?"captionsenabled":"captionsdisabled");}setTimeout(function(){_n12&&_this67.captions.toggled&&(_this67.captions.currentTrackNode.mode="hidden");});}},set:function set(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i,s=x.getTracks.call(this);-1!==e?q(e)?e in s?(this.captions.currentTrack!==e&&(i=((s=s[this.captions.currentTrack=e])||{})["language"],this.captions.currentTrackNode=s,w.updateSetting.call(this,"captions"),t||(this.captions.language=i,this.storage.set({language:i})),this.isVimeo&&this.embed.enableTextTrack(i),b.call(this,this.media,"languagechange")),x.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&x.updateCues.call(this)):this.debug.warn("Track not found",e):this.debug.warn("Invalid caption argument",e):x.toggle.call(this,!1,t);},setLanguage:function setLanguage(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;if(B(e)){var i=e.toLowerCase();this.captions.language=i;var _s25=x.getTracks.call(this),_n13=x.findTrack.call(this,[i]);x.set.call(this,_s25.indexOf(_n13),t);}else this.debug.warn("Invalid language argument",e);},getTracks:function getTracks(){var _this68=this;var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;return Array.from((this.media||{}).textTracks||[]).filter(function(e){return!_this68.isHTML5||t||_this68.captions.meta.has(e);}).filter(function(e){return["captions","subtitles"].includes(e.kind);});},findTrack:function findTrack(e){var _this69=this;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var i=x.getTracks.call(this),s=function s(e){return Number((_this69.captions.meta.get(e)||{})["default"]);},n=Array.from(i).sort(function(e,t){return s(t)-s(e);});var r;return e.every(function(t){return r=n.find(function(e){return e.language===t;}),!r;}),r||(t?n[0]:void 0);},getCurrentTrack:function getCurrentTrack(){return x.getTracks.call(this)[this.currentTrack];},getLabel:function getLabel(e){var t=e;return!U(t)&&ge.textTracks&&this.captions.toggled&&(t=x.getCurrentTrack.call(this)),U(t)?v(t.label)?v(t.language)?De.get("enabled",this.config):e.language.toUpperCase():t.label:De.get("disabled",this.config);},updateCues:function updateCues(t){if(this.supported.ui)if(g(this.elements.captions)){if(F(t)||Array.isArray(t)){var _e48=t;if(!_e48){var _t36=x.getCurrentTrack.call(this);_e48=Array.from((_t36||{}).activeCues||[]).map(function(e){return e.getCueAsHTML();}).map(ze);}var i=_e48.map(function(e){return e.trim();}).join("\n");if(i!==this.elements.captions.innerHTML){oe(this.elements.captions);var _t37=y("span",le(this.config.selectors.caption));_t37.innerHTML=i,this.elements.captions.appendChild(_t37),b.call(this,this.media,"cuechange");}}else this.debug.warn("updateCues: Invalid input",t);}else this.debug.warn("No captions element to render to");}},Ye={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.6.8/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{"default":576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1}},Xe="picture-in-picture",Ve={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Ge=function Ge(){};var Ue=/*#__PURE__*/function(){function Ue(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;_classCallCheck(this,Ue);this.enabled=window.console&&e,this.enabled&&this.log("Debugging enabled");}_createClass(Ue,[{key:"log",get:function get(){return this.enabled?Function.prototype.bind.call(console.log,console):Ge;}},{key:"warn",get:function get(){return this.enabled?Function.prototype.bind.call(console.warn,console):Ge;}},{key:"error",get:function get(){return this.enabled?Function.prototype.bind.call(console.error,console):Ge;}}]);return Ue;}();var Qe=/*#__PURE__*/function(){function Qe(e){var _this70=this;_classCallCheck(this,Qe);r(this,"onChange",function(){if(_this70.enabled){var _t38=_this70.player.elements.buttons.fullscreen;g(_t38)&&(_t38.pressed=_this70.active);var e=_this70.target===_this70.player.media?_this70.target:_this70.player.elements.container;b.call(_this70.player,e,_this70.active?"enterfullscreen":"exitfullscreen",!0);}}),r(this,"toggleFallback",function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;if(t?_this70.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(_this70.scrollPosition.x,_this70.scrollPosition.y),document.body.style.overflow=t?"hidden":"",a(_this70.target,_this70.player.config.classNames.fullscreen.fallback,t),J.isIos){var _e49=document.head.querySelector('meta[name="viewport"]');var _s26="viewport-fit=cover";_e49||(_e49=document.createElement("meta"),_e49.setAttribute("name","viewport"));var i=B(_e49.content)&&_e49.content.includes(_s26);t?(_this70.cleanupViewport=!i,i||(_e49.content+=","+_s26)):_this70.cleanupViewport&&(_e49.content=_e49.content.split(",").filter(function(e){return e.trim()!==_s26;}).join(","));}_this70.onChange();}),r(this,"trapFocus",function(e){if(!J.isIos&&_this70.active&&"Tab"===e.key&&9===e.keyCode){var _t39=document.activeElement,_i21=he.call(_this70.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),_i22=_slicedToArray(_i21,1),_s27=_i22[0],_n14=_i21[_i21.length-1];_t39!==_n14||e.shiftKey?_t39===_s27&&e.shiftKey&&(_n14.focus(),e.preventDefault()):(_s27.focus(),e.preventDefault());}}),r(this,"update",function(){var e;_this70.enabled?(e=_this70.forceFallback?"Fallback (forced)":Qe["native"]?"Native":"Fallback",_this70.player.debug.log(e+" fullscreen enabled")):_this70.player.debug.log("Fullscreen not supported and fallback disabled"),a(_this70.player.elements.container,_this70.player.config.classNames.fullscreen.enabled,_this70.enabled);}),r(this,"enter",function(){_this70.enabled&&(J.isIos&&_this70.player.config.fullscreen.iosNative?_this70.player.isVimeo?_this70.player.embed.requestFullscreen():_this70.target.webkitEnterFullscreen():!Qe["native"]||_this70.forceFallback?_this70.toggleFallback(!0):_this70.prefix?v(_this70.prefix)||_this70.target[_this70.prefix+"Request"+_this70.property]():_this70.target.requestFullscreen({navigationUI:"hide"}));}),r(this,"exit",function(){var e;_this70.enabled&&(J.isIos&&_this70.player.config.fullscreen.iosNative?(_this70.target.webkitExitFullscreen(),xe(_this70.player.play())):!Qe["native"]||_this70.forceFallback?_this70.toggleFallback(!1):_this70.prefix?v(_this70.prefix)||(e="moz"===_this70.prefix?"Cancel":"Exit",document[_this70.prefix+e+_this70.property]()):(document.cancelFullScreen||document.exitFullscreen).call(document));}),r(this,"toggle",function(){_this70.active?_this70.exit():_this70.enter();}),this.player=e,this.prefix=Qe.prefix,this.property=Qe.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===e.config.fullscreen.fallback,this.player.elements.fullscreen=e.config.fullscreen.container&&function(e,t){var i=Element["prototype"];return(i.closest||function(){var e=this;do{if(ue.matches(e,t))return e;}while((e=e.parentElement||e.parentNode,null!==e&&1===e.nodeType));return null;}).call(e,t);}(this.player.elements.container,e.config.fullscreen.container),u.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":this.prefix+"fullscreenchange",function(){_this70.onChange();}),u.call(this.player,this.player.elements.container,"dblclick",function(e){g(_this70.player.elements.controls)&&_this70.player.elements.controls.contains(e.target)||_this70.player.listeners.proxy(e,_this70.toggle,"fullscreen");}),u.call(this,this.player.elements.container,"keydown",function(e){return _this70.trapFocus(e);}),this.update();}_createClass(Qe,[{key:"usingNative",get:function get(){return Qe["native"]&&!this.forceFallback;}},{key:"enabled",get:function get(){return(Qe["native"]||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo;}},{key:"active",get:function get(){if(!this.enabled)return!1;if(!Qe["native"]||this.forceFallback)return de(this.target,this.player.config.classNames.fullscreen.fallback);var e=this.prefix?document[""+this.prefix+this.property+"Element"]:document.fullscreenElement;return e&&e.shadowRoot?e===this.target.getRootNode().host:e===this.target;}},{key:"target",get:function get(){return J.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.fullscreen||this.player.elements.container;}}],[{key:"native",get:function get(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled);}},{key:"prefix",get:function get(){if(W(document.exitFullscreen))return"";var t="";return["webkit","moz","ms"].some(function(e){return!(!W(document[e+"ExitFullscreen"])&&!W(document[e+"CancelFullScreen"])||(t=e,0));}),t;}},{key:"property",get:function get(){return"moz"===this.prefix?"FullScreen":"Fullscreen";}}]);return Qe;}();function Ke(n){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return new Promise(function(e,t){var i=new Image(),s=function s(){delete i.onload,delete i.onerror,(i.naturalWidth>=r?e:t)(i);};Object.assign(i,{onload:s,onerror:s,src:n});});}var T={addStyleHook:function addStyleHook(){a(this.elements.container,this.config.selectors.container.replace(".",""),!0),a(this.elements.container,this.config.classNames.uiSupported,this.supported.ui);},toggleNativeControls:function toggleNativeControls(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls");},build:function build(){var _this71=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ")+this.type),void T.toggleNativeControls.call(this,!0);g(this.elements.controls)||(w.inject.call(this),this.listeners.controls()),T.toggleNativeControls.call(this),this.isHTML5&&x.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,w.updateVolume.call(this),w.timeUpdate.call(this),T.checkPlaying.call(this),a(this.elements.container,this.config.classNames.pip.supported,ge.pip&&this.isHTML5&&this.isVideo),a(this.elements.container,this.config.classNames.airplay.supported,ge.airplay&&this.isHTML5),a(this.elements.container,this.config.classNames.isIos,J.isIos),a(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(function(){b.call(_this71,_this71.media,"ready");},0),T.setTitle.call(this),this.poster&&T.setPoster.call(this,this.poster,!1)["catch"](function(){}),this.config.duration&&w.durationUpdate.call(this);},setTitle:function setTitle(){var t=De.get("play",this.config);if(B(this.config.title)&&!v(this.config.title)&&(t+=", "+this.config.title),Array.from(this.elements.buttons.play||[]).forEach(function(e){e.setAttribute("aria-label",t);}),this.isEmbed){var _t40=pe.call(this,"iframe");if(g(_t40)){var _e50=v(this.config.title)?"video":this.config.title,_i23=De.get("frameTitle",this.config);_t40.setAttribute("title",_i23.replace("{title}",_e50));}}},togglePoster:function togglePoster(e){a(this.elements.container,this.config.classNames.posterEnabled,e);},setPoster:function setPoster(t){var _this73=this;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;return e&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("data-poster",t),this.elements.poster.removeAttribute("hidden"),function(){var _this72=this;return new Promise(function(e){return _this72.ready?setTimeout(e,0):u.call(_this72,_this72.elements.container,"ready",e);}).then(function(){});}.call(this).then(function(){return Ke(t);})["catch"](function(e){throw t===_this73.poster&&T.togglePoster.call(_this73,!1),e;}).then(function(){if(t!==_this73.poster)throw new Error("setPoster cancelled by later call to setPoster");}).then(function(){return Object.assign(_this73.elements.poster.style,{backgroundImage:"url('".concat(t,"')"),backgroundSize:""}),T.togglePoster.call(_this73,!0),t;}));},checkPlaying:function checkPlaying(e){var _this74=this;a(this.elements.container,this.config.classNames.playing,this.playing),a(this.elements.container,this.config.classNames.paused,this.paused),a(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(function(e){Object.assign(e,{pressed:_this74.playing}),e.setAttribute("aria-label",De.get(_this74.playing?"pause":"play",_this74.config));}),V(e)&&"timeupdate"===e.type||T.toggleControls.call(this);},checkLoading:function checkLoading(e){var _this75=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(function(){a(_this75.elements.container,_this75.config.classNames.loading,_this75.loading),T.toggleControls.call(_this75);},this.loading?250:0);},toggleControls:function toggleControls(e){var t,i=this.elements["controls"];i&&this.config.hideControls&&(t=this.touch&&this.lastSeekTime+2e3>Date.now(),this.toggleControls(Boolean(e||this.loading||this.paused||i.pressed||i.hover||t)));},migrateStyles:function migrateStyles(){var _this76=this;Object.values(_objectSpread({},this.media.style)).filter(function(e){return!v(e)&&B(e)&&e.startsWith("--plyr");}).forEach(function(e){_this76.elements.container.style.setProperty(e,_this76.media.style.getPropertyValue(e)),_this76.media.style.removeProperty(e);}),v(this.media.style)&&this.media.removeAttribute("style");}};var Ze=/*#__PURE__*/function(){function Ze(e){var _this77=this;_classCallCheck(this,Ze);r(this,"firstTouch",function(){var e=_this77["player"],t=e["elements"];e.touch=!0,a(t.container,e.config.classNames.isTouch,!0);}),r(this,"setTabFocus",function(e){var t=_this77["player"],i=t["elements"];var s;clearTimeout(_this77.focusTimer),"keydown"===e.type&&9!==e.which||("keydown"===e.type&&(_this77.lastKeyDown=e.timeStamp),s=e.timeStamp-_this77.lastKeyDown<=20,"focus"===e.type&&!s||(s=t.config.classNames.tabFocus,a(he.call(t,"."+s),s,!1),"focusout"!==e.type&&(_this77.focusTimer=setTimeout(function(){var e=document.activeElement;i.container.contains(e)&&a(document.activeElement,t.config.classNames.tabFocus,!0);},10))));}),r(this,"global",function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!0;var t=_this77["player"];t.config.keyboard.global&&ye.call(t,window,"keydown keyup",_this77.handleKey,e,!1),ye.call(t,document.body,"click",_this77.toggleMenu,e),we.call(t,document.body,"touchstart",_this77.firstTouch),ye.call(t,document.body,"keydown focus blur focusout",_this77.setTabFocus,e,!1,!0);}),r(this,"container",function(){var a=_this77["player"],e=a.config,l=a.elements,s=a.timers,i=(!e.keyboard.global&&e.keyboard.focused&&u.call(a,l.container,"keydown keyup",_this77.handleKey,!1),u.call(a,l.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",function(e){var t=l["controls"];t&&"enterfullscreen"===e.type&&(t.pressed=!1,t.hover=!1);var i=0;["touchstart","touchmove","mousemove"].includes(e.type)&&(T.toggleControls.call(a,!0),i=a.touch?3e3:2e3),clearTimeout(s.controls),s.controls=setTimeout(function(){return T.toggleControls.call(a,!1);},i);}),function(){if(a.isVimeo&&!a.config.vimeo.premium){var _ref25;var _i24=l.wrapper,_s28=a.fullscreen["active"],_Ae$call=Ae.call(a),_Ae$call2=_slicedToArray(_Ae$call,2),_n15=_Ae$call2[0],_r9=_Ae$call2[1],_o5=_e("aspect-ratio: ".concat(_n15," / ")+_r9);var e,t;_s28?((_ref25=[Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)],t=_ref25[0],e=_ref25[1]),t=_n15/_r9<t/e,_o5?(_i24.style.width=t?"auto":"100%",_i24.style.height=t?"100%":"auto"):(_i24.style.maxWidth=t?e/_r9*_n15+"px":null,_i24.style.margin=t?"0 auto":null)):_o5?(_i24.style.width=null,_i24.style.height=null):(_i24.style.maxWidth=null,_i24.style.margin=null);}}),n=function n(){clearTimeout(s.resized),s.resized=setTimeout(i,50);};u.call(a,l.container,"enterfullscreen exitfullscreen",function(e){var t=a.fullscreen["target"];t===l.container&&(!a.isEmbed&&v(a.config.ratio)||(i(),("enterfullscreen"===e.type?u:be).call(a,window,"resize",n)));});}),r(this,"media",function(){var i=_this77["player"],s=i["elements"];if(u.call(i,i.media,"timeupdate seeking seeked",function(e){return w.timeUpdate.call(i,e);}),u.call(i,i.media,"durationchange loadeddata loadedmetadata",function(e){return w.durationUpdate.call(i,e);}),u.call(i,i.media,"ended",function(){i.isHTML5&&i.isVideo&&i.config.resetOnEnd&&(i.restart(),i.pause());}),u.call(i,i.media,"progress playing seeking seeked",function(e){return w.updateProgress.call(i,e);}),u.call(i,i.media,"volumechange",function(e){return w.updateVolume.call(i,e);}),u.call(i,i.media,"playing play pause ended emptied timeupdate",function(e){return T.checkPlaying.call(i,e);}),u.call(i,i.media,"waiting canplay seeked playing",function(e){return T.checkLoading.call(i,e);}),i.supported.ui&&i.config.clickToPlay&&!i.isAudio){var _t41=pe.call(i,"."+i.config.classNames.video);if(!g(_t41))return;u.call(i,s.container,"click",function(e){([s.container,_t41].includes(e.target)||_t41.contains(e.target))&&(i.touch&&i.config.hideControls||(i.ended?(_this77.proxy(e,i.restart,"restart"),_this77.proxy(e,function(){xe(i.play());},"play")):_this77.proxy(e,function(){xe(i.togglePlay());},"play")));});}i.supported.ui&&i.config.disableContextMenu&&u.call(i,s.wrapper,"contextmenu",function(e){e.preventDefault();},!1),u.call(i,i.media,"volumechange",function(){i.storage.set({volume:i.volume,muted:i.muted});}),u.call(i,i.media,"ratechange",function(){w.updateSetting.call(i,"speed"),i.storage.set({speed:i.speed});}),u.call(i,i.media,"qualitychange",function(e){w.updateSetting.call(i,"quality",null,e.detail.quality);}),u.call(i,i.media,"ready qualitychange",function(){w.setDownloadUrl.call(i);});var t=i.config.events.concat(["keyup","keydown"]).join(" ");u.call(i,i.media,t,function(e){var _e$detail=e.detail,t=_e$detail===void 0?{}:_e$detail;"error"===e.type&&(t=i.media.error),b.call(i,s.container,e.type,!0,t);});}),r(this,"proxy",function(e,t,i){var s=_this77["player"],n=s.config.listeners[i];var r=!0;W(n)&&(r=n.call(s,e)),!1!==r&&W(t)&&t.call(s,e);}),r(this,"bind",function(e,t,i,s){var n=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!0;var r=_this77["player"],o=r.config.listeners[s],o=W(o);u.call(r,e,t,function(e){return _this77.proxy(e,i,s);},n&&!o);}),r(this,"controls",function(){var o=_this77["player"],s=o["elements"],t=J.isIE?"change":"input";if(s.buttons.play&&Array.from(s.buttons.play).forEach(function(e){_this77.bind(e,"click",function(){xe(o.togglePlay());},"play");}),_this77.bind(s.buttons.restart,"click",o.restart,"restart"),_this77.bind(s.buttons.rewind,"click",function(){o.lastSeekTime=Date.now(),o.rewind();},"rewind"),_this77.bind(s.buttons.fastForward,"click",function(){o.lastSeekTime=Date.now(),o.forward();},"fastForward"),_this77.bind(s.buttons.mute,"click",function(){o.muted=!o.muted;},"mute"),_this77.bind(s.buttons.captions,"click",function(){return o.toggleCaptions();}),_this77.bind(s.buttons.download,"click",function(){b.call(o,o.media,"download");},"download"),_this77.bind(s.buttons.fullscreen,"click",function(){o.fullscreen.toggle();},"fullscreen"),_this77.bind(s.buttons.pip,"click",function(){o.pip="toggle";},"pip"),_this77.bind(s.buttons.airplay,"click",o.airplay,"airplay"),_this77.bind(s.buttons.settings,"click",function(e){e.stopPropagation(),e.preventDefault(),w.toggleMenu.call(o,e);},null,!1),_this77.bind(s.buttons.settings,"keyup",function(e){var t=e.which;[13,32].includes(t)&&(13!==t?(e.preventDefault(),e.stopPropagation(),w.toggleMenu.call(o,e)):w.focusFirstMenuItem.call(o,null,!0));},null,!1),_this77.bind(s.settings.menu,"keydown",function(e){27===e.which&&w.toggleMenu.call(o,e);}),_this77.bind(s.inputs.seek,"mousedown mousemove",function(e){var t=s.progress.getBoundingClientRect(),t=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",t);}),_this77.bind(s.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",function(e){var t=e.currentTarget,i=e.keyCode||e.which,s="play-on-seeked";var n;G(e)&&39!==i&&37!==i||(o.lastSeekTime=Date.now(),n=t.hasAttribute(s),e=["mouseup","touchend","keyup"].includes(e.type),n&&e?(t.removeAttribute(s),xe(o.play())):!e&&o.playing&&(t.setAttribute(s,""),o.pause()));}),J.isIos){var _s29=he.call(o,'input[type="range"]');Array.from(_s29).forEach(function(e){return _this77.bind(e,t,function(e){return Z(e.target);});});}_this77.bind(s.inputs.seek,t,function(e){var t=e.currentTarget;var i=t.getAttribute("seek-value");v(i)&&(i=t.value),t.removeAttribute("seek-value"),o.currentTime=i/t.max*o.duration;},"seek"),_this77.bind(s.progress,"mouseenter mouseleave mousemove",function(e){return w.updateSeekTooltip.call(o,e);}),_this77.bind(s.progress,"mousemove touchmove",function(e){var t=o["previewThumbnails"];t&&t.loaded&&t.startMove(e);}),_this77.bind(s.progress,"mouseleave touchend click",function(){var e=o["previewThumbnails"];e&&e.loaded&&e.endMove(!1,!0);}),_this77.bind(s.progress,"mousedown touchstart",function(e){var t=o["previewThumbnails"];t&&t.loaded&&t.startScrubbing(e);}),_this77.bind(s.progress,"mouseup touchend",function(e){var t=o["previewThumbnails"];t&&t.loaded&&t.endScrubbing(e);}),J.isWebkit&&Array.from(he.call(o,'input[type="range"]')).forEach(function(e){_this77.bind(e,"input",function(e){return w.updateRangeFill.call(o,e.target);});}),o.config.toggleInvert&&!g(s.display.duration)&&_this77.bind(s.display.currentTime,"click",function(){0!==o.currentTime&&(o.config.invertTime=!o.config.invertTime,w.timeUpdate.call(o));}),_this77.bind(s.inputs.volume,t,function(e){o.volume=e.target.value;},"volume"),_this77.bind(s.controls,"mouseenter mouseleave",function(e){s.controls.hover=!o.touch&&"mouseenter"===e.type;}),s.fullscreen&&Array.from(s.fullscreen.children).filter(function(e){return!e.contains(s.container);}).forEach(function(e){_this77.bind(e,"mouseenter mouseleave",function(e){s.controls.hover=!o.touch&&"mouseenter"===e.type;});}),_this77.bind(s.controls,"mousedown mouseup touchstart touchend touchcancel",function(e){s.controls.pressed=["mousedown","touchstart"].includes(e.type);}),_this77.bind(s.controls,"focusin",function(){var e=o.config,t=o.timers;a(s.controls,e.classNames.noTransition,!0),T.toggleControls.call(o,!0),setTimeout(function(){a(s.controls,e.classNames.noTransition,!1);},0);var i=_this77.touch?3e3:4e3;clearTimeout(t.controls),t.controls=setTimeout(function(){return T.toggleControls.call(o,!1);},i);}),_this77.bind(s.inputs.volume,"wheel",function(e){var t=e.webkitDirectionInvertedFromDevice,_map=[e.deltaX,-e.deltaY].map(function(e){return t?-e:e;}),_map2=_slicedToArray(_map,2),i=_map2[0],s=_map2[1],n=Math.sign(Math.abs(i)>Math.abs(s)?i:s);o.increaseVolume(n/50);var r=o.media["volume"];(1===n&&r<1||-1===n&&0<r)&&e.preventDefault();},"volume",!1);}),this.player=e,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this);}_createClass(Ze,[{key:"handleKey",value:function handleKey(e){var t=this["player"],i=t["elements"],s=e.keyCode||e.which,n="keydown"===e.type,r=n&&s===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&q(s))if(n){var _n16=document.activeElement;if(g(_n16)){var _s30=t.config.selectors["editable"],_r10=i.inputs["seek"];if(_n16!==_r10&&ue(_n16,_s30))return;if(32===e.which&&ue(_n16,'button, [role^="menuitem"]'))return;}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(s)&&(e.preventDefault(),e.stopPropagation()),s){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:r||(t.currentTime=t.duration/10*(s-48));break;case 32:case 75:r||xe(t.togglePlay());break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:r||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:r||t.toggleCaptions();break;case 76:t.loop=!t.loop;}27===s&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=s;}else this.lastKey=null;}},{key:"toggleMenu",value:function toggleMenu(e){w.toggleMenu.call(this.player,e);}}]);return Ze;}();var Je,et=function(){var p=function p(){},o={},d={},u={};function a(e,t){if(e){var i=u[e];if(d[e]=t,i)for(;i.length;){i[0](e,t),i.splice(0,1);}}}function h(e,t){e.call&&(e={success:e}),t.length?(e.error||p)(t):(e.success||p)(e);}function l(e,s,t){for(var n=(e=e.push?e:[e]).length,i=n,r=[],o=function o(e,t,i){if("e"==t&&r.push(e),"b"==t){if(!i)return;r.push(e);}--n||s(r);},a=0;a<i;a++){!function d(i,s,n,r){var o,a,e=document,t=n.async,u=(n.numRetries||0)+1,h=n.before||p,l=i.replace(/[\?|#].*$/,""),c=i.replace(/^(css|img)!/,"");r=r||0,/(^css!|\.css$)/.test(l)?((a=e.createElement("link")).rel="stylesheet",a.href=c,(o="hideFocus"in a)&&a.relList&&(o=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(a=e.createElement("img")).src=c:((a=e.createElement("script")).src=i,a.async=void 0===t||t),a.onload=a.onerror=a.onbeforeload=function(e){var t=e.type[0];if(o)try{a.sheet.cssText.length||(t="e");}catch(e){18!=e.code&&(t="e");}if("e"==t){if((r+=1)<u)return d(i,s,n,r);}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet";s(i,t,e.defaultPrevented);},!1!==h(i,a)&&e.head.appendChild(a);}(e[a],o,t);}}function m(e,t,i){var s,n;if(t&&t.trim&&(s=t),n=(s?i:t)||{},s){if(s in o)throw"LoadJS";o[s]=!0;}function r(t,i){l(e,function(e){h(n,e),t&&h({success:t,error:i},e),a(s,e);},n);}if(n.returnPromise)return new Promise(r);r();}return m.ready=function(e,t){var i=e,s=function s(e){h(t,e);};i=i.push?i:[i];for(var n,r,o=[],a=i.length,l=a,c=function c(e,t){t.length&&o.push(e),--l||s(o);};a--;){n=i[a],(r=d[n])?c(n,r):(u[n]=u[n]||[]).push(c);}return m;},m.done=function(e){a(e,[]);},m.reset=function(){o={},d={},u={};},m.isDefined=function(e){return e in o;},m;}();function tt(i){return new Promise(function(e,t){et(i,{success:e,error:t});});}function it(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,b.call(this,this.media,e?"play":"pause"));}var st={setup:function setup(){var t=this;a(t.elements.wrapper,t.config.classNames.embed,!0),t.options.speed=t.config.speed.options,Me.call(t),H(window.Vimeo)?st.ready.call(t):tt(t.config.urls.vimeo.sdk).then(function(){st.ready.call(t);})["catch"](function(e){t.debug.warn("Vimeo SDK (player.js) failed to load",e);});},ready:function ready(){var _this78=this;var o=this,e=o.config.vimeo,t=e.premium,i=e.referrerPolicy,s=_objectWithoutProperties(e,_excluded);t&&Object.assign(s,{controls:!1,sidedock:!1});var d=We(_objectSpread({loop:o.config.loop.active,autoplay:o.autoplay,muted:o.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},s));var n=o.media.getAttribute("src");v(n)&&(n=o.media.getAttribute(o.config.attributes.embed.id));var r=v(r=n)?null:!q(Number(r))&&r.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:r;var a=y("iframe"),l=Ie(o.config.urls.vimeo.iframe,r,d);if(a.setAttribute("src",l),a.setAttribute("allowfullscreen",""),a.setAttribute("allow",["autoplay","fullscreen","picture-in-picture","encrypted-media","accelerometer","gyroscope"].join("; ")),v(i)||a.setAttribute("referrerPolicy",i),t||!e.customControls)a.setAttribute("data-poster",o.poster),o.media=ae(a,o.media);else{var _e51=y("div",{"class":o.config.classNames.embedContainer,"data-poster":o.poster});_e51.appendChild(a),o.media=ae(_e51,o.media);}e.customControls||Fe(Ie(o.config.urls.vimeo.api,l)).then(function(e){!v(e)&&e.thumbnail_url&&T.setPoster.call(o,e.thumbnail_url)["catch"](function(){});}),o.embed=new window.Vimeo.Player(a,{autopause:o.config.autopause,muted:o.muted}),o.media.paused=!0,o.media.currentTime=0,o.supported.ui&&o.embed.disableTextTrack(),o.media.play=function(){return it.call(o,!0),o.embed.play();},o.media.pause=function(){return it.call(o,!1),o.embed.pause();},o.media.stop=function(){o.pause(),o.currentTime=0;};var c=o.media["currentTime"],u=(Object.defineProperty(o.media,"currentTime",{get:function get(){return c;},set:function set(e){var t=o.embed,i=o.media,s=o.paused,n=o.volume,r=s&&!t.hasPlayed;i.seeking=!0,b.call(o,i,"seeking"),Promise.resolve(r&&t.setVolume(0)).then(function(){return t.setCurrentTime(e);}).then(function(){return r&&t.pause();}).then(function(){return r&&t.setVolume(n);})["catch"](function(){});}}),o.config.speed.selected),h=(Object.defineProperty(o.media,"playbackRate",{get:function get(){return u;},set:function set(e){o.embed.setPlaybackRate(e).then(function(){u=e,b.call(o,o.media,"ratechange");})["catch"](function(){o.options.speed=[1];});}}),o.config)["volume"],p=(Object.defineProperty(o.media,"volume",{get:function get(){return h;},set:function set(e){o.embed.setVolume(e).then(function(){h=e,b.call(o,o.media,"volumechange");});}}),o.config)["muted"];Object.defineProperty(o.media,"muted",{get:function get(){return p;},set:function set(e){var t=!!R(e)&&e;o.embed.setVolume(t?0:o.config.volume).then(function(){p=t,b.call(o,o.media,"volumechange");});}});var m,f=o.config["loop"];Object.defineProperty(o.media,"loop",{get:function get(){return f;},set:function set(e){var t=R(e)?e:o.config.loop.active;o.embed.setLoop(t).then(function(){f=t;});}}),o.embed.getVideoUrl().then(function(e){m=e,w.setDownloadUrl.call(o);})["catch"](function(e){_this78.debug.warn(e);}),Object.defineProperty(o.media,"currentSrc",{get:function get(){return m;}}),Object.defineProperty(o.media,"ended",{get:function get(){return o.currentTime===o.duration;}}),Promise.all([o.embed.getVideoWidth(),o.embed.getVideoHeight()]).then(function(e){var _e52=e,_e53=_slicedToArray(_e52,2),e=_e53[0],t=_e53[1];o.embed.ratio=Pe(e,t),Me.call(_this78);}),o.embed.setAutopause(o.config.autopause).then(function(e){o.config.autopause=e;}),o.embed.getVideoTitle().then(function(e){o.config.title=e,T.setTitle.call(_this78);}),o.embed.getCurrentTime().then(function(e){c=e,b.call(o,o.media,"timeupdate");}),o.embed.getDuration().then(function(e){o.media.duration=e,b.call(o,o.media,"durationchange");}),o.embed.getTextTracks().then(function(e){o.media.textTracks=e,x.setup.call(o);}),o.embed.on("cuechange",function(_ref26){var _ref26$cues=_ref26.cues,e=_ref26$cues===void 0?[]:_ref26$cues;e=e.map(function(e){{e=e.text;var _t42=document.createDocumentFragment(),_i25=document.createElement("div");return _t42.appendChild(_i25),_i25.innerHTML=e,_t42.firstChild.innerText;}});x.updateCues.call(o,e);}),o.embed.on("loaded",function(){o.embed.getPaused().then(function(e){it.call(o,!e),e||b.call(o,o.media,"playing");}),g(o.embed.element)&&o.supported.ui&&o.embed.element.setAttribute("tabindex",-1);}),o.embed.on("bufferstart",function(){b.call(o,o.media,"waiting");}),o.embed.on("bufferend",function(){b.call(o,o.media,"playing");}),o.embed.on("play",function(){it.call(o,!0),b.call(o,o.media,"playing");}),o.embed.on("pause",function(){it.call(o,!1);}),o.embed.on("timeupdate",function(e){o.media.seeking=!1,c=e.seconds,b.call(o,o.media,"timeupdate");}),o.embed.on("progress",function(e){o.media.buffered=e.percent,b.call(o,o.media,"progress"),1===parseInt(e.percent,10)&&b.call(o,o.media,"canplaythrough"),o.embed.getDuration().then(function(e){e!==o.media.duration&&(o.media.duration=e,b.call(o,o.media,"durationchange"));});}),o.embed.on("seeked",function(){o.media.seeking=!1,b.call(o,o.media,"seeked");}),o.embed.on("ended",function(){o.media.paused=!0,b.call(o,o.media,"ended");}),o.embed.on("error",function(e){o.media.error=e,b.call(o,o.media,"error");}),e.customControls&&setTimeout(function(){return T.build.call(o);},0);}};function nt(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,b.call(this,this.media,e?"play":"pause"));}var rt={setup:function setup(){var _this79=this;if(a(this.elements.wrapper,this.config.classNames.embed,!0),H(window.YT)&&W(window.YT.Player))rt.ready.call(this);else{var _e54=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){W(_e54)&&_e54(),rt.ready.call(_this79);},tt(this.config.urls.youtube.sdk)["catch"](function(e){_this79.debug.warn("YouTube API failed to load",e);});}},getTitle:function getTitle(e){var _this80=this;Fe(Ie(this.config.urls.youtube.api,e)).then(function(e){var _e55;var t,i;H(e)&&((_e55=e,e=_e55.title,t=_e55.height,i=_e55.width),_this80.config.title=e,T.setTitle.call(_this80),_this80.embed.ratio=Pe(i,t)),Me.call(_this80);})["catch"](function(){Me.call(_this80);});},ready:function ready(){var r=this,o=r.config.youtube,e=r.media&&r.media.getAttribute("id");if(v(e)||!e.startsWith("youtube-")){var _e56=r.media.getAttribute("src");v(_e56)&&(_e56=r.media.getAttribute(this.config.attributes.embed.id));var _a6=v(t=_e56)?null:t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:t;var t=y("div",{id:r.provider+"-"+Math.floor(1e4*Math.random()),"data-poster":o.customControls?r.poster:void 0});if(r.media=ae(t,r.media),o.customControls){var _o6=function _o6(e){return"https://i.ytimg.com/vi/".concat(_a6,"/").concat(e,"default.jpg");};Ke(_o6("maxres"),121)["catch"](function(){return Ke(_o6("sd"),121);})["catch"](function(){return Ke(_o6("hq"));}).then(function(e){return T.setPoster.call(r,e.src);}).then(function(e){e.includes("maxres")||(r.elements.poster.style.backgroundSize="cover");})["catch"](function(){});}r.embed=new window.YT.Player(r.media,{videoId:_a6,host:o.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0,playerVars:te({},{autoplay:r.config.autoplay?1:0,hl:r.config.hl,controls:r.supported.ui&&o.customControls?0:1,disablekb:1,playsinline:r.config.fullscreen.iosNative?0:1,cc_load_policy:r.captions.active?1:0,cc_lang_pref:r.config.captions.language,widget_referrer:window?window.location.href:null},o),events:{onError:function onError(e){var t;r.media.error||(t={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[e=e.data]||"An unknown error occured",r.media.error={code:e,message:t},b.call(r,r.media,"error"));},onPlaybackRateChange:function onPlaybackRateChange(e){var t=e.target;r.media.playbackRate=t.getPlaybackRate(),b.call(r,r.media,"ratechange");},onReady:function onReady(e){if(!W(r.media.play)){var _s31=e.target;rt.getTitle.call(r,_a6),r.media.play=function(){nt.call(r,!0),_s31.playVideo();},r.media.pause=function(){nt.call(r,!1),_s31.pauseVideo();},r.media.stop=function(){_s31.stopVideo();},r.media.duration=_s31.getDuration(),r.media.paused=!0,r.media.currentTime=0,Object.defineProperty(r.media,"currentTime",{get:function get(){return Number(_s31.getCurrentTime());},set:function set(e){r.paused&&!r.embed.hasPlayed&&r.embed.mute(),r.media.seeking=!0,b.call(r,r.media,"seeking"),_s31.seekTo(e);}}),Object.defineProperty(r.media,"playbackRate",{get:function get(){return _s31.getPlaybackRate();},set:function set(e){_s31.setPlaybackRate(e);}});var _t43=r.config["volume"],_i26=(Object.defineProperty(r.media,"volume",{get:function get(){return _t43;},set:function set(e){_t43=e,_s31.setVolume(100*_t43),b.call(r,r.media,"volumechange");}}),r.config)["muted"];Object.defineProperty(r.media,"muted",{get:function get(){return _i26;},set:function set(e){e=R(e)?e:_i26;_i26=e,_s31[e?"mute":"unMute"](),_s31.setVolume(100*_t43),b.call(r,r.media,"volumechange");}}),Object.defineProperty(r.media,"currentSrc",{get:function get(){return _s31.getVideoUrl();}}),Object.defineProperty(r.media,"ended",{get:function get(){return r.currentTime===r.duration;}});var _n17=_s31.getAvailablePlaybackRates();r.options.speed=_n17.filter(function(e){return r.config.speed.options.includes(e);}),r.supported.ui&&o.customControls&&r.media.setAttribute("tabindex",-1),b.call(r,r.media,"timeupdate"),b.call(r,r.media,"durationchange"),clearInterval(r.timers.buffering),r.timers.buffering=setInterval(function(){r.media.buffered=_s31.getVideoLoadedFraction(),(null===r.media.lastBuffered||r.media.lastBuffered<r.media.buffered)&&b.call(r,r.media,"progress"),r.media.lastBuffered=r.media.buffered,1===r.media.buffered&&(clearInterval(r.timers.buffering),b.call(r,r.media,"canplaythrough"));},200),o.customControls&&setTimeout(function(){return T.build.call(r);},50);}},onStateChange:function onStateChange(e){var t=e.target;switch(clearInterval(r.timers.playing),r.media.seeking&&[1,2].includes(e.data)&&(r.media.seeking=!1,b.call(r,r.media,"seeked")),e.data){case-1:b.call(r,r.media,"timeupdate"),r.media.buffered=t.getVideoLoadedFraction(),b.call(r,r.media,"progress");break;case 0:nt.call(r,!1),r.media.loop?(t.stopVideo(),t.playVideo()):b.call(r,r.media,"ended");break;case 1:o.customControls&&!r.config.autoplay&&r.media.paused&&!r.embed.hasPlayed?r.media.pause():(nt.call(r,!0),b.call(r,r.media,"playing"),r.timers.playing=setInterval(function(){b.call(r,r.media,"timeupdate");},50),r.media.duration!==t.getDuration()&&(r.media.duration=t.getDuration(),b.call(r,r.media,"durationchange")));break;case 2:r.muted||r.embed.unMute(),nt.call(r,!1);break;case 3:b.call(r,r.media,"waiting");}b.call(r,r.elements.container,"statechange",!1,{code:e.data});}}});}}},ot={setup:function setup(){this.media?(a(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),a(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&a(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=y("div",{"class":this.config.classNames.video}),ie(this.media,this.elements.wrapper),this.elements.poster=y("div",{"class":this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?Oe.setup.call(this):this.isYouTube?rt.setup.call(this):this.isVimeo&&st.setup.call(this)):this.debug.warn("No media element found!");}};var at=/*#__PURE__*/function(){function at(e){var _this81=this;_classCallCheck(this,at);r(this,"load",function(){_this81.enabled&&(H(window.google)&&H(window.google.ima)?_this81.ready():tt(_this81.player.config.urls.googleIMA.sdk).then(function(){_this81.ready();})["catch"](function(){_this81.trigger("error",new Error("Google IMA SDK failed to load"));}));}),r(this,"ready",function(){_this81.enabled||(_this81.manager&&_this81.manager.destroy(),_this81.elements.displayContainer&&_this81.elements.displayContainer.destroy(),_this81.elements.container.remove()),_this81.startSafetyTimer(12e3,"ready()"),_this81.managerPromise.then(function(){_this81.clearSafetyTimer("onAdsManagerLoaded()");}),_this81.listeners(),_this81.setupIMA();}),r(this,"setupIMA",function(){_this81.elements.container=y("div",{"class":_this81.player.config.classNames.ads}),_this81.player.elements.container.appendChild(_this81.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(_this81.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(_this81.player.config.playsinline),_this81.elements.displayContainer=new google.ima.AdDisplayContainer(_this81.elements.container,_this81.player.media),_this81.loader=new google.ima.AdsLoader(_this81.elements.displayContainer),_this81.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(e){return _this81.onAdsManagerLoaded(e);},!1),_this81.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return _this81.onAdError(e);},!1),_this81.requestAds();}),r(this,"requestAds",function(){var e=_this81.player.elements["container"];try{var _t44=new google.ima.AdsRequest();_t44.adTagUrl=_this81.tagUrl,_t44.linearAdSlotWidth=e.offsetWidth,_t44.linearAdSlotHeight=e.offsetHeight,_t44.nonLinearAdSlotWidth=e.offsetWidth,_t44.nonLinearAdSlotHeight=e.offsetHeight,_t44.forceNonLinearFullSlot=!1,_t44.setAdWillPlayMuted(!_this81.player.muted),_this81.loader.requestAds(_t44);}catch(e){_this81.onAdError(e);}}),r(this,"pollCountdown",function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;return e?void(_this81.countdownTimer=setInterval(function(){var e=Be(Math.max(_this81.manager.getRemainingTime(),0)),e=De.get("advertisement",_this81.player.config)+" - "+e;_this81.elements.container.setAttribute("data-badge-text",e);},100)):(clearInterval(_this81.countdownTimer),void _this81.elements.container.removeAttribute("data-badge-text"));}),r(this,"onAdsManagerLoaded",function(e){if(_this81.enabled){var _t45=new google.ima.AdsRenderingSettings();_t45.restoreCustomPlaybackStateOnAdBreakComplete=!0,_t45.enablePreloading=!0,_this81.manager=e.getAdsManager(_this81.player,_t45),_this81.cuePoints=_this81.manager.getCuePoints(),_this81.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return _this81.onAdError(e);}),Object.keys(google.ima.AdEvent.Type).forEach(function(e){_this81.manager.addEventListener(google.ima.AdEvent.Type[e],function(e){return _this81.onAdEvent(e);});}),_this81.trigger("loaded");}}),r(this,"addCuePoints",function(){v(_this81.cuePoints)||_this81.cuePoints.forEach(function(e){if(0!==e&&-1!==e&&e<_this81.player.duration){var _t46=_this81.player.elements.progress;if(g(_t46)){var _i27=100/_this81.player.duration*e,_s32=y("span",{"class":_this81.player.config.classNames.cues});_s32.style.left=_i27.toString()+"%",_t46.appendChild(_s32);}}});}),r(this,"onAdEvent",function(e){var t=_this81.player.elements["container"],i=e.getAd(),s=e.getAdData();switch(n=e.type,b.call(_this81.player,_this81.player.media,"ads"+n.replace(/_/g,"").toLowerCase()),e.type){case google.ima.AdEvent.Type.LOADED:_this81.trigger("loaded"),_this81.pollCountdown(!0),i.isLinear()||(i.width=t.offsetWidth,i.height=t.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:_this81.manager.setVolume(_this81.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:_this81.player.ended?_this81.loadAds():_this81.loader.contentComplete();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:_this81.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:_this81.pollCountdown(),_this81.resumeContent();break;case google.ima.AdEvent.Type.LOG:s.adError&&_this81.player.debug.warn("Non-fatal ad error: "+s.adError.getMessage());}var n;}),r(this,"onAdError",function(e){_this81.cancel(),_this81.player.debug.warn("Ads error",e);}),r(this,"listeners",function(){var e=_this81.player.elements["container"];var s;_this81.player.on("canplay",function(){_this81.addCuePoints();}),_this81.player.on("ended",function(){_this81.loader.contentComplete();}),_this81.player.on("timeupdate",function(){s=_this81.player.currentTime;}),_this81.player.on("seeked",function(){var i=_this81.player.currentTime;v(_this81.cuePoints)||_this81.cuePoints.forEach(function(e,t){s<e&&e<i&&(_this81.manager.discardAdBreak(),_this81.cuePoints.splice(t,1));});}),window.addEventListener("resize",function(){_this81.manager&&_this81.manager.resize(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL);});}),r(this,"play",function(){var e=_this81.player.elements["container"];_this81.managerPromise||_this81.resumeContent(),_this81.managerPromise.then(function(){_this81.manager.setVolume(_this81.player.volume),_this81.elements.displayContainer.initialize();try{_this81.initialized||(_this81.manager.init(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL),_this81.manager.start()),_this81.initialized=!0;}catch(e){_this81.onAdError(e);}})["catch"](function(){});}),r(this,"resumeContent",function(){_this81.elements.container.style.zIndex="",_this81.playing=!1,xe(_this81.player.media.play());}),r(this,"pauseContent",function(){_this81.elements.container.style.zIndex=3,_this81.playing=!0,_this81.player.media.pause();}),r(this,"cancel",function(){_this81.initialized&&_this81.resumeContent(),_this81.trigger("error"),_this81.loadAds();}),r(this,"loadAds",function(){_this81.managerPromise.then(function(){_this81.manager&&_this81.manager.destroy(),_this81.managerPromise=new Promise(function(e){_this81.on("loaded",e),_this81.player.debug.log(_this81.manager);}),_this81.initialized=!1,_this81.requestAds();})["catch"](function(){});}),r(this,"trigger",function(e){for(var _len4=arguments.length,t=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){t[_key4-1]=arguments[_key4];}var i=_this81.events[e];Y(i)&&i.forEach(function(e){W(e)&&e.apply(_this81,t);});}),r(this,"on",function(e,t){return Y(_this81.events[e])||(_this81.events[e]=[]),_this81.events[e].push(t),_this81;}),r(this,"startSafetyTimer",function(e,t){_this81.player.debug.log("Safety timer invoked from: "+t),_this81.safetyTimer=setTimeout(function(){_this81.cancel(),_this81.clearSafetyTimer("startSafetyTimer()");},e);}),r(this,"clearSafetyTimer",function(e){F(_this81.safetyTimer)||(_this81.player.debug.log("Safety timer cleared from: "+e),clearTimeout(_this81.safetyTimer),_this81.safetyTimer=null);}),this.player=e,this.config=e.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(function(e,t){_this81.on("loaded",e),_this81.on("error",t);}),this.load();}_createClass(at,[{key:"enabled",get:function get(){var e=this["config"];return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!v(e.publisherId)||Q(e.tagUrl));}},{key:"tagUrl",get:function get(){var e=this["config"];return Q(e.tagUrl)?e.tagUrl:"https://go.aniview.com/api/adserver6/vast/?"+We({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId});}}]);return at;}();var lt=function lt(e,t){var i={};return e>t.width/t.height?(i.width=t.width,i.height=1/e*t.width):(i.height=t.height,i.width=e*t.height),i;};var ct=/*#__PURE__*/function(){function ct(e){var _this82=this;_classCallCheck(this,ct);r(this,"load",function(){_this82.player.elements.display.seekTooltip&&(_this82.player.elements.display.seekTooltip.hidden=_this82.enabled),_this82.enabled&&_this82.getThumbnails().then(function(){_this82.enabled&&(_this82.render(),_this82.determineContainerAutoSizing(),_this82.loaded=!0);});}),r(this,"getThumbnails",function(){return new Promise(function(e){var t=_this82.player.config.previewThumbnails["src"];if(v(t))throw new Error("Missing previewThumbnails.src config attribute");var i=function i(){_this82.thumbnails.sort(function(e,t){return e.height-t.height;}),_this82.player.debug.log("Preview thumbnails",_this82.thumbnails),e();};if(W(t))t(function(e){_this82.thumbnails=e,i();});else{var _e57=(B(t)?[t]:t).map(function(e){return _this82.getThumbnail(e);});Promise.all(_e57).then(i);}});}),r(this,"getThumbnail",function(n){return new Promise(function(s){Fe(n).then(function(e){var t={frames:function(e){var t=[];return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e){var i={};e.split(/\r\n|\n|\r/).forEach(function(e){if(q(i.startTime)){if(!v(e.trim())&&v(i.text)){var _t48,_t47$1$split,_t47$1$split2;var _t47=e.trim().split("#xywh=");(_t48=_slicedToArray(_t47,1),i.text=_t48[0]),_t47[1]&&(_t47$1$split=_t47[1].split(","),_t47$1$split2=_slicedToArray(_t47$1$split,4),i.x=_t47$1$split2[0],i.y=_t47$1$split2[1],i.w=_t47$1$split2[2],i.h=_t47$1$split2[3],_t47$1$split);}}else{e=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);e&&(i.startTime=60*Number(e[1]||0)*60+60*Number(e[2])+Number(e[3])+Number("0."+e[4]),i.endTime=60*Number(e[6]||0)*60+60*Number(e[7])+Number(e[8])+Number("0."+e[9]));}}),i.text&&t.push(i);}),t;}(e),height:null,urlPrefix:""},i=(t.frames[0].text.startsWith("/")||t.frames[0].text.startsWith("http://")||t.frames[0].text.startsWith("https://")||(t.urlPrefix=n.substring(0,n.lastIndexOf("/")+1)),new Image());i.onload=function(){t.height=i.naturalHeight,t.width=i.naturalWidth,_this82.thumbnails.push(t),s();},i.src=t.urlPrefix+t.frames[0].text;});});}),r(this,"startMove",function(e){var t;_this82.loaded&&V(e)&&["touchmove","mousemove"].includes(e.type)&&_this82.player.media.duration&&("touchmove"===e.type?_this82.seekTime=_this82.player.media.duration*(_this82.player.elements.inputs.seek.value/100):(t=100/(t=_this82.player.elements.progress.getBoundingClientRect()).width*(e.pageX-t.left),_this82.seekTime=_this82.player.media.duration*(t/100),_this82.seekTime<0&&(_this82.seekTime=0),_this82.seekTime>_this82.player.media.duration-1&&(_this82.seekTime=_this82.player.media.duration-1),_this82.mousePosX=e.pageX,_this82.elements.thumb.time.innerText=Be(_this82.seekTime)),_this82.showImageAtCurrentTime());}),r(this,"endMove",function(){_this82.toggleThumbContainer(!1,!0);}),r(this,"startScrubbing",function(e){!F(e.button)&&!1!==e.button&&0!==e.button||(_this82.mouseDown=!0,_this82.player.media.duration&&(_this82.toggleScrubbingContainer(!0),_this82.toggleThumbContainer(!1,!0),_this82.showImageAtCurrentTime()));}),r(this,"endScrubbing",function(){_this82.mouseDown=!1,Math.ceil(_this82.lastTime)===Math.ceil(_this82.player.media.currentTime)?_this82.toggleScrubbingContainer(!1):we.call(_this82.player,_this82.player.media,"timeupdate",function(){_this82.mouseDown||_this82.toggleScrubbingContainer(!1);});}),r(this,"listeners",function(){_this82.player.on("play",function(){_this82.toggleThumbContainer(!1,!0);}),_this82.player.on("seeked",function(){_this82.toggleThumbContainer(!1);}),_this82.player.on("timeupdate",function(){_this82.lastTime=_this82.player.media.currentTime;});}),r(this,"render",function(){_this82.elements.thumb.container=y("div",{"class":_this82.player.config.classNames.previewThumbnails.thumbContainer}),_this82.elements.thumb.imageContainer=y("div",{"class":_this82.player.config.classNames.previewThumbnails.imageContainer}),_this82.elements.thumb.container.appendChild(_this82.elements.thumb.imageContainer);var e=y("div",{"class":_this82.player.config.classNames.previewThumbnails.timeContainer});_this82.elements.thumb.time=y("span",{},"00:00"),e.appendChild(_this82.elements.thumb.time),_this82.elements.thumb.container.appendChild(e),g(_this82.player.elements.progress)&&_this82.player.elements.progress.appendChild(_this82.elements.thumb.container),_this82.elements.scrubbing.container=y("div",{"class":_this82.player.config.classNames.previewThumbnails.scrubbingContainer}),_this82.player.elements.wrapper.appendChild(_this82.elements.scrubbing.container);}),r(this,"destroy",function(){_this82.elements.thumb.container&&_this82.elements.thumb.container.remove(),_this82.elements.scrubbing.container&&_this82.elements.scrubbing.container.remove();}),r(this,"showImageAtCurrentTime",function(){_this82.mouseDown?_this82.setScrubbingContainerSize():_this82.setThumbContainerSizeAndPos();var i=_this82.thumbnails[0].frames.findIndex(function(e){return _this82.seekTime>=e.startTime&&_this82.seekTime<=e.endTime;}),e=0<=i;var s=0;_this82.mouseDown||_this82.toggleThumbContainer(e),e&&(_this82.thumbnails.forEach(function(e,t){_this82.loadedImages.includes(e.frames[i].text)&&(s=t);}),i!==_this82.showingThumb&&(_this82.showingThumb=i,_this82.loadImage(s)));}),r(this,"loadImage",function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var t=_this82.showingThumb,i=_this82.thumbnails[e],s=i["urlPrefix"],n=i.frames[t],r=i.frames[t].text,o=s+r;if(_this82.currentImageElement&&_this82.currentImageElement.dataset.filename===r)_this82.showImage(_this82.currentImageElement,n,e,t,r,!1),_this82.currentImageElement.dataset.index=t,_this82.removeOldImages(_this82.currentImageElement);else{_this82.loadingImage&&_this82.usingSprites&&(_this82.loadingImage.onload=null);var _i28=new Image();_i28.src=o,_i28.dataset.index=t,_i28.dataset.filename=r,_this82.showingThumbFilename=r,_this82.player.debug.log("Loading image: "+o),_i28.onload=function(){return _this82.showImage(_i28,n,e,t,r,!0);},_this82.loadingImage=_i28,_this82.removeOldImages(_i28);}}),r(this,"showImage",function(e,t,i,s,n){var r=arguments.length>5&&arguments[5]!==undefined?arguments[5]:!0;_this82.player.debug.log("Showing thumb: ".concat(n,". num: ").concat(s,". qual: ").concat(i,". newimg: ")+r),_this82.setImageSizeAndOffset(e,t),r&&(_this82.currentImageContainer.appendChild(e),_this82.currentImageElement=e,_this82.loadedImages.includes(n)||_this82.loadedImages.push(n)),_this82.preloadNearby(s,!0).then(_this82.preloadNearby(s,!1)).then(_this82.getHigherQuality(i,e,t,n));}),r(this,"removeOldImages",function(i){Array.from(_this82.currentImageContainer.children).forEach(function(e){if("img"===e.tagName.toLowerCase()){var t=_this82.usingSprites?500:1e3;if(e.dataset.index!==i.dataset.index&&!e.dataset.deleting){e.dataset.deleting=!0;var _i29=_this82["currentImageContainer"];setTimeout(function(){_i29.removeChild(e),_this82.player.debug.log("Removing thumb: "+e.dataset.filename);},t);}}});}),r(this,"preloadNearby",function(t){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;return new Promise(function(r){setTimeout(function(){var n=_this82.thumbnails[0].frames[t].text;if(_this82.showingThumbFilename===n){var _e58,_s33=(_e58=i?_this82.thumbnails[0].frames.slice(t):_this82.thumbnails[0].frames.slice(0,t).reverse(),!1);_e58.forEach(function(e){var t=e.text;if(t!==n&&!_this82.loadedImages.includes(t)){_s33=!0,_this82.player.debug.log("Preloading thumb filename: "+t);var _e59=_this82.thumbnails[0]["urlPrefix"],_n18=_e59+t,_i30=new Image();_i30.src=_n18,_i30.onload=function(){_this82.player.debug.log("Preloaded thumb filename: "+t),_this82.loadedImages.includes(t)||_this82.loadedImages.push(t),r();};}}),_s33||r();}},300);});}),r(this,"getHigherQuality",function(t,i,s,n){if(t<_this82.thumbnails.length-1){var _e60=i.naturalHeight;_this82.usingSprites&&(_e60=s.h),_e60<_this82.thumbContainerHeight&&setTimeout(function(){_this82.showingThumbFilename===n&&(_this82.player.debug.log("Showing higher quality thumb for: "+n),_this82.loadImage(t+1));},300);}}),r(this,"toggleThumbContainer",function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var i=_this82.player.config.classNames.previewThumbnails.thumbContainerShown;_this82.elements.thumb.container.classList.toggle(i,e),!e&&t&&(_this82.showingThumb=null,_this82.showingThumbFilename=null);}),r(this,"toggleScrubbingContainer",function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;var t=_this82.player.config.classNames.previewThumbnails.scrubbingContainerShown;_this82.elements.scrubbing.container.classList.toggle(t,e),e||(_this82.showingThumb=null,_this82.showingThumbFilename=null);}),r(this,"determineContainerAutoSizing",function(){(20<_this82.elements.thumb.imageContainer.clientHeight||20<_this82.elements.thumb.imageContainer.clientWidth)&&(_this82.sizeSpecifiedInCSS=!0);}),r(this,"setThumbContainerSizeAndPos",function(){var e;_this82.sizeSpecifiedInCSS?20<_this82.elements.thumb.imageContainer.clientHeight&&_this82.elements.thumb.imageContainer.clientWidth<20?(e=Math.floor(_this82.elements.thumb.imageContainer.clientHeight*_this82.thumbAspectRatio),_this82.elements.thumb.imageContainer.style.width=e+"px"):_this82.elements.thumb.imageContainer.clientHeight<20&&20<_this82.elements.thumb.imageContainer.clientWidth&&(e=Math.floor(_this82.elements.thumb.imageContainer.clientWidth/_this82.thumbAspectRatio),_this82.elements.thumb.imageContainer.style.height=e+"px"):(e=Math.floor(_this82.thumbContainerHeight*_this82.thumbAspectRatio),_this82.elements.thumb.imageContainer.style.height=_this82.thumbContainerHeight+"px",_this82.elements.thumb.imageContainer.style.width=e+"px"),_this82.setThumbContainerPos();}),r(this,"setThumbContainerPos",function(){var e=_this82.player.elements.progress.getBoundingClientRect(),t=_this82.player.elements.container.getBoundingClientRect(),i=_this82.elements.thumb["container"],s=t.left-e.left+10,n=t.right-e.left-i.clientWidth-10;var r=_this82.mousePosX-e.left-i.clientWidth/2;r<s&&(r=s),r>n&&(r=n),i.style.left=r+"px";}),r(this,"setScrubbingContainerSize",function(){var _lt=lt(_this82.thumbAspectRatio,{width:_this82.player.media.clientWidth,height:_this82.player.media.clientHeight}),e=_lt.width,t=_lt.height;_this82.elements.scrubbing.container.style.width=e+"px",_this82.elements.scrubbing.container.style.height=t+"px";}),r(this,"setImageSizeAndOffset",function(e,t){var i;_this82.usingSprites&&(i=_this82.thumbContainerHeight/t.h,e.style.height=e.naturalHeight*i+"px",e.style.width=e.naturalWidth*i+"px",e.style.left="-".concat(t.x*i,"px"),e.style.top="-".concat(t.y*i,"px"));}),this.player=e,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load();}_createClass(ct,[{key:"enabled",get:function get(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled;}},{key:"currentImageContainer",get:function get(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer;}},{key:"usingSprites",get:function get(){return Object.keys(this.thumbnails[0].frames[0]).includes("w");}},{key:"thumbAspectRatio",get:function get(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height;}},{key:"thumbContainerHeight",get:function get(){var e;return this.mouseDown?(e=lt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight})["height"],e):this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4);}},{key:"currentImageElement",get:function get(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement;},set:function set(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e;}}]);return ct;}();var dt={insertElements:function insertElements(t,e){var _this83=this;B(e)?ne(t,this.media,{src:e}):Y(e)&&e.forEach(function(e){ne(t,_this83.media,e);});},change:function change(r){var _this84=this;ee(r,"sources.length")?(Oe.cancelRequests.call(this),this.destroy.call(this,function(){_this84.options.quality=[],re(_this84.media),_this84.media=null,g(_this84.elements.container)&&_this84.elements.container.removeAttribute("class");var e=r.sources,t=r.type,_e61=_slicedToArray(e,1),_e61$=_e61[0],_e61$$provider=_e61$.provider,i=_e61$$provider===void 0?Ve.html5:_e61$$provider,s=_e61$.src,n="html5"===i?t:"div",s="html5"===i?{}:{src:s};Object.assign(_this84,{provider:i,type:t,supported:ge.check(t,i,_this84.config.playsinline),media:y(n,s)}),_this84.elements.container.appendChild(_this84.media),R(r.autoplay)&&(_this84.config.autoplay=r.autoplay),_this84.isHTML5&&(_this84.config.crossorigin&&_this84.media.setAttribute("crossorigin",""),_this84.config.autoplay&&_this84.media.setAttribute("autoplay",""),v(r.poster)||(_this84.poster=r.poster),_this84.config.loop.active&&_this84.media.setAttribute("loop",""),_this84.config.muted&&_this84.media.setAttribute("muted",""),_this84.config.playsinline&&_this84.media.setAttribute("playsinline","")),T.addStyleHook.call(_this84),_this84.isHTML5&&dt.insertElements.call(_this84,"source",e),_this84.config.title=r.title,ot.setup.call(_this84),_this84.isHTML5&&Object.keys(r).includes("tracks")&&dt.insertElements.call(_this84,"track",r.tracks),(_this84.isHTML5||_this84.isEmbed&&!_this84.supported.ui)&&T.build.call(_this84),_this84.isHTML5&&_this84.media.load(),v(r.previewThumbnails)||(Object.assign(_this84.config.previewThumbnails,r.previewThumbnails),_this84.previewThumbnails&&_this84.previewThumbnails.loaded&&(_this84.previewThumbnails.destroy(),_this84.previewThumbnails=null),_this84.config.previewThumbnails.enabled&&(_this84.previewThumbnails=new ct(_this84))),_this84.fullscreen.update();},!0)):this.debug.warn("Invalid source format");}};var ut=/*#__PURE__*/function(){function ut(e,t){var _this85=this;_classCallCheck(this,ut);if(r(this,"play",function(){return W(_this85.media.play)?(_this85.ads&&_this85.ads.enabled&&_this85.ads.managerPromise.then(function(){return _this85.ads.play();})["catch"](function(){return xe(_this85.media.play());}),_this85.media.play()):null;}),r(this,"pause",function(){return _this85.playing&&W(_this85.media.pause)?_this85.media.pause():null;}),r(this,"togglePlay",function(e){return(R(e)?e:!_this85.playing)?_this85.play():_this85.pause();}),r(this,"stop",function(){_this85.isHTML5?(_this85.pause(),_this85.restart()):W(_this85.media.stop)&&_this85.media.stop();}),r(this,"restart",function(){_this85.currentTime=0;}),r(this,"rewind",function(e){_this85.currentTime-=q(e)?e:_this85.config.seekTime;}),r(this,"forward",function(e){_this85.currentTime+=q(e)?e:_this85.config.seekTime;}),r(this,"increaseVolume",function(e){var t=_this85.media.muted?0:_this85.volume;_this85.volume=t+(q(e)?e:0);}),r(this,"decreaseVolume",function(e){_this85.increaseVolume(-e);}),r(this,"airplay",function(){ge.airplay&&_this85.media.webkitShowPlaybackTargetPicker();}),r(this,"toggleControls",function(e){if(!_this85.supported.ui||_this85.isAudio)return!1;var t=de(_this85.elements.container,_this85.config.classNames.hideControls),i=a(_this85.elements.container,_this85.config.classNames.hideControls,void 0===e?void 0:!e);if(i&&Y(_this85.config.controls)&&_this85.config.controls.includes("settings")&&!v(_this85.config.settings)&&w.toggleMenu.call(_this85,!1),i!==t){var _e62=i?"controlshidden":"controlsshown";b.call(_this85,_this85.media,_e62);}return!i;}),r(this,"on",function(e,t){u.call(_this85,_this85.elements.container,e,t);}),r(this,"once",function(e,t){we.call(_this85,_this85.elements.container,e,t);}),r(this,"off",function(e,t){be(_this85.elements.container,e,t);}),r(this,"destroy",function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var i;_this85.ready&&(i=function i(){document.body.style.overflow="",_this85.embed=null,t?(Object.keys(_this85.elements).length&&(re(_this85.elements.buttons.play),re(_this85.elements.captions),re(_this85.elements.controls),re(_this85.elements.wrapper),_this85.elements.buttons.play=null,_this85.elements.captions=null,_this85.elements.controls=null,_this85.elements.wrapper=null),W(e)&&e()):(function(){this&&this.eventListeners&&(this.eventListeners.forEach(function(e){var t=e.element,i=e.type,s=e.callback,n=e.options;t.removeEventListener(i,s,n);}),this.eventListeners=[]);}.call(_this85),Oe.cancelRequests.call(_this85),ae(_this85.elements.original,_this85.elements.container),b.call(_this85,_this85.elements.original,"destroyed",!0),W(e)&&e.call(_this85.elements.original),_this85.ready=!1,setTimeout(function(){_this85.elements=null,_this85.media=null;},200));},_this85.stop(),clearTimeout(_this85.timers.loading),clearTimeout(_this85.timers.controls),clearTimeout(_this85.timers.resized),_this85.isHTML5?(T.toggleNativeControls.call(_this85,!0),i()):_this85.isYouTube?(clearInterval(_this85.timers.buffering),clearInterval(_this85.timers.playing),null!==_this85.embed&&W(_this85.embed.destroy)&&_this85.embed.destroy(),i()):_this85.isVimeo&&(null!==_this85.embed&&_this85.embed.unload().then(i),setTimeout(i,200)));}),r(this,"supports",function(e){return ge.mime.call(_this85,e);}),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=ge.touch,this.media=e,B(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||X(this.media)||Y(this.media))&&(this.media=this.media[0]),this.config=te({},Ye,ut.defaults,t||{},function(){try{return JSON.parse(_this85.media.getAttribute("data-plyr-config"));}catch(e){return{};}}()),this.elements={container:null,fullscreen:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap()},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Ue(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",ge),!F(this.media)&&g(this.media)){if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled){if(ge.check().api){var _n19=this.media.cloneNode(!0);_n19.autoplay=!1,this.elements.original=_n19;var i,s=this.media.tagName.toLowerCase();var _e63=null,_t49=null;switch(s){case"div":if(_e63=this.media.querySelector("iframe"),g(_e63)){if(_t49=Re(_e63.getAttribute("src")),this.provider=(i=_t49.toString(),/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(i)?Ve.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(i)?Ve.vimeo:null),this.elements.container=this.media,this.media=_e63,this.elements.container.className="",_t49.search.length){var _r11=["1","true"];_r11.includes(_t49.searchParams.get("autoplay"))&&(this.config.autoplay=!0),_r11.includes(_t49.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=_r11.includes(_t49.searchParams.get("playsinline")),this.config.youtube.hl=_t49.searchParams.get("hl")):this.config.playsinline=!0;}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(v(this.provider)||!Object.values(Ve).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type="video";break;case"video":case"audio":this.type=s,this.provider=Ve.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type");}this.supported=ge.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new Ze(this),this.storage=new je(this),this.media.plyr=this,g(this.elements.container)||(this.elements.container=y("div",{tabindex:0}),ie(this.media,this.elements.container)),T.migrateStyles.call(this),T.addStyleHook.call(this),ot.setup.call(this),this.config.debug&&u.call(this,this.elements.container,this.config.events.join(" "),function(e){_this85.debug.log("event: "+e.type);}),this.fullscreen=new Qe(this),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&T.build.call(this),this.listeners.container(),this.listeners.global(),this.config.ads.enabled&&(this.ads=new at(this)),this.isHTML5&&this.config.autoplay&&this.once("canplay",function(){return xe(_this85.play());}),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new ct(this))):this.debug.error("Setup failed: no support");}else this.debug.error("Setup failed: no support");}else this.debug.error("Setup failed: disabled by config");}else this.debug.error("Setup failed: no suitable element passed");}_createClass(ut,[{key:"isHTML5",get:function get(){return this.provider===Ve.html5;}},{key:"isEmbed",get:function get(){return this.isYouTube||this.isVimeo;}},{key:"isYouTube",get:function get(){return this.provider===Ve.youtube;}},{key:"isVimeo",get:function get(){return this.provider===Ve.vimeo;}},{key:"isVideo",get:function get(){return"video"===this.type;}},{key:"isAudio",get:function get(){return"audio"===this.type;}},{key:"playing",get:function get(){return Boolean(this.ready&&!this.paused&&!this.ended);}},{key:"paused",get:function get(){return Boolean(this.media.paused);}},{key:"stopped",get:function get(){return Boolean(this.paused&&0===this.currentTime);}},{key:"ended",get:function get(){return Boolean(this.media.ended);}},{key:"currentTime",get:function get(){return Number(this.media.currentTime);},set:function set(e){var t;this.duration&&(t=q(e)&&0<e,this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds")));}},{key:"buffered",get:function get(){var e=this.media["buffered"];return q(e)?e:e&&e.length&&0<this.duration?e.end(0)/this.duration:0;}},{key:"seeking",get:function get(){return Boolean(this.media.seeking);}},{key:"duration",get:function get(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,t=q(t)&&t!==1/0?t:0;return e||t;}},{key:"volume",get:function get(){return Number(this.media.volume);},set:function set(e){var _this$config2;var t=e;B(t)&&(t=Number(t)),q(t)||(t=this.storage.get("volume")),q(t)||(_this$config2=this.config,t=_this$config2.volume,_this$config2),1<t&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!v(e)&&this.muted&&0<t&&(this.muted=!1);}},{key:"muted",get:function get(){return Boolean(this.media.muted);},set:function set(e){var t=e;R(t)||(t=this.storage.get("muted")),R(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t;}},{key:"hasAudio",get:function get(){return!this.isHTML5||!!this.isAudio||Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length);}},{key:"speed",get:function get(){return Number(this.media.playbackRate);},set:function set(e){var _ref27,_ref27$,_ref27$2,_ref27$3,_this86=this;var t=null;q(e)&&(t=e),q(t)||(t=this.storage.get("speed")),q(t)||(t=this.config.speed.selected);var i,e=this.minimumSpeed,s=this.maximumSpeed;t=((_ref27=[t,e,s],_ref27$=_ref27[0],e=_ref27$===void 0?0:_ref27$,_ref27$2=_ref27[1],s=_ref27$2===void 0?0:_ref27$2,_ref27$3=_ref27[2],i=_ref27$3===void 0?255:_ref27$3),Math.min(Math.max(e,s),i)),this.config.speed.selected=t,setTimeout(function(){_this86.media.playbackRate=t;},0);}},{key:"minimumSpeed",get:function get(){return this.isYouTube?Math.min.apply(Math,_toConsumableArray(this.options.speed)):this.isVimeo?.5:.0625;}},{key:"maximumSpeed",get:function get(){return this.isYouTube?Math.max.apply(Math,_toConsumableArray(this.options.speed)):this.isVimeo?2:16;}},{key:"quality",get:function get(){return this.media.quality;},set:function set(i){var s=this.config.quality,n=this.options.quality;if(n.length){var _e64=[!v(i)&&Number(i),this.storage.get("quality"),s.selected,s["default"]].find(q),_t50=!0;if(!n.includes(_e64)){var _i31=Ee(n,_e64);this.debug.warn("Unsupported quality option: ".concat(_e64,", using ").concat(_i31," instead")),_e64=_i31,_t50=!1;}s.selected=_e64,this.media.quality=_e64,_t50&&this.storage.set({quality:_e64});}}},{key:"loop",get:function get(){return Boolean(this.media.loop);},set:function set(e){e=R(e)?e:this.config.loop.active;this.config.loop.active=e,this.media.loop=e;}},{key:"source",get:function get(){return this.media.currentSrc;},set:function set(e){dt.change.call(this,e);}},{key:"download",get:function get(){var e=this.config.urls["download"];return Q(e)?e:this.source;},set:function set(e){Q(e)&&(this.config.urls.download=e,w.setDownloadUrl.call(this));}},{key:"poster",get:function get(){return this.isVideo?this.media.getAttribute("poster")||this.media.getAttribute("data-poster"):null;},set:function set(e){this.isVideo?T.setPoster.call(this,e,!1)["catch"](function(){}):this.debug.warn("Poster can only be set for video");}},{key:"ratio",get:function get(){if(!this.isVideo)return null;var e=ke(Ae.call(this));return Y(e)?e.join(":"):e;},set:function set(e){this.isVideo?B(e)&&Ce(e)?(this.config.ratio=ke(e),Me.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video");}},{key:"autoplay",get:function get(){return Boolean(this.config.autoplay);},set:function set(e){e=R(e)?e:this.config.autoplay;this.config.autoplay=e;}},{key:"toggleCaptions",value:function toggleCaptions(e){x.toggle.call(this,e,!1);}},{key:"currentTrack",get:function get(){var _this$captions2=this.captions,e=_this$captions2.toggled,t=_this$captions2.currentTrack;return e?t:-1;},set:function set(e){x.set.call(this,e,!1);}},{key:"language",get:function get(){return(x.getCurrentTrack.call(this)||{}).language;},set:function set(e){x.setLanguage.call(this,e,!1);}},{key:"pip",get:function get(){return ge.pip?v(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Xe:null;},set:function set(e){ge.pip&&(e=R(e)?e:!this.pip,W(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(e?Xe:"inline"),W(this.media.requestPictureInPicture)&&(!this.pip&&e?this.media.requestPictureInPicture():this.pip&&!e&&document.exitPictureInPicture()));}}],[{key:"supported",value:function supported(e,t,i){return ge.check(e,t,i);}},{key:"loadSprite",value:function loadSprite(e,t){return He(e,t);}},{key:"setup",value:function setup(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var i=null;return B(e)?i=Array.from(document.querySelectorAll(e)):X(e)?i=Array.from(e):Y(e)&&(i=e.filter(g)),v(i)?null:i.map(function(e){return new ut(e,t);});}}]);return ut;}();return ut.defaults=(Je=Ye,JSON.parse(JSON.stringify(Je))),ut;});var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(l){var c=/\blang(?:uage)?-([\w-]+)\b/i,t=0,e={},$={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof z?new z(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");},type:function type(e){return Object.prototype.toString.call(e).slice(8,-1);},objId:function objId(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id;},clone:function i(e,s){var n,t;switch(s=s||{},$.util.type(e)){case"Object":if(t=$.util.objId(e),s[t])return s[t];for(var r in n={},s[t]=n,e){e.hasOwnProperty(r)&&(n[r]=i(e[r],s));}return n;case"Array":return t=$.util.objId(e),s[t]||(n=[],s[t]=n,e.forEach(function(e,t){n[t]=i(e,s);}),n);default:return e;}},getLanguage:function getLanguage(e){for(;e&&!c.test(e.className);){e=e.parentElement;}return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none";},currentScript:function currentScript(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error();}catch(e){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack)||[])[1];if(t){var i,s=document.getElementsByTagName("script");for(i in s){if(s[i].src==t)return s[i];}}return null;}},isActive:function isActive(e,t,i){for(var s="no-"+t;e;){var n=e.classList;if(n.contains(t))return!0;if(n.contains(s))return!1;e=e.parentElement;}return!!i;}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function extend(e,t){var i,s=$.util.clone($.languages[e]);for(i in t){s[i]=t[i];}return s;},insertBefore:function insertBefore(i,e,t,s){var n,r=(s=s||$.languages)[i],o={};for(n in r){if(r.hasOwnProperty(n)){if(n==e)for(var a in t){t.hasOwnProperty(a)&&(o[a]=t[a]);}t.hasOwnProperty(n)||(o[n]=r[n]);}}var l=s[i];return s[i]=o,$.languages.DFS($.languages,function(e,t){t===l&&e!=i&&(this[e]=o);}),o;},DFS:function e(t,i,s,n){n=n||{};var r,o,a,l=$.util.objId;for(r in t){t.hasOwnProperty(r)&&(i.call(t,r,t[r],s||r),o=t[r],"Object"!==(a=$.util.type(o))||n[l(o)]?"Array"!==a||n[l(o)]||(n[l(o)]=!0,e(o,i,r,n)):(n[l(o)]=!0,e(o,i,null,n)));}}},plugins:{},highlightAll:function highlightAll(e,t){$.highlightAllUnder(document,e,t);},highlightAllUnder:function highlightAllUnder(e,t,i){var s={callback:i,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};$.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),$.hooks.run("before-all-elements-highlight",s);for(var n,r=0;n=s.elements[r++];){$.highlightElement(n,!0===t,s.callback);}},highlightElement:function highlightElement(e,t,i){var s=$.util.getLanguage(e),n=$.languages[s],r=(e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+s,e.parentElement),o=(r&&"pre"===r.nodeName.toLowerCase()&&(r.className=r.className.replace(c,"").replace(/\s+/g," ")+" language-"+s),{element:e,language:s,grammar:n,code:e.textContent});function a(e){o.highlightedCode=e,$.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,$.hooks.run("after-highlight",o),$.hooks.run("complete",o),i&&i.call(o.element);}if($.hooks.run("before-sanity-check",o),(r=o.element.parentElement)&&"pre"===r.nodeName.toLowerCase()&&!r.hasAttribute("tabindex")&&r.setAttribute("tabindex","0"),!o.code)return $.hooks.run("complete",o),void(i&&i.call(o.element));$.hooks.run("before-highlight",o),o.grammar?t&&l.Worker?((s=new Worker($.filename)).onmessage=function(e){a(e.data);},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))):a($.highlight(o.code,o.grammar,o.language)):a($.util.encode(o.code));},highlight:function highlight(e,t,i){e={code:e,grammar:t,language:i};return $.hooks.run("before-tokenize",e),e.tokens=$.tokenize(e.code,e.grammar),$.hooks.run("after-tokenize",e),z.stringify($.util.encode(e.tokens),e.language);},tokenize:function tokenize(e,t){var i=t.rest;if(i){for(var s in i){t[s]=i[s];}delete t.rest;}for(var n=new d(),r=(D(n,n.head,e),function d(u,e,h,p,m,t){for(var i in h){if(h.hasOwnProperty(i)&&h[i])for(var f=h[i],f=Array.isArray(f)?f:[f],g=0;g<f.length;++g){if(t&&t.cause==i+","+g)return;var v,s=f[g],y=s.inside,b=!!s.lookbehind,w=!!s.greedy,x=s.alias;w&&!s.pattern.global&&(v=s.pattern.toString().match(/[imsuy]*$/)[0],s.pattern=RegExp(s.pattern.source,v+"g"));for(var T=s.pattern||s,n=p.next,r=m;n!==e.tail&&!(t&&r>=t.reach);r+=n.value.length,n=n.next){var o=n.value;if(e.length>u.length)return;if(!(o instanceof z)){var a,E=1;if(w){if(!(a=N(T,r,u,b)))break;var _=a.index,S=a.index+a[0].length,l=r;for(l+=n.value.length;l<=_;){l+=(n=n.next).value.length;}if(r=l-=n.value.length,n.value instanceof z)continue;for(var C=n;C!==e.tail&&(l<S||"string"==typeof C.value);C=C.next){E++,l+=C.value.length;}E--,o=u.slice(r,l),a.index-=r;}else if(!(a=N(T,0,o,b)))continue;for(var _=a.index,k=a[0],c=o.slice(0,_),A=o.slice(_+k.length),o=r+o.length,M=(t&&o>t.reach&&(t.reach=o),n.prev),P=(c&&(M=D(e,M,c),r+=c.length),L=I=O=c=P=void 0,e),c=M,O=E,I=c.next,L=0;L<O&&I!==P.tail;L++){I=I.next;}(c.next=I).prev=c,P.length-=L;n=D(e,M,new z(i,y?$.tokenize(k,y):k,x,k));A&&D(e,n,A),1<E&&(d(u,e,h,n.prev,r,c={cause:i+","+g,reach:o}),t&&c.reach>t.reach&&(t.reach=c.reach));}}}}}(e,n,t,n.head,0),n),o=[],a=r.head.next;a!==r.tail;){o.push(a.value),a=a.next;}return o;},hooks:{all:{},add:function add(e,t){var i=$.hooks.all;i[e]=i[e]||[],i[e].push(t);},run:function run(e,t){var i=$.hooks.all[e];if(i&&i.length)for(var s,n=0;s=i[n++];){s(t);}}},Token:z};function z(e,t,i,s){this.type=e,this.content=t,this.alias=i,this.length=0|(s||"").length;}function N(e,t,i,s){e.lastIndex=t;t=e.exec(i);return t&&s&&t[1]&&(e=t[1].length,t.index+=e,t[0]=t[0].slice(e)),t;}function d(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0;}function D(e,t,i){var s=t.next,i={value:i,prev:t,next:s};return t.next=i,s.prev=i,e.length++,i;}if(l.Prism=$,z.stringify=function t(e,i){if("string"==typeof e)return e;var s;if(Array.isArray(e))return s="",e.forEach(function(e){s+=t(e,i);}),s;var n,r={type:e.type,content:t(e.content,i),tag:"span",classes:["token",e.type],attributes:{},language:i},e=e.alias,o=(e&&(Array.isArray(e)?Array.prototype.push.apply(r.classes,e):r.classes.push(e)),$.hooks.run("wrap",r),"");for(n in r.attributes){o+=" "+n+'="'+(r.attributes[n]||"").replace(/"/g,"&quot;")+'"';}return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+o+">"+r.content+"</"+r.tag+">";},!l.document)return l.addEventListener&&($.disableWorkerMessageHandler||l.addEventListener("message",function(e){var e=JSON.parse(e.data),t=e.language,i=e.code,e=e.immediateClose;l.postMessage($.highlight(i,$.languages[t],t)),e&&l.close();},!1)),$;var i,e=$.util.currentScript();function s(){$.manual||$.highlightAll();}return e&&($.filename=e.src,e.hasAttribute("data-manual")&&($.manual=!0)),$.manual||("loading"===(i=document.readyState)||"interactive"===i&&e&&e.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)),$;}(_self),$jscomp=( true&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?\]\]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"));}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function value(e,t){var i={},i=(i["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},i.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}}),t=(i["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]},{});t[e]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return e;}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",t);}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function value(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+e+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}});}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,t=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{"function":/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,"function":{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"));}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],"function":/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript,function(p){function m(e,t){return"___"+e.toUpperCase()+t+"___";}Object.defineProperties(p.languages["markup-templating"]={},{buildPlaceholders:{value:function value(s,n,e,r){var o;s.language===n&&(o=s.tokenStack=[],s.code=s.code.replace(e,function(e){if("function"==typeof r&&!r(e))return e;for(var t,i=o.length;-1!==s.code.indexOf(t=m(n,i));){++i;}return o[i]=e,t;}),s.grammar=p.languages.markup);}},tokenizePlaceholders:{value:function value(c,d){var u,h;c.language===d&&c.tokenStack&&(c.grammar=p.languages[d],u=0,h=Object.keys(c.tokenStack),function e(t){for(var i=0;i<t.length&&!(u>=h.length);i++){var s,n,r,o,a,l=t[i];"string"==typeof l||l.content&&"string"==typeof l.content?(s=h[u],r=c.tokenStack[s],o="string"==typeof l?l:l.content,s=m(d,s),-1<(a=o.indexOf(s))&&(++u,n=o.substring(0,a),r=new p.Token(d,p.tokenize(r,c.grammar),"language-"+d,r),o=o.substring(a+s.length),a=[],n&&a.push.apply(a,e([n])),a.push(r),o&&a.push.apply(a,e([o])),"string"==typeof l?t.splice.apply(t,[i,1].concat(a)):l.content=a)):l.content&&e(l.content);}return t;}(c.tokens));}}});}(Prism),function(t){var e=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,i=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],s=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,n=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,r=/[{}\[\](),:;]/,o=(t.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:e,variable:/\$+(?:\w+\b|(?=\{))/i,"package":{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:null|false)\b/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:i,"function":{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:s,operator:n,punctuation:r},{pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:t.languages.php}),o=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:o}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:o}}];t.languages.insertBefore("php","variable",{string:o,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:e,string:o,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:i,number:s,operator:n,punctuation:r}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),t.hooks.add("before-tokenize",function(e){/<\?/.test(e.code)&&t.languages["markup-templating"].buildPlaceholders(e,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi);}),t.hooks.add("after-tokenize",function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"php");});}(Prism),function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var t=/\$[-\w]+|#\{\$[-\w]+\}/,i=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:t,operator:i}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:i,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}});}(Prism),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|with|show|hide)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},"boolean":/\b(?:true|false)\b/,"null":{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss,function(e){"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(function(){return function s(n,r,o){function a(i,e){if(!r[i]){if(!n[i]){var t="function"==typeof require&&require;if(!e&&t)return require(i,!0);if(l)return l(i,!0);e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e;}t=r[i]={exports:{}};n[i][0].call(t.exports,function(e){var t=n[i][1][e];return a(t||e);},t,t.exports,s,n,r,o);}return r[i].exports;}for(var l="function"==typeof require&&require,e=0;e<o.length;e++){a(o[e]);}return a;}({1:[function(e,_,S){!function(){var c,u,h,r,p,m,s,l,t,n,a,y=this||Function("return this")(),d=function(){"use strict";function n(){}function r(e,t){for(var i in e){Object.hasOwnProperty.call(e,i)&&t(i);}}function o(t,i){return r(i,function(e){t[e]=i[e];}),t;}function l(t,i){r(i,function(e){void 0===t[e]&&(t[e]=i[e]);});}function u(e,t,i,s,n,r,o){var a,l,c=e<r?0:(e-r)/n;for(a in t){t.hasOwnProperty(a)&&(l=o[a],l="function"==typeof l?l:g[l],t[a]=d(i[a],s[a],l,c));}return t;}function d(e,t,i,s){return e+(t-e)*i(s);}function h(t,i){var s=e.prototype.filter,n=t._filterArgs;r(s,function(e){void 0!==s[e][i]&&s[e][i].apply(t,n);});}function a(e,t,i,s,n,r,o,a,l,c,d){m=t+i+s,p=Math.min(d||f(),m),v=m<=p,m=s-(m-p),e.isPlaying()&&(v?(l(o,e._attachment,m),e.stop(!0)):(e._scheduleId=c(e._timeoutHandler,1e3/60),h(e,"beforeTween"),p<t+i?u(1,n,r,o,1,1,a):u(p,n,r,o,s,t+i,a),h(e,"afterTween"),l(n,e._attachment,m)));}function c(e,t){var i={},s=_typeof(t);return r(e,"string"==s||"function"==s?function(e){i[e]=t;}:function(e){i[e]||(i[e]=t[e]||"linear");}),i;}function e(e,t){this._currentState=e||{},this._configured=!1,this._scheduleFunction=i,void 0!==t&&this.setConfig(t);}var g,p,v,m,t=Date.now||function(){return+new Date();},f="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:t,i="undefined"!=typeof window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame)||setTimeout;return e.prototype.tween=function(e){return this._isTweening?this:(void 0===e&&this._configured||this.setConfig(e),this._timestamp=f(),this._start(this.get(),this._attachment),this.resume());},e.prototype.setConfig=function(e){e=e||{},this._configured=!0,this._attachment=e.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=e.delay||0,this._start=e.start||n,this._step=e.step||n,this._finish=e.finish||n,this._duration=e.duration||500,this._currentState=o({},e.from)||this.get(),this._originalState=this.get(),this._targetState=o({},e.to)||this.get();var t=this,i=(this._timeoutHandler=function(){a(t,t._timestamp,t._delay,t._duration,t._currentState,t._originalState,t._targetState,t._easing,t._step,t._scheduleFunction);},this._currentState),s=this._targetState;return l(s,i),this._easing=c(i,e.easing||"linear"),this._filterArgs=[i,this._originalState,s,this._easing],h(this,"tweenCreated"),this;},e.prototype.get=function(){return o({},this._currentState);},e.prototype.set=function(e){this._currentState=e;},e.prototype.pause=function(){return this._pausedAtTime=f(),this._isPaused=!0,this;},e.prototype.resume=function(){return this._isPaused&&(this._timestamp+=f()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this;},e.prototype.seek=function(e){e=Math.max(e,0);var t=f();return this._timestamp+e===0||(this._timestamp=t-e,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,a(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,t),this.pause())),this;},e.prototype.stop=function(e){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=n,(y.cancelAnimationFrame||y.webkitCancelAnimationFrame||y.oCancelAnimationFrame||y.msCancelAnimationFrame||y.mozCancelRequestAnimationFrame||y.clearTimeout)(this._scheduleId),e&&(h(this,"beforeTween"),u(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),h(this,"afterTween"),h(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this;},e.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused;},e.prototype.setScheduleFunction=function(e){this._scheduleFunction=e;},e.prototype.dispose=function(){for(var e in this){this.hasOwnProperty(e)&&delete this[e];}},e.prototype.filter={},g=e.prototype.formula={linear:function linear(e){return e;}},o(e,{now:f,each:r,tweenProps:u,tweenProp:d,applyFilter:h,shallowCopy:o,defaults:l,composeEasingObject:c}),"function"==typeof SHIFTY_DEBUG_NOW&&(y.timeoutHandler=a),"object"==_typeof(S)?_.exports=e:void 0===y.Tweenable&&(y.Tweenable=e),e;}();function o(i){c.each(i,function(e){var t=i[e];"string"==typeof t&&t.match(s)&&(i[e]=g(s,t,f));});}function f(e){return 3===(e=(e=e).replace(/#/,"")).length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t[0]=i(e.substr(0,2)),t[1]=i(e.substr(2,2)),t[2]=i(e.substr(4,2)),"rgb("+t[0]+","+t[1]+","+t[2]+")";}function i(e){return parseInt(e,16);}function g(e,t,i){var s=t.match(e),n=t.replace(e,l);if(s)for(var r,o=s.length,a=0;a<o;a++){r=s.shift(),n=n.replace(l,i(r));}return n;}function v(e){for(var t=e.match(r),i=t.length,s=e.match(m)[0],n=0;n<i;n++){s+=parseInt(t[n],10)+",";}return s.slice(0,-1)+")";}function b(n){var r={};return c.each(n,function(e){var t,i,s=n[e];"string"==typeof s&&(t=T(s),r[e]={formatString:((i=(s=s).match(h))?1!==i.length&&!s[0].match(u)||i.unshift(""):i=["",""],i.join(l)),chunkNames:function(e,t){for(var i=[],s=e.length,n=0;n<s;n++){i.push("_"+t+"_"+n);}return i;}(t,e)});}),r;}function w(n,r){c.each(r,function(e){for(var t=T(n[e]),i=t.length,s=0;s<i;s++){n[r[e].chunkNames[s]]=+t[s];}delete n[e];});}function x(i,s){c.each(s,function(e){i[e];var t=function(e,t){n.length=0;for(var i=t.length,s=0;s<i;s++){n.push(e[t[s]]);}return n;}(function(e,t){for(var i,s={},n=t.length,r=0;r<n;r++){i=t[r],s[i]=e[i],delete e[i];}return s;}(i,s[e].chunkNames),s[e].chunkNames),t=function(e,t){for(var i=e,s=t.length,n=0;n<s;n++){i=i.replace(l,+t[n].toFixed(4));}return i;}(s[e].formatString,t);i[e]=g(p,t,v);});}function T(e){return e.match(r);}function E(r,e,t,i,o,a){function l(e){return((d*e+u)*e+h)*e;}function c(e){return 0<=e?e:0-e;}var d=0,u=0,h=0,p=0,s=0,n=0,d=1-(h=3*e)-(u=3*(i-e)-h),p=1-(n=3*t)-(s=3*(o-t)-n);return i=function(e,t){var i,s,n,r,o,a;for(n=e,a=0;a<8;a++){if(c(r=l(n)-e)<t)return n;if(c(o=function(e){return(3*d*e+2*u)*e+h;}(n))<1e-6)break;n-=r/o;}if(s=1,(i=0)>(n=e))return i;if(s<n)return s;for(;i<s;){if(c((r=l(n))-e)<t)return n;r<e?i=n:s=n,n=.5*(s-i)+i;}return n;}(i=r,1/(200*a)),((p*i+s)*i+n)*i;}d.shallowCopy(d.prototype.formula,{easeInQuad:function easeInQuad(e){return Math.pow(e,2);},easeOutQuad:function easeOutQuad(e){return-(Math.pow(e-1,2)-1);},easeInOutQuad:function easeInOutQuad(e){return(e/=.5)<1?.5*Math.pow(e,2):-.5*((e-=2)*e-2);},easeInCubic:function easeInCubic(e){return Math.pow(e,3);},easeOutCubic:function easeOutCubic(e){return Math.pow(e-1,3)+1;},easeInOutCubic:function easeInOutCubic(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2);},easeInQuart:function easeInQuart(e){return Math.pow(e,4);},easeOutQuart:function easeOutQuart(e){return-(Math.pow(e-1,4)-1);},easeInOutQuart:function easeInOutQuart(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2);},easeInQuint:function easeInQuint(e){return Math.pow(e,5);},easeOutQuint:function easeOutQuint(e){return Math.pow(e-1,5)+1;},easeInOutQuint:function easeInOutQuint(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2);},easeInSine:function easeInSine(e){return 1-Math.cos(e*(Math.PI/2));},easeOutSine:function easeOutSine(e){return Math.sin(e*(Math.PI/2));},easeInOutSine:function easeInOutSine(e){return-.5*(Math.cos(Math.PI*e)-1);},easeInExpo:function easeInExpo(e){return 0===e?0:Math.pow(2,10*(e-1));},easeOutExpo:function easeOutExpo(e){return 1===e?1:1-Math.pow(2,-10*e);},easeInOutExpo:function easeInOutExpo(e){return 0===e?0:1===e?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*--e));},easeInCirc:function easeInCirc(e){return-(Math.sqrt(1-e*e)-1);},easeOutCirc:function easeOutCirc(e){return Math.sqrt(1-Math.pow(e-1,2));},easeInOutCirc:function easeInOutCirc(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1);},easeOutBounce:function easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375;},easeInBack:function easeInBack(e){return e*e*(2.70158*e-1.70158);},easeOutBack:function easeOutBack(e){return--e*e*(2.70158*e+1.70158)+1;},easeInOutBack:function easeInOutBack(e){var t=1.70158;return(e/=.5)<1?e*e*((1+(t*=1.525))*e-t)*.5:.5*((e-=2)*e*((1+(t*=1.525))*e+t)+2);},elastic:function elastic(e){return-1*Math.pow(4,-8*e)*Math.sin((6*e-1)*(2*Math.PI)/2)+1;},swingFromTo:function swingFromTo(e){var t=1.70158;return(e/=.5)<1?e*e*((1+(t*=1.525))*e-t)*.5:.5*((e-=2)*e*((1+(t*=1.525))*e+t)+2);},swingFrom:function swingFrom(e){return e*e*(2.70158*e-1.70158);},swingTo:function swingTo(e){return--e*e*(2.70158*e+1.70158)+1;},bounce:function bounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375;},bouncePast:function bouncePast(e){return e<1/2.75?7.5625*e*e:e<2/2.75?2-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?2-(7.5625*(e-=2.25/2.75)*e+.9375):2-(7.5625*(e-=2.625/2.75)*e+.984375);},easeFromTo:function easeFromTo(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2);},easeFrom:function easeFrom(e){return Math.pow(e,4);},easeTo:function easeTo(e){return Math.pow(e,.25);}}),d.setBezierFunction=function(e,t,i,s,n){r=t,o=i,a=s,l=n;var r,o,a,l,c=function c(e){return E(e,r,o,a,l,1);};return c.displayName=e,c.x1=t,c.y1=i,c.x2=s,c.y2=n,d.prototype.formula[e]=c;},d.unsetBezierFunction=function(e){delete d.prototype.formula[e];},(a=new d())._filterArgs=[],d.interpolate=function(e,t,i,s,n){var r=d.shallowCopy({},e),n=n||0,s=d.composeEasingObject(e,s||"linear"),o=(a.set({}),a._filterArgs),o=(o.length=0,o[0]=r,o[1]=e,o[2]=t,o[3]=s,d.applyFilter(a,"tweenCreated"),d.applyFilter(a,"beforeTween"),d.tweenProps(i,r,e,t,1,n,s));return d.applyFilter(a,"afterTween"),o;},c=d,u=/(\d|\-|\.)/,h=/([^\-0-9\.]+)/g,r=/[0-9.\-]+/g,p=new RegExp("rgb\\("+r.source+/,\s*/.source+r.source+/,\s*/.source+r.source+"\\)","g"),m=/^.*\(/,s=/#([0-9]|[a-f]){3,6}/gi,l="VAL",t=[],n=[],c.prototype.filter.token={tweenCreated:function tweenCreated(e,t,i,s){o(e),o(t),o(i),this._tokenData=b(e);},beforeTween:function beforeTween(e,t,i,s){var a,l;a=s,l=this._tokenData,c.each(l,function(e){var t=l[e].chunkNames,i=t.length,s=a[e];if("string"==typeof s)for(var n=s.split(" "),r=n[n.length-1],o=0;o<i;o++){a[t[o]]=n[o]||r;}else for(o=0;o<i;o++){a[t[o]]=s;}delete a[e];}),w(e,this._tokenData),w(t,this._tokenData),w(i,this._tokenData);},afterTween:function afterTween(e,t,i,s){var o,a;x(e,this._tokenData),x(t,this._tokenData),x(i,this._tokenData),o=s,a=this._tokenData,c.each(a,function(e){var t=a[e].chunkNames,i=t.length,s=o[t[0]];if("string"==typeof s){for(var n="",r=0;r<i;r++){n+=" "+o[t[r]],delete o[t[r]];}o[e]=n.substr(1);}else o[e]=s;});}};}.call(null);},{}],2:[function(e,t,i){function s(e,t){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,n.apply(this,arguments);}var n=e("./shape"),r=e("./utils");((s.prototype=new n()).constructor=s).prototype._pathString=function(e){var t=e.strokeWidth,e=50-(t=e.trailWidth&&e.trailWidth>e.strokeWidth?e.trailWidth:t)/2;return r.render(this._pathTemplate,{radius:e,"2radius":2*e});},s.prototype._trailString=function(e){return this._pathString(e);},t.exports=s;},{"./shape":7,"./utils":8}],3:[function(e,t,i){function s(e,t){this._pathTemplate="M 0,{center} L 100,{center}",n.apply(this,arguments);}var n=e("./shape"),r=e("./utils");((s.prototype=new n()).constructor=s).prototype._initializeSvg=function(e,t){e.setAttribute("viewBox","0 0 100 "+t.strokeWidth),e.setAttribute("preserveAspectRatio","none");},s.prototype._pathString=function(e){return r.render(this._pathTemplate,{center:e.strokeWidth/2});},s.prototype._trailString=function(e){return this._pathString(e);},t.exports=s;},{"./shape":7,"./utils":8}],4:[function(e,t,i){t.exports={Line:e("./line"),Circle:e("./circle"),SemiCircle:e("./semicircle"),Path:e("./path"),Shape:e("./shape"),utils:e("./utils")};},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./utils":8}],5:[function(e,t,i){function s(e,t){if(!(this instanceof s))throw new Error("Constructor was called without new keyword");t=l.extend({duration:800,easing:"linear",from:{},to:{},step:function step(){}},t),e=l.isString(e)?document.querySelector(e):e,this.path=e,this._opts=t,this._tweenable=null,e=this.path.getTotalLength(),this.path.style.strokeDasharray=e+" "+e,this.set(0);}var a=e("shifty"),l=e("./utils"),n={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"};s.prototype.value=function(){var e=this._getComputedDashOffset(),t=this.path.getTotalLength();return parseFloat((1-e/t).toFixed(6),10);},s.prototype.set=function(e){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(e);var t,i=this._opts.step;l.isFunction(i)&&(t=this._easing(this._opts.easing),i(this._calculateTo(e,t),this._opts.shape||this,this._opts.attachment));},s.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset();},s.prototype.animate=function(e,i,t){i=i||{},l.isFunction(i)&&(t=i,i={});var s=l.extend({},i),n=l.extend({},this._opts),n=(i=l.extend(n,i),this._easing(i.easing)),s=this._resolveFromAndTo(e,n,s),r=(this.stop(),this.path.getBoundingClientRect(),this._getComputedDashOffset()),e=this._progressToOffset(e),o=this;this._tweenable=new a(),this._tweenable.tween({from:l.extend({offset:r},s.from),to:l.extend({offset:e},s.to),duration:i.duration,easing:n,step:function step(e){o.path.style.strokeDashoffset=e.offset;var t=i.shape||o;i.step(e,t,i.attachment);},finish:function finish(e){l.isFunction(t)&&t();}});},s.prototype._getComputedDashOffset=function(){var e=window.getComputedStyle(this.path,null);return parseFloat(e.getPropertyValue("stroke-dashoffset"),10);},s.prototype._progressToOffset=function(e){var t=this.path.getTotalLength();return t-e*t;},s.prototype._resolveFromAndTo=function(e,t,i){return i.from&&i.to?{from:i.from,to:i.to}:{from:this._calculateFrom(t),to:this._calculateTo(e,t)};},s.prototype._calculateFrom=function(e){return a.interpolate(this._opts.from,this._opts.to,this.value(),e);},s.prototype._calculateTo=function(e,t){return a.interpolate(this._opts.from,this._opts.to,e,t);},s.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable=null);},s.prototype._easing=function(e){return n.hasOwnProperty(e)?n[e]:e;},t.exports=s;},{"./utils":8,shifty:1}],6:[function(e,t,i){function s(e,t){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,n.apply(this,arguments);}var n=e("./shape"),r=e("./circle"),o=e("./utils");((s.prototype=new n()).constructor=s).prototype._initializeSvg=function(e,t){e.setAttribute("viewBox","0 0 100 50");},s.prototype._initializeTextContainer=function(e,t,i){e.text.style&&(i.style.top="auto",i.style.bottom="0",e.text.alignToBottom?o.setStyle(i,"transform","translate(-50%, 0)"):o.setStyle(i,"transform","translate(-50%, 50%)"));},s.prototype._pathString=r.prototype._pathString,s.prototype._trailString=r.prototype._trailString,t.exports=s;},{"./circle":2,"./shape":7,"./utils":8}],7:[function(e,t,i){function n(e,t){if(!(this instanceof n))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=o.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},t,!0),o.isObject(t)&&void 0!==t.svgStyle&&(this._opts.svgStyle=t.svgStyle),o.isObject(t)&&o.isObject(t.text)&&void 0!==t.text.style&&(this._opts.text.style=t.text.style);var i=this._createSvgView(this._opts),s=o.isString(e)?document.querySelector(e):e;if(!s)throw new Error("Container does not exist: "+e);this._container=s,this._container.appendChild(i.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&o.setStyles(i.svg,this._opts.svgStyle),this.svg=i.svg,this.path=i.path,this.trail=i.trail,this.text=null;s=o.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new r(i.path,s),o.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value);}}var r=e("./path"),o=e("./utils"),s="Object is destroyed";n.prototype.animate=function(e,t,i){if(null===this._progressPath)throw new Error(s);this._progressPath.animate(e,t,i);},n.prototype.stop=function(){if(null===this._progressPath)throw new Error(s);void 0!==this._progressPath&&this._progressPath.stop();},n.prototype.destroy=function(){if(null===this._progressPath)throw new Error(s);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,(this._progressPath=null)!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null);},n.prototype.set=function(e){if(null===this._progressPath)throw new Error(s);this._progressPath.set(e);},n.prototype.value=function(){if(null===this._progressPath)throw new Error(s);return void 0===this._progressPath?0:this._progressPath.value();},n.prototype.setText=function(e){if(null===this._progressPath)throw new Error(s);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),o.isObject(e)?(o.removeChildren(this.text),this.text.appendChild(e)):this.text.innerHTML=e;},n.prototype._createSvgView=function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=(this._initializeSvg(t,e),null),e=((e.trailColor||e.trailWidth)&&(i=this._createTrail(e),t.appendChild(i)),this._createPath(e));return t.appendChild(e),{svg:t,path:e,trail:i};},n.prototype._initializeSvg=function(e,t){e.setAttribute("viewBox","0 0 100 100");},n.prototype._createPath=function(e){var t=this._pathString(e);return this._createPathElement(t,e);},n.prototype._createTrail=function(e){var t=this._trailString(e),e=o.extend({},e);return e.trailColor||(e.trailColor="#eee"),e.trailWidth||(e.trailWidth=e.strokeWidth),e.color=e.trailColor,e.strokeWidth=e.trailWidth,e.fill=null,this._createPathElement(t,e);},n.prototype._createPathElement=function(e,t){var i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d",e),i.setAttribute("stroke",t.color),i.setAttribute("stroke-width",t.strokeWidth),t.fill?i.setAttribute("fill",t.fill):i.setAttribute("fill-opacity","0"),i;},n.prototype._createTextContainer=function(e,t){var i=document.createElement("div"),s=(i.className=e.text.className,e.text.style);return s&&(e.text.autoStyleContainer&&(t.style.position="relative"),o.setStyles(i,s),s.color||(i.style.color=e.color)),this._initializeTextContainer(e,t,i),i;},n.prototype._initializeTextContainer=function(e,t,i){},n.prototype._pathString=function(e){throw new Error("Override this function for each progress bar");},n.prototype._trailString=function(e){throw new Error("Override this function for each progress bar");},n.prototype._warnContainerAspectRatio=function(e){var t,i,s;this.containerAspectRatio&&(t=window.getComputedStyle(e,null),i=parseFloat(t.getPropertyValue("width"),10),s=parseFloat(t.getPropertyValue("height"),10),o.floatEquals(this.containerAspectRatio,i/s)||(console.warn("Incorrect aspect ratio of container","#"+e.id,"detected:",t.getPropertyValue("width")+"(width)","/",t.getPropertyValue("height")+"(height)","=",i/s),console.warn("Aspect ratio of should be",this.containerAspectRatio)));},t.exports=n;},{"./path":5,"./utils":8}],8:[function(e,t,i){function s(e,t,i){for(var s=e.style,n=0;n<o.length;++n){s[o[n]+r(t)]=i;}s[t]=i;}function r(e){return e.charAt(0).toUpperCase()+e.slice(1);}function a(e){return"[object Array]"!==Object.prototype.toString.call(e)&&"object"==_typeof(e)&&!!e;}function n(e,t){for(var i in e){e.hasOwnProperty(i)&&t(e[i],i);}}var o="Webkit Moz O ms".split(" ");t.exports={extend:function e(t,i,s){for(var n in t=t||{},s=s||!1,i=i||{}){var r,o;i.hasOwnProperty(n)&&(r=t[n],o=i[n],s&&a(r)&&a(o)?t[n]=e(r,o,s):t[n]=o);}return t;},render:function render(e,t){var i,s,n,r=e;for(i in t){t.hasOwnProperty(i)&&(s=t[i],n=new RegExp("\\{"+i+"\\}","g"),r=r.replace(n,s));}return r;},setStyle:s,setStyles:function setStyles(i,e){n(e,function(e,t){null!=e&&(a(e)&&!0===e.prefix?s(i,t,e.value):i.style[t]=e);});},capitalize:r,isString:function isString(e){return"string"==typeof e||e instanceof String;},isFunction:function isFunction(e){return"function"==typeof e;},isObject:a,forEachObject:n,floatEquals:function floatEquals(e,t){return Math.abs(e-t)<.001;},removeChildren:function removeChildren(e){for(;e.firstChild;){e.removeChild(e.firstChild);}}};},{}]},{},[4])(4);}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}("undefined"!=typeof window?window:global,function(){function u(s,t){var E=Object.create(u.prototype),r=0,_=0,o=0,S=0,C=[],k=!0,n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60);},a=null,l=!1;try{var e=Object.defineProperty({},"passive",{get:function get(){l=!0;}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e);}catch(e){}var c=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,d=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t,i=["Webkit","Moz","ms"];for(t in i){if(void 0!==e.style[i[t]+"Transform"])return i[t]+"Transform";}}return"transform";}();if(E.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function callback(){}},t&&Object.keys(t).forEach(function(e){E.options[e]=t[e];}),t&&t.breakpoints&&function(){if(3===E.options.breakpoints.length&&Array.isArray(E.options.breakpoints)){var t,i=!0,s=!0;if(E.options.breakpoints.forEach(function(e){"number"!=typeof e&&(s=!1),null!==t&&e<t&&(i=!1),t=e;}),i&&s)return;}E.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");}(),0<(e="string"==typeof(s=s||".rellax")?document.querySelectorAll(s):[s]).length){var A=function A(){for(var e=0;e<C.length;e++){E.elems[e].style.cssText=C[e].style;}for(C=[],_=window.innerHeight,S=window.innerWidth,e=E.options.breakpoints,M=S<e[0]?"xs":S>=e[0]&&S<e[1]?"sm":S>=e[1]&&S<e[2]?"md":"lg",P(),e=0;e<E.elems.length;e++){var t=void 0,i=E.elems[e],s=i.getAttribute("data-rellax-percentage"),n=i.getAttribute("data-rellax-speed"),r=i.getAttribute("data-rellax-xs-speed"),o=i.getAttribute("data-rellax-mobile-speed"),a=i.getAttribute("data-rellax-tablet-speed"),l=i.getAttribute("data-rellax-desktop-speed"),d=i.getAttribute("data-rellax-vertical-speed"),u=i.getAttribute("data-rellax-horizontal-speed"),h=i.getAttribute("data-rellax-vertical-scroll-axis"),p=i.getAttribute("data-rellax-horizontal-scroll-axis"),m=i.getAttribute("data-rellax-zindex")||0,f=i.getAttribute("data-rellax-min"),g=i.getAttribute("data-rellax-max"),v=i.getAttribute("data-rellax-min-x"),y=i.getAttribute("data-rellax-max-x"),b=i.getAttribute("data-rellax-min-y"),w=i.getAttribute("data-rellax-max-y"),c=!0,x=(r||o||a||l?t={xs:r,sm:o,md:a,lg:l}:c=!1,r=E.options.wrapper?E.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,E.options.relativeToWrapper&&(r=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-E.options.wrapper.offsetTop),E.options.vertical&&(s||E.options.center)?r:0),T=E.options.horizontal&&(s||E.options.center)?E.options.wrapper?E.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,r=x+i.getBoundingClientRect().top,o=i.clientHeight||i.offsetHeight||i.scrollHeight,a=T+i.getBoundingClientRect().left,l=i.clientWidth||i.offsetWidth||i.scrollWidth,x=s||(x-r+_)/(o+_),s=s||(T-a+S)/(l+S);E.options.center&&(x=s=.5),t=c&&null!==t[M]?Number(t[M]):n||E.options.speed,d=d||E.options.verticalSpeed,u=u||E.options.horizontalSpeed,h=h||E.options.verticalScrollAxis,p=p||E.options.horizontalScrollAxis,n=O(s,x,t,d,u),i=i.style.cssText,c="",(s=/transform\s*:/i.exec(i))&&(c=(s=(c=i.slice(s.index)).indexOf(";"))?" "+c.slice(11,s).replace(/\s/g,""):" "+c.slice(11).replace(/\s/g,"")),C.push({baseX:n.x,baseY:n.y,top:r,left:a,height:o,width:l,speed:t,verticalSpeed:d,horizontalSpeed:u,verticalScrollAxis:h,horizontalScrollAxis:p,style:i,transform:c,zindex:m,min:f,max:g,minX:v,maxX:y,minY:b,maxY:w});}L(),k&&(window.addEventListener("resize",A),k=!1,I());};if(E.elems=e,E.options.wrapper&&!E.options.wrapper.nodeType){if(!(e=document.querySelector(E.options.wrapper)))return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");E.options.wrapper=e;}var M,P=function P(){var e=r,t=o;return r=E.options.wrapper?E.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,o=E.options.wrapper?E.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,!!(e!=(r=E.options.relativeToWrapper?((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-E.options.wrapper.offsetTop:r)&&E.options.vertical||t!=o&&E.options.horizontal);},O=function O(e,t,i,s,n){var r={};return e=100*(n||i)*(1-e),t=100*(s||i)*(1-t),r.x=E.options.round?Math.round(e):Math.round(100*e)/100,r.y=E.options.round?Math.round(t):Math.round(100*t)/100,r;},i=function i(){window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i),(E.options.wrapper||window).removeEventListener("scroll",i),(E.options.wrapper||document).removeEventListener("touchmove",i),a=n(I);},I=function I(){P()&&!1===k?(L(),a=n(I)):(a=null,window.addEventListener("resize",i),window.addEventListener("orientationchange",i),(E.options.wrapper||window).addEventListener("scroll",i,!!l&&{passive:!0}),(E.options.wrapper||document).addEventListener("touchmove",i,!!l&&{passive:!0}));},L=function L(){for(var e=0;e<E.elems.length;e++){var t=C[e].verticalScrollAxis.toLowerCase(),i=C[e].horizontalScrollAxis.toLowerCase(),s=-1!=t.indexOf("x")?r:0,t=-1!=t.indexOf("y")?r:0,n=-1!=i.indexOf("x")?o:0,i=-1!=i.indexOf("y")?o:0;i=(s=O((s+n-C[e].left+S)/(C[e].width+S),(t+i-C[e].top+_)/(C[e].height+_),C[e].speed,C[e].verticalSpeed,C[e].horizontalSpeed)).y-C[e].baseY,t=s.x-C[e].baseX,null!==C[e].min&&(E.options.vertical&&!E.options.horizontal&&(i=i<=C[e].min?C[e].min:i),E.options.horizontal&&!E.options.vertical&&(t=t<=C[e].min?C[e].min:t)),null!=C[e].minY&&(i=i<=C[e].minY?C[e].minY:i),null!=C[e].minX&&(t=t<=C[e].minX?C[e].minX:t),null!==C[e].max&&(E.options.vertical&&!E.options.horizontal&&(i=i>=C[e].max?C[e].max:i),E.options.horizontal&&!E.options.vertical&&(t=t>=C[e].max?C[e].max:t)),null!=C[e].maxY&&(i=i>=C[e].maxY?C[e].maxY:i),null!=C[e].maxX&&(t=t>=C[e].maxX?C[e].maxX:t),E.elems[e].style[d]="translate3d("+(E.options.horizontal?t:"0")+"px,"+(E.options.vertical?i:"0")+"px,"+C[e].zindex+"px) "+C[e].transform;}E.options.callback(s);};return E.destroy=function(){for(var e=0;e<E.elems.length;e++){E.elems[e].style.cssText=C[e].style;}k||(window.removeEventListener("resize",A),k=!0),c(a),a=null;},A(),E.refresh=A,E;}console.warn("Rellax: The elements you're trying to select don't exist.");}return u;}),function(e,t){"use strict";function i(e,t){var i={animation:"animated fadeIn",speed:2e3,separator:",",hoverStop:!1,clickChange:!1,loopCount:"infinite",autoRun:!0,onInit:!1,onChange:!1,onComplete:!1};if(this.options="object"==_typeof(t)?function(e,t){for(var i in t){t.hasOwnProperty(i)&&(e[i]=t[i]);}return e;}(i,t):i,void 0===e)throw new Error('ReplaceMe [constructor]: "element" parameter is required');if("object"==_typeof(e))this.element=e;else{if("string"!=typeof e)throw new Error('ReplaceMe [constructor]: wrong "element" parameter');this.element=document.querySelector(e);}this.init();}i.prototype.init=function(){"function"==typeof this.options.onInit&&this.options.onInit(),this.words=this.escapeHTML(this.element.innerHTML).split(this.options.separator),this.count=this.words.length,this.position=this.loopCount=0,this.running=!1,this.bindAll(),!0===this.options.autoRun&&this.start();},i.prototype.bindAll=function(){!0===this.options.hoverStop&&(this.element.addEventListener("mouseover",this.pause.bind(this)),this.element.addEventListener("mouseout",this.start.bind(this))),!0===this.options.clickChange&&this.element.addEventListener("click",this.change.bind(this));},i.prototype.changeAnimation=function(){this.change(),this.loop=setTimeout(this.changeAnimation.bind(this),this.options.speed);},i.prototype.start=function(){!0!==this.running&&(this.running=!0,this.changeWord(this.words[this.position]),this.position++),this.loop=setTimeout(this.changeAnimation.bind(this),this.options.speed);},i.prototype.change=function(){return this.position>this.count-1&&(this.position=0,this.loopCount++,this.loopCount>=this.options.loopCount)?void this.stop():(this.changeWord(this.words[this.position]),this.position++,void("function"==typeof this.options.onChange&&this.options.onChange()));},i.prototype.stop=function(){this.running=!1,this.position=this.loopCount=0,this.pause(),"function"==typeof this.options.onComplete&&this.options.onComplete();},i.prototype.pause=function(){clearTimeout(this.loop);},i.prototype.changeWord=function(e){this.element.innerHTML='<span class="'+this.options.animation+'" style="display:inline-block;">'+e+"</span>";},i.prototype.escapeHTML=function(e){var t=/<\/?\w+\s*[^>]*>/g;return!0===t.test(e)?e.replace(t,""):e;},e.ReplaceMe=i,"function"==typeof t&&t.fn.extend({ReplaceMe:function ReplaceMe(e){return this.each(function(){new i(this,e);});}});}(window,window.jQuery),$jscomp||{}),$jscomp$lookupPolyfilledValue=($jscomp.scope={},$jscomp.arrayIteratorImpl=function(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0};};},$jscomp.arrayIterator=function(e){return{next:$jscomp.arrayIteratorImpl(e)};},$jscomp.ASSUME_ES5=!1,$jscomp.ASSUME_NO_NATIVE_MAP=!1,$jscomp.ASSUME_NO_NATIVE_SET=!1,$jscomp.SIMPLE_FROUND_POLYFILL=!1,$jscomp.ISOLATE_POLYFILLS=!1,$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){return e==Array.prototype||e==Object.prototype||(e[t]=i.value),e;},$jscomp.getGlobal=function(e){e=["object"==(typeof globalThis==="undefined"?"undefined":_typeof(globalThis))&&globalThis,e,"object"==(typeof window==="undefined"?"undefined":_typeof(window))&&window,"object"==(typeof self==="undefined"?"undefined":_typeof(self))&&self,"object"==(typeof global==="undefined"?"undefined":_typeof(global))&&global];for(var t=0;t<e.length;++t){var i=e[t];if(i&&i.Math==Math)return i;}throw Error("Cannot find global object");},$jscomp.global=$jscomp.getGlobal(this),$jscomp.IS_SYMBOL_NATIVE="function"==typeof Symbol&&"symbol"==_typeof(Symbol("x")),$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE,$jscomp.polyfills={},$jscomp.propertyToPolyfillSymbol={},$jscomp.POLYFILL_PREFIX="$jscp$",function(e,t){var i=$jscomp.propertyToPolyfillSymbol[t];return null!=i&&void 0!==(i=e[i])?i:e[t];}),scrollCue=($jscomp.polyfill=function(e,t,i,s){t&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(e,t,i,s):$jscomp.polyfillUnisolated(e,t,i,s));},$jscomp.polyfillUnisolated=function(e,t,i,s){for(i=$jscomp.global,e=e.split("."),s=0;s<e.length-1;s++){var n=e[s];n in i||(i[n]={}),i=i[n];}(t=t(s=i[e=e[e.length-1]]))!=s&&null!=t&&$jscomp.defineProperty(i,e,{configurable:!0,writable:!0,value:t});},$jscomp.polyfillIsolated=function(e,t,i,s){var n=e.split(".");e=1===n.length,s=n[0],s=!e&&s in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var r=0;r<n.length-1;r++){var o=n[r];o in s||(s[o]={}),s=s[o];}n=n[n.length-1],null!=(t=t(i=$jscomp.IS_SYMBOL_NATIVE&&"es6"===i?s[n]:null))&&(e?$jscomp.defineProperty($jscomp.polyfills,n,{configurable:!0,writable:!0,value:t}):t!==i&&($jscomp.propertyToPolyfillSymbol[n]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(n):$jscomp.POLYFILL_PREFIX+n,n=$jscomp.propertyToPolyfillSymbol[n],$jscomp.defineProperty(s,n,{configurable:!0,writable:!0,value:t})));},$jscomp.initSymbol=function(){},$jscomp.polyfill("Symbol",function(e){if(e)return e;function t(e,t){this.$jscomp$symbol$id_=e,$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:t});}function i(e){if(this instanceof i)throw new TypeError("Symbol is not a constructor");return new t("jscomp_symbol_"+(e||"")+"_"+s++,e);}t.prototype.toString=function(){return this.$jscomp$symbol$id_;};var s=0;return i;},"es6","es3"),$jscomp.initSymbolIterator=function(){},$jscomp.polyfill("Symbol.iterator",function(e){if(e)return e;e=Symbol("Symbol.iterator");for(var t="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),i=0;i<t.length;i++){var s=$jscomp.global[t[i]];"function"==typeof s&&"function"!=typeof s.prototype[e]&&$jscomp.defineProperty(s.prototype,e,{configurable:!0,writable:!0,value:function value(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));}});}return e;},"es6","es3"),$jscomp.initSymbolAsyncIterator=function(){},$jscomp.iteratorPrototype=function(e){return(e={next:e})[Symbol.iterator]=function(){return this;},e;},$jscomp.iteratorFromArray=function(t,i){t instanceof String&&(t+="");var s=0,n={next:function next(){var e;return s<t.length?(e=s++,{value:i(e,t[e]),done:!1}):(n.next=function(){return{done:!0,value:void 0};},n.next());}};return n[Symbol.iterator]=function(){return n;},n;},$jscomp.polyfill("Array.prototype.keys",function(e){return e||function(){return $jscomp.iteratorFromArray(this,function(e){return e;});};},"es6","es3"),function(){var r,n,o,a={},s=0,l=!0,c=!0,d=!1,t=!1,i={duration:600,interval:-.7,percentage:.75,enable:!0,docSlider:!1,pageChangeReset:!1},a={setEvents:function setEvents(e){function t(){l&&(requestAnimationFrame(function(){l=!0,c&&(a.setQuery(),a.runQuery());}),l=!1);}if(c&&!e&&window.addEventListener("load",a.runQuery),window.addEventListener("scroll",t),d){e=docSlider.getElements().pages;for(var i=0;i<e.length;i++){e[i].addEventListener("scroll",function(e){return docSlider.getCurrentIndex()+""===(e=e.target.getAttribute("data-ds-index"))&&void(docSlider._getWheelEnable()&&t());});}}window.addEventListener("resize",function(){0<s&&clearTimeout(s),s=setTimeout(function(){c&&(a.searchElements(),a.setQuery(),a.runQuery());},200);});},setOptions:function setOptions(t,i){var s={};if(void 0!==t)return Object.keys(t).forEach(function(e){"[object Object]"===Object.prototype.toString.call(t[e])?s[e]=a.setOptions(t[e],i[e]):(s[e]=t[e],void 0!==i&&void 0!==i[e]&&(s[e]=i[e]));}),s;},searchElements:function searchElements(){r=[];for(var e=document.querySelectorAll("[data-cues]:not([data-disabled])"),t=0;t<e.length;t++){for(var i=e[t],s=0;s<i.children.length;s++){var n=i.children[s];a.setAttrPtoC(n,"data-cue",i,"data-cues",""),a.setAttrPtoC(n,"data-duration",i,"data-duration",!1),a.setAttrPtoC(n,"data-interval",i,"data-interval",!1),a.setAttrPtoC(n,"data-sort",i,"data-sort",!1),a.setAttrPtoC(n,"data-addClass",i,"data-addClass",!1),a.setAttrPtoC(n,"data-group",i,"data-group",!1),a.setAttrPtoC(n,"data-delay",i,"data-delay",!1);}i.setAttribute("data-disabled","true");}for(e=document.querySelectorAll('[data-cue]:not([data-show="true"])'),t=0;t<e.length;t++){i=e[t],r.push({elm:i,cue:a.getAttr(i,"data-cue","fadeIn"),duration:Number(a.getAttr(i,"data-duration",o.duration)),interval:Number(a.getAttr(i,"data-interval",o.interval)),order:a.getOrderNumber(i),sort:a.getAttr(i,"data-sort",null),addClass:a.getAttr(i,"data-addClass",null),group:a.getAttr(i,"data-group",null),delay:Number(a.getAttr(i,"data-delay",0))});}if(d)for(e=docSlider.getElements().pages.length,t=0;t<e;t++){for(i=document.querySelectorAll('[data-ds-index="'+t+'"] [data-cue]:not([data-scpage])'),s=0;s<i.length;s++){i[s].setAttribute("data-scpage",t);}}},sortElements:function sortElements(){for(var e=arguments[0],r=[].slice.call(arguments).slice(1),t={$jscomp$loop$prop$i$4:0};t.$jscomp$loop$prop$i$4<r.length;(t={$jscomp$loop$prop$i$4:t.$jscomp$loop$prop$i$4}).$jscomp$loop$prop$i$4++){e.sort(function(n){return function(e,t){var i=void 0===r[n.$jscomp$loop$prop$i$4][1]||r[n.$jscomp$loop$prop$i$4][1],s=r[n.$jscomp$loop$prop$i$4][0];return e[s]>t[s]?i?1:-1:e[s]<t[s]?i?-1:1:0;};}(t));}},randElements:function randElements(e){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s;}return e;},setDurationValue:function setDurationValue(e,t,i){return void 0===t?e:(t=t.duration,(e=-1===(i+"").indexOf(".")?e+t+i:e+t+t*i)<0?0:e);},getOrderNumber:function getOrderNumber(e){return e.hasAttribute("data-order")?0<=(e=Number(e.getAttribute("data-order")))?e:Math.pow(2,53)-1+e:Math.pow(2,52)-1;},setAttrPtoC:function setAttrPtoC(e,t,i,s,n){i.hasAttribute(s)?e.hasAttribute(t)||e.setAttribute(t,i.getAttribute(s)):!1!==n&&e.setAttribute(t,n);},getAttr:function getAttr(e,t,i){return e.hasAttribute(t)?e.getAttribute(t):i;},getOffsetTop:function getOffsetTop(e){return e.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop);},setClassNames:function setClassNames(e,t){if(t){t=t.split(" ");for(var i=0;i<t.length;i++){e.classList.add(t[i]);}}},setQuery:function setQuery(){n={};for(var e=0;e<r.length;e++){var t=r[e],i=t.group||"$"+a.getOffsetTop(t.elm);if(!t.elm.hasAttribute("data-show")){if(d){var s=t.elm.getAttribute("data-scpage");if(s!==docSlider.getCurrentIndex()+""&&null!==s)continue;}void 0===n[i]&&(n[i]=[]),n[i].push(t);}}},runQuery:function runQuery(){for(var e=Object.keys(n),t={},i=0;i<e.length;t={$jscomp$loop$prop$elms$6:t.$jscomp$loop$prop$elms$6,$jscomp$loop$prop$interval$7:t.$jscomp$loop$prop$interval$7},i++){if(t.$jscomp$loop$prop$elms$6=n[e[i]],a.isElementIn(t.$jscomp$loop$prop$elms$6[0].elm)){"reverse"===t.$jscomp$loop$prop$elms$6[0].sort?t.$jscomp$loop$prop$elms$6.reverse():"random"===t.$jscomp$loop$prop$elms$6[0].sort&&a.randElements(t.$jscomp$loop$prop$elms$6),a.sortElements(t.$jscomp$loop$prop$elms$6,["order"]);for(var s=t.$jscomp$loop$prop$interval$7=0;s<t.$jscomp$loop$prop$elms$6.length;s++){!function(t){return function(e){t.$jscomp$loop$prop$elms$6[e].elm.setAttribute("data-show","true"),a.setClassNames(t.$jscomp$loop$prop$elms$6[e].elm,t.$jscomp$loop$prop$elms$6[e].addClass),t.$jscomp$loop$prop$interval$7=a.setDurationValue(t.$jscomp$loop$prop$interval$7,t.$jscomp$loop$prop$elms$6[e-1],t.$jscomp$loop$prop$elms$6[e].interval),t.$jscomp$loop$prop$elms$6[e].elm.style.animationName=t.$jscomp$loop$prop$elms$6[e].cue,t.$jscomp$loop$prop$elms$6[e].elm.style.animationDuration=t.$jscomp$loop$prop$elms$6[e].duration+"ms",t.$jscomp$loop$prop$elms$6[e].elm.style.animationTimingFunction="ease",t.$jscomp$loop$prop$elms$6[e].elm.style.animationDelay=t.$jscomp$loop$prop$interval$7+t.$jscomp$loop$prop$elms$6[e].delay+"ms",t.$jscomp$loop$prop$elms$6[e].elm.style.animationDirection="normal",t.$jscomp$loop$prop$elms$6[e].elm.style.animationFillMode="both";};}(t)(s);}delete n[e[i]];}}},isElementIn:function isElementIn(e){var t=e.hasAttribute("data-scpage")?a.isScrollEndWithDocSlider:a.isScrollEnd;return window.pageYOffset>a.getOffsetTop(e)-window.innerHeight*o.percentage||t();},isScrollEnd:function isScrollEnd(){var e=window.document.documentElement;return(window.document.body.scrollTop||e.scrollTop)>=e.scrollHeight-e.clientHeight;},isScrollEndWithDocSlider:function isScrollEndWithDocSlider(){var e=docSlider.getCurrentPage();return e.scrollTop>=e.scrollHeight-e.clientHeight;}};return{init:function init(e){o=a.setOptions(i,e),c=o.enable,d=o.docSlider,t=o.pageChangeReset,d||(a.setEvents(),a.searchElements(),a.setQuery());},update:function update(){c&&(a.searchElements(),a.setQuery(),a.runQuery());},enable:function enable(e){c=void 0===e?!c:e,scrollCue.update();},_hasDocSlider:function _hasDocSlider(){return d;},_hasPageChangeReset:function _hasPageChangeReset(){return t;},_initWithDocSlider:function _initWithDocSlider(e){a.setEvents(e),a.searchElements(),a.setQuery();},_updateWithDocSlider:function _updateWithDocSlider(){c&&(a.setQuery(),a.runQuery());},_searchElements:function _searchElements(){a.searchElements();}};}());function polyfill(){var e,s,a,l,i,t,c=window,d=document;function u(e,t){this.scrollLeft=e,this.scrollTop=t;}function n(e){if(null===e||"object"!=_typeof(e)||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==_typeof(e)&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.");}function o(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0;}function h(e,t){e=c.getComputedStyle(e,null)["overflow"+t];return"auto"===e||"scroll"===e;}function p(e){for(;e!==d.body&&!1===(i=void 0,i=o(t=e,"Y")&&h(t,"Y"),t=o(t,"X")&&h(t,"X"),i||t);){e=e.parentNode||e.host;}var t,i;return e;}function m(e){var t,i=(l()-e.startTime)/s;i=i=1<i?1:i,i=.5*(1-Math.cos(Math.PI*i)),t=e.startX+(e.x-e.startX)*i,i=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,t,i),t===e.x&&i===e.y||c.requestAnimationFrame(m.bind(c,e));}function r(e,t,i){var s,n,r,o=l(),e=e===d.body?(n=(s=c).scrollX||c.pageXOffset,r=c.scrollY||c.pageYOffset,a.scroll):(n=(s=e).scrollLeft,r=e.scrollTop,u);m({scrollable:s,method:e,startTime:o,startX:n,startY:r,x:t,y:i});}"scrollBehavior"in d.documentElement.style&&!0!==c.__forceSmoothScrollPolyfill__||(e=c.HTMLElement||c.Element,s=468,a={scroll:c.scroll||c.scrollTo,scrollBy:c.scrollBy,elementScroll:e.prototype.scroll||u,scrollIntoView:e.prototype.scrollIntoView},l=c.performance&&c.performance.now?c.performance.now.bind(c.performance):Date.now,t=c.navigator.userAgent,i=new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0,c.scroll=c.scrollTo=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?r.call(c,d.body,void 0!==arguments[0].left?~~arguments[0].left:c.scrollX||c.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:c.scrollY||c.pageYOffset):a.scroll.call(c,void 0!==arguments[0].left?arguments[0].left:"object"!=_typeof(arguments[0])?arguments[0]:c.scrollX||c.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:c.scrollY||c.pageYOffset));},c.scrollBy=function(){void 0!==arguments[0]&&(n(arguments[0])?a.scrollBy.call(c,void 0!==arguments[0].left?arguments[0].left:"object"!=_typeof(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):r.call(c,d.body,~~arguments[0].left+(c.scrollX||c.pageXOffset),~~arguments[0].top+(c.scrollY||c.pageYOffset)));},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==n(arguments[0])){var e=arguments[0].left,t=arguments[0].top;r.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t);}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=_typeof(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop));},e.prototype.scrollIntoView=function(){var e,t,i;!0!==n(arguments[0])?(t=(e=p(this)).getBoundingClientRect(),i=this.getBoundingClientRect(),e!==d.body?(r.call(this,e,e.scrollLeft+i.left-t.left,e.scrollTop+i.top-t.top),"fixed"!==c.getComputedStyle(e).position&&c.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):c.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);});}"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill(),function(a,h){var t,n,p="createElement",E="getElementsByTagName",y="length",_="style",m="title",f="undefined",b="setAttribute",S="getAttribute",w=null,g="__svgInject",C="--inject-",k=new RegExp(C+"\\d+","g"),A="LOAD_FAIL",M="SVG_INVALID",P=["src","alt","onload","onerror"],O=h[p]("a"),I=(typeof SVGRect==="undefined"?"undefined":_typeof(SVGRect))!=f,c={useCache:!0,copyAttributes:!0,makeIdsUnique:!0},L={clipPath:["clip-path"],"color-profile":w,cursor:w,filter:w,linearGradient:["fill","stroke"],marker:["marker","marker-end","marker-mid","marker-start"],mask:w,pattern:["fill","stroke"],radialGradient:["fill","stroke"]},$=1,d=2,z=1;function N(e){return(t=t||new XMLSerializer()).serializeToString(e);}function D(d,u){var h,e,t,i=C+z++,p=/url\("?#([a-zA-Z][\w:.-]*)"?\)/g,s=d.querySelectorAll("[id]"),n=u?[]:w,m={},r=[],f=!1;if(s[y]){for(c=0;c<s[y];c++){(e=s[c].localName)in L&&(m[e]=1);}for(e in m){(L[e]||[e]).forEach(function(e){r.indexOf(e)<0&&r.push(e);});}r[y]&&r.push(_);for(var g,o,a,v=d[E]("*"),l=d,c=-1;l!=w;){if(l.localName==_)(a=(o=l.textContent)&&o.replace(p,function(e,t){return n&&(n[t]=1),"url(#"+t+i+")";}))!==o&&(l.textContent=a);else if(l.hasAttributes()){for(t=0;t<r[y];t++){g=r[t],(a=(o=l[S](g))&&o.replace(p,function(e,t){return n&&(n[t]=1),"url(#"+t+i+")";}))!==o&&l[b](g,a);}["xlink:href","href"].forEach(function(e){var t=l[S](e);/^\s*#/.test(t)&&(t=t.trim(),l[b](e,t+i),n&&(n[t.substring(1)]=1));});}l=v[++c];}for(c=0;c<s[y];c++){h=s[c],n&&!n[h.id]||(h.id+=i,f=!0);}}return f;}function j(e,t,i,s){if(t){t[b]("data-inject-url",i);i=e.parentNode;if(i){if(s.copyAttributes){var n=e;var r=t;for(var o,d=n.attributes,a=0;a<d[y];a++){var l,c,u=(o=d[a]).name;-1==P.indexOf(u)&&(o=o.value,u==m?((c=r.firstElementChild)&&c.localName.toLowerCase()==m?l=c:(l=h[p+"NS"]("http://www.w3.org/2000/svg",m),r.insertBefore(l,c)),l.textContent=o):r[b](u,o));}}n=s.beforeInject,t=n&&n(e,t)||t,i=(i.replaceChild(t,e),e[g]=$,x(e),s.afterInject);i&&i(e,t);}}else F(e,s);}function u(){for(var e={},t=arguments,i=0;i<t[y];i++){var s,n=t[i];for(s in n){n.hasOwnProperty(s)&&(e[s]=n[s]);}}return e;}function v(e,t){if(t){var i;try{s=e,i=(n=n||new DOMParser()).parseFromString(s,"text/xml");}catch(e){return w;}return i[E]("parsererror")[y]?w:i.documentElement;}var s,t=h.createElement("div");return t.innerHTML=e,t.firstElementChild;}function x(e){e.removeAttribute("onload");}function s(e){console.error("SVGInject: "+e);}function i(e,t,i){e[g]=d,i.onFail?i.onFail(e,t):s(t);}function F(e,t){x(e),i(e,M,t);}function H(e,t){x(e),i(e,"SVG_NOT_SUPPORTED",t);}function T(e,t){i(e,A,t);}function q(e){e.onload=w,e.onerror=w;}function B(){s("no img element");}var e=function e(t,i){var s,n,r=u(c,i),m={};function o(o,a){a=u(r,a);function e(t){function e(){var e=a.onAllFinish;e&&e(),t&&t();}if(o&&_typeof(o[y])!=f){var i=0,s=o[y];if(0==s)e();else{var _n20=function _n20(){++i==s&&e();};for(var r=0;r<s;r++){l(o[r],a,_n20);}}}else l(o,a,e);}return(typeof Promise==="undefined"?"undefined":_typeof(Promise))==f?e():new Promise(e);}function l(r,o,e){if(r){var t=r[g];if(t)Array.isArray(t)?t.push(e):e();else{var _a7=function _a7(){e(),i.forEach(function(e){e();});};var _n21=function _n21(t){c&&(m[l].forEach(function(e){e(t);}),m[l]=t);};if(q(r),!I)return H(r,o),e(),0;t=o.beforeLoad,t=t&&t(r)||r[S]("src");if(!t)return""===t&&T(r,o),e(),0;var i=[],l=(r[g]=i,O.href=t,O.href),c=o.useCache,d=o.makeIdsUnique;if(c){var _u=function _u(e){var t,i,s,n;e===A?T(r,o):e===M?F(r,o):(i=e[0],s=e[1],n=e[2],d&&(i===w?(i=D(t=v(s,!1),!1),e[0]=i,e[2]=i&&N(t)):i&&(s=n.replace(k,C+z++))),t=t||v(s,!1),j(r,t,l,o)),_a7();};if(_typeof(t=m[l])!=f)return t.isCallbackQueue?t.push(_u):_u(t),0;(t=[]).isCallbackQueue=!0,m[l]=t;}h=function h(e,t){var i,e=e instanceof Document?e.documentElement:v(t,!0),s=o.afterLoad;!s||(s=s(e,t)||e)&&(t=(i="string"==typeof s)?s:N(e),e=i?v(s,!0):s),e instanceof SVGElement?(i=w,d&&(i=D(e,!1)),c&&(s=i&&N(e),_n21([i,t,s])),j(r,e,l,o)):(F(r,o),_n21(M)),_a7();},p=function p(){T(r,o),_n21(A),_a7();},(t=l)&&((s=new XMLHttpRequest()).onreadystatechange=function(){var e;4==s.readyState&&(200==(e=s.status)?h(s.responseXML,s.responseText.trim()):(400<=e||0==e)&&p());},s.open("GET",t,!0),s.send());}}else B();var h,p,s;}return I&&(i='img[onload^="'+t+'("]{visibility:hidden;}',(n=h[E]("head")[0])&&((s=h[p](_)).type="text/css",s.appendChild(h.createTextNode(i)),n.appendChild(s))),o.setOptions=function(e){r=u(r,e);},o.create=e,o.err=function(e,t){e?e[g]!=d&&(q(e),I?(x(e),T(e,r)):H(e,r),t&&(x(e),e.src=t)):B();},a[t]=o;}("SVGInject");"object"==( false?undefined:_typeof(module))&&"object"==_typeof(module.exports)&&(module.exports=e);}(window,document),function(e,t){"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){"use strict";function r(e){return null!==e&&"object"==_typeof(e)&&"constructor"in e&&e.constructor===Object;}function a(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};Object.keys(i).forEach(function(e){void 0===t[e]?t[e]=i[e]:r(i[e])&&r(t[e])&&0<Object.keys(i[e]).length&&a(t[e],i[e]);});}var t={body:{},addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){},activeElement:{blur:function blur(){},nodeName:""},querySelector:function querySelector(){return null;},querySelectorAll:function querySelectorAll(){return[];},getElementById:function getElementById(){return null;},createEvent:function createEvent(){return{initEvent:function initEvent(){}};},createElement:function createElement(){return{children:[],childNodes:[],style:{},setAttribute:function setAttribute(){},getElementsByTagName:function getElementsByTagName(){return[];}};},createElementNS:function createElementNS(){return{};},importNode:function importNode(){return null;},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function T(){var e="undefined"!=typeof document?document:{};return a(e,t),e;}var i={document:t,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function replaceState(){},pushState:function pushState(){},go:function go(){},back:function back(){}},CustomEvent:function CustomEvent(){return this;},addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){},getComputedStyle:function getComputedStyle(){return{getPropertyValue:function getPropertyValue(){return"";}};},Image:function Image(){},Date:function Date(){},screen:{},setTimeout:function setTimeout(){},clearTimeout:function clearTimeout(){},matchMedia:function matchMedia(){return{};},requestAnimationFrame:function requestAnimationFrame(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0);},cancelAnimationFrame:function cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e);}};function P(){var e="undefined"!=typeof window?window:{};return a(e,i),e;}var o=/*#__PURE__*/function(_Array){_inherits(o,_Array);var _super13=_createSuper(o);function o(e){var _this87;_classCallCheck(this,o);_this87=_super13.call.apply(_super13,[this].concat(_toConsumableArray(e||[])));{var _t51=(e=_assertThisInitialized(_this87)).__proto__;return _possibleConstructorReturn(_this87,void Object.defineProperty(e,"__proto__",{get:function get(){return _t51;},set:function set(e){_t51.__proto__=e;}}));}return _this87;}return _createClass(o);}(/*#__PURE__*/_wrapNativeSuper(Array));function l(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var t=[];return e.forEach(function(e){Array.isArray(e)?t.push.apply(t,_toConsumableArray(l(e))):t.push(e);}),t;}function c(e,t){return Array.prototype.filter.call(e,t);}function O(e,t){var i=P(),s=T();var n=[];if(!t&&e instanceof o)return e;if(!e)return new o(n);if("string"==typeof e){var _i32=e.trim();if(0<=_i32.indexOf("<")&&0<=_i32.indexOf(">")){var _e65="div";0===_i32.indexOf("<li")&&(_e65="ul"),0===_i32.indexOf("<tr")&&(_e65="tbody"),0!==_i32.indexOf("<td")&&0!==_i32.indexOf("<th")||(_e65="tr"),0===_i32.indexOf("<tbody")&&(_e65="table"),0===_i32.indexOf("<option")&&(_e65="select");var _t52=s.createElement(_e65);_t52.innerHTML=_i32;for(var _e66=0;_e66<_t52.childNodes.length;_e66+=1){n.push(_t52.childNodes[_e66]);}}else n=function(e,t){if("string"!=typeof e)return[e];var i=[],s=t.querySelectorAll(e);for(var _e67=0;_e67<s.length;_e67+=1){i.push(s[_e67]);}return i;}(e.trim(),t||s);}else if(e.nodeType||e===i||e===s)n.push(e);else if(Array.isArray(e)){if(e instanceof o)return e;n=e;}return new o(function(t){var i=[];for(var _e68=0;_e68<t.length;_e68+=1){-1===i.indexOf(t[_e68])&&i.push(t[_e68]);}return i;}(n));}O.fn=o.prototype;var d={addClass:function addClass(){for(var _len5=arguments.length,e=new Array(_len5),_key5=0;_key5<_len5;_key5++){e[_key5]=arguments[_key5];}var t=l(e.map(function(e){return e.split(" ");}));return this.forEach(function(e){var _e$classList;(_e$classList=e.classList).add.apply(_e$classList,_toConsumableArray(t));}),this;},removeClass:function removeClass(){for(var _len6=arguments.length,e=new Array(_len6),_key6=0;_key6<_len6;_key6++){e[_key6]=arguments[_key6];}var t=l(e.map(function(e){return e.split(" ");}));return this.forEach(function(e){var _e$classList2;(_e$classList2=e.classList).remove.apply(_e$classList2,_toConsumableArray(t));}),this;},hasClass:function hasClass(){for(var _len7=arguments.length,e=new Array(_len7),_key7=0;_key7<_len7;_key7++){e[_key7]=arguments[_key7];}var i=l(e.map(function(e){return e.split(" ");}));return 0<c(this,function(t){return 0<i.filter(function(e){return t.classList.contains(e);}).length;}).length;},toggleClass:function toggleClass(){for(var _len8=arguments.length,e=new Array(_len8),_key8=0;_key8<_len8;_key8++){e[_key8]=arguments[_key8];}var i=l(e.map(function(e){return e.split(" ");}));this.forEach(function(t){i.forEach(function(e){t.classList.toggle(e);});});},attr:function attr(t,i){if(1===arguments.length&&"string"==typeof t)return this[0]?this[0].getAttribute(t):void 0;for(var _e69=0;_e69<this.length;_e69+=1){if(2===arguments.length)this[_e69].setAttribute(t,i);else for(var _i33 in t){this[_e69][_i33]=t[_i33],this[_e69].setAttribute(_i33,t[_i33]);}}return this;},removeAttr:function removeAttr(t){for(var _e70=0;_e70<this.length;_e70+=1){this[_e70].removeAttribute(t);}return this;},transform:function transform(t){for(var _e71=0;_e71<this.length;_e71+=1){this[_e71].style.transform=t;}return this;},transition:function transition(t){for(var _e72=0;_e72<this.length;_e72+=1){this[_e72].style.transitionDuration="string"!=typeof t?t+"ms":t;}return this;},on:function on(){for(var _len9=arguments.length,t=new Array(_len9),_key9=0;_key9<_len9;_key9++){t[_key9]=arguments[_key9];}var i=t[0],s=t[1],n=t[2],r=t[3];function o(t){var e=t.target;if(e){var _i34=t.target.dom7EventData||[];if(_i34.indexOf(t)<0&&_i34.unshift(t),O(e).is(s))n.apply(e,_i34);else{var _t53=O(e).parents();for(var _e73=0;_e73<_t53.length;_e73+=1){O(_t53[_e73]).is(s)&&n.apply(_t53[_e73],_i34);}}}}function a(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t);}"function"==typeof t[1]&&((i=t[0],n=t[1],r=t[2]),s=void 0),r=r||!1;var l=i.split(" ");var c;for(var _e74=0;_e74<this.length;_e74+=1){var _i35=this[_e74];if(s)for(c=0;c<l.length;c+=1){var _t54=l[c];_i35.dom7LiveListeners||(_i35.dom7LiveListeners={}),_i35.dom7LiveListeners[_t54]||(_i35.dom7LiveListeners[_t54]=[]),_i35.dom7LiveListeners[_t54].push({listener:n,proxyListener:o}),_i35.addEventListener(_t54,o,r);}else for(c=0;c<l.length;c+=1){var _t55=l[c];_i35.dom7Listeners||(_i35.dom7Listeners={}),_i35.dom7Listeners[_t55]||(_i35.dom7Listeners[_t55]=[]),_i35.dom7Listeners[_t55].push({listener:n,proxyListener:a}),_i35.addEventListener(_t55,a,r);}}return this;},off:function off(){for(var _len10=arguments.length,e=new Array(_len10),_key10=0;_key10<_len10;_key10++){e[_key10]=arguments[_key10];}var i=e[0],s=e[1],n=e[2],r=e[3];"function"==typeof e[1]&&((i=e[0],n=e[1],r=e[2]),s=void 0),r=r||!1;var o=i.split(" ");for(var _e75=0;_e75<o.length;_e75+=1){var _i36=o[_e75];for(var _e76=0;_e76<this.length;_e76+=1){var _o7=this[_e76];var _t56=void 0;if(!s&&_o7.dom7Listeners?_t56=_o7.dom7Listeners[_i36]:s&&_o7.dom7LiveListeners&&(_t56=_o7.dom7LiveListeners[_i36]),_t56&&_t56.length)for(var _e77=_t56.length-1;0<=_e77;--_e77){var _s34=_t56[_e77];!(n&&_s34.listener===n||n&&_s34.listener&&_s34.listener.dom7proxy&&_s34.listener.dom7proxy===n)&&n||(_o7.removeEventListener(_i36,_s34.proxyListener,r),_t56.splice(_e77,1));}}}return this;},trigger:function trigger(){for(var _len11=arguments.length,t=new Array(_len11),_key11=0;_key11<_len11;_key11++){t[_key11]=arguments[_key11];}var i=P(),s=t[0].split(" "),n=t[1];for(var _e78=0;_e78<s.length;_e78+=1){var _P=s[_e78];for(var _e79=0;_e79<this.length;_e79+=1){var _r12=this[_e79];if(i.CustomEvent){var _s35=new i.CustomEvent(_P,{detail:n,bubbles:!0,cancelable:!0});_r12.dom7EventData=t.filter(function(e,t){return 0<t;}),_r12.dispatchEvent(_s35),_r12.dom7EventData=[],delete _r12.dom7EventData;}}}return this;},transitionEnd:function transitionEnd(i){var s=this;return i&&s.on("transitionend",function e(t){t.target===this&&(i.call(this,t),s.off("transitionend",e));}),this;},outerWidth:function outerWidth(e){if(0<this.length){if(e){var _e80=this.styles();return this[0].offsetWidth+parseFloat(_e80.getPropertyValue("margin-right"))+parseFloat(_e80.getPropertyValue("margin-left"));}return this[0].offsetWidth;}return null;},outerHeight:function outerHeight(e){if(0<this.length){if(e){var _e81=this.styles();return this[0].offsetHeight+parseFloat(_e81.getPropertyValue("margin-top"))+parseFloat(_e81.getPropertyValue("margin-bottom"));}return this[0].offsetHeight;}return null;},styles:function styles(){var e=P();return this[0]?e.getComputedStyle(this[0],null):{};},offset:function offset(){if(0<this.length){var _e82=P(),_t57=T(),_i37=this[0],_s36=_i37.getBoundingClientRect(),_n22=_t57.body,_r13=_i37.clientTop||_n22.clientTop||0,_o8=_i37.clientLeft||_n22.clientLeft||0,_a8=_i37===_e82?_e82.scrollY:_i37.scrollTop,_l6=_i37===_e82?_e82.scrollX:_i37.scrollLeft;return{top:_s36.top+_a8-_r13,left:_s36.left+_l6-_o8};}return null;},css:function css(e,t){var i=P();var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1){for(var _t58 in e){this[s].style[_t58]=e[_t58];}}return this;}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e);}if(2!==arguments.length||"string"!=typeof e)return this;for(s=0;s<this.length;s+=1){this[s].style[e]=t;}return this;},each:function each(i){return i&&this.forEach(function(e,t){i.apply(e,[e,t]);}),this;},html:function html(t){if(void 0===t)return this[0]?this[0].innerHTML:null;for(var _e83=0;_e83<this.length;_e83+=1){this[_e83].innerHTML=t;}return this;},text:function text(t){if(void 0===t)return this[0]?this[0].textContent.trim():null;for(var _e84=0;_e84<this.length;_e84+=1){this[_e84].textContent=t;}return this;},is:function is(e){var t=P(),i=T(),s=this[0];var n,r;if(!s||void 0===e)return!1;if("string"==typeof e){if(s.matches)return s.matches(e);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(e);if(s.msMatchesSelector)return s.msMatchesSelector(e);for(n=O(e),r=0;r<n.length;r+=1){if(n[r]===s)return!0;}return!1;}if(e===i)return s===i;if(e===t)return s===t;if(e.nodeType||e instanceof o){for(n=e.nodeType?[e]:e,r=0;r<n.length;r+=1){if(n[r]===s)return!0;}return!1;}return!1;},index:function index(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);){1===t.nodeType&&(e+=1);}return e;}},eq:function eq(e){if(void 0===e)return this;var t=this.length;return O(t-1<e?[]:e<0?(t=t+e)<0?[]:[this[t]]:[this[e]]);},append:function append(){var i;var s=T();for(var _e85=0;_e85<arguments.length;_e85+=1){i=_e85<0||arguments.length<=_e85?undefined:arguments[_e85];for(var _t59=0;_t59<this.length;_t59+=1){if("string"==typeof i){var _T=s.createElement("div");for(_T.innerHTML=i;_T.firstChild;){this[_t59].appendChild(_T.firstChild);}}else if(i instanceof o)for(var _e86=0;_e86<i.length;_e86+=1){this[_t59].appendChild(i[_e86]);}else this[_t59].appendChild(i);}}return this;},prepend:function prepend(e){var t=T();var i,s;for(i=0;i<this.length;i+=1){if("string"==typeof e){var _T2=t.createElement("div");for(_T2.innerHTML=e,s=_T2.childNodes.length-1;0<=s;--s){this[i].insertBefore(_T2.childNodes[s],this[i].childNodes[0]);}}else if(e instanceof o)for(s=0;s<e.length;s+=1){this[i].insertBefore(e[s],this[i].childNodes[0]);}else this[i].insertBefore(e,this[i].childNodes[0]);}return this;},next:function next(e){return 0<this.length?e?this[0].nextElementSibling&&O(this[0].nextElementSibling).is(e)?O([this[0].nextElementSibling]):O([]):this[0].nextElementSibling?O([this[0].nextElementSibling]):O([]):O([]);},nextAll:function nextAll(e){var t=[];var i=this[0];if(!i)return O([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;e&&!O(s).is(e)||t.push(s),i=s;}return O(t);},prev:function prev(e){var t;return 0<this.length?(t=this[0],e?t.previousElementSibling&&O(t.previousElementSibling).is(e)?O([t.previousElementSibling]):O([]):t.previousElementSibling?O([t.previousElementSibling]):O([])):O([]);},prevAll:function prevAll(e){var t=[];var i=this[0];if(!i)return O([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;e&&!O(s).is(e)||t.push(s),i=s;}return O(t);},parent:function parent(t){var i=[];for(var _e87=0;_e87<this.length;_e87+=1){null===this[_e87].parentNode||t&&!O(this[_e87].parentNode).is(t)||i.push(this[_e87].parentNode);}return O(i);},parents:function parents(i){var s=[];for(var _t60=0;_t60<this.length;_t60+=1){var _e88=this[_t60].parentNode;for(;_e88;){i&&!O(_e88).is(i)||s.push(_e88),_e88=_e88.parentNode;}}return O(s);},closest:function closest(e){var t=this;return void 0===e?O([]):(t.is(e)||(t=t.parents(e).eq(0)),t);},find:function find(t){var i=[];for(var _e89=0;_e89<this.length;_e89+=1){var s=this[_e89].querySelectorAll(t);for(var _e90=0;_e90<s.length;_e90+=1){i.push(s[_e90]);}}return O(i);},children:function children(t){var i=[];for(var _e91=0;_e91<this.length;_e91+=1){var s=this[_e91].children;for(var _e92=0;_e92<s.length;_e92+=1){t&&!O(s[_e92]).is(t)||i.push(s[_e92]);}}return O(i);},filter:function filter(e){return O(c(this,e));},remove:function remove(){for(var _e93=0;_e93<this.length;_e93+=1){this[_e93].parentNode&&this[_e93].parentNode.removeChild(this[_e93]);}return this;}};function E(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return setTimeout(e,t);}function g(){return Date.now();}function I(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"x";var i=P();var s,n,r;var o=function(e){var t=P();var i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i=i||e.style,i;}(e);return i.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,6<n.split(",").length&&(n=n.split(", ").map(function(e){return e.replace(",",".");}).join(", ")),r=new i.WebKitCSSMatrix("none"===n?"":n)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=r.toString().split(",")),"x"===t&&(n=i.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===t&&(n=i.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),n||0;}function u(e){return"object"==_typeof(e)&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1);}function h(){var s=Object(arguments.length<=0?undefined:arguments[0]),t=["__proto__","constructor","prototype"];for(var _e94=1;_e94<arguments.length;_e94+=1){var n=_e94<0||arguments.length<=_e94?undefined:arguments[_e94];if(null!=n&&!("undefined"!=typeof window&&void 0!==window.HTMLElement?n instanceof HTMLElement:n&&(1===n.nodeType||11===n.nodeType))){var _i38=Object.keys(Object(n)).filter(function(e){return t.indexOf(e)<0;});for(var _e95=0,_t61=_i38.length;_e95<_t61;_e95+=1){var _r14=_i38[_e95],_o9=Object.getOwnPropertyDescriptor(n,_r14);void 0!==_o9&&_o9.enumerable&&(u(s[_r14])&&u(n[_r14])?n[_r14].__swiper__?s[_r14]=n[_r14]:h(s[_r14],n[_r14]):!u(s[_r14])&&u(n[_r14])?(s[_r14]={},n[_r14].__swiper__?s[_r14]=n[_r14]:h(s[_r14],n[_r14])):s[_r14]=n[_r14]);}}}var r;return s;}function C(e,t,i){e.style.setProperty(t,i);}function y(_ref28){var i=_ref28.swiper,s=_ref28.targetPosition,n=_ref28.side;var r=P(),o=-i.translate;var a,l=null;var h=i.params.speed,c=(i.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(i.cssModeFrameID),s>o?"next":"prev"),d=function d(e,t){return"next"===c&&t<=e||"prev"===c&&e<=t;},u=function u(){a=new Date().getTime(),null===l&&(l=a);var e=Math.max(Math.min((a-l)/h,1),0),e=.5-Math.cos(e*Math.PI)/2;var t=o+e*(s-o);if(d(t,s)&&(t=s),i.wrapperEl.scrollTo(_defineProperty({},n,t)),d(t,s))return i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout(function(){i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo(_defineProperty({},n,t));}),void r.cancelAnimationFrame(i.cssModeFrameID);i.cssModeFrameID=r.requestAnimationFrame(u);};u();}var e,p,m;function f(){return e=e||function(){var i=P(),e=T();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch),passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function get(){e=!0;}});i.addEventListener("testPassiveListener",null,t);}catch(e){}return e;}(),gestures:"ongesturestart"in i};}(),e;}function b(_ref29){var e=_ref29.swiper,t=_ref29.runCallbacks,i=_ref29.direction,s=_ref29.step;var n=e.activeIndex,r=e.previousIndex;var o=i;if(o=o||(r<n?"next":n<r?"prev":"reset"),e.emit("transition"+s),t&&n!==r){if("reset"===o)return e.emit("slideResetTransition"+s),0;e.emit("slideChangeTransition"+s),"next"===o?e.emit("slideNextTransition"+s):e.emit("slidePrevTransition"+s);}}function w(){var e,t,i=this,s=i.params,n=i.el;n&&0===n.offsetWidth||(s.breakpoints&&i.setBreakpoint(),(n=i.allowSlideNext,e=i.allowSlidePrev,t=i.snapGrid),i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses(),("auto"===s.slidesPerView||1<s.slidesPerView)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides?i.slideTo(i.slides.length-1,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.run(),i.allowSlidePrev=e,i.allowSlideNext=n,i.params.watchOverflow&&t!==i.snapGrid&&i.checkOverflow());}Object.keys(d).forEach(function(e){Object.defineProperty(O.fn,e,{value:d[e],writable:!0});});var x=!1;function _(){}var S=function S(e,t){var i=T(),s=e.params,n=e.touchEvents,r=e.el,d=e.wrapperEl,o=e.device,a=e.support,l=!!s.nested,c="on"===t?"addEventListener":"removeEventListener",u=t;if(a.touch){var _t62=!("touchstart"!==n.start||!a.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};r[c](n.start,e.onTouchStart,_t62),r[c](n.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:l}:l),r[c](n.end,e.onTouchEnd,_t62),n.cancel&&r[c](n.cancel,e.onTouchEnd,_t62);}else r[c](n.start,e.onTouchStart,!1),i[c](n.move,e.onTouchMove,l),i[c](n.end,e.onTouchEnd,!1);(s.preventClicks||s.preventClicksPropagation)&&r[c]("click",e.onClick,!0),s.cssMode&&d[c]("scroll",e.onScroll),s.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",w,!0):e[u]("observerUpdate",w,!0);},k=function k(e,t){return e.grid&&t.grid&&1<t.grid.rows;};var A={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};var M={eventsEmitter:{on:function on(e,t,i){var s=this;if("function"!=typeof t)return s;var n=i?"unshift":"push";return e.split(" ").forEach(function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][n](t);}),s;},once:function once(t,i,e){var s=this;return"function"!=typeof i?s:(n.__emitterProxy=i,s.on(t,n,e));function n(){for(var _len12=arguments.length,e=new Array(_len12),_key12=0;_key12<_len12;_key12++){e[_key12]=arguments[_key12];}s.off(t,n),n.__emitterProxy&&delete n.__emitterProxy,i.apply(s,e);}},onAny:function onAny(e,t){if("function"!=typeof e)return this;t=t?"unshift":"push";return this.eventsAnyListeners.indexOf(e)<0&&this.eventsAnyListeners[t](e),this;},offAny:function offAny(e){if(!this.eventsAnyListeners)return this;e=this.eventsAnyListeners.indexOf(e);return 0<=e&&this.eventsAnyListeners.splice(e,1),this;},off:function off(e,s){var n=this;return n.eventsListeners&&e.split(" ").forEach(function(i){void 0===s?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach(function(e,t){(e===s||e.__emitterProxy&&e.__emitterProxy===s)&&n.eventsListeners[i].splice(t,1);});}),n;},emit:function emit(){var i=this;if(!i.eventsListeners)return i;var t,s,n;for(var _len13=arguments.length,e=new Array(_len13),_key13=0;_key13<_len13;_key13++){e[_key13]=arguments[_key13];}return n="string"==typeof e[0]||Array.isArray(e[0])?(t=e[0],s=e.slice(1,e.length),i):(t=e[0].events,s=e[0].data,e[0].context||i),s.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(function(t){i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(function(e){e.apply(n,[t].concat(_toConsumableArray(s)));}),i.eventsListeners&&i.eventsListeners[t]&&i.eventsListeners[t].forEach(function(e){e.apply(n,s);});}),i;}},update:{updateSize:function updateSize(){var e=this;var t,i;var s=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:s[0].clientWidth,i=void 0!==e.params.height&&null!==e.params.height?e.params.height:s[0].clientHeight,0===t&&e.isHorizontal()||0===i&&e.isVertical()||(t=t-parseInt(s.css("padding-left")||0,10)-parseInt(s.css("padding-right")||0,10),i=i-parseInt(s.css("padding-top")||0,10)-parseInt(s.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}));},updateSlides:function updateSlides(){var i=this;function s(e){return i.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e];}function n(e,t){return parseFloat(e.getPropertyValue(s(t))||0);}var r=i.params,h=i.$wrapperEl,o=i.size,a=i.rtlTranslate,p=i.wrongRTL,m=i.virtual&&r.virtual.enabled,e=(m?i.virtual:i).slides.length,l=h.children("."+i.params.slideClass),f=(m?i.virtual.slides:l).length;var c=[];var g=[],v=[];var y=r.slidesOffsetBefore,b=("function"==typeof y&&(y=r.slidesOffsetBefore.call(i)),r.slidesOffsetAfter);"function"==typeof b&&(b=r.slidesOffsetAfter.call(i));var w=i.snapGrid.length,x=i.slidesGrid.length;var d=r.spaceBetween,u=-y,T=0,E=0;if(void 0!==o){"string"==typeof d&&0<=d.indexOf("%")&&(d=parseFloat(d.replace("%",""))/100*o),i.virtualSize=-d,a?l.css({marginLeft:"",marginBottom:"",marginTop:""}):l.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(C(i.wrapperEl,"--swiper-centered-offset-before",""),C(i.wrapperEl,"--swiper-centered-offset-after",""));var _=r.grid&&1<r.grid.rows&&i.grid;var _t63;_&&i.grid.initSlides(f);var S="auto"===r.slidesPerView&&r.breakpoints&&0<Object.keys(r.breakpoints).filter(function(e){return void 0!==r.breakpoints[e].slidesPerView;}).length;for(var _e96=0;_e96<f;_e96+=1){_t63=0;var _a9=l.eq(_e96);if(_&&i.grid.updateSlide(_e96,_a9,f,s),"none"!==_a9.css("display")){if("auto"===r.slidesPerView){S&&(l[_e96].style[s("width")]="");var _o10=getComputedStyle(_a9[0]),_p=_a9[0].style.transform,_m=_a9[0].style.webkitTransform;if(_p&&(_a9[0].style.transform="none"),_m&&(_a9[0].style.webkitTransform="none"),r.roundLengths)_t63=i.isHorizontal()?_a9.outerWidth(!0):_a9.outerHeight(!0);else{var _i39=n(_o10,"width"),_s37=n(_o10,"padding-left"),_r15=n(_o10,"padding-right"),_h=n(_o10,"margin-left"),_p2=n(_o10,"margin-right"),_m2=_o10.getPropertyValue("box-sizing");if(_m2&&"border-box"===_m2)_t63=_i39+_h+_p2;else{var _a9$=_a9[0],_n23=_a9$.clientWidth,_o11=_a9$.offsetWidth;_t63=_i39+_s37+_r15+_h+_p2+(_o11-_n23);}}_p&&(_a9[0].style.transform=_p),_m&&(_a9[0].style.webkitTransform=_m),r.roundLengths&&(_t63=Math.floor(_t63));}else _t63=(o-(r.slidesPerView-1)*d)/r.slidesPerView,r.roundLengths&&(_t63=Math.floor(_t63)),l[_e96]&&(l[_e96].style[s("width")]=_t63+"px");l[_e96]&&(l[_e96].swiperSlideSize=_t63),v.push(_t63),r.centeredSlides?(u=u+_t63/2+T/2+d,0===T&&0!==_e96&&(u=u-o/2-d),0===_e96&&(u=u-o/2-d),Math.abs(u)<.001&&(u=0),r.roundLengths&&(u=Math.floor(u)),E%r.slidesPerGroup==0&&c.push(u),g.push(u)):(r.roundLengths&&(u=Math.floor(u)),(E-Math.min(i.params.slidesPerGroupSkip,E))%i.params.slidesPerGroup==0&&c.push(u),g.push(u),u=u+_t63+d),i.virtualSize+=_t63+d,T=_t63,E+=1;}}if(i.virtualSize=Math.max(i.virtualSize,o)+b,a&&p&&("slide"===r.effect||"coverflow"===r.effect)&&h.css({width:i.virtualSize+r.spaceBetween+"px"}),r.setWrapperSize&&h.css(_defineProperty({},s("width"),i.virtualSize+r.spaceBetween+"px")),_&&i.grid.updateWrapperSize(_t63,c,s),!r.centeredSlides){var _s38=[];for(var _t64=0;_t64<c.length;_t64+=1){var _e97=c[_t64];r.roundLengths&&(_e97=Math.floor(_e97)),c[_t64]<=i.virtualSize-o&&_s38.push(_e97);}c=_s38,1<Math.floor(i.virtualSize-o)-Math.floor(c[c.length-1])&&c.push(i.virtualSize-o);}if(0===c.length&&(c=[0]),0!==r.spaceBetween){var _n24=i.isHorizontal()&&a?"marginLeft":s("marginRight");l.filter(function(e,t){return!r.cssMode||t!==l.length-1;}).css(_defineProperty({},_n24,d+"px"));}if(r.centeredSlides&&r.centeredSlidesBounds){var _t65=0;v.forEach(function(e){_t65+=e+(r.spaceBetween||0);}),_t65-=r.spaceBetween;var _s39=_t65-o;c=c.map(function(e){return e<0?-y:e>_s39?_s39+b:e;});}if(r.centerInsufficientSlides){var _t66=0;if(v.forEach(function(e){_t66+=e+(r.spaceBetween||0);}),_t66-=r.spaceBetween,_t66<o){var _s40=(o-_t66)/2;c.forEach(function(e,t){c[t]=e-_s40;}),g.forEach(function(e,t){g[t]=e+_s40;});}}if(Object.assign(i,{slides:l,snapGrid:c,slidesGrid:g,slidesSizesGrid:v}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){C(i.wrapperEl,"--swiper-centered-offset-before",-c[0]+"px"),C(i.wrapperEl,"--swiper-centered-offset-after",i.size/2-v[v.length-1]/2+"px");var _s41=-i.snapGrid[0],_n25=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(function(e){return e+_s41;}),i.slidesGrid=i.slidesGrid.map(function(e){return e+_n25;});}f!==e&&i.emit("slidesLengthChange"),c.length!==w&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),g.length!==x&&i.emit("slidesGridLengthChange"),r.watchSlidesProgress&&i.updateSlidesOffset();}},updateAutoHeight:function updateAutoHeight(e){var i=this,t=[],s=i.virtual&&i.params.virtual.enabled;var n,r=0;"number"==typeof e?i.setTransition(e):!0===e&&i.setTransition(i.params.speed);var o=function o(t){return(s?i.slides.filter(function(e){return parseInt(e.getAttribute("data-swiper-slide-index"),10)===t;}):i.slides.eq(t))[0];};if("auto"!==i.params.slidesPerView&&1<i.params.slidesPerView){if(i.params.centeredSlides)i.visibleSlides.each(function(e){t.push(e);});else for(n=0;n<Math.ceil(i.params.slidesPerView);n+=1){var _e98=i.activeIndex+n;if(_e98>i.slides.length&&!s)break;t.push(o(_e98));}}else t.push(o(i.activeIndex));for(n=0;n<t.length;n+=1){if(void 0!==t[n]){var _e99=t[n].offsetHeight;r=_e99>r?_e99:r;}}!r&&0!==r||i.$wrapperEl.css("height",r+"px");},updateSlidesOffset:function updateSlidesOffset(){var t=this.slides;for(var _e100=0;_e100<t.length;_e100+=1){t[_e100].swiperSlideOffset=this.isHorizontal()?t[_e100].offsetLeft:t[_e100].offsetTop;}},updateSlidesProgress:function updateSlidesProgress(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this&&this.translate||0;var s=this,n=s.params,r=s.slides,o=s.rtlTranslate,a=s.snapGrid;if(0!==r.length){void 0===r[0].swiperSlideOffset&&s.updateSlidesOffset();var _i40=o?e:-e;r.removeClass(n.slideVisibleClass),s.visibleSlidesIndexes=[],s.visibleSlides=[];for(var _t67=0;_t67<r.length;_t67+=1){var _l7=r[_t67];var _e101=_l7.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(_e101-=r[0].swiperSlideOffset);var _O=(_i40+(n.centeredSlides?s.minTranslate():0)-_e101)/(_l7.swiperSlideSize+n.spaceBetween),_c6=(_i40-a[0]+(n.centeredSlides?s.minTranslate():0)-_e101)/(_l7.swiperSlideSize+n.spaceBetween),_d2=-(_i40-_e101),_u2=_d2+s.slidesSizesGrid[_t67];(0<=_d2&&_d2<s.size-1||1<_u2&&_u2<=s.size||_d2<=0&&_u2>=s.size)&&(s.visibleSlides.push(_l7),s.visibleSlidesIndexes.push(_t67),r.eq(_t67).addClass(n.slideVisibleClass)),_l7.progress=o?-_O:_O,_l7.originalProgress=o?-_c6:_c6;}s.visibleSlides=O(s.visibleSlides);}},updateProgress:function updateProgress(e){var t=this;if(void 0===e){var _i41=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*_i41||0;}var i=t.params,s=t.maxTranslate()-t.minTranslate();var n=t.progress,r=t.isBeginning,o=t.isEnd;var a=r,l=o;o=0==s?(n=0,r=!0):(n=(e-t.minTranslate())/s,r=n<=0,1<=n),Object.assign(t,{progress:n,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),r&&!a&&t.emit("reachBeginning toEdge"),o&&!l&&t.emit("reachEnd toEdge"),(a&&!r||l&&!o)&&t.emit("fromEdge"),t.emit("progress",n);},updateSlidesClasses:function updateSlidesClasses(){var e=this.slides,t=this.params,i=this.$wrapperEl,s=this.activeIndex,n=this.realIndex,r=this.virtual&&t.virtual.enabled;var o,a=(e.removeClass("".concat(t.slideActiveClass," ").concat(t.slideNextClass," ").concat(t.slidePrevClass," ").concat(t.slideDuplicateActiveClass," ").concat(t.slideDuplicateNextClass," ")+t.slideDuplicatePrevClass),o=r?this.$wrapperEl.find(".".concat(t.slideClass,"[data-swiper-slide-index=\"").concat(s,"\"]")):e.eq(s),o.addClass(t.slideActiveClass),t.loop&&(o.hasClass(t.slideDuplicateClass)?i.children(".".concat(t.slideClass,":not(.").concat(t.slideDuplicateClass,")[data-swiper-slide-index=\"").concat(n,"\"]")):i.children(".".concat(t.slideClass,".").concat(t.slideDuplicateClass,"[data-swiper-slide-index=\"").concat(n,"\"]"))).addClass(t.slideDuplicateActiveClass),o.nextAll("."+t.slideClass).eq(0).addClass(t.slideNextClass)),l=(t.loop&&0===a.length&&(a=e.eq(0),a.addClass(t.slideNextClass)),o.prevAll("."+t.slideClass).eq(0).addClass(t.slidePrevClass));t.loop&&0===l.length&&(l=e.eq(-1),l.addClass(t.slidePrevClass)),t.loop&&((a.hasClass(t.slideDuplicateClass)?i.children(".".concat(t.slideClass,":not(.").concat(t.slideDuplicateClass,")[data-swiper-slide-index=\"").concat(a.attr("data-swiper-slide-index"),"\"]")):i.children(".".concat(t.slideClass,".").concat(t.slideDuplicateClass,"[data-swiper-slide-index=\"").concat(a.attr("data-swiper-slide-index"),"\"]"))).addClass(t.slideDuplicateNextClass),(l.hasClass(t.slideDuplicateClass)?i.children(".".concat(t.slideClass,":not(.").concat(t.slideDuplicateClass,")[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"),"\"]")):i.children(".".concat(t.slideClass,".").concat(t.slideDuplicateClass,"[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"),"\"]"))).addClass(t.slideDuplicatePrevClass)),this.emitSlidesClasses();},updateActiveIndex:function updateActiveIndex(e){var t=this,i=t.rtlTranslate?t.translate:-t.translate,s=t.slidesGrid,n=t.snapGrid,r=t.params,o=t.activeIndex,a=t.realIndex,d=t.snapIndex;var l,c=e;if(void 0===c){for(var _e102=0;_e102<s.length;_e102+=1){void 0!==s[_e102+1]?i>=s[_e102]&&i<s[_e102+1]-(s[_e102+1]-s[_e102])/2?c=_e102:i>=s[_e102]&&i<s[_e102+1]&&(c=_e102+1):i>=s[_e102]&&(c=_e102);}r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0);}if(0<=n.indexOf(i))l=n.indexOf(i);else{var _e103=Math.min(r.slidesPerGroupSkip,c);l=_e103+Math.floor((c-_e103)/r.slidesPerGroup);}l>=n.length&&(l=n.length-1),c!==o?(e=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10),Object.assign(t,{snapIndex:l,realIndex:e,previousIndex:o,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==e&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")):l!==d&&(t.snapIndex=l,t.emit("snapIndexChange"));},updateClickedSlide:function updateClickedSlide(e){var t=this,i=t.params,s=O(e).closest("."+i.slideClass)[0];var n,r=!1;if(s)for(var _e104=0;_e104<t.slides.length;_e104+=1){if(t.slides[_e104]===s){r=!0,n=_e104;break;}}if(!s||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(O(s).attr("data-swiper-slide-index"),10):t.clickedIndex=n,i.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide();}},translate:{getTranslate:function getTranslate(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.isHorizontal()?"x":"y";var t=this.params,i=this.rtlTranslate,s=this.translate,n=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=I(n[0],e);return i&&(r=-r),r||0;},setTranslate:function setTranslate(e,t){var i=this,s=i.rtlTranslate,n=i.params,r=i.$wrapperEl,o=i.wrapperEl,d=i.progress;var a=0,l=0;i.isHorizontal()?a=s?-e:e:l=e,n.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.cssMode?o[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-a:-l:n.virtualTranslate||r.transform("translate3d(".concat(a,"px, ").concat(l,"px, 0px)")),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?a:l;var c=i.maxTranslate()-i.minTranslate();(0==c?0:(e-i.minTranslate())/c)!==d&&i.updateProgress(e),i.emit("setTranslate",i.translate,t);},minTranslate:function minTranslate(){return-this.snapGrid[0];},maxTranslate:function maxTranslate(){return-this.snapGrid[this.snapGrid.length-1];},translateTo:function translateTo(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.params.speed;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!0;var n=arguments.length>4?arguments[4]:undefined;var r=this,o=r.params,a=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var l=r.minTranslate(),c=r.maxTranslate(),l=s&&l<e?l:s&&e<c?c:e;if(r.updateProgress(l),o.cssMode){var _e105=r.isHorizontal();if(0===t)a[_e105?"scrollLeft":"scrollTop"]=-l;else{var _a$scrollTo;if(!r.support.smoothScroll)return y({swiper:r,targetPosition:-l,side:_e105?"left":"top"}),!0;a.scrollTo((_a$scrollTo={},_defineProperty(_a$scrollTo,_e105?"left":"top",-l),_defineProperty(_a$scrollTo,"behavior","smooth"),_a$scrollTo));}return!0;}return 0===t?(r.setTransition(0),r.setTranslate(l),i&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(l),i&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,i&&r.emit("transitionEnd"));}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0;}},transition:{setTransition:function setTransition(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t);},transitionStart:function transitionStart(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!0;var t=arguments.length>1?arguments[1]:undefined;var i=this["params"];i.cssMode||(i.autoHeight&&this.updateAutoHeight(),b({swiper:this,runCallbacks:e,direction:t,step:"Start"}));},transitionEnd:function transitionEnd(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!0;var t=arguments.length>1?arguments[1]:undefined;var i=this["params"];this.animating=!1,i.cssMode||(this.setTransition(0),b({swiper:this,runCallbacks:e,direction:t,step:"End"}));}},slide:{slideTo:function slideTo(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.params.speed;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;var s=arguments.length>3?arguments[3]:undefined;var d=arguments.length>4?arguments[4]:undefined;if("number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e),"] given."));if("string"==typeof e){var _t68=parseInt(e,10);if(!isFinite(_t68))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e,"] given."));e=_t68;}var n=this;var r=e;r<0&&(r=0);var o=n.params,u=n.snapGrid,h=n.slidesGrid,p=n.previousIndex,a=n.activeIndex,m=n.rtlTranslate,f=n.wrapperEl,g=n.enabled;if(n.animating&&o.preventInteractionOnTransition||!g&&!s&&!d)return!1;e=Math.min(n.params.slidesPerGroupSkip,r);var v=e+Math.floor((r-e)/n.params.slidesPerGroup);v>=u.length&&(v=u.length-1),(a||o.initialSlide||0)===(p||0)&&i&&n.emit("beforeSlideChangeStart");var l=-u[v];if(n.updateProgress(l),o.normalizeSlideIndex)for(var _e106=0;_e106<h.length;_e106+=1){var _t69=-Math.floor(100*l),_i42=Math.floor(100*h[_e106]),_s42=Math.floor(100*h[_e106+1]);void 0!==h[_e106+1]?_t69>=_i42&&_t69<_s42-(_s42-_i42)/2?r=_e106:_t69>=_i42&&_t69<_s42&&(r=_e106+1):_t69>=_i42&&(r=_e106);}if(n.initialized&&r!==a){if(!n.allowSlideNext&&l<n.translate&&l<n.minTranslate())return!1;if(!n.allowSlidePrev&&l>n.translate&&l>n.maxTranslate()&&(a||0)!==r)return!1;}var c;if(c=r>a?"next":r<a?"prev":"reset",m&&-l===n.translate||!m&&l===n.translate)return n.updateActiveIndex(r),o.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),"slide"!==o.effect&&n.setTranslate(l),"reset"!=c&&(n.transitionStart(i,c),n.transitionEnd(i,c)),!1;if(o.cssMode){var _e107=n.isHorizontal(),_i43=m?l:-l;if(0===t){var _t70=n.virtual&&n.params.virtual.enabled;_t70&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),f[_e107?"scrollLeft":"scrollTop"]=_i43,_t70&&requestAnimationFrame(function(){n.wrapperEl.style.scrollSnapType="",n._swiperImmediateVirtual=!1;});}else{var _f$scrollTo;if(!n.support.smoothScroll)return y({swiper:n,targetPosition:_i43,side:_e107?"left":"top"}),!0;f.scrollTo((_f$scrollTo={},_defineProperty(_f$scrollTo,_e107?"left":"top",_i43),_defineProperty(_f$scrollTo,"behavior","smooth"),_f$scrollTo));}return!0;}return n.setTransition(t),n.setTranslate(l),n.updateActiveIndex(r),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(i,c),0===t?n.transitionEnd(i,c):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(i,c));}),n.$wrapperEl[0].addEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd)),!0;},slideToLoop:function slideToLoop(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.params.speed;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;var s=arguments.length>3?arguments[3]:undefined;var n=e;return this.params.loop&&(n+=this.loopedSlides),this.slideTo(n,t,i,s);},slideNext:function slideNext(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.params.speed;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i=arguments.length>2?arguments[2]:undefined;var s=this,n=s.animating,r=s.enabled,o=s.params;if(!r)return s;var a=o.slidesPerGroup;"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(a=Math.max(s.slidesPerViewDynamic("current",!0),1));r=s.activeIndex<o.slidesPerGroupSkip?1:a;if(o.loop){if(n&&o.loopPreventsSlide)return!1;s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft;}return o.rewind&&s.isEnd?s.slideTo(0,e,t,i):s.slideTo(s.activeIndex+r,e,t,i);},slidePrev:function slidePrev(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.params.speed;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i=arguments.length>2?arguments[2]:undefined;var s=this,n=s.params,d=s.animating,r=s.snapGrid,u=s.slidesGrid,h=s.rtlTranslate,p=s.enabled;if(!p)return s;if(n.loop){if(d&&n.loopPreventsSlide)return!1;s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft;}function o(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e);}var a=o(h?s.translate:-s.translate),m=r.map(function(e){return o(e);});var l=r[m.indexOf(a)-1];if(void 0===l&&n.cssMode){var _i44;r.forEach(function(e,t){a>=e&&(_i44=t);}),void 0!==_i44&&(l=r[0<_i44?_i44-1:_i44]);}var c=0;return void 0!==l&&(c=u.indexOf(l),c<0&&(c=s.activeIndex-1),"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(c=c-s.slidesPerViewDynamic("previous",!0)+1,c=Math.max(c,0))),n.rewind&&s.isBeginning?s.slideTo(s.slides.length-1,e,t,i):s.slideTo(c,e,t,i);},slideReset:function slideReset(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.params.speed;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i=arguments.length>2?arguments[2]:undefined;return this.slideTo(this.activeIndex,e,t,i);},slideToClosest:function slideToClosest(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.params.speed;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i=arguments.length>2?arguments[2]:undefined;var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:.5;var n=this;var r=n.activeIndex;var o=Math.min(n.params.slidesPerGroupSkip,r),o=o+Math.floor((r-o)/n.params.slidesPerGroup),a=n.rtlTranslate?n.translate:-n.translate;if(a>=n.snapGrid[o]){var _e108=n.snapGrid[o];a-_e108>(n.snapGrid[o+1]-_e108)*s&&(r+=n.params.slidesPerGroup);}else{var _e109=n.snapGrid[o-1];a-_e109<=(n.snapGrid[o]-_e109)*s&&(r-=n.params.slidesPerGroup);}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,t,i);},slideToClickedSlide:function slideToClickedSlide(){var e=this,t=e.params,i=e.$wrapperEl,s="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;var n,r=e.clickedIndex;t.loop?e.animating||(n=parseInt(O(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-s/2||r>e.slides.length-e.loopedSlides+s/2?(e.loopFix(),r=i.children(".".concat(t.slideClass,"[data-swiper-slide-index=\"").concat(n,"\"]:not(.").concat(t.slideDuplicateClass,")")).eq(0).index(),E(function(){e.slideTo(r);})):e.slideTo(r):r>e.slides.length-s?(e.loopFix(),r=i.children(".".concat(t.slideClass,"[data-swiper-slide-index=\"").concat(n,"\"]:not(.").concat(t.slideDuplicateClass,")")).eq(0).index(),E(function(){e.slideTo(r);})):e.slideTo(r)):e.slideTo(r);}},loop:{loopCreate:function loopCreate(){var s=this,t=T(),i=s.params,e=s.$wrapperEl,n=0<e.children().length?O(e.children()[0].parentNode):e;n.children(".".concat(i.slideClass,".")+i.slideDuplicateClass).remove();var r=n.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var _s43=i.slidesPerGroup-r.length%i.slidesPerGroup;if(_s43!==i.slidesPerGroup){for(var _e110=0;_e110<_s43;_e110+=1){var _s44=O(t.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);n.append(_s44);}r=n.children("."+i.slideClass);}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),s.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),s.loopedSlides+=i.loopAdditionalSlides,s.loopedSlides>r.length&&(s.loopedSlides=r.length);var o=[],a=[];r.each(function(e,t){var i=O(e);t<s.loopedSlides&&a.push(e),t<r.length&&t>=r.length-s.loopedSlides&&o.push(e),i.attr("data-swiper-slide-index",t);});for(var _e111=0;_e111<a.length;_e111+=1){n.append(O(a[_e111].cloneNode(!0)).addClass(i.slideDuplicateClass));}for(var _e112=o.length-1;0<=_e112;--_e112){n.prepend(O(o[_e112].cloneNode(!0)).addClass(i.slideDuplicateClass));}},loopFix:function loopFix(){var e=this,_ref30=(e.emit("beforeLoopFix"),e),t=_ref30.activeIndex,i=_ref30.slides,s=_ref30.loopedSlides,n=_ref30.allowSlidePrev,r=_ref30.allowSlideNext,o=_ref30.snapGrid,a=_ref30.rtlTranslate;var l;e.allowSlidePrev=!0,e.allowSlideNext=!0;o=-o[t]-e.getTranslate();t<s?(l=i.length-3*s+t,l+=s,e.slideTo(l,0,!1,!0)&&0!=o&&e.setTranslate((a?-e.translate:e.translate)-o)):t>=i.length-s&&(l=-i.length+t+s,l+=s,e.slideTo(l,0,!1,!0)&&0!=o&&e.setTranslate((a?-e.translate:e.translate)-o)),e.allowSlidePrev=n,e.allowSlideNext=r,e.emit("loopFix");},loopDestroy:function loopDestroy(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children(".".concat(t.slideClass,".").concat(t.slideDuplicateClass,",.").concat(t.slideClass,".")+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index");}},grabCursor:{setGrabCursor:function setGrabCursor(e){if(!(this.support.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var _t71="container"===this.params.touchEventsTarget?this.el:this.wrapperEl;_t71.style.cursor="move",_t71.style.cursor=e?"-webkit-grabbing":"-webkit-grab",_t71.style.cursor=e?"-moz-grabbin":"-moz-grab",_t71.style.cursor=e?"grabbing":"grab";}},unsetGrabCursor:function unsetGrabCursor(){this.support.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this["container"===this.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="");}},events:{attachEvents:function attachEvents(){var e=this,t=T(),i=e.params,s=e.support;e.onTouchStart=function(e){var s=this,n=T(),h=P(),r=s.touchEventsData,o=s.params,a=s.touches,t=s.enabled;if(t&&(!s.animating||!o.preventInteractionOnTransition)){!s.animating&&o.cssMode&&o.loop&&s.loopFix();var _t72=e,_i45=(_t72.originalEvent&&(_t72=_t72.originalEvent),O(_t72.target));if(("wrapper"!==o.touchEventsTarget||_i45.closest(s.wrapperEl).length)&&(r.isTouchEvent="touchstart"===_t72.type,(r.isTouchEvent||!("which"in _t72)||3!==_t72.which)&&!(!r.isTouchEvent&&"button"in _t72&&0<_t72.button||r.isTouched&&r.isMoved))){o.noSwipingClass&&""!==o.noSwipingClass&&_t72.target&&_t72.target.shadowRoot&&e.path&&e.path[0]&&(_i45=O(e.path[0]));var l=o.noSwipingSelector||"."+o.noSwipingClass,c=!(!_t72.target||!_t72.target.shadowRoot);if(o.noSwiping&&(c?function(i){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;return function e(t){return t&&t!==T()&&t!==P()?(t=t.assignedSlot?t.assignedSlot:t).closest(i)||e(t.getRootNode().host):null;}(e);}(l,_t72.target):_i45.closest(l)[0]))s.allowClick=!0;else if(!o.swipeHandler||_i45.closest(o.swipeHandler)[0]){a.currentX=("touchstart"===_t72.type?_t72.targetTouches[0]:_t72).pageX,a.currentY=("touchstart"===_t72.type?_t72.targetTouches[0]:_t72).pageY;var c=a.currentX,l=a.currentY,d=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,u=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(d&&(c<=u||c>=h.innerWidth-u)){if("prevent"!==d)return;e.preventDefault();}if(Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=c,a.startY=l,r.touchStartTime=g(),s.allowClick=!0,s.updateSize(),s.swipeDirection=void 0,0<o.threshold&&(r.allowThresholdMove=!1),"touchstart"!==_t72.type){var _e113=!0;_i45.is(r.focusableElements)&&(_e113=!1),n.activeElement&&O(n.activeElement).is(r.focusableElements)&&n.activeElement!==_i45[0]&&n.activeElement.blur();var _T3=_e113&&s.allowTouchMove&&o.touchStartPreventDefault;!o.touchStartForcePreventDefault&&!_T3||_i45[0].isContentEditable||_t72.preventDefault();}s.emit("touchStart",_t72);}}}}.bind(e),e.onTouchMove=function(n){var e=T(),r=this,o=r.touchEventsData,a=r.params,l=r.touches,c=r.rtlTranslate,t=r.enabled;if(t){var _s45=n;if(_s45.originalEvent&&(_s45=_s45.originalEvent),o.isTouched){if(!o.isTouchEvent||"touchmove"===_s45.type){var n="touchmove"===_s45.type&&_s45.targetTouches&&(_s45.targetTouches[0]||_s45.changedTouches[0]),d=("touchmove"===_s45.type?n:_s45).pageX,n=("touchmove"===_s45.type?n:_s45).pageY;if(_s45.preventedByNestedSwiper)return l.startX=d,void(l.startY=n);if(!r.allowTouchMove)return r.allowClick=!1,void(o.isTouched&&(Object.assign(l,{startX:d,startY:n,currentX:d,currentY:n}),o.touchStartTime=g()));if(o.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(r.isVertical()){if(n<l.startY&&r.translate<=r.maxTranslate()||n>l.startY&&r.translate>=r.minTranslate())return o.isTouched=!1,void(o.isMoved=!1);}else if(d<l.startX&&r.translate<=r.maxTranslate()||d>l.startX&&r.translate>=r.minTranslate())return;if(o.isTouchEvent&&e.activeElement&&_s45.target===e.activeElement&&O(_s45.target).is(o.focusableElements))return o.isMoved=!0,void(r.allowClick=!1);if(o.allowTouchCallbacks&&r.emit("touchMove",_s45),!(_s45.targetTouches&&1<_s45.targetTouches.length)){l.currentX=d,l.currentY=n;var i,d=l.currentX-l.startX,n=l.currentY-l.startY;if(!(r.params.threshold&&Math.sqrt(Math.pow(d,2)+Math.pow(n,2))<r.params.threshold))if(void 0===o.isScrolling&&(r.isHorizontal()&&l.currentY===l.startY||r.isVertical()&&l.currentX===l.startX?o.isScrolling=!1:25<=d*d+n*n&&(i=180*Math.atan2(Math.abs(n),Math.abs(d))/Math.PI,o.isScrolling=r.isHorizontal()?i>a.touchAngle:90-i>a.touchAngle)),o.isScrolling&&r.emit("touchMoveOpposite",_s45),void 0===o.startMoving&&(l.currentX===l.startX&&l.currentY===l.startY||(o.startMoving=!0)),o.isScrolling)o.isTouched=!1;else if(o.startMoving){r.allowClick=!1,!a.cssMode&&_s45.cancelable&&_s45.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&_s45.stopPropagation(),o.isMoved||(a.loop&&!a.cssMode&&r.loopFix(),o.startTranslate=r.getTranslate(),r.setTransition(0),r.animating&&r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),o.allowMomentumBounce=!1,!a.grabCursor||!0!==r.allowSlideNext&&!0!==r.allowSlidePrev||r.setGrabCursor(!0),r.emit("sliderFirstMove",_s45)),r.emit("sliderMove",_s45),o.isMoved=!0;var _e114=r.isHorizontal()?d:n,_t73=(l.diff=_e114,_e114*=a.touchRatio,c&&(_e114=-_e114),r.swipeDirection=0<_e114?"prev":"next",o.currentTranslate=_e114+o.startTranslate,!0),_i46=a.resistanceRatio;if(a.touchReleaseOnEdges&&(_i46=0),0<_e114&&o.currentTranslate>r.minTranslate()?(_t73=!1,a.resistance&&(o.currentTranslate=r.minTranslate()-1+Math.pow(-r.minTranslate()+o.startTranslate+_e114,_i46))):_e114<0&&o.currentTranslate<r.maxTranslate()&&(_t73=!1,a.resistance&&(o.currentTranslate=r.maxTranslate()+1-Math.pow(r.maxTranslate()-o.startTranslate-_e114,_i46))),_t73&&(_s45.preventedByNestedSwiper=!0),!r.allowSlideNext&&"next"===r.swipeDirection&&o.currentTranslate<o.startTranslate&&(o.currentTranslate=o.startTranslate),!r.allowSlidePrev&&"prev"===r.swipeDirection&&o.currentTranslate>o.startTranslate&&(o.currentTranslate=o.startTranslate),r.allowSlidePrev||r.allowSlideNext||(o.currentTranslate=o.startTranslate),0<a.threshold){if(!(Math.abs(_e114)>a.threshold||o.allowThresholdMove))return void(o.currentTranslate=o.startTranslate);if(!o.allowThresholdMove)return o.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,o.currentTranslate=o.startTranslate,void(l.diff=r.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY);}a.followFinger&&!a.cssMode&&((a.freeMode&&a.freeMode.enabled&&r.freeMode||a.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),r.params.freeMode&&a.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(o.currentTranslate),r.setTranslate(o.currentTranslate));}}}}else o.startMoving&&o.isScrolling&&r.emit("touchMoveOpposite",_s45);}}.bind(e),e.onTouchEnd=function(s){var n=this,t=n.touchEventsData,r=n.params,i=n.touches,o=n.rtlTranslate,a=n.slidesGrid,e=n.enabled;if(e){var _e115=s;if(_e115.originalEvent&&(_e115=_e115.originalEvent),t.allowTouchCallbacks&&n.emit("touchEnd",_e115),t.allowTouchCallbacks=!1,!t.isTouched)return t.isMoved&&r.grabCursor&&n.setGrabCursor(!1),t.isMoved=!1,void(t.startMoving=!1);r.grabCursor&&t.isMoved&&t.isTouched&&(!0===n.allowSlideNext||!0===n.allowSlidePrev)&&n.setGrabCursor(!1);var l,c=g(),d=c-t.touchStartTime;if(n.allowClick){var _s46=_e115.path||_e115.composedPath&&_e115.composedPath();n.updateClickedSlide(_s46&&_s46[0]||_e115.target),n.emit("tap click",_e115),d<300&&c-t.lastClickTime<300&&n.emit("doubleTap doubleClick",_e115);}if(t.lastClickTime=g(),E(function(){n.destroyed||(n.allowClick=!0);}),!t.isTouched||!t.isMoved||!n.swipeDirection||0===i.diff||t.currentTranslate===t.startTranslate)return t.isTouched=!1,t.isMoved=!1,void(t.startMoving=!1);if(t.isTouched=!1,t.isMoved=!1,t.startMoving=!1,l=r.followFinger?o?n.translate:-n.translate:-t.currentTranslate,!r.cssMode)if(n.params.freeMode&&r.freeMode.enabled)n.freeMode.onTouchEnd({currentPos:l});else{var _t74=0,_i47=n.slidesSizesGrid[0];for(var _e116=0;_e116<a.length;_e116+=_e116<r.slidesPerGroupSkip?1:r.slidesPerGroup){var _n26=_e116<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==a[_e116+_n26]?l>=a[_e116]&&l<a[_e116+_n26]&&(_t74=_e116,_i47=a[_e116+_n26]-a[_e116]):l>=a[_e116]&&(_t74=_e116,_i47=a[a.length-1]-a[a.length-2]);}s=(l-a[_t74])/_i47,c=_t74<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;d>r.longSwipesMs?r.longSwipes?("next"===n.swipeDirection&&(s>=r.longSwipesRatio?n.slideTo(_t74+c):n.slideTo(_t74)),"prev"===n.swipeDirection&&(s>1-r.longSwipesRatio?n.slideTo(_t74+c):n.slideTo(_t74))):n.slideTo(n.activeIndex):r.shortSwipes?!n.navigation||_e115.target!==n.navigation.nextEl&&_e115.target!==n.navigation.prevEl?("next"===n.swipeDirection&&n.slideTo(_t74+c),"prev"===n.swipeDirection&&n.slideTo(_t74)):_e115.target===n.navigation.nextEl?n.slideTo(_t74+c):n.slideTo(_t74):n.slideTo(n.activeIndex);}}}.bind(e),i.cssMode&&(e.onScroll=function(){var e=this,t=e.wrapperEl,i=e.rtlTranslate,s=e.enabled;s&&(e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses(),(0==(s=e.maxTranslate()-e.minTranslate())?0:(e.translate-e.minTranslate())/s)!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1));}.bind(e)),e.onClick=function(e){this.enabled&&(this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation())));}.bind(e),s.touch&&!x&&(t.addEventListener("touchstart",_),x=!0),S(e,"on");},detachEvents:function detachEvents(){S(this,"off");}},breakpoints:{setBreakpoint:function setBreakpoint(){var e=this,d=e.activeIndex,t=e.initialized,_e$loopedSlides=e.loopedSlides,u=_e$loopedSlides===void 0?0:_e$loopedSlides,i=e.params,s=e.$el,n=i.breakpoints;var r,o,a,l,c;!n||0===Object.keys(n).length||(r=e.getBreakpoint(n,e.params.breakpointsBase,e.el))&&e.currentBreakpoint!==r&&(o=(r in n?n[r]:void 0)||e.originalParams,c=k(e,i),l=k(e,o),a=i.enabled,c&&!l?(s.removeClass("".concat(i.containerModifierClass,"grid ").concat(i.containerModifierClass,"grid-column")),e.emitContainerClasses()):!c&&l&&(s.addClass(i.containerModifierClass+"grid"),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&s.addClass(i.containerModifierClass+"grid-column"),e.emitContainerClasses()),c=o.direction&&o.direction!==i.direction,l=i.loop&&(o.slidesPerView!==i.slidesPerView||c),c&&t&&e.changeDirection(),h(e.params,o),c=e.params.enabled,Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),a&&!c?e.disable():!a&&c&&e.enable(),e.currentBreakpoint=r,e.emit("_beforeBreakpoint",o),l&&t&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(d-u+e.loopedSlides,0,!1)),e.emit("breakpoint",o));},getBreakpoint:function getBreakpoint(e){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"window";var s=arguments.length>2?arguments[2]:undefined;if(e&&("container"!==i||s)){var _t75=!1;var _n27=P(),_r16="window"===i?_n27.innerHeight:s.clientHeight,_o12=Object.keys(e).map(function(e){var t;return"string"==typeof e&&0===e.indexOf("@")?(t=parseFloat(e.substr(1)),{value:_r16*t,point:e}):{value:e,point:e};});_o12.sort(function(e,t){return parseInt(e.value,10)-parseInt(t.value,10);});for(var _e117=0;_e117<_o12.length;_e117+=1){var _o12$_e=_o12[_e117],_P2=_o12$_e.point,_r17=_o12$_e.value;"window"===i?_n27.matchMedia("(min-width: ".concat(_r17,"px)")).matches&&(_t75=_P2):_r17<=s.clientWidth&&(_t75=_P2);}return _t75||"max";}}},checkOverflow:{checkOverflow:function checkOverflow(){var e=this,t=e.isLocked,i=e.params,s=i["slidesOffsetBefore"];if(s){var _t76=e.slides.length-1,_i48=e.slidesGrid[_t76]+e.slidesSizesGrid[_t76]+2*s;e.isLocked=e.size>_i48;}else e.isLocked=1===e.snapGrid.length;!0===i.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===i.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock");}},classes:{addClasses:function addClasses(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,n=this.device,r=this.support,o=function(e,i){var s=[];return e.forEach(function(t){"object"==_typeof(t)?Object.keys(t).forEach(function(e){t[e]&&s.push(i+e);}):"string"==typeof t&&s.push(i+t);}),s;}(["initialized",t.direction,{"pointer-events":!r.touch},{"free-mode":this.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&1<t.grid.rows},{"grid-column":t.grid&&1<t.grid.rows&&"column"===t.grid.fill},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides}],t.containerModifierClass);e.push.apply(e,_toConsumableArray(o)),s.addClass(_toConsumableArray(e).join(" ")),this.emitContainerClasses();},removeClasses:function removeClasses(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" ")),this.emitContainerClasses();}},images:{loadImage:function loadImage(e,t,i,s,n,r){var o=P();var a;function l(){r&&r();}!(O(e).parent("picture")[0]||e.complete&&n)&&t?(a=new o.Image(),a.onload=l,a.onerror=l,s&&(a.sizes=s),i&&(a.srcset=i),t&&(a.src=t)):l();},preloadImages:function preloadImages(){var t=this;function i(){null!=t&&t&&!t.destroyed&&(void 0!==t.imagesLoaded&&(t.imagesLoaded+=1),t.imagesLoaded===t.imagesToLoad.length&&(t.params.updateOnImagesReady&&t.update(),t.emit("imagesReady")));}t.imagesToLoad=t.$el.find("img");for(var _e118=0;_e118<t.imagesToLoad.length;_e118+=1){var _s47=t.imagesToLoad[_e118];t.loadImage(_s47,_s47.currentSrc||_s47.getAttribute("src"),_s47.srcset||_s47.getAttribute("srcset"),_s47.sizes||_s47.getAttribute("sizes"),!0,i);}}}},L={};var n=/*#__PURE__*/function(){function n(){var _t77,_t78,_r$modules;for(var _len14=arguments.length,t=new Array(_len14),_key14=0;_key14<_len14;_key14++){t[_key14]=arguments[_key14];}_classCallCheck(this,n);var e,i;if(1===t.length&&t[0].constructor&&"Object"===Object.prototype.toString.call(t[0]).slice(8,-1)?i=t[0]:(_t77=t,_t78=_slicedToArray(_t77,2),e=_t78[0],i=_t78[1],_t77),i=i||{},i=h({},i),e&&!i.el&&(i.el=e),i.el&&1<O(i.el).length){var _t79=[];return O(i.el).each(function(e){e=h({},i,{el:e});_t79.push(new n(e));}),_t79;}var r=this;r.__swiper__=!0,r.support=f(),r.device=(t={userAgent:i.userAgent},p=p||function(){var _ref31=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},e=_ref31.userAgent;return function(e){var t=f(),i=P(),s=i.navigator.platform,n=e||i.navigator.userAgent,r={ios:!1,android:!1},o=i.screen.width,a=i.screen.height,d=n.match(/(Android);?[\s\/]+([\d.]+)?/);var l=n.match(/(iPad).*OS\s([\d_]+)/);var e=n.match(/(iPod)(.*OS\s([\d_]+))?/),u=!l&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===s;var c="MacIntel"===s;return!l&&c&&t.touch&&0<=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(o+"x"+a)&&(l=n.match(/(Version)\/([\d.]+)/),l=l||[0,1,"13_0_0"],c=!1),d&&!h&&(r.os="android",r.android=!0),(l||u||e)&&(r.os="ios",r.ios=!0),r;}(e);}(t),p),r.browser=(m=m||function(){var t=P();return{isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return 0<=e.indexOf("safari")&&e.indexOf("chrome")<0&&e.indexOf("android")<0;}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)};}(),m),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=_toConsumableArray(r.__modules__),i.modules&&Array.isArray(i.modules)&&(_r$modules=r.modules).push.apply(_r$modules,_toConsumableArray(i.modules));var o={};r.modules.forEach(function(e){var s,_n28;e({swiper:r,extendParams:(s=i,_n28=o,function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var t=Object.keys(e)[0],i=e[t];"object"==_typeof(i)&&null!==i&&(0<=["navigation","pagination","scrollbar"].indexOf(t)&&!0===s[t]&&(s[t]={auto:!0}),t in s&&"enabled"in i&&(!0===s[t]&&(s[t]={enabled:!0}),"object"!=_typeof(s[t])||"enabled"in s[t]||(s[t].enabled=!0),s[t]||(s[t]={enabled:!1}))),h(_n28,e);}),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)});});var s,t=h({},A,o);return r.params=h({},t,L,i),r.originalParams=h({},r.params),r.passedParams=h({},i),r.params&&r.params.on&&Object.keys(r.params.on).forEach(function(e){r.on(e,r.params.on[e]);}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=O,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:O(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function isHorizontal(){return"horizontal"===r.params.direction;},isVertical:function isVertical(){return"vertical"===r.params.direction;},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(t=["touchstart","touchmove","touchend","touchcancel"],s=["pointerdown","pointermove","pointerup"],r.touchEventsTouch={start:t[0],move:t[1],end:t[2],cancel:t[3]},r.touchEventsDesktop={start:s[0],move:s[1],end:s[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:g(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r;}_createClass(n,[{key:"enable",value:function enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit("enable"));}},{key:"disable",value:function disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit("disable"));}},{key:"setProgress",value:function setProgress(e,t){e=Math.min(Math.max(e,0),1);var i=this.minTranslate(),e=(this.maxTranslate()-i)*e+i;this.translateTo(e,void 0===t?0:t),this.updateActiveIndex(),this.updateSlidesClasses();}},{key:"emitContainerClasses",value:function emitContainerClasses(){var t=this;if(t.params._emitClasses&&t.el){var _e119=t.el.className.split(" ").filter(function(e){return 0===e.indexOf("swiper")||0===e.indexOf(t.params.containerModifierClass);});t.emit("_containerClasses",_e119.join(" "));}}},{key:"getSlideClasses",value:function getSlideClasses(e){var t=this;return e.className.split(" ").filter(function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass);}).join(" ");}},{key:"emitSlidesClasses",value:function emitSlidesClasses(){var i=this;if(i.params._emitClasses&&i.el){var _s48=[];i.slides.each(function(e){var t=i.getSlideClasses(e);_s48.push({slideEl:e,classNames:t}),i.emit("_slideClass",e,t);}),i.emit("_slideClasses",_s48);}}},{key:"slidesPerViewDynamic",value:function slidesPerViewDynamic(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"current";var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var i=this.params,s=this.slides,_n29=this.slidesGrid,r=this.slidesSizesGrid,o=this.size,a=this.activeIndex;var l=1;if(i.centeredSlides){var _t80,_i49=s[a].swiperSlideSize;for(var _e120=a+1;_e120<s.length;_e120+=1){s[_e120]&&!_t80&&(_i49+=s[_e120].swiperSlideSize,l+=1,_i49>o&&(_t80=!0));}for(var _e121=a-1;0<=_e121;--_e121){s[_e121]&&!_t80&&(_i49+=s[_e121].swiperSlideSize,l+=1,_i49>o&&(_t80=!0));}}else if("current"===e)for(var _e122=a+1;_e122<s.length;_e122+=1){(t?_n29[_e122]+r[_e122]-_n29[a]<o:_n29[_e122]-_n29[a]<o)&&(l+=1);}else for(var _e123=a-1;0<=_e123;--_e123){_n29[a]-_n29[_e123]<o&&(l+=1);}return l;}},{key:"update",value:function update(){var t=this;var e,i;function s(){var e=t.rtlTranslate?-1*t.translate:t.translate,e=Math.min(Math.max(e,t.maxTranslate()),t.minTranslate());t.setTranslate(e),t.updateActiveIndex(),t.updateSlidesClasses();}t&&!t.destroyed&&((e=t.snapGrid,i=t.params),i.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.params.freeMode&&t.params.freeMode.enabled?(s(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||1<t.params.slidesPerView)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||s(),i.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update"));}},{key:"changeDirection",value:function changeDirection(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i=this,s=i.params.direction;return(t=t||("horizontal"===s?"vertical":"horizontal"))===s||"horizontal"!==t&&"vertical"!==t||(i.$el.removeClass(""+i.params.containerModifierClass+s).addClass(""+i.params.containerModifierClass+t),i.emitContainerClasses(),i.params.direction=t,i.slides.each(function(e){"vertical"===t?e.style.width="":e.style.height="";}),i.emit("changeDirection"),e&&i.update()),i;}},{key:"mount",value:function mount(t){var e=this;if(e.mounted)return!0;var i=O(t||e.params.el);if(!(t=i[0]))return!1;t.swiper=e;var s=function s(){return"."+(e.params.wrapperClass||"").trim().split(" ").join(".");};var _n30=function(){if(t&&t.shadowRoot&&t.shadowRoot.querySelector){var _e124=O(t.shadowRoot.querySelector(s()));return _e124.children=function(e){return i.children(e);},_e124;}return i.children(s());}();if(0===_n30.length&&e.params.createElements){var _t81=T().createElement("div");_n30=O(_t81),_t81.className=e.params.wrapperClass,i.append(_t81),i.children("."+e.params.slideClass).each(function(e){_n30.append(e);});}return Object.assign(e,{$el:i,el:t,$wrapperEl:_n30,wrapperEl:_n30[0],mounted:!0,rtl:"rtl"===t.dir.toLowerCase()||"rtl"===i.css("direction"),rtlTranslate:"horizontal"===e.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===i.css("direction")),wrongRTL:"-webkit-box"===_n30.css("display")}),!0;}},{key:"init",value:function init(e){var t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t;}},{key:"destroy",value:function destroy(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!0;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var i=this,s=i.params,_n31=i.$el,r=i.$wrapperEl,o=i.slides;if(void 0!==i.params&&!i.destroyed){if(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),_n31.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(function(e){i.off(e);}),!1!==e){i.$el[0].swiper=null;{var _a10=i;Object.keys(_a10).forEach(function(e){try{_a10[e]=null;}catch(e){}try{delete _a10[e];}catch(e){}});}}i.destroyed=!0;}return null;}}],[{key:"extendDefaults",value:function extendDefaults(e){h(L,e);}},{key:"extendedDefaults",get:function get(){return L;}},{key:"defaults",get:function get(){return A;}},{key:"installModule",value:function installModule(e){n.prototype.__modules__||(n.prototype.__modules__=[]);var t=n.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e);}},{key:"use",value:function use(e){return Array.isArray(e)?e.forEach(function(e){return n.installModule(e);}):n.installModule(e),n;}}]);return n;}();function $(i,s,n,r){var o=T();return i.params.createElements&&Object.keys(r).forEach(function(t){if(!n[t]&&!0===n.auto){var _e125=i.$el.children("."+r[t])[0];_e125||(_e125=o.createElement("div"),_e125.className=r[t],i.$el.append(_e125)),n[t]=_e125,s[t]=_e125;}}),n;}function v(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return"."+e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".");}function s(e){var i=e.effect,s=e.swiper,t=e.on,n=e.setTranslate,r=e.setTransition,o=e.overwriteParams,a=e.perspective;t("beforeInit",function(){var e;s.params.effect===i&&(s.classNames.push(""+s.params.containerModifierClass+i),a&&a()&&s.classNames.push(s.params.containerModifierClass+"3d"),e=o?o():{},Object.assign(s.params,e),Object.assign(s.originalParams,e));}),t("setTranslate",function(){s.params.effect===i&&n();}),t("setTransition",function(e,t){s.params.effect===i&&r(t);});}function z(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t;}function N(_ref32){var s=_ref32.swiper,e=_ref32.duration,t=_ref32.transformEl,n=_ref32.allSlides;var r=s.slides,o=s.activeIndex,a=s.$wrapperEl;if(s.params.virtualTranslate&&0!==e){var _e126,_i50=!1;_e126=n?t?r.find(t):r:t?r.eq(o).find(t):r.eq(o),_e126.transitionEnd(function(){if(!_i50&&s&&!s.destroyed){_i50=!0,s.animating=!1;var t=["webkitTransitionEnd","transitionend"];for(var _e127=0;_e127<t.length;_e127+=1){a.trigger(t[_e127]);}}});}}function D(e,t,i){var s="swiper-slide-shadow"+(i?"-"+i:""),n=e.transformEl?t.find(e.transformEl):t;var r=n.children("."+s);return r.length||(r=O("<div class=\"swiper-slide-shadow".concat(i?"-"+i:"","\"></div>")),n.append(r)),r;}return Object.keys(M).forEach(function(t){Object.keys(M[t]).forEach(function(e){n.prototype[e]=M[t][e];});}),n.use([function(_ref33){var r=_ref33.swiper,e=_ref33.on,t=_ref33.emit;var i=P();var s=null;var o=function o(){r&&!r.destroyed&&r.initialized&&(t("beforeResize"),t("resize"));},n=function n(){r&&!r.destroyed&&r.initialized&&t("orientationchange");};e("init",function(){r.params.resizeObserver&&void 0!==i.ResizeObserver?r&&!r.destroyed&&r.initialized&&(s=new ResizeObserver(function(e){var t=r.width,i=r.height;var s=t,n=i;e.forEach(function(_ref34){var e=_ref34.contentBoxSize,t=_ref34.contentRect,i=_ref34.target;i&&i!==r.el||(s=t?t.width:(e[0]||e).inlineSize,n=t?t.height:(e[0]||e).blockSize);}),s===t&&n===i||o();}),s.observe(r.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",n));}),e("destroy",function(){s&&s.unobserve&&r.el&&(s.unobserve(r.el),s=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",n);});},function(_ref35){var e=_ref35.swiper,t=_ref35.extendParams,i=_ref35.on,s=_ref35.emit;var n=[],r=P(),o=function o(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var i=new(r.MutationObserver||r.WebkitMutationObserver)(function(e){var t;1!==e.length?(t=function t(){s("observerUpdate",e[0]);},r.requestAnimationFrame?r.requestAnimationFrame(t):r.setTimeout(t,0)):s("observerUpdate",e[0]);});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(i);};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",function(){if(e.params.observer){if(e.params.observeParents){var t=e.$el.parents();for(var _e128=0;_e128<t.length;_e128+=1){o(t[_e128]);}}o(e.$el[0],{childList:e.params.observeSlideChildren}),o(e.$wrapperEl[0],{attributes:!1});}}),i("destroy",function(){n.forEach(function(e){e.disconnect();}),n.splice(0,n.length);});}]),n.use([function(_ref36){var x=_ref36.swiper,e=_ref36.extendParams,t=_ref36.on;var i;function T(e,t){var i=x.params.virtual;if(i.cache&&x.virtual.cache[t])return x.virtual.cache[t];var s=i.renderSlide?O(i.renderSlide.call(x,e,t)):O("<div class=\"".concat(x.params.slideClass,"\" data-swiper-slide-index=\"").concat(t,"\">").concat(e,"</div>"));return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(x.virtual.cache[t]=s),s;}function o(t){var _x$params=x.params,e=_x$params.slidesPerView,i=_x$params.slidesPerGroup,d=_x$params.centeredSlides,_x$params$virtual=x.params.virtual,u=_x$params$virtual.addSlidesBefore,h=_x$params$virtual.addSlidesAfter,_x$virtual=x.virtual,s=_x$virtual.from,n=_x$virtual.to,r=_x$virtual.slides,p=_x$virtual.slidesGrid,m=_x$virtual.offset;x.params.cssMode||x.updateActiveIndex();var f=x.activeIndex||0;var o,g,v;o=x.rtlTranslate?"right":x.isHorizontal()?"left":"top",v=d?(g=Math.floor(e/2)+i+h,Math.floor(e/2)+i+u):(g=e+(i-1)+h,i+u);var a=Math.max((f||0)-v,0),l=Math.min((f||0)+g,r.length-1),c=(x.slidesGrid[a]||0)-(x.slidesGrid[0]||0);function y(){x.updateSlides(),x.updateProgress(),x.updateSlidesClasses(),x.lazy&&x.params.lazy.enabled&&x.lazy.load();}if(Object.assign(x.virtual,{from:a,to:l,offset:c,slidesGrid:x.slidesGrid}),s===a&&n===l&&!t)return x.slidesGrid!==p&&c!==m&&x.slides.css(o,c+"px"),void x.updateProgress();if(x.params.virtual.renderExternal)return x.params.virtual.renderExternal.call(x,{offset:c,from:a,to:l,slides:function(){var t=[];for(var _e129=a;_e129<=l;_e129+=1){t.push(r[_e129]);}return t;}()}),void(x.params.virtual.renderExternalUpdate&&y());var b=[],w=[];if(t)x.$wrapperEl.find("."+x.params.slideClass).remove();else for(var _e130=s;_e130<=n;_e130+=1){(_e130<a||_e130>l)&&x.$wrapperEl.find(".".concat(x.params.slideClass,"[data-swiper-slide-index=\"").concat(_e130,"\"]")).remove();}for(var _e131=0;_e131<r.length;_e131+=1){_e131>=a&&_e131<=l&&(void 0===n||t?w.push(_e131):(_e131>n&&w.push(_e131),_e131<s&&b.push(_e131)));}w.forEach(function(e){x.$wrapperEl.append(T(r[e],e));}),b.sort(function(e,t){return t-e;}).forEach(function(e){x.$wrapperEl.prepend(T(r[e],e));}),x.$wrapperEl.children(".swiper-slide").css(o,c+"px"),y();}e({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),x.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},t("beforeInit",function(){x.params.virtual.enabled&&(x.virtual.slides=x.params.virtual.slides,x.classNames.push(x.params.containerModifierClass+"virtual"),x.params.watchSlidesProgress=!0,x.originalParams.watchSlidesProgress=!0,x.params.initialSlide||o());}),t("setTranslate",function(){x.params.virtual.enabled&&(x.params.cssMode&&!x._immediateVirtual?(clearTimeout(i),i=setTimeout(function(){o();},100)):o());}),t("init update resize",function(){x.params.virtual.enabled&&x.params.cssMode&&C(x.wrapperEl,"--swiper-virtual-size",x.virtualSize+"px");}),Object.assign(x.virtual,{appendSlide:function appendSlide(t){if("object"==_typeof(t)&&"length"in t)for(var _e132=0;_e132<t.length;_e132+=1){t[_e132]&&x.virtual.slides.push(t[_e132]);}else x.virtual.slides.push(t);o(!0);},prependSlide:function prependSlide(s){var n=x.activeIndex;var e=n+1,r=1;if(Array.isArray(s)){for(var _e133=0;_e133<s.length;_e133+=1){s[_e133]&&x.virtual.slides.unshift(s[_e133]);}e=n+s.length,r=s.length;}else x.virtual.slides.unshift(s);if(x.params.virtual.cache){var _s49=x.virtual.cache,_n32={};Object.keys(_s49).forEach(function(e){var t=_s49[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+r),_n32[parseInt(e,10)+r]=t;}),x.virtual.cache=_n32;}o(!0),x.slideTo(e,0);},removeSlide:function removeSlide(i){if(null!=i){var _t82=x.activeIndex;if(Array.isArray(i))for(var _e134=i.length-1;0<=_e134;--_e134){x.virtual.slides.splice(i[_e134],1),x.params.virtual.cache&&delete x.virtual.cache[i[_e134]],i[_e134]<_t82&&--_t82,_t82=Math.max(_t82,0);}else x.virtual.slides.splice(i,1),x.params.virtual.cache&&delete x.virtual.cache[i],i<_t82&&--_t82,_t82=Math.max(_t82,0);o(!0),x.slideTo(_t82,0);}},removeAllSlides:function removeAllSlides(){x.virtual.slides=[],x.params.virtual.cache&&(x.virtual.cache={}),o(!0),x.slideTo(0,0);},update:o});},function(_ref37){var u=_ref37.swiper,e=_ref37.extendParams,t=_ref37.on,h=_ref37.emit;var p=T(),m=P();function i(t){if(u.enabled){var _i51=u["rtlTranslate"];var _e135=t;_e135.originalEvent&&(_e135=_e135.originalEvent);var _s50=_e135.keyCode||_e135.charCode,_n33=u.params.keyboard.pageUpDown,_r18=_n33&&33===_s50,_o13=_n33&&34===_s50,_a11=37===_s50,_l8=39===_s50,_c7=38===_s50,_d3=40===_s50;if(!u.allowSlideNext&&(u.isHorizontal()&&_l8||u.isVertical()&&_d3||_o13))return!1;if(!u.allowSlidePrev&&(u.isHorizontal()&&_a11||u.isVertical()&&_c7||_r18))return!1;if(!(_e135.shiftKey||_e135.altKey||_e135.ctrlKey||_e135.metaKey||p.activeElement&&p.activeElement.nodeName&&("input"===p.activeElement.nodeName.toLowerCase()||"textarea"===p.activeElement.nodeName.toLowerCase()))){if(u.params.keyboard.onlyInViewport&&(_r18||_o13||_a11||_l8||_c7||_d3)){var _t83=!1;if(0<u.$el.parents("."+u.params.slideClass).length&&0===u.$el.parents("."+u.params.slideActiveClass).length)return;var _e136=u.$el,_h2=_e136[0].clientWidth,_s51=_e136[0].clientHeight,_p3=m.innerWidth,_n34=m.innerHeight,_r19=u.$el.offset(),_o14=(_i51&&(_r19.left-=u.$el[0].scrollLeft),[[_r19.left,_r19.top],[_r19.left+_h2,_r19.top],[_r19.left,_r19.top+_s51],[_r19.left+_h2,_r19.top+_s51]]);for(var _e137=0;_e137<_o14.length;_e137+=1){var _i52=_o14[_e137];0<=_i52[0]&&_i52[0]<=_p3&&0<=_i52[1]&&_i52[1]<=_n34&&(0===_i52[0]&&0===_i52[1]||(_t83=!0));}if(!_t83)return;}u.isHorizontal()?((_r18||_o13||_a11||_l8)&&(_e135.preventDefault?_e135.preventDefault():_e135.returnValue=!1),((_o13||_l8)&&!_i51||(_r18||_a11)&&_i51)&&u.slideNext(),((_r18||_a11)&&!_i51||(_o13||_l8)&&_i51)&&u.slidePrev()):((_r18||_o13||_c7||_d3)&&(_e135.preventDefault?_e135.preventDefault():_e135.returnValue=!1),(_o13||_d3)&&u.slideNext(),(_r18||_c7)&&u.slidePrev()),h("keyPress",_s50);}}}function s(){u.keyboard.enabled||(O(p).on("keydown",i),u.keyboard.enabled=!0);}function n(){u.keyboard.enabled&&(O(p).off("keydown",i),u.keyboard.enabled=!1);}e({keyboard:{enabled:!(u.keyboard={enabled:!1}),onlyInViewport:!0,pageUpDown:!0}}),t("init",function(){u.params.keyboard.enabled&&s();}),t("destroy",function(){u.keyboard.enabled&&n();}),Object.assign(u.keyboard,{enable:s,disable:n});},function(_ref38){var c=_ref38.swiper,r=_ref38.extendParams,e=_ref38.on,d=_ref38.emit;var o=P();var u;r({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),c.mousewheel={enabled:!1};var h,t=g();var p=[];function a(){c.enabled&&(c.mouseEntered=!0);}function l(){c.enabled&&(c.mouseEntered=!1);}function m(e){return!(c.params.mousewheel.thresholdDelta&&e.delta<c.params.mousewheel.thresholdDelta)&&!(c.params.mousewheel.thresholdTime&&g()-t<c.params.mousewheel.thresholdTime)&&(6<=e.delta&&g()-t<60||(e.direction<0?c.isEnd&&!c.params.loop||c.animating||(c.slideNext(),d("scroll",e.raw)):c.isBeginning&&!c.params.loop||c.animating||(c.slidePrev(),d("scroll",e.raw)),t=new o.Date().getTime(),0));}function i(s){var n=s,r=!0;if(c.enabled){var o=c.params.mousewheel;c.params.cssMode&&n.preventDefault();var _e138=c.$el;if("container"!==c.params.mousewheel.eventsTarget&&(_e138=O(c.params.mousewheel.eventsTarget)),!c.mouseEntered&&!_e138[0].contains(n.target)&&!o.releaseOnEdges)return!0;n.originalEvent&&(n=n.originalEvent);var _t84=0;var a=c.rtlTranslate?-1:1,l=function(e){var t=0,i=0,s=0,n=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,n=10*i,"deltaY"in e&&(n=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=n,n=0),(s||n)&&e.deltaMode&&(1===e.deltaMode?(s*=40,n*=40):(s*=800,n*=800)),s&&!t&&(t=s<1?-1:1),n&&!i&&(i=n<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:n};}(n);if(o.forceToAxis){if(c.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return!0;_t84=-l.pixelX*a;}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return!0;_t84=-l.pixelY;}}else _t84=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*a:-l.pixelY;if(0===_t84)return!0;o.invert&&(_t84=-_t84);var _i53=c.getTranslate()+_t84*o.sensitivity;if(_i53>=c.minTranslate()&&(_i53=c.minTranslate()),_i53<=c.maxTranslate()&&(_i53=c.maxTranslate()),r=!!c.params.loop||!(_i53===c.minTranslate()||_i53===c.maxTranslate()),r&&c.params.nested&&n.stopPropagation(),c.params.freeMode&&c.params.freeMode.enabled){var _s52={time:g(),delta:Math.abs(_t84),direction:Math.sign(_t84)},_r20=h&&_s52.time<h.time+500&&_s52.delta<=h.delta&&_s52.direction===h.direction;if(!_r20){h=void 0,c.params.loop&&c.loopFix();var _e139=c.getTranslate()+_t84*o.sensitivity;var _O2=c.isBeginning,_g2=c.isEnd;if(_e139>=c.minTranslate()&&(_e139=c.minTranslate()),_e139<=c.maxTranslate()&&(_e139=c.maxTranslate()),c.setTransition(0),c.setTranslate(_e139),c.updateProgress(),c.updateActiveIndex(),c.updateSlidesClasses(),(!_O2&&c.isBeginning||!_g2&&c.isEnd)&&c.updateSlidesClasses(),c.params.freeMode.sticky){clearTimeout(u),u=void 0,15<=p.length&&p.shift();var _n35=p.length?p[p.length-1]:void 0,_d4=p[0];if(p.push(_s52),_n35&&(_s52.delta>_n35.delta||_s52.direction!==_n35.direction))p.splice(0);else if(15<=p.length&&_s52.time-_d4.time<500&&1<=_d4.delta-_s52.delta&&_s52.delta<=6){var _n36=0<_t84?.8:.2;h=_s52,p.splice(0),u=E(function(){c.slideToClosest(c.params.speed,!0,void 0,_n36);},0);}u=u||E(function(){h=_s52,p.splice(0),c.slideToClosest(c.params.speed,!0,void 0,.5);},500);}if(_r20||d("scroll",n),c.params.autoplay&&c.params.autoplayDisableOnInteraction&&c.autoplay.stop(),_e139===c.minTranslate()||_e139===c.maxTranslate())return!0;}}else{var _n37={time:g(),delta:Math.abs(_t84),direction:Math.sign(_t84),raw:s},_d5=(2<=p.length&&p.shift(),p.length?p[p.length-1]:void 0);if(p.push(_n37),(!_d5||_n37.direction!==_d5.direction||_n37.delta>_d5.delta||_n37.time>_d5.time+150)&&m(_n37),function(e){var t=c.params.mousewheel;if(e.direction<0){if(c.isEnd&&!c.params.loop&&t.releaseOnEdges)return 1;}else if(c.isBeginning&&!c.params.loop&&t.releaseOnEdges)return 1;}(_n37))return!0;}return n.preventDefault?n.preventDefault():n.returnValue=!1,!1;}}function f(e){var t=c.$el;"container"!==c.params.mousewheel.eventsTarget&&(t=O(c.params.mousewheel.eventsTarget)),t[e]("mouseenter",a),t[e]("mouseleave",l),t[e]("wheel",i);}function s(){return c.params.cssMode?(c.wrapperEl.removeEventListener("wheel",i),!0):!c.mousewheel.enabled&&(f("on"),c.mousewheel.enabled=!0);}function n(){return c.params.cssMode?(c.wrapperEl.addEventListener(event,i),!0):!!c.mousewheel.enabled&&(f("off"),!(c.mousewheel.enabled=!1));}e("init",function(){!c.params.mousewheel.enabled&&c.params.cssMode&&n(),c.params.mousewheel.enabled&&s();}),e("destroy",function(){c.params.cssMode&&s(),c.mousewheel.enabled&&n();}),Object.assign(c.mousewheel,{enable:s,disable:n});},function(_ref39){var r=_ref39.swiper,e=_ref39.extendParams,t=_ref39.on,d=_ref39.emit;function s(e){var t;return e&&(t=O(e),r.params.uniqueNavElements&&"string"==typeof e&&1<t.length&&1===r.$el.find(e).length&&(t=r.$el.find(e))),t;}function i(e,t){var i=r.params.navigation;e&&0<e.length&&(e[t?"addClass":"removeClass"](i.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t),r.params.watchOverflow&&r.enabled&&e[r.isLocked?"addClass":"removeClass"](i.lockClass));}function n(){var _r$navigation;var e,t;r.params.loop||((_r$navigation=r.navigation,e=_r$navigation.$nextEl,t=_r$navigation.$prevEl),i(t,r.isBeginning&&!r.params.rewind),i(e,r.isEnd&&!r.params.rewind));}function o(e){e.preventDefault(),r.isBeginning&&!r.params.loop&&!r.params.rewind||r.slidePrev();}function a(e){e.preventDefault(),r.isEnd&&!r.params.loop&&!r.params.rewind||r.slideNext();}function l(){var e=r.params.navigation;if(r.params.navigation=$(r,r.originalParams.navigation,r.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),e.nextEl||e.prevEl){var _t85=s(e.nextEl),_i54=s(e.prevEl);_t85&&0<_t85.length&&_t85.on("click",a),_i54&&0<_i54.length&&_i54.on("click",o),Object.assign(r.navigation,{$nextEl:_t85,nextEl:_t85&&_t85[0],$prevEl:_i54,prevEl:_i54&&_i54[0]}),r.enabled||(_t85&&_t85.addClass(e.lockClass),_i54&&_i54.addClass(e.lockClass));}}function c(){var _r$navigation2=r.navigation,e=_r$navigation2.$nextEl,t=_r$navigation2.$prevEl;e&&e.length&&(e.off("click",a),e.removeClass(r.params.navigation.disabledClass)),t&&t.length&&(t.off("click",o),t.removeClass(r.params.navigation.disabledClass));}e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),r.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},t("init",function(){l(),n();}),t("toEdge fromEdge lock unlock",function(){n();}),t("destroy",function(){c();}),t("enable disable",function(){var _r$navigation3=r.navigation,e=_r$navigation3.$nextEl,t=_r$navigation3.$prevEl;e&&e[r.enabled?"removeClass":"addClass"](r.params.navigation.lockClass),t&&t[r.enabled?"removeClass":"addClass"](r.params.navigation.lockClass);}),t("click",function(e,t){var _r$navigation4=r.navigation,i=_r$navigation4.$nextEl,s=_r$navigation4.$prevEl,n=t.target;if(r.params.navigation.hideOnClick&&!O(n).is(s)&&!O(n).is(i)&&(!(r.pagination&&r.params.pagination&&r.params.pagination.clickable)||r.pagination.el!==n&&!r.pagination.el.contains(n))){var _e140;i?_e140=i.hasClass(r.params.navigation.hiddenClass):s&&(_e140=s.hasClass(r.params.navigation.hiddenClass)),d(!0===_e140?"navigationShow":"navigationHide"),i&&i.toggleClass(r.params.navigation.hiddenClass),s&&s.toggleClass(r.params.navigation.hiddenClass);}}),Object.assign(r.navigation,{update:n,init:l,destroy:c});},function(_ref40){var c=_ref40.swiper,n=_ref40.extendParams,e=_ref40.on,d=_ref40.emit;var t="swiper-pagination";var u,h=(n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function formatFractionCurrent(e){return e;},formatFractionTotal:function formatFractionTotal(e){return e;},bulletClass:t+"-bullet",bulletActiveClass:t+"-bullet-active",modifierClass:t+"-",currentClass:t+"-current",totalClass:t+"-total",hiddenClass:t+"-hidden",progressbarFillClass:t+"-progressbar-fill",progressbarOppositeClass:t+"-progressbar-opposite",clickableClass:t+"-clickable",lockClass:t+"-lock",horizontalClass:t+"-horizontal",verticalClass:t+"-vertical"}}),c.pagination={el:null,$el:null,bullets:[]},0);function p(){return!c.params.pagination.el||!c.pagination.el||!c.pagination.$el||0===c.pagination.$el.length;}function m(e,t){var i=c.params.pagination["bulletActiveClass"];e[t]().addClass(i+"-"+t)[t]().addClass(i+"-".concat(t,"-")+t);}function i(){var t=c.rtl,o=c.params.pagination;if(!p()){var _a12=(c.virtual&&c.params.virtual.enabled?c.virtual:c).slides.length,_l9=c.pagination.$el;var _r21;var i=c.params.loop?Math.ceil((_a12-2*c.loopedSlides)/c.params.slidesPerGroup):c.snapGrid.length;if(c.params.loop?(_r21=Math.ceil((c.activeIndex-c.loopedSlides)/c.params.slidesPerGroup),_r21>_a12-1-2*c.loopedSlides&&(_r21-=_a12-2*c.loopedSlides),_r21>i-1&&(_r21-=i),_r21<0&&"bullets"!==c.params.paginationType&&(_r21=i+_r21)):_r21=void 0!==c.snapIndex?c.snapIndex:c.activeIndex||0,"bullets"===o.type&&c.pagination.bullets&&0<c.pagination.bullets.length){var _d6=c.pagination.bullets;var _s53,_n38,_e141;if(o.dynamicBullets&&(u=_d6.eq(0)[c.isHorizontal()?"outerWidth":"outerHeight"](!0),_l9.css(c.isHorizontal()?"width":"height",u*(o.dynamicMainBullets+4)+"px"),1<o.dynamicMainBullets&&void 0!==c.previousIndex&&(h+=_r21-(c.previousIndex-c.loopedSlides||0),h>o.dynamicMainBullets-1?h=o.dynamicMainBullets-1:h<0&&(h=0)),_s53=Math.max(_r21-h,0),_n38=_s53+(Math.min(_d6.length,o.dynamicMainBullets)-1),_e141=(_n38+_s53)/2),_d6.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(function(e){return""+o.bulletActiveClass+e;}).join(" ")),1<_l9.length)_d6.each(function(e){var t=O(e),i=t.index();i===_r21&&t.addClass(o.bulletActiveClass),o.dynamicBullets&&(i>=_s53&&i<=_n38&&t.addClass(o.bulletActiveClass+"-main"),i===_s53&&m(t,"prev"),i===_n38&&m(t,"next"));});else{var _t86=_d6.eq(_r21),_u3=_t86.index();if(_t86.addClass(o.bulletActiveClass),o.dynamicBullets){var _t87=_d6.eq(_s53),_h3=_d6.eq(_n38);for(var _e142=_s53;_e142<=_n38;_e142+=1){_d6.eq(_e142).addClass(o.bulletActiveClass+"-main");}if(c.params.loop){if(_u3>=_d6.length){for(var _e143=o.dynamicMainBullets;0<=_e143;--_e143){_d6.eq(_d6.length-_e143).addClass(o.bulletActiveClass+"-main");}_d6.eq(_d6.length-o.dynamicMainBullets-1).addClass(o.bulletActiveClass+"-prev");}else m(_t87,"prev"),m(_h3,"next");}else m(_t87,"prev"),m(_h3,"next");}}if(o.dynamicBullets){var _a13=Math.min(_d6.length,o.dynamicMainBullets+4),_h4=(u*_a13-u)/2-_e141*u,_p4=t?"right":"left";_d6.css(c.isHorizontal()?_p4:"top",_h4+"px");}}if("fraction"===o.type&&(_l9.find(v(o.currentClass)).text(o.formatFractionCurrent(_r21+1)),_l9.find(v(o.totalClass)).text(o.formatFractionTotal(i))),"progressbar"===o.type){var s=o.progressbarOpposite?c.isHorizontal()?"vertical":"horizontal":c.isHorizontal()?"horizontal":"vertical";var _d7=(_r21+1)/i;var _e144=1,_t88=1;"horizontal"==s?_e144=_d7:_t88=_d7,_l9.find(v(o.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_e144,") scaleY(").concat(_t88,")")).transition(c.params.speed);}"custom"===o.type&&o.renderCustom?(_l9.html(o.renderCustom(c,_r21+1,i)),d("paginationRender",_l9[0])):d("paginationUpdate",_l9[0]),c.params.watchOverflow&&c.enabled&&_l9[c.isLocked?"addClass":"removeClass"](o.lockClass);}}function s(){var s=c.params.pagination;if(!p()){var _e145=(c.virtual&&c.params.virtual.enabled?c.virtual:c).slides.length,_n39=c.pagination.$el;var _i55="";if("bullets"===s.type){var _t89=c.params.loop?Math.ceil((_e145-2*c.loopedSlides)/c.params.slidesPerGroup):c.snapGrid.length;c.params.freeMode&&c.params.freeMode.enabled&&!c.params.loop&&_t89>_e145&&(_t89=_e145);for(var _e146=0;_e146<_t89;_e146+=1){s.renderBullet?_i55+=s.renderBullet.call(c,_e146,s.bulletClass):_i55+="<".concat(s.bulletElement," class=\"").concat(s.bulletClass,"\"></").concat(s.bulletElement,">");}_n39.html(_i55),c.pagination.bullets=_n39.find(v(s.bulletClass));}"fraction"===s.type&&(_i55=s.renderFraction?s.renderFraction.call(c,s.currentClass,s.totalClass):"<span class=\"".concat(s.currentClass,"\"></span> / <span class=\"").concat(s.totalClass,"\"></span>"),_n39.html(_i55)),"progressbar"===s.type&&(_i55=s.renderProgressbar?s.renderProgressbar.call(c,s.progressbarFillClass):"<span class=\"".concat(s.progressbarFillClass,"\"></span>"),_n39.html(_i55)),"custom"!==s.type&&d("paginationRender",c.pagination.$el[0]);}}function r(){c.params.pagination=$(c,c.originalParams.pagination,c.params.pagination,{el:"swiper-pagination"});var t=c.params.pagination;if(t.el){var _e147=O(t.el);0!==_e147.length&&(c.params.uniqueNavElements&&"string"==typeof t.el&&1<_e147.length&&(_e147=c.$el.find(t.el),1<_e147.length&&(_e147=_e147.filter(function(e){return O(e).parents(".swiper")[0]===c.el;}))),"bullets"===t.type&&t.clickable&&_e147.addClass(t.clickableClass),_e147.addClass(t.modifierClass+t.type),_e147.addClass(t.modifierClass+c.params.direction),"bullets"===t.type&&t.dynamicBullets&&(_e147.addClass(""+t.modifierClass+t.type+"-dynamic"),h=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&_e147.addClass(t.progressbarOppositeClass),t.clickable&&_e147.on("click",v(t.bulletClass),function(e){e.preventDefault();var t=O(this).index()*c.params.slidesPerGroup;c.params.loop&&(t+=c.loopedSlides),c.slideTo(t);}),Object.assign(c.pagination,{$el:_e147,el:_e147[0]}),c.enabled||_e147.addClass(t.lockClass));}}function o(){var e=c.params.pagination;if(!p()){var _t90=c.pagination.$el;_t90.removeClass(e.hiddenClass),_t90.removeClass(e.modifierClass+e.type),_t90.removeClass(e.modifierClass+c.params.direction),c.pagination.bullets&&c.pagination.bullets.removeClass&&c.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&_t90.off("click",v(e.bulletClass));}}e("init",function(){r(),s(),i();}),e("activeIndexChange",function(){!c.params.loop&&void 0!==c.snapIndex||i();}),e("snapIndexChange",function(){c.params.loop||i();}),e("slidesLengthChange",function(){c.params.loop&&(s(),i());}),e("snapGridLengthChange",function(){c.params.loop||(s(),i());}),e("destroy",function(){o();}),e("enable disable",function(){var e=c.pagination["$el"];e&&e[c.enabled?"removeClass":"addClass"](c.params.pagination.lockClass);}),e("lock unlock",function(){i();}),e("click",function(e,t){var i=t.target,s=c.pagination["$el"];if(c.params.pagination.el&&c.params.pagination.hideOnClick&&0<s.length&&!O(i).hasClass(c.params.pagination.bulletClass)&&(!c.navigation||!(c.navigation.nextEl&&i===c.navigation.nextEl||c.navigation.prevEl&&i===c.navigation.prevEl))){var _e148=s.hasClass(c.params.pagination.hiddenClass);d(!0===_e148?"paginationShow":"paginationHide"),s.toggleClass(c.params.pagination.hiddenClass);}}),Object.assign(c.pagination,{render:s,update:i,init:r,destroy:o});},function(_ref41){var c=_ref41.swiper,i=_ref41.extendParams,e=_ref41.on,o=_ref41.emit;var p=T();var a,l,d,s,u=!1,m=null,h=null;function t(){if(c.params.scrollbar.el&&c.scrollbar.el){var _i56=c.scrollbar,_s54=c.rtlTranslate,_n40=c.progress,_r22=_i56.$dragEl,_o15=_i56.$el,_a14=c.params.scrollbar;var _e149=l,_t91=(d-l)*_n40;_s54?(_t91=-_t91,0<_t91?(_e149=l-_t91,_t91=0):-_t91+l>d&&(_e149=d+_t91)):_t91<0?(_e149=l+_t91,_t91=0):_t91+l>d&&(_e149=d-_t91),c.isHorizontal()?(_r22.transform("translate3d(".concat(_t91,"px, 0, 0)")),_r22[0].style.width=_e149+"px"):(_r22.transform("translate3d(0px, ".concat(_t91,"px, 0)")),_r22[0].style.height=_e149+"px"),_a14.hide&&(clearTimeout(m),_o15[0].style.opacity=1,m=setTimeout(function(){_o15[0].style.opacity=0,_o15.transition(400);},1e3));}}function n(){if(c.params.scrollbar.el&&c.scrollbar.el){var _e150=c["scrollbar"],_t92=_e150.$dragEl,_i57=_e150.$el;_t92[0].style.width="",_t92[0].style.height="",d=c.isHorizontal()?_i57[0].offsetWidth:_i57[0].offsetHeight,s=c.size/(c.virtualSize+c.params.slidesOffsetBefore-(c.params.centeredSlides?c.snapGrid[0]:0)),l="auto"===c.params.scrollbar.dragSize?d*s:parseInt(c.params.scrollbar.dragSize,10),c.isHorizontal()?_t92[0].style.width=l+"px":_t92[0].style.height=l+"px",_i57[0].style.display=1<=s?"none":"",c.params.scrollbar.hide&&(_i57[0].style.opacity=0),c.params.watchOverflow&&c.enabled&&_e150.$el[c.isLocked?"addClass":"removeClass"](c.params.scrollbar.lockClass);}}function f(e){return c.isHorizontal()?("touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0]:e).clientX:("touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0]:e).clientY;}function g(e){var t=c.scrollbar,i=c.rtlTranslate,s=t["$el"];var n;n=(f(e)-s.offset()[c.isHorizontal()?"left":"top"]-(null!==a?a:l/2))/(d-l),n=Math.max(Math.min(n,1),0),i&&(n=1-n);e=c.minTranslate()+(c.maxTranslate()-c.minTranslate())*n;c.updateProgress(e),c.setTranslate(e),c.updateActiveIndex(),c.updateSlidesClasses();}function v(e){var t=c.params.scrollbar,i=c.scrollbar,s=c.$wrapperEl,n=i.$el,r=i.$dragEl;u=!0,a=e.target===r[0]||e.target===r?f(e)-e.target.getBoundingClientRect()[c.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),g(e),clearTimeout(h),n.transition(0),t.hide&&n.css("opacity",1),c.params.cssMode&&c.$wrapperEl.css("scroll-snap-type","none"),o("scrollbarDragStart",e);}function y(e){var t=c.scrollbar,i=c.$wrapperEl,s=t.$el,n=t.$dragEl;u&&(e.preventDefault?e.preventDefault():e.returnValue=!1,g(e),i.transition(0),s.transition(0),n.transition(0),o("scrollbarDragMove",e));}function b(e){var t=c.params.scrollbar,i=c.scrollbar,s=c.$wrapperEl,n=i["$el"];u&&(u=!1,c.params.cssMode&&(c.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(h),h=E(function(){n.css("opacity",0),n.transition(400);},1e3)),o("scrollbarDragEnd",e),t.snapOnRelease&&c.slideToClosest());}function r(e){var t=c.scrollbar,i=c.touchEventsTouch,s=c.touchEventsDesktop,n=c.params,r=c.support,o=t.$el[0],a=!(!r.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},l=!(!r.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};o&&(e="on"===e?"addEventListener":"removeEventListener",r.touch?(o[e](i.start,v,a),o[e](i.move,y,a),o[e](i.end,b,l)):(o[e](s.start,v,a),p[e](s.move,y,a),p[e](s.end,b,l)));}function w(){var i=c.scrollbar,s=c.$el;c.params.scrollbar=$(c,c.originalParams.scrollbar,c.params.scrollbar,{el:"swiper-scrollbar"});var n=c.params.scrollbar;if(n.el){var _e151=O(n.el),_t93=(c.params.uniqueNavElements&&"string"==typeof n.el&&1<_e151.length&&1===s.find(n.el).length&&(_e151=s.find(n.el)),_e151.find("."+c.params.scrollbar.dragClass));0===_t93.length&&(_t93=O("<div class=\"".concat(c.params.scrollbar.dragClass,"\"></div>")),_e151.append(_t93)),Object.assign(i,{$el:_e151,el:_e151[0],$dragEl:_t93,dragEl:_t93[0]}),n.draggable&&c.params.scrollbar.el&&r("on"),_e151&&_e151[c.enabled?"removeClass":"addClass"](c.params.scrollbar.lockClass);}}function x(){c.params.scrollbar.el&&r("off");}i({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),c.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},e("init",function(){w(),n(),t();}),e("update resize observerUpdate lock unlock",function(){n();}),e("setTranslate",function(){t();}),e("setTransition",function(e,t){c.params.scrollbar.el&&c.scrollbar.el&&c.scrollbar.$dragEl.transition(t);}),e("enable disable",function(){var e=c.scrollbar["$el"];e&&e[c.enabled?"removeClass":"addClass"](c.params.scrollbar.lockClass);}),e("destroy",function(){x();}),Object.assign(c.scrollbar,{updateSize:n,setTranslate:t,init:w,destroy:x});},function(_ref42){var c=_ref42.swiper,e=_ref42.extendParams,t=_ref42.on;e({parallax:{enabled:!1}});var r=function r(e,t){var i=c["rtl"],s=O(e),n=i?-1:1,r=s.attr("data-swiper-parallax")||"0";var o=s.attr("data-swiper-parallax-x"),a=s.attr("data-swiper-parallax-y");var e=s.attr("data-swiper-parallax-scale"),l=s.attr("data-swiper-parallax-opacity");if(o||a?(o=o||"0",a=a||"0"):c.isHorizontal()?(o=r,a="0"):(a=r,o="0"),o=0<=o.indexOf("%")?parseInt(o,10)*t*n+"%":o*t*n+"px",a=0<=a.indexOf("%")?parseInt(a,10)*t+"%":a*t+"px",null!=l){var _c8=l-(l-1)*(1-Math.abs(t));s[0].style.opacity=_c8;}if(null==e)s.transform("translate3d(".concat(o,", ").concat(a,", 0px)"));else{var _c9=e-(e-1)*(1-Math.abs(t));s.transform("translate3d(".concat(o,", ").concat(a,", 0px) scale(").concat(_c9,")"));}},i=function i(){var e=c.$el,t=c.slides,s=c.progress,n=c.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e){r(e,s);}),t.each(function(e,t){var i=e.progress;1<c.params.slidesPerGroup&&"auto"!==c.params.slidesPerView&&(i+=Math.ceil(t/2)-s*(n.length-1)),i=Math.min(Math.max(i,-1),1),O(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e){r(e,i);});});};t("beforeInit",function(){c.params.parallax.enabled&&(c.params.watchSlidesProgress=!0,c.originalParams.watchSlidesProgress=!0);}),t("init",function(){c.params.parallax.enabled&&i();}),t("setTranslate",function(){c.params.parallax.enabled&&i();}),t("setTransition",function(e,t){if(c.params.parallax.enabled){var _t94=t,s=_t94===void 0?c.params.speed:_t94;var _i58=c["$el"];_i58.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e){var t=O(e);var i=parseInt(t.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),t.transition(i);});}else;});},function(_ref43){var x=_ref43.swiper,i=_ref43.extendParams,e=_ref43.on,s=_ref43.emit;var S=P();i({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),x.zoom={enabled:!1};var t,r,o,T=1,c=!1;var E={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},_={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},a={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};var n=1;function d(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,e=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(e-i,2));}function u(e){var t=x.support,i=x.params.zoom;if(r=!1,o=!1,!t.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;r=!0,E.scaleStart=d(e);}E.$slideEl&&E.$slideEl.length||(E.$slideEl=O(e.target).closest("."+x.params.slideClass),0===E.$slideEl.length&&(E.$slideEl=x.slides.eq(x.activeIndex)),E.$imageEl=E.$slideEl.find("."+i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),E.$imageWrapEl=E.$imageEl.parent("."+i.containerClass),E.maxRatio=E.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==E.$imageWrapEl.length)?(E.$imageEl&&E.$imageEl.transition(0),c=!0):E.$imageEl=void 0;}function h(e){var t=x.support,i=x.params.zoom,s=x.zoom;if(!t.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;o=!0,E.scaleMove=d(e);}E.$imageEl&&0!==E.$imageEl.length?(t.gestures?s.scale=e.scale*T:s.scale=E.scaleMove/E.scaleStart*T,s.scale>E.maxRatio&&(s.scale=E.maxRatio-1+Math.pow(s.scale-E.maxRatio+1,.5)),s.scale<i.minRatio&&(s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)),E.$imageEl.transform("translate3d(0,0,0) scale(".concat(s.scale,")"))):"gesturechange"===e.type&&u(e);}function l(e){var t=x.device,i=x.support,s=x.params.zoom,n=x.zoom;if(!i.gestures){if(!r||!o)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!t.android)return;r=!1,o=!1;}E.$imageEl&&0!==E.$imageEl.length&&(n.scale=Math.max(Math.min(n.scale,E.maxRatio),s.minRatio),E.$imageEl.transition(x.params.speed).transform("translate3d(0,0,0) scale(".concat(n.scale,")")),T=n.scale,c=!1,1===n.scale&&(E.$slideEl=void 0));}function p(e){var t=x.zoom;if(E.$imageEl&&0!==E.$imageEl.length&&(x.allowClick=!1,_.isTouched&&E.$slideEl)){_.isMoved||(_.width=E.$imageEl[0].offsetWidth,_.height=E.$imageEl[0].offsetHeight,_.startX=I(E.$imageWrapEl[0],"x")||0,_.startY=I(E.$imageWrapEl[0],"y")||0,E.slideWidth=E.$slideEl[0].offsetWidth,E.slideHeight=E.$slideEl[0].offsetHeight,E.$imageWrapEl.transition(0));var i=_.width*t.scale,t=_.height*t.scale;if(!(i<E.slideWidth&&t<E.slideHeight)){if(_.minX=Math.min(E.slideWidth/2-i/2,0),_.maxX=-_.minX,_.minY=Math.min(E.slideHeight/2-t/2,0),_.maxY=-_.minY,_.touchesCurrent.x=("touchmove"===e.type?e.targetTouches[0]:e).pageX,_.touchesCurrent.y=("touchmove"===e.type?e.targetTouches[0]:e).pageY,!_.isMoved&&!c){if(x.isHorizontal()&&(Math.floor(_.minX)===Math.floor(_.startX)&&_.touchesCurrent.x<_.touchesStart.x||Math.floor(_.maxX)===Math.floor(_.startX)&&_.touchesCurrent.x>_.touchesStart.x))return void(_.isTouched=!1);if(!x.isHorizontal()&&(Math.floor(_.minY)===Math.floor(_.startY)&&_.touchesCurrent.y<_.touchesStart.y||Math.floor(_.maxY)===Math.floor(_.startY)&&_.touchesCurrent.y>_.touchesStart.y))return void(_.isTouched=!1);}e.cancelable&&e.preventDefault(),e.stopPropagation(),_.isMoved=!0,_.currentX=_.touchesCurrent.x-_.touchesStart.x+_.startX,_.currentY=_.touchesCurrent.y-_.touchesStart.y+_.startY,_.currentX<_.minX&&(_.currentX=_.minX+1-Math.pow(_.minX-_.currentX+1,.8)),_.currentX>_.maxX&&(_.currentX=_.maxX-1+Math.pow(_.currentX-_.maxX+1,.8)),_.currentY<_.minY&&(_.currentY=_.minY+1-Math.pow(_.minY-_.currentY+1,.8)),_.currentY>_.maxY&&(_.currentY=_.maxY-1+Math.pow(_.currentY-_.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=_.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=_.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(_.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(_.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(_.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(_.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=_.touchesCurrent.x,a.prevPositionY=_.touchesCurrent.y,a.prevTime=Date.now(),E.$imageWrapEl.transform("translate3d(".concat(_.currentX,"px, ").concat(_.currentY,"px,0)"));}}}function m(){var e=x.zoom;E.$slideEl&&x.previousIndex!==x.activeIndex&&(E.$imageEl&&E.$imageEl.transform("translate3d(0,0,0) scale(1)"),E.$imageWrapEl&&E.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,T=1,E.$slideEl=void 0,E.$imageEl=void 0,E.$imageWrapEl=void 0);}function f(y){var b=x.zoom,w=x.params.zoom;if(E.$slideEl||(y&&y.target&&(E.$slideEl=O(y.target).closest("."+x.params.slideClass)),E.$slideEl||(x.params.virtual&&x.params.virtual.enabled&&x.virtual?E.$slideEl=x.$wrapperEl.children("."+x.params.slideActiveClass):E.$slideEl=x.slides.eq(x.activeIndex)),E.$imageEl=E.$slideEl.find("."+w.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),E.$imageWrapEl=E.$imageEl.parent("."+w.containerClass)),E.$imageEl&&0!==E.$imageEl.length&&E.$imageWrapEl&&0!==E.$imageWrapEl.length){var _e152,_t95,_d8,_u4,_h5,_p5,_i59,_s55,_m3,_f2,_g3,_v,_n41,_r23,_o16,_a15,_l10,_c10;x.params.cssMode&&(x.wrapperEl.style.overflow="hidden",x.wrapperEl.style.touchAction="none"),E.$slideEl.addClass(""+w.zoomedSlideClass),_t95=void 0===_.touchesStart.x&&y?(_e152=("touchend"===y.type?y.changedTouches[0]:y).pageX,("touchend"===y.type?y.changedTouches[0]:y).pageY):(_e152=_.touchesStart.x,_.touchesStart.y),b.scale=E.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,T=E.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,y?(_l10=E.$slideEl[0].offsetWidth,_c10=E.$slideEl[0].offsetHeight,_d8=E.$slideEl.offset().left+S.scrollX,_u4=E.$slideEl.offset().top+S.scrollY,_h5=_d8+_l10/2-_e152,_p5=_u4+_c10/2-_t95,_m3=E.$imageEl[0].offsetWidth,_f2=E.$imageEl[0].offsetHeight,_g3=_m3*b.scale,_v=_f2*b.scale,_o16=-(_n41=Math.min(_l10/2-_g3/2,0)),_a15=-(_r23=Math.min(_c10/2-_v/2,0)),_i59=_h5*b.scale,_s55=_p5*b.scale,_i59<_n41&&(_i59=_n41),_i59>_o16&&(_i59=_o16),_s55<_r23&&(_s55=_r23),_s55>_a15&&(_s55=_a15)):(_i59=0,_s55=0),E.$imageWrapEl.transition(300).transform("translate3d(".concat(_i59,"px, ").concat(_s55,"px,0)")),E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(b.scale,")"));}}function g(){var e=x.zoom,t=x.params.zoom;E.$slideEl||(x.params.virtual&&x.params.virtual.enabled&&x.virtual?E.$slideEl=x.$wrapperEl.children("."+x.params.slideActiveClass):E.$slideEl=x.slides.eq(x.activeIndex),E.$imageEl=E.$slideEl.find("."+t.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),E.$imageWrapEl=E.$imageEl.parent("."+t.containerClass)),E.$imageEl&&0!==E.$imageEl.length&&E.$imageWrapEl&&0!==E.$imageWrapEl.length&&(x.params.cssMode&&(x.wrapperEl.style.overflow="",x.wrapperEl.style.touchAction=""),e.scale=1,T=1,E.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),E.$slideEl.removeClass(""+t.zoomedSlideClass),E.$slideEl=void 0);}function v(e){var t=x.zoom;t.scale&&1!==t.scale?g():f(e);}function y(){var e=x.support;return{passiveListener:!("touchstart"!==x.touchEvents.start||!e.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}};}function b(){return"."+x.params.slideClass;}function w(e){var t=y()["passiveListener"],i=b();x.$wrapperEl[e]("gesturestart",i,u,t),x.$wrapperEl[e]("gesturechange",i,h,t),x.$wrapperEl[e]("gestureend",i,l,t);}function C(){t||(t=!0,w("on"));}function k(){t&&(t=!1,w("off"));}function A(){var _y;var e=x.zoom;var t,i,s,n;e.enabled||(e.enabled=!0,t=x.support,(_y=y(),i=_y.passiveListener,s=_y.activeListenerWithCapture),n=b(),t.gestures?(x.$wrapperEl.on(x.touchEvents.start,C,i),x.$wrapperEl.on(x.touchEvents.end,k,i)):"touchstart"===x.touchEvents.start&&(x.$wrapperEl.on(x.touchEvents.start,n,u,i),x.$wrapperEl.on(x.touchEvents.move,n,h,s),x.$wrapperEl.on(x.touchEvents.end,n,l,i),x.touchEvents.cancel&&x.$wrapperEl.on(x.touchEvents.cancel,n,l,i)),x.$wrapperEl.on(x.touchEvents.move,"."+x.params.zoom.containerClass,p,s));}function M(){var _ref44;var e=x.zoom;var t,i,s,n;e.enabled&&(t=x.support,(_ref44=(e.enabled=!1,y()),i=_ref44.passiveListener,s=_ref44.activeListenerWithCapture),n=b(),t.gestures?(x.$wrapperEl.off(x.touchEvents.start,C,i),x.$wrapperEl.off(x.touchEvents.end,k,i)):"touchstart"===x.touchEvents.start&&(x.$wrapperEl.off(x.touchEvents.start,n,u,i),x.$wrapperEl.off(x.touchEvents.move,n,h,s),x.$wrapperEl.off(x.touchEvents.end,n,l,i),x.touchEvents.cancel&&x.$wrapperEl.off(x.touchEvents.cancel,n,l,i)),x.$wrapperEl.off(x.touchEvents.move,"."+x.params.zoom.containerClass,p,s));}Object.defineProperty(x.zoom,"scale",{get:function get(){return n;},set:function set(e){var t,i;n!==e&&(t=E.$imageEl?E.$imageEl[0]:void 0,i=E.$slideEl?E.$slideEl[0]:void 0,s("zoomChange",e,t,i)),n=e;}}),e("init",function(){x.params.zoom.enabled&&A();}),e("destroy",function(){M();}),e("touchStart",function(e,t){var i;x.zoom.enabled&&(t=t,i=x.device,E.$imageEl&&0!==E.$imageEl.length&&(_.isTouched||(i.android&&t.cancelable&&t.preventDefault(),_.isTouched=!0,_.touchesStart.x=("touchstart"===t.type?t.targetTouches[0]:t).pageX,_.touchesStart.y=("touchstart"===t.type?t.targetTouches[0]:t).pageY)));}),e("touchEnd",function(e,t){if(x.zoom.enabled){var i=x.zoom;if(E.$imageEl&&0!==E.$imageEl.length){if(!_.isTouched||!_.isMoved)return void(_.isTouched=!1,_.isMoved=!1);_.isTouched=!1,_.isMoved=!1;var _e153=300,_t96=300;var s=a.x*_e153,s=_.currentX+s,n=a.y*_t96,n=_.currentY+n,r=(0!==a.x&&(_e153=Math.abs((s-_.currentX)/a.x)),0!==a.y&&(_t96=Math.abs((n-_.currentY)/a.y)),Math.max(_e153,_t96)),s=(_.currentX=s,_.currentY=n,_.width*i.scale),n=_.height*i.scale;_.minX=Math.min(E.slideWidth/2-s/2,0),_.maxX=-_.minX,_.minY=Math.min(E.slideHeight/2-n/2,0),_.maxY=-_.minY,_.currentX=Math.max(Math.min(_.currentX,_.maxX),_.minX),_.currentY=Math.max(Math.min(_.currentY,_.maxY),_.minY),E.$imageWrapEl.transition(r).transform("translate3d(".concat(_.currentX,"px, ").concat(_.currentY,"px,0)"));}}else;}),e("doubleTap",function(e,t){!x.animating&&x.params.zoom.enabled&&x.zoom.enabled&&x.params.zoom.toggle&&v(t);}),e("transitionEnd",function(){x.zoom.enabled&&x.params.zoom.enabled&&m();}),e("slideChange",function(){x.zoom.enabled&&x.params.zoom.enabled&&x.params.cssMode&&m();}),Object.assign(x.zoom,{enable:A,disable:M,"in":f,out:g,toggle:v});},function(_ref45){var d=_ref45.swiper,e=_ref45.extendParams,t=_ref45.on,u=_ref45.emit;e({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}});var h=!(d.lazy={}),c=!1;function p(e){var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var l=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var _c11=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children(".".concat(d.params.slideClass,"[data-swiper-slide-index=\"").concat(e,"\"]")):d.slides.eq(e),_t97=_c11.find(".".concat(l.elementClass,":not(.").concat(l.loadedClass,"):not(.").concat(l.loadingClass,")"));!_c11.hasClass(l.elementClass)||_c11.hasClass(l.loadedClass)||_c11.hasClass(l.loadingClass)||_t97.push(_c11[0]),0!==_t97.length&&_t97.each(function(e){var t=O(e),i=(t.addClass(l.loadingClass),t.attr("data-background")),s=t.attr("data-src"),n=t.attr("data-srcset"),r=t.attr("data-sizes"),o=t.parent("picture");d.loadImage(t[0],s||i,n,r,!1,function(){var e;null==d||!d||d&&!d.params||d.destroyed||(i?(t.css("background-image","url(\"".concat(i,"\")")),t.removeAttr("data-background")):(n&&(t.attr("srcset",n),t.removeAttr("data-srcset")),r&&(t.attr("sizes",r),t.removeAttr("data-sizes")),o.length&&o.children("source").each(function(e){var t=O(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"));}),s&&(t.attr("src",s),t.removeAttr("data-src"))),t.addClass(l.loadedClass).removeClass(l.loadingClass),_c11.find("."+l.preloaderClass).remove(),d.params.loop&&a&&(e=_c11.attr("data-swiper-slide-index"),_c11.hasClass(d.params.slideDuplicateClass)?p(d.$wrapperEl.children("[data-swiper-slide-index=\"".concat(e,"\"]:not(.").concat(d.params.slideDuplicateClass,")")).index(),!1):p(d.$wrapperEl.children(".".concat(d.params.slideDuplicateClass,"[data-swiper-slide-index=\"").concat(e,"\"]")).index(),!1)),u("lazyImageReady",_c11[0],t[0]),d.params.autoHeight&&d.updateAutoHeight());}),u("lazyImageLoad",_c11[0],t[0]);});}}function m(){var t=d.$wrapperEl,i=d.params,s=d.slides,n=d.activeIndex,r=d.virtual&&i.virtual.enabled,e=i.lazy;var o=i.slidesPerView;function a(e){if(r){if(t.children(".".concat(i.slideClass,"[data-swiper-slide-index=\"").concat(e,"\"]")).length)return 1;}else if(s[e])return 1;}function l(e){return r?O(e).attr("data-swiper-slide-index"):O(e).index();}if("auto"===o&&(o=0),c=c||!0,d.params.watchSlidesProgress)t.children("."+i.slideVisibleClass).each(function(e){p(r?O(e).attr("data-swiper-slide-index"):O(e).index());});else if(1<o)for(var _e154=n;_e154<n+o;_e154+=1){a(_e154)&&p(_e154);}else p(n);if(e.loadPrevNext)if(1<o||e.loadPrevNextAmount&&1<e.loadPrevNextAmount){var _d9=e.loadPrevNextAmount,_t98=o,_i60=Math.min(n+_t98+Math.max(_d9,_t98),s.length),_r24=Math.max(n-Math.max(_t98,_d9),0);for(var _e155=n+o;_e155<_i60;_e155+=1){a(_e155)&&p(_e155);}for(var _e156=_r24;_e156<n;_e156+=1){a(_e156)&&p(_e156);}}else{var _d10=t.children("."+i.slideNextClass),_s56=(0<_d10.length&&p(l(_d10)),t.children("."+i.slidePrevClass));0<_s56.length&&p(l(_s56));}}function f(){var i=P();if(d&&!d.destroyed){var _n42=d.params.lazy.scrollingElement?O(d.params.lazy.scrollingElement):O(i),_r25=_n42[0]===i,_o17=_r25?i.innerWidth:_n42[0].offsetWidth,_a16=_r25?i.innerHeight:_n42[0].offsetHeight,_l11=d.$el.offset(),_c12=d["rtlTranslate"];var _t99=!1;_c12&&(_l11.left-=d.$el[0].scrollLeft);var s=[[_l11.left,_l11.top],[_l11.left+d.width,_l11.top],[_l11.left,_l11.top+d.height],[_l11.left+d.width,_l11.top+d.height]];for(var _e157=0;_e157<s.length;_e157+=1){var _i61=s[_e157];0<=_i61[0]&&_i61[0]<=_o17&&0<=_i61[1]&&_i61[1]<=_a16&&(0===_i61[0]&&0===_i61[1]||(_t99=!0));}var e=!("touchstart"!==d.touchEvents.start||!d.support.passiveListener||!d.params.passiveListeners)&&{passive:!0,capture:!1};_t99?(m(),_n42.off("scroll",f,e)):h||(h=!0,_n42.on("scroll",f,e));}}t("beforeInit",function(){d.params.lazy.enabled&&d.params.preloadImages&&(d.params.preloadImages=!1);}),t("init",function(){d.params.lazy.enabled&&(d.params.lazy.checkInView?f:m)();}),t("scroll",function(){d.params.freeMode&&d.params.freeMode.enabled&&!d.params.freeMode.sticky&&m();}),t("scrollbarDragMove resize _freeModeNoMomentumRelease",function(){d.params.lazy.enabled&&(d.params.lazy.checkInView?f:m)();}),t("transitionStart",function(){d.params.lazy.enabled&&(d.params.lazy.loadOnTransitionStart||!d.params.lazy.loadOnTransitionStart&&!c)&&(d.params.lazy.checkInView?f:m)();}),t("transitionEnd",function(){d.params.lazy.enabled&&!d.params.lazy.loadOnTransitionStart&&(d.params.lazy.checkInView?f:m)();}),t("slideChange",function(){var _d$params=d.params,e=_d$params.lazy,t=_d$params.cssMode,i=_d$params.watchSlidesProgress,s=_d$params.touchReleaseOnEdges,n=_d$params.resistanceRatio;e.enabled&&(t||i&&(s||0===n))&&m();}),Object.assign(d.lazy,{load:m,loadInSlide:p});},function(_ref46){var a=_ref46.swiper,e=_ref46.extendParams,t=_ref46.on;function l(e,t){var i=function(){var i,s,n;return function(e,t){for(s=-1,i=e.length;1<i-s;){n=i+s>>1,e[n]<=t?s=n:i=n;}return i;};}();var s,n;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=i(this.x,e),s=n-1,(e-this.x[s])*(this.y[n]-this.y[s])/(this.x[n]-this.x[s])+this.y[s]):0;},this;}function i(){a.controller.control&&a.controller.spline&&(a.controller.spline=void 0,delete a.controller.spline);}e({controller:{control:void 0,inverse:!1,by:"slide"}}),a.controller={control:void 0},t("beforeInit",function(){a.controller.control=a.params.controller.control;}),t("update",function(){i();}),t("resize",function(){i();}),t("observerUpdate",function(){i();}),t("setTranslate",function(e,t,i){a.controller.control&&a.controller.setTranslate(t,i);}),t("setTransition",function(e,t,i){a.controller.control&&a.controller.setTransition(t,i);}),Object.assign(a.controller,{setTranslate:function setTranslate(e,t){var i=a.controller.control;var s,n;var r=a.constructor;function o(e){var t,i=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(t=e,a.controller.spline||(a.controller.spline=a.params.loop?new l(a.slidesGrid,t.slidesGrid):new l(a.snapGrid,t.snapGrid)),n=-a.controller.spline.interpolate(-i)),n&&"container"!==a.params.controller.by||(s=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),n=(i-a.minTranslate())*s+e.minTranslate()),a.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,a),e.updateActiveIndex(),e.updateSlidesClasses();}if(Array.isArray(i))for(var _e158=0;_e158<i.length;_e158+=1){i[_e158]!==t&&i[_e158]instanceof r&&o(i[_e158]);}else i instanceof r&&t!==i&&o(i);},setTransition:function setTransition(t,e){var i=a.constructor,s=a.controller.control;var n;function r(e){e.setTransition(t,a),0!==t&&(e.transitionStart(),e.params.autoHeight&&E(function(){e.updateAutoHeight();}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===a.params.controller.by&&e.loopFix(),e.transitionEnd());}));}if(Array.isArray(s))for(n=0;n<s.length;n+=1){s[n]!==e&&s[n]instanceof i&&r(s[n]);}else s instanceof i&&e!==s&&r(s);}});},function(_ref47){var l=_ref47.swiper,r=_ref47.extendParams,e=_ref47.on;r({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}});var c=null;function s(e){var t=c;0!==t.length&&(t.html(""),t.html(e));}function n(e){e.attr("tabIndex","0");}function i(e){e.attr("tabIndex","-1");}function d(e,t){e.attr("role",t);}function p(e,t){e.attr("aria-roledescription",t);}function u(e,t){e.attr("aria-label",t);}function o(e){e.attr("aria-disabled",!0);}function a(e){e.attr("aria-disabled",!1);}function h(e){if(13===e.keyCode||32===e.keyCode){var _t100=l.params.a11y,_i62=O(e.target);l.navigation&&l.navigation.$nextEl&&_i62.is(l.navigation.$nextEl)&&(l.isEnd&&!l.params.loop||l.slideNext(),l.isEnd?s(_t100.lastSlideMessage):s(_t100.nextSlideMessage)),l.navigation&&l.navigation.$prevEl&&_i62.is(l.navigation.$prevEl)&&(l.isBeginning&&!l.params.loop||l.slidePrev(),l.isBeginning?s(_t100.firstSlideMessage):s(_t100.prevSlideMessage)),l.pagination&&_i62.is(v(l.params.pagination.bulletClass))&&_i62[0].click();}}function t(){var _l$navigation;var e,t;l.params.loop||l.params.rewind||!l.navigation||((_l$navigation=l.navigation,e=_l$navigation.$nextEl,t=_l$navigation.$prevEl),t&&0<t.length&&(l.isBeginning?(o(t),i(t)):(a(t),n(t))),e&&0<e.length&&(l.isEnd?(o(e),i(e)):(a(e),n(e))));}function m(){return l.pagination&&l.pagination.bullets&&l.pagination.bullets.length;}function f(){return m()&&l.params.pagination.clickable;}var g=function g(e,t,i){n(e),"BUTTON"!==e[0].tagName&&(d(e,"button"),e.on("keydown",h)),u(e,i),e.attr("aria-controls",t);};e("beforeInit",function(){c=O("<span class=\"".concat(l.params.a11y.notificationClass,"\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));}),e("afterInit",function(){if(l.params.a11y.enabled){{var _n43=l.params.a11y;l.$el.append(c);var i=l.$el;_n43.containerRoleDescriptionMessage&&p(i,_n43.containerRoleDescriptionMessage),_n43.containerMessage&&u(i,_n43.containerMessage);var _s57=l.$wrapperEl,_r26=_s57.attr("id")||"swiper-wrapper-"+"x".repeat(16).replace(/x/g,function(){return Math.round(16*Math.random()).toString(16);}),_o18=l.params.autoplay&&l.params.autoplay.enabled?"off":"polite",_a17=(_s57.attr("id",_r26),_s57.attr("aria-live",_o18),_n43.itemRoleDescriptionMessage&&p(O(l.slides),_n43.itemRoleDescriptionMessage),d(O(l.slides),_n43.slideRole),(l.params.loop?l.slides.filter(function(e){return!e.classList.contains(l.params.slideDuplicateClass);}):l.slides).length);var _e159,_t101;l.slides.each(function(e,t){var i=O(e),s=l.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):t;u(i,_n43.slideLabelMessage.replace(/\{\{index\}\}/,s+1).replace(/\{\{slidesLength\}\}/,_a17));}),l.navigation&&l.navigation.$nextEl&&(_e159=l.navigation.$nextEl),l.navigation&&l.navigation.$prevEl&&(_t101=l.navigation.$prevEl),_e159&&_e159.length&&g(_e159,_r26,_n43.nextSlideMessage),_t101&&_t101.length&&g(_t101,_r26,_n43.prevSlideMessage),f()&&l.pagination.$el.on("keydown",v(l.params.pagination.bulletClass),h);}t();}else;}),e("toEdge",function(){l.params.a11y.enabled&&t();}),e("fromEdge",function(){l.params.a11y.enabled&&t();}),e("paginationUpdate",function(){if(l.params.a11y.enabled){var _i63=l.params.a11y;m()&&l.pagination.bullets.each(function(e){var t=O(e);l.params.pagination.clickable&&(n(t),l.params.pagination.renderBullet||(d(t,"button"),u(t,_i63.paginationBulletMessage.replace(/\{\{index\}\}/,t.index()+1)))),t.is("."+l.params.pagination.bulletActiveClass)?t.attr("aria-current","true"):t.removeAttr("aria-current");});}else;}),e("destroy",function(){if(l.params.a11y.enabled){var _e160,_t102;c&&0<c.length&&c.remove(),l.navigation&&l.navigation.$nextEl&&(_e160=l.navigation.$nextEl),l.navigation&&l.navigation.$prevEl&&(_t102=l.navigation.$prevEl),_e160&&_e160.off("keydown",h),_t102&&_t102.off("keydown",h),f()&&l.pagination.$el.off("keydown",v(l.params.pagination.bulletClass),h);}else;});},function(_ref48){var o=_ref48.swiper,e=_ref48.extendParams,t=_ref48.on;e({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});var a=!1,i={};var l=function l(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"");},s=function s(e){var t=P();var i;i=e?new URL(e):t.location;e=i.pathname.slice(1).split("/").filter(function(e){return""!==e;}),t=e.length;return{key:e[t-2],value:e[t-1]};},n=function n(i,s){var n=P();if(a&&o.params.history.enabled){var _e161;_e161=o.params.url?new URL(o.params.url):n.location;var _r27=o.slides.eq(s);var _t103=l(_r27.attr("data-history"));if(0<o.params.history.root.length){var _e162=o.params.history.root;"/"===_e162[_e162.length-1]&&(_e162=_e162.slice(0,_e162.length-1)),_t103=_e162+"/".concat(i,"/")+_t103;}else _e161.pathname.includes(i)||(_t103=i+"/"+_t103);s=n.history.state;s&&s.value===_t103||(o.params.history.replaceState?n.history.replaceState({value:_t103},null,_t103):n.history.pushState({value:_t103},null,_t103));}},r=function r(i,s,n){if(s)for(var _e163=0,_t104=o.slides.length;_e163<_t104;_e163+=1){var _r28=o.slides.eq(_e163);if(l(_r28.attr("data-history"))===s&&!_r28.hasClass(o.params.slideDuplicateClass)){var _s58=_r28.index();o.slideTo(_s58,i,n);}}else o.slideTo(0,i,n);},c=function c(){i=s(o.params.url),r(o.params.speed,o.paths.value,!1);};t("init",function(){if(o.params.history.enabled){var _e164=P();if(o.params.history){if(!_e164.history||!_e164.history.pushState)return void(o.params.history.enabled=!1,o.params.hashNavigation.enabled=!0);a=!0,i=s(o.params.url),(i.key||i.value)&&(r(0,i.value,o.params.runCallbacksOnInit),o.params.history.replaceState||_e164.addEventListener("popstate",c));}}else;}),t("destroy",function(){if(o.params.history.enabled){var _e165=P();o.params.history.replaceState||_e165.removeEventListener("popstate",c);}else;}),t("transitionEnd _freeModeNoMomentumRelease",function(){a&&n(o.params.history.key,o.activeIndex);}),t("slideChange",function(){a&&o.params.cssMode&&n(o.params.history.key,o.activeIndex);});},function(_ref49){var n=_ref49.swiper,e=_ref49.extendParams,i=_ref49.emit,t=_ref49.on;var r=!1;var o=T(),a=P(),l=(e({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}}),function(){i("hashChange");var e=o.location.hash.replace("#","");if(e!==n.slides.eq(n.activeIndex).attr("data-hash")){var _i64=n.$wrapperEl.children(".".concat(n.params.slideClass,"[data-hash=\"").concat(e,"\"]")).index();void 0!==_i64&&n.slideTo(_i64);}}),s=function s(){if(r&&n.params.hashNavigation.enabled)if(n.params.hashNavigation.replaceState&&a.history&&a.history.replaceState)a.history.replaceState(null,null,"#"+n.slides.eq(n.activeIndex).attr("data-hash")||false),i("hashSet");else{var _e166=n.slides.eq(n.activeIndex),_t105=_e166.attr("data-hash")||_e166.attr("data-history");o.location.hash=_t105||"",i("hashSet");}};t("init",function(){if(n.params.hashNavigation.enabled){if(!(!n.params.hashNavigation.enabled||n.params.history&&n.params.history.enabled)){r=!0;var _i65=o.location.hash.replace("#","");if(_i65)for(var _e167=0,_t106=n.slides.length;_e167<_t106;_e167+=1){var _s59=n.slides.eq(_e167);if((_s59.attr("data-hash")||_s59.attr("data-history"))===_i65&&!_s59.hasClass(n.params.slideDuplicateClass)){var _i66=_s59.index();n.slideTo(_i66,0,n.params.runCallbacksOnInit,!0);}}n.params.hashNavigation.watchState&&O(a).on("hashchange",l);}}else;}),t("destroy",function(){n.params.hashNavigation.enabled&&n.params.hashNavigation.watchState&&O(a).off("hashchange",l);}),t("transitionEnd _freeModeNoMomentumRelease",function(){r&&s();}),t("slideChange",function(){r&&n.params.cssMode&&s();});},function(_ref50){var s=_ref50.swiper,d=_ref50.extendParams,e=_ref50.on,i=_ref50.emit;var n;function r(){var e=s.slides.eq(s.activeIndex);var t=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(t=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(n),n=E(function(){var e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),i("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?o():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),i("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),i("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),i("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?o():(e=s.slideTo(0,s.params.speed,!0,!0),i("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),i("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&r();},t);}function t(){return void 0===n&&!s.autoplay.running&&(s.autoplay.running=!0,i("autoplayStart"),r(),!0);}function o(){return!!s.autoplay.running&&void 0!==n&&(n&&(clearTimeout(n),n=void 0),s.autoplay.running=!1,i("autoplayStop"),!0);}function a(e){s.autoplay.running&&(s.autoplay.paused||(n&&clearTimeout(n),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach(function(e){s.$wrapperEl[0].addEventListener(e,c);}):(s.autoplay.paused=!1,r())));}function l(){var e=T();"hidden"===e.visibilityState&&s.autoplay.running&&a(),"visible"===e.visibilityState&&s.autoplay.paused&&(r(),s.autoplay.paused=!1);}function c(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(function(e){s.$wrapperEl[0].removeEventListener(e,c);}),s.autoplay.paused=!1,(s.autoplay.running?r:o)());}function u(){(s.params.autoplay.disableOnInteraction?o:a)(),["transitionend","webkitTransitionEnd"].forEach(function(e){s.$wrapperEl[0].removeEventListener(e,c);});}function h(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,r());}d({autoplay:{enabled:!(s.autoplay={running:!1,paused:!1}),delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),e("init",function(){s.params.autoplay.enabled&&(t(),T().addEventListener("visibilitychange",l),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",u),s.$el.on("mouseleave",h)));}),e("beforeTransitionStart",function(e,t,i){s.autoplay.running&&(i||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):o());}),e("sliderFirstMove",function(){s.autoplay.running&&(s.params.autoplay.disableOnInteraction?o:a)();}),e("touchEnd",function(){s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&r();}),e("destroy",function(){s.$el.off("mouseenter",u),s.$el.off("mouseleave",h),s.autoplay.running&&o(),T().removeEventListener("visibilitychange",l);}),Object.assign(s.autoplay,{pause:a,run:r,start:t,stop:o});},function(_ref51){var l=_ref51.swiper,e=_ref51.extendParams,t=_ref51.on;e({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});var i=!1,s=!1;function n(){var e=l.thumbs.swiper;if(e){var _i67=e.clickedIndex,_s60=e.clickedSlide;if(!(_s60&&O(_s60).hasClass(l.params.thumbs.slideThumbActiveClass)||null==_i67)){var _t107;if(_t107=e.params.loop?parseInt(O(e.clickedSlide).attr("data-swiper-slide-index"),10):_i67,l.params.loop){var _e168=l.activeIndex;l.slides.eq(_e168).hasClass(l.params.slideDuplicateClass)&&(l.loopFix(),l._clientLeft=l.$wrapperEl[0].clientLeft,_e168=l.activeIndex);var _i68=l.slides.eq(_e168).prevAll("[data-swiper-slide-index=\"".concat(_t107,"\"]")).eq(0).index(),_s61=l.slides.eq(_e168).nextAll("[data-swiper-slide-index=\"".concat(_t107,"\"]")).eq(0).index();_t107=void 0===_i68||void 0!==_s61&&_s61-_e168<_e168-_i68?_s61:_i68;}l.slideTo(_t107);}}}function r(){var e=l.params["thumbs"];if(i)return!1;i=!0;var t=l.constructor;if(e.swiper instanceof t)l.thumbs.swiper=e.swiper,Object.assign(l.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(l.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(u(e.swiper)){var _i69=Object.assign({},e.swiper);Object.assign(_i69,{watchSlidesProgress:!0,slideToClickedSlide:!1}),l.thumbs.swiper=new t(_i69),s=!0;}return l.thumbs.swiper.$el.addClass(l.params.thumbs.thumbsContainerClass),l.thumbs.swiper.on("tap",n),!0;}function o(s){var n=l.thumbs.swiper;if(n){var _r29="auto"===n.params.slidesPerView?n.slidesPerViewDynamic():n.params.slidesPerView,_o19=l.params.thumbs.autoScrollOffset,_a18=_o19&&!n.params.loop;if(l.realIndex!==n.realIndex||_a18){var _e169,_t109,_i70=n.activeIndex;if(n.params.loop){n.slides.eq(_i70).hasClass(n.params.slideDuplicateClass)&&(n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft,_i70=n.activeIndex);var _s62=n.slides.eq(_i70).prevAll("[data-swiper-slide-index=\"".concat(l.realIndex,"\"]")).eq(0).index(),_r30=n.slides.eq(_i70).nextAll("[data-swiper-slide-index=\"".concat(l.realIndex,"\"]")).eq(0).index();_e169=void 0===_s62?_r30:void 0===_r30?_s62:_r30-_i70==_i70-_s62?1<n.params.slidesPerGroup?_r30:_i70:_r30-_i70<_i70-_s62?_r30:_s62,_t109=l.activeIndex>l.previousIndex?"next":"prev";}else _e169=l.realIndex,_t109=_e169>l.previousIndex?"next":"prev";_a18&&(_e169+="next"===_t109?_o19:-1*_o19),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(_e169)<0&&(n.params.centeredSlides?_e169=_e169>_i70?_e169-Math.floor(_r29/2)+1:_e169+Math.floor(_r29/2)-1:_e169>_i70&&n.params.slidesPerGroup,n.slideTo(_e169,s?0:void 0));}var _t108=1;var i=l.params.thumbs.slideThumbActiveClass;if(1<l.params.slidesPerView&&!l.params.centeredSlides&&(_t108=l.params.slidesPerView),l.params.thumbs.multipleActiveThumbs||(_t108=1),_t108=Math.floor(_t108),n.slides.removeClass(i),n.params.loop||n.params.virtual&&n.params.virtual.enabled)for(var _e170=0;_e170<_t108;_e170+=1){n.$wrapperEl.children("[data-swiper-slide-index=\"".concat(l.realIndex+_e170,"\"]")).addClass(i);}else for(var _e171=0;_e171<_t108;_e171+=1){n.slides.eq(l.realIndex+_e171).addClass(i);}}}l.thumbs={swiper:null},t("beforeInit",function(){var e=l.params["thumbs"];e&&e.swiper&&(r(),o(!0));}),t("slideChange update resize observerUpdate",function(){l.thumbs.swiper&&o();}),t("setTransition",function(e,t){var i=l.thumbs.swiper;i&&i.setTransition(t);}),t("beforeDestroy",function(){var e=l.thumbs.swiper;e&&s&&e&&e.destroy();}),Object.assign(l.thumbs,{init:r,update:o});},function(_ref52){var h=_ref52.swiper,e=_ref52.extendParams,p=_ref52.emit,m=_ref52.once;e({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(h,{freeMode:{onTouchMove:function onTouchMove(){var e=h.touchEventsData,t=h.touches;0===e.velocities.length&&e.velocities.push({position:t[h.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:t[h.isHorizontal()?"currentX":"currentY"],time:g()});},onTouchEnd:function onTouchEnd(_ref53){var r=_ref53.currentPos;var o=h.params,a=h.$wrapperEl,l=h.rtlTranslate,c=h.snapGrid,d=h.touchEventsData,u=g()-d.touchStartTime;if(r<-h.minTranslate())h.slideTo(h.activeIndex);else if(r>-h.maxTranslate())h.slides.length<c.length?h.slideTo(c.length-1):h.slideTo(h.slides.length-1);else{if(o.freeMode.momentum){if(1<d.velocities.length){var _r31=d.velocities.pop(),_p6=d.velocities.pop(),_m4=_r31.position-_p6.position,_a19=_r31.time-_p6.time;h.velocity=_m4/_a19,h.velocity/=2,Math.abs(h.velocity)<o.freeMode.minimumVelocity&&(h.velocity=0),(150<_a19||300<g()-_r31.time)&&(h.velocity=0);}else h.velocity=0;h.velocity*=o.freeMode.momentumVelocityRatio,d.velocities.length=0;var _e172=1e3*o.freeMode.momentumRatio;var _u5=h.velocity*_e172;var _i71=h.translate+_u5;l&&(_i71=-_i71);var _t110,_s63=!1;r=20*Math.abs(h.velocity)*o.freeMode.momentumBounceRatio;var _n44;if(_i71<h.maxTranslate())o.freeMode.momentumBounce?(_i71+h.maxTranslate()<-r&&(_i71=h.maxTranslate()-r),_t110=h.maxTranslate(),_s63=!0,d.allowMomentumBounce=!0):_i71=h.maxTranslate(),o.loop&&o.centeredSlides&&(_n44=!0);else if(_i71>h.minTranslate())o.freeMode.momentumBounce?(_i71-h.minTranslate()>r&&(_i71=h.minTranslate()+r),_t110=h.minTranslate(),_s63=!0,d.allowMomentumBounce=!0):_i71=h.minTranslate(),o.loop&&o.centeredSlides&&(_n44=!0);else if(o.freeMode.sticky){var _t111;for(var _e173=0;_e173<c.length;_e173+=1){if(c[_e173]>-_i71){_t111=_e173;break;}}_i71=Math.abs(c[_t111]-_i71)<Math.abs(c[_t111-1]-_i71)||"next"===h.swipeDirection?c[_t111]:c[_t111-1],_i71=-_i71;}if(_n44&&m("transitionEnd",function(){h.loopFix();}),0!==h.velocity){if(_e172=l?Math.abs((-_i71-h.translate)/h.velocity):Math.abs((_i71-h.translate)/h.velocity),o.freeMode.sticky){var _p7=Math.abs((l?-_i71:_i71)-h.translate),_m5=h.slidesSizesGrid[h.activeIndex];_e172=_p7<_m5?o.speed:_p7<2*_m5?1.5*o.speed:2.5*o.speed;}}else if(o.freeMode.sticky)return void h.slideToClosest();o.freeMode.momentumBounce&&_s63?(h.updateProgress(_t110),h.setTransition(_e172),h.setTranslate(_i71),h.transitionStart(!0,h.swipeDirection),h.animating=!0,a.transitionEnd(function(){h&&!h.destroyed&&d.allowMomentumBounce&&(p("momentumBounce"),h.setTransition(o.speed),setTimeout(function(){h.setTranslate(_t110),a.transitionEnd(function(){h&&!h.destroyed&&h.transitionEnd();});},0));})):h.velocity?(p("_freeModeNoMomentumRelease"),h.updateProgress(_i71),h.setTransition(_e172),h.setTranslate(_i71),h.transitionStart(!0,h.swipeDirection),h.animating||(h.animating=!0,a.transitionEnd(function(){h&&!h.destroyed&&h.transitionEnd();}))):h.updateProgress(_i71),h.updateActiveIndex(),h.updateSlidesClasses();}else{if(o.freeMode.sticky)return void h.slideToClosest();o.freeMode&&p("_freeModeNoMomentumRelease");}(!o.freeMode.momentum||u>=o.longSwipesMs)&&(h.updateProgress(),h.updateActiveIndex(),h.updateSlidesClasses());}}}});},function(_ref54){var u=_ref54.swiper,e=_ref54.extendParams;var h,p,m;e({grid:{rows:1,fill:"column"}}),u.grid={initSlides:function initSlides(e){var t=u.params["slidesPerView"],_u$params$grid=u.params.grid,i=_u$params$grid.rows,s=_u$params$grid.fill;p=h/i,m=Math.floor(e/i),h=Math.floor(e/i)===e/i?e:Math.ceil(e/i)*i,"auto"!==t&&"row"===s&&(h=Math.max(h,t*i));},updateSlide:function updateSlide(e,t,i,d){var _u$params=u.params,s=_u$params.slidesPerGroup,n=_u$params.spaceBetween,_u$params$grid2=u.params.grid,r=_u$params$grid2.rows,o=_u$params$grid2.fill;var a,l,c;if("row"===o&&1<s){var _u6=Math.floor(e/(s*r)),_p8=e-r*s*_u6,_m6=0===_u6?s:Math.min(Math.ceil((i-_u6*r*s)/r),s);c=Math.floor(_p8/_m6),l=_p8-c*_m6+_u6*s,a=l+c*h/r,t.css({"-webkit-order":a,order:a});}else"column"===o?(l=Math.floor(e/r),c=e-l*r,(l>m||l===m&&c===r-1)&&(c+=1,c>=r&&(c=0,l+=1))):(c=Math.floor(e/p),l=e-c*p);t.css(d("margin-top"),0!==c?n&&n+"px":"");},updateWrapperSize:function updateWrapperSize(i,s,e){var _u$params2=u.params,t=_u$params2.spaceBetween,n=_u$params2.centeredSlides,r=_u$params2.roundLengths,o=u.params.grid["rows"];if(u.virtualSize=(i+t)*h,u.virtualSize=Math.ceil(u.virtualSize/o)-t,u.$wrapperEl.css(_defineProperty({},e("width"),u.virtualSize+t+"px")),n){s.splice(0,s.length);var _i72=[];for(var _t112=0;_t112<s.length;_t112+=1){var _e174=s[_t112];r&&(_e174=Math.floor(_e174)),s[_t112]<u.virtualSize+s[0]&&_i72.push(_e174);}s.push.apply(s,_i72);}}};},function(_ref55){var e=_ref55.swiper;Object.assign(e,{appendSlide:function(t){var i=this.$wrapperEl,e=this.params;if(e.loop&&this.loopDestroy(),"object"==_typeof(t)&&"length"in t)for(var _e175=0;_e175<t.length;_e175+=1){t[_e175]&&i.append(t[_e175]);}else i.append(t);e.loop&&this.loopCreate(),e.observer||this.update();}.bind(e),prependSlide:function(t){var e=this.params,i=this.$wrapperEl,s=this.activeIndex;e.loop&&this.loopDestroy();var n=s+1;if("object"==_typeof(t)&&"length"in t){for(var _e176=0;_e176<t.length;_e176+=1){t[_e176]&&i.prepend(t[_e176]);}n=s+t.length;}else i.prepend(t);e.loop&&this.loopCreate(),e.observer||this.update(),this.slideTo(n,0,!1);}.bind(e),addSlide:function(t,i){var s=this,n=s.$wrapperEl,r=s.params,e=s.activeIndex;var o=e;r.loop&&(o-=s.loopedSlides,s.loopDestroy(),s.slides=n.children("."+r.slideClass));var a=s.slides.length;if(t<=0)s.prependSlide(i);else if(a<=t)s.appendSlide(i);else{var _e177=o>t?o+1:o;var _l12=[];for(var _e178=a-1;_e178>=t;--_e178){var _t113=s.slides.eq(_e178);_t113.remove(),_l12.unshift(_t113);}if("object"==_typeof(i)&&"length"in i){for(var _e179=0;_e179<i.length;_e179+=1){i[_e179]&&n.append(i[_e179]);}_e177=o>t?o+i.length:o;}else n.append(i);for(var _e180=0;_e180<_l12.length;_e180+=1){n.append(_l12[_e180]);}r.loop&&s.loopCreate(),r.observer||s.update(),r.loop?s.slideTo(_e177+s.loopedSlides,0,!1):s.slideTo(_e177,0,!1);}}.bind(e),removeSlide:function(t){var i=this,e=i.params,s=i.$wrapperEl,n=i.activeIndex;var r=n;e.loop&&(r-=i.loopedSlides,i.loopDestroy(),i.slides=s.children("."+e.slideClass));var o,a=r;if("object"==_typeof(t)&&"length"in t){for(var _e181=0;_e181<t.length;_e181+=1){o=t[_e181],i.slides[o]&&i.slides.eq(o).remove(),o<a&&--a;}a=Math.max(a,0);}else o=t,i.slides[o]&&i.slides.eq(o).remove(),o<a&&--a,a=Math.max(a,0);e.loop&&i.loopCreate(),e.observer||i.update(),e.loop?i.slideTo(a+i.loopedSlides,0,!1):i.slideTo(a,0,!1);}.bind(e),removeAllSlides:function(){var t=[];for(var _e182=0;_e182<this.slides.length;_e182+=1){t.push(_e182);}this.removeSlide(t);}.bind(e)});},function(_ref56){var o=_ref56.swiper,e=_ref56.extendParams,t=_ref56.on;e({fadeEffect:{crossFade:!1,transformEl:null}}),s({effect:"fade",swiper:o,on:t,setTranslate:function setTranslate(){var s=o["slides"],n=o.params.fadeEffect;for(var _i73=0;_i73<s.length;_i73+=1){var _s64=o.slides.eq(_i73);var _e183=-_s64[0].swiperSlideOffset,_t114=(o.params.virtualTranslate||(_e183-=o.translate),0);o.isHorizontal()||(_t114=_e183,_e183=0);var r=o.params.fadeEffect.crossFade?Math.max(1-Math.abs(_s64[0].progress),0):1+Math.min(Math.max(_s64[0].progress,-1),0);z(n,_s64).css({opacity:r}).transform("translate3d(".concat(_e183,"px, ").concat(_t114,"px, 0px)"));}},setTransition:function setTransition(e){var t=o.params.fadeEffect["transformEl"];(t?o.slides.find(t):o.slides).transition(e),N({swiper:o,duration:e,transformEl:t,allSlides:!0});},overwriteParams:function overwriteParams(){return{slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!o.params.cssMode};}});},function(_ref57){var r=_ref57.swiper,e=_ref57.extendParams,t=_ref57.on;e({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),s({effect:"cube",swiper:r,on:t,setTranslate:function setTranslate(){var a=r.$el,e=r.$wrapperEl,l=r.slides,t=r.width,s=r.height,m=r.rtlTranslate,c=r.size,d=r.browser,u=r.params.cubeEffect,h=r.isHorizontal(),f=r.virtual&&r.params.virtual.enabled;var i,p=0;u.shadow&&(h?(i=e.find(".swiper-cube-shadow"),0===i.length&&(i=O('<div class="swiper-cube-shadow"></div>'),e.append(i)),i.css({height:t+"px"})):(i=a.find(".swiper-cube-shadow"),0===i.length&&(i=O('<div class="swiper-cube-shadow"></div>'),a.append(i))));for(var _o20=0;_o20<l.length;_o20+=1){var _a20=l.eq(_o20);var _e184=_o20,_t115=(f&&(_e184=parseInt(_a20.attr("data-swiper-slide-index"),10)),90*_e184),_i74=Math.floor(_t115/360);m&&(_t115=-_t115,_i74=Math.floor(-_t115/360));var _d11=Math.max(Math.min(_a20[0].progress,1),-1);var _s65=0,_n45=0,_r32=0;_e184%4==0?(_s65=4*-_i74*c,_r32=0):(_e184-1)%4==0?(_s65=0,_r32=4*-_i74*c):(_e184-2)%4==0?(_s65=c+4*_i74*c,_r32=c):(_e184-3)%4==0&&(_s65=-c,_r32=3*c+4*c*_i74),m&&(_s65=-_s65),h||(_n45=_s65,_s65=0);var g="rotateX(".concat(h?0:-_t115,"deg) rotateY(").concat(h?_t115:0,"deg) translate3d(").concat(_s65,"px, ").concat(_n45,"px, ").concat(_r32,"px)");if(_d11<=1&&-1<_d11&&(p=90*_e184+90*_d11,m&&(p=90*-_e184-90*_d11)),_a20.transform(g),u.slideShadows){var _e185=h?_a20.find(".swiper-slide-shadow-left"):_a20.find(".swiper-slide-shadow-top"),_t116=h?_a20.find(".swiper-slide-shadow-right"):_a20.find(".swiper-slide-shadow-bottom");0===_e185.length&&(_e185=O("<div class=\"swiper-slide-shadow-".concat(h?"left":"top","\"></div>")),_a20.append(_e185)),0===_t116.length&&(_t116=O("<div class=\"swiper-slide-shadow-".concat(h?"right":"bottom","\"></div>")),_a20.append(_t116)),_e185.length&&(_e185[0].style.opacity=Math.max(-_d11,0)),_t116.length&&(_t116[0].style.opacity=Math.max(_d11,0));}}if(e.css({"-webkit-transform-origin":"50% 50% -".concat(c/2,"px"),"transform-origin":"50% 50% -".concat(c/2,"px")}),u.shadow)if(h)i.transform("translate3d(0px, ".concat(t/2+u.shadowOffset,"px, ").concat(-t/2,"px) rotateX(90deg) rotateZ(0deg) scale(").concat(u.shadowScale,")"));else{var _r33=Math.abs(p)-90*Math.floor(Math.abs(p)/90),_a21=1.5-(Math.sin(2*_r33*Math.PI/360)/2+Math.cos(2*_r33*Math.PI/360)/2),_e186=u.shadowScale,_l13=u.shadowScale/_a21,_t117=u.shadowOffset;i.transform("scale3d(".concat(_e186,", 1, ").concat(_l13,") translate3d(0px, ").concat(s/2+_t117,"px, ").concat(-s/2/_l13,"px) rotateX(-90deg)"));}var n=d.isSafari||d.isWebView?-c/2:0;e.transform("translate3d(0px,0,".concat(n,"px) rotateX(").concat(r.isHorizontal()?0:p,"deg) rotateY(").concat(r.isHorizontal()?-p:0,"deg)"));},setTransition:function setTransition(e){var t=r.$el,i=r.slides;i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),r.params.cubeEffect.shadow&&!r.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e);},perspective:function perspective(){return!0;},overwriteParams:function overwriteParams(){return{slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};}});},function(_ref58){var u=_ref58.swiper,e=_ref58.extendParams,t=_ref58.on;e({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),s({effect:"flip",swiper:u,on:t,setTranslate:function setTranslate(){var o=u.slides,a=u.rtlTranslate,l=u.params.flipEffect;for(var _r34=0;_r34<o.length;_r34+=1){var _d12=o.eq(_r34);var _i75=_d12[0].progress;u.params.flipEffect.limitRotation&&(_i75=Math.max(Math.min(_d12[0].progress,1),-1));var c=_d12[0].swiperSlideOffset;var _e187=-180*_i75,_t118=0,_s66=u.params.cssMode?-c-u.translate:-c,_n46=0;if(u.isHorizontal()?a&&(_e187=-_e187):(_n46=_s66,_s66=0,_t118=-_e187,_e187=0),_d12[0].style.zIndex=-Math.abs(Math.round(_i75))+o.length,l.slideShadows){var _e188=u.isHorizontal()?_d12.find(".swiper-slide-shadow-left"):_d12.find(".swiper-slide-shadow-top"),_t119=u.isHorizontal()?_d12.find(".swiper-slide-shadow-right"):_d12.find(".swiper-slide-shadow-bottom");0===_e188.length&&(_e188=D(l,_d12,u.isHorizontal()?"left":"top")),0===_t119.length&&(_t119=D(l,_d12,u.isHorizontal()?"right":"bottom")),_e188.length&&(_e188[0].style.opacity=Math.max(-_i75,0)),_t119.length&&(_t119[0].style.opacity=Math.max(_i75,0));}c="translate3d(".concat(_s66,"px, ").concat(_n46,"px, 0px) rotateX(").concat(_t118,"deg) rotateY(").concat(_e187,"deg)");z(l,_d12).transform(c);}},setTransition:function setTransition(e){var t=u.params.flipEffect["transformEl"];(t?u.slides.find(t):u.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),N({swiper:u,duration:e,transformEl:t});},perspective:function perspective(){return!0;},overwriteParams:function overwriteParams(){return{slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!u.params.cssMode};}});},function(_ref59){var i=_ref59.swiper,e=_ref59.extendParams,t=_ref59.on;e({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),s({effect:"coverflow",swiper:i,on:t,setTranslate:function setTranslate(){var l=i.width,c=i.height,d=i.slides,u=i.slidesSizesGrid,h=i.params.coverflowEffect,p=i.isHorizontal(),m=i.translate,f=p?l/2-m:c/2-m,g=p?h.rotate:-h.rotate,v=h.depth;for(var _a22=0,_e189=d.length;_a22<_e189;_a22+=1){var _l14=d.eq(_a22),_c13=u[_a22],_m7=(f-_l14[0].swiperSlideOffset-_c13/2)/_c13*h.modifier;var _e190=p?g*_m7:0,_t120=p?0:g*_m7,_i76=-v*Math.abs(_m7),_s67=h.stretch,_n47=("string"==typeof _s67&&-1!==_s67.indexOf("%")&&(_s67=parseFloat(h.stretch)/100*_c13),p?0:_s67*_m7),_r35=p?_s67*_m7:0,_o21=1-(1-h.scale)*Math.abs(_m7);Math.abs(_r35)<.001&&(_r35=0),Math.abs(_n47)<.001&&(_n47=0),Math.abs(_i76)<.001&&(_i76=0),Math.abs(_e190)<.001&&(_e190=0),Math.abs(_t120)<.001&&(_t120=0),Math.abs(_o21)<.001&&(_o21=0);var y="translate3d(".concat(_r35,"px,").concat(_n47,"px,").concat(_i76,"px)  rotateX(").concat(_t120,"deg) rotateY(").concat(_e190,"deg) scale(").concat(_o21,")");if(z(h,_l14).transform(y),_l14[0].style.zIndex=1-Math.abs(Math.round(_m7)),h.slideShadows){var _e191=p?_l14.find(".swiper-slide-shadow-left"):_l14.find(".swiper-slide-shadow-top"),_t121=p?_l14.find(".swiper-slide-shadow-right"):_l14.find(".swiper-slide-shadow-bottom");0===_e191.length&&(_e191=D(h,_l14,p?"left":"top")),0===_t121.length&&(_t121=D(h,_l14,p?"right":"bottom")),_e191.length&&(_e191[0].style.opacity=0<_m7?_m7:0),_t121.length&&(_t121[0].style.opacity=0<-_m7?-_m7:0);}}},setTransition:function setTransition(e){var t=i.params.coverflowEffect["transformEl"];(t?i.slides.find(t):i.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);},perspective:function perspective(){return!0;},overwriteParams:function overwriteParams(){return{watchSlidesProgress:!0};}});},function(_ref60){var b=_ref60.swiper,e=_ref60.extendParams,t=_ref60.on;e({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});s({effect:"creative",swiper:b,on:t,setTranslate:function setTranslate(){var n=b.slides,e=b.$wrapperEl,r=b.slidesSizesGrid,o=b.params.creativeEffect,a=o["progressMultiplier"],l=b.params.centeredSlides;if(l){var _n48=r[0]/2-b.params.slidesOffsetBefore||0;e.transform("translateX(calc(50% - ".concat(_n48,"px))"));}var _loop2=function _loop2(_s68){var r=n.eq(_s68),y=r[0].progress,c=Math.min(Math.max(r[0].progress,-o.limitProgress),o.limitProgress);var e=c;l||(e=Math.min(Math.max(r[0].originalProgress,-o.limitProgress),o.limitProgress));var d=r[0].swiperSlideOffset,u=[b.params.cssMode?-d-b.translate:-d,0,0],h=[0,0,0];var t=!1,i=(b.isHorizontal()||(u[1]=u[0],u[0]=0),{translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1});c<0?(i=o.next,t=!0):0<c&&(i=o.prev,t=!0),u.forEach(function(e,t){u[t]="calc(".concat(e,"px + (").concat((e=i.translate[t],"string"==typeof e?e:e+"px")," * ").concat(Math.abs(c*a),"))");}),h.forEach(function(e,t){h[t]=i.rotate[t]*Math.abs(c*a);}),r[0].style.zIndex=-Math.abs(Math.round(y))+n.length;m=u.join(", ");f="rotateX(".concat(h[0],"deg) rotateY(").concat(h[1],"deg) rotateZ(").concat(h[2],"deg)");g=e<0?"scale(".concat(1+(1-i.scale)*e*a,")"):"scale(".concat(1-(1-i.scale)*e*a,")");v=e<0?1+(1-i.opacity)*e*a:1-(1-i.opacity)*e*a;m="translate3d(".concat(m,") ").concat(f," ")+g;if(t&&i.shadow||!t){var _e192=r.children(".swiper-slide-shadow");if(0===_e192.length&&i.shadow&&(_e192=D(o,r)),_e192.length){var _n49=o.shadowPerProgress?c*(1/o.limitProgress):c;_e192[0].style.opacity=Math.min(Math.max(Math.abs(_n49),0),1);}}var p=z(o,r);p.transform(m).css({opacity:v}),i.origin&&p.css("transform-origin",i.origin);};for(var _s68=0;_s68<n.length;_s68+=1){var m,f,g,v;_loop2(_s68);}},setTransition:function setTransition(e){var t=b.params.creativeEffect["transformEl"];(t?b.slides.find(t):b.slides).transition(e).find(".swiper-slide-shadow").transition(e),N({swiper:b,duration:e,transformEl:t,allSlides:!0});},perspective:function perspective(){return b.params.creativeEffect.perspective;},overwriteParams:function overwriteParams(){return{watchSlidesProgress:!0,virtualTranslate:!b.params.cssMode};}});},function(_ref61){var b=_ref61.swiper,e=_ref61.extendParams,t=_ref61.on;e({cardsEffect:{slideShadows:!0,transformEl:null}}),s({effect:"cards",swiper:b,on:t,setTranslate:function setTranslate(){var a=b.slides,l=b.activeIndex,c=b.params.cardsEffect,_b$touchEventsData=b.touchEventsData,d=_b$touchEventsData.startTranslate,u=_b$touchEventsData.isTouched,h=b.translate;for(var _o22=0;_o22<a.length;_o22+=1){var _m8=a.eq(_o22),_f3=_m8[0].progress,_g4=Math.min(Math.max(_f3,-4),4);var _e193=_m8[0].swiperSlideOffset,_t122=(b.params.centeredSlides&&!b.params.cssMode&&b.$wrapperEl.transform("translateX(".concat(b.minTranslate(),"px)")),b.params.centeredSlides&&b.params.cssMode&&(_e193-=a[0].swiperSlideOffset),b.params.cssMode?-_e193-b.translate:-_e193),_i77=0;var v=-100*Math.abs(_g4);var _s69=1,_n50=-2*_g4,_r36=8-.75*Math.abs(_g4);var p=(_o22===l||_o22===l-1)&&0<_g4&&_g4<1&&(u||b.params.cssMode)&&h<d,y=(_o22===l||_o22===l+1)&&_g4<0&&-1<_g4&&(u||b.params.cssMode)&&d<h;if(p||y){var _b=Math.pow(1-Math.abs((Math.abs(_g4)-.5)/.5),.5);_n50+=-28*_g4*_b,_s69+=-.5*_b,_r36+=96*_b,_i77=-25*_b*Math.abs(_g4)+"%";}if(_t122=_g4<0?"calc(".concat(_t122,"px + (").concat(_r36*Math.abs(_g4),"%))"):0<_g4?"calc(".concat(_t122,"px + (-").concat(_r36*Math.abs(_g4),"%))"):_t122+"px",!b.isHorizontal()){var _b2=_i77;_i77=_t122,_t122=_b2;}p="\n        translate3d(".concat(_t122,", ").concat(_i77,", ").concat(v,"px)\n        rotateZ(").concat(_n50,"deg)\n        scale(").concat(_g4<0?""+(1+(1-_s69)*_g4):""+(1-(1-_s69)*_g4),")\n      ");if(c.slideShadows){var _e194=_m8.find(".swiper-slide-shadow");0===_e194.length&&(_e194=D(c,_m8)),_e194.length&&(_e194[0].style.opacity=Math.min(Math.max((Math.abs(_g4)-.5)/.5,0),1));}_m8[0].style.zIndex=-Math.abs(Math.round(_f3))+a.length,z(c,_m8).transform(p);}},setTransition:function setTransition(e){var t=b.params.cardsEffect["transformEl"];(t?b.slides.find(t):b.slides).transition(e).find(".swiper-slide-shadow").transition(e),N({swiper:b,duration:e,transformEl:t});},perspective:function perspective(){return!0;},overwriteParams:function overwriteParams(){return{watchSlidesProgress:!0,virtualTranslate:!b.params.cssMode};}});}]),n;});var Typer=function Typer(e){var t=(this.element=e).dataset.delim||",",i=e.dataset.words||"override these,sample typing",i=(this.words=i.split(t).filter(function(e){return e;}),this.delayVariance=parseInt(e.dataset.delayVariance)||0,this.delay=parseInt(e.dataset.delay)||200,this.loop=e.dataset.loop||"true","false"===this.loop&&(this.loop=1),this.deleteDelay=e.dataset.deletedelay||e.dataset.deleteDelay||800,this.progress={word:0,"char":0,building:!0,looped:0},this.typing=!0,e.dataset.colors||"black");this.colors=i.split(","),this.element.style.color=this.colors[0],this.colorIndex=0,this.doTyping();},Cursor=(Typer.prototype.start=function(){this.typing||(this.typing=!0,this.doTyping());},Typer.prototype.stop=function(){this.typing=!1;},Typer.prototype.doTyping=function(){var _this88=this;var e,t=this.element,i=this.progress,s=i.word,n=i["char"],n=_toConsumableArray(this.words[s]).slice(0,n).join(""),r=(2*Math.random()-1)*this.delayVariance+this.delay;this.cursor&&(this.cursor.element.style.opacity="1",this.cursor.on=!0,clearInterval(this.cursor.interval),this.cursor.interval=setInterval(function(){return _this88.cursor.updateBlinkState();},400)),t.innerHTML=n,i.building?(e=i["char"]===this.words[s].length)?i.building=!1:i["char"]+=1:0===i["char"]?(i.building=!0,i.word=(i.word+1)%this.words.length,this.colorIndex=(this.colorIndex+1)%this.colors.length,this.element.style.color=this.colors[this.colorIndex]):--i["char"],i.word===this.words.length-1&&(i.looped+=1),!i.building&&this.loop<=i.looped&&(this.typing=!1),setTimeout(function(){_this88.typing&&_this88.doTyping();},e?this.deleteDelay:r);},function(e){var _this89=this;this.element=e,this.cursorDisplay=e.dataset.cursordisplay||e.dataset.cursorDisplay||"|",e.innerHTML=this.cursorDisplay,this.on=!0,e.style.transition="all 0.1s",this.interval=setInterval(function(){return _this89.updateBlinkState();},400);});function TyperSetup(){var e,t,i,s,n={};var _iterator=_createForOfIteratorHelper(document.getElementsByClassName("typer")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){e=_step.value;n[e.id]=new Typer(e);}}catch(err){_iterator.e(err);}finally{_iterator.f();}var _iterator2=_createForOfIteratorHelper(document.getElementsByClassName("typer-stop")),_step2;try{var _loop3=function _loop3(){t=_step2.value;var e=n[t.dataset.owner];t.onclick=function(){return e.stop();};};for(_iterator2.s();!(_step2=_iterator2.n()).done;){_loop3();}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}var _iterator3=_createForOfIteratorHelper(document.getElementsByClassName("typer-start")),_step3;try{var _loop4=function _loop4(){i=_step3.value;var e=n[i.dataset.owner];i.onclick=function(){return e.start();};};for(_iterator3.s();!(_step3=_iterator3.n()).done;){_loop4();}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}var _iterator4=_createForOfIteratorHelper(document.getElementsByClassName("cursor")),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){s=_step4.value;var _e195=new Cursor(s);_e195.owner=n[s.dataset.owner];}}catch(err){_iterator4.e(err);}finally{_iterator4.f();}}Cursor.prototype.updateBlinkState=function(){this.on?(this.element.style.opacity="0",this.on=!1):(this.element.style.opacity="1",this.on=!0);},TyperSetup();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/plugins.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Michael\CubeRouteAssesment\resources\js\plugins.js */"./resources/js/plugins.js");


/***/ })

/******/ });