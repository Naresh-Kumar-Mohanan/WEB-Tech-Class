
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

// ! How to Apply Css :
let cssli = document.getElementsByTagName("li");
console.log(cssli[1]);

let contact = cssli[2];
console.log(contact);

cssli[1].style.color = "Green";
contact.style.color = "red"
contact.style.textDecoration = "underline"

// ! How to add or Remove Classes :
let firstCard = document.querySelector(".card");
console.log(firstCard);

console.log(firstCard.classList);
firstCard.classList.add("Naresh");
firstCard.classList.add("Sample");
console.log(firstCard);

// To add Class :
cards[1].classList.add("nk");
// To Remove Class :
// cards[1].classList.remove("nk");


// ! How to create any Element :
let div = document.createElement("div");
div.classList.add("circle");

// cards[1].after(div)
// cards[2].before(div)
// cards[2].append(div)
cards[2].prepend(div)

let footer = document.createElement("Hi")
footer.classList.add("foot")
footer.innerHTML = "<p>This is Footer from Js, Dom example 2025</p>"
let main = document.querySelector("main");
main.after(footer);