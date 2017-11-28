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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@aragon/ui");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AragonNetwork = __webpack_require__(15);

Object.defineProperty(exports, 'AragonNetwork', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AragonNetwork).default;
  }
});

var _Page = __webpack_require__(17);

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Page).default;
  }
});

var _PageTitle = __webpack_require__(18);

Object.defineProperty(exports, 'PageTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PageTitle).default;
  }
});

var _ReadyToTry = __webpack_require__(20);

Object.defineProperty(exports, 'ReadyToTry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ReadyToTry).default;
  }
});

var _SectionTitle = __webpack_require__(4);

Object.defineProperty(exports, 'SectionTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SectionTitle).default;
  }
});

var _Anchor = __webpack_require__(23);

Object.defineProperty(exports, 'Anchor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Anchor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  pointer-events: none;\n  margin-top: -', 'px;\n  padding: ', 'px 15px 50px;\n\n  ', ';\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: ', 'px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #161817;\n  }\n  &:after {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: url(', ') no-repeat 50% 0;\n  }\n'], ['\n  position: relative;\n  z-index: 1;\n  pointer-events: none;\n  margin-top: -', 'px;\n  padding: ', 'px 15px 50px;\n\n  ', ';\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: ', 'px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #161817;\n  }\n  &:after {\n    content: \'\';\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: url(', ') no-repeat 50% 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: calc(50% + ', 'px);\n  background: url(', ') repeat-x 0 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _background = __webpack_require__(32);

var _background2 = _interopRequireDefault(_background);

var _leftRepeat = __webpack_require__(33);

var _leftRepeat2 = _interopRequireDefault(_leftRepeat);

var _rightRepeat = __webpack_require__(34);

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

var Main = _ui.styled.div(_templateObject, OVERLAP_HEIGHT, OVERLAP_HEIGHT + 80, large('\n    padding-top: ' + (OVERLAP_HEIGHT + 120) + 'px;\n  '), BG_HEIGHT, _background2.default);

var Left = _ui.styled.div(_templateObject2, BG_WIDTH / 2, _leftRepeat2.default);

var Right = _ui.styled.div(_templateObject3, BG_WIDTH / 2, _rightRepeat2.default);

var OverlapBackground = function OverlapBackground(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    Main,
    props,
    _react2.default.createElement(Left, null),
    _react2.default.createElement(
      'div',
      null,
      children
    ),
    _react2.default.createElement(Right, null)
  );
};

exports.default = OverlapBackground;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  h1 {\n    font-size: 18px;\n    text-align: center;\n    font-weight: bold;\n  }\n'], ['\n  h1 {\n    font-size: 18px;\n    text-align: center;\n    font-weight: bold;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSectionTitle = _ui.styled.div(_templateObject);

var SectionTitle = function SectionTitle(_ref) {
  var title = _ref.title,
      className = _ref.className;
  return _react2.default.createElement(
    StyledSectionTitle,
    null,
    _react2.default.createElement(
      _ui.Text,
      { heading: 1, smallcaps: true, color: _ui.theme.accent, className: className },
      title
    )
  );
};

exports.default = SectionTitle;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _Home = __webpack_require__(14);

var _Home2 = _interopRequireDefault(_Home);

var _Core = __webpack_require__(44);

var _Core2 = _interopRequireDefault(_Core);

var _Network = __webpack_require__(62);

var _Network2 = _interopRequireDefault(_Network);

var _Foundation = __webpack_require__(68);

var _Foundation2 = _interopRequireDefault(_Foundation);

var _About = __webpack_require__(74);

var _About2 = _interopRequireDefault(_About);

var _Join = __webpack_require__(100);

var _Join2 = _interopRequireDefault(_Join);

var _NotFound = __webpack_require__(113);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var templateMap = {
  t_0: _Home2.default,
  t_1: _Core2.default,
  t_2: _Network2.default,
  t_3: _Foundation2.default,
  t_4: _About2.default,
  t_5: _Join2.default,
  t_6: _NotFound2.default
};
var templateTree = { c: { "404": { t: "t_6" }, "/": { t: "t_0" }, "core": { t: "t_1" }, "network": { t: "t_2" }, "foundation": { t: "t_3" }, "about": { t: "t_4" }, "join": { t: "t_5" } } };

var getTemplateForPath = function getTemplateForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
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
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Template = getTemplateForPath(props.location.pathname);
          if (!Template) {
            Template = getTemplateForPath('404');
          }
          return Template && _react2.default.createElement(Template, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  max-width: 100%;\n  height: auto;\n  text-align: center;\n  border-radius: 3px 3px 0 0;\n  box-shadow: 0 4px 64px rgba(149, 149, 149, 0.2);\n'], ['\n  display: block;\n  max-width: 100%;\n  height: auto;\n  text-align: center;\n  border-radius: 3px 3px 0 0;\n  box-shadow: 0 4px 64px rgba(149, 149, 149, 0.2);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _appScreen = __webpack_require__(21);

var _appScreen2 = _interopRequireDefault(_appScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledImg = _ui.styled.img(_templateObject);

var AppScreenshot = function AppScreenshot(props) {
  return _react2.default.createElement(StyledImg, _extends({ src: _appScreen2.default, width: '1140', height: '508', alt: 'Aragon App' }, props));
};

exports.default = AppScreenshot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n\n  .item + .item {\n    margin-top: 50px;\n  }\n  img {\n    display: block;\n    max-width: 100%;\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n    margin-top: 50px;\n  }\n  h1 {\n    margin-bottom: 10px;\n  }\n  h2 {\n    font-size: 25px;\n    margin-bottom: 30px;\n  }\n  p {\n    color: ', ';\n  }\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n\n  .item + .item {\n    margin-top: 50px;\n  }\n  img {\n    display: block;\n    max-width: 100%;\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n    margin-top: 50px;\n  }\n  h1 {\n    margin-bottom: 10px;\n  }\n  h2 {\n    font-size: 25px;\n    margin-bottom: 30px;\n  }\n  p {\n    color: ', ';\n  }\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _SectionTitle = __webpack_require__(4);

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.theme.textSecondary, medium('\n    padding-top: 128px;\n    padding-bottom: 128px;\n    text-align: left;\n    h1 {\n      text-align: left;\n    }\n    .columns {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: stretch;\n      margin: 50px 0;\n    }\n    .item {\n      display: flex;\n      flex-direction: column;\n      width: 50%;\n      margin-top: 50px;\n      flex-wrap: nowrap;\n    }\n    .item .image {\n      flex-grow: 1;\n      display: flex;\n      align-items: flex-end;\n    }\n    .item:nth-child(1) {\n      padding-right: 15px;\n      text-align: left;\n    }\n    .item:nth-child(2) {\n      padding-left: 15px;\n      text-align: right;\n    }\n    .item:nth-child(2) .title {\n      text-align: right;\n    }\n  '));

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
            _ui.Text,
            { heading: '2' },
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(11);

var _App = __webpack_require__(12);

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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _reactStaticRoutes = __webpack_require__(6);

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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: calc(-200px - 10%);\n'], ['\n  margin-bottom: calc(-200px - 10%);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _components = __webpack_require__(2);

var _Home = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FirstSection = _ui.styled.div(_templateObject);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #fff;\n'], ['\n  background: #fff;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _illustration = __webpack_require__(16);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _ui.IllustratedSection.Illustration,
    Title = _ui.IllustratedSection.Title,
    Subtitle = _ui.IllustratedSection.Subtitle,
    Emphasis = _ui.IllustratedSection.Emphasis,
    Content = _ui.IllustratedSection.Content;


var Main = (0, _ui.styled)(_ui.IllustratedSection)(_templateObject);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc4IiBoZWlnaHQ9IjQ4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEwOC40MzMlIiB5MT0iMjQuMTE3JSIgeDI9IjMuMTUxJSIgeTI9IjEyMy4xMjMlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0U5RjJGNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNFN0VGRUUiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHkyPSI2OC4wNDElIiBpZD0iYyI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJlIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMzc1Ljc3NSAxMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAxMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjM0Ljk4NykiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMzc1Ljc3NSAxMDguODM5bC0uMDQgNy42MDNMMTg4LjQ4MiAyMjUuMjFsLjAzOS03LjYwM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjM0Ljk4NykiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4xMjMiIGZpbGw9IiMwMDAiIGQ9Ik0xODguNTIgNDUyLjU5NWwtLjA0IDcuNjAzTDAgMzUxLjQzbC4wNC03LjYwM3oiLz48L2c+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSJ1cmwoI2MpIiBvcGFjaXR5PSIuMzQ3IiBkPSJNMzc1Ljc3NSAxMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAxMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTY5LjMxOCkiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNDMiIGQ9Ik0zNzYuMDk0IDEwOC41MzdsLS4wNCA3LjYwM0wxODguOCAyMjQuOTFsLjAzOS03LjYwNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTY5LjMxOCkiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBkPSJNMTg4LjUyIDIxNy42MDhsLS4wNCA3LjYwM0wwIDExNi40NDNsLjA0LTcuNjAzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxNjkuMzE4KSIvPjwvZz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjE3IiBmaWxsPSIjRENEQ0RDIiBkPSJNMzc1Ljc3NSAyMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAyMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMTAweiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjEyMyIgZmlsbD0iIzY2NiIgZD0iTTM3NS43NzUgMjA4LjgzOWwtLjA0IDcuNjAzTDE4OC40ODIgMzI1LjIxbC4wMzktNy42MDN6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuMTIzIiBmaWxsPSIjMDAwIiBkPSJNMTg4LjUyIDMxNy42MDhsLS4wNCA3LjYwM0wwIDIxNi40NDNsLjA0LTcuNjAzeiIvPjwvZz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0cm9rZT0idXJsKCNlKSIgb3BhY2l0eT0iLjMxIiBkPSJNMzc1Ljc3NSAxMDguNzY3bC0uMDQgNy42MDMtMTg3LjI1NCAxMDguNzdMMCAxMTYuMzdsLjA0LTcuNjAzTDE4Ny4yOTUgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzEuMzE4KSIvPjxwYXRoIHN0cm9rZT0iIzcxNzE3MSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iLjIyMSIgZD0iTTM3Ni4wOTQgMTA4LjUzN2wtLjA0IDcuNjAzTDE4OC44IDIyNC45MWwuMDM5LTcuNjA0ek0xODguNTIgMjE3LjYwOGwtLjA0IDcuNjAzTDAgMTE2LjQ0M2wuMDQtNy42MDN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMxLjMxOCkiLz48L2c+PHBhdGggZD0iTTE4Ny45MDIgMTQ4LjM5NXYzMTEuNzM4IiBzdHJva2U9IiMwMDAiIG9wYWNpdHk9Ii4xMDUiLz48cGF0aCBkPSJNMTg3LjkwMiA0NTkuNjA1djIwLjUyOG0wLTQ3OS43Mzh2MTQzLjczOCIgc3Ryb2tlPSIjMDAwIiBvcGFjaXR5PSIuNSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgY3g9IjE4OC4wOSIgY3k9IjE0NC4wOSIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjE5NSIgY3g9IjE4OC4wOSIgY3k9IjIxMi4wOSIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjE5NSIgY3g9IjE4OC4wOSIgY3k9IjI4Mi4wOSIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjE5NSIgY3g9IjE4OC4wOSIgY3k9IjM0Ny4wOSIgcj0iMi4wOSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 200px;\n'], ['\n  min-height: 200px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  .email-field {\n    display: flex;\n    width: 100%;\n  }\n  input[type=\'email\'] {\n    width: 100%;\n    margin-right: 15px;\n    padding: 10px 15px;\n    border-radius: 3px;\n    border: 0;\n    background: #fff;\n  }\n  .button {\n    flex-shrink: 0;\n  }\n'], ['\n  .email-field {\n    display: flex;\n    width: 100%;\n  }\n  input[type=\'email\'] {\n    width: 100%;\n    margin-right: 15px;\n    padding: 10px 15px;\n    border-radius: 3px;\n    border: 0;\n    background: #fff;\n  }\n  .button {\n    flex-shrink: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _reactStaticRoutes = __webpack_require__(6);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _ui = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var menuItems = [['/core', 'Core'], ['/network', 'Network'], ['/foundation', 'Foundation'], ['/about', 'About'], ['/join', 'Join us'], ['https://wiki.aragon.one', 'Wiki']];

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

var Content = _ui.styled.div(_templateObject);

var EmailFormWrapper = _ui.styled.div(_templateObject2);

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
            novalidate: true
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
              { 'for': 'mce-EMAIL' },
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
                tabindex: '-1',
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
      var _props = this.props,
          children = _props.children,
          path = _props.path;

      var items = menuItems.map(function (item) {
        return [].concat(_toConsumableArray(item), [item[0] === path]);
      });
      return _react2.default.createElement(
        _ui.AragonApp,
        { publicUrl: '/aragon-ui/' },
        _react2.default.createElement(_ui.Header, { menuItems: items, renderMenuItemLink: renderMenuItemLink }),
        _react2.default.createElement(
          Content,
          null,
          children
        ),
        _react2.default.createElement(_ui.PreFooter, { emailForm: this.renderEmailForm() }),
        _react2.default.createElement(_ui.Footer, null)
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 40px 15px 0;\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding-bottom: 120px;\n  .title {\n    margin-bottom: 25px;\n    font-size: 30px;\n    color: ', ';\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    color: ', ';\n    font-size: 20px;\n  }\n  .children {\n    margin: 25px 0 0;\n  }\n  button,\n  a {\n    margin: 0 5px;\n    text-decoration: none;\n  }\n  ', ';\n'], ['\n  padding: 40px 15px 0;\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding-bottom: 120px;\n  .title {\n    margin-bottom: 25px;\n    font-size: 30px;\n    color: ', ';\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    color: ', ';\n    font-size: 20px;\n  }\n  .children {\n    margin: 25px 0 0;\n  }\n  button,\n  a {\n    margin: 0 5px;\n    text-decoration: none;\n  }\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding-top: 100px;\n    .title {\n      font-size: 44px;\n    }\n    .subtitle {\n      font-size: 24px;\n    }\n  '], ['\n    padding-top: 100px;\n    .title {\n      font-size: 44px;\n    }\n    .subtitle {\n      font-size: 24px;\n    }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _background = __webpack_require__(19);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var StyledContainer = (0, _ui.styled)(_ui.Section)(_templateObject, _background2.default, _ui.theme.textPrimary, _ui.theme.textSecondary, medium((0, _ui.styledCss)(_templateObject2)));

var PageTitle = function PageTitle(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children;
  return _react2.default.createElement(
    StyledContainer,
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

exports.default = PageTitle;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzNiIgaGVpZ2h0PSI4ODciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0My4zNyAtMy45ODEpIiBmaWxsPSJ1cmwoI2IpIiBvcGFjaXR5PSIuNzc5Ii8+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ3LjU4IDE5Ny45MjEpIiBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuMzc0Ii8+PHVzZSB4bGluazpocmVmPSIjZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjE1IDU5LjkyKSIgZmlsbD0idXJsKCNmKSIgb3BhY2l0eT0iLjU1NyIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC03MDEuNTA4IDM4OC4xMzMgLTUzNy41ODcgLTUwNi40ODIgNTE5Ljk2OCAxODguNjkzKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRTlGMkY0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0zNzQuOTc3IDE4NC43NTMgMCA5My44MTQgNDc5LjM5MikiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0U5RjJGNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEyMi40NTMgLTM3NS4xNDEgMzc0Ljc3NCAtMTIyLjU3MyA0MTAuNTA5IDQyNy4wNjUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMzMuMTEyIDY0LjQxMkMyMzIuNjA3IDY0LjQxMiAwIDEzOC43NCAwIDM0Mi4wMThzMjI0LjUyMSAzMDEuODc4IDM4OS44NjkgMzAxLjg3OGM4OS45MzMgMCAxNjMuODExLTI2LjE3MyAyMTIuNTQyLTUwLjA1MSA2LjI4LTI4LjgxOCAyOS4xMjEtOTcuMDY4IDEwNC42ODgtOTcuNTc4IDEzLjQ3Ni0uNTI2IDI2LjExOCAyLjAwMiAzNi43NDIgOC4wNyA1MC41NjcgMjcuMzExIDE3LjY5OCA3OC4zNzggMTcuNjk4IDc4LjM3OCAxLjkwNy0uMzA4IDMuODMzLS42NjcgNS43Ni0xLjA4MiAxLjkyMS0uNDE0IDMuODUzLS44OTUgNS44LTEuNDE2IDYwLjc3Ni0xNi4zNjggMTI5LjI1OC04NS44ODcgMTE3LjM4LTIwMi4yOTctOS41MjEtOTMuMzQ2LTk1LjY3Ny0xNTIuNTE0LTEzNy41ODctMTc2LjAxNy0xMy43MjMtNy42OTctMjIuNzA0LTExLjU4NS0yMi43MDQtMTEuNTg1IDEuNTE3LTkuNDgxIDIuMDA3LTE2LjgxNCAyLjAwNy0yMi40NDcgMC0xLjA1Ny0uMDItMi4wNDgtLjA1LTIuOTc4di0xMC45MjdDNTEyLjIxNiAyMC41NTIgMzI2LjEwNSAwIDIzNC4zMTEgMGMtMzkuNjU1IDAtNjEuODc5IDMuNzI3LTYxLjg3OSAzLjcyN2w2MC42OCA2MC42ODV6TTY5Ny44MiAxOTAuODI0cy0yOS44MzQtOS42MDgtNjAuMTY5LTEzLjY1NGMtMTUuMTc1IDE1LjY3Ni0yOC4zMjMgMjIuMjUtMzIuMzY4IDI0LjI3OC0uNTA2LjUtMS4wMTEgMS4wMDYtMS4wMTEgMS4wMDYtODguNDkyLTE4LjcxLTEyMC4zNDktNjQuMjItMTIwLjM0OS02NC4yMiA4My40NC0uNSAxNTguNzg1IDE5LjIxNSAyMTMuODk3IDUyLjU5eiIvPjxwYXRoIGlkPSJjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ni4wMzcgMTE0LjgzMmMwIDY2LjI0Ny0yNy4zIDEyNy40MjgtNzMuODI3IDE3Ni45ODNMMCAyOTQuMzU5bDMuNzI3LS4wMWMxMi42NDEtLjUxMSAyNS4yODMgMi4wMTcgMzUuOTA3IDguMDg1IDUwLjU2NyAyNy4zMTEgMTcuNjk5IDc4LjM3OSAxNy42OTkgNzguMzc5IDYzLjIwOC0xMC4xMTQgMTQxLjU4Ni04MC45MDIgMTI4LjkzOS0yMDQuNzk1QzE3Ni43NTEgODIuNjcxIDkwLjU5NSAyMy41MDMgNDguNjg2IDBjMTguMDEyIDM1LjU3NCAyNy4zNTEgNzQuNjQ3IDI3LjM1MSAxMTQuODMyIi8+PHBhdGggaWQ9ImUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNDg0LjkzNWMwIDguMjAxLjMxOSAxNi4wMDkuNzc0IDIzLjYzOSA2Mi41ODEgMTIwLjM1NCAxMzcuODYgMjI1LjQ5NyAyMjMuOTYgMzEyLjU2OCAxMDcuMzc4IDEwOC4zNSAyMzIuMzIzIDE4OC43MzggMzcxLjQ0MiAyMzkuMDA4IDEzOC42MTQtNTAuMSAyNjMuNTY0LTEzMC42NTggMzcxLjQ1OC0yMzkuNTI5IDMxLjk4OC0zMi4zNDIgNjIuNDk2LTY3LjI5OSA5MS40NzYtMTA0LjY1Mi0yMzAuNjg2LTE2LjU4MS0yMTYuNjc0LTE1Ni43MDEtMjE2LjY3NC0xNTYuNzAxIDAtNS41NTggMC0xMS4xMjUgMS4wMTEtMTYuNjg3IDAgMCAuNTExLTQuOTIxIDIuMTktMTIuNjQyLTQ4LjczMSAyMy44ODItMTIyLjYwOSA1MC4wNTYtMjEyLjU0NyA1MC4wNTYtMTY1LjM0OCAwLTM4OS44NjktOTguNi0zODkuODY5LTMwMS44NzhTNDc1LjgyNy41MTEgNDc1LjgyNy41MTFsLS4xMjEtLjAzNkM0NjkuODEuMDIgNDYzLjQ4OSAwIDQ1Ny42MjMgMCAyMDMuMjczIDkuMTA3IDAgMjIyLjQ5MyAwIDQ4NC45MzUiLz48L2RlZnM+PC9zdmc+"

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  background-image: ', ';\n  border-bottom: 1px solid ', ';\n  .in {\n    padding: 30px 15px 0;\n  }\n  .content {\n    align-self: center;\n    max-width: 410px;\n    flex-shrink: 0;\n    padding-bottom: 15px;\n    padding-bottom: 40px;\n  }\n  .title {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 20px;\n    color: ', ';\n  }\n  .subtitle {\n    font-size: 17px;\n    color: ', ';\n  }\n  .app-img {\n    max-width: none;\n    width: calc(30px + 140%);\n    margin-bottom: -30%;\n  }\n  .buttons {\n    margin-top: 25px;\n  }\n  .buttons > * {\n    margin-right: 10px;\n  }\n\n  ', ';\n'], ['\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  background-image: ', ';\n  border-bottom: 1px solid ', ';\n  .in {\n    padding: 30px 15px 0;\n  }\n  .content {\n    align-self: center;\n    max-width: 410px;\n    flex-shrink: 0;\n    padding-bottom: 15px;\n    padding-bottom: 40px;\n  }\n  .title {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 20px;\n    color: ', ';\n  }\n  .subtitle {\n    font-size: 17px;\n    color: ', ';\n  }\n  .app-img {\n    max-width: none;\n    width: calc(30px + 140%);\n    margin-bottom: -30%;\n  }\n  .buttons {\n    margin-top: 25px;\n  }\n  .buttons > * {\n    margin-right: 10px;\n  }\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _AppScreenshot = __webpack_require__(7);

var _AppScreenshot2 = _interopRequireDefault(_AppScreenshot);

var _backgroundLines = __webpack_require__(22);

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

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, gradient, _ui.theme.mainBgGradientStart, _ui.theme.textPrimary, _ui.theme.textSecondary, medium('\n    background-image: url(' + _backgroundLines2.default + '), ' + gradient + ';\n    .in {\n      display: flex;\n      padding-top: 50px;\n    }\n    .title {\n      font-size: 38px;\n    }\n    .subtitle {\n      font-size: 18px;\n    }\n    .app-img {\n      margin-right: -90px;\n      margin-left: 90px;\n    }\n    .buttons {\n      margin-top: 50px;\n    }\n  '));

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
          'Download Aragon Core alpha v0.3 for macOS'
        ),
        _react2.default.createElement(
          _ui.BreakPoint,
          { to: 'medium' },
          _react2.default.createElement(
            'div',
            { className: 'buttons' },
            _react2.default.createElement(
              _ui.Button,
              null,
              'Web version'
            ),
            _react2.default.createElement(
              _ui.Button,
              { mode: 'strong' },
              'Aragon Core'
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
              _ui.Button,
              null,
              'Try the Web version'
            ),
            _react2.default.createElement(
              _ui.Button,
              { mode: 'strong' },
              'Download Aragon Core'
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/app-screen.aefb22f6.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIzODQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjkgMTEzKSIgZmlsbD0idXJsKCNiKSIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjcgLTk1LjUpIiBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNDQ2Ii8+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjUwIC05NS41KSIgZmlsbD0idXJsKCNlKSIgb3BhY2l0eT0iLjQ0NiIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNCAtMjExKSIgZmlsbD0idXJsKCNmKSIgb3BhY2l0eT0iLjQ0NiIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNzkgLTU4KSIgZmlsbD0idXJsKCNnKSIvPjxnIG9wYWNpdHk9Ii4zMjciPjx1c2UgeGxpbms6aHJlZj0iI2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMC43OCAxNjIuNzgpIiBmaWxsPSIjQjNCM0IzIiBmaWx0ZXI9InVybCgjaSkiLz48dXNlIHhsaW5rOmhyZWY9IiNqIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDIgMTY0KSIgZmlsbD0iIzcxNzE3MSIvPjwvZz48ZyBvcGFjaXR5PSIuMTg2IiBmaWxsPSIjRkZGIj48dXNlIHhsaW5rOmhyZWY9IiNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTQuNzggMzExLjc4KSIgZmlsdGVyPSJ1cmwoI2spIi8+PHVzZSB4bGluazpocmVmPSIjaiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU2IDMxMykiLz48L2c+PHVzZSB4bGluazpocmVmPSIjaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3NS43OCAzMTUuNzgpIiBmaWxsPSIjRkZGIiBmaWx0ZXI9InVybCgjbCkiLz48dXNlIHhsaW5rOmhyZWY9IiNqIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDc3IDMxNykiIGZpbGw9IiNGRkYiLz48ZGVmcz48ZmlsdGVyIGlkPSJpIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEzOTAiIHk9IjI3ODUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjgzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJrIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjE1NDQiIHk9IjI5MzQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjgzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJsIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIzNjUiIHk9IjI5MzgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjgzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgxMjcuMzQxIDU3Mi43NCAtOTEuMjgyKSBzY2FsZSgxMjE0LjQyNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0M4QzhDOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk3OTc5NyIgc3RvcC1vcGFjaXR5PSIuMDEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgNTIxLjM3OCAtNTM5LjkyOSAwIDI3Ni41IDApIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNDOEM4QzgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5Nzk3OTciIHN0b3Atb3BhY2l0eT0iLjAxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMzE3LjM3OSAtNDY5Ljg0IDQ4Ni41NTcgLTMwNi40NzQgNTI3LjIzOCA1MTYuNDM0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjQzhDOEM4IiBzdG9wLW9wYWNpdHk9Ii4wMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk3OTc5NyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTU1My4wMjcgNzE5LjQ4IC03MTkuNDggLTU1My4wMjcgMTg4LjUgMCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0M4QzhDOCIgc3RvcC1vcGFjaXR5PSIuMDEiLz48c3RvcCBvZmZzZXQ9Ii4wMTIiIHN0b3AtY29sb3I9IiNDN0M3QzciIHN0b3Atb3BhY2l0eT0iLjAxMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk3OTc5NyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoMTM5LjQ0OSAyMjEuNTk2IDgxLjk1MSkgc2NhbGUoODg3LjMzNikiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0M4QzhDOCIgc3RvcC1vcGFjaXR5PSIuMDEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5Nzk3OTciLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBkPSJNLjE0NiAzNzYuMTQ2bC0uMzUzLjM1NC43MDcuNzA3LjM1NC0uMzUzLS43MDgtLjcwOHpNMzc3LjIwOC40OTlsLjM1My0uMzUzLS43MDctLjcwNy0uMzUzLjM1My43MDcuNzA3ek0uODU0IDM3Ni44NTRMMzc3LjIwOC40OTlsLS43MDctLjcwN0wuMTQ2IDM3Ni4xNDZsLjcwOC43MDh6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0uODQ3LjE0bC0uMzYtLjM0Ny0uNjk0LjcyLjM2LjM0Ny42OTQtLjcyem01NTEuMzA2IDUzMy43MmwuMzU5LjM0Ny42OTUtLjcxOS0uMzYtLjM0OC0uNjk0Ljcyek0uMTUzLjg2bDU1MiA1MzMgLjY5NC0uNzItNTUyLTUzMy0uNjk0LjcyeiIvPjxwYXRoIGlkPSJoIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjIxNiA2LjQzMmEzLjIxNiAzLjIxNiAwIDEgMCAwLTYuNDMyIDMuMjE2IDMuMjE2IDAgMCAwIDAgNi40MzJ6Ii8+PHBhdGggaWQ9ImoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIgNGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6Ii8+PC9kZWZzPjwvc3ZnPg=="

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Anchor = function Anchor(_ref) {
  var href = _ref.href,
      props = _objectWithoutProperties(_ref, ['href']);

  return _react2.default.createElement(
    'a',
    { href: href },
    _react2.default.createElement(_ui.Button, props)
  );
};

exports.default = Anchor;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UnstoppableOrganizations = __webpack_require__(25);

Object.defineProperty(exports, 'UnstoppableOrganizations', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UnstoppableOrganizations).default;
  }
});

var _DeathToPaperwork = __webpack_require__(27);

Object.defineProperty(exports, 'DeathToPaperwork', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DeathToPaperwork).default;
  }
});

var _Disintermediating = __webpack_require__(31);

Object.defineProperty(exports, 'Disintermediating', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Disintermediating).default;
  }
});

var _LogosBar = __webpack_require__(36);

