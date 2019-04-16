import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
//import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

import { USER_SCHEMAS } from "../../graphql";
import DropZoneModal from "../../components/DropZoneModal/DropZoneModal";
import Theme from "../../Theme";

const DropZoneContainerDiv = styled.div`
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
                    <DropZoneContainerDiv>
                        <DropZoneModal />
                    </DropZoneContainerDiv>
                );
            }}
        </Query>
    );
};
export default DataCardContainer;
