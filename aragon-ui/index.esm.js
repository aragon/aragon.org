import React, { Component, createElement } from 'react';
import reactDom from 'react-dom';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();



var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};









var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Finance = function Finance(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M18.063 3c.253 0 .473.093.659.278a.901.901 0 0 1 .278.66v13.124a.901.901 0 0 1-.278.66.901.901 0 0 1-.66.278H4.938a.901.901 0 0 1-.659-.278.901.901 0 0 1-.278-.66V3.938c0-.253.093-.473.278-.659A.901.901 0 0 1 4.938 3h13.125zm0 14.063V3.938H4.938v13.124h13.125zM7.28 8.155a.463.463 0 0 1-.468-.469.45.45 0 0 1 .139-.33.45.45 0 0 1 .33-.138h.937V6.28a.45.45 0 0 1 .139-.33.45.45 0 0 1 .33-.138.45.45 0 0 1 .33.139.45.45 0 0 1 .138.33v.937h.938a.45.45 0 0 1 .33.139.45.45 0 0 1 .139.33.463.463 0 0 1-.469.469h-.938v.937a.463.463 0 0 1-.469.469.463.463 0 0 1-.468-.47v-.937H7.28zm3.062 3.501c.097.098.146.21.146.337a.417.417 0 0 1-.146.322l-.996.996.996.997c.097.097.146.21.146.337a.417.417 0 0 1-.146.322.425.425 0 0 1-.33.146.425.425 0 0 1-.33-.146l-.995-.982-.997.982a.425.425 0 0 1-.33.146.425.425 0 0 1-.329-.146.417.417 0 0 1-.146-.322c0-.127.049-.24.146-.337l.996-.996-.996-.997a.417.417 0 0 1-.146-.322c0-.127.049-.24.146-.337a.447.447 0 0 1 .33-.132c.132 0 .242.044.33.132l.995.996.997-.996a.447.447 0 0 1 .33-.132c.131 0 .24.044.329.132zm2.563-3.5a.463.463 0 0 1-.469-.47.45.45 0 0 1 .14-.33.45.45 0 0 1 .33-.138h2.812a.45.45 0 0 1 .33.139.45.45 0 0 1 .139.33.463.463 0 0 1-.469.469h-2.813zm0 4.687a.463.463 0 0 1-.469-.469.45.45 0 0 1 .14-.33.45.45 0 0 1 .33-.139h2.812a.45.45 0 0 1 .33.14.45.45 0 0 1 .139.329.463.463 0 0 1-.469.469h-2.813zm0 1.875a.463.463 0 0 1-.469-.469.45.45 0 0 1 .14-.33.45.45 0 0 1 .33-.139h2.812a.45.45 0 0 1 .33.14.45.45 0 0 1 .139.329.463.463 0 0 1-.469.469h-2.813z",
        fill: "currentColor"
      })
    )
  );
};

var Fundraising = function Fundraising(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement(
        "g",
        { stroke: "currentColor" },
        React.createElement("path", {
          d: "M6 12.26C6.402 13.75 9.137 15 12.475 15 16.089 15 19 13.534 19 11.875c0-.886-1.07-1.903-2.967-2.357",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
        React.createElement("path", { d: "M16 6.88C16 8.536 13.1 10 9.5 10S3 8.536 3 6.88C3 5.224 5.9 4 9.5 4S16 5.224 16 6.88" }),
        React.createElement("path", {
          d: "M6 12v2c0 1.667 2.9 3 6.5 3s6.5-1.333 6.5-3v-2c0 1.643-2.9 3.095-6.5 3.095S6 13.643 6 12z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
        React.createElement("path", { d: "M9.5 10.095C5.9 10.095 3 8.643 3 7v2c0 1.667 2.9 3 6.5 3S16 10.667 16 9V7c0 1.643-2.9 3.095-6.5 3.095" })
      )
    )
  );
};

var Groups = function Groups(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M14.928 16.169l.395.22c.264.146.396.337.396.571v1.186a.753.753 0 0 1-.235.564.773.773 0 0 1-.556.227H4.79a.773.773 0 0 1-.557-.227.753.753 0 0 1-.234-.564V16.96c0-.215.132-.4.396-.557l.395-.234 3.032-1.64c-.556-.44-.942-1.026-1.157-1.758-.215-.733-.322-1.314-.322-1.744V9.05c0-.332.102-.662.307-.989.205-.327.474-.623.806-.886.332-.264.71-.479 1.135-.645a3.497 3.497 0 0 1 1.282-.249c.44 0 .87.083 1.29.25.419.165.793.38 1.12.644.327.263.59.559.79.886.2.327.301.657.301.989v1.977c0 .479-.095 1.075-.286 1.787-.19.713-.559 1.29-1.106 1.729l2.945 1.626zM14.78 18v-.835a.391.391 0 0 0-.102-.073l-.117-.059a.071.071 0 0 1-.037-.014.479.479 0 0 0-.051-.03l-2.945-1.626a.99.99 0 0 1-.337-.315.863.863 0 0 1-.146-.432.856.856 0 0 1 .066-.454.913.913 0 0 1 .285-.366c.4-.313.674-.76.82-1.34.147-.581.22-1.058.22-1.429V9.05c0-.342-.256-.733-.769-1.172a2.672 2.672 0 0 0-1.794-.66c-.664 0-1.262.22-1.794.66-.533.44-.799.83-.799 1.172v1.977c0 .371.088.848.264 1.429.176.58.464 1.027.864 1.34.117.098.208.22.271.366a.856.856 0 0 1 .066.454.863.863 0 0 1-.146.432.865.865 0 0 1-.337.3L5.23 17.005a.06.06 0 0 0-.029.007.115.115 0 0 0-.03.022.432.432 0 0 0-.124.059l-.11.073V18h9.844zm3.428-4.16l.395.22c.264.146.396.336.396.57v1.173a.753.753 0 0 1-.234.564.773.773 0 0 1-.557.227h-1.553a5.372 5.372 0 0 0-.183-.542.952.952 0 0 0-.3-.396h1.89v-.835a4.202 4.202 0 0 0-.103-.066.408.408 0 0 0-.117-.05.092.092 0 0 0-.037-.023.402.402 0 0 1-.051-.022l-2.988-1.626a.99.99 0 0 1-.337-.315.863.863 0 0 1-.147-.432.856.856 0 0 1 .066-.454.913.913 0 0 1 .286-.366c.4-.322.68-.774.842-1.355.161-.581.242-1.052.242-1.414V6.721c0-.352-.264-.747-.791-1.187a2.756 2.756 0 0 0-1.817-.659 2.981 2.981 0 0 0-1.787.6 2.301 2.301 0 0 0-.586-.102l-.6-.03c.341-.4.78-.737 1.318-1.01a3.608 3.608 0 0 1 1.655-.41c.44 0 .872.085 1.297.256a4.52 4.52 0 0 1 1.135.652c.332.264.6.562.806.894.205.332.307.664.307.996v1.977c0 .469-.102 1.062-.307 1.78-.205.718-.581 1.292-1.128 1.721l2.988 1.64z",
        fill: "currentColor"
      })
    )
  );
};

var Home = function Home(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M17.92 10.515a.46.46 0 0 1 .124.337.52.52 0 0 1-.139.336.717.717 0 0 1-.154.096.403.403 0 0 1-.168.036.49.49 0 0 1-.19-.036.363.363 0 0 1-.147-.11l-.63-.66v7.017a.45.45 0 0 1-.14.33.45.45 0 0 1-.329.139h-3.28a.45.45 0 0 1-.33-.14.45.45 0 0 1-.14-.329v-4.687H8.662l-.015 4.687a.45.45 0 0 1-.139.33.45.45 0 0 1-.33.139H4.913a.463.463 0 0 1-.469-.469v-7.016l-.63.659a.52.52 0 0 1-.337.139.46.46 0 0 1-.336-.125.52.52 0 0 1-.14-.336.46.46 0 0 1 .125-.337L10.2 3.146a.498.498 0 0 1 .161-.11.49.49 0 0 1 .366 0 .363.363 0 0 1 .147.11l7.046 7.369zm-2.241-.909c0-.02.004-.039.014-.058l-5.156-5.39-5.17 5.39c0 .02.002.039.006.058a.24.24 0 0 1 .008.059v7.398H7.71l.015-4.688a.45.45 0 0 1 .139-.33.45.45 0 0 1 .33-.139h4.672a.45.45 0 0 1 .33.14.45.45 0 0 1 .139.329v4.688h2.344V9.605z",
        fill: "currentColor"
      })
    )
  );
};

var Identity = function Identity(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M4.04 16.984V18h11.44v1H4.04a1.02 1.02 0 0 1-.731-.297A.943.943 0 0 1 3 18v-1.5c0-.281.173-.518.52-.71l.52-.29 4.566-2.078a3.891 3.891 0 0 1-.926-1.008 6.536 6.536 0 0 1-.61-1.21 6.431 6.431 0 0 1-.333-1.212A6.209 6.209 0 0 1 6.64 9V6.5c0-.417.135-.833.406-1.25a4.43 4.43 0 0 1 1.073-1.125 5.961 5.961 0 0 1 1.503-.813A4.82 4.82 0 0 1 11.32 3c.574 0 1.14.104 1.698.313a5.819 5.819 0 0 1 1.495.812c.439.333.796.708 1.073 1.125.276.417.414.833.414 1.25V9c0 .302-.032.651-.098 1.047a6.59 6.59 0 0 1-.324 1.21 5.86 5.86 0 0 1-.602 1.188 4.13 4.13 0 0 1-.91.992l1.381.61-.26 1-1.56-.703a1.045 1.045 0 0 1-.406-.32.958.958 0 0 1-.195-.477c-.01-.177.016-.344.082-.5a1.03 1.03 0 0 1 .308-.406c.564-.417.962-1.008 1.195-1.774.233-.765.349-1.388.349-1.867V6.5c0-.27-.108-.552-.325-.844a3.757 3.757 0 0 0-.837-.804 4.941 4.941 0 0 0-1.162-.61A3.744 3.744 0 0 0 11.32 4c-.444 0-.883.08-1.316.242a4.932 4.932 0 0 0-1.17.617 3.65 3.65 0 0 0-.837.813c-.211.292-.317.568-.317.828V9c0 .49.127 1.115.382 1.875.254.76.653 1.349 1.194 1.766a.969.969 0 0 1 .195 1.367c-.108.14-.243.247-.406.32l-4.566 2.078a1.041 1.041 0 0 0-.268.157c-.114.083-.171.223-.171.421zM18.5 16a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148H17v1.5a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148.48.48 0 0 1-.352-.148A.48.48 0 0 1 16 18.5V17h-1.5a.48.48 0 0 1-.352-.148A.48.48 0 0 1 14 16.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 14.5 16H16v-1.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 16.5 14a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352V16h1.5z",
        fill: "currentColor"
      })
    )
  );
};

var Notifications = function Notifications(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M17.271 13.367c.254.313.455.591.601.835a.731.731 0 0 1 .044.733.718.718 0 0 1-.571.424c-.264.04-.469.059-.616.059H13.99c0 .693-.244 1.284-.732 1.772a2.414 2.414 0 0 1-1.773.733 2.414 2.414 0 0 1-1.772-.733 2.414 2.414 0 0 1-.733-1.772H6.3c-.225 0-.457-.027-.696-.08a.732.732 0 0 1-.52-.403c-.117-.245-.107-.496.03-.755a6.56 6.56 0 0 1 .556-.857c.264-.342.552-.73.864-1.164.313-.435.469-.887.469-1.355V7.742c0-.664.115-1.286.344-1.867.23-.582.545-1.09.945-1.524.4-.434.874-.776 1.42-1.025a4.191 4.191 0 0 1 1.759-.374c.634 0 1.225.125 1.772.374a4.46 4.46 0 0 1 1.428 1.025c.406.435.723.942.953 1.524a5.04 5.04 0 0 1 .344 1.867v3.062c0 .478.149.942.447 1.391.297.45.583.84.856 1.172zm-5.786 3.574c.42 0 .78-.149 1.077-.446.298-.298.447-.657.447-1.077H9.962c0 .42.149.779.447 1.077.298.297.656.446 1.076.446zm5.347-2.52a8.139 8.139 0 0 0-.337-.425c-.322-.39-.657-.856-1.003-1.398a3.262 3.262 0 0 1-.52-1.794V7.742c0-.527-.09-1.02-.271-1.48a3.85 3.85 0 0 0-.74-1.2 3.511 3.511 0 0 0-1.106-.813c-.425-.2-.886-.3-1.384-.3-.489 0-.945.1-1.37.3-.425.2-.793.47-1.106.813a3.744 3.744 0 0 0-.732 1.2 4.102 4.102 0 0 0-.264 1.48v3.062c0 .634-.183 1.218-.55 1.75a46.606 46.606 0 0 1-1.157 1.619c-.063.088-.12.17-.168.249h10.708z",
        fill: "currentColor"
      })
    )
  );
};

var Permissions = function Permissions(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement(
        "g",
        { stroke: "currentColor" },
        React.createElement("path", {
          d: "M11.036 3.143L3.578 6.357V7.43h14.916V6.357l-7.458-3.214zm6.88 12.393H4.071c-.318 0-.577.242-.577.535v1.072h15V16.07c0-.293-.26-.535-.578-.535z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
        React.createElement("path", { d: "M5 7v8.034M8 7v8.275M11 7v8.034M14 7v8.275M17 7v8.275" })
      )
    )
  );
};

var Settings = function Settings(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M18.063 9.08c.224.038.437.148.637.329.2.18.3.403.3.666v.938c0 .254-.1.459-.3.615-.2.156-.413.264-.637.322l-1.216.293a6.84 6.84 0 0 1-.154.418 4.008 4.008 0 0 1-.183.388l.644 1.084c.127.195.205.42.235.674a.766.766 0 0 1-.235.659l-.659.659a.847.847 0 0 1-.674.256 1.38 1.38 0 0 1-.688-.212l-1.055-.674a7.697 7.697 0 0 1-.41.19 4.595 4.595 0 0 1-.44.162l-.263 1.216a1.29 1.29 0 0 1-.33.637c-.18.2-.403.3-.666.3h-.938a.743.743 0 0 1-.615-.3 1.749 1.749 0 0 1-.322-.637L9.8 15.86a6.001 6.001 0 0 1-.469-.168 4.816 4.816 0 0 1-.454-.213l-1.084.689a1.308 1.308 0 0 1-.681.212.813.813 0 0 1-.667-.256l-.674-.66a.785.785 0 0 1-.22-.658c.03-.254.103-.479.22-.674l.689-1.143a8.068 8.068 0 0 1-.169-.359 3.029 3.029 0 0 1-.139-.388l-1.215-.293a1.749 1.749 0 0 1-.638-.322.743.743 0 0 1-.3-.615v-.938c0-.263.1-.486.3-.666.2-.181.413-.29.638-.33l1.2-.264a3.44 3.44 0 0 1 .147-.41c.059-.136.117-.268.176-.395l-.689-1.143a1.664 1.664 0 0 1-.22-.674.785.785 0 0 1 .22-.659l.674-.659a.813.813 0 0 1 .667-.256c.268.014.495.085.68.212l1.085.689a5.325 5.325 0 0 1 .908-.381l.308-1.202a1.58 1.58 0 0 1 .307-.637.76.76 0 0 1 .63-.3h.938c.263 0 .483.1.659.3.176.2.288.408.337.623l.264 1.23a6.533 6.533 0 0 1 .85.352l1.054-.674a1.38 1.38 0 0 1 .688-.212.847.847 0 0 1 .674.256l.66.66a.766.766 0 0 1 .234.658 1.55 1.55 0 0 1-.235.674l-.644 1.084c.068.137.134.276.198.418.063.141.114.29.153.446l1.201.264zm0 1.86l.014-.836a.515.515 0 0 0-.205-.102l-1.743-.396-.161-.512a2.474 2.474 0 0 0-.117-.352 4.109 4.109 0 0 0-.176-.366l-.235-.469.923-1.538a.474.474 0 0 0 .066-.117.28.28 0 0 0 .022-.088l-.615-.6a.348.348 0 0 0-.19.058l-1.51.967-.483-.25a11.505 11.505 0 0 0-.351-.168 1.904 1.904 0 0 0-.366-.124l-.513-.176-.381-1.772a.431.431 0 0 0-.044-.11l-.03-.051h-.864a.34.34 0 0 0-.058.087.52.52 0 0 0-.044.147l-.425 1.7-.498.16a4.51 4.51 0 0 0-.762.322l-.483.25-1.567-.997-.074-.036a.671.671 0 0 0-.088-.037l-.615.615c0 .03.008.064.022.103a.898.898 0 0 0 .066.132l.952 1.582-.234.454a8.76 8.76 0 0 0-.154.351 2.79 2.79 0 0 0-.11.323l-.16.512-1.773.396a.537.537 0 0 0-.096.044.199.199 0 0 1-.066.03v.863c.02.02.05.037.088.052a.81.81 0 0 0 .147.036l1.714.44.16.498a3.144 3.144 0 0 0 .265.615l.22.454-.953 1.597a.474.474 0 0 0-.066.117.298.298 0 0 0-.022.103l.615.6c.03 0 .062-.007.096-.022a.59.59 0 0 0 .095-.051l1.538-.982.483.25a4.51 4.51 0 0 0 .762.322l.498.16.44 1.73c.01.048.022.09.036.124a.254.254 0 0 0 .051.08h.85a.515.515 0 0 0 .103-.19l.38-1.743.513-.176a5.14 5.14 0 0 0 .703-.293l.484-.249 1.538.982.073.036a.72.72 0 0 0 .088.037l.615-.615a.298.298 0 0 0-.022-.103.826.826 0 0 0-.066-.132l-.923-1.523.235-.469c.058-.107.11-.217.154-.33.044-.112.085-.227.124-.344l.161-.483 1.743-.44a.635.635 0 0 0 .125-.036.254.254 0 0 0 .08-.052zM11.5 7.687c.781 0 1.448.273 2 .82a2.7 2.7 0 0 1 .827 1.992 2.7 2.7 0 0 1-.827 1.992 2.737 2.737 0 0 1-2 .82 2.72 2.72 0 0 1-1.985-.82 2.7 2.7 0 0 1-.828-1.992 2.7 2.7 0 0 1 .828-1.992 2.72 2.72 0 0 1 1.985-.82zm0 4.687c.518 0 .96-.183 1.326-.55.366-.366.549-.807.549-1.325 0-.518-.183-.96-.55-1.326a1.806 1.806 0 0 0-1.325-.549c-.518 0-.96.183-1.326.55a1.804 1.804 0 0 0-.549 1.325c0 .518.183.96.55 1.326.366.366.807.549 1.325.549z",
        fill: "currentColor"
      })
    )
  );
};

var Tokens = function Tokens(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement(
        "g",
        { transform: "translate(2 3)", stroke: "currentColor" },
        React.createElement("circle", { cx: 9, cy: 13, r: 3 }),
        React.createElement("circle", { cx: 9, cy: 2, r: 2 }),
        React.createElement("circle", { cx: 2, cy: 5, r: 2 }),
        React.createElement("circle", { cx: 16, cy: 5, r: 2 }),
        React.createElement("path", { d: "M3.275 6.48l3.715 4.164m1.994-6.645v5.99m5.844-3.393l-4.019 4.018" })
      )
    )
  );
};

var Voting = function Voting(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M2.053 11.267c.576.047 1.169.105 1.497.176.328.07 2.297.557 3.656.557.2 0 .442-.005.723-.015a6.99 6.99 0 0 0 .814-.075c.26-.04.489-.1.683-.181.194-.08 2.051-3.995 1.83-4.59-.149-.398-1.243-.598-3.282-.603-.311 0-.579.001-.803.005l-.337.005a.318.318 0 0 1-.16-.04.292.292 0 0 1-.111-.11.237.237 0 0 1-.055-.142.385.385 0 0 1 .025-.16c.08-.228.149-.479.206-.754a6.92 6.92 0 0 0 .12-.808c.024-.265.027-.507.01-.728-.016-.221-.062-.392-.135-.513l-.13-.2C6.562 3.03 6.462 3 6.301 3c-.02 0-.054.017-.1.05-.047.034-.101.117-.161.251a11.039 11.039 0 0 1-.89 1.723A7.683 7.683 0 0 1 4.138 6.31a5.006 5.006 0 0 1-1.06.828 2.635 2.635 0 0 1-1.024.352c-.06.127-.08 3.65 0 3.777zm18.167-.534c-.575-.047-1.168-.105-1.496-.176-.328-.07-2.297-.557-3.656-.557-.201 0-.442.005-.724.015a6.99 6.99 0 0 0-.813.075c-.261.04-.49.1-.683.181-.195.08-2.052 3.995-1.83 4.59.148.398 1.242.598 3.281.603.312 0 .58-.001.804-.005l.336-.005c.06 0 .114.014.16.04a.292.292 0 0 1 .111.11.244.244 0 0 1 .056.142.385.385 0 0 1-.025.16 5.73 5.73 0 0 0-.206.754 7.047 7.047 0 0 0-.12.808 4.466 4.466 0 0 0-.011.728c.017.221.062.392.136.513l.13.2c.04.06.14.091.302.091.02 0 .053-.017.1-.05.047-.034.1-.117.16-.251.269-.643.565-1.217.89-1.723a7.683 7.683 0 0 1 1.014-1.286 5.006 5.006 0 0 1 1.06-.828 2.64 2.64 0 0 1 1.024-.352c.06-.127.08-3.65 0-3.777z",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    )
  );
};

