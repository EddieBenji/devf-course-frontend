import React from 'react';
import { Link } from 'react-router-dom';
import payload from '../utils/payload';

function Navbar() {
	return (
		// Navigation 
		<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div className="container">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
				        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
				        aria-label="Toggle navigation">
					Menu
					<i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						{
							payload().isAuthenticated ? (
								<>
									<li className="nav-item">
										<Link className="nav-link" to="/">Hi {payload().user.email}</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/logout">Logout</Link>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link className="nav-link" to="/login">Login</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/signup">Signup</Link>
									</li>
								</>
							)
						}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
