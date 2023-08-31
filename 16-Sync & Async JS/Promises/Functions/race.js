let p1 = new Promise((resolve, reject) => {

    reject('Promise 1 is rejected');
})

let p2 = new Promise((resolve, reject) => {

    reject('Promise 2 is rejected');
})

let p3 = new Promise((resolve, reject) => {

    resolve('Promise 3 is resolved');
})

// The promise recieved is resolved/rejected
let promiseArr = Promise.race([p1, p2, p3]);
promiseArr.then((arr) => {

    console.log(arr);
}).catch(err => {

    console.log(err);
})