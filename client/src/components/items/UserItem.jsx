import React from 'react';
import EditDeleteActions from "./EditDeleteActions";

const UserItem = ({number, user, onEdit, onDelete, ...props}) => {
    const {username, created, group} = user;


    return (
        <tr>
            <td>{number}</td>
            <td>{username}</td>
            <td>{created}</td>
            <td>{group?.name ?? null}</td>
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