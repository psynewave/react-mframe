import _classCallCheck from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/mflavin/Desktop/side-projects/react-mframe/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import ReactDOM from 'react-dom';
import MFrame from '../MFrame';
import MFrameCustomHead from '../MFrameCustomHead';
var testStyle = ".red {color: red;}";

var customHead = function customHead(title, styles, links) {
  return React.createElement(MFrameCustomHead, {
    title: title,
    styles: styles,
    links: links
  });
};

var genDoc = function genDoc(title, links) {
  var div = document.body.appendChild(document.createElement('div'));
  var chead = customHead(title, testStyle, links);
  var frame = ReactDOM.render(React.createElement(MFrameHeadTest, {
    head: chead
  }), div);
  return ReactDOM.findDOMNode(frame);
};

var MFrameHeadTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MFrameHeadTest, _React$Component);

  function MFrameHeadTest() {
    _classCallCheck(this, MFrameHeadTest);

    return _possibleConstructorReturn(this, _getPrototypeOf(MFrameHeadTest).apply(this, arguments));
  }

  _createClass(MFrameHeadTest, [{
    key: "render",
    value: function render() {
      return React.createElement(MFrame, {
        head: this.props.head
      }, React.createElement("h1", {
        id: "test",
        className: "red"
      }, "Test Component"));
    }
  }]);

  return MFrameHeadTest;
}(React.Component);

describe('<MFrame /> portal with custom head tag', function () {
  it('should create an iFrame with a custom title', function () {
    var title = 'test title';
    var doc = genDoc(title);
    expect(doc.contentDocument.head.querySelector('title').text).toEqual(title);
  });
  it('should create an iFrame with custom styles', function () {
    var doc = genDoc(null);
    expect(doc.contentDocument.head.querySelectorAll('style').length).toEqual(1);
  });
  it('should apply a custom style to an element in the iframe', function () {
    var doc = genDoc(null);
    var testElement = doc.contentDocument.styleSheets[0].cssRules[0];
    expect(testElement.selectorText).toEqual('.red');
    expect(testElement.style.color).toEqual('red');
  });
  it('should create an iFrame with a single external stylesheet', function () {
    var doc = genDoc(null, 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
    expect(doc.contentDocument.head.querySelectorAll('link').length).toEqual(1);
  });
  it('should create an iFrame with a multiple external stylesheets', function () {
    var doc = genDoc(null, ["https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "https://use.fontawesome.com/releases/v5.3.1/css/all.css"]);
    expect(doc.contentDocument.head.querySelectorAll('link').length).toEqual(2);
  });
});