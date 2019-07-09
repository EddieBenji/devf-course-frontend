import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';

function Signup() {
	return (
		<>
			<Navbar/>
			<Header/>
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form>
							<Input name="firstName"
							       label="First Name"
							       placeholder="First Name"
							       value={''}
							       onChange
							       type="text"
							       isRequired={true}/>

							<Input name="lastName"
							       label="Last Name"
							       placeholder="Last Name"
							       value={''}
							       onChange
							       type="text"
							       isRequired={true}/>

							<Input name="email"
							       label="Email"
							       placeholder="Email"
							       value={''}
							       onChange
							       type="email"
							       isRequired={true}/>

							<Input name="password"
							       label="Password"
							       placeholder="Password"
							       value={''}
							       onChange
							       type="password"
							       isRequired={true}/>

							<Input name="confirmPassword"
							       label="Confirm Password"
							       placeholder="Confirm Password"
							       value={''}
							       onChange
							       type="password"
							       isRequired={true}/>

							<button className="btn btn-primary">
								Send
							</button>
						</form>
					</div>
				</section>
			</main>
		</>
	);
}

export default Signup;
