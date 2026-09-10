// Sidebar path tabs and collapsible navigation for the Docsify course.
(function () {
  function directChild(element, tagName) {
    if (!element) return null;
    tagName = tagName.toUpperCase();
    for (var i = 0; i < element.children.length; i += 1) {
      if (element.children[i].tagName === tagName) return element.children[i];
    }
    return null;
  }

  // Docsify can render bold-only sidebar labels as either a direct <strong>
  // child or inside a paragraph. Support both forms.
  function headingInfo(li) {
    if (!li) return null;

    for (var i = 0; i < li.children.length; i += 1) {
      var child = li.children[i];

      if (child.tagName === 'STRONG') {
        return { control: child, shell: child, text: child.textContent.trim() };
      }

      if (child.tagName === 'P') {
        for (var j = 0; j < child.children.length; j += 1) {
          if (child.children[j].tagName === 'STRONG') {
            return {
              control: child.children[j],
              shell: child,
              text: child.children[j].textContent.trim()
            };
          }
        }
      }
    }

    return null;
  }

  function labelText(li) {
    var info = headingInfo(li);
    return info ? info.text.toUpperCase() : '';
  }

  function setExpanded(li, expanded) {
    var childList = directChild(li, 'ul');
    var info = headingInfo(li);
    if (!childList || !info) return;

    li.classList.toggle('sidebar-group-open', expanded);
    childList.hidden = !expanded;
    info.control.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function makeCollapsible(li) {
    var childList = directChild(li, 'ul');
    var info = headingInfo(li);
    if (!childList || !info) return;

    li.classList.add('sidebar-collapsible');
    info.control.classList.add('sidebar-collapse-heading');
    info.shell.classList.add('sidebar-collapse-heading-shell');
    info.control.setAttribute('role', 'button');
    info.control.setAttribute('tabindex', '0');

    // Every group starts collapsed by default.
    setExpanded(li, false);

    function toggle(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      setExpanded(li, !li.classList.contains('sidebar-group-open'));
    }

    info.control.onclick = toggle;
    info.control.onkeydown = function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        toggle(event);
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

    var course = null;
    var happy = null;
    var engineer = null;

    topItems.forEach(function (li) {
      var text = labelText(li);
      if (text === 'COURSE') course = li;
      if (text === 'HAPPY PATH') happy = li;
      if (text === 'ENGINEER PATH') engineer = li;
    });

    if (!happy || !engineer) return;

    nav.classList.add('sidebar-enhanced');
    happy.classList.add('sidebar-path-section', 'sidebar-path-happy');
    engineer.classList.add('sidebar-path-section', 'sidebar-path-engineer');

    if (course) makeCollapsible(course);
    makeCollapsible(happy);
    makeCollapsible(engineer);

    [happy, engineer].forEach(function (pathSection) {
      var pathList = directChild(pathSection, 'ul');
      if (!pathList) return;

      Array.prototype.slice.call(pathList.children).forEach(function (li) {
        if (li.tagName === 'LI' && headingInfo(li) && directChild(li, 'ul')) {
          makeCollapsible(li);
        }
      });
    });

    // Capstones and any other top-level grouped section are also collapsible.
    topItems.forEach(function (li) {
      if (li !== course && li !== happy && li !== engineer && headingInfo(li) && directChild(li, 'ul')) {
        makeCollapsible(li);
      }
    });

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

      // Switching tabs never auto-expands the selected path.
      setExpanded(useHappy ? happy : engineer, false);

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
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
    hook.doneEach(function () {
      window.requestAnimationFrame(function () {
        setupSidebar();
      });
    });
  });
})();
