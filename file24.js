//default parametrs
function addtwo(a,b){
    if(typeof b==="undefined"){
        b=0;
    }
    return a+b;
}
console.log(addtwo(4))
//bydefault agr c k vlalue naidega to 0 hoga nai to 
function addthree(a,b,c=3){
  return a+b+c;
}
console.log(addthree(12,12,12))
console.log(addthree(12,12))