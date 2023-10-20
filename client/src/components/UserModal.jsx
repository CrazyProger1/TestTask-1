import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {DropdownButton, Dropdown} from "react-bootstrap";

function UserModal({heading, ...props}) {
    const [show, setShow] = useState(false);
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

    const handleGroupChoose = (group) => {
        setCurrentGroup(group.name)
    }

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Group</Form.Label>
                            <DropdownButton id="dropdown-basic-button" title={currentGroup}>
                                {groups.map((group, index) =>
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserModal;