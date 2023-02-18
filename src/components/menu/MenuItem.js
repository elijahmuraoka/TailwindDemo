import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// A single menu item link
export default function MenuItem({ link, value, mobile = false }) {
    const menuClasses = mobile ? 'font-bold px-6' : '';
    const menuLink = (
        <AnchorLink
            href={link}
            className={`${menuClasses} hover:text-darkGrayishBlue`}
        >
            {value}
        </AnchorLink>
    );
    return <div>{menuLink}</div>;
}
