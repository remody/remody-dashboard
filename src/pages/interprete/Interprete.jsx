import React from "react";
import Topbar from "../../components/Topbar";
import DropZonepage from "../../components/DropZonepage";

const Interprete = ({ match: { path } }) => (
    <div>
        <Topbar name={path} />
        <DropZonepage />
    </div>
);
export default Interprete;
