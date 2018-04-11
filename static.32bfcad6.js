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
/******/ 	__webpack_require__.p = "https://aragon.one/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@aragon/web");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@aragon/ui");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AragonNetwork = __webpack_require__(34);

Object.defineProperty(exports, 'AragonNetwork', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AragonNetwork).default;
  }
});

var _Page = __webpack_require__(36);

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Page).default;
  }
});

var _PageTitle = __webpack_require__(37);

Object.defineProperty(exports, 'PageTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PageTitle).default;
  }
});

var _ReadyToTry = __webpack_require__(39);

Object.defineProperty(exports, 'ReadyToTry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ReadyToTry).default;
  }
});

var _SectionTitle = __webpack_require__(6);

Object.defineProperty(exports, 'SectionTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SectionTitle).default;
  }
});

var _Anchor = __webpack_require__(42);

Object.defineProperty(exports, 'Anchor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Anchor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  pointer-events: none;\n  margin-top: -', 'px;\n  padding: ', 'px 15px 50px;\n\n  ', ';\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: ', 'px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #161817;\n  }\n  &:after {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: url(', ') no-repeat 50% 0;\n  }\n'], ['\n  position: relative;\n  z-index: 1;\n  pointer-events: none;\n  margin-top: -', 'px;\n  padding: ', 'px 15px 50px;\n\n  ', ';\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: ', 'px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #161817;\n  }\n  &:after {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: url(', ') no-repeat 50% 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  pointer-events: auto;\n'], ['\n  pointer-events: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _background = __webpack_require__(51);

var _background2 = _interopRequireDefault(_background);

var _leftRepeat = __webpack_require__(52);

var _leftRepeat2 = _interopRequireDefault(_leftRepeat);

var _rightRepeat = __webpack_require__(53);

var _rightRepeat2 = _interopRequireDefault(_rightRepeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BG_WIDTH = 1440;
var BG_HEIGHT = 792;
var OVERLAP_HEIGHT = 120;

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = _styledComponents2.default.div(_templateObject, OVERLAP_HEIGHT, OVERLAP_HEIGHT + 80, large('\n    padding-top: ' + (OVERLAP_HEIGHT + 120) + 'px;\n  '), BG_HEIGHT, _background2.default);

var Left = _styledComponents2.default.div(_templateObject2, BG_WIDTH / 2, _leftRepeat2.default);

var Right = _styledComponents2.default.div(_templateObject3, BG_WIDTH / 2, _rightRepeat2.default);

var Content = _styledComponents2.default.div(_templateObject4);

var OverlapBackground = function OverlapBackground(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    Main,
    props,
    _react2.default.createElement(Left, null),
    _react2.default.createElement(
      Content,
      null,
      children
    ),
    _react2.default.createElement(Right, null)
  );
};

exports.default = OverlapBackground;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  h1 {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 600;\n  }\n'], ['\n  h1 {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 600;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSectionTitle = _styledComponents2.default.div(_templateObject);

var SectionTitle = function SectionTitle(_ref) {
  var title = _ref.title,
      className = _ref.className;
  return _react2.default.createElement(
    StyledSectionTitle,
    null,
    _react2.default.createElement(
      'h1',
      null,
      _react2.default.createElement(
        _ui.Text,
        { smallcaps: true, color: _ui.theme.accent, className: className },
        title
      )
    )
  );
};

exports.default = SectionTitle;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(26);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(27);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(28);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _reactUniversalComponent = __webpack_require__(30);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Core',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/pages/Core', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Core');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/pages/Core';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/OS',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/pages/OS', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/OS');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/pages/OS';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Network',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/pages/Network', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Network');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/pages/Network';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Foundation',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/pages/Foundation', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Foundation');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/pages/Foundation';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/About',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/pages/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/pages/About';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Join',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/pages/Join', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Join');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/pages/Join';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/NotFound',
  file: '/Users/pierre/dev/aragon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/pages/NotFound', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/pages/NotFound';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 7

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: calc(-200px - 10%);\n'], ['\n  margin-bottom: calc(-200px - 10%);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(4);

var _Home = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FirstSection = _styledComponents2.default.div(_templateObject);

var Home = function Home() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/' },
    _react2.default.createElement(
      FirstSection,
      null,
      _react2.default.createElement(_Home.UnstoppableOrganizations, null)
    ),
    _react2.default.createElement(_Home.Disintermediating, null),
    _react2.default.createElement(_Home.LogosBar, null),
    _react2.default.createElement(_Home.DeathToPaperwork, null),
    _react2.default.createElement(_components.ReadyToTry, null),
    _react2.default.createElement(_components.AragonNetwork, null)
  );
};

exports.default = Home;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  max-width: 100%;\n  height: auto;\n  text-align: center;\n  border-radius: 3px 3px 0 0;\n  box-shadow: 0 4px 64px rgba(149, 149, 149, 0.2);\n'], ['\n  display: block;\n  max-width: 100%;\n  height: auto;\n  text-align: center;\n  border-radius: 3px 3px 0 0;\n  box-shadow: 0 4px 64px rgba(149, 149, 149, 0.2);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _appScreen = __webpack_require__(40);

var _appScreen2 = _interopRequireDefault(_appScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledImg = _styledComponents2.default.img(_templateObject);

var AppScreenshot = function AppScreenshot(props) {
  return _react2.default.createElement(StyledImg, _extends({
    src: _appScreen2.default,
    width: '1140',
    height: '508',
    alt: 'Aragon'
  }, props));
};

exports.default = AppScreenshot;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

var _Core = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Core = function Core() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/core' },
    _react2.default.createElement(_components.PageTitle, {
      title: 'Aragon Core',
      subtitle: 'Decentralized application to run your organization'
    }),
    _react2.default.createElement(_Core.Tokens, null),
    _react2.default.createElement(_Core.Transfer, null),
    _react2.default.createElement(_Core.Customize, null),
    _react2.default.createElement(_Core.Vote, null),
    _react2.default.createElement(_Core.Finance, null)
  );
};

exports.default = Core;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n\n  .item + .item {\n    margin-top: 50px;\n  }\n  img {\n    display: block;\n    max-width: 100%;\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n    margin-top: 50px;\n  }\n  h1 {\n    margin-bottom: 10px;\n  }\n  h2 {\n    font-size: 25px;\n    margin-bottom: 30px;\n  }\n  p {\n    color: ', ';\n  }\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n\n  .item + .item {\n    margin-top: 50px;\n  }\n  img {\n    display: block;\n    max-width: 100%;\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n    margin-top: 50px;\n  }\n  h1 {\n    margin-bottom: 10px;\n  }\n  h2 {\n    font-size: 25px;\n    margin-bottom: 30px;\n  }\n  p {\n    color: ', ';\n  }\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _SectionTitle = __webpack_require__(6);

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.textSecondary, medium('\n    padding-top: 120px;\n    padding-bottom: 120px;\n    text-align: left;\n    h1 {\n      text-align: left;\n    }\n    .columns {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: stretch;\n      margin: 50px 0;\n    }\n    .item {\n      display: flex;\n      flex-direction: column;\n      width: 50%;\n      margin-top: 50px;\n      flex-wrap: nowrap;\n    }\n    .item .image {\n      flex-grow: 1;\n      display: flex;\n      align-items: flex-end;\n    }\n    .item:nth-child(1) {\n      padding-right: 15px;\n      text-align: left;\n    }\n    .item:nth-child(2) {\n      padding-left: 15px;\n      text-align: right;\n    }\n    .item:nth-child(2) h1 {\n      text-align: right;\n    }\n  '));

var SideBySide = function SideBySide(_ref) {
  var className = _ref.className,
      items = _ref.items;
  return _react2.default.createElement(
    Main,
    { className: className },
    _react2.default.createElement(
      'div',
      { className: 'columns' },
      items.slice(0, 2).map(function (_ref2, i) {
        var title = _ref2.title,
            subtitle = _ref2.subtitle,
            textContent = _ref2.textContent,
            image = _ref2.image;
        return _react2.default.createElement(
          'div',
          { className: 'item', key: i },
          title && _react2.default.createElement(_SectionTitle2.default, { title: title, className: 'title' }),
          _react2.default.createElement(
            'h2',
            null,
            subtitle
          ),
          _react2.default.createElement(
            'p',
            null,
            textContent
          ),
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement('img', { src: image, alt: '' })
          )
        );
      })
    )
  );
};

exports.default = SideBySide;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

var _OS = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OS = function OS() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/os' },
    _react2.default.createElement(_components.PageTitle, {
      title: 'aragonOS',
      subtitle: 'The smart contract framework for DApps and protocols'
    }),
    _react2.default.createElement(_OS.Snippet, null),
    _react2.default.createElement(_OS.Docs, null)
  );
};

exports.default = OS;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

var _Network = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Network = function Network() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/network' },
    _react2.default.createElement(_components.PageTitle, {
      title: 'Aragon Network',
      subtitle: 'Ensuring the success of decentralized organizations'
    }),
    _react2.default.createElement(_Network.Intro, null),
    _react2.default.createElement(_components.AragonNetwork, null),
    _react2.default.createElement(_Network.AGP, null)
  );
};

exports.default = Network;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

var _Foundation = __webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Foundation = function Foundation() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/foundation' },
    _react2.default.createElement(_components.PageTitle, {
      title: 'Foundation',
      subtitle: 'Cornerstone for architecting the project'
    }),
    _react2.default.createElement(_Foundation.Intro, null),
    _react2.default.createElement(_Foundation.Grants, null)
  );
};

exports.default = Foundation;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

var _About = __webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/about' },
    _react2.default.createElement(_components.PageTitle, {
      title: 'About us',
      subtitle: 'Fighting for the freedom to organize'
    }),
    _react2.default.createElement(_About.WhyAragon, null),
    _react2.default.createElement(_About.Vision, null),
    _react2.default.createElement(_About.Team, null)
  );
};

exports.default = About;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

var _Join = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Join = function Join() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/join' },
    _react2.default.createElement(
      _components.PageTitle,
      {
        title: 'Join us',
        subtitle: 'We are building the future of organizations'
      },
      _react2.default.createElement(
        _components.Anchor,
        { mode: 'strong', href: 'https://wiki.aragon.one/jobs' },
        'View open positions'
      )
    ),
    _react2.default.createElement(_Join.Culture, null),
    _react2.default.createElement(_Join.Value, null)
  );
};

exports.default = Join;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    _components.Page,
    null,
    _react2.default.createElement(_components.PageTitle, {
      title: 'Not Found',
      subtitle: 'The page you are trying to access could not be found.'
    })
  );
};

exports.default = NotFound;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(23);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(24);

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(7);

var _reactStaticRoutes = __webpack_require__(8);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(31);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(32);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(33);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background: #fff;\n\n  h1 {\n    margin-bottom: 10px;\n  }\n'], ['\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background: #fff;\n\n  h1 {\n    margin-bottom: 10px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = __webpack_require__(2);

var _illustration = __webpack_require__(35);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Title = _web.IllustratedSection.Title,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var Main = (0, _styledComponents2.default)(_web.IllustratedSection)(_templateObject);

var AragonNetwork = function AragonNetwork() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      Illustration,
      null,
      _react2.default.createElement('img', { src: _illustration2.default, alt: '' })
    ),
    _react2.default.createElement(
      Title,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Imagine a nation without land and borders'
      )
    ),
    _react2.default.createElement(
      Subtitle,
      null,
      _react2.default.createElement(
        'p',
        null,
        'A digital jurisdiction'
      )
    ),
    _react2.default.createElement(
      Emphasis,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Aragon Network will be the first community governed decentralized organization whose goal is to act as a digital jurisdiction, an online decentralized court system that isn\u2019t bound by traditional artificial barriers such as national jurisdictions or the borders of a single country'
      )
    ),
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Aragon organizations can be upgraded seamlessly using our AragonOS architecture. They can solve disputes between two parties by using the decentralized court system, a digital jurisdiction that operates only online and utilizes your peers to resolve issues'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The Aragon Network Token, ANT, puts the power into the hands of the people participating in the operation of the Network. Every single aspect of the Network will be governed by those willing to make an effort for a better future'
      )
    )
  );
};

exports.default = AragonNetwork;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc4IiBoZWlnaHQ9IjQ4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEwOC40MzMlIiB5MT0iMjQuMTE3JSIgeDI9IjMuMTUxJSIgeTI9IjEyMy4xMjMlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0U5RjJGNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNFN0VGRUUiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHkyPSI2OC4wNDElIiBpZD0iYyI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJlIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMzc1Ljc3NSAxMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAxMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjM0Ljk4NykiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMzc1Ljc3NSAxMDguODM5bC0uMDQgNy42MDNMMTg4LjQ4MiAyMjUuMjFsLjAzOS03LjYwM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjM0Ljk4NykiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4xMjMiIGZpbGw9IiMwMDAiIGQ9Ik0xODguNTIgNDUyLjU5NWwtLjA0IDcuNjAzTDAgMzUxLjQzbC4wNC03LjYwM3oiLz48L2c+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSJ1cmwoI2MpIiBvcGFjaXR5PSIuMzQ3IiBkPSJNMzc1Ljc3NSAxMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAxMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTY5LjMxOCkiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNDMiIGQ9Ik0zNzYuMDk0IDEwOC41MzdsLS4wNCA3LjYwM0wxODguOCAyMjQuOTFsLjAzOS03LjYwNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTY5LjMxOCkiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBkPSJNMTg4LjUyIDIxNy42MDhsLS4wNCA3LjYwM0wwIDExNi40NDNsLjA0LTcuNjAzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxNjkuMzE4KSIvPjwvZz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjE3IiBmaWxsPSIjRENEQ0RDIiBkPSJNMzc1Ljc3NSAyMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAyMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMTAweiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjEyMyIgZmlsbD0iIzY2NiIgZD0iTTM3NS43NzUgMjA4LjgzOWwtLjA0IDcuNjAzTDE4OC40ODIgMzI1LjIxbC4wMzktNy42MDN6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuMTIzIiBmaWxsPSIjMDAwIiBkPSJNMTg4LjUyIDMxNy42MDhsLS4wNCA3LjYwM0wwIDIxNi40NDNsLjA0LTcuNjAzeiIvPjwvZz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0cm9rZT0idXJsKCNlKSIgb3BhY2l0eT0iLjMxIiBkPSJNMzc1Ljc3NSAxMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAxMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzEuMzE4KSIvPjxwYXRoIHN0cm9rZT0iIzcxNzE3MSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iLjIyMSIgZD0iTTM3Ni4wOTQgMTA4LjUzN2wtLjA0IDcuNjAzTDE4OC44IDIyNC45MWwuMDM5LTcuNjA0ek0xODguNTIgMjE3LjYwOGwtLjA0IDcuNjAzTDAgMTE2LjQ0M2wuMDQtNy42MDN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMxLjMxOCkiLz48L2c+PHBhdGggZD0iTTE4Ny45MDIgMTQ4LjM5NXYzMTEuNzM4IiBzdHJva2U9IiMwMDAiIG9wYWNpdHk9Ii4xMDUiLz48cGF0aCBkPSJNMTg3LjkwMiA0NTkuNjA1djIwLjUyOG0wLTQ3OS43Mzh2MTQzLjczOCIgc3Ryb2tlPSIjMDAwIiBvcGFjaXR5PSIuNSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgY3g9IjE4OC4wOSIgY3k9IjE0NC4wOSIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjE5NSIgY3g9IjE4OC4wOSIgY3k9IjIxMi4wOSIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjE5NSIgY3g9IjE4OC4wOSIgY3k9IjI4Mi4wOSIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjE5NSIgY3g9IjE4OC4wOSIgY3k9IjM0Ny4wOSIgcj0iMi4wOSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 200px;\n'], ['\n  min-height: 200px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  .email-field {\n    display: flex;\n    width: 100%;\n  }\n  input[type=\'email\'] {\n    flex-shrink: 1;\n    width: 100%;\n    min-width: 0;\n    margin-right: 15px;\n    padding: 10px 15px;\n    border-radius: 3px;\n    border: 0;\n    background: #fff;\n  }\n  .button {\n    flex-shrink: 0;\n  }\n'], ['\n  .email-field {\n    display: flex;\n    width: 100%;\n  }\n  input[type=\'email\'] {\n    flex-shrink: 1;\n    width: 100%;\n    min-width: 0;\n    margin-right: 15px;\n    padding: 10px 15px;\n    border-radius: 3px;\n    border: 0;\n    background: #fff;\n  }\n  .button {\n    flex-shrink: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(7);

var _reactStaticRoutes = __webpack_require__(8);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var menuItems = [['/core', 'Core'], ['/os', 'aragonOS'], ['/network', 'Network'], ['/foundation', 'Foundation'], ['/about', 'About'], ['/join', 'Join us'], ['https://wiki.aragon.one', 'Wiki'], ['https://blog.aragon.one', 'Blog']];

var renderMenuItemLink = function renderMenuItemLink(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return url.startsWith('/') ? _react2.default.createElement(
    _reactStatic.Link,
    { to: url },
    children
  ) : _react2.default.createElement(
    'a',
    { href: url, target: '_blank', rel: 'noopener noreferrer' },
    children
  );
};

var Content = _styledComponents2.default.div(_templateObject);

var EmailFormWrapper = _styledComponents2.default.div(_templateObject2);

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'renderEmailForm',
    value: function renderEmailForm() {
      return _react2.default.createElement(
        EmailFormWrapper,
        null,
        _react2.default.createElement(
          'form',
          {
            action: 'https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&id=e81a44c4bd',
            method: 'post',
            name: 'mc-embedded-subscribe-form',
            target: '_blank',
            noValidate: true
          },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'Aragon Newsletter'
          ),
          _react2.default.createElement(
            'p',
            { className: 'desc' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'mce-EMAIL' },
              'Follow the progress of Aragon by subscribing to our monthly newsletter'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'email-field' },
            _react2.default.createElement('input', {
              type: 'email',
              name: 'EMAIL',
              placeholder: 'Enter your email',
              className: 'required email',
              id: 'mce-EMAIL'
            }),
            _react2.default.createElement(
              'div',
              {
                style: { position: 'absolute', left: '-5000px' },
                'aria-hidden': 'true'
              },
              _react2.default.createElement('input', {
                type: 'text',
                name: 'b_a590aa3843a54b079d48e6e18_e81a44c4bd',
                tabIndex: '-1',
                value: ''
              })
            ),
            _react2.default.createElement(
              _ui.Button,
              {
                type: 'submit',
                name: 'subscribe',
                id: 'mc-embedded-subscribe',
                className: 'button',
                mode: 'strong'
              },
              'Subscribe'
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          path = _props.path;

      var items = menuItems.map(function (item) {
        return [].concat(_toConsumableArray(item), [item[0] === path]);
      });
      return _react2.default.createElement(_reactStatic.SiteData, {
        render: function render(_ref2) {
          var siteTitle = _ref2.title;
          return _react2.default.createElement(_reactStatic.RouteData, {
            render: function render(_ref3) {
              var title = _ref3.title;
              return _react2.default.createElement(
                _ui.AragonApp,
                { publicUrl: '/aragon-ui/' },
                _react2.default.createElement(
                  _reactStatic.Head,
                  null,
                  _react2.default.createElement(
                    'title',
                    null,
                    title || siteTitle
                  )
                ),
                _react2.default.createElement(_web.Header, {
                  menuItems: items,
                  renderMenuItemLink: renderMenuItemLink
                }),
                _react2.default.createElement(
                  Content,
                  null,
                  children
                ),
                _react2.default.createElement(_web.PreFooter, { emailForm: _this2.renderEmailForm() }),
                _react2.default.createElement(_web.Footer, null)
              );
            }
          });
        }
      });
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 40px 15px 0;\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding-bottom: 120px;\n  .title {\n    margin-bottom: 25px;\n    font-size: 30px;\n    color: ', ';\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    color: ', ';\n    font-size: 20px;\n  }\n  .children {\n    margin: 25px 0 0;\n  }\n  button,\n  a {\n    margin: 0 5px;\n    text-decoration: none;\n  }\n  ', ';\n'], ['\n  padding: 40px 15px 0;\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding-bottom: 120px;\n  .title {\n    margin-bottom: 25px;\n    font-size: 30px;\n    color: ', ';\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    color: ', ';\n    font-size: 20px;\n  }\n  .children {\n    margin: 25px 0 0;\n  }\n  button,\n  a {\n    margin: 0 5px;\n    text-decoration: none;\n  }\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding-top: 100px;\n    .title {\n      font-size: 44px;\n    }\n    .subtitle {\n      font-size: 24px;\n    }\n  '], ['\n    padding-top: 100px;\n    .title {\n      font-size: 44px;\n    }\n    .subtitle {\n      font-size: 24px;\n    }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _background = __webpack_require__(38);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var PageTitle = function PageTitle(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children;
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        { className: 'title' },
        title
      ),
      _react2.default.createElement(
        _ui.Text,
        { size: 'xlarge', className: 'subtitle' },
        subtitle
      ),
      _react2.default.createElement(
        'div',
        { className: 'children' },
        children
      )
    )
  );
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _background2.default, _ui.theme.textPrimary, _ui.theme.textSecondary, medium((0, _styledComponents.css)(_templateObject2)));

exports.default = PageTitle;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzNiIgaGVpZ2h0PSI4ODciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0My4zNyAtMy45ODEpIiBmaWxsPSJ1cmwoI2IpIiBvcGFjaXR5PSIuNzc5Ii8+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ3LjU4IDE5Ny45MjEpIiBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuMzc0Ii8+PHVzZSB4bGluazpocmVmPSIjZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjE1IDU5LjkyKSIgZmlsbD0idXJsKCNmKSIgb3BhY2l0eT0iLjU1NyIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC03MDEuNTA4IDM4OC4xMzMgLTUzNy41ODcgLTUwNi40ODIgNTE5Ljk2OCAxODguNjkzKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRTlGMkY0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0zNzQuOTc3IDE4NC43NTMgMCA5My44MTQgNDc5LjM5MikiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0U5RjJGNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEyMi40NTMgLTM3NS4xNDEgMzc0Ljc3NCAtMTIyLjU3MyA0MTAuNTA5IDQyNy4wNjUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMzMuMTEyIDY0LjQxMkMyMzIuNjA3IDY0LjQxMiAwIDEzOC43NCAwIDM0Mi4wMThzMjI0LjUyMSAzMDEuODc4IDM4OS44NjkgMzAxLjg3OGM4OS45MzMgMCAxNjMuODExLTI2LjE3MyAyMTIuNTQyLTUwLjA1MSA2LjI4LTI4LjgxOCAyOS4xMjEtOTcuMDY4IDEwNC42ODgtOTcuNTc4IDEzLjQ3Ni0uNTI2IDI2LjExOCAyLjAwMiAzNi43NDIgOC4wNyA1MC41NjcgMjcuMzExIDE3LjY5OCA3OC4zNzggMTcuNjk4IDc4LjM3OCAxLjkwNy0uMzA4IDMuODMzLS42NjcgNS43Ni0xLjA4MiAxLjkyMS0uNDE0IDMuODUzLS44OTUgNS44LTEuNDE2IDYwLjc3Ni0xNi4zNjggMTI5LjI1OC04NS44ODcgMTE3LjM4LTIwMi4yOTctOS41MjEtOTMuMzQ2LTk1LjY3Ny0xNTIuNTE0LTEzNy41ODctMTc2LjAxNy0xMy43MjMtNy42OTctMjIuNzA0LTExLjU4NS0yMi43MDQtMTEuNTg1IDEuNTE3LTkuNDgxIDIuMDA3LTE2LjgxNCAyLjAwNy0yMi40NDcgMC0xLjA1Ny0uMDItMi4wNDgtLjA1LTIuOTc4di0xMC45MjdDNTEyLjIxNiAyMC41NTIgMzI2LjEwNSAwIDIzNC4zMTEgMGMtMzkuNjU1IDAtNjEuODc5IDMuNzI3LTYxLjg3OSAzLjcyN2w2MC42OCA2MC42ODV6TTY5Ny44MiAxOTAuODI0cy0yOS44MzQtOS42MDgtNjAuMTY5LTEzLjY1NGMtMTUuMTc1IDE1LjY3Ni0yOC4zMjMgMjIuMjUtMzIuMzY4IDI0LjI3OC0uNTA2LjUtMS4wMTEgMS4wMDYtMS4wMTEgMS4wMDYtODguNDkyLTE4LjcxLTEyMC4zNDktNjQuMjItMTIwLjM0OS02NC4yMiA4My40NC0uNSAxNTguNzg1IDE5LjIxNSAyMTMuODk3IDUyLjU5eiIvPjxwYXRoIGlkPSJjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ni4wMzcgMTE0LjgzMmMwIDY2LjI0Ny0yNy4zIDEyNy40MjgtNzMuODI3IDE3Ni45ODNMMCAyOTQuMzU5bDMuNzI3LS4wMWMxMi42NDEtLjUxMSAyNS4yODMgMi4wMTcgMzUuOTA3IDguMDg1IDUwLjU2NyAyNy4zMTEgMTcuNjk5IDc4LjM3OSAxNy42OTkgNzguMzc5IDYzLjIwOC0xMC4xMTQgMTQxLjU4Ni04MC45MDIgMTI4LjkzOS0yMDQuNzk1QzE3Ni43NTEgODIuNjcxIDkwLjU5NSAyMy41MDMgNDguNjg2IDBjMTguMDEyIDM1LjU3NCAyNy4zNTEgNzQuNjQ3IDI3LjM1MSAxMTQuODMyIi8+PHBhdGggaWQ9ImUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNDg0LjkzNWMwIDguMjAxLjMxOSAxNi4wMDkuNzc0IDIzLjYzOSA2Mi41ODEgMTIwLjM1NCAxMzcuODYgMjI1LjQ5NyAyMjMuOTYgMzEyLjU2OCAxMDcuMzc4IDEwOC4zNSAyMzIuMzIzIDE4OC43MzggMzcxLjQ0MiAyMzkuMDA4IDEzOC42MTQtNTAuMSAyNjMuNTY0LTEzMC42NTggMzcxLjQ1OC0yMzkuNTI5IDMxLjk4OC0zMi4zNDIgNjIuNDk2LTY3LjI5OSA5MS40NzYtMTA0LjY1Mi0yMzAuNjg2LTE2LjU4MS0yMTYuNjc0LTE1Ni43MDEtMjE2LjY3NC0xNTYuNzAxIDAtNS41NTggMC0xMS4xMjUgMS4wMTEtMTYuNjg3IDAgMCAuNTExLTQuOTIxIDIuMTktMTIuNjQyLTQ4LjczMSAyMy44ODItMTIyLjYwOSA1MC4wNTYtMjEyLjU0NyA1MC4wNTYtMTY1LjM0OCAwLTM4OS44NjktOTguNi0zODkuODY5LTMwMS44NzhTNDc1LjgyNy41MTEgNDc1LjgyNy41MTFsLS4xMjEtLjAzNkM0NjkuODEuMDIgNDYzLjQ4OSAwIDQ1Ny42MjMgMCAyMDMuMjczIDkuMTA3IDAgMjIyLjQ5MyAwIDQ4NC45MzUiLz48L2RlZnM+PC9zdmc+"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  background-image: ', ';\n  border-bottom: 1px solid ', ';\n  .in {\n    padding: 30px 15px 0;\n  }\n  .content {\n    align-self: center;\n    max-width: 410px;\n    flex-shrink: 0;\n    padding-bottom: 15px;\n    padding-bottom: 40px;\n  }\n  .title {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 20px;\n    color: ', ';\n  }\n  .subtitle {\n    font-size: 17px;\n    color: ', ';\n  }\n  .app-img {\n    max-width: none;\n    width: calc(30px + 140%);\n    margin-bottom: -30%;\n  }\n  .buttons {\n    margin-top: 25px;\n  }\n  .buttons > * {\n    margin-right: 10px;\n  }\n\n  ', ';\n'], ['\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  background-image: ', ';\n  border-bottom: 1px solid ', ';\n  .in {\n    padding: 30px 15px 0;\n  }\n  .content {\n    align-self: center;\n    max-width: 410px;\n    flex-shrink: 0;\n    padding-bottom: 15px;\n    padding-bottom: 40px;\n  }\n  .title {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 20px;\n    color: ', ';\n  }\n  .subtitle {\n    font-size: 17px;\n    color: ', ';\n  }\n  .app-img {\n    max-width: none;\n    width: calc(30px + 140%);\n    margin-bottom: -30%;\n  }\n  .buttons {\n    margin-top: 25px;\n  }\n  .buttons > * {\n    margin-right: 10px;\n  }\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _ = __webpack_require__(4);

var _AppScreenshot = __webpack_require__(13);

var _AppScreenshot2 = _interopRequireDefault(_AppScreenshot);

var _backgroundLines = __webpack_require__(41);

var _backgroundLines2 = _interopRequireDefault(_backgroundLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var gradient = 'linear-gradient(\n  130deg,\n  ' + _ui.theme.mainBgGradientStart + ',\n  ' + _ui.theme.mainBgGradientEnd + '\n)';

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, gradient, _ui.theme.mainBgGradientStart, _ui.theme.textPrimary, _ui.theme.textSecondary, medium('\n    background-image: url(' + _backgroundLines2.default + '), ' + gradient + ';\n    .in {\n      display: flex;\n      padding-top: 50px;\n    }\n    .title {\n      font-size: 38px;\n    }\n    .subtitle {\n      font-size: 15px;\n    }\n    .app-img {\n      margin-right: -90px;\n      margin-left: 90px;\n    }\n    .buttons {\n      margin-top: 50px;\n    }\n  '));

var ReadyToTry = function ReadyToTry() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      { className: 'in' },
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'h1',
          { className: 'title' },
          'Ready to try Aragon?'
        ),
        _react2.default.createElement(
          'p',
          { className: 'subtitle' },
          'Thanks to ',
          _react2.default.createElement(
            'a',
            { href: '/os' },
            'aragonOS'
          ),
          ', Aragon Core v0.5 is the most powerful way to create and manage any type of decentralized organizations.'
        ),
        _react2.default.createElement(
          _ui.BreakPoint,
          { to: 'medium' },
          _react2.default.createElement(
            'div',
            { className: 'buttons' },
            _react2.default.createElement(
              _.Anchor,
              {
                mode: 'strong',
                href: 'https://app.aragon.one/',
                target: '_blank'
              },
              'Try Aragon Core 0.5'
            ),
            _react2.default.createElement(
              _.Anchor,
              {
                href: 'https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&id=e81a44c4bd',
                target: '_blank'
              },
              'Newsletter'
            )
          )
        ),
        _react2.default.createElement(
          _ui.BreakPoint,
          { from: 'medium' },
          _react2.default.createElement(
            'div',
            { className: 'buttons' },
            _react2.default.createElement(
              _.Anchor,
              {
                mode: 'strong',
                href: 'https://app.aragon.one/',
                target: '_blank'
              },
              'Try Aragon Core 0.5'
            ),
            _react2.default.createElement(
              _.Anchor,
              {
                href: 'https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&id=e81a44c4bd',
                target: '_blank'
              },
              'Subscribe to the newsletter'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'app-img' },
        _react2.default.createElement(_AppScreenshot2.default, null)
      )
    )
  );
};

exports.default = ReadyToTry;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aefb22f6-app-screen.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIzODQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjkgMTEzKSIgZmlsbD0idXJsKCNiKSIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjcgLTk1LjUpIiBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNDQ2Ii8+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjUwIC05NS41KSIgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjQ0NiIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNCAtMjExKSIgZmlsbD0idXJsKCNmKSIgb3BhY2l0eT0iLjQ0NiIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNzkgLTU4KSIgZmlsbD0idXJsKCNnKSIvPjxnIG9wYWNpdHk9Ii4zMjciPjx1c2UgeGxpbms6aHJlZj0iI2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMC43OCAxNjIuNzgpIiBmaWxsPSIjQjNCM0IzIiBmaWx0ZXI9InVybCgjaSkiLz48dXNlIHhsaW5rOmhyZWY9IiNqIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDIgMTY0KSIgZmlsbD0iIzcxNzE3MSIvPjwvZz48ZyBvcGFjaXR5PSIuMTg2IiBmaWxsPSIjRkZGIj48dXNlIHhsaW5rOmhyZWY9IiNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTQuNzggMzExLjc4KSIgZmlsdGVyPSJ1cmwoI2spIi8+PHVzZSB4bGluazpocmVmPSIjaiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU2IDMxMykiLz48L2c+PHVzZSB4bGluazpocmVmPSIjaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3NS43OCAzMTUuNzgpIiBmaWxsPSIjRkZGIiBmaWx0ZXI9InVybCgjbCkiLz48dXNlIHhsaW5rOmhyZWY9IiNqIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDc3IDMxNykiIGZpbGw9IiNGRkYiLz48ZGVmcz48ZmlsdGVyIGlkPSJpIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEzOTAiIHk9IjI3ODUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjgzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJrIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjE1NDQiIHk9IjI5MzQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjgzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJsIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIzNjUiIHk9IjI5MzgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjgzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgxMjcuMzQxIDU3Mi43NCAtOTEuMjgyKSBzY2FsZSgxMjE0LjQyNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0M4QzhDOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk3OTc5NyIgc3RvcC1vcGFjaXR5PSIuMDEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgNTIxLjM3OCAtNTM5LjkyOSAwIDI3Ni41IDApIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNDOEM4QzgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5Nzk3OTciIHN0b3Atb3BhY2l0eT0iLjAxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMzE3LjM3OSAtNDY5Ljg0IDQ4Ni41NTcgLTMwNi40NzQgNTI3LjIzOCA1MTYuNDM0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjQzhDOEM4IiBzdG9wLW9wYWNpdHk9Ii4wMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk3OTc5NyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTU1My4wMjcgNzE5LjQ4IC03MTkuNDggLTU1My4wMjcgMTg4LjUgMCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0M4QzhDOCIgc3RvcC1vcGFjaXR5PSIuMDEiLz48c3RvcCBvZmZzZXQ9Ii4wMTIiIHN0b3AtY29sb3I9IiNDN0M3QzciIHN0b3Atb3BhY2l0eT0iLjAxMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk3OTc5NyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoMTM5LjQ0OSAyMjEuNTk2IDgxLjk1MSkgc2NhbGUoODg3LjMzNikiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0M4QzhDOCIgc3RvcC1vcGFjaXR5PSIuMDEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5Nzk3OTciLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBkPSJNLjE0NiAzNzYuMTQ2bC0uMzUzLjM1NC43MDcuNzA3LjM1NC0uMzUzLS43MDgtLjcwOHpNMzc3LjIwOC40OTlsLjM1My0uMzUzLS43MDctLjcwNy0uMzUzLjM1My43MDcuNzA3ek0uODU0IDM3Ni44NTRMMzc3LjIwOC40OTlsLS43MDctLjcwN0wuMTQ2IDM3Ni4xNDZsLjcwOC43MDh6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0uODQ3LjE0bC0uMzYtLjM0Ny0uNjk0LjcyLjM2LjM0Ny42OTQtLjcyem01NTEuMzA2IDUzMy43MmwuMzU5LjM0Ny42OTUtLjcxOS0uMzYtLjM0OC0uNjk0Ljcyek0uMTUzLjg2bDU1MiA1MzMgLjY5NC0uNzItNTUyLTUzMy0uNjk0LjcyeiIvPjxwYXRoIGlkPSJoIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjIxNiA2LjQzMmEzLjIxNiAzLjIxNiAwIDEgMCAwLTYuNDMyIDMuMjE2IDMuMjE2IDAgMCAwIDAgNi40MzJ6Ii8+PHBhdGggaWQ9ImoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIgNGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6Ii8+PC9kZWZzPjwvc3ZnPg=="

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Anchor = function Anchor(_ref) {
  var href = _ref.href,
      target = _ref.target,
      props = _objectWithoutProperties(_ref, ['href', 'target']);

  return _react2.default.createElement(
    'a',
    { href: href, target: target },
    _react2.default.createElement(_ui.Button, props)
  );
};

exports.default = Anchor;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UnstoppableOrganizations = __webpack_require__(44);

Object.defineProperty(exports, 'UnstoppableOrganizations', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UnstoppableOrganizations).default;
  }
});

var _DeathToPaperwork = __webpack_require__(46);

Object.defineProperty(exports, 'DeathToPaperwork', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DeathToPaperwork).default;
  }
});

var _Disintermediating = __webpack_require__(50);

Object.defineProperty(exports, 'Disintermediating', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Disintermediating).default;
  }
});

var _LogosBar = __webpack_require__(55);

