import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import NewHome from './Components/NewHome';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from './Components/Cart-redux/cart/cart';
import { Provider } from 'react-redux';
import store from './Components/store';
import Form from './Components/Form-Redux/Form/Form';
import Test from './Components/Test/Test';
import SplineApp from './Components/Spline/Spline';

function App ()
{
	return (
		<Provider store={store}>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="/form-redux" element={<Form />} />
					<Route path="/test" element={<Test />} />
					<Route path="/spline" element={<SplineApp />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>


				{/* <NewHome /> */}
				{/* <AddEdit /> */}
			</div>
		</Provider>

	);
}

export default App;
