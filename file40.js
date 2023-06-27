//map
//map is iterable
//store data in order fashion 
//store key value pair
//duplicate keys are not allowed like object
//object can hav string and symbol as key
//in map you can use anything as key like array ,number,string
const person=new Map();
person.set(`name`,`harshit`);
person.set(`age`,23);
person.set(1,"one");
person.set([23,43,5,6],"array bhi leta h");
person.set("add","govindpur");
console.log(person);
console.log(person.get(1));
console.log(person.keys());
console.log(person.get("age"))
for(let key of person){
    console.log(key)
}//aray mai return karega
const person1=new Map([[`name`,`harsh`],[`age`,12]])
console.log(person1);