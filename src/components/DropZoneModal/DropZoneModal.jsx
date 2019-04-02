import React from "react";
//import { useDropzone } from "react-dropzone";
import { Modal, Button } from "reactstrap";
//import styled from "styled-components";



class DropZoneModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Custom Width Modal
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            hi
                        </p>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default DropZoneModal;