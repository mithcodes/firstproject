//spread operator
let arr14=[12,43,56,76,5];
let arr2=[5,4,34,5,67,90];
let arr3=[...arr14];
console.log(arr3);
let arr4=[...arr14,...arr2];
console.log(arr4);
arr4=[...arr14,...arr2,43,33]; 
let obj1={
    key:"value1",
    key:"value2",
}
console.log(obj1);
let obj2={
    key3:"value4",
    key4:"value5",
}
console.log(obj2);
let copyobj={...obj1}
console.log(copyobj)
let copyobj2={...obj1,...obj2,key69:"value45"}
console.log(copyobj2);
//automatic key value k sth asign hogyaga
let copi={..."abc"};
console.log(copi);
let copiii={..."abcdefghijklmnopqrstuvwxyz"};
console.log(copiii);
