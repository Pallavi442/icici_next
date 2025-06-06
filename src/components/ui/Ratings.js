'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import star1 from '../../../public/images/star1.svg';
import star2 from '../../../public/images/star2.svg';
import quote from '../../../public/images/quote.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

const reviews = [
  {
    name: 'Kumar Ambuj',
    ratingImg: star1,
    description:
      'The interaction was good. The customer service associate gave me answers to all my queries. Her presence while making the decision to buy was helpful. I will definitely recommend ICICI Lombard to my friends and family for the way they treat customers.',
  },
  {
    name: 'Sanjay Achliya ',
    ratingImg: star2,
    description:
      "Very good experience. The agent gave me all the information clearly and didn't mind repeating certain points until I understood. I don't fully get technology, but she offered to take care of the whole process of buying the car insurance policy without any hassle. I am truly thankful.",
  },
  {
    name: 'Priya Sharma',
    ratingImg: star1,
    description:
      'The interaction was good. The customer service associate gave me answers to all my queries. Her presence while making the decision to buy was helpful. I will definitely recommend ICICI Lombard to my friends and family for the way they treat customers.',
  },
  {
    name: 'Raj Verma',
    ratingImg: star2,
    description:
      'The interaction was good. The customer service associate gave me answers to all my queries. Her presence while making the decision to buy was helpful. I will definitely recommend ICICI Lombard to my friends and family for the way they treat customers.',
  },
];

const Ratings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  console.log("isMobile",isMobile);
  

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setItemsPerView(mobile ? 1 : 2);
    };
  
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(reviews.length - itemsPerView, 0) : prev - itemsPerView
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= reviews.length ? 0 : prev + itemsPerView
    );
  };

  return (
    <div className="px-4 py-5 md:px-12 md:py-10 text-center xl:h-[681px]">
      <h2 className="text-3xl md:text-4xl font-semibold pt-4 md:mb-4 md:pt-6">Ratings and reviews</h2>

      <div className="flex justify-center items-center mb-10 pt-5">
        <div className="flex items-center space-x-4 pr-6">
          <h4 className=" text-2xl lg:text-4xl font-semibold border-r border-slate-400 pr-5">4.6 ⭐</h4>
          <div className="text-left pl-5">
            <p className="text-sm text-black">Our customers have rated us<br />
              <span className='text-slate-400'>Based on 456 reviews</span></p>
          </div>
        </div>
      </div>

      <div className="md:hidden">
      {isMobile && (
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Autoplay]}
    onSlideChange={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
  >
    {reviews.map((review, idx) => (
      <SwiperSlide key={idx}>
        <div className="text-left space-y-4 ">
          <div className="flex items-center space-x-8 md:space-x-4">
            <p className="font-bold text-lg">{review.name}</p>
            <Image src={review.ratingImg} alt="stars" width={80} height={16} />
            <Image src={quote} alt="quote" width={50} height={50} />
          </div>
          <p className="text-gray-700 text-sm">{review.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)}
      </div>
      <div className="hidden md:flex items-center justify-center gap-6 pt-5">
        <div className="hidden md:flex items-center justify-center gap-6 pt-5">
          <button
            onClick={handlePrev}
            className="p-5 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110 w-14 h-14 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
          </button>
        </div>

        <div className="bg-white p-6 max-w-3xl w-full h-[234px]">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
            {reviews.slice(currentIndex, currentIndex + 2).map((review, idx) => (
              <div key={idx} className="text-left space-y-4">
                <div className="flex justify-between">
                  <span className='flex items-center space-x-4'>
                  <p className="font-bold text-lg">{review.name}</p>
                  <Image src={review.ratingImg} alt="stars" width={80} height={16} />
                  </span>
  
                  <Image src={quote} alt="quote" width={50} height={50} />
                </div>
                <p className="text-gray-700 text-sm">{review.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-5 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110 w-14 h-14 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </button>
      </div>

      <div className="flex flex-col items-center md:pt-6">
        <div className="flex space-x-2 gap-2 hidden md:flex">
          {Array.from({ length: Math.ceil(reviews.length / itemsPerView) }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i * itemsPerView === currentIndex ? 'bg-orange-500 px-2' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <div className='p-3 md:pt-8'>
        <button className="mt-4 px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-xs hover:bg-orange-500 hover:text-white transition">
          Read all reviews
        </button>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
