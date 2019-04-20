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
import { UPLOAD_FILE } from "../../graphql";

const DropZoneModal = props => {
    const [Attribute, handleAttribute] = useState("");

    return (
        <Mutation mutation={UPLOAD_FILE}>
            {({ loading, error, data }) => {
                return (
                    <div>
                        <Modal
                            isOpen={data ? false : props.isOpen}
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
                                    <label>E-mail</label>
                                    <br />
                                    <Input
                                        type="Attribute"
                                        onChange={e =>
                                            handleAttribute(e.target.value)
                                        }
                                        value={Attribute}
                                    />
                                </div>
                                <b>
                                    Look at the top right of the page/viewport!
                                </b>
                                <br />
                                Example
                            </ModalBody>
                            <ModalFooter />
                        </Modal>
                    </div>
                );
            }}
        </Mutation>
    );
};

export default DropZoneModal;
