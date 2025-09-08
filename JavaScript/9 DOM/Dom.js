
// ! 1. How to Target Element

// By id :
let logo = document.getElementById("myLogo");
console.log(logo);

// By Class Name :
let cards = document.getElementsByClassName("card");
console.log(cards);
console.log(cards[1]);

let button = document.getElementsByClassName("btn");
console.log(button[0]);

// ! By Tag Name
let list = document.getElementsByTagName("li");
console.log(list[0]);

// ! QeurySelector()
let logo2 = document.querySelector("#myLogo")
console.log(logo2);

let card1 = document.querySelector(".card");
console.log(card1);

// ! QeurySelectorAll()
let c = document.querySelectorAll(".card");
console.log(c);

// ! how to get/set content inside element.
console.log(cards[1].innerText);
console.log(cards[1].innerHTML);

cards[2].innerHTML = "<h2>Hello</h2> <p>I am Naresh</p>"