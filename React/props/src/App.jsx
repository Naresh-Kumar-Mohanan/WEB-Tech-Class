import Parent from "./Parent"

export default function App(){

  let str = "This data from app component"
  let a = 100
  let b = 200
  return <div>
    <h3>I am from App</h3>
    <Parent abc = {str} a={a} b= {b}></Parent>

  </div>
}