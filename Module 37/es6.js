// Template string
const student = {
    name: "John",
    age: 25,
    city: "New York"
}

const about = `My name is ${student.name} and my age is ${student.age} and my city is ${student.city}`;

console.log(about);


// arrow function 

const add = (num1, num2) => {
    return num1 + num2;
}

const isOdd  = (num1, num2) => {
    return num1 & 1;
}

// spread operator

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = array;
// this will create a new array with the references to the old array, meaning, if we modify the original array then the new array will be modified too

// to avoid this .

const newArray2 = [...array];

// another spread operator syntax 

const newArray3 = [...array, 77];
// this will create a new array with value 77 appended to it