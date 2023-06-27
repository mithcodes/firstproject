const fruits=["aple","mango","pineapple"];
for(let fruit of fruits){
    console.log(fruit);
}
for(let fruit of fruits){
    console.log(fruit.toUpperCase());
}
const fruits2=[];
for(let index of fruits){
    fruits2.push([index]);
}