import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      {/* <h1 className="text-4xl font-extrabold">Price Options</h1> */}
      <PriceOptions></PriceOptions>
      <div className="">
        <LineChart></LineChart>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App;
