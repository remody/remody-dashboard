import React from "react";
//import { Query } from "react-apollo";
//import { ALL_USER } from "../../graphql";
import Topbar from "../../components/Topbar";
import HomeContainer from "../../containers/HomeContainer";

const Home = ({ match: { path } }) => (
    <div>
        <Topbar name={path} />
        <HomeContainer />
    </div>
);
export default Home;
