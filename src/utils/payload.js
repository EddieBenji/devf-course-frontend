export default function () {
	const token = localStorage.getItem('blogToken');
	if (!token) {
		return {
			isAuthenticated: false,
			user: undefined
		};
	}
	const baseUri = token.split('.')[1];
	const base64 = baseUri.replace('-', '+').replace('_', '/');
	const payload = JSON.parse(window.atob(base64));

	return {
		isAuthenticated: true,
		user: {
			...payload
		}
	};
}
