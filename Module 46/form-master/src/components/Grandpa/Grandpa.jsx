import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

import "./Grandpa.css";
export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const asset = "Diamond";
  const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <div className="flex">
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </div>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
