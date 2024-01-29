import Link from "next/link";
import "./navbar.css";
import Menu from "./compo/Menu";
import Hamberger from "./compo/Hamberger";
import NavLinks from "../activeRoutes/NavLinks";
import Image from "next/image";
export let links = [
    {
        link: "/",
        title: "Home",
    },
    {
        link: "/about",
        title: "About",
    },
    {
        link: "/services",
        title: "Services",
    },
    {
        link: "/contact",
        title: "Contact",
    },

];
const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-100/50 backdrop-blur-sm flex justify-between items-center h-14 px-3 md:px-16 lg:px-44 fixed top-0 w-full z-50">
                {" "}
                <Link
                    to={"/"}
                    href={"/"}
                    className="font-extrabold capitalize text-3xl"
                >
                    <Image height={120} width={180} src={"/../../icon.png"} alt="logo"></Image>
                </Link>
                <div className="flex gap-10">
                    <div className="md:flex gap-2 items-center justify-center font-semibold hidden">
                        {links.map((ele) => (
                            <NavLinks
                                key={ele.link}
                                link={{ title: ele.title, href: ele.link }}
                            ></NavLinks>
                        ))}
                    </div>
                    {/* small screen menu toggler */}
                    <Hamberger></Hamberger>
                </div>
            </nav>
            <div className="h-16 w-full bg-gray-100 shadow"></div>
            {/* small screen menu */}
            <Menu></Menu>
        </>
    );
};

export default Navbar;
