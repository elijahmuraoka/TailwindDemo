import React from 'react';
import CtaButton from './CtaButton';

export default function CtaSection(props) {
    return (
        <section id="cta" className="bg-brightRed">
            {/* Flex Container */}
            <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:text-left md:flex-row md:space-y-0">
                {/* Heading */}
                <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-left md:text-4xl max-w-md">
                    Simplify how your team works today
                </h2>
                {/* Button */}
                <CtaButton
                    link=""
                    value="Sign Up Now"
                    bgColor="bg-white"
                    hidden={true}
                />
            </div>
        </section>
    );
}
