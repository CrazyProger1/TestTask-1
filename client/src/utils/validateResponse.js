export const validateResponse = (response, successStatuses = [200],) => {
    if (!response)
        throw {errors: {'Server': 'the server is not responding'}}

    if (!successStatuses.includes(response.status))
        throw  {errors: response.data}
}