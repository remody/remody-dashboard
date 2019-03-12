import React from "react";
import styled from "styled-components";
import { faMailBulk, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalBody, Button, ModalHeader, Input } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";

import { LOGIN } from "../../queries";

const ModalFooter = styled.div`
	padding: 10px 35px;
	border-top: 1px solid rgba(0, 0, 0, 0.15);
	background-color: rgba(255, 192, 203, 0.7);
	transition: background-color 0.5s ease-in-out;
	&:hover {
		background-color: rgba(255, 192, 203, 1);
	}
`;

const ErrorHeader = styled.div`
	/* padding: 10px 35px; */
	border-top: 1px solid rgba(0, 0, 0, 0.15);
	background-color: red;
`;

const LoadingCenterDiv = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class LoginModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			emailInput: "",
			passwordInput: ""
		};
	}

	handleEmailInput = event => {
		this.setState({
			emailInput: event.target.value
		});
	};

	handlePasswordInput = event => {
		this.setState({
			passwordInput: event.target.value
		});
	};

	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
				toggle={this.props.handleLoginModal}
				style={{ position: "relative", top: "10%" }}
			>
				<ModalHeader toggle={this.props.handleLoginModal}>
					Login
				</ModalHeader>
				<ModalBody
					style={{ padding: "20px 35px", textAlign: "center" }}
				>
					<Mutation mutation={LOGIN}>
						{(login, { loading, error, data }) => {
							if (loading) {
								return (
									<LoadingCenterDiv>
										<ReactLoading
											type="bubbles"
											color="pink"
										/>
									</LoadingCenterDiv>
								);
							}

							if (data && data.login && data.login.token) {
								console.log(data.login.token);
								return null;
							}

							return (
								<>
									<div style={{ textAlign: "left" }}>
										{error ? (
											<ErrorHeader>error</ErrorHeader>
										) : (
											<div />
										)}
										<label>
											<FontAwesomeIcon
												icon={faMailBulk}
												className="mr-1"
											/>
											E-mail
										</label>
										<br />
										<Input
											type="email"
											onChange={this.handleEmailInput}
											value={this.state.emailInput}
										/>
									</div>
									<br />
									<div style={{ textAlign: "left" }}>
										<label>
											<FontAwesomeIcon
												icon={faKey}
												className="mr-1"
											/>
											Password
										</label>
										<br />
										<Input
											type="password"
											onChange={this.handlePasswordInput}
											value={this.state.passwordInput}
										/>
									</div>
									<br />
									<Button
										onClick={() => {
											login({
												variables: {
													email: this.state
														.emailInput,
													password: this.state
														.passwordInput
												}
											});
										}}
									>
										Login
									</Button>
								</>
							);
						}}
					</Mutation>
				</ModalBody>
				<ModalFooter style={{ textAlign: "center" }}>
					Forgot your password?
					<br />
					or
					<br />
					Create new Email?
				</ModalFooter>
			</Modal>
		);
	}
}

export default LoginModal;
