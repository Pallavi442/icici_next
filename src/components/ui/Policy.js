import React from 'react';
import Image from 'next/image';
import one from '../../../public/images/one.svg'
import two from '../../../public/images/two.svg';
import three from '../../../public/images/three.svg';
import four from '../../../public/images/four.svg';
import five from '../../../public/images/five.svg';
import six from '../../../public/images/six.svg';


function Policy() {
  return (
    <div className='bg-blue-900 p-10 py-0'>
        <div className='pt-6 pb-2.5'>
            <h1 className='font-mulish  md:text-[36px] text-[20px]  text-center text-white pb-5'>How to choose the right car insurance policy online?</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-20">

            <div className='flex gap-3 rounded-xl border border-blue-500 p-10 items-start'>
               <Image src={one} alt="one" className='pt-2'/>
               <div className='flex flex-col'>
                <span className='font-mulish text-[14px] md:text-[18px]  text-white'><b>What kind of coverage you need:</b></span>
                <span className='font-mulish text-[12px] md:text-[16px]  text-white'>Choose from options like liability, collision, comprehensive, or personal injury protection.</span>
               </div>
            </div>
            <div className='flex gap-3 rounded-xl border border-blue-500 p-10 items-start '>
               <Image src={two} alt="one" className='pt-2'/>
               <div className='flex flex-col'>
                <span className='font-mulish text-[14px] md:text-[18px]  text-white' ><b>How much your car is worth:</b></span>
                <span className='font-mulish text-[12px] md:text-[16px]  text-white'>Make sure the cost of your insurance policy matches your vehicles value..</span>
               </div>
            </div>
            <div className='flex gap-3 rounded-xl border border-blue-500 p-10 items-start'>
               <Image src={three} alt="one" className='pt-2'/>
               <div className='flex flex-col'>
                <span className='font-mulish text-[14px] md:text-[18px]   text-white'><b>How you drive:</b></span>
                <span className='font-mulish text-[12px] md:text-[16px]  text-white'>Your driving habits, such as how often you drive and what type of driving you do, can affect the cost of the insurance if you opt for pay-as-you-drive or pay-how-you-drive policies.</span>
               </div>
            </div>
           

            <div className='flex gap-3 rounded-xl border border-blue-500 p-10 items-start '>
               <Image src={four} alt="one" className='pt-2'/>
               <div className='flex flex-col'>
                <span className='font-mulish text-[14px] md:text-[18px]  text-white'><b>How much youre willing to pay out of pocket:</b></span>
                <span className='font-mulish text-[12px] md:text-[16px]  text-white'>Think about your budget and how much risk youre comfortable with. In case of an accident, if youre not comfortable spending money from your own pocket for your car repairs, opt for the Own Damage cover instead of a Third-party policy.</span>
               </div>
            </div>
            <div className='flex gap-3 rounded-xl border border-blue-500 p-10 items-start'>
               <Image src={five} alt="one" className='pt-2'/>
               <div className='flex flex-col'>
                <span className='font-mulish text-[14px] md:text-[18px]   text-white'><b>Where you live:</b></span>
                <span className='font-mulish text-[12px] md:text-[16px]  text-white'>Car insurance online costs can differ based on traffic and crime in your area.</span>
               </div>
            </div>
            <div className='flex gap-3 rounded-xl border border-blue-500 p-10 items-start'>
               <Image src={six} alt="one" className='pt-2'/>
               <div className='flex flex-col'>
                <span className='font-mulish text-[14px] md:text-[18px]  text-white'><b>Discounts:</b></span>
                <span className='font-mulish text-[12px] md:text-[16px]  text-white'>Look for discounts you might be eligible for, such as discounts for having multiple policies, being a safe driver, or driving less.</span>
               </div>
            </div> 
        </div>
        <div className='py-4'>
            <span className='font-mulish text-[12px] md:text-[16px] text-white'>Before buying car insurance online, read the policy details and fine print, and ask questions to clarify anything you need help understanding. Regularly reviewing your car insurance policy can help ensure that it continues to meet your needs and that youre not overpaying for coverage you dont need.</span>
        </div>
    </div>
  )
}

export default Policy