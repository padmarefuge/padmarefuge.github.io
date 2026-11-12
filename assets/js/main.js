// Mobile menu toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Footer year
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Interac e-Transfer recipient email
(function () {
  var btn = document.querySelector('[data-copy-email]');
  var status = document.querySelector('[data-copy-status]');
  if (!btn || !status) return;

  btn.addEventListener('click', function () {
    var email = btn.getAttribute('data-copy-email');
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      status.textContent = 'Please copy the email address shown above.';
      return;
    }

    navigator.clipboard.writeText(email).then(function () {
      status.textContent = 'Email address copied.';
    }).catch(function () {
      status.textContent = 'Please copy the email address shown above.';
    });
  });
})();
