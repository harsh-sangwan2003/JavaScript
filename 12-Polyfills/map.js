let myArr = [1, 2, 3, 4, 5];

// let squaredArr = myArr.map(function (x) {

//     return x * x;
// })

// console.log(squaredArr);

// map Polyfill
function myMapPolyfill(arr, cb) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++)
        newArr.push(cb(arr[i]));

    return newArr;
}

function squareCb(x) {

    return x * x;
}

console.log(myMapPolyfill([1, 2, 3, 4, 5],squareCb))