import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DropZonepage from "../DropZonepage";

class DropZoneModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    button
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    modalTransition={{ timeout: 700 }}
                    backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>
                        변경할 파일을 올려주세요.
                    </ModalHeader>
                    <ModalBody>
                        <DropZonepage />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DropZoneModal;
