    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
    const links = menu.querySelectorAll('a');
    const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const activate = (id) => {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    };
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activate(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => s && obs.observe(s));
    links.forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));    
    document.getElementById('year').textContent = new Date().getFullYear();
