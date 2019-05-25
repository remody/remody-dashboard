import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import PaperContainer from "containers/PaperContainer";
import Topbar from "components/Topbar";

const SearchDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 90px);
`;

const Search = ({ match: { path } }) => (
    <>
        <Topbar name={path} />
        <SearchDiv>
            <PaperContainer />
        </SearchDiv>
    </>
);
export default Search;
