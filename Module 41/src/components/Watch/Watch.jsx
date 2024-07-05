import React from 'react';

const Watch = ({watch}) => {
    const {watchId, brand, model, price, features, releaseDate} = watch;
    const watchStyle = {
        border: '2px solid purple',
        borderRadius: '10px',
        gap: '10px',
        backgroundColor: 'purple',
        margin: '10px',
        padding: '20px',
    }
    return (
        <div style={watchStyle}>
            <h2>Shomoi nai bhai</h2>
            <p>ID: {watchId}</p>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Features: {features.join(', ')}</p>
            <p>Release Date: {releaseDate}</p>
        </div>
    );
};

export default Watch;