import React from 'react';
import Navbar from '../Navbar';

const Withlayout = ({children}) => {
    return (
        <div>
        <Navbar></Navbar>
            {children}
            <footer className='text-3xl'>Footer</footer>
        </div>
    );
};

export default Withlayout;