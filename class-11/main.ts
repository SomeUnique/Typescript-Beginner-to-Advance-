// typescript feature "type alias"

type IrfanFriend = number
type IrfanOffice = number

const IrfanOffice:IrfanOffice = 11124462200
const IrfanFriend:IrfanFriend = 92000054321
console.log(IrfanOffice);
console.log(IrfanFriend);

type humanName= string
type animalName = string

const humanName:humanName = "ratba"
const animalName:animalName = "markhor"
console.log(humanName);
console.log(animalName);

type Human=string[]
const human :Human=["waqas","ali","nehal"]
console.log(human);

/////////  feature 2 = type union     //////////////

let rollno:number| string = 222
console.log(rollno);
rollno = "2468912"
console.log(rollno);

let employenumber:number| string |number[] |string[] = 234987
console.log(employenumber);
employenumber = "Ramsha"
console.log(employenumber);
employenumber = ["1235","09836","975644"];
console.log(employenumber);
employenumber = ["safa","mahnam","namal"];
console.log(employenumber);

/////// feature typr literals (jab datatype or uske value dono pata ho)    //////

let size:"small" |"medium" |"large" = "medium";

size="large"
size="small"
size="medium"

console.log(size);

let trafficlight:"red" | "yellow" |"green" = "red";

trafficlight ="green"
trafficlight = "red"
trafficlight ="yellow"

console.log(trafficlight);

let username :"login" | "logout" = "login";
username  = 'login'
console.log(username);

//////////// Objescts /////////
type Mycar ={ 
    make:string,
    model:number,
    variant:string,
    start:()=>string,
    maxspeed: ()=> void,
    isAc :()=>boolean
}
const car:Mycar={
    make:"toyota",
    model:2023,
    variant:"1800cc",
    start: () => {
        return "My car is started"
    },
    maxspeed: () =>{
        console.log("maxspeed is 200")
    },
    isAc:()=> true
}
console.log(car);
console.log(car.maxspeed());

/////// NESTED OBJECTS  /////////
type slip={
    customername:string,
    products:{
    productName:string,
    price:number,
    istasty: ()=> string
}
}
const slip = {
    customername: "ali",
    products : {
        productName:"cake",
        price:2500,
        istasty: ()=> "kha kar bataty hoon"
    }
}
console.log(slip.products.productName);
