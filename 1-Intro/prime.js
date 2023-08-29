let num = 24;
let flag = true;

for (let i = 2; i * i <= num; i++)
    if (num % i == 0)
        flag = false;

if (flag)
    console.log("Number is prime.");

else
    console.log("Number is not prime.");