Object.defineProperty(exports, 'LogosBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LogosBar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding: 40px 15px 10%;\n  ', ';\n  ', ';\n\n  .title {\n    color: ', ';\n    margin-bottom: 15px;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.2;\n\n    ', ';\n  }\n  .subtitle {\n    position: relative;\n    z-index: 2;\n    font-size: 20px;\n    ', ';\n    color: ', ';\n  }\n  .app-wrapper {\n    display: flex;\n    align-items: center;\n  }\n  .app-img {\n    margin-left: 50%;\n    transform: translateX(-50%);\n    flex-shrink: 0;\n    margin-top: 40px;\n    ', ';\n  }\n  .buttons {\n    display: flex;\n    justify-content: center;\n    margin: 20px auto 0;\n  }\n  .button:first-child {\n    margin-right: 10px;\n  }\n'], ['\n  text-align: center;\n  background: url(', ') no-repeat 50% -60px;\n  padding: 40px 15px 10%;\n  ', ';\n  ', ';\n\n  .title {\n    color: ', ';\n    margin-bottom: 15px;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.2;\n\n    ', ';\n  }\n  .subtitle {\n    position: relative;\n    z-index: 2;\n    font-size: 20px;\n    ', ';\n    color: ', ';\n  }\n  .app-wrapper {\n    display: flex;\n    align-items: center;\n  }\n  .app-img {\n    margin-left: 50%;\n    transform: translateX(-50%);\n    flex-shrink: 0;\n    margin-top: 40px;\n    ', ';\n  }\n  .buttons {\n    display: flex;\n    justify-content: center;\n    margin: 20px auto 0;\n  }\n  .button:first-child {\n    margin-right: 10px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _AppScreenshot = __webpack_require__(7);

var _AppScreenshot2 = _interopRequireDefault(_AppScreenshot);

var _background = __webpack_require__(26);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var StyledContainer = (0, _ui.styled)(_ui.Section)(_templateObject, _background2.default, medium('padding: 120px 15px 0'), large('padding: 160px 15px 0'), _ui.theme.textPrimary, medium('\n      margin-bottom: 25px;\n      font-size: 58px;\n      line-height: 1.5;\n    '), medium('font-size: 24px'), _ui.theme.textSecondary, medium('margin-top: 75px'));

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
        _ui.BreakPoint,
        { to: 'medium' },
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(
            'div',
            { className: 'button' },
            _react2.default.createElement(
              _ui.Button,
              { mode: 'outline' },
              'Web version'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'button' },
            _react2.default.createElement(
              _ui.Button,
              { mode: 'strong' },
              'Aragon Core'
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
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzNiIgaGVpZ2h0PSI4ODciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0My4zNyAtMy45ODEpIiBmaWxsPSJ1cmwoI2IpIiBvcGFjaXR5PSIuNzc5Ii8+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ3LjU4IDE5Ny45MjEpIiBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuMzc0Ii8+PHVzZSB4bGluazpocmVmPSIjZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjE1IDU5LjkyKSIgZmlsbD0idXJsKCNmKSIgb3BhY2l0eT0iLjU1NyIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC03MDEuNTA4IDM4OC4xMzMgLTUzNy41ODcgLTUwNi40ODIgNTE5Ljk2OCAxODguNjkzKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRTlGMkY0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0zNzQuOTc3IDE4NC43NTMgMCA5My44MTQgNDc5LjM5MikiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0U5RjJGNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEyMi40NTMgLTM3NS4xNDEgMzc0Ljc3NCAtMTIyLjU3MyA0MTAuNTA5IDQyNy4wNjUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMzMuMTEyIDY0LjQxMkMyMzIuNjA3IDY0LjQxMiAwIDEzOC43NCAwIDM0Mi4wMThzMjI0LjUyMSAzMDEuODc4IDM4OS44NjkgMzAxLjg3OGM4OS45MzMgMCAxNjMuODExLTI2LjE3MyAyMTIuNTQyLTUwLjA1MSA2LjI4LTI4LjgxOCAyOS4xMjEtOTcuMDY4IDEwNC42ODgtOTcuNTc4IDEzLjQ3Ni0uNTI2IDI2LjExOCAyLjAwMiAzNi43NDIgOC4wNyA1MC41NjcgMjcuMzExIDE3LjY5OCA3OC4zNzggMTcuNjk4IDc4LjM3OCAxLjkwNy0uMzA4IDMuODMzLS42NjcgNS43Ni0xLjA4MiAxLjkyMS0uNDE0IDMuODUzLS44OTUgNS44LTEuNDE2IDYwLjc3Ni0xNi4zNjggMTI5LjI1OC04NS44ODcgMTE3LjM4LTIwMi4yOTctOS41MjEtOTMuMzQ2LTk1LjY3Ny0xNTIuNTE0LTEzNy41ODctMTc2LjAxNy0xMy43MjMtNy42OTctMjIuNzA0LTExLjU4NS0yMi43MDQtMTEuNTg1IDEuNTE3LTkuNDgxIDIuMDA3LTE2LjgxNCAyLjAwNy0yMi40NDcgMC0xLjA1Ny0uMDItMi4wNDgtLjA1LTIuOTc4di0xMC45MjdDNTEyLjIxNiAyMC41NTIgMzI2LjEwNSAwIDIzNC4zMTEgMGMtMzkuNjU1IDAtNjEuODc5IDMuNzI3LTYxLjg3OSAzLjcyN2w2MC42OCA2MC42ODV6TTY5Ny44MiAxOTAuODI0cy0yOS44MzQtOS42MDgtNjAuMTY5LTEzLjY1NGMtMTUuMTc1IDE1LjY3Ni0yOC4zMjMgMjIuMjUtMzIuMzY4IDI0LjI3OC0uNTA2LjUtMS4wMTEgMS4wMDYtMS4wMTEgMS4wMDYtODguNDkyLTE4LjcxLTEyMC4zNDktNjQuMjItMTIwLjM0OS02NC4yMiA4My40NC0uNSAxNTguNzg1IDE5LjIxNSAyMTMuODk3IDUyLjU5eiIvPjxwYXRoIGlkPSJjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ni4wMzcgMTE0LjgzMmMwIDY2LjI0Ny0yNy4zIDEyNy40MjgtNzMuODI3IDE3Ni45ODNMMCAyOTQuMzU5bDMuNzI3LS4wMWMxMi42NDEtLjUxMSAyNS4yODMgMi4wMTcgMzUuOTA3IDguMDg1IDUwLjU2NyAyNy4zMTEgMTcuNjk5IDc4LjM3OSAxNy42OTkgNzguMzc5IDYzLjIwOC0xMC4xMTQgMTQxLjU4Ni04MC45MDIgMTI4LjkzOS0yMDQuNzk1QzE3Ni43NTEgODIuNjcxIDkwLjU5NSAyMy41MDMgNDguNjg2IDBjMTguMDEyIDM1LjU3NCAyNy4zNTEgNzQuNjQ3IDI3LjM1MSAxMTQuODMyIi8+PHBhdGggaWQ9ImUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNDg0LjkzNWMwIDguMjAxLjMxOSAxNi4wMDkuNzc0IDIzLjYzOSA2Mi41ODEgMTIwLjM1NCAxMzcuODYgMjI1LjQ5NyAyMjMuOTYgMzEyLjU2OCAxMDcuMzc4IDEwOC4zNSAyMzIuMzIzIDE4OC43MzggMzcxLjQ0MiAyMzkuMDA4IDEzOC42MTQtNTAuMSAyNjMuNTY0LTEzMC42NTggMzcxLjQ1OC0yMzkuNTI5IDMxLjk4OC0zMi4zNDIgNjIuNDk2LTY3LjI5OSA5MS40NzYtMTA0LjY1Mi0yMzAuNjg2LTE2LjU4MS0yMTYuNjc0LTE1Ni43MDEtMjE2LjY3NC0xNTYuNzAxIDAtNS41NTggMC0xMS4xMjUgMS4wMTEtMTYuNjg3IDAgMCAuNTExLTQuOTIxIDIuMTktMTIuNjQyLTQ4LjczMSAyMy44ODItMTIyLjYwOSA1MC4wNTYtMjEyLjU0NyA1MC4wNTYtMTY1LjM0OCAwLTM4OS44NjktOTguNi0zODkuODY5LTMwMS44NzhTNDc1LjgyNy41MTEgNDc1LjgyNy41MTFsLS4xMjEtLjAzNkM0NjkuODEuMDIgNDYzLjQ4OSAwIDQ1Ny42MjMgMCAyMDMuMjczIDkuMTA3IDAgMjIyLjQ5MyAwIDQ4NC45MzUiLz48L2RlZnM+PC9zdmc+"

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #fff;\n  border-top: 1px solid ', ';\n\n  ul {\n    padding-left: 25px;\n    list-style: none;\n    margin-bottom: 25px;\n  }\n\n  ul#blockchain {\n    background: url(', ') no-repeat left top;\n  }\n\n  ul#ethereum {\n    background: url(', ') no-repeat left top;\n  }\n'], ['\n  background: #fff;\n  border-top: 1px solid ', ';\n\n  ul {\n    padding-left: 25px;\n    list-style: none;\n    margin-bottom: 25px;\n  }\n\n  ul#blockchain {\n    background: url(', ') no-repeat left top;\n  }\n\n  ul#ethereum {\n    background: url(', ') no-repeat left top;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _illustration = __webpack_require__(28);

var _illustration2 = _interopRequireDefault(_illustration);

var _blockchain = __webpack_require__(29);

var _blockchain2 = _interopRequireDefault(_blockchain);

var _ethereum = __webpack_require__(30);

var _ethereum2 = _interopRequireDefault(_ethereum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _ui.IllustratedSection.Illustration,
    Title = _ui.IllustratedSection.Title,
    Subtitle = _ui.IllustratedSection.Subtitle,
    Emphasis = _ui.IllustratedSection.Emphasis,
    Content = _ui.IllustratedSection.Content;


var Main = (0, _ui.styled)(_ui.IllustratedSection)(_templateObject, _ui.theme.contentBackgroundActive, _blockchain2.default, _ethereum2.default);

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
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDM0IiBoZWlnaHQ9IjUxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyOS42MTYlIiB5MT0iMTMuMjE1JSIgeDI9IjEuNzQzJSIgeTI9IjExNC42NTclIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJjIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0VCRjNGNSIgb2Zmc2V0PSI3LjQ2OCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTE2LjQwMSUiIHkxPSIxMjcuODczJSIgeDI9IjE0Ljk1OCUiIHkyPSIwJSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiNFOUYyRjQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiM1OEQyRUQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiM5NEU0RjYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNTguODQgMjI0Ljc0NlY5NC43NTZMMCAuOTEzem0uMTkyLTEzMC4wMTd2MTI5Ljk4OUwzMTcuOTcuODg2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUuMjUzIDI4NS44NDQpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0yMTMuODk2IDM1OC4xMTFMOTcuNjI0IDI4OS4zODIgMjEzLjg5NyA5Ni40NTcgMzMwLjE3IDI4OS4zODJsLTExNi4yNzMgNjguNzI5em0uOTM3IDIyLjk1bDExNi4zNDItNjguNjkzLTExNi4zNDIgMTYzLjg0N0w5OC41NTkgMzEyLjM2NmwxMTYuMjc0IDY4LjY5NHoiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii43Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgb3BhY2l0eT0iLjUxMSIgZD0iTTExNy4yMDggMjg0LjYwNnY5NS4xNTRsMTE2LjM0NC0xNjMuODQ4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuNjI0IDk2LjQ1NikiLz48L2c+PHBhdGggZD0iTTIxNC4yODUgMzgwLjU3M3YxMjkuOTg5TDM3My4yMjEgMjg2LjczeiIvPjxwYXRoIGZpbGw9InVybCgjYikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMyOSIgZD0iTTIxNS40MTIgNDc2LjM1NlYzODEuMkw5OS4xMzggMzEyLjUwN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNTggLS4xNCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkzIDUxMC41OVYzODAuNmwtMTU4Ljg0LTkzLjg0NHoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjU4IDE3OS40NDYpIj48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4zNzIiIGQ9Ik0zLjIzIDk2LjM3N2wyMTIuMDEgMTI4LjE0N0w0MzMuMDU0IDk2LjM3NyAyMTguMTQyLjE1N3oiLz48Y2lyY2xlIGZpbGw9InVybCgjYykiIGN4PSIyLjY2MyIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNjKSIgY3g9IjIxNC45ODYiIGN5PSIyMjMuODY1IiByPSIyLjA5Ii8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iNDMxLjk4NiIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMTIuMTU0IDB2MzU3LjQ0NWwxNTguODQtOTMuODl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIxMi4xNTUgMEw1My4zMTUgMjYzLjU1NWwxNTguODQgOTMuODkyVjE5MS4zNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjUwOSIgZD0iTTIxMS45NTggOTUuODkydjI2MS42NTVsMTE2LjI3NC02OC43Mjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZykiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjQ3NiIgZD0iTTIxMS45NiA5NS44OTJMOTUuNjg1IDI4OC44MThsMTE2LjI3MyA2OC43M1YyMzUuOTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjaCkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMxNCIgZD0iTTIxMS45NTggMzU3LjU0N0wzMjguMjMgMjg4LjgybC0xMTYuMjcyLTUyLjg1ek05NS42ODYgMjg4LjgxOGwxMTYuMjcxIDY4Ljczdi0xMjEuNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTIxMy44OTYgMzU4LjExMWwxMTYuMjcyLTY4LjcyOC0xMTYuMjcyLTUyLjg1eiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTk3LjYyNCAyODkuMzgybDExNi4yNzIgNjguNzN2LTEyMS41OHoiLz48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4xMDciIGQ9Ik0uNzEyIDI3NS4yNTlsMjEyLjAxMSAxMjguMTQ3IDIxNy44MTMtMTI4LjE0Ny0yMTcuNzE4LTk2LjIyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS45MzggLjU2NCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkyIDM1OC4wMDlMMzcyLjkzIDI2NC4xMmwtMTU4LjgzOC03Mi4xOTd6bS0xNTguODM5LTkzLjg5bDE1OC44MzggOTMuODlWMTkxLjkyMnoiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0ZGRiI+PHBhdGggZD0iTTIxNC4wOTIuNTY0djM1Ny40NDVsMTU4Ljg0LTkzLjg5eiIvPjxwYXRoIGQ9Ik0yMTQuMDkzLjU2NEw1NS4yNTMgMjY0LjExOWwxNTguODQgOTMuODkxVjE5MS45MjJ6Ii8+PHBhdGggb3BhY2l0eT0iLjQxOSIgZD0iTTIxNC4wOTIgMzU4LjAwOUwzNzIuOTMgMjY0LjEybC0xNTguODM4LTcyLjE5N3ptLTE1OC44MzktOTMuODlsMTU4LjgzOCA5My44OVYxOTEuOTIyeiIvPjxwYXRoIG9wYWNpdHk9Ii41IiBkPSJNMjE0LjA5MiAzNTguMDA5TDM3Mi45MyAyNjQuMTJsLTE1OC44MzgtNzIuMTk3eiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTAgMTBoNnY2aC02ek0wIDIwaDZ2NkgweiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTIuNzgxIDIzLjg4OVYxMy4xNzdoMTAuNDk1TTEyLjg1IDIuOTd2MTAuNTk3Ii8+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTAgMTBoNnY2SDB6TTEwIDBoNnY2aC02eiIvPjwvZz48L3N2Zz4="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZD0iTS4yODMgMTMuOThsOC40MjYgNC45NzdWMHoiIGZpbGw9IiMwMDAiIG9wYWNpdHk9Ii42Ii8+PHBhdGggZD0iTTguNzA5IDB2MTguOTU3bDguNDIyLTQuOTc3eiIgZmlsbD0iIzAxMDEwMSIvPjxwYXRoIGQ9Ik0uMjgzIDE1LjU3Nmw4LjQyNiAxMS44N3YtNi44OTJ6IiBvcGFjaXR5PSIuNiIgZmlsbD0iIzAxMDEwMSIvPjxwYXRoIGQ9Ik04LjcwOSAyMC41NTR2Ni44OTJsOC40MjktMTEuODd6IiBmaWxsPSIjMDEwMTAxIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 0;\n  padding-bottom: 140px;\n'], ['\n  padding-top: 0;\n  padding-bottom: 140px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _OverlapBackground = __webpack_require__(3);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(35);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _ui.IllustratedSection.Illustration,
    Title = _ui.IllustratedSection.Title,
    Subtitle = _ui.IllustratedSection.Subtitle,
    Emphasis = _ui.IllustratedSection.Emphasis,
    Content = _ui.IllustratedSection.Content;


var Main = (0, _ui.styled)(_ui.IllustratedSection)(_templateObject);

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
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNi45OTclIiB5MT0iMTEzLjk4MyUiIHgyPSI3NS4wNjElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGgxNDQwdjExMTNIMFYwem0wIDB2MzIwLjc1YzQyMy4xOTMgNzguMDAyIDY2My4xOTMgMTE3LjAwMyA3MjAgMTE3LjAwMyA1Ni44MDcgMCAyOTYuODA3LTM5IDcyMC0xMTcuMDAyVjBIMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0wIDgwM2gxNDQwdjMxMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNi45OTclIiB5MT0iMTEzLjk4MyUiIHgyPSI3NS4wNjElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGgxNDQwdjExMTNIMFYwem0wIDB2MzIwLjc1YzQyMy4xOTMgNzguMDAyIDY2My4xOTMgMTE3LjAwMyA3MjAgMTE3LjAwMyA1Ni44MDcgMCAyOTYuODA3LTM5IDcyMC0xMTcuMDAyVjBIMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0wIDgwM2gxNDQwdjMxMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzIxKSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNi45OTclIiB5MT0iMTEzLjk4MyUiIHgyPSI3NS4wNjElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNjE4MTciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGgxNDQwdjExMTNIMFYwem0wIDB2MzIwLjc1YzQyMy4xOTMgNzguMDAyIDY2My4xOTMgMTE3LjAwMyA3MjAgMTE3LjAwMyA1Ni44MDcgMCAyOTYuODA3LTM5IDcyMC0xMTcuMDAyVjBIMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MzkgLTMyMSkiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMCA4MDNoMTQ0MHYzMTBIMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDM5IC0zMjEpIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/illustration.de050bc3.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 30px 0;\n  background: #FFF;\n  .title {\n    text-align: center;\n    text-transform: uppercase;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .logos {\n    margin: 0 auto;\n    width: 100%;\n    mix-blend-mode: multiply;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n  a, img {\n    width: 128px;\n    max-height: 64px;\n  }\n  a {\n    flex: 1;\n    flex-basis: 0;\n    filter: grayscale(100%);\n    transition: all 200ms;\n  }\n  a:hover {\n    filter: none;\n  }\n  .coindesk, .ibt, .nasdaq {\n    filter: opacity(50%) grayscale(100%);\n  }\n  .forbes, .reuters, .economist {\n    filter: opacity(75%) grayscale(100%);\n  }\n  .ibt, .ibt img {\n    flex: 0;\n    width: 92px;\n  }\n'], ['\n  padding: 30px 0;\n  background: #FFF;\n  .title {\n    text-align: center;\n    text-transform: uppercase;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .logos {\n    margin: 0 auto;\n    width: 100%;\n    mix-blend-mode: multiply;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n  a, img {\n    width: 128px;\n    max-height: 64px;\n  }\n  a {\n    flex: 1;\n    flex-basis: 0;\n    filter: grayscale(100%);\n    transition: all 200ms;\n  }\n  a:hover {\n    filter: none;\n  }\n  .coindesk, .ibt, .nasdaq {\n    filter: opacity(50%) grayscale(100%);\n  }\n  .forbes, .reuters, .economist {\n    filter: opacity(75%) grayscale(100%);\n  }\n  .ibt, .ibt img {\n    flex: 0;\n    width: 92px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _logos = __webpack_require__(37);

var _logos2 = _interopRequireDefault(_logos);

var _economist = __webpack_require__(38);

var _economist2 = _interopRequireDefault(_economist);

var _coindesk = __webpack_require__(39);

var _coindesk2 = _interopRequireDefault(_coindesk);

var _forbes = __webpack_require__(40);

var _forbes2 = _interopRequireDefault(_forbes);

var _ibt = __webpack_require__(41);

var _ibt2 = _interopRequireDefault(_ibt);

var _nasdaq = __webpack_require__(42);

var _nasdaq2 = _interopRequireDefault(_nasdaq);

var _reuters = __webpack_require__(43);

var _reuters2 = _interopRequireDefault(_reuters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = (0, _ui.styled)(_ui.Section)(_templateObject);

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
      _react2.default.createElement(
        'a',
        { className: 'coindesk', href: 'https://www.coindesk.com/dao-manager-aragon-alpha-ethereum/', target: '_blank', rel: 'noopener noreferrer' },
        _react2.default.createElement('img', { src: _coindesk2.default, alt: '' })
      ),
      _react2.default.createElement(
        'a',
        { className: 'economist', href: 'https://www.economist.com/news/world-if/21724906-trust-business-little-noticed-huge-startups-deploying-blockchain-technology-threaten', target: '_blank', rel: 'noopener noreferrer' },
        _react2.default.createElement('img', { src: _economist2.default, alt: '' })
      ),
      _react2.default.createElement(
        'a',
        { className: 'forbes', href: 'https://www.forbes.com/sites/rogeraitken/2017/04/20/forbes-under-30-tech-prodigy-in-cryptosale-for-decentralized-jurisdiction-platform/', target: '_blank', rel: 'noopener noreferrer' },
        _react2.default.createElement('img', { src: _forbes2.default, alt: '' })
      ),
      _react2.default.createElement(
        'a',
        { className: 'reuters', href: 'https://www.reuters.com/article/us-aragon-blockchain-funding/blockchain-token-sale-nets-25-million-in-under-15-minutes-idUSKCN18E32X', target: '_blank', rel: 'noopener noreferrer' },
        _react2.default.createElement('img', { src: _reuters2.default, alt: '' })
      ),
      _react2.default.createElement(
        'a',
        { className: 'nasdaq', href: 'http://www.nasdaq.com/article/disintermediating-entrepreneurship-iis-the-first-step-towards-a-fairer-world-cm806430', target: '_blank', rel: 'noopener noreferrer' },
        _react2.default.createElement('img', { src: _nasdaq2.default, alt: '' })
      ),
      _react2.default.createElement(
        'a',
        { className: 'ibt', href: 'http://www.ibtimes.co.uk/ethereum-based-aragon-leads-blockchain-exodus-slack-amid-phishing-scams-1640474', target: '_blank', rel: 'noopener noreferrer' },
        _react2.default.createElement('img', { src: _ibt2.default, alt: '' })
      )
    )
  );
};

exports.default = LogosBar;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logos.2b6349ec.png";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTI0LjEgMzQ1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTI0LjEgMzQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzVGNUY1Rjt9Cjwvc3R5bGU+Cjx0aXRsZT5Bc3NldCAxPC90aXRsZT4KPGcgaWQ9IkxheWVyXzIiPgoJPGcgaWQ9IkxheWVyXzEtMiI+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg1Ni42LDM0MmgtNTYuMmMtMC43LTQuNS0wLjQtNS4xLDMuNS02LjJjNS44LTEuNyw3LjUtMy40LDcuNi05LjRjMC4xLTIxLjYsMC4yLTQzLjItMC4xLTY0LjkKCQkJYy0wLjEtNi44LTIuMy0xMy40LTkuMi0xNS45Yy03LjctMi44LTE1LjQtMS40LTIxLjMsNC42Yy01LDUuMS04LjIsMTEuMS04LDE4LjhjMC42LDE3LjksMC42LDM1LjgsMC45LDUzLjdjMCwxLjUsMC4zLDMsMC40LDQuNQoJCQljMC4yLDQuOSwyLjQsNy44LDcuNiw4LjVjMy43LDAuNSw0LjEsMS41LDMuMyw2LjJoLTUyYy0wLjUtMy4xLDAuOS01LjIsMy42LTUuOWM3LjEtMS44LDktNi40LDguOS0xMy4zCgkJCWMtMC4zLTE5LTAuMS0zNy45LTAuMi01Ni45Yy0wLjEtMi45LTAuNS01LjctMS4zLTguNWMtMy4zLTEzLjYtMTQuMi0xNS4zLTI0LTExYy05LjUsNC4yLTEzLjksMTIuNi0xNCwyMi42CgkJCWMtMC4xLDE5LjUsMC43LDM5LDAuOSw1OC41YzAsMy42LDEuOSw1LjcsNSw3YzEuNCwwLjYsMi44LDEuMSw0LjEsMS43YzIuNCwwLjgsMy44LDMuMywzLjEsNS44aC01Ni4zYy0xLTQuOS0wLjYtNS41LDQuMi01LjkKCQkJYzguNC0wLjYsMTEuMS0yLjcsMTEuNC0xMWMwLjYtMjAuMiwwLjctNDAuNSwwLjgtNjAuN2MwLTQuOS0wLjQtOS44LTAuOC0xNC43Yy0wLjUtNS45LTMuNy04LjktOS41LTkuNmMtMS4zLTAuMS0yLjUtMC4zLTMuOC0wLjMKCQkJYy0yLjEtMC4xLTIuNy0xLjMtMi43LTMuMnMxLTIuNywyLjktMi45YzExLjUtMS40LDIzLTIuOSwzNC41LTQuNWMyLjctMC40LDQuMywwLjIsNC41LDMuMmMwLjIsNC44LDAuNCw5LjYsMC43LDE0LjYKCQkJYzAuNy0wLjUsMS40LTAuOSwxLjktMS40YzEuNS0xLjQsMy4xLTIuNiw0LjQtNC4xYzEwLjUtMTEuNCwyMy45LTEzLjEsMzguMi0xMWM2LjMsMC45LDExLDUsMTQuNywxMGMxLjksMi43LDMuNiw1LjUsNS42LDguNAoJCQljMC44LTAuNywxLjUtMS4yLDIuMi0xLjljMi40LTIuMiw0LjgtNC41LDcuMi02LjhjMTAuNC05LjksMjIuOS0xMiwzNi41LTkuOWMxMC42LDEuNywyMC43LDEyLjksMjIsMjVjMC45LDguOSwxLjEsMTcuOCwxLjMsMjYuOAoJCQljMC4zLDEzLjQsMC40LDI2LjgsMC43LDQwLjJjMC4yLDguNSwzLjIsMTEuOSwxMS41LDEzLjRDODU1LjYsMzM2LjYsODU2LDMzNyw4NTYuNiwzNDJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTAuMywzNDJjLTAuOC00LjgtMC40LTUuNCwzLjgtNi4yYzIuMi0wLjQsNC40LTAuOCw2LjUtMS41YzYuMy0xLjgsOC4zLTQsOC42LTEwLjZjMC41LTEwLjMsMS0yMC42LDEuMS0zMQoJCQljMC0yNy0wLjItNTMuOS0wLjUtODAuOWMtMC4xLTQtMC42LTgtMS40LTEyYy0wLjQtMy45LTMuNS02LjktNy40LTcuM2MtMi4yLTAuNC00LjQtMC44LTYuNi0xLjNjLTQuNi0xLTQuOS0xLjYtNC4zLTYuNmgxMDEuNAoJCQl2MzIuOWwtOC4xLDAuOGMtMC41LTIuOC0wLjgtNS40LTEuMy03LjljLTEuNS03LjgtNS42LTEyLjEtMTMuMy0xMi44Yy05LjQtMC44LTE4LjktMC45LTI4LjUtMS4zVjI1NGMxMC4yLDEuNSwyMC4yLDIuNCwzMC40LDAuMQoJCQljNC4zLTAuOSw3LjEtMy4zLDguMS03LjZjMC40LTEuOSwxLTMuNywxLjMtNS42YzEuMi02LjEsMS43LTYuNSw4LjQtNS42YzAuMSwwLjksMC4yLDEuOCwwLjIsMi43YzAsMTQuNywwLDI5LjQtMC4yLDQ0LjEKCQkJYzAsMS40LDAuNiwzLjQtMS44LDMuMmMtMi4yLTAuMS01LDAuOS01LjktMi4yYy0wLjUtMS44LTAuOS0zLjctMS4yLTUuNmMtMS4xLTUuNi00LjEtOS40LTEwLTEwYy05LjYtMC45LTE5LjMtMS41LTI5LjItMi4yCgkJCWMtMC4xLDEuNi0wLjIsMi42LTAuMiwzLjZjMC4yLDE2LjIsMC40LDMyLjQsMC43LDQ4LjZjMC4yLDExLjEsMi40LDEzLjMsMTMuNSwxM2M2LjMtMC4xLDEyLjYsMCwxOC44LTAuOQoJCQljMTAuOS0xLjUsMTcuMS04LjIsMTguOC0xOS4xYzEtNi41LDEtNi40LDcuNy02LjJjMi42LDAuMSwzLjIsMC45LDIuOCwzLjVjLTEuNSwxMC4yLTIuOCwyMC41LTQuMSwzMC43Yy0wLjMsMi42LTEuMywzLjgtMy45LDMuOAoJCQljLTEzLjMsMC4xLTI2LjYsMC4zLTM5LjksMC4zYy0xOS44LTAuMS0zOS42LTAuNC01OS40LTAuNUMzLjQsMzQyLjIsMS44LDM0Mi4xLDAuMywzNDJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyMywyMjkuM2wxLjQsMTcuOGMwLjYtMC40LDEuMi0wLjgsMS44LTEuNGMxLjItMSwyLjQtMi4yLDMuNS0zLjNjOS43LTExLjIsMjIuMy0xMy42LDM2LjItMTIuMwoJCQljOS40LDAuOSwxNi4xLDYuMSwyMS4yLDEzLjdjNC4xLDYuMSw1LjIsMTIuOSw1LjQsMjAuMWMwLjQsMjAuNCwwLjgsNDAuOSwxLjMsNjEuM2MwLjEsNS44LDIuMyw4LjUsNy45LDEwCgkJCWMxLjUsMC40LDMuMSwwLjgsNC43LDEuMWMzLjEsMC41LDQuNCwyLjMsMy45LDUuNmgtNTYuNGMtMS00LTAuNi01LjMsMy4xLTYuMWM2LjEtMS4zLDguMy01LjIsOC42LTEwLjljMS40LTIwLjQsMi00MC44LTAuMi02MS4yCgkJCWMtMC4zLTItMC43LTQtMS4yLTUuOWMtMi43LTExLjItOC44LTE1LTIxLjQtMTIuN2MtOC44LDEuNi0xNi41LDEwLjQtMTYuNywxOS45Yy0wLjUsMjAuMS0wLjIsNDAuMi0wLjEsNjAuNAoJCQljMCw1LDIuNCw4LjYsNy42LDEwLjJjNCwxLjIsNC40LDIuMSw1LjEsNS44Yy0xOSwxLjItMzcuOCwwLjctNTYuNSwwLjhjLTEuMS01LTAuNi01LjcsNC02LjFjOC41LTAuNiwxMS40LTMuMiwxMS41LTExLjYKCQkJYzAuMy0yMy41LDAuMy00Ny4xLDAuNS03MC42Yy0wLjEtMS40LTAuMi0yLjgtMC40LTQuMWMtMC42LTUuNS0zLjgtOC45LTkuNC05LjZjLTEuNS0wLjItMy0wLjMtNC41LTAuNGMtMS4zLDAtMi4zLTAuOS0yLjMtMi4yCgkJCWMwLTAuMywwLTAuNiwwLjItMC45YzAuMy0xLjEsMS40LTIuNiwyLjItMi43QzM5Ni45LDIzMi4zLDQwOS43LDIzMC44LDQyMywyMjkuM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTYzLjgsMHY1OS42YzEuNi0xLjUsMi42LTIuMywzLjUtMy4yYzkuNC04LjgsMjAuNS0xMi41LDMzLjQtMTAuOGMxMi40LDEuNywyMi4xLDEyLjksMjIuNywyNi45CgkJCWMwLjQsOS42LDAuNSwxOS4yLDAuOCwyOC43czAuNiwxOS40LDEuMiwyOWMwLjUsOC4zLDIuMyw5LjksMTAuNiwxMS4yYzQsMC42LDQuNCwxLjEsMy43LDUuNGgtNTAuNWMtMC45LTMuOS0wLjQtNS4xLDMuMi02CgkJCWM1LjQtMS4yLDcuNS00LjUsNy41LTkuOGMwLjEtMTYsMC41LTMxLjksMC40LTQ3LjljLTAuMi00LTAuOC04LjEtMS43LTEyYy0yLTkuOS02LjMtMTQuNS0xOS44LTExLjdjLTcuOCwxLjgtMTMuNSw4LjQtMTQsMTYuNAoJCQljLTAuNiwxMy45LTAuNiwyNy45LTAuOCw0MS44YzAsNC45LDAuMSw5LjgsMC40LDE0LjdjMC4yLDQuNSwyLjksNy4xLDcsOC40YzAuOCwwLjIsMiwwLjMsMi4zLDAuOWMwLjcsMS4yLDEuMiwyLjYsMS4zLDQKCQkJYzAsMC40LTEuNywxLjQtMi41LDEuNGMtMTUuMS0wLjEtMzAuMi0wLjItNDUuNC0wLjVjLTEsMC0yLTAuOC0zLTEuMmMwLjctMSwxLjEtMi41LDItMi45YzEuOS0wLjksNC0xLjQsNi4xLTEuNwoJCQljMy4xLTAuNCw1LTIsNS40LTVjMC43LTMuOCwxLjEtNy42LDEuMy0xMS40YzAuMy0zMi41LDAuNC02NSwwLjUtOTcuNGMwLTIuMy0wLjEtNC43LTAuNC03Yy0wLjctNS41LTMuNC04LjQtOC44LTkuNQoJCQljLTEuNC0wLjItMi43LTAuNi0zLjktMS4yYy0xLTAuNy0xLjYtMi0yLjQtMy4xYzEtMC41LDEuOS0xLjQsMi45LTEuNWM0LjgtMC42LDkuOC0wLjksMTQuNi0xLjVjNi40LTAuOSwxMi44LTIsMTkuMi0yLjkKCQkJQzU2MS43LDAuMiw1NjIuNiwwLjEsNTYzLjgsMHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU2LjcsMjg3LjljLTAuMiwxMi45LTMuNSwyNC45LTExLjEsMzUuNGMtMTIuMywxNy4xLTI5LjgsMjIuOS00OS44LDIxLjJjLTI3LjgtMi40LTQ1LjctMjEuNy00Ny44LTQ5LjYKCQkJYy0wLjktMTIuNCwwLTI0LjUsNS4xLTM2YzcuOS0xNy45LDIyLjEtMjcuMiw0MS4zLTI5LjNjMTAuNC0xLjEsMjAuNSwwLDMwLDQuMmMxOC42LDguMiwyNy45LDIzLjQsMzEuMiw0Mi45CgkJCUMzNTYuMywyODAuNSwzNTYuNCwyODQuMiwzNTYuNywyODcuOXogTTI3NS4yLDI4Mi4zYzEuMSw4LjcsMS44LDE2LjgsMy4yLDI0LjdjMS41LDguNiw0LjYsMTYuNiwxMSwyM2M5LjgsOS42LDI0LjksOCwzMi4xLTMuNwoJCQljMi0zLjQsMy42LTcsNC41LTEwLjhjMy4zLTEyLjYsMy4yLTI1LjUsMS42LTM4LjRjLTEuMy0xMC00LjEtMTkuNi0xMC40LTI3LjhjLTUuOC03LjQtMTMuMS0xMi4zLTIyLjktMTAuMnMtMTQuOSw5LjctMTYuNiwxOQoJCQlDMjc2LjMsMjY2LjMsMjc2LDI3NC42LDI3NS4yLDI4Mi4zTDI3NS4yLDI4Mi4zeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MjguNCwyODguNmMwLjItMTMuNiwyLjMtMjUuNiw5LjEtMzYuM2M4LjctMTMuNywyMS40LTIxLDM3LjQtMjIuNWMxMC4zLTAuOSwyMC41LTAuMiwzMC4xLDMuOQoJCQljMTguMSw3LjgsMjcuNiwyMi4zLDMxLjMsNDEuMWMyLjYsMTMsMS4yLDI2LjYtNC4yLDM4LjhjLTgsMTguNS0yMi44LDI4LjMtNDIuNiwzMC43Yy0xMS42LDEuNC0yMi44LDAuMS0zMy4yLTUuNAoJCQljLTE3LjQtOS4xLTI1LjQtMjQuNC0yNy41LTQzLjNDNTI4LjUsMjkyLjksNTI4LjUsMjkwLjIsNTI4LjQsMjg4LjZ6IE02MDkuNCwyOTIuN2wwLjktMC4xYy0xLjQtOC45LTIuMi0xNy45LTQuMy0yNi43CgkJCWMtMi4zLTkuOC03LTE4LjYtMTYtMjQuMWMtOS4xLTUuOC0yMS4xLTMuMi0yNyw1LjljLTAuMSwwLjEtMC4xLDAuMi0wLjIsMC4zYy0yLjEsMy40LTMuNiw3LjItNC40LDExLjIKCQkJYy0yLjksMTMuNy0yLjIsMjcuNS0wLjQsNDEuM2MxLjIsOSwzLjQsMTcuOCw4LjYsMjUuNWM1LjgsOC42LDE0LjYsMTEuOSwyNC41LDkuNGM3LjktMiwxMS43LTguMiwxNC4zLTE1LjEKCQkJQzYwOC44LDMxMS4zLDYwOS40LDMwMiw2MDkuNCwyOTIuN0w2MDkuNCwyOTIuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDQ3LjUsMTQuMmMtOS41LDEtMTguNiwxLjktMjcuOCwzLjFjLTYsMC44LTkuNiw0LjMtMTAsMTAuNWMwLDAuMy0wLjEsMC42LTAuMiwwLjkKCQkJYy0xLjEsNy42LTEuNyw4LjEtOS44LDcuM2MwLjItMi4zLDAuNS00LjYsMC42LTYuOWMwLjMtNy4zLDAuNi0xNC43LDAuNy0yMmMwLTEuOCwwLjQtMi43LDIuNS0yLjdjMzguNiwwLjEsNzcuMSwwLjEsMTE1LjcsMC4xCgkJCWMwLjQsMCwwLjksMC4xLDEuMywwLjJWMzZjLTAuNiwwLjEtMSwwLjItMS40LDAuMmMtNi4zLDAuMy02LjMsMC4zLTYuOC01LjljLTAuNi04LjQtMy45LTEyLjMtMTIuMS0xMy40cy0xNi40LTEuNy0yNC44LTIuNgoJCQljLTAuMSwxLjUtMC4yLDIuNC0wLjIsMy40YzAsMzEuNiwwLDYzLjMsMC4xLDk0LjljMCw1LDAuMywxMCwwLjUsMTVjMC40LDguMyw0LjQsMTIuNCwxMi43LDEzLjFjNSwwLjQsNS40LDEsNC40LDYuNGgtNjMKCQkJYy0wLjUtNC43LDAuMS01LjUsNC4zLTYuMmMwLjgtMC4xLDEuNy0wLjQsMi41LTAuNWM4LjUtMS43LDkuOS0zLjIsMTAuMi0xMS44YzAuNC0xMS41LDAuNi0yMywwLjctMzQuNWMwLjEtMjUuMywwLTUwLjcsMC03Ni4xCgkJCUM0NDcuNywxNi45LDQ0Ny42LDE1LjksNDQ3LjUsMTQuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzQwLjIsOTIuMUg3MzZjLTE4LjMsMC0zNi42LDAuMS01NS0wLjFjLTMuMSwwLTMuNywxLTMuNywzLjhjMC4yLDkuNiwyLjUsMTkuMSw2LjksMjcuNgoJCQljNi4yLDExLjgsMTcuNywxNi41LDMwLjUsMTIuNWM2LjEtMiwxMS42LTUuNCwxNi4yLTkuOGMxLjUtMS40LDMuMS0yLjksNC43LTQuM2MzLDMuNiwzLjMsNi40LDAuNyw5LjQKCQkJYy0xNC42LDE2LjktMzQuNiwyMi40LTU0LjQsMTUuMmMtMTMuMi00LjgtMjItMTQuNS0yNi41LTI3LjdjLTUuNS0xNi4zLTQuMS0zMi40LDMuMS00Ny45YzguMS0xNy4zLDI0LTI2LDQzLjEtMjUuNgoJCQljMjQuNywwLjUsMzUuOCwyMCwzNy41LDM2LjdDNzM5LjYsODUuMSw3MzkuOSw4OC4yLDc0MC4yLDkyLjF6IE03MTcsODAuOGMtMC40LTcuNy0zLjEtMTMuNi02LjMtMTkuNQoJCQljLTUuMS05LjQtMjIuMy0xMi4zLTI4LjYsMC45Yy0yLDQuMy0zLjIsOC45LTQuNiwxMy41Yy0wLjYsMi41LTEsNS0xLjIsNy42TDcxNyw4MC44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDI5LDI1Ni43Yy0yLjgsMC4yLTQuOCwwLjQtNi44LDAuNWMtNC44LDAuMy01LjIsMC02LjktNC43Yy0wLjQtMS4xLTAuOS0yLjItMS4yLTMuMwoJCQljLTMuMy0xMS0xMS4xLTEyLjktMjAuOS0xMC4yYy0xMC44LDMtMTMuNiwxNS4xLTUuNCwyMi45YzMuNCwzLDcsNS45LDEwLjcsOC42YzYuNSw1LDEzLjEsOS45LDE5LjYsMTQuOAoJCQljMTEuNiw4LjgsMTUuMywyMC41LDExLjUsMzQuMmMtMy43LDEzLjItMTMuMywyMC43LTI2LjMsMjMuOWMtMTMuMiwzLjMtMjUuNy0wLjItMzgtNC43Yy0xLjItMC40LTIuMi0yLjYtMi4zLTQKCQkJYy0wLjQtNC45LTAuMy05LjgtMC4zLTE0LjdjMC0xLjktMC4zLTQuMywyLjQtNWMzLTAuNyw2LjEtMS42LDguNywxLjFjMC44LDEsMS41LDIsMi4xLDMuMmMwLjgsMS41LDEuNSwzLjEsMi4xLDQuNgoJCQljNC45LDEyLjUsMTMuOCwxMi4zLDI1LjQsOC4zYzYuMS0yLjEsOC40LTEwLDUuMi0xNS42Yy0yLjEtMy42LTQuOC02LjgtNy45LTkuNWMtNS4zLTQuNS0xMS4yLTguNC0xNi44LTEyLjcKCQkJYy0zLjgtMi44LTcuNS01LjktMTEtOS4yYy0xMS4zLTExLjItMTIuNC0zMi4xLTIuNS00NC42YzUuNy03LjIsMTMuNS0xMC4yLDIyLjMtMTFjMTAuOS0xLDIxLjgsMC4zLDMyLjEsMy45CgkJCWMxLjQsMC41LDMuMiwyLjMsMy40LDMuNkMxMDI4LjcsMjQzLjcsMTAyOC44LDI1MC4xLDEwMjksMjU2Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwOTMuNSwyMDQuM2MwLDUuNCwwLDEwLjEsMCwxNC45czAsOS40LDAsMTQuNWgyNy41bC0yLjgsMTIuOGgtMjQuNmMtMC4xLDEuMy0wLjIsMi4zLTAuMiwzLjMKCQkJYzAuMiwyMC4yLDAuNSw0MC41LDAuNyw2MC43YzAuMSwyLjksMC4zLDUuNywwLjcsOC42YzEuMSw4LjgsNy42LDE0LDE2LjgsMTMuM2M0LTAuMyw4LTAuOSwxMi0xLjRjMS4yLDQuMywwLjIsNi42LTMuNSw4LjQKCQkJYy05LjIsNC40LTE5LjEsNS40LTI5LDQuN2MtMTEtMC44LTIxLjItMTEtMjItMjIuNGMtMS4xLTE1LjctMS40LTMxLjUtMS45LTQ3LjJjLTAuMi04LTAuMi0xNi0wLjItMjRjMC0xLjEsMC0yLjMsMC0zLjhoLTEzLjMKCQkJYzAtMy41LTAuMi02LjYsMC4xLTkuN2MwLjEtMC44LDEuNy0xLjksMi43LTEuOWM5LjUtMC43LDE2LjQtNS4yLDIwLjItMTMuOWMyLjEtNC43LDMuNC05LjgsNS4yLTE0LjdjMC4zLTAuOSwxLjMtMiwyLjEtMi4xCgkJCUMxMDg2LjksMjA0LjIsMTA5MCwyMDQuMywxMDkzLjUsMjA0LjN6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyMS40LDMxNy44YzAuMiwwLjIsMC40LDAuNCwwLjYsMC42YzQsOC4yLDMuOCw4LjMtMywxNC40Yy0yMi40LDE5LjktNTIuMywxMi44LTY2LTMuNAoJCQljLTcuNC04LjgtMTEuMS0xOS0xMi41LTMwLjJjLTEuNy0xMy40LTEtMjYuNiw0LjEtMzkuM2M3LjgtMTkuMSwyMi4zLTI5LjIsNDMtMzAuMmMxMS0wLjYsMjEuNiwxLjIsMzIuMiw0YzEuMSwwLjUsMS44LDEuNCwyLDIuNgoJCQljMC4xLDcuMi0wLjEsMTQuNS0wLjIsMjEuN2MwLDIuNC0xLDMuNC0zLjQsMy42Yy02LjksMC42LTYsMi4zLTguMy01LjVjLTAuOS0zLjQtMi4xLTYuNy0zLjUtOS45Yy0yLjItNC45LTYuMy03LjMtMTEuNi03LjgKCQkJYy0xMC45LTEuMS0xOS4yLDMuOC0yMy4zLDE0Yy00LjUsMTEuMS00LjcsMjIuOS00LjIsMzQuNmMwLjQsOS42LDEuNiwxOS4xLDUuNSwyOGM1LjYsMTIuOSwxNS43LDE4LjYsMjguMiwxNS44CgkJCWM2LjEtMS41LDExLjgtNC42LDE2LjMtOUMyMTguNywzMjAuNCwyMjAsMzE5LjIsMjIxLjQsMzE3Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkxOS43LDIyOC42YzAsMTAuOS0wLjEsMjEuNCwwLDMyYzAuMywyMC40LDAuOCw0MC45LDEuMiw2MS4zYzAsMS4yLDAuMiwyLjMsMC40LDMuNQoJCQljMS41LDguMywyLjYsOS40LDEwLjksMTAuNmMyLjgsMC40LDUuMywxLDUsNS42Yy0yMC4xLDEtNDAuNCwwLjktNjAuNi0wLjFjLTAuNC0zLjMsMS4yLTQuMywzLjEtNC45YzEuOC0wLjUsMy43LTAuOSw1LjYtMS4xCgkJCWMzLjktMC41LDYuMi0yLjksNi43LTYuNmMwLjgtNi45LDEuOC0xMy44LDEuOC0yMC42Yy0wLjEtMTguOC0wLjYtMzcuNy0xLjItNTYuNWMtMC4yLTcuOC0zLjItMTAuNy0xMS0xMS43Yy0xLjEsMC0yLjEtMC4zLTMtMC45CgkJCWMtMC45LTEuMS0xLjctMi4zLTIuNC0zLjZjMS0wLjUsMi0xLjQsMy4yLTEuNWMxMS0xLjUsMjEuOS0yLjgsMzIuOS00LjJDOTE0LjUsMjI5LjUsOTE2LjgsMjI5LDkxOS43LDIyOC42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05MDUuNywxNzcuNGM4LjQsMC4xLDE1LjIsNywxNS4xLDE1LjRjMC4xLDguMi02LjQsMTUtMTQuNiwxNS4xYy0wLjEsMC0wLjIsMC0wLjMsMAoJCQljLTguMi0wLjEtMTQuOC02LjYtMTUtMTQuOEM4OTAuOSwxODQuNiw4OTcuNywxNzcuMyw5MDUuNywxNzcuNHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTYuNSA0Ni4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTYuNSA0Ni4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzIwMjUyRDt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjMsMTIuOWMtMC42LTAuOS0xLjMtMS43LTIuMi0yLjRjLTAuOS0wLjctMS45LTEuMi0yLjktMS42Yy0xLjEtMC40LTIuMi0wLjYtMy40LTAuNgoJCWMtMi4yLDAtNC4xLDAuNC01LjYsMS4zYy0xLjUsMC44LTIuOCwyLTMuNywzLjRjLTEsMS40LTEuNiwzLTIuMSw0LjljLTAuNCwxLjgtMC43LDMuNy0wLjcsNS42czAuMiwzLjcsMC43LDUuNAoJCWMwLjQsMS44LDEuMSwzLjMsMi4xLDQuN2MxLDEuNCwyLjIsMi41LDMuNywzLjRjMS41LDAuOCwzLjQsMS4zLDUuNiwxLjNjMywwLDUuMy0wLjksNy0yLjdjMS43LTEuOCwyLjctNC4yLDMuMS03LjJoOS40CgkJYy0wLjIsMi44LTAuOSw1LjMtMS45LDcuNVMzNyw0MCwzNS4zLDQxLjZjLTEuNywxLjYtMy43LDIuOC02LDMuNnMtNC44LDEuMi03LjUsMS4yYy0zLjQsMC02LjQtMC42LTkuMS0xLjhzLTUtMi44LTYuOS00LjkKCQljLTEuOS0yLjEtMy4zLTQuNS00LjMtNy4zUzAsMjYuNiwwLDIzLjRjMC0zLjMsMC41LTYuNCwxLjUtOS4yczIuNC01LjMsNC4zLTcuNHM0LjEtMy44LDYuOS01QzE1LjMsMC42LDE4LjQsMCwyMS44LDAKCQljMi40LDAsNC43LDAuNCw2LjksMS4xczQuMSwxLjcsNS44LDMuMWMxLjcsMS4zLDMuMSwzLDQuMiw1YzEuMSwyLDEuOCw0LjMsMi4xLDYuOGgtOS40QzMxLjMsMTQuOCwzMC45LDEzLjgsMzAuMywxMi45eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyLjcsMjIuNGMwLjgtMi4xLDEuOS0zLjksMy4zLTUuM2MxLjQtMS41LDMuMi0yLjYsNS4yLTMuNGMyLTAuOCw0LjMtMS4yLDYuOC0xLjJzNC44LDAuNCw2LjksMS4yCgkJYzIsMC44LDMuOCwxLjksNS4yLDMuNGMxLjQsMS41LDIuNiwzLjIsMy4zLDUuM2MwLjgsMi4xLDEuMiw0LjQsMS4yLDdzLTAuNCw0LjktMS4yLDYuOWMtMC44LDIuMS0xLjksMy44LTMuMyw1LjMKCQlzLTMuMiwyLjYtNS4yLDMuNGMtMiwwLjgtNC4zLDEuMi02LjksMS4yYy0yLjUsMC00LjgtMC40LTYuOC0xLjJzLTMuOC0xLjktNS4yLTMuNHMtMi42LTMuMi0zLjMtNS4zYy0wLjgtMi4xLTEuMi00LjQtMS4yLTYuOQoJCUM0MS41LDI2LjgsNDEuOSwyNC40LDQyLjcsMjIuNHogTTUwLjcsMzMuMWMwLjIsMS4yLDAuNywyLjMsMS4zLDMuM3MxLjQsMS43LDIuNCwyLjNzMi4yLDAuOSwzLjcsMC45czIuNy0wLjMsMy44LTAuOQoJCWMxLTAuNiwxLjgtMS40LDIuNC0yLjNjMC42LTEsMS0yLjEsMS4zLTMuM2MwLjItMS4yLDAuNC0yLjUsMC40LTMuOHMtMC4xLTIuNS0wLjQtMy44Yy0wLjItMS4yLTAuNy0yLjMtMS4zLTMuMwoJCWMtMC42LTEtMS40LTEuNy0yLjQtMi4zYy0xLTAuNi0yLjMtMC45LTMuOC0wLjlzLTIuNywwLjMtMy43LDAuOXMtMS44LDEuNC0yLjQsMi4zYy0wLjYsMS0xLDItMS4zLDMuM2MtMC4yLDEuMi0wLjQsMi41LTAuNCwzLjgKCQlDNTAuMywzMC42LDUwLjQsMzEuOSw1MC43LDMzLjF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzYsOC4zVjEuMWg4Ljh2Ny4zSDc2VjguM3ogTTg0LjgsMTMuM3YzMi4xSDc2VjEzLjNIODQuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NS45LDEzLjN2NC41aDAuMmMxLjEtMS45LDIuNi0zLjIsNC4zLTQuMWMxLjgtMC44LDMuNi0xLjMsNS41LTEuM2MyLjQsMCw0LjMsMC4zLDUuOCwxCgkJYzEuNSwwLjYsMi43LDEuNSwzLjYsMi43YzAuOSwxLjEsMS41LDIuNSwxLjgsNC4yYzAuNCwxLjYsMC41LDMuNCwwLjUsNS40djE5LjdoLTguOFYyNy4yYzAtMi42LTAuNC00LjYtMS4yLTUuOQoJCWMtMC44LTEuMy0yLjMtMi00LjQtMmMtMi40LDAtNC4xLDAuNy01LjIsMi4xcy0xLjYsMy44LTEuNiw3djE2LjhoLTguOFYxMy4zSDk1Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTM4LjgsMS4xYzIuOSwwLDUuNSwwLjUsOCwxLjRzNC42LDIuMyw2LjQsNC4xYzEuOCwxLjgsMy4yLDQuMSw0LjIsNi44czEuNSw1LjksMS41LDkuNgoJCWMwLDMuMi0wLjQsNi4yLTEuMiw4LjlzLTIuMSw1LjEtMy44LDcuMXMtMy44LDMuNS02LjMsNC43Yy0yLjUsMS4xLTUuNCwxLjctOC44LDEuN2gtMTkuMVYxLjFIMTM4Ljh6IE0xMzguMSwzNy4xCgkJYzEuNCwwLDIuOC0wLjIsNC4xLTAuN3MyLjUtMS4yLDMuNS0yLjNzMS45LTIuNCwyLjUtNC4xczAuOS0zLjgsMC45LTYuMmMwLTIuMi0wLjItNC4yLTAuNy02Yy0wLjQtMS44LTEuMS0zLjMtMi4xLTQuNgoJCXMtMi4zLTIuMy0zLjktMi45cy0zLjYtMS02LTFoLTYuOXYyNy45TDEzOC4xLDM3LjFMMTM4LjEsMzcuMXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNzEsMzcuNmMxLjMsMS4zLDMuMiwxLjksNS43LDEuOWMxLjgsMCwzLjMtMC40LDQuNi0xLjNjMS4zLTAuOSwyLjEtMS44LDIuNC0yLjhoNy44CgkJYy0xLjIsMy44LTMuMSw2LjYtNS43LDguMmMtMi42LDEuNy01LjcsMi41LTkuMywyLjVjLTIuNSwwLTQuOC0wLjQtNi44LTEuMnMtMy43LTItNS4xLTMuNGMtMS40LTEuNS0yLjUtMy4zLTMuMy01LjMKCQljLTAuOC0yLjEtMS4xLTQuMy0xLjEtNi44YzAtMi40LDAuNC00LjYsMS4yLTYuN3MxLjktMy45LDMuMy01LjRjMS40LTEuNSwzLjItMi43LDUuMi0zLjZjMi0wLjksNC4yLTEuMyw2LjctMS4zCgkJYzIuNywwLDUuMSwwLjUsNy4xLDEuNnMzLjcsMi41LDUsNC4yYzEuMywxLjgsMi4yLDMuOCwyLjgsNi4xczAuOCw0LjYsMC42LDcuMUgxNjlDMTY4LjksMzQuMywxNjkuNywzNi40LDE3MSwzNy42eiBNMTgwLjksMjAuOAoJCWMtMS4xLTEuMi0yLjctMS43LTQuOC0xLjdjLTEuNCwwLTIuNiwwLjItMy41LDAuN3MtMS43LDEuMS0yLjIsMS44Yy0wLjYsMC43LTEsMS40LTEuMiwyLjJjLTAuMiwwLjgtMC40LDEuNS0wLjQsMi4xaDE0LjMKCQlDMTgyLjcsMjMuNiwxODIsMjEuOSwxODAuOSwyMC44eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwMS40LDM3LjRjMC40LDAuNywwLjksMS4yLDEuNSwxLjdzMS4zLDAuOCwyLjEsMXMxLjYsMC4zLDIuNSwwLjNjMC42LDAsMS4zLTAuMSwyLTAuMgoJCWMwLjctMC4xLDEuMy0wLjQsMS45LTAuN2MwLjYtMC4zLDEtMC43LDEuNC0xLjJzMC42LTEuMiwwLjYtMmMwLTEuMy0wLjktMi4zLTIuNi0zcy00LjItMS4zLTcuMy0yYy0xLjMtMC4zLTIuNS0wLjYtMy44LTEKCQljLTEuMi0wLjQtMi4zLTAuOS0zLjMtMS42Yy0xLTAuNi0xLjctMS40LTIuMy0yLjRzLTAuOS0yLjItMC45LTMuNmMwLTIuMSwwLjQtMy44LDEuMi01LjFjMC44LTEuMywxLjktMi40LDMuMi0zLjEKCQljMS4zLTAuOCwyLjgtMS4zLDQuNS0xLjZzMy4zLTAuNSw1LjEtMC41YzEuNywwLDMuNCwwLjIsNS4xLDAuNWMxLjYsMC4zLDMuMSwwLjksNC40LDEuN2MxLjMsMC44LDIuMywxLjgsMy4yLDMuMQoJCWMwLjgsMS4zLDEuNCwyLjksMS41LDQuOUgyMTNjLTAuMS0xLjctMC44LTIuOC0xLjktMy40Yy0xLjItMC42LTIuNS0wLjktNC4xLTAuOWMtMC41LDAtMSwwLTEuNiwwLjFzLTEuMSwwLjItMS42LDAuNAoJCWMtMC41LDAuMi0wLjksMC41LTEuMiwwLjlzLTAuNSwwLjktMC41LDEuNmMwLDAuOCwwLjMsMS40LDAuOSwxLjljMC42LDAuNSwxLjMsMC45LDIuMywxLjJjMC45LDAuMywyLDAuNiwzLjIsMC44CgkJYzEuMiwwLjIsMi40LDAuNSwzLjcsMC44czIuNSwwLjYsMy44LDEuMWMxLjIsMC40LDIuMywxLDMuMywxLjZjMSwwLjcsMS43LDEuNSwyLjMsMi41czAuOSwyLjMsMC45LDMuOGMwLDIuMS0wLjQsMy45LTEuMyw1LjMKCQljLTAuOCwxLjQtMiwyLjYtMy4zLDMuNHMtMi45LDEuNS00LjcsMS44cy0zLjUsMC41LTUuNCwwLjVzLTMuNy0wLjItNS41LTAuNmMtMS44LTAuNC0zLjQtMS00LjctMS45Yy0xLjQtMC45LTIuNS0yLTMuNC0zLjQKCQlzLTEuNC0zLjItMS41LTUuNGg4LjRDMjAwLjgsMzUuOSwyMDEsMzYuNywyMDEuNCwzNy40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzMy43LDEuMXYyMy43bDExLjEtMTEuNWgxMC40TDI0My4xLDI1bDEzLjUsMjAuM2gtMTAuN0wyMzcuMSwzMWwtMy40LDMuM3YxMWgtOC44VjEuMUgyMzMuN3oiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/forbes.c5062b1e.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc2LjcxIDI0LjE0Ij48cGF0aCBkPSJNMCAxOS45NGgxLjE2YTEuMjQgMS4yNCAwIDAgMCAxLTFWNS41NGExLjIgMS4yIDAgMCAwLTEtMUgwVi4yMWgxMi4yNHY0LjM4aC0xLjE4YTEuMjEgMS4yMSAwIDAgMC0uOTIgMXYxMy40YTEuMjUgMS4yNSAwIDAgMCAuOTIgMWgxLjJ2NC4ySDB2LTQuMnptMTYuMDYtLjA0aDFhMS4yNCAxLjI0IDAgMCAwIDEtMVY1LjUxYTEuMiAxLjIgMCAwIDAtMS0xaC0xVi4yMWgxMS41OWM2LjM5IDAgOS44MSAyIDkuODEgNi4xOSAwIDMtMS43NCA0LjQxLTQuNzUgNS4xM3YuMTRjMy41Mi41NSA1LjQ3IDIuMzYgNS40NyA1LjYxIDAgNC42MS00IDYuODctMTAuNDMgNi44N0gxNi4wNnYtNC4yNHptOS43OS0xMC4wOWgxLjIxYzEuOTEgMCAyLjY3LS44OSAyLjY3LTIuNTZzLS43Mi0yLjUzLTIuNjMtMi41M2gtMS4yN3Y1LjA5em0xLjM3IDkuOTFjMi4xMiAwIDIuOS0xIDIuOS0yLjk0cy0uNzktMi44LTIuOS0yLjhoLTEuMzd2NS43NGgxLjM3em0xNy43MS4wOWgxLjEzYTEuMjQgMS4yNCAwIDAgMCAxLTFWNC42NGgtMmwtLjUxIDQuNDFIMzkuOHYtOWgyMi4zNXY5aC00LjcybC0uNTUtNC40MWgtMS44MnYxNC4xN2ExLjI0IDEuMjQgMCAwIDAgMSAxaDF2NC4ySDQ0Ljkzdi00LjJ6IiBmaWxsPSIjMjIxZjFmIi8+PHBhdGggZmlsbD0iIzdlYzI0MiIgZD0iTTc0Ljc5IDI0LjAxSDY0LjY4bDEuOTItMTAuOTloMTAuMTFsLTEuOTIgMTAuOTl6Ii8+PHBhdGggZD0iTTY0LjkxIDEuODFhMS43OCAxLjc4IDAgMSAxIDEuNzggMS43OCAxLjc3IDEuNzcgMCAwIDEtMS43OC0xLjc4em0zLjI2IDBBMS40OSAxLjQ5IDAgMCAwIDY2LjY4LjI5YTEuNTIgMS41MiAwIDEgMCAxLjUgMS41MnptLTIuMTEtMWguNzJhLjYxLjYxIDAgMCAxIC43My41OS41My41MyAwIDAgMS0uMzkuNTVsLjQyLjhoLS40OGwtLjM5LS43NmgtLjMzdi43NmgtLjI4Vi44MXptLjcuOTFjLjI1IDAgLjM5LS4wOC4zOS0uM3MtLjE0LS4yOS0uMzktLjI5aC0uMzN2LjU4aC4zNHoiIGZpbGw9IiMwMTAxMDEiLz48L3N2Zz4="

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIyNy42IDM1MS44Ij48c3R5bGU+LnN0MHtmaWxsOiMwOTMzNTZ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIyNy42IDMwNy41Yy0xLjUuMy0yLjggMS00LjEgMS42LTcuMyAzLjItMTQuNSA2LjQtMjEuNyA5LjZsLTEuNS42Yy0uNC4xLS42LS4xLS43LS40LS4xLS43LS4xLTEuNC0uMS0yLjF2LTUwLjRjMC0uNi0uMy0uOS0uOS0uOC0xLjYuMi0zLjEuNC00LjcuNS04LjQgMS0xNi44IDEuMi0yNS4yLjMtNy41LS44LTE0LjgtMi41LTIxLjktNS4zLTcuNi0zLTE0LjItNy42LTE5LjYtMTMuOS01LjgtNi43LTkuNi0xNC41LTEyLjEtMjIuOS0yLjgtOS42LTMuNi0xOS40LTMtMjkuNC41LTguNiAyLjQtMTYuOSA1LjktMjQuOCA1LjMtMTEuOCAxMy43LTIwLjUgMjUuNC0yNi4xIDUuOC0yLjggMTItNC42IDE4LjQtNS43IDMuNy0uNyA3LjUtMSAxMS4yLTEuMyA5LjMtLjcgMTguNy0uNCAyOCAuMmwxMS4xLjZjNC41LjIgOC45LjQgMTMuNC43LjcgMCAxLjQtLjEgMi4xLjR2MTY4LjZ6bS02ODcuOS04MC44VjEwMS41YzAtMy45LS40LTMuNCAzLjQtMy40aDIxLjdjMS4yIDAgMS4zLjIgMS4zIDEuNHYxNjEuMWMwIDMuNC4zIDMtMyAzaC0zMS40Yy0yLjcgMC0yLjEuMy0zLjUtMi01LjYtOS44LTExLjMtMTkuNi0xNi45LTI5LjQtNi42LTExLjYtMTMuMy0yMy4yLTE5LjktMzQuNy03LjctMTMuNC0xNS4zLTI2LjctMjMtNDAuMWwtMTIuOS0yMi41Yy0uMi0uMy0uNC0uNi0uNi0xLS42LjEtLjQuNi0uNSAxdjExNS41YzAgMy43IDAgNy40LS4xIDExLjF2MS4yYzAgLjUtLjMuOS0uOS45aC0yMy42Yy0xLjUgMC0xLjYtLjEtMS42LTEuNlYxMDEuNGMwLTMuOC0uNS0zLjMgMy4yLTMuM2gzMi4zYy43IDAgMS4yLjMgMS41LjkgMS40IDIuNSAyLjggNC45IDQuMyA3LjMgOS44IDE2LjkgMTkuNiAzMy45IDI5LjMgNTAuOCA5LjEgMTUuOCAxOC4yIDMxLjYgMjcuMyA0Ny4zIDQgNi45IDcuOSAxMy43IDExLjkgMjAuNi41LjYuNyAxLjIgMS43IDEuN3ptNDE1LjgtNTEuMVYyNjBjMCAzLjYuNSAzLTMuMSAzLjUtNS41LjktMTEgMS42LTE2LjYgMi4yLTExIDEuMy0yMi4xIDIuMS0zMy4yIDEuNi05LjctLjUtMTkuMi0yLjUtMjguMS02LjUtMTEuNy01LjMtMjAuOC0xMy40LTI2LjktMjQuNy0zLjUtNi42LTUuNy0xMy42LTYuOC0yMS0uNy00LjgtMS05LjUtLjktMTQuMy4yLTcuMiAxLjEtMTQuMiAzLjEtMjEuMiAyLjMtOC4xIDUuOS0xNS41IDExLjMtMjIuMSA0LjgtNS45IDEwLjctMTAuNiAxNy41LTE0LjEgNi45LTMuNSAxNC4zLTUuNSAyMi4xLTYuNCA2LjUtLjcgMTMtLjYgMTkuNS0uNCAzLjkuMSA3LjguNCAxMS43LjkuNCAwIC44LjEgMS4yLjEgMS4yLjEgMS4zIDAgMS40LTEuM1Y5MWMwLS44IDAtMS42LjEtMi40IDAtLjMuMy0uNi42LS42aDI1LjljLjkuMSAxIC4yIDEuMSAxLjJ2Mi4xYy4xIDI4LjIuMSA1Ni4zLjEgODQuM3ptLTI1NS4zIDQyLjd2NDIuMmMwIC44LjMgMS42LS4yIDIuMy0uNS43LTEuNS40LTIuMi41LTEuOS4zLTMuOS41LTUuOC43LTguNC43LTE2LjggMS40LTI1LjIgMS43LTguNS4zLTE3IC40LTI1LjUuMy03LjIgMC0xNC4zLS41LTIxLjMtMi02LTEuMy0xMS44LTMuMy0xNi45LTYuOS01LjEtMy42LTguNy04LjQtMTAuOS0xNC4yLTEuNy00LjQtMi41LTguOS0yLjktMTMuNS0uMy0zLjYtLjMtNy4yLjItMTAuOC44LTcuMiAzLjMtMTMuNyA4LjItMTkuMiAzLjUtMy45IDcuNy02LjYgMTIuNS04LjcgNS4xLTIuMiAxMC40LTMuNSAxNS44LTQuNCAxMC4xLTEuNiAyMC4zLTEuNyAzMC42LTEuNSA0LjQuMSA4LjguMyAxMy4yLjVoMS45Yy4zIDAgLjYtLjIuNi0uNiAwLS4yLjEtLjMuMS0uNSAwLTQuNi0uMS05LjMtLjgtMTMuOS0uMi0xLjQtLjctMi43LTEuMy00LTEuMS0yLjUtMi45LTQuMi01LjMtNS41LTIuNi0xLjMtNS4zLTItOC4xLTIuMy03LjgtMS0xNS43LTEuMS0yMy41LS43LTYuNC4zLTEyLjggMS4yLTE5LjIgMi4xLTQuOS43LTkuOCAxLjctMTQuNiAyLjUtLjQuMS0uOC4xLTEuMi4yLS42LjEtLjgtLjEtLjktLjhWMTQyLjdjMC0uNSAwLS45LjEtMS40IDAtLjMuMi0uNi42LS43LjMtLjEuNi0uMS45LS4yIDcuMi0xLjUgMTQuNC0yLjYgMjEuNi0zLjMgOC4zLS45IDE2LjYtMS4yIDI0LjktMS4xIDcuNi4xIDE1LjIuMyAyMi44IDEuNyA2LjIgMS4xIDEyLjIgMi45IDE3LjUgNi41IDUgMy40IDguNSA3LjkgMTAuOCAxMy40IDEuOCA0LjUgMi44IDkuMSAzLjIgMTQgLjMgMy40LjMgNi43LjMgMTAuMS4xIDEyLjIgMCAyNC40IDAgMzYuNnptMzg4LjgtMS41djQ1YzAgMS4xLS4yIDEuMy0xLjQgMS40LTQuNS40LTguOS45LTEzLjQgMS4zLTcuMS43LTE0LjMgMS0yMS40IDEuMi02LjkuMi0xMy44LjItMjAuNy4zLTQuNiAwLTkuMS0uMS0xMy43LS42LTYuNC0uNy0xMi44LTEuOC0xOC44LTQuMi02LjgtMi43LTEyLjQtNy0xNi4yLTEzLjQtMi4xLTMuNS0zLjUtNy40LTQuMy0xMS40LTEuNC03LjItMS43LTE0LjQtLjItMjEuNSAyLjEtMTAuNCA3LjktMTggMTcuMi0yMi45IDUuOC0zIDEyLTQuNyAxOC40LTUuNyAxMC4zLTEuNyAyMC43LTEuNyAzMS0xLjYgNC40LjEgOC44LjMgMTMuMi41aDEuNGMuNyAwIC45LS4yIDEtMXYtLjVjLS4xLTQuMS4xLTguMi0uNS0xMi4yLS4zLTIuMS0uOS00LjEtMS45LTYtMS4xLTIuMS0yLjgtMy42LTQuOS00LjYtMi42LTEuMy01LjMtMi04LjEtMi4zLTcuOC0xLTE1LjctMS4xLTIzLjUtLjctOC44LjUtMTcuNSAxLjgtMjYuMiAzLjMtMi42LjUtNS4zLjktNy45IDEuNC0uNC4xLS44LjEtMS4yLjEtLjQgMC0uNi0uMi0uNi0uNS0uMS0uNS0uMS0uOS0uMS0xLjRWMTQyYy4xLS45LjItMS4xIDEtMS4zIDIuNC0uNSA0LjgtMSA3LjItMS40IDcuMi0xLjIgMTQuNS0yLjEgMjEuNy0yLjcgNS41LS40IDExLS42IDE2LjUtLjUgMy43IDAgNy40LjEgMTEuMS4zIDYuMi4zIDEyLjQgMSAxOC40IDIuNSA0LjQgMS4xIDguNiAyLjggMTIuNSA1LjQgNSAzLjQgOC42IDggMTAuOSAxMy42IDIgNC44IDIuOSA5LjkgMy4yIDE1LjEuMSAyLjMuMSA0LjYuMSA2LjguMyAxMi4zLjIgMjQuNi4yIDM3ek04MTYuNSAxNjJjLS42LjItMS4yLS4xLTEuOC0uMi02LjgtMS4zLTEzLjYtMi40LTIwLjUtMy4xLTguNC0uOS0xNi44LTEuMi0yNS4yLS4xLTMuMi40LTYuMyAxLjEtOS4zIDIuNC0xLjkuOC0zLjcgMS44LTUuMSAzLjMtMi43IDIuOC0zLjcgNi4xLTIuOSA5LjkuNCAxLjcgMS4yIDMuMSAyLjQgNC4zIDEuMyAxLjQgMi45IDIuNCA0LjYgMy4yIDIuNCAxLjIgNC45IDIuMSA3LjUgMi44IDQuNSAxLjMgOSAyLjIgMTMuNSAzLjIgNS43IDEuMyAxMS41IDIuNSAxNy4xIDQuNCA1LjMgMS43IDEwLjQgMy45IDE1IDcuMiA2LjggNC44IDExLjEgMTEuMiAxMi41IDE5LjUgMS4yIDYuOS43IDEzLjYtMS42IDIwLjItMi41IDctNi45IDEyLjQtMTIuOSAxNi43LTQuMyAzLTkgNS4xLTE0IDYuNy01LjcgMS44LTExLjYgMi44LTE3LjYgMy4zLTcuMy42LTE0LjYuNS0yMS45LjEtNi40LS40LTEyLjctMS4yLTE5LTIuMS0zLjgtLjUtNy42LTEuMy0xMS40LTItMS4xLS4yLTEuMy0uNC0xLjMtMS40di0yMS4yYzAtLjEuMS0uMy4yLS42LjguMSAxLjYuMiAyLjQuNCA3LjQgMS42IDE0LjcgMy4xIDIyLjIgNC4yIDkuMyAxLjMgMTguNiAxLjcgMjcuOS4yIDQuMi0uNyA4LjMtMS43IDEyLjEtMy44IDEtLjUgMS45LTEuMiAyLjctMS44IDUuOS00LjYgNS43LTEyLjkuOC0xNy42LTIuMy0yLjEtNS0zLjUtNy45LTQuNi00LTEuNS04LjEtMi41LTEyLjMtMy4zLTUuOS0xLjItMTEuOS0yLjMtMTcuNy00LjEtNS42LTEuOC0xMS4yLTMuOC0xNi4yLTYuOS00LjYtMi45LTguNS02LjUtMTEuMi0xMS4yLTEuNy0zLTIuOC02LjMtMy40LTkuNy0uOS01LjQtLjctMTAuOC42LTE2LjEgMi4xLTguMyA2LjktMTQuNyAxNC4xLTE5LjMgNC45LTMuMiAxMC4yLTUuMiAxNS44LTYuNSA1LjQtMS4zIDExLTEuOSAxNi42LTIuMSA3LjctLjMgMTUuNC4xIDIzLjEuNyA1LjUuNSAxMC45IDEuMiAxNi40IDIgMS42LjIgMy4zLjUgNC45LjcuNS4xLjguNC45Ljl2MjBjLjIuNS4zLjktLjEgMS40eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMTk5LjcgMjAxLjZWMjQxYzAgMi43LjMgMi41LTIuNiAyLjktNi43LjktMTMuNSAxLjItMjAuMi45LTUuOC0uMi0xMS40LTEuNC0xNi42LTMuOC02LTIuOC0xMC42LTcuMi0xMy45LTEzLTIuNS00LjQtMy45LTkuMS00LjgtMTQtMS40LTcuOS0xLjUtMTUuOC0uMy0yMy43LjYtMy44IDEuNi03LjUgMy4xLTExLjEgMi43LTYuMyA2LjgtMTEuMyAxMi42LTE0LjggNC4yLTIuNiA4LjgtNC4xIDEzLjYtNSA0LjQtLjggOC45LTEuMSAxMy40LTEuMSA0LjggMCA5LjYuMyAxNC40LjYuMiAwIC41IDAgLjcuMS41LjEuNy40LjcuOHYyLjFjLS4xIDEzLjMtLjEgMjYuNS0uMSAzOS43em0tMjcxLjkgMS4ydjM5LjRjMCAzIC4zIDIuOC0zIDMuMS00LjMuMy04LjYuNi0xMi45LjctNi4zLjItMTIuNi0uNS0xOC41LTIuOC05LjgtMy43LTE2LjgtMTAuNS0yMC45LTIwLjItMi41LTUuOC0zLjUtMTEuOS0zLjctMTguMS0uMi03IC4zLTE0IDIuMi0yMC44IDEuNy02LjIgNC42LTExLjggOS4zLTE2LjQgMy40LTMuMiA3LjMtNS40IDExLjctNi44IDUuNi0xLjkgMTEuMy0yLjQgMTcuMi0yLjQgNS44IDAgMTEuNi44IDE3LjQgMS41IDEgLjEgMS4yLjMgMS4yIDEuNHY0MS40ek02NzQgMjI1LjV2MTguNmMwIDEuNSAwIDEuNS0xLjYgMS43LTkuOS45LTE5LjcgMS4yLTI5LjYuOC00LS4yLTgtLjgtMTEuOC0xLjgtMi4zLS42LTQuNC0xLjUtNi41LTIuOC00LjMtMi42LTYuOS02LjMtOC0xMS4xLS45LTMuOC0uOS03LjcgMC0xMS40IDEuMy01LjUgNC45LTkuMiAxMC4xLTExLjMgMy42LTEuNiA3LjUtMi40IDExLjQtMi45IDUuMi0uNiAxMC41LTEgMTUuNy0uOSA2LjMuMSAxMi41LjQgMTguOC43IDEuNS4xIDEuNS4xIDEuNSAxLjd2MTguN3ptMzg4LjktLjFWMjQ1YzAgLjUtLjMuNy0uNy44bC0zIC4zYy04LjkuNi0xNy45IDEtMjYuOC42LTQuMi0uMi04LjQtLjctMTIuNS0xLjktMy4yLS45LTYuMi0yLjMtOC44LTQuNC0zLjItMi43LTUuMS02LjItNS44LTEwLjItLjYtMy4yLS42LTYuNCAwLTkuNiAxLjEtNi4xIDQuOC0xMC4xIDEwLjQtMTIuNCAzLjYtMS42IDcuNS0yLjQgMTEuNC0yLjggNC45LS42IDkuOS0xIDE0LjgtLjkgNi42LjEgMTMuMi40IDE5LjguNy4yIDAgLjUgMCAuNy4xLjQuMS43LjMuNy44djEuOWMtLjIgNS42LS4yIDExLjUtLjIgMTcuNHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDAyLjMgMGgtOTcuNnYuNWMtLjggMS0xIDIuMy0xLjQgMy41LS4zIDEtMS4xIDEuOS0xIDMuMS0uNS40LS41LjktLjUgMS40LS40LjItLjQuNi0uNCAxLS41LjMtLjUuOS0uNSAxLjQtLjUuNC0uNS45LS41IDEuNC0uNS40LS41LjktLjUgMS40LS40LjItLjQuNi0uNCAxLS41LjMtLjUuOC0uNSAxLjMtLjEuMi0uMy4zLS40LjYtMi40IDYuNy00LjkgMTMuNC03LjMgMjAuMS0xLjYgNC40LTMuMiA4LjktNC44IDEzLjMtMi4xIDUuNy00LjIgMTEuMy02LjMgMTdsLTQuNSAxMi42Yy0yLjMgNi4zLTQuNiAxMi43LTYuOSAxOS0yLjEgNS43LTQuMiAxMS4zLTYuMyAxNy0yLjEgNS44LTQuMiAxMS42LTYuMyAxNy41LS4xLjMtLjEuNi0uMS45LS41LjQtLjUuOS0uNSAxLjQtLjQuMi0uNC42LS40IDEgMCAuMS0uMS4zIDAgLjQtLjMuMi0uNC42LS40IDEtLjUuMy0uNS45LS41IDEuNC0uMS4xLS4yLjItLjMuNC0xLjMgMy41LTIuNiA3LjEtMy45IDEwLjYtMS41IDQuMS0zIDguMy00LjUgMTIuNC0uMi40LS4zLjktLjggMS4yLS4zLS42LS42LTEuMy0uOS0xLjktLjUtMS44LS45LTMuNS0xLjktNS4xLS41LTIuMy0xLjQtNC41LTIuNC02LjYtLjYtMi4xLTEuMi00LjMtMi4zLTYuMy0uMi0xLjUtLjktMi44LTEuNC00LjItNC4xLTExLjUtOC4zLTIzLTEyLjUtMzQuNC0uNy0yLjEtMS40LTQuMi0yLjMtNi4xLTIuNS01LjUtNi42LTktMTIuNS0xMC40LTIuMi0uNS00LjQtLjMtNi42LS4zLTEuNCAwLTIuOC0uMS00LjItLjFoLTkxLjZjLTEuMiAwLTIuMy4yLTMuNC45LS41LjEtMS4xIDAtMS40LjUtLjMuMS0uNi4xLS45LjMtNC41IDIuMi03LjcgNS43LTkuNCAxMC40LTEuMiAzLjMtMi4zIDYuNy0zLjUgMTAtMi44IDcuNy01LjcgMTUuNS04LjUgMjMuMi0yLjYgNy01LjEgMTQtNy43IDIxLTEuNyA0LjgtMy41IDkuNi01LjMgMTQuNC0xLjcgNC42LTMuMyA5LjMtNSAxNC0yLjMgNi4zLTQuNiAxMi41LTYuOSAxOC44LTEuMyAzLjctMi43IDcuNC00IDExLjEtMi4yIDYtNC40IDEyLjEtNi42IDE4LjEtMSAyLjctMS45IDUuMy0yLjkgOC0yLjEgNS43LTQuMiAxMS41LTYuMyAxNy4yLTEuNSA0LjEtMi45IDguMS00LjQgMTIuMi0yLjggNy42LTUuNiAxNS4yLTguMyAyMi43LS41IDEuNS0xIDMtMS40IDQuNSAwIC4xLS4xLjMgMCAuNC0uMy4zLS41LjYtLjUgMS0uMS4yLS4zLjQtLjQuNi0xLjYgNC4zLTMuMSA4LjctNC43IDEzbC0yLjEgNmMtMi4yIDUuOS00LjMgMTEuOC02LjUgMTcuNi0xLjggNS0zLjcgMTAtNS41IDE1LS4zLjgtLjcgMS42LS42IDIuNXYuNWg5Ny4xdi0uNGMuMy0uMy41LS42LjQtMSAxLTIuOCAyLjEtNS42IDMuMS04LjQgMi4zLTYuMyA0LjYtMTIuNSA2LjktMTguOCAxLjctNC42IDMuMy05LjIgNS0xMy43IDIuNy03LjQgNS40LTE0LjcgOC4xLTIyLjEgMi4yLTYgNC4zLTEyIDYuNS0xNy45IDIuOC03LjYgNS42LTE1LjIgOC4zLTIyLjggMy41LTkuNyA3LjEtMTkuNSAxMC42LTI5LjIgMy40LTkuMiA2LjctMTguNCAxMC4xLTI3LjYuMi0uNy40LTEuNC45LTEuOS4yLjIuMy40LjUuNi4zIDEuOCAxLjEgMy41IDEuOSA1LjIuNCAxLjggMS4xIDMuNSAxLjkgNS4yLjQgMS44IDEgMy42IDEuOSA1LjIuMiAxLjMuNSAyLjYgMS40IDMuOC4zIDEuOCAxIDMuNSAxLjkgNS4yLjMgMS44IDEuMSAzLjUgMS45IDUuMi40IDEuOCAxLjEgMy41IDEuOSA1LjIuNCAxLjggMSAzLjUgMS45IDUuMi4yIDEuOSAxLjEgMy41IDEuOSA1LjIuNCAxLjggMS4xIDMuNSAxLjkgNS4yLjQgMS44IDEgMy41IDEuOSA1LjIuMyAxLjggMSAzLjUgMS45IDUuMi0uMSAxLjEuNiAxLjkuOSAyLjkgMS4yIDMuNSAzLjYgNiA2LjUgOC4xIDMgMi4xIDYuNCAyLjkgMTAgMy4xIDIgLjEgMy45IDAgNS45IDBoOTIuMmMuNCAwIC44LS4xIDEuMS0uNCAxLjIgMCAyLjMtLjMgMy40LS43IDEuNy0uNiAzLjQtMS4zIDQuNi0yLjYgMi4yLTEuMyAzLjctMy4zIDUuMS01LjUuNy0xLjEgMS4yLTIuNCAxLjctMy42IDEuNS00LjEgMy04LjIgNC41LTEyLjQgMi4xLTUuOSA0LjMtMTEuOCA2LjQtMTcuNyAyLjctNy41IDUuNS0xNSA4LjItMjIuNSAyLjMtNi4yIDQuNS0xMi40IDYuOC0xOC41LjUtMS40LjktMi44IDEuNC00LjIuMi0uNC41LS44LjYtMS4yIDIuNy03LjUgNS41LTE1IDguMi0yMi42LjItLjcuNi0xLjMuNi0yIC4yLS41LjYtLjkuNy0xLjUgMS4zLTMuNSAyLjYtNy4xIDMuOS0xMC42IDIuNS03IDUtMTQgNy42LTIxIDEuOS01LjIgMy44LTEwLjUgNS43LTE1LjcgMS42LTQuNCAzLjItOC45IDQuOC0xMy4zIDIuNi03LjIgNS4zLTE0LjQgNy45LTIxLjYgMi45LTcuOSA1LjctMTUuOCA4LjYtMjMuNyAzLjctMTAuMiA3LjQtMjAuMyAxMS4xLTMwLjUgMS4zLTMuNSAyLjYtNi45IDMuOC0xMC40LjQtLjkuMy0xLjUuMy0yem0tOTguMSAyNTguOXptLTU2LjYtOTguNnYtLjJsLjEuMS0uMS4xem0tMzIuMyA4NC4xYy4xIDAgLjEtLjEuMi0uMSAwIC4xLS4xLjItLjEuMyAwLS4xIDAtLjItLjEtLjJ6bTExLjQtMzEuMWMuMSAwIC4xLS4xLjItLjEgMCAuMSAwIC4yLS4xLjQgMC0uMi0uMS0uMi0uMS0uM3ptLTYwLjQtNTAuOWMwLS4xLjEtLjIuMS0uMnYuMWwtLjEuMXptMy45LTEwLjdjMCAuMSAwIC4xIDAgMCAwIC4xIDAgLjEtLjEuMSAwIDAgLjEgMCAuMS0uMXptNjcuNSAzMS44YzAgLjEgMCAuMi0uMS4zIDAtLjEtLjEtLjItLjEtLjNoLjJ6bS01LjYgMTUuNWMwIC4xLS4xLjItLjEuNCAwLS4xLS4xLS4yLS4xLS4zIDAgMCAuMSAwIC4yLS4xem0xMDcuMi0yOS41bC0uMi4yYy4xIDAgLjEtLjEuMi0uMnptLTk3LjQgNi41czAtLjEgMCAwYzAtLjEgMC0uMSAwIDB6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE1NyAxODhsNDAuOC0xMTcuMWgxNmwtNTIgMTQ2LjV6bTM5LjcgNjkuMmw0MC44LTExNy4xaDE2bC01MiAxNDYuNXoiLz48L3N2Zz4="

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reuters.3694543d.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _Core = __webpack_require__(45);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tokens = __webpack_require__(46);

Object.defineProperty(exports, 'Tokens', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tokens).default;
  }
});

