const lib = require('./lib');

let amount = 2000;
let tocut = 200;

function chargeDebitCard() {

    amount -= tocut;
    console.log('Remaining amount is: ', amount);
}

let promiseObj = lib.promiseUpdateAccount('TV').then(chargeDebitCard);