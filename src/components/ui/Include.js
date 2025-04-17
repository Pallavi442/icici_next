"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import check from '../../../public/images/check.svg';

const list = [
    { text: "Coverage for natural disasters like earthquakes, floods, fires and storms" },
    { text: "Cashless repairs in 5100+ network garages" },
    { text: "Coverage for theft, accidents and terrorist activities" },
    { text: "No claim bonus up to 50%" },
]
const list2 = [
    { text: "₹15 lakh Personal Accident Cover" },
    { text: "9 add ons to choose from" },
    { text: "Third-party legal liabilities cover" },
    { text: "Instant claim settlement via InstaSpect" },
]

const Include = () => {
    const [activeLink, setActiveLink] = useState("/Inclusions")

    return (
        <div className='bg-[#F8F6F6] xl:h-[607px]'>

        <div className='sm:p-6 max-w-[1440px] mx-auto overflow-hidden px-5'>
            <div className='text-center  py-6 pb-0 md:py-8 '>
                <h1 className='text-2xl md:text-3xl xl:text-4xl '>What’s included and what’s not?</h1>
            </div>

            <ul className='border-b-2 border-[#C9C9C9] flex flex-wrap mb-6 md:mb-12'>
                <li
                    className={`cursor-pointer py-4 px-4 sm:px-6 text-sm sm:text-base ${activeLink === "/Inclusions"
                        ? "text-[#EC6625] border-b-2 border-[#EC6625]"
                        : "text-[#838383]"
                        }`}
                    onClick={() => setActiveLink('/Inclusions')}
                >
                    Inclusions
                </li>
                <li
                    className={`cursor-pointer py-4 px-4 sm:px-6 text-sm sm:text-base ${activeLink === "/Exclusions"
                        ? "text-[#EC6625] border-b-2 border-[#EC6625]"
                        : "text-[#838383]"
                        }`}
                    onClick={() => setActiveLink('/Exclusions')}
                >
                    Exclusions
                </li>
            </ul>

            {activeLink === "/Inclusions" && (
                <div className=' pb-6 md:pb-12'>
                    <span className='font-semibold'>What’s included:</span>
                    <div className=' flex w-fill py-4 flex-col gap-4 md:flex-row'>
                        <div className='sm:w-3/4 md:w-1/2'>
                            <ul className='flex gap-6 flex-col'>
                                {list.map((item, index, arr) => (
                                    <li key={index} className="flex gap-2 items-center">


                                        <Image src={check} alt="check" />
                                        <a>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='sm:w-3/4 md:w-1/2'>
                            <ul className='flex gap-6 flex-col'>
                                {list2.map((item, index, arr) => (
                                    <li key={index} className="flex gap-2 items-center">


                                        <Image src={check} alt="check" />
                                        <a>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activeLink === "/Exclusions" && (
                 <div className='pb-14'>
                 <span className='font-semibold'>What’s excluded:</span>
                 <div className=' flex w-fill py-2 flex-col gap-4 md:flex-row'>
                     <div className='sm:w-3/4 md:w-1/2'>
                         <ul className='flex gap-6 flex-col'>
                             {list.map((item, index, arr) => (
                                 <li key={index} className="flex gap-2 items-center">


                                     <Image src={check} alt="check" />
                                     <a>{item.text}</a>
                                 </li>
                             ))}
                         </ul>
                     </div>
                     <div className='sm:w-3/4 md:w-1/2'>
                         <ul className='flex gap-4 flex-col'>
                             {list2.map((item, index, arr) => (
                                 <li key={index} className="flex gap-2 items-center">


                                     <Image src={check} alt="check" />
                                     <a>{item.text}</a>
                                 </li>
                             ))}
                         </ul>
                     </div>
                 </div>
             </div>
            )}
            <hr className="border-b-2 border-[#C9C9C9]" />
            <div className="flex flex-col items-start lg:flex-row lg:items-center lg:flex-wrap text-start gap-2 lg:gap-4 pt-10">
                <span className="font-medium">Policy documents:</span>

                <a href="#" className="text-[rgb(236_102_8/1)] underline underline-offset-1">
                    Private car package policy wordings
                </a>
                <span className="hidden lg:inline">|</span>

                <a href="#" className="text-[rgb(236_102_8/1)] underline underline-offset-1">
                    Stand-alone own damage private car insurance policy wording
                </a>
                <span className="hidden lg:inline">|</span>

                <a href="#" className="text-[rgb(236_102_8/1)] underline underline-offset-1">
                    Private car liability policy wording
                </a>
            </div>

            </div>
        </div>
    )
}

export default Include