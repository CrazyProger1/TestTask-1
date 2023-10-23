import React from 'react';
import Form from "react-bootstrap/Form";
import {Dropdown, DropdownButton} from "react-bootstrap";
import groupStore from "../../store/GroupStore";

const UserForm = ({username, group, onChangeUsername, onChangeGroup, ...props}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    type="username"
                    placeholder="Username"
                    autoFocus
                    value={username}
                    onChange={e => onChangeUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Group</Form.Label>
                <DropdownButton id="dropdown-basic-button" title={group.name}>
                    {groupStore.groups.map(group =>
                        <Dropdown.Item
                            onClick={event => onChangeGroup(group)}>
                            {group.name}
                        </Dropdown.Item>
                    )}
                </DropdownButton>
            </Form.Group>
        </Form>

    );
};

export default UserForm;