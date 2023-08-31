let p1 = new Promise((resolve, reject) => {

    resolve('Promise 1 is resolved');
})

let p2 = new Promise((resolve, reject) => {

    reject('Promise 2 is rejected');
})

let p3 = new Promise((resolve, reject) => {

    resolve('Promise 3 is resolved');
})

// If any one of the promises is rejected then the entire array of promises is rejected
let promiseArr = Promise.allSettled([p1, p2, p3]);
promiseArr.then((arr) => {

    console.log(arr);
}).catch(err => {

    console.log(err);
})