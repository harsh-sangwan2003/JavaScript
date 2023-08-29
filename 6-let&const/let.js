// TDZ -> let and const
// TDZ is a safety measure

console.log("Hello")
console.log("varName on line number 4", varName);
// decalre
let varName;
// default -> undefined
console.log("varName on line number 8", varName);

// reassign
varName = 10;
varName = 20;

// Cannot be re-declared -> Syntax Error
// let varName = 40;
console.log("varName on line number 16", varName);