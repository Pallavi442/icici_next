import React from 'react';
import Image from 'next/image';
import search from '../../../public/images/search.svg';
const tags = [
    'Health Insurance', 'Bike Insurance', 'Travel Insurance', 'Vehicle Insurance',
    'Car Insurance Blogs', 'Zero Depreciation Car Insurance', 'Car Insurance Calculator',
    'Comprehensive Car Insurance', 'Roadside Assistance', 'Engine Protect Car Insurance',
    'Third-Party Car Insurance', 'Cashless Car Insurance', 'Model based Car Insurance',
    'Car Insurance In Ahmedabad', 'Car Insurance In Jaipur', 'Car Insurance Coverage',
    'Second Hand Car Insurance', 'Car Insurance In Nashik', 'Consumable Car Insurance',
    'IDV In Car Insurance', 'Car Insurance In Gurgaon', 'No Claim Bonus In Car Insurance'
  ];

function Search() {
    return (
        <div className="bg-[#F8F6F6] py-8 px-4 ">
          <div className="flex justify-center flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
             <Image src={search} alt="search"/>
            </div>
            <div className="flex flex-col">
              <h2 className="font-mulish text-[36px] font-semibold mb-4">Popular Searches</h2>
              {/* className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" */}
              <div className="flex flex-wrap gap-3" style={{marginInline: '2rem', marginBottom : "2rem"}}>
                {tags.map((tag, index) => (
                  <span key={index}
                    className="bg-white font-mulish text-[12px] px-3 py-1 rounded-full whitespace-nowrap hover:bg-[#FFF2EB] transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Search