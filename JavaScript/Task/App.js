let catPrice = 15000;
let dogPrice = 12000;
let parotPrice = 6000;

let calculate = document.getElementById("btn1")
let output = document.querySelector(".output")
calculate.addEventListener("click", () => {
    let catQuantity = parseInt(document.getElementById("cat").value);
    let dogQuantity = parseInt(document.getElementById("dog").value);
    let parotQuantity = parseInt(document.getElementById("parot").value);
    let total = (catQuantity * catPrice) + (dogQuantity * dogPrice) + (parotQuantity * parotPrice);
    output.innerHTML = `<h3> Total Price Rs.${total}</h3>`
})

let reload = document.getElementById("btn2");
reload.addEventListener("click", () => {
    output.innerHTML = `<h3> Total Price Rs.0</h3>`
    let catQuantity = parseInt(document.getElementById("cat").value = 0);
    let dogQuantity = parseInt(document.getElementById("dog").value = 0);
    let parotQuantity = parseInt(document.getElementById("parot").value = 0);
})