var _Transfer = __webpack_require__(48);

Object.defineProperty(exports, 'Transfer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Transfer).default;
  }
});

var _Customize = __webpack_require__(51);

Object.defineProperty(exports, 'Customize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Customize).default;
  }
});

var _Vote = __webpack_require__(56);

Object.defineProperty(exports, 'Vote', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vote).default;
  }
});

var _Finance = __webpack_require__(59);

Object.defineProperty(exports, 'Finance', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Finance).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n\n  h1 {\n    font-size: 25px;\n    font-weight: 400;\n    margin-bottom: 50px;\n  }\n  img {\n    max-width: calc(100% - 30px);\n    margin-bottom: -5px;\n  }\n  ', ';\n'], ['\n  text-align: center;\n\n  h1 {\n    font-size: 25px;\n    font-weight: 400;\n    margin-bottom: 50px;\n  }\n  img {\n    max-width: calc(100% - 30px);\n    margin-bottom: -5px;\n  }\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _OverlapBackground = __webpack_require__(3);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _tokens = __webpack_require__(47);

var _tokens2 = _interopRequireDefault(_tokens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, medium('\n    font-size: 37px;\n    img {\n      max-width: 750px;\n    }\n  '));

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
          _ui.Text,
          { heading: '1', color: _ui.theme.gradientText },
          'Managing your organization has never been easier'
        )
      ),
      _react2.default.createElement('img', { src: _tokens2.default, alt: '' })
    )
  );
};

