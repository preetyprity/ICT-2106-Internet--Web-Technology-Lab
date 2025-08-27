// =============================
// 1. Variables (var, let, const)
// =============================
var oldVar = "This is var";
let name = "John";
const age = 25;

// =============================
// 2. Data Types
// =============================
let str = "Hello";
let num = 10;
let bool = true;
let und;
let nul = null;
let obj = { key: "value" };
let arr = [1, 2, 3];

// =============================
// 3. Operators
// =============================
let a = 5 + 2;     // Arithmetic
let b = 5 > 2;     // Comparison
let c = true && false; // Logical

// =============================
// 4. Conditionals (if, else, switch)
// =============================
if (a > 5) {
  console.log("Greater");
} else {
  console.log("Smaller");
}

switch (a) {
  case 7:
    console.log("Seven");
    break;
  default:
    console.log("Not matched");
}

// =============================
// 5. Loops (for, while, for..of, for..in)
// =============================
for (let i = 0; i < 3; i++) {
  console.log("For loop:", i);
}

let i = 0;
while (i < 3) {
  console.log("While loop:", i);
  i++;
}

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("For..of:", color);
}

let person = { name: "John", age: 25 };
for (let key in person) {
  console.log("For..in:", key, person[key]);
}

// =============================
// 6. Functions (Normal, Arrow, Callback)
// =============================
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Alice"));

const greetArrow = (name) => `Hi ${name}`;
console.log(greetArrow("Bob"));

function caller(fn) {
  fn();
}
caller(() => console.log("Callback called"));

// =============================
// 7. Arrays and Array Methods
// =============================
let nums = [1, 2, 3, 4];
nums.push(5);
nums.pop();
let mapped = nums.map(n => n * 2);
let filtered = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((acc, curr) => acc + curr, 0);

// =============================
// 8. Objects & Object Methods
// =============================
let student = {
  name: "Sara",
  age: 20,
  greet() {
    return `Hi I'm ${this.name}`;
  },
};
console.log(student.greet());

// =============================
// 9. Destructuring & Spread/Rest
// =============================
let { name: studentName, age: studentAge } = student;
let [firstColor, ...restColors] = colors;
let combined = [...nums, 6, 7];
let newStudent = { ...student, grade: "A" };

// =============================
// 10. Classes and Inheritance
// =============================
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
let dog = new Dog("Rex");
dog.speak();

// =============================
// 11. Promises & async/await
// =============================
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunc() {
  console.log("Waiting...");
  await delay(1000);
  console.log("Done");
}
asyncFunc();

// =============================
// 12. DOM Manipulation (for Browser)
// =============================
 document.getElementById("myId").innerHTML = "Updated";
 document.querySelector(".myClass").addEventListener("click", () => alert("Clicked!"));

// =============================
// 13. Error Handling
// =============================
try {
  throw new Error("Something went wrong");
} catch (e) {
  console.error(e.message);
}

// =============================
// 14. JSON and LocalStorage
// =============================
let jsonString = JSON.stringify(student);
let parsed = JSON.parse(jsonString);
// localStorage.setItem("student", jsonString);
// let fromStorage = JSON.parse(localStorage.getItem("student"));

// =============================
// 15. Modules (ES6 Import/Export)
// =============================
// In file module.js
// export function sayHi() { return "Hi"; }
// In main.js
// import { sayHi } from './module.js';

// =============================
// 16. Fetch API
// =============================
async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchData();

// =============================
// 17. Closures
// =============================
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log("Count:", count);
  };
}
const counter = outer();
counter();
counter();

// =============================
// 18. Hoisting, Scope, 'this'
// =============================
console.log(hoistedVar); // undefined
var hoistedVar = 5;

// Scope
let globalVar = "global";
function scopeTest() {
  let localVar = "local";
  console.log(globalVar);
  console.log(localVar);
}
scopeTest();

// 'this'
const testObj = {
  value: 42,
  show: function () {
    console.log(this.value);
  },
};
testObj.show();

// =============================
// 19. Event Loop (Microtask vs Macrotask)
// =============================
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// =============================
// 20. Regular Expressions
// =============================
let re = /hello/i;
console.log(re.test("Hello world")); // true

