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
                    <MenuItem link="" value="Pricing" />
                    <MenuItem link="" value="About Us" />
                    <MenuItem link="" value="Careers" />
                    <MenuItem link="" value="Community" />
                </div>
                <CtaButton link="" value="Get Started" />
            </div>
        </nav>
    );
}
