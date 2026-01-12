import Faq from "./Faq"
import "./App.css"
import backImg from "/background-pattern-desktop.svg"

const App = () => {

  return <div className="cont">

    <img src={backImg} alt="" />

    <div className="inner">
      <Faq></Faq>
    </div>
  </div>

}
export default App