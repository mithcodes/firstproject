//sets
//store date its own method
//no index based access unique item only allowed
let num=new Set([1,2,3,4,5]);
console.log(num);
//duplicate not alowed
let s=new Set("abc");
console.log(s);
num.add(12);  
num.add(90);
console.log(num);
if(num.has(1)){
    console.log("1 is persent")
}else{
    console.log("1 is no present");
}
let length=0;
for(let element of num){
length++;
}
console.log(length);




