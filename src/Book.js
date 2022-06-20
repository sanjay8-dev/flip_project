import React from 'react'
import { useParams} from 'react-router-dom';
import games from "./img/games.png"
import "./crime.css"



const Book = (props)=>{
    const genre = useParams()
    console.log(genre)
    if(genre.id === "crimebook"){
        return (
            
            <div className="book">
                <div className="crime">
                        <div className="Game">
                    <img src={games} alt="game"/>
                </div>
                <div className="Book">
                    <p id="side-cover">FACTS ON</p>
                    <div className="cover"></div>
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