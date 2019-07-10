import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const API_URL = 'https://backendblog.lalo.now.sh/';
// const API_URL = 'http://localhost:4000/';

const httpLink = createHttpLink({
	uri: API_URL
});


const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('blogToken');
	if (!token) {
		return headers;
	}
	return {
		headers: {
			...headers,
			authorization: `JWT ${token}`
		}
	};
});

export default new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});
