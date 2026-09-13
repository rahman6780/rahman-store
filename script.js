// ========================================
// RAHMANHUB — INTERACTIONS
// ========================================

// Mobile navigation
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');

        menuBtn.textContent = isOpen ? '✕' : '☰';
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Tutup menu setelah memilih navigasi
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.textContent = '☰';
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    '.project-card, .section-content, .interest-item, .update-item, .contact-section'
);

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    // Fallback untuk browser yang tidak mendukung IntersectionObserver
    revealElements.forEach((element) => {
        element.classList.add('visible');
    });
}

// Mencegah link placeholder "#" melompat ke atas
document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