Object.defineProperty(exports, 'LogosBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LogosBar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding: 40px 15px 10%;\n  ', ';\n  ', ';\n\n  .title {\n    color: ', ';\n    margin-bottom: 15px;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.2;\n\n    ', ';\n  }\n  .subtitle {\n    position: relative;\n    z-index: 2;\n    font-size: 20px;\n    ', ';\n    color: ', ';\n  }\n  .app-wrapper {\n    display: flex;\n    align-items: center;\n  }\n  .app-img {\n    margin-left: 50%;\n    transform: translateX(-50%);\n    flex-shrink: 0;\n    margin-top: 40px;\n    ', ';\n  }\n  .buttons {\n    display: flex;\n    ', ';\n    justify-content: center;\n    margin: 20px auto 0;\n  }\n  .button:first-child {\n    margin-right: 10px;\n  }\n'], ['\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding: 40px 15px 10%;\n  ', ';\n  ', ';\n\n  .title {\n    color: ', ';\n    margin-bottom: 15px;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.2;\n\n    ', ';\n  }\n  .subtitle {\n    position: relative;\n    z-index: 2;\n    font-size: 20px;\n    ', ';\n    color: ', ';\n  }\n  .app-wrapper {\n    display: flex;\n    align-items: center;\n  }\n  .app-img {\n    margin-left: 50%;\n    transform: translateX(-50%);\n    flex-shrink: 0;\n    margin-top: 40px;\n    ', ';\n  }\n  .buttons {\n    display: flex;\n    ', ';\n    justify-content: center;\n    margin: 20px auto 0;\n  }\n  .button:first-child {\n    margin-right: 10px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _AppScreenshot = __webpack_require__(13);

var _AppScreenshot2 = _interopRequireDefault(_AppScreenshot);

var _background = __webpack_require__(45);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var StyledContainer = (0, _styledComponents2.default)(_web.Section)(_templateObject, _background2.default, medium('padding: 120px 15px 0'), large('padding: 160px 15px 0'), _ui.theme.textPrimary, medium('\n      margin-bottom: 25px;\n      font-size: 58px;\n      line-height: 1.5;\n    '), medium('font-size: 24px'), _ui.theme.textSecondary, medium('margin-top: 75px'), medium('display: none'));

var UnstoppableOrganizations = function UnstoppableOrganizations() {
  return _react2.default.createElement(
    StyledContainer,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        { className: 'title' },
        'Unstoppable organizations'
      ),
      _react2.default.createElement(
        _ui.Text,
        { size: 'large', className: 'subtitle' },
        'Create value without borders or intermediaries'
      ),
      _react2.default.createElement(
        'div',
        { className: 'buttons' },
        _react2.default.createElement(
          'div',
          { className: 'button' },
          _react2.default.createElement(
            'a',
            {
              href: 'https://blog.aragon.one/news-from-the-front-5820cd9f2e46',
              target: '_blank'
            },
            _react2.default.createElement(
              _ui.Button,
              { mode: 'strong' },
              'Try Aragon 0.5'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'app-wrapper' },
        _react2.default.createElement(_AppScreenshot2.default, { className: 'app-img' })
      )
    )
  );
};

exports.default = UnstoppableOrganizations;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzNiIgaGVpZ2h0PSI4ODciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0My4zNyAtMy45ODEpIiBmaWxsPSJ1cmwoI2IpIiBvcGFjaXR5PSIuNzc5Ii8+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ3LjU4IDE5Ny45MjEpIiBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuMzc0Ii8+PHVzZSB4bGluazpocmVmPSIjZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjE1IDU5LjkyKSIgZmlsbD0idXJsKCNmKSIgb3BhY2l0eT0iLjU1NyIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC03MDEuNTA4IDM4OC4xMzMgLTUzNy41ODcgLTUwNi40ODIgNTE5Ljk2OCAxODguNjkzKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRTlGMkY0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0zNzQuOTc3IDE4NC43NTMgMCA5My44MTQgNDc5LjM5MikiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0U5RjJGNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEyMi40NTMgLTM3NS4xNDEgMzc0Ljc3NCAtMTIyLjU3MyA0MTAuNTA5IDQyNy4wNjUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMzMuMTEyIDY0LjQxMkMyMzIuNjA3IDY0LjQxMiAwIDEzOC43NCAwIDM0Mi4wMThzMjI0LjUyMSAzMDEuODc4IDM4OS44NjkgMzAxLjg3OGM4OS45MzMgMCAxNjMuODExLTI2LjE3MyAyMTIuNTQyLTUwLjA1MSA2LjI4LTI4LjgxOCAyOS4xMjEtOTcuMDY4IDEwNC42ODgtOTcuNTc4IDEzLjQ3Ni0uNTI2IDI2LjExOCAyLjAwMiAzNi43NDIgOC4wNyA1MC41NjcgMjcuMzExIDE3LjY5OCA3OC4zNzggMTcuNjk4IDc4LjM3OCAxLjkwNy0uMzA4IDMuODMzLS42NjcgNS43Ni0xLjA4MiAxLjkyMS0uNDE0IDMuODUzLS44OTUgNS44LTEuNDE2IDYwLjc3Ni0xNi4zNjggMTI5LjI1OC04NS44ODcgMTE3LjM4LTIwMi4yOTctOS41MjEtOTMuMzQ2LTk1LjY3Ny0xNTIuNTE0LTEzNy41ODctMTc2LjAxNy0xMy43MjMtNy42OTctMjIuNzA0LTExLjU4NS0yMi43MDQtMTEuNTg1IDEuNTE3LTkuNDgxIDIuMDA3LTE2LjgxNCAyLjAwNy0yMi40NDcgMC0xLjA1Ny0uMDItMi4wNDgtLjA1LTIuOTc4di0xMC45MjdDNTEyLjIxNiAyMC41NTIgMzI2LjEwNSAwIDIzNC4zMTEgMGMtMzkuNjU1IDAtNjEuODc5IDMuNzI3LTYxLjg3OSAzLjcyN2w2MC42OCA2MC42ODV6TTY5Ny44MiAxOTAuODI0cy0yOS44MzQtOS42MDgtNjAuMTY5LTEzLjY1NGMtMTUuMTc1IDE1LjY3Ni0yOC4zMjMgMjIuMjUtMzIuMzY4IDI0LjI3OC0uNTA2LjUtMS4wMTEgMS4wMDYtMS4wMTEgMS4wMDYtODguNDkyLTE4LjcxLTEyMC4zNDktNjQuMjItMTIwLjM0OS02NC4yMiA4My40NC0uNSAxNTguNzg1IDE5LjIxNSAyMTMuODk3IDUyLjU5eiIvPjxwYXRoIGlkPSJjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ni4wMzcgMTE0LjgzMmMwIDY2LjI0Ny0yNy4zIDEyNy40MjgtNzMuODI3IDE3Ni45ODNMMCAyOTQuMzU5bDMuNzI3LS4wMWMxMi42NDEtLjUxMSAyNS4yODMgMi4wMTcgMzUuOTA3IDguMDg1IDUwLjU2NyAyNy4zMTEgMTcuNjk5IDc4LjM3OSAxNy42OTkgNzguMzc5IDYzLjIwOC0xMC4xMTQgMTQxLjU4Ni04MC45MDIgMTI4LjkzOS0yMDQuNzk1QzE3Ni43NTEgODIuNjcxIDkwLjU5NSAyMy41MDMgNDguNjg2IDBjMTguMDEyIDM1LjU3NCAyNy4zNTEgNzQuNjQ3IDI3LjM1MSAxMTQuODMyIi8+PHBhdGggaWQ9ImUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNDg0LjkzNWMwIDguMjAxLjMxOSAxNi4wMDkuNzc0IDIzLjYzOSA2Mi41ODEgMTIwLjM1NCAxMzcuODYgMjI1LjQ5NyAyMjMuOTYgMzEyLjU2OCAxMDcuMzc4IDEwOC4zNSAyMzIuMzIzIDE4OC43MzggMzcxLjQ0MiAyMzkuMDA4IDEzOC42MTQtNTAuMSAyNjMuNTY0LTEzMC42NTggMzcxLjQ1OC0yMzkuNTI5IDMxLjk4OC0zMi4zNDIgNjIuNDk2LTY3LjI5OSA5MS40NzYtMTA0LjY1Mi0yMzAuNjg2LTE2LjU4MS0yMTYuNjc0LTE1Ni43MDEtMjE2LjY3NC0xNTYuNzAxIDAtNS41NTggMC0xMS4xMjUgMS4wMTEtMTYuNjg3IDAgMCAuNTExLTQuOTIxIDIuMTktMTIuNjQyLTQ4LjczMSAyMy44ODItMTIyLjYwOSA1MC4wNTYtMjEyLjU0NyA1MC4wNTYtMTY1LjM0OCAwLTM4OS44NjktOTguNi0zODkuODY5LTMwMS44NzhTNDc1LjgyNy41MTEgNDc1LjgyNy41MTFsLS4xMjEtLjAzNkM0NjkuODEuMDIgNDYzLjQ4OSAwIDQ1Ny42MjMgMCAyMDMuMjczIDkuMTA3IDAgMjIyLjQ5MyAwIDQ4NC45MzUiLz48L2RlZnM+PC9zdmc+"

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #fff;\n  border-top: 1px solid ', ';\n\n  ul {\n    padding-left: 25px;\n    list-style: none;\n    margin-bottom: 25px;\n  }\n\n  ul#blockchain {\n    background: url(', ') no-repeat left top;\n  }\n\n  ul#ethereum {\n    background: url(', ') no-repeat left top;\n  }\n'], ['\n  background: #fff;\n  border-top: 1px solid ', ';\n\n  ul {\n    padding-left: 25px;\n    list-style: none;\n    margin-bottom: 25px;\n  }\n\n  ul#blockchain {\n    background: url(', ') no-repeat left top;\n  }\n\n  ul#ethereum {\n    background: url(', ') no-repeat left top;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _illustration = __webpack_require__(47);

var _illustration2 = _interopRequireDefault(_illustration);

var _blockchain = __webpack_require__(48);

var _blockchain2 = _interopRequireDefault(_blockchain);

var _ethereum = __webpack_require__(49);

var _ethereum2 = _interopRequireDefault(_ethereum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Title = _web.IllustratedSection.Title,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var Main = (0, _styledComponents2.default)(_web.IllustratedSection)(_templateObject, _ui.theme.contentBackgroundActive, _blockchain2.default, _ethereum2.default);

var DeathToPaperwork = function DeathToPaperwork() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      Illustration,
      null,
      _react2.default.createElement('img', { src: _illustration2.default, alt: '' })
    ),
    _react2.default.createElement(
      Title,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Goodbye unnecessary intermediaries'
      )
    ),
    _react2.default.createElement(
      Subtitle,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Reclaim your independence'
      )
    ),
    _react2.default.createElement(
      Emphasis,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Aragon organizations are powered by Ethereum, a global blockchain for running unstoppable applications. In Ethereum, code and applications always run without any possibility of downtime or censorship'
      )
    ),
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(
        'ul',
        { id: 'blockchain' },
        _react2.default.createElement(
          'li',
          null,
          'Blockchain technology provides a single shared source of cryptographically verified truth. This is secured by a network made up of thousands of computers all over the globe. Anyone can set up their own node where all the necessary data is replicated across the network'
        )
      ),
      _react2.default.createElement(
        'ul',
        { id: 'ethereum' },
        _react2.default.createElement(
          'li',
          null,
          'This decentralized design ensures a borderless and permissionless way of operating, without the fear of a government or a malicious third-party interfering'
        )
      )
    )
  );
};

exports.default = DeathToPaperwork;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDM0IiBoZWlnaHQ9IjUxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyOS42MTYlIiB5MT0iMTMuMjE1JSIgeDI9IjEuNzQzJSIgeTI9IjExNC42NTclIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJjIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0VCRjNGNSIgb2Zmc2V0PSI3LjQ2OCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTE2LjQwMSUiIHkxPSIxMjcuODczJSIgeDI9IjE0Ljk1OCUiIHkyPSIwJSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiNFOUYyRjQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiM1OEQyRUQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiM5NEU0RjYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNTguODQgMjI0Ljc0NlY5NC43NTZMMCAuOTEzem0uMTkyLTEzMC4wMTd2MTI5Ljk4OUwzMTcuOTcuODg2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUuMjUzIDI4NS44NDQpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0yMTMuODk2IDM1OC4xMTFMOTcuNjI0IDI4OS4zODIgMjEzLjg5NyA5Ni40NTcgMzMwLjE3IDI4OS4zODJsLTExNi4yNzMgNjguNzI5em0uOTM3IDIyLjk1bDExNi4zNDItNjguNjkzLTExNi4zNDIgMTYzLjg0N0w5OC41NTkgMzEyLjM2NmwxMTYuMjc0IDY4LjY5NHoiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii43Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgb3BhY2l0eT0iLjUxMSIgZD0iTTExNy4yMDggMjg0LjYwNnY5NS4xNTRsMTE2LjM0NC0xNjMuODQ4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuNjI0IDk2LjQ1NikiLz48L2c+PHBhdGggZD0iTTIxNC4yODUgMzgwLjU3M3YxMjkuOTg5TDM3My4yMjEgMjg2LjczeiIvPjxwYXRoIGZpbGw9InVybCgjYikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMyOSIgZD0iTTIxNS40MTIgNDc2LjM1NlYzODEuMkw5OS4xMzggMzEyLjUwN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNTggLS4xNCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkzIDUxMC41OVYzODAuNmwtMTU4Ljg0LTkzLjg0NHoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjU4IDE3OS40NDYpIj48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4zNzIiIGQ9Ik0zLjIzIDk2LjM3N2wyMTIuMDEgMTI4LjE0N0w0MzMuMDU0IDk2LjM3NyAyMTguMTQyLjE1N3oiLz48Y2lyY2xlIGZpbGw9InVybCgjYykiIGN4PSIyLjY2MyIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNjKSIgY3g9IjIxNC45ODYiIGN5PSIyMjMuODY1IiByPSIyLjA5Ii8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iNDMxLjk4NiIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMTIuMTU0IDB2MzU3LjQ0NWwxNTguODQtOTMuODl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIxMi4xNTUgMEw1My4zMTUgMjYzLjU1NWwxNTguODQgOTMuODkyVjE5MS4zNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjUwOSIgZD0iTTIxMS45NTggOTUuODkydjI2MS42NTVsMTE2LjI3NC02OC43Mjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZykiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjQ3NiIgZD0iTTIxMS45NiA5NS44OTJMOTUuNjg1IDI4OC44MThsMTE2LjI3MyA2OC43M1YyMzUuOTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjaCkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMxNCIgZD0iTTIxMS45NTggMzU3LjU0N0wzMjguMjMgMjg4LjgybC0xMTYuMjcyLTUyLjg1ek05NS42ODYgMjg4LjgxOGwxMTYuMjcxIDY4Ljczdi0xMjEuNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTIxMy44OTYgMzU4LjExMWwxMTYuMjcyLTY4LjcyOC0xMTYuMjcyLTUyLjg1eiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTk3LjYyNCAyODkuMzgybDExNi4yNzIgNjguNzN2LTEyMS41OHoiLz48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4xMDciIGQ9Ik0uNzEyIDI3NS4yNTlsMjEyLjAxMSAxMjguMTQ3IDIxNy44MTMtMTI4LjE0Ny0yMTcuNzE4LTk2LjIyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS45MzggLjU2NCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkyIDM1OC4wMDlMMzcyLjkzIDI2NC4xMmwtMTU4LjgzOC03Mi4xOTd6bS0xNTguODM5LTkzLjg5bDE1OC44MzggOTMuODlWMTkxLjkyMnoiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0ZGRiI+PHBhdGggZD0iTTIxNC4wOTIuNTY0djM1Ny40NDVsMTU4Ljg0LTkzLjg5eiIvPjxwYXRoIGQ9Ik0yMTQuMDkzLjU2NEw1NS4yNTMgMjY0LjExOWwxNTguODQgOTMuODkxVjE5MS45MjJ6Ii8+PHBhdGggb3BhY2l0eT0iLjQxOSIgZD0iTTIxNC4wOTIgMzU4LjAwOUwzNzIuOTMgMjY0LjEybC0xNTguODM4LTcyLjE5N3ptLTE1OC44MzktOTMuODlsMTU4LjgzOCA5My44OVYxOTEuOTIyeiIvPjxwYXRoIG9wYWNpdHk9Ii41IiBkPSJNMjE0LjA5MiAzNTguMDA5TDM3Mi45MyAyNjQuMTJsLTE1OC44MzgtNzIuMTk3eiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTAgMTBoNnY2aC02ek0wIDIwaDZ2NkgweiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTIuNzgxIDIzLjg4OVYxMy4xNzdoMTAuNDk1TTEyLjg1IDIuOTd2MTAuNTk3Ii8+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTAgMTBoNnY2SDB6TTEwIDBoNnY2aC02eiIvPjwvZz48L3N2Zz4="

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZD0iTS4yODMgMTMuOThsOC40MjYgNC45NzdWMHoiIGZpbGw9IiMwMDAiIG9wYWNpdHk9Ii42Ii8+PHBhdGggZD0iTTguNzA5IDB2MTguOTU3bDguNDIyLTQuOTc3eiIgZmlsbD0iIzAxMDEwMSIvPjxwYXRoIGQ9Ik0uMjgzIDE1LjU3Nmw4LjQyNiAxMS44N3YtNi44OTJ6IiBvcGFjaXR5PSIuNiIgZmlsbD0iIzAxMDEwMSIvPjxwYXRoIGQ9Ik04LjcwOSAyMC41NTR2Ni44OTJsOC40MjktMTEuODd6IiBmaWxsPSIjMDEwMTAxIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 0;\n  padding-bottom: 140px;\n'], ['\n  padding-top: 0;\n  padding-bottom: 140px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _OverlapBackground = __webpack_require__(5);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(54);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Title = _web.IllustratedSection.Title,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var Main = (0, _styledComponents2.default)(_web.IllustratedSection)(_templateObject);

var Disintermediating = function Disintermediating() {
  return _react2.default.createElement(
    _OverlapBackground2.default,
    null,
    _react2.default.createElement(
      Main,
      null,
      _react2.default.createElement(
        Title,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Democratizing governance'
        )
      ),
      _react2.default.createElement(
        Subtitle,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'The first step towards a more fair, efficient world'
        )
      ),
      _react2.default.createElement(
        Emphasis,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'We are building Aragon because we believe',
          ' ',
          _react2.default.createElement(
            'a',
            {
              href: 'https://blog.aragon.one/decentralized-organizations-can-solve-the-worlds-worst-problems-840db6255d12',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            'decentralized organizations can solve the world\u2019s worst problems'
          )
        )
      ),
      _react2.default.createElement(
        Content,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'Aragon is a project that aims to disintermediate the creation and maintenance of organizational structures by using blockchain technology. We want to empower people across the world to easily and securely manage their organizations. We provide the tools for anyone to become an entrepreneur and run their own organization, to take control of their own lives'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By making it possible for everyone in the world to organize, we are enabling a borderless, permissionless and more efficient creation of value'
        )
      ),
      _react2.default.createElement(
        Illustration,
        null,
        _react2.default.createElement('img', { src: _illustration2.default, alt: '' })
      )
    )
  );
};

exports.default = Disintermediating;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNi45OTclIiB5MT0iMTEzLjk4MyUiIHgyPSI3NS4wNjElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGgxNDQwdjExMTNIMFYwem0wIDB2MzIwLjc1YzQyMy4xOTMgNzguMDAyIDY2My4xOTMgMTE3LjAwMyA3MjAgMTE3LjAwMyA1Ni44MDcgMCAyOTYuODA3LTM5IDcyMC0xMTcuMDAyVjBIMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0wIDgwM2gxNDQwdjMxMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNi45OTclIiB5MT0iMTEzLjk4MyUiIHgyPSI3NS4wNjElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGgxNDQwdjExMTNIMFYwem0wIDB2MzIwLjc1YzQyMy4xOTMgNzguMDAyIDY2My4xOTMgMTE3LjAwMyA3MjAgMTE3LjAwMyA1Ni44MDcgMCAyOTYuODA3LTM5IDcyMC0xMTcuMDAyVjBIMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0wIDgwM2gxNDQwdjMxMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNi45OTclIiB5MT0iMTEzLjk4MyUiIHgyPSI3NS4wNjElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGgxNDQwdjExMTNIMFYwem0wIDB2MzIwLjc1YzQyMy4xOTMgNzguMDAyIDY2My4xOTMgMTE3LjAwMyA3MjAgMTE3LjAwMyA1Ni44MDcgMCAyOTYuODA3LTM5IDcyMC0xMTcuMDAyVjBIMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MzkgLTMyMSkiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMCA4MDNoMTQ0MHYzMTBIMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDM5IC0zMjEpIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/de050bc3-illustration.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 30px 0;\n  background: #fff;\n  .title {\n    text-align: center;\n    text-transform: uppercase;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .logos {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 100%;\n    align-items: center;\n  }\n  a {\n    mix-blend-mode: multiply;\n    margin: 10px 20px;\n  }\n  a:first-child {\n    margin-left: 0;\n  }\n  a:first-child {\n    margin-right: 0;\n  }\n  img {\n    max-height: 64px;\n    filter: grayscale(100%);\n    transition: filter 150ms ease-in-out;\n  }\n  a:hover img {\n    filter: none;\n  }\n'], ['\n  padding: 30px 0;\n  background: #fff;\n  .title {\n    text-align: center;\n    text-transform: uppercase;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .logos {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 100%;\n    align-items: center;\n  }\n  a {\n    mix-blend-mode: multiply;\n    margin: 10px 20px;\n  }\n  a:first-child {\n    margin-left: 0;\n  }\n  a:first-child {\n    margin-right: 0;\n  }\n  img {\n    max-height: 64px;\n    filter: grayscale(100%);\n    transition: filter 150ms ease-in-out;\n  }\n  a:hover img {\n    filter: none;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = __webpack_require__(2);

var _economist = __webpack_require__(56);

var _economist2 = _interopRequireDefault(_economist);

var _coindesk = __webpack_require__(57);

var _coindesk2 = _interopRequireDefault(_coindesk);

var _forbes = __webpack_require__(58);

var _forbes2 = _interopRequireDefault(_forbes);

var _nasdaq = __webpack_require__(59);

var _nasdaq2 = _interopRequireDefault(_nasdaq);

var _reuters = __webpack_require__(60);

var _reuters2 = _interopRequireDefault(_reuters);

var _venturebeat = __webpack_require__(61);

var _venturebeat2 = _interopRequireDefault(_venturebeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LOGOS = [{
  name: 'CoinDesk',
  image: _coindesk2.default,
  url: 'https://www.coindesk.com/dao-manager-aragon-alpha-ethereum/',
  opacity: 0.5
}, {
  name: 'The Economist',
  image: _economist2.default,
  url: 'https://www.economist.com/news/world-if/21724906-trust-business-little-noticed-huge-startups-deploying-blockchain-technology-threaten',
  opacity: 0.75
}, {
  name: 'VentureBeat',
  image: _venturebeat2.default,
  url: 'https://venturebeat.com/2017/12/03/no-ceo-needed-these-blockchain-platforms-will-let-the-crowd-run-startups/',
  opacity: 0.5
}, {
  name: 'Forbes',
  image: _forbes2.default,
  url: 'https://www.forbes.com/sites/rogeraitken/2017/04/20/forbes-under-30-tech-prodigy-in-cryptosale-for-decentralized-jurisdiction-platform/',
  opacity: 0.75,
  width: 92
}, {
  name: 'Reuters',
  image: _reuters2.default,
  url: 'https://www.reuters.com/article/us-aragon-blockchain-funding/blockchain-token-sale-nets-25-million-in-under-15-minutes-idUSKCN18E32X',
  opacity: 0.75
}, {
  name: 'Nasdaq',
  image: _nasdaq2.default,
  url: 'http://www.nasdaq.com/article/disintermediating-entrepreneurship-iis-the-first-step-towards-a-fairer-world-cm806430',
  opacity: 0.5
}];

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject);

var LogosBar = function LogosBar() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'h1',
      { className: 'title' },
      'As seen on'
    ),
    _react2.default.createElement(
      'div',
      { className: 'logos' },
      LOGOS.map(function (_ref) {
        var name = _ref.name,
            image = _ref.image,
            url = _ref.url,
            opacity = _ref.opacity,
            _ref$width = _ref.width,
            width = _ref$width === undefined ? 128 : _ref$width;
        return _react2.default.createElement(
          'a',
          {
            key: url,
            href: url,
            target: '_blank',
            rel: 'noopener noreferrer',
            style: { opacity: opacity }
          },
          _react2.default.createElement('img', { src: image, alt: name, title: name, width: width })
        );
      })
    )
  );
};

