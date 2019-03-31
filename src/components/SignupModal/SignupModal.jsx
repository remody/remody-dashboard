import React, { useState } from "react";
import styled from "styled-components";
import {
    faMailBulk,
    faKey,
    faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalBody, Button, ModalHeader, Input } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";

import { CREATE_USER } from "../../graphql";
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
    color: ${props => props.theme.dangerColor};
`;

const LoadingCenterDiv = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignupModal = props => {
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");
    const [confirmPassword, handleConfirmpassword] = useState("");
    const [name, handleName] = useState("");

    return (
        <Mutation mutation={CREATE_USER}>
            {(signup, { loading, error, data }) => {
                if (data && data.createUser && data.createUser.token) {
                    localStorage.setItem("token", data.createUser.token);
                    props.handleLogin(true);
                }
                return (
                    <Modal
                        isOpen={data ? false : props.isOpen}
                        toggle={() => props.handleSignUpModal(false)}
                        style={{ position: "relative", top: "10%" }}
                    >
                        <ModalHeader
                            toggle={() => props.handleSignUpModal(false)}
                            style={{
                                backgroundColor: Theme.primaryColor,
                                color: Theme.primaryFontColor
                            }}
                        >
                            Sign Up
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
                                            handleEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <label>
                                        <FontAwesomeIcon
                                            icon={faAddressCard}
                                            className="mr-1"
                                        />
                                        Name
                                    </label>
                                    <br />
                                    <Input
                                        onChange={e =>
                                            handleName(e.target.value)
                                        }
                                        value={name}
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
                                            handlePassword(e.target.value)
                                        }
                                        value={password}
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <label>
                                        <FontAwesomeIcon
                                            icon={faKey}
                                            className="mr-1"
                                        />
                                        Password Confirm
                                    </label>
                                    <br />
                                    <Input
                                        type="password"
                                        onChange={e =>
                                            handleConfirmpassword(
                                                e.target.value
                                            )
                                        }
                                        value={confirmPassword}
                                    />
                                </div>
                                <br />
                                {error ? (
                                    <>
                                        <ErrorHeader>
                                            {error.graphQLErrors[0].message}
                                            {"! "}
                                            please try again!
                                        </ErrorHeader>
                                        <br />
                                    </>
                                ) : (
                                    <div />
                                )}
                                {confirmPassword !== "" &&
                                password !== confirmPassword ? (
                                    <>
                                        <ErrorHeader>
                                            Password is not match. Please
                                            confirm password
                                        </ErrorHeader>
                                        <br />
                                    </>
                                ) : (
                                    <div />
                                )}
                                <Button
                                    onClick={() => {
                                        if (password === confirmPassword) {
                                            signup({
                                                variables: {
                                                    email,
                                                    password,
                                                    name
                                                }
                                            });
                                        }
                                    }}
                                >
                                    Sign up
                                </Button>
                            </ModalBody>
                        )}
                        <ModalFooter style={{ textAlign: "center" }}>
                            Welcome Remody!
                        </ModalFooter>
                    </Modal>
                );
            }}
        </Mutation>
    );
};

export default SignupModal;
