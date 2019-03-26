import React, { useState } from "react";
import styled from "styled-components";
import { faMailBulk, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalBody, Button, ModalHeader, Input } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";

import { LOGIN } from "../../graphql";
import Theme from "../../Theme";

const ModalFooter = styled.div`
    padding: 10px 35px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryFontColor};
    opacity: 0.9;
    transition: opacity 0.5s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

const ErrorHeader = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    background-color: red;
`;

const LoadingCenterDiv = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ClickableSentence = styled.div`
    cursor: pointer;
    font-weight: bold;
`;

const LoginModal = props => {
    const [emailInput, handleEmailInput] = useState("");
    const [passwordInput, handlePasswordInput] = useState("");

    return (
        <Mutation mutation={LOGIN}>
            {(login, { loading, error, data }) => {
                if (data && data.login && data.login.token) {
                    localStorage.setItem("token", data.login.token);
                    props.handleLogin(true);
                }
                return (
                    <Modal
                        isOpen={data ? false : props.isOpen}
                        toggle={() => props.handleLoginModal(false)}
                        style={{ position: "relative", top: "10%" }}
                    >
                        <ModalHeader
                            toggle={() => props.handleLoginModal(false)}
                            style={{
                                backgroundColor: Theme.primaryColor,
                                color: Theme.primaryFontColor
                            }}
                        >
                            Login
                        </ModalHeader>
                        {loading ? (
                            <LoadingCenterDiv>
                                <ReactLoading
                                    type="bubbles"
                                    color={Theme.primaryColor}
                                />
                            </LoadingCenterDiv>
                        ) : (
                            <ModalBody
                                style={{
                                    padding: "20px 35px",
                                    textAlign: "center"
                                }}
                            >
                                <div style={{ textAlign: "left" }}>
                                    {error ? (
                                        <ErrorHeader>error</ErrorHeader>
                                    ) : (
                                        <div />
                                    )}
                                    <label>
                                        <FontAwesomeIcon
                                            icon={faMailBulk}
                                            className="mr-1"
                                        />
                                        E-mail
                                    </label>
                                    <br />
                                    <Input
                                        type="email"
                                        onChange={e =>
                                            handleEmailInput(e.target.value)
                                        }
                                        value={emailInput}
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <label>
                                        <FontAwesomeIcon
                                            icon={faKey}
                                            className="mr-1"
                                        />
                                        Password
                                    </label>
                                    <br />
                                    <Input
                                        type="password"
                                        onChange={e =>
                                            handlePasswordInput(e.target.value)
                                        }
                                        value={passwordInput}
                                    />
                                </div>
                                <br />
                                <Button
                                    onClick={() => {
                                        login({
                                            variables: {
                                                email: emailInput,
                                                password: passwordInput
                                            }
                                        });
                                    }}
                                >
                                    Login
                                </Button>
                            </ModalBody>
                        )}
                        <ModalFooter style={{ textAlign: "center" }}>
                            <ClickableSentence
                                onClick={() => {
                                    props.handleLoginModal(false);
                                    props.handleChangePassowordModal(true);
                                }}
                            >
                                Forgot your password?
                            </ClickableSentence>
                            or
                            <ClickableSentence
                                onClick={() => {
                                    props.handleLoginModal(false);
                                    props.handleSignUpModal(true);
                                }}
                            >
                                Sign Up?
                            </ClickableSentence>
                        </ModalFooter>
                    </Modal>
                );
            }}
        </Mutation>
    );
};

export default LoginModal;
