
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