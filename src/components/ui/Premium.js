import React from 'react';
import Image from 'next/image';
import oneP from '../../../public/images/oneP.svg';
import twoP from '../../../public/images/twoP.svg';
import threeP from '../../../public/images/threeP.svg';
import arrowLeft from '../../../public/images/arrowLeft.svg';

function Premium() {
  return (
    <div className="px-5 py-6 sm:px-6 max-w-[1440px] mx-auto overflow-hidden md:py-12 xl:h-[735px]">
      <h1 className="font-mulish text-2xl sm:text-3xl lg:text-4xl font-medium text-center pd-4 md:pb-8">
        How is car insurance premium calculated?
      </h1>

      <div className="w-full flex flex-col justify-center items-start gap-8 md:gap-16 lg:flex-row lg:items-start pt-4 md:pt-8">

        <div className="w-full lg:w-1/2">
          <span className="block md:mb-4 text-lg font-semibold">
            Your car insurance premium includes three major components
          </span>


          <div className="flex py-3 gap-3 items-start">
            <Image src={oneP} alt="oneP" className='mt-1' />
            <span className="font-mulish">
              Third-party liability premium – this is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your car’s cubic capacity.
            </span>
          </div>


          <div className="overflow-x-auto rounded-2xl bg-white shadow-md w-full mb-6 max-w-[550px] md:ml-7">
            <table className="min-w-[500px] table-auto text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-[#E1E0D1]">
                  <th className="px-4 py-3 border-r border-white w-1/2 font-normal">Cubic capacity</th>
                  <th className="px-4 py-3 w-1/2 font-normal">Premium with effect from 1st June 2022 (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-300">Not exceeding 1000 cc</td>
                  <td className="px-4 py-3">₹2,094</td>
                </tr>
                <tr  className="bg-[#F5F6F6]">
                  <td className="px-4 py-3 border-r border-gray-300">Exceeding 1000 cc but not exceeding 1500 cc</td>
                  <td className="px-4 py-3">₹3,416</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-300">Exceeding 1500 cc</td>
                  <td className="px-4 py-3">₹7,897</td>
                </tr>
              </tbody>
            </table>
          </div>

     
          <div className="flex py-3 gap-3 items-start">
            <Image src={twoP} alt="twoP" className='mt-1'/>
            <span className="font-mulish">
              Own damage premium – this is calculated as IDV X [Tariff Rate] – [Discounts] + Add on Covers
            </span>
          </div>

  
          <div className="flex py-2 gap-3 items-start">
            <Image src={threeP} alt="threeP" className='mt-1' />
            <span className="font-mulish">
              Personal accident cover premium + Additional covers
            </span>
          </div>
        </div>


        <div className="w-full lg:w-1/2">
          <span className="font-mulish text-lg font-medium block mb-3">
            Factors that affect these three components and your final car insurance price, include:
          </span>

          {[
            {
              text: (
                <>
                  <b>IDV</b> – IDV is the maximum amount you can claim under your policy. The higher your car’s market value, the higher your IDV and premium will be.
                </>
              ),
            },
            {
              text: (
                <>
                  <b>Make and model</b> - Higher-end models are insured at a higher price, simply because the cost of repairs/replacement for such vehicle is higher.
                </>
              ),
            },
            {
              text: (
                <>
                  <b>Fuel type</b> - Repairing petrol-fuelled cars is cheaper than those that run on diesel and CNG. As a result, they are also less expensive to insure.
                </>
              ),
            },
            {
              text: (
                <>
                  <b>Year of manufacture</b> – Certain new cars may be costly to cover since their spare parts may not be available yet.
                </>
              ),
            },
            {
              text: (
                <>
                  <b>Location</b> – Since urban areas have denser traffic, there’s a greater probability of accidental damages. Thus, your premium may vary depending on your location.
                </>
              ),
            },
            {
              text: (
                <>
                  <b>Claim history</b> – If you have made no car insurance claims in the past year, you stand to gain a No Claim Bonus on your premium.
                </>
              ),
            },
            {
              text: (
                <>
                  <b>Add-ons –</b> A small additional cost will be included in your premium for the add-ons you pick.
                </>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="flex py-2 gap-3 items-start">
              <Image src={arrowLeft} alt="arrow" className='mt-2'  />
              <span className="font-mulish text-[16px]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Premium;