exports.default = LogosBar;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTI0LjEgMzQ1Ij48cGF0aCBkPSJNODU2LjYgMzQyaC01Ni4yYy0uNy00LjUtLjQtNS4xIDMuNS02LjIgNS44LTEuNyA3LjUtMy40IDcuNi05LjQuMS0yMS42LjItNDMuMi0uMS02NC45LS4xLTYuOC0yLjMtMTMuNC05LjItMTUuOS03LjctMi44LTE1LjQtMS40LTIxLjMgNC42LTUgNS4xLTguMiAxMS4xLTggMTguOC42IDE3LjkuNiAzNS44LjkgNTMuNyAwIDEuNS4zIDMgLjQgNC41LjIgNC45IDIuNCA3LjggNy42IDguNSAzLjcuNSA0LjEgMS41IDMuMyA2LjJoLTUyYy0uNS0zLjEuOS01LjIgMy42LTUuOSA3LjEtMS44IDktNi40IDguOS0xMy4zLS4zLTE5LS4xLTM3LjktLjItNTYuOS0uMS0yLjktLjUtNS43LTEuMy04LjUtMy4zLTEzLjYtMTQuMi0xNS4zLTI0LTExLTkuNSA0LjItMTMuOSAxMi42LTE0IDIyLjYtLjEgMTkuNS43IDM5IC45IDU4LjUgMCAzLjYgMS45IDUuNyA1IDcgMS40LjYgMi44IDEuMSA0LjEgMS43IDIuNC44IDMuOCAzLjMgMy4xIDUuOGgtNTYuM2MtMS00LjktLjYtNS41IDQuMi01LjkgOC40LS42IDExLjEtMi43IDExLjQtMTEgLjYtMjAuMi43LTQwLjUuOC02MC43IDAtNC45LS40LTkuOC0uOC0xNC43LS41LTUuOS0zLjctOC45LTkuNS05LjYtMS4zLS4xLTIuNS0uMy0zLjgtLjMtMi4xLS4xLTIuNy0xLjMtMi43LTMuMnMxLTIuNyAyLjktMi45YzExLjUtMS40IDIzLTIuOSAzNC41LTQuNSAyLjctLjQgNC4zLjIgNC41IDMuMi4yIDQuOC40IDkuNi43IDE0LjYuNy0uNSAxLjQtLjkgMS45LTEuNCAxLjUtMS40IDMuMS0yLjYgNC40LTQuMSAxMC41LTExLjQgMjMuOS0xMy4xIDM4LjItMTEgNi4zLjkgMTEgNSAxNC43IDEwIDEuOSAyLjcgMy42IDUuNSA1LjYgOC40LjgtLjcgMS41LTEuMiAyLjItMS45IDIuNC0yLjIgNC44LTQuNSA3LjItNi44IDEwLjQtOS45IDIyLjktMTIgMzYuNS05LjkgMTAuNiAxLjcgMjAuNyAxMi45IDIyIDI1IC45IDguOSAxLjEgMTcuOCAxLjMgMjYuOC4zIDEzLjQuNCAyNi44LjcgNDAuMi4yIDguNSAzLjIgMTEuOSAxMS41IDEzLjQgNC4zIDEgNC43IDEuNCA1LjMgNi40ek0uMyAzNDJjLS44LTQuOC0uNC01LjQgMy44LTYuMiAyLjItLjQgNC40LS44IDYuNS0xLjUgNi4zLTEuOCA4LjMtNCA4LjYtMTAuNi41LTEwLjMgMS0yMC42IDEuMS0zMSAwLTI3LS4yLTUzLjktLjUtODAuOS0uMS00LS42LTgtMS40LTEyLS40LTMuOS0zLjUtNi45LTcuNC03LjMtMi4yLS40LTQuNC0uOC02LjYtMS4zLTQuNi0xLTQuOS0xLjYtNC4zLTYuNmgxMDEuNHYzMi45bC04LjEuOGMtLjUtMi44LS44LTUuNC0xLjMtNy45LTEuNS03LjgtNS42LTEyLjEtMTMuMy0xMi44LTkuNC0uOC0xOC45LS45LTI4LjUtMS4zVjI1NGMxMC4yIDEuNSAyMC4yIDIuNCAzMC40LjEgNC4zLS45IDcuMS0zLjMgOC4xLTcuNi40LTEuOSAxLTMuNyAxLjMtNS42IDEuMi02LjEgMS43LTYuNSA4LjQtNS42LjEuOS4yIDEuOC4yIDIuNyAwIDE0LjcgMCAyOS40LS4yIDQ0LjEgMCAxLjQuNiAzLjQtMS44IDMuMi0yLjItLjEtNSAuOS01LjktMi4yLS41LTEuOC0uOS0zLjctMS4yLTUuNi0xLjEtNS42LTQuMS05LjQtMTAtMTAtOS42LS45LTE5LjMtMS41LTI5LjItMi4yLS4xIDEuNi0uMiAyLjYtLjIgMy42LjIgMTYuMi40IDMyLjQuNyA0OC42LjIgMTEuMSAyLjQgMTMuMyAxMy41IDEzIDYuMy0uMSAxMi42IDAgMTguOC0uOSAxMC45LTEuNSAxNy4xLTguMiAxOC44LTE5LjEgMS02LjUgMS02LjQgNy43LTYuMiAyLjYuMSAzLjIuOSAyLjggMy41LTEuNSAxMC4yLTIuOCAyMC41LTQuMSAzMC43LS4zIDIuNi0xLjMgMy44LTMuOSAzLjgtMTMuMy4xLTI2LjYuMy0zOS45LjMtMTkuOC0uMS0zOS42LS40LTU5LjQtLjUtMS44LjEtMy40IDAtNC45LS4xek00MjMgMjI5LjNsMS40IDE3LjhjLjYtLjQgMS4yLS44IDEuOC0xLjQgMS4yLTEgMi40LTIuMiAzLjUtMy4zIDkuNy0xMS4yIDIyLjMtMTMuNiAzNi4yLTEyLjMgOS40LjkgMTYuMSA2LjEgMjEuMiAxMy43IDQuMSA2LjEgNS4yIDEyLjkgNS40IDIwLjEuNCAyMC40LjggNDAuOSAxLjMgNjEuMy4xIDUuOCAyLjMgOC41IDcuOSAxMCAxLjUuNCAzLjEuOCA0LjcgMS4xIDMuMS41IDQuNCAyLjMgMy45IDUuNmgtNTYuNGMtMS00LS42LTUuMyAzLjEtNi4xIDYuMS0xLjMgOC4zLTUuMiA4LjYtMTAuOSAxLjQtMjAuNCAyLTQwLjgtLjItNjEuMi0uMy0yLS43LTQtMS4yLTUuOS0yLjctMTEuMi04LjgtMTUtMjEuNC0xMi43LTguOCAxLjYtMTYuNSAxMC40LTE2LjcgMTkuOS0uNSAyMC4xLS4yIDQwLjItLjEgNjAuNCAwIDUgMi40IDguNiA3LjYgMTAuMiA0IDEuMiA0LjQgMi4xIDUuMSA1LjgtMTkgMS4yLTM3LjguNy01Ni41LjgtMS4xLTUtLjYtNS43IDQtNi4xIDguNS0uNiAxMS40LTMuMiAxMS41LTExLjYuMy0yMy41LjMtNDcuMS41LTcwLjYtLjEtMS40LS4yLTIuOC0uNC00LjEtLjYtNS41LTMuOC04LjktOS40LTkuNi0xLjUtLjItMy0uMy00LjUtLjQtMS4zIDAtMi4zLS45LTIuMy0yLjIgMC0uMyAwLS42LjItLjkuMy0xLjEgMS40LTIuNiAyLjItMi43IDEyLjktMS43IDI1LjctMy4yIDM5LTQuN3pNNTYzLjggMHY1OS42YzEuNi0xLjUgMi42LTIuMyAzLjUtMy4yIDkuNC04LjggMjAuNS0xMi41IDMzLjQtMTAuOCAxMi40IDEuNyAyMi4xIDEyLjkgMjIuNyAyNi45LjQgOS42LjUgMTkuMi44IDI4LjdzLjYgMTkuNCAxLjIgMjljLjUgOC4zIDIuMyA5LjkgMTAuNiAxMS4yIDQgLjYgNC40IDEuMSAzLjcgNS40aC01MC41Yy0uOS0zLjktLjQtNS4xIDMuMi02IDUuNC0xLjIgNy41LTQuNSA3LjUtOS44LjEtMTYgLjUtMzEuOS40LTQ3LjktLjItNC0uOC04LjEtMS43LTEyLTItOS45LTYuMy0xNC41LTE5LjgtMTEuNy03LjggMS44LTEzLjUgOC40LTE0IDE2LjQtLjYgMTMuOS0uNiAyNy45LS44IDQxLjggMCA0LjkuMSA5LjguNCAxNC43LjIgNC41IDIuOSA3LjEgNyA4LjQuOC4yIDIgLjMgMi4zLjkuNyAxLjIgMS4yIDIuNiAxLjMgNCAwIC40LTEuNyAxLjQtMi41IDEuNC0xNS4xLS4xLTMwLjItLjItNDUuNC0uNS0xIDAtMi0uOC0zLTEuMi43LTEgMS4xLTIuNSAyLTIuOSAxLjktLjkgNC0xLjQgNi4xLTEuNyAzLjEtLjQgNS0yIDUuNC01IC43LTMuOCAxLjEtNy42IDEuMy0xMS40LjMtMzIuNS40LTY1IC41LTk3LjQgMC0yLjMtLjEtNC43LS40LTctLjctNS41LTMuNC04LjQtOC44LTkuNS0xLjQtLjItMi43LS42LTMuOS0xLjItMS0uNy0xLjYtMi0yLjQtMy4xIDEtLjUgMS45LTEuNCAyLjktMS41IDQuOC0uNiA5LjgtLjkgMTQuNi0xLjUgNi40LS45IDEyLjgtMiAxOS4yLTIuOSAxLjEgMCAyLS4xIDMuMi0uMnpNMzU2LjcgMjg3LjljLS4yIDEyLjktMy41IDI0LjktMTEuMSAzNS40LTEyLjMgMTcuMS0yOS44IDIyLjktNDkuOCAyMS4yLTI3LjgtMi40LTQ1LjctMjEuNy00Ny44LTQ5LjYtLjktMTIuNCAwLTI0LjUgNS4xLTM2IDcuOS0xNy45IDIyLjEtMjcuMiA0MS4zLTI5LjMgMTAuNC0xLjEgMjAuNSAwIDMwIDQuMiAxOC42IDguMiAyNy45IDIzLjQgMzEuMiA0Mi45LjcgMy44LjggNy41IDEuMSAxMS4yem0tODEuNS01LjZjMS4xIDguNyAxLjggMTYuOCAzLjIgMjQuNyAxLjUgOC42IDQuNiAxNi42IDExIDIzIDkuOCA5LjYgMjQuOSA4IDMyLjEtMy43IDItMy40IDMuNi03IDQuNS0xMC44IDMuMy0xMi42IDMuMi0yNS41IDEuNi0zOC40LTEuMy0xMC00LjEtMTkuNi0xMC40LTI3LjgtNS44LTcuNC0xMy4xLTEyLjMtMjIuOS0xMC4ycy0xNC45IDkuNy0xNi42IDE5Yy0xLjQgOC4yLTEuNyAxNi41LTIuNSAyNC4yem0yNTMuMiA2LjNjLjItMTMuNiAyLjMtMjUuNiA5LjEtMzYuMyA4LjctMTMuNyAyMS40LTIxIDM3LjQtMjIuNSAxMC4zLS45IDIwLjUtLjIgMzAuMSAzLjkgMTguMSA3LjggMjcuNiAyMi4zIDMxLjMgNDEuMSAyLjYgMTMgMS4yIDI2LjYtNC4yIDM4LjgtOCAxOC41LTIyLjggMjguMy00Mi42IDMwLjctMTEuNiAxLjQtMjIuOC4xLTMzLjItNS40LTE3LjQtOS4xLTI1LjQtMjQuNC0yNy41LTQzLjMtLjMtMi43LS4zLTUuNC0uNC03em04MSA0LjFsLjktLjFjLTEuNC04LjktMi4yLTE3LjktNC4zLTI2LjctMi4zLTkuOC03LTE4LjYtMTYtMjQuMS05LjEtNS44LTIxLjEtMy4yLTI3IDUuOS0uMS4xLS4xLjItLjIuMy0yLjEgMy40LTMuNiA3LjItNC40IDExLjItMi45IDEzLjctMi4yIDI3LjUtLjQgNDEuMyAxLjIgOSAzLjQgMTcuOCA4LjYgMjUuNSA1LjggOC42IDE0LjYgMTEuOSAyNC41IDkuNCA3LjktMiAxMS43LTguMiAxNC4zLTE1LjEgMy40LTkgNC0xOC4zIDQtMjcuNnpNNDQ3LjUgMTQuMmMtOS41IDEtMTguNiAxLjktMjcuOCAzLjEtNiAuOC05LjYgNC4zLTEwIDEwLjUgMCAuMy0uMS42LS4yLjktMS4xIDcuNi0xLjcgOC4xLTkuOCA3LjMuMi0yLjMuNS00LjYuNi02LjkuMy03LjMuNi0xNC43LjctMjIgMC0xLjguNC0yLjcgMi41LTIuNyAzOC42LjEgNzcuMS4xIDExNS43LjEuNCAwIC45LjEgMS4zLjJWMzZjLS42LjEtMSAuMi0xLjQuMi02LjMuMy02LjMuMy02LjgtNS45LS42LTguNC0zLjktMTIuMy0xMi4xLTEzLjRzLTE2LjQtMS43LTI0LjgtMi42Yy0uMSAxLjUtLjIgMi40LS4yIDMuNCAwIDMxLjYgMCA2My4zLjEgOTQuOSAwIDUgLjMgMTAgLjUgMTUgLjQgOC4zIDQuNCAxMi40IDEyLjcgMTMuMSA1IC40IDUuNCAxIDQuNCA2LjRoLTYzYy0uNS00LjcuMS01LjUgNC4zLTYuMi44LS4xIDEuNy0uNCAyLjUtLjUgOC41LTEuNyA5LjktMy4yIDEwLjItMTEuOC40LTExLjUuNi0yMyAuNy0zNC41LjEtMjUuMyAwLTUwLjcgMC03Ni4xLjEtMS4xIDAtMi4xLS4xLTMuOHptMjkyLjcgNzcuOUg3MzZjLTE4LjMgMC0zNi42LjEtNTUtLjEtMy4xIDAtMy43IDEtMy43IDMuOC4yIDkuNiAyLjUgMTkuMSA2LjkgMjcuNiA2LjIgMTEuOCAxNy43IDE2LjUgMzAuNSAxMi41IDYuMS0yIDExLjYtNS40IDE2LjItOS44IDEuNS0xLjQgMy4xLTIuOSA0LjctNC4zIDMgMy42IDMuMyA2LjQuNyA5LjQtMTQuNiAxNi45LTM0LjYgMjIuNC01NC40IDE1LjItMTMuMi00LjgtMjItMTQuNS0yNi41LTI3LjctNS41LTE2LjMtNC4xLTMyLjQgMy4xLTQ3LjkgOC4xLTE3LjMgMjQtMjYgNDMuMS0yNS42IDI0LjcuNSAzNS44IDIwIDM3LjUgMzYuNy41IDMuMi44IDYuMyAxLjEgMTAuMnpNNzE3IDgwLjhjLS40LTcuNy0zLjEtMTMuNi02LjMtMTkuNS01LjEtOS40LTIyLjMtMTIuMy0yOC42LjktMiA0LjMtMy4yIDguOS00LjYgMTMuNS0uNiAyLjUtMSA1LTEuMiA3LjZsNDAuNy0yLjV6bTMxMiAxNzUuOWMtMi44LjItNC44LjQtNi44LjUtNC44LjMtNS4yIDAtNi45LTQuNy0uNC0xLjEtLjktMi4yLTEuMi0zLjMtMy4zLTExLTExLjEtMTIuOS0yMC45LTEwLjItMTAuOCAzLTEzLjYgMTUuMS01LjQgMjIuOSAzLjQgMyA3IDUuOSAxMC43IDguNiA2LjUgNSAxMy4xIDkuOSAxOS42IDE0LjggMTEuNiA4LjggMTUuMyAyMC41IDExLjUgMzQuMi0zLjcgMTMuMi0xMy4zIDIwLjctMjYuMyAyMy45LTEzLjIgMy4zLTI1LjctLjItMzgtNC43LTEuMi0uNC0yLjItMi42LTIuMy00LS40LTQuOS0uMy05LjgtLjMtMTQuNyAwLTEuOS0uMy00LjMgMi40LTUgMy0uNyA2LjEtMS42IDguNyAxLjEuOCAxIDEuNSAyIDIuMSAzLjIuOCAxLjUgMS41IDMuMSAyLjEgNC42IDQuOSAxMi41IDEzLjggMTIuMyAyNS40IDguMyA2LjEtMi4xIDguNC0xMCA1LjItMTUuNi0yLjEtMy42LTQuOC02LjgtNy45LTkuNS01LjMtNC41LTExLjItOC40LTE2LjgtMTIuNy0zLjgtMi44LTcuNS01LjktMTEtOS4yLTExLjMtMTEuMi0xMi40LTMyLjEtMi41LTQ0LjYgNS43LTcuMiAxMy41LTEwLjIgMjIuMy0xMSAxMC45LTEgMjEuOC4zIDMyLjEgMy45IDEuNC41IDMuMiAyLjMgMy40IDMuNi41IDYuNi42IDEzIC44IDE5LjZ6bTY0LjUtNTIuNHYyOS40aDI3LjVsLTIuOCAxMi44aC0yNC42Yy0uMSAxLjMtLjIgMi4zLS4yIDMuMy4yIDIwLjIuNSA0MC41LjcgNjAuNy4xIDIuOS4zIDUuNy43IDguNiAxLjEgOC44IDcuNiAxNCAxNi44IDEzLjMgNC0uMyA4LS45IDEyLTEuNCAxLjIgNC4zLjIgNi42LTMuNSA4LjQtOS4yIDQuNC0xOS4xIDUuNC0yOSA0LjctMTEtLjgtMjEuMi0xMS0yMi0yMi40LTEuMS0xNS43LTEuNC0zMS41LTEuOS00Ny4yLS4yLTgtLjItMTYtLjItMjR2LTMuOGgtMTMuM2MwLTMuNS0uMi02LjYuMS05LjcuMS0uOCAxLjctMS45IDIuNy0xLjkgOS41LS43IDE2LjQtNS4yIDIwLjItMTMuOSAyLjEtNC43IDMuNC05LjggNS4yLTE0LjcuMy0uOSAxLjMtMiAyLjEtMi4xIDIuOS0uMiA2LS4xIDkuNS0uMXpNMjIxLjQgMzE3LjhsLjYuNmM0IDguMiAzLjggOC4zLTMgMTQuNC0yMi40IDE5LjktNTIuMyAxMi44LTY2LTMuNC03LjQtOC44LTExLjEtMTktMTIuNS0zMC4yLTEuNy0xMy40LTEtMjYuNiA0LjEtMzkuMyA3LjgtMTkuMSAyMi4zLTI5LjIgNDMtMzAuMiAxMS0uNiAyMS42IDEuMiAzMi4yIDQgMS4xLjUgMS44IDEuNCAyIDIuNi4xIDcuMi0uMSAxNC41LS4yIDIxLjcgMCAyLjQtMSAzLjQtMy40IDMuNi02LjkuNi02IDIuMy04LjMtNS41LS45LTMuNC0yLjEtNi43LTMuNS05LjktMi4yLTQuOS02LjMtNy4zLTExLjYtNy44LTEwLjktMS4xLTE5LjIgMy44LTIzLjMgMTQtNC41IDExLjEtNC43IDIyLjktNC4yIDM0LjYuNCA5LjYgMS42IDE5LjEgNS41IDI4IDUuNiAxMi45IDE1LjcgMTguNiAyOC4yIDE1LjggNi4xLTEuNSAxMS44LTQuNiAxNi4zLTkgMS40LTEuNCAyLjctMi42IDQuMS00em02OTguMy04OS4yYzAgMTAuOS0uMSAyMS40IDAgMzIgLjMgMjAuNC44IDQwLjkgMS4yIDYxLjMgMCAxLjIuMiAyLjMuNCAzLjUgMS41IDguMyAyLjYgOS40IDEwLjkgMTAuNiAyLjguNCA1LjMgMSA1IDUuNi0yMC4xIDEtNDAuNC45LTYwLjYtLjEtLjQtMy4zIDEuMi00LjMgMy4xLTQuOSAxLjgtLjUgMy43LS45IDUuNi0xLjEgMy45LS41IDYuMi0yLjkgNi43LTYuNi44LTYuOSAxLjgtMTMuOCAxLjgtMjAuNi0uMS0xOC44LS42LTM3LjctMS4yLTU2LjUtLjItNy44LTMuMi0xMC43LTExLTExLjctMS4xIDAtMi4xLS4zLTMtLjktLjktMS4xLTEuNy0yLjMtMi40LTMuNiAxLS41IDItMS40IDMuMi0xLjUgMTEtMS41IDIxLjktMi44IDMyLjktNC4yIDIuMi0uNCA0LjUtLjkgNy40LTEuM3ptLTE0LTUxLjJjOC40LjEgMTUuMiA3IDE1LjEgMTUuNC4xIDguMi02LjQgMTUtMTQuNiAxNS4xaC0uM2MtOC4yLS4xLTE0LjgtNi42LTE1LTE0LjggMC04LjUgNi44LTE1LjggMTQuOC0xNS43eiIgZmlsbD0iIzVmNWY1ZiIvPjwvc3ZnPg=="

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYuNSA0Ni4zIj48cGF0aCBkPSJNMzAuMyAxMi45Yy0uNi0uOS0xLjMtMS43LTIuMi0yLjQtLjktLjctMS45LTEuMi0yLjktMS42LTEuMS0uNC0yLjItLjYtMy40LS42LTIuMiAwLTQuMS40LTUuNiAxLjMtMS41LjgtMi44IDItMy43IDMuNC0xIDEuNC0xLjYgMy0yLjEgNC45LS40IDEuOC0uNyAzLjctLjcgNS42cy4yIDMuNy43IDUuNGMuNCAxLjggMS4xIDMuMyAyLjEgNC43IDEgMS40IDIuMiAyLjUgMy43IDMuNCAxLjUuOCAzLjQgMS4zIDUuNiAxLjMgMyAwIDUuMy0uOSA3LTIuNyAxLjctMS44IDIuNy00LjIgMy4xLTcuMmg5LjRjLS4yIDIuOC0uOSA1LjMtMS45IDcuNVMzNyA0MCAzNS4zIDQxLjZjLTEuNyAxLjYtMy43IDIuOC02IDMuNnMtNC44IDEuMi03LjUgMS4yYy0zLjQgMC02LjQtLjYtOS4xLTEuOHMtNS0yLjgtNi45LTQuOWMtMS45LTIuMS0zLjMtNC41LTQuMy03LjNTMCAyNi42IDAgMjMuNGMwLTMuMy41LTYuNCAxLjUtOS4yczIuNC01LjMgNC4zLTcuNCA0LjEtMy44IDYuOS01QzE1LjMuNiAxOC40IDAgMjEuOCAwYzIuNCAwIDQuNy40IDYuOSAxLjFzNC4xIDEuNyA1LjggMy4xYzEuNyAxLjMgMy4xIDMgNC4yIDVzMS44IDQuMyAyLjEgNi44aC05LjRjLS4xLTEuMi0uNS0yLjItMS4xLTMuMXptMTIuNCA5LjVjLjgtMi4xIDEuOS0zLjkgMy4zLTUuMyAxLjQtMS41IDMuMi0yLjYgNS4yLTMuNCAyLS44IDQuMy0xLjIgNi44LTEuMnM0LjguNCA2LjkgMS4yYzIgLjggMy44IDEuOSA1LjIgMy40IDEuNCAxLjUgMi42IDMuMiAzLjMgNS4zLjggMi4xIDEuMiA0LjQgMS4yIDdzLS40IDQuOS0xLjIgNi45Yy0uOCAyLjEtMS45IDMuOC0zLjMgNS4zcy0zLjIgMi42LTUuMiAzLjRjLTIgLjgtNC4zIDEuMi02LjkgMS4yLTIuNSAwLTQuOC0uNC02LjgtMS4ycy0zLjgtMS45LTUuMi0zLjQtMi42LTMuMi0zLjMtNS4zYy0uOC0yLjEtMS4yLTQuNC0xLjItNi45IDAtMi42LjQtNSAxLjItN3ptOCAxMC43Yy4yIDEuMi43IDIuMyAxLjMgMy4zczEuNCAxLjcgMi40IDIuMyAyLjIuOSAzLjcuOSAyLjctLjMgMy44LS45YzEtLjYgMS44LTEuNCAyLjQtMi4zLjYtMSAxLTIuMSAxLjMtMy4zLjItMS4yLjQtMi41LjQtMy44cy0uMS0yLjUtLjQtMy44Yy0uMi0xLjItLjctMi4zLTEuMy0zLjMtLjYtMS0xLjQtMS43LTIuNC0yLjMtMS0uNi0yLjMtLjktMy44LS45cy0yLjcuMy0zLjcuOS0xLjggMS40LTIuNCAyLjNjLS42IDEtMSAyLTEuMyAzLjMtLjIgMS4yLS40IDIuNS0uNCAzLjggMCAxLjMuMSAyLjYuNCAzLjh6TTc2IDguM1YxLjFoOC44djcuM0g3NnYtLjF6bTguOCA1djMyLjFINzZWMTMuM2g4Ljh6bTExLjEgMHY0LjVoLjJjMS4xLTEuOSAyLjYtMy4yIDQuMy00LjEgMS44LS44IDMuNi0xLjMgNS41LTEuMyAyLjQgMCA0LjMuMyA1LjggMSAxLjUuNiAyLjcgMS41IDMuNiAyLjcuOSAxLjEgMS41IDIuNSAxLjggNC4yLjQgMS42LjUgMy40LjUgNS40djE5LjdoLTguOFYyNy4yYzAtMi42LS40LTQuNi0xLjItNS45LS44LTEuMy0yLjMtMi00LjQtMi0yLjQgMC00LjEuNy01LjIgMi4xcy0xLjYgMy44LTEuNiA3djE2LjhoLTguOFYxMy4zaDguM3ptNDIuOS0xMi4yYzIuOSAwIDUuNS41IDggMS40czQuNiAyLjMgNi40IDQuMWMxLjggMS44IDMuMiA0LjEgNC4yIDYuOHMxLjUgNS45IDEuNSA5LjZjMCAzLjItLjQgNi4yLTEuMiA4LjlzLTIuMSA1LjEtMy44IDcuMS0zLjggMy41LTYuMyA0LjdjLTIuNSAxLjEtNS40IDEuNy04LjggMS43aC0xOS4xVjEuMWgxOS4xem0tLjcgMzZjMS40IDAgMi44LS4yIDQuMS0uN3MyLjUtMS4yIDMuNS0yLjMgMS45LTIuNCAyLjUtNC4xLjktMy44LjktNi4yYzAtMi4yLS4yLTQuMi0uNy02LS40LTEuOC0xLjEtMy4zLTIuMS00LjZzLTIuMy0yLjMtMy45LTIuOS0zLjYtMS02LTFoLTYuOXYyNy45bDguNi0uMXptMzIuOS41YzEuMyAxLjMgMy4yIDEuOSA1LjcgMS45IDEuOCAwIDMuMy0uNCA0LjYtMS4zIDEuMy0uOSAyLjEtMS44IDIuNC0yLjhoNy44Yy0xLjIgMy44LTMuMSA2LjYtNS43IDguMi0yLjYgMS43LTUuNyAyLjUtOS4zIDIuNS0yLjUgMC00LjgtLjQtNi44LTEuMnMtMy43LTItNS4xLTMuNGMtMS40LTEuNS0yLjUtMy4zLTMuMy01LjMtLjgtMi4xLTEuMS00LjMtMS4xLTYuOCAwLTIuNC40LTQuNiAxLjItNi43czEuOS0zLjkgMy4zLTUuNGMxLjQtMS41IDMuMi0yLjcgNS4yLTMuNiAyLS45IDQuMi0xLjMgNi43LTEuMyAyLjcgMCA1LjEuNSA3LjEgMS42czMuNyAyLjUgNSA0LjJjMS4zIDEuOCAyLjIgMy44IDIuOCA2LjFzLjggNC42LjYgNy4xSDE2OWMtLjEgMi45LjcgNSAyIDYuMnptOS45LTE2LjhjLTEuMS0xLjItMi43LTEuNy00LjgtMS43LTEuNCAwLTIuNi4yLTMuNS43cy0xLjcgMS4xLTIuMiAxLjhjLS42LjctMSAxLjQtMS4yIDIuMi0uMi44LS40IDEuNS0uNCAyLjFoMTQuM2MtLjQtMi4zLTEuMS00LTIuMi01LjF6bTIwLjUgMTYuNmMuNC43LjkgMS4yIDEuNSAxLjdzMS4zLjggMi4xIDEgMS42LjMgMi41LjNjLjYgMCAxLjMtLjEgMi0uMnMxLjMtLjQgMS45LS43Yy42LS4zIDEtLjcgMS40LTEuMnMuNi0xLjIuNi0yYzAtMS4zLS45LTIuMy0yLjYtM3MtNC4yLTEuMy03LjMtMmMtMS4zLS4zLTIuNS0uNi0zLjgtMS0xLjItLjQtMi4zLS45LTMuMy0xLjYtMS0uNi0xLjctMS40LTIuMy0yLjRzLS45LTIuMi0uOS0zLjZjMC0yLjEuNC0zLjggMS4yLTUuMS44LTEuMyAxLjktMi40IDMuMi0zLjEgMS4zLS44IDIuOC0xLjMgNC41LTEuNnMzLjMtLjUgNS4xLS41YzEuNyAwIDMuNC4yIDUuMS41IDEuNi4zIDMuMS45IDQuNCAxLjcgMS4zLjggMi4zIDEuOCAzLjIgMy4xLjggMS4zIDEuNCAyLjkgMS41IDQuOUgyMTNjLS4xLTEuNy0uOC0yLjgtMS45LTMuNC0xLjItLjYtMi41LS45LTQuMS0uOS0uNSAwLTEgMC0xLjYuMXMtMS4xLjItMS42LjQtLjkuNS0xLjIuOS0uNS45LS41IDEuNmMwIC44LjMgMS40LjkgMS45LjYuNSAxLjMuOSAyLjMgMS4yLjkuMyAyIC42IDMuMi44IDEuMi4yIDIuNC41IDMuNy44czIuNS42IDMuOCAxLjFjMS4yLjQgMi4zIDEgMy4zIDEuNiAxIC43IDEuNyAxLjUgMi4zIDIuNXMuOSAyLjMuOSAzLjhjMCAyLjEtLjQgMy45LTEuMyA1LjMtLjggMS40LTIgMi42LTMuMyAzLjRzLTIuOSAxLjUtNC43IDEuOC0zLjUuNS01LjQuNS0zLjctLjItNS41LS42Yy0xLjgtLjQtMy40LTEtNC43LTEuOS0xLjQtLjktMi41LTItMy40LTMuNHMtMS40LTMuMi0xLjUtNS40aDguNGMtLjMgMS4yLS4xIDIgLjMgMi43em0zMi4zLTM2LjN2MjMuN2wxMS4xLTExLjVoMTAuNEwyNDMuMSAyNWwxMy41IDIwLjNoLTEwLjdMMjM3LjEgMzFsLTMuNCAzLjN2MTFoLTguOFYxLjFoOC44eiIgZmlsbD0iIzIwMjUyZCIvPjwvc3ZnPg=="

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/c5062b1e-forbes.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIyNy42IDM1MS44Ij48c3R5bGU+LnN0MHtmaWxsOiMwOTMzNTZ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIyNy42IDMwNy41Yy0xLjUuMy0yLjggMS00LjEgMS42LTcuMyAzLjItMTQuNSA2LjQtMjEuNyA5LjZsLTEuNS42Yy0uNC4xLS42LS4xLS43LS40LS4xLS43LS4xLTEuNC0uMS0yLjF2LTUwLjRjMC0uNi0uMy0uOS0uOS0uOC0xLjYuMi0zLjEuNC00LjcuNS04LjQgMS0xNi44IDEuMi0yNS4yLjMtNy41LS44LTE0LjgtMi41LTIxLjktNS4zLTcuNi0zLTE0LjItNy42LTE5LjYtMTMuOS01LjgtNi43LTkuNi0xNC41LTEyLjEtMjIuOS0yLjgtOS42LTMuNi0xOS40LTMtMjkuNC41LTguNiAyLjQtMTYuOSA1LjktMjQuOCA1LjMtMTEuOCAxMy43LTIwLjUgMjUuNC0yNi4xIDUuOC0yLjggMTItNC42IDE4LjQtNS43IDMuNy0uNyA3LjUtMSAxMS4yLTEuMyA5LjMtLjcgMTguNy0uNCAyOCAuMmwxMS4xLjZjNC41LjIgOC45LjQgMTMuNC43LjcgMCAxLjQtLjEgMi4xLjR2MTY4LjZ6bS02ODcuOS04MC44VjEwMS41YzAtMy45LS40LTMuNCAzLjQtMy40aDIxLjdjMS4yIDAgMS4zLjIgMS4zIDEuNHYxNjEuMWMwIDMuNC4zIDMtMyAzaC0zMS40Yy0yLjcgMC0yLjEuMy0zLjUtMi01LjYtOS44LTExLjMtMTkuNi0xNi45LTI5LjQtNi42LTExLjYtMTMuMy0yMy4yLTE5LjktMzQuNy03LjctMTMuNC0xNS4zLTI2LjctMjMtNDAuMWwtMTIuOS0yMi41Yy0uMi0uMy0uNC0uNi0uNi0xLS42LjEtLjQuNi0uNSAxdjExNS41YzAgMy43IDAgNy40LS4xIDExLjF2MS4yYzAgLjUtLjMuOS0uOS45aC0yMy42Yy0xLjUgMC0xLjYtLjEtMS42LTEuNlYxMDEuNGMwLTMuOC0uNS0zLjMgMy4yLTMuM2gzMi4zYy43IDAgMS4yLjMgMS41LjkgMS40IDIuNSAyLjggNC45IDQuMyA3LjMgOS44IDE2LjkgMTkuNiAzMy45IDI5LjMgNTAuOCA5LjEgMTUuOCAxOC4yIDMxLjYgMjcuMyA0Ny4zIDQgNi45IDcuOSAxMy43IDExLjkgMjAuNi41LjYuNyAxLjIgMS43IDEuN3ptNDE1LjgtNTEuMVYyNjBjMCAzLjYuNSAzLTMuMSAzLjUtNS41LjktMTEgMS42LTE2LjYgMi4yLTExIDEuMy0yMi4xIDIuMS0zMy4yIDEuNi05LjctLjUtMTkuMi0yLjUtMjguMS02LjUtMTEuNy01LjMtMjAuOC0xMy40LTI2LjktMjQuNy0zLjUtNi42LTUuNy0xMy42LTYuOC0yMS0uNy00LjgtMS05LjUtLjktMTQuMy4yLTcuMiAxLjEtMTQuMiAzLjEtMjEuMiAyLjMtOC4xIDUuOS0xNS41IDExLjMtMjIuMSA0LjgtNS45IDEwLjctMTAuNiAxNy41LTE0LjEgNi45LTMuNSAxNC4zLTUuNSAyMi4xLTYuNCA2LjUtLjcgMTMtLjYgMTkuNS0uNCAzLjkuMSA3LjguNCAxMS43LjkuNCAwIC44LjEgMS4yLjEgMS4yLjEgMS4zIDAgMS40LTEuM1Y5MWMwLS44IDAtMS42LjEtMi40IDAtLjMuMy0uNi42LS42aDI1LjljLjkuMSAxIC4yIDEuMSAxLjJ2Mi4xYy4xIDI4LjIuMSA1Ni4zLjEgODQuM3ptLTI1NS4zIDQyLjd2NDIuMmMwIC44LjMgMS42LS4yIDIuMy0uNS43LTEuNS40LTIuMi41LTEuOS4zLTMuOS41LTUuOC43LTguNC43LTE2LjggMS40LTI1LjIgMS43LTguNS4zLTE3IC40LTI1LjUuMy03LjIgMC0xNC4zLS41LTIxLjMtMi02LTEuMy0xMS44LTMuMy0xNi45LTYuOS01LjEtMy42LTguNy04LjQtMTAuOS0xNC4yLTEuNy00LjQtMi41LTguOS0yLjktMTMuNS0uMy0zLjYtLjMtNy4yLjItMTAuOC44LTcuMiAzLjMtMTMuNyA4LjItMTkuMiAzLjUtMy45IDcuNy02LjYgMTIuNS04LjcgNS4xLTIuMiAxMC40LTMuNSAxNS44LTQuNCAxMC4xLTEuNiAyMC4zLTEuNyAzMC42LTEuNSA0LjQuMSA4LjguMyAxMy4yLjVoMS45Yy4zIDAgLjYtLjIuNi0uNiAwLS4yLjEtLjMuMS0uNSAwLTQuNi0uMS05LjMtLjgtMTMuOS0uMi0xLjQtLjctMi43LTEuMy00LTEuMS0yLjUtMi45LTQuMi01LjMtNS41LTIuNi0xLjMtNS4zLTItOC4xLTIuMy03LjgtMS0xNS43LTEuMS0yMy41LS43LTYuNC4zLTEyLjggMS4yLTE5LjIgMi4xLTQuOS43LTkuOCAxLjctMTQuNiAyLjUtLjQuMS0uOC4xLTEuMi4yLS42LjEtLjgtLjEtLjktLjh2LTE5LjFjMC0uNSAwLS45LjEtMS40IDAtLjMuMi0uNi42LS43LjMtLjEuNi0uMS45LS4yIDcuMi0xLjUgMTQuNC0yLjYgMjEuNi0zLjMgOC4zLS45IDE2LjYtMS4yIDI0LjktMS4xIDcuNi4xIDE1LjIuMyAyMi44IDEuNyA2LjIgMS4xIDEyLjIgMi45IDE3LjUgNi41IDUgMy40IDguNSA3LjkgMTAuOCAxMy40IDEuOCA0LjUgMi44IDkuMSAzLjIgMTQgLjMgMy40LjMgNi43LjMgMTAuMS4xIDEyLjIgMCAyNC40IDAgMzYuNnptMzg4LjgtMS41djQ1YzAgMS4xLS4yIDEuMy0xLjQgMS40LTQuNS40LTguOS45LTEzLjQgMS4zLTcuMS43LTE0LjMgMS0yMS40IDEuMi02LjkuMi0xMy44LjItMjAuNy4zLTQuNiAwLTkuMS0uMS0xMy43LS42LTYuNC0uNy0xMi44LTEuOC0xOC44LTQuMi02LjgtMi43LTEyLjQtNy0xNi4yLTEzLjQtMi4xLTMuNS0zLjUtNy40LTQuMy0xMS40LTEuNC03LjItMS43LTE0LjQtLjItMjEuNSAyLjEtMTAuNCA3LjktMTggMTcuMi0yMi45IDUuOC0zIDEyLTQuNyAxOC40LTUuNyAxMC4zLTEuNyAyMC43LTEuNyAzMS0xLjYgNC40LjEgOC44LjMgMTMuMi41aDEuNGMuNyAwIC45LS4yIDEtMXYtLjVjLS4xLTQuMS4xLTguMi0uNS0xMi4yLS4zLTIuMS0uOS00LjEtMS45LTYtMS4xLTIuMS0yLjgtMy42LTQuOS00LjYtMi42LTEuMy01LjMtMi04LjEtMi4zLTcuOC0xLTE1LjctMS4xLTIzLjUtLjctOC44LjUtMTcuNSAxLjgtMjYuMiAzLjMtMi42LjUtNS4zLjktNy45IDEuNC0uNC4xLS44LjEtMS4yLjEtLjQgMC0uNi0uMi0uNi0uNS0uMS0uNS0uMS0uOS0uMS0xLjRWMTQyYy4xLS45LjItMS4xIDEtMS4zIDIuNC0uNSA0LjgtMSA3LjItMS40IDcuMi0xLjIgMTQuNS0yLjEgMjEuNy0yLjcgNS41LS40IDExLS42IDE2LjUtLjUgMy43IDAgNy40LjEgMTEuMS4zIDYuMi4zIDEyLjQgMSAxOC40IDIuNSA0LjQgMS4xIDguNiAyLjggMTIuNSA1LjQgNSAzLjQgOC42IDggMTAuOSAxMy42IDIgNC44IDIuOSA5LjkgMy4yIDE1LjEuMSAyLjMuMSA0LjYuMSA2LjguMyAxMi4zLjIgMjQuNi4yIDM3ek04MTYuNSAxNjJjLS42LjItMS4yLS4xLTEuOC0uMi02LjgtMS4zLTEzLjYtMi40LTIwLjUtMy4xLTguNC0uOS0xNi44LTEuMi0yNS4yLS4xLTMuMi40LTYuMyAxLjEtOS4zIDIuNC0xLjkuOC0zLjcgMS44LTUuMSAzLjMtMi43IDIuOC0zLjcgNi4xLTIuOSA5LjkuNCAxLjcgMS4yIDMuMSAyLjQgNC4zIDEuMyAxLjQgMi45IDIuNCA0LjYgMy4yIDIuNCAxLjIgNC45IDIuMSA3LjUgMi44IDQuNSAxLjMgOSAyLjIgMTMuNSAzLjIgNS43IDEuMyAxMS41IDIuNSAxNy4xIDQuNCA1LjMgMS43IDEwLjQgMy45IDE1IDcuMiA2LjggNC44IDExLjEgMTEuMiAxMi41IDE5LjUgMS4yIDYuOS43IDEzLjYtMS42IDIwLjItMi41IDctNi45IDEyLjQtMTIuOSAxNi43LTQuMyAzLTkgNS4xLTE0IDYuNy01LjcgMS44LTExLjYgMi44LTE3LjYgMy4zLTcuMy42LTE0LjYuNS0yMS45LjEtNi40LS40LTEyLjctMS4yLTE5LTIuMS0zLjgtLjUtNy42LTEuMy0xMS40LTItMS4xLS4yLTEuMy0uNC0xLjMtMS40di0yMS4yYzAtLjEuMS0uMy4yLS42LjguMSAxLjYuMiAyLjQuNCA3LjQgMS42IDE0LjcgMy4xIDIyLjIgNC4yIDkuMyAxLjMgMTguNiAxLjcgMjcuOS4yIDQuMi0uNyA4LjMtMS43IDEyLjEtMy44IDEtLjUgMS45LTEuMiAyLjctMS44IDUuOS00LjYgNS43LTEyLjkuOC0xNy42LTIuMy0yLjEtNS0zLjUtNy45LTQuNi00LTEuNS04LjEtMi41LTEyLjMtMy4zLTUuOS0xLjItMTEuOS0yLjMtMTcuNy00LjEtNS42LTEuOC0xMS4yLTMuOC0xNi4yLTYuOS00LjYtMi45LTguNS02LjUtMTEuMi0xMS4yLTEuNy0zLTIuOC02LjMtMy40LTkuNy0uOS01LjQtLjctMTAuOC42LTE2LjEgMi4xLTguMyA2LjktMTQuNyAxNC4xLTE5LjMgNC45LTMuMiAxMC4yLTUuMiAxNS44LTYuNSA1LjQtMS4zIDExLTEuOSAxNi42LTIuMSA3LjctLjMgMTUuNC4xIDIzLjEuNyA1LjUuNSAxMC45IDEuMiAxNi40IDIgMS42LjIgMy4zLjUgNC45LjcuNS4xLjguNC45Ljl2MjBjLjIuNS4zLjktLjEgMS40eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMTk5LjcgMjAxLjZWMjQxYzAgMi43LjMgMi41LTIuNiAyLjktNi43LjktMTMuNSAxLjItMjAuMi45LTUuOC0uMi0xMS40LTEuNC0xNi42LTMuOC02LTIuOC0xMC42LTcuMi0xMy45LTEzLTIuNS00LjQtMy45LTkuMS00LjgtMTQtMS40LTcuOS0xLjUtMTUuOC0uMy0yMy43LjYtMy44IDEuNi03LjUgMy4xLTExLjEgMi43LTYuMyA2LjgtMTEuMyAxMi42LTE0LjggNC4yLTIuNiA4LjgtNC4xIDEzLjYtNSA0LjQtLjggOC45LTEuMSAxMy40LTEuMSA0LjggMCA5LjYuMyAxNC40LjYuMiAwIC41IDAgLjcuMS41LjEuNy40LjcuOHYyLjFjLS4xIDEzLjMtLjEgMjYuNS0uMSAzOS43em0tMjcxLjkgMS4ydjM5LjRjMCAzIC4zIDIuOC0zIDMuMS00LjMuMy04LjYuNi0xMi45LjctNi4zLjItMTIuNi0uNS0xOC41LTIuOC05LjgtMy43LTE2LjgtMTAuNS0yMC45LTIwLjItMi41LTUuOC0zLjUtMTEuOS0zLjctMTguMS0uMi03IC4zLTE0IDIuMi0yMC44IDEuNy02LjIgNC42LTExLjggOS4zLTE2LjQgMy40LTMuMiA3LjMtNS40IDExLjctNi44IDUuNi0xLjkgMTEuMy0yLjQgMTcuMi0yLjQgNS44IDAgMTEuNi44IDE3LjQgMS41IDEgLjEgMS4yLjMgMS4yIDEuNHY0MS40ek02NzQgMjI1LjV2MTguNmMwIDEuNSAwIDEuNS0xLjYgMS43LTkuOS45LTE5LjcgMS4yLTI5LjYuOC00LS4yLTgtLjgtMTEuOC0xLjgtMi4zLS42LTQuNC0xLjUtNi41LTIuOC00LjMtMi42LTYuOS02LjMtOC0xMS4xLS45LTMuOC0uOS03LjcgMC0xMS40IDEuMy01LjUgNC45LTkuMiAxMC4xLTExLjMgMy42LTEuNiA3LjUtMi40IDExLjQtMi45IDUuMi0uNiAxMC41LTEgMTUuNy0uOSA2LjMuMSAxMi41LjQgMTguOC43IDEuNS4xIDEuNS4xIDEuNSAxLjd2MTguN3ptMzg4LjktLjFWMjQ1YzAgLjUtLjMuNy0uNy44bC0zIC4zYy04LjkuNi0xNy45IDEtMjYuOC42LTQuMi0uMi04LjQtLjctMTIuNS0xLjktMy4yLS45LTYuMi0yLjMtOC44LTQuNC0zLjItMi43LTUuMS02LjItNS44LTEwLjItLjYtMy4yLS42LTYuNCAwLTkuNiAxLjEtNi4xIDQuOC0xMC4xIDEwLjQtMTIuNCAzLjYtMS42IDcuNS0yLjQgMTEuNC0yLjggNC45LS42IDkuOS0xIDE0LjgtLjkgNi42LjEgMTMuMi40IDE5LjguNy4yIDAgLjUgMCAuNy4xLjQuMS43LjMuNy44djEuOWMtLjIgNS42LS4yIDExLjUtLjIgMTcuNHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDAyLjMgMGgtOTcuNnYuNWMtLjggMS0xIDIuMy0xLjQgMy41LS4zIDEtMS4xIDEuOS0xIDMuMS0uNS40LS41LjktLjUgMS40LS40LjItLjQuNi0uNCAxLS41LjMtLjUuOS0uNSAxLjQtLjUuNC0uNS45LS41IDEuNC0uNS40LS41LjktLjUgMS40LS40LjItLjQuNi0uNCAxLS41LjMtLjUuOC0uNSAxLjMtLjEuMi0uMy4zLS40LjYtMi40IDYuNy00LjkgMTMuNC03LjMgMjAuMS0xLjYgNC40LTMuMiA4LjktNC44IDEzLjMtMi4xIDUuNy00LjIgMTEuMy02LjMgMTdsLTQuNSAxMi42Yy0yLjMgNi4zLTQuNiAxMi43LTYuOSAxOS0yLjEgNS43LTQuMiAxMS4zLTYuMyAxNy0yLjEgNS44LTQuMiAxMS42LTYuMyAxNy41LS4xLjMtLjEuNi0uMS45LS41LjQtLjUuOS0uNSAxLjQtLjQuMi0uNC42LS40IDEgMCAuMS0uMS4zIDAgLjQtLjMuMi0uNC42LS40IDEtLjUuMy0uNS45LS41IDEuNC0uMS4xLS4yLjItLjMuNC0xLjMgMy41LTIuNiA3LjEtMy45IDEwLjYtMS41IDQuMS0zIDguMy00LjUgMTIuNC0uMi40LS4zLjktLjggMS4yLS4zLS42LS42LTEuMy0uOS0xLjktLjUtMS44LS45LTMuNS0xLjktNS4xLS41LTIuMy0xLjQtNC41LTIuNC02LjYtLjYtMi4xLTEuMi00LjMtMi4zLTYuMy0uMi0xLjUtLjktMi44LTEuNC00LjItNC4xLTExLjUtOC4zLTIzLTEyLjUtMzQuNC0uNy0yLjEtMS40LTQuMi0yLjMtNi4xLTIuNS01LjUtNi42LTktMTIuNS0xMC40LTIuMi0uNS00LjQtLjMtNi42LS4zLTEuNCAwLTIuOC0uMS00LjItLjFoLTkxLjZjLTEuMiAwLTIuMy4yLTMuNC45LS41LjEtMS4xIDAtMS40LjUtLjMuMS0uNi4xLS45LjMtNC41IDIuMi03LjcgNS43LTkuNCAxMC40LTEuMiAzLjMtMi4zIDYuNy0zLjUgMTAtMi44IDcuNy01LjcgMTUuNS04LjUgMjMuMi0yLjYgNy01LjEgMTQtNy43IDIxLTEuNyA0LjgtMy41IDkuNi01LjMgMTQuNC0xLjcgNC42LTMuMyA5LjMtNSAxNC0yLjMgNi4zLTQuNiAxMi41LTYuOSAxOC44LTEuMyAzLjctMi43IDcuNC00IDExLjEtMi4yIDYtNC40IDEyLjEtNi42IDE4LjEtMSAyLjctMS45IDUuMy0yLjkgOC0yLjEgNS43LTQuMiAxMS41LTYuMyAxNy4yLTEuNSA0LjEtMi45IDguMS00LjQgMTIuMi0yLjggNy42LTUuNiAxNS4yLTguMyAyMi43LS41IDEuNS0xIDMtMS40IDQuNSAwIC4xLS4xLjMgMCAuNC0uMy4zLS41LjYtLjUgMS0uMS4yLS4zLjQtLjQuNi0xLjYgNC4zLTMuMSA4LjctNC43IDEzbC0yLjEgNmMtMi4yIDUuOS00LjMgMTEuOC02LjUgMTcuNi0xLjggNS0zLjcgMTAtNS41IDE1LS4zLjgtLjcgMS42LS42IDIuNXYuNWg5Ny4xdi0uNGMuMy0uMy41LS42LjQtMSAxLTIuOCAyLjEtNS42IDMuMS04LjQgMi4zLTYuMyA0LjYtMTIuNSA2LjktMTguOCAxLjctNC42IDMuMy05LjIgNS0xMy43IDIuNy03LjQgNS40LTE0LjcgOC4xLTIyLjEgMi4yLTYgNC4zLTEyIDYuNS0xNy45IDIuOC03LjYgNS42LTE1LjIgOC4zLTIyLjggMy41LTkuNyA3LjEtMTkuNSAxMC42LTI5LjIgMy40LTkuMiA2LjctMTguNCAxMC4xLTI3LjYuMi0uNy40LTEuNC45LTEuOS4yLjIuMy40LjUuNi4zIDEuOCAxLjEgMy41IDEuOSA1LjIuNCAxLjggMS4xIDMuNSAxLjkgNS4yLjQgMS44IDEgMy42IDEuOSA1LjIuMiAxLjMuNSAyLjYgMS40IDMuOC4zIDEuOCAxIDMuNSAxLjkgNS4yLjMgMS44IDEuMSAzLjUgMS45IDUuMi40IDEuOCAxLjEgMy41IDEuOSA1LjIuNCAxLjggMSAzLjUgMS45IDUuMi4yIDEuOSAxLjEgMy41IDEuOSA1LjIuNCAxLjggMS4xIDMuNSAxLjkgNS4yLjQgMS44IDEgMy41IDEuOSA1LjIuMyAxLjggMSAzLjUgMS45IDUuMi0uMSAxLjEuNiAxLjkuOSAyLjkgMS4yIDMuNSAzLjYgNiA2LjUgOC4xIDMgMi4xIDYuNCAyLjkgMTAgMy4xIDIgLjEgMy45IDAgNS45IDBoOTIuMmMuNCAwIC44LS4xIDEuMS0uNCAxLjIgMCAyLjMtLjMgMy40LS43IDEuNy0uNiAzLjQtMS4zIDQuNi0yLjYgMi4yLTEuMyAzLjctMy4zIDUuMS01LjUuNy0xLjEgMS4yLTIuNCAxLjctMy42IDEuNS00LjEgMy04LjIgNC41LTEyLjQgMi4xLTUuOSA0LjMtMTEuOCA2LjQtMTcuNyAyLjctNy41IDUuNS0xNSA4LjItMjIuNSAyLjMtNi4yIDQuNS0xMi40IDYuOC0xOC41LjUtMS40LjktMi44IDEuNC00LjIuMi0uNC41LS44LjYtMS4yIDIuNy03LjUgNS41LTE1IDguMi0yMi42LjItLjcuNi0xLjMuNi0yIC4yLS41LjYtLjkuNy0xLjUgMS4zLTMuNSAyLjYtNy4xIDMuOS0xMC42IDIuNS03IDUtMTQgNy42LTIxIDEuOS01LjIgMy44LTEwLjUgNS43LTE1LjcgMS42LTQuNCAzLjItOC45IDQuOC0xMy4zIDIuNi03LjIgNS4zLTE0LjQgNy45LTIxLjYgMi45LTcuOSA1LjctMTUuOCA4LjYtMjMuNyAzLjctMTAuMiA3LjQtMjAuMyAxMS4xLTMwLjUgMS4zLTMuNSAyLjYtNi45IDMuOC0xMC40LjQtLjkuMy0xLjUuMy0yem0tOTguMSAyNTguOXptLTU2LjYtOTguNnYtLjJsLjEuMS0uMS4xem0tMzIuMyA4NC4xYy4xIDAgLjEtLjEuMi0uMSAwIC4xLS4xLjItLjEuMyAwLS4xIDAtLjItLjEtLjJ6bTExLjQtMzEuMWMuMSAwIC4xLS4xLjItLjEgMCAuMSAwIC4yLS4xLjQgMC0uMi0uMS0uMi0uMS0uM3ptLTYwLjQtNTAuOWMwLS4xLjEtLjIuMS0uMnYuMWwtLjEuMXptMy45LTEwLjdjMCAuMSAwIC4xIDAgMCAwIC4xIDAgLjEtLjEuMSAwIDAgLjEgMCAuMS0uMXptNjcuNSAzMS44YzAgLjEgMCAuMi0uMS4zIDAtLjEtLjEtLjItLjEtLjNoLjJ6bS01LjYgMTUuNWMwIC4xLS4xLjItLjEuNCAwLS4xLS4xLS4yLS4xLS4zIDAgMCAuMSAwIC4yLS4xem0xMDcuMi0yOS41bC0uMi4yYy4xIDAgLjEtLjEuMi0uMnptLTk3LjQgNi41czAtLjEgMCAwYzAtLjEgMC0uMSAwIDB6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE1NyAxODhsNDAuOC0xMTcuMWgxNmwtNTIgMTQ2LjV6bTM5LjcgNjkuMmw0MC44LTExNy4xaDE2bC01MiAxNDYuNXoiLz48L3N2Zz4="

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3694543d-reuters.svg";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNzQzcHgiIGhlaWdodD0iMjIyLjJweCIgdmlld0JveD0iMCAwIDE3NDMgMjIyLjIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE3NDMgMjIyLjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGZpbGw9IiNFRDFFMjUiIGQ9Ik0xMjM3LDAuM2M4LjUsMS40LDE3LjEsMi4yLDI1LjQsNC4zYzM0LjMsOC42LDUxLjcsNTAuNiwzMy41LDgwLjNjLTQuNCw3LjItMTAuNSwxMi40LTE3LjcsMTYuNQoJCQljLTMuMiwxLjgtNi40LDMuNS0xMC4zLDUuNWMyLDAuOCwzLjQsMS42LDQuOSwyYzIzLjcsNi45LDM0LjIsMjQuNCwzNS45LDQ3LjZjMi40LDMxLjktMTcuNyw1NS43LTQ5LjYsNTkuNgoJCQljLTkuOSwxLjItMTkuOSwxLjktMjkuOSwxLjljLTMxLjcsMC4yLTYzLjMsMC4xLTk1LDAuMWMtMS44LDAtMy42LDAtNS44LDBjMC0xNC43LDAtMjkuMSwwLTQzLjhjNi4zLDAsMTIuNCwwLDE4LjksMAoJCQljMC00My40LDAtODYuNCwwLTEyOS45Yy02LjQsMC0xMi41LDAtMTkuMywwYzAtMTUsMC0yOS42LDAtNDQuMkMxMTY0LjMsMC4zLDEyMDAuNywwLjMsMTIzNywwLjN6IE0xMjA0LjcsMTI5LjEKCQkJYzAsMTQuOS0wLjEsMjguNSwwLjEsNDIuMmMwLDAuOSwyLDIuNywzLDIuN2M4LjMsMCwxNi43LDAsMjQuOS0wLjdjNi4xLTAuNSwxMS43LTIuOCwxNS4xLTguNGM4LTEzLjIsMC40LTMxLjYtMTQuNy0zNC4yCgkJCUMxMjI0LjEsMTI5LjEsMTIxNC43LDEyOS42LDEyMDQuNywxMjkuMXogTTEyMDQuOSw4OC42YzguNy0wLjUsMTYuOS0wLjIsMjQuOC0xLjZjOS42LTEuNywxNi4yLTExLDE2LjMtMjEuMgoJCQljMC0xMC4yLTUuOS0xOS43LTE0LjctMjEuM2MtOC41LTEuNS0xNy40LTEuNC0yNi40LTJDMTIwNC45LDU4LjEsMTIwNC45LDcyLjcsMTIwNC45LDg4LjZ6Ii8+CgkJPHBhdGggZD0iTTIwOCwwYzAsMTQuNiwwLDI5LjIsMCw0NC40Yy0zLjUsMC02LjUsMC40LTkuNC0wLjFjLTQuMS0wLjgtNS41LDAuOS02LjYsNC41Yy0xMy45LDQ1LTI4LDg5LjktNDIsMTM0LjgKCQkJYy0zLjIsMTAuMy02LjMsMjAuNy05LjgsMzAuOWMtMC41LDEuNC0yLjUsMy4zLTMuOCwzLjNjLTIyLjUsMC4yLTQ1LDAuMS02Ny44LDAuMWMtMC41LTEuNC0xLjEtMi43LTEuNi00LjEKCQkJYy0xNy40LTU1LTM0LjgtMTEwLjEtNTItMTY1LjFjLTEuMi0zLjctMi43LTUuMS02LjctNC41QzUuNyw0NC43LDIuOCw0NC4xLDAsNDRDMCwyOS4zLDAsMTQuNywwLDBjMzEuMywwLDYyLjcsMCw5NCwwCgkJCWMwLDE0LjYsMCwyOS4yLDAsNDQuM2MtNi42LDAtMTIuNiwwLTE5LjEsMGMxMC41LDQxLjEsMjAuOSw4MS43LDMxLjMsMTIyLjNjMC4zLDAsMC42LDAuMSwxLDAuMWMxMS4yLTQwLjYsMjIuNC04MS4zLDMzLjgtMTIyLjUKCQkJYy02LjYsMC0xMi41LDAtMTguOSwwYzAtMTUsMC0yOS42LDAtNDQuMkMxNTAuNywwLDE3OS4zLDAsMjA4LDB6Ii8+CgkJPHBhdGggZmlsbD0iI0VEMUUyNSIgZD0iTTE3NDMsMTAzLjNjLTcuNS0wLjEtMTUtMC40LTIyLjQtMC4yYy0xLjEsMC0zLjIsMS45LTMuMiwzYy0wLjIsMTguOC0wLjYsMzcuNywwLjEsNTYuNQoJCQljMC40LDEyLjMsNy45LDE3LjQsMjAsMTUuMmMxLTAuMiwyLTAuMiwzLjItMC4zYzAuMiwxLjIsMC41LDIuMywwLjUsMy40YzAsMTAuOCwwLDIxLjcsMC4xLDMyLjVjMCwyLjQtMC4zLDQuMi0zLjEsNC43CgkJCWMtMTYuNSwyLjctMzIuOSw1LjEtNDkuNiwxLjJjLTE4LjctNC40LTI3LjctMTQuMy0yOC4xLTMzLjRjLTAuNS0yNS41LTAuMi01MS0wLjMtNzYuNWMwLTIsMC0zLjksMC02LjRjLTIuNSwwLTQuNSwwLTYuNCwwCgkJCWMtOC4zLTAuMS03LjMsMC45LTcuNC03LjZjMC0xMi4xLDAtMjQuMiwwLTM2LjljNi4zLDAsMTIsMCwxOC40LDBjMC0xMC4xLTAuMS0xOS44LDAtMjkuNGMwLjEtMTAuNi0xLjUtOC4yLDguNy0xMC43CgkJCWMxNC4yLTMuNCwyOC41LTYuNSw0My41LTEwYzAsMTYuNiwwLDMzLDAsNDkuOWM5LjEsMCwxNy42LDAsMjYsMEMxNzQzLDczLjMsMTc0Myw4OC4zLDE3NDMsMTAzLjN6Ii8+CgkJPHBhdGggZD0iTTM1Niw1OC4zYzIxLDAsNDEuOSwwLDYzLjIsMGMwLjYsNy40LDEuMiwxNC43LDEuOSwyMi4yYzMuOC00LjQsNy04LjksMTEtMTIuNGMxNy45LTE1LjQsMzguNS0xOC40LDYwLjItMTAuNAoJCQljMTYuNCw2LjEsMjMuNCwxOS42LDIzLjcsMzYuNWMwLjQsMjQuMSwwLjIsNDguMywwLjIsNzIuNWMwLDIsMCw0LDAsNi42YzQuMywwLjIsOC40LDAuNCwxMi45LDAuNmMwLDE0LjUsMCwyOC45LDAsNDMuNwoJCQljLTIzLjIsMC00Ni42LDAtNzAuOCwwYzAtMS44LDAtMy43LDAtNS42YzAtMzAuOCwwLTYxLjYsMC05Mi41YzAtOC40LTIuOS0xMi43LTkuMy0xNC44Yy02LjctMi4yLTEzLjYsMC0xOC4yLDYKCQkJYy0xLjEsMS40LTEuOSwzLjEtMi43LDQuOGMtMC41LDEuMi0xLDIuNi0xLDMuOGMtMC4xLDE3LjksMCwzNS44LDAsNTQuMmMyLjgsMCw2LjEsMCw5LjcsMGMwLDE0LjksMCwyOS4zLDAsNDQuMQoJCQljLTI2LjcsMC01My42LDAtODAuOCwwYzAtMTQuNSwwLTI4LjksMC00My45YzQuMSwwLDguMSwwLDEyLjMsMGMwLTIzLjgsMC00NywwLTcwLjhjLTQsMC04LDAtMTIuMiwwQzM1Niw4Ny43LDM1Niw3My4yLDM1Niw1OC4zegoJCQkiLz4KCQk8cGF0aCBkPSJNNzQxLjksMTAyLjRjLTMuOCwwLTcuMSwwLTEwLjgsMGMwLTE0LjcsMC0yOS4zLDAtNDRjMC44LTAuMSwxLjYtMC4zLDIuNC0wLjNjMjIsMCw0My45LDAsNjYuNiwwYzAsMzguNiwwLDc3LDAsMTE1LjYKCQkJYzQuNiwwLDguNiwwLDEyLjksMGMwLDE0LjcsMCwyOS4xLDAsNDMuOWMtMjEuNiwwLTQzLjMsMC02NS41LDBjMC01LjIsMC0xMC4zLDAtMTYuNWMtMi45LDMuMS00LjksNS40LTcuMiw3LjUKCQkJYy0xNS45LDE0LjEtNDMuOSwxNy45LTYyLjksOC4zYy0xNC41LTcuMy0yMS43LTE5LjctMjIuMy0zNS40Yy0wLjktMjQuMy0wLjctNDguNi0xLTcyLjljMC0yLDAtMy45LDAtNi4zYy00LjUsMC04LjQsMC0xMi43LDAKCQkJYzAtMTQuOCwwLTI5LjIsMC00NGMyMy4zLDAsNDYuNSwwLDcwLjYsMGMwLDEuOCwwLDMuNywwLDUuNmMwLDI5LjMtMC4xLDU4LjYsMC4xLDg4YzAsNC4xLDAuNyw4LjMsMiwxMi4yYzIsNS45LDcsOC45LDEzLjIsOC43CgkJCWM2LjEtMC4yLDEwLjUtMy4xLDEyLjYtOC44YzAuOC0yLjIsMS43LTQuNSwxLjctNi43Qzc0MiwxMzkuMiw3NDEuOSwxMjEsNzQxLjksMTAyLjR6Ii8+CgkJPHBhdGggZmlsbD0iI0VEMUUyNSIgZD0iTTE1NjkuMiwxMTkuMmMwLTUuNCwwLjMtMTAtMC4xLTE0LjZjLTAuNi04LjUtNi4xLTE0LjEtMTMuOC0xNC4zYy03LjctMC4yLTE0LjEsNS41LTE1LjMsMTMuNwoJCQljLTAuMywxLjgtMC4zLDMuNi0wLjUsNS44Yy0xNy45LDAtMzUuNiwwLTUzLjMsMGMtMS45LTIwLjIsOC42LTM4LjcsMjguMi00Ny4yYzI4LjUtMTIuMyw1Ny4yLTExLjIsODUuMSwyLjIKCQkJYzE3LjEsOC4yLDI1LjksMjIuNywyNi4yLDQxLjdjMC40LDIwLjMsMC4yLDQwLjcsMC4zLDYxYzAsMiwwLDQsMCw2LjZjNC40LDAsOC41LDAsMTIuOCwwYzAsMTUsMCwyOS4yLDAsNDMuOAoJCQljLTIyLDAtNDMuOSwwLTY2LjIsMGMtMC41LTUuNC0xLTExLTEuNi0xNy40Yy0xLjUsMS43LTIuNSwyLjctMy40LDMuOGMtMTcuMywyMS4zLTUwLjMsMjEuMi02Ny4yLDExLjMKCQkJYy0xMy40LTcuOS0xOS4yLTIwLjUtMjAuMS0zNS40Yy0yLTMyLjYsMTUuMS01My43LDQ4LjEtNTguN2MxMS42LTEuOCwyMy41LTEuNiwzNS4zLTIuM0MxNTY1LjMsMTE5LjEsMTU2Ni45LDExOS4yLDE1NjkuMiwxMTkuMnoKCQkJIE0xNTY5LjksMTQ3LjRjLTUuNCwwLTkuNy0wLjYtMTMuOSwwLjFjLTEyLjksMi4xLTE5LjUsMTEuMS0xOC4xLDI0LjFjMS4yLDEwLjcsMTAuNCwxNi4xLDIwLjMsMTEuOWM1LjMtMi4yLDguOS02LjMsOS43LTExLjgKCQkJQzE1NjkuMSwxNjMuOCwxNTY5LjMsMTU1LjcsMTU2OS45LDE0Ny40eiIvPgoJCTxwYXRoIGQ9Ik0zNDUuNywxNDljLTMzLjcsMC02NS44LDAtOTguNSwwYy0wLjIsOS4xLDAuMSwxNy42LDQuNSwyNS40YzMuNiw2LjUsOS42LDguOSwxNi44LDguNmM3LjItMC4zLDEyLjktMy4zLDE1LjktMTAuMQoJCQljMS4zLTMsMi4xLTYuMiwzLjMtOS42YzE3LjksMCwzNiwwLDU0LjYsMGMtMi4yLDE3LjUtOC45LDMyLjMtMjIuOSw0My4zYy05LjksNy44LTIxLjQsMTItMzMuOCwxMy44Yy0xNi43LDIuNS0zMy4yLDEuOC00OS40LTMuNAoJCQljLTIxLjctNy0zNi4zLTIxLjQtNDMtNDNjLTcuMy0yMy4zLTcuNi00NywwLjEtNzAuM2M5LjQtMjguNywzMC4xLTQ0LjIsNTkuNS00OC42YzEzLjItMiwyNi4zLTEuMSwzOS4xLDIuNAoJCQljMjkuOSw4LjEsNDUuOSwyOC43LDUwLjgsNTguNEMzNDQuNSwxMjYuNSwzNDQuNywxMzcuNCwzNDUuNywxNDl6IE0yNDguOCwxMTguMmMxMi45LDAsMjUuNSwwLDM4LjIsMGMwLjUtOC41LTAuNy0xNi4xLTguMi0yMC45CgkJCWMtNi44LTQuMy0xNC4zLTQuNy0yMS4yLTAuNEMyNDkuOSwxMDEuOCwyNDguOSwxMDkuNywyNDguOCwxMTguMnoiLz4KCQk8cGF0aCBkPSJNMTExNCwxNDguOWMtMzMuNiwwLTY1LjcsMC05OC4yLDBjLTAuMiw5LTAuMiwxNy42LDQuMywyNS40YzMuOCw2LjcsOS45LDkuMSwxNy4zLDguN2M3LjQtMC40LDEzLjEtMy44LDE1LjktMTAuOQoJCQljMS4xLTIuOCwxLjgtNS43LDIuOC04LjhjMTguMiwwLDM2LjQsMCw1NC43LDBjLTMuNSwzMi4xLTI2LDUzLjktNTkuNCw1Ny42Yy0xNS42LDEuNy0zMC45LDEtNDYtMy43Yy0yMi4zLTctMzcuMi0yMS43LTQ0LTQ0CgkJCWMtNi45LTIzLTcuMi00Ni4zLDAuMy02OS4zYzkuNS0yOC45LDMwLjMtNDQuNSw1OS45LTQ4LjhjMTMuOS0yLDI3LjYtMC45LDQxLDMuMWMyNy41LDguMyw0MywyNy42LDQ4LjEsNTUuMgoJCQlDMTExMi44LDEyNC44LDExMTIuOSwxMzYuNSwxMTE0LDE0OC45eiBNMTAxNy42LDExOC4xYzEyLjYsMCwyNS4zLDAsMzgsMGMwLjEtMTYtNy43LTI0LjktMjAuNi0yMy45CgkJCUMxMDIzLjEsOTUuMSwxMDE1LjgsMTA1LjIsMTAxNy42LDExOC4xeiIvPgoJCTxwYXRoIGZpbGw9IiNFRDFFMjUiIGQ9Ik0xNDc1LjYsMTQ5LjJjLTMzLjcsMC02NS44LDAtOTguNSwwYzAsOS43LDAuMSwxOC45LDUuNiwyN2M0LjIsNi4yLDEwLjYsNy43LDE3LjYsNwoJCQljNi44LTAuNywxMS45LTQuMSwxNC42LTEwLjVjMS4yLTIuNywxLjgtNS43LDIuOC05YzE3LjgsMCwzNS44LDAsNTQuNCwwYy0yLjIsMTcuNS04LjksMzIuNS0yMy4zLDQzLjMKCQkJYy0xNywxMi44LTM2LjgsMTUuOC01Ny4zLDE0LjRjLTguNC0wLjUtMTYuOS0yLTI1LTQuNWMtMjEuNC02LjUtMzYtMjAuNi00Mi44LTQxLjljLTgtMjUtOC4yLTUwLjIsMS4xLTc0LjkKCQkJYzEwLjMtMjcuMSwzMS4xLTQxLDU5LjItNDQuOGMxMy43LTEuOCwyNy4zLTAuNyw0MC41LDMuNGMyOC4yLDguNyw0My4yLDI4LjgsNDcuOSw1N0MxNDc0LjUsMTI2LjUsMTQ3NC43LDEzNy41LDE0NzUuNiwxNDkuMnoKCQkJIE0xNDE3LjUsMTE4LjdjMC4xLTktMC45LTE3LjItOS41LTIxLjhjLTcuMy0zLjktMTQuOS00LTIxLjYsMS4yYy02LjYsNS4xLTcuOCwxMi41LTcuMywyMC42CgkJCUMxMzkyLjIsMTE4LjcsMTQwNC43LDExOC43LDE0MTcuNSwxMTguN3oiLz4KCQk8cGF0aCBkPSJNNTM1LjYsNThjNi4xLDAsMTEuOCwwLDE4LDBjMC0xMC42LDAuNC0yMC45LTAuMS0zMS4yYy0wLjMtNS40LDEuNS03LjQsNi44LTguNWMxNS4yLTMuMSwzMC4yLTYuNyw0Ni0xMC4zCgkJCWMwLDE2LjcsMCwzMy4xLDAsNTBjOC45LDAsMTcuMSwwLDI1LjYsMGMwLDE1LjEsMCwyOS43LDAsNDQuN2MtOC4zLDAtMTYuNCwwLTI1LDBjLTAuMiwxLjgtMC40LDMuMy0wLjQsNC43YzAsMTcuMiwwLDM0LjMsMCw1MS41CgkJCWMwLDEuOCwwLjIsMy43LDAuNCw1LjVjMS4zLDkuOCw4LjIsMTQuOSwxOCwxMy4zYzEuNi0wLjMsMy4yLTAuNiw1LjYtMWMwLDkuNSwwLDE4LjYsMCwyNy43YzAsMTIuOSwwLDEyLjktMTIuNywxNC45CgkJCWMtMTMuNiwyLjItMjcuMSwyLjktNDAuNy0wLjNjLTE5LjEtNC42LTI3LjgtMTUuNS0yNy45LTM1LjNjMC0yNi43LDAtNTMuMywwLTgwLjdjLTQuNiwwLTksMC0xMy43LDAKCQkJQzUzNS42LDg3LjcsNTM1LjYsNzMuMiw1MzUuNiw1OHoiLz4KCQk8cGF0aCBkPSJNODI2LjIsMjE3LjZjMC0xNC43LDAtMjksMC00My45YzQuMiwwLDguMywwLDEyLjcsMGMwLTIzLjksMC00Ny4xLDAtNzAuOWMtNC4yLDAtOC4zLDAtMTIuNiwwYzAtMTUuMSwwLTI5LjcsMC00NC41CgkJCWMyMC42LDAsNDEsMCw2Mi4xLDBjMC42LDgsMS4yLDE2LDEuOSwyNS4zYzEtMi4yLDEuNS0zLjMsMi00LjRjNS4xLTEyLjksMTQuNC0yMC43LDI4LjMtMjIuMmM2LjctMC43LDEzLjYtMC4xLDIwLjMsMC4zCgkJCWMxLjIsMC4xLDMuNCwyLDMuNCwzLjFjMC4yLDE1LjgsMCwzMS42LDAsNDcuNWMwLDAuMy0wLjMsMC42LTAuNiwxLjFjLTcuNiwwLTE1LjUtMS0yMy4xLDAuMmMtMTYuMiwyLjYtMjMuOCwxMi0yNC41LDI4LjUKCQkJYy0wLjIsNS44LTAuMiwxMS43LTAuMywxNy41YzAsNS44LDAsMTEuNiwwLDE4LjJjNS43LDAsMTEuNywwLDE4LDBjMCwxNS4yLDAsMjkuNiwwLDQ0LjNDODg0LjcsMjE3LjYsODU1LjcsMjE3LjYsODI2LjIsMjE3LjZ6IgoJCQkvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tokens = __webpack_require__(63);

