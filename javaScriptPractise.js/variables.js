// functionally/locally + global scope
//1.
var x = 10

function test(){
    var y = 20
}

console.log(x);

//2.
var pop = "Hi, js!"

function rel(){
    var top = "HellO, js!"
    
}

rel();
console.log(pop); //In this case Its only print the value of POP.
// console.log(top); 
//In this case we will get the error as TOP is undefined bcoz its not called locally inside the function as it is as locally assign variable.

//3.

var browser = "Chrome";
var browser = "Firefox";
// browser = "edge";

console.log(browser); //In this case it will only print the latest value 

//4. 

var g
// g = "Hii"
console.log(g);

//Issue with the VAR 

var flag = "Hey, Karn"
var t1 =4
if (t1 >3){
    var flag = "Hey, Karn"
}
console.log(flag);

//let : 
//scope : block scope

//1.

let m = "Hey, karn";
let time = 4;
if (time>3){
    let msg = "Hey, Tushar";
    console.log(msg);
}

console.log(m);
// console.log(msg); In this as LET is blocked scope then If try to print msg value outside the block it will give us an error

//2.

let len = 5;
// let len = 6; In this case you cannot change the value of let once it is assigned.

console.log(len);

//3.

let wid = 5;
wid = 6;

console.log(wid); // In this case it will print the updated assigned value

// const:

//1.
const y = "Hey ,karn";
// const y = "Hey, Tushar"; In this case we will get error because once we assign variable with const we cannot change it.
// y = "Hey , Dhiraj" In this case we will get same error as above
console.log(y);

//2.

const day = 7;
// day = 10;
console.log(700 * day);
