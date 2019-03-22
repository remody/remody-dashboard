import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Topbar from "../../components/Topbar";

const UPLOAD_FILE = gql`
    mutation singleUpload($file: Upload!) {
        singleUpload(file: $file) {
            filename
        }
    }
`;

const uploadOneFile = ({ match: { path } }) => {
    return (
        <>
            <Topbar name={path} />
            <Mutation mutation={UPLOAD_FILE}>
                {uploadFile => (
                    <input
                        type="file"
                        required
                        onChange={({
                            target: {
                                validity,
                                files: [file]
                            }
                        }) => {
                            validity.valid &&
                                uploadFile({
                                    variables: {
                                        file
                                    }
                                });
                        }}
                    />
                )}
            </Mutation>
        </>
    );
};
export default uploadOneFile;