Object.defineProperty(exports, 'Tokens', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tokens).default;
  }
});

var _Transfer = __webpack_require__(65);

Object.defineProperty(exports, 'Transfer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Transfer).default;
  }
});

var _Customize = __webpack_require__(68);

Object.defineProperty(exports, 'Customize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Customize).default;
  }
});

var _Vote = __webpack_require__(73);

Object.defineProperty(exports, 'Vote', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vote).default;
  }
});

var _Finance = __webpack_require__(76);

Object.defineProperty(exports, 'Finance', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Finance).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n\n  h1 {\n    font-size: 25px;\n    font-weight: 400;\n    margin-bottom: 50px;\n  }\n  img {\n    max-width: calc(100% - 30px);\n    margin-bottom: -5px;\n  }\n  ', ';\n'], ['\n  text-align: center;\n\n  h1 {\n    font-size: 25px;\n    font-weight: 400;\n    margin-bottom: 50px;\n  }\n  img {\n    max-width: calc(100% - 30px);\n    margin-bottom: -5px;\n  }\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _OverlapBackground = __webpack_require__(5);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _tokens = __webpack_require__(64);

var _tokens2 = _interopRequireDefault(_tokens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, medium('\n    font-size: 37px;\n    img {\n      max-width: 750px;\n    }\n  '));

var Tokens = function Tokens() {
  return _react2.default.createElement(
    _OverlapBackground2.default,
    null,
    _react2.default.createElement(
      Main,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(
            _ui.Text,
            { color: _ui.theme.gradientText, size: 'auto' },
            'Managing your organization has never been easier'
          )
        )
      ),
      _react2.default.createElement('img', { src: _tokens2.default, alt: '' })
    )
  );
};

exports.default = Tokens;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/e9877bf2-tokens.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SideBySide = __webpack_require__(15);

var _SideBySide2 = _interopRequireDefault(_SideBySide);

var _transfer = __webpack_require__(66);

var _transfer2 = _interopRequireDefault(_transfer);

var _raise = __webpack_require__(67);

var _raise2 = _interopRequireDefault(_raise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transfer = function Transfer() {
  return _react2.default.createElement(_SideBySide2.default, {
    items: [{
      title: 'Transfer tokens',
      subtitle: 'Tokens represent your stake in the organization',
      textContent: '\n          Your organization is in control of its funds. Transfer and assign\n          them according to your personal needs without artificial limitations\n        ',
      image: _transfer2.default
    }, {
      title: 'Fundraising',
      subtitle: 'Grasp the potential of a new form of crowdfunding',
      textContent: '\n          Utilize the power of the crowd for funding and raise funds globally, in private\n          or publicly, without relying on banks or financial gatekeepers\n        ',
      image: _raise2.default
    }]
  });
};

exports.default = Transfer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fe23e890-transfer.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0b72a5f0-raise.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-image: linear-gradient(39deg, #0b0b0a, #464f51);\n'], ['\n  background-image: linear-gradient(39deg, #0b0b0a, #464f51);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 15px;\n  h1 {\n    font-size: 25px;\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  .screen {\n    max-width: 750px;\n    width: 100%;\n  }\n  .columns {\n    padding-top: 10px;\n    max-width: 420px;\n  }\n  .item {\n    margin-top: 40px;\n  }\n  .item p {\n    font-size: 16px;\n    color: ', ';\n    margin-top: 25px;\n  }\n\n  ', ';\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 15px;\n  h1 {\n    font-size: 25px;\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  .screen {\n    max-width: 750px;\n    width: 100%;\n  }\n  .columns {\n    padding-top: 10px;\n    max-width: 420px;\n  }\n  .item {\n    margin-top: 40px;\n  }\n  .item p {\n    font-size: 16px;\n    color: ', ';\n    margin-top: 25px;\n  }\n\n  ', ';\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _permission = __webpack_require__(69);

var _permission2 = _interopRequireDefault(_permission);

var _settings = __webpack_require__(70);

var _settings2 = _interopRequireDefault(_settings);

var _path = __webpack_require__(71);

var _path2 = _interopRequireDefault(_path);

var _code = __webpack_require__(72);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject);

var Content = _styledComponents2.default.div(_templateObject2, _ui.themeDark.textSecondary, medium('\n    padding-top: 120px;\n    padding-bottom: 90px;\n    h1 {\n      font-size: 37px;\n    }\n    .item p {\n      font-size: 18px;\n    }\n    .columns {\n      display: flex;\n      flex-wrap: nowrap;\n      align-items: flex-start;\n      max-width: none;\n      padding-top: 70px;\n    }\n    .item {\n      width: 33%;\n      text-align: left;\n      margin-left: 30px;\n    }\n    .item:first-child {\n      margin-left: 0;\n    }\n  '), large('\n    padding-bottom: 120px;\n    .columns {\n      padding-top: 60px;\n    }\n    .item {\n      margin-left: 80px;\n    }\n  '));

var Customize = function Customize() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(
            _ui.Text,
            { color: _ui.themeDark.textPrimary },
            'It\'s your organization. Make it work for you'
          )
        )
      ),
      _react2.default.createElement('img', { className: 'screen', src: _permission2.default, alt: '' }),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _settings2.default, alt: '', width: '32', height: '32' }),
          _react2.default.createElement(
            'p',
            null,
            'Aragon organizations are powered by AragonOS and fully customizable to fit your needs'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _path2.default, alt: '', width: '32', height: '32' }),
          _react2.default.createElement(
            'p',
            null,
            'You set the rules of how and when actions are prompted and enacted'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _code2.default, alt: '', width: '32', height: '32' }),
          _react2.default.createElement(
            'p',
            null,
            'Code is open source. As a developer you can modify it to match your specific use case'
          )
        )
      )
    )
  );
};

exports.default = Customize;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/eb67d9f2-permission.png";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgMjQuNXYtMS42MjVoMTMuODEzVjI0LjVINXptMTguNjg4IDB2LTEuNjI1aDQuMDYyVjI0LjVoLTQuMDYzem0tLjgxMyAxLjYyNWMwIC40NzQtLjE1Mi44NjMtLjQ1NyAxLjE2OC0uMzA1LjMwNS0uNjk0LjQ1Ny0xLjE2OC40NTdzLS44NjMtLjE1Mi0xLjE2OC0uNDU3Yy0uMzA1LS4zMDUtLjQ1Ny0uNjk0LS40NTctMS4xNjhWMjEuMjVjMC0uNDc0LjE1Mi0uODYzLjQ1Ny0xLjE2OC4zMDUtLjMwNS42OTQtLjQ1NyAxLjE2OC0uNDU3cy44NjMuMTUyIDEuMTY4LjQ1N2MuMzA1LjMwNS40NTcuNjk0LjQ1NyAxLjE2OHY0Ljg3NXpNNSAxNy4xODd2LTEuNjI1aDQuMDYzdjEuNjI2SDV6bTguOTM4IDB2LTEuNjI1SDI3Ljc1djEuNjI2SDEzLjkzN3ptLS44MTMgMS42MjVjMCAuNDc0LS4xNTIuODY0LS40NTcgMS4xNjgtLjMwNS4zMDUtLjY5NC40NTctMS4xNjguNDU3cy0uODYzLS4xNTItMS4xNjgtLjQ1N2MtLjMwNS0uMzA0LS40NTctLjY5NC0uNDU3LTEuMTY4di00Ljg3NWMwLS40NzMuMTUyLS44NjMuNDU3LTEuMTY3LjMwNS0uMzA1LjY5NC0uNDU3IDEuMTY4LS40NTdzLjg2My4xNTIgMS4xNjguNDU3Yy4zMDUuMzA0LjQ1Ny42OTQuNDU3IDEuMTY4djQuODc0ek01IDkuODc2VjguMjVoMTMuODEzdjEuNjI1SDV6bTE4LjY4OCAwVjguMjVoNC4wNjJ2MS42MjVoLTQuMDYzem0tLjgxMyAxLjYyNWMwIC40NzQtLjE1Mi44NjMtLjQ1NyAxLjE2OC0uMzA1LjMwNS0uNjk0LjQ1Ny0xLjE2OC40NTdzLS44NjMtLjE1Mi0xLjE2OC0uNDU3Yy0uMzA1LS4zMDUtLjQ1Ny0uNjk0LS40NTctMS4xNjhWNi42MjVjMC0uNDc0LjE1Mi0uODYzLjQ1Ny0xLjE2OC4zMDUtLjMwNS42OTQtLjQ1NyAxLjE2OC0uNDU3cy44NjMuMTUyIDEuMTY4LjQ1N2MuMzA1LjMwNS40NTcuNjk0LjQ1NyAxLjE2OFYxMS41eiIgZmlsbD0iI0E3ODFGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuODc1IDE4Yy44OCAwIDEuNjQyLjMyMiAyLjI4NS45NjUuNjQzLjY0My45NjUgMS40MDUuOTY1IDIuMjg1IDAgLjg4LS4zMjIgMS42NDItLjk2NSAyLjI4NS0uNjQzLjY0My0xLjQwNS45NjUtMi4yODUuOTY1LS44OCAwLTEuNjQyLS4zMjItMi4yODUtLjk2NS0uNjQzLS42NDMtLjk2NS0xLjQwNS0uOTY1LTIuMjg1IDAtLjg4LjMyMi0xLjY0Mi45NjUtMi4yODUuNjQzLS42NDMgMS40MDUtLjk2NSAyLjI4NS0uOTY1em0xMi45NS0uODEzSDkuODc0Yy0xLjExNyAwLTIuMDc0LjM5OC0yLjg3IDEuMTk0LS43OTUuNzk1LTEuMTkyIDEuNzUyLTEuMTkyIDIuODY5IDAgMS4xMTcuMzk3IDIuMDc0IDEuMTkzIDIuODcuNzk1Ljc5NSAxLjc1MiAxLjE5MiAyLjg2OSAxLjE5MmgxM2MxLjExNyAwIDIuMDc0LS4zOTcgMi44Ny0xLjE5My43OTUtLjc5NSAxLjE5Mi0xLjc1MiAxLjE5Mi0yLjg2OSAwLTEuMTE3LS40MDYtMi4wNzQtMS4yMTgtMi44Ny0uODEzLS43OTUtMS43NzgtMS4xOTItMi44OTUtMS4xOTJ6bS4wNS0uODEyYzEuMzU0IDAgMi41MDUuNDc0IDMuNDUzIDEuNDIyczEuNDIyIDIuMDk5IDEuNDIyIDMuNDUzYzAgMS4zNTQtLjQ3NCAyLjUwNS0xLjQyMiAzLjQ1M3MtMi4wOTkgMS40MjItMy40NTMgMS40MjJoLTEzYy0xLjM1NCAwLTIuNTA1LS40NzQtMy40NTMtMS40MjJTNSAyMi42MDQgNSAyMS4yNWMwLTEuMzU0LjQ3NC0yLjUwNSAxLjQyMi0zLjQ1M3MyLjA5OS0xLjQyMiAzLjQ1My0xLjQyMmgxM3ptMC05Ljc1Yy44OCAwIDEuNjQyLjMyMiAyLjI4NS45NjUuNjQzLjY0My45NjUgMS40MDUuOTY1IDIuMjg1IDAgLjg4LS4zMjIgMS42NDItLjk2NSAyLjI4NS0uNjQzLjY0My0xLjQwNS45NjUtMi4yODUuOTY1LS44OCAwLTEuNjQyLS4zMjItMi4yODUtLjk2NS0uNjQzLS42NDMtLjk2NS0xLjQwNS0uOTY1LTIuMjg1IDAtLjg4LjMyMi0xLjY0Mi45NjUtMi4yODUuNjQzLS42NDMgMS40MDUtLjk2NSAyLjI4NS0uOTY1em0tMTIuOTUtLjgxM2MtMS4xMTYgMC0yLjA4MS4zOTgtMi44OTQgMS4xOTQtLjgxMi43OTUtMS4yMTggMS43NTItMS4yMTggMi44NjkgMCAxLjExNy4zOTcgMi4wNzQgMS4xOTMgMi44Ny43OTUuNzk1IDEuNzUyIDEuMTkzIDIuODY5IDEuMTkzaDEzYzEuMTE3IDAgMi4wNzQtLjM5OCAyLjg3LTEuMTk0Ljc5NS0uNzk1IDEuMTkyLTEuNzUyIDEuMTkyLTIuODY5IDAtMS4xMTctLjM5Ny0yLjA3NC0xLjE5My0yLjg3LS43OTUtLjc5NS0xLjc1Mi0xLjE5Mi0yLjg2OS0xLjE5Mkg5LjkyNXpNOS44NzYgNWgxM2MxLjM1NCAwIDIuNTA1LjQ3NCAzLjQ1MyAxLjQyMlMyNy43NSA4LjUyIDI3Ljc1IDkuODc1YzAgMS4zNTQtLjQ3NCAyLjUwNS0xLjQyMiAzLjQ1M3MtMi4wOTkgMS40MjItMy40NTMgMS40MjJoLTEzYy0xLjM1NCAwLTIuNTA1LS40NzQtMy40NTMtMS40MjJTNSAxMS4yMyA1IDkuODc1YzAtMS4zNTQuNDc0LTIuNTA1IDEuNDIyLTMuNDUzUzguNTIgNSA5Ljg3NSA1eiIgZmlsbD0iI0E3ODFGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjE2NyAyMS43ODlsNS42MjYtNS41MzktNS42MjYtNS41MzlMMjAuODc4IDlsNy4yNSA3LjI1LTcuMjUgNy4yNS0xLjcxMS0xLjcxMXptLTYuMjA2IDBMMTEuMjUgMjMuNSA0IDE2LjI1IDExLjI1IDlsMS43MTEgMS43MTEtNS42MjYgNS41MzkgNS42MjYgNS41Mzl6IiBmaWxsPSIjQTc4MUZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: linear-gradient(\n    130deg,\n    ', ',\n    ', '\n  );\n'], ['\n  background: linear-gradient(\n    130deg,\n    ', ',\n    ', '\n  );\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SideBySide = __webpack_require__(15);

