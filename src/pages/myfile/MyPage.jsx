import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import FileContainer from "containers/FileContainer";

import Topbar from "components/Topbar";

const MyFileDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 154px);
`;

const MyFile = ({ match: { path } }) => {
    return (
        <>
            <Topbar name={path} />
            <MyFileDiv>
                <FileContainer />
            </MyFileDiv>
        </>
    );
};
export default MyFile;
