import React from "react";
import Topbar from "../../components/Topbar";

import DropZoneContainer from "../../containers/DropZoneContainer";

const Interprete = ({ match: { path } }) => (
    <div>
        <Topbar name={path} />
        <DropZoneContainer />
    </div>
);
export default Interprete;