var _SideBySide2 = _interopRequireDefault(_SideBySide);

var _ui = __webpack_require__(3);

var _vote = __webpack_require__(74);

var _vote2 = _interopRequireDefault(_vote);

var _payment = __webpack_require__(75);

var _payment2 = _interopRequireDefault(_payment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSideBySide = (0, _styledComponents2.default)(_SideBySide2.default)(_templateObject, _ui.theme.mainBgGradientStart, _ui.theme.mainBgGradientEnd);

var Vote = function Vote() {
  return _react2.default.createElement(StyledSideBySide, {
    items: [{
      subtitle: 'Decision-making by voting',
      textContent: '\n          Use voting for more effective results.\n          Votes are a secure, transparent and unforgeable way to come to a\n          decision on major issues\n        ',
      image: _vote2.default
    }, {
      subtitle: 'Instant payments in a few clicks',
      textContent: '\n          Adding a new employee to your organization and payroll is as easy as creating a new recurring payment\n        ',
      image: _payment2.default
    }]
  });
};

exports.default = Vote;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/f140c192-vote.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/c774ed2d-payment.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background: #fff;\n  img {\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n  }\n  ', ';\n'], ['\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background: #fff;\n  img {\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n  }\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-top: 0px;\n  ', ';\n'], ['\n  padding-top: 0px;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _finance = __webpack_require__(77);

var _finance2 = _interopRequireDefault(_finance);

var _sign = __webpack_require__(78);

var _sign2 = _interopRequireDefault(_sign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Title = _web.IllustratedSection.Title,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var Main = (0, _styledComponents2.default)(_web.IllustratedSection)(_templateObject, (0, _ui.breakpoint)('large', '\n      padding-top: 120px;\n      padding-bottom: 120px;\n    '));

var MainWithLessMargin = (0, _styledComponents2.default)(Main)(_templateObject2, (0, _ui.breakpoint)('large', 'margin-top: -50px;'));

var Finance = function Finance() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      Main,
      null,
      _react2.default.createElement(
        Illustration,
        null,
        _react2.default.createElement('img', { src: _finance2.default, alt: '' })
      ),
      _react2.default.createElement(
        Title,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Accounting'
        )
      ),
      _react2.default.createElement(
        Subtitle,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Tamper-proof, effective accounting'
        )
      ),
      _react2.default.createElement(
        Emphasis,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Every transaction is recorded and can be verified on the blockchain at any given time'
        )
      ),
      _react2.default.createElement(
        Content,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Unprecedented level of transparency can be gained through the use of a public blockchain to engrave every entry permanently on the ledger'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Pre-established rules can automatically define your quarterly spending and budgeting'
        )
      )
    ),
    _react2.default.createElement(
      MainWithLessMargin,
      null,
      _react2.default.createElement(
        Title,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Permissions'
        )
      ),
      _react2.default.createElement(
        Subtitle,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Flexible and resilient privilege escalation'
        )
      ),
      _react2.default.createElement(
        Emphasis,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Fine-grained permissions deliver the freedom to create an organization that will work for you'
        )
      ),
      _react2.default.createElement(
        Content,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Permissions can be granular and assigned in fine detail. You can choose to give people a certain degree of control over the organization and privileges can be escalated easily through a voting or different mechanisms if the person isn\'t allowed to directly perform a desired action'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By assigning different permissions to people, you can create the kind of organizational structure that is best suited for your needs'
        )
      ),
      _react2.default.createElement(
        Illustration,
        null,
        _react2.default.createElement('img', { src: _sign2.default, alt: '' })
      )
    )
  );
};

exports.default = Finance;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/928feb03-finance.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2129db04-sign.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Snippet = __webpack_require__(80);

Object.defineProperty(exports, 'Snippet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Snippet).default;
  }
});

var _Docs = __webpack_require__(82);

Object.defineProperty(exports, 'Docs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Docs).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 80px;\n  img {\n    min-width: 512px;\n  }\n'], ['\n  padding-top: 80px;\n  img {\n    min-width: 512px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = __webpack_require__(2);

var _OverlapBackground = __webpack_require__(5);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _code = __webpack_require__(81);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var StyledOverlapBackground = (0, _styledComponents2.default)(_OverlapBackground2.default)(_templateObject);

var Snippet = function Snippet() {
  return _react2.default.createElement(
    StyledOverlapBackground,
    null,
    _react2.default.createElement(
      _web.IllustratedSection,
      null,
      _react2.default.createElement(
        Subtitle,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'Upgradeability,',
          _react2.default.createElement('br', null),
          'access control and governance.',
          _react2.default.createElement('br', null),
          'All taken care of'
        )
      ),
      _react2.default.createElement(
        Content,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'The architecture of aragonOS can be used by any complex DApp or protocol. It enables extendability with the capability to plug in any Aragon governance module'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Using aragonOS is independent of any tokens and will always be free'
        )
      ),
      _react2.default.createElement(
        Emphasis,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'aragonOS is a smart contract development framework with a very strong focus on governance and upgradeability'
        )
      ),
      _react2.default.createElement(
        Illustration,
        null,
        _react2.default.createElement('img', { src: _code2.default, alt: '' })
      )
    )
  );
};

exports.default = Snippet;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7f8a25af-code.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  background: #fcfcff;\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n\n  img {\n    max-width: calc(100% - 30px);\n  }\n  p {\n    font-size: 17px;\n    margin-bottom: 1em;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  ', ';\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  background: #fcfcff;\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n\n  img {\n    max-width: calc(100% - 30px);\n  }\n  p {\n    font-size: 17px;\n    margin-bottom: 1em;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  ', ';\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _ = __webpack_require__(4);

var _bsod = __webpack_require__(83);

var _bsod2 = _interopRequireDefault(_bsod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.textPrimary, _ui.theme.textSecondary, medium('\n    padding-top: 120px;\n    padding-bottom: 120px;\n    .title {\n      margin: 0 10%;\n    }\n    p {\n      font-size: 18px;\n    }\n    .columns {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      margin: 50px 0;\n    }\n    .image img {\n      max-width: 75%;\n    }\n    .item {\n      width: 50%;\n    }\n    .item:nth-child(1) {\n      padding-right: 10px;\n    }\n    .item:nth-child(2) {\n      padding-left: 10px;\n    }\n    .cta {\n      margin-top: 50px;\n    }\n    .cta a {\n      margin: 0 0.5rem;\n    }\n  '), large('\n    .title {\n      font-size: 37px;\n    }\n  '));

var Docs = function Docs() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_.SectionTitle, { title: 'Getting started' }),
      _react2.default.createElement(
        'h1',
        { className: 'title' },
        'The aragonOS architecture'
      ),
      _react2.default.createElement('img', {
        src: 'https://raw.githubusercontent.com/aragon/aragon-wiki/master/docs/images/aragonos/aragon_tech_lead_wants_to_transfer_100_eth_to_payroll_contract.gif',
        alt: ''
      }),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'Once you understand the robustness of the architecture and the Access Control List that powers aragonOS, your vision for smart contract development will change radically'
        ),
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'aragonOS-based apps follow the UNIX philosophy to do one simple thing exceedingly well. They expose permissions for other apps to consume their functionality and build upon them'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cta' },
        _react2.default.createElement(
          _.Anchor,
          {
            mode: 'strong',
            href: 'https://blog.aragon.one/introducing-aragonos-3-0-alpha-the-new-operating-system-for-protocols-and-dapps-348f7ac92cff',
            target: '_blank'
          },
          'Announcement post'
        ),
        _react2.default.createElement(
          _.Anchor,
          {
            mode: 'outline',
            href: 'http://wiki.aragon.one/dev/aragonOS_index/',
            target: '_blank'
          },
          'Architecture overview'
        )
      )
    )
  );
};

exports.default = Docs;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/36845b56-bsod.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Intro = __webpack_require__(85);

Object.defineProperty(exports, 'Intro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Intro).default;
  }
});

var _AGP = __webpack_require__(87);

Object.defineProperty(exports, 'AGP', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AGP).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 0;\n  padding-bottom: 0;\n'], ['\n  padding-top: 0;\n  padding-bottom: 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _OverlapBackground = __webpack_require__(5);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(86);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var StyledIllustratedSection = (0, _styledComponents2.default)(_web.IllustratedSection)(_templateObject);

var Intro = function Intro() {
  return _react2.default.createElement(
    _OverlapBackground2.default,
    null,
    _react2.default.createElement(
      StyledIllustratedSection,
      null,
      _react2.default.createElement(
        Subtitle,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'Putting the power back into the hands of the users'
        )
      ),
      _react2.default.createElement(
        Emphasis,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'The Aragon Network will decentralize its governance by gradually handing over control of the project to its users'
        )
      ),
      _react2.default.createElement(
        Content,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'The Aragon Network will establish additional services for the organizations taking advantage of what Aragon Core provides'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Our mission is to make the Aragon Network an autonomous organization itself, which is managed by the people using it for their mutual prosperity'
        )
      ),
      _react2.default.createElement(
        Illustration,
        null,
        _react2.default.createElement('img', { src: _illustration2.default, alt: '' })
      )
    )
  );
};

exports.default = Intro;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NjMiIGhlaWdodD0iNDQ3Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ijk1Ljg1MSUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjAlIiB4Mj0iMTA1Ljc4OSUiIHkxPSItMzMuNDY0JSIgeTI9IjI0NS40NSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGN0Y4RjkiLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9ImQiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImUiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImYiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWRhc2hhcnJheT0iMywzIiBkPSJNMzMuMjY2LjcwMmw0MjkuNDIxIDIzNC4xOTRtLTc3LjA2Mi0xMzAuMzU5TDExNi4wOTggNDQ2LjM1MiIgb3BhY2l0eT0iLjQiLz48ZWxsaXBzZSBjeD0iMTQzLjg4NiIgY3k9IjIzNS4xNDQiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA1IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjkyLjQ5MyIgcnk9IjkxLjg3NyIvPjxlbGxpcHNlIGN4PSIxNzkuODI0IiBjeT0iMTY1LjA5NSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTAxLjk2OSIgcnk9IjEwMS4yODkiLz48ZWxsaXBzZSBjeD0iMjQxLjgzIiBjeT0iMjE1LjgxOSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iNDQuOTc5IiByeT0iNDQuNjc5Ii8+PGVsbGlwc2UgY3g9IjI1Mi45MzUiIGN5PSIyNjIuNjEiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA0IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjI4LjA4MyIgcnk9IjI3Ljg5NiIvPjxlbGxpcHNlIGN4PSIxNzEuNjM3IiBjeT0iMjE3LjM5OCIgc3Ryb2tlPSJ1cmwoI2IpIiBzdHJva2UtZGFzaGFycmF5PSIxLDMiIHJ4PSIxMjUuNzczIiByeT0iMTI0LjkzNCIvPjxlbGxpcHNlIGN4PSIxNzEuMjY5IiBjeT0iMjA3LjM1MiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDMiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTcwLjkwOSIgcnk9IjE2OS43NyIvPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3Ryb2tlPSJ1cmwoI2MpIiBkPSJNMTY1LjUuNzIybDQuOTAyIDEuNTEzYzE1LjE1NCA0Ljg1OSA5NC4wNjUgMzEuODE0IDE1Ni44NiA4NC42MDZsMy4zOTYgMi40MDgtLjc1NCA0LjI1MmgtLjAwOWMtLjgwNyA1Ljk1MS04Ljc0IDQ0LjEyOS0yOS44NDYgODUuMy0xMy42MDIgMjYuNTEtMzAuMSA0OS41OTItNDkuMDM1IDY4LjYwNy0yMy4zNjMgMjMuNDE2LTUwLjQ1NCA0MC43MzYtODAuNTIgNTEuNDg0bC0xLjcwMi41OTctMy4xOTcgMS4yMzUtNC45MDgtMS43MjJjLTMwLjI1NC0xMC44MTUtNTcuMzQ3LTI4LjEzNy04MC41NDgtNTEuNDk2LTE5LjA0My0xOS4yMjgtMzUuNTM4LTQyLjMwNy00OS4wMy02OC42MDItMjAuOTgyLTQxLjAyNy0yOC41MDctNzguMDIyLTI5LjgwMi04NS4wMjNMLjU0IDg5LjU3NGwzLjEyNi0yLjYyN2M2Mi44MS01Mi44NTkgMTQxLjgyMy03OS44NSAxNTcuMDIzLTg0LjcyNEwxNjUuNS43MjJ6TTg2LjAxNCAyNDIuNTRjMjIuOTg0IDIzLjAzNyA0OS43MyA0MC4xMyA3OS41MDggNTAuODE4IDI5LjY3LTEwLjY1IDU2LjQxNy0yNy43OCA3OS41MTItNTAuOTMgMTguODkyLTE4Ljk3NiAzNS40MTgtNDIuMTI5IDQ5LjExNi02OC44MTQgMTguNzE0LTM2LjQ5OSAyNi44MDgtNjkuMjkzIDI5LjQwOC04MS42NDFDMjYxLjA5NSA0MC43NiAxODMuNzYgMTMuNzU3IDE2NS41MTYgNy44NDRjLTE4LjE1MiA1LjgzMy05NS4xIDMyLjUyMS0xNTguMDM0IDg0LjEzMiAyLjU3OCAxMi4zODggMTAuNjMyIDQ1LjMxNiAyOS40MTMgODEuODUyIDEzLjYyNCAyNi41MzkgMzAuMTUgNDkuNjU1IDQ5LjEyIDY4LjcxMnoiIG9wYWNpdHk9Ii41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMzkuODcgNjguMDUyYy0uMTA4IDAtNDkuODk4IDE1LjgwNC00OS44OTggNTkuMDI2IDAgNDMuMjIzIDQ4LjA2IDY0LjE4NyA4My40NTIgNjQuMTg3IDE5LjI1IDAgMzUuMDY1LTUuNTY1IDQ1LjQ5Ni0xMC42NDIgMS4zNDQtNi4xMjcgNi4yMzMtMjAuNjM5IDIyLjQwOC0yMC43NDcgMi44ODUtLjExMiA1LjU5MS40MjUgNy44NjUgMS43MTYgMTAuODI0IDUuODA3IDMuNzg4IDE2LjY2NSAzLjc4OCAxNi42NjVhMjQuNTAyIDI0LjUwMiAwIDAgMCAyLjQ3NS0uNTMxYzEzLjAxLTMuNDggMjcuNjY4LTE4LjI2MiAyNS4xMjUtNDMuMDE0LTIuMDM4LTE5Ljg0OC0yMC40OC0zMi40MjgtMjkuNDUtMzcuNDI2LTIuOTM4LTEuNjM2LTQuODYtMi40NjMtNC44Ni0yLjQ2My4zMjQtMi4wMTYuNDMtMy41NzUuNDMtNC43NzMgMC0uMjI0LS4wMDUtLjQzNS0uMDExLS42MzN2LTIuMzIzYy00Ny4wNzctMjguMzY3LTg2LjkxNS0zMi43MzctMTA2LjU2My0zMi43MzctOC40ODggMC0xMy4yNDUuNzkyLTEzLjI0NS43OTJsMTIuOTg4IDEyLjkwM3ptOTkuNDcyIDI2Ljg3OXMtNi4zODYtMi4wNDMtMTIuODgtMi45MDNjLTMuMjQ3IDMuMzMzLTYuMDYyIDQuNzMtNi45MjggNS4xNjJsLS4yMTYuMjE0Yy0xOC45NDItMy45NzktMjUuNzYxLTEzLjY1NS0yNS43NjEtMTMuNjU1IDE3Ljg2LS4xMDcgMzMuOTg4IDQuMDg1IDQ1Ljc4NSAxMS4xODJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNTYuOTg1IDEyMS43MDNjMCAxNC4wODUtNS44NDQgMjcuMDk0LTE1LjgwMyAzNy42M2wtLjQ3My41NDIuNzk4LS4wMDNjMi43MDYtLjEwOCA1LjQxMi40MyA3LjY4NiAxLjcyIDEwLjgyNCA1LjgwNyAzLjc4OCAxNi42NjUgMy43ODggMTYuNjY1IDEzLjUzLTIuMTUgMzAuMzA3LTE3LjIwMiAyNy42LTQzLjU0NS0yLjAzOC0xOS44NDgtMjAuNDgtMzIuNDI4LTI5LjQ1LTM3LjQyNmE1My41NzQgNTMuNTc0IDAgMCAxIDUuODU0IDI0LjQxN00zNy45MSAxNzEuMDUzYzAgMS43NDQuMDY4IDMuNDA0LjE2NSA1LjAyNyAxMy4zOTYgMjUuNTkgMjkuNTEgNDcuOTQ2IDQ3Ljk0IDY2LjQ2IDIyLjk4NCAyMy4wMzcgNDkuNzMgNDAuMTMgNzkuNTA4IDUwLjgxOCAyOS42Ny0xMC42NSA1Ni40MTctMjcuNzggNzkuNTEyLTUwLjkzIDYuODQ3LTYuODc2IDEzLjM3Ny0xNC4zMDkgMTkuNTgtMjIuMjUxLTQ5LjM3OS0zLjUyNS00Ni4zOC0zMy4zMTktNDYuMzgtMzMuMzE5IDAtMS4xODEgMC0yLjM2NS4yMTctMy41NDggMCAwIC4xMS0xLjA0Ni40NjktMi42ODgtMTAuNDMxIDUuMDc4LTI2LjI0NSAxMC42NDMtNDUuNDk3IDEwLjY0My0zNS4zOTMgMC04My40NTItMjAuOTY0LTgzLjQ1Mi02NC4xODcgMC00My4yMjIgNDkuNzktNTkuMDI2IDQ5Ljc5LTU5LjAyNmwtLjAyNi0uMDA3Yy0xLjI2Mi0uMDk3LTIuNjE1LS4xMDEtMy44Ny0uMTAxQzgxLjQyIDY5Ljg4IDM3LjkxIDExNS4yNSAzNy45MSAxNzEuMDU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PC9nPjxnIGZpbGw9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OCA3Mi41MTMpIj48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgZmlsdGVyPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNyIgcng9IjMuMjE2IiByeT0iMy4xOTQiLz48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgcng9IjIiIHJ5PSIxLjk4NyIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiBmaWx0ZXI9InVybCgjZSkiIG9wYWNpdHk9Ii43IiByeD0iMy4yMTYiIHJ5PSIzLjE5NCIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiByeD0iMiIgcnk9IjEuOTg3Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iLjgiIHJ4PSIzLjIxNiIgcnk9IjMuMTk0Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIHJ4PSIyIiByeT0iMS45ODciLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    font-size: 25px;\n    color: ', ';\n  }\n\n  .image {\n    text-align: center;\n  }\n  img {\n    max-width: 100%;\n    border-radius: 5px;\n  }\n\n  p {\n    font-size: 17px;\n    margin-bottom: 1em;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 30px;\n  }\n\n  ', ';\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    font-size: 25px;\n    color: ', ';\n  }\n\n  .image {\n    text-align: center;\n  }\n  img {\n    max-width: 100%;\n    border-radius: 5px;\n  }\n\n  p {\n    font-size: 17px;\n    margin-bottom: 1em;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 30px;\n  }\n\n  ', ';\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _ = __webpack_require__(4);

var _agp = __webpack_require__(88);

var _agp2 = _interopRequireDefault(_agp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.textPrimary, _ui.theme.textSecondary, _ui.theme.textSecondary, medium('\n    padding-top: 120px;\n    padding-bottom: 120px;\n    .title {\n      margin: 0 10%;\n    }\n    p {\n      font-size: 18px;\n    }\n    .columns {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      margin: 50px 0;\n    }\n    .image img {\n      max-width: 75%;\n    }\n    .item {\n      width: 50%;\n    }\n    .item:nth-child(1) {\n      padding-right: 10px;\n    }\n    .item:nth-child(2) {\n      padding-left: 10px;\n    }\n    .cta {\n      margin-top: 50px;\n    }\n  '), large('\n    .title {\n      font-size: 37px;\n    }\n  '));

var AGP = function AGP() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_.SectionTitle, { title: 'Aragon Governance Proposals' }),
      _react2.default.createElement(
        'h1',
        { className: 'title' },
        'Join us in improving Aragon by making your voice heard'
      ),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'Aragon Governance Proposals is a system for community members to join the discussion and create proposals affecting Aragon'
        ),
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'Everyone is welcome to join in and aid in forging the future of how Aragon will shape out to be. Together we can build the exciting future which we want'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'image' },
        _react2.default.createElement('img', { src: _agp2.default, alt: '' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'cta' },
        _react2.default.createElement(
          _.Anchor,
          {
            mode: 'strong',
            href: 'https://github.com/aragon/governance/issues'
          },
          'Dive into governance proposals'
        )
      )
    )
  );
};

exports.default = AGP;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/e6a524f6-agp.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Intro = __webpack_require__(90);

Object.defineProperty(exports, 'Intro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Intro).default;
  }
});

var _Grants = __webpack_require__(92);

Object.defineProperty(exports, 'Grants', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grants).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-top: 0;\n  padding-bottom: 70px;\n  ', ';\n'], ['\n  padding-top: 0;\n  padding-bottom: 70px;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _OverlapBackground = __webpack_require__(5);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(91);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var StyledOverlapBackground = (0, _styledComponents2.default)(_OverlapBackground2.default)(_templateObject);

var StyledIllustratedSection = (0, _styledComponents2.default)(_web.IllustratedSection)(_templateObject2, (0, _ui.breakpoint)('large', 'padding-top: 0;'));

var Intro = function Intro() {
  return _react2.default.createElement(
    StyledOverlapBackground,
    null,
    _react2.default.createElement(
      StyledIllustratedSection,
      null,
      _react2.default.createElement(
        Subtitle,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'Heart of the early development'
        )
      ),
      _react2.default.createElement(
        Content,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'The Aragon Foundation is a non-profit organization which was created to nurture the project in its early phases'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Developing the platform and project towards maturity is the main duty of the Foundation. Other activities include motivating external developers to build more functionality and applications on Aragon to boost adoption of the technology'
        )
      ),
      _react2.default.createElement(
        Emphasis,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'The Aragon Foundation is laying down the first bricks on the road to what will become'
        )
      ),
      _react2.default.createElement(
        Illustration,
        null,
        _react2.default.createElement('img', { src: _illustration2.default, alt: '' })
      )
    )
  );
};

exports.default = Intro;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDM0IiBoZWlnaHQ9IjUxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyOS42MTYlIiB5MT0iMTMuMjE1JSIgeDI9IjEuNzQzJSIgeTI9IjExNC42NTclIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJjIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0VCRjNGNSIgb2Zmc2V0PSI3LjQ2OCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTE2LjQwMSUiIHkxPSIxMjcuODczJSIgeDI9IjE0Ljk1OCUiIHkyPSIwJSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiNFOUYyRjQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiM1OEQyRUQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiM5NEU0RjYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNTguODQgMjI0Ljc0NlY5NC43NTZMMCAuOTEzem0uMTkyLTEzMC4wMTd2MTI5Ljk4OUwzMTcuOTcuODg2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUuMjUzIDI4NS44NDQpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0yMTMuODk2IDM1OC4xMTFMOTcuNjI0IDI4OS4zODIgMjEzLjg5NyA5Ni40NTcgMzMwLjE3IDI4OS4zODJsLTExNi4yNzMgNjguNzI5em0uOTM3IDIyLjk1bDExNi4zNDItNjguNjkzLTExNi4zNDIgMTYzLjg0N0w5OC41NTkgMzEyLjM2NmwxMTYuMjc0IDY4LjY5NHoiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii43Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgb3BhY2l0eT0iLjUxMSIgZD0iTTExNy4yMDggMjg0LjYwNnY5NS4xNTRsMTE2LjM0NC0xNjMuODQ4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuNjI0IDk2LjQ1NikiLz48L2c+PHBhdGggZD0iTTIxNC4yODUgMzgwLjU3M3YxMjkuOTg5TDM3My4yMjEgMjg2LjczeiIvPjxwYXRoIGZpbGw9InVybCgjYikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMyOSIgZD0iTTIxNS40MTIgNDc2LjM1NlYzODEuMkw5OS4xMzggMzEyLjUwN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNTggLS4xNCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkzIDUxMC41OVYzODAuNmwtMTU4Ljg0LTkzLjg0NHoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjU4IDE3OS40NDYpIj48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4zNzIiIGQ9Ik0zLjIzIDk2LjM3N2wyMTIuMDEgMTI4LjE0N0w0MzMuMDU0IDk2LjM3NyAyMTguMTQyLjE1N3oiLz48Y2lyY2xlIGZpbGw9InVybCgjYykiIGN4PSIyLjY2MyIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNjKSIgY3g9IjIxNC45ODYiIGN5PSIyMjMuODY1IiByPSIyLjA5Ii8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iNDMxLjk4NiIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMTIuMTU0IDB2MzU3LjQ0NWwxNTguODQtOTMuODl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIxMi4xNTUgMEw1My4zMTUgMjYzLjU1NWwxNTguODQgOTMuODkyVjE5MS4zNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjUwOSIgZD0iTTIxMS45NTggOTUuODkydjI2MS42NTVsMTE2LjI3NC02OC43Mjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZykiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjQ3NiIgZD0iTTIxMS45NiA5NS44OTJMOTUuNjg1IDI4OC44MThsMTE2LjI3MyA2OC43M1YyMzUuOTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjaCkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMxNCIgZD0iTTIxMS45NTggMzU3LjU0N0wzMjguMjMgMjg4LjgybC0xMTYuMjcyLTUyLjg1ek05NS42ODYgMjg4LjgxOGwxMTYuMjcxIDY4Ljczdi0xMjEuNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTIxMy44OTYgMzU4LjExMWwxMTYuMjcyLTY4LjcyOC0xMTYuMjcyLTUyLjg1eiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTk3LjYyNCAyODkuMzgybDExNi4yNzIgNjguNzN2LTEyMS41OHoiLz48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4xMDciIGQ9Ik0uNzEyIDI3NS4yNTlsMjEyLjAxMSAxMjguMTQ3IDIxNy44MTMtMTI4LjE0Ny0yMTcuNzE4LTk2LjIyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS45MzggLjU2NCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkyIDM1OC4wMDlMMzcyLjkzIDI2NC4xMmwtMTU4LjgzOC03Mi4xOTd6bS0xNTguODM5LTkzLjg5bDE1OC44MzggOTMuODlWMTkxLjkyMnoiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0ZGRiI+PHBhdGggZD0iTTIxNC4wOTIuNTY0djM1Ny40NDVsMTU4Ljg0LTkzLjg5eiIvPjxwYXRoIGQ9Ik0yMTQuMDkzLjU2NEw1NS4yNTMgMjY0LjExOWwxNTguODQgOTMuODkxVjE5MS45MjJ6Ii8+PHBhdGggb3BhY2l0eT0iLjQxOSIgZD0iTTIxNC4wOTIgMzU4LjAwOUwzNzIuOTMgMjY0LjEybC0xNTguODM4LTcyLjE5N3ptLTE1OC44MzktOTMuODlsMTU4LjgzOCA5My44OVYxOTEuOTIyeiIvPjxwYXRoIG9wYWNpdHk9Ii41IiBkPSJNMjE0LjA5MiAzNTguMDA5TDM3Mi45MyAyNjQuMTJsLTE1OC44MzgtNzIuMTk3eiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  background: #fff;\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n\n  img {\n    max-width: calc(100% - 30px);\n  }\n  p {\n    font-size: 17px;\n    margin-bottom: 1em;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  ', ';\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  background: #fff;\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n\n  img {\n    max-width: calc(100% - 30px);\n  }\n  p {\n    font-size: 17px;\n    margin-bottom: 1em;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  ', ';\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _ = __webpack_require__(4);

var _repos = __webpack_require__(93);

var _repos2 = _interopRequireDefault(_repos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.textPrimary, _ui.theme.textSecondary, medium('\n    padding-top: 120px;\n    padding-bottom: 120px;\n    .title {\n      margin: 0 10%;\n    }\n    p {\n      font-size: 18px;\n    }\n    .columns {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      margin: 50px 0;\n    }\n    .image img {\n      max-width: 75%;\n    }\n    .item {\n      width: 50%;\n    }\n    .item:nth-child(1) {\n      padding-right: 10px;\n    }\n    .item:nth-child(2) {\n      padding-left: 10px;\n    }\n    .cta {\n      margin-top: 50px;\n    }\n    .cta a {\n      margin: 0 0.5rem;\n    }\n  '), large('\n    .title {\n      font-size: 37px;\n    }\n  '));

var Grants = function Grants() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_.SectionTitle, { title: 'Grants program' }),
      _react2.default.createElement(
        'h1',
        { className: 'title' },
        'Let\'s build the best tools for the future, together'
      ),
      _react2.default.createElement('img', { src: _repos2.default, alt: '' }),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'The Aragon Nest program was created to support great teams in the research and development of all-important tools for the Aragon and Ethereum ecosystems'
        ),
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'You can propose subjects for grants that we should award, or you can apply for a grant from Nest to your project. The process is completely transparent for the community'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cta' },
        _react2.default.createElement(
          _.Anchor,
          {
            mode: 'strong',
            href: 'https://github.com/aragon/nest',
            target: '_blank'
          },
          'Check out proposals'
        ),
        _react2.default.createElement(
          _.Anchor,
          {
            mode: 'outline',
            href: 'https://blog.aragon.one/launch-of-aragon-nest-8d42d1a37595',
            target: '_blank'
          },
          'Read more'
        )
      )
    )
  );
};

exports.default = Grants;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4632a716-repos.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WhyAragon = __webpack_require__(95);

Object.defineProperty(exports, 'WhyAragon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WhyAragon).default;
  }
});

var _Vision = __webpack_require__(97);

Object.defineProperty(exports, 'Vision', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vision).default;
  }
});

var _Team = __webpack_require__(101);

Object.defineProperty(exports, 'Team', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Team).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 80px;\n'], ['\n  padding-top: 80px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = __webpack_require__(2);

var _OverlapBackground = __webpack_require__(5);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(96);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _web.IllustratedSection.Illustration,
    Subtitle = _web.IllustratedSection.Subtitle,
    Emphasis = _web.IllustratedSection.Emphasis,
    Content = _web.IllustratedSection.Content;


var StyledOverlapBackground = (0, _styledComponents2.default)(_OverlapBackground2.default)(_templateObject);

var WhyAragon = function WhyAragon() {
  return _react2.default.createElement(
    StyledOverlapBackground,
    null,
    _react2.default.createElement(
      _web.IllustratedSection,
      null,
      _react2.default.createElement(
        Subtitle,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'Why Aragon?'
        )
      ),
      _react2.default.createElement(
        Content,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'Organizations like companies exist to create value for their owners and users. They use the resources available to them in order to provide services and to create products'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Their ability to do this efficiently is hindered by factors outside of their influence. By removing unnecessary intermediaries and third parties that impose artificial restrictions and unnecessarily complex regulations, we can modernize the way organizations are run'
        )
      ),
      _react2.default.createElement(
        Emphasis,
        { dark: true },
        _react2.default.createElement(
          'p',
          null,
          'Aragon was born to bring transparency and independent governance to the forefront of managing an organization. We want to give the users the freedom they deserve to run their lives'
        )
      ),
      _react2.default.createElement(
        Illustration,
        null,
        _react2.default.createElement('img', { src: _illustration2.default, alt: '' })
      )
    )
  );
};

