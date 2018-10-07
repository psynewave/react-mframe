import _classCallCheck from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import MFrame from '../MFrame';
import { customHead } from '../../constants/';

var MFrameAutoSizeTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MFrameAutoSizeTest, _React$Component);

  function MFrameAutoSizeTest() {
    _classCallCheck(this, MFrameAutoSizeTest);

    return _possibleConstructorReturn(this, _getPrototypeOf(MFrameAutoSizeTest).apply(this, arguments));
  }

  _createClass(MFrameAutoSizeTest, [{
    key: "render",
    value: function render() {
      return React.createElement(MFrame, {
        head: customHead("Passed Title"),
        width: "50%",
        autoResizeContent: true
      }, React.createElement("div", {
        style: {
          display: 'block',
          height: '1000px',
          background: "black"
        }
      }, "something"));
    }
  }]);

  return MFrameAutoSizeTest;
}(React.Component);

export default MFrameAutoSizeTest;