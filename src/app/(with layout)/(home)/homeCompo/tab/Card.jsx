
import React from 'react';

const Card = ({ title, content }) => {
  
  return (
    <div className=" text-left">
      <ul className=''>{content.map((item, index)=>
      <li 
      className='flex justify-center  py-1' key={index}>
        <span  className='mt-1'>
        
 
  <svg class="w-4 h-4 transform  text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7"></path>
  </svg>

        </span>
       <span className='ml-2'> {item}</span>
        </li>) }
      
      </ul>

    </div>
  );
};

export default Card;
