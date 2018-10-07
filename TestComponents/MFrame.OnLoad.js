import _classCallCheck from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/home/travis/build/psynewave/react-mframe/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import MFrame from '../MFrame';

var MFrameOnLoadTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MFrameOnLoadTest, _React$Component);

  function MFrameOnLoadTest(props) {
    var _this;

    _classCallCheck(this, MFrameOnLoadTest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MFrameOnLoadTest).call(this, props));
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(MFrameOnLoadTest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var count = this.state.count;
      return React.createElement("div", null, React.createElement("p", {
        className: "count"
      }, this.state.count), React.createElement(MFrame, {
        onLoad: function onLoad() {
          _this2.setState({
            count: count + 1
          });
        }
      }));
    }
  }]);

  return MFrameOnLoadTest;
}(React.Component);

export default MFrameOnLoadTest;