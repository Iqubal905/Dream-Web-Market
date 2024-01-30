"use client"
import React from 'react';
import toggleNav from './Toggle';

const Hamberger = () => {
    return (
        <div className="bg-white  w-11 p-1 rounded gap-1 flex flex-col cursor-pointer md:hidden" onClick={toggleNav} >
            <div id="ham1" className={`bg-gray-700 w-full h-[.4rem] rounded-sm duration-300`}></div>
            <div id="ham2" className={`bg-gray-700 w-full h-[.4rem] duration-200`}></div>
            <div id="ham3" className={`bg-gray-700 w-full h-[.4rem] rounded-sm  duration-300`}></div>
        </div>
    );
};

export default Hamberger;