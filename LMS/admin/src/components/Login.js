import React, { Component } from 'react';
import { Button, Container, Tabs, Tab, Form } from 'react-bootstrap';
import Navigation from './NavBar';
import '../CSS/lms.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailRequired: '',
			passwordRequired: '',
		};
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleUserLogin = (event) => {
		event.preventDefault();
		let data = {
			// name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		};
		if (this.validateUser()) {
			//this.props.userLogin(data, this.props.history);
			console.log(data);
		}
	};

	validateUser = () => {
		let flag = true;
		this.setState({
			emailRequired: '',
			passwordRequired: '',
		});
		if (this.state.email.trim().length === 0) {
			this.setState({ emailRequired: '*Required' });
			flag = false;
		}
		if (this.state.password.length === 0) {
			this.setState({ passwordRequired: '*Required' });
			flag = false;
		}
		console.log(flag);
		return flag;
	};

	render() {
		return (
			<div>
				<Navigation></Navigation>
				<Container>
					<div className="login u-dimension-1">
						<Tabs>
							<Tab eventKey={1} title="Sign In as Customer">
								<h3 className="pt-5">Sign In with your GrubHub Account</h3>
								<Form className="pt-2">
									<Form.Group>
										<Form.Label>Email</Form.Label>
										<Form.Control name="email" onChange={this.handleChange} required={true}></Form.Control>
										<div style={{ fontSize: 12, color: 'red' }} className="text-center">
											{this.state.emailRequired}
										</div>
									</Form.Group>
									<Form.Group>
										<Form.Label>Password</Form.Label>
										<Form.Control
											name="password"
											type="password"
											onChange={this.handleChange}
										></Form.Control>
										<div style={{ fontSize: 12, color: 'red' }} className="text-center">
											{this.state.passwordRequired}
										</div>
									</Form.Group>
									<Form.Group>
										<Button
											variant="primary"
											type="submit"
											className="btn-block"
											onClick={this.handleUserLogin}
										>
											Sign In
										</Button>
									</Form.Group>
								</Form>
								<div className="text-center">
									<a href="/UserLogin">Create your Account</a>
								</div>
							</Tab>
						</Tabs>
					</div>
				</Container>
			</div>
		);
	}
}

export default Login;
