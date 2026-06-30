// Mobile nav: toggle the hamburger menu, and close it when a link is tapped.
(function () {
  var nav = document.querySelector('nav');
  if (!nav) return;
  var btn = nav.querySelector('.navtoggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('.navlinks a, .navcta').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
