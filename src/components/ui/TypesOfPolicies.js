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
      'Comprehensive car insurance provides complete coverage for your vehicle, including natural disasters, theft, and third-party liabilities.',
    description2:
      'It may include benefits like roadside assistance and towing. Though more expensive, it offers broader coverage than other types.',
  },
  {
    title: 'Third-party car insurance policy',
    description1:
      'Third-party car insurance is mandatory by law and covers legal liabilities towards others in case of an accident.',
    description2:
      'It covers injuries or damage to third-party vehicles/property but doesn’t cover your own car’s damage.',
  },
  {
    title: 'Standalone own damage car insurance policy',
    description1:
      'This policy covers damage to your own car due to accidents, fire, or natural disasters but not third-party damages.',
    description2:
      'It’s often combined with third-party policies for full protection.',
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
      <div className="hidden md:flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
         className="p-5 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110 w-14 h-14 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 sm:p-8 rounded-2xl max-w-4xl w-full">
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
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
        >
          {swipperArr.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-4 bg-white p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
                <Image src={swipperImg} alt="swipper img" width={120} height={120} />
                <div className="space-y-3 text-left">
                  <p className="font-mulish text-[16px] font-bold text-center">{item.title}</p>
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
