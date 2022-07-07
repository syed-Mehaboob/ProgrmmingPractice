// variable decalaration
console.log("hello iam mehabub");
let char="a";
console.log(char);
let str="mehabub";
console.log(str);
let bool="true";
console.log(bool);
// loops
for(let i=1; i<10; i++){
console.log(i);
}
//while
let count=10;
while(count>=0){
    console.log(count);
        count--;
    }
    //prime number
    let n=6;
    let primenum=true;
    for(let i=2; i*i<=n; i++){
        if(n%i==0){
        primenum=false;
    }
}
    if(primenum==true){
        console.log("prime number");
        }
    else{
        console.log("not a prime number");
    }


    