import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import { AddEdit } from './Components/Yup';

function App ()
{
	return (
		<div className="App">
			<Navbar />
			<Home />
			{/* <AddEdit /> */}
		</div>
	);
}

export default App;
