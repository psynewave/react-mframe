import React from "react";
import { mount } from 'enzyme';
import MFrame from '../MFrame';

class MFrameMouseOutTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <MFrame src="https://psynewave.github.io/mframe-demo-page/"
              onMouseOut={() => { this.setState({ count: count + 1 }); }}
          />
        </div>
      );
    }
  }

it('is able to respond to MouseOut events', () => {
  const wrapper = mount(<MFrameMouseOutTest />);
  expect(wrapper).toHaveState('count', 0);
  wrapper.find('iframe').simulate('mouseout');
  expect(wrapper).toHaveState('count', 1);
});