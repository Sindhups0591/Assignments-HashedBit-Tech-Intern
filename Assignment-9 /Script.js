// 1. Declaring variables with var, let, and const
function variableScope() {
    var a = "I am var"; // Function-scoped
    let b = "I am let"; // Block-scoped
    const c = "I am const"; // Block-scoped and cannot be reassigned

    console.log(a, b, c);
}
variableScope();

// 2. Function to return the second fruit from an array
const fruits = ["Apple", "Banana", "Cherry", "Grapes", "Mango"];
function getSecondFruit() {
    return fruits[1]; // Returns "Banana"
}
console.log(getSecondFruit());

// 3. Function to push and pop an element in an array
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}
console.log(modifyArray([1, 2, 3]));

// 4. Function using map() to return squared numbers
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]

// 5. Function using filter() to return odd numbers
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]

// 6. Object with properties and a function to log a greeting
const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am a ${obj.occupation}.`);
}
greetPerson(person);

// 7. Function to calculate rectangle area
function calculateArea(rect) {
    return rect.width * rect.height;
}
console.log(calculateArea({ width: 5, height: 10 })); // Output: 50

// 8. Function to get object keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys({ name: "Alice", age: 25, country: "USA" })); // Output: ["name", "age", "country"]

// 9. Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // Output: {a: 1, b: 2, c: 3, d: 4}

// 10. Function using reduce() to calculate sum
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
