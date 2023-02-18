import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Call to Action Button, aka Get Started Button
export default function CtaButton({ link, value, bgColor, hidden }) {
    const hiddenClass = hidden ? 'hidden' : 'block';
    const [bgColorClass, setBgColorClass] = useState('bg-brightRed');
    const [colorClass, setColorClass] = useState('text-white');
    const [hoverClass, setHoverClass] = useState('bg-brightRedLight');
    useEffect(() => {
        const colorVariants = {
            altColor: { text: 'text-brightRed', bg: 'bg-gray-800' },
        };
        if (bgColor !== bgColorClass) {
            setBgColorClass(bgColor);
            setColorClass(colorVariants.altColor.text);
            setHoverClass(colorVariants.altColor.bg);
        }
    }, [bgColor, bgColorClass]);
    return (
        <a
            href={link}
            className={`${hiddenClass} p-3 px-6 pt-2 ${colorClass} 
            ${bgColorClass} rounded-full baseline transition ease-in-out delay-100 hover:${hoverClass}
            hover:shadow-xl md:block`}
        >
            {value}
        </a>
    );
}
