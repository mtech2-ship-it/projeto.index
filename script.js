/* Pure JavaScript for EcoPlast Website */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const isExpanded = navMenu.classList.contains('show');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Active Link Highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('nome');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('assunto');
      const messageInput = document.getElementById('mensagem');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Simple email format regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) {
        showStatus('Por favor, informe seu nome.', 'error');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!email || !emailRegex.test(email)) {
        showStatus('Por favor, informe um e-mail válido.', 'error');
        if (emailInput) emailInput.focus();
        return;
      }

      if (!subject) {
        showStatus('Por favor, informe o assunto.', 'error');
        if (subjectInput) subjectInput.focus();
        return;
      }

      if (!message) {
        showStatus('Por favor, digite sua mensagem.', 'error');
        if (messageInput) messageInput.focus();
        return;
      }

      // Success feedback
      showStatus('Mensagem enviada com sucesso! Agradecemos o seu contato.', 'success');
      contactForm.reset();
    });
  }

  function showStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.className = 'form-status ' + type;
  }
});
