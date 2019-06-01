import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { useQuery } from "react-apollo-hooks";
import ReactLoading from "react-loading";

import { MY_FILES, DELETE_USER_SCHEMA, DELETE_PAPER } from "graphqls";

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

const Margins = styled.div`
    height: 30px;
    width: 100%;
`;

const PaperDeleteButton = ({ id }) => {
    return (
        <Mutation mutation={DELETE_PAPER}>
            {(deletePaper, { loading, data }) => {
                if (data) {
                    window.location.reload();
                }
                return (
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            deletePaper({
                                variables: {
                                    id
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
                            "삭제"
                        )}
                    </button>
                );
            }}
        </Mutation>
    );
};

const UserSchemaDeleteButton = ({ id }) => {
    return (
        <Mutation mutation={DELETE_USER_SCHEMA}>
            {(deletePaper, { loading, data }) => {
                if (data) {
                    window.location.reload();
                }
                return (
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            deletePaper({
                                variables: {
                                    id
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
                            "삭제"
                        )}
                    </button>
                );
            }}
        </Mutation>
    );
};

const MyPapers = ({ papers }) => {
    return (
        <>
            <h3>내 논문</h3>
            <BackGround>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Belong</th>
                            <th scope="col">조작</th>
                        </tr>
                    </thead>
                    <tbody>
                        {papers.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.belong}</td>
                                <td>
                                    <PaperDeleteButton id={item.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </BackGround>
        </>
    );
};

const MySchemas = ({ schemas }) => {
    return (
        <>
            <h3>내 데이터</h3>
            <BackGround>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Keyword</th>
                            <th scope="col">RowCount</th>
                            <th scope="col">조작</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schemas.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>
                                    {item.columns.map(item => (
                                        <span key={item.id}>{item.name} </span>
                                    ))}
                                </td>
                                <td>{item.rowCount}</td>
                                <td>
                                    <UserSchemaDeleteButton id={item.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </BackGround>
        </>
    );
};

const FileContainer = () => {
    const { data, error, loading } = useQuery(MY_FILES);

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
                <h3>로그인이 안 되어 있으면 이용 할 수 없습니다.</h3>
            </LoadingDiv>
        );
    }
    return (
        <FileContainerDiv>
            <MyPapers papers={data.me.Papers} />
            <Margins />
            <MySchemas schemas={data.me.UserSchemas} />
        </FileContainerDiv>
    );
};
export default FileContainer;
