let myArr = [1, 2, 3, 4, 5];

let filteredArr = myArr.filter(function (x) {

    if (x % 2 === 0)
        return true;

    return false;
})

console.log(myArr);
console.log(filteredArr);