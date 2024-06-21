const products = [
    {name: 'laptop', price:134},
    {name: 'tv', price:124},
    {name: 'phone', price:1234},
    {name: 'watch', price:1234},
    {name: 'car', price:0},
];
// map
const brands = products.map(product => product.name);

console.log(brands);

// for each


products.forEach(product => console.log(product.name));

// filter

const expensiveProducts = products.filter(product => product.price > 1000);

console.log(expensiveProducts);

const specificName = products.filter(product => product.name.includes('a'))

console.log(specificName);

// find 

const specialProduct = products.filter(product => product.name.includes('a'));

console.log(specialProduct);