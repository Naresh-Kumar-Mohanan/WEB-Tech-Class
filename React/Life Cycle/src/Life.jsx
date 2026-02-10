import { Component } from "react";
export default class Life extends Component {

    constructor() {
        super()
        console.log("I am from Constructor");
        this.state = {}
    }

    static getDerivedStateFromProps() {
        console.log("I am from Derived State");
        return null
    }

    render() {
        console.log("I am from Render");

        return <div>
            I am from Class
        </div>
    }

    componentDidMount() {
        console.log("I am from Mounting");
    }

    shouldComponentUpdate() {
        return true
    }

    componentDidUpdate() {
        console.log("I am from Updating");

    }

    componentWillUnmount() {
        console.log("I am from Unmounting");

    }
}