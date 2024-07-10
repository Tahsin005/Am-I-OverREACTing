import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      {/* <h1 className="text-4xl font-extrabold">Price Options</h1> */}
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;