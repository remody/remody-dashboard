import React, { useState } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { useQuery } from "react-apollo-hooks";
import ReactLoading from "react-loading";
import { Input } from "reactstrap";

import { ME, DELETE_USER, UPDATE_USER } from "graphqls";

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

const UserCellDiv = styled.div`
    display: flex;
    margin: 10px 0;
`;

const UserCellLabel = styled.label`
    width: 70px;
    position: relative;
    top: 6px;
`;

const UserCell = ({ name, user, attr, changeStatus }) => {
    const changeState = e => {
        const newState = { ...user };
        newState[`${attr}`] = e.target.value;
        changeStatus(newState);
    };
    return (
        <UserCellDiv>
            <UserCellLabel>{name}:</UserCellLabel>
            <Input value={user[`${attr}`]} onChange={changeState} />
        </UserCellDiv>
    );
};

const ButtonRow = ({ user }) => {
    const ButtonRowDiv = styled.div`
        text-align: center;
    `;
    return (
        <ButtonRowDiv>
            <Mutation mutation={UPDATE_USER}>
                {(modifyUser, { loading }) => (
                    <button
                        className="btn m-1 btn-primary"
                        onClick={() => {
                            modifyUser({
                                variables: {
                                    name: user.name,
                                    email: user.email,
                                    belong: user.belong
                                }
                            });
                        }}
                    >
                        {loading ? (
                            <ReactLoading
                                height="20px"
                                width="20px"
                                type="spin"
                                color="white"
                            />
                        ) : (
                            "수정"
                        )}
                    </button>
                )}
            </Mutation>
            <Mutation mutation={DELETE_USER}>
                {(deleteUser, { loading, data }) => {
                    if (data) {
                        localStorage.removeItem("token");
                        window.location.href = "/";
                    }
                    return (
                        <button
                            className="btn m-1 btn-danger"
                            onClick={deleteUser}
                        >
                            {loading ? (
                                <ReactLoading
                                    height="20px"
                                    width="20px"
                                    type="spin"
                                    color="white"
                                />
                            ) : (
                                "삭제"
                            )}
                        </button>
                    );
                }}
            </Mutation>
        </ButtonRowDiv>
    );
};

const UserInfoContainer = () => {
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
        <UserInfoContainerDiv>
            <h3>내 정보</h3>
            <BackGround>
                <UserCell
                    name="이름"
                    user={user}
                    attr="name"
                    changeStatus={changeUserState}
                />
                <UserCell
                    name="이메일"
                    user={user}
                    attr="email"
                    changeStatus={changeUserState}
                />
                <UserCell
                    name="소속"
                    user={user}
                    attr="belong"
                    changeStatus={changeUserState}
                />
                <ButtonRow user={user} />
            </BackGround>
        </UserInfoContainerDiv>
    );
};
export default UserInfoContainer;
