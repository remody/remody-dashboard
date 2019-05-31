import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import Topbar from "components/Topbar";

const MyPageDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 90px);
`;

const MyPage = ({ match: { path } }) => {
    return (
        <>
            <Topbar name={path} />
            <MyPageDiv>
                <div>에미 시발~</div>
            </MyPageDiv>
        </>
    );
};
export default MyPage;
