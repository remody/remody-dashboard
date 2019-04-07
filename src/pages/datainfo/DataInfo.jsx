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

const DataInfo = ({ match: { path } }) => {
    return (
        <>
            <Topbar name={path} />
            <DataInfoDiv className="container">
                <UserTable
                    meta={[
                        { dataField: "name", columnName: "User Name" },
                        { dataField: "price", columnName: "Product Price" }
                    ]}
                />
            </DataInfoDiv>
        </>
    );
};
export default DataInfo;
