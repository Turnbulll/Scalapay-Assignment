const axios = require('axios');
const csvResponse = require('../functions/csvResponse');

async function fetchApi(){
    //Setting up request variables
    const api = 'https://integration.api.scalapay.com/v3/configurations';
    const token = 'qhtfs87hjnc12kkos'
    const header = {
        headers:{
            Authorization: 'Bearer ' + token
        }
    };

    //Calling the endpoint then printing
    return await axios.get(api, header)
    .then((response) => {
        csvResponse(response.data)})
    .catch(err=> console.log(err))
}

module.exports = fetchApi;