"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLinks = ({ link }) => {
    let path = usePathname()
    return (
        <Link href={link.href} className={path == link.href ? "text-red-500" : "text-black"}>{link.title}</Link>
    );
};

export default NavLinks;