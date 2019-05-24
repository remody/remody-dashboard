import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import Topbar from "components/Topbar";
import DataCardContainer from "containers/DataCardContainer";

const DataDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 90px);
`;

const Data = ({ match: { path } }) => {
    return (
        <>
            <Topbar name={path} />
            <DataDiv className="container">
                <DataCardContainer />
            </DataDiv>
        </>
    );
};
export default Data;
