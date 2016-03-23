# Node.js Starter
A basic node.js app with common libraries installed and explained.

## Setup
```
git clone https://github.com/tumblbug/nodejs-basic.git
cd nodejs-basic
npm install
npm run test
```

Next, you'll probably want to edit `package.json` to add an author, change the package name and license, etc.
You can do the following to remove this project's README and delete any git history, allowing you to start fresh in a new repository. When creating a new repo for your project to live in, Github will let you know how to add your remote URL.

```
rm -rf .git README.md
git init
git add remote origin ...
```

You're now ready to start developing your app!

## Scripts
`npm` scripts are included as follows:
- `app` runs `index.js` in the root directory
- `debug` runs app with all debugging enabled, also hides all console log messages to let you focus on debugging
- `test` runs the test suite
- `test:watch` automatically re-runs your test suite when code in `src` or `test` directories change
- `lint` runs ESLint on all of your files
- `coverage` runs Istanbul to produce a test coverage report

## Linting
[ESLint](eslint.org) comes pre-installed, extending [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). Don't forget to install the appropriate [plugin for your editor](http://eslint.org/docs/user-guide/integrations).

## Testing
Testing is done using [Mocha](mochajs.org) and [Chai](chaijs.com).
[chai-as-promised](https://github.com/domenic/chai-as-promised) is included to test promise-based code.
Mocks, stubs, etc. can be done using [Sinon](sinonjs.org).
[Nock](https://github.com/node-nock/nock) is used to test HTTP requests.
Nock also disables your app from performing any HTTP requests during tests (see `test/setup.js`).

There are examples for each library in `test/lib/api-spec.js`.

## Debugging
Debugging can be done with the [debug](https://github.com/visionmedia/debug) library.
Initialize it in each of your modules with
```javascript
const debug = require('debug')('my module name');
```
and then simply use `debug` instead of `console.log`.

Add a `DEBUG=*` flag to debug all modules (same as `npm run debug`), or you can list certain modules that should be debugged, e.g. `DEBUG=api npm run app`.

## Logging
Logging is done using [bunyan](https://github.com/trentm/node-bunyan). See `index.js` for examples.

## Coverage
[Istanbul](https://github.com/gotwarlost/istanbul) is used to produce a test coverage report. Look inside the `coverage` folder after running `npm run coverage` to see the results.

## Additional Library Recommendations
- HTTP requests: [axios](https://github.com/mzabriskie/axios)
- Test code coverage: [istanbul](https://github.com/gotwarlost/istanbul)
- Deployment: [pm2](http://pm2.keymetrics.io/)
- Parsing HTML: [cheerio](https://github.com/cheeriojs/cheerio)
