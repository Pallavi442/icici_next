import React from 'react';
import Image from 'next/image';
import one from '../../../public/images/one.svg';
import two from '../../../public/images/two.svg';
import three from '../../../public/images/three.svg';
import four from '../../../public/images/four.svg';
import five from '../../../public/images/five.svg';
import six from '../../../public/images/six.svg';

function Policy() {
  return (

    <div className=' bg-[#00305B] xl:h-[883px]'>

    <div className='max-w-[1440px] mx-auto overflow-hidden px-6 py-0 md:py-8 lg:h[884px] h-auto'>
      <div className='pb-5'>
        <h1 className='font-mulish text-2xl md:text-4xl text-center text-white py-5 font-semibold'>
          How to choose the right car insurance policy online?
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
        {[ 
          {
            img: one,
            title: 'What kind of coverage you need:',
            text: 'Choose from options like liability, collision, comprehensive, or personal injury protection.',
          },
          {
            img: two,
            title: 'How much your car is worth:',
            text: 'Make sure the cost of your insurance policy matches your vehicles value..',
          },
          {
            img: three,
            title: 'How you drive:',
            text: 'Your driving habits, such as how often you drive and what type of driving you do, can affect the cost of the insurance if you opt for pay-as-you-drive or pay-how-you-drive policies.',
          },
          {
            img: four,
            title: 'How much you’re willing to pay out of pocket:',
            text: 'Think about your budget and how much risk you’re comfortable with. In case of an accident, if you’re not comfortable spending money from your own pocket for your car repairs, opt for the Own Damage cover instead of a Third-party policy.',
          },
          {
            img: five,
            title: 'Where you live:',
            text: 'Car insurance online costs can differ based on traffic and crime in your area.',
          },
          {
            img: six,
            title: 'Discounts:',
            text: 'Look for discounts you might be eligible for, such as discounts for having multiple policies, being a safe driver, or driving less.',
          }
        ].map((item, index) => (
          <div key={index} className=' flex  items-start gap-3 rounded-xl border border-blue-500 p-4 md:p-8 h-full xl:h-[250px]'>
            <Image src={item.img} alt={`icon-${index}`} className='pt-2' />
            <div className='flex flex-col'>
              <span className='font-mulish text-base md:text-lg text-white font-bold'>{item.title}</span>
              <span className='font-mulish text-sm md:text-base text-white'>{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='my-8 max-w-[1440px] mx-auto'>
        <span className='font-mulish text-sm md:text-base text-white'>
          Before buying car insurance online, read the policy details and fine print, and ask questions to clarify anything you need help understanding. Regularly reviewing your car insurance policy can help ensure that it continues to meet your needs and that you’re not overpaying for coverage you don’t need.
        </span>
      </div>
    </div>
    </div>
  );
}

export default Policy;
