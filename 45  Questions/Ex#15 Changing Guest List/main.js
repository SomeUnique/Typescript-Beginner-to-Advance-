var guestlist = ["danish", "shazia", "nehal", "ali"];
var dontcome = guestlist[3];
console.log(dontcome, "nhi asakta");
guestlist.splice(3, 3, "Amir");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", I would like to invite you to dinner with me?")); });