var Wallet = function Wallet(props) {
  return React.createElement(
    "svg",
    _extends({ width: 22, height: 22, viewBox: "0 0 22 22" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M0 0h22v22H0z" }),
      React.createElement("path", {
        d: "M19 7.186v8.642c0 .39-.137.723-.41.996-.274.274-.606.41-.996.41H5.406c-.39 0-.722-.136-.996-.41a1.356 1.356 0 0 1-.41-.996v-7.5c0-.38.137-.708.41-.981.274-.274.6-.415.982-.425h.468V5.047c0-.39.14-.723.418-.996a1.36 1.36 0 0 1 .989-.41l10.59 2.109c.528.146.85.38.967.703.117.322.176.567.176.733zM6.798 5.046v1.876h10.327c.186.01.308-.03.366-.117l.088-.132L7.237 4.578a.467.467 0 0 0-.44.469zm11.264 10.782V7.391c0 .156-.1.273-.3.351-.2.078-.412.117-.637.117H5.406a.45.45 0 0 0-.33.14.45.45 0 0 0-.138.33v7.5a.45.45 0 0 0 .139.329.45.45 0 0 0 .33.139h12.187a.45.45 0 0 0 .33-.14.45.45 0 0 0 .139-.329zm-11.25-4.687c.254 0 .474.092.66.278a.901.901 0 0 1 .278.66.894.894 0 0 1-.278.666.913.913 0 0 1-.66.27.906.906 0 0 1-.666-.27.906.906 0 0 1-.271-.667c0-.254.09-.474.271-.66a.894.894 0 0 1 .667-.277z",
        fill: "currentColor"
      })
    )
  );
};

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isobject = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function isObjectObject(o) {
  return isobject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

var isPlainObject = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stylis$1 = createCommonjsModule(function (module, exports) {
/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	module['exports'] = factory(null);
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	var nullptn = /^\0+/g; /* matches leading null characters */
	var formatptn = /[\0\r\f]/g; /* matches new line, null and formfeed characters */
	var colonptn = /: */g; /* splits animation rules */
	var cursorptn = /zoo|gra/; /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g; /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g; /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g; /* animation properties */
	var elementptn = / *[\0] */g; /* selector elements */
	var selectorptn = /,\r+?/g; /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g; /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g; /* matches :global(.*) */
	var invalidptn = /\W+/g; /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/; /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g; /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g; /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g; /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g; /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g; /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g; /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g; /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/; /* match writing mode property values */
	var supportsptn = /\(\s*([^]*?)\s*\)/g; /* match supports (groups) */
	var propertyptn = /([^]*?);/g; /* match properties leading semicolon */
	var selfptn = /-self|flex-/g; /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/; /* extrats :readonly or :placholder from selector */
	var webkit = '-webkit-';
	var moz = '-moz-';
	var ms = '-ms-';

	/* character codes */
	var SEMICOLON = 59; /* ; */
	var CLOSEBRACES = 125; /* } */
	var OPENBRACES = 123; /* { */
	var OPENPARENTHESES = 40; /* ( */
	var CLOSEPARENTHESES = 41; /* ) */
	var OPENBRACKET = 91; /* [ */
	var CLOSEBRACKET = 93; /* ] */
	var NEWLINE = 10; /* \n */
	var CARRIAGE = 13; /* \r */
	var TAB = 9; /* \t */
	var AT = 64; /* @ */
	var SPACE = 32; /*   */
	var AND = 38; /* & */
	var DASH = 45; /* - */
	var UNDERSCORE = 95; /* _ */
	var STAR = 42; /* * */
	var COMMA = 44; /* , */
	var COLON = 58; /* : */
	var SINGLEQUOTE = 39; /* ' */
	var DOUBLEQUOTE = 34; /* " */
	var FOWARDSLASH = 47; /* / */
	var GREATERTHAN = 62; /* > */
	var PLUS = 43; /* + */
	var TILDE = 126; /* ~ */
	var NULL = 0; /* \0 */
	var FORMFEED = 12; /* \f */
	var VERTICALTAB = 11; /* \v */

	/* special identifiers */
	var KEYFRAME = 107; /* k */
	var MEDIA = 109; /* m */
	var SUPPORTS = 115; /* s */
	var PLACEHOLDER = 112; /* p */
	var READONLY = 111; /* o */
	var IMPORT = 169; /* <at>i */
	var CHARSET = 163; /* <at>c */
	var DOCUMENT = 100; /* <at>d */
	var PAGE = 112; /* <at>p */

	var column = 1; /* current column */
	var line = 1; /* current line numebr */
	var pattern = 0; /* :pattern */

	var cascade = 1; /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1; /* vendor prefix */
	var escape = 1; /* escape :global() pattern */
	var compress = 0; /* compress output */
	var semicolon = 0; /* no/semicolon option */
	var preserve = 0; /* preserve empty selectors */

	/* empty reference */
	var array = [];

	/* plugins */
	var plugins = [];
	var plugged = 0;
	var should = null;

	/* plugin context */
	var POSTS = -2;
	var PREPS = -1;
	var UNKWN = 0;
	var PROPS = 1;
	var BLCKS = 2;
	var ATRUL = 3;

	/* plugin newline context */
	var unkwn = 0;

	/* keyframe animation */
	var keyed = 1;
	var key = '';

	/* selector namespace */
	var nscopealt = '';
	var nscope = '';

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0; /* brackets [] */
		var comment = 0; /* comments /* // or /* */
		var parentheses = 0; /* functions () */
		var quote = 0; /* quotes '', "" */

		var first = 0; /* first character code */
		var second = 0; /* second character code */
		var code = 0; /* current character code */
		var tail = 0; /* previous character code */
		var trail = 0; /* character before previous code */
		var peak = 0; /* previous non-whitespace code */

		var counter = 0; /* count sequence termination */
		var context = 0; /* track current context */
		var atrule = 0; /* track @at-rule context */
		var pseudo = 0; /* track pseudo token index */
		var caret = 0; /* current character index */
		var format = 0; /* control character formating context */
		var insert = 0; /* auto semicolon insertion */
		var invert = 0; /* inverted selector pattern */
		var length = 0; /* generic length address */
		var eof = body.length; /* end of file(length) */
		var eol = eof - 1; /* end of file(characters) */

		var char = ''; /* current character */
		var chars = ''; /* current buffer of characters */
		var child = ''; /* next buffer of characters */
		var out = ''; /* compiled body */
		var children = ''; /* compiled children */
		var flat = ''; /* compiled leafs */
		var selector; /* generic selector address */
		var result; /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret);

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
					}

					quote = parentheses = bracket = 0;
					eof++;
					eol++;
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '');
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret);
							}
						}

						code = SEMICOLON;
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case COMMA: {
							insert = 0;
							break
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							caret--;
							code = SEMICOLON;
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim();
						first = chars.charCodeAt(0);
						counter = 1;
						length = ++caret;

						while (caret < eof) {
							code = body.charCodeAt(caret);

							switch (code) {
								case OPENBRACES: {
									counter++;
									break
								}
								case CLOSEBRACES: {
									counter--;
									break
								}
							}

							if (counter === 0) {
								break
							}

							caret++;
						}

						child = body.substring(length, caret);

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0);
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '');
								}

								second = chars.charCodeAt(1);

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current;
										break
									}
									default: {
										selector = array;
									}
								}

								child = compile(current, selector, child, second, depth+1);
								length = child.length;

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length;
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert);
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth);
									chars = selector.join('');

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0;
											child = '';
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports);
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}';
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''));
											child = chars + '{' + child + '}';

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child;
											} else {
												child = '@' + child;
											}
											break
										}
										default: {
											child = chars + child;

											if (id === PAGE) {
												child = (out += child, '');
											}
										}
									}
								} else {
									child = '';
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1);
							}
						}

						children += child;

						// reset
						context = 0;
						insert = 0;
						pseudo = 0;
						format = 0;
						invert = 0;
						atrule = 0;
						chars = '';
						child = '';
						code = body.charCodeAt(++caret);
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim();

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0);

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length;
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0';
									}
								}
							}

							first = chars.charCodeAt(0);
							second = chars.charCodeAt(1);

							switch (first + second) {
								case NULL: {
									break
								}
								case IMPORT:
								case CHARSET: {
									flat += chars + body.charAt(caret);
									break
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON)
										break

									out += property(chars, first, second, chars.charCodeAt(2));
								}
							}
						}

						// reset
						context = 0;
						insert = 0;
						pseudo = 0;
						format = 0;
						invert = 0;
						chars = '';
						code = body.charCodeAt(++caret);
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1;
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0;
					} else if (cascade + context === 0) {
						format = 1;
						chars += '\0';
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth);
					}

					// next line, reset column position
					column = 1;
					line++;
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++;
						break
					}
				}
				default: {
					// increment column position
					column++;

					// current character
					char = body.charAt(caret);

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = '';
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' ';
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0';
							break
						}
						case FORMFEED: {
							char = '\\f';
							break
						}
						case VERTICALTAB: {
							char = '\\v';
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1;
								format = 1;
								char = '\f' + char;
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail;
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail;
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret;
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1;
								char += '\r';
							}
							break
						}
						// quotes
						case DOUBLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote);
							}
							break
						}
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote);
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++;
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--;
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--;
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0;
											context = 1;
										}
									}
								}

								parentheses++;
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1;
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH;
											break
										}
										// /*
										case 220: {
											length = caret;
											comment = STAR;
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1);
										}
										char = '';
										comment = 0;
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0';
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0');
											}
										}
										format = 1;
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												context = ++counter;
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1;
													char += '\0';
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1;
												char += '\0';
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char;

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code;
						}
					}
				}
			}

			// tail character codes
			trail = tail;
			tail = code;

			// visit every character
			caret++;
		}

		length = out.length;

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2;
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current;

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth);

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}';

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0;

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out;
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						);
						break
					}
				}

				pattern = 0;
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn);
		var out = selectors;

		var length = selectors.length;
		var l = parent.length;

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim();
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim();
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current;
		var code = selector.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0);
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0;
		var out = input + ';';
		var hash = (first*2) + (second*3) + (third*4);
		var cache;

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust: t, e, x
			case 1015: {
				// text-size-adjust, -
				return out.charCodeAt(9) === DASH ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				return out.charCodeAt(8) === DASH ? webkit + out + out : out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim();
				index = cache.indexOf('-') + 1;

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb');
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl');
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr');
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10;
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim();

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out;
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						);
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '');
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '') + out
						}
					}
				}
				break
			}
			// width: min-content / width: max-content
			case 953: {
				if ((index = out.indexOf('-content', 9)) > 0) {
					// width: min-content / width: max-content
					if (out.charCodeAt(index - 3) === 109 && out.charCodeAt(index - 4) !== 45) {
						cache = out.substring(index - 3);
						return 'width:' + webkit + cache + 'width:' + moz + cache + 'width:' + cache
					}
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out;

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{');
		var key = content.substring(0, context !== 3 ? index : 10);
		var value = content.substring(index + 1, content.length - 1);

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length;
		var index = input.indexOf(':', 9) + 1;
		var declare = input.substring(0, index).trim();
		var out = input.substring(index, length-1).trim();

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn));

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i];
					var items = value.split(propertiesptn);

					while (value = items[index]) {
						var peak = value.charCodeAt(0);

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key;
										}
									}
								}
							}
						}

						items[index++] = value;
					}

					out += (i === 0 ? '' : ',') + items.join(' ');
				}
			}
		}

		out = declare + out + ';';

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn);
			var out = '';

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1);
				code = element.charCodeAt(0);
				padding = '';

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' ';
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt;
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt;
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1);
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element;
								}
							}
						}
						break
					}
					case COMMA: {
						padding = '';
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2');
						} else {
							element = padding + element + nscopealt;
						}
					}
				}

				out += element;
			}

			selector[i] = out.replace(formatptn, '').trim();
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next;
				}
			}
		}

		switch (out) {
			case void 0:
			case false:
			case true:
			case null:
			case content: {
				break
			}
			default: {
				return out
			}
		}
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0;
				break
			}
			default: {
				switch (plugin.constructor) {
					case Array: {
						for (var i = 0, length = plugin.length; i < length; ++i) {
							use(plugin[i]);
						}
						break
					}
					case Function: {
						plugins[plugged++] = plugin;
						break
					}
					case Boolean: {
						unkwn = !!plugin|0;
					}
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name];
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null;

					if (!value) {
						prefix = 0;
					} else if (typeof value !== 'function') {
						prefix = 1;
					} else {
						prefix = 2;
						should = value;
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector;
		var code = ns.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0);
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-');
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1;

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns;
		} else {
			nscopealt = ns;
		}

		var selectors = [nscope];
		var result;

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0);

			if (result !== void 0 && typeof result === 'string') {
				input = result;
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0);

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0);

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0;
			}
		}

		// reset
		key = '';
		nscope = '';
		nscopealt = '';
		pattern = 0;
		line = 1;
		column = 1;

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use;
	stylis['set'] = set;

	if (options !== void 0) {
		set(options);
	}

	return stylis
}));
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

if (process.env.NODE_ENV !== 'production') {
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var isFunction_1 = isFunction;

var toString = Object.prototype.toString;

function isFunction (fn) {
  var string = toString.call(fn);
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
}

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

//      
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) return [].concat(ruleSet, flatten(chunk, executionContext));

    /* Handle other components */
    // $FlowFixMe not sure how to make this pass
    if (chunk.hasOwnProperty('styledComponentId')) return [].concat(ruleSet, ['.' + chunk.styledComponentId]);

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    // $FlowFixMe have to add %checks somehow to isPlainObject
    return ruleSet.concat(isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

//      
var stylis = new stylis$1({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: true
});

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

//      
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var charsLength = chars.length;

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = chars[x % charsLength] + name;
  }

  return chars[x % charsLength] + name;
};

//      


var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

//      
var css = (function (strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
});

//      
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//mg;

var extractCompsFromCSS = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

//      
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
                                     return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
});

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits$1 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties$1 = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

//      
/* eslint-disable no-underscore-dangle */
/*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */
var COMPONENTS_PER_TAG = 40;

