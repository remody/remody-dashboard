import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";

import { USER_SCHEMAS } from "graphqls";
import DataCard from "components/DataCard/DataCard";
import Theme from "Theme";

const DataCardContainerDiv = styled.div`
    width: 100%;
    padding: 30px 0;
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

const DataCardContainer = ({ handleSelected, handleDeleted }) => {
    return (
        <Query query={USER_SCHEMAS}>
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
                return (
                    <DataCardContainerDiv>
                        {data.userSchemas.map(item => (
                            <DataCard
                                key={item.id}
                                {...item}
                                handleSelected={handleSelected}
                                handleDeleted={handleDeleted}
                            />
                        ))}
                        <DataCardContainerInfo>
                            <h5>
                                새로운 스키마를 만드시려면 위의{" "}
                                <b className="text-primary">버튼</b>을
                                눌러주세요!
                            </h5>
                        </DataCardContainerInfo>
                    </DataCardContainerDiv>
                );
            }}
        </Query>
    );
};
export default DataCardContainer;
