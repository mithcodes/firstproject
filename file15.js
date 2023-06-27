//object-refrences type hai
const person={name:"harshit",age:22};
console.log(person);
console.log(person.name);
console.log(person.age);
//object bana k dura trika
const person2={
    name:"gharshit",
    age:89,
    hobbies:["guiatar","hockey"]

}
//how to add value to key
person.gender="male";
console.log(person);
console.log(person["age"]);
//multiple values acces krna k trika
console.log(person2["person hobbies"]);
//for in loop-to get key and values
for(let key in person){
    console.log(key);
}
//to get values and key
for(let key in person){
    console.log(key,person[key]);

}
console.log(Object.keys(person));

