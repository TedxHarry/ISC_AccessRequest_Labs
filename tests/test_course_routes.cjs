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
assert.equal(resolve('#/Labs_Happypath/AR-012/README'), '#/guided-labs/M02/AR-012/README');
assert.equal(resolve('#/labs/AR-012/README.md'), '#/guided-labs/M02/AR-012/README');
assert.equal(resolve('#/capstones/CAP-01/README?id=finish'), '#/guided-labs/capstones/CAP-01/README?id=finish');
assert.equal(resolve('#/Labs_Happypath/README'), '#/guided-labs/README');
assert.equal(resolve('#/labs/AR-001/README?id=engineering-practice'), '#/try-it-yourself/M01?id=ar-001');
assert.equal(resolve('#/guided-labs/AR-012/README?id=if-the-result-differs'), '#/troubleshooting/M02?id=ar-012');
assert.equal(resolve('#/guided-labs/AR-012/README?id=finish'), '#/guided-labs/M02/AR-012/README?id=finish');
assert.equal(resolve('#/troubleshooting/M02?id=ar-012'), '#/troubleshooting/M02?id=ar-012');
window.location.hash = '#/labs/AR-012/README';
events.hashchange();
assert.equal(window.location.hash, '#/guided-labs/M02/AR-012/README');

assert.equal(resolve('#/LAB-DESK?id=find-the-account-activity'), '#/reference/LAB-DESK?id=find-the-account-activity');
assert.equal(resolve('#/AUTHORING'), '#/maintainer/AUTHORING');

for (let n = 1; n <= 90; n += 1) {
  const id = 'AR-' + String(n).padStart(3, '0');
  const target = resolve('#/guided-labs/' + id + '/README');
  assert.match(target, /^#\/guided-labs\/M\d{2}\/AR-\d{3}\/README$/);
  assert(fs.existsSync(path.join(root, target.slice(2) + '.md')), target);
  assert.equal(resolve(target), target, 'canonical route must be stable');
}
for (const [old, target] of Object.entries(window.ISC_COURSE_FILE_ROUTES)) {
  assert.equal(resolve('#/' + old), '#/' + target);
  assert(fs.existsSync(path.join(root, target + '.md')), target);
}
console.log('All 90 lab redirects, relocated reference routes and moved sections passed.');
