// TYPE ALIASES
// primitive datatype ko ek name deden
//type ko nickname dedo mtlb type ko koi bhi name dedo

type FullName = string
type Age = number
let myName:FullName = "Ali jawwad"
let age:Age =23
type product = string
let product =["bread","milk","eggs","paratha"];
console.log(product);


// ARRAY
 let products =["bread","milk","eggs","paratha"];
 console.log(products);// jab bhi array chaheye to index lagyga

// Objects {}jab bhi objects ke baat hoge to curly bracket ayngy
 let Product = {
    pName: "bread",
    price: 120,
    isExpired: false
 }
 console.log(Product.price);// jab bhi object chaheye ho to dot lagyga

 // type alies main or interface main bas ye difference hai ke type allies her primitive data type ke liye use hota 
 // or interface object ke sath use hota hai
 // or similarity ye hai ke dono object ka sturture batany ke liy use hota hai
 
 type pName = {
    pName: string,
    price: number,
    isExpired: boolean
 }
 let PRoduct = {
    pName: "bread",
    price: 120,
    isExpired: false
 }
 console.log(PRoduct);

 interface ProductName {
    pName: string,
    price: number,
    isExpired: boolean
 }
 let ProductName = {
    pName: "bread",
    price: 120,
    isExpired: false
 }
 console.log(PRoduct);
 
 // nested object ya nested array wo hota hai jo object ke andar ek object ya array ke andar ek array banalo
 interface ProductNames {
    pName: string,
    price: number,
    info:{
        isExpired: boolean
        colour: string
    }
 }
 let ProductNames = {
    pName: "bread",
    price: 120,
    info:{
        isExpired: false,
        colour: ["red","green", "orange"]
    }
 }
 console.log(ProductNames.info.colour [2]);

 // Call back function ke andar dosry function ko arrgument bana kar pass karna
 let isFood = true
 const cooking = ()=> {
    return new Promise((resolve, reject) =>{
        console.log("Food in process");
        if(isFood){
            setTimeout(()=>{
          resolve("Food was Delicious")
        },1500)
        }
        else{
            reject("Gas chale gaye")
        }

    })
 }
 cooking ()
 .then((res)=>{
    console.log(res);
    return "Chicken biryani"
 })
 .catch((err)=>{
    console.log(err);
 })
 .then((res)=>{
    console.log(res);
 })

 // Asynchronis
 async function getResult (){
    try{
    const res = await cooking()
    console.log(res);
    }
    catch(err){
        console.log("catch",err);
    }
 }
 getResult()

 // TUPLES hoty hain arrays lakin jab tuples attay hain to wo sequenceal data + fix number haota hain
 var tuples:[number,string,boolean,string]=[1,"boob",false,"hello"];

 //enumns jab apke pass apko phey sy he values pata ho mtlb set of predefined values
 // const enum ko hum value sy excess karty hain laikn enum her value per chalty hain

 let  rollNo:string|number
 rollNo=45// baqi repostary sy karliya 
 
 