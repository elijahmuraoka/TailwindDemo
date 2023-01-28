import React from 'react';

export default function MenuItem({ link, value }) {
    return (
        <a href={link} class="hover:text-darkGrayishBlue">
            {value}
        </a>
    );
}
