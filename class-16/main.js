// OBJECT ORIENTED PROGRAMMING: ye wo hota hai jo jis main har cheeze object main hoty hai ye taqriban har language main paye jate hai 
// is main do main cheezin hoty hain 1-class or 2- object
// class is like a map for an object  or uss class main hum object ke barry main bataty hain ke is ka method, functions or wo deekhyn ge kesy
// class (varaiables, method/functions) sy mil kar banty hain
// OBJECT 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class ka name hamesha capital hoga
var Cars = /** @class */ (function () {
    function Cars() {
        // variable
        this.name = "Civic";
        this.make = "Honda";
        this.year = 2024;
    }
    return Cars;
}());
// new ka keyword ek object create karyega
var mycar = new Cars();
console.log(mycar);
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Shazia";
        this.age = 40;
        this.standard = "High Class";
    }
    return Person;
}());
//creating an object 
// agar koi specific category ke info inkalna ho to (.) Dot laga kar uss category ka name daldo 
var person = new Person();
console.log(person);
//STATIC means same cheez
//DYNAMIC means different cheezein 
var Firstperson = /** @class */ (function () {
    //age:number
    // constructor class ka function hai jis main parameters pass karsakty hain
    function Firstperson(n) {
        this.name = n; // (this .) refer karta hai class property main sy kisi nhi categorry ko jo hum dyn 
    }
    return Firstperson;
}());
var fp = new Firstperson("shazia");
var fp2 = new Firstperson("Danish");
console.log(fp, fp2);
var Persons = /** @class */ (function () {
    function Persons(n, a, em) {
        this.name = n;
        this.age = a;
        this.Email = em;
    }
    Persons.prototype.getDetails = function () {
        return " My name is ".concat(this.name, " and my age is ").concat(this.age);
    };
    Persons.prototype.favfood = function (food) {
        return "My fav food is ".concat(food);
    };
    return Persons;
}());
var p = new Persons("Shazia", 40, "shazo@gmail.com");
console.log(p);
console.log(p.getDetails());
console.log(p.favfood("Hotpot"));
var Personal = /** @class */ (function () {
    function Personal(n, a) {
        this.name = n;
        this.age = a;
    }
    Personal.prototype.getDetail = function () {
        return " My name is ".concat(this.name, " nad my age is ").concat(this.age);
    };
    Personal.prototype.favfood = function (food) {
        return "My fav  food is ".concat(food);
    };
    return Personal;
}());
var P = new Personal("Shazo", 40);
console.log(P.favfood("Mango"));
// INHERITANCE wo hota hai jo 
// iss main 1-PARENT/BASE/SUPER CLASS 2-CHILD/DERIVED CLASS
// Child class sy Parent class main jaty hain
// iska faida ye hota hai he bar bar cheezein repeat nhi karny partyn
// PARENT CLASS
var Vehicle = /** @class */ (function () {
    function Vehicle(e, t, n) {
        this.engine = e;
        this.tyres = t;
        this.name = n;
    }
    return Vehicle;
}());
// CHILD CLASS
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(engine, tyres, name) {
        return _super.call(this, engine, tyres, name) || this; // super ka function refernce dy rahy hain ke ye de hui teen cheezin parent class sy arahin hain
    }
    return Car;
}(Vehicle));
var car = new Car("2800", 4, "lamborgani");
console.log(car);
// CHILD CLASS 2
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(engine, tyres, name) {
        return _super.call(this, engine, tyres, name) || this;
    }
    return Motorbike;
}(Vehicle));
var motorbike = new Motorbike("70", 2, "Yamaha");
console.log(motorbike);
