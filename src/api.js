const _ = require('lodash/fp');
const http = require('http');
const debug = require('debug')('api');
const bunyan = require('bunyan');

// Only logs to console
const log = bunyan.createLogger({ name: 'api' });

log.info('Loading api module...');

const add2 = _.add(2);

const performRequest = () => Promise.resolve({ data: [1, 2, 3] });

const getPageWithCallback = (cb) => {
  debug('Requesting http://www.google.com/...');
  http.get('http://www.google.com/', (data) => {
    debug('Got response, running callback.');
    cb(data);
  });
};

module.exports = {
  add2,
  performRequest,
  getPageWithCallback,
};
