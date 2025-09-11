

let storeApi = fetch("https://fakestoreapi.com/products");
console.log(storeApi);  //promise

storeApi.then((data) => {
    console.log(data);  // response

    let jsondata = data.json();
    console.log(jsondata); //promise

    jsondata.then((data) => {
        console.log(data);  // original data
    })
        .catch((error) => {
            console.log(error);
        })
})
    .catch((err) => {
        console.log(err);
    })


let api = fetch("https://fakestoreapi.com/products")
api.then((data) => {
    console.log(data);
    let jsond = data.json();
    jsond.then((data) => {
        // Need to create the function to make titile to show in the UI
        let datas = data.map((element) => {
            let ol = document.querySelector("ol");
            let li = document.createElement("li");
            li.innerText = element.title
            ol.append(li);
        })
    }).catch((error) => {
        console.log(error);
    })
}).catch((error) => {
    console.log(error);
})