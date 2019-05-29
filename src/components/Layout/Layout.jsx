import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "components/SideBar";
import UserDropdown from "components/UserDropdown";
import LoginModal from "components/LoginModal";
import SignupModal from "components/SignupModal";
import ChangePasswordModal from "components/ChangePasswordModal";

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
    const [chagePasswordOpen, handleChangePassowordModal] = useState(false);
    return (
        <LayoutNoBar>
            <SideBar />
            <Body className="col-12 col-md-10">
                <LoginModal
                    isOpen={loginOpen}
                    handleLoginModal={state => handleLoginModal(state)}
                    handleSignUpModal={handleSignUpModal}
                    handleChangePassowordModal={handleChangePassowordModal}
                />
                <SignupModal
                    isOpen={signUpOpen}
                    handleSignUpModal={state => handleSignUpModal(state)}
                />
                <ChangePasswordModal
                    isOpen={chagePasswordOpen}
                    handleChangePassowordModal={state =>
                        handleChangePassowordModal(state)
                    }
                    handleLoginModal={state => handleLoginModal(state)}
                />
                <UserDropdown
                    handleLoginModal={state => handleLoginModal(state)}
                    handleSignUpModal={state => handleSignUpModal(state)}
                />
                <div>{props.children}</div>
            </Body>
        </LayoutNoBar>
    );
};

export default Layout;
