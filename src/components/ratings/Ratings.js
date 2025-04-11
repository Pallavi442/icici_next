'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import star1 from '../../assets/star1.svg';
import star2 from '../../assets/star2.svg';
import quote from '../../assets/quote.svg';

const reviews = [
  {
    name: 'Kumar Ambuj',
    ratingImg: star1,
    description:
      'The interaction was good. The customer service associate gave me answers to all my queries. Her presence while making the decision to buy was helpful. I will definitely recommend ICICI Lombard to my friends and family for the way they treat customers.',
  },
  {
    name: 'Sanjay Achliya',
    ratingImg: star2,
    description:
      "Very good experience. The executive gave me all the information clearly and didn't mind repeating certain points until I understood. I don't fully get technology, but she offered to take care of the whole process of buying the car insurance policy without any hassle. I am truly thankful.",
  },
  {
    name: 'Priya Sharma',
    ratingImg: star1,
    description:
      'Quick and seamless experience. The team guided me perfectly. I had my doubts initially but they clarified everything and made me confident in choosing the right plan.',
  },
  {
    name: 'Raj Verma',
    ratingImg: star2,
    description:
      'Very professional service. I’m impressed by the way the process was handled end-to-end. Would definitely recommend this to others.',
  },
];

const Ratings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(reviews.length - 2, 0) : prev - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= reviews.length ? 0 : prev + 2
    );
  };

  return (
    <div className="px-4 md:px-12 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ paddingTop: '25px' }}>Ratings and reviews</h2>

      <div className="flex justify-center items-center mb-10" style={{ paddingTop: '20px' }}>
        <div className="flex items-center space-x-4 pr-6 ">
          <h4 className="text-lg font-semibold border-r-1 border-r-slate-400" style={{ paddingRight: "20px" }}>4.6 ⭐</h4>
          <div className="text-left" style={{ paddingLeft: '20px' }}>

            <p className="text-sm text-black">Our customers have rated us<br /><span className='text-slate-400'>Based on 456 reviews</span></p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6" style={{ paddingTop: '20px' }}>
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>

        <div className="bg-white p-6 max-w-3xl w-full">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.slice(currentIndex, currentIndex + 2).map((review, idx) => (
              <div key={idx} className="text-left space-y-4">
                <div className="flex items-center space-x-2 gap-4">
                  <p className="font-bold text-lg">{review.name}</p>
                  <Image src={review.ratingImg} alt="stars" width={80} height={16} />
                  <Image src={quote} alt="quote" width={20} height={20} />
                </div>
                <p className="text-gray-700 text-sm">{review.description}</p>
              </div>
            ))}
          </div>
        </div>


        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-white text-gray-800 shadow transition duration-200 hover:bg-orange-500 hover:text-white hover:scale-110"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </button>
      </div>

      <div className="flex flex-col items-center" style={{ paddingTop: '20px' }}>
        <div className="flex space-x-2 gap-2">
          {Array.from({ length: reviews.length / 2 }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i * 2 === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>

        <button className="mt-4 px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition" style={{ marginTop: '20px', padding: '15px' }}>
          Read all reviews
        </button>
      </div>
    </div>
  );
};

export default Ratings;