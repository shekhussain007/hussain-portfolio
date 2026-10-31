/* ==========================================================
   PORTFOLIO SCRIPTS
   Features: Custom Cursor, Scroll Reveal, Sliders & Admin Trigger
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Custom Smooth Cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      const { clientX: posX, clientY: posY } = e;
      
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    });

    const hoverTargets = document.querySelectorAll('a, button, .project-card, .btn');
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.borderColor = 'var(--text-primary)';
      });
      target.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.borderColor = 'var(--accent)';
      });
    });
  }

  // 2. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el) => revealObserver.observe(el));

  // 3. Project Slider / Carousel Controls
  const sliderTracks = document.querySelectorAll('.slider-track');
  sliderTracks.forEach((track) => {
    const prevBtn = track.parentElement.querySelector('.slider-btn.prev');
    const nextBtn = track.parentElement.querySelector('.slider-btn.next');

    if (prevBtn && nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 340, behavior: 'smooth' });
      });

      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -340, behavior: 'smooth' });
      });
    }
  });

  // 4. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 5. Admin / Secret Modal Trigger
  const adminBtn = document.querySelector('.admin-trigger') || document.getElementById('adminTrigger');
  const adminModal = document.getElementById('adminModal');

  if (adminBtn && adminModal) {
    adminBtn.addEventListener('click', (e) => {
      e.preventDefault();
      adminModal.classList.toggle('active');
    });

    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal) {
        adminModal.classList.remove('active');
      }
    });
  }
});
