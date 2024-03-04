import Link from 'next/link';
import React from 'react';

const Grow = () => {
    return (
        <div className='md:w-fit rounded-md mx-auto px-5 gap-2 md:gap-6 items-center flex flex-col md:flex-row bg-orange-200 md:rounded-full my-5 justify-evenly py-3'>
            <h2 className='text-xl font-bold '>Grow your online presence </h2>
            <Link href={"/contact"} className='bg-red-500 px-4 py-2 text-white  font-semibold rounded-full'>Connect</Link>
        </div>
    );
};

export default Grow;