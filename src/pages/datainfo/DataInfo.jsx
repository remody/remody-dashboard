import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import UserTable from "../../components/UserTable";
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
    return (
        <>
            <Topbar name={pathname} />
            <DataInfoDiv className="container">
                <PageDiv className="p-2 p-md-4">
                    <h4>Schema Name: {pathname.substr(path.length + 1)}</h4>
                    <UserTable
                        meta={[
                            { dataField: "name", columnName: "User Name" },
                            { dataField: "price", columnName: "Product Price" }
                        ]}
                    />
                </PageDiv>
            </DataInfoDiv>
        </>
    );
};
export default DataInfo;
