import React from 'react';
import { shallow, mount } from 'enzyme';
import MFrame from '../MFrame';
import MFrameOnLoadTest from '../TestComponents/MFrame.OnLoad';
import MFrameMouseOverTest from '../TestComponents/MFrame.MouseOver';
import MFrameMouseOutTest from '../TestComponents/MFrame.MouseOut';
import { customHead } from '../../constants/';
describe('<MFrame />', function () {
  it('has an id', function () {
    var id = "mframe";
    var wrapper = shallow(React.createElement(MFrame, {
      id: id
    }));
    expect(wrapper).toHaveProp('id', id);
  });
  it('has an src', function () {
    var src = "https://psynewave.github.io/mframe-demo-page/";
    var wrapper = shallow(React.createElement(MFrame, {
      src: src
    }));
    expect(wrapper).toHaveProp('src', src);
  });
  it('has an className', function () {
    var classname = "mframe";
    var wrapper = shallow(React.createElement(MFrame, {
      className: classname
    }));
    expect(wrapper).toHaveClassName(classname);
  });
  it('has a width', function () {
    var width = "600px";
    var wrapper = shallow(React.createElement(MFrame, {
      width: width
    }));
    expect(wrapper).toHaveStyle("width", width);
  });
  it('has a height', function () {
    var height = "600px";
    var wrapper = shallow(React.createElement(MFrame, {
      height: height
    }));
    expect(wrapper).toHaveStyle("height", height);
  });
  it('has top and bottom margins', function () {
    var marginheight = "20px";
    var wrapper = shallow(React.createElement(MFrame, {
      marginheight: marginheight
    }));
    expect(wrapper).toHaveStyle("margin", "".concat(marginheight, " 0 ").concat(marginheight));
  });
  it('has left and right margins', function () {
    var marginwidth = "20px";
    var wrapper = shallow(React.createElement(MFrame, {
      marginwidth: marginwidth
    }));
    expect(wrapper).toHaveStyle("margin", "0 ".concat(marginwidth, " 0"));
  });
  it('has a scrolling property', function () {
    var wrapper = shallow(React.createElement(MFrame, {
      scrolling: "true"
    }));
    expect(wrapper).toHaveProp('scrolling');
  });
  it('has a allowFullScreen property', function () {
    var wrapper = shallow(React.createElement(MFrame, {
      allowFullScreen: true
    }));
    expect(wrapper).toHaveProp('allowFullScreen');
  });
  it('has a responsive layout', function () {
    var wrapper = shallow(React.createElement(MFrame, {
      responsive: true
    }));
    expect(wrapper).toHaveStyle({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    });
  });
  it('has a border', function () {
    var border = "10px solid blue";
    var wrapper = shallow(React.createElement(MFrame, {
      border: border
    }));
    expect(wrapper).toHaveStyle({
      border: border
    });
  });
  it('has a position', function () {
    var position = "relative";
    var wrapper = shallow(React.createElement(MFrame, {
      position: position
    }));
    expect(wrapper).toHaveStyle({
      position: position
    });
  });
  it('has a display option', function () {
    var display = "flex";
    var wrapper = shallow(React.createElement(MFrame, {
      display: display
    }));
    expect(wrapper).toHaveStyle({
      display: display
    });
  });
  it('has a child', function () {
    var hello = React.createElement("h1", null, "Hello World");
    var wrapper = mount(React.createElement(MFrame, null, hello));
    expect(wrapper).toHaveRef('mframechild');
  });
  it('does not have a child', function () {
    var src = "https://psynewave.github.io/mframe-demo-page/";
    var wrapper = mount(React.createElement(MFrame, {
      src: src
    }));
    expect(wrapper).not.toHaveRef('mframechild');
  });
  it('has a name property', function () {
    var name = "mframe";
    var wrapper = shallow(React.createElement(MFrame, {
      name: name
    }));
    expect(wrapper).toHaveProp('name', name);
  });
  it('has a sandbox property', function () {
    var sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
    var wrapper = shallow(React.createElement(MFrame, {
      sandbox: sandbox
    }));
    expect(wrapper).toHaveProp('sandbox', sandbox);
  });
  it('has an allow property', function () {
    var allow = "geolocation";
    var wrapper = shallow(React.createElement(MFrame, {
      allow: allow
    }));
    expect(wrapper).toHaveProp('allow', allow);
  });
  it('has custom styles', function () {
    var styles = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    };
    var wrapper = shallow(React.createElement(MFrame, {
      styles: styles
    }));
    expect(wrapper).toHaveStyle(styles);
  });
  it('is able to perform onload functions', function () {
    var wrapper = mount(React.createElement(MFrameOnLoadTest, null));
    expect(wrapper.state('count')).not.toEqual(1);
    setTimeout(function () {
      expect(wrapper.state('count')).toEqual(1);
    }, 1);
  });
  it('is able to respond to MouseOver events', function () {
    var wrapper = mount(React.createElement(MFrameMouseOverTest, null));
    expect(wrapper).toHaveState('count', 0);
    wrapper.find('iframe').simulate('mouseover');
    expect(wrapper).toHaveState('count', 1);
  });
  it('is able to respond to MouseOver events', function () {
    var wrapper = mount(React.createElement(MFrameMouseOverTest, null));
    expect(wrapper).toHaveState('count', 0);
    wrapper.find('iframe').simulate('mouseover');
    expect(wrapper).toHaveState('count', 1);
  });
  it('mouseout event fires', function () {
    var wrapper = mount(React.createElement(MFrameMouseOutTest, null));
    expect(wrapper).toHaveState('count', 0);
    wrapper.find('iframe').simulate('mouseout');
    expect(wrapper).toHaveState('count', 1);
  });
  it('automatically resizes the iframe with injected content', function () {
    var wrapper = mount(React.createElement(MFrame, {
      head: customHead("Passed Title"),
      width: "50%",
      autoResizeContent: true
    }, React.createElement("div", {
      style: {
        display: 'block',
        height: '1000px',
        background: "black"
      }
    }, "something")));
    expect(wrapper).toHaveState('autosized', true);
  });
});
/*



    setTimeout(() => {
        expect(wrapper.find('.editField span').at(0).text().trim()).toEqual(jsonDataRooms.data[0].name);
        wrapper.unmount();
        done();
      }, 1000);
*/