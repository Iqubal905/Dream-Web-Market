
import Image from 'next/image';
import React from 'react';

const Card = ({ title, content }) => {

  return (
    <div className=" text-left">
      <ul className='flex flex-col gap-2'>{content.map((item, index) =>
        <li className='flex relative' key={index}>

          <Image
            src="/images/correct.png"
            alt=""
            className="absolute left-0"
            width={24}
            height={6}
            priority
          />
          <span className='ml-8'> {item}</span>
        </li>)}

      </ul>

    </div>
  );
};

export default Card;
