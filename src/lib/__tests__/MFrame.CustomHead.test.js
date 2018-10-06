import React from "react";
import ReactDOM from 'react-dom';
import MFrame from '../MFrame';
import MFrameCustomHead from '../MFrameCustomHead';

const testStyle = `.red {color: red;}`;

const customHead = (title, styles, links) => <MFrameCustomHead title={title} styles={styles} links={links} />;

const genDoc = (title, links) => {
  let div = document.body.appendChild(document.createElement('div'));
  const chead = customHead(title, testStyle, links);
  const frame = ReactDOM.render(<MFrameHeadTest head={chead}/>, div, );
  return ReactDOM.findDOMNode(frame);
};

class MFrameHeadTest extends React.Component {
    render() {
      return (
          <MFrame head={this.props.head}>
            <h1 id="test" className="red">Test Component</h1>
          </MFrame>
      );
    }
  }

describe('<MFrame /> portal with custom head tag', () => {
  it('should create an iFrame with a custom title', () => {
    let title = 'test title';
    const doc = genDoc(title);
    expect(doc.contentDocument.head.querySelector('title').text).toEqual(title);
  });

  it('should create an iFrame with custom styles', () => {
    const doc = genDoc(null);
    expect(doc.contentDocument.head.querySelectorAll('style').length).toEqual(1);
  });

  it('should apply a custom style to an element in the iframe', () => {
    const doc = genDoc(null);
    const testElement = doc.contentDocument.styleSheets[0].cssRules[0];
    expect(testElement.selectorText).toEqual('.red');
    expect(testElement.style.color).toEqual('red');
  });

  it('should create an iFrame with a single external stylesheet', () => {
    const doc = genDoc(null, 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
    expect(doc.contentDocument.head.querySelectorAll('link').length).toEqual(1);
  });

  it('should create an iFrame with a multiple external stylesheets', () => {
    const doc = genDoc(null, ["https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "https://use.fontawesome.com/releases/v5.3.1/css/all.css"]
    );
    expect(doc.contentDocument.head.querySelectorAll('link').length).toEqual(2);
  });
});