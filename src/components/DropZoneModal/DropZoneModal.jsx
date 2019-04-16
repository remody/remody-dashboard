import React, { Component } from "react";
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DropZoneSet from "../DropZoneSet";
import styled from "styled-components";

const ProvideDrop = styled.div`
    text-align: center;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

const ProvideDrop2 = styled.div`
    background-color: white;
    padding: 8% 15%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
        0 5px 15px 0 rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
`;

class DropZoneModal extends Component {
    render() {
        return (
            <ProvideDrop>
                <ProvideDrop2>
                    <DropZoneSet />
                </ProvideDrop2>
            </ProvideDrop>
        );
    }
}

export default DropZoneModal;
