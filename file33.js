//soting method
//soryt method
let number=[12,45,6,765,43,76];
number.sort((a,b)=>{
    return a-b;
})
console.log(number)
//a-b ascending dega orb-a descending dega
let number2=[54,67,8,98,90,432];
number2.sort((a,b)=>{
    return b-a;
})
console.log(number2);
let userCart=[
    {productid:1,price:19000},
    {productid:2,price:15000},
    {productid:3,price:13000},
]
userCart.sort((a,b)=>{
    return a.price-b.price;
})