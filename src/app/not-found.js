

import React from 'react';
import './not-found.css';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='py-40'>
            
            <h1 className=' font-black '>OOPS !</h1>
            <h3 className="text-3xl text-indigo-500">404-PAGE NOT FOUND</h3>
            <p className="pt-6">The page you are looking for might have been removed 
            <br/>
            had its name changed or is temporarily unavailable
            </p>
           <div className=" flex justify-center items-center pt-4">
           <Link href={"/"} className='bg-indigo-500 px-5 py-2 capitalize rounded-md font-semibold text-lg text-white '>Back to Home</Link> 
           </div>
            
        </div>
    );
};

export default NotFound;