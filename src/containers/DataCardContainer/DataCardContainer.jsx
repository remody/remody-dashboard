import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import { USER_SCHEMAS } from "../../graphql";
import DataCard from "../../components/DataCard/DataCard";

const DataCardContainerDiv = styled.div`
    width: 100%;
`;

const DataCardContainerInfo = styled.div`
    text-align: center;
`;

const DataCardContainer = () => {
    return (
        <Query query={USER_SCHEMAS}>
            {({ loading, error, data }) => {
                if (loading) {
                    return "Loading";
                }
                if (error) {
                    return "error";
                }
                return (
                    <DataCardContainerDiv>
                        {data.userSchemas.map(item => (
                            <DataCard key={item.id} {...item} />
                        ))}
                        <DataCardContainerInfo>
                            새로운 데이터를 만들려면 Extract로 먼저
                            추출해주세요!
                        </DataCardContainerInfo>
                    </DataCardContainerDiv>
                );
            }}
        </Query>
    );
};
export default DataCardContainer;
