import React from 'react';
import Image from 'next/image';
import oneP from '../../assets/oneP.svg';
import twoP from '../../assets/twoP.svg';
import threeP from '../../assets/threeP.svg';
import arrowLeft from '../../assets/arrowLeft.svg';

function Premium() {
  return (
    <div>
        <h1 className='font-mulish text-[36px] font-semibold text-center py-2'>How is car insurance premium calculated?</h1>
        <div className='w-full px-15 flex '>
            <div className='flex flex-col w-1/2'>
            <span>Your car insurance premium includes three major components</span>
            <div className='flex py-3 gap-4'>
            <Image src={oneP} alt="oneP"/>
            <span className='font-mulish text-[15px] font-semibold'>Third-party liability premium – this is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your car’s cubic capacity.</span>
            </div>
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md">
            <table className="w-full table-auto text-left border-separate border-spacing-0 p-0 m-0">
                    <thead>
                        <tr className="bg-[rgba(225,224,209,1)] text-black">
                            <th className="px-4 py-3 border-r border-gray-300 w-1/3">
                            Cubic capacity
                            </th>
                            <th className="px-4 py-3 w-1/3">
                            Premium with effect from 1st June 2022 (Rs.)
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[rgba(245,246,246,1)]">
                            <td className="px-4 py-3 border-r border-gray-300">
                            Not exceeding 1000 cc
                            </td>
                            <td className="px-4 py-3 ">
                            ₹2,094
                            </td>
                        
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-r border-gray-300">
                            Exceeding 1000 cc but not exceeding 1500 cc
                            </td>
                            <td className="px-4 py-3  ">
                            ₹3,416
                            </td>
                           
                        </tr>
                        <tr className="bg-[rgba(245,246,246,1)]">
                            <td className="px-4 py-3 border-r border-gray-300">
                            Exceeding 1500 cc
                            </td>
                            <td className="px-4 py-3">
                            ₹7,897
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
        
            <div className='flex py-3 gap-4'>
            <Image src={twoP} alt="twoP"/>
            <span>Own damage premium – this is calculated as IDV X [Tariff Rate] – [Discounts] + Add on Covers</span>
            </div>
            <div className='flex py-2 gap-4'>
            <Image src={threeP} alt="threeP"/>
            <span>Personal accident cover premium + Additional covers</span>
            </div>
            </div>
            <div className='w-1/2 px-10'>
            <span className='font-mulish text-[15px] font-semibold'>Factors that affect these three components and your final car insurance price, include:</span>
            <div className='flex py-2  gap-4 items-baseline'>
                <Image src={arrowLeft} alt="arrow"/>
                <span className='font-mulish text-[16px] '><b>IDV</b> – IDV is the maximum amount you can claim under your policy. The higher your car’s market value, the higher your IDV and premium will be.</span>
            </div>
            <div className='flex py-2  gap-4 items-baseline'>
                <Image src={arrowLeft} alt="arrow"/>
                <span className='font-mulish text-[16px] '><b>Make and model</b> - Higher-end models are insured at a higher price, simply because the cost of repairs/replacement for such vehicle is higher.</span>
            </div>
            <div className='flex py-2  gap-4 items-baseline'>
                <Image src={arrowLeft} alt="arrow"/>
                <span className='font-mulish text-[16px] '><b>Fuel type</b> - Repairing petrol-fuelled cars is cheaper than those that run on diesel and CNG. As a result, they are also less expensive to insure.</span>
            </div>
            <div className='flex py-2  gap-4 items-baseline'>
                <Image src={arrowLeft} alt="arrow"/>
                <span className='font-mulish text-[16px] '><b>Year of manufacture</b> – Certain new cars may be costly to cover since their spare parts may not be available yet.</span>
            </div>
            <div className='flex py-2  gap-4 items-baseline'>
                <Image src={arrowLeft} alt="arrow"/>
                <span className='font-mulish text-[16px] '><b>Location</b> – Since urban areas have denser traffic, there’s a greater probability of accidental damages. Thus, your premium may vary depending on your location.</span>
            </div>
            <div className='flex py-2  gap-4 items-baseline'>
                <Image src={arrowLeft} alt="arrow"/>
                <span className='font-mulish text-[16px] '><b>Claim history </b>– If you have made no car insurance claims in the past year, you stand to gain a No Claim Bonus on your premium.</span>
            </div>
            <div className='flex py-2  gap-4 items-baseline'>
                <Image src={arrowLeft} alt="arrow"/>
                <span className='font-mulish text-[16px] '><b>Add-ons –</b> A small additional cost will be included in your premium for the add-ons you pick.</span>
            </div>
           
            </div>
        </div>
    </div>
  )
}

export default Premium