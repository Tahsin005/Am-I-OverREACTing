import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]); 
    const [cart, setCart] = useState([]); 

    useEffect(() => {
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log("object", bottles.length);
        if (bottles.length) {
            const storedCart = getStoredCart();
            console.log(storedCart);

            const savedCard = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) savedCard.push(bottle);
            }

            setCart(savedCard);
            console.log("savedCard", savedCard);
            console.log("cart", cart);
        }
    }, [bottles]);

    const bottleStyle = {
        display: "inline-grid",
        gridColumnStart: 3,
        gridColumnEnd: 3,
    }

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        console.log(`Added ${bottle.name} to cart`, cart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
        removeFromLS(id);
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
    }
    return (
        <>
            <div>
                <h2>Bottles: {bottles.length}</h2>
            </div>
            <div>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
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