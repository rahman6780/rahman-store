// ========================================
// RAHMAN STORE — INTERACTIONS
// ========================================

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    menuBtn.textContent = navLinks.classList.contains('active')
        ? '✕'
        : '☰';
});

// Close mobile menu after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.textContent = '☰';
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    '.product-card, .about-content, .news-item, .contact-section'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

// Prevent placeholder links from jumping to the top
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
