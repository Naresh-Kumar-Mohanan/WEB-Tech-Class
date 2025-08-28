console.log("External JavaScript");

// ! How to Declare Variable

// let, var, const

// ! let Keyword

let sname
sname = "Naresh"
console.log(sname)

let a = 10
console.log(a);

//  ! let keyword re-declare is not possible
// let a = 25


// ! var Keyword

var isMarried

isMarried = "I am var Initiazied"
console.log(isMarried);


//  ! var keyword re-declare is possible 
var isMarried = true
console.log(isMarried);

// ! const

const phNumber = 9843718774
console.log(phNumber);
/*
// ! const keyword is Like Finalized Value. Cannot be Change the Value
// phNumber = 48251;
// console.log(phNumber);
*/

// ! Data Types
// 1. Primitive   |   2. Non-Primitive
// ! 1.Primitive
// todo: Number, boolean, String, Undefined, Null, Bigint

// ? 1. Number
// Number and Decimal Numbers Everything will be Number Type data Only
let phno = 9843718774
//todo: typeof Operator is used to Know the data type
console.log(typeof phno);

// ? 2.boolean
// This Will be True of False Only
let student = false
console.log(student);
console.log(typeof student);

// ? 3.String 
// String Can be (' '," ",` `) - There will not Char and String suprate data
let city = 'chennai'
let state = "Tamilnadu"
let country = `India`
console.log(city + "\n" + state + "\n" + country);

// ? 4.Undefined
// Variable Declare But Not Initialize This Error will be Visible
let courseName
// When There is Not Initilized The Variable and typeof Cannot Useable
console.log(courseName);
console.log(typeof courseName);

// ? 5.Null
// Null is a Object Data Type
let salary = null
console.log(salary);
console.log(typeof salary);

// ? 6.Bigint
let largeNumber = 4n
console.log(largeNumber);
console.log(typeof largeNumber);

// ! 2.Non-Primitive 
// todo: array, function, object

// ? 1. array
let arr = ["Naresh", 23, true]
console.log(arr);

// ? 2.function
function add() {
    console.log("I am Add Function");
}

add() // Calling the Function is Must

// ? 3.Object
let emp = {
    ename: "Naresh",
    eid: 45,
    loc: "chennai",
    salary: 25000
}

console.log(emp);