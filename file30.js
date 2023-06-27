 //filter method
 let number=[1,,2,3,4,5,6,7];
 let iseven=function(number){
    return number%2==0;
 }
 let odd=function(number){
    return number%2!=0;
 }
 let even=number.filter(iseven);
 console.log(even);
 let oddno=number.filter(odd)
 console.log(oddno);
 //filter function hmsa true of false hi deta hn
 