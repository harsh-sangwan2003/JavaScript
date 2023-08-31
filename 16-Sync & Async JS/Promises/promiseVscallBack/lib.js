// function updateAccount(product,cb){

//     setTimeout(()=>{

//         console.log(product + "bought");
//         cb();
//         cb();
//         cb();

//     },2000)
// }

function promiseUpdateAccount(product){

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            resolve(product);

        }, 2000);
    })
}

module.exports = {

    promiseUpdateAccount
}