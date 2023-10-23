import React from 'react';
import EditDeleteActions from "./EditDeleteActions";

const UserItem = ({number, user, onEdit, onDelete, ...props}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group === undefined ? null : user.group.name}</td>
            <td>
                <EditDeleteActions
                    onEdit={() => onEdit(user)}
                    onDelete={() => onDelete(user)}
                />
            </td>
        </tr>
    );
};

export default UserItem;