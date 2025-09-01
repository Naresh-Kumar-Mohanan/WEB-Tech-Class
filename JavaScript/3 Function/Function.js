let fun1 = function (a, b) {
    console.log(a);
    console.log(b);
}

fun1(10, "html");


// ! Array Function
function sname() {
    console.log("Naresh");

}
sname();

let arrow = () => {
    console.log("I am Arraow Function");
}

arrow()


// ! nested Function

let outer = () => {
    console.log(" I am Outer Function");

    let inner = () => {
        console.log(" I am Inner Function");
    }
    inner()
}

outer()


// ! Lexical Scopping

//  in nested function inner function can access all the properties of outer function but the outer function cannot access the property of inner function, this is called lexical Scopping.

let parent = () => {
    let a = 10

    let child = () => {
        let b = 20;

        console.log(a);
        console.log(b);
    }
    child();
}

parent()


// ! Higher order Function and Callback Function

// any Function that takes another function as parameter that's called Higherorder Function.
// the Function we are sending to the higherorder function as parameter is caller callback Function.

let hof = (a) => {
    console.log("I am Higher Order Function");
    a()
}

hof(() => {
    console.log("I am CallBack Function");

})

// example 2

let hi = () => { // I am Callback Function
    console.log("Hii");
}

let hello = (a) => {   // This is Highterorder Function
    console.log("I am Hello");
    a()
}

hello(hi);  // this is recalled Function


// ! IIFE (Immediate Invoke Function Expression)

(function () {
    console.log("I am IIFE Function");
})() // Function Calling IIFE.

