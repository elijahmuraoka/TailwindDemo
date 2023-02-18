import React from 'react';

// A single menu item link
export default function MenuItem({ link, value, mobile = false }) {
    const menuClasses = mobile ? 'font-bold px-6' : '';
    const menuLink = (
        <a href={link} className={`${menuClasses} hover:text-darkGrayishBlue`}>
            {value}
        </a>
    );
    return <div>{menuLink}</div>;
}
