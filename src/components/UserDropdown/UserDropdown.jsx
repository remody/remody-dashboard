import React, { useState } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ME } from "../../graphql";
import client from "../../Apollo";

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

const UserDropdown = props => {
	const [isOpen, handleDropDown] = useState(false);
	const token = localStorage.getItem("token");
	return (
		<UserDropdownLeftAlign className="mt-4 d-none d-md-flex">
			{token ? (
				<Query query={ME} variables={{ token: props.token }}>
					{({ loading, error, data }) => {
						if (loading) return "";

						if (error) {
							return "Please reload page!";
						}
						return data.me.name;
					}}
				</Query>
			) : (
				"Please login our Site!"
			)}
			<FontAwesomeIcon
				icon={isOpen ? faChevronUp : faChevronDown}
				className="ml-3 mr-3"
				style={{
					position: "relative",
					top: "5px",
					cursor: "pointer"
				}}
				onClick={() => handleDropDown(!isOpen)}
			/>
			<Dropdown isOpen={isOpen} toggle={() => handleDropDown(!isOpen)}>
				{!token ? (
					<>
						<DropdownItem
							onClick={() => props.handleLoginModal(true)}
						>
							로그인
						</DropdownItem>
						<DropdownItem
							onClick={() => props.handleSignInModal(true)}
						>
							회원가입
						</DropdownItem>
					</>
				) : (
					<>
						<DropdownItem onClick={() => handleDropDown(false)}>
							내 정보 수정
						</DropdownItem>
						<DropdownItem onClick={() => handleDropDown(false)}>
							내가 등록한 파일
						</DropdownItem>
						<Devider />
						<DropdownItem
							onClick={() => {
								localStorage.removeItem("token");
								client.resetStore();
								handleDropDown(false);
							}}
						>
							로그아웃
						</DropdownItem>
					</>
				)}
			</Dropdown>
		</UserDropdownLeftAlign>
	);
};

export default UserDropdown;
