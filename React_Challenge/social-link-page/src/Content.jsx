import avatarImg from "/avatar-jessica.jpeg"
import "./Content.css"

let Content = () => {
    return <div className="outerLayer">
        <div className="content">
            <img src={avatarImg} alt="" />
            <h2>Jessica Randall</h2>
            <p id="p1">London, United Kingdom</p>
            <p>"Front-end developer and avid reader"</p>
            <div className="tags">
                <button>GitHub</button>
                <button>Frontend Mentor</button>
                <button>Linkedin</button>
                <button>Twitter</button>
                <button>Instagram</button>
            </div>
        </div>
    </div>
}

export default Content