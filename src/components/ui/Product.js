import React from 'react';

function Product() {
  return (
    <div className="px-5 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10  max-w-[1440px] mx-auto overflow-hidden">
      <div className="w-full overflow-x-auto rounded-2xl shadow">
        <table className="min-w-full table-auto text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-[rgba(225,224,209,1)] text-black text-sm sm:text-base">
              <th className="px-4 py-3 border-r border-gray-300 min-w-[150px]">Product</th>
              <th className="px-4 py-3 min-w-[120px]">Product Code</th>
              <th className="px-4 py-3 min-w-[180px]">UIN Code</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            <tr className="bg-[rgba(245,246,246,1)]">
              <td className="px-4 py-3 border-r border-gray-300">Private car package policy</td>
              <td className="px-4 py-3 border-r border-gray-300">3001</td>
              <td className="px-4 py-3">IRDAN115RP0017V01200102</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-r border-gray-300">Stand-alone own damage private car package policy</td>
              <td className="px-4 py-3 border-r border-gray-300">3001/O</td>
              <td className="px-4 py-3">IRDAN115RP0001V01201920</td>
            </tr>
            <tr className="bg-[rgba(245,246,246,1)]">
              <td className="px-4 py-3 border-r border-gray-300">Private car liability policy</td>
              <td className="px-4 py-3 border-r border-gray-300">3001/A</td>
              <td className="px-4 py-3">IRDAN115RP0012V01200102</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
