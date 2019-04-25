import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

import { USER_SCHEMA_INFO } from "../../graphql";
import Theme from "../../Theme";

const TableContainerDiv = styled.div`
    width: 100%;
`;

const LoadingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableContainerInfo = styled.div`
    text-align: center;
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
                    console.log(error);
                    return (
                        <LoadingDiv>
                            <h3>
                                로그인이 안 되어 있으면 이용 할 수 없습니다.
                            </h3>
                        </LoadingDiv>
                    );
                }
                console.log(data);
                return (
                    <TableContainerDiv>
                        {/* {data.userSchemas.map(item => (
                            <DataCard key={item.id} {...item} />
                        ))} */}
                        <TableContainerInfo>
                            <h5>
                                새로운 데이터를 만들려면{" "}
                                <Link to="/Interprete">Extract</Link>로 먼저
                                추출해주세요!
                            </h5>
                        </TableContainerInfo>
                    </TableContainerDiv>
                );
            }}
        </Query>
    );
};
export default TableContainer;
