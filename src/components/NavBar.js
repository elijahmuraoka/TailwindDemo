import React from 'react';
import MenuItem from './MenuItem';
import CtaButton from './CtaButton';
import logo from '../assets/logo.svg';

// Navbar
export default function NavBar(props) {
    return (
        <nav class="relative container mx-auto p-6">
            {/* Flex Container */}
            <div class="flex items-center justify-between">
                {/* Logo */}
                <div class="pt-2">
                    <img src={logo} alt="logo" />
                </div>
                {/* Menu Items */}
                <div class="hidden space-x-6 md:flex">
                    <MenuItem link="#hero" value="About Us" />
                    <MenuItem link="#testimonials" value="Community" />
                    <MenuItem link="#footer" value="Contact Us" />
                </div>
                <CtaButton
                    link=""
                    value="Get Started"
                    bgColor="bg-brightRed"
                    hidden={true}
                />
            </div>
        </nav>
    );
}
