let allInput = document.querySelectorAll("input");
let form = document.querySelector("form");
let error = document.querySelector("#error")

// allInput.forEach((Input) => {
//     Input.addEventListener("input", () => {
//         console.log(event);
//     })
// });

// allInput.forEach((Input) => {
//     Input.addEventListener("input", (event) => {
//         console.log(event.target);
//     })
// });


// Passing Value Method 1
let obj = {
    name: "",
    email: "",
    password: "",
    avatar: ""
}


// Passing Value Method 2
// let obj = {

// }

allInput.forEach((input) => {
    input.addEventListener("input", (event) => {
        obj = { ...obj, [event.target.name]: event.target.value }
        console.log(obj);
    })
});


form.addEventListener("submit", async () => {
    event.preventDefault();
    let res = await fetch("https://api.escuelajs.co/api/v1/users", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }, body: JSON.stringify(obj)
    })
    let data = await res.json();
    if (data.statusCode == 400) {
        error.innerHTML = ``
        data.message.forEach((element) => {
            let span = document.createElement("marquee")
            span.innerHTML = `<h4>Please Fill ${element}</h4>`
            error.append(span)
        })
    }
    console.log(data);
});





// let a="phone number";

// let obj ={
//     name: "Elakss",
//     age: 23,
//     [a]: 878765656,
// }
// console.log(obj);