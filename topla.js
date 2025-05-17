// --- Tema Toggle + localStorage ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
  }
  // Aktif link işaretle
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
});

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// --- Proje Butonları ile Sağ Paneli Güncelleme ---
const projectBtns = document.querySelectorAll('.project-btn');
const projectContent = document.querySelector('.project-content');

projectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.dataset.title;
    const info  = btn.dataset.info;
    const imgEl  = projectContent.querySelector('img.image-content');
    const src    = imgEl ? imgEl.src : 'denemefoto1.jpg';

    projectContent.innerHTML = `
      <img class="image-content" src="${src}" alt="Büyük Resim"/>
      <div class="overlay">
        <h2>${title}</h2>
        <p>${info}</p>
      </div>
    `;
  });
});
