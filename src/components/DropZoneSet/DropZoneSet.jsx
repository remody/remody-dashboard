import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Dropzone from "react-dropzone";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import DropZoneModal from "../DropZoneModal";

const DropTag = styled.p`
    height: 200px;
    width: 100%;
    background-color: #fff;
    border: 2px dashed rgb(187, 186, 186);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
`;

const UPLOAD_FILE = gql`
    mutation singleUpload($file: Upload!) {
        singleUpload(file: $file) {
            filename
        }
    }
`;

const DropZoneSet = () => {
    return (
        <Mutation mutation={UPLOAD_FILE}>
            {uploadFile => (
                <Dropzone
                    onDrop={([file]) => uploadFile({ variables: { file } })}
                >
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <DropTag>
                                    <FontAwesomeIcon icon={faDatabase} />
                                    Drag 'n' drop some files here, or click to
                                    select files
                                </DropTag>
                            </div>
                        </section>
                    )}
                </Dropzone>
            )}
        </Mutation>
    );
};

export default DropZoneSet;
