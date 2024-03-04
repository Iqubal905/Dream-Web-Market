"use client"
import Image from 'next/image';
import React from 'react';

const Members = ({ data }) => {

    return (
        <div className='bg-white rounded w-full flex py-3 items-center justify-center flex-col'>
            <Image src={data.image} alt={data.name + "s picture"} className='rounded-full bg-gray-200' height={120} width={120}></Image>
            <p className='font-semibold text-black text-center'>{data.name}</p>
            <p className='font-semibold text-blue-400 text-xs underline underline-offset-2 text-center'>{data.title}</p>
        </div>
    );
};

export default Members;