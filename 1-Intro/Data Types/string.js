let singleQuotes = '  How are you   ';
let doubleQuotes = "double quotes ki string";

// console.log(singleQuotes);
// console.log(doubleQuotes);

// let char = singleQuotes.charAt(2);
// console.log(char);

// let charCode = singleQuotes.charCodeAt(2);
// console.log(charCode);

// let subStr = singleQuotes.substring(2,3);
// console.log(subStr);
singleQuotes = singleQuotes.trim();
let arrStr = singleQuotes.split(" ");
console.log(arrStr);

let str = arrStr.join("+");
console.log(str);