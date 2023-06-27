//functiom
function sing(){
    console.log("happybirthday");
}
sing();
function add(x,y){
    console.log(x+y);
    console.log(x-y);
    return x*y;

}
add(2,4);
function isEven(number){
    if(number%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(8));

function firstcharacter(an){
    return an[0];
}
console.log(firstcharacter("hwfb"));
function findtarget(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    } 
    return -1;
}
let arr=[12,4,5,6,7,8,78];
let target=78;
console.log(findtarget(arr,target));
//function aisa bhi likh sakta hn
//function expression
let sumthree=function(num1,num2,num3){
    return num1+num2+num3;
}
let ans=sumthree(34,54,6);
console.log(ans);