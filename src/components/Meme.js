import memeData from "../memeData"
import React from "react";

export default function Meme() {
  
    



    const [meme, setMeme] = React.useState({
        
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",

     } ) 

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
  
  
    function getRandomImage() {  
        const memesArray = allMemeImages.data.memes
        const num = Math.floor(Math.random() * memesArray.length)  ///stuck
        const url = memesArray[num].url
        setMeme(prevMeme => ({

            ...prevMeme,
            randomImage: url,
        })
        )

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
                <img src={meme.randomImage} alt=""  className="meme--image"/>
            </div>
           
        </main>
    )
}