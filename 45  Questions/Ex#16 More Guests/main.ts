let guestlist = ["danish","shazia","nehal","ali"];

let dontcome = guestlist [3];
console.log(dontcome, "nhi asakty");

guestlist.splice(3, 3,"Amirr");

console.log("Good News we have found a bigger table for dinner");

guestlist.unshift ("ali");
guestlist.push("areeba");

let middleindex:number = Math.floor(guestlist.length/2);

guestlist.splice(middleindex, 0, "usama");

console.log("updated list of our guests");

guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));