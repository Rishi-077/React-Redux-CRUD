import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import NewHome from './Components/NewHome';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from './Components/Cart-redux/cart/cart';
import { Provider } from 'react-redux';
import store from './Components/store';
import Contact from './Components/Cart-redux/contact/contact';

function App ()
{
	return (
		<Provider store={store}>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>


				{/* <NewHome /> */}
				{/* <AddEdit /> */}
			</div>
		</Provider>

	);
}

export default App;
