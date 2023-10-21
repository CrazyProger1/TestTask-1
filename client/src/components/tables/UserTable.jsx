import React from 'react';

import {observer} from "mobx-react"
import {Table} from "react-bootstrap";

import userStore from "../../store/UserStore";
import UserItem from "../items/UserItem";


const UserTable = observer(() => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Created</th>
                <th>Group</th>
            </tr>
            </thead>
            <tbody>
            {userStore.users.map(user =>
                <UserItem user={user}/>
            )}
            </tbody>
        </Table>
    );
});

export default UserTable;