// Is Square even?

// Imperative 
// const x = 4;

// const xSquared = x * x;

// let isEven;

// if (xSquared % 2 === 0)
//     isEven = true;

// else
//     isEven = false;

// console.log(isEven);

// Declarative Way
const isSquareEven = (x)=>(x*x)%2===0;

console.log(isSquareEven(4));