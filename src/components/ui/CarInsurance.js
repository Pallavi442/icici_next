import car from '../../../public/images/Car.png';
import img1 from '../../../public/images/cImg1.png';
import Insurance1 from '../../../public/images/Insurance1.png';
import Frame from '../../../public/images/Frame.png';
import Image from 'next/image'
// import InsuranceForm from '../insuranceForm/';
import New from '../../../public/images/New.png';
import InsuranceForm from '../forms/InsuranceForm';
function CarInsurance() {
    return (
        <div className="flex flex-wrap justify-center gap-y-8 w-full py-[4.40rem] xl:h-[604px] max-w-[1440px] mx-auto overflow-hidden px-5 gap-x-7 ">

            
            <div className="w-full xl:w-1/3 md:w-1/1 lg:w-1/2">

                <div className='flex flex-col gap-5'>
                    <div>
                   
                        <p className='font-mulish font-bold text-5xl mt-2'>Car insurance</p>
                        <p className='font-mulish font-semibold text-3xl mt-2'>Prices starting at just ₹2,094/yr</p>
                        <p className='font-mulish font-normal text-xs mt-2'>This amount refers to the TP rates only</p>
        
                       
                        <div className='my-5 ml-2'><svg width="95" height="1" viewBox="0 0 95 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="95" y2="0.5" stroke="url(#paint0_linear_1_145)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_145" x1="95" y1="2.13822" x2="0" y2="2.13822" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#C9C9C9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-[17px] bg-[linear-gradient(270deg,_#FFFFFF_-9.13%,_#FFF2EB_100%)]  py-3 pl-5 rounded-md'>
                                <Image src={img1} alt="img" />
                                <p>Doorstep Cashless Repairs</p>
                                <Image src={New} alt="new" />
                            </div>
                            <div className='flex items-center gap-[17px] bg-[linear-gradient(270deg,_#FFFFFF_-9.13%,_#FFF2EB_100%)]  py-3 pl-5 rounded-md'>
                                <Image src={Insurance1} alt="insurance" />
                                <p>₹15 lakh Personal Accident Cover</p>
                            </div>
                            <div className='flex items-center gap-[17px] bg-[linear-gradient(270deg,_#FFFFFF_-9.13%,_#FFF2EB_100%)]  py-3 pl-5 rounded-md'>
                                <Image src={Frame} alt="frame" />

                                <p>Drive less? Pay less with PAYD add-on</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center items-center w-full xl:w-1/3 md:w-1/1 lg:w-1/2  lg:-ml-16">

                <Image src={car} alt="car" draggable={false} className='lg:-ml-[6rem]'/>

            </div>
            <div className="w-full xl:w-1/3 md:w-1/1 lg:w-1/2 pt-6 lg:pt-0">
                <InsuranceForm />
            </div>

        </div>
    )
}
export default CarInsurance