import React, {useEffect, useState} from 'react';
import CreateEditModal from "./CreateEditModal";
import groupStore from "../../store/GroupStore";
import UserForm from "../forms/UserForm";

const UserModal = ({heading, show, action, user, onAction, onCancel, errors, ...props}) => {
    const [currUsername, setUsername] = useState("")
    const [currGroup, setGroup] = useState({})

    useEffect(() => {
        groupStore.loadGroups();
    }, [])


    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setGroup(user.group)
        }

    }, [user])

    const handleSubmit = () =>
        onAction(
            {
                ...user,
                username: currUsername,
                group: currGroup.id
            })


    return (
        <CreateEditModal
            heading={heading}
            show={show}
            onAction={handleSubmit}
            onCancel={onCancel}
            action={action}>

            <UserForm
                username={currUsername}
                group={currGroup}
                onChangeGroup={setGroup}
                onChangeUsername={setUsername}
            />

        </CreateEditModal>
    );
};

export default UserModal;