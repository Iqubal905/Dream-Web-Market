"use client"
import Link from "next/link";
import toggleNav from "../navbar/compo/Toggle";
import { usePathname } from "next/navigation";

const SideNavlinks = ({ link }) => {
    let path = usePathname();
    return (
        <Link onClick={toggleNav} href={link.href} className={`${path == link.href ? "bg-gray-700 text-white" : "text-black bg-white"} py-2 rounded text-center font-semibold`} >{link.title}</Link>
    );
};

export default SideNavlinks;