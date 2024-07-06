import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]); 
    const [cart, setCart] = useState([]); 

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

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        console.log(`Added ${bottle.name} to cart`, cart);
    }
    return (
        <>
            <div>
                <h2>Bottles: {bottles.length}</h2>
            </div>
            <div>
                <h2>Cart: {cart.length}</h2>
            </div>
            <div className="grid-container" style={bottleStyle}>
                { bottles.map((bottle, index) => (
                    <Bottle key={index} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>
                )) }
            </div>
        </>
    );
};

export default Bottles;