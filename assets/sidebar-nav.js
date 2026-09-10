// Sidebar path tabs and collapsible navigation for the Docsify course.
(function () {
  function directChild(element, selector) {
    if (!element) return null;
    for (var i = 0; i < element.children.length; i += 1) {
      if (element.children[i].matches(selector)) return element.children[i];
    }
    return null;
  }

  function labelText(li) {
    var strong = directChild(li, 'strong');
    return strong ? strong.textContent.trim().toUpperCase() : '';
  }

  function setExpanded(li, expanded) {
    var childList = directChild(li, 'ul');
    var heading = directChild(li, 'strong');
    if (!childList || !heading) return;

    li.classList.toggle('sidebar-group-open', expanded);
    childList.hidden = !expanded;
    heading.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function makeCollapsible(li) {
    var childList = directChild(li, 'ul');
    var heading = directChild(li, 'strong');
    if (!childList || !heading) return;

    li.classList.add('sidebar-collapsible');
    heading.setAttribute('role', 'button');
    heading.setAttribute('tabindex', '0');

    // Default to collapsed. If the current page is inside this group,
    // expand it so the learner can see their location in the course.
    setExpanded(li, !!li.querySelector('a.active'));

    function toggle() {
      setExpanded(li, !li.classList.contains('sidebar-group-open'));
    }

    heading.onclick = toggle;
    heading.onkeydown = function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    };
  }

  function setupSidebar() {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;

    var root = directChild(nav, 'ul');
    if (!root) return;

    var topItems = Array.prototype.slice.call(root.children).filter(function (node) {
      return node.tagName === 'LI';
    });

    var happy = null;
    var engineer = null;

    topItems.forEach(function (li) {
      var text = labelText(li);
      if (text === 'HAPPY PATH') happy = li;
      if (text === 'ENGINEER PATH') engineer = li;
    });

    if (!happy || !engineer) return;

    nav.classList.add('sidebar-enhanced');
    happy.classList.add('sidebar-path-section', 'sidebar-path-happy');
    engineer.classList.add('sidebar-path-section', 'sidebar-path-engineer');

    var oldTabs = nav.querySelector('.course-path-tabs');
    if (oldTabs) oldTabs.remove();

    var tabs = document.createElement('div');
    tabs.className = 'course-path-tabs';
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Course path');

    var happyButton = document.createElement('button');
    happyButton.type = 'button';
    happyButton.className = 'course-path-tab';
    happyButton.textContent = 'Happy Path';
    happyButton.setAttribute('role', 'tab');

    var engineerButton = document.createElement('button');
    engineerButton.type = 'button';
    engineerButton.className = 'course-path-tab';
    engineerButton.textContent = 'Engineer Path';
    engineerButton.setAttribute('role', 'tab');

    tabs.appendChild(happyButton);
    tabs.appendChild(engineerButton);
    nav.insertBefore(tabs, root);

    function activate(pathName) {
      var useHappy = pathName === 'happy';
      happy.hidden = !useHappy;
      engineer.hidden = useHappy;
      happyButton.classList.toggle('active', useHappy);
      engineerButton.classList.toggle('active', !useHappy);
      happyButton.setAttribute('aria-selected', useHappy ? 'true' : 'false');
      engineerButton.setAttribute('aria-selected', useHappy ? 'false' : 'true');

      try {
        window.sessionStorage.setItem('isc-course-path', useHappy ? 'happy' : 'engineer');
      } catch (ignore) {}
    }

    var route = window.location.hash || '';
    var initial = route.indexOf('/Labs_Happypath/') !== -1 ? 'happy' :
      route.indexOf('/labs/') !== -1 || route.indexOf('/capstones/') !== -1 ? 'engineer' : null;

    if (!initial) {
      try {
        initial = window.sessionStorage.getItem('isc-course-path');
      } catch (ignore) {}
    }

    if (initial !== 'engineer') initial = 'happy';

    happyButton.onclick = function () { activate('happy'); };
    engineerButton.onclick = function () { activate('engineer'); };
    activate(initial);

    // Collapse every normal sidebar heading with child links, including Course
    // and Capstones. The two path labels themselves are replaced by the tabs.
    topItems.forEach(function (li) {
      if (li !== happy && li !== engineer) makeCollapsible(li);
    });

    [happy, engineer].forEach(function (pathSection) {
      var pathList = directChild(pathSection, 'ul');
      if (!pathList) return;

      Array.prototype.slice.call(pathList.children).forEach(function (li) {
        if (li.tagName === 'LI') makeCollapsible(li);
      });
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
    hook.doneEach(function () {
      window.setTimeout(setupSidebar, 0);
    });
  });
})();
