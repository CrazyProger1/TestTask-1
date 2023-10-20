import React, {useState} from 'react';
import UserItem from "./UserItem";


const UserTable = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'crazyproger1',
            created: '18.10.2023',
            group: 'Users',
        },
        {
            id: 2,
            username: 'testuser',
            created: '30.10.2040',
            group: 'Users',
        },
        {
            id: 3,
            username: 'admin',
            created: '12.11.2023',
            group: 'Admins',
        },
    ]);

    const editUser = (user) => {
        console.log(user);
    }


    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Created</th>
                <th scope="col">Group</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>

            {users.map((user, index) =>
                <UserItem user={user} editUser={editUser} number={index + 1} key={user.id}/>
            )}

        </table>
    );
};

export default UserTable;