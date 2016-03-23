const api = require('./src/api');
const debug = require('debug')('main');
const bunyan = require('bunyan');

const log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    // Anything with severity >= info will be printed in console
    { level: 'info', stream: process.stdout },
    // Anything >= warn will be logged to a file
    { level: 'warn', path: 'logs/main.log' },
  ],
});

// Debug messages are not shown unless debugging is explicitly enabled
debug('Adding 2 and 7 together');
api.add2(7);

debug('Asking api to get page with callback');
api.getPageWithCallback((data) => {
  log.info({ statusCode: data.statusCode }, 'Got result through callback');
});

api.performRequest().then((result) => {
  // An example showing bunyan's JSON printing capabilities - look at your console
  if (result.data.length === 3) {
    log.warn(result, 'unexpected result of length 3');
  }
}).catch(log.error);
