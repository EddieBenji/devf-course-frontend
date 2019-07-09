import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';

function Login() {
	return (
		<>
			<Navbar/>
			<Header/>
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form>

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

export default Login;
