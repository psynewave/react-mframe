import React from "react";
import { mount } from 'enzyme';
import MFrame from '../MFrame';

class MFrameMouseOverTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <MFrame src="https://psynewave.github.io/mframe-demo-page/"
              onMouseOver={() => { this.setState({ count: count + 1 }); }}
          />
          </div>
      );
    }
  }

it('is able to respond to MouseOver events', () => {
  const wrapper = mount(<MFrameMouseOverTest />);
  expect(wrapper).toHaveState('count', 0);
  wrapper.find('iframe').simulate('mouseover');
  expect(wrapper).toHaveState('count', 1);
});