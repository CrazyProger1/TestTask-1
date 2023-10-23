import React from 'react';
import EditDeleteActions from './EditDeleteActions';

const GroupItem = ({number, group, onEdit, onDelete, ...props}) => {
    const {name, description, user_count: userCount} = group;
    return (
        <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>
                <EditDeleteActions
                    onEdit={() => onEdit(group)}
                    onDelete={() => onDelete(group)}
                    deleteInactive={userCount > 0}
                />
            </td>
        </tr>
    );
};

export default GroupItem;