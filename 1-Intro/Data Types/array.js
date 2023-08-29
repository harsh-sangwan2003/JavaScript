let arr = [1, 2, 3, 4, 5,];
console.log(arr.length);

// let i = 0;
// while (i < arr.length) {

//     console.log("Element at index ", i, "is: ", arr[i]);
//     i++;
// }

// Add at last and first
// push, unshift
arr.push("last value"); //returns length of the array
arr.unshift("first value"); //returns length of the array

console.log(arr);

// Remove from last and first
// pop, shift
arr.pop(); //returns specified value
arr.shift(); //returns specified value

console.log(arr);

// startidx, endidx-1 returns a copy of the array
// Original array is not modified
let partOfArray = arr.slice(2, 4);
let partOfArray2 = arr.slice(2);
console.log(partOfArray);
console.log(partOfArray2);

// Modifies the actual array
console.log(arr.splice(2, 2));
console.log(arr);