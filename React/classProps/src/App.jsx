import { Component } from "react";
import Parent from "./Parent";

// Function Based Component
// export default function App(){
//   return <div>

//   </div>
// }

// Class Based Component
export default class App extends Component {
  render() {

    let a = 10
    let b = 5

    return <>
      <h1>I am From APP</h1>
      <Parent f={a} s={b}></Parent>
    </>
  }
}
