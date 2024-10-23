// Comparision Operators
let num1: number = 10;
let num2: number = 15;
console.log(num1 == num2);
// (==) comparision of values
let Name: string = "apple";
let Name2: string = "apple";
console.log(Name == Name2);
// ------------------
// let a: boolean = true;
// let b: string = "true";
// console.log(a==b); (because datatypes are diifer)

let number1: number = 10;
let number2: number = 9;
let number3 = number1 < number2;
console.log(number3);
// -----------------------
console.log(number1 != number2);
// ----------------------------------

// Logicl Operators
// 1)  && operator
let number4: number = 9;
let number5: number = 8;
console.log(number4 > number5 && number5 < number4);
//    && means l.h.s and r.h.s are equal , both conditions are must be equal
//  2) || operator (or operator)

console.log(number4 > number5 || number4 > number5);
//  if one condition is true it will give true

// 3) Nor operator
console.log(!(number4 > number5));
//-------------------------------

//  If and Else statements
let age = 20;
if (age >= 18) {
  console.log("you are eligible for National ID card");
} else {
  console.log("you are not eligible!");
}
