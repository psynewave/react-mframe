import React from "react";
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

export default MFrameOnLoadTest