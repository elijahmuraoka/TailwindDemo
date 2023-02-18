import React from 'react';
import CtaButton from './cta/CtaButton';
import illustrationIntro from '../assets/illustration-intro.svg';

// Hero Section
export default function HeroSection(prop) {
    return (
        <section id="hero">
            {/* <!-- Flex Container --> */}
            <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 md:space-y-0 md:flex-row">
                {/* <!-- Left Item --> */}
                <div class="flex flex-col mb-28 space-y-12 md:w-1/2">
                    <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Bring everyone together to build better products
                    </h1>
                    <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <div class="flex justify-center md:justify-start">
                        <CtaButton link="" value="Get Started" bgColor="bg-brightRed" hidden={true} />
                    </div>
                </div>
                {/* <!-- Right Item --> */}
                <div class="md:w-1/2">
                    <img src={illustrationIntro} alt="illustration intro" />
                </div>
            </div>
        </section>
    );
}
