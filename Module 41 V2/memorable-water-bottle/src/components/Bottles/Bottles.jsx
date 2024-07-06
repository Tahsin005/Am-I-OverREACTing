import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    }, []);
    const bottleStyle = {
        display: "inline-grid",
        gridColumnStart: 3,
        gridColumnEnd: 3,
    }
    return (
        <div className="grid-container" style={bottleStyle}>
            { bottles.map((bottle, index) => (
                <Bottle key={index} bottle={bottle}></Bottle>
            )) }
        </div>
    );
};

export default Bottles;