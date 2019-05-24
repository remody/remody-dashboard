import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

import { USER_SCHEMAS } from "../../graphql";
import DataCard from "components/DataCard/DataCard";
import Theme from "../../Theme";

const DataCardContainerDiv = styled.div`
    width: 100%;
`;

const LoadingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DataCardContainerInfo = styled.div`
    text-align: center;
`;

const DataCardContainer = () => {
    return (
        <Query query={USER_SCHEMAS} pollInterval={500}>
            {({ loading, error, data, refetch }) => {
                refetch();
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
                return (
                    <DataCardContainerDiv>
                        {data.userSchemas.map(item => (
                            <DataCard key={item.id} {...item} />
                        ))}
                        <DataCardContainerInfo>
                            <h5>
                                새로운 데이터를 만들려면{" "}
                                <Link to="/Interprete">Extract</Link>로 먼저
                                추출해주세요!
                            </h5>
                        </DataCardContainerInfo>
                    </DataCardContainerDiv>
                );
            }}
        </Query>
    );
};
export default DataCardContainer;
