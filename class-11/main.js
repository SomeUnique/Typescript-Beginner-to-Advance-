// typescript feature "type alias"
var IrfanOffice = 11124462200;
var IrfanFriend = 92000054321;
console.log(IrfanOffice);
console.log(IrfanFriend);
var humanName = "ratba";
var animalName = "markhor";
console.log(humanName);
console.log(animalName);
var human = ["waqas", "ali", "nehal"];
console.log(human);
/////////  feature 2 = type union     //////////////
var rollno = 222;
console.log(rollno);
rollno = "2468912";
console.log(rollno);
var employenumber = 234987;
console.log(employenumber);
employenumber = "Ramsha";
console.log(employenumber);
employenumber = ["1235", "09836", "975644"];
console.log(employenumber);
employenumber = ["safa", "mahnam", "namal"];
console.log(employenumber);
/////// feature typr literals (jab datatype or uske value dono pata ho)    //////
var size = "medium";
size = "large";
size = "small";
size = "medium";
console.log(size);
var trafficlight = "red";
trafficlight = "green";
trafficlight = "red";
trafficlight = "yellow";
console.log(trafficlight);
var username = "login";
username = 'login';
console.log(username);
var car = {
    make: "toyota",
    model: 2023,
    variant: "1800cc",
    start: function () {
        return "My car is started";
    },
    maxspeed: function () {
        console.log("maxspeed is 200");
    },
    isAc: function () { return true; }
};
console.log(car);
console.log(car.maxspeed());
var slip = {
    customername: "ali",
    products: {
        productName: "cake",
        price: 2500,
        istasty: function () { return "kha kar bataty hoon"; }
    }
};
console.log(slip.products.productName);