exports.default = WhyAragon;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NjMiIGhlaWdodD0iNDQ3Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ijk1Ljg1MSUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjAlIiB4Mj0iMTA1Ljc4OSUiIHkxPSItMzMuNDY0JSIgeTI9IjI0NS40NSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGN0Y4RjkiLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9ImQiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImUiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImYiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWRhc2hhcnJheT0iMywzIiBkPSJNMzMuMjY2LjcwMmw0MjkuNDIxIDIzNC4xOTRtLTc3LjA2Mi0xMzAuMzU5TDExNi4wOTggNDQ2LjM1MiIgb3BhY2l0eT0iLjQiLz48ZWxsaXBzZSBjeD0iMTQzLjg4NiIgY3k9IjIzNS4xNDQiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA1IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjkyLjQ5MyIgcnk9IjkxLjg3NyIvPjxlbGxpcHNlIGN4PSIxNzkuODI0IiBjeT0iMTY1LjA5NSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTAxLjk2OSIgcnk9IjEwMS4yODkiLz48ZWxsaXBzZSBjeD0iMjQxLjgzIiBjeT0iMjE1LjgxOSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iNDQuOTc5IiByeT0iNDQuNjc5Ii8+PGVsbGlwc2UgY3g9IjI1Mi45MzUiIGN5PSIyNjIuNjEiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA0IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjI4LjA4MyIgcnk9IjI3Ljg5NiIvPjxlbGxpcHNlIGN4PSIxNzEuNjM3IiBjeT0iMjE3LjM5OCIgc3Ryb2tlPSJ1cmwoI2IpIiBzdHJva2UtZGFzaGFycmF5PSIxLDMiIHJ4PSIxMjUuNzczIiByeT0iMTI0LjkzNCIvPjxlbGxpcHNlIGN4PSIxNzEuMjY5IiBjeT0iMjA3LjM1MiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDMiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTcwLjkwOSIgcnk9IjE2OS43NyIvPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3Ryb2tlPSJ1cmwoI2MpIiBkPSJNMTY1LjUuNzIybDQuOTAyIDEuNTEzYzE1LjE1NCA0Ljg1OSA5NC4wNjUgMzEuODE0IDE1Ni44NiA4NC42MDZsMy4zOTYgMi40MDgtLjc1NCA0LjI1MmgtLjAwOWMtLjgwNyA1Ljk1MS04Ljc0IDQ0LjEyOS0yOS44NDYgODUuMy0xMy42MDIgMjYuNTEtMzAuMSA0OS41OTItNDkuMDM1IDY4LjYwNy0yMy4zNjMgMjMuNDE2LTUwLjQ1NCA0MC43MzYtODAuNTIgNTEuNDg0bC0xLjcwMi41OTctMy4xOTcgMS4yMzUtNC45MDgtMS43MjJjLTMwLjI1NC0xMC44MTUtNTcuMzQ3LTI4LjEzNy04MC41NDgtNTEuNDk2LTE5LjA0My0xOS4yMjgtMzUuNTM4LTQyLjMwNy00OS4wMy02OC42MDItMjAuOTgyLTQxLjAyNy0yOC41MDctNzguMDIyLTI5LjgwMi04NS4wMjNMLjU0IDg5LjU3NGwzLjEyNi0yLjYyN2M2Mi44MS01Mi44NTkgMTQxLjgyMy03OS44NSAxNTcuMDIzLTg0LjcyNEwxNjUuNS43MjJ6TTg2LjAxNCAyNDIuNTRjMjIuOTg0IDIzLjAzNyA0OS43MyA0MC4xMyA3OS41MDggNTAuODE4IDI5LjY3LTEwLjY1IDU2LjQxNy0yNy43OCA3OS41MTItNTAuOTMgMTguODkyLTE4Ljk3NiAzNS40MTgtNDIuMTI5IDQ5LjExNi02OC44MTQgMTguNzE0LTM2LjQ5OSAyNi44MDgtNjkuMjkzIDI5LjQwOC04MS42NDFDMjYxLjA5NSA0MC43NiAxODMuNzYgMTMuNzU3IDE2NS41MTYgNy44NDRjLTE4LjE1MiA1LjgzMy05NS4xIDMyLjUyMS0xNTguMDM0IDg0LjEzMiAyLjU3OCAxMi4zODggMTAuNjMyIDQ1LjMxNiAyOS40MTMgODEuODUyIDEzLjYyNCAyNi41MzkgMzAuMTUgNDkuNjU1IDQ5LjEyIDY4LjcxMnoiIG9wYWNpdHk9Ii41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMzkuODcgNjguMDUyYy0uMTA4IDAtNDkuODk4IDE1LjgwNC00OS44OTggNTkuMDI2IDAgNDMuMjIzIDQ4LjA2IDY0LjE4NyA4My40NTIgNjQuMTg3IDE5LjI1IDAgMzUuMDY1LTUuNTY1IDQ1LjQ5Ni0xMC42NDIgMS4zNDQtNi4xMjcgNi4yMzMtMjAuNjM5IDIyLjQwOC0yMC43NDcgMi44ODUtLjExMiA1LjU5MS40MjUgNy44NjUgMS43MTYgMTAuODI0IDUuODA3IDMuNzg4IDE2LjY2NSAzLjc4OCAxNi42NjVhMjQuNTAyIDI0LjUwMiAwIDAgMCAyLjQ3NS0uNTMxYzEzLjAxLTMuNDggMjcuNjY4LTE4LjI2MiAyNS4xMjUtNDMuMDE0LTIuMDM4LTE5Ljg0OC0yMC40OC0zMi40MjgtMjkuNDUtMzcuNDI2LTIuOTM4LTEuNjM2LTQuODYtMi40NjMtNC44Ni0yLjQ2My4zMjQtMi4wMTYuNDMtMy41NzUuNDMtNC43NzMgMC0uMjI0LS4wMDUtLjQzNS0uMDExLS42MzN2LTIuMzIzYy00Ny4wNzctMjguMzY3LTg2LjkxNS0zMi43MzctMTA2LjU2My0zMi43MzctOC40ODggMC0xMy4yNDUuNzkyLTEzLjI0NS43OTJsMTIuOTg4IDEyLjkwM3ptOTkuNDcyIDI2Ljg3OXMtNi4zODYtMi4wNDMtMTIuODgtMi45MDNjLTMuMjQ3IDMuMzMzLTYuMDYyIDQuNzMtNi45MjggNS4xNjJsLS4yMTYuMjE0Yy0xOC45NDItMy45NzktMjUuNzYxLTEzLjY1NS0yNS43NjEtMTMuNjU1IDE3Ljg2LS4xMDcgMzMuOTg4IDQuMDg1IDQ1Ljc4NSAxMS4xODJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNTYuOTg1IDEyMS43MDNjMCAxNC4wODUtNS44NDQgMjcuMDk0LTE1LjgwMyAzNy42M2wtLjQ3My41NDIuNzk4LS4wMDNjMi43MDYtLjEwOCA1LjQxMi40MyA3LjY4NiAxLjcyIDEwLjgyNCA1LjgwNyAzLjc4OCAxNi42NjUgMy43ODggMTYuNjY1IDEzLjUzLTIuMTUgMzAuMzA3LTE3LjIwMiAyNy42LTQzLjU0NS0yLjAzOC0xOS44NDgtMjAuNDgtMzIuNDI4LTI5LjQ1LTM3LjQyNmE1My41NzQgNTMuNTc0IDAgMCAxIDUuODU0IDI0LjQxN00zNy45MSAxNzEuMDUzYzAgMS43NDQuMDY4IDMuNDA0LjE2NSA1LjAyNyAxMy4zOTYgMjUuNTkgMjkuNTEgNDcuOTQ2IDQ3Ljk0IDY2LjQ2IDIyLjk4NCAyMy4wMzcgNDkuNzMgNDAuMTMgNzkuNTA4IDUwLjgxOCAyOS42Ny0xMC42NSA1Ni40MTctMjcuNzggNzkuNTEyLTUwLjkzIDYuODQ3LTYuODc2IDEzLjM3Ny0xNC4zMDkgMTkuNTgtMjIuMjUxLTQ5LjM3OS0zLjUyNS00Ni4zOC0zMy4zMTktNDYuMzgtMzMuMzE5IDAtMS4xODEgMC0yLjM2NS4yMTctMy41NDggMCAwIC4xMS0xLjA0Ni40NjktMi42ODgtMTAuNDMxIDUuMDc4LTI2LjI0NSAxMC42NDMtNDUuNDk3IDEwLjY0My0zNS4zOTMgMC04My40NTItMjAuOTY0LTgzLjQ1Mi02NC4xODcgMC00My4yMjIgNDkuNzktNTkuMDI2IDQ5Ljc5LTU5LjAyNmwtLjAyNi0uMDA3Yy0xLjI2Mi0uMDk3LTIuNjE1LS4xMDEtMy44Ny0uMTAxQzgxLjQyIDY5Ljg4IDM3LjkxIDExNS4yNSAzNy45MSAxNzEuMDU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PC9nPjxnIGZpbGw9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OCA3Mi41MTMpIj48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgZmlsdGVyPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNyIgcng9IjMuMjE2IiByeT0iMy4xOTQiLz48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgcng9IjIiIHJ5PSIxLjk4NyIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiBmaWx0ZXI9InVybCgjZSkiIG9wYWNpdHk9Ii43IiByeD0iMy4yMTYiIHJ5PSIzLjE5NCIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiByeD0iMiIgcnk9IjEuOTg3Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iLjgiIHJ4PSIzLjIxNiIgcnk9IjMuMTk0Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIHJ4PSIyIiByeT0iMS45ODciLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  background: #fff;\n\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  img.item {\n    max-width: 100%;\n    margin-bottom: 30px;\n  }\n  p {\n    margin-top: 20px;\n    font-size: 18px;\n    color: ', ';\n  }\n\n  ', ';\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  background: #fff;\n\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  img.item {\n    max-width: 100%;\n    margin-bottom: 30px;\n  }\n  p {\n    margin-top: 20px;\n    font-size: 18px;\n    color: ', ';\n  }\n\n  ', ';\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _SectionTitle = __webpack_require__(6);

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _ = __webpack_require__(98);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(99);

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(100);

var _6 = _interopRequireDefault(_5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.textPrimary, _ui.theme.textSecondary, medium('\n    padding: 120px 15px 80px;\n    .columns {\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      margin: 40px 0;\n    }\n    img.item {\n      width: 33%;\n      margin-bottom: 0;\n    }\n    p.item {\n      width: 50%;\n    }\n    p.item:nth-child(1) {\n      padding-right: 7.5px;\n    }\n    p.item:nth-child(2) {\n      padding-left: 7.5px;\n    }\n  '), large('\n    .title {\n      font-size: 37px;\n    }\n  '));

var Vision = function Vision() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_SectionTitle2.default, { title: 'Our vision' }),
      _react2.default.createElement(
        'h1',
        { className: 'title' },
        'Evolution of the internet and blockchain technology are changing the ways we interact with each other'
      ),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement('img', { className: 'item', src: _2.default, alt: '' }),
        _react2.default.createElement('img', { className: 'item', src: _4.default, alt: '' }),
        _react2.default.createElement('img', { className: 'item', src: _6.default, alt: '' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'We believe that the progression of modern technology solutions, such as the invention of the blockchain, are changing the incentives for people to interact with each other. We are building the tools for the next generation of organizations to take advantage of this revolution'
        ),
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'Experimenting with new governance models has been a very risky endeavour during previous iterations of society. Now, for the first time in human history, we can let a thousand new governance models emerge, all from the comfort of our laptops'
        )
      )
    )
  );
};

exports.default = Vision;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/e9965467-0.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/400bd8d8-1.jpg";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9f8285bd-2.jpg";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 0;\n  background: ', ';\n\n  .columns {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin: 50px 0;\n  }\n\n  ', ';\n'], ['\n  padding: 50px 0;\n  background: ', ';\n\n  .columns {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin: 50px 0;\n  }\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 50%;\n  ', ';\n  ', ';\n'], ['\n  width: 50%;\n  ', ';\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 50px 0;\n  background: white;\n\n  .columns {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin: 50px 0;\n  }\n\n  ', ';\n'], ['\n  padding: 50px 0;\n  background: white;\n\n  .columns {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin: 50px 0;\n  }\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _SectionTitle = __webpack_require__(6);

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _Member = __webpack_require__(102);

var _Member2 = _interopRequireDefault(_Member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var CoreSection = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.mainBackground, medium('\n    padding: 120px 0;\n  '));

var StyledMember = (0, _styledComponents2.default)(_Member2.default)(_templateObject2, medium('\n    width: 33%;\n  '), large('\n    width: 25%;\n  '));

var Core = function Core() {
  return _react2.default.createElement(
    CoreSection,
    null,
    _react2.default.createElement(
      'div',
      { className: 'core' },
      _react2.default.createElement(_SectionTitle2.default, { title: 'Core Team' }),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(StyledMember, {
          picture: 'Luis.png',
          name: 'Luis Cuende',
          title: 'Project Lead',
          twitter: 'licuende',
          medium: 'lic',
          github: 'luisivan'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Jorge.png',
          name: 'Jorge Izquierdo',
          title: 'Tech Lead',
          twitter: 'izqui9',
          medium: 'izqui9',
          github: 'izqui'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Maria.png',
          name: 'Maria Gomez',
          title: 'Strategy & Operations Lead',
          twitter: 'MyPaoG',
          medium: 'MyPaoG',
          github: 'mariapao'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Tatu.png',
          name: 'Tatu K\xE4rki',
          title: 'Communications Lead',
          twitter: 'Smokyish',
          medium: 'Smokyish',
          github: 'Smokyish'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Luke.png',
          name: 'Luke Duncan',
          title: 'Research Lead',
          twitter: 'lkngtn',
          medium: 'lkngtn',
          github: 'lkngtn'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Oliver.png',
          name: 'Oliver Nordbjerg',
          title: 'Web3 Engineer',
          twitter: 'ONordbjerg',
          medium: 'notbjerg',
          github: 'onbjerg'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Pierre.png',
          name: 'Pierre Bertet',
          title: 'UI & Interaction Developer',
          twitter: 'bpierre',
          medium: 'bpierre',
          github: 'bpierre'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Brett.png',
          name: 'Brett Sun',
          title: 'EVM Engineer',
          twitter: 'sohkai',
          medium: 'sohkai',
          github: 'sohkai'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'John.png',
          name: 'John Light',
          title: 'Community Lead',
          twitter: 'lightcoin',
          medium: 'lightcoin',
          github: 'john-light'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Alexa.png',
          name: 'Alexa Weaver',
          title: 'Operations Assistant',
          twitter: 'alexa_rwr',
          medium: 'Alexa_RWR',
          github: 'alexarwr'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Jouni.png',
          name: 'Jouni Helminen',
          title: 'Design Lead',
          twitter: 'dharmaone',
          medium: 'dharmaone',
          github: 'jounih'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Bingen.png',
          name: 'Bingen Eguzkitza',
          title: 'Solidity Engineer',
          twitter: 'bingentxu',
          medium: 'bingentxu',
          github: 'bingen'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Chris.png',
          name: 'Chris Remus',
          title: 'Product Manager',
          twitter: 'cjremus',
          github: 'chris-remus'
        })
      )
    )
  );
};

var AdvisorsSection = (0, _styledComponents2.default)(_web.Section)(_templateObject3, medium('\n    padding: 120px 0;\n  '));

var Advisors = function Advisors() {
  return _react2.default.createElement(
    AdvisorsSection,
    null,
    _react2.default.createElement(
      'div',
      { className: 'advisors' },
      _react2.default.createElement(_SectionTitle2.default, { title: 'Advisors' }),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(StyledMember, {
          picture: 'Mihai.jpg',
          name: 'Mihai Alisie',
          title: 'Ethereum cofounder and AKASHA founder',
          twitter: 'mihaialisie'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Jake.jpg',
          name: 'Jake Brukhman',
          title: 'Cofounder at CoinFund',
          twitter: 'jbrukh'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Kenny.jpg',
          name: 'Kenny Rowe',
          title: 'COO of Dai Foundation',
          twitter: 'kennyrowe'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Brayton.jpg',
          name: 'Brayton Williams',
          title: 'Founding Partner at Boost VC',
          twitter: 'BraytonKey'
        })
      )
    )
  );
};

var Team = function Team() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Core, null),
    _react2.default.createElement(Advisors, null)
  );
};

exports.default = Team;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 50px;\n  text-align: center;\n  .picture {\n    width: 128px;\n    height: 128px;\n    transition: transform 0.5s ease-in-out;\n    will-change: transform;\n    border-radius: 50%;\n  }\n  &:hover .picture {\n    transform: translateY(-5px);\n  }\n  h1 {\n    margin-top: 20px;\n    font-size: 22px;\n  }\n\n  h2 {\n    font-size: 16px;\n    color: ', ';\n  }\n\n  .socials {\n    margin-top: 15px;\n  }\n\n  .socials a img {\n    width: 16px;\n    height: 16px;\n    margin: 0 5px;\n  }\n'], ['\n  padding-top: 50px;\n  text-align: center;\n  .picture {\n    width: 128px;\n    height: 128px;\n    transition: transform 0.5s ease-in-out;\n    will-change: transform;\n    border-radius: 50%;\n  }\n  &:hover .picture {\n    transform: translateY(-5px);\n  }\n  h1 {\n    margin-top: 20px;\n    font-size: 22px;\n  }\n\n  h2 {\n    font-size: 16px;\n    color: ', ';\n  }\n\n  .socials {\n    margin-top: 15px;\n  }\n\n  .socials a img {\n    width: 16px;\n    height: 16px;\n    margin: 0 5px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _twitter = __webpack_require__(103);

var _twitter2 = _interopRequireDefault(_twitter);

var _medium = __webpack_require__(104);

var _medium2 = _interopRequireDefault(_medium);

var _github = __webpack_require__(105);

var _github2 = _interopRequireDefault(_github);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.textSecondary);

var Member = function Member(_ref) {
  var className = _ref.className,
      picture = _ref.picture,
      name = _ref.name,
      title = _ref.title,
      twitter = _ref.twitter,
      medium = _ref.medium,
      github = _ref.github;
  return _react2.default.createElement(
    Main,
    { className: className },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('img', {
        src: __webpack_require__(106)("./" + picture),
        alt: '',
        width: '128',
        height: '128',
        className: 'picture'
      }),
      _react2.default.createElement(
        'h1',
        null,
        name
      ),
      _react2.default.createElement(
        'h2',
        null,
        title
      ),
      _react2.default.createElement(
        'div',
        { className: 'socials' },
        twitter ? _react2.default.createElement(
          'a',
          {
            href: 'https://twitter.com/' + twitter,
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          _react2.default.createElement('img', { src: _twitter2.default, alt: '' })
        ) : null,
        medium ? _react2.default.createElement(
          'a',
          {
            href: 'https://medium.com/@' + medium,
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          _react2.default.createElement('img', { src: _medium2.default, alt: '' })
        ) : null,
        github ? _react2.default.createElement(
          'a',
          {
            href: 'https://github.com/' + github,
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          _react2.default.createElement('img', { src: _github2.default, alt: '' })
        ) : null
      )
    )
  );
};

exports.default = Member;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjI3MiAxLjY3YTYuNTA1IDYuNTA1IDAgMCAxLTEuODY4LjUwMkEzLjIzNiAzLjIzNiAwIDAgMCAxNS44My4zODRhNi4zODcgNi4zODcgMCAwIDEtMi4wNTkuNzgzIDMuMjM3IDMuMjM3IDAgMCAwLTIuMzctMS4wMjQgMy4yNDMgMy4yNDMgMCAwIDAtMy4yNDUgMy4yNDRjMCAuMjUxLjAzLjUwMi4wOC43NDRBOS4yMjIgOS4yMjIgMCAwIDEgMS41NDcuNzM1YTMuMjIgMy4yMiAwIDAgMC0uNDQxIDEuNjM4IDMuMjQgMy4yNCAwIDAgMCAxLjQ0NiAyLjcwMiAzLjI2OCAzLjI2OCAwIDAgMS0xLjQ2Ni0uNDEydi4wNGEzLjI0NSAzLjI0NSAwIDAgMCAyLjYwMSAzLjE4NCAzLjQzIDMuNDMgMCAwIDEtLjg1My4xMSA0LjExIDQuMTEgMCAwIDEtLjYxMy0uMDUgMy4yNSAzLjI1IDAgMCAwIDMuMDMzIDIuMjUgNi40OTggNi40OTggMCAwIDEtNC4wMjggMS4zODdjLS4yNyAwLS41MjItLjAxLS43ODMtLjA0QTkuMTY4IDkuMTY4IDAgMCAwIDUuNDI0IDEzYzUuOTY3IDAgOS4yMzEtNC45NDIgOS4yMzEtOS4yMzEgMC0uMTQgMC0uMjgxLS4wMS0uNDIyYTYuOTc1IDYuOTc1IDAgMCAwIDEuNjI3LTEuNjc3eiIgZmlsbD0iIzAwQ0FFNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuOTk3IDMuOGMwLS4wMS0uMDItLjA0LS4wMy0uMDVMLjgzNCAxLjE3OWMtLjE0LS4wNy0uMjgyLS4xNTEtLjQ0Mi0uMTUxLS4yNzEgMC0uMzkyLjIzLS4zOTIuNDgydjExLjQ1YzAgLjMwMi4yMjEuNjY0LjUwMi44MDVsNC42NzEgMi4zNGMuMS4wNS4yMS4wOC4zMzEuMDguMzQyIDAgLjQ5My0uMjkxLjQ5My0uNjAyVjMuOHptLjY0MyAxLjAxNWw1LjM2MyA4LjY5OC01LjM2My0yLjY3MVY0LjgxNXptMTEuMzYuMTh2MTAuNTg4YzAgLjMzMS0uMTkuNTYyLS41MjIuNTYyYS45NTEuOTUxIDAgMCAxLS40NzItLjEzbC00LjQzLTIuMjFMMTggNC45OTV6bS0uMDMtMS4yMDVjMCAuMDQtNS4xOTMgOC40NjgtNS41OTUgOS4xMUw4LjQ1OCA2LjUzM2wzLjI1NC01LjI5M2EuNjA2LjYwNiAwIDAgMSAuNTIyLS4yODFjLjA5IDAgLjE4MS4wMi4yNjIuMDZMMTcuOTMgMy43M2MuMDIuMDEuMDQuMDMuMDQuMDZ6IiBmaWxsPSIjNDZGMkEwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNzE0Ljg1N2E3LjcxNiA3LjcxNiAwIDAgMSAyLjQ0MSAxNS4wMzdjLS4zOTIuMDctLjUzMi0uMTctLjUzMi0uMzcyIDAtLjI1LjAxLTEuMDg1LjAxLTIuMTIgMC0uNzIyLS4yNDEtMS4xODQtLjUyMi0xLjQyNSAxLjcxNy0uMTkxIDMuNTI1LS44NDQgMy41MjUtMy44MDcgMC0uODQ0LS4zMDEtMS41MjctLjc5My0yLjA3LjA4LS4yLjM0MS0uOTg0LS4wOC0yLjA0OS0uNjQ0LS4yLTIuMTIuNzk0LTIuMTIuNzk0YTcuMjYzIDcuMjYzIDAgMCAwLTMuODU3IDBzLTEuNDc3LS45OTUtMi4xMi0uNzk0Yy0uNDIyIDEuMDY1LS4xNiAxLjg0OS0uMDggMi4wNWEyLjk4OCAyLjk4OCAwIDAgMC0uNzk0IDIuMDY5YzAgMi45NTMgMS43OTggMy42MTYgMy41MTYgMy44MDctLjIyLjItLjQyMi41NDItLjQ5MiAxLjAzNC0uNDQyLjIwMS0xLjU2Ny41NDMtMi4yNC0uNjQzLS40MjItLjczMy0xLjE4NS0uNzkzLTEuMTg1LS43OTMtLjc1NC0uMDEtLjA1LjQ3Mi0uMDUuNDcyLjUwMi4yMy44NTMgMS4xMjUuODUzIDEuMTI1LjQ1MiAxLjM3NiAyLjYwMi45MTQgMi42MDIuOTE0IDAgLjY0My4wMSAxLjI0NS4wMSAxLjQzNiAwIC4yMDEtLjE0LjQ0Mi0uNTMzLjM3MkE3LjcxNiA3LjcxNiAwIDAgMSA3LjcxMy44NTd6bS00Ljc5MSAxMS4wOGMtLjAyLjA0LS4wOC4wNS0uMTMuMDItLjA2LS4wMy0uMDkxLS4wOC0uMDctLjEyMS4wMi0uMDMuMDctLjA0LjEzLS4wMi4wNi4wMy4wOS4wOC4wNy4xMnptLjMxMS4zNGMtLjA0LjA0MS0uMTEuMDIxLS4xNi0uMDMtLjA1LS4wNi0uMDYtLjEzLS4wMi0uMTYuMDQtLjA0LjExLS4wMi4xNi4wMy4wNS4wNi4wNi4xMy4wMi4xNnptLjMwMi40NTNjLS4wNC4wMy0uMTIgMC0uMTcxLS4wNy0uMDUtLjA3LS4wNS0uMTUxIDAtLjE4MS4wNS0uMDQuMTMtLjAxLjE3LjA2LjA1LjA3LjA1LjE1IDAgLjE5em0uNDIyLjQyMmMtLjA0LjA1LS4xMzEuMDQtLjIwMS0uMDMtLjA3LS4wNi0uMDktLjE1MS0uMDQtLjE5MS4wNC0uMDUuMTMtLjA0LjIuMDMuMDYuMDYuMDguMTUuMDQuMTl6bS41NzIuMjVjLS4wMi4wNjEtLjExLjA5MS0uMTkuMDYxLS4wOTEtLjAyLS4xNTEtLjA5LS4xMzEtLjE1LjAyLS4wNi4xMS0uMDkuMTktLjA3LjA5MS4wMy4xNTEuMS4xMzEuMTZ6bS42MzMuMDUxYzAgLjA2LS4wNy4xMS0uMTYuMTEtLjEwMS4wMS0uMTcyLS4wNC0uMTcyLS4xMSAwLS4wNi4wNy0uMTEuMTYxLS4xMS4wOS0uMDEuMTcxLjA0LjE3MS4xMXptLjU4My0uMWMuMDEuMDYtLjA1LjEyLS4xNDEuMTQtLjA5LjAyLS4xNy0uMDItLjE4LS4wOC0uMDEtLjA3LjA1LS4xMy4xNC0uMTUuMDktLjAxLjE3LjAzLjE4LjA5eiIgZmlsbD0iI0IzQjNCMyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Alexa.png": 107,
	"./Bingen.png": 108,
	"./Brayton.jpg": 109,
	"./Brett.png": 110,
	"./Chris.png": 111,
	"./Jake.jpg": 112,
	"./John.png": 113,
	"./Jorge.png": 114,
	"./Jouni.png": 115,
	"./Kenny.jpg": 116,
	"./Luis.png": 117,
	"./Luke.png": 118,
	"./Maria.png": 119,
	"./Mihai.jpg": 120,
	"./Oliver.png": 121,
	"./Pierre.png": 122,
	"./Tatu.png": 123
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 106;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/47dcd89d-Alexa.png";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/6a430d98-Bingen.png";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7f8e1fb7-Brayton.jpg";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/13f42124-Brett.png";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cd825ad7-Chris.png";

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAEsAAAAAQAAASwAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAQCgAwAEAAAAAQAAAQAAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAQABAAMBIQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/3QAEABD/2gAMAwEAAhEDEQA/APTRHTglMB2zFKEzQAvl0mygBPLo8ukAeXSGOgBPL9qTy/agBjJzTSlAxhSmslADStRlaAGMtRMMUAMIqNhQAxulRnrQAhFROOaAGN0qFxQAxqiegCFulQS0Af/Q9WCU5Y6YDjGKAmDQAuwUmwUgDZRsFAC7M0bQKAGlBTdnFAEZXmmlKAGFBTGWgYwpUbJQBGVpjoKAIWGD0qN1oAiYcVE3WgBp6VGaAGtUMlAETVERQBG4qtNQB//R9dC09UpgO2UbKAHBPak2UgE2e1Lt9qADb7UmygBGXimFeKAImXmo2WgBmOarXl3b2cRluZo40HdzgUDPPfEvxRtLcPDogW5mH/LVl/dr9PWuBvvHOuXczO13kt6oMD6DoKAKy+MfEagKNYutg/hyMY9OmcVe0rx9rVnMGluPtC55EgzxQB3el/EnQrpEF68lm5HzF0OwfVh0FdRBc295Cs1pPHPE3R42DA0ADDg1A4oAY3SozQAw1FJQBC1Rk80ARuarSUAf/9L2YJTglMBQtGzNIBwTAo20AJs9qCmKAEK0hUUARvUZNAETdaY+B1OKBmD4k8QWeh6W99fybIukca/flbsAK8M8R+IdR8T3rz3shS2U5SBW+RB6e59zQBhSHecL0HSo9p9KBihc8Cjy8daAEI29Cc1a0zU7vTLgTWdxLC2cnYxAP1HSgD1Pwl40tNTjWC/uil36OAM/j0rqW5Gex6GgCJqiagQw9aiegCI1GaAInNV5aAP/0/b9lKEoANlKFxQAYo2cUAG2kIoAY1RtQBC7YqEmgYxmwKy/E2q22j6Nc3t7JtijXnB5b2HqTQB8/wDijWb3xFqf2y6O1WJEEOcrDH6D8sn3/CslyFPlK3T7x9aBix7VUDaOafhSAqKOe5oAckCZJY8D9aguVO70HalcCBlxQ0ZKbgVoAjOQuD09K7DwB4ok0+7Sxu7hzbSnam8lgjenPY/oaYHq2Q6BhjB6c1Aw5oERtUcnSgCA1GxoAiaoZaAP/9T3XbS7OKAFCUvl0AN2UFfegBhpKAI2qF6AIJOlQtQMx/FmqnRNDutQWNpjAuRGuBn8T0HvXgfizxdqniWSMX7LHBFysEf3QfXnkmgDFR26nJbGB7CrmnaXNduMK2PpSbKSudDD4WYKCyMTjpmnXHhmaM/KMdzgf1rFz1N/ZaGReabPacvwtZ8i5UlqtSMnEhaJm3EKT6dsUOCBjJqibFdlYg/zqPlTmqJPVPh14hW/tPsM74miXhT6e3tXXMKQyJhUUlAiB6hPU0xjHqCXpQI//9X3zZShaADbRtoAaRTDQBE5ppoAY9QuM0AQuKq3s0dpbSXEzBUjXcxPYUDPC/iN40u9XunsreQxWicMi9WPo3+H61woG489qSGbeh6QbyQEqSK73S9MitVGFBIFYVJdDqpQ6moqDGcfSn7QRzyKwuddipeafbXKFXjGT3NYdz4agbOwbHB6dRVKdjKUDKn0eWLKlAcd6zZ9LY5JXkdPetIyMZRMe7tWgboQD1qnIm3nqK6EzmejHWNzNZ3cc1tK8Uinh1OCK9r0C4urrTopbwIZCMkx9D/9emIvODmoZOppAQPULCmBE9QSGgR//9b3+igAoNADGqJqAImptADWFMYUDIpAK4L4u6sdN0OJUYAuzFQf4mA+Xj2Jz+FAHgjBmySSWJ5J5p8Ee6UAHvSYz0fw9bpBDHGACWGfrW/FEo6CuOW56NNaE+zNJtA7GoNBrhcd6qy/e4oEyvPGGXmsu7iHOMVUWQ1oc7qduGDEDnFc1MAhZSoPFdMHdHHUVmVVxnDDK9/p3r3DwjMtx4dtSjhwoKhgeoHT9K0MjQlHNQPzQBA4qIimBDIKqyk0Af/X9/ooAKKAGPUZFAERHNNIoAQimH6UDIpBXmvxwsHm0C3uUPy283z/AEIx/OhjR4l92QjGKtWMIncZO3nqKljW56H4csFt4N3muxbqSe3pW2uFHGfzrjluejBWRIGIHWkL54yak0Gt0yBx9arSD5uKBMrzEhehzWZdnmmiWZd4AU59K47UhiRuxBrogzlqrQoL3+mK9R+EN0ZdGvbcgfuJwQR6MoOK2OY7OSq7igCCSomoAgk4qrJTA//Q9/ooAKKAGuKYRQAxl5phWgBu2msKAInFcf8AFiF5PAupMgyY1WT8AwJ/SgaPnNmO85960tCia4u0RfXmploi46s9KsVW3t1BbAHc07+0rZT80qj15rjauz0IySWpZt7mC4z5UqNjrg1I2w/dkU/Q0WK5gTOMEUy4AT5nIGOeaQ20ZV3qdnGxDXEfH+1WLea1Y7vlnVvftVqLMZTSM+4v4JTtSRSfrWBq6KcuvrWsVYxm7rQxzXoXwb3+fqjBj5YWMFccbuTn8sCtjmPRHqCSgCvJUJoAik6VVlFMD//R9/ooAKKAA800igBhFNYUAMxTSKAIpF4qhq9kuoaZdWcihluIniIIz1FAz5U+w3K3X2Ly3luUcwbEX5mdSQePwNdRpdhN4dhS61a2eJpX2RrkHPGecHiolqrIuLs7lyK5uNacJAWjhHZiAGqy/hmUrueZMn1fI+nSpUEjRzcjLvNKuLSX5GbI/ijp1nf31rICYZJ1XuOH/H1pPlZUeZam9D4s09bYy3TtARwQ69D+FZeoeIU1lxb6ckspPU7do/WpVJ3LdZWsZ11oNzEnmzrGN38IbLH8apHSHOTt2j03A1o7RMVzSKd3YNEvOcDjINUJZZEUI+GVuBkU1Zid4lS4j8qVkPbofWvQ/g3F8uqz4IG6OMehwM/1qjM7981BJQBXkqButADH71XlFAH/0vf6KACigAooAaRTSKAGEUEUAROvBqBxj8OaBnztqeowWHxDfWIYilubtpWjI+4rAq2Pfq31NW/FGoy67aQxW1g0UNu5kWZ25kBGPu9h39azvbU15NTK0+OWC3jmydjIGFaJ1idreWe3i89IANzMcD6YFS3zM2T5VsVYb+5vbqaOPy2ES7i8LHBH4/XH4Vt6arzxhsq2Dgn0rOoktjSm3JaowE0RNcv72YymG2WZlDIoJLdwPaqdgh0fVLi2D7ioG1umRWqnfQwdPl1NxJHvBwVdkXozYUHr+JNYD6nfzXSxJ5eCoyPJK7T6c+nrRo9WU7x2K6XbNOYpgFznI7fUVU1G1O+ILzuLN/KhaMmWqKV+zyTR7gNwXG4Dhq9Z+Gmn/YfCVvI4+e7JuCcYOG+7+mKtMxa1OheoXpiK0tQkUARNUEtAH//T9/ooAKKACigApCKAGFaQigBjjiq1wCsbEDOFJ/Sga3Pm7xfHvu4Fx80hOefU/wD663bEiOJVY8KMHjtXPLY74L32Z8KRtE2nT/I0TNsBON6E5BH8q07TT7dIAohfBGCFOAf8azbaKST0BtKyx2osSHr6/pSahOtjaeVAwa6l/dwxgclj3x6ClfmKfuqxNY2qafpsVsvzFB8xP8THqfxNcr4lgMV6l5GM7fldfVacX7zCpG8DU0m6iuLVQsquuOoPI+tLdWsbj7isfXdim20zNWaMS9tIIjumkiiA/wBrmqcpVyHVT5YTYpbgt6n+VXF9TJ2voUordLnVrKKRtqSzIjH2Jr3NYlghWKMKEQbVCjgAVsjCW5E1QyUySvJUJFAEUnSq0lAH/9T3+igAooAKKACigAIzTSKAGsBULqOc9KAPAfiLpUmmeJAj/c3bkPbYTkf4U6DlR3zXNNdDvpvW5NJaR3YEcqBsdGxyPxqNdDx/qru4jB7BzxWfNY6XTjJEy+Ht/El/eEf7+KLfTLXT528hC03RpHJZh7ZNDk2JU4x2L32Z5E3ovA681zXiOEiPGcZPalHcJu8bEOiaXZagCHhCzKOSvy5/Kr1x4atFHWXj/bJqnNozjTi0Z8mjwwfNEuD64Gfz61l3UIGQc/jVRd9xTio7GUg/4mdoMgf6TF1/3xXujfdHp2roRxTIX61DJTIK71CaAIpKrS0Af//V9/ooAKKACigAooAKKAEYVC4oA8m+OsSj+yp8/MHZAAOSMZ5/KuWsnEkSMDwawqbnVRZp245z2rRiRdnNYM9CL0CLJYkHCjvWbqM7xzEQBS7n5WkOAKSBmbaavcKJ0uo8eX/y0iJKtXO6xqk91eIscRSJeN7jitIx1OectLGp4ZfGoNNvUJt2gZ6/hXWSlZFBBqJbmtNaGReKBnNc3qkeNxzVRIqs58qz39usYJfzU249dwr3Fc+WueTgda6kcEhj1BJ0pkFd6jNAEMlV5BQB/9b3+igAooAKKACigAooAQ1E9AHBfGazWfwjJciMPJbSLJkdlzg15hocweEKcAgYA9KyqHTROggxsHapXuUjBycD61ys7osoXWtIoKQkHJxxXPardM7BvMdhkgnPT/61VFCnLQyo9QntySrMpJGQRxUeozy3crFzvBPbsa02Oe9ytZXMlpceYpIIrqLTxCXX5h9ee1TNX1LpycdGaDSrcxiWNuD1xWBq5C596UB1XczPD9ubvxPp8ajrKGP0HNezODxnrj0rqRwyIXqF6ZJA9Qk0ARPUElAH/9f3+igAooAKKACigAooAQ1G9AGH4ttDfaFd220HzI2Bz9K+etKlktZWQ/KRwwPbHasqhvSZ0qXqtGgGMHqaz9TleVvLVioHLn2rla1O1PQyd6xzsuGYL/dGavRwwyJjypMdh3q0giriizhZgDbuwHO1hmqd3EELlbdkB4AAxVJFOKS2MqRkBOI3LNxjGafDbTBl3xMm4cAjrVPRanM99DW0ydra2ZXP3mPHpWdrFyrMcc8fnUQWo5vQ0vhfbCbxDLcMM+RHwfc//Wr06brXQjlZXaoGpkkLioWpgQuagkNAH//Q9/ooAKKACigAooAKKAEY1E1AEEqB1IIyPSvn74h6b/Y3iy7UKVjuD5yHHHPUfhUT2NqZRt7hfLVV/hOfqMVNcSI1rIzHDkgp/hXM1qdSehp6Bp6i38w/OW6tjOamvktoGyyMoPcVnd3N4vlRnve23mI6ynPQcVUvTFIxLyZ+la3G6iaGW1vEp3ovbIJpupXA3wsSCIznFJ6mPmVL+6BiBUAE9OawLtyzE9ePyq4owmz0z4X6cbXRPtMigPcnzBxzt6D9K6uXrW6OdlaSq7UCI2FQyimBA9V5aAP/0ff6KACigAooAKKACigBr1E1AEZryb472D+TY6jGFxEWQ89c/wD16T1LTseW2d0RIqsxyD261PcXDbUBPyjkfWsGjoizpNGvvLiiUuAv8Q9K1dSks7mx/wBIzz0wKwa1OtO6OTuLKRpQ8ZxGCNox2q1bQRAhZudrZHvV3M7C3t5HFEfJAB9/Sudv5xISV7804LUibKj3BKkMcg80zT7OfVL+OzhRnaRgrBey55P5Vukcsnc96trdLW0igiUKkaBVA7AdKjk61RBXk61A1MCM1DJQBXk61WmNAH//0vf6KACigAooAKKACigBj1ExoAZ16V5p8bNQh+w2OnAo8k0plfBzhVGP5mgZ4sytZ3DYGADwT3p6ShiGY8981k0bRZfhl2sPm6kHGa2jMsiSSIzDYoyg5FYSR1QYhuUSNFBBTJ6/xVUnCRygxltjZxg96BswtQmZpMg5A6+tU55d4IJ9vpW8Vock5alVmJGK9V+E+iWy6OmrcSTyuynj7gBxj9KszO4kHaqsgwaBFaUVA3FMCJhULigCvJVWWgD/0/f6KACigAooAKKAE3Cs3VvEGk6Om7VNQt7UekkgBP4UAclrHxa8P2qkWa3V+/8A0zj2L/302P0rkNU+MOqzBk0zT7a0B6NKTK35cCmByOp+KfEGrzOt7q944PPlxSGJR9AuP51RCu0as+d3ckkk0DHskMqo1woaN/3chx9z0NVb/Q54FJg/er2rGTszeK5o3RRSZ0JWQbSOCD6VpW+pbB8pGMc/SpcblRkQXF6GbBJwDke1Rm/KLt3YI5FLlG5FCeYvnjjOar4z2wK2Whg3ca3Hyr1PU13nw88aWXh+yGl6ojxwSStIlwvKxljyGHXGec/niqJPUmZZI1kjZWRxlWByCPY1VcZpAV5BVeQcdKAIXqKSgCtLVaUUAf/U9/ooAKKACkzQBHPcRQRl5pEjUckuwAFeb+MfivBp8zWugRRXsqcPO5Plg+i4+9/KgDgNT+IHifVdyyam8MbfwWyiMfnyf1rnHkkkkMkjl5G6sxLMfxPNMZNGnlxGWTlu2agEsk0gVDwR0xQIuCAJG79SByxp8i4XI7nNACW8SP5kD9JFx9K09En8yNrO6A8yI4+o9ayqrS5vRlZ2DUtDhnUnbuz0Peufu9Ekh5gf6hhWUZdGbShrdGbLaXScNGRnuO9QvZzFsvhSO5rZNGLTFFrg5OSfWkeKncmxGkOWLelRXORt7c1RDN7wz4u1XQ41htpBPajj7PNyoH+yeq/y9q6m2+KELYF/pMseerQSBwPwOD+VKwHQ6V4k0nWVAsbpTKRnypBsf8jV6QH0oAryCq8maAIJBzVeQGgD/9X3+igApkrhFLMcADJPtQBwOr/FbSYI2XTIZrybkAsPLT65PUfSuP1H4g+JNQJ2XcdlGei26DP5nNAHO3c815Jm8nmuXPJaaQvz+NZs8KtkFfm7YoGOtrVGXOWA9KsC2SNgI1AZu9AGbqc3zeUh4BqfTLYpEH6SP09hTEW70COzKDq3H1qOfKMvcMDzQAjpiRHTtzUl8GjMd9DkMuN49RSkroqLszd0y8W6hVgeKsz2yyKcqrfWuJ6M9BaozrvTY+fkz7ZrMn01BnalWmQ4lOSxI/hqldW20YA5NaJ3M5KxDPB9ngwfvNyc9qyrwY2+vWtzmY6BCOgODUlxDggnOD39KBDVgcEcE4OQR1H411GieMb7S7cQX0T3kI+4WfDr7ZPUfWh6jNe18eafO225tri25+9w4/Tmt+3ube8gE1pMk0Tfxoc1NgEZagmXFAH/1vf6KAK9/dwWNpJc3cqxQxKWd2OAorxPxt48vddne2sXktdOBwEU4eQerEdvamBx7ocbiOlT2h2nZ2PT2oAnlQ4R+6sKq3DKJWwpO044NAya2EhyQgVfem3s/wBntjKTh34Ue1AjM022a8lMj8Rjqf6VuooHQYHYUAVdQOZ41zlQQMe9S3EYeFTjkHOaAKiMyny37HBFYWralLcaiIUci3hbaADwxHUmmBu6TfeVIZEYeXnDqP4T6j2rrrScOgrkqRs7ndSleJJMBJwDjHvVGSDJIxk1kjZpFS4tmHFc3r10lipVPmnfgf7PvW9NXZz1XZGHp1y7P5Ezlo5DwSc7W7H+lQ3JLTkHqODXQchdtI8p0qzPCZLUkD7tAiOx+bIPJXrVqSIOnTrQMzXgVZgrDAPcd6vWUs+nSedp8zwyHlsch/YjvTC5fHjfU4f+Pi2tpR3Kgqf61ftfGtjOoW7iktyf4h86/mOf0qbAf//X9/pGPBxQB4r8T/FZ1bUG06yc/YbV8Ng8TOO/0HQe+a4xEyD39z3qkBMY+Bx7UkUfbnOccUAW8BiCRwRn8qzoIzPdMxPAakBosFA2ngAZY+1c/cM+q3+yIYjU9qQG7bwLDEI0+UDrT8fL3pgZ1x813CB/E4yK0DjHTj0oApXkOdskf3lwCPWuThtXN1KWBwJGz+JpgbAsZYQsqEnaNrJ6g1r6Vqohwjklen0+tZzhdGtKdnZnRRXYYKYyvzDINSQSRmV8k78Y5PauRnctShq97BbNs3K0h5257e/pXmmo3LXl7JKWJ3NkE+ldVONtTjrSTdkWNNtC7qzcKvJb0HWq0rCe6uJU+4WyPpWhgalguUFaKxhVIboeDQBmbTZ3vP3GGPwq6eQGB4NAyvcQiQZX7wqKBt3ysfmHFMRBqEYELN6VlvKfIIxwOlID/9D3+uP+J3iL+w9CMUD4u7zMUeDyq/xN+X60AeHBC6k9+1T25+X5sDHBqgLJTjjPFIRhs9m6fWgCU8Rk/wB0HiordPJDMFzuOAPekBn65cOoWyhOZpjlqt6ZYraW4XALEcmkBbJ2/wAhS4yADQBlpzqEJIzgsavF9rYPQ0wGnksMDiqqWkYl3ZYE87RjDfWmArBrX51G6MdR3H0qtdQRPJvAzFIfvKOhoAQXslhLFDIxKE7f8MH0qxc6tNGjR2uVZvvP3HsKx5FzG6qe7YwNSuRHE6Bg80nHBzjPUk1R0+AtKrlA/OcEcGtTA05bS7ukaMGOOInlUGN1TrpcdvZyActtpgN0UBrcE9QKvyAHp3oApahB50GQPmXpUVlMSu0jp29KBj5RnmPkjk1Wf5z5ijDA4YelAitrDFbTAzlmFZVwB8qL0UUAf//R9+Y4XJ6V8+ePdebXvElxcK3+jxEwwDtsB6/iefyoQGTHH8ijv1qRoQrBjyCMMKoCzCSRtYZdeCP60jLgY75oAMbgw69MilMioGYsMgHp0FFgMvRbdrqWTUJ+WkPyA9l7Vr4wOBUgMUbyT2FO7AE4oAzLAbrtmP8AAG/U1ckTNMBkTZLg9jinMBgAD3oAQqGyCOvFVxHsLL2J5HagDH1eeR7v7MrbFiGSQBuyOwP41AmmxmFJGcs0nQ5zTAVdMVpEUcDPODWrBaRwJwO3egByHBABxT2yxIPORigDL0X5VkjPVHYVfZgADSATAI9azbhDDKHXAHfFMCSVivzgioC6mUOOp+Vx/WgChqr/ALyJPQ5xVB19uaAP/9L1r4iaudI8KXcsb7ZpV8iIjrubjP4DJrwAAbcqOATj8KaA0YMSID6danRAQQ3emAzaY2yOijn3X/61PcjPHfkHtQBGnyeYeyjFZ98zSWkVvHxJdNtz/dXufyoA1YEWGFI0ACqMAUrE7TikA1TtUZ4703duOSMCgClpijfO2D97FXJCMZNAECglJGXu1ODZIz1oAd245qCUiMkv3PFMDCiAudWYuNy5YEsOtarQKjKFUbR90elAENqQ0kh4BB4qxLgRnP0oAihGWAI6CpT2oAzrVRHql3H0zhx+I/8ArGrkgyvpQAzByRmobgAjGARQBRmfBI4wKgiO7zMdMjH50AVLwGW+kx/BVZwWbAHzd6AP/9Pp/jHqH2jVbPTEb5beMzyD/abhf0DV5vEvB+h/nTQFyNfIkAx8jYzVxOBjHv8AWmAOMjKgZWqz/u2MXRXBKHP6UAML+ZBJjgniqyKH1FmHK20YjH+8eTQBqDGOR9c0hxjkcdOtICJn3qFUZ5xSqMYyMUAV7JMGbt+8OPyp05wh9e1ABA37oN6mlxh8jigBScDk1k3D/aLspnhShA9aYFJd0dysmMZY1urgpng0AUAgj1AhfuP1+tSXJG5QGORzQAkX3gwPHSpSc9KAKEmE1OKTtJGyn6g5H6E1Zfkc0AMz2FVZ5CX2gcdKAMy7kxn344pbc+TaCRuOrn6DpQBWtS7W8jkAyz9M8fU/Si5gEUPB+91J4JoA/9SDxDqJ1bxLf3hPyzyHZ/uDhf0H61mSR7HDfwmqAuMgdFHY01C6P5ZJzn5Ce49KAJPMXDMOCOCD2ps6eZDxww+ZT6GgClaSK8ki9iVfHp6inWK5jZyAPNmZwPagC8Dkn0FQyy/upNv0FABbp+6TI96Ufe6c0AMhAAfjBZyai4lkdhyqDC+59aQDrbAj7dalyPUUAZuq3nlp5aH5iapRRsbxD3Ayc/SmAyGIyycnhcnP9K2YSrINvp3oAilXbMGA49qrXDfvhjr2oAfEf3YGOf61L0UZ5xQBR1H5Y1lA5icP+HQ1MzDigBjcN+lZ85w59RQBmvm5ugg6VLqzEQrBHwZSIx9ByaAHqiQpz91R+eO1U5vMujuPyoOlAH//1cRlIn+XqFHFWmCyRlmHyHk/7J9aoB8ZIYqejDIqSWMSJg/X6UAVnVmbg/vl6js4/wAalglEi9+OCPSgDJG6PWmUfcI3fhWmE8mEE/w8DH6UAKziKHOOT096jeLbEiHO4nJPvQBYAwuKZ16etADJWCIdvU02FNsCgjk8mkARgBMDoDUVzMqKT070wML5rq8BPIzWwIwkjYxg5Pp2oApO5WMRxLjdz9au2iMsKhsUALIvp1qrKgcAj72cUAICdmMEEVK7AR59PagCGRPOgKsOGUg1DaOXt0yfmHyt9RxQAshw4HOTWZqEoBkA5YdfagCLRotwknPXoKjjxe6k8nPlQjao7E0AW5oRjcQXbsB2qCRTtPAQCgD/1shCGvd3YvipjmKVl/hPaqAlA2kMvKjoPSpFIblTwaAGSLvUdiDwarXXyI06na6fe9CKAKEkkcl9DOuVOCj59CP8a0FJkWLByDg0AMZsu8jcpGCE/CnKzyeUX4OATQBOeV47U1ASSc4pAQtmWULnjqfpUh5HFMBjfKhOcc1kX0xZMfnQA3TE/e5NakwxKPcUAZsSk32JG5HGPatEnceB8vrQA05YGoCpBweCDQBHKOcjJpt2/wDojEcUAOiJaBT7VUg/dXVxCf4iJF+h6/rQBGsudQdT0VeKoIBLLfbu3+FACW4kTSY44iBJMMLn371YsLP7JAELBm6sQOtAE7dDgVQvGCsF9eaAP//Z"

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4b8b49e0-John.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3bb0efc9-Jorge.png";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0452e13a-Jouni.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/73adc9f3-Kenny.jpg";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fa649d7f-Luis.png";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/45d8619a-Luke.png";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/542bdeaa-Maria.png";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/582035cc-Mihai.jpg";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/79579c4b-Oliver.png";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/90109361-Pierre.png";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/db166b10-Tatu.png";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Culture = __webpack_require__(125);

Object.defineProperty(exports, 'Culture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Culture).default;
  }
});

