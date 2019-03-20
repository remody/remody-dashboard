import React from "react";
import styled from "styled-components";
import {
	faDatabase,
	faHome,
	faArchive,
	faAtlas
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import Theme from "../../Theme";

const SideBarWrapper = styled.div`
	background-color: ${props => props.theme.secondaryBackgroundColor};
	height: 100vh;
	padding: 0 !important;
	box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
`;

const SideBarHead = styled.div`
	display: flex;
	flex-direction: column;
	height: 90px;
	justify-content: center;
	padding: 0 15px;
	color: ${props => props.theme.primaryFontColor};
`;

const SideBarLink = styled(NavLink)`
	padding: 15px 35px 15px 20px;
	font-size: ${props => props.theme.secondaryFontSize};
	border-left: ${props =>
		props.active ? "3px solid " + props.theme.activeColor : ""};
	color: #000;
	text-decoration: none;
	display: block;
	&:hover {
		background: rgba(0, 0, 0, 0.07);
	}
`;

const SideBarItem = ({ url, name, icon }) => (
	<SideBarLink
		exact
		activeStyle={{ borderLeft: `3px solid ${Theme.activeColor}` }}
		to={url}
	>
		<FontAwesomeIcon icon={icon} className="mr-2" />
		{name}
	</SideBarLink>
);

const SideBar = () => {
	const sideItemArray = [
		{
			url: "/",
			name: "Home",
			icon: faHome
		},
		{
			url: "/data",
			name: "Data",
			icon: faDatabase
		},
		{
			url: "/analyze",
			name: "Analyze",
			icon: faAtlas
		},
		{
			url: "/interprete",
			name: "Interprete",
			icon: faArchive
		}
	];
	return (
		<SideBarWrapper className="col-3 d-none d-md-block">
			<SideBarHead>
				<h5>Remody : </h5>
				<div>Remodify your pages!</div>
			</SideBarHead>
			<div>
				{sideItemArray.map(({ url, name, icon }) => (
					<SideBarItem key={name} name={name} url={url} icon={icon} />
				))}
			</div>
		</SideBarWrapper>
	);
};

export default SideBar;
