const axios = require('axios');
const csvResponse = require('../functions/csvResponse');

/* This could be improved by mocking the connection with the api and comparing the data to a dummy set */

//Setting up request variables
const api = 'https://integration.api.scalapay.com/v3/configurations';
const token = 'qhtfs87hjnc12kkos'
const header = {
    headers:{
        Authorization: 'Bearer ' + token
    }
};

test('Succesfully pings api', done => {
    axios.get(api, header)
    .then((response) => {
        expect(response.statusText).toBe("OK");
        done()
    })
    .catch(err=> done(err))
});

test('Succesfully prints data', done => {
    axios.get(api, header)
    .then((response) => {
        console.log = jest.fn();
        csvResponse(response.data);
        expect(console.log.mock.calls[0][0]).toBe('product,type,minAmount,maxAmount')
        expect(console.log.mock.calls[1][0]).toBe('pay-in-3,online,5,2000');
        done()
    })
    .catch(err=> done(err))
});






