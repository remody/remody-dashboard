import React, { useState } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";

import { PAPERS } from "graphqls";
import Theme from "Theme";

const PaperContainerDiv = styled.div`
    width: 100%;
`;

const LoadingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PaperContainer = () => {
    const [lastId, setLastId] = useState("");
    const variables = { first: 3 };
    if (lastId) {
        variables.after = lastId;
    }
    return (
        <Query query={PAPERS} variables={{ first: 3 }}>
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
                                홈페이지 접속이 원활하지 않습니다.
                                <br />
                                다시 한번 시도해 주세요.
                            </h3>
                        </LoadingDiv>
                    );
                }
                return (
                    <PaperContainerDiv>
                        {data.papers.map(item => (
                            <div>{item.title}</div>
                        ))}
                    </PaperContainerDiv>
                );
            }}
        </Query>
    );
};
export default PaperContainer;
