import React from "react";
import styled from "styled-components";
const TopbarDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: ${props => props.theme.secondaryBackgroundColor};
    height: 45px;
    padding: 0 20px;
`;

const Topbar = props => <TopbarDiv>{props.name}</TopbarDiv>;
export default Topbar;
