import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-7xl text-center px-12">Welcome to my website</h1>
            <Outlet></Outlet>
            <Footer className=""></Footer>
        </div>
    );
};

export default Home;