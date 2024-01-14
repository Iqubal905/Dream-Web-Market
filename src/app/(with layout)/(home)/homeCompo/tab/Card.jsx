
import React from 'react';

const Card = ({ title, content }) => {
  
  return (
    <div className=" text-left">
      <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-1 text-center text-white font-semibold">{title}</h2>
      <ul className=''>{content.map((item, index)=>
      <li 
      className='flex py-1' key={index}>
        
       <span className='ml-2'> {item}</span>
        </li>) }
      
      </ul>

    </div>
  );
};

export default Card;
