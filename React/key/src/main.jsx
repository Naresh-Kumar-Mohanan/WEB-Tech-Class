import react from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

let age = 24;
let name = `Naresh, ${age}`
let userName = "Kumar"

let ipl = ["csk", "mi", "srh", "kkr", "lsg", "gt", "dc", "pkx1", "rr", "rcb"]

let actor = ["Suriya", "Atharvaa", "SK", "Vijay", "Dhanush"]

let actress = ["Nazriya", "SaiPallavi", "Samantha", "Trisha", "Nayanthara"]

let storage = [
    {
        id: 1,
        productName: "Vivo",
        price: 35000,
        rating: 5
    },

    {
        id: 2,
        productName: "Iphone",
        price: 100000,
        rating: 3.5
    },
    {
        id: 3,
        productName: "One Plus",
        price: 50000,
        rating: 4.5
    },
    {
        id: 4,
        productName: "SamSung",
        price: 80000,
        rating: 4.7
    },
    {
        id: 5,
        productName: "Oppo",
        price: 25000,
        rating: 3
    },
]

createRoot(document.getElementById("root")).render(<>

    {/*<h1>User Name : {name}</h1>
<h1>User Name : {userName}, {age}</h1>*/}

    {/*    <ul>
        {ipl.map((e, i, arr) => {
            return <li>{e.toUpperCase()}</li>
        })}
    </ul>

    <ul>
        {actor.map((e, i, arr) => {
            return <li>{e.toUpperCase()}</li>
        })}
    </ul>

    <ul>
        {actress.map((e, i, arr) => {
            return <li>{e.toUpperCase()}</li>
        })}
    </ul>*/}

    <div className="abc">
        {storage.map((e, i, arr) => {
            return <section key={e.id}>
                <h3>Product Name: {e.productName}</h3>
                <h4>Price: {e.price}</h4>
                <h4>Ratings: {e.rating}</h4>
                <button>Add to Cart</button>
            </section>
        })}
    </div>

</>)