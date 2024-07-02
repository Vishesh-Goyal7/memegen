import React, { useEffect, useState } from "react"
import MemeCard from "../components/cards"
import { getMemes } from "../api/memes"

const Home = () => {

    const [memes, setMemes] = useState([])

    useEffect(() => {
        getMemes()
        .then((meme) => {
            setMemes(meme.data.memes)
        })
        .catch("Error loading")
    }, [])

    return(
        <div>
            <div className="row">
                {
                    memes ? memes.map((meme) => (
                        <MemeCard title = {meme.name} img = {meme.url}/>
                    )) : <p>Loading... Please Wait</p>
                }
            </div>
        </div>
    )
}

export default Home