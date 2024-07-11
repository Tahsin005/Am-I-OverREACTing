import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
<<<<<<< HEAD
            <h1>This is home page.</h1>
=======
            <h1 className="font-bold text-3xl">This is home component....</h1>

>>>>>>> 7fe95182410d5920c2e0a913b7e2f15dff81b5b2
            <Outlet></Outlet>
        </div>
    );
};

export default Home;