import "./Faq.css"
import starImg from "/icon-star.svg"
import Quest from "./Quest"




const Faq = () => {

    return <section className="faq">
        <div className="head">
            <img src={starImg} alt="" />
            <h1>FAQS</h1>
        </div>
        <>
            <Quest></Quest>
        </>

    </section>

}
export default Faq