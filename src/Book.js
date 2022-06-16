import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import CrimeBook from "./CrimeBook.js"




const Book = (props)=>{
    return (
     <Router>
        <div className="book">
            <Routes >
			    <Route path="/crimebook" element={<CrimeBook/>}/>

			 </Routes>

        </div>
    </Router>
    )
}

export default Book