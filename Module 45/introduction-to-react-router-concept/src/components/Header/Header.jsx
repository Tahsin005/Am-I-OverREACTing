import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-start ps-12 items-center gap-12 flex-wrap">
            <div className="text-3xl font-semibold">Nav</div>
            <div className="gap-x-10 flex py-10">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact</Link>
            </div>            
        </div>
    );
};

export default Header;