var BrowserTag = function () {
  function BrowserTag(el, isLocal) {
    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    classCallCheck$1(this, BrowserTag);

    this.el = el;
    this.isLocal = isLocal;
    this.ready = false;

    var extractedComps = extractCompsFromCSS(existingSource);

    this.size = extractedComps.length;
    this.components = extractedComps.reduce(function (acc, obj) {
      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
  }

  BrowserTag.prototype.isFull = function isFull() {
    return this.size >= COMPONENTS_PER_TAG;
  };

  BrowserTag.prototype.addComponent = function addComponent(componentId) {
    if (!this.ready) this.replaceElement();
    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');

    var comp = { componentId: componentId, textNode: document.createTextNode('') };
    this.el.appendChild(comp.textNode);

    this.size += 1;
    this.components[componentId] = comp;
  };

  BrowserTag.prototype.inject = function inject(componentId, css, name) {
    if (!this.ready) this.replaceElement();
    var comp = this.components[componentId];

    if (!comp) throw new Error('Must add a new component before you can inject css into it');
    if (comp.textNode.data === '') comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');

    comp.textNode.appendData(css);
    if (name) {
      var existingNames = this.el.getAttribute(SC_ATTR);
      this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
    }

    var nonce = getNonce();

    if (nonce) {
      this.el.setAttribute('nonce', nonce);
    }
  };

  BrowserTag.prototype.toHTML = function toHTML() {
    return this.el.outerHTML;
  };

  BrowserTag.prototype.toReactElement = function toReactElement() {
    throw new Error('BrowserTag doesn\'t implement toReactElement!');
  };

  BrowserTag.prototype.clone = function clone() {
    throw new Error('BrowserTag cannot be cloned!');
  };

  /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */


  BrowserTag.prototype.replaceElement = function replaceElement() {
    var _this = this;

    this.ready = true;
    // We have nothing to inject. Use the current el.
    if (this.size === 0) return;

    // Build up our replacement style tag
    var newEl = this.el.cloneNode();
    newEl.appendChild(document.createTextNode('\n'));

    Object.keys(this.components).forEach(function (key) {
      var comp = _this.components[key];

      // eslint-disable-next-line no-param-reassign
      comp.textNode = document.createTextNode(comp.cssFromDOM);
      newEl.appendChild(comp.textNode);
    });

    if (!this.el.parentNode) throw new Error("Trying to replace an element that wasn't mounted!");

    // The ol' switcheroo
    this.el.parentNode.replaceChild(newEl, this.el);
    this.el = newEl;
  };

  return BrowserTag;
}();

/* Factory function to separate DOM operations from logical ones*/


var BrowserStyleSheet = {
  create: function create() {
    var tags = [];
    var names = {};

    /* Construct existing state from DOM */
    var nodes = document.querySelectorAll('[' + SC_ATTR + ']');
    var nodesLength = nodes.length;

    for (var i = 0; i < nodesLength; i += 1) {
      var el = nodes[i];

      tags.push(new BrowserTag(el, el.getAttribute(LOCAL_ATTR) === 'true', el.innerHTML));

      var attr = el.getAttribute(SC_ATTR);
      if (attr) {
        attr.trim().split(/\s+/).forEach(function (name) {
          names[name] = true;
        });
      }
    }

    /* Factory for making more tags */
    var tagConstructor = function tagConstructor(isLocal) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(SC_ATTR, '');
      el.setAttribute(LOCAL_ATTR, isLocal ? 'true' : 'false');
      if (!document.head) throw new Error('Missing document <head>');
      document.head.appendChild(el);
      return new BrowserTag(el, isLocal);
    };

    return new StyleSheet(tagConstructor, tags, names);
  }
};

//      
var SC_ATTR = 'data-styled-components';
var LOCAL_ATTR = 'data-styled-components-is-local';
var CONTEXT_KEY = '__styled-components-stylesheet__';

var instance = null;
// eslint-disable-next-line no-use-before-define
var clones = [];

var StyleSheet = function () {
  function StyleSheet(tagConstructor) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, StyleSheet);
    this.hashes = {};
    this.deferredInjections = {};
    this.stylesCacheable = typeof document !== 'undefined';

    this.tagConstructor = tagConstructor;
    this.tags = tags;
    this.names = names;
    this.constructComponentTagMap();
  }

  // helper for `ComponentStyle` to know when it cache static styles.
  // staticly styled-component can not safely cache styles on the server
  // without all `ComponentStyle` instances saving a reference to the
  // the styleSheet instance they last rendered with,
  // or listening to creation / reset events. otherwise you might create
  // a component with one stylesheet and render it another api response
  // with another, losing styles on from your server-side render.


  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
    var _this = this;

    this.componentTags = {};

    this.tags.forEach(function (tag) {
      Object.keys(tag.components).forEach(function (componentId) {
        _this.componentTags[componentId] = tag;
      });
    });
  };

  /* Best level of caching—get the name from the hash straight away. */


  StyleSheet.prototype.getName = function getName(hash) {
    return this.hashes[hash.toString()];
  };

  /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */


  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
    if (!this.names[name]) return false;

    this.hashes[hash.toString()] = name;
    return true;
  };

  /* Third type of caching—don't inject components' componentId twice. */


  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
    return !!this.componentTags[componentId];
  };

  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.deferredInject(componentId, isLocal, css);
      });
    }

    this.getOrCreateTag(componentId, isLocal);
    this.deferredInjections[componentId] = css;
  };

  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.inject(componentId, isLocal, css);
      });
    }

    var tag = this.getOrCreateTag(componentId, isLocal);

    var deferredInjection = this.deferredInjections[componentId];
    if (deferredInjection) {
      tag.inject(componentId, deferredInjection);
      delete this.deferredInjections[componentId];
    }

    tag.inject(componentId, css, name);

    if (hash && name) {
      this.hashes[hash.toString()] = name;
    }
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    return this.tags.map(function (tag, i) {
      return tag.toReactElement('sc-' + i);
    });
  };

  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
    var existingTag = this.componentTags[componentId];
    if (existingTag) {
      return existingTag;
    }

    var lastTag = this.tags[this.tags.length - 1];
    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
    this.componentTags[componentId] = componentTag;
    componentTag.addComponent(componentId);
    return componentTag;
  };

  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
    var newTag = this.tagConstructor(isLocal);
    this.tags.push(newTag);
    return newTag;
  };

  StyleSheet.reset = function reset(isServer) {
    instance = StyleSheet.create(isServer);
  };

  /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */


  StyleSheet.create = function create() {
    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';

    return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
  };

  StyleSheet.clone = function clone(oldSheet) {
    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
      return tag.clone();
    }), _extends$1({}, oldSheet.names));

    newSheet.hashes = _extends$1({}, oldSheet.hashes);
    newSheet.deferredInjections = _extends$1({}, oldSheet.deferredInjections);
    clones.push(newSheet);

    return newSheet;
  };

  createClass$1(StyleSheet, null, [{
    key: 'instance',
    get: function get$$1() {
      return instance || (instance = StyleSheet.create());
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

//      
var StyleSheetManager = function (_Component) {
  inherits$1(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck$1(this, StyleSheetManager);
    return possibleConstructorReturn$1(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.props.sheet, _ref;
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return React.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(Component);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = propTypes.oneOfType([propTypes.instanceOf(StyleSheet), propTypes.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

StyleSheetManager.propTypes = {
  sheet: propTypes.oneOfType([propTypes.instanceOf(StyleSheet), propTypes.instanceOf(ServerStyleSheet)]).isRequired
};

//      
/* eslint-disable no-underscore-dangle */
var ServerTag = function () {
  function ServerTag(isLocal) {
    classCallCheck$1(this, ServerTag);

    this.isLocal = isLocal;
    this.components = {};
    this.size = 0;
    this.names = [];
  }

  ServerTag.prototype.isFull = function isFull() {
    return false;
  };

  ServerTag.prototype.addComponent = function addComponent(componentId) {
    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    this.components[componentId] = { componentId: componentId, css: '' };
    this.size += 1;
  };

  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
    var _this = this;

    return Object.keys(this.components).reduce(function (styles, k) {
      return styles + _this.components[k].css;
    }, '');
  };

  ServerTag.prototype.inject = function inject(componentId, css, name) {
    var comp = this.components[componentId];

    if (!comp) throw new Error('Must add a new component before you can inject css into it');
    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';

    comp.css += css.replace(/\n*$/, '\n');

    if (name) this.names.push(name);
  };

  ServerTag.prototype.toHTML = function toHTML() {
    var attrs = ['type="text/css"', SC_ATTR + '="' + this.names.join(' ') + '"', LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

    var nonce = getNonce();

    if (nonce) {
      attrs.push('nonce="' + nonce + '"');
    }

    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
  };

  ServerTag.prototype.toReactElement = function toReactElement(key) {
    var _attrs;

    var attrs = (_attrs = {}, _attrs[SC_ATTR] = this.names.join(' '), _attrs[LOCAL_ATTR] = this.isLocal.toString(), _attrs);

    var nonce = getNonce();

    if (nonce) {
      attrs.nonce = nonce;
    }

    return React.createElement('style', _extends$1({
      key: key, type: 'text/css' }, attrs, {
      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
    }));
  };

  ServerTag.prototype.clone = function clone() {
    var _this2 = this;

    var copy = new ServerTag(this.isLocal);
    copy.names = [].concat(this.names);
    copy.size = this.size;
    copy.components = Object.keys(this.components).reduce(function (acc, key) {
      acc[key] = _extends$1({}, _this2.components[key]); // eslint-disable-line no-param-reassign
      return acc;
    }, {});

    return copy;
  };

  return ServerTag;
}();

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck$1(this, ServerStyleSheet);

    this.instance = StyleSheet.clone(StyleSheet.instance);
  }

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) throw new Error("Can't collect styles once you've called getStyleTags!");
    return React.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toReactElements();
  };

  ServerStyleSheet.create = function create() {
    return new StyleSheet(function (isLocal) {
      return new ServerTag(isLocal);
    });
  };

  return ServerStyleSheet;
}();

//      

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

//      
/* Trying to avoid the unknown-prop errors on styled components
 by filtering by React's attribute whitelist.
 */

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = {
  children: true,
  dangerouslySetInnerHTML: true,
  key: true,
  ref: true,
  autoFocus: true,
  defaultValue: true,
  valueLink: true,
  defaultChecked: true,
  checkedLink: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  onFocusIn: true,
  onFocusOut: true,
  className: true,

  /* List copied from https://facebook.github.io/react/docs/events.html */
  onCopy: true,
  onCut: true,
  onPaste: true,
  onCompositionEnd: true,
  onCompositionStart: true,
  onCompositionUpdate: true,
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  onFocus: true,
  onBlur: true,
  onChange: true,
  onInput: true,
  onSubmit: true,
  onReset: true,
  onClick: true,
  onContextMenu: true,
  onDoubleClick: true,
  onDrag: true,
  onDragEnd: true,
  onDragEnter: true,
  onDragExit: true,
  onDragLeave: true,
  onDragOver: true,
  onDragStart: true,
  onDrop: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOut: true,
  onMouseOver: true,
  onMouseUp: true,
  onSelect: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchMove: true,
  onTouchStart: true,
  onScroll: true,
  onWheel: true,
  onAbort: true,
  onCanPlay: true,
  onCanPlayThrough: true,
  onDurationChange: true,
  onEmptied: true,
  onEncrypted: true,
  onEnded: true,
  onError: true,
  onLoadedData: true,
  onLoadedMetadata: true,
  onLoadStart: true,
  onPause: true,
  onPlay: true,
  onPlaying: true,
  onProgress: true,
  onRateChange: true,
  onSeeked: true,
  onSeeking: true,
  onStalled: true,
  onSuspend: true,
  onTimeUpdate: true,
  onVolumeChange: true,
  onWaiting: true,
  onLoad: true,
  onAnimationStart: true,
  onAnimationEnd: true,
  onAnimationIteration: true,
  onTransitionEnd: true,

  onCopyCapture: true,
  onCutCapture: true,
  onPasteCapture: true,
  onCompositionEndCapture: true,
  onCompositionStartCapture: true,
  onCompositionUpdateCapture: true,
  onKeyDownCapture: true,
  onKeyPressCapture: true,
  onKeyUpCapture: true,
  onFocusCapture: true,
  onBlurCapture: true,
  onChangeCapture: true,
  onInputCapture: true,
  onSubmitCapture: true,
  onResetCapture: true,
  onClickCapture: true,
  onContextMenuCapture: true,
  onDoubleClickCapture: true,
  onDragCapture: true,
  onDragEndCapture: true,
  onDragEnterCapture: true,
  onDragExitCapture: true,
  onDragLeaveCapture: true,
  onDragOverCapture: true,
  onDragStartCapture: true,
  onDropCapture: true,
  onMouseDownCapture: true,
  onMouseEnterCapture: true,
  onMouseLeaveCapture: true,
  onMouseMoveCapture: true,
  onMouseOutCapture: true,
  onMouseOverCapture: true,
  onMouseUpCapture: true,
  onSelectCapture: true,
  onTouchCancelCapture: true,
  onTouchEndCapture: true,
  onTouchMoveCapture: true,
  onTouchStartCapture: true,
  onScrollCapture: true,
  onWheelCapture: true,
  onAbortCapture: true,
  onCanPlayCapture: true,
  onCanPlayThroughCapture: true,
  onDurationChangeCapture: true,
  onEmptiedCapture: true,
  onEncryptedCapture: true,
  onEndedCapture: true,
  onErrorCapture: true,
  onLoadedDataCapture: true,
  onLoadedMetadataCapture: true,
  onLoadStartCapture: true,
  onPauseCapture: true,
  onPlayCapture: true,
  onPlayingCapture: true,
  onProgressCapture: true,
  onRateChangeCapture: true,
  onSeekedCapture: true,
  onSeekingCapture: true,
  onStalledCapture: true,
  onSuspendCapture: true,
  onTimeUpdateCapture: true,
  onVolumeChangeCapture: true,
  onWaitingCapture: true,
  onLoadCapture: true,
  onAnimationStartCapture: true,
  onAnimationEndCapture: true,
  onAnimationIterationCapture: true,
  onTransitionEndCapture: true
};

/* From HTMLDOMPropertyConfig */
var htmlProps = {
  /**
   * Standard Properties
   */
  accept: true,
  acceptCharset: true,
  accessKey: true,
  action: true,
  allowFullScreen: true,
  allowTransparency: true,
  alt: true,
  // specifies target context for links with `preload` type
  as: true,
  async: true,
  autoComplete: true,
  // autoFocus is polyfilled/normalized by AutoFocusUtils
  // autoFocus: true,
  autoPlay: true,
  capture: true,
  cellPadding: true,
  cellSpacing: true,
  charSet: true,
  challenge: true,
  checked: true,
  cite: true,
  classID: true,
  className: true,
  cols: true,
  colSpan: true,
  content: true,
  contentEditable: true,
  contextMenu: true,
  controls: true,
  coords: true,
  crossOrigin: true,
  data: true, // For `<object />` acts as `src`.
  dateTime: true,
  default: true,
  defer: true,
  dir: true,
  disabled: true,
  download: true,
  draggable: true,
  encType: true,
  form: true,
  formAction: true,
  formEncType: true,
  formMethod: true,
  formNoValidate: true,
  formTarget: true,
  frameBorder: true,
  headers: true,
  height: true,
  hidden: true,
  high: true,
  href: true,
  hrefLang: true,
  htmlFor: true,
  httpEquiv: true,
  icon: true,
  id: true,
  inputMode: true,
  integrity: true,
  is: true,
  keyParams: true,
  keyType: true,
  kind: true,
  label: true,
  lang: true,
  list: true,
  loop: true,
  low: true,
  manifest: true,
  marginHeight: true,
  marginWidth: true,
  max: true,
  maxLength: true,
  media: true,
  mediaGroup: true,
  method: true,
  min: true,
  minLength: true,
  // Caution; `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`.
  multiple: true,
  muted: true,
  name: true,
  nonce: true,
  noValidate: true,
  open: true,
  optimum: true,
  pattern: true,
  placeholder: true,
  playsInline: true,
  poster: true,
  preload: true,
  profile: true,
  radioGroup: true,
  readOnly: true,
  referrerPolicy: true,
  rel: true,
  required: true,
  reversed: true,
  role: true,
  rows: true,
  rowSpan: true,
  sandbox: true,
  scope: true,
  scoped: true,
  scrolling: true,
  seamless: true,
  selected: true,
  shape: true,
  size: true,
  sizes: true,
  span: true,
  spellCheck: true,
  src: true,
  srcDoc: true,
  srcLang: true,
  srcSet: true,
  start: true,
  step: true,
  style: true,
  summary: true,
  tabIndex: true,
  target: true,
  title: true,
  // Setting .type throws on non-<input> tags
  type: true,
  useMap: true,
  value: true,
  width: true,
  wmode: true,
  wrap: true,

  /**
   * RDFa Properties
   */
  about: true,
  datatype: true,
  inlist: true,
  prefix: true,
  // property is also supported for OpenGraph in meta tags.
  property: true,
  resource: true,
  typeof: true,
  vocab: true,

  /**
   * Non-standard Properties
   */
  // autoCapitalize and autoCorrect are supported in Mobile Safari for
  // keyboard hints.
  autoCapitalize: true,
  autoCorrect: true,
  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
  autoSave: true,
  // color is for Safari mask-icon link
  color: true,
  // itemProp, itemScope, itemType are for
  // Microdata support. See http://schema.org/docs/gs.html
  itemProp: true,
  itemScope: true,
  itemType: true,
  // itemID and itemRef are for Microdata support as well but
  // only specified in the WHATWG spec document. See
  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
  itemID: true,
  itemRef: true,
  // results show looking glass icon and recent searches on input
  // search fields in WebKit/Blink
  results: true,
  // IE-only attribute that specifies security restrictions on an iframe
  // as an alternative to the sandbox attribute on IE<10
  security: true,
  // IE-only attribute that controls focus behavior
  unselectable: 0
};

var svgProps = {
  accentHeight: true,
  accumulate: true,
  additive: true,
  alignmentBaseline: true,
  allowReorder: true,
  alphabetic: true,
  amplitude: true,
  arabicForm: true,
  ascent: true,
  attributeName: true,
  attributeType: true,
  autoReverse: true,
  azimuth: true,
  baseFrequency: true,
  baseProfile: true,
  baselineShift: true,
  bbox: true,
  begin: true,
  bias: true,
  by: true,
  calcMode: true,
  capHeight: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  clipPathUnits: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorProfile: true,
  colorRendering: true,
  contentScriptType: true,
  contentStyleType: true,
  cursor: true,
  cx: true,
  cy: true,
  d: true,
  decelerate: true,
  descent: true,
  diffuseConstant: true,
  direction: true,
  display: true,
  divisor: true,
  dominantBaseline: true,
  dur: true,
  dx: true,
  dy: true,
  edgeMode: true,
  elevation: true,
  enableBackground: true,
  end: true,
  exponent: true,
  externalResourcesRequired: true,
  fill: true,
  fillOpacity: true,
  fillRule: true,
  filter: true,
  filterRes: true,
  filterUnits: true,
  floodColor: true,
  floodOpacity: true,
  focusable: true,
  fontFamily: true,
  fontSize: true,
  fontSizeAdjust: true,
  fontStretch: true,
  fontStyle: true,
  fontVariant: true,
  fontWeight: true,
  format: true,
  from: true,
  fx: true,
  fy: true,
  g1: true,
  g2: true,
  glyphName: true,
  glyphOrientationHorizontal: true,
  glyphOrientationVertical: true,
  glyphRef: true,
  gradientTransform: true,
  gradientUnits: true,
  hanging: true,
  horizAdvX: true,
  horizOriginX: true,
  ideographic: true,
  imageRendering: true,
  in: true,
  in2: true,
  intercept: true,
  k: true,
  k1: true,
  k2: true,
  k3: true,
  k4: true,
  kernelMatrix: true,
  kernelUnitLength: true,
  kerning: true,
  keyPoints: true,
  keySplines: true,
  keyTimes: true,
  lengthAdjust: true,
  letterSpacing: true,
  lightingColor: true,
  limitingConeAngle: true,
  local: true,
  markerEnd: true,
  markerMid: true,
  markerStart: true,
  markerHeight: true,
  markerUnits: true,
  markerWidth: true,
  mask: true,
  maskContentUnits: true,
  maskUnits: true,
  mathematical: true,
  mode: true,
  numOctaves: true,
  offset: true,
  opacity: true,
  operator: true,
  order: true,
  orient: true,
  orientation: true,
  origin: true,
  overflow: true,
  overlinePosition: true,
  overlineThickness: true,
  paintOrder: true,
  panose1: true,
  pathLength: true,
  patternContentUnits: true,
  patternTransform: true,
  patternUnits: true,
  pointerEvents: true,
  points: true,
  pointsAtX: true,
  pointsAtY: true,
  pointsAtZ: true,
  preserveAlpha: true,
  preserveAspectRatio: true,
  primitiveUnits: true,
  r: true,
  radius: true,
  refX: true,
  refY: true,
  renderingIntent: true,
  repeatCount: true,
  repeatDur: true,
  requiredExtensions: true,
  requiredFeatures: true,
  restart: true,
  result: true,
  rotate: true,
  rx: true,
  ry: true,
  scale: true,
  seed: true,
  shapeRendering: true,
  slope: true,
  spacing: true,
  specularConstant: true,
  specularExponent: true,
  speed: true,
  spreadMethod: true,
  startOffset: true,
  stdDeviation: true,
  stemh: true,
  stemv: true,
  stitchTiles: true,
  stopColor: true,
  stopOpacity: true,
  strikethroughPosition: true,
  strikethroughThickness: true,
  string: true,
  stroke: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  surfaceScale: true,
  systemLanguage: true,
  tableValues: true,
  targetX: true,
  targetY: true,
  textAnchor: true,
  textDecoration: true,
  textRendering: true,
  textLength: true,
  to: true,
  transform: true,
  u1: true,
  u2: true,
  underlinePosition: true,
  underlineThickness: true,
  unicode: true,
  unicodeBidi: true,
  unicodeRange: true,
  unitsPerEm: true,
  vAlphabetic: true,
  vHanging: true,
  vIdeographic: true,
  vMathematical: true,
  values: true,
  vectorEffect: true,
  version: true,
  vertAdvY: true,
  vertOriginX: true,
  vertOriginY: true,
  viewBox: true,
  viewTarget: true,
  visibility: true,
  widths: true,
  wordSpacing: true,
  writingMode: true,
  x: true,
  xHeight: true,
  x1: true,
  x2: true,
  xChannelSelector: true,
  xlinkActuate: true,
  xlinkArcrole: true,
  xlinkHref: true,
  xlinkRole: true,
  xlinkShow: true,
  xlinkTitle: true,
  xlinkType: true,
  xmlBase: true,
  xmlns: true,
  xmlnsXlink: true,
  xmlLang: true,
  xmlSpace: true,
  y: true,
  y1: true,
  y2: true,
  yChannelSelector: true,
  z: true,
  zoomAndPan: true
};

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var hasOwnProperty = {}.hasOwnProperty;
var validAttr = (function (name) {
  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
});

//      


function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

//      


function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}

//      

/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

//      


var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

//      
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

//      
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

var _ThemeProvider$childC;
var _ThemeProvider$contex;

//      
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = propTypes.shape({
  getTheme: propTypes.func,
  subscribe: propTypes.func,
  unsubscribe: propTypes.func
});

var warnChannelDeprecated = once(function () {
  // eslint-disable-next-line no-console
  console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
});
/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits$1(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck$1(this, ThemeProvider);

    var _this = possibleConstructorReturn$1(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;
      });
    }
    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends$1({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      warnChannelDeprecated();

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction_1(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (!isPlainObject(mergedTheme)) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    if (!isPlainObject(theme)) {
      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return _extends$1({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return React.Children.only(this.props.children);
  };

  return ThemeProvider;
}(Component);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = propTypes.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

//      

var escapeRegex = /[[\].#*$><+~=|^:(),"'`]/g;
var multiDashRegex = /--+/g;

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  /* We depend on components having unique IDs */
  var identifiers = {};
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : _displayName.replace(escapeRegex, '-') // Replace all possible CSS selectors
    .replace(multiDashRegex, '-'); // Replace multiple -- with single -

    var nr = (identifiers[displayName] || 0) + 1;
    identifiers[displayName] = nr;

    var hash = ComponentStyle.generateName(displayName + nr);
    var componentId = displayName + '-' + hash;
    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_Component) {
    inherits$1(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck$1(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn$1(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends$1({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends$1({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if (warnTooManyClasses !== undefined) warnTooManyClasses(className);

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a staticaly-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;


      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends$1({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return createElement(target, propsForElement);
    };

    return BaseStyledComponent;
  }(Component);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? options.displayName + '-' + options.componentId : componentId;

    var warnTooManyClasses = void 0;
    if (process.env.NODE_ENV !== 'production') {
      warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits$1(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck$1(this, StyledComponent);
        return possibleConstructorReturn$1(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties$1(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : getComponentName(tag));

        var newOptions = _extends$1({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass$1(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties$1(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends$1({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = propTypes.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = propTypes.oneOfType([propTypes.instanceOf(StyleSheet), propTypes.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.warnTooManyClasses = warnTooManyClasses;
    StyledComponent.target = target;


    return StyledComponent;
  };

  return createStyledComponent;
});

// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

//      
var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled copmonent
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck$1(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = isStaticRules(rules, attrs);
      this.componentId = componentId;
      if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
        var placeholder = process.env.NODE_ENV !== 'production' ? '.' + componentId + ' {}' : '';
        StyleSheet.instance.deferredInject(componentId, true, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          lastClassName = this.lastClassName;

      if (isStatic && lastClassName !== undefined) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var hash = doHash(this.componentId + flatCSS.join(''));

      var existingName = styleSheet.getName(hash);
      if (existingName !== undefined) {
        if (styleSheet.stylesCacheable) {
          this.lastClassName = existingName;
        }
        return existingName;
      }

      var name = nameGenerator(hash);
      if (styleSheet.stylesCacheable) {
        this.lastClassName = existingName;
      }
      if (styleSheet.alreadyInjected(hash, name)) {
        return name;
      }

      var css = '\n' + stringifyRules(flatCSS, '.' + name);
      // NOTE: this can only be set when we inject the class-name.
      // For some reason, presumably due to how css is stringifyRules behaves in
      // differently between client and server, styles break.
      styleSheet.inject(this.componentId, true, css, hash, name);
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return nameGenerator(doHash(str));
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

//      
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

//      

var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

//      
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

    var existingName = StyleSheet.instance.getName(hash);
    if (existingName) return existingName;

    var name = nameGenerator(hash);
    if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

    var generatedCSS = stringifyRules(rules, name, '@keyframes');
    StyleSheet.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
    return name;
  };
});

//      
var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal(strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(JSON.stringify(rules));

    var componentId = 'sc-global-' + hash;
    if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

    StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
  };

  return injectGlobal;
});

//      


var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof tag !== 'string' && typeof tag !== 'function') {
      // $FlowInvalidInputTest
      throw new Error('Cannot create styled-component for component: ' + tag);
    }

    /* This is callable directly as a template function */
    var templateFunction = function templateFunction(strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends$1({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends$1({}, options, {
        attrs: _extends$1({}, options.attrs || {}, attrs) }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

//      
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var isStyledComponent$$1 = isStyledComponent(Component$$1);

  var WithTheme = function (_React$Component) {
    inherits$1(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck$1(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn$1(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var theme = this.state.theme;


      return React.createElement(Component$$1, _extends$1({
        theme: theme
      }, this.props, {
        innerRef: isStyledComponent$$1 ? innerRef : undefined,
        ref: isStyledComponent$$1 ? undefined : innerRef
      }));
    };

    return WithTheme;
  }(React.Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = propTypes.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);


  return hoistNonReactStatics(WithTheme, Component$$1);
};

//      

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

var aragon = {
  Grey: {
    'Black Ash': '#3B3B3B',
    'Dim Grey': '#707070',
    'Dust Grey': '#969696',
    'Light Grey': '#B3B3B3',
    Gainsboro: '#D9D9D9',
    Alabaster: '#F2F2F2'
  },
  Rain: {
    Shark: '#1F2323',
    Atomic: '#455559',
    Slate: '#6D8088',
    'Aqua Island': '#9ECDDB',
    'Rain Sky': '#DCEAEF',
    'Aqua Blue': '#F7FBFD'
  },
  Blue: {
    Lochmara: '#028BCF',
    Danube: '#7FADDC',
    Spindle: '#B3CFEA',
    Solitude: '#ECF8FE'
  },
  Sea: {
    'Light Sea': '#21B7C4',
    Turquoise: '#50E2C3',
    'Blizzard Blue': '#ACECE7'
  },
  Purple: {
    Indigo: '#4A2DBE',
    Portage: '#A684F5',
    Lavender: '#DBCCFF'
  },
  Eagle: {
    'Dark Cerulean': '#00A4D1',
    Cerulean: '#00B4E6',
    'Dark Turquoise': '#00CBE6',
    'Dark Opal': '#00DBCD',
    Opal: '#00F0E0'
  },
  Gold: {
    Brandy: '#DAC08B',
    Beige: '#FFF9EB'
  },
  Red: {
    'Salmon Red': '#FB7979'
  },
  Green: {
    'Spring Green': '#21D48F'
  },
  Black: {
    Black: '#000000'
  },
  White: {
    White: '#FFFFFF'
  },
  'Aragon Brand': {
    Primary: '=Purple.Indigo',
    Secondary: '=Sea.Turquoise',
    'Black Ash': '=Grey.Black Ash',
    'Gradient Start': '=Eagle.Cerulean',
    'Gradient End': '=Eagle.Opal'
  },
  'Aragon UI': {
    gradientStart: '=Eagle.Cerulean',
    gradientEnd: '=Eagle.Opal',
    gradientStartActive: '=Eagle.Dark Cerulean',
    gradientEndActive: '=Eagle.Dark Opal',
    gradientText: '=White.White',
    mainBackground: '=Rain.Aqua Blue',
    mainBgGradientStart: '=Rain.Rain Sky',
    mainBgGradientEnd: '=Rain.Aqua Blue',
    secondaryBackground: '=Rain.Rain Sky',
    contentBackground: '=White.White',
    contentBackgroundActive: '=Grey.Alabaster',
    contentBorder: '=Grey.Gainsboro',
    contentBorderActive: '=Grey.Light Grey',
    shadow: '=Grey.Gainsboro',
    textPrimary: '=Black.Black',
    textSecondary: '=Grey.Dim Grey',
    textTertiary: '=Grey.Light Grey',
    accent: '=Eagle.Dark Turquoise',
    positive: '=Green.Spring Green',
    positiveText: '=White.White',
    negative: '=Red.Salmon Red',
    negativeText: '=White.White'
  },
  'Aragon UI Dark': {
    gradientStart: '=Eagle.Cerulean',
    gradientEnd: '=Eagle.Opal',
    gradientStartActive: '=Eagle.Dark Cerulean',
    gradientEndActive: '=Eagle.Dark Opal',
    gradientText: '=White.White',
    mainBackground: '=Rain.Aqua Blue',
    mainBgGradientStart: '=Rain.Rain Sky',
    mainBgGradientEnd: '=Rain.Aqua Blue',
    secondaryBackground: '=Rain.Rain Sky',
    contentBackground: '=Rain.Shark',
    contentBackgroundActive: '=Grey.Alabaster',
    contentBorder: '=Grey.Gainsboro',
    contentBorderActive: '=Grey.Light Grey',
    shadow: '=Grey.Gainsboro',
    textPrimary: '=White.White',
    textSecondary: '=Grey.Dust Grey',
    textTertiary: '=Grey.Dim Grey',
    accent: '=Eagle.Dark Turquoise',
    positive: '=Green.Spring Green',
    positiveText: '=White.White',
    negative: '=Red.Salmon Red',
    negativeText: '=White.White'
  }
};


// These need to match the names in the Open Color palettes
var THEME_NAME = 'Aragon UI';
var THEME_DARK_NAME = 'Aragon UI Dark';
var BRAND_NAME = 'Aragon Brand';

// Name of the group a given palette belong to
var getGroupName = function getGroupName(name) {
  if (name === THEME_NAME) return 'theme';
  if (name === THEME_DARK_NAME) return 'themeDark';
  if (name === BRAND_NAME) return 'brand';
  return 'colors';
};

// Resolve a single color
var resolveColor = function resolveColor(value, palettes) {
  // already resolved color
  if (!value.startsWith('=')) {
    return value;
  }

  var _value$slice$split = value.slice(1).split('.'),
      _value$slice$split2 = slicedToArray(_value$slice$split, 2),
      paletteName = _value$slice$split2[0],
      key = _value$slice$split2[1];

  var color = palettes[paletteName] && palettes[paletteName][key];

  if (!color) {
    throw new Error('resolveColor: ' + value + ' doesn\u2019t seem to exist');
  }

  // follow the references until we find one
  if (color.startsWith('=')) {
    return resolveColor(color, palettes);
  }
  return color;
};

// Resolve all the colors in a palette
var resolveColors = function resolveColors(palette, palettes) {
  return Object.entries(palette).reduce(function (pal, _ref) {
    var _ref2 = slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    if (typeof value === 'string') {
      pal[name] = resolveColor(value, palettes);
    }
    return pal;
  }, {});
};

// Prepare groups from the palettes: theme, themeDark, brand and colors.
var groups = function groups(palettes) {
  return Object.entries(palettes).reduce(function (groups, _ref3) {
    var _ref4 = slicedToArray(_ref3, 2),
        paletteName = _ref4[0],
        palette = _ref4[1];

    var groupName = getGroupName(paletteName);

    if (groupName === 'colors') {
      groups.colors[paletteName] = resolveColors(palette, palettes);
    } else {
      groups[groupName] = resolveColors(palette, palettes);
    }

    return groups;
  }, { colors: {} });
};

var _groups = groups(aragon);
var themeDark = _groups.themeDark;
var theme = _groups.theme;
var brand = _groups.brand;
var colors = _groups.colors;

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

var camel2hyphen_1 = camel2hyphen;

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen_1(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and ';
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', ';
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

var json2mq_1 = json2mq;

var Media_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(propTypes);



var _json2mq2 = _interopRequireDefault(json2mq_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Conditionally renders based on whether or not a media query matches.
 */
var Media = function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    var _temp, _this, _ret;

    _classCallCheck(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      matches: _this.props.defaultMatches
    }, _this.updateMatches = function () {
      return _this.setState({ matches: _this.mediaQueryList.matches });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Media.prototype.componentWillMount = function componentWillMount() {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object') return;

    var query = this.props.query;


    if (typeof query !== 'string') query = (0, _json2mq2.default)(query);

    this.mediaQueryList = window.matchMedia(query);
    this.mediaQueryList.addListener(this.updateMatches);
    this.updateMatches();
  };

  Media.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateMatches);
  };

  Media.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        render = _props.render;
    var matches = this.state.matches;


    return render ? matches ? render() : null : children ? typeof children === 'function' ? children(matches) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
    matches ? _react2.default.Children.only(children) : null : null : null;
  };

  return Media;
}(_react2.default.Component);

Media.propTypes = {
  defaultMatches: _propTypes2.default.bool,
  query: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.arrayOf(_propTypes2.default.object.isRequired)]).isRequired,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Media.defaultProps = {
  defaultMatches: true
};
exports.default = Media;
});

unwrapExports(Media_1);

var reactMedia = createCommonjsModule(function (module) {
var _Media2 = _interopRequireDefault(Media_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Remove in the next major release.
_Media2.default.Media = _Media2.default; /* eslint-env node */


module.exports = _Media2.default;
});

var Media = unwrapExports(reactMedia);

var FONT_SIZES = {
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px'
};

var FONT_WEIGHTS = {
  normal: '400',
  bold: '600',
  bolder: '800'
};

var GRID = {
  columns: 12,
  gutterWidth: 30,
  columnWidth: 68
};

var SPRINGS = {
  slow: { stiffness: 150, damping: 18, precision: 0.001 },
  normal: { stiffness: 190, damping: 22, precision: 0.001 },
  fast: { stiffness: 220, damping: 24, precision: 0.001 }

  // These breakpoints values represent minimum screen sizes.
  // Small screen sizes should be targetted by default (mobile first).
};var BREAKPOINTS = {
  medium: 768,
  large: 1170
};

var font = function font(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 'normal' : _ref$size,
      _ref$weight = _ref.weight,
      weight = _ref$weight === undefined ? 'normal' : _ref$weight;

  var fontSize = FONT_SIZES[size] || FONT_SIZES.normal;
  var fontWeight = FONT_WEIGHTS[weight] || FONT_WEIGHTS.normal;
  return '\n    font-size: ' + fontSize + ';\n    font-weight: ' + fontWeight + ';\n    line-height: 1.5;\n  ';
};

var grid = function grid(cols) {
  var gutters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cols - 1;
  return GRID.columnWidth * cols + GRID.gutterWidth * gutters;
};

var spring = function spring(name) {
  return SPRINGS[name] || SPRINGS.normal;
};

// CSS breakpoints
var breakpoint = function breakpoint(name, styles) {
  return css(['@media (min-width:', 'px){', ';}'], BREAKPOINTS[name], styles);
};

// Rendering breakpoints
var BreakPoint = function BreakPoint(_ref2) {
  var from = _ref2.from,
      to = _ref2.to,
      children = _ref2.children,
      props = objectWithoutProperties(_ref2, ['from', 'to', 'children']);

  var names = ['medium', 'large'];
  var query = {};
  if (from && names.includes(from)) {
    query.minWidth = BREAKPOINTS[from];
  }
  if (to && names.includes(to)) {
    query.maxWidth = BREAKPOINTS[to] - 1;
  }
  return React.createElement(
    Media,
    _extends({ query: query, defaultMatches: false }, props),
    function (ok) {
      return ok ? children : null;
    }
  );
};

BreakPoint.defaultProps = {
  to: '',
  from: ''
};

var unselectable = function unselectable() {
  return '\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n';
};

// High order component wrapper
var getPublicUrl = function getPublicUrl(Component$$1) {
  var highOrderComponent = function highOrderComponent(baseProps, context) {
    var _context$publicUrl = context.publicUrl,
        publicUrl = _context$publicUrl === undefined ? '' : _context$publicUrl;

    var props = _extends({}, baseProps, { publicUrl: publicUrl });
    return React.createElement(Component$$1, props);
  };
  highOrderComponent.contextTypes = {
    publicUrl: propTypes.string
  };
  return highOrderComponent;
};

// prefix helper
var prefixUrl = function prefixUrl(url, publicUrl) {
  return url.startsWith('data:') ? url : publicUrl + url;
};

// styled-component helper
var styledPublicUrl = function styledPublicUrl(url) {
  return function (_ref) {
    var publicUrl = _ref.publicUrl;
    return prefixUrl(url, publicUrl);
  };
};

var overpassLightWoff = "fd48a701d84ebf69.woff";

var overpassLightWoff2 = "cf790334a5a6d45c.woff2";

var overpassRegularWoff = "860b19d3e10736e7.woff";

var overpassRegularWoff2 = "32a3f11e7740ce58.woff2";

var overpassSemiBoldWoff = "f8ba2d7a9af0db1f.woff";

var overpassSemiBoldWoff2 = "5cfe62515c2f9b42.woff2";

var _templateObject = taggedTemplateLiteral(['\n  @font-face {\n    font-family: \'overpass\';\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n    font-weight: 400;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: \'overpass\';\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: \'overpass\';\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n    font-weight: 800;\n    font-style: normal;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  html {\n    min-height: 100%;\n  }\n  body {\n    font-family: overpass, sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: ', ';\n    background: ', ';\n  }\n  body,\n  ul,\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button,\n  select,\n  input,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a,\n  button,\n  select,\n  input {\n    color: inherit;\n  }\n  strong,\n  b {\n    font-weight: 600;\n  }\n'], ['\n  @font-face {\n    font-family: \'overpass\';\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n    font-weight: 400;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: \'overpass\';\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: \'overpass\';\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n    font-weight: 800;\n    font-style: normal;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  html {\n    min-height: 100%;\n  }\n  body {\n    font-family: overpass, sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: ', ';\n    background: ', ';\n  }\n  body,\n  ul,\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button,\n  select,\n  input,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a,\n  button,\n  select,\n  input {\n    color: inherit;\n  }\n  strong,\n  b {\n    font-weight: 600;\n  }\n']);

var injectStyles = function injectStyles(asset) {
  return injectGlobal(_templateObject, asset(overpassLightWoff2), asset(overpassLightWoff), asset(overpassRegularWoff2), asset(overpassRegularWoff), asset(overpassSemiBoldWoff2), asset(overpassSemiBoldWoff), theme.textPrimary, theme.mainBackground);
};

var BaseStyles = function (_React$Component) {
  inherits(BaseStyles, _React$Component);

  function BaseStyles() {
    classCallCheck(this, BaseStyles);
    return possibleConstructorReturn(this, (BaseStyles.__proto__ || Object.getPrototypeOf(BaseStyles)).apply(this, arguments));
  }

  createClass(BaseStyles, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      injectStyles(function (url) {
        return _this2.props.publicUrl + url;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return BaseStyles;
}(React.Component);

var BaseStyles$1 = getPublicUrl(BaseStyles);

var StyledContent = styled.div.withConfig({
  displayName: 'Section__StyledContent'
})(['width:100%;margin:0 auto;max-width:', 'px;'], function (_ref) {
  var large = _ref.large;
  return grid(large ? 12 : 10);
});

var DefaultProps = {
  large: false,
  visual: false
};

var Section = function Section(_ref2) {
  var large = _ref2.large,
      visual = _ref2.visual,
      className = _ref2.className,
      publicUrl = _ref2.publicUrl,
      props = objectWithoutProperties(_ref2, ['large', 'visual', 'className', 'publicUrl']);

  var containerProps = { className: className };
  var content = React.createElement(
    StyledContent,
    { large: large },
    React.createElement('div', props)
  );
  if (visual) return React.createElement(
    'div',
    containerProps,
    content
  );
  return React.createElement(
    'section',
    containerProps,
    content
  );
};

Section.defaultProps = DefaultProps;

var medium = function medium(css$$1) {
  return breakpoint('medium', css$$1);
};
var large = function large(css$$1) {
  return breakpoint('large', css$$1);
};

var StyledIllustratedSection = styled(Section).withConfig({
  displayName: 'IllustratedSection__StyledIllustratedSection'
})(['padding:120px 15px 120px;.main{display:block;align-items:center;', ';}.text{margin-top:20px;', ';', ';}'], large('display: flex'), medium('\n      display: flex;\n      margin-top: 40px;\n    '), large('\n      display: block;\n      margin-top: 0;\n    '));

var StyledIllustration = styled.div.withConfig({
  displayName: 'IllustratedSection__StyledIllustration'
})(['margin-top:40px;img{display:block;margin:0 auto;max-width:calc(100% - 30px);}', ';'], large('\n    flex-shrink: 0;\n    width: calc(40% + 150px);\n    margin-left: 50px;\n    margin-right: -100px;\n    margin-top: 0;\n    padding: 0 70px;\n    &:first-child {\n      margin-left: -100px;\n      margin-right: 50px;\n    }\n    img {\n      width: 100%;\n      margin: 0;\n    }\n  '));

var StyledTitle = styled.div.withConfig({
  displayName: 'IllustratedSection__StyledTitle'
})(['margin-bottom:10px;font-size:15px;text-align:center;text-transform:uppercase;color:', ';font-weight:600;', ';', ';'], theme.accent, medium('\n    font-size: 18px;\n  '), large('\n    text-align: left;\n  '));

var StyledSubtitle = styled.div.withConfig({
  displayName: 'IllustratedSection__StyledSubtitle'
})(['font-size:25px;font-weight:200;line-height:1.3;text-align:center;color:', ';', ';', ';'], function (_ref) {
  var dark = _ref.dark;
  return dark ? 'white' : 'black';
}, medium('\n    font-size: 37px;\n  '), large('\n    text-align: left;\n  '));

var StyledEmphasis = styled.div.withConfig({
  displayName: 'IllustratedSection__StyledEmphasis'
})(['margin:0 0 30px;padding-left:30px;font-size:18px;border-left:4px solid ', ';color:', ';', ';', ';'], theme.accent, function (_ref2) {
  var dark = _ref2.dark;
  return dark ? 'white' : 'black';
}, medium('\n    margin: 0 30px 40px 0;\n    font-size: 19px;\n  '), large('\n    margin: 40px 0;\n  '));

var StyledContent$1 = styled.div.withConfig({
  displayName: 'IllustratedSection__StyledContent'
})(['font-size:17px;color:', ';', ';p{margin-bottom:1em;}p:last-child{margin-bottom:0;}'], function (_ref3) {
  var dark = _ref3.dark;
  return dark ? themeDark.textSecondary : 'black';
}, medium('\n    font-size: 18px;\n  '));

var DefaultProps$1 = {
  dark: false
};

var childrenComponents = {
  Illustration: StyledIllustration,
  Title: StyledTitle,
  Subtitle: StyledSubtitle,
  Emphasis: StyledEmphasis,
  Content: StyledContent$1
};

var IllustratedSection = function IllustratedSection(_ref4) {
  var className = _ref4.className,
      dark = _ref4.dark,
      children = _ref4.children;

  // Using proxiedComponents instead of childrenComponents is a way to
  // circumvent the react-hot-loader proxy wrapper.
  //
  // See https://github.com/gaearon/react-hot-loader/issues/304
  var proxiedComponents = Object.keys(childrenComponents).map(function (name) {
    var Comp = childrenComponents[name];
    return [name, Comp, React.createElement(Comp, null).type];
  });
  var elementType = function elementType(elt) {
    var compGroup = proxiedComponents.find(function (_ref5) {
      var _ref6 = slicedToArray(_ref5, 3),
          name = _ref6[0],
          Comp = _ref6[1],
          ProxiedComp = _ref6[2];

      return elt.type === ProxiedComp;
    });
    if (!compGroup) return { name: '', component: elt.type };
    return { name: compGroup[0], component: compGroup[1] };
  };

  // Collect the elements
  var elts = React.Children.toArray(children).reduce(
  // Fill the .elt property for existing children
  function (elts, elt, i) {
    var _elementType = elementType(elt),
        name = _elementType.name,
        component = _elementType.component;

    if (!elts[name]) return elts;

    elts[name].elt = elt;

    if (component === childrenComponents.Illustration) {
      elts[name].first = i === 0;
    }
    return elts;
  },

  // Fill the initial elts object with { elt: null } entries
  Object.keys(childrenComponents).reduce(function (elts, name) {
    elts[name] = { elt: null, first: false };
    return elts;
  }, {}));

  var illustration = elts.Illustration,
      title = elts.Title,
      subtitle = elts.Subtitle,
      emphasis = elts.Emphasis,
      content = elts.Content;


  return React.createElement(
    StyledIllustratedSection,
    { className: className },
    React.createElement(
      BreakPoint,
      { to: 'large' },
      React.createElement(
        'div',
        { className: 'main' },
        title.elt,
        subtitle.elt,
        illustration.elt,
        React.createElement(
          'div',
          { className: 'text' },
          emphasis.elt,
          content.elt
        )
      )
    ),
    React.createElement(
      BreakPoint,
      { from: 'large' },
      React.createElement(
        'div',
        { className: 'main' },
        illustration.first && illustration.elt,
        React.createElement(
          'div',
          { className: 'text' },
          title.elt,
          subtitle.elt,
          emphasis.elt,
          content.elt
        ),
        !illustration.first && illustration.elt
      )
    )
  );
};

IllustratedSection.defaultProps = DefaultProps$1;

Object.entries(childrenComponents).forEach(function (_ref7) {
  var _ref8 = slicedToArray(_ref7, 2),
      name = _ref8[0],
      comp = _ref8[1];

  // Expose the child component
  IllustratedSection[name] = comp;
});

var BadgeNumber = function BadgeNumber(_ref) {
  var _ref$number = _ref.number,
      number = _ref$number === undefined ? 0 : _ref$number,
      _ref$small = _ref.small,
      small = _ref$small === undefined ? false : _ref$small,
      props = objectWithoutProperties(_ref, ['number', 'small']);
  return React.createElement(
    Main,
    _extends({ small: small }, props),
    number
  );
};

var Main = styled.span.withConfig({
  displayName: 'BadgeNumber__Main'
})(['display:flex;overflow:hidden;justify-content:center;align-items:center;padding-top:1px;width:', 'px;height:', 'px;line-height:', 'px;border-radius:', 'px;font-size:', 'px;font-weight:600;color:', ';background:', ';'], function (_ref2) {
  var small = _ref2.small;
  return small ? '14' : '18';
}, function (_ref3) {
  var small = _ref3.small;
  return small ? '14' : '18';
}, function (_ref4) {
  var small = _ref4.small;
  return small ? '13' : '17';
}, function (_ref5) {
  var small = _ref5.small;
  return small ? '7' : '9';
}, function (_ref6) {
  var small = _ref6.small;
  return small ? '10' : '12';
}, theme.positiveText, theme.positive);

var cross = "data:image/svg+xml,%3Csvg%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.476%201.524L6.3%205.7l4.176%204.176-1.062%201.062-4.176-4.176-4.176%204.176L0%209.876%204.176%205.7%200%201.524%201.062.462l4.176%204.176L9.414.462z%22%20fill%3D%22%23FB7777%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var check = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2210%22%20viewBox%3D%220%200%2014%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4.176%207.956L12.114%200l1.062%201.062-9%209L0%205.886l1.044-1.062z%22%20fill%3D%22%2321D48E%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var gradientStart = theme.gradientStart;
var gradientEnd = theme.gradientEnd;
var gradientStartActive = theme.gradientStartActive;
var gradientEndActive = theme.gradientEndActive;
var gradientText = theme.gradientText;
var contentBackground = theme.contentBackground;
var contentBorder = theme.contentBorder;
var contentBorderActive = theme.contentBorderActive;
var textPrimary = theme.textPrimary;
var textSecondary = theme.textSecondary;

// Plain button = normal or strong

var plainButtonStyles = css(['position:relative;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,0);&:after{content:\'\';opacity:0;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;}&:hover,&:focus{box-shadow:0 1px 1px rgba(0,0,0,0.2);}&:active{transform:translateY(1px);box-shadow:0 1px 1px rgba(0,0,0,0);&:after{opacity:1;}}']);

var modeNormal = css(['', ';&:active{color:', ';}'], plainButtonStyles, textPrimary);

var modeStrong = css(['', ';color:', ';background-image:linear-gradient(130deg,', ',', ');', ';&:after{background-image:linear-gradient( 130deg,', ',', ' );}'], plainButtonStyles, gradientText, gradientStart, gradientEnd, font({ size: 'small', weight: 'bold' }), gradientStartActive, gradientEndActive);

var modeOutline = css(['background:transparent;padding-top:9px;padding-bottom:9px;border:1px solid ', ';&:hover,&:focus{border-color:', ';}&:active{color:', ';border-color:', ';}'], contentBorder, contentBorderActive, textPrimary, textPrimary);

var modeText = css(['padding:10px;background:transparent;&:active,&:focus{color:', ';}'], textPrimary);

var compactStyle = css(['padding:5px 15px;']);

var positiveStyle = css(['padding-left:34px;background:url(', ') no-repeat 12px calc(50% - 1px);'], styledPublicUrl(check));

var negativeStyle = css(['padding-left:30px;background:url(', ') no-repeat 10px calc(50% - 1px);'], styledPublicUrl(cross));

// Flow declaration: see https://github.com/styled-components/styled-components/issues/570#issuecomment-332087358
var StyledButton = getPublicUrl(styled.button.withConfig({
  displayName: 'Button__StyledButton'
})(['width:', ';padding:10px 15px;white-space:nowrap;', ';color:', ';background:', ';border:0;border-radius:3px;cursor:pointer;outline:0;&,&:after{transition-property:all;transition-duration:100ms;transition-timing-function:ease-in-out;}&::-moz-focus-inner{border:0;}', ';', ';', ';'], function (_ref) {
  var wide = _ref.wide;
  return wide ? '100%' : 'auto';
}, font({ size: 'small', weight: 'normal' }), textSecondary, contentBackground, function (_ref2) {
  var mode = _ref2.mode;

  if (mode === 'strong') return modeStrong;
  if (mode === 'outline') return modeOutline;
  if (mode === 'text') return modeText;
  return modeNormal;
}, function (_ref3) {
  var compact = _ref3.compact;
  return compact ? compactStyle : '';
}, function (_ref4) {
  var emphasis = _ref4.emphasis;

  if (emphasis === 'positive') return positiveStyle;
  if (emphasis === 'negative') return negativeStyle;
  return '';
}));

var mapToZero_1 = createCommonjsModule(function (module, exports) {
// currently used to initiate the velocity style object to 0
exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];
});

unwrapExports(mapToZero_1);

var stripStyle_1 = createCommonjsModule(function (module, exports) {
// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}

exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];
});

unwrapExports(stripStyle_1);

var stepper_1 = createCommonjsModule(function (module, exports) {
// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the
exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.
});

unwrapExports(stepper_1);

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);
});

var performanceNow$2 = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window;
var vendors = ['moz', 'webkit'];
var suffix = 'AnimationFrame';
var raf = root['request' + suffix];
var caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow$2()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var shouldStopAnimation_1 = createCommonjsModule(function (module, exports) {
// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)
exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];
});

unwrapExports(shouldStopAnimation_1);

var Motion_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _mapToZero2 = _interopRequireDefault(mapToZero_1);



var _stripStyle2 = _interopRequireDefault(stripStyle_1);



var _stepper4 = _interopRequireDefault(stepper_1);



var _performanceNow2 = _interopRequireDefault(performanceNow);



var _raf2 = _interopRequireDefault(raf_1);



var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(propTypes);

var msPerFrame = 1000 / 60;

var Motion = (function (_React$Component) {
  _inherits(Motion, _React$Component);

  _createClass(Motion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
      children: _propTypes2['default'].func.isRequired,
      onRest: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  function Motion(props) {
    var _this = this;

    _classCallCheck(this, Motion);

    _React$Component.call(this, props);
    this.wasAnimating = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyle = null;

    this.clearUnreadPropStyle = function (destStyle) {
      var dirty = false;
      var _state = _this.state;
      var currentStyle = _state.currentStyle;
      var currentVelocity = _state.currentVelocity;
      var lastIdealStyle = _state.lastIdealStyle;
      var lastIdealVelocity = _state.lastIdealVelocity;

      for (var key in destStyle) {
        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
          continue;
        }

        var styleValue = destStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyle = _extends({}, currentStyle);
            currentVelocity = _extends({}, currentVelocity);
            lastIdealStyle = _extends({}, lastIdealStyle);
            lastIdealVelocity = _extends({}, lastIdealVelocity);
          }

          currentStyle[key] = styleValue;
          currentVelocity[key] = 0;
          lastIdealStyle[key] = styleValue;
          lastIdealVelocity[key] = 0;
        }
      }

      if (dirty) {
        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // check if we need to animate in the first place
        var propsStyle = _this.props.style;
        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
          if (_this.wasAnimating && _this.props.onRest) {
            _this.props.onRest();
          }

          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.wasAnimating = false;
          _this.accumulatedTime = 0;
          return;
        }

        _this.wasAnimating = true;

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};
        var newCurrentStyle = {};
        var newCurrentVelocity = {};

        for (var key in propsStyle) {
          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
            continue;
          }

          var styleValue = propsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
            for (var i = 0; i < framesToCatchUp; i++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyle: newCurrentStyle,
          currentVelocity: newCurrentVelocity,
          lastIdealStyle: newLastIdealStyle,
          lastIdealVelocity: newLastIdealVelocity
        });

        _this.unreadPropStyle = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  Motion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  };

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  Motion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  Motion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return Motion;
})(_react2['default'].Component);

exports['default'] = Motion;
module.exports = exports['default'];

// after checking for unreadPropStyle != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)
});

unwrapExports(Motion_1);

var StaggeredMotion_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _mapToZero2 = _interopRequireDefault(mapToZero_1);



var _stripStyle2 = _interopRequireDefault(stripStyle_1);



var _stepper4 = _interopRequireDefault(stepper_1);



var _performanceNow2 = _interopRequireDefault(performanceNow);



var _raf2 = _interopRequireDefault(raf_1);



var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(propTypes);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = (function (_React$Component) {
  _inherits(StaggeredMotion, _React$Component);

  _createClass(StaggeredMotion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
      styles: _propTypes2['default'].func.isRequired,
      children: _propTypes2['default'].func.isRequired
    },
    enumerable: true
  }]);

  function StaggeredMotion(props) {
    var _this = this;

    _classCallCheck(this, StaggeredMotion);

    _React$Component.call(this, props);
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _state = _this.state;
      var currentStyles = _state.currentStyles;
      var currentVelocities = _state.currentVelocities;
      var lastIdealStyles = _state.lastIdealStyles;
      var lastIdealVelocities = _state.lastIdealVelocities;

      var someDirty = false;
      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i];
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              someDirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
          }
        }
      }

      if (someDirty) {
        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        var destStyles = _this.props.styles(_this.state.lastIdealStyles);

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyles = [];
        var newLastIdealVelocities = [];
        var newCurrentStyles = [];
        var newCurrentVelocities = [];

        for (var i = 0; i < destStyles.length; i++) {
          var destStyle = destStyles[i];
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }

            var styleValue = destStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  StaggeredMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  };

  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  StaggeredMotion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return StaggeredMotion;
})(_react2['default'].Component);

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

// after checking for unreadPropStyles != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)
});

unwrapExports(StaggeredMotion_1);

var mergeDiff_1 = createCommonjsModule(function (module, exports) {
// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements
exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care
});

unwrapExports(mergeDiff_1);

var TransitionMotion_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _mapToZero2 = _interopRequireDefault(mapToZero_1);



var _stripStyle2 = _interopRequireDefault(stripStyle_1);



var _stepper4 = _interopRequireDefault(stepper_1);



var _mergeDiff2 = _interopRequireDefault(mergeDiff_1);



var _performanceNow2 = _interopRequireDefault(performanceNow);



var _raf2 = _interopRequireDefault(raf_1);



var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(propTypes);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = (function (_React$Component) {
  _inherits(TransitionMotion, _React$Component);

  _createClass(TransitionMotion, null, [{
    key: 'propTypes',
    value: {
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
      })),
      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
      }))]).isRequired,
      children: _propTypes2['default'].func.isRequired,
      willEnter: _propTypes2['default'].func,
      willLeave: _propTypes2['default'].func,
      didLeave: _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    },
    enumerable: true
  }]);

  function TransitionMotion(props) {
    var _this = this;

    _classCallCheck(this, TransitionMotion);

    _React$Component.call(this, props);
    this.unmounting = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var mergedPropsStyles = _mergeAndSync[0];
      var currentStyles = _mergeAndSync[1];
      var currentVelocities = _mergeAndSync[2];
      var lastIdealStyles = _mergeAndSync[3];
      var lastIdealVelocities = _mergeAndSync[4];

      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i].style;
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              mergedPropsStyles[i] = {
                key: mergedPropsStyles[i].key,
                data: mergedPropsStyles[i].data,
                style: _extends({}, mergedPropsStyles[i].style)
              };
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
            mergedPropsStyles[i].style[key] = styleValue;
          }
        }
      }

      // unlike the other 2 components, we can't detect staleness and optionally
      // opt out of setState here. each style object's data might contain new
      // stuff we're not/cannot compare
      _this.setState({
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        mergedPropsStyles: mergedPropsStyles,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities
      });
    };

    this.startAnimationIfNecessary = function () {
      if (_this.unmounting) {
        return;
      }

      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // https://github.com/chenglou/react-motion/pull/420
        // > if execution passes the conditional if (this.unmounting), then
        // executes async defaultRaf and after that component unmounts and after
        // that the callback of defaultRaf is called, then setState will be called
        // on unmounted component.
        if (_this.unmounting) {
          return;
        }

        var propStyles = _this.props.styles;
        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

        var newMergedPropsStyles = _mergeAndSync2[0];
        var newCurrentStyles = _mergeAndSync2[1];
        var newCurrentVelocities = _mergeAndSync2[2];
        var newLastIdealStyles = _mergeAndSync2[3];
        var newLastIdealVelocities = _mergeAndSync2[4];

        for (var i = 0; i < newMergedPropsStyles.length; i++) {
          var newMergedPropsStyle = newMergedPropsStyles[i].style;
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in newMergedPropsStyle) {
            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
              continue;
            }

            var styleValue = newMergedPropsStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = newLastIdealStyles[i][key];
              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities,
          mergedPropsStyles: newMergedPropsStyles
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  TransitionMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync3 = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync3[0];
    var currentStyles = _mergeAndSync3[1];
    var currentVelocities = _mergeAndSync3[2];
    var lastIdealStyles = _mergeAndSync3[3];
    var lastIdealVelocities = _mergeAndSync3[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  };

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)

  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  TransitionMotion.prototype.render = function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return TransitionMotion;
})(_react2['default'].Component);

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400
});

