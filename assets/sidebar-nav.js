// One guided course, with separate troubleshooting and independent practice.
(function () {
  var areas = [
    {heading: 'GUIDED LABS', key: 'guided', label: 'Guided Labs', route: 'guided-labs/README'},
    {heading: 'TROUBLESHOOTING PRACTICE', key: 'troubleshooting', label: 'Troubleshooting Practice', route: 'troubleshooting/README'},
    {heading: 'TRY IT YOURSELF', key: 'practice', label: 'Try It Yourself', route: 'try-it-yourself/README'}
  ];
  function direct(element, tag) {
    return Array.prototype.find.call(element.children, function (child) {return child.tagName === tag;});
  }
  function heading(li) {
    return direct(li, 'STRONG') || (direct(li, 'P') && direct(direct(li, 'P'), 'STRONG'));
  }
  function setExpanded(li, open) {
    var list = direct(li, 'UL');
    var control = direct(li, 'BUTTON') || (direct(li, 'P') && direct(direct(li, 'P'), 'BUTTON'));
    if (!list || !control) return;
    list.hidden = !open;
    control.setAttribute('aria-expanded', String(open));
    li.classList.toggle('sidebar-group-open', open);
  }
  function isCurrent(li, route) {
    return Array.prototype.some.call(li.querySelectorAll('a'), function (link) {
      return link.getAttribute('href').split('?')[0].replace(/\.md$/, '') === route.split('?')[0];
    });
  }
  function collapse(li, initiallyOpen) {
    var list = direct(li, 'UL');
    var label = heading(li);
    if (!list || !label) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'sidebar-collapse-heading';
    button.textContent = label.textContent;
    label.replaceWith(button);
    li.classList.add('sidebar-collapsible');
    button.addEventListener('click', function () {
      var open = list.hidden;
      if (open) Array.prototype.forEach.call(li.parentElement.children, function (sibling) {
        if (sibling !== li) setExpanded(sibling, false);
      });
      setExpanded(li, open);
    });
    setExpanded(li, initiallyOpen);
  }
  function setup() {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    var root = direct(nav, 'UL');
    if (!root) return;
    var top = Array.prototype.slice.call(root.children);
    var route = window.location.hash || '';
    var active = route.indexOf('/troubleshooting/') !== -1 ? 'troubleshooting' : route.indexOf('/try-it-yourself/') !== -1 ? 'practice' : 'guided';
    var existing = nav.querySelector('.course-area-buttons');
    if (existing) {
      areas.forEach(function (area, index) {
        var section = nav.querySelector('.sidebar-area-' + area.key);
        if (section) section.hidden = active !== area.key;
        existing.children[index].setAttribute('aria-pressed', String(active === area.key));
      });
      nav.querySelectorAll('.sidebar-collapsible').forEach(function (group) {
        setExpanded(group, isCurrent(group, route));
      });
      nav.dataset.courseRoute = route;
      return;
    }
    var controls = document.createElement('div');
    controls.className = 'course-area-buttons';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Learning areas');
    areas.forEach(function (area) {
      var section = top.find(function (li) {var title = heading(li); return title && title.textContent.trim() === area.heading;});
      if (!section) return;
      section.classList.add('sidebar-area', 'sidebar-area-' + area.key);
      section.hidden = active !== area.key;
      var title = heading(section);
      if (title) title.parentElement === section ? title.hidden = true : title.parentElement.hidden = true;
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'course-area-button';
      button.textContent = area.label;
      button.setAttribute('aria-pressed', String(active === area.key));
      button.addEventListener('click', function () {window.location.hash = '#/' + area.route;});
      controls.appendChild(button);
      function decorate(list, depth) {
        if (!list) return;
        Array.prototype.forEach.call(list.children, function (li) {
          if (!heading(li) || !direct(li, 'UL')) return;
          if (depth === 0) li.classList.add('sidebar-stage');
          decorate(direct(li, 'UL'), depth + 1);
          collapse(li, isCurrent(li, route));
        });
      }
      decorate(direct(section, 'UL'), 0);
    });
    nav.insertBefore(controls, root);
    nav.classList.add('sidebar-enhanced');
    nav.dataset.courseRoute = route;
  }
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
    hook.doneEach(function () {window.requestAnimationFrame(setup);});
  });
})();
