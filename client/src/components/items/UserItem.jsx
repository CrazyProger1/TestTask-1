import React from 'react';
import Button from "react-bootstrap/Button";
import {ButtonGroup} from "react-bootstrap";

const UserItem = ({number, user, onDelete, onEdit, ...props}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group}</td>
            <td>
                <ButtonGroup size="sm" className="mb-2">
                    <Button onClick={event => onEdit(user)}>
                        Edit
                    </Button>
                    <Button onClick={event => onDelete(user)}>
                        Delete
                    </Button>
                </ButtonGroup>

            </td>
        </tr>
    );
};

export default UserItem;