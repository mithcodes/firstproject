//callback function
function fn(a){
    console.log(a);
    
}
fn("abc");
fn([12,3,,4,5,6,6]);
fn(45);
function func2(){
    console.log("inside func2");
}
function func(callback){
    callback();
}
func(func2);