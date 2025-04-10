"use client"
import React, { useState } from 'react';
import arrowLeft from '../../assets/arrowLeft.svg';
import Image from 'next/image';

function Quations() {
    const [isActive,setIsActive]=useState('/General')
    return (
        <div className='bg-[#F8F6F6] py-5'>
            <h1 className='font-mulish text-[36px] font-semibold text-center'>Get answers to common questions about car insurance policy</h1>
            <div className='flex flex-col justify-center  w-2/4  text-center mx-100'>
                <ul className='flex justify-between w-[50%] py-5'>
                    {["General", "Cover", "Premium","Cliams","Policy"].map((item, index, arr) => (
                        <li key={index} className={`flex gap-2 items-center ${isActive==`/${item}`?'text-orange-400':'text-gray-500'}`} >
                            <a onClick={()=>setIsActive(`/${item}`)}>{item}</a>       
                        </li>
                    ))}
                </ul>
                <hr className="border-gray-300" />
                {isActive==='/General' &&(
                <div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>Why do I need to insure my car?</span>
                    <span className='font-mulish text-[16px]'>In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you dont have to pay out of pocket for repairs or replacement if you have a valid insurance policy.</span>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>What are the benefits of buying car insurance online?</span>
                    <span className='font-mulish text-[16px]'>When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.</span>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>What are the various types of vehicles that I can insure online?</span>
                    <span className='font-mulish text-[16px]'>You can insure a private car and two-wheeler online.</span>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>How quickly can I buy/ renew car insurance online?</span>
                    <span className='font-mulish text-[16px]'>It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.</span>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>Are offline and online car insurance policies the same?</span>
                    <span className='font-mulish text-[16px]'>Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.</span>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>Where can I check my car insurance policy details?</span>
                    <span className='font-mulish text-[16px]'>You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:</span>
                    <ul>
                    {["Policy number", "Policy start and end date", "Policy type (Comprehensive/OD only/TP only)","Engine & chassis number"].map((item, index, arr) => (
                        <li key={index} className="flex gap-2 items-cente">
                            <Image src={arrowLeft} alt="left"/>
                            <a>{item}</a>       
                        </li>
                    ))}
                    </ul>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>What is an endorsement in car insurance?</span>
                    <span className='font-mulish text-[16px]'>An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.</span>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>Do I need a valid PUC to drive in India?</span>
                    <span className='font-mulish text-[16px]'>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law..</span>
                </div>
                <div className='flex gap-2 flex-col text-justify py-4'>
                    <span className='font-mulish text-[16px] font-semibold'>Do I need to have a valid insurance policy to get my new vehicle registered?</span>
                    <span className='font-mulish text-[16px]'>Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.</span>
                </div>
                </div>
                )} 
                 {isActive==='/Cover' &&( 
                    <div>
                        <span>Cover Details</span>
                         </div>
                  )}
            </div>
        </div>
    )
}

export default Quations