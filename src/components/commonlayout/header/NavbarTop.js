'use client'
import React from 'react'

function NavbarTop() {
  return (
    <div className='bg-[#f8f6f6] h-auto'>
    <div className="w-full flex flex-wrap justify-between max-w-[1440px] mx-auto px-5 xl:h-[44px]">
      <div className="flex flex-wrap gap-2">
        <div className="flex gap-2 items-center">
          <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.9984 0.962891C10.5665 0.962891 6.96094 4.56847 6.96094 9.00032C6.96094 13.4322 10.5665 17.0378 14.9984 17.0378C19.4302 17.0378 23.0358 13.4322 23.0358 9.00032C23.0358 4.56847 19.4302 0.962891 14.9984 0.962891ZM15 18C10.0374 18 6 13.9626 6 9C6 4.03739 10.0374 0 15 0C19.9626 0 24 4.03739 24 9C24 13.9626 19.9626 18 15 18Z" fill="#282828" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.9433 3.37332C12.9433 3.37332 13.8691 4.54958 14.2088 5.79142C14.4017 6.62143 13.8514 6.80588 13.4928 6.94373C13.1342 7.08157 12.526 7.52917 13.0559 8.7322C13.5859 9.93523 14.6442 11.0705 15.2141 11.2674C15.784 11.4643 15.9134 11.6158 16.7369 10.9086C17.3239 10.4045 18.2511 11.1205 18.7354 11.5735C18.9306 11.756 19.8576 12.7932 19.8576 12.7932C19.8576 12.7932 20.4806 13.7232 19.1207 14.4967C17.7609 15.2702 17.3709 15.1773 15.9051 14.0426C14.4393 12.9079 11.2742 10.5088 10.0318 5.32069C9.95923 5.01364 10.022 4.72275 10.1081 4.45152C10.2777 3.9167 11.3022 3.11491 11.8461 3.02319C12.2299 2.95843 12.6392 3.01535 12.9433 3.37332Z" fill="#282828" />
            <path d="M29.5 9.5H23.5" stroke="#282828" strokeLinecap="square" />
            <path d="M6.5 9.5H0.5" stroke="#282828" strokeLinecap="square" />
          </svg>
          <span>1800 2666</span>
          <span>|</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.9433 0.373318C2.9433 0.373318 3.86914 1.54958 4.20885 2.79142C4.40165 3.62143 3.85137 3.80588 3.49279 3.94373C3.13416 4.08157 2.52596 4.52917 3.05592 5.7322C3.58589 6.93523 4.64416 8.07049 5.21412 8.26738C5.78397 8.46432 5.91341 8.61577 6.73694 7.9086C7.32386 7.40451 8.25115 8.12054 8.73541 8.57346C8.93062 8.75598 9.85756 9.79324 9.85756 9.79324C9.85756 9.79324 10.4806 10.7232 9.12072 11.4967C7.76093 12.2702 7.37091 12.1773 5.9051 11.0426C4.43929 9.9079 1.27423 7.50881 0.0318069 2.32069C-0.0407703 2.01364 0.0220465 1.72275 0.108088 1.45152C0.277668 0.916703 1.30216 0.114911 1.84614 0.0231934C2.22994 -0.0415656 2.63923 0.0153526 2.9433 0.373318Z" fill="#282828" />
          </svg>
          <span>Call Back</span>
          <span>|</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#26BA40" />
          </svg>
          <span>Live Chat</span>
        </div>
      </div>
      <div className="flex ">
      <ul className="flex flex-wrap space-x-2 text-xs mt-2 sm:text-base sm:mt-0 lg:space-x-6">
          {["Renewals", "Support", "Info Center", "Investor Relations"].map((item) => (
            <li key={item} className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer">
                <span>{item}</span>
                <svg
                  className="transform transition-transform duration-200 group-hover:rotate-180"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.904047L3.1184 4.09758L4.0024 5L4.8848 4.09677L8 0.904047L7.9656 0.869778L7.1152 0.000815927L4.0024 3.19109L0.8832 0L0 0.904047Z"
                    fill="#282828"
                  />
                </svg>
              </div>
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10 rounded-md ">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default NavbarTop
