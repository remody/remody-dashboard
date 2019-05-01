import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";

import UserTable from "../../components/UserTable";

import { USER_SCHEMA_INFO } from "../../graphql";
import Theme from "../../Theme";

const LoadingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableContainer = props => {
    return (
        <Query
            query={USER_SCHEMA_INFO}
            variables={{ schemaId: props.schemaName }}
        >
            {({ loading, error, data }) => {
                if (loading) {
                    return (
                        <LoadingDiv>
                            <ReactLoading
                                height="10%"
                                width="10%"
                                type="spin"
                                color={Theme.primaryColor}
                            />
                        </LoadingDiv>
                    );
                }
                if (error) {
                    return (
                        <LoadingDiv>
                            <h3>
                                로그인이 안 되어 있으면 이용 할 수 없습니다.
                            </h3>
                        </LoadingDiv>
                    );
                }
                const columns = data.UserSchemaInfo.fields.map(item => {
                    return {
                        dataField: item,
                        text: item,
                        sort: true
                    };
                });
                return (
                    <UserTable
                        rows={data.UserSchemaInfo.rows}
                        columns={columns}
                        nextId={data.UserSchemaInfo.nextId}
                    />
                );
            }}
        </Query>
    );
};
export default TableContainer;
