import React from 'react';
import Image from 'next/image'
import devPic from '../../../../../../public/images/1618.jpg'
import Link from 'next/link';
const WebDesign = () => {
  return (

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:mt-16 lg:mt-24">
      <div className='relative overflow-hidden rounded-md group min-h-96'>
        <Image src={devPic} alt="alt" className='absolute bottom-0 -z-10  blur-md h-full w-full group-hover:scale-110 duration-500' />
        <div className='  h-full w-full  bottom-0 left-0 bg-gray-600/60 text-white p-10 flex items-start flex-col justify-center '>
          <p className='text-xl md:text-2xl font-semibold'>Did you know?</p>
          <p className='text-base pt-4'>38 percent of visitors will stop engaging with a website if the content or layout is unattractive</p>
          <p className='text-lg font-semibold pt-4 pb-4'>– Blue Corona</p>
          <Link href={"/contact"} className='bg-red-600 px-3 py-2 md:px-6 md:py-3 rounded-md text-white md:font-semibold'>Book A Free Consultation</Link>
        </div>

      </div>

      <div >
        <div className='box shadow p-5 w-full'>
          <h1 className='text-xl md:text-2xl font-semibold '>
            Web Design-related Issues Resolved
          </h1>
          <p className='text-gray-500 pt-5 leading-8'>The overall design is blah and generic. You don’t agree with the tabs, it’s kind of confusing.
            You don’t get how this site will help your business grow. To top everything off, you are overwhelmed by the
            number of designers and programmers pitching in to help you with specific areas of your website. Fret not, BrandCurb has arrived.
            <br />
            <br />

          </p>
        </div>
      </div>
    </div>

  );
};

export default WebDesign;