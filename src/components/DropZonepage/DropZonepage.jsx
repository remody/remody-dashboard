import React from 'react';
//import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Dropzone from 'react-dropzone';

//import DropZoneModal from "../DropZoneModal";
/*const DropFile = styled.div`
    color: blue;
`;*/

const UPLOAD_FILE = gql`
    mutation singleUpload($file: Upload!) {
        singleUpload(file: $file) {
            filename
        }
    }
`;

const DropZonepage = () => {
    return (
        <Mutation mutation={UPLOAD_FILE}>
            {uploadFile => (
                <Dropzone onDrop = {([file]) => uploadFile({variable: {file} })}>
                    <p>File DropZone</p>      
                </Dropzone>
            )}
        </Mutation> 
    );
}


export default DropZonepage;