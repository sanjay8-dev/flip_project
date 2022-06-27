import React from 'react'
import { useParams} from 'react-router-dom';
import games from "./img/games.png"
import crime from "./img/crime.jpg"
import motivation from "./img/motivation.jpg"
import mystery from "./img/mystery.jpg"
import "./book.css"



const Book = (props)=>{
    console.log(crime)
    
    const genre = useParams()
    console.log(genre)
    if(genre.bookId === "crimebook"){
        const testStyle = {
            "--backgroundImage" :`url(${crime})`
        }
        return (  
            <div className="book" style={testStyle}>
                <div className="booksonshelf">
                        <div className="Game">
                    <img src={games} alt="game"/>
                </div>
                <div className="Book" style={testStyle}>
                    <p id="side-cover">FACTS ON</p>
                    <div className="cover" style={{
                        backgroundImage:`url(${crime})`
                    }}></div>
                    <h2>CRIME</h2>
                    <span className="writer">Written By Sanblaze</span>
                </div>
            </div>
            </div>
        )
    }
    else if(genre.bookId === "motivationbook"){
        const testStyle = {
            "--backgroundImage" :`url(${motivation})`
        }
        return (
            <div className="book" style={testStyle}>
            <div className="booksonshelf">
                    <div className="Game">
                <img src={games} alt="game"/>
            </div>
            <div className="Book" style={testStyle}>
                <p id="side-cover">FACTS ON</p>
                <div className="cover" style={{
                    backgroundImage:`url(${motivation})`
                }}></div>
                <h2>MOTIVATION</h2>
                <span className="writer">Written By <i>Astroboy</i></span>
            </div>
        </div>
        </div>
        )
    }else if(genre.bookId === "mysterybook"){
        const testStyle = {
            "--backgroundImage" :`url(${mystery})`
        }
        return (
            <div className="book" style={testStyle}>
            <div className="booksonshelf">
                    <div className="Game">
                <img src={games} alt="game"/>
            </div>
            <div className="Book" style={testStyle}>
                <p id="side-cover">FACTS ON</p>
                <div className="cover" style={{
                    backgroundImage:`url(${mystery})`
                }}></div>
                <h2>MYSTERY</h2>
                <span className="writer">Written By <i>El_fuego</i></span>
            </div>
        </div>
        </div>
        )
    }
}

export default Book