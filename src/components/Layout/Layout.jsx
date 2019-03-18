import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "../SideBar";
import UserDropdown from "../UserDropdown";
import LoginModal from "../LoginModal";

const LayoutNoBar = styled.div`
	display: flex;
`;

const LeftBar = styled.div`
	background-color: pink;
	height: 100vh;
	padding: 0 !important;
`;

const Body = styled.div`
	height: 100vh;
`;

const Layout = props => {
	const [modalOpen, handleModal] = useState(false);
	const [token, handleToken] = useState("");
	return (
		<div>
			<div className="col-12 d-md-none">
				blah blah something in the wood
			</div>
			<LayoutNoBar>
				<LeftBar className="col-3 d-none d-md-block">
					<SideBar />
				</LeftBar>
				<Body className="col-12 col-md-9">
					<UserDropdown
						handleLoginModal={state => handleModal(state)}
						token={token}
					/>
					<LoginModal
						isOpen={modalOpen}
						handleLoginModal={state => handleModal(state)}
						handleToken={handleToken}
					/>
					<div>{props.children}</div>
				</Body>
			</LayoutNoBar>
		</div>
	);
};

export default Layout;
