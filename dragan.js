(function () {
  var card = document.querySelector('.member.cat');
  if (!card) return;
  var interaction = card.querySelector('.cat-interaction');
  var button = card.querySelector('.pet-dragan');
  var response = card.querySelector('.cat-response');
  var portrait = card.querySelector('.ava');
  if (!interaction || !button || !response || !portrait) return;

  var remarks = [
    'Prrr. Carry on.',
    'Break time. Management insists.',
    'qqqqqq. Reviewed.',
    'Approved. Where’s dinner?'
  ];
  var next = 0;
  var reaction;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  button.addEventListener('click', function () {
    response.textContent = remarks[next];
    next = (next + 1) % remarks.length;
    if (reaction) reaction.cancel();
    if (!reducedMotion.matches && portrait.animate) {
      reaction = portrait.animate([
        { transform: 'rotate(0)' },
        { transform: 'rotate(-8deg)', offset: 0.4 },
        { transform: 'rotate(0)' }
      ], { duration: 420, easing: 'ease-in-out' });
    }
  });

  reducedMotion.addEventListener('change', function () {
    if (reducedMotion.matches && reaction) reaction.cancel();
  });
  interaction.hidden = false;
})();
