const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const events = {};
const window = {
  location: {hash: '#/README', replace(value) {this.hash = value;}},
  addEventListener(name, fn) {events[name] = fn;}
};
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/course-route-map.js'), 'utf8'), {window});
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/course-routes.js'), 'utf8'), {window, URLSearchParams});
const resolve = window.ISCCourseRoutes.resolve;
assert.equal(resolve('#/Labs_Happypath/AR-012/README'), '#/guided-labs/AR-012/README');
assert.equal(resolve('#/labs/AR-012/README.md'), '#/guided-labs/AR-012/README');
assert.equal(resolve('#/capstones/CAP-01/README?id=finish'), '#/guided-labs/capstones/CAP-01/README?id=finish');
assert.equal(resolve('#/Labs_Happypath/README'), '#/guided-labs/README');
assert.equal(resolve('#/labs/AR-001/README?id=engineering-practice'), '#/try-it-yourself/M01?id=ar-001');
assert.equal(resolve('#/guided-labs/AR-012/README?id=if-the-result-differs'), '#/troubleshooting/M02?id=ar-012');
assert.equal(resolve('#/guided-labs/AR-012/README?id=finish'), '#/guided-labs/AR-012/README?id=finish');
assert.equal(resolve('#/troubleshooting/M02?id=ar-012'), '#/troubleshooting/M02?id=ar-012');
window.location.hash = '#/labs/AR-012/README';
events.hashchange();
assert.equal(window.location.hash, '#/guided-labs/AR-012/README');
console.log('Legacy routes, moved sections and canonical routes passed.');
