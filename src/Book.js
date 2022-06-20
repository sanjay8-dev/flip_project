import React from 'react'
import { useParams} from 'react-router-dom';
import games from "./img/games.png"
import crime from "./img/crime.jpg"
import "./crime.css"



const Book = (props)=>{
    console.log(crime)
    const testStyle = {
        "--backgroundImage" :`url(${crime})`
    }
    const genre = useParams()
    console.log(genre)
    if(genre.bookId === "crimebook"){
        return (  
            <div className="book" style={testStyle}>
                <div className="crime">
                        <div className="Game">
                    <img src={games} alt="game"/>
                </div>
                <div className="Book" style={testStyle}>
                    <p id="side-cover">FACTS ON</p>
                    <div className="cover" style={{
                        backgroundImage:`url(${crime})`
                    }}></div>
                    <h2>CRIME</h2>
                    <span className="writer">Designed By <i>Sanblaze</i></span>
                </div>
            </div>
            </div>
      
        )

    }
    else{
        return <div>"Nt working"</div>
    }
    
}

export default Book