import React from 'react';
import Image from 'next/image';
import reviewImg1 from '../../../public/images/reviewImg1.svg';
import reviewImg2 from '../../../public/images/reviewImg2.svg';
import reviewImg3 from '../../../public/images/reviewImg3.svg';

function Review() {
  return (
    <div className='bg-[#f8f6f6] py-10 px-5 w-full'>
      <div>
        <p className="font-mulish text-2xl sm:text-[28px] lg:text-[36px] font-semibold mb-4 text-center">
          Why our customers love us?
        </p>
        <p className='font-mulish text-sm text-center'>And, we think you will too.</p>
      </div>

      <div className='flex flex-wrap flex-col gap-6 items-center justify-center mt-6 lg:flex-row'>

        <div className='flex items-center bg-white px-6 py-5 w-full sm:max-w-[30%] rounded-xl shadow-sm'>
          <Image src={reviewImg1} alt="img" />
          <div className='ml-3'>
            <p className='font-mulish text-sm text-orange-500 font-semibold'>6100+ cashless garages</p>
            <p className='font-mulish text-xs text-gray-600'>for a hassle-free service</p>
          </div>
        </div>

        <div className='flex items-center bg-white px-6 py-5 w-full sm:max-w-[30%] rounded-xl shadow-sm'>
          <Image src={reviewImg3} alt="img" />
          <div className='ml-3'>
            <p className='font-mulish text-sm text-orange-500 font-semibold'>Instant motor claims</p>
            <p className='font-mulish text-xs text-gray-600'>through our IL Take Care app</p>
          </div>
        </div>

        <div className='flex items-center bg-white px-6 py-5 w-full sm:max-w-[30%] rounded-xl shadow-sm'>
          <Image src={reviewImg2} alt="img" />
          <div className='ml-3'>
            <p className='font-mulish text-sm text-orange-500 font-semibold'>Reliable customer support</p>
            <p className='font-mulish text-xs text-gray-600'>Call centre · Mail · 265 branches</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Review;
