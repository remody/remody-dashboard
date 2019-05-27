import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import DataCardContainer from "containers/DataCardContainer";

import Topbar from "components/Topbar";
import NewSchemaModal from "components/NewSchemaModal";
import UploadFileModal from "components/UploadFileModal";

const DataDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 90px);
`;

const Data = ({ match: { path } }) => {
    const [isNewOpen, handleNewSchemaModal] = useState(false);
    const [isUploadOpen, handleUploadFileModal] = useState(true);
    return (
        <>
            <Topbar
                name={path}
                clickFunction={handleNewSchemaModal}
                state={isNewOpen}
                buttonName="유저 스키마 추가"
            />
            <DataDiv className="container">
                <DataCardContainer />
                <NewSchemaModal
                    isOpen={isNewOpen}
                    handleNewSchemaModal={handleNewSchemaModal}
                />
                <UploadFileModal
                    isOpen={isUploadOpen}
                    handleUploadFileModal={handleUploadFileModal}
                />
            </DataDiv>
        </>
    );
};
export default Data;
