import { Component } from "react";

export default class Child extends Component{

    render(){
        console.log(this.props);

        return <div>
            {this.props.data2} from Parent Component
        </div>
        
    }
}