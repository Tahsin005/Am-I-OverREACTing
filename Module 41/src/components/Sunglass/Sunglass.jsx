import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, dividethefirstnumberbysecondnumber as divide } from '../Utilities/calculator'

const Sunglass = () => {
    const a = 10;
    const b = 5;
    const sum = add(a, b);
    const product = multiply(a, b);
    const vaag = divide(10, 5);
    return (
        <div>
            <h1>Add: {sum}</h1>
            <h2>Product: {product}</h2>
            <h4>Divide: {vaag}</h4>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;