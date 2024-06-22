// json object

const student = {
    name: "John",
    age: 25,
    city: "New York"
}

const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

// parse the student json 
const studentObj = JSON.parse(studentJSON);

console.log(studentObj);


// fetch 
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data))

// keys, values 
const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys);

console.log(values);