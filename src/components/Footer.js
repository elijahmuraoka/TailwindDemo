import React from 'react';
import logo from '../assets/logo-white.svg';
import SocialIcon from './SocialIcon';

export default function Footer() {
    return (
        <footer id="footer" className="bg-veryDarkBlue">
            {/* Flex Container */}
            <div className="container flex flex-col-reverse  justify-between  px-6 py-14 space-x-24 mx-auto space-y-12 md:flex-row md:space-y-0 ">
                {/* Logo and social links container */}
                <div className="flex flex-col-reverse items-center justify-between space-y-16 md:flex-col md:space-y-0 md:items-start">
                    {/* Logo */}
                    <div className="my-12 md:my-0">
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
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className="hover:text-brightRed">
                            Home
                        </a>
                        <a href="" className="hover:text-brightRed">
                            Pricing
                        </a>
                        <a href="" className="hover:text-brightRed">
                            Products
                        </a>
                        <a href="" className="hover:text-brightRed">
                            About
                        </a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className="hover:text-brightRed">
                            Careers
                        </a>
                        <a href="" className="hover:text-brightRed">
                            Community
                        </a>
                        <a href="" className="hover:text-brightRed">
                            Products
                        </a>
                        <a href="" className="hover:text-brightRed">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                {/* Input Container */}
                <div className="flex flex-col justify-between">
                    <form
                        action="submit"
                        className="flex flex-col max-w- md:space-x-10 md:flex-row"
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
            </div>
        </footer>
    );
}
