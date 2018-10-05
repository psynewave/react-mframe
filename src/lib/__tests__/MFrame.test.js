import React from 'react';
import { shallow } from 'enzyme';
import MFrame from '../MFrame';

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

/*
onMouseOver: PropTypes.func,
onMouseOut: PropTypes.func,
onLoad: PropTypes.func,
border: PropTypes.string,
position: PropTypes.string,
display: PropTypes.string,
name: PropTypes.string,
sandbox: PropTypes.string,
allow: PropTypes.string,
styles: PropTypes.object,
head: PropTypes.object,
autoResizeContent: PropTypes.bool
*/