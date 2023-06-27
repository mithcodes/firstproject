console.log(this);
console.log(window);  
//call direct function ko call karta han
function hello(){
    console.log("hello");
}
hello.call();