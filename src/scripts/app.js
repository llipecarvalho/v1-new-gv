if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('billingToggle');
  const knob = document.getElementById('billingKnob');
  const prices = document.querySelectorAll('[data-monthly]');
  let annual = false;

  const render = () => {
    if (!toggle || !knob) return;
    toggle.setAttribute('aria-pressed', String(annual));
    knob.style.transform = annual ? 'translateX(1.5rem)' : 'translateX(0)';
    
    prices.forEach((price) => {
      price.textContent = annual ? price.dataset.yearly : price.dataset.monthly;
    });
  };

  if (toggle && knob) {
    toggle.addEventListener('click', () => {
      annual = !annual;
      render();
    });
    render();
  }
});
