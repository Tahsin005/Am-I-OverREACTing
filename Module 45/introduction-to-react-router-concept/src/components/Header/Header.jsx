import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="flex justify-start ps-12 items-center gap-12 flex-wrap">
            <div className="text-3xl font-semibold">Nav</div>
            
            <div className="gap-x-10 flex py-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>            
        </div>
    );
};

export default Header;