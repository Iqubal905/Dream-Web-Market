import React from 'react';

const DesignCard = ({data}) => {
    const {title, design, details} = data
    return (
        <div  className=" bg-white overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:bg-black  duration-1000 ">
        <div className=' flex justify-center '>
       
        </div>
           <div className="p-4 text-left group">
           <h2 className="text-xl font-bold   text-red-400 group-hover:text-blue-500">{title}</h2>
             <h2 className="text-xl font-bold  text-gray-800  group-hover:text-white py-2">{design}</h2>
             <p className="text-gray-600 group-hover:text-white">{details}</p>
           </div>
         </div>
    );
};

export default DesignCard;