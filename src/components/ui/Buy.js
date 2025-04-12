import React from 'react';
import Image from 'next/image';
import buy1 from '../../../public/images/buy1.svg';
import buy2 from '../../../public/images/buy2.svg';
import buy3 from '../../../public/images/buy3.svg';
import buy4 from '../../../public/images/buy4.svg';



function Buy() {
    return (
        <div className="bg-[rgba(248,246,246,1)] pb-10">
            <div className='py-5'>
                <h1 className='font-mulish font-semibold  md:text-[36px] text-[20px]  text-center'>Things to keep in mind while buying a car insurance policy</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-20">
      

                <div className='flex  gap-4 bg-white p-4 md:p-10 rounded-2xl items-start'>
                    <Image src={buy1} alt='buy1' className='mt-2' />
                    <div>
                        <span className='font-semibold text-[12px] md:text-[16px]'>Policy coverage</span>
                        <br></br>
                        <span className='text-[12px] md:text-[16px]'>Check the policy inclusions and exclusions thoroughly to know what’s covered and what’s not. Choose the right type of policy & coverage to ensure that you are well protected at the time of claim.</span>
                    </div>
                </div>


                <div className='flex px-10 gap-4  bg-white p-4 md:p-10 rounded-2xl items-start'>
                    <Image src={buy2} alt='buy2' className='mt-2'/>
                    <div>
                        <span className='font-semibold text-[12px] md:text-[16px]'>Add-ons</span>
                        <br></br>
                        <span className='text-[12px] md:text-[16px]'>Add-ons come with great benefits at a nominal extra charge and each one of them serves a specific purpose. Evaluate them closely and pick the ones you need to cover your car against accidental damages reasonably.</span>
                    </div>
                </div>



                <div className='flex px-10 gap-4  bg-white p-4 md:p-10 rounded-2xl items-start'>
                    <Image src={buy3} alt='buy3'className='mt-2' />
                    <div>
                    <span className='font-semibold text-[12px] md:text-[16px]'>Service benefits</span>
                    <br></br>
                        <span className='text-[12px] md:text-[16px]'>Availability of cashless garages, easy claims process and reliable customer support are a must.</span>
                    </div>
                </div>

                <div className='flex px-10 gap-4  bg-white p-4 p-4 md:p-10  rounded-2xl items-start'>
                    <Image src={buy4} alt='buy4' className='mt-2' />
                    <div>
                    <span className='font-semibold text-[12px] md:text-[16px]'>Right Insured Declared Value (IDV)</span>
                    <br></br>
                    <span className='text-[12px] md:text-[16px]'>While you can save on premium by choosing a lower IDV, it will serve you good at the time of claim if you get an IDV close to your car’s market value while buying the policy.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy