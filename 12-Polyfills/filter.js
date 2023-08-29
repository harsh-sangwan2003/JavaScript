let myArr = [1, 2, 3, 4, 5];

// let newArr = myArr.filter(function(x){

//     return x%2===0;
// })

// console.log(newArr);

// filter Polyfill
function myFilterPolyfill(arr, cb) {

    let newArr = [];

    for (i = 0; i < arr.length; i++) {

        if (cb(arr[i]) === true)
            newArr.push(arr[i]);
    }

    return newArr;
}

function isEven(x) {

    return x % 2 === 0;
}

console.log(myFilterPolyfill([1, 2, 3, 4, 5], isEven));