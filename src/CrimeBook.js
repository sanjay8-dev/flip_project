import games from "./img/games.png"
import "./crime.css"

const CrimeBook = (props)=>{
    return (
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
        
    )
}

export default CrimeBook;