var _Value = __webpack_require__(132);

Object.defineProperty(exports, 'Value', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Value).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n  h1 {\n    padding: 30px 0 0;\n    font-size: 15px;\n    text-transform: uppercase;\n    color: ', ';\n  }\n  ', ';\n'], ['\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n  h1 {\n    padding: 30px 0 0;\n    font-size: 15px;\n    text-transform: uppercase;\n    color: ', ';\n  }\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    max-width: none;\n    h1 {\n      padding-bottom: 40px;\n      font-size: 18px;\n    }\n  '], ['\n    max-width: none;\n    h1 {\n      padding-bottom: 40px;\n      font-size: 18px;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-top: 40px;\n  h2 {\n    margin: 20px 0;\n    color: ', ';\n    font-size: 26px;\n  }\n  p {\n    color: ', ';\n    font-size: 18px;\n  }\n  ', ';\n  ', ';\n'], ['\n  margin-top: 40px;\n  h2 {\n    margin: 20px 0;\n    color: ', ';\n    font-size: 26px;\n  }\n  p {\n    color: ', ';\n    font-size: 18px;\n  }\n  ', ';\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _OverlapBackground = __webpack_require__(5);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _background = __webpack_require__(126);

var _background2 = _interopRequireDefault(_background);

var _logo = __webpack_require__(127);

var _logo2 = _interopRequireDefault(_logo);

var _buildEcosystem = __webpack_require__(128);

var _buildEcosystem2 = _interopRequireDefault(_buildEcosystem);

var _deepWorkSessions = __webpack_require__(129);

var _deepWorkSessions2 = _interopRequireDefault(_deepWorkSessions);

var _fullyDistributed = __webpack_require__(130);

var _fullyDistributed2 = _interopRequireDefault(_fullyDistributed);

var _technologyCompany = __webpack_require__(131);

var _technologyCompany2 = _interopRequireDefault(_technologyCompany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TITLE = 'Some insights into how we work';
var PARTS = [{
  title: 'Fully distributed',
  img: _fullyDistributed2.default,
  content: '\n      We all work remotely \u2013 we don\'t believe talent is geographically\n      centralized\n    '
}, {
  title: 'Deep work sessions',
  img: _deepWorkSessions2.default,
  content: '\n      We do focused deep work sessions 4 days a week, leaving Monday for\n      meetings and calls\n    '
}, {
  title: 'Ecosystem-focused',
  img: _buildEcosystem2.default,
  content: '\n      Team members are encouraged to spend a chunk of their paid work time on\n      other blockchain based open source projects to aid the growth of the\n      ecosystem\n    '
}, {
  title: 'Product first',
  img: _technologyCompany2.default,
  content: '\n      We are a technology-oriented project that is open source only. Our\n      position is product first \u2014 we place innovation and user experience above\n      all else\n    '
}];

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.themeDark.accent, medium((0, _styledComponents.css)(_templateObject2)));

var Content = _styledComponents2.default.div(_templateObject3, medium('\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  '), large('\n    background: url(' + _logo2.default + ') no-repeat 50% 50%;\n  '));

var Row = _styledComponents2.default.div(_templateObject3, medium('\n    display: flex;\n    flex-wrap: wrap;\n  '), large('\n    width: 100%;\n    justify-content: space-between;\n  '));

var StyledPart = _styledComponents2.default.div(_templateObject4, _ui.themeDark.textPrimary, _ui.themeDark.textSecondary, medium('\n    width: calc(50% - 15px);\n    max-width: 355px;\n    margin-top: 0;\n    margin-right: 15px;\n    padding-bottom: 80px;\n    & + & {\n      margin-top: 0;\n      margin-right: 0;\n      margin-left: 15px;\n    }\n    .image {\n      min-height: 200px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n  '), large('\n    max-width: 260px;\n  '));

var Part = function Part(_ref) {
  var img = _ref.img,
      title = _ref.title,
      content = _ref.content;
  return _react2.default.createElement(
    StyledPart,
    null,
    _react2.default.createElement(
      'div',
      { className: 'image' },
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('img', { src: img, alt: '' })
      )
    ),
    _react2.default.createElement(
      'h2',
      null,
      title
    ),
    _react2.default.createElement(
      'p',
      null,
      content
    )
  );
};

var wrapEvery = function wrapEvery(children) {
  var every = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  return children.reduce(function (wrappers, child, i) {
    if (!(i % every)) {
      wrappers.push([]);
    }
    wrappers[wrappers.length - 1].push(child);
    return wrappers;
  }, []);
};

var Culture = function Culture() {
  return _react2.default.createElement(
    _OverlapBackground2.default,
    null,
    _react2.default.createElement(
      Main,
      null,
      _react2.default.createElement(
        'h1',
        null,
        TITLE
      ),
      _react2.default.createElement(
        Content,
        null,
        wrapEvery(PARTS.map(function (part) {
          return _react2.default.createElement(Part, _extends({ key: part.title }, part));
        })).map(function (children, i) {
          return _react2.default.createElement(
            Row,
            { key: i },
            children
          );
        })
      )
    )
  );
};

