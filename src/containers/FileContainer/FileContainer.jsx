import React, { useState } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { useQuery } from "react-apollo-hooks";
import ReactLoading from "react-loading";

import { ME } from "graphqls";

import Theme from "Theme";

const FileContainerDiv = styled.div`
    padding: 30px 0px;
    width: calc(100% - 30px);
    text-align: left;
`;

const LoadingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BackGround = styled.div`
    background-color: ${props => props.theme.secondaryBackgroundColor};
    padding: 20px;
`;

const FileContainer = () => {
    const [user, changeUserState] = useState(false);
    const { data, error, loading } = useQuery(ME);

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
            <LoadingDiv className="text-center">
                <h3>
                    홈페이지 접속이 원활하지 않습니다.
                    <br />
                    다시 한번 시도해 주세요.
                </h3>
            </LoadingDiv>
        );
    }
    if (!user) {
        changeUserState(data.me);
    }
    return (
        <FileContainerDiv>
            <h3>내 정보</h3>
            <BackGround>ffff</BackGround>
        </FileContainerDiv>
    );
};
export default FileContainer;
