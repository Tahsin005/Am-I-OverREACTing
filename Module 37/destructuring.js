// destructuring 
const numbers = [1, 2];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [1, 2];
// const [x, y] = numbers;

console.log(x, y);

function arrayfy (x, y) {
    return [x, y];
}

const [a, b] = arrayfy(1, 2);

console.log(a, b);


// object destructuring - serial doesnot matter, but the variable name
// matters
const {nm, val} = {id : 1, nm : 'tahsin', salary : '40k', val : 99}

console.log(nm, val);