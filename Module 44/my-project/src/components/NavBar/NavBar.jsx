import { useState } from "react";
import Link from "../Link/Link";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
    ]
    return (
        <nav className="p-6">
            <div className="md:hidden p-6" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose className="text-2xl hover:bg-slate-300 rounded-md"></IoClose> : <FaHamburger className="text-2xl"></FaHamburger>
                }
            </div>
            <ul className={`md:flex px-6 ${open ? 'top-20': '-top-60'} py-2 duration-1000 absolute sm:shadow-md md:shadow-none rounded-xl md:top-4 bg-white`}>
                {
                    routes.map((route) => 
                        <Link key={route.id} route={route}></Link>
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;