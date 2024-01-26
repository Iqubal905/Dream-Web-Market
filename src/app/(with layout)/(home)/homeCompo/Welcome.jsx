import React from 'react';
// import img from "/welcome.webp"
import Image from 'next/image';
import Link from 'next/link';

const Welcome = () => {
    return (
        <div className='grid grid-cols-5 gap-3 items-center min-h-[75vh]  '>
            <div className='col-span-5 lg:col-span-3 flex lg:block flex-col items-center text-center lg:text-left'>
                <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold py-7'>Welcome to Dream Web Market</h1>
                <p className='text-gray-700'>Turning Dreams into Digital Realities! We craft sleek and powerful online solutions tailored just for you. Elevate your digital presence with us.</p>
                <div className='flex my-2 sm:my-6 gap-3 flex-col sm:flex-row'>
                    <Link href={"/#price"} className='bg-red-500 px-5 py-2 capitalize rounded-md font-semibold text-lg text-white'>view Price</Link>
                    <Link href={"/#price"} className='bg-blue-500 px-5 py-2 capitalize rounded-md font-semibold text-lg text-white'>Call Us now</Link>
                </div>
            </div>
            <div className='col-span-5 lg:col-span-2 '>

                <Image src={"/images/welcome.png"} className='' alt='welcome img' width="900" height={"400"}></Image>
            </div>
        </div>
    );
};

export default Welcome;