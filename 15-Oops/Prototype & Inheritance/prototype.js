let arr = [1, 2, 3, 4, 5];

console.log(arr.__proto__);
console.log(Array.prototype);
console.log(Array.prototype === arr.__proto__);

console.log(arr.__proto__.__proto__);
console.log(Object.prototype);
console.log(Object.prototype === arr.__proto__.__proto__);