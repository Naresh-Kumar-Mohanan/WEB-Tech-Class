import { str } from "./Storage.js"
console.log(str);


import { obj } from "./Storage.js"
let { name, age, contact } = obj
console.log(name);
console.log(age);
console.log(contact);

console.log("****************************************");


import {course} from "./Storage.js"
let [a,b,c] = course
console.log(a);
console.log(b);
console.log(c);

import {abc} from "./Storage.js";
abc();


















// let ipl = ["csk", "mi", "rcb"];
// // For Array De-Structure Name not Important
// let [dhoni, rohit, viratkoli] = ipl
// console.log(dhoni);
// console.log(rohit);
// console.log(viratkoli);

// console.log("****************************************");

// let foods = ["Biriyani", "Parota", "Chicken Rice"]
// let [a, b, c] = foods
// console.log(a);
// console.log(b);
// console.log(c);

// console.log("****************************************");

// // Structuring
// let product = {
//     name: "iphone",
//     price: 99999999,
//     model: "iphone 70",
//     rating: 10,
//     stock: 1000,
// };

// console.log(product.model);
// console.log(product["model"]);

// // De-Structuring
// // Order is not Important Name Only Must be Same
// let { name, price, model, rating, stock } = product;
// console.log(price);
// console.log(name);
// console.log(stock);

// console.log("****************************************");

// let details = {
//     en_name: "Ajay Kumar",
//     age: 1,
//     contact: 99,
//     loc: "no 11, Kukuruku Santhu, Straight Street"
// }

// let { en_name, age, contact, loc } = details;
// console.log("Address : " + en_name);
// console.log("Age : " + age);
// console.log("Contact : " + contact);
// console.log("loc : " + loc);

// console.log("****************************************");