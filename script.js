// Mobile menu toggle script
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });



// Counter Logic
    const counters = document.querySelectorAll('.counter');
    const options = { threshold: 0.6 };
  
    const animateCounter = (entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute('data-target');
        const duration = 2000;
        const startTime = performance.now();
  
        const update = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * target);
  
          el.textContent = el.dataset.target >= 1000000 ? 
            "₹" + (current / 10000000).toFixed(2) + "Cr." : 
            current.toLocaleString() + (target > 100 ? "+" : "");
  
          if (progress < 1) requestAnimationFrame(update);
        };
  
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(animateCounter);
    }, options);
  
    counters.forEach(counter => observer.observe(counter));