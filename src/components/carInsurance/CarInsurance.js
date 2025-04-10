import car from '../../assets/Car.png';
import img1 from '../../assets/cImg1.png';
import Insurance1 from '../../assets/Insurance1.png';
import Frame from '../../assets/Frame.png';
import Image from 'next/image'
// import InsuranceForm from '../insuranceForm/';
import New from '../../assets/New.png';
import InsuranceForm from '../insuranceForm/InsuranceForm';
function CarInsurance() {
    return (
        <div className="flex w-full p-10">
            
            <div className="w-1/3">
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='font-mulish font-black text-[40px] '>Car Insurance</p>
                        <p className='font-mulish font-semibold text-[28px]'>Prices starting at just ₹2,094/yr</p>
                        <p className='font-mulish font-normal text-[12px]'>This amount refers to the TP rates only</p>
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
                            <div className='flex items-center gap-[17px] bg-gradient-to-b from-[#FFFFFF] via-[#FFF2EB] to-white py-3 pl-5 rounded-md'>
                                <Image src={img1} alt="img" />
                                <p>Doorstep Cashless Repairs</p>
                                <Image src={New} alt="new" />
                            </div>
                            <div className='flex items-center gap-[17px] bg-gradient-to-b from-[#FFFFFF] via-[#FFF2EB] to-white py-3 pl-5 rounded-md'>
                                <Image src={Insurance1} alt="insurance" />
                                <p>₹15 lakh Personal Accident Cover</p>
                            </div>
                            <div className='flex items-center gap-[17px] bg-gradient-to-b from-[#FFFFFF] via-[#FFF2EB] to-white py-3 pl-5 rounded-md'>
                                <Image src={Frame} alt="frame" />

                                <p>Drive less? Pay less with PAYD add-on</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/3 pt-16">
                <Image src={car} alt="car" />
            </div>
            <div className="w-1/3">
                <InsuranceForm />
            </div>

        </div>
    )
}
export default CarInsurance