let myArr = [1, 2, 3, 4, 5];

// let sum = myArr.reduce(function (acc, ele) {

//     return acc + ele;

// }, 0)

// console.log(sum);

// reduce Polyfill
function myReducePolyfill(arr, cb) {

    let sum = 0;

    for (i = 0; i < arr.length; i++) {

        sum = cb(sum, arr[i]);
    }

    return sum;
}

function addNumbers(x, ele) {

    return x + ele;
}

console.log(myReducePolyfill([1, 2, 3, 4, 5], addNumbers));