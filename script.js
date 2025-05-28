const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    // Optionally update colors for light theme here or reload CSS
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.account-card');

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = title.includes(value) ? "flex" : "none";
  });
});
