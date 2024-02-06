import Image from 'next/image';
import React from 'react';

const Cart = ({members}) => {
const {img, name, action} = members
    return (
        
        <div  className=" bg-white overflow-hidden ">
     <div className=' flex justify-center '>
     <Image src={img} width={120} height={120} alt="Member Image" className=" rounded-full"/>
     </div>
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-blue-600">{action}</p>
        </div>
      </div>
    );
};

export default Cart;