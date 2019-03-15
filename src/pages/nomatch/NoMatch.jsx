import React from "react";
import ErrorLink from "../../components/ErrorLink"

const NoMatch = () => {
    return (
        <div>
           <h1> 죄송하지만 , 페이지를 찾지 못했습니다! </h1>
            <ErrorLink />
        </div>
    );
};

export default NoMatch;