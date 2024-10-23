"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var fuel;
(function (fuel) {
    fuel["petrol"] = "Rs 280";
    fuel["Diesel"] = "Rs 380";
})(fuel || (fuel = {}));
console.log(fuel.petrol);
console.log(fuel.Diesel);
//const enum main hum indexing nhi karsakty
// tapples tab use hoga jab bhi humhay data sequence main chaheye ho 
var studentInfo;
studentInfo = ["ali", 123, true];
var studentInfo1;
studentInfo1 = [
    ["ali", 123, true],
    ["hamza", 246, false],
    // [579, 234, true]// error dyga q ke ye sequence main nhi hai
];
//  MODULES humary code ko reuseable banaty hain or organize bhi karta hai 
function add(a, b) {
    return a + b;
}
exports.add = add;
// union mtlb jab 1 variable main do type assign karna
// NARROWING : mtlb type ko precise karty hain or deekhty hn type konsy aye hai
var age;
age = 23.9900987654321;
if (typeof age == "number") {
    console.log(age.toFixed(2));
}
else {
    console.log("This is string");
}
var age1;
age1 = 23.9900987654321;
if (typeof age1 == "number") {
    console.log(age + 5);
}
else {
    console.log("This is string");
}
var age2;
age2 = "twenty one";
if (typeof age == "number") {
    console.log(Math.round(age));
}
else {
    console.log(age2.toUpperCase());
}
// any:is main koi bhi type assign karsakty hain error nhi ayega 
var firstname = "ali";
firstname = 45;
firstname = ['hello'];
firstname = function () { return true; };
// UNKNOW: agar kisi variable bhi variable ke type nhi pata ho to any ya unknown dono laga sakty hain
var firstnames = "ali";
firstnames = 45;
firstnames = ['hello'];
firstnames = function () { return true; };
// agar do variable ke type unknow ho to wo apass main compairable hoty hain
var val;
var val1 = val;
var val2 = val; // type any bhi compairable hote hai type unknow ke sath 
//let val3:unknown
//let firstnameses:string=val // error
//let aage:number=val //error
//NEVER : tab use hoga jab humhay pass koi special function ho jis sy humhay koi return nhi chaheye siwaye ERROR ke
function _Error() {
    throw new Error;
}
_Error();
// REST OPERATORS/ PARAMETERS: jab use hoga jab number of argument nhi pata ho ya indefinate fuction ho
function wallet(colour) {
    var argument = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argument[_i - 1] = arguments[_i];
    }
    console.log.apply(console, __spreadArray([colour], argument, false));
}
wallet("red", "nic", "currency", "atm card");
