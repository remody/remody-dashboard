import React from "react";
import styled from "styled-components";
import { DropdownItem } from "reactstrap";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
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

	//TODO: 로그인 정보를 쿼리(me)로 받고 그에따른 처리

	render() {
		const { isOpen } = this.state;
		return (
			<UserDropdownLeftAlign className="mt-4 d-none d-md-flex">
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
				<Dropdown isOpen={isOpen}>
					<DropdownItem>로그인</DropdownItem>
					<DropdownItem>회원가입</DropdownItem>
					{/* 위가 비로그인 밑이 로그인 */}
					<DropdownItem>내 정보 수정</DropdownItem>
					<DropdownItem>내가 등록한 파일</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>로그아웃</DropdownItem>
				</Dropdown>
			</UserDropdownLeftAlign>
		);
	}
}

export default UserDropdown;
