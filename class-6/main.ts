let email: string = "ali@gmail.com";
let pass: string = "123456";

if (email == "ali@gmail.com" && pass == "123456") {
  console.log("Successfully Loggged In");
} else {
  console.log("Enter Valid Email or Password");
}
// ----HOME WORK----
// password length atleat 6 and first letter should be capital
//  jb TS khd define kr rha type toh inference
let percentage = 49;
if (percentage >= 90) {
  console.log("A+ grade");
} else if (percentage >= 80 && percentage <= 89.99) {
  console.log("A grade");
} else if (percentage >= 70 && percentage <= 79.99) {
  console.log("B grade");
} else if (percentage >= 60 && percentage <= 69.99) {
  console.log("C grade");
} else if (percentage >= 50 && percentage <= 59.99) {
  console.log("D grade");
} else {
  console.log("Fail");
}
// ----Home Work-----
let passwordIs: string = "afrah89889";
let maxlength: number = 10;
let minlength: number = 6;
if (passwordIs.length >= minlength && passwordIs.length <= maxlength) {
  console.log("Password is Valid");
} else {
  console.log("Password is too short or too long");
}
