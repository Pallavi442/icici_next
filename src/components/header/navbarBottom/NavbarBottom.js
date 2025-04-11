'use client'

import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import Image from 'next/image'

function NavbarBottom() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-gradient-to-b from-[rgba(241,125,1,1)] to-[rgba(174,33,32,1)] text-white py-2 px-4'>
            <div className='flex justify-between items-center'>
                {/* Left: Logo + Nav (desktop only) */}
                <div className='flex items-center gap-6'>
                    <Image src={logo} width={150} height={150} alt='logo' />

                    {/* Nav Menu - visible only on md and up */}
                    <ul className="hidden lg:flex space-x-6">
                        {["Car Insurance", "Two Wheeler Insurance", "Health Insurance", "Travel Insurance", "Other Insurance", "Claims"].map((item) => (
                            <li key={item} className="relative group cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <span>{item}</span>
                                    <span className="pt-[5px]">
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.108L3.898 5.022L5.003 6.128L6.106 5.021L10 1.108L9.957 1.066L8.894 0.001L5.003 3.911L1.104 0L0 1.108Z" fill="white" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Login & toggle */}
                <div className='flex items-center gap-4'>
                    <div className="hidden lg:flex items-center gap-2">
                        <span>Login</span>
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M1.108 10L5.022 6.102L6.128 4.997L5.021 3.894L1.108 0L1.066 0.0430002L0.001 1.106L3.911 4.997L0 8.896L1.108 10Z" fill="white" />
                        </svg>
                    </div>

                    {/* Hamburger for mobile */}
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                    <>
                     <ul className=" lg:flex flex-col lg:hidden mt-2 ">
                        {["Car Insurance", "Two Wheeler Insurance", "Health Insurance", "Travel Insurance", "Other Insurance", "Claims"].map((item) => (
                            <li key={item} className="relative group cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <span>{item}</span>
                                    <span className="pt-[5px]">
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.108L3.898 5.022L5.003 6.128L6.106 5.021L10 1.108L9.957 1.066L8.894 0.001L5.003 3.911L1.104 0L0 1.108Z" fill="white" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 py-2">Login</div>
                    </>
            )}
        </div>
    )
}

export default NavbarBottom;
