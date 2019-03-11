import React from "react";
import styled from "styled-components";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LoginModal from "../LoginModal";

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

const Devider = styled.div`
	display: block;
	width: 100%;
	padding: 0 1.5rem;
	clear: both;
	font-weight: 400;
	color: #212529;
	text-align: inherit;
	white-space: nowrap;
	background-color: transparent;
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	margin: 0.25rem 0;
`;

const DropdownItem = styled.div`
	display: block;
	width: 100%;
	padding: 0.25rem 1.5rem;
	clear: both;
	font-weight: 400;
	color: #212529;
	text-align: inherit;
	white-space: nowrap;
	background-color: transparent;
	border: 0;
	cursor: pointer;
	&:hover,
	&:focus {
		color: #16181b;
		text-decoration: none;
		background-color: #f8f9fa;
	}
`;

class UserDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			modalOpen: false
		};
	}

	//TODO: 로그인 정보를 쿼리(me)로 받고 그에따른 처리

	handleLoginModal = () => {
		console.log(this.state.modalOpen);
		this.setState({
			modalOpen: !this.state.modalOpen
		});
	};

	handleDropDown = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		const { isOpen } = this.state;
		return (
			<UserDropdownLeftAlign className="mt-4 d-none d-md-flex">
				<LoginModal
					isOpen={this.state.modalOpen}
					handleLoginModal={this.handleLoginModal}
				/>
				UserName
				<FontAwesomeIcon
					icon={isOpen ? faChevronUp : faChevronDown}
					className="ml-3 mr-3"
					style={{
						position: "relative",
						top: "5px",
						cursor: "pointer"
					}}
					onClick={() => {
						this.setState({ isOpen: !isOpen });
					}}
				/>
				<Dropdown isOpen={isOpen} toggle={this.handleDropDown}>
					<DropdownItem onClick={this.handleLoginModal}>
						로그인
					</DropdownItem>
					<DropdownItem onClick={this.handleDropDown}>
						회원가입
					</DropdownItem>
					{/* 위가 비로그인 밑이 로그인 */}
					<DropdownItem onClick={this.handleDropDown}>
						내 정보 수정
					</DropdownItem>
					<DropdownItem onClick={this.handleDropDown}>
						내가 등록한 파일
					</DropdownItem>
					<Devider />
					<DropdownItem onClick={this.handleDropDown}>
						로그아웃
					</DropdownItem>
				</Dropdown>
			</UserDropdownLeftAlign>
		);
	}
}

export default UserDropdown;
