const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const Contact = require('../models/contact-mongo').Contact;
require('sinon-mongoose');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../app');

describe('Functionnal app', () => {

  beforeEach(() => {
    // mongoimport DUMP
  });

  describe('GET /api/contacts', ()  => {
    it('should have status 200', () => {
      chai.request(app)
        .get('/api/contacts')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
       });
       
    });
  })

  describe('GET /api/contacts/1', () => {
    it('should have status 200', (done) => {
      sinon.mock(Contact)
        .expects('findById').withArgs('1')
        .resolves({prenom: 'John', nom: 'Doe'});

      chai.request(app)
        .get('/api/contacts/1')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body.prenom).to.equals('John');
          done();
       });
       
    });
  });
});