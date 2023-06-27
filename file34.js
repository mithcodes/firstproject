//find method
let arr=["hello","my","name","mithlesh"];
function islength(string){
    return string.length===4;
}
let ans=arr.find(islength);
console.log(ans);

let user=[
    {productid:1,price:19000},
    {productid:2,price:15000},
    {productid:3,price:13000},
]
let answer=user.find((user)=>{

    return user.productid==1;
})

console.log(answer);
