let myArr = [1, 2, 3, 4, 5];

let sum = myArr.reduce(function (acc, x) {

    return acc + x;

}, 0);

console.log(sum);