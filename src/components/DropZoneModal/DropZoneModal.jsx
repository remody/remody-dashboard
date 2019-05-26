import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input
} from "reactstrap";
import { Mutation } from "react-apollo";
//import ReactLoading from "react-loading";
import Theme from "../../Theme";
import { UPLOAD_FILE } from "../../graphqls";

const DropZoneModal = props => {
    const [Attribute, handleAttribute] = useState("");

    return (
        <Mutation mutation={UPLOAD_FILE}>
            {({ loading, error, data }) => {
                return (
                    <div>
                        <Modal
                            isOpen={data ? false : props.isOpen}
                            toggle={() => props.handleDropZoneModal(false)}
                            style={{ position: "relative", top: "10%" }}
                        >
                            <ModalHeader
                                style={{
                                    backgroundColor: Theme.primaryColor,
                                    color: Theme.primaryFontColor
                                }}
                            >
                                Attribute Input
                            </ModalHeader>

                            <ModalBody
                                style={{
                                    padding: "20px 35px",
                                    textAlign: "center"
                                }}
                            >
                                <div style={{ textAlign: "left" }}>
                                    <label>Attribute</label>
                                    <br />
                                    <Input
                                        type="Attribute"
                                        onChange={e =>
                                            handleAttribute(e.target.value)
                                        }
                                        value={Attribute}
                                    />
                                </div>
                                <b>필요한 Attribute 입력값을 넣으시오.</b>
                                <br />
                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" onClick={() => {}}>
                                    Do Something
                                </Button>
                                <Button color="secondary" onClick={() => {}}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                );
            }}
        </Mutation>
    );
};

export default DropZoneModal;
