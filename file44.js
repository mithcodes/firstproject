const person = {
    name: "harshit",
    age: 8,
    about: function() {
      console.log(`person name is ${this.name} and ${this.age}`);
    },
  };
  
  person.about();
  
  function personinfo() {
    console.log(`person name is ${this.name} and age is ${this.age}`);
  }
  
  const person1 = {
    name: "harsh",
    age: 8,
    about: personinfo,
  };
  
  const person2 = {
    name: "harsh",
    age: 8,
    about: personinfo,
  };
  
  const person3 = {
    name: "harsh",
    age: 8,
    about: personinfo,
  };
  
  const person4 = {
    name: "harsh",
    age: 8,
    about: personinfo,
  };
  
  const person5 = {
    name: "harsh",
    age: 8,
    about: personinfo,
  };
  
  person1.about();
  person2.about();
  person4.about(); 
  