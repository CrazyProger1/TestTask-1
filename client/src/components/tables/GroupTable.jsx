import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";

import GroupItem from "../items/GroupItem";
import groupStore from "../../store/GroupStore";
import {observer} from "mobx-react"
import GroupModal from "../modals/GroupModal";
import ErrorModal from "../modals/ErrorModal";


const GroupTable = observer(() => {
    useEffect(() => {
        groupStore.loadGroups();
    }, [])

    const [modalState, setModalState] = useState({
        heading: "Create",
        action: "Create",
        show: false,
        group: null
    })

    const hideModal = () =>
        setModalState({...modalState, show: false})

    const showModal = (heading, action, group) =>
        setModalState({
            show: true,
            group: group,
            heading: heading,
            action: action,
        })


    const showErrorModal = (errors) => {

    }

    const handleEditButtonClick = (group) => {
        showModal(
            "Edit",
            "Save Changes",
            group,
        )
    }


    const handleDeleteButtonClick = (group) =>
        groupStore.deleteGroup(group)


    const handleCreateButtonClick = () => {
        showModal(
            "Create",
            "Create",
        )
    }


    const handleModalCancel = () =>
        hideModal()


    const handleModalAction = (group) => {
        hideModal()

        if (modalState.heading === "Create")
            groupStore.createGroup(group).catch(errors => showErrorModal(errors))
        else
            groupStore.updateGroup(group).catch(errors => showErrorModal(errors))


    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {groupStore.groups.map((group, index) =>
                    <GroupItem
                        number={index + 1}
                        group={group}
                        onDelete={handleDeleteButtonClick}
                        onEdit={handleEditButtonClick}
                        key={group.id}
                    />
                )}
                </tbody>
            </Table>
            <Button size="lg" onClick={handleCreateButtonClick}>
                Add Group
            </Button>
            <GroupModal
                {...modalState}
                onCancel={handleModalCancel}
                onAction={handleModalAction}
            />
        </div>
    );
});

export default GroupTable;