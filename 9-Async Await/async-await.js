// Cleaner version of promises
function placeOrder(drink) {

    return new Promise((resolve, reject) => {

        if (drink === 'Coffee')
            resolve('order placed.');

        else
            reject('Sorry, we only serve coffee.');
    })
}

function processOrder(order) {

    return new Promise((resolve) => {

        console.log("Order is being processed.");
        resolve(`Coffee served for the ${order}`);
    })
}

async function serveOrder() {

    try {
        const orderReceived = await placeOrder('Tea');
        console.log(orderReceived);

        const processedOrder = await processOrder(orderReceived);
        console.log(processedOrder);
    } catch (err) {
        console.log(err);
    }
}
serveOrder();