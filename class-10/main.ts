let fruits =["Apple","Orange"]
console.log(fruits);

let fruits1 =["Apple","Orange","mango","berry"];
console.log(fruits1);

let fruits2 =["Apple","Orange","mango","berry"];
console.log(fruits2[0]);
console.log(fruits2[1]);
console.log(fruits2[2]);
console.log(fruits2[3]);

let Name = ["hasan","Hadia","Sumaira","Anabia"];
console.log(Name);

let Name1 = ["hasan","Hadia","Sumaira","Anabia"];
console.log(Name1[0]);
console.log(Name1[1]);
console.log(Name1[2]);
console.log(Name1[3]);

let fruits3:string[] =["Apple","Orange","mango","berry"];
fruits3[1]="Banana"
console.log(fruits3);

///       Array built in function "POP" ///

let fruits4:string[] =["Apple","Orange","mango","berry"];
console.log(fruits4)
fruits4.pop()
console.log(fruits4);

///  Aray buit in function "Push"   ///
let fruits5:string[] =["Apple","Orange","mango","berry"];
console.log(fruits5);
fruits5.push("Watermelon")
console.log(fruits5);

///   using POP and PUSH together
let fruits6:string[] =["Apple","Orange","mango","berry"];
console.log(fruits6);
fruits6.pop()
fruits6.push("Watermelon")
console.log(fruits6);

// shift=remove 1st element and unshift= add in starting function ///
let fruito:string[] =["Apple","Orange","mango","berry"];
fruito.unshift("apple")
console.log(fruito);

let fruitos:string[] =["Apple","Orange","mango","berry"];
fruitos.shift()
console.log(fruitos);

let fruitos0 =["Apple","Orange","mango","berry",["moli", "pyaz","began"]];
console.log(fruitos0[4]);
console.log(fruitos0[4][2]);

// slice function //
let fruitoes=["Apple","Orange","mango","berry"];
let ans = fruitoes.slice( 1 , 3)
console.log(ans);

 /// splice function = use to add or remove array element from between ///
 let fruites=["Apple","Orange","mango","berry","kiwi"];
 let ans1= fruites.splice(1 , 2, "cherry","stawberry")
 console.log(fruites);

 let fruitses=["Apple","Orange","mango","berry","kiwi"];
let ans2= fruitses.splice(1,0)
console.log(fruitses);

let cartoon = ["oagy","cockroach","micy mouse","iron man","wonder women"];
let ans3=cartoon.splice(1 , 3, "popye","jony bravo")
console.log(cartoon);

let food = ["bueger","pizza","sandwich","rool","sharwarma"];
let ans4 = food.splice(1,4,"pasta","dount")
console.log(food);

let obj = {
    fruitName:"apple",
    price:200,
    season:"summer"
}
console.log(obj);
console.log(obj.fruitName);
console.log(obj.price);
console.log(obj.season);

const student =[
    {
        name:"ali",
        rollnumber:12345,
        timming:"7-10"
    }
]
console.log(student[0]);