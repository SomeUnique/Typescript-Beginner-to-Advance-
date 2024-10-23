// SYNCHRONOUS PROGRAMMING wo hota hai jo sequence main chal raha hai or isko chalny main koi delay nhi atta
// 1) CALL STACK wo hota hai jo 
// 2) CALLBACK QUEUE
// A SYNCHRONOUS PROGRAMMING wo hota hai jo delay hokar chalta hai

// 1) CALLBACK FUNCTION ye wo function hota hai jo apny andar ek or argument accept kar raha ho


// SET TIMEOUT ye wo hota hai jis ko chalyny main kuch timer diya jaye
function One(cb: ()=> void){
    setTimeout(()=>{
        console.log("After 2 sec")
    }, 2000);
}// 1000 milisecond = 1 sec
setTimeout(()=>{
    console.log("After 2 sec");
},2000);
console.log(1);
console.log(2);

let product =[
    {name: "Dahi", price: 50},
    {name: "Dhaniya",price: 20},
    {name: "Bread",price: 120},
];
function Onne(cb: ()=> void){
    console.log("Fetching....")
    setTimeout(()=>{
        cb()
    }, 2500);
}
// call back
function Two(){
    console.log(product);
}
Onne(Two);

// PROMISES (RESOLVE find -> (.then) after Successfull or agar REJECTajaye to to ye (.catch) ko finf karega both are functions)(RESOLVE means Successful response and REJECT means Error handling)
const MyFunc = () => {
    return new Promise((resolve , reject) => {
            resolve("Data Fetched")
    });
};
MyFunc()
.then((res)=>{
    console.log(res)
});

const MyFunction  = () => {
    return new Promise((resolve , reject) => {
            reject("Error")
    });
};
MyFunction()
.catch((err)=>{
    console.log("Failed");
})

// EXAMPLES

let isVictory = false
const Cricket =()=>{
    return new Promise 
    ((resolve, reject)=>{
    if(isVictory ){
        setTimeout(()=>{
    resolve("we won");
        }, 1500);
    }
    else{
        console.log("Match in Progress ........");
        setTimeout(()=>{
            reject("Tum sy na ho paye ga");
        }, 1500);
    }
    });
};
Cricket()
.then((response)=>{
    console.log(response);
})
.catch((resto)=>{
    console.log(resto);
})

// CHAIN ye tab use hota hai jab apka code successfully resolve hojaye or uske andar mazid ek sy ziyda .then and .catch lagany ke zarorat ho to 
let isVictorye = false;
const Crickets =()=>{
    return new Promise 
    ((resolve, reject)=>{
    if(isVictorye){
        console.log("Match in Progress ........");
        setTimeout(()=>{
    resolve("we won");
        }, 1500);
    }
    else{
        reject("Tum sy na ho paye ga");
        };
    
    });
};
Crickets()
.then((response)=>{
   console.log(response);
})
.catch((response)=>{
   console.log(response);
});
Crickets()
.then((response1)=>{
console.log(response1)
return "MOM babar"
}).then((response2)=>{
console.log("second then",response2)
})