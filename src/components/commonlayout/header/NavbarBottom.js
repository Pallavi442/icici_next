'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../../public/images/logo.png'

function NavbarBottom() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const navItems = [
    "Car Insurance",
    "Two Wheeler Insurance",
    "Health Insurance",
    "Travel Insurance",
    "Other Insurance",
    "Claims"
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(prev => prev === index ? null : index);
  };

  return (
    < div className='bg-gradient-to-b from-[rgba(241,125,1,1)] to-[rgba(174,33,32,1)]'>
      <div className='text-white py-2 max-w-[1440px] mx-auto px-5'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-6'>
            <Image src={logo} width={150} height={150} alt='logo' />

            <ul className="hidden lg:flex space-x-6">
              {navItems.map((item, index) => (
                <li
                  key={item}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setHoveredDropdown(index)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <div className="flex items-center space-x-2 text-xs  xl:text-base">
                    <span>{item}</span>
                    <span className="pt-[5px]">
                      {hoveredDropdown === index ? (
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10 5.892L6.102 1.978L4.997 0.872L3.894 1.979L0 5.892L0.043 5.934L1.106 7L4.997 3.089L8.896 7L10 5.892Z" fill="white"/>
                        </svg>
                      ) : (
              
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0 1.108L3.898 5.022L5.003 6.128L6.106 5.021L10 1.108L9.957 1.066L8.894 0.001L5.003 3.911L1.104 0L0 1.108Z" fill="white" />
                        </svg>
                      )}
                    </span>
                  </div>
                  {hoveredDropdown === index && (
                    <div className="absolute left-0 w-40 bg-white text-black shadow-lg z-10 rounded-md overflow-hidden">
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-center gap-4'>
            <div className="hidden lg:flex items-center gap-2">
              <span className='text-xs  xl:text-base'>Login</span>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.108 10L5.022 6.102L6.128 4.997L5.021 3.894L1.108 0L1.066 0.0430002L0.001 1.106L3.911 4.997L0 8.896L1.108 10Z" fill="white" />
              </svg>
            </div>

            <button className="lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='bg-gray-200 text-black'>
          <ul className="flex flex-col lg:hidden p-5 pb-0">
            {navItems.map((item, index) => (
              <li key={item} className="relative cursor-pointer">
                <div className="flex items-center justify-between my-1" onClick={() => toggleDropdown(index)}>
                  <span>{item}</span>
                  <span className="pt-[5px]">
                    {activeDropdown === index ? (
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 5.892L6.102 1.978L4.997 0.872L3.894 1.979L0 5.892L0.043 5.934L1.106 7L4.997 3.089L8.896 7L10 5.892Z" fill="black"/>
                      </svg>
                    ) : (
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.108L3.898 5.022L5.003 6.128L6.106 5.021L10 1.108L9.957 1.066L8.894 0.001L5.003 3.911L1.104 0L0 1.108Z" fill="black" />
                      </svg>
                    )}
                  </span>
                </div>
                {activeDropdown === index && (
                  <div className="mt-2 ml-4 bg-white text-black shadow-lg rounded-md overflow-hidden w-40">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 pt-4">Login</div>
        </div>
      )}
    </div>
  );
}

export default NavbarBottom;
