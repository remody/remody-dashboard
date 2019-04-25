import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import UserTable from "../../components/UserTable";
import TableContainer from "../../containers/TableContainer";
import Topbar from "../../components/Topbar";

const DataInfoDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 90px);
`;

const PageDiv = styled.div`
    background-color: ${props => props.theme.secondaryBackgroundColor};
`;

const DataInfo = ({ location: { pathname }, match: { path } }) => {
    const SchemaID = pathname.substr(path.length + 1);
    return (
        <>
            <Topbar name={pathname} />
            <DataInfoDiv className="container p-4">
                <PageDiv className="p-2 p-md-4">
                    <h4>Schema ID: {SchemaID}</h4>
                    <TableContainer schemaName={SchemaID} />
                </PageDiv>
            </DataInfoDiv>
        </>
    );
};
export default DataInfo;
