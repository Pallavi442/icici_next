'use client';
import React, { useState } from 'react';
import swipperImg from '../../assets/swipperImg.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const swipperArr = [
    {
        title: 'Comprehensive car insurance policy',
        description1:
            'Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.',
        description2:
            'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
    },
    {
        title: 'Third-party car insurance policy',
        description1:
            'Third-party car insurance is mandatory by law and covers you against legal liabilities towards a third party in case of an accident.',
        description2:
            'This policy covers injuries to third parties, damage to their property or vehicle, and does not cover your own car’s damage.',
    },
    {
        title: 'Standalone own damage car insurance policy',
        description1:
            'This policy only covers damage to your own car from accidents, fire, natural disasters, etc., but not third-party damage.',
        description2:
            'It is useful when combined with a third-party policy for full protection.',
    },
];

function TypesOfPolicies() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? swipperArr.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === swipperArr.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-[rgba(255,242,235,1)] px-4 sm:px-6 lg:px-10 py-10">
            <h1 className="font-mulish text-[24px] sm:text-[30px] lg:text-[36px] text-center font-bold mb-6">
                What are the different types of car insurance policies?
            </h1>

            <div className="flex items-center justify-center gap-6 ">
                <button
                    onClick={handlePrev}
                    className="p-4 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 sm:p-8 rounded-2xl max-w-4xl w-full">
                    <div className="flex-shrink-0">
                        <Image src={swipperImg} alt="swipper img" width={150} height={150}/>
                    </div>
                    <div className="space-y-3">
                        <p className="font-mulish text-[16px] font-bold">
                            {swipperArr[currentIndex].title}
                        </p>
                        <p className="font-mulish text-[15px] sm:text-[16px] leading-relaxed">
                            {swipperArr[currentIndex].description1}
                        </p>
                        <p className="font-mulish text-[15px] sm:text-[16px] leading-relaxed">
                            {swipperArr[currentIndex].description2}
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    className="p-4 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
                </button>
            </div>
        </div>
    );
}

export default TypesOfPolicies;
