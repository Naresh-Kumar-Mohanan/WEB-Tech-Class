import "./Content.css"

// Images
import leftImg from "/image-product-desktop.jpg"
import icon from "/icon-cart.svg"

export default function Content() {
    return <div className="cont">
        <div className="innerBox">
            <div className="left">
                <img src={leftImg} alt="" />
            </div>
            <div className="right">
                <p id="P1">Perfume</p>
                <h1>Gabrielle Essence Eau De Perfum</h1>
                <p id="P2">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className="price">
                    <h1 id="H1">$149.99</h1>
                    <h1 id="H2">$169.99</h1>
                </div>
                <button>
                    <img src={icon} alt="" />
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
}