exports.default = Tokens;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tokens.e9877bf2.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SideBySide = __webpack_require__(8);

var _SideBySide2 = _interopRequireDefault(_SideBySide);

var _transfer = __webpack_require__(49);

var _transfer2 = _interopRequireDefault(_transfer);

var _raise = __webpack_require__(50);

var _raise2 = _interopRequireDefault(_raise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transfer = function Transfer() {
  return _react2.default.createElement(_SideBySide2.default, {
    items: [{
      title: 'Transfer tokens',
      subtitle: 'Tokens represent your stake in the organization',
      textContent: '\n          Your organization is in control of its funds. Transfer and assign\n          them according to your personal needs\n        ',
      image: _transfer2.default
    }, {
      title: 'Fundraising',
      subtitle: 'Grasp the potential of crowdfunding',
      textContent: '\n          Utilize the power of the crowd and raise funds globally, in private\n          or publicly, without relying on banks or financial gatekeepers\n        ',
      image: _raise2.default
    }]
  });
};

exports.default = Transfer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/transfer.fe23e890.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/raise.0b72a5f0.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-image: linear-gradient(39deg, #0b0b0a, #464f51);\n'], ['\n  background-image: linear-gradient(39deg, #0b0b0a, #464f51);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 15px;\n  h1 {\n    font-size: 25px;\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  .screen {\n    max-width: 750px;\n    width: 100%;\n  }\n  .columns {\n    padding-top: 10px;\n    max-width: 420px;\n  }\n  .item {\n    margin-top: 40px;\n  }\n  .item p {\n    font-size: 16px;\n    color: ', ';\n    margin-top: 25px;\n  }\n\n  ', ';\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 15px;\n  h1 {\n    font-size: 25px;\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  .screen {\n    max-width: 750px;\n    width: 100%;\n  }\n  .columns {\n    padding-top: 10px;\n    max-width: 420px;\n  }\n  .item {\n    margin-top: 40px;\n  }\n  .item p {\n    font-size: 16px;\n    color: ', ';\n    margin-top: 25px;\n  }\n\n  ', ';\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _permission = __webpack_require__(52);

var _permission2 = _interopRequireDefault(_permission);

var _settings = __webpack_require__(53);

var _settings2 = _interopRequireDefault(_settings);

var _path = __webpack_require__(54);

var _path2 = _interopRequireDefault(_path);

var _code = __webpack_require__(55);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _ui.styled)(_ui.Section)(_templateObject);

var Content = _ui.styled.div(_templateObject2, _ui.themeDark.textSecondary, medium('\n    padding-top: 120px;\n    padding-bottom: 90px;\n    h1 {\n      font-size: 37px;\n    }\n    .item p {\n      font-size: 18px;\n    }\n    .columns {\n      display: flex;\n      flex-wrap: nowrap;\n      align-items: flex-start;\n      max-width: none;\n      padding-top: 70px;\n    }\n    .item {\n      width: 33%;\n      text-align: left;\n      margin-left: 30px;\n    }\n    .item:first-child {\n      margin-left: 0;\n    }\n  '), large('\n    padding-bottom: 120px;\n    .columns {\n      padding-top: 60px;\n    }\n    .item {\n      margin-left: 80px;\n    }\n  '));

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
          _ui.Text,
          { heading: '1', color: _ui.themeDark.textPrimary },
          'It\'s your organization. Make it work for you'
        )
      ),
      _react2.default.createElement('img', { className: 'screen', src: _permission2.default, alt: '' }),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _settings2.default, alt: '' }),
          _react2.default.createElement(
            'p',
            null,
            'Aragon organizations are powered by the AragonOS and fully customizable to fit your needs'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _path2.default, alt: '' }),
          _react2.default.createElement(
            'p',
            null,
            'You set the rules of how and when actions are prompted and enacted'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _code2.default, alt: '' }),
          _react2.default.createElement(
            'p',
            null,
            'Code is open source. As a developer you can even modify it to match your specific use case'
          )
        )
      )
    )
  );
};

