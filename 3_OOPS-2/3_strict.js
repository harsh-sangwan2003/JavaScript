"use strict"
/**************************** Q-1 ***********************/
// let cap = {
//     firstName:"Steve",
//     sayHi:function(){
//         console.log("6 this is",this);
//         console.log('Hi from ',this.firstName);
//     }
// }

// // method call
// cap.sayHi();
// let sayHi = cap.sayHi;

// var firstName = "loki";
// // function call
// sayHi();

/**************************** Q-2 ***********************/
// let cap = {
//     firstName:"Steve",
//     sayHi:function(){
//         console.log("22",this.firstName); // Steve
//         const iAmInner = function(){
//             console.log("24",this.firstName); // TypeError
//         }
//         // this -> undefined
//         iAmInner();
//     }
// }
// cap.sayHi();

/**************************** Q-3 ***********************/
/*******
 * 1. syntax sugar
 * 2. related to this
 */
let cap = {
    firstName: "Steve",
    sayHi: function () {
        console.log("42", this.firstName); // Steve / undefined
        const iAmInner = () => {

            // arrow functions don't have their own this they inherit from lexical scope.
            console.log("44", this.firstName); // Steve / undefined
        }
        // this -> undefined
        iAmInner();
    }
}

let arrowFn = cap.sayHi;
cap.sayHi();
console.log('````````````````````````````````');
arrowFn();