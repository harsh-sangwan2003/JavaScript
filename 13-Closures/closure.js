// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.

function add() {

    let a = 4;

    function addChild() {

        console.log(a + 5);
    }
    addChild();
}

// add()(); // TypeError add(...) is not a function
add();