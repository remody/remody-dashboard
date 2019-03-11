import React from "react";
import styled from "styled-components";
import { faMailBulk, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalBody, Button, ModalHeader, Input } from "reactstrap";

const ModalFooter = styled.div`
	padding: 10px 35px;
	border-top: 1px solid rgba(0, 0, 0, 0.15);
	background-color: rgba(255, 192, 203, 0.7);
	transition: background-color 0.5s ease-in-out;
	&:hover {
		background-color: rgba(255, 192, 203, 1);
	}
`;

class LoginModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			emailInput: "",
			passwordInput: ""
		};
	}

	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
				toggle={this.props.handleLoginModal}
				style={{ position: "relative", top: "125px" }}
			>
				<ModalHeader toggle={this.props.handleLoginModal}>
					로그인
				</ModalHeader>
				<ModalBody
					style={{ padding: "20px 35px", textAlign: "center" }}
				>
					<div style={{ textAlign: "left" }}>
						<label>
							<FontAwesomeIcon
								icon={faMailBulk}
								className="mr-1"
							/>
							E-mail
						</label>
						<br />
						<Input type="email" />
					</div>
					<br />
					<div style={{ textAlign: "left" }}>
						<label>
							<FontAwesomeIcon icon={faKey} className="mr-1" />
							Password
						</label>
						<br />
						<Input type="password" />
					</div>
					<br />
					<Button>Login</Button>
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
