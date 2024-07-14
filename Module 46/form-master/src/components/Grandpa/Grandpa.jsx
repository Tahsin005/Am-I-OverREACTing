import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

import "./Grandpa.css";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <div className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default Grandpa;
