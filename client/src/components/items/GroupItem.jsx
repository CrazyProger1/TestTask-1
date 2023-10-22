import React from 'react';
import Actions from "./Actions";

const GroupItem = ({number, group, onEdit, onDelete, ...props}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td>
                <Actions
                    onEdit={() => onEdit(group)}
                    onDelete={() => onDelete(group)}
                    deleteInactive={group.user_count > 0}
                />
            </td>
        </tr>
    );
};

export default GroupItem;