import React, {useEffect, useState} from 'react';
import CreateEditModal from "./CreateEditModal";
import GroupForm from "../foms/GroupForm";


const GroupModal = ({heading, show, action, group, onAction, onCancel, errors, ...props}) => {
    const [currName, setName] = useState("")
    const [currDesc, setDesc] = useState("")

    useEffect(() => {
        if (group) {
            setName(group.name);
            setDesc(group.description)
        }

    }, [group])

    const handleSubmit = (event) => {
        onAction(
            {
                ...group,
                name: currName,
                description: currDesc
            })
    }

    return (
        <CreateEditModal
            heading={heading}
            show={show}
            onAction={handleSubmit}
            onCancel={onCancel}
            action={action}>
            <GroupForm
                name={currName}
                description={currDesc}
                onChangeDesc={setDesc}
                onChangeName={setName}
            />
        </CreateEditModal>
    );
};

export default GroupModal;