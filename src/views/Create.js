import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

import useForm from '../hooks/useForm';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import isAuthenticated from '../utils/isAuthenticated';

const CREATE_POST = gql`
    mutation CreatePost($data: createPostInput!){
        createPost(data: $data){
            _id,
            title
        }
    }
`;

function Create({ history }) {
	const [coverPhoto, setCoverPhoto] = useState('');
	const [coverPreview, setCoverPreview] = useState('');

	const [sendPost, { data, error }] = useMutation(CREATE_POST);

	const handleCover = event => {
		const reader = new FileReader();
		const file = event.target.files[0];

		reader.onloadend = () => {
			setCoverPhoto(file);
			setCoverPreview(reader.result);
		};
		reader.readAsDataURL(file);
	};

	const catchPost = async (fields) => {
		const createPostMutation = await sendPost({ variables: { data: { ...fields, coverPhoto } } });
		console.log('createPostMutation: ', createPostMutation);
		if (createPostMutation) {
			history.push(`/post/${createPostMutation.data.createPost._id}`);
		}
		if (error) {
			console.log(error);
		}
	};

	const { inputs, handleInputChange, handleSubmit } = useForm(catchPost);

	return (
		<>
			<Navbar/>
			<Header/>
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form onSubmit={handleSubmit}>
							<Input name="title"
							       label="Title"
							       type="text"
							       placeholder="Title"
							       value={inputs.title}
							       onChange={handleInputChange}
							       isRequired={true}/>

							<div className="control-group">
								<div className="form-group floating-label-for-form-group controls">
								       <textarea name="content"
								                 id="content"
								                 onChange={handleInputChange}
								                 value={inputs.content}
								                 cols="60"
								                 rows="10">
								       </textarea>
								</div>
							</div>

							<Input label="Cover Photo"
							       type="file"
							       placeholder="Cover Photo"
							       onChange={handleCover}
							       isRequired={true}
							       name="coverPhoto"/>

							<img src={coverPreview}
							     className="d-block w-50"
							     alt="Preview"/>

							<button className="btn btn-primary mt-4">
								Save
							</button>

						</form>
					</div>
				</section>

			</main>
		</>
	);

}


export default isAuthenticated(Create);
