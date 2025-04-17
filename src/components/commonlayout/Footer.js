import React from 'react';
import Image from 'next/image';
import nextArrow from '../../../public/images/nextArrow.svg';
import footerLogo from '../../../public/images/footerLogo.svg';
import facebook from '../../../public/images/facebook.svg';
import linkedin from '../../../public/images/linkedin.svg';
import insta from '../../../public/images/insta.svg';
import youtube from '../../../public/images/youtube.svg';
import twitter from '../../../public/images/twitter.svg';

function Footer() {
    return (
        <div>
            <hr className="border-gray-400"/>
            <div className="py-3 px-5 flex flex-wrap items-center justify-between gap-y-2 max-w-[1440px] mx-auto overflow-hidden">
                <ul className="flex flex-wrap gap-2 items-center">
                    {["Home", "Motor Insurance", "Car Insurance"].map((item, index, arr) => (
                        <li key={index} className="flex items-center gap-2 text-xs sm:text-base">
                            <a className={index === arr.length - 1 ? "text-gray-400" : ""}>{item}</a>
                            {index !== arr.length - 1 && <Image src={nextArrow} alt="nextArrow" />}
                        </li>
                    ))}
                </ul>

                <a
                    href="#"
                    className="text-[rgb(236_102_8/1)] underline underline-offset-1 text-xs sm:text-base whitespace-nowrap"
                >
                    Disclaimers
                </a>
            </div>

            <div className='bg-[#ECE9E9] xl:h-[348px]'>
            <div className='flex flex-col lg:flex-row pb-4 pt-5 md:pb-8 md:pt-10 px-5 md:gap-4  max-w-[1440px] mx-auto overflow-hidden'>
                <div className='flex lg:w-1/3 w-full flex-col  gap-3 md:gap-6'>
                    <Image src={footerLogo} alt="footer" />
                    <span className='font-mulish text-sm'>
                        ICICI Lombard General Insurance Company Limited,
                    </span>
                    <span className='font-mulish text-xs'>
                        ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi <br/> Vinayak Temple, Prabhadevi, Mumbai - 400025.
                    </span>
                    <span className='font-mulish text-xs'>
                        Email: customersupport@icicilombard.com Fax no - 022 61961323
                    </span>
                    <div className='flex  gap-3 py-3 md:gap-6 md:py-6'>
                        <Image src={facebook} alt="facebook" />
                        <Image src={linkedin} alt="linkedin" />
                        <Image src={twitter} alt="twitter" />
                        <Image src={insta} alt="insta" />
                        <Image src={youtube} alt="youtube" />
                    </div>
                </div>
                <div className='flex lg:w-2/3 w-full flex-col  gap-3 pt-4 md:gap-6 md:pt-8'>
                    <span className='font-mulish text-xs'>
                        ICICI Lombard General Insurance Ltd. is one of the largest private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.
                    </span>
                    <span className='font-mulish text-xs'>
                        ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd assigned by Northbridge Financial Corporation solely for the territory of India. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before <br></br>concluding a sale. CIN: L67200MH2000PLC129408
                    </span>
                    <div>
                        <select className="lg:w-1/4 w-full border-b border-b-gray-500 px-3 py-2 text-sm text-gray-700">
                            <option>Group companies</option>
                            <option>ICICI</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;
