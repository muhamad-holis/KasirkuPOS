// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
