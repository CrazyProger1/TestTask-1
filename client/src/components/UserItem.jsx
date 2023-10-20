import React from 'react';

const UserItem = ({user, number, editUser, ...props}) => {


    return (
        <tbody>
        <tr>
            <th scope="row">{number}</th>
            <td>{user.username}</td>
            <td>{user.created}</td>
            <td>{user.group}</td>
            <td>
                <button onClick={event => {
                    editUser(user)
                }}>
                    Edit
                </button>
            </td>
        </tr>
        </tbody>
    );
};

export default UserItem;