// Preserve shared URLs while keeping one canonical set of walkthroughs.
(function () {
  function moduleFor(number) {
    var ends = [9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 78, 90];
    if (number < 1 || number > 90) return null;
    var index = ends.findIndex(function (end) {return number <= end;}) + 1;
    return 'M' + String(index).padStart(2, '0');
  }
  function canonical(route) {
    var files = window.ISC_COURSE_FILE_ROUTES || {};
    if (files[route]) return files[route];
    route = route.replace(/^(?:Labs_Happypath|labs)\/(AR-\d+)\//, 'guided-labs/$1/');
    route = route.replace(/^(?:Labs_Happypath\/)?capstones\/(CAP-\d+)\//, 'guided-labs/capstones/$1/');
    if (route === 'Labs_Happypath/README') route = 'guided-labs/README';
    var flat = route.match(/^guided-labs\/(AR-(\d+))\/(.+)$/);
    if (flat && moduleFor(Number(flat[2]))) route = 'guided-labs/' + moduleFor(Number(flat[2])) + '/' + flat[1] + '/' + flat[3];
    return route;
  }
  function resolve(hash) {
    if (!hash || hash.indexOf('#/') !== 0) return hash;
    var parts = hash.slice(2).split('?');
    var route = canonical(parts[0].replace(/\.md$/, ''));
    var params = new URLSearchParams(parts.slice(1).join('?'));
    var lab = route.match(/^guided-labs\/M\d+\/(AR-\d+)\/README$/);
    var moved = window.ISC_COURSE_MOVED_SECTIONS || {};
    var target = lab && moved[lab[1]] && moved[lab[1]][params.get('id')];
    if (target) {
      route = canonical(target.path.replace(/\.md$/, ''));
      params.set('id', target.id);
    }
    var query = params.toString();
    return '#/' + route + (query ? '?' + query : '');
  }
  function redirect() {
    var next = resolve(window.location.hash);
    if (next !== window.location.hash) window.location.replace(next);
  }
  window.ISCCourseRoutes = {resolve: resolve};
  window.addEventListener('hashchange', redirect);
  redirect();
})();
