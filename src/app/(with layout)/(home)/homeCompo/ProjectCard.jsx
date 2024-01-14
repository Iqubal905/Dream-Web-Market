// ProjectCard.js

import React from 'react';

const ProjectCard = ({ name, link, img }) => {
  return (
   <>
   <a href="">
   <div className="relative max-w-sm rounded  border  border-slate-100 shadow-lg mx-4 my-6 overflow-hidden group">

        <div className=' flex  justify-between border-b-2 py-1 border-slate-300 px-2 '>
        <h2 className=" font-semibold text-lg">{name}</h2>
         
         <div className='flex justify-center items-center gap-2'>
         <span className=''>
         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" id="link"><path fill='orange'  d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path>
          </svg>
         </span>
          <span className=" font-semibold  text-base  text-sky-700 hover:text-sky-500">Preview</span>
         </div>

         </div>

     <div className='relative'>
     <img src={img} alt={name} className="w-full h-auto object-cover" />
      <div className="absolute inset-0   flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <div className="text-white text-center">
          <h2>project name</h2>
        </div>
      </div>
     </div>
    </div>
   </a>
     
   </>
  );
};

export default ProjectCard;
