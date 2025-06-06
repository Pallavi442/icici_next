import React from 'react';
import Image from 'next/image';
import buy1 from '../../../public/images/buy1.svg';
import buy2 from '../../../public/images/buy2.svg';
import buy3 from '../../../public/images/buy3.svg';
import buy4 from '../../../public/images/buy4.svg';



function Buy() {
    return (
        <div className='bg-[rgba(248,246,246,1)] xl:h-[630px]'>
        <div className="pb-8 max-w-[1440px] mx-auto overflow-hidden">
            <div className='px-5 py-12 md:py-18'>
                <h1 className='font-mulish font-semibold  md:text-4xl text-2xl  text-center'>Things to keep in mind while buying a car insurance policy</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 sm:px-6">
      

            <div className='flex pl-10 gap-6  bg-white p-4 md:py-10  rounded-2xl items-start pr-12 xl:h-[187px]'>
                    <Image src={buy1} alt='buy1' className='mt-2' />
                    <div className='space-y-2' >
                        <p className='font-semibold text-xs md:text-base'>Policy coverage</p>
                 
                        <span className='text-xs md:text-base'>Check the policy inclusions and exclusions thoroughly to know what’s covered and what’s not. Choose the right type of policy & coverage to ensure that you are well protected at the time of claim.</span>
                    </div>
                </div>


                <div className='flex pl-10 gap-6  bg-white p-4 md:py-10  rounded-2xl items-start pr-16 xl:h-[187px]'>
                    <Image src={buy2} alt='buy2' className='mt-2'/>
                    <div className='space-y-2' >
                        <p className='font-semibold text-xs md:text-base '>Add-ons</p>
                     
                        <span className='text-xs md:text-base'>Add-ons come with great benefits at a nominal extra charge and each one of them serves a specific purpose. Evaluate them closely and pick the ones you need to cover your car against accidental damages reasonably.</span>
                    </div>
                </div>


                <div className='flex pl-10 gap-6  bg-white p-4 md:py-10  rounded-2xl items-start pr-12 xl:h-[187px]'>
                    <Image src={buy3} alt='buy3'className='mt-2' />
                    <div className='space-y-2' >
                    <p className='font-semibold text-xs md:text-base '>Service benefits</p>
                 
                        <span className='text-xs md:text-base'>Availability of cashless garages, easy claims process and reliable customer support are a must.</span>
                    </div>
                </div>

                <div className='flex pl-10 gap-6  bg-white p-4 md:py-10  rounded-2xl items-start pr-12 xl:h-[187px]'>
                    <Image src={buy4} alt='buy4' className='mt-2' />
                    <div className='space-y-2' >
                    <p className='font-semibold text-xs md:text-base '>Right Insured Declared Value (IDV)</p>
                 
                    <span className='text-xs md:text-base'>While you can save on premium by choosing a lower IDV, it will serve you good at the time of claim if you get an IDV close to your car’s market value while buying the policy.</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Buy