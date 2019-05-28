import React, { useState } from "react";
import styled from "styled-components";
import { Modal, ModalBody, Button, ModalHeader } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";
import Dropzone from "react-dropzone";

import { UPLOAD_FILE } from "graphqls";
import Theme from "Theme";
import pdfImage from "image/pdf.png";

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

const DropzoneDiv = styled.div`
    border: 1px solid #ced4da;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PDFimage = styled.img`
    width: 100px;
    height: 100px;
`;

const UploadFileModal = props => {
    const [file, handleFile] = useState({});
    const clearInput = () => {
        handleFile({});
    };
    return (
        <Mutation mutation={UPLOAD_FILE}>
            {(uploadForFile, { loading, error, data }) => {
                if (data) {
                    window.location.reload();
                }
                return (
                    <Modal
                        isOpen={props.isOpen}
                        toggle={() =>
                            props.handleUploadFileModal({
                                id: "",
                                name: "",
                                open: false
                            })
                        }
                        style={{ position: "relative", top: "10%" }}
                    >
                        <ModalHeader
                            toggle={() =>
                                props.handleUploadFileModal({
                                    id: "",
                                    name: "",
                                    open: false
                                })
                            }
                            style={{
                                backgroundColor: Theme.primaryColor,
                                color: Theme.primaryFontColor
                            }}
                        >
                            PDF 추출
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
                                <h7>저장될 스키마</h7>
                                <h3>{props.userSchema.name}</h3>
                                <br />
                                <Dropzone onDrop={([file]) => handleFile(file)}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <DropzoneDiv>
                                                    <PDFimage
                                                        src={pdfImage}
                                                        alt="img"
                                                    />
                                                    <div>
                                                        {file.name
                                                            ? `파일명: ${
                                                                  file.name
                                                              }`
                                                            : "여기에 pdf 파일을 올려주세요!"}
                                                    </div>
                                                </DropzoneDiv>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
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
                                        uploadForFile({
                                            variables: {
                                                file,
                                                schemaId: props.userSchema.id
                                            }
                                        });
                                        clearInput();
                                    }}
                                >
                                    추출 시작
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

export default UploadFileModal;
