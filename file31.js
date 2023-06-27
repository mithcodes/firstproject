//reduce method
let number=[1,2,3,4,5,6];
let
sum=0;
 sum=number.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(sum); 
let userCart=[
    {productid:1,price:19000},
    {productid:2,price:15000},
    {productid:3,price:13000},
]
 let totalprice;

totalprice=userCart.reduce((totalprice,cr)=>{
return totalprice+cr.price;
},0);
console.log(totalprice);