import React from 'react'
import Image from 'next/image';
import Car1 from '../../assets/Car1.png';

function Details() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start px-4 sm:px-6 lg:px-10 py-8 gap-6">
      
      <div className="w-full md:w-2/5 flex justify-center md:justify-start">
        <Image src={Car1} alt="car" className="w-full max-w-[400px] h-auto" />
      </div>

      <div className="w-full md:w-3/5">
        <h3 className="font-mulish text-[24px] sm:text-[28px] lg:text-[36px] font-semibold mb-4">
          What is car insurance?
        </h3>
        <p className="font-mulish text-[15px] sm:text-[16px] text-justify leading-relaxed">
          A comprehensive car insurance policy, also known as motor package insurance, saves you money when your car is damaged in an accident or natural calamity. It also covers your vehicle against theft and burglary. At times, you may end up hurting others or damaging property in an accident. A car insurance policy covers such third-party liabilities as well. If you own a car in India, having third party car insurance is a must for you. That’s why it’s crucial to buy and renew your policy on time to stay on the right side of the law and be covered against car damages. At an affordable premium, our reliable car insurance policy protects you against all these risks so that you can drive worry-free. Apart from comprehensive car insurance, third-party only and own-damage only car insurance policies are also available. You can choose the policy type as per your needs.
        </p>
      </div>
      
    </div>
  );
}

export default Details;
