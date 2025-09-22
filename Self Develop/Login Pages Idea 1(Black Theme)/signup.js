
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let sun = document.getElementById("un").value
    let semail = document.getElementById("mail").value
    let spass = document.getElementById("pass").value
    console.log(sun, semail, spass);

    localStorage.setItem("Username", sun)
    localStorage.setItem("Email", semail)
    localStorage.setItem("Password", spass)


    open("./Login.html")
})