import React from "react";
import Topbar from "components/Topbar";
import DropZoneModal from "components/DropZoneModal";
import DropZoneContainer from "containers/DropZoneContainer";

const Interprete = ({ match: { path } }) => (
    <div>
        <Topbar name={path} />
        <DropZoneContainer />
        <DropZoneModal />
    </div>
);
export default Interprete;
