// Preserve shared URLs while keeping one canonical set of walkthroughs.
(function () {
  function resolve(hash) {
    if (!hash || hash.indexOf('#/') !== 0) return hash;
    var parts = hash.slice(2).split('?');
    var route = parts[0].replace(/\.md$/, '');
    var params = new URLSearchParams(parts.slice(1).join('?'));
    route = route.replace(/^(?:Labs_Happypath|labs)\/(AR-\d+)\/README$/, 'guided-labs/$1/README');
    route = route.replace(/^(?:Labs_Happypath\/)?capstones\/(CAP-\d+)\/README$/, 'guided-labs/capstones/$1/README');
    if (route === 'Labs_Happypath/README') route = 'guided-labs/README';
    var lab = route.match(/^guided-labs\/(AR-\d+)\/README$/);
    var moved = window.ISC_COURSE_MOVED_SECTIONS || {};
    var target = lab && moved[lab[1]] && moved[lab[1]][params.get('id')];
    if (target) {
      route = target.path.replace(/\.md$/, '');
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
