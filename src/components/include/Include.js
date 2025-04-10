"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import check from '../../assets/check.svg';

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
        <div className='p-4 sm:p-6 lg:p-10'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl md:text-3xl xl:text-4xl '>What’s included and what’s not?</h1>
            </div>

            <ul className='border-b-2 border-[#C9C9C9] flex flex-wrap mb-6'>
                <li
                    className={`cursor-pointer py-3 px-4 sm:px-6 text-sm sm:text-base ${activeLink === "/Inclusions"
                        ? "text-[#EC6625] border-b-2 border-[#EC6625]"
                        : "text-[#838383]"
                        }`}
                    onClick={() => setActiveLink('/Inclusions')}
                >
                    Inclusions
                </li>
                <li
                    className={`cursor-pointer py-3 px-4 sm:px-6 text-sm sm:text-base ${activeLink === "/Exclusions"
                        ? "text-[#EC6625] border-b-2 border-[#EC6625]"
                        : "text-[#838383]"
                        }`}
                    onClick={() => setActiveLink('/Exclusions')}
                >
                    Exclusions
                </li>
            </ul>

            {activeLink === "/Inclusions" && (
                <div className='pb-5'>
                    <span className='font-semibold'>What’s included:</span>
                    <div className=' flex w-fill py-2 flex-col gap-4 md:flex-row'>
                        <div className='sm:w-3/4 md:w-1/2'>
                            <ul className='flex gap-4 flex-col'>
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

            {activeLink === "/Exclusions" && (
                <div className='my-10 text-center px-4'>
                    <p>Exclusion details</p>
                </div>
            )}
            <hr className="border-b-2 border-[#C9C9C9]" />
            <div className='flex text-center md:text-start flex-wrap gap-4 py-10'>
                <span>Policy documents:</span>
                <a href="" className="text-[rgb(236_102_8/1)] underline underline-offset-1">Private car package policy wordings</a>
                <span className='hidden md:block'>|</span>
                <a href="" className="text-[rgb(236_102_8/1)] underline underline-offset-1">Stand-alone own damage private car insurance policy wording</a>
                <span className='hidden md:block'>|</span>
                <a href="" className="text-[rgb(236_102_8/1)] underline underline-offset-1">Private car liability policy wording</a>
            </div>
        </div>
    )
}

export default Include