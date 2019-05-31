import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import PaperContainer from "containers/PaperContainer";
import Topbar from "components/Topbar";
import UploadSearchModal from "components/UploadSearchModal";

const SearchDiv = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 90px);
`;

const Search = ({ match: { path } }) => {
    const [isOpen, handleUploadSearchModal] = useState(false);
    return (
        <>
            <Topbar
                name={path}
                clickFunction={handleUploadSearchModal}
                state={isOpen}
                buttonName="파일 추가"
            />
            <SearchDiv>
                <PaperContainer />
                <UploadSearchModal
                    isOpen={isOpen}
                    handleUploadSearchModal={handleUploadSearchModal}
                />
            </SearchDiv>
        </>
    );
};
export default Search;
