// Mphoentle Bakery — shared JS

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Mobile sidebar toggle
  const toggle = document.querySelector('.mobile-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  // Testimonial filter tags
  const tags = document.querySelectorAll('.tag');
  tags.forEach(t => {
    t.addEventListener('click', () => {
      tags.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });

  // Contact form
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) success.style.display = 'inline';
      form.reset();
      setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
    });
  }

  // Pre-order buttons
  document.querySelectorAll('.menu-col .btn').forEach(b => {
    b.addEventListener('click', () => {
      const original = b.textContent;
      b.textContent = 'Added! 🥐';
      b.style.background = 'var(--pink-500)';
      b.style.color = 'white';
      b.style.borderColor = 'var(--pink-500)';
      setTimeout(() => {
        b.textContent = original;
        b.style.background = '';
        b.style.color = '';
        b.style.borderColor = '';
      }, 1500);
    });
  });
});
