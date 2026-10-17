// Optional completion marks and resume, kept on this browser only.
(function () {
  var key = 'isc-access-request-learning-v1';
  function valid(id) {return /^AR-\d{3}$/.test(id || '') && Number(id.slice(3)) >= 1 && Number(id.slice(3)) <= 90;}
  function load() {
    try {
      var value = JSON.parse(localStorage.getItem(key) || '{}');
      return {last: valid(value.last) ? value.last : null, completed: Array.isArray(value.completed) ? value.completed.filter(valid).filter(function (id, i, ids) {return ids.indexOf(id) === i;}) : []};
    } catch (ignore) {return {last: null, completed: []};}
  }
  function save(state) {try {localStorage.setItem(key, JSON.stringify(state)); return true;} catch (ignore) {return false;}}
  function route(id) {
    var ends = [9,15,21,27,33,39,45,51,57,63,69,75,78,90];
    var module = 'M' + String(ends.findIndex(function (end) {return Number(id.slice(3)) <= end;}) + 1).padStart(2, '0');
    return '#/guided-labs/' + module + '/' + id + '/README';
  }
  function render() {
    var section = document.querySelector('.markdown-section');
    var title = section && section.querySelector('h1');
    if (!title || section.querySelector('.learning-progress')) return;
    var state = load();
    var match = window.location.hash.match(/^#\/guided-labs\/M\d{2}\/(AR-\d{3})\/README(?:\.md)?(?:\?|$)/);
    var panel = document.createElement('div');
    panel.className = 'learning-progress';
    if (match && valid(match[1])) {
      var id = match[1]; state.last = id;
      var stored = save(state);
      var button = document.createElement('button');
      button.type = 'button';
      var status = document.createElement('span');
      status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
      function update() {
        var complete = state.completed.indexOf(id) !== -1;
        button.textContent = complete ? 'Mark not complete' : 'Mark complete';
        button.setAttribute('aria-pressed', String(complete));
        status.textContent = (complete ? 'Marked complete. ' : 'Mark after the result and finish checks pass. ') + (stored ? 'Saved on this browser.' : 'Storage unavailable; this mark lasts for this page only.');
      }
      button.addEventListener('click', function () {
        var index = state.completed.indexOf(id);
        if (index === -1) state.completed.push(id); else state.completed.splice(index, 1);
        stored = save(state); update();
      });
      update();panel.appendChild(button);panel.appendChild(status);
    } else if (/^(?:#\/?)?$/.test(window.location.hash) || /^#\/(?:README|START-HERE|guided-labs\/README)(?:\.md)?(?:\?|$)/.test(window.location.hash)) {
      var count = document.createElement('span');
      count.textContent = state.completed.length + ' of 90 guided labs marked complete on this browser.';
      panel.appendChild(count);
      if (state.last) {
        var link = document.createElement('a'); link.href = route(state.last);
        link.textContent = 'Continue ' + state.last; panel.appendChild(link);
      }
    } else return;
    title.insertAdjacentElement('afterend', panel);
  }
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {hook.doneEach(function () {window.requestAnimationFrame(render);});});
})();
