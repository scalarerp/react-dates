import { jsdom } from 'jsdom';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

chai.use(sinonChai);
chai.use(chaiEnzyme());

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
