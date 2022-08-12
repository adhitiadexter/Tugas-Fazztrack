const chai = require('chai');
const expect = chai.expect;
const api = require('../api/FazztrackAPI');
const requestBody = require('../data/get.json');
const schema = require('../schemas/get-user-schema.json');
const requestBodyPost = require('../data/create-user.json');
let userId = "";

chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe('[@getuser] | Get User API Test', async () => {
    before(async () => {
        console.log('Before Hook');
        let response = await api.postUser(requestBodyPost);
        expect(response.status).to.equal(200);
        userId = response.body.id;
    });

    after(async () => {
        console.log('After Hook');
        let response = await api.deleteUser(userId);
        expect(response.status).to.equal(200);
    });


    it('[@get-user-api1] | berhasil update data dengan id valid', async () => {
        let response = await api.getUser(userId);
        expect(response.status).to.equal(200);
        expect(response.body).has.jsonSchema(schema);
        console.log(response.body);
    });

    it('[@get-user-api2] | Gagal get data karena invalid id', async () => {
        let response = await api.getUser('12345');
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal('ER-01');
        expect(response.body.message).to.equal('user not found');
        console.log(response.body.errorCode);
        console.log(response.body.message);
    });
});