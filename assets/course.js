(function () {
  function decorateCoursePage() {
    var section = document.querySelector('.markdown-section');
    if (!section) return;

    var meta = [];
    var paragraphs = section.querySelectorAll('p');

    paragraphs.forEach(function (p) {
      var first = p.firstElementChild;
      if (!first || first.tagName !== 'STRONG') return;

      var label = first.textContent.trim().replace(/\s+/g, ' ');
      var normalized = label.toLowerCase();

      if (normalized === 'check:' || normalized === 'check') {
        p.classList.add('course-callout', 'check');
      } else if (
        normalized === 'important:' ||
        normalized === 'important' ||
        normalized === 'warning:' ||
        normalized === 'warning'
      ) {
        p.classList.add('course-callout', 'warning');
      } else if (
        normalized === 'note:' ||
        normalized === 'note' ||
        normalized === 'tip:' ||
        normalized === 'tip'
      ) {
        p.classList.add('course-callout', 'info');
      } else if (
        normalized === 'caution:' ||
        normalized === 'caution' ||
        normalized === 'do not:' ||
        normalized === 'do not'
      ) {
        p.classList.add('course-callout', 'danger');
      }

      if (normalized === 'level:' || normalized === 'level') {
        meta.push({ label: 'Level', value: p.textContent.replace(first.textContent, '').trim() });
        p.style.display = 'none';
      }
    });

    if (meta.length) {
      var h1 = section.querySelector('h1');
      if (h1 && !section.querySelector('.course-meta')) {
        var wrap = document.createElement('div');
        wrap.className = 'course-meta';

        meta.forEach(function (item) {
          var chip = document.createElement('span');
          chip.className = 'meta-chip';
          chip.textContent = item.label + ': ' + item.value;
          wrap.appendChild(chip);
        });

        h1.insertAdjacentElement('afterend', wrap);
      }
    }

    section.querySelectorAll('a').forEach(function (a) {
      if (/^https?:\/\//i.test(a.getAttribute('href') || '') && !a.href.includes(location.host)) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  function collapsePageSections() {
    document.querySelectorAll('.sidebar-nav .app-sub-sidebar').forEach(function (sub) {
      var parent = sub.parentElement;
      if (!parent) return;

      var labLink = null;
      Array.prototype.forEach.call(parent.children, function (child) {
        if (!labLink && child.tagName === 'A') labLink = child;
      });
      if (!labLink) return;

      sub.hidden = true;
      labLink.setAttribute('aria-expanded', 'false');

      if (labLink.dataset.courseSectionToggle === 'true') return;
      labLink.dataset.courseSectionToggle = 'true';

      var indicator = document.createElement('span');
      indicator.className = 'course-section-indicator';
      indicator.textContent = '▸';
      indicator.setAttribute('aria-hidden', 'true');
      indicator.style.float = 'right';
      indicator.style.marginLeft = '0.6rem';
      indicator.style.opacity = '0.7';
      labLink.appendChild(indicator);

      labLink.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var willOpen = sub.hidden;
        sub.hidden = !willOpen;
        labLink.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        indicator.textContent = willOpen ? '▾' : '▸';
      });
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
    hook.doneEach(function () {
      window.requestAnimationFrame(function () {
        decorateCoursePage();
        collapsePageSections();
      });
    });
  });
})();
