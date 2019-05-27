import React, { useState } from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input
} from "reactstrap";
import { Mutation } from "react-apollo";
import Theme from "Theme";
import { UPLOAD_FILE } from "graphqls";

const DropZoneModal = props => {
    const [inputs, handleInputs] = useState([""]);

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
                                <div>
                                    <Button
                                        color="primary"
                                        onClick={() =>
                                            handleInputs([...inputs, ""])
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faPlusSquare}
                                            className="mr-3"
                                        />
                                        추가하기
                                    </Button>{" "}
                                </div>
                                {inputs.map((item, index) => (
                                    <>
                                        <div style={{ textAlign: "left" }}>
                                            <b>Attribute</b>
                                            <br />
                                            <Input
                                                type="Attribute"
                                                onChange={e => {
                                                    const newState = [
                                                        ...inputs
                                                    ];
                                                    newState[index] =
                                                        e.target.value;
                                                    handleInputs(newState);
                                                }}
                                                value={item}
                                            />
                                        </div>
                                        <br />
                                    </>
                                ))}
                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" onClick={() => {}}>
                                    Save
                                </Button>
                                <Button
                                    color="secondary"
                                    onClick={() => {
                                        handleInputs([""]);
                                        props.handleOpen(false);
                                    }}
                                >
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