unwrapExports(TransitionMotion_1);

var presets = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];
});

unwrapExports(presets);

var spring_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _presets2 = _interopRequireDefault(presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];
});

unwrapExports(spring_1);

var reorderKeys_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (process.env.NODE_ENV === 'development') {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];
});

unwrapExports(reorderKeys_1);

var reactMotion = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }



exports.Motion = _interopRequire(Motion_1);



exports.StaggeredMotion = _interopRequire(StaggeredMotion_1);



exports.TransitionMotion = _interopRequire(TransitionMotion_1);



exports.spring = _interopRequire(spring_1);



exports.presets = _interopRequire(presets);



exports.stripStyle = _interopRequire(stripStyle_1);

// deprecated, dummy warning function



exports.reorderKeys = _interopRequire(reorderKeys_1);
});

unwrapExports(reactMotion);
var reactMotion_1 = reactMotion.Motion;
var reactMotion_2 = reactMotion.StaggeredMotion;
var reactMotion_3 = reactMotion.TransitionMotion;
var reactMotion_4 = reactMotion.spring;
var reactMotion_5 = reactMotion.presets;
var reactMotion_6 = reactMotion.stripStyle;
var reactMotion_7 = reactMotion.reorderKeys;

var BORDER_WIDTH = 4;

var VALUE_DEFAULT = 1;
var SIZE_DEFAULT = 80;
var LABEL_DEFAULT = function LABEL_DEFAULT(value) {
  return Math.round(value * 100) + '%';
};

