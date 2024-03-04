import React from 'react';
import Image from 'next/image';

const Goal = () => {
    return (
        <div className='grid grid-cols-5 gap-3 items-center min-h-[75vh]  '>
            <div className='col-span-5 lg:col-span-3 flex lg:block flex-col items-center text-center lg:text-left'>
                <h1 className='text-xl md:text-2xl font-semibold   my-4'>What is Our Goal ?</h1>
                <p className='text-gray-700'>Our goal is to empower businesses with high-performing websites, driving lasting digital success through innovation and collaboration.</p>
                <ul className='flex flex-col gap-1 mt-2'>
                    <li className='flex relative'>
                        <Image
                            src="/images/correct.png"
                            alt=""
                            className="absolute left-0"
                            width={24}
                            height={6}
                            priority
                        />
                        <span className='ml-8'>Transparent Collaboration and Control</span>
                    </li>
                    <li className='flex relative'>
                        <Image
                            src="/images/correct.png"
                            alt=""
                            className="absolute left-0"
                            width={24}
                            height={6}
                            priority
                        />
                        <span className='ml-8'>Enhanced Customer Support</span>
                    </li>
                    <li className='flex relative'>
                        <Image
                            src="/images/correct.png"
                            alt=""
                            className="absolute left-0"
                            width={24}
                            height={6}
                            priority
                        />
                        <span className='ml-8'>Flexibility and Adaptability</span>
                    </li>
                    <li className='flex relative'>
                        <Image
                            src="/images/correct.png"
                            alt=""
                            className="absolute left-0"
                            width={24}
                            height={6}
                            priority
                        />
                        <span className='ml-8'>Improved Operational Efficiency</span>
                    </li>


                </ul>
            </div>
            <div className='col-span-5 lg:col-span-2 '>

                <Image src={"/images/ourgoal.png"} className='' alt='welcome img' width="900" height={"400"}></Image>
            </div>
        </div>
    );
};

export default Goal;