//OPTIONAL PARAMETERS
//user argument du toh bh theek nh dy toh bhi theek
function Form(name: string, feedback?: string) {
  console.log(name, feedback);
}

Form("hamza", "good class");
//For Objects
interface Product {
  name: string;
  price?: number;
}
let product: Product = {
  name: "bread",
};
//REST PARAMETERS
//indefinite number of arguments
function FileUpLoad(...file: string[]) {
  console.log(file);
}
FileUpLoad("one.png", "two.jpg");
//homework whatsapp images

//Explicit Casting
//zbrdsti ksi ki type bnana
let age: unknown;
age = "twenty";
console.log((age as string).toUpperCase()); //API kahin sy data mangaty hain toh

//Structural typing(objects ki types ko compare kren)  1 nominal bh hoti hai ;kn voh humni prhengy
//object ka structure---------properties or datatype bhi same honi chahiye
interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}
let ball: Ball = {
  diameter: 10,
};

let sphere: Sphere = {
  diameter: 10,
};
sphere = ball;
ball = sphere; //because properties or datatypes same hain

interface Tube {
  diameter: number;
  length: number;
}
let tube: Tube = {
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
let myDish: {};
//object bnakr usk varible ko dsry object k varibale ko cpmpare krty hen toh
//STALE OBJECT
//For Example :
//ball= tube

//FRESH OBJECT
//jis jaga jis line pr oject bnaty usy fresh object khty hen OR AGAR FRESH OBJECT HO STALE KI JAGAH TOH ERROR AYEGA RHS MAIN

//SYNCHRONOUS AND ASYNCHRONOUS

//SYNCHRONOUS CODE/programming
console.log(1)
console.log(2)
function add(){
    let res = 5+ 5 
    return res 
}
let res = add()
//console.log(res)
console.log(44)
console.log(res)


//ASYnchronous Programming
//jo cheezen chlny mn time len voh Asynchronous hain
//javascript ny 2 log hire kiye 

//1- call stack (synchronous code callstack mn jata hai)
//2-call back queue 
//website loupe
//- call back functions
// jo function as an argument pass ho voh call back function
//EXAMPLE
function One(callback:()=>void){ //main function // higher order function
    callback()//calling cb function
}
function Two(){//callback function
 console.log("ASYNC FUNCTION")
}
One(Two)
//One(Two()) call back funcction ko as an argument  pass krty huye round bracket nh lgayengy q k round bracket hum upaer lga chuky hen
//set time out homework