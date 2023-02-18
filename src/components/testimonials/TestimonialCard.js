import React from 'react';

// Testimonial Card
export default function TestimonialCard({ link, name, text }) {
    return (
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            {/* Image */}
            <img
                className="w-16 -mt-6 md:-mt-14"
                src={require(`../../assets/${link}`)}
                alt="profile pic"
            />
            {/* Name Header */}
            <h5 className="text-lg font-bold">{name}</h5>
            {/* Text  */}
            <p className="text-sm text-darkGrayishBlue">{text}</p>
        </div>
    );
}
