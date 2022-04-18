import memeData from "../memeData"
import React from "react";

export default function Meme() {
  
    
const [memeImage, setMemeImage] = React.useState("") 
  
  
    function getRandomImage() {  
        const memesArray = memeData.data.memes
        const num = Math.floor(Math.random() * memesArray.length)
       
        setMemeImage(memesArray[num].url)

}

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    
                />
                <button 
                    onClick={getRandomImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div>
                <img src={memeImage} alt=""  className="meme--image"/>
            </div>
           
        </main>
    )
}