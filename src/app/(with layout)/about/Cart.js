import Image from 'next/image';
import React from 'react';

const Cart = ({members}) => {
const {img, name, action} = members
    return (
        
        <div  className=" bg-white overflow-hidden shadow-lg transform transition-transform hover:scale-105">
     <div className=' flex justify-center '>
     <Image src={img} width={150} height={150} alt="Member Image" className=" rounded-full"/>
     </div>
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600">{action}</p>
        </div>
      </div>
    );
};

export default Cart;