//some method
let numb=[3,4,5,6,7];
//kya ek bhi no even haan
let ansss=numb.some((number)=>number%2===0);
console.log(ansss);
let userCart=[
    {productid:1,price:19000},
    {productid:2,price:15000},
    {productid:3,price:13000},
]
let an=userCart.some((cart)=>cart.price>1000);
console.log(an);