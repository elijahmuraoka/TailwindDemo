import React from 'react';
import logo from '../assets/logo-white.svg';
import SocialIcon from './SocialIcon';

export default function Footer() {
    const linkClasses = 'ease-in-out duration-300 hover:text-brightRed';
    function makeCopyRight(classes) {
        return (
            <span className={`${classes} text-white text-sm`}>
                Copyright &copy; 2023 Elijah Muraoka
            </span>
        );
    }

    return (
        <footer id="footer" className="py-16 bg-veryDarkBlue w-full">
            {/* Flex Container */}
            <div className="container mx-auto flex w-full flex-col-reverse items-center space-y-12 md:flex-row md:justify-between md:space-y-0 xl:w-4/5">
                {makeCopyRight('md:hidden')}
                {/* Logo and social links container */}
                <div className="flex flex-col-reverse justify-between md:flex-col md:space-y-6 md:items-start">
                    {/* Logo */}
                    <div className="self-center my-12 md:self-start md:my-0">
                        <img src={logo} alt="white logo" />
                    </div>
                    <div className="flex flex-row justify-center space-x-5">
                        {/* Facebook Link */}
                        <SocialIcon
                            link=""
                            image="icon-facebook.svg"
                            alt="facebook icon"
                        />
                        {/* YouTube Link */}
                        <SocialIcon
                            link=""
                            image="icon-youtube.svg"
                            alt="youtube icon"
                        />
                        {/* Instagram Link */}
                        <SocialIcon
                            link=""
                            image="icon-instagram.svg"
                            alt="instagram icon"
                        />
                        {/* Twitter Link */}
                        <SocialIcon
                            link=""
                            image="icon-twitter.svg"
                            alt="twitter icon"
                        />
                        {/* Pinterest Link */}
                        <SocialIcon
                            link=""
                            image="icon-pinterest.svg"
                            alt="pinterest icon"
                        />
                    </div>
                </div>
                {/* Link List Container */}
                <div className="w-2/3 flex flex-row justify-between md:w-1/3 md:mx-12">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className={linkClasses}>
                            Home
                        </a>
                        <a href="" className={linkClasses}>
                            Pricing
                        </a>
                        <a href="" className={linkClasses}>
                            Products
                        </a>
                        <a href="" className={linkClasses}>
                            About
                        </a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className={linkClasses}>
                            Careers
                        </a>
                        <a href="" className={linkClasses}>
                            Community
                        </a>
                        <a href="" className={linkClasses}>
                            Products
                        </a>
                        <a href="" className={linkClasses}>
                            Privacy Policy
                        </a>
                    </div>
                </div>
                {/* Input Container */}
                <form
                    action="submit"
                    className="w-2/3 flex flex-col space-y-6 xl:space-x-4 xl:flex-row xl:space-y-0 md:w-1/3"
                >
                    <input
                        type="text"
                        placeholder="john@gmail.com"
                        className="px-6 py-2 rounded-full hover:cursor-text focus:ring-4 focus:outline-none"
                    />
                    <input
                        type="submit"
                        value="Sign Up Now"
                        className="px-6 py-2 text-white bg-brightRed rounded-full transition ease-in-out delay-100 hover:bg-brightRedLight hover:cursor-pointer hover:shadow-xl"
                    />
                </form>
            </div>
            {makeCopyRight('hidden md:block ml-[40%] mt-12')}
        </footer>
    );
}
