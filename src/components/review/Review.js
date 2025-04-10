import React from 'react';
import Image from 'next/image'
import reviewImg1 from '../../assets/reviewImg1.png';
import reviewImg2 from '../../assets/reviewImg2.png';
import reviewImg3 from '../../assets/reviewImg3.png';

function Review() {
  return (
    <div className='bg-[#f8f6f6] p-10'>
        <div>
          <p className='font-mulish text-[30px] text-center'><b>Why our customers love us?</b></p>
          <p className='font-mulish text-[14px] text-center'>And, we think you will too.</p>
        </div>

        <div className='flex flex-wrap justify-evenly bg-[#f6f6f6] mt-4'>

          <div className='flex bg-white p-7 gap-2 rounded-xl'>
            <div>
              <Image src={reviewImg1} alt="img"/>
            </div>
            <div>
              <p className='font-mulish text-[18px] text-orange-500'>6100+ cashless garages</p>
              <p className='font-mulish text-[12px]'>for a hassle-free service</p>
            </div>
          </div>

          <div className='flex bg-white p-7 gap-2 rounded-xl'>
            <div>
              <Image src={reviewImg3} alt="img"/>
            </div>
            <div>
            <p className='font-mulish text-[18px] text-orange-500'>Instant motor claims</p>
              <p className='font-mulish text-[12px]'>through our IL Take Care app</p>
            </div>
          </div>

          <div className='flex bg-white p-7 gap-2 rounded-xl'>
            <div>
              <Image src={reviewImg2} alt="img"/>
            </div>
            <div>
            <p className='font-mulish text-[18px] text-orange-500'>Reliable customer support</p>
              <span className='font-mulish text-[12px]'>Call centre. Mail. 265 branches</span>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Review