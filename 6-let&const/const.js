// const must be assigned at the time of declaration
// Cannot be re-declaraed and re-assigned
const a = 10;
console.log(a);

const arr = [1,2,3,4];
arr.push(10);
console.log(arr);
arr = 4; // TypeError
console.log(arr);