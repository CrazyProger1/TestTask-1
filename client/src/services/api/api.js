import axios from 'axios';
import {BASE_URL, TIMEOUT} from "../../constants/config";


const configuredAxios = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
})

const formResponse = (response) => {
    if (!response)
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

