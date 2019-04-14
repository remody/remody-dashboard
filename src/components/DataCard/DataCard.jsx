import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardBody = styled.div`
    background-color: ${props => props.theme.secondaryBackgroundColor};
    width: 100%;
    padding: 25px;
    margin-bottom: 25px;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CardLeft = styled.div`
    width: 60%;
`;

const CardRight = styled.div`
    width: 40%;
    text-align: right;
    padding-top: 20px;
`;

const MyLink = styled(Link)`
    color: #000000;
    :active,
    :hover {
        text-decoration: none !important;
        color: #000000;
    }
`;

const DataCard = ({ name, rowCount, user: { name: userName }, id }) => {
    return (
        <MyLink to={`/data/info/${id}`}>
            <CardBody>
                <CardLeft>
                    <h3>{name}</h3>
                </CardLeft>
                <CardRight>
                    <div>데이터 수: {rowCount}</div>
                    <div>소유자: {userName}</div>
                </CardRight>
            </CardBody>
        </MyLink>
    );
};
export default DataCard;
