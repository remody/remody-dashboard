import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import UserInfoContainer from "containers/UserInfoContainer";

import Topbar from "components/Topbar";

const MyPageDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 154px);
`;

const MyPage = ({ match: { path } }) => {
    return (
        <>
            <Topbar name={path} />
            <MyPageDiv>
                <UserInfoContainer />
            </MyPageDiv>
        </>
    );
};
export default MyPage;
