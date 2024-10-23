enum fuel {
    petrol = "Rs 280",
    Diesel = "Rs 380"
}
console.log(fuel.petrol);
console.log(fuel.Diesel);

//const enum main hum indexing nhi karsakty

// tapples tab use hoga jab bhi humhay data sequence main chaheye ho 
let studentInfo: [string, number, boolean];
studentInfo = ["ali", 123, true];

let studentInfo1: [string, number, boolean][];
studentInfo1 = [
    ["ali", 123, true],
    ["hamza", 246, false],
   // [579, 234, true]// error dyga q ke ye sequence main nhi hai
];

//  MODULES humary code ko reuseable banaty hain or organize bhi karta hai 
export function add(a: number, b: number) { // export mtlb fuction ko dosri file main bhi use karsakyn
    return a + b
}

export type product = string[]

// union mtlb jab 1 variable main do type assign karna
// NARROWING : mtlb type ko precise karty hain or deekhty hn type konsy aye hai

let age: number| string[]
age = 23.9900987654321 
if(typeof age=="number"){
    console.log(age.toFixed(2))
}
else{
    console.log("This is string");
}


let age1: number| string[]
age1 = 23.9900987654321 
if(typeof age1=="number"){
    console.log(age+5)
}
else{
    console.log("This is string");
}

let age2: number| string
age2 = "twenty one"
if(typeof age =="number"){
    console.log(Math.round(age))
}
else{
    console.log(age2.toUpperCase())
}

// any:is main koi bhi type assign karsakty hain error nhi ayega 

let firstname:any = "ali"
firstname= 45
firstname=['hello']
firstname=()=> true

// UNKNOW: agar kisi variable bhi variable ke type nhi pata ho to any ya unknown dono laga sakty hain

let firstnames:unknown = "ali"
firstnames= 45
firstnames=['hello']
firstnames=()=> true

// agar do variable ke type unknow ho to wo apass main compairable hoty hain
let val:unknown
let val1:unknown = val 
let val2:any = val // type any bhi compairable hote hai type unknow ke sath 

//let val3:unknown
//let firstnameses:string=val // error
//let aage:number=val //error

//NEVER : tab use hoga jab humhay pass koi special function ho jis sy humhay koi return nhi chaheye siwaye ERROR ke

function _Error():never{
    throw new Error
}
_Error()

// REST OPERATORS/ PARAMETERS: jab use hoga jab number of argument nhi pata ho ya indefinate fuction ho
function wallet(colour:string, ...argument: string[]){
             console.log(colour, ...argument);
}
wallet("red", "nic", "currency", "atm card");
