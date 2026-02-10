import React, { useState } from 'react'
import "./MainPage.css"

const MainPage = (props) => {
    let [product, setProduct] = useState(props.data)

    function handleInput(eve) {
        let filteredData = props.data.filter((ele, i) => {
            if (ele.title.toLowerCase().include(ele.target.value.toLowerCase())) {
                return ele;
            }
        })
        setProduct(filteredData)
    }

    console.log(props.data);

    return (
        <div>
            <div>
                <input type="text" placeholder='enter the product name' onInput={handleInput} />
            </div>

            <section className='main'>
                {product.map((e, i) => {
                    return <div>
                        <img src={e.image} alt="" />
                        <h3>{e.title}</h3>
                        <h2>Price: Rs.{e.price}</h2>
                        <h2>Rating: {e.price}</h2>
                        <button>Add to Cart</button>
                    </div>
                })}
            </section>
        </div>
    )
}

export default MainPage