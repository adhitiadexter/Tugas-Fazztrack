const chai = require('chai');
const expect = chai.expect;
const api = require('../api/FazztrackAPI');
const scenario = require('../scenarios/update-user');
const requestBody = require('../data/update.json');
const schema = require('../schemas/update-user-schema.json');

chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(`${scenario.testcase.description}`, async () => {
    it('[@update-user-api] | berhasil update data', async () => {
        let response = await api.putUser(requestBody);
        expect(response.status).to.equal(200);
        expect(response.body).has.jsonSchema(schema);
        console.log(response.body);
    });

    it('[@update-user-age] | Gagal update data karena age value 0', async () => {
        let response = await api.putUser({...requestBody, age: 0});
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal('ER-03');
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
        console.log(response.body.errorCode);
        console.log(response.body.message);
    });

    it('[@update-user-hobbies] | Gagal update data karena hobbies empty array', async () => {
        let response = await api.putUser({...requestBody, hobbies: []});
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal('ER-03');
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
        console.log(response.body.errorCode);
        console.log(response.body.message);
    });

    it('[@update-user-nullid] | Gagal update data karena id null', async () => {
        let response = await api.putUser({...requestBody, id: null});
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal('ER-01');
        expect(response.body.message).to.equal('user not found');
        console.log(response.body.errorCode);
        console.log(response.body.message);
    });
});
