import axios from "axios";


const configuredAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    timeout: 1000,
})

export const formResponse = (response) => {
    if (response === undefined)
        return null;


    return {
        status: response.status,
        data: response.data
    }
}

export const makeRequest = async ({...props}) => {
    return await configuredAxios.request({...props})
        .then(response => {
            return formResponse(response);
        })
        .catch(error => {
            return formResponse(error.response);
        })
}

