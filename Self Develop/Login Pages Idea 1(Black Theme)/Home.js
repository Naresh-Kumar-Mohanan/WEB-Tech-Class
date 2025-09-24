
let username = document.querySelector(".username")
let rUser = localStorage.getItem("Username")
username.innerHTML = `<h2>🙋🏻‍♂️ ${rUser},</h2>`

let logout = document.getElementById("btnOut")
logout.addEventListener("click", (event) => {
    open("./Login.html")
})

  


let storeApi = async () => {
    try {
        let Api = await fetch("https://fakestoreapi.com/products")
        let jsonData = await Api.json();
        let products = jsonData.map((element) => {
            let main = document.querySelector("main")
            let card = document.createElement("card")
            card.innerHTML = `<img src=${element.image} height=150px>
            <h4>Title : ${element.title}</h4> 
            <h4>Price : ${element.price}</h4>
            <h4>Rating : ${element.rating.rate}</h4>`
            main.append(card)
        })
    } catch (error) {
        alert("Store is offline")
    }
}

storeApi();


