import React from 'react';
import Image from 'next/image';
import carModel1 from '../../assets/carModel1.svg';
import carModel2 from '../../assets/carModel2.svg';
import carModel3 from '../../assets/carModel3.svg';
import carModel4 from '../../assets/carModel4.svg';

function CarModel() {
  return (
    <div className='bg-blue-900 p-10'>
        <h1 className='font-mulish text-[36px] text-center text-white'>Car Insurance for Popular Models in India</h1>
        <div className='grid md:grid-cols-4 gap-6'>
            <div className='flex bg-white items-center space-x-2 justify-center rounded-2xl p-2'>
                <Image src={carModel1} alt="carModel"/>
                <p>Maruti Baleno Car Insurance</p>
            </div>
             <div className='flex bg-white items-center space-x-2   justify-center rounded-2xl p-2'>
                <Image src={carModel2} alt="carModel"/>
                <p>Maruti Ertiga Car Insurance</p>
            </div>
            <div className='flex bg-white items-center space-x-2  justify-center rounded-2xl p-2'>
                <Image src={carModel3} alt="carModel"/>
                <p>Maruti Alto Car Insurance</p>
            </div>
            <div className='flex bg-white items-center space-x-2  justify-center rounded-2xl p-2'>
                <Image src={carModel4} alt="carModel"/>
                <p>Hyundai Creta Car Insurance</p>
            </div>


            <div className='flex bg-white items-center space-x-2 justify-center rounded-2xl p-2'>
                <Image src={carModel4} alt="carModel"/>
                <p>Maruti Alto Car Insurance</p>
            </div>
            <div className='flex bg-white items-center space-x-2 justify-center rounded-2xl p-2'>
                <Image src={carModel3} alt="carModel"/>
                <p>Hyundai Eon Car Insurance</p>
            </div>
            <div className='flex bg-white items-center space-x-2justify-center rounded-2xl p-2'>
                <Image src={carModel2} alt="carModel"/>
                <p>Hyundai Creta Car Insurance</p>
            </div>
            <div className='flex bg-white items-center space-x-2 justify-center rounded-2xl p-2'>
                <Image src={carModel1} alt="carModel"/>
                <p>Maruti Baleno Car Insurance</p>
            </div>

        </div>
    </div>
  )
}

export default CarModel