import React from "react";
import styled from "styled-components";
import { Modal, ModalBody, Button, ModalHeader, ModalFooter } from "reactstrap";

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
				className={this.props.className}
			>
				<ModalHeader toggle={this.props.handleLoginModal}>
					Modal title
				</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</ModalBody>
				<ModalFooter>
					<Button
						color="primary"
						onClick={this.props.handleLoginModal}
					>
						Do Something
					</Button>{" "}
					<Button
						color="secondary"
						onClick={this.props.handleLoginModal}
					>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default LoginModal;
