const chai = require('chai');
const expect = chai.expect;
const api = require('../api/FazztrackAPI');
const requestBody = require('../data/get.json');
const schema = require('../schemas/get-user-schema.json');

chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe('[@getuser] | Get User API Test', async () => {
    it('[@get-user-api1] | berhasil update data dengan id valid', async () => {
        let response = await api.getUser('6e42b695-fbb0-4447-b13f-48fa48fe8a0c');
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