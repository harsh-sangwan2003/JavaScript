const fs = require('fs');

const arr = ['f1.txt','f2.txt','f3.txt'];

for(let i=0; i<arr.length; i++){

    let fileReadPromise = fs.promises.readFile(arr[i]);
    fileReadPromise.then(cb);
}

function cb(data){

    console.log(data.toString());
}