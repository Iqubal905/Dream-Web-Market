// ProjectCard.js

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ name, link, img }) => {
  return (
    <>
      <div className="relative w-full rounded overflow-hidden group">
        <div className=' flex justify-between py-5 px-3 border rounded'>
          <h2 className=" font-semibold text-lg">{name}</h2>

          <Link  href={link} target='_blank' className='flex justify-center items-center gap-2'>
            <span className=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" id="link"><path fill='blue' d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path>
              </svg>
            </span>
            <span className=" font-semibold  text-base  text-sky-700 hover:text-sky-500">Live Site</span>
          </Link>
        </div>

        <div className='relative'>
          {/* <Image
            src={img}
            alt="Vercel Logo"
            className="w-full h-auto object-cover"
            width={100}
            height={100}
            priority
          /> */}
          <img src={img} alt={name} className="w-full h-auto h-72 object-cover rounded bg-gray-200" />
          <div className="absolute inset-0   flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <div className="text-white text-center">
              <h2>{name}.com</h2>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ProjectCard;
