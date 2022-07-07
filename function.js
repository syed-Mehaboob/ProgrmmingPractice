function hello(){
console.log("mehabub syed");
}
hello();
//function with parameter
function add(num1,num2){
    let c=num1+num2
    console.log(c);
}
add(12,2);
//function with return type
function multi(num1,num2){
    return num1*num2
}
let c= multi(2,4);
console.log(c);
//function  are frist class citizen in js
let a= function sub(num1,num2){
    return num1-num2
}
console.log(a(21,12));