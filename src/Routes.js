import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Post from './views/Post';
import Signup from './views/Signup';
import Login from './views/Login';

function Routes() {
	return (
		<>
			<Route exact path="/" component={Home}/>
			<Route exact path="/post/:id" component={Post}/>
			<Route exact path="/signup" component={Signup}/>
			<Route exact path="/login" component={Login}/>
		</>
	);
}

export default Routes;