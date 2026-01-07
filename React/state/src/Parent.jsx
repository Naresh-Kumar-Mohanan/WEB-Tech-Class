import Child from "./Child";

const Parent = (props) => {

    let { a, b } = props;
    let c = 10
    let d = 20
    return <div>

        I am From Parent
        <h3>The sum of {props.a} and {props.b} is {props.a + props.b}</h3>
        <h3>the diff of {a} and {b} is {a - b}</h3>
        <Child c={c} d={d}></Child>
    </div>
}

export default Parent