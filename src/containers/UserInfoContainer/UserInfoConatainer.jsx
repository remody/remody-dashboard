import React, { useState } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";
import { Input } from "reactstrap";

import { PAPERS } from "graphqls";

import Theme from "Theme";

const UserInfoContainerDiv = styled.div`
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

const UserCell = ({ name, value }) => {
    const UserCellDiv = styled.div`
        display: flex;
        margin: 10px 0;
    `;

    const UserCellLabel = styled.label`
        width: 70px;
        position: relative;
        top: 6px;
    `;
    const [status, changeStatus] = useState(value);
    return (
        <UserCellDiv>
            <UserCellLabel>{name}:</UserCellLabel>
            <Input
                value={status}
                onChange={e => changeStatus(e.target.value)}
            />
        </UserCellDiv>
    );
};

const ButtonRow = () => {
    const ButtonRowDiv = styled.div`
        text-align: center;
    `;
    return (
        <ButtonRowDiv>
            <button className="btn m-1 btn-primary">수정</button>
            <button className="btn  m-1 btn-danger">회원탈퇴</button>
        </ButtonRowDiv>
    );
};

const UserInfoContainer = () => {
    return (
        <Query query={PAPERS} variables={{ first: 6 }}>
            {({ loading, error, data, fetchMore }) => {
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
                return (
                    <UserInfoContainerDiv>
                        <h3>내 정보</h3>
                        <BackGround>
                            <UserCell name="이름" value="" />
                            <UserCell name="이메일" value="" />
                            <UserCell name="소속" value="" />
                            <ButtonRow />
                        </BackGround>
                    </UserInfoContainerDiv>
                );
            }}
        </Query>
    );
};
export default UserInfoContainer;
