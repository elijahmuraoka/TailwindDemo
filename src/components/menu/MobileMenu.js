import React, { useState } from 'react';
import MenuItem from './MenuItem';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

// The menu component to display on mobile devices
export default function MobileMenu() {
    const [menuActive, setMenuActive] = useState(false);
    const menuActiveClass = menuActive
        ? 'translate-y-0'
        : 'translate-y-[-50%] translate-x-[50%] scale-0';

    function handleOnClick() {
        if (!menuActive) {
            setMenuActive(true);
        } else {
            setMenuActive(false);
        }
        console.log(menuActive);
    }

    return (
        <div className="flex flex-col items-start justify-center p-8">
            <button
                id="menu-button"
                className="relative block w-[24px] h-[24px] cursor:pointer md:hidden focus:outline-none mb-3"
                onClick={handleOnClick}
            >
                {menuActive ? (
                    <MenuOpenOutlinedIcon
                        fontSize="large"
                        className="text-brightRedLight"
                    />
                ) : (
                    <MenuOutlinedIcon
                        fontSize="large"
                        className="ease-in-out duration-300 hover:text-brightRedLight"
                    />
                )}
            </button>
            <div className="md:hidden">
                <div
                    id="menu"
                    className={`${menuActiveClass} absolute flex flex-col items-center right-14 py-8 space-y-6 bg-gray-50 drop-shadow-md transition-transform ease-in-out duration-200`}
                >
                    <MenuItem link="#hero" value="About Us" mobile={true} />
                    <MenuItem
                        link="#testimonials"
                        value="Community"
                        mobile={true}
                    />
                    <MenuItem link="#footer" value="Contact Us" mobile={true} />
                </div>
            </div>
        </div>
    );
}