exports.default = Customize;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/permission.eb67d9f2.png";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjAuMzc1VjE4Ljc1aDEzLjgxM3YxLjYyNUgwem0xOC42ODggMFYxOC43NWg0LjA2MnYxLjYyNWgtNC4wNjN6TTE3Ljg3NSAyMmMwIC40NzQtLjE1Mi44NjMtLjQ1NyAxLjE2OC0uMzA1LjMwNS0uNjk0LjQ1Ny0xLjE2OC40NTdzLS44NjMtLjE1Mi0xLjE2OC0uNDU3Yy0uMzA1LS4zMDUtLjQ1Ny0uNjk0LS40NTctMS4xNjh2LTQuODc1YzAtLjQ3NC4xNTItLjg2My40NTctMS4xNjguMzA1LS4zMDUuNjk0LS40NTcgMS4xNjgtLjQ1N3MuODYzLjE1MiAxLjE2OC40NTdjLjMwNS4zMDUuNDU3LjY5NC40NTcgMS4xNjhWMjJ6TTAgMTMuMDYydi0xLjYyNGg0LjA2M3YxLjYyNEgwem04LjkzOCAwdi0xLjYyNEgyMi43NXYxLjYyNEg4LjkzN3ptLS44MTMgMS42MjZjMCAuNDczLS4xNTIuODYzLS40NTcgMS4xNjctLjMwNS4zMDUtLjY5NC40NTctMS4xNjguNDU3cy0uODYzLS4xNTItMS4xNjgtLjQ1N2MtLjMwNS0uMzA0LS40NTctLjY5NC0uNDU3LTEuMTY4VjkuODE0YzAtLjQ3NC4xNTItLjg2NC40NTctMS4xNjguMzA1LS4zMDUuNjk0LS40NTcgMS4xNjgtLjQ1N3MuODYzLjE1MiAxLjE2OC40NTdjLjMwNS4zMDQuNDU3LjY5NC40NTcgMS4xNjh2NC44NzR6TTAgNS43NVY0LjEyNWgxMy44MTNWNS43NUgwem0xOC42ODggMFY0LjEyNWg0LjA2MlY1Ljc1aC00LjA2M3ptLS44MTMgMS42MjVjMCAuNDc0LS4xNTIuODYzLS40NTcgMS4xNjgtLjMwNS4zMDUtLjY5NC40NTctMS4xNjguNDU3cy0uODYzLS4xNTItMS4xNjgtLjQ1N2MtLjMwNS0uMzA1LS40NTctLjY5NC0uNDU3LTEuMTY4VjIuNWMwLS40NzQuMTUyLS44NjMuNDU3LTEuMTY4LjMwNS0uMzA1LjY5NC0uNDU3IDEuMTY4LS40NTdzLjg2My4xNTIgMS4xNjguNDU3Yy4zMDUuMzA1LjQ1Ny42OTQuNDU3IDEuMTY4djQuODc1eiIgZmlsbD0iI0E3ODFGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuODc1IDEzLjY4OGMuODggMCAxLjY0Mi4zMjEgMi4yODUuOTY0LjY0My42NDQuOTY1IDEuNDA1Ljk2NSAyLjI4NiAwIC44OC0uMzIyIDEuNjQxLS45NjUgMi4yODUtLjY0My42NDMtMS40MDUuOTY1LTIuMjg1Ljk2NS0uODggMC0xLjY0Mi0uMzIyLTIuMjg1LS45NjUtLjY0My0uNjQ0LS45NjUtMS40MDUtLjk2NS0yLjI4NSAwLS44OC4zMjItMS42NDIuOTY1LTIuMjg2LjY0My0uNjQzIDEuNDA1LS45NjQgMi4yODUtLjk2NHptMTIuOTUtLjgxM0g0Ljg3NGMtMS4xMTcgMC0yLjA3NC4zOTgtMi44NyAxLjE5My0uNzk1Ljc5Ni0xLjE5MiAxLjc1Mi0xLjE5MiAyLjg3IDAgMS4xMTcuMzk3IDIuMDczIDEuMTkzIDIuODY5QzIuOCAyMC42MDIgMy43NTggMjEgNC44NzUgMjFoMTNjMS4xMTcgMCAyLjA3NC0uMzk4IDIuODctMS4xOTMuNzk1LS43OTYgMS4xOTItMS43NTIgMS4xOTItMi44NyAwLTEuMTE3LS40MDYtMi4wNzMtMS4yMTgtMi44NjktLjgxMy0uNzk1LTEuNzc4LTEuMTkzLTIuODk1LTEuMTkzem0uMDUtLjgxM2MxLjM1NCAwIDIuNTA1LjQ3NCAzLjQ1MyAxLjQyMnMxLjQyMiAyLjEgMS40MjIgMy40NTQtLjQ3NCAyLjUwNS0xLjQyMiAzLjQ1My0yLjA5OSAxLjQyMi0zLjQ1MyAxLjQyMmgtMTNjLTEuMzU0IDAtMi41MDUtLjQ3NC0zLjQ1My0xLjQyMlMwIDE4LjI5IDAgMTYuOTM4YzAtMS4zNTUuNDc0LTIuNTA2IDEuNDIyLTMuNDU0Ljk0OC0uOTQ4IDIuMDk5LTEuNDIxIDMuNDUzLTEuNDIxaDEzem0wLTkuNzVjLjg4IDAgMS42NDIuMzIyIDIuMjg1Ljk2NS42NDMuNjQ0Ljk2NSAxLjQwNS45NjUgMi4yODUgMCAuODgtLjMyMiAxLjY0Mi0uOTY1IDIuMjg2LS42NDMuNjQzLTEuNDA1Ljk2NS0yLjI4NS45NjUtLjg4IDAtMS42NDItLjMyMi0yLjI4NS0uOTY1LS42NDMtLjY0NC0uOTY1LTEuNDA1LS45NjUtMi4yODUgMC0uODguMzIyLTEuNjQyLjk2NS0yLjI4Ni42NDMtLjY0MyAxLjQwNS0uOTY1IDIuMjg1LS45NjV6TTQuOTI1IDEuNWMtMS4xMTYgMC0yLjA4MS4zOTgtMi44OTQgMS4xOTNDMS4yMiAzLjQ5LjgxMiA0LjQ0NS44MTIgNS41NjNjMCAxLjExNy4zOTggMi4wNzMgMS4xOTQgMi44NjkuNzk1Ljc5NSAxLjc1MiAxLjE5MyAyLjg2OSAxLjE5M2gxM2MxLjExNyAwIDIuMDc0LS4zOTggMi44Ny0xLjE5My43OTUtLjc5NiAxLjE5Mi0xLjc1MiAxLjE5Mi0yLjg3IDAtMS4xMTctLjM5Ny0yLjA3My0xLjE5My0yLjg2OS0uNzk1LS43OTUtMS43NTItMS4xOTMtMi44NjktMS4xOTNINC45MjV6bS0uMDUtLjgxM2gxM2MxLjM1NCAwIDIuNTA1LjQ3NCAzLjQ1MyAxLjQyMnMxLjQyMiAyLjEgMS40MjIgMy40NTQtLjQ3NCAyLjUwNS0xLjQyMiAzLjQ1My0yLjA5OSAxLjQyMS0zLjQ1MyAxLjQyMWgtMTNjLTEuMzU0IDAtMi41MDUtLjQ3My0zLjQ1My0xLjQyMUMuNDc0IDguMDY4IDAgNi45MTYgMCA1LjU2MlMuNDc0IDMuMDU4IDEuNDIyIDIuMTEgMy41Mi42ODggNC44NzUuNjg4eiIgZmlsbD0iI0E3ODFGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYwMyAxMy4zODlsNS42MjYtNS41MzktNS42MjYtNS41MzlMMTcuMzE0LjZsNy4yNSA3LjI1LTcuMjUgNy4yNS0xLjcxMS0xLjcxMXptLTYuMjA2IDBMNy42ODYgMTUuMS40MzYgNy44NSA3LjY4Ni42bDEuNzExIDEuNzExTDMuNzcxIDcuODVsNS42MjYgNS41Mzl6IiBmaWxsPSIjQTc4MUZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: linear-gradient(\n    130deg,\n    ', ',\n    ', '\n  );\n'], ['\n  background: linear-gradient(\n    130deg,\n    ', ',\n    ', '\n  );\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SideBySide = __webpack_require__(8);

var _SideBySide2 = _interopRequireDefault(_SideBySide);

var _ui = __webpack_require__(1);

var _vote = __webpack_require__(57);

var _vote2 = _interopRequireDefault(_vote);

var _payment = __webpack_require__(58);

var _payment2 = _interopRequireDefault(_payment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSideBySide = (0, _ui.styled)(_SideBySide2.default)(_templateObject, _ui.theme.mainBgGradientStart, _ui.theme.mainBgGradientEnd);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vote.f140c192.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/payment.c774ed2d.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background: #fff;\n  img {\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n  }\n  ', ';\n'], ['\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background: #fff;\n  img {\n    border: 1px solid #dbebea;\n    border-radius: 3px;\n  }\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-top: 0px;\n  ', ';\n'], ['\n  padding-top: 0px;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _finance = __webpack_require__(60);

var _finance2 = _interopRequireDefault(_finance);

var _sign = __webpack_require__(61);

var _sign2 = _interopRequireDefault(_sign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _ui.IllustratedSection.Illustration,
    Title = _ui.IllustratedSection.Title,
    Subtitle = _ui.IllustratedSection.Subtitle,
    Emphasis = _ui.IllustratedSection.Emphasis,
    Content = _ui.IllustratedSection.Content;


var Main = (0, _ui.styled)(_ui.IllustratedSection)(_templateObject, (0, _ui.breakpoint)('large', '\n    padding-top: 120px;\n    padding-bottom: 120px;\n  '));

var MainWithLessMargin = (0, _ui.styled)(Main)(_templateObject2, (0, _ui.breakpoint)('large', '\n    margin-top: -50px;\n  '));

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
          'Permissions can be granular and assigned in fine detail. You can choose to give people a certain degree of control over the organization and the privileges can be escalated easily if the person isn\'t allowed to perform a desired action'
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/finance.928feb03.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sign.2129db04.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _Network = __webpack_require__(63);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Intro = __webpack_require__(64);

Object.defineProperty(exports, 'Intro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Intro).default;
  }
});

var _AGP = __webpack_require__(66);

Object.defineProperty(exports, 'AGP', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AGP).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 0;\n'], ['\n  padding-top: 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _OverlapBackground = __webpack_require__(3);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(65);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _ui.IllustratedSection.Illustration,
    Subtitle = _ui.IllustratedSection.Subtitle,
    Emphasis = _ui.IllustratedSection.Emphasis,
    Content = _ui.IllustratedSection.Content;


var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var StyledIllustratedSection = (0, _ui.styled)(_ui.IllustratedSection)(_templateObject);

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
          'The Aragon Network will decentralize its governance by gradually handing over control of the project to the users'
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
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NjMiIGhlaWdodD0iNDQ3Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ijk1Ljg1MSUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjAlIiB4Mj0iMTA1Ljc4OSUiIHkxPSItMzMuNDY0JSIgeTI9IjI0NS40NSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGN0Y4RjkiLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9ImQiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImUiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImYiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWRhc2hhcnJheT0iMywzIiBkPSJNMzMuMjY2LjcwMmw0MjkuNDIxIDIzNC4xOTRtLTc3LjA2Mi0xMzAuMzU5TDExNi4wOTggNDQ2LjM1MiIgb3BhY2l0eT0iLjQiLz48ZWxsaXBzZSBjeD0iMTQzLjg4NiIgY3k9IjIzNS4xNDQiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA1IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjkyLjQ5MyIgcnk9IjkxLjg3NyIvPjxlbGxpcHNlIGN4PSIxNzkuODI0IiBjeT0iMTY1LjA5NSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTAxLjk2OSIgcnk9IjEwMS4yODkiLz48ZWxsaXBzZSBjeD0iMjQxLjgzIiBjeT0iMjE1LjgxOSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iNDQuOTc5IiByeT0iNDQuNjc5Ii8+PGVsbGlwc2UgY3g9IjI1Mi45MzUiIGN5PSIyNjIuNjEiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA0IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjI4LjA4MyIgcnk9IjI3Ljg5NiIvPjxlbGxpcHNlIGN4PSIxNzEuNjM3IiBjeT0iMjE3LjM5OCIgc3Ryb2tlPSJ1cmwoI2IpIiBzdHJva2UtZGFzaGFycmF5PSIxLDMiIHJ4PSIxMjUuNzczIiByeT0iMTI0LjkzNCIvPjxlbGxpcHNlIGN4PSIxNzEuMjY5IiBjeT0iMjA3LjM1MiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDMiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTcwLjkwOSIgcnk9IjE2OS43NyIvPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3Ryb2tlPSJ1cmwoI2MpIiBkPSJNMTY1LjUuNzIybDQuOTAyIDEuNTEzYzE1LjE1NCA0Ljg1OSA5NC4wNjUgMzEuODE0IDE1Ni44NiA4NC42MDZsMy4zOTYgMi40MDgtLjc1NCA0LjI1MmgtLjAwOWMtLjgwNyA1Ljk1MS04Ljc0IDQ0LjEyOS0yOS44NDYgODUuMy0xMy42MDIgMjYuNTEtMzAuMSA0OS41OTItNDkuMDM1IDY4LjYwNy0yMy4zNjMgMjMuNDE2LTUwLjQ1NCA0MC43MzYtODAuNTIgNTEuNDg0bC0xLjcwMi41OTctMy4xOTcgMS4yMzUtNC45MDgtMS43MjJjLTMwLjI1NC0xMC44MTUtNTcuMzQ3LTI4LjEzNy04MC41NDgtNTEuNDk2LTE5LjA0My0xOS4yMjgtMzUuNTM4LTQyLjMwNy00OS4wMy02OC42MDItMjAuOTgyLTQxLjAyNy0yOC41MDctNzguMDIyLTI5LjgwMi04NS4wMjNMLjU0IDg5LjU3NGwzLjEyNi0yLjYyN2M2Mi44MS01Mi44NTkgMTQxLjgyMy03OS44NSAxNTcuMDIzLTg0LjcyNEwxNjUuNS43MjJ6TTg2LjAxNCAyNDIuNTRjMjIuOTg0IDIzLjAzNyA0OS43MyA0MC4xMyA3OS41MDggNTAuODE4IDI5LjY3LTEwLjY1IDU2LjQxNy0yNy43OCA3OS41MTItNTAuOTMgMTguODkyLTE4Ljk3NiAzNS40MTgtNDIuMTI5IDQ5LjExNi02OC44MTQgMTguNzE0LTM2LjQ5OSAyNi44MDgtNjkuMjkzIDI5LjQwOC04MS42NDFDMjYxLjA5NSA0MC43NiAxODMuNzYgMTMuNzU3IDE2NS41MTYgNy44NDRjLTE4LjE1MiA1LjgzMy05NS4xIDMyLjUyMS0xNTguMDM0IDg0LjEzMiAyLjU3OCAxMi4zODggMTAuNjMyIDQ1LjMxNiAyOS40MTMgODEuODUyIDEzLjYyNCAyNi41MzkgMzAuMTUgNDkuNjU1IDQ5LjEyIDY4LjcxMnoiIG9wYWNpdHk9Ii41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMzkuODcgNjguMDUyYy0uMTA4IDAtNDkuODk4IDE1LjgwNC00OS44OTggNTkuMDI2IDAgNDMuMjIzIDQ4LjA2IDY0LjE4NyA4My40NTIgNjQuMTg3IDE5LjI1IDAgMzUuMDY1LTUuNTY1IDQ1LjQ5Ni0xMC42NDIgMS4zNDQtNi4xMjcgNi4yMzMtMjAuNjM5IDIyLjQwOC0yMC43NDcgMi44ODUtLjExMiA1LjU5MS40MjUgNy44NjUgMS43MTYgMTAuODI0IDUuODA3IDMuNzg4IDE2LjY2NSAzLjc4OCAxNi42NjVhMjQuNTAyIDI0LjUwMiAwIDAgMCAyLjQ3NS0uNTMxYzEzLjAxLTMuNDggMjcuNjY4LTE4LjI2MiAyNS4xMjUtNDMuMDE0LTIuMDM4LTE5Ljg0OC0yMC40OC0zMi40MjgtMjkuNDUtMzcuNDI2LTIuOTM4LTEuNjM2LTQuODYtMi40NjMtNC44Ni0yLjQ2My4zMjQtMi4wMTYuNDMtMy41NzUuNDMtNC43NzMgMC0uMjI0LS4wMDUtLjQzNS0uMDExLS42MzN2LTIuMzIzYy00Ny4wNzctMjguMzY3LTg2LjkxNS0zMi43MzctMTA2LjU2My0zMi43MzctOC40ODggMC0xMy4yNDUuNzkyLTEzLjI0NS43OTJsMTIuOTg4IDEyLjkwM3ptOTkuNDcyIDI2Ljg3OXMtNi4zODYtMi4wNDMtMTIuODgtMi45MDNjLTMuMjQ3IDMuMzMzLTYuMDYyIDQuNzMtNi45MjggNS4xNjJsLS4yMTYuMjE0Yy0xOC45NDItMy45NzktMjUuNzYxLTEzLjY1NS0yNS43NjEtMTMuNjU1IDE3Ljg2LS4xMDcgMzMuOTg4IDQuMDg1IDQ1Ljc4NSAxMS4xODJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNTYuOTg1IDEyMS43MDNjMCAxNC4wODUtNS44NDQgMjcuMDk0LTE1LjgwMyAzNy42M2wtLjQ3My41NDIuNzk4LS4wMDNjMi43MDYtLjEwOCA1LjQxMi40MyA3LjY4NiAxLjcyIDEwLjgyNCA1LjgwNyAzLjc4OCAxNi42NjUgMy43ODggMTYuNjY1IDEzLjUzLTIuMTUgMzAuMzA3LTE3LjIwMiAyNy42LTQzLjU0NS0yLjAzOC0xOS44NDgtMjAuNDgtMzIuNDI4LTI5LjQ1LTM3LjQyNmE1My41NzQgNTMuNTc0IDAgMCAxIDUuODU0IDI0LjQxN00zNy45MSAxNzEuMDUzYzAgMS43NDQuMDY4IDMuNDA0LjE2NSA1LjAyNyAxMy4zOTYgMjUuNTkgMjkuNTEgNDcuOTQ2IDQ3Ljk0IDY2LjQ2IDIyLjk4NCAyMy4wMzcgNDkuNzMgNDAuMTMgNzkuNTA4IDUwLjgxOCAyOS42Ny0xMC42NSA1Ni40MTctMjcuNzggNzkuNTEyLTUwLjkzIDYuODQ3LTYuODc2IDEzLjM3Ny0xNC4zMDkgMTkuNTgtMjIuMjUxLTQ5LjM3OS0zLjUyNS00Ni4zOC0zMy4zMTktNDYuMzgtMzMuMzE5IDAtMS4xODEgMC0yLjM2NS4yMTctMy41NDggMCAwIC4xMS0xLjA0Ni40NjktMi42ODgtMTAuNDMxIDUuMDc4LTI2LjI0NSAxMC42NDMtNDUuNDk3IDEwLjY0My0zNS4zOTMgMC04My40NTItMjAuOTY0LTgzLjQ1Mi02NC4xODcgMC00My4yMjIgNDkuNzktNTkuMDI2IDQ5Ljc5LTU5LjAyNmwtLjAyNi0uMDA3Yy0xLjI2Mi0uMDk3LTIuNjE1LS4xMDEtMy44Ny0uMTAxQzgxLjQyIDY5Ljg4IDM3LjkxIDExNS4yNSAzNy45MSAxNzEuMDU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PC9nPjxnIGZpbGw9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OCA3Mi41MTMpIj48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgZmlsdGVyPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNyIgcng9IjMuMjE2IiByeT0iMy4xOTQiLz48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgcng9IjIiIHJ5PSIxLjk4NyIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiBmaWx0ZXI9InVybCgjZSkiIG9wYWNpdHk9Ii43IiByeD0iMy4yMTYiIHJ5PSIzLjE5NCIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiByeD0iMiIgcnk9IjEuOTg3Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iLjgiIHJ4PSIzLjIxNiIgcnk9IjMuMTk0Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIHJ4PSIyIiByeT0iMS45ODciLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 128px;\n  padding-bottom: 128px;\n\n  .title {\n    margin-bottom: 25px;\n    font-size: 36px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    font-size: 24px;\n    color: ', ';\n  }\n\n  .image {\n    text-align: center;\n  }\n\n  img {\n    max-width: 75%;\n    border-radius: 5px;\n  }\n\n  .columns {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin: 50px 0;\n  }\n  .columns > p {\n    width: 50%;\n  }\n  .columns > p:nth-child(1) {\n    padding-right: 7.5px;\n  }\n  .columns > p:nth-child(2) {\n    padding-left: 7.5px;\n  }\n\n  p {\n    font-size: 18px;\n    color: ', ';\n  }\n\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n'], ['\n  padding-top: 128px;\n  padding-bottom: 128px;\n\n  .title {\n    margin-bottom: 25px;\n    font-size: 36px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .subtitle {\n    margin-bottom: 15px;\n    font-size: 24px;\n    color: ', ';\n  }\n\n  .image {\n    text-align: center;\n  }\n\n  img {\n    max-width: 75%;\n    border-radius: 5px;\n  }\n\n  .columns {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin: 50px 0;\n  }\n  .columns > p {\n    width: 50%;\n  }\n  .columns > p:nth-child(1) {\n    padding-right: 7.5px;\n  }\n  .columns > p:nth-child(2) {\n    padding-left: 7.5px;\n  }\n\n  p {\n    font-size: 18px;\n    color: ', ';\n  }\n\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _ = __webpack_require__(2);

var _agp = __webpack_require__(67);

var _agp2 = _interopRequireDefault(_agp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.theme.textPrimary, _ui.theme.textSecondary, _ui.theme.textSecondary);

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
        'Join us in creating an even better Aragon by making your voice heard'
      ),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'p',
          null,
          'Aragon Governance Proposals is a system for community members to join the discussion and create proposals affecting Aragon'
        ),
        _react2.default.createElement(
          'p',
          null,
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
          { mode: 'strong', href: 'https://github.com/aragon/governance/issues' },
          'Dive into governance proposals'
        )
      )
    )
  );
};

exports.default = AGP;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/agp.e6a524f6.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _Foundation = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Foundation = function Foundation() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/foundation' },
    _react2.default.createElement(_components.PageTitle, {
      title: 'Foundation',
      subtitle: 'Cornerstone for architecting the project'
    }),
    _react2.default.createElement(_Foundation.Intro, null)
  );
};

exports.default = Foundation;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Intro = __webpack_require__(70);

Object.defineProperty(exports, 'Intro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Intro).default;
  }
});

var _Grants = __webpack_require__(72);

Object.defineProperty(exports, 'Grants', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grants).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-top: 0;\n  padding-bottom: 70px;\n  ', ';\n'], ['\n  padding-top: 0;\n  padding-bottom: 70px;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _OverlapBackground = __webpack_require__(3);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(71);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _ui.IllustratedSection.Illustration,
    Subtitle = _ui.IllustratedSection.Subtitle,
    Emphasis = _ui.IllustratedSection.Emphasis,
    Content = _ui.IllustratedSection.Content;


var StyledOverlapBackground = (0, _ui.styled)(_OverlapBackground2.default)(_templateObject);

var StyledIllustratedSection = (0, _ui.styled)(_ui.IllustratedSection)(_templateObject2, (0, _ui.breakpoint)('large', '\n    padding-top: 0;\n  '));

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
          'The Aragon Foundation is a non-profit organization which was created to nurture the project in it\'s early phases'
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
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDM0IiBoZWlnaHQ9IjUxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyOS42MTYlIiB5MT0iMTMuMjE1JSIgeDI9IjEuNzQzJSIgeTI9IjExNC42NTclIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJjIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0VCRjNGNSIgb2Zmc2V0PSI3LjQ2OCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTE2LjQwMSUiIHkxPSIxMjcuODczJSIgeDI9IjE0Ljk1OCUiIHkyPSIwJSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiNFOUYyRjQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiM1OEQyRUQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiM5NEU0RjYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNTguODQgMjI0Ljc0NlY5NC43NTZMMCAuOTEzem0uMTkyLTEzMC4wMTd2MTI5Ljk4OUwzMTcuOTcuODg2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUuMjUzIDI4NS44NDQpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0yMTMuODk2IDM1OC4xMTFMOTcuNjI0IDI4OS4zODIgMjEzLjg5NyA5Ni40NTcgMzMwLjE3IDI4OS4zODJsLTExNi4yNzMgNjguNzI5em0uOTM3IDIyLjk1bDExNi4zNDItNjguNjkzLTExNi4zNDIgMTYzLjg0N0w5OC41NTkgMzEyLjM2NmwxMTYuMjc0IDY4LjY5NHoiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii43Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgb3BhY2l0eT0iLjUxMSIgZD0iTTExNy4yMDggMjg0LjYwNnY5NS4xNTRsMTE2LjM0NC0xNjMuODQ4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuNjI0IDk2LjQ1NikiLz48L2c+PHBhdGggZD0iTTIxNC4yODUgMzgwLjU3M3YxMjkuOTg5TDM3My4yMjEgMjg2LjczeiIvPjxwYXRoIGZpbGw9InVybCgjYikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMyOSIgZD0iTTIxNS40MTIgNDc2LjM1NlYzODEuMkw5OS4xMzggMzEyLjUwN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNTggLS4xNCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkzIDUxMC41OVYzODAuNmwtMTU4Ljg0LTkzLjg0NHoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjU4IDE3OS40NDYpIj48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4zNzIiIGQ9Ik0zLjIzIDk2LjM3N2wyMTIuMDEgMTI4LjE0N0w0MzMuMDU0IDk2LjM3NyAyMTguMTQyLjE1N3oiLz48Y2lyY2xlIGZpbGw9InVybCgjYykiIGN4PSIyLjY2MyIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjxjaXJjbGUgZmlsbD0idXJsKCNjKSIgY3g9IjIxNC45ODYiIGN5PSIyMjMuODY1IiByPSIyLjA5Ii8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iNDMxLjk4NiIgY3k9Ijk1LjcyMyIgcj0iMi4wOSIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMTIuMTU0IDB2MzU3LjQ0NWwxNTguODQtOTMuODl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIxMi4xNTUgMEw1My4zMTUgMjYzLjU1NWwxNTguODQgOTMuODkyVjE5MS4zNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZikiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjUwOSIgZD0iTTIxMS45NTggOTUuODkydjI2MS42NTVsMTE2LjI3NC02OC43Mjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjZykiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjQ3NiIgZD0iTTIxMS45NiA5NS44OTJMOTUuNjg1IDI4OC44MThsMTE2LjI3MyA2OC43M1YyMzUuOTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIGZpbGw9InVybCgjaCkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMxNCIgZD0iTTIxMS45NTggMzU3LjU0N0wzMjguMjMgMjg4LjgybC0xMTYuMjcyLTUyLjg1ek05NS42ODYgMjg4LjgxOGwxMTYuMjcxIDY4Ljczdi0xMjEuNTh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjkzOCAuNTY0KSIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTIxMy44OTYgMzU4LjExMWwxMTYuMjcyLTY4LjcyOC0xMTYuMjcyLTUyLjg1eiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iLjY5MyIgZD0iTTk3LjYyNCAyODkuMzgybDExNi4yNzIgNjguNzN2LTEyMS41OHoiLz48cGF0aCBzdHJva2U9InVybCgjYykiIG9wYWNpdHk9Ii4xMDciIGQ9Ik0uNzEyIDI3NS4yNTlsMjEyLjAxMSAxMjguMTQ3IDIxNy44MTMtMTI4LjE0Ny0yMTcuNzE4LTk2LjIyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS45MzggLjU2NCkiLz48cGF0aCBzdHJva2U9IiNGRkYiIGQ9Ik0yMTQuMDkyIDM1OC4wMDlMMzcyLjkzIDI2NC4xMmwtMTU4LjgzOC03Mi4xOTd6bS0xNTguODM5LTkzLjg5bDE1OC44MzggOTMuODlWMTkxLjkyMnoiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0ZGRiI+PHBhdGggZD0iTTIxNC4wOTIuNTY0djM1Ny40NDVsMTU4Ljg0LTkzLjg5eiIvPjxwYXRoIGQ9Ik0yMTQuMDkzLjU2NEw1NS4yNTMgMjY0LjExOWwxNTguODQgOTMuODkxVjE5MS45MjJ6Ii8+PHBhdGggb3BhY2l0eT0iLjQxOSIgZD0iTTIxNC4wOTIgMzU4LjAwOUwzNzIuOTMgMjY0LjEybC0xNTguODM4LTcyLjE5N3ptLTE1OC44MzktOTMuODlsMTU4LjgzOCA5My44OVYxOTEuOTIyeiIvPjxwYXRoIG9wYWNpdHk9Ii41IiBkPSJNMjE0LjA5MiAzNTguMDA5TDM3Mi45MyAyNjQuMTJsLTE1OC44MzgtNzIuMTk3eiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  background: #fff;\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .item {\n    margin-top: 20px;\n    max-width: 400px;\n  }\n  img {\n    max-width: calc(100% - 30px);\n  }\n  p {\n    font-size: 18px;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  ', ';\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  background: #fff;\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .item {\n    margin-top: 20px;\n    max-width: 400px;\n  }\n  img {\n    max-width: calc(100% - 30px);\n  }\n  p {\n    font-size: 18px;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  ', ';\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _SectionTitle = __webpack_require__(4);

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _repos = __webpack_require__(73);

