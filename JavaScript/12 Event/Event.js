
console.log("Event in js");

let display = () => {
    console.log("I am Display Function");
}

let changeColor = () => {
    let header = document.querySelector("header");
    header.style.backgroundColor = "Red";
}

let dubleClick = () => {
    alert("Double Click Pannatha Da Setha Payaley")
}

let color = () => {
    let h1 = document.querySelector("h1");
    h1.style.color = "Purple"
}

let copy = () => {
    let card1 = document.querySelector(".card1");
    let card2 = document.querySelector(".card2");
    card2.innerHTML = card1.innerHTML;
}

let mouseHover = ()=>{
    let box = document.querySelector(".box");
    box.style.backgroundColor = 'Black';
}
let mouseHover2 = ()=>{
    let box = document.querySelector(".box");
    box.style.backgroundColor = "mediumseagreen";
}