import React from 'react';
import TabComponent from './tab/TabComputent';

const Pricing = () => {
    return (
       <div className=' mx-2 md:py-12 my-8 md:m-8'>
         <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        <div className='  shadow-md  p-2'>
            <h2 className=' text-xl pb-2 md:text-3xl font-bold text-center'>Website Design & Development</h2>
            <p className=' text-lg text-gray-500  text-center px-2 md:text-left'>We offer comprehensive web design and development services that are tailored to meet the unique needs 
                of your business. Our team of experienced designers and developers work closely with you to create a 
                website that not only looks great but also functions seamlessly. We focus on creating a user-friendly
                 experience for your visitors, ensuring that your website is easy to navigate and optimized for 
                 conversions. Whether re looking to launch a new 
                  website or redesign an existing one, we are here to help you achieve your online objectives. Contact
                   us today to learn more
                 about our web design and development services and how we can help your business succeed online.</p>
        </div>
      
        <div className='bg-white md:p-4 round shadow-md ml-2 '>
            <TabComponent></TabComponent>
        </div>
      </div>
       </div>
    );
};

export default Pricing;