import React, { useState } from "react";
import styled from "styled-components";
import { Modal, ModalBody, Button, ModalHeader, Input } from "reactstrap";
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";
import Dropzone from "react-dropzone";

import { LOGIN } from "graphqls";
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

const DropzoneDiv = styled.div`
    border: 1px solid #ced4da;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 2.9;
`;

const UploadSearchModal = props => {
    const [title, handleTitle] = useState("");
    const [author, handleAuthor] = useState("");
    const [belong, handleBelong] = useState("");
    const [publishedyear, handlePublishedyear] = useState("");
    const [file, handleFile] = useState({});

    return (
        <Mutation mutation={LOGIN}>
            {(login, { loading, error, data }) => {
                return (
                    <Modal
                        isOpen={data ? false : props.isOpen}
                        toggle={() => props.handleUploadSearchModal(false)}
                        style={{ position: "relative", top: "10%" }}
                    >
                        <ModalHeader
                            toggle={() => props.handleUploadSearchModal(false)}
                            style={{
                                backgroundColor: Theme.primaryColor,
                                color: Theme.primaryFontColor
                            }}
                        >
                            파일 등록
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
                                    <label>Title</label>
                                    <br />
                                    <Input
                                        type="email"
                                        onChange={e =>
                                            handleTitle(e.target.value)
                                        }
                                        value={title}
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <label>Author</label>
                                    <br />
                                    <Input
                                        onChange={e =>
                                            handleAuthor(e.target.value)
                                        }
                                        value={author}
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <label>Belong</label>
                                    <br />
                                    <Input
                                        onChange={e =>
                                            handleBelong(e.target.value)
                                        }
                                        value={belong}
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <label>Published Year</label>
                                    <br />
                                    <Input
                                        type="number"
                                        onChange={e =>
                                            handlePublishedyear(e.target.value)
                                        }
                                        value={publishedyear}
                                    />
                                </div>
                                <br />
                                <Dropzone onDrop={([file]) => handleFile(file)}>
                                    {({ getRootProps, getInputProps }) => {
                                        return (
                                            <section>
                                                <div {...getRootProps()}>
                                                    <input
                                                        {...getInputProps()}
                                                    />
                                                    <DropzoneDiv>
                                                        {file.name
                                                            ? `파일명: ${
                                                                  file.name
                                                              }`
                                                            : "여기에 파일을 올려주세요!"}
                                                    </DropzoneDiv>
                                                </div>
                                            </section>
                                        );
                                    }}
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
                                        login({
                                            variables: {
                                                title,
                                                author,
                                                belong,
                                                publishedyear,
                                                file
                                            }
                                        });
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

export default UploadSearchModal;
