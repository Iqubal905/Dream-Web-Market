import Link from 'next/link';
import { list } from 'postcss';
import React from 'react';


const navlink = [
    {
        path: '/', 
        title:'Home'
    },
    {
        path: '/about', 
        title:'About'
    },
    {
        path: '/profile', 
        title:'Profile'
    },
   
    
]

const Navbar = () => {
    return (
        <div className=''>
          
         
           <nav className=' flex items-center justify-between container mx-auto'> 
           <h1 className=' text-xl font-bold'>next-3 practice</h1> 
          <ul className=' flex items-center justify-between'>
             {
                navlink.map(({path, title}) => <li className='mx-2' key={path}> 
                <Link   href={path}>{title}</Link>
                </li>)
             }
           </ul>
          </nav>
        </div>
    );
};

export default Navbar;