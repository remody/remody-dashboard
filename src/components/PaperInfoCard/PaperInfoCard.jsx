import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";

import pdfImage from "image/pdf.png";

const CardBody = styled.div`
    text-align: left;
    background-color: ${props => props.theme.secondaryBackgroundColor};
    width: 100%;
    padding: 25px;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const PDFimage = styled.img`
    position: absolute;
    top: -20px;
    right: 35px;
    width: 45px;
    height: 40px;
`;

const PaperInfoCard = ({ author, owner, title, belong, publishedyear }) => {
    return (
        <Col xs="12" sm="6" md="4">
            <CardBody>
                <h5>{title}</h5>
                저자: {author}
                <br />
                소속: {belong}
                <br />
                발행년도: {publishedyear}
                <br />
                올린이: {owner}
            </CardBody>
            <PDFimage src={pdfImage} alt="img" />
        </Col>
    );
};
export default PaperInfoCard;
