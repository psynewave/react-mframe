import React from 'react';

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

export default MFrameCustomHead;