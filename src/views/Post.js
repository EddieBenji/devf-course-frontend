import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

const GET_POST_BY_ID = gql`
    query SINGLE_POST($id: ID!) {
        singlePost(id: $id){
            title,
            content,
            coverPhoto
        }
    }
`;

function Post({ match }) {
	const { id } = match.params;
	const { data, loading, error } = useQuery(GET_POST_BY_ID, { variables: { id } });
	if (error) {
		return <h4>Something went wrong</h4>;
	}
	return (
		<>
			{
				loading ? <h4>Loading...</h4> :
					(
						<>
							<Navbar/>
							<Header cover={data.singlePost.coverPhoto}/>
							<article>
								<div className="container">
									<div className="row">
										<div className="col-lg-8 col-md-10 mx-auto">


											<h2>{data.singlePost.title}</h2>
											<p>{data.singlePost.content}</p>
										</div>
									</div>
								</div>
							</article>
						</>

					)
			}

		</>
	);
}

export default Post;
