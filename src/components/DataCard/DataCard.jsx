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
    position: relative;
    top: 5px;
    width: 60%;
`;

const CardRight = styled.div`
    width: 40%;
    text-align: right;
`;

const MyLink = styled(Link)`
    color: #000000;
    :active,
    :hover {
        text-decoration: none !important;
        color: #000000;
    }
`;

const DataCard = ({
    name,
    rowCount,
    user: { name: userName },
    id,
    handleSelected,
    created,
    columns
}) => {
    return (
        <CardBody>
            <CardLeft>
                <h3>스키마명: {name}</h3>
                <h5>추출 키워드: {columns.map(item => item.name + " ")}</h5>
            </CardLeft>
            <CardRight>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-info mr-1"
                        onClick={() => handleSelected({ id, name, open: true })}
                    >
                        pdf추가
                    </button>
                    <MyLink to={created ? "/data" : `/data/info/${id}`}>
                        <button
                            className={
                                created ? "btn btn-danger" : "btn btn-primary"
                            }
                            disabled={created ? "disabled" : ""}
                        >
                            {created ? "작업중" : "데이터로 이동"}
                        </button>
                    </MyLink>
                </div>
                <div>데이터 수: {rowCount}</div>
                <div>소유자: {userName}</div>
            </CardRight>
        </CardBody>
    );
};
export default DataCard;
