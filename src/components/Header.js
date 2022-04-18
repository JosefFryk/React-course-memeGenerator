import logo from "../images/troll-face.png"

export default function Header() {
    return (
        <div className="header">
             <img src={logo} alt="" />
            <h1>Meme Generator</h1>
            <span>React Course - Project 3</span>
        
        </div>
    )
}