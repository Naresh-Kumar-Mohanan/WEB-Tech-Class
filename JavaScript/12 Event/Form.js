

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let sname = document.getElementById("sname").value

    let email = document.getElementById("semail").value

    console.log({ sname, email });
    console.log(sname, email);
    console.log('Form Submitted');
})