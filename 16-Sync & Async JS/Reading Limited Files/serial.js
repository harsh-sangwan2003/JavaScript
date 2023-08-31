const fs = require('fs');

let p1 = fs.promises.readFile('f1.txt');

p1.then(data => {

    console.log(data.toString());

    let p2 = fs.promises.readFile('f2.txt');
    p2.then(data => {

        console.log(data.toString());

        let p3 = fs.promises.readFile('f3.txt');
        p3.then(data => {

            console.log(data.toString());
        })
    })

})