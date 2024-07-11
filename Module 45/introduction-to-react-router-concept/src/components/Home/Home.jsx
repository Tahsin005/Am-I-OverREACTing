import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-7xl">This is home page.</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;