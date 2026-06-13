const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const year = document.querySelector('#year');
const contactForm = document.querySelector('#contactForm');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const project = document.querySelector('#project').value;
  const message = document.querySelector('#message').value.trim();

  const subject = encodeURIComponent(`Tee Squared project request - ${project}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:teesquaredmpls@gmail.com?subject=${subject}&body=${body}`;
});

const revealItems = document.querySelectorAll('.hero-text, .hero-art, .section, .card, .value-box, .contact-form, .contact-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});
