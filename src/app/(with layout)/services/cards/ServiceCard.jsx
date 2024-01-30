import React from 'react';

const ServiceCard = ({ data }) => {
    return (
        <div className='group p-2 border items-center relative rounded text-center flex flex-col justify-between'>
            <div className='absolute w-0 left-1/2 top-0 bg-slate-100 duration-300 group-hover:w-1/2 h-full -z-10'></div>
            <div className='absolute w-0 right-1/2 top-0 bg-red-50 delay-200 duration-300 group-hover:w-1/2 h-full -z-10'></div>
            <h3 className='relative text-md w-fit font-semibold pb-4'>{data.title}
                <span className='absolute h-1 rounded w-0 duration-300 bg-blue-600 left-0  bottom-3 group-hover:w-full'></span>
            </h3>
            <p className='px-4 text-justify select-none'>{data.description.slice(0, 160)}..</p>

        </div>
    );
};

export default ServiceCard;