import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardBody = styled.div`
    background-color: ${props => props.theme.secondaryBackgroundColor};
    width: 100%;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CardLeft = styled.div`
    position: relative;
    top: 5px;
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CardRight = styled.div`
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const MyLink = styled(Link)`
    color: #000000;
    :active,
    :hover {
        text-decoration: none !important;
        color: #000000;
    }
`;

const Badge = styled.div`
    position: relative;
    top: -1px;
`;

const DataCard = ({
    name,
    rowCount,
    user: { name: userName },
    id,
    handleSelected,
    created,
    columns,
    handleDeleted
}) => {
    return (
        <CardBody className="d-block d-md-flex">
            <CardLeft>
                <h3>{name}</h3>
                <h5>
                    키워드:{" "}
                    {columns.map(item => (
                        <Badge
                            key={item.name}
                            className="badge badge-success mx-1"
                        >
                            {item.name}
                        </Badge>
                    ))}
                </h5>
            </CardLeft>
            <CardRight className="d-flex flex-column-reverse flex-md-column align-items-start align-items-md-end">
                <div>
                    <button
                        className="btn btn-info mr-1"
                        onClick={() => handleSelected({ id, name, open: true })}
                    >
                        pdf추가
                    </button>
                    <MyLink
                        to={created ? "/data" : `/data/info/${id}`}
                        className="mr-1"
                    >
                        <button
                            className={
                                created ? "btn btn-danger" : "btn btn-primary"
                            }
                            disabled={created ? "disabled" : ""}
                        >
                            {created ? "작업중" : "데이터로 이동"}
                        </button>
                    </MyLink>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            handleDeleted({ open: true, id, name });
                        }}
                    >
                        삭제
                    </button>
                </div>
                <div>데이터 수: {rowCount}</div>
                <div>소유자: {userName}</div>
            </CardRight>
        </CardBody>
    );
};
export default DataCard;
