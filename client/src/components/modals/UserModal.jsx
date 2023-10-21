import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Dropdown, DropdownButton} from "react-bootstrap";

const UserModal = ({heading, show, closeCallback, action, actionCallback, ...props}) => {
    const [currentGroup, setCurrentGroup] = useState("Group 1")
    const [groups, setGroups] = useState([
        {
            id: 1,
            name: 'Group 1',
            description: 'Desc of group 1'
        },
        {
            id: 2,
            name: 'Group 2',
            description: 'Desc of group 2'
        },
        {
            id: 3,
            name: 'Group 3',
            description: 'Desc of group 3'
        }
    ]);

    const [username, setUsername] = useState("")

    const onGroupChoose = (group) => {
        setCurrentGroup(group.name)
    }

    const onAction = () => {
        actionCallback({
            "username": username,
            "group": currentGroup
        })
    }

    return (
        <div>
            <Modal show={show} onHide={closeCallback}>
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
                            <DropdownButton id="dropdown-basic-button" title={currentGroup}>
                                {groups.map((group, index) =>
                                    <Dropdown.Item
                                        onClick={event => onGroupChoose(group)}>
                                        {group.name}
                                    </Dropdown.Item>
                                )}
                            </DropdownButton>
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeCallback}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onAction}>
                        {action}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserModal;