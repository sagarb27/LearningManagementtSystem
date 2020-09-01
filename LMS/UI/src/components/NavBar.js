import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
			<Nav className="justify-content-end">
				<NavDropdown title={'sample'} id="basic-nav-dropdown">
					<NavDropdown.Item href="#">
						<i className="clock icon"></i>Past Orders
					</NavDropdown.Item>
					<NavDropdown.Item href="#">
						<i className="calendar alternate icon"></i>Upcoming Orders
					</NavDropdown.Item>
					<NavDropdown.Item href="/Profile">
						<i className="cog icon"></i>Account Setting
					</NavDropdown.Item>
					<NavDropdown.Item href="#">
						<i className="info circle icon"></i>Help
					</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="/login">
					<i className="sign out alternate icon"></i>Login
				</Nav.Link>
			</Nav>
		);
	}
}

export default NavBar;