exports.default = Culture;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgxNDQwdjExMTFIMFYwem0wIDB2MzE5LjY5NWM0MjMuMTkzIDc3Ljc0NSA2NjMuMTkzIDExNi42MTggNzIwIDExNi42MTggNTYuODA3IDAgMjk2LjgwNy0zOC44NzMgNzIwLTExNi42MThWMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzE5KSIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjRjFGOEY5IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMjY3RThBIiBzdG9wLW9wYWNpdHk9Ii40IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSI5NS44NTElIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjExLjM1NSUiIHkxPSIxMTMuOTgzJSIgeDI9IjkyLjEwMSUiIHkyPSItMjguMjczJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiMxOTFCMUMiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMzc0MDQzIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjkuMTIzJSIgeTE9IjkwLjk2MiUiIHgyPSI2OC44NzElIiB5Mj0iNC4zNTklIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzEwMTAxMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMzOTM5MzciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMDMuOTYyJSIgeTE9IjI2LjQyMSUiIHgyPSIxOC4zMTclIiB5Mj0iODAuODQ5JSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMkI0RTUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDFFQUUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODAuNjMyJSIgeTE9IjguMzk1JSIgeDI9IjQ1Ljc3MiUiIHkyPSIxMTUuMzk5JSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEUzRTkiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDJCMkU0IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTcuNzg4JSIgeTE9IjAlIiB4Mj0iMzYuMTIyJSIgeTI9IjEwOC4yNTElIiBpZD0iZyI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRjVFNiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMURERUYiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI3NS4yOTUlIiB5MT0iMTAyLjc0NiUiIHgyPSIyOS45NjklIiB5Mj0iLTguMTk2JSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiMwMUJCRTQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBGNEUxIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Ik0xOTEuNzUgMTkyLjMxM0wuNDA0Ljk2NSIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Ik0zODEuNzUgMTkyLjMxM0wxOTAuNDA0Ljk2NSIgZmlsbD0idXJsKCNiKSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTcyLjE1NCAwKSIvPjxwYXRoIGQ9Ik0xOTEuNzUgNDEyLjMxM0wuNDA0IDIyMC45NjUiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNjMzLjI3OSkiLz48cGF0aCBkPSJNMzgxLjc1IDQxMi4zMTNMMTkwLjQwNCAyMjAuOTY1IiBmaWxsPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMjg2LjA3NyAzMTYuNjQpIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iMTkwIiBjeT0iMjA4IiByPSIxNTUiLz48L2c+PHBhdGggZD0iTTUxLjk3MyAxNDYuNTVjLTExLjQ2My0xMS41MTUtMjEuNDQ4LTI1LjQ4Mi0yOS42OC00MS41MThDMTAuOTQ1IDgyLjk1NiA2LjA3OCA2My4wNiA0LjUyIDU1LjU3NSA0Mi41NDcgMjQuMzkgODkuMDQgOC4yNjUgMTAwLjAxIDQuNzRjMTEuMDIzIDMuNTcyIDU3Ljc1MSAxOS44ODkgOTUuNDk0IDUwLjgzMy0xLjU3MSA3LjQ2MS02LjQ2MiAyNy4yNzYtMTcuNzY5IDQ5LjMzLTguMjc3IDE2LjEyNC0xOC4yNjMgMzAuMTEzLTI5LjY3OCA0MS41OC0xMy45NTUgMTMuOTg3LTMwLjExNSAyNC4zMzctNDguMDQzIDMwLjc3My0xNy45OTMtNi40NTktMzQuMTUzLTE2Ljc4Ni00OC4wNDEtMzAuNzA2eiIgZmlsbD0idXJsKCNkKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkgMTE2KSIvPjxwYXRoIGQ9Ik0xMDAgLjQzNmwyLjk2Mi45MTVjOS4xNTcgMi45MzUgNTYuODM3IDE5LjIyMiA5NC43OCA1MS4xMmwyLjA1MSAxLjQ1Ni0uNDU1IDIuNTctLjAwNS0uMDAxYy0uNDg4IDMuNTk2LTUuMjgyIDI2LjY2NC0xOC4wMzQgNTEuNTQxLTguMjIgMTYuMDE4LTE4LjE4NyAyOS45NjUtMjkuNjI5IDQxLjQ1NC0xNC4xMTYgMTQuMTQ5LTMwLjQ4NSAyNC42MTQtNDguNjUyIDMxLjEwOGwtMS4wMjkuMzYtMS45MzIuNzQ3LTIuOTY1LTEuMDRjLTE4LjI4LTYuNTM1LTM0LjY1LTE3LjAwMi00OC42Ny0zMS4xMTYtMTEuNTA2LTExLjYxOC0yMS40NzMtMjUuNTYzLTI5LjYyNS00MS40NUM2LjExOSA4My4zMSAxLjU3MiA2MC45NTUuNzkgNTYuNzI1bC0uNDY1LTIuNjAzIDEuODktMS41ODdDNDAuMTY2IDIwLjU5NyA4Ny45MDggNC4yODggOTcuMDkyIDEuMzQzTDEwMCAuNDM2ek01MS45NzMgMTQ2LjU1YzEzLjg4OCAxMy45MiAzMC4wNDggMjQuMjQ3IDQ4LjA0IDMwLjcwNiAxNy45MjktNi40MzYgMzQuMDktMTYuNzg2IDQ4LjA0NC0zMC43NzMgMTEuNDE1LTExLjQ2NyAyMS40LTI1LjQ1NiAyOS42NzgtNDEuNTggMTEuMzA3LTIyLjA1NCAxNi4xOTgtNDEuODY5IDE3Ljc2OS00OS4zMy0zNy43NDMtMzAuOTQ0LTg0LjQ3LTQ3LjI2LTk1LjQ5NC01MC44MzNDODkuMDQxIDguMjY0IDQyLjU0NyAyNC4zOSA0LjUyIDU1LjU3NWMxLjU1OCA3LjQ4NSA2LjQyNSAyNy4zOCAxNy43NzMgNDkuNDU3IDguMjMyIDE2LjAzNiAxOC4yMTcgMzAuMDAzIDI5LjY4IDQxLjUxOHoiIGZpbGw9InVybCgjZSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5IDExNikiLz48cGF0aCBkPSJNODQuNTE0IDQxLjEyYy0uMDY2IDAtMzAuMTUgOS41NDgtMzAuMTUgMzUuNjY1IDAgMjYuMTE2IDI5LjAzOSAzOC43ODMgNTAuNDI0IDM4Ljc4MyAxMS42MzIgMCAyMS4xODctMy4zNjIgMjcuNDktNi40My44MTItMy43MDIgMy43NjYtMTIuNDcgMTMuNTQtMTIuNTM2IDEuNzQzLS4wNjggMy4zNzguMjU3IDQuNzUyIDEuMDM2IDYuNTQgMy41MSAyLjI4OSAxMC4wNyAyLjI4OSAxMC4wN2ExNC44MDUgMTQuODA1IDAgMCAwIDEuNDk1LS4zMmM3Ljg2LTIuMTA0IDE2LjcxOC0xMS4wMzUgMTUuMTgyLTI1Ljk5LTEuMjMyLTExLjk5NC0xMi4zNzUtMTkuNTk1LTE3Ljc5NS0yMi42MTUtMS43NzUtLjk4OC0yLjkzNy0xLjQ4OC0yLjkzNy0xLjQ4OC4xOTYtMS4yMTguMjYtMi4xNi4yNi0yLjg4NCAwLS4xMzYtLjAwMy0uMjYzLS4wMDctLjM4M3YtMS40MDNjLTI4LjQ0NS0xNy4xNC01Mi41MTYtMTkuNzgxLTY0LjM4OC0xOS43ODEtNS4xMjkgMC04LjAwMy40NzktOC4wMDMuNDc5bDcuODQ4IDcuNzk2em02MC4xMDQgMTYuMjRzLTMuODU5LTEuMjM0LTcuNzgyLTEuNzU0Yy0xLjk2MyAyLjAxNC0zLjY2NCAyLjg1OC00LjE4NyAzLjExOWwtLjEzLjEzYy0xMS40NDYtMi40MDUtMTUuNTY2LTguMjUyLTE1LjU2Ni04LjI1MiAxMC43OTItLjA2NCAyMC41MzcgMi40NyAyNy42NjUgNi43NTd6IiBmaWxsPSJ1cmwoI2YpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OSAxMTYpIi8+PHBhdGggZD0iTTE1NS4yNzggNzMuNTM2YzAgOC41MTEtMy41MyAxNi4zNzItOS41NDkgMjIuNzM4bC0uMjg1LjMyNy40ODItLjAwMWMxLjYzNS0uMDY2IDMuMjcuMjU5IDQuNjQ0IDEuMDM4IDYuNTQgMy41MSAyLjI4OSAxMC4wNyAyLjI4OSAxMC4wNyA4LjE3NS0xLjMgMTguMzEyLTEwLjM5NCAxNi42NzctMjYuMzEtMS4yMzItMTEuOTk0LTEyLjM3NS0xOS41OTUtMTcuNzk1LTIyLjYxNWEzMi4zNzEgMzIuMzcxIDAgMCAxIDMuNTM3IDE0Ljc1MyIgZmlsbD0idXJsKCNnKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkgMTE2KSIvPjxwYXRoIGQ9Ik0yMi45MDYgMTAzLjM1NWMwIDEuMDU0LjA0MSAyLjA1Ny4xIDMuMDM4IDguMDk0IDE1LjQ2MiAxNy44MyAyOC45NyAyOC45NjcgNDAuMTU3IDEzLjg4OCAxMy45MiAzMC4wNDggMjQuMjQ3IDQ4LjA0IDMwLjcwNiAxNy45MjktNi40MzYgMzQuMDktMTYuNzg2IDQ4LjA0NC0zMC43NzMgNC4xMzctNC4xNTUgOC4wODMtOC42NDcgMTEuODMxLTEzLjQ0Ni0yOS44MzYtMi4xMy0yOC4wMjQtMjAuMTMyLTI4LjAyNC0yMC4xMzIgMC0uNzE0IDAtMS40MjkuMTMxLTIuMTQ0IDAgMCAuMDY2LS42MzIuMjgzLTEuNjI0LTYuMzAyIDMuMDY5LTE1Ljg1OCA2LjQzMS0yNy40OSA2LjQzMS0yMS4zODUgMC01MC40MjQtMTIuNjY3LTUwLjQyNC0zOC43ODMgMC0yNi4xMTcgMzAuMDg0LTM1LjY2NiAzMC4wODQtMzUuNjY2bC0uMDE1LS4wMDRjLS43NjMtLjA1OS0xLjU4LS4wNjEtMi4zNC0uMDYxLTMyLjg5NiAxLjE3LTU5LjE4NyAyOC41ODQtNTkuMTg3IDYyLjMwMSIgZmlsbD0idXJsKCNoKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkgMTE2KSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjM0IiBoZWlnaHQ9IjEyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjExLjM1NSUiIHkxPSIxMTMuOTgzJSIgeDI9IjkyLjEwMSUiIHkyPSItMjguMjczJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiMwQjBCMEEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMzYzQzNEIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iIzg2ODQ4NCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBkPSJNMTMuMjEgMTEzLjQ3MXYtNTAuODhoMTY5Ljg1Mm0tNzMuMzA0LTUwLjE1N3Y0OS41OTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik02MS4wMzMgMTQuMTA5djk1LjMzNGgtNDcuMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiLz48cGF0aCBzdHJva2U9InVybCgjYikiIGZpbGw9InVybCgjYykiIGQ9Ik00Ny41IDQ3LjVINzZWNzZINDcuNXpNNDggOTVoMjguNXYyOC41SDQ4em00Ny00N2gyOC41djI4LjVIOTV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PHBhdGggZmlsbD0idXJsKCNkKSIgb3BhY2l0eT0iLjIiIGQ9Ik0yMDEgNDhoMzEuNXYyOC41SDIwMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuMyIgZD0iTTE5MyA0OGgyOC41djI4LjVIMTkzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIvPjxwYXRoIGZpbGw9InVybCgjZCkiIG9wYWNpdHk9Ii4zIiBkPSJNMTgzIDQ4aDI4LjV2MjguNUgxODN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PHBhdGggZmlsbD0idXJsKCNkKSIgZD0iTTE3MyA0OGgyOC41djI4LjVIMTczeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIvPjxwYXRoIGQ9Ik0xODIuNzA4IDcxLjAzMWE5LjUgOS41IDAgMSAxIDExLjA5LjM1NWwtMy4wNC01LjQ2NmEzLjMxIDMuMzEgMCAxIDAtNC44NjItLjM3OGwtMy4xODggNS40ODl6IiBzdHJva2U9IiNGRkYiLz48cGF0aCBzdHJva2U9InVybCgjYikiIGZpbGw9InVybCgjYykiIGQ9Ik05NSAwaDI4LjV2MjguNUg5NXpNMCA5NWgyOC41djI4LjVIMHptMC00Ny41aDI4LjVWNzZIMHpNNDggMGgyOC41djI4LjVINDh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjE2MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iOTYuOTczJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFN0UyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiNFOUYyRjQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTEuMzU1JSIgeTE9IjExMy45ODMlIiB4Mj0iOTIuMTAxJSIgeTI9Ii0yOC4yNzMlIiBpZD0iYyI+PHN0b3Agc3RvcC1jb2xvcj0iIzBCMEIwQSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM0NjRGNTEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxNS40MzUpIj48cGF0aCBkPSJNMCAxMTYuODUyYy0uMDA4IDQuMTA2IDMuMzc2IDcuNDQxIDcuNTYgNy40NWwxMjguNjYzLjI2M2M0LjE4NC4wMDkgNy41ODItMy4zMTMgNy41OS03LjQxOUwxNDQgMzEuODYuMTg2IDMxLjU2NSAwIDExNi44NTJ6TTE0NCA4LjIwOGMuMDA4LTQuMDY5LTMuMzgtNy4zNzQtNy41NjgtNy4zODJMNy42NDcuNTY2QzMuNDU5LjU1NS4wNTcgMy44NDcuMDQ5IDcuOTE1TDAgMzEuMjc1bDE0My45NTEuMjkxTDE0NCA4LjIwOCIgc3Ryb2tlPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTQ4LjU4MyA1NGgxLjc3di00LjJoNC4zNXYtMS41NmgtNC4zNXYtMy4xMDVoNC43ODVWNDMuNWgtNi41NTVWNTR6bTguNDMgMFY0My41aDQuMTg0YzIuMTMgMCAzLjU4NSAxLjE4NSAzLjU4NSAzLjI3IDAgMS42MzUtLjk0NCAyLjY4NS0yLjM0IDMuMDQ1TDY0LjcwNyA1NGgtMS45NjRsLTIuMTMtNC4wMzVoLTEuODNWNTRoLTEuNzd6bTEuNzctNS41NjVoMi4yOGMxLjE0IDAgMS45MzQtLjQ4IDEuOTM0LTEuNjY1cy0uNzgtMS42NjUtMS45MzQtMS42NjVoLTIuMjh2My4zM3pNNjYuNjU2IDU0aDEuNzdWNDMuNWgtMS43N1Y1NHptNi4xNjYtMS42MzVoMS41NDVjMS41NzUgMCAyLjc3NS0uNzA1IDIuNzc1LTMuNjMgMC0yLjU1LTEuMTQtMy42LTIuNjg2LTMuNmgtMS42MzR2Ny4yM3pNNzEuMDUzIDU0VjQzLjVoMy40MzRjMi4zMjYgMCA0LjU0NiAxLjYwNSA0LjU0NiA1LjIzNSAwIDQuMDItMi4zMSA1LjI2NS00LjYzNiA1LjI2NWgtMy4zNDV6bTE1Ljk3NSAwbC0uNjMtMS44aC00LjI0NWwtLjYxNiAxLjhoLTEuNzU1bDMuNzgtMTAuNWgxLjQ0bDMuNzggMTAuNWgtMS43NTR6bS0yLjc2LTcuOTM1bC0xLjU5IDQuNjJoMy4xOTVsLTEuNTc2LTQuNjJoLS4wM3pNOTIuNDQxIDU0aDEuNzR2LTQuNDI1bDMuNDM2LTYuMDc1aC0xLjg3NWwtMi40MTUgNC40N2gtLjAzbC0yLjQtNC40N2gtMS44OWwzLjQzNCA2LjA3NVY1NHoiIGZpbGw9IiMwMENBRTQiLz48cGF0aCBkPSJNNTMuMzYgNzIuMTQ0YTE1LjI5NSAxNS4yOTUgMCAwIDEtNC43NiAzLjQxNiAxNy4zMzMgMTcuMzMzIDAgMCAxLTUuNiAxLjUxMnYtMS44NDhjMi4yNC0uMzM2IDQuMjc1LTEuMTIgNi4xMDQtMi4zNTIgMS44My0xLjIzMiAzLjMyMy0yLjg1NiA0LjQ4LTQuODcyaDEuOTA0djM4LjY0SDUzLjM2VjcyLjE0NHptMTguOTI4IDIyLjY4Yy0uMDM3IDEuNjA1LjIzMyAzLjA2MS44MTIgNC4zNjhhMTAuMDg3IDEwLjA4NyAwIDAgMCAyLjM4IDMuMzZjMS4wMDguOTMzIDIuMTkzIDEuNjUyIDMuNTU2IDIuMTU2IDEuMzYzLjUwNCAyLjgyOC43NTYgNC4zOTYuNzU2IDEuNjQzIDAgMy4xMzYtLjMwOCA0LjQ4LS45MjRhMTAuODUzIDEwLjg1MyAwIDAgMCAzLjQ3Mi0yLjQ5MmMuOTctMS4wNDUgMS43MTctMi4yNzcgMi4yNC0zLjY5Ni41MjMtMS40MTkuNzg0LTIuOTEyLjc4NC00LjQ4IDAtMS41NjgtLjI3LTMuMDQzLS44MTItNC40MjRhMTAuNTQ0IDEwLjU0NCAwIDAgMC0yLjI5Ni0zLjU4NCAxMS4yNTQgMTEuMjU0IDAgMCAwLTMuNS0yLjQwOGMtMS4zNDQtLjU5Ny0yLjgtLjg5Ni00LjM2OC0uODk2LTIuMjQgMC00LjE0NC40NTctNS43MTIgMS4zNzItMS41NjguOTE1LTIuOTY4IDIuMjY4LTQuMiA0LjA2aC0yLjE4NEw3NS4zNjggNjhoMTkuNTQ0djEuODQ4SDc3LjA0OGwtMy4zMDQgMTUuNC4xMTIuMTEyYzEuMTItMS41NjggMi41MS0yLjczNSA0LjE3Mi0zLjUgMS42NjEtLjc2NSAzLjQ2My0xLjE0OCA1LjQwNC0xLjE0OCAxLjkwNCAwIDMuNjU5LjMyNyA1LjI2NC45OCAxLjYwNS42NTMgMi45ODcgMS41NTkgNC4xNDQgMi43MTYgMS4xNTcgMS4xNTcgMi4wNjMgMi41NDggMi43MTYgNC4xNzIuNjUzIDEuNjI0Ljk4IDMuMzg4Ljk4IDUuMjkycy0uMzE3IDMuNjc3LS45NTIgNS4zMmMtLjYzNSAxLjY0My0xLjUzIDMuMDctMi42ODggNC4yODRhMTIuMTIyIDEyLjEyMiAwIDAgMS00LjE0NCAyLjgyOGMtMS42MDUuNjcyLTMuMzc5IDEuMDA4LTUuMzIgMS4wMDgtMS44NjcgMC0zLjYyMS0uMjktNS4yNjQtLjg2OC0xLjY0My0uNTc5LTMuMDgtMS40LTQuMzEyLTIuNDY0LTEuMjMyLTEuMDY0LTIuMTg0LTIuMzctMi44NTYtMy45Mi0uNjcyLTEuNTUtLjk1Mi0zLjI5NS0uODQtNS4yMzZoMi4xMjh6IiBmaWxsPSJ1cmwoI2IpIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iMTA2IiBjeT0iMTE0IiByPSIzMSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg3IDk2Ljg4NykiPjxwYXRoIGQ9Ik0zNC4wODcgMjYuNzczYy0xLjI1Ny0yLjM3NS01Ljg5My01LjA5Mi01Ljg5My01LjA5Mi0xLjA0OS0uNTk5LTIuMzE0LS42NjUtMi45MTMuNDAxIDAgMC0xLjUwNiAxLjgwNi0xLjg4OSAyLjA2Ni0xLjc1IDEuMTg2LTMuMzcgMS4xNC01LjAwOC0uNDk3bC03LjYwNi03LjYwNmMtMS42MzYtMS42MzYtMS42ODItMy4yNTctLjQ5Ny01LjAwNy4yNi0uMzgzIDIuMDY3LTEuODkgMi4wNjctMS44OSAxLjA2Ni0uNTk4IDEtMS44NjQuNC0yLjkxMyAwIDAtMi43MTUtNC42MzUtNS4wOTEtNS44OTJhMi42MDUgMi42MDUgMCAwIDAtMy4wNi40NmwtMS42OCAxLjY4Qy0yLjQxIDcuODEuMjEzIDEzLjgyNSA1LjU0IDE5LjE1M2w5LjczOCA5LjczN2M1LjMyNyA1LjMyNyAxMS4zNDIgNy45NSAxNi42NjkgMi42MjNsMS42OC0xLjY4Yy44MDgtLjgwOS45OTUtMi4wNS40Ni0zLjA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC45NzYpIiBzdHJva2U9InVybCgjYikiLz48cGF0aCBkPSJNMjcuNTU2LjQzN2MtNC44ODggMC04Ljg1IDMuNDQzLTguODUgNy42OTEgMCAxLjU2NS41NCAzLjAyIDEuNDYzIDQuMjM1LS4xMiAxLjQwNC0uNDYgMy43MDUtMS40NTMgNC42NjggMCAwIDMuMDI0LS43MzcgNS4wNzktMS45NGE5Ljk0IDkuOTQgMCAwIDAgMy43Ni43MjhjNC44ODggMCA4Ljg1LTMuNDQ0IDguODUtNy42OTEgMC00LjI0OC0zLjk2Mi03LjY5MS04Ljg1LTcuNjkxIiBmaWxsPSJ1cmwoI2QpIi8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iMjIuNSIgY3k9IjguNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iMzIuNSIgY3k9IjguNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iMjcuNSIgY3k9IjguNSIgcj0iMS41Ii8+PC9nPjwvZz48cGF0aCBkPSJNMjYuMDM1IDE5LjI2OWE2Ljg1NCA2Ljg1NCAwIDEgMSAwIDEzLjcwNyA2Ljg1NCA2Ljg1NCAwIDAgMSAwLTEzLjcwN205NC45NTIuMTkxYTYuODU0IDYuODU0IDAgMSAxIDAgMTMuNzA4IDYuODU0IDYuODU0IDAgMCAxIDAtMTMuNzA3IiBmaWxsPSIjMDAwIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDMyIDEpIiBmaWxsPSJ1cmwoI2MpIiBzdHJva2U9InVybCgjYSkiPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIyOC44MzEiIHJ4PSI1Ii8+PHJlY3QgeD0iOTUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyOC44MzEiIHJ4PSI1Ii8+PC9nPjwvZz48L3N2Zz4="

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY2IiBoZWlnaHQ9IjE4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjOTc5Nzk3IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ny42ODQlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciIHN0b3Atb3BhY2l0eT0iLjMxMyIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iMTMwLjA0NCUiIHkyPSIxNTAuMzc4JSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBEQUUzIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEQ3RTQiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxOC40OTIlIiB5MT0iMTcuMDYxJSIgeDI9IjUxLjAxOSUiIHkyPSIyMy44NDglIiBpZD0iZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRDZFMyIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciIHN0b3Atb3BhY2l0eT0iLjM2NiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBENkUzIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iZyI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iaCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMCUiIHgyPSItMi42MTklIiB5Mj0iMTAwJSIgaWQ9ImkiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVBRTUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDJCNUU0IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNDMuODMzIDM1LjExN2wtNC4zNTkuMzI4LTUuODk0IDMuNTMgOS4xNjQgNy43MDQtMS40MDUgNC45NCA2LjE3IDE4LjYxeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3LjAzMiAzMi43NjkpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2IpIiBkPSJNNzEuOTU4IDYxLjgyNWw4LjkzMSAxNC45NTUgOC4zMzYtOS44OTkgNi4wMzQgOS40ODQgMTAuMzAxIDQuMzk3IDUuNTUzLTMuNjItLjI3Mi0zLjg2NyAzLjQ3OC0zLjM0MiAyLjg4OS04LjEwOC02LjA5NS0xMC4zNTQgNi43NjIgMy44OTYgMS4yNTgtMTQuNDYzLTIuNTE2LTYuNTQ2IDMuODk3LTIuNDY3IDYuNTgzIDYuNjktLjU2NC0yNy41NzMgOC44NzItMS43MDktOS42MTItNC43OTYtNjQuMjI4IDEuODE5LTMuNzkzIDIuOTc3LTkuMjk2LS4yNzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy4wMzIgMzIuNzY5KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgZD0iTTk0LjQzIDEyLjk4NmwxOC45MzYgMTAuNjQ3LTUuODItMTguNTUzem0yNi4xNDUgMTguOTY4bC4xODQtLjU1IDIuNDgyLTcuNDMtOS42NC0uMzUzbS0uMjc0LjA1bDMuMzEyIDEwLjU5M20xLjQ0MiA2LjkxNmwtNDUuODkgMjAuMjMgMTcuMjY1IDUuNDYzem0tNy40ODIgMjMuMTU4bC40Mi0xMy4yNzEgOC4yNDgtMTAuNTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuMDMyIDMyLjc2OSkiLz48cGF0aCBzdHJva2U9InVybCgjYykiIGQ9Ik0xMi44NDQgMTguMDM0SDQuNDYybC00LjQ0NyA4LjAxIDYuODMgNC45MjMgNi43Ni0zLjcyMiA0LjY1IDMuMzE4aDYuNTc3bC44MzggNS4zOTZoOC40Nmw0Ljc0My02LjcyNyA1LjAxIDUuODQ4IDM2LjA0OCA2LjY5N0w0Ny45NCA4LjQ3NSAzMy44MjYuOTgzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3LjAzMiAzMi43NjkpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNTI3IiBkPSJNNC40NzYgMTguMzQybDIuMjQ3IDExLjU3NyA2LjA1NS0xMS44NTkuOTggOS4yMzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy4wMzIgMzIuNzY5KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgb3BhY2l0eT0iLjUyNiIgZD0iTTQ4LjAwMyA3MS42NThMNTYuMDggNTEuMjdsMjQuMDM3LTkuMzcxLTguMjg3IDIwLjA3Ni0xNS43NS0xMC40MDggNS45OTUgOS44MDktNS45OTUgOS4zNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy4wMzIgMzIuNzY5KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgb3BhY2l0eT0iLjUyNyIgZD0iTTYwLjMzNCA3LjMxOGwzNC4yNDIgNS42NTItMTQuNTk0IDI4Ljk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuMDMyIDMyLjc2OSkiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik0xMDcuNjUgNS4yNzdsMTUuNjYxIDE4Ljg4IDMuNzExIDQuNDczLTYuMzU2IDMuMTk0bS03LjE3Ni04LjE2NGw3LjIgOC4xODJNMTA3LjkzNiA1LjIybDE4LjU0OCA2LjU5Ny0xLjczMi03LjNNODkuNjU1IDY2LjkwNGwyMC44MDItMi42MzIuNTM0IDguOTY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuMDMyIDMyLjc2OSkiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik0xMy42NDcgMTYuMTc2TDguMzYgNy43OTkgMjAuNTc3LjM2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0yMC41NjQuNTAyTC42NS45OTIiIHN0cm9rZT0idXJsKCNhKSIgb3BhY2l0eT0iLjMzNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgZD0iTTM5LjIyIDYuNzEybDE2Ljk3Mi0zLjMzOSA0LjQyNSAxMi4yNW02LjM1OC04Ljg5Nmg1Ljc0M2wtMy4yNTYtMy42MTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNzM5IiBkPSJNODIuMzE3IDQuODgzbDUuNTQ2IDcuMjQ1IDEwLjc0LTQuNTgtOS43NDQtMy43OTQtMS44MTcgMTUuMjUyLTcuMzM3LTkuODU2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik04Mi41IDQuODlsNi4zMy0xLjE4Nk0zNy41ODEgNzUuNzc1bC0yNC4zOTkgMTcgNy4zMzQgMTMuNjc2em0zMC42MDcgMjguNDE2bC0yMS4xNzUtOC4zOG0tNy42MTkgNDQuMjg1bC0xMy44NC04LjIxLTEuOTg3LTE5Ljk3TTg5LjEgNjAuNjE3bDIuODMgMjQuNDQzIDEzLjc0OCA1LjUxNyA2LjQzNy42MSA0LjkwOCA0Ljg0Ljk4NCAxNi44Ni0zLjU3NyAxNi4wMzcgMjEuMjEtOS41MjcgMjMuMjEtMzUuMzM1LTEyLjE3My0yLjI3LTIuMDMxLTIxLjE3Ni0xOC40MDItOS42Ny05LjIyMS04LjE2OS03LjU2NSA0Ljg3MS0xMi45MDMgNC43MjZ6IiBzdHJva2U9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii42MDIiIGQ9Ik0xMTEuMTc1IDkwLjk3NmwxNC43MDctMTkuODk1LTguNzc3IDI0LjkyOSAyOS42OS0xNC4xOTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBkPSJNMTQ2Ljg5IDgxLjgwNEwxMjYuMzg0IDcwLjIyIiBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii41MjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBkPSJNMTE4LjE5OCAxMTIuODEybDE3LjMyOCA2LjY3Mm04LjI3IDIuODg2bDcuMzY1LTcuMzc2TTExNi44NSAyMC42MzlsMzUuNzItOC44OW04OS4zMTUgNzUuMTc3bDMuNjYzIDguODEyIDMuMTctNy4yMjRtLTI4LjMwNyAzNC44NjhsNy45ODItNS44MTctMy45OS0xMy4zNDZtNC4wMjMgMTMuMzA2bDE2LjUgNS45NDQiIHN0cm9rZT0idXJsKCNhKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0yMTYuMzQ1IDExNC4xM2w3LjY2OC05Ljk3NSAxMC40NDQtNC40MDcgOS44NTQuMzYzIDE3LjUyOSAxMi4wOTEtNy4xOTggMjMuNDQ2LTkuNzc0LTEyLjE4Mi0xMi44MzcgNC44MDUtMTEuNTY1LTQuODA1LTQuMTIxLTkuMzM3eiIgc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNzM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2QpIiBkPSJNMjMxLjk1MyAxMjguMjUzbC0zLjU0NC0xMC43NjIgMjAuNzA2LTE0LjA3NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0yNDkuNDE3IDEwMy42OTRsNS4zMTIgMzEuODQ1IiBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii40MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii40NjIiIGQ9Ik0xLjI0MiAzNC4yOThMMTMuMjcgMTYuMThsMS44MyA0MC43NTMgMjEuOTAxIDE4LjQ2Nmg1LjM2M2wxMC42MTUgNDYuMjU1TDQ5IDEzMy43MzggMjAuMjYgMTA2LjQxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2UpIiBkPSJNMS4zNDUgMzQuMjcybDM1LjggNDAuOTEtNy41Ni0yNy43MSAxMS44OC0xLjUtMjguMDI4LTMwLjEyTDIwLjU0My40MTkgMzkuNCA2Ljc5bDIxLjIyNiA5LjA2IDEyLjkzNyA5LjIzNy0xLjU1Ni0xNC4wNzMtMzEuOTkzIDE0LjA3MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0uNC45NDRsNy45MjcgNi44NzhtNS4zMjYgOC4wOTZsMjUuNTE0LTkuMTU2IDIuNDg3IDM5LjA0N0w2MC43MSAxNS45MThNNTYuMzUgMy40NTNsNi45MDQgNi40MDUtNC4yMjQuNzg1TTc3LjE1IDcuMzJsMi4xLTIuNjE0aC0yLjU2NnptMi42MjQgMS45MzZsOC4wMTQgMi43NjhNMTQuODMgNDkuNjAxbDE0LjgzNC0yLjEzNC01Ljk5IDEyLjE1LTguMzctMi42MyIgc3Ryb2tlPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2YpIiBkPSJNMjAuNTA4IDEwNi40ODdsMzMuNDQ2LTEzLjczM2g1Ljc2M2w4LjQ2MiAxMS41MzQtMTQuODU2IDE3LjE2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik01My45NzcgOTIuNzUzbC0xMS41MjktMTcuMzNNMjAuNjUgMTA2LjYzNWwxOC43MDEgMzMuNTY4IDkuNjU0LTYuNDY3IiBzdHJva2U9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii41OCIgZD0iTTI1LjU3NSAxMzIuMDMzbDMuMzg5IDE2LjA0NyA3Ljk4NyA1LjkxMyAxLjkwNi0yLjkyLjU0NS0xMS4wNjktMTAuNDM4IDguMDc2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2cpIiBkPSJNODkuMTY3IDYwLjgyNmwyMS40MiAyOC44ODItMTMuNzctMzcuMzA5IDI5LjU5NCAxNy40NDdWNTAuODA5bC0xNi44LTMuMTU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggZD0iTTEyNi41NzIgNjkuOTUxbDE4LTkuMjU4bTIuMjg1IDIxLjA3N2wtMTEuMjk2IDM3LjU5NC0xOC42NS0yMy40NjVtMjYuODg2IDI2LjUyNmwzLjYxLTEzLjAyOCAzLjc3NCA1LjY5MSIgc3Ryb2tlPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNTQyIiBkPSJNMTI4LjkyOCAzMy4yNDVsNC41OTktMTYuODAxIDkuNDgxIDE1LjU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBkPSJNMTE2Ljg2NSAxNy4wNmwtLjg0OC02LjkzLTYuNzA0IDUuNjY0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgdHJhbnNmb3JtPSJyb3RhdGUoLTExMCAyMzQuODA4IDEwNC4xMDkpIiBkPSJNMjE5LjkyIDg3Ljc2Mmw0LjI2Mi00LjU5NS40NTYgNy41MzMgMS4wNDUgMi4wOTYtMi44ODEgNC4yNzUtMi44ODEtMy43MjJ6Ii8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNDU5IiBkPSJNMjM1LjY2MiA4OC41NzZsNi4zODQtMS43MzMgNi43MTkgMS43MzMgMy45ODUgMTAuMTg4LTcuMjY3LTIuOTRoLTUuMDR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggZD0iTTE0MyA1MS41YzAtMTQuMDgzLTcuNTA3LTIzLjUtMTgtMjMuNXMtMTcgMTYuNDE3LTE3IDMwLjVtMTI2LjE2MiA3OS42NjVjMC0xNC4wODMtMTIuMjAyLTc2LjU5LTQyLjI2Mi03Ny40MzdDMTYxLjg0IDU5Ljg4IDE1NSA5MS40MTcgMTU1IDEwNS41bS0xMTAtMzdjMC0xNC4wODMtMTEuMjAzLTIyLjY0OC0xNi0yMi42NDgtNC43OTcgMC0xOSAuNTY1LTE5IDE0LjY0OG05OC01YzAtMTQuMDgzLTguNjUtMzYuODUtMzEuMjg4LTM2Ljg1LTIyLjYzOCAwLTMxLjI4OCAzNi41NjQtMzEuMjg4IDUwLjY0NyIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjIsNCIvPjxwYXRoIGQ9Ik0xNTQuMjUgMTAzLjMxNmMwLTE0LjA4My0yNC4wODYtNTQuMzQzLTYxLjA1Ny01NC44MzQtMzYuOTctLjQ5LTQ3LjU3NiAxNy42NDktNDcuNzcgMjAuODE1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMiw0Ii8+PHBhdGggZD0iTTEwNy42OSA1Ni4zMTZjMC0xNC4wODMtNy4xNTMtNTUuMTAxLTQ2LjM1Mi01NS4xMDEtMzkuMiAwLTUxLjkxNCA0Ni45OTktNTEuOTE0IDYxLjA4MiIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjIsNCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4yMjMgOTMuMjIzKSI+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuNCIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjIuNTUxIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMzA1IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iNS4xOTMiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4xMTkiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI5Ljc2MiIvPjxjaXJjbGUgZmlsbD0idXJsKCNpKSIgY3g9IjkuODUyIiBjeT0iOS44NTIiIHI9IjEuMDcxIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMy4yMjMgNDEuMjIzKSI+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuNCIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjIuNTUxIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMzA1IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iNS4xOTMiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4xMTkiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI5Ljc2MiIvPjxjaXJjbGUgZmlsbD0idXJsKCNpKSIgY3g9IjkuODUyIiBjeT0iOS44NTIiIHI9IjEuMDcxIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4LjIyMyA0OS4yMjMpIj48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii40IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iMi41NTEiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4zMDUiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI1LjE5MyIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjExOSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjkuNzYyIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2kpIiBjeD0iOS44NTIiIGN5PSI5Ljg1MiIgcj0iMS4wNzEiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUuMjIzIDU5LjIyMykiPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjQiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSIyLjU1MSIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjMwNSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjUuMTkzIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMTE5IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iOS43NjIiLz48Y2lyY2xlIGZpbGw9InVybCgjaSkiIGN4PSI5Ljg1MiIgY3k9IjkuODUyIiByPSIxLjA3MSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMjIzIDUwLjIyMykiPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjQiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSIyLjU1MSIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjMwNSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjUuMTkzIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMTE5IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iOS43NjIiLz48Y2lyY2xlIGZpbGw9InVybCgjaSkiIGN4PSI5Ljg1MiIgY3k9IjkuODUyIiByPSIxLjA3MSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjQuMjIzIDEyOC4yMjMpIj48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii40IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iMi41NTEiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4zMDUiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI1LjE5MyIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjExOSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjkuNzYyIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2kpIiBjeD0iOS44NTIiIGN5PSI5Ljg1MiIgcj0iMS4wNzEiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM3IiBoZWlnaHQ9IjE0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjExLjM1NSUiIHkxPSIxMTMuOTgzJSIgeDI9IjkyLjEwMSUiIHkyPSItMjguMjczJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiMwQjBCMEEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjNDY0RjUxIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSItMTEuNTA2JSIgeTE9Ii0yMS43MTIlIiB4Mj0iNTAlIiB5Mj0iOTYuOTczJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiM3MjcxNzEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFN0UyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzk5OTI5MiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0U5RjJGNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNGN0Y4RjkiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC4yNjMgLjcyMykiIGZpbGw9InVybCgjYSkiPjxwYXRoIGQ9Ik02MC4yMzcuMjYzbDEuNzg0LjU1YzUuNTE2IDEuNzY5IDM0LjIzNyAxMS41OCA1Ny4wOTIgMzAuNzk0bDEuMjM2Ljg3Ny0uMjc0IDEuNTQ4aC0uMDAzYy0uMjk0IDIuMTY2LTMuMTgyIDE2LjA2MS0xMC44NjMgMzEuMDQ2LTQuOTUxIDkuNjQ5LTEwLjk1NiAxOC4wNS0xNy44NDggMjQuOTcxLTguNTAzIDguNTIzLTE4LjM2MyAxNC44MjctMjkuMzA2IDE4LjczOGwtLjYyLjIxOC0xLjE2NC40NS0xLjc4Ni0uNjI4Yy0xMS4wMTEtMy45MzYtMjAuODcyLTEwLjI0LTI5LjMxNy0xOC43NDItNi45My02Ljk5OS0xMi45MzUtMTUuMzk5LTE3Ljg0NS0yNC45N0MzLjY4NiA1MC4xODQuOTQ3IDM2LjcxOS40NzYgMzQuMTdsLS4yOC0xLjU2OCAxLjEzOC0uOTU2QzI0LjE5NSAxMi40MDcgNTIuOTU0IDIuNTgzIDU4LjQ4Ni44MWwxLjc1LS41NDZ6bS0yOC45MyA4OC4wMTRjOC4zNjUgOC4zODUgMTguMSAxNC42MDYgMjguOTM4IDE4LjQ5NiAxMC44LTMuODc2IDIwLjUzNC0xMC4xMTEgMjguOTQtMTguNTM2IDYuODc2LTYuOTA3IDEyLjg5MS0xNS4zMzQgMTcuODc3LTI1LjA0NyA2LjgxMS0xMy4yODQgOS43NTctMjUuMjIgMTAuNzAzLTI5LjcxNS0yMi43MzQtMTguNjQtNTAuODgyLTI4LjQ2OC01Ny41MjItMzAuNjItNi42MDcgMi4xMjMtMzQuNjE0IDExLjgzNy01Ny41MiAzMC42MjEuOTM4IDQuNTEgMy44NyAxNi40OTQgMTAuNzA1IDI5Ljc5MiA0Ljk2IDkuNjYgMTAuOTc0IDE4LjA3MyAxNy44NzkgMjUuMDA5eiIgc3Ryb2tlPSJ1cmwoI2IpIiBvcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik01MC45MDggMjQuNzY5Yy0uMDM5IDAtMTguMTYxIDUuNzUyLTE4LjE2MSAyMS40ODQgMCAxNS43MzEgMTcuNDkyIDIzLjM2MiAzMC4zNzQgMjMuMzYyIDcuMDA3IDAgMTIuNzYyLTIuMDI2IDE2LjU1OS0zLjg3NC40OS0yLjIzIDIuMjY5LTcuNTEyIDguMTU2LTcuNTUxIDEuMDUtLjA0IDIuMDM1LjE1NSAyLjg2My42MjQgMy45NCAyLjExNCAxLjM3OCA2LjA2NiAxLjM3OCA2LjA2NmE4LjkxOCA4LjkxOCAwIDAgMCAuOTAxLS4xOTNjNC43MzUtMS4yNjcgMTAuMDctNi42NDcgOS4xNDUtMTUuNjU2LS43NDItNy4yMjQtNy40NTQtMTEuODAzLTEwLjcyLTEzLjYyMi0xLjA2OC0uNTk1LTEuNzY4LS44OTYtMS43NjgtLjg5NmExMC45OCAxMC45OCAwIDAgMCAuMTU2LTEuNzM3YzAtLjA4Mi0uMDAxLS4xNTktLjAwNC0uMjN2LS44NDdDNzIuNjUzIDIxLjM3NSA1OC4xNTMgMTkuNzg0IDUxLjAwMiAxOS43ODRjLTMuMDkgMC00LjgyMS4yODktNC44MjEuMjg5bDQuNzI3IDQuNjk2em0zNi4yMDUgOS43ODNzLTIuMzI0LS43NDQtNC42ODgtMS4wNTdjLTEuMTgyIDEuMjEzLTIuMjA2IDEuNzIyLTIuNTIxIDEuODc5bC0uMDguMDc4Yy02Ljg5My0xLjQ0OC05LjM3NS00Ljk3LTkuMzc1LTQuOTcgNi41LS4wMzkgMTIuMzcgMS40ODcgMTYuNjY0IDQuMDd6IiBzdHJva2U9InVybCgjYykiLz48cGF0aCBkPSJNOTMuNTM1IDQ0LjI5NmMwIDUuMTI3LTIuMTI3IDkuODYyLTUuNzUyIDEzLjY5N2wtLjE3Mi4xOTZoLjI5Yy45ODUtLjA0IDEuOTcuMTU2IDIuNzk4LjYyNSAzLjk0IDIuMTE0IDEuMzc4IDYuMDY2IDEuMzc4IDYuMDY2IDQuOTI1LS43ODMgMTEuMDMxLTYuMjYgMTAuMDQ2LTE1Ljg0OS0uNzQyLTcuMjI0LTcuNDU0LTExLjgwMy0xMC43Mi0xMy42MjJhMTkuNSAxOS41IDAgMCAxIDIuMTMyIDguODg3IiBzdHJva2U9InVybCgjZCkiLz48cGF0aCBkPSJNMTMuNzk4IDYyLjI1OGMwIC42MzUuMDI1IDEuMjM5LjA2IDEuODMgNC44NzYgOS4zMTQgMTAuNzQgMTcuNDUgMTcuNDQ5IDI0LjE4OSA4LjM2NSA4LjM4NSAxOC4xIDE0LjYwNiAyOC45MzggMTguNDk2IDEwLjgtMy44NzYgMjAuNTM0LTEwLjExMSAyOC45NC0xOC41MzZhODkuODQgODkuODQgMCAwIDAgNy4xMjctOC4xQzc4LjMzOSA3OC44NTUgNzkuNDMgNjguMDEyIDc5LjQzIDY4LjAxMmMwLS40MyAwLS44NjEuMDc5LTEuMjkyIDAgMCAuMDQtLjM4LjE3LS45NzgtMy43OTYgMS44NDgtOS41NTIgMy44NzQtMTYuNTU5IDMuODc0LTEyLjg4MiAwLTMwLjM3NC03LjYzLTMwLjM3NC0yMy4zNjJTNTAuODY4IDI0Ljc3IDUwLjg2OCAyNC43N2wtLjAxLS4wMDNhMTguOTM1IDE4LjkzNSAwIDAgMC0xLjQwOC0uMDM3Yy0xOS44MTYuNzA1LTM1LjY1MyAxNy4yMTktMzUuNjUzIDM3LjUzIiBzdHJva2U9InVybCgjYikiLz48L2c+PGNpcmNsZSBmaWxsPSJ1cmwoI2EpIiBjeD0iMTA1IiBjeT0iMTEwIiByPSIzMSIvPjxwYXRoIGQ9Ik05Ni42NiAxMjIuOTk1QTE0LjQ3NiAxNC40NzYgMCAwIDEgOTEgMTExLjVjMC04LjAwOCA2LjQ5Mi0xNC41IDE0LjUtMTQuNXMxNC41IDYuNDkyIDE0LjUgMTQuNWMwIDUuMDEzLTIuNTQ0IDkuNDMyLTYuNDEyIDEyLjAzN2wtNC42NDMtOC4zNDRhNS4wNSA1LjA1IDAgMSAwLTcuNDItLjU3N2wtNC44NjUgOC4zNzl6IiBzdHJva2U9InVybCgjZSkiLz48L2c+PC9zdmc+"

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  background: white;\n\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .item {\n    margin-top: 20px;\n    max-width: 400px;\n  }\n  h2 {\n    font-size: 26px;\n    margin: 12px 0;\n  }\n  p {\n    font-size: 16px;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n  .cta button {\n    margin: 0 5px;\n  }\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  background: white;\n\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .item {\n    margin-top: 20px;\n    max-width: 400px;\n  }\n  h2 {\n    font-size: 26px;\n    margin: 12px 0;\n  }\n  p {\n    font-size: 16px;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n  .cta button {\n    margin: 0 5px;\n  }\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(3);

var _web = __webpack_require__(2);

var _ = __webpack_require__(4);

var _focus = __webpack_require__(133);

var _focus2 = _interopRequireDefault(_focus);

var _proactive = __webpack_require__(134);

var _proactive2 = _interopRequireDefault(_proactive);

var _heart = __webpack_require__(135);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Main = (0, _styledComponents2.default)(_web.Section)(_templateObject, _ui.theme.textSecondary, medium('\n    padding-top: 128px;\n    padding-bottom: 128px;\n    .columns {\n      flex-direction: row;\n      align-items: flex-start;\n      flex-wrap: wrap;\n      margin: 70px 0;\n    }\n    .item {\n      width: 33%;\n      margin-top: 0;\n      padding: 0 25px;\n    }\n    .item:nth-child(1) {\n      padding-left: 0;\n    }\n    .item:nth-child(3) {\n      padding-right: 0;\n    }\n  '));

var Value = function Value() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_.SectionTitle, { title: 'Things we value in people' }),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _focus2.default, alt: '', width: '32', height: '32' }),
          _react2.default.createElement(
            'h2',
            null,
            'Focus-driven work'
          ),
          _react2.default.createElement(
            'p',
            null,
            'We don\'t necessarily work 9-5; getting the work done, meeting goals and milestones is more important. You can work however it suits your personal schedule as long as you\'re focused on delivering quality work'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _proactive2.default, alt: '', width: '32', height: '32' }),
          _react2.default.createElement(
            'h2',
            null,
            'Proactive attitude'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Working remotely and autonomously, having a positive and proactive attitude with a love for time self-management is essential to our day-to-day operations. Own your work and be proud of what you do'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _heart2.default, alt: '', width: '32', height: '32' }),
          _react2.default.createElement(
            'h2',
            null,
            'The value that you bring'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Every person has a unique set of skills that bring meaning to what we are doing. We value what you can do and your attitude in doing it. Our goal is to enable you to realize the value which you can bring to the project'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cta' },
        _react2.default.createElement(
          _.Anchor,
          { mode: 'strong', href: 'https://wiki.aragon.one/jobs' },
          'View open positions'
        )
      )
    )
  );
};

exports.default = Value;

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAzKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMgNi42MDd2Ni41YS40NTguNDU4IDAgMCAxLS40NjQuNDY0SDcuODkzYS40NTguNDU4IDAgMCAxLS40NjQtLjQ2NHYtLjkyOGMwLS4yNjIuMjAzLS40NjUuNDY0LS40NjVoMy4yNVY2LjYwN2MwLS4yNjEuMjAzLS40NjQuNDY0LS40NjRoLjkyOWMuMjYgMCAuNDY0LjIwMy40NjQuNDY0em02LjAzNiA1LjEwN2MwLTQuMzUyLTMuNTQtNy44OTMtNy44OTMtNy44OTNTMy4yNSA3LjM2MSAzLjI1IDExLjcxNHMzLjU0IDcuODkzIDcuODkzIDcuODkzIDcuODkzLTMuNTQgNy44OTMtNy44OTN6bTMuMjUgMGMwIDYuMTUyLTQuOTkxIDExLjE0My0xMS4xNDMgMTEuMTQzQzQuOTkgMjIuODU3IDAgMTcuODY3IDAgMTEuNzE0IDAgNS41NjIgNC45OTEuNTcxIDExLjE0My41NzFjNi4xNTIgMCAxMS4xNDMgNC45OTEgMTEuMTQzIDExLjE0M3oiIGZpbGw9IiNBNzgxRkYiLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIxOS41IiBjeT0iMTkuNSIgcj0iNi41Ii8+PHBhdGggZD0iTTI1LjU5IDIzLjA5YS44NjYuODY2IDAgMCAwLS4yNS0uNjA4bC0yLjYyNi0yLjYyNSAyLjYyNS0yLjYyNWEuODY2Ljg2NiAwIDAgMCAwLTEuMjE0bC0xLjIxNC0xLjIxNGEuODY2Ljg2NiAwIDAgMC0xLjIxNCAwbC0yLjYyNSAyLjYyNS0yLjYyNS0yLjYyNWEuODY2Ljg2NiAwIDAgMC0xLjIxNSAwbC0xLjIxNCAxLjIxNGEuODY2Ljg2NiAwIDAgMCAwIDEuMjE0bDIuNjI1IDIuNjI1LTIuNjI1IDIuNjI1YS44NjYuODY2IDAgMCAwIDAgMS4yMTRsMS4yMTQgMS4yMTVhLjg2Ni44NjYgMCAwIDAgMS4yMTUgMGwyLjYyNS0yLjYyNSAyLjYyNSAyLjYyNWEuODY2Ljg2NiAwIDAgMCAxLjIxNCAwbDEuMjE0LTEuMjE1YS44NjMuODYzIDAgMCAwIC4yNS0uNjA3eiIgZmlsbD0iI0E3ODFGRiIvPjwvZz48L3N2Zz4="

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjA3MiAxNy45MzRoOS43NWE1LjMxNyA1LjMxNyAwIDAgMS0xLjk1IDIuMzUzIDUuMTMgNS4xMyAwIDAgMS0yLjkzOC44OTcgNS4wNyA1LjA3IDAgMCAxLTIuOTI1LS44OTcgNS4zNDYgNS4zNDYgMCAwIDEtMS45MzctMi4zNTN6bTQuODYyIDUuMzgyYTcuNDg3IDcuNDg3IDAgMCAwIDMuMTk4LS43MDIgNy40NTYgNy40NTYgMCAwIDAgMi41NjEtMS45MzcgNy4zNDUgNy4zNDUgMCAwIDAgMS40OTUtMi43OTVsLjMxMi4wNTJjLjU5IDAgMS4xLS4yMTcgMS41MzQtLjY1LjQzMy0uNDMzLjY1LS45NDUuNjUtMS41MzQgMC0uNTktLjIxNy0xLjEtLjY1LTEuNTM0LS40MzMtLjQzMy0uOTQ1LS42NS0xLjUzNC0uNjVsLS4zMTIuMDUyYTcuMzI1IDcuMzI1IDAgMCAwLTEuNDk1LTIuODIxIDcuMzE2IDcuMzE2IDAgMCAwLTIuNTYxLTEuOTI0IDcuNjA1IDcuNjA1IDAgMCAwLTMuMTk4LS42ODljLTEuMTI3IDAtMi4xOTMuMjMtMy4xOTguNjg5YTcuMzE2IDcuMzE2IDAgMCAwLTIuNTYxIDEuOTI0IDcuMzI1IDcuMzI1IDAgMCAwLTEuNDk1IDIuODIxbC0uMzEyLS4wNTJjLS41OSAwLTEuMS4yMTctMS41MzQuNjUtLjQzMy40MzMtLjY1Ljk0NS0uNjUgMS41MzQgMCAuNTkuMjE3IDEuMS42NSAxLjUzNC40MzMuNDMzLjk0NS42NSAxLjUzNC42NWwuMzEyLS4wNTJhNy4zNDUgNy4zNDUgMCAwIDAgMS40OTUgMi43OTUgNy40NTYgNy40NTYgMCAwIDAgMi41NjEgMS45MzcgNy40ODcgNy40ODcgMCAwIDAgMy4xOTguNzAyem0xMS44My02Ljg2NGE0LjQ1IDQuNDUgMCAwIDEtMS4wMTQgMi4xNzEgNC4wMDEgNC4wMDEgMCAwIDEtMS45NzYgMS4yODcgOS40NzMgOS40NzMgMCAwIDEtMi4wMjggMi43ODIgMTAuMTU3IDEwLjE1NyAwIDAgMS0zLjA0MiAyLjAyOGMtMS4yMTMuNTItMi40Ny43OC0zLjc3Ljc4LTEuMyAwLTIuNTQ4LS4yNi0zLjc0NC0uNzhhMTAuMDY3IDEwLjA2NyAwIDAgMS0zLjAxNi0yLjAwMmMtLjg4NC0uODUtMS41Ni0xLjc4NS0yLjAyOC0yLjgwOGE0LjIyOSA0LjIyOSAwIDAgMS0yLjAxNS0xLjI4NyA0LjExNyA0LjExNyAwIDAgMS0xLjAyNy0yLjE3MUEzLjA1NiAzLjA1NiAwIDAgMSA0IDE1LjcyNGMwLS4yMDguMDM1LS40MzMuMTA0LS42NzZhNC4xMTcgNC4xMTcgMCAwIDEgMS4wMjctMi4xNzEgNC4yMjkgNC4yMjkgMCAwIDEgMi4wMTUtMS4yODdjLjYwNy0xLjI4MyAxLjM4Ny0yLjMzMSAyLjM0LTMuMTQ2YTkuNDY2IDkuNDY2IDAgMCAxIDIuOTUxLTEuODA3QTkuNjMgOS42MyAwIDAgMSAxNS45MzQgNmMxLjMxNyAwIDIuNTc0LjI1MSAzLjc3Ljc1NGExMC4wNjcgMTAuMDY3IDAgMCAxIDMuMDE2IDIuMDAyIDkuNDcxIDkuNDcxIDAgMCAxIDIuMDAyIDIuODM0Yy43OC4yMjUgMS40NTIuNjU0IDIuMDE1IDEuMjg3YTQuMTE3IDQuMTE3IDAgMCAxIDEuMDI3IDIuMTcxYy4wNy4yNDMuMTA0LjQ2OC4xMDQuNjc2IDAgLjIwOC0uMDM1LjQ1LS4xMDQuNzI4em0tMTUuODg2LTIuMzRjMC0uMzgxLjEzNC0uNzAyLjQwMy0uOTYycy41OTQtLjM5Ljk3NS0uMzkuNjkzLjEzLjkzNi4zOWMuMjQzLjI2LjM2NC41OC4zNjQuOTYyIDAgLjM4MS0uMTI2LjcwNi0uMzc3Ljk3NWExLjIzIDEuMjMgMCAwIDEtLjkzNi40MDNjLS4zNzMgMC0uNjkzLS4xMzQtLjk2Mi0uNDAzYTEuMzI4IDEuMzI4IDAgMCAxLS40MDMtLjk3NXptNS40MzQgMGMwLS4zODEuMTI2LS43MDIuMzc3LS45NjJzLjU2OC0uMzkuOTQ5LS4zOS43MDIuMTMuOTYyLjM5LjM5LjU4LjM5Ljk2MmMwIC4zODEtLjEzLjcwNi0uMzkuOTc1cy0uNTguNDAzLS45NjIuNDAzYy0uMzgxIDAtLjY5OC0uMTMtLjk0OS0uMzlzLS4zNzctLjU5LS4zNzctLjk4OHoiIGZpbGw9IiNBNzgxRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjkyIDIyLjg0OGMyLjE1LTEuOTI0IDMuNjU3LTMuMzIgNC41MjQtNC4xODYgMS4zNTItMS4zNTIgMi4zNDktMi41MyAyLjk5LTMuNTM2LjcxLTEuMTI3IDEuMDY2LTIuMTkzIDEuMDY2LTMuMTk4IDAtLjcxLS4xNjUtMS4zNTItLjQ5NC0xLjkyNGEzLjUyIDMuNTIgMCAwIDAtMS4zNTItMS4zMzljLS41NzItLjMyLTEuMjIyLS40ODEtMS45NS0uNDgxYTQuMTcgNC4xNyAwIDAgMC0yLjM1My43MTVjLS43Mi40NzctMS4yMjYgMS4wODgtMS41MjEgMS44MzNoLTIuMDI4Yy0uMjc3LS43NDUtLjc4LTEuMzU2LTEuNTA4LTEuODMzYTQuMTk1IDQuMTk1IDAgMCAwLTIuMzQtLjcxNWMtLjcyOCAwLTEuMzgyLjE2LTEuOTYzLjQ4MS0uNTguMzItMS4wMzYuNzY3LTEuMzY1IDEuMzM5YTMuNzg2IDMuNzg2IDAgMCAwLS40OTQgMS45MjRjMCAxLjAwNS4zNTUgMi4wNzEgMS4wNjYgMy4xOTguNjQxIDEuMDA1IDEuNjM4IDIuMTg0IDIuOTkgMy41MzYuODY3Ljg2NyAyLjM3NSAyLjI2MiA0LjUyNCA0LjE4NmwuMTA0LjEwNC4xMDQtLjEwNHpNMjAuNzA0IDZjMS4wOTIgMCAyLjA5My4yNiAzLjAwMy43OGE1LjY2NSA1LjY2NSAwIDAgMSAyLjE0NSAyLjE0NWMuNTIuOTEuNzggMS45MTEuNzggMy4wMDMgMCAxLjMtLjM4MSAyLjYxNy0xLjE0NCAzLjk1Mi0uNjc2IDEuMTYxLTEuNzUgMi40ODctMy4yMjQgMy45NzgtLjg4NC45MDEtMi41MDUgMi40MjctNC44NjIgNC41NzZsLTEuNTg2IDEuNDMtMS41Ni0xLjM3OGMtMi4zMjMtMi4xMTUtMy45NTItMy42NDktNC44ODgtNC42MDItMS40NzMtMS40OS0yLjU0LTIuODE3LTMuMTk4LTMuOTc4QzUuMzkgMTQuNTcxIDUgMTMuMjQ2IDUgMTEuOTI4YTUuODcgNS44NyAwIDAgMSAuNzkzLTMuMDAzQTUuNzg5IDUuNzg5IDAgMCAxIDcuOTM4IDYuNzhDOC44MzkgNi4yNiA5Ljg0NSA2IDEwLjk1NCA2Yy45MTkgMCAxLjgxMS4yMDggMi42NzguNjI0Ljg2Ny40MTYgMS41OTUuOTcgMi4xODQgMS42NjRBNi41MzcgNi41MzcgMCAwIDEgMTggNi42MjQgNi4xNzcgNi4xNzcgMCAwIDEgMjAuNzA0IDZ6IiBmaWxsPSIjQTc4MUZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.32bfcad6.js.map