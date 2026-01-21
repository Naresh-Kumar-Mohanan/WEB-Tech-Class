import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component{

    render(){
        console.log(this.props);

        let name = "Merlin Hetcy"
        
        return <div>
            I am from Parent. {this.props.data} from App Component

            <Child data2={name}></Child>
        </div>
    }
}