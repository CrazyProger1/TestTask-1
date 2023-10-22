import React from 'react';
import Actions from "./Actions";

const UserItem = ({number, user, onEdit, onDelete, ...props}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group === undefined ? null : user.group.name}</td>
            <td>
                <Actions
                    onEdit={() => onEdit(user)}
                    onDelete={() => onDelete(user)}
                />
            </td>
        </tr>
    );
};

export default UserItem;