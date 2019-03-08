import React from "react";
import styled from "styled-components";

import SideBar from "../SideBar";

const LayoutNoBar = styled.div`
	display: flex;
`;

const LeftBar = styled.div`
	background-color: pink;
	height: 100vh;
	padding: 0 !important;
`;

const Body = styled.div`
	background-color: blue;
	height: 100vh;
`;

const Layout = props => {
	return (
		<div>
			<div className="col-12 d-md-none">
				blah blah something in the wood
			</div>
			<LayoutNoBar>
				<LeftBar className="col-3 d-none d-md-block">
					<SideBar />
				</LeftBar>
				<Body className="col-12 col-md-9">{props.children}</Body>
			</LayoutNoBar>
		</div>
	);
};

export default Layout;
