class Person{
    constructor(uName,uAge){
        this.name=uName;
        this.age=uAge;
    }
    details(){
        console.log(`the age of $(this.name) is ${this.age}`);
    }
}
const p=new Person("harry",26);
p.details();
const pp=new Person("bhagiath",37);
p.details();