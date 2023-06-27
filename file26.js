//parameter desctutring
//objest  react mai bohut use hota ha
let person={
    name:"harshit",
   gender:"male",  

}

function print(obj){
    console.log(obj.name);
    console.log(obj.age);
        
}
function destruct({name,gender}){
    console.log(name);
    console.log(gender);
}
print(person);
destruct(person);
//isa destructing kahta h or react mai bahut use hota haan
