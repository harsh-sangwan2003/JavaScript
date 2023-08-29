function outer(x){

    return function(y){

        return x+y;
    }
}

let curry = outer(2);
console.log(curry(3));