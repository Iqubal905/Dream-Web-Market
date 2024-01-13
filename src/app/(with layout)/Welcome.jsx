import React from 'react';
// import img from "/welcome.webp"
import Image from 'next/image';
import Link from 'next/link';

const Welcome = () => {
    return (
        <div className='grid grid-cols-5 py-5 gap-3 items-center'>
            <div className='col-span-5 lg:col-span-3 '>
                <h1 className='text-5xl font-extrabold py-7'>COMPLETE WEB DESIGN & DEVELOPMENT</h1>
                <p className='text-gray-700'>Say goodbye to sleepless nights over counterproductive communications between service providers, and no more overbilling-related nightmares for services you’re not sure you need but you’re sure you have to pay for.</p>
                <div className='flex my-6 gap-3'>
                    <Link href={"/#price"} className='bg-red-500 px-5 py-2 capitalize rounded-full font-semibold text-lg text-white'>view Price</Link>
                    <Link href={"/#price"} className='bg-blue-500 px-5 py-2 capitalize rounded-full font-semibold text-lg text-white'>Call Us now</Link>
                </div>
            </div>
            <div className='col-span-5 lg:col-span-2'>

                <Image src={"/images/welcome.webp"} alt='welcome img' width="900" height={"700"}></Image>
            </div>
        </div>
    );
};

export default Welcome;