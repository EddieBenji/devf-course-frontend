import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from './views/Home';
import Post from './views/Post';
import Signup from './views/Signup';
import Login from './views/Login';
import isAuthenticated from './utils/isAuthenticated';

function Logout() {
	localStorage.removeItem('blogToken');
	return <Redirect to="/login"/>;
}

const SecureLogout = isAuthenticated(Logout);

function Routes() {
	return (
		<>
			<Route exact path="/" component={Home}/>
			<Route exact path="/post/:id" component={Post}/>
			<Route exact path="/signup" component={Signup}/>
			<Route exact path="/login" component={Login}/>
			<Route exact path="/logout" component={SecureLogout}/>
		</>
	);
}

export default Routes;
