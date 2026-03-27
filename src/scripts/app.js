document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-button');
    const panel = item.querySelector('.faq-panel');
    const icon = item.querySelector('.faq-icon');
    
    if (!button || !panel) return;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      panel.classList.toggle('hidden');
      
      if (icon) {
        if (!isExpanded) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
      }
    });
  });

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
