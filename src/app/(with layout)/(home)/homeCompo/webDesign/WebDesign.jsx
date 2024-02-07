"use-client"

import React from 'react';
import Image from 'next/image'
import devPic from '../../../../../../public/images/1618.jpg'
import './webDsign.css'

const WebDesign = () => {
    return (
        
          <div class="grid md:grid-cols-2 gap-8">
  <div>
  <div className='relative '>
              <div><Image src={devPic} alt="alt" className='leftImg' /></div>
              <div className='absolute bottom-4 left-0 text-white p-10'>
                <h1 className='text-4xl text-extrabold'>Did you know?</h1>
                <p className='text-xl text-bold pt-4'>38 percent of visitors will stop engaging with a website if the content or layout is unattractive</p>
                <p className='text-xl text-bold pt-4 pb-4'>–Blue Corona</p>
                <div className='bg-red-500 h-16 max-w-md flex justify-center items-center rounded-full '><button className=''>Book A Free Consultation</button></div>
              </div>
            </div>
  </div>
  
  <div>
  <div className='box shadow-lg p-5 max-w-xl'>
             <h1 className='text-3xl text-bold text-gray-500 text-center px-10'> 
             Web Design-related Issues Resolved
             </h1>
             <p className='text-gray-500 pt-5 leading-8'>The overall design is blah and generic. You don’t agree with the tabs, it’s kind of confusing.
             You don’t get how this site will help your business grow. To top everything off, you are overwhelmed by the 
            number of designers and programmers pitching in to help you with specific areas of your website. Fret not, BrandCurb has arrived.
           <br />
           <br />
            With BrandCurb, you don’t need to look and pay for separate experts who can help you fix your page. We are known 
            for helping businesses grow by ensuring that their WordPress and WooCommerce websites bring in actual revenues that
             increase the value of their businesses, 
            and not merely design an online billboard, passively attracting mere visits and not engagements.
            </p>
            </div>
  </div>
</div>
        
    );
};

export default WebDesign;