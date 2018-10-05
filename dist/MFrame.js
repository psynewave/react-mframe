import _classCallCheck from "/Users/mflavin/Desktop/side-projects/react-aframe/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/mflavin/Desktop/side-projects/react-aframe/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/mflavin/Desktop/side-projects/react-aframe/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/mflavin/Desktop/side-projects/react-aframe/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/mflavin/Desktop/side-projects/react-aframe/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import ReactDOM from 'react-dom';

var AFrame =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AFrame, _React$Component);

  function AFrame() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AFrame);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AFrame)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.adjustIframeHeight = function () {
      setTimeout(function () {
        var aframeDOM = ReactDOM.findDOMNode(_this.ifr);
        var testHeight = aframeDOM.contentWindow.document.body && aframeDOM.style.height !== aframeDOM.contentWindow.document.body.scrollHeight;

        if (testHeight) {
          aframeDOM.style.height = aframeDOM.contentWindow.document.body.scrollHeight + 'px';
        }

        _this.timeoutToken = setTimeout(_this.adjustIframeHeight, 500);
      }, 200);
    };

    return _this;
  }

  _createClass(AFrame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.aFrameDoc = this.ifr.contentDocument;
      this.aFrameHead = this.aFrameDoc.head;
      this.aFrameBody = this.aFrameDoc.body;
      this.aFrameWindow = this.aFrameDoc.defaultView || this.aFrameDoc.parentView;

      if (typeof this.props.children !== "undefined" && typeof this.props.autoResizeContent !== "undefined") {
        this.timeoutToken = setTimeout(this.adjustIframeHeight, 500);
      }

      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutToken);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var noop = function noop() {};

      var units = ['px', '%', 'vh'];
      var children = props.children,
          head = props.head,
          src = props.src,
          id = props.id,
          className = props.className,
          title = props.title,
          allowFullScreen = props.allowFullScreen,
          sandbox = props.sandbox,
          allow = props.allow,
          display = props.display,
          border = props.border,
          boxSizing = props.boxSizing,
          scrolling = props.scrolling,
          responsive = props.responsive;
      var height = typeof props.height !== "undefined" ? units.some(function (unit) {
        return props.height.includes(unit);
      }) ? props.height : "".concat(props.height, "px") : "100%";
      var width = typeof props.width !== "undefined" ? units.some(function (unit) {
        return props.width.includes(unit);
      }) ? props.width : "".concat(props.width, "px") : "100%";
      var left = typeof props.left !== "undefined" ? units.some(function (unit) {
        return props.left.includes(unit);
      }) ? props.left : "".concat(props.left, "px") : undefined;
      var top = typeof props.top !== "undefined" ? units.some(function (unit) {
        return props.top.includes(unit);
      }) ? props.top : "".concat(props.top, "px") : undefined;
      var marginheight = typeof props.marginheight !== "undefined" ? units.some(function (unit) {
        return props.marginheight.includes(unit);
      }) ? props.marginheight : "".concat(props.marginheight, "px") : 0;
      var marginwidth = typeof props.marginwidth !== "undefined" ? units.some(function (unit) {
        return props.marginwidth.includes(unit);
      }) ? props.marginwidth : "".concat(props.marginwidth, "px") : 0;
      var position = props.position || "relative";
      var target = props.target || "_parent";
      var onLoad = props.onLoad || noop;
      var onMouseOver = props.onMouseOver || noop;
      var onMouseOut = props.onMouseOut || noop;
      var styles = Object.assign({}, {
        position: position,
        display: display || "block",
        margin: "".concat(marginheight, " ").concat(marginwidth, " ").concat(marginheight),
        height: height,
        width: width,
        left: typeof left !== "undefined" ? left : position === "absolute" ? 0 : undefined,
        top: typeof top !== "undefined" ? top : position === "absolute" ? 0 : undefined,
        border: border === "none" ? 0 : typeof border !== "undefined" ? border : 0,
        boxSizing: typeof boxSizing !== "undefined" ? boxSizing : "border-box"
      }, typeof responsive !== "undefined" ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      } : {}, props.styles || {});
      return React.createElement("iframe", {
        id: id,
        className: className,
        title: title,
        src: src,
        style: styles,
        allowFullScreen: allowFullScreen,
        allow: allow,
        onLoad: onLoad,
        onMouseOver: onMouseOver,
        onMouseOut: onMouseOut,
        sandbox: sandbox,
        target: target,
        scrolling: scrolling,
        ref: function ref(ifr) {
          return _this2.ifr = ifr;
        }
      }, this.aFrameHead && ReactDOM.createPortal(head, this.aFrameHead), this.aFrameBody && ReactDOM.createPortal(children, this.aFrameBody));
    }
  }]);

  return AFrame;
}(React.Component);

export default AFrame;