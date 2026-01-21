import { Component } from "react";
import Parent from "./Parent";

export default class App extends Component{

  state ={
    count :0
  }

  increment =()=>{
    this.setState({
      count : this.state.count+1
    })
  }

  decrement=()=>{
    this.setState({
      count : this.state.count-1
    })
  }

  render(){

    let data = "MS Dhoni"

    return <div>
      <h2>{this.state.count}</h2>
      <button onClick={this.increment}>Increase</button>
      <button onClick={this.decrement}>Decrease</button>
      <Parent data={data}></Parent>
    </div>
  }
}