// let parent = document.getElementById("parent")
// // let child = document.getElementById("child")
// let child = document.querySelector("#child")
// let btn = document.querySelector("button")

// btn.addEventListener("click", (event) => {
//     // event.stopPropagation();
//     console.log("Button is Clicked");
//     // console.log(event); /*it will print the Completed Access Location and Details */
// });

// child.addEventListener("click", (event) => {
//     console.log("Child Division Clicked");
//     event.stopPropagation();
// }// true /* the true will make the content excution based on the Data Structure in html*/
// );

// parent.addEventListener("click", (event) => {
//     // event.stopPropagation();
//     console.log("Parent Division Clicked");
// });



function abc() {
    console.log("I will be excuted from html");
}


let btn = document.querySelector("button")

btn.onclick = abc //if we call fuction like "abc()" this will always excute not in event listen