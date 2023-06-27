//rest parameter
function fn(a,b,c,...d){
    console.log(`a is${a}`)
     console.log(`a is${b}`)
      console.log(`a is${c}`)
       console.log(`a is${d}`)
}
fn(12,3,4,5);
// bacha hua parameters array ban gya lst elent k lia
fn(2,3,4,43,4,6,7,8,9,7,87);
function addall(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}
console.log(addall(1,2,3,4,5,6,7,8));