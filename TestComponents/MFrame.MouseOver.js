import _classCallCheck from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import MFrame from '../MFrame';

var MFrameMouseOverTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MFrameMouseOverTest, _React$Component);

  function MFrameMouseOverTest(props) {
    var _this;

    _classCallCheck(this, MFrameMouseOverTest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MFrameMouseOverTest).call(this, props));
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(MFrameMouseOverTest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var count = this.state.count;
      return React.createElement("div", null, React.createElement(MFrame, {
        src: "https://psynewave.github.io/mframe-demo-page/",
        onMouseOver: function onMouseOver() {
          _this2.setState({
            count: count + 1
          });
        }
      }));
    }
  }]);

  return MFrameMouseOverTest;
}(React.Component);

export default MFrameMouseOverTest;