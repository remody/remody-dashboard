import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "../SideBar";
import UserDropdown from "../UserDropdown";
import LoginModal from "../LoginModal";
import SigninModal from "../SigninModal";

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
	const [loginOpen, handleLoginModal] = useState(false);
	const [signInOpen, handleSignInModal] = useState(false);
	const [login, handleLogin] = useState(false); //localStorage를 기반으로 re-render을 하기 위해
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
					<LoginModal
						isOpen={loginOpen}
						handleLoginModal={state => handleLoginModal(state)}
						handleSignInModal={handleSignInModal}
						handleLogin={handleLogin}
					/>
					<SigninModal
						isOpen={signInOpen}
						handleSignInModal={state => handleSignInModal(state)}
						handleLogin={handleLogin}
					/>
					<UserDropdown
						handleLoginModal={state => handleLoginModal(state)}
						handleSignInModal={state => handleSignInModal(state)}
						handleLogin={handleLogin}
						login={login}
					/>
					<div>{props.children}</div>
				</Body>
			</LayoutNoBar>
		</div>
	);
};

export default Layout;
