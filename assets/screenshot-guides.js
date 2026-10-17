// Describe real screenshots without altering their source pixels.
(function () {
  var guides = {
    '02-account-schema.png': [
      {x:25, y:69, text:'Account ID: employeeNumber identifies the HR source account. Compare the full field name with the schema table; this screenshot truncates the label.'},
      {x:25, y:76, text:'Account Name: userName supplies the account display/name value. It is a separate schema designation from Account ID.'},
      {x:92, y:21, text:'Edit Schema changes the schema settings. An existing saved schema is not proof that a new file has been imported.'}
    ],
    'AR-004-04-correlation.png': [
      {x:31, y:83, text:'Identity side: Employee Number is the identity value supplied by identificationNumber.'},
      {x:64, y:83, text:'Account side: employeeID is the imported AD account attribute. Compare the actual values before expecting a match.'},
      {x:89, y:41, text:'The recommendation refresh shows Error. That status is separate from this configured criterion; inspect saved criteria and the actual aggregation/link result.'}
    ]
  };
  function annotate() {
    document.querySelectorAll('.markdown-section img').forEach(function (img) {
      var name = new URL(img.src, location.href).pathname.split('/').pop();
      var notes = guides[name];
      if (!notes || img.closest('.annotated-screenshot')) return;
      var figure = document.createElement('figure'); figure.className = 'annotated-screenshot';
      var media = document.createElement('div');media.className = 'screenshot-points';
      var parent = img.parentNode;
      if (parent.tagName === 'P' && parent.childElementCount === 1) {
        parent.parentNode.insertBefore(figure, parent);media.appendChild(img);parent.remove();
      } else {parent.insertBefore(figure, img);media.appendChild(img);}
      figure.appendChild(media);
      var caption = document.createElement('figcaption');
      var list = document.createElement('ol');
      notes.forEach(function (note, i) {
        var badge = document.createElement('span');badge.className = 'screenshot-point';badge.textContent = String(i + 1);
        badge.style.left = note.x + '%';badge.style.top = note.y + '%';badge.setAttribute('aria-hidden', 'true');media.appendChild(badge);
        var row = document.createElement('li');row.textContent = note.text;list.appendChild(row);
      });
      caption.appendChild(list);
      var full = document.createElement('a');full.href = img.src;full.textContent = 'Open full-size screenshot';full.target = '_blank';full.rel = 'noopener noreferrer';
      caption.appendChild(full);figure.appendChild(caption);
    });
  }
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {hook.doneEach(function () {window.requestAnimationFrame(annotate);});});
})();
