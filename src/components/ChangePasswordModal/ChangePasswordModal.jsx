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
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    color: ${props => props.theme.dangerColor};
`;

const LoadingCenterDiv = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChangePasswordModal = props => {
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");
    const [confirmPassword, handleConfirmpassword] = useState("");
    const [accessCode, handleAccessCode] = useState(""); //accesscode를 받아들일 수 있는 상태
    const [step, handleStep] = useState("1"); //Step을 나눠서 사용자에게 보여주는 UI와 이벤트를 다르게 한다

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
                        toggle={() => props.handleChangePassowordModal(false)}
                        style={{ position: "relative", top: "10%" }}
                    >
                        <ModalHeader
                            toggle={() =>
                                props.handleChangePassowordModal(false)
                            }
                            style={{
                                backgroundColor: Theme.primaryColor,
                                color: Theme.primaryFontColor
                            }}
                        >
                            Forgot Your Password?
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
                                            handleEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </div>
                                {step === "2" ? (
                                    <>
                                        <br />
                                        <div>
                                            <div style={{ textAlign: "left" }}>
                                                <label>
                                                    <FontAwesomeIcon
                                                        icon={faAddressCard}
                                                        className="mr-1"
                                                    />
                                                    Access Code
                                                </label>
                                                <br />
                                                <Input
                                                    onChange={e =>
                                                        handleAccessCode(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={accessCode}
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
                                                        handlePassword(
                                                            e.target.value
                                                        )
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
                                        </div>
                                    </>
                                ) : null}
                                <br />
                                <Button
                                    onClick={() => {
                                        if (password === confirmPassword) {
                                            signup({
                                                variables: {
                                                    email
                                                }
                                            });
                                        }
                                    }}
                                >
                                    {step === "1"
                                        ? "Send Mail"
                                        : "Change Password"}
                                </Button>
                            </ModalBody>
                        )}
                        <ModalFooter style={{ textAlign: "center" }}>
                            @2019 Remody Corp.
                        </ModalFooter>
                    </Modal>
                );
            }}
        </Mutation>
    );
};

export default ChangePasswordModal;