var _repos2 = _interopRequireDefault(_repos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.theme.textPrimary, _ui.theme.textSecondary, medium('\n    padding: 120px 15px;\n    .columns {\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      margin: 50px 0;\n    }\n    .item {\n      width: 50%;\n    }\n    .item:nth-child(1) {\n      padding-right: 7.5px;\n    }\n    .item:nth-child(2) {\n      padding-left: 7.5px;\n    }\n  '), large('\n    .title {\n      font-size: 37px;\n    }\n  '));

var Grants = function Grants() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_SectionTitle2.default, { title: 'Grants program' }),
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
          'Aragon\'s Grants Program is intended to encourage and incentivize people outside of the Core Team to engage in the development of the Aragon ecosystem.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'The Aragon Foundation will introduce multiple distinct events upon which participants can join to submit their concepts for deliberation and be accepted into the Grants Program.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cta' },
        _react2.default.createElement(
          _ui.Button,
          { mode: 'strong' },
          'Apply now'
        )
      )
    )
  );
};

exports.default = Grants;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/repos.4632a716.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _About = __webpack_require__(75);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WhyAragon = __webpack_require__(76);

Object.defineProperty(exports, 'WhyAragon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WhyAragon).default;
  }
});

var _Vision = __webpack_require__(78);

Object.defineProperty(exports, 'Vision', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vision).default;
  }
});

var _Team = __webpack_require__(82);

Object.defineProperty(exports, 'Team', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Team).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 80px;\n'], ['\n  padding-top: 80px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _OverlapBackground = __webpack_require__(3);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _illustration = __webpack_require__(77);

var _illustration2 = _interopRequireDefault(_illustration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Illustration = _ui.IllustratedSection.Illustration,
    Subtitle = _ui.IllustratedSection.Subtitle,
    Emphasis = _ui.IllustratedSection.Emphasis,
    Content = _ui.IllustratedSection.Content;


var StyledOverlapBackground = (0, _ui.styled)(_OverlapBackground2.default)(_templateObject);

var WhyAragon = function WhyAragon() {
  return _react2.default.createElement(
    StyledOverlapBackground,
    null,
    _react2.default.createElement(
      _ui.IllustratedSection,
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
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NjMiIGhlaWdodD0iNDQ3Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDBFRkUyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNC45NTglIiB4Mj0iMTE2LjQwMSUiIHkxPSIwJSIgeTI9IjEyNy44NzMlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBDN0U0IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ijk1Ljg1MSUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMEVGRTIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjAlIiB4Mj0iMTA1Ljc4OSUiIHkxPSItMzMuNDY0JSIgeTI9IjI0NS40NSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFOUYyRjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGN0Y4RjkiLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9ImQiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImUiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImYiIHdpZHRoPSIyNTYuNyUiIGhlaWdodD0iMjU3LjclIiB4PSItNzguMyUiIHk9Ii03OC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMS42OCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWRhc2hhcnJheT0iMywzIiBkPSJNMzMuMjY2LjcwMmw0MjkuNDIxIDIzNC4xOTRtLTc3LjA2Mi0xMzAuMzU5TDExNi4wOTggNDQ2LjM1MiIgb3BhY2l0eT0iLjQiLz48ZWxsaXBzZSBjeD0iMTQzLjg4NiIgY3k9IjIzNS4xNDQiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA1IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjkyLjQ5MyIgcnk9IjkxLjg3NyIvPjxlbGxpcHNlIGN4PSIxNzkuODI0IiBjeT0iMTY1LjA5NSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTAxLjk2OSIgcnk9IjEwMS4yODkiLz48ZWxsaXBzZSBjeD0iMjQxLjgzIiBjeT0iMjE1LjgxOSIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDQiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iNDQuOTc5IiByeT0iNDQuNjc5Ii8+PGVsbGlwc2UgY3g9IjI1Mi45MzUiIGN5PSIyNjIuNjEiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjA0IiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1kYXNoYXJyYXk9IjEsMyIgcng9IjI4LjA4MyIgcnk9IjI3Ljg5NiIvPjxlbGxpcHNlIGN4PSIxNzEuNjM3IiBjeT0iMjE3LjM5OCIgc3Ryb2tlPSJ1cmwoI2IpIiBzdHJva2UtZGFzaGFycmF5PSIxLDMiIHJ4PSIxMjUuNzczIiByeT0iMTI0LjkzNCIvPjxlbGxpcHNlIGN4PSIxNzEuMjY5IiBjeT0iMjA3LjM1MiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMDMiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiByeD0iMTcwLjkwOSIgcnk9IjE2OS43NyIvPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3Ryb2tlPSJ1cmwoI2MpIiBkPSJNMTY1LjUuNzIybDQuOTAyIDEuNTEzYzE1LjE1NCA0Ljg1OSA5NC4wNjUgMzEuODE0IDE1Ni44NiA4NC42MDZsMy4zOTYgMi40MDgtLjc1NCA0LjI1MmgtLjAwOWMtLjgwNyA1Ljk1MS04Ljc0IDQ0LjEyOS0yOS44NDYgODUuMy0xMy42MDIgMjYuNTEtMzAuMSA0OS41OTItNDkuMDM1IDY4LjYwNy0yMy4zNjMgMjMuNDE2LTUwLjQ1NCA0MC43MzYtODAuNTIgNTEuNDg0bC0xLjcwMi41OTctMy4xOTcgMS4yMzUtNC45MDgtMS43MjJjLTMwLjI1NC0xMC44MTUtNTcuMzQ3LTI4LjEzNy04MC41NDgtNTEuNDk2LTE5LjA0My0xOS4yMjgtMzUuNTM4LTQyLjMwNy00OS4wMy02OC42MDItMjAuOTgyLTQxLjAyNy0yOC41MDctNzguMDIyLTI5LjgwMi04NS4wMjNMLjU0IDg5LjU3NGwzLjEyNi0yLjYyN2M2Mi44MS01Mi44NTkgMTQxLjgyMy03OS44NSAxNTcuMDIzLTg0LjcyNEwxNjUuNS43MjJ6TTg2LjAxNCAyNDIuNTRjMjIuOTg0IDIzLjAzNyA0OS43MyA0MC4xMyA3OS41MDggNTAuODE4IDI5LjY3LTEwLjY1IDU2LjQxNy0yNy43OCA3OS41MTItNTAuOTMgMTguODkyLTE4Ljk3NiAzNS40MTgtNDIuMTI5IDQ5LjExNi02OC44MTQgMTguNzE0LTM2LjQ5OSAyNi44MDgtNjkuMjkzIDI5LjQwOC04MS42NDFDMjYxLjA5NSA0MC43NiAxODMuNzYgMTMuNzU3IDE2NS41MTYgNy44NDRjLTE4LjE1MiA1LjgzMy05NS4xIDMyLjUyMS0xNTguMDM0IDg0LjEzMiAyLjU3OCAxMi4zODggMTAuNjMyIDQ1LjMxNiAyOS40MTMgODEuODUyIDEzLjYyNCAyNi41MzkgMzAuMTUgNDkuNjU1IDQ5LjEyIDY4LjcxMnoiIG9wYWNpdHk9Ii41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMzkuODcgNjguMDUyYy0uMTA4IDAtNDkuODk4IDE1LjgwNC00OS44OTggNTkuMDI2IDAgNDMuMjIzIDQ4LjA2IDY0LjE4NyA4My40NTIgNjQuMTg3IDE5LjI1IDAgMzUuMDY1LTUuNTY1IDQ1LjQ5Ni0xMC42NDIgMS4zNDQtNi4xMjcgNi4yMzMtMjAuNjM5IDIyLjQwOC0yMC43NDcgMi44ODUtLjExMiA1LjU5MS40MjUgNy44NjUgMS43MTYgMTAuODI0IDUuODA3IDMuNzg4IDE2LjY2NSAzLjc4OCAxNi42NjVhMjQuNTAyIDI0LjUwMiAwIDAgMCAyLjQ3NS0uNTMxYzEzLjAxLTMuNDggMjcuNjY4LTE4LjI2MiAyNS4xMjUtNDMuMDE0LTIuMDM4LTE5Ljg0OC0yMC40OC0zMi40MjgtMjkuNDUtMzcuNDI2LTIuOTM4LTEuNjM2LTQuODYtMi40NjMtNC44Ni0yLjQ2My4zMjQtMi4wMTYuNDMtMy41NzUuNDMtNC43NzMgMC0uMjI0LS4wMDUtLjQzNS0uMDExLS42MzN2LTIuMzIzYy00Ny4wNzctMjguMzY3LTg2LjkxNS0zMi43MzctMTA2LjU2My0zMi43MzctOC40ODggMC0xMy4yNDUuNzkyLTEzLjI0NS43OTJsMTIuOTg4IDEyLjkwM3ptOTkuNDcyIDI2Ljg3OXMtNi4zODYtMi4wNDMtMTIuODgtMi45MDNjLTMuMjQ3IDMuMzMzLTYuMDYyIDQuNzMtNi45MjggNS4xNjJsLS4yMTYuMjE0Yy0xOC45NDItMy45NzktMjUuNzYxLTEzLjY1NS0yNS43NjEtMTMuNjU1IDE3Ljg2LS4xMDcgMzMuOTg4IDQuMDg1IDQ1Ljc4NSAxMS4xODJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNTYuOTg1IDEyMS43MDNjMCAxNC4wODUtNS44NDQgMjcuMDk0LTE1LjgwMyAzNy42M2wtLjQ3My41NDIuNzk4LS4wMDNjMi43MDYtLjEwOCA1LjQxMi40MyA3LjY4NiAxLjcyIDEwLjgyNCA1LjgwNyAzLjc4OCAxNi42NjUgMy43ODggMTYuNjY1IDEzLjUzLTIuMTUgMzAuMzA3LTE3LjIwMiAyNy42LTQzLjU0NS0yLjAzOC0xOS44NDgtMjAuNDgtMzIuNDI4LTI5LjQ1LTM3LjQyNmE1My41NzQgNTMuNTc0IDAgMCAxIDUuODU0IDI0LjQxN00zNy45MSAxNzEuMDUzYzAgMS43NDQuMDY4IDMuNDA0LjE2NSA1LjAyNyAxMy4zOTYgMjUuNTkgMjkuNTEgNDcuOTQ2IDQ3Ljk0IDY2LjQ2IDIyLjk4NCAyMy4wMzcgNDkuNzMgNDAuMTMgNzkuNTA4IDUwLjgxOCAyOS42Ny0xMC42NSA1Ni40MTctMjcuNzggNzkuNTEyLTUwLjkzIDYuODQ3LTYuODc2IDEzLjM3Ny0xNC4zMDkgMTkuNTgtMjIuMjUxLTQ5LjM3OS0zLjUyNS00Ni4zOC0zMy4zMTktNDYuMzgtMzMuMzE5IDAtMS4xODEgMC0yLjM2NS4yMTctMy41NDggMCAwIC4xMS0xLjA0Ni40NjktMi42ODgtMTAuNDMxIDUuMDc4LTI2LjI0NSAxMC42NDMtNDUuNDk3IDEwLjY0My0zNS4zOTMgMC04My40NTItMjAuOTY0LTgzLjQ1Mi02NC4xODcgMC00My4yMjIgNDkuNzktNTkuMDI2IDQ5Ljc5LTU5LjAyNmwtLjAyNi0uMDA3Yy0xLjI2Mi0uMDk3LTIuNjE1LS4xMDEtMy44Ny0uMTAxQzgxLjQyIDY5Ljg4IDM3LjkxIDExNS4yNSAzNy45MSAxNzEuMDU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyMiA3NS4zMzQpIi8+PC9nPjxnIGZpbGw9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OCA3Mi41MTMpIj48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgZmlsdGVyPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNyIgcng9IjMuMjE2IiByeT0iMy4xOTQiLz48ZWxsaXBzZSBjeD0iMy4yMTYiIGN5PSIzLjE5NCIgcng9IjIiIHJ5PSIxLjk4NyIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiBmaWx0ZXI9InVybCgjZSkiIG9wYWNpdHk9Ii43IiByeD0iMy4yMTYiIHJ5PSIzLjE5NCIvPjxlbGxpcHNlIGN4PSIxNjkuMjE2IiBjeT0iOTIuNTk0IiByeD0iMiIgcnk9IjEuOTg3Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iLjgiIHJ4PSIzLjIxNiIgcnk9IjMuMTk0Ii8+PGVsbGlwc2UgY3g9IjkxLjIxNiIgY3k9IjE4MS45OTQiIHJ4PSIyIiByeT0iMS45ODciLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  background: #fff;\n\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  img.item {\n    max-width: 100%;\n    margin-bottom: 30px;\n  }\n  p {\n    margin-top: 20px;\n    font-size: 18px;\n    color: ', ';\n  }\n\n  ', ';\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  background: #fff;\n\n  .title {\n    margin-top: 10px;\n    margin-bottom: 25px;\n    font-size: 25px;\n    color: ', ';\n    text-align: center;\n    padding: 0 10%;\n  }\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  img.item {\n    max-width: 100%;\n    margin-bottom: 30px;\n  }\n  p {\n    margin-top: 20px;\n    font-size: 18px;\n    color: ', ';\n  }\n\n  ', ';\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _SectionTitle = __webpack_require__(4);

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _ = __webpack_require__(79);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(80);

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(81);

var _6 = _interopRequireDefault(_5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.theme.textPrimary, _ui.theme.textSecondary, medium('\n    padding: 120px 15px 80px;\n    .columns {\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      margin: 40px 0;\n    }\n    img.item {\n      width: 33%;\n      margin-bottom: 0;\n    }\n    p.item {\n      width: 50%;\n    }\n    p.item:nth-child(1) {\n      padding-right: 7.5px;\n    }\n    p.item:nth-child(2) {\n      padding-left: 7.5px;\n    }\n  '), large('\n    .title {\n      font-size: 37px;\n    }\n  '));

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
        'Evolution of the Internet and Blockchain technology are changing the ways we interact with each other'
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
          'We believe that the progression of modern technology solutions such as the invention of the blockchain are changing the incentives for people to interact with each other. We are building the tools for the next generation of organizations to take advantage of this revolution'
        ),
        _react2.default.createElement(
          'p',
          { className: 'item' },
          'Trying out new governance models has been a very risky endeavour during previous iterations of society. Now, for the first time in history, we can let a thousand governance models emerge from the comfort of our laptops'
        )
      )
    )
  );
};

exports.default = Vision;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0.e9965467.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1.400bd8d8.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2.9f8285bd.jpg";

/***/ }),
/* 82 */
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

var _ui = __webpack_require__(1);

var _SectionTitle = __webpack_require__(4);

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _Member = __webpack_require__(83);

var _Member2 = _interopRequireDefault(_Member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var CoreSection = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.theme.mainBackground, medium('\n    padding: 120px 0;\n  '));

var StyledMember = (0, _ui.styled)(_Member2.default)(_templateObject2, medium('\n    width: 33%;\n  '), large('\n    width: 25%;\n  '));

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
          name: 'Tatu Karki',
          title: 'Communications Director',
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
          github: 'onbjerg'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Pierre.png',
          name: 'Pierre Bertet',
          title: 'UI & Interaction Developer',
          twitter: 'bpierre',
          github: 'bpierre'
        }),
        _react2.default.createElement(StyledMember, {
          picture: 'Brett.png',
          name: 'Brett Sun',
          title: 'EVM Engineer',
          twitter: 'sohkai',
          medium: 'sohkai',
          github: 'sohkai'
        })
      )
    )
  );
};

var AdvisorsSection = (0, _ui.styled)(_ui.Section)(_templateObject3, medium('\n    padding: 120px 0;\n  '));

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 50px;\n  text-align: center;\n  .picture {\n    width: 128px;\n    height: 128px;\n    transition: transform 0.5s ease-in-out;\n    will-change: transform;\n    border-radius: 50%;\n  }\n  &:hover .picture {\n    transform: translateY(-5px);\n  }\n  h1 {\n    margin-top: 20px;\n    font-size: 22px;\n  }\n\n  h2 {\n    font-size: 16px;\n    color: ', ';\n  }\n\n  .socials {\n    margin-top: 15px;\n  }\n\n  .socials a img {\n    width: 16px;\n    height: 16px;\n    margin: 0 5px;\n  }\n'], ['\n  padding-top: 50px;\n  text-align: center;\n  .picture {\n    width: 128px;\n    height: 128px;\n    transition: transform 0.5s ease-in-out;\n    will-change: transform;\n    border-radius: 50%;\n  }\n  &:hover .picture {\n    transform: translateY(-5px);\n  }\n  h1 {\n    margin-top: 20px;\n    font-size: 22px;\n  }\n\n  h2 {\n    font-size: 16px;\n    color: ', ';\n  }\n\n  .socials {\n    margin-top: 15px;\n  }\n\n  .socials a img {\n    width: 16px;\n    height: 16px;\n    margin: 0 5px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _twitter = __webpack_require__(84);

var _twitter2 = _interopRequireDefault(_twitter);

var _medium = __webpack_require__(85);

var _medium2 = _interopRequireDefault(_medium);

var _github = __webpack_require__(86);

var _github2 = _interopRequireDefault(_github);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.theme.textSecondary);

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
        src: __webpack_require__(87)("./" + picture),
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
/* 84 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjI3MiAxLjY3YTYuNTA1IDYuNTA1IDAgMCAxLTEuODY4LjUwMkEzLjIzNiAzLjIzNiAwIDAgMCAxNS44My4zODRhNi4zODcgNi4zODcgMCAwIDEtMi4wNTkuNzgzIDMuMjM3IDMuMjM3IDAgMCAwLTIuMzctMS4wMjQgMy4yNDMgMy4yNDMgMCAwIDAtMy4yNDUgMy4yNDRjMCAuMjUxLjAzLjUwMi4wOC43NDRBOS4yMjIgOS4yMjIgMCAwIDEgMS41NDcuNzM1YTMuMjIgMy4yMiAwIDAgMC0uNDQxIDEuNjM4IDMuMjQgMy4yNCAwIDAgMCAxLjQ0NiAyLjcwMiAzLjI2OCAzLjI2OCAwIDAgMS0xLjQ2Ni0uNDEydi4wNGEzLjI0NSAzLjI0NSAwIDAgMCAyLjYwMSAzLjE4NCAzLjQzIDMuNDMgMCAwIDEtLjg1My4xMSA0LjExIDQuMTEgMCAwIDEtLjYxMy0uMDUgMy4yNSAzLjI1IDAgMCAwIDMuMDMzIDIuMjUgNi40OTggNi40OTggMCAwIDEtNC4wMjggMS4zODdjLS4yNyAwLS41MjItLjAxLS43ODMtLjA0QTkuMTY4IDkuMTY4IDAgMCAwIDUuNDI0IDEzYzUuOTY3IDAgOS4yMzEtNC45NDIgOS4yMzEtOS4yMzEgMC0uMTQgMC0uMjgxLS4wMS0uNDIyYTYuOTc1IDYuOTc1IDAgMCAwIDEuNjI3LTEuNjc3eiIgZmlsbD0iIzAwQ0FFNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuOTk3IDMuOGMwLS4wMS0uMDItLjA0LS4wMy0uMDVMLjgzNCAxLjE3OWMtLjE0LS4wNy0uMjgyLS4xNTEtLjQ0Mi0uMTUxLS4yNzEgMC0uMzkyLjIzLS4zOTIuNDgydjExLjQ1YzAgLjMwMi4yMjEuNjY0LjUwMi44MDVsNC42NzEgMi4zNGMuMS4wNS4yMS4wOC4zMzEuMDguMzQyIDAgLjQ5My0uMjkxLjQ5My0uNjAyVjMuOHptLjY0MyAxLjAxNWw1LjM2MyA4LjY5OC01LjM2My0yLjY3MVY0LjgxNXptMTEuMzYuMTh2MTAuNTg4YzAgLjMzMS0uMTkuNTYyLS41MjIuNTYyYS45NTEuOTUxIDAgMCAxLS40NzItLjEzbC00LjQzLTIuMjFMMTggNC45OTV6bS0uMDMtMS4yMDVjMCAuMDQtNS4xOTMgOC40NjgtNS41OTUgOS4xMUw4LjQ1OCA2LjUzM2wzLjI1NC01LjI5M2EuNjA2LjYwNiAwIDAgMSAuNTIyLS4yODFjLjA5IDAgLjE4MS4wMi4yNjIuMDZMMTcuOTMgMy43M2MuMDIuMDEuMDQuMDMuMDQuMDZ6IiBmaWxsPSIjNDZGMkEwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNzE0Ljg1N2E3LjcxNiA3LjcxNiAwIDAgMSAyLjQ0MSAxNS4wMzdjLS4zOTIuMDctLjUzMi0uMTctLjUzMi0uMzcyIDAtLjI1LjAxLTEuMDg1LjAxLTIuMTIgMC0uNzIyLS4yNDEtMS4xODQtLjUyMi0xLjQyNSAxLjcxNy0uMTkxIDMuNTI1LS44NDQgMy41MjUtMy44MDcgMC0uODQ0LS4zMDEtMS41MjctLjc5My0yLjA3LjA4LS4yLjM0MS0uOTg0LS4wOC0yLjA0OS0uNjQ0LS4yLTIuMTIuNzk0LTIuMTIuNzk0YTcuMjYzIDcuMjYzIDAgMCAwLTMuODU3IDBzLTEuNDc3LS45OTUtMi4xMi0uNzk0Yy0uNDIyIDEuMDY1LS4xNiAxLjg0OS0uMDggMi4wNWEyLjk4OCAyLjk4OCAwIDAgMC0uNzk0IDIuMDY5YzAgMi45NTMgMS43OTggMy42MTYgMy41MTYgMy44MDctLjIyLjItLjQyMi41NDItLjQ5MiAxLjAzNC0uNDQyLjIwMS0xLjU2Ny41NDMtMi4yNC0uNjQzLS40MjItLjczMy0xLjE4NS0uNzkzLTEuMTg1LS43OTMtLjc1NC0uMDEtLjA1LjQ3Mi0uMDUuNDcyLjUwMi4yMy44NTMgMS4xMjUuODUzIDEuMTI1LjQ1MiAxLjM3NiAyLjYwMi45MTQgMi42MDIuOTE0IDAgLjY0My4wMSAxLjI0NS4wMSAxLjQzNiAwIC4yMDEtLjE0LjQ0Mi0uNTMzLjM3MkE3LjcxNiA3LjcxNiAwIDAgMSA3LjcxMy44NTd6bS00Ljc5MSAxMS4wOGMtLjAyLjA0LS4wOC4wNS0uMTMuMDItLjA2LS4wMy0uMDkxLS4wOC0uMDctLjEyMS4wMi0uMDMuMDctLjA0LjEzLS4wMi4wNi4wMy4wOS4wOC4wNy4xMnptLjMxMS4zNGMtLjA0LjA0MS0uMTEuMDIxLS4xNi0uMDMtLjA1LS4wNi0uMDYtLjEzLS4wMi0uMTYuMDQtLjA0LjExLS4wMi4xNi4wMy4wNS4wNi4wNi4xMy4wMi4xNnptLjMwMi40NTNjLS4wNC4wMy0uMTIgMC0uMTcxLS4wNy0uMDUtLjA3LS4wNS0uMTUxIDAtLjE4MS4wNS0uMDQuMTMtLjAxLjE3LjA2LjA1LjA3LjA1LjE1IDAgLjE5em0uNDIyLjQyMmMtLjA0LjA1LS4xMzEuMDQtLjIwMS0uMDMtLjA3LS4wNi0uMDktLjE1MS0uMDQtLjE5MS4wNC0uMDUuMTMtLjA0LjIuMDMuMDYuMDYuMDguMTUuMDQuMTl6bS41NzIuMjVjLS4wMi4wNjEtLjExLjA5MS0uMTkuMDYxLS4wOTEtLjAyLS4xNTEtLjA5LS4xMzEtLjE1LjAyLS4wNi4xMS0uMDkuMTktLjA3LjA5MS4wMy4xNTEuMS4xMzEuMTZ6bS42MzMuMDUxYzAgLjA2LS4wNy4xMS0uMTYuMTEtLjEwMS4wMS0uMTcyLS4wNC0uMTcyLS4xMSAwLS4wNi4wNy0uMTEuMTYxLS4xMS4wOS0uMDEuMTcxLjA0LjE3MS4xMXptLjU4My0uMWMuMDEuMDYtLjA1LjEyLS4xNDEuMTQtLjA5LjAyLS4xNy0uMDItLjE4LS4wOC0uMDEtLjA3LjA1LS4xMy4xNC0uMTUuMDktLjAxLjE3LjAzLjE4LjA5eiIgZmlsbD0iI0IzQjNCMyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Brayton.jpg": 88,
	"./Brett.png": 89,
	"./Jake.jpg": 90,
	"./Jorge.png": 91,
	"./Kenny.jpg": 92,
	"./Luis.png": 93,
	"./Luke.png": 94,
	"./Maria.png": 95,
	"./Mihai.jpg": 96,
	"./Oliver.png": 97,
	"./Pierre.png": 98,
	"./Tatu.png": 99
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
webpackContext.id = 87;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Brayton.7f8e1fb7.jpg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Brett.13f42124.png";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Jorge.3bb0efc9.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Kenny.73adc9f3.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Luis.fa649d7f.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Luke.45d8619a.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Maria.718178fb.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Mihai.582035cc.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Oliver.0f1f07f5.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Pierre.90109361.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Tatu.db166b10.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _Join = __webpack_require__(101);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Culture = __webpack_require__(102);

Object.defineProperty(exports, 'Culture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Culture).default;
  }
});

var _Value = __webpack_require__(109);

Object.defineProperty(exports, 'Value', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Value).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 102 */
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

var _ui = __webpack_require__(1);

var _OverlapBackground = __webpack_require__(3);

var _OverlapBackground2 = _interopRequireDefault(_OverlapBackground);

var _background = __webpack_require__(103);

var _background2 = _interopRequireDefault(_background);

var _logo = __webpack_require__(104);

var _logo2 = _interopRequireDefault(_logo);

var _buildEcosystem = __webpack_require__(105);

var _buildEcosystem2 = _interopRequireDefault(_buildEcosystem);

var _deepWorkSessions = __webpack_require__(106);

var _deepWorkSessions2 = _interopRequireDefault(_deepWorkSessions);

var _fullyDistributed = __webpack_require__(107);

var _fullyDistributed2 = _interopRequireDefault(_fullyDistributed);

var _technologyCompany = __webpack_require__(108);

var _technologyCompany2 = _interopRequireDefault(_technologyCompany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TITLE = 'Some insights into how we work';
var PARTS = [{
  title: 'Fully distributed',
  img: _fullyDistributed2.default,
  content: '\n      We all work remotely \u2013 we don\'t believe talent is geographically centralized\n    '
}, {
  title: 'Deep work sessions',
  img: _deepWorkSessions2.default,
  content: '\n      We do focused deep work sessions 4 days a week, leaving Monday for meetings and calls\n    '
}, {
  title: 'Ecosystem-focused',
  img: _buildEcosystem2.default,
  content: '\n      Team members are encouraged to spend a chunk of their paid work time on other blockchain based open source projects to aid the growth of the ecosystem\n    '
}, {
  title: 'Product first',
  img: _technologyCompany2.default,
  content: '\n      We are a technology-oriented project that is open source only. Our position is product first, we place innovation and user experience above all else\n    '
}];

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.themeDark.accent, medium((0, _ui.styledCss)(_templateObject2)));

var Content = _ui.styled.div(_templateObject3, medium('\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  '), large('\n    background: url(' + _logo2.default + ') no-repeat 50% 50%;\n  '));

var Row = _ui.styled.div(_templateObject3, medium('\n    display: flex;\n    flex-wrap: wrap;\n  '), large('\n    width: 100%;\n    justify-content: space-between;\n  '));

