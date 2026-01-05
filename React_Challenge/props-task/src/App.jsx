import Nav from "./Nav"
import Structure from "./Structure"
import StructureMob from "./StructureMob"
import Laptop from "./LaptopData"
import Mobile from "./MobileData"



export default function App() {
  return <div>
    <Nav></Nav>
    <Structure laptops={Laptop}></Structure>
    <StructureMob mobiles={Mobile}></StructureMob>
  </div>
}