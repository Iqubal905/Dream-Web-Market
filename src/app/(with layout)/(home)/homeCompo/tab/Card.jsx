
import Image from 'next/image';
import React from 'react';

const Card = ({ title, content }) => {
  
  return (
    <div className=" text-left">
      <ul className=''>{content.map((item, index)=>
      <li 
      className='flex justify-center  py-1' key={index}>
        <span  className='mt-1'>
        
        <Image
              src="/right-arrow.svg"
              alt=""
              className="dark:invert"
              width={24}
              height={12}
              priority
            />
         </span>
       <span className='ml-2'> {item}</span>
        </li>) }
      
      </ul>

    </div>
  );
};

export default Card;
