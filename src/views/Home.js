import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';
import Footer from '../components/Footer';

const ALL_POSTS = gql`
    query LIST_POSTS {
        listPosts {
            _id,
            title
        }

    }
`;


function Home() {
	const { data, loading, error } = useQuery(ALL_POSTS);
	if (error) {
		return <h4>Internal error</h4>;
	}

	return (
		<>
			<Navbar/>
			<Header/>
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						{
							loading ? <h4>Loading ...</h4>
								: data.listPosts.map(post => (
									<PostPreview
										_id={post._id}
										title={post.title}
										key={post._id}/>
								))
						}
					</div>
				</section>
			</main>
			<Footer/>
		</>

	);
}

export default Home;
