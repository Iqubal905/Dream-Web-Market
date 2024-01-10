import Link from 'next/link';
import React from 'react';


const navlink = [
    {
        path: '/dashboard', 
        title:'Dashboard'
    },
    {
        path: '/dashboard/addproduct', 
        title:'Add product'
    },
    {
        path: '/dashboard/manageproduct', 
        title:'Manage product'
    },
    {
        path: '/', 
        title:'home'
    }

    
]
const Sidebar = () => {
    return (
        <div>
            <aside className='mr-10'>
               <h1>Dashboard</h1>
          <ul className=' '>
             {
                navlink.map(({path, title}) => <li className='mx-2' key={path}> 
                <Link   href={path}>{title}</Link>
                </li>)
             }
           </ul>
         
            </aside>
        </div>
    );
};

export default Sidebar;