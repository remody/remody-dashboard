import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBarHead = styled.div`
	display: flex;
	flex-direction: column;
	height: 100px;
	border-bottom: 1px solid #fff;
	justify-content: center;
	padding: 0 15px;
`;

const SideBarItemContainer = styled.div``;

const SideBarItemDiv = styled.div`
	border-bottom: 1px solid #fff;
	display: flex;
	align-items: center;
	height: 40px;
	padding: 0 15px;
`;

const SideBarItem = ({ url, name }) => (
	<SideBarItemDiv>
		<Link style={{ color: "#000" }} to={url}>
			{name}
		</Link>
	</SideBarItemDiv>
);

const SideBar = props => {
	const sideItemArray = [
		{
			url: "/",
			name: "Home"
		},
		{
			url: "/data",
			name: "Data"
		},
		{
			url: "/analyze",
			name: "Analyze"
		},
		{
			url: "/interprete",
			name: "Interprete"
		}
	];
	return (
		<div>
			<SideBarHead className="mt-2">
				<h3>Remedy : </h3>
				<div>Remodify your pages!</div>
			</SideBarHead>
			<SideBarItemContainer>
				{sideItemArray.map(({ url, name }) => (
					<SideBarItem key={name} name={name} url={url} />
				))}
			</SideBarItemContainer>
		</div>
	);
};

export default SideBar;
