'use client';
import React from 'react';
import Image from 'next/image';
import carModel1 from '../../../public/images/carModel1.svg';
import carModel2 from '../../../public/images/carModel2.svg';
import carModel3 from '../../../public/images/carModel3.svg';
import carModel4 from '../../../public/images/carModel4.svg';

function CarModel() {
  return (
    <div className='bg-blue-900 w-full'>
    <div className=" py-10  max-w-[1440px] mx-auto overflow-hidden w-[93%]">
      <h1 className="font-mulish text-2xl sm:text-3xl lg:text-4xl text-center text-white pb-6">
        Car Insurance for Popular Models in India
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { img: carModel1, name: 'Maruti Baleno Car Insurance' },
          { img: carModel2, name: 'Maruti Ertiga Car Insurance' },
          { img: carModel3, name: 'Maruti Alto Car Insurance' },
          { img: carModel4, name: 'Hyundai Creta Car Insurance' },
          { img: carModel4, name: 'Maruti Alto Car Insurance' },
          { img: carModel3, name: 'Hyundai Eon Car Insurance' },
          { img: carModel2, name: 'Hyundai Creta Car Insurance' },
          { img: carModel1, name: 'Maruti Baleno Car Insurance' },
        ].map((car, index) => (
          <div
            key={index}
            className="flex items-center bg-white gap-4 justify-start rounded-2xl py-5 px-10 shadow-sm hover:shadow-md transition duration-200"
          >
            <Image src={car.img} alt={car.name} className="w-[50px] h-auto" />
            <p className="text-sm sm:text-base font-medium">{car.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CarModel;
