function Name(): string {
  console.log("Ansharah"); // for developers/human beings
  return "Ansharah"; // for js or ts
}

//////NEW LECTURE/////////
// Arrow functions

let Hello = () => {
  console.log("Hello World!");
};
Hello();
// ---Task---
let isEven = (num: number) => {
  if (num % 2 == 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
};
isEven(11);
isEven(90);
//  CALCULATOR
let Calculator = (num1: number, num2: number, sign: any) => {
  if (sign == "+") {
    console.log(num1 + num2);
  } else if (sign == "-") {
    console.log(num1 - num2);
  } else if (sign == "*") {
    console.log(num1 * num2);
  } else if (sign == "/") {
    console.log(num1 / num2);
  }
};
Calculator(1, 2, "+");
Calculator(0.9999, 20.06, "/");

//  Scopes Of Variables
// gloabal = hr jaga use hoty
//  block scope = kahin na kahin block hojaty outside axis nhh hn example {}/scopes
//sxample of block scope 
//  const HamzaSession = () => {
//     let nameOf = "Hamzah"
//     console.log(name)
//  }
//  console.log(name)

let Army = "army"



let twoAreas = () => {
    console.log(Army)
    let police = "police"
    console.log(police)
}
//  console.log(police)

twoAreas()

//  javascript apny scope k variable ko prhta hai phly