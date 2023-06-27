//call aplly bind
//hm call k use krk dusra object k function k call karenga 
const user1={
    name:"harsh",
    age:34,
    about:function(hobby,muscian){
        console.log(this.name,this.age,this.hobby,this.muscian)
    }
}
const user2={
    name:"mohit",
    age:34,
}
user1.about.call(user2);
user1.about.call(user1);
user1.about.call(user2,"guitar","game")
//hm argument bhi pass kr sakta hn
//function ko bahr bhi likh sakta hu



