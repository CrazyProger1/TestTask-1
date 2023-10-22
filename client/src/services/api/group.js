import {makeRequest} from "./api";


export const createGroup = async (group) => {
    return await makeRequest({
            method: "POST",
            url: "/groups/",
            data: group
        }
    )
}

export const getGroups = async (offset, limit) => {
    return await makeRequest({
        method: "GET",
        url: "/groups/"
    })
}

export const updateGroup = async (id, group) => {
    return await makeRequest({
        method: "UPDATE",
        url: `/groups/${id}`,
        data: group
    })
}

export const deleteGroup = async (id) => {
    return await makeRequest(
        "DELETE",
        `/groups/${id}`
    )
}




