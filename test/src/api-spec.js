'use strict';
const api = require('../../src/api');
const nock = require('nock');

describe('Api', () => {
  describe('#add2', () => {
    // Should syntax
    it('should add 2 to whatever number is given', () => {
      api.add2(2).should.equal(4);
    });

    // Expect syntax
    it('should be able to accept negative numbers', () => {
      expect(api.add2(-2)).to.equal(0);
    });
  });

  describe('#performRequest', () => {
    // Using 'eventually' from chai-as-promised
    it('should return an array of length 3', () => {
      expect(api.performRequest()).to.eventually.have.length(3);
    });

    it('should not magically crash after 200 ms', (done) => {
      api.performRequest();
      setTimeout(done, 200);
    });
  });

  describe('#getPageWithCallback', () => {
    it('makes a request to Google', (done) => {
      const scope = nock('http://www.google.com').get('/').reply(200, 'Hello from Google');

      api.getPageWithCallback(() => {
        scope.done();
        done();
      });
    });
  });
});
