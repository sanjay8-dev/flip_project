import"./App.css";
import Home from "./Home"
import { BrowserRouter as Router,Route,Routes, useParams } from 'react-router-dom';
import Book from "./Book"



const App = (props) => {
	return (
	   <Router>
		<div className="app">
			<div className="content">
		  		 <Routes >
					<Route path="/" element={<Home/>}/>
					{/* <Route path="/book" element={<Book/>}/> */}
					<Route path="/book/:bookId" element={<Book />}/>

				 </Routes>

			</div>

		</div>


	   </Router>
		

		

)
}

export default App;