import React, { useState } from "react";
import styled from "styled-components";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalBody, Button, ModalHeader, Input } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";

import { CREATE_TABLE } from "graphqls";
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

const MinusIcon = styled(FontAwesomeIcon)`
    color: red;
    position: relative;
    top: 2px;
    cursor: pointer;
`;

const NewSchemaModal = props => {
    const [inputs, changeInputs] = useState([""]);
    const [name, changeName] = useState("");
    const clearInputs = () => {
        changeName("");
        changeInputs([""]);
    };
    return (
        <Mutation mutation={CREATE_TABLE}>
            {(createTable, { loading, error, data }) => {
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
                            toggle={() => {
                                clearInputs();
                                props.handleNewSchemaModal(false);
                            }}
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
                                <div className="d-flex mb-2">
                                    <Attribute>이름</Attribute>
                                    <Input
                                        value={name}
                                        onChange={e => {
                                            const inputValue = e.target.value;
                                            if (
                                                inputValue[
                                                    inputValue.length - 1
                                                ] !== " "
                                            )
                                                changeName(inputValue);
                                        }}
                                    />
                                </div>
                                <div className="text-right mb-2">
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
                                {inputs.map((item, index) => (
                                    <div key={index}>
                                        <div className="d-flex mb-2">
                                            <Attribute>
                                                속성 {index + 1}
                                            </Attribute>
                                            <Input
                                                value={item}
                                                onChange={e => {
                                                    const inputValue =
                                                        e.target.value;
                                                    if (
                                                        inputValue[
                                                            inputValue.length -
                                                                1
                                                        ] !== " "
                                                    ) {
                                                        const newState = [
                                                            ...inputs
                                                        ];
                                                        newState[
                                                            index
                                                        ] = inputValue;
                                                        changeInputs(newState);
                                                    }
                                                }}
                                            />
                                            <MinusIcon
                                                icon={faMinusSquare}
                                                className="ml-1"
                                                size="2x"
                                                onClick={() => {
                                                    if (inputs.length === 1) {
                                                        console.log("x");
                                                    } else {
                                                        const head = inputs.slice(
                                                            0,
                                                            index
                                                        );
                                                        const tail = inputs.slice(
                                                            index + 1,
                                                            inputs.length
                                                        );
                                                        const newState = [
                                                            ...head,
                                                            ...tail
                                                        ];
                                                        changeInputs(newState);
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                                {error ? (
                                    <>
                                        <ErrorHeader>
                                            {error}
                                            {"! "}
                                            please try again!
                                        </ErrorHeader>
                                        <br />
                                    </>
                                ) : (
                                    <div />
                                )}
                                <Button
                                    className="mb-2"
                                    onClick={() => {
                                        const rows = inputs.map(input => ({
                                            name: input,
                                            type: "VARCHAR",
                                            length: 200
                                        }));
                                        createTable({
                                            variables: {
                                                name,
                                                rows
                                            }
                                        });
                                        clearInputs();
                                        props.handleNewSchemaModal(false);
                                    }}
                                >
                                    등록
                                </Button>
                                <div className="text-danger">
                                    공백 문자는 입력 할 수 없습니다
                                </div>
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
