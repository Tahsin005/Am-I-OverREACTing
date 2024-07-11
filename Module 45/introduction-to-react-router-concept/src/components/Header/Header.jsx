import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-start ps-12 items-center gap-12">
            <div className="text-5xl font-semibold">Nav</div>
            <div className="gap-x-10 flex py-10">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </div>            
        </div>
    );
};

export default Header;