import React from 'react';

// List Item in Features Section
export default function ListItem({ number, heading, description }) {
    return (
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                    <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                        {number}
                    </div>
                    <h3 class="text-base font-bold md:mb-4 md:hidden">
                        {heading}
                    </h3>
                </div>
            </div>
            <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                    {heading}
                </h3>
                <p class="text-darkGrayishBlue">{description}</p>
            </div>
        </div>
    );
}
