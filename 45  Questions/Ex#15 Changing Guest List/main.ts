let guestlist=["danish","shazia","nehal","ali"];

let dontcome= guestlist[3];

console.log(dontcome,"nhi asakta");

guestlist.splice(3,3,"Amir");

guestlist.forEach(guest => console.log (`Salam ${guest}, I would like to invite you to dinner with me?`));