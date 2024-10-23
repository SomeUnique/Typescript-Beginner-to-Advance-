// let KE = false;
// let UPS = "UPS on hai";
// let bulb = KE || UPS;
// console.log(bulb);
// let bill = false
// let light = "light on hai"
// let UPS =" UPS on hai"
// let Bulb = bill && light || UPS
// console.log(Bulb)

//  Egg Butter Salt
// console.log(1 + 2 + 1.5);
// Function Recipie
// function Halffrys() {
//   console.log(1 + 2 + 1.5);
// }
// Halffrys();
// Halffrys();
function Addition(num1: number, num2: number) {
  console.log(num2 + num1);
}
Addition(5, 2);
Addition(10, 11);
function Halffrys(Salt:number=1,butter:number=2){
    let cooked = 1 + Salt + butter
    return cooked
}
let table1 = Halffrys(1.5,2)
console.log(table1)
let table2 = Halffrys(2,3)
console.log(table2)

// REVISION
let age = 22;
let expiry = 5 // 2 years
if (age >= 18 && expiry ==10){
  console.log("I have made my CNIC but it is expired");
}
else{
  console.log("Not valid for CNIC");
}