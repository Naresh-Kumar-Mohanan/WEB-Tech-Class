

export default function Child(props) {
    let { c, d } = props
    return <div>
        <br /><br />
        I am From Child
        <h4>the Sum of {c} and {d} is {c + d}</h4>
    </div>
}