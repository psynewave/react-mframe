import _classCallCheck from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import MFrame from '../MFrame';

var MFrameMouseOutTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MFrameMouseOutTest, _React$Component);

  function MFrameMouseOutTest(props) {
    var _this;

    _classCallCheck(this, MFrameMouseOutTest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MFrameMouseOutTest).call(this, props));
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(MFrameMouseOutTest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var count = this.state.count;
      return React.createElement("div", null, React.createElement(MFrame, {
        src: "https://psynewave.github.io/mframe-demo-page/",
        onMouseOut: function onMouseOut() {
          _this2.setState({
            count: count + 1
          });
        }
      }));
    }
  }]);

  return MFrameMouseOutTest;
}(React.Component);

export default MFrameMouseOutTest;