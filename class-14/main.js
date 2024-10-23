"use strict";
//OPTIONAL PARAMETERS
//user argument du toh bh theek nh dy toh bhi theek
function Form(name, feedback) {
    console.log(name, feedback);
}
Form("hamza", "good class");
let product = {
    name: "bread",
};
//REST PARAMETERS
//indefinite number of arguments
function FileUpLoad(...file) {
    console.log(file);
}
FileUpLoad("one.png", "two.jpg");
//homework whatsapp images
//Explicit Casting
//zbrdsti ksi ki type bnana
let age;
age = "twenty";
console.log(age.toUpperCase()); //API kahin sy data mangaty hain toh
let ball = {
    diameter: 10,
};
let sphere = {
    diameter: 10,
};
sphere = ball;
ball = sphere; //because properties or datatypes same hain
let tube = {
    diameter: 150,
    length: 750,
};
//LHS = RHS
//ball=tube //ok
//tube = ball//error
//index signature property name ni pta ho
let myType = {
    id: 1,
    firstName: "ali",
};
//myType={
//  id:56
//[country:"pak]:any"
//}
myType = {
    id: 89,
    firstName: "afrah",
};
let myDish;
//object bnakr usk varible ko dsry object k varibale ko cpmpare krty hen toh
//STALE OBJECT
//For Example :
//ball= tube
//FRESH OBJECT
//jis jaga jis line pr oject bnaty usy fresh object khty hen OR AGAR FRESH OBJECT HO STALE KI JAGAH TOH ERROR AYEGA RHS MAIN
//SYNCHRONOUS AND ASYNCHRONOUS
//SYNCHRONOUS CODE/programming
console.log(1);
console.log(2);
function add() {
    let res = 5 + 5;
    return res;
}
let res = add();
//console.log(res)
console.log(44);
console.log(res);
//ASYnchronous Programming
//jo cheezen chlny mn time len voh Asynchronous hain
//javascript ny 2 log hire kiye 
//1- call stack (synchronous code callstack mn jata hai)
//2-call back queue 
//website loupe
//- call back functions
// jo function as an argument pass ho voh call back function
//EXAMPLE
function One(callback) {
    callback(); //calling cb function
}
function Two() {
    console.log("ASYNC FUNCTION");
}
One(Two);
//One(Two()) call back funcction ko as an argument  pass krty huye round bracket nh lgayengy q k round bracket hum upaer lga chuky hen
//set time out homework
