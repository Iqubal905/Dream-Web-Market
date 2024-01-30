"use client"
import React from 'react';

const NewsLatter = () => {
    const subscribe = (e) => {
        e.preventDefault();
        let text = e.target.email.value;
        console.log(
            text
        )
    }
    return (
        <form onSubmit={subscribe} className='flex gap-3  p-1 rounded flex-wrap w-full'>
            <input type="email" name="email" placeholder='yor email' className='px-2 text-black font-normal w-full' />
            <button className='bg-red-500 rounded-md text-white px-2 py-1'>subscribe</button>
        </form>
    );
};

export default NewsLatter;