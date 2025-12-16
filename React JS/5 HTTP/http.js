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