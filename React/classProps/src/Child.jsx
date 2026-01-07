import { Component } from "react";

export default class Child extends Component {
    render() {
        // De-Stucturing
        let { a, b } = this.props

        return <>
            <br /> <br /><br />
            <h3>I am Child Data</h3>
            <h3>The sub of "{this.props.a} - {this.props.b} = {this.props.a - this.props.b}"</h3>
            <h3>the Multiple of {a} * {b} = {a * b}</h3>
        </>
    }
}