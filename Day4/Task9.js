// Task 10: Import / Export (Real Interview Task)
//  File 1 math.js Create: add() sub() Export them.
//  File 2 app.js Import both functions and call them. Expected Output 30 10

// math.js

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// app.js

import { add, sub } from "./math.js";

console.log(add(20, 10)); 
console.log(sub(20, 10)); 




