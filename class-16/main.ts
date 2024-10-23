// OBJECT ORIENTED PROGRAMMING: ye wo hota hai jo jis main har cheeze object main hoty hai ye taqriban har language main paye jate hai 
// is main do main cheezin hoty hain 1-class or 2- object
// class is like a map for an object  or uss class main hum object ke barry main bataty hain ke is ka method, functions or wo deekhyn ge kesy
// class (varaiables, method/functions) sy mil kar banty hain
// OBJECT 

// class ka name hamesha capital hoga
class Cars {
    // variable
    name:string ="Civic"
    make:string ="Honda"
    year:number = 2024
} 

// new ka keyword ek object create karyega
let mycar = new Cars()
console.log(mycar);

class Person {
    name:string ="Shazia"
    age:number = 40
    standard:string ="High Class"
}
//creating an object 
// agar koi specific category ke info inkalna ho to (.) Dot laga kar uss category ka name daldo 
let person = new Person()
console.log(person);

//STATIC means same cheez
//DYNAMIC means different cheezein 

class Firstperson {
    // class propertites
    name:string
    //age:number

    // constructor class ka function hai jis main parameters pass karsakty hain
    constructor(n:string){ 
        this.name= n // (this .) refer karta hai class property main sy kisi nhi categorry ko jo hum dyn 
    }
}

let fp = new Firstperson("shazia")
let fp2 = new Firstperson("Danish")

console.log(fp,fp2);



class Persons {
    // class propertites
    name:string
    age:number
    Email:string|number

    constructor(n:string, a:number, em: string|number){
        this.name = n
        this.age = a
        this.Email = em 
    }

    getDetails():string{
        return` My name is ${this.name} and my age is ${this.age}`
    }

    favfood(food:string): string{
        return `My fav food is ${food}`
    }

}

let p = new Persons("Shazia", 40, "shazo@gmail.com")
console.log(p);
console.log(p.getDetails());
console.log(p.favfood("Hotpot"));

class Personal {
    //class properties
    name:string
    age:number

    constructor(n:string, a:number){
        this.name=n
        this.age=a
    }

    getDetail():string{
        return` My name is ${this.name} nad my age is ${this.age}` 
    }

    favfood(food:string):string{
        return`My fav  food is ${food}`
    }
}
let P =new Personal("Shazo",40)
console.log(P.favfood("Mango"));

// INHERITANCE wo hota hai jo 
// iss main 1-PARENT/BASE/SUPER CLASS 2-CHILD/DERIVED CLASS
// Child class sy Parent class main jaty hain
// iska faida ye hota hai he bar bar cheezein repeat nhi karny partyn


// PARENT CLASS
class Vehicle{
    engine:string
    tyres:number
    name:string

    constructor(e:string, t:number, n:string){
        this.engine = e
        this.tyres = t
        this.name = n
    }
}

// CHILD CLASS
class Car extends Vehicle{ //extend ye batayege kay iss child class main ab parent class bhi shamil hai
    constructor(engine:string, tyres:number, name:string){
    super(engine,tyres,name)// super ka function refernce dy rahy hain ke ye de hui teen cheezin parent class sy arahin hain
 }   
}

let car = new Car("2800", 4 ,"lamborgani")
console.log(car);

// CHILD CLASS 2
class Motorbike extends Vehicle{
    constructor(engine:string, tyres:number, name:string){
    super(engine,tyres,name)
 }   
}

let motorbike = new Motorbike("70", 2 ,"Yamaha")
console.log(motorbike);