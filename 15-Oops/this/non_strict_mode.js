// empty object
console.log(this); 

function fn(){

    // global object
    console.log(this); 
}
fn();

let obj = {

    fn1: function () {

        // object itself
        console.log(this);

        function b() {

            // global object
            console.log(this);
        }
        b();
    }
}

obj.fn1();