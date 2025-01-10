document.getElementById('btn').addEventListener('click', () => {
  const heart = document.getElementById('heart');
  heart.classList.contains('light') ? heart.classList.replace('light', 'dark') : heart.classList.replace('dark', 'light');
});