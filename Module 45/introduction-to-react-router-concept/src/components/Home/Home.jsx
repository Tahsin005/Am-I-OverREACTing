import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header> 
            {
                navigation.state == "loading" ?
                <div className="text-center font-extrabold bg-lime-800 text-8xl rounded-full text-white">Loading...</div> 
                
                :
                <Outlet></Outlet>
            }
            <h1 className="text-7xl text-center px-12">Welcome to my website</h1>
            
            <Footer className=""></Footer>
        </div>
    );
};

export default Home;