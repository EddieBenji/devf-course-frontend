import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import createClient from './mockClient';
import gql from 'graphql-tag';

import Home from '../views/Home';
import PostPreview from '../components/PostPreview';


const ALL_POSTS = gql`
    query LIST_POSTS {
        listPosts {
            _id,
            title
        }

    }
`;

const ALL_POST_MOCK = [{
	request: {
		query: ALL_POSTS
	},
	result: {
		data: {
			listPosts: [
				{ id: 'IIUIFUHF8787SDSFD', title: 'Post 1' },
				{ id: 'IIUIFUHF8787SDSTR', title: 'Post 2' },
				{ id: 'IIUIFUHF8787SDSPO', title: 'Post 3' }
			]
		}
	}
}];

const waitRequest = () => new Promise(resolve => setTimeout(resolve));

describe('<Home/>', () => {
	it('Render works', () => {
		const client = createClient(ALL_POST_MOCK);
		const component = mount(
			<ApolloProvider client={client}>
				<Router>
					<Home/>
				</Router>
			</ApolloProvider>,
		);
		expect(component).toMatchSnapshot();
	});

	it('Render posts works', async () => {
		act(() => {
			const testRequest = async () => {
				const client = createClient(ALL_POST_MOCK);
				await waitRequest();
				const component = mount(
					<ApolloProvider client={client}>
						<Router>
							<Home/>
						</Router>
					</ApolloProvider>,
				);
				// expect(component.find('.post-title')).toHaveLength(3);
				expect(component.find(PostPreview)).toHaveLength(3);

			};
			testRequest();
		});
	});
});
