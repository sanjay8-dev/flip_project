import"./Home.css";
import { Link , animateScroll as scroll } from "react-scroll"
import { useNavigate } from "react-router-dom"; 
import shelfImg from "./img/shelf.png"
import scrollupImg from "./img/scrollup.png"
import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

const Home = (props) => {
const [vantaEffect, setVantaEffect] = useState(0)
const myRef = useRef(null)

const navigate = useNavigate();

const navigateToCrimeBook = () => {
    navigate('/book/crimebook');
  };

  const navigateToMotivationBook = () => {
    navigate('/book/motivationbook');
  };

  const navigateToMysteryBook = () => {
    navigate('/book/mysterybook');
  };

useEffect(() => {
if (!vantaEffect) {
setVantaEffect(NET({
THREE,
  el: myRef.current,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
}))
}
return () => {
if (vantaEffect) vantaEffect.destroy()
}
}, [vantaEffect])


useEffect(()=>{
    scrollToTop();
})
const scrollToTop = () => {
    scroll.scrollToTop(); 
};


return (<div ref={myRef}>
  <div className= "land_container">
	
		<div id="vantajs">
	
			<div className="twoheaders">
				<h3 className="first_header">Think Before You Speak</h3>
				<h3 className="second_header">Read Before You Think</h3>
				<p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <Link to="finish" smooth ={true} className="explore">Let's Flip</Link>
			</div>
		</div>
	</div>
    {/* 2nd container */}
    <div>
        <div className="container">
            <div className="shelf">

                <div className="CrimeBook" onClick={navigateToCrimeBook}>
                        <span className="writer">Written By <i>Sanblaze</i></span>
                        <h2>CRIME</h2>
                </div>

                <img src={shelfImg} alt="shelf"/>
                <br/>
                
                <div className="MysteryBook" onClick={navigateToMysteryBook}>
                    <span className="writer">Written By <i>Astroboy</i></span>
                    <h2>MYSTERY</h2>
                </div>

                <div className="MotivationBook" onClick={navigateToMotivationBook}>
                    <span className="writer">Written By <i>El_fuego</i></span>
                    <h2>MOTIVATION</h2>
                </div>
                <img src={shelfImg} alt= "shelf" className="special"/>
            </div>  
            <img onClick={scrollToTop} src={scrollupImg} alt="scroll up" className="scrollup"/> 
        </div>
    </div>
    <span id="finish"></span>
     
</div>
)
}

export default Home;