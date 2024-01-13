
import Link from "next/link";
import "./navbar.css"
import Menu from "./compo/Menu";
import Hamberger from "./compo/Hamberger";
import NavLinks from "../activeRoutes/NavLinks";
export let links = [
    {
        link: "/",
        title: "Home"
    }, {
        link: "/about",
        title: "About"
    }, {
        link: "/contact",
        title: "Contact"
    }, {
        link: "/ourworks",
        title: "Our Works"
    }
]
const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-100/50 backdrop-blur-sm flex justify-between items-center h-14 px-3 md:px-16 lg:px-24 fixed top-0 w-full z-50">
                <div className="flex gap-10">
                    <Link to={'/'} href={"/"} className="font-extrabold capitalize text-3xl"><span className="text-gray-900">D</span><span className="text-red-500">W</span><span className="text-blue-500">M</span></Link>
                    <div className="md:flex gap-2 items-center justify-center font-semibold hidden">
                        {
                            links.map(ele => <NavLinks key={ele.link} link={{ title: ele.title, href: ele.link }}></NavLinks>)
                        }
                    </div>
                </div>
                <div className="flex gap-3 font-semibold items-center">
                    <div className="hidden md:flex gap-3">
                        <NavLinks link={{ title: "Login", href: "/login" }} className="hidden md:block bg-white px-2 rounded text-orange-600">Login</NavLinks>
                        <NavLinks link={{ title: "Register", href: "/Register" }} href={"/"} className="hidden md:block bg-white px-2 rounded text-orange-600">Login</NavLinks>
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