function placeOrder(drink) {

    return new Promise((resolve, reject) => {

        if (drink === 'Coffee')
            resolve('Order Placed.');

        else
            reject('Sorry, we only serve coffee.');
    })
}

function processOrder(order) {

    return new Promise((resolve) => {

        console.log('Order is being processed.');
        resolve(`Coffee served for the ${order}`);
    })
}

placeOrder('Tea').then((orderFromCustomer) => {

    console.log('Request received');

    let orderProcessedPromise = processOrder(orderFromCustomer);
    return orderProcessedPromise;
}).then(orderIsProcessed => {

    console.log(orderIsProcessed);
}).catch(err => {

    console.log(err);
})