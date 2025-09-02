
let arr = [10, "html", true, [2, 5]]

console.log(arr);


// ! hOW TO know the Array Length

console.log(arr.length);

// ! Array Methods

// 1. Push()
let arr1 = [20, 30, 40]
// This used to push the new element into the array at the last
arr1.push(50)
console.log(arr1);


// 2. Pop()
let arr2 = [80, 90, 100]
// this will remove the last element only
arr2.pop()
console.log(arr2);


// 3. Unshift
let arr3 = [20, 40, 80]
// This used to push the new element into the array at the Starting
arr3.unshift(10)
console.log(arr3);


// 4. Shift
let arr4 = [50, 60, 70]
// This remove the First Element From the Array
arr4.shift()
console.log(arr4);


// 5. includes()
console.log(arr4.includes(70));
console.log(arr4.includes(30));


// 6. IndexOf()
// Index of the Given Element
let arr5 = [10, 20, 30, 10, 20]
console.log(arr5.indexOf(20));


// 7. LastIndexOf()
// Last Index of the Given Element
console.log(arr5.lastIndexOf(20));


// 8. concat()
let s1 = ["html", "css"]
let s2 = ["Java", "js"]
console.log(s1.concat(s2));


// 9. Reverse()
let arr6 = [10, 20, 30, 40, 50, 60, 70, 80]
arr6.reverse();
console.log(arr6);

// 10. join()
let arr7 = ["Hello", "Hi", "How", "are", "you"]
console.log(arr7.join(" "));



// ! Reverse the string using only methods
let str = "hello"

let arr8 = str.split("");
console.log(arr8);

let revarr = arr8.reverse();
console.log(revarr);

/* let revstr = revarr.join("");
console.log(revstr);
console.log(str.split("").reverse().join("")); */



// ! 11. Slice()
// It only take the values from th array.
let arr9 = [8, 10, 40, 66, 30, 22, 10];
console.log(arr9.slice(2, 5 + 1)); // slice(Start, End)


// ! 12. Splice()
// It modify the Original Array and Remove the element.  
let arr10 = [8, 10, 40, 66, 30, 22, 10];
arr10.splice(2, 3, 400); // splice(Start, Remove Element Count, Replace Word or Number anything)
console.log(arr10);

let subjects = ["html", "css", "js"];
subjects.splice(3, 0, "SQL")
console.log(subjects);


// ! Higher Order Array Methods

// ! 1. Map()
let number = [80, 75, 60, 82, 92]  // o/p --> [85,80,65,87,97]
let x = [];
for (i = 0; i < number.length; i++) {
    // x[i] = number[i] + 5;
    x.push(number[i] + 5);
}
console.log(x);

let mappedarr = number.map((element) => {
    return element + 5;
})
console.log(mappedarr);

let subject = ["html", "css", "java", "js"]
let uppercasearr = subject.map((subjects) => {
    return subjects.toUpperCase();
})
console.log(uppercasearr);


// ! 2. Filter()
let greater = number.filter((nums) => {
    return nums > 80;
})
console.log(greater);


// ! 3. Reduce()
let arr11 = [10, 20, 30, 40, 50, 60];
let sum = arr11.reduce((accumulator, element) => {
    return accumulator + element;
}/* (,Accumulator Value will be there) */)
console.log(sum);


// ! 4. Sort()
let arr12 = [3, 1, 6, 22, 5, 9]
let ascOrder = arr12.sort((a, b) => {
    return a - b; // a-b Will give Assending order of data 
})
console.log(ascOrder);
let dscOrder = arr12.sort((a, b) => {
    return b - a; // b-a Will give the Dessending Order of data
})
console.log(dscOrder);
