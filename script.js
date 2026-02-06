/* ======== ========== NAV SCROLL EFFECT ========= ========= */
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
if (window.scrollY > 30) {
    nav.classList.add('nav-scroll');
} else {
    nav.classList.remove('nav-scroll');
}
});

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
});
});

/* ================= HERO PARALLAX (SUBTLE) ================= */
window.addEventListener('scroll', () => {
const hero = document.querySelector('.hero');
const scroll = window.scrollY;
  hero.style.backgroundPosition = `center ${scroll * 0.15}px`;
});

/* ================= FADE IN SECTIONS ================= */
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    }
});
}, { threshold: 0.2 });

document.querySelectorAll('.section, .card').forEach(el => {
observer.observe(el);
});

/* ================= MOBILE MENU ================= */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-menu');

if (burger) {
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});
}

/* ================= IMAGE SAFE LOAD ================= */
window.addEventListener('load', () => {
document.body.classList.add('loaded');
});

