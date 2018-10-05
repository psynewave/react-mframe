import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class mFrame extends React.Component {

  adjustIframeHeight = () => {
      setTimeout(() => {
          const mFrameDOM = ReactDOM.findDOMNode(this.miframe);
          const testHeight = mFrameDOM.contentWindow.document.body && mFrameDOM.style.height !== mFrameDOM.contentWindow.document.body.scrollHeight;

          if (testHeight) {
            mFrameDOM.style.height = mFrameDOM.contentWindow.document.body.scrollHeight + 'px'
          }

          this.timeoutToken = setTimeout(this.adjustIframeHeight, 500)
      }, 200)
  }

  componentDidMount() {
    if(typeof(this.props.children) !== "undefined"){

      this.mFrameDoc =  typeof(this.miframe) !== "undefined" ? this.miframe.contentDocument : null;
      this.mFrameHead = this.mFrameDoc !== null ? this.mFrameDoc.head : undefined;
      this.mFrameBody = this.mFrameDoc !== null ? this.mFrameDoc.body : undefined;
      this.mFrameWindow = this.mFrameDoc !== null ? this.mFrameDoc.defaultView || this.mFrameDoc.parentView : undefined;

      if( typeof(this.props.autoResizeContent) !== "undefined" ) {
        this.timeoutToken = setTimeout(this.adjustIframeHeight, 500)
      }

      this.forceUpdate();
    }

  }

  componentWillUnmount() {
      clearTimeout(this.timeoutToken)
  }

  render() {
    const props = this.props;
    const noop = function(){};
    const units = ['px', '%', 'vh'];
    const { children, head, src, id, className, title, allowFullScreen, sandbox, allow, display, border, boxSizing, scrolling, responsive } = props;

    const height = typeof(props.height) !== "undefined" ? units.some(unit=>props.height.includes(unit)) ? props.height : `${props.height}px` : "100%";
    const width = typeof(props.width) !== "undefined" ? units.some(unit=>props.width.includes(unit)) ? props.width : `${props.width}px` : "100%";
    const left = typeof(props.left) !== "undefined" ? units.some(unit=>props.left.includes(unit)) ? props.left : `${props.left}px` : undefined;
    const top = typeof(props.top) !== "undefined" ? units.some(unit=>props.top.includes(unit)) ? props.top : `${props.top}px` : undefined;
    const marginheight = typeof(props.marginheight) !== "undefined" ? units.some(unit=>props.marginheight.includes(unit)) ? props.marginheight : `${props.marginheight}px` : 0;
    const marginwidth = typeof(props.marginwidth) !== "undefined" ? units.some(unit=>props.marginwidth.includes(unit)) ? props.marginwidth : `${props.marginwidth}px` : 0;
    const position = props.position || "relative";
    const target = props.target || "_parent";
    const onLoad = props.onLoad || noop;
    const onMouseOver = props.onMouseOver || noop;
    const onMouseOut = props.onMouseOut || noop;

    const styles = Object.assign(
      {},
      {
          position,
          display: display || "block",
          margin: `${marginheight} ${marginwidth} ${marginheight}`,
          height: height,
          width: width,
          left: typeof(left) !== "undefined" ? left : position === "absolute" ? 0 : undefined,
          top: typeof(top) !== "undefined" ? top : position === "absolute" ? 0 : undefined,
          border: border === "none" ? 0 : typeof(border) !== "undefined" ? border : 0,
          boxSizing: typeof(boxSizing) !== "undefined" ? boxSizing : "border-box"
      },
      typeof(responsive) !== "undefined" ?
      {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
      } : {},
      props.styles || {}
  )

  const portalchild = typeof(children) === "undefined" ? undefined :
  <div ref="mframechild">
      {this.mFrameHead && ReactDOM.createPortal(head, this.mFrameHead)}
      {this.mFrameBody && ReactDOM.createPortal(children, this.mFrameBody)}
  </div>

      return (
        <iframe
          id={id}
          className={className}
          title={title}
          src={src}
          style={styles}
          allowFullScreen={allowFullScreen}
          allow={allow}
          onLoad={onLoad}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          sandbox={sandbox}
          target={target}
          scrolling={scrolling}
          ref={miframe => (this.miframe = miframe)}
        >
          {portalchild}
        </iframe>
      )
  }
}

mFrame.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  marginheight: PropTypes.string,
  marginwidth: PropTypes.string,
  scrolling: PropTypes.string,
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
  allowFullScreen: PropTypes.bool,
  responsive: PropTypes.bool,
  head: PropTypes.object,
  autoResizeContent: PropTypes.bool
}

export default mFrame;

