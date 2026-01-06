import Child from "./Child"

export default function Parent(props) {
    console.log(props);

    let arr = ["Naresh", "Kumar", "Ajay", "Kalai"]

    let obj = {
        name: "Naresh",
        email: "naresh@gmail.com",
    }

    return <div>
        <h3> I am from Parent Component but {props.abc}</h3>
        <h3>Sum of {props.a} and {props.b} is {props.a + props.b} </h3>


        <Child fam={arr} me={obj} >

            <form action="">
                <input type="text" /><input type="text" />
            </form>
        </Child>

    </div>
}