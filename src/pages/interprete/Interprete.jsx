import React from "react";
import Topbar from "../../components/Topbar";
import DropZone from "../../components/DropZone";

const Interprete = ({ match: { path } }) => (
    <div>
        <Topbar name={path} />
        <DropZone />
    </div>
);
export default Interprete;
