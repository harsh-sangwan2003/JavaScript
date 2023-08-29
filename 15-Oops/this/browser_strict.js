'use strict'

// window object
console.log(this); 

function fn(){

    // undefined
    console.log(this); 
}
fn();

let obj = {

    fn1: function () {

        // object itself
        console.log(this);

        function b() {

            // undefined
            console.log(this);
        }
        b();
    }
}

obj.fn1();