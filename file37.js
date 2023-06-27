//fill
//value start and end
let myArray=new Array(10).fill(2);
console.log(myArray);
myArray.fill(0,2,6);
console.log(myArray);
//splice -array ka bich sa delte y insert karna h to
// start,delte insert
//delete or dete item ko store bhi kr skta hn
myArray.splice(1,6);
console.log(myArray);
//insertand delete
myArray.splice(1,2,45,4);
