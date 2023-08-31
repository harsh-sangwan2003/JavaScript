const fs = require('fs');

let p1 = fs.promises.readFile('f1.txt');
let p2 = fs.promises.readFile('f2.txt');
let p3 = fs.promises.readFile('f3.txt');

p1.then(data => {

    console.log(data.toString());
})

p2.then(data => {

    console.log(data.toString());
})

p3.then(data => {

    console.log(data.toString());
})