import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";
import PageTitle from "../../components/CommonHome/PageTitle";
class HomePosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // First list of posts.
            PostsListOne: [
                {
                    backgroundImage: require("../../images/content-management/1.jpeg"),
                    category: "Business",
                    categoryTheme: "dark",
                    author: "Anna Kunis",
                    authorAvatar: require("../../images/avatars/1.jpg"),
                    title: "정훈 씨",
                    body:
                        "However venture pursuit he am mr cordial. Forming musical am.",
                    date: "28 February 2019"
                },
                {
                    backgroundImage: require("../../images/content-management/2.jpeg"),
                    category: "Travel",
                    categoryTheme: "info",
                    author: "James Jamerson",
                    authorAvatar: require("../../images/avatars/2.jpg"),
                    title: "이 정도면",
                    body:
                        "Is at purse tried jokes china ready decay an. Small its shy way ...",
                    date: "29 February 2019"
                },
                {
                    backgroundImage: require("../../images/content-management/3.jpeg"),
                    category: "Technology",
                    categoryTheme: "royal-blue",
                    author: "Jimmy Jackson",
                    authorAvatar: require("../../images/avatars/2.jpg"),
                    title: "만족",
                    body:
                        "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.",
                    date: "29 February 2019"
                },
                {
                    backgroundImage: require("../../images/content-management/4.jpeg"),
                    category: "Business",
                    categoryTheme: "warning",
                    author: "John James",
                    authorAvatar: require("../../images/avatars/3.jpg"),
                    title: "하시나요?",
                    body:
                        "How but sons mrs lady when. Her especially are unpleasant out alteration ",
                    date: "29 February 2019"
                }
            ],

            // Second list of posts.
            PostsListTwo: [
                {
                    backgroundImage: require("../../images/content-management/5.jpeg"),
                    category: "Travel",
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
                    category: "Business",
                    categoryTheme: "dark",
                    author: "John James",
                    authorAvatar: require("../../images/avatars/1.jpg"),
                    title:
                        "Totally words widow one downs few age every seven if miss part by fact",
                    body:
                        "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
                    date: "29 February 2019"
                }
            ]
        };
    }

    render() {
        const { PostsListOne, PostsListTwo } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle
                        sm="4"
                        title="Jeong Hoons Category"
                        subtitle="Components"
                        className="text-sm-left"
                    />
                </Row>
                {/* First Row of Posts */}
                <Row>
                    {PostsListOne.map((post, idx) => (
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
                                            href="https://www.naver.com"
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
                                        <a
                                            href="https://www.naver.com"
                                            className="text-fiord-blue"
                                        >
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

                {/* Second Row of Posts */}
                <Row>
                    {PostsListTwo.map((post, idx) => (
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
                                            href="https://www.naver.com"
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
                                        <a
                                            href="https://www.naver.com"
                                            className="text-fiord-blue"
                                        >
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
