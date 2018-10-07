import React from 'react';

var MFrameCustomHead = function MFrameCustomHead(_ref) {
  var title = _ref.title,
      children = _ref.children,
      styles = _ref.styles,
      links = _ref.links;
  var Title = typeof title !== "undefined" ? React.createElement("title", null, title) : undefined;
  var Styles = typeof styles !== "undefined" ? React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n                ".concat(styles, "\n            ")
    }
  }) : undefined;
  var Links = typeof links !== "undefined" ? Array.isArray(links) ? React.createElement(React.Fragment, null, links.map(function (link, i) {
    return React.createElement("link", {
      href: link,
      rel: "stylesheet",
      key: "link-".concat(i)
    });
  })) : React.createElement("link", {
    href: links,
    rel: "stylesheet"
  }) : undefined;
  return React.createElement(React.Fragment, null, Title, Links, Styles, children);
};

export default MFrameCustomHead;