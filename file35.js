//every method
let num=[12,45,6,7,8,9];
function isseven(num){
    return num%2===0;
}
let ans=num.every(isseven);
console.log(ans);
//check every product price
//every function kayol true or false deta haan
let userCart=[
    {productid:1,price:19000},
    {productid:2,price:15000},
    {productid:3,price:13000},
]
  let anss=userCart.every((cart)=>cart.price>1000
  );
  console.log(anss);  
