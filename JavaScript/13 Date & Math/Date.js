
let time = new Date();
console.log(time);


console.log("Hour is", time.getHours());
console.log("The Mint is : ", time.getMinutes());
console.log("The Second is : ", time.getSeconds());
console.log("The Date is : ", time.getDate());
console.log("The Year is : ", time.getFullYear());


let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
console.log(days[time.getDay()]);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("The Month Is : ", months[time.getMonth()]);

console.log(time.toLocaleTimeString());

console.log("Local Time : ", time.toLocaleDateString());

let displayTime = () => {
    let timess = new Date();
    let out = document.querySelector(".output");
    let times = timess.toLocaleTimeString();
    out.innerHTML = `<h3>${times}</h3>`
}
setInterval(displayTime, 1000);
displayTime();



// ! Math Function

console.log(Math.sqrt(16));
console.log(Math.abs(-16));
console.log(Math.max(6, 8));
console.log(Math.min(6, 8));

console.log(Math.ceil(5.8));
console.log(Math.ceil(6.1));

console.log(Math.floor(5.8));
console.log(Math.floor(3.9));

console.log(Math.round(5.4));
console.log(Math.round(5.6));

// ! Reverse The Number

let num = 125;
let temp = num;
let rev = 0;
let res = () => {
    do {
        rev = rev * 10 + Math.floor(num % 10);
        num = Math.floor(num / 10);
    } while (num > 0);

    console.log("Orginal Num : " + temp);
    console.log("Reversed Number : " + rev);
}
res();


console.log(Math.floor(Math.random() * 9999));
