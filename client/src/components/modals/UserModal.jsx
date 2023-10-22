import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Dropdown, DropdownButton} from "react-bootstrap";
import groupStore from "../../store/GroupStore";

const UserModal = ({heading, show, action, onAction, onClose, user, ...props}) => {
    const [currentGroup, setCurrentGroup] = useState({
        id: null,
        name: null,
        description: null
    })
    const [username, setUsername] = useState(user !== null ? user.username : null)


    const handleGroupChoose = (group) =>
        setCurrentGroup({...group})


    const handleAction = () =>
        onAction({
            "username": username,
            "group": currentGroup
        })


    return (
        <div>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="username"
                                autoFocus
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Group</Form.Label>
                            <DropdownButton id="dropdown-basic-button" title={currentGroup.name}>
                                {groupStore.groups.map(group =>
                                    <Dropdown.Item
                                        onClick={event => handleGroupChoose(group)}>
                                        {group.name}
                                    </Dropdown.Item>
                                )}
                            </DropdownButton>
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAction}>
                        {action}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserModal;