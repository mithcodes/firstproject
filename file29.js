//important array method
//foreach map filter reduce

let number=[2,5,6,7,8];
function multiply(number,index){
    console.log("index is",index);
    console.log(number*2,index);
}
for(let i=0;i<number.length;i++){
    multiply(number[i],i);
}
let arr=[2,5,6,7,8];
function method(number ,index){
    console.log("no is"+number+" its index is"+index)
}
arr.forEach(method);


let arr2=[2,3,4,6,98,7,6,5];
arr2.forEach(function(number,index){
    console.log(number   ,index);
})
let user=[
{name:"viky",age:23},
{name:"deepak",age:16},
{name:"harry",age:26},
]

user.forEach(function(user){
    console.log(user.name);
    console.log(user.age);
})
//arow functon bhi use kr skta hn
user.forEach((user)=>{
    console.log(user.name);
 });
 