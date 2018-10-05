import React from "react";
import { mount} from 'enzyme';
import MFrame from '../MFrame';

class MFrameOnLoadTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <p className="count">{this.state.count}</p>
          <MFrame
              onLoad={() => { this.setState({ count: count + 1 }); }}
          />
        </div>
      );
    }
  }

it('is able to perform onload functions', () => {
  const wrapper = mount(<MFrameOnLoadTest />);
  expect(wrapper.state('count')).not.toEqual(1)
  setTimeout(() => {
    expect(wrapper.state('count')).toEqual(1)
  }, 1);
});