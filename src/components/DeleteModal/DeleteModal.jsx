import React from "react";
import styled from "styled-components";
import { Modal, ModalBody, Button, ModalHeader } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";

import { DELETE_USER_SCHEMA } from "graphqls";
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

const DeleteModal = props => {
    return (
        <Mutation mutation={DELETE_USER_SCHEMA}>
            {(deleteSchema, { loading, error, data }) => {
                if (data) {
                    window.location.reload();
                }
                return (
                    <Modal
                        isOpen={props.isOpen}
                        toggle={() =>
                            props.handleDeleteModal({ open: false, id: "" })
                        }
                        style={{ position: "relative", top: "10%" }}
                    >
                        <ModalHeader
                            toggle={() => {
                                props.handleDeleteModal({
                                    open: false,
                                    id: ""
                                });
                            }}
                            style={{
                                backgroundColor: Theme.primaryColor,
                                color: Theme.primaryFontColor
                            }}
                        >
                            스키마 삭제
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
                                스키마명
                                <h1>{props.userSchema.name}</h1>
                                <h5 className="text-danger">
                                    모든 데이터가 삭제됩니다.
                                    <br /> 정말 삭제하시겠습니까?
                                </h5>
                                <br />
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
                                        deleteSchema({
                                            variables: {
                                                id: props.userSchema.id
                                            }
                                        });
                                        props.handleDeleteModal({
                                            open: false,
                                            id: "",
                                            name: ""
                                        });
                                    }}
                                >
                                    삭제
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

export default DeleteModal;
