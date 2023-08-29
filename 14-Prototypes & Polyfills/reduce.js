Array.prototype.myReduce = function (cb) {

    let sum = 0;

    for (let i = 0; i < this.length; i++) {

        sum = add(sum, this[i]);
    }

    return sum;
}

function add(acc, ele) {

    return acc + ele;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.myReduce(add));