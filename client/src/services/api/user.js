import {makeRequest} from './api';


export const createUser = async (user) => {
    return await makeRequest({
            method: 'POST',
            url: '/users/',
            data: user
        }
    )
}

export const getUsers = async (offset, limit) => {
    return await makeRequest({
        method: 'GET',
        url: '/users/'
    })
}

export const updateUser = async (id, user) => {
    return await makeRequest({
        method: 'PUT',
        url: `/users/${id}/`,
        data: user
    })
}

export const deleteUser = async (id) => {
    return await makeRequest({
        method: 'DELETE',
        url: `/users/${id}/`
    })
}