import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Home() {
	const {
		register,
		trigger,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();
	const [user, setUser] = useState({});

	const [data, setData] = useState([]);

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	// post method

	function onSubmit(user) {
		console.log(user);

		axios
			.post(`http://localhost:3000/user`, user)
			.then(res => {
				console.log('success', res);
			})
			.catch(err => {
				console.log(err);
			});

		reset();
	}

	// get method

	function getUsers() {
		axios
			.get(`http://localhost:3000/user`)
			.then(res => {
				setData(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	useEffect(() => {
		getUsers();
	}, []);

	console.log(data);

	// delete method

	const deleteContact = id => {
		const request = axios.delete(`http://localhost:3000/user/${id}`);
		request.then(response => response.data);
	};

	return (
		<section className="container">
			<form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-6 form-group">
						<div className="form-floating mb-3">
							<input
								name="name"
								type="text"
								className="form-control"
								id="fName"
								placeholder="name@example.com"
								onChange={e => handleChange(e)}
								{...register('name', {
									required: 'Name is required',
									pattern: {
										value: /^([a-zA-Z ]){2,30}$/,
										message: 'Value is Invalid'
									}
								})}
								onKeyUp={() => {
									trigger('name');
								}}
							/>
							<label>Name</label>
							{errors.name &&
								<small className="text-danger">
									{errors.name.message}{' '}
								</small>}
						</div>
						<div className="form-floating">
							<input
								name="email"
								type="email"
								className="form-control"
								id="email"
								placeholder="Email Address"
								onChange={e => handleChange(e)}
								{...register('email', {
									required: 'Name is required',
									pattern: {
										value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
										message: 'Value is Invalid'
									}
								})}
								onKeyUp={() => {
									trigger('email');
								}}
							/>
							<label>Email Address</label>
							{errors.email &&
								<small className="text-danger">
									{errors.email.message}{' '}
								</small>}
						</div>
					</div>

					<div className="col-6 form-group">
						<div className="form-floating mb-3">
							<input
								type="tel"
								className="form-control"
								id="phone"
								maxLength={10}
								placeholder="Phone no"
								name="phone"
								onChange={e => handleChange(e)}
								{...register('phone', {
									required: 'Name is required',
									pattern: {
										value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
										message: 'Value is Invalid'
									}
								})}
								onKeyUp={() => {
									trigger('phone');
								}}
								onKeyPress={event => {
									if (!/[0-9]/.test(event.key)) {
										event.preventDefault();
									}
								}}
							/>
							<label>Phone no</label>
							{errors.phone &&
								<small className="text-danger">
									{errors.phone.message}{' '}
								</small>}
						</div>
						<div className="form-floating">
							<input
								name="country"
								type="country"
								className="form-control"
								id="country"
								placeholder="Enter Your Country"
								onChange={e => handleChange(e)}
								{...register('country', {
									required: 'Name is required',
									pattern: {
										value: /^([a-zA-Z ]){2,30}$/,
										message: 'Value is Invalid'
									}
								})}
								onKeyUp={() => {
									trigger('country');
								}}
							/>
							<label>Enter Your Country</label>
							{errors.country &&
								<small className="text-danger">
									{errors.country.message}{' '}
								</small>}
						</div>
					</div>
				</div>

				<button type="submit" className="btn btn-primary mt-5">
					Submit
				</button>
			</form>

			{/* table */}

			<div>
				<table class="table table-dark table-hover mt-5">
					<thead>
						<tr>
							<th scope="col" className="col">
								id
							</th>
							<th scope="col" className="col">
								Name
							</th>
							<th scope="col" className="col">
								Email
							</th>
							<th scope="col" className="col">
								Phone
							</th>
							<th scope="col" className="col">
								Country
							</th>
							<th colSpan="2" className="col">
								changes
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((data, index) => {
							return (
								<tr>
									<td>
										{data.id}
									</td>
									<td>
										{data.name}
									</td>
									<td>
										{data.email}
									</td>
									<td>
										{data.phone}
									</td>
									<td>
										{data.country}
									</td>
									<td className="col">
										<button
											className="btn btn-danger"
											onClick={() => {
												deleteContact(data.id);
											}}>
											Delete
										</button>
									</td>
									<td className="col">
										<button className="btn btn-success">Edit</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default Home;
