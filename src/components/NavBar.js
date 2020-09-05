import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";
import {routesMap} from '../routes';
import { SearchForm } from './SearchForm';

export const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="navbar" bg="primary" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link className="logo" to="/">SWAPI</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
			 	<Navbar.Collapse id="responsive-navbar-nav" className="toggle">
					<Nav className="mr-auto ml-5">
						<NavLink exact to={routesMap.home} className="nav-link" activeClassName="active">Home</NavLink>
						<NavLink to={routesMap.compare} className="nav-link" activeClassName="active">Compare</NavLink>
					</Nav>
					<SearchForm />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}