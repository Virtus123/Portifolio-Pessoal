
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-hidden').forEach(el => {
    observer.observe(el);
  });

