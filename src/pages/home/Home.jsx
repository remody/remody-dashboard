import React from "react";
import Topbar from "components/Topbar";
import HomeContainer from "containers/HomeContainer";

const Home = ({ match: { path } }) => (
    <div>
        <Topbar name={path} />
        <HomeContainer />
    </div>
);

export default Home;
