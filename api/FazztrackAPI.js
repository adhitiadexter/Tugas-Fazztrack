const httpCaller = require('supertest');
const serverApi= httpCaller('http://localhost:1234');

function putUser(bodyRequestData){
    return serverApi.put('/v1/users')
    .set('Connection', 'keep-alive')
    .set('Content-Type', 'application/json')
    .send(bodyRequestData);
}

function getUser(id){
    return serverApi.get(`/v1/users/${id}`)
    .set('Connection', 'keep-alive')
    .set('Content-Type', 'application/json')
}

module.exports = {
    putUser,
    getUser,
}