var StyledPart = _ui.styled.div(_templateObject4, _ui.themeDark.textPrimary, _ui.themeDark.textSecondary, medium('\n    width: calc(50% - 15px);\n    max-width: 355px;\n    margin-top: 0;\n    margin-right: 15px;\n    padding-bottom: 80px;\n    & + & {\n      margin-top: 0;\n      margin-right: 0;\n      margin-left: 15px;\n    }\n    .image {\n      min-height: 200px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n  '), large('\n    max-width: 260px;\n  '));

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
      _react2.default.createElement('img', { src: img, alt: '' })
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
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMS4zNTUlIiB5MT0iMTEzLjk4MyUiIHgyPSI5Mi4xMDElIiB5Mj0iLTI4LjI3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEIwQjBBIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ2NEY1MSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgxNDQwdjExMTFIMFYwem0wIDB2MzE5LjY5NWM0MjMuMTkzIDc3Ljc0NSA2NjMuMTkzIDExNi42MTggNzIwIDExNi42MTggNTYuODA3IDAgMjk2LjgwNy0zOC44NzMgNzIwLTExNi42MThWMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzE5KSIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjRjFGOEY5IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMjY3RThBIiBzdG9wLW9wYWNpdHk9Ii40IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSI5NS44NTElIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjExLjM1NSUiIHkxPSIxMTMuOTgzJSIgeDI9IjkyLjEwMSUiIHkyPSItMjguMjczJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiMxOTFCMUMiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMzc0MDQzIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjkuMTIzJSIgeTE9IjkwLjk2MiUiIHgyPSI2OC44NzElIiB5Mj0iNC4zNTklIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzEwMTAxMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMzOTM5MzciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMDMuOTYyJSIgeTE9IjI2LjQyMSUiIHgyPSIxOC4zMTclIiB5Mj0iODAuODQ5JSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMkI0RTUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDFFQUUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODAuNjMyJSIgeTE9IjguMzk1JSIgeDI9IjQ1Ljc3MiUiIHkyPSIxMTUuMzk5JSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEUzRTkiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDJCMkU0IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTcuNzg4JSIgeTE9IjAlIiB4Mj0iMzYuMTIyJSIgeTI9IjEwOC4yNTElIiBpZD0iZyI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRjVFNiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMURERUYiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI3NS4yOTUlIiB5MT0iMTAyLjc0NiUiIHgyPSIyOS45NjklIiB5Mj0iLTguMTk2JSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiMwMUJCRTQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBGNEUxIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLWRhc2hhcnJheT0iMSwzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Ik0xOTEuNzUgMTkyLjMxM0wuNDA0Ljk2NSIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Ik0zODEuNzUgMTkyLjMxM0wxOTAuNDA0Ljk2NSIgZmlsbD0idXJsKCNiKSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTcyLjE1NCAwKSIvPjxwYXRoIGQ9Ik0xOTEuNzUgNDEyLjMxM0wuNDA0IDIyMC45NjUiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNjMzLjI3OSkiLz48cGF0aCBkPSJNMzgxLjc1IDQxMi4zMTNMMTkwLjQwNCAyMjAuOTY1IiBmaWxsPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMjg2LjA3NyAzMTYuNjQpIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iMTkwIiBjeT0iMjA4IiByPSIxNTUiLz48L2c+PHBhdGggZD0iTTUxLjk3MyAxNDYuNTVjLTExLjQ2My0xMS41MTUtMjEuNDQ4LTI1LjQ4Mi0yOS42OC00MS41MThDMTAuOTQ1IDgyLjk1NiA2LjA3OCA2My4wNiA0LjUyIDU1LjU3NSA0Mi41NDcgMjQuMzkgODkuMDQgOC4yNjUgMTAwLjAxIDQuNzRjMTEuMDIzIDMuNTcyIDU3Ljc1MSAxOS44ODkgOTUuNDk0IDUwLjgzMy0xLjU3MSA3LjQ2MS02LjQ2MiAyNy4yNzYtMTcuNzY5IDQ5LjMzLTguMjc3IDE2LjEyNC0xOC4yNjMgMzAuMTEzLTI5LjY3OCA0MS41OC0xMy45NTUgMTMuOTg3LTMwLjExNSAyNC4zMzctNDguMDQzIDMwLjc3My0xNy45OTMtNi40NTktMzQuMTUzLTE2Ljc4Ni00OC4wNDEtMzAuNzA2eiIgZmlsbD0idXJsKCNkKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkgMTE2KSIvPjxwYXRoIGQ9Ik0xMDAgLjQzNmwyLjk2Mi45MTVjOS4xNTcgMi45MzUgNTYuODM3IDE5LjIyMiA5NC43OCA1MS4xMmwyLjA1MSAxLjQ1Ni0uNDU1IDIuNTctLjAwNS0uMDAxYy0uNDg4IDMuNTk2LTUuMjgyIDI2LjY2NC0xOC4wMzQgNTEuNTQxLTguMjIgMTYuMDE4LTE4LjE4NyAyOS45NjUtMjkuNjI5IDQxLjQ1NC0xNC4xMTYgMTQuMTQ5LTMwLjQ4NSAyNC42MTQtNDguNjUyIDMxLjEwOGwtMS4wMjkuMzYtMS45MzIuNzQ3LTIuOTY1LTEuMDRjLTE4LjI4LTYuNTM1LTM0LjY1LTE3LjAwMi00OC42Ny0zMS4xMTYtMTEuNTA2LTExLjYxOC0yMS40NzMtMjUuNTYzLTI5LjYyNS00MS40NUM2LjExOSA4My4zMSAxLjU3MiA2MC45NTUuNzkgNTYuNzI1bC0uNDY1LTIuNjAzIDEuODktMS41ODdDNDAuMTY2IDIwLjU5NyA4Ny45MDggNC4yODggOTcuMDkyIDEuMzQzTDEwMCAuNDM2ek01MS45NzMgMTQ2LjU1YzEzLjg4OCAxMy45MiAzMC4wNDggMjQuMjQ3IDQ4LjA0IDMwLjcwNiAxNy45MjktNi40MzYgMzQuMDktMTYuNzg2IDQ4LjA0NC0zMC43NzMgMTEuNDE1LTExLjQ2NyAyMS40LTI1LjQ1NiAyOS42NzgtNDEuNTggMTEuMzA3LTIyLjA1NCAxNi4xOTgtNDEuODY5IDE3Ljc2OS00OS4zMy0zNy43NDMtMzAuOTQ0LTg0LjQ3LTQ3LjI2LTk1LjQ5NC01MC44MzNDODkuMDQxIDguMjY0IDQyLjU0NyAyNC4zOSA0LjUyIDU1LjU3NWMxLjU1OCA3LjQ4NSA2LjQyNSAyNy4zOCAxNy43NzMgNDkuNDU3IDguMjMyIDE2LjAzNiAxOC4yMTcgMzAuMDAzIDI5LjY4IDQxLjUxOHoiIGZpbGw9InVybCgjZSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5IDExNikiLz48cGF0aCBkPSJNODQuNTE0IDQxLjEyYy0uMDY2IDAtMzAuMTUgOS41NDgtMzAuMTUgMzUuNjY1IDAgMjYuMTE2IDI5LjAzOSAzOC43ODMgNTAuNDI0IDM4Ljc4MyAxMS42MzIgMCAyMS4xODctMy4zNjIgMjcuNDktNi40My44MTItMy43MDIgMy43NjYtMTIuNDcgMTMuNTQtMTIuNTM2IDEuNzQzLS4wNjggMy4zNzguMjU3IDQuNzUyIDEuMDM2IDYuNTQgMy41MSAyLjI4OSAxMC4wNyAyLjI4OSAxMC4wN2ExNC44MDUgMTQuODA1IDAgMCAwIDEuNDk1LS4zMmM3Ljg2LTIuMTA0IDE2LjcxOC0xMS4wMzUgMTUuMTgyLTI1Ljk5LTEuMjMyLTExLjk5NC0xMi4zNzUtMTkuNTk1LTE3Ljc5NS0yMi42MTUtMS43NzUtLjk4OC0yLjkzNy0xLjQ4OC0yLjkzNy0xLjQ4OC4xOTYtMS4yMTguMjYtMi4xNi4yNi0yLjg4NCAwLS4xMzYtLjAwMy0uMjYzLS4wMDctLjM4M3YtMS40MDNjLTI4LjQ0NS0xNy4xNC01Mi41MTYtMTkuNzgxLTY0LjM4OC0xOS43ODEtNS4xMjkgMC04LjAwMy40NzktOC4wMDMuNDc5bDcuODQ4IDcuNzk2em02MC4xMDQgMTYuMjRzLTMuODU5LTEuMjM0LTcuNzgyLTEuNzU0Yy0xLjk2MyAyLjAxNC0zLjY2NCAyLjg1OC00LjE4NyAzLjExOWwtLjEzLjEzYy0xMS40NDYtMi40MDUtMTUuNTY2LTguMjUyLTE1LjU2Ni04LjI1MiAxMC43OTItLjA2NCAyMC41MzcgMi40NyAyNy42NjUgNi43NTd6IiBmaWxsPSJ1cmwoI2YpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OSAxMTYpIi8+PHBhdGggZD0iTTE1NS4yNzggNzMuNTM2YzAgOC41MTEtMy41MyAxNi4zNzItOS41NDkgMjIuNzM4bC0uMjg1LjMyNy40ODItLjAwMWMxLjYzNS0uMDY2IDMuMjcuMjU5IDQuNjQ0IDEuMDM4IDYuNTQgMy41MSAyLjI4OSAxMC4wNyAyLjI4OSAxMC4wNyA4LjE3NS0xLjMgMTguMzEyLTEwLjM5NCAxNi42NzctMjYuMzEtMS4yMzItMTEuOTk0LTEyLjM3NS0xOS41OTUtMTcuNzk1LTIyLjYxNWEzMi4zNzEgMzIuMzcxIDAgMCAxIDMuNTM3IDE0Ljc1MyIgZmlsbD0idXJsKCNnKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkgMTE2KSIvPjxwYXRoIGQ9Ik0yMi45MDYgMTAzLjM1NWMwIDEuMDU0LjA0MSAyLjA1Ny4xIDMuMDM4IDguMDk0IDE1LjQ2MiAxNy44MyAyOC45NyAyOC45NjcgNDAuMTU3IDEzLjg4OCAxMy45MiAzMC4wNDggMjQuMjQ3IDQ4LjA0IDMwLjcwNiAxNy45MjktNi40MzYgMzQuMDktMTYuNzg2IDQ4LjA0NC0zMC43NzMgNC4xMzctNC4xNTUgOC4wODMtOC42NDcgMTEuODMxLTEzLjQ0Ni0yOS44MzYtMi4xMy0yOC4wMjQtMjAuMTMyLTI4LjAyNC0yMC4xMzIgMC0uNzE0IDAtMS40MjkuMTMxLTIuMTQ0IDAgMCAuMDY2LS42MzIuMjgzLTEuNjI0LTYuMzAyIDMuMDY5LTE1Ljg1OCA2LjQzMS0yNy40OSA2LjQzMS0yMS4zODUgMC01MC40MjQtMTIuNjY3LTUwLjQyNC0zOC43ODMgMC0yNi4xMTcgMzAuMDg0LTM1LjY2NiAzMC4wODQtMzUuNjY2bC0uMDE1LS4wMDRjLS43NjMtLjA1OS0xLjU4LS4wNjEtMi4zNC0uMDYxLTMyLjg5NiAxLjE3LTU5LjE4NyAyOC41ODQtNTkuMTg3IDYyLjMwMSIgZmlsbD0idXJsKCNoKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkgMTE2KSIvPjwvZz48L3N2Zz4="

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjM0IiBoZWlnaHQ9IjEyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0Ljk1OCUiIHkxPSIwJSIgeDI9IjExNi40MDElIiB5Mj0iMTI3Ljg3MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlGMkY0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjhGOSIgb2Zmc2V0PSIxMDAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRUZFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjExLjM1NSUiIHkxPSIxMTMuOTgzJSIgeDI9IjkyLjEwMSUiIHkyPSItMjguMjczJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiMwQjBCMEEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMzYzQzNEIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iIzg2ODQ4NCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBkPSJNMTMuMjEgMTEzLjQ3MXYtNTAuODhoMTY5Ljg1Mm0tNzMuMzA0LTUwLjE1N3Y0OS41OTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik02MS4wMzMgMTQuMTA5djk1LjMzNGgtNDcuMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiLz48cGF0aCBzdHJva2U9InVybCgjYikiIGZpbGw9InVybCgjYykiIGQ9Ik00Ny41IDQ3LjVINzZWNzZINDcuNXpNNDggOTVoMjguNXYyOC41SDQ4em00Ny00N2gyOC41djI4LjVIOTV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PHBhdGggZmlsbD0idXJsKCNkKSIgb3BhY2l0eT0iLjIiIGQ9Ik0yMDEgNDhoMzEuNXYyOC41SDIwMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBvcGFjaXR5PSIuMyIgZD0iTTE5MyA0OGgyOC41djI4LjVIMTkzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIvPjxwYXRoIGZpbGw9InVybCgjZCkiIG9wYWNpdHk9Ii4zIiBkPSJNMTgzIDQ4aDI4LjV2MjguNUgxODN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PHBhdGggZmlsbD0idXJsKCNkKSIgZD0iTTE3MyA0OGgyOC41djI4LjVIMTczeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIvPjxwYXRoIGQ9Ik0xODIuNzA4IDcxLjAzMWE5LjUgOS41IDAgMSAxIDExLjA5LjM1NWwtMy4wNC01LjQ2NmEzLjMxIDMuMzEgMCAxIDAtNC44NjItLjM3OGwtMy4xODggNS40ODl6IiBzdHJva2U9IiNGRkYiLz48cGF0aCBzdHJva2U9InVybCgjYikiIGZpbGw9InVybCgjYykiIGQ9Ik05NSAwaDI4LjV2MjguNUg5NXpNMCA5NWgyOC41djI4LjVIMHptMC00Ny41aDI4LjVWNzZIMHpNNDggMGgyOC41djI4LjVINDh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjE2MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iOTYuOTczJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFN0UyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuOTU4JSIgeTE9IjAlIiB4Mj0iMTE2LjQwMSUiIHkyPSIxMjcuODczJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiNFOUYyRjQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjdGOEY5IiBvZmZzZXQ9IjEwMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFRkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTEuMzU1JSIgeTE9IjExMy45ODMlIiB4Mj0iOTIuMTAxJSIgeTI9Ii0yOC4yNzMlIiBpZD0iYyI+PHN0b3Agc3RvcC1jb2xvcj0iIzBCMEIwQSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM0NjRGNTEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxNS40MzUpIj48cGF0aCBkPSJNMCAxMTYuODUyYy0uMDA4IDQuMTA2IDMuMzc2IDcuNDQxIDcuNTYgNy40NWwxMjguNjYzLjI2M2M0LjE4NC4wMDkgNy41ODItMy4zMTMgNy41OS03LjQxOUwxNDQgMzEuODYuMTg2IDMxLjU2NSAwIDExNi44NTJ6TTE0NCA4LjIwOGMuMDA4LTQuMDY5LTMuMzgtNy4zNzQtNy41NjgtNy4zODJMNy42NDcuNTY2QzMuNDU5LjU1NS4wNTcgMy44NDcuMDQ5IDcuOTE1TDAgMzEuMjc1bDE0My45NTEuMjkxTDE0NCA4LjIwOCIgc3Ryb2tlPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTQ4LjU4MyA1NGgxLjc3di00LjJoNC4zNXYtMS41NmgtNC4zNXYtMy4xMDVoNC43ODVWNDMuNWgtNi41NTVWNTR6bTguNDMgMFY0My41aDQuMTg0YzIuMTMgMCAzLjU4NSAxLjE4NSAzLjU4NSAzLjI3IDAgMS42MzUtLjk0NCAyLjY4NS0yLjM0IDMuMDQ1TDY0LjcwNyA1NGgtMS45NjRsLTIuMTMtNC4wMzVoLTEuODNWNTRoLTEuNzd6bTEuNzctNS41NjVoMi4yOGMxLjE0IDAgMS45MzQtLjQ4IDEuOTM0LTEuNjY1cy0uNzgtMS42NjUtMS45MzQtMS42NjVoLTIuMjh2My4zM3pNNjYuNjU2IDU0aDEuNzdWNDMuNWgtMS43N1Y1NHptNi4xNjYtMS42MzVoMS41NDVjMS41NzUgMCAyLjc3NS0uNzA1IDIuNzc1LTMuNjMgMC0yLjU1LTEuMTQtMy42LTIuNjg2LTMuNmgtMS42MzR2Ny4yM3pNNzEuMDUzIDU0VjQzLjVoMy40MzRjMi4zMjYgMCA0LjU0NiAxLjYwNSA0LjU0NiA1LjIzNSAwIDQuMDItMi4zMSA1LjI2NS00LjYzNiA1LjI2NWgtMy4zNDV6bTE1Ljk3NSAwbC0uNjMtMS44aC00LjI0NWwtLjYxNiAxLjhoLTEuNzU1bDMuNzgtMTAuNWgxLjQ0bDMuNzggMTAuNWgtMS43NTR6bS0yLjc2LTcuOTM1bC0xLjU5IDQuNjJoMy4xOTVsLTEuNTc2LTQuNjJoLS4wM3pNOTIuNDQxIDU0aDEuNzR2LTQuNDI1bDMuNDM2LTYuMDc1aC0xLjg3NWwtMi40MTUgNC40N2gtLjAzbC0yLjQtNC40N2gtMS44OWwzLjQzNCA2LjA3NVY1NHoiIGZpbGw9IiMwMENBRTQiLz48cGF0aCBkPSJNNTMuMzYgNzIuMTQ0YTE1LjI5NSAxNS4yOTUgMCAwIDEtNC43NiAzLjQxNiAxNy4zMzMgMTcuMzMzIDAgMCAxLTUuNiAxLjUxMnYtMS44NDhjMi4yNC0uMzM2IDQuMjc1LTEuMTIgNi4xMDQtMi4zNTIgMS44My0xLjIzMiAzLjMyMy0yLjg1NiA0LjQ4LTQuODcyaDEuOTA0djM4LjY0SDUzLjM2VjcyLjE0NHptMTguOTI4IDIyLjY4Yy0uMDM3IDEuNjA1LjIzMyAzLjA2MS44MTIgNC4zNjhhMTAuMDg3IDEwLjA4NyAwIDAgMCAyLjM4IDMuMzZjMS4wMDguOTMzIDIuMTkzIDEuNjUyIDMuNTU2IDIuMTU2IDEuMzYzLjUwNCAyLjgyOC43NTYgNC4zOTYuNzU2IDEuNjQzIDAgMy4xMzYtLjMwOCA0LjQ4LS45MjRhMTAuODUzIDEwLjg1MyAwIDAgMCAzLjQ3Mi0yLjQ5MmMuOTctMS4wNDUgMS43MTctMi4yNzcgMi4yNC0zLjY5Ni41MjMtMS40MTkuNzg0LTIuOTEyLjc4NC00LjQ4IDAtMS41NjgtLjI3LTMuMDQzLS44MTItNC40MjRhMTAuNTQ0IDEwLjU0NCAwIDAgMC0yLjI5Ni0zLjU4NCAxMS4yNTQgMTEuMjU0IDAgMCAwLTMuNS0yLjQwOGMtMS4zNDQtLjU5Ny0yLjgtLjg5Ni00LjM2OC0uODk2LTIuMjQgMC00LjE0NC40NTctNS43MTIgMS4zNzItMS41NjguOTE1LTIuOTY4IDIuMjY4LTQuMiA0LjA2aC0yLjE4NEw3NS4zNjggNjhoMTkuNTQ0djEuODQ4SDc3LjA0OGwtMy4zMDQgMTUuNC4xMTIuMTEyYzEuMTItMS41NjggMi41MS0yLjczNSA0LjE3Mi0zLjUgMS42NjEtLjc2NSAzLjQ2My0xLjE0OCA1LjQwNC0xLjE0OCAxLjkwNCAwIDMuNjU5LjMyNyA1LjI2NC45OCAxLjYwNS42NTMgMi45ODcgMS41NTkgNC4xNDQgMi43MTYgMS4xNTcgMS4xNTcgMi4wNjMgMi41NDggMi43MTYgNC4xNzIuNjUzIDEuNjI0Ljk4IDMuMzg4Ljk4IDUuMjkycy0uMzE3IDMuNjc3LS45NTIgNS4zMmMtLjYzNSAxLjY0My0xLjUzIDMuMDctMi42ODggNC4yODRhMTIuMTIyIDEyLjEyMiAwIDAgMS00LjE0NCAyLjgyOGMtMS42MDUuNjcyLTMuMzc5IDEuMDA4LTUuMzIgMS4wMDgtMS44NjcgMC0zLjYyMS0uMjktNS4yNjQtLjg2OC0xLjY0My0uNTc5LTMuMDgtMS40LTQuMzEyLTIuNDY0LTEuMjMyLTEuMDY0LTIuMTg0LTIuMzctMi44NTYtMy45Mi0uNjcyLTEuNTUtLjk1Mi0zLjI5NS0uODQtNS4yMzZoMi4xMjh6IiBmaWxsPSJ1cmwoI2IpIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2MpIiBjeD0iMTA2IiBjeT0iMTE0IiByPSIzMSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg3IDk2Ljg4NykiPjxwYXRoIGQ9Ik0zNC4wODcgMjYuNzczYy0xLjI1Ny0yLjM3NS01Ljg5My01LjA5Mi01Ljg5My01LjA5Mi0xLjA0OS0uNTk5LTIuMzE0LS42NjUtMi45MTMuNDAxIDAgMC0xLjUwNiAxLjgwNi0xLjg4OSAyLjA2Ni0xLjc1IDEuMTg2LTMuMzcgMS4xNC01LjAwOC0uNDk3bC03LjYwNi03LjYwNmMtMS42MzYtMS42MzYtMS42ODItMy4yNTctLjQ5Ny01LjAwNy4yNi0uMzgzIDIuMDY3LTEuODkgMi4wNjctMS44OSAxLjA2Ni0uNTk4IDEtMS44NjQuNC0yLjkxMyAwIDAtMi43MTUtNC42MzUtNS4wOTEtNS44OTJhMi42MDUgMi42MDUgMCAwIDAtMy4wNi40NmwtMS42OCAxLjY4Qy0yLjQxIDcuODEuMjEzIDEzLjgyNSA1LjU0IDE5LjE1M2w5LjczOCA5LjczN2M1LjMyNyA1LjMyNyAxMS4zNDIgNy45NSAxNi42NjkgMi42MjNsMS42OC0xLjY4Yy44MDgtLjgwOS45OTUtMi4wNS40Ni0zLjA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC45NzYpIiBzdHJva2U9InVybCgjYikiLz48cGF0aCBkPSJNMjcuNTU2LjQzN2MtNC44ODggMC04Ljg1IDMuNDQzLTguODUgNy42OTEgMCAxLjU2NS41NCAzLjAyIDEuNDYzIDQuMjM1LS4xMiAxLjQwNC0uNDYgMy43MDUtMS40NTMgNC42NjggMCAwIDMuMDI0LS43MzcgNS4wNzktMS45NGE5Ljk0IDkuOTQgMCAwIDAgMy43Ni43MjhjNC44ODggMCA4Ljg1LTMuNDQ0IDguODUtNy42OTEgMC00LjI0OC0zLjk2Mi03LjY5MS04Ljg1LTcuNjkxIiBmaWxsPSJ1cmwoI2QpIi8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iMjIuNSIgY3k9IjguNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iMzIuNSIgY3k9IjguNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iMjcuNSIgY3k9IjguNSIgcj0iMS41Ii8+PC9nPjwvZz48cGF0aCBkPSJNMjYuMDM1IDE5LjI2OWE2Ljg1NCA2Ljg1NCAwIDEgMSAwIDEzLjcwNyA2Ljg1NCA2Ljg1NCAwIDAgMSAwLTEzLjcwN205NC45NTIuMTkxYTYuODU0IDYuODU0IDAgMSAxIDAgMTMuNzA4IDYuODU0IDYuODU0IDAgMCAxIDAtMTMuNzA3IiBmaWxsPSIjMDAwIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDMyIDEpIiBmaWxsPSJ1cmwoI2MpIiBzdHJva2U9InVybCgjYSkiPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIyOC44MzEiIHJ4PSI1Ii8+PHJlY3QgeD0iOTUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyOC44MzEiIHJ4PSI1Ii8+PC9nPjwvZz48L3N2Zz4="

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY2IiBoZWlnaHQ9IjE4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjOTc5Nzk3IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ny42ODQlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciIHN0b3Atb3BhY2l0eT0iLjMxMyIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iMTMwLjA0NCUiIHkyPSIxNTAuMzc4JSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBEQUUzIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEQ3RTQiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxOC40OTIlIiB5MT0iMTcuMDYxJSIgeDI9IjUxLjAxOSUiIHkyPSIyMy44NDglIiBpZD0iZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRDZFMyIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciIHN0b3Atb3BhY2l0eT0iLjM2NiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBENkUzIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iZyI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iaCI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzdFNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMCUiIHgyPSItMi42MTklIiB5Mj0iMTAwJSIgaWQ9ImkiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVBRTUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDJCNUU0IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNDMuODMzIDM1LjExN2wtNC4zNTkuMzI4LTUuODk0IDMuNTMgOS4xNjQgNy43MDQtMS40MDUgNC45NCA2LjE3IDE4LjYxeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3LjAzMiAzMi43NjkpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2IpIiBkPSJNNzEuOTU4IDYxLjgyNWw4LjkzMSAxNC45NTUgOC4zMzYtOS44OTkgNi4wMzQgOS40ODQgMTAuMzAxIDQuMzk3IDUuNTUzLTMuNjItLjI3Mi0zLjg2NyAzLjQ3OC0zLjM0MiAyLjg4OS04LjEwOC02LjA5NS0xMC4zNTQgNi43NjIgMy44OTYgMS4yNTgtMTQuNDYzLTIuNTE2LTYuNTQ2IDMuODk3LTIuNDY3IDYuNTgzIDYuNjktLjU2NC0yNy41NzMgOC44NzItMS43MDktOS42MTItNC43OTYtNjQuMjI4IDEuODE5LTMuNzkzIDIuOTc3LTkuMjk2LS4yNzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy4wMzIgMzIuNzY5KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgZD0iTTk0LjQzIDEyLjk4NmwxOC45MzYgMTAuNjQ3LTUuODItMTguNTUzem0yNi4xNDUgMTguOTY4bC4xODQtLjU1IDIuNDgyLTcuNDMtOS42NC0uMzUzbS0uMjc0LjA1bDMuMzEyIDEwLjU5M20xLjQ0MiA2LjkxNmwtNDUuODkgMjAuMjMgMTcuMjY1IDUuNDYzem0tNy40ODIgMjMuMTU4bC40Mi0xMy4yNzEgOC4yNDgtMTAuNTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuMDMyIDMyLjc2OSkiLz48cGF0aCBzdHJva2U9InVybCgjYykiIGQ9Ik0xMi44NDQgMTguMDM0SDQuNDYybC00LjQ0NyA4LjAxIDYuODMgNC45MjMgNi43Ni0zLjcyMiA0LjY1IDMuMzE4aDYuNTc3bC44MzggNS4zOTZoOC40Nmw0Ljc0My02LjcyNyA1LjAxIDUuODQ4IDM2LjA0OCA2LjY5N0w0Ny45NCA4LjQ3NSAzMy44MjYuOTgzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3LjAzMiAzMi43NjkpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNTI3IiBkPSJNNC40NzYgMTguMzQybDIuMjQ3IDExLjU3NyA2LjA1NS0xMS44NTkuOTggOS4yMzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy4wMzIgMzIuNzY5KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgb3BhY2l0eT0iLjUyNiIgZD0iTTQ4LjAwMyA3MS42NThMNTYuMDggNTEuMjdsMjQuMDM3LTkuMzcxLTguMjg3IDIwLjA3Ni0xNS43NS0xMC40MDggNS45OTUgOS44MDktNS45OTUgOS4zNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy4wMzIgMzIuNzY5KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgb3BhY2l0eT0iLjUyNyIgZD0iTTYwLjMzNCA3LjMxOGwzNC4yNDIgNS42NTItMTQuNTk0IDI4Ljk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuMDMyIDMyLjc2OSkiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik0xMDcuNjUgNS4yNzdsMTUuNjYxIDE4Ljg4IDMuNzExIDQuNDczLTYuMzU2IDMuMTk0bS03LjE3Ni04LjE2NGw3LjIgOC4xODJNMTA3LjkzNiA1LjIybDE4LjU0OCA2LjU5Ny0xLjczMi03LjNNODkuNjU1IDY2LjkwNGwyMC44MDItMi42MzIuNTM0IDguOTY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuMDMyIDMyLjc2OSkiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik0xMy42NDcgMTYuMTc2TDguMzYgNy43OTkgMjAuNTc3LjM2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0yMC41NjQuNTAyTC42NS45OTIiIHN0cm9rZT0idXJsKCNhKSIgb3BhY2l0eT0iLjMzNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgZD0iTTM5LjIyIDYuNzEybDE2Ljk3Mi0zLjMzOSA0LjQyNSAxMi4yNW02LjM1OC04Ljg5Nmg1Ljc0M2wtMy4yNTYtMy42MTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNzM5IiBkPSJNODIuMzE3IDQuODgzbDUuNTQ2IDcuMjQ1IDEwLjc0LTQuNTgtOS43NDQtMy43OTQtMS44MTcgMTUuMjUyLTcuMzM3LTkuODU2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik04Mi41IDQuODlsNi4zMy0xLjE4Nk0zNy41ODEgNzUuNzc1bC0yNC4zOTkgMTcgNy4zMzQgMTMuNjc2em0zMC42MDcgMjguNDE2bC0yMS4xNzUtOC4zOG0tNy42MTkgNDQuMjg1bC0xMy44NC04LjIxLTEuOTg3LTE5Ljk3TTg5LjEgNjAuNjE3bDIuODMgMjQuNDQzIDEzLjc0OCA1LjUxNyA2LjQzNy42MSA0LjkwOCA0Ljg0Ljk4NCAxNi44Ni0zLjU3NyAxNi4wMzcgMjEuMjEtOS41MjcgMjMuMjEtMzUuMzM1LTEyLjE3My0yLjI3LTIuMDMxLTIxLjE3Ni0xOC40MDItOS42Ny05LjIyMS04LjE2OS03LjU2NSA0Ljg3MS0xMi45MDMgNC43MjZ6IiBzdHJva2U9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii42MDIiIGQ9Ik0xMTEuMTc1IDkwLjk3NmwxNC43MDctMTkuODk1LTguNzc3IDI0LjkyOSAyOS42OS0xNC4xOTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBkPSJNMTQ2Ljg5IDgxLjgwNEwxMjYuMzg0IDcwLjIyIiBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii41MjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBkPSJNMTE4LjE5OCAxMTIuODEybDE3LjMyOCA2LjY3Mm04LjI3IDIuODg2bDcuMzY1LTcuMzc2TTExNi44NSAyMC42MzlsMzUuNzItOC44OW04OS4zMTUgNzUuMTc3bDMuNjYzIDguODEyIDMuMTctNy4yMjRtLTI4LjMwNyAzNC44NjhsNy45ODItNS44MTctMy45OS0xMy4zNDZtNC4wMjMgMTMuMzA2bDE2LjUgNS45NDQiIHN0cm9rZT0idXJsKCNhKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0yMTYuMzQ1IDExNC4xM2w3LjY2OC05Ljk3NSAxMC40NDQtNC40MDcgOS44NTQuMzYzIDE3LjUyOSAxMi4wOTEtNy4xOTggMjMuNDQ2LTkuNzc0LTEyLjE4Mi0xMi44MzcgNC44MDUtMTEuNTY1LTQuODA1LTQuMTIxLTkuMzM3eiIgc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNzM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2QpIiBkPSJNMjMxLjk1MyAxMjguMjUzbC0zLjU0NC0xMC43NjIgMjAuNzA2LTE0LjA3NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0yNDkuNDE3IDEwMy42OTRsNS4zMTIgMzEuODQ1IiBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii40MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii40NjIiIGQ9Ik0xLjI0MiAzNC4yOThMMTMuMjcgMTYuMThsMS44MyA0MC43NTMgMjEuOTAxIDE4LjQ2Nmg1LjM2M2wxMC42MTUgNDYuMjU1TDQ5IDEzMy43MzggMjAuMjYgMTA2LjQxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2UpIiBkPSJNMS4zNDUgMzQuMjcybDM1LjggNDAuOTEtNy41Ni0yNy43MSAxMS44OC0xLjUtMjguMDI4LTMwLjEyTDIwLjU0My40MTkgMzkuNCA2Ljc5bDIxLjIyNiA5LjA2IDEyLjkzNyA5LjIzNy0xLjU1Ni0xNC4wNzMtMzEuOTkzIDE0LjA3MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik0uNC45NDRsNy45MjcgNi44NzhtNS4zMjYgOC4wOTZsMjUuNTE0LTkuMTU2IDIuNDg3IDM5LjA0N0w2MC43MSAxNS45MThNNTYuMzUgMy40NTNsNi45MDQgNi40MDUtNC4yMjQuNzg1TTc3LjE1IDcuMzJsMi4xLTIuNjE0aC0yLjU2NnptMi42MjQgMS45MzZsOC4wMTQgMi43NjhNMTQuODMgNDkuNjAxbDE0LjgzNC0yLjEzNC01Ljk5IDEyLjE1LTguMzctMi42MyIgc3Ryb2tlPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2YpIiBkPSJNMjAuNTA4IDEwNi40ODdsMzMuNDQ2LTEzLjczM2g1Ljc2M2w4LjQ2MiAxMS41MzQtMTQuODU2IDE3LjE2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIGQ9Ik01My45NzcgOTIuNzUzbC0xMS41MjktMTcuMzNNMjAuNjUgMTA2LjYzNWwxOC43MDEgMzMuNTY4IDkuNjU0LTYuNDY3IiBzdHJva2U9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuOTY2IDMwLjA1NykiLz48cGF0aCBzdHJva2U9InVybCgjYSkiIG9wYWNpdHk9Ii41OCIgZD0iTTI1LjU3NSAxMzIuMDMzbDMuMzg5IDE2LjA0NyA3Ljk4NyA1LjkxMyAxLjkwNi0yLjkyLjU0NS0xMS4wNjktMTAuNDM4IDguMDc2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2cpIiBkPSJNODkuMTY3IDYwLjgyNmwyMS40MiAyOC44ODItMTMuNzctMzcuMzA5IDI5LjU5NCAxNy40NDdWNTAuODA5bC0xNi44LTMuMTU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggZD0iTTEyNi41NzIgNjkuOTUxbDE4LTkuMjU4bTIuMjg1IDIxLjA3N2wtMTEuMjk2IDM3LjU5NC0xOC42NS0yMy40NjVtMjYuODg2IDI2LjUyNmwzLjYxLTEzLjAyOCAzLjc3NCA1LjY5MSIgc3Ryb2tlPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNTQyIiBkPSJNMTI4LjkyOCAzMy4yNDVsNC41OTktMTYuODAxIDkuNDgxIDE1LjU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBkPSJNMTE2Ljg2NSAxNy4wNmwtLjg0OC02LjkzLTYuNzA0IDUuNjY0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi45NjYgMzAuMDU3KSIvPjxwYXRoIHN0cm9rZT0idXJsKCNhKSIgdHJhbnNmb3JtPSJyb3RhdGUoLTExMCAyMzQuODA4IDEwNC4xMDkpIiBkPSJNMjE5LjkyIDg3Ljc2Mmw0LjI2Mi00LjU5NS40NTYgNy41MzMgMS4wNDUgMi4wOTYtMi44ODEgNC4yNzUtMi44ODEtMy43MjJ6Ii8+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNDU5IiBkPSJNMjM1LjY2MiA4OC41NzZsNi4zODQtMS43MzMgNi43MTkgMS43MzMgMy45ODUgMTAuMTg4LTcuMjY3LTIuOTRoLTUuMDR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk2NiAzMC4wNTcpIi8+PHBhdGggZD0iTTE0MyA1MS41YzAtMTQuMDgzLTcuNTA3LTIzLjUtMTgtMjMuNXMtMTcgMTYuNDE3LTE3IDMwLjVtMTI2LjE2MiA3OS42NjVjMC0xNC4wODMtMTIuMjAyLTc2LjU5LTQyLjI2Mi03Ny40MzdDMTYxLjg0IDU5Ljg4IDE1NSA5MS40MTcgMTU1IDEwNS41bS0xMTAtMzdjMC0xNC4wODMtMTEuMjAzLTIyLjY0OC0xNi0yMi42NDgtNC43OTcgMC0xOSAuNTY1LTE5IDE0LjY0OG05OC01YzAtMTQuMDgzLTguNjUtMzYuODUtMzEuMjg4LTM2Ljg1LTIyLjYzOCAwLTMxLjI4OCAzNi41NjQtMzEuMjg4IDUwLjY0NyIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjIsNCIvPjxwYXRoIGQ9Ik0xNTQuMjUgMTAzLjMxNmMwLTE0LjA4My0yNC4wODYtNTQuMzQzLTYxLjA1Ny01NC44MzQtMzYuOTctLjQ5LTQ3LjU3NiAxNy42NDktNDcuNzcgMjAuODE1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMiw0Ii8+PHBhdGggZD0iTTEwNy42OSA1Ni4zMTZjMC0xNC4wODMtNy4xNTMtNTUuMTAxLTQ2LjM1Mi01NS4xMDEtMzkuMiAwLTUxLjkxNCA0Ni45OTktNTEuOTE0IDYxLjA4MiIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjIsNCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4yMjMgOTMuMjIzKSI+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuNCIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjIuNTUxIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMzA1IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iNS4xOTMiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4xMTkiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI5Ljc2MiIvPjxjaXJjbGUgZmlsbD0idXJsKCNpKSIgY3g9IjkuODUyIiBjeT0iOS44NTIiIHI9IjEuMDcxIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMy4yMjMgNDEuMjIzKSI+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuNCIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjIuNTUxIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMzA1IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iNS4xOTMiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4xMTkiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI5Ljc2MiIvPjxjaXJjbGUgZmlsbD0idXJsKCNpKSIgY3g9IjkuODUyIiBjeT0iOS44NTIiIHI9IjEuMDcxIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4LjIyMyA0OS4yMjMpIj48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii40IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iMi41NTEiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4zMDUiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI1LjE5MyIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjExOSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjkuNzYyIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2kpIiBjeD0iOS44NTIiIGN5PSI5Ljg1MiIgcj0iMS4wNzEiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUuMjIzIDU5LjIyMykiPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjQiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSIyLjU1MSIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjMwNSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjUuMTkzIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMTE5IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iOS43NjIiLz48Y2lyY2xlIGZpbGw9InVybCgjaSkiIGN4PSI5Ljg1MiIgY3k9IjkuODUyIiByPSIxLjA3MSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMjIzIDUwLjIyMykiPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjQiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSIyLjU1MSIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjMwNSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjUuMTkzIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2gpIiBvcGFjaXR5PSIuMTE5IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iOS43NjIiLz48Y2lyY2xlIGZpbGw9InVybCgjaSkiIGN4PSI5Ljg1MiIgY3k9IjkuODUyIiByPSIxLjA3MSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjQuMjIzIDEyOC4yMjMpIj48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii40IiBjeD0iOS44MzIiIGN5PSI5LjgzMiIgcj0iMi41NTEiLz48Y2lyY2xlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4zMDUiIGN4PSI5LjgzMiIgY3k9IjkuODMyIiByPSI1LjE5MyIvPjxjaXJjbGUgZmlsbD0idXJsKCNoKSIgb3BhY2l0eT0iLjExOSIgY3g9IjkuODMyIiBjeT0iOS44MzIiIHI9IjkuNzYyIi8+PGNpcmNsZSBmaWxsPSJ1cmwoI2kpIiBjeD0iOS44NTIiIGN5PSI5Ljg1MiIgcj0iMS4wNzEiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM3IiBoZWlnaHQ9IjE0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjExLjM1NSUiIHkxPSIxMTMuOTgzJSIgeDI9IjkyLjEwMSUiIHkyPSItMjguMjczJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiMwQjBCMEEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjNDY0RjUxIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSItMTEuNTA2JSIgeTE9Ii0yMS43MTIlIiB4Mj0iNTAlIiB5Mj0iOTYuOTczJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiM3MjcxNzEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFN0UyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5Ni45NzMlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzk5OTI5MiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEU3RTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC45NTglIiB5MT0iMCUiIHgyPSIxMTYuNDAxJSIgeTI9IjEyNy44NzMlIiBpZD0iZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0U5RjJGNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNGN0Y4RjkiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEVGRTIiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC4yNjMgLjcyMykiIGZpbGw9InVybCgjYSkiPjxwYXRoIGQ9Ik02MC4yMzcuMjYzbDEuNzg0LjU1YzUuNTE2IDEuNzY5IDM0LjIzNyAxMS41OCA1Ny4wOTIgMzAuNzk0bDEuMjM2Ljg3Ny0uMjc0IDEuNTQ4aC0uMDAzYy0uMjk0IDIuMTY2LTMuMTgyIDE2LjA2MS0xMC44NjMgMzEuMDQ2LTQuOTUxIDkuNjQ5LTEwLjk1NiAxOC4wNS0xNy44NDggMjQuOTcxLTguNTAzIDguNTIzLTE4LjM2MyAxNC44MjctMjkuMzA2IDE4LjczOGwtLjYyLjIxOC0xLjE2NC40NS0xLjc4Ni0uNjI4Yy0xMS4wMTEtMy45MzYtMjAuODcyLTEwLjI0LTI5LjMxNy0xOC43NDItNi45My02Ljk5OS0xMi45MzUtMTUuMzk5LTE3Ljg0NS0yNC45N0MzLjY4NiA1MC4xODQuOTQ3IDM2LjcxOS40NzYgMzQuMTdsLS4yOC0xLjU2OCAxLjEzOC0uOTU2QzI0LjE5NSAxMi40MDcgNTIuOTU0IDIuNTgzIDU4LjQ4Ni44MWwxLjc1LS41NDZ6bS0yOC45MyA4OC4wMTRjOC4zNjUgOC4zODUgMTguMSAxNC42MDYgMjguOTM4IDE4LjQ5NiAxMC44LTMuODc2IDIwLjUzNC0xMC4xMTEgMjguOTQtMTguNTM2IDYuODc2LTYuOTA3IDEyLjg5MS0xNS4zMzQgMTcuODc3LTI1LjA0NyA2LjgxMS0xMy4yODQgOS43NTctMjUuMjIgMTAuNzAzLTI5LjcxNS0yMi43MzQtMTguNjQtNTAuODgyLTI4LjQ2OC01Ny41MjItMzAuNjItNi42MDcgMi4xMjMtMzQuNjE0IDExLjgzNy01Ny41MiAzMC42MjEuOTM4IDQuNTEgMy44NyAxNi40OTQgMTAuNzA1IDI5Ljc5MiA0Ljk2IDkuNjYgMTAuOTc0IDE4LjA3MyAxNy44NzkgMjUuMDA5eiIgc3Ryb2tlPSJ1cmwoI2IpIiBvcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik01MC45MDggMjQuNzY5Yy0uMDM5IDAtMTguMTYxIDUuNzUyLTE4LjE2MSAyMS40ODQgMCAxNS43MzEgMTcuNDkyIDIzLjM2MiAzMC4zNzQgMjMuMzYyIDcuMDA3IDAgMTIuNzYyLTIuMDI2IDE2LjU1OS0zLjg3NC40OS0yLjIzIDIuMjY5LTcuNTEyIDguMTU2LTcuNTUxIDEuMDUtLjA0IDIuMDM1LjE1NSAyLjg2My42MjQgMy45NCAyLjExNCAxLjM3OCA2LjA2NiAxLjM3OCA2LjA2NmE4LjkxOCA4LjkxOCAwIDAgMCAuOTAxLS4xOTNjNC43MzUtMS4yNjcgMTAuMDctNi42NDcgOS4xNDUtMTUuNjU2LS43NDItNy4yMjQtNy40NTQtMTEuODAzLTEwLjcyLTEzLjYyMi0xLjA2OC0uNTk1LTEuNzY4LS44OTYtMS43NjgtLjg5NmExMC45OCAxMC45OCAwIDAgMCAuMTU2LTEuNzM3YzAtLjA4Mi0uMDAxLS4xNTktLjAwNC0uMjN2LS44NDdDNzIuNjUzIDIxLjM3NSA1OC4xNTMgMTkuNzg0IDUxLjAwMiAxOS43ODRjLTMuMDkgMC00LjgyMS4yODktNC44MjEuMjg5bDQuNzI3IDQuNjk2em0zNi4yMDUgOS43ODNzLTIuMzI0LS43NDQtNC42ODgtMS4wNTdjLTEuMTgyIDEuMjEzLTIuMjA2IDEuNzIyLTIuNTIxIDEuODc5bC0uMDguMDc4Yy02Ljg5My0xLjQ0OC05LjM3NS00Ljk3LTkuMzc1LTQuOTcgNi41LS4wMzkgMTIuMzcgMS40ODcgMTYuNjY0IDQuMDd6IiBzdHJva2U9InVybCgjYykiLz48cGF0aCBkPSJNOTMuNTM1IDQ0LjI5NmMwIDUuMTI3LTIuMTI3IDkuODYyLTUuNzUyIDEzLjY5N2wtLjE3Mi4xOTZoLjI5Yy45ODUtLjA0IDEuOTcuMTU2IDIuNzk4LjYyNSAzLjk0IDIuMTE0IDEuMzc4IDYuMDY2IDEuMzc4IDYuMDY2IDQuOTI1LS43ODMgMTEuMDMxLTYuMjYgMTAuMDQ2LTE1Ljg0OS0uNzQyLTcuMjI0LTcuNDU0LTExLjgwMy0xMC43Mi0xMy42MjJhMTkuNSAxOS41IDAgMCAxIDIuMTMyIDguODg3IiBzdHJva2U9InVybCgjZCkiLz48cGF0aCBkPSJNMTMuNzk4IDYyLjI1OGMwIC42MzUuMDI1IDEuMjM5LjA2IDEuODMgNC44NzYgOS4zMTQgMTAuNzQgMTcuNDUgMTcuNDQ5IDI0LjE4OSA4LjM2NSA4LjM4NSAxOC4xIDE0LjYwNiAyOC45MzggMTguNDk2IDEwLjgtMy44NzYgMjAuNTM0LTEwLjExMSAyOC45NC0xOC41MzZhODkuODQgODkuODQgMCAwIDAgNy4xMjctOC4xQzc4LjMzOSA3OC44NTUgNzkuNDMgNjguMDEyIDc5LjQzIDY4LjAxMmMwLS40MyAwLS44NjEuMDc5LTEuMjkyIDAgMCAuMDQtLjM4LjE3LS45NzgtMy43OTYgMS44NDgtOS41NTIgMy44NzQtMTYuNTU5IDMuODc0LTEyLjg4MiAwLTMwLjM3NC03LjYzLTMwLjM3NC0yMy4zNjJTNTAuODY4IDI0Ljc3IDUwLjg2OCAyNC43N2wtLjAxLS4wMDNhMTguOTM1IDE4LjkzNSAwIDAgMC0xLjQwOC0uMDM3Yy0xOS44MTYuNzA1LTM1LjY1MyAxNy4yMTktMzUuNjUzIDM3LjUzIiBzdHJva2U9InVybCgjYikiLz48L2c+PGNpcmNsZSBmaWxsPSJ1cmwoI2EpIiBjeD0iMTA1IiBjeT0iMTEwIiByPSIzMSIvPjxwYXRoIGQ9Ik05Ni42NiAxMjIuOTk1QTE0LjQ3NiAxNC40NzYgMCAwIDEgOTEgMTExLjVjMC04LjAwOCA2LjQ5Mi0xNC41IDE0LjUtMTQuNXMxNC41IDYuNDkyIDE0LjUgMTQuNWMwIDUuMDEzLTIuNTQ0IDkuNDMyLTYuNDEyIDEyLjAzN2wtNC42NDMtOC4zNDRhNS4wNSA1LjA1IDAgMSAwLTcuNDItLjU3N2wtNC44NjUgOC4zNzl6IiBzdHJva2U9InVybCgjZSkiLz48L2c+PC9zdmc+"

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 50px 15px;\n  background: white;\n\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .item {\n    margin-top: 20px;\n    max-width: 400px;\n  }\n  h2 {\n    font-size: 26px;\n    margin: 12px 0;\n  }\n  p {\n    font-size: 16px;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n  .cta button {\n    margin: 0 5px;\n  }\n\n  ', ';\n'], ['\n  padding: 50px 15px;\n  background: white;\n\n  .columns {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .item {\n    margin-top: 20px;\n    max-width: 400px;\n  }\n  h2 {\n    font-size: 26px;\n    margin: 12px 0;\n  }\n  p {\n    font-size: 16px;\n    color: ', ';\n  }\n  .cta {\n    text-align: center;\n    margin-top: 50px;\n  }\n  .cta button {\n    margin: 0 5px;\n  }\n\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(1);

var _ = __webpack_require__(2);

var _focus = __webpack_require__(110);

var _focus2 = _interopRequireDefault(_focus);

var _proactive = __webpack_require__(111);

var _proactive2 = _interopRequireDefault(_proactive);

var _heart = __webpack_require__(112);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Main = (0, _ui.styled)(_ui.Section)(_templateObject, _ui.theme.textSecondary, medium('\n    padding-top: 128px;\n    padding-bottom: 128px;\n    .columns {\n      flex-direction: row;\n      align-items: flex-start;\n      flex-wrap: wrap;\n      margin: 70px 0;\n    }\n    .item {\n      width: 33%;\n      margin-top: 0;\n      padding: 0 25px;\n    }\n    .item:nth-child(1) {\n      padding-left: 0;\n    }\n    .item:nth-child(3) {\n      padding-right: 0;\n    }\n  '));

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
          _react2.default.createElement('img', { src: _focus2.default, alt: '' }),
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
          _react2.default.createElement('img', { src: _proactive2.default, alt: '' }),
          _react2.default.createElement(
            'h2',
            null,
            'Proactive attitude'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Working remotely and autonomously, having a positive and proactive attitude with a love for time self-management is essential to our day-to-day operations'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement('img', { src: _heart2.default, alt: '' }),
          _react2.default.createElement(
            'h2',
            null,
            'The value that you bring'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Every person has a unique set of skills that bring meaning to what we are doing. We value what you can do and your attitude in doing it. Our goal is to enable you to realize the value which you can bring, no matter where/whether you went to college'
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
/* 110 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMgNi42MDd2Ni41YS40NTguNDU4IDAgMCAxLS40NjQuNDY0SDcuODkzYS40NTguNDU4IDAgMCAxLS40NjQtLjQ2NHYtLjkyOGMwLS4yNjIuMjAzLS40NjUuNDY0LS40NjVoMy4yNVY2LjYwN2MwLS4yNjEuMjAzLS40NjQuNDY0LS40NjRoLjkyOWMuMjYgMCAuNDY0LjIwMy40NjQuNDY0em02LjAzNiA1LjEwN2MwLTQuMzUyLTMuNTQtNy44OTMtNy44OTMtNy44OTNTMy4yNSA3LjM2MSAzLjI1IDExLjcxNHMzLjU0IDcuODkzIDcuODkzIDcuODkzIDcuODkzLTMuNTQgNy44OTMtNy44OTN6bTMuMjUgMGMwIDYuMTUyLTQuOTkxIDExLjE0My0xMS4xNDMgMTEuMTQzQzQuOTkgMjIuODU3IDAgMTcuODY3IDAgMTEuNzE0IDAgNS41NjIgNC45OTEuNTcxIDExLjE0My41NzFjNi4xNTIgMCAxMS4xNDMgNC45OTEgMTEuMTQzIDExLjE0M3oiIGZpbGw9IiNBNzgxRkYiLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIxOS41IiBjeT0iMTkuNSIgcj0iNi41Ii8+PHBhdGggZD0iTTI1LjU5IDIzLjA5YS44NjYuODY2IDAgMCAwLS4yNS0uNjA4bC0yLjYyNi0yLjYyNSAyLjYyNS0yLjYyNWEuODY2Ljg2NiAwIDAgMCAwLTEuMjE0bC0xLjIxNC0xLjIxNGEuODY2Ljg2NiAwIDAgMC0xLjIxNCAwbC0yLjYyNSAyLjYyNS0yLjYyNS0yLjYyNWEuODY2Ljg2NiAwIDAgMC0xLjIxNSAwbC0xLjIxNCAxLjIxNGEuODY2Ljg2NiAwIDAgMCAwIDEuMjE0bDIuNjI1IDIuNjI1LTIuNjI1IDIuNjI1YS44NjYuODY2IDAgMCAwIDAgMS4yMTRsMS4yMTQgMS4yMTVhLjg2Ni44NjYgMCAwIDAgMS4yMTUgMGwyLjYyNS0yLjYyNSAyLjYyNSAyLjYyNWEuODY2Ljg2NiAwIDAgMCAxLjIxNCAwbDEuMjE0LTEuMjE1YS44NjMuODYzIDAgMCAwIC4yNS0uNjA3eiIgZmlsbD0iI0E3ODFGRiIvPjwvZz48L3N2Zz4="

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMDcyIDExLjkzNGg5Ljc1YTUuMzE3IDUuMzE3IDAgMCAxLTEuOTUgMi4zNTMgNS4xMyA1LjEzIDAgMCAxLTIuOTM4Ljg5NyA1LjA3IDUuMDcgMCAwIDEtMi45MjUtLjg5NyA1LjM0NiA1LjM0NiAwIDAgMS0xLjkzNy0yLjM1M3ptNC44NjIgNS4zODJhNy40ODcgNy40ODcgMCAwIDAgMy4xOTgtLjcwMiA3LjQ1NiA3LjQ1NiAwIDAgMCAyLjU2MS0xLjkzNyA3LjM0NSA3LjM0NSAwIDAgMCAxLjQ5NS0yLjc5NWwuMzEyLjA1MmMuNTkgMCAxLjEtLjIxNyAxLjUzNC0uNjUuNDMzLS40MzMuNjUtLjk0NS42NS0xLjUzNCAwLS41OS0uMjE3LTEuMS0uNjUtMS41MzQtLjQzMy0uNDMzLS45NDUtLjY1LTEuNTM0LS42NWwtLjMxMi4wNTJhNy4zMjUgNy4zMjUgMCAwIDAtMS40OTUtMi44MjEgNy4zMTYgNy4zMTYgMCAwIDAtMi41NjEtMS45MjQgNy42MDUgNy42MDUgMCAwIDAtMy4xOTgtLjY4OWMtMS4xMjcgMC0yLjE5My4yMy0zLjE5OC42ODlhNy4zMTYgNy4zMTYgMCAwIDAtMi41NjEgMS45MjRBNy4zMjUgNy4zMjUgMCAwIDAgNC42OCA3LjYxOGwtLjMxMi0uMDUyYy0uNTkgMC0xLjEuMjE3LTEuNTM0LjY1LS40MzMuNDMzLS42NS45NDUtLjY1IDEuNTM0IDAgLjU5LjIxNyAxLjEuNjUgMS41MzQuNDMzLjQzMy45NDUuNjUgMS41MzQuNjVsLjMxMi0uMDUyYTcuMzQ1IDcuMzQ1IDAgMCAwIDEuNDk1IDIuNzk1IDcuNDU2IDcuNDU2IDAgMCAwIDIuNTYxIDEuOTM3IDcuNDg3IDcuNDg3IDAgMCAwIDMuMTk4LjcwMnptMTEuODMtNi44NjRhNC40NSA0LjQ1IDAgMCAxLTEuMDE0IDIuMTcxIDQuMDAxIDQuMDAxIDAgMCAxLTEuOTc2IDEuMjg3IDkuNDczIDkuNDczIDAgMCAxLTIuMDI4IDIuNzgyIDEwLjE1NyAxMC4xNTcgMCAwIDEtMy4wNDIgMi4wMjhjLTEuMjEzLjUyLTIuNDcuNzgtMy43Ny43OC0xLjMgMC0yLjU0OC0uMjYtMy43NDQtLjc4YTEwLjA2NyAxMC4wNjcgMCAwIDEtMy4wMTYtMi4wMDJjLS44ODQtLjg1LTEuNTYtMS43ODUtMi4wMjgtMi44MDhhNC4yMjkgNC4yMjkgMCAwIDEtMi4wMTUtMS4yODcgNC4xMTcgNC4xMTcgMCAwIDEtMS4wMjctMi4xNzFBMy4wNTYgMy4wNTYgMCAwIDEgMCA5LjcyNGMwLS4yMDguMDM1LS40MzMuMTA0LS42NzZhNC4xMTcgNC4xMTcgMCAwIDEgMS4wMjctMi4xNzFBNC4yMjkgNC4yMjkgMCAwIDEgMy4xNDYgNS41OWMuNjA3LTEuMjgzIDEuMzg3LTIuMzMxIDIuMzQtMy4xNDZBOS40NjYgOS40NjYgMCAwIDEgOC40MzcuNjM3IDkuNjMgOS42MyAwIDAgMSAxMS45MzQgMGMxLjMxNyAwIDIuNTc0LjI1MSAzLjc3Ljc1NGExMC4wNjcgMTAuMDY3IDAgMCAxIDMuMDE2IDIuMDAyIDkuNDcxIDkuNDcxIDAgMCAxIDIuMDAyIDIuODM0Yy43OC4yMjUgMS40NTIuNjU0IDIuMDE1IDEuMjg3YTQuMTE3IDQuMTE3IDAgMCAxIDEuMDI3IDIuMTcxYy4wNy4yNDMuMTA0LjQ2OC4xMDQuNjc2IDAgLjIwOC0uMDM1LjQ1LS4xMDQuNzI4ek03Ljg3OCA4LjExMmMwLS4zODEuMTM0LS43MDIuNDAzLS45NjJzLjU5NC0uMzkuOTc1LS4zOS42OTMuMTMuOTM2LjM5Yy4yNDMuMjYuMzY0LjU4LjM2NC45NjIgMCAuMzgxLS4xMjYuNzA2LS4zNzcuOTc1YTEuMjMgMS4yMyAwIDAgMS0uOTM2LjQwM2MtLjM3MyAwLS42OTMtLjEzNC0uOTYyLS40MDNhMS4zMjggMS4zMjggMCAwIDEtLjQwMy0uOTc1em01LjQzNCAwYzAtLjM4MS4xMjYtLjcwMi4zNzctLjk2MnMuNTY4LS4zOS45NDktLjM5LjcwMi4xMy45NjIuMzkuMzkuNTguMzkuOTYyYzAgLjM4MS0uMTMuNzA2LS4zOS45NzVzLS41OC40MDMtLjk2Mi40MDNjLS4zODEgMC0uNjk4LS4xMy0uOTQ5LS4zOXMtLjM3Ny0uNTktLjM3Ny0uOTg4eiIgZmlsbD0iI0E3ODFGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjkyIDE2Ljg0OGMyLjE1LTEuOTI0IDMuNjU3LTMuMzIgNC41MjQtNC4xODYgMS4zNTItMS4zNTIgMi4zNDktMi41MyAyLjk5LTMuNTM2LjcxLTEuMTI3IDEuMDY2LTIuMTkzIDEuMDY2LTMuMTk4IDAtLjcxLS4xNjUtMS4zNTItLjQ5NC0xLjkyNGEzLjUyIDMuNTIgMCAwIDAtMS4zNTItMS4zMzljLS41NzItLjMyLTEuMjIyLS40ODEtMS45NS0uNDgxYTQuMTcgNC4xNyAwIDAgMC0yLjM1My43MTVjLS43Mi40NzctMS4yMjYgMS4wODgtMS41MjEgMS44MzNIOS44MDJjLS4yNzctLjc0NS0uNzgtMS4zNTYtMS41MDgtMS44MzNhNC4xOTUgNC4xOTUgMCAwIDAtMi4zNC0uNzE1Yy0uNzI4IDAtMS4zODIuMTYtMS45NjMuNDgxLS41OC4zMi0xLjAzNi43NjctMS4zNjUgMS4zMzlhMy43ODYgMy43ODYgMCAwIDAtLjQ5NCAxLjkyNGMwIDEuMDA1LjM1NSAyLjA3MSAxLjA2NiAzLjE5OC42NDEgMS4wMDUgMS42MzggMi4xODQgMi45OSAzLjUzNi44NjcuODY3IDIuMzc1IDIuMjYyIDQuNTI0IDQuMTg2bC4xMDQuMTA0LjEwNC0uMTA0ek0xNS43MDQgMGMxLjA5MiAwIDIuMDkzLjI2IDMuMDAzLjc4YTUuNjY1IDUuNjY1IDAgMCAxIDIuMTQ1IDIuMTQ1Yy41Mi45MS43OCAxLjkxMS43OCAzLjAwMyAwIDEuMy0uMzgxIDIuNjE3LTEuMTQ0IDMuOTUyLS42NzYgMS4xNjEtMS43NSAyLjQ4Ny0zLjIyNCAzLjk3OC0uODg0LjkwMS0yLjUwNSAyLjQyNy00Ljg2MiA0LjU3NmwtMS41ODYgMS40My0xLjU2LTEuMzc4Yy0yLjMyMy0yLjExNS0zLjk1Mi0zLjY0OS00Ljg4OC00LjYwMi0xLjQ3My0xLjQ5LTIuNTQtMi44MTctMy4xOTgtMy45NzhDLjM5IDguNTcxIDAgNy4yNDYgMCA1LjkyOGE1Ljg3IDUuODcgMCAwIDEgLjc5My0zLjAwM0E1Ljc4OSA1Ljc4OSAwIDAgMSAyLjkzOC43OEMzLjgzOS4yNiA0Ljg0NSAwIDUuOTU0IDBjLjkxOSAwIDEuODExLjIwOCAyLjY3OC42MjQuODY3LjQxNiAxLjU5NS45NyAyLjE4NCAxLjY2NEE2LjUzNyA2LjUzNyAwIDAgMSAxMyAuNjI0IDYuMTc3IDYuMTc3IDAgMCAxIDE1LjcwNCAweiIgZmlsbD0iI0E3ODFGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.bb2b7764.js.map