var CircleGraph = function CircleGraph(_ref) {
  var value = _ref.value,
      label = _ref.label,
      size = _ref.size;

  var length = Math.PI * 2 * (size - BORDER_WIDTH);
  var radius = (size - BORDER_WIDTH) / 2;
  return React.createElement(
    reactMotion_1,
    {
      defaultStyle: { progressValue: 0 },
      style: { progressValue: reactMotion_4(value, spring('slow')) }
    },
    function (_ref2) {
      var progressValue = _ref2.progressValue;
      return React.createElement(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 ' + size + ' ' + size,
          xmlns: 'http://www.w3.org/2000/svg'
        },
        React.createElement(CircleBase, { cx: size / 2, cy: size / 2, r: radius }),
        React.createElement(CircleValue, {
          cx: size / 2,
          cy: size / 2,
          r: radius,
          style: {
            strokeDasharray: length,
            strokeDashoffset: length - length * progressValue / 2,
            strokeWidth: BORDER_WIDTH
          }
        }),
        React.createElement(
          Label,
          { x: '50%', y: '50%' },
          label(Math.min(value, Math.max(0, progressValue)))
        )
      );
    }
  );
};

CircleGraph.defaultProps = {
  value: VALUE_DEFAULT,
  size: SIZE_DEFAULT,
  label: LABEL_DEFAULT
};

var CircleBase = styled.circle.withConfig({
  displayName: 'CircleGraph__CircleBase'
})(['fill:none;stroke:#6d777b;opacity:0.3;']);

var CircleValue = styled.circle.withConfig({
  displayName: 'CircleGraph__CircleValue'
})(['fill:none;transform:rotate(270deg);transform-origin:50% 50%;stroke:#21c1e7;']);

var Label = styled.text.withConfig({
  displayName: 'CircleGraph__Label'
})(['fill:#000;font-size:16px;font-weight:600;dominant-baseline:middle;alignment-baseline:middle;text-anchor:middle;']);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ClickOutComponent = function (_React$Component) {
  _inherits(ClickOutComponent, _React$Component);

  function ClickOutComponent() {
    _classCallCheck(this, ClickOutComponent);

    return _possibleConstructorReturn(this, (ClickOutComponent.__proto__ || Object.getPrototypeOf(ClickOutComponent)).call(this));
  }

  _createClass(ClickOutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var elTouchIsClick = true;
      var documentTouchIsClick = true;
      var el = reactDom.findDOMNode(this);

      self.__documentTouchStarted = function (e) {
        el.removeEventListener('click', self.__elementClicked);
        document.removeEventListener('click', self.__documentClicked);
      };

      self.__documentTouchMoved = function (e) {
        documentTouchIsClick = false;
      };

      self.__documentTouchEnded = function (e) {
        if (documentTouchIsClick) self.__documentClicked(e);
        documentTouchIsClick = true;
      };

      self.__documentClicked = function (e) {
        if ((e.__clickedElements || []).indexOf(el) !== -1) return;

        var clickOutHandler = self.onClickOut || self.props.onClickOut;
        if (!clickOutHandler) {
          return console.warn('onClickOut is not defined.');
        }

        clickOutHandler.call(self, e);
      };

      self.__elementTouchMoved = function (e) {
        elTouchIsClick = false;
      };

      self.__elementTouchEnded = function (e) {
        if (elTouchIsClick) self.__elementClicked(e);
        elTouchIsClick = true;
      };

      self.__elementClicked = function (e) {
        e.__clickedElements = e.__clickedElements || [];
        e.__clickedElements.push(el);
      };

      setTimeout(function () {
        if (self.__unmounted) return;
        self.toggleListeners('addEventListener');
      }, 0);
    }
  }, {
    key: 'toggleListeners',
    value: function toggleListeners(listenerMethod) {
      var el = reactDom.findDOMNode(this);

      el[listenerMethod]('touchmove', this.__elementTouchMoved);
      el[listenerMethod]('touchend', this.__elementTouchEnded);
      el[listenerMethod]('click', this.__elementClicked);

      document[listenerMethod]('touchstart', this.__documentTouchStarted);
      document[listenerMethod]('touchmove', this.__documentTouchMoved);
      document[listenerMethod]('touchend', this.__documentTouchEnded);
      document[listenerMethod]('click', this.__documentClicked);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.toggleListeners('removeEventListener');
      this.__unmounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.children) ? React.createElement(
        'div',
        null,
        this.props.children
      ) : React.Children.only(this.props.children);
    }
  }]);

  return ClickOutComponent;
}(React.Component);

var reactOnclickout = ClickOutComponent;

/**
 * Re-maps a number from one range to another.
 *
 * In the example above, the number '25' is converted from a value in the range
 * 0..100 into a value that ranges from the left edge (0) to the right edge
 * (width) of the screen. Numbers outside the range are not clamped to 0 and 1,
 * because out-of-range values are often intentional and useful.
 *
 * From Processing.js
 *
 * @param {Number} value        The incoming value to be converted
 * @param {Number} istart       Lower bound of the value's current range
 * @param {Number} istop        Upper bound of the value's current range
 * @param {Number} ostart       Lower bound of the value's target range
 * @param {Number} ostop        Upper bound of the value's target range
 * @returns {Number}
 */


/**
 * Normalizes a number from another range into a value between 0 and 1.
 *
 * Identical to map(value, low, high, 0, 1)
 * Numbers outside the range are not clamped to 0 and 1, because out-of-range
 * values are often intentional and useful.
 *
 * From Processing.js
 *
 * @param {Number} aNumber    The incoming value to be converted
 * @param {Number} low        Lower bound of the value's current range
 * @param {Number} high       Upper bound of the value's current range
 * @returns {Number}
 */


