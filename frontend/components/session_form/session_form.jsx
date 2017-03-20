import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentWillReceiveProps(newProps) {
		if (this.props.formType !== newProps.formType) {
			this.props.clearErrors();
		}
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user})
			.then(() => this.props.router.push("/courses/add"));
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul className="login-error">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to {this.props.formType+'!'}
					<br/>
					{this.navLink()}
					<div className="login-form">
						<br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input"
								placeholder="username"
							/>
						<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
								placeholder="password"
							/>
						<br/>
						<input type="submit" value={this.props.formType} />
						{this.renderErrors()}
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
