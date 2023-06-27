//function inside function
function app(){
    let fun=()=>{
        console.log("be ur self");
    }
    let sum=(x,y)=>{
        return x+y;
    }
    let mul=(x,y,z)=>{
        return x*y*z;
    }
    console.log("inside app")
    fun();
    console.log(sum(65,65));
    console.log(mul(3,3,3))
}
app();