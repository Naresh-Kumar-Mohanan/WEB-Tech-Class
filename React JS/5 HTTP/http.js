// get method
let div = document.querySelector("div")
async function abc() {
    let res = await fetch("https://api.escuelajs.co/api/v1/users")
    let data = await res.json();
    console.log(data);

    data.forEach((e) => {
        let img = document.createElement("img")
        img.src = `img : ${e.avatar}`;

        let name1 = document.createElement("h3")
        name1.innerText = `Name : ${e.name}`;

        let email1 = document.createElement("h4")
        email1.innerText = `Email : ${e.email}`;

        let parent = document.createElement("div");

        parent.append(img, name1, email1)
        div.append(parent)
    })
}
abc();

let btn = document.querySelector("button");
let oneUser = {
    name: " Naresh Kumar",
    email: "Naresh@gmail.com",
    password: 29110,
    avatar: "https://i.pinimg.com/236x/5c/af/3c/5caf3c487ef0d2b4384d9934631238bb.jpg"
}

btn.addEventListener("click", async () => {

    let res = await fetch("https://api.escuelajs.co/api/v1/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(oneUser),

    });
    let data = await res.json();
    console.log(data);
}, false);