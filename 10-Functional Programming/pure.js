// Impure function

// Same args but it can give different results
// Depends on external factor
// let a = 7;

// function addNum(b){

//     console.log('The sum is: ',a+b);
// }
// addNum(2);

// Pure function
// State must no mutate 
function addNum(a, b) {

    // But it uses external screen
    // console.log('The sum is: ',a+b); //side effect

    return a + b;
}

console.log(addNum(2, 3));