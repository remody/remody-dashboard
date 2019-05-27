import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";
import { Link } from "react-router-dom";

class HomePosts extends React.Component {
    constructor(props) {
        super(props);

        // First list of posts.
        this.PostsListOne = [
            {
                backgroundImage: require("../../images/content-management/1.jpeg"),
                category: "Search",
                categoryTheme: "dark",
                author: "Anna Kunis",
                authorAvatar: require("../../images/avatars/1.jpg"),
                title: "PDF 검색",
                body:
                    "필요한 PDF가 없을 때 홈페이지 내에서 검색을 통해 PDF 분석이 가능",
                date: "/Search"
            },
            {
                backgroundImage: require("../../images/content-management/2.jpeg"),
                category: "Extract",
                categoryTheme: "info",
                author: "James Jamerson",
                authorAvatar: require("../../images/avatars/2.jpg"),
                title: "데이터 입력, 추출",
                body:
                    "다운로드 된 PDF를 넣어서 필요한 속성값을 입력 후 데이터 추출",
                date: "/Extract"
            },
            {
                backgroundImage: require("../../images/content-management/3.jpeg"),
                category: "Data",
                categoryTheme: "royal-blue",
                author: "Jimmy Jackson",
                authorAvatar: require("../../images/avatars/2.jpg"),
                title: "데이터 확인",
                body:
                    "DATA 메뉴에서 관련 로그인 계정의 추출된 데이터가 저장되어 있음",
                date: "/Data"
            },
            {
                backgroundImage: require("../../images/content-management/4.jpeg"),
                category: "DataBase",
                categoryTheme: "warning",
                author: "John James",
                authorAvatar: require("../../images/avatars/3.jpg"),
                title: "DataBase 저장",
                body:
                    "How but sons mrs lady when. Her especially are unpleasant out alteration ",
                date: "/"
            }
        ];

        // Second list of posts.
        this.PostsListTwo = [
            {
                backgroundImage: require("../../images/content-management/5.jpeg"),
                category: "검색자 관련",
                categoryTheme: "info",
                author: "Anna Ken",
                authorAvatar: require("../../images/avatars/0.jpg"),
                title:
                    "Attention he extremity unwilling on otherwise cars backwards yet",
                body:
                    "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
                date: "29 February 2019"
            },
            {
                backgroundImage: require("../../images/content-management/6.jpeg"),
                category: "추출자 관련",
                categoryTheme: "dark",
                author: "John James",
                authorAvatar: require("../../images/avatars/1.jpg"),
                title:
                    "Totally words widow one downs few age every seven if miss part by fact",
                body:
                    "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
                date: "29 February 2019"
            }
        ];
        this.state = {};
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* First Row of Posts */}
                <Row>
                    {this.PostsListOne.map((post, idx) => (
                        <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
                            <Card
                                small
                                className="card-post card-post--1"
                                style={{
                                    borderRadius: "0.625rem"
                                }}
                            >
                                <div
                                    className="card-post__image"
                                    style={{
                                        backgroundImage: `url(${
                                            post.backgroundImage
                                        })`
                                    }}
                                >
                                    <Badge
                                        pill
                                        className={`card-post__category bg-${
                                            post.categoryTheme
                                        }`}
                                    >
                                        {post.category}
                                    </Badge>
                                    <div className="card-post__author d-flex">
                                        <a
                                            href="/"
                                            className="card-post__author-avatar card-post__author-avatar--small"
                                            style={{
                                                backgroundImage: `url('${
                                                    post.authorAvatar
                                                }')`
                                            }}
                                        >
                                            Written by {post.author}
                                        </a>
                                    </div>
                                </div>
                                <CardBody>
                                    <h5 className="card-title">
                                        <a href="/" className="text-fiord-blue">
                                            {post.title}
                                        </a>
                                    </h5>
                                    <p className="card-text d-inline-block mb-3">
                                        {post.body}
                                    </p>
                                    <span className="text-muted">
                                        <Link to={`${post.date}`}>
                                            {post.category}
                                        </Link>
                                    </span>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Second Row of Posts */}
                <Row>
                    {this.PostsListTwo.map((post, idx) => (
                        <Col lg="6" sm="12" className="mb-4" key={idx}>
                            <Card
                                small
                                className="card-post card-post--aside card-post--1"
                                style={{
                                    borderRadius: "0.625rem",
                                    display: "flex",
                                    flexFlow: "row"
                                }}
                            >
                                <div
                                    className="card-post__image"
                                    style={{
                                        backgroundImage: `url('${
                                            post.backgroundImage
                                        }')`
                                    }}
                                >
                                    <Badge
                                        pill
                                        className={`card-post__category bg-${
                                            post.categoryTheme
                                        }`}
                                    >
                                        {post.category}
                                    </Badge>
                                    <div className="card-post__author d-flex">
                                        <a
                                            href="/"
                                            className="card-post__author-avatar card-post__author-avatar--small"
                                            style={{
                                                backgroundImage: `url('${
                                                    post.authorAvatar
                                                }')`
                                            }}
                                        >
                                            Written by Anna Ken
                                        </a>
                                    </div>
                                </div>
                                <CardBody>
                                    <h5 className="card-title">
                                        <a href="/" className="text-fiord-blue">
                                            {post.title}
                                        </a>
                                    </h5>
                                    <p className="card-text d-inline-block mb-3">
                                        {post.body}
                                    </p>
                                    <span className="text-muted">
                                        {post.date}
                                    </span>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default HomePosts;
