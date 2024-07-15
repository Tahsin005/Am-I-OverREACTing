import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h4>Crush</h4>
            <p>Fariha Meem</p>
            <p>Will you accept my {asset}</p>
            <p>Also has {gift}</p>
        </div>
    );
};

export default Special;