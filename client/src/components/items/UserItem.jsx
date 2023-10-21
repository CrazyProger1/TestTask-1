import React from 'react';

const UserItem = ({user, ...props}) => {
    return (
            <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.created}</td>
                <td>{user.group}</td>
            </tr>
    );
};

export default UserItem;