/**
 * Calculates a number between two numbers at a specific increment. The
 * progress parameter is the amount to interpolate between the two values where
 * 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is
 * half-way in between, etc. The lerp function is convenient for creating
 * motion along a straight path and for drawing dotted lines.
 *
 * From Processing.js
 *
 * @param {Number} progress     between 0.0 and 1.0
 * @param {Number} value1       first value
 * @param {Number} value2       second value
 * @returns {Number}
 */
function lerp(progress, value1, value2) {
  return (value2 - value1) * progress + value1;
}

/**
 * Constrains a value to not exceed a maximum and minimum value.
 *
 * From Processing.js
 *
 * @param {Number} value   the value to constrain
 * @param {Number} value   minimum limit
 * @param {Number} value   maximum limit
 * @returns {Number}
 */


/**
 * Returns a random integer between min (included) and max (excluded)
 * Note: Using Math.round() would give a non-uniform distribution
 *
 * From Mozilla MDN
 *
 * @param {Number} min    The minimum number (included)
 * @param {Number} max    The maximum number (excluded)
 * @returns {Number}
 */


/**
 * Random number between two values.
 *
 * From Mozilla MDN
 *
 * @param {Number} min The minimum number (included)
 * @param {Number} max The maximum number (excluded)
 * @returns {Number}
 */

var NON_BREAKING_SPACE$1 = '\xa0';

var accent = theme.accent;
var contentBackgroundActive = theme.contentBackgroundActive;


var StyledDropDownItem = styled.div.attrs({ tabIndex: '0' }).withConfig({
  displayName: 'DropDownItem__StyledDropDownItem'
})(['position:relative;padding:8px 15px;cursor:pointer;outline:0;&:after{content:\'\';opacity:0;position:absolute;z-index:2;top:0;left:0;right:0;bottom:0;margin:-1px -2px;border:2px solid ', ';transition:all 100ms ease-in-out;}&:active{background-color:', ';}&:hover,&:focus{color:', ';}&:focus:after{opacity:', ';}'], accent, contentBackgroundActive, accent, function (_ref) {
  var displayFocus = _ref.displayFocus;
  return displayFocus ? 1 : 0;
});

var DropDownItem = function (_React$Component) {
  inherits(DropDownItem, _React$Component);

  function DropDownItem() {
    var _ref2;

    var _temp, _this, _ret;

    classCallCheck(this, DropDownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = DropDownItem.__proto__ || Object.getPrototypeOf(DropDownItem)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      pressed: false,
      displayFocus: false
    }, _this.handleActivate = function (event) {
      var keyboard = event.type === 'keydown';
      if (keyboard && event.keyCode !== 13) {
        return;
      }
      _this.props.onActivate(_this.props.index, { keyboard: keyboard });
    }, _this.handleMouseDown = function () {
      _this.setState({ pressed: true });
    }, _this.handleMouseUp = function () {
      _this.setState({ pressed: false });
    }, _this.handleFocus = function () {
      _this.setState({ displayFocus: !_this.state.pressed });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DropDownItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          mainRef = _props.mainRef,
          active = _props.active;
      var displayFocus = this.state.displayFocus;

      return React.createElement(
        StyledDropDownItem,
        {
          innerRef: mainRef,
          className: className,
          active: active,
          displayFocus: displayFocus,
          onClick: this.handleActivate,
          onKeyDown: this.handleActivate,
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onFocus: this.handleFocus
        },
        children
      );
    }
  }]);
  return DropDownItem;
}(React.Component);

DropDownItem.defaultProps = {
  children: NON_BREAKING_SPACE$1,
  mainRef: function mainRef() {},
  className: ''
};

var arrow = "data:image/svg+xml,%3Csvg%20width%3D%229%22%20height%3D%225%22%20viewBox%3D%220%200%209%205%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h8.36L4.18%204.18z%22%20fill%3D%22%23B3B3B3%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var NON_BREAKING_SPACE = '\xa0';

var contentBackground$1 = theme.contentBackground;
var contentBorder$1 = theme.contentBorder;
var textPrimary$1 = theme.textPrimary;


var StyledDropDown = styled.div.withConfig({
  displayName: 'DropDown__StyledDropDown'
})(['position:relative;display:', ';flex-direction:column;color:', ';white-space:nowrap;box-shadow:0 4px 4px 0 rgba(0,0,0,0.03);', ';&:focus{outline:0;}'], function (_ref) {
  var wide = _ref.wide;
  return wide ? 'flex' : 'inline-flex';
}, textPrimary$1, unselectable);

var DropDownItems = styled.div.withConfig({
  displayName: 'DropDown__DropDownItems'
})(['display:', ';min-width:', ';padding:8px 0;position:absolute;z-index:2;top:calc(100% - 1px);color:', ';background:', ';border:1px solid ', ';box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;list-style:none;'], function (_ref2) {
  var opened = _ref2.opened;
  return opened ? 'block' : 'none';
}, function (_ref3) {
  var wide = _ref3.wide;
  return wide ? '100%' : '0';
}, textPrimary$1, contentBackground$1, contentBorder$1);

var DropDownActiveItem = getPublicUrl(styled(DropDownItem).withConfig({
  displayName: 'DropDown__DropDownActiveItem'
})(['padding-right:40px;background:', ' url(', ') no-repeat calc(100% - 15px) 50%;border:1px solid ', ';border-radius:3px;&:hover,&:focus{color:inherit;}&:active{color:', ';}'], contentBackground$1, styledPublicUrl(arrow), contentBorder$1, textPrimary$1));

var DropDown = function (_React$Component) {
  inherits(DropDown, _React$Component);

  function DropDown() {
    var _ref4;

    var _temp, _this, _ret;

    classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref4 = DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _this.handleToggle = function () {
      _this.setState({ opened: !_this.state.opened });
    }, _this.handleClose = function () {
      _this.setState({ opened: false });
    }, _this.handleItemActivate = function (index, _ref5) {
      var keyboard = _ref5.keyboard;

      _this.props.onChange(index);
      _this.setState({ opened: false });
      if (_this.activeItemElt && keyboard) {
        _this.activeItemElt.focus();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DropDown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          active = _props.active,
          wide = _props.wide;
      var opened = this.state.opened;

      var activeItem = items[active] || items[0];
      return React.createElement(
        reactOnclickout,
        { onClickOut: this.handleClose },
        React.createElement(
          StyledDropDown,
          { wide: wide },
          React.createElement(
            DropDownActiveItem,
            {
              onActivate: this.handleToggle,
              mainRef: function mainRef(el) {
                return _this2.activeItemElt = el;
              }
            },
            activeItem
          ),
          React.createElement(
            reactMotion_1,
            {
              style: {
                openProgress: reactMotion_4(Number(opened), spring('normal')),
                closeProgress: reactMotion_4(Number(opened), spring('fast'))
              }
            },
            function (_ref6) {
              var openProgress = _ref6.openProgress,
                  closeProgress = _ref6.closeProgress;

              var scale = opened ? lerp(openProgress, 0.98, 1) : 1;
              return React.createElement(
                DropDownItems,
                {
                  role: 'listbox',
                  opened: openProgress > 0,
                  wide: wide,
                  style: {
                    transform: 'scale(' + scale + ',' + scale + ')',
                    opacity: opened ? openProgress : closeProgress
                  }
                },
                items.length ? items.map(function (item, i) {
                  return React.createElement(
                    DropDownItem,
                    {
                      role: 'option',
                      key: i,
                      index: i,
                      active: i === active,
                      onActivate: _this2.handleItemActivate
                    },
                    item
                  );
                }) : NON_BREAKING_SPACE
              );
            }
          )
        )
      );
    }
  }]);
  return DropDown;
}(React.Component);

DropDown.defaultProps = {
  items: [],
  active: 0,
  wide: false,
  onChange: function onChange() {}
};

var StyledText = styled.p.withConfig({
  displayName: 'Text__StyledText'
})(['color:', ';', ';', ';', ';'], theme.textPrimary, function (_ref) {
  var size = _ref.size,
      weight = _ref.weight;
  return font({ size: size, weight: weight });
}, function (_ref2) {
  var smallcaps = _ref2.smallcaps;

  if (!smallcaps) return '';
  return '\n      text-transform: lowercase;\n      font-variant: small-caps;\n    ';
}, function (_ref3) {
  var color = _ref3.color;

  return color ? 'color: ' + color : '';
});

var StyledBlock = StyledText.withComponent('div');
var StyledInline = StyledText.withComponent('span');

var StyledH1 = StyledText.withComponent('h1');
var StyledH2 = StyledText.withComponent('h2');
var StyledH3 = StyledText.withComponent('h3');
var StyledH4 = StyledText.withComponent('h4');
var StyledH5 = StyledText.withComponent('h5');
var StyledH6 = StyledText.withComponent('h6');
var styledHeadings = [StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6];

var getStyledComponent = function getStyledComponent(_ref4) {
  var heading = _ref4.heading,
      _ref4$block = _ref4.block,
      block = _ref4$block === undefined ? false : _ref4$block,
      _ref4$inline = _ref4.inline,
      inline = _ref4$inline === undefined ? false : _ref4$inline;

  if (block) return StyledBlock;
  if (inline) return StyledInline;
  if (heading) {
    return styledHeadings[Math.max(1, Math.min(6, parseInt(heading, 10))) - 1] || StyledText;
  }
  return StyledText;
};

var DefaultProps$2 = {
  block: false,
  inline: false,
  smallcaps: false,
  heading: -1,
  size: '',
  weight: '',
  color: ''
};

var Text = function Text(_ref5) {
  var block = _ref5.block,
      inline = _ref5.inline,
      heading = _ref5.heading,
      smallcaps = _ref5.smallcaps,
      size = _ref5.size,
      weight = _ref5.weight,
      color = _ref5.color,
      children = _ref5.children,
      props = objectWithoutProperties(_ref5, ['block', 'inline', 'heading', 'smallcaps', 'size', 'weight', 'color', 'children']);

  var StyledComp = getStyledComponent({ inline: inline, block: block, heading: heading });
  return React.createElement(StyledComp, _extends({}, props, {
    weight: weight,
    size: size,
    smallcaps: smallcaps,
    color: color,
    children: children
  }));
};

Text.defaultProps = DefaultProps$2;

var StyledField = styled.div.withConfig({
  displayName: 'Field__StyledField'
})(['margin-bottom:20px;']);

var Field = function Field(_ref) {
  var children = _ref.children,
      label = _ref.label,
      props = objectWithoutProperties(_ref, ['children', 'label']);
  return React.createElement(
    StyledField,
    props,
    React.createElement(
      'label',
      null,
      React.createElement(
        Text,
        { color: theme.textSecondary, smallcaps: true },
        label
      ),
      children
    )
  );
};

var StyledInput = styled.input.withConfig({
  displayName: 'TextInput__StyledInput'
})(['', ';width:', ';padding:5px 10px;background:', ';border:1px solid ', ';border-radius:3px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.06);color:', ';appearance:none;&:focus{outline:none;border-color:', ';}&:read-only{color:transparent;text-shadow:0 0 0 ', ';}'], font({ size: 'small', weight: 'normal' }), function (_ref) {
  var wide = _ref.wide;
  return wide ? '100%' : 'auto';
}, theme.contentBackground, theme.contentBorder, theme.textPrimary, theme.contentBorderActive, theme.textSecondary);

var TextInput = function TextInput(props) {
  return React.createElement(StyledInput, props);
};
TextInput.defaultProps = {
  type: 'text'
};

TextInput.Number = function (props) {
  return React.createElement(StyledInput, _extends({ type: 'number' }, props));
};

var logo = "feef84fc525d4290.svg";

var iconTwitter = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2230%22%20viewBox%3D%220%200%2015%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20fill%3D%22%23717171%22%2F%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M13.56%2010.558a5.42%205.42%200%200%201-1.557.419%202.7%202.7%200%200%200%201.189-1.49%205.323%205.323%200%200%201-1.716.652%202.697%202.697%200%200%200-1.975-.853%202.702%202.702%200%200%200-2.704%202.703c0%20.21.025.419.067.62a7.685%207.685%200%200%201-5.575-2.83%202.702%202.702%200%200%200%20.837%203.616%202.724%202.724%200%200%201-1.222-.342v.033c0%201.314.93%202.402%202.168%202.653a2.858%202.858%200%200%201-.712.092c-.175%200-.343-.016-.51-.041a2.708%202.708%200%200%200%202.528%201.875A5.414%205.414%200%200%201%201.02%2018.82a5.62%205.62%200%200%201-.653-.034A7.64%207.64%200%200%200%204.52%2020c4.972%200%207.693-4.118%207.693-7.693%200-.117%200-.234-.009-.351a5.81%205.81%200%200%200%201.356-1.398z%22%2F%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var iconMedium = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2230%22%20viewBox%3D%220%200%2016%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20fill%3D%22%23717171%22%2F%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M4.997%2010.667a.117.117%200%200%200-.025-.042L.695%208.482C.578%208.424.46%208.357.326%208.357.1%208.357%200%208.549%200%208.758v9.543c0%20.25.184.552.419.67l3.892%201.95a.612.612%200%200%200%20.276.067c.285%200%20.41-.243.41-.503v-9.818zm.536.845v5.023l4.47%202.226-4.47-7.249zm9.467.15l-4.52%207.342%203.691%201.841a.793.793%200%200%200%20.394.11c.276%200%20.435-.193.435-.47v-8.822zm-.025-1.004a.056.056%200%200%200-.034-.05l-4.528-2.26a.488.488%200%200%200-.218-.05.505.505%200%200%200-.435.234l-2.712%204.412%203.264%205.307c.335-.536%204.663-7.559%204.663-7.593z%22%2F%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var iconRocket = "data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2215%22%20viewBox%3D%220%200%2018%2015%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M18%207.488c0-.885-.27-1.734-.804-2.523-.479-.708-1.15-1.336-1.994-1.864-1.63-1.02-3.773-1.581-6.033-1.581-.755%200-1.5.062-2.221.186A7.358%207.358%200%200%200%205.42.634C2.458-.773%200%20.6%200%20.6s2.285%201.838%201.913%203.45C.891%205.044.337%206.24.337%207.488v.024c0%201.247.554%202.444%201.576%203.437C2.285%2012.561%200%2014.4%200%2014.4s2.458%201.374%205.421-.033a7.355%207.355%200%200%200%201.527-1.072c.722.124%201.466.186%202.22.186%202.26%200%204.403-.561%206.034-1.581.844-.528%201.515-1.156%201.994-1.864.534-.789.804-1.638.804-2.523v-.025zm-8.828%204.864c-.951%200-1.862-.108-2.704-.304-.855%201.007-2.737%202.409-4.565%201.956.594-.626%201.475-1.683%201.287-3.424-1.096-.835-1.754-1.903-1.754-3.068%200-2.673%203.464-4.84%207.736-4.84s7.736%202.167%207.736%204.84-3.464%204.84-7.736%204.84zm1.028-4.84c0%20.556-.46%201.007-1.028%201.007a1.017%201.017%200%200%201-1.027-1.007c0-.556.46-1.006%201.027-1.006.568%200%201.028.45%201.028%201.006zm2.545-1.006c-.567%200-1.027.45-1.027%201.006s.46%201.007%201.027%201.007c.568%200%201.028-.451%201.028-1.007%200-.556-.46-1.006-1.028-1.006zm-7.146%200c-.567%200-1.027.45-1.027%201.006s.46%201.007%201.027%201.007c.568%200%201.028-.451%201.028-1.007%200-.556-.46-1.006-1.028-1.006z%22%20fill%3D%22%23717171%22%2F%3E%3C%2Fsvg%3E";

var medium$1 = function medium(css$$1) {
  return breakpoint('medium', css$$1);
};
var large$1 = function large(css$$1) {
  return breakpoint('large', css$$1);
};

var StyledFooter = getPublicUrl(styled.footer.withConfig({
  displayName: 'Footer__StyledFooter'
})(['padding:60px 20px 35px;font-size:15px;color:grey;background:', ';', ';.main{display:flex;align-items:center;flex-direction:column;margin:0 auto;}.logo{margin-bottom:60px;}.menus{display:flex;}.menu-1{margin-right:35px;}.menu-2{margin-right:35px;}.menu-3{margin-right:35px;}.social-links{display:flex;justify-content:center;margin-top:30px;}.social-links li{display:flex;margin-left:75px;}.icon{overflow:hidden;text-indent:-9999px;padding-left:30px;background-repeat:no-repeat;background-position:50% 50%;}li{list-style:none;line-height:2;}a{text-decoration:none;}strong a{color:', ';font-weight:400;}.icon.twitter{background-image:url(', ');}.icon.medium{background-image:url(', ');}.icon.rocket{background-image:url(', ');}', ';', ';'], colors.Rain['Shark'], function (_ref) {
  var compact = _ref.compact;

  if (!compact) return '';
  return '\n      padding-top: 30px;\n      padding-bottom: 30px;\n      .icon {\n        padding-left: 25px;\n      }\n    ';
}, themeDark.accent, styledPublicUrl(iconTwitter), styledPublicUrl(iconMedium), styledPublicUrl(iconRocket), medium$1('\n    padding-bottom: 70px;\n\n    .all-links {\n      display: flex;\n      justify-content: space-between;\n    }\n    .social-links {\n      display: block;\n      margin-top: 0;\n      margin-left: 120px;\n    }\n    .social-links li {\n      display: block;\n    }\n    .icon {\n      overflow: visible;\n      text-indent: 0;\n      background-position: 0 50%;\n    }\n  '), large$1('\n    padding-top: 90px;\n    .main {\n      flex-direction: row;\n      max-width: ' + grid(12, 11) + 'px;\n    }\n    .logo {\n      width: ' + grid(3, 3) + 'px;\n      flex-shrink: 0;\n    }\n    .menus {\n      display: flex;\n      width: ' + grid(6, 6) + 'px;\n    }\n    .menu-1 {\n      width: ' + grid(2, 2) + 'px;\n      margin-right: 0;\n    }\n    .menu-2 {\n      width: ' + grid(2, 2) + 'px;\n    }\n    .menu-3 {\n      width: ' + grid(2, 2) + 'px;\n    }\n    .social-links {\n      width: ' + grid(3) + 'px;\n      margin-left: 0;\n    }\n    li {\n      margin: 0 0 10px;\n      line-height: 1.5;\n    }\n  ')));

var DefaultProps$3 = {
  compact: false
};

var Footer = function Footer(_ref2) {
  var compact = _ref2.compact,
      publicUrl = _ref2.publicUrl;
  return React.createElement(
    StyledFooter,
    { compact: compact },
    React.createElement(
      'div',
      { className: 'main' },
      React.createElement(
        'div',
        { className: 'logo' },
        React.createElement('img', { src: publicUrl + logo, width: '158', height: '50', alt: 'Aragon' })
      ),
      React.createElement(
        'div',
        { className: 'all-links' },
        !compact && React.createElement(
          'div',
          { className: 'menus' },
          React.createElement(
            'nav',
            { className: 'menu-1' },
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://aragon.one/core' },
                  'Core'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://aragon.one/network' },
                  'Network'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://aragon.one/foundation' },
                  'Foundation'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://aragon.one/about' },
                  'About'
                )
              )
            )
          ),
          React.createElement(
            'nav',
            { className: 'menu-2' },
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://wiki.aragon.one', target: '_blank' },
                  'Wiki'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://github.com/aragon', target: '_blank' },
                  'Code'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://aragon.one/join' },
                  'Join us'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://blog.aragon.one/', target: '_blank' },
                  'Blog'
                )
              )
            )
          ),
          React.createElement(
            'nav',
            { className: 'menu-3' },
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'strong',
                  null,
                  React.createElement(
                    'a',
                    { href: 'https://app.aragon.one/', target: '_blank' },
                    'Try Aragon Core 0.5'
                  )
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'mailto:contact@aragon.one' },
                  'Contact Us'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'mailto:media@aragon.one' },
                  'Media/Press Inquiries'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://wiki.aragon.one/press/press-kit/', target: '_blank' },
                  'Press Kit'
                )
              )
            )
          )
        ),
        React.createElement(
          'ul',
          { className: 'social-links' },
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: 'https://twitter.com/AragonProject', className: 'icon twitter', target: '_blank' },
              'Twitter'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: 'https://blog.aragon.one/', className: 'icon medium', target: '_blank' },
              'Medium'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: 'https://aragon.chat/', className: 'icon rocket', target: '_blank' },
              'Community'
            )
          )
        )
      )
    )
  );
};

Footer.defaultProps = DefaultProps$3;

var Footer$1 = getPublicUrl(Footer);

