import React from 'react';
import Sidebar from './Sidebar';

const dashboardlayout = ({children}) => {
    return (
        <div className='flex'>
         <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default dashboardlayout;