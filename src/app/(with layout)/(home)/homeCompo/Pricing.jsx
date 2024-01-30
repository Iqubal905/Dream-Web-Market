import React from 'react';
import TabComponent from './tab/TabComputent';

const Pricing = () => {
  return (
    <div className='mx-2 md:m-8 md:py-12'>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        <div className=' p-2'>
          <h2 className=' text-xl py-6 md:text-2xl font-bold'>Pricing that Speaks Value</h2>
          <p className=' text-lg text-gray-500'>Unlock the perfect balance of quality and affordability at Dream Web Market. Our pricing is designed to provide you with substantial value, ensuring that your investment in a top-notch website won't strain your budget. Experience excellence without compromise as we tailor our packages to fit your financial goals. With Dream Web Market, your dream website is not just within reach – it's priced just right for you.</p>
        </div>

        <div className='bg-white'>
          <TabComponent></TabComponent>
        </div>
      </div>
    </div>
  );
};

export default Pricing;