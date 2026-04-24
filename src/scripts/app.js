// Lógica Essencial para Landing Page
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMobileMenu() {
        if (!mobileMenu) return;
        const isOpen = !mobileMenu.classList.contains('opacity-0');
        
        if (!isOpen) {
            mobileMenu.classList.remove('pointer-events-none', 'opacity-0');
            mobileMenu.classList.add('opacity-100');
        } else {
            mobileMenu.classList.add('pointer-events-none', 'opacity-0');
            mobileMenu.classList.remove('opacity-100');
        }
    }

    mobileMenuBtn?.addEventListener('click', toggleMobileMenu);
    closeMenuBtn?.addEventListener('click', toggleMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));

    // Scroll Animations (Reveal)
    const revealElements = document.querySelectorAll('.reveal-off');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-on');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});
