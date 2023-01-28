import React from 'react';

// Call to Action Button, aka Get Started Button
export default function CtaButton({ link, value }) {
    return (
        <a
            href={link}
            class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
            {value}
        </a>
    );
}
