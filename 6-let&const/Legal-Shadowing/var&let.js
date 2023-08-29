var fruits = "apple";
console.log(fruits);
{
    // console.log(fruits); -> TDZ
    let fruits = "orange";
    console.log(fruits);
}
console.log(fruits);