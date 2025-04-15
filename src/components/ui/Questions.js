"use client"
import React, { useState } from 'react';
import arrowLeft from '../../../public/images/arrowLeft.svg';
import Image from 'next/image';

function Questions() {
    const [isActive, setIsActive] = useState('/General');
    return (
        <div className='bg-[#F8F6F6]'>
        <div className='flex flex-col py-14 px-5 md:px-10 lg:px-20 max-w-[1440px] mx-auto overflow-hidden gap-5'>
            <h1 className='font-mulish text-3xl md:text-2xl lg:text-4xl font-semibold text-center mb-4'>
                Get answers to common questions about car insurance policy
            </h1>
            <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 mx-auto text-center gap-4'>
                <ul className='flex flex-wrap gap-8 border-b-2 border-[#C9C9C9] '>
                    {["General", "Cover", "Premium", "Cliams", "Policy"].map((item, index) => (
                        <li
                            key={index}
                            className={`flex gap-2 items-center cursor-pointer py-2 ${
                                isActive === `/${item}` ? 'text-orange-400 border-b-2 border-[#EC6625]' : 'text-gray-500'
                            }`}
                            onClick={() => setIsActive(`/${item}`)}
                        >
                            <a>{item}</a>
                        </li>
                    ))}
                </ul>
                {/* <hr className="border-gray-300 mb-4" /> */}

                {isActive === '/General' && (
                    <div className='flex flex-col gap-6 text-left'>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>Why do I need to insure my car?</span>
                            <span className='font-mulish text-base'>In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you dont have to pay out of pocket for repairs or replacement if you have a valid insurance policy.</span>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>What are the benefits of buying car insurance online?</span>
                            <span className='font-mulish text-base'>When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.</span>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>What are the various types of vehicles that I can insure online?</span>
                            <span className='font-mulish text-base'>You can insure a private car and two-wheeler online.</span>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>How quickly can I buy/ renew car insurance online?</span>
                            <span className='font-mulish text-base'>It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.</span>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>Are offline and online car insurance policies the same?</span>
                            <span className='font-mulish text-base'>Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.</span>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>Where can I check my car insurance policy details?</span>
                            <span className='font-mulish text-base'>You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:</span>
                            <ul className='mt-2 ml-4 list-none'>
                                {["Policy number", "Policy start and end date", "Policy type (Comprehensive/OD only/TP only)", "Engine & chassis number"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 py-1">
                                        <Image src={arrowLeft} alt="left" width={16} height={16} />
                                        <span className='font-mulish text-base'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>What is an endorsement in car insurance?</span>
                            <span className='font-mulish text-base'>An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.</span>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>Do I need a valid PUC to drive in India?</span>
                            <span className='font-mulish text-base'>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</span>
                        </div>
                        <div className='flex flex-col text-justify'>
                            <span className='font-mulish text-base font-semibold'>Do I need to have a valid insurance policy to get my new vehicle registered?</span>
                            <span className='font-mulish text-base'>Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.</span>
                        </div>
                    </div>
                )}
                {isActive === '/Cover' && (
                    <div className='text-left text-gray-600 font-mulish'>
                        <span>Cover Details</span>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}

export default Questions;
