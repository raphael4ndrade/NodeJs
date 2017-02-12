const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

let person = [{ id: 1, nome: 'Raphael' }, { id: 2, nome: 'Lucas' }, { id: 3, nome: 'Roland' }];
let car = [{ brand: 'ford', model: 'focus' }, { brand: 'honda', model: 'civic' }, { brand: 'hyundai', model: 'hb20' }];

describe('Routing test...', () => {
    it('should return a list of person for #GET/person', (done) => {
        chai.request(app).get('/person')
            .end((err, res) => {
                expect(res.body).to.be.eql(person);
                done();
            })
    });
    it('should return the person given as query for #GET/person', (done) => {
        chai.request(app).get('/person')
            .query({ nome: 'Raphael' })
            .end((err, res) => {
                expect(res.body[0]).to.be.eql(person[0]);
                done();
            });
    });
    it('should add a new person into the database for #POST/person', (done) => {
        chai.request(app).post('/person')
            .send({ id: 4, nome: 'Douglas' })
            .end((err, res) => {
                expect(res).to.be.status(200);
                expect(res.body[3]).to.be.eql(person[3]);
                done();
            });
    })
})