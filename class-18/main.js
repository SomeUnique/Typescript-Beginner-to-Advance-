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
var ACTemp = /** @class */ (function () {
    function ACTemp(t) {
        this._temp = t;
    }
    Object.defineProperty(ACTemp.prototype, "getTemp", {
        get: function () {
            return this._temp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ACTemp.prototype, "setTemp", {
        set: function (newTemp) {
            console.log(newTemp);
        },
        enumerable: false,
        configurable: true
    });
    return ACTemp;
}());
var temp = new ACTemp(25);
console.log(temp);
console.log(temp.getTemp);
temp.setTemp = 20;
// POLYMORPHISM OR MEATHOD OVERRIDING ek he hota hai
// POLY = many
// MORPHISM = form
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal making sound");
    };
    return Animal;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name, King) {
        var _this = _super.call(this, name) || this;
        _this.isKing = King;
        return _this;
    }
    Lion.prototype.makeSound = function () {
        console.log("lion is Roaring");
    };
    return Lion;
}(Animal));
// instanace of a class ya making object ka mtlb hota hai ke ye dono new kay keyword hain
var lion = new Lion("Sheruu", true);
lion.makeSound();
// ABSTRACTION 
var Laptop = /** @class */ (function () {
    function Laptop(ram, screen) {
        this.ram = ram;
        this.screen = screen;
    }
    Laptop.prototype.powerOn = function () {
        console.log("press button to Power On");
    };
    return Laptop;
}());
// making an object 
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell(ram, screen) {
        return _super.call(this, ram, screen) || this;
    }
    Dell.prototype.SSD = function () {
        console.log("1TB");
    };
    return Dell;
}(Laptop));
var myDell = new Dell("16GB", 24);
console.log(myDell);
