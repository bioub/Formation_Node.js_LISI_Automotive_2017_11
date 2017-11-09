const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const isAdmin = require('../../middlewares/is-admin');

describe('Middleware isAdmin', () => {
  it('should call next', () => {
    var callback = sinon.spy();

    isAdmin({}, {}, callback);

    expect(callback.called).to.be.true;
  })
});