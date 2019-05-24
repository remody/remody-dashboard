import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "../SideBar";
import UserDropdown from "../UserDropdown";
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";
import ChangePasswordModal from "../ChangePasswordModal";

import DropZoneModal from "../DropZoneModal";

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

    const [updateOpen, handleDropZoneModal] = useState(false);
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

                <DropZoneModal
                    isOpen={updateOpen}
                    handleDropZoneModal={state => handleDropZoneModal(state)}
                />

                <div>{props.children}</div>
            </Body>
        </LayoutNoBar>
    );
};

export default Layout;
