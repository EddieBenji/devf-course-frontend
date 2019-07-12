import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';
import useForm from '../hooks/useForm';


const ADD_AUTHOR = gql`
    mutation CreateAuthor($data: createAuthorInput!){
        createAuthor( data: $data){
            _id,
            firstName
        }
    }
`;

function Signup({ history }) {
	const [sendSignup, { error }] = useMutation(ADD_AUTHOR);
	const catchSubmit = async (fields) => {
		if (!fields) {
			console.log('fields: ', fields);
			return;
		}
		if (fields.password !== fields.confirmPassword) {
			alert('Passwords did not match.');
			return;
		}
		delete fields.confirmPassword;
		await sendSignup({ variables: { data: { ...fields } } });
		if (error) {
			alert('An error occurred');
			return;
		}
		history.push('/login');

	};
	const { inputs, handleInputChange, handleSubmit } = useForm(catchSubmit);
	return (
		<>
			<Navbar/>
			<Header/>
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form onSubmit={handleSubmit}>
							<Input name="firstName"
							       label="First Name"
							       placeholder="First Name"
							       value={inputs.firstName}
							       onChange={handleInputChange}
							       type="text"
							       isRequired={true}/>

							<Input name="lastName"
							       label="Last Name"
							       placeholder="Last Name"
							       value={inputs.lastName}
							       onChange={handleInputChange}
							       type="text"
							       isRequired={true}/>

							<Input name="email"
							       label="Email"
							       placeholder="Email"
							       value={inputs.email}
							       onChange={handleInputChange}
							       type="email"
							       isRequired={true}/>

							<Input name="password"
							       label="Password"
							       placeholder="Password"
							       value={inputs.password}
							       onChange={handleInputChange}
							       type="password"
							       isRequired={true}/>

							<Input name="confirmPassword"
							       label="Confirm Password"
							       placeholder="Confirm Password"
							       value={inputs.confirmPassword}
							       onChange={handleInputChange}
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
