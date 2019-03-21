import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "../SideBar";
import UserDropdown from "../UserDropdown";
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";

const LayoutNoBar = styled.div`
	display: flex;
`;

const Body = styled.div`
	height: 100vh;
	background-color: ${props => props.theme.backgroundColor};
	padding: 0 !important;
`;

const Layout = props => {
	const [loginOpen, handleLoginModal] = useState(false);
	const [signUpOpen, handleSignUpModal] = useState(false);
	const [login, handleLogin] = useState(false); //localStorage를 기반으로 re-render을 하기 위해
	return (
		<div>
			<div className="col-12 d-md-none">
				blah blah something in the wood
			</div>
			<LayoutNoBar>
				<SideBar />
				<Body className="col-12 col-md-10">
					<LoginModal
						isOpen={loginOpen}
						handleLoginModal={state => handleLoginModal(state)}
						handleSignUpModal={handleSignUpModal}
						handleLogin={handleLogin}
					/>
					<SignupModal
						isOpen={signUpOpen}
						handleSignUpModal={state => handleSignUpModal(state)}
						handleLogin={handleLogin}
					/>
					<UserDropdown
						handleLoginModal={state => handleLoginModal(state)}
						handleSignUpModal={state => handleSignUpModal(state)}
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
