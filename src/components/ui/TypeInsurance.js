import React from 'react';

function TypeInsurance() {
    return (
        <div className="flex flex-col items-center py-6 md:px-24 lg:px-48 md:py-14 px-5 sm:px-0 max-w-[1440px] mx-auto overflow-hidden xl:h-[820px]">
            <h1 className="font-mulish text-3xl md:text-4xl text-center mb-8 font-semibold">
                Comprehensive car insurance vs Third party car insurance
            </h1>
            <div className="md:w-[80%] overflow-hidden rounded-2xl">
                <table className="w-full table-auto text-left border-separate border-spacing-0">
                    <thead>
                        <tr className="bg-[rgba(225,224,209,1)] text-black">
                            <th className="px-4 py-3 border-r border-white md:w-1/2">
                                Comprehensive Car Insurance
                            </th>
                            <th className="px-4 py-3 md:w-1/2">
                                Third-Party Car Insurance
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[rgba(245,246,246,1)]">
                            <td className="px-4 py-3 border-r border-gray-300">
                                Covers damages to your own car and third-party liabilities
                            </td>
                            <td className="px-4 py-3">
                                Covers third-party liabilities only
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-r border-gray-300">
                                Provides complete protection for your car
                            </td>
                            <td className="px-4 py-3">
                                Only covers legal liabilities
                            </td>
                        </tr>
                        <tr className="bg-[rgba(245,246,246,1)]">
                            <td className="px-4 py-3 border-r border-gray-300">
                                May include add-ons like zero depreciation, roadside assistance, etc.
                            </td>
                            <td className="px-4 py-3">
                                Only includes mandatory third-party coverage as per law
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-r border-gray-300">
                                Higher premium as compared to third-party insurance
                            </td>
                            <td className="px-4 py-3">
                                Lower premium as compared to comprehensive insurance
                            </td>
                        </tr>
                        <tr className="bg-[rgba(245,246,246,1)]">
                            <td className="px-4 py-3 border-r border-gray-300">
                                Can be purchased online or offline
                            </td>
                            <td className="px-4 py-3">
                                Mandatorily needs to be purchased before registering a car
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col gap-4 mt-8 md:w-[80%] pt-2">
                <p className="font-mulish text-base">
                Comprehensive car insurance is a more comprehensive policy that covers not only third-party liabilities but also damage to your own vehicle. On the other hand, third-party car insurance only covers legal liabilities in case of an accident. Comprehensive car insurance also offers add-ons like zero depreciation and roadside assistance, whereas third-party insurance only includes mandatory coverage as per law.
                </p>
                <p className="font-mulish text-base">
                Comprehensive car insurance has a higher premium as compared to third-party insurance, but it provides complete protection for your car. The choice between the two depends on your budget and the level of coverage you desire. You can easily buy car insurance online or offline, but third-party insurance is mandatory and needs to be purchased before registering a car.
                </p>
            </div>
        </div>
    );
}

export default TypeInsurance;
