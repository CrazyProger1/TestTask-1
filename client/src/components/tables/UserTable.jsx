import React, {useEffect} from 'react';

import {observer} from "mobx-react"
import {Button, Table} from "react-bootstrap";

import userStore from "../../store/UserStore";
import UserItem from "../items/UserItem";


const UserTable = observer(() => {
    useEffect(() => {
        userStore.loadUsers();
    }, [])

    const handleUserDelete = (user) => {
        userStore.deleteUser(user)
    }

    const handleUserEdit = (user) => {

    }

    const handleUserCreate = () => {

    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Created</th>
                    <th>Group</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {userStore.users.map((user, index) =>
                    <UserItem
                        number={index + 1}
                        user={user}
                        onDelete={handleUserDelete}
                        onEdit={handleUserEdit}
                        key={user.id}
                    />
                )}
                </tbody>
            </Table>
            <Button size="lg" onClick={handleUserCreate}>
                Create
            </Button>
        </div>

    );
});

export default UserTable;