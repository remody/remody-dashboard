import React from "react";
import { Query } from "react-apollo";
import { ALL_USER } from "graphqls";
import Topbar from "components/Topbar";

const Home = ({ match: { path } }) => (
  <div>
    <Topbar name={path} />
    <HomeContainer />
  </div>
);
export default Home;
