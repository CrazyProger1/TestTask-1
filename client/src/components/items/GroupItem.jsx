import React from 'react';
import EditDeleteActions from "./EditDeleteActions";

const GroupItem = ({number, group, onEdit, onDelete, ...props}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td>
                <EditDeleteActions
                    onEdit={() => onEdit(group)}
                    onDelete={() => onDelete(group)}
                    deleteInactive={group.user_count > 0}
                />
            </td>
        </tr>
    );
};

export default GroupItem;