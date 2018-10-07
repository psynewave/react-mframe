import React from "react";
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

export default MFrameMouseOutTest;