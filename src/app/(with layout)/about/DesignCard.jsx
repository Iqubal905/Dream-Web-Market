import React from 'react';

const DesignCard = ({data}) => {
    const {title, design, details} = data
    return (
        <div  className=" bg-white overflow-hidden shadow-lg transform transition-transform hover:scale-105">
        <div className=' flex justify-center '>
       
        </div>
           <div className="p-4 text-left">
           <h2 className="text-xl font-bold   text-red-400">{title}</h2>
             <h2 className="text-xl font-bold text-gray-800 py-2">{design}</h2>
             <p className="text-gray-600">{details}</p>
           </div>
         </div>
    );
};

export default DesignCard;