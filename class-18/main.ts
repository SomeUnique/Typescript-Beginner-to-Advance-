class ACTemp {
    private _temp:number
    constructor(t:number){
        this._temp=t
      }
        get getTemp(){
            return this._temp
        }
    set setTemp(newTemp:number){
        console.log(newTemp);
    }
}

const temp = new ACTemp(25)
console.log(temp);
console.log(temp.getTemp);
temp.setTemp = 20

// POLYMORPHISM OR MEATHOD OVERRIDING ek he hota hai
// POLY = many
// MORPHISM = form

class Animal {
    public name: string
    constructor(n:string){
        this.name= n;
    }
    makeSound(){
        console.log("Animal making sound");
    }
}
class Lion extends Animal{
    isKing:boolean
    constructor(name:string, King:boolean){
        super(name)
        this.isKing = King
    }
    makeSound(): void {
        console.log("lion is Roaring")
    }
}
// instanace of a class ya making object ka mtlb hota hai ke ye dono new kay keyword hain
const lion = new Lion ("Sheruu", true)
lion.makeSound();

// ABSTRACTION 

abstract class Laptop {
    ram: string
    screen: number
    constructor(ram:string , screen: number){
        this.ram=ram
        this.screen= screen
    }
    abstract SSD():void
    powerOn(){
        console.log("press button to Power On");
    }
}
// making an object 
class Dell extends Laptop{
    constructor(ram:string, screen:number){
        super(ram, screen)
    }
    SSD(): void {
        console.log("1TB");
    }
}
const myDell = new Dell("16GB", 24)
console.log(myDell);


// TERNARY OPERATOS
//1) DEFINE CONDITION
//2) IF STATEMENT
//3) ELSE STATEMENT

let results = 50< 6 ? true: false
console.log(results);

let teacher ="male"
let result = teacher == "male"? "Sir" :"Miss"
console.log(result);

// REVISION (UNDEFINED)=> iska mtlb phely value nhi thy future main agye 
// Null=> value intentionaly nhi hai 
let a 
console.log(a);
a=5
console.log(a);

let b=null
console.log(b);

function Hello(name:string):string{
return `good Evening ${name}`
}
const res = Hello ("Shazo")
console.log(res);