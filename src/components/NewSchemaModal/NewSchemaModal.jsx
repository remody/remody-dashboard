import React, { useState } from "react";
import styled from "styled-components";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalBody, Button, ModalHeader, Input } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";

import { UPLOAD_FOR_SEARCH } from "graphqls";
import Theme from "Theme";

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
    color: red;
`;

const LoadingCenterDiv = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Attribute = styled.label`
    position: relative;
    top: 6px;
    width: 100px;
    text-align: left;
`;

const NewSchemaModal = props => {
    const [inputs, changeInputs] = useState([""]);
    const [name, changeName] = useState("");
    const clearInputs = () => {
        changeName("");
        changeInputs([""]);
    };
    return (
        <Mutation mutation={UPLOAD_FOR_SEARCH}>
            {(uploadForSearch, { loading, error, data }) => {
                if (data) {
                    window.location.reload();
                }
                return (
                    <Modal
                        isOpen={props.isOpen}
                        toggle={() => props.handleNewSchemaModal(false)}
                        style={{ position: "relative", top: "10%" }}
                    >
                        <ModalHeader
                            toggle={() =>
                                clearInputs() &&
                                props.handleNewSchemaModal(false)
                            }
                            style={{
                                backgroundColor: Theme.primaryColor,
                                color: Theme.primaryFontColor
                            }}
                        >
                            새 스키마 생성
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
                                <div className="d-flex">
                                    <Attribute>이름</Attribute>
                                    <Input
                                        value={name}
                                        onChange={e =>
                                            changeName(e.target.value)
                                        }
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "right" }}>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            changeInputs([...inputs, ""])
                                        }
                                    >
                                        속성추가
                                        <FontAwesomeIcon
                                            icon={faPlusSquare}
                                            className="ml-1"
                                        />
                                    </button>
                                </div>
                                <br />
                                {inputs.map((item, index) => (
                                    <>
                                        <div className="d-flex">
                                            <Attribute>
                                                Attribute {index + 1}
                                            </Attribute>
                                            <Input
                                                value={item}
                                                onChange={e => {
                                                    const newState = [
                                                        ...inputs
                                                    ];
                                                    newState[index] =
                                                        e.target.value;
                                                    changeInputs(newState);
                                                }}
                                            />
                                        </div>
                                        <br />
                                    </>
                                ))}
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
                                <Button
                                    onClick={() => {
                                        clearInputs();
                                        props.handleNewSchemaModal(false);
                                    }}
                                >
                                    등록
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

export default NewSchemaModal;
