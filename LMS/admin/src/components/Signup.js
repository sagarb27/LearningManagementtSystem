import React, { Component } from 'react';
import { Button, Container, Form, Row, Col, FormGroup } from 'react-bootstrap';
import Navigation from './NavBar';
import '../CSS/lms.css';
import axios from 'axios';

class Signup extends Component {
	constructor(props) {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			emailError: '',
			passwordError: '',
			firstNameError: '',
			lastNameError: '',
		};
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleClick = (event) => {
		event.preventDefault();
		console.log('click');
		if (this.validate()) {
			let data = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
			};
			//this.props.createUser(data, this.props.history);
			axios
				.post('http://localhost:3001/user/createUser', data)
				.then((response) => {
					console.log('Success');
					if (response.status === 200) {
						this.props.history.push('/');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	validate = () => {
		this.setState({
			emailError: '',
			passwordError: '',
		});
		console.log('validate');
		let flag = true;
		console.log(this.state.email);
		if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
			this.setState({
				emailError: 'Inavalid email',
			});
			flag = false;
		}
		if (this.state.password.length < 8) {
			this.setState({
				passwordError: 'Insufficient password length',
			});
			flag = false;
		}
		if (this.state.firstName.length === 0) {
			this.setState({
				firstNameError: 'First Name Required',
			});
			flag = false;
		}
		if (this.state.lastName.length === 0) {
			this.setState({
				lastNameError: 'Last Name Required',
			});
			flag = false;
		}
		return flag;
	};
	render() {
		return (
			<div>
				<Navigation></Navigation>
				<Container>
					<div className="login u-dimension-1">
						<h3>Creae your Account</h3>
						<Form className="pt-3" data-toggle="validator">
							<Row>
								<Col>
									<FormGroup>
										<Form.Label>First Name</Form.Label>
										<Form.Control
											required={true}
											name="firstName"
											onChange={this.handleChange}
										></Form.Control>
										<div style={{ fontSize: 12, color: 'red' }} className="text-center">
											{this.state.firstNameError}
										</div>
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											required={true}
											name="lastName"
											onChange={this.handleChange}
										></Form.Control>
										<div style={{ fontSize: 12, color: 'red' }} className="text-center">
											{this.state.lastNameError}
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Email</Form.Label>
										<Form.Control name="email" onChange={this.handleChange}></Form.Control>
										<div style={{ fontSize: 12, color: 'red' }} className="text-center">
											{this.state.emailError}
										</div>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Password</Form.Label>
										<Form.Control
											name="password"
											type="password"
											onChange={this.handleChange}
										></Form.Control>
										<div style={{ fontSize: 12, color: 'red' }} className="text-center">
											{this.state.passwordError}
										</div>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Button
											variant="primary"
											type="submit"
											className="btn-block"
											onClick={this.handleClick}
										>
											Create Account
										</Button>
									</Form.Group>
								</Col>
							</Row>
						</Form>
						<div className="text-center">
							<p>
								Have an ccount? <a href="/SignIn">Sign In</a>
							</p>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default Signup;
