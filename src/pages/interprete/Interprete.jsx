import React from "react";
import Topbar from "components/Topbar";
import DropZoneModal from "components/DropZoneModal";

const Interprete = ({ match: { path } }) => (
    <div>
        <Topbar name={path} />
        <DropZoneModal />
    </div>
);
export default Interprete;
