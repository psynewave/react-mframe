import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AFrame extends React.Component {

  adjustIframeHeight = () => {
      setTimeout(() => {
          const aframeDOM = ReactDOM.findDOMNode(this.ifr);
          const testHeight = aframeDOM.contentWindow.document.body && aframeDOM.style.height !== aframeDOM.contentWindow.document.body.scrollHeight;

          if (testHeight) {
            aframeDOM.style.height = aframeDOM.contentWindow.document.body.scrollHeight + 'px'
          }

          this.timeoutToken = setTimeout(this.adjustIframeHeight, 500)
      }, 200)
  }

  componentDidMount() {
    if(typeof(this.props.children) !== "undefined"){

      this.aFrameDoc =  typeof(this.ifr) !== "undefined" ? this.ifr.contentDocument : null;
      this.aFrameHead = this.aFrameDoc !== null ? this.aFrameDoc.head : undefined;
      this.aFrameBody = this.aFrameDoc !== null ? this.aFrameDoc.body : undefined;
      this.aFrameWindow = this.aFrameDoc !== null ? this.aFrameDoc.defaultView || this.aFrameDoc.parentView : undefined;

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
          ref={ifr => (this.ifr = ifr)}
        >
          {this.aFrameHead && ReactDOM.createPortal(head, this.aFrameHead)}
          {this.aFrameBody && ReactDOM.createPortal(children, this.aFrameBody)}
        </iframe>
      )
  }
}

AFrame.propTypes = {
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

export default AFrame;

