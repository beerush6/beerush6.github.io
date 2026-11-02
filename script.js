const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('brandon-theme');

if (savedTheme === 'light') root.classList.add('light');

function updateThemeLabel() {
  const light = root.classList.contains('light');
  toggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
}

updateThemeLabel();

toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('brandon-theme', root.classList.contains('light') ? 'light' : 'dark');
  updateThemeLabel();
});

document.querySelectorAll('.section-pill').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    if (!target) return;
    document.querySelectorAll('.section-pill').forEach((pill) => pill.classList.remove('active'));
    button.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
