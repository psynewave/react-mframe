import React from "react";
import MFrame from '../MFrame';
import {customHead} from '../../constants/';

class MFrameAutoSizeTest extends React.Component {
    render() {
      return (
        <MFrame
          head={customHead("Passed Title")}
          width="50%"
          autoResizeContent
          >
          <div style={{display: 'block', height: '1000px', background: "black"}}>something</div>
        </MFrame>
      );
    }
  }

export default MFrameAutoSizeTest;