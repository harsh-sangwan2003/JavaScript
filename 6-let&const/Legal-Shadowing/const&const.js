const fruits = "apple";
console.log(fruits);
{
    // console.log(fruits); -> TDZ
    const fruits = "orange";
    console.log(fruits);
}
console.log(fruits);