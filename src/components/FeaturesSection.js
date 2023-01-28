import React from 'react';
import ListItem from './ListItem';

export default function FeaturesSection(params) {
    return (
        <section id="features">
            {/* <!-- Flex container  --> */}
            <div class="container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row">
                {/* <!-- What's Different Heading  --> */}
                <div class="flex flex-col space-y-10 md:w-1/2">
                    <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
                        What's different about Manage?
                    </h2>
                    <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Manage provides all the functionality your team needs,
                        without the complexity. Out software is tailor-made for
                        modern digital product teams.
                    </p>
                </div>
                {/* <!-- Numbered List --> */}
                <div class="flex flex-col space-y-8 md:w-1/2">
                    <ListItem
                        number="01"
                        heading="Track company-wide progress"
                        description="See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    down to the smallest details. Never lose sight of the bigger
                    picture again."
                    />
                    <ListItem
                        number="02"
                        heading="Advanced built-in reports"
                        description="Set internal delivery estimates and track progress toward
                        company goals. Our customizable dashboard helps you build out
                        the reports you need to keep key stakeholders informed."
                    />
                    <ListItem
                        number="03"
                        heading="Everything you need in one place"
                        description="Stop jumping from one service to another to communicate, store
                        files, track tasks and share documents. Manage offers an
                        all-in-one team productivity solution."
                    />
                </div>
            </div>
        </section>
    );
}
