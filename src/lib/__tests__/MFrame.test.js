import React from 'react';
import { shallow, mount } from 'enzyme';
import MFrame from '../MFrame';
import MFrameOnLoadTest from '../TestComponents/MFrame.OnLoad';
import MFrameMouseOverTest from '../TestComponents/MFrame.MouseOver';
import MFrameMouseOutTest from '../TestComponents/MFrame.MouseOut';
import {customHead} from '../../constants/'

describe('<MFrame />', () => {

    it('has an id', () => {
        const id = "mframe"
        const wrapper = shallow(<MFrame id={id} />);
        expect(wrapper).toHaveProp('id', id);
    });

    it('has an src', () => {
        const src = "https://psynewave.github.io/mframe-demo-page/"
        const wrapper = shallow(<MFrame src={src} />);
        expect(wrapper).toHaveProp('src', src);
    });

    it('has an className', () => {
        const classname = "mframe"
        const wrapper = shallow(<MFrame className={classname} />);
        expect(wrapper).toHaveClassName(classname);
    });

    it('has a width', () => {
        const width = "600px"
        const wrapper = shallow(<MFrame width={width} />);

        expect(wrapper).toHaveStyle("width", width);
    });

    it('has a height', () => {
        const height = "600px"
        const wrapper = shallow(<MFrame height={height} />);

        expect(wrapper).toHaveStyle("height", height);
    });

    it('has top and bottom margins', () => {
        const marginheight = "20px"
        const wrapper = shallow(<MFrame marginheight={marginheight} />);

        expect(wrapper).toHaveStyle("margin", `${marginheight} 0 ${marginheight}`);
    });

    it('has left and right margins', () => {
        const marginwidth = "20px"
        const wrapper = shallow(<MFrame marginwidth={marginwidth} />);
        expect(wrapper).toHaveStyle("margin", `0 ${marginwidth} 0`);
    });

    it('has a scrolling property', () => {
        const wrapper = shallow(<MFrame scrolling="true" />);
        expect(wrapper).toHaveProp('scrolling');
    });

    it('has a allowFullScreen property', () => {
        const wrapper = shallow(<MFrame allowFullScreen />);
        expect(wrapper).toHaveProp('allowFullScreen');
    });

    it('has a responsive layout', () => {
        const wrapper = shallow(<MFrame responsive />);
        expect(wrapper).toHaveStyle({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        });
    });

    it('has a border', () => {
        const border = "10px solid blue";
        const wrapper = shallow(<MFrame border={border} />);
        expect(wrapper).toHaveStyle({
            border: border
        });
    });

    it('has a position', () => {
        const position = "relative";
        const wrapper = shallow(<MFrame position={position} />);
        expect(wrapper).toHaveStyle({
            position
        });
    });

    it('has a display option', () => {
        const display = "flex";
        const wrapper = shallow(<MFrame display={display} />);
        expect(wrapper).toHaveStyle({
            display
        });
    });

    it('has a child', () => {
        const hello = <h1>Hello World</h1>;
        const wrapper = mount(<MFrame>{hello}</MFrame>);
        expect(wrapper).toHaveRef('mframechild');
    });

    it('does not have a child', () => {
        const src = "https://psynewave.github.io/mframe-demo-page/"
        const wrapper = mount(<MFrame src={src} />);
        expect(wrapper).not.toHaveRef('mframechild');
    });

    it('has a name property', () => {
        const name = "mframe";
        const wrapper = shallow(<MFrame name={name} />);
        expect(wrapper).toHaveProp('name', name);
    });

    it('has a sandbox property', () => {
        const sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
        const wrapper = shallow(<MFrame sandbox={sandbox} />);
        expect(wrapper).toHaveProp('sandbox', sandbox);
    });

    it('has an allow property', () => {
        const allow = "geolocation";
        const wrapper = shallow(<MFrame allow={allow} />);
        expect(wrapper).toHaveProp('allow', allow);
    });

    it('has custom styles', () => {
        const styles = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        };
        const wrapper = shallow(<MFrame styles={styles} />);
        expect(wrapper).toHaveStyle(styles);
    });

    it('is able to perform onload functions', () => {
        const wrapper = mount(<MFrameOnLoadTest />);
        expect(wrapper.state('count')).not.toEqual(1)
        setTimeout(() => {
            expect(wrapper.state('count')).toEqual(1)
        }, 1);
    });

    it('is able to respond to MouseOver events', () => {
        const wrapper = mount(<MFrameMouseOverTest />);
        expect(wrapper).toHaveState('count', 0);
        wrapper.find('iframe').simulate('mouseover');
        expect(wrapper).toHaveState('count', 1);
    });

    it('is able to respond to MouseOver events', () => {
        const wrapper = mount(<MFrameMouseOverTest />);
        expect(wrapper).toHaveState('count', 0);
        wrapper.find('iframe').simulate('mouseover');
        expect(wrapper).toHaveState('count', 1);
    });

    it('mouseout event fires', () => {
        const wrapper = mount(<MFrameMouseOutTest />);
        expect(wrapper).toHaveState('count', 0);
        wrapper.find('iframe').simulate('mouseout');
        expect(wrapper).toHaveState('count', 1);
    });

    it('automatically resizes the iframe with injected content', () => {
        const wrapper = mount(<MFrame
            head={customHead("Passed Title")}
            width="50%"
            autoResizeContent
            >
            <div style={{display: 'block', height: '1000px', background: "black"}}>something</div>
          </MFrame>);
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