
import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
    render() {
        let a = 20
        let b = 25
        console.log(this.props);
        // De-Structuring
        let { f, s } = this.props

        return <>
            <h2>I am Parent Data</h2>
            <h1>I am From Parent Class Module</h1>
            <h3>The sum of "{this.props.f} + {this.props.s} = {this.props.f + this.props.s}"</h3>
            <h3>The Division of {f} / {s} = {f / s}</h3>
            <Child a={a} b={b}></Child>
        </>
    }
}