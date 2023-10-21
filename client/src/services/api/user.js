import configuredAxios from "./api";


export const getUsers = async () => {
    return configuredAxios.get('/users/')
        .then(function (response) {
            return response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {

        });

}


export const deleteUser = async (user) => {
    return configuredAxios.delete(`/users/${user.id}/`)
        .then(function (response) {
            console.log(`'Deleted: ${user}`);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {

        });
}