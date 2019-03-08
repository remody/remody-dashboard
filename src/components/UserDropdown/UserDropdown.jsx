import React from "react";
import styled from "styled-components";
import { DropdownItem } from "reactstrap";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserDropdownLeftAlign = styled.div`
	justify-content: flex-end;
	position: relative;
`;

const Dropdown = styled.div`
	display: ${props => (props.isOpen ? "block" : "none")};
	position: absolute;
	top: 30px;
	right: 12px;
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.25rem;
`;

class UserDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	render() {
		const { isOpen } = this.state;
		return (
			<UserDropdownLeftAlign className="mt-4 d-none d-md-flex">
				UserName
				<FontAwesomeIcon
					icon={faChevronDown}
					className="ml-3 mr-3"
					style={{ position: "relative", top: "5px" }}
					onClick={() => {
						this.setState({ isOpen: !isOpen });
					}}
				/>
				<Dropdown isOpen={isOpen}>
					<DropdownItem header>Header</DropdownItem>
					<DropdownItem disabled>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Another Action</DropdownItem>
				</Dropdown>
			</UserDropdownLeftAlign>
		);
	}
}

export default UserDropdown;
