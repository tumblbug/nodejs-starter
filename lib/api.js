const _ = require('lodash/fp');
const http = require('http');

const add2 = _.add(2);
const performRequest = () => Promise.resolve({ data: [1, 2, 3] });
const getPageWithCallback = (cb) => http.get('http://www.google.com/', cb);

module.exports = {
  add2,
  performRequest,
  getPageWithCallback,
};
