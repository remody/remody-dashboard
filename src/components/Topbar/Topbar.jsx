import React from "react";
import styled from "styled-components";
const TopbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${props => props.theme.secondaryBackgroundColor};
    height: 45px;
    padding: 0 20px;
`;

const Topbar = ({ name, clickFunction, state }) => (
    <TopbarDiv>
        <div>{name}</div>
        {clickFunction ? (
            <button
                className="btn btn-primary"
                onClick={() => clickFunction(!state)}
            >
                파일 등록
            </button>
        ) : null}
    </TopbarDiv>
);
export default Topbar;