var logo$1 = "data:image/svg+xml,%3Csvg%20width%3D%22200%22%20height%3D%22183%22%20viewBox%3D%220%200%20200%20183%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2240.59%25%22%20y1%3D%22172.164%25%22%20x2%3D%22134.278%25%22%20y2%3D%22-209.701%25%22%20id%3D%22a%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22125.497%25%22%20x2%3D%2263.448%25%22%20y2%3D%22-8.979%25%22%20id%3D%22b%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2272.854%25%22%20y1%3D%22157.035%25%22%20x2%3D%2272.854%25%22%20y2%3D%2250%25%22%20id%3D%22c%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22140.325%25%22%20x2%3D%22122.689%25%22%20y2%3D%22-73.565%25%22%20id%3D%22d%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%2295.2%25%22%20x2%3D%2276.121%25%22%20y2%3D%22-21.873%25%22%20id%3D%22e%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M99.9%200l-2.912.915C87.782%203.887%2039.932%2020.343%201.893%2052.57L0%2054.17l.465%202.626c.784%204.268%205.341%2026.823%2018.048%2051.836%208.171%2016.031%2018.16%2030.102%2029.693%2041.824%2014.051%2014.241%2030.459%2024.802%2048.78%2031.396l2.972%201.05%201.937-.753%201.03-.364c18.209-6.553%2034.615-17.112%2048.764-31.388%2011.467-11.593%2021.458-25.666%2029.695-41.827%2012.782-25.102%2017.587-48.377%2018.076-52.006h.005l.456-2.592-2.056-1.468C159.836%2020.318%20112.047%203.884%20102.87.923L99.9%200z%22%20fill%3D%22url%28%23a%29%22%2F%3E%3Cpath%20d%3D%22M85.23%2043.803c-.061%200-28.567%209.109-28.567%2034.02%200%2024.912%2027.515%2036.995%2047.778%2036.995%2011.021%200%2020.075-3.208%2026.047-6.134.77-3.531%203.569-11.895%2012.83-11.958%201.651-.064%203.2.246%204.502.99%206.197%203.346%202.17%209.604%202.17%209.604a13.943%2013.943%200%200%200%201.416-.306c7.448-2.006%2015.84-10.525%2014.385-24.791-1.167-11.44-11.726-18.69-16.862-21.57-1.681-.944-2.782-1.42-2.782-1.42.186-1.162.246-2.061.246-2.751%200-.13-.002-.251-.006-.365v-1.34c-26.952-16.35-49.76-18.868-61.01-18.868-4.859%200-7.582.457-7.582.457l7.436%207.437zm56.95%2015.491s-3.656-1.177-7.373-1.673c-1.86%201.921-3.471%202.727-3.967%202.975l-.124.124c-10.844-2.293-14.748-7.87-14.748-7.87%2010.225-.062%2019.458%202.354%2026.212%206.444z%22%20fill%3D%22url%28%23b%29%22%20opacity%3D%22.401%22%2F%3E%3Cpath%20d%3D%22M152.281%2074.725c0%208.118-3.345%2015.616-9.047%2021.689l-.271.312.457-.002c1.549-.062%203.098.248%204.4.991%206.197%203.347%202.17%209.605%202.17%209.605%207.745-1.239%2017.35-9.914%2015.8-25.097-1.166-11.44-11.725-18.69-16.86-21.57a31.046%2031.046%200%200%201%203.351%2014.072%22%20fill%3D%22url%28%23c%29%22%20opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M26.857%20103.168c0%201.006.039%201.962.095%202.897%207.669%2014.75%2016.894%2027.635%2027.446%2038.305%2013.159%2013.278%2028.47%2023.13%2045.52%2029.29%2016.986-6.139%2032.299-16.012%2045.521-29.353a141.977%20141.977%200%200%200%2011.21-12.826c-28.27-2.032-26.553-19.203-26.553-19.203%200-.681%200-1.363.124-2.045%200%200%20.063-.603.269-1.55-5.972%202.927-15.026%206.135-26.048%206.135-20.263%200-47.778-12.083-47.778-36.995%200-24.911%2028.506-34.02%2028.506-34.02l-.015-.005a29.86%2029.86%200%200%200-2.216-.058c-31.17%201.116-56.081%2027.267-56.081%2059.428%22%20fill%3D%22url%28%23d%29%22%20opacity%3D%22.453%22%2F%3E%3Cpath%20d%3D%22M99.9%200l-2.912.915C87.782%203.887%2039.932%2020.343%201.893%2052.57L0%2054.17l.465%202.626c.784%204.268%205.341%2026.823%2018.048%2051.836%208.171%2016.031%2018.16%2030.102%2029.693%2041.824%2014.051%2014.241%2030.459%2024.802%2048.78%2031.396l2.972%201.05%201.937-.753%201.03-.364c18.209-6.553%2034.615-17.112%2048.764-31.388%2011.467-11.593%2021.458-25.666%2029.695-41.827%2012.782-25.102%2017.587-48.377%2018.076-52.006h.005l.456-2.592-2.056-1.468C159.836%2020.318%20112.047%203.884%20102.87.923L99.9%200zM54.399%20144.37c-10.861-10.983-20.322-24.306-28.123-39.602C15.523%2083.71%2010.912%2064.732%209.436%2057.59%2045.466%2027.844%2089.521%2012.462%2099.914%209.1c10.445%203.408%2054.72%2018.972%2090.482%2048.489-1.489%207.117-6.123%2026.018-16.836%2047.055-7.843%2015.38-17.305%2028.724-28.12%2039.662-13.223%2013.341-28.536%2023.214-45.522%2029.353-17.05-6.16-32.361-16.012-45.52-29.29z%22%20fill%3D%22url%28%23e%29%22%20opacity%3D%22.127%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var bgLandscape = "data:image/svg+xml,%3Csvg%20width%3D%221440%22%20height%3D%22491%22%20viewBox%3D%220%200%201440%20491%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%22-14.438%25%22%20y1%3D%22107.641%25%22%20x2%3D%2298.443%25%22%20y2%3D%22-54.066%25%22%20id%3D%22b%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20id%3D%22a%22%20d%3D%22M0%200h720v491H0z%22%2F%3E%3ClinearGradient%20x1%3D%2295.341%25%22%20y1%3D%2296.71%25%22%20x2%3D%2237.949%25%22%20y2%3D%228.725%25%22%20id%3D%22d%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20stop-opacity%3D%220%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2225.323%25%22%20y1%3D%2264.209%25%22%20x2%3D%22-177.025%25%22%20y2%3D%22232.498%25%22%20id%3D%22e%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20stop-opacity%3D%220%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2298.443%25%22%20y1%3D%22-54.066%25%22%20x2%3D%22-14.438%25%22%20y2%3D%22107.641%25%22%20id%3D%22g%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20id%3D%22f%22%20d%3D%22M0%200h720v491H0z%22%2F%3E%3ClinearGradient%20x1%3D%22224.819%25%22%20y1%3D%22-159.682%25%22%20x2%3D%2229.43%25%22%20y2%3D%2296.423%25%22%20id%3D%22i%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%220%25%22%20x2%3D%2250%25%22%20y2%3D%2297.636%25%22%20id%3D%22j%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%220%25%22%20x2%3D%22-96.692%25%22%20y2%3D%22190.844%25%22%20id%3D%22k%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20stop-opacity%3D%220%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23C7C7C7%22%20stop-opacity%3D%22.012%22%20offset%3D%221.236%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20transform%3D%22translate%28720%29%22%3E%3Cmask%20id%3D%22c%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22url%28%23b%29%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url%28%23c%29%22%20stroke-linecap%3D%22square%22%3E%3Cpath%20d%3D%22M.5%201l552%20533%22%20stroke%3D%22url%28%23d%29%22%20opacity%3D%22.446%22%20transform%3D%22translate%28132%20-284%29%22%2F%3E%3Cpath%20d%3D%22M429.5%20414.5L805.854%2038.146%22%20stroke%3D%22url%28%23e%29%22%20transform%3D%22translate%28132%20-284%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cmask%20id%3D%22h%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23f%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22url%28%23g%29%22%20xlink%3Ahref%3D%22%23f%22%2F%3E%3Cg%20mask%3D%22url%28%23h%29%22%20stroke-linecap%3D%22square%22%3E%3Cpath%20d%3D%22M.5%20700.5l376.354-376.354%22%20stroke%3D%22url%28%23i%29%22%20transform%3D%22translate%28-347%20-99%29%22%2F%3E%3Cpath%20d%3D%22M162.5%20116l552%20533%22%20stroke%3D%22url%28%23j%29%22%20opacity%3D%22.446%22%20transform%3D%22translate%28-347%20-99%29%22%2F%3E%3Cpath%20d%3D%22M433.5%20376.5L809.854.146%22%20stroke%3D%22url%28%23k%29%22%20opacity%3D%22.446%22%20transform%3D%22translate%28-347%20-99%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var bgPortrait = "data:image/svg+xml,%3Csvg%20width%3D%22768%22%20height%3D%22880%22%20viewBox%3D%220%200%20768%20880%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%22-14.438%25%22%20y1%3D%22107.641%25%22%20x2%3D%2298.443%25%22%20y2%3D%22-54.066%25%22%20id%3D%22b%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20id%3D%22a%22%20d%3D%22M0%200h768v440H0z%22%2F%3E%3ClinearGradient%20x1%3D%2295.341%25%22%20y1%3D%2296.71%25%22%20x2%3D%2237.949%25%22%20y2%3D%228.725%25%22%20id%3D%22d%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20stop-opacity%3D%220%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2225.323%25%22%20y1%3D%2264.209%25%22%20x2%3D%22-177.025%25%22%20y2%3D%22232.498%25%22%20id%3D%22e%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20stop-opacity%3D%220%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2298.443%25%22%20y1%3D%22-54.066%25%22%20x2%3D%22-14.438%25%22%20y2%3D%22107.641%25%22%20id%3D%22g%22%3E%3Cstop%20stop-color%3D%22%230B0B0A%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23464F51%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20id%3D%22f%22%20d%3D%22M0%200h768v440H0z%22%2F%3E%3ClinearGradient%20x1%3D%22224.819%25%22%20y1%3D%22-159.682%25%22%20x2%3D%2229.43%25%22%20y2%3D%2296.423%25%22%20id%3D%22i%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%220%25%22%20x2%3D%2250%25%22%20y2%3D%2297.636%25%22%20id%3D%22j%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%220%25%22%20x2%3D%22-96.692%25%22%20y2%3D%22190.844%25%22%20id%3D%22k%22%3E%3Cstop%20stop-color%3D%22%23C8C8C8%22%20stop-opacity%3D%220%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23C7C7C7%22%20stop-opacity%3D%22.012%22%20offset%3D%221.236%25%22%2F%3E%3Cstop%20stop-color%3D%22%23979797%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20transform%3D%22translate%280%20440%29%22%3E%3Cmask%20id%3D%22c%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22url%28%23b%29%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url%28%23c%29%22%20stroke-linecap%3D%22square%22%3E%3Cpath%20d%3D%22M.5%201l552%20533%22%20stroke%3D%22url%28%23d%29%22%20opacity%3D%22.446%22%20transform%3D%22translate%28180%20-284%29%22%2F%3E%3Cpath%20d%3D%22M429.5%20414.5L805.854%2038.146%22%20stroke%3D%22url%28%23e%29%22%20transform%3D%22translate%28180%20-284%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cmask%20id%3D%22h%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23f%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22url%28%23g%29%22%20xlink%3Ahref%3D%22%23f%22%2F%3E%3Cg%20mask%3D%22url%28%23h%29%22%20stroke-linecap%3D%22square%22%3E%3Cpath%20d%3D%22M.5%20700.5l376.354-376.354%22%20stroke%3D%22url%28%23i%29%22%20transform%3D%22translate%28-347%20-99%29%22%2F%3E%3Cpath%20d%3D%22M162.5%20116l552%20533%22%20stroke%3D%22url%28%23j%29%22%20opacity%3D%22.446%22%20transform%3D%22translate%28-347%20-99%29%22%2F%3E%3Cpath%20d%3D%22M433.5%20376.5L809.854.146%22%20stroke%3D%22url%28%23k%29%22%20opacity%3D%22.446%22%20transform%3D%22translate%28-347%20-99%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var large$2 = function large(css$$1) {
  return breakpoint('large', css$$1);
};

var Main$1 = getPublicUrl(styled.div.withConfig({
  displayName: 'PreFooter__Main'
})(['position:relative;overflow:hidden;background-color:', ';background-repeat:no-repeat;background-position:50% 50%;background-size:cover;background-image:url(', ');', ';'], colors.Rain.Shark, styledPublicUrl(bgPortrait), large$2(css(['background-image:url(', ');'], styledPublicUrl(bgLandscape)))));

var Container = getPublicUrl(styled(Section).attrs({ visual: true }).withConfig({
  displayName: 'PreFooter__Container'
})(['position:relative;z-index:2;padding:0 20px;color:', ';.main{display:flex;flex-direction:column;align-items:center;width:100%;background:url(', ') no-repeat 50% 50%;background-size:140px;', ';}.section{display:flex;flex-direction:column;justify-content:center;width:100%;max-width:', 'px;min-height:400px;height:50%;text-align:center;}.title{margin-bottom:30px;color:', ';font-size:27px;}.desc{font-size:18px;margin-bottom:30px;}.desc:last-child{margin-bottom:0;}.desc a{color:', ';}.email input{width:100%;padding:10px;font-size:15px;border:0;border-radius:3px;background:#fff;}button{font-size:15px;}', ';'], themeDark.textTertiary, styledPublicUrl(logo$1), large$2('background-size: 200px;'), grid(4), themeDark.textPrimary, themeDark.textSecondary, large$2('\n    padding-top: 140px;\n    padding-bottom: 140px;\n\n    .main {\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: flex-start;\n    }\n    .section {\n      min-height: 0;\n      width: ' + (grid(4) + 'px') + ';\n      justify-content: flex-start;\n      text-align: left;\n      padding-top: 0;\n    }\n    .section + .section {\n      text-align: right;\n      padding-bottom: 0;\n    }\n  ')));

var emailFormDefault = function emailFormDefault() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { className: 'title' },
      'Aragon Newsletter'
    ),
    React.createElement(
      'p',
      { className: 'desc' },
      'Follow the progress of Aragon by subscribing to our monthly newsletter'
    ),
    React.createElement(
      'p',
      { className: 'email' },
      React.createElement('input', { type: 'email', placeholder: 'Enter your email' })
    )
  );
};

var DefaultProps$4 = {
  emailForm: emailFormDefault
};

var PreFooter = function PreFooter(_ref) {
  var emailForm = _ref.emailForm;
  return React.createElement(
    Main$1,
    null,
    React.createElement(
      Container,
      null,
      React.createElement(
        'div',
        { className: 'main' },
        React.createElement(
          'section',
          { className: 'section' },
          emailForm
        ),
        React.createElement(
          'section',
          { className: 'section' },
          React.createElement(
            'h1',
            { className: 'title' },
            'Aragon Core Beta'
          ),
          React.createElement(
            'p',
            { className: 'desc' },
            'Try the completely updated',
            React.createElement('br', null),
            ' Aragon Core v0.5 Beta'
          ),
          React.createElement(
            'a',
            { href: 'https://app.aragon.one/', target: '_blank' },
            React.createElement(
              StyledButton,
              { mode: 'strong', wide: true },
              'Try Aragon Core 0.5'
            )
          )
        )
      )
    )
  );
};

PreFooter.defaultProps = DefaultProps$4;

var StyledMenuItem = styled.li.withConfig({
  displayName: 'MenuItem__StyledMenuItem'
})(['display:flex;align-items:stretch;white-space:nowrap;> span{display:flex;align-items:center;padding:0 15px;font-size:15px;color:', ';}a{text-decoration:none;color:', ';}'], function (_ref) {
  var active = _ref.active;
  return active ? theme.accent : theme.textSecondary;
}, function (_ref2) {
  var active = _ref2.active;
  return active ? theme.accent : theme.textSecondary;
});

var DefaultProps$6 = {
  active: false,
  renderLink: function renderLink(_ref3) {
    var url = _ref3.url,
        children = _ref3.children;
    return React.createElement(
      'a',
      { href: url },
      children
    );
  }
};

var MenuItem = function MenuItem(_ref4) {
  var url = _ref4.url,
      label = _ref4.label,
      active = _ref4.active,
      renderLink = _ref4.renderLink;
  return React.createElement(
    StyledMenuItem,
    { active: active },
    React.createElement(
      'span',
      null,
      renderLink({ url: url, children: label })
    )
  );
};

MenuItem.defaultProps = DefaultProps$6;

var close = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20.297%205.64l-6.508%206.508%206.508%206.508-1.64%201.64-6.509-6.507-6.507%206.508L4%2018.657l6.508-6.509L4%205.641%205.64%204l6.508%206.508L18.656%204z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var open = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%2019v-2.352h20V19H2zm0-5.852v-2.296h20v2.296H2zM2%205h20v2.352H2V5z%22%20fill%3D%22%23717171%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var Container$1 = styled.div.withConfig({
  displayName: 'MenuPanel__Container'
})(['min-height:60px;', ';'], unselectable());

var PanelStyles = styled.div.withConfig({
  displayName: 'MenuPanel__PanelStyles'
})(['position:absolute;z-index:3;top:0;right:0;padding-top:70px;line-height:2;font-size:17px;background:', ';a{color:white;text-decoration:none;}'], theme.accent);

var PanelContent = styled.div.withConfig({
  displayName: 'MenuPanel__PanelContent'
})(['padding:0 60px 20px 30px;a{display:block;}']);

var Toggle = styled.a.attrs({ role: 'button' }).withConfig({
  displayName: 'MenuPanel__Toggle'
})(['position:absolute;right:0;z-index:4;height:60px;padding:0 15px;display:flex;align-items:center;cursor:pointer;']);

var Panel = function (_React$Component) {
  inherits(Panel, _React$Component);

  function Panel() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _this.toggle = function () {
      _this.setState({ opened: !_this.state.opened });
    }, _this.close = function () {
      _this.setState({ opened: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Panel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          publicUrl = _props.publicUrl,
          renderLink = _props.renderLink;
      var opened = this.state.opened;

      return React.createElement(
        reactMotion_1,
        {
          style: {
            openProgress: reactMotion_4(Number(opened), spring('fast'))
          }
        },
        function (_ref2) {
          var openProgress = _ref2.openProgress;
          return React.createElement(
            Container$1,
            null,
            React.createElement(
              reactOnclickout,
              { onClickOut: _this2.close },
              React.createElement(
                Toggle,
                { onClick: _this2.toggle },
                React.createElement('img', {
                  alt: '',
                  width: '22',
                  height: '22',
                  src: prefixUrl(opened ? close : open, publicUrl)
                })
              ),
              React.createElement(
                PanelStyles,
                {
                  style: {
                    display: openProgress > 0 ? 'block' : 'none',
                    opacity: openProgress,
                    transform: 'translateY(-' + (1 - openProgress) * 5 + 'px)'
                  }
                },
                React.createElement(
                  PanelContent,
                  null,
                  items.map(function (_ref3) {
                    var _ref4 = slicedToArray(_ref3, 3),
                        url = _ref4[0],
                        label = _ref4[1],
                        active = _ref4[2];

                    return React.createElement(
                      'div',
                      { key: url, onClick: _this2.close },
                      renderLink({
                        url: url,
                        children: label
                      })
                    );
                  })
                )
              )
            )
          );
        }
      );
    }
  }]);
  return Panel;
}(React.Component);

Panel.defaultProps = {
  renderLink: function renderLink(_ref5) {
    var url = _ref5.url,
        children = _ref5.children;
    return React.createElement(
      'a',
      { href: url },
      children
    );
  }
};


var MenuPanel = getPublicUrl(Panel);

var logo$2 = "6a089bdf02f98b6c.svg";

var logoCompact = "f2b90665d4eb28f3.svg";

var logoMinimal = "188027b3d4ea587a.svg";

var Container$2 = styled.span.withConfig({
  displayName: 'Logo__Container'
})(['display:flex;align-items:center;']);

var DefaultProps$7 = {
  compact: false,
  renderLink: function renderLink(_ref) {
    var url = _ref.url,
        children = _ref.children;
    return React.createElement(
      'a',
      { href: url },
      children
    );
  }
};

var Logo = function Logo(_ref2) {
  var compact = _ref2.compact,
      renderLink = _ref2.renderLink,
      publicUrl = _ref2.publicUrl;

  return React.createElement(
    'span',
    { className: 'logo' },
    renderLink({
      url: '/',
      children: React.createElement(
        Container$2,
        null,
        React.createElement(
          BreakPoint,
          { to: 'medium' },
          React.createElement('img', { alt: 'Aragon', src: publicUrl + logoMinimal, height: 40 })
        ),
        React.createElement(
          BreakPoint,
          { from: 'medium', to: 'large' },
          React.createElement('img', { alt: 'Aragon', src: publicUrl + logoMinimal, height: 50 })
        ),
        React.createElement(
          BreakPoint,
          { from: 'large' },
          React.createElement('img', {
            alt: 'Aragon',
            src: publicUrl + (compact ? logoCompact : logo$2),
            height: compact ? 36 : 51
          })
        )
      )
    })
  );
};

Logo.defaultProps = DefaultProps$7;

var Logo$1 = getPublicUrl(Logo);

