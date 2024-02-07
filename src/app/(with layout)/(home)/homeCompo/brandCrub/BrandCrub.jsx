"use-client"

import React from "react";
import Image from "next/image";
import icon1 from '../../../../../../public/images/people-outline.svg'
import icon2 from '../../../../../../public/images/iphone-x.svg'
import icon3 from '../../../../../../public/images/unlock.svg'
const BrandCrub = () => {
  return (
    <div>
      <div className="text-center pt-10 pb-10">
        <h1 className="text-4xl text-gray-700 font-extrabold">Why Dream Web Market?</h1>
        <p className="text-lg text-gray-500 pt-6">Our Expertise and Commitment to Your Success Sets Us Apart</p>
      </div>
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="box shadow-xl p-5">
            <div className="flex justify-center pt-16 "><Image src={icon1} className="h-[80px] w-[80px] bg-green-300 rounded-full p-3" alt="alt" /></div>
            <h1 className="text-3xl font-bold text-center text-gray-700 pt-6">Personalized Business Package</h1>
            <p className="text-center text-gray-500 leading-8 pt-6 pb-16">
              Choose from a wide range of web solutions that you need to ensure
              effective, efficient, and sustainable growth of your business.
              BrandCurb works on the smallest to largest detail of your
              website-- -from mobile and speed optimization, to landing page
              designs, and even SEO---basically, everything under the digital
              sun!
            </p>
          </div>
          <div className="box shadow-xl p-5">
          <div className="flex justify-center pt-16 "><Image src={icon2} className="h-[80px] w-[80px] bg-red-300 rounded-full p-3" alt="alt" /></div>
            <h1 className="text-3xl font-bold text-center text-gray-700 pt-6">Customized Approach</h1>
            <p  className="text-center text-gray-500 leading-8 pt-6 pb-16">
              Clients from around the globe have raved and benefited from our
              responsive WordPress and WooCommerce websites. These SMEs are able
              to stand-up and even surpass bigger and heavier competition at a
              lower cost here at BrandCurb ---all because our services are
              tailored and uniquely-made for you and your specific vision for
              your company.
            </p>
          </div>
          <div className="box shadow-xl p-5">
          <div className="flex justify-center pt-16 "><Image src={icon3} className="h-[80px] w-[80px] bg-orange-300 rounded-full p-3" alt="alt" /></div>
            <h1 className="text-3xl font-bold text-center text-gray-700 pt-6">Results-Driven Solutions</h1>
            <p  className="text-center text-gray-500 leading-8 pt-6 pb-16">
              Clients from around the globe have raved and benefited from our
              responsive WordPress and WooCommerce websites. These SMEs are able
              to stand-up and even surpass bigger and heavier competition at a
              lower cost here at BrandCurb ---all because our services are
              tailored and uniquely-made for you and your specific vision for
              your company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandCrub;
