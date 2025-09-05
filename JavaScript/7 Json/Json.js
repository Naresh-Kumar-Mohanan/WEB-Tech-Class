let person = {
    p_Name: "Naresh",
    age: 23,
    city: "Chennai",
    isMarried: false
}

console.log(person);

/* 
JSOn (JavacScript Object Notation) is a lightweight data-interchange format.
That is easy for humans and write, and easy for machines to parse and generate.
// Advantages of json:
    * Human-Readable:
    JSON's Structure is easy for developers to understand and write.

    * Lightweight:
    JSON's is a minimal formate that reduces the size of the data being transmitted.

    * Language-Indipendent:
    JSON can br used with many programming languages, Including JavaScriprt, Python, Ruby, Java, Etc.
*/


// This Method is used to convert any javascript object into json.
// ! JSON.stringify()
let jsonData = JSON.stringify(person)
console.log(jsonData);
// console.log(typeof jsonData);


// This Method is used to convert any json into javaScript Object.
// ! JSON.parse()
let jsonData1 = JSON.parse(jsonData)
console.log(jsonData1);



let emp = [
    {
        eid: 1,
        ename: "Ajay"
    },
    {
        eid: 2,
        ename: "Lokesh"
    },
    {
        eid: 3,
        ename: "Guru"
    },
    {
        eid: 4,
        ename: "Hari"
    },
    {
        eid: 5,
        ename: "Kalai"
    },
    {
        eid: 6,
        ename: "Sowdharyan"
    },
]

console.log(emp);
emp.map((element) => {
    console.log(element.ename);
})


// ! Object Distructure
let student = {
    sname: "Ajaya",
    age: 99,
    isStudent: false,
    Skills: ["Nothing 1", "Nothing 2", "Nothing 3"]
}

let { sname, age, isStudent, skills } = student;
console.log();


// ! Rest Parameter
let display = (a, b, ...c) => {
    console.log(a);
    console.log(b);
    console.log(c);
}
display(10, 20, 30, 40, 50)

// ! Spread Operator
let arr1 = [10, 20, 30], arr2 = [40, 50, 60];

let arr3 = [...arr1, ...arr2]
console.log(arr3);
let arr4 = arr1.concat(arr2);
console.log(arr4);


let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let [a, b, ...c] = arr5;
console.log(a);
console.log(b);
console.log(c);