var medium$2 = function medium(css$$1) {
  return breakpoint('medium', css$$1);
};
var large$3 = function large(css$$1) {
  return breakpoint('large', css$$1);
};

var StyledHeader = styled.div.withConfig({
  displayName: 'Header__StyledHeader'
})(['padding:0 12px;background:', ';.in{display:flex;justify-content:space-between;align-items:stretch;min-height:60px;max-width:1140px;margin:0 auto;}.menu,.buttons{display:flex;align-items:center;}.menu{align-items:stretch;}.logo,.logo a{display:flex;align-items:center;}.title{display:flex;align-items:center;margin-left:40px;}.menu-items{display:flex;align-items:center;}.nav{display:flex;align-items:stretch;list-style:none;margin-left:20px;}.nav ul{display:flex;align-items:stretch;}.button{margin-left:10px;&:first-child{margin:0;}}', ';', ';', ';'], theme.contentBackground, medium$2('\n    .in {\n      min-height: 70px;\n    }\n  '), large$3('\n    .in {\n      min-height: 70px;\n    }\n    .nav {\n      margin-left: 45px;\n    }\n  '), function (_ref) {
  var withTitle = _ref.withTitle;

  if (!withTitle) return '';
  return '\n      .logo {\n        padding-right: 40px;\n        border-right: 1px solid #e8e8e8;\n        padding-top: 6px;\n        padding-bottom: 8px;\n      }\n      .logo img:first-child {\n        margin-right: 10px;\n      }\n    ';
});

var DefaultProps$5 = {
  menuItems: []
};

var Header = function Header(_ref2) {
  var title = _ref2.title,
      menuItems = _ref2.menuItems,
      renderMenuItemLink = _ref2.renderMenuItemLink;
  return React.createElement(
    StyledHeader,
    { withTitle: Boolean(title) },
    React.createElement(
      'div',
      { className: 'in' },
      React.createElement(
        'div',
        { className: 'menu' },
        React.createElement(Logo$1, { compact: Boolean(title), renderLink: renderMenuItemLink }),
        title && React.createElement(
          'div',
          { className: 'title' },
          React.createElement(
            Text,
            { heading: '1', size: 'xlarge' },
            title
          )
        ),
        menuItems.length > 0 && React.createElement(
          'div',
          { className: 'menu-items' },
          React.createElement(
            BreakPoint,
            { to: 'medium' },
            React.createElement(MenuPanel, { items: menuItems, renderLink: renderMenuItemLink })
          ),
          React.createElement(
            BreakPoint,
            { from: 'medium' },
            React.createElement(
              'nav',
              { className: 'nav' },
              React.createElement(
                'ul',
                null,
                menuItems.map(function (item, i) {
                  return React.createElement(MenuItem, {
                    key: i,
                    url: item[0],
                    label: item[1],
                    active: item[2],
                    renderLink: renderMenuItemLink
                  });
                })
              )
            )
          )
        )
      ),
      !title && React.createElement(
        BreakPoint,
        { from: 'medium' },
        React.createElement(
          'div',
          { className: 'buttons' },
          React.createElement(
            'div',
            { className: 'button' },
            React.createElement(
              'a',
              { href: 'https://app.aragon.one/', target: '_blank' },
              React.createElement(
                StyledButton,
                { mode: 'strong' },
                React.createElement(
                  BreakPoint,
                  { from: 'medium', to: 'large' },
                  'Try Aragon Core 0.5'
                ),
                React.createElement(
                  BreakPoint,
                  { from: 'large' },
                  'Try Aragon Core 0.5'
                )
              )
            )
          )
        )
      )
    )
  );
};

Header.defaultProps = DefaultProps$5;

var close$1 = "data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%201.014L6.014%205%2010%208.986%208.986%2010%205%206.014%201.014%2010%200%208.986%203.986%205%200%201.014%201.014%200%205%203.986%208.986%200z%22%20fill%3D%22%236D777B%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E";

var PANEL_WIDTH = 400;
var PANEL_OVERFLOW = PANEL_WIDTH * 0.2;
var PANEL_HIDE_RIGHT = -PANEL_WIDTH * 1.6;

var StyledSidePanel = styled.div.withConfig({
  displayName: 'SidePanel__StyledSidePanel'
})(['position:fixed;z-index:3;top:0;left:0;right:0;bottom:0;']);

var Overlay = styled.div.withConfig({
  displayName: 'SidePanel__Overlay'
})(['position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(68,81,89,0.65);']);

var StyledPanel = styled.aside.withConfig({
  displayName: 'SidePanel__StyledPanel'
})(['display:flex;flex-direction:column;width:', 'px;padding-right:', 'px;padding-left:30px;height:100%;background:white;position:absolute;top:0;right:0;box-shadow:-2px 0 36px rgba(0,0,0,0.2);'], PANEL_WIDTH + PANEL_OVERFLOW, 30 + PANEL_OVERFLOW);

var StyledPanelHeader = styled.header.withConfig({
  displayName: 'SidePanel__StyledPanelHeader'
})(['position:relative;padding-top:15px;padding-bottom:15px;padding-right:20px;']);

var StyledPanelCloseButton = styled.button.withConfig({
  displayName: 'SidePanel__StyledPanelCloseButton'
})(['', ' &{position:absolute;padding:20px;top:0;right:-30px;cursor:pointer;background:none;border:0;&::-moz-focus-inner{border:0;}}'], StyledPanelHeader);

var motionStyles = function motionStyles(progress) {
  return {
    overlay: { opacity: progress },
    panel: { right: lerp(progress, PANEL_HIDE_RIGHT, -PANEL_OVERFLOW) + 'px' }
  };
};

var SidePanel = function SidePanel(_ref) {
  var children = _ref.children,
      title = _ref.title,
      opened = _ref.opened,
      onClose = _ref.onClose,
      publicUrl = _ref.publicUrl;

  return React.createElement(
    reactMotion_1,
    { style: { progress: reactMotion_4(Number(opened), spring('slow')) } },
    function (_ref2) {
      var progress = _ref2.progress;

      var styles = motionStyles(progress);
      return React.createElement(
        StyledSidePanel,
        { hidden: progress === 0 },
        React.createElement(Overlay, { style: styles.overlay }),
        React.createElement(
          StyledPanel,
          { style: styles.panel },
          React.createElement(
            StyledPanelHeader,
            null,
            React.createElement(
              Text,
              { size: 'xxlarge', heading: '1' },
              title
            ),
            React.createElement(
              StyledPanelCloseButton,
              { type: 'button', onClick: onClose },
              React.createElement('img', { src: prefixUrl(close$1, publicUrl), alt: 'Close' })
            )
          ),
          children
        )
      );
    }
  );
};

var SidePanel$1 = getPublicUrl(SidePanel);

var StyledTable = styled.table.withConfig({
  displayName: 'Table__StyledTable'
})(['width:100%;border-spacing:0;']);

var Table = function Table(_ref) {
  var header = _ref.header,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['header', 'children']);
  return React.createElement(
    StyledTable,
    props,
    header && React.createElement(
      'thead',
      null,
      header
    ),
    React.createElement(
      'tbody',
      null,
      children
    )
  );
};

var StyledTableRow = styled.tr.withConfig({
  displayName: 'TableRow__StyledTableRow'
})(['']);

var contentBackground$2 = theme.contentBackground;
var contentBorder$2 = theme.contentBorder;


var StyledTableCell = styled.td.withConfig({
  displayName: 'TableCell__StyledTableCell'
})(['padding:20px;background:', ';border-bottom:1px solid ', ';&:first-child{border-left:1px solid ', ';}&:last-child{border-right:1px solid ', ';}', ':first-child &{border-top:1px solid ', ';}', ':first-child &:first-child{border-top-left-radius:3px;}', ':first-child &:last-child{border-top-right-radius:3px;}', ':last-child &:first-child{border-bottom-left-radius:3px;}', ':last-child &:last-child{border-bottom-right-radius:3px;}'], contentBackground$2, contentBorder$2, contentBorder$2, contentBorder$2, StyledTableRow, contentBorder$2, StyledTableRow, StyledTableRow, StyledTableRow, StyledTableRow);

var StyledTableCellContent = styled.div.withConfig({
  displayName: 'TableCell__StyledTableCellContent'
})(['display:flex;align-items:center;justify-content:space-between;']);

var DefaultProps$8 = {
  contentContainer: StyledTableCellContent
};

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      Container = _ref.contentContainer,
      props = objectWithoutProperties(_ref, ['children', 'contentContainer']);
  return React.createElement(
    StyledTableCell,
    props,
    React.createElement(
      Container,
      null,
      children
    )
  );
};

TableCell.defaultProps = DefaultProps$8;

var StyledTableHeader = styled.th.withConfig({
  displayName: 'TableHeader__StyledTableHeader'
})(['padding-left:21px;text-align:left;font-weight:normal;']);

var TableHeader = function TableHeader(_ref) {
  var title = _ref.title,
      props = objectWithoutProperties(_ref, ['title']);
  return React.createElement(
    StyledTableHeader,
    props,
    React.createElement(
      Text,
      { color: theme.textSecondary, smallcaps: true },
      title
    )
  );
};

var StyledCard = styled.div.withConfig({
  displayName: 'Card__StyledCard'
})(['width:', ';height:', ';background:', ';border:1px solid ', ';border-radius:3px;'], function (_ref) {
  var width = _ref.width;
  return width ? width : '282px';
}, function (_ref2) {
  var height = _ref2.height;
  return height ? height : '322px';
}, theme.contentBackground, theme.contentBorder);

var _templateObject$1 = taggedTemplateLiteral(['\n  display: flex;\n  padding: 40px 60px;\n  align-items: center;\n  text-align: center;\n  section {\n    padding-top: 20px;\n  }\n'], ['\n  display: flex;\n  padding: 40px 60px;\n  align-items: center;\n  text-align: center;\n  section {\n    padding-top: 20px;\n  }\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  margin: 20px 0 5px;\n'], ['\n  margin: 20px 0 5px;\n']);

var StyledCard$1 = StyledCard.extend(_templateObject$1);

var StyledHeading = StyledH1.extend(_templateObject2);

var StyledActionButton = styled(StyledButton).withConfig({
  displayName: 'EmptyStateCard__StyledActionButton'
})(['width:150px;margin-top:20px;']);

var DefaultProps$9 = {
  title: 'Nothing here.'
};

var EmptyStateCard = function EmptyStateCard(_ref) {
  var actionText = _ref.actionText,
      icon = _ref.icon,
      onActivate = _ref.onActivate,
      text = _ref.text,
      title = _ref.title,
      props = objectWithoutProperties(_ref, ['actionText', 'icon', 'onActivate', 'text', 'title']);
  return React.createElement(
    StyledCard$1,
    props,
    React.createElement(
      'section',
      null,
      React.createElement('img', { src: icon, alt: '' }),
      React.createElement(
        StyledHeading,
        { color: theme.accent, weight: 'bold', size: 'large' },
        title
      ),
      React.createElement(
        Text,
        null,
        text
      ),
      React.createElement(
        StyledActionButton,
        { mode: 'strong', onClick: onActivate },
        actionText
      )
    )
  );
};

EmptyStateCard.defaultProps = DefaultProps$9;

var chevronSvg = "data:image/svg+xml,%3Csvg%20width%3D%227%22%20height%3D%2212%22%20viewBox%3D%220%200%207%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.446%2012a.512.512%200%200%201-.172-.03.422.422%200%200%201-.146-.087A.37.37%200%200%201%200%2011.6a.37.37%200%200%201%20.128-.281l5.826-5.361L.217.692A.376.376%200%200%201%20.089.405.378.378%200%200%201%20.217.117.444.444%200%200%201%20.529%200c.123%200%20.228.04.313.117l6.03%205.56A.37.37%200%200%201%207%205.96a.37.37%200%200%201-.128.281l-6.12%205.643A.477.477%200%200%201%20.446%2012z%22%20fill%3D%22%2300CBE6%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var _templateObject$2 = taggedTemplateLiteral(['\n  padding-right: 20px;\n  margin-right: 20px;\n  background-image: ', ';\n  background-position: 100% 50%;\n  background-repeat: no-repeat;\n'], ['\n  padding-right: 20px;\n  margin-right: 20px;\n  background-image: ', ';\n  background-position: 100% 50%;\n  background-repeat: no-repeat;\n']);

var StyledAppBar = styled.div.withConfig({
  displayName: 'AppBar__StyledAppBar'
})(['display:flex;align-items:center;justify-content:flex-start;height:64px;background:', ';border-bottom:1px solid ', ';'], theme.contentBackground, theme.contentBorder);

var StyledAppBarStart = styled.div.withConfig({
  displayName: 'AppBar__StyledAppBarStart'
})(['display:flex;align-items:center;padding-left:30px;']);
var StyledAppBarEnd = styled.div.withConfig({
  displayName: 'AppBar__StyledAppBarEnd'
})(['margin-left:auto;padding-right:30px;']);

var StyledAppBarTitle = getPublicUrl(StyledH1.extend(_templateObject$2, function (_ref) {
  var chevron = _ref.chevron;
  return chevron ? css(['url(', ')'], styledPublicUrl(chevronSvg)) : 'none';
}));

var AppBar = function AppBar(_ref2) {
  var children = _ref2.children,
      endContent = _ref2.endContent,
      title = _ref2.title,
      props = objectWithoutProperties(_ref2, ['children', 'endContent', 'title']);
  return React.createElement(
    StyledAppBar,
    props,
    React.createElement(
      StyledAppBarStart,
      null,
      React.createElement(
        StyledAppBarTitle,
        { chevron: !!children, size: 'xxlarge' },
        title
      )
    ),
    children,
    endContent && React.createElement(
      StyledAppBarEnd,
      null,
      endContent
    )
  );
};

var logo$3 = "data:image/svg+xml,%3Csvg%20width%3D%221129%22%20height%3D%22792%22%20viewBox%3D%220%200%201129%20792%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2258.303%25%22%20y1%3D%2229.305%25%22%20x2%3D%22-20.356%25%22%20y2%3D%2289.584%25%22%20id%3D%22a%22%3E%3Cstop%20stop-color%3D%22%23E9F2F4%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23FFF%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%22125.887%25%22%20x2%3D%2250%25%22%20y2%3D%2227.419%25%22%20id%3D%22b%22%3E%3Cstop%20stop-color%3D%22%23E9F2F4%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23FFF%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2238.76%25%22%20y1%3D%2240.284%25%22%20x2%3D%2227.198%25%22%20y2%3D%224.898%25%22%20id%3D%22c%22%3E%3Cstop%20stop-color%3D%22%23E9F2F4%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23FFF%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.7%22%3E%3Cpath%20d%3D%22M474.223%2064.24c-.503%200-231.685%2073.873-231.685%20275.905%200%20202.033%20223.146%20300.029%20387.48%20300.029%2089.383%200%20162.808-26.013%20211.24-49.744%206.242-28.642%2028.943-96.473%20104.047-96.981%2013.393-.523%2025.958%201.99%2036.517%208.021%2050.256%2027.144%2017.59%2077.898%2017.59%2077.898%201.894-.307%203.809-.663%205.724-1.075%201.91-.413%203.83-.89%205.764-1.408%2060.404-16.268%20128.467-85.36%20116.661-201.057-9.463-92.774-95.09-151.58-136.743-174.94-13.64-7.648-22.566-11.513-22.566-11.513%201.508-9.423%201.995-16.71%201.995-22.309%200-1.05-.02-2.035-.05-2.96v-10.86C751.617%2020.65%20566.645.223%20475.414.223c-39.412%200-61.5%203.704-61.5%203.704l60.309%2060.313zm461.86%20125.638s-29.652-9.55-59.8-13.57c-15.083%2015.58-28.15%2022.113-32.17%2024.129-.503.497-1.005%201-1.005%201-87.95-18.595-119.612-63.827-119.612-63.827%2082.93-.497%20157.812%2019.098%20212.587%2052.268z%22%20fill%3D%22url%28%23a%29%22%20opacity%3D%22.779%22%2F%3E%3Cpath%20d%3D%22M1018.002%20315.017c0%2065.842-27.134%20126.647-73.375%20175.899l-2.197%202.528%203.704-.01c12.564-.508%2025.129%202.005%2035.688%208.036%2050.256%2027.144%2017.59%2077.898%2017.59%2077.898%2062.82-10.051%20140.719-80.406%20128.15-203.54-9.464-92.774-95.092-151.58-136.744-174.94%2017.901%2035.357%2027.184%2074.19%2027.184%20114.13%22%20fill%3D%22url%28%23b%29%22%20opacity%3D%22.374%22%2F%3E%3Cpath%20d%3D%22M.808%20545.696c0%208.152.317%2015.911.769%2023.495%2062.198%20119.616%20137.015%20224.115%20222.588%20310.653%20106.72%20107.685%20230.9%20187.578%20369.166%20237.539%20137.764-49.785%20261.949-129.854%20369.182-238.057%2031.792-32.144%2062.112-66.887%2090.915-104.012-229.272-16.479-215.346-155.74-215.346-155.74%200-5.524%200-11.057%201.005-16.585%200%200%20.508-4.89%202.176-12.564-48.432%2023.736-121.857%2049.749-211.244%2049.749-164.335%200-387.48-97.996-387.48-300.029%200-202.032%20231.181-275.905%20231.181-275.905l-.12-.035c-5.86-.452-12.143-.472-17.973-.472C202.836%2072.784.808%20284.863.808%20545.696%22%20fill%3D%22url%28%23c%29%22%20opacity%3D%22.557%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

// AragonApp provides everything needed to start an Aragon App.

var StyledAragonApp = styled.main.withConfig({
  displayName: 'AragonApp__StyledAragonApp'
})(['min-width:320px;min-height:100vh;background-color:', ';background-image:', ';background-position:50% 50%;background-repeat:no-repeat;'], theme.mainBackground, function (_ref) {
  var backgroundLogo = _ref.backgroundLogo;
  return backgroundLogo ? css(['url(', ')'], styledPublicUrl(logo$3)) : 'none';
});

var AragonApp = function (_React$Component) {
  inherits(AragonApp, _React$Component);

  function AragonApp() {
    classCallCheck(this, AragonApp);
    return possibleConstructorReturn(this, (AragonApp.__proto__ || Object.getPrototypeOf(AragonApp)).apply(this, arguments));
  }

  createClass(AragonApp, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { publicUrl: this.props.publicUrl };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          backgroundLogo = _props.backgroundLogo,
          className = _props.className,
          publicUrl = _props.publicUrl;

      var styledProps = { backgroundLogo: backgroundLogo, className: className, publicUrl: publicUrl };
      return React.createElement(
        StyledAragonApp,
        styledProps,
        React.createElement(BaseStyles$1, null),
        children
      );
    }
  }]);
  return AragonApp;
}(React.Component);

AragonApp.defaultProps = {
  backgroundLogo: false
};
AragonApp.childContextTypes = {
  publicUrl: propTypes.string
};
AragonApp.Styled = StyledAragonApp;

var Container$3 = styled.div.withConfig({
  displayName: 'LayoutGrid__Container'
})(['position:fixed;z-index:999;left:0;right:0;top:0;bottom:0;display:flex;width:', 'px;margin:0 auto;pointerevents:none;'], grid(12));

var Column = styled.div.withConfig({
  displayName: 'LayoutGrid__Column'
})(['width:', 'px;height:100%;background:rgba(184,184,184,0.5);'], grid(1));

var LayoutGrid = function LayoutGrid() {
  return React.createElement(
    Container$3,
    null,
    [].concat(toConsumableArray(Array(12))).map(function (v, i, arr) {
      return React.createElement(
        'div',
        {
          key: i,
          style: { width: grid(1, i < arr.length - 1 ? 1 : 0) + 'px' }
        },
        React.createElement(Column, null)
      );
    })
  );
};

export { css as styledCss, keyframes as styledKeyframes, injectGlobal as styledInjectGlobal, ThemeProvider as styledThemeProvider, wrapWithTheme as styledWithTheme, ServerStyleSheet as styledServerStyleSheet, StyleSheetManager as styledStyleSheetManager, styled, theme, themeDark, brand, colors, font, grid, spring, breakpoint, unselectable, BreakPoint, BaseStyles$1 as BaseStyles, Section, IllustratedSection, BadgeNumber, StyledButton as Button, CircleGraph, DropDown, Field, TextInput, Footer$1 as Footer, PreFooter, Header, SidePanel$1 as SidePanel, Table, TableCell, TableHeader, StyledTableRow as TableRow, Text, StyledCard as Card, EmptyStateCard, AppBar, AragonApp, LayoutGrid, Finance as IconFinance, Fundraising as IconFundraising, Groups as IconGroups, Home as IconHome, Identity as IconIdentity, Notifications as IconNotifications, Permissions as IconPermissions, Settings as IconSettings, Tokens as IconTokens, Voting as IconVoting, Wallet as IconWallet };
//# sourceMappingURL=index.esm.js.map
