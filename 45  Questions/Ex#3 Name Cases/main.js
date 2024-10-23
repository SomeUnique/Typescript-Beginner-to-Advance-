var personname = "shazo";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
