import Image from "./image"
import Prep from "./Prep"
import Ingred from "./Ingred"
import Instruction from "./Instruction"
import Nutrition from "./Nutrition"

import "./App.css"

export default function App() {
    return <div className="cont">
        <div>
            <Image></Image>
            <Prep></Prep>
            <Ingred></Ingred>
            <Instruction></Instruction>
            <Nutrition></Nutrition>
        </div>
    </div>
}