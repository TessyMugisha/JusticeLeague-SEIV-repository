document.addEventListener('DOMContentLoaded', async () => {
  const includes = document.querySelectorAll('[data-include]');
  await Promise.all([...includes].map(async el => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    el.outerHTML = await res.text();
  }));
});
