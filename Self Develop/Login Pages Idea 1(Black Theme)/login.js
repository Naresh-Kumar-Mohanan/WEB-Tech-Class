let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let lusername = document.getElementById("un").value
    let lpass = document.getElementById("pass").value
    console.log({ lusername, lpass });
    // Taking Data From LocalStorage

    let sun = localStorage.getItem("Username")
    let sp = localStorage.getItem("Password")
    console.log({ sun, sp });
    if (sun == lusername) {
        if (sp == lpass) {
            alert("Login Success")
            open("./Home.html")
        } else {
            alert("Incorrect Password")
        }
    } else {
        alert("incorrect Username")
    }


})