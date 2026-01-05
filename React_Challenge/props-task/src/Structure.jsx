import "./Structure.css"


const Structure = (props) => {
    return <div className="layer">
        <h1>Laptop</h1>
        <div className="cont">
            {props.laptops.map((e) => {
                return <div className="data">
                    <img height={250} src={e.image} alt="" />
                    <h2>Name : {e.title}</h2>
                    <h3>Price : {e.price}</h3>
                    <h3>Rating : {e.rating}</h3>
                </div>
            })}
        </div>
    </div>
}

export default Structure