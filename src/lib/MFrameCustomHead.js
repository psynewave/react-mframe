import React from 'react';
import PropTypes from 'prop-types';

const MFrameCustomHead = ({ title, children, styles, links }) => {
    const Title = typeof(title) !== "undefined" ? <title>{title}</title> : undefined;
    const Styles = typeof(styles) !== "undefined" ?
            <style dangerouslySetInnerHTML={{__html: `
                ${styles}
            `}} /> : undefined;
    const Links = typeof(links) !== "undefined" ?
            Array.isArray(links) ?
            <>
                {links.map((link, i) => (
                    <link href={link} rel="stylesheet" key={`link-${i}`} />
                ))}
            </> :
            <link href={links} rel="stylesheet" /> : undefined;

    return (
        <>
            {Title}
            {Links}
            {Styles}
            {children}
        </>
    )
}

MFrameCustomHead.propTypes = {
    title: PropTypes.string,
    styles: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    links: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
}


export default MFrameCustomHead;