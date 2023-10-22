import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import BaseModal from "./BaseModal";
import {Dropdown, DropdownButton} from "react-bootstrap";
import groupStore from "../../store/GroupStore";

const UserModal = ({heading, show, action, user, onAction, onCancel, errors, ...props}) => {
    const [currUsername, setUsername] = useState("")
    const [currGroup, setGroup] = useState({})

    useEffect(() => {
        groupStore.loadGroups();
    }, [])


    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setGroup(user.group)
        }

    }, [user])

    const handleSubmit = () =>
        onAction(
            {
                ...user,
                username: currUsername,
                group: currGroup.id
            })


    const handleGroupChoose = (group) =>
        setGroup({...group})


    return (
        <BaseModal
            heading={heading}
            show={show}
            onAction={handleSubmit}
            onCancel={onCancel}
            action={action}>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type="username"
                        placeholder="username"
                        autoFocus
                        value={currUsername}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Group</Form.Label>
                    <DropdownButton id="dropdown-basic-button" title={currGroup.name}>
                        {groupStore.groups.map(group =>
                            <Dropdown.Item
                                onClick={event => handleGroupChoose(group)}>
                                {group.name}
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                </Form.Group>
            </Form>

        </BaseModal>
    );
};

export default UserModal;