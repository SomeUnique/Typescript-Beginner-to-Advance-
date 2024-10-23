function GetCard(timing: string, rollNumber: number) {
  console.log(`${timing} ${rollNumber}`);
}
GetCard("7 to 10 pm", 89);
GetCard("9 to 12", 9090);
GetCard("2 to 5", 456);
// DEFAULT PARAMETERS
function Marriage(choice: string = "Ammi ki choice") {
  console.log(choice);
}
Marriage(); // default
Marriage("meri choice"); //// user ki value ko priority milegi

function meal(choice: string = "sabzi") {
  console.log(choice);
}
meal();
meal("korma");

function add(d1: number = 5, d2: number = 3) {
  console.log(d1 + d2);
}
add();
add(2, 5);
add(2);
add(undefined, 6);

function day(name: string) {
  //   console.log(name);
  return name;
}
console.log(day("thursday"));

// function month(name: string) {
//   console.log("march");
// }
// console.log(month("march"));

function month(name: string) {
  return name;
}
console.log(month("march"));

function fullName(name: string): string {
  return name;
}
console.log(fullName("Ali"));

function days(): boolean {
  return false;
}
// console.log(days())
let ans = days();
console.log(ans);

function addition(num1 , num2):number{
 let number = num1 + num2
 return number
}
console.log(addition(1,2))

function multiply():number{
    let number = num1 + num2
    return number
   }
   console.log(addition(1,2))