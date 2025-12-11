export default function anyName() {
    console.log("I am From Storage default Export");
}

let obj = {
    name: "Ajay",
    age: 10,
    contact: 123456,
    loc: "Chennai"
}

let { age, ...other } = obj;
console.log(age);
console.log(other);

let info = {
    name: "kalai",
    wifeof: "Avan Pondati",
    childof: "His Mother",
    deathof: "girls"
}

let { name, ...remain } = info;
console.log(name);
console.log(remain);


let arr = [1, 2, 3, 4, 5, 6]
let [a, ...b] = arr;

console.log(a);
console.log(b);


function aa(...para) {
    console.log(para);
};
aa(10, 20, 30, 40, 50)