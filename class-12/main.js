var ClassRoom = {
    teachername: "Ali",
    experience: 4,
    rollno: 12345,
    studentname: "Owais"
};
console.log(ClassRoom);
// ([][])double square bracket ka mtlb hai ke is main array ke andar array hai
var fruits = [
    ["mango", "peach"],
    ["watermelon", "banana"]
];
// number in array  
var one = [
    45, 65,
    "ali", "Jawwad"
];
var nested = [
    [45, 65],
    ["ali", "Jawwad"]
];
// LOOPS jab apko koi kam bar bar karwana ho ya koi bhi cyclr/repetation karwany ho
// 1.FOR LOOP: jab koi asa senario ajaye jis main humay E nding Point pata ho to wahn For Loop chalyga
// method : 
// 1. three experession
// 2. starting point
// 3. ending point
// 4. step to reach ending point
for (var i = 10; i <= 25; i = i + 5) {
    console.log(i);
}
for (var i = 10; i <= 25; i = i * 2) {
    console.log(i);
}
for (var i = 5; i >= 0; i--) {
    console.log(i);
}
for (var a_1 = 5; a_1 <= 15; a_1++) {
    console.log("".concat(a_1, "\"kacha papar Pakka papar"));
}
// WHILE LOOP: jab koi asa senario aja ye jis main Ending point pata he nhi ho to wahn per while loop use hoga
//Method:
// 1. outside loop var decelare
// 2. within round bracket
// 3. step to reach ending point
var a = 1; // STARTING POINT
while (a <= 10) { //ENDING POINT
    console.log(a);
    a++;
}
var b = 10; // STARTING POINT
while (b >= 1) { //ENDING POINT
    console.log(b);
    b--;
}
