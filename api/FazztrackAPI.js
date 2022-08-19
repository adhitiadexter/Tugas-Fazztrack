const httpCaller = require('supertest');
const serverApi= httpCaller('http://localhost:1234');

function postUser(bodyRequestData){
    return serverApi.post('/v1/users')
    .set('Connection', 'keep-alive')
    .set('Content-Type', 'application/json')
    .send(bodyRequestData);
}

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

function deleteUser(id){
    return serverApi.delete(`/v1/users/${id}`)
    .set('Connection', 'keep-alive')
    .set('Content-Type', 'application/json')
}

module.exports = {
    postUser,
    putUser,
    getUser,
    deleteUser,
}