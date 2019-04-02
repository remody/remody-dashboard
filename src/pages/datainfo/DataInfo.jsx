import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import Topbar from "../../components/Topbar";

const DataInfoDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 90px);
`;

const DataInfo = ({ match: { path } }) => {
    return (
        <>
            <Topbar name={path} />
            <DataInfoDiv className="container">
                <div />
            </DataInfoDiv>
        </>
    );
};
export default DataInfo;
