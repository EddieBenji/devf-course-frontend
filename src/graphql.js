import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const API_URL = 'https://backendblog.lalo.now.sh/';

const httpLink = createUploadLink({
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
