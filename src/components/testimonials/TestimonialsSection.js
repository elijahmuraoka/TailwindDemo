import React from 'react';
import TestimonialCard from './TestimonialCard';
import CtaButton from '../cta/CtaButton';

// Testimonials Section
export default function TestimonialsSection() {
    return (
        <section
            className="max-w-6xl px-5 mx-auto mt-32 text-center"
            id="testimonials"
        >
            {/* Testimonials Heading */}
            <h2 className="text-4xl font-bold text-center">Testimonials</h2>
            {/* Testimonials Container */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                <TestimonialCard
                    link="avatar-anisha.png"
                    name="Anisha Li"
                    text="Manage has supercharged our team's workflow. 
                    The ability to maintain visibility on larger milestones at all 
                    times keeps everyone motivated."
                />
                <TestimonialCard
                    link="avatar-richard.png"
                    name="Richard Watts"
                    text="Manage has revolutionized the way our team operates. 
                    The real-time updates and streamlined communication has 
                    greatly improved our productivity."
                />
                <TestimonialCard
                    link="avatar-ali.png"
                    name="Ali Bravo"
                    text="As a company, we have found Manage to be an invaluable 
                    tool for keeping our projects on track. The real-time updates 
                    and progress tracking have greatly improved our overall workflow."
                />
            </div>
            <div className="flex-flex-col my-16 max-w-sm mx-auto">
                <CtaButton
                    link=""
                    value="Learn about other customer experiences"
                    bgColor="bg-brightRed"
                    hidden={false}
                />
            </div>
        </section>
    );
}
