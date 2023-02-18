import React from 'react';

export default function SocialIcon({ link, image, alt }) {
    return (
        <a href={link}>
            <img
                src={require(`../assets/${image}`)}
                alt={alt}
                className="max-w-md h-8"
            />
        </a>
    );
}
