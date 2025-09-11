
let data = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    let json = await response.json();
    console.log(json);
}
data();

// ===================================================================


let data1 = async () => {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        // console.log(response);
        let json = await response.json();
        let datas = await json.map((element) => {
            console.log(`I am Titile ${element.title}`);
        })
    } catch (error) {
        console.log(error);
    }
}

data1();