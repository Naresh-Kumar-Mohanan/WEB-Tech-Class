import "./Content.css"
import headImg from "/article.svg"
import profile from "/avatar.webp"

export default function Content() {

    return <div className="outer">
        <div className="inner">
            <img src={headImg} alt="" />

            <h3>Learning</h3>
            <p id="p1">Published 21 Dec 2023</p>
            <h2>HTML & CSS foundations</h2>
            <p id="p2">These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className="avatar">
                <img src={profile} alt="" />
                <p>Greg Hooper</p>
            </div>
        </div>
    </div>
}