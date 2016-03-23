'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const nock = require('nock');

chai.should(); // Enable should syntax
chai.use(chaiAsPromised);
chai.use(sinonChai);

nock.disableNetConnect();

global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
