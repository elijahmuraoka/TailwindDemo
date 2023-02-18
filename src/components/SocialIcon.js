import React from 'react';

export default function SocialIcon({ link, image, alt }) {
    return (
        <a href={link}>
            <img
                src={require(`../assets/${image}`)}
                alt={alt}
                className="ease-in-out duration-200 max-w-md h-8 hover:scale-110"
            />
        </a>
    );
}
