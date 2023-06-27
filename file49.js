const user1={
 firstName:"harshit",
 age:24,
 abuout  :function(){
    console.log(this.firstName,this.age);
 }  
}//abb ham user2 banega or user1 ka about access karenga caall method k hlp sa
const user2={
    firstName:"mithlesh",
    age:23,
}
user1.abuout();
user1.abuout.call(user2);
user1.abuout.call(user1);
//ab ham parameter bhipass kr sakta hn
const user3={
    firstName:"harshit",
    age:24,
    abuout  :function(hobby,music){
       console.log(this.firstName,this.age,hobby,music);
    }  
   }//abb ham user2 banega or user1 ka about access karenga caall method k hlp sa
   const user4={
       firstName:"mithlesh",
       age:23,
   }
   user3.abuout();
   user3.abuout.call(user4,"playing","arjit singh");