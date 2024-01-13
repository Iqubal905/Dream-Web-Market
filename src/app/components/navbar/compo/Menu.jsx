"use client"
import Link from 'next/link';
import React from 'react';
import toggleNav from './Toggle';
import { links } from '../Navbar';
import SideNavlinks from '../../activeRoutes/SideNavlinks';

const Menu = () => {
    return (
        <div id="smallScreen" className={`flex flex-col items-stretch md:hidden text-center p-3 gap-3 font-semibold fixed h-screen z-50 top-14 w-full bg-gray-300/50 backdrop-blur duration-150 nav-left-full`}>
            {
                links.map(ele => <SideNavlinks key={ele.link} link={{ title: ele.title, href: ele.link }} ></SideNavlinks>)
            }
            <SideNavlinks link={{ href: "/login", title: "Login" }} href={"/"} onClick={toggleNav}>Login</SideNavlinks>
            <SideNavlinks link={{ href: "/register", title: "Register" }} href={"/"} onClick={toggleNav}>Register</SideNavlinks>
        </div>
    );
};

export default Menu;