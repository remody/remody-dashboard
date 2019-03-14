import React from "react";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPLOAD_FILE = gql`
	mutation singleUpload($file: Upload!) {
		singleUpload(file: $file) {
			filename
		}
	}
`;

const uploadOneFile = () => {
	return (
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
						console.log(file);
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
	);
};
export default uploadOneFile;
