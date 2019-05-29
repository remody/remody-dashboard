import React, { useState } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";
import { Row, Input, Col } from "reactstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PAPERS } from "graphqls";
import PaperInfoCard from "components/PaperInfoCard";
import Theme from "Theme";
const GET_COUNT = 6;

const PaperContainerDiv = styled.div`
    padding: 30px 0px;
    width: calc(100% - 30px);
    text-align: center;
`;

const LoadingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchBarDiv = styled(Row)`
    padding: 10px;
`;

const SearchBarCol = styled(Col)`
    display: flex;
`;

const SearchBar = styled(Input)`
    margin-bottom: 30px;
`;

const SearchButton = styled.button`
    width: 5em;
    height: calc(1.5em + 0.75rem + 2px);
`;

const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 10px;
    right: 6em;
`;

const FetchMoreButton = styled.button`
    margin: auto;
`;

const PaperContainer = () => {
    let keyword;
    const [input, changeInput] = useState("");
    const [canGetMore, changeGetMore] = useState(true);
    return (
        <Query query={PAPERS} variables={{ first: GET_COUNT }}>
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
                        <LoadingDiv>
                            <h3>
                                홈페이지 접속이 원활하지 않습니다.
                                <br />
                                다시 한번 시도해 주세요.
                            </h3>
                        </LoadingDiv>
                    );
                }
                return (
                    <PaperContainerDiv>
                        <SearchBarDiv>
                            <Col xs="0" sm="3" md="6" lg="8">
                                {" "}
                            </Col>
                            <SearchBarCol xs="12" sm="9" md="6" lg="4">
                                <SearchBar
                                    value={input}
                                    onChange={e => changeInput(e.target.value)}
                                />
                                <SearchButton
                                    className="btn btn-primary"
                                    onClick={() => {
                                        keyword = input;
                                        fetchMore({
                                            variables: {
                                                first: GET_COUNT,
                                                queryString: keyword
                                            },
                                            updateQuery: (
                                                prev,
                                                { fetchMoreResult }
                                            ) => {
                                                changeGetMore(true);
                                                if (!fetchMoreResult)
                                                    return prev;
                                                if (
                                                    fetchMoreResult.papers
                                                        .length === 0
                                                ) {
                                                    changeGetMore(false);
                                                }
                                                return {
                                                    ...fetchMoreResult,
                                                    papers: [
                                                        ...fetchMoreResult.papers
                                                    ]
                                                };
                                            }
                                        });
                                    }}
                                >
                                    검색
                                </SearchButton>
                                <Icon icon={faSearch} />
                            </SearchBarCol>
                        </SearchBarDiv>
                        <Row>
                            {data.papers.map(
                                ({
                                    author,
                                    id,
                                    title,
                                    publishedyear,
                                    belong,
                                    owner: { name: owner },
                                    url
                                }) => (
                                    <PaperInfoCard
                                        key={id}
                                        author={author}
                                        title={title}
                                        publishedyear={publishedyear}
                                        belong={belong}
                                        owner={owner}
                                        url={url}
                                    />
                                )
                            )}
                        </Row>
                        <FetchMoreButton
                            className="btn btn-primary"
                            disabled={canGetMore ? "" : "disabled"}
                            onClick={() => {
                                fetchMore({
                                    variables: keyword
                                        ? {
                                              after:
                                                  data.papers[
                                                      data.papers.length - 1
                                                  ].id,
                                              first: GET_COUNT,
                                              queryString: keyword
                                          }
                                        : {
                                              after:
                                                  data.papers[
                                                      data.papers.length - 1
                                                  ].id,
                                              first: GET_COUNT
                                          },
                                    updateQuery: (
                                        prev,
                                        { fetchMoreResult }
                                    ) => {
                                        if (!fetchMoreResult) return prev;
                                        if (
                                            fetchMoreResult.papers.length === 0
                                        ) {
                                            changeGetMore(false);
                                        }
                                        return {
                                            ...fetchMoreResult,
                                            papers: [
                                                ...prev.papers,
                                                ...fetchMoreResult.papers
                                            ]
                                        };
                                    }
                                });
                            }}
                        >
                            더 보기
                        </FetchMoreButton>
                    </PaperContainerDiv>
                );
            }}
        </Query>
    );
};
export default PaperContainer;
