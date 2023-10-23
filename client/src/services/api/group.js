import {makeRequest} from './api';


export const createGroup = async (group) =>
    await makeRequest({
            method: 'POST',
            url: '/groups/',
            data: group
        }
    )


export const getGroups = async (offset, limit) =>
    await makeRequest({
        method: 'GET',
        url: '/groups/'
    })


export const updateGroup = async (id, group) =>
    await makeRequest({
        method: 'PUT',
        url: `/groups/${id}/`,
        data: group
    })


export const deleteGroup = async (id) =>
    await makeRequest({
        method: 'DELETE',
        url: `/groups/${id}/`
    })





