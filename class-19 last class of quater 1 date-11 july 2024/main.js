// TYPE ALIASES
// primitive datatype ko ek name deden
//type ko nickname dedo mtlb type ko koi bhi name dedo
var myName = "Ali jawwad";
var age = 23;
var product = ["bread", "milk", "eggs", "paratha"];
console.log(product);
// ARRAY
var products = ["bread", "milk", "eggs", "paratha"];
console.log(products); // jab bhi array chaheye to index lagyga
// Objects {}jab bhi objects ke baat hoge to curly bracket ayngy
var Product = {
    pName: "bread",
    price: 120,
    isExpired: false
};
console.log(Product.price); // jab bhi object chaheye ho to dot lagyga
var PRoduct = {
    pName: "bread",
    price: 120,
    isExpired: false
};
console.log(PRoduct);
var ProductName = {
    pName: "bread",
    price: 120,
    isExpired: false
};
console.log(PRoduct);
var ProductNames = {
    pName: "bread",
    price: 120,
    info: {
        isExpired: false,
        colour: ["red", "green", "orange"]
    }
};
console.log(ProductNames.info.colour[2]);
// Call back function ke andar dosry function ko arrgument bana kar pass karna
var isFood = true;
var cooking = function () {
    return new Promise(function (resolve, reject) {
        console.log("Food in process");
        if (isFood) {
            setTimeout(function () {
                resolve("Food was Delicious");
            }, 1500);
        }
        else {
            reject("Gas chale gaye");
        }
    });
};
cooking()
    .then(function (res) {
    console.log(res);
    return "Chicken biryani";
})
    .catch(function (err) {
    console.log(err);
})
    .then(function (res) {
    console.log(res);
});
