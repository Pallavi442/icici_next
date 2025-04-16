'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import swipperImg from '../../../public/images/swipperImg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const swipperArr = [
  {
    title: 'Comprehensive car insurance policy',
    description1:
      'Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.',
    description2:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
  },
  {
    title: 'Comprehensive car insurance policy-2',
    description1:
      'Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.',
    description2:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
  },
  {
    title: 'Comprehensive car insurance policy-3',
    description1:
      'Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.',
    description2:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
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
    <div className="bg-[rgba(255,242,235,1)] px-5 sm:px-6 py-10 w-full xl:h-[565px]">
      <h1 className="font-mulish text-[24px] sm:text-[30px] lg:text-[36px] text-center font-semibold mb-6">
        What are the different types of car insurance policies?
      </h1>
      <div className="hidden md:flex items-center justify-center w-full px-20">
        <button
          onClick={handlePrev}
         className="p-5 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110 w-14 h-14 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>

        <div className="flex flex-col sm:flex-row items-center bg-white sm:px-8 sm:py-10 rounded-2xl mx-4 w-full gap-10">
          <div className="flex-shrink-0">
            <Image src={swipperImg} alt="swipper img" width={150} height={150} />
          </div>
          <div className="space-y-3 text-left">
            <p className="font-mulish text-[16px] font-bold">{swipperArr[currentIndex].title}</p>
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
         className="p-5 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110 w-14 h-14 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </button>
      </div>

      <div className="block md:hidden mt-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {swipperArr.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-4 bg-white p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
                <Image src={swipperImg} alt="swipper img" width={120} height={120} />
                <div className="space-y-3 text-left">
                  <p className="font-mulish text-[18px] font-bold text-center">{item.title}</p>
                  <p className="font-mulish text-[15px] leading-relaxed">{item.description1}</p>
                  <p className="font-mulish text-[15px] leading-relaxed">{item.description2}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TypesOfPolicies;
