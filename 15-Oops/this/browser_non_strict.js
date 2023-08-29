// window object
console.log(this); 

function fn(){

    // window object
    console.log(this); 
}
fn();

let obj = {

    fn1: function () {

        // object itself
        console.log(this);

        function b() {

            // window object
            console.log(this);
        }
        b();
    }
}

obj.fn1();