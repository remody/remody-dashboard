import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../components/CommonHome/PageTitle";
import UsersOverview from "../../components/CommonHome/UsersOverview";
import UsersByDevice from "../../components/CommonHome/UsersByDevice";
import HomeIntro from "./HomeIntro";
import HomePosts from "./HomePosts";

const HomeContainer = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <PageTitle
                sm="4"
                title="Remody Introduce"
                subtitle="Convert"
                className="text-sm-left"
            />
        </Row>
        <Row>
            <HomeIntro />
        </Row>

        <Row noGutters className="page-header py-4">
            <PageTitle
                title="Data Chart"
                subtitle="Analysis"
                className="text-sm-left mb-3"
            />
        </Row>
        <Row>
            {/* Users Overview */}
            <Col lg="8" md="12" sm="12" className="mb-4">
                <UsersOverview />
            </Col>

            {/* Users by Device */}
            <Col lg="4" md="6" sm="12" className="mb-4">
                <UsersByDevice />
            </Col>
        </Row>

        <HomePosts />
    </Container>
);

export default